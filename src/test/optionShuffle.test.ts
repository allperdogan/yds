import { describe, it, expect } from 'vitest';
import { ALL_UNIFIED_YDS_QUESTIONS } from '../data/ydsQuestions';
import { YDS_FULL_MOCK_EXAM_1, YDS_FULL_MOCK_EXAM_2, YDS_FULL_MOCK_EXAM_3 } from '../data/ydsFullMockExam';
import { placeAnswerAt, remapLetterReferences, shuffleQuestionOptions } from '../services/optionShuffle';
import { YdsQuestion } from '../types';

const sampleQuestion: YdsQuestion = {
  id: 'shuffle_sample',
  type: 'vocabulary',
  question: 'Infectious diseases still pose a _____ threat.',
  options: { A: 'detrimental', B: 'negligible', C: 'lucrative', D: 'sustainable', E: 'superficial' },
  answer: 'A',
  explanation: 'Doğru cevap A. B ve C şıkları olumludur (D elenir).',
  tacticUsed: 'Artı / Eksi analizi',
  difficulty: 'Orta'
};

describe('Option shuffling', () => {
  it('keeps the correct answer text and is stable for the same id', () => {
    const first = shuffleQuestionOptions(sampleQuestion);
    const second = shuffleQuestionOptions(sampleQuestion);
    expect(first.options[first.answer]).toBe('detrimental');
    expect(second.options).toEqual(first.options);
    expect(Object.values(first.options).sort()).toEqual(Object.values(sampleQuestion.options).sort());
  });

  it('rewrites letter references in explanations to the new order', () => {
    const shuffled = shuffleQuestionOptions(sampleQuestion);
    expect(shuffled.explanation).toContain(`Doğru cevap ${shuffled.answer}.`);
    const map = { A: 'C', B: 'E', C: 'A', D: 'B', E: 'D' } as const;
    expect(remapLetterReferences("B ve C şıkları (D elenir). Doğru cevap A'dır.", map)).toBe(
      "A ve E şıkları (B elenir). Doğru cevap C'dir."
    );
  });

  it('leaves sentence-number options (I-V) in order', () => {
    const irrelevant: YdsQuestion = {
      ...sampleQuestion,
      type: 'irrelevant_sentence',
      options: { A: 'I', B: 'II', C: 'III', D: 'IV', E: 'V' },
      answer: 'D'
    };
    expect(shuffleQuestionOptions(irrelevant)).toBe(irrelevant);
  });

  it('spreads mock exam answers across all five letters', () => {
    [YDS_FULL_MOCK_EXAM_1, YDS_FULL_MOCK_EXAM_2, YDS_FULL_MOCK_EXAM_3].forEach((exam) => {
      const counts: Record<string, number> = {};
      exam.forEach((q) => (counts[q.answer] = (counts[q.answer] || 0) + 1));
      ['A', 'B', 'C', 'D', 'E'].forEach((l) => expect(counts[l] || 0).toBeGreaterThanOrEqual(8));
      Object.values(counts).forEach((c) => expect(c).toBeLessThanOrEqual(28));
    });
  });

  it('keeps "Doğru cevap X" in explanations in sync with the answer key', () => {
    ALL_UNIFIED_YDS_QUESTIONS.forEach((q) => {
      const match = (q.explanation || '').match(/Doğru (?:cevap|Şık|şık)[: ]*([A-E])\b/);
      if (match) expect(match[1]).toBe(q.answer);
    });
  });
});

describe('placeAnswerAt', () => {
  it('moves the answer to the target letter and keeps options in A-E order', () => {
    const q = {
      id: 'x1',
      options: { A: 'right', B: 'b', C: 'c', D: 'd', E: 'e' },
      answer: 'A' as const,
      explanation: 'B şıkkı yanlış. Doğru cevap A.'
    };
    const placed = placeAnswerAt(q, 'D');
    expect(Object.keys(placed.options)).toEqual(['A', 'B', 'C', 'D', 'E']);
    expect(placed.options.D).toBe('right');
    expect(placed.explanation).toContain('Doğru cevap D.');
    const bLetter = (Object.keys(placed.options) as Array<keyof typeof placed.options>).find((k) => placed.options[k] === 'b');
    expect(placed.explanation).toContain(`${bLetter} şıkkı yanlış`);
  });
});
