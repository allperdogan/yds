import { YdsQuestion } from '../../types';
import { SENTENCE_COMPLETION_BANK } from './sentenceCompletionBank';
import { DIALOGUE_BANK } from './dialogueBank';

// Extra practice banks for the paragraph-heavy question types.
export const PARAGRAPH_TYPE_BANKS: YdsQuestion[] = [
  ...SENTENCE_COMPLETION_BANK,
  ...DIALOGUE_BANK
];
