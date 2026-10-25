import React, { useState, useMemo, useEffect } from 'react';
import {
  Volume2,
  Bookmark,
  BookmarkCheck,
  RotateCw,
  Sparkles,
  Filter,
  Check,
  Award,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Search,
  BookOpen,
  Layers,
  ChevronLeft,
  ChevronRight,
  Calendar,
  X,
  Target,
  Lightbulb
} from 'lucide-react';
import { YdsWord, SRSItem, SRSGrade } from '../types';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';
import { SRSEngine } from '../services/srsEngine';
import { AudioService } from '../services/audioService';

interface VocabFlashcardViewProps {
  initialDay?: number;
  srsData: Record<string, SRSItem>;
  onUpdateSRS: (updatedData: Record<string, SRSItem>) => void;
  bookmarkedWords: string[];
  onToggleBookmark: (wordId: string) => void;
  onNavigateToDrill?: () => void;
}

export const VocabFlashcardView: React.FC<VocabFlashcardViewProps> = ({
  initialDay,
  srsData,
  onUpdateSRS,
  bookmarkedWords,
  onToggleBookmark,
  onNavigateToDrill
}) => {
  // Main View Mode: Flashcards (SRS) vs Full Dictionary / Atlas List
  const [viewMode, setViewMode] = useState<'flashcard' | 'dictionary'>('flashcard');

  // Flashcard & Common Filters
  const [filterMode, setFilterMode] = useState<'all' | 'due' | 'day' | 'bookmarked'>(
    initialDay ? 'day' : 'all'
  );
  const [selectedDay, setSelectedDay] = useState<number>(initialDay || 1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'verb' | 'adjective' | 'noun' | 'phrasal_verb' | 'conjunction' | 'adverb'>('all');

  // Dictionary Specific Filters
  const [dictSort, setDictSort] = useState<'day' | 'az' | 'za'>('day');
  const [dictDayFilter, setDictDayFilter] = useState<number | 'all'>('all');
  const [dictPage, setDictPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 25;

  // Sync if initialDay changes
  useEffect(() => {
    if (initialDay) {
      setSelectedDay(initialDay);
      setFilterMode('day');
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [initialDay]);

  // Filter word list for Flashcard Mode
  const filteredWords = useMemo(() => {
    let list = [...YDS_VOCABULARY_LIST];

    // Category Filter
    if (categoryFilter !== 'all') {
      list = list.filter((w) => w.type === categoryFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (w) =>
          w.word.toLowerCase().includes(q) ||
          w.meaning.toLowerCase().includes(q) ||
          (w.mnemonic && w.mnemonic.toLowerCase().includes(q)) ||
          w.synonyms.some((s) => s.toLowerCase().includes(q))
      );
    } else if (filterMode === 'day') {
      list = list.filter((w) => w.groupDay === selectedDay);
    } else if (filterMode === 'due') {
      list = list.filter((w) => {
        const item = srsData[w.id];
        return item ? SRSEngine.isDueToday(item) : true;
      });
    } else if (filterMode === 'bookmarked') {
      list = list.filter((w) => bookmarkedWords.includes(w.id));
    }

    return list;
  }, [filterMode, selectedDay, searchQuery, categoryFilter, srsData, bookmarkedWords]);

  // Dictionary Mode List Filter & Sort
  const dictionaryWords = useMemo(() => {
    let list = [...YDS_VOCABULARY_LIST];

    // Category Filter
    if (categoryFilter !== 'all') {
      list = list.filter((w) => w.type === categoryFilter);
    }

    // Day Filter
    if (dictDayFilter !== 'all') {
      list = list.filter((w) => w.groupDay === dictDayFilter);
    }

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (w) =>
          w.word.toLowerCase().includes(q) ||
          w.meaning.toLowerCase().includes(q) ||
          (w.mnemonic && w.mnemonic.toLowerCase().includes(q)) ||
          w.synonyms.some((s) => s.toLowerCase().includes(q)) ||
          w.collocations.some((c) => c.toLowerCase().includes(q))
      );
    }

    // Sort
    if (dictSort === 'az') {
      list.sort((a, b) => a.word.localeCompare(b.word));
    } else if (dictSort === 'za') {
      list.sort((a, b) => b.word.localeCompare(a.word));
    } else {
      // Sort by Day then Word
      list.sort((a, b) => a.groupDay - b.groupDay || a.word.localeCompare(b.word));
    }

    return list;
  }, [categoryFilter, dictDayFilter, searchQuery, dictSort]);

  // Dictionary Pagination
  const totalDictPages = Math.ceil(dictionaryWords.length / ITEMS_PER_PAGE) || 1;
  const paginatedDictWords = useMemo(() => {
    const start = (dictPage - 1) * ITEMS_PER_PAGE;
    return dictionaryWords.slice(start, start + ITEMS_PER_PAGE);
  }, [dictionaryWords, dictPage]);

  // Reset page when dictionary filter changes
  useEffect(() => {
    setDictPage(1);
  }, [categoryFilter, dictDayFilter, searchQuery, dictSort]);

  const currentWord: YdsWord | undefined = filteredWords[currentIndex];
  const currentSRS: SRSItem | undefined = currentWord ? srsData[currentWord.id] : undefined;
  const isBookmarked = currentWord ? bookmarkedWords.includes(currentWord.id) : false;

  const handleGrade = (grade: SRSGrade) => {
    if (!currentWord) return;

    const existing = SRSEngine.getOrCreateItem(currentWord.id, srsData);
    const updated = SRSEngine.calculateNextReview(existing, grade);

    const newMap = {
      ...srsData,
      [currentWord.id]: updated
    };

    onUpdateSRS(newMap);
    setIsFlipped(false);

    // Auto next card
    if (currentIndex < filteredWords.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const playAudio = (text: string) => {
    AudioService.speak(text);
  };

  // Helper for part of speech styling
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'verb':
        return { label: 'Fiil', style: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
      case 'adjective':
        return { label: 'Sıfat', style: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' };
      case 'noun':
        return { label: 'İsim', style: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' };
      case 'phrasal_verb':
        return { label: 'Deyimsel Fiil', style: 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800' };
      case 'conjunction':
        return { label: 'Bağlaç / Cümle Zarfı', style: 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800' };
      case 'adverb':
        return { label: 'Zarf', style: 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800' };
      default:
        return { label: type, style: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700' };
    }
  };

  return (
    <div className="space-y-6 pb-24 md:pb-12 max-w-4xl mx-auto">
      {/* Top Banner / Hero Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span>🧠 Akademik Kelime & SRS Motoru</span>
            </h2>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              {YDS_VOCABULARY_LIST.length} Kelime
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            ÖSYM havuzundan taranmış 30 günlük bilimsel hafıza ve aralıklı tekrar sistemi
          </p>
        </div>

        {/* View Mode Segmented Control */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          {onNavigateToDrill && (
            <button
              onClick={onNavigateToDrill}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-all"
            >
              <Target className="w-3.5 h-3.5 text-sky-500" />
              <span>⚡ Soru Çöz Drill</span>
            </button>
          )}
          <button
            onClick={() => setViewMode('flashcard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'flashcard'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>🎴 Flashcard (SRS)</span>
          </button>
          <button
            onClick={() => setViewMode('dictionary')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'dictionary'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>📚 Kelime Sözlüğü (A-Z)</span>
          </button>
        </div>
      </div>

      {/* Part of Speech Category Filter Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-semibold">
        <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider pl-1 mr-1">
          Kategori:
        </span>
        <button
          onClick={() => {
            setCategoryFilter('all');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1 rounded-lg shrink-0 transition-all ${
            categoryFilter === 'all'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
          }`}
        >
          Tümü ({YDS_VOCABULARY_LIST.length})
        </button>
        <button
          onClick={() => {
            setCategoryFilter('verb');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1 rounded-lg shrink-0 transition-all ${
            categoryFilter === 'verb'
              ? 'bg-emerald-600 text-white font-bold shadow-sm'
              : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
          }`}
        >
          Fiiller ({YDS_VOCABULARY_LIST.filter((w) => w.type === 'verb').length})
        </button>
        <button
          onClick={() => {
            setCategoryFilter('adjective');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1 rounded-lg shrink-0 transition-all ${
            categoryFilter === 'adjective'
              ? 'bg-indigo-600 text-white font-bold shadow-sm'
              : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
          }`}
        >
          Sıfatlar ({YDS_VOCABULARY_LIST.filter((w) => w.type === 'adjective').length})
        </button>
        <button
          onClick={() => {
            setCategoryFilter('noun');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1 rounded-lg shrink-0 transition-all ${
            categoryFilter === 'noun'
              ? 'bg-amber-600 text-white font-bold shadow-sm'
              : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
          }`}
        >
          İsimler ({YDS_VOCABULARY_LIST.filter((w) => w.type === 'noun').length})
        </button>
        <button
          onClick={() => {
            setCategoryFilter('phrasal_verb');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1 rounded-lg shrink-0 transition-all ${
            categoryFilter === 'phrasal_verb'
              ? 'bg-purple-600 text-white font-bold shadow-sm'
              : 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
          }`}
        >
          Deyimsel Fiiller ({YDS_VOCABULARY_LIST.filter((w) => w.type === 'phrasal_verb').length})
        </button>
        <button
          onClick={() => {
            setCategoryFilter('conjunction');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1 rounded-lg shrink-0 transition-all ${
            categoryFilter === 'conjunction'
              ? 'bg-rose-600 text-white font-bold shadow-sm'
              : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
          }`}
        >
          Bağlaçlar ({YDS_VOCABULARY_LIST.filter((w) => w.type === 'conjunction').length})
        </button>
        <button
          onClick={() => {
            setCategoryFilter('adverb');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1 rounded-lg shrink-0 transition-all ${
            categoryFilter === 'adverb'
              ? 'bg-sky-600 text-white font-bold shadow-sm'
              : 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800'
          }`}
        >
          Zarflar ({YDS_VOCABULARY_LIST.filter((w) => w.type === 'adverb').length})
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. FLASHCARD (SRS) MODE                                                   */}
      {/* ========================================================================= */}
      {viewMode === 'flashcard' && (
        <div className="space-y-4">
          {/* Flashcard Filter Pills & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Filter Mode Pills */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
              <button
                onClick={() => {
                  setFilterMode('all');
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterMode === 'all'
                    ? 'bg-sky-600 text-white font-bold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                Tümü ({filteredWords.length})
              </button>
              <button
                onClick={() => {
                  setFilterMode('due');
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterMode === 'due'
                    ? 'bg-amber-600 text-white font-bold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                Tekrar Zamanı
              </button>
              <button
                onClick={() => {
                  setFilterMode('day');
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterMode === 'day'
                    ? 'bg-sky-600 text-white font-bold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                Güne Göre (30 Gün)
              </button>
              <button
                onClick={() => {
                  setFilterMode('bookmarked');
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterMode === 'bookmarked'
                    ? 'bg-rose-600 text-white font-bold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                Kaydedilenler ({bookmarkedWords.length})
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative min-w-[200px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                placeholder="Kelime veya Türkçe anlam ara..."
                className="w-full pl-9 pr-7 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* 30-Day Carousel Selector */}
          {filterMode === 'day' && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs px-1 text-slate-500">
                <span className="font-bold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-500" />
                  <span>30 Günlük Müfredat Seçici:</span>
                </span>
                <span>Seçili: Gün {selectedDay}</span>
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                  const countInDay = YDS_VOCABULARY_LIST.filter((w) => w.groupDay === day).length;
                  return (
                    <button
                      key={day}
                      onClick={() => {
                        setSelectedDay(day);
                        setCurrentIndex(0);
                        setIsFlipped(false);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                        selectedDay === day
                          ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                      }`}
                    >
                      Gün {day} ({countInDay})
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Flashcard Main Screen */}
          {filteredWords.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
              <Award className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Bu Filtrede Kelime Bulunamadı
              </h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                Filtre ayarlarını sıfırlayarak {YDS_VOCABULARY_LIST.length} kelimelik ana havuzumuza dönebilirsiniz.
              </p>
              <button
                onClick={() => {
                  setFilterMode('all');
                  setCategoryFilter('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700 transition-colors"
              >
                Tüm Kelime Havuzunu Aç
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">
                <span>
                  Kart {currentIndex + 1} / {filteredWords.length}
                </span>
                <div className="flex items-center gap-2">
                  {currentSRS && (
                    <span className="bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">
                      SRS Tekrarı: {currentSRS.repetition} (Aralık: {currentSRS.interval} gün)
                    </span>
                  )}
                  {currentWord && (
                    <span className={`px-2.5 py-0.5 rounded-full border font-bold text-[11px] ${getTypeBadge(currentWord.type).style}`}>
                      {getTypeBadge(currentWord.type).label}
                    </span>
                  )}
                </div>
              </div>

              {/* 3D Flip Card Container */}
              {currentWord && (
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="cursor-pointer group relative min-h-[380px] md:min-h-[420px] w-full rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl p-6 md:p-8 flex flex-col justify-between transition-all hover:border-sky-400 dark:hover:border-sky-500 select-none"
                >
                  {/* Card Top Row: badges, audio and bookmark */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        {currentWord.frequency === 'ultra' ? '🔥 ÖSYM Çok Sık Sorar' : '⭐ Akademik YDS'}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        Gün {currentWord.groupDay}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Audio Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          playAudio(currentWord.word);
                        }}
                        title="Kelime Telaffuzunu Dinle (Doğal İngilizce)"
                        className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 hover:scale-110 active:scale-95 transition-transform"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>

                      {/* Bookmark Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(currentWord.id);
                        }}
                        title={isBookmarked ? 'Kaydedilenlerden Çıkar' : 'Kaydet'}
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:scale-110 active:scale-95 transition-transform"
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-5 h-5 text-amber-500 fill-amber-500" />
                        ) : (
                          <Bookmark className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Card Center Content */}
                  <div className="my-auto text-center py-4 space-y-4">
                    {!isFlipped ? (
                      // FRONT OF CARD
                      <div className="space-y-3">
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                          {currentWord.word}
                        </h3>
                        {currentWord.phonetic && (
                          <p className="text-sm font-mono text-slate-400 dark:text-slate-500">
                            {currentWord.phonetic}
                          </p>
                        )}
                        <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold inline-flex items-center gap-1.5 pt-4">
                          <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                          <span>Anlamı, eş anlamlıları ve YDS taktiğini görmek için dokun</span>
                        </p>
                      </div>
                    ) : (
                      // BACK OF CARD (Detailed Learning)
                      <div className="space-y-4 text-left">
                        {/* Meaning */}
                        <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Türkçe Karşılığı
                          </span>
                          <h4 className="text-2xl font-black text-sky-600 dark:text-sky-400 mt-0.5">
                            {currentWord.meaning}
                          </h4>
                        </div>

                        {/* Akılda Kalıcı Çağrışım & Hafıza Kodlaması */}
                        {currentWord.mnemonic && (
                          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 border border-amber-300 dark:border-amber-800/60 p-3 rounded-2xl space-y-1">
                            <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-300 font-extrabold text-xs">
                              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                              <span>💡 Akılda Kalıcı Çağrışım (Hafıza Kodlaması):</span>
                            </div>
                            <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed pl-5">
                              {currentWord.mnemonic}
                            </p>
                          </div>
                        )}

                        {/* Synonyms (Eş Anlamlılar) */}
                        {currentWord.synonyms && currentWord.synonyms.length > 0 && (
                          <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              ÖSYM Eş Anlamlıları (Synonyms)
                            </span>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {currentWord.synonyms.map((syn, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                                >
                                  {syn}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Collocations */}
                        {currentWord.collocations && currentWord.collocations.length > 0 && (
                          <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Sık Çıkan Tamlamalar (Collocations)
                            </span>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {currentWord.collocations.map((col, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                                >
                                  {col}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Authentic Exam Sample Sentence */}
                        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-500 uppercase">
                              YDS Örnek Cümlesi
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                playAudio(currentWord.exampleEn);
                              }}
                              className="text-sky-600 dark:text-sky-400 hover:text-sky-700"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed italic">
                            "{currentWord.exampleEn}"
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                            {currentWord.exampleTr}
                          </p>
                        </div>

                        {/* YDS Golden Exam Tip */}
                        {currentWord.ydsTip && (
                          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 p-2.5 rounded-xl flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <p className="text-xs text-amber-900 dark:text-amber-200 font-medium leading-tight">
                              <strong>YDS İpucu:</strong> {currentWord.ydsTip}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Navigation & Flip Prompt */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (currentIndex > 0) {
                          setCurrentIndex((prev) => prev - 1);
                          setIsFlipped(false);
                        }
                      }}
                      disabled={currentIndex === 0}
                      className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white disabled:opacity-30"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Önceki</span>
                    </button>

                    <span className="font-semibold text-slate-500">
                      {isFlipped ? 'Kartı Çevir' : 'Detayları Gör'}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (currentIndex < filteredWords.length - 1) {
                          setCurrentIndex((prev) => prev + 1);
                          setIsFlipped(false);
                        }
                      }}
                      disabled={currentIndex === filteredWords.length - 1}
                      className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white disabled:opacity-30"
                    >
                      <span>Sonraki</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* SM-2 Spaced Repetition Grading Buttons */}
              <div className="space-y-2 pt-2">
                <p className="text-center text-xs font-bold text-slate-500 dark:text-slate-400">
                  Bu kelimeyi ne kadar iyi hatırladın? (Aralıklı Tekrar Algoritması)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => handleGrade(0)}
                    className="py-3 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 font-extrabold text-xs flex flex-col items-center gap-1 transition-transform active:scale-95"
                  >
                    <span>🔴 Hatırlamadım</span>
                    <span className="text-[10px] font-normal opacity-75">Yarın Tekrar</span>
                  </button>

                  <button
                    onClick={() => handleGrade(3)}
                    className="py-3 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300 font-extrabold text-xs flex flex-col items-center gap-1 transition-transform active:scale-95"
                  >
                    <span>🟠 Zor Hatırladım</span>
                    <span className="text-[10px] font-normal opacity-75">+2 Gün Sonra</span>
                  </button>

                  <button
                    onClick={() => handleGrade(4)}
                    className="py-3 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-900 text-sky-700 dark:text-sky-300 font-extrabold text-xs flex flex-col items-center gap-1 transition-transform active:scale-95"
                  >
                    <span>🟢 İyi Hatırladım</span>
                    <span className="text-[10px] font-normal opacity-75">+4 Gün Sonra</span>
                  </button>

                  <button
                    onClick={() => handleGrade(5)}
                    className="py-3 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 font-extrabold text-xs flex flex-col items-center gap-1 transition-transform active:scale-95"
                  >
                    <span>🔵 Çok Kolaydı</span>
                    <span className="text-[10px] font-normal opacity-75">+7 Gün Sonra</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. SÖZLÜK / ATLAS LİSTE MODU (FULL SEARCHABLE A-Z TABLE)                   */}
      {/* ========================================================================= */}
      {viewMode === 'dictionary' && (
        <div className="space-y-4">
          {/* Search, Day & Sort Controls */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`${YDS_VOCABULARY_LIST.length} kelime içinde İngilizce, Türkçe veya çağrışım ara...`}
                  className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Day filter selector */}
              <select
                value={dictDayFilter}
                onChange={(e) => setDictDayFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="px-3 py-2 text-xs font-bold rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">📅 Tüm Günler (30 Gün)</option>
                {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>
                    Gün {d} ({YDS_VOCABULARY_LIST.filter((w) => w.groupDay === d).length} Kelime)
                  </option>
                ))}
              </select>

              {/* Sort selector */}
              <select
                value={dictSort}
                onChange={(e) => setDictSort(e.target.value as any)}
                className="px-3 py-2 text-xs font-bold rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="day">📌 Gün Sırasına Göre</option>
                <option value="az">🔤 A'dan Z'ye</option>
                <option value="za">🔤 Z'den A'ya</option>
              </select>
            </div>

            {/* Results count & page stats */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
              <span>
                Toplam <strong>{dictionaryWords.length}</strong> kelime listelendi
              </span>
              <span>
                Sayfa <strong>{dictPage}</strong> / {totalDictPages}
              </span>
            </div>
          </div>

          {/* Dictionary Word Cards List */}
          {paginatedDictWords.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
              <Search className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-800 dark:text-white">
                Eşleşen kelime bulunamadı
              </h3>
              <p className="text-xs text-slate-500">
                Arama filtrenizi temizleyerek tekrar deneyebilirsiniz.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setDictDayFilter('all');
                  setCategoryFilter('all');
                }}
                className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold"
              >
                Filtreleri Temizle
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {paginatedDictWords.map((word) => {
                const badge = getTypeBadge(word.type);
                const isBook = bookmarkedWords.includes(word.id);
                return (
                  <div
                    key={word.id}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-800 transition-all space-y-2.5"
                  >
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                          {word.word}
                        </h4>
                        {word.phonetic && (
                          <span className="text-xs font-mono text-slate-400">
                            {word.phonetic}
                          </span>
                        )}
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${badge.style}`}>
                          {badge.label}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          Gün {word.groupDay}
                        </span>
                        {word.frequency === 'ultra' && (
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                            🔥 Sık Çıkar
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => playAudio(word.word)}
                          title="Telaffuzu Dinle"
                          className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 hover:scale-105 active:scale-95 transition-transform"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => onToggleBookmark(word.id)}
                          title={isBook ? 'Kaydedilenlerden Çıkar' : 'Kaydet'}
                          className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:scale-105 active:scale-95 transition-transform"
                        >
                          {isBook ? (
                            <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Meaning */}
                    <div className="text-sm font-bold text-indigo-700 dark:text-indigo-400">
                      {word.meaning}
                    </div>

                    {/* Akılda Kalıcı Çağrışım (Hafıza Tekniği) */}
                    {word.mnemonic && (
                      <div className="bg-amber-500/10 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/60 p-2.5 rounded-xl space-y-0.5">
                        <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-300 font-extrabold text-[11px]">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>💡 Akılda Kalıcı Çağrışım:</span>
                        </div>
                        <p className="text-xs text-slate-800 dark:text-slate-200 pl-5 font-medium leading-relaxed">
                          {word.mnemonic}
                        </p>
                      </div>
                    )}

                    {/* Synonyms & Collocations */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
                      {word.synonyms && word.synonyms.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-slate-400 text-[11px] font-semibold">Eş Anlam:</span>
                          {word.synonyms.map((s, i) => (
                            <span
                              key={i}
                              className="px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-[11px] font-medium"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                      {word.collocations && word.collocations.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-slate-400 text-[11px] font-semibold">Kalıplar:</span>
                          {word.collocations.map((c, i) => (
                            <span
                              key={i}
                              className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px]"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Example Sentence */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl text-xs space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="italic font-medium text-slate-800 dark:text-slate-200">
                          "{word.exampleEn}"
                        </span>
                        <button
                          type="button"
                          onClick={() => playAudio(word.exampleEn)}
                          className="text-sky-600 dark:text-sky-400 hover:text-sky-700 shrink-0 ml-2"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {word.exampleTr}
                      </p>
                    </div>

                    {/* YDS Exam Tip */}
                    {word.ydsTip && (
                      <div className="text-[11px] text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 px-2.5 py-1.5 rounded-lg flex items-start gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span><strong>YDS Notu:</strong> {word.ydsTip}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Controls */}
          {totalDictPages > 1 && (
            <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-xs font-bold">
              <button
                onClick={() => {
                  setDictPage((prev) => Math.max(prev - 1, 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                disabled={dictPage === 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Önceki Sayfa</span>
              </button>

              <span className="text-slate-500">
                Sayfa {dictPage} / {totalDictPages}
              </span>

              <button
                onClick={() => {
                  setDictPage((prev) => Math.min(prev + 1, totalDictPages));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                disabled={dictPage === totalDictPages}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <span>Sonraki Sayfa</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
