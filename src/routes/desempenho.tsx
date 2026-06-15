import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, Target, BookOpen, CheckCircle2, XCircle, Trash2 } from "lucide-react";
import { subjects } from "@/lib/subjects";
import { useAttempts, statsFor, clearAll } from "@/lib/progress";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/desempenho")({
  head: () => ({
    meta: [
      { title: "Desempenho — Atheneum" },
      { name: "description", content: "Acompanhe seu desempenho em todas as matérias." },
      { property: "og:title", content: "Desempenho — Atheneum" },
      { property: "og:description", content: "Estatísticas das questões respondidas por matéria." },
    ],
  }),
  component: DesempenhoPage,
});

function DesempenhoPage() {
  const attempts = useAttempts();
  const totalQuestions = subjects.reduce((acc, s) => acc + s.questions.length, 0);
  const totalAnswered = attempts.length;
  const totalCorrect = attempts.filter((a) => a.correct).length;
  const overall = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Desempenho</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Acompanhe seu progresso em todas as matérias.
          </p>
        </div>
        {totalAnswered > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              clearAll();
              toast("Histórico geral limpo");
            }}
            className="gap-1.5"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Limpar tudo
          </Button>
        )}
      </div>

      {/* Overall Stats */}
      <div className="mt-6 grid gap-3 sm:grid-cols-4">
        <StatCard
          icon={<BookOpen className="h-4 w-4" />}
          label="Matérias"
          value={String(subjects.length)}
        />
        <StatCard
          icon={<Target className="h-4 w-4" />}
          label="Respondidas"
          value={`${totalAnswered}/${totalQuestions}`}
        />
        <StatCard
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Corretas"
          value={String(totalCorrect)}
          success
        />
        <StatCard
          icon={<Trophy className="h-4 w-4" />}
          label="Aproveitamento"
          value={totalAnswered > 0 ? `${overall}%` : "—"}
          highlight={overall >= 70}
        />
      </div>

      {/* Per-subject breakdown */}
      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold">Por matéria</h2>
        <div className="mt-4 overflow-hidden rounded-xl border bg-card">
          <ul className="divide-y">
            {subjects.map((s) => {
              const st = statsFor(s.slug, attempts, s.questions.length);
              return (
                <li key={s.slug}>
                  <Link
                    to="/materias/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-muted/50"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{s.name}</p>
                        <span className="hidden text-xs text-muted-foreground sm:inline">
                          · {s.category}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <Progress value={st.progress} className="h-1.5 max-w-[120px]" />
                        <span className="text-xs text-muted-foreground">
                          {st.answered}/{st.total}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-display text-lg font-semibold ${st.accuracy >= 70 ? 'text-primary' : ''}`}>
                        {st.answered > 0 ? `${st.accuracy}%` : '—'}
                      </div>
                      <div className="mt-1 flex items-center justify-end gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-success" />
                          {st.correct}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <XCircle className="h-3 w-3 text-destructive" />
                          {st.answered - st.correct}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className={`mt-1 font-display text-xl font-semibold ${highlight ? 'text-primary' : success ? 'text-success' : ''}`}>
        {value}
      </div>
    </div>
  );
}
