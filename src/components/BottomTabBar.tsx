import React from 'react';
import { Target, BookOpen, Timer, Compass, AlertCircle, Calendar } from 'lucide-react';

interface BottomTabBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mistakesCount: number;
  pendingReviewCount?: number;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab,
  setActiveTab,
  mistakesCount,
  pendingReviewCount
}) => {
  const tabs = [
    {
      id: 'vocab_drill',
      label: 'Kelime',
      icon: Target,
      badge: pendingReviewCount && pendingReviewCount > 0 ? pendingReviewCount : undefined
    },
    { id: 'tactics', label: 'Taktik', icon: Compass },
    { id: 'reading_lab', label: 'Paragraf', icon: BookOpen },
    { id: 'mock_exam', label: 'Deneme', icon: Timer },
    { id: 'daily', label: '30 Gün', icon: Calendar },
    {
      id: 'mistakes',
      label: 'Hatalar',
      icon: AlertCircle,
      badge: mistakesCount > 0 ? mistakesCount : undefined
    }
  ];

  return (
    <nav
      aria-label="Mobil Gezinme Çubuğu"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200/80 dark:border-slate-800/80 pb-safe"
    >
      <div className="flex items-center justify-between py-1.5 px-1 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            activeTab === tab.id ||
            (tab.id === 'tactics' && activeTab === 'practice') ||
            (tab.id === 'vocab_drill' && activeTab === 'vocab');
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-1 transition-all active:scale-95 flex-1 min-w-0 ${
                isActive
                  ? 'text-sky-600 dark:text-sky-400 font-extrabold'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 font-medium'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4px]' : 'stroke-[1.8px]'}`} />
                {tab.badge !== undefined && (
                  <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full min-w-4 text-center shadow-sm">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] sm:text-[11px] mt-0.5 tracking-tight truncate max-w-full">
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 bg-sky-600 dark:bg-sky-400 rounded-full mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
