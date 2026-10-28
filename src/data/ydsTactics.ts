import { YdsTacticGuide } from '../types';
import { shuffleQuestionOptions } from '../services/optionShuffle';

const RAW_YDS_TACTIC_GUIDES: YdsTacticGuide[] = [
  {
    id: 'vocabulary',
    numberRange: '1 - 6. Sorular',
    title: 'Kelime Bilgisi (Vocabulary)',
    questionCount: 6,
    badge: '6 Soru / 7.5 Puan',
    summary: 'ÖSYM standart olarak 1 İsim, 1 Fiil, 1 Sıfat, 1 Zarf ve 2 Phrasal Verb sorar. Kelimeleri tekil anlamlarıyla değil, yanındaki edat (preposition) ve tamlamalarla (collocations) çözün.',
    goldenRules: [
      'Artı (+) / Eksi (-) Analizi: Cümlenin genel duygu yönünü belirleyin. Cümle bir felaketten mi (detrimental, degrade) yoksa bir gelişmeden mi (enhance, flourish) bahsediyor? Şıkları bu yöne göre 2-3 şıkka indirin.',
      'Boşluğun Sağı ve Solu (Collocation): Tüm cümleyi Türkçeye çevirmekle vakit kaybetmeyin. Boşluğun yanındaki edatlara bakın: "attribute ... to", "refrain ... from", "contribute ... to", "vulnerable ... to".',
      'Phrasal Verb Dağılımı: ÖSYM son 10 yılda en çok "account for (açıklamak/oluşturmak)", "bring about (yol açmak)", "carry out (yürütmek)", "rely on (güvenmek/dayanmak)" ve "cope with (başa çıkmak)" köklerini sormuştur.'
    ],
    stepByStepMethod: [
      '1. Adım: Cümleyi okumadan önce 5 şıkkın türünü onaylayın (hepsi sıfat mı, hepsi zarf mı?).',
      '2. Adım: Boşluğun hemen sağındaki isme veya edata (preposition) bakın (Örn: "drastic _____ in emissions" -> decrease/reduction).',
      '3. Adım: Cümledeki bağlaçlara (although, because) dikkat ederek cümlenin yönünü (+/-) saptayın ve zıt anlamlıları eleyin.'
    ],
    commonTraps: [
      'Yanlış Edat Tuzağı: Şıktaki kelime anlamsal olarak mantıklı gelebilir ama arkasından gelen edatla uyuşmaz (Örn: "prevent from" gerekirken cümlede "to" varsa o şık elenir).',
      'Benzer Yazılışlı Çeldiriciler: "Adopt (benimsemek)" ile "Adapt (uyum sağlamak)", "Precede (önce gelmek)" ile "Proceed (ilerlemek)" gibi kelimeleri birbirine karıştırmayın.'
    ],
    proTip: 'Zarf sorularında (-ly ile bitenler), o zarfın nitelediği fiile veya sıfata bakın. "Increases dramatically / substantially" kalıbı YDS\'nin vazgeçilmezidir.',
    sampleQuestion: {
      question: 'Although many developing nations have made substantial progress in public health, infectious diseases still pose a _____ threat to rural populations lacking access to modern sanitation.',
      options: {
        A: 'negligible',
        B: 'lucrative',
        C: 'detrimental',
        D: 'sustainable',
        E: 'superficial'
      },
      answer: 'C',
      solutionSteps: [
        '1. Adım (Bağlaç & Duygu Yönü): Cümle "Although (Her ne kadar... ise de)" zıtlık bağlacıyla başlıyor. İlk cümlecik "substantial progress (önemli ilerleme)" ile olumlu (+).',
        '2. Adım (Zıt Yön Tespiti): Zıtlık kuralı gereği ana cümlecik olumsuz (-) olmak zorundadır: "...still pose a _____ threat (halen ..... bir tehdit oluşturuyor)". Boşluğa olumsuz tehdit sıfatı gelmelidir.',
        '3. Adım (Şık Elemesi): A) negligible (önemsiz - tehdit önemsiz olamaz), B) lucrative (karlı), D) sustainable (sürdürülebilir), E) superficial (yüzeysel) elenir. C) detrimental (zararlı/yıkıcı) doğru cevaptır.'
      ],
      trapExplanation: 'A şıkkındaki "negligible (önemsiz)" kelimesi "progress" ile uyumlu görünse de Although zıtlık bağlacı ikinci cümlenin olumsuz (yıkıcı tehdit) olmasını şart koşar!',
      fastMethodTrick: 'Although (+) gördüğün an boşluktaki sıfatın olumsuz (-) olmak zorunda olduğunu bilerek 5 saniyede 3 şıkkı ele!'
    }
  },
  {
    id: 'grammar',
    numberRange: '7 - 16. Sorular',
    title: 'Dilbilgisi, Zamanlar & Edatlar',
    questionCount: 10,
    badge: '10 Soru / 12.5 Puan',
    summary: 'Tense (Zamanlar), Modals, Passive/Active, Sadeleştirme (Participle Reductions), Edatlar ve Bağlaçlar test edilir. YDS\'de zaman uyumu (Tense Consistency) en büyük silahtır.',
    goldenRules: [
      'Zaman Uyumu Kuralı: Temel cümle geçmiş zamandaysa (Past), yan cümle genelde geleceğe veya geniş zamana sıçrayamaz (Past ile Past, Present ile Present/Future eşleşir).',
      'Since Kuralı: "Since + Past Zaman/Cümle, Present Perfect Tense (have/has V3)" formülü YDS\'nin kesin çıkan kuralıdır.',
      '"By + Gelecek Zaman" = Future Perfect (will have V3). "By + Geçmiş Zaman" = Past Perfect (had V3).',
      'Sadeleştirme (Reduction): Boşluktan sonra nesne (object) varsa aktif (V-ing / Having V3), arkasından edat (by, in, to) veya doğrudan isim yoksa pasif (V3 / Having been V3) seçilir.'
    ],
    stepByStepMethod: [
      '1. Adım: Zaman ipuçlarını işaretleyin (recently, in 1970, over the last decades, by 2050, currently).',
      '2. Adım: Boşluğun iki tarafı arasındaki zaman köprüsünü kurun ve zaman uyumsuz 3 şıkkı direkt eleyin.',
      '3. Adım: Etken mi edilgen mi (Active/Passive) ayrımını yapın: Eylemi yapan özne işi kendisi mi yapıyor yoksa maruz mu kalıyor?'
    ],
    commonTraps: [
      '"Recently / In recent years" tuzaktır: Asla Past Simple (V2) almaz! Mutlaka Present Perfect (have/has V3) ister.',
      '"Would V1" tek başına hayali geçmiş anlatmaz; ya If Clause Type 2\'de ya da aktarmalı anlatımda (reported speech) kullanılır.'
    ],
    proTip: 'Preposition sorularında soyut kavramlara dikkat edin: "at risk", "on the verge of", "in terms of", "with the help of", "under pressure".',
    sampleQuestion: {
      question: 'Ever since cognitive psychologists _____ the fundamental mechanisms of memory retrieval in the 1970s, neuroscience _____ enormous breakthroughs in understanding dementia.',
      options: {
        A: 'discovered / has made',
        B: 'have discovered / made',
        C: 'had discovered / is making',
        D: 'were discovering / makes',
        E: 'discovered / will make'
      },
      answer: 'A',
      solutionSteps: [
        '1. Adım (Formül): "Since / Ever since + Past Simple (V2), Present Perfect (Have/Has V3)". Bu kalıp YDS\'nin en yüksek frekanslı kuralıdır.',
        '2. Adım (İlk Boşluk): "in the 1970s" geçmişte belirli bir tarihtir; Simple Past (discovered) gerektirir.',
        '3. Adım (İkinci Boşluk): 1970\'lerden günümüze kadar devam eden atılımlar Present Perfect (has made) gerektirir. Doğru şık A\'dır.'
      ],
      trapExplanation: 'B şıkkında "have discovered / made" ters verilmiştir. "Since" bağlacının içi ASLA Present Perfect almaz; ana cümle Present Perfect olur!',
      fastMethodTrick: 'Since + V2 ... Have/Has V3 formülünü gördüğün an şıklarda ilk tarafı V2, ikinci tarafı Have/Has V3 olan şıkkı 3 saniyede işaretle!'
    }
  },
  {
    id: 'cloze',
    numberRange: '17 - 26. Sorular',
    title: 'Cloze Test (Metin İçi Boşluk Doldurma)',
    questionCount: 10,
    badge: '10 Soru / 12.5 Puan',
    summary: 'Her biri 5 soruluk 2 akademik metinden oluşur. Genelde her metinde: 1 Kelime, 1 Tense/Modal, 2 Bağlaç ve 1 Edat sorusu bulunur.',
    goldenRules: [
      'Paragrafı Önce Bütün Olarak Tara: İlk cümleyi dikkatle okuyarak metnin ana konusunu ve zaman dilimini (Genel bilimsel gerçek mi yoksa geçmiş tarihsel süreç mi?) anlayın.',
      'Bağlaç Boşlukları: Boşluğun öncesindeki cümle ile sonrasındaki cümle arasındaki mantık ilişkisini (+/-) belirleyin.',
      'Referans Sözcüklere Odaklanın: Boşluğun arkasındaki "this, these, such" kelimeleri bir önceki cümleye atıfta bulunur.'
    ],
    stepByStepMethod: [
      '1. Adım: Metnin ilk 2 cümlesini okuyup konusunu ve tense tonunu (Present mı Past mı) kavrayın.',
      '2. Adım: Her boşluk için sadece o cümleyi değil, bir önceki ve bir sonraki cümleyi köprü olarak okuyun.',
      '3. Adım: Bağlaç seçeneklerinde cümle alan bağlaçlar ile isim alan bağlaçları (Although vs Despite) boşluğun arkasındaki yapıya göre eleyin.'
    ],
    commonTraps: [
      'Sadece boşluğun olduğu cümleyi okumak: Çoğu bağlaç sorusunun cevabı bir önceki cümlenin anlamında gizlidir.',
      'Tense kayması: Metin genelinde Present gidiyorsa sebepsiz yere Past Perfect (had V3) şıkkına atlamayın.'
    ],
    proTip: 'Cloze testteki bağlaç sorularında seçeneklerde "However / Nevertheless" veya "Therefore / Thus" gibi birbirinin tam kopyası iki şık varsa, genellikle ikisi de birbirini eler.',
    sampleQuestion: {
      passage: 'Deep-sea hydrothermal vents represent extreme ecosystems along tectonic plate boundaries. (I)_____ sunlight cannot penetrate these abyssal depths, photosynthetic organisms are entirely absent. Instead, chemosynthetic bacteria oxidize toxic hydrogen sulfide, providing the primary metabolic energy for gigantic tube worms and blind shrimp.',
      question: 'Metindeki (I) numaralı boşluğa gelebilecek en uygun bağlacı bulunuz.',
      options: {
        A: 'Because',
        B: 'Although',
        C: 'Unless',
        D: 'Even if',
        E: 'Whereas'
      },
      answer: 'A',
      solutionSteps: [
        '1. Adım (Sebep-Sonuç İlişkisi): Boşluğun öncesindeki durum: "Güneş ışığı bu derinliklere nüfuz edemez [Sebep]". Boşluktan sonraki sonuç: "Fotosentetik canlılar tamamen yoktur [Sonuç]".',
        '2. Adım (Bağlaç Tespiti): Sebep bildiren ve arkasından tam cümle (S+V) alan tek doğru bağlaç "Because"dur (-dığı için).',
        '3. Adım (Şık Elemesi): Although, Even if, Whereas (zıtlık) ve Unless (olumsuz koşul) elenir.'
      ],
      trapExplanation: 'Although zıtlık bildirir; oysa güneşin olmaması fotosentezin olmamasının zıttı değil doğrudan sebebidir!',
      fastMethodTrick: 'Cloze testte boşluğun solundaki cümlecik ile sağındakini tart; biri diğerinin gerekçesiyse zıtlık şıklarını eleyip "Because" işaretle!'
    }
  },
  {
    id: 'sentence_completion',
    numberRange: '27 - 36. Sorular',
    title: 'Cümle Tamamlama (Sentence Completion)',
    questionCount: 10,
    badge: '10 Soru / 12.5 Puan',
    summary: 'YDS\'nin en kritik 10 sorusudur. Yarım bırakılmış bir cümlenin mantık, bağlaç ve gramer açısından diğer yarısını bulmayı hedefler.',
    goldenRules: [
      'Bağlaç + Cümle Analizi: Soru kökü bağlaçla başlıyorsa (Örn: "Although ..."), ana cümlede zıt ve beklenmeyen bir sonuç arayın.',
      'Özne ve Zamir Uyumu (Pronoun Reference): Kök cümlede "The researchers" diyorsa, doğru cevapta genellikle "they" veya "their findings" referansı bulunur.',
      'Zıtlık Tablosu: While / Whereas taban tabana iki farklı durumu kıyaslar (Örn: Erkekler şunu yaparken, kadınlar bunu yapar).',
      'Artı/Eksi Yöntemi: Kök cümle olumsuzsa ve bağlaç "Although/Even though" ise aranan cümle olumlu (+) olmak zorundadır.'
    ],
    stepByStepMethod: [
      '1. Adım: Kök cümlenin bağlacını tespit edin (Sebep mi, zıtlık mı, koşul mu, zaman mı?).',
      '2. Adım: Cümlenin ana öznesini işaretleyin.',
      '3. Adım: Zaman uyumsuz şıkları eleyin (Unless kökünde Type 1 ararken Past şıkları eleyin).',
      '4. Adım: Zamir köprüsü kuran ve anlamı kusursuz tamamlayan şıkkı işaretleyin.'
    ],
    commonTraps: [
      'Tuzak Özne: Anlam çok mantıklı görünür ancak kök cümlenin öznesiyle diğer cümlenin öznesi alakasızdır.',
      'Zıtlık Bağlacında Paralel Anlam: Although cümlesinde sebep-sonuç anlamı veren şıklar çeldiricidir.'
    ],
    proTip: 'Eğer soru kökünde bağlaç YOKSA, doğru seçenekte MUTLAKA bir bağlaç veya zıtlık/sebep ifadesi olmalıdır.',
    sampleQuestion: {
      question: 'Although early hunter-gatherers lacked formal agricultural knowledge, _____.',
      options: {
        A: 'they developed sophisticated seasonal strategies to harvest wild cereals across diverse terrains',
        B: 'they were completely helpless during severe climatological shifts',
        C: 'because permanent villages were founded centuries later',
        D: 'which led to widespread starvation during winter months',
        E: 'since modern archaeology has uncovered few tools from that era'
      },
      answer: 'A',
      solutionSteps: [
        '1. Adım (Bağlaç & Duygu Yönü): Kök cümle "Although" ile başlıyor ve "lacked formal knowledge" (bilgiden yoksundular) diyerek negatif (-) başlıyor.',
        '2. Adım (Zıtlık & Özne Köprüsü): Ana cümlede pozitif (+) bir başarı aranmalıdır. Özne "early hunter-gatherers" (çoğul) olduğu için şıkta "they" zamir köprüsü aranır.',
        '3. Adım (Şık Analizi): A şıkkı "they developed sophisticated strategies... (+)" diyerek hem zamir uyumunu hem zıtlık mantığını kusursuz tamamlar.'
      ],
      trapExplanation: 'B şıkkında "they were completely helpless" der; bu zıtlık değil negatif devamlılık yaratırdı. C ve E şıkları bağlaçlı cümleye tekrar sebep bağlacı bağlar, cümle yarım kalır.',
      fastMethodTrick: 'Although (-) kökünde hemen (+) beceri/başarı anlatan ve "they" zamir köprüsü kuran şıkkı 10 saniyede yakala!'
    }
  },
  {
    id: 'translation_en_tr',
    numberRange: '37 - 39. Sorular',
    title: 'İngilizce - Türkçe Çeviri',
    questionCount: 3,
    badge: '3 Soru / 3.75 Puan',
    summary: 'YDS\'nin en hızlı ve kesin puan getiren bölümüdür. Cümlenin tamamını okumadan 20-30 saniyede çözülebilir!',
    goldenRules: [
      'KURAL 1: Ana Yüklemi (Main Verb) Bul: Türkçe cümlelerin yüklemi EN SONDA yer alır. İngilizce cümlenin ana fiilini bulun, zamanını ve etken/edilgen halini belirleyin. Türkçe şıkların son kelimesine bakarak 3 şıkkı 5 saniyede eleyin!',
      'KURAL 2: Ana Özneyi (Main Subject) Bul: Cümledeki ana özne Türkçe cümlenin genellikle EN BAŞINDA yer alır. Özne eksik veya değiştirilmiş şıkları eleyin.',
      'KURAL 3: Bağlaç ve Sıfat Cümlecikleri: "... who/which ..." gibi yapılar Türkçede "-en, -an / -dığı" sıfatı olarak yüklemden önceki kelimeye bağlanır.'
    ],
    stepByStepMethod: [
      '1. Adım: İngilizce cümlenin ana fiilini tespit et (Örn: "... has contributed to ...").',
      '2. Adım: Şıkların sonuna bak: "... katkıda bulunmuştur" dışındaki (örn: katkıda bulunabilir, katkıda bulundu, katkı sağladı) şıkları ele.',
      '3. Adım: Kalan 2 şık arasında ana özneyi kontrol et ve doğruyu işaretle.'
    ],
    commonTraps: [
      'Gereksiz Anlam Genişletmesi: Orijinal cümlede "may" yokken şıkta "-ebilir" eklenmesi.',
      'Zaman Kayması: Present Perfect bir fiilin "-di\'li geçmiş" veya "şimdiki zaman" olarak çevrilmesi.'
    ],
    proTip: 'Bu 3 soruyu toplam 2 dakikadan az sürede çözüp sınavda zaman kazanmalısınız!',
    sampleQuestion: {
      question: 'Glaciologists warn that the accelerated melting of the Thwaites Glacier in West Antarctica could trigger an irreversible cascade that raises global sea levels by several meters.',
      options: {
        A: 'Buzulbilimciler, Batı Antarktika\'daki Thwaites Buzulu\'nun hızlanan erimesinin küresel deniz seviyelerini birkaç metre yükselten geri döndürülemez bir zincirleme süreci tetikleyebileceği konusunda uyarıyor.',
        B: 'Batı Antarktika\'daki Thwaites Buzulu\'nun erimesi, buzulbilimcilere göre küresel deniz seviyesini yükseltecek geri dönülmez zincirleme bir reaksiyona yol açmıştır.',
        C: 'Buzulbilimcilerin uyardığı gibi, küresel deniz seviyelerinin birkaç metre yükselmesi Batı Antarktika\'daki Thwaites Buzulu\'nun erimesini tetikleyebilir.',
        D: 'Thwaites Buzulu\'nun Batı Antarktika\'da hızla erimesi, buzulbilimcilerin uyardığı üzere deniz seviyesinde birkaç metrelik geri dönüşsüz artışa sebep olacaktır.',
        E: 'Küresel deniz seviyesini birkaç metre yükseltecek zincirleme felaket, buzulbilimcilerin belirttiği gibi Thwaites Buzulu\'nun erimesiyle tetiklenmektedir.'
      },
      answer: 'A',
      solutionSteps: [
        '1. Adım (Ana Yüklem Avı): İngilizce cümlenin ana yüklemi "Glaciologists warn that...". Türkçe cümlenin son kelimesi mutlaka "... uyarıyor" veya "... uyarmaktadır" olmak zorundadır!',
        '2. Adım (Şıkların Sonunu Tara): B şıkkı "... yol açmıştır", C şıkkı "... tetikleyebilir", D şıkkı "... sebep olacaktır", E şıkkı "... tetiklenmektedir" ile biter. Dördü de ana yüklem olmadığı için 5 saniyede elenir!',
        '3. Adım (Doğrulama): A şıkkının sonu "... konusunda uyarıyor" ile biter; öznesi de "Buzulbilimciler"dir. Kusursuz ve tek doğru şık A\'dır.'
      ],
      trapExplanation: 'B, C, D ve E şıklarında yan cümlenin yüklemleri ana yüklem gibi gösterilerek zaman kayması yaratılmıştır.',
      fastMethodTrick: 'İngilizce cümlenin ana fiiline bak: "warn that" -> Türkçe şıkların sadece son kelimelerini oku; "uyarıyor" ile biten tek şıkkı 10 saniyede işaretle!'
    }
  },
  {
    id: 'translation_tr_en',
    numberRange: '40 - 42. Sorular',
    title: 'Türkçe - İngilizce Çeviri',
    questionCount: 3,
    badge: '3 Soru / 3.75 Puan',
    summary: 'İngilizce-Türkçe çevirinin tersidir. Mantık birebir aynıdır: Türkçe cümlenin sonundaki yüklem İngilizce cümlenin merkezindeki ana fiil olmak zorundadır.',
    goldenRules: [
      'Türkçe cümlenin son kelimesini inceleyin: Eylem etken mi (yaptı), edilgen mi (yapıldı), yoksa modal mı (yapmalıdır - must/should)?',
      'İngilizce şıklarda ana fiili yanlış tensede veya pasif yerine aktif kullanan seçenekleri eleyin.',
      'Cümlenin en başındaki özneyi İngilizce cümlenin başına yerleştirin.'
    ],
    stepByStepMethod: [
      '1. Adım: Türkçe cümlenin yüklemini belirle (Örn: "... zorunluluk haline gelmiştir").',
      '2. Adım: İngilizce şıklardaki ana fiillere bak ("... has become a necessity").',
      '3. Adım: Varsa bağlaçları eşleştir ("rağmen" -> although/despite, "çünkü" -> because/as).'
    ],
    commonTraps: [
      'Öznenin Nesne Yapılması: Türkçedeki özne yerine bambaşka bir kelimenin İngilizce cümlenin öznesi yapılması.',
      'Edilgen (Passive) Tuzağı: Türkçede "-ilmiştir" varken İngilizcede aktif fiil yazılması.'
    ],
    proTip: 'Zaman kaybetmeyin: Yüklem eşleşmesi ile 2 şık kalır, özne kontrolü ile doğru cevap 15 saniyede çıkar.',
    sampleQuestion: {
      question: 'Yapay zekanın tıbbi teşhislerde kullanımı son yıllarda hızla artmış olsa da, nihai kararın her zaman insan hekimler tarafından verilmesi gerektiği savunulmaktadır.',
      options: {
        A: 'Although the use of artificial intelligence in medical diagnostics has rapidly increased in recent years, it is argued that the final decision must always be made by human physicians.',
        B: 'Since artificial intelligence has been widely used in medical diagnosis recently, human physicians must always make the final decision.',
        C: 'The rapid increase in artificial intelligence applications in medicine demonstrates that human physicians should not make the final decision alone.',
        D: 'Even if the final decision is made by human physicians, the adoption of artificial intelligence in diagnostics has grown exponentially.',
        E: 'Because artificial intelligence in medical diagnosis is advancing, medical authorities argue that physicians will lose their decision-making power.'
      },
      answer: 'A',
      solutionSteps: [
        '1. Adım (Ana Yüklem Eşleşmesi): Türkçe cümlenin son kelimesi "... savunulmaktadır" (Edilgen/Pasif). İngilizce karşılığı "it is argued that" veya "is claimed that" olmalıdır.',
        '2. Adım (Bağlaç Eşleşmesi): "... artmış olsa da" ifadesi bir ZITLIK bağlacıdır (-e rağmen). İngilizce karşılığı "Although / Even though"dur.',
        '3. Adım (Şık Elemesi): B ve E şıkları "Since / Because" (sebep) ile başlar, elenir. C şıkkında zıtlık yoktur. D şıkkında "olsa da" yanlış cümleye bağlanmıştır. A şıkkı tam çeviridir.'
      ],
      trapExplanation: 'B ve E şıklarında zıtlık bağlacı yerine "Since / Because" kullanılarak sebep-sonuç tuzağı kurulmuştur.',
      fastMethodTrick: 'Türkçedeki "savunulmaktadır" (it is argued that) ve "olsa da" (Although) ikilisini İngilizce şıklarda 15 saniyede bul!'
    }
  },
  {
    id: 'reading',
    numberRange: '43 - 62. Sorular',
    title: 'Paragraf / Okuma Anlama (Reading Passages)',
    questionCount: 20,
    badge: '20 Soru / 25 Puan',
    summary: '5 farklı akademik metin ve her metne ait 4\'er soru (Toplam 20 soru). YDS puanının tam 4\'te biridir. Zaman yönetiminin ve stratejinin kader belirlediği yerdir.',
    goldenRules: [
      'ÖNCE SORULARI OKU: Metne girmeden önce 4 soru kökünü ve anahtar kelimeleri 30 saniyede tarayın. Böylece beyniniz metinde neyi avlayacağını bilerek okur.',
      'AŞIRI GENELLEME (EXTREME WORDS) TUZAĞI: Şıklarda "always, completely, solely, only, entirely, never, best, impossible" gibi uç ve kesin kelimeler geçiyorsa o şık çoğunlukla YANLIŞTIR ve çeldiricidir! ÖSYM ılımlı şıkları sever (may, likely, generally, tend to).',
      'Eş Anlamlı Yeniden İfade (Paraphrase): Doğru cevap metindeki cümlenin kelime kelime kopyası DEĞİLDİR; eş anlamlı kelimelerle yeniden yazılmış halidir.',
      'Ana Fikir Soruları: "The main idea / Primary purpose / Best title" sorularının cevabı genellikle ilk veya son iki cümlede yer alır.'
    ],
    stepByStepMethod: [
      '1. Adım: 4 sorunun köklerini tara (Örn: "Why did the scientists use X?", "According to the passage, Y...").',
      '2. Adım: Metni aktif oku: Bağlaçların (However, Therefore, But) ve zıtlıkların altını çiz.',
      '3. Adım: Detay sorularında anahtar kelimenin geçtiği yeri bulup bir önceki ve bir sonraki cümleyi dikkatle analiz et.',
      '4. Adım: Aşırı kesin (radical) şıkları ele, metne sadık kal (kendi genel kültürünü değil metni baz al!).'
    ],
    commonTraps: [
      'Kendi Bilgini Katmak: Metinde yazmayan ama gerçek hayatta doğru olan genel kültür bilgileri şıklara konur; metinde yoksa elenir!',
      'Yarı Doğru Yarı Yanlış Şık: Cümlenin ilk yarısı metinle birebir uyumlu, sonundaki 2 kelime metni saptıran tuzaktır.'
    ],
    proTip: 'Her paragrafa maksimum 9-10 dakika ayırın. Takıldığınız soruda inatlaşmayın, şıkkı eleyip diğerine geçin.',
    sampleQuestion: {
      passage: 'For decades, classical genetics posited that an organism’s developmental destiny was determined by static DNA. However, epigenetics has demolished this paradigm. Epigenetic mechanisms—such as DNA methylation—act as molecular switches that regulate gene expression without altering the underlying nucleotide sequence. Environmental stimuli, including chronic stress and nutritional deprivation, can silence or activate specific genetic markers across generations.',
      question: 'According to the passage, the primary distinction between classical genetics and epigenetics is that epigenetics _____',
      options: {
        A: 'demonstrates that gene expression can be influenced by environmental factors without changing DNA sequences.',
        B: 'claims that DNA nucleotide sequences change permanently during an individual’s lifetime.',
        C: 'asserts that environmental pollutants have no measurable impact on biological development.',
        D: 'proves that classical geneticists were entirely correct about rigid biological destiny.',
        E: 'suggests that maternal nutrition has no relevance to fetal metabolic programming.'
      },
      answer: 'A',
      solutionSteps: [
        '1. Adım (Soru Kökü Odak Noktası): Soru kökü "epigenetik ile klasik genetik arasındaki temel farkı" soruyor.',
        '2. Adım (Metinde Anahtar Cümle): Metindeki "...regulate gene expression without altering the underlying nucleotide sequence" cümlesini yakala.',
        '3. Adım (Paraphrase & Eş Anlam Eşleştirmesi): Metindeki "without altering the nucleotide sequence" ifadesi, A şıkkında "without changing DNA sequences" olarak yeniden ifade edilmiştir. Doğru cevap A\'dır.'
      ],
      trapExplanation: 'B şıkkında "DNA diziliminin kalıcı olarak değiştiği" iddia edilir; oysa metin "without altering (değiştirmeden)" demektedir. C, D ve E şıkları ise metnin doğrudan zıttıdır.',
      fastMethodTrick: 'Paragraftaki "without altering" ifadesini görür görmez şıklarda "without changing" eşanlamlısını ara; aşırı kesin ve metne aykırı şıkları 20 saniyede ele!'
    }
  },
  {
    id: 'dialogue',
    numberRange: '63 - 67. Sorular',
    title: 'Diyalog Tamamlama (Dialogue Completion)',
    questionCount: 5,
    badge: '5 Soru / 6.25 Puan',
    summary: 'Karşılıklı konuşmada boş bırakılan cümleyi bulma. YDS\'nin en kolay puan toplanan bölümlerinden biridir.',
    goldenRules: [
      'Boşluktan HEMEN SONRAKİ Cümle Anahtardır: Boşluğu takip eden kişinin verdiği tepki (şaşırma, onaylama, itiraz, soru sorma) boşlukta ne söylenmiş olduğunu ele verir.',
      'Duygu ve Ton Uyumu: Karşıdaki "That sounds unbelievable!" diyorsa, boşlukta şaşırtıcı bir iddia veya haber yer almalıdır.',
      'Soru-Cevap Eşleşmesi: Sonraki kişi "Yes, but..." diyorsa, boşluk bir Yes/No sorusu veya onay bekleyen bir cümle olmalıdır.'
    ],
    stepByStepMethod: [
      '1. Adım: Diyaloğun konusunu ve konuşmacıların rollerini (doktor-hasta, iki meslektaş) belirleyin.',
      '2. Adım: Boşluktan bir önceki cümleyi ve HEMEN SONRAKİ cümleyi okuyun.',
      '3. Adım: Sonraki cevabın hangi soruya veya tespite verilmiş olabileceğini şıklarda arayın.'
    ],
    commonTraps: [
      'Diyaloğu Başlatan Cümleye Odaklanıp Sonrasını Unutmak: Cevap yukarıya uyabilir ama aşağıdaki tepkiyle çelişiyorsa yanlıştır.',
      'Aşırı Resmi veya Alakasız Tepkiler: Günlük akademik sohbet tonunu bozan şıkları eleyin.'
    ],
    proTip: 'Şıkkı boşluğa koyup sesli/içten bir film sahnesi gibi hızlıca akışı okuyun; sırıtan cümle anında elenir.',
    sampleQuestion: {
      dialogueSpeaker: 'Dr. Evans (Neurologist) & Dr. Miller (Pharmacologist)',
      question: `Dr. Evans:
— The clinical trial results for the synthetic antibody in Alzheimer’s patients are paradoxical. Amyloid plaque deposits were reduced by eighty percent, yet patients exhibited zero cognitive improvement.

Dr. Miller:
— That strongly challenges the foundational amyloid hypothesis that has dominated dementia research for decades.

Dr. Evans:
— _____

Dr. Miller:
— Precisely. If clearing the plaques doesn't halt cognitive decline, we must urgently redirect research funding towards neuroinflammation and tau protein tangles.`,
      options: {
        A: 'So you are implying that amyloid plaques might merely be a secondary symptom rather than the primary cause of neurodegeneration?',
        B: 'Then we should double the antibody dosage and continue the trial for another five years without changes.',
        C: 'Are you suggesting that clinical trials should never be monitored by independent regulatory agencies?',
        D: 'The laboratory testing equipment was obviously uncalibrated, so the measurements are invalid.',
        E: 'Most patients actually prefer taking oral tablets rather than undergoing intravenous infusions.'
      },
      answer: 'A',
      solutionSteps: [
        '1. Adım (Boşluktan HEMEN SONRAKİ Cümle): Dr. Miller "Precisely (Kesinlikle/Aynen öyle). If clearing plaques doesn\'t halt decline, we must redirect funding..." diyerek onay veriyor.',
        '2. Adım (Çıkarım): Dr. Evans boşlukta "Yani plaklar asıl neden değil, yalnızca bir sonuç/belirti mi diyorsun?" şeklinde Miller\'ın sözünü özetlemiş olmalıdır.',
        '3. Adım (Şık Eşleşmesi): A şıkkında Dr. Evans tam olarak bunu sorar: "So you are implying that plaques might merely be a symptom rather than the cause?". Dr. Miller da "Precisely" diyerek onaylar. Doğru şık A\'dır.'
      ],
      trapExplanation: 'B şıkkı Dr. Miller\'ın araştırmayı başka alana yönlendirme ("redirect funding") kararıyla doğrudan çelişir.',
      fastMethodTrick: 'Diyalogda boşluğun altındaki cevaba bak: "Precisely" diyorsa, bir önceki cümlenin mantıksal onay sorusunu şıklarda 15 saniyede bul!'
    }
  },
  {
    id: 'restatement',
    numberRange: '68 - 71. Sorular',
    title: 'Anlamca En Yakın Cümle (Restatement)',
    questionCount: 4,
    badge: '4 Soru / 5 Puan',
    summary: 'Verilen uzun ve karmaşık bir cümlenin anlamını eksiksiz ve fazlalıksız aktaran eşdeğerini bulma.',
    goldenRules: [
      'Çekirdek Anlamı ve Dereceyi Koru: Orijinal cümledeki derece zarfları (partly, mostly, hardly, far more, crucial) şıkta da birebir bulunmalıdır.',
      'Bağlaç Değişimi: "Although X, Y" yapısı doğru cevapta "Y, despite X" veya "X; however, Y" şeklinde yeniden kurgulanır.',
      'Ne Eksik Ne Fazla: Orijinal cümlede olmayan bir iddiayı ekleyen veya cümlenin yarısını atan şıkları anında eleyin.'
    ],
    stepByStepMethod: [
      '1. Adım: Orijinal cümlenin ana bağlacını ve derece zarflarını kutu içine alın.',
      '2. Adım: Cümlenin sebep ve sonuç kısmını ayırın.',
      '3. Adım: Şıklarda dereceyi değiştiren (örneğin "often" yerine "always" diyen) şıkları eleyin.',
      '4. Adım: Tüm anahtar anlamları içeren en dengeli şıkkı seçin.'
    ],
    commonTraps: [
      'Anlam Genişlemesi: Cümlede "bazı ülkeler" derken şıkta "dünya genelinde" demesi.',
      'Zıt Anlam Çeldiricisi: Kelimeler neredeyse aynıdır ama mantık ilişkisi tersine çevrilmiştir.'
    ],
    proTip: 'Modal eşleştirmesine bakın: Orijinalde "must" (zorunluluk) varsa şıkta "might" (ihtimal) olamaz.',
    sampleQuestion: {
      question: 'Had the international coalition enforced strict carbon caps two decades ago, global average temperatures would not be escalating at their current alarming rate.',
      options: {
        A: 'Because the international community failed to implement binding carbon limits twenty years ago, worldwide temperatures are now rising with disturbing speed.',
        B: 'Global average temperatures have increased steadily over the last two decades despite the rigorous carbon caps imposed by international treaties.',
        C: 'Even if the international coalition had mandated carbon restrictions twenty years ago, global warming would still be accelerating at the same alarming pace.',
        D: 'Unless international leaders agree to cap global emissions within the next twenty years, atmospheric temperatures will escalate uncontrollably.',
        E: 'The international coalition was completely unaware twenty years ago that carbon emissions would cause worldwide temperatures to rise.'
      },
      answer: 'A',
      solutionSteps: [
        '1. Adım (Gramer Kalıbı Tespiti): Orijinal cümle "Had the coalition enforced..." (Type 3 Devrik If) ile başlıyor: "Koalisyon 20 yıl önce kotaları uygulamış olsaydı, sıcaklıklar şu an bu hızla artıyor olmazdı".',
        '2. Adım (Gerçek Durum Çıkarımı): Bu cümlenin gerçek anlamı şudur: "Koalisyon 20 yıl önce kotaları uygulamadığı için (failed to implement), sıcaklıklar şu an endişe verici bir hızla artıyor (rising with disturbing speed)".',
        '3. Adım (Eşleştirme): A şıkkı "Because the community failed to implement... temperatures are now rising..." diyerek bu mantığı eksiksiz ve fazlalıksız verir.'
      ],
      trapExplanation: 'B şıkkında kotaların uygulandığını iddia eder. C şıkkı "uygulasaydı bile yine artardı" diyerek zıt anlam verir. D şıkkı geleceğe yönelik koşul kurar.',
      fastMethodTrick: 'Type 3 Devrik If ("Had + V3") gördüğün an şıklarda "Because ... failed to do" (yapılmadığı için) neden-sonuç eşdeğerini ara!'
    }
  },
  {
    id: 'paragraph_completion',
    numberRange: '72 - 75. Sorular',
    title: 'Paragraf Tamamlama (Paragraph Completion)',
    questionCount: 4,
    badge: '4 Soru / 5 Puan',
    summary: 'Metnin ortasından veya sonundan çıkarılmış cümleyi yerine koyma. Köprü kurma sanatıdır.',
    goldenRules: [
      'Öncesi ve Sonrası Köprüsü: Boşluğun bir önceki cümlesi ile bir sonraki cümlesi arasındaki boşluğu dolduracak "köprü taşı" arayın.',
      'Zamir Takibi (Pronoun Tracking): Boşluktan sonraki cümlede "These problems", "This invention", "Such efforts" diyorsa, aranan cümlede MUTLAKA o problemden veya buluştan bahsedilmiş olmalıdır.',
      'Akış Yönü: Öncesi olumlu anlatırken sonrası "However" ile negatife dönüyorsa, aranan cümle bu değişimi başlatmış veya desteklemiş olmalıdır.'
    ],
    stepByStepMethod: [
      '1. Adım: Boşluğun HEMEN ÖNCESİNDEKİ ve HEMEN SONRASINDAKİ cümleleri çok dikkatli okuyun.',
      '2. Adım: Zamirleri ve geçiş bağlaçlarını işaretleyin.',
      '3. Adım: Şıklardaki referans sözcüklerin metindeki karşılığını arayın.',
      '4. Adım: Doğru şıkkı yerine koyup paragrafı 3 cümle boyunca baştan sona akıcı şekilde test edin.'
    ],
    commonTraps: [
      'Konuyla İlgili Ama Yeri Yanlış Cümle: Cümle metnin genel konusuyla ilgili olabilir ama boşluğun solundaki ve sağındaki cümlelerle doğrudan bağlantı kuramaz.',
      'Zaman Tutarsızlığı: Geçmiş anlatılırken sebepsiz Present Perfect veya Future\'a atlanması.'
    ],
    proTip: 'Boşluk paragrafın ilk cümlesindeyse genellikle konuyu tanıtan ana fikir cümlesidir; son cümlesindeyse sonuç/özet cümlesidir.',
    sampleQuestion: {
      question: `Throughout the animal kingdom, sleep remains an evolutionary enigma. Engaging in prolonged unconsciousness leaves animals vulnerable to predation and prevents foraging. (_____) Neurobiological investigations reveal that during deep slow-wave sleep, the brain’s glymphatic system expands, flushing out neurotoxic metabolic waste products, such as amyloid-beta proteins, that accumulate during waking hours.`,
      options: {
        A: 'Yet, the sheer ubiquity of sleep across species demonstrates that it must serve an indispensable physiological function.',
        B: 'Consequently, most predatory mammals have completely evolved away the biological necessity for restorative rest.',
        C: 'Furthermore, aquatic marine mammals never enter slow-wave sleep because they must surface periodically to breathe.',
        D: 'For this reason, human beings require significantly less sleep than primitive cold-blooded reptiles.',
        E: 'Instead, sleep deprivation has been proven to enhance athletic agility and sensory perception in birds.'
      },
      answer: 'A',
      solutionSteps: [
        '1. Adım (Boşluk Öncesi): Uykunun yırtıcılara karşı hayvanı savunmasız bırakması ve avlanmayı engellemesi gibi tehlikeleri anlatılıyor (-).',
        '2. Adım (Boşluk Sonrası): Derin uykuda beynin toksik atıkları temizlediği hayati fizyolojik faydası açıklanıyor (+).',
        '3. Adım (Köprü Kurma): Eksi (-) durumdan artı (+) duruma geçerken ZITLIK BAĞLACI (Yet / However) gereklidir. A şıkkı: "Yet, the ubiquity of sleep demonstrates it must serve an indispensable function" diyerek bu köprüyü kusursuz kurar.'
      ],
      trapExplanation: 'B şıkkı hayvanların uykuyu evrimsel olarak bıraktığını söyler; oysa sonraki cümle beynin nasıl temizlendiğini anlatır. C, D ve E konu dışı detaylardır.',
      fastMethodTrick: 'Boşluğun öncesi dezavantaj (-), sonrası hayati fayda (+) anlatıyorsa şıklarda zıtlık bağlacıyla (Yet/However) başlayan köprü cümlesini seç!'
    }
  },
  {
    id: 'irrelevant_sentence',
    numberRange: '76 - 80. Sorular',
    title: 'Akışı Bozan Cümle (Irrelevant Sentence)',
    questionCount: 5,
    badge: '5 Soru / 6.25 Puan',
    summary: 'Numaralandırılmış 5 cümleden oluşan paragrafta düşüncenin akışını, odak noktasını veya mantık zincirini bozan yabancı cümleyi bulma.',
    goldenRules: [
      'Konu Değil, ODAK NOKTASI Değişir: ÖSYM konuyu tamamen değiştirmez (Örn: Hepsi kahveden bahseder ama 4 cümle kahvenin sağlığa faydalarını anlatırken, bozan cümle kahvenin Brezilya\'daki üretim tarihini anlatır!).',
      'Özne Kayması: Metin boyunca "Albert Einstein" anlatılırken, bir cümlede aniden "New York Üniversitesi" özne yapılırsa dikkat!',
      'Zamir Köprüsü Testi: Şüpheli cümleyi atın; bir önceki cümle ile bir sonraki cümle birbirine pürüzsüzce bağlanıyorsa bozan cümle kesinlikle odur!'
    ],
    stepByStepMethod: [
      '1. Adım: 1. ve 2. cümleleri okuyarak metnin ana temasını ve odak noktasını dar bir çerçeveye oturtun.',
      '2. Adım: Her cümlenin öznesini ve anlattığı yönü (+/- veya fayda/zarar) takip edin.',
      '3. Adım: Odaktan sapan cümleyi tespit ettiğinizde, o cümleyi atıp önceki ve sonraki cümleyi art arda okuyarak sağlamasını yapın.'
    ],
    commonTraps: [
      'Aynı Kelimelerin Geçmesi: Bozan cümlenin içinde metindeki anahtar kelimeler geçer; bu yüzden "bu da aynı konudan bahsediyor" yanılgısına düşmeyin, odak noktasına bakın!',
      '1. Cümlenin Bozan Cümle Olabilmesi: İlk cümlenin de akışı bozabileceğini unutmayın (Genellikle 2. cümle metni başlatır, 1. cümle alakasız kalır).'
    ],
    proTip: 'Bağlaçla başlayan cümlelere (However, Thus, In addition) dikkat edin: Eğer bir önceki cümleyle hiçbir bağ kuramıyorsa ya o cümle yanlıştır ya da ondan önceki cümle akışı bozmuştur.',
    sampleQuestion: {
      question: `(I) Deep-sea hydrothermal vents harbor chemosynthetic biospheres that thrive completely independent of solar energy. 
(II) These geothermal chimneys expel superheated fluids enriched with toxic hydrogen sulfide directly into the abyssal ocean. 
(III) Chemosynthetic bacteria oxidize these sulfur compounds, serving as the primary energetic base for giant tubeworms and blind shrimp. 
(IV) Commercial sport fishing charters along tropical coastlines have reported record-breaking catches of blue marlin this season. 
(V) Because these benthic ecosystems function without sunlight, astrobiologists study them as models for potential life beneath the ice crust of Jupiter’s moon Europa.`,
      options: {
        A: 'I',
        B: 'II',
        C: 'III',
        D: 'IV',
        E: 'V'
      },
      answer: 'D',
      solutionSteps: [
        '1. Adım (Odak Noktası): Paragraf derin deniz hidrotermal bacaları, kemosentetik bakteriler ve güneşsiz yaşam ekosistemini anlatmaktadır.',
        '2. Adım (Akış Analizi): I (Giriş), II (Bacaların yapısı), III (Bakterilerin kükürt oksitlemesi), V (Astrobiyoloji ve Jüpiter\'in uydusu Europa bağlantısı).',
        '3. Adım (Yabancı Cümle): (IV) Numaralı cümle aniden tropik kıyılardaki ticari mavi marlin balığı avcılığından bahsetmektedir. IV. cümle atıldığında III ve V birbirine pürüzsüz bağlanır.',
        '4. Adım (Doğru Cevap): D şıkkı (IV. Cümle).'
      ],
      trapExplanation: 'IV. cümlede de balıktan (marlin) bahsettiği için dikkatsiz okuyucu "deniz konusu devam ediyor" zannedebilir; fakat konu derin deniz hidrotermal bacalarıdır, spor avcılığı değil!',
      fastMethodTrick: 'Şüpheli cümlenin (IV) üstünü kapatıp III\'ten doğrudan V\'e oku: "...serving as food base for tubeworms... Because these ecosystems function without sunlight, astrobiologists study them..." akış pürüzsüzse cevap odur!'
    }
  }
];

// Sample question options are reordered so the answer is not always A.
export const YDS_TACTIC_GUIDES: YdsTacticGuide[] = RAW_YDS_TACTIC_GUIDES.map((g) => ({
  ...g,
  sampleQuestion: g.sampleQuestion ? shuffleQuestionOptions(g.sampleQuestion, `tactic_${g.id}`) : undefined
}));
