import { describe, it, expect } from 'vitest';
import { addDays, dueMistakeIds, isMistakeDue, recordMistakeCorrect, recordMistakeWrong } from '../services/mistakeReview';

describe('mistake review schedule', () => {
  const today = '2026-10-29';

  it('brings a miss back tomorrow and keeps its cause', () => {
    expect(recordMistakeWrong(undefined, today)).toEqual({ streak: 0, due: '2026-10-30' });
    expect(recordMistakeWrong({ streak: 2, due: today, cause: 'vocab' }, today)).toEqual({ streak: 0, due: '2026-10-30', cause: 'vocab' });
  });

  it('moves a right answer on the due day to 3, then 7 days, and retires it on the third', () => {
    const first = recordMistakeCorrect({ streak: 0, due: today }, today)!;
    expect(first).toEqual({ streak: 1, due: '2026-11-01' });
    const second = recordMistakeCorrect(first, '2026-11-01')!;
    expect(second).toEqual({ streak: 2, due: '2026-11-08' });
    expect(recordMistakeCorrect(second, '2026-11-08')).toBeNull();
  });

  it('ignores a right answer before the due day', () => {
    const waiting = { streak: 0, due: '2026-10-30' };
    expect(recordMistakeCorrect(waiting, today)).toBe(waiting);
  });

  it('treats mistakes saved before reviews existed as due', () => {
    expect(isMistakeDue(undefined, today)).toBe(true);
    expect(dueMistakeIds(['a', 'b', 'c'], { b: { streak: 0, due: '2026-10-30' } }, today)).toEqual(['a', 'c']);
  });

  it('adds days across month ends', () => {
    expect(addDays('2026-12-30', 3)).toBe('2027-01-02');
  });
});
