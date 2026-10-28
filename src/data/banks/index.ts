import { YdsQuestion } from '../../types';
import { SENTENCE_COMPLETION_BANK } from './sentenceCompletionBank';
import { DIALOGUE_BANK } from './dialogueBank';
import { RESTATEMENT_BANK } from './restatementBank';
import { PARAGRAPH_COMPLETION_BANK } from './paragraphCompletionBank';
import { IRRELEVANT_SENTENCE_BANK } from './irrelevantSentenceBank';
import { CLOZE_BANK } from './clozeBank';

// Extra practice banks for the paragraph-heavy question types.
export const PARAGRAPH_TYPE_BANKS: YdsQuestion[] = [
  ...SENTENCE_COMPLETION_BANK,
  ...DIALOGUE_BANK,
  ...RESTATEMENT_BANK,
  ...PARAGRAPH_COMPLETION_BANK,
  ...IRRELEVANT_SENTENCE_BANK,
  ...CLOZE_BANK
];
