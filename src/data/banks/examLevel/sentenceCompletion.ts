import { ExamItem } from './helpers';

// Exam-level sentence completion: academic stems of real ÖSYM length, five
// grammatical options, distractors that break tense, connector logic or reference.
export const XL_SENTENCE_COMPLETION: ExamItem[] = [
  {
    q: 'Although the Industrial Revolution is often associated with the steam engine, _____.',
    o: [
      'historians increasingly argue that changes in agriculture and textile production were at least as decisive',
      'the steam engine was first used to pump water out of coal mines in the early eighteenth century',
      'it had spread from Britain to continental Europe and North America by the mid-nineteenth century',
      'since many factories continued to rely on water power well into the nineteenth century',
      'the invention made it possible for factories to be built far away from rivers'
    ],
    why: '"Although" zıtlık ister: Devrim genelde buharlı makineyle ilişkilendirilir, ama tarihçiler başka etkenlerin de en az onun kadar belirleyici olduğunu savunur.',
    trap: 'B ve E buharlı makine hakkında doğru bilgiler verir ama zıtlık kurmaz; D "since" ile ikinci bir yan cümle başlatır, ana cümle eksik kalır.',
    tactic: 'Although + beklenti → ana cümlede beklentiyi kıran düşünce'
  },
  {
    q: 'Unless governments invest heavily in early warning systems and coastal defences, _____.',
    o: [
      'the economic cost of extreme weather events is likely to rise sharply over the coming decades',
      'many coastal cities had already suffered severe flooding during the previous century',
      'early warning systems have been credited with saving thousands of lives in South Asia',
      'the frequency of tropical storms would have remained largely unchanged',
      'whereas inland regions face a growing risk of prolonged drought'
    ],
    why: '"Unless" (-mezse) gerçek bir koşuldur ve ana cümlede gelecek ya da olasılık bildiren bir sonuç ister: yatırım yapılmazsa maliyet keskin biçimde artacaktır.',
    trap: 'B geçmiş zamana, D Type 3 yapısına (would have) kayar; bunlar "Unless + Present" ile uyuşmaz. E yalnızca bir zıtlık yan cümlesidir.',
    tactic: 'Koşul bağlacı + Present → will / be likely to / may'
  },
  {
    q: 'The new vaccine proved remarkably effective in clinical trials; _____, its high production cost may prevent it from reaching the populations that need it most.',
    o: ['however', 'therefore', 'for instance', 'in other words', 'likewise'],
    why: 'İlk cümle olumlu (aşı etkili), ikinci cümle olumsuz (maliyet engel olabilir). Noktalı virgülden sonra zıtlık bildiren geçiş zarfı gerekir: however.',
    trap: '"therefore" sebep-sonuç kurar; etkili olması maliyetin engel olmasının sebebi değildir.',
    tactic: '; _____, kalıbında iki cümlenin yönünü karşılaştır'
  },
  {
    q: 'By the time the first European settlers arrived in Australia, _____.',
    o: [
      'Aboriginal peoples had been living on the continent for at least fifty thousand years',
      'Aboriginal communities will have developed complex systems of land management',
      'many of the continent\'s large mammals have become extinct because of climate change',
      'the British government decides to establish a penal colony in New South Wales',
      'historians are still debating how the first humans reached the continent'
    ],
    why: '"By the time + Past" ana cümlede Past Perfect (had V3) ister: Avrupalılar geldiğinde Aborjinler en az elli bin yıldır kıtada yaşıyordu.',
    trap: 'B Future Perfect, C Present Perfect, D Present Simple kullanır; geçmişteki bir zaman noktasıyla uyuşmazlar. E konuyla ilgili ama zaman bağını kurmaz.',
    tactic: 'By the time + V2 → had V3'
  },
  {
    q: 'So rapidly did the disease spread through the densely populated port cities _____.',
    o: [
      'that local authorities were unable to isolate the infected before the next ship arrived',
      'because sailors carried it from one harbour to another within days',
      'which explains why port cities were the first to introduce quarantine laws',
      'although doctors at the time had little understanding of how infections were transmitted',
      'as if the authorities had deliberately ignored the warnings of physicians'
    ],
    why: 'Cümle başındaki "So + sıfat/zarf + devrik yapı" mutlaka "that" ile tamamlanır (o kadar hızlı yayıldı ki...).',
    trap: 'B ve D anlam olarak konuya uyar ama "so ... that" yapısını tamamlamaz; devrik "So rapidly did..." kalıbı yarım kalır.',
    tactic: 'So/Such ... that yapısı: devrik "So" görünce "that" ara'
  },
  {
    q: 'Researchers found that participants who slept fewer than six hours a night were significantly more likely to catch a cold _____.',
    o: [
      'than those who slept seven hours or more after being exposed to the virus',
      'so that their immune systems could produce more antibodies',
      'unless they had been vaccinated against influenza in the previous winter',
      'even though sleep has long been known to strengthen the immune system',
      'as long as they followed a balanced diet throughout the study'
    ],
    why: '"more likely" bir karşılaştırma kurar ve "than" ile tamamlanır: altı saatten az uyuyanlar, yedi saat ve üstü uyuyanlara göre daha kolay hastalanıyordu.',
    trap: 'D konuyla ilgili gibi görünür ama "even though" zıtlık kurar; uykunun bağışıklığı güçlendirmesi bulguyla çelişmez, onu destekler.',
    tactic: 'Karşılaştırma sıfatı (more/less ... ) → than ile tamamla'
  },
  {
    q: 'It was not until scientists developed the electron microscope in the 1930s _____.',
    o: [
      'that the internal structure of viruses could be observed directly',
      'when bacteria had first been identified as a cause of disease',
      'and researchers have since built ever more powerful instruments',
      'because light microscopes were unable to magnify objects that small',
      'while many biologists doubted that viruses were living organisms'
    ],
    why: '"It was not until ... that ..." (ancak ... olunca ...) kalıbıdır; ikinci kısım mutlaka "that" ile başlar.',
    trap: 'D sebebi doğru verir ama kalıbı tamamlamaz; B "when" ile ve yanlış zamanla gelir.',
    tactic: 'It was not until X that Y kalıbı'
  },
  {
    q: 'While some economists argue that a higher minimum wage reduces employment among young workers, _____.',
    o: [
      'others point to studies showing that moderate increases have had little effect on job numbers',
      'young workers are more likely than older ones to be employed in the service sector',
      'a higher minimum wage is usually introduced during periods of strong economic growth',
      'so governments have generally been reluctant to raise it in recent years',
      'they also claim that it lowers the incomes of low-paid families'
    ],
    why: '"While" burada iki görüşü karşılaştırır: bazı ekonomistler şunu savunurken, diğerleri tam tersini gösteren çalışmalara işaret eder.',
    trap: 'E aynı ekonomistlerin görüşünü sürdürür, zıtlık yoktur. D "so" ile While cümlesine ikinci bağlaç ekler.',
    tactic: 'While/Whereas: some ... others kıyası'
  },
  {
    q: 'Had the bridge been inspected more regularly, _____.',
    o: [
      'engineers might have detected the cracks in its supporting cables before the collapse',
      'the authorities would have to close it to heavy traffic',
      'it will be rebuilt with stronger materials within two years',
      'the cracks in its cables had been visible for several months',
      'many residents complain about the cost of the repairs'
    ],
    why: '"Had + özne + V3" devrik Type 3 koşuldur; sonucu "would/might/could have V3" ile verilir.',
    trap: 'B "would have to" Type 2 yapısıdır; C gelecek zaman, D Past Perfect düz cümledir, koşul sonucunu karşılamaz.',
    tactic: 'Devrik If (Had + V3) → would/might/could have V3'
  },
  {
    q: 'Many species of coral can recover from a single bleaching event, _____.',
    o: [
      'but repeated episodes within a few years leave them too little time to regenerate',
      'because the algae living in their tissues provide them with most of their energy',
      'which is why bleaching is often described as the most serious threat to reefs',
      'so marine biologists have stopped monitoring reefs after bleaching events',
      'as long as water temperatures continue to rise at their current rate'
    ],
    why: 'Mercanlar tek bir ağarmadan kurtulabilir, ama birkaç yıl içinde tekrarlanan ağarmalar yenilenme süresi bırakmaz. "but" beklenen zıtlığı kurar.',
    trap: 'C anlam olarak ters düşer: kurtulabiliyorlarsa bu en ciddi tehdit oldukları için değildir. E sıcaklık artışını kurtulmanın koşulu yapar, mantıksızdır.',
    tactic: 'Olumlu ilk yarı → but ile sınırlama'
  },
  {
    q: 'The committee rejected the proposal, _____ it had been supported by a majority of local residents.',
    o: ['even though', 'because', 'so that', 'in case', 'as soon as'],
    why: 'Öneri halkın çoğunluğu tarafından desteklenmesine rağmen reddedildi; beklenmedik sonuç zıtlık bağlacı ister: even though.',
    trap: '"because" desteğin reddin sebebi olduğunu söyler, mantıksızdır.',
    tactic: 'Beklenmedik sonuç → zıtlık bağlacı'
  },
  {
    q: 'Just as the printing press transformed the way knowledge was shared in fifteenth-century Europe, _____.',
    o: [
      'the internet has fundamentally changed how information is produced and distributed today',
      'the first printed books were mostly religious texts written in Latin',
      'Johannes Gutenberg is often regarded as one of the most influential figures in history',
      'literacy rates remained low among the rural population for centuries',
      'it was not until the nineteenth century that newspapers became widely available'
    ],
    why: '"Just as X, Y" (tıpkı X gibi Y de) iki benzer durumu karşılaştırır: matbaa nasıl bilgiyi dönüştürdüyse internet de bugün bunu yapmıştır.',
    trap: 'B, C ve D matbaa hakkında doğru bilgiler verir ama benzetmenin ikinci tarafını kurmaz.',
    tactic: 'Just as / In the same way → benzer ikinci örnek'
  },
  {
    q: 'The drug had to be withdrawn from the market _____.',
    o: [
      'after it was found to increase the risk of heart attack in elderly patients',
      'so that it could be prescribed to a wider range of patients',
      'because it had been approved by health authorities in several countries',
      'unless it will be approved by the national health authority',
      'whether or not doctors had recommended it to their patients'
    ],
    why: 'İlacın piyasadan çekilmesinin mantıklı sebebi/zamanı: yaşlı hastalarda kalp krizi riskini artırdığının anlaşılmasından sonra.',
    trap: 'C onaylanmış olmayı çekilmenin sebebi gibi sunar, mantıksızdır. D "unless + will" gramer hatasıdır.',
    tactic: 'Ana cümlenin sebebini/zamanını veren yan cümle'
  },
  {
    q: 'Whereas earlier generations of migrants tended to settle permanently in their host countries, _____.',
    o: [
      'many of today\'s migrants move back and forth between countries several times during their working lives',
      'they often faced considerable discrimination in housing and employment',
      'host countries benefited greatly from the labour they provided',
      'migration has been one of the main drivers of economic growth',
      'because travel was much more expensive and dangerous in the past'
    ],
    why: '"Whereas" iki grubu karşılaştırır: önceki kuşaklar kalıcı yerleşirken bugünün göçmenleri ülkeler arasında gidip gelir.',
    trap: 'B ve C aynı eski kuşakları anlatmaya devam eder; karşılaştırmanın ikinci grubu yoktur.',
    tactic: 'Whereas: aynı ölçüte göre iki farklı grup'
  },
  {
    q: 'The more frequently a memory is recalled, _____.',
    o: [
      'the more likely it is to be altered by the person\'s current beliefs and emotions',
      'it becomes much easier for psychologists to measure its accuracy',
      'so the brain stores it in a different region from other memories',
      'than memories that are recalled only once or twice',
      'which means that most childhood memories are completely reliable'
    ],
    why: '"The more ..., the more ..." (ne kadar çok ..., o kadar ...) kalıbı ikinci kısımda da "the + karşılaştırma" ister.',
    trap: 'B anlam olarak yakın görünür ama "the more" kalıbını tamamlamaz; D "than" ile yanlış karşılaştırma kurar.',
    tactic: 'The + comparative, the + comparative'
  },
  {
    q: 'Despite having one of the highest levels of healthcare spending in the world, _____.',
    o: [
      'the country ranks below many poorer nations in life expectancy',
      'its hospitals are equipped with the latest medical technology',
      'although many citizens still lack adequate health insurance',
      'because the government has reduced the budget for public hospitals',
      'it is the reason why so many doctors move there from abroad'
    ],
    why: '"Despite" yüksek harcamaya rağmen beklenmedik bir sonuç ister: ülke yaşam süresinde daha yoksul ülkelerin gerisindedir.',
    trap: 'B beklenen bir sonuçtur (zıtlık yok). C "although" ile cümleye ikinci zıtlık bağlacı ekler.',
    tactic: 'Despite + V-ing → beklentiyi kıran ana cümle'
  },
  {
    q: 'Archaeologists believe the settlement was abandoned suddenly, _____.',
    o: [
      'as cooking pots and tools were found exactly where their owners appear to have left them',
      'although its inhabitants appear to have taken all their belongings with them',
      'so that its inhabitants could move closer to the river',
      'unless further excavations reveal evidence of a gradual decline',
      'which they have been excavating since the early 1990s'
    ],
    why: 'Yerleşimin aniden terk edildiği inancının kanıtı: pişirme kapları ve aletler sahiplerinin bıraktığı yerde bulunmuştur. "as" sebep bildirir.',
    trap: 'B eşyaların götürüldüğünü söyler; bu ani değil planlı bir terk demektir ve iddiayı çürütür. E "which" ile yanlış öğeye bağlanır.',
    tactic: 'İddia + kanıt: as/since/because'
  },
  {
    q: 'Not only does regular physical activity reduce the risk of heart disease, _____.',
    o: [
      'but it also appears to slow the decline of memory in older adults',
      'and many people find it difficult to exercise on a regular basis',
      'it is also recommended by doctors in most developed countries',
      'so people who exercise should still have regular medical check-ups',
      'but heart disease remains the leading cause of death worldwide'
    ],
    why: '"Not only ... but (it) also ..." kalıbıdır ve iki faydayı yan yana koyar: kalp hastalığı riskini azaltır, ayrıca hafıza kaybını yavaşlatır.',
    trap: 'E "but" içerir ama "also" yoktur ve fayda değil olumsuz bir bilgi verir; C kalıbın "but" kısmını atlar.',
    tactic: 'Not only (devrik) ... but also'
  },
  {
    q: 'Since the central bank raised interest rates last spring, _____.',
    o: [
      'the number of new mortgage applications has fallen by nearly a third',
      'house prices fell sharply in the months before the decision',
      'consumers will borrow less money to buy cars and furniture',
      'the inflation rate was much higher than the government had expected',
      'many economists had warned that the increase was too small'
    ],
    why: '"Since + geçmiş bir an" (-den beri) ana cümlede Present Perfect ister: geçen bahardan beri ipotek başvuruları üçte bir azalmıştır.',
    trap: 'B, D ve E geçmiş zaman kullanır; C gelecek zamandır. "since" burada sebep değil zaman bildirir (last spring).',
    tactic: 'Since + V2 (zaman) → have/has V3'
  },
  {
    q: 'The study\'s findings should be interpreted with caution, _____.',
    o: [
      'given that the sample consisted almost entirely of university students from a single country',
      'since they confirm the results of several earlier experiments',
      'so researchers decided to publish them in a leading journal',
      'even though they were based on a very small number of participants',
      'as long as other scientists have not been able to repeat them'
    ],
    why: 'Bulgulara temkinle yaklaşılmalıdır, çünkü örneklem neredeyse tamamen tek bir ülkedeki üniversite öğrencilerinden oluşur. "given that" (göz önüne alındığında) gerekçe verir.',
    trap: 'D zıtlık bağlacıyla gelir; oysa küçük örneklem temkinin sebebidir, zıttı değildir. B ise temkini değil güveni destekler.',
    tactic: 'Uyarı/çekince + gerekçe'
  },
  {
    q: 'Glaciers in the Alps have lost about half of their volume since 1900, _____.',
    o: [
      'and scientists predict that most of the remaining ice will disappear by the end of this century',
      'although average temperatures in the region have risen faster than the global average',
      'so that ski resorts could expand to higher altitudes',
      'unless greenhouse gas emissions had been reduced much earlier',
      'which caused temperatures in the region to rise more quickly'
    ],
    why: 'Buzulların yarısını kaybetmesi bilgisine aynı yönde bir devam gelir: kalan buzun da büyük kısmının yüzyıl sonuna kadar yok olacağı öngörülüyor.',
    trap: 'B zıtlık kurar ama sıcaklık artışı erimenin sebebidir, zıttı değil. E sebep-sonuç yönünü tersine çevirir.',
    tactic: 'Aynı yönde bilgi: and / moreover'
  },
  {
    q: 'In order for a new law to come into force in many parliamentary systems, _____.',
    o: [
      'it must first be approved by both houses and then signed by the head of state',
      'citizens have often protested against laws they considered unfair',
      'the government would have needed the support of the opposition',
      'it was published in the official gazette the following week',
      'so that the courts are able to interpret it consistently'
    ],
    why: '"In order for X to do Y" (X\'in Y yapabilmesi için) şart bildirir; ana cümlede zorunluluk (must) beklenir.',
    trap: 'C Type 3 kip yapısına, D geçmiş zamana kayar; genel bir kuralı anlatan cümleyle uyuşmazlar. E ikinci bir amaç bağlacı ekler.',
    tactic: 'In order for ... to → must/have to'
  },
  {
    q: '_____, the company decided to postpone the launch of its new smartphone until the following year.',
    o: [
      'Faced with a global shortage of computer chips',
      'Having launched its new smartphone successfully',
      'Although sales of its previous model were disappointing',
      'As soon as the new model had been released',
      'Whereas its competitors also delayed their launches'
    ],
    why: 'Sadeleştirilmiş yan cümle (Faced with = küresel çip kıtlığıyla karşılaşınca) ertelemenin mantıklı sebebini verir ve özne (the company) ile uyumludur.',
    trap: 'B telefonun zaten başarıyla piyasaya sürüldüğünü söyler, ertelemeyle çelişir. C zıtlık kurar ama kötü satışlar ertelemenin zıttı değildir.',
    tactic: 'Reduction: V3 (pasif anlam) + ana cümlenin öznesi'
  },
  {
    q: 'Although most people believe that they can multitask efficiently, _____.',
    o: [
      'experiments show that switching between tasks reduces both speed and accuracy',
      'many workplaces now encourage employees to handle several tasks at once',
      'they usually find it easier to concentrate in a quiet environment',
      'because the human brain has a limited capacity for attention',
      'multitasking has become a common feature of modern working life'
    ],
    why: 'İnsanlar verimli çoklu görev yapabildiklerine inanır, ama deneyler görev değiştirmenin hızı ve doğruluğu azalttığını gösterir. İnanç ile gerçek arasındaki zıtlık kurulur.',
    trap: 'B ve E inancı destekleyen gözlemlerdir, zıtlık yoktur. D sebep bağlacıyla gelir ve ana cümle eksik kalır.',
    tactic: 'Although + inanç → ana cümlede kanıtla çürütme'
  },
  {
    q: 'The ancient city of Petra remained unknown to the Western world _____.',
    o: [
      'until a Swiss explorer disguised as a merchant reached it in 1812',
      'because it was built by the Nabataeans more than two thousand years ago',
      'since its buildings had been carved directly into the rock',
      'while it is now one of the most visited sites in the Middle East',
      'so that its treasures were protected from foreign invaders'
    ],
    why: '"remained unknown ... until ..." (... e kadar bilinmeden kaldı) doğal bir zaman sınırı ister: 1812\'de bir İsviçreli kâşif oraya ulaşana kadar.',
    trap: 'B ve C doğru bilgiler verir ama bilinmemenin sebebi değildir. E amaç bağlacıyla mantıksız bir niyet atfeder.',
    tactic: 'remain / stay ... until'
  },
  {
    q: 'Even if the treaty is signed by all member states this year, _____.',
    o: [
      'it may take several years before its provisions have any measurable effect on emissions',
      'negotiations had broken down several times over the previous decade',
      'it would have been the first agreement of its kind',
      'because several countries have refused to reduce their emissions',
      'the member states signed a similar agreement in 2015'
    ],
    why: '"Even if" (-se bile) gerçekleşse bile değişmeyecek bir sonucu verir: anlaşma imzalansa bile etkisinin görülmesi yıllar alabilir. Present koşul → may/will.',
    trap: 'C Type 3 sonucudur ve "is signed" ile uyuşmaz. B ve E geçmiş zamana kayar.',
    tactic: 'Even if + Present → may/will (değişmeyen sonuç)'
  },
  {
    q: 'Bees are able to find their way back to the hive _____.',
    o: [
      'by using the position of the sun as a compass, even on cloudy days',
      'so that they can pollinate a wide variety of flowering plants',
      'although they rarely fly more than a few kilometres from it',
      'which they build from wax produced by glands in their bodies',
      'as long as the hive is painted in a bright colour'
    ],
    why: 'Soru arıların yolu "nasıl" bulduğuna yöneliktir; "by + V-ing" yöntem bildirir: güneşin konumunu pusula olarak kullanarak.',
    trap: 'B amaç bildirir ve yol bulmanın yöntemini açıklamaz; E dayanaksız bir koşul ekler.',
    tactic: 'be able to + yöntem: by V-ing'
  },
  {
    q: 'What makes the Voynich manuscript so fascinating to scholars is _____.',
    o: [
      'that no one has yet succeeded in deciphering the language in which it is written',
      'because it contains hundreds of illustrations of unknown plants',
      'it was discovered by a book dealer in Italy in 1912',
      'which has been carbon-dated to the early fifteenth century',
      'whether it was written by a single author or several'
    ],
    why: 'Özne bir isim cümlesidir ("What makes ... is"); yüklemden sonra da isim cümlesi gelir: "that no one has yet succeeded..." (kimsenin henüz çözememiş olması).',
    trap: 'B "because" ile başlar; "is because" ÖSYM\'de doğru kabul edilmez. E isim cümlesidir ama belirsizlik bildirir, büyüleyici olan şeyi açıklamaz.',
    tactic: 'What ... is + that-clause (noun clause)'
  },
  {
    q: 'The government introduced a tax on sugary drinks _____.',
    o: [
      'in an attempt to reduce the high rates of childhood obesity in the country',
      'even though childhood obesity had been declining for several years',
      'unless soft drink companies agree to lower the sugar content',
      'which most nutritionists considered unnecessary and harmful',
      'as a result of which sales of bottled water decreased dramatically'
    ],
    why: 'Şekerli içecek vergisinin mantıklı amacı: çocukluk obezitesini azaltma çabası ("in an attempt to").',
    trap: 'B obezitenin zaten azaldığını söyler, verginin gerekçesini ortadan kaldırır. E sonuç verir ama mantıksızdır (şeker vergisi su satışlarını azaltmaz).',
    tactic: 'Politika + amaç: in an attempt to / in order to'
  },
  {
    q: 'Scientists have long been puzzled by the fact that _____.',
    o: [
      'some animals, such as the naked mole-rat, show almost no signs of ageing',
      'they have not been able to explain why the universe is expanding',
      'because the human genome contains about twenty thousand genes',
      'whether life could exist on the moons of Jupiter',
      'how certain birds are able to navigate across entire continents'
    ],
    why: '"the fact that" ardından tam ve kesin bir bilgi cümlesi alır: bazı hayvanlarda neredeyse hiç yaşlanma belirtisi görülmemesi.',
    trap: 'D ve E "whether/how" ile soru içerikli isim cümlesidir; "the fact that" kesin bir olgu ister. B öznesi "they" bilim insanlarıdır, anlamı tekrarlar.',
    tactic: 'the fact that + kesin bilgi (soru kelimesi değil)'
  },
  {
    q: 'Much as the novelist admired the work of her contemporaries, _____.',
    o: [
      'she rarely allowed their styles to influence her own writing',
      'she often praised them in interviews and public lectures',
      'so she wrote several essays about their novels',
      'her contemporaries also admired her work enormously',
      'because she had studied literature at the same university'
    ],
    why: '"Much as" (ne kadar ... -se de) zıtlık bildirir: çağdaşlarına hayran olmasına rağmen onların üslubunun kendi yazısını etkilemesine nadiren izin verdi.',
    trap: 'B ve C hayranlığın beklenen sonuçlarıdır, zıtlık yoktur. "Much as" seyrek görülür ama "although" anlamındadır.',
    tactic: 'Much as = although'
  },
  {
    q: 'Once a language loses its last native speaker, _____.',
    o: [
      'much of the cultural knowledge encoded in it is lost forever',
      'linguists had recorded thousands of hours of conversation in it',
      'it was spoken by several hundred thousand people',
      'so researchers try to document endangered languages',
      'even though it may have been spoken for thousands of years'
    ],
    why: '"Once" (-ince, -dığı anda) genel bir sonuç ister: bir dil son konuşanını kaybettiğinde, içinde kodlanmış kültürel bilginin çoğu sonsuza dek kaybolur.',
    trap: 'B ve C geçmiş zamanlıdır, genel kural cümlesiyle uyuşmaz. E zıtlık yan cümlesi olarak eklenir ve ana cümle eksik kalır.',
    tactic: 'Once/When + Present → genel sonuç (Present)'
  },
  {
    q: 'Coffee was banned several times in the Ottoman Empire during the sixteenth and seventeenth centuries, _____.',
    o: [
      'as the authorities feared that coffee houses had become centres of political discussion',
      'although it had been introduced to Istanbul from Yemen in the 1550s',
      'so that it soon spread to Venice, London and Paris',
      'unless it had been prepared according to traditional methods',
      'which is still consumed widely throughout modern Turkey'
    ],
    why: 'Kahvenin yasaklanmasının gerekçesi: yetkililer kahvehanelerin siyasi tartışma merkezine dönüşmesinden korkuyordu.',
    trap: 'B bir zıtlık bağlacı kullanır ama Yemen\'den gelmesi yasakla çelişmez. E "which" ile kahveye bağlanır ama yasağın açıklamasını değil, alakasız bir bilgiyi verir.',
    tactic: 'Olay + gerekçe: as / because'
  },
  {
    q: 'The researchers had expected the drug to lower blood pressure in all age groups; _____.',
    o: [
      'instead, it proved effective only in patients under the age of sixty',
      'as a result, they recommended it for patients of all ages',
      'similarly, it reduced cholesterol levels in younger patients',
      'for example, it lowered blood pressure in elderly patients',
      'that is, it was expected to work in all patients'
    ],
    why: 'Beklenti (tüm yaş grupları) ile sonuç (yalnızca altmış yaş altı) çelişir; "instead" bu beklenmedik değişimi verir.',
    trap: 'B beklentiyi gerçekleşmiş gibi sunar. E "that is" ile ilk cümleyi yalnızca tekrarlar.',
    tactic: 'had expected ... → instead / however'
  },
  {
    q: 'Unlike their larger relatives, which hunt by sight, _____.',
    o: [
      'most small bats rely on echolocation to locate insects in complete darkness',
      'large fruit bats are active mainly at dusk and dawn',
      'bats are the only mammals that are capable of true flight',
      'they have excellent eyesight and a highly developed sense of smell',
      'many small birds also catch insects while they are flying'
    ],
    why: '"Unlike" iki grubu karşılaştırır: görerek avlanan büyük akrabalarının aksine, küçük yarasalar karanlıkta böcek bulmak için ekolokasyon kullanır.',
    trap: 'D "they" ile görme yeteneğini öne çıkarır; zıtlık değil benzerlik kurar. B yine büyük yarasaları anlatır.',
    tactic: 'Unlike X → X\'ten farklı özellik taşıyan özne'
  },
  {
    q: 'Students who were allowed to choose their own topics produced more original essays, _____.',
    o: [
      'whereas those who were assigned topics tended to repeat arguments from their textbooks',
      'because their teachers had given them clear instructions',
      'so that they were able to finish them more quickly',
      'which suggests that choice has little effect on creativity',
      'although they were all given the same amount of time'
    ],
    why: 'Konu seçebilen öğrenciler ile konu verilen öğrenciler karşılaştırılır: "whereas" ile ikinci grup verilir.',
    trap: 'D bulgunun tam tersi bir sonuç çıkarır. E zıtlık kurar gibi görünür ama eşit süre verilmesi daha özgün yazmanın zıttı değildir.',
    tactic: 'Deney grubu – kontrol grubu kıyası'
  },
  {
    q: 'Provided that the samples are stored at a constant low temperature, _____.',
    o: [
      'they can remain usable for genetic analysis for several decades',
      'scientists had collected them from more than forty countries',
      'they would have been destroyed by bacteria',
      'the laboratory has received new funding this year',
      'whereas most of them were damaged during transport'
    ],
    why: '"Provided that" (-mek şartıyla) bir koşul verir; ana cümle bu koşulda geçerli olan sonucu söyler: onlarca yıl genetik analiz için kullanılabilir kalırlar.',
    trap: 'C Type 3 sonucudur ve Present koşulla uyuşmaz; ayrıca anlamı tersine çevirir.',
    tactic: 'Provided that / As long as + Present → can/will'
  },
  {
    q: 'Although the theory of continental drift was initially dismissed by most geologists, _____.',
    o: [
      'it eventually became the foundation of modern plate tectonics',
      'it was first proposed by Alfred Wegener in 1912',
      'they could not explain the force that moved the continents',
      'because there was no evidence from the ocean floor at the time',
      'many geologists continued to reject it for several decades'
    ],
    why: 'Başta reddedilmesine rağmen sonunda modern levha tektoniğinin temeli oldu; zıtlık kurulur.',
    trap: 'E reddin devam ettiğini söyler, zıtlık değil süreklilik vardır. C öznesini geologists\'e kaydırır ve bir zıtlık oluşturmaz.',
    tactic: 'Although (-) → (+) sonuç'
  },
  {
    q: 'The museum\'s collection of ancient manuscripts is so fragile _____.',
    o: [
      'that visitors are only allowed to view digital copies of most items',
      'because it is stored in a room with carefully controlled humidity',
      'as the manuscripts are more than a thousand years old',
      'which is why many scholars have travelled to study it',
      'even though it was restored by experts in the 1980s'
    ],
    why: '"so + sıfat" yapısı "that" ile sonuç ister: koleksiyon o kadar hassas ki ziyaretçiler çoğunu yalnızca dijital kopyadan görebiliyor.',
    trap: 'C bir sebep verir ama "so fragile" yapısını tamamlamaz.',
    tactic: 'so + adj + that'
  },
  {
    q: 'Before antibiotics became widely available in the 1940s, _____.',
    o: [
      'even a minor cut could lead to a fatal infection',
      'they have saved hundreds of millions of lives',
      'bacteria are becoming increasingly resistant to them',
      'doctors will need to find new ways of treating infections',
      'scientists are developing new drugs to replace them'
    ],
    why: 'Antibiyotikler yaygınlaşmadan önceki genel durumu anlatan geçmiş zamanlı sonuç: küçük bir kesik bile ölümcül enfeksiyona yol açabiliyordu.',
    trap: 'B ve C günümüzü anlatır; geçmişteki bir döneme göndermeyle uyuşmazlar. E de bugünü anlatır.',
    tactic: 'Before + geçmiş dönem → geçmiş durum (could/used to)'
  },
  {
    q: 'Some historians argue that the decline of the Maya cities was caused by prolonged drought, _____.',
    o: [
      'while others emphasise the role of warfare and political instability',
      'since the Maya had built an advanced system of water reservoirs',
      'which led to the construction of larger and more impressive temples',
      'so that the population could move to the coastal regions',
      'and they all agree that warfare played no part in it'
    ],
    why: '"Some historians argue ..., while others ..." kalıbıyla farklı görüşler karşılaştırılır.',
    trap: 'E "all agree" diyerek tartışmayı ortadan kaldırır ve "some" ile çelişir. C kuraklığın daha büyük tapınaklara yol açtığını söyler, mantıksızdır.',
    tactic: 'Some ... while others'
  },
  {
    q: 'If the Earth\'s axis were not tilted, _____.',
    o: [
      'there would be no seasons and day length would hardly vary throughout the year',
      'the seasons will be much more extreme in the northern hemisphere',
      'the planet would have been much colder during the last ice age',
      'it takes 365 days to complete one orbit around the Sun',
      'temperatures had varied less between the poles and the equator'
    ],
    why: '"If + were" Type 2 (bugüne dair gerçek dışı) koşuldur; sonuç "would + V1" ile verilir.',
    trap: 'B "will" (Type 1), C "would have" (Type 3) yapısıdır.',
    tactic: 'If + were/V2 → would + V1'
  },
  {
    q: 'The company\'s profits rose sharply last year, _____ the slowdown in the global economy.',
    o: ['in spite of', 'because of', 'in terms of', 'instead of', 'on behalf of'],
    why: 'Küresel ekonomideki yavaşlamaya rağmen kâr arttı; isimden önce zıtlık edatı gerekir: in spite of.',
    trap: '"because of" yavaşlamayı kâr artışının sebebi yapar, mantıksızdır.',
    tactic: 'Edat + isim: zıtlık mı sebep mi?'
  },
  {
    q: 'Only when the patient\'s condition had stabilised _____.',
    o: [
      'did the doctors decide to perform the operation',
      'the doctors decided to perform the operation',
      'had the operation been performed successfully',
      'when the doctors were finally able to operate',
      'the operation will be performed by the surgeons'
    ],
    why: '"Only when" cümle başına geldiğinde ana cümle devrik olur: "did the doctors decide".',
    trap: 'B anlam olarak doğru ama devrik değildir; ÖSYM\'de "Only when / Only after" sonrası devrik yapı arar.',
    tactic: 'Only when/after/if + ... → devrik ana cümle'
  },
  {
    q: 'The fact that octopuses can open jars and escape from their tanks _____.',
    o: [
      'suggests that their problem-solving abilities are far more advanced than once thought',
      'because they have a large number of neurons in their arms',
      'which has been observed in aquariums around the world',
      'they are considered among the most intelligent invertebrates',
      'so researchers have begun to study them more closely'
    ],
    why: '"The fact that ..." cümlenin öznesidir ve bir yüklem bekler: "suggests that..." (... olması, ... olduğunu gösterir).',
    trap: 'D yeni bir özne-yüklem başlatır, "The fact that" öznesi yüklemsiz kalır. C ve E de ana yüklem vermez.',
    tactic: 'Uzun özne (The fact that ...) → yüklem ara'
  },
  {
    q: 'Wind and solar power now generate a growing share of the world\'s electricity, _____.',
    o: [
      'but their output still depends heavily on the weather, which makes storage essential',
      'because coal remains the largest single source of electricity worldwide',
      'so many governments have increased subsidies for coal power plants',
      'which means that fossil fuels are no longer used to produce electricity',
      'although their costs have fallen dramatically over the past decade'
    ],
    why: 'Rüzgâr ve güneşin payı artıyor, ama üretimleri hâlâ havaya bağlı, bu da depolamayı şart kılıyor; "but" bir sınırlama getirir.',
    trap: 'E maliyetlerin düştüğünü söyler; bu payın artmasının sebebidir, zıttı değil. D aşırı genelleme yapar (no longer used).',
    tactic: 'Olumlu gelişme → but + sınırlama'
  },
  {
    q: 'Rarely _____ such a large and well-preserved collection of dinosaur eggs.',
    o: [
      'have palaeontologists discovered',
      'palaeontologists have discovered',
      'did palaeontologists not discover',
      'palaeontologists discovering',
      'had been discovered by palaeontologists'
    ],
    why: '"Rarely" cümle başında devrik yapı ister: yardımcı fiil + özne + V3 (have palaeontologists discovered).',
    trap: 'B devrik değildir; C çift olumsuzluk yaratır (rarely zaten olumsuz anlam taşır).',
    tactic: 'Olumsuz zarf başta → devrik'
  },
  {
    q: 'As people age, their sense of taste tends to weaken, _____.',
    o: [
      'which may explain why many elderly people add more salt to their food',
      'so that they are able to enjoy a wider variety of dishes',
      'although the number of taste buds decreases with age',
      'unless they have smoked for most of their lives',
      'whereas younger people are more sensitive to bitter flavours, too'
    ],
    why: '"which" önceki cümlenin tamamına (tat duyusunun zayıflaması) bağlanır ve bunun bir sonucunu açıklar: yaşlıların yemeğe daha çok tuz eklemesi.',
    trap: 'C zıtlık bağlacı kullanır ama tat tomurcuklarının azalması zayıflamanın sebebidir. E "too" ile karşılaştırmayı bozar.',
    tactic: ', which → önceki cümlenin tamamı'
  },
  {
    q: 'The expedition would almost certainly have ended in disaster _____.',
    o: [
      'had the team not received a weather warning just before the storm',
      'if the team does not receive regular weather warnings',
      'unless the team will be warned about the storm in advance',
      'because the team received a weather warning before the storm',
      'when the team returned to the base camp safely'
    ],
    why: '"would have ended" Type 3 sonucudur; koşulu devrik Type 3 verir: "had the team not received" (ekip uyarı almasaydı).',
    trap: 'B Type 1, C "unless + will" gramer hatasıdır. D gerçek durumu verir ama koşul yapısını kurmaz.',
    tactic: 'would have V3 ↔ (if ... had V3 / had ... V3)'
  },
  {
    q: 'Much of what we know about daily life in ancient Egypt comes from tomb paintings, _____.',
    o: [
      'which depict activities such as farming, fishing and brewing in remarkable detail',
      'because the pharaohs were buried with their most valuable possessions',
      'though historians rely mainly on written records from the period',
      'so that archaeologists could reconstruct the pyramids',
      'that were stolen by grave robbers in the nineteenth century'
    ],
    why: '"which" mezar resimlerini niteler ve bilginin neden onlardan geldiğini açıklar: tarım, balıkçılık gibi etkinlikleri ayrıntılı gösterirler.',
    trap: 'C "though" ile ana cümleyi çürütür (bilginin çoğu resimlerden geliyorsa yazılı kayıtlar "asıl" kaynak olamaz). E virgülden sonra "that" kullanır, bu yapı hatalıdır.',
    tactic: 'Virgül + which (non-defining) — virgülden sonra "that" gelmez'
  },
  {
    q: 'Even though the region receives very little rainfall, _____.',
    o: [
      'farmers there have grown crops for centuries using ancient underground irrigation channels',
      'it has one of the lowest population densities in the country',
      'most of its rivers dry up completely during the summer months',
      'because water is transported from mountains hundreds of kilometres away',
      'it is therefore unsuitable for agriculture of any kind'
    ],
    why: 'Az yağış alan bölgede beklenmedik bir durum: çiftçiler yüzyıllardır yeraltı kanallarıyla ürün yetiştiriyor.',
    trap: 'B, C ve E az yağışın beklenen sonuçlarıdır; zıtlık yoktur.',
    tactic: 'Even though (-) → beklenmedik (+)'
  },
  {
    q: 'No sooner had the new president taken office _____.',
    o: [
      'than she announced a sweeping reform of the tax system',
      'when she announced a sweeping reform of the tax system',
      'she announced a sweeping reform of the tax system',
      'that a sweeping reform of the tax system was announced',
      'and then she announced a reform of the tax system'
    ],
    why: '"No sooner had + özne + V3" kalıbı "than" ile tamamlanır (... yapar yapmaz ...).',
    trap: 'B "when" ile gelir; "Hardly/Scarcely ... when" kalıbıyla karıştırılmıştır.',
    tactic: 'No sooner ... than / Hardly ... when'
  },
  {
    q: 'Children who learn a second language at an early age often acquire a native-like accent, _____.',
    o: [
      'whereas adult learners rarely lose all traces of their first language when speaking',
      'because their parents usually speak both languages at home',
      'which means that adults cannot learn a second language at all',
      'so they find it easier to learn grammar rules than adults do',
      'although they are exposed to the second language from birth'
    ],
    why: 'Erken yaşta öğrenen çocuklar ile yetişkin öğrenenler karşılaştırılır: yetişkinler ilk dillerinin izlerini nadiren tamamen kaybeder.',
    trap: 'C aşırı genelleme yapar (cannot ... at all). E zıtlık kurar ama doğuştan maruz kalmak aksanın sebebidir.',
    tactic: 'Çocuk – yetişkin kıyası: whereas'
  },
  {
    q: 'Electric cars produce no exhaust emissions while being driven; _____, their overall environmental impact depends on how the electricity they use is generated.',
    o: ['nevertheless', 'consequently', 'in addition', 'for this reason', 'in the same way'],
    why: 'İlk cümle avantaj, ikinci cümle bir sınırlama verir; zıtlık bildiren "nevertheless" gerekir.',
    trap: '"in addition" yeni bir avantaj ekler gibi okunur; oysa ikinci cümle avantajı sınırlar.',
    tactic: 'Avantaj ; sınırlama → nevertheless/however'
  },
  {
    q: 'The researchers were careful to point out that their results did not prove _____.',
    o: [
      'that social media use causes depression, only that the two are associated',
      'whether the participants had used social media for more than an hour a day',
      'because they had studied a large and representative sample of teenagers',
      'so social media companies should not be held responsible',
      'which of the participants had been diagnosed with depression earlier'
    ],
    why: '"did not prove that ..." bir isim cümlesi ister; korelasyonun nedensellik olmadığı vurgulanır: sosyal medya depresyona yol açar demek değil, yalnızca ikisi ilişkilidir.',
    trap: 'B ve E isim cümlesidir ama "kanıtlamadılar" yüklemiyle anlamlı bir bulgu bildirmez.',
    tactic: 'prove/show/suggest + that-clause'
  },
  {
    q: 'Although it is the smallest planet in the solar system, _____.',
    o: [
      'Mercury experiences the greatest temperature differences between day and night',
      'Mercury is also the closest planet to the Sun',
      'it takes Mercury only 88 days to complete one orbit',
      'Mercury has no moons and only a very thin atmosphere',
      'so Mercury was difficult for early astronomers to observe'
    ],
    why: 'Küçüklüğüne rağmen dikkat çekici, "en büyük" bir özellik verilerek zıtlık kurulur: gece-gündüz sıcaklık farkının en büyük olduğu gezegendir.',
    trap: 'B, C ve D doğru bilgilerdir ama küçüklükle zıtlık oluşturmaz. E ikinci bir bağlaç ekler.',
    tactic: 'Although + en küçük → en büyük/şaşırtıcı'
  },
  {
    q: 'Whether or not the new regulations will reduce air pollution in the city _____.',
    o: [
      'depends largely on how strictly they are enforced',
      'because many factories have already installed filters',
      'the city council approved them unanimously last month',
      'they will come into force at the beginning of next year',
      'so environmental groups have welcomed them'
    ],
    why: '"Whether or not ..." isim cümlesi özne olarak kullanılmıştır ve yüklem bekler: "depends largely on..." (... olup olmayacağı büyük ölçüde ... bağlıdır).',
    trap: 'C ve D yeni bir özne ve yüklem başlatır; "Whether" öznesi yüklemsiz kalır.',
    tactic: 'Whether ... (özne) → yüklem'
  },
  {
    q: 'It is estimated that the world\'s population will reach nearly ten billion by 2050, _____.',
    o: [
      'by which time food production will need to have increased by more than fifty percent',
      'when the population of Europe had already begun to decline',
      'although it reached eight billion in 2022',
      'because birth rates have fallen in most developed countries',
      'so the population has doubled since the 1970s'
    ],
    why: '"by which time" (o zamana kadar) 2050\'ye bağlanır ve Future Perfect anlamlı bir sonuç verir: gıda üretiminin %50\'den fazla artmış olması gerekecek.',
    trap: 'B geçmiş zamana kayar. D doğum oranlarının düşmesini nüfus artışının sebebi gibi sunar.',
    tactic: 'by + gelecek zaman → will have V3 / by which time'
  },
  {
    q: 'Medieval maps were not intended to show distances accurately; _____, they were designed to express religious and political ideas about the world.',
    o: ['rather', 'likewise', 'therefore', 'moreover', 'otherwise'],
    why: 'Birinci cümle bir amacı reddeder, ikinci cümle gerçek amacı verir: "not X; rather, Y" (X değil, aksine Y).',
    trap: '"moreover" ilk cümleye aynı yönde bilgi eklerdi; oysa ikinci cümle düzeltme yapar.',
    tactic: 'not ... ; rather, ...'
  },
  {
    q: 'So successful was the reintroduction of wolves to Yellowstone National Park _____.',
    o: [
      'that it is now cited as a model for similar projects in Europe',
      'because the wolves reduced the number of elk grazing near rivers',
      'although some local farmers opposed the project from the start',
      'when the first wolves were released into the park in 1995',
      'as the wolves had been hunted to extinction there in the 1920s'
    ],
    why: 'Cümle başındaki "So + sıfat + devrik yapı" "that" ile sonuç ister: o kadar başarılı oldu ki artık Avrupa\'daki benzer projelere model gösteriliyor.',
    trap: 'B başarının sebebini doğru verir ama "So successful was ..." yapısını tamamlamaz.',
    tactic: 'So + adj + devrik → that'
  }
];
