import { describe, expect, it } from 'vitest';
import { GENERATED_MOCK_EXAMS, GENERATED_MOCK_EXAMS_LIST } from '../data/ydsGeneratedMockExams';
import { getUnifiedQuestionById } from '../data/ydsQuestions';

// The real paper's distribution of question types.
const PAPER = {
  vocabulary: 6,
  grammar: 10,
  cloze: 10,
  sentence_completion: 10,
  translation_en_tr: 3,
  translation_tr_en: 3,
  reading: 20,
  dialogue: 5,
  restatement: 4,
  paragraph_completion: 4,
  irrelevant_sentence: 5
};

describe('generated mock exams 4-9', () => {
  const exams = Object.entries(GENERATED_MOCK_EXAMS);

  it('lists six exams that all exist', () => {
    expect(GENERATED_MOCK_EXAMS_LIST.map((e) => e.id)).toEqual(exams.map(([id]) => id));
    expect(exams).toHaveLength(6);
  });

  it('follow the ÖSYM type distribution and never repeat a question', () => {
    const seen = new Set<string>();
    for (const [id, questions] of exams) {
      const counts: Record<string, number> = {};
      questions.forEach((q) => (counts[q.type] = (counts[q.type] || 0) + 1));
      expect(counts, id).toEqual(PAPER);
      for (const q of questions) {
        expect(seen.has(q.id), `${id} ${q.id}`).toBe(false);
        seen.add(q.id);
      }
    }
  });

  it('have complete questions and a balanced answer key', () => {
    for (const [id, questions] of exams) {
      const answers: Record<string, number> = {};
      for (const q of questions) {
        for (const k of ['A', 'B', 'C', 'D', 'E'] as const) expect(q.options[k], q.id).toBeTruthy();
        if (q.type === 'reading' || q.type === 'cloze') expect(q.passage, q.id).toBeTruthy();
        answers[q.answer] = (answers[q.answer] || 0) + 1;
      }
      for (const letter of ['A', 'B', 'C', 'D', 'E']) {
        expect(answers[letter], `${id} ${letter}`).toBeGreaterThanOrEqual(13);
        expect(answers[letter], `${id} ${letter}`).toBeLessThanOrEqual(19);
      }
    }
  });

  it('keep explanations pointing at the right option after placing answers', () => {
    const written = exams.flatMap(([, qs]) => qs.filter((q) => q.id.startsWith('xl_')));
    expect(written.length).toBe(6 * 34);
    for (const q of written) {
      expect(q.explanation, q.id).toContain(`Doğru cevap ${q.answer}.`);
      expect(q.difficulty).not.toBe('Orta');
    }
    // The irrelevant sentence is never sentence I.
    for (const q of written.filter((x) => x.type === 'irrelevant_sentence')) expect(q.answer).not.toBe('A');
  });

  it('can be looked up for the mistakes list', () => {
    const q = GENERATED_MOCK_EXAMS.exam_4.find((x) => x.id.startsWith('xl_sc_'))!;
    expect(getUnifiedQuestionById(q.id)?.answer).toBe(q.answer);
  });
});
