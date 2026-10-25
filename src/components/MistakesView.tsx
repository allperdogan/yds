import React, { useState } from 'react';
import { AlertCircle, Bookmark, CheckCircle2, Trash2, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { YdsQuestion, YdsWord } from '../types';
import { YDS_QUESTIONS_DATA } from '../data/ydsQuestions';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';
import { AudioService } from '../services/audioService';

interface MistakesViewProps {
  mistakeQuestionIds: string[];
  bookmarkedWords: string[];
  onRemoveMistake: (questionId: string) => void;
  onRemoveBookmark: (wordId: string) => void;
  onNavigateToPractice: () => void;
  onNavigateToVocab: () => void;
}

export const MistakesView: React.FC<MistakesViewProps> = ({
  mistakeQuestionIds,
  bookmarkedWords,
  onRemoveMistake,
  onRemoveBookmark,
  onNavigateToPractice,
  onNavigateToVocab
}) => {
  const [activeTab, setActiveTab] = useState<'questions' | 'words'>('questions');

  const mistakeQuestions: YdsQuestion[] = YDS_QUESTIONS_DATA.filter((q) =>
    mistakeQuestionIds.includes(q.id)
  );

  const bookmarkedWordList: YdsWord[] = YDS_VOCABULARY_LIST.filter((w) =>
    bookmarkedWords.includes(w.id)
  );

  return (
    <div className="space-y-6 pb-24 md:pb-12 max-w-4xl mx-auto">
      {/* Header Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 text-xs font-bold mb-2">
            <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
            <span>Kişisel İyileştirme İstasyonu</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Hata Defterim & Zayıf Noktalarım
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Sınavda 90+ puanı garantileyen en kritik alışkanlık; yanlış yapılan her soruyu ve zorlanılan kelimeleri tekrar tekrar eritip sıfırlamaktır.
          </p>
        </div>

        {/* Tab switch pills */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('questions')}
            className={`px-3.5 py-2 rounded-lg transition-all ${
              activeTab === 'questions'
                ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Hatalı Sorular ({mistakeQuestions.length})
          </button>
          <button
            onClick={() => setActiveTab('words')}
            className={`px-3.5 py-2 rounded-lg transition-all ${
              activeTab === 'words'
                ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Zor Kelimeler ({bookmarkedWordList.length})
          </button>
        </div>
      </div>

      {/* Tab 1: Yanlış Çözülen Sorular */}
      {activeTab === 'questions' && (
        <div className="space-y-4">
          {mistakeQuestions.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Harika! Hata defterinde bekleyen soru yok.
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Test çözerken yanlış yaptığın tüm sorular otomatik olarak burada toplanır ve tekrar çözmene imkan tanır.
              </p>
              <button
                onClick={onNavigateToPractice}
                className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700 transition-colors"
              >
                Soru Bankasına Git
              </button>
            </div>
          ) : (
            mistakeQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 px-2 py-0.5 rounded">
                      Hata #{idx + 1}
                    </span>
                    <span className="text-xs font-semibold capitalize text-slate-500">
                      {q.type.replace('_', ' ')}
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveMistake(q.id)}
                    title="Öğrendim, Hata Defterinden Kaldır"
                    className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-emerald-600 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Öğrendim (Kaldır)</span>
                  </button>
                </div>

                {/* Question */}
                <p className="text-sm font-bold text-slate-900 dark:text-white whitespace-pre-line">
                  {q.question}
                </p>

                {/* Options summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(Object.keys(q.options) as Array<keyof typeof q.options>).map((optKey) => {
                    const isAns = optKey === q.answer;
                    return (
                      <div
                        key={optKey}
                        className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                          isAns
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-900 dark:text-emerald-200 font-bold'
                            : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <span className="font-bold">{optKey})</span>
                        <span>{q.options[optKey]}</span>
                        {isAns && <span className="ml-auto text-[10px] bg-emerald-200 dark:bg-emerald-900 px-1.5 py-0.2 rounded font-extrabold">Doğru Şık</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Tactical Solution */}
                <div className="bg-slate-50 dark:bg-slate-850 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Taktiksel Çözüm: {q.tacticUsed}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {q.explanation}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 2: Kaydedilen Zor Kelimeler */}
      {activeTab === 'words' && (
        <div className="space-y-4">
          {bookmarkedWordList.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
              <Bookmark className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Henüz kaydedilmiş kelime yok.
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                SRS Kelime modülünde zorlandığın kartların üzerindeki yıldız/kaydet butonuna basarak buraya ekleyebilirsin.
              </p>
              <button
                onClick={onNavigateToVocab}
                className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700 transition-colors"
              >
                Kelimeleri İncele
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bookmarkedWordList.map((w) => (
                <div
                  key={w.id}
                  className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-black text-slate-900 dark:text-white">
                        {w.word}
                      </h4>
                      <p className="text-xs font-bold text-sky-600 dark:text-sky-400">
                        {w.meaning}
                      </p>
                    </div>

                    <button
                      onClick={() => onRemoveBookmark(w.id)}
                      title="Kaydedilenlerden Çıkar"
                      className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Synonyms */}
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

                  {/* Example sentence */}
                  <div className="bg-slate-50 dark:bg-slate-850 p-2.5 rounded-xl text-xs text-slate-600 dark:text-slate-300 italic border border-slate-200/60 dark:border-slate-800">
                    "{w.exampleEn}"
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
