import React, { useState, useEffect } from 'react';
import { HelpCircle, Check, X, ShieldAlert, Sparkles, BookMarked, RefreshCw, EyeOff, Eye, ChevronRight, ChevronLeft, Timer, Lightbulb } from 'lucide-react';
import { YdsQuestion, QuestionType } from '../types';
import { YDS_QUESTIONS_DATA } from '../data/ydsQuestions';

interface QuestionPracticeViewProps {
  initialType?: QuestionType;
  mistakeIds: string[];
  onAddMistake: (questionId: string) => void;
  onRemoveMistake: (questionId: string) => void;
  onRecordQuestionResult: (questionId: string, selected: string, isCorrect: boolean) => void;
  onBackToTactics?: () => void;
}

export const QuestionPracticeView: React.FC<QuestionPracticeViewProps> = ({
  initialType,
  mistakeIds,
  onAddMistake,
  onRemoveMistake,
  onRecordQuestionResult,
  onBackToTactics
}) => {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>(initialType || 'all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [struckOptions, setStruckOptions] = useState<Record<string, boolean>>({});

  // Sync initialType prop changes cleanly
  useEffect(() => {
    if (initialType) {
      setSelectedTypeFilter(initialType);
      setCurrentIndex(0);
      setSeconds(0);
      setShowExplanation(false);
      setStruckOptions({});
    }
  }, [initialType]);

  // Timer state for pacing
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const filteredQuestions: YdsQuestion[] = YDS_QUESTIONS_DATA.filter((q) => {
    if (selectedTypeFilter === 'all') return true;
    if (selectedTypeFilter === 'preposition_reflex') return q.id.startsWith('prep_');
    return q.type === selectedTypeFilter;
  });

  const currentQ: YdsQuestion | undefined = filteredQuestions[currentIndex];
  const isMistakeSaved = currentQ ? mistakeIds.includes(currentQ.id) : false;

  // Answers strictly bound to currentQ.id - never leak across questions
  const selectedOption = currentQ ? practiceAnswers[currentQ.id] || null : null;
  const isAnswered = Boolean(selectedOption);

  const handleSelectOption = (key: string) => {
    if (isAnswered || !currentQ) return;
    setPracticeAnswers((prev) => ({
      ...prev,
      [currentQ.id]: key
    }));
    setShowExplanation(true);

    const isCorrect = key === currentQ.answer;
    onRecordQuestionResult(currentQ.id, key, isCorrect);
    if (!isCorrect) {
      onAddMistake(currentQ.id);
    }
  };

  const handleToggleStrike = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();
    setStruckOptions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowExplanation(false);
      setStruckOptions({});
      setSeconds(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowExplanation(false);
      setStruckOptions({});
      setSeconds(0);
    }
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 pb-24 md:pb-12 max-w-4xl mx-auto">
      {/* Top Controls: Filter by Question Type & Timer */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Category Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'Tüm Soru Tipleri' },
            { id: 'vocabulary', label: 'Kelime (1-6)' },
            { id: 'grammar', label: 'Gramer Bankası (120+ Soru)' },
            { id: 'preposition_reflex', label: '🎯 Edat Refleksi (10+ Soru)' },
            { id: 'sentence_completion', label: 'Cümle Tamamlama (27-36)' },
            { id: 'translation_en_tr', label: 'İng-Tr Çeviri (37-39)' },
            { id: 'translation_tr_en', label: 'Tr-İng Çeviri (40-42)' },
            { id: 'reading', label: 'Paragraf (43-62)' },
            { id: 'dialogue', label: 'Diyalog (63-67)' },
            { id: 'irrelevant_sentence', label: 'Akışı Bozan (76-80)' }
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setSelectedTypeFilter(type.id);
                setCurrentIndex(0);
                setShowExplanation(false);
                setStruckOptions({});
                setSeconds(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedTypeFilter === type.id
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Top Right: Back to Tactics & Timer */}
        <div className="flex items-center gap-2 shrink-0">
          {onBackToTactics && (
            <button
              onClick={onBackToTactics}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold transition-all"
            >
              <Lightbulb className="w-3.5 h-3.5 text-indigo-500" />
              <span>💡 Sınav Taktiği Formülüne Dön</span>
            </button>
          )}

          {/* Question Timer */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
            <Timer className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
              {formatTimer(seconds)}
            </span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-[10px] text-slate-500 underline ml-1"
            >
              {isTimerRunning ? 'Durdur' : 'Başlat'}
            </button>
          </div>
        </div>
      </div>

      {filteredQuestions.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
          <HelpCircle className="w-12 h-12 text-slate-400 mx-auto" />
          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
            Bu kategoride henüz soru bulunmuyor.
          </p>
          <button
            onClick={() => setSelectedTypeFilter('all')}
            className="px-4 py-2 bg-sky-600 text-white text-xs font-bold rounded-xl"
          >
            Tüm Soruları Göster
          </button>
        </div>
      ) : currentQ && (
        <div className="space-y-4">
          {/* Question Card */}
          <div key={currentQ.id} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
            {/* Header: Soru No, Badge, Hata Defteri */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-white bg-slate-900 dark:bg-slate-700 px-2.5 py-1 rounded-lg">
                  SORU {currentIndex + 1} / {filteredQuestions.length}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 capitalize">
                  {currentQ.type.replace('_', ' ')}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                  {currentQ.difficulty}
                </span>
                {(currentQ as any).grammarTopicTitle && (
                  <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {(currentQ as any).grammarTopicTitle}
                  </span>
                )}
              </div>

              {/* Bookmark / Hata Defteri Ekle */}
              <button
                onClick={() => {
                  if (isMistakeSaved) {
                    onRemoveMistake(currentQ.id);
                  } else {
                    onAddMistake(currentQ.id);
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isMistakeSaved
                    ? 'bg-rose-50 text-rose-600 border border-rose-200 dark:bg-rose-950/40 dark:border-rose-900'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400'
                }`}
              >
                <BookMarked className="w-3.5 h-3.5" />
                <span>{isMistakeSaved ? 'Hata Defterinde' : 'Hata Defterine Ekle'}</span>
              </button>
            </div>

            {/* Reading Passage if available */}
            {currentQ.passage && (
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-xs md:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed max-h-60 overflow-y-auto">
                <p className="font-bold text-slate-400 text-[10px] uppercase font-sans mb-1">
                  YDS Paragraf Metni
                </p>
                {currentQ.passage}
              </div>
            )}

            {/* Dialogue context if available */}
            {currentQ.dialogueSpeaker && (
              <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                Konuşmacılar: {currentQ.dialogueSpeaker}
              </p>
            )}

            {/* Question Text */}
            <div className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
              {currentQ.question}
            </div>

            {/* Instruction Tip */}
            <div className="text-[11px] text-slate-400 flex items-center justify-between">
              <span>Şıkkın üzerine tıklayarak seçin.</span>
              <span className="italic">💡 Çeldiriciyi elemek için şıktaki "Çiz" butonuna bas.</span>
            </div>

            {/* Options List (A, B, C, D, E) */}
            <div className="space-y-2.5">
              {(Object.keys(currentQ.options) as Array<keyof typeof currentQ.options>).map((key) => {
                const optText = currentQ.options[key];
                const isSelected = selectedOption === key;
                const isCorrect = key === currentQ.answer;
                const isStruck = struckOptions[key];

                let optionStyle =
                  'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600';

                if (isAnswered) {
                  if (isCorrect) {
                    optionStyle =
                      'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-400';
                  } else if (isSelected && !isCorrect) {
                    optionStyle =
                      'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 ring-2 ring-rose-400';
                  } else {
                    optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-sky-500 bg-sky-50 dark:bg-sky-950/50';
                }

                return (
                  <div
                    key={key}
                    onClick={() => handleSelectOption(key)}
                    className={`relative p-3.5 md:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between gap-3 ${optionStyle} ${
                      isStruck && !isAnswered ? 'opacity-40 line-through' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                          isAnswered && isCorrect
                            ? 'bg-emerald-500 text-white'
                            : isAnswered && isSelected
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {key}
                      </span>
                      <span className="text-xs md:text-sm font-semibold pt-1 leading-snug">
                        {optText}
                      </span>
                    </div>

                    {/* Strike-Through Toggle Icon */}
                    {!isAnswered && (
                      <button
                        type="button"
                        onClick={(e) => handleToggleStrike(e, key)}
                        title={isStruck ? 'Çizgiyi kaldır' : 'Şıkkı ele/çiz'}
                        className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0 text-[10px] font-bold"
                      >
                        {isStruck ? 'Geri Al' : 'Ele / Çiz'}
                      </button>
                    )}

                    {/* Answer icon indicator */}
                    {isAnswered && isCorrect && (
                      <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <X className="w-5 h-5 text-rose-500 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Question Footer: Prev/Next Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Önceki Soru</span>
              </button>

              {isAnswered && (
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{showExplanation ? 'Açıklamayı Gizle' : 'Taktiksel Çözümü Göster'}</span>
                </button>
              )}

              <button
                onClick={handleNext}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-30"
              >
                <span>Sonraki Soru</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tactical Explanation Card */}
          {isAnswered && showExplanation && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-indigo-200 dark:border-indigo-900/60 p-6 md:p-8 shadow-lg space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase px-2.5 py-1 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  Uygulanan Taktik: {currentQ.tacticUsed}
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  Doğru Cevap: {currentQ.answer}
                </span>
              </div>

              {/* Trap warning */}
              {currentQ.trapWarning && (
                <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 p-3.5 rounded-2xl flex items-start gap-2.5 text-xs text-rose-950 dark:text-rose-200">
                  <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-extrabold text-rose-600 dark:text-rose-400">
                      ÖSYM Çeldirici Tuzağı:
                    </strong>{' '}
                    {currentQ.trapWarning}
                  </div>
                </div>
              )}

              {/* Step by step explanation text */}
              <div className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line bg-slate-50 dark:bg-slate-850 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                {currentQ.explanation}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
