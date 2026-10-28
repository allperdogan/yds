import { ReadingPassage } from '../types';
import { shuffleQuestionList } from '../services/optionShuffle';
import { READING_PASSAGE_BANK } from './banks/readingPassageBank';

const RAW_YDS_READING_PASSAGES: ReadingPassage[] = [
  {
    id: 'rp1',
    title: 'The Neurological Foundations of Human Memory & Neuroplasticity',
    topic: 'Health & Medicine',
    sourceHint: 'Adapted from Nature Neuroscience & The Lancet Neurology',
    wordCount: 345,
    passageText: `For centuries, neuroscientists adhered to the rigid dogma that the adult human brain was a static organ, devoid of the capacity to generate new neurons or significantly reorganize its synaptic architecture after early development. However, groundbreaking advances in functional magnetic resonance imaging (fMRI) and molecular biology over the past three decades have thoroughly dismantled this misconception, illuminating the extraordinary phenomenon known as neuroplasticity.

Neuroplasticity refers to the brain's innate capacity to dynamically alter its structural connections and functional pathways in response to external environmental stimuli, cognitive training, and pathological damage. When an individual engages in rigorous intellectual pursuits—such as acquiring a foreign language or mastering a complex musical instrument—the brain synthesizes neurotrophic factors, predominantly Brain-Derived Neurotrophic Factor (BDNF), which foster synaptogenesis and facilitate dendritic arborization.

Furthermore, this regenerative resilience has profound clinical implications for neurodegenerative disorders such as Alzheimer's disease and ischemic stroke rehabilitation. Patients who systematically undergo cognitive stimulation and motor re-training exhibit significant compensatory activation in contralateral cortical hemispheres, effectively bypassing damaged neural pathways. Nonetheless, while acute physical exercise and sustained mental agility substantially enhance neuroplastic potential, chronic stress and prolonged elevated cortisol levels exert a severely detrimental influence, inducing atrophy within hippocampal pyramidal neurons. Consequently, maintaining cognitive vigor across the human lifespan necessitates a multidisciplinary regimen combining aerobic exertion, continuous education, and psychological resilience.`,
    vocabularyNotes: [
      { word: 'adhere to', meaningTr: '-e bağlı kalmak, sadık kalmak', contextNote: 'ÖSYM kural/öğreti takip etme anlamında sık sorar.' },
      { word: 'dogma', meaningTr: 'sorgulanamaz inanç, doktrin', contextNote: 'Akademik metinlerde eski yanlış kanıları ifade eder.' },
      { word: 'devoid of', meaningTr: '-den yoksun, mahrum', contextNote: 'Arkasına "of" edatı alan en kritik YDS sıfatlarındandır.' },
      { word: 'dismantle', meaningTr: 'çürütmek, parçalara ayırmak, ortadan kaldırmak', contextNote: 'Bir teoriyi veya yapıyı çürütürken kullanılır.' },
      { word: 'innate', meaningTr: 'doğuştan gelen, fıtri', contextNote: 'Synonym: inborn, inherent.' },
      { word: 'foster', meaningTr: 'teşvik etmek, geliştirmek, büyütmek', contextNote: 'Synonym: promote, encourage, nurture.' },
      { word: 'compensatory', meaningTr: 'telafi edici, dengeleyici', contextNote: 'Tıbbi telafi mekanizmaları için kilit terim.' },
      { word: 'atrophy', meaningTr: 'körelme, küçülme, gerileme', contextNote: 'Biyolojik doku kaybı.' },
      { word: 'detrimental', meaningTr: 'zararlı, yıkıcı', contextNote: 'Synonym: harmful, damaging, destructive.' }
    ],
    deconstructedSentences: [
      {
        originalSentence: 'For centuries, neuroscientists adhered to the rigid dogma that the adult human brain was a static organ, devoid of the capacity to generate new neurons or significantly reorganize its synaptic architecture after early development.',
        subject: 'neuroscientists (sinirbilimciler)',
        mainVerb: 'adhered to (bağlı kaldılar / savundular)',
        objectsAndComplements: 'the rigid dogma (katı doktrine) + [that-clause: yetişkin insan beyninin erken gelişimden sonra yeni nöron üretme ya da sinaptik mimarisini yeniden düzenleme kapasitesinden yoksun durağan bir organ olduğu]',
        grammaticalStructures: [
          'Noun Clause in Apposition (dogma that...): Doktrinin içeriğini açıklayan isim cümleciği.',
          'Adjective Phrase (devoid of the capacity...): "which was devoid of" yapısının kısaltılmış sıfat hali.',
          'Infinitive complement (capacity to generate / reorganize): İsmi niteleyen to-V1 yapısı.'
        ],
        translationTr: 'Yüzyıllar boyunca sinirbilimciler, yetişkin insan beyninin erken gelişim evresinden sonra yeni nöronlar üretme veya sinaptik yapısını kayda değer ölçüde yeniden organize etme kapasitesinden yoksun durağan bir organ olduğu yönündeki katı dogmaya bağlı kaldılar.'
      },
      {
        originalSentence: 'When an individual engages in rigorous intellectual pursuits, the brain synthesizes neurotrophic factors, predominantly BDNF, which foster synaptogenesis and facilitate dendritic arborization.',
        subject: 'the brain (beyin)',
        mainVerb: 'synthesizes (sentezler / üretir)',
        objectsAndComplements: 'neurotrophic factors (nörotrofik faktörleri) + [which-clause: sinaptogenezi teşvik eden ve dallanmayı kolaylaştıran]',
        grammaticalStructures: [
          'Zaman Zarfcığı (When an individual engages...): Geniş zaman koşul-zaman ilişkisi.',
          'Non-defining Relative Clause (which foster... and facilitate...): Faktörlerin ne işe yaradığını açıklayan sıfat cümleciği.',
          'Paralel Fiil Yapısı: "foster ... and facilitate ..."'
        ],
        translationTr: 'Bir birey zorlu zihinsel uğraşlara girdiğinde beyin; sinaps oluşumunu teşvik eden ve dendritik dallanmayı kolaylaştıran, başta BDNF olmak üzere nörotrofik faktörleri sentezler.'
      },
      {
        originalSentence: 'Nonetheless, while acute physical exercise and sustained mental agility substantially enhance neuroplastic potential, chronic stress and prolonged elevated cortisol levels exert a severely detrimental influence, inducing atrophy within hippocampal pyramidal neurons.',
        subject: 'chronic stress and prolonged elevated cortisol levels (kronik stres ve uzun süreli yüksek kortizol seviyeleri)',
        mainVerb: 'exert (uygular / yapar)',
        objectsAndComplements: 'a severely detrimental influence (ciddi derecede zararlı bir etki) + [Participle reduction: inducing atrophy...]',
        grammaticalStructures: [
          'Geçiş Zarfı (Nonetheless): Zıtlık bildirir, paragrafın yönünü değiştirir.',
          'Zıtlık Yan Cümlesi (while ... substantially enhance): Olumlu durum ile olumsuz durum kıyaslaması.',
          'Participle Reduction / Sonuç Belirten -ing (inducing atrophy...): "and thus they induce atrophy" yerine eylemin doğal sonucunu anlatan aktif kısaltma.'
        ],
        translationTr: 'Bununla birlikte, yoğun fiziksel egzersiz ve sürekli zihinsel çeviklik nöroplastik potansiyeli büyük ölçüde artırırken, kronik stres ve uzun süreli yüksek kortizol seviyeleri, hipokampal piramidal nöronlarda körelmeye yol açarak son derece zararlı bir etki yaratmaktadır.'
      }
    ],
    questions: [
      {
        id: 'rp1_q1',
        type: 'reading',
        question: 'According to the passage, the traditional scientific view regarding the adult human brain was that it _____ .',
        options: {
          A: 'could reorganize itself only in response to physical damage',
          B: 'continued to produce new neurons until late adulthood',
          C: 'could neither produce new neurons nor reorganize itself',
          D: 'changed its structure mainly through intellectual effort',
          E: 'lost most of its neurons soon after early development'
        },
        answer: 'C',
        difficulty: 'İleri',
        tacticUsed: 'Paragraftan Doğrudan Bilgi Çıkarımı (Paraphrasing / Eşanlam)',
        trapWarning: 'Eski görüş: beyin durağandır, yeni nöron üretemez ve yeniden düzenlenemez. B ve D bugünkü görüşü verir; A yarım bir kapasite tanır; E ise metinde olmayan bir kayıp iddiası ekler.',
        explanation: '1. Paragrafta: "the adult human brain was a static organ, devoid of the capacity to generate new neurons or significantly reorganize its synaptic architecture" denilmiştir. "devoid of capacity to generate new neurons and reorganize" = "could neither produce new neurons nor reorganize itself" (C şıkkı).'
      },
      {
        id: 'rp1_q2',
        type: 'reading',
        question: 'It can be inferred from the passage that stroke patients who recover lost cognitive or motor functions _____ .',
        options: {
          A: 'do so by recruiting intact regions in the opposite brain hemisphere',
          B: 'are typically those who have suffered irreparable hippocampal atrophy',
          C: 'achieve recovery entirely independent of physical exercise and mental focus',
          D: 'synthesize fewer neurotrophic factors than healthy sedentary adults',
          E: 'rely exclusively on surgical procedures rather than natural neuroplasticity'
        },
        answer: 'A',
        difficulty: 'YDS Master',
        tacticUsed: 'Çıkarım (Inference) & Terminoloji Eşleştirme',
        trapWarning: 'D şıkkı tam tersidir; beyin BDNF faktörlerini iyileşmek için daha fazla sentezler.',
        explanation: '3. Paragrafta "exhibit significant compensatory activation in contralateral cortical hemispheres, effectively bypassing damaged neural pathways" ifadesi yer alır. "Contralateral" karşı taraf demektir. Bu da "recruiting intact regions in the opposite brain hemisphere" (karşı yarıküredeki sağlam bölgeleri devreye sokarak) ifadesiyle birebir örtüşür (A şıkkı).'
      },
      {
        id: 'rp1_q3',
        type: 'reading',
        question: 'The author points out that chronic stress is particularly dangerous for brain health because it _____ .',
        options: {
          A: 'reduces the production of neurotrophic factors such as BDNF',
          B: 'triggers the shrinkage of vital cells located in the hippocampus',
          C: 'prevents the opposite hemisphere from compensating for damage',
          D: 'cancels out the benefits gained from physical exercise',
          E: 'slows down the formation of new synapses in the cortex'
        },
        answer: 'B',
        difficulty: 'İleri',
        tacticUsed: 'Neden-Sonuç İlişkisi & Kelime Eşleştirme',
        trapWarning: 'Metin: kortizol "inducing atrophy within hippocampal pyramidal neurons". A ve E makul ama metinde geçmez; C inme rehabilitasyonu bilgisini karıştırır; D ise metnin yapmadığı bir karşılaştırmadır.',
        explanation: 'Metnin son cümlesinde "chronic stress and prolonged elevated cortisol levels exert a severely detrimental influence, inducing atrophy within hippocampal pyramidal neurons" denmektedir. "Atrophy within hippocampal neurons" = "shrinkage of vital cells located in the hippocampus" (B şıkkı).'
      },
      {
        id: 'rp1_q4',
        type: 'reading',
        question: 'What is the primary purpose of the passage?',
        options: {
          A: 'To argue that stress is the main cause of Alzheimer\'s disease',
          B: 'To describe the latest imaging techniques used in brain research',
          C: 'To explain how the idea of neuroplasticity changed our view of the brain',
          D: 'To recommend a specific treatment programme for stroke patients',
          E: 'To show that intellectual effort matters more than physical exercise'
        },
        answer: 'C',
        difficulty: 'Orta',
        tacticUsed: 'Ana Fikir / Yazarın Amacı (Primary Purpose)',
        trapWarning: 'Ana amaç bütün paragrafı kapsamalıdır. B, D ve A yalnızca bir ayrıntıyı ana fikir yapar; E ise metinle çelişir: yazar ikisini birlikte önerir.',
        explanation: 'Metin, beynin sabit olduğu yönündeki eski inancın yıkılışını ve nöroplastisitenin insan beyninin yenilenme, öğrenme ve iyileşme potansiyelini nasıl kökten değiştirdiğini açıklamaktadır (C şıkkı).'
      }
    ]
  },
  {
    id: 'rp2',
    title: 'The Geopolitical Economics of the Global Energy Transition',
    topic: 'Economics & Environment',
    sourceHint: 'Adapted from The Economist & Foreign Affairs',
    wordCount: 360,
    passageText: `The contemporary global shift from fossil fuels toward low-carbon renewable energy represents the most profound realignment of the international political economy since the Industrial Revolution. While international climate summits routinely frame decarbonization primarily as an ethical imperatives to avert catastrophic planetary warming, the actual mechanics of the transition are driven by ruthless economic imperatives and high-stakes geopolitical competition. 

For the past century, global power dynamics were decisively dictated by the control of petroleum extraction routes and hydrocarbon reserves. Nations possessing abundant oil reserves—most notably in the Persian Gulf—wielded immense diplomatic leverage, while energy-importing industrialized nations structured their foreign policies around securing unhindered sea lanes and pipeline corridors. However, as photovoltaic solar panels, offshore wind turbines, and lithium-ion batteries approach grid parity, the geopolitical epicenter is dramatically gravitating away from conventional oil-producing petrostates toward critical mineral supply chains.

The renewable infrastructure of tomorrow requires vast quantities of rare earth elements, cobalt, copper, and refined lithium. Consequently, supply chain bottlenecks and resource nationalism have emerged as the new flashpoints of international statecraft. Countries that currently dominate the refining and manufacturing processes of clean technologies—such as China, which controls over seventy percent of the global processing capacity for key battery minerals—enjoy asymmetrical leverage over Western economies attempting to re-shore domestic production. Therefore, unless international alliances successfully diversify processing hubs and subsidize circular recycling economies, the impending transition may simply replace one vulnerable form of energy dependency with another equally perilous vulnerability.`,
    vocabularyNotes: [
      { word: 'realignment', meaningTr: 'yeniden yapılanma, hizalanma', contextNote: 'Uluslararası güç dengesi değişimlerinde kullanılır.' },
      { word: 'imperative', meaningTr: 'zorunluluk, acil gereklilik', contextNote: 'YDS\'de "crucial necessity" anlamında çok çıkar.' },
      { word: 'leverage', meaningTr: 'nüfuz, pazarlık gücü, koz', contextNote: 'Politik ve ekonomik baskı gücü.' },
      { word: 'gravitate', meaningTr: 'yönelmek, eğilmek, çekilmek', contextNote: 'Odak noktasının kaymasını anlatır.' },
      { word: 'bottleneck', meaningTr: 'darboğaz, tıkanıklık noktası', contextNote: 'Tedarik zinciri krizlerinde standart terim.' },
      { word: 'asymmetrical', meaningTr: 'asimetrik, dengesiz, tek taraflı', contextNote: 'Bir tarafın bariz üstün olduğu durumlar.' },
      { word: 'perilous', meaningTr: 'tehlikeli, riskli', contextNote: 'Synonym: hazardous, precarious, dangerous.' }
    ],
    deconstructedSentences: [
      {
        originalSentence: 'While international climate summits routinely frame decarbonization primarily as an ethical imperative to avert catastrophic planetary warming, the actual mechanics of the transition are driven by ruthless economic imperatives and high-stakes geopolitical competition.',
        subject: 'the actual mechanics of the transition (dönüşümün gerçek dinamikleri)',
        mainVerb: 'are driven by (tarafından yönlendirilmektedir / tetiklenmektedir)',
        objectsAndComplements: 'ruthless economic imperatives and high-stakes geopolitical competition (acımasız ekonomik zorunluluklar ve yüksek riskli jeopolitik rekabet)',
        grammaticalStructures: [
          'Zıtlık Zarfcığı (While ...): Görünüşteki idealist söylem ile arkasındaki sert gerçeğin tezatı.',
          'Infinitive of Purpose (to avert...): Felaketi önlemek amacıyla yapıldığını belirten amaç mastarı.',
          'Passive Voice (are driven by...): Dinamiklerin etken güçlerini belirten edilgen çatı.'
        ],
        translationTr: 'Uluslararası iklim zirveleri karbonsuzlaşmayı rutin olarak feci bir küresel ısınmayı önlemeye yönelik ahlaki bir zorunluluk olarak çerçevelerken, geçişin asıl dinamikleri acımasız ekonomik zorunluluklar ve yüksek riskli jeopolitik rekabet tarafından yönlendirilmektedir.'
      },
      {
        originalSentence: 'Therefore, unless international alliances successfully diversify processing hubs and subsidize circular recycling economies, the impending transition may simply replace one vulnerable form of energy dependency with another equally perilous vulnerability.',
        subject: 'the impending transition (yaklaşan bu dönüşüm)',
        mainVerb: 'may replace (değiştirebilir / yerine koyabilir)',
        objectsAndComplements: 'one vulnerable form of energy dependency with another equally perilous vulnerability (enerji bağımlılığının kırılgan bir biçimini en az onun kadar tehlikeli başka bir kırılganlıkla)',
        grammaticalStructures: [
          'Olumsuz Şart Bağlacı (unless = if not): "... başaramazlarsa" şeklinde gelecek uyarı.',
          'Modal of Possibility (may replace): Olasılık bildiren zayıf ihtimal kipi.',
          'Collocation: "replace X with Y" (X yerine Y koymak).'
        ],
        translationTr: 'Bu nedenle, uluslararası ittifaklar işleme merkezlerini başarılı bir şekilde çeşitlendirip döngüsel geri dönüşüm ekonomilerini sübvanse etmedikçe, yaklaşmakta olan bu dönüşüm, enerji bağımlılığının kırılgan bir biçimini en az onun kadar tehlikeli başka bir kırılganlıkla değiştirmekten öteye gidemeyebilir.'
      }
    ],
    questions: [
      {
        id: 'rp2_q1',
        type: 'reading',
        question: 'It is emphasized in the passage that although the energy transition is publicly defended on moral grounds, it is fundamentally propelled by _____ .',
        options: {
          A: 'a sincere global commitment to reducing carbon emissions',
          B: 'aggressive economic interests and strategic geopolitical rivalry',
          C: 'pressure from environmental groups in developing countries',
          D: 'the rapidly falling cost of solar and wind technologies',
          E: 'the gradual exhaustion of the world\'s oil reserves'
        },
        answer: 'B',
        difficulty: 'Orta',
        tacticUsed: 'Zıtlık Analizi & Metin İçi Karşılaştırma',
        trapWarning: 'Soru "although ... moral grounds" diyerek ahlaki gerekçeyi dışarıda bırakır; A bu tuzağa düşer. D ve E makul ekonomik nedenlerdir ama metnin vurguladığı jeopolitik rekabet değildir.',
        explanation: 'İlk paragrafta "the actual mechanics of the transition are driven by ruthless economic imperatives and high-stakes geopolitical competition" ifadesi doğrudan "aggressive economic interests and strategic geopolitical rivalry" (B şıkkı) olarak paraphrased edilmiştir.'
      },
      {
        id: 'rp2_q2',
        type: 'reading',
        question: 'According to the author, the geopolitical balance of power is shifting because _____ .',
        options: {
          A: 'oil producers are investing heavily in renewable energy',
          B: 'Western nations have become self-sufficient in critical minerals',
          C: 'the strategic importance of oil routes is being superseded by control over critical raw minerals',
          D: 'demand for oil has fallen faster than most experts predicted',
          E: 'new trade routes have been opened for transporting oil'
        },
        answer: 'C',
        difficulty: 'İleri',
        tacticUsed: 'Sebep-Sonuç & Eş Anlamlı Eşleme (Supersede = Gravitate away / Replace)',
        trapWarning: 'Metne göre güç dengesi petrol yollarından kritik minerallere kayıyor. B tam tersini söyler (metin Batı\'nın bağımlılığını vurgular); A, D ve E metinde olmayan nedenlerdir.',
        explanation: '2. Paragrafın sonunda "the geopolitical epicenter is dramatically gravitating away from conventional oil-producing petrostates toward critical mineral supply chains" denilmektedir. Bu durum C şıkkındaki "oil routes is being superseded by control over critical raw minerals" ile tam olarak aynıdır.'
      },
      {
        id: 'rp2_q3',
        type: 'reading',
        question: 'One major concern highlighted in the passage regarding China’s role in clean technologies is that _____ .',
        options: {
          A: 'it controls most of the world\'s lithium mines',
          B: 'it produces solar panels at a higher cost than the West',
          C: 'its dominance in refining makes the West dependent on it',
          D: 'it has stopped exporting clean technologies to the West',
          E: 'it still relies heavily on coal for its own electricity'
        },
        answer: 'C',
        difficulty: 'İleri',
        tacticUsed: 'Ana Fikir & Tehlike Tespiti',
        trapWarning: 'Endişe, Çin\'in mineral işleme (refining) hakimiyetinin yarattığı asimetrik kırılganlıktır. A ince tuzaktır: metin madencilik değil işleme der; D metinde olmayan bir eylemdir.',
        explanation: 'Son paragrafta "China, which controls over seventy percent of the global processing capacity for key battery minerals—enjoy asymmetrical leverage over Western economies" denmektedir. Bu da C şıkkıdır.'
      },
      {
        id: 'rp2_q4',
        type: 'reading',
        question: 'Which of the following would be the most suitable title for this passage?',
        options: {
          A: 'Why Renewable Energy Is Cheaper Than Oil',
          B: 'From Oil Wells to Mineral Mines: The New Geopolitics of Energy',
          C: 'China and the Future of Solar Power',
          D: 'The Moral Case for a Green Transition',
          E: 'How Lithium Batteries Are Changing Transport'
        },
        answer: 'B',
        difficulty: 'Orta',
        tacticUsed: 'Başlık Seçimi (Metnin Bütününü Kapsayan Başlık)',
        trapWarning: 'Başlık enerji jeopolitiğinin petrolden minerallere kaymasını kapsamalıdır. C bir ayrıntıyı başlık yapar; D metnin ikincil saydığı ahlaki boyutu öne çıkarır; A ve E ise konuyu değiştirir.',
        explanation: 'Metin, küresel gücün geleneksel petrolden kritik mineral tedarik zincirlerine doğru kayışını ve bu yeni jeopolitik rekabeti ele almaktadır. "From Oil Wells to Mineral Mines: The New Geopolitics of Energy" (B şıkkı) en kapsayıcı başlıktır.'
      }
    ]
  },
  {
    id: 'rp3',
    title: 'The Enigma of the Bronze Age Collapse: Systems Collapse Theory',
    topic: 'History & Archaeology',
    sourceHint: 'Adapted from American Journal of Archaeology & Oxford Antiquity',
    wordCount: 375,
    passageText: `Around 1177 BCE, the interconnected and highly sophisticated civilizations of the Eastern Mediterranean—including the Mycenaeans of Greece, the Hittite Empire of Anatolia, the New Kingdom of Egypt, and the flourishing maritime city-states of the Levant—experienced a catastrophic and almost simultaneous disintegration known to modern historians as the Late Bronze Age Collapse. Within a span of less than a century, magnificent palatial complexes were burned to the ground, trade networks that had facilitated the exchange of Cypriot copper and Afghan lapis lazuli disintegrated, and widespread literacy evaporated as linear writing scripts fell into total oblivion.

For generations, nineteenth- and twentieth-century antiquarians attributed this civilizational implosion almost exclusively to single, dramatic catastrophes—most notably the sudden invasions of the enigmatic "Sea Peoples," maritime raiders recorded in hieroglyphic reliefs at Medinet Habu. However, modern archaeological consensus has decisively discarded monocausal explanations in favor of Systems Collapse Theory. 

Recent paleoclimatological data, derived from fossilized pollen analysis and speleothem records in regional caves, demonstrate that the Eastern Mediterranean suffered from a protracted and devastating megadrought that endured for centuries. This environmental crisis induced catastrophic harvest failures, which in turn triggered severe famine, unprecedented internal insurrections, and the mass migration of desperate populations. Because Late Bronze Age societies were extraordinarily centralized and economically interdependent, a failure in one key node—such as agricultural production in the Syrian breadbasket—reverberated catastrophically through every interdependent kingdom. Consequently, rather than succumbing to a single mortal blow, the Bronze Age world crumbled under the compounded weight of ecological calamity, social unrest, and fragile administrative centralization.`,
    vocabularyNotes: [
      { word: 'disintegration', meaningTr: 'dağılma, parçalanma, çöküş', contextNote: 'Büyük imparatorlukların çözülmesini anlatır.' },
      { word: 'oblivion', meaningTr: 'unutulma, yok oluş', contextNote: 'Tarihe karışmak, unutulmak.' },
      { word: 'implosion', meaningTr: 'içten patlama, içe doğru çöküş', contextNote: 'Sistemin kendi içinde çökmesi.' },
      { word: 'monocausal', meaningTr: 'tek sebebe dayalı', contextNote: 'Tarihte tek nedenli yüzeysel açıklamaları eleştirir.' },
      { word: 'protracted', meaningTr: 'uzun süren, uzatılmış', contextNote: 'Synonym: prolonged, extended.' },
      { word: 'insurrection', meaningTr: 'ayaklanma, isyan, başkaldırı', contextNote: 'Synonym: rebellion, revolt, uprising.' },
      { word: 'reverberate', meaningTr: 'yankılanmak, zincirleme etki yaratmak', contextNote: 'Bir olayın diğer yerleri sarsması.' }
    ],
    deconstructedSentences: [
      {
        originalSentence: 'Within a span of less than a century, magnificent palatial complexes were burned to the ground, trade networks that had facilitated the exchange of Cypriot copper and Afghan lapis lazuli disintegrated, and widespread literacy evaporated as linear writing scripts fell into total oblivion.',
        subject: 'magnificent palatial complexes / trade networks / widespread literacy (üçlü paralel özne yapısı)',
        mainVerb: 'were burned / disintegrated / evaporated (üç paralel ana eylem)',
        objectsAndComplements: 'to the ground / into total oblivion',
        grammaticalStructures: [
          'Paralel Cümle Yapısı (A was burned, B disintegrated, and C evaporated): Yıkımın boyutunu anlatan klasik akademik retorik.',
          'Defining Relative Clause (that had facilitated the exchange...): Ticaret ağlarının neyi taşıdığını anlatan sıfat cümleciği.',
          'Zaman Bağlacı (as linear writing scripts fell...): Yazının unutulmasıyla okuryazarlığın yok olması arasındaki eşzamanlılık.'
        ],
        translationTr: 'Bir asırdan daha kısa bir süre içinde, muhteşem saray kompleksleri yerle bir edildi, Kıbrıs bakırı ile Afgan lacivert taşının takasını kolaylaştıran ticaret ağları dağıldı ve çizgisel yazı sistemlerinin tamamen unutulmasıyla yaygın okuryazarlık yok oldu.'
      },
      {
        originalSentence: 'Because Late Bronze Age societies were extraordinarily centralized and economically interdependent, a failure in one key node reverberated catastrophically through every interdependent kingdom.',
        subject: 'a failure in one key node (kilit bir noktadaki aksama / başarısızlık)',
        mainVerb: 'reverberated (yankılandı / sarsıcı etki yaptı)',
        objectsAndComplements: 'catastrophically through every interdependent kingdom (birbirine bağımlı her krallıkta felaket boyutunda)',
        grammaticalStructures: [
          'Sebep-Sonuç Yan Cümlesi (Because ... were centralized and interdependent): Sistem çöküşünün asıl nedenini açıklayan zarfcık.',
          'Zarf kullanımı (catastrophically): Fiilin etki şiddetini niteleyen akademik zarf.'
        ],
        translationTr: 'Geç Tunç Çağı toplumları olağanüstü derecede merkeziyetçi ve ekonomik olarak birbirine bağımlı olduğu için, kilit bir noktadaki tek bir aksama, birbirine bağlı her krallıkta felaket boyutunda yankı buldu.'
      }
    ],
    questions: [
      {
        id: 'rp3_q1',
        type: 'reading',
        question: 'According to the passage, the nineteenth-century view on the Bronze Age Collapse differed from contemporary views in that it _____ .',
        options: {
          A: 'claimed that climate change was the sole driver of civilizational collapse',
          B: 'attributed the demise of kingdoms primarily to a single catastrophic event',
          C: 'denied that the Mycenaeans and Hittites ever maintained contact with each other',
          D: 'argued that internal civil wars were more devastating than foreign raiders',
          E: 'proved that written languages continued uninterrupted throughout the Dark Ages'
        },
        answer: 'B',
        difficulty: 'Orta',
        tacticUsed: 'Fikir Karşılaştırması (Past vs. Present Views)',
        trapWarning: 'A şıkkı tam tersidir; iklim verileri yakın zamanda modern bilimcilerce bulunmuştur.',
        explanation: '2. Paragrafta: "antiquarians attributed this civilizational implosion almost exclusively to single, dramatic catastrophes" denilmektedir. "monocausal / single catastrophe" = "primarily to a single catastrophic event" (B şıkkı).'
      },
      {
        id: 'rp3_q2',
        type: 'reading',
        question: 'Recent scientific research in regional caves and pollen deposits indicates that the Mediterranean region _____ .',
        options: {
          A: 'suffered a series of earthquakes that destroyed its cities',
          B: 'endured an exceptionally prolonged severe drought that ruined agriculture',
          C: 'was affected by drought for only a few years',
          D: 'became colder and wetter during the late Bronze Age',
          E: 'lost much of its farmland to rising sea levels'
        },
        answer: 'B',
        difficulty: 'İleri',
        tacticUsed: 'Bilimsel Kanıt Eşleme (Megadrought = Prolonged severe drought)',
        trapWarning: 'Mağara ve polen verileri uzun süreli (protracted) bir kuraklığı gösterir. C süreyi kısaltır, D iklimi tersine çevirir, A ve E ise metinde olmayan doğal afetlerdir.',
        explanation: 'Son paragrafta "paleoclimatological data ... demonstrate that the Eastern Mediterranean suffered from a protracted and devastating megadrought" denmiştir. "Protracted megadrought" = "exceptionally prolonged severe drought" (B şıkkı).'
      },
      {
        id: 'rp3_q3',
        type: 'reading',
        question: 'The passage highlights that the vulnerability of Bronze Age empires was exacerbated by their _____ .',
        options: {
          A: 'deep economic reliance on one another and extreme administrative centralization',
          B: 'dependence on a single powerful military ally',
          C: 'lack of written records about agricultural production',
          D: 'frequent wars with one another over trade routes',
          E: 'isolation from the trade networks of the Aegean'
        },
        answer: 'A',
        difficulty: 'İleri',
        tacticUsed: 'Sistemik Neden Çıkarımı',
        trapWarning: 'Kırılganlık karşılıklı ekonomik bağımlılık ve aşırı merkeziyetçilikten gelir. E bunun tam tersidir (izolasyon); D ve B metinde olmayan nedenlerdir.',
        explanation: 'Son paragrafta "Because Late Bronze Age societies were extraordinarily centralized and economically interdependent, a failure in one key node reverberated catastrophically" denilerek kırılganlığın temel nedeni "deep economic reliance on one another and extreme administrative centralization" (A şıkkı) olarak verilmiştir.'
      },
      {
        id: 'rp3_q4',
        type: 'reading',
        question: 'Which word in the passage is closest in meaning to "protracted"?',
        options: {
          A: 'Severe',
          B: 'Prolonged',
          C: 'Repeated',
          D: 'Delayed',
          E: 'Sudden'
        },
        answer: 'B',
        difficulty: 'Orta',
        tacticUsed: 'Metin İçi Kelime Bilgisi (Vocabulary in Context)',
        trapWarning: 'Protracted = uzun süren. A (severe) kuraklığın şiddetini anlatır, süresini değil; C ve D yakın çağrışımlıdır ama süreyi anlatmaz; E zıt anlamlıdır.',
        explanation: 'Protracted: uzun süren, uzatılmış demektir. Eşanlamlısı "prolonged" (B şıkkı).'
      }
    ]
  }
];

// Options are reordered per question so the answer key is not concentrated in one letter.
export const YDS_READING_PASSAGES: ReadingPassage[] = [
  ...RAW_YDS_READING_PASSAGES.map((p) => ({
    ...p,
    questions: shuffleQuestionList(p.questions)
  })),
  ...READING_PASSAGE_BANK
];
