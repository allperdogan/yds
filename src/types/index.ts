export type WordType = 'verb' | 'adjective' | 'noun' | 'adverb' | 'phrasal_verb' | 'conjunction' | 'grammar';

export interface YdsWord {
  id: string;
  word: string;
  type: WordType;
  meaning: string;
  phonetic?: string;
  synonyms: string[];
  antonyms?: string[];
  collocations: string[];
  exampleEn: string;
  exampleTr: string;
  ydsTip: string;
  frequency: 'ultra' | 'high' | 'medium';
  groupDay: number; // Day 1 to 30
  mnemonic?: string; // Akılda kalıcı çağrışım / ses benzeşimi / hafıza tekniği
  distractors?: string[]; // Aynı türden, yakın anlamlı ama cümleye uymayan 4 çeldirici
}

export type SRSGrade = 0 | 3 | 4 | 5; // 0: Again, 3: Hard, 4: Good, 5: Easy

export interface SRSItem {
  id: string;
  wordId: string;
  repetition: number;
  interval: number; // in days
  easeFactor: number;
  nextReviewDate: string; // ISO date string YYYY-MM-DD
  state: 'new' | 'learning' | 'review' | 'mastered';
  lastReviewed?: string;
}

export interface OptionMnemonicDetail {
  word: string;
  meaning: string;
  mnemonic: string; // Ses çağrışımı / Akılda kalıcı hikaye
  rootAnalysis?: string; // Kök-ek / kural analizi
}

export interface VocabQuizQuestion {
  id: string;
  category: 'vocab' | 'verb' | 'adjective' | 'conjunction' | 'phrasal_verb' | 'grammar';
  targetWordId: string;
  targetWord: string;
  type: WordType;
  sentence: string; // Sentence with "_____"
  options: string[]; // 5 options (ÖSYM formatı)
  correctAnswer: string;
  meaningTr: string;
  explanation: string;
  synonyms: string[];
  collocation?: string;
  optionsBreakdown: Record<string, OptionMnemonicDetail>; // Her şıkkın hafıza tekniği
}

export type QuestionType =
  | 'vocabulary'
  | 'grammar'
  | 'cloze'
  | 'sentence_completion'
  | 'translation_en_tr'
  | 'translation_tr_en'
  | 'reading'
  | 'dialogue'
  | 'restatement'
  | 'paragraph_completion'
  | 'irrelevant_sentence';

export interface YdsQuestion {
  id: string;
  type: QuestionType;
  title?: string;
  passage?: string;
  dialogueSpeaker?: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  answer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
  tacticUsed: string;
  trapWarning?: string;
  difficulty: 'Orta' | 'İleri' | 'Zor';
  dayAssigned?: number;
}

export interface GrammarDrillQuestion extends YdsQuestion {
  grammarCategory:
    | 'tenses_time_clauses'
    | 'conjunctions_transitions'
    | 'prepositions'
    | 'reductions_participles'
    | 'modals'
    | 'relative_noun_clauses'
    | 'inversion_conditionals';
  grammarTopicTitle: string;
}

export interface TacticSampleQuestion {
  question: string;
  passage?: string;
  dialogueSpeaker?: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  answer: 'A' | 'B' | 'C' | 'D' | 'E';
  solutionSteps: string[];
  trapExplanation: string;
  fastMethodTrick: string;
}

export interface YdsTacticGuide {
  id: QuestionType;
  numberRange: string;
  title: string;
  questionCount: number;
  badge: string;
  summary: string;
  goldenRules: string[];
  stepByStepMethod: string[];
  commonTraps: string[];
  proTip: string;
  sampleQuestion?: TacticSampleQuestion;
}

export interface DailyMission {
  day: number;
  title: string;
  subtitle: string;
  focusArea: string;
  wordCountTarget: number;
  tacticType: QuestionType;
  targetQuestions: number;
  quote: string;
  completed: boolean;
}

export interface SentenceDeconstruction {
  originalSentence: string;
  subject: string;
  mainVerb: string;
  objectsAndComplements: string;
  grammaticalStructures: string[]; // e.g. ["Noun Clause", "Passive Reduction (V3)", "Zıtlık Bağlacı"]
  translationTr: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  topic: 'Science & Technology' | 'Health & Medicine' | 'History & Archaeology' | 'Economics & Environment' | 'Social Sciences';
  sourceHint: string; // The Economist / Nature / New Scientist seviyesi
  passageText: string;
  wordCount: number;
  vocabularyNotes: Array<{ word: string; meaningTr: string; contextNote: string }>;
  deconstructedSentences: SentenceDeconstruction[];
  questions: YdsQuestion[];
}

export interface MockExamResult {
  id: string;
  date: string;
  score: number; // 0 to 100
  correctCount: number;
  wrongCount: number;
  emptyCount: number;
  timeSpentSeconds: number;
  categoryBreakdown: Record<string, { total: number; correct: number; wrong: number }>;
  level: string;
}

export interface UserStats {
  streak: number;
  lastStudyDate: string;
  totalCardsReviewed: number;
  masteredWordsCount: number;
  totalQuestionsSolved: number;
  totalCorrect: number;
  totalWrong: number;
  completedDays: number[];
  bookmarkedWords: string[];
  mistakeQuestionIds: string[];
  knownVocabIds: string[];
  pendingReviewVocabIds: string[];
  solvedQuestions: { [questionId: string]: { selected: string; isCorrect: boolean; seconds?: number } };
  mockExamResults?: MockExamResult[];
}
