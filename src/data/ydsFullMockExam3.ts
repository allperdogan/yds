import { YdsQuestion } from '../types';

export const YDS_FULL_MOCK_EXAM_3: YdsQuestion[] = [
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
      B: 'they are completely useless for powering urban metropolitan centers',
      C: 'because fossil fuel plants will be permanently phased out by the end of the decade',
      D: 'which proves that renewable energy technologies are a scientific impossibility',
      E: 'as governmental subsidies for solar installations have completely ceased'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Zıtlık Analizi: Sıfır doğrudan emisyon (+) -> Madencilik ekolojik zarar verir (-)',
    trapWarning: 'B şıkkında "tamamen işe yaramaz" diyerek aşırıya kaçmıştır; mantıklı akademik zıtlık A\'dadır.',
    explanation: 'Although (her ne kadar doğrudan emisyon üretmese de), silikon madenciliği ve arıtımı ciddi ekolojik zarara yol açar (A şıkkı).'
  },
  {
    id: 'm3_q28',
    type: 'sentence_completion',
    title: '28. Soru - Cümle Tamamlama',
    question: '_____, neuroscientists have discovered that the adult brain continues generating new neurons throughout life.',
    options: {
      A: 'Contrary to earlier neurological assumptions that brain cellular development ceases after adolescence',
      B: 'Because cognitive decline is an inevitable biological consequence of reaching adulthood',
      C: 'In order that elderly citizens could effortlessly memorize complex foreign languages',
      D: 'Since ancient philosophers had already proven the existence of brain neurogenesis',
      E: 'Just as early psychoanalysts had predicted in their 19th-century clinical treatises'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Contrary to (Aksine) Zıtlık Yapısı: Ergenlikten sonra durduğu varsayımının aksine...',
    trapWarning: 'Ana cümle yeni nöron üretildiğini söyler; giriş eski yanlış varsayımı (ceases after adolescence) çürütmelidir.',
    explanation: 'Contrary to earlier assumptions (ergenlikten sonra gelişimin durduğu yönündeki eski varsayımların aksine), beyin yaşam boyu yeni nöron üretir (A şıkkı).'
  },
  {
    id: 'm3_q29',
    type: 'sentence_completion',
    title: '29. Soru - Cümle Tamamlama',
    question: 'In order to preserve endangered benthic coral formations from destructive bottom trawling, _____.',
    options: {
      A: 'maritime authorities must enforce strict marine protected reserves that prohibit heavy commercial fishing gear',
      B: 'although industrial fishing fleets generate billions of dollars in export revenues annually',
      C: 'because tropical coral polyps thrive under high mechanical sedimentation and disturbance',
      D: 'which explains why deep-sea fish stocks have miraculously doubled over the past decade',
      E: 'unless regional governments had already banned commercial seafood exports'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'In order to preserve (Korumak amacıyla) -> Alınması Gereken Önlem (Must enforce)',
    trapWarning: 'Korumak amacıyla ifadesinden sonra yetkililerin yapması gereken zorunluluk (must enforce) gelmelidir.',
    explanation: 'Mercanları korumak amacıyla, denizcilik otoriteleri ağır balıkçılığı yasaklayan koruma alanlarını yürürlüğe koymalıdır (A şıkkı).'
  },
  {
    id: 'm3_q30',
    type: 'sentence_completion',
    title: '30. Soru - Cümle Tamamlama',
    question: 'Whereas conventional internal combustion engines emit tremendous quantities of toxic pollutants, _____.',
    options: {
      A: 'hydrogen fuel-cell vehicles produce only pure water vapor as their operational exhaust',
      B: 'petroleum refineries are expanding production across all continents',
      C: 'electric charging grids have completely eliminated the need for power plants',
      D: 'which resulted in unprecedented traffic congestion in metropolitan centers',
      E: 'because modern diesel engines are completely harmless to public respiratory health'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Whereas (Taban Tabana Zıt İki Teknoloji: Zehirli gaz vs Saf su buharı)',
    trapWarning: 'Whereas zıtlık verir: konvansiyonel motorlar kirlilik yayarken, hidrojenli araçlar sadece su buharı çıkarır.',
    explanation: 'Konvansiyonel motorlar zehirli gaz yayarken (Whereas engines emit pollutants), hidrojen yakıt hücreli araçlar sadece su buharı üretir (A şıkkı).'
  },
  {
    id: 'm3_q31',
    type: 'sentence_completion',
    title: '31. Soru - Cümle Tamamlama',
    question: 'Archaeologists deployed high-resolution ground-penetrating radar across the ceremonial site _____',
    options: {
      A: 'so that subsurface architectural foundations could be mapped without disturbing fragile historical strata.',
      B: 'because ancient builders had constructed no subterranean structures in the valley.',
      C: 'although modern digital imaging equipment was completely forbidden by ministry officials.',
      D: 'in case grave robbers had voluntarily returned all stolen gold artifacts.',
      E: 'as if pastoralist nomads had established massive stone pyramids overnight.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'So that + Could (Amaç Bağlacı: Kazmadan haritalayabilsinler diye)',
    trapWarning: 'Radar kullanılmasının mantıklı amacı, hassas katmanları bozmadan mimari temelleri haritalayabilmektir.',
    explanation: 'Arkeologlar yer radarı yerleştirdi; BÖYLECE toprak altı temeller tabakaları bozmadan haritalanabilsin (so that ... could be mapped). Doğru cevap A.'
  },
  {
    id: 'm3_q32',
    type: 'sentence_completion',
    title: '32. Soru - Cümle Tamamlama',
    question: 'Unless governments implement stringent carbon emissions caps within the current decade, _____.',
    options: {
      A: 'low-lying coastal metropolitan regions will experience catastrophic and irreversible marine inundation',
      B: 'renewable energy corporations have broken previous manufacturing records',
      C: 'which caused international climate conferences to reach immediate consensus',
      D: 'although global average temperatures have stabilized at pre-industrial levels',
      E: 'since industrial manufacturing requires boundless quantities of coal'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Unless (Eğer uygulanmazsa) -> Gelecekteki Kaçınılmaz Tehdit (Will experience)',
    trapWarning: 'Unless olumsuz şarttır; yapılmazsa ne olacağı ana cümlede (will experience inundation) söylenir.',
    explanation: 'Hükümetler emisyon kotalarını uygulamazsa (Unless governments implement), kıyı şehirleri geri dönüşsüz su baskınlarıyla karşılaşacaktır (A şıkkı).'
  },
  {
    id: 'm3_q33',
    type: 'sentence_completion',
    title: '33. Soru - Cümle Tamamlama',
    question: 'Because the interior temperatures of stellar cores reach tens of millions of degrees, _____.',
    options: {
      A: 'hydrogen atomic nuclei possess sufficient kinetic energy to overcome electrostatic repulsion and undergo fusion',
      B: 'solid mineral crusts can form on the surface of giant gaseous stars',
      C: 'which explains why robotic exploratory spacecraft can easily land on solar surfaces',
      D: 'even though stellar magnetic fields prevent any nuclear reactions from occurring',
      E: 'so that astrophysicists could photograph individual neutrons with optical telescopes'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Fiziksel Sebep-Sonuç: Sıcaklık milyonlarca dereceye ulaştığı için füzyon gerçekleşir.',
    trapWarning: 'Yüksek sıcaklığın bilimsel sonucu nükleer füzyonun (çekirdek kaynaşmasının) gerçekleşmesidir.',
    explanation: 'Yıldız çekirdekleri milyonlarca dereceye ulaştığı için, hidrojen çekirdekleri itme kuvvetini yenip füzyona girecek kinetik enerjiye ulaşır (A şıkkı).'
  },
  {
    id: 'm3_q34',
    type: 'sentence_completion',
    title: '34. Soru - Cümle Tamamlama',
    question: '_____, the prolonged drought crippled the agrarian economy of the entire river basin.',
    options: {
      A: 'As regional farmers relied almost exclusively on seasonal precipitation for crop irrigation',
      B: 'Even though modern automated desalination plants supplied unlimited freshwater',
      C: 'So that municipal reservoirs could export water to neighboring desert states',
      D: 'While industrial manufacturing factories generated boundless profits from textile exports',
      E: 'Unless international humanitarian agencies had delivered emergency grain shipments'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Sebep Bağlacı (As = Because): Yağmura bağımlı oldukları için kuraklık ekonomiyi felç etti.',
    trapWarning: 'B şıkkında suyun sınırsız olduğu söylenir; bu durumda kuraklık ekonomiyi felç edemezdi.',
    explanation: 'Bölge çiftçileri sulama için neredeyse tamamen mevsimsel yağışlara bağımlı olduğu için (As farmers relied on precipitation), kuraklık ekonomiyi felç etti (A şıkkı).'
  },
  {
    id: 'm3_q35',
    type: 'sentence_completion',
    title: '35. Soru - Cümle Tamamlama',
    question: 'Much as artificial intelligence models streamline administrative data processing across hospitals, _____.',
    options: {
      A: 'they cannot replicate the nuanced clinical empathy and bedside judgment of experienced human physicians',
      B: 'they operate with complete and infallible medical precision in every diagnostic test',
      C: 'because hospital administrative budgets have completely eliminated physician salaries',
      D: 'which proves that medical schools should be permanently closed within five years',
      E: 'so that pharmaceutical corporations could artificially inflate the price of critical vaccines'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Much as = Although (Her ne kadar verileri hızlandırsa da [+] -> İnsan empatisini taklit edemez [-])',
    trapWarning: '"Much as" zıtlık bağlacıdır. Hızlandırma pozitifken ikinci cümle yapay zekanın insani empati eksikliğini (-) vermelidir.',
    explanation: 'Yapay zeka veri işlemlerini ne kadar kolaylaştırsa da (Much as AI streamlines), deneyimli hekimlerin empati ve klinik sağduyusunu taklit edemez (A şıkkı).'
  },
  {
    id: 'm3_q36',
    type: 'sentence_completion',
    title: '36. Soru - Cümle Tamamlama',
    question: 'Ever since deep-sea submersibles first documented hydrothermal ecosystems in the late 1970s, _____.',
    options: {
      A: 'marine microbiologists have recognized that complex life can flourish without photosynthetic sunlight',
      B: 'they will launch an international expedition to map the Mariana Trench next autumn',
      C: 'which proved that life can only originate in warm shallow equatorial lagoons',
      D: 'until commercial mining companies extracted all mineral deposits along the ocean floor',
      E: 'as classical biology had already documented deep-sea chemosynthesis centuries earlier'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Ever since + V2 -> Present Perfect (Have recognized)',
    trapWarning: 'Ever since başlangıç anını verir; ana cümle Present Perfect (have recognized) olmak zorundadır.',
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
      B: 'Tropikal yağmur ormanlarının korunması, iklim bilimcilere göre biyoçeşitlilik kadar karbon birikimini önlemek açısından da gereklidir.',
      C: 'İklim bilimcilerin vurguladığı gibi, gezegensel karbon birikimini azaltmak için yağmur ormanlarını korumak biyoçeşitlilikten daha önemlidir.',
      D: 'Yağmur ormanlarının korunması gerektiği, hem biyoçeşitlilik kaybı hem de karbon birikimi konusunda iklim bilimciler tarafından savunulmaktadır.',
      E: 'Gezegensel karbon birikimi ve biyoçeşitlilik kaybı, iklim bilimcilerin belirttiği gibi tropikal yağmur ormanlarının yok olmasıyla hızlanmaktadır.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Not only ... but also (Yalnızca ... değil, aynı zamanda ...) & "emphasize that" (vurgulamaktadır)',
    trapWarning: 'C şıkkında birinin diğerinden daha önemli olduğu söylenir; oysa metin her ikisinin de elzem olduğunu söyler.',
    explanation: 'Özne: Climate scientists, Ana Fiil: emphasize that (vurgulamaktadır), Bağlaç: not only ... but also (yalnızca ... değil aynı zamanda). Doğru cevap A.'
  },
  {
    id: 'm3_q38',
    type: 'translation_en_tr',
    title: '38. Soru - İngilizce-Türkçe Çeviri',
    question: 'Although early historians considered the Roman Empire to be an impregnable superpower, recent archaeological excavations reveal that internal economic decay weakened its frontiers long before nomadic invasions.',
    options: {
      A: 'İlk tarihçiler Roma İmparatorluğu\'nu zapt edilemez bir süper güç olarak değerlendirmiş olsalar da, son arkeolojik kazılar iç ekonomik çöküşün göçebe istilalarından çok önce sınırlarını zayıflattığını ortaya koymaktadır.',
      B: 'Son arkeolojik kazılar Roma\'nın iç ekonomik çöküşünü gösterse de ilk tarihçiler imparatorluğun göçebe istilalarıyla yıkıldığını düşünüyordu.',
      C: 'Roma İmparatorluğu zapt edilemez bir güç sanılsa da göçebe akınları iç ekonomik çöküşü tetiklemiş ve sınırları zayıflatmıştır.',
      D: 'İlk tarihçilerin süper güç olarak tanımladığı Roma İmparatorluğu, arkeolojik kazılara göre göçebe istilaları yüzünden zayıflamıştır.',
      E: 'Arkeolojik kazılar iç ekonomik çöküşü kanıtlayana kadar tarihçiler Roma İmparatorluğu\'nun süper güç olduğuna inanmaktaydı.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Although (olsalar da) & "reveal that" (ortaya koymaktadır)',
    trapWarning: 'B şıkkında ana fikir kaydırılmıştır; orijinal cümle kazıların iç ekonomik çöküşü ortaya koyduğunu vurgular.',
    explanation: 'Although considered... (değerlendirmiş olsalar da), recent excavations reveal... (kazılar ortaya koymaktadır). Kusursuz karşılık A şıkkıdır.'
  },
  {
    id: 'm3_q39',
    type: 'translation_en_tr',
    title: '39. Soru - İngilizce-Türkçe Çeviri',
    question: 'Epidemiologists warn that unless global vaccination distribution is handled equitably, new viral mutations could arise in under-immunized populations and threaten international health security.',
    options: {
      A: 'Epidemiyologlar, küresel aşı dağıtımı adil bir şekilde ele alınmadıkça, yetersiz aşılanmış nüfuslarda yeni viral mutasyonların ortaya çıkabileceği ve uluslararası sağlık güvenliğini tehdit edebileceği konusunda uyarmaktadır.',
      B: 'Küresel aşı dağıtımının adil yapılmaması durumunda, yeni mutasyonların ortaya çıkıp uluslararası sağlığı tehdit ettiği epidemiyologlarca uyarılmıştır.',
      C: 'Yetersiz aşılanan bölgelerde ortaya çıkan mutasyonların uluslararası sağlığı tehdit ettiği, epidemiyologların aşı dağıtımı uyarısıyla kanıtlanmıştır.',
      D: 'Epidemiyologların uyardığı üzere, mutasyonları engellemek için küresel aşı dağıtımının uluslararası kuruluşlarca yapılması zorunludur.',
      E: 'Aşı dağıtımı adil yapılmadığı için ortaya çıkan yeni viral mutasyonlar, epidemiyologlara göre küresel sağlık güvenliğini sarsmaktadır.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Unless (ele alınmadıkça) & "could arise ... and threaten" (ortaya çıkabilir ve tehdit edebilir)',
    trapWarning: 'E şıkkında "yapılmadığı için" denerek sebep cümlesi yapılmıştır; orijinal cümle şart (Unless) içerir.',
    explanation: 'Unless handled equitably: adil ele alınmadıkça. Could arise and threaten: ortaya çıkabilir ve tehdit edebilir. Doğru cevap A.'
  },
  {
    id: 'm3_q40',
    type: 'translation_tr_en',
    title: '40. Soru - Türkçe-İngilizce Çeviri',
    question: 'Yapay zekanın tıbbi görüntüleri analiz etmedeki başarısı kanıtlanmış olsa da, teşhis sürecinde hekimlerin mesleki deneyimi hala vazgeçilmez kabul edilmektedir.',
    options: {
      A: 'Although the success of artificial intelligence in analyzing medical images has been proven, the professional experience of physicians is still considered indispensable in the diagnostic process.',
      B: 'Since artificial intelligence successfully analyzes medical imagery, physicians no longer need extensive experience in the diagnostic process.',
      C: 'The professional experience of physicians in diagnosis is indispensable because artificial intelligence cannot accurately analyze medical images.',
      D: 'Even if physicians use artificial intelligence to analyze images, their diagnostic decisions are frequently questioned by specialists.',
      E: 'Artificial intelligence has revolutionized medical imaging, yet human physicians refuse to rely on its diagnostic accuracy.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Türkçe "kanıtlanmış olsa da" = Although the success has been proven & "still considered indispensable"',
    trapWarning: 'B şıkkında "Since" (çünkü) kullanılmıştır; cümlede zıtlık vardır.',
    explanation: 'Başarısı kanıtlanmış olsa da: Although the success has been proven... Hala vazgeçilmez kabul edilmektedir: is still considered indispensable. Doğru cevap A.'
  },
  {
    id: 'm3_q41',
    type: 'translation_tr_en',
    title: '41. Soru - Türkçe-İngilizce Çeviri',
    question: 'Sanayi devriminden bu yana atmosferdeki sera gazı yoğunluğunun sürekli artması, küresel iklim krizinin başlıca nedeni olarak görülmektedir.',
    options: {
      A: 'The continuous increase in atmospheric greenhouse gas concentrations since the Industrial Revolution is regarded as the primary cause of the global climate crisis.',
      B: 'Atmospheric greenhouse gases have increased because the global climate crisis accelerated during the Industrial Revolution.',
      C: 'The Industrial Revolution caused the global climate crisis by generating massive concentrations of industrial greenhouse gases.',
      D: 'Since the Industrial Revolution, greenhouse gas emissions have stabilized, reducing the severity of the global climate crisis.',
      E: 'Although the climate crisis began with the Industrial Revolution, atmospheric gas concentrations have only recently been measured.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Özne-Yüklem: "The continuous increase ... is regarded as the primary cause"',
    trapWarning: 'B şıkkında sebep-sonuç tersine çevrilmiştir (gazlar kriz yüzünden arttı denmiştir).',
    explanation: 'Sera gazı yoğunluğunun sürekli artması (The continuous increase in concentrations), başlıca nedeni olarak görülmektedir (is regarded as the primary cause). Doğru cevap A.'
  },
  {
    id: 'm3_q42',
    type: 'translation_tr_en',
    title: '42. Soru - Türkçe-İngilizce Çeviri',
    question: 'Gelişmiş ülkeler yenilenebilir enerji teknolojilerine yeterli finansman sağlamadıkça, gelişmekte olan ekonomilerin kömüre bağımlılığı devam edecektir.',
    options: {
      A: 'Unless developed countries provide adequate financing for renewable energy technologies, the reliance of developing economies on coal will continue.',
      B: 'If developed nations finance renewable technologies, developing countries will immediately cease burning domestic coal reserves.',
      C: 'Developing economies depend on coal because developed nations have banned foreign investments in renewable energy.',
      D: 'Although developed nations offer financial support, developing economies prefer coal over renewable technologies.',
      E: 'Developed countries should invest in renewable energy so that developing nations can reduce their industrial electricity costs.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: '"-sağlamadıkça" = Unless & "reliance on coal will continue"',
    trapWarning: 'Şart bildiren "sağlamadıkça" ifadesini karşılayan yapı "Unless"tir.',
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
      A: 'the karst limestone landscape allowed rainwater to drain rapidly into underground caves rather than remaining on the surface.',
      B: 'perennial river floods repeatedly destroyed city plazas and residential farming districts.',
      C: 'monsoon rainfall was completely absent throughout the entire calendar year.',
      D: 'subterranean caverns contained toxic volcanic minerals that poisoned all drinking water.',
      E: 'Maya engineers lacked the mathematical skills required to construct sloped architectural surfaces.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Doğrudan Bilgi: Karstik kireçtaşı arazisinin suyu hemen yer altına sızdırması',
    trapWarning: 'B şıkkında nehir taşkınları der; oysa metin bölgede düzenli nehir sistemleri olmadığını söyler.',
    explanation: 'Metne göre zorluk: "karst limestone geology allowed rainwater to percolate instantly into subterranean caverns, leaving surface arid". Doğru cevap A.'
  },
  {
    id: 'm3_q44',
    type: 'reading',
    title: '44. Soru - Paragraf 1',
    question: 'It is stated in the passage that the city plazas of Tikal were specifically designed to _____',
    options: {
      A: 'capture monsoon rainfall and channel it directly into filtration and storage systems.',
      B: 'serve exclusively as defensive fortifications against hostile neighboring kingdoms.',
      C: 'prevent quartz sand and zeolite minerals from being transported into the city.',
      D: 'divert rainwater into agricultural valleys to provoke deliberate soil erosion.',
      E: 'protect sacred temple monuments from any contact with environmental moisture.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Plazaların Amacı: Yağmur suyunu yakalayıp filtrelere yönlendirmek',
    trapWarning: 'Metin: "plazas were sloped with extreme precision to channel downpours into filtered settling tanks" der.',
    explanation: 'Tikal meydanları: muson yağmurlarını yakalayıp arıtma ve depolama tanklarına yönlendirmek için hassas bir eğimle inşa edilmiştir. Doğru cevap A.'
  },
  {
    id: 'm3_q45',
    type: 'reading',
    title: '45. Soru - Paragraf 1',
    question: 'The passage mentions the use of quartz sand and zeolite minerals to illustrate that the Maya _____',
    options: {
      A: 'possessed sophisticated water purification technologies that relied on distant imported materials.',
      B: 'relied entirely on primitive superstition to explain water-borne microbial illnesses.',
      C: 'traded drinking water to neighboring civilizations in exchange for decorative jewels.',
      D: 'were completely unaware of the chemical properties of natural volcanic stones.',
      E: 'intentionally contaminated urban reservoirs to deter invading military forces.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Örnekleme Amacı: Gelişmiş su arıtma teknolojisi',
    trapWarning: 'Zeolit ve kuartz mineralleri su arıtmak (purify water) için dağlık bölgelerden ithal edilmiştir.',
    explanation: 'Kuartz ve zeolit mineralleri: Mayaların uzak bölgelerden malzeme getirerek ileri düzey su arıtma teknolojileri geliştirdiğini gösterir. Doğru cevap A.'
  },
  {
    id: 'm3_q46',
    type: 'reading',
    title: '46. Soru - Paragraf 1',
    question: 'Which factor ultimately contributed to the breakdown of the Maya hydrological systems?',
    options: {
      A: 'Severe and prolonged megadroughts that exceeded their reservoir capacity.',
      B: 'A catastrophic volcanic eruption that buried the entire Yucatán Peninsula in ash.',
      C: 'An invasion by Egyptian armies who dismantled the monumental plazas.',
      D: 'The sudden poisoning of all quartz filtration beds by toxic algae.',
      E: 'A massive increase in perennial river flooding across the northern lowlands.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Son Cümle Analizi: Sistemin Çöküş Nedeni',
    trapWarning: 'Metnin son cümlesi: "until prolonged megadroughts overwhelmed their storage capacity" demektedir.',
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
      A: 'serves as a bidirectional communication pathway through which gut microbes influence neurological function.',
      B: 'proves that the human body functions completely independently of any microbial organisms.',
      C: 'demonstrates that serotonin is produced exclusively within the cerebral cortex.',
      D: 'prevents all forms of emotional stress from affecting human gastrointestinal motility.',
      E: 'eliminates the biological necessity for dietary fiber fermentation in mammals.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Gut-Brain Axis Tanımı: İki yönlü iletişim otoyolu',
    trapWarning: 'C şıkkında serotoninin sadece beyinde üretildiğini söyler; oysa metin %90\'ının bağırsakta üretildiğini belirtir.',
    explanation: 'Gut-brain axis önemi: bağırsak mikroplarının sinir sistemini ve beyin fonksiyonlarını etkilediği iki yönlü bir iletişim kanalı olmasıdır. Doğru cevap A.'
  },
  {
    id: 'm3_q48',
    type: 'reading',
    title: '48. Soru - Paragraf 2',
    question: 'It is stated in the text that gut bacteria produce neuroactive substances that can _____',
    options: {
      A: 'stimulate the vagus nerve and modulate systemic immune inflammation.',
      B: 'permanently paralyze the central nervous system within hours of ingestion.',
      C: 'convert all ingested proteins into toxic environmental hydrocarbons.',
      D: 'suppress all biological communication between the heart and lungs.',
      E: 'force the human host to cease consuming any form of dietary nutrition.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Nöroaktif Maddelerin Etkisi: Vagus sinirini uyarır ve enflamasyonu düzenler',
    trapWarning: 'Metindeki son cümle: "By stimulating the vagus nerve and modulating immune inflammation..." doğrudan bunu söyler.',
    explanation: 'Bağırsak bakterileri vagus sinirini uyarır ve bağışıklık enflamasyonunu düzenler (A şıkkı).'
  },
  {
    id: 'm3_q49',
    type: 'reading',
    title: '49. Soru - Paragraf 2',
    question: 'The term "holobiont" in the passage refers to _____',
    options: {
      A: 'a composite biological entity consisting of a host organism and its symbiotic microbes.',
      B: 'a solitary animal that is entirely immune to bacterial infections.',
      C: 'an artificial computational model used to simulate neural firing patterns.',
      D: 'a toxic parasite that destroys beneficial gut flora within the gastrointestinal tract.',
      E: 'a genetically engineered agricultural crop designed to resist droughts.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Terim Açıklaması: Holobiont (Konakçı ve mikropların ortak organizması)',
    trapWarning: 'Metin: "not a solitary entity, but a holobiont populated by trillions of symbiotic microbes" der.',
    explanation: 'Holobiont: konak canlı ile onunla yaşayan trilyonlarca simbiyotik mikroorganizmanın oluşturduğu ortak biyolojik varlıktır. Doğru cevap A.'
  },
  {
    id: 'm3_q50',
    type: 'reading',
    title: '50. Soru - Paragraf 2',
    question: 'What can be inferred about serotonin from the passage?',
    options: {
      A: 'A massive majority of the body’s peripheral supply is synthesized within the gut rather than the brain.',
      B: 'It is an indigestible mineral that cannot pass through the intestinal wall.',
      C: 'It is only produced when the human body undergoes extreme starvation.',
      D: 'It causes acute neurodegeneration whenever it comes into contact with the vagus nerve.',
      E: 'It has zero influence on emotional regulation or psychological resilience.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Çıkarım: Serotoninin büyük kısmının bağırsakta üretilmesi',
    trapWarning: 'Metin: "synthesize approximately ninety percent of the body’s peripheral serotonin" ifadesini içerir.',
    explanation: 'Serotonin hakkında çıkarım: Vücuttaki periferik serotoninin %90 gibi ezici bir çoğunluğu beyinde değil bağırsakta üretilir (A şıkkı).'
  },

  // PARAGRAF 3: Kuantum Kriptografi (51-54)
  {
    id: 'm3_q51',
    type: 'reading',
    title: '51. Soru - Paragraf 3 (Fizik & Kriptografi)',
    passage: 'Conventional digital encryption standards, such as RSA, rely on the mathematical difficulty of factoring enormous prime numbers using classical binary computers. However, the advent of fault-tolerant quantum computers threatens to render these algorithms utterly obsolete. Quantum computing leverages quantum mechanical superposition and entanglement to execute Shor\'s algorithm, cracking RSA encryptions in minutes rather than millennia. In response, cryptographers are deploying Quantum Key Distribution (QKD). Unlike mathematical encryption, QKD derives its security from the fundamental laws of quantum physics. Information is encoded onto individual photons in polarized quantum states. According to the Heisenberg uncertainty principle, any unauthorized attempt by an eavesdropper to intercept or measure a photon inevitably alters its quantum state, introducing detectable errors that alert the communicators immediately. Thus, QKD offers theoretically unbreakable security.',
    question: 'Classical encryption systems like RSA are vulnerable to quantum computing because _____',
    options: {
      A: 'quantum computers can execute algorithms that factor prime numbers exponentially faster than classical computers.',
      B: 'classical computers are incapable of transmitting digital data over optical fiber cables.',
      C: 'photons naturally destroy all binary mathematics when exposed to room temperature.',
      D: 'the Heisenberg uncertainty principle prevents classical algorithms from operating.',
      E: 'Shor’s algorithm proved that prime numbers do not actually exist in nature.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Kuantumun RSA\'yı Kırma Mekanizması: Shor algoritması ve asal çarpanlar',
    trapWarning: 'RSA\'nın zayıflığı: kuantum bilgisayarların Shor algoritmasıyla devasa asal sayıları dakikalar içinde çarpanlarına ayırabilmesidir.',
    explanation: 'Kuantum bilgisayarlar asal çarpanlara ayırma işlemini klasik bilgisayarlardan katbekat hızlı gerçekleştirir (A şıkkı).'
  },
  {
    id: 'm3_q52',
    type: 'reading',
    title: '52. Soru - Paragraf 3',
    question: 'According to the passage, Quantum Key Distribution (QKD) differs from conventional encryption because QKD _____',
    options: {
      A: 'bases its security on fundamental quantum physical principles rather than mathematical complexity.',
      B: 'requires binary silicon supercomputers to factor prime integers.',
      C: 'allows third-party eavesdroppers to alter polarized photons without detection.',
      D: 'can only be transmitted over short copper electrical wires.',
      E: 'has been proven mathematically insecure by theoretical cryptographers.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'QKD ile Klasik Arasındaki Temel Fark',
    trapWarning: 'Metin: "Unlike mathematical encryption, QKD derives its security from the laws of quantum physics" der.',
    explanation: 'Fark: QKD güvenliğini matematiksel zorluktan değil, kuantum fiziğinin temel yasalarından alır (A şıkkı).'
  },
  {
    id: 'm3_q53',
    type: 'reading',
    title: '53. Soru - Paragraf 3',
    question: 'How do users of QKD know if an unauthorized eavesdropper is intercepting their communication?',
    options: {
      A: 'Any measurement by an interceptor alters the photon’s quantum state, generating detectable errors.',
      B: 'The optical fiber cables physically ignite and melt upon interception.',
      C: 'The classical binary computer shuts down and permanently deletes all data.',
      D: 'Eavesdroppers are legally required to notify the transmission partners.',
      E: 'The Heisenberg uncertainty principle causes the computer monitor to flicker.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Casus Girişimi Nasıl Tespit Edilir? Fotonun durumunun bozulması',
    trapWarning: 'Heisenberg ilkesine göre fotonu ölçmek durumunu bozar ve fark edilir hata üretir.',
    explanation: 'Casus tespiti: Fotonu ölçmeye çalışmak onun kuantum durumunu bozar ve hemen tespit edilen hatalar üretir (A şıkkı).'
  },
  {
    id: 'm3_q54',
    type: 'reading',
    title: '54. Soru - Paragraf 3',
    question: 'The author concludes that Quantum Key Distribution _____',
    options: {
      A: 'provides an encryption method that is theoretically impossible to compromise undetected.',
      B: 'is far too expensive and hazardous ever to be utilized in practical commercial applications.',
      C: 'will be completely banned by international telecommunication treaties.',
      D: 'relies on the same outdated mathematical foundations as 1970s binary protocols.',
      E: 'cannot function unless classical computers are permanently discarded.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Sonuç Çıkarımı: "offers theoretically unbreakable security"',
    trapWarning: 'Metnin son cümlesi QKD\'nin teorik olarak kırılamaz güvenlik sunduğunu açıkça belirtir.',
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
      A: 'break down into microscopic pieces through solar radiation and mechanical wave action.',
      B: 'completely dissolve into harmless organic sugars within a few months.',
      C: 'are digested safely by deep-sea bacterial colonies without leaving toxic residues.',
      D: 'sink immediately into the Earth’s molten mantle through deep oceanic trenches.',
      E: 'neutralize industrial toxins like PCBs, making seawater significantly cleaner.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Plastiğin Parçalanma Süreci: Güneş ışığı ve dalga aşınması',
    trapWarning: 'Plastikler biyolojik olarak çözünmez (biodegrade olmaz); fiziksel olarak mikro parçalara ayrılır.',
    explanation: 'Makroplastikler: güneşin ultraviyole radyasyonu ve dalga aşınmasıyla mikroskobik parçalara (mikroplastiklere) ayrılır (A şıkkı).'
  },
  {
    id: 'm3_q56',
    type: 'reading',
    title: '56. Soru - Paragraf 4',
    question: 'It is stated in the passage that microplastics in seawater are dangerous partly because they _____',
    options: {
      A: 'adsorb toxic chemical contaminants from the surrounding water and transfer them into marine animals.',
      B: 'emit radioactive alpha particles that rapidly warm the temperature of the oceans.',
      C: 'form massive floating reefs that block transoceanic container shipping routes.',
      D: 'prevent marine phytoplankton from absorbing ambient solar radiation.',
      E: 'evaporate into the atmosphere, causing permanent clouds over equatorial latitudes.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Mikroplastiğin Tehlikesi: Toksin süngeri gibi çalışması',
    trapWarning: 'Metin: "particles act as chemical sponges, adsorbing hydrophobic organic toxins" der.',
    explanation: 'Tehlike: mikroplastiklerin sudaki zehirli kimyasalları sünger gibi emip canlıların bünyesine taşımasıdır (A şıkkı).'
  },
  {
    id: 'm3_q57',
    type: 'reading',
    title: '57. Soru - Paragraf 4',
    question: 'The passage suggests that the ingestion of microplastics by marine animals causes _____',
    options: {
      A: 'digestive blockages and the release of harmful endocrine-disrupting chemicals.',
      B: 'an immediate and rapid increase in reproductive fertility across all fish species.',
      C: 'the complete mutation of bivalves into air-breathing terrestrial amphibians.',
      D: 'the total elimination of zooplankton from the global maritime food chain.',
      E: 'a dramatic acceleration in the metabolic rate of baleen whales.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Canlılardaki Zararlar: Sindirim tıkanması ve hormon bozucular',
    trapWarning: 'Metin: "blockage of digestive tracts, combined with leaching of endocrine-disrupting additives" der.',
    explanation: 'Zararlar: sindirim kanalının tıkanması ve hormon bozucu kimyasalların vücuda sızmasıdır (A şıkkı).'
  },
  {
    id: 'm3_q58',
    type: 'reading',
    title: '58. Soru - Paragraf 4',
    question: 'The term "bioaccumulate" in the passage implies that contaminants _____',
    options: {
      A: 'increase in concentration as they are passed up from lower to higher levels of the food chain.',
      B: 'naturally dilute and vanish as larger predators consume smaller prey.',
      C: 'spontaneously transform into nutritious proteins inside apex predators.',
      D: 'are completely eliminated from the body through ordinary respiration.',
      E: 'only affect primitive microbial organisms while sparing larger vertebrates.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Kavram Tanımı: Bioaccumulate (Besin zincirinde birikerek yoğunlaşmak)',
    trapWarning: 'Biyo-birikim piramidin tepesine çıktıkça zehir yoğunluğunun katlanarak artmasıdır.',
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
      A: 'the human brain possesses an innate, genetically determined capacity for grammatical structuring.',
      B: 'parents provide dozens of hours of rigorous formal grammatical drills daily.',
      C: 'all human languages utilize identical vocabulary and pronunciation patterns.',
      D: 'infants do not require any exposure to auditory speech to master vocabulary.',
      E: 'linguistic competence is completely independent of biological neurology.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Chomsky\'nin Görüşü: Doğuştan gelen genetik dil kapasitesi (LAD)',
    trapWarning: 'Chomsky çocukların resmi derslerle değil, doğuştan gelen genetik donanımla dili edindiğini savunur.',
    explanation: 'Chomsky\'ye göre: insan beyni doğuştan gelen ve genetik olarak belirlenmiş bir dil edinim mekanizmasına (LAD) sahiptir (A şıkkı).'
  },
  {
    id: 'm3_q60',
    type: 'reading',
    title: '60. Soru - Paragraf 5',
    question: 'Neuroimaging studies mentioned in the passage indicate that speech exposure _____',
    options: {
      A: 'promotes structural synaptic pruning in specialized left-hemispheric brain regions.',
      B: 'permanently damages Broca’s and Wernicke’s areas in young infants.',
      C: 'forces both hemispheres of the brain to develop identical acoustic processing functions.',
      D: 'causes infants to forget non-verbal visual communication cues completely.',
      E: 'has no measurable effect on cerebral cortical development before adulthood.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Nörogörüntüleme Bulgusu: Sol yarımküredeki sinaptik budanma',
    trapWarning: 'Metin: "Broca\'s and Wernicke\'s areas exhibit rapid structural synaptic pruning" der.',
    explanation: 'Nörogörüntüleme: konuşmaya maruz kalmanın beynin sol yarımküresindeki uzmanlaşmış alanlarda sinaptik budanmayı tetiklediğini gösterir (A şıkkı).'
  },
  {
    id: 'm3_q61',
    type: 'reading',
    title: '61. Soru - Paragraf 5',
    question: 'The passage highlights the "critical period" hypothesis to demonstrate that _____',
    options: {
      A: 'linguistic exposure must occur during early neurodevelopment for full grammatical fluency to develop.',
      B: 'adults can acquire secondary languages much more rapidly than young infants.',
      C: 'children who are isolated in infancy naturally invent their own complex spoken languages.',
      D: 'auditory impairment has zero impact on syntactic processing neural networks.',
      E: 'pedagogical grammar training should only begin after an individual turns eighteen.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Critical Period (Kritik Dönem) Hipotezi Analizi',
    trapWarning: 'Kritik dönemde dil maruziyeti olmazsa sinir devreleri körelir ve anadili seviyesi imkansızlaşır.',
    explanation: 'Kritik dönem: tam dilsel akıcılık için dil maruziyetinin erken nörogelişim evresinde gerçekleşmesi gerektiğini kanıtlar (A şıkkı).'
  },
  {
    id: 'm3_q62',
    type: 'reading',
    title: '62. Soru - Paragraf 5',
    question: 'What happens if a child is completely deprived of linguistic exposure during early childhood?',
    options: {
      A: 'The neural circuitry responsible for syntactic processing permanently atrophies.',
      B: 'The child effortlessly masters multiple languages once they enter primary school.',
      C: 'Broca’s area shifts completely to the right hemisphere of the cerebral cortex.',
      D: 'The child develops superior mathematical and geometric reasoning abilities.',
      E: 'The Language Acquisition Device compensates by enhancing auditory acuity.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Son Cümle Çıkarımı: Sinir devrelerinin kalıcı olarak körelmesi',
    trapWarning: 'Metnin son cümlesi: "neural circuitry required for syntactic processing permanently atrophies" demektedir.',
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
      A: 'So you are implying that amyloid plaques might merely be a secondary symptom rather than the primary cause of neurodegeneration?',
      B: 'Then we should double the antibody dosage and continue the trial for another five years without changes.',
      C: 'Are you suggesting that clinical trials should never be monitored by independent regulatory agencies?',
      D: 'The laboratory testing equipment was obviously uncalibrated, so the amyloid measurements are invalid.',
      E: 'Most patients actually prefer taking oral tablets rather than undergoing intravenous antibody infusions.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Sonraki Cevaptan Geriye Yürüme: "Precisely. If clearing plaques doesn\'t halt decline..."',
    trapWarning: 'Dr. Miller "Tam olarak öyle. Eğer plakları temizlemek gerilemeyi durdurmuyorsa yönümüzü değiştirmeliyiz" diyerek Dr. Evans\'ın hipotez şüphesini doğrular.',
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
      A: 'What if we specify dynamic electrochromic glass that modulates solar heat gain without obstructing views?',
      B: 'Then let us replace the entire glass design with solid concrete walls devoid of any windows.',
      C: 'We can simply instruct library patrons to carry personal battery-operated handheld fans.',
      D: 'Air-conditioning electricity costs are completely irrelevant because the municipality has unlimited funds.',
      E: 'Glass panels cannot support the structural weight of the library\'s third-floor roof.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Teknik Çözüm Önerisi & Sonraki Cümle Uyumu: "Electrochromic smart glass"',
    trapWarning: 'Thomas son cümlede "Electrochromic smart glass would solve the problem" diyerek Rachel\'ın önerisini doğrular.',
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
      A: 'Illegal logging plays a minor role, but the primary culprit is the widespread use of agricultural herbicides that destroy milkweed across North American breeding corridors.',
      B: 'No, monarch butterflies have simply chosen to migrate to South America instead of Mexico this winter.',
      C: 'The sanctuary rangers have deliberately relocated the butterflies to climate-controlled greenhouses.',
      D: 'Butterflies are completely immune to any agricultural chemicals or industrial pesticides.',
      E: 'The decline is entirely fictional because satellite imagery cannot detect individual insect wings.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Sonraki Cevaptan Geriye Yürüme: "Agricultural practices in the Midwest decimating food supply"',
    trapWarning: 'Liam son cümlede "Demek ki orman korunsan bile binlerce kilometre uzaktaki herbisitler besinlerini yok ediyor" der.',
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
      A: 'Could we introduce an in-memory caching layer to intercept and serve repetitive read queries?',
      B: 'Why don\'t we just delete all customer review tables to reduce disk space?',
      C: 'We should ask customers to avoid shopping on our platform during the evening hours.',
      D: 'Relational databases are completely obsolete, so let us rewrite the entire platform in assembly code.',
      E: 'Latency is beneficial because it encourages customers to browse more products while waiting.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Problem-Çözüm Eşleştirmesi & Sonraki Cümle Uyumu: "Redis cache / in-memory cache"',
    trapWarning: 'David "Excellent idea... in-memory Redis cache" diyerek Miriam\'ın önerisini över.',
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
      A: 'Before we speculate about exotic multiverse theories, we should conduct rigorous cross-calibration tests with ground-based radio arrays.',
      B: 'Then let us publish an immediate press release announcing that Albert Einstein’s theory of relativity has been disproven.',
      C: 'The cosmic microwave background is purely theoretical anyway, so slight temperature fluctuations are meaningless.',
      D: 'We should permanently deactivate the orbital telescope to save electrical battery power.',
      E: 'Inflationary cosmology has never been supported by any empirical observational evidence.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Akademik İhtiyat / Doğrulama Çağrısı: "Until independent observatory confirms..."',
    trapWarning: 'Dr. Vance "I agree. Until an independent observatory confirms..." diyerek Thorne\'un ihtiyatlı yaklaşımını onaylar.',
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
      B: 'Even though city authorities had reinforced the drainage infrastructure after 2018, the recent torrential rain still caused catastrophic damages.',
      C: 'The recent storm was so powerful that no amount of drainage infrastructure improvement after 2018 could have prevented the disaster.',
      D: 'Unless municipal officials immediately reconstruct urban drainage systems, future storms will cause even more destruction than in 2018.',
      E: 'Municipal authorities had already upgraded the drainage networks before 2018, yet the city was unprepared for torrential rainfall.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Type 3 Devrik If Analizi: Had retrofitted (Yenileseydi yıkım olmazdı -> Yenilemediği için oldu)',
    trapWarning: 'B şıkkında altyapının güçlendirildiği iddia edilir; oysa orijinal cümle güçlendirilmediğini (had retrofitted ... would not have) anlatır.',
    explanation: 'Orijinal cümle: "Yetkililer 2018 sellerinden sonra altyapıyı yenileseydi, son fırtına bu kadar büyük yıkıma yol açmazdı." Birebir karşılık A şıkkıdır: "Yenilemedikleri için son fırtına büyük yıkıma yol açtı."'
  },
  {
    id: 'm3_q69',
    type: 'restatement',
    title: '69. Soru - Anlamca En Yakın Cümle',
    question: 'So computationally demanding is real-time high-resolution climate modeling that even the world’s most advanced supercomputers require weeks to simulate a single century.',
    options: {
      A: 'Real-time high-resolution climate simulation requires so much computational power that simulating one century takes weeks, even on top supercomputers.',
      B: 'Supercomputers can simulate several centuries of global climate change in a matter of minutes due to modern algorithmic efficiencies.',
      C: 'Because climate change occurs very slowly, supercomputers only need to run simulations once every century.',
      D: 'Advanced supercomputers have become so inexpensive that even small universities can simulate centuries of climate models in real time.',
      E: 'Unless meteorologists simplify their mathematical climate equations, supercomputers will be unable to run any future planetary simulations.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'So + Adj + that (Öylesine işlem gücü gerektirir ki...) Kalıp Eşleştirmesi',
    trapWarning: 'B şıkkında dakikalar içinde simüle ettiğini söyler; orijinal cümle haftalar sürdüğünü belirtir.',
    explanation: 'So computationally demanding that (öylesine işlem gücü gerektirir ki) = requires so much computational power that takes weeks. Doğru cevap A.'
  },
  {
    id: 'm3_q70',
    type: 'restatement',
    title: '70. Soru - Anlamca En Yakın Cümle',
    question: 'While regular cardiovascular workouts undeniably bolster heart longevity, their protective benefits against cognitive decline are maximized only when combined with mentally challenging tasks.',
    options: {
      A: 'Aerobic exercises certainly strengthen the heart, but their ability to guard against mental decline is greatest when accompanied by intellectual activities.',
      B: 'Engaging in intellectually challenging tasks protects against cognitive decline much more effectively than any form of cardiovascular exercise.',
      C: 'Unless individuals perform vigorous physical exercise daily, intellectual problem-solving will provide zero protection against dementia.',
      D: 'Cardiovascular longevity is far more critical for brain function than any form of intellectual or puzzle-solving mental engagement.',
      E: 'Heart health can be completely restored through intellectual puzzles alone, eliminating the necessity for physical aerobic conditioning.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Zıtlık & Şart Analizi: While undeniably bolsters ... maximized only when combined with...',
    trapWarning: 'B şıkkı zihinsel egzersizin spordan daha üstün olduğunu iddia eder; oysa metin kombinasyonu (birlikte yapılmasını) savunur.',
    explanation: 'Orijinal cümle: Kardiyovasküler egzersiz kalp sağlığını kesinlikle artırsa da, zihinsel gerilemeye karşı koruyucu faydası ancak zihinsel uğraşla birleştirildiğinde en üst düzeye çıkar. Birebir karşılık A\'dır.'
  },
  {
    id: 'm3_q71',
    type: 'restatement',
    title: '71. Soru - Anlamca En Yakın Cümle',
    question: 'Scarcely had the volcanic observatory detected the harmonic tremor beneath the caldera when civil defense authorities initiated mandatory civilian evacuations.',
    options: {
      A: 'Civil defense officials ordered mandatory civilian evacuations almost immediately after the observatory identified the harmonic tremor under the caldera.',
      B: 'Civil defense authorities waited until the volcanic caldera began erupting violently before issuing any evacuation orders for residents.',
      C: 'Even though harmonic tremors were detected beneath the caldera, civilian evacuations were deemed unnecessary by emergency officials.',
      D: 'Volcanic observatories have difficulty detecting harmonic tremors because magma movements under calderas are completely silent.',
      E: 'Civilian populations voluntarily evacuated their homes long before the volcanic observatory detected any seismic tremors.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Scarcely had ... when = Almost immediately after (-er etmez / anında)',
    trapWarning: 'Scarcely ... when anında gerçekleşen eylemi anlatır. B şıkkı gecikmeli yapıldığını iddia eder.',
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
      B: 'Consequently, deep-sea organisms have completely lost their biological eyes through millions of years of evolutionary regression.',
      C: 'Furthermore, terrestrial land mammals frequently utilize bioluminescence to navigate through subterranean forest caves at night.',
      D: 'However, producing organic light requires so much caloric energy that most bioluminescent fish die of severe malnutrition.',
      E: 'Instead, marine biologists have proven that deep-sea fish generate light strictly as an accidental byproduct of kidney filtration.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Genel Tanımdan Örneğe Geçiş: Boşluktan sonraki "For example" cümlesi avlanma ve kamuflajı açıklar.',
    trapWarning: 'Boşluktan sonraki cümle avlanma (predatory lure) ve kamuflajdan (camouflage) bahseder. Boşluk bu iki fonksiyonu genelleyen A şıkkıdır.',
    explanation: 'A şıkkı: "This illumination serves multifaceted functions, ranging from predatory entrapment to camouflage" (Bu ışık avlanmadan kamuflaja kadar çok yönlü işlevler görür). Ardından gelen "For example" bunu kanıtlar. Doğru cevap A.'
  },
  {
    id: 'm3_q73',
    type: 'paragraph_completion',
    title: '73. Soru - Paragraf Tamamlama',
    question: `Soil salinization poses a devastating threat to global agricultural food security, especially in arid and semi-arid river basins. When farmers utilize poorly managed flood irrigation in dry climates, intense evaporation draws subterranean groundwater to the soil surface. (_____) As these toxic salt concentrations accumulate in the root zone, they exert intense osmotic pressure, preventing crops from absorbing essential moisture and eventually rendering fertile croplands completely barren.`,
    options: {
      A: 'As the surface water evaporates, dissolved mineral salts are left behind in the upper topsoil layers.',
      B: 'Consequently, crop yields increase dramatically because mineral salts act as powerful natural fertilizers.',
      C: 'Modern farmers have therefore abandoned all chemical fertilizers in favor of pure seawater irrigation.',
      D: 'Subterranean groundwater, in contrast, contains zero trace minerals or dissolved chemical ions.',
      E: 'Heavy monsoon rains invariably wash all soil nutrients into deep geological bedrock formations.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Mantıksal Adım Takibi: Buharlaşma suyu çeker -> Su buharlaşınca tuz geride kalır -> Tuz kökleri kurutur.',
    trapWarning: 'Önceki cümle buharlaşmadan bahsetti; boşlukta su buharlaşınca tuzun üst katmanda biriktiği (salts left behind) söylenmelidir.',
    explanation: 'A şıkkı su buharlaşınca tuzların üst toprak katmanında kaldığını açıklar. Sonraki cümle bu tuz konsantrasyonunun (these toxic salt concentrations) etkisini anlatır. Doğru cevap A.'
  },
  {
    id: 'm3_q74',
    type: 'paragraph_completion',
    title: '74. Soru - Paragraf Tamamlama',
    question: `For decades, planetary geologists considered Mercury to be a geologically dead world—a desolate, heavily cratered iron sphere that had cooled into complete inactivity billions of years ago. However, high-resolution imagery captured by NASA’s MESSENGER spacecraft has overturned this consensus. (_____) These tectonic landforms indicate that as Mercury\'s disproportionately colossal metallic core has cooled and contracted, the planet’s outer crust has literally buckled and shrunk by several kilometers, a geological process that may continue into the present day.`,
    options: {
      A: 'Orbital instruments revealed extensive fault scarps, known as lobate scarps, cutting across relatively young impact craters.',
      B: 'The probe discovered that Mercury possesses liquid water oceans covering over fifty percent of its surface.',
      C: 'Scientists proved that Mercury has maintained an identical planetary diameter since the birth of the solar system.',
      D: 'Commercial mining satellites have established automated titanium extraction factories near Mercury\'s equator.',
      E: 'Astronomers concluded that Mercury was originally an icy moon ejected from the orbit of Neptune.'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Referans Kelime Uyumu: Boşluktan sonra gelen "These tectonic landforms"',
    trapWarning: 'Boşluktan sonraki cümle "These tectonic landforms" (Bu tektonik yer şekilleri) der. Demek ki boşlukta bu şekiller (fault scarps / lobate scarps) tanıtılmalıdır!',
    explanation: 'A şıkkı tektonik kırık yamaçlarını (fault scarps) tanıtır; sonraki cümle "These tectonic landforms" diyerek bu açıklamayı devam ettirir. Doğru cevap A.'
  },
  {
    id: 'm3_q75',
    type: 'paragraph_completion',
    title: '75. Soru - Paragraf Tamamlama',
    question: `In classical economics, consumers were long assumed to be strictly rational agents who systematically calculate marginal utilities to maximize their personal financial welfare. However, the emergence of behavioral economics in the late twentieth century dismantled this theoretical abstraction. (_____) Consequently, human decision-makers consistently deviate from idealized economic models, exhibiting cognitive biases like loss aversion and present bias that lead to systematically suboptimal financial choices.`,
    options: {
      A: 'Pioneering researchers demonstrated that human cognition relies on heuristic shortcuts that are vulnerable to emotional biases.',
      B: 'Classical mathematical formulas have proven completely infallible in predicting daily consumer spending habits.',
      C: 'Consumers invariably calculate long-term investment probabilities with absolute statistical perfection.',
      D: 'Modern corporations have completely eliminated advertising because consumers only buy essential goods.',
      E: 'Behavioral economists proved that human beings possess boundless computing power in their prefrontal cortex.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Teorik Geçiş & Boşluk Sonrası Uyumu: "cognitive biases like loss aversion"',
    trapWarning: 'Boşluktan sonra "bilişsel önyargılar sergilerler" denmektedir. Boşluk insanın kestirme yollara (heuristics) ve önyargılara dayandığını söyleyen A şıkkıdır.',
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
