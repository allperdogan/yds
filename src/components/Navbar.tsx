import React from 'react';
import { Flame, Moon, Sun, Smartphone, Cloud, Eye } from 'lucide-react';
import { UserStats } from '../types';
import { MAIN_TABS, parentTab } from '../navigation';

interface NavbarProps {
  stats: UserStats;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  eyeCareMode?: boolean;
  onToggleEyeCare?: () => void;
  onOpenInstallModal: () => void;
  onOpenSyncModal?: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  stats,
  darkMode,
  setDarkMode,
  eyeCareMode,
  onToggleEyeCare,
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
          onClick={() => setActiveTab('today')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
            YDS
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
              Hazırlık
            </span>
          </div>
        </div>

        {/* Desktop navigation: the same four sections as the mobile tab bar */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-sm font-semibold">
          {MAIN_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-lg transition-colors ${
                parentTab(activeTab) === tab.id
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
              {tab.id === 'mistakes' && stats.mistakeQuestionIds.length > 0 && (
                <span className="ml-1.5 text-xs text-rose-600 dark:text-rose-400">{stats.mistakeQuestionIds.length}</span>
              )}
            </button>
          ))}
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

          {/* Eye-Care / Warm Reading Mode */}
          {onToggleEyeCare && (
            <button
              onClick={onToggleEyeCare}
              title={eyeCareMode ? 'Göz Dinlendirme Açık (Sıcak Sepya / Mavi Işık Filtresi)' : 'Göz Dinlendirme Modunu Aç'}
              className={`p-2 rounded-xl transition-colors ${
                eyeCareMode
                  ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/60'
                  : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 hover:text-amber-600'
              }`}
            >
              <Eye className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </button>
          )}

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
