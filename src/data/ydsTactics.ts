import { YdsTacticGuide } from '../types';

export const YDS_TACTIC_GUIDES: YdsTacticGuide[] = [
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
    proTip: 'Zarf sorularında (-ly ile bitenler), o zarfın nitelediği fiile veya sıfata bakın. "Increases dramatically / substantially" kalıbı YDS\'nin vazgeçilmezidir.'
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
    proTip: 'Preposition sorularında soyut kavramlara dikkat edin: "at risk", "on the verge of", "in terms of", "with the help of", "under pressure".'
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
    proTip: 'Cloze testteki bağlaç sorularında seçeneklerde "However / Nevertheless" veya "Therefore / Thus" gibi birbirinin tam kopyası iki şık varsa, genellikle ikisi de birbirini eler.'
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
    proTip: 'Eğer soru kökünde bağlaç YOKSA, doğru seçenekte MUTLAKA bir bağlaç veya zıtlık/sebep ifadesi olmalıdır.'
  },
  {
    id: 'translation_en_tr',
    numberRange: '37 - 39. Sorular',
    title: 'İngilizce - Türkçe Çeviri',
    questionCount: 3,
    badge: '3 Soru / 3.75 Puan - Bedava Net!',
    summary: 'YDS\'nin en hızlı ve kesin puan getiren bölümüdür. Cümlenin tamamını okumadan 20-30 saniyede çözülebilir!',
    goldenRules: [
      'ALTIN KURAL 1: Ana Yüklemi (Main Verb) Bul: Türkçe cümlelerin yüklemi EN SONDA yer alır. İngilizce cümlenin ana fiilini bulun, zamanını ve etken/edilgen halini belirleyin. Türkçe şıkların son kelimesine bakarak 3 şıkkı 5 saniyede eleyin!',
      'ALTIN KURAL 2: Ana Özneyi (Main Subject) Bul: Cümledeki ana özne Türkçe cümlenin genellikle EN BAŞINDA yer alır. Özne eksik veya değiştirilmiş şıkları eleyin.',
      'ALTIN KURAL 3: Bağlaç ve Sıfat Cümlecikleri: "... who/which ..." gibi yapılar Türkçede "-en, -an / -dığı" sıfatı olarak yüklemden önceki kelimeye bağlanır.'
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
    proTip: 'Bu 3 soruyu toplam 2 dakikadan az sürede çözüp sınavda zaman kazanmalısınız!'
  },
  {
    id: 'translation_tr_en',
    numberRange: '40 - 42. Sorular',
    title: 'Türkçe - İngilizce Çeviri',
    questionCount: 3,
    badge: '3 Soru / 3.75 Puan - Bedava Net!',
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
    proTip: 'Zaman kaybetmeyin: Yüklem eşleşmesi ile 2 şık kalır, özne kontrolü ile doğru cevap 15 saniyede çıkar.'
  },
  {
    id: 'reading',
    numberRange: '43 - 62. Sorular',
    title: 'Paragraf / Okuma Anlama (Reading Passages)',
    questionCount: 20,
    badge: '20 Soru / 25 Puan - Sınavın Kalbi!',
    summary: '5 farklı akademik metin ve her metne ait 4\'er soru (Toplam 20 soru). YDS puanının tam 4\'te biridir. Zaman yönetiminin ve stratejinin kader belirlediği yerdir.',
    goldenRules: [
      'ÖNCE SORULARI OKU: Metne girmeden önce 4 soru kökünü ve anahtar kelimeleri 30 saniyede tarayın. Böylece beyniniz metinde neyi avlayacağını bilerek okur.',
      'AŞIRI GENELLEME (EXTREME WORDS) TUZAĞI: Şıklarda "always, completely, solely, only, entirely, never, best, impossible" gibi uç ve kesin kelimeler geçiyorsa o şık %95 YANLIŞTIR ve çeldiricidir! ÖSYM ılımlı şıkları sever (may, likely, generally, tend to).',
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
    proTip: 'Her paragrafa maksimum 9-10 dakika ayırın. Takıldığınız soruda inatlaşmayın, şıkkı eleyip diğerine geçin.'
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
    proTip: 'Şıkkı boşluğa koyup sesli/içten bir film sahnesi gibi hızlıca akışı okuyun; sırıtan cümle anında elenir.'
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
    proTip: 'Modal eşleştirmesine bakın: Orijinalde "must" (zorunluluk) varsa şıkta "might" (ihtimal) olamaz.'
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
    proTip: 'Boşluk paragrafın ilk cümlesindeyse genellikle konuyu tanıtan ana fikir cümlesidir; son cümlesindeyse sonuç/özet cümlesidir.'
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
    proTip: 'Bağlaçla başlayan cümlelere (However, Thus, In addition) dikkat edin: Eğer bir önceki cümleyle hiçbir bağ kuramıyorsa ya o cümle yanlıştır ya da ondan önceki cümle akışı bozmuştur.'
  }
];
