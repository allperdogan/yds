// Finds the target word (or an inflected form of it) in an example sentence and blanks it.
// Handles regular inflections (-s, -ed, -ing, -ies), British -ise spelling,
// common irregular past forms and phrasal verbs ("brought about", "ran out of").

// Past and past participle forms (one entry when both are the same).
export const IRREGULAR: Record<string, string[]> = {
  arise: ['arose', 'arisen'], awake: ['awoke', 'awoken'], bend: ['bent'], bet: ['bet'], bite: ['bit', 'bitten'],
  bleed: ['bled'], blow: ['blew', 'blown'], choose: ['chose', 'chosen'], cost: ['cost'], cut: ['cut'],
  dwell: ['dwelt'], eat: ['ate', 'eaten'], forget: ['forgot', 'forgotten'], forgive: ['forgave', 'forgiven'],
  hit: ['hit'], hurt: ['hurt'], lend: ['lent'], let: ['let'], light: ['lit'], put: ['put'], quit: ['quit'],
  read: ['read'], rid: ['rid'], say: ['said'], shed: ['shed'], shine: ['shone'], shrink: ['shrank', 'shrunk'],
  shut: ['shut'], sit: ['sat'], sleep: ['slept'], slide: ['slid'], spin: ['spun'], split: ['split'],
  spread: ['spread'], spring: ['sprang', 'sprung'], sting: ['stung'], strive: ['strove', 'striven'],
  swear: ['swore', 'sworn'], sweep: ['swept'], swim: ['swam', 'swum'], understand: ['understood'],
  wake: ['woke', 'woken'], weave: ['wove', 'woven'], weep: ['wept'], win: ['won'], wind: ['wound'],
  outgrow: ['outgrew', 'outgrown'], outrun: ['outran', 'outrun'], forecast: ['forecast'], broadcast: ['broadcast'],
  upset: ['upset'], thrust: ['thrust'], burst: ['burst'], cast: ['cast'], hear: ['heard'], feel: ['felt'],
  have: ['had'], be: ['was', 'been'], show: ['showed', 'shown'], prove: ['proved', 'proven'], sew: ['sewed', 'sewn'],
  mislay: ['mislaid'], undo: ['undid', 'undone'],
  bear: ['bore', 'borne'], become: ['became', 'become'], begin: ['began', 'begun'], bind: ['bound'],
  break: ['broke', 'broken'], bring: ['brought'], build: ['built'], buy: ['bought'],
  catch: ['caught'], cling: ['clung'], come: ['came', 'come'], deal: ['dealt'], dig: ['dug'],
  do: ['did', 'done'], draw: ['drew', 'drawn'], drive: ['drove', 'driven'], fall: ['fell', 'fallen'],
  feed: ['fed'], fight: ['fought'], find: ['found'], flee: ['fled'], fly: ['flew', 'flown'],
  forbid: ['forbade', 'forbidden'], foresee: ['foresaw', 'foreseen'], forgo: ['forwent', 'forgone'],
  freeze: ['froze', 'frozen'], get: ['got', 'gotten'], give: ['gave', 'given'], go: ['went', 'gone'],
  grow: ['grew', 'grown'], hang: ['hung'], hide: ['hid', 'hidden'], hold: ['held'], keep: ['kept'],
  know: ['knew', 'known'], lay: ['laid'], lead: ['led'], leave: ['left'], lose: ['lost'],
  make: ['made'], mean: ['meant'], meet: ['met'], mislead: ['misled'], overcome: ['overcame', 'overcome'],
  override: ['overrode', 'overridden'], oversee: ['oversaw', 'overseen'], overtake: ['overtook', 'overtaken'],
  overthrow: ['overthrew', 'overthrown'], pay: ['paid'], ride: ['rode', 'ridden'], rise: ['rose', 'risen'],
  run: ['ran', 'run'], see: ['saw', 'seen'], seek: ['sought'], sell: ['sold'], send: ['sent'], set: ['set'],
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

export interface BlankedExample {
  sentence: string;
  // The words that were blanked, as written in the example ("brought", "about").
  matched: string[];
}

/** Blanks the target in the sentence and reports which words were removed, or null if it cannot be found. */
export const blankExampleMatch = (word: string, sentence: string): BlankedExample | null => {
  const parts = word.trim().split(/\s+/);
  const exact = new RegExp(`\\b${parts.map(escapeRe).join('\\s+')}\\b`, 'i');
  const head = `(?:${wordForms(parts[0]).map(escapeRe).join('|')})`;
  const rest = parts.slice(1).map(escapeRe);
  const inflected = new RegExp(`\\b${[head, ...rest].join('\\s+')}\\b`, 'i');
  for (const re of [exact, inflected]) {
    const m = re.exec(sentence);
    if (m) {
      return {
        sentence: sentence.slice(0, m.index) + '_____' + sentence.slice(m.index + m[0].length),
        matched: m[0].split(/\s+/)
      };
    }
  }

  // Separable phrasal verbs and correlatives: "imposed heavy taxes on", "not only ... but also"
  const pieces = [head, ...rest];
  const gapped = new RegExp(`\\b(${pieces.join(')\\b((?:\\s+[^\\s]+){0,12}?\\s+)\\b(')})\\b`, 'i');
  const m = gapped.exec(sentence);
  if (!m || pieces.length < 2) return null;
  const groups = m.slice(1);
  const filled = groups.map((g, i) => (i % 2 === 0 ? '_____' : g)).join('').replace(/_____(\s+_____)+/g, '_____');
  return {
    sentence: sentence.slice(0, m.index) + filled + sentence.slice(m.index + m[0].length),
    matched: groups.filter((_, i) => i % 2 === 0).join(' ').split(/\s+/)
  };
};

/** Returns the sentence with the target replaced by "_____", or null if it cannot be found. */
export const blankExample = (word: string, sentence: string): string | null =>
  blankExampleMatch(word, sentence)?.sentence ?? null;
