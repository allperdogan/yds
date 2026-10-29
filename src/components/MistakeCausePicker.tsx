import React from 'react';
import { MistakeCause } from '../types';
import { MISTAKE_CAUSES, MISTAKE_CAUSE_LABELS } from '../services/mistakeReview';

/** One tap after a wrong answer: why was it missed? Feeds the summary in Hatalarım. */
export const MistakeCausePicker: React.FC<{
  value?: MistakeCause;
  onPick: (cause: MistakeCause) => void;
}> = ({ value, onPick }) => (
  <div className="space-y-1.5">
    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Neden yanlış yaptın?</p>
    <div className="flex flex-wrap gap-1.5">
      {MISTAKE_CAUSES.map((cause) => (
        <button
          key={cause}
          onClick={() => onPick(cause)}
          aria-pressed={value === cause}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
            value === cause
              ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white'
              : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-sky-400'
          }`}
        >
          {MISTAKE_CAUSE_LABELS[cause]}
        </button>
      ))}
    </div>
  </div>
);
