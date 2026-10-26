import { describe, it, expect } from 'vitest';
import {
  ALL_UNIFIED_YDS_QUESTIONS,
  getUnifiedQuestionById,
  YDS_QUESTIONS_DATA
} from '../data/ydsQuestions';
import { YDS_FULL_MOCK_EXAM_1 } from '../data/ydsFullMockExam';
import { YDS_FULL_MOCK_EXAM_2 } from '../data/ydsFullMockExam2';
import { YDS_FULL_MOCK_EXAM_3 } from '../data/ydsFullMockExam3';
import { YDS_GRAMMAR_DRILL_BANK } from '../data/ydsGrammarBank';
import { YDS_PREPOSITION_MATRIX, PREPOSITION_REFLEX_QUESTIONS } from '../data/ydsPrepositions';
import { YDS_TACTIC_GUIDES } from '../data/ydsTactics';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';

describe('Data Integrity & Question Engine Tests', () => {
  describe('Full Mock Exams (240 Questions Total)', () => {
    const mockSuites = [
      { name: 'Mock Exam 1', questions: YDS_FULL_MOCK_EXAM_1 },
      { name: 'Mock Exam 2', questions: YDS_FULL_MOCK_EXAM_2 },
      { name: 'Mock Exam 3', questions: YDS_FULL_MOCK_EXAM_3 }
    ];

    mockSuites.forEach(({ name, questions }) => {
      it(`${name} contains exactly 80 questions with unique IDs`, () => {
        expect(questions).toHaveLength(80);

        const ids = new Set<string>();
        questions.forEach((q) => {
          expect(q.id).toBeDefined();
          expect(ids.has(q.id)).toBe(false);
          ids.add(q.id);
        });
      });

      it(`${name} questions have valid options, answer keys, and explanations`, () => {
        const validOptions = ['A', 'B', 'C', 'D', 'E'] as const;
        questions.forEach((q) => {
          expect(validOptions).toContain(q.answer);
          expect(q.options).toBeDefined();
          validOptions.forEach((optKey) => {
            expect(q.options[optKey]).toBeDefined();
            expect(q.options[optKey].trim().length).toBeGreaterThan(0);
          });
          expect(q.question.trim().length).toBeGreaterThan(0);
          expect(q.explanation).toBeDefined();
          expect(q.explanation.trim().length).toBeGreaterThan(5);
        });
      });
    });
  });

  describe('Grammar Drill Bank Integrity', () => {
    it('contains comprehensive grammar drill questions with valid answers and explanations (120+ questions)', () => {
      expect(YDS_GRAMMAR_DRILL_BANK.length).toBeGreaterThanOrEqual(120);

      const validOptions = ['A', 'B', 'C', 'D', 'E'];
      YDS_GRAMMAR_DRILL_BANK.forEach((q) => {
        expect(validOptions).toContain(q.answer);
        expect(q.question).toBeDefined();
        expect(q.question.length).toBeGreaterThan(10);
        expect(q.explanation).toBeDefined();
        expect(q.grammarCategory).toBeDefined();
        expect(q.grammarTopicTitle).toBeDefined();
      });
    });
  });

  describe('Preposition Matrix & Reflex Questions Integrity', () => {
    it('contains 40+ authentic preposition matrix items with tips and examples', () => {
      expect(YDS_PREPOSITION_MATRIX.length).toBeGreaterThanOrEqual(40);
      YDS_PREPOSITION_MATRIX.forEach((item) => {
        expect(item.id).toBeDefined();
        expect(item.combination.length).toBeGreaterThan(2);
        expect(item.meaningTr.length).toBeGreaterThan(2);
        expect(item.exampleSentence.length).toBeGreaterThan(10);
        expect(item.tip.length).toBeGreaterThan(5);
      });
    });

    it('contains valid preposition reflex drill questions', () => {
      expect(PREPOSITION_REFLEX_QUESTIONS.length).toBeGreaterThanOrEqual(10);
      const validOptions = ['A', 'B', 'C', 'D', 'E'];
      PREPOSITION_REFLEX_QUESTIONS.forEach((q) => {
        expect(validOptions).toContain(q.answer);
        expect(q.question.length).toBeGreaterThan(10);
        expect(q.options.A).toBeDefined();
        expect(q.options.B).toBeDefined();
        expect(q.options.C).toBeDefined();
        expect(q.options.D).toBeDefined();
        expect(q.options.E).toBeDefined();
        expect(q.explanation).toBeDefined();
      });
    });
  });

  describe('Tactics Guide Data Integrity', () => {
    it('provides comprehensive guides for all core YDS question types', () => {
      expect(YDS_TACTIC_GUIDES.length).toBeGreaterThanOrEqual(10);

      YDS_TACTIC_GUIDES.forEach((guide) => {
        expect(guide.title).toBeDefined();
        expect(guide.goldenRules.length).toBeGreaterThan(0);
        expect(guide.sampleQuestion).toBeDefined();
        if (guide.sampleQuestion) {
          expect(guide.sampleQuestion.options).toBeDefined();
          expect(guide.sampleQuestion.solutionSteps.length).toBeGreaterThan(0);
        }
      });
    });
  });

  describe('Unified Question Resolver (getUnifiedQuestionById)', () => {
    it('retrieves regular base questions by id', () => {
      const q = getUnifiedQuestionById('q1');
      expect(q).toBeDefined();
      expect(q?.type).toBe('vocabulary');
      expect(q?.options.C).toBe('detrimental');
    });

    it('retrieves mock exam questions by id', () => {
      const mockQ = getUnifiedQuestionById('m_q1');
      expect(mockQ).toBeDefined();
      expect(mockQ?.options).toBeDefined();
      expect(mockQ?.options.B).toBe('proliferation');
    });

    it('synthesizes questions for infinite vocabulary IDs (inf_w...)', () => {
      const firstWord = YDS_VOCABULARY_LIST[0];
      const syntheticId = `inf_${firstWord.id}`;

      const synthesized = getUnifiedQuestionById(syntheticId);
      expect(synthesized).toBeDefined();
      expect(synthesized?.id).toBe(syntheticId);
      expect(synthesized?.options.A).toBe(firstWord.word);
      expect(synthesized?.explanation).toContain(firstWord.word);
    });

    it('returns undefined for non-existent IDs', () => {
      const nonexistent = getUnifiedQuestionById('non_existent_id_999999');
      expect(nonexistent).toBeUndefined();
    });
  });
});
