import { YdsQuestion } from '../../types';

// YDS translation practice: 30 English-to-Turkish and 30 Turkish-to-English
// questions. Each set is written with the correct translation first and the
// distractors changing one meaning element each (tense, modality, cause and
// effect, negation, comparison, subject). The correct option is then placed on
// A..E in turn.

type Kind = 'translation_en_tr' | 'translation_tr_en';

const make = (
  id: string,
  type: Kind,
  question: string,
  options: [string, string, string, string, string],
  explanation: string,
  trapWarning: string,
  difficulty: YdsQuestion['difficulty'] = 'İleri'
): YdsQuestion => ({
  id,
  type,
  title: type === 'translation_en_tr' ? 'Çeviri (İngilizce - Türkçe)' : 'Çeviri (Türkçe - İngilizce)',
  question,
  options: { A: options[0], B: options[1], C: options[2], D: options[3], E: options[4] },
  answer: 'A',
  explanation: `${explanation} Doğru cevap A.`,
  tacticUsed:
    type === 'translation_en_tr'
      ? 'Ana yüklem, bağlaç ve kesinlik derecesini eşleştir'
      : 'Türkçe yüklemin zamanını ve çatısını İngilizce şıklarda ara',
  trapWarning,
  difficulty
});

const EN = 'translation_en_tr' as const;
const TR = 'translation_tr_en' as const;

const RAW_TRANSLATION_BANK: YdsQuestion[] = [
  // ---------------- English to Turkish ----------------
  make(
    'tr_en_01',
    EN,
    'Unless coastal cities invest heavily in flood defences, rising sea levels are likely to displace millions of residents by the end of the century.',
    [
      'Kıyı kentleri sel savunmasına büyük yatırım yapmadıkça, yükselen deniz seviyeleri yüzyılın sonuna kadar muhtemelen milyonlarca sakini yerinden edecektir.',
      'Kıyı kentleri sel savunmasına büyük yatırım yapsa bile, yükselen deniz seviyeleri yüzyılın sonuna kadar milyonlarca kıyı sakinini kesinlikle yerinden edecektir.',
      'Yükselen deniz seviyeleri yüzyılın sonuna kadar milyonlarca sakini yerinden ettiği için kıyı kentleri sel savunmasına büyük yatırım yapmaktadır.',
      'Kıyı kentleri sel savunmasına büyük yatırım yaptıkça, yükselen deniz seviyelerinin yüzyıl sonunda daha az sakini yerinden etmesi beklenmektedir.',
      'Yüzyılın sonuna kadar milyonlarca sakin yerinden edilmezse kıyı kentlerinin sel savunmasına büyük yatırım yapmasına gerek kalmayacaktır.'
    ],
    '"Unless" = "-medikçe / -mezse" (koşul, olumsuz). "Are likely to" = "muhtemelen". Sebep-sonuç (yaptığı için), "-se bile" ve kesinlik ("kesinlikle") bildiren şıklar anlamı değiştirir.',
    '"Unless" çoğu zaman "-se bile" ile karıştırılır; "likely" ise kesinlik bildirmez.'
  ),
  make(
    'tr_en_02',
    EN,
    'The new vaccine has proved far more effective in older patients than researchers had initially anticipated.',
    [
      'Yeni aşı, yaşlı hastalarda araştırmacıların başta öngördüğünden çok daha etkili olduğunu kanıtlamıştır.',
      'Araştırmacılar yeni aşının yaşlı hastalarda başta öngörüldüğü kadar etkili olmadığını kanıtlamıştır.',
      'Yeni aşı, araştırmacıların başta öngördüğü gibi yaşlı hastalarda gençlere göre biraz daha etkili olmuştur.',
      'Yeni aşının yaşlı hastalarda çok daha etkili olacağı araştırmacılar tarafından en başından beri öngörülmekteydi.',
      'Yeni aşının yaşlı hastalardaki etkinliği, araştırmacıların başta öngördüğünden daha düşük çıkmıştır.'
    ],
    '"Far more effective than ... had anticipated" = "öngördüğünden çok daha etkili". Beklentinin aşıldığını anlatır; "öngörüldüğü gibi", "daha düşük" ve "biraz daha" karşılaştırmayı bozar.',
    '"Far more" (çok daha) ile "slightly more" (biraz daha) arasındaki derece farkına dikkat.'
  ),
  make(
    'tr_en_03',
    EN,
    'It is widely believed that the collapse of the Roman Empire was caused not by a single event but by a combination of economic, military and political factors.',
    [
      'Roma İmparatorluğu\'nun çöküşüne tek bir olayın değil, ekonomik, askerî ve siyasi etkenlerin bir araya gelmesinin yol açtığına yaygın olarak inanılmaktadır.',
      'Roma İmparatorluğu\'nun çöküşüne ekonomik, askerî ve siyasi etkenlerin bir araya gelmesinden çok tek bir büyük olayın yol açtığına yaygın olarak inanılmaktadır.',
      'Roma İmparatorluğu\'nun çöküşünün ekonomik, askerî ve siyasi etkenlere yol açtığı tarihçiler arasında yaygın bir görüştür.',
      'Roma İmparatorluğu\'nun çöküşüne yalnızca ekonomik etkenlerin yol açtığı, askerî ve siyasi etkenlerin ise önemsiz olduğu düşünülmektedir.',
      'Roma İmparatorluğu\'nun neden çöktüğü konusunda tek bir olay ya da etkenler bileşimi üzerinde henüz uzlaşılamamıştır.'
    ],
    '"Not by X but by Y" = "X\'in değil, Y\'nin". "Was caused by" edilgen: çöküş sonuçtur, etkenler sebeptir. Sebep-sonucu ters çeviren ve "yalnızca ekonomik" diyen şıklar elenir.',
    '"Not ... but ..." yapısında vurgu ikinci öğededir; sebep ile sonucun yerini değiştiren şıklar sık kullanılan tuzaktır.'
  ),
  make(
    'tr_en_04',
    EN,
    'Had the government acted on the early warnings, the economic crisis could have been prevented.',
    [
      'Hükümet erken uyarılara göre hareket etmiş olsaydı, ekonomik kriz önlenebilirdi.',
      'Hükümet erken uyarılara göre hareket ettiği için ekonomik kriz önlenebilmiştir.',
      'Hükümet erken uyarılara göre hareket etse bile ekonomik kriz önlenemeyecekti.',
      'Hükümet erken uyarılara göre hareket ederse ekonomik kriz önlenebilecektir.',
      'Ekonomik kriz önlenebilseydi hükümet erken uyarılara göre hareket etmek zorunda kalmazdı.'
    ],
    '"Had the government acted" devrik üçüncü tip koşuldur = "hareket etmiş olsaydı". Ana cümle "could have been prevented" = "önlenebilirdi" (geçmişte gerçekleşmemiş olasılık).',
    'Devrik "Had + özne + V3" yapısı "if" olmadan da koşul bildirir; geçmişe dönük gerçek dışı durumdur.'
  ),
  make(
    'tr_en_05',
    EN,
    'Although artificial intelligence can process vast amounts of data, it still lacks the contextual judgement that human experts bring to complex decisions.',
    [
      'Yapay zekâ büyük miktarda veriyi işleyebilse de, insan uzmanların karmaşık kararlara kattığı bağlamsal muhakemeden hâlâ yoksundur.',
      'Yapay zekâ büyük miktarda veriyi işleyebildiği için, insan uzmanların karmaşık kararlara kattığı bağlamsal muhakemeye artık ihtiyaç duymamaktadır.',
      'Yapay zekâ, insan uzmanlar kadar bağlamsal muhakemeye sahip olduğundan büyük miktarda veriyi karmaşık kararlara dönüştürebilmektedir.',
      'İnsan uzmanlar büyük miktarda veriyi işleyemese de, karmaşık kararlarda yapay zekâdan daha iyi bağlamsal muhakeme yapmaktadır.',
      'Yapay zekâ büyük miktarda veriyi işleyebilir ve insan uzmanların karmaşık kararlara kattığı bağlamsal muhakemeyi de kısmen sağlar.'
    ],
    '"Although" = "-se de" (zıtlık). Ana yüklem "still lacks" = "hâlâ yoksundur". Sebep bildiren ("işleyebildiği için") ya da yapay zekânın muhakemeye sahip olduğunu söyleyen şıklar anlamı tersine çevirir.',
    'Ana yüklem olumsuz anlamlıdır ("lacks"); "sahip olduğundan" gibi olumlu yüklemler anında elenir.'
  ),
  make(
    'tr_en_06',
    EN,
    'Only after the fossils had been carefully dated did scientists realise that the species had survived much longer than previously thought.',
    [
      'Bilim insanları, ancak fosiller dikkatle tarihlendirildikten sonra türün daha önce düşünüldüğünden çok daha uzun süre hayatta kaldığını fark ettiler.',
      'Bilim insanları fosilleri dikkatle tarihlendirmeden önce türün daha önce düşünüldüğünden çok daha uzun yaşadığını biliyorlardı.',
      'Fosiller dikkatle tarihlendirildikten sonra bilim insanları türün sanıldığından çok daha kısa bir sürede yok olduğunu anladılar.',
      'Bilim insanları fosilleri dikkatle tarihlendirdikleri için türün ne kadar uzun yaşadığını hiçbir zaman tam olarak bilemediler.',
      'Türün daha önce düşünüldüğünden çok daha uzun süre yaşadığını fark eden bilim insanları, ancak bundan sonra fosilleri yeniden ve dikkatle tarihlendirmeye karar verdiler.'
    ],
    '"Only after ... did scientists realise" = "ancak ...-dikten sonra fark ettiler". Sıralama: önce tarihlendirme, sonra fark etme. "Much longer than previously thought" = "düşünüldüğünden çok daha uzun".',
    '"Only after" devriği zaman sırasını vurgular; sırayı ters çeviren şık en güçlü çeldiricidir.',
    'Zor'
  ),
  make(
    'tr_en_07',
    EN,
    'The more urban areas expand, the greater the pressure on local water supplies becomes.',
    [
      'Kentsel alanlar genişledikçe, yerel su kaynakları üzerindeki baskı da o kadar artar.',
      'Kentsel alanlar genişlese de yerel su kaynakları üzerindeki baskı aynı düzeyde kalır.',
      'Yerel su kaynakları üzerindeki baskı arttıkça kentsel alanların genişlemesi yavaşlar.',
      'Kentsel alanların genişlemesi yerel su kaynakları üzerindeki baskıyı giderek azaltmaktadır.',
      'Kentsel alanlar genişlemeden önce yerel su kaynakları üzerinde çok daha büyük bir baskı vardı.'
    ],
    '"The more ..., the greater ..." = "... dikçe, o kadar ...". İki nicelik aynı yönde artar; sebep kentsel genişleme, sonuç baskıdır.',
    'Orantı cümlelerinde sebep ile sonucu yer değiştiren şıklara dikkat.'
  ),
  make(
    'tr_en_08',
    EN,
    'Researchers are yet to determine whether the decline in bee populations is mainly due to pesticides or to habitat loss.',
    [
      'Araştırmacılar arı popülasyonlarındaki azalmanın esas olarak tarım ilaçlarından mı yoksa yaşam alanı kaybından mı kaynaklandığını henüz belirleyememiştir.',
      'Araştırmacılar arı popülasyonlarındaki azalmanın esas olarak tarım ilaçlarından kaynaklandığını, yaşam alanı kaybının ise neredeyse hiç etkisi olmadığını belirlemiştir.',
      'Araştırmacılar arı popülasyonlarındaki azalmanın hem tarım ilaçlarından hem de yaşam alanı kaybından kaynaklandığını kesin olarak ortaya koymuştur.',
      'Arı popülasyonlarındaki azalma tarım ilaçları ve yaşam alanı kaybı nedeniyle o kadar hızlıdır ki araştırmacılar bunu ölçmekte zorlanmaktadır.',
      'Araştırmacılar tarım ilaçlarının mı yoksa yaşam alanı kaybının mı arıları daha çok etkilediğini belirlemek için yeni bir çalışma başlatacaktır.'
    ],
    '"Are yet to determine" = "henüz belirleyememiştir" (iş tamamlanmamıştır). "Whether ... or ..." = "...-den mi yoksa ...-den mi".',
    '"Be yet to" olumlu görünse de "henüz yapılmamış" anlamı taşır; "belirlemiştir" diyen şıklar yanlıştır.',
    'Zor'
  ),
  make(
    'tr_en_09',
    EN,
    'Despite having one of the largest economies in the region, the country continues to struggle with high levels of youth unemployment.',
    [
      'Bölgedeki en büyük ekonomilerden birine sahip olmasına rağmen ülke, yüksek genç işsizliğiyle mücadele etmeye devam etmektedir.',
      'Bölgedeki en büyük ekonomiye sahip olduğu için ülke, genç işsizliğini kısa sürede düşük düzeylere indirmeyi başarmıştır.',
      'Ülke, yüksek genç işsizliğine rağmen bölgedeki en büyük ekonomilerden biri olmayı sürdürmektedir.',
      'Bölgedeki en büyük ekonomilerden birine sahip olan ülkede genç işsizliği artık önemli bir sorun olarak görülmemektedir.',
      'Ülkenin yüksek genç işsizliğiyle mücadelesi, bölgedeki en büyük ekonomilerden birine sahip olmasını engellemiştir.'
    ],
    '"Despite having" = "-masına rağmen". Ana yüklem "continues to struggle" = "mücadele etmeye devam etmektedir". Zıtlığın yönü korunmalı: büyük ekonomi var, ama işsizlik sorunu sürüyor.',
    'Zıtlık bağlacının hangi öğeye bağlandığına bak; "işsizliğe rağmen büyük ekonomi" tersine çevrilmiş anlamdır.'
  ),
  make(
    'tr_en_10',
    EN,
    'Few historians would deny that the printing press played a crucial role in the spread of the Reformation.',
    [
      'Matbaanın Reform hareketinin yayılmasında çok önemli bir rol oynadığını pek az tarihçi inkâr eder.',
      'Tarihçilerin çoğu matbaanın Reform hareketinin yayılmasında önemli bir rol oynamadığını ileri sürer.',
      'Bazı tarihçiler matbaanın Reform hareketinin yayılmasındaki rolünün abartıldığını kabul etmektedir.',
      'Reform hareketinin yayılması, matbaanın tarihçiler tarafından inkâr edilemeyecek kadar hızlı gelişmesini sağlamıştır.',
      'Pek az tarihçi matbaanın Reform hareketinin yayılmasında bir rol oynadığını kabul etmektedir.'
    ],
    '"Few historians would deny" = "pek az tarihçi inkâr eder", yani neredeyse hepsi kabul eder. "Few would accept" diyen şık anlamı tamamen tersine çevirir.',
    '"Few" olumsuzluk taşır; "few ... deny" ile "few ... accept" zıt anlamlıdır.'
  ),
  make(
    'tr_en_11',
    EN,
    'Patients who were given the drug recovered significantly faster than those who received a placebo, although the side effects were more frequent.',
    [
      'Yan etkiler daha sık görülse de ilacı alan hastalar plasebo alanlardan belirgin biçimde daha hızlı iyileşti.',
      'İlacı alan hastalar plasebo alanlardan daha hızlı iyileşti ve daha az yan etki yaşadı.',
      'Plasebo alan hastalar daha az yan etki yaşadığı için ilacı alanlardan belirgin biçimde daha hızlı iyileşti.',
      'İlacı alan hastalarda yan etkiler daha sık görüldüğünden iyileşme plasebo grubuna göre yavaş oldu.',
      'İlacı alan hastalarla plasebo alanlar benzer hızda iyileşti, ancak yan etkiler ilaç grubunda daha sık görüldü.'
    ],
    'Ana yargı: ilaç grubu "significantly faster" iyileşti. "Although ... more frequent" = "yan etkiler daha sık görülse de". Hız karşılaştırmasını ya da yan etki yönünü değiştiren şıklar elenir.',
    'İki ayrı karşılaştırma var (hız ve yan etki); şıklar genellikle birini tersine çevirir.'
  ),
  make(
    'tr_en_12',
    EN,
    'The committee recommended that the project be postponed until a full environmental assessment had been completed.',
    [
      'Komite, kapsamlı bir çevresel değerlendirme tamamlanana kadar projenin ertelenmesini önerdi.',
      'Komite, kapsamlı bir çevresel değerlendirme tamamlandığı için projenin hemen başlatılmasını önerdi.',
      'Komite, projenin ertelenmesi hâlinde kapsamlı bir çevresel değerlendirmenin gereksiz olacağını belirtti.',
      'Kapsamlı çevresel değerlendirme tamamlanmadan önce komite projenin ertelenmesine karşı çıktı.',
      'Komite projeyi erteledi ve ardından kapsamlı bir çevresel değerlendirme yapılmasını istedi.'
    ],
    '"Recommended that the project be postponed" = "projenin ertelenmesini önerdi" (öneri, uygulama değil). "Until ... had been completed" = "tamamlanana kadar".',
    '"Recommend" bir eylemin yapıldığını değil, önerildiğini anlatır; "projeyi erteledi" diyen şık yanlıştır.'
  ),
  make(
    'tr_en_13',
    EN,
    'Contrary to popular belief, moderate exercise does not increase appetite to the extent that it cancels out the calories burned.',
    [
      'Yaygın inancın aksine, orta düzeyde egzersiz iştahı yakılan kalorileri boşa çıkaracak ölçüde artırmaz.',
      'Yaygın inanca uygun olarak, orta düzeyde egzersiz iştahı artırdığı için yakılan kaloriler boşa gider.',
      'Yaygın inancın aksine, orta düzeyde egzersiz iştahı hiç etkilemez ve kalori yakımını da artırmaz.',
      'Orta düzeyde egzersiz iştahı o kadar artırır ki yakılan kaloriler yaygın inanıldığı gibi telafi edilir.',
      'Yaygın inancın aksine, orta düzeyde egzersizle yakılan kaloriler iştahın azalmasına yol açar.'
    ],
    '"Contrary to popular belief" = "yaygın inancın aksine". "Does not increase appetite to the extent that ..." = "... ölçüde artırmaz": iştah biraz artabilir ama kalorileri sıfırlayacak kadar değil.',
    '"To the extent that" bir derece sınırı koyar; "hiç etkilemez" diyen şık aşırı genellemedir.',
    'Zor'
  ),
  make(
    'tr_en_14',
    EN,
    'By the time the rescue team arrived, the floodwaters had already receded, leaving behind extensive damage.',
    [
      'Kurtarma ekibi geldiğinde sel suları çoktan çekilmiş ve geride büyük bir hasar bırakmıştı.',
      'Kurtarma ekibi bölgeye gelene kadar sel suları yükselmeye devam etti ve geride büyük bir hasar bıraktı.',
      'Sel suları çekildikten sonra kurtarma ekibi gelip büyük hasarı onarmaya başlayacaktı.',
      'Kurtarma ekibi geldiği için sel suları çekildi ve hasar beklenenden az oldu.',
      'Kurtarma ekibi sel suları çekilmeden önce gelmiş ve büyük bir hasarı önlemişti.'
    ],
    '"By the time ... arrived, ... had already receded" = "geldiğinde ... çoktan çekilmişti". Geçmişte önce çekilme, sonra varış gerçekleşmiştir.',
    'Past perfect, iki geçmiş olaydan önce olanı gösterir; sırayı değiştiren şıklar elenir.'
  ),
  make(
    'tr_en_15',
    EN,
    'While some economists argue that raising the minimum wage reduces poverty, others warn that it may lead to job losses among low-skilled workers.',
    [
      'Bazı ekonomistler asgari ücreti artırmanın yoksulluğu azalttığını savunurken, diğerleri bunun düşük vasıflı işçiler arasında iş kayıplarına yol açabileceği konusunda uyarmaktadır.',
      'Ekonomistlerin tamamı asgari ücreti artırmanın hem yoksulluğu azalttığını hem de düşük vasıflı işçilerin istihdamını artırdığını kabul etmektedir.',
      'Bazı ekonomistler asgari ücreti artırmanın düşük vasıflı işçiler arasında iş kayıplarına yol açtığı için yoksulluğu artırdığını savunmaktadır.',
      'Asgari ücretin artırılması yoksulluğu azaltmış, ancak düşük vasıflı işçiler arasında kesin olarak iş kayıplarına yol açmıştır.',
      'Bazı ekonomistler asgari ücretin artırılmasına karşı çıkarken diğerleri bunun iş kayıplarını önleyeceğini düşünmektedir.'
    ],
    '"While some argue ..., others warn ..." iki görüşü karşılaştırır = "bazıları ... savunurken, diğerleri ... uyarmaktadır". "May lead to" = "yol açabilir" (olasılık).',
    'Modal "may" kesinlik bildirmez; "kesin olarak yol açmıştır" diyen şık elenir.'
  ),
  make(
    'tr_en_16',
    EN,
    'Not until the late nineteenth century was it understood that many diseases are transmitted by microorganisms.',
    [
      'Pek çok hastalığın mikroorganizmalar yoluyla bulaştığı ancak on dokuzuncu yüzyılın sonlarında anlaşıldı.',
      'Pek çok hastalığın mikroorganizmalar yoluyla bulaştığı on dokuzuncu yüzyılın sonlarından çok önce biliniyordu.',
      'On dokuzuncu yüzyılın sonlarına kadar pek çok hastalık mikroorganizmalar yoluyla bulaşmıyordu.',
      'On dokuzuncu yüzyılın sonlarında mikroorganizmaların hastalıkları bulaştırmadığı anlaşıldı.',
      'Mikroorganizmaların pek çok hastalığa yol açtığı yirminci yüzyılın başlarında bile tam olarak anlaşılamamıştı.'
    ],
    '"Not until X was it understood" = "ancak X\'te anlaşıldı". Bu yapı anlamanın X\'ten önce olmadığını, X\'te gerçekleştiğini söyler.',
    'Bilginin değil, hastalıkların değiştiğini ima eden şık ("bulaşmıyordu") anlam kaymasıdır.',
    'Zor'
  ),
  make(
    'tr_en_17',
    EN,
    'The study suggests that children who read for pleasure tend to perform better in mathematics as well as in language tests.',
    [
      'Çalışma, keyif için okuyan çocukların dil sınavlarının yanı sıra matematikte de daha başarılı olma eğiliminde olduğunu ortaya koymaktadır.',
      'Çalışma, keyif için okuyan çocukların dil sınavlarında daha başarılı olduğunu ancak matematikte yaşıtlarının gerisinde kaldığını ortaya koymaktadır.',
      'Çalışma, matematikte başarılı olan çocukların keyif için daha çok okuduğunu kesin olarak kanıtlamaktadır.',
      'Çalışmaya göre keyif için okumak çocukların yalnızca dil sınavlarındaki başarısını etkilemektedir.',
      'Çalışma, çocukların matematik ve dil sınavlarında başarılı olmak için keyif almadan okumaları gerektiğini öne sürmektedir.'
    ],
    '"Suggests" = "ortaya koymaktadır / işaret etmektedir" (kanıt değil). "Tend to" = "eğiliminde". "As well as" = "-nin yanı sıra": iki alanda da başarı.',
    '"As well as" ekleme bildirir; "yalnızca" ya da "ancak geride kaldı" diyen şıklar elenir.'
  ),
  make(
    'tr_en_18',
    EN,
    'Were it not for international aid, the region would have faced a severe famine last winter.',
    [
      'Uluslararası yardım olmasaydı, bölge geçen kış ciddi bir kıtlıkla karşı karşıya kalacaktı.',
      'Uluslararası yardıma rağmen bölge geçen kış ciddi bir kıtlıkla karşı karşıya kaldı.',
      'Uluslararası yardım gelmezse bölge bu kış ciddi bir kıtlıkla karşı karşıya kalacak.',
      'Bölge geçen kış ciddi bir kıtlık yaşadığı için uluslararası yardım talep etti.',
      'Uluslararası yardım, bölgenin geçen kış yaşadığı ciddi kıtlığı önlemeye ne yazık ki yetmedi.'
    ],
    '"Were it not for X" = "X olmasaydı" (devrik koşul). "Would have faced" = "karşı karşıya kalacaktı" ama kalmadı. Kıtlık yaşandığını söyleyen şıklar anlamı bozar.',
    'Gerçek dışı geçmiş koşulda olay yaşanmamıştır; "kıtlık yaşadı" diyen şıklar tuzaktır.',
    'Zor'
  ),
  make(
    'tr_en_19',
    EN,
    'Although the treaty was signed in 1997, it did not come into force until enough countries had ratified it.',
    [
      'Antlaşma 1997\'de imzalanmasına rağmen yeterli sayıda ülke onaylayana kadar yürürlüğe girmedi.',
      'Antlaşma 1997\'de imzalandı ve aynı yıl yeterli sayıda ülke tarafından onaylanarak yürürlüğe girdi.',
      'Yeterli sayıda ülke onaylamadığı için antlaşma 1997\'de imzalanamadı.',
      'Antlaşma 1997\'de yürürlüğe girdikten sonra yeterli sayıda ülke tarafından imzalandı.',
      'Antlaşmayı 1997\'de imzalayan ülkelerin sayısı yürürlüğe girmesi için yeterliydi.'
    ],
    '"Did not come into force until ..." = "... kadar yürürlüğe girmedi". Sıra: imza (1997), onaylar, sonra yürürlük.',
    '"Not ... until" yapısı olayın geciktiğini anlatır; "aynı yıl yürürlüğe girdi" diyen şık elenir.'
  ),
  make(
    'tr_en_20',
    EN,
    'The museum\'s collection, much of which was donated by private collectors, attracts over two million visitors a year.',
    [
      'Büyük kısmı özel koleksiyonerler tarafından bağışlanan müze koleksiyonu, yılda iki milyondan fazla ziyaretçi çekmektedir.',
      'Özel koleksiyonerler, yılda iki milyondan fazla ziyaretçi çeken müzeye koleksiyonlarının tamamını bağışlamıştır.',
      'Müze koleksiyonunun yalnızca küçük bir kısmı özel koleksiyonerlerden gelmesine rağmen yılda iki milyon ziyaretçi çekmektedir.',
      'Yılda iki milyon ziyaretçi çeken müze, koleksiyonunu genişletmek için özel koleksiyonerlerden bağış beklemektedir.',
      'Müze koleksiyonu, özel koleksiyonerlerin bağışları sayesinde yılda iki milyon ziyaretçiye ulaşmayı hedeflemektedir.'
    ],
    '"Much of which was donated" = "büyük kısmı bağışlanan" (koleksiyonu niteleyen yan cümle). Ana yüklem "attracts" = "çekmektedir" (genel gerçek).',
    '"Much of which" "tamamı" ya da "küçük bir kısmı" değildir; niceleyiciyi değiştiren şıklar elenir.'
  ),
  make(
    'tr_en_21',
    EN,
    'Scientists have warned that, should global temperatures rise by more than two degrees, many coral reefs may disappear entirely.',
    [
      'Bilim insanları, küresel sıcaklıkların iki dereceden fazla artması hâlinde pek çok mercan resifinin tamamen yok olabileceği uyarısında bulunmuştur.',
      'Bilim insanları, küresel sıcaklıklar iki dereceden fazla arttığı için pek çok mercan resifinin tamamen yok olduğunu açıklamıştır.',
      'Bilim insanları, küresel sıcaklıklar iki dereceden fazla artsa bile mercan resiflerinin büyük çoğunluğunun hayatta kalabileceğini öngörmektedir.',
      'Bilim insanlarına göre mercan resiflerinin yok olması küresel sıcaklıkların iki dereceden fazla artmasına neden olabilir.',
      'Bilim insanları, küresel sıcaklıkların artmasını önlemek için mercan resiflerinin korunması gerektiği uyarısında bulunmuştur.'
    ],
    '"Should global temperatures rise" devrik koşuldur = "artması hâlinde / artarsa". "May disappear" = "yok olabilir" (olasılık). Gerçekleşmiş bir sonuç ("yok olduğunu") ya da ters sebep-sonuç yanlıştır.',
    '"Should + özne + V1" yapısı "if" anlamı taşır; geçmiş zaman değildir.',
    'Zor'
  ),
  make(
    'tr_en_22',
    EN,
    'It was not the cost of the project but its potential impact on wildlife that led to public opposition.',
    [
      'Halkın karşı çıkmasına projenin maliyeti değil, yaban hayatı üzerindeki olası etkisi yol açtı.',
      'Halkın karşı çıkmasına hem projenin maliyeti hem de yaban hayatı üzerindeki etkisi yol açtı.',
      'Halk projeye yaban hayatına olası etkisinden çok, yüksek maliyeti nedeniyle karşı çıktı.',
      'Projenin yaban hayatı üzerindeki etkisi düşük olduğu için halk yalnızca maliyete karşı çıktı.',
      'Halkın karşı çıkması, projenin maliyetini artırdı ve yaban hayatı üzerindeki etkisini azalttı.'
    ],
    '"It was not X but Y that ..." vurgu yapısıdır = "...-a X değil, Y yol açtı". Muhalefetin sebebi yaban hayatına olası etkidir.',
    '"Not X but Y" yapısında X sebep değildir; "hem ... hem de" diyen şık elenir.'
  ),
  make(
    'tr_en_23',
    EN,
    'Even though the experiment was repeated several times, the results could not be replicated by independent laboratories.',
    [
      'Deney birkaç kez tekrarlanmış olsa da sonuçlar bağımsız laboratuvarlar tarafından yeniden elde edilemedi.',
      'Deney birkaç kez tekrarlandığı için sonuçlar bağımsız laboratuvarlar tarafından kolayca yeniden elde edildi.',
      'Bağımsız laboratuvarlar sonuçları yeniden elde edemediği için deneyin birkaç kez tekrarlanmasına karar verildi.',
      'Deney yalnızca bir kez yapıldığından sonuçlar bağımsız laboratuvarlarca doğrulanamadı.',
      'Deney birkaç kez tekrarlandı ve bağımsız laboratuvarlar sonuçların büyük kısmını doğruladı.'
    ],
    '"Even though" = "-se de" (zıtlık). "Could not be replicated" = "yeniden elde edilemedi" (edilgen, olumsuz yeterlilik).',
    'Olumsuz yüklemi ("edilemedi") olumluya çeviren şıklar ilk bakışta elenir.'
  ),
  make(
    'tr_en_24',
    EN,
    'The rapid growth of online shopping has forced many traditional retailers to rethink their business models.',
    [
      'Çevrim içi alışverişin hızlı büyümesi pek çok geleneksel perakendeciyi iş modellerini yeniden düşünmeye zorlamıştır.',
      'Pek çok geleneksel perakendeci iş modelini değiştirdiği için çevrim içi alışveriş hızla büyümüştür.',
      'Çevrim içi alışverişin hızlı büyümesine rağmen geleneksel perakendeciler iş modellerini değiştirmeye gerek görmemiştir.',
      'Geleneksel perakendeciler, çevrim içi alışverişin büyümesini yavaşlatmak için iş modellerini yeniden düşünmektedir.',
      'Çevrim içi alışverişin hızlı büyümesi yalnızca küçük perakendecilerin iş modellerini etkilemiştir.'
    ],
    'Özne "the rapid growth of online shopping", yüklem "has forced ... to rethink" = "yeniden düşünmeye zorlamıştır". Sebep büyüme, sonuç perakendecilerin yeniden düşünmesidir.',
    'Sebep ile sonucun yer değiştirdiği şık en sık görülen çeviri tuzağıdır.'
  ),
  make(
    'tr_en_25',
    EN,
    'So complex is the human brain that even the most advanced computers cannot fully simulate its activity.',
    [
      'İnsan beyni o kadar karmaşıktır ki en gelişmiş bilgisayarlar bile onun faaliyetini tam olarak taklit edemez.',
      'İnsan beyni karmaşık olsa da en gelişmiş bilgisayarlar onun faaliyetini tam olarak taklit edebilmektedir.',
      'En gelişmiş bilgisayarlar, insan beyninden çok daha karmaşık işlemleri kolayca gerçekleştirebilir.',
      'İnsan beyninin faaliyetini taklit etmek için en gelişmiş bilgisayarların daha karmaşık hâle getirilmesi gerekir.',
      'İnsan beyni, en gelişmiş bilgisayarların faaliyetini tam olarak taklit edebilecek kadar karmaşıktır.'
    ],
    '"So complex is X that ..." devrik "so ... that" yapısıdır = "X o kadar karmaşıktır ki ...". Sonuç olumsuzdur: "cannot fully simulate" = "tam olarak taklit edemez".',
    'Özne ile nesnenin yer değiştirdiği son şık (beyin bilgisayarı taklit ediyor) dikkatsiz okuyucuyu yakalar.'
  ),
  make(
    'tr_en_26',
    EN,
    'Many species that were once common in Europe are now found only in a few protected areas.',
    [
      'Bir zamanlar Avrupa\'da yaygın olan pek çok tür, artık yalnızca birkaç koruma alanında bulunmaktadır.',
      'Avrupa\'daki birkaç koruma alanında bulunan türler artık kıtanın her yerinde yaygın hâle gelmiştir.',
      'Bir zamanlar Avrupa\'da nadir olan pek çok tür, birkaç koruma alanı sayesinde yeniden yaygınlaşmıştır.',
      'Pek çok türün Avrupa\'da yaygın olabilmesi için birkaç koruma alanının yeterli olduğu anlaşılmıştır.',
      'Avrupa\'da yaygın olan türlerin yalnızca birkaçı koruma alanlarında yaşamaktadır.'
    ],
    '"Once common" = "bir zamanlar yaygın", "now found only in a few protected areas" = "artık yalnızca birkaç koruma alanında". Zaman karşıtlığı (o zaman yaygın, şimdi sınırlı) korunmalıdır.',
    '"Only in a few" türlerin sınırlı olduğunu söyler; "türlerin yalnızca birkaçı" niceleyiciyi yanlış öğeye bağlar.'
  ),
  make(
    'tr_en_27',
    EN,
    'Governments must strike a balance between protecting public health and preserving individual freedoms.',
    [
      'Hükümetler halk sağlığını korumakla bireysel özgürlükleri muhafaza etmek arasında bir denge kurmak zorundadır.',
      'Hükümetler halk sağlığını korumak için bireysel özgürlükleri tamamen kısıtlamak zorundadır.',
      'Hükümetler bireysel özgürlükleri halk sağlığından daha önemli görmelidir.',
      'Halk sağlığını korumak ile bireysel özgürlükleri muhafaza etmek arasında hükümetlerin bir seçim yapması gerekmez.',
      'Hükümetler halk sağlığını koruyabildiği sürece bireysel özgürlükler kendiliğinden korunur.'
    ],
    '"Must strike a balance between X and Y" = "X ile Y arasında bir denge kurmak zorundadır". Bir tarafın öbürüne üstün tutulduğu şıklar anlamı değiştirir.',
    '"Must" zorunluluk bildirir; "gerekmez" diyen şık modalı tersine çevirir.'
  ),
  make(
    'tr_en_28',
    EN,
    'The findings, if confirmed by further research, could transform the way we treat chronic pain.',
    [
      'Bulgular, ileri araştırmalarla doğrulanırsa kronik ağrıyı tedavi etme biçimimizi değiştirebilir.',
      'İleri araştırmalarla doğrulanan bulgular, kronik ağrıyı tedavi etme biçimimizi çoktan değiştirmiştir.',
      'Bulgular ileri araştırmalarla doğrulanamadığı için kronik ağrı tedavisinde bir değişiklik beklenmemektedir.',
      'Kronik ağrıyı tedavi etme biçimimiz değişirse bulguların ileri araştırmalarla doğrulanması kolaylaşacaktır.',
      'Bulgular, kronik ağrının tedavisinin ileri araştırmalar olmadan da değiştirilebileceğini göstermektedir.'
    ],
    '"If confirmed by further research" = "ileri araştırmalarla doğrulanırsa" (henüz doğrulanmadı). "Could transform" = "değiştirebilir" (olasılık).',
    'Doğrulanmış ve gerçekleşmiş gibi sunan şık ("çoktan değiştirmiştir") en sık seçilen yanlıştır.'
  ),
  make(
    'tr_en_29',
    EN,
    'Hardly had the company launched its new product when competitors began offering cheaper alternatives.',
    [
      'Şirket yeni ürününü piyasaya sürer sürmez rakipler daha ucuz alternatifler sunmaya başladı.',
      'Rakipler daha ucuz alternatifler sunmaya başlayınca şirket yeni ürününü piyasaya sürmekten vazgeçti.',
      'Şirket yeni ürününü piyasaya sürdükten yıllar sonra rakipler daha ucuz alternatifler geliştirdi.',
      'Şirketin yeni ürünü rakiplerin sunduğu alternatiflerden daha ucuz olduğu için hızla satıldı.',
      'Rakipler daha ucuz alternatifler sunmadan önce şirket yeni ürününü piyasaya sürmeyi başaramadı.'
    ],
    '"Hardly had ... when ..." = "... -ir -mez" (bir olay biter bitmez öteki başladı). Sıra: önce ürün, hemen ardından rakipler.',
    '"Hardly" burada "zorlukla" anlamında değildir; "neredeyse hemen" anlamı verir.',
    'Zor'
  ),
  make(
    'tr_en_30',
    EN,
    'In contrast to earlier studies, the latest survey found no significant link between screen time and sleep quality in teenagers.',
    [
      'Önceki çalışmaların aksine, son anket gençlerde ekran süresi ile uyku kalitesi arasında anlamlı bir bağlantı bulmadı.',
      'Önceki çalışmalarla uyumlu olarak, son anket gençlerde ekran süresinin uyku kalitesini belirgin biçimde düşürdüğünü buldu.',
      'Son anket, önceki çalışmaların aksine, ekran süresi arttıkça gençlerin uyku kalitesinin yükseldiğini ortaya koydu.',
      'Önceki çalışmalar gibi son anket de ekran süresi ile uyku kalitesi arasında bağlantı olup olmadığını araştırmadı.',
      'Son anket, gençlerde ekran süresinin uyku kalitesinden çok akademik başarıyı etkilediğini gösterdi.'
    ],
    '"In contrast to earlier studies" = "önceki çalışmaların aksine". "Found no significant link" = "anlamlı bir bağlantı bulmadı". Bağlantı bulunduğunu ya da araştırılmadığını söyleyen şıklar yanlıştır.',
    '"No significant link" bağlantının olmadığını değil, anlamlı bir bağlantı bulunmadığını söyler; yön belirten şıklar elenir.'
  ),

  // ---------------- Turkish to English ----------------
  make(
    'tr_tr_01',
    TR,
    'Kuraklığın tarımsal üretim üzerindeki etkisi, sulama sistemlerine yeterli yatırım yapılmayan bölgelerde çok daha belirgindir.',
    [
      'The impact of drought on agricultural production is far more pronounced in regions where sufficient investment has not been made in irrigation systems.',
      'Drought has a far more pronounced impact on agricultural production in those regions that have already invested sufficiently in modern irrigation systems.',
      'Regions that do not invest in irrigation systems are far more likely to experience drought than those that do.',
      'Insufficient investment in irrigation systems is the main cause of drought in agricultural regions.',
      'The impact of drought on agricultural production has become less pronounced since regions invested in irrigation.'
    ],
    'Özne "kuraklığın tarımsal üretim üzerindeki etkisi" = "the impact of drought on agricultural production". "Yatırım yapılmayan bölgelerde" olumsuz yan cümledir = "where sufficient investment has not been made".',
    'Olumsuz yan cümleyi olumluya çeviren ("that have invested sufficiently") şık en yakın çeldiricidir.'
  ),
  make(
    'tr_tr_02',
    TR,
    'Uzmanlar, yeni yasanın kısa vadede işsizliği artırabileceğini ancak uzun vadede ekonomik büyümeyi destekleyeceğini öne sürmektedir.',
    [
      'Experts argue that the new law may increase unemployment in the short term but will support economic growth in the long term.',
      'Experts argue that the new law will reduce unemployment in the short term and support economic growth in the long term.',
      'Experts argue that the new law has increased unemployment and therefore will not support economic growth.',
      'Experts claim that economic growth in the long term will lead to higher unemployment under the new law.',
      'According to experts, the new law will certainly increase unemployment in both the short and the long term.'
    ],
    '"Artırabileceğini" = "may increase" (olasılık), "destekleyeceğini" = "will support". "Ancak" iki dönem arasındaki zıtlığı kurar = "but".',
    'Olasılık ("-abilir") ile kesinlik ("certainly") farkı ve "kısa vade / uzun vade" karşıtlığı birlikte kontrol edilmeli.'
  ),
  make(
    'tr_tr_03',
    TR,
    'Antik kentin kalıntıları, ancak 1950\'lerde başlatılan kazılardan sonra gün yüzüne çıkarılabildi.',
    [
      'The ruins of the ancient city could only be brought to light after the excavations launched in the 1950s.',
      'The ruins of the ancient city were brought to light long before the excavations launched in the 1950s.',
      'The excavations launched in the 1950s failed to bring the ruins of the ancient city to light.',
      'The ruins of the ancient city were discovered in the 1950s, so no excavations were needed.',
      'The excavations of the 1950s could only begin after the ruins of the ancient city had been brought to light.'
    ],
    '"Ancak ... -den sonra" = "only after". "Çıkarılabildi" edilgen ve yeterlilik bildirir = "could be brought to light". Sıra: önce kazı, sonra kalıntıların ortaya çıkması.',
    'Sırayı ters çeviren son şık, aynı sözcükleri kullandığı için en güçlü tuzaktır.'
  ),
  make(
    'tr_tr_04',
    TR,
    'Eğer erken teşhis konulsaydı, hastanın tedaviye yanıt verme olasılığı çok daha yüksek olurdu.',
    [
      'If the diagnosis had been made early, the patient would have been much more likely to respond to treatment.',
      'Because the diagnosis was made early, the patient was much more likely to respond to treatment.',
      'If the diagnosis is made early enough, the patient will be much more likely to respond well to the treatment.',
      'Even if the diagnosis had been made early, the patient would not have responded to treatment.',
      'The patient responded to treatment so well that an early diagnosis was not necessary.'
    ],
    '"Konulsaydı ... olurdu" geçmişe dönük gerçek dışı koşuldur = "had been made ... would have been". Teşhis erken konmamıştır.',
    'Koşul tipini korumak gerekir: birinci tip ("is made ... will be") anlamı geleceğe taşır.'
  ),
  make(
    'tr_tr_05',
    TR,
    'Sosyal medyanın gençler üzerindeki etkisine ilişkin araştırmalar çelişkili sonuçlar ortaya koymaktadır.',
    [
      'Research into the effects of social media on young people has produced contradictory results.',
      'Research has consistently shown that social media has a harmful effect on young people.',
      'Young people produce contradictory results when they use social media for research.',
      'Research into social media has shown that young people are not affected by it at all.',
      'The contradictory results of social media research have discouraged young people from using it.'
    ],
    'Özne "araştırmalar" = "research", yüklem "çelişkili sonuçlar ortaya koymaktadır" = "has produced contradictory results". "Consistently harmful" ya da "not affected" tek yönlü sonuç bildirir.',
    '"Çelişkili" sonuçların tek yönde olmadığını anlatır; kesin bir yön bildiren şıklar elenir.'
  ),
  make(
    'tr_tr_06',
    TR,
    'Okyanus akıntıları ısıyı ekvatordan kutuplara taşıyarak küresel iklimin düzenlenmesinde kilit bir rol oynar.',
    [
      'Ocean currents play a key role in regulating the global climate by carrying heat from the equator to the poles.',
      'Ocean currents carry heat from the poles to the equator, which plays only a minor role in regulating the global climate.',
      'The global climate plays a key role in regulating ocean currents that carry heat to the poles.',
      'Ocean currents would play a key role in the global climate if they carried more heat to the poles.',
      'Heat from the equator prevents ocean currents from reaching the poles and regulating the climate.'
    ],
    '"Taşıyarak" = "by carrying" (yöntem). Yön: ekvatordan kutuplara. Yüklem "kilit bir rol oynar" = "play a key role" (genel gerçek).',
    'Yönü ters çeviren ("from the poles to the equator") ve özne-nesneyi değiştiren şıklara dikkat.'
  ),
  make(
    'tr_tr_07',
    TR,
    'Şirket, yüksek üretim maliyetlerine rağmen ürünlerinin fiyatını artırmamaya karar verdi.',
    [
      'Despite high production costs, the company decided not to raise the prices of its products.',
      'Due to its high production costs, the company decided to raise the prices of all of its products.',
      'The company decided to lower its production costs instead of raising its prices.',
      'Although the company raised its prices, its production costs remained high.',
      'The company did not decide whether to raise prices until production costs fell.'
    ],
    '"-e rağmen" = "despite". "Artırmamaya karar verdi" = "decided not to raise". Olumsuzluk "karar vermek" fiilinde değil, "artırmak" fiilindedir.',
    '"Rağmen" ile "due to" sık karıştırılır; olumsuzluğun yerine de dikkat edin.'
  ),
  make(
    'tr_tr_08',
    TR,
    'Bu türün nesli, yaşam alanlarının hızla yok edilmesi nedeniyle tükenme tehlikesiyle karşı karşıyadır.',
    [
      'This species is threatened with extinction because its habitats are being rapidly destroyed.',
      'This species has already become extinct even though its habitats are well protected.',
      'The rapid destruction of habitats is caused by the extinction of this species.',
      'This species would not be threatened with extinction if its habitats were being destroyed more slowly.',
      'This species is rapidly destroying its own habitat and faces the threat of extinction.'
    ],
    '"Nedeniyle" = "because / due to". Yüklem "tükenme tehlikesiyle karşı karşıyadır" = "is threatened with extinction" (henüz tükenmedi). "Yok edilmesi" edilgen ve süregiden bir süreçtir = "are being destroyed".',
    'Türün yaşam alanını kendisinin yok ettiğini söyleyen şık çatıyı (edilgen) bozar.'
  ),
  make(
    'tr_tr_09',
    TR,
    'Ne hükümet ne de muhalefet, reform paketinin ayrıntıları konusunda kamuoyunu yeterince bilgilendirmiştir.',
    [
      'Neither the government nor the opposition has adequately informed the public about the details of the reform package.',
      'Both the government and the opposition have adequately informed the public about the reform package.',
      'The government has informed the public about the reform package, but the opposition has not.',
      'The public has not informed the government or the opposition about the details of the reform package.',
      'Either the government or the opposition should inform the public about the reform package.'
    ],
    '"Ne ... ne de ..." = "neither ... nor ..." (ikisi de yapmamış). Türkçede yüklem olumlu görünse de anlam olumsuzdur.',
    'Türkçe "ne ... ne de" yapısında yüklem olumlu olur; bu yüzden "both ... have informed" yanıltıcıdır.',
    'Zor'
  ),
  make(
    'tr_tr_10',
    TR,
    'Teknolojideki ilerlemeler, birçok mesleğin önümüzdeki on yıl içinde ortadan kalkmasına yol açabilir.',
    [
      'Advances in technology may cause many professions to disappear within the next decade.',
      'Advances in technology have already caused a great many professions to disappear completely over the past decade.',
      'Many professions will certainly disappear unless technology advances within the next decade.',
      'The disappearance of many professions may slow down advances in technology in the next decade.',
      'Advances in technology will create many new professions within the next decade.'
    ],
    '"Yol açabilir" = "may cause" (olasılık, gelecek). "Önümüzdeki on yıl içinde" = "within the next decade".',
    'Zamanı geçmişe taşıyan ("have already caused") ya da kesinlik ekleyen şıklar elenir.'
  ),
  make(
    'tr_tr_11',
    TR,
    'Ne kadar çok kaynak ayrılırsa ayrılsın, eğitim reformu öğretmenlerin desteği olmadan başarılı olamaz.',
    [
      'No matter how many resources are allocated, education reform cannot succeed without the support of teachers.',
      'The more resources are allocated, the more successful education reform becomes, even without the active support of teachers.',
      'Education reform can succeed without teachers\' support as long as enough resources are allocated.',
      'Teachers will not support education reform unless more resources are allocated to them.',
      'Since few resources have been allocated, teachers have not supported education reform.'
    ],
    '"Ne kadar ... -sa -sın" = "no matter how ...". Ana yargı "başarılı olamaz" = "cannot succeed"; koşul "öğretmenlerin desteği olmadan" = "without the support of teachers".',
    'Kaynakların yeterli olacağını ima eden ("as long as enough resources") şıklar asıl yargıyı tersine çevirir.',
    'Zor'
  ),
  make(
    'tr_tr_12',
    TR,
    'Pek çok bilim insanı, Dünya dışında yaşam bulunma olasılığını artık ciddiye almaktadır.',
    [
      'Many scientists now take seriously the possibility that life exists beyond Earth.',
      'Few scientists still believe that life could exist beyond Earth.',
      'Many scientists have proven that life exists beyond Earth.',
      'Many scientists no longer take the possibility that life exists somewhere beyond Earth seriously.',
      'Scientists used to take the possibility of life beyond Earth more seriously than they do now.'
    ],
    '"Artık ciddiye almaktadır" = "now take seriously" (eskiden almıyorlardı, şimdi alıyorlar). "Olasılık" kanıt değildir; "have proven" yanlıştır.',
    '"Artık" olumlu cümlede "now", olumsuz cümlede "no longer" olur; ikisini karıştıran şık tuzaktır.'
  ),
  make(
    'tr_tr_13',
    TR,
    'Fabrika kapatıldıktan sonra bölgedeki hava kalitesi belirgin biçimde iyileşmiştir.',
    [
      'Air quality in the region has improved markedly since the factory was closed.',
      'The factory was closed because air quality in the region had improved markedly.',
      'Air quality in the region had deteriorated markedly before the factory was opened.',
      'Although the factory was closed down, air quality in the region has not improved noticeably.',
      'The factory will be closed if air quality in the region does not improve markedly.'
    ],
    '"Kapatıldıktan sonra ... iyileşmiştir" = "has improved since ... was closed". Sıra: önce kapanış, ardından iyileşme. Sebep-sonucu ters çeviren şık elenir.',
    'Türkçedeki "-dıktan sonra ... -mıştır" yapısı İngilizcede çoğu zaman "since" ile karşılanır.'
  ),
  make(
    'tr_tr_14',
    TR,
    'Raporda, göçmenlerin ev sahibi ülkenin ekonomisine sanıldığından çok daha fazla katkı sağladığı belirtilmektedir.',
    [
      'The report states that immigrants contribute far more to the host country\'s economy than is commonly assumed.',
      'The report states that immigrants contribute considerably less to the host country\'s economy than was expected.',
      'According to the report, the host country\'s economy contributes more to immigrants than is assumed.',
      'The report states that immigrants would contribute more to the economy if they were given more rights.',
      'The report states that immigrants\' contribution to the economy is exactly as large as had been assumed.'
    ],
    '"Sanıldığından çok daha fazla" = "far more than is commonly assumed". Özne göçmenler, katkının yönü ev sahibi ülkenin ekonomisinedir.',
    'Karşılaştırmanın yönünü ("less") ya da katkıyı alan tarafı değiştiren şıklar elenir.'
  ),
  make(
    'tr_tr_15',
    TR,
    'Yöneticiler, çalışanların uzaktan çalışmayı tercih etmesinin verimliliği düşürüp düşürmediğini hâlâ tartışmaktadır.',
    [
      'Managers are still debating whether employees\' preference for remote work reduces productivity.',
      'Managers have agreed that employees\' preference for remote work reduces productivity.',
      'Employees are still debating whether managers prefer remote work to increase productivity.',
      'Managers no longer debate remote work because it has been shown to increase productivity.',
      'Managers are still debating how they can make employees prefer remote work to working in the office.'
    ],
    '"-ip -mediğini" = "whether". "Hâlâ tartışmaktadır" = "are still debating" (karar verilmedi). Özne yöneticiler, tartışma konusu çalışanların tercihi ve verimliliktir.',
    '"Whether" bir soruyu açık bırakır; "have agreed" diyen şık tartışmayı bitmiş gösterir.'
  ),
  make(
    'tr_tr_16',
    TR,
    'Vergi oranları düşürülmediği sürece küçük işletmelerin rekabet gücünü koruması zor olacaktır.',
    [
      'Unless tax rates are reduced, it will be difficult for small businesses to remain competitive.',
      'Once tax rates are reduced, small businesses will find it difficult to remain competitive.',
      'Even if tax rates are not reduced, small businesses will find it easy to remain competitive.',
      'Because tax rates were reduced, small businesses found it difficult to remain competitive.',
      'Small businesses must remain competitive so that tax rates can be reduced.'
    ],
    '"-mediği sürece" = "unless" (olumsuz koşul). Yüklem "zor olacaktır" = "will be difficult".',
    '"Düşürülmediği sürece" ile "düşürüldüğünde" zıt koşullardır; "once" diyen şık elenir.'
  ),
  make(
    'tr_tr_17',
    TR,
    'Arkeologlar, mağara resimlerinin sanılandan en az on bin yıl daha eski olduğunu ortaya çıkarmıştır.',
    [
      'Archaeologists have revealed that the cave paintings are at least ten thousand years older than was thought.',
      'Archaeologists have revealed that the cave paintings are about ten thousand years old, as was thought.',
      'Archaeologists believe that the cave paintings were made ten thousand years later than was thought.',
      'Archaeologists have now revealed that the cave paintings are at most ten thousand years older than was previously thought.',
      'The cave paintings reveal that archaeologists have studied them for at least ten thousand years.'
    ],
    '"En az on bin yıl daha eski" = "at least ten thousand years older". "Sanılandan" = "than was thought". "At most" ve "later" niceliği bozar.',
    '"At least" ile "at most" birbirinin zıddıdır; sayı aynı olduğu için kolay gözden kaçar.'
  ),
  make(
    'tr_tr_18',
    TR,
    'Çocuklukta yaşanan yetersiz beslenme, yetişkinlikte kronik hastalık riskini artırabilir.',
    [
      'Malnutrition experienced in childhood may increase the risk of chronic disease in adulthood.',
      'Chronic diseases in childhood may increase the risk of malnutrition in adulthood.',
      'Malnutrition in adulthood increases the risk of chronic disease in childhood.',
      'Malnutrition experienced in childhood has no measurable effect on the risk of chronic disease in adulthood.',
      'Adults with chronic diseases are more likely to have suffered from malnutrition as children.'
    ],
    'Özne "çocuklukta yaşanan yetersiz beslenme" = "malnutrition experienced in childhood". "Artırabilir" = "may increase". Dönemler: sebep çocukluk, sonuç yetişkinlik.',
    'Son şık doğru görünen bir ilişki kurar ama "-abilir" olasılığını kesin bir gözleme çevirir ve özneyi değiştirir.'
  ),
  make(
    'tr_tr_19',
    TR,
    'Barajın inşası, aşağı havzadaki tarım arazilerine ulaşan su miktarını önemli ölçüde azaltmıştır.',
    [
      'The construction of the dam has significantly reduced the amount of water reaching the farmland downstream.',
      'The construction of the dam has significantly increased the amount of water reaching the farmland downstream.',
      'The farmland downstream has significantly reduced the amount of water reaching the dam.',
      'The dam was built because the farmland downstream was receiving too much water.',
      'The construction of the dam will reduce the amount of water used by farmers upstream.'
    ],
    'Özne "barajın inşası" = "the construction of the dam", yüklem "önemli ölçüde azaltmıştır" = "has significantly reduced". Yer: aşağı havza = "downstream".',
    'Yön ("downstream / upstream") ve fiilin anlamı ("reduce / increase") aynı anda kontrol edilmeli.'
  ),
  make(
    'tr_tr_20',
    TR,
    'Bazı dilbilimciler, çocukların dil edinme yeteneğinin doğuştan geldiğini savunurken diğerleri çevrenin belirleyici olduğunu ileri sürer.',
    [
      'While some linguists argue that children\'s ability to acquire language is innate, others claim that the environment is decisive.',
      'All linguists agree that children\'s ability to acquire language depends on both innate and environmental factors.',
      'Some linguists argue that the environment is innate, while others claim that children acquire it through language.',
      'Linguists argue that children who are born in a rich environment acquire language more quickly.',
      'Some linguists argue that children cannot acquire language at all unless the environment they grow up in is decisive.'
    ],
    '"-ırken" burada iki görüşü karşılaştırır = "while". "Doğuştan" = "innate", "belirleyici" = "decisive".',
    'İki ayrı görüşü tek bir uzlaşıya çeviren ("all linguists agree") şık anlamı değiştirir.'
  ),
  make(
    'tr_tr_21',
    TR,
    'Hükümet, enerji krizinin derinleşmesini önlemek amacıyla bir dizi acil önlem açıkladı.',
    [
      'The government announced a series of emergency measures in order to prevent the energy crisis from deepening.',
      'The government announced a series of emergency measures, which caused the energy crisis to deepen.',
      'The energy crisis deepened because the government failed to announce emergency measures.',
      'The government will announce a series of emergency measures only if the energy crisis deepens even further.',
      'The government announced that the energy crisis had been prevented by a series of measures.'
    ],
    '"-mek amacıyla" = "in order to" (amaç). "-mesini önlemek" = "to prevent ... from deepening". Yüklem geçmiştir: "açıkladı" = "announced".',
    'Amaç bildiren yapıyı sonuca çeviren ("which caused") şık en güçlü çeldiricidir.'
  ),
  make(
    'tr_tr_22',
    TR,
    'Kuşların göç yollarını nasıl belirlediği uzun süre bir gizem olarak kalmıştır.',
    [
      'How birds determine their migration routes remained a mystery for a long time.',
      'Birds remained mysterious for a long time because they kept changing their migration routes.',
      'Scientists determined birds\' migration routes long ago, so they are no longer a mystery.',
      'Birds use mysterious methods to determine the length of their migration routes.',
      'For a long time, birds avoided migration routes that remained a mystery to them.'
    ],
    'Özne bir isim cümlesidir: "kuşların ... nasıl belirlediği" = "how birds determine ...". Yüklem "bir gizem olarak kalmıştır" = "remained a mystery".',
    'İsim cümlesini özne olarak koruyan tek şık doğrudur; kuşları özne yapan şıklar yapıyı bozar.',
    'Zor'
  ),
  make(
    'tr_tr_23',
    TR,
    'Yeni ilacın yan etkileri, beklenenden daha hafif olmasına rağmen bazı hastalarda tedavinin bırakılmasına neden oldu.',
    [
      'Although the side effects of the new drug were milder than expected, they caused some patients to discontinue treatment.',
      'Because the side effects of the new drug were milder than expected, no patients discontinued treatment.',
      'The side effects of the new drug were more severe than expected and caused all patients to stop treatment.',
      'Some patients had already discontinued their treatment before the side effects of the new drug could be properly observed.',
      'The new drug caused milder side effects in patients who had discontinued their previous treatment.'
    ],
    '"-masına rağmen" = "although". "Beklenenden daha hafif" = "milder than expected". "Bazı hastalarda tedavinin bırakılmasına neden oldu" = "caused some patients to discontinue treatment".',
    'Zıtlığı sebebe çeviren ("because") ve niceleyiciyi değiştiren ("all patients") şıklar elenir.'
  ),
  make(
    'tr_tr_24',
    TR,
    'Kentlerdeki gürültü kirliliği, sanıldığının aksine yalnızca işitme sağlığını değil, kalp sağlığını da olumsuz etkilemektedir.',
    [
      'Contrary to what is believed, urban noise pollution adversely affects not only hearing but also heart health.',
      'As is widely believed, urban noise pollution affects only hearing and not heart health.',
      'Urban noise pollution affects heart health more than hearing, as is commonly believed.',
      'Contrary to what is commonly believed, urban noise pollution has no measurable effect on either hearing or heart health.',
      'Heart health problems in cities are believed to increase noise pollution.'
    ],
    '"Sanıldığının aksine" = "contrary to what is believed". "Yalnızca ... değil, ... da" = "not only ... but also".',
    '"Not only ... but also" iki etkiyi birlikte verir; tek etki bildiren şıklar elenir.'
  ),
  make(
    'tr_tr_25',
    TR,
    'Deney sonuçları açıklanır açıklanmaz bilim çevrelerinde yoğun bir tartışma başladı.',
    [
      'As soon as the results of the experiment were announced, an intense debate began in scientific circles.',
      'An intense debate in scientific circles delayed the announcement of the experiment\'s results.',
      'The results of the experiment were announced long after the debate in scientific circles had ended.',
      'Scientific circles did not debate the results until the experiment was repeated.',
      'The results of the experiment were announced earlier than planned in order to end the intense debate in scientific circles.'
    ],
    '"-ır -maz" = "as soon as". Sıra: sonuçların açıklanması ve hemen ardından tartışma.',
    'Zaman bağlacının yönünü ters çeviren şıklar (tartışma önce, açıklama sonra) elenir.'
  ),
  make(
    'tr_tr_26',
    TR,
    'Yağmur ormanlarının korunması, yalnızca biyolojik çeşitlilik için değil, küresel karbon dengesi için de hayati önem taşır.',
    [
      'The protection of rainforests is vital not only for biodiversity but also for the global carbon balance.',
      'The protection of rainforests is vital for biodiversity but has little effect on the global carbon balance.',
      'The global carbon balance is vital for the protection of rainforests and their biodiversity.',
      'Rainforests protect biodiversity only when the global carbon balance is maintained.',
      'Biodiversity would be protected even if rainforests were not, thanks to the global carbon balance.'
    ],
    '"Yalnızca ... için değil, ... için de" = "not only for ... but also for ...". Özne "yağmur ormanlarının korunması" = "the protection of rainforests".',
    'İkinci öğeyi önemsizleştiren ("has little effect") şık "da" ekini görmezden gelir.'
  ),
  make(
    'tr_tr_27',
    TR,
    'Eğer bu politika sürdürülürse, gelir eşitsizliğinin önümüzdeki yıllarda daha da artması muhtemeldir.',
    [
      'If this policy is maintained, income inequality is likely to increase even further in the coming years.',
      'If this policy had been maintained, income inequality would have decreased in recent years.',
      'Income inequality has increased even further in recent years, so this policy will have to be abandoned soon.',
      'This policy will be maintained as long as income inequality continues to decrease.',
      'Even if this policy is maintained, income inequality will certainly not increase.'
    ],
    '"Sürdürülürse" = "if ... is maintained" (birinci tip koşul). "Artması muhtemeldir" = "is likely to increase". "Daha da" = "even further".',
    '"Muhtemeldir" kesinlik bildirmez; "certainly not" diyen şık hem modalı hem yönü bozar.'
  ),
  make(
    'tr_tr_28',
    TR,
    'Müzenin restorasyonu, beklenmedik mali sorunlar yüzünden iki yıl gecikmeli tamamlandı.',
    [
      'The restoration of the museum was completed two years late because of unexpected financial problems.',
      'The restoration of the museum was completed two years early despite unexpected financial problems.',
      'Unexpected financial problems prevented the two-year restoration of the museum from ever being completed.',
      'The museum will be restored within two years if its financial problems are solved.',
      'The museum\'s financial problems were caused by a restoration that took two years.'
    ],
    '"Yüzünden" = "because of". "İki yıl gecikmeli tamamlandı" = "was completed two years late". Restorasyon tamamlanmıştır.',
    '"Late / early" ve sebep-sonuç yönü birlikte kontrol edilmeli.'
  ),
  make(
    'tr_tr_29',
    TR,
    'Okuma alışkanlığı kazanmış öğrenciler, diğerlerine kıyasla eleştirel düşünme becerilerinde daha başarılı olma eğilimindedir.',
    [
      'Students who have developed a reading habit tend to be more successful in critical thinking skills than others.',
      'Students who are successful in critical thinking tend to develop a reading habit more slowly than others.',
      'Students who have developed a reading habit are always more successful than others in every subject, including critical thinking.',
      'Critical thinking skills cannot be improved by developing a reading habit.',
      'Students who have not developed a reading habit tend to be more successful in critical thinking.'
    ],
    '"Okuma alışkanlığı kazanmış öğrenciler" = "students who have developed a reading habit". "Daha başarılı olma eğilimindedir" = "tend to be more successful".',
    '"Eğilimindedir" genelleme değil eğilimdir; "always ... every subject" aşırı genellemedir.'
  ),
  make(
    'tr_tr_30',
    TR,
    'Bilim insanları, söz konusu virüsün insandan insana bulaşıp bulaşmadığını belirlemek için yeni testler geliştirmektedir.',
    [
      'Scientists are developing new tests to determine whether the virus in question is transmitted from person to person.',
      'Scientists have determined that the virus in question is not transmitted from person to person.',
      'Scientists are developing new tests because the virus is transmitted from person to person.',
      'New tests developed by scientists have shown that the virus in question is not transmitted from person to person.',
      'Scientists will stop developing new tests once the virus stops spreading.'
    ],
    '"-ip -mediğini belirlemek için" = "to determine whether". "Geliştirmektedir" = "are developing" (süren eylem). Bulaşmanın olup olmadığı henüz bilinmemektedir.',
    'Belirsiz bir soruyu kesin bir sonuca çeviren ("have determined that") şıklar elenir.'
  )
];

// Place the correct option on A..E in turn so every letter is used equally.
const LETTERS = ['A', 'B', 'C', 'D', 'E'] as const;
const placeAnswer = (q: YdsQuestion, i: number): YdsQuestion => {
  const target = LETTERS[i % 5];
  const texts = LETTERS.map((l) => q.options[l]);
  const [correct, ...distractors] = texts;
  distractors.splice(i % 5, 0, correct);
  return {
    ...q,
    options: { A: distractors[0], B: distractors[1], C: distractors[2], D: distractors[3], E: distractors[4] },
    answer: target,
    explanation: q.explanation.replace(/Doğru cevap A\.$/, `Doğru cevap ${target}.`)
  };
};

export const TRANSLATION_BANK: YdsQuestion[] = RAW_TRANSLATION_BANK.map(placeAnswer);
