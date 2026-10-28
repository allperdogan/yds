import { describe, it, expect } from 'vitest';
import { STUDY_TOPICS } from '../services/studyTopics';
import { YDS_FULL_MOCK_EXAM_1, YDS_FULL_MOCK_EXAM_2, YDS_FULL_MOCK_EXAM_3 } from '../data/ydsFullMockExam';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';
import { buildVocabOptions } from '../services/vocabOptions';
import { estimateOverallScore } from '../services/examInsights';
import { StorageService } from '../services/storageService';
import { YdsWord } from '../types';

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

describe('study streak', () => {
  it('does not grow by opening the app, only by studying', () => {
    const fresh = StorageService.getInitialStats();
    expect(fresh.streak).toBe(0);
    const studied = StorageService.withStudyToday(fresh);
    expect(studied.streak).toBe(1);
    expect(StorageService.withStudyToday(studied)).toBe(studied);
  });
});
