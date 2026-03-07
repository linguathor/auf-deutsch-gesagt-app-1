"use client";

import { useState } from "react";
import { Volume2, ChevronDown, ChevronUp } from "lucide-react";
import { VocabItem } from "@/types";

interface VocabularyLabProps {
  coreVerbs: VocabItem[];
  idioms: VocabItem[];
  onComplete?: () => void;
}

export default function VocabularyLab({ coreVerbs, idioms, onComplete }: VocabularyLabProps) {
  const [expandedVerb, setExpandedVerb] = useState<number | null>(null);
  const [expandedIdiom, setExpandedIdiom] = useState<number | null>(null);
  const [viewedCount, setViewedCount] = useState(0);

  const totalItems = coreVerbs.length + idioms.length;

  const handleToggle = (type: "verb" | "idiom", idx: number) => {
    if (type === "verb") {
      if (expandedVerb !== idx) setViewedCount((p) => Math.min(p + 1, totalItems));
      setExpandedVerb(expandedVerb === idx ? null : idx);
    } else {
      if (expandedIdiom !== idx) setViewedCount((p) => Math.min(p + 1, totalItems));
      setExpandedIdiom(expandedIdiom === idx ? null : idx);
    }
    if (viewedCount + 1 >= totalItems) {
      onComplete?.();
    }
  };

  return (
    <div className="space-y-6">
      {/* Core Verbs */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Verben & Ausdrücke
        </h3>
        <div className="space-y-2">
          {coreVerbs.map((verb, idx) => (
            <div
              key={idx}
              className="bg-navy-800/50 rounded-lg border border-border/50 overflow-hidden"
            >
              <button
                onClick={() => handleToggle("verb", idx)}
                className="w-full flex items-center justify-between p-3 hover:bg-navy-700/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="font-medium text-foreground text-left">{verb.german}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted hidden sm:inline">{verb.english}</span>
                  {expandedVerb === idx ? (
                    <ChevronUp className="w-4 h-4 text-muted" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted" />
                  )}
                </div>
              </button>
              {expandedVerb === idx && verb.example && (
                <div className="px-3 pb-3 border-t border-border/30">
                  <p className="text-sm text-muted mt-2">
                    <span className="text-gold-400">Beispiel:</span>{" "}
                    <span className="italic">{verb.example}</span>
                  </p>
                  <p className="text-sm text-sky-400 mt-1">{verb.english}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Idioms */}
      {idioms.length > 0 && (
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Redewendungen & Idiome
          </h3>
          <div className="space-y-2">
            {idioms.map((idiom, idx) => (
              <div
                key={idx}
                className="bg-navy-800/50 rounded-lg border border-border/50 overflow-hidden"
              >
                <button
                  onClick={() => handleToggle("idiom", idx)}
                  className="w-full flex items-center justify-between p-3 hover:bg-navy-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gold-500 text-sm">💡</span>
                    <span className="font-medium text-foreground text-left">{idiom.german}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted hidden sm:inline">{idiom.english}</span>
                    {expandedIdiom === idx ? (
                      <ChevronUp className="w-4 h-4 text-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted" />
                    )}
                  </div>
                </button>
                {expandedIdiom === idx && idiom.example && (
                  <div className="px-3 pb-3 border-t border-border/30">
                    <p className="text-sm text-muted mt-2">
                      <span className="text-gold-400">Beispiel:</span>{" "}
                      <span className="italic">{idiom.example}</span>
                    </p>
                    <p className="text-sm text-sky-400 mt-1">{idiom.english}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
