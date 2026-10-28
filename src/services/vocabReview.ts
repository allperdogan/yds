import { WordReview } from '../types';

const DAY_MS = 24 * 60 * 60 * 1000;

// Leitner boxes: each correct answer moves a word one box up and pushes its
// next review further away; a miss drops it back to box 0 (due right away).
export const BOX_INTERVAL_DAYS = [0, 1, 3, 7, 16, 35];
const TOP_BOX = BOX_INTERVAL_DAYS.length - 1;

// A missed word comes back this many questions later in the same session.
export const REQUEUE_GAP = 4;

export const recordWordReview = (prev: WordReview | undefined, isCorrect: boolean, now = Date.now()): WordReview => {
  const base: WordReview = prev ?? { seen: 0, wrong: 0, box: 0, due: now, lastSeen: now };
  const box = isCorrect ? Math.min((prev ? base.box : 0) + 1, TOP_BOX) : 0;
  return {
    seen: base.seen + 1,
    wrong: base.wrong + (isCorrect ? 0 : 1),
    box,
    due: now + BOX_INTERVAL_DAYS[box] * DAY_MS,
    lastSeen: now
  };
};

export interface VocabStudyState {
  reviews: Record<string, WordReview>;
  knownIds: string[];
  pendingIds: string[];
  firstAnswers?: Record<string, boolean>;
}

/**
 * Study order for a session: words I missed first, then words whose review
 * is due (weakest first), then never-seen words in their list order, and
 * words I already know and are not due yet last.
 */
export const orderForStudy = <T>(
  items: T[],
  wordIdOf: (item: T) => string,
  { reviews, knownIds, pendingIds }: VocabStudyState,
  now = Date.now()
): T[] => {
  const known = new Set(knownIds);
  const pending = new Set(pendingIds);
  const missed: T[] = [];
  const due: T[] = [];
  const fresh: T[] = [];
  const later: T[] = [];

  items.forEach((item) => {
    const id = wordIdOf(item);
    const r = reviews[id];
    if (pending.has(id) || (r && r.box === 0)) missed.push(item);
    else if (r && r.due <= now) due.push(item);
    else if (!r && !known.has(id)) fresh.push(item);
    else later.push(item);
  });

  const rev = (item: T) => reviews[wordIdOf(item)];
  missed.sort((a, b) => (rev(b)?.wrong ?? 1) - (rev(a)?.wrong ?? 1));
  due.sort((a, b) => rev(a)!.box - rev(b)!.box || rev(a)!.due - rev(b)!.due);
  // Known words without a review record (older progress) go after the scheduled ones.
  later.sort((a, b) => (rev(a)?.due ?? Infinity) - (rev(b)?.due ?? Infinity));

  return [...missed, ...due, ...fresh, ...later];
};

/** Puts `item` back into the session `REQUEUE_GAP` places after `index`, unless it is already coming up. */
export const requeueAfter = <T>(list: T[], index: number, item: T, sameAs: (a: T, b: T) => boolean): T[] => {
  const at = Math.min(index + 1 + REQUEUE_GAP, list.length);
  if (list.slice(index + 1, at).some((x) => sameAs(x, item))) return list;
  return [...list.slice(0, at), item, ...list.slice(at)];
};

export type WordListKind = 'learned' | 'unseen' | 'mistakes';

export interface WordLists {
  learned: string[];
  unseen: string[];
  mistakes: string[];
}

export const buildWordLists = (allIds: string[], state: VocabStudyState): WordLists => {
  const known = new Set(state.knownIds);
  const pending = new Set(state.pendingIds);
  const first = state.firstAnswers || {};
  const lists: WordLists = { learned: [], unseen: [], mistakes: [] };

  allIds.forEach((id) => {
    const r = state.reviews[id];
    const seen = !!r || known.has(id) || pending.has(id) || id in first;
    if (!seen) {
      lists.unseen.push(id);
      return;
    }
    if (known.has(id) && !pending.has(id)) lists.learned.push(id);
    if ((r && r.wrong > 0) || pending.has(id) || first[id] === false) lists.mistakes.push(id);
  });

  // Most-missed words on top.
  lists.mistakes.sort((a, b) => (state.reviews[b]?.wrong ?? 1) - (state.reviews[a]?.wrong ?? 1));
  return lists;
};

/** "bugün", "yarın", "5 gün sonra" for the next review of a word. */
export const nextReviewLabel = (r: WordReview | undefined, now = Date.now()): string | undefined => {
  if (!r) return undefined;
  const days = Math.ceil((r.due - now) / DAY_MS);
  if (days <= 0) return 'bugün tekrar';
  if (days === 1) return 'yarın tekrar';
  return `${days} gün sonra tekrar`;
};
