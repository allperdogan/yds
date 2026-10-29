import { MistakeCause, MistakeReview } from '../types';
import { localDateKey } from './storageService';

// A missed question comes back the next day, then 3 days later, then 7 days
// later. Only an answer on (or after) its due day counts, so solving it again
// right after reading the explanation does not take it off the list.
export const MISTAKE_INTERVAL_DAYS = [1, 3, 7];
export const CORRECT_TO_RETIRE = MISTAKE_INTERVAL_DAYS.length;

export const MISTAKE_CAUSE_LABELS: Record<MistakeCause, string> = {
  vocab: 'Kelimeyi bilmedim',
  grammar: 'Gramer kuralı',
  reading: 'Yanlış anladım',
  careless: 'Dikkatsizlik',
  time: 'Süre / tahmin'
};

export const MISTAKE_CAUSES = Object.keys(MISTAKE_CAUSE_LABELS) as MistakeCause[];

export const addDays = (day: string, n: number): string => {
  const [y, m, d] = day.split('-').map(Number);
  return localDateKey(new Date(y, m - 1, d + n));
};

/** Mistakes saved before reviews existed have no record and are due right away. */
export const isMistakeDue = (review: MistakeReview | undefined, today = localDateKey()): boolean =>
  !review || review.due <= today;

export const recordMistakeWrong = (prev: MistakeReview | undefined, today = localDateKey()): MistakeReview => ({
  ...prev,
  streak: 0,
  due: addDays(today, MISTAKE_INTERVAL_DAYS[0])
});

/** The next review after a correct answer, or null once the question is learned. */
export const recordMistakeCorrect = (prev: MistakeReview | undefined, today = localDateKey()): MistakeReview | null => {
  if (prev && !isMistakeDue(prev, today)) return prev;
  const streak = (prev?.streak ?? 0) + 1;
  if (streak >= CORRECT_TO_RETIRE) return null;
  return { ...prev, streak, due: addDays(today, MISTAKE_INTERVAL_DAYS[streak]) };
};

export const dueMistakeIds = (
  ids: string[],
  reviews: Record<string, MistakeReview> = {},
  today = localDateKey()
): string[] => ids.filter((id) => isMistakeDue(reviews[id], today));

/** "yarın", "3 gün sonra" */
export const describeDue = (due: string, today = localDateKey()): string => {
  const [y, m, d] = due.split('-').map(Number);
  const [ty, tm, td] = today.split('-').map(Number);
  const days = Math.round((Date.UTC(y, m - 1, d) - Date.UTC(ty, tm - 1, td)) / 86400000);
  if (days <= 0) return 'bugün';
  if (days === 1) return 'yarın';
  return `${days} gün sonra`;
};
