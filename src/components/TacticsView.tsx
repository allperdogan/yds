import React, { useState } from 'react';
import { Compass, ShieldAlert, CheckCircle, Lightbulb, PlayCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { YdsTacticGuide, QuestionType } from '../types';
import { YDS_TACTIC_GUIDES } from '../data/ydsTactics';

interface TacticsViewProps {
  initialType?: QuestionType;
  onSelectPracticeType: (type: QuestionType) => void;
}

export const TacticsView: React.FC<TacticsViewProps> = ({
  initialType,
  onSelectPracticeType
}) => {
  const [selectedType, setSelectedType] = useState<QuestionType>(
    initialType || 'translation_en_tr'
  );
  const [expandedSection, setExpandedSection] = useState<'rules' | 'steps' | 'traps'>('rules');

  const activeTactic: YdsTacticGuide =
    YDS_TACTIC_GUIDES.find((t) => t.id === selectedType) || YDS_TACTIC_GUIDES[0];

  return (
    <div className="space-y-6 pb-24 md:pb-12 max-w-5xl mx-auto">
      {/* Title Header */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5 text-indigo-500" />
            <span>80 Soruluk YDS Sınav Stratejisi</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            10 Soru Tipi İçin Altın Taktik Kılavuzu
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            ÖSYM'nin soru hazırlama psikolojisini çözen formüller, çeldirici eleme hileleri ve 30 saniyelik kestirme yollar.
          </p>
        </div>

        {/* Quick Practice CTA */}
        <button
          onClick={() => onSelectPracticeType(activeTactic.id)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-md shadow-sky-500/20 active:scale-95 transition-all shrink-0"
        >
          <PlayCircle className="w-4 h-4" />
          <span>Bu Taktikten Soru Çöz</span>
        </button>
      </div>

      {/* Question Types Horizontal Pill Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {YDS_TACTIC_GUIDES.map((guide) => {
          const isSelected = selectedType === guide.id;
          return (
            <button
              key={guide.id}
              onClick={() => setSelectedType(guide.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span>{guide.numberRange}</span>
              <span className="opacity-80">·</span>
              <span className="font-semibold">{guide.title.split('(')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Tactic Deep Dive Canvas */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
        {/* Tactic Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2 py-0.5 rounded">
                {activeTactic.numberRange}
              </span>
              <span className="text-xs font-extrabold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">
                {activeTactic.badge}
              </span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1.5">
              {activeTactic.title}
            </h3>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md italic">
            {activeTactic.summary}
          </p>
        </div>

        {/* Pro Tip Box */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-2xl p-4 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-black uppercase text-amber-800 dark:text-amber-400">
              Altın Sınav Tüyosu (ÖSYM Sırrı)
            </h4>
            <p className="text-xs font-medium text-amber-950 dark:text-amber-200 mt-1 leading-relaxed">
              {activeTactic.proTip}
            </p>
          </div>
        </div>

        {/* Section 1: Golden Rules */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Soru Tipinin Altın Kuralları & Formülleri</span>
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {activeTactic.goldenRules.map((rule, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-extrabold flex items-center justify-center shrink-0 text-[10px]">
                  {idx + 1}
                </span>
                <span className="pt-0.5">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Step-by-Step Method */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-sky-500" />
            <span>Adım Adım Çözüm Algoritması (Nasıl Yaklaşmalısın?)</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeTactic.stepByStepMethod.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/50 space-y-1.5"
              >
                <span className="text-[10px] font-black uppercase text-sky-600 dark:text-sky-400 tracking-wider">
                  Aşama {idx + 1}
                </span>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Common Traps */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-500" />
            <span>ÖSYM'nin En Sık Kurduğu Çeldirici Tuzaklar</span>
          </h4>

          <div className="grid grid-cols-1 gap-2.5">
            {activeTactic.commonTraps.map((trap, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-xs font-medium text-rose-950 dark:text-rose-200 leading-relaxed flex items-start gap-3"
              >
                <span className="text-rose-500 font-bold shrink-0">⚠️</span>
                <span>{trap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button: Test this tactic right now */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={() => onSelectPracticeType(activeTactic.id)}
            className="w-full sm:w-auto py-3 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <span>{activeTactic.title} Soru Çözümüne Geç</span>
            <PlayCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
