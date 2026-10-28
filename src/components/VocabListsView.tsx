import React, { useMemo, useState } from 'react';
import { ArrowLeft, Search, Volume2 } from 'lucide-react';
import { WordReview } from '../types';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';
import { AudioService } from '../services/audioService';
import { WordListKind, buildWordLists, nextReviewLabel } from '../services/vocabReview';

interface VocabListsViewProps {
  knownVocabIds: string[];
  pendingReviewVocabIds: string[];
  vocabReviews: Record<string, WordReview>;
  vocabFirstAnswers?: Record<string, boolean>;
  initialList?: WordListKind;
  onBack: () => void;
  onStudy: () => void;
}

const LISTS: Array<{ id: WordListKind; label: string; hint: string }> = [
  { id: 'learned', label: 'Öğrendiklerim', hint: 'Son denemede doğru bildiğin kelimeler. Seyrek tekrar edilir.' },
  { id: 'mistakes', label: 'Hata yaptıklarım', hint: 'En az bir kez yanlış yaptığın kelimeler. Çalışırken önce bunlar gelir.' },
  { id: 'unseen', label: 'Hiç görmediklerim', hint: 'Henüz karşına çıkmamış kelimeler.' }
];

const PAGE = 50;
const WORDS = new Map(YDS_VOCABULARY_LIST.map((w) => [w.id, w]));

export const VocabListsView: React.FC<VocabListsViewProps> = ({
  knownVocabIds,
  pendingReviewVocabIds,
  vocabReviews,
  vocabFirstAnswers,
  initialList = 'learned',
  onBack,
  onStudy
}) => {
  const [active, setActive] = useState<WordListKind>(initialList);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(PAGE);

  const lists = useMemo(
    () =>
      buildWordLists(
        YDS_VOCABULARY_LIST.map((w) => w.id),
        { reviews: vocabReviews, knownIds: knownVocabIds, pendingIds: pendingReviewVocabIds, firstAnswers: vocabFirstAnswers }
      ),
    [vocabReviews, knownVocabIds, pendingReviewVocabIds, vocabFirstAnswers]
  );

  const pending = useMemo(() => new Set(pendingReviewVocabIds), [pendingReviewVocabIds]);

  const words = useMemo(() => {
    const q = query.trim().toLowerCase();
    return lists[active]
      .map((id) => WORDS.get(id)!)
      .filter((w) => !q || w.word.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q));
  }, [lists, active, query]);

  const choose = (id: WordListKind) => {
    setActive(id);
    setLimit(PAGE);
  };

  const current = LISTS.find((l) => l.id === active)!;

  return (
    <div className="max-w-3xl mx-auto space-y-4 pb-24 md:pb-8">
      <div className="flex items-center gap-2">
        <button onClick={onBack} aria-label="Geri" className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white flex-1">Kelime listelerim</h1>
        <button
          onClick={onStudy}
          className="text-sm font-semibold px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white"
        >
          Çalış
        </button>
      </div>

      <div role="tablist" className="grid grid-cols-3 gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
        {LISTS.map((l) => (
          <button
            key={l.id}
            role="tab"
            aria-selected={active === l.id}
            onClick={() => choose(l.id)}
            className={`px-2 py-2 rounded-lg transition-colors ${
              active === l.id
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {l.label} <span className="tabular-nums">({lists[l.id].length.toLocaleString('tr-TR')})</span>
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400">{current.hint}</p>

      <label className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setLimit(PAGE);
          }}
          placeholder="Kelime ya da anlam ara"
          className="flex-1 bg-transparent text-sm outline-none text-slate-900 dark:text-white"
        />
      </label>

      {words.length === 0 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center py-8">Bu listede kelime yok.</p>
      ) : (
        <ul className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl divide-y divide-slate-200 dark:divide-slate-800 overflow-hidden">
          {words.slice(0, limit).map((w) => {
            const r = vocabReviews[w.id];
            return (
              <li key={w.id} className="px-4 py-3 flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {w.word} <span className="font-normal text-slate-600 dark:text-slate-400">· {w.meaning}</span>
                  </p>
                  {active === 'mistakes' && (
                    <p className="text-xs mt-0.5">
                      {r?.wrong ? (
                        <span className="text-rose-700 dark:text-rose-400">{r.wrong} kez yanlış · </span>
                      ) : null}
                      {pending.has(w.id) ? (
                        <span className="text-amber-700 dark:text-amber-400">tekrar listende</span>
                      ) : (
                        <span className="text-emerald-700 dark:text-emerald-400">düzelttin</span>
                      )}
                    </p>
                  )}
                  {active === 'learned' && nextReviewLabel(r) && (
                    <p className="text-xs mt-0.5 text-slate-500 dark:text-slate-400">{nextReviewLabel(r)}</p>
                  )}
                </div>
                <button
                  onClick={() => AudioService.speak(w.word)}
                  aria-label={`${w.word} telaffuz`}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-sky-600"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {words.length > limit && (
        <button
          onClick={() => setLimit((n) => n + PAGE)}
          className="w-full text-sm font-semibold py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
        >
          Daha fazla göster ({(words.length - limit).toLocaleString('tr-TR')})
        </button>
      )}
    </div>
  );
};
