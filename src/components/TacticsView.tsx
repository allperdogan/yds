import React, { useState } from 'react';
import { Compass, ShieldAlert, CheckCircle, Lightbulb, PlayCircle, BookOpen, AlertTriangle, FileText, Check, X, Sparkles, Brain, Zap, Search, ChevronRight, ChevronLeft } from 'lucide-react';
import { YdsTacticGuide, QuestionType } from '../types';
import { YDS_TACTIC_GUIDES } from '../data/ydsTactics';
import { YDS_QUESTIONS_DATA } from '../data/ydsQuestions';
import { YDS_PREPOSITION_MATRIX, PREPOSITION_REFLEX_QUESTIONS, PrepositionReflexItem } from '../data/ydsPrepositions';
import { QuestionPracticeView } from './QuestionPracticeView';

interface TacticsViewProps {
  initialType?: QuestionType;
  initialMode?: 'tactic' | 'practice' | 'traps' | 'prepositions';
  onSelectPracticeType?: (type: QuestionType) => void;
  mistakeIds?: string[];
  onAddMistake?: (questionId: string) => void;
  onRemoveMistake?: (questionId: string) => void;
  onRecordQuestionResult?: (questionId: string, selected: string, isCorrect: boolean) => void;
}

export const TacticsView: React.FC<TacticsViewProps> = ({
  initialType,
  initialMode = 'tactic',
  onSelectPracticeType,
  mistakeIds = [],
  onAddMistake = () => {},
  onRemoveMistake = () => {},
  onRecordQuestionResult = () => {}
}) => {
  const [selectedType, setSelectedType] = useState<QuestionType>(
    initialType || 'translation_en_tr'
  );
  const [viewMode, setViewMode] = useState<'tactic' | 'practice' | 'traps' | 'prepositions'>(initialMode);

  // Edat Matrisi State'leri
  const [prepSubTab, setPrepSubTab] = useState<'matrix' | 'test'>('matrix');
  const [prepCategoryFilter, setPrepCategoryFilter] = useState<string>('all');
  const [prepSearchQuery, setPrepSearchQuery] = useState<string>('');
  const [prepTestIndex, setPrepTestIndex] = useState<number>(0);
  const [prepAnswers, setPrepAnswers] = useState<Record<string, string>>({});
  const [prepShowExplanation, setPrepShowExplanation] = useState<boolean>(false);

  // Tuzak Quiz State'i
  const [activeTrapQuizIndex, setActiveTrapQuizIndex] = useState<number | null>(null);
  const [trapAnswers, setTrapAnswers] = useState<Record<number, string>>({});

  // Örnek Soru & Çözüm State'i
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [sampleUserAnswers, setSampleUserAnswers] = useState<Record<string, string>>({});

  const activeTactic: YdsTacticGuide =
    YDS_TACTIC_GUIDES.find((t) => t.id === selectedType) || YDS_TACTIC_GUIDES[0];

  const matchingQuestionsCount = YDS_QUESTIONS_DATA.filter((q) => q.type === activeTactic.id).length;

  const handleGoToPractice = () => {
    if (onSelectPracticeType) {
      onSelectPracticeType(activeTactic.id);
    }
    setViewMode('practice');
  };

  return (
    <div className="space-y-6 pb-24 md:pb-12 max-w-5xl mx-auto">
      {/* Title Header with Mode Switcher */}
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

        {/* View Mode Switcher (Bilgi / Taktik vs Soru Çözümü vs Çeldirici Deşifresi) */}
        <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0">
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold w-full sm:w-auto">
            <button
              onClick={() => setViewMode('tactic')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'tactic'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-extrabold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>💡 Sınav Taktiği (Bilgi)</span>
            </button>
            <button
              onClick={() => setViewMode('practice')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'practice'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm font-extrabold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5 text-sky-500" />
              <span>⚡ Model Sorular ({matchingQuestionsCount})</span>
            </button>
            <button
              onClick={() => setViewMode('traps')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'traps'
                  ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-300 shadow-sm font-extrabold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
              <span>🎯 ÖSYM Çeldirici Deşifresi</span>
            </button>
            <button
              onClick={() => setViewMode('prepositions')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'prepositions'
                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-300 shadow-sm font-extrabold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-500" />
              <span>🔗 Edat Refleks Matrisi ({YDS_PREPOSITION_MATRIX.length})</span>
            </button>
          </div>

          {/* Quick Practice CTA */}
          <button
            onClick={handleGoToPractice}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-md shadow-sky-500/20 active:scale-95 transition-all shrink-0"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Bu Taktikten Soru Çöz</span>
          </button>
        </div>
      </div>

      {/* Sınav Sectionları Horizontal Pill Selector (1 - 80. Sorular) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {YDS_TACTIC_GUIDES.map((guide) => {
          const isSelected = selectedType === guide.id;
          return (
            <button
              key={guide.id}
              onClick={() => {
                setSelectedType(guide.id);
              }}
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

      {/* ========================================================================= */}
      {/* VIEW MODE 1: TAKTİK & BİLGİ REHBERİ                                       */}
      {/* ========================================================================= */}
      {viewMode === 'tactic' && (
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

          {/* Section 4: Örnek Soru & Adım Adım Taktiksel Çözüm */}
          {activeTactic.sampleQuestion && (
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    ÖSYM Model Soru & Çözüm Algoritması
                  </span>
                  <h4 className="text-base font-black text-slate-900 dark:text-white mt-1 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Bu Taktik Soruda Nasıl Uygulanır? (Örnek Soru & Çözüm)</span>
                  </h4>
                </div>

                <button
                  onClick={() =>
                    setRevealedSolutions((prev) => ({
                      ...prev,
                      [activeTactic.id]: !prev[activeTactic.id]
                    }))
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 transition-colors shrink-0"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>
                    {revealedSolutions[activeTactic.id]
                      ? 'Çözüm Adımlarını Gizle'
                      : 'Taktiksel Çözümü Göster'}
                  </span>
                </button>
              </div>

              {/* Sample Question Box */}
              <div key={activeTactic.id} className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 space-y-4">
                {activeTactic.sampleQuestion.passage && (
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs md:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed max-h-52 overflow-y-auto">
                    <span className="font-sans text-[10px] font-bold uppercase text-slate-400 block mb-1">
                      Örnek Metin:
                    </span>
                    {activeTactic.sampleQuestion.passage}
                  </div>
                )}

                {activeTactic.sampleQuestion.dialogueSpeaker && (
                  <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    Konuşmacılar: {activeTactic.sampleQuestion.dialogueSpeaker}
                  </p>
                )}

                <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
                  {activeTactic.sampleQuestion.question}
                </p>

                {/* Options Grid */}
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {Object.entries(activeTactic.sampleQuestion.options).map(([optKey, optVal]) => {
                    const isSelected = sampleUserAnswers[activeTactic.id] === optKey;
                    const isCorrect = activeTactic.sampleQuestion?.answer === optKey;
                    const showFeedback = isSelected || revealedSolutions[activeTactic.id];

                    let btnClass =
                      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300';
                    if (showFeedback && isCorrect) {
                      btnClass =
                        'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 font-bold';
                    } else if (showFeedback && isSelected && !isCorrect) {
                      btnClass =
                        'bg-rose-50 dark:bg-rose-950/60 border-rose-400 dark:border-rose-700 text-rose-900 dark:text-rose-200';
                    }

                    return (
                      <div
                        key={optKey}
                        onClick={() => {
                          setSampleUserAnswers((prev) => ({
                            ...prev,
                            [activeTactic.id]: optKey
                          }));
                          setRevealedSolutions((prev) => ({
                            ...prev,
                            [activeTactic.id]: true
                          }));
                        }}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${btnClass}`}
                      >
                        <span
                          className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 font-bold text-[11px] ${
                            showFeedback && isCorrect
                              ? 'bg-emerald-500 text-white'
                              : showFeedback && isSelected && !isCorrect
                              ? 'bg-rose-500 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {optKey}
                        </span>
                        <span className="flex-1 pt-0.5">{optVal}</span>
                        {showFeedback && isCorrect && (
                          <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full shrink-0">
                            Doğru Cevap
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Revealed Detailed Solution Card */}
                {revealedSolutions[activeTactic.id] && (
                  <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 space-y-3 animate-in fade-in">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Adım Adım Taktiksel Çözüm:</span>
                      </span>
                      <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {activeTactic.sampleQuestion.solutionSteps.map((step, sIdx) => (
                          <p key={sIdx} className="leading-relaxed">
                            {step}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Trap Box */}
                    <div className="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-xs text-rose-900 dark:text-rose-200 space-y-1">
                      <span className="font-extrabold flex items-center gap-1.5 text-rose-700 dark:text-rose-400">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>ÖSYM Çeldirici Tuzağı Neredeydi?</span>
                      </span>
                      <p className="leading-relaxed text-[11px]">
                        {activeTactic.sampleQuestion.trapExplanation}
                      </p>
                    </div>

                    {/* 30 Second Trick Box */}
                    <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/60 text-xs text-amber-950 dark:text-amber-200 space-y-1">
                      <span className="font-extrabold flex items-center gap-1.5 text-amber-800 dark:text-amber-400">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        <span>⚡ 30 Saniyelik Kestirme Yol (Hızlı Refleks Tüyosu):</span>
                      </span>
                      <p className="leading-relaxed font-semibold text-[11px]">
                        {activeTactic.sampleQuestion.fastMethodTrick}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Button: Test this tactic right now */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <button
              onClick={handleGoToPractice}
              className="w-full sm:w-auto py-3 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>{activeTactic.title} Soru Çözümüne Geç</span>
              <PlayCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW MODE 2: MODEL SORULARI ÇÖZ (İNTERAKTİF SORU PRATİĞİ)                   */}
      {/* ========================================================================= */}
      {viewMode === 'practice' && (
        <QuestionPracticeView
          initialType={selectedType}
          mistakeIds={mistakeIds}
          onAddMistake={onAddMistake}
          onRemoveMistake={onRemoveMistake}
          onRecordQuestionResult={onRecordQuestionResult}
          onBackToTactics={() => setViewMode('tactic')}
        />
      )}

      {/* ========================================================================= */}
      {/* VIEW MODE 3: ÖSYM ÇELDİRİCİ DEŞİFRE MERKEZİ & SON 5 YIL ÇIKMIŞ PROTOKOLÜ   */}
      {/* ========================================================================= */}
      {viewMode === 'traps' && (
        <div className="space-y-6">
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-rose-500/10 via-amber-500/10 to-indigo-500/10 border-2 border-rose-300 dark:border-rose-900/60 rounded-3xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-rose-600 text-white shadow-sm">
                ÖSYM Soru Yazarlarının Kodları
              </span>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 dark:bg-slate-800 text-slate-200">
                Hedef: 80 - 90+
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              ÖSYM Çeldirici Psikolojisi & Son 5 Yıl Çıkmış Soru Deşifresi
            </h3>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              ÖSYM soru yazarları rastgele şık yazmaz; şıkların içine özellikle <strong>aynı anlama gelen ama farklı dilbilgisi yapısı (cümle vs isim) isteyen</strong> zıtlık çiftleri, ters zaman çeldiricileri ve gizli özneler gizler. Bu refleksleri kazanan öğrenci soruyu 15 saniyede çözer.
            </p>
          </div>

          {/* 6 BÜYÜK ÖSYM ÇELDİRİCİ TUZAĞI */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-500" />
              <span>ÖSYM'nin En Sık Kullandığı 6 İmza Tuzak</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tuzak 1 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300">
                    Tuzak 1: Virgül ve Yapı Elemesi
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">Although vs Despite</span>
                </div>
                <h5 className="text-sm font-black text-slate-900 dark:text-white">
                  Şıklarda hem Although hem Despite varsa soru ANLAM değil YAPI sorusudur!
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  İki şık da Türkçeye "-e rağmen" diye çevrilir. ÖSYM adayın anlama dalıp virgüle kadar tam cümle olup olmadığını kontrol etmesini engellemeye çalışır.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-xs text-slate-800 dark:text-slate-200 space-y-1">
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold">✔ Although / Even though + TAM CÜMLE (S + V + O)</div>
                  <div className="text-sky-600 dark:text-sky-400 font-bold">✔ Despite / In spite of + İSİM TAMLAMASI / V-ing</div>
                </div>
              </div>

              {/* Tuzak 2 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                    Tuzak 2: Zaman Geçişi Tuzağı
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">Since + V2 vs Have V3</span>
                </div>
                <h5 className="text-sm font-black text-slate-900 dark:text-white">
                  "Since" görünce her iki tarafı Past Simple (V2) yapma çeldiricisi!
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Öğrenci cümlede "since" ve bir geçmiş yıl (in the 1990s) görünce hemen iki tarafta da Simple Past (V2) arar. ÖSYM'nin en popüler tuzak şıkkı budur.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-xs text-slate-800 dark:text-slate-200">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">Altın Formül:</span> Since + Past Simple (V2) , [Present Perfect: Have/Has V3]
                </div>
              </div>

              {/* Tuzak 3 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                    Tuzak 3: Kısaltmada Gizli Özne
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">V-ing vs V3 / Being V3</span>
                </div>
                <h5 className="text-sm font-black text-slate-900 dark:text-white">
                  Cümle başı kısaltmalarda virgülden sonraki özne eylemi yapıyor mu, maruz mu kalıyor?
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cümle başında <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">_____, Subject + Verb</code> yapısı varsa, boşluktaki eylemi virgülden sonraki özne yapar.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-xs text-slate-800 dark:text-slate-200 space-y-1">
                  <div>Özne yapıyorsa: <strong>Having V3 / V-ing (Aktif)</strong></div>
                  <div>Özne maruz kalıyorsa: <strong>V3 / Having been V3 (Pasif)</strong></div>
                </div>
              </div>

              {/* Tuzak 4 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300">
                    Tuzak 4: Sebep Bağlacı Aldatmacası
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">Because vs Due to</span>
                </div>
                <h5 className="text-sm font-black text-slate-900 dark:text-white">
                  Because, Since, As üçlüsü şıklarda varsa hiçbiri cevap olamaz!
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Dört seçenek de tam cümle alan sebep bağlacıysa (Because = Since = As = Inasmuch as), soru isim öbeği isteyen tek şıkkı (Due to / Because of / Owing to) arıyordur.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-xs text-sky-600 dark:text-sky-400 font-bold">
                  Due to / Owing to / Because of + İsim Öbeği (Fiil Yok!)
                </div>
              </div>

              {/* Tuzak 5 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                    Tuzak 5: Noktalama Hilesi
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">However vs But</span>
                </div>
                <h5 className="text-sm font-black text-slate-900 dark:text-white">
                  Noktalı virgül (;) ve virgül (,) arasını sadece Geçiş Zarfı doldurur!
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cümle ortasında <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">; _____,</code> kalıbı varsa buraya "but" ASLA gelemez! Sadece "however, nevertheless, therefore, consequently" gibi zarflar gelir.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-xs text-slate-800 dark:text-slate-200">
                  ; however, / ; therefore, / ; nevertheless,
                </div>
              </div>

              {/* Tuzak 6 */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300">
                    Tuzak 6: Çift Olumsuzluk Tuzağı
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">Hardly, Barely, Seldom</span>
                </div>
                <h5 className="text-sm font-black text-slate-900 dark:text-white">
                  "Not" olmadan cümleyi olumsuz yapan gizli kelimeler ve devriklik!
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Hardly, Scarcely, Seldom, Barely ve Little kelimeleri kendi içinde negatif anlam taşır. Yanına bir olumsuz yardımcı fiil (didn't, don't) almazlar ve cümle başında devrik soru kalıbı isterler.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-xs text-purple-600 dark:text-purple-400 font-bold">
                  Seldom has a study shown... / Hardly had they arrived...
                </div>
              </div>
            </div>
          </div>

          {/* REALİST ÇIKIŞ: SON 5 YIL FİZİKİ ÇIKMIŞ SINAV PROTOKOLÜ */}
          <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-500/5 border-2 border-amber-300 dark:border-amber-800/80 rounded-3xl p-6 md:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/30 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-white shadow-sm">
                  80 - 90 Alanların Sırrı
                </span>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  Son 30 Gün Fiziki Çıkmış Soru Protokolü (Neden Bu App Tek Başına Yetmez?)
                </h4>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Bu uygulama sana YDS'nin 1.400+ kelimesini, tüm soru tiplerinin altın taktiklerini ve zihinsel refleksleri kazandırır. Ancak gerçek sınav günü masaya oturduğunda ÖSYM soru yazarlarının kendine has yazı puntosu, kağıt kokusu, soru kökü tonlaması ve optik forma kodlama ritmiyle yabancılaşmamak için <strong>son 5 yılın (10 sınav dönemi: 2020-2024 YDS 1-2)</strong> sorularını mutlaka fiziksel olarak çözmelisin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-medium">
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800/60 space-y-1.5">
                <div className="flex items-center gap-2 font-black text-amber-800 dark:text-amber-400">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px]">1</span>
                  <span>Fiziki Kitapçık ve Kurşun Kalem:</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  Ekrandan soru çözmek ile kağıt üzerinde şıkların üzerini çizerek çözmek bambaşka motor reflekslerdir. Mutlaka A4 çıktısı veya çıkmış soru fasikülü kullanın.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800/60 space-y-1.5">
                <div className="flex items-center gap-2 font-black text-amber-800 dark:text-amber-400">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px]">2</span>
                  <span>Saat 10:15 Disiplini (180 Dakika Kesintisiz):</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  Biyolojik saatinizi sınav saatine alıştırın. Saat tam 10:15'te başlayın, telefonu kapatın ve masadan kalkmadan 3 saatlik zihinsel dayanıklılığı test edin.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800/60 space-y-1.5">
                <div className="flex items-center gap-2 font-black text-amber-800 dark:text-amber-400">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px]">3</span>
                  <span>Optik Form Kodlama Eşzamanlılığı:</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  Kodlamayı son dakikaya bırakmak panik ve optik kaydırmaya yol açar. Sayfa sayfa optiğe geçirme alışkanlığını denemelerde sabitleyin.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800/60 space-y-1.5">
                <div className="flex items-center gap-2 font-black text-amber-800 dark:text-amber-400">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px]">4</span>
                  <span>ÖSYM Çeldirici Yanlış Analizi:</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  Çıkmış sınav bittiğinde yanlış yaptığın her sorunun yanına: <em>"ÖSYM beni X çeldiricisiyle yanılttı çünkü Y kuralını unuttum"</em> yazarak kendi çeldirici kalkanını oluştur.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW MODE 4: ÖSYM EDAT & PHRASAL VERB REFLEKS MATRİSİ & BOŞLUK DOLDURMA   */}
      {/* ========================================================================= */}
      {viewMode === 'prepositions' && (
        <div className="space-y-6">
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border-2 border-emerald-300 dark:border-emerald-900/60 rounded-3xl p-6 md:p-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-600 text-white shadow-sm">
                🎯 ÖSYM Altın Refleks Modülü
              </span>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 dark:bg-slate-800 text-slate-200">
                {YDS_PREPOSITION_MATRIX.length} İmza Kalıp
              </span>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200">
                {PREPOSITION_REFLEX_QUESTIONS.length} Orijinal Sınav Sorusu
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              Preposition & Phrasal Verb Kombinasyon Matrisi
            </h3>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              YDS'de gramer sorularının (özellikle 13-16. sorular) ve cümle tamamlama sorularının omurgası edat eşleşmeleridir. 
              ÖSYM sınavda <em>"vulnerable TO", "exempt FROM", "deprive OF", "in accordance WITH"</em> gibi kalıpları sürekli sorar. Bu matris doğrudan doğru şıkkı işaretleme refleksi kazandırır.
            </p>

            {/* Sub-tab Navigation */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setPrepSubTab('matrix')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
                  prepSubTab === 'matrix'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>📖 Altın Edat Atlası ({YDS_PREPOSITION_MATRIX.length})</span>
              </button>
              <button
                onClick={() => setPrepSubTab('test')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
                  prepSubTab === 'test'
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>⚡ Boşluk Doldurma Refleks Testi ({PREPOSITION_REFLEX_QUESTIONS.length})</span>
              </button>
            </div>
          </div>

          {/* SUB-TAB 1: ALTIN EDAT ATLASI */}
          {prepSubTab === 'matrix' && (
            <div className="space-y-4">
              {/* Category Filter Pills & Search Box */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {[
                    { id: 'all', label: 'Tümü', count: YDS_PREPOSITION_MATRIX.length },
                    { id: 'verb_prep', label: 'Fiil + Edat', count: YDS_PREPOSITION_MATRIX.filter((m) => m.type === 'verb_prep').length },
                    { id: 'adj_prep', label: 'Sıfat + Edat', count: YDS_PREPOSITION_MATRIX.filter((m) => m.type === 'adj_prep').length },
                    { id: 'noun_prep', label: 'İsim + Edat', count: YDS_PREPOSITION_MATRIX.filter((m) => m.type === 'noun_prep').length },
                    { id: 'idiomatic', label: 'İkili Kalıplar', count: YDS_PREPOSITION_MATRIX.filter((m) => m.type === 'idiomatic').length },
                    { id: 'phrasal_prep', label: '3\'lü Phrasal', count: YDS_PREPOSITION_MATRIX.filter((m) => m.type === 'phrasal_prep').length }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setPrepCategoryFilter(cat.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                        prepCategoryFilter === cat.id
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      {cat.label} ({cat.count})
                    </button>
                  ))}
                </div>

                <div className="relative min-w-[240px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={prepSearchQuery}
                    onChange={(e) => setPrepSearchQuery(e.target.value)}
                    placeholder="Edat veya anlam ara (örn. attribute, muaf)..."
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {YDS_PREPOSITION_MATRIX
                  .filter((item) => {
                    if (prepCategoryFilter !== 'all' && item.type !== prepCategoryFilter) return false;
                    if (prepSearchQuery.trim()) {
                      const q = prepSearchQuery.toLowerCase();
                      return (
                        item.combination.toLowerCase().includes(q) ||
                        item.meaningTr.toLowerCase().includes(q) ||
                        item.tip.toLowerCase().includes(q) ||
                        item.exampleSentence.toLowerCase().includes(q)
                      );
                    }
                    return true;
                  })
                  .map((item) => {
                    const typeLabelMap: Record<string, { label: string; color: string }> = {
                      verb_prep: { label: 'Fiil + Edat', color: 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300' },
                      adj_prep: { label: 'Sıfat + Edat', color: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300' },
                      noun_prep: { label: 'İsim + Edat', color: 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300' },
                      idiomatic: { label: 'İkili Deyimsel', color: 'bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300' },
                      phrasal_prep: { label: '3\'lü Phrasal', color: 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300' }
                    };
                    const typeInfo = typeLabelMap[item.type] || { label: 'Edat Kalıbı', color: 'bg-slate-100 text-slate-700' };

                    return (
                      <div
                        key={item.id}
                        className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${typeInfo.color}`}>
                            {typeInfo.label}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-slate-400">
                            #{item.id}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-lg font-black font-mono text-emerald-600 dark:text-emerald-400 tracking-tight">
                            {item.combination}
                          </h4>
                          <p className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-0.5">
                            {item.meaningTr}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                          "{item.exampleSentence}"
                        </div>

                        <div className="flex items-start gap-2 pt-1 text-[11px] text-amber-700 dark:text-amber-300">
                          <Lightbulb className="w-3.5 h-3.5 shrink-0 text-amber-500 mt-0.5" />
                          <span><strong>ÖSYM Püf Noktası:</strong> {item.tip}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* SUB-TAB 2: BOŞLUK DOLDURMA REFLEKS TESTİ */}
          {prepSubTab === 'test' && (() => {
            const currentPrepQ = PREPOSITION_REFLEX_QUESTIONS[prepTestIndex];
            const currentSelected = prepAnswers[currentPrepQ.id] || null;
            const isAnswered = Boolean(currentSelected);
            const isCorrect = currentSelected === currentPrepQ.answer;

            const handleSelectOption = (key: string) => {
              if (isAnswered) return;
              setPrepAnswers((prev) => ({ ...prev, [currentPrepQ.id]: key }));
              setPrepShowExplanation(true);
              const correct = key === currentPrepQ.answer;
              onRecordQuestionResult(currentPrepQ.id, key, correct);
              if (!correct) {
                onAddMistake(currentPrepQ.id);
              }
            };

            return (
              <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                {/* Header & Progress */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300">
                      Soru {prepTestIndex + 1} / {PREPOSITION_REFLEX_QUESTIONS.length}
                    </span>
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                      {currentPrepQ.prepPattern}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Zorluk: <span className="text-indigo-600 dark:text-indigo-400">{currentPrepQ.difficulty}</span>
                  </span>
                </div>

                {/* Question Sentence */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <p className="text-base md:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
                    {currentPrepQ.question}
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-2.5">
                  {(['A', 'B', 'C', 'D', 'E'] as const).map((key) => {
                    const optText = currentPrepQ.options[key];
                    const isOptionSelected = currentSelected === key;
                    const isOptionCorrect = key === currentPrepQ.answer;

                    let btnStyles = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-400 text-slate-800 dark:text-slate-200';
                    if (isAnswered) {
                      if (isOptionCorrect) {
                        btnStyles = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-extrabold shadow-sm';
                      } else if (isOptionSelected && !isOptionCorrect) {
                        btnStyles = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200 font-bold';
                      } else {
                        btnStyles = 'bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-50';
                      }
                    }

                    return (
                      <button
                        key={key}
                        onClick={() => handleSelectOption(key)}
                        disabled={isAnswered}
                        className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${btnStyles}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                            isAnswered && isOptionCorrect
                              ? 'bg-emerald-500 text-white'
                              : isAnswered && isOptionSelected
                              ? 'bg-rose-500 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}>
                            {key}
                          </span>
                          <span className="text-sm font-semibold">{optText}</span>
                        </div>

                        {isAnswered && isOptionCorrect && (
                          <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        )}
                        {isAnswered && isOptionSelected && !isOptionCorrect && (
                          <X className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card */}
                {isAnswered && (
                  <div className="p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-extrabold">
                            <Check className="w-3.5 h-3.5" />
                            Tebrikler! Doğru Seçenek
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-extrabold">
                            <X className="w-3.5 h-3.5" />
                            Yanlış (Hata Defterine Eklendi)
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300">
                        {currentPrepQ.tacticUsed}
                      </span>
                    </div>

                    <div className="text-xs text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                      {currentPrepQ.explanation}
                    </div>

                    {currentPrepQ.trapWarning && (
                      <div className="p-3 rounded-xl bg-amber-100/70 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>Tuzak Uyarısı:</strong> {currentPrepQ.trapWarning}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Next / Previous Controls */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => {
                      if (prepTestIndex > 0) {
                        setPrepTestIndex((prev) => prev - 1);
                        setPrepShowExplanation(false);
                      }
                    }}
                    disabled={prepTestIndex === 0}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Önceki Soru</span>
                  </button>

                  <button
                    onClick={() => {
                      if (prepTestIndex < PREPOSITION_REFLEX_QUESTIONS.length - 1) {
                        setPrepTestIndex((prev) => prev + 1);
                        setPrepShowExplanation(false);
                      } else {
                        // Reset to first
                        setPrepTestIndex(0);
                        setPrepShowExplanation(false);
                      }
                    }}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-extrabold bg-teal-600 hover:bg-teal-500 text-white shadow-md shadow-teal-600/20 active:scale-95 transition-all"
                  >
                    <span>{prepTestIndex < PREPOSITION_REFLEX_QUESTIONS.length - 1 ? 'Sonraki Soru' : 'Başa Dön'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
