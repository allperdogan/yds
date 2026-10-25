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
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Simple Brand */}
        <div
          onClick={() => setActiveTab('vocab_drill')}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white font-black text-sm shadow-sm">
            YDS
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
              Master
            </span>
            <span className="ml-1 text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 rounded">
              PRO
            </span>
          </div>
        </div>

        {/* Exam-Section Centric Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => setActiveTab('vocab_drill')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'vocab_drill' || activeTab === 'vocab'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🎯 Kelime (1-6)
          </button>
          <button
            onClick={() => setActiveTab('tactics')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'tactics' || activeTab === 'practice'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🎯 2. Soru Tipleri & Taktikler (7-42 & 63-80)
          </button>
          <button
            onClick={() => setActiveTab('reading_lab')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'reading_lab'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            📖 3. Paragraf & Cümle Deşifre (43-62)
          </button>
          <button
            onClick={() => setActiveTab('mock_exam')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'mock_exam'
                ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            ⏱️ 4. 80 Soruluk Deneme
          </button>
          <button
            onClick={() => setActiveTab('daily')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'daily'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            📅 30 Günlük Plan
          </button>
          <button
            onClick={() => setActiveTab('mistakes')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'mistakes'
                ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            📓 Hatalarım ({stats.mistakeQuestionIds.length})
          </button>
        </nav>

        {/* Right Badges */}
        <div className="flex items-center gap-2">
          {/* Streak */}
          <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-2.5 py-1 rounded-full text-amber-600 dark:text-amber-400 font-bold text-xs">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{stats.streak} Gün</span>
          </div>

          {/* Progress Sync / Backup Modal */}
          {onOpenSyncModal && (
            <button
              onClick={onOpenSyncModal}
              title="İlerleme Yedekle & Cihaz Eşitle"
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Cloud className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </button>
          )}

          {/* iPhone / PWA Help */}
          <button
            onClick={onOpenInstallModal}
            title="iPhone / Bilgisayar Kurulumu"
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Smartphone className="w-4 h-4 text-sky-600" />
          </button>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
