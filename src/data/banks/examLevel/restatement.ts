import { ExamItem } from './helpers';

// Exam-level restatement: the options reuse the same words, and the difference is
// in degree, modality, negation, cause-effect direction or who does what.
export const XL_RESTATEMENT: ExamItem[] = [
  {
    q: 'Few scientists now doubt that human activity is the main cause of the warming observed since the mid-twentieth century.',
    o: [
      'Most scientists today accept that the warming seen since the mid-twentieth century has been caused mainly by human activity.',
      'Some scientists still believe that human activity has caused the warming observed since the mid-twentieth century.',
      'Hardly any scientists accept that human activity is responsible for the warming observed since the mid-twentieth century.',
      'Since the mid-twentieth century, scientists have increasingly doubted whether human activity causes global warming.',
      'Scientists agree that human activity is one of many possible causes of the warming observed in recent decades.'
    ],
    why: '"Few scientists doubt" = çok az bilim insanı şüphe ediyor, yani çoğu kabul ediyor. "main cause" da "mainly" ile korunmuştur.',
    trap: 'C şıkkı "few" ile "hardly any" arasındaki ilişkiyi ters kurar (kabul edenleri azaltır). E şıkkı "main cause" yerine "one of many possible causes" diyerek derecesini düşürür.',
    tactic: 'Few + olumsuz fiil = çoğunluk olumlu'
  },
  {
    q: 'Had it not been for the generous support of private donors, the museum would have had to close its doors during the economic crisis.',
    o: [
      'The museum was able to stay open during the economic crisis only because private donors supported it generously.',
      'Although private donors supported the museum generously, it had to close during the economic crisis.',
      'The museum would have stayed open during the economic crisis if private donors had supported it.',
      'Private donors decided to support the museum after it had been closed during the economic crisis.',
      'Without the economic crisis, private donors would not have needed to support the museum.'
    ],
    why: '"Had it not been for X" = X olmasaydı. Gerçek durum: bağışçılar destek verdi, müze açık kaldı. A şıkkı bu gerçeği "only because" ile verir.',
    trap: 'B şıkkı müzenin kapandığını, C şıkkı bağışçıların destek vermediğini varsayar; ikisi de gerçek durumu tersine çevirir.',
    tactic: 'Had it not been for = If it hadn\'t been for → gerçek durumu bul'
  },
  {
    q: 'The new treatment is not only cheaper than existing therapies but also appears to cause fewer side effects.',
    o: [
      'In addition to costing less than current therapies, the new treatment seems to have fewer side effects.',
      'The new treatment costs less than existing therapies, but it causes more side effects.',
      'Although the new treatment appears to cause fewer side effects, it is more expensive than existing therapies.',
      'The new treatment has been proven to cause no side effects, and it is also cheaper.',
      'Existing therapies are cheaper than the new treatment and have fewer side effects.'
    ],
    why: '"not only ... but also" iki olumlu özelliği birleştirir: daha ucuz ve daha az yan etki. "appears to" belirsizliği "seems to" ile korunmuştur.',
    trap: 'D şıkkı "appears to cause fewer" ifadesini "proven to cause no" diyerek kesinleştirir ve abartır.',
    tactic: 'Kesinlik derecesi: appear/seem ≠ prove'
  },
  {
    q: 'It is unlikely that the project will be completed on time unless additional funding is found within the next few months.',
    o: [
      'The project will probably be late if no extra money is found in the coming months.',
      'The project will certainly be completed on time even without additional funding.',
      'Additional funding was found too late to complete the project on time.',
      'If additional funding is found, the project will definitely finish ahead of schedule.',
      'The project is unlikely to need any additional funding in the next few months.'
    ],
    why: '"unlikely ... unless" = ek para bulunmazsa proje muhtemelen zamanında bitmez. A şıkkı bunu "probably be late if no extra money is found" ile verir.',
    trap: 'D şıkkı koşulu tersinden alıp "definitely ahead of schedule" diyerek hem kesinlik hem derece ekler.',
    tactic: 'unless = if not; unlikely = probably not'
  },
  {
    q: 'Contrary to popular belief, the Great Wall of China cannot be seen from the Moon with the naked eye.',
    o: [
      'Although many people believe otherwise, the Great Wall of China is not visible from the Moon without a telescope.',
      'As most people believe, the Great Wall of China can be seen clearly from the Moon.',
      'Many people wrongly think that the Great Wall of China can only be seen through a telescope.',
      'It is commonly believed that nothing on Earth can be seen from the Moon with the naked eye.',
      'Only a few people know that the Great Wall of China can be seen from the Moon.'
    ],
    why: '"Contrary to popular belief" = yaygın inanışın aksine. Gerçek: Çin Seddi çıplak gözle Ay\'dan görünmez. A şıkkı ikisini de korur.',
    trap: 'C şıkkı yanlış inancın içeriğini değiştirir; E şıkkı görülebildiğini söyleyerek gerçeği tersine çevirir.',
    tactic: 'Contrary to X → X yanlıştır; gerçeği koru'
  },
  {
    q: 'The more time children spend reading for pleasure, the wider their vocabulary tends to become.',
    o: [
      'Children who read more for enjoyment generally develop a larger vocabulary.',
      'Children with a large vocabulary always spend more time reading for pleasure.',
      'Reading for pleasure has little effect on the vocabulary of most children.',
      'Children need a wide vocabulary before they can begin reading for pleasure.',
      'The vocabulary of children who read for pleasure grows more slowly than that of others.'
    ],
    why: '"The more ..., the wider ..." doğru orantı kurar ve "tends to" ile genelleme yapar. A şıkkı "generally" ile aynı ilişkiyi ve dereceyi verir.',
    trap: 'B şıkkı ilişkinin yönünü tersine çevirir (geniş kelime dağarcığı → daha çok okuma) ve "always" ile kesinlik ekler.',
    tactic: 'Neden-sonuç yönü + tend to = generally'
  },
  {
    q: 'Scarcely had the experiment begun when the equipment failed, forcing the team to postpone their work.',
    o: [
      'The equipment broke down almost as soon as the experiment started, so the team had to delay their work.',
      'The team postponed their work before starting the experiment because they knew the equipment would fail.',
      'The equipment failed after the experiment had been running for a long time.',
      'Although the equipment failed, the team managed to complete the experiment on time.',
      'The experiment could not begin until the team had repaired the equipment.'
    ],
    why: '"Scarcely had ... when" = ... başlar başlamaz. A şıkkı "almost as soon as" ile aynı zaman ilişkisini, "so" ile sonucu verir.',
    trap: 'E şıkkı deneyin hiç başlamadığını söyler; oysa deney başlamış, sonra ekipman bozulmuştur.',
    tactic: 'Scarcely/Hardly ... when = as soon as'
  },
  {
    q: 'Despite being one of the wealthiest countries in the region, the nation spends a relatively small proportion of its budget on education.',
    o: [
      'Although the country is among the richest in the region, it devotes a comparatively small share of its budget to education.',
      'Because the country is one of the richest in the region, it spends very little on education.',
      'The country spends more on education than any other country in the region.',
      'The country has become wealthy because it spends very little on education.',
      'The poorest countries in the region spend the largest share of their budgets on education.'
    ],
    why: '"Despite" zıtlık ilişkisini, "relatively small proportion" göreceli küçük payı bildirir. A şıkkı "Although" ve "comparatively small share" ile birebir korur.',
    trap: 'B şıkkı zıtlığı sebep-sonuca çevirir ve "relatively small" yerine "very little" diyerek dereceyi değiştirir. E şıkkı metinde olmayan bir karşılaştırma ekler.',
    tactic: 'Zıtlık bağlacı korunmalı; relatively ≠ very'
  },
  {
    q: 'The committee is expected to announce its decision by the end of the month, although some members have suggested a delay.',
    o: [
      'Even though some committee members have proposed postponing it, the decision is likely to be announced before the month ends.',
      'Because some members suggested a delay, the committee will not announce its decision this month.',
      'The committee announced its decision at the end of last month despite objections from some members.',
      'All of the committee members agree that the decision should be announced by the end of the month.',
      'Some members of the committee expect the decision to be delayed until the end of the month.'
    ],
    why: '"is expected to" (bekleniyor) ve "although some members have suggested a delay" (bazı üyeler ertelemeyi önerse de) birlikte korunmalıdır. A şıkkı ikisini de verir.',
    trap: 'B şıkkı beklentiyi kesin bir olumsuzluğa çevirir; D şıkkı "some members" itirazını "all agree" ile siler.',
    tactic: 'be expected to = be likely to; some ≠ all'
  },
  {
    q: 'Not until the nineteenth century did doctors realise that washing their hands could prevent the spread of infection.',
    o: [
      'It was only in the nineteenth century that doctors understood that hand washing could stop infections from spreading.',
      'Doctors had always known that washing hands prevents infection, but they did not do so until the nineteenth century.',
      'In the nineteenth century, doctors stopped washing their hands because they thought it spread infection.',
      'Doctors in the nineteenth century were the first to wash their hands regularly before surgery.',
      'Before the nineteenth century, infections were spread mainly by doctors who did not wash their hands.'
    ],
    why: '"Not until X did ..." = ancak X\'te ... fark ettiler. A şıkkı "It was only in ... that" ile aynı anlamı verir; "could prevent" olasılığı "could stop" ile korunmuştur.',
    trap: 'B şıkkı doktorların bunu her zaman bildiğini söyler; oysa cümle bilginin ancak 19. yüzyılda edinildiğini anlatır. E şıkkı metinde olmayan bir iddia ekler.',
    tactic: 'Not until = only (then)'
  },
  {
    q: 'The disease is rarely fatal if it is diagnosed early, but it can cause serious complications when treatment is delayed.',
    o: [
      'Early diagnosis usually prevents the disease from killing patients, whereas late treatment may lead to serious problems.',
      'The disease is always fatal unless it is diagnosed very early.',
      'Even when it is diagnosed early, the disease frequently causes death.',
      'Delaying treatment never causes complications if the disease is diagnosed early.',
      'Most patients with the disease die because they receive treatment too late.'
    ],
    why: '"rarely fatal if diagnosed early" = erken teşhiste nadiren ölümcül; "can cause serious complications" = ciddi sorunlara yol açabilir. A şıkkı "usually prevents ... killing" ve "may lead to" ile dereceleri korur.',
    trap: 'B şıkkı "rarely" ifadesini "always fatal" ile tersine çevirir; E şıkkı "can cause complications" ifadesini "most die" diye abartır.',
    tactic: 'rarely ≈ usually not; can ≈ may'
  },
  {
    q: 'So convincing was the forgery that even experts at the museum failed to recognise it for more than a decade.',
    o: [
      'The fake was so persuasive that the museum\'s own experts did not notice it was not genuine for over ten years.',
      'The experts at the museum recognised the forgery immediately, although it was very convincing.',
      'Because the museum\'s experts were not convinced, they examined the painting for more than a decade.',
      'The forgery was discovered by people outside the museum, who were more experienced than its experts.',
      'For more than ten years, the museum tried to convince experts that the painting was genuine.'
    ],
    why: '"So convincing was ... that" = o kadar ikna ediciydi ki. Sonuç: uzmanlar on yıldan fazla fark etmedi. A şıkkı "so persuasive that" ile aynı yapıyı korur.',
    trap: 'B şıkkı uzmanların hemen fark ettiğini söyleyerek sonucu tersine çevirir. D şıkkı metinde olmayan bir bilgi (dışarıdan biri buldu) ekler.',
    tactic: 'So + adj (devrik) ... that = such ... that'
  },
  {
    q: 'Rising sea levels pose a far greater threat to low-lying island nations than to most continental countries.',
    o: [
      'Low-lying island nations are much more endangered by rising sea levels than most countries on continents are.',
      'Rising sea levels threaten continental countries more than low-lying island nations.',
      'Both island nations and continental countries face exactly the same threat from rising sea levels.',
      'Rising sea levels pose a slightly greater threat to island nations than to all continental countries.',
      'Low-lying island nations are responsible for most of the rise in global sea levels.'
    ],
    why: '"far greater threat to X than to most Y" karşılaştırması: tehdit adalar için çok daha büyük. A şıkkı "much more endangered" ve "most countries" ile hem dereceyi hem niceleyiciyi korur.',
    trap: 'D şıkkı "far greater" ifadesini "slightly greater", "most" ifadesini "all" yapar; iki öğeyi birden değiştirir.',
    tactic: 'far/much (çok) ≠ slightly (biraz); most ≠ all'
  },
  {
    q: 'The government denied that the new law had been introduced in order to restrict the freedom of the press.',
    o: [
      'According to the government, the aim of the new law was not to limit press freedom.',
      'The government admitted that it had introduced the new law to restrict press freedom.',
      'The press claimed that the government had not introduced any new laws.',
      'The government introduced a new law that protects the freedom of the press.',
      'The new law was introduced despite the government\'s efforts to restrict the press.'
    ],
    why: '"denied that ... in order to restrict" = hükümet amacın kısıtlama olduğunu reddetti. A şıkkı "According to the government, the aim ... was not to limit" ile iddia sahibini ve olumsuzluğu korur.',
    trap: 'B şıkkı "denied" fiilini "admitted" yaparak tersine çevirir. D şıkkı hükümetin iddiasını kesin bir gerçek gibi sunar.',
    tactic: 'Fiil kimin iddiası? deny/admit/claim'
  },
  {
    q: 'Only a small number of the species found in the rainforest have so far been studied in any detail.',
    o: [
      'Most species living in the rainforest have not yet been examined closely.',
      'Scientists have studied nearly all of the rainforest\'s species in great detail.',
      'Only a few species live in the rainforest, and all of them have been studied.',
      'A small number of rainforest species have been studied, but none of them in detail.',
      'The rainforest contains fewer species than scientists had expected.'
    ],
    why: '"Only a small number ... have been studied in detail" = türlerin çoğu henüz ayrıntılı incelenmedi. A şıkkı "Most ... have not yet been examined closely" ile aynı anlamı verir; "so far" da "yet" ile korunmuştur.',
    trap: 'C şıkkı "small number" ifadesini ormandaki tür sayısına bağlar; oysa az olan, incelenen türlerdir.',
    tactic: 'Only a few X did → most X did not'
  },
  {
    q: 'Were it not for the protective layer of ozone in the upper atmosphere, life on land would be exposed to dangerous levels of ultraviolet radiation.',
    o: [
      'The ozone layer in the upper atmosphere protects life on land from harmful amounts of ultraviolet radiation.',
      'Life on land is exposed to dangerous ultraviolet radiation because the ozone layer is too thin.',
      'If the ozone layer disappears, life on land will gradually adapt to ultraviolet radiation.',
      'Ultraviolet radiation has damaged the ozone layer in the upper atmosphere.',
      'Life on land would be safer from ultraviolet radiation if there were no ozone layer.'
    ],
    why: '"Were it not for X" = X olmasaydı (bugün). Gerçek: ozon tabakası var ve canlıları koruyor. A şıkkı bu gerçeği doğrudan söyler.',
    trap: 'B şıkkı canlıların şu anda tehlikede olduğunu söyler; E şıkkı ilişkiyi tamamen tersine çevirir.',
    tactic: 'Were it not for = If it were not for → bugünkü gerçek'
  },
  {
    q: 'The author claims that the novel was inspired less by her own experiences than by stories her grandmother used to tell.',
    o: [
      'According to the author, her grandmother\'s stories influenced the novel more than her personal experiences did.',
      'The author says that her own experiences were the main inspiration for the novel.',
      'The novel tells the story of the author\'s grandmother in great detail.',
      'The author\'s grandmother claimed that she had inspired the novel.',
      'The author used to tell her grandmother stories about her own experiences.'
    ],
    why: '"less by X than by Y" = X\'ten çok Y\'den esinlenmiş. A şıkkı karşılaştırmayı "influenced more than" ile doğru yönde verir; "claims" da "According to the author" ile korunmuştur.',
    trap: 'B şıkkı karşılaştırmanın yönünü tersine çevirir. D şıkkı iddia sahibini (yazar → büyükanne) değiştirir.',
    tactic: 'less X than Y = more Y than X'
  },
  {
    q: 'Although the medication relieves symptoms in most patients, it does not address the underlying cause of the condition.',
    o: [
      'The medication makes most patients feel better, but it does nothing to treat the root cause of the illness.',
      'The medication cures the condition in most patients by removing its underlying cause.',
      'Because it treats the underlying cause, the medication relieves the symptoms of most patients.',
      'The medication relieves the symptoms of only a few patients, and it does not cure the condition.',
      'Most patients stop taking the medication because it does not relieve their symptoms.'
    ],
    why: 'Zıtlık: belirtileri hastaların çoğunda hafifletir, ama asıl nedeni tedavi etmez. A şıkkı "but" ile zıtlığı, "most patients" ile niceleyiciyi korur.',
    trap: 'D şıkkı "most" ifadesini "only a few" yaparak niceleyiciyi değiştirir. B ve C şıkları ilacın asıl nedeni tedavi ettiğini söyleyerek olumsuzluğu siler.',
    tactic: 'Niceleyici (most/few) + olumsuzluk korunmalı'
  },
  {
    q: 'It was the invention of the refrigerator, rather than improvements in medicine, that did most to reduce stomach cancer in the twentieth century.',
    o: [
      'Refrigeration contributed more than medical advances to the decline of stomach cancer during the twentieth century.',
      'Medical advances played a greater role than refrigerators in reducing stomach cancer in the twentieth century.',
      'Both refrigerators and improvements in medicine had no effect on stomach cancer rates.',
      'The refrigerator was invented in the twentieth century as a result of improvements in medicine.',
      'Stomach cancer increased in the twentieth century despite the invention of the refrigerator.'
    ],
    why: '"It was X, rather than Y, that did most" vurgulu yapısı X\'in (buzdolabı) Y\'den (tıp) daha etkili olduğunu söyler. A şıkkı "contributed more than" ile aynı karşılaştırmayı verir.',
    trap: 'B şıkkı karşılaştırmanın yönünü tersine çevirir; E şıkkı kanserin azaldığı bilgisini tersine çevirir.',
    tactic: 'It was X rather than Y that... → X > Y'
  },
  {
    q: 'Many economists warn that the policy, however well-intentioned, may end up harming the very people it is meant to help.',
    o: [
      'According to many economists, the policy could actually hurt those it is designed to benefit, despite its good intentions.',
      'Many economists believe that the policy was deliberately designed to harm the poorest people.',
      'Economists agree that the policy will certainly help the people it is intended for.',
      'The policy has already harmed many people, although economists predicted it would help them.',
      'Many economists have helped design a policy that is meant to protect vulnerable people.'
    ],
    why: '"however well-intentioned" = iyi niyetli olsa da; "may end up harming" = sonunda zarar verebilir. A şıkkı "despite its good intentions" ve "could actually hurt" ile iki öğeyi de korur.',
    trap: 'B şıkkı "iyi niyetli" ifadesini "deliberately designed to harm" yaparak tersine çevirir. D şıkkı olasılığı ("may") gerçekleşmiş bir olaya çevirir.',
    tactic: 'however + adj = although it is ...; may ≠ has'
  },
  {
    q: 'No other city in the country has attracted as many foreign investors over the past decade as the capital.',
    o: [
      'Over the last ten years, the capital has attracted more foreign investors than any other city in the country.',
      'The capital has attracted as many foreign investors as several other cities in the country.',
      'Foreign investors have avoided the capital over the past decade.',
      'Most cities in the country have attracted more foreign investors than the capital.',
      'Ten years ago, the capital was the most popular city in the country for foreign investors.'
    ],
    why: '"No other city ... as many ... as the capital" = başkent diğer tüm şehirlerden fazla yatırımcı çekti. A şıkkı "more ... than any other city" ile üstünlük anlamını verir; "over the past decade" da "over the last ten years" ile korunmuştur.',
    trap: 'B şıkkı üstünlüğü eşitliğe çevirir. E şıkkı zaman aralığını (son on yıl) on yıl öncesine kaydırır.',
    tactic: 'No other X as ... as Y = Y more than any other X'
  },
  {
    q: 'The researchers concluded that the decline in bird populations could not be explained by habitat loss alone.',
    o: [
      'The researchers decided that habitat loss was not the only reason for the fall in bird numbers.',
      'According to the researchers, habitat loss was the sole cause of the decline in bird populations.',
      'The researchers concluded that habitat loss had nothing to do with the decline in bird numbers.',
      'The researchers could not explain why bird populations had increased in some habitats.',
      'Bird populations declined only in areas where there had been no habitat loss.'
    ],
    why: '"could not be explained by habitat loss alone" = yalnızca yaşam alanı kaybıyla açıklanamaz; yani tek neden o değildir ama bir neden olabilir. A şıkkı "not the only reason" ile bunu tam verir.',
    trap: 'C şıkkı "alone" ifadesini görmezden gelip yaşam alanı kaybının hiç etkisi olmadığını söyler. B şıkkı tam tersini (tek neden) iddia eder.',
    tactic: 'not ... alone = not the only'
  },
  {
    q: 'Unlike most mammals, which rely mainly on smell, primates depend heavily on vision to find food and avoid danger.',
    o: [
      'Primates use their eyesight much more than their sense of smell to locate food and escape danger, unlike most other mammals.',
      'Like most other mammals, primates find food and avoid danger mainly by smell.',
      'Most mammals have better eyesight than primates, which rely mainly on smell.',
      'Primates are the only mammals that are able to see colours.',
      'Primates depend on vision to find food, but they use smell to avoid danger.'
    ],
    why: '"Unlike most mammals" zıtlığı ve "depend heavily on vision" derecesini taşır. A şıkkı ikisini de korur.',
    trap: 'C şıkkı iki grubun özelliklerini yer değiştirir. E şıkkı görmeyi yalnızca yiyecek bulmaya indirger, tehlikeden kaçınmayı kokuya bağlar.',
    tactic: 'Unlike X → zıtlık korunmalı; özellikler yer değiştirmemeli'
  },
  {
    q: 'The festival, which had been held every summer for over fifty years, was cancelled this year owing to a lack of funding.',
    o: [
      'Because there was not enough money, this year\'s festival did not take place, although it had been held every summer for more than half a century.',
      'The festival was cancelled this year for the first time in fifty years because of bad weather.',
      'Despite a lack of funding, the festival was held this summer as it had been for fifty years.',
      'The festival, which used to be held every summer, has been cancelled several times due to a lack of money.',
      'Organisers have decided to hold the festival every fifty years because of funding problems.'
    ],
    why: 'Cümlenin üç öğesi: elli yılı aşkın süredir her yaz yapılıyordu, bu yıl iptal edildi, sebep para eksikliği. A şıkkı üçünü de korur.',
    trap: 'B şıkkı sebebi (hava) değiştirir; D şıkkı "this year" yerine "several times" diyerek olayın sayısını değiştirir.',
    tactic: 'Tüm öğeleri tek tek kontrol et: zaman, olay, sebep'
  }
];
