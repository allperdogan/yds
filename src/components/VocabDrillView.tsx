import React, { useState, useMemo } from 'react';
import { Volume2, Check, ArrowRight, HelpCircle, CheckCircle2, RotateCcw, Lightbulb, BookOpen, X, Search, Sparkles, Compass, Layers } from 'lucide-react';
import { VocabQuizQuestion } from '../types';
import { YDS_VOCAB_QUIZ_QUESTIONS } from '../data/ydsVocabQuiz';
import { AudioService } from '../services/audioService';

interface VocabDrillViewProps {
  knownVocabIds: string[];
  pendingReviewVocabIds: string[];
  onMarkKnown: (wordId: string) => void;
  onMarkPendingReview: (wordId: string) => void;
  onRemovePendingReview: (wordId: string) => void;
  onNavigateToFlashcards?: () => void;
}

export const VocabDrillView: React.FC<VocabDrillViewProps> = ({
  knownVocabIds,
  pendingReviewVocabIds,
  onMarkKnown,
  onMarkPendingReview,
  onRemovePendingReview,
  onNavigateToFlashcards
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'vocab' | 'verb' | 'adjective' | 'conjunction' | 'phrasal_verb' | 'grammar'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [showLearningCard, setShowLearningCard] = useState<boolean>(false);
  const [isMasteredModalOpen, setIsMasteredModalOpen] = useState<boolean>(false);
  const [isAtlasModalOpen, setIsAtlasModalOpen] = useState<boolean>(false);
  const [atlasTab, setAtlasTab] = useState<'conjunctions' | 'verbs' | 'adjectives'>('conjunctions');
  const [searchLearnedQuery, setSearchLearnedQuery] = useState<string>('');

  // Filter pool by category
  const categorizedQuestions = useMemo(() => {
    if (selectedCategory === 'all') return YDS_VOCAB_QUIZ_QUESTIONS;
    if (selectedCategory === 'verb') {
      return YDS_VOCAB_QUIZ_QUESTIONS.filter((q) => q.category === 'verb' || q.type === 'verb');
    }
    if (selectedCategory === 'adjective') {
      return YDS_VOCAB_QUIZ_QUESTIONS.filter((q) => q.category === 'adjective' || q.type === 'adjective');
    }
    if (selectedCategory === 'conjunction') {
      return YDS_VOCAB_QUIZ_QUESTIONS.filter((q) => q.category === 'conjunction' || q.type === 'conjunction');
    }
    if (selectedCategory === 'phrasal_verb') {
      return YDS_VOCAB_QUIZ_QUESTIONS.filter((q) => q.category === 'phrasal_verb' || q.type === 'phrasal_verb');
    }
    if (selectedCategory === 'grammar') {
      return YDS_VOCAB_QUIZ_QUESTIONS.filter((q) => q.category === 'grammar');
    }
    return YDS_VOCAB_QUIZ_QUESTIONS.filter((q) => q.category === selectedCategory);
  }, [selectedCategory]);

  // Active question list: prioritize pending review words, then remaining
  const activeQuestions: VocabQuizQuestion[] = useMemo(() => {
    const pending = categorizedQuestions.filter((q) =>
      pendingReviewVocabIds.includes(q.targetWordId)
    );
    const others = categorizedQuestions.filter(
      (q) => !pendingReviewVocabIds.includes(q.targetWordId)
    );
    return [...pending, ...others];
  }, [categorizedQuestions, pendingReviewVocabIds]);

  const currentQ: VocabQuizQuestion | undefined = activeQuestions[currentIndex];
  const isTargetInReviewQueue = currentQ ? pendingReviewVocabIds.includes(currentQ.targetWordId) : false;

  const handleSelectOption = (opt: string) => {
    if (hasAnswered || !currentQ) return;
    setSelectedOption(opt);
    setHasAnswered(true);
    setShowLearningCard(true); // Always reveal the memorable mnemonics for all 4 options!

    const isCorrect = opt === currentQ.correctAnswer;
    if (isCorrect) {
      onMarkKnown(currentQ.targetWordId);
      onRemovePendingReview(currentQ.targetWordId);
    } else {
      // Wrong -> Queue for re-test & show explanation
      onMarkPendingReview(currentQ.targetWordId);
    }
  };

  const handleDontKnow = () => {
    if (!currentQ || hasAnswered) return;
    setSelectedOption(null);
    setHasAnswered(true);
    onMarkPendingReview(currentQ.targetWordId);
    setShowLearningCard(true);
  };

  const handleDirectMarkKnown = () => {
    if (!currentQ) return;
    onMarkKnown(currentQ.targetWordId);
    onRemovePendingReview(currentQ.targetWordId);
    handleNext();
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    setShowLearningCard(false);
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const playAudio = (text: string) => {
    AudioService.speak(text);
  };

  // List of learned words details for the "Öğrendiklerim" Vault
  const learnedItems = useMemo(() => {
    const list: Array<{ id: string; word: string; meaning: string; mnemonic?: string; category: string }> = [];
    const seen = new Set<string>();

    YDS_VOCAB_QUIZ_QUESTIONS.forEach((q) => {
      if (knownVocabIds.includes(q.targetWordId) && !seen.has(q.targetWordId)) {
        seen.add(q.targetWordId);
        const detail = q.optionsBreakdown?.[q.correctAnswer];
        list.push({
          id: q.targetWordId,
          word: q.targetWord,
          meaning: q.meaningTr,
          mnemonic: detail?.mnemonic,
          category: q.category
        });
      }
    });

    if (searchLearnedQuery.trim()) {
      const query = searchLearnedQuery.toLowerCase();
      return list.filter(
        (item) =>
          item.word.toLowerCase().includes(query) ||
          item.meaning.toLowerCase().includes(query)
      );
    }

    return list;
  }, [knownVocabIds, searchLearnedQuery]);

  return (
    <div className="max-w-2xl mx-auto space-y-5 pb-24 px-2">
      {/* Category Pills Selector */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: 'all', label: '🌟 Tüm Sorular' },
          { id: 'verb', label: '⚔️ Fiiller (Verbs)' },
          { id: 'adjective', label: '🎨 Sıfatlar (Adjectives)' },
          { id: 'conjunction', label: '🔗 Bağlaçlar' },
          { id: 'phrasal_verb', label: '⚡ Phrasal Verbs' },
          { id: 'grammar', label: '📐 Gramer' }
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id as any);
              setCurrentIndex(0);
              setSelectedOption(null);
              setHasAnswered(false);
              setShowLearningCard(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              selectedCategory === cat.id
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Clean Status Bar with "Öğrendiklerim" & "Fiil & Bağlaç Atlası" buttons */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-xs font-bold">
        <div className="flex items-center gap-2">
          {/* Clickable Mastered Count Button */}
          <button
            onClick={() => setIsMasteredModalOpen(true)}
            title="Öğrendiğim kelimeleri görüntüle ve tekrar et"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 transition-colors"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>{knownVocabIds.length} Öğrendim (Listele)</span>
          </button>

          {/* Fiil & Bağlaç Atlası Butonu */}
          <button
            onClick={() => setIsAtlasModalOpen(true)}
            title="ÖSYM Altın Bağlaç ve Fiil Tablosu"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-indigo-500" />
            <span>Fiil & Bağlaç Atlası</span>
          </button>

          {/* 1.373 Kelime & SRS Flashcard Havuzu Butonu */}
          {onNavigateToFlashcards && (
            <button
              onClick={onNavigateToFlashcards}
              title="1.373 Akademik Kelime & SRS Flashcard Havuzuna Git"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/60 dark:hover:bg-sky-900/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-sky-500" />
              <span>1.373 Kelime & SRS</span>
            </button>
          )}

          {pendingReviewVocabIds.length > 0 && (
            <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {pendingReviewVocabIds.length} Tekrar
            </span>
          )}
        </div>

        <span className="text-slate-400">
          Soru {currentIndex + 1} / {activeQuestions.length}
        </span>
      </div>

      {currentQ ? (
        <div className="space-y-4">
          {/* Main Clean Question Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
            {/* Category badge & Review indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                  {currentQ.category === 'verb' || currentQ.type === 'verb'
                    ? '⚔️ Akademik Fiil Sorusu'
                    : currentQ.category === 'adjective' || currentQ.type === 'adjective'
                    ? '🎨 Sıfat & Duygu Analizi'
                    : currentQ.category === 'conjunction' || currentQ.type === 'conjunction'
                    ? '🔗 Bağlaç Sorusu'
                    : currentQ.category === 'phrasal_verb' || currentQ.type === 'phrasal_verb'
                    ? '⚡ Phrasal Verb Sorusu'
                    : currentQ.category === 'grammar'
                    ? 'Gramer Formülü'
                    : 'Kelime Sorusu'}
                </span>

                {isTargetInReviewQueue && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-200 dark:border-amber-800">
                    <RotateCcw className="w-3 h-3" />
                    <span>Pekiştirme</span>
                  </span>
                )}
              </div>

              {/* Direct "Biliyorum" shortcut */}
              {!hasAnswered && (
                <button
                  onClick={handleDirectMarkKnown}
                  className="text-xs font-bold text-slate-400 hover:text-emerald-600 transition-colors flex items-center gap-1"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Biliyorum (Atla)</span>
                </button>
              )}
            </div>

            {/* The Sentence with Blank */}
            <div className="space-y-3">
              <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                {currentQ.sentence}
              </p>

              <button
                onClick={() => playAudio(currentQ.sentence.replace('_____', currentQ.correctAnswer))}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700"
              >
                <Volume2 className="w-4 h-4" />
                <span>Cümleyi Dinle</span>
              </button>
            </div>

            {/* 4 Clean Choice Buttons */}
            <div className="space-y-2.5 pt-1">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === currentQ.correctAnswer;

                let btnClass =
                  'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-700 hover:border-sky-400';

                if (hasAnswered) {
                  if (isCorrect) {
                    btnClass =
                      'bg-emerald-500 text-white border-emerald-600 shadow-md font-extrabold';
                  } else if (isSelected && !isCorrect) {
                    btnClass = 'bg-rose-500 text-white border-rose-600 font-extrabold';
                  } else {
                    btnClass = 'opacity-35 border-slate-200 dark:border-slate-800';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    disabled={hasAnswered}
                    className={`w-full py-4 px-5 rounded-2xl border-2 text-base font-bold text-left transition-all active:scale-[0.99] flex items-center justify-between ${btnClass}`}
                  >
                    <span>{opt}</span>
                    {hasAnswered && isCorrect && <Check className="w-5 h-5 text-white stroke-[3px]" />}
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions before answering */}
            {!hasAnswered && (
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={handleDontKnow}
                  className="text-xs font-bold text-slate-400 hover:text-rose-500 py-2 px-3 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Bilmiyorum (Tüm Şıkları Öğret)</span>
                </button>

                <button
                  onClick={handleDirectMarkKnown}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 py-2 px-3 rounded-xl transition-colors flex items-center gap-1"
                >
                  <Check className="w-4 h-4" />
                  <span>Biliyorum (Atla)</span>
                </button>
              </div>
            )}

            {/* Next Button after answering */}
            {hasAnswered && (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-95 transition-all"
                >
                  <span>Sıradaki Soruya Geç</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* COMPREHENSIVE MNEMONICS & 4-OPTION BREAKDOWN CARD */}
          {hasAnswered && showLearningCard && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-900 border-2 border-amber-300 dark:border-amber-700/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl animate-in fade-in slide-in-from-top-3">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-amber-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-amber-500 text-white">
                    <Lightbulb className="w-4 h-4" />
                  </span>
                  <h4 className="text-sm font-black text-amber-900 dark:text-amber-300 uppercase tracking-wide">
                    4 Şıkkın Dördünün de Hafıza Teknikleri & Çözüm Formülü
                  </h4>
                </div>

                <button
                  onClick={() => playAudio(currentQ.targetWord)}
                  title="Doğru Kelimenin Telaffuzunu Dinle"
                  className="p-2 bg-amber-200/70 dark:bg-amber-900/40 rounded-xl text-amber-900 dark:text-amber-200 hover:scale-105 transition-transform"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Context Explanation */}
              <div className="bg-white/90 dark:bg-slate-800/90 p-3.5 rounded-2xl border border-amber-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                  Doğru Cevap: {currentQ.correctAnswer}
                </strong>{' '}
                — {currentQ.explanation}
              </div>

              {/* All 4 Options Broken Down with Mnemonics */}
              <div className="space-y-3 pt-1">
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Şıkların Çağrışımları & Kuralları:
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {currentQ.options.map((optWord, idx) => {
                    const detail = currentQ.optionsBreakdown?.[optWord];
                    const isCorrect = optWord === currentQ.correctAnswer;

                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border-2 transition-all space-y-2 ${
                          isCorrect
                            ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-400 text-emerald-950 dark:text-emerald-200 shadow-sm'
                            : 'bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        {/* Word and Meaning */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${
                                isCorrect
                                  ? 'bg-emerald-500 text-white'
                                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="text-base font-black tracking-tight">{optWord}</span>
                            {isCorrect && (
                              <span className="text-[10px] font-extrabold bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 px-2 py-0.5 rounded-full">
                                Doğru Şık
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => playAudio(optWord)}
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300 pl-8">
                          = {detail?.meaning || 'anlamı'}
                        </p>

                        {/* Mnemonic (Ses çağrışımı / Hikaye) */}
                        {detail?.mnemonic && (
                          <div className="ml-8 bg-amber-100/60 dark:bg-amber-950/40 border border-amber-300/70 dark:border-amber-900/60 p-2.5 rounded-xl text-xs font-semibold text-amber-950 dark:text-amber-200 leading-relaxed">
                            {detail.mnemonic}
                          </div>
                        )}

                        {/* Root / Etymology analysis */}
                        {detail?.rootAnalysis && (
                          <p className="ml-8 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                            {detail.rootAnalysis}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border p-8 space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
          <h3 className="text-lg font-bold">Bu kategorideki tüm sorular tamamlandı!</h3>
        </div>
      )}

      {/* MASTERED WORDS VAULT MODAL (Öğrendiğim Kelimeler Listesi) */}
      {isMasteredModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full p-6 max-h-[85vh] flex flex-col shadow-2xl relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🧠 Öğrendiğim Kelimeler Havuzu</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Toplam {learnedItems.length} kelimeyi hafızana aldın. Buradan istediğin an tekrar edebilirsin.
                </p>
              </div>
              <button
                onClick={() => setIsMasteredModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Input */}
            <div className="pt-4 pb-2">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchLearnedQuery}
                  onChange={(e) => setSearchLearnedQuery(e.target.value)}
                  placeholder="Öğrendiğin kelimelerde ara..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold border-none focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>
            </div>

            {/* List of Learned Items */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 py-2">
              {learnedItems.length === 0 ? (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <BookOpen className="w-8 h-8 mx-auto opacity-50" />
                  <p className="text-xs">Henüz bu listede kelime yok veya arama sonucu bulunamadı.</p>
                </div>
              ) : (
                learnedItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-black text-slate-900 dark:text-white">
                          {item.word}
                        </span>
                        <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
                          = {item.meaning}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => playAudio(item.word)}
                          title="Telaffuz Dinle"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => {
                            // Move back to review queue
                            onMarkPendingReview(item.id);
                          }}
                          title="Unuttum, Tekrar Sırasına Al"
                          className="text-[10px] font-bold text-amber-600 hover:underline px-2 py-1 bg-amber-50 dark:bg-amber-950/60 rounded-md"
                        >
                          Tekrar Et
                        </button>
                      </div>
                    </div>

                    {item.mnemonic && (
                      <p className="text-xs text-amber-900 dark:text-amber-200 bg-amber-100/60 dark:bg-amber-950/40 p-2 rounded-lg font-medium leading-relaxed">
                        {item.mnemonic}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setIsMasteredModalOpen(false)}
                className="w-full py-2.5 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700"
              >
                Pencereyi Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ALTIN BAĞLAÇ & FİİL ATLASI MODALI */}
      {isAtlasModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-5 md:p-7 shadow-2xl relative space-y-5 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 shrink-0">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Compass className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white">
                    ÖSYM Altın Fiil, Bağlaç & Sıfat Atlası
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Paragraf ve cümle sorularını deşifre eden anahtar formüller
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsAtlasModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold shrink-0">
              <button
                onClick={() => setAtlasTab('conjunctions')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  atlasTab === 'conjunctions'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                🔗 Bağlaçlar Tablosu
              </button>
              <button
                onClick={() => setAtlasTab('verbs')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  atlasTab === 'verbs'
                    ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                ⚔️ 30 Altın Fiil
              </button>
              <button
                onClick={() => setAtlasTab('adjectives')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  atlasTab === 'adjectives'
                    ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                🎨 Sıfatlar (+ / -)
              </button>
            </div>

            {/* Modal Tab Contents (Scrollable) */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-xs">
              {/* 1. BAĞLAÇLAR TABLOSU */}
              {atlasTab === 'conjunctions' && (
                <div className="space-y-4">
                  {/* Zıtlık */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <h4 className="font-extrabold text-indigo-600 dark:text-indigo-400 text-xs flex items-center gap-1.5">
                      <span>⚡ 1. ZITLIK BAĞLAÇLARI (CONTRAST)</span>
                    </h4>
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        • <strong>+ Tam Cümle Alanlar:</strong> Although, Even though, Though, While, Whereas, Much as
                      </p>
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        • <strong>+ İsim / V-ing Alanlar:</strong> Despite, In spite of, Notwithstanding, Regardless of
                      </p>
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        • <strong>Geçiş Zarfları (; zarf ,):</strong> However, Nevertheless, Nonetheless, Still, Even so, In contrast
                      </p>
                    </div>
                  </div>

                  {/* Sebep - Sonuç */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <h4 className="font-extrabold text-sky-600 dark:text-sky-400 text-xs flex items-center gap-1.5">
                      <span>⚡ 2. SEBEP & SONUÇ BAĞLAÇLARI</span>
                    </h4>
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        • <strong>Sebep (+ Cümle):</strong> Because, As, Since, Seeing that, Given that, Inasmuch as
                      </p>
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        • <strong>Sebep (+ İsim):</strong> Due to, Because of, Owing to, On account of, In view of, Thanks to
                      </p>
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        • <strong>Sonuç Zarfları:</strong> Therefore, Thus, Hence, Consequently, As a result, Thereby (+ V-ing)
                      </p>
                    </div>
                  </div>

                  {/* Koşul / Şart */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <h4 className="font-extrabold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                      <span>⚡ 3. KOŞUL & ŞART BAĞLAÇLARI</span>
                    </h4>
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        • <strong>If Grubu:</strong> Provided that, Providing that, As long as, So long as, On condition that (= If)
                      </p>
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        • <strong>Unless:</strong> -medikçe, -madıkça (= If not / arkasından olumlu fiil alır)
                      </p>
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        • <strong>In case:</strong> -ar / -er ihtimaline karşı (Önlem cümlesi ister: Take an umbrella in case it rains)
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. 30 ALTIN YDS FİİLİ */}
              {atlasTab === 'verbs' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { verb: 'enhance', tr: 'geliştirmek, artırmak', syn: 'boost, improve, augment', col: 'enhance security / quality' },
                    { verb: 'deteriorate', tr: 'kötüleşmek, bozulmak', syn: 'worsen, decline, degenerate', col: 'rapidly deteriorate' },
                    { verb: 'mitigate', tr: 'hafifletmek, azaltmak', syn: 'alleviate, ease, reduce', col: 'mitigate risks / climate impacts' },
                    { verb: 'substantiate', tr: 'kanıtlamak, doğrulamak', syn: 'corroborate, verify, validate', col: 'substantiate claims with data' },
                    { verb: 'repudiate', tr: 'reddetmek, feshetmek', syn: 'reject, disown, renounce', col: 'repudiate a treaty' },
                    { verb: 'jeopardize', tr: 'tehlikeye atmak', syn: 'endanger, threaten, imperil', col: 'jeopardize national security' },
                    { verb: 'culminate (in)', tr: 'ile sonuçlanmak, zirveye varmak', syn: 'climax, result in', col: 'culminate in civil war' },
                    { verb: 'hamper', tr: 'engellemek, aksatmak', syn: 'impede, hinder, obstruct', col: 'hamper rescue efforts' },
                    { verb: 'exacerbate', tr: 'kötüleştirmek, alevlendirmek', syn: 'aggravate, worsen', col: 'exacerbate the crisis' },
                    { verb: 'harness', tr: 'faydalanmak, gücünü kullanmak', syn: 'utilize, exploit, channel', col: 'harness solar energy' },
                    { verb: 'flourish', tr: 'gelişmek, serpilmek', syn: 'thrive, prosper, bloom', col: 'trade flourished' },
                    { verb: 'reconcile (with)', tr: 'uzlaştırmak, bağdaştırmak', syn: 'harmonize, integrate', col: 'reconcile conflicting views' },
                    { verb: 'unearth', tr: 'gün yüzüne çıkarmak', syn: 'excavate, uncover, reveal', col: 'unearth ancient ruins' },
                    { verb: 'curb', tr: 'dizginlemek, sınırlamak', syn: 'restrain, limit, control', col: 'curb the budget deficit' },
                    { verb: 'account for', tr: 'oluşturmak, tekabül etmek', syn: 'make up, constitute', col: 'account for 40% of emissions' },
                    { verb: 'bring about', tr: 'yol açmak, sebep olmak', syn: 'cause, lead to, induce', col: 'bring about revolutionary changes' },
                    { verb: 'call for', tr: 'talep etmek, çağrıda bulunmak', syn: 'demand, require, urge', col: 'call for immediate action' },
                    { verb: 'rule out', tr: 'elemek, olasılık dışı bırakmak', syn: 'exclude, eliminate, dismiss', col: 'cannot be ruled out' },
                    { verb: 'cope with', tr: 'başa çıkmak, üstesinden gelmek', syn: 'deal with, handle, tackle', col: 'cope with influx of migrants' },
                    { verb: 'stem from', tr: '-den kaynaklanmak', syn: 'originate from, derive from', col: 'stem from inequality' }
                  ].map((v, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-sky-700 dark:text-sky-300 font-extrabold">{v.verb}</strong>
                        <span className="text-[10px] text-slate-400 font-mono">Fiil</span>
                      </div>
                      <p className="text-slate-800 dark:text-slate-200 font-bold">{v.tr}</p>
                      <p className="text-[10px] text-slate-500">🎯 Eşanlam: {v.syn}</p>
                      <p className="text-[10px] text-indigo-600 dark:text-indigo-400 italic">💡 {v.col}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* 3. KRİTİK SIFATLAR (+ / -) */}
              {atlasTab === 'adjectives' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2">
                    <h4 className="font-extrabold text-emerald-700 dark:text-emerald-400 text-xs">
                      ✅ OLUMLU AKADEMİK SIFATLAR (+)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                      <div><strong>plausible:</strong> akla yatkın, makul (credible)</div>
                      <div><strong>indispensable:</strong> vazgeçilmez, elzem (vital)</div>
                      <div><strong>lucrative:</strong> çok karlı, kazançlı (profitable)</div>
                      <div><strong>resilient:</strong> dirençli, dayanıklı (tough)</div>
                      <div><strong>feasible:</strong> uygulanabilir, yapılabilir (viable)</div>
                      <div><strong>prominent:</strong> önde gelen, seçkin (eminent)</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 space-y-2">
                    <h4 className="font-extrabold text-rose-700 dark:text-rose-400 text-xs">
                      ❌ OLUMSUZ AKADEMİK SIFATLAR (-)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                      <div><strong>detrimental (to):</strong> zararlı, yıkıcı (harmful)</div>
                      <div><strong>susceptible (to):</strong> hassas, savunmasız (prone)</div>
                      <div><strong>vulnerable (to):</strong> kırılgan, korunmasız (fragile)</div>
                      <div><strong>negligible:</strong> ihmal edilebilir, önemsiz (trivial)</div>
                      <div><strong>scarce:</strong> kıt, yetersiz (in short supply)</div>
                      <div><strong>hazardous:</strong> tehlikeli, riskli (perilous)</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 shrink-0">
              <button
                onClick={() => setIsAtlasModalOpen(false)}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Anladım, Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
