import React from 'react';
import { Target, BookOpen, Timer, Compass, AlertCircle } from 'lucide-react';

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
    { id: 'reading_lab', label: 'Paragraf', icon: BookOpen },
    { id: 'mock_exam', label: 'Deneme', icon: Timer },
    { id: 'tactics', label: 'Taktik', icon: Compass },
    {
      id: 'mistakes',
      label: 'Hatalar',
      icon: AlertCircle,
      badge: mistakesCount > 0 ? mistakesCount : undefined
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe">
      <div className="flex items-center justify-around py-2 px-2 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 transition-transform active:scale-95 flex-1 ${
                isActive
                  ? 'text-sky-600 dark:text-sky-400 font-extrabold'
                  : 'text-slate-400 font-medium'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
                {tab.badge !== undefined && (
                  <span className="absolute -top-1.5 -right-2.5 bg-amber-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full min-w-4 text-center shadow-sm">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight">{tab.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 bg-sky-600 dark:bg-sky-400 rounded-full mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
