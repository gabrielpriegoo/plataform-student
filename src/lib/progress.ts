import { useEffect, useState } from "react";

export type Attempt = {
  subjectSlug: string;
  questionId: string;
  selectedIndex: number;
  correct: boolean;
  answeredAt: number;
  /** Agrupa tentativas de um mesmo round de quiz. */
  attemptSetId: string;
  /** 0..1 — fração de acerto da questão. Hoje sempre 0 ou 1. */
  score: number;
};

const KEY = "uni-quiz-attempts-v1";

function read(): Attempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "[]") as Partial<Attempt>[];
    return raw.map((a) => ({
      subjectSlug: a.subjectSlug ?? "",
      questionId: a.questionId ?? "",
      selectedIndex: a.selectedIndex ?? 0,
      correct: !!a.correct,
      answeredAt: a.answeredAt ?? 0,
      // Defaults para tentativas antigas sem os novos campos.
      // Cada timestamp vira seu próprio "set" — preserva comportamento anterior
      // e evita misturar tentativas de rounds diferentes.
      attemptSetId: a.attemptSetId ?? String(a.answeredAt ?? Math.random()),
      score: typeof a.score === "number" ? a.score : a.correct ? 1 : 0,
    }));
  } catch {
    return [];
  }
}

function write(items: Attempt[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("uni-quiz-attempts-updated"));
}

/** Gera um identificador novo para um round de quiz (ex: ao "Refazer"). */
export function startNewAttemptSet(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/**
 * Grava uma tentativa respeitando a regra **max-wins**:
 * se já existir uma tentativa para a mesma questão com score
 * maior ou igual, ela é preservada — não regredir.
 */
export function recordAttempt(a: Attempt) {
  const all = read();
  const idx = all.findIndex(
    (x) => x.subjectSlug === a.subjectSlug && x.questionId === a.questionId,
  );
  if (idx === -1) {
    all.push(a);
  } else if (a.score > all[idx].score) {
    all[idx] = a;
  }
  // else: tentativa anterior é melhor ou igual — mantém.
  write(all);
}

export function clearSubject(slug: string) {
  write(read().filter((x) => x.subjectSlug !== slug));
}

export function clearAll() {
  write([]);
}

export function useAttempts(): Attempt[] {
  const [items, setItems] = useState<Attempt[]>([]);
  useEffect(() => {
    setItems(read());
    const handler = () => setItems(read());
    window.addEventListener("uni-quiz-attempts-updated", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("uni-quiz-attempts-updated", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);
  return items;
}

export function statsFor(slug: string, attempts: Attempt[], total: number) {
  const subj = attempts.filter((a) => a.subjectSlug === slug);
  const answered = subj.length;
  const correct = subj.filter((a) => a.correct).length;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  const progress = total ? Math.round((answered / total) * 100) : 0;
  return { answered, correct, accuracy, progress, total };
}

export function statsForQuiz(
  slug: string,
  attempts: Attempt[],
  total: number,
  questionIds: Set<string>
) {
  const quizAttempts = attempts.filter(
    (a) => a.subjectSlug === slug && questionIds.has(a.questionId)
  );
  const answered = new Set(quizAttempts.map((a) => a.questionId)).size;
  const correct = quizAttempts.filter((a) => a.correct).length;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  const progress = total ? Math.round((answered / total) * 100) : 0;
  return { answered, correct, accuracy, progress, total };
}
