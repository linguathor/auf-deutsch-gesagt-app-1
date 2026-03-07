"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/auth";
import { useProgressStore } from "@/store/progress";
import allModules from "@/data/modules";
import {
  Check,
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  Target,
} from "lucide-react";

export default function ProgressPage() {
  const { isAuthenticated } = useAuthStore();
  const { progress, getModuleCompletionPercent, getCompletionPercent } =
    useProgressStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  const overallPercent = getCompletionPercent();
  const completedCount = Object.values(progress.modules).filter(
    (m) => m.completed
  ).length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Dein Fortschritt
        </h1>
        <p className="text-muted mb-8">
          Übersicht über alle Module und Fertigkeiten.
        </p>

        {/* Overall progress */}
        <div className="bg-card rounded-xl border border-border p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">
              Gesamtfortschritt
            </h2>
            <span className="text-2xl font-bold text-gold-400">
              {overallPercent}%
            </span>
          </div>
          <div className="h-3 bg-navy-700 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full progress-animated"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
          <p className="text-sm text-muted">
            {completedCount} von 12 Modulen abgeschlossen
          </p>
        </div>

        {/* Module-by-module breakdown */}
        <div className="space-y-3">
          {allModules.map((mod) => {
            const mp = progress.modules[mod.id];
            const pct = getModuleCompletionPercent(mod.id);
            const isPlaceholder = mod.story.text === "";

            return (
              <div
                key={mod.id}
                className={`bg-card rounded-xl border border-border p-5 ${
                  isPlaceholder ? "opacity-50" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                        mp?.completed
                          ? "bg-emerald-500/20 text-emerald-400"
                          : mp?.started
                          ? "bg-gold-500/20 text-gold-400"
                          : "bg-navy-700 text-muted"
                      }`}
                    >
                      {mp?.completed ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        mod.id
                      )}
                    </div>
                    <div>
                      <Link
                        href={isPlaceholder ? "#" : `/module/${mod.slug}`}
                        className={`font-semibold ${
                          isPlaceholder
                            ? "text-muted cursor-default"
                            : "text-foreground hover:text-gold-400 transition-colors"
                        }`}
                      >
                        {mod.title}
                      </Link>
                      <p className="text-xs text-muted">
                        {mod.subtitle} · {mod.focusVerb}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-muted">{pct}%</span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 bg-navy-700 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-gold-500 rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                {/* Skill indicators */}
                {mp && (
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge
                      icon={BookOpen}
                      label="Geschichte"
                      done={mp.sections.story}
                    />
                    <SkillBadge
                      icon={Target}
                      label="Vokabeln"
                      done={mp.sections.vocabulary}
                    />
                    <SkillBadge
                      icon={BookOpen}
                      label="Lesen"
                      done={mp.sections.exercises.lesen}
                    />
                    <SkillBadge
                      icon={Headphones}
                      label="Hören"
                      done={mp.sections.exercises.hoeren}
                    />
                    <SkillBadge
                      icon={Mic}
                      label="Sprechen"
                      done={mp.sections.exercises.sprechen}
                    />
                    <SkillBadge
                      icon={PenTool}
                      label="Schreiben"
                      done={mp.sections.exercises.schreiben}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function SkillBadge({
  icon: Icon,
  label,
  done,
}: {
  icon: typeof BookOpen;
  label: string;
  done: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded border ${
        done
          ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
          : "border-border text-muted"
      }`}
    >
      {done ? <Check className="w-3 h-3" /> : <Icon className="w-3 h-3" />}
      {label}
    </span>
  );
}
