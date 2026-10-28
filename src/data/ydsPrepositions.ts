import { YdsQuestion } from '../types';
import { shuffleQuestionList } from '../services/optionShuffle';

export interface PrepositionReflexItem {
  id: string;
  combination: string; // e.g. "attribute ... to"
  type: 'verb_prep' | 'adj_prep' | 'noun_prep' | 'phrasal_prep' | 'idiomatic';
  meaningTr: string;
  exampleSentence: string;
  tip: string;
}

export interface PrepositionReflexQuestion extends YdsQuestion {
  prepPattern: string; // e.g. "vulnerable to"
  prepType: 'single_blank' | 'double_blank';
}

// 1. EDAT KOMBİNASYONLARI (YDS'de En Sık Çıkan 60+ İmza Edat Kalıbı)
export const YDS_PREPOSITION_MATRIX: PrepositionReflexItem[] = [
  // Fiil + Edat (Verb + Preposition)
  { id: 'pr1', combination: 'attribute ... to', type: 'verb_prep', meaningTr: '-e bağlamak, -e atfetmek', exampleSentence: 'Scientists attribute global climate shifts to anthropogenic greenhouse emissions.', tip: 'YDS tıp ve çevre paragraflarında çoğunlukla doğru cevap olarak çıkar.' },
  { id: 'pr2', combination: 'refrain from', type: 'verb_prep', meaningTr: '-den çekinmek, kaçınmak', exampleSentence: 'Diplomats were instructed to refrain from making provocative statements.', tip: 'Arkasından daima V-ing (isim fiil) alır.' },
  { id: 'pr3', combination: 'comply with', type: 'verb_prep', meaningTr: '-e uymak, riayet etmek', exampleSentence: 'All pharmaceutical companies must strictly comply with international safety regulations.', tip: 'Eş anlamlısı: adhere to / conform to.' },
  { id: 'pr4', combination: 'deprive of', type: 'verb_prep', meaningTr: '-den mahrum bırakmak', exampleSentence: 'Chronic sleep restriction deprives the brain of vital neurochemical restoration.', tip: '"Deprive somebody of something" kalıbıdır.' },
  { id: 'pr5', combination: 'interfere with', type: 'verb_prep', meaningTr: '-e engel olmak, müdahale etmek', exampleSentence: 'Excessive smartphone usage can interfere with children\'s cognitive development.', tip: 'Olumsuz etki bağlamında kullanılır.' },
  { id: 'pr6', combination: 'result in vs result from', type: 'verb_prep', meaningTr: 'result in: yol açmak | result from: -den kaynaklanmak', exampleSentence: 'Deforestation results in habitat destruction; erosion results from loss of vegetation.', tip: 'ÖSYM\'nin en sevdiği tuzak: in (sebep -> sonuç), from (sonuç <- sebep).' },
  { id: 'pr7', combination: 'stem from', type: 'verb_prep', meaningTr: '-den türemek, -den kaynaklanmak', exampleSentence: 'Most geopolitical tensions in the region stem from unresolved territorial disputes.', tip: 'Eş anlamlıları: arise from, originate in.' },
  { id: 'pr8', combination: 'account for', type: 'verb_prep', meaningTr: '1. Oluşturmak (oran) 2. Açıklamak', exampleSentence: 'Renewable sources currently account for approximately 28% of domestic energy generation.', tip: 'Yüzde veya oran görünce doğrudan "account for" arayın.' },
  { id: 'pr9', combination: 'cope with', type: 'verb_prep', meaningTr: '-ile başa çıkmak, üstesinden gelmek', exampleSentence: 'Developing economies struggle to cope with soaring inflation and public debt.', tip: 'Eş anlamlısı: deal with, handle.' },
  { id: 'pr10', combination: 'dispose of', type: 'verb_prep', meaningTr: '-den kurtulmak, elden çıkarmak, imha etmek', exampleSentence: 'Hospitals must safely dispose of hazardous biomedical waste.', tip: 'Tek \'f\' ile yazılır (of).' },
  { id: 'pr11', combination: 'prevent ... from', type: 'verb_prep', meaningTr: '-den alıkoymak, engellemek', exampleSentence: 'Vaccines prevent vulnerable populations from contracting severe influenza.', tip: 'Stop/prohibit/discourage ... from + V-ing.' },
  { id: 'pr12', combination: 'substitute ... for', type: 'verb_prep', meaningTr: '-in yerine koymak / kullanmak', exampleSentence: 'Chefs often substitute olive oil for saturated butter in heart-healthy diets.', tip: 'A\'yı B\'nin yerine koymak.' },
  { id: 'pr13', combination: 'coincide with', type: 'verb_prep', meaningTr: '-ile aynı zamana denk gelmek', exampleSentence: 'The launch of the spacecraft was scheduled to coincide with optimal planetary alignment.', tip: 'Zaman ve tarih uyumunda sorulur.' },
  { id: 'pr14', combination: 'derive from', type: 'verb_prep', meaningTr: '-den elde etmek, -den türemek', exampleSentence: 'Aspirin was historically derived from the bark of willow trees.', tip: 'Etimoloji ve biyokimya metinlerinde çok sık gelir.' },
  { id: 'pr15', combination: 'rely on / upon', type: 'verb_prep', meaningTr: '-e güvenmek, -e dayanmak, bağımlı olmak', exampleSentence: 'Modern financial markets rely heavily on automated algorithmic trading.', tip: 'Eş anlamlısı: depend on, count on.' },

  // Sıfat + Edat (Adjective + Preposition)
  { id: 'pr16', combination: 'vulnerable to', type: 'adj_prep', meaningTr: '-e karşı savunmasız / hassas', exampleSentence: 'Coastal megacities are exceptionally vulnerable to rising sea levels.', tip: 'YDS\'nin en çok sorulan sıfat-edat eşleşmesidir.' },
  { id: 'pr17', combination: 'susceptible to', type: 'adj_prep', meaningTr: '-e yatkın, -den kolay etkilenen', exampleSentence: 'Elderly individuals with compromised immune systems are highly susceptible to pneumonia.', tip: 'Eş anlamlısı: prone to, predisposed to.' },
  { id: 'pr18', combination: 'prone to', type: 'adj_prep', meaningTr: '-e eğilimli, -e yatkın (kötü bir şeye)', exampleSentence: 'Drought-stricken agricultural regions are inherently prone to catastrophic wildfires.', tip: 'Kötü durumlara yatkınlık (kazaya, kuraklığa).' },
  { id: 'pr19', combination: 'exempt from', type: 'adj_prep', meaningTr: '-den muaf', exampleSentence: 'Charitable non-profit organizations are largely exempt from corporate taxation.', tip: 'Hukuk ve vergi metinlerinde çıkar.' },
  { id: 'pr20', combination: 'consistent with', type: 'adj_prep', meaningTr: '-ile tutarlı, -e uygun', exampleSentence: 'The newly discovered fossil evidence is entirely consistent with Darwinian evolutionary theory.', tip: 'Bilimsel hipotez doğrulama sorularında gelir.' },
  { id: 'pr21', combination: 'incompatible with', type: 'adj_prep', meaningTr: '-ile bağdaşmaz / uyumsuz', exampleSentence: 'Totalitarian political regimes are fundamentally incompatible with democratic freedom of expression.', tip: 'Zıtlık sorularında doğru cevap olur.' },
  { id: 'pr22', combination: 'deficient in', type: 'adj_prep', meaningTr: '-bakımından eksik / yetersiz', exampleSentence: 'Soils deficient in nitrogen require organic fertilizers to sustain grain yields.', tip: 'Tıp ve tarım metinlerinde (vitamin/mineral eksikliği).' },
  { id: 'pr23', combination: 'peculiar to', type: 'adj_prep', meaningTr: '-e özgü, -e has', exampleSentence: 'The unique pouch incubation system is peculiar to marsupial mammals like kangaroos.', tip: 'Eş anlamlısı: unique to, specific to.' },
  { id: 'pr24', combination: 'indifferent to', type: 'adj_prep', meaningTr: '-e kayıtsız / umursamaz', exampleSentence: 'Corporate executives cannot afford to remain indifferent to consumer privacy rights.', tip: 'Duygusuz veya kayıtsız kalma durumları.' },
  { id: 'pr25', combination: 'equivalent to', type: 'adj_prep', meaningTr: '-e eşdeğer, -e denk', exampleSentence: 'The total energy released by the tectonic shift was equivalent to dozens of atomic detonations.', tip: 'Miktar ve enerji karşılaştırmalarında.' },

  // İsim + Edat (Noun + Preposition)
  { id: 'pr26', combination: 'impact on / upon', type: 'noun_prep', meaningTr: '-üzerindeki etki', exampleSentence: 'Atmospheric microplastics have an unquantified impact on marine trophic networks.', tip: 'Influence on, effect on ile eşanlamlıdır.' },
  { id: 'pr27', combination: 'threat to', type: 'noun_prep', meaningTr: '-e yönelik tehdit', exampleSentence: 'Habitat fragmentation poses a grave threat to biodiversity in the Amazon rainforest.', tip: 'Pose a threat to kalıbı standarttır.' },
  { id: 'pr28', combination: 'solution to', type: 'noun_prep', meaningTr: '-e çözüm', exampleSentence: 'Renewable microgrids offer an equitable solution to energy poverty in remote islands.', tip: '"Solution of" değil, daima "solution to".' },
  { id: 'pr29', combination: 'access to', type: 'noun_prep', meaningTr: '-e erişim', exampleSentence: 'Over two billion people globally still lack reliable access to clean drinking water.', tip: 'Have access to / gain access to.' },
  { id: 'pr30', combination: 'demand for', type: 'noun_prep', meaningTr: '-e olan talep', exampleSentence: 'The surging global demand for lithium batteries has accelerated mining activities.', tip: 'Ekonomi ve ticaret metinlerinde.' },

  // İkili Edat / Kalıplaşmış İfadeler (Double Preposition Idioms)
  { id: 'pr31', combination: 'in accordance with', type: 'idiomatic', meaningTr: '-e uygun olarak, uyarınca', exampleSentence: 'The clinical trial was conducted in accordance with international ethical standards.', tip: 'Hukuk ve tıp protokollerinde standart kalıp.' },
  { id: 'pr32', combination: 'with regard to / with respect to', type: 'idiomatic', meaningTr: '-e ilişkin olarak, -e gelince', exampleSentence: 'The report highlights significant disparities with regard to gender wage equality.', tip: 'Paragraf ve cümle tamamlamada çok sevilir.' },
  { id: 'pr33', combination: 'on behalf of', type: 'idiomatic', meaningTr: '-adına, -in namına', exampleSentence: 'The foreign minister addressed the United Nations General Assembly on behalf of the coalition.', tip: 'Temsiliyet bildiren standart kalıp.' },
  { id: 'pr34', combination: 'in terms of', type: 'idiomatic', meaningTr: 'açısından, bakımından', exampleSentence: 'Solar energy has surpassed fossil fuel alternatives in terms of long-term economic efficiency.', tip: 'Kıyaslama cümlelerinde çoğunlukla kullanılır.' },
  { id: 'pr35', combination: 'by means of', type: 'idiomatic', meaningTr: 'vasıtasıyla, yoluyla', exampleSentence: 'Bats navigate pitch-black subterranean caverns by means of high-frequency echolocation.', tip: 'Eş anlamlısı: via, through.' },
  { id: 'pr36', combination: 'at the expense of', type: 'idiomatic', meaningTr: '-in pahasına, -e zarar vererek', exampleSentence: 'Aggressive industrial expansion often occurs at the expense of fragile local ecosystems.', tip: 'At the cost of ile eşanlamlıdır.' },
  { id: 'pr37', combination: 'with the exception of', type: 'idiomatic', meaningTr: '-hariç, -dışında', exampleSentence: 'All planetary bodies in our inner solar system, with the exception of Mercury, possess atmosphere.', tip: 'Eş anlamlısı: except for, apart from.' },
  { id: 'pr38', combination: 'in response to', type: 'idiomatic', meaningTr: '-e karşılık / yanıt olarak', exampleSentence: 'Central banks lowered benchmark interest rates in response to the emergent liquidity crunch.', tip: 'Tepki ve önlem cümlelerinde.' },

  // Phrasal Prepositions (3'lü Deyimsel Edatlar)
  { id: 'pr39', combination: 'come up with', type: 'phrasal_prep', meaningTr: '(fikir/plan) ortaya atmak, bulmak', exampleSentence: 'Biomedical researchers have come up with an innovative vaccine delivery platform.', tip: 'Son 10 yılda ÖSYM\'nin en çok sorduğu 3\'lü phrasal verb.' },
  { id: 'pr40', combination: 'put up with', type: 'phrasal_prep', meaningTr: 'katlanmak, tahammül etmek', exampleSentence: 'Commuters in metropolitan regions must put up with grueling daily traffic delays.', tip: 'Eş anlamlısı: tolerate, endure.' },
  { id: 'pr41', combination: 'look down upon / on', type: 'phrasal_prep', meaningTr: 'tepeden bakmak, hor görmek', exampleSentence: 'Aristocratic elites historically tended to look down on working-class artisans.', tip: 'Zıt anlamlısı: look up to (saygı duymak).' },
  { id: 'pr42', combination: 'cut down on', type: 'phrasal_prep', meaningTr: '(harcama/tüketim) kısmak, azaltmak', exampleSentence: 'Doctors advise hypertensive cardiac patients to cut down on sodium and saturated lipids.', tip: 'Eş anlamlısı: reduce, curb.' },
  { id: 'pr43', combination: 'run out of', type: 'phrasal_prep', meaningTr: '(stok/kaynak) tükenmek', exampleSentence: 'Spacecraft life-support systems will perish if astronauts run out of recycled oxygen.', tip: 'Tükenme, bitme durumları.' }
];

// 2. EDAT VE PHRASAL VERB REFLEKS TESTİ SORULARI (ÖSYM Formatında 30 Soru)
const RAW_PREPOSITION_REFLEX_QUESTIONS: PrepositionReflexQuestion[] = [
  {
    id: 'prep_q1',
    type: 'grammar',
    prepType: 'double_blank',
    prepPattern: 'attribute ... to / consistent with',
    title: 'Edat Refleksi: attribute to & consistent with',
    question: 'Epidemiologists attribute the rapid containment of the viral contagion _____ swift quarantine protocols that were completely consistent _____ international biosafety standards.',
    options: {
      A: 'to / with',
      B: 'for / in',
      C: 'from / by',
      D: 'in / through',
      E: 'with / to'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'attribute SOMETHING to + consistent WITH Kalıbı',
    trapWarning: 'E şıkkındaki yer değiştirme tuzağına dikkat edin; attribute "to" alır, "with" değil!',
    explanation: '🎯 ÖSYM İKİLİ EDAT REFLEKSİ:\n1. Boşluk: "attribute [sonuç] TO [sebep]" -> to (salgının kontrolünü karantinaya bağlamak).\n2. Boşluk: "consistent WITH" -> with (uluslararası standartlarla tutarlı).\nDoğru cevap A (to / with).'
  },
  {
    id: 'prep_q2',
    type: 'grammar',
    prepType: 'double_blank',
    prepPattern: 'deprive ... of / vulnerable to',
    title: 'Edat Refleksi: deprive of & vulnerable to',
    question: 'Severe malnutrition deprives developing children _____ essential micronutrients, making them exceptionally vulnerable _____ opportunistic viral infections.',
    options: {
      A: 'from / for',
      B: 'of / to',
      C: 'with / by',
      D: 'in / against',
      E: 'about / into'
    },
    answer: 'B',
    difficulty: 'İleri',
    tacticUsed: 'deprive OF + vulnerable TO Formülü',
    trapWarning: 'A şıkkındaki "from" Türkçedeki "-den mahrum bırakmak" çevirisinden kaynaklanan klasik bir çeviri tuzağıdır. İngilizcede deprive DAİMA "of" ile kullanılır!',
    explanation: '🎯 FORMÜL: "deprive somebody/something OF something" ve "vulnerable TO something" YDS\'nin en meşhur eşleşmeleridir. Doğru cevap B (of / to).'
  },
  {
    id: 'prep_q3',
    type: 'grammar',
    prepType: 'single_blank',
    prepPattern: 'refrain from',
    title: 'Edat Refleksi: refrain from',
    question: 'During tense multilateral treaty renegotiations, delegate envoys were explicitly advised to refrain _____ making premature speculative announcements to the press.',
    options: {
      A: 'against',
      B: 'for',
      C: 'from',
      D: 'with',
      E: 'to'
    },
    answer: 'C',
    difficulty: 'Orta',
    tacticUsed: 'refrain FROM + V-ing Kuralı',
    trapWarning: 'A şıkkındaki "against" anlamca cazip gelebilir ancak refrain sabit edat olarak "from" alır.',
    explanation: '🎯 FORMÜL: "refrain from + V-ing" = bir şey yapmaktan sakınmak, geri durmak. Doğru cevap C (from).'
  },
  {
    id: 'prep_q4',
    type: 'grammar',
    prepType: 'double_blank',
    prepPattern: 'prevent ... from / interfere with',
    title: 'Edat Refleksi: prevent from & interfere with',
    question: 'Protective coatings prevent submarine optical cables _____ corroding in salty oceanic trenches where extreme pressures might interfere _____ digital data transmission.',
    options: {
      A: 'from / with',
      B: 'against / in',
      C: 'of / to',
      D: 'to / about',
      E: 'by / for'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'prevent ... FROM + interfere WITH Kalıbı',
    trapWarning: 'B şıkkındaki "against" paslanmaya karşı koruma yanılgısı yaratır ancak prevent "from" ile kullanılır.',
    explanation: '🎯 ÇÖZÜM: "prevent cables FROM corroding" (kabloları paslanmaktan korumak) ve "interfere WITH transmission" (iletime engel olmak). Doğru cevap A (from / with).'
  },
  {
    id: 'prep_q5',
    type: 'grammar',
    prepType: 'double_blank',
    prepPattern: 'cope with / derive from',
    title: 'Edat Refleksi: cope with & derive from',
    question: 'Traditional indigenous communities in the high Andes cope _____ subzero temperatures by utilizing specialized insulating garments derived _____ alpaca fleece.',
    options: {
      A: 'against / of',
      B: 'with / from',
      C: 'for / by',
      D: 'in / through',
      E: 'about / out'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'cope WITH + derive FROM Kalıbı',
    trapWarning: 'A şıkkındaki "cope against" yanlış kullanımdır; başa çıkmak daima "cope with"tir.',
    explanation: '🎯 ÇÖZÜM: "cope with subzero temperatures" (sıfırın altındaki soğukla başa çıkmak) ve "derived from alpaca fleece" (alpaka yününden elde edilen). Doğru cevap B (with / from).'
  },
  {
    id: 'prep_q6',
    type: 'grammar',
    prepType: 'double_blank',
    prepPattern: 'exempt from / comply with',
    title: 'Edat Refleksi: exempt from & comply with',
    question: 'While small research laboratories are partially exempt _____ rigorous municipal audit procedures, they must nonetheless comply _____ federal biohazard protocols.',
    options: {
      A: 'from / with',
      B: 'of / to',
      C: 'for / by',
      D: 'with / in',
      E: 'about / on'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'exempt FROM + comply WITH Kalıbı',
    trapWarning: 'B şıkkında "exempt of" ve "comply to" ikilisi en yaygın öğrenci hatasıdır. Comply daima "with" alır (conform/adhere ise to alır)!',
    explanation: '🎯 ÖSYM AYIRT EDİCİSİ: "exempt FROM" (den muaf) ve "comply WITH" (e uymak). Doğru cevap A (from / with).'
  },
  {
    id: 'prep_q7',
    type: 'grammar',
    prepType: 'single_blank',
    prepPattern: 'in accordance with',
    title: 'Edat Refleksi: in accordance with',
    question: 'The controversial historical archives were declassified strictly in accordance _____ the newly enacted freedom of information statutes.',
    options: {
      A: 'to',
      B: 'for',
      C: 'with',
      D: 'by',
      E: 'of'
    },
    answer: 'C',
    difficulty: 'Orta',
    tacticUsed: 'in accordance WITH = uyarınca, gereğince',
    trapWarning: '"According to" yapısıyla karıştırıp "in accordance to" işaretlemeyin; kalıp "in accordance with"tir!',
    explanation: '🎯 KALIP TESTİ: "According to" doğru bir ifadedir fakat başında "in" varsa "in accordance with" olmak zorundadır. Doğru cevap C (with).'
  },
  {
    id: 'prep_q8',
    type: 'grammar',
    prepType: 'single_blank',
    prepPattern: 'at the expense of',
    title: 'Edat Refleksi: at the expense of',
    question: 'Rapid quarterly corporate profitability should never be pursued at the expense _____ worker safety standards and environmental equilibrium.',
    options: {
      A: 'for',
      B: 'of',
      C: 'with',
      D: 'by',
      E: 'in'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'at the expense OF = -in pahasına / zararına',
    trapWarning: 'A şıkkındaki "for" (güvenlik için) çevirisi mantıklı görünebilir ama idiomun kalıbı "at the expense of"tur.',
    explanation: '🎯 FORMÜL: "at the expense of something" = bir şeyin aleyhine, bir şeyin pahasına. Doğru cevap B (of).'
  },
  {
    id: 'prep_q9',
    type: 'grammar',
    prepType: 'single_blank',
    prepPattern: 'come up with',
    title: 'Edat Refleksi: come up with',
    question: 'Automotive aerospace engineers had to come _____ with a completely novel composite alloy that could withstand atmospheric reentry friction.',
    options: {
      A: 'down',
      B: 'up',
      C: 'through',
      D: 'off',
      E: 'out'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'come up with = fikir/çözüm üretmek',
    trapWarning: 'Boşluktan önce "come", sonra "with" var; 3\'lü phrasal verb "come up with"tir.',
    explanation: '🎯 FORMÜL: "come up with an idea/solution/alloy" (yeni bir fikir/çözüm/alaşım ortaya koymak). Doğru cevap B (up).'
  },
  {
    id: 'prep_q10',
    type: 'grammar',
    prepType: 'single_blank',
    prepPattern: 'put up with',
    title: 'Edat Refleksi: put up with',
    question: 'Ecologists warn that fragile alpine ecosystems cannot put _____ with continued industrial air pollution without experiencing irreversible biodiversity collapse.',
    options: {
      A: 'off',
      B: 'up',
      C: 'out',
      D: 'away',
      E: 'down'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'put up with = tahammül etmek / katlanmak',
    trapWarning: 'Put off: ertelemek, put out: söndürmek. Katlanmak anlamında "put up with" kullanılır.',
    explanation: '🎯 FORMÜL: "put up with pollution" = kirliliğe katlanmak, tolere etmek. Doğru cevap B (up).'
  }
];

// Options are reordered per question so the answer key is not concentrated in one letter.
export const PREPOSITION_REFLEX_QUESTIONS: PrepositionReflexQuestion[] = shuffleQuestionList(
  RAW_PREPOSITION_REFLEX_QUESTIONS
);
