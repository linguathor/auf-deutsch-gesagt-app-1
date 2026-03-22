"use client";

import { Check, Lock, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useProgressStore } from "@/store/progress";
import { CourseModule } from "@/types";

interface ModuleCardProps {
  module: CourseModule;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const adminMode = useProgressStore((s) => s.adminMode);
  const progress = useProgressStore((s) => s.progress);

  const modProgress = progress.modules[module.id] ?? {
    moduleId: module.id,
    started: false,
    completed: false,
    sections: { story: false, vocabulary: false, exercises: { lesen: false, hoeren: false, sprechen: false, schreiben: false } },
    exerciseAnswers: {},
  };

  const isUnlocked = adminMode || module.id === 1 || (progress.modules[module.id - 1]?.completed ?? false);

  const sectionsDone = [
    modProgress.sections.story,
    modProgress.sections.vocabulary,
    modProgress.sections.exercises.lesen,
    modProgress.sections.exercises.hoeren,
    modProgress.sections.exercises.sprechen,
    modProgress.sections.exercises.schreiben,
  ].filter(Boolean).length;
  const completionPct = Math.round((sectionsDone / 6) * 100);

  const isPlaceholder = module.story.text === "";
  const isCompleted = modProgress.completed;
  const isStarted = modProgress.started;

  if (!isUnlocked || isPlaceholder) {
    return (
      <div className="bg-card/50 rounded-xl border border-border/50 p-5 opacity-60">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 text-muted">
            <Lock className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider">Modul {module.id}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-muted mb-1">{module.title}</h3>
        <p className="text-sm text-muted/70">{module.subtitle}</p>
        {isPlaceholder && (
          <p className="text-xs text-muted/50 mt-3 italic">Demnächst verfügbar</p>
        )}
      </div>
    );
  }

  return (
    <Link
      href={`/module/${module.slug}`}
      className="group block bg-card rounded-xl border border-border hover:border-gold-500/50 hover:bg-card-hover transition-all duration-200 p-5"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {isCompleted ? (
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5 text-gold-400" />
            </div>
          )}
          <span className="text-xs uppercase tracking-wider text-muted">
            Modul {module.id}
          </span>
        </div>
        <span className="text-xs text-muted">{module.estimatedMinutes} Min.</span>
      </div>

      <h3 className="text-lg font-semibold text-foreground group-hover:text-gold-400 transition-colors mb-1">
        {module.title}
      </h3>
      <p className="text-sm text-muted mb-4">{module.subtitle}</p>

      {/* Verb focus */}
      <div className="mb-4">
        <span className="inline-block bg-navy-700 text-gold-400 text-xs px-2 py-0.5 rounded">
          Fokus: {module.focusVerb}
        </span>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-navy-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold-500 rounded-full transition-all duration-500"
            style={{ width: `${completionPct}%` }}
          />
        </div>
        <span className="text-xs text-muted min-w-[2.5rem] text-right">
          {completionPct}%
        </span>
      </div>

      {/* Status footer */}
      <div className="mt-4 flex items-center justify-between">
        {isCompleted ? (
          <span className="text-xs text-emerald-400">Abgeschlossen</span>
        ) : isStarted ? (
          <span className="text-xs text-sky-400">In Bearbeitung</span>
        ) : (
          <span className="text-xs text-muted">Starten</span>
        )}
        <ArrowRight className="w-4 h-4 text-muted group-hover:text-gold-400 transition-colors" />
      </div>
    </Link>
  );
}
