// Finds the target word (or an inflected form of it) in an example sentence and blanks it.
// Handles regular inflections (-s, -ed, -ing, -ies), British -ise spelling,
// common irregular past forms and phrasal verbs ("brought about", "ran out of").

const IRREGULAR: Record<string, string[]> = {
  bear: ['bore', 'borne'], become: ['became'], begin: ['began', 'begun'], bind: ['bound'],
  break: ['broke', 'broken'], bring: ['brought'], build: ['built'], buy: ['bought'],
  catch: ['caught'], cling: ['clung'], come: ['came'], deal: ['dealt'], dig: ['dug'],
  do: ['did', 'done'], draw: ['drew', 'drawn'], drive: ['drove', 'driven'], fall: ['fell', 'fallen'],
  feed: ['fed'], fight: ['fought'], find: ['found'], flee: ['fled'], fly: ['flew', 'flown'],
  forbid: ['forbade', 'forbidden'], foresee: ['foresaw', 'foreseen'], forgo: ['forwent', 'forgone'],
  freeze: ['froze', 'frozen'], get: ['got', 'gotten'], give: ['gave', 'given'], go: ['went', 'gone'],
  grow: ['grew', 'grown'], hang: ['hung'], hide: ['hid', 'hidden'], hold: ['held'], keep: ['kept'],
  know: ['knew', 'known'], lay: ['laid'], lead: ['led'], leave: ['left'], lose: ['lost'],
  make: ['made'], mean: ['meant'], meet: ['met'], mislead: ['misled'], overcome: ['overcame'],
  override: ['overrode', 'overridden'], oversee: ['oversaw', 'overseen'], overtake: ['overtook', 'overtaken'],
  overthrow: ['overthrew', 'overthrown'], pay: ['paid'], ride: ['rode', 'ridden'], rise: ['rose', 'risen'],
  run: ['ran'], see: ['saw', 'seen'], seek: ['sought'], sell: ['sold'], send: ['sent'], set: ['set'],
  shake: ['shook', 'shaken'], shoot: ['shot'], sink: ['sank', 'sunk'], speak: ['spoke', 'spoken'],
  spend: ['spent'], stand: ['stood'], steal: ['stole', 'stolen'], stick: ['stuck'], strike: ['struck'],
  swing: ['swung'], take: ['took', 'taken'], teach: ['taught'], tear: ['tore', 'torn'], tell: ['told'],
  think: ['thought'], throw: ['threw', 'thrown'], undergo: ['underwent', 'undergone'],
  undertake: ['undertook', 'undertaken'], uphold: ['upheld'], wear: ['wore', 'worn'],
  withdraw: ['withdrew', 'withdrawn'], withhold: ['withheld'], withstand: ['withstood'],
  write: ['wrote', 'written'],
};

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const wordForms = (head: string): string[] => {
  const h = head.toLowerCase();
  const forms = new Set<string>([h, `${h}s`, `${h}es`, `${h}d`, `${h}ed`, `${h}ing`, `${h}ly`]);
  if (h.endsWith('e')) forms.add(`${h.slice(0, -1)}ing`);
  if (/[^aeiou]y$/.test(h)) {
    const stem = h.slice(0, -1);
    ['ies', 'ied', 'ily'].forEach((suf) => forms.add(stem + suf));
  }
  if (/[^aeiou][aeiou][bdglmnprt]$/.test(h)) {
    forms.add(`${h}${h.slice(-1)}ed`);
    forms.add(`${h}${h.slice(-1)}ing`);
  }
  (IRREGULAR[h] || []).forEach((f) => forms.add(f));
  // British spelling (-ise / -isation)
  [...forms].forEach((f) => {
    if (/iz/.test(f)) forms.add(f.replace(/iz/g, 'is'));
  });
  return [...forms].sort((a, b) => b.length - a.length);
};

/** Returns the sentence with the target replaced by "_____", or null if it cannot be found. */
export const blankExample = (word: string, sentence: string): string | null => {
  const parts = word.trim().split(/\s+/);
  const exact = new RegExp(`\\b${parts.map(escapeRe).join('\\s+')}\\b`, 'i');
  if (exact.test(sentence)) return sentence.replace(exact, '_____');

  const head = `(?:${wordForms(parts[0]).map(escapeRe).join('|')})`;
  const rest = parts.slice(1).map(escapeRe);
  const inflected = new RegExp(`\\b${[head, ...rest].join('\\s+')}\\b`, 'i');
  if (inflected.test(sentence)) return sentence.replace(inflected, '_____');

  // Separable phrasal verbs and correlatives: "imposed heavy taxes on", "not only ... but also"
  const pieces = [head, ...rest];
  const gapped = new RegExp(`\\b(${pieces.join(')\\b((?:\\s+[^\\s]+){0,12}?\\s+)\\b(')})\\b`, 'i');
  const m = gapped.exec(sentence);
  if (!m || pieces.length < 2) return null;
  const filled = m.slice(1).map((g, i) => (i % 2 === 0 ? '_____' : g)).join('').replace(/_____(\s+_____)+/g, '_____');
  return sentence.slice(0, m.index) + filled + sentence.slice(m.index + m[0].length);
};
