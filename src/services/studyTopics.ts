import { QuestionType, UserStats, YdsQuestion } from '../types';
import { YDS_QUESTIONS_DATA } from '../data/ydsQuestions';
import { YDS_READING_PASSAGES } from '../data/ydsReadingPassages';
import { QUESTION_TYPE_LABELS } from './examInsights';

export interface StudyTopic {
  id: string;
  label: string;
  // Question types that belong to this topic; tactics open for the first one.
  types: QuestionType[];
  questions: YdsQuestion[];
}

export interface TopicProgress {
  total: number;
  solved: number;
  learned: number;
  learning: number;
}

export type QuestionStatus = 'new' | 'learning' | 'learned';

// Reading questions live inside their passages; attach the text so each
// question can be shown on its own.
const READING_QUESTIONS: YdsQuestion[] = YDS_READING_PASSAGES.flatMap((p) =>
  p.questions.map((q) => ({ ...q, type: 'reading' as QuestionType, title: q.title || p.title, passage: q.passage || p.passageText }))
);

const byTypes = (types: QuestionType[]) => YDS_QUESTIONS_DATA.filter((q) => types.includes(q.type));

const topic = (id: string, label: string, types: QuestionType[], questions?: YdsQuestion[]): StudyTopic => ({
  id,
  label,
  types,
  questions: questions || byTypes(types)
});

// Topics in the order they appear in the exam. Mock exams are kept separate.
export const STUDY_TOPICS: StudyTopic[] = [
  topic('grammar', QUESTION_TYPE_LABELS.grammar, ['grammar', 'vocabulary']),
  topic('cloze', QUESTION_TYPE_LABELS.cloze, ['cloze']),
  topic('sentence_completion', QUESTION_TYPE_LABELS.sentence_completion, ['sentence_completion']),
  topic('translation', 'Çeviri', ['translation_en_tr', 'translation_tr_en']),
  topic('reading', QUESTION_TYPE_LABELS.reading, ['reading'], READING_QUESTIONS),
  topic('dialogue', QUESTION_TYPE_LABELS.dialogue, ['dialogue']),
  topic('restatement', QUESTION_TYPE_LABELS.restatement, ['restatement']),
  topic('paragraph_completion', QUESTION_TYPE_LABELS.paragraph_completion, ['paragraph_completion']),
  topic('irrelevant_sentence', QUESTION_TYPE_LABELS.irrelevant_sentence, ['irrelevant_sentence'])
];

export const getTopicById = (id: string) => STUDY_TOPICS.find((t) => t.id === id);

export const topicForType = (type: QuestionType) => STUDY_TOPICS.find((t) => t.types.includes(type));

/**
 * A question is "learning" while it sits in the mistakes list, "learned" once
 * it was answered and is not (or no longer) a mistake, and "new" otherwise.
 */
export const getQuestionStatus = (
  id: string,
  solvedQuestions: UserStats['solvedQuestions'],
  mistakeIds: Set<string>
): QuestionStatus => {
  if (mistakeIds.has(id)) return 'learning';
  if (solvedQuestions[id]) return 'learned';
  return 'new';
};

export const getTopicProgress = (
  questions: YdsQuestion[],
  solvedQuestions: UserStats['solvedQuestions'],
  mistakeQuestionIds: string[]
): TopicProgress => {
  const mistakes = new Set(mistakeQuestionIds);
  const progress: TopicProgress = { total: questions.length, solved: 0, learned: 0, learning: 0 };
  questions.forEach((q) => {
    const status = getQuestionStatus(q.id, solvedQuestions, mistakes);
    if (status === 'learning') progress.learning += 1;
    if (status === 'learned') progress.learned += 1;
    if (solvedQuestions[q.id] || status === 'learning') progress.solved += 1;
  });
  return progress;
};

export const getVocabProgress = (totalWords: number, knownIds: string[], pendingIds: string[]): TopicProgress => {
  const known = new Set(knownIds);
  const pending = new Set(pendingIds);
  const learned = [...known].filter((id) => !pending.has(id)).length;
  return {
    total: totalWords,
    solved: new Set([...known, ...pending]).size,
    learned,
    learning: pending.size
  };
};
