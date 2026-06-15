import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Target, Trophy, Sparkles } from "lucide-react";
import { subjects } from "@/lib/subjects";
import { useAttempts, statsFor } from "@/lib/progress";
import { SubjectCard } from "@/components/subject-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atheneum — Início" },
      { name: "description", content: "Explore matérias universitárias com resumos, questões e estatísticas." },
      { property: "og:title", content: "Atheneum — Início" },
      { property: "og:description", content: "Resumos e questões para suas matérias da faculdade." },
    ],
  }),
  component: Home,
});

function Home() {
  const attempts = useAttempts();
  const totalQuestions = subjects.reduce((acc, s) => acc + s.questions.length, 0);
  const totalAnswered = attempts.length;
  const totalCorrect = attempts.filter((a) => a.correct).length;
  const overallAccuracy = totalAnswered
    ? Math.round((totalCorrect / totalAnswered) * 100)
    : 0;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 via-accent/5 to-background p-6 sm:p-10">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-20 -left-8 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Estude com método
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Domine suas matérias, uma questão por vez.
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground leading-relaxed">
            Resumos diretos ao ponto, questões de múltipla escolha e acompanhamento
            de desempenho — tudo em um painel feito para o ritmo da faculdade.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <StatCard
          icon={<BookOpen className="h-5 w-5" />}
          label="Matérias disponíveis"
          value={String(subjects.length)}
          trend={null}
        />
        <StatCard
          icon={<Target className="h-5 w-5" />}
          label="Questões respondidas"
          value={`${totalAnswered}`}
          trend={totalQuestions > 0 ? `${Math.round((totalAnswered / totalQuestions) * 100)}% completo` : null}
        />
        <StatCard
          icon={<Trophy className="h-5 w-5" />}
          label="Taxa de acerto"
          value={totalAnswered > 0 ? `${overallAccuracy}%` : "—"}
          trend={totalAnswered > 0 ? (overallAccuracy >= 70 ? "Bom aproveitamento" : "Continue praticando") : null}
          highlight={totalAnswered > 0}
        />
      </section>

      {/* Subjects Section */}
      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Suas matérias
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Escolha uma matéria para abrir o resumo e responder questões.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => {
            const st = statsFor(s.slug, attempts, s.questions.length);
            return (
              <SubjectCard
                key={s.slug}
                subject={s}
                answered={st.answered}
                total={st.total}
                accuracy={st.accuracy}
                progress={st.progress}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  trend,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string | null;
  highlight?: boolean;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
          {icon}
        </div>
        {trend && (
          <span className={`text-xs font-medium ${highlight ? 'text-success' : 'text-muted-foreground'}`}>
            {trend}
          </span>
        )}
      </div>
      <div className="mt-4">
        <div className="truncate text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className={`mt-1 font-display text-2xl font-semibold ${highlight ? 'text-primary' : 'text-foreground'}`}>
          {value}
        </div>
      </div>
    </div>
  );
}
