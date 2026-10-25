import React from 'react';
import { Flame, Moon, Sun, Smartphone, Cloud } from 'lucide-react';
import { UserStats } from '../types';

interface NavbarProps {
  stats: UserStats;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenInstallModal: () => void;
  onOpenSyncModal?: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  stats,
  darkMode,
  setDarkMode,
  onOpenInstallModal,
  onOpenSyncModal,
  activeTab,
  setActiveTab
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Simple Brand */}
        <div
          onClick={() => setActiveTab('vocab_drill')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
            YDS
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
              Master
            </span>
            <span className="ml-1 text-[10px] font-extrabold bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 rounded-md border border-amber-200/60 dark:border-amber-800/60">
              PRO
            </span>
          </div>
        </div>

        {/* Clean, Section-Centric Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-800/90 p-1 rounded-xl text-xs font-bold border border-slate-200/50 dark:border-slate-700/50">
          <button
            onClick={() => setActiveTab('vocab_drill')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'vocab_drill' || activeTab === 'vocab'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <span>🎯 Kelime</span>
            <span className="text-[10px] opacity-75 font-normal hidden lg:inline">(1-6)</span>
          </button>
          <button
            onClick={() => setActiveTab('tactics')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'tactics' || activeTab === 'practice'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <span>💡 2. Soru Tipleri & Taktikler</span>
          </button>
          <button
            onClick={() => setActiveTab('reading_lab')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'reading_lab'
                ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-300 shadow-sm font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <span>📖 3. Paragraf & Cümle Deşifre</span>
          </button>
          <button
            onClick={() => setActiveTab('mock_exam')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'mock_exam'
                ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-300 shadow-sm font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <span>⏱️ 4. 80 Soruluk Deneme</span>
            <span className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 px-1 py-0.2 rounded font-bold hidden xl:inline">3 Sınav</span>
          </button>
          <button
            onClick={() => setActiveTab('daily')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'daily'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <span>📅 30 Günlük Plan</span>
          </button>
          <button
            onClick={() => setActiveTab('mistakes')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'mistakes'
                ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-300 shadow-sm font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <span>📓 Hatalarım ({stats.mistakeQuestionIds.length})</span>
          </button>
        </nav>

        {/* Right Badges & Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Streak */}
          <div
            title="Günlük Çalışma Serisi"
            className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-2.5 py-1 rounded-full text-amber-600 dark:text-amber-400 font-bold text-xs"
          >
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{stats.streak} Gün</span>
          </div>

          {/* Progress Sync / Backup Modal */}
          {onOpenSyncModal && (
            <button
              onClick={onOpenSyncModal}
              title="İlerleme Yedekle & Cihaz Eşitle"
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <Cloud className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </button>
          )}

          {/* iPhone / PWA Help */}
          <button
            onClick={onOpenInstallModal}
            title="iPhone / Bilgisayar Kurulumu"
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 hover:text-sky-600 transition-colors"
          >
            <Smartphone className="w-4 h-4 text-sky-600" />
          </button>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? 'Açık Mod' : 'Karanlık Mod'}
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
