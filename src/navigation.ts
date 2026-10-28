// The four main sections. Other screens (vocabulary, tactics, 30-day plan)
// open from these and keep their parent section highlighted.
export const MAIN_TABS = [
  { id: 'today', label: 'Bugün' },
  { id: 'study', label: 'Çalış' },
  { id: 'mock_exam', label: 'Deneme' },
  { id: 'mistakes', label: 'Hatalarım' }
] as const;

export type MainTabId = (typeof MAIN_TABS)[number]['id'];

const PARENT_TAB: Record<string, MainTabId> = {
  today: 'today',
  daily: 'today',
  study: 'study',
  vocab_drill: 'study',
  vocab: 'study',
  tactics: 'study',
  practice: 'study',
  reading_lab: 'study',
  mock_exam: 'mock_exam',
  mistakes: 'mistakes'
};

export const parentTab = (tab: string): MainTabId => PARENT_TAB[tab] || 'today';
