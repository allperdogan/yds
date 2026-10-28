import { YdsQuestion } from '../../types';
import { SENTENCE_COMPLETION_BANK } from './sentenceCompletionBank';
import { DIALOGUE_BANK } from './dialogueBank';
import { RESTATEMENT_BANK } from './restatementBank';
import { PARAGRAPH_COMPLETION_BANK } from './paragraphCompletionBank';
import { IRRELEVANT_SENTENCE_BANK } from './irrelevantSentenceBank';
import { CLOZE_BANK } from './clozeBank';

// Extra practice banks for the paragraph-heavy question types. Their sentences
// are shorter and plainer than real YDS items, so they are labelled 'Orta' and
// count for less in the score estimate.
export const PARAGRAPH_TYPE_BANKS: YdsQuestion[] = [
  ...SENTENCE_COMPLETION_BANK,
  ...DIALOGUE_BANK,
  ...RESTATEMENT_BANK,
  ...PARAGRAPH_COMPLETION_BANK,
  ...IRRELEVANT_SENTENCE_BANK,
  ...CLOZE_BANK
].map((q) => ({ ...q, difficulty: 'Orta' as const }));
