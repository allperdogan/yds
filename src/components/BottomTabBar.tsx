import React from 'react';
import { Home, BookOpen, Timer, AlertCircle } from 'lucide-react';
import { MAIN_TABS, MainTabId, parentTab } from '../navigation';

interface BottomTabBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mistakesCount: number;
  pendingReviewCount?: number;
}

const ICONS: Record<MainTabId, React.ComponentType<{ className?: string }>> = {
  today: Home,
  study: BookOpen,
  mock_exam: Timer,
  mistakes: AlertCircle
};

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab, setActiveTab, mistakesCount }) => {
  const current = parentTab(activeTab);
  return (
    <nav
      aria-label="Mobil Gezinme Çubuğu"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe"
    >
      <div className="flex items-center justify-between py-1.5 px-2 max-w-lg mx-auto">
        {MAIN_TABS.map((tab) => {
          const Icon = ICONS[tab.id];
          const isActive = current === tab.id;
          const badge = tab.id === 'mistakes' && mistakesCount > 0 ? mistakesCount : undefined;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1 flex-1 min-w-0 ${
                isActive ? 'text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-500 dark:text-slate-400 font-medium'
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {badge !== undefined && (
                  <span className="absolute -top-1.5 -right-2.5 bg-rose-500 text-white text-[9px] font-bold px-1 rounded-full min-w-4 text-center">
                    {badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-0.5">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
