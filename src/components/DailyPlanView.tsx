import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Circle, ArrowRight, Zap, Target, BookOpen, Sparkles, ChevronRight, RotateCcw } from 'lucide-react';
import { DailyMission } from '../types';
import { YDS_30_DAY_CURRICULUM } from '../data/ydsCurriculum';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';

interface DailyPlanViewProps {
  completedDays: number[];
  onToggleDayCompleted: (day: number) => void;
  onNavigateToVocabDay: (day: number) => void;
  onNavigateToTactic: (tacticType: string) => void;
  onNavigateToPractice: (day?: number) => void;
  onResetProgress?: () => void;
  onBack?: () => void;
}

export const DailyPlanView: React.FC<DailyPlanViewProps> = ({
  completedDays,
  onToggleDayCompleted,
  onNavigateToVocabDay,
  onNavigateToTactic,
  onNavigateToPractice,
  onResetProgress,
  onBack
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [activeDay, setActiveDay] = useState<number>(1);

  const completedCount = completedDays.length;
  const progressPercent = Math.round((completedCount / 30) * 100);

  // Filter days by week
  const filteredMissions = YDS_30_DAY_CURRICULUM.filter((m) => {
    if (selectedWeek === 1) return m.day >= 1 && m.day <= 7;
    if (selectedWeek === 2) return m.day >= 8 && m.day <= 14;
    if (selectedWeek === 3) return m.day >= 15 && m.day <= 21;
    if (selectedWeek === 4) return m.day >= 22 && m.day <= 30;
    return true;
  });

  const currentMission = YDS_30_DAY_CURRICULUM.find((m) => m.day === activeDay) || YDS_30_DAY_CURRICULUM[0];
  const isCurrentDayDone = completedDays.includes(currentMission.day);

  return (
    <div className="space-y-6 pb-20 md:pb-8">
      {/* Header: back, title, progress */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              aria-label="Geri"
              className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">30 Günlük Program</h1>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Her gün için kelime, taktik ve soru görevi. Bitirdiğin günü işaretle.
        </p>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 space-y-2">
          <div className="flex items-baseline justify-between gap-2">
            <p className="font-semibold text-slate-900 dark:text-white tabular-nums">{completedCount} / 30 Gün</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{30 - completedCount} gün kaldı</p>
          </div>
          <div
            className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Program ilerlemesi"
          >
            <div className="h-full bg-emerald-500 transition-all" style={{ width: `${progressPercent}%` }} />
          </div>
          {onResetProgress && completedCount > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Tüm tamamlanan günler ve ilerlemeniz sıfırlanıp 0. Güne dönülecektir. Baştan başlamak istediğinize emin misiniz?')) {
                  onResetProgress();
                  setActiveDay(1);
                }
              }}
              title="İlerlemeyi Sıfırla (0. Güne Dön)"
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-rose-600 inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Baştan başla</span>
            </button>
          )}
        </div>

        {/* Week Selector */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-sm font-semibold">
          {[
            { week: 1, label: '1. Hafta', hint: 'Temel & Çeviri' },
            { week: 2, label: '2. Hafta', hint: 'Bağlaçlar & Cümle' },
            { week: 3, label: '3. Hafta', hint: 'Paragraf' },
            { week: 4, label: '4. Hafta', hint: 'İleri Soru & Simülasyon' }
          ].map((w) => (
            <button
              key={w.week}
              onClick={() => setSelectedWeek(w.week)}
              title={w.hint}
              className={`flex-1 px-2 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedWeek === w.week
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      {/* 0. GÜN: SIFIR NOKTASI & YDS BAŞLANGIÇ ORYANTASYONU */}
      <div className="bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-indigo-500/10 border-2 border-amber-300/80 dark:border-amber-800/80 rounded-2xl p-5 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-500 text-white shadow-xs">
              0. GÜN
            </span>
            <h3 className="text-sm md:text-base font-black text-slate-900 dark:text-white">
              Sıfır Noktası: YDS Kampı Başlangıç ve Kondisyon Protokolü
            </h3>
          </div>
          <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 hidden sm:inline">
            🎯 Hedef: 80 - 90+
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Kampa başlarken bilmeniz gereken altın formül: <strong>Önce kelimeyi zihninde kodla (1. Adım), ardından hemen testini çözüp pekiştir (2. Adım).</strong> Sınavda 180 dakika boyunca dikkatin dağılmaması için her gün planlanan 45-50 kelimelik dozu aşmadan, aralıklı tekrarla (SRS) ilerleyin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs">
          <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
            <span className="font-extrabold text-amber-600 dark:text-amber-400 block mb-0.5">
              1. Önce Kelimeleri Öğren
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Teste girmeden o günün kelimelerini, fonetiğini ve Türkçe çağrışım kodlarını incele.
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
            <span className="font-extrabold text-sky-600 dark:text-sky-400 block mb-0.5">
              2. Günün Testini Çöz
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Hemen ardından 4 şıklı akademik cümle testinde o kelimeleri görerek refleks kazan.
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400 block mb-0.5">
              3. Yanlışları Tekrar Et
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Yanlış yapılanlar otomatik Hata Defterine gider; SM-2 algoritmasıyla kalıcılaşır.
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Days List + Active Day Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Days List */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {selectedWeek}. Hafta Günlük Görevleri
            </h2>
            <span className="text-xs text-slate-400">
              {filteredMissions.filter((m) => completedDays.includes(m.day)).length} / {filteredMissions.length} Tamam
            </span>
          </div>

          {filteredMissions.map((mission) => {
            const isDone = completedDays.includes(mission.day);
            const isSelected = activeDay === mission.day;

            return (
              <div
                key={mission.day}
                onClick={() => setActiveDay(mission.day)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-400 dark:border-sky-600 shadow-sm ring-1 ring-sky-400'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleDayCompleted(mission.day);
                    }}
                    title={isDone ? 'Tamamlandı olarak işaretli' : 'Tamamla'}
                    className="transition-transform active:scale-90"
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-100 dark:fill-emerald-950" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600 hover:text-sky-500" />
                    )}
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-xs text-sky-600 dark:text-sky-400">
                        GÜN {mission.day}
                      </span>
                      {isDone && (
                        <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.2 rounded font-semibold">
                          Tamamlandı
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                      {mission.title}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-sky-600 dark:text-sky-400 translate-x-1' : 'text-slate-400'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Day Deep Dive Card */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 sticky top-20">
            {/* Mission Title Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-bold mb-2">
                  <Zap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  GÜN {currentMission.day} HEDEFİ
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {currentMission.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {currentMission.subtitle}
                </p>
              </div>

              <button
                onClick={() => onToggleDayCompleted(currentMission.day)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  isCurrentDayDone
                    ? 'bg-emerald-50 text-emerald-600 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-800'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-200'
                }`}
              >
                {isCurrentDayDone ? '✓ Gün Tamamlandı' : 'Tamamlandı Olarak İşaretle'}
              </button>
            </div>

            {/* Motivational Quote */}
            <div className="bg-amber-50/70 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3.5 rounded-r-xl">
              <p className="text-xs font-medium italic text-amber-900 dark:text-amber-200">
                "{currentMission.quote}"
              </p>
            </div>

            {/* Target Breakdown Cards */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Günün Görevleri & Kazanımları
              </h4>

              {/* Focus Area */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                <Target className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    Günün Odak Noktası
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {currentMission.focusArea}
                  </p>
                </div>
              </div>

              {/* Word Quota */}
              {(() => {
                const dayWordCount = YDS_VOCABULARY_LIST.filter((w) => w.groupDay === currentMission.day).length;
                const displayCount = dayWordCount > 0 ? dayWordCount : currentMission.wordCountTarget;
                return (
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">
                          Akademik Kelime Kotası ({displayCount} Kelime)
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {displayCount} Yeni Kritik Kelime + SRS Tekrarları
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigateToVocabDay(currentMission.day)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700 font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>Kelimeleri Çalış</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })()}

              {/* Tactic Study */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      Sınav Çözüm Taktiği
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                      {currentMission.tacticType.replace('_', ' ')} Formülleri
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigateToTactic(currentMission.tacticType)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-xs transition-colors shadow-sm"
                >
                  <span>Taktiği Oku</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Action Button to Start Mission */}
            <div className="pt-2">
              <button
                onClick={() => onNavigateToPractice(currentMission.day)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-[0.99] transition-all"
              >
                <span>Günün Soru Pratiğini Başlat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
