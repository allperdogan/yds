import { YdsQuestion } from '../types';
import { shuffleQuestionList } from '../services/optionShuffle';

const RAW_YDS_FULL_MOCK_EXAM_2: YdsQuestion[] = [
  // =========================================================================
  // 1 - 6: KELİME BİLGİSİ (VOCABULARY)
  // =========================================================================
  {
    id: 'm2_q1',
    type: 'vocabulary',
    title: '1. Soru - İsim (Noun)',
    question: 'The unprecedented _____ of carbon dioxide in the upper stratosphere continues to accelerate the destabilization of global atmospheric circulation patterns.',
    options: {
      A: 'accumulation',
      B: 'deprivation',
      C: 'alleviation',
      D: 'discrepancy',
      E: 'demolition'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Akademik Bağlam & Çevre Terminolojisi: Karbondioksit birikimi',
    trapWarning: 'C şıkkındaki alleviation (hafifletme) ve B şıkkındaki deprivation (yoksunluk) anlamsal olarak atmosferik birikim bağlamıyla çelişir.',
    explanation: 'Accumulation: birikme, toplanma, yığılma. "accumulation of greenhouse gases / carbon dioxide" çevre metinlerinin vazgeçilmez kalıbıdır.'
  },
  {
    id: 'm2_q2',
    type: 'vocabulary',
    title: '2. Soru - Sıfat (Adjective)',
    question: 'Sub-Saharan aquifers remain highly _____ to industrial chemical contamination due to permeable porous sandstone geological formations.',
    options: {
      A: 'impervious',
      B: 'susceptible',
      C: 'indifferent',
      D: 'conducive',
      E: 'superfluous'
    },
    answer: 'B',
    difficulty: 'İleri',
    tacticUsed: 'Edat Eşdizimliliği (Collocation): Susceptible TO (-e duyarlı/kırılgan)',
    trapWarning: 'Impervious (geçirmez/etkilenmez) zıt anlamlıdır ve to edatı alsa da cümlenin tehlike bildiren anlamıyla uyuşmaz.',
    explanation: 'Susceptible to: -e karşı duyarlı, savunmasız, açık. Permeable (geçirgen) kumtaşları kirlenmeye karşı savunmasız kalır.'
  },
  {
    id: 'm2_q3',
    type: 'vocabulary',
    title: '3. Soru - Zarf (Adverb)',
    question: 'The new quantum cryptographic protocol has _____ eliminated potential eavesdropping vulnerabilities across optical fiber networks.',
    options: {
      A: 'substantially',
      B: 'tentatively',
      C: 'scarcely',
      D: 'negligibly',
      E: 'redundantly'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Fiili Derecelendiren Zarf Analizi (eliminate fiilini niteleyen güçlü zarf)',
    trapWarning: 'Tentatively (geçici olarak) ve negligibly (önemsiz derecede) başarıyı küçümser, teknolojik ilerleme bağlamına uymaz.',
    explanation: 'Substantially: büyük ölçüde, önemli derecede. Kriptografi güvenlik açıklarını büyük ölçüde ortadan kaldırmıştır (substantially eliminated).'
  },
  {
    id: 'm2_q4',
    type: 'vocabulary',
    title: '4. Soru - Fiil (Verb)',
    question: 'International humanitarian treaties expressly _____ the deployment of autonomous weapon systems targeting civilian infrastructure during hostilities.',
    options: {
      A: 'prohibit',
      B: 'facilitate',
      C: 'endorse',
      D: 'stimulate',
      E: 'accommodate'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Uluslararası Hukuk Terminolojisi: Yasaklamak',
    trapWarning: 'Endorse (onaylamak) ve facilitate (kolaylaştırmak) insancıl hukukun sivilleri koruma amacıyla taban tabana zıttır.',
    explanation: 'Prohibit: yasaklamak, men etmek. İnsani antlaşmalar sivilleri hedef alan otonom silahları açıkça yasaklar (expressly prohibit).'
  },
  {
    id: 'm2_q5',
    type: 'vocabulary',
    title: '5. Soru - Phrasal Verb',
    question: 'Marine conservation agencies have _____ an ambitious five-year program to eradicate invasive lionfish populations from Caribbean coral reefs.',
    options: {
      A: 'set up',
      B: 'called off',
      C: 'backed out of',
      D: 'given up',
      E: 'worn out'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Collocation: Program / Sistem Başlatmak & Kurmak',
    trapWarning: 'Called off (iptal etti) veya backed out of (caydı) gibi negatif edat öbekleri projenin başlatılması bağlamıyla çelişir.',
    explanation: 'Set up: kurmak, organize etmek, başlatmak. "set up a program/initiative" YDS\'nin standart phrasal verb kullanımıdır.'
  },
  {
    id: 'm2_q6',
    type: 'vocabulary',
    title: '6. Soru - Phrasal Verb',
    question: 'Epidemiologists warned that unless sanitation protocols are strictly enforced, the crowded refugee settlements could _____ devastating cholera outbreaks.',
    options: {
      A: 'give rise to',
      B: 'do away with',
      C: 'make up for',
      D: 'come down with',
      E: 'put up with'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Sebep-Sonuç Phrasal Verb: Yol Açmak / Neden Olmak',
    trapWarning: 'D şıkkındaki come down with (hastalığa yakalanmak) birey için kullanılır; yerleşim yerinin kendisi salgına "yol açar" (give rise to).',
    explanation: 'Give rise to: sebep olmak, yol açmak, doğurmak (= lead to, trigger, cause). Yetersiz hijyen kolera salgınlarına yol açabilir.'
  },

  // =========================================================================
  // 7 - 16: DİLBİLGİSİ & EDAT (GRAMMAR & PREPOSITIONS)
  // =========================================================================
  {
    id: 'm2_q7',
    type: 'grammar',
    title: '7. Soru - Zamanlar (Tenses)',
    question: 'Since deep-ocean submersibles first _____ the hydrothermal vents in the late 1970s, marine microbiologists _____ over five hundred previously unrecorded chemosynthetic taxa.',
    options: {
      A: 'surveyed / have classified',
      B: 'have surveyed / classified',
      C: 'had surveyed / are classifying',
      D: 'were surveying / classify',
      E: 'surveyed / will classify'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Since + Past Simple (V2), Present Perfect (Have/Has V3)',
    trapWarning: 'Since yanındaki cümleye Present Perfect gelmez! "in the late 1970s" kesin geçmiş zaman işaretidir.',
    explanation: 'Since + V2 (surveyed), Present Perfect (have classified). Denizaltılar 1970\'lerde bacaları incelediğinden beri biyologlar 500\'den fazla tür sınıflandırmıştır.'
  },
  {
    id: 'm2_q8',
    type: 'grammar',
    title: '8. Soru - Zaman & Modal Uyumu',
    question: 'By the time interplanetary robotic probes _____ Mars\'s south pole in the early 2030s, autonomous ground rovers _____ subterranean ice core extractions for months.',
    options: {
      A: 'reach / will have been conducting',
      B: 'reached / were conducting',
      C: 'will reach / conduct',
      D: 'have reached / conducted',
      E: 'had reached / will conduct'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'By the time + Present -> Future Perfect Continuous (Will have been V-ing)',
    trapWarning: 'By the time içine "will reach" GELMEZ! C şıkkı bu nedenle anında elenir.',
    explanation: 'By the time + Present (reach), Future Perfect (will have been conducting). Problar 2030\'ların başında Mars\'a ulaştığında, gezginler aylardır sondaj yapıyor olacaklar.'
  },
  {
    id: 'm2_q9',
    type: 'grammar',
    title: '9. Soru - Kısaltmalar (Participle Reduction)',
    question: '_____ by extreme atmospheric friction upon re-entering Earth’s dense ionosphere, the lunar sample capsule was safely recovered from the Pacific Ocean.',
    options: {
      A: 'Scorched',
      B: 'Scorching',
      C: 'Having scorched',
      D: 'To scorch',
      E: 'To be scorched'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Pasif Kısaltma (V3) & "By" İpucu',
    trapWarning: 'Kapsül sürtünmeyi kendisi kavurmadı, sürtünme tarafından kavruldu (scorched by friction). Pasif kısaltma şarttır.',
    explanation: 'Scorched: kavrulmuş/yanmış olarak. Virgülden sonraki özne olan "the capsule" eyleme maruz kaldığından V3 pasif kısaltması (Scorched) doğrudur.'
  },
  {
    id: 'm2_q10',
    type: 'grammar',
    title: '10. Soru - Zıtlık Bağlacı (Conjunction)',
    question: '_____ agricultural scientists have developed drought-tolerant maize strains, total cereal yields have dropped precipitously due to prolonged regional heat stress.',
    options: {
      A: 'Even though',
      B: 'Because',
      C: 'In order that',
      D: 'Just as',
      E: 'As long as'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Artı (+) / Eksi (-) Zıtlık Analizi: Geliştirilmesine Rağmen Verimin Düşmesi',
    trapWarning: 'İlk cümle pozitif (+ dayanıklı mısır geliştirildi), ikinci cümle negatif (- verim düştü). Bu dengeyi sadece zıtlık bağlacı kurar.',
    explanation: 'Even though: -e rağmen, her ne kadar ... ise de. Bilim insanları kurağa dayanıklı tohumlar geliştirmelerine rağmen verim düşmüştür.'
  },
  {
    id: 'm2_q11',
    type: 'grammar',
    title: '11. Soru - Sebep / Önlem Bağlacı',
    question: 'Spacecraft engineers insulated sensitive scientific payloads with aerogel blankets _____ sudden temperature fluctuations in deep orbit damage the electronic circuits.',
    options: {
      A: 'lest',
      B: 'provided that',
      C: 'as though',
      D: 'whereas',
      E: 'while'
    },
    answer: 'A',
    difficulty: 'YDS Master',
    tacticUsed: 'Lest / For fear that = -mesin diye / korkusuyla (Lest + S + Verb yalın/should)',
    trapWarning: 'Lest bağlacı kendi içinde olumsuzluk taşır ("damage the circuits" olumlu görünür ama "devrelere zarar vermesin diye" anlamı taşır).',
    explanation: 'Lest: -mesin diye, -mesi tehlikesine karşı (= in case, for fear that). Mühendisler devreler zarar görmesin diye yalıtım battaniyeleri yerleştirdiler.'
  },
  {
    id: 'm2_q12',
    type: 'grammar',
    title: '12. Soru - Çift Bağlaç (Correlative Conjunction)',
    question: 'The newly discovered medieval manuscript was important _____ for its literary merit _____ for the unprecedented demographic census data inscribed on its margins.',
    options: {
      A: 'not only / but also',
      B: 'neither / or',
      C: 'whether / and',
      D: 'so / that',
      E: 'both / or'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Not only X but also Y (Yalnızca X değil aynı zamanda Y)',
    trapWarning: 'B şıkkında neither ... nor olması gerekirdi; or ile eşleşemez. E şıkkında both ... and olması gerekirdi.',
    explanation: 'Not only ... but also: sadece edebi değeri için değil aynı zamanda demografik veriler içerdiği için de önemlidir.'
  },
  {
    id: 'm2_q13',
    type: 'grammar',
    title: '13. Soru - Edat (Preposition)',
    question: 'The international diplomatic delegation arrived _____ Geneva to participate _____ the multilateral negotiations on global plastic treaties.',
    options: {
      A: 'in / in',
      B: 'at / on',
      C: 'to / with',
      D: 'into / about',
      E: 'for / by'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Arrive IN a city + Participate IN an event',
    trapWarning: 'İngilizcede büyük şehirlere ve ülkelere varış "arrive IN" ile ifade edilir (arrive to denmez!). Participate ise daima "IN" alır.',
    explanation: 'Arrive IN Geneva (Cenevre\'ye varmak) ve participate IN negotiations (müzakerelere katılmak). Her iki boşluk da "in" gerektirir.'
  },
  {
    id: 'm2_q14',
    type: 'grammar',
    title: '14. Soru - Edat (Preposition)',
    question: 'Archaeological excavations conducted _____ the Nile Delta yielded ancient papyrus fragments dating _____ the third century BCE.',
    options: {
      A: 'throughout / back to',
      B: 'across / by',
      C: 'around / from',
      D: 'within / over',
      E: 'along / until'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Date BACK TO (Tarihine Dayanmak) Sabit Kalıbı',
    trapWarning: 'Tarihlendirme fiilleri (date back to / trace back to) daima TO edatıyla bağlanır.',
    explanation: 'Throughout the Delta (Delta genelinde) ve dating back to the third century BCE (MÖ 3. yüzyıla kadar uzanan). Doğru cevap A.'
  },
  {
    id: 'm2_q15',
    type: 'grammar',
    title: '15. Soru - İlgi Cümleciği (Relative Clause)',
    question: 'Neuroscientists have mapped the prefrontal cortical pathways _____ regulate executive impulse control and strategic decision-making in primates.',
    options: {
      A: 'that',
      B: 'where',
      C: 'whom',
      D: 'whose',
      E: 'what'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Nesne/Kavram Niteleyen Subject Relative Pronoun: THAT/WHICH',
    trapWarning: 'Boşluktan sonra "regulate" fiili gelmektedir. Fiilden önce özne görevinde sadece "which" veya "that" gelebilir. Where yer zarfıdır ve tam cümle ister.',
    explanation: 'That regulate: yolları (pathways) niteleyen ve cümlenin öznesi olan relative zamir "that"tir. Doğru cevap A.'
  },
  {
    id: 'm2_q16',
    type: 'grammar',
    title: '16. Soru - Devrik Cümle / Modal',
    question: '_____ the emergency containment cooling systems failed during the seismic tremor, the reactor core would have suffered a catastrophic nuclear meltdown.',
    options: {
      A: 'Had',
      B: 'Were',
      C: 'Should',
      D: 'If only',
      E: 'Unless'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Type 3 Devrik Koşul: Had + S + V3 (Eğer başarısız olsaydı)',
    trapWarning: 'Ana cümledeki "would have suffered" geçmiş hipotez (Type 3) göstergesidir. Type 3 devriği sadece "Had" ile yapılır.',
    explanation: 'Had the systems failed = If the systems had failed. Soğutma sistemleri iflas etseydi, reaktör erirdi. Doğru cevap A.'
  },

  // =========================================================================
  // 17 - 26: CLOZE TEST (2 METİN x 5 SORU)
  // =========================================================================
  {
    id: 'm2_q17',
    type: 'cloze',
    title: '17. Soru - Cloze Test 1 (Biyolojik Çeşitlilik)',
    passage: 'Deep-sea hydrothermal vents represent some of the most extreme ecological niches on Earth. Located along tectonic boundaries, these geothermal chimneys spew mineral-rich fluids exceeding 400°C. (17)_____ sunlight cannot penetrate these abyssal depths, photosynthetic organisms are entirely absent. Instead, chemosynthetic bacteria oxidize toxic hydrogen sulfide, (18)_____ the nutritional bedrock for gigantic tube worms, blind shrimp, and ghost crabs. The discovery of these ecosystems in 1977 radically (19)_____ our understanding of the parameters of life. Astrobiologists now hypothesize that similar geothermal activity could sustain extraterrestrial biospheres beneath the frozen oceanic crusts of Jupiter’s moon Europa. (20)_____, ongoing deep-sea seabed mining initiatives pose an imminent threat (21)_____ these fragile benthic sanctuaries.',
    question: 'Metindeki (17) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'Because',
      B: 'Although',
      C: 'Unless',
      D: 'Even if',
      E: 'Whereas'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Sebep-Sonuç İlişkisi (Güneş ışığı ulaşamadığı için fotosentez yoktur)',
    trapWarning: 'Güneş ışığının ulaşamaması fotosentezin olmamasının doğrudan sebebidir.',
    explanation: 'Because: çünkü / -dığı için. Güneş ışığı bu derinliklere nüfuz edemediği için (Because sunlight cannot penetrate), fotosentetik organizmalar yoktur.'
  },
  {
    id: 'm2_q18',
    type: 'cloze',
    title: '18. Soru - Cloze Test 1',
    question: 'Metindeki (18) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'providing',
      B: 'provided',
      C: 'to have provided',
      D: 'having been provided',
      E: 'to provide'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Virgül Sonrası Aktif Sonuç Kısaltması: , providing (sağlayarak)',
    trapWarning: 'Virgülden sonra gelen kısaltma bir önceki eylemin sonucunu aktif biçimde anlatırken V-ing (providing) alır.',
    explanation: 'Providing: bakteriler sülfiti oksitler, böylece besin tabanını sağlar (providing the nutritional bedrock). Doğru cevap A.'
  },
  {
    id: 'm2_q19',
    type: 'cloze',
    title: '19. Soru - Cloze Test 1',
    question: 'Metindeki (19) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'transformed',
      B: 'had transformed',
      C: 'has transformed',
      D: 'transforms',
      E: 'is transforming'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Geçmiş Zaman Belirteci: in 1977 -> Simple Past (V2)',
    trapWarning: 'Cümledeki "in 1977" geçmişte net bir tarihi gösterir; dolayısıyla Present Perfect veya Past Perfect değil, V2 (transformed) gerekir.',
    explanation: '1977 yılında keşif anlayışımızı kökten değiştirdi (radically transformed). Doğru cevap A.'
  },
  {
    id: 'm2_q20',
    type: 'cloze',
    title: '20. Soru - Cloze Test 1',
    question: 'Metindeki (20) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'However',
      B: 'Consequently',
      C: 'Therefore',
      D: 'In addition',
      E: 'Likewise'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Cümle Başı Zıtlık Geçişi (Büyüleyici ekosistem vs Madencilik tehdidi)',
    trapWarning: 'Önceki cümleler sistemin bilimsel değerini anlatırken bu cümle madencilik tehlikesine geçer.',
    explanation: 'However: ancak, ne var ki. Bilimsel heyecanın ardından gelen tehdidi zıtlıkla bağlar. Doğru cevap A.'
  },
  {
    id: 'm2_q21',
    type: 'cloze',
    title: '21. Soru - Cloze Test 1',
    question: 'Metindeki (21) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'to',
      B: 'from',
      C: 'with',
      D: 'by',
      E: 'for'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Collocation: Threat TO something (-e yönelik tehdit)',
    trapWarning: 'Threat kelimesi yöneleceği hedef için istisnasız "to" edatını alır.',
    explanation: 'Threat to: -e yönelik tehdit. "pose an imminent threat to these fragile sanctuaries". Doğru cevap A.'
  },
  {
    id: 'm2_q22',
    type: 'cloze',
    title: '22. Soru - Cloze Test 2 (Yapay Zeka ve Dil)',
    passage: 'Natural Language Processing (NLP) has advanced at a dizzying pace over the past decade. Modern large language models generate fluent prose that is often (22)_____ from human writing. Researchers have achieved this performance (23)_____ feeding neural networks billions of parameters harvested from digital archives. However, computer scientists warn that fluency should not be confused (24)_____ genuine cognitive comprehension. These statistical models essentially predict probable word sequences (25)_____ having an authentic understanding of truth. (26)_____ we establish rigorous verification benchmarks, unverified synthetic text could pollute academic literature.',
    question: 'Metindeki (22) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'indistinguishable',
      B: 'vulnerable',
      C: 'negligible',
      D: 'incompatible',
      E: 'superficial'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Collocation: Indistinguishable FROM (Ayırt Edilemez)',
    trapWarning: 'Indistinguishable from (-den ayırt edilemez) sıfatı kalıp edatı "from" ile kullanılır.',
    explanation: 'Indistinguishable: insan yazısından ayırt edilemeyen akıcı metinler üretir. Doğru cevap A.'
  },
  {
    id: 'm2_q23',
    type: 'cloze',
    title: '23. Soru - Cloze Test 2',
    question: 'Metindeki (23) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'by',
      B: 'with',
      C: 'from',
      D: 'under',
      E: 'at'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Yöntem / Vasıta: By + V-ing (-erek / -arak)',
    trapWarning: 'Bir hedefe nasıl ulaşıldığı (yöntem) anlatılırken "by feeding" (besleyerek) kullanılır.',
    explanation: 'By + V-ing: besleyerek başardılar. Vasıta bildiren edat "by"dır. Doğru cevap A.'
  },
  {
    id: 'm2_q24',
    type: 'cloze',
    title: '24. Soru - Cloze Test 2',
    question: 'Metindeki (24) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'with',
      B: 'to',
      C: 'for',
      D: 'about',
      E: 'in'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Collocation: Confuse X WITH Y (X\'i Y ile karıştırmak)',
    trapWarning: 'Confuse fiili karıştırılan ikinci unsurla daima "with" alır.',
    explanation: 'Confused with: akıcılık gerçek bilişsel anlama ile karıştırılmamalıdır (confused with comprehension). Doğru cevap A.'
  },
  {
    id: 'm2_q25',
    type: 'cloze',
    title: '25. Soru - Cloze Test 2',
    question: 'Metindeki (25) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'without',
      B: 'by',
      C: 'through',
      D: 'besides',
      E: 'along with'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Yoksunluk Bildiren Edat: Without + V-ing (-meksizin / olmadan)',
    trapWarning: 'Model sadece kelime tahmin eder; gerçek bir anlayışa sahip OLMADAN (without having).',
    explanation: 'Without: olmaksızın. Gerçek bir kavrayışa sahip olmadan sadece istatistiksel tahmin yapar. Doğru cevap A.'
  },
  {
    id: 'm2_q26',
    type: 'cloze',
    title: '26. Soru - Cloze Test 2',
    question: 'Metindeki (26) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'Unless',
      B: 'Although',
      C: 'Because',
      D: 'In case',
      E: 'As long as'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Unless = If not (Biz sıkı doğrulama standartları koymadıkça...)',
    trapWarning: 'İkinci cümle olası bir felaketi anlatır (sentetik metinler literatürü kirletecektir); koşul "önlem alınmadıkça"dır.',
    explanation: 'Unless: -medikçe, eğer olmazsa. Standartlar koyulmadıkça literatür kirlenecektir. Doğru cevap A.'
  },

  // =========================================================================
  // 27 - 36: CÜMLE TAMAMLAMA (SENTENCE COMPLETION)
  // =========================================================================
  {
    id: 'm2_q27',
    type: 'sentence_completion',
    title: '27. Soru - Cümle Tamamlama',
    question: 'Although early hunter-gatherers lacked formal agricultural knowledge, _____.',
    options: {
      A: 'they developed sophisticated seasonal strategies to harvest wild cereals across diverse terrains',
      B: 'they consequently remained almost entirely dependent on hunting large migratory animals',
      C: 'their diets therefore lacked the cultivated grains that later farming villages produced in abundance',
      D: 'they had no reliable means of storing surplus food through long and unpredictable winters',
      E: 'they were unable to establish the permanent settlements that agriculture would later allow'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Zıtlık & Özne-Yüklem Mantığı: Tarım bilgileri yoktu (-) -> Gelişmiş stratejiler ürettiler (+)',
    trapWarning: 'Bütün şıklar dil bilgisi olarak cümleye oturur. B, C, D ve E ise tarım bilgisinin eksikliğiyle aynı yönde (-) devam eder; Although ise zıt yönde (+) bir sonuç ister.',
    explanation: 'Although (tarım bilgileri olmamasına rağmen) zıtlığı karşılayan ana cümle pozitif bir beceri sunmalıdır: "yabani tahılları toplamak için gelişmiş stratejiler ürettiler" (A şıkkı).'
  },
  {
    id: 'm2_q28',
    type: 'sentence_completion',
    title: '28. Soru - Cümle Tamamlama',
    question: '_____, neuroscientists have established that adult brains retain remarkable neuroplasticity throughout life.',
    options: {
      A: 'Contrary to the long-held dogma that neuronal regeneration ceases after adolescence',
      B: 'In line with the long-held dogma that the adult brain becomes structurally fixed after adolescence',
      C: 'Despite growing evidence that new neural connections continue to form throughout adulthood',
      D: 'Owing to the widespread belief that cognitive capacity inevitably declines with advancing age',
      E: 'Just as earlier physicians had insisted that brain cells never regenerate during adulthood'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Contrary to (Aksine) Zıtlık Yapısı: Ergenlikten sonra durduğu inancının aksine...',
    trapWarning: 'In line with ve Just as benzerlik kurar ama ana cümle eski inancı çürütür. Despite yanlış yönde zıtlık kurar: plastisiteyi destekleyen kanıta rağmen değil, onun sayesinde bu sonuca varılır.',
    explanation: 'Contrary to the dogma (nöron yenilenmesinin ergenlikten sonra durduğu dogmasının aksine), yetişkin beyni plastisitesini korur. Doğru cevap A.'
  },
  {
    id: 'm2_q29',
    type: 'sentence_completion',
    title: '29. Soru - Cümle Tamamlama',
    question: 'In order for offshore wind farms to deliver consistent base-load electric power, _____.',
    options: {
      A: 'grid operators must deploy massive utility-scale battery storage facilities to buffer fluctuating wind velocities',
      B: 'wind velocities over open water tend to fluctuate far more sharply than they do over land',
      C: 'several coastal communities have objected to the visual impact of turbines on their seascapes',
      D: 'offshore turbines have generally proved more expensive to maintain than onshore installations',
      E: 'engineers in the 1990s regarded construction in deep coastal waters as technically unfeasible'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'In order for X to do Y (Amacın Gerçekleşmesi İçin Şart Olan Eylem)',
    trapWarning: 'B şıkkı konuyla ilgilidir ama bir gereklilik değil, sorunun kendisidir. In order for X to do Y yapısı, amaca ulaşmak için yapılması gerekeni (must/need to) ister.',
    explanation: 'Rüzgar santrallerinin kesintisiz baz yük sağlayabilmesi için, şebeke işletmecilerinin devasa batarya depolama tesisleri kurması zorunludur (A şıkkı).'
  },
  {
    id: 'm2_q30',
    type: 'sentence_completion',
    title: '30. Soru - Cümle Tamamlama',
    question: 'Whereas conventional silicon photovoltaic panels lose energy conversion efficiency at elevated temperatures, _____.',
    options: {
      A: 'next-generation perovskite solar cells maintain robust electronic performance even under intense desert heat',
      B: 'they remain the most widely installed photovoltaic technology across hot desert regions',
      C: 'their efficiency losses become especially severe during prolonged summer heatwaves',
      D: 'active cooling systems can reduce, but not entirely eliminate, these heat-related losses',
      E: 'next-generation thin-film modules also suffer measurable declines in output under intense heat'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Whereas (Taban Tabana Zıt İki Teknoloji Karşılaştırması)',
    trapWarning: 'Whereas iki farklı şeyi zıt yönde karşılaştırır. E şıkkı ikinci bir teknolojiden bahsetse de "also" ile aynı sorunu tekrarlar; C ve D aynı panellerden bahsetmeye devam eder.',
    explanation: 'Konvansiyonel silikon paneller yüksek sıcaklıkta verim kaybederken (Whereas silicon loses efficiency), yeni nesil perovskite hücreleri çöl sıcağında bile performansını korur (A şıkkı).'
  },
  {
    id: 'm2_q31',
    type: 'sentence_completion',
    title: '31. Soru - Cümle Tamamlama',
    question: 'Epidemiologists initiated comprehensive wastewater surveillance programs across major transit hubs _____',
    options: {
      A: 'so that emerging viral pathogen variants could be detected weeks before clinical hospitalizations spike.',
      B: 'even though wastewater samples can reveal emerging variants long before patients seek medical care.',
      C: 'whereas hospital-based testing remains the most reliable way of identifying new viral variants.',
      D: 'as if clinical hospitalizations had already provided sufficiently early warning of new variants.',
      E: 'so that hospitals would no longer need to test patients who present with respiratory symptoms.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'So that + Could (Amaç Belirteci ve Modal Uyumu)',
    trapWarning: 'E şıkkı da so that ile başlar ama abartılı ve ilgisiz bir amaç verir: atık su takibi hastane testlerini gereksiz kılmaz. B şıkkındaki even though ise sebebi zıtlık gibi sunar.',
    explanation: 'Epidemiyologlar atık su gözetim programları başlattı; BÖYLECE yeni varyantlar önceden tespit edilebilsin (so that ... could be detected). Doğru cevap A.'
  },
  {
    id: 'm2_q32',
    type: 'sentence_completion',
    title: '32. Soru - Cümle Tamamlama',
    question: 'Unless member states urgently ratify legally binding treaties to cap greenhouse emissions, _____.',
    options: {
      A: 'low-lying Pacific atoll nations will suffer irreversible inundation from escalating sea level rise',
      B: 'global average temperatures will stabilise naturally within the next few decades',
      C: 'low-lying Pacific nations will no longer face the threat of rising sea levels',
      D: 'renewable energy has already become cheaper than coal in most major economies',
      E: 'island nations would have been spared the devastating floods of recent decades'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Unless (Eğer yapılmazsa) -> Gelecekteki Kaçınılmaz Tehdit (Will suffer)',
    trapWarning: 'Unless = if not. Antlaşmalar onaylanmazsa olumsuz bir gelecek beklenir; B ve C anlamca terstir. D ve E ise zaman uyumunu bozar (present perfect, would have been).',
    explanation: 'Üye ülkeler emisyonları sınırlandıran antlaşmaları onaylamazsa (Unless states ratify), alçak ada ülkeleri kalıcı olarak sular altında kalacaktır (A şıkkı).'
  },
  {
    id: 'm2_q33',
    type: 'sentence_completion',
    title: '33. Soru - Cümle Tamamlama',
    question: 'Because the gravitational pull of a supermassive black hole is so immense that not even light can escape its event horizon, _____.',
    options: {
      A: 'astrophysicists must observe them indirectly through the electromagnetic radiation emitted by infalling matter',
      B: 'optical telescopes can photograph their interiors directly and with remarkable clarity',
      C: 'astronomers first detected them through the bright visible light radiating from their centres',
      D: 'they emit more visible light than any other type of object in the observable universe',
      E: 'they exert little measurable influence on the orbits of the stars that surround them'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Sebep-Sonuç Mantığı: Işık kaçamadığı için doğrudan görülemez, dolaylı gözlemlenmelidir.',
    trapWarning: 'B, C ve D ışığın kaçamadığı bilgisiyle çelişir; E ise devasa çekim kuvvetiyle çelişir. Sebep cümlesinden mantıklı olarak çıkan tek sonuç dolaylı gözlem zorunluluğudur.',
    explanation: 'Işık bile kaçamadığı için (Because not even light can escape), astrofizikçiler onları içeri düşen maddenin yaydığı ışıma üzerinden DOLAYLI gözlemlemek zorundadır (A şıkkı).'
  },
  {
    id: 'm2_q34',
    type: 'sentence_completion',
    title: '34. Soru - Cümle Tamamlama',
    question: '_____, the trade embargo crippled the island nation’s domestic manufacturing sector within a matter of months.',
    options: {
      A: 'As the country was almost entirely dependent on imported raw materials and industrial machinery',
      B: 'Although the country was almost entirely dependent on imported raw materials and machinery',
      C: 'As the country had built up large domestic reserves of raw materials and spare machinery',
      D: 'Even though the embargo was widely expected to cause severe shortages of industrial inputs',
      E: 'Unless the country had been able to secure alternative suppliers of imported machinery'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Sebep Bağlacı (As = Because): İthal hammaddeye bağımlı olduğu için ambargo felç etti.',
    trapWarning: 'B şıkkı doğru bilgiyi verir ama Although ile zıtlık kurar; oysa ithalata bağımlılık felcin sebebidir. C ise sebebi tersine çevirir: rezervi olan bir ülke ambargodan bu kadar etkilenmez.',
    explanation: 'Ülke neredeyse tamamen ithal hammaddeye bağımlı olduğu için (As the country was dependent on imported materials), ticaret ambargosu üretimi aylarca felç etti (A şıkkı).'
  },
  {
    id: 'm2_q35',
    type: 'sentence_completion',
    title: '35. Soru - Cümle Tamamlama',
    question: 'Much as modern digital algorithms optimize logistics and consumer supply chains with breathtaking speed, _____.',
    options: {
      A: 'they frequently reproduce systemic socio-economic biases present in their historical training datasets',
      B: 'they have also made consumer supply chains considerably faster and more cost-effective',
      C: 'they are now relied upon by almost every major retailer to manage stock and deliveries',
      D: 'their speed has allowed companies to respond quickly to sudden shifts in consumer demand',
      E: 'they rarely make the kinds of errors that human logistics planners routinely commit'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Much as = Although (Her ne kadar optimize etse de [+] -> Önyargıları kopyalar [-])',
    trapWarning: 'Much as = although. Giriş algoritmaları övdüğü (+) için ana cümle bir sorun (-) vermelidir. B, C, D ve E övgüyü sürdürür, zıtlık kurmaz.',
    explanation: 'Algoritmalar tedarik zincirini ne kadar hızlı optimize etse de (Much as algorithms optimize...), geçmiş verilerdeki önyargıları da sıklıkla kopyalarlar (A şıkkı).'
  },
  {
    id: 'm2_q36',
    type: 'sentence_completion',
    title: '36. Soru - Cümle Tamamlama',
    question: 'Ever since archaeologists uncovered the pristine burial chambers of the Bronze Age chieftain in the early 2000s, _____.',
    options: {
      A: 'historians have been revising their assumptions regarding metallurgical trade networks in prehistoric Europe',
      B: 'historians revised their assumptions about metallurgical trade in prehistoric Europe',
      C: 'historians will need to reconsider how metal goods were traded across prehistoric Europe',
      D: 'historians had long believed that the tribe of the chieftain was isolated from regional trade',
      E: 'historians are revising their view of when the burial chambers were originally constructed'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Ever since + V2 -> Present Perfect (Have been revising)',
    trapWarning: 'Bütün şıklar anlamca makuldür; soru zaman uyumunu ölçer. Ever since + geçmiş zaman, ana cümlede present perfect (have been revising) ister. B, C, D ve E bu kuralı bozar.',
    explanation: 'Mezar odaları 2000\'lerin başında keşfedildiğinden beri (Ever since uncovered), tarihçiler maden ticareti ağlarına dair kabullerini revize etmektedirler (A şıkkı).'
  },

  // =========================================================================
  // 37 - 42: ÇEVİRİ SORULARI (TRANSLATION: 3 EN-TR, 3 TR-EN)
  // =========================================================================
  {
    id: 'm2_q37',
    type: 'translation_en_tr',
    title: '37. Soru - İngilizce-Türkçe Çeviri',
    question: 'Glaciologists warn that the accelerated melting of the Thwaites Glacier in West Antarctica could trigger an irreversible cascade that raises global sea levels by several meters.',
    options: {
      A: 'Buzulbilimciler, Batı Antarktika\'daki Thwaites Buzulu\'nun hızlanan erimesinin küresel deniz seviyelerini birkaç metre yükselten geri döndürülemez bir zincirleme süreci tetikleyebileceği konusunda uyarıyor.',
      B: 'Batı Antarktika\'daki Thwaites Buzulu\'nun erimesi, buzulbilimcilere göre küresel deniz seviyesini yükseltecek geri dönülmez zincirleme bir reaksiyona yol açmıştır.',
      C: 'Buzulbilimcilerin uyardığı gibi, küresel deniz seviyelerinin birkaç metre yükselmesi Batı Antarktika\'daki Thwaites Buzulu\'nun erimesini tetikleyebilir.',
      D: 'Thwaites Buzulu\'nun Batı Antarktika\'da hızla erimesi, buzulbilimcilerin uyardığı üzere deniz seviyesinde birkaç metrelik geri dönüşsüz artışa sebep olacaktır.',
      E: 'Küresel deniz seviyesini birkaç metre yükseltecek zincirleme felaket, buzulbilimcilerin belirttiği gibi Thwaites Buzulu\'nun erimesiyle tetiklenmektedir.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Ana Yüklem ve Özne Eşleştirme: Glaciologists warn that... (Buzulbilimciler ... konusunda uyarıyor)',
    trapWarning: 'B şıkkında "yol açmıştır" diyerek geçmiş zaman yapılmıştır; oysa metin "could trigger" (tetikleyebilir) modalı kullanır.',
    explanation: 'Özne: "Glaciologists" (Buzulbilimciler), Ana Fiil: "warn that" (uyarıyor), Yan Cümle Yüklemi: "could trigger" (tetikleyebilir). Birebir ve eksiksiz çeviri A şıkkıdır.'
  },
  {
    id: 'm2_q38',
    type: 'translation_en_tr',
    title: '38. Soru - İngilizce-Türkçe Çeviri',
    question: 'Although early European explorers perceived the Amazon basin as an untouched wilderness, recent satellite scans reveal extensive ancient civilizations that reshaped the rainforest.',
    options: {
      A: 'İlk Avrupalı kaşifler Amazon havzasını el değmemiş bir yaban hayatı olarak algılamış olsalar da, son uydu taramaları yağmur ormanını yeniden şekillendiren geniş antik uygarlıkları ortaya koymaktadır.',
      B: 'Son uydu taramaları Amazon yağmur ormanlarını şekillendiren antik uygarlıkları gösterse de Avrupalı kaşifler burayı el değmemiş sanıyordu.',
      C: 'Amazon havzasının el değmemiş bir yaban olduğu inancı, Avrupalı kaşiflerin yanılması ve uydu taramalarının antik uygarlıkları bulmasıyla yıkılmıştır.',
      D: 'İlk Avrupalı kaşiflerin el değmemiş olarak tanımladığı Amazon havzasında, yağmur ormanlarını şekillendirmiş pek çok antik uygarlık uyduyla bulunmuştur.',
      E: 'Geniş antik uygarlıkların Amazon havzasını şekillendirdiğini gösteren uydu taramaları, ilk kaşiflerin iddialarını tamamen yalanlamaktadır.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Although (olsalar da / -e rağmen) Zıtlık Yapısı ve "reveal" Fiili',
    trapWarning: 'B şıkkında zıtlık bağlacı uydu taramalarına kaydırılmıştır; oysa orijinal cümlede Although kaşiflerin algısına bağlıdır.',
    explanation: 'Although explorers perceived... (kaşifler algılamış olsalar da), recent satellite scans reveal... (son uydu taramaları ortaya koymaktadır). Kusursuz karşılık A şıkkıdır.'
  },
  {
    id: 'm2_q39',
    type: 'translation_en_tr',
    title: '39. Soru - İngilizce-Türkçe Çeviri',
    question: 'Neuroimaging studies demonstrate that regular aerobic exercise not only enhances cardiovascular stamina but also stimulates neurogenesis in the hippocampus.',
    options: {
      A: 'Nörogörüntüleme çalışmaları, düzenli aerobik egzersizin yalnızca kardiyovasküler dayanıklılığı artırmakla kalmayıp aynı zamanda hipokampüste nörojenezi uyardığını göstermektedir.',
      B: 'Düzenli aerobik egzersiz yapmak kardiyovasküler dayanıklılığı artırırken hipokampüste de nörojenezi uyarır.',
      C: 'Hipokampüste nörojenezi uyaran aerobik egzersizin kardiyovasküler sistemi güçlendirdiği nörogörüntüleme çalışmalarıyla kanıtlanmıştır.',
      D: 'Nörogörüntüleme çalışmalarına göre aerobik egzersiz dayanıklılık sağladığı için hipokampüsün nörojenez kapasitesini destekler.',
      E: 'Kardiyovasküler dayanıklılık ve hipokampüsteki nörojenez, düzenli egzersiz sayesinde nörogörüntüleme uzmanları tarafından incelenmiştir.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Not only ... but also (Yalnızca ... kalmayıp aynı zamanda...) Kalıp Eşleştirmesi',
    trapWarning: '"not only ... but also" kalıbını birebir veren tek seçenek A şıkkıdır.',
    explanation: 'Ana yüklem "demonstrate that" (göstermektedir), bağlaç "not only ... but also" (yalnızca ... kalmayıp aynı zamanda). Doğru cevap A.'
  },
  {
    id: 'm2_q40',
    type: 'translation_tr_en',
    title: '40. Soru - Türkçe-İngilizce Çeviri',
    question: 'Yapay zekanın tıbbi teşhislerde kullanımı son yıllarda hızla artmış olsa da, nihai kararın her zaman insan hekimler tarafından verilmesi gerektiği savunulmaktadır.',
    options: {
      A: 'Although the use of artificial intelligence in medical diagnostics has rapidly increased in recent years, it is argued that the final decision must always be made by human physicians.',
      B: 'Since artificial intelligence has been widely used in medical diagnosis recently, human physicians must always make the final decision.',
      C: 'The rapid increase in artificial intelligence applications in medicine demonstrates that human physicians should not make the final decision alone.',
      D: 'Even if the final decision is made by human physicians, the adoption of artificial intelligence in diagnostics has grown exponentially.',
      E: 'Because artificial intelligence in medical diagnosis is advancing, medical authorities argue that physicians will lose their decision-making power.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Türkçe "olsa da" = Although / Even though & "it is argued that" (savunulmaktadır)',
    trapWarning: 'B şıkkında "Since" (çünkü) kullanılmıştır; cümlede zıtlık (olsa da) vardır.',
    explanation: 'Artmış olsa da: Although the use has increased. Nihai kararın insan hekimler tarafından verilmesi gerektiği savunulmaktadır: it is argued that the final decision must always be made by human physicians. Doğru cevap A.'
  },
  {
    id: 'm2_q41',
    type: 'translation_tr_en',
    title: '41. Soru - Türkçe-İngilizce Çeviri',
    question: 'Derin deniz madenciliği, kritik mineralleri temin etmek için cazip bir seçenek olarak görünse de, kırılgan deniz ekosistemlerine geri döndürülemez zararlar verebilir.',
    options: {
      A: 'While deep-sea mining appears to be an attractive option to secure critical minerals, it could inflict irreversible damage on fragile marine ecosystems.',
      B: 'Deep-sea mining is an attractive option to obtain minerals because it does not harm fragile marine ecosystems.',
      C: 'Fragile marine ecosystems have been damaged by deep-sea mining, which is why extracting critical minerals has been banned.',
      D: 'Critical minerals can be secured through deep-sea mining, provided that marine ecosystems are protected from irreversible damage.',
      E: 'Although deep-sea mining damages fragile ecosystems, governments consider it the only option for mineral procurement.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'While / Although (görünse de) & "could inflict irreversible damage" (zarar verebilir)',
    trapWarning: 'D şıkkında "provided that" (şartıyla) koşul bağlacı kullanılmıştır; oysa metin zıtlık bildirir.',
    explanation: 'Cazip bir seçenek olarak görünse de: While deep-sea mining appears to be an attractive option... Geri döndürülemez zararlar verebilir: it could inflict irreversible damage. Doğru cevap A.'
  },
  {
    id: 'm2_q42',
    type: 'translation_tr_en',
    title: '42. Soru - Türkçe-İngilizce Çeviri',
    question: 'Gelişmekte olan ülkeler temiz enerji teknolojilerine yatırım yapmadıkça, küresel karbon emisyonlarını hedeflenen seviyelere indirmek imkansız olacaktır.',
    options: {
      A: 'Unless developing countries invest in clean energy technologies, it will be impossible to reduce global carbon emissions to target levels.',
      B: 'If developing nations invest in clean energy technologies, reducing carbon emissions will become significantly easier.',
      C: 'Because developing countries refuse to adopt clean energy, global carbon emissions cannot reach the targeted reduction levels.',
      D: 'Developing countries should invest in renewable technologies so that international emissions targets can be achieved.',
      E: 'Although developing nations are investing in clean energy, global emissions targets remain largely unattainable.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: '"-medikçe / yapmadıkça" = Unless & "it will be impossible" (imkansız olacaktır)',
    trapWarning: 'Türkçedeki "yapmadıkça" şart eki birebir "Unless" bağlacını gerektirir.',
    explanation: 'Yatırım yapmadıkça: Unless developing countries invest... İndirmek imkansız olacaktır: it will be impossible to reduce. Doğru cevap A.'
  },

  // =========================================================================
  // 43 - 62: PARAGRAF SORULARI (5 PARAGRAF x 4 SORU = 20 SORU)
  // =========================================================================
  // PARAGRAF 1: Epigenetik ve Bilişsel Sağlık (43-46)
  {
    id: 'm2_q43',
    type: 'reading',
    title: '43. Soru - Paragraf 1 (Epigenetik)',
    passage: 'For decades, classical genetics posited that an organism’s developmental destiny was rigidly determined by its static DNA sequence. However, the burgeoning discipline of epigenetics has demolished this deterministic paradigm. Epigenetic mechanisms—such as DNA methylation and histone modification—act as molecular switches that regulate gene expression without altering the underlying nucleotide sequence. Environmental stimuli, including chronic emotional stress, nutritional deprivation, and exposure to airborne pollutants, can trigger molecular tags that silence or activate specific genetic loci. Astonishingly, epidemiological research on the Dutch Famine of 1944 revealed that severe prenatal starvation altered metabolic gene markers in fetuses, predisposing them—and their future offspring—to obesity and cardiovascular disorders decades later. This demonstrates that lifestyle choices and ecological exposures can leave enduring biochemical signatures across generations.',
    question: 'According to the passage, the primary distinction between classical genetics and epigenetics is that epigenetics _____',
    options: {
      A: 'demonstrates that gene expression can be influenced by environmental factors without changing DNA sequences.',
      B: 'claims that DNA nucleotide sequences change permanently during an individual’s lifetime.',
      C: 'asserts that environmental pollutants have no measurable impact on biological development.',
      D: 'proves that classical geneticists were entirely correct about rigid biological destiny.',
      E: 'suggests that maternal nutrition has no relevance to fetal metabolic programming.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Paragraf Doğrudan Bilgi Taraması: Epigenetiğin Tanımı',
    trapWarning: 'B şıkkında DNA diziliminin kalıcı değiştiğini söyler; oysa metin "without altering the underlying nucleotide sequence" der.',
    explanation: 'Metne göre epigenetik: "regulate gene expression without altering the underlying nucleotide sequence" (DNA dizilimini değiştirmeden gen ifadesini düzenler). Doğru cevap A.'
  },
  {
    id: 'm2_q44',
    type: 'reading',
    title: '44. Soru - Paragraf 1',
    question: 'The author mentions the Dutch Famine of 1944 in order to illustrate _____',
    options: {
      A: 'how extreme maternal nutritional deprivation can induce transgenerational epigenetic modifications.',
      B: 'why famine relief efforts in 20th-century Europe were logistically inefficient.',
      C: 'that cardiovascular disease is strictly caused by genetic inheritance rather than diet.',
      D: 'the complete failure of modern nutritional sciences during wartime.',
      E: 'how static DNA sequences naturally repair themselves after traumatic starvation.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Örnek Verme Amacı Sorusu (Illustration of transgenerational effects)',
    trapWarning: 'Örnek savaşın lojistiği için değil, anne açlığının sonraki nesillerin gen belirteçlerini değiştirdiğini göstermek için verilmiştir.',
    explanation: 'Yazar Hollanda Kıtlığı örneğini: anne karnındaki açlığın gelecek nesillere bile aktarılan epigenetik izler bıraktığını göstermek için verir. Doğru cevap A.'
  },
  {
    id: 'm2_q45',
    type: 'reading',
    title: '45. Soru - Paragraf 1',
    question: 'It can be inferred from the passage that an individual\'s health outcomes are _____',
    options: {
      A: 'the result of a dynamic interplay between inherited genetic predispositions and environmental exposures.',
      B: 'entirely insulated from emotional stress and ecological contamination.',
      C: 'predetermined at the moment of conception without any possibility of alteration.',
      D: 'governed solely by the nutritional habits of their distant ancestors.',
      E: 'completely unrelated to maternal physical well-being during gestation.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Çıkarım (Inference): Genetik ve Çevrenin Etkileşimi',
    trapWarning: 'C şıkkı eski genetik dogmasını savunur; epigenetik ise gen ve çevre etkileşimini kanıtlar.',
    explanation: 'Paragraftan çıkarılan temel sonuç: sağlık, kalıtsal yatkınlıklar ile çevresel maruziyetlerin dinamik etkileşiminin bir ürünüdür. Doğru cevap A.'
  },
  {
    id: 'm2_q46',
    type: 'reading',
    title: '46. Soru - Paragraf 1',
    question: 'Which of the following would be the most appropriate title for this passage?',
    options: {
      A: 'Beyond the Static Genome: The Epigenetic Revolution',
      B: 'The Nutritional History of the Second World War',
      C: 'Classical Genetics: Why DNA Never Changes',
      D: 'The Dangers of Airborne Industrial Pollutants',
      E: 'Cardiovascular Surgery: Modern Treatment Paradigms'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Ana Fikir / Başlık Tespiti: Statik Genomun Ötesi ve Epigenetik',
    trapWarning: 'B, D ve E şıkları metindeki yan detaylardır, ana konuyu kapsamaz.',
    explanation: 'Metin bütünüyle klasik statik genetik anlayışının epigenetik ile nasıl yıkıldığını anlatmaktadır. En uygun başlık A\'dır.'
  },

  // PARAGRAF 2: Bronz Çağı Çöküşü (47-50)
  {
    id: 'm2_q47',
    type: 'reading',
    title: '47. Soru - Paragraf 2 (Tarih - Bronz Çağı Çöküşü)',
    passage: 'Around 1200 BCE, the sophisticated and interconnected palace civilizations of the Eastern Mediterranean—including the Mycenaeans in Greece, the Hittites in Anatolia, and the New Kingdom of Egypt—suffered a catastrophic unraveling known to historians as the Late Bronze Age Collapse. Within a few tumultuous decades, fortified imperial capitals were incinerated, intricate trade routes carrying tin and copper severed, and entire writing systems, such as Linear B, vanished into historical oblivion. Early twentieth-century historiography attributed this civilizational implosion exclusively to the marauding incursions of mysterious "Sea Peoples." However, contemporary paleoclimatological data derived from speleothems and lake sediment cores tell a far more complex tale. Prolonged megadroughts, combined with soil exhaustion and seismic tremors, triggered widespread famine. This ecological fragility fractured the centralized elite redistribution networks, making the crumbling empires vulnerable to nomadic raids and internal rebellions.',
    question: 'According to the passage, the collapse of the Late Bronze Age civilizations resulted in _____',
    options: {
      A: 'the destruction of fortified urban centers and the loss of complex administrative writing systems.',
      B: 'the immediate transition to advanced democratic institutions throughout Greece.',
      C: 'the complete unification of the Eastern Mediterranean under Egyptian rule.',
      D: 'an unprecedented expansion of maritime trade networks across the Atlantic.',
      E: 'the peaceful relocation of imperial populations to fertile Anatolian valleys.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Paragraf Doğrudan Bilgi Taraması: Çöküşün Sonuçları',
    trapWarning: 'Metinde: "capitals were incinerated... writing systems vanished" doğrudan belirtilmiştir.',
    explanation: 'Çöküşün sonuçları: tahkim edilmiş şehirlerin yakılması ve Linear B gibi yazı sistemlerinin unutulup kaybolmasıdır. Doğru cevap A.'
  },
  {
    id: 'm2_q48',
    type: 'reading',
    title: '48. Soru - Paragraf 2',
    question: 'Modern historians differ from earlier twentieth-century researchers because modern scholars _____',
    options: {
      A: 'incorporate paleoclimatological evidence showing that droughts and environmental stress drove the collapse.',
      B: 'reject the idea that the Hittites or Mycenaeans ever existed in the Mediterranean basin.',
      C: 'believe that the "Sea Peoples" were a peaceful coalition of agricultural traders.',
      D: 'attribute the entire crisis solely to political corruption among Mycenaean kings.',
      E: 'claim that the Bronze Age was a period of primitive cultural isolation.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Eski vs Yeni Görüş Karşılaştırması',
    trapWarning: 'Eski tarihçiler sadece Deniz Kavimlerine bağlarken modern araştırmacılar iklim ve kuraklık verilerini entegre eder.',
    explanation: 'Modern araştırmacılar: paleoklimatolojik verileri (mağara çökelleri ve göl tortulları) kullanarak kuraklık ve kıtlığın rolünü ortaya koymuştur. Doğru cevap A.'
  },
  {
    id: 'm2_q49',
    type: 'reading',
    title: '49. Soru - Paragraf 2',
    question: 'The passage suggests that the political systems of Bronze Age empires were fragile because _____',
    options: {
      A: 'their highly centralized economies depended upon delicate ecological and agricultural stability.',
      B: 'they possessed no defensive military weaponry or fortified city walls.',
      C: 'their rulers refused to trade essential metals like copper and tin with neighbors.',
      D: 'peasant farmers refused to cultivate cereals even during periods of abundant rain.',
      E: 'priests and scribes intentionally destroyed administrative record systems.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Neden-Sonuç Çıkarımı: Merkezi Yönetimin Kırılganlığı',
    trapWarning: 'Metin: "ecological fragility fractured the centralized elite redistribution networks" demektedir.',
    explanation: 'Sistemlerin kırılganlığı: aşırı merkezi yapıların hassas tarımsal ve ekolojik dengeye bağımlı olmasından kaynaklanıyordu. Doğru cevap A.'
  },
  {
    id: 'm2_q50',
    type: 'reading',
    title: '50. Soru - Paragraf 2',
    question: 'The word "severed" in the passage is closest in meaning to _____',
    options: {
      A: 'cut off / disconnected',
      B: 'reconstructed',
      C: 'expanded',
      D: 'subsidized',
      E: 'monopolized'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Kelime Bağlamı Analizi: Severed trade routes (Kopan/kesilen ticaret yolları)',
    trapWarning: 'Sever fiili koparmak, kesmek, ayırmak demektir.',
    explanation: 'Sever: koparmak, kesmek. "trade routes severed" = ticaret yolları kesildi/bağlantısı koptu (cut off / disconnected). Doğru cevap A.'
  },

  // PARAGRAF 3: Derin Uzay Teleskopları ve Kızılötesi Astronomi (51-54)
  {
    id: 'm2_q51',
    type: 'reading',
    title: '51. Soru - Paragraf 3 (Astronomi - JWST)',
    passage: 'Optical space telescopes, such as Hubble, revolutionized our visual appreciation of the universe by capturing high-resolution imagery in the visible and ultraviolet wavelengths. Nevertheless, their observational capabilities are fundamentally constrained when gazing into the most distant and ancient reaches of the cosmos. Because the universe has been continuously expanding since the Big Bang, light emitted by primordial stars thirteen billion years ago has undergone cosmological redshift—its electromagnetic wavelength has stretched from short visible waves into long infrared radiation. Moreover, stellar nurseries are enveloped in opaque cosmic dust clouds that scatter visible light. The James Webb Space Telescope (JWST) circumvented these barriers through its massive gold-coated beryllium mirror and cryogenic mid-infrared instruments. By piercing through obscuring dust, JWST has revealed fully formed massive galaxies that existed merely a few hundred million years after the dawn of time, forcing theoretical cosmologists to revise models of early galaxy evolution.',
    question: 'It is stated in the passage that optical telescopes struggle to observe the earliest stars because _____',
    options: {
      A: 'cosmological expansion has stretched the light from early stars into the infrared spectrum.',
      B: 'primordial stars never emitted any form of electromagnetic radiation.',
      C: 'Hubble’s mirrors were constructed from fragile gold-coated composites.',
      D: 'the Big Bang destroyed all cosmic dust particles billions of years ago.',
      E: 'infrared radiation cannot travel through the vacuum of interstellar space.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Doğrudan Bilgi Taraması: Redshift (Kızıla Kayma)',
    trapWarning: 'Evrenin genişlemesi ışığı uzatarak görünür dalga boyundan kızılötesine kaydırmıştır.',
    explanation: 'Metne göre: "cosmological redshift—its electromagnetic wavelength has stretched into long infrared radiation". Doğru cevap A.'
  },
  {
    id: 'm2_q52',
    type: 'reading',
    title: '52. Soru - Paragraf 3',
    question: 'According to the text, cosmic dust clouds _____',
    options: {
      A: 'absorb and scatter visible light, hiding newborn stars from optical telescopes.',
      B: 'magnify infrared wavelengths, allowing amateur astronomers to observe galaxies.',
      C: 'were completely eliminated by the James Webb Space Telescope’s mirrors.',
      D: 'prevent infrared light from reaching cryogenically cooled orbital spectrometers.',
      E: 'are only located within our own immediate solar neighborhood.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Toz Bulutlarının Etkisi: Görünür ışığı saçarak gizler',
    trapWarning: 'Metin: "stellar nurseries are enveloped in opaque cosmic dust clouds that scatter visible light" der.',
    explanation: 'Kozmik toz bulutları: görünür ışığı saçar ve yıldız doğum yerlerini optik teleskoplardan gizler. Doğru cevap A.'
  },
  {
    id: 'm2_q53',
    type: 'reading',
    title: '53. Soru - Paragraf 3',
    question: 'One major scientific outcome of the observations made by JWST is that _____',
    options: {
      A: 'cosmologists have had to modify existing theoretical models regarding early galaxy formation.',
      B: 'theoretical physicists have entirely abandoned the concept of the expanding universe.',
      C: 'optical telescopes like Hubble have been officially declared scientifically obsolete.',
      D: 'extraterrestrial biological life has been confirmed on dozens of exoplanets.',
      E: 'infrared astronomy has proven to be less accurate than visible-light observations.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Son Cümle Analizi: Bilimsel Sonuç',
    trapWarning: 'B şıkkında Big Bang terk edildi der; oysa sadece erken galaksi oluşum modelleri revize edilmektedir.',
    explanation: 'JWST\'nin sonucu: "forcing theoretical cosmologists to revise models of early galaxy evolution" (kuramcıları erken galaksi evrimi modellerini revize etmeye zorladı). Doğru cevap A.'
  },
  {
    id: 'm2_q54',
    type: 'reading',
    title: '54. Soru - Paragraf 3',
    question: 'The author\'s tone regarding the James Webb Space Telescope can best be described as _____',
    options: {
      A: 'appreciative and informative',
      B: 'skeptical and dismissive',
      C: 'cynical and sarcastic',
      D: 'alarmist and pessimistic',
      E: 'apathetic and indifferent'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Yazarın Tavrı (Author\'s Tone): Takdir edici ve bilgilendirici',
    trapWarning: 'Yazar JWST\'nin engelleri nasıl aştığını ve bilime katkısını tarafsız ve takdirkar bir dille anlatır.',
    explanation: 'Yazar JWST\'nin başarısını ve bilimsel katkılarını nesnel, takdirkar ve bilgilendirici bir tonda sunmaktadır. Doğru cevap A.'
  },

  // PARAGRAF 4: Yapay Zeka ve İşgücü Piyasası (55-58)
  {
    id: 'm2_q55',
    type: 'reading',
    title: '55. Soru - Paragraf 4 (Ekonomi & Teknoloji)',
    passage: 'Throughout the Industrial Revolution, technological mechanization primarily replaced physical labor, substituting steam turbines and automated looms for human muscle power while expanding demand for cognitive and administrative personnel. However, contemporary advancements in generative artificial intelligence and neural algorithms are upending this historical labor pattern. For the first time, automated systems are demonstrating superior competence in tasks once considered the exclusive province of highly educated professionals, including contract synthesis, radiologic image diagnostics, and software programming. Labor economists warn that this shift could induce unprecedented polarization in white-collar employment. While high-tier creative innovators who can orchestrate these algorithms may experience exponential productivity surges, routine intellectual workers face widespread redundancy. Consequently, academic institutions must fundamentally redesign curricula to emphasize interpersonal empathy, critical epistemological reasoning, and multidisciplinary synthesis—cognitive attributes where biological humans still retain an evolutionary edge.',
    question: 'Unlike 19th-century industrial mechanization, modern artificial intelligence _____',
    options: {
      A: 'threatens intellectual and cognitive professional roles rather than merely manual labor.',
      B: 'primarily affects agricultural workers in developing rural economies.',
      C: 'has increased the demand for repetitive manual data entry clerks.',
      D: 'guarantees equal economic compensation across all sectors of the workforce.',
      E: 'requires vast quantities of physical steam power to maintain computational operations.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Tarihsel Karşılaştırma Sorusu: Fiziksel Güç vs Zihinsel Emek',
    trapWarning: 'Sanayi devrimi fiziksel gücün yerini almıştı; yapay zeka ise eğitimli zihinsel meslekleri (hukuk, tıp, kodlama) etkiler.',
    explanation: 'Fark: Modern yapay zeka sadece el emeğini değil, entelektüel ve bilişsel profesyonel rolleri tehdit etmektedir (A şıkkı).'
  },
  {
    id: 'm2_q56',
    type: 'reading',
    title: '56. Soru - Paragraf 4',
    question: 'According to the passage, the implementation of AI could lead to white-collar polarization because _____',
    options: {
      A: 'elite innovators will become far more productive while routine intellectual workers risk becoming redundant.',
      B: 'all university graduates will receive identical salaries regardless of discipline.',
      C: 'corporations will completely eliminate all computer systems in favor of manual bookkeeping.',
      D: 'routine office workers will voluntarily resign to pursue industrial agricultural jobs.',
      E: 'software programmers will refuse to collaborate with artificial neural networks.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Kutuplaşmanın Nedeni: Rutin işler elenirken elit yöneticilerin verimi katlanır.',
    trapWarning: 'Metin açıkça: "innovators experience productivity surges, routine intellectual workers face redundancy" der.',
    explanation: 'Beyaz yaka kutuplaşmasının sebebi: algoritmaları yöneten elitlerin aşırı üretkenleşmesi, rutin büro çalışanlarının ise işsiz kalma riskidir. Doğru cevap A.'
  },
  {
    id: 'm2_q57',
    type: 'reading',
    title: '57. Soru - Paragraf 4',
    question: 'The author suggests that higher education institutions should adapt to AI advancements by _____',
    options: {
      A: 'cultivating uniquely human skills like empathy, critical evaluation, and holistic synthesis.',
      B: 'forcing all undergraduate students to memorize standardized corporate contracts.',
      C: 'banning students from utilizing any digital technology in university classrooms.',
      D: 'shutting down medical and legal academic departments completely.',
      E: 'focusing exclusively on mechanical typing speed and repetitive arithmetic calculations.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Çözüm Önerisi Tespiti: Üniversitelerin rolü',
    trapWarning: 'Yazar ezberciliği değil; empati, eleştirel düşünme ve çok disiplinli sentezi ön plana çıkarır.',
    explanation: 'Üniversiteler müfredatlarını: empati, eleştirel düşünme ve sentez gibi insanın evrimsel üstünlük taşıdığı alanlara odaklamalıdır. Doğru cevap A.'
  },
  {
    id: 'm2_q58',
    type: 'reading',
    title: '58. Soru - Paragraf 4',
    question: 'The word "redundancy" in the passage refers to _____',
    options: {
      A: 'joblessness / being no longer needed in employment',
      B: 'unprecedented financial bonuses',
      C: 'rapid international promotion',
      D: 'technological immortality',
      E: 'academic excellence'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'İş Dünyası / Ekonomi Terminolojisi: Redundancy (İşten çıkarılma / Fazlalık olma)',
    trapWarning: 'Redundancy İngiliz iş hukukunda personelin ihtiyaç fazlası olup işten çıkarılması durumudur.',
    explanation: 'Face widespread redundancy: işsizlik / ihtiyaç fazlası haline gelme riskiyle karşı karşıya kalır. Doğru cevap A.'
  },

  // PARAGRAF 5: Okyanus Asitlenmesi ve Mercan Resifleri (59-62)
  {
    id: 'm2_q59',
    type: 'reading',
    title: '59. Soru - Paragraf 5 (Deniz Biyolojisi)',
    passage: 'While public concern regarding anthropogenic climate change predominantly focuses on atmospheric thermal increases, oceans absorb over twenty-five percent of industrial carbon dioxide emissions, driving a quiet ecological crisis known as ocean acidification. When carbon dioxide dissolves into seawater, it undergoes a chemical reaction that generates carbonic acid, liberating hydrogen ions that bind with ambient carbonate ions. This chemical sequence drastically depletes the free carbonate ions that calcifying marine organisms—such as reef-building scleractinian corals, pteropods, and shellfish—require to synthesize their calcium carbonate exoskeletons. In increasingly acidic waters, existing shells literally begin to dissolve. Because coral reefs harbor over twenty-five percent of all marine biodiversity despite occupying less than one percent of the ocean floor, their architectural collapse threatens coastal protective buffers and the primary protein source for a billion coastal inhabitants.',
    question: 'It can be inferred from the passage that ocean acidification is chemically caused by _____',
    options: {
      A: 'the absorption of excess atmospheric carbon dioxide forming carbonic acid in seawater.',
      B: 'uncontrolled thermal radiation emitted by underwater volcanic fissures.',
      C: 'the excessive dumping of synthetic plastic polymers into coastal wetlands.',
      D: 'the complete absence of hydrogen ions in equatorial maritime currents.',
      E: 'the overpopulation of calcifying shellfish species in tropical coral atolls.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Doğrudan Bilgi: Asitlenmenin Kimyasal Nedeni',
    trapWarning: 'Metin: "CO2 dissolves into seawater, forming carbonic acid" sürecini doğrudan anlatır.',
    explanation: 'Okyanus asitlenmesi: atmosferik karbondioksitin deniz suyuna karışarak karbonik asit oluşturmasıyla meydana gelir. Doğru cevap A.'
  },
  {
    id: 'm2_q60',
    type: 'reading',
    title: '60. Soru - Paragraf 5',
    question: 'According to the passage, calcifying marine organisms suffer in acidified oceans because _____',
    options: {
      A: 'the depletion of free carbonate ions impairs their ability to construct and maintain protective shells.',
      B: 'predatory fish populations consume coral polyps at an accelerated rate.',
      C: 'cooler water temperatures force shellfish to migrate towards polar abyssal zones.',
      D: 'dissolved oxygen concentrations reach lethally high saturation levels.',
      E: 'photosynthetic algae produce toxic quantities of glucose within coral tissues.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Organizmalar Neden Zarar Görür? Karbonat iyonu tükenmesi',
    trapWarning: 'Metin: serbest karbonat iyonlarının azalması sonucu kabuklarını inşa edemediklerini söyler.',
    explanation: 'Kabuklu canlılar zarar görür çünkü: serbest karbonat iyonlarının tükenmesi kabuk üretmelerini engeller ve var olan kabukları eritir. Doğru cevap A.'
  },
  {
    id: 'm2_q61',
    type: 'reading',
    title: '61. Soru - Paragraf 5',
    question: 'The ecological importance of coral reefs is highlighted by the fact that they _____',
    options: {
      A: 'sustain a quarter of marine biodiversity despite covering less than one percent of the seabed.',
      B: 'supply all industrial carbon dioxide required for terrestrial plant photosynthesis.',
      C: 'prevent polar ice shelves from calving into sub-Antarctic ocean currents.',
      D: 'are completely impervious to any form of chemical contamination.',
      E: 'exist exclusively in deep-sea trenches where sunlight cannot penetrate.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Paragraf İstatistiği Taraması: %25 biyoçeşitlilik / <%1 alan',
    trapWarning: 'Metindeki son cümle doğrudan bu oranı vermektedir.',
    explanation: 'Mercanların önemi: deniz tabanının %1\'inden azını kaplamalarına rağmen tüm denizel biyoçeşitliliğin dörtte birini barındırmalarıdır. Doğru cevap A.'
  },
  {
    id: 'm2_q62',
    type: 'reading',
    title: '62. Soru - Paragraf 5',
    question: 'The passage implies that the destruction of coral reef architectures would _____',
    options: {
      A: 'undermine food security for human populations relying on coastal fisheries for nutrition.',
      B: 'substantially reduce carbon dioxide concentrations throughout the global atmosphere.',
      C: 'force shellfish to evolve non-calcified titanium exoskeletons within decades.',
      D: 'eliminate all tidal waves and coastal flooding along continental coastlines.',
      E: 'have zero measurable economic consequences for international seafood markets.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'İnsan Üzerindeki Çıkarım: Gıda Güvenliği Tehdidi',
    trapWarning: 'Son cümle: "threatens coastal buffers and the primary protein source for a billion coastal inhabitants" demektedir.',
    explanation: 'Mercanların yok olması: kıyıda yaşayan bir milyar insanın birincil protein kaynağını ve gıda güvenliğini tehdit eder. Doğru cevap A.'
  },

  // =========================================================================
  // 63 - 67: KARŞILIKLI KONUŞMA / DİYALOG (DIALOGUE: 5 SORU)
  // =========================================================================
  {
    id: 'm2_q63',
    type: 'dialogue',
    title: '63. Soru - Karşılıklı Konuşma',
    dialogueSpeaker: 'Dr. Aris (Climatologist) & Dr. Vane (Urban Planner)',
    question: `Dr. Aris:
— Our recent thermodynamic modeling shows that replacing dark asphalt pavement with reflective permeable surfaces can lower downtown summer temperatures by up to four degrees Celsius.

Dr. Vane:
— That sounds promising on paper, but municipal budgets are already strained. The upfront capital cost of retrofitting thousands of kilometers of roadways is astronomical.

Dr. Aris:
— _____

Dr. Vane:
— I hadn't factored in public health and energy savings. If the net economic return offsets the expenditure within five years, city council might approve the bond.`,
    options: {
      A: 'True, but you are ignoring the savings from fewer heatstroke admissions and lower air-conditioning demand.',
      B: 'True, which is why we should first test the surfaces on a single district before expanding citywide.',
      C: 'Perhaps, but residents have also complained that reflective surfaces create uncomfortable glare.',
      D: 'Then we could ask the national government to cover part of the cost through infrastructure grants.',
      E: 'You are right that the cost is high, so the project will probably have to wait another decade.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Sonraki Cevaptan Geriye Yürüme: "I hadn\'t factored in public health and energy savings"',
    trapWarning: 'B, C, D ve E maliyet itirazına makul cevaplardır ama Dr. Vane\'in son sözüyle bağlanmaz. Vane "halk sağlığı ve enerji tasarrufunu hesaba katmamıştım" der; boşlukta tam olarak bunlar geçmelidir.',
    explanation: 'Dr. Aris: "True, but you are neglecting the reductions in hospital admissions and energy demands" (Haklısın ama hastane masraflarındaki ve klima enerjisindeki tasarrufu göz ardı ediyorsun). Doğru cevap A.'
  },
  {
    id: 'm2_q64',
    type: 'dialogue',
    title: '64. Soru - Karşılıklı Konuşma',
    dialogueSpeaker: 'Talia (Biochemist) & Marcus (Lab Director)',
    question: `Talia:
— I’ve run the enzyme chromatography assays three times, and every single batch shows that the synthesized protein denatures at temperatures above 38 degrees Celsius.

Marcus:
— That is a critical flaw. If the therapeutic compound cannot remain stable at standard mammalian core body temperature, it can never be deployed in clinical therapies.

Talia:
— _____

Marcus:
— Exactly. Adding disulfide covalent cross-links might provide the structural rigidity necessary to resist thermal unfolding. Let\'s prepare that variant immediately.`,
    options: {
      A: 'Could we strengthen the molecular backbone with extra bonds so that it tolerates higher temperatures?',
      B: 'Should we repeat the assays with a different buffer solution to rule out an experimental error?',
      C: 'Could we deliver the compound in a cooled capsule that releases it only after it reaches the bloodstream?',
      D: 'Do you think we should report this result to the funding agency before running further tests?',
      E: 'Is it possible that other proteins in the same family are naturally more resistant to heat?'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Mantıksal Çözüm Önerisi & Sonraki Cümle Uyumu: "Disulfide covalent cross-links"',
    trapWarning: 'Bütün öneriler mantıklı görünür. Ama Marcus "Exactly. Disülfit köprüleri eklemek yapısal sağlamlık verebilir" der; yani Talia molekülün kendisini güçlendirmeyi önermiş olmalıdır. C şıkkı da bir çözümdür ama molekülü değiştirmez.',
    explanation: 'Talia moleküler yapıyı termal dirence karşı stabilize etmeyi önerir (A şıkkı). Marcus da bunu onaylayarak disülfit bağlarını eklemeyi söyler.'
  },
  {
    id: 'm2_q65',
    type: 'dialogue',
    title: '65. Soru - Karşılıklı Konuşma',
    dialogueSpeaker: 'Professor Thorne (Archaeologist) & Elena (Graduate Researcher)',
    question: `Professor Thorne:
— Look at these aerial LiDAR scans of the Petén jungle basin. What earlier surveyors dismissed as natural undulating hills are clearly organized terraced agricultural platforms.

Elena:
— It’s astonishing. The sheer scale suggests this ancient Maya settlement must have supported a population numbering in the hundreds of thousands, not just a few thousand.

Professor Thorne:
— _____

Elena:
— You are right. Without validating the subsurface stratigraphy and carbon-dating the pottery shards, these geometric shapes remain theoretical hypotheses.`,
    options: {
      A: 'Indeed, but we should not draw demographic conclusions before we excavate and date the site.',
      B: 'Indeed, and the scans suggest the city may have been far older than anyone had previously assumed.',
      C: 'Indeed, and we should publish these findings quickly before another research team does so.',
      D: 'Indeed, though similar terraces have already been documented at several neighbouring sites.',
      E: 'Indeed, and it may explain why the region was abandoned so suddenly in the ninth century.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Akademik İhtiyat / Ground-truthing: "Before we conduct physical excavations"',
    trapWarning: 'Bütün şıklar "Indeed" ile başlar ve Elena\'ya katılır görünür. Ancak Elena "Kazı ve tarihlendirme olmadan bunlar hipotez olarak kalır" diyerek bir ihtiyat çağrısını onaylar. C şıkkı bunun tam tersini önerir.',
    explanation: 'Profesör Thorne: "Indeed, but let us not jump to conclusions before we conduct physical ground-truthing excavations" (Evet ama fiziki kazı yapmadan kesin demografik sonuçlara varmayalım). Doğru cevap A.'
  },
  {
    id: 'm2_q66',
    type: 'dialogue',
    title: '66. Soru - Karşılıklı Konuşma',
    dialogueSpeaker: 'Julian (Software Engineer) & Sarah (Cybersecurity Analyst)',
    question: `Julian:
— We\'ve migrated all customer verification workflows to biometrics, specifically facial facial geometry scanning. Passwords are officially obsolete on our platform.

Sarah:
— While biometrics eliminate the vulnerability of weak or stolen passwords, they introduce a permanent and far more dangerous risk profile.

Julian:
— _____

Sarah:
— Because if a database is breached and your password is stolen, you can simply reset it. But if your immutable facial biometric template is compromised, you cannot change your face.`,
    options: {
      A: 'How could a stored map of someone\'s facial features be more dangerous than a stolen password?',
      B: 'Do you mean that facial scanners can sometimes be fooled by a high-resolution photograph?',
      C: 'Are you worried that customers will find facial scanning slower than typing a password?',
      D: 'Would combining facial scanning with a one-time code sent by text message reduce that risk?',
      E: 'Is it because some customers may refuse to share their biometric data with our company?'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Soru-Cevap Bütünlüğü: "Because if your face is compromised, you cannot change your face"',
    trapWarning: 'Sarah "Because..." ile başlayarak bir neden açıklar ve şifrenin değiştirilebildiğini, yüzün değiştirilemediğini söyler. Boşlukta bu yüzden "neden daha tehlikeli?" sorusu olmalıdır. B, D ve E de soru sorar ama Sarah\'nın cevabı onlarla bağlanmaz.',
    explanation: 'Julian Sarah\'ya biyometriğin nasıl daha tehlikeli olabileceğini sorar: "How could facial features be more hazardous?" (A şıkkı). Sarah da sebebini açıklar.'
  },
  {
    id: 'm2_q67',
    type: 'dialogue',
    title: '67. Soru - Karşılıklı Konuşma',
    dialogueSpeaker: 'Dr. Chen (Astrophysicist) & Dr. Novak (Planetary Geologist)',
    question: `Dr. Chen:
— Spectroscopic data from the subsurface ocean plume of Enceladus reveals complex organic macromolecular chains, dissolved molecular hydrogen, and hydrothermal silica nanoparticles.

Dr. Novak:
— That confirms the presence of serpentinization reactions along the moon\'s porous core floor, mirroring terrestrial deep-sea thermal vents.

Dr. Chen:
— _____

Dr. Novak:
— Absolutely. In fact, it makes Enceladus arguably the most compelling target for searching for extant microbial life within our solar system.`,
    options: {
      A: 'Which means that the basic chemical ingredients needed for life may all be present there today.',
      B: 'Which means that the plume must be far colder than models of the interior had predicted.',
      C: 'Although it is still unclear how deep beneath the ice shell that subsurface ocean actually lies.',
      D: 'But the same chemical signatures have also been detected in many lifeless comets and asteroids.',
      E: 'Which means that a future lander would need to drill through several kilometres of surface ice.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Bilimsel Çıkarım & Son Cümle Desteği: Canlılık için gerekli önkoşulların varlığı',
    trapWarning: 'Dr. Novak "Absolutely" der ve Enceladus\'u yaşam arayışında en güçlü hedef ilan eder. Bu yüzden boşlukta yaşamın önkoşullarına dair olumlu bir çıkarım olmalıdır. D şıkkı bunu zayıflatır, E ise konuyu keşif zorluğuna kaydırır.',
    explanation: 'Dr. Chen: "Which implies all thermodynamic prerequisites for life co-exist right now" (Bu da yaşam için gerekli tüm termodinamik önkoşulların orada şu anda var olduğunu gösterir). Doğru cevap A.'
  },

  // =========================================================================
  // 68 - 71: ANLAMCA EN YAKIN CÜMLE (RESTATEMENT: 4 SORU)
  // =========================================================================
  {
    id: 'm2_q68',
    type: 'restatement',
    title: '68. Soru - Anlamca En Yakın Cümle',
    question: 'Had the international coalition enforced strict carbon caps two decades ago, global average temperatures would not be escalating at their current alarming rate.',
    options: {
      A: 'Because the international community failed to implement binding carbon limits twenty years ago, worldwide temperatures are now rising with disturbing speed.',
      B: 'Global average temperatures have increased steadily over the last two decades despite the rigorous carbon caps imposed by international treaties.',
      C: 'Even if the international coalition had mandated carbon restrictions twenty years ago, global warming would still be accelerating at the same alarming pace.',
      D: 'Unless international leaders agree to cap global emissions within the next twenty years, atmospheric temperatures will escalate uncontrollably.',
      E: 'The international coalition was completely unaware twenty years ago that carbon emissions would cause worldwide temperatures to rise.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Type 3 Devrik If Analizi: Had enforced = Uygulamadığı için şu an artıyor',
    trapWarning: 'C şıkkında "Even if... still would be accelerating" der; bu zıt anlamdır.',
    explanation: 'Orijinal cümle: "Uluslararası koalisyon 20 yıl önce katı karbon kotaları uygulasaydı, küresel sıcaklıklar bugünkü endişe verici hızla yükseliyor olmazdı." Bu cümlenin net karşılığı A şıkkıdır: "Uygulamadığı için (Because failed to implement) şu anda rahatsız edici bir hızla yükselmektedir."'
  },
  {
    id: 'm2_q69',
    type: 'restatement',
    title: '69. Soru - Anlamca En Yakın Cümle',
    question: 'So intricate is the grammatical architecture of ancient Sanskrit that early comparative linguists mistakenly believed it to be an artificial language engineered by philosophers.',
    options: {
      A: 'The grammar of ancient Sanskrit is so complex that pioneering linguistic scholars wrongly concluded it was a constructed language designed by thinkers.',
      B: 'Philosophers deliberately engineered the grammar of ancient Sanskrit to be so confusing that early linguists could never decipher it.',
      C: 'Early comparative linguists proved conclusively that ancient Sanskrit was indeed an artificial linguistic system invented by philosophers.',
      D: 'Although ancient Sanskrit possesses a relatively simple grammatical system, early philosophers failed to appreciate its structural beauty.',
      E: 'Only by studying modern artificial languages were historical linguists able to unravel the complex grammatical rules of Sanskrit.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'So + Adj + that (Öylesine karmaşık ki...) Kalıp Eşleştirmesi',
    trapWarning: 'C şıkkında dilin gerçekten yapay olduğunun kanıtlandığını söyler; oysa orijinal cümle "mistakenly believed" (yanlışlıkla inandılar) demektedir.',
    explanation: 'So intricate (öylesine karmaşık ki) = so complex. Mistakenly believed it to be artificial = wrongly concluded it was a constructed language. Doğru cevap A.'
  },
  {
    id: 'm2_q70',
    type: 'restatement',
    title: '70. Soru - Anlamca En Yakın Cümle',
    question: 'While regular aerobic exercise undeniably enhances cardiovascular longevity, its cognitive benefits can only be fully unlocked when paired with sustained intellectual engagement.',
    options: {
      A: 'Aerobic fitness certainly boosts cardiovascular health, but its positive impacts on the brain are maximized only if accompanied by ongoing mental stimulation.',
      B: 'Unless individuals perform vigorous physical exercise every day, engaging in intellectual activities will provide zero measurable benefits for the brain.',
      C: 'Cognitive decline can be completely reversed by aerobic conditioning alone, without any requirement for intellectual problem-solving.',
      D: 'Cardiovascular longevity is far more critical for brain health than any form of mental or intellectual activity.',
      E: 'Engaging in intellectually demanding tasks enhances physical stamina much more effectively than conventional cardiovascular workouts.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Zıtlık ve Şart Uyumu: While ... undeniably enhances, only fully unlocked when paired with...',
    trapWarning: 'B şıkkında zihinsel egzersizin sıfır fayda sağladığı iddia edilir; metin bunu söylemez.',
    explanation: 'Orijinal cümle: Aerobik egzersiz kalp sağlığını kesinlikle artırsa da, zihinsel faydaları ancak sürekli zihinsel uğraşla birleştirildiğinde tam açığa çıkar. Birebir karşılık A şıkkıdır.'
  },
  {
    id: 'm2_q71',
    type: 'restatement',
    title: '71. Soru - Anlamca En Yakın Cümle',
    question: 'Scarcely had the volcanic ash plume penetrated the upper troposphere when aviation authorities grounded all transcontinental flights across the hemisphere.',
    options: {
      A: 'Aviation officials suspended all transcontinental flights across the hemisphere almost immediately after the volcanic ash entered the upper troposphere.',
      B: 'Aviation authorities delayed grounding commercial flights until the volcanic ash plume had drifted across the entire hemisphere.',
      C: 'Even though volcanic ash had reached the upper troposphere, transcontinental flights continued operating without interruption.',
      D: 'Transcontinental flights were canceled because airport runways throughout the hemisphere were buried under heavy volcanic debris.',
      E: 'Aviation officials had intended to ground flights long before the volcano showed any signs of explosive atmospheric activity.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Scarcely had ... when = Tam ... olmuştu ki ... oldu (Almost immediately after)',
    trapWarning: 'Scarcely ... when yapısı anında gerçekleşen eylemi anlatır. B şıkkı gecikmeli yapıldığını iddia eder.',
    explanation: 'Scarcely had the plume penetrated ... when grounded = kül bulutu troposfere girer girmez uçuşlar askıya alındı (almost immediately after). Doğru cevap A.'
  },

  // =========================================================================
  // 72 - 75: PARAGRAF TAMAMLAMA (PARAGRAPH COMPLETION: 4 SORU)
  // =========================================================================
  {
    id: 'm2_q72',
    type: 'paragraph_completion',
    title: '72. Soru - Paragraf Tamamlama',
    question: `Throughout the vertebrate tree of life, sleep remains an evolutionary enigma. Engaging in prolonged unconsciousness leaves animals vulnerable to predation and prevents foraging. (_____) Neurobiological investigations reveal that during deep slow-wave sleep, the brain’s glymphatic system expands, flushing out neurotoxic metabolic waste products, such as amyloid-beta proteins, that accumulate during waking hours. Without this nightly biochemical cleansing, cognitive dysfunction and neuronal degeneration inevitably ensue.`,
    options: {
      A: 'Yet, the sheer ubiquity of sleep across species demonstrates that it must serve an indispensable physiological function.',
      B: 'Consequently, most predatory mammals have completely evolved away the biological necessity for restorative rest.',
      C: 'Furthermore, aquatic marine mammals never enter slow-wave sleep because they must surface periodically to breathe.',
      D: 'For this reason, human beings require significantly less sleep than primitive cold-blooded reptiles.',
      E: 'Instead, sleep deprivation has been proven to enhance athletic agility and sensory perception in birds.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Zıtlık Geçişi (Tehlikeli ve dezavantajlı görünmesine rağmen vazgeçilmez bir işlevi olmalıdır)',
    trapWarning: 'Boşluktan önceki cümle uykunun tehlikelerini (-) anlatırken, boşluktan sonraki cümle beynin temizlendiğini (+) anlatır. Araya zıtlık bağlacı (Yet) şarttır.',
    explanation: 'Yet (Yine de, uykunun tüm türlerde bulunması vazgeçilmez bir işleve hizmet ettiğini gösterir). Ardından gelen cümle bu işlevi (glymphatic flushing) açıklar. Doğru cevap A.'
  },
  {
    id: 'm2_q73',
    type: 'paragraph_completion',
    title: '73. Soru - Paragraf Tamamlama',
    question: `Urban heat islands occur when dense metropolitan centers experience substantially warmer ambient temperatures than surrounding rural landscapes. Concrete, brick, and asphalt possess high thermal mass, absorbing vast quantities of solar radiation during the day and radiating it slowly at night. (_____) To counteract this hazardous phenomenon, progressive urban landscape architects are mandating green vegetative rooftops, reflective solar pavements, and extensive urban canopy corridors to restore natural microclimatic evapotranspiration.`,
    options: {
      A: 'Coupled with anthropogenic waste heat generated by vehicular exhaust and air-conditioning units, this trapped energy elevates local nocturnal temperatures dramatically.',
      B: 'Rural forests, in contrast, generate immense quantities of synthetic chemical heat during winter months.',
      C: 'Consequently, city dwellers consume significantly less electricity for indoor air-conditioning during July and August.',
      D: 'Modern asphalt formulations have been engineered to absorb cold air and release it during summer afternoons.',
      E: 'Architectural authorities have therefore outlawed the construction of multi-story buildings in earthquake zones.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Neden-Sonuç Zinciri: Isının birikmesi ve gece sıcaklıklarını artırması',
    trapWarning: 'Boşluktan sonra "To counteract this hazardous phenomenon" der. Demek ki boşlukta bu tehlikeli durumun nasıl katmerlendiği (Coupled with waste heat...) anlatılmalıdır.',
    explanation: 'A şıkkı betonun ısıyı tutmasına ek olarak araç ve klima ısısının birleşerek gece sıcaklıklarını fırlattığını açıklar. Doğru cevap A.'
  },
  {
    id: 'm2_q74',
    type: 'paragraph_completion',
    title: '74. Soru - Paragraf Tamamlama',
    question: `For centuries, the Silk Road was envisioned as a single well-defined highway traversing the Eurasian steppes from China to the Mediterranean. Contemporary archaeological excavations have dismantled this simplistic romantic imagery. (_____) Along this intricate decentralized spiderweb, nomadic pastoralists served as essential intermediaries, trading horses, textiles, lapis lazuli, and religious philosophies between isolated oasis city-states.`,
    options: {
      A: 'In reality, it operated as a vast, shifting network of interconnected mountain passes, river valleys, and desert tracks.',
      B: 'European merchants traversed the entire ten-thousand-kilometer distance in single continuous seasonal caravans.',
      C: 'The Chinese imperial army stationed garrison forts along every mile of the desert road to protect silk merchants.',
      D: 'Maritime shipping had completely replaced overland trade caravans by the early Bronze Age.',
      E: 'No precious gemstones or exotic religious manuscripts were ever transported along these Central Asian routes.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Gerçek / Yanılsama Karşılaştırması: "In reality, it operated as a vast, shifting network..."',
    trapWarning: 'Önceki cümle tek bir yol sanılmasını yıkar; sonraki cümle ise bu ağın bir örümcek ağı (spiderweb) olduğunu söyler. Boşluk A şıkkıdır.',
    explanation: 'In reality (Gerçekte tek bir yol değil, birbiriyle bağlantılı dağ geçitleri ve vadi yollarından oluşan devasa bir ağdır). Sonraki cümlenin "intricate decentralized spiderweb" ifadesini birebir karşılar. Doğru cevap A.'
  },
  {
    id: 'm2_q75',
    type: 'paragraph_completion',
    title: '75. Soru - Paragraf Tamamlama',
    question: `Antimicrobial resistance poses one of the most perilous global health threats of the twenty-first century. Decades of systemic overprescription of antibiotics in human medicine and livestock agriculture have exerted immense selective evolutionary pressure on microbial pathogens. (_____) Consequently, routine surgical interventions and minor infections that were readily curable for generations could once again become lethal medical emergencies.`,
    options: {
      A: 'Bacteria carrying resistant genetic mutations survive treatments, rapidly multiplying and exchanging defensive plasmids with neighboring strains.',
      B: 'Pharmaceutical conglomerates have easily developed dozens of universally effective synthetic antibiotic molecules every single month.',
      C: 'Most pathogenic bacteria naturally lose their virulence when exposed to high doses of broad-spectrum penicillin.',
      D: 'Livestock farming has completely eliminated the use of preventative animal medicinal supplements.',
      E: 'Human immune systems have spontaneously evolved universal antibody defenses against all known microbial species.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Bakteriyel Direnç Mekanizması Açıklaması',
    trapWarning: 'Boşluktan sonraki "Consequently, routine infections become lethal" cümlesi dirençli bakterilerin nasıl hayatta kaldığının sonucudur.',
    explanation: 'A şıkkı dirençli bakterilerin mutasyon geçirip hayatta kalarak çoğaldığını ve savunma genlerini paylaştığını açıklar. Doğru cevap A.'
  },

  // =========================================================================
  // 76 - 80: ANLAM BÜTÜNLÜĞÜNÜ BOZAN CÜMLE (IRRELEVANT SENTENCE: 5 SORU)
  // =========================================================================
  {
    id: 'm2_q76',
    type: 'irrelevant_sentence',
    title: '76. Soru - Anlam Bütünlüğünü Bozan Cümle',
    question: `(I) Deep-sea hydrothermal vents harbor chemosynthetic biospheres that thrive completely independent of solar energy. (II) These geothermal chimneys expel superheated fluids enriched with toxic hydrogen sulfide directly into the abyssal ocean. (III) Chemosynthetic bacteria oxidize these sulfur compounds, serving as the primary energetic base for giant tubeworms and blind shrimp. (IV) Commercial sport fishing charters along tropical coastlines have reported record-breaking catches of blue marlin this season. (V) Because these benthic ecosystems function without sunlight, astrobiologists study them as models for potential life beneath the ice crust of Jupiter’s moon Europa.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'Orta',
    tacticUsed: 'Konu Dışı Ticari Balıkçılık Detayı: Paragraf derin deniz hidrotermal bacalarını anlatırken IV. cümle tropik spor balıkçılığından bahseder.',
    trapWarning: 'I, II, III ve V cümleleri derin deniz hidrotermal ekosistemlerini ve astrobiyolojiyi anlatır. IV alakasızdır.',
    explanation: 'IV numaralı cümle mavi marlin balığı spor avcılığından bahsederek derin deniz jeotermal bacaları konusunun akışını tamamen bozmaktadır (D şıkkı).'
  },
  {
    id: 'm2_q77',
    type: 'irrelevant_sentence',
    title: '77. Soru - Anlam Bütünlüğünü Bozan Cümle',
    question: `(I) During the Renaissance, Venice established its geopolitical dominance through a maritime trade monopoly over luxury Eastern goods. (II) Venetian merchants transported silk, exotic spices, and porcelain from Levantine ports to European consumers at immense profit margins. (III) This lucrative commercial hegemony generated the colossal municipal wealth that funded magnificent canals, palaces, and artistic patronage. (IV) Modern cruise ships entering the Venetian lagoon produce wake erosion that severely degrades the fragile underwater wooden pilings of historical buildings. (V) However, the Portuguese maritime discovery of a direct ocean route to India around the Cape of Good Hope permanently shattered the Venetian trade monopoly.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'İleri',
    tacticUsed: 'Zaman Kayması / Güncel Turizm Sapması: Paragraf Rönesans dönemi Venedik ticaret tarihini anlatırken IV. cümle günümüz kruvaziyer gemilerine atlar.',
    trapWarning: 'I, II, III ve V cümleleri Rönesans dönemi tekelini ve Portekizlilerin bu tekeli kırmasını anlatır. IV modern çevre sorunudur.',
    explanation: 'IV numaralı cümle günümüz lüks yolcu gemilerinin su kanallarına verdiği zarardan bahsederek Rönesans Venedik ticaret tarihi anlatısını bozmaktadır (D şıkkı).'
  },
  {
    id: 'm2_q78',
    type: 'irrelevant_sentence',
    title: '78. Soru - Anlam Bütünlüğünü Bozan Cümle',
    question: `(I) Honeybees perform essential pollination services that sustain both terrestrial wild ecosystems and commercial agricultural crop yields. (II) In recent decades, beekeepers have documented severe colony collapse disorder, losing millions of hives annually. (III) Epidemiological research reveals this crisis is driven by a toxic combination of neonicotinoid pesticides, parasitic Varroa mites, and floral habitat fragmentation. (IV) Gourmet wildflower honey produced in high-altitude volcanic regions frequently wins international culinary tasting competitions. (V) Unless environmental regulators implement stringent restrictions on neurotoxic agricultural chemical sprays, global food security will face catastrophic disruptions.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'Orta',
    tacticUsed: 'Gurme Gastronomi Sapması: Paragraf arı ölümleri ve tarım ilacı tehdidini anlatırken IV. cümle gurme bal yarışmalarından bahseder.',
    trapWarning: 'IV cümlede "honey" kelimesi geçse de konu balın lezzeti değil arıların yok olma tehlikesidir.',
    explanation: 'IV numaralı cümle gurme balın ödül kazanmasından bahsederek arı ölümleri ve ekolojik kriz temasından kopmaktadır (D şıkkı).'
  },
  {
    id: 'm2_q79',
    type: 'irrelevant_sentence',
    title: '79. Soru - Anlam Bütünlüğünü Bozan Cümle',
    question: `(I) The development of mRNA vaccine technology represents a revolutionary paradigm shift in biomedical therapeutics. (II) Unlike traditional vaccines that introduce attenuated or inactivated pathogens to trigger immunity, mRNA vaccines deliver genetic instructions directly to host ribosomes. (III) Human cells temporarily synthesize the viral spike protein, prompting the immune system to construct robust neutralizing antibodies without risk of viral infection. (IV) Producing clinical glass vials for injectable medications requires specialized high-temperature furnaces manufactured predominantly in Germany. (V) This modular biological platform can be reprogrammed within weeks to target emerging viral mutations or customized oncological neoantigens.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'Orta',
    tacticUsed: 'Endüstriyel Cam Şişe Detayı: Paragraf mRNA teknolojisinin biyolojik mekanizmasını anlatırken IV. cümle fırın imalatından bahseder.',
    trapWarning: 'I, II, III ve V cümleleri mRNA\'nın çalışma prensibini ve hızını anlatır. IV alakasız cam fırını sanayisidir.',
    explanation: 'IV numaralı cümle ilaç şişelerinin cam fırınlarından bahsederek biyolojik mRNA mekanizmasını bölen ilgisiz cümledir (D şıkkı).'
  },
  {
    id: 'm2_q80',
    type: 'irrelevant_sentence',
    title: '80. Soru - Anlam Bütünlüğünü Bozan Cümle',
    question: `(I) Arctic permafrost acts as a colossal planetary carbon repository, locking away twice as much carbon as is currently present in the global atmosphere. (II) As atmospheric warming accelerates in the polar latitudes, this perpetually frozen soil is thawing at an unprecedented rate. (III) Microbial decomposition of ancient organic matter in thawed permafrost liberates massive volumes of methane and carbon dioxide into the atmosphere. (IV) Ice hockey enthusiasts in northern Canadian communities enjoy outdoor skating tournaments on frozen lakes throughout January. (V) This self-reinforcing greenhouse feedback loop threatens to accelerate runaway planetary temperature increases beyond human mitigation capabilities.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'Orta',
    tacticUsed: 'Buz Hokeyi Eğlencesi Sapması: Paragraf permafrost erimesi ve metan salınımı tehlikesini anlatırken IV. cümle buz pateni turnuvalarından bahseder.',
    trapWarning: 'I, II, III ve V cümleleri permafrostun sera gazı salınımı ve iklim geri besleme döngüsüdür. IV buz pateni hobisidir.',
    explanation: 'IV numaralı cümle Kanada\'daki açık hava buz hokeyi turnuvalarından bahsederek tehlikeli küresel ısınma döngüsünü bozan alakasız cümledir (D şıkkı).'
  }
];

// Options are reordered per question so the answer key is not concentrated in A.
export const YDS_FULL_MOCK_EXAM_2: YdsQuestion[] = shuffleQuestionList(RAW_YDS_FULL_MOCK_EXAM_2);
