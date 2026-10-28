import { YdsQuestion } from '../types';
import { shuffleQuestionList } from '../services/optionShuffle';
export { YDS_FULL_MOCK_EXAM_2 } from './ydsFullMockExam2';
export { YDS_FULL_MOCK_EXAM_3 } from './ydsFullMockExam3';

export const YDS_MOCK_EXAMS_LIST = [
  {
    id: 'exam_1',
    title: '1. Deneme: Standart Deneme',
    badge: 'ÖSYM Standartı',
    description: 'Gerçek sınavdaki soru dağılımı ve süresiyle hazırlanmış deneme.',
    questionCount: 80,
    difficulty: 'ÖSYM Düzeyi'
  },
  {
    id: 'exam_2',
    title: '2. Deneme: Ağır Akademik Kondisyon Denemesi (80-90 Hedef)',
    badge: '80-90 Hedef',
    description: 'Yoğun bilimsel & tarihsel paragraflar, karmaşık cümle tamamlama ve ileri düzey kelime kadrosu.',
    questionCount: 80,
    difficulty: 'İleri Seviye'
  },
  {
    id: 'exam_3',
    title: '3. Deneme: Çeldirici ve Hız Odaklı Deneme',
    badge: 'Tuzak Deşifresi',
    description: 'ÖSYM soru yazarlarının imza çeldiricileri, ikili bağlaç tuzakları ve zaman baskısı antrenmanı.',
    questionCount: 80,
    difficulty: 'Zor'
  }
];

const RAW_YDS_FULL_MOCK_EXAM_1: YdsQuestion[] = [
  {
    "id": "m_q1",
    "type": "vocabulary",
    "title": "1. Soru - İsim (Noun)",
    "question": "The unexpected _____ of antibiotic-resistant bacteria in urban water systems has alarmed public health authorities across the globe.",
    "options": {
      "A": "elimination",
      "B": "proliferation",
      "C": "alleviation",
      "D": "stagnation",
      "E": "deterioration"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Bağlam & Anlam Uyumu (Bakterilerin 'çoğalması/türemesi')",
    "trapWarning": "'alleviation' (hafifletme) ve 'elimination' (ortadan kaldırma) olumludur; cümlede ise 'alarmed authorities' (yetkilileri alarma geçirdi) olumsuzluğu vardır.",
    "explanation": "Proliferation: hızlı üreme, çoğalma, artış demektir. 'proliferation of resistant bacteria' YDS tıbbi metinlerinin standart kalıbıdır."
  },
  {
    "id": "m_q2",
    "type": "vocabulary",
    "title": "2. Soru - Sıfat (Adjective)",
    "question": "Due to unpredictable precipitation patterns and prolonged droughts, smallholder farmers in sub-Saharan Africa remain highly _____ to sudden climate fluctuations.",
    "options": {
      "A": "indifferent",
      "B": "impervious",
      "C": "vulnerable",
      "D": "conducive",
      "E": "lucrative"
    },
    "answer": "C",
    "difficulty": "Orta",
    "tacticUsed": "Preposition Collocation: 'vulnerable to' (-e karşı savunmasız/kırılgan)",
    "trapWarning": "'impervious' (etkilenmez/geçirmez) to edatı alsa da 'remain unaffected' anlamına geldiği için kuraklık bağlamına zıttır.",
    "explanation": "Vulnerable to: -e karşı savunmasız, açık. YDS'nin 'susceptible to / prone to / vulnerable to' üçlüsünden biridir."
  },
  {
    "id": "m_q3",
    "type": "vocabulary",
    "title": "3. Soru - Zarf (Adverb)",
    "question": "Archaeological excavations conducted in Göbeklitepe have _____ transformed our fundamental assumptions regarding early hunter-gatherer societal organization.",
    "options": {
      "A": "radically",
      "B": "tentatively",
      "C": "scarcely",
      "D": "redundantly",
      "E": "superficially"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Fiili Niteleyen Zarf Analizi (transform fiilini niteleyen güçlü zarf)",
    "trapWarning": "'tentatively' (geçici/tereddütle) ve 'superficially' (yüzeysel olarak) anlamı zayıflatır.",
    "explanation": "Radically transformed: kökten, köklü biçimde dönüştürdü. YDS'de büyük keşifler için 'radically / fundamentally / substantially' kullanılır."
  },
  {
    "id": "m_q4",
    "type": "vocabulary",
    "title": "4. Soru - Fiil (Verb)",
    "question": "In order to _____ the growing fiscal deficit, the central bank decided to introduce tighter monetary policies and raise statutory reserve ratios.",
    "options": {
      "A": "aggravate",
      "B": "curb",
      "C": "abandon",
      "D": "undermine",
      "E": "accelerate"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Duygu & Anlam Analizi (Bütçe açığını 'dizginlemek / sınırlamak')",
    "trapWarning": "'aggravate' (kötüleştirmek) ve 'undermine' (baltalamak) negatif fiillerdir; hükümetin amacı açığı artırmak değil frenlemektir.",
    "explanation": "Curb: dizginlemek, sınırlamak, kontrol altına almak (synonym: restrain, limit, control). 'Curb the deficit / curb inflation' ekonomi paragraflarının favorisidir."
  },
  {
    "id": "m_q5",
    "type": "vocabulary",
    "title": "5. Soru - Phrasal Verb",
    "question": "Thermal power plants and heavy manufacturing industries _____ more than forty percent of global greenhouse gas emissions each year.",
    "options": {
      "A": "account for",
      "B": "carry out",
      "C": "bring about",
      "D": "rule out",
      "E": "call off"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Yüzde / Oran Analizi: 'Account for + rakam/oran' (-i oluşturmak)",
    "trapWarning": "'carry out' (yürütmek/gerçekleştirmek) çok popüler olsa da oran/yüzde almaz; deney veya araştırma yürütülür.",
    "explanation": "Account for: oluşturmak, tekabül etmek (%40'ını oluşturuyor). YDS'de arkasından yüzde, kesir veya oran geliyorsa doğru cevap çoğunlukla 'account for'dur."
  },
  {
    "id": "m_q6",
    "type": "vocabulary",
    "title": "6. Soru - Phrasal Verb",
    "question": "Before introducing new artificial intelligence algorithms to sensitive defense networks, software engineers must _____ rigorous penetration testing.",
    "options": {
      "A": "put off",
      "B": "carry out",
      "C": "give up",
      "D": "back down",
      "E": "break out"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "İsim-Fiil Uyumu: 'Carry out testing / experiment / research' (uygulamak, yürütmek)",
    "trapWarning": "'put off' ertelemek demektir; güvenlik testi ertelenmez, icra edilir.",
    "explanation": "Carry out: yürütmek, uygulamak, icra etmek (synonym: conduct, implement, execute). YDS'de sık çıkan bir phrasal verb'dür."
  },
  {
    "id": "m_q7",
    "type": "grammar",
    "title": "7. Soru - Tense Uyumu",
    "question": "Ever since the first successful organ transplantation _____ place in 1954, clinical immunology _____ extraordinary advancements in immunosuppressive pharmacotherapy.",
    "options": {
      "A": "took / has witnessed",
      "B": "has taken / witnessed",
      "C": "takes / had witnessed",
      "D": "had taken / would witness",
      "E": "was taking / will witness"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Since Kuralı: Since + V2 (Past Simple), have/has V3 (Present Perfect)",
    "trapWarning": "B şıkkında since'in içine 'has taken' Present Perfect konamaz; since kısmı kesinlikle geçmişte bir nokta (V2) olmalıdır!",
    "explanation": "Since kuralı: 'Since + Past Simple (1954'te ilk nakil gerçekleştiğinden beri), Present Perfect (tanık olmuştur)'. Doğru cevap A'dır."
  },
  {
    "id": "m_q8",
    "type": "grammar",
    "title": "8. Soru - Tense & Zaman İpucu",
    "question": "By the middle of the twenty-first century, environmental scientists estimate that rising sea levels _____ hundreds of low-lying coastal archipelagos around the world.",
    "options": {
      "A": "submerged",
      "B": "will have submerged",
      "C": "have submerged",
      "D": "are submerging",
      "E": "had submerged"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "By + Gelecek Zaman = Future Perfect (will have V3)",
    "trapWarning": "'had submerged' By + Geçmiş Zaman için kullanılır. Burada 'By the middle of the 21st century' gelecek zamandır!",
    "explanation": "'By + Future time' (By 2050 / By the middle of the century) formülü Future Perfect Tense (will have V3) gerektirir. 'Sular altında bırakmış olacak'."
  },
  {
    "id": "m_q9",
    "type": "grammar",
    "title": "9. Soru - Sadeleştirme (Reduction / Participle)",
    "question": "_____ by a catastrophic drought that devastated agricultural yields, thousands of displaced families migrated to urban centers in search of basic sustenance.",
    "options": {
      "A": "Driving",
      "B": "Driven",
      "C": "Having driven",
      "D": "To drive",
      "E": "To have driven"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Pasif Sadeleştirme (V3): Boşluktan sonra 'by + eylemi yapan' gelmesi",
    "trapWarning": "A ve C şıkları aktiftir; aileler kuraklığı sürmemiş, kuraklık tarafından sürüklenmiş / zorlanmıştır (passive).",
    "explanation": "Because they were driven by a catastrophic drought -> Kısaltması: Driven by... (Edilgen V3 kısaltması). Doğru cevap B."
  },
  {
    "id": "m_q10",
    "type": "grammar",
    "title": "10. Soru - Edat (Preposition Çifti)",
    "question": "Astronomers rely _____ spectroscopic telescopes to gather detailed information _____ the chemical composition of distant exoplanets.",
    "options": {
      "A": "on / about",
      "B": "at / in",
      "C": "for / with",
      "D": "with / to",
      "E": "from / of"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Preposition Collocation: 'rely on / upon' & 'information about / on'",
    "trapWarning": "'rely' fiili asla 'at' veya 'from' almaz; mutlaka on/upon ister.",
    "explanation": "Rely on: bel bağlamak, güvenmek. Information about/on: hakkında bilgi. Doğru eşleşme A şıkkıdır."
  },
  {
    "id": "m_q11",
    "type": "grammar",
    "title": "11. Soru - Edat (Preposition)",
    "question": "Throughout the nineteenth century, indigenous populations in North America were subjected _____ severe forced relocations and systemic disenfranchisement.",
    "options": {
      "A": "from",
      "B": "with",
      "C": "to",
      "D": "for",
      "E": "at"
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "Sabit Edat Kalıbı: 'subject to' (maruz bırakmak / maruz kalmak)",
    "trapWarning": "Türkçedeki '-den maruz kalmak' çevirisi öğrencileri 'from' tuzağına iter. İngilizcede 'subjected TO'dur!",
    "explanation": "Be subjected to something: bir şeye maruz bırakılmak. YDS'de sıklıkla test edilen kurallı edattır."
  },
  {
    "id": "m_q12",
    "type": "grammar",
    "title": "12. Soru - Zıtlık Bağlacı",
    "question": "_____ severe international sanctions have crippled the country’s maritime commerce, its domestic weapons development programs continue to expand unabated.",
    "options": {
      "A": "Because",
      "B": "Although",
      "C": "Provided that",
      "D": "In case",
      "E": "Unless"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Artı/Eksi Zıtlık Analizi: Yaptırımlar ticareti felç etti (-) / Silah programı hız kesmeden genişliyor (+)",
    "trapWarning": "'Because' sebep belirtir ama burada tezatlık vardır; ticaretin çökmesi silahların artmasının mantıksal sebebi olamaz.",
    "explanation": "Although: Her ne kadar ... ise de. Cümledeki olumsuz etki ile aksine devam eden gelişme arasındaki zıtlığı bağlar."
  },
  {
    "id": "m_q13",
    "type": "grammar",
    "title": "13. Soru - Sebep / Sonuç Bağlacı",
    "question": "Modern quantum computers are extraordinarily sensitive to thermal noise; _____, they must be continuously operated at temperatures hovering near absolute zero.",
    "options": {
      "A": "therefore",
      "B": "otherwise",
      "C": "nevertheless",
      "D": "instead",
      "E": "on the contrary"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Noktalı Virgül + Geçiş Zarfı (Sebep: Isıya aşırı duyarlı; Sonuç: Mutlak sıfıra yakın soğutulmalı)",
    "trapWarning": "'nevertheless' zıtlık bildirir; burada zıtlık değil sebep-sonuç mantık ilişkisi vardır.",
    "explanation": "Therefore: Bu yüzden, bundan dolayı (synonym: consequently, as a result, hence). Sebep ve kaçınılmaz sonucu birbirine bağlar."
  },
  {
    "id": "m_q14",
    "type": "grammar",
    "title": "14. Soru - İkili Bağlaç (Correlative Conjunction)",
    "question": "The newly adopted European cybersecurity legislation mandates _____ stricter accountability for private cloud vendors _____ severe penalties for non-compliance.",
    "options": {
      "A": "neither / nor",
      "B": "not only / but also",
      "C": "whether / or",
      "D": "so / that",
      "E": "as / as"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "İkili Vurgu: 'Not only X but also Y' (Sadece X değil aynı zamanda Y)",
    "trapWarning": "Neither / nor olumsuzluk bildirir; burada iki olumlu gereklilik sıralanmaktadır.",
    "explanation": "Not only ... but also ...: Sadece daha katı sorumluluk getirmekle kalmıyor, aynı zamanda ağır cezalar da öngörüyor."
  },
  {
    "id": "m_q15",
    "type": "grammar",
    "title": "15. Soru - Koşul / Şart Bağlacı",
    "question": "Global efforts to eradicate viral pandemics will inevitably falter _____ wealthy nations commit to equitably distributing vaccines to impoverished regions.",
    "options": {
      "A": "unless",
      "B": "as long as",
      "C": "in order that",
      "D": "now that",
      "E": "whereas"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Olumsuz Sonuç + Unless (If not / -medikçe, -madıkça)",
    "trapWarning": "'as long as' (yaptığı sürece) olumlu koşuldur; 'dağıttığı sürece başarısız olur' anlamsız olurdu.",
    "explanation": "Unless = If ... not (aşıları adilce dağıtmadıkları takdirde / dağıtmadıkça küresel çabalar çökecektir)."
  },
  {
    "id": "m_q16",
    "type": "grammar",
    "title": "16. Soru - Zıtlık / Kıyas Bağlacı",
    "question": "_____ traditional internal combustion engines waste up to seventy percent of their thermal energy as heat, modern electric drivetrains convert over eighty-five percent of electrical energy directly into kinetic motion.",
    "options": {
      "A": "Whereas",
      "B": "In case",
      "C": "Because",
      "D": "Provided",
      "E": "Just as"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Birebir Kıyaslama (Contrast): Geleneksel motorlar enerjiyi israf ederken (whereas) elektrikli motorlar dönüştürür.",
    "trapWarning": "'Just as' benzerlik anlatır; burada %70 israf ile %85 verim karşıt kıyastır.",
    "explanation": "Whereas / While: -e karşın, oysa ki (taban tabana zıt iki durumun kıyaslanması)."
  },
  {
    "id": "m_q17",
    "type": "cloze",
    "title": "17. Soru - Cloze Test 1 (Tense)",
    "passage": "Over the past two decades, scientific understanding of the human microbiome (17)_____ profoundly. Once viewed merely as passive passengers or hazardous pathogens, symbiotic gut microorganisms (18)_____ to play crucial roles in regulating metabolic homeostasis and immunological defense. These bacteria produce short-chain fatty acids (19)_____ fermenting indigestible dietary fibers. (20)_____ nutritional imbalances or indiscriminate antibiotic usage disrupts this microbial equilibrium, chronic systemic inflammation can proliferate. Therefore, gastroenterologists recommend diets rich in prebiotics (21)_____ diversify beneficial colonies.",
    "question": "Choose the correct option for blank (17):",
    "options": {
      "A": "evolved",
      "B": "has evolved",
      "C": "had evolved",
      "D": "is evolving",
      "E": "will evolve"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Over the past two decades = Present Perfect (have/has V3)",
    "trapWarning": "'Over the past / In the last X years' kalıbı Past Simple (evolved) değil Present Perfect ister!",
    "explanation": "Over the past two decades: Son yirmi yıldır. Geçmişten bugüne gelen süreç için Present Perfect Tense (has evolved) kullanılır."
  },
  {
    "id": "m_q18",
    "type": "cloze",
    "title": "18. Soru - Cloze Test 1 (Passive)",
    "passage": "Over the past two decades, scientific understanding of the human microbiome (17)_____ profoundly. Once viewed merely as passive passengers or hazardous pathogens, symbiotic gut microorganisms (18)_____ to play crucial roles in regulating metabolic homeostasis and immunological defense. These bacteria produce short-chain fatty acids (19)_____ fermenting indigestible dietary fibers. (20)_____ nutritional imbalances or indiscriminate antibiotic usage disrupts this microbial equilibrium, chronic systemic inflammation can proliferate. Therefore, gastroenterologists recommend diets rich in prebiotics (21)_____ diversify beneficial colonies.",
    "question": "Choose the correct option for blank (18):",
    "options": {
      "A": "now know",
      "B": "are now known",
      "C": "were knowing",
      "D": "had known",
      "E": "will be knowing"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Pasif Anlam (Mikroorganizmalar bilmez, insanlar tarafından bilinir: are known)",
    "trapWarning": "Aktif şıklar elenmelidir; mikroorganizma öznesi edilgendir.",
    "explanation": "Are now known: günümüzde ... rolleri oynadıkları bilinmektedir (Passive voice)."
  },
  {
    "id": "m_q19",
    "type": "cloze",
    "title": "19. Soru - Cloze Test 1 (Edat / Yöntem)",
    "passage": "Over the past two decades, scientific understanding of the human microbiome (17)_____ profoundly. Once viewed merely as passive passengers or hazardous pathogens, symbiotic gut microorganisms (18)_____ to play crucial roles in regulating metabolic homeostasis and immunological defense. These bacteria produce short-chain fatty acids (19)_____ fermenting indigestible dietary fibers. (20)_____ nutritional imbalances or indiscriminate antibiotic usage disrupts this microbial equilibrium, chronic systemic inflammation can proliferate. Therefore, gastroenterologists recommend diets rich in prebiotics (21)_____ diversify beneficial colonies.",
    "question": "Choose the correct option for blank (19):",
    "options": {
      "A": "by",
      "B": "against",
      "C": "for",
      "D": "without",
      "E": "over"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Yöntem / Vasıta: By + V-ing (-erek, -arak)",
    "trapWarning": "'Without' anlamı tersine çevirir; lifleri fermente etmeden üretemezler.",
    "explanation": "By fermenting: fermente ederek (üretim yöntemi)."
  },
  {
    "id": "m_q20",
    "type": "cloze",
    "title": "20. Soru - Cloze Test 1 (Bağlaç)",
    "passage": "Over the past two decades, scientific understanding of the human microbiome (17)_____ profoundly. Once viewed merely as passive passengers or hazardous pathogens, symbiotic gut microorganisms (18)_____ to play crucial roles in regulating metabolic homeostasis and immunological defense. These bacteria produce short-chain fatty acids (19)_____ fermenting indigestible dietary fibers. (20)_____ nutritional imbalances or indiscriminate antibiotic usage disrupts this microbial equilibrium, chronic systemic inflammation can proliferate. Therefore, gastroenterologists recommend diets rich in prebiotics (21)_____ diversify beneficial colonies.",
    "question": "Choose the correct option for blank (20):",
    "options": {
      "A": "Although",
      "B": "When",
      "C": "Unless",
      "D": "Despite",
      "E": "In contrast to"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Zaman / Koşul (Denge bozulduğu zaman iltihap artar)",
    "trapWarning": "'Despite' arkasından tam cümle almaz, isim öbeği alır; burada ise 'disrupts' fiili olan tam cümle vardır.",
    "explanation": "When / If: Dengesizlik bu dengeyi bozduğu zaman (olayın gerçekleşme koşulu)."
  },
  {
    "id": "m_q21",
    "type": "cloze",
    "title": "21. Soru - Cloze Test 1 (Amaç Bildiren Yapı)",
    "passage": "Over the past two decades, scientific understanding of the human microbiome (17)_____ profoundly. Once viewed merely as passive passengers or hazardous pathogens, symbiotic gut microorganisms (18)_____ to play crucial roles in regulating metabolic homeostasis and immunological defense. These bacteria produce short-chain fatty acids (19)_____ fermenting indigestible dietary fibers. (20)_____ nutritional imbalances or indiscriminate antibiotic usage disrupts this microbial equilibrium, chronic systemic inflammation can proliferate. Therefore, gastroenterologists recommend diets rich in prebiotics (21)_____ diversify beneficial colonies.",
    "question": "Choose the correct option for blank (21):",
    "options": {
      "A": "in order to",
      "B": "so that",
      "C": "due to",
      "D": "because of",
      "E": "as a result"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "In order to + V1 (Makam amacıyla) vs So that + Cümle",
    "trapWarning": "Boşluktan sonra doğrudan yalın fiil 'diversify' gelmektedir. 'So that' arkasından özne+fiil cümle ister!",
    "explanation": "In order to diversify: faydalı kolonileri çeşitlendirmek amacıyla (In order to + V1)."
  },
  {
    "id": "m_q22",
    "type": "cloze",
    "title": "22. Soru - Cloze Test 2 (Kelime)",
    "passage": "Rapid urbanization worldwide has given rise to a phenomenon known as the Urban Heat Island (UHI) effect. Concrete structures and asphalt surfaces absorb solar radiation during daylight hours and (22)_____ release it as thermal energy throughout the night. This elevates urban temperatures significantly above those of surrounding rural landscapes. Cities with sparse vegetation (23)_____ suffer from exacerbated smog concentrations. Urban planners are now implementing reflective 'cool roofs' and expanding canopy coverage (24)_____ combat this hazard. (25)_____ these sustainable measures are integrated into zoning codes, urban mortality during summer heatwaves will inevitably (26)_____ .",
    "question": "Choose the correct option for blank (22):",
    "options": {
      "A": "gradually",
      "B": "scarcely",
      "C": "accidentally",
      "D": "reluctantly",
      "E": "erroneously"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Zarf Anlam Uyumu (Gece boyunca 'yavaş yavaş/kademeli olarak' salar)",
    "trapWarning": "'scarcely' (neredeyse hiç salmaz) anlamı bozar; gece şehri ısıtan şey bu ısının salınmasıdır.",
    "explanation": "Gradually release: kademeli olarak, yavaş yavaş salmak. Doğru cevap A."
  },
  {
    "id": "m_q23",
    "type": "cloze",
    "title": "23. Soru - Cloze Test 2 (Edat)",
    "passage": "Rapid urbanization worldwide has given rise to a phenomenon known as the Urban Heat Island (UHI) effect. Concrete structures and asphalt surfaces absorb solar radiation during daylight hours and (22)_____ release it as thermal energy throughout the night. This elevates urban temperatures significantly above those of surrounding rural landscapes. Cities with sparse vegetation (23)_____ suffer from exacerbated smog concentrations. Urban planners are now implementing reflective 'cool roofs' and expanding canopy coverage (24)_____ combat this hazard. (25)_____ these sustainable measures are integrated into zoning codes, urban mortality during summer heatwaves will inevitably (26)_____ .",
    "question": "Choose the correct option for blank (23):",
    "options": {
      "A": "further",
      "B": "never",
      "C": "hardly",
      "D": "seldom",
      "E": "merely"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Pekiştirme Zarfı: 'further suffer' (ayrıca / daha da fazla muzdarip olur)",
    "trapWarning": "B, C, D olumsuzdur; bitki örtüsü az olan şehirler duman kirliliğini daha fazla çeker.",
    "explanation": "Further suffer: üstelik daha da muzdarip olurlar. Doğru cevap A."
  },
  {
    "id": "m_q24",
    "type": "cloze",
    "title": "24. Soru - Cloze Test 2 (Edat / Amaç)",
    "passage": "Rapid urbanization worldwide has given rise to a phenomenon known as the Urban Heat Island (UHI) effect. Concrete structures and asphalt surfaces absorb solar radiation during daylight hours and (22)_____ release it as thermal energy throughout the night. This elevates urban temperatures significantly above those of surrounding rural landscapes. Cities with sparse vegetation (23)_____ suffer from exacerbated smog concentrations. Urban planners are now implementing reflective 'cool roofs' and expanding canopy coverage (24)_____ combat this hazard. (25)_____ these sustainable measures are integrated into zoning codes, urban mortality during summer heatwaves will inevitably (26)_____ .",
    "question": "Choose the correct option for blank (24):",
    "options": {
      "A": "with the aim of",
      "B": "in an effort to",
      "C": "on behalf of",
      "D": "in spite of",
      "E": "as well as"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "In an effort to + V1 (Çabasıyla / Amacıyla)",
    "trapWarning": "'with the aim of' arkasından V-ing (-ing) alır; burada ise 'combat' yalın fiildir!",
    "explanation": "In an effort to combat: bu tehlikeyle mücadele etmek amacıyla (In an effort to + V1). Doğru cevap B."
  },
  {
    "id": "m_q25",
    "type": "cloze",
    "title": "25. Soru - Cloze Test 2 (Koşul Bağlacı)",
    "passage": "Rapid urbanization worldwide has given rise to a phenomenon known as the Urban Heat Island (UHI) effect. Concrete structures and asphalt surfaces absorb solar radiation during daylight hours and (22)_____ release it as thermal energy throughout the night. This elevates urban temperatures significantly above those of surrounding rural landscapes. Cities with sparse vegetation (23)_____ suffer from exacerbated smog concentrations. Urban planners are now implementing reflective 'cool roofs' and expanding canopy coverage (24)_____ combat this hazard. (25)_____ these sustainable measures are integrated into zoning codes, urban mortality during summer heatwaves will inevitably (26)_____ .",
    "question": "Choose the correct option for blank (25):",
    "options": {
      "A": "Unless",
      "B": "Because",
      "C": "Although",
      "D": "Since",
      "E": "As if"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Unless + Olumlu Eylem, Kötü Sonuç (Önlemler entegre edilmedikçe ölümler artacaktır)",
    "trapWarning": "'Because' kullanılırsa 'önlemler entegre edildiği için ölümler artar' gibi saçma bir anlam çıkar.",
    "explanation": "Unless: -medikçe, -madıkça (Bu önlemler yasalara dahil edilmedikçe ölümler kaçınılmaz şekilde artacaktır)."
  },
  {
    "id": "m_q26",
    "type": "cloze",
    "title": "26. Soru - Cloze Test 2 (Fiil)",
    "passage": "Rapid urbanization worldwide has given rise to a phenomenon known as the Urban Heat Island (UHI) effect. Concrete structures and asphalt surfaces absorb solar radiation during daylight hours and (22)_____ release it as thermal energy throughout the night. This elevates urban temperatures significantly above those of surrounding rural landscapes. Cities with sparse vegetation (23)_____ suffer from exacerbated smog concentrations. Urban planners are now implementing reflective 'cool roofs' and expanding canopy coverage (24)_____ combat this hazard. (25)_____ these sustainable measures are integrated into zoning codes, urban mortality during summer heatwaves will inevitably (26)_____ .",
    "question": "Choose the correct option for blank (26):",
    "options": {
      "A": "escalate",
      "B": "diminish",
      "C": "stabilize",
      "D": "recede",
      "E": "halt"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Duygu & Anlam Analizi (Önlem alınmazsa ölüm oranı 'tırmanır/artar')",
    "trapWarning": "B, C, D ve E seçenekleri azalma/durma bildirir. Önlem alınmadığı takdirde olumsuzluk artmalıdır.",
    "explanation": "Escalate: tırmanmak, yükselmek, artmak (synonym: surge, increase, soar). Doğru cevap A."
  },
  {
    "id": "m_q27",
    "type": "sentence_completion",
    "title": "27. Soru - Cümle Tamamlama",
    "question": "Although modern desalination facilities have alleviated chronic freshwater shortages across the Persian Gulf, _____ .",
    "options": {
      "A": "the brine they discharge into shallow waters threatens local coral reefs",
      "B": "they have become the main source of drinking water for most coastal cities",
      "C": "governments in the region have continued to invest heavily in new plants",
      "D": "the energy they consume is mostly supplied by cheap domestic natural gas",
      "E": "water shortages in the region are therefore unlikely to return in the near future"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Although Zıtlık Analizi (+/-): Tatlı su krizini hafifletti (+) / Ancak bıraktığı aşırı tuzlu atık mercan resiflerini tehdit ediyor (-)",
    "trapWarning": "Although zıtlık ister: ilk yarı olumlu (kıtlığı azalttı), ikinci yarı bir sorun söylemeli. B, C, D ve E dilbilgisi olarak oturur ama ya aynı yönde devam eder ya da zıtlık kurmaz.",
    "explanation": "Although tatlı su krizini hafifletti (+) dediği için devamında tesislerin yol açtığı çevre kirliliği veya maliyet gibi olumsuz bir bedel (-) gelmelidir (A şıkkı)."
  },
  {
    "id": "m_q28",
    "type": "sentence_completion",
    "title": "28. Soru - Cümle Tamamlama",
    "question": "Just as the invention of the printing press catalyzed unprecedented literacy and religious reformation in Renaissance Europe, _____ .",
    "options": {
      "A": "contemporary social media platforms have fostered deep ideological fragmentation and rapid disinformation",
      "B": "the widespread adoption of the internet has democratized global access to specialized knowledge",
      "C": "the internet has made it harder for governments to control the spread of information",
      "D": "the printing press also made books much cheaper than handwritten manuscripts",
      "E": "many scholars believe that the internet has reduced the amount people actually read"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Just as ... so too (Benzerlik / Paralellik Kurgusu)",
    "trapWarning": "Just as ... (tıpkı ... gibi) paralel bir olumlu etki ister: matbaa okuryazarlığı yaydı, internet de bilgiye erişimi yaydı. A ve E olumsuz sonuç verir; C yakındır ama okuryazarlık/bilgiye erişim paralelliğini değil siyasi kontrolü öne çıkarır; D ise ikinci yarıda yine matbaadan bahseder.",
    "explanation": "Just as: Tıpkı matbaanın okuryazarlığı ve reformu tetiklemesi gibi, internet de küresel bilgiye erişimi demokratikleştirmiştir (B şıkkı)."
  },
  {
    "id": "m_q29",
    "type": "sentence_completion",
    "title": "29. Soru - Cümle Tamamlama",
    "question": "Unless developing countries receive substantial international technology transfers and concessional climate finance, _____ .",
    "options": {
      "A": "they have already reduced their emissions faster than most developed nations",
      "B": "their reliance on cheap domestic coal to power industrial development will persist for decades",
      "C": "they will be able to switch to renewable energy within a few years",
      "D": "wealthy countries have pledged billions of dollars to help them adapt",
      "E": "they have been criticized for blocking agreements at recent climate summits"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Unless (Olumsuz Şart) -> Doğal Olumsuz Sonuç",
    "trapWarning": "Unless (-mezse) gelecek zamanlı olumsuz bir sonuç ister. A ve E zaman uyumunu bozar (present perfect), C anlam olarak ters yöndedir, D ise koşula bağlı bir sonuç değildir.",
    "explanation": "Unless teknoloji transferi ve finansman almadıkları sürece, sanayilerini beslemek için ucuz yerli kömüre olan bağımlılıkları devam edecektir (B şıkkı)."
  },
  {
    "id": "m_q30",
    "type": "sentence_completion",
    "title": "30. Soru - Cümle Tamamlama",
    "question": "Because honeybees perform pollination services essential to more than a third of human food crops, _____ .",
    "options": {
      "A": "their declining numbers pose a serious threat to global food security",
      "B": "many farmers have begun to rent hives during the flowering season",
      "C": "they have been studied by biologists for more than two centuries",
      "D": "honey has long been one of the most widely traded natural products",
      "E": "some wild bee species have become more common in urban gardens"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Because (Sebep-Sonuç Mantığı): İnsan gıdasının üçte birini tozlaştırıyorlar (sebep) -> Yok olmaları küresel tarım güvenliğine tehdittir (sonuç)",
    "trapWarning": "Because neden-sonuç ister: tozlaşma gıdanın üçte biri için gerekli, o halde arıların azalması gıda güvenliğini tehdit eder. B makul bir sonuçtur ama \"essential to a third of food crops\" vurgusunu karşılamaz; C, D ve E nedenle bağlanmaz.",
    "explanation": "A şıkkı: Sayılarının azalması küresel gıda güvenliği için ciddi bir tehdit oluşturur."
  },
  {
    "id": "m_q31",
    "type": "sentence_completion",
    "title": "31. Soru - Cümle Tamamlama",
    "question": "Whereas traditional classroom instruction is fundamentally bounded by strict geographic and chronological parameters, _____ .",
    "options": {
      "A": "online learning platforms allow self-paced mastery irrespective of physical location",
      "B": "online courses are also limited to a fixed schedule of live lectures",
      "C": "students learn more effectively when they interact with a teacher face to face",
      "D": "most universities have been reluctant to give up their physical campuses",
      "E": "classroom teachers can adapt their lessons to the needs of each student"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Whereas (Kıyaslama): Geleneksel sınıf coğrafi ve zamansal sınırlara tabiyken, online platformlar konumdan bağımsız öğrenme sağlar.",
    "trapWarning": "Whereas iki şeyi karşılaştırır: sınıf (yer ve zamana bağlı) vs. çevrimiçi (bağımsız). B karşılaştırmayı kurar ama aynı sınırlamayı söyler; C ve E sınıf lehine konuşup karşıtlığı kurmaz; D ise ikinci tarafı vermez.",
    "explanation": "A şıkkı: Çevrimiçi kurslar her yerden ve kendi hızında öğrenmeye izin verir; bu, sınıfın yer ve zaman sınırlarıyla tam bir zıt kıyaslamadır."
  },
  {
    "id": "m_q32",
    "type": "sentence_completion",
    "title": "32. Soru - Cümle Tamamlama",
    "question": "_____ , deep-sea hydrothermal vents harbor thriving ecosystems that derive their energy exclusively from chemosynthesis.",
    "options": {
      "A": "Because sunlight reaches even the deepest parts of the ocean floor",
      "B": "Despite the total absence of sunlight and the crushing hydrostatic pressure of the ocean floor",
      "C": "Although they were discovered only in the late 1970s",
      "D": "Since the water around them is rich in dissolved oxygen and light",
      "E": "Unlike the coral reefs that also depend on chemical energy"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Zıtlık Zarfı (Güneş ışığının tamamen yokluğuna ve ezici basınca rağmen canlılar yaşar)",
    "trapWarning": "Ana cümle \"enerjiyi yalnızca kemosentezden alır\" der; boşlukta ışıksızlığa rağmen gibi bir zıtlık gerekir. A ve D metinle çelişir; C dilbilgisi olarak oturur ama zıtlık mantığı kurmaz; E ise mercanlar hakkında yanlış bir karşılaştırma yapar.",
    "explanation": "B şıkkı: 'Güneş ışığının tamamen yokluğuna ve okyanus tabanının ezici hidrostatik basıncına rağmen, derin deniz bacaları kemosentezden beslenen canlı ekosistemler barındırır'."
  },
  {
    "id": "m_q33",
    "type": "sentence_completion",
    "title": "33. Soru - Cümle Tamamlama",
    "question": "So rapidly have artificial intelligence models evolved in generating natural human language _____ .",
    "options": {
      "A": "that it is now very hard to tell machine-written essays from human ones",
      "B": "as many experts had predicted at the beginning of the decade",
      "C": "that most universities banned their use in written exams years ago",
      "D": "since researchers first trained them on large collections of text",
      "E": "that their ability to understand meaning has been proven conclusively"
    },
    "answer": "A",
    "difficulty": "Zor",
    "tacticUsed": "So + Adverb + Inversion ... that + Cümle (So rapidly have they evolved that...)",
    "trapWarning": "So ... that yapısı: boşluk \"that\" ile başlamalı (B ve D elenir). C zaman olarak tutarsızdır (\"years ago\" ile yakın gelişme), E ise üretim hızından anlama kapasitesine sıçrayan aşırı bir sonuçtur.",
    "explanation": "So + zarf devrik başlangıcının tamlayıcısı 'that' sonucudur. O kadar hızlı geliştiler ki, makine metinlerini insan yazısından ayırt etmek olağanüstü zorlaştı (A şıkkı)."
  },
  {
    "id": "m_q34",
    "type": "sentence_completion",
    "title": "34. Soru - Cümle Tamamlama",
    "question": "While genetic predisposition undoubtedly plays an influential role in the manifestation of clinical depression, _____ .",
    "options": {
      "A": "identical twins almost always share the same risk of developing the disorder",
      "B": "environmental stressors and social isolation are equally potent determinants of psychiatric vulnerability",
      "C": "antidepressants remain the most widely prescribed treatment for the condition",
      "D": "scientists have identified a single gene that is responsible for most cases",
      "E": "people with a family history of depression are more likely to develop it"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "While Zıtlığı (Genetik yatkınlık rol oynarken, çevresel faktörler de eşit derecede etkilidir)",
    "trapWarning": "While (-se de) zıtlık ister: genetik önemli AMA başka etkenler de önemli. A ve E yine genetiği destekler; D genetiği daha da güçlendirir; C ise konuyu tedaviye kaydırır.",
    "explanation": "While genetik rol oynar dese de, çevresel stres faktörleri ve sosyal izolasyon da eşit derecede güçlü belirleyicilerdir (B şıkkı)."
  },
  {
    "id": "m_q35",
    "type": "sentence_completion",
    "title": "35. Soru - Cümle Tamamlama",
    "question": "In light of mounting evidence linking microplastic ingestion to endocrine disruption in marine mammals, _____ .",
    "options": {
      "A": "several governments have banned single-use plastic packaging",
      "B": "plastic producers have argued that the evidence is still incomplete",
      "C": "marine mammals have been observed eating plastic for decades",
      "D": "plastic production has continued to increase worldwide",
      "E": "researchers have called for more studies on the effects of plastic on humans"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "In light of (Işığında / Göz önüne alındığında) -> Harekete Geçme / Karar",
    "trapWarning": "In light of (... ışığında) sonuç/tepki ister. B ve D artan kanıtla ters yöne gider; C neden-sonuç değil arka plan bilgisidir. E de bir tepkidir ama kanıtın sonucu değil başka bir konuya geçer; en doğrudan sonuç yasaklamadır.",
    "explanation": "A şıkkı: Deniz memelilerinde hormon bozukluğu kanıtları ışığında, birçok hükümet tek kullanımlık ambalajlara kapsamlı yasaklar getirdi."
  },
  {
    "id": "m_q36",
    "type": "sentence_completion",
    "title": "36. Soru - Cümle Tamamlama",
    "question": "Even if multinational trade agreements are finalized with the utmost diplomatic diligence, _____ .",
    "options": {
      "A": "they will probably be welcomed by local manufacturers and labour unions",
      "B": "domestic interest groups and protectionist lobbies will inevitably voice vehement opposition",
      "C": "they usually take several years to negotiate and approve",
      "D": "they were often rejected by national parliaments in the past",
      "E": "consumers will benefit from lower prices on imported goods"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Even if (Olsa bile): Büyük bir özenle imzalansa bile, yerel çıkar grupları sert muhalefet gösterecektir.",
    "trapWarning": "Even if (... olsa bile) beklenmedik/olumsuz bir sonuç ister. A ve E olumlu sonuç verip zıtlığı kurmaz; C ve D genel bilgi verir, D ayrıca zaman uyumunu bozar.",
    "explanation": "B şıkkı: Ne kadar özenle hazırlansa bile (Even if), yerel çıkar grupları ve korumacı lobiler kaçınılmaz olarak şiddetli muhalefet dile getirecektir."
  },
  {
    "id": "m_q37",
    "type": "translation_en_tr",
    "title": "37. Soru - Çeviri (İngilizce -> Türkçe)",
    "question": "Recent epidemiological studies demonstrate that regular physical exercise not only reduces cardiovascular mortality but also enhances cognitive functions by stimulating neurogenesis in the hippocampus.",
    "options": {
      "A": "Düzenli fiziksel egzersizin kardiyovasküler ölümleri azalttığı ve hipokampustaki nörogenezi uyararak bilişsel fonksiyonları geliştirdiği son epidemiyolojik çalışmalarda kanıtlanmıştır.",
      "B": "Son epidemiyolojik çalışmalar, düzenli fiziksel egzersizin sadece kardiyovasküler ölümleri azaltmakla kalmayıp, aynı zamanda hipokampusta nörogenezi uyararak bilişsel işlevleri geliştirdiğini göstermektedir.",
      "C": "Hipokampusta nörogenezin uyarılması, son epidemiyolojik çalışmalara göre düzenli egzersiz yapan bireylerde kardiyovasküler ölüm riskini azaltan en önemli etkendir.",
      "D": "Düzenli fiziksel egzersiz hem kardiyovasküler ölümleri azaltmakta hem de son epidemiyolojik araştırmaların gösterdiği gibi bilişsel işlevleri artırmaktadır.",
      "E": "Son epidemiyolojik çalışmalara göre, hipokampustaki nörogenez uyarılmadığı sürece düzenli fiziksel egzersiz bilişsel işlevleri ve kardiyovasküler sağlığı geliştiremez."
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Özne-Yüklem & 'Not only... but also' Eşleştirme",
    "trapWarning": "A şıkkında yüklem 'kanıtlanmıştır' yapılmıştır (is proven); oysa orijinal cümle 'demonstrate' (göstermektedir) ile biter.",
    "explanation": "Özne: Recent epidemiological studies (Son epidemiyolojik çalışmalar) + Yüklem: demonstrate (göstermektedir) + Yapı: not only ... but also (sadece ... kalmayıp aynı zamanda...). Birebir eşleşen seçenek B'dir."
  },
  {
    "id": "m_q38",
    "type": "translation_en_tr",
    "title": "38. Soru - Çeviri (İngilizce -> Türkçe)",
    "question": "Although renewable energy sources have become considerably cheaper over the past decade, their intermittent nature necessitates substantial investments in battery storage systems.",
    "options": {
      "A": "Yenilenebilir enerji kaynakları son on yılda önemli ölçüde ucuzlamış olmasına rağmen, bunların kesintili doğası batarya depolama sistemlerine kayda değer yatırımlar yapılmasını gerektirmektedir.",
      "B": "Son on yılda oldukça ucuzlayan yenilenebilir enerji kaynaklarının kesintili yapısı, batarya depolama sistemlerine yatırım yapılmadıkça bir sorun olmaya devam edecektir.",
      "C": "Yenilenebilir enerji kaynaklarının kesintili doğası sebebiyle batarya depolama sistemlerine büyük yatırımlar yapılmalıdır, ancak bu kaynaklar son on yılda çok ucuzlamıştır.",
      "D": "Batarya depolama sistemlerine yapılan büyük yatırımlar sayesinde, yenilenebilir enerji kaynakları kesintili doğalarına rağmen son on yılda oldukça ucuzlamıştır.",
      "E": "Yenilenebilir enerji kaynakları son on yılda ucuzlamıştır fakat kesintili yapıları yüzünden batarya depolama sistemleri olmadan kullanılamazlar."
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Although (... -e rağmen) + necessitates (gerektirmektedir)",
    "trapWarning": "B şıkkında 'olmadıkça' (unless) yapısı eklenmiştir; orijinal metinde yoktur.",
    "explanation": "Although (ucuzlamış olmasına rağmen) + necessitates (gerektirmektedir). A şıkkı gramer ögelerini eksiksiz karşılar."
  },
  {
    "id": "m_q39",
    "type": "translation_en_tr",
    "title": "39. Soru - Çeviri (İngilizce -> Türkçe)",
    "question": "Archaeologists excavating in Central America have uncovered ancient Mayan settlements that were far more interconnected and populous than previously estimated.",
    "options": {
      "A": "Orta Amerika'da kazı yapan arkeologlar, önceden tahmin edilenden çok daha kalabalık olan ve birbirine bağlanan antik Maya yerleşimlerini yeni tekniklerle buldular.",
      "B": "Orta Amerika'daki antik Maya yerleşimleri, orada kazı yapan arkeologların önceden tahmin ettiğinden çok daha kalabalık ve birbirine bağlı çıkmıştır.",
      "C": "Orta Amerika'da kazı yapan arkeologlar, önceden tahmin edilenden çok daha fazla birbirine bağlı ve kalabalık olan antik Maya yerleşimlerini gün yüzüne çıkarmışlardır.",
      "D": "Önceden tahmin edilenin aksine, Orta Amerika'da kazı yapan arkeologların bulduğu antik Maya yerleşimleri son derece kalabalıktır.",
      "E": "Orta Amerika'da gün yüzüne çıkarılan antik Maya yerleşimleri, arkeologların tahminlerinin ötesinde bir nüfusa ve bağlantıya sahiptir."
    },
    "answer": "C",
    "difficulty": "Orta",
    "tacticUsed": "Özne: Archaeologists excavating... / Yüklem: have uncovered (gün yüzüne çıkarmışlardır)",
    "trapWarning": "B şıkkında özne 'antik Maya yerleşimleri' yapılmıştır; oysa cümlenin öznesi 'arkeologlar'dır.",
    "explanation": "Özne 'Orta Amerika'da kazı yapan arkeologlar' + Yüklem 'gün yüzüne çıkarmışlardır'. C şıkkı tam çeviridir."
  },
  {
    "id": "m_q40",
    "type": "translation_tr_en",
    "title": "40. Soru - Çeviri (Türkçe -> İngilizce)",
    "question": "Tarih boyunca salgın hastalıklar, yalnızca milyonlarca insanın ölümüne neden olmakla kalmamış, aynı zamanda ekonomik yapıların ve siyasi sistemlerin köklü bir şekilde değişmesine yol açmıştır.",
    "options": {
      "A": "Throughout history, epidemics have not only caused the deaths of millions of people, but have also led to the radical transformation of economic structures and political systems.",
      "B": "Epidemics throughout history caused millions of people to die and therefore radically transformed economic structures and political institutions.",
      "C": "Not only did millions of people die in historical epidemics, but economic and political systems were also completely destroyed as a result.",
      "D": "Because epidemics led to the deaths of millions throughout history, they inevitably transformed all existing economic and political frameworks.",
      "E": "Throughout history, millions of people died of epidemics, which subsequently resulted in radical modifications in political governance."
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Kalıp Eşleştirme: Yalnızca X değil aynı zamanda Y (not only X but also Y)",
    "trapWarning": "B şıkkında 'and therefore' (ve bu yüzden) kullanılmıştır; 'yalnızca ... değil aynı zamanda' yapısı kaybolmuştur.",
    "explanation": "'Throughout history' (Tarih boyunca) + 'have not only caused... but have also led to...' (yalnızca neden olmakla kalmamış, aynı zamanda yol açmıştır). Doğru cevap A."
  },
  {
    "id": "m_q41",
    "type": "translation_tr_en",
    "title": "41. Soru - Çeviri (Türkçe -> İngilizce)",
    "question": "Kuantum bilgisayarlar, geleneksel süper bilgisayarların çözmesi binlerce yıl sürecek karmaşık problemleri saniyeler içinde çözme potansiyeline sahiptir.",
    "options": {
      "A": "Quantum computers solve complicated calculations in seconds, whereas conventional supercomputers require thousands of years.",
      "B": "Quantum computers possess the potential to solve in seconds complex problems that would take conventional supercomputers thousands of years to solve.",
      "C": "Because conventional supercomputers take thousands of years to solve complex problems, quantum computers were developed to achieve this in seconds.",
      "D": "It would take thousands of years for supercomputers to solve complex problems without the extraordinary speed of quantum computing.",
      "E": "Complex problems that require thousands of years can potentially be solved in seconds if conventional supercomputers adopt quantum processors."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Özne: Kuantum bilgisayarlar (Quantum computers) / Yüklem: potansiyeline sahiptir (possess the potential to)",
    "trapWarning": "A şıkkı potansiyel (potential) ifadesini atlayıp kesin eylem (solve) kullanmıştır.",
    "explanation": "'Quantum computers possess the potential to solve in seconds complex problems that would take conventional supercomputers thousands of years to solve' birebir karşılıktır (B şıkkı)."
  },
  {
    "id": "m_q42",
    "type": "translation_tr_en",
    "title": "42. Soru - Çeviri (Türkçe -> İngilizce)",
    "question": "Yapay zeka sistemleri ne kadar gelişmiş olursa olsun, insan gözetimi ve etik ilkeler olmadan kritik karar alma süreçlerine dahil edilmemelidir.",
    "options": {
      "A": "Artificial intelligence systems are highly sophisticated, but they should never be involved in critical decisions without human supervision and ethical codes.",
      "B": "No matter how advanced artificial intelligence systems are, they should not be incorporated into critical decision-making processes without human oversight and ethical principles.",
      "C": "Since artificial intelligence systems lack ethical principles and human oversight, their involvement in critical decision-making is perilous.",
      "D": "Even if artificial intelligence systems make critical decisions, human supervisors must always ensure compliance with ethical principles.",
      "E": "Unless ethical principles are strictly defined, artificial intelligence systems cannot be deployed in complex decision-making frameworks."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Ne kadar ... olursa olsun (No matter how advanced...) + dahil edilmemelidir (should not be incorporated)",
    "trapWarning": "A şıkkında 'ne kadar gelişmiş olursa olsun' yapısı yerine düz 'are highly sophisticated' denmiştir.",
    "explanation": "'No matter how advanced... are' (ne kadar gelişmiş olursa olsun) + 'without human oversight and ethical principles' (insan gözetimi ve etik ilkeler olmadan) + 'should not be incorporated' (dahil edilmemelidir). Doğru cevap B."
  },
  {
    "id": "m_q43",
    "type": "reading",
    "title": "43. Soru - Paragraf 1 (CRISPR)",
    "passage": "The advent of the CRISPR-Cas9 genome editing mechanism has fundamentally transformed contemporary molecular genetics. Derived from a naturally occurring adaptive immune defense found in bacteria against bacteriophages, CRISPR acts as a pair of molecular scissors capable of excising and replacing mutated DNA sequences with remarkable precision. Unlike earlier genetic modification technologies that were prohibitively expensive, laborious, and vulnerable to off-target mutations, CRISPR offers unmatched efficiency. Medical researchers are currently conducting clinical trials targeting sickle-cell disease and hereditary blindness. However, the prospect of germline gene editing—alterations made to embryos that are inheritable across generations—has sparked fierce bioethical debates globally.",
    "question": "According to the passage, the CRISPR-Cas9 system was originally discovered as _____ .",
    "options": {
      "A": "a laboratory tool designed to cut and replace damaged DNA",
      "B": "a natural bacterial defense mechanism against viral infections",
      "C": "a virus that bacteria use to attack other microorganisms",
      "D": "an immune response that human cells use against bacteria",
      "E": "a gene therapy first tested on patients with sickle-cell disease"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Doğrudan Bilgi Çıkarımı: 'bacteria against bacteriophages (viruses)'",
    "trapWarning": "Metin: \"derived from a naturally occurring adaptive immune defense found in bacteria against bacteriophages\". A bugünkü kullanımı köken gibi sunar, C saldıranla savunanı karıştırır, D canlıları değiştirir, E ise klinik denemeyi keşif sanır.",
    "explanation": "Metinde 'Derived from a naturally occurring adaptive immune defense found in bacteria against bacteriophages' denmiştir. Bakteriyofaj bir virüstür. Dolayısıyla B şıkkı doğrudur."
  },
  {
    "id": "m_q44",
    "type": "reading",
    "title": "44. Soru - Paragraf 1 (CRISPR)",
    "passage": "The advent of the CRISPR-Cas9 genome editing mechanism has fundamentally transformed contemporary molecular genetics. Derived from a naturally occurring adaptive immune defense found in bacteria against bacteriophages, CRISPR acts as a pair of molecular scissors capable of excising and replacing mutated DNA sequences with remarkable precision. Unlike earlier genetic modification technologies that were prohibitively expensive, laborious, and vulnerable to off-target mutations, CRISPR offers unmatched efficiency. Medical researchers are currently conducting clinical trials targeting sickle-cell disease and hereditary blindness. However, the prospect of germline gene editing—alterations made to embryos that are inheritable across generations—has sparked fierce bioethical debates globally.",
    "question": "It is clearly stated in the passage that earlier genetic technologies _____ .",
    "options": {
      "A": "were costly and likely to cause unintended mutations",
      "B": "were more precise but much slower than CRISPR",
      "C": "could not be used in clinical trials on humans",
      "D": "were based on the same bacterial defense system",
      "E": "raised fewer ethical concerns than CRISPR does"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Karşılaştırma (Unlike earlier genetic modification technologies...)",
    "trapWarning": "Metin: \"prohibitively expensive, laborious, and vulnerable to off-target mutations\". B kesinliği eski yöntemlere verir (tersi); C, D ve E metinde söylenmeyen karşılaştırmalardır.",
    "explanation": "'prohibitively expensive, laborious, and vulnerable to off-target mutations' = 'costly and likely to cause unintended mutations' (A şıkkı)."
  },
  {
    "id": "m_q45",
    "type": "reading",
    "title": "45. Soru - Paragraf 1 (CRISPR)",
    "passage": "The advent of the CRISPR-Cas9 genome editing mechanism has fundamentally transformed contemporary molecular genetics. Derived from a naturally occurring adaptive immune defense found in bacteria against bacteriophages, CRISPR acts as a pair of molecular scissors capable of excising and replacing mutated DNA sequences with remarkable precision. Unlike earlier genetic modification technologies that were prohibitively expensive, laborious, and vulnerable to off-target mutations, CRISPR offers unmatched efficiency. Medical researchers are currently conducting clinical trials targeting sickle-cell disease and hereditary blindness. However, the prospect of germline gene editing—alterations made to embryos that are inheritable across generations—has sparked fierce bioethical debates globally.",
    "question": "The author notes that germline editing is controversial primarily because it _____ .",
    "options": {
      "A": "has not yet been tested in clinical trials on humans",
      "B": "introduces modifications that can be passed down to future generations",
      "C": "is much more expensive than other forms of gene editing",
      "D": "may cause unexpected mutations in the treated patient",
      "E": "is used to treat diseases such as hereditary blindness"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Sebep Analizi: 'alterations made to embryos that are inheritable across generations'",
    "trapWarning": "Metin germline düzenlemeyi \"inheritable across generations\" diye tanımlar; tartışmanın nedeni budur. D eski tekniklerin sorununu (off-target) buraya taşır; E ise klinik denemeleri tartışma nedeni gibi sunar.",
    "explanation": "Metinde 'alterations made to embryos that are inheritable across generations' ifadesi doğrudan 'modifications that can be passed down to future generations' (B şıkkı) ile örtüşür."
  },
  {
    "id": "m_q46",
    "type": "reading",
    "title": "46. Soru - Paragraf 1 (CRISPR)",
    "passage": "The advent of the CRISPR-Cas9 genome editing mechanism has fundamentally transformed contemporary molecular genetics. Derived from a naturally occurring adaptive immune defense found in bacteria against bacteriophages, CRISPR acts as a pair of molecular scissors capable of excising and replacing mutated DNA sequences with remarkable precision. Unlike earlier genetic modification technologies that were prohibitively expensive, laborious, and vulnerable to off-target mutations, CRISPR offers unmatched efficiency. Medical researchers are currently conducting clinical trials targeting sickle-cell disease and hereditary blindness. However, the prospect of germline gene editing—alterations made to embryos that are inheritable across generations—has sparked fierce bioethical debates globally.",
    "question": "Which of the following would be the best title for the passage?",
    "options": {
      "A": "How Bacteria Defend Themselves Against Viruses",
      "B": "CRISPR-Cas9: A Genetic Revolution and Its Ethical Dilemmas",
      "C": "The Case Against Editing Human Embryos",
      "D": "New Treatments for Sickle-Cell Disease",
      "E": "Why Earlier Genetic Technologies Failed"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Başlık Tespiti (CRISPR devrimi ve etik boyutu)",
    "trapWarning": "Başlık bütün paragrafı kapsamalıdır: CRISPR devrimi + etik tartışma. A, D ve E yalnızca bir cümleyi kapsar; C ise tartışmanın bir tarafını seçer, oysa yazar taraf tutmaz.",
    "explanation": "Metin CRISPR'ın genetik teknolojisindeki devrimini ve ardından gelen etik tartışmaları özetler. Doğru başlık B'dir."
  },
  {
    "id": "m_q47",
    "type": "reading",
    "title": "47. Soru - Paragraf 2 (Deep-Sea Mining)",
    "passage": "The abyssal plains of the Clarion-Clipperton Zone in the central Pacific Ocean contain trillions of polymetallic nodules—potato-sized mineral accretions exceptionally rich in nickel, cobalt, manganese, and copper. As demand for these metals surges to fuel the global green transition, commercial mining entities are eager to begin industrial dredging four thousand meters beneath the surface. Proponents argue that deep-sea harvesting produces far lower carbon footprints than open-pit terrestrial mining and involves zero human displacement. However, marine biologists vehemently counter that abyssal ecosystems are among the most fragile and slowest-recovering biomes on Earth. Organisms living in the perpetual darkness of the deep sea have evolved over millions of years under tranquil conditions; sediment plumes and acoustic pollution generated by heavy robotic crawlers could cause irreversible biodiversity loss.",
    "question": "Supporters of deep-sea nodule harvesting claim that it is advantageous because it _____ .",
    "options": {
      "A": "produces lower carbon emissions and avoids displacing human communities",
      "B": "causes less damage to ecosystems than mining on land",
      "C": "can supply metals that are not found anywhere on land",
      "D": "is cheaper than open-pit mining on land",
      "E": "will allow damaged seabed habitats to recover quickly"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Proponents (Savunucular) Argümanı Çıkarımı",
    "trapWarning": "Destekçiler: düşük karbon ayak izi ve sıfır insan yerinden edilmesi. B ekosistem iddiası ekler (biyologların itirazıyla karışır), C ve D metinde olmayan avantajlardır, E ise metinle çelişir.",
    "explanation": "Metinde 'produces far lower carbon footprints than open-pit terrestrial mining and involves zero human displacement' açıkça belirtilmiştir (A şıkkı)."
  },
  {
    "id": "m_q48",
    "type": "reading",
    "title": "48. Soru - Paragraf 2 (Deep-Sea Mining)",
    "passage": "The abyssal plains of the Clarion-Clipperton Zone in the central Pacific Ocean contain trillions of polymetallic nodules—potato-sized mineral accretions exceptionally rich in nickel, cobalt, manganese, and copper. As demand for these metals surges to fuel the global green transition, commercial mining entities are eager to begin industrial dredging four thousand meters beneath the surface. Proponents argue that deep-sea harvesting produces far lower carbon footprints than open-pit terrestrial mining and involves zero human displacement. However, marine biologists vehemently counter that abyssal ecosystems are among the most fragile and slowest-recovering biomes on Earth. Organisms living in the perpetual darkness of the deep sea have evolved over millions of years under tranquil conditions; sediment plumes and acoustic pollution generated by heavy robotic crawlers could cause irreversible biodiversity loss.",
    "question": "According to marine biologists in the passage, abyssal ecosystems are particularly vulnerable because they _____ .",
    "options": {
      "A": "developed under calm conditions and recover very slowly",
      "B": "contain species that are found nowhere else on Earth",
      "C": "are already polluted by plastic waste from the surface",
      "D": "depend on the nodules for their supply of food",
      "E": "are exposed to frequent changes in temperature and light"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Paraphrase: 'fragile and slowest-recovering' & 'tranquil conditions'",
    "trapWarning": "Metin: \"slowest-recovering\" ve \"evolved ... under tranquil conditions\". B makul görünür ama metinde yoktur; E ise \"perpetual darkness\" ve \"tranquil\" ile çelişir.",
    "explanation": "Metin 'abyssal ecosystems are among the most fragile and slowest-recovering biomes ... evolved over millions of years under tranquil conditions' demektedir (A şıkkı)."
  },
  {
    "id": "m_q49",
    "type": "reading",
    "title": "49. Soru - Paragraf 2 (Deep-Sea Mining)",
    "passage": "The abyssal plains of the Clarion-Clipperton Zone in the central Pacific Ocean contain trillions of polymetallic nodules—potato-sized mineral accretions exceptionally rich in nickel, cobalt, manganese, and copper. As demand for these metals surges to fuel the global green transition, commercial mining entities are eager to begin industrial dredging four thousand meters beneath the surface. Proponents argue that deep-sea harvesting produces far lower carbon footprints than open-pit terrestrial mining and involves zero human displacement. However, marine biologists vehemently counter that abyssal ecosystems are among the most fragile and slowest-recovering biomes on Earth. Organisms living in the perpetual darkness of the deep sea have evolved over millions of years under tranquil conditions; sediment plumes and acoustic pollution generated by heavy robotic crawlers could cause irreversible biodiversity loss.",
    "question": "It can be inferred from the passage that the drive to extract deep-sea minerals is largely fueled by _____ .",
    "options": {
      "A": "concerns about the environmental damage caused by land mining",
      "B": "rising demand for metals needed in green technologies",
      "C": "the falling cost of underwater robotic technology",
      "D": "the discovery of new nodule fields in the Pacific Ocean",
      "E": "pressure from marine biologists to study the deep sea"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Inference: 'demand for these metals surges to fuel the global green transition'",
    "trapWarning": "Metin: \"As demand for these metals surges to fuel the global green transition\". A destekçilerin bir argümanıdır, temel itici güç değildir; C ve D metinde geçmez; E ise biyologların tutumuyla çelişir.",
    "explanation": "'demand for these metals surges to fuel the global green transition' = 'rising demand for metals needed in green technologies' (B şıkkı)."
  },
  {
    "id": "m_q50",
    "type": "reading",
    "title": "50. Soru - Paragraf 2 (Deep-Sea Mining)",
    "passage": "The abyssal plains of the Clarion-Clipperton Zone in the central Pacific Ocean contain trillions of polymetallic nodules—potato-sized mineral accretions exceptionally rich in nickel, cobalt, manganese, and copper. As demand for these metals surges to fuel the global green transition, commercial mining entities are eager to begin industrial dredging four thousand meters beneath the surface. Proponents argue that deep-sea harvesting produces far lower carbon footprints than open-pit terrestrial mining and involves zero human displacement. However, marine biologists vehemently counter that abyssal ecosystems are among the most fragile and slowest-recovering biomes on Earth. Organisms living in the perpetual darkness of the deep sea have evolved over millions of years under tranquil conditions; sediment plumes and acoustic pollution generated by heavy robotic crawlers could cause irreversible biodiversity loss.",
    "question": "The tone of the marine biologists regarding deep-sea mining can best be described as _____ .",
    "options": {
      "A": "cautiously optimistic",
      "B": "openly supportive",
      "C": "seriously concerned",
      "D": "mildly amused",
      "E": "largely indifferent"
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "Yazarın / Biyologların Tavrı (Tone): 'vehemently counter', 'irreversible loss'",
    "trapWarning": "\"Vehemently counter\" ve \"irreversible biodiversity loss\" ifadeleri ciddi bir endişe gösterir. A \"cautious\" kelimesiyle tuzak kurar ama \"optimistic\" metne uymaz.",
    "explanation": "Biyologlar 'vehemently counter' (şiddetle karşı çıkmak) ve 'irreversible biodiversity loss' (geri dönüşü olmayan kayıp) demektedir. Tonları 'seriously concerned'dır (C şıkkı)."
  },
  {
    "id": "m_q51",
    "type": "reading",
    "title": "51. Soru - Paragraf 3 (AMOC Okyanus Akıntısı)",
    "passage": "The Atlantic Meridional Overturning Circulation (AMOC)—a vast conveyor belt of ocean currents that transports warm, saline surface waters from the tropics to the North Atlantic—is a cornerstone of global climate stability. By releasing immense thermal energy into the atmosphere above Northwestern Europe, the AMOC ensures that countries like the United Kingdom and Norway enjoy climates markedly milder than regions at equivalent latitudes in North America. However, accelerating meltwater runoff from the Greenland ice sheet is flooding the subpolar seas with massive volumes of low-density freshwater. Because freshwater does not sink as readily as dense, salty water, this freshening threatens to stall the deep-water convective sinking that drives the entire circulatory system. Paleoclimate data reveals that past AMOC disruptions precipitated abrupt cooling events across Europe and triggered dramatic shifts in tropical monsoon belts.",
    "question": "According to the passage, the AMOC is essential for Europe because it _____ .",
    "options": {
      "A": "carries cold polar water south toward the tropics",
      "B": "releases tropical heat that keeps regional temperatures comparatively mild",
      "C": "brings rainfall from tropical monsoon belts",
      "D": "prevents the Greenland ice sheet from melting",
      "E": "makes European winters colder than North American ones"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Doğrudan Bilgi: 'releasing immense thermal energy ... enjoy climates markedly milder'",
    "trapWarning": "AMOC sıcak tuzlu suyu tropiklerden kuzeye taşır ve ısı bırakır. A yönü ters çevirir, E karşılaştırmayı tersine çevirir, C ve D ise metindeki başka bilgileri karıştırır.",
    "explanation": "'By releasing immense thermal energy into the atmosphere above Northwestern Europe, the AMOC ensures that countries ... enjoy climates markedly milder' (B şıkkı)."
  },
  {
    "id": "m_q52",
    "type": "reading",
    "title": "52. Soru - Paragraf 3 (AMOC Okyanus Akıntısı)",
    "passage": "The Atlantic Meridional Overturning Circulation (AMOC)—a vast conveyor belt of ocean currents that transports warm, saline surface waters from the tropics to the North Atlantic—is a cornerstone of global climate stability. By releasing immense thermal energy into the atmosphere above Northwestern Europe, the AMOC ensures that countries like the United Kingdom and Norway enjoy climates markedly milder than regions at equivalent latitudes in North America. However, accelerating meltwater runoff from the Greenland ice sheet is flooding the subpolar seas with massive volumes of low-density freshwater. Because freshwater does not sink as readily as dense, salty water, this freshening threatens to stall the deep-water convective sinking that drives the entire circulatory system. Paleoclimate data reveals that past AMOC disruptions precipitated abrupt cooling events across Europe and triggered dramatic shifts in tropical monsoon belts.",
    "question": "The primary mechanism threatening to disrupt the AMOC is _____ .",
    "options": {
      "A": "rising salt levels in the North Atlantic caused by evaporation",
      "B": "meltwater from Greenland that makes the water harder to sink",
      "C": "warmer surface water that releases more heat over Europe",
      "D": "changes in tropical monsoon belts that weaken the current",
      "E": "dense salty water that sinks too quickly in subpolar seas"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Mekanizma & Neden-Sonuç: 'meltwater runoff ... low-density freshwater ... does not sink'",
    "trapWarning": "Sorun tatlı suyun düşük yoğunluğu: \"freshwater does not sink as readily\". A ve E tuzluluğu sorun gibi sunar (tersi), D sonucu neden yapar, C ise mekanizmayı karıştırır.",
    "explanation": "Metin 'meltwater runoff from Greenland ... low-density freshwater ... does not sink as readily as dense, salty water' demektedir. B şıkkı tam açıklamadır."
  },
  {
    "id": "m_q53",
    "type": "reading",
    "title": "53. Soru - Paragraf 3 (AMOC Okyanus Akıntısı)",
    "passage": "The Atlantic Meridional Overturning Circulation (AMOC)—a vast conveyor belt of ocean currents that transports warm, saline surface waters from the tropics to the North Atlantic—is a cornerstone of global climate stability. By releasing immense thermal energy into the atmosphere above Northwestern Europe, the AMOC ensures that countries like the United Kingdom and Norway enjoy climates markedly milder than regions at equivalent latitudes in North America. However, accelerating meltwater runoff from the Greenland ice sheet is flooding the subpolar seas with massive volumes of low-density freshwater. Because freshwater does not sink as readily as dense, salty water, this freshening threatens to stall the deep-water convective sinking that drives the entire circulatory system. Paleoclimate data reveals that past AMOC disruptions precipitated abrupt cooling events across Europe and triggered dramatic shifts in tropical monsoon belts.",
    "question": "Paleoclimate data mentioned in the passage indicates that previous shutdowns of the AMOC _____ .",
    "options": {
      "A": "led to gradual warming across Europe over several centuries",
      "B": "brought sudden cooling to Europe and shifted monsoon belts",
      "C": "affected Europe but had little effect on the tropics",
      "D": "were caused by changes in tropical monsoon belts",
      "E": "caused the Greenland ice sheet to melt rapidly"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Metin İçi Kanıt: 'precipitated abrupt cooling events ... and triggered dramatic shifts in monsoon belts'",
    "trapWarning": "Metin: \"abrupt cooling events across Europe and ... shifts in tropical monsoon belts\". A yönü ve hızı değiştirir, C tropik etkisini yok sayar, D sebep-sonucu ters çevirir.",
    "explanation": "'precipitated abrupt cooling events across Europe and triggered dramatic shifts in tropical monsoon belts' = B şıkkı."
  },
  {
    "id": "m_q54",
    "type": "reading",
    "title": "54. Soru - Paragraf 3 (AMOC Okyanus Akıntısı)",
    "passage": "The Atlantic Meridional Overturning Circulation (AMOC)—a vast conveyor belt of ocean currents that transports warm, saline surface waters from the tropics to the North Atlantic—is a cornerstone of global climate stability. By releasing immense thermal energy into the atmosphere above Northwestern Europe, the AMOC ensures that countries like the United Kingdom and Norway enjoy climates markedly milder than regions at equivalent latitudes in North America. However, accelerating meltwater runoff from the Greenland ice sheet is flooding the subpolar seas with massive volumes of low-density freshwater. Because freshwater does not sink as readily as dense, salty water, this freshening threatens to stall the deep-water convective sinking that drives the entire circulatory system. Paleoclimate data reveals that past AMOC disruptions precipitated abrupt cooling events across Europe and triggered dramatic shifts in tropical monsoon belts.",
    "question": "The word 'stall' in the passage is closest in meaning to _____ .",
    "options": {
      "A": "reverse",
      "B": "halt",
      "C": "weaken",
      "D": "delay",
      "E": "trigger"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Kelime Eş Anlamı: 'stall = durdurmak, stop / halt'",
    "trapWarning": "Stall = durdurmak. C (weaken) ve D (delay) anlamca yakındır ama tam karşılık değildir; A (reverse) yön değiştirmeyi, E (trigger) başlatmayı anlatır.",
    "explanation": "Stall: durdurmak, duraklatmak, aksatmak. Eşanlamlısı 'halt' (B şıkkı)."
  },
  {
    "id": "m_q55",
    "type": "reading",
    "title": "55. Soru - Paragraf 4 (Bilişsel Önyargılar)",
    "passage": "Human cognition is notoriously susceptible to cognitive biases—systematic deviations from normative rationality that influence judgment and decision-making. Among the most pervasive is confirmation bias: the subconscious tendency to seek, interpret, and recall information in a manner that validates one's preexisting beliefs while disregarding contradictory empirical data. In evolutionary psychology, cognitive biases are not interpreted as pathological design flaws, but rather as adaptive heuristics. Our ancestral hunter-gatherer predecessors operated in precarious environments characterized by acute information scarcity and imminent mortal danger. Under such severe constraints, rapid decision-making was far more advantageous for survival than exhaustive statistical deliberation. However, in contemporary digital societies flooded with algorithmic echo chambers, these evolutionary shortcuts often exacerbate political polarization and entrench scientific denialism.",
    "question": "According to evolutionary psychologists, cognitive biases originally developed because they _____ .",
    "options": {
      "A": "helped our ancestors make quick decisions in dangerous conditions",
      "B": "allowed early humans to analyse information more accurately",
      "C": "protected people from the influence of their own beliefs",
      "D": "helped ancestors cope with an excess of information",
      "E": "were a design flaw that natural selection failed to remove"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Evrimsel Neden Tespiti: 'adaptive heuristics ... rapid decision-making was far more advantageous for survival'",
    "trapWarning": "Önyargılar hızlı karar için uyarlayıcı kısayollardır. B doğruluğu öne çıkarır (metin hızın doğruluktan önemli olduğunu söyler), D bilgi kıtlığını bolluğa çevirir, E ise \"not ... design flaws\" ile çelişir.",
    "explanation": "'Under such severe constraints, rapid decision-making was far more advantageous for survival than exhaustive statistical deliberation' = A şıkkı."
  },
  {
    "id": "m_q56",
    "type": "reading",
    "title": "56. Soru - Paragraf 4 (Bilişsel Önyargılar)",
    "passage": "Human cognition is notoriously susceptible to cognitive biases—systematic deviations from normative rationality that influence judgment and decision-making. Among the most pervasive is confirmation bias: the subconscious tendency to seek, interpret, and recall information in a manner that validates one's preexisting beliefs while disregarding contradictory empirical data. In evolutionary psychology, cognitive biases are not interpreted as pathological design flaws, but rather as adaptive heuristics. Our ancestral hunter-gatherer predecessors operated in precarious environments characterized by acute information scarcity and imminent mortal danger. Under such severe constraints, rapid decision-making was far more advantageous for survival than exhaustive statistical deliberation. However, in contemporary digital societies flooded with algorithmic echo chambers, these evolutionary shortcuts often exacerbate political polarization and entrench scientific denialism.",
    "question": "Confirmation bias is defined in the passage as a subconscious tendency to _____ .",
    "options": {
      "A": "favour information that supports what one already believes",
      "B": "change one's beliefs whenever new evidence appears",
      "C": "accept the views of the majority to avoid conflict",
      "D": "remember mainly information that is surprising",
      "E": "doubt evidence that comes from unfamiliar sources"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Tanım Eşleştirme: 'validates preexisting beliefs while disregarding contradictory data'",
    "trapWarning": "Tanım: mevcut inancı doğrulayan bilgiyi arama ve karşıt veriyi göz ardı etme. B tanımın tersidir; C ve E başka önyargıları (sürü etkisi, kaynak güvensizliği) tarif eder.",
    "explanation": "'tendency to seek, interpret, and recall information in a manner that validates one's preexisting beliefs while disregarding contradictory empirical data' = A şıkkı."
  },
  {
    "id": "m_q57",
    "type": "reading",
    "title": "57. Soru - Paragraf 4 (Bilişsel Önyargılar)",
    "passage": "Human cognition is notoriously susceptible to cognitive biases—systematic deviations from normative rationality that influence judgment and decision-making. Among the most pervasive is confirmation bias: the subconscious tendency to seek, interpret, and recall information in a manner that validates one's preexisting beliefs while disregarding contradictory empirical data. In evolutionary psychology, cognitive biases are not interpreted as pathological design flaws, but rather as adaptive heuristics. Our ancestral hunter-gatherer predecessors operated in precarious environments characterized by acute information scarcity and imminent mortal danger. Under such severe constraints, rapid decision-making was far more advantageous for survival than exhaustive statistical deliberation. However, in contemporary digital societies flooded with algorithmic echo chambers, these evolutionary shortcuts often exacerbate political polarization and entrench scientific denialism.",
    "question": "The author argues that in modern digital societies, evolutionary cognitive shortcuts _____ .",
    "options": {
      "A": "are still useful because they help people process information quickly",
      "B": "have been largely replaced by more careful statistical reasoning",
      "C": "deepen political divisions and strengthen science denial",
      "D": "help people avoid being trapped in online echo chambers",
      "E": "are less common than they were among hunter-gatherers"
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "Modern Dünya Etkisi: 'exacerbate political polarization and entrench scientific denialism'",
    "trapWarning": "Son cümle: \"exacerbate political polarization and entrench scientific denialism\". A geçmişteki faydayı bugüne taşır, D tersini söyler, B ve E metinde olmayan iddialardır.",
    "explanation": "'exacerbate political polarization and entrench scientific denialism' = 'deepen political divisions and strengthen science denial' (C şıkkı)."
  },
  {
    "id": "m_q58",
    "type": "reading",
    "title": "58. Soru - Paragraf 4 (Bilişsel Önyargılar)",
    "passage": "Human cognition is notoriously susceptible to cognitive biases—systematic deviations from normative rationality that influence judgment and decision-making. Among the most pervasive is confirmation bias: the subconscious tendency to seek, interpret, and recall information in a manner that validates one's preexisting beliefs while disregarding contradictory empirical data. In evolutionary psychology, cognitive biases are not interpreted as pathological design flaws, but rather as adaptive heuristics. Our ancestral hunter-gatherer predecessors operated in precarious environments characterized by acute information scarcity and imminent mortal danger. Under such severe constraints, rapid decision-making was far more advantageous for survival than exhaustive statistical deliberation. However, in contemporary digital societies flooded with algorithmic echo chambers, these evolutionary shortcuts often exacerbate political polarization and entrench scientific denialism.",
    "question": "The primary purpose of the passage is to _____ .",
    "options": {
      "A": "argue that cognitive biases should be treated as mental disorders",
      "B": "explain where cognitive biases come from and how they affect society today",
      "C": "compare the thinking of hunter-gatherers with that of modern humans",
      "D": "warn readers about the dangers of social media algorithms",
      "E": "show how confirmation bias can be overcome through education"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Ana Amaç (Evolutionary origins + modern ramifications)",
    "trapWarning": "Paragraf: önyargıların evrimsel kökeni + bugünkü etkileri. C ve D yalnızca bir kısmı kapsar; A metinle çelişir (\"not pathological\"), E ise metinde olmayan bir çözüm sunar.",
    "explanation": "Metin, bilişsel önyargıların evrimsel kökenini (avcı-toplayıcı hayatta kalma) ve günümüz dijital dünyasındaki yansımalarını (kutuplaşma) anlatmaktadır (B şıkkı)."
  },
  {
    "id": "m_q59",
    "type": "reading",
    "title": "59. Soru - Paragraf 5 (Büyük Dil Modelleri)",
    "passage": "The meteoric rise of Large Language Models (LLMs) has rekindled a fierce philosophical debate regarding the nature of artificial intelligence and genuine linguistic comprehension. Built upon deep neural transformer architectures, LLMs are trained on billions of digital text tokens to predict subsequent words via sophisticated statistical probability distributions. Skeptical linguists, aligning with Noam Chomsky, argue that these models are essentially sophisticated 'stochastic parrots'—systems capable of generating syntactically flawless prose without possessing any underlying semantic understanding or empirical model of physical reality. Conversely, proponents contend that as neural networks scale in parameter volume, emergent reasoning capabilities spontaneously manifest, transcending mere rote memorization. Resolving whether statistical prediction can ever yield genuine cognitive intentionality remains the defining challenge of twenty-first-century philosophy of mind.",
    "question": "According to skeptical linguists in the passage, Large Language Models _____ .",
    "options": {
      "A": "produce fluent text without really understanding what it means",
      "B": "frequently make grammatical errors when generating long texts",
      "C": "begin to reason once they reach a very large size",
      "D": "understand language in much the same way as children do",
      "E": "simply copy sentences they have memorised from their training data"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Şüpheci Görüş Analizi: 'syntactically flawless prose without possessing any semantic understanding'",
    "trapWarning": "Şüpheciler: dilbilgisi kusursuz ama anlam yok. B dilbilgisi iddiasıyla çelişir, C destekçilerin görüşüdür. E ince tuzaktır: \"parrot\" ezber gibi görünür ama metin istatistiksel tahmin der, cümle kopyalama demez.",
    "explanation": "'syntactically flawless prose without possessing any underlying semantic understanding' = A şıkkı."
  },
  {
    "id": "m_q60",
    "type": "reading",
    "title": "60. Soru - Paragraf 5 (Büyük Dil Modelleri)",
    "passage": "The meteoric rise of Large Language Models (LLMs) has rekindled a fierce philosophical debate regarding the nature of artificial intelligence and genuine linguistic comprehension. Built upon deep neural transformer architectures, LLMs are trained on billions of digital text tokens to predict subsequent words via sophisticated statistical probability distributions. Skeptical linguists, aligning with Noam Chomsky, argue that these models are essentially sophisticated 'stochastic parrots'—systems capable of generating syntactically flawless prose without possessing any underlying semantic understanding or empirical model of physical reality. Conversely, proponents contend that as neural networks scale in parameter volume, emergent reasoning capabilities spontaneously manifest, transcending mere rote memorization. Resolving whether statistical prediction can ever yield genuine cognitive intentionality remains the defining challenge of twenty-first-century philosophy of mind.",
    "question": "Proponents of LLMs argue that expanding the volume of parameters within neural networks _____ .",
    "options": {
      "A": "makes the models better at memorising their training data",
      "B": "can lead to reasoning abilities that go beyond memorisation",
      "C": "proves that the models truly understand the physical world",
      "D": "reduces the errors the models make in grammar",
      "E": "allows the models to predict words without statistics"
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Karşıt Görüş: 'emergent reasoning capabilities spontaneously manifest'",
    "trapWarning": "Destekçiler: ölçek büyüdükçe \"emergent reasoning ... transcending mere rote memorization\". A tam tersini söyler, C \"proves\" ile aşırı kesinlik ekler, D ve E metinde yoktur.",
    "explanation": "'as neural networks scale in parameter volume, emergent reasoning capabilities spontaneously manifest, transcending mere rote memorization' = B şıkkı."
  },
  {
    "id": "m_q61",
    "type": "reading",
    "title": "61. Soru - Paragraf 5 (Büyük Dil Modelleri)",
    "passage": "The meteoric rise of Large Language Models (LLMs) has rekindled a fierce philosophical debate regarding the nature of artificial intelligence and genuine linguistic comprehension. Built upon deep neural transformer architectures, LLMs are trained on billions of digital text tokens to predict subsequent words via sophisticated statistical probability distributions. Skeptical linguists, aligning with Noam Chomsky, argue that these models are essentially sophisticated 'stochastic parrots'—systems capable of generating syntactically flawless prose without possessing any underlying semantic understanding or empirical model of physical reality. Conversely, proponents contend that as neural networks scale in parameter volume, emergent reasoning capabilities spontaneously manifest, transcending mere rote memorization. Resolving whether statistical prediction can ever yield genuine cognitive intentionality remains the defining challenge of twenty-first-century philosophy of mind.",
    "question": "It is implied in the passage that the ongoing debate between skeptics and proponents _____ .",
    "options": {
      "A": "has largely been resolved in favour of the skeptics",
      "B": "centres on whether statistical prediction can amount to real understanding",
      "C": "is mainly about how large the models should be allowed to become",
      "D": "concerns whether LLMs produce grammatically correct language",
      "E": "is likely to be settled by the next generation of models"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Sonuç Cümlesi / Çıkarım: 'whether statistical prediction can ever yield genuine cognitive intentionality'",
    "trapWarning": "Son cümle tartışmanın hâlâ açık olduğunu ve sorunun istatistiksel tahminin gerçek anlama dönüşüp dönüşemeyeceği olduğunu söyler. A ve E çözülmüş/çözülecek der; D ise iki tarafın da kabul ettiği bir noktadır.",
    "explanation": "Son cümlede 'Resolving whether statistical prediction can ever yield genuine cognitive intentionality remains the defining challenge' denmiştir. Doğru cevap B'dir."
  },
  {
    "id": "m_q62",
    "type": "reading",
    "title": "62. Soru - Paragraf 5 (Büyük Dil Modelleri)",
    "passage": "The meteoric rise of Large Language Models (LLMs) has rekindled a fierce philosophical debate regarding the nature of artificial intelligence and genuine linguistic comprehension. Built upon deep neural transformer architectures, LLMs are trained on billions of digital text tokens to predict subsequent words via sophisticated statistical probability distributions. Skeptical linguists, aligning with Noam Chomsky, argue that these models are essentially sophisticated 'stochastic parrots'—systems capable of generating syntactically flawless prose without possessing any underlying semantic understanding or empirical model of physical reality. Conversely, proponents contend that as neural networks scale in parameter volume, emergent reasoning capabilities spontaneously manifest, transcending mere rote memorization. Resolving whether statistical prediction can ever yield genuine cognitive intentionality remains the defining challenge of twenty-first-century philosophy of mind.",
    "question": "The metaphor 'stochastic parrots' is used by skeptics to emphasize that LLMs _____ .",
    "options": {
      "A": "repeat language patterns without real understanding",
      "B": "can only repeat sentences they have seen before",
      "C": "produce text that is often grammatically incorrect",
      "D": "learn language by imitating human speakers directly",
      "E": "give random answers that have no statistical basis"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Metafor Anlamı Çözümleme ('Stochastic parrot' = Anlamadan tekrar eden)",
    "trapWarning": "\"Stochastic\" = olasılıksal, \"parrot\" = anlamadan tekrar. B ince tuzaktır: birebir kopyalama demez; C dilbilgisi iddiasıyla çelişir, E ise \"stochastic\" kelimesini rastgele sanır.",
    "explanation": "Stokastik papağan: olasılıksal kalıpları ne anlama geldiğini kavramadan papağan gibi tekrar eden yapı demektir (A şıkkı)."
  },
  {
    "id": "m_q63",
    "type": "dialogue",
    "title": "63. Soru - Diyalog Tamamlama",
    "dialogueSpeaker": "Dr. Evans & Prof. Jenkins",
    "question": "Dr. Evans: Did you review the latest clinical trial results for the novel oncology drug?\nProf. Jenkins: Yes, and while the tumor shrinkage was indeed impressive, the incidence of severe hepatotoxicity among elderly patients is alarming.\nDr. Evans: _____ \nProf. Jenkins: Exactly. Unless we can synthesize a targeted delivery mechanism, the regulatory agency will never grant commercial approval.",
    "options": {
      "A": "So you think the side effects may outweigh its benefits for these patients?",
      "B": "So you think we should simply lower the dose for elderly patients?",
      "C": "So you believe the liver damage was caused by another medication?",
      "D": "So you suggest we test the drug on younger patients only?",
      "E": "So you expect the agency to approve it despite the side effects?"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Diyalog Mantığı & 'Exactly' Onayı: Prof. Jenkins 'Exactly. Unless we synthesize a targeted delivery...' diyerek Evans'ın tehlike tespitini onaylıyor.",
    "trapWarning": "Bütün şıklar \"So you...\" ile başlar. Jenkins \"Exactly\" deyip özel bir taşıma sistemi gerektiğini söyler; bu yüzden boşlukta yan etkilerin faydayı gölgelediği yorumu olmalıdır. B ve D başka çözümler önerir, E ise Jenkins'in sözüyle çelişir.",
    "explanation": "Prof. Jenkins ilacın karaciğere toksik olduğunu söylediğinde Dr. Evans 'Yani yan etkilerin bu hastalar için faydalardan ağır basabileceğini mi düşünüyorsun?' diye özetler (A şıkkı)."
  },
  {
    "id": "m_q64",
    "type": "dialogue",
    "title": "64. Soru - Diyalog Tamamlama",
    "dialogueSpeaker": "Sarah & David (Urban Planning Conference)",
    "question": "Sarah: Several major metropolitan areas in Europe have started banning private diesel vehicles from central business districts to combat smog.\nDavid: _____ \nSarah: Actually, economic data shows the opposite. Foot traffic increased substantially, and retail revenues rose because city centers became far more hospitable and pedestrian-friendly.",
    "options": {
      "A": "Didn't local shop owners fear that their sales would fall?",
      "B": "Has the air quality in those cities actually improved since then?",
      "C": "Weren't commuters angry about the longer travel times?",
      "D": "Do you think the bans will be extended to petrol cars as well?",
      "E": "How did the cities persuade residents to accept the bans?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Actually, economic data shows the opposite': Karşı tarafın ekonomik kayıp endişesini çürüten cevap",
    "trapWarning": "Sarah \"Actually ... the opposite\" der ve yaya trafiği ile satışların arttığını anlatır. Yani David ekonomik bir kaygı dile getirmiş olmalıdır. B, C, D ve E de makul sorulardır ama Sarah'nın cevabı satışlarla ilgilidir.",
    "explanation": "A şıkkında David esnafın satışların düşeceğinden korkmadığını sorar; Sarah da 'Aksine, veriler yaya trafiğinin ve dükkan gelirlerinin arttığını gösteriyor' der."
  },
  {
    "id": "m_q65",
    "type": "dialogue",
    "title": "65. Soru - Diyalog Tamamlama",
    "dialogueSpeaker": "Clara & Mark (Astronomy Seminar)",
    "question": "Clara: Why are astrophysicists so eager to construct space-based gravitational wave observatories when we already have LIGO on Earth?\nMark: _____ \nClara: Ah, that makes complete sense. Ground vibrations and seismic tremors mask low-frequency signals that only space-based instruments can detect.",
    "options": {
      "A": "Because space observatories are much cheaper to maintain than LIGO.",
      "B": "Because on Earth seismic noise drowns out low-frequency waves.",
      "C": "Because LIGO cannot detect waves from distant black holes.",
      "D": "Because space detectors can be built with much longer arms.",
      "E": "Because the atmosphere distorts gravitational waves before they reach us."
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Clara'nın İkinci Cümlesinden Çıkarım: 'Ground vibrations and seismic tremors mask low-frequency signals'",
    "trapWarning": "Clara \"Ground vibrations and seismic tremors mask low-frequency signals\" diye özetler. D gerçek bir avantajdır ama Clara'nın özetiyle bağlanmaz; E ise atmosferi karıştırır.",
    "explanation": "B şıkkında Mark yeryüzündeki sismik gürültünün düşük frekanslı dalgaları bastırdığını söyler; Clara da bunu özetler."
  },
  {
    "id": "m_q66",
    "type": "dialogue",
    "title": "66. Soru - Diyalog Tamamlama",
    "dialogueSpeaker": "Reporter & Marine Biologist",
    "question": "Reporter: Many tourists are thrilled when coastal municipalities build artificial reefs using decommissioned ships.\nMarine Biologist: While they can indeed provide immediate hard substrates for sessile marine invertebrates, we must remain vigilant.\nReporter: _____ \nMarine Biologist: If the vessels are not meticulously stripped of lead paints, asbestos, and toxic petrochemical residues, they become long-term sources of marine contamination.",
    "options": {
      "A": "What risks could a sunken ship pose to marine life?",
      "B": "How long does it take for coral to cover a sunken ship?",
      "C": "Do artificial reefs attract more fish than natural ones?",
      "D": "Why do tourists find these artificial reefs so attractive?",
      "E": "Who pays for sinking the ships in the right location?"
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Tehlike Detayı İsteme: Biyolog 'meticulously stripped of lead, asbestos, petrochemicals' diyerek tehlikeleri sıralıyor.",
    "trapWarning": "Biyolog cevabında kurşun boya, asbest ve kirlilik gibi riskleri anlatır; boşlukta risk sorusu olmalıdır. B ve C konuyla ilgili ama cevabı \"if the vessels are not stripped...\" ile bağlanmaz.",
    "explanation": "Muhabir 'Batırılan bir gemi deniz yaşamı için ne gibi riskler taşıyabilir?' (A şıkkı) diye sorduğunda biyolog boya, asbest ve kimyasal sızıntı risklerini anlatır."
  },
  {
    "id": "m_q67",
    "type": "dialogue",
    "title": "67. Soru - Diyalog Tamamlama",
    "dialogueSpeaker": "Archaeology Students (Tolga & Aylin)",
    "question": "Tolga: Did you hear about the new lidar scans in the Amazon basin? They revealed extensive urban networks hidden under dense forest canopy.\nAylin: That completely disproves the long-held assumption that the Amazon was incapable of supporting large civilizations due to nutrient-poor soils.\nTolga: _____ \nAylin: Absolutely. It proves indigenous communities actively engineered fertile soils and managed sophisticated agrarian economies.",
    "options": {
      "A": "So these people must have actively shaped their environment.",
      "B": "So the soils of the Amazon must have been rich after all.",
      "C": "But the cities may have been built by later settlers.",
      "D": "But lidar can sometimes mistake natural features for buildings.",
      "E": "So the forest must have been cleared completely at that time."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Aylin'in 'Absolutely. It proves indigenous communities engineered fertile soils' onayına zemin hazırlayan cümle",
    "trapWarning": "Aylin \"Absolutely\" der ve yerli toplulukların verimli toprağı kendilerinin oluşturduğunu söyler. B ince tuzaktır: toprak doğal olarak zengin değildi, insanlar zenginleştirdi. C ve D şüphe bildirir, \"Absolutely\" ile uyuşmaz; E ise aşırı bir sonuçtur.",
    "explanation": "Tolga 'O halde bu insanlar çevrelerini bilinçli olarak şekillendirmiş olmalı' (A şıkkı) dediğinde Aylin 'Kesinlikle' diyerek onaylar."
  },
  {
    "id": "m_q68",
    "type": "restatement",
    "title": "68. Soru - Anlamca En Yakın Cümle",
    "question": "Given sentence: 'Had the regional central bank not intervened with unprecedented liquidity injections, several prominent domestic commercial lenders would inevitably have collapsed during the financial panic.'",
    "options": {
      "A": "Several domestic lenders collapsed during the panic even though the central bank injected record liquidity.",
      "B": "Because the regional central bank stepped in with extraordinary financial resources, major domestic banks managed to avoid bankruptcy during the crisis.",
      "C": "The central bank intervened only after several domestic lenders had already collapsed during the panic.",
      "D": "If the central bank intervenes again with large liquidity injections, domestic lenders may avoid collapse.",
      "E": "The financial panic was caused by the central bank's decision to inject unprecedented liquidity."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Type 3 Conditional Inversion Eşleştirme (Had X not intervened = If X had not intervened / Because it intervened, they avoided bankruptcy)",
    "trapWarning": "Had ... not intervened ... would have collapsed = müdahale etti, bu yüzden bankalar batmadı. A ve C batışı gerçek kabul eder, D geleceğe taşır, E ise sebep-sonucu ters çevirir.",
    "explanation": "Orijinal cümle: 'Merkez bankası benzeri görülmemiş likidite enjekte etmeseydi, birçok yerli ticari banka kaçınılmaz olarak çökerdi.' -> Demek ki merkez bankası müdahale ettiği için bankalar batmaktan kurtulmuştur (B şıkkı)."
  },
  {
    "id": "m_q69",
    "type": "restatement",
    "title": "69. Soru - Anlamca En Yakın Cümle",
    "question": "Given sentence: 'Although electric vehicles produce zero tailpipe emissions, their overall environmental benefits remain contingent upon how cleanly the electricity charging their batteries is generated.'",
    "options": {
      "A": "Because electric vehicles produce no exhaust, they benefit the environment however their electricity is produced.",
      "B": "Electric vehicles emit nothing from the exhaust, but how green they really are depends on how their power is generated.",
      "C": "Electric vehicles would produce zero tailpipe emissions only if their electricity were generated cleanly.",
      "D": "The way electricity is generated has little effect on the environment compared with tailpipe emissions.",
      "E": "Electric vehicles are no better for the environment than petrol cars because charging them causes emissions."
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "Contingent upon = Depends on (Bağlıdır / Şartına dayalıdır)",
    "trapWarning": "Although: egzoz salımı sıfır, AMA toplam fayda elektriğin temizliğine bağlı. A koşulu yok sayar, C koşulu egzoza bağlar, D önemi tersine çevirir, E ise aşırı bir sonuç çıkarır.",
    "explanation": "'contingent upon how cleanly the electricity ... is generated' = 'depends on how their power is generated' + 'Although produce zero tailpipe emissions' = 'emit nothing from the exhaust, but...' (B şıkkı)."
  },
  {
    "id": "m_q70",
    "type": "restatement",
    "title": "70. Soru - Anlamca En Yakın Cümle",
    "question": "Given sentence: 'No sooner had the experimental antiviral drug been administered to the clinical cohort than their viral loads plummeted to undetectable thresholds.'",
    "options": {
      "A": "Shortly before the patients received the drug, their viral loads had already fallen to undetectable levels.",
      "B": "As soon as the patients were given the experimental drug, their viral loads fell to undetectable levels.",
      "C": "The patients' viral loads fell gradually over several weeks after they were given the drug.",
      "D": "The drug was given to the patients only after their viral loads had become undetectable.",
      "E": "Hardly had the viral loads fallen when doctors stopped giving the patients the experimental drug."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "No sooner ... than = As soon as / Immediately after (-er etmez / anında)",
    "trapWarning": "No sooner ... than = -ir -mez. A ve D sırayı ters çevirir, C anındalığı kaldırır, E ise aynı yapıyı (Hardly ... when) kullanır ama olayların yerini değiştirir.",
    "explanation": "'No sooner had X occurred than Y happened' formülü 'As soon as X, Y happened' (B şıkkı) demektir. İlaç verilir verilmez virüs yükü tespit edilemez seviyelere düştü."
  },
  {
    "id": "m_q71",
    "type": "restatement",
    "title": "71. Soru - Anlamca En Yakın Cümle",
    "question": "Given sentence: 'It was not until the decipherment of the Rosetta Stone in the nineteenth century that scholars could systematically comprehend Egyptian hieroglyphic inscriptions.'",
    "options": {
      "A": "Scholars had already understood most hieroglyphs before the Rosetta Stone was deciphered in the nineteenth century.",
      "B": "Only once the Rosetta Stone was deciphered in the nineteenth century could scholars systematically read hieroglyphs.",
      "C": "The Rosetta Stone was deciphered in the nineteenth century, long after scholars had learned to read hieroglyphs.",
      "D": "Scholars could read some hieroglyphs systematically, but the Rosetta Stone was not deciphered until the nineteenth century.",
      "E": "In the nineteenth century, scholars deciphered the Rosetta Stone without being able to understand hieroglyphs."
    },
    "answer": "B",
    "difficulty": "Orta",
    "tacticUsed": "It was not until ... that ... = Only after ... (Ancak ... olduktan sonra)",
    "trapWarning": "It was not until ... that = ancak ... -dıktan sonra. A ve C sırayı ters çevirir, D iki olayı birbirinden koparır, E ise sonucu olumsuzlar.",
    "explanation": "'It was not until X that Y could be understood' = 'Only once X was deciphered could scholars read Y' (B şıkkı)."
  },
  {
    "id": "m_q72",
    "type": "paragraph_completion",
    "title": "72. Soru - Paragraf Tamamlama",
    "question": "For centuries, astronomers debated whether our solar system was unique in harboring planetary bodies. The discovery of the first confirmed exoplanet orbiting a sun-like star in 1995 fundamentally transformed observational astrophysics. [_____] Today, data from Kepler and the James Webb Space Telescope indicates that the Milky Way alone contains more planets than stars, meaning planetary formation is a cosmic inevitability rather than an anomaly.",
    "options": {
      "A": "Later missions and ground-based surveys soon led to thousands of further discoveries.",
      "B": "That planet, however, was a gas giant orbiting far too close to its star to support life.",
      "C": "Before 1995, several astronomers had already claimed to detect planets around other stars.",
      "D": "Even so, most astronomers continued to believe that planets were extremely rare in the galaxy.",
      "E": "Some scientists argue that the search for exoplanets has received too much funding."
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Zaman ve Mantık Akışı: 1995'te ilk ötegezegen keşfi -> Devamında yeni keşif seli (deluge of discoveries) -> Bugün milyarlarca gezegen olduğu bilgisi",
    "trapWarning": "Boşluktan sonra \"Today, ... more planets than stars\" gelir; arada keşiflerin hızla çoğaldığı söylenmelidir. B ve C konuyla ilgili ama akışı kurmaz; D ise sonraki cümleyle çelişir.",
    "explanation": "1995'teki ilk keşiften bugünkü binlerce gezegen verisine geçişi sağlayan mantıksal köprü A şıkkıdır: 'Sonraki görevler ve yer tabanlı taramalar kısa sürede binlerce yeni keşfe yol açtı'."
  },
  {
    "id": "m_q73",
    "type": "paragraph_completion",
    "title": "73. Soru - Paragraf Tamamlama",
    "question": "Sleep is far from a passive state of physiological inactivity; rather, it represents a highly coordinated neurological maintenance cycle. During non-rapid eye movement (NREM) deep sleep, the brain activates the glymphatic system, which flushes out metabolic waste products like amyloid-beta proteins that accumulate during waking hours. [_____] Consequently, chronic sleep deprivation does not merely impair daily cognitive performance; it also exponentially elevates long-term vulnerability to neurodegenerative pathologies like Alzheimer's.",
    "options": {
      "A": "Without this cleaning process, toxic waste slowly damages brain cells.",
      "B": "During REM sleep, by contrast, the brain is most active in processing emotions.",
      "C": "Short naps during the day can partly make up for a lost night of sleep.",
      "D": "The glymphatic system was discovered only about a decade ago in mice.",
      "E": "As a result, people who sleep longer generally perform better at work."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Referans İpucu: 'Without this cleaning process' (Önceki cümledeki glimfatik atık temizleme sistemine atıf)",
    "trapWarning": "Sonraki cümle \"Consequently, chronic sleep deprivation ... Alzheimer\" der; boşlukta temizlik yapılmazsa ne olacağı söylenmelidir. B ve D konu içidir ama zinciri kurmaz; E ise sonucu günlük performansa indirger.",
    "explanation": "Önceki cümledeki 'flushes out metabolic waste products' (metabolik atıkları temizler) eylemine 'Without this cleaning process' (Bu temizlik süreci olmadan...) şeklinde atıfta bulunan ve Alzheimer sonucuna bağlayan A şıkkıdır."
  },
  {
    "id": "m_q74",
    "type": "paragraph_completion",
    "title": "74. Soru - Paragraf Tamamlama",
    "question": "In classical economics, markets were presumed to operate on the foundation of the rational actor model—the assumption that individuals consistently make decisions that optimize their personal economic utility. However, real-world financial behavior repeatedly contradicts this idyllic presumption. [_____] Because human decisions are frequently clouded by fear, herd behavior, and loss aversion, financial markets are perpetually vulnerable to irrational speculative bubbles and catastrophic panics.",
    "options": {
      "A": "Behavioral economists have shown that cognitive biases systematically distort financial judgment.",
      "B": "Some economists still defend the model, arguing that markets correct individual errors over time.",
      "C": "Classical economists such as Adam Smith also stressed the role of moral sentiment in trade.",
      "D": "Financial regulators have therefore introduced stricter rules to prevent speculative bubbles.",
      "E": "Most investors, in fact, make rational decisions when they have access to complete information."
    },
    "answer": "A",
    "difficulty": "Orta",
    "tacticUsed": "Zıtlık Sonrası Açıklama: 'real-world behavior contradicts this presumption' -> Davranışsal iktisatçıların bilişsel önyargı tespiti",
    "trapWarning": "Boşluktan önce \"real-world behavior contradicts this\", sonra \"fear, herd behavior\" gelir. B ve E rasyonel modeli savunarak akışı bozar; D sonucu erken verir; C ise zamanda geriye gider.",
    "explanation": "A şıkkı: 'Davranışsal iktisatçılar bilişsel önyargıların finansal kararları sistematik olarak bozduğunu göstermiştir.' Bu cümle sonraki 'Because human decisions are clouded by fear...' açıklamasına kusursuz bağlanır."
  },
  {
    "id": "m_q75",
    "type": "paragraph_completion",
    "title": "75. Soru - Paragraf Tamamlama",
    "question": "Volcanic eruptions are notorious for their localized destruction, burying surrounding valleys under incandescent pyroclastic flows. Yet, their climactic influence can extend thousands of kilometers beyond the crater rim. When violent eruptions inject immense plumes of sulfur dioxide into the stratosphere, these gases react with moisture to form reflective sulfate aerosols. [_____] As a consequence, historical megavolcanoes have precipitated 'volcanic winters,' causing widespread crop failures and catastrophic societal collapses across entire continents.",
    "options": {
      "A": "These particles reflect sunlight back into space and cool the surface.",
      "B": "These aerosols usually fall back to the ground within a few days of the eruption.",
      "C": "Sulfur dioxide is also released by power plants that burn coal and oil.",
      "D": "Volcanic ash clouds can also damage aircraft engines and disrupt air travel.",
      "E": "These gases also trap heat in the atmosphere, warming the planet for decades."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Referans Zamir Eşleşmesi: 'These particles' = 'sulfate aerosols' + cooling the planet -> Volcanic winter",
    "trapWarning": "Sonraki cümle \"volcanic winters\" der; boşlukta soğumanın mekanizması olmalıdır. B ve E sonuçla çelişir (B etkiyi kısaltır, E ısınma der); C ve D konuyla ilgili ama zinciri kurmaz.",
    "explanation": "Sülfat aerosolleri oluştuktan sonra ne olduğunu açıklayan ve 'As a consequence, precipitated volcanic winters' (Sonuç olarak volkanik kışlar yarattı) cümlesine bağlayan cümle A şıkkıdır: 'Bu partiküller güneş ışığını uzaya geri yansıtır ve yüzeyi soğutur'."
  },
  {
    "id": "m_q76",
    "type": "irrelevant_sentence",
    "title": "76. Soru - Anlam Bütünlüğünü Bozan Cümle",
    "question": "(I) Photosynthesis is arguably the most fundamental biological process on Earth, converting solar photons into chemical energy that fuels nearly all complex life. (II) Over billions of years, cyanobacteria and terrestrial plants produced the oxygen-rich atmosphere that made aerobic cellular respiration possible. (III) Fossil fuel extraction companies have recently expanded offshore drilling into subpolar marine habitats. (IV) Furthermore, by sequestering gigatons of carbon dioxide annually, modern forests and marine phytoplankton act as indispensable planetary climate regulators. (V) Understanding the quantum mechanics of photosynthetic electron transport could also enable scientists to develop radically more efficient artificial solar cells.",
    "options": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "answer": "C",
    "difficulty": "Orta",
    "tacticUsed": "Konu Dışına Çıkma (Akış Bozma): Paragraf fotosentezin biyolojik ve iklimsel önemini anlatırken III. cümle fosil yakıt şirketlerinin petrol aramasından bahseder.",
    "trapWarning": "IV. cümledeki 'Furthermore' II. cümlenin biyolojik faydalarını fotosentezin karbon yutma özelliğine bağlar; aradaki III. cümle akışı tamamen bozar.",
    "explanation": "Paragraf fotosentezin yaşam ve iklim için vazgeçilmezliğini anlatmaktadır. III numaralı cümle ise konuyla ilgisiz olarak petrol şirketlerinin kuyu açmasından bahsetmektedir (C şıkkı)."
  },
  {
    "id": "m_q77",
    "type": "irrelevant_sentence",
    "title": "77. Soru - Anlam Bütünlüğünü Bozan Cümle",
    "question": "(I) Antibiotic resistance has emerged as one of the gravest existential threats confronting modern healthcare. (II) Decades of overprescribing antibiotics for viral illnesses and their widespread usage in livestock farming have accelerated bacterial evolution. (III) Many multinational pharmaceutical companies have largely abandoned antibiotic research and development because acute treatments yield lower profits than chronic therapies. (IV) Penicillin was serendipitously discovered by Alexander Fleming when mold contaminated his laboratory Petri dishes in 1928. (V) Consequently, common bacterial infections that were easily treatable for generations are once again becoming potentially lethal.",
    "options": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "answer": "D",
    "difficulty": "Orta",
    "tacticUsed": "Tarihsel Ayrıntı / Konu Dışı Eleme: Metin antibiyotik direnci krizini ve şirketlerin ilaç üretmemesini anlatırken IV. cümle Fleming'in 1928'deki küf keşfi detayına sapmaktadır.",
    "trapWarning": "III. cümle krizin ekonomik boyutudur; V. cümle 'Consequently' ile I ve II'deki direnç krizinin ölümcül sonucuna bağlar. IV. cümle akışı böler.",
    "explanation": "Metin direnç krizini ve ilaç eksikliğini işler. IV numaralı cümle ise 1928'deki penisilin keşfi tarihçesine sıçrayarak akışı bozmaktadır (D şıkkı)."
  },
  {
    "id": "m_q78",
    "type": "irrelevant_sentence",
    "title": "78. Soru - Anlam Bütünlüğünü Bozan Cümle",
    "question": "(I) The Renaissance was characterized by an extraordinary intellectual rebirth, marked by a profound rediscovery of classical Greek and Roman philosophy. (II) Scholars like Petrarch and Erasmus championed humanism, placing human dignity, reason, and empirical observation at the center of intellectual life. (III) This philosophical shift eroded the unquestioned scholastic authority of medieval theological dogmas. (IV) Furthermore, breakthroughs in perspective and anatomical realism revolutionized painting and sculpture across Italy. (V) Medieval agricultural serfs typically worked eighteen hours a day in communal rye fields under feudal obligations.",
    "options": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "answer": "E",
    "difficulty": "Orta",
    "tacticUsed": "Özne ve Tema Kopukluğu: Rönesans'ın hümanist, felsefi ve sanatsal aydınlanması anlatılırken V. cümle Ortaçağ serflerinin çavdar tarlasında 18 saat çalışmasından bahseder.",
    "trapWarning": "I, II, III ve IV Rönesans felsefe ve sanatını birbiri ardına bağlar. V. cümle feodal tarım zorluğudur.",
    "explanation": "V numaralı cümle Ortaçağ serflerinin tarlalardaki çalışma koşullarını anlatarak Rönesans entelektüel devrimi konusunun dışına çıkmaktadır (E şıkkı)."
  },
  {
    "id": "m_q79",
    "type": "irrelevant_sentence",
    "title": "79. Soru - Anlam Bütünlüğünü Bozan Cümle",
    "question": "(I) Plastic pollution in the marine environment has reached crisis proportions, with microplastics now detected in the deepest ocean trenches and polar ice sheets. (II) Many seabirds and marine mammals ingest plastic debris, mistaking colorful floating fragments for prey. (III) This ingestion causes internal physical blockages, false feelings of satiation, and eventual starvation. (IV) The invention of synthetic bakelite in the early twentieth century laid the groundwork for the modern consumer polymer industry. (V) Furthermore, toxic industrial chemicals adsorbed onto plastic particles leach into marine tissues, bioaccumulating across oceanic food webs.",
    "options": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "answer": "D",
    "difficulty": "Orta",
    "tacticUsed": "Tarihsel Sanayi Detayı: Paragraf plastik atıkların deniz hayvanlarını nasıl zehirleyip aç bıraktığını anlatırken IV. cümle Bakalit plastiğin icadından bahseder.",
    "trapWarning": "III. cümle II'deki yutmanın sonucudur; V. cümle 'Furthermore' ile zehirlenmenin devamıdır. IV. cümle araya giren ilgisiz sanayi tarihidir.",
    "explanation": "IV numaralı cümle yirminci yüzyılda bakalitin icadını anlatarak plastiklerin deniz canlılarına verdiği zarar temasından kopmaktadır (D şıkkı)."
  },
  {
    "id": "m_q80",
    "type": "irrelevant_sentence",
    "title": "80. Soru - Anlam Bütünlüğünü Bozan Cümle",
    "question": "(I) The James Webb Space Telescope (JWST) was engineered to peer back into the infancy of the cosmos, observing the very first stars and galaxies formed after the Big Bang. (II) Operating in the infrared spectrum, its colossal golden primary mirror can pierce through dense cosmic dust clouds that obscure optical telescopes. (III) Ground-based optical observatories located in the Atacama Desert in Chile frequently host stargazing tours for international backpackers. (IV) Its observations have already challenged existing cosmological models by uncovering massive, fully formed galaxies that existed far earlier than theorists thought possible. (V) Additionally, its high-resolution spectrometers are currently analyzing the atmospheric chemical signatures of distant exoplanets to detect potential biosignatures.",
    "options": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "answer": "C",
    "difficulty": "Orta",
    "tacticUsed": "Bağlam Dışı Turizm Detayı: Paragraf James Webb Uzay Teleskobu'nun kızılötesi teknolojisi ve evrenin ilk galaksilerini keşfini anlatırken III. cümle Şili'deki sırt çantalı turist turlarından bahseder.",
    "trapWarning": "I, II, IV ve V. cümlelerin tümü JWST'nin bilimsel misyonlarıdır (infrared, galaxy discovery, atmospheric analysis). III. cümle yer teleskobu turizmidir.",
    "explanation": "III numaralı cümle Atacama çölündeki amatör turist turlarından bahsederek James Webb Teleskobu'nun derin uzay kozmoloji misyonunu bozan alakasız cümledir (C şıkkı)."
  }
];

// Options are reordered per question so the answer key is not concentrated in A.
export const YDS_FULL_MOCK_EXAM_1: YdsQuestion[] = shuffleQuestionList(RAW_YDS_FULL_MOCK_EXAM_1);
