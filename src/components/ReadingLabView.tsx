import React, { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, HelpCircle, Layers, Split, Volume2, ShieldAlert } from 'lucide-react';
import { ReadingPassage, YdsQuestion } from '../types';
import { YDS_READING_PASSAGES } from '../data/ydsReadingPassages';
import { AudioService } from '../services/audioService';

const PASSAGE_TOPICS: ReadingPassage['topic'][] = [
  'Science & Technology',
  'Health & Medicine',
  'History & Archaeology',
  'Economics & Environment',
  'Social Sciences'
];

interface ReadingLabViewProps {
  onAddMistake: (questionId: string) => void;
}

export const ReadingLabView: React.FC<ReadingLabViewProps> = ({ onAddMistake }) => {
  const [selectedPassageId, setSelectedPassageId] = useState<string>(YDS_READING_PASSAGES[0].id);
  const [activeTab, setActiveTab] = useState<'reading' | 'deconstruct' | 'questions'>('reading');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});

  const [topicFilter, setTopicFilter] = useState<'all' | ReadingPassage['topic']>('all');
  const [solvedPassageIds, setSolvedPassageIds] = useState<Set<string>>(new Set());

  const currentPassage = YDS_READING_PASSAGES.find((p) => p.id === selectedPassageId) || YDS_READING_PASSAGES[0];
  const filteredPassages =
    topicFilter === 'all' ? YDS_READING_PASSAGES : YDS_READING_PASSAGES.filter((p) => p.topic === topicFilter);
  const currentIndex = filteredPassages.findIndex((p) => p.id === currentPassage.id);

  const selectPassage = (id: string) => {
    setSelectedPassageId(id);
    setUserAnswers({});
    setShowExplanations({});
  };

  const goRelative = (step: number) => {
    const next = filteredPassages[currentIndex + step];
    if (next) selectPassage(next.id);
  };

  const handleSelectOption = (qId: string, optKey: string, correctAns: string) => {
    if (userAnswers[qId]) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optKey }));
    setShowExplanations((prev) => ({ ...prev, [qId]: true }));
    setSolvedPassageIds((prev) => new Set(prev).add(currentPassage.id));
    if (optKey !== correctAns) {
      onAddMistake(qId);
    }
  };

  const playAudio = (text: string) => {
    AudioService.speak(text);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-24 md:pb-12 px-2">
      {/* Header Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
            <span>The Economist & Nature Düzeyi Paragraf Laboratuvarı</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Akademik Okuma & Ağır Cümle Deşifre Atölyesi
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            YDS'nin 20 paragraf ve 10 cloze test sorusunda adayları eleyen karmaşık cümle yapılarını (sadeleştirmeler, isim/sıfat cümlecikleri, devrik yapılar) adım adım parçalayın.
          </p>
        </div>

        {/* Tab Pills for selected passage view */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('reading')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'reading'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Makale Metni</span>
          </button>
          <button
            onClick={() => setActiveTab('deconstruct')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'deconstruct'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Split className="w-3.5 h-3.5" />
            <span>Cümle Deşifre</span>
          </button>
          <button
            onClick={() => setActiveTab('questions')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'questions'
                ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>4 Soru Seti</span>
          </button>
        </div>
      </div>

      {/* Makale Seçici: konu filtresi + liste + önceki/sonraki */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {(['all', ...PASSAGE_TOPICS] as const).map((t) => (
            <button
              key={t}
              onClick={() => {
                setTopicFilter(t);
                const first = t === 'all' ? YDS_READING_PASSAGES[0] : YDS_READING_PASSAGES.find((p) => p.topic === t);
                if (first) selectPassage(first.id);
              }}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold shrink-0 border transition-colors ${
                topicFilter === t
                  ? 'bg-sky-600 text-white border-sky-600'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {t === 'all' ? `Tümü (${YDS_READING_PASSAGES.length})` : `${t} (${YDS_READING_PASSAGES.filter((p) => p.topic === t).length})`}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => goRelative(-1)}
            disabled={currentIndex <= 0}
            aria-label="Önceki parça"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <select
            aria-label="Okuma parçası seç"
            value={currentPassage.id}
            onChange={(e) => selectPassage(e.target.value)}
            className="flex-1 min-w-0 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold text-slate-800 dark:text-slate-200"
          >
            {filteredPassages.map((p, i) => (
              <option key={p.id} value={p.id}>
                {i + 1}. {p.title}{solvedPassageIds.has(p.id) ? ' ✓' : ''}
              </option>
            ))}
          </select>
          <button
            onClick={() => goRelative(1)}
            disabled={currentIndex >= filteredPassages.length - 1}
            aria-label="Sonraki parça"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 shrink-0">
            {currentIndex + 1} / {filteredPassages.length}
          </span>
        </div>
      </div>

      {/* 1. SEKME: MAKALE METNİ & KELİME NOTLARI */}
      {activeTab === 'reading' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sol Kolon: Makale Metni */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                  {currentPassage.topic}
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {currentPassage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 italic">
                  Kaynak: {currentPassage.sourceHint} · {currentPassage.wordCount} Kelime
                </p>
              </div>

              <button
                onClick={() => playAudio(currentPassage.passageText.slice(0, 200))}
                title="Sesli Dinle (TTS)"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors shrink-0"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none text-sm md:text-base font-serif leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
              {currentPassage.passageText}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setActiveTab('deconstruct')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Ağır Cümleleri Deşifre Et</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sağ Kolon: Metin İçi Kritik YDS Kelime Sözlüğü */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-700 dark:text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Metnin Kritik YDS Kelimeleri</span>
              </div>

              <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                {currentPassage.vocabularyNotes.map((v, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-xs text-sky-700 dark:text-sky-300">
                        {v.word}
                      </span>
                      <button
                        onClick={() => playAudio(v.word)}
                        className="text-slate-400 hover:text-sky-600 p-1"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      {v.meaningTr}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                      💡 {v.contextNote}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. SEKME: CÜMLE DEŞİFRE İSTASYONU (SENTENCE DECONSTRUCTION) */}
      {activeTab === 'deconstruct' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-1">
              <Split className="w-3.5 h-3.5 text-indigo-500" />
              <span>Cümle Mühendisliği & Parçalama Analizi</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              Karmaşık Akademik Cümlelerin Anatomisi
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Özne, ana fiil, yan cümlecikler ve kısaltmaların renk kodlu analiziyle cümlenin şifresini çözün.
            </p>
          </div>

          <div className="space-y-6">
            {currentPassage.deconstructedSentences.map((s, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-850 p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4"
              >
                {/* Orijinal Cümle */}
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    Orijinal Cümle #{idx + 1}
                  </span>
                  <p className="text-sm md:text-base font-serif font-bold text-slate-900 dark:text-white leading-relaxed">
                    "{s.originalSentence}"
                  </p>
                </div>

                {/* Özne, Yüklem, Nesne Tablosu */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase text-sky-600 dark:text-sky-400">
                      🔷 Cümlenin Öznesi (Subject):
                    </span>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {s.subject}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase text-emerald-600 dark:text-emerald-400">
                      🔶 Cümlenin Ana Yüklemi (Main Verb):
                    </span>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {s.mainVerb}
                    </p>
                  </div>
                </div>

                {/* Gramer & Kısaltma Yapıları */}
                <div className="bg-white/80 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-indigo-200/60 dark:border-indigo-900/40 space-y-2">
                  <span className="text-[11px] font-black uppercase text-indigo-700 dark:text-indigo-300">
                    🔍 Cümlede Kullanılan Kritik YDS Yapıları:
                  </span>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                    {s.grammaticalStructures.map((g, gIdx) => (
                      <li key={gIdx} className="font-medium">
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Birebir Türkçe Akademik Çevirisi */}
                <div className="bg-emerald-50/70 dark:bg-emerald-950/30 p-3.5 rounded-2xl border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed">
                  <strong className="font-extrabold text-emerald-700 dark:text-emerald-400">
                    Birebir Türkçe Çevirisi:
                  </strong>{' '}
                  {s.translationTr}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => setActiveTab('questions')}
              className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2"
            >
              <span>Metnin 4 Sorusunu Çöz</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 3. SEKME: METNE BAĞLI 4'ER YDS SORUSU */}
      {activeTab === 'questions' && (
        <div className="space-y-6">
          {currentPassage.questions.map((q, qIndex) => {
            const isAnswered = !!userAnswers[q.id];
            const selectedOpt = userAnswers[q.id];
            const isCorrect = selectedOpt === q.answer;

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <span className="text-xs font-black bg-slate-900 dark:bg-slate-800 text-white px-2.5 py-1 rounded-lg">
                    SORU {qIndex + 1} / 4
                  </span>
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2 py-0.5 rounded">
                    {q.tacticUsed}
                  </span>
                </div>

                <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                  {q.question}
                </p>

                {/* Şıklar */}
                <div className="space-y-2.5">
                  {(Object.keys(q.options) as Array<keyof typeof q.options>).map((optKey) => {
                    const optText = q.options[optKey];
                    const isOptSelected = selectedOpt === optKey;
                    const isOptCorrect = optKey === q.answer;

                    let optStyle = 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-800 hover:border-slate-400';

                    if (isAnswered) {
                      if (isOptCorrect) {
                        optStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-400 font-bold';
                      } else if (isOptSelected && !isOptCorrect) {
                        optStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 ring-2 ring-rose-400 font-bold';
                      } else {
                        optStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
                      }
                    }

                    return (
                      <button
                        key={optKey}
                        onClick={() => handleSelectOption(q.id, optKey, q.answer)}
                        disabled={isAnswered}
                        className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all flex items-start gap-3 ${optStyle}`}
                      >
                        <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 font-bold text-xs flex items-center justify-center shrink-0">
                          {optKey}
                        </span>
                        <span className="text-xs md:text-sm pt-0.5 leading-snug">
                          {optText}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Taktiksel Çözüm */}
                {isAnswered && (
                  <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 animate-in fade-in">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase text-indigo-600 dark:text-indigo-400">
                        {isCorrect ? '✓ Doğru Cevap: ' : '✗ Yanlış: Doğru Cevap '}
                        {q.answer}
                      </span>
                    </div>

                    {q.trapWarning && (
                      <div className="bg-rose-50 dark:bg-rose-950/40 p-2.5 rounded-xl border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2">
                        <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <div>{q.trapWarning}</div>
                      </div>
                    )}

                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
