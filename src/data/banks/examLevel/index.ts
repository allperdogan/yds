import { toIrrelevantQuestions, toQuestions } from './helpers';
import { XL_VOCABULARY } from './vocabulary';
import { XL_SENTENCE_COMPLETION } from './sentenceCompletion';
import { XL_DIALOGUE } from './dialogue';
import { XL_RESTATEMENT } from './restatement';
import { XL_PARAGRAPH_COMPLETION } from './paragraphCompletion';
import { XL_IRRELEVANT_SENTENCE } from './irrelevantSentence';

// Exam-level questions written for mock exams 4-9. They match real ÖSYM length
// and distractor logic and appear only in those exams, so a mock score is not
// inflated by questions already solved in practice.
// Answers are on A here; the mock exam builder places them so each exam's key is balanced.
export const XL_VOCABULARY_QUESTIONS = toQuestions('vc', 'vocabulary', XL_VOCABULARY, 'İleri');
export const XL_SENTENCE_COMPLETION_QUESTIONS = toQuestions('sc', 'sentence_completion', XL_SENTENCE_COMPLETION);
export const XL_DIALOGUE_QUESTIONS = toQuestions('dl', 'dialogue', XL_DIALOGUE);
export const XL_RESTATEMENT_QUESTIONS = toQuestions('rs', 'restatement', XL_RESTATEMENT);
export const XL_PARAGRAPH_COMPLETION_QUESTIONS = toQuestions('pc', 'paragraph_completion', XL_PARAGRAPH_COMPLETION);
export const XL_IRRELEVANT_SENTENCE_QUESTIONS = toIrrelevantQuestions('is', XL_IRRELEVANT_SENTENCE);

