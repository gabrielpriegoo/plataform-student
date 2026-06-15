import { createFileRoute, Link, notFound, useNavigate, useSearch } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Zap,
  FileText,
  Quote,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  Trophy,
  Target,
  TrendingUp,
  BookOpen,
  Check,
  X,
  BarChart3,
} from "lucide-react";
import { getSubject, type Question, type QuestionType } from "@/lib/subjects";
import { useAttempts, recordAttempt, startNewAttemptSet } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quiz/$slug/$quiz")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      finished: search.finished === true,
    };
  },
  head: ({ params }) => {
    const s = getSubject(params.slug);
    const quizNum = params.quiz;
    const title = s
      ? `${s.name} — Questionário ${quizNum}`
      : "Questionário — Atheneum";
    return {
      meta: [
        { title },
        { name: "description", content: `Responda ao questionário ${quizNum} de ${s?.name ?? "matéria"}.` },
        { property: "og:title", content: title },
      ],
    };
  },
  loader: ({ params }) => {
    const subject = getSubject(params.slug);
    if (!subject) throw notFound();
    const quizNum = Number(params.quiz) as 1 | 2 | 3 | 4;
    const questions = subject.questions.filter((q) => q.quiz === quizNum);
    if (questions.length === 0) throw notFound();
    return { subject, quiz: quizNum, questions };
  },
  component: QuizPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold">Questionário não encontrado</h1>
      <p className="mt-2 text-muted-foreground">Verifique os questionários disponíveis.</p>
      <Button asChild className="mt-6">
        <Link to="/">Voltar ao início</Link>
      </Button>
    </div>
  ),
});

const TYPE_LABEL: Record<QuestionType, string> = {
  multipla: "Múltipla escolha",
  vf: "Verdadeiro ou Falso",
  assercao: "Asserção-Razão",
  afirmativas: "Afirmativas",
};

const TYPE_BADGE: Record<QuestionType, string> = {
  multipla: "bg-primary/10 text-primary",
  vf: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  assercao: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  afirmativas: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
};

function TypeBadge({ type }: { type: QuestionType }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
        TYPE_BADGE[type]
      )}
    >
      <FileText className="h-3 w-3" />
      {TYPE_LABEL[type]}
    </span>
  );
}

function QuizPage() {
  const { subject, quiz, questions } = Route.useLoaderData();
  const search = useSearch({ from: "/quiz/$slug/$quiz" });
  const navigate = useNavigate({ from: "/quiz/$slug/$quiz" });
  const attempts = useAttempts();

  const subjAttempts = useMemo(
    () => attempts.filter((a) => a.subjectSlug === subject.slug),
    [attempts, subject.slug],
  );

  // Filtra tentativas APENAS para as questões do quiz atual
  const quizQuestionIds = useMemo(
    () => new Set(questions.map((q) => q.id)),
    [questions],
  );
  const quizAttempts = useMemo(
    () => subjAttempts.filter((a) => quizQuestionIds.has(a.questionId)),
    [subjAttempts, quizQuestionIds],
  );

  // Cada "round" do quiz (entrada inicial ou refazer) tem um attemptSetId.
  // A UI acompanha só o set atual; o card da matéria vê o melhor histórico.
  const [attemptSetId, setAttemptSetId] = useState<string>(() => startNewAttemptSet());
  const currentSetAttempts = useMemo(
    () => quizAttempts.filter((a) => a.attemptSetId === attemptSetId),
    [quizAttempts, attemptSetId],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const currentQuestion = questions[activeIndex] ?? questions[0];
  // Tentativa já registrada NESTE set (estado "atual" da UI).
  const currentAttempt = currentSetAttempts.find(
    (a) => a.questionId === currentQuestion.id,
  );
  // Melhor tentativa histórica da questão (pode vir de um set anterior).
  const previousBest = quizAttempts.find(
    (a) => a.questionId === currentQuestion.id,
  );

  const answeredCount = useMemo(
    () => new Set(currentSetAttempts.map((a) => a.questionId)).size,
    [currentSetAttempts]
  );

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < questions.length - 1) setActiveIndex(activeIndex + 1);
  };

  const handleFinish = () => {
    navigate({ search: { finished: true } });
  };

  const handleRefazer = () => {
    setAttemptSetId(startNewAttemptSet());
    setActiveIndex(0);
    navigate({ search: { finished: false } });
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
      {search.finished ? (
        <QuizResults
          subject={subject}
          quiz={quiz}
          questions={questions}
          attempts={currentSetAttempts}
          onRefazer={handleRefazer}
        />
      ) : (
        <>
      <div className="mb-4 flex items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Quote className="h-3.5 w-3.5" />
          <span>
            Questionário {quiz} • {answeredCount}/{questions.length} respondidas
          </span>
        </div>
      </div>

      {/* Barra de progresso com dots clicáveis */}
      <div className="mb-6 flex items-center gap-1.5">
        {questions.map((q, i) => {
          const answered = currentSetAttempts.some((a) => a.questionId === q.id);
          const isCurrent = i === activeIndex;
          return (
            <button
              key={q.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Ir para questão ${i + 1}`}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-all",
                isCurrent
                  ? "bg-primary"
                  : answered
                  ? "bg-success"
                  : "bg-muted-foreground/25 hover:bg-muted-foreground/40"
              )}
            />
          );
        })}
      </div>

      {/* Questão atual */}
      <QuestionCard
        key={currentQuestion.id}
        index={activeIndex + 1}
        total={questions.length}
        subjectSlug={subject.slug}
        question={currentQuestion}
        currentAttempt={currentAttempt}
        previousBest={previousBest}
        attemptSetId={attemptSetId}
      />

      {/* Navegação Anterior / Próxima */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="gap-1.5"
        >
          <ChevronLeft className="h-4 w-4" />
          Anterior
        </Button>

        <div className="text-xs text-muted-foreground">
          Questão {activeIndex + 1} de {questions.length}
        </div>

        <Button
          onClick={activeIndex === questions.length - 1 ? handleFinish : handleNext}
          className="gap-1.5"
        >
          {activeIndex === questions.length - 1 ? "Finalizar" : "Próxima"}
          {activeIndex !== questions.length - 1 && <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      </>
      )}
    </div>
  );
}

function QuestionCard({
  index,
  total,
  subjectSlug,
  question,
  currentAttempt,
  previousBest,
  attemptSetId,
}: {
  index: number;
  total: number;
  subjectSlug: string;
  question: Question;
  currentAttempt?: { selectedIndex: number; correct: boolean; attemptSetId: string };
  previousBest?: { selectedIndex: number; correct: boolean };
  attemptSetId: string;
}) {
  const [selected, setSelected] = useState<number | null>(
    currentAttempt?.selectedIndex ?? null,
  );
  // Painel "Ver resultado anterior" — só abre se for de outro set.
  const showPreviousPanel =
    !!previousBest && previousBest !== currentAttempt && !selected;
  const [showPrevious, setShowPrevious] = useState(false);

  const handleSelect = (i: number) => {
    if (selected !== null) return; // Não permite mudar após selecionar
    const correct = i === question.correctIndex;
    recordAttempt({
      subjectSlug,
      questionId: question.id,
      selectedIndex: i,
      correct,
      answeredAt: Date.now(),
      attemptSetId,
      score: correct ? 1 : 0,
    });
    setSelected(i);
  };

  const isAnswered = selected !== null;
  const isCorrect = selected === question.correctIndex;

  return (
    <div className="rounded-xl border bg-card p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-muted text-xs font-medium text-muted-foreground">
            {index}
          </span>
          <span className="text-xs text-muted-foreground">de {total}</span>
        </div>
        <div className="flex items-center gap-2">
          <TypeBadge type={question.type} />
          {isAnswered && (
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
                isCorrect
                  ? "bg-success/15 text-success"
                  : "bg-destructive/15 text-destructive"
              )}
            >
              {isCorrect ? (
                <><CheckCircle2 className="h-3 w-3" /> Correta</>
              ) : (
                <><XCircle className="h-3 w-3" /> Incorreta</>
              )}
            </span>
          )}
        </div>
      </div>

      <h3 className="mt-3 font-medium leading-snug text-foreground">
        {question.prompt}
      </h3>

      {/* Botão "Ver resultado anterior" — só aparece se há tentativa anterior de outro set */}
      {showPreviousPanel && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowPrevious((s) => !s)}
            className="inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            aria-expanded={showPrevious}
          >
            <RotateCcw className="h-3 w-3" />
            Ver resultado anterior
            <ChevronDown
              className={cn(
                "h-3 w-3 transition-transform",
                showPrevious && "rotate-180",
              )}
            />
          </button>
          {showPrevious && (
            <div className="mt-3 space-y-3 rounded-lg border bg-muted/30 p-4 text-sm">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
                    previousBest!.correct
                      ? "bg-success/15 text-success"
                      : "bg-destructive/15 text-destructive",
                  )}
                >
                  {previousBest!.correct ? (
                    <><CheckCircle2 className="h-3 w-3" /> Correta</>
                  ) : (
                    <><XCircle className="h-3 w-3" /> Incorreta</>
                  )}
                </span>
                <span className="text-xs text-muted-foreground">
                  Você escolheu: {String.fromCharCode(65 + previousBest!.selectedIndex)} ·{" "}
                  {question.options[previousBest!.selectedIndex]}
                </span>
              </div>
              <div className="flex items-start gap-2 border-t border-dashed border-border pt-3">
                <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Explicação: </span>
                  {question.explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Afirmativas (I, II, III, IV) — exibidas para tipos vf e afirmativas */}
      {question.statements && question.statements.length > 0 && (
        <ol className="mt-4 space-y-2 rounded-lg border bg-muted/30 p-4 text-sm">
          {question.statements.map((stmt, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-background text-[10px] font-bold uppercase text-muted-foreground border">
                {["I", "II", "III", "IV", "V"][i]}
              </span>
              <span className="min-w-0 text-foreground/90 leading-relaxed">{stmt}</span>
            </li>
          ))}
        </ol>
      )}

      {/* Asserções (I e II) — exibidas em destaque para tipo assercao */}
      {question.assertions && (
        <div className="mt-4 space-y-2 rounded-lg border-l-4 border-primary/40 bg-muted/30 p-4 text-sm">
          <div className="flex items-start gap-3">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-background text-[10px] font-bold uppercase text-muted-foreground border">
              I
            </span>
            <span className="min-w-0 text-foreground/90 leading-relaxed">
              {question.assertions.i}
            </span>
          </div>
          <div className="mt-3 border-t border-dashed border-border pt-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Porque
            </p>
            <div className="flex items-start gap-3">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-background text-[10px] font-bold uppercase text-muted-foreground border">
                II
              </span>
              <span className="min-w-0 text-foreground/90 leading-relaxed">
                {question.assertions.ii}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 grid gap-2">
        {question.options.map((opt: string, i: number) => {
          const isSel = selected === i;
          const correct = i === question.correctIndex;
          let cls =
            "flex items-center gap-3 rounded-lg border bg-background px-3 py-2.5 text-left text-sm transition-all hover:border-primary/30 cursor-pointer";
          if (isAnswered) {
            if (correct) cls += " border-success/50 bg-success/5 text-success";
            else if (isSel) cls += " border-destructive/50 bg-destructive/5 text-destructive";
            else cls += " opacity-50";
          } else if (isSel) {
            cls += " border-primary bg-primary/5";
          }
          return (
            <button
              key={i}
              type="button"
              onClick={() => handleSelect(i)}
              className={cls}
            >
              <span
                className={cn(
                  "grid h-6 w-6 shrink-0 place-items-center rounded-md text-xs font-medium",
                  isSel ? "bg-primary text-primary-foreground" : "bg-muted"
                )}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="min-w-0">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Explicação aparece em tempo real assim que o usuário seleciona uma opção */}
      {isAnswered && (
        <div className="mt-4 rounded-lg border bg-muted/30 p-4">
          <div className="flex items-start gap-2">
            <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Explicação: </span>
              {question.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function QuizResults({
  subject,
  quiz,
  questions,
  attempts,
  onRefazer,
}: {
  subject: any;
  quiz: number;
  questions: Question[];
  attempts: any[];
  onRefazer: () => void;
}) {
  const answered = attempts.length;
  const correct = attempts.filter((a) => a.correct).length;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;

  const questionResults = questions.map((q) => {
    const attempt = attempts.find((a) => a.questionId === q.id);
    return { question: q, attempt };
  });

  return (
    <div className="space-y-6">
      {/* Cabeçalho do resumo */}
      <div className="text-center">
        <h1 className="font-display text-2xl font-bold">Questionário Finalizado!</h1>
        <p className="mt-2 text-muted-foreground">
          Veja seu desempenho no questionário {quiz} de {subject.name}
        </p>
      </div>

      {/* Estatísticas principais */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border bg-card p-4 text-center">
          <Target className="mx-auto h-8 w-8 text-primary" />
          <div className="mt-2 text-2xl font-bold">{answered}/{questions.length}</div>
          <div className="text-xs text-muted-foreground">Respondidas</div>
        </div>
        <div className="rounded-xl border bg-card p-4 text-center">
          <CheckCircle2 className="mx-auto h-8 w-8 text-success" />
          <div className="mt-2 text-2xl font-bold">{correct}</div>
          <div className="text-xs text-muted-foreground">Corretas</div>
        </div>
        <div className="rounded-xl border bg-card p-4 text-center">
          <XCircle className="mx-auto h-8 w-8 text-destructive" />
          <div className="mt-2 text-2xl font-bold">{answered - correct}</div>
          <div className="text-xs text-muted-foreground">Incorretas</div>
        </div>
        <div className="rounded-xl border bg-card p-4 text-center">
          <BarChart3 className="mx-auto h-8 w-8 text-primary" />
          <div className="mt-2 text-2xl font-bold">{accuracy}%</div>
          <div className="text-xs text-muted-foreground">Aproveitamento</div>
        </div>
      </div>

      {/* Feedback geral */}
      <div className="rounded-xl border bg-card p-6 text-center">
        <div className="flex items-center justify-center gap-2">
          {accuracy >= 80 ? (
            <Trophy className="h-12 w-12 text-yellow-500" />
          ) : accuracy >= 60 ? (
            <TrendingUp className="h-12 w-12 text-primary" />
          ) : (
            <BookOpen className="h-12 w-12 text-muted-foreground" />
          )}
        </div>
        <h3 className="mt-4 font-semibold text-lg">
          {accuracy >= 80 ? "Excelente trabalho!" :
           accuracy >= 60 ? "Bom desempenho!" :
           "Continue praticando!"}
        </h3>
        <p className="mt-2 text-muted-foreground">
          {accuracy >= 80
            ? "Você demonstrou ótimo conhecimento sobre o conteúdo!"
            : accuracy >= 60
            ? "Você tem um bom entendimento do tema. Continue praticando!"
            : "Revise os conteúdos e tente novamente. A prática leva à perfeição!"}
        </p>
      </div>

      {/* Detalhe por questão */}
      <div className="space-y-3">
        <h3 className="font-semibold">Detalhe das questões</h3>
        {questionResults.map(({ question, attempt }, index) => (
          <div key={question.id} className="rounded-lg border bg-muted/30 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Questão {index + 1}</span>
                  <TypeBadge type={question.type} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {question.prompt}
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                {attempt ? (
                  <>
                    <div className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                      attempt.correct
                        ? "bg-success/15 text-success"
                        : "bg-destructive/15 text-destructive"
                    )}>
                      {attempt.correct ? (
                        <><Check className="h-3 w-3" /> Correta</>
                      ) : (
                        <><X className="h-3 w-3" /> Incorreta</>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {String.fromCharCode(65 + attempt.selectedIndex)}
                    </span>
                  </>
                ) : (
                  <span className="text-xs text-muted-foreground">Não respondida</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de ação */}
      <div className="flex gap-3">
        <Button onClick={onRefazer} variant="outline" className="flex-1">
          <RotateCcw className="h-4 w-4 mr-2" />
          Refazer
        </Button>
        <Button asChild className="flex-1">
          <Link to="/materias/$slug" params={{ slug: subject.slug }}>
            <BookOpen className="h-4 w-4 mr-2" />
            Voltar à matéria
          </Link>
        </Button>
      </div>
    </div>
  );
}
