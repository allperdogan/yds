import { YdsQuestion } from '../types';
import { shuffleQuestionList } from '../services/optionShuffle';
import { fillGroupPassages } from '../services/groupPassages';

const RAW_YDS_FULL_MOCK_EXAM_3: YdsQuestion[] = [
  // =========================================================================
  // 1 - 6: KELİME BİLGİSİ (VOCABULARY)
  // =========================================================================
  {
    id: 'm3_q1',
    type: 'vocabulary',
    title: '1. Soru - İsim (Noun)',
    question: 'The prolonged dry season led to an acute _____ of potable water in rural settlements, necessitating immediate humanitarian deliveries.',
    options: {
      A: 'scarcity',
      B: 'abundance',
      C: 'surplus',
      D: 'disregard',
      E: 'clarification'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Bağlam & Anlam Analizi: Kuraklık -> Su kıtlığı',
    trapWarning: 'B şıkkındaki abundance (bolluk) ve C şıkkındaki surplus (fazlalık) zıt çeldiricilerdir.',
    explanation: 'Scarcity: kıtlık, yetersizlik (= shortage, lack, dearth). Kurak mevsim akut su kıtlığına (acute scarcity) yol açmıştır.'
  },
  {
    id: 'm3_q2',
    type: 'vocabulary',
    title: '2. Soru - Sıfat (Adjective)',
    question: 'Early clinical trials showed that the new chemotherapy formulation was highly _____ in shrinking metastatic tumors while sparing healthy adjacent tissue.',
    options: {
      A: 'effective',
      B: 'detrimental',
      C: 'redundant',
      D: 'ambiguous',
      E: 'negligible'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Pozitif Değerlendirme (+) Analizi: Tümörleri küçültürken dokuyu koruması',
    trapWarning: 'B şıkkındaki detrimental (zararlı) olumsuz anlam taşır; cümlenin ikinci yarısı dokuları koruduğunu (+) belirtir.',
    explanation: 'Effective: etkili, tesirli (= potent, efficacious). İlaç tümörleri küçültmede oldukça etkili (highly effective) bulunmuştur.'
  },
  {
    id: 'm3_q3',
    type: 'vocabulary',
    title: '3. Soru - Zarf (Adverb)',
    question: 'The company\'s operating revenue dropped _____ following the global supply chain crisis, forcing the board to implement drastic austerity measures.',
    options: {
      A: 'sharply',
      B: 'tentatively',
      C: 'scarcely',
      D: 'beneficially',
      E: 'mutually'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Düşüş Fiilini Derecelendiren Zarf (Drop sharply)',
    trapWarning: 'Tentatively (çekinerek/geçici) düşüşün sertliğini vermez. Kemer sıkma politikasına gidildiğine göre düşüş keskindir.',
    explanation: 'Sharply: keskin biçimde, hızla (= dramatically, precipitously). Gelirler keskin biçimde düşmüştür (dropped sharply).'
  },
  {
    id: 'm3_q4',
    type: 'vocabulary',
    title: '4. Soru - Fiil (Verb)',
    question: 'Environmental scientists emphasize that continuing to burn fossil fuels at current rates will _____ efforts to limit global temperature rises to 1.5 degrees Celsius.',
    options: {
      A: 'undermine',
      B: 'reinforce',
      C: 'accelerate',
      D: 'subsidize',
      E: 'consolidate'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Negatif Etki Fiili: Çabaları baltalamak / zayıflatmak',
    trapWarning: 'Reinforce (güçlendirmek) ve accelerate (hızlandırmak) çeldiricidir; fosil yakıt yakmak hedeflere ulaşma çabalarını baltalar.',
    explanation: 'Undermine: zayıflatmak, baltalamak (= weaken, sabotage, impair). Fosil yakıt yakımı iklim çabalarını baltalayacaktır.'
  },
  {
    id: 'm3_q5',
    type: 'vocabulary',
    title: '5. Soru - Phrasal Verb',
    question: 'Due to severe torrential rains and subsequent river flooding, municipal organizers were forced to _____ the annual outdoor marathon.',
    options: {
      A: 'call off',
      B: 'carry out',
      C: 'bring about',
      D: 'take over',
      E: 'look after'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'İptal Etmek Anlamında Phrasal Verb (Call off)',
    trapWarning: 'Carry out (yürütmek/icra etmek) çeldiricidir; sel nedeniyle maraton yürütülemez, iptal edilir.',
    explanation: 'Call off: iptal etmek (= cancel). Şiddetli yağmur nedeniyle maraton iptal edilmek zorunda kalındı (forced to call off).'
  },
  {
    id: 'm3_q6',
    type: 'vocabulary',
    title: '6. Soru - Phrasal Verb',
    question: 'Economic analysts expect that the newly established lithium battery gigafactory will _____ at least ten thousand high-skilled employment positions.',
    options: {
      A: 'bring about',
      B: 'turn down',
      C: 'give up',
      D: 'fall behind',
      E: 'keep off'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Neden Olmak / Yaratmak: Bring about',
    trapWarning: 'Turn down (reddetmek) ve fall behind (gerisinde kalmak) negatif anlamlıdır.',
    explanation: 'Bring about: meydana getirmek, yol açmak, doğurmak (= cause, create, produce). Fabrika on bin kişilik istihdam yaratacaktır.'
  },

  // =========================================================================
  // 7 - 16: DİLBİLGİSİ & EDAT (GRAMMAR & PREPOSITIONS)
  // =========================================================================
  {
    id: 'm3_q7',
    type: 'grammar',
    title: '7. Soru - Zamanlar (Tenses)',
    question: 'Until the Rosetta Stone _____ deciphered in the early 1820s, scholars _____ unable to comprehend ancient Egyptian hieroglyphic inscriptions.',
    options: {
      A: 'was / had been',
      B: 'has been / were',
      C: 'is / are',
      D: 'had been / will be',
      E: 'was / have been'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Until + Simple Past (V2), Past Perfect (Had been)',
    trapWarning: 'Rosetta Taşı 1820\'lerde çözüldü; bu çözülmeden önceki yüzyıllar boyunca akademisyenler okuyamadığı için geçmişin geçmişi (had been) gerekir.',
    explanation: 'Until + was deciphered (1820\'lerde çözülene kadar), scholars had been unable (bilginler okuyamamıştı). Doğru cevap A.'
  },
  {
    id: 'm3_q8',
    type: 'grammar',
    title: '8. Soru - Zaman & Öncelik (Tenses)',
    question: 'By the time international peacekeepers _____ in the embattled provincial capital, humanitarian corridors _____ completely closed by opposing factions.',
    options: {
      A: 'arrived / had already been',
      B: 'arrive / were',
      C: 'have arrived / will be',
      D: 'had arrived / are',
      E: 'will arrive / have been'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'By the time + Past Simple (V2), Past Perfect (Had already been)',
    trapWarning: 'By the time içine "had arrived" gelmez; yan cümle V2, ana cümle Had V3 olur.',
    explanation: 'By the time arrived (Barış gücü vardığında), koridorlar zaten kapatılmıştı (had already been closed). Doğru cevap A.'
  },
  {
    id: 'm3_q9',
    type: 'grammar',
    title: '9. Soru - Kısaltmalar (Participle Reduction)',
    question: '_____ the historic international treaty after nine months of grueling diplomatic negotiations, the ambassadors held a joint press conference.',
    options: {
      A: 'Having signed',
      B: 'Being signed',
      C: 'Signed',
      D: 'To be signed',
      E: 'To sign'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Öncelik Bildiren Aktif Kısaltma: Having signed (İmzaladıktan sonra)',
    trapWarning: 'Virgülden sonraki özne: "the ambassadors". Elçiler antlaşmayı kendileri imzaladı (aktif). B ve C şıkları pasiftir.',
    explanation: 'Having signed: antlaşmayı imzalamış olan elçiler basın toplantısı düzenlediler. Aktif ve öncelik bildiren kısaltma A\'dır.'
  },
  {
    id: 'm3_q10',
    type: 'grammar',
    title: '10. Soru - Zıtlık Edatı vs Bağlaç',
    question: '_____ severe geopolitical volatility and trade restrictions, the technology conglomerate recorded record-breaking quarterly profits.',
    options: {
      A: 'Despite',
      B: 'Although',
      C: 'Even though',
      D: 'Whereas',
      E: 'Much as'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'İsim Tamlaması Önünde Zıtlık: Despite + Noun Phrase',
    trapWarning: 'Although, Even though, Whereas ve Much as şıklarının hepsi tam cümle (S+V) alır! İsim alan tek zıtlık edatı Despite\'tır.',
    explanation: 'Boşluktan sonra "severe geopolitical volatility" isim tamlaması vardır (yüklem yoktur). İsim alan tek zıtlık edatı "Despite"dır (A şıkkı).'
  },
  {
    id: 'm3_q11',
    type: 'grammar',
    title: '11. Soru - Sebep Bağlacı',
    question: '_____ the deep-sea exploration submersible lost all electronic communication telemetry with the surface vessel, the dive supervisor immediately aborted the mission.',
    options: {
      A: 'Since',
      B: 'Although',
      C: 'Whereas',
      D: 'In spite of',
      E: 'Unless'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Sebep Bağlacı (Since = Because): İletişim koptuğu için görevi iptal etti.',
    trapWarning: 'Görevin iptal edilmesinin doğrudan sebebi iletişimin kopmasıdır.',
    explanation: 'Since = As = Because (-dığı için). İletişim koptuğu için yönetici görevi iptal etti. Doğru cevap A.'
  },
  {
    id: 'm3_q12',
    type: 'grammar',
    title: '12. Soru - İkili Bağlaç (Correlative)',
    question: 'The proposed high-speed railway project was praised _____ for its potential to curtail carbon emissions _____ for connecting neglected rural townships.',
    options: {
      A: 'both / and',
      B: 'neither / or',
      C: 'either / nor',
      D: 'whether / but',
      E: 'so / as'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Both X and Y (Hem X hem Y)',
    trapWarning: 'B şıkkında neither ... nor olmalıdır; C şıkkında either ... or olmalıdır. Eşleşme hatası vardır.',
    explanation: 'Both for curtailing emissions and for connecting townships (Hem emisyonları azalttığı hem kasabaları bağladığı için övüldü). Doğru cevap A.'
  },
  {
    id: 'm3_q13',
    type: 'grammar',
    title: '13. Soru - Edat (Preposition)',
    question: 'Nutritional scientists emphasize that an individual\'s physical resilience is closely dependent _____ balanced dietary intake, especially _____ adolescence.',
    options: {
      A: 'on / during',
      B: 'to / with',
      C: 'with / by',
      D: 'at / throughout',
      E: 'for / upon'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Collocation: Dependent ON + Zaman Aralığı (During adolescence)',
    trapWarning: 'Dependent daima "on/upon" alır.',
    explanation: 'Dependent ON (bağlı olmak) ve DURING adolescence (ergenlik sırasında). Doğru cevap A.'
  },
  {
    id: 'm3_q14',
    type: 'grammar',
    title: '14. Soru - Edat (Preposition)',
    question: 'The World Health Organization warned that developing nations are highly vulnerable _____ vector-borne diseases transmitted _____ tropical mosquitoes.',
    options: {
      A: 'to / by',
      B: 'with / through',
      C: 'for / from',
      D: 'at / with',
      E: 'against / in'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Vulnerable TO + Transmitted BY (Tarafından bulaştırılan)',
    trapWarning: 'Vulnerable daima "to" alır; pasif fiil niteleyen etken özne ise "by" alır.',
    explanation: 'Vulnerable TO (-e karşı savunmasız) ve transmitted BY (-tarafından bulaştırılan). Doğru cevap A.'
  },
  {
    id: 'm3_q15',
    type: 'grammar',
    title: '15. Soru - İlgi Cümleciği (Preposition + Relative Pronoun)',
    question: 'The United Nations established dedicated arbitration tribunals, under _____ international maritime border disputes can be resolved without military confrontation.',
    options: {
      A: 'which',
      B: 'that',
      C: 'whom',
      D: 'whose',
      E: 'what'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Edattan sonra "That" gelmez kuralı: Under which',
    trapWarning: 'Boşluktan önce "under" edatı vardır; edattan sonra ASLA that gelmez. Tribunals cansız/kurum olduğu için which gelir.',
    explanation: 'Under which: bünyesinde/kapsamında sınır anlaşmazlıklarının çözüldüğü mahkemeler. Doğru cevap A.'
  },
  {
    id: 'm3_q16',
    type: 'grammar',
    title: '16. Soru - Devrik Koşul (Inversion)',
    question: '_____ the pilot not noticed the flashing master warning indicator during takeoff roll, the commercial flight could have crashed into the bay.',
    options: {
      A: 'Had',
      B: 'Were',
      C: 'Should',
      D: 'Unless',
      E: 'If only'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Type 3 Devrik: Had + S + not + V3 (Eğer fark etmeseydi)',
    trapWarning: 'Sonuç cümlesi "could have crashed" (Type 3) yapısındadır. Type 3 devriği daima "Had" ile başlar.',
    explanation: 'Had the pilot not noticed = If the pilot had not noticed. Pilot ikazı fark etmeseydi, uçak düşebilirdi. Doğru cevap A.'
  },

  // =========================================================================
  // 17 - 26: CLOZE TEST (2 METİN x 5 SORU)
  // =========================================================================
  {
    id: 'm3_q17',
    type: 'cloze',
    title: '17. Soru - Cloze Test 1 (Bilinç ve Uyku)',
    passage: 'Human cognitive performance is profoundly intertwined with sleep architecture. During rapid eye movement (REM) sleep, the brain actively consolidates newly acquired declarative memories, (17)_____ synaptic connections forged throughout the day. (18)_____ an individual is chronically deprived of restorative rest, neurotransmitter equilibrium in the prefrontal cortex begins to disintegrate. Epidemiological studies demonstrate that sleep deficits contribute (19)_____ an increased risk of clinical depression and cardiovascular disease. (20)_____, modern illuminated digital screens emit blue wavelengths that suppress nocturnal melatonin synthesis. Cognitive specialists strongly recommend (21)_____ electronic devices at least one hour before attempting sleep.',
    question: 'Metindeki (17) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'reinforcing',
      B: 'reinforced',
      C: 'to reinforce',
      D: 'having reinforced',
      E: 'to be reinforced'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Virgül Sonrası Aktif Kısaltma: , reinforcing (güçlendirerek)',
    trapWarning: 'Beyin anıları konsolide ederken sinaptik bağları kendisi aktif olarak güçlendirir (V-ing).',
    explanation: 'Reinforcing: güçlendirerek. Beyin anıları pekiştirir, böylece gün içinde oluşan bağları güçlendirir. Doğru cevap A.'
  },
  {
    id: 'm3_q18',
    type: 'cloze',
    title: '18. Soru - Cloze Test 1',
    question: 'Metindeki (18) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'When',
      B: 'Although',
      C: 'Unless',
      D: 'Even if',
      E: 'Whereas'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Zaman / Koşul Bağlacı: When / If an individual is deprived...',
    trapWarning: 'Birey uykudan mahrum kaldığında beyindeki denge bozulur (neden-sonuç / zaman).',
    explanation: 'When: -dığında, ne zaman ... olursa. Kişi uykudan mahrum kaldığında (When deprived), denge bozulur. Doğru cevap A.'
  },
  {
    id: 'm3_q19',
    type: 'cloze',
    title: '19. Soru - Cloze Test 1',
    question: 'Metindeki (19) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'to',
      B: 'with',
      C: 'from',
      D: 'at',
      E: 'by'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Collocation: Contribute TO (-e katkıda bulunmak / yol açmak)',
    trapWarning: 'Contribute fiili daima "to" edatıyla kullanılır.',
    explanation: 'Contribute TO: -e katkıda bulunmak, yol açmak. "contribute to an increased risk". Doğru cevap A.'
  },
  {
    id: 'm3_q20',
    type: 'cloze',
    title: '20. Soru - Cloze Test 1',
    question: 'Metindeki (20) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'Furthermore',
      B: 'However',
      C: 'Instead',
      D: 'Otherwise',
      E: 'Nonetheless'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Ek Bilgi / Paralellik Bildiren Geçiş Zarfı (Furthermore = Dahası / Üstelik)',
    trapWarning: 'Uykusuzluğun zararlarına ek olarak ekranların melatonin baskılaması anlatılır (negatife negatif ekleme).',
    explanation: 'Furthermore: dahası, üstelik. Önceki zararlara ek olarak ekran ışığının zararını ekler. Doğru cevap A.'
  },
  {
    id: 'm3_q21',
    type: 'cloze',
    title: '21. Soru - Cloze Test 1',
    question: 'Metindeki (21) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'turning off',
      B: 'to turn off',
      C: 'turn off',
      D: 'turned off',
      E: 'having turned off'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Recommend + Gerund (V-ing) Kuralı',
    trapWarning: 'Recommend fiilinden sonra nesne zamiri yoksa fiil DAİMA "V-ing" (turning off) olarak gelir!',
    explanation: 'Recommend + V-ing: "recommend turning off electronic devices" (cihazları kapatmayı tavsiye eder). Doğru cevap A.'
  },
  {
    id: 'm3_q22',
    type: 'cloze',
    title: '22. Soru - Cloze Test 2 (Yenilenebilir Enerji Bataryaları)',
    passage: 'As the global energy infrastructure transitions from hydrocarbon fuels to renewable power, energy storage has emerged as the principal engineering bottleneck. Solar and wind generation are (22)_____ intermittent; energy is harvested abundantly when the sun shines or winds rage, but vanishes during nocturnal calms. Lithium-ion batteries currently dominate the market (23)_____ their high energy density. However, lithium mining incurs severe hydrological degradation in arid extraction zones. Material scientists are actively developing sodium-ion batteries, which rely (24)_____ cheap and globally ubiquitous table salt minerals. (25)_____ commercialized at industrial scale, sodium cells could provide affordable grid storage (26)_____ depleting critical geopolitical mineral reserves.',
    question: 'Metindeki (22) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'inherently',
      B: 'scarcely',
      C: 'artificially',
      D: 'tentatively',
      E: 'superficially'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Sıfatı Niteleyen Zarf Analizi (Doğası gereği / yapısal olarak kesintili)',
    trapWarning: 'Güneş ve rüzgarın kesintili olması geçici veya yapay değil; doğası gereğidir (inherently).',
    explanation: 'Inherently: doğası gereği, esasen (= innately, naturally). Rüzgar ve güneş doğası gereği kesintilidir (inherently intermittent). Doğru cevap A.'
  },
  {
    id: 'm3_q23',
    type: 'cloze',
    title: '23. Soru - Cloze Test 2',
    question: 'Metindeki (23) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'owing to',
      B: 'despite',
      C: 'contrary to',
      D: 'in spite of',
      E: 'regardless of'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Sebep Bildiren Edat: Owing to + Noun Phrase (Yüksek enerji yoğunluğu sebebiyle)',
    trapWarning: 'Lityumun piyasaya hakim olmasının sebebi yüksek enerji yoğunluğudur; zıtlık değil sebep vardır.',
    explanation: 'Owing to: -den dolayı, sebebiyle (= because of, due to). Yüksek enerji yoğunluğu sebebiyle hakimdir. Doğru cevap A.'
  },
  {
    id: 'm3_q24',
    type: 'cloze',
    title: '24. Soru - Cloze Test 2',
    question: 'Metindeki (24) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'on',
      B: 'to',
      C: 'with',
      D: 'for',
      E: 'from'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Collocation: Rely ON (-e dayanmak / güvenmek)',
    trapWarning: 'Rely fiili daima "on" veya "upon" alır.',
    explanation: 'Rely ON: -e dayanmak. "rely on cheap table salt minerals". Doğru cevap A.'
  },
  {
    id: 'm3_q25',
    type: 'cloze',
    title: '25. Soru - Cloze Test 2',
    question: 'Metindeki (25) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'Once',
      B: 'Unless',
      C: 'Although',
      D: 'Before',
      E: 'Lest'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Kısaltılmış Zaman / Koşul Bağlacı: Once commercialized (Ticarileştirildiğinde / bir kez ticarileşince)',
    trapWarning: 'Once + V3 (Once commercialized) = Once they are commercialized.',
    explanation: 'Once: bir kez ... olduğunda / -ince. Endüstriyel ölçekte ticarileştiğinde (Once commercialized) depolama sağlayabilir. Doğru cevap A.'
  },
  {
    id: 'm3_q26',
    type: 'cloze',
    title: '26. Soru - Cloze Test 2',
    question: 'Metindeki (26) numaralı boşluğa en uygun ifadeyi bulunuz.',
    options: {
      A: 'without',
      B: 'by',
      C: 'through',
      D: 'besides',
      E: 'into'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Yoksunluk Bildiren Edat: Without + V-ing (Tüketmeksizin / tüketmeden)',
    trapWarning: 'Sodyum pillerinin avantajı kritik mineralleri tüketmeden ucuz depolama sağlamasıdır.',
    explanation: 'Without: -meksizin, olmadan. Kritik rezervleri tüketmeksizin (without depleting). Doğru cevap A.'
  },

  // =========================================================================
  // 27 - 36: CÜMLE TAMAMLAMA (SENTENCE COMPLETION)
  // =========================================================================
  {
    id: 'm3_q27',
    type: 'sentence_completion',
    title: '27. Soru - Cümle Tamamlama',
    question: 'Although solar panels generate zero direct emissions during electricity production, _____.',
    options: {
      A: 'the mining and refining of silicon and rare earth metals entail considerable ecological damage',
      B: 'they have helped many households to reduce both their energy bills and their carbon footprint',
      C: 'their contribution to lowering urban air pollution has been widely documented by researchers',
      D: 'they are increasingly regarded as one of the cleanest sources of electricity available today',
      E: 'governments in sunny regions have offered generous subsidies to encourage their installation'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Zıtlık Analizi: Sıfır doğrudan emisyon (+) -> Madencilik ekolojik zarar verir (-)',
    trapWarning: 'Although güneş panellerini övdüğü (+) için ana cümle bir dezavantaj (-) vermelidir. B, C, D ve E övgüyü sürdürür; dil bilgisi olarak uysalar da zıtlık kurmazlar.',
    explanation: 'Although (her ne kadar doğrudan emisyon üretmese de), silikon madenciliği ve arıtımı ciddi ekolojik zarara yol açar (A şıkkı).'
  },
  {
    id: 'm3_q28',
    type: 'sentence_completion',
    title: '28. Soru - Cümle Tamamlama',
    question: '_____, neuroscientists have discovered that the adult brain continues generating new neurons throughout life.',
    options: {
      A: 'Contrary to earlier neurological assumptions that brain cellular development ceases after adolescence',
      B: 'Consistent with earlier neurological assumptions that the adult brain is structurally fixed',
      C: 'Despite a large body of evidence that new neurons continue to form throughout adulthood',
      D: 'Owing to the long-standing belief that the number of brain cells declines steadily with age',
      E: 'Just as early anatomists had insisted that no new nerve cells are produced after childhood'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Contrary to (Aksine) Zıtlık Yapısı: Ergenlikten sonra durduğu varsayımının aksine...',
    trapWarning: 'Ana cümle eski görüşü çürütür, bu yüzden giriş bir zıtlık (contrary to) kurmalıdır. Consistent with ve Just as benzerlik bildirir; Despite ise zıtlığı yanlış yere koyar.',
    explanation: 'Contrary to earlier assumptions (ergenlikten sonra gelişimin durduğu yönündeki eski varsayımların aksine), beyin yaşam boyu yeni nöron üretir (A şıkkı).'
  },
  {
    id: 'm3_q29',
    type: 'sentence_completion',
    title: '29. Soru - Cümle Tamamlama',
    question: 'In order to preserve endangered benthic coral formations from destructive bottom trawling, _____.',
    options: {
      A: 'maritime authorities must establish protected reserves where heavy fishing gear is banned',
      B: 'industrial fishing fleets have expanded their operations into deeper and more remote waters',
      C: 'coral formations in deep water grow far more slowly than those found in shallow reefs',
      D: 'scientists have recorded a sharp decline in the diversity of species living on the seabed',
      E: 'bottom trawling has become one of the most profitable methods of commercial fishing'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'In order to preserve (Korumak amacıyla) -> Alınması Gereken Önlem (Must establish)',
    trapWarning: 'C ve D konuyla ilgili gerçekler sunar ama amaç yapısı (In order to) bu amaca ulaşmak için yapılması gereken bir eylem (must establish) ister.',
    explanation: 'Mercanları korumak amacıyla, denizcilik otoriteleri ağır balıkçılık araçlarının yasak olduğu koruma alanları oluşturmalıdır (A şıkkı).'
  },
  {
    id: 'm3_q30',
    type: 'sentence_completion',
    title: '30. Soru - Cümle Tamamlama',
    question: 'Whereas conventional internal combustion engines emit tremendous quantities of toxic pollutants, _____.',
    options: {
      A: 'hydrogen fuel-cell vehicles produce only pure water vapor as their operational exhaust',
      B: 'they also release significant amounts of heat-trapping carbon dioxide into the atmosphere',
      C: 'diesel-powered heavy trucks are responsible for a disproportionate share of urban smog',
      D: 'modern catalytic converters can reduce, though not eliminate, some of these emissions',
      E: 'their efficiency has improved steadily over the past several decades of engineering'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Whereas (Taban Tabana Zıt İki Teknoloji: Zehirli gaz vs Saf su buharı)',
    trapWarning: 'Whereas iki farklı şeyi zıt yönde karşılaştırır. B ve C kirliliği sürdürür, D aynı motorlardan bahseder, E ise konudan sapar. Temiz bir alternatif veren tek şık doğru cevaptır.',
    explanation: 'Konvansiyonel motorlar zehirli gaz yayarken (Whereas engines emit pollutants), hidrojen yakıt hücreli araçlar sadece su buharı üretir (A şıkkı).'
  },
  {
    id: 'm3_q31',
    type: 'sentence_completion',
    title: '31. Soru - Cümle Tamamlama',
    question: 'Archaeologists deployed high-resolution ground-penetrating radar across the ceremonial site _____',
    options: {
      A: 'so that subsurface architectural foundations could be mapped without disturbing fragile historical strata.',
      B: 'even though radar surveys can reveal buried foundations without any need for excavation.',
      C: 'in case earlier excavations had already exposed all the foundations buried at the site.',
      D: 'as if the buried foundations had already been fully mapped by previous expeditions.',
      E: 'so that the fragile historical strata could be removed more quickly by heavy machinery.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'So that + Could (Amaç Bağlacı: Kazmadan haritalayabilsinler diye)',
    trapWarning: 'E şıkkı da so that ile başlar ama amaç mantığa terstir: radar katmanları korumak için kullanılır, hızla kaldırmak için değil. B ise sebebi zıtlık gibi sunar.',
    explanation: 'Arkeologlar yer radarı yerleştirdi; BÖYLECE toprak altı temeller tabakaları bozmadan haritalanabilsin (so that ... could be mapped). Doğru cevap A.'
  },
  {
    id: 'm3_q32',
    type: 'sentence_completion',
    title: '32. Soru - Cümle Tamamlama',
    question: 'Unless governments implement stringent carbon emissions caps within the current decade, _____.',
    options: {
      A: 'low-lying coastal regions will suffer severe and irreversible flooding from rising seas',
      B: 'sea levels along most coastlines will begin to fall within a few decades',
      C: 'coastal cities will be largely protected from the effects of rising seas',
      D: 'global emissions have already started to decline in most industrial nations',
      E: 'coastal regions would have avoided the severe flooding of the past decade'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Unless (Eğer uygulanmazsa) -> Gelecekteki Kaçınılmaz Tehdit (Will suffer)',
    trapWarning: 'Unless = if not. Önlem alınmazsa olumsuz bir gelecek (will suffer) beklenir. B ve C anlamca terstir; D ve E zaman uyumunu bozar.',
    explanation: 'Hükümetler emisyon kotalarını uygulamazsa (Unless governments implement), kıyı şehirleri geri dönüşsüz su baskınlarıyla karşılaşacaktır (A şıkkı).'
  },
  {
    id: 'm3_q33',
    type: 'sentence_completion',
    title: '33. Soru - Cümle Tamamlama',
    question: 'Because the interior temperatures of stellar cores reach tens of millions of degrees, _____.',
    options: {
      A: 'hydrogen nuclei move fast enough to overcome their mutual repulsion and fuse together',
      B: 'the atoms inside them remain too cold and slow-moving to undergo any form of nuclear fusion',
      C: 'solid mineral crusts are able to form and persist across the surfaces of most large stars',
      D: 'spacecraft could in principle land safely on their surfaces using conventional heat shields',
      E: 'nuclear reactions inside stars occur only rarely and release relatively little energy'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Fiziksel Sebep-Sonuç: Sıcaklık milyonlarca dereceye ulaştığı için füzyon gerçekleşir.',
    trapWarning: 'Sebep cümlesi aşırı yüksek sıcaklıktan bahseder. B, C, D ve E bu sıcaklıkla çelişen sonuçlar verir; mantıklı tek sonuç füzyonun gerçekleşebilmesidir.',
    explanation: 'Yıldız çekirdekleri milyonlarca dereceye ulaştığı için, hidrojen çekirdekleri itme kuvvetini yenip füzyona girecek kinetik enerjiye ulaşır (A şıkkı).'
  },
  {
    id: 'm3_q34',
    type: 'sentence_completion',
    title: '34. Soru - Cümle Tamamlama',
    question: '_____, the prolonged drought crippled the agrarian economy of the entire river basin.',
    options: {
      A: 'As regional farmers relied almost exclusively on seasonal precipitation for crop irrigation',
      B: 'Although regional farmers relied almost exclusively on seasonal rainfall for irrigation',
      C: 'As regional farmers had access to extensive networks of reservoirs and deep wells',
      D: 'Even though the drought had been predicted by meteorologists several months earlier',
      E: 'Unless regional farmers had switched to crops that require far less irrigation water'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Sebep Bağlacı (As = Because): Yağmura bağımlı oldukları için kuraklık ekonomiyi felç etti.',
    trapWarning: 'B doğru bilgiyi verir ama Although ile zıtlık kurar; oysa yağmura bağımlılık felcin sebebidir. C sebebi tersine çevirir: kuyusu ve rezervuarı olan çiftçiler bu kadar etkilenmezdi.',
    explanation: 'Bölge çiftçileri sulama için neredeyse tamamen mevsimsel yağışlara bağımlı olduğu için (As farmers relied on precipitation), kuraklık ekonomiyi felç etti (A şıkkı).'
  },
  {
    id: 'm3_q35',
    type: 'sentence_completion',
    title: '35. Soru - Cümle Tamamlama',
    question: 'Much as artificial intelligence models streamline administrative data processing across hospitals, _____.',
    options: {
      A: 'they cannot replicate the nuanced clinical empathy and bedside judgment of experienced human physicians',
      B: 'they have also reduced the time doctors spend completing routine paperwork each day',
      C: 'they are now being adopted by a growing number of hospitals across the world',
      D: 'their speed allows hospital managers to allocate beds and staff more efficiently',
      E: 'they rarely make the clerical errors that tired administrative staff often commit'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Much as = Although (Her ne kadar verileri hızlandırsa da [+] -> İnsan empatisini taklit edemez [-])',
    trapWarning: 'Much as = although. Giriş yapay zekayı övdüğü (+) için ana cümle bir sınırlılık (-) vermelidir. B, C, D ve E övgüyü sürdürür.',
    explanation: 'Yapay zeka veri işlemlerini ne kadar kolaylaştırsa da (Much as AI streamlines), deneyimli hekimlerin empati ve klinik sağduyusunu taklit edemez (A şıkkı).'
  },
  {
    id: 'm3_q36',
    type: 'sentence_completion',
    title: '36. Soru - Cümle Tamamlama',
    question: 'Ever since deep-sea submersibles first documented hydrothermal ecosystems in the late 1970s, _____.',
    options: {
      A: 'marine microbiologists have recognized that complex life can flourish without photosynthetic sunlight',
      B: 'marine microbiologists recognized that complex life could flourish without sunlight',
      C: 'marine microbiologists will need to reconsider the conditions under which life can exist',
      D: 'marine microbiologists had assumed that all deep-sea life depended on photosynthesis',
      E: 'marine microbiologists are studying how vent organisms survive without any sunlight'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Ever since + V2 -> Present Perfect (Have recognized)',
    trapWarning: 'Bütün şıklar anlamca makuldür; soru zaman uyumunu ölçer. Ever since + geçmiş zaman, ana cümlede present perfect (have recognized) ister.',
    explanation: 'Denizaltılar hidrotermal ekosistemleri belgelediğinden beri (Ever since submersibles documented), biyologlar karmaşık yaşamın güneş ışığı olmadan da gelişebileceğini kabul etmiştir (A şıkkı).'
  },

  // =========================================================================
  // 37 - 42: ÇEVİRİ SORULARI (TRANSLATION: 3 EN-TR, 3 TR-EN)
  // =========================================================================
  {
    id: 'm3_q37',
    type: 'translation_en_tr',
    title: '37. Soru - İngilizce-Türkçe Çeviri',
    question: 'Climate scientists emphasize that preserving tropical rainforests is essential not only for conserving global biodiversity but also for mitigating planetary carbon accumulation.',
    options: {
      A: 'İklim bilimciler, tropikal yağmur ormanlarını korumanın yalnızca küresel biyoçeşitliliği muhafaza etmek için değil, aynı zamanda gezegensel karbon birikimini azaltmak için de elzem olduğunu vurgulamaktadır.',
      B: 'İklim bilimciler, tropikal yağmur ormanlarını korumanın küresel biyoçeşitliliği muhafaza etmekten çok gezegensel karbon birikimini azaltmak için elzem olduğunu vurgulamaktadır.',
      C: 'İklim bilimciler, tropikal yağmur ormanlarını korumanın küresel biyoçeşitliliği muhafaza etmek için elzem olduğunu, ancak gezegensel karbon birikimini azaltmadığını vurgulamaktadır.',
      D: 'İklim bilimciler, gezegensel karbon birikimini azaltmanın yalnızca tropikal yağmur ormanlarını değil, aynı zamanda küresel biyoçeşitliliği korumak için de elzem olduğunu vurgulamaktadır.',
      E: 'İklim bilimciler, tropikal yağmur ormanlarını korumanın küresel biyoçeşitliliği muhafaza etmek ya da gezegensel karbon birikimini azaltmak için yeterli olmayabileceğini vurgulamaktadır.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Not only ... but also (Yalnızca ... değil, aynı zamanda ...) & "emphasize that" (vurgulamaktadır)',
    trapWarning: '"not only ... but also" iki amacı eşit ağırlıkta verir. B bir karşılaştırma (-den çok) kurar, C ikinci amacı olumsuzlar, D öznesi ile nesneyi yer değiştirir, E ise anlamı tersine çevirir.',
    explanation: 'Özne: Climate scientists, Ana Fiil: emphasize that (vurgulamaktadır), Bağlaç: not only ... but also (yalnızca ... değil aynı zamanda). Doğru cevap A.'
  },
  {
    id: 'm3_q38',
    type: 'translation_en_tr',
    title: '38. Soru - İngilizce-Türkçe Çeviri',
    question: 'Although early historians considered the Roman Empire to be an impregnable superpower, recent archaeological excavations reveal that internal economic decay weakened its frontiers long before nomadic invasions.',
    options: {
      A: 'İlk tarihçiler Roma İmparatorluğu\'nu zapt edilemez bir süper güç olarak görmüş olsalar da, son kazılar iç ekonomik çöküşün sınırlarını göçebe istilalarından çok önce zayıflattığını ortaya koymaktadır.',
      B: 'Son kazılar iç ekonomik çöküşün sınırlarını göçebe istilalarından çok önce zayıflattığını ortaya koysa da, ilk tarihçiler Roma İmparatorluğu\'nu zapt edilemez bir süper güç olarak görmeye devam etmektedir.',
      C: 'İlk tarihçiler Roma İmparatorluğu\'nu zapt edilemez bir süper güç olarak görmüş olsalar da, son kazılar göçebe istilalarının iç ekonomik çöküşü tetikleyerek sınırlarını zayıflattığını ortaya koymaktadır.',
      D: 'İlk tarihçiler Roma İmparatorluğu\'nu zapt edilemez bir süper güç olarak gördükleri için, son kazılar iç ekonomik çöküşün sınırlarını göçebe istilalarından çok önce zayıflattığını ortaya koymaktadır.',
      E: 'İlk tarihçiler Roma İmparatorluğu\'nu zapt edilemez bir süper güç olarak görmüş olsalar da, son kazılar iç ekonomik çöküşün sınırlarını göçebe istilalarından hemen sonra zayıflattığını ortaya koymaktadır.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Although (olsalar da) & "reveal that" (ortaya koymaktadır)',
    trapWarning: 'B zıtlığı yanlış cümleye taşır, D zıtlığı sebebe çevirir. C sebep-sonucu tersine çevirir (çöküşü istilalar tetiklemiş gibi), E ise "long before" ifadesini "hemen sonra" diye çevirir.',
    explanation: 'Although considered... (görmüş olsalar da), recent excavations reveal... (kazılar ortaya koymaktadır). Kusursuz karşılık A şıkkıdır.'
  },
  {
    id: 'm3_q39',
    type: 'translation_en_tr',
    title: '39. Soru - İngilizce-Türkçe Çeviri',
    question: 'Epidemiologists warn that unless global vaccination distribution is handled equitably, new viral mutations could arise in under-immunized populations and threaten international health security.',
    options: {
      A: 'Epidemiyologlar, küresel aşı dağıtımı adil yapılmadıkça, yeterince aşılanmamış nüfuslarda yeni viral mutasyonların ortaya çıkıp uluslararası sağlık güvenliğini tehdit edebileceği konusunda uyarıyor.',
      B: 'Epidemiyologlar, küresel aşı dağıtımı adil yapılırsa, yeterince aşılanmamış nüfuslarda yeni viral mutasyonların ortaya çıkıp uluslararası sağlık güvenliğini tehdit edebileceği konusunda uyarıyor.',
      C: 'Epidemiyologlar, küresel aşı dağıtımı adil yapılmadığı için, yeterince aşılanmamış nüfuslarda yeni viral mutasyonların ortaya çıkıp uluslararası sağlık güvenliğini tehdit ettiği konusunda uyarıyor.',
      D: 'Epidemiyologlar, küresel aşı dağıtımı adil yapılmadıkça, tamamen aşılanmış nüfuslarda yeni viral mutasyonların ortaya çıkıp uluslararası sağlık güvenliğini tehdit edebileceği konusunda uyarıyor.',
      E: 'Epidemiyologlar, yeterince aşılanmamış nüfuslarda ortaya çıkan yeni viral mutasyonlar uluslararası sağlık güvenliğini tehdit etmedikçe küresel aşı dağıtımının adil yapılamayacağı konusunda uyarıyor.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Unless (yapılmadıkça) & "could arise ... and threaten" (ortaya çıkabilir ve tehdit edebilir)',
    trapWarning: 'unless = -medikçe. B olumsuzluğu kaybeder, C koşulu gerçekleşmiş bir sebebe ve could modalını kesinliğe çevirir. D "under-immunized" ifadesini "tamamen aşılanmış" diye çevirir, E ise koşul ile sonucu yer değiştirir.',
    explanation: 'Unless handled equitably: adil yapılmadıkça. Could arise and threaten: ortaya çıkabilir ve tehdit edebilir. Doğru cevap A.'
  },
  {
    id: 'm3_q40',
    type: 'translation_tr_en',
    title: '40. Soru - Türkçe-İngilizce Çeviri',
    question: 'Yapay zekanın tıbbi görüntüleri analiz etmedeki başarısı kanıtlanmış olsa da, teşhis sürecinde hekimlerin mesleki deneyimi hala vazgeçilmez kabul edilmektedir.',
    options: {
      A: 'Although the success of artificial intelligence in analyzing medical images has been proven, the professional experience of physicians is still considered indispensable in the diagnostic process.',
      B: 'Since the success of artificial intelligence in analyzing medical images has been proven, the professional experience of physicians is no longer considered indispensable in the diagnostic process.',
      C: 'Although the success of artificial intelligence in analyzing medical images has not yet been proven, the professional experience of physicians is still considered indispensable in diagnosis.',
      D: 'Although the professional experience of physicians has been proven in analyzing medical images, artificial intelligence is still considered indispensable in the diagnostic process.',
      E: 'Although the success of artificial intelligence in analyzing medical images has been proven, the professional experience of physicians was once considered indispensable in diagnosis.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Türkçe "kanıtlanmış olsa da" = Although the success has been proven & "still considered indispensable"',
    trapWarning: 'B zıtlığı sebebe çevirir ve sonucu tersine çevirir. C "kanıtlanmış" ifadesini olumsuzlar, D yapay zeka ile hekimin yerini değiştirir, E ise "hâlâ" yerine "bir zamanlar" diyerek zamanı bozar.',
    explanation: 'Başarısı kanıtlanmış olsa da: Although the success has been proven... Hala vazgeçilmez kabul edilmektedir: is still considered indispensable. Doğru cevap A.'
  },
  {
    id: 'm3_q41',
    type: 'translation_tr_en',
    title: '41. Soru - Türkçe-İngilizce Çeviri',
    question: 'Sanayi devriminden bu yana atmosferdeki sera gazı yoğunluğunun sürekli artması, küresel iklim krizinin başlıca nedeni olarak görülmektedir.',
    options: {
      A: 'The continuous increase in atmospheric greenhouse gas concentrations since the Industrial Revolution is regarded as the primary cause of the global climate crisis.',
      B: 'The continuous increase in atmospheric greenhouse gas concentrations since the Industrial Revolution is regarded as a direct result of the global climate crisis.',
      C: 'The continuous increase in atmospheric greenhouse gas concentrations before the Industrial Revolution is regarded as the primary cause of the global climate crisis.',
      D: 'The occasional increase in atmospheric greenhouse gas concentrations since the Industrial Revolution is regarded as one of several minor causes of the climate crisis.',
      E: 'The continuous increase in atmospheric greenhouse gas concentrations since the Industrial Revolution was once regarded as the primary cause of the global climate crisis.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Özne-Yüklem: "The continuous increase ... is regarded as the primary cause"',
    trapWarning: 'B sebep-sonucu tersine çevirir, C "since" yerine "before" der. D "sürekli" ve "başlıca" kelimelerini yanlış verir, E ise bugünkü görüşü geçmişe taşır (was once regarded).',
    explanation: 'Sera gazı yoğunluğunun sürekli artması (The continuous increase in concentrations), başlıca nedeni olarak görülmektedir (is regarded as the primary cause). Doğru cevap A.'
  },
  {
    id: 'm3_q42',
    type: 'translation_tr_en',
    title: '42. Soru - Türkçe-İngilizce Çeviri',
    question: 'Gelişmiş ülkeler yenilenebilir enerji teknolojilerine yeterli finansman sağlamadıkça, gelişmekte olan ekonomilerin kömüre bağımlılığı devam edecektir.',
    options: {
      A: 'Unless developed countries provide adequate financing for renewable energy technologies, the reliance of developing economies on coal will continue.',
      B: 'If developed countries provide adequate financing for renewable energy technologies, the reliance of developing economies on coal will continue.',
      C: 'Unless developing countries provide adequate financing for renewable energy technologies, the reliance of developed economies on coal will continue.',
      D: 'Because developed countries have not provided adequate financing for renewable energy technologies, developing economies have stopped relying on coal.',
      E: 'Unless developed countries provide adequate financing for renewable energy technologies, the reliance of developing economies on coal will soon end.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: '"-sağlamadıkça" = Unless & "reliance on coal will continue"',
    trapWarning: '"sağlamadıkça" = Unless. B olumsuzluğu kaybeder, C gelişmiş ve gelişmekte olan ülkelerin yerini değiştirir. D koşulu sebebe çevirir ve sonucu tersine çevirir, E ise "devam edecektir" yerine "sona erecektir" der.',
    explanation: 'Finansman sağlamadıkça: Unless developed countries provide adequate financing... Kömüre bağımlılık devam edecektir: reliance on coal will continue. Doğru cevap A.'
  },

  // =========================================================================
  // 43 - 62: PARAGRAF SORULARI (5 PARAGRAF x 4 SORU = 20 SORU)
  // =========================================================================
  // PARAGRAF 1: Antik Maya Hidrolojisi (43-46)
  {
    id: 'm3_q43',
    type: 'reading',
    title: '43. Soru - Paragraf 1 (Arkeoloji & Hidroloji)',
    passage: 'The lowland rainforests of the Yucatán Peninsula presented severe environmental constraints to ancient Maya civilization. Unlike the perennial river systems that nourished ancient Egypt and Mesopotamia, the northern Maya lowlands possessed a karst limestone geology that allowed rainwater to percolate instantly into deep subterranean caverns, leaving the surface arid for half the year. To sustain urban centers numbering tens of thousands of residents, Maya civil engineers devised massive artificial water reservoirs known as aguadas. At major cities like Tikal, monumental plaster-lined plazas were sloped with extreme precision to channel monsoon downpours into filtered settling tanks. Sedimentary core analyses reveal that Maya hydrologists utilized quartz sand and zeolite minerals imported from mountainous regions to purify water supplies. This sophisticated water management infrastructure allowed the Maya to flourish in an unforgiving tropical ecology for millennia until prolonged megadroughts overwhelmed their storage capacity.',
    question: 'According to the passage, the primary hydrological challenge facing the ancient Maya was that _____',
    options: {
      A: 'rainwater quickly drained through the limestone into underground caves.',
      B: 'the rivers of the region dried up for half the year during the dry season.',
      C: 'monsoon rains were too heavy for the city plazas to channel effectively.',
      D: 'the water in subterranean caverns was too salty for urban consumption.',
      E: 'the mountains blocked rainfall from reaching the northern lowlands.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Doğrudan Bilgi: Karstik kireçtaşı arazisinin suyu hemen yer altına sızdırması',
    trapWarning: 'B tuzağı: metin bölgede sürekli akan nehir olmadığını söyler, kuruyan nehirden bahsetmez. C ve D metinde geçen kelimeleri (monsoon, caverns) kullanır ama metnin söylemediği bir sorun uydurur.',
    explanation: 'Metne göre zorluk: "karst limestone geology allowed rainwater to percolate instantly into subterranean caverns, leaving surface arid". Doğru cevap A.'
  },
  {
    id: 'm3_q44',
    type: 'reading',
    title: '44. Soru - Paragraf 1',
    question: 'It is stated in the passage that the city plazas of Tikal were specifically designed to _____',
    options: {
      A: 'capture monsoon rainfall and channel it directly into filtration and storage systems.',
      B: 'drain monsoon floods away from the residential districts of the city.',
      C: 'collect quartz sand and zeolite carried down by seasonal rains.',
      D: 'store rainwater directly on the plaza surface during the dry season.',
      E: 'allow rainwater to soak into the limestone beneath the city.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Plazaların Amacı: Yağmur suyunu yakalayıp filtrelere yönlendirmek',
    trapWarning: 'Metin: "sloped ... to channel monsoon downpours into filtered settling tanks". B suyu uzaklaştırmaktan bahseder (tersi), D suyu plazada tutar, E ise karst sorununu çözüm gibi sunar.',
    explanation: 'Tikal meydanları: muson yağmurlarını yakalayıp arıtma ve depolama tanklarına yönlendirmek için hassas bir eğimle inşa edilmiştir. Doğru cevap A.'
  },
  {
    id: 'm3_q45',
    type: 'reading',
    title: '45. Soru - Paragraf 1',
    question: 'The passage mentions the use of quartz sand and zeolite minerals to illustrate that the Maya _____',
    options: {
      A: 'purified their water with materials brought from distant regions.',
      B: 'traded actively with mountain communities for building materials.',
      C: 'used imported minerals to line and seal their reservoir walls.',
      D: 'lacked the local resources needed to build large reservoirs.',
      E: 'relied mainly on mountain springs rather than collected rainwater.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Örnekleme Amacı: Gelişmiş su arıtma teknolojisi',
    trapWarning: 'Minerallerin amacı "to purify water supplies". B ticareti, C sızdırmazlığı (metinde plaster geçer, mineral değil), D eksikliği öne çıkarır; hepsi metne yakın ama amaç yanlıştır.',
    explanation: 'Kuartz ve zeolit mineralleri: Mayaların uzak bölgelerden malzeme getirerek ileri düzey su arıtma teknolojileri geliştirdiğini gösterir. Doğru cevap A.'
  },
  {
    id: 'm3_q46',
    type: 'reading',
    title: '46. Soru - Paragraf 1',
    question: 'Which factor ultimately contributed to the breakdown of the Maya hydrological systems?',
    options: {
      A: 'Long droughts that exceeded their storage capacity.',
      B: 'Population growth that outpaced the size of the reservoirs.',
      C: 'Contamination of the filtration tanks by imported minerals.',
      D: 'Heavy monsoon rains that damaged the plaster-lined plazas.',
      E: 'The loss of trade links with the mountainous regions.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Son Cümle Analizi: Sistemin Çöküş Nedeni',
    trapWarning: 'Son cümle: "until prolonged megadroughts overwhelmed their storage capacity". B kapasiteyi doğru anar ama nedeni nüfusa bağlar; C, D, E metindeki unsurları çöküş nedeni gibi gösterir.',
    explanation: 'Sistemin çöküş sebebi: su depolama kapasitelerini aşan uzun süreli şiddetli mega-kuraklıklardır (A şıkkı).'
  },

  // PARAGRAF 2: Mikrobiyom ve Beyin Ekseni (47-50)
  {
    id: 'm3_q47',
    type: 'reading',
    title: '47. Soru - Paragraf 2 (Tıp & Nöroloji)',
    passage: 'Over the past two decades, medical science has recognized that the human body is not a solitary biological entity, but rather a complex holobiont populated by trillions of symbiotic microorganisms. The vast majority of these microbes reside in the gastrointestinal tract, where they perform essential metabolic functions, including synthesizing vitamins and fermenting indigestible dietary fibers into short-chain fatty acids. However, the most revolutionary revelation is the gut-brain axis—a bidirectional biochemical communication superhighway linking the enteric nervous system with the central nervous system. Gut bacteria synthesize approximately ninety percent of the body’s peripheral serotonin, along with other neuroactive molecules like gamma-aminobutyric acid (GABA). By stimulating the vagus nerve and modulating systemic immune inflammation, the microbial flora directly influences emotional resilience, anxiety phenotypes, and neurodegenerative risks.',
    question: 'According to the passage, the gut-brain axis is significant because it _____',
    options: {
      A: 'links gut microbes to the functioning of the brain in both directions.',
      B: 'allows the brain to control which microbes live in the gut.',
      C: 'explains how gut bacteria synthesize vitamins and fatty acids.',
      D: 'shows that most serotonin used by the brain is made in the gut.',
      E: 'replaces the vagus nerve as the main route between gut and brain.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Gut-Brain Axis Tanımı: İki yönlü iletişim otoyolu',
    trapWarning: 'Anahtar: "bidirectional" (iki yönlü). B tek yön verir, C ekseni değil metabolik işlevi anlatır, D "peripheral" serotonin\'i beyne mal eder, E vagus sinirini dışlar.',
    explanation: 'Gut-brain axis önemi: bağırsak mikroplarının sinir sistemini ve beyin fonksiyonlarını etkilediği iki yönlü bir iletişim kanalı olmasıdır. Doğru cevap A.'
  },
  {
    id: 'm3_q48',
    type: 'reading',
    title: '48. Soru - Paragraf 2',
    question: 'It is stated in the text that gut bacteria produce neuroactive substances that can _____',
    options: {
      A: 'affect mood and anxiety by acting on the vagus nerve and immune system.',
      B: 'replace the serotonin normally produced by the brain.',
      C: 'convert dietary fibre into short-chain fatty acids.',
      D: 'prevent neurodegenerative diseases from developing.',
      E: 'slow down the communication between gut and brain.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Nöroaktif Maddelerin Etkisi: Vagus sinirini uyarır ve enflamasyonu düzenler',
    trapWarning: 'C metinde geçer ama mikropların metabolik işlevidir, nöroaktif maddelerin değil. D aşırı genellemedir: metin "neurodegenerative risks" üzerinde etki der, önler demez.',
    explanation: 'Bağırsak bakterileri vagus sinirini uyarır ve bağışıklık enflamasyonunu düzenler (A şıkkı).'
  },
  {
    id: 'm3_q49',
    type: 'reading',
    title: '49. Soru - Paragraf 2',
    question: 'The term "holobiont" in the passage refers to _____',
    options: {
      A: 'a host organism together with its symbiotic microbes.',
      B: 'the population of bacteria living in the digestive tract.',
      C: 'a single organism that lives independently of microbes.',
      D: 'the communication network between the gut and the brain.',
      E: 'a microorganism that lives inside a larger host.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Terim Açıklaması: Holobiont (Konakçı ve mikropların ortak organizması)',
    trapWarning: 'Holobiont = konakçı + mikroplar, bütün olarak. B ve E yalnızca mikrop tarafını verir, C tanımın tersidir, D ise gut-brain axis kavramıyla karıştırır.',
    explanation: 'Holobiont: konak canlı ile onunla yaşayan trilyonlarca simbiyotik mikroorganizmanın oluşturduğu ortak biyolojik varlıktır. Doğru cevap A.'
  },
  {
    id: 'm3_q50',
    type: 'reading',
    title: '50. Soru - Paragraf 2',
    question: 'What can be inferred about serotonin from the passage?',
    options: {
      A: 'Most of the body\'s peripheral supply comes from gut bacteria.',
      B: 'The brain depends entirely on gut bacteria for its serotonin.',
      C: 'It is the only neuroactive molecule produced in the gut.',
      D: 'Gut bacteria produce it only when stimulated by the vagus nerve.',
      E: 'It reduces immune inflammation throughout the body.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Çıkarım: Serotoninin büyük kısmının bağırsakta üretilmesi',
    trapWarning: 'Metin %95 "peripheral" serotonin der. B "entirely" ve beyin diyerek aşırı genelleme yapar; C GABA\'yı yok sayar; D ve E metindeki ilişkileri karıştırır.',
    explanation: 'Serotonin hakkında çıkarım: Vücuttaki periferik serotoninin %95 gibi ezici bir çoğunluğu beyinde değil bağırsakta üretilir (A şıkkı).'
  },

  // PARAGRAF 3: Kuantum Kriptografi (51-54)
  {
    id: 'm3_q51',
    type: 'reading',
    title: '51. Soru - Paragraf 3 (Fizik & Kriptografi)',
    passage: 'Conventional digital encryption standards, such as RSA, rely on the mathematical difficulty of factoring enormous prime numbers using classical binary computers. However, the advent of fault-tolerant quantum computers threatens to render these algorithms utterly obsolete. Quantum computing leverages quantum mechanical superposition and entanglement to execute Shor\'s algorithm, cracking RSA encryptions in minutes rather than millennia. In response, cryptographers are deploying Quantum Key Distribution (QKD). Unlike mathematical encryption, QKD derives its security from the fundamental laws of quantum physics. Information is encoded onto individual photons in polarized quantum states. According to the Heisenberg uncertainty principle, any unauthorized attempt by an eavesdropper to intercept or measure a photon inevitably alters its quantum state, introducing detectable errors that alert the communicators immediately. Thus, QKD offers theoretically unbreakable security.',
    question: 'Classical encryption systems like RSA are vulnerable to quantum computing because _____',
    options: {
      A: 'quantum computers can factor huge primes far faster.',
      B: 'RSA keys can be intercepted while they travel as photons.',
      C: 'classical computers will soon be unable to run RSA at all.',
      D: 'quantum computers can detect every eavesdropping attempt.',
      E: 'RSA was never mathematically difficult to break.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Kuantumun RSA\'yı Kırma Mekanizması: Shor algoritması ve asal çarpanlar',
    trapWarning: 'B ve D, QKD paragrafındaki bilgileri RSA\'ya taşır. C abartılı bir sonuç, E ise metinle çelişir: RSA klasik bilgisayarlar için zordur ("millennia").',
    explanation: 'Kuantum bilgisayarlar asal çarpanlara ayırma işlemini klasik bilgisayarlardan katbekat hızlı gerçekleştirir (A şıkkı).'
  },
  {
    id: 'm3_q52',
    type: 'reading',
    title: '52. Soru - Paragraf 3',
    question: 'According to the passage, Quantum Key Distribution (QKD) differs from conventional encryption because QKD _____',
    options: {
      A: 'relies on the laws of physics instead of mathematical difficulty.',
      B: 'uses longer prime numbers than RSA does.',
      C: 'can be run only on fault-tolerant quantum computers.',
      D: 'prevents eavesdroppers from measuring photons.',
      E: 'uses Shor\'s algorithm to encode information.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'QKD ile Klasik Arasındaki Temel Fark',
    trapWarning: 'D ince tuzaktır: QKD dinlemeyi engellemez, fark edilmesini sağlar. B matematik temelli düşünceyi sürdürür, E ise Shor algoritmasını saldırı yerine koruma gibi sunar.',
    explanation: 'Fark: QKD güvenliğini matematiksel zorluktan değil, kuantum fiziğinin temel yasalarından alır (A şıkkı).'
  },
  {
    id: 'm3_q53',
    type: 'reading',
    title: '53. Soru - Paragraf 3',
    question: 'How do users of QKD know if an unauthorized eavesdropper is intercepting their communication?',
    options: {
      A: 'Measuring a photon changes its state and produces detectable errors.',
      B: 'The intercepted photons stop reaching the receiver altogether.',
      C: 'The eavesdropper must first crack the key with Shor\'s algorithm.',
      D: 'Each photon is encrypted with an RSA key that reveals tampering.',
      E: 'The polarization of all photons is reset automatically.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Casus Girişimi Nasıl Tespit Edilir? Fotonun durumunun bozulması',
    trapWarning: 'Heisenberg: ölçüm durumu değiştirir ve hata üretir. B fotonun kaybolduğunu söyler (metin değişir der), C ve D konuyu klasik şifrelemeye kaydırır.',
    explanation: 'Casus tespiti: Fotonu ölçmeye çalışmak onun kuantum durumunu bozar ve hemen tespit edilen hatalar üretir (A şıkkı).'
  },
  {
    id: 'm3_q54',
    type: 'reading',
    title: '54. Soru - Paragraf 3',
    question: 'The author concludes that Quantum Key Distribution _____',
    options: {
      A: 'offers security that is, in theory, unbreakable.',
      B: 'will soon replace all mathematical encryption.',
      C: 'is already used in most commercial networks.',
      D: 'can resist quantum attacks only in the short term.',
      E: 'is secure only as long as RSA remains unbroken.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Sonuç Çıkarımı: "offers theoretically unbreakable security"',
    trapWarning: 'Son cümle: "theoretically unbreakable security". B ve C metinde olmayan bir yaygınlık iddiasıdır; D ve E ise güvenliği sınırlayarak metinle çelişir.',
    explanation: 'Yazarın nihai yargısı: QKD fark edilmeden kırılması teorik olarak imkansız bir güvenlik sağlar (A şıkkı).'
  },

  // PARAGRAF 4: Plastik Kirliliği ve Deniz Canlıları (55-58)
  {
    id: 'm3_q55',
    type: 'reading',
    title: '55. Soru - Paragraf 4 (Çevre Bilimi)',
    passage: 'Since the mass commercialization of synthetic polymers in the mid-twentieth century, plastic pollution has permeated every aquatic ecological zone, from Arctic sea ice to the abyssal depths of the Mariana Trench. Because petroleum-based plastics are resilient to biological decay, they do not biodegrade; rather, ultraviolet radiation and wave abrasion fragment macroplastics into microscopic particulates known as microplastics. These particles act as chemical sponges, adsorbing hydrophobic organic toxins like polychlorinated biphenyls (PCBs) from the ambient marine environment. Filter-feeding marine fauna, including zooplankton, bivalves, and baleen whales, inadvertently ingest microplastics, mistaking them for organic prey. The physical blockage of digestive tracts, combined with the biochemical leaching of endocrine-disrupting additives like phthalates, impairs reproductive fecundity and induces chronic metabolic toxicity. Because microplastics bioaccumulate up the trophic pyramid, top apex predators and human seafood consumers increasingly absorb these persistent contaminants.',
    question: 'According to the passage, macroplastics in the ocean _____',
    options: {
      A: 'are broken into tiny pieces by sunlight and waves.',
      B: 'slowly biodegrade into smaller organic particles.',
      C: 'sink to the deepest parts of the ocean floor.',
      D: 'absorb toxins before breaking into smaller pieces.',
      E: 'are mostly swallowed by filter-feeding animals.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Plastiğin Parçalanma Süreci: Güneş ışığı ve dalga aşınması',
    trapWarning: 'B tuzağı: metin plastiklerin "do not biodegrade" olduğunu açıkça söyler. D sıralamayı ters çevirir: toksinleri emen mikroplastiklerdir. E ise mikroplastiğe ait bilgiyi makroplastiğe uygular.',
    explanation: 'Makroplastikler: güneşin ultraviyole radyasyonu ve dalga aşınmasıyla mikroskobik parçalara (mikroplastiklere) ayrılır (A şıkkı).'
  },
  {
    id: 'm3_q56',
    type: 'reading',
    title: '56. Soru - Paragraf 4',
    question: 'It is stated in the passage that microplastics in seawater are dangerous partly because they _____',
    options: {
      A: 'soak up toxins from the water and carry them into animals.',
      B: 'release PCBs that were added to them during manufacturing.',
      C: 'dissolve slowly and change the chemistry of seawater.',
      D: 'attract filter-feeding animals with their bright colours.',
      E: 'block sunlight from reaching marine organisms.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Mikroplastiğin Tehlikesi: Toksin süngeri gibi çalışması',
    trapWarning: 'B ince tuzaktır: PCB\'ler çevreden emilir; üretimde eklenen katkılar ise ftalatlardır. D metinde olmayan bir neden uydurur (hayvanlar onları av sanır).',
    explanation: 'Tehlike: mikroplastiklerin sudaki zehirli kimyasalları sünger gibi emip canlıların bünyesine taşımasıdır (A şıkkı).'
  },
  {
    id: 'm3_q57',
    type: 'reading',
    title: '57. Soru - Paragraf 4',
    question: 'The passage suggests that the ingestion of microplastics by marine animals causes _____',
    options: {
      A: 'blocked digestion and exposure to hormone-disrupting additives.',
      B: 'starvation because animals stop hunting their natural prey.',
      C: 'immediate death in most filter-feeding species.',
      D: 'higher fertility caused by endocrine-disrupting chemicals.',
      E: 'damage only to the largest animals at the top of the food chain.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Canlılardaki Zararlar: Sindirim tıkanması ve hormon bozucular',
    trapWarning: 'D yönü tersine çevirir: metin üremenin azaldığını ("impairs fecundity") söyler. C ve E aşırı genellemedir; metin kronik etkiden ve tüm besin zincirinden bahseder.',
    explanation: 'Zararlar: sindirim kanalının tıkanması ve hormon bozucu kimyasalların vücuda sızmasıdır (A şıkkı).'
  },
  {
    id: 'm3_q58',
    type: 'reading',
    title: '58. Soru - Paragraf 4',
    question: 'The term "bioaccumulate" in the passage implies that contaminants _____',
    options: {
      A: 'become more concentrated at each higher level of the food chain.',
      B: 'spread evenly to all animals living in the same habitat.',
      C: 'affect predators only after the contaminated prey has died.',
      D: 'collect mainly in the bodies of small filter-feeding animals.',
      E: 'break down gradually as they pass from prey to predator.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Kavram Tanımı: Bioaccumulate (Besin zincirinde birikerek yoğunlaşmak)',
    trapWarning: '"Bioaccumulate up the trophic pyramid": yukarı çıktıkça yoğunlaşır. B eşit dağılım der, D birikimi alt basamakta bırakır, E ise tam tersini söyler.',
    explanation: 'Bioaccumulate: toksinlerin besin zincirinde alt basamaktan üst basamağa geçtikçe yoğunlaşarak artması anlamına gelir (A şıkkı).'
  },

  // PARAGRAF 5: Dil Edinimi ve Erken Çocukluk (59-62)
  {
    id: 'm3_q59',
    type: 'reading',
    title: '59. Soru - Paragraf 5 (Dilbilim & Bilişsel Gelişim)',
    passage: 'Human language acquisition in early childhood represents one of the most astonishing feats of cognitive neurology. Without formal pedagogical instruction, human infants effortlessly master intricate phonological categories, hierarchical syntactical rules, and semantic subtleties of their native tongue by age four. Pioneering linguist Noam Chomsky proposed the concept of Universal Grammar, positing that human brains are genetically pre-wired with an innate Language Acquisition Device (LAD) that constrains grammatical possibilities. Contemporary neuroimaging supports this biological preparedness, revealing that specialized left-hemispheric cortical regions—notably Broca\'s and Wernicke\'s areas—exhibit rapid structural synaptic pruning in response to auditory speech exposure. However, developmental psycholinguists emphasize the critical importance of a "critical period." If a child is deprived of linguistic exposure during early neurodevelopment due to profound isolation or untreated auditory impairment, the neural circuitry required for fluent syntactic processing permanently atrophies, making subsequent native-level linguistic competence biologically unattainable.',
    question: 'According to Chomsky’s theory of Universal Grammar, human children learn language effortlessly because _____',
    options: {
      A: 'their brains are born with a built-in capacity for grammar.',
      B: 'they hear a large amount of speech during the critical period.',
      C: 'all human languages share the same basic vocabulary.',
      D: 'their parents correct their grammatical mistakes constantly.',
      E: 'Broca\'s area is fully developed at birth.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Chomsky\'nin Görüşü: Doğuştan gelen genetik dil kapasitesi (LAD)',
    trapWarning: 'B tuzağı metindeki başka bir görüşten (kritik dönem) gelir; soru özellikle Chomsky\'nin açıklamasını sorar. E ise metinle çelişir: bu alanlar konuşmaya maruz kaldıkça gelişir.',
    explanation: 'Chomsky\'ye göre: insan beyni doğuştan gelen ve genetik olarak belirlenmiş bir dil edinim mekanizmasına (LAD) sahiptir (A şıkkı).'
  },
  {
    id: 'm3_q60',
    type: 'reading',
    title: '60. Soru - Paragraf 5',
    question: 'Neuroimaging studies mentioned in the passage indicate that speech exposure _____',
    options: {
      A: 'triggers synaptic pruning in specialized left-hemisphere areas.',
      B: 'increases the number of synapses throughout the whole brain.',
      C: 'is needed for Broca\'s area to develop in the right hemisphere.',
      D: 'has little effect until the child reaches age four.',
      E: 'replaces the role of the innate Language Acquisition Device.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Nörogörüntüleme Bulgusu: Sol yarımküredeki sinaptik budanma',
    trapWarning: 'Pruning budama demektir, artış değil: B bu yüzden yanlıştır. C yarım küreyi, D zamanı değiştirir; E ise metindeki "supports this biological preparedness" ifadesiyle çelişir.',
    explanation: 'Nörogörüntüleme: konuşmaya maruz kalmanın beynin sol yarımküresindeki uzmanlaşmış alanlarda sinaptik budanmayı tetiklediğini gösterir (A şıkkı).'
  },
  {
    id: 'm3_q61',
    type: 'reading',
    title: '61. Soru - Paragraf 5',
    question: 'The passage highlights the "critical period" hypothesis to demonstrate that _____',
    options: {
      A: 'children must hear language early in life to reach full fluency.',
      B: 'Universal Grammar cannot fully explain how children learn language.',
      C: 'older children learn grammar faster than younger ones.',
      D: 'hearing loss permanently prevents all language learning.',
      E: 'formal instruction is necessary after early childhood.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Critical Period (Kritik Dönem) Hipotezi Analizi',
    trapWarning: 'B makul görünür çünkü paragraf "However" ile döner, ama metin Chomsky\'yi çürütmez; sadece maruz kalmanın şart olduğunu ekler. D aşırı genellemedir: metin "untreated" işitme kaybından ve anadil düzeyinden bahseder.',
    explanation: 'Kritik dönem: tam dilsel akıcılık için dil maruziyetinin erken nörogelişim evresinde gerçekleşmesi gerektiğini kanıtlar (A şıkkı).'
  },
  {
    id: 'm3_q62',
    type: 'reading',
    title: '62. Soru - Paragraf 5',
    question: 'What happens if a child is completely deprived of linguistic exposure during early childhood?',
    options: {
      A: 'The neural circuitry responsible for syntactic processing permanently atrophies.',
      B: 'The child can still reach native-level fluency with intensive teaching.',
      C: 'The child learns vocabulary normally but struggles with pronunciation.',
      D: 'Broca\'s and Wernicke\'s areas develop more slowly but eventually catch up.',
      E: 'The Language Acquisition Device takes over the missing neural circuits.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Son Cümle Çıkarımı: Sinir devrelerinin kalıcı olarak körelmesi',
    trapWarning: 'Son cümle: devreler kalıcı olarak körelir ve anadil düzeyi "biologically unattainable" olur. B ve D bunun tersini, C ise metinde olmayan bir ayrımı ileri sürer.',
    explanation: 'Erken dönemde dilden mahrum kalan çocukta: sözdizimsel işlemeden sorumlu sinirsel devreler kalıcı olarak körelir (atrophies) (A şıkkı).'
  },

  // =========================================================================
  // 63 - 67: KARŞILIKLI KONUŞMA / DİYALOG (DIALOGUE: 5 SORU)
  // =========================================================================
  {
    id: 'm3_q63',
    type: 'dialogue',
    title: '63. Soru - Karşılıklı Konuşma',
    dialogueSpeaker: 'Dr. Evans (Neurologist) & Dr. Miller (Pharmacologist)',
    question: `Dr. Evans:
— The clinical trial results for the synthetic monoclonal antibody in Alzheimer’s patients are paradoxical. Amyloid plaque deposits in the brain were reduced by nearly eighty percent, yet patients exhibited no cognitive improvement whatsoever.

Dr. Miller:
— That strongly challenges the foundational amyloid hypothesis that has dominated dementia research for the past three decades.

Dr. Evans:
— _____

Dr. Miller:
— Precisely. If clearing the plaques doesn\'t halt cognitive decline, we must urgently redirect research funding towards neuroinflammation and tau protein tangles.`,
    options: {
      A: 'So you mean the plaques might be a side effect of the disease rather than its main cause?',
      B: 'So you think the antibody simply needs to be given at an earlier stage of the disease?',
      C: 'So you suspect that the cognitive tests we used were not sensitive enough to detect change?',
      D: 'So you believe the trial was too short for any cognitive benefit to become measurable?',
      E: 'So you think the reduction in plaques was mainly caused by the placebo effect itself?'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Sonraki Cevaptan Geriye Yürüme: "Precisely. If clearing plaques doesn\'t halt decline..."',
    trapWarning: 'B, C ve D, amiloid hipotezini kurtarmaya çalışan makul açıklamalardır. Ama Dr. Miller "Plakları temizlemek gerilemeyi durdurmuyorsa araştırmayı başka yöne çevirmeliyiz" der; yani hipotezin kendisini sorgulayan şıkkı onaylar.',
    explanation: 'Dr. Evans: "So you are implying that amyloid plaques might merely be a symptom rather than the cause?" (Yani plakların asıl neden değil, ikincil bir belirti olduğunu mu ima ediyorsun?). Doğru cevap A.'
  },
  {
    id: 'm3_q64',
    type: 'dialogue',
    title: '64. Soru - Karşılıklı Konuşma',
    dialogueSpeaker: 'Rachel (Architect) & Thomas (Structural Engineer)',
    question: `Rachel:
— To maximize natural daylight and minimize electricity consumption in the new municipal library, I want to construct the entire south-facing façade using floor-to-ceiling glass panels.

Thomas:
— While that creates an aesthetically striking and brightly illuminated atrium, it presents an enormous thermal challenge. In summer, the solar heat gain will overwhelm the building\'s cooling systems.

Rachel:
— _____

Thomas:
— That would solve the problem completely. Electrochromic smart glass can tint automatically in response to sunlight intensity, blocking infrared radiation while allowing visible light through.`,
    options: {
      A: 'What if we used smart glass that tints itself to block solar heat while still letting light in?',
      B: 'What if we installed a larger cooling system that can cope with the extra heat in summer?',
      C: 'What if we moved the glass facade to the north side, where it receives less direct sunlight?',
      D: 'What if we planted tall trees along the south side to shade the glass in the afternoons?',
      E: 'What if we reduced the glass area and added more artificial lighting inside the atrium?'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Teknik Çözüm Önerisi & Sonraki Cümle Uyumu: "Electrochromic smart glass"',
    trapWarning: 'Bütün öneriler ısı sorununa makul çözümlerdir. Fark Thomas\'ın cevabındadır: "Electrochromic smart glass can tint automatically" der. Bu yüzden boşlukta akıllı cam önerisi olmalıdır.',
    explanation: 'Rachel elektrostatik/akıllı cam kullanılmasını önerir (A şıkkı). Thomas da bu akıllı camın güneşe göre kararıp ısıyı kestiğini onaylar.'
  },
  {
    id: 'm3_q65',
    type: 'dialogue',
    title: '65. Soru - Karşılıklı Konuşma',
    dialogueSpeaker: 'Professor Alvarez (Ecologist) & Liam (Research Student)',
    question: `Professor Alvarez:
— Our satellite telemetry confirms that the migratory monarch butterfly population arriving at the Mexican wintering sanctuaries has declined by thirty percent compared to last year.

Liam:
— That is devastating news. Are logging activities inside the protected biosphere reserve responsible for this sharp reduction?

Professor Alvarez:
— _____

Liam:
— So even if the Mexican forest reserves are protected, agricultural chemical practices thousands of kilometers away in the Midwest are decimating their food supply.`,
    options: {
      A: 'Logging plays a minor role; the main cause is herbicides destroying milkweed along their breeding routes.',
      B: 'Yes, illegal logging inside the reserve has removed many of the trees the butterflies roost on.',
      C: 'Partly, but the unusually cold winter in Mexico also killed many butterflies on arrival.',
      D: 'Not really; the main cause seems to be severe storms that struck during their migration south.',
      E: 'It is too early to say, since this year\'s count may have been affected by poor weather.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Sonraki Cevaptan Geriye Yürüme: "Agricultural practices in the Midwest decimating food supply"',
    trapWarning: 'Liam "Orman korunsa bile Ortabatı\'daki tarım kimyasalları besinlerini yok ediyor" der. Bu yüzden Profesör boşlukta herbisitlerden bahsetmiş olmalıdır. B, C, D ve E başka nedenler verir.',
    explanation: 'Profesör Alvarez asıl suçlunun Kuzey Amerika\'daki yabani ot ilaçları (herbicides) olduğunu söyler (A şıkkı). Liam da bunu özetler.'
  },
  {
    id: 'm3_q66',
    type: 'dialogue',
    title: '66. Soru - Karşılıklı Konuşma',
    dialogueSpeaker: 'Miriam (Software Developer) & David (Database Architect)',
    question: `Miriam:
— We\'ve received user complaints that our e-commerce checkout page experiences significant latency during evening peak traffic hours.

David:
— The bottleneck is that every single product query is currently hitting our primary relational database, forcing it to execute thousands of complex SQL joins simultaneously.

Miriam:
— _____

David:
— Excellent idea. By storing frequently requested catalog data in an in-memory Redis cache, we can serve ninety percent of read requests in milliseconds without querying the database at all.`,
    options: {
      A: 'Could we add an in-memory cache to serve repeated read requests without touching the database?',
      B: 'Could we upgrade the database server to a machine with more processors and memory?',
      C: 'Could we rewrite the slowest SQL queries so that they need fewer complex joins?',
      D: 'Could we move the database to a cloud provider that scales automatically at peak times?',
      E: 'Could we show customers a simpler checkout page during the busiest evening hours?'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Problem-Çözüm Eşleştirmesi & Sonraki Cümle Uyumu: "Redis cache / in-memory cache"',
    trapWarning: 'B, C ve D de veritabanı yükünü azaltmaya yönelik makul fikirlerdir. Ama David "Redis önbelleğinde tutarak okuma isteklerini veritabanına gitmeden karşılarız" der. Boşlukta önbellek önerisi olmalıdır.',
    explanation: 'Miriam veri tabanına yük binmesini engellemek için bir "in-memory caching" katmanı önerir (A şıkkı). David de bunu onaylar.'
  },
  {
    id: 'm3_q67',
    type: 'dialogue',
    title: '67. Soru - Karşılıklı Konuşma',
    dialogueSpeaker: 'Dr. Thorne (Astrophysicist) & Dr. Vance (Cosmologist)',
    question: `Dr. Thorne:
— Recent orbital radio telescope measurements of the cosmic microwave background show localized temperature anisotropies that deviate from standard inflationary model predictions.

Dr. Vance:
— That could either signal an undiscovered systematic calibration flaw in our satellite receivers, or it could point towards physics beyond the Standard Model.

Dr. Thorne:
— _____

Dr. Vance:
— I completely agree. Until an independent ground-based observatory confirms these precise fluctuations, we must refrain from making revolutionary claims.`,
    options: {
      A: 'Before we speculate about new physics, we should cross-check the data with ground-based telescopes.',
      B: 'If this is new physics, it could be the most important cosmological discovery in decades.',
      C: 'We should submit the results to a journal now so that other teams can begin to analyse them.',
      D: 'The calibration of our receivers was checked last year, so an instrument error seems unlikely.',
      E: 'Similar anomalies were reported by an earlier satellite, which strengthens the case for new physics.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Akademik İhtiyat / Doğrulama Çağrısı: "Until independent observatory confirms..."',
    trapWarning: 'Dr. Vance "Bağımsız bir yer gözlemevi doğrulayana kadar devrim niteliğinde iddialardan kaçınmalıyız" der. Boşlukta ihtiyatlı bir doğrulama önerisi olmalıdır. B, D ve E yeni fizik iddiasını güçlendirir, C ise aceleci davranır.',
    explanation: 'Dr. Thorne: "Before we speculate, we should conduct rigorous cross-calibration tests" (Spekülasyon yapmadan önce bağımsız yer dizinleriyle kalibrasyon yapalım). Doğru cevap A.'
  },

  // =========================================================================
  // 68 - 71: ANLAMCA EN YAKIN CÜMLE (RESTATEMENT: 4 SORU)
  // =========================================================================
  {
    id: 'm3_q68',
    type: 'restatement',
    title: '68. Soru - Anlamca En Yakın Cümle',
    question: 'Had municipal authorities retrofitted the urban drainage infrastructure following the 2018 floods, the recent torrential storm would not have caused such widespread destruction.',
    options: {
      A: 'Because city officials failed to upgrade the drainage system after the 2018 flooding, the recent severe storm resulted in extensive devastation.',
      B: 'Because city officials upgraded the drainage system after the 2018 floods, the recent torrential storm caused relatively little damage.',
      C: 'Even if city officials had upgraded the drainage system after the 2018 floods, the recent storm would still have caused widespread destruction.',
      D: 'If city officials do not upgrade the drainage system soon, future storms will cause even more destruction than the floods of 2018.',
      E: 'The recent storm caused widespread destruction, so city officials have finally decided to upgrade the drainage system built after 2018.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Type 3 Devrik If Analizi: Had retrofitted (Yenileseydi yıkım olmazdı -> Yenilemediği için oldu)',
    trapWarning: 'Had ... would not have = yapılmadı, bu yüzden yıkım oldu. B olumsuzluğu kaldırır, C (Even if) koşulun etkisini yok sayar, D geleceğe taşır, E ise zaman ve sebep ilişkisini bozar.',
    explanation: 'Orijinal cümle: "Yetkililer 2018 sellerinden sonra altyapıyı yenileseydi, son fırtına bu kadar büyük yıkıma yol açmazdı." Birebir karşılık A şıkkıdır: "Yenilemedikleri için son fırtına büyük yıkıma yol açtı."'
  },
  {
    id: 'm3_q69',
    type: 'restatement',
    title: '69. Soru - Anlamca En Yakın Cümle',
    question: 'So computationally demanding is real-time high-resolution climate modeling that even the world’s most advanced supercomputers require weeks to simulate a single century.',
    options: {
      A: 'Real-time high-resolution climate simulation requires so much computational power that simulating one century takes weeks, even on top supercomputers.',
      B: 'Even the most advanced supercomputers can simulate a century of high-resolution climate in a few hours, despite the heavy computational load.',
      C: 'Real-time climate modeling demands so little computing power that ordinary computers can simulate a whole century within weeks.',
      D: 'Simulating a century of high-resolution climate takes weeks only on older supercomputers, not on the most advanced ones.',
      E: 'Because supercomputers require weeks to run, scientists have abandoned real-time high-resolution climate modeling altogether.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'So + Adj + that (Öylesine işlem gücü gerektirir ki...) Kalıp Eşleştirmesi',
    trapWarning: 'So ... that: işlem o kadar ağırdır ki en iyi süper bilgisayarlar bile haftalar harcar. B süreyi değiştirir, C yükü olumsuzlar, D "even" anlamını bozar, E ise metinde olmayan bir sonuç ekler.',
    explanation: 'So computationally demanding that (öylesine işlem gücü gerektirir ki) = requires so much computational power that takes weeks. Doğru cevap A.'
  },
  {
    id: 'm3_q70',
    type: 'restatement',
    title: '70. Soru - Anlamca En Yakın Cümle',
    question: 'While regular cardiovascular workouts undeniably bolster heart longevity, their protective benefits against cognitive decline are maximized only when combined with mentally challenging tasks.',
    options: {
      A: 'Aerobic exercises certainly strengthen the heart, but their ability to guard against mental decline is greatest when accompanied by intellectual activities.',
      B: 'Regular cardiovascular workouts strengthen the heart, and they fully protect against cognitive decline even without mental challenges.',
      C: 'Mentally challenging tasks protect the heart just as effectively as regular cardiovascular workouts protect against cognitive decline.',
      D: 'Cardiovascular workouts may not improve heart longevity, but they protect against cognitive decline when combined with mental tasks.',
      E: 'Mentally challenging tasks protect against cognitive decline most effectively only when they are combined with cardiovascular workouts.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Zıtlık & Şart Analizi: While undeniably bolsters ... maximized only when combined with...',
    trapWarning: 'Ana fikir: sporun kalbe faydası kesin, zihinsel gerilemeye karşı koruması ise zihinsel görevlerle birleşince en yüksek düzeye çıkar. B şartı kaldırır, C konuyu değiştirir, D ilk yargıyı olumsuzlar, E koşulu tersine çevirir.',
    explanation: 'Orijinal cümle: Kardiyovasküler egzersiz kalp sağlığını kesinlikle artırsa da, zihinsel gerilemeye karşı koruyucu faydası ancak zihinsel uğraşla birleştirildiğinde en üst düzeye çıkar. Birebir karşılık A\'dır.'
  },
  {
    id: 'm3_q71',
    type: 'restatement',
    title: '71. Soru - Anlamca En Yakın Cümle',
    question: 'Scarcely had the volcanic observatory detected the harmonic tremor beneath the caldera when civil defense authorities initiated mandatory civilian evacuations.',
    options: {
      A: 'Civil defense officials ordered mandatory civilian evacuations almost immediately after the observatory identified the harmonic tremor under the caldera.',
      B: 'Civil defense authorities ordered evacuations some time after the observatory had recorded several tremors beneath the caldera.',
      C: 'Civil defense authorities ordered evacuations shortly before the observatory detected the harmonic tremor beneath the caldera.',
      D: 'As soon as civil defense authorities ordered evacuations, the observatory detected a harmonic tremor beneath the caldera.',
      E: 'The observatory had hardly detected the harmonic tremor, yet civil defense authorities decided that evacuations were unnecessary.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Scarcely had ... when = Almost immediately after (-er etmez / anında)',
    trapWarning: 'Scarcely ... when = -ir -mez. Titreşim tespit edilir edilmez tahliye başlamıştır. B gecikme ekler, C sırayı tersine çevirir, D olayların yerini değiştirir, E ise tahliyeyi olumsuzlar.',
    explanation: 'Scarcely had detected ... when initiated = titreşimi tespit eder etmez tahliyeyi başlattı (almost immediately after). Doğru cevap A.'
  },

  // =========================================================================
  // 72 - 75: PARAGRAF TAMAMLAMA (PARAGRAPH COMPLETION: 4 SORU)
  // =========================================================================
  {
    id: 'm3_q72',
    type: 'paragraph_completion',
    title: '72. Soru - Paragraf Tamamlama',
    question: `Throughout the evolution of complex life, bioluminescence—the biochemical production of visible light by living organisms—has evolved independently in over forty distinct phylogenetic lineages. In the sunless depths of the mesopelagic and bathypelagic ocean, where solar rays cannot penetrate, light generation is an indispensable survival strategy. Organisms utilize luciferin-luciferase reactions to produce blue-green wavelengths that travel furthest through seawater. (_____) For example, the anglerfish dangles a luminous bacterial lure to attract prey directly toward its jaws, while lanternfish emit ventral light to match downwelling downwelling surface luminescence, effectively rendering themselves invisible to predators swimming below.`,
    options: {
      A: 'This biochemical illumination serves multifaceted ecological functions, ranging from predatory entrapment to counterillumination camouflage.',
      B: 'Red light, by contrast, is absorbed within a few metres and is therefore rarely produced by deep-sea animals.',
      C: 'Some species produce light themselves, while others rely on bioluminescent bacteria living in their tissues.',
      D: 'Scientists still disagree about why this ability has evolved so many separate times in the ocean.',
      E: 'Most bioluminescent animals, however, live in shallow coastal waters rather than in the deep sea.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Genel Tanımdan Örneğe Geçiş: Boşluktan sonraki "For example" cümlesi avlanma ve kamuflajı açıklar.',
    trapWarning: 'Sonraki cümle "For example" ile avlanma ve kamuflaj örnekleri verir; yani boşlukta ışığın işlevleri genel olarak söylenmelidir. B ve C konuyla ilgili ama örneklerin genellemesini yapmaz; E ise metinle çelişir.',
    explanation: 'A şıkkı: "This illumination serves multifaceted functions, ranging from predatory entrapment to camouflage" (Bu ışık avlanmadan kamuflaja kadar çok yönlü işlevler görür). Ardından gelen "For example" bunu kanıtlar. Doğru cevap A.'
  },
  {
    id: 'm3_q73',
    type: 'paragraph_completion',
    title: '73. Soru - Paragraf Tamamlama',
    question: `Soil salinization poses a devastating threat to global agricultural food security, especially in arid and semi-arid river basins. When farmers utilize poorly managed flood irrigation in dry climates, intense evaporation draws subterranean groundwater to the soil surface. (_____) As these toxic salt concentrations accumulate in the root zone, they exert intense osmotic pressure, preventing crops from absorbing essential moisture and eventually rendering fertile croplands completely barren.`,
    options: {
      A: 'As the surface water evaporates, dissolved mineral salts are left behind in the upper topsoil layers.',
      B: 'Drip irrigation, by contrast, delivers water directly to the roots and reduces evaporation considerably.',
      C: 'In some regions, farmers have responded by switching to crops that tolerate higher levels of salt.',
      D: 'Salinization already affects millions of hectares of farmland, particularly in South Asia and the Middle East.',
      E: 'This groundwater, however, is usually fresh and therefore improves the quality of the topsoil.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Mantıksal Adım Takibi: Buharlaşma suyu çeker -> Su buharlaşınca tuz geride kalır -> Tuz kökleri kurutur.',
    trapWarning: 'Sonraki cümle "As these toxic salt concentrations accumulate" der; "these" göndergesi için boşlukta tuzların toprağın üstünde kaldığı söylenmelidir. B ve C çözümleri erken verir, D genel bilgi verir, E ise sonuçla çelişir.',
    explanation: 'A şıkkı su buharlaşınca tuzların üst toprak katmanında kaldığını açıklar. Sonraki cümle bu tuz konsantrasyonunun (these toxic salt concentrations) etkisini anlatır. Doğru cevap A.'
  },
  {
    id: 'm3_q74',
    type: 'paragraph_completion',
    title: '74. Soru - Paragraf Tamamlama',
    question: `For decades, planetary geologists considered Mercury to be a geologically dead world—a desolate, heavily cratered iron sphere that had cooled into complete inactivity billions of years ago. However, high-resolution imagery captured by NASA’s MESSENGER spacecraft has overturned this consensus. (_____) These tectonic landforms indicate that as Mercury\'s disproportionately colossal metallic core has cooled and contracted, the planet’s outer crust has literally buckled and shrunk by several kilometers, a geological process that may continue into the present day.`,
    options: {
      A: 'Orbital instruments revealed extensive fault scarps, known as lobate scarps, cutting across relatively young impact craters.',
      B: 'The spacecraft also detected water ice inside permanently shadowed craters near the poles of Mercury.',
      C: 'MESSENGER was the first spacecraft to orbit Mercury, completing more than four thousand orbits.',
      D: 'Mercury\'s iron core, which makes up most of its volume, is unusually large for a planet of its size.',
      E: 'Its surface, however, shows no signs of having changed since the planet first formed.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Referans Kelime Uyumu: Boşluktan sonra gelen "These tectonic landforms"',
    trapWarning: 'Sonraki cümle "These tectonic landforms" der; boşlukta bu yer şekilleri tanıtılmalıdır. B ve C görev hakkında doğru bilgiler verir ama tektonik şekillerden bahsetmez; D çekirdeği erken açıklar, E ise metinle çelişir.',
    explanation: 'A şıkkı tektonik kırık yamaçlarını (fault scarps) tanıtır; sonraki cümle "These tectonic landforms" diyerek bu açıklamayı devam ettirir. Doğru cevap A.'
  },
  {
    id: 'm3_q75',
    type: 'paragraph_completion',
    title: '75. Soru - Paragraf Tamamlama',
    question: `In classical economics, consumers were long assumed to be strictly rational agents who systematically calculate marginal utilities to maximize their personal financial welfare. However, the emergence of behavioral economics in the late twentieth century dismantled this theoretical abstraction. (_____) Consequently, human decision-makers consistently deviate from idealized economic models, exhibiting cognitive biases like loss aversion and present bias that lead to systematically suboptimal financial choices.`,
    options: {
      A: 'Pioneering researchers demonstrated that human cognition relies on heuristic shortcuts that are vulnerable to emotional biases.',
      B: 'Classical economists, however, continued to defend the rational agent model well into the 1990s.',
      C: 'Behavioral economics draws on insights from psychology, neuroscience and sociology.',
      D: 'Governments have since used these insights to design policies that nudge people toward better choices.',
      E: 'These researchers confirmed that people usually make the choices that best serve their financial interests.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Teorik Geçiş & Boşluk Sonrası Uyumu: "cognitive biases like loss aversion"',
    trapWarning: 'Sonraki cümle "Consequently, people deviate from idealized models" der; boşlukta bunun nedeni (zihinsel kestirmeler ve önyargılar) verilmelidir. B ve C konuyla ilgili ama neden vermez; D sonucu erken verir, E ise sonuçla çelişir.',
    explanation: 'A şıkkı bilişsel kestirmelerin ve duygusal önyargıların rolünü açıklar; sonraki cümle "Consequently, decision-makers deviate..." diyerek bunu doğrular. Doğru cevap A.'
  },

  // =========================================================================
  // 76 - 80: ANLAM BÜTÜNLÜĞÜNÜ BOZAN CÜMLE (IRRELEVANT SENTENCE: 5 SORU)
  // =========================================================================
  {
    id: 'm3_q76',
    type: 'irrelevant_sentence',
    title: '76. Soru - Anlam Bütünlüğünü Bozan Cümle',
    question: `(I) Photosynthesis in terrestrial plants is catalyzed by the enzyme RuBisCO, which captures atmospheric carbon dioxide to synthesize organic sugars. (II) However, RuBisCO is notoriously inefficient because it frequently binds with ambient oxygen instead of carbon dioxide, initiating an energy-wasting metabolic detour known as photorespiration. (III) Under high temperatures, this enzymatic flaw can reduce agricultural crop yields by up to forty percent in major food crops like wheat and soybeans. (IV) Modern combine harvesters manufactured in North America utilize GPS guidance to navigate grain fields with centimeter accuracy. (V) To circumvent this biological bottleneck, bioengineers are attempting to install more efficient bacterial carbon-concentrating mechanisms into staple food crops.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'Orta',
    tacticUsed: 'GPS Biçerdöver Sapması: Paragraf RuBisCO enziminin verimsizliğini ve genetik çözümleri anlatırken IV. cümle GPS\'li biçerdöverden bahseder.',
    trapWarning: 'I, II, III ve V cümleleri enzimin fotosentezdeki kusurunu ve biyomühendislik çözümlerini anlatır. IV alakasız tarım makinesidir.',
    explanation: 'IV numaralı cümle GPS\'li biçerdöverlerden bahsederek fotosentez enzimi kusuru konusunun akışını bozan ilgisiz cümledir (D şıkkı).'
  },
  {
    id: 'm3_q77',
    type: 'irrelevant_sentence',
    title: '77. Soru - Anlam Bütünlüğünü Bozan Cümle',
    question: `(I) The invention of the printing press by Johannes Gutenberg in the mid-fifteenth century catalyzed an unprecedented democratization of knowledge across Europe. (II) Prior to movable type, books were laboriously transcribed by hand in monastic scriptoria, restricting literacy to wealthy elites and clergy. (III) Gutenberg\'s mechanical press drastically slashed book production costs, enabling ideas of the Protestant Reformation and the Scientific Revolution to propagate across continental borders. (IV) The vintage antique furniture market in modern London features rare sixteenth-century oak reading desks that sell for thousands of pounds. (V) Within several decades of its debut, millions of printed volumes circulated throughout European urban centers, permanently destabilizing established authoritarian information monopolies.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'Orta',
    tacticUsed: 'Antika Mobilya Piyasası Sapması: Paragraf matbaanın bilgi devrimini anlatırken IV. cümle Londra\'daki antika masa fiyatlarından bahseder.',
    trapWarning: 'I, II, III ve V cümleleri matbaanın bilgiye erişim ve toplumsal dönüşüm üzerindeki etkisidir. IV antika mobilyadır.',
    explanation: 'IV numaralı cümle Londra antika mobilya pazarından bahsederek Gutenberg matbaasının entelektüel devrimini bozan ilgisiz cümledir (D şıkkı).'
  },
  {
    id: 'm3_q78',
    type: 'irrelevant_sentence',
    title: '78. Soru - Anlam Bütünlüğünü Bozan Cümle',
    question: `(I) Coral bleaching occurs when marine heatwaves cause symbiotic zooxanthellae algae to be expelled from coral tissues. (II) Deprived of these photosynthetic algae, corals lose their vibrant coloration and primary nutritional source, exposing their white calcium carbonate skeleton. (III) If ocean temperatures return to baseline levels within several weeks, surviving corals can gradually reacquire algae and recover. (IV) Tropical resort hotels frequently provide complimentary scuba diving lessons for vacationing families during the winter holidays. (V) However, under prolonged thermal stress, massive coral mortality ensues, triggering the ecological collapse of surrounding marine reef biodiversity.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'Orta',
    tacticUsed: 'Tatil Köyü Scuba Dersi Sapması: Paragraf mercan ağarmasını anlatırken IV. cümle tatil köyü dalış dersinden bahseder.',
    trapWarning: 'I, II, III ve V cümleleri mercan ağarmasının biyolojisi ve ölüm tehlikesidir. IV turizm reklamıdır.',
    explanation: 'IV numaralı cümle tatil köylerindeki dalış derslerinden bahsederek mercan ağarması felaketini bölen ilgisiz cümledir (D şıkkı).'
  },
  {
    id: 'm3_q79',
    type: 'irrelevant_sentence',
    title: '79. Soru - Anlam Bütünlüğünü Bozan Cümle',
    question: `(I) The development of CRISPR-Cas9 genetic editing represents one of the most powerful molecular tools in contemporary biological science. (II) Originally discovered as an adaptive immune defense system in bacteria against viral phages, researchers repurposed the Cas9 enzyme to execute targeted double-stranded DNA cuts with pinpoint precision. (III) By introducing customized guide RNA molecules, scientists can knock out defective genetic alleles or insert corrective therapeutic sequences. (IV) Medical laboratory coats are traditionally dyed white to reflect hygiene and allow immediate detection of chemical stains. (V) This programmable genetic precision holds extraordinary promise for curing monogenic hereditary disorders such as sickle cell anemia and cystic fibrosis.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'Orta',
    tacticUsed: 'Beyaz Laboratuvar Önlüğü Sapması: Paragraf CRISPR-Cas9 gen düzenleme mekanizmasını anlatırken IV. cümle doktor önlüğünden bahseder.',
    trapWarning: 'I, II, III ve V cümleleri CRISPR teknolojisini anlatır. IV önlük kumaşı detayıdır.',
    explanation: 'IV numaralı cümle beyaz laboratuvar önlüklerinden bahsederek devrim niteliğindeki gen düzenleme teknolojisi akışını bozan ilgisiz cümledir (D şıkkı).'
  },
  {
    id: 'm3_q80',
    type: 'irrelevant_sentence',
    title: '80. Soru - Anlam Bütünlüğünü Bozan Cümle',
    question: `(I) Urban public transit systems are essential for curtailing metropolitan traffic congestion and municipal carbon emissions. (II) Electric subways and bus rapid transit networks transport millions of commuters daily with far greater thermodynamic efficiency than private single-occupancy vehicles. (III) Investments in dedicated bus lanes and signal priority significantly accelerate transit speeds, incentivizing citizens to leave automobiles at home. (IV) Classic vintage sports car exhibitions in Monaco attract high-net-worth vehicle collectors from across the globe every May. (V) Furthermore, expanding reliable urban public transport reduces socioeconomic inequality by connecting disenfranchised suburban communities to central employment corridors.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'Orta',
    tacticUsed: 'Monako Klasik Araba Fuarı Sapması: Paragraf toplu taşımayı anlatırken IV. cümle Monako\'daki zengin klasik araba fuarından bahseder.',
    trapWarning: 'I, II, III ve V cümleleri kentsel toplu taşımanın faydaları ve sosyal eşitliğidir. IV lüks spor araba hobisidir.',
    explanation: 'IV numaralı cümle Monako\'daki klasik spor araba sergisinden bahsederek kentsel toplu taşıma planlaması konusunu bozan ilgisiz cümledir (D şıkkı).'
  }
];

// Options are reordered per question so the answer key is not concentrated in A.
export const YDS_FULL_MOCK_EXAM_3: YdsQuestion[] = fillGroupPassages(shuffleQuestionList(RAW_YDS_FULL_MOCK_EXAM_3));
