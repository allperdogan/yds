import { GrammarDrillQuestion } from '../types';
import { EXTENDED_GRAMMAR_BANK } from './grammarBankExtended';

export type { GrammarDrillQuestion };

const BASE_GRAMMAR_DRILL_BANK: GrammarDrillQuestion[] = [
  // =========================================================================
  // 1. TENSES & TIME CLAUSES (ZAMANLAR VE ZAMAN BAĞLAÇLARI)
  // =========================================================================
  {
    id: 'g_t1',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Since Kuralı (Past Simple -> Present Perfect)',
    question: 'Ever since researchers at CERN _____ the existence of the Higgs boson particle in 2012, theoretical physicists _____ to construct a more unified model of quantum gravity.',
    options: {
      A: 'discovered / are striving',
      B: 'have discovered / strove',
      C: 'discovered / have been striving',
      D: 'had discovered / will strive',
      E: 'were discovering / strive'
    },
    answer: 'C',
    difficulty: 'İleri',
    tacticUsed: 'Since + Past Simple (V2) , Present Perfect (Have/Has V3 / Have been V-ing) Kalıbı',
    trapWarning: 'B şıkkında "have discovered" çeldiricisi vardır; unutma, "since" yanındaki cümlecik daima Past Simple (V2) olur, ana cümle Present Perfect olur!',
    explanation: '🎯 FORMÜL: "Since / Ever since + V2 (Geçmiş Belirli Tarih: in 2012), [Ana Cümle: Present Perfect (Have/Has V3 veya Have been V-ing)]". 2012\'de keşfedildiğinden beri fizikçiler çabalamaya devam etmektedir (have been striving). Doğru cevap C.'
  },
  {
    id: 'g_t2',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'By the time + Past (Past Perfect Uyumu)',
    question: 'By the time European cartographers _____ compiling the first comprehensive maritime charts of the Indian Ocean in the late 16th century, Arab navigators _____ those routes for over four centuries.',
    options: {
      A: 'finished / have navigated',
      B: 'finished / had been navigating',
      C: 'had finished / navigated',
      D: 'were finishing / would navigate',
      E: 'finish / are navigating'
    },
    answer: 'B',
    difficulty: 'İleri',
    tacticUsed: 'By the time + V2 -> Had V3 / Had been V-ing Formülü',
    trapWarning: 'C şıkkında "had finished" çeldiricisi vardır; "By the time" kendi cümlesinde past perfect almaz, ana cümle past perfect olur!',
    explanation: '🎯 FORMÜL: "By the time + Past Simple (V2), Past Perfect (Had V3 / Had been V-ing)". Avrupalılar haritaları bitirdiğinde (finished), Araplar zaten 400 yıldır o rotalarda seyrediyordu (had been navigating). Doğru cevap B.'
  },
  {
    id: 'g_t3',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'By the time + Present (Future Perfect Uyumu)',
    question: 'By the time the new orbital space telescope _____ operational in late 2028, engineers on the ground _____ more than two million automated telemetry simulations.',
    options: {
      A: 'becomes / will have conducted',
      B: 'will become / conduct',
      C: 'became / have conducted',
      D: 'has become / will conduct',
      E: 'is becoming / had conducted'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'By the time + Present -> Future Perfect (Will have V3) Formülü',
    trapWarning: 'Zaman bağlaçlarının (by the time, when, after) hemen içine "will / would" GELMEZ! B şıkkı bu nedenle anında elenir.',
    explanation: '🎯 FORMÜL: "By the time + Present Simple (V1/s), Future Perfect (Will have V3)". Teleskop 2028\'de faaliyete geçinceye kadar, yerdeki mühendisler 2 milyondan fazla simülasyon tamamlamış olacaklar (will have conducted). Doğru cevap A.'
  },
  {
    id: 'g_t4',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Until & Geçmişte Kesinti (Past Continuous & Past Simple)',
    question: 'Anthropologists generally believe that early hominids _____ primarily in nomadic hunter-gatherer bands until the advent of systematic agriculture _____ permanent settlements possible.',
    options: {
      A: 'live / makes',
      B: 'had lived / will make',
      C: 'lived / made',
      D: 'have lived / had made',
      E: 'were living / has made'
    },
    answer: 'C',
    difficulty: 'Orta',
    tacticUsed: 'Tarihsel Süreç & Genel Past-Past Uyumu',
    trapWarning: 'Until geçmişteki iki tamamlanmış olayı bağlarken her iki taraf da Simple Past (V2) olabilir; zaman kayması olmadan sade geçmiş anlatılır.',
    explanation: '🎯 ANALİZ: Erken hominidler (tarih öncesi dönem) tarımın kalıcı yerleşimi mümkün kılmasına kadar göçebe avcı-toplayıcı olarak yaşadılar. İki eylem de tarihte bittiği için "lived / made" (V2 / V2) kusursuz zamansal uyumdur. Doğru cevap C.'
  },
  {
    id: 'g_t5',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'No sooner ... than & Past Perfect Devriklik',
    question: 'No sooner _____ the pharmaceutical conglomerate received regulatory approval for the revolutionary vaccine than its global manufacturing plants _____ production at full capacity.',
    options: {
      A: 'did / have commenced',
      B: 'had / commenced',
      C: 'has / commence',
      D: 'was / commencing',
      E: 'would / had commenced'
    },
    answer: 'B',
    difficulty: 'YDS Master',
    tacticUsed: 'No sooner + Had + S + V3 ... than + S + V2 Kalıbı',
    trapWarning: 'No sooner ile "when" KULLANILMAZ! Sadece "than" ile eşleşir. Hard / Scarcely ise "when" ile eşleşir.',
    explanation: '🎯 FORMÜL: "No sooner had + S + V3 ... than + S + V2" (Tam ... yapmıştı ki ... oldu). İlaç devi ruhsat alır almaz fabrikalar üretime başladı. Doğru cevap B.'
  },
  {
    id: 'g_t6',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Over the last / In the past + Yıl (Present Perfect)',
    question: 'Over the past three decades, satellite telemetry data _____ conclusively that polar ice shelves _____ at a rate far exceeding earlier climatological projections.',
    options: {
      A: 'demonstrated / will melt',
      B: 'has demonstrated / are melting',
      C: 'demonstrates / had melted',
      D: 'had demonstrated / melted',
      E: 'was demonstrating / have melted'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'Over / In / During + the past/last X years = Present Perfect Zorunluluğu',
    trapWarning: '"Over the past decades" ifadesini görünce "past" kelimesine aldanıp Simple Past (V2) seçmeyin! "Son X yılda" anlamına gelir ve Present Perfect gerektirir.',
    explanation: '🎯 ÖSYM ALTIN KURALI: "In/Over/During/For the past/last + zaman" kalıbı %100 Present Perfect (have/has V3) çeker. İkinci tarafta ise şu anda devam eden erime "are melting" ile verilir. Doğru cevap B.'
  },

  // =========================================================================
  // 2. CONJUNCTIONS & TRANSITIONS (ZITLIK, SEBEP, KOŞUL BAĞLAÇLARI)
  // =========================================================================
  {
    id: 'g_c1',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Although vs Despite (Cümle vs İsim Grubu Elemesi)',
    question: '_____ substantial public investments in urban cycling infrastructure, the proportion of commuters utilizing private automobiles has declined only marginally in metropolitan areas.',
    options: {
      A: 'Although',
      B: 'Even though',
      C: 'In spite of',
      D: 'Much as',
      E: 'Whereas'
    },
    answer: 'C',
    difficulty: 'Orta',
    tacticUsed: 'Virgül ve Yapı Taktiği: İsim Tamlaması Alan Zıtlık Edatı',
    trapWarning: 'A, B ve D şıklarının tümü "zıtlık" verir! Ancak hepsi kendisinden sonra TAM CÜMLE (Özne + Yüklem) ister. Boşluktan sonra ise sadece isim tamlaması ("substantial public investments...") vardır.',
    explanation: '🎯 ÖSYM ŞIK ELEME HİLESİ: Boşluktan sonra fiil (verb) yok, yalnızca bir isim tamlaması (noun phrase) var! Although / Even though / Much as / Whereas + Cümle (S+V) alır. In spite of / Despite ise İsim Grubu (Noun / V-ing) alır. Doğru cevap C.'
  },
  {
    id: 'g_c2',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Due to vs Because (İsim Grubu vs Cümle)',
    question: 'Severe crop failures occurred throughout the fertile river valleys, primarily _____ the unseasonably prolonged heatwaves that depleted regional irrigation reservoirs.',
    options: {
      A: 'because of',
      B: 'because',
      C: 'since',
      D: 'as',
      E: 'inasmuch as'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Sebep Bağlacı: Prepositional Phrase (Because of + Noun Phrase)',
    trapWarning: 'B, C, D ve E şıkları eşanlamlıdır ve hepsi tam cümle (S+V) alır. 4 şık aynı yapıdaysa hiçbiri doğru cevap olamaz; isim alan tek şık A\'dır!',
    explanation: '🎯 ÖSYM ŞIK ELEME HİLESİ: "because = since = as = inasmuch as" dördü de tam cümle ister. Boşluktan sonra "the unseasonably prolonged heatwaves..." bir isim öbeğidir (heatwaves niteleyen bir relative clause ile devam etmiştir, ana fiil yoktur). İsim alan tek seçenek "because of"dur. Doğru cevap A.'
  },
  {
    id: 'g_c3',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'While / Whereas (Taban Tabana Zıtlık Karşılaştırması)',
    question: '_____ developed nations possess the financial cushions required to subsidize clean energy transitions, emerging economies often rely on domestic coal reserves to sustain industrialization.',
    options: {
      A: 'While',
      B: 'In case',
      C: 'Provided that',
      D: 'Now that',
      E: 'Unless'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Doğrudan Karşılaştırma / Özne Zıtlığı (Developed nations vs Emerging economies)',
    trapWarning: 'Özneler karşılaştırılıyorsa (gelişmiş ülkeler vs gelişmekte olan ülkeler) ÖSYM %95 "While" veya "Whereas" arar.',
    explanation: '🎯 FORMÜL: Gelişmiş ülkeler temiz enerjiye geçişi finanse edebilirKEN (While), gelişmekte olan ülkeler kömüre bağımlı kalmaktadır. Zıtlık ve karşılaştırma bağlacı "While"dır. Doğru cevap A.'
  },
  {
    id: 'g_c4',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'However / Nevertheless (Noktalama & Geçiş Kelimesi)',
    question: 'Renewable wind farms generate zero direct carbon emissions during electricity generation; _____, the mining of rare earth elements essential for turbine magnets entails significant ecological degradation.',
    options: {
      A: 'furthermore',
      B: 'therefore',
      C: 'however',
      D: 'consequently',
      E: 'likewise'
    },
    answer: 'C',
    difficulty: 'İleri',
    tacticUsed: 'Artı (+) / Eksi (-) Geçişi ve Noktalı Virgül (; however,)',
    trapWarning: 'Noktalı virgül (;) ve virgül (,) arasına gelen zıtlık zarfları "however / nevertheless / nonetheless" kalıbıdır. İlk cümle pozitif (+ sıfır emisyon), ikinci cümle negatif (- ekolojik tahribat) olduğu için zıtlık şarttır.',
    explanation: '🎯 FORMÜL: Rüzgar santralleri sıfır emisyon üretir (+); ANCAK (however), türbin mıknatısları için madencilik ciddi tahribata yol açar (-). Zıtlık belirteci "however"dır. Doğru cevap C.'
  },
  {
    id: 'g_c5',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Unless = If not (Koşul ve Olumsuzluk Dengesi)',
    question: 'Coastal cities will face catastrophic flood damage over the next fifty years _____ municipal authorities invest billions of dollars in reinforced seawalls and wetland restoration.',
    options: {
      A: 'provided that',
      B: 'unless',
      C: 'as long as',
      D: 'on condition that',
      E: 'in case'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'Unless (Medikçe / Madıkça / Eğer Olmazsa) Mantık Testi',
    trapWarning: 'A, C ve D şıkları (provided that = as long as = on condition that) tamamen aynı anlama gelir ("eğer/şartıyla"). Üçü de birbirini eler!',
    explanation: '🎯 ÖSYM ELEME TAKTİĞİ: "provided that = as long as = on condition that" üçlüsü aynı anlama gelir ve elenir. Kıyı şehirleri felaket boyutunda su baskınlarıyla karşılaşacaktır; eğer yetkililer milyarlarca dolar yatırım YAPMAZSA (unless). Doğru cevap B.'
  },
  {
    id: 'g_c6',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'In case (Önlem Alma Bağlacı)',
    question: 'The aviation safety administration mandates that all commercial airliners carry redundant backup oxygen systems _____ cabin decompression occurs at high altitude.',
    options: {
      A: 'so that',
      B: 'in case',
      C: 'although',
      D: 'even if',
      E: 'unless'
    },
    answer: 'B',
    difficulty: 'İleri',
    tacticUsed: 'In case + İstenmeyen Durum / İhtimal (Önlem Amaçlı Taşıma)',
    trapWarning: 'A şıkkındaki "so that (böylece / olsun diye)" decompression gerçekleşsin diye taşınmaz! Decompression "olması ihtimaline karşı" (in case) taşınır.',
    explanation: '🎯 FORMÜL: Ana cümlede bir tedbir/önlem (carry backup oxygen) varsa ve yan cümlede kötü bir olasılık (cabin decompression) varsa cevap "in case" (-mesi ihtimaline karşı / olursa diye) olur. Doğru cevap B.'
  },

  // =========================================================================
  // 3. PREPOSITIONS & PHRASAL COMBINATIONS (EDATLAR VE EDATLI İFADELER)
  // =========================================================================
  {
    id: 'g_p1',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Vulnerable / Susceptible / Prone + TO Kombinasyonu',
    question: 'Due to severe soil degradation and deforestation, the arid slopes of the Andes mountains are exceptionally susceptible _____ catastrophic mudslides _____ the rainy season.',
    options: {
      A: 'with / by',
      B: 'to / during',
      C: 'for / on',
      D: 'from / throughout',
      E: 'at / upon'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'Collocation: Susceptible TO + Süreç Bildiren DURING',
    trapWarning: 'ÖSYM\'de "susceptible, vulnerable, prone, accessible, indifferent, superior" sıfatları DAİMA "TO" edatı ile kullanılır.',
    explanation: '🎯 ÖSYM ALTIN FORMÜLÜ: "susceptible TO" (-e duyarlı / yatkın). Yağmur mevsimi boyunca / esnasında için "during the rainy season". Doğru cevap B.'
  },
  {
    id: 'g_p2',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Attribute something TO & Result FROM',
    question: 'Epidemiologists attribute the sudden decline _____ cardiovascular fatalities primarily _____ widespread community adoption of preventative dietary interventions.',
    options: {
      A: 'in / to',
      B: 'on / with',
      C: 'for / from',
      D: 'about / by',
      E: 'with / into'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Decline IN something + Attribute X TO Y',
    trapWarning: 'Artış/azalış kelimeleri (increase, decrease, surge, decline, drop) bir alandaki değişimi anlatırken daima "IN" alır (decline in fatalities). Attribute fiili ise daima "TO" alır.',
    explanation: '🎯 ÇİFTE EDAT KURALI: 1. Boşluk: "decline in fatalities" (ölümlerdeki azalma). 2. Boşluk: "attribute X to Y" (X\'i Y\'ye bağlamak / atfetmek). Doğru cevap A.'
  },
  {
    id: 'g_p3',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'In terms of / By means of / On behalf of Ayrımı',
    question: 'Early human migrations across the Bering land bridge were evaluated strictly _____ archaeological tool artifacts rather than genetic markers.',
    options: {
      A: 'on behalf of',
      B: 'in terms of',
      C: 'with a view to',
      D: 'in spite of',
      E: 'for the sake of'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'In terms of (Bakımından / Açısından) Sabit Edat Kalıbı',
    trapWarning: '"on behalf of" (-in adına/temsilen) ve "with a view to" (-mek amacıyla) anlamına gelir ve arkeolojik alet bağlamına uymaz.',
    explanation: '🎯 FORMÜL: Erken insan göçleri genetik belirteçler yerine alet kalıntıları "açısından / bakımından" (in terms of) değerlendirilmiştir. Doğru cevap B.'
  },
  {
    id: 'g_p4',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Contribute TO & Impact ON',
    question: 'Massive deforestation in tropical rainforests contributes substantially _____ atmospheric carbon dioxide concentrations, exerting a destabilizing impact _____ planetary weather cycles.',
    options: {
      A: 'for / with',
      B: 'to / on',
      C: 'into / at',
      D: 'by / about',
      E: 'towards / from'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'Contribute TO + Impact ON',
    trapWarning: '"impact" kelimesi bir şey üzerindeki etkiyi belirtirken istisnasız "on" veya "upon" edatını alır.',
    explanation: '🎯 ÖSYM İKİLİSİ: "contribute to" (-e katkıda bulunmak / yol açmak) ve "impact on" (-in üzerindeki etki). Doğru cevap B.'
  },
  {
    id: 'g_p5',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Compensate FOR & Deprive OF',
    question: 'Modern nutritional supplements cannot completely compensate _____ a diet that consistently deprives the body _____ essential macronutrients.',
    options: {
      A: 'for / of',
      B: 'with / from',
      C: 'to / in',
      D: 'by / with',
      E: 'about / against'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Compensate FOR (Telafi etmek) & Deprive OF (Mahrum bırakmak)',
    trapWarning: 'Öğrenciler Türkçe düşünerek "vücuttan mahrum bırakmak" sanıp "from" seçebilir; İngilizcede kalıp "deprive someone OF something"dir!',
    explanation: '🎯 PREPOSITION COLOCATION: "compensate FOR" (telafi etmek) ve "deprive somebody/something OF something" (mahrum etmek/bırakmak). Doğru cevap A.'
  },

  // =========================================================================
  // 4. REDUCTIONS & PARTICIPLES (KISALTMALAR VE FİİLİMSİLER)
  // =========================================================================
  {
    id: 'g_r1',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Having V3 (Öncelik Bildiren Aktif Kısaltma)',
    question: '_____ the rigorous clinical trials required by federal drug safety regulators, the biotech company immediately launched mass manufacturing.',
    options: {
      A: 'Having completed',
      B: 'Completed',
      C: 'To be completed',
      D: 'Being completed',
      E: 'To complete'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Gizli Özne Analizi & Öncelik-Sonralık Kısaltması (Having V3)',
    trapWarning: 'Virgülden sonraki özneye bak: "the biotech company". Şirket denemeleri kendisi mi tamamladı (aktif), yoksa tamamlandı mı (pasif)? Şirket tamamladığı için AKTİF kısaltma şarttır. B ve D şıkları pasiftir!',
    explanation: '🎯 FORMÜL: Cümle başında kısaltma sorulduğunda virgülden sonraki özneye bakılır: "the biotech company". Şirket testleri "önceden tamamlamış olduğundan" (Having completed) hemen seri üretime geçti. Doğru cevap A.'
  },
  {
    id: 'g_r2',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Past Participle (V3 - Pasif Kısaltma)',
    question: '_____ by profound volcanic eruptions over millions of years, the fertile soils of the volcanic plateau now support intensive viticulture.',
    options: {
      A: 'Enriching',
      B: 'Enriched',
      C: 'To enrich',
      D: 'Having enriched',
      E: 'Enrich'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'Pasif Kısaltma (V3) & "By" İpucu',
    trapWarning: 'Boşluktan sonra "by profound volcanic eruptions" (patlamalar tarafından) edatı vardır. Bu ifade kesin bir PASİF göstergesidir.',
    explanation: '🎯 FORMÜL: "the fertile soils" (verimli topraklar) zenginleştirir mi yoksa zenginleştirilir mi? Volkanik patlamalar tarafından zenginleştirildiği için pasif kısaltma (V3 - Enriched) kullanılır. Doğru cevap B.'
  },
  {
    id: 'g_r3',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'The first / The only + TO V1 Kuralı',
    question: 'Marie Curie was the first scientist _____ two Nobel Prizes in distinct scientific disciplines, physics and chemistry.',
    options: {
      A: 'winning',
      B: 'to win',
      C: 'having won',
      D: 'to be won',
      E: 'won'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'The first / The second / The only / Superlative + TO infinitive',
    trapWarning: 'Normalde kısaltmalar V-ing ile yapılır; ancak "the first / last / only / best" gibi sıfatlardan sonra İSTİSNASIZ "TO V1" gelir!',
    explanation: '🎯 ÖSYM KURALI: "The first / the second / the last / the only" yapılarından sonra kısaltma daima "to + V1" (aktif) veya "to be + V3" (pasif) olur. Marie Curie ödülleri kendisi kazandığı için aktif "to win" doğrudur. Doğru cevap B.'
  },
  {
    id: 'g_r4',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Passive Reduction: Having been V3',
    question: '_____ by prolonged isolation from mainland predators for millions of years, the flightless dodo bird possessed no instinctive evasion reflexes when sailors arrived.',
    options: {
      A: 'Having shaped',
      B: 'Shaping',
      C: 'Having been shaped',
      D: 'To shape',
      E: 'To have shaped'
    },
    answer: 'C',
    difficulty: 'YDS Master',
    tacticUsed: 'Zaman Önceliği Olan Pasif Kısaltma (Having been V3)',
    trapWarning: 'Dodo kuşu evrimi şekillendirmedi; adadaki izolasyon tarafından "şekillendirildi" (pasif). Ve bu denizciler gelmeden milyonlarca yıl önce gerçekleşti (öncelik).',
    explanation: '🎯 ÇİFTE KONTROL: 1. Pasif mi? Evet (shaped by isolation). 2. Denizcilerin gelişinden çok daha önce mi? Evet (milyonlarca yıllık öncelik). Bu nedenle "Having been shaped" mükemmel yapıdır. Doğru cevap C.'
  },

  // =========================================================================
  // 5. MODALS & PERFECT MODALS (KİPLER VE ANLAMLARI)
  // =========================================================================
  {
    id: 'g_m1',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Must have V3 (Geçmişe Dair Güçlü Çıkarım)',
    question: 'Given that the ancient citadel gates were completely intact when archaeologists entered, the invading Persian army _____ through an undetected subterranean aqueduct.',
    options: {
      A: 'must have entered',
      B: 'should have entered',
      C: 'needn\'t have entered',
      D: 'would rather enter',
      E: 'used to enter'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Kanıta Dayalı Geçmiş Çıkarımı: Must have V3 (Girmiş olmalı)',
    trapWarning: 'B şıkkındaki "should have entered" (girmeliydi ama girmedi) pişmanlık/eleştiri bildirir. Cümlede ise somut bir kanıt ("kapılar sapasağlamdı") üzerinden geçmiş çıkarımı yapılmaktadır.',
    explanation: '🎯 MODAL FARKI: Kale kapıları sapasağlam olduğuna göre ordu yer altı su kanalından girmiş OLMALI (must have entered). %99 kesin geçmiş tahmini. Doğru cevap A.'
  },
  {
    id: 'g_m2',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Should have V3 (Yapmalıydı ama Yapmadı / Eleştiri)',
    question: 'The municipal transit authority _____ emergency drainage pumps before the torrential typhoon made landfall; their catastrophic failure to do so paralyzed the subway network.',
    options: {
      A: 'must deploy',
      B: 'should have deployed',
      C: 'may deploy',
      D: 'would deploy',
      E: 'could not have deployed'
    },
    answer: 'B',
    difficulty: 'İleri',
    tacticUsed: 'Geçmişe Dönük Eleştiri: Should have V3',
    trapWarning: 'Cümledeki "their catastrophic failure to do so" (bunu yapmaktaki feci başarısızlıkları) ifadesi eylemin yapılmadığını açıkça gösterir.',
    explanation: '🎯 FORMÜL: Belediye yetkilileri fırtınadan önce drenaj pompalarını devreye sokmalıydı (should have deployed - ama sokmadılar ve metro sular altında kaldı). Doğru cevap B.'
  },
  {
    id: 'g_m3',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Can\'t / Couldn\'t have V3 (Geçmişte İmkansızlık)',
    question: 'Neanderthals _____ complex seafaring vessels thirty thousand years ago, as no evidence of advanced metallurgy or sail weaving has ever been discovered in Upper Paleolithic strata.',
    options: {
      A: 'must have constructed',
      B: 'could not have constructed',
      C: 'might construct',
      D: 'should have constructed',
      E: 'had better construct'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'Geçmişte İmkansızlık Çıkarımı (Could not have V3)',
    trapWarning: 'Cümle "as no evidence has ever been discovered" (hiçbir kanıt bulunmadığı için) diyerek eylemin imkansız olduğunu vurgular.',
    explanation: '🎯 FORMÜL: Hiçbir metalurji veya yelken kanıtı bulunmadığına göre Neandertaller bu gemileri inşa etmiş olamazlar (could not have constructed). Doğru cevap B.'
  },

  // =========================================================================
  // 6. RELATIVE & NOUN CLAUSES (İLGİ VE İSİM CÜMLECİKLERİ)
  // =========================================================================
  {
    id: 'g_cl1',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'Preposition + Which / Whom (Edatlı İlgi Cümleciği)',
    question: 'The United Nations established specialized oversight committees, through _____ member states can resolve complex cross-border water disputes diplomatically.',
    options: {
      A: 'which',
      B: 'that',
      C: 'whom',
      D: 'whose',
      E: 'what'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Edattan (Preposition) Sonra "That" KULLANILMAZ Kuralı',
    trapWarning: 'Boşluktan önce "through" edatı vardır. Edatlardan sonra ASLA "that" gelmez! Cansız/kurum için "which", insan için "whom" gelir.',
    explanation: '🎯 ÖSYM ALTIN FORMÜLÜ: Edattan sonra sadece "which" (cansız/kurum) veya "whom" (insan) gelebilir. "oversight committees" kurum/komite olduğu için "through which" (vasıtasıyla) doğrudur. Doğru cevap A.'
  },
  {
    id: 'g_cl2',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'Whose + Yalın İsim (Aitlik Bildiren İlgi Zamiri)',
    question: 'Astrobiologists are searching for terrestrial exoplanets _____ atmospheric compositions contain detectable chemical traces of oxygen and methane.',
    options: {
      A: 'where',
      B: 'whose',
      C: 'which',
      D: 'that',
      E: 'in which'
    },
    answer: 'B',
    difficulty: 'İleri',
    tacticUsed: 'Whose + Eksiz İsim Tamlaması (Whose atmospheric compositions)',
    trapWarning: 'Boşluktan sonra "the" veya "a" almamış yalın bir isim öbeği (atmospheric compositions) vardır. İki isim arasında iyelik bağı (gezegenlerin atmosferik bileşimleri) varsa "whose" tek seçenektir.',
    explanation: '🎯 FORMÜL: "exoplanets whose atmospheric compositions..." (atmosferik bileşimleri oksijen ve metan izleri içeren ötegezegenler). İyelik bağlacı "whose"dur. Doğru cevap B.'
  },
  {
    id: 'g_cl3',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'What vs That (Noun Clause Cümle Analizi)',
    question: '_____ distinguished early human communities from other hominid groups was their unprecedented capacity for symbolic linguistic communication.',
    options: {
      A: 'That',
      B: 'Which',
      C: 'What',
      D: 'Whether',
      E: 'Where'
    },
    answer: 'C',
    difficulty: 'İleri',
    tacticUsed: 'Öznesi Eksik Cümlecik = WHAT (The thing that)',
    trapWarning: 'That cümleciği tam bir cümle (S+V+O) ister. Cümlede "distinguished" fiilinin ÖZNESİ YOKTUR. Öznesi olmayan cümleyi özne yapan tek isim cümleciği "What"tır.',
    explanation: '🎯 FORMÜL: "What distinguished early humans... was..." (Erken insanları diğerlerinden ayıran ŞEY, onların sembolik dil kapasitesiydi). "The thing that = What". Doğru cevap C.'
  },

  // =========================================================================
  // 7. INVERSION & CONDITIONALS (DEVRİK CÜMLELER VE KOŞUL YAPILARI)
  // =========================================================================
  {
    id: 'g_inv1',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Had + S + V3 (Type 3 Devrik If)',
    question: '_____ the aerospace telemetry engineers detected the microscopic fuel valve fracture during pre-launch diagnostics, the orbital rocket would not have exploded mid-flight.',
    options: {
      A: 'Were',
      B: 'Had',
      C: 'Should',
      D: 'If only',
      E: 'Did'
    },
    answer: 'B',
    difficulty: 'İleri',
    tacticUsed: 'Type 3 Devriklik: Had + S + V3 = If + S + had V3',
    trapWarning: 'İkinci tarafa bak: "would not have exploded" (Type 3 Conditional). Type 3 devriği daima "Had" ile başlar!',
    explanation: '🎯 FORMÜL: "Had the engineers detected..." = "If the engineers had detected...". Sonuç cümlesi "would not have exploded" (Type 3) olduğu için devrik yapı "Had" ile kurulur. Doğru cevap B.'
  },
  {
    id: 'g_inv2',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Seldom / Rarely / Barely ile Devrik Yapı',
    question: 'Seldom _____ a single archaeological excavation revolutionized our understanding of Neolithic settlements as profoundly as the findings at Çatalhöyük.',
    options: {
      A: 'has',
      B: 'is',
      C: 'did',
      D: 'was',
      E: 'had been'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Olumsuz Zarf Cümle Başında -> Soru Kalıbı Devriklik (Seldom + Aux + S + V)',
    trapWarning: 'Fiile bak: "revolutionized" (V3). "has revolutionized" Present Perfect yapısı devrilerek "Seldom has a single excavation revolutionized..." olmuştur.',
    explanation: '🎯 ÖSYM KURALI: Seldom, Rarely, Scarcely, Hardly, Little, Never cümle başında yer aldığında cümle devrik (soru kalıbında) yazılır. Cümle present perfect olduğu için yardımcı fiil "has" öne gelir. Doğru cevap A.'
  },
  {
    id: 'g_inv3',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Not only ... but also & Cümle Başı Devriklik',
    question: 'Not only _____ modern genetic sequencing decipher the genomes of extinct hominids, but it also illuminates contemporary disease predispositions.',
    options: {
      A: 'does',
      B: 'did',
      C: 'has',
      D: 'is',
      E: 'was'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Not only Cümle Başında Devriklik (Present Simple -> Does)',
    trapWarning: 'İkinci cümleye bak: "but it also illuminates" (Present Simple). Zaman uyumu gereği ilk cümle de Present Simple olmalıdır; dolayısıyla "does" ile devrilir.',
    explanation: '🎯 FORMÜL: "Not only + Aux + S + V1 ... but also S + V". İkinci cümle "illuminates" geniş zaman olduğu için devrik yardımcı fiil "does" olur. Doğru cevap A.'
  },

  // =========================================================================
  // EKSTRA REFLEKS SORULARI (TENSES, PREPOSITIONS & CONJUNCTIONS)
  // =========================================================================
  {
    id: 'g_t7',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'As soon as / Once + Present -> Future',
    question: 'Once regulatory authorities _____ the safety profile of autonomous vehicular navigation software, automotive manufacturers _____ commercial deployment in metropolitan centers.',
    options: {
      A: 'approve / will initiate',
      B: 'will approve / initiate',
      C: 'approved / will initiate',
      D: 'have approved / had initiated',
      E: 'are approving / initiated'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Zaman Bağlacı Uyum Kuralı: Once / As soon as + Present -> Future',
    trapWarning: 'B şıkkında bağlacın içine "will" getirilmesi kural hatasıdır.',
    explanation: '🎯 FORMÜL: Once + Present Simple (approve), Future (will initiate). Yetkililer güvenliği onaylar onaylamaz (Once approve), üreticiler dağıtımı başlatacaktır (will initiate). Doğru cevap A.'
  },
  {
    id: 'g_t8',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Past Continuous & Past Simple Kesinti',
    question: 'While geophysicists _____ deep tectonic activity along the fault line last October, a sudden seismic rupture _____ their sensitive measuring apparatus.',
    options: {
      A: 'were monitoring / disabled',
      B: 'monitored / was disabling',
      C: 'have monitored / disables',
      D: 'are monitoring / had disabled',
      E: 'had monitored / will disable'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'While + Past Continuous, Past Simple (Süreç Sırasında Araya Giren Ani Eylem)',
    trapWarning: 'Last October geçmiş zaman göstergesidir; present yapılar (C ve D) elenir.',
    explanation: '🎯 FORMÜL: Jeofizikçiler derin fay hareketlerini izlerKEN (were monitoring), ani bir sarsıntı cihazlarını devre dışı bıraktı (disabled). Doğru cevap A.'
  },
  {
    id: 'g_c7',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'So that (Amaç Bildiren Bağlaç + Can/Could/Will)',
    question: 'Botanists crossbred native drought-resistant wheat varieties with high-yield cultivars _____ subsistence farmers in arid zones could harvest dependable crops.',
    options: {
      A: 'so that',
      B: 'as though',
      C: 'even if',
      D: 'whereas',
      E: 'lest'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'So that + Modal (Could / Can) = -sın diye / amacıyla',
    trapWarning: 'Boşluktan sonra "could + fiil" modal yapısı varsa amaç bağlacı "so that" aranmalıdır.',
    explanation: '🎯 FORMÜL: Çiftçiler güvenilir ürün hasat edebilSİN DİYE (so that ... could harvest). Amaç bildiren so that modal (could/would/can) sever. Doğru cevap A.'
  },
  {
    id: 'g_c8',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'On the other hand (İki Yönlü Karşılaştırma Zıtlığı)',
    question: 'Hydropower plants supply clean and dispatchable baseline electricity; on the other hand, their large reservoir dams often cause irrevocable disruption to freshwater river ecosystems.',
    options: {
      A: 'on the other hand',
      B: 'in addition',
      C: 'as a result',
      D: 'for instance',
      E: 'in other words'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Avantaj vs Dezavantaj Karşılaştırması (On the one hand ... On the other hand)',
    trapWarning: 'İlk cümle temiz elektrik avantajını, ikinci cümle tatlı su ekosistemine verilen zararı anlatır.',
    explanation: '🎯 FORMÜL: Hidroelektrik temiz enerji sağlar (+) ; ÖTE YANDAN (on the other hand) barajlar nehir ekosistemini bozar (-). Zıtlık ifadesi A\'dır.'
  },
  {
    id: 'g_p6',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'In terms of vs In accordance with',
    question: 'All experimental pharmaceutical compounds must be manufactured _____ strict good manufacturing practice guidelines established by the health ministry.',
    options: {
      A: 'in accordance with',
      B: 'in place of',
      C: 'on the brink of',
      D: 'by means of',
      E: 'with a view to'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'In accordance with (Uyarınca / Doğrultusunda / Kurallara Uygun Olarak)',
    trapWarning: 'Kılavuzlar, kurallar ve yasalar söz konusu olduğunda "in accordance with" / "complying with" kalıbı kullanılır.',
    explanation: '🎯 KALIP: "in accordance with strict guidelines" (sağlık bakanlığının belirlediği katı kurallar uyarınca/doğrultusunda üretilmelidir). Doğru cevap A.'
  },
  {
    id: 'g_p7',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Cope WITH & Rely ON',
    question: 'Developing island states struggle to cope _____ rising sea levels because they rely predominantly _____ foreign financial aid for infrastructure fortification.',
    options: {
      A: 'with / on',
      B: 'for / from',
      C: 'about / in',
      D: 'by / with',
      E: 'to / at'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Cope WITH (Başa çıkmak) + Rely ON/UPON (Güvenmek / Bağımlı olmak)',
    trapWarning: 'Cope daima "with" alır; rely ise "on/upon" alır.',
    explanation: '🎯 ÖSYM PREPOSITION ÇİFTİ: "cope with sea levels" (deniz seviyeleriyle başa çıkmak) ve "rely on foreign aid" (dış yardıma bağımlı olmak). Doğru cevap A.'
  },
  {
    id: 'g_r5',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Adverbial Clause Reduction: While / When + V-ing',
    question: 'While _____ extensive archaeological strata in ancient Mesopotamia, researchers uncovered clay tablets inscribed with complex commercial ledgers.',
    options: {
      A: 'excavating',
      B: 'excavated',
      C: 'having excavated',
      D: 'to excavate',
      E: 'being excavated'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'While + V-ing (Aktif Süreç Kısaltması)',
    trapWarning: 'Virgülden sonraki özne: "researchers" (araştırmacılar). Araştırmacılar kazıyı kendileri yaparken (aktif) buldular; bu yüzden aktif V-ing gerekir.',
    explanation: '🎯 FORMÜL: "While excavating..." = "While they were excavating...". Araştırmacılar kazı yaparKEN (excavating) tabletleri buldular. Doğru cevap A.'
  },
  {
    id: 'g_m4',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Needn\'t have V3 (Gerek Yoktu ama Yaptı)',
    question: 'The conservation team _____ twenty redundant emergency water tanks, because the seasonal monsoons arrived two weeks ahead of schedule and replenished the oasis.',
    options: {
      A: 'needn\'t have transported',
      B: 'must transport',
      C: 'could not transport',
      D: 'would rather transport',
      E: 'had better transport'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Needn\'t have V3 (Boşuna Yaptı / Gerek Yoktu ama Taşıdı)',
    trapWarning: 'Su tanklarını taşıdılar ama muson yağmurları erken geldiği için bu çaba gereksiz kaldı.',
    explanation: '🎯 MODAL ANLAMI: "needn\'t have transported" (boşuna taşımışlar / taşımalarına hiç gerek yokmuş çünkü yağmurlar erken geldi ve vahayı doldurdu). Doğru cevap A.'
  },
  {
    id: 'g_cl4',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'The reason why ... is that',
    question: 'The fundamental reason _____ polar bears are experiencing severe nutritional deprivation is _____ receding summer sea ice drastically restricts their seal hunting grounds.',
    options: {
      A: 'why / that',
      B: 'which / whether',
      C: 'where / what',
      D: 'whose / how',
      E: 'that / which'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'The reason WHY ... is THAT Kalıbı',
    trapWarning: '"The reason why" sebep cümlesi başlatır; sonrasındaki "is that" ise durumun ne olduğunu bağlar.',
    explanation: '🎯 KLASİK ÖSYM YAPISI: "The reason why polar bears are starving is that sea ice is receding" (Kutup ayılarının aç kalmasının sebebi, deniz buzunun erimesidir). Doğru cevap A.'
  },
  {
    id: 'g_inv4',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Were it not for (Type 2 Devrik If = If it were not for)',
    question: '_____ the protective magnetic envelope shielded by Earth\'s molten iron core, atmospheric solar winds would completely strip away our planet\'s fragile atmosphere.',
    options: {
      A: 'Were it not for',
      B: 'Had it not been for',
      C: 'Should it not be for',
      D: 'If it did not',
      E: 'As if it were'
    },
    answer: 'A',
    difficulty: 'YDS Master',
    tacticUsed: 'Were it not for = Olmasa / Olmasaydı (Şimdiki Zaman Hipotezi + Would Strip)',
    trapWarning: 'Sonuç cümlesine dikkat: "would completely strip away" (Type 2 Conditional - would + V1). Eğer geçmiş olsaydı "would have stripped" (Type 3) olurdu.',
    explanation: '🎯 FORMÜL: "Were it not for + İsim" = "If it were not for + İsim" (Dünya çekirdeğinin manyetik kalkanı olmasa, güneş rüzgarları atmosferimizi süpürüp yok ederdi). Sonuç cümlesi "would strip" (Type 2) olduğu için "Were it not for" kullanılır. Doğru cevap A.'
  }
];

export const YDS_GRAMMAR_DRILL_BANK: GrammarDrillQuestion[] = [
  ...BASE_GRAMMAR_DRILL_BANK,
  ...EXTENDED_GRAMMAR_BANK
];
