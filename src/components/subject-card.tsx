import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Subject } from "@/lib/subjects";
import { Progress } from "@/components/ui/progress";

type Props = {
  subject: Subject;
  answered: number;
  total: number;
  accuracy: number;
  progress: number;
};

export function SubjectCard({ subject, answered, total, accuracy, progress }: Props) {
  const isComplete = progress === 100;
  const hasStarted = answered > 0;

  return (
    <Link
      to="/materias/$slug"
      params={{ slug: subject.slug }}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border bg-card p-5 transition-colors hover:border-primary/25 hover:shadow-md"
    >
      {/* Gradient accent */}
      <div
        className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${subject.accent} opacity-50`}
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-medium text-muted-foreground">
            {subject.category}
          </div>
          <h3 className="font-display text-base font-semibold text-foreground leading-tight">
            {subject.name}
          </h3>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>

      {/* Topics */}
      <p className="relative z-10 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
        {subject.topics.join(" · ")}
      </p>

      {/* Progress */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {hasStarted ? `${answered}/${total} respondidas` : `${total} questões`}
          </span>
          <span className={`font-medium ${isComplete ? 'text-success' : accuracy >= 70 ? 'text-primary' : 'text-foreground'}`}>
            {hasStarted ? `${accuracy}% acerto` : 'Não iniciado'}
          </span>
        </div>
        <Progress value={progress} className="h-1.5" />
      </div>

      {/* Completion badge */}
      {isComplete && (
        <div className="absolute right-3 top-3 z-20">
          <div className="flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-medium text-success">
            <CheckCircle2 className="h-3 w-3" />
            Completo
          </div>
        </div>
      )}
    </Link>
  );
}
