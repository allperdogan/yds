// Generated question bank: paragraph_completion (100 questions).
import { YdsQuestion } from '../../types';
import { shuffleQuestionList } from '../../services/optionShuffle';

const RAW_PARAGRAPH_COMPLETION_BANK: YdsQuestion[] = [
  {
    "id": "bank_pc_001",
    "type": "paragraph_completion",
    "question": "Honeybees communicate the location of food through a remarkable behaviour known as the waggle dance. [_____] The angle of the dance relative to vertical indicates the direction of the food in relation to the sun. Meanwhile, the duration of the waggle tells other bees how far away the source is.",
    "options": {
      "A": "A returning forager performs this dance on the vertical surface of the honeycomb.",
      "B": "Honeybees are also known to produce several different kinds of honey and wax.",
      "C": "Some scientists, however, doubt that bees can really see colours.",
      "D": "As a result, bees rarely travel more than a few metres from the hive.",
      "E": "Bee populations have declined sharply in many parts of the world recently."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Sonraki cümle 'the dance' ve 'vertical' der → dansın nerede yapıldığı",
    "trapWarning": "B ve E konu dışıdır; C şıkkı akışla bağlanmaz; D şıkkı sonraki 'how far away' bilgisiyle çelişir.",
    "explanation": "Sonraki cümle dansın 'dikey'e göre açısından söz eder; boşlukta dansın petek yüzeyinde yapıldığı söylenmelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_002",
    "type": "paragraph_completion",
    "question": "For decades, doctors advised patients with back pain to rest in bed. [_____] Studies now show that people who stay active usually recover faster than those who rest. As a result, most guidelines today recommend gentle movement and gradual return to normal activities.",
    "options": {
      "A": "Back pain is one of the most common reasons for missing work.",
      "B": "However, this advice has turned out to be largely mistaken.",
      "C": "Many patients, therefore, spent weeks lying in bed without complaint.",
      "D": "Back pain is more common in older people than in the young.",
      "E": "Doctors also prescribed painkillers to help patients sleep."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Eski görüş → yeni bulgu: 'However' geçişi",
    "trapWarning": "C şıkkı eski tavsiyeyi sürdürür; A, D ve E akışı yeni bulguya bağlamaz.",
    "explanation": "Eski tavsiyeden yeni bulguya geçmek için 'Ancak bu tavsiyenin büyük ölçüde yanlış olduğu anlaşıldı' gibi bir geçiş gerekir (B şıkkı)."
  },
  {
    "id": "bank_pc_003",
    "type": "paragraph_completion",
    "question": "The Great Wall of China was not built all at once. [_____] The most famous sections, however, date from the Ming dynasty, which ruled from 1368 to 1644. These later walls were made of brick and stone, unlike the earlier ones made mostly of earth.",
    "options": {
      "A": "It is often said, wrongly, that the wall can be seen from space with the naked eye.",
      "B": "Different dynasties built and rebuilt parts of it over about two thousand years.",
      "C": "Millions of tourists visit the wall every year from all over the world.",
      "D": "Its main purpose was to protect China from invaders coming from the north.",
      "E": "The wall was finally completed in a single decade by the first emperor."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'not built all at once' → farklı dönemler; 'however' → en ünlü kısımlar",
    "trapWarning": "E şıkkı ilk cümleyle çelişir; A ve C konu dışıdır; D şıkkı doğru bir bilgidir ama 'however, the most famous sections' karşıtlığını hazırlamaz.",
    "explanation": "İlk cümle 'tek seferde yapılmadı' der, sonraki cümle 'ancak en ünlü bölümler Ming dönemine ait' der; arada farklı hanedanların inşa ettiği söylenmelidir (B şıkkı)."
  },
  {
    "id": "bank_pc_004",
    "type": "paragraph_completion",
    "question": "Coffee is one of the most widely traded agricultural products in the world. [_____] Rising temperatures and changing rainfall patterns are making many of these areas less suitable for growing coffee. Some studies predict that half of the land currently used for coffee could become unsuitable by 2050.",
    "options": {
      "A": "Brazil is the largest producer, followed by Vietnam and Colombia.",
      "B": "Yet it grows well only in a narrow band of tropical regions with specific climates.",
      "C": "Coffee was first discovered in Ethiopia more than a thousand years ago, according to legend.",
      "D": "Many people drink several cups of coffee every day without any health problems.",
      "E": "The price of coffee on world markets has fallen steadily over the last decade."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'these areas' göndergesi",
    "trapWarning": "A şıkkı ülkeleri sayar ama iklim hassasiyetini vermez; C ve D konu dışıdır; E şıkkı akışla bağlanmaz.",
    "explanation": "Sonraki cümledeki 'these areas' göndergesi için boşlukta kahvenin belirli tropik bölgelerde yetiştiği söylenmelidir (B şıkkı)."
  },
  {
    "id": "bank_pc_005",
    "type": "paragraph_completion",
    "question": "Many people believe that goldfish have a memory span of only three seconds. [_____] In one experiment, goldfish were trained to push a lever to get food and remembered how to do it months later. Clearly, the popular belief is a myth.",
    "options": {
      "A": "Goldfish are among the most popular pets in the world, especially for children.",
      "B": "Research, however, shows that their memories last much longer than that.",
      "C": "This is why goldfish can live quite happily in small bowls for many years.",
      "D": "Goldfish can grow much larger than expected if they are kept in outdoor ponds.",
      "E": "Other kinds of fish are thought to have even shorter memories than goldfish."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Yaygın inanç → çürüten araştırma",
    "trapWarning": "C şıkkı inancı destekler; A, D ve E deney bulgusuna geçiş sağlamaz.",
    "explanation": "Yaygın inançtan onu çürüten deneye geçmek için 'Ancak araştırmalar hafızalarının çok daha uzun sürdüğünü gösteriyor' cümlesi gerekir (B şıkkı)."
  },
  {
    "id": "bank_pc_006",
    "type": "paragraph_completion",
    "question": "Urban gardens are becoming increasingly popular in cities around the world. [_____] They also bring neighbours together and give children a chance to learn where food comes from. Some cities now offer land and support to residents who want to start one.",
    "options": {
      "A": "Most urban gardens are located on the roofs of tall office and apartment buildings.",
      "B": "They provide fresh vegetables for people who might otherwise struggle to afford them.",
      "C": "Many city residents, however, have never grown any of their own food before.",
      "D": "Gardening has been shown to reduce stress and improve mood in older adults.",
      "E": "Some urban gardens have been closed down to make room for new housing projects."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'They also ...' → önceki cümlede ilk fayda",
    "trapWarning": "'also' bir önceki faydaya ek yapar. C ve E olumsuz bilgi verir; A şıkkı faydayı vermez; D şıkkı genel bir bilgidir, 'They' öznesiyle bağlanmaz.",
    "explanation": "Sonraki cümle 'They also...' ile ikinci faydayı sayar; boşlukta ilk fayda (taze sebze) verilmelidir (B şıkkı)."
  },
  {
    "id": "bank_pc_007",
    "type": "paragraph_completion",
    "question": "The Sahara has not always been a desert. [_____] Rock paintings from this period show people hunting giraffes and herding cattle in what are now some of the driest places on Earth. Around 5,000 years ago, however, the climate changed and the region dried up.",
    "options": {
      "A": "Today, it covers an area of land almost as large as the whole of the United States.",
      "B": "Between about 11,000 and 5,000 years ago, it was covered with grasslands and lakes.",
      "C": "Very few people live in the Sahara today because of its extreme heat and lack of water.",
      "D": "Sand dunes in some parts of the Sahara can reach heights of more than 150 metres.",
      "E": "The Sahara is expected to expand even further south as the global climate warms."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'this period' göndergesi + 'however' ile dönüş",
    "trapWarning": "A, C, D ve E bugünkü durumu anlatır; 'bu dönem' göndergesini ve yeşil geçmişi vermez.",
    "explanation": "Sonraki cümle 'bu döneme ait kaya resimleri' der; boşlukta Sahra'nın yeşil olduğu dönem verilmelidir (B şıkkı)."
  },
  {
    "id": "bank_pc_008",
    "type": "paragraph_completion",
    "question": "Sleep is essential for learning. [_____] This is why students who stay up all night before an exam often perform worse than those who get a good night's sleep. Even a short nap can help people remember new information.",
    "options": {
      "A": "Most adults need between seven and nine hours of sleep each night.",
      "B": "During sleep, the brain strengthens memories formed during the day.",
      "C": "Some people find it difficult to fall asleep after drinking coffee.",
      "D": "Children usually sleep more than adults, especially when they are young.",
      "E": "Many students prefer to study late at night when it is quiet."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'This is why ...' → mekanizma",
    "trapWarning": "A, C ve D uykuyla ilgili ama öğrenmeyle bağ kurmaz; E şıkkı akışı ters yöne çeker.",
    "explanation": "'Bu yüzden...' cümlesi uykunun öğrenmedeki rolünü açıklayan bir mekanizmaya dayanır: beyin uykuda anıları güçlendirir (B şıkkı)."
  },
  {
    "id": "bank_pc_009",
    "type": "paragraph_completion",
    "question": "Electric scooters have spread rapidly through cities in recent years. [_____] On the other hand, they have caused problems, such as accidents and scooters left blocking pavements. Some cities have responded by introducing speed limits and parking zones.",
    "options": {
      "A": "Supporters say they offer a cheap and clean way to make short trips.",
      "B": "Many cities have therefore banned them completely from their streets.",
      "C": "Most scooters are produced by a small number of large companies.",
      "D": "Electric scooters were first invented more than a century ago.",
      "E": "Riders must be at least sixteen years old in most countries."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'On the other hand' → önce olumlu taraf",
    "trapWarning": "B şıkkı 'on the other hand' ile gelen sorunlardan önce yasak bildirir; C, D ve E olumlu-olumsuz karşıtlığını kurmaz.",
    "explanation": "'On the other hand' olumsuz tarafa geçer; boşlukta olumlu taraf (ucuz ve temiz ulaşım) verilmelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_010",
    "type": "paragraph_completion",
    "question": "Octopuses are known for their intelligence. [_____] For example, they can open jars, escape from tanks and recognise individual human faces. Some researchers even believe they can use tools.",
    "options": {
      "A": "They have eight long arms, each of which is lined with hundreds of strong suckers.",
      "B": "They are capable of solving problems that challenge many other animals.",
      "C": "Most octopuses live for only one or two years, which is surprisingly short.",
      "D": "Octopuses are found in every ocean in the world, from the tropics to the poles.",
      "E": "They are able to change colour very quickly in order to hide from predators."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'For example' → genelleme",
    "trapWarning": "A, C, D ve E doğru bilgiler verir ama 'örneğin kavanoz açabilirler' örneklerinin genellemesi değildir.",
    "explanation": "'For example' ile verilen örnekler problem çözme yeteneğini gösterir; boşlukta bu genelleme yapılmalıdır (B şıkkı)."
  },
  {
    "id": "bank_pc_011",
    "type": "paragraph_completion",
    "question": "The first vaccines were developed in the late eighteenth century. [_____] He noticed that milkmaids who had caught cowpox did not get smallpox, a much more dangerous disease. He then deliberately infected a boy with cowpox and showed that he was protected against smallpox.",
    "options": {
      "A": "Vaccines have since saved hundreds of millions of lives in every part of the world.",
      "B": "The English doctor Edward Jenner is usually credited with this achievement.",
      "C": "Smallpox was finally eradicated in 1980 after a global campaign.",
      "D": "Some people were afraid that vaccines would turn them into cows.",
      "E": "Today, new vaccines can be developed and tested in just a few years."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'He' göndergesi",
    "trapWarning": "A, C, D ve E doğru bilgiler verir ama sonraki cümledeki 'He' zamirinin göndergesini sağlamaz.",
    "explanation": "Sonraki cümle 'He noticed' ile başlar; boşlukta bir kişi (Edward Jenner) tanıtılmalıdır (B şıkkı)."
  },
  {
    "id": "bank_pc_012",
    "type": "paragraph_completion",
    "question": "In many countries, the population is getting older. [_____] This means that fewer workers will have to support more retired people through taxes. Governments are therefore considering raising the retirement age.",
    "options": {
      "A": "Older people are generally healthier today than in the past.",
      "B": "People are living longer, while fewer babies are being born.",
      "C": "Many retired people spend their time travelling abroad.",
      "D": "Young people today are less likely to own their own homes.",
      "E": "Some older people continue to work after retirement age."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'This means ...' → neden",
    "trapWarning": "A, C ve E yaşlılarla ilgilidir ama işçi-emekli oranını açıklamaz; D şıkkı konu dışıdır.",
    "explanation": "'Bu, daha az çalışanın daha çok emekliyi desteklemesi demek' cümlesi, uzayan ömür ve düşen doğum oranına dayanır (B şıkkı)."
  },
  {
    "id": "bank_pc_013",
    "type": "paragraph_completion",
    "question": "Most of the world's languages have never been written down. [_____] When the last speakers of such languages die, their knowledge of plants, history and traditions may disappear forever. Linguists are therefore racing to record as many endangered languages as possible.",
    "options": {
      "A": "English is now spoken by more than a billion people worldwide.",
      "B": "They are passed on only by speaking, from one generation to the next.",
      "C": "Learning a second language can improve memory and attention.",
      "D": "Many languages share words that come from Latin or Greek.",
      "E": "Written languages first appeared about five thousand years ago."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'such languages' göndergesi + kayıp riski",
    "trapWarning": "A, C, D ve E dil hakkında genel bilgiler verir; sözlü aktarımı ve kaybolma riskini kurmaz.",
    "explanation": "Bu diller yalnızca konuşarak aktarıldığı için son konuşucular ölünce bilgi kaybolur (B şıkkı)."
  },
  {
    "id": "bank_pc_014",
    "type": "paragraph_completion",
    "question": "Plastic bags take hundreds of years to break down. [_____] Animals such as turtles often mistake them for food, which can kill them. For this reason, many countries have banned or taxed single-use bags.",
    "options": {
      "A": "Paper bags, by contrast, require more energy to produce.",
      "B": "Many of them end up in rivers and oceans.",
      "C": "Plastic was first produced on a large scale in the 1950s.",
      "D": "Some shops give customers a discount for bringing their own bags.",
      "E": "Recycling plastic bags is cheaper than making new ones."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Okyanus → kaplumbağa bağı",
    "trapWarning": "A ve E farklı karşılaştırmalara geçer; C ve D akışı bozar; hiçbiri hayvanların poşetle nasıl karşılaştığını açıklamaz.",
    "explanation": "Kaplumbağaların poşetleri yiyecek sanması için poşetlerin denizlere ulaşması gerekir (B şıkkı)."
  },
  {
    "id": "bank_pc_015",
    "type": "paragraph_completion",
    "question": "Some scientists believe that the dinosaurs were wiped out by a huge asteroid. [_____] This crater, more than 150 kilometres wide, dates from about 66 million years ago, exactly when the dinosaurs disappeared. Many researchers see it as the strongest evidence for the theory.",
    "options": {
      "A": "Others argue that massive volcanic eruptions were responsible.",
      "B": "A giant crater discovered in Mexico supports this idea.",
      "C": "Dinosaurs lived on Earth for more than 150 million years.",
      "D": "Birds are now considered to be living dinosaurs.",
      "E": "Asteroids still pass close to Earth from time to time."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'This crater' göndergesi",
    "trapWarning": "A şıkkı ince tuzaktır: başka bir görüş verir ama krater göndergesini kurmaz; C, D ve E de bağlanmaz.",
    "explanation": "Sonraki cümle 'Bu krater' der; boşlukta Meksika'da bulunan dev krater tanıtılmalıdır (B şıkkı)."
  },
  {
    "id": "bank_pc_016",
    "type": "paragraph_completion",
    "question": "Learning to play a musical instrument benefits children in many ways. [_____] In addition, playing in a group teaches them to listen to others and work as a team. These skills can be useful throughout their lives.",
    "options": {
      "A": "Most children prefer playing sports to practising music.",
      "B": "It improves their concentration and memory, for example.",
      "C": "Musical instruments can be very expensive for families.",
      "D": "The piano is the most popular instrument among children.",
      "E": "Some children give up music lessons after a few months."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'In addition' → ilk fayda",
    "trapWarning": "A, C ve E olumsuz/farklı bilgiler verir; D şıkkı fayda vermez.",
    "explanation": "'In addition' ikinci faydayı ekler; boşlukta ilk fayda (konsantrasyon ve hafıza) verilmelidir (B şıkkı)."
  },
  {
    "id": "bank_pc_017",
    "type": "paragraph_completion",
    "question": "The Amazon rainforest is often called the lungs of the planet. [_____] However, recent studies suggest that parts of it now release more carbon dioxide than they absorb. Scientists blame deforestation and fires for this change.",
    "options": {
      "A": "It is home to millions of species of plants and animals.",
      "B": "This is because its trees absorb huge amounts of carbon dioxide.",
      "C": "It covers parts of nine countries in South America.",
      "D": "Many indigenous peoples have lived there for thousands of years.",
      "E": "The Amazon River is the largest river in the world by volume."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'lungs of the planet' açıklaması + 'However' karşıtlığı",
    "trapWarning": "A, C, D ve E doğru bilgilerdir ama 'However ... release more carbon dioxide' karşıtlığını hazırlamaz.",
    "explanation": "'However' ile karbon salımı karşıtlığı kurulduğuna göre, önce ağaçların karbon emdiği söylenmelidir (B şıkkı)."
  },
  {
    "id": "bank_pc_018",
    "type": "paragraph_completion",
    "question": "Early humans began farming about 12,000 years ago. [_____] As a result, they built permanent villages, which later grew into towns and cities. Farming also made it possible for some people to specialise in other jobs.",
    "options": {
      "A": "Before that, they had lived as hunters and gatherers.",
      "B": "This allowed them to settle in one place instead of moving around.",
      "C": "Wheat and barley were among the first crops to be grown.",
      "D": "Some groups continued to hunt and gather for thousands of years.",
      "E": "Farming was hard work and often led to poorer health."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'As a result, they built permanent villages'",
    "trapWarning": "A şıkkı geçmişi anlatır ama sonuca bağlanmaz; C, D ve E kalıcı köylere giden nedeni vermez.",
    "explanation": "'Sonuç olarak kalıcı köyler kurdular' cümlesinin nedeni tarımın yerleşik yaşama izin vermesidir (B şıkkı)."
  },
  {
    "id": "bank_pc_019",
    "type": "paragraph_completion",
    "question": "Tea was first drunk in China thousands of years ago. [_____] It was not until the seventeenth century that the drink reached Europe. There, it quickly became popular, especially in Britain.",
    "options": {
      "A": "Today, more tea is drunk in Turkey per person than anywhere else.",
      "B": "For centuries, it remained largely unknown outside Asia.",
      "C": "Green tea contains less caffeine than black tea.",
      "D": "Tea plants grow best in warm climates with plenty of rain.",
      "E": "Many people add milk or sugar to their tea."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'It was not until the 17th century' → öncesinde bilinmiyordu",
    "trapWarning": "A, C, D ve E çay hakkında doğru bilgilerdir ama zaman akışını kurmaz.",
    "explanation": "'Ancak 17. yüzyılda Avrupa'ya ulaştı' cümlesine, çayın yüzyıllar boyunca Asya dışında bilinmediği söylenerek geçilir (B şıkkı)."
  },
  {
    "id": "bank_pc_020",
    "type": "paragraph_completion",
    "question": "Many animals can sense earthquakes before humans do. [_____] Scientists think they may detect small vibrations or changes in the air that people cannot notice. Researchers hope this ability could one day help predict earthquakes.",
    "options": {
      "A": "Earthquakes are most common along the edges of the large tectonic plates.",
      "B": "Dogs, for example, have been seen behaving strangely hours before a quake.",
      "C": "Most earthquakes are too small for people to feel without special equipment.",
      "D": "Japan has one of the best earthquake warning systems in the world.",
      "E": "Modern buildings can be designed to survive even very strong earthquakes."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Genelleme → örnek → açıklama",
    "trapWarning": "A, C, D ve E deprem hakkında bilgiler verir ama hayvanların depremi hissetmesine örnek vermez.",
    "explanation": "Genel iddiadan sonra bir örnek (köpeklerin tuhaf davranması) gelmeli, ardından açıklama yapılmalıdır (B şıkkı)."
  },
  {
    "id": "bank_pc_021",
    "type": "paragraph_completion",
    "question": "Fast food has become a major part of the modern diet. [_____] Eating it regularly has been linked to obesity, heart disease and diabetes. Health experts recommend limiting it to an occasional treat.",
    "options": {
      "A": "It is convenient, cheap and available almost everywhere.",
      "B": "It is often high in salt, sugar and unhealthy fats.",
      "C": "The first fast-food restaurants opened in the United States.",
      "D": "Many fast-food chains now offer salads and fruit.",
      "E": "Young people eat more fast food than older adults."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Hastalıklara bağlanan neden",
    "trapWarning": "A şıkkı yaygınlığın nedenini verir, sağlık riskini değil; D şıkkı tersi yöndedir; C ve E bağlanmaz.",
    "explanation": "Hastalıklarla bağlantının nedeni fast food'un tuz, şeker ve yağ bakımından zengin olmasıdır (B şıkkı)."
  },
  {
    "id": "bank_pc_022",
    "type": "paragraph_completion",
    "question": "The invention of the printing press in the fifteenth century transformed Europe. [_____] As a result, ideas could spread much faster and to many more people than before. This helped bring about major religious and scientific changes.",
    "options": {
      "A": "Before then, books had to be copied by hand, which took a long time.",
      "B": "Books suddenly became much cheaper and easier to produce.",
      "C": "Johannes Gutenberg was a goldsmith from the city of Mainz.",
      "D": "Many people at that time could not read or write.",
      "E": "The printing press had been invented much earlier in China."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'As a result, ideas could spread faster'",
    "trapWarning": "A şıkkı önceki durumu anlatır ama 'as a result' ile doğrudan bağlanmaz; C, D ve E fikirlerin yayılmasını açıklamaz.",
    "explanation": "Fikirlerin daha hızlı yayılması, kitapların ucuzlayıp kolay üretilmesinin sonucudur (B şıkkı)."
  },
  {
    "id": "bank_pc_023",
    "type": "paragraph_completion",
    "question": "Wind farms are one of the fastest-growing sources of energy. [_____] Critics, however, argue that they spoil the landscape and can harm birds. Some new designs aim to reduce these problems.",
    "options": {
      "A": "The largest and most productive wind farms are now located out at sea.",
      "B": "They produce electricity without releasing greenhouse gases.",
      "C": "Wind speed varies greatly from one season to another.",
      "D": "Wind power was used to grind grain and pump water for many centuries.",
      "E": "Many countries plan to double their wind capacity."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Critics, however' → önce bir avantaj",
    "trapWarning": "A, C, D ve E bilgi verir ama eleştirmenlerin karşı çıktığı bir avantaj sunmaz.",
    "explanation": "'Critics, however' olumsuz görüşe geçer; boşlukta bir avantaj (sera gazı salmadan elektrik) verilmelidir (B şıkkı)."
  },
  {
    "id": "bank_pc_024",
    "type": "paragraph_completion",
    "question": "Bats are the only mammals capable of true flight. [_____] They make high-pitched sounds and listen to the echoes to find insects in complete darkness. This system is so precise that they can detect objects as thin as a human hair.",
    "options": {
      "A": "There are more than 1,400 different species of bats living in the world today.",
      "B": "Many of them hunt at night using a technique called echolocation.",
      "C": "Some people are afraid of bats because of old myths.",
      "D": "Bats usually sleep upside down during the day in caves or hollow trees.",
      "E": "Fruit bats play an important role in spreading seeds."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'This system' + sesle avlanma",
    "trapWarning": "A, C, D ve E yarasalar hakkında doğru bilgilerdir ama sonraki cümlenin anlattığı ekolokasyon sistemini tanıtmaz.",
    "explanation": "Sonraki cümle ses ve yankı ile avlanmayı anlatır; boşlukta ekolokasyon tanıtılmalıdır (B şıkkı)."
  },
  {
    "id": "bank_pc_025",
    "type": "paragraph_completion",
    "question": "Reading on screens has become more common than reading on paper. [_____] Some studies suggest that people remember less of what they read on screens. Researchers think this may be because readers tend to skim rather than read carefully.",
    "options": {
      "A": "Many people now read the news on their phones every morning.",
      "B": "But is it as good for understanding and memory?",
      "C": "Paper books are still popular as gifts.",
      "D": "E-readers are lighter and can hold thousands of books.",
      "E": "Libraries now lend e-books as well as printed ones."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Soru cümlesiyle konu sorgulaması",
    "trapWarning": "A ve D ekran okumayı destekler, karşıtlık kurmaz; C ve E konu dışıdır.",
    "explanation": "Ekran okumanın yaygınlığından olası olumsuz etkilerine geçmek için 'Ama anlama ve hafıza için aynı derecede iyi mi?' sorusu gerekir (B şıkkı)."
  },
  {
    "id": "bank_pc_026",
    "type": "paragraph_completion",
    "question": "Volcanoes are usually seen as purely destructive forces. [_____] For instance, volcanic ash breaks down into some of the most fertile soils on Earth. That is why farmers have lived on the slopes of volcanoes for thousands of years, despite the danger.",
    "options": {
      "A": "Yet they can also bring important benefits to the people who live near them.",
      "B": "Some of the deadliest eruptions in history killed tens of thousands of people.",
      "C": "Scientists use satellites to monitor active volcanoes around the world today.",
      "D": "Most of the world's active volcanoes are located around the Pacific Ocean.",
      "E": "Eruptions can also release gases that cool the climate for several years."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'For instance' → olumlu bir genelleme",
    "trapWarning": "B şıkkı yıkıcılığı sürdürür; C ve D konuyla ilgili ama faydaya geçmez; E şıkkı bir etki verir ama verimli toprak örneğine bağlanmaz.",
    "explanation": "'Örneğin volkanik kül verimli toprak oluşturur' örneği, volkanların fayda da sağladığı genellemesine dayanır (A şıkkı)."
  },
  {
    "id": "bank_pc_027",
    "type": "paragraph_completion",
    "question": "Libraries have changed a great deal in recent decades. [_____] Many now offer free internet access, computer classes and spaces where people can work together. In this way, they continue to serve their communities in new ways.",
    "options": {
      "A": "They are no longer just places for borrowing books.",
      "B": "Most libraries were built in the nineteenth century.",
      "C": "Many libraries have closed because of budget cuts.",
      "D": "Some people prefer to buy books rather than borrow them.",
      "E": "The largest library in the world is in Washington."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Değişim → yeni hizmetler",
    "trapWarning": "B, C, D ve E kütüphanelerin yeni hizmetlerine geçişi sağlamaz; C şıkkı ayrıca son cümleyle çelişir.",
    "explanation": "Kütüphanelerin değiştiği ve artık sadece kitap ödünç alınan yerler olmadığı söylenince yeni hizmetler sayılabilir (A şıkkı)."
  },
  {
    "id": "bank_pc_028",
    "type": "paragraph_completion",
    "question": "Many people think that deserts are lifeless places. [_____] Camels, for instance, can go for weeks without water, while some desert plants store water in their thick stems. These adaptations allow life to thrive in extreme conditions.",
    "options": {
      "A": "In fact, they are home to many plants and animals with remarkable adaptations.",
      "B": "Deserts cover about a third of the Earth's land surface, according to most estimates.",
      "C": "The temperature in some deserts can drop below zero at night in winter.",
      "D": "Many deserts are growing larger because of climate change and overgrazing.",
      "E": "The Atacama Desert in Chile is one of the driest places on the planet."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Yaygın yanlış → düzeltme → örnekler",
    "trapWarning": "B, C, D ve E çöller hakkında doğru bilgilerdir ama 'for instance' ile verilen uyum örneklerine zemin hazırlamaz.",
    "explanation": "'Aslında çöller dikkat çekici uyumlara sahip birçok canlıya ev sahipliği yapar' cümlesi deve ve bitki örneklerine bağlanır (A şıkkı)."
  },
  {
    "id": "bank_pc_029",
    "type": "paragraph_completion",
    "question": "Laughter is good for our health. [_____] It also strengthens social bonds by helping people feel closer to each other. Some hospitals even use laughter therapy to help patients recover.",
    "options": {
      "A": "It reduces stress hormones and can even help the body fight infection.",
      "B": "Babies usually begin to laugh when they are about four months old.",
      "C": "Some people laugh much more easily than others, for reasons unknown.",
      "D": "Animals such as apes and rats also seem to laugh when they are tickled.",
      "E": "People laugh far more often when they are with others than when alone."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'It also ...' → ilk sağlık faydası",
    "trapWarning": "B, C ve D kahkaha hakkında bilgiler verir ama sağlık faydası değildir; E şıkkı sosyal yönü erken verir ve 'also' ile tekrar eder.",
    "explanation": "'Ayrıca sosyal bağları güçlendirir' cümlesinden önce ilk sağlık faydası (stres hormonlarını azaltma) verilmelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_030",
    "type": "paragraph_completion",
    "question": "The Titanic sank in 1912 after hitting an iceberg. [_____] As a result, more than 1,500 people died in the freezing water. After the disaster, new laws required ships to carry enough lifeboats for everyone on board.",
    "options": {
      "A": "There were not enough lifeboats for all the passengers and crew.",
      "B": "The ship was considered to be the safest of its time.",
      "C": "The ship was on its first voyage from England to New York.",
      "D": "Many wealthy and famous people were travelling on board.",
      "E": "The wreck was finally discovered on the ocean floor in 1985."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'As a result ... died' + 'new laws ... lifeboats'",
    "trapWarning": "B, C ve D doğru bilgilerdir ama ölümlerin nedenini ve cankurtaran sandalı yasasını açıklamaz; E şıkkı zaman akışını bozar.",
    "explanation": "Ölümlerin nedeni ve sonraki yasa, yeterli cankurtaran sandalının olmamasına bağlanır (A şıkkı)."
  },
  {
    "id": "bank_pc_031",
    "type": "paragraph_completion",
    "question": "Recycling is often seen as the best way to deal with waste. [_____] Producing less waste in the first place, for example by buying fewer products and reusing items, is far more effective. Recycling should therefore be the last option, not the first.",
    "options": {
      "A": "However, many experts argue that reducing and reusing are even more important.",
      "B": "Most cities now collect paper, glass and plastic separately from homes.",
      "C": "Recycling aluminium cans saves a great deal of energy compared with making new ones.",
      "D": "Some materials, such as glass, can be recycled again and again without losing quality.",
      "E": "Many people feel good about themselves when they put things in the recycling bin."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Yaygın görüş → uzman itirazı",
    "trapWarning": "B, C, D ve E geri dönüşümü destekler veya tarafsızdır; 'far more effective' karşılaştırmasına zemin hazırlamaz.",
    "explanation": "Geri dönüşümün en iyi yol sanıldığından, azaltma ve yeniden kullanmanın daha önemli olduğuna geçmek için 'However' cümlesi gerekir (A şıkkı)."
  },
  {
    "id": "bank_pc_032",
    "type": "paragraph_completion",
    "question": "The human body contains trillions of bacteria. [_____] For example, gut bacteria help us digest food and produce certain vitamins. They also play a role in protecting us from harmful germs.",
    "options": {
      "A": "Far from being harmful, most of them are actually essential for our health.",
      "B": "Some bacteria cause serious diseases such as tuberculosis and cholera.",
      "C": "Antibiotics kill bacteria but can also cause serious side effects.",
      "D": "Bacteria were first observed under a microscope in the seventeenth century.",
      "E": "Bacteria reproduce very quickly, sometimes doubling every twenty minutes."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'For example' → faydalı bakteri genellemesi",
    "trapWarning": "B şıkkı ince tuzaktır: bakterilerin zararından bahseder, faydalı örneklere zıt düşer; C, D ve E konuyu farklı yöne çeker.",
    "explanation": "Faydalı bakteri örneklerinden önce bakterilerin çoğunun sağlık için gerekli olduğu söylenmelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_033",
    "type": "paragraph_completion",
    "question": "For most of history, people did not know their exact age. [_____] It was only when governments began to keep birth records that people started to celebrate birthdays regularly. Today, a birthday is one of the most common celebrations in the world.",
    "options": {
      "A": "Birth dates were rarely recorded, and calendars differed from place to place.",
      "B": "Ancient Egyptians celebrated the birthdays of their kings as gods.",
      "C": "Birthday cakes with candles became popular in Germany in the 1700s.",
      "D": "Many people today celebrate their birthdays with a party.",
      "E": "Some cultures celebrate the day of a person's saint instead of their birthday."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'It was only when governments began to keep birth records'",
    "trapWarning": "B, C, D ve E doğum günü kutlamaları hakkında bilgi verir ama yaşın bilinmemesinin nedenini açıklamaz.",
    "explanation": "İnsanların yaşlarını bilmemesinin nedeni doğum tarihlerinin kaydedilmemesidir; sonraki cümle bunu nüfus kayıtlarıyla karşılaştırır (A şıkkı)."
  },
  {
    "id": "bank_pc_034",
    "type": "paragraph_completion",
    "question": "Bamboo is one of the fastest-growing plants on Earth. [_____] Because of this, it can be harvested again and again without destroying the forest. Many designers now see it as an environmentally friendly alternative to wood.",
    "options": {
      "A": "Some species can grow almost a metre in a single day.",
      "B": "Pandas feed almost entirely on bamboo leaves and shoots.",
      "C": "Bamboo is used in many traditional Asian dishes.",
      "D": "It grows mainly in tropical and subtropical regions.",
      "E": "Bamboo flowers only once every few decades."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Because of this' → büyüme hızının kanıtı",
    "trapWarning": "B, C, D ve E bambu hakkında bilgiler verir ama tekrar tekrar hasat edilebilmesini açıklamaz.",
    "explanation": "Bambunun tekrar hasat edilebilmesi çok hızlı büyümesinden kaynaklanır: bazı türler bir günde neredeyse bir metre uzar (A şıkkı)."
  },
  {
    "id": "bank_pc_035",
    "type": "paragraph_completion",
    "question": "Many cities are trying to reduce the number of cars on their streets. [_____] Others have introduced congestion charges, which force drivers to pay to enter the city centre. These measures have reduced traffic and improved air quality in several cities.",
    "options": {
      "A": "Some have built more bicycle lanes and improved public transport.",
      "B": "Cars are responsible for a large share of air pollution in cities.",
      "C": "Many people still prefer to drive because it is more convenient.",
      "D": "The number of cars in the world has doubled since 1990.",
      "E": "Electric cars produce no exhaust fumes when driven."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Some ... Others ...' yapısı",
    "trapWarning": "B, C, D ve E arabalarla ilgili ama 'Others have introduced' yapısının ilk ayağını vermez.",
    "explanation": "'Others have introduced' ifadesi 'Some have...' ile başlayan bir önceki cümleyi gerektirir (A şıkkı)."
  },
  {
    "id": "bank_pc_036",
    "type": "paragraph_completion",
    "question": "Chess was once considered the ultimate test of human intelligence. [_____] Since then, computers have become so powerful that even world champions cannot beat them. Yet chess remains as popular as ever among human players.",
    "options": {
      "A": "In 1997, however, a computer called Deep Blue defeated the world champion.",
      "B": "The game is thought to have originated in India about 1,500 years ago.",
      "C": "Many schools now teach chess to improve children's thinking skills.",
      "D": "There are more possible chess games than atoms in the universe.",
      "E": "Grandmasters usually train for several hours every single day."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Since then' → bir dönüm noktası",
    "trapWarning": "B, C, D ve E satranç hakkında bilgi verir ama 'since then' ile başlayan bilgisayar üstünlüğüne zemin hazırlamaz.",
    "explanation": "'O zamandan beri bilgisayarlar...' ifadesi, bilgisayarın dünya şampiyonunu ilk yendiği an olan 1997'ye bağlanır (A şıkkı)."
  },
  {
    "id": "bank_pc_037",
    "type": "paragraph_completion",
    "question": "Social media allows people to stay in touch with friends and family around the world. [_____] Studies have linked heavy use to anxiety, depression and poor sleep, especially among teenagers. Experts advise setting limits on screen time.",
    "options": {
      "A": "However, it may also have negative effects on mental health.",
      "B": "Facebook was founded in 2004 by a group of university students.",
      "C": "Many businesses use social media to advertise their products.",
      "D": "Most social media platforms are free to use for everyone.",
      "E": "Some older people find social media difficult to understand."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Olumlu → olumsuz geçişi",
    "trapWarning": "B, C, D ve E sosyal medya hakkında bilgiler verir ama ruh sağlığı sorunlarına geçişi sağlamaz.",
    "explanation": "Olumlu yönden ruh sağlığına olumsuz etkilere geçmek için 'However' cümlesi gerekir (A şıkkı)."
  },
  {
    "id": "bank_pc_038",
    "type": "paragraph_completion",
    "question": "Some animals have been found to use tools. [_____] Sea otters, for instance, use stones to break open shells, and some birds use sticks to pull insects out of trees. These discoveries have changed the way we think about animal intelligence.",
    "options": {
      "A": "This was once believed to be something only humans could do.",
      "B": "Chimpanzees share about 98 percent of their DNA with humans.",
      "C": "Most animals rely on their instincts rather than learning.",
      "D": "Some animals can recognise themselves in a mirror.",
      "E": "Many animals communicate with each other through sounds."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'These discoveries have changed the way we think'",
    "trapWarning": "B, C, D ve E hayvan zekasıyla ilgilidir ama keşiflerin neden düşünce değiştirdiğini açıklamaz.",
    "explanation": "Keşiflerin düşüncemizi değiştirmesi, alet kullanımının bir zamanlar yalnızca insana özgü sanılmasından kaynaklanır (A şıkkı)."
  },
  {
    "id": "bank_pc_039",
    "type": "paragraph_completion",
    "question": "Ancient Romans built roads across their entire empire. [_____] Some of these roads are still in use today, more than two thousand years later. Their construction methods were so effective that engineers still study them.",
    "options": {
      "A": "They were built with several layers of stone and gravel, making them very durable.",
      "B": "The roads allowed the Roman army to move quickly from one region to another.",
      "C": "Rome was said to be at the centre of a vast network of roads, hence the saying.",
      "D": "Many Roman roads were later covered over by modern roads and motorways.",
      "E": "Travellers often stayed overnight at inns that were built along the roads."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'still in use today' → dayanıklılığın nedeni",
    "trapWarning": "B, C, D ve E Roma yolları hakkında doğru bilgilerdir ama dayanıklılığı ve inşa yöntemini açıklamaz.",
    "explanation": "Yolların bugün hâlâ kullanılması ve inşa yöntemlerinin incelenmesi, katmanlı dayanıklı yapılarına bağlanır (A şıkkı)."
  },
  {
    "id": "bank_pc_040",
    "type": "paragraph_completion",
    "question": "Many people find it difficult to give up bad habits. [_____] For example, someone who wants to stop eating sweets might replace them with fruit. Over time, the new habit becomes as automatic as the old one.",
    "options": {
      "A": "Experts suggest replacing a bad habit with a healthier one.",
      "B": "Most habits are formed during childhood and adolescence.",
      "C": "Some habits, like smoking, can be very harmful to health.",
      "D": "It takes about two months, on average, to form a new habit.",
      "E": "Many people make New Year's resolutions that they soon break."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'For example ... replace' → öneri",
    "trapWarning": "B, C, D ve E alışkanlıklar hakkında bilgi verir ama 'yerine koyma' örneğinin genellemesini yapmaz.",
    "explanation": "Tatlı yerine meyve örneği, kötü alışkanlığı sağlıklı biriyle değiştirme önerisinin örneğidir (A şıkkı)."
  },
  {
    "id": "bank_pc_041",
    "type": "paragraph_completion",
    "question": "The Dead Sea is one of the saltiest bodies of water in the world. [_____] This is why people can float on its surface easily without swimming. The high salt content also means that almost no fish or plants can live in it.",
    "options": {
      "A": "Its water is so dense that the human body is pushed upwards.",
      "B": "It lies on the border between Jordan and Israel.",
      "C": "Its surface is more than 400 metres below sea level.",
      "D": "The Dead Sea has been shrinking rapidly in recent decades.",
      "E": "Many tourists visit it for its mud, which is said to be healthy."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'This is why people can float'",
    "trapWarning": "B, C, D ve E Lut Gölü hakkında doğru bilgilerdir ama yüzebilmenin nedenini açıklamaz.",
    "explanation": "İnsanların kolayca yüzebilmesinin nedeni suyun yoğunluğunun bedeni yukarı itmesidir (A şıkkı)."
  },
  {
    "id": "bank_pc_042",
    "type": "paragraph_completion",
    "question": "For centuries, sailors suffered from a disease called scurvy. [_____] In the eighteenth century, a doctor found that eating citrus fruits could prevent it. We now know that scurvy is caused by a lack of vitamin C.",
    "options": {
      "A": "It caused bleeding gums, weakness and often death on long voyages.",
      "B": "Most ships at that time carried more than a hundred sailors.",
      "C": "Sailors in those days were often away from their homes and families for several years.",
      "D": "Scurvy has almost completely disappeared in the modern world, except in rare cases.",
      "E": "Many sailors were also afraid of storms and pirates."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Hastalığın tanımı → çözüm → neden",
    "trapWarning": "B, C ve E denizcilik hakkında bilgi verir; D şıkkı zaman akışını bozar.",
    "explanation": "Hastalığın tanıtılmasından sonra belirtileri anlatılmalı, ardından çözüm gelmelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_043",
    "type": "paragraph_completion",
    "question": "Not all plastics are the same. [_____] Others, however, cannot be recycled at all and usually end up in landfills or the ocean. Consumers are encouraged to check the recycling number before buying plastic products.",
    "options": {
      "A": "Some types can be recycled easily into new products.",
      "B": "Plastic was invented in the early twentieth century.",
      "C": "Most plastic is made from oil and natural gas.",
      "D": "Plastic bags are banned in many countries today.",
      "E": "Microplastics have been found in drinking water."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Others, however, cannot be recycled'",
    "trapWarning": "B, C, D ve E plastik hakkında bilgiler verir ama 'Others' ile karşılaştırılan ilk grubu vermez.",
    "explanation": "'Diğerleri ise geri dönüştürülemez' ifadesi, bazı türlerin kolayca geri dönüştürülebildiğini söyleyen bir cümle gerektirir (A şıkkı)."
  },
  {
    "id": "bank_pc_044",
    "type": "paragraph_completion",
    "question": "Mount Everest is the highest mountain in the world. [_____] Climbers therefore need to spend weeks adjusting to the altitude before trying to reach the top. Even so, many suffer from altitude sickness.",
    "options": {
      "A": "At its summit, the air contains only about a third of the oxygen at sea level.",
      "B": "It was first climbed by Edmund Hillary and Tenzing Norgay in May 1953.",
      "C": "Hundreds of people from all over the world try to climb the mountain every year.",
      "D": "The mountain lies on the border between Nepal and China.",
      "E": "Climbing Everest has become very expensive and crowded in recent years."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'therefore ... adjusting to the altitude'",
    "trapWarning": "B, C, D ve E Everest hakkında doğru bilgilerdir ama uyum sağlama ihtiyacının nedenini vermez.",
    "explanation": "Tırmanıcıların haftalarca irtifaya alışması gerekmesinin nedeni zirvedeki oksijenin çok az olmasıdır (A şıkkı)."
  },
  {
    "id": "bank_pc_045",
    "type": "paragraph_completion",
    "question": "Dogs were the first animals to be domesticated by humans. [_____] Over thousands of years, humans bred them for different purposes, such as hunting, herding and guarding. This explains the huge variety of dog breeds we see today.",
    "options": {
      "A": "They are believed to be descended from wolves that lived near human camps.",
      "B": "Dogs can understand more than a hundred words, according to some studies.",
      "C": "Many people today consider their dogs to be full members of their family.",
      "D": "Dogs have a much better sense of smell than humans, perhaps 10,000 times better.",
      "E": "Some rare dog breeds are now at risk of disappearing completely."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Köken → evrim → çeşitlilik",
    "trapWarning": "B, C, D ve E köpekler hakkında bilgi verir ama evcilleştirme sürecine bağlanmaz.",
    "explanation": "Evcilleştirmeden sonra kökene (insan kamplarının yanındaki kurtlar) değinilip ardından üretim sürecine geçilir (A şıkkı)."
  },
  {
    "id": "bank_pc_046",
    "type": "paragraph_completion",
    "question": "Earthquakes cannot yet be predicted accurately. [_____] Japan, for example, has a system that sends alerts to phones a few seconds before strong shaking begins. Those seconds can give people time to take cover.",
    "options": {
      "A": "However, early warning systems can detect them as they start.",
      "B": "Most earthquakes happen along the boundaries of tectonic plates.",
      "C": "The largest earthquake ever recorded struck Chile in 1960.",
      "D": "Some animals seem to sense earthquakes before they happen.",
      "E": "Earthquakes can also cause huge waves called tsunamis."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'cannot be predicted ... However ... early warning'",
    "trapWarning": "B, C, D ve E depremlerle ilgilidir ama 'for example' ile verilen Japonya erken uyarı örneğine zemin hazırlamaz.",
    "explanation": "Depremler önceden tahmin edilemese de erken uyarı sistemleri başladıkları anda tespit edebilir; Japonya bunun örneğidir (A şıkkı)."
  },
  {
    "id": "bank_pc_047",
    "type": "paragraph_completion",
    "question": "The Industrial Revolution began in Britain in the eighteenth century. [_____] Millions of people moved from the countryside to the cities to work in these factories. Living conditions in the new industrial cities were often very poor.",
    "options": {
      "A": "New machines allowed goods to be produced in large factories.",
      "B": "Britain had large supplies of coal and iron at the time.",
      "C": "Many historians argue that it changed the world forever.",
      "D": "Children often worked long hours in dangerous conditions.",
      "E": "The steam engine was improved by James Watt in the 1760s."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'these factories' göndergesi",
    "trapWarning": "B, C, D ve E Sanayi Devrimi hakkında bilgi verir ama 'these factories' göndergesini kurmaz.",
    "explanation": "Sonraki cümledeki 'bu fabrikalar' ifadesi için boşlukta fabrikalar tanıtılmalıdır (A şıkkı)."
  },
  {
    "id": "bank_pc_048",
    "type": "paragraph_completion",
    "question": "Coral reefs are often called the rainforests of the sea. [_____] However, they are under serious threat from rising ocean temperatures. When the water becomes too warm, corals lose the algae that give them their colour and food.",
    "options": {
      "A": "Like rainforests, they support an enormous variety of life.",
      "B": "Coral reefs are built over many centuries by tiny animals called polyps.",
      "C": "The Great Barrier Reef can be seen from space.",
      "D": "Many tourists enjoy diving on coral reefs.",
      "E": "Coral reefs also protect coastlines from the force of storms and waves."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'rainforests of the sea' benzetmesinin açıklaması",
    "trapWarning": "B, C, D ve E doğru bilgilerdir ama benzetmeyi açıklamaz.",
    "explanation": "'Denizlerin yağmur ormanları' benzetmesi, tıpkı yağmur ormanları gibi büyük bir canlı çeşitliliği barındırmalarıyla açıklanır (A şıkkı)."
  },
  {
    "id": "bank_pc_049",
    "type": "paragraph_completion",
    "question": "Video games are often criticised for wasting young people's time. [_____] Some games require players to solve complex problems, plan ahead and work in teams. Teachers have even begun to use certain games in the classroom.",
    "options": {
      "A": "However, researchers have found that they can also develop useful skills.",
      "B": "Most video games today are played on smartphones rather than on consoles.",
      "C": "The video game industry earns more money than the film industry.",
      "D": "Many parents strictly limit the amount of time their children spend playing.",
      "E": "The first video games were developed in the 1950s and 1960s."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Eleştiri → olumlu bulgu",
    "trapWarning": "B, C, D ve E oyunlar hakkında bilgi verir ama 'problem çözme, planlama' örneklerine zemin hazırlamaz.",
    "explanation": "Eleştiriden oyunların faydalı beceriler geliştirdiğine geçmek için 'However' cümlesi gerekir (A şıkkı)."
  },
  {
    "id": "bank_pc_050",
    "type": "paragraph_completion",
    "question": "Penguins are birds, but they cannot fly. [_____] They use their wings like flippers to 'fly' through the water at high speed. Some species can dive to depths of more than 500 metres.",
    "options": {
      "A": "Instead, they are excellent swimmers.",
      "B": "Most penguins live in the Southern Hemisphere.",
      "C": "Penguins usually mate for life.",
      "D": "Emperor penguins are the largest species.",
      "E": "Some penguins live in large colonies."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'cannot fly' → 'Instead'",
    "trapWarning": "B, C, D ve E penguenler hakkında bilgi verir ama uçamamaktan yüzmeye geçişi sağlamaz.",
    "explanation": "Uçamayan penguenlerin bunun yerine mükemmel yüzücüler olduğu söylenip sonra kanatlarını nasıl kullandıkları anlatılır (A şıkkı)."
  },
  {
    "id": "bank_pc_051",
    "type": "paragraph_completion",
    "question": "[_____] Some scientists estimate that it receives more than a hundred thousand visitors on a busy summer day. This huge number of tourists has led to overcrowding, rising rents and damage to historic buildings. City officials have therefore introduced a fee for day visitors.",
    "options": {
      "A": "Venice is one of the most visited cities in the world.",
      "B": "Venice was built on more than a hundred small islands.",
      "C": "Many residents of Venice work in the tourism industry.",
      "D": "Venice is famous for its canals and gondolas.",
      "E": "The population of Venice has fallen sharply."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "İlk cümle: konu cümlesi + 'it' göndergesi",
    "trapWarning": "B, C, D ve E Venedik hakkında bilgiler verir ama ziyaretçi sayısına ve 'it receives ... visitors' ifadesine zemin hazırlamaz.",
    "explanation": "Paragraf turist yoğunluğunu anlatır; giriş cümlesi Venedik'in en çok ziyaret edilen şehirlerden biri olduğunu söylemelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_052",
    "type": "paragraph_completion",
    "question": "Most people drink water only when they feel thirsty. [_____] By the time we feel thirsty, our bodies may already be slightly dehydrated. Doctors therefore recommend drinking water regularly throughout the day.",
    "options": {
      "A": "However, thirst is not always a reliable signal.",
      "B": "Water makes up about sixty percent of the human body.",
      "C": "Many people prefer to drink tea or coffee instead.",
      "D": "Bottled water is now more popular than tap water.",
      "E": "Athletes need to drink more water than other people."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Alışkanlık → itiraz → açıklama",
    "trapWarning": "B, C, D ve E suyla ilgilidir ama susuzluğun güvenilir bir işaret olmadığı fikrine geçmez.",
    "explanation": "'Susadığımızda zaten susuz kalmış olabiliriz' açıklaması, susuzluğun güvenilir bir işaret olmadığı itirazına dayanır (A şıkkı)."
  },
  {
    "id": "bank_pc_053",
    "type": "paragraph_completion",
    "question": "The ancient Egyptians built the pyramids as tombs for their kings. [_____] Recent discoveries, however, suggest that they were built by paid workers who lived in nearby villages. These workers were given food, housing and even medical care.",
    "options": {
      "A": "For a long time, it was believed that slaves had built them.",
      "B": "The largest pyramid is more than 140 metres high.",
      "C": "The pyramids were built more than four thousand years ago.",
      "D": "Each pyramid took about twenty years to complete.",
      "E": "The pyramids were originally covered with white limestone."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Recent discoveries, however' → eski görüş",
    "trapWarning": "B, C, D ve E doğru bilgilerdir ama 'however' ile çürütülecek eski görüşü vermez.",
    "explanation": "Yeni keşiflerin piramitleri ücretli işçilerin yaptığını göstermesi, eskiden kölelerin yaptığına inanıldığı görüşüne karşıtlık kurar (A şıkkı)."
  },
  {
    "id": "bank_pc_054",
    "type": "paragraph_completion",
    "question": "Hummingbirds are the smallest birds in the world. [_____] To fuel this activity, they must eat about half their body weight in sugar every day. At night, they enter a sleep-like state to save energy.",
    "options": {
      "A": "Their wings can beat more than fifty times per second.",
      "B": "They are found only in North and South America.",
      "C": "Some species migrate thousands of kilometres each year.",
      "D": "Hummingbirds can recognise individual human faces.",
      "E": "Many people put out feeders to attract them to their gardens."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'this activity' göndergesi",
    "trapWarning": "B, C, D ve E doğru bilgilerdir ama 'bu etkinliği beslemek için' ifadesinin göndergesini vermez.",
    "explanation": "Sonraki cümledeki 'this activity' saniyede elli kez kanat çırpmayı gösterir (A şıkkı)."
  },
  {
    "id": "bank_pc_055",
    "type": "paragraph_completion",
    "question": "Electric cars are often described as zero-emission vehicles. [_____] If the electricity used to charge them comes from coal power stations, their overall emissions can still be significant. Their true environmental benefit therefore depends on how the electricity is produced.",
    "options": {
      "A": "This is true only in the sense that they produce no exhaust fumes.",
      "B": "Electric cars have become much cheaper over the past decade.",
      "C": "Many countries plan to ban the sale of petrol cars by 2035.",
      "D": "Electric cars are quieter than cars with petrol engines.",
      "E": "Charging an electric car takes longer than filling a tank."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Yaygın tanım → kısıtlama → koşul",
    "trapWarning": "B, C, D ve E elektrikli arabalarla ilgilidir ama 'zero-emission' tanımını sınırlandırmaz.",
    "explanation": "Sıfır emisyon tanımı yalnızca egzoz açısından doğrudur; sonraki cümle elektriğin kaynağına bağlı salımı anlatır (A şıkkı)."
  },
  {
    "id": "bank_pc_056",
    "type": "paragraph_completion",
    "question": "For many years, scientists believed that the brain stopped producing new neurons after childhood. [_____] This discovery has given hope to people with brain injuries and diseases such as Alzheimer's. It also suggests that learning new skills may help keep the brain healthy.",
    "options": {
      "A": "Research has since shown that some areas continue to produce them throughout life.",
      "B": "The human brain contains around 86 billion neurons, according to recent estimates.",
      "C": "Neurons communicate with each other through electrical and chemical signals.",
      "D": "The brain uses about twenty percent of the body's energy despite its small size.",
      "E": "Alzheimer's disease is the most common cause of dementia in older adults."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'This discovery' göndergesi",
    "trapWarning": "B, C ve D beyin hakkında genel bilgilerdir; E şıkkı Alzheimer'ı erken getirir ama bir keşif sunmaz.",
    "explanation": "Sonraki cümledeki 'Bu keşif' ifadesi, yetişkinlikte de nöron üretildiğinin bulunmasını gösterir (A şıkkı)."
  },
  {
    "id": "bank_pc_057",
    "type": "paragraph_completion",
    "question": "Many people believe that we lose most of our body heat through our heads. [_____] In fact, the head loses heat at about the same rate as any other uncovered part of the body. The myth probably came from an old military study in which only the head was left uncovered.",
    "options": {
      "A": "Scientists, however, say this is not true.",
      "B": "Wearing a hat is important in cold weather.",
      "C": "Children lose heat faster than adults.",
      "D": "The body produces heat by burning food.",
      "E": "Most heat is lost through the feet."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Yanlış inanç → itiraz → kanıt",
    "trapWarning": "B şıkkı inancı destekler; C, D ve E başka bilgiler verir ve 'In fact' açıklamasına zemin hazırlamaz.",
    "explanation": "'Aslında baş, vücudun diğer kısımları kadar ısı kaybeder' açıklaması, bilim insanlarının bunun doğru olmadığını söylemesine dayanır (A şıkkı)."
  },
  {
    "id": "bank_pc_058",
    "type": "paragraph_completion",
    "question": "The Silk Road was not a single road. [_____] Along these routes, merchants traded silk, spices and precious metals. Just as importantly, they also spread ideas, religions and technologies between East and West.",
    "options": {
      "A": "It was a vast network of trade routes linking China with Europe.",
      "B": "Silk was first produced in China thousands of years ago.",
      "C": "Marco Polo travelled along it in the thirteenth century.",
      "D": "Many travellers were robbed by bandits along the way.",
      "E": "The routes crossed some of the world's harshest deserts."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'not a single road' → 'these routes'",
    "trapWarning": "B, C, D ve E İpek Yolu hakkında bilgiler verir ama 'these routes' göndergesini ve 'tek bir yol değildi' düzeltmesini tamamlamaz.",
    "explanation": "'Tek bir yol değildi' denildikten sonra bir ticaret yolları ağı olduğu söylenmeli; ardından 'these routes' gelir (A şıkkı)."
  },
  {
    "id": "bank_pc_059",
    "type": "paragraph_completion",
    "question": "Many companies now allow employees to work from home. [_____] On the other hand, some workers feel lonely and find it hard to separate work from home life. Companies are therefore looking for a balance between office and remote work.",
    "options": {
      "A": "Supporters say this saves time and money spent on commuting.",
      "B": "The trend began during the COVID-19 pandemic in 2020.",
      "C": "Some managers worry that employees work less at home.",
      "D": "Technology has made it much easier to work remotely.",
      "E": "Many offices now stand empty for much of the week."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'On the other hand' → önce avantaj",
    "trapWarning": "C şıkkı bir dezavantaj verir ve 'on the other hand' karşıtlığını bozar; B, D ve E avantaj/dezavantaj dengesini kurmaz.",
    "explanation": "'On the other hand' dezavantajlara geçer; boşlukta bir avantaj (ulaşım süresi ve maliyet tasarrufu) verilmelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_060",
    "type": "paragraph_completion",
    "question": "Lightning is extremely hot. [_____] This sudden heat causes the air to expand very rapidly, which creates the sound we hear as thunder. Because light travels faster than sound, we always see lightning before we hear it.",
    "options": {
      "A": "A single bolt can heat the air around it to about five times the heat of the Sun's surface.",
      "B": "Lightning strikes somewhere on the Earth's surface about a hundred times every second.",
      "C": "Tall buildings are often fitted with metal lightning rods to protect them from damage.",
      "D": "Surprisingly, most people who are struck by lightning manage to survive the experience.",
      "E": "Lightning is far more common in tropical regions than in other parts of the world."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'This sudden heat' göndergesi",
    "trapWarning": "B, C, D ve E şimşek hakkında bilgiler verir ama 'bu ani ısı' ifadesinin göndergesini vermez.",
    "explanation": "'Bu ani ısı' ifadesi, şimşeğin havayı Güneş yüzeyinin beş katı sıcaklığa ısıttığı bilgisine bağlanır (A şıkkı)."
  },
  {
    "id": "bank_pc_061",
    "type": "paragraph_completion",
    "question": "Bilingual people often switch between languages in the middle of a conversation. [_____] Linguists now see it as a sign of skill, showing that speakers have a strong command of both languages. It often happens when one language has a better word for a particular idea.",
    "options": {
      "A": "This was once seen as a sign of poor language ability.",
      "B": "More than half of the world's population speaks two or more languages.",
      "C": "Children learn a second language more easily than adults.",
      "D": "English is the most commonly learned second language.",
      "E": "Some bilingual people think differently in each language."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Linguists now see it as a sign of skill' → eski görüş",
    "trapWarning": "B, C, D ve E iki dillilikle ilgilidir ama 'now' ile karşılaştırılan eski görüşü vermez.",
    "explanation": "Dilbilimcilerin bunu artık beceri işareti olarak görmesi, eskiden zayıf dil becerisi sayılmasıyla karşıtlık kurar (A şıkkı)."
  },
  {
    "id": "bank_pc_062",
    "type": "paragraph_completion",
    "question": "Fireworks were invented in China more than a thousand years ago. [_____] They were believed to scare away evil spirits with their loud noise and bright light. Today, they are used around the world to celebrate special occasions.",
    "options": {
      "A": "They were first used in religious ceremonies and festivals.",
      "B": "Gunpowder was invented by Chinese scientists searching for a medicine.",
      "C": "Many cities have banned private fireworks for safety reasons.",
      "D": "Fireworks can frighten pets and wild animals.",
      "E": "The colours in fireworks come from different metals."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Köken → ilk kullanım → bugünkü kullanım",
    "trapWarning": "B, C, D ve E havai fişekler hakkında bilgiler verir ama kötü ruhları kovma inancına bağlanan ilk kullanım amacını vermez.",
    "explanation": "Kötü ruhları kovma inancı, havai fişeklerin ilk dini törenlerde kullanıldığını söyleyen cümleye bağlanır (A şıkkı)."
  },
  {
    "id": "bank_pc_063",
    "type": "paragraph_completion",
    "question": "Mosquitoes are responsible for more human deaths than any other animal. [_____] Malaria alone kills hundreds of thousands of people every year, most of them young children in Africa. Bed nets treated with insecticide have proved one of the most effective ways of preventing it.",
    "options": {
      "A": "This is because they spread deadly diseases such as malaria.",
      "B": "Only female mosquitoes bite humans to feed on blood.",
      "C": "There are more than three thousand species of mosquito.",
      "D": "Mosquitoes are attracted to the carbon dioxide we breathe out.",
      "E": "Some countries have released genetically modified mosquitoes."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Neden → örnek (sıtma)",
    "trapWarning": "B, C, D ve E sivrisinekler hakkında doğru bilgilerdir ama ölümlerin nedenini vermez.",
    "explanation": "Sivrisineklerin en çok ölüme yol açmasının nedeni sıtma gibi hastalıkları yaymalarıdır; sonraki cümle sıtmayı örnekler (A şıkkı)."
  },
  {
    "id": "bank_pc_064",
    "type": "paragraph_completion",
    "question": "Some people believe that reading in dim light damages the eyes. [_____] It may cause temporary tiredness or headaches, but these disappear after a good rest. Eye doctors say there is no evidence that it causes any permanent harm.",
    "options": {
      "A": "In reality, it does not harm the eyes in the long term.",
      "B": "Reading is one of the best ways to improve your vocabulary.",
      "C": "Many people now read on screens rather than on paper.",
      "D": "Children should have their eyes tested every year.",
      "E": "Glasses were first invented in Italy in the thirteenth century."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "İnanç → düzeltme → açıklama",
    "trapWarning": "B, C, D ve E konuyla ilgili ama 'geçici yorgunluk' açıklamasına zemin hazırlamaz.",
    "explanation": "İnanç düzeltilir (uzun vadede zarar vermez), ardından geçici etkiler açıklanır (A şıkkı)."
  },
  {
    "id": "bank_pc_065",
    "type": "paragraph_completion",
    "question": "The modern Olympic Games were first held in Athens in 1896. [_____] Since then, the Games have grown into the largest sporting event in the world, with more than ten thousand athletes taking part. Women, who were excluded in 1896, now make up nearly half of all competitors.",
    "options": {
      "A": "Only about 240 athletes, all men, from 14 countries took part.",
      "B": "The ancient Olympic Games were held in Olympia for over a thousand years.",
      "C": "The Olympic flag has five rings representing five continents.",
      "D": "The Games are held every four years in a different city.",
      "E": "Some cities have spent billions of dollars hosting the Games."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Since then ... grown' + 'Women ... excluded'",
    "trapWarning": "B, C, D ve E doğru bilgilerdir ama büyümenin karşılaştırılacağı başlangıç durumunu vermez.",
    "explanation": "Oyunların büyüdüğü ve kadınların dışlandığı bilgisi, 1896'da yalnızca 240 erkek sporcunun katıldığı bilgisiyle karşılaştırılır (A şıkkı)."
  },
  {
    "id": "bank_pc_066",
    "type": "paragraph_completion",
    "question": "In many parts of the world, groundwater is being used faster than it can be replaced. [_____] In some regions of India and the United States, water tables have fallen by several metres in just a few decades. If this continues, wells may run dry and farming could become impossible.",
    "options": {
      "A": "Farmers pump large amounts of it to water their crops.",
      "B": "Groundwater is usually cleaner than water from rivers.",
      "C": "About a third of the world's population depends on groundwater.",
      "D": "Rain slowly soaks into the ground and refills underground stores.",
      "E": "Some groundwater is thousands of years old."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Neden → örnek → sonuç",
    "trapWarning": "B, C, D ve E yeraltı suyu hakkında bilgi verir ama aşırı kullanımın nedenini vermez.",
    "explanation": "Yeraltı suyunun yenilenenden hızlı kullanılmasının nedeni çiftçilerin sulama için çok miktarda pompalamasıdır (A şıkkı)."
  },
  {
    "id": "bank_pc_067",
    "type": "paragraph_completion",
    "question": "Shakespeare is often credited with adding many new words to the English language. [_____] Words such as 'lonely', 'generous' and 'eyeball' first appear in his plays. Some scholars, however, argue that he simply wrote down words that people were already using.",
    "options": {
      "A": "He is thought to have introduced more than 1,700 words.",
      "B": "He wrote at least 37 plays and over 150 poems.",
      "C": "Shakespeare was born in Stratford-upon-Avon in 1564.",
      "D": "His plays are still performed all over the world.",
      "E": "Very little is known about his private life."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Genelleme → örnekler → itiraz",
    "trapWarning": "B, C, D ve E Shakespeare hakkında doğru bilgilerdir ama kelime katkısına dair bir ölçek vermez.",
    "explanation": "Kelime katkısı iddiası 1.700 kelimeyle somutlaştırılır, ardından örnekler gelir (A şıkkı)."
  },
  {
    "id": "bank_pc_068",
    "type": "paragraph_completion",
    "question": "Elephants are known for their excellent memory. [_____] For example, older females can remember the location of water sources many kilometres away, which helps the herd survive droughts. They can also recognise the calls of dozens of other elephants.",
    "options": {
      "A": "This ability plays an important role in their survival.",
      "B": "Elephants are the largest land animals on Earth.",
      "C": "African elephants have larger ears than Asian elephants.",
      "D": "Elephants can live for more than sixty years.",
      "E": "Many elephants are killed by poachers for their ivory."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Genelleme → 'For example'",
    "trapWarning": "B, C, D ve E fil hakkında bilgi verir ama hafızanın hayatta kalmadaki rolüne geçmez.",
    "explanation": "Örnekler hafızanın hayatta kalmaya yardım ettiğini gösterir; boşlukta bu genelleme yapılmalıdır (A şıkkı)."
  },
  {
    "id": "bank_pc_069",
    "type": "paragraph_completion",
    "question": "The world's population reached eight billion in 2022. [_____] However, the rate of growth is slowing as people in many countries have fewer children. Some experts predict that the population will peak later this century and then begin to decline.",
    "options": {
      "A": "It has more than tripled since the middle of the twentieth century.",
      "B": "China and India together are home to more than a third of all the people on Earth.",
      "C": "For the first time in history, most of the world's people now live in cities.",
      "D": "Many countries are worried about the economic effects of their ageing populations.",
      "E": "Africa has the youngest population of any continent."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'However, the rate of growth is slowing'",
    "trapWarning": "B, C, D ve E nüfusla ilgili ama hızlı büyümeyi 'However' karşıtlığından önce vermez.",
    "explanation": "Büyümenin yavaşladığı söylenmeden önce nüfusun hızla arttığı (üç katına çıktığı) belirtilmelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_070",
    "type": "paragraph_completion",
    "question": "Sharks have a reputation as dangerous man-eaters. [_____] In fact, you are far more likely to be struck by lightning than attacked by a shark. Humans, on the other hand, kill millions of sharks every year.",
    "options": {
      "A": "Yet attacks on humans are extremely rare.",
      "B": "Sharks have existed for more than 400 million years.",
      "C": "Some sharks can smell blood from far away.",
      "D": "The great white shark is the largest predatory fish.",
      "E": "Sharks must keep swimming in order to breathe."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "İtibar → gerçek → 'In fact'",
    "trapWarning": "C ve D tehlike imajını destekler; B ve E bağlanmaz.",
    "explanation": "Tehlikeli imajdan sonra saldırıların aslında çok nadir olduğu söylenmeli; 'In fact' bunu destekler (A şıkkı)."
  },
  {
    "id": "bank_pc_071",
    "type": "paragraph_completion",
    "question": "[_____] They take in carbon dioxide and release oxygen, clean the air of pollutants and reduce noise. Trees also provide shade, which can lower temperatures in cities by several degrees.",
    "options": {
      "A": "Trees offer many benefits to people living in cities.",
      "B": "Many cities have cut down trees to build new roads.",
      "C": "Some trees can live for thousands of years.",
      "D": "Trees grow more slowly in cities than in forests.",
      "E": "Most cities have fewer trees than they did a century ago."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Konu cümlesi: faydalar",
    "trapWarning": "B ve E olumsuz bilgi verir; C ve D faydalara giriş yapmaz.",
    "explanation": "Paragraf ağaçların faydalarını sayar; giriş cümlesi şehirlerdeki ağaçların birçok fayda sağladığını söylemelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_072",
    "type": "paragraph_completion",
    "question": "The Moon is moving away from the Earth. [_____] Over millions of years, this means that days on Earth are slowly getting longer. Hundreds of millions of years ago, a day lasted only about twenty-two hours.",
    "options": {
      "A": "It drifts about four centimetres further away every year.",
      "B": "The Moon has no atmosphere and no liquid water.",
      "C": "Astronauts first landed on the Moon in 1969.",
      "D": "The Moon causes the tides in the Earth's oceans.",
      "E": "The Moon is about a quarter of the size of the Earth."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'this means' → yavaş uzaklaşma",
    "trapWarning": "B, C ve E Ay hakkında bilgiler verir; D şıkkı ilgili görünür ama uzaklaşma hızını ve 'this' göndergesini vermez.",
    "explanation": "Günlerin uzamasına yol açan şey Ay'ın her yıl yaklaşık dört santimetre uzaklaşmasıdır (A şıkkı)."
  },
  {
    "id": "bank_pc_073",
    "type": "paragraph_completion",
    "question": "Many people try to lose weight by following strict diets. [_____] Experts say that small, lasting changes in eating habits are more effective than dramatic short-term diets. Regular exercise also plays an important role.",
    "options": {
      "A": "However, most of them regain the weight within a few years.",
      "B": "Some diets ban entire groups of food, such as carbohydrates.",
      "C": "Obesity rates have risen sharply in many countries.",
      "D": "Diet books are among the best-selling books in the world.",
      "E": "Many diets promise rapid results in just a few weeks."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Sorun → uzman önerisi",
    "trapWarning": "B, D ve E diyetleri tanımlar ama uzmanların daha etkili yöntem önerisine gerekçe sunmaz; C şıkkı konu dışıdır.",
    "explanation": "Uzmanların daha kalıcı yöntem önermesi, katı diyetlerin başarısız olduğu (kilonun geri alındığı) bilgisine dayanır (A şıkkı)."
  },
  {
    "id": "bank_pc_074",
    "type": "paragraph_completion",
    "question": "Ants are among the most successful creatures on Earth. [_____] They have colonised almost every land habitat, from rainforests to deserts. Their success is largely due to their highly organised colonies, in which each ant has a specific role.",
    "options": {
      "A": "Scientists estimate that there are about twenty quadrillion ants alive today.",
      "B": "Some ants can carry objects that are many times heavier than their own bodies.",
      "C": "Ants communicate mainly through chemicals called pheromones.",
      "D": "Many people consider ants to be annoying pests when they get into their homes.",
      "E": "The largest ant colonies can stretch for thousands of kilometres."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'most successful' → sayısal kanıt → yayılım",
    "trapWarning": "B, C ve E karıncalar hakkında ilginç bilgilerdir ama başarının ölçeğini sayıyla vermez; D şıkkı başarıyla ilgisizdir.",
    "explanation": "'En başarılı canlılar' iddiası sayıyla desteklenir, sonra yayılım ve organizasyon anlatılır (A şıkkı)."
  },
  {
    "id": "bank_pc_075",
    "type": "paragraph_completion",
    "question": "Music has been found to have a powerful effect on the brain. [_____] Doctors are now using music therapy to help patients with conditions such as Parkinson's disease and depression. Some hospitals even play music during operations to reduce patients' anxiety.",
    "options": {
      "A": "It can affect our mood, memory and even our ability to move.",
      "B": "The oldest known musical instrument is a flute made of bone.",
      "C": "Many people listen to music while they study or work.",
      "D": "Classical music is said to make babies more intelligent.",
      "E": "Music streaming has changed the way people listen to music."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Etki → tedavi kullanımı",
    "trapWarning": "B, C ve E müzikle ilgilidir ama beyin etkisini açıklamaz; D şıkkı tartışmalı bir iddiadır ve terapiye bağlanmaz.",
    "explanation": "Müzik terapisinin Parkinson ve depresyonda kullanılması, müziğin ruh hali, hafıza ve hareket üzerindeki etkisine dayanır (A şıkkı)."
  },
  {
    "id": "bank_pc_076",
    "type": "paragraph_completion",
    "question": "Glass may look solid, but its structure is unusual. [_____] Instead, its molecules are arranged randomly, like those of a liquid. This is why glass is sometimes described as a liquid that has stopped flowing, although scientists do not agree with this description.",
    "options": {
      "A": "Unlike most solids, it does not have an ordered crystal structure.",
      "B": "Glass is made mainly from sand that is heated to very high temperatures.",
      "C": "The ancient Egyptians were among the first people to make glass objects.",
      "D": "Modern glass can be made strong enough to stop bullets.",
      "E": "Most glass bottles can be recycled again and again."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Instead' → önce bir olumsuzlama",
    "trapWarning": "B, C, D ve E cam hakkında doğru bilgilerdir ama 'Instead' ile düzeltilecek bir olumsuzlama içermez.",
    "explanation": "'Instead, its molecules are arranged randomly' ifadesinden önce düzenli kristal yapısının olmadığı söylenmelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_077",
    "type": "paragraph_completion",
    "question": "The habit of afternoon tea became popular in Britain in the 1840s. [_____] To fill this long gap, the Duchess of Bedford began to have tea and a light snack in the late afternoon. The custom soon spread among the upper classes.",
    "options": {
      "A": "At the time, people usually ate lunch around noon and dinner late in the evening.",
      "B": "Tea had been imported into Britain from China since the seventeenth century.",
      "C": "Today, afternoon tea is served in many luxury hotels all around the world.",
      "D": "The British still drink more than 100 million cups of tea every single day.",
      "E": "Afternoon tea usually includes sandwiches, cakes and scones."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'this long gap' göndergesi",
    "trapWarning": "B, C, D ve E çay hakkında bilgiler verir ama 'bu uzun boşluk' ifadesinin göndergesini vermez.",
    "explanation": "'Bu uzun boşluğu doldurmak için' ifadesi, öğle ve akşam yemeği arasındaki uzun süreyi gerektirir (A şıkkı)."
  },
  {
    "id": "bank_pc_078",
    "type": "paragraph_completion",
    "question": "Many people think of cities as bad for wildlife. [_____] Foxes, falcons and even coyotes have learned to live among buildings and traffic. Some species actually do better in cities than in the countryside, where they face more predators.",
    "options": {
      "A": "Yet a surprising number of animals have adapted well to urban life.",
      "B": "Cities cover only about three percent of the Earth's land surface.",
      "C": "Air pollution in cities is a major cause of illness in humans.",
      "D": "Many cities have created parks and green spaces for residents.",
      "E": "Wild animals sometimes cause damage to homes and gardens."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Yaygın düşünce → 'Yet' karşıtlığı → örnekler",
    "trapWarning": "B, C ve D şehirlerle ilgilidir ama hayvanların uyumuna geçmez; E şıkkı olumsuz yönü sürdürür.",
    "explanation": "Şehirlerin yaban hayatı için kötü olduğu düşüncesinden, hayvanların şehre uyum sağladığı fikrine 'Yet' ile geçilir (A şıkkı)."
  },
  {
    "id": "bank_pc_079",
    "type": "paragraph_completion",
    "question": "The human eye can distinguish around ten million different colours. [_____] Some people, however, have a fourth type, which may allow them to see up to a hundred times more colours. Such people are known as tetrachromats.",
    "options": {
      "A": "This is possible because most people have three types of colour-sensitive cells.",
      "B": "Some animals, such as dogs, see far fewer colours than humans normally do.",
      "C": "Colour blindness is much more common in men than it is in women.",
      "D": "The blue colour of the sky is caused by the scattering of sunlight in the air.",
      "E": "Many artists and scientists have studied how people perceive colour."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'a fourth type' → önce üç tür",
    "trapWarning": "B, C, D ve E renk görme hakkında bilgiler verir ama 'dördüncü bir tür' ifadesinin karşılaştırıldığı üç türü vermez.",
    "explanation": "Sonraki cümle 'dördüncü bir türden' söz eder; boşlukta çoğu insanın üç tür renk hücresi olduğu söylenmelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_080",
    "type": "paragraph_completion",
    "question": "In the past, maps were often deliberately inaccurate. [_____] For example, some countries left important military sites off their maps or showed roads that did not exist. Even today, certain areas are hidden on online maps for security reasons.",
    "options": {
      "A": "Governments sometimes changed them to protect their secrets.",
      "B": "The first maps were drawn on clay tablets thousands of years ago.",
      "C": "Today, satellite images allow maps to be extremely accurate.",
      "D": "Many old maps showed sea monsters in unknown waters.",
      "E": "Map-making became much easier after the invention of printing."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Genelleme → 'For example' → bugün",
    "trapWarning": "B, C ve E harita yapımının tarihini anlatır; D şıkkı ilginç ama kasıtlı yanlışlığı açıklamaz.",
    "explanation": "Askeri yerlerin gizlenmesi örneği, hükümetlerin sırlarını korumak için haritaları değiştirdiği genellemesinin örneğidir (A şıkkı)."
  },
  {
    "id": "bank_pc_081",
    "type": "paragraph_completion",
    "question": "Spiders' silk is one of the strongest natural materials known. [_____] It is also extremely light and flexible. Scientists are therefore trying to produce it artificially for use in products such as bulletproof vests and medical stitches.",
    "options": {
      "A": "Weight for weight, it is stronger than steel.",
      "B": "There are more than 45,000 known species of spider.",
      "C": "Most spiders are harmless to humans.",
      "D": "Spiders use their silk to build webs and catch prey.",
      "E": "Some people are very afraid of spiders."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Güç kanıtı → 'also' ek özellik",
    "trapWarning": "B, C ve E ipekle ilgisizdir; D şıkkı ipeğin kullanımını verir ama güç iddiasını kanıtlamaz.",
    "explanation": "'En güçlü malzemelerden biri' iddiası çelikle karşılaştırmayla desteklenir, ardından 'also' ile ek özellikler gelir (A şıkkı)."
  },
  {
    "id": "bank_pc_082",
    "type": "paragraph_completion",
    "question": "The idea that we have five senses dates back to the ancient Greek philosopher Aristotle. [_____] These include our sense of balance, our awareness of body position and our ability to feel temperature and pain. Some researchers count more than twenty different senses.",
    "options": {
      "A": "Today, however, scientists recognise many more.",
      "B": "Aristotle was a student of Plato in Athens.",
      "C": "Sight is often considered the most important sense.",
      "D": "Some animals have senses that humans lack.",
      "E": "The sense of smell is closely linked to memory."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'These include' → 'many more' göndergesi",
    "trapWarning": "B, C, D ve E duyular hakkında bilgi verir ama 'Bunlar şunları içerir' ifadesinin göndergesini sağlamaz.",
    "explanation": "'Bunlar dengeyi, vücut konumunu... içerir' ifadesi, bilim insanlarının çok daha fazla duyu tanıdığını söyleyen cümleye bağlanır (A şıkkı)."
  },
  {
    "id": "bank_pc_083",
    "type": "paragraph_completion",
    "question": "The first known computer programmer was a woman. [_____] In the 1840s, she wrote what is now considered the first algorithm intended for a machine. She also imagined that computers might one day create music and art.",
    "options": {
      "A": "Ada Lovelace was the daughter of the poet Lord Byron.",
      "B": "Computers were not built until about a century later.",
      "C": "Women are still underrepresented in computer science.",
      "D": "Charles Babbage designed a mechanical calculating machine.",
      "E": "Programming languages have changed greatly over time."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'she' göndergesi",
    "trapWarning": "B, C, D ve E konuyla ilgili ama 'she' zamirinin göndergesi olan kişiyi tanıtmaz.",
    "explanation": "Sonraki cümledeki 'she' için boşlukta Ada Lovelace tanıtılmalıdır (A şıkkı)."
  },
  {
    "id": "bank_pc_084",
    "type": "paragraph_completion",
    "question": "Rising sea levels pose a serious threat to many coastal cities. [_____] The Netherlands, for instance, has built an advanced system of dams, dykes and storm barriers. Other cities are now studying the Dutch approach.",
    "options": {
      "A": "Some countries, however, have learned to live with the water.",
      "B": "Sea levels are rising because of melting ice and warming oceans.",
      "C": "Many of the world's largest cities are located on coasts.",
      "D": "Some small island nations may disappear completely.",
      "E": "Coastal flooding has become more frequent in recent years."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'for instance' → başarılı bir örneğin genellemesi",
    "trapWarning": "B, C, D ve E tehdidi sürdürür; Hollanda'nın başarılı çözüm örneğine zemin hazırlamaz.",
    "explanation": "Hollanda'nın baraj ve set sistemi, bazı ülkelerin suyla yaşamayı öğrendiği genellemesinin örneğidir (A şıkkı)."
  },
  {
    "id": "bank_pc_085",
    "type": "paragraph_completion",
    "question": "Most people assume that the Great Fire of London in 1666 caused enormous loss of life. [_____] However, historians believe that many deaths, especially among the poor, were never recorded. The true number may have been much higher.",
    "options": {
      "A": "Official records list only six deaths.",
      "B": "The fire started in a bakery on Pudding Lane.",
      "C": "The fire burned for four days and destroyed thousands of homes.",
      "D": "After the fire, London was rebuilt with brick and stone.",
      "E": "St Paul's Cathedral was destroyed in the fire."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'However ... never recorded' → önce resmi kayıt",
    "trapWarning": "B, C, D ve E yangın hakkında bilgi verir ama 'However' ile itiraz edilen resmi rakamı vermez.",
    "explanation": "Tarihçilerin birçok ölümün kaydedilmediğini söylemesi, resmi kayıtlarda yalnızca altı ölüm bulunmasına karşıtlık kurar (A şıkkı)."
  },
  {
    "id": "bank_pc_086",
    "type": "paragraph_completion",
    "question": "Sugar was once a luxury that only the rich could afford. [_____] As production increased and prices fell, it became part of the everyday diet. Today, the average person in many countries eats far more sugar than doctors recommend.",
    "options": {
      "A": "It was so expensive that it was sometimes kept locked away.",
      "B": "Sugar cane was first grown in New Guinea thousands of years ago.",
      "C": "Too much sugar can lead to tooth decay and obesity.",
      "D": "Many processed foods contain hidden sugar.",
      "E": "Honey was the main sweetener before sugar became available."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Lüks → ucuzlama → bugün",
    "trapWarning": "B ve E tarihe değinir ama lüks oluşunu somutlaştırmaz; C ve D zaman akışını bozar.",
    "explanation": "Şekerin lüks oluşu, kilit altında tutulacak kadar pahalı olmasıyla somutlaştırılır; sonra ucuzlaması anlatılır (A şıkkı)."
  },
  {
    "id": "bank_pc_087",
    "type": "paragraph_completion",
    "question": "Cats were first domesticated in the Middle East about ten thousand years ago. [_____] People welcomed them because they kept these pests away from stored food. Over time, the relationship between humans and cats became closer.",
    "options": {
      "A": "They were drawn to early farming villages by the mice that ate the stored grain.",
      "B": "Ancient Egyptians worshipped cats as sacred animals and even mummified them.",
      "C": "Domestic cats sleep for up to sixteen hours a day, mostly during daylight.",
      "D": "Quite a lot of people are allergic to cats and cannot keep them as pets.",
      "E": "There are more than seventy officially recognised breeds of cat today."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'these pests' göndergesi",
    "trapWarning": "B, C, D ve E kediler hakkında bilgiler verir ama 'bu zararlılar' ifadesinin göndergesini vermez.",
    "explanation": "Sonraki cümledeki 'these pests' tahıl yiyen fareleri gösterir (A şıkkı)."
  },
  {
    "id": "bank_pc_088",
    "type": "paragraph_completion",
    "question": "Many people believe that cracking your knuckles causes arthritis. [_____] One doctor even cracked the knuckles of only one hand for sixty years and found no difference between his two hands. The sound simply comes from gas bubbles bursting in the joint.",
    "options": {
      "A": "Studies, however, have found no link between the two.",
      "B": "Arthritis affects millions of people around the world.",
      "C": "Cracking your knuckles can be annoying for other people.",
      "D": "Many people crack their knuckles when they are nervous.",
      "E": "Doctors recommend exercise for people with arthritis."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "İnanç → çürütme → kanıt",
    "trapWarning": "B ve E artrite odaklanır; C ve D alışkanlığı anlatır; hiçbiri doktorun deneyine zemin hazırlamaz.",
    "explanation": "Doktorun 60 yıllık deneyi, araştırmaların ikisi arasında bağ bulmadığını gösteren kanıttır (A şıkkı)."
  },
  {
    "id": "bank_pc_089",
    "type": "paragraph_completion",
    "question": "[_____] They spend most of their lives at sea, coming ashore only to lay their eggs. Female sea turtles often return to the same beach where they themselves hatched, sometimes travelling thousands of kilometres to get there.",
    "options": {
      "A": "Sea turtles are among the most remarkable travellers in the animal world.",
      "B": "Sea turtles have existed on Earth for more than a hundred million years.",
      "C": "Plastic pollution in the oceans is a major threat to sea turtles today.",
      "D": "Many sea turtle species are now endangered.",
      "E": "Unlike land tortoises, sea turtles cannot pull their heads into their shells."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Konu cümlesi: göç ve yolculuk",
    "trapWarning": "B, C, D ve E deniz kaplumbağaları hakkında doğru bilgilerdir ama paragrafın yolculuk ana fikrini tanıtmaz.",
    "explanation": "Paragraf kaplumbağaların uzun yolculuklarını anlatır; konu cümlesi bunu tanıtmalıdır (A şıkkı)."
  },
  {
    "id": "bank_pc_090",
    "type": "paragraph_completion",
    "question": "Some scientists believe that boredom may actually be good for us. [_____] When people have nothing to do, their minds wander, which can lead to new ideas. In one study, people who did a boring task first came up with more creative solutions afterwards.",
    "options": {
      "A": "It may encourage creative thinking.",
      "B": "Most people find boredom unpleasant.",
      "C": "Children often complain of being bored.",
      "D": "Boredom is common in many workplaces.",
      "E": "Smartphones help people avoid boredom."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Genel iddia → açıklama → kanıt",
    "trapWarning": "B, C, D ve E can sıkıntısıyla ilgilidir ama yaratıcılığa geçmez; E şıkkı yön olarak çelişir.",
    "explanation": "Can sıkıntısının faydasını açıklamak için yaratıcı düşünceyi teşvik ettiği söylenmeli; sonra açıklama ve çalışma gelir (A şıkkı)."
  },
  {
    "id": "bank_pc_091",
    "type": "paragraph_completion",
    "question": "Glaciers are often described as rivers of ice. [_____] Some glaciers move only a few centimetres a day, while others can travel several metres. As they move, they carve valleys and shape the landscape.",
    "options": {
      "A": "Like rivers, they flow slowly downhill under their own weight.",
      "B": "Glaciers store about seventy percent of the world's fresh water.",
      "C": "Many glaciers are melting because of global warming.",
      "D": "Glaciers form where snow builds up over many years.",
      "E": "Antarctica is covered by an enormous ice sheet."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Benzetmenin açıklaması → hız",
    "trapWarning": "B, C, D ve E buzullar hakkında doğru bilgilerdir ama 'buz nehri' benzetmesini ve hareket bilgisini bağlamaz.",
    "explanation": "'Buz nehirleri' benzetmesi, nehirler gibi yokuş aşağı akmalarıyla açıklanır; sonra hızları anlatılır (A şıkkı)."
  },
  {
    "id": "bank_pc_092",
    "type": "paragraph_completion",
    "question": "Many inventions were discovered by accident. [_____] He noticed that a mould growing in one of his dishes had killed the bacteria around it. This accident led to the development of the first antibiotic.",
    "options": {
      "A": "In 1928, Alexander Fleming returned from holiday to find his laboratory in a mess.",
      "B": "Microwave ovens were invented after an engineer noticed a chocolate bar melting in his pocket.",
      "C": "Many scientists spend years or even decades trying to make a single discovery.",
      "D": "Antibiotics have saved many millions of lives since they came into use in the 1940s.",
      "E": "Some accidental discoveries have caused great harm."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'He' + 'one of his dishes' göndergesi",
    "trapWarning": "B şıkkı de kazara bir buluştur ama 'he' ve mantar hikayesine bağlanmaz; C, D ve E bir kişi tanıtmaz.",
    "explanation": "Sonraki cümledeki 'He' ve 'his dishes' için boşlukta Fleming tanıtılmalıdır (A şıkkı)."
  },
  {
    "id": "bank_pc_093",
    "type": "paragraph_completion",
    "question": "Plants cannot run away from danger, but they are not defenceless. [_____] Others produce chemicals that make their leaves taste bitter or even poisonous. Some can even release scents that attract the enemies of the insects eating them.",
    "options": {
      "A": "Some protect themselves with thorns or tough leaves.",
      "B": "Plants need sunlight, water and carbon dioxide to grow.",
      "C": "Most plants reproduce by producing seeds.",
      "D": "Many insects play an important role in pollination.",
      "E": "Some plants can live for thousands of years."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Others ...' → 'Some ...' yapısı",
    "trapWarning": "B, C, D ve E bitkiler hakkında bilgiler verir ama savunma yöntemlerinin ilkini vermez.",
    "explanation": "'Others produce chemicals' ifadesi, 'Some protect themselves with thorns' ile başlayan bir önceki cümleyi gerektirir (A şıkkı)."
  },
  {
    "id": "bank_pc_094",
    "type": "paragraph_completion",
    "question": "Public libraries in Finland are among the most used in the world. [_____] The country's high literacy rates are often linked to this strong reading culture. Libraries there also lend tools, musical instruments and sports equipment.",
    "options": {
      "A": "On average, each Finn borrows more than fifteen books a year.",
      "B": "Finland has a relatively small population of about five and a half million.",
      "C": "Finnish is said to be a very difficult language for foreigners to learn.",
      "D": "Many Finns enjoy spending time in saunas, especially during the winter.",
      "E": "Finland is known for its long, dark winters."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'this strong reading culture' göndergesi",
    "trapWarning": "B, C, D ve E Finlandiya hakkında bilgiler verir ama okuma kültürünü kanıtlamaz.",
    "explanation": "'Bu güçlü okuma kültürü' ifadesi kişi başına ödünç alınan kitap sayısıyla desteklenir (A şıkkı)."
  },
  {
    "id": "bank_pc_095",
    "type": "paragraph_completion",
    "question": "Most of the oxygen we breathe does not come from rainforests. [_____] These tiny organisms produce between half and two thirds of the oxygen in the atmosphere. Protecting the oceans is therefore just as important as protecting forests.",
    "options": {
      "A": "Instead, it comes mainly from tiny ocean plants called phytoplankton.",
      "B": "Rainforests are home to more than half of all land species.",
      "C": "Oxygen makes up about a fifth of the gases in the Earth's atmosphere.",
      "D": "Cutting down forests releases large amounts of carbon dioxide into the air.",
      "E": "Some trees can go on producing oxygen for hundreds of years."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'These tiny organisms' göndergesi",
    "trapWarning": "B, C, D ve E konuyla ilgili ama 'bu küçük organizmalar' ifadesinin göndergesini vermez.",
    "explanation": "Sonraki cümledeki 'bu küçük organizmalar' fitoplanktonu gösterir (A şıkkı)."
  },
  {
    "id": "bank_pc_096",
    "type": "paragraph_completion",
    "question": "Daylight saving time was introduced to make better use of natural light. [_____] Critics, however, argue that changing the clocks twice a year disrupts sleep and may even increase the risk of accidents. Several countries have decided to stop changing their clocks.",
    "options": {
      "A": "Supporters say it saves energy and gives people more evening daylight.",
      "B": "It was first used widely in Europe during the First World War to save fuel.",
      "C": "The clocks usually go forward one hour in spring and back again in autumn.",
      "D": "Not all countries use daylight saving time, especially those near the equator.",
      "E": "Some people find it hard to remember exactly when the clocks are going to change."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Critics, however' → önce destekçiler",
    "trapWarning": "B, C ve D tarafsız bilgiler verir; E şıkkı bir sorun bildirir ve 'however' karşıtlığını bozar.",
    "explanation": "'Critics, however' karşıt görüşe geçer; boşlukta destekçilerin görüşü verilmelidir (A şıkkı)."
  },
  {
    "id": "bank_pc_097",
    "type": "paragraph_completion",
    "question": "Learning a new language as an adult is often considered very difficult. [_____] Adults can use their knowledge of grammar and their study skills to learn quickly. What they often lack is the time and the opportunity to practise.",
    "options": {
      "A": "However, adults actually have some advantages over children.",
      "B": "Children usually learn languages without any formal lessons.",
      "C": "Many adults give up after only a few months of study.",
      "D": "English is the most widely studied foreign language.",
      "E": "Some languages are harder for English speakers than others."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Yaygın görüş → 'However' → yetişkin avantajları",
    "trapWarning": "B şıkkı çocukların avantajını vurgular; C ve E zorluğu sürdürür; D şıkkı konu dışıdır.",
    "explanation": "Yetişkinlerin gramer bilgisi ve çalışma becerileri, 'yetişkinlerin bazı avantajları var' cümlesinin açıklamasıdır (A şıkkı)."
  },
  {
    "id": "bank_pc_098",
    "type": "paragraph_completion",
    "question": "The Antarctic is the coldest, windiest and driest continent on Earth. [_____] Only a few thousand scientists live there, mostly during the summer months. They study everything from climate change to the behaviour of penguins.",
    "options": {
      "A": "It has no permanent human population.",
      "B": "It contains about seventy percent of the world's fresh water.",
      "C": "It was first reached by explorers in the early 1800s.",
      "D": "Antarctica is larger than the whole of Europe.",
      "E": "Temperatures there have dropped below minus 89°C."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Only a few thousand scientists live there'",
    "trapWarning": "B, C, D ve E Antarktika hakkında doğru bilgilerdir ama nüfus konusuna geçişi sağlamaz.",
    "explanation": "'Yalnızca birkaç bin bilim insanı yaşıyor' ifadesi, kalıcı insan nüfusu olmadığı bilgisiyle bağlanır (A şıkkı)."
  },
  {
    "id": "bank_pc_099",
    "type": "paragraph_completion",
    "question": "The ancient city of Pompeii was destroyed by a volcanic eruption in 79 AD. [_____] As a result, archaeologists have found buildings, paintings and even loaves of bread almost exactly as they were. The site gives us a unique picture of daily life in Roman times.",
    "options": {
      "A": "The city was quickly buried under several metres of ash, which preserved it.",
      "B": "Mount Vesuvius, which destroyed the city, is still an active volcano today.",
      "C": "Pompeii was a wealthy Roman town with a population of about 11,000 people.",
      "D": "Many of its people managed to escape before the main eruption began.",
      "E": "The ruins were rediscovered by workers digging a canal in the eighteenth century."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'As a result ... almost exactly as they were'",
    "trapWarning": "B, C, D ve E Pompeii hakkında doğru bilgilerdir ama şehrin neden bu kadar iyi korunduğunu açıklamaz.",
    "explanation": "Binaların ve ekmeklerin neredeyse aynen bulunması, şehrin kül altında kalıp korunmasının sonucudur (A şıkkı)."
  },
  {
    "id": "bank_pc_100",
    "type": "paragraph_completion",
    "question": "Smiling can affect how we feel, not just show it. [_____] In one experiment, people who held a pen between their teeth, forcing a smile, rated cartoons as funnier. Some psychologists, however, have had difficulty repeating these results.",
    "options": {
      "A": "Some studies suggest that smiling can actually make us feel happier.",
      "B": "Most babies begin to smile at other people when they are about six weeks old.",
      "C": "People from different cultures tend to smile for quite different reasons.",
      "D": "A real smile involves the muscles around the eyes as well as the mouth.",
      "E": "It is often said that smiling uses fewer muscles than frowning does."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "İddia → deney → şüphe",
    "trapWarning": "B, C, D ve E gülümseme hakkında bilgiler verir ama gülümsemenin duyguyu etkilediği iddiasını kanıtlamaz.",
    "explanation": "Kalemli deney, gülümsemenin bizi daha mutlu edebileceğini gösteren çalışmaların örneğidir (A şıkkı)."
  }
];

export const PARAGRAPH_COMPLETION_BANK: YdsQuestion[] = shuffleQuestionList(RAW_PARAGRAPH_COMPLETION_BANK);
