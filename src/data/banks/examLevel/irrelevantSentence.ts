import { IrrelevantItem } from './helpers';

// Exam-level irrelevant sentence: the odd sentence stays on the same topic and
// reuses its key words, but shifts the focus the paragraph is developing.
export const XL_IRRELEVANT_SENTENCE: IrrelevantItem[] = [
  {
    s: [
      'Honeybees communicate the location of food sources to one another through a series of movements known as the "waggle dance".',
      'The direction of the dance indicates the direction of the food relative to the position of the Sun.',
      'Honey has been used by humans as a sweetener and a medicine for thousands of years.',
      'Meanwhile, the duration of the waggle tells other bees how far away the food is.',
      'Using this information, the bees that watch the dance can fly directly to flowers several kilometres away.'
    ],
    odd: 3,
    why: 'Paragraf arıların dansla nasıl iletişim kurduğunu anlatır. III. cümle balın insanlar tarafından kullanımına geçer; atıldığında II ve IV ("direction" → "Meanwhile, the duration") pürüzsüz bağlanır.'
  },
  {
    s: [
      'Before the invention of the printing press, books in Europe were copied by hand, usually by monks.',
      'This process was so slow that a single book could take months or even years to complete.',
      'As a result, books were extremely expensive and owned mainly by the Church and wealthy nobles.',
      'Gutenberg\'s press, which used movable metal type, was based partly on the design of wine presses.',
      'Most ordinary people, therefore, had little opportunity to learn to read.'
    ],
    odd: 4,
    why: 'Paragraf matbaa öncesinde kitapların el yazmasıyla çoğaltılmasının sonuçlarını (pahalılık, okuryazarlığın düşüklüğü) anlatır. IV. cümle Gutenberg baskısının tasarımına geçer ve "therefore" ile bağlanan sonuç zincirini böler.'
  },
  {
    s: [
      'Sleep deprivation has a measurable effect on the way the brain processes emotions.',
      'Sleep is also essential for the growth and repair of muscle tissue.',
      'Brain scans show that after a sleepless night, the amygdala, a region involved in fear and anger, becomes about sixty percent more reactive.',
      'At the same time, the connection between the amygdala and the prefrontal cortex, which normally keeps emotional responses under control, is weakened.',
      'This may explain why tired people often react more strongly to minor problems.'
    ],
    odd: 2,
    why: 'Paragraf uykusuzluğun duyguların işlenmesine etkisini anlatır. II. cümle uykunun kas onarımındaki rolüne geçer. Atıldığında I. cümledeki genel iddia III. cümledeki beyin taramasıyla doğrudan desteklenir.'
  },
  {
    s: [
      'The Silk Road was not a single road but a network of trade routes connecting China with the Mediterranean.',
      'Silk was produced in China using a process that was kept secret for centuries.',
      'Along these routes, merchants exchanged not only goods such as silk, spices and glass but also ideas.',
      'Buddhism, for example, spread from India to China largely through traders and monks travelling on the Silk Road.',
      'Technologies such as papermaking also moved westwards along the same routes.'
    ],
    odd: 2,
    why: 'Paragraf İpek Yolu\'nun bir ağ olarak mal ve fikir alışverişini anlatır. II. cümle ipeğin Çin\'de nasıl üretildiğine kayar; I. cümledeki "network of trade routes" ile III. cümledeki "Along these routes" doğrudan bağlanır.'
  },
  {
    s: [
      'Microplastics, tiny pieces of plastic less than five millimetres long, have now been found in almost every environment on Earth.',
      'Plastic production has increased from about two million tonnes in 1950 to more than four hundred million tonnes today.',
      'They have been detected in deep ocean trenches, in Arctic ice and even in the air above remote mountains.',
      'Recent studies have also found microplastics in human blood and lung tissue.',
      'Scientists do not yet know what effects, if any, these particles have on human health.'
    ],
    odd: 2,
    why: 'Paragraf mikroplastiklerin nerelerde bulunduğunu, sonunda da insan vücudunu anlatır. II. cümle plastik üretim istatistiğine geçer; III. cümledeki "They have been detected" I. cümledeki mikroplastiklere bağlanır.'
  },
  {
    s: [
      'In many cultures, the left hand has traditionally been associated with bad luck or impurity.',
      'Children who were naturally left-handed were often forced to write with their right hand at school.',
      'This practice, which was common in Europe until the mid-twentieth century, sometimes caused stuttering and learning difficulties.',
      'Today, educators recognise that handedness is largely determined before birth and should not be changed.',
      'Left-handed people are said to be overrepresented among artists and musicians.'
    ],
    odd: 5,
    why: 'Paragraf solaklığa karşı tarihsel önyargıyı ve okullarda çocukların zorlanmasını, sonunda da bugünkü anlayışı anlatır. V. cümle solakların sanatçılar arasında fazla olduğu iddiasına geçer ve akışın sonuç kısmından kopar.'
  },
  {
    s: [
      'Volcanic eruptions can have a significant effect on the global climate.',
      'When a large volcano erupts, it can send sulphur dioxide high into the stratosphere.',
      'There, the gas forms tiny droplets that reflect sunlight back into space and cool the Earth\'s surface.',
      'Volcanic soil is often very fertile, which is why many people choose to live near active volcanoes.',
      'After the eruption of Mount Pinatubo in 1991, for example, global temperatures fell by about half a degree for nearly two years.'
    ],
    odd: 4,
    why: 'Paragraf volkan patlamalarının iklime soğutucu etkisini anlatır. IV. cümle volkanik toprağın verimliliğine geçer. Atıldığında III. cümledeki soğuma ile V. cümledeki Pinatubo örneği doğrudan bağlanır.'
  },
  {
    s: [
      'For most of human history, people did not sleep in one continuous block of seven or eight hours.',
      'Historical records suggest that it was common to sleep in two separate periods, with a wakeful interval of an hour or more in the middle of the night.',
      'During this time, people would pray, read, talk to their neighbours or simply lie awake thinking.',
      'Modern sleep researchers recommend that adults get at least seven hours of sleep a night.',
      'This pattern gradually disappeared in the nineteenth century, as artificial lighting allowed people to stay up later in the evening.'
    ],
    odd: 4,
    why: 'Paragraf tarihteki iki parçalı uyku düzenini ve bu düzenin nasıl ortadan kalktığını anlatır. IV. cümle günümüz uyku önerilerine geçer; V. cümledeki "This pattern" III. cümledeki düzene gönderme yapar.'
  },
  {
    s: [
      'The Amazon rainforest produces a large share of its own rainfall.',
      'The Amazon River carries more water than the next seven largest rivers combined.',
      'Trees draw water from the soil and release it into the air through their leaves, forming clouds that bring rain further inland.',
      'Scientists warn that if too much of the forest is cleared, this cycle could break down.',
      'Large parts of the rainforest might then turn into dry grassland.'
    ],
    odd: 2,
    why: 'Paragraf ormanın kendi yağmurunu üretme döngüsünü ve bu döngünün bozulma riskini anlatır. II. cümle Amazon Nehri\'nin su miktarına geçer; III. cümle I. cümledeki iddianın nasıl gerçekleştiğini açıklar.'
  },
  {
    s: [
      'Placebos are inactive treatments, such as sugar pills, that have no direct physical effect on the body.',
      'Nevertheless, patients who take them often report real improvements in their symptoms, particularly pain.',
      'Researchers believe that the expectation of feeling better can trigger the release of natural painkillers in the brain.',
      'Many new drugs fail in clinical trials because they are no more effective than a placebo.',
      'Surprisingly, placebos can work even when patients are told that the pills contain no active ingredient.'
    ],
    odd: 4,
    why: 'Paragraf plasebonun nasıl ve neden etkili olduğunu anlatır. IV. cümle yeni ilaçların klinik denemelerdeki başarısızlığına kayar; odak plasebonun etkisinden ilaç geliştirmeye geçer.'
  },
  {
    s: [
      'Octopuses are among the most intelligent invertebrates on Earth.',
      'There are about three hundred known species of octopus, living in oceans all over the world.',
      'In laboratory experiments, they have learned to navigate mazes and to open screw-top jars to reach food.',
      'Some have even been observed escaping from their tanks at night and returning before morning.',
      'Such behaviour suggests a capacity for problem-solving and memory that was once thought to be limited to vertebrates.'
    ],
    odd: 2,
    why: 'Paragraf ahtapotların zekâsını örneklerle anlatır. II. cümle tür sayısı ve yaşam alanlarına geçer; III. cümledeki deneyler I. cümledeki zekâ iddiasının örnekleridir.'
  },
  {
    s: [
      'Universal basic income is a policy in which the government pays every citizen a fixed amount of money regardless of whether they work.',
      'Supporters argue that it would reduce poverty and give people the security to retrain or start businesses.',
      'Critics, on the other hand, worry that it would be extremely expensive and might discourage people from working.',
      'Unemployment rates in most developed countries fell during the decade before the pandemic.',
      'Small-scale trials in Finland and Kenya have provided some evidence, but the results have so far been inconclusive.'
    ],
    odd: 4,
    why: 'Paragraf temel gelir politikasını, destekçi ve eleştirmen görüşlerini ve denemeleri anlatır. IV. cümle işsizlik oranlarına dair genel bir istatistiğe geçer ve tartışmaya katkı sağlamaz.'
  },
  {
    s: [
      'The Great Fire of London in 1666 destroyed more than thirteen thousand houses and nearly ninety churches.',
      'Although it caused enormous damage, the fire also had some lasting benefits for the city.',
      'London was rebuilt with wider streets and buildings made of brick and stone instead of wood.',
      'These changes made future fires much less likely to spread.',
      'The fire is believed to have started in a bakery on Pudding Lane.'
    ],
    odd: 5,
    why: 'Paragraf yangının zararlarından sonra kalıcı faydalarına (yeniden inşa, yangın güvenliği) odaklanır. V. cümle yangının nerede başladığına döner; akış fayda ve sonuçlarla ilerlerken başa geri sıçrar.'
  },
  {
    s: [
      'Children who grow up bilingual often show advantages in tasks that require them to switch attention between different rules.',
      'Researchers believe this is because bilingual speakers constantly have to choose which language to use and suppress the other.',
      'Learning a second language as an adult is generally more difficult than learning it as a child.',
      'This regular mental exercise may strengthen the brain systems responsible for controlling attention.',
      'However, some recent studies have failed to find such advantages, and the debate continues.'
    ],
    odd: 3,
    why: 'Paragraf iki dilli çocukların dikkat kontrolündeki avantajlarını ve bunun açıklamasını anlatır. III. cümle yetişkinlerin dil öğrenme zorluğuna geçer; IV. cümledeki "This regular mental exercise" II. cümledeki sürece bağlanır.'
  },
  {
    s: [
      'The first vaccines were developed in the late eighteenth century, when Edward Jenner showed that cowpox could protect people against smallpox.',
      'Jenner had noticed that milkmaids who caught cowpox rarely became ill with smallpox.',
      'Smallpox had killed hundreds of millions of people over the centuries.',
      'He tested his idea by deliberately infecting a boy with cowpox and later exposing him to smallpox.',
      'When the boy did not become ill, Jenner concluded that his method was effective.'
    ],
    odd: 3,
    why: 'Paragraf Jenner\'ın gözlemini ve deneyini adım adım anlatır. III. cümle çiçek hastalığının tarihsel ölümcüllüğüne geçer; IV. cümledeki "He tested his idea" II. cümledeki gözleme bağlanır.'
  },
  {
    s: [
      'Many large cities are much warmer than the surrounding countryside, a phenomenon known as the "urban heat island" effect.',
      'Dark surfaces such as asphalt and roofs absorb heat during the day and release it slowly at night.',
      'In addition, the lack of vegetation means there is less shade and less cooling through evaporation.',
      'Some cities are now painting roofs white and planting more trees to reduce temperatures.',
      'Air conditioning accounts for a large share of electricity use in hot countries.'
    ],
    odd: 5,
    why: 'Paragraf kentsel ısı adası etkisini, nedenlerini ve şehirlerin aldığı önlemleri anlatır. V. cümle sıcak ülkelerde klimanın elektrik tüketimine geçer; odak şehirlerin ısınmasından enerji tüketimine kayar.'
  },
  {
    s: [
      'Although it is often called a "dead" language, Latin continues to influence the modern world in many ways.',
      'A large proportion of English vocabulary, particularly in science, law and medicine, comes from Latin.',
      'Latin was the official language of the Roman Empire, which at its height stretched from Britain to the Middle East.',
      'Scientific names for plants and animals are still given in Latin.',
      'In addition, Latin phrases such as "et cetera" and "per capita" are used every day.'
    ],
    odd: 3,
    why: 'Paragraf Latincenin günümüz dünyasındaki etkilerini sıralar. III. cümle Roma İmparatorluğu dönemindeki rolüne, yani geçmişe döner; diğer cümleler bugünkü etkileri anlatır.'
  },
  {
    s: [
      'Elephants have one of the longest pregnancies of any animal, lasting around twenty-two months.',
      'Elephants are threatened by poaching and the loss of their habitat.',
      'This long period allows the calf\'s brain to develop fully before birth.',
      'As a result, newborn elephants are able to stand and walk within hours.',
      'They can also recognise members of their family by smell and sound almost immediately.'
    ],
    odd: 2,
    why: 'Paragraf filin uzun gebelik süresini ve yavrunun doğuştan gelişmiş olmasını anlatır. II. cümle fillerin karşılaştığı tehditlere geçer; III. cümledeki "This long period" I. cümledeki gebelik süresine gönderme yapar.'
  },
  {
    s: [
      'The Mediterranean diet is based on fruit, vegetables, whole grains, fish and olive oil.',
      'Olive trees have been cultivated around the Mediterranean for more than six thousand years.',
      'Numerous studies have linked it to a lower risk of heart disease and stroke.',
      'Researchers believe that its benefits come mainly from its high levels of fibre and healthy fats.',
      'It may also help to protect against some forms of cancer and against cognitive decline in old age.'
    ],
    odd: 2,
    why: 'Paragraf Akdeniz diyetinin sağlık faydalarını anlatır. II. cümle zeytin ağacının tarihine geçer; III. cümledeki "linked it" I. cümledeki diyete gönderme yapar.'
  },
  {
    s: [
      'In the early twentieth century, most scientists believed that the universe was static and unchanging.',
      'In 1929, however, the astronomer Edwin Hubble showed that distant galaxies are moving away from us.',
      'The Hubble Space Telescope, named after him, was launched in 1990.',
      'Moreover, the farther away a galaxy is, the faster it appears to be moving.',
      'These observations provided the first strong evidence that the universe is expanding.'
    ],
    odd: 3,
    why: 'Paragraf Hubble\'ın genişleyen evren keşfini anlatır. III. cümle onun adını taşıyan teleskopa geçer; IV. cümledeki "Moreover" II. cümledeki gözlemi sürdürür.'
  },
  {
    s: [
      'Social media platforms are designed to keep users engaged for as long as possible.',
      'Features such as endless scrolling and notifications encourage people to check their phones repeatedly.',
      'Most platforms earn their income by selling advertising space.',
      'Psychologists warn that these features can make it difficult for some users to control the time they spend online.',
      'Some countries are now considering rules to limit such designs, especially for children.'
    ],
    odd: 3,
    why: 'Paragraf platformların kullanıcıyı bağlayan tasarım özelliklerini ve bunların etkilerini anlatır. III. cümle reklam gelir modeline geçer; IV. cümledeki "these features" II. cümledeki özelliklere gönderme yapar.'
  },
  {
    s: [
      'The Atacama Desert in Chile is one of the driest places on Earth.',
      'Some weather stations there have never recorded any rain at all.',
      'Because conditions there are so similar to those on Mars, NASA has used the desert to test equipment for future missions.',
      'The extremely clear and dry air also makes it one of the best places in the world for astronomy.',
      'Chile is one of the world\'s largest producers of copper.'
    ],
    odd: 5,
    why: 'Paragraf Atacama Çölü\'nün kuraklığını ve bu kuraklığın bilimsel kullanımını anlatır. V. cümle Şili\'nin bakır üretimine geçer; odak çölden ülke ekonomisine kayar.'
  },
  {
    s: [
      'Antibiotic resistance occurs when bacteria evolve so that the drugs designed to kill them no longer work.',
      'Alexander Fleming discovered penicillin by accident in 1928.',
      'One of the main causes is the overuse of antibiotics, both in medicine and in farming.',
      'Every time an antibiotic is used unnecessarily, resistant bacteria have a better chance of surviving and spreading.',
      'Experts warn that without urgent action, common infections could once again become deadly.'
    ],
    odd: 2,
    why: 'Paragraf antibiyotik direncinin nedenlerini ve sonuçlarını anlatır. II. cümle penisilinin keşfine, yani tarihe döner; III. cümle I. cümlede tanımlanan direncin ana nedenini verir.'
  },
  {
    s: [
      'Ancient Egyptians developed one of the earliest known systems of writing, known as hieroglyphs.',
      'Hieroglyphs combined pictures representing objects with signs representing sounds.',
      'For everyday purposes, scribes used a simpler, faster script called hieratic.',
      'The pyramids of Giza were built as tombs for the pharaohs.',
      'Over time, an even more simplified script, known as Demotic, came into common use.'
    ],
    odd: 4,
    why: 'Paragraf Mısır yazı sistemlerinin gelişimini (hiyeroglif, hiyeratik, demotik) anlatır. IV. cümle piramitlere geçer ve yazı sistemlerinin sıralı gelişimini böler.'
  },
  {
    s: [
      'Wolves were eliminated from Yellowstone National Park in the 1920s.',
      'Without predators, the number of elk grew rapidly, and they began to overgraze the young trees along the rivers.',
      'When wolves were reintroduced in 1995, the elk changed their behaviour and avoided open river valleys.',
      'Yellowstone was established in 1872 as the first national park in the world.',
      'As a result, trees along the riverbanks began to recover, providing habitats for birds and beavers.'
    ],
    odd: 4,
    why: 'Paragraf kurtların parktan yok edilmesi ve geri getirilmesinin ekosistem üzerindeki zincirleme etkilerini anlatır. IV. cümle parkın kuruluş tarihine geçer; V. cümledeki "As a result" III. cümledeki davranış değişikliğine bağlanır.'
  },
  {
    s: [
      'The Turkish coffee tradition was added to UNESCO\'s list of Intangible Cultural Heritage in 2013.',
      'The coffee is prepared by boiling very finely ground beans with water and, optionally, sugar in a small pot.',
      'It is served in small cups, often with a glass of water and a piece of Turkish delight.',
      'Coffee beans are grown mainly in tropical countries such as Brazil, Vietnam and Colombia.',
      'Beyond the drink itself, the tradition plays an important role in social life, from friendly conversation to marriage customs.'
    ],
    odd: 4,
    why: 'Paragraf Türk kahvesi geleneğini, hazırlanışını, sunumunu ve sosyal rolünü anlatır. IV. cümle kahve çekirdeğinin dünyada nerede yetiştiğine geçer; odak gelenekten küresel tarıma kayar.'
  },
  {
    s: [
      'Most people believe that they make decisions based on careful reasoning.',
      'However, research in psychology suggests that many of our choices are influenced by factors we are not aware of.',
      'In one study, people who held a warm drink judged a stranger to be friendlier than those who held a cold one.',
      'Psychology became an independent academic discipline in the late nineteenth century.',
      'Findings like this show how easily our judgements can be shaped by small, unnoticed details.'
    ],
    odd: 4,
    why: 'Paragraf kararlarımızın farkında olmadığımız etkenlerle şekillendiğini bir deneyle anlatır. IV. cümle psikolojinin bir bilim dalı olarak tarihine geçer; V. cümledeki "Findings like this" III. cümledeki deneye gönderme yapar.'
  },
  {
    s: [
      'Desalination, the process of removing salt from seawater, is becoming an important source of drinking water in dry regions.',
      'The most common method forces seawater through special membranes that allow water molecules to pass but block salt.',
      'This process, however, requires large amounts of energy, which makes the water expensive.',
      'In addition, the extremely salty waste water that is left over can harm marine life if it is released back into the sea.',
      'Seawater makes up about ninety-seven percent of all the water on Earth.'
    ],
    odd: 5,
    why: 'Paragraf tuzdan arındırmanın yöntemini ve dezavantajlarını (enerji, atık su) anlatır. V. cümle deniz suyunun dünyadaki oranına dair genel bir bilgiye geçer; paragrafın vardığı dezavantaj tartışmasıyla ilgisi yoktur.'
  },
  {
    s: [
      'Tardigrades, also known as water bears, are microscopic animals that can survive in extreme conditions.',
      'They can withstand temperatures close to absolute zero as well as heat above one hundred and fifty degrees Celsius.',
      'In 2007, tardigrades were even sent into space and survived exposure to the vacuum and radiation outside the spacecraft.',
      'Their remarkable toughness comes from their ability to dry out almost completely and enter a state similar to suspended animation.',
      'Tardigrades usually live in moss, lichens and the sediment at the bottom of lakes.'
    ],
    odd: 5,
    why: 'Paragraf su ayılarının aşırı koşullara dayanıklılığını ve bunun sebebini anlatır. V. cümle doğal yaşam alanlarına geçer; IV. cümle dayanıklılığın açıklamasıyla paragrafı zaten tamamlamıştır.'
  },
  {
    s: [
      'The Byzantine city of Constantinople was protected by some of the most impressive walls of the ancient world.',
      'The main land walls, built in the fifth century, consisted of a moat and two separate lines of fortifications.',
      'For nearly a thousand years, these defences allowed the city to resist attacks by many different armies.',
      'They were finally breached in 1453, when Ottoman forces used enormous cannons to break through them.',
      'Constantinople was also famous for its markets, where goods from Asia and Europe were traded.'
    ],
    odd: 5,
    why: 'Paragraf Konstantinopolis surlarını, yapısını, dayanıklılığını ve sonunda aşılmasını anlatır. V. cümle şehrin pazarlarına ve ticaretine geçer; odak savunmadan ekonomiye kayar.'
  },
  {
    s: [
      'Migratory birds can travel thousands of kilometres and still return to the same nesting site each year.',
      'Many birds lose up to half of their body weight during long migrations.',
      'Scientists believe that they use several different methods to find their way.',
      'Some rely on the position of the Sun and stars, while others appear to sense the Earth\'s magnetic field.',
      'Familiar landmarks such as coastlines and mountain ranges may also help them in the final stages of their journey.'
    ],
    odd: 2,
    why: 'Paragraf göçmen kuşların yön bulma yöntemlerini anlatır. II. cümle göç sırasında kilo kaybına geçer; III. cümle I. cümledeki yön bulma başarısının nasıl açıklandığını anlatmaya başlar.'
  },
  {
    s: [
      'For a long time, Neanderthals were imagined as primitive, brutish creatures.',
      'Recent archaeological discoveries, however, have changed this picture considerably.',
      'There is now evidence that they buried their dead, made jewellery from shells and eagle claws, and may even have created cave paintings.',
      'Neanderthals lived in Europe and western Asia from about four hundred thousand to forty thousand years ago.',
      'Such findings suggest that they were capable of symbolic thought, much like modern humans.'
    ],
    odd: 4,
    why: 'Paragraf Neandertallere dair değişen imajı ve sembolik düşünce kanıtlarını anlatır. IV. cümle yaşadıkları yer ve zamana dair genel bilgiye geçer; V. cümledeki "Such findings" III. cümledeki buluntulara gönderme yapar.'
  }
];