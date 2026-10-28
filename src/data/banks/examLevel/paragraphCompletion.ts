import { ExamItem } from './helpers';

// Exam-level paragraph completion: several options fit the topic; only one links
// to the sentences before and after the blank through reference words and connectors.
export const XL_PARAGRAPH_COMPLETION: ExamItem[] = [
  {
    q: 'For centuries, sailors navigated by the stars, but this method was useless on cloudy nights and gave no reliable way of measuring longitude. _____ In 1714, the British government offered a huge prize to anyone who could solve it. The winner, a self-taught clockmaker named John Harrison, built a marine clock accurate enough to keep time at sea, allowing navigators to calculate their position precisely.',
    o: [
      'The problem was so serious that thousands of sailors lost their lives in shipwrecks caused by navigational errors.',
      'Latitude, by contrast, could be measured quite accurately by observing the height of the Sun at noon.',
      'Harrison spent more than forty years improving his designs before his work was finally recognised.',
      'Many astronomers believed that the movements of Jupiter\'s moons could be used as a kind of celestial clock.',
      'Today, satellites allow ships to determine their position to within a few metres.'
    ],
    why: 'Boşluktan sonraki cümle "anyone who could solve it" der; "it" bir sorunu işaret eder. A şıkkı "The problem was so serious..." ile sorunu adlandırır ve ödülün neden verildiğini açıklar.',
    trap: 'B şıkkı konuyla ilgilidir ama "it" zamirinin göndereceği bir sorun içermez; D şıkkı bir çözüm önerisidir ve ödülden önce gelmesi akışı bozar.',
    tactic: 'Zamir takibi: sonraki cümlede "it" → boşlukta sorun'
  },
  {
    q: 'Urban foxes are now a common sight in many European cities. Unlike their rural relatives, they have learned to feed on food waste and are often active during the day. _____ Some researchers have found that city foxes have shorter, wider snouts, which may be better suited to opening rubbish bags than to catching prey. If this is confirmed, it would be one of the clearest examples of animals adapting physically to urban life.',
    o: [
      'There is also some evidence that these behavioural changes are being accompanied by changes in their bodies.',
      'Many residents enjoy seeing foxes in their gardens, while others regard them as pests.',
      'Foxes first began moving into British cities in large numbers in the 1930s.',
      'In the countryside, foxes hunt mainly rabbits, birds and small rodents.',
      'Foxes are found on every continent except Antarctica.'
    ],
    why: 'Önceki cümleler davranış değişikliklerini, sonraki cümle burun şeklindeki fiziksel değişikliği anlatır. A şıkkı "behavioural changes" ile öncesine, "changes in their bodies" ile sonrasına köprü kurar.',
    trap: 'D şıkkı kırsal tilkilerin beslenmesini anlatır; konuyla ilgilidir ama fiziksel değişime geçişi sağlamaz.',
    tactic: 'Köprü cümle: önceki fikir + sonraki fikir'
  },
  {
    q: 'In many countries, people who donate blood are not paid. Some economists have argued that offering money would increase the supply of blood. _____ In one well-known study, the number of women willing to donate actually fell when a cash payment was introduced, but recovered when they were allowed to give the money to charity instead.',
    o: [
      'However, experiments suggest that payment can sometimes reduce people\'s willingness to help.',
      'Blood is needed every day for surgery, accident victims and patients with serious illnesses.',
      'As a result, most hospitals now pay donors a small fee for each donation.',
      'Moreover, blood that has been donated can be stored for up to six weeks.',
      'Men are generally allowed to donate blood more often than women.'
    ],
    why: 'Ekonomistlerin "para arzı artırır" iddiasından sonra, aksini gösteren bir çalışma gelir. A şıkkı "However" ile zıtlığı başlatır ve sonraki çalışmayı özetler.',
    trap: 'C şıkkı iddianın uygulandığını söyler; sonraki cümledeki "bağış sayısı düştü" bulgusuyla çelişir.',
    tactic: 'İddia → However → karşı kanıt'
  },
  {
    q: 'The Rosetta Stone, discovered in Egypt in 1799, carries the same text in three different scripts: hieroglyphic, Demotic and ancient Greek. _____ Using the Greek version as a guide, the French scholar Jean-François Champollion was finally able to decipher the hieroglyphs in 1822, opening up thousands of years of Egyptian history to modern readers.',
    o: [
      'Since scholars could already read ancient Greek, the stone offered them a key to the other two scripts.',
      'The stone was taken to Britain in 1801 and has been displayed in the British Museum ever since.',
      'Hieroglyphs were used mainly for religious texts and inscriptions on monuments.',
      'Many earlier attempts to read hieroglyphs had been based on the false idea that each sign represented an idea.',
      'The text on the stone is a decree issued by a council of priests in 196 BC.'
    ],
    why: 'Sonraki cümle "Using the Greek version as a guide" der; boşlukta Yunancanın neden rehber olabileceği açıklanmalıdır. A şıkkı Yunancanın zaten okunabildiğini ve diğer yazılara anahtar olduğunu söyler.',
    trap: 'D şıkkı çözümle ilgilidir ama Yunanca metnin rehber olarak kullanılmasına bağlanmaz.',
    tactic: 'Sonraki cümlenin dayandığı bilgiyi boşlukta ara'
  },
  {
    q: '_____ For example, people asked to estimate the population of a city tend to give higher numbers if they have just been shown a large, unrelated number. Similarly, the first price mentioned in a negotiation strongly influences the final agreement, even when both sides know it is arbitrary. Psychologists call this tendency "anchoring".',
    o: [
      'Our judgements are often influenced by information that has no logical connection to the decision we are making.',
      'Most people are able to estimate the population of their own city fairly accurately.',
      'Negotiations usually end when both sides agree on a price that seems fair.',
      'Psychologists have studied the way people make decisions for more than a century.',
      'Large numbers are much harder for the human brain to process than small ones.'
    ],
    why: 'Boşluk paragrafın ilk cümlesidir ve "For example" ile başlayan örneklerin genel fikrini vermelidir: kararlarımız mantıksal bağı olmayan bilgilerden etkilenir.',
    trap: 'D şıkkı genel bir giriş cümlesi gibi görünür ama örneklerin gösterdiği fikri (çapalama) içermez.',
    tactic: 'İlk cümle boşluğu → örneklerin ortak fikri'
  },
  {
    q: 'Rice is the staple food for more than half of the world\'s population. However, traditional rice farming, in which fields are kept flooded for most of the growing season, produces large amounts of methane, a powerful greenhouse gas. _____ Trials in Vietnam and Bangladesh have shown that this technique can reduce methane emissions by up to half while using a third less water, without lowering yields.',
    o: [
      'One promising alternative is to let the fields dry out periodically instead of keeping them permanently under water.',
      'Methane traps much more heat in the atmosphere than carbon dioxide over a twenty-year period.',
      'Rice was first domesticated in China around nine thousand years ago.',
      'As a result, many countries have decided to stop growing rice altogether.',
      'Farmers in Asia have grown rice in flooded fields for thousands of years.'
    ],
    why: 'Sonraki cümle "this technique" der; boşlukta bir teknik tanıtılmış olmalıdır. A şıkkı tarlaların aralıklı kurutulması tekniğini sunar.',
    trap: 'B şıkkı metanla ilgili doğru bir bilgidir ama "this technique" zamirinin göndereceği bir yöntem içermez. D şıkkı aşırı bir sonuçtur.',
    tactic: '"this technique/method/approach" → boşlukta yöntem'
  },
  {
    q: 'When the first passenger railways opened in the 1830s, some doctors warned that travelling at speeds of more than fifty kilometres an hour could damage the human body. _____ Within a few decades, millions of people were travelling by train every year, and the warnings were forgotten. Similar fears have accompanied many new technologies, from the telephone to the internet.',
    o: [
      'These fears turned out to be unfounded, and the popularity of rail travel grew rapidly.',
      'The first railway in the world opened between Stockton and Darlington in 1825.',
      'Trains were initially used mainly for transporting coal from mines to ports.',
      'Some passengers did indeed suffer from serious health problems after their journeys.',
      'For this reason, railway companies were forced to limit the speed of their trains.'
    ],
    why: 'Önceki cümle doktorların uyarısını, sonraki cümle milyonların trenle seyahat ettiğini ve uyarıların unutulduğunu söyler. A şıkkı "These fears turned out to be unfounded" ile köprü kurar.',
    trap: 'D ve E şıkları uyarıların haklı çıktığını ima eder; "warnings were forgotten" ve hızlı büyümeyle çelişir.',
    tactic: 'Önceki iddia → sonuç: geçiş cümlesi'
  },
  {
    q: 'Many people assume that the ability to learn a language declines steadily after childhood. _____ Adults, for instance, often learn grammar and vocabulary faster than children in the early stages, because they can use their knowledge of their first language and their ability to think abstractly. Where children do have a clear advantage is in acquiring a native-like accent.',
    o: [
      'The reality, however, is more complicated than this popular belief suggests.',
      'Indeed, most adults find it almost impossible to learn a new language.',
      'Children usually begin to speak their first language at around the age of one.',
      'Many schools now begin teaching foreign languages in the first year of primary school.',
      'This is why it is important to start learning a language as early as possible.'
    ],
    why: 'Yaygın inanıştan sonra, yetişkinlerin bazı açılardan daha hızlı öğrendiğini gösteren örnekler gelir. A şıkkı "The reality, however, is more complicated" ile inanışı sorgulayıp örneklere geçer.',
    trap: 'B ve E şıkları inanışı destekler; sonraki "Adults ... often learn faster" örneğiyle çelişir.',
    tactic: 'Yaygın inanış → however → karşı örnekler'
  },
  {
    q: 'The Dead Sea is shrinking at an alarming rate; its surface falls by more than a metre every year. The main reason is that most of the water from the Jordan River, its principal source, is now diverted for agriculture and drinking water. _____ As the water level drops, large holes called sinkholes have begun to appear along the shore, damaging roads, farms and tourist facilities.',
    o: [
      'The consequences of this decline are already visible in the surrounding landscape.',
      'The Dead Sea is the lowest point on the surface of the Earth.',
      'Its water is almost ten times saltier than the water of the oceans.',
      'Tourists have visited the Dead Sea for its healing properties since ancient times.',
      'Jordan, Israel and the Palestinian territories all share its coastline.'
    ],
    why: 'Önceki cümleler küçülmenin nedenini, sonraki cümle sonuçlarını (çukurlar) anlatır. A şıkkı "The consequences of this decline" ile nedenden sonuca geçişi sağlar.',
    trap: 'B, C ve E şıkları Lut Gölü hakkında doğru bilgilerdir ama neden-sonuç akışına hizmet etmez.',
    tactic: 'Neden → [geçiş] → sonuç'
  },
  {
    q: 'Bilingual signs, traffic lights with countdown timers, and wider pavements are all examples of what planners call "invisible design". _____ When it works well, people simply find a city easier and safer to move around without knowing why. It is only when such features are missing that their importance becomes obvious.',
    o: [
      'The term refers to features that improve daily life so smoothly that most people never notice them.',
      'Many cities have spent large amounts of money on spectacular new buildings in recent years.',
      'Traffic accidents are one of the leading causes of death among young people.',
      'Planners have often been criticised for ignoring the needs of pedestrians.',
      'Countdown timers were first introduced at traffic lights in the 1990s.'
    ],
    why: 'Bir kavram ("invisible design") tanıtılmış, sonraki cümle "When it works well, people ... without knowing why" der. A şıkkı kavramı tanımlar: o kadar sorunsuz işleyen ki kimsenin fark etmediği özellikler.',
    trap: 'D şıkkı konuyla ilgilidir ama kavramı tanımlamaz ve sonraki "When it works well" cümlesine bağlanmaz.',
    tactic: 'Kavram → tanım → örnek/açıklama'
  },
  {
    q: 'Most of the world\'s cocoa is grown on small family farms in West Africa, where farmers typically earn less than a dollar a day. _____ Some chocolate companies have responded by paying a premium for cocoa that is certified as fairly traded. Critics argue, however, that only a small share of this extra money actually reaches the farmers themselves.',
    o: [
      'Growing public awareness of this poverty has put pressure on the chocolate industry to act.',
      'Cocoa trees grow best in hot, humid climates close to the equator.',
      'The Aztecs used cocoa beans as a form of money.',
      'Chocolate consumption is highest in Northern Europe.',
      'Farmers usually harvest cocoa pods twice a year.'
    ],
    why: 'Sonraki cümle "Some chocolate companies have responded by..." der; boşlukta şirketlerin tepki verdiği bir baskı olmalıdır. A şıkkı yoksulluğa dair farkındalığın baskı yarattığını söyler.',
    trap: 'B, C, D ve E kakao hakkında doğru bilgilerdir ama "responded" fiilinin neye tepki olduğunu açıklamaz.',
    tactic: '"responded by" → boşlukta tepki verilen durum'
  },
  {
    q: 'In 1928, Alexander Fleming noticed that a mould growing on one of his bacterial cultures had killed the bacteria around it. He published his findings, but he was unable to produce the substance in large quantities. _____ Only in the early 1940s did a team in Oxford develop a method of mass production, just in time for penicillin to save thousands of soldiers\' lives during the Second World War.',
    o: [
      'As a result, his discovery attracted little attention for more than a decade.',
      'Fleming was awarded the Nobel Prize in Medicine in 1945.',
      'Penicillin works by preventing bacteria from building their cell walls.',
      'Many bacteria have since become resistant to penicillin.',
      'He had previously discovered an enzyme in human tears that also kills bacteria.'
    ],
    why: 'Fleming maddeyi büyük miktarda üretemedi, ancak 1940\'larda seri üretim geliştirildi. A şıkkı "As a result ... little attention for more than a decade" ile bu aradaki boşluğu açıklar.',
    trap: 'B ve D penisilinle ilgili doğru bilgilerdir ama 1928 ile 1940\'lar arasındaki zaman akışına uymaz.',
    tactic: 'Zaman akışı: 1928 → [aradaki dönem] → 1940\'lar'
  },
  {
    q: 'Sleep scientists distinguish between two types of people: "larks", who wake early and feel most alert in the morning, and "owls", who prefer to stay up late. _____ Owls who are forced to start work early, for example, often suffer from what researchers call "social jet lag", a constant mismatch between their body clock and their daily schedule that has been linked to poorer health.',
    o: [
      'These preferences are largely genetic, which means that they cannot simply be changed by willpower.',
      'Most people fall somewhere between these two extremes.',
      'Larks tend to be more successful at school and at work.',
      'The human body clock is controlled by a small region of the brain.',
      'Jet lag occurs when people travel quickly across several time zones.'
    ],
    why: 'Sonraki cümle baykuşların erken başlamaya zorlandığında yaşadığı sorunları anlatır; boşlukta bu tercihlerin neden kolayca değiştirilemediği açıklanmalıdır. A şıkkı tercihlerin büyük ölçüde genetik olduğunu söyler.',
    trap: 'E şıkkı "jet lag" kelimesiyle sonraki cümleye bağlanıyor gibi görünür ama sosyal jet lag\'ı değil, seyahat jet lag\'ını anlatır.',
    tactic: 'Anahtar kelime tuzağı: aynı kelime farklı kavram'
  },
  {
    q: 'Ancient Roman concrete has survived for two thousand years, while modern concrete structures often begin to crumble within decades. For a long time, scientists could not explain this difference. _____ When seawater seeps into Roman concrete, it reacts with volcanic ash in the mixture to form new minerals that strengthen the material over time, rather than weakening it.',
    o: [
      'Recent research suggests that the answer lies in the way the material reacts with water.',
      'The Romans used concrete to build harbours, bridges, aqueducts and temples.',
      'Modern concrete is made mainly from cement, sand, gravel and water.',
      'Some of the most famous Roman buildings, such as the Pantheon, are still in use today.',
      'Scientists have therefore concluded that Roman concrete was simply made more carefully.'
    ],
    why: 'Önceki cümle bilim insanlarının farkı açıklayamadığını söyler; sonraki cümle suyla tepkimeyi anlatır. A şıkkı "the answer lies in the way the material reacts with water" ile çözüme geçiş yapar.',
    trap: 'E şıkkı bir sonuç gibi görünür ama sonraki cümledeki kimyasal açıklamayla çelişir ("simply made more carefully").',
    tactic: 'Soru/gizem → [cevap ipucu] → açıklama'
  },
  {
    q: 'Tourism can bring much-needed income to remote communities. _____ In some Himalayan villages, for example, the arrival of large numbers of trekkers has driven up the price of food and firewood, and young people have abandoned farming to work as porters and guides. As a result, traditional ways of life are disappearing faster than ever.',
    o: [
      'At the same time, it can change local societies in ways that are not always welcome.',
      'Many governments therefore invest heavily in promoting tourism in rural areas.',
      'The Himalayas contain the highest mountains in the world.',
      'Trekking has become one of the fastest-growing forms of adventure tourism.',
      'Most tourists who visit remote areas are interested in local culture.'
    ],
    why: 'İlk cümle turizmin faydasını, sonraki örnek olumsuz etkilerini anlatır. A şıkkı "At the same time ... not always welcome" ile olumludan olumsuza geçişi sağlar.',
    trap: 'B şıkkı olumlu yönü sürdürür ve "for example" ile gelen olumsuz örneklere bağlanmaz.',
    tactic: 'Fayda → [ama] → zarar örneği'
  },
  {
    q: 'For decades, the standard advice to people with back pain was to rest in bed until the pain went away. _____ Patients who stay active, by contrast, generally recover more quickly and are less likely to develop long-term problems. Many doctors now recommend gentle exercise as soon as possible after an injury.',
    o: [
      'Research has since shown that prolonged rest can actually slow recovery.',
      'Back pain is one of the most common reasons for missing work.',
      'Most cases of back pain are caused by poor posture.',
      'Some patients find that painkillers help them sleep at night.',
      'This advice was based on many years of careful scientific research.'
    ],
    why: 'Sonraki cümle "Patients who stay active, by contrast" der; boşlukta dinlenmenin olumsuz sonucu verilmelidir. A şıkkı uzun süre dinlenmenin iyileşmeyi yavaşlattığını söyler.',
    trap: 'E şıkkı eski tavsiyeyi destekler; sonraki "by contrast" karşılaştırmasıyla ve yeni tavsiyeyle çelişir.',
    tactic: '"by contrast" → boşlukta karşıt grup/sonuç'
  },
  {
    q: 'The Vikings are usually remembered as violent raiders who attacked monasteries and coastal towns. _____ They established trade routes that stretched from North America to Baghdad, founded cities such as Dublin, and left a lasting influence on the languages of Britain and Scandinavia.',
    o: [
      'Yet they were also skilled traders, explorers and settlers.',
      'Their raids began at the end of the eighth century.',
      'Their ships were fast enough to cross the open sea and shallow enough to sail up rivers.',
      'Monks recorded the attacks in great detail in their chronicles.',
      'Many Viking warriors believed that dying in battle would bring them to Valhalla.'
    ],
    why: 'İlk cümle akıncı imajını, sonraki cümle ticaret, şehir kurma ve dil etkisini anlatır. A şıkkı "Yet they were also skilled traders, explorers and settlers" ile bu karşıt yönü başlatır.',
    trap: 'C şıkkı gemilerden söz eder ve ticaret yollarına bağlanıyor gibi görünür, ama ticaret, şehir kurma ve dil etkisini tanıtan genel cümle değildir.',
    tactic: 'Yaygın imaj → Yet → diğer yön'
  },
  {
    q: 'Many plants protect themselves from insects by producing toxic chemicals. Producing these chemicals, however, requires a great deal of energy. _____ Tomato plants, for instance, release a chemical signal when they are attacked, and neighbouring plants that detect it begin to produce their defensive compounds even before the insects reach them.',
    o: [
      'For this reason, some plants only switch on their defences when they receive a warning that danger is near.',
      'Insects destroy a large proportion of the world\'s crops every year.',
      'Some of these chemicals are used by humans as medicines.',
      'Tomatoes were first brought to Europe from South America in the sixteenth century.',
      'Plants are also able to grow towards the light.'
    ],
    why: 'Savunma kimyasalları enerji gerektirir; bu yüzden bazı bitkiler yalnızca tehlike uyarısı aldığında savunmayı açar. Sonraki domates örneği tam olarak bunu gösterir.',
    trap: 'C şıkkı kimyasallardan söz eder ama enerji sorunu ile uyarı sinyali örneği arasında köprü kurmaz.',
    tactic: 'Sorun (enerji) → For this reason → çözüm → örnek'
  },
  {
    q: 'In 1977, NASA launched two spacecraft, Voyager 1 and 2, to study the outer planets. _____ More than forty years later, both are still sending data back to Earth from beyond the edge of the solar system, making them the most distant human-made objects ever.',
    o: [
      'Their mission was originally expected to last only about five years.',
      'Jupiter is the largest planet in the solar system.',
      'The spacecraft carry a golden record with sounds and images from Earth.',
      'NASA was founded in 1958, shortly after the launch of Sputnik.',
      'Many people believed that the mission was too expensive.'
    ],
    why: 'Sonraki cümle "More than forty years later, both are still sending data" der; bu bilgi ancak görevin çok daha kısa sürmesinin beklendiği bilgisinden sonra anlam kazanır. A şıkkı beklenen beş yıllık süreyi verir.',
    trap: 'C şıkkı Voyager hakkında doğru ve ilginç bir bilgidir ama sonraki "still sending data" vurgusuna bağlanmaz.',
    tactic: 'Beklenti → beklenenin çok ötesinde sonuç'
  },
  {
    q: 'Libraries have changed enormously over the past twenty years. Many now lend laptops, run coding classes and offer help with job applications. _____ For people without internet access at home, the local library may be the only place where they can apply for jobs or government services online.',
    o: [
      'In this way, they have become important centres for reducing the digital divide.',
      'The oldest known library was founded in the ancient city of Nineveh.',
      'Some people believe that libraries will disappear as books become digital.',
      'Most librarians now need a university degree.',
      'Libraries in some countries are open twenty-four hours a day.'
    ],
    why: 'Kütüphanelerin yeni hizmetlerinden sonra, internet erişimi olmayanlar için önemleri anlatılır. A şıkkı "In this way ... digital divide" ile hizmetleri dijital uçurumu azaltma rolüne bağlar.',
    trap: 'C şıkkı kütüphanelerin geleceğiyle ilgilidir ama paragrafın olumlu akışına ters düşer.',
    tactic: 'Örnekler → In this way → genel sonuç'
  },
  {
    q: 'Human beings are remarkably poor at judging risk. We fear plane crashes and shark attacks, which are extremely rare, while we worry little about driving or unhealthy diets, which kill far more people. _____ Events that are dramatic and easy to imagine feel more dangerous than everyday risks that build up slowly over time.',
    o: [
      'One reason is that our sense of danger is shaped more by vivid images than by statistics.',
      'Air travel has become much safer over the past fifty years.',
      'Shark attacks receive a great deal of attention in the media.',
      'Many people take out insurance to protect themselves against accidents.',
      'Car accidents are one of the leading causes of death in many countries.'
    ],
    why: 'Sonraki cümle dramatik olayların daha tehlikeli hissettirdiğini açıklar; boşlukta bu yanılgının sebebi tanıtılmalıdır. A şıkkı "One reason is that..." ile sebebi verir.',
    trap: 'C şıkkı medyanın ilgisinden söz eder ve sebebe yakın görünür, ama sonraki cümledeki genel ilkeyi (canlı imgeler – istatistik) kurmaz.',
    tactic: 'Gözlem → One reason is → açıklama'
  },
  {
    q: 'Coral reefs cover less than one percent of the ocean floor. _____ They provide food and shelter for about a quarter of all marine species, protect coastlines from storms, and support the livelihoods of hundreds of millions of people.',
    o: [
      'Yet their importance is out of all proportion to their size.',
      'Most of them are found in shallow tropical waters.',
      'They are formed by tiny animals called polyps.',
      'Rising sea temperatures have caused widespread bleaching.',
      'The largest reef system in the world lies off the coast of Australia.'
    ],
    why: 'Küçük alan (yüzde birden az) ile sonraki cümlede sayılan büyük faydalar arasında zıtlık vardır. A şıkkı "Yet their importance is out of all proportion to their size" ile bu zıtlığı kurar.',
    trap: 'B, C ve E mercanlar hakkında doğru bilgilerdir ama küçük alan – büyük önem karşıtlığını kurmaz.',
    tactic: 'Küçük sayı → Yet → büyük önem'
  },
  {
    q: 'When the Ottoman architect Mimar Sinan designed the Süleymaniye Mosque in the sixteenth century, he faced a practical problem: the thousands of oil lamps used to light the building produced large amounts of soot. _____ The soot collected there was then mixed with other substances to make high-quality ink.',
    o: [
      'He solved it by designing the air currents inside the mosque so that the smoke flowed into a special room above the entrance.',
      'The mosque was completed in 1557 after seven years of construction.',
      'Sinan is believed to have designed more than three hundred buildings.',
      'Oil lamps were the main source of artificial light at the time.',
      'Many visitors consider the Süleymaniye to be Sinan\'s greatest work.'
    ],
    why: 'Önceki cümle bir sorunu (is), sonraki cümle "The soot collected there" ifadesiyle bir yere toplanan isi anlatır. A şıkkı sorunun çözümünü ve isin toplandığı odayı ("there") tanıtır.',
    trap: 'D şıkkı yağ lambalarından söz eder ama "there" zarfının göndereceği bir yer vermez.',
    tactic: 'Sorun → çözüm; "there" → boşlukta yer'
  },
  {
    q: 'Electric vehicles are often described as "zero-emission" cars. This description, however, can be misleading. _____ In countries that still generate most of their electricity from coal, an electric car may be responsible for almost as much carbon dioxide over its lifetime as an efficient petrol car.',
    o: [
      'Although they release no exhaust gases, the electricity used to charge them must be produced somewhere.',
      'Electric cars are much quieter than petrol and diesel vehicles.',
      'Many governments offer subsidies to people who buy electric cars.',
      'The first electric cars were built in the nineteenth century.',
      'Battery prices have fallen dramatically over the past decade.'
    ],
    why: '"misleading" (yanıltıcı) denmesinin sebebi açıklanmalı ve sonraki kömür örneğine zemin hazırlanmalıdır. A şıkkı egzoz gazı olmasa da elektriğin bir yerde üretildiğini söyler.',
    trap: 'B ve E şıkları elektrikli araçların avantajlarını verir; "yanıltıcı" eleştirisini açıklamaz.',
    tactic: 'Eleştiri (misleading) → gerekçe → örnek'
  }
];
