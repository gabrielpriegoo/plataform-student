import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Target,
  TrendingUp,
  ChevronRight,
  Circle,
} from "lucide-react";
import { getSubject, subjects, type Question } from "@/lib/subjects";
import { useAttempts, statsFor, statsForQuiz } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/materias/$slug")({
  head: ({ params }) => {
    const s = getSubject(params.slug);
    const title = s ? `${s.name} — Atheneum` : "Matéria — Atheneum";
    const desc = s
      ? `Resumo e questões de ${s.name}. Acompanhe seu desempenho.`
      : "Conteúdo da matéria.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const subject = getSubject(params.slug);
    if (!subject) throw notFound();
    return { subject };
  },
  component: SubjectPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold">Matéria não encontrada</h1>
      <p className="mt-2 text-muted-foreground">Confira as matérias disponíveis.</p>
      <Button asChild className="mt-6">
        <Link to="/">Voltar ao início</Link>
      </Button>
    </div>
  ),
});

function SubjectPage() {
  const { subject } = Route.useLoaderData();
  const attempts = useAttempts();
  const st = statsFor(subject.slug, attempts, subject.questions.length);

  // Agrupa questões por questionário
  const quizzes = useMemo(() => {
    const groups: Record<number, Question[]> = { 1: [], 2: [], 3: [], 4: [] };
    for (const q of subject.questions) {
      if (!groups[q.quiz]) groups[q.quiz] = [];
      groups[q.quiz].push(q);
    }
    return Object.entries(groups)
      .filter(([, qs]) => qs.length > 0)
      .map(([quiz, qs]) => ({ quiz: Number(quiz) as 1 | 2 | 3 | 4, questions: qs }));
  }, [subject]);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Voltar
      </Link>

      {/* Header */}
      <header className="mt-6">
        <Badge variant="secondary" className="rounded-full text-xs">{subject.category}</Badge>
        <h1 className="mt-1.5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {subject.name}
        </h1>
      </header>

      {/* Big numbers (Stats) */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <StatCard
          icon={<Target className="h-4 w-4" />}
          label="Respondidas"
          value={`${st.answered}/${st.total}`}
        />
        <StatCard
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Corretas"
          value={String(st.correct)}
          success={st.correct > 0}
        />
        <StatCard
          icon={<TrendingUp className="h-4 w-4" />}
          label="Aproveitamento"
          value={st.answered > 0 ? `${st.accuracy}%` : "—"}
          highlight={st.accuracy >= 70}
        />
      </div>
      <Progress value={st.progress} className="mt-4 h-1.5" />

      {/* Resumo da matéria — sempre visível, sem tabs */}
      <section className="mt-10">
        <SectionHeading>
          Resumo da matéria
        </SectionHeading>
        <article className="rounded-xl border bg-card p-5 sm:p-6">
          <p className="leading-relaxed text-muted-foreground">{subject.summary}</p>

          <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tópicos cobertos
          </h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {subject.topics.map((t: string) => (
              <li
                key={t}
                className="flex items-start gap-2.5 rounded-lg border bg-background/50 px-3 py-2.5 text-sm"
              >
                <Circle className="mt-1 h-1.5 w-1.5 shrink-0 fill-primary text-primary" />
                <span className="min-w-0 text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* Questionários — grid de cards com progresso local */}
      <section className="mt-10">
        <SectionHeading>
          Questionários
        </SectionHeading>
        <div className="space-y-3">
          {quizzes.map(({ quiz, questions }) => {
            const quizQuestionIds = new Set(questions.map((q) => q.id));
            const quizSt = statsForQuiz(subject.slug, attempts, questions.length, quizQuestionIds);
            const isComplete = quizSt.progress === 100;
            const isStarted = quizSt.answered > 0;
            const topicTitle =
              subject.topics[quiz - 1]?.replace(/^Questionário \d+ — /, "") ||
              `Questionário ${quiz}`;
            return (
              <Link
                key={quiz}
                to="/quiz/$slug/$quiz"
                params={{ slug: subject.slug, quiz: String(quiz) }}
                search={{ finished: false }}
                className="group flex items-center gap-4 overflow-hidden rounded-xl border bg-card p-4 transition-colors hover:border-primary/25 hover:shadow-sm"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border bg-background font-display text-base font-semibold text-primary shadow-sm">
                  Q{quiz}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Questionário {quiz}
                    </span>
                    {isComplete && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-medium text-success">
                        <CheckCircle2 className="h-3 w-3" />
                        Completo
                      </span>
                    )}
                  </div>
                  <h3 className="mt-0.5 font-display text-base font-semibold text-foreground line-clamp-1">
                    {topicTitle}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{questions.length} questões</span>
                    <span>•</span>
                    <span>
                      {isStarted
                        ? `${quizSt.answered}/${questions.length} respondidas · ${quizSt.accuracy}% acerto`
                        : "Não iniciado"}
                    </span>
                  </div>
                  <Progress
                    value={quizSt.progress}
                    className={cn(
                      "mt-2 h-1 max-w-xs",
                      isComplete && "[&>div]:bg-success"
                    )}
                  />
                </div>

                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center gap-2 border-b pb-3">
      <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </h2>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  highlight,
  success,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
  success?: boolean;
}) {
  return (
    <div className="rounded-lg border bg-card px-4 py-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className={cn("mt-1 font-display text-xl font-semibold", highlight && "text-primary", success && "text-success")}>
        {value}
      </div>
    </div>
  );
}

// Ensure subjects import is used at module level for tree-shaking clarity
void subjects;
