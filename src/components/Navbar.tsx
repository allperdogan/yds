import React, { useEffect, useRef, useState } from 'react';
import { Flame, Moon, Sun, Smartphone, Cloud, Eye, Settings } from 'lucide-react';
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

const MenuItem: React.FC<{ icon: React.ReactNode; label: string; onClick: () => void }> = ({ icon, label, onClick }) => (
  <button
    role="menuitem"
    onClick={onClick}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
  >
    <span className="text-slate-500 dark:text-slate-400">{icon}</span>
    {label}
  </button>
);

const MenuToggle: React.FC<{ icon: React.ReactNode; label: string; on: boolean; onClick: () => void }> = ({
  icon,
  label,
  on,
  onClick
}) => (
  <button
    role="menuitemcheckbox"
    aria-checked={on}
    onClick={onClick}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
  >
    <span className="text-slate-500 dark:text-slate-400">{icon}</span>
    <span className="flex-1">{label}</span>
    <span
      aria-hidden="true"
      className={`w-9 h-5 rounded-full p-0.5 transition-colors ${on ? 'bg-sky-600' : 'bg-slate-300 dark:bg-slate-600'}`}
    >
      <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${on ? 'translate-x-4' : ''}`} />
    </span>
  </button>
);

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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the settings menu on an outside tap or Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const pick = (action: () => void) => {
    setMenuOpen(false);
    action();
  };

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

        {/* Streak and one labelled settings menu */}
        <div className="flex items-center gap-2">
          <div
            title="Günlük çalışma serisi"
            className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-2.5 py-1 rounded-full text-amber-700 dark:text-amber-400 font-bold text-xs"
          >
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{stats.streak} Gün</span>
          </div>

          <div ref={menuRef} className="relative">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Ayarlar"
              aria-expanded={menuOpen}
              className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span className="hidden sm:inline">Ayarlar</span>
            </button>

            {menuOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-1.5 text-sm"
              >
                <MenuToggle
                  icon={darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  label="Karanlık mod"
                  on={darkMode}
                  onClick={() => setDarkMode(!darkMode)}
                />
                {onToggleEyeCare && (
                  <MenuToggle
                    icon={<Eye className="w-4 h-4" />}
                    label="Göz dinlendirme (sıcak renkler)"
                    on={!!eyeCareMode}
                    onClick={onToggleEyeCare}
                  />
                )}
                <div className="my-1 border-t border-slate-200 dark:border-slate-700" />
                {onOpenSyncModal && (
                  <MenuItem
                    icon={<Cloud className="w-4 h-4" />}
                    label="Yedekle / başka cihaza taşı"
                    onClick={() => pick(onOpenSyncModal)}
                  />
                )}
                <MenuItem
                  icon={<Smartphone className="w-4 h-4" />}
                  label="Telefona / bilgisayara kur"
                  onClick={() => pick(onOpenInstallModal)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
