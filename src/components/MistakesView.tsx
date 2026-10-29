import React, { useState, useMemo } from 'react';
import { AlertCircle, Bookmark, CheckCircle2, Trash2, ArrowRight, BookOpen, Sparkles, Volume2, HelpCircle, Lightbulb } from 'lucide-react';
import { MistakeCause, MistakeReview, YdsQuestion, YdsWord } from '../types';
import { getUnifiedQuestionById } from '../data/ydsQuestions';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';
import { AudioService } from '../services/audioService';
import { QUESTION_TYPE_LABELS } from '../services/examInsights';
import { CORRECT_TO_RETIRE, MISTAKE_CAUSES, MISTAKE_CAUSE_LABELS, describeDue, isMistakeDue } from '../services/mistakeReview';
import { MistakeCausePicker } from './MistakeCausePicker';

interface MistakesViewProps {
  mistakeQuestionIds: string[];
  bookmarkedWords: string[];
  pendingReviewWords?: string[];
  mistakeReviews?: Record<string, MistakeReview>;
  onRemoveMistake: (questionId: string) => void;
  onMistakeCorrect?: (questionId: string) => void;
  onMistakeWrong?: (questionId: string) => void;
  onSetMistakeCause?: (questionId: string, cause: MistakeCause) => void;
  onRemoveBookmark: (wordId: string) => void;
  onMarkWordKnown?: (wordId: string) => void;
  onRecordQuestionResult?: (questionId: string, selected: string, isCorrect: boolean) => void;
  onNavigateToPractice: () => void;
  onNavigateToVocab: () => void;
}

const OPTION_KEYS = ['A', 'B', 'C', 'D', 'E'] as const;

/**
 * A mistake is solved again on its due day with the answer hidden. A right
 * answer moves it to the next review (3, then 7 days later) and the third one
 * takes it off the list; a wrong one brings it back tomorrow.
 */
const MistakeCard: React.FC<{
  q: YdsQuestion;
  index: number;
  review?: MistakeReview;
  stillListed: boolean;
  onRemoveMistake: (questionId: string) => void;
  onMistakeCorrect?: (questionId: string) => void;
  onMistakeWrong?: (questionId: string) => void;
  onSetMistakeCause?: (questionId: string, cause: MistakeCause) => void;
  onRecordQuestionResult?: (questionId: string, selected: string, isCorrect: boolean) => void;
}> = ({ q, index, review, stillListed, onRemoveMistake, onMistakeCorrect, onMistakeWrong, onSetMistakeCause, onRecordQuestionResult }) => {
  const [picked, setPicked] = useState<string | null>(null);
  const [showPassage, setShowPassage] = useState(true);
  const answered = picked !== null;
  const correct = picked === q.answer;

  const choose = (key: string) => {
    if (answered) return;
    setPicked(key);
    const isCorrect = key === q.answer;
    onRecordQuestionResult?.(q.id, key, isCorrect);
    if (isCorrect) onMistakeCorrect?.(q.id);
    else onMistakeWrong?.(q.id);
  };

  const status = !answered
    ? null
    : !correct
    ? `Yanlış. Doğru cevap ${q.answer}. Yarın tekrar sorulacak.`
    : !stillListed
    ? `Doğru. ${CORRECT_TO_RETIRE}. kez doğru çözdün, listeden çıktı.`
    : `Doğru (${review?.streak ?? 0}/${CORRECT_TO_RETIRE}). ${review ? describeDue(review.due) : ''} tekrar sorulacak.`;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 px-2 py-0.5 rounded">
            Hata #{index + 1}
          </span>
          <span className="text-xs font-semibold text-slate-500">{QUESTION_TYPE_LABELS[q.type] || q.type}</span>
        </div>
        {stillListed && (
          <button
            onClick={() => onRemoveMistake(q.id)}
            title="Bu soruyu tekrar listesinden çıkar"
            className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Listeden çıkar</span>
          </button>
        )}
      </div>

      {q.passage && (
        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setShowPassage((v) => !v)}
            className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300"
          >
            {showPassage ? 'Metni gizle' : 'Metni göster'}
          </button>
          {showPassage && (
            <p className="px-3 pb-3 text-sm leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line max-h-[35vh] overflow-y-auto">
              {q.passage}
            </p>
          )}
        </div>
      )}

      <p className="text-sm font-bold text-slate-900 dark:text-white whitespace-pre-line">{q.question}</p>

      <div className="grid grid-cols-1 gap-2 text-sm">
        {OPTION_KEYS.filter((k) => q.options[k]).map((optKey) => {
          const isAns = optKey === q.answer;
          let cls =
            'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-sky-400';
          if (answered && isAns) cls = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-900 dark:text-emerald-200 font-bold';
          else if (answered && optKey === picked) cls = 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 text-rose-900 dark:text-rose-200';
          else if (answered) cls = 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-500 opacity-60';
          return (
            <button
              key={optKey}
              onClick={() => choose(optKey)}
              disabled={answered}
              className={`p-2.5 rounded-xl border flex items-start gap-2 text-left ${cls}`}
            >
              <span className="font-bold">{optKey})</span>
              <span>{q.options[optKey]}</span>
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="space-y-2">
          <p className={`text-sm font-bold ${correct ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
            {status}
          </p>
          {!correct && onSetMistakeCause && (
            <MistakeCausePicker value={review?.cause} onPick={(cause) => onSetMistakeCause(q.id, cause)} />
          )}
          <div className="bg-slate-50 dark:bg-slate-850 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Taktiksel Çözüm: {q.tacticUsed}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">{q.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export const MistakesView: React.FC<MistakesViewProps> = ({
  mistakeQuestionIds,
  bookmarkedWords,
  pendingReviewWords = [],
  mistakeReviews = {},
  onRemoveMistake,
  onMistakeCorrect,
  onMistakeWrong,
  onSetMistakeCause,
  onRemoveBookmark,
  onMarkWordKnown,
  onRecordQuestionResult,
  onNavigateToPractice,
  onNavigateToVocab
}) => {
  const [activeTab, setActiveTab] = useState<'questions' | 'words'>('questions');

  // Today's list is fixed when the screen opens, so a card stays (with its
  // explanation) after it is answered and moves to a later day.
  const [dueIds] = useState(() => mistakeQuestionIds.filter((id) => isMistakeDue(mistakeReviews[id])));

  // Resolve mistake questions across all sources (Mock 1/2/3, Practice Bank, Reading, Vocab Drill)
  const mistakeQuestions: YdsQuestion[] = useMemo(() => {
    return dueIds
      .map((id) => getUnifiedQuestionById(id))
      .filter((q): q is YdsQuestion => Boolean(q));
  }, [dueIds]);

  const listed = new Set(mistakeQuestionIds);
  const waiting = mistakeQuestionIds.filter((id) => !isMistakeDue(mistakeReviews[id]));
  const nextDue = waiting.map((id) => mistakeReviews[id].due).sort()[0];

  // Which kind of mistake keeps coming back: the student's own tags on the open list.
  const causeCounts = MISTAKE_CAUSES.map((cause) => ({
    cause,
    count: mistakeQuestionIds.filter((id) => mistakeReviews[id]?.cause === cause).length
  }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);

  // Combine manually bookmarked words AND words failed in questions/drills (pendingReviewWords)
  const combinedWordIds = useMemo(() => {
    return Array.from(new Set([...bookmarkedWords, ...pendingReviewWords]));
  }, [bookmarkedWords, pendingReviewWords]);

  const bookmarkedWordList: YdsWord[] = useMemo(() => {
    return YDS_VOCABULARY_LIST.filter((w) => combinedWordIds.includes(w.id));
  }, [combinedWordIds]);

  const playAudio = (text: string) => {
    AudioService.speak(text);
  };

  return (
    <div className="space-y-6 pb-24 md:pb-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Hatalarım</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Yanlış yaptığın sorular ve kelimeler burada. Bir soru ertesi gün, sonra 3 ve 7 gün sonra tekrar gelir; üç kez doğru çözünce listeden çıkar.
          </p>
        </div>

        {/* Tab switch pills */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-sm font-semibold w-full sm:w-auto sm:inline-flex">
          <button
            onClick={() => setActiveTab('questions')}
            className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-lg transition-all ${
              activeTab === 'questions'
                ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Bugün ({mistakeQuestions.length})
          </button>
          <button
            onClick={() => setActiveTab('words')}
            className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-lg transition-all ${
              activeTab === 'words'
                ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Kelimeler ({bookmarkedWordList.length})
          </button>
        </div>
      </div>

      {/* Tab 1: Yanlış Çözülen Sorular */}
      {activeTab === 'questions' && (
        <div className="space-y-4">
          {(waiting.length > 0 || causeCounts.length > 0) && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-2 text-sm">
              {waiting.length > 0 && (
                <p className="text-slate-700 dark:text-slate-300">
                  {waiting.length} soru tekrar gününü bekliyor (ilki {describeDue(nextDue)}).
                </p>
              )}
              {causeCounts.length > 0 && (
                <div className="space-y-1">
                  <p className="text-slate-700 dark:text-slate-300">
                    En çok yanlış nedenin: <span className="font-semibold">{MISTAKE_CAUSE_LABELS[causeCounts[0].cause]}</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {causeCounts.map((c) => (
                      <span
                        key={c.cause}
                        className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {MISTAKE_CAUSE_LABELS[c.cause]}: {c.count}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          {mistakeQuestions.length === 0 ? (
            <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {waiting.length > 0 ? 'Bugün tekrar edilecek soru yok.' : 'Bekleyen hatalı soru yok.'}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Yanlış yaptığın sorular burada toplanır, sen de tekrar çözersin.
              </p>
              <button
                onClick={onNavigateToPractice}
                className="px-4 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-semibold hover:bg-sky-700 transition-colors"
              >
                Soru çözmeye git
              </button>
            </div>
          ) : (
            mistakeQuestions.map((q, idx) => (
              <MistakeCard
                key={q.id}
                q={q}
                index={idx}
                review={mistakeReviews[q.id]}
                stillListed={listed.has(q.id)}
                onRemoveMistake={onRemoveMistake}
                onMistakeCorrect={onMistakeCorrect}
                onMistakeWrong={onMistakeWrong}
                onSetMistakeCause={onSetMistakeCause}
                onRecordQuestionResult={onRecordQuestionResult}
              />
            ))
          )}
        </div>
      )}

      {/* Tab 2: Kaydedilen Zor Kelimeler */}
      {activeTab === 'words' && (
        <div className="space-y-4">
          {bookmarkedWordList.length === 0 ? (
            <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
              <Bookmark className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Bekleyen kelime yok.
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Kelime çalışırken yanlış yaptığın kelimeler burada toplanır.
              </p>
              <button
                onClick={onNavigateToVocab}
                className="px-4 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-semibold hover:bg-sky-700 transition-colors"
              >
                Kelime çalışmaya git
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bookmarkedWordList.map((w) => {
                const isMistakeFromDrill = pendingReviewWords.includes(w.id);
                const isBookmarked = bookmarkedWords.includes(w.id);

                return (
                  <div
                    key={w.id}
                    className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                            {w.type}
                          </span>
                          {isMistakeFromDrill && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 flex items-center gap-1">
                              <span>❌ Soruda Yanlış Yapıldı</span>
                            </span>
                          )}
                          {isBookmarked && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center gap-1">
                              <span>⭐ Zor Kelime</span>
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-black text-slate-900 dark:text-white">
                            {w.word}
                          </h4>
                          <button
                            onClick={() => playAudio(w.word)}
                            className="p-1 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            title="Telaffuzu Dinle"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        <p className="text-xs font-bold text-sky-600 dark:text-sky-400 mt-0.5">
                          {w.meaning}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => {
                            if (onMarkWordKnown) {
                              onMarkWordKnown(w.id);
                            } else {
                              onRemoveBookmark(w.id);
                            }
                          }}
                          title="Öğrendim, Hatalardan Kaldır"
                          className="px-2.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold flex items-center gap-1 transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Öğrendim</span>
                        </button>

                        <button
                          onClick={() => onRemoveBookmark(w.id)}
                          title="Kaydedilenlerden Çıkar"
                          className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Mnemonic / Çağrışım Box */}
                    {w.mnemonic && (
                      <div className="bg-amber-50/70 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200/70 dark:border-amber-800/50 text-xs text-amber-950 dark:text-amber-200 space-y-0.5">
                        <div className="font-extrabold flex items-center gap-1 text-[11px] text-amber-800 dark:text-amber-400">
                          <Lightbulb className="w-3 h-3" />
                          <span>Çağrışım & Hafıza Tekniği:</span>
                        </div>
                        <p className="leading-relaxed text-[11px] font-medium">{w.mnemonic}</p>
                      </div>
                    )}

                    {/* Synonyms */}
                    {w.synonyms && w.synonyms.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {w.synonyms.map((s, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Example sentence */}
                    <div className="bg-slate-50 dark:bg-slate-850 p-2.5 rounded-xl text-xs text-slate-600 dark:text-slate-300 italic border border-slate-200/60 dark:border-slate-800 space-y-1">
                      <p>"{w.exampleEn}"</p>
                      {w.exampleTr && <p className="text-[11px] text-slate-400 not-italic">{w.exampleTr}</p>}
                    </div>

                    {/* YDS Tip */}
                    {w.ydsTip && (
                      <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                        🎯 YDS Notu: {w.ydsTip}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
