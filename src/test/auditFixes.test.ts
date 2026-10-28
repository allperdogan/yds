import { describe, it, expect } from 'vitest';
import { STUDY_TOPICS } from '../services/studyTopics';
import { YDS_FULL_MOCK_EXAM_1, YDS_FULL_MOCK_EXAM_2, YDS_FULL_MOCK_EXAM_3 } from '../data/ydsFullMockExam';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';
import { buildVocabOptions } from '../services/vocabOptions';
import { estimateOverallScore } from '../services/examInsights';
import { StorageService } from '../services/storageService';
import { YdsQuestion, YdsWord } from '../types';
import { TRANSLATION_BANK } from '../data/banks/translationBank';

const KEYS = ['A', 'B', 'C', 'D', 'E'] as const;
// Share of questions whose correct option is strictly the longest one.
const longestShare = (qs: YdsQuestion[]) =>
  qs.filter((q) => {
    const len = q.options[q.answer].length;
    return KEYS.every((k) => k === q.answer || q.options[k].length < len);
  }).length / qs.length;

describe('question ids', () => {
  it('are unique across all study topics', () => {
    const ids = STUDY_TOPICS.flatMap((t) => t.questions.map((q) => q.id));
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('mock exams', () => {
  it('show the shared text on every cloze and reading question', () => {
    for (const exam of [YDS_FULL_MOCK_EXAM_1, YDS_FULL_MOCK_EXAM_2, YDS_FULL_MOCK_EXAM_3]) {
      for (const q of exam.filter((x) => x.type === 'cloze' || x.type === 'reading')) {
        expect(q.passage, q.id).toBeTruthy();
      }
    }
  });
});

describe('mock exam answer patterns', () => {
  const mocks = [YDS_FULL_MOCK_EXAM_1, YDS_FULL_MOCK_EXAM_2, YDS_FULL_MOCK_EXAM_3];

  it('do not always put the irrelevant sentence at IV', () => {
    for (const exam of mocks) {
      const answers = new Set(exam.filter((q) => q.type === 'irrelevant_sentence').map((q) => q.answer));
      expect(answers.size).toBeGreaterThan(1);
    }
  });

  it('do not give away the answer as the longest option', () => {
    const sentenceTypes = mocks.flat().filter((q) => !['vocabulary', 'grammar', 'cloze', 'irrelevant_sentence'].includes(q.type));
    expect(longestShare(sentenceTypes)).toBeLessThan(0.3);
  });
});

describe('translation bank', () => {
  it('has 30 questions per direction, balanced letters and no length giveaway', () => {
    for (const type of ['translation_en_tr', 'translation_tr_en']) {
      const qs = TRANSLATION_BANK.filter((q) => q.type === type);
      expect(qs.length).toBe(30);
      for (const k of KEYS) expect(qs.filter((q) => q.answer === k).length).toBe(6);
      expect(longestShare(qs)).toBeLessThan(0.3);
      for (const q of qs) expect(q.explanation).toContain(`Doğru cevap ${q.answer}.`);
    }
  });
});

describe('vocabulary options', () => {
  it('never offer a synonym of the target as a distractor', () => {
    const byType: Record<string, YdsWord[]> = {};
    YDS_VOCABULARY_LIST.forEach((w) => (byType[w.type] ||= []).push(w));
    for (const w of YDS_VOCABULARY_LIST) {
      const synonyms = new Set(w.synonyms.map((s) => s.toLowerCase()));
      const options = buildVocabOptions(w, byType);
      expect(options).toHaveLength(5);
      const extra = options.filter((o) => o !== w.word && synonyms.has(o.toLowerCase()));
      expect(extra, w.word).toEqual([]);
    }
  });
});

describe('score estimate', () => {
  const mock = (examId: string, correct: number) => ({
    examId,
    categoryBreakdown: { grammar: { total: 10, correct, wrong: 10 - correct } }
  });

  it('counts only the first sitting of a retaken mock exam', () => {
    const once = estimateOverallScore([], [mock('exam_1', 4)]);
    const retaken = estimateOverallScore([], [mock('exam_1', 4), mock('exam_1', 10)]);
    expect(retaken.score).toBe(once.score);
  });
});

describe('easy practice credit', () => {
  it('keeps a perfect record on easy items below a perfect exam estimate', () => {
    const easy = Array.from({ length: 200 }, () => ({ type: 'grammar' as const, isCorrect: true, weight: 0.5, credit: 0.85 }));
    const grammar = estimateOverallScore(easy).types.find((t) => t.type === 'grammar')!;
    expect(grammar.rate).toBeLessThan(0.86);
  });
});

describe('study streak', () => {
  it('does not grow by opening the app, only by studying', () => {
    const fresh = StorageService.getInitialStats();
    expect(fresh.streak).toBe(0);
    const studied = StorageService.withStudyToday(fresh);
    expect(studied.streak).toBe(1);
    expect(StorageService.withStudyToday(studied)).toBe(studied);
  });
});
