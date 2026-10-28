import { ExamItem } from './helpers';

// Exam-level vocabulary: academic sentences, five options of the same part of
// speech and form, with independent meanings (no synonym clusters, no odd one out).
export const XL_VOCABULARY: ExamItem[] = [
  {
    q: 'The discovery of a previously unknown species of frog in the cloud forests of Ecuador has _____ calls for stronger protection of the region\'s remaining habitats.',
    o: ['intensified', 'deprived', 'retrieved', 'concealed', 'obeyed'],
    why: 'intensify = yoğunlaştırmak, artırmak. Yeni tür keşfi koruma çağrılarını yoğunlaştırmıştır.',
    trap: 'concealed (gizlemek) olumsuz bir anlam taşır; keşif çağrıları gizlemez, güçlendirir.',
    tactic: 'Fiil + nesne uyumu: calls for protection → intensify'
  },
  {
    q: 'Although the two theories differ in their assumptions, they are _____ in their prediction that global demand for water will exceed supply by 2040.',
    o: ['consistent', 'reluctant', 'vulnerable', 'indifferent', 'hostile'],
    why: 'consistent = tutarlı, uyumlu. Varsayımlarda farklı olsalar da tahminde tutarlıdırlar; "Although" bu zıtlığı kurar.',
    trap: 'indifferent (kayıtsız) "in their prediction" ile anlamlı bir ifade oluşturmaz.',
    tactic: 'Although (farklı) → ana cümlede benzerlik'
  },
  {
    q: 'Archaeologists working at the site were able to _____ the age of the wooden tools by analysing the growth rings in the timber.',
    o: ['determine', 'neglect', 'distort', 'abandon', 'exaggerate'],
    why: 'determine = belirlemek, saptamak. Halkaları analiz ederek aletlerin yaşını belirleyebildiler.',
    trap: 'distort (çarpıtmak) ve exaggerate (abartmak) bilimsel yöntemle elde edilen bir sonucu anlatmaz.',
    tactic: 'by + V-ing yöntemi → olumlu sonuç fiili'
  },
  {
    q: 'The minister\'s speech was deliberately _____, allowing both supporters and opponents of the reform to interpret it in their favour.',
    o: ['ambiguous', 'punctual', 'fertile', 'durable', 'mandatory'],
    why: 'ambiguous = belirsiz, iki anlama gelebilen. İki taraf da konuşmayı kendi lehine yorumlayabildiğine göre konuşma belirsizdir.',
    trap: 'mandatory (zorunlu) bir konuşmayı nitelemek için anlamsızdır; "allowing ... to interpret" ipucu belirsizliği gösterir.',
    tactic: 'Sonuç cümlesi (allowing ...) → sıfatın anlamı'
  },
  {
    q: 'Global sales of solar panels have increased _____ over the past decade, rising from a few gigawatts a year to several hundred.',
    o: ['dramatically', 'reluctantly', 'temporarily', 'accidentally', 'vaguely'],
    why: 'dramatically = çarpıcı biçimde, büyük ölçüde. Birkaç gigavattan birkaç yüze çıkış çarpıcı bir artıştır.',
    trap: 'temporarily (geçici olarak) on yıllık sürekli artışla uyuşmaz.',
    tactic: 'increase + derece zarfı'
  },
  {
    q: 'Engineers had to _____ the launch of the satellite for three weeks after a fault was detected in its navigation system.',
    o: ['put off', 'take after', 'look into', 'make up', 'run into'],
    why: 'put off = ertelemek. Arıza tespit edilince fırlatma üç hafta ertelendi.',
    trap: 'look into (araştırmak) arızayla ilgili gibi görünür ama "for three weeks" ve "the launch" nesnesiyle uyuşmaz.',
    tactic: 'Phrasal verb + nesne + süre: put off ... for'
  },
  {
    q: 'The study found that the _____ of the disease was much higher in urban areas, where people are exposed to more air pollution.',
    o: ['prevalence', 'remedy', 'tribute', 'shortage', 'consent'],
    why: 'prevalence = yaygınlık. Hastalığın yaygınlığı kentlerde daha yüksekti.',
    trap: 'shortage (kıtlık) "of the disease" ile birlikte "hastalığın kıtlığı" gibi anlamsız bir ifade olur.',
    tactic: 'İsim + of + hastalık → prevalence/incidence'
  },
  {
    q: 'Critics argue that the new regulations will _____ small businesses, which cannot afford the expensive equipment required to meet the standards.',
    o: ['disadvantage', 'nourish', 'inspire', 'liberate', 'reward'],
    why: 'disadvantage = dezavantajlı duruma düşürmek. Pahalı ekipmanı karşılayamayan küçük işletmeler zarar görür.',
    trap: 'reward ve inspire olumlu fiillerdir; "cannot afford" olumsuz ipucuyla çelişir.',
    tactic: 'Olumsuz bağlam (cannot afford) → olumsuz fiil'
  },
  {
    q: 'The bridge was designed to be _____ enough to withstand earthquakes of up to magnitude eight on the Richter scale.',
    o: ['resilient', 'transparent', 'obsolete', 'fragile', 'trivial'],
    why: 'resilient = dayanıklı, esnek. "enough to withstand earthquakes" dayanıklılığı gerektirir.',
    trap: 'fragile (kırılgan) anlamın tam tersidir; obsolete (modası geçmiş) tasarım amacıyla uyuşmaz.',
    tactic: 'adj + enough to + fiil'
  },
  {
    q: 'The committee rejected the application _____ on the grounds that it had been submitted after the deadline.',
    o: ['solely', 'eagerly', 'generously', 'fluently', 'mutually'],
    why: 'solely = yalnızca. Başvuru yalnızca süre geçtiği gerekçesiyle reddedildi.',
    trap: 'eagerly (hevesle) bir reddi niteleyebilir gibi görünür, ama "on the grounds that" gerekçesiyle birlikte anlamlı olan "yalnızca"dır.',
    tactic: 'Zarf + on the grounds that'
  },
  {
    q: 'Researchers are trying to _____ how the virus manages to avoid detection by the immune system.',
    o: ['figure out', 'give in', 'break down', 'set off', 'pass away'],
    why: 'figure out = anlamak, çözmek. Araştırmacılar virüsün bağışıklık sisteminden nasıl kaçtığını anlamaya çalışıyor.',
    trap: 'break down hem "arızalanmak" hem "parçalamak" anlamına gelir; ama "how ..." isim cümlesini nesne olarak almaz.',
    tactic: 'Phrasal verb + how/what/why cümlesi'
  },
  {
    q: 'Rising temperatures have caused a sharp _____ in the population of Arctic sea birds, which depend on fish that are moving further north.',
    o: ['decline', 'outcome', 'pursuit', 'insight', 'cluster'],
    why: 'decline = düşüş, azalma. "sharp decline in the population" sık kullanılan bir kalıptır; balıkların kuzeye gitmesi düşüşü açıklar.',
    trap: 'outcome (sonuç) ve insight (kavrayış) "in the population" ile anlamlı bir kalıp oluşturmaz.',
    tactic: 'Collocation: a sharp decline/rise in'
  },
  {
    q: 'In many ancient societies, written records were kept by a small group of scribes who were _____ for maintaining the accounts of the temple and the palace.',
    o: ['responsible', 'eligible', 'grateful', 'notorious', 'susceptible'],
    why: 'responsible for = -den sorumlu. Yazıcılar tapınak ve saray hesaplarından sorumluydu.',
    trap: 'eligible (uygun, hak sahibi) "for" alabilir ama "for maintaining the accounts" ile görev anlamını vermez; susceptible "to" ile kullanılır.',
    tactic: 'Sıfat + edat uyumu: responsible for'
  },
  {
    q: 'The government has promised to _____ the tax system so that it is simpler and fairer for small businesses.',
    o: ['overhaul', 'endanger', 'imitate', 'surrender', 'dismiss'],
    why: 'overhaul = elden geçirmek, köklü biçimde yenilemek. Sistemi daha basit ve adil hâle getirmek için köklü bir düzenleme gerekir.',
    trap: 'dismiss (reddetmek, görevden almak) "so that it is simpler and fairer" amacıyla uyuşmaz.',
    tactic: 'Amaç cümlesi (so that ...) → fiilin yönü'
  },
  {
    q: 'Unlike many of his contemporaries, the scientist was _____ willing to admit when his experiments had failed.',
    o: ['remarkably', 'hardly', 'barely', 'previously', 'instantly'],
    why: 'remarkably = dikkat çekici derecede. "Unlike his contemporaries" onun farklı olduğunu, yani başarısızlığı kabul etmeye dikkat çekici derecede istekli olduğunu gösterir.',
    trap: 'hardly ve barely olumsuz anlam katar; çağdaşlarından farkı tersine çevirir.',
    tactic: 'Unlike → zıtlık; hardly/barely olumsuzdur'
  },
  {
    q: 'Several of the world\'s largest companies have announced plans to _____ fossil fuels entirely from their supply chains by 2040.',
    o: ['phase out', 'call on', 'hold back', 'take over', 'bring up'],
    why: 'phase out = aşamalı olarak kaldırmak. Şirketler fosil yakıtları 2040\'a kadar tedarik zincirlerinden kaldırmayı planlıyor.',
    trap: 'take over (devralmak) bir şirketi ya da yönetimi nesne alır, fosil yakıtları değil.',
    tactic: 'phase out ... from'
  },
  {
    q: 'The novel explores the _____ between the narrator\'s memories of her childhood and the reality revealed by family letters.',
    o: ['discrepancy', 'hostility', 'reluctance', 'obligation', 'enthusiasm'],
    why: 'discrepancy = tutarsızlık, uyuşmazlık. Anılar ile mektupların ortaya koyduğu gerçek arasındaki uyuşmazlık incelenir.',
    trap: 'hostility (düşmanlık) "between" alabilir ama iki kişi/grup arasında kullanılır, anılar ile gerçeklik arasında değil.',
    tactic: 'İsim + between X and Y'
  },
  {
    q: 'Doctors were able to _____ the spread of the infection by isolating patients as soon as they showed symptoms.',
    o: ['contain', 'accelerate', 'celebrate', 'inherit', 'postpone'],
    why: 'contain = kontrol altına almak, sınırlamak. Hastaları izole ederek enfeksiyonun yayılmasını kontrol altına aldılar.',
    trap: 'accelerate (hızlandırmak) yayılmayı artırır; izolasyonun amacıyla çelişir.',
    tactic: 'contain the spread / outbreak'
  },
  {
    q: 'The results of the survey were considered _____ because only a small number of people had agreed to take part.',
    o: ['inconclusive', 'unanimous', 'compulsory', 'abundant', 'innate'],
    why: 'inconclusive = kesin sonuç vermeyen. Az katılımcı olduğu için sonuçlar kesin kabul edilmedi.',
    trap: 'unanimous (oybirliğiyle) bir anket sonucunu niteleyebilir ama "because only a small number ..." gerekçesiyle uyuşmaz.',
    tactic: 'because + gerekçe → sıfatın yönü'
  },
  {
    q: 'Over the centuries, the coastline has changed _____, and some towns that were once ports now lie several kilometres inland.',
    o: ['considerably', 'politely', 'secretly', 'deliberately', 'loosely'],
    why: 'considerably = önemli ölçüde. Bazı limanların artık kilometrelerce içeride kalması büyük bir değişimi gösterir.',
    trap: 'deliberately (kasıtlı olarak) doğal bir süreci nitelemek için uygun değildir.',
    tactic: 'change + derece zarfı; doğal süreç ≠ deliberately'
  },
  {
    q: 'When the company\'s profits fell, the board decided to _____ several hundred employees in order to cut costs.',
    o: ['lay off', 'look after', 'bring about', 'turn down', 'come across'],
    why: 'lay off = işten çıkarmak. Maliyetleri düşürmek için yüzlerce çalışan işten çıkarıldı.',
    trap: 'turn down (reddetmek) bir teklif ya da başvuruyu nesne alır, çalışanları değil.',
    tactic: 'Ekonomi bağlamı: lay off employees'
  },
  {
    q: 'The ancient city\'s sudden decline remains something of a(n) _____, as historians have found no evidence of war, disease or natural disaster.',
    o: ['mystery', 'privilege', 'landmark', 'routine', 'bargain'],
    why: 'mystery = gizem. Savaş, hastalık ya da doğal afet kanıtı olmadığı için çöküş bir gizem olarak kalıyor.',
    trap: 'landmark (simge yapı, dönüm noktası) bir şehirle ilgili görünür ama "no evidence" gerekçesiyle uyuşmaz.',
    tactic: 'remain + isim; gerekçe "no evidence" → bilinmezlik'
  },
  {
    q: 'Many plant species rely on insects to _____ their pollen from one flower to another.',
    o: ['transfer', 'dissolve', 'forbid', 'resemble', 'neglect'],
    why: 'transfer from ... to = bir yerden başka bir yere aktarmak. Bitkiler polenlerini çiçekten çiçeğe taşımak için böceklere dayanır.',
    trap: 'resemble (benzemek) edat almaz; dissolve (çözünmek) "from ... to" kalıbıyla anlam vermez.',
    tactic: 'Fiil + from ... to kalıbı'
  },
  {
    q: 'The new law makes it _____ for all new buildings to include solar panels on their roofs.',
    o: ['compulsory', 'redundant', 'hazardous', 'reversible', 'tedious'],
    why: 'compulsory = zorunlu. Yasa bir zorunluluk getirir: "it is compulsory for X to do".',
    trap: 'redundant (gereksiz) yasanın amacıyla çelişir; hazardous (tehlikeli) güneş panelleri için anlamsızdır.',
    tactic: 'law + makes it ... for → compulsory/mandatory'
  },
  {
    q: 'Although the theory was widely accepted for decades, it has _____ been challenged by new evidence from genetic studies.',
    o: ['increasingly', 'merely', 'seldom', 'formerly', 'jointly'],
    why: 'increasingly = giderek artan biçimde. "Although ... widely accepted for decades" zıtlığı, teorinin son zamanlarda giderek daha çok sorgulandığını gösterir; Present Perfect de bu süreci destekler.',
    trap: 'seldom (nadiren) zıtlığı ortadan kaldırır; formerly (eskiden) Present Perfect ile ve zıtlık mantığıyla uyuşmaz.',
    tactic: 'Although (geçmişte kabul) → has increasingly been challenged'
  },
  {
    q: 'Many patients find it difficult to _____ the side effects of chemotherapy, such as nausea and extreme fatigue.',
    o: ['put up with', 'get away with', 'catch up with', 'come up with', 'keep up with'],
    why: 'put up with = katlanmak, tahammül etmek. Hastalar bulantı ve aşırı yorgunluk gibi yan etkilere katlanmakta zorlanır.',
    trap: 'Beş şık da "with" ile biter; fark yalnızca ilk iki kelimededir. come up with (bulmak, öne sürmek) ve catch up with (yetişmek) yan etkilerle anlamlı değildir.',
    tactic: 'Aynı edatla biten phrasal verb\'ler: anlamı fiil ve ilk edat belirler'
  },
  {
    q: 'The museum has a(n) _____ collection of medieval manuscripts, some of which have never been displayed in public.',
    o: ['extensive', 'hesitant', 'punctual', 'reluctant', 'hollow'],
    why: 'extensive = kapsamlı, geniş. Bazıları hiç sergilenmemiş el yazmalarından oluşan büyük bir koleksiyon.',
    trap: 'hesitant ve reluctant insanları niteleyen sıfatlardır, bir koleksiyonu değil.',
    tactic: 'Sıfat – isim uyumu: extensive collection'
  },
  {
    q: 'Scientists have long _____ that the Moon was formed from debris left over after a collision between the early Earth and another planet.',
    o: ['speculated', 'forbidden', 'apologised', 'complained', 'surrendered'],
    why: 'speculate = tahmin yürütmek, varsaymak. "that" cümlesi alan, bilimsel bir varsayımı anlatan fiil gerekir.',
    trap: 'complained "that" alabilir ama bilimsel bir hipotezi anlatmaz; forbidden "that" ile bu anlamda kullanılmaz.',
    tactic: 'Fiil + that-clause → düşünce/iddia fiili'
  },
  {
    q: 'The project was abandoned because the costs had become _____ high compared with the expected benefits.',
    o: ['prohibitively', 'marginally', 'gently', 'favourably', 'seemingly'],
    why: 'prohibitively high = engelleyici derecede yüksek. Proje terk edildiğine göre maliyetler karşılanamayacak kadar yüksektir.',
    trap: 'marginally (biraz) projenin terk edilmesini açıklamaz; favourably olumlu bir anlam taşır.',
    tactic: 'Collocation: prohibitively expensive/high'
  },
  {
    q: 'Tourism has helped to _____ the economy of the region, which had suffered for years after the closure of its coal mines.',
    o: ['revive', 'deplete', 'imprison', 'reproach', 'deceive'],
    why: 'revive = canlandırmak. Madenlerin kapanmasıyla zarar gören ekonomi turizmle yeniden canlandı.',
    trap: 'deplete (tüketmek) olumsuz bir fiildir; "helped to" olumlu bir sonucu gösterir.',
    tactic: 'helped to + olumlu fiil'
  },
  {
    q: 'The rise in obesity rates can partly be _____ the increasing availability of cheap, highly processed food.',
    o: ['attributed to', 'deprived of', 'derived from', 'consisted of', 'objected to'],
    why: 'be attributed to = -e bağlanmak, -e atfedilmek. Obezitedeki artış kısmen ucuz işlenmiş gıdaya bağlanabilir.',
    trap: 'derived from (-den türemek) neden-sonuç anlamı vermez ve yönü tersine çevirir; consisted of edilgen kullanılmaz.',
    tactic: 'Neden bildiren kalıp: be attributed to / be due to'
  },
  {
    q: 'Because the language has no written form, much of the community\'s history has been _____ orally from one generation to the next.',
    o: ['passed down', 'turned out', 'given up', 'cut off', 'called off'],
    why: 'pass down = kuşaktan kuşağa aktarmak. Yazılı biçim olmadığı için tarih sözlü olarak aktarılmıştır.',
    trap: 'given up (vazgeçilmek) "from one generation to the next" kalıbıyla uyuşmaz.',
    tactic: 'from one generation to the next → pass down / hand down'
  },
  {
    q: 'The early results are promising, but researchers warn that it is too _____ to say whether the treatment will work in the long term.',
    o: ['premature', 'convenient', 'generous', 'loyal', 'exotic'],
    why: 'premature = erken, vakitsiz. Uzun vadede işe yarayıp yaramayacağını söylemek için henüz çok erken.',
    trap: 'convenient (uygun) "too ... to say" kalıbında anlam vermez; but ile gelen uyarıyla çelişir.',
    tactic: 'too + adj + to: uyarı bağlamı'
  },
  {
    q: 'Wind turbines are often placed _____ along coastlines and on hilltops, where wind speeds are highest.',
    o: ['strategically', 'carelessly', 'nervously', 'reluctantly', 'loudly'],
    why: 'strategically = stratejik olarak, bilinçli bir plana göre. Rüzgârın en güçlü olduğu yerlere yerleştirilmesi planlı bir seçimdir.',
    trap: 'carelessly (dikkatsizce) "where wind speeds are highest" gerekçesiyle çelişir.',
    tactic: 'Gerekçe (where ...) → planlı eylem zarfı'
  },
  {
    q: 'The report highlights the urgent need for governments to _____ in renewable energy if they are to meet their climate targets.',
    o: ['invest', 'interfere', 'indulge', 'insist', 'intervene'],
    why: 'invest in = -e yatırım yapmak. İklim hedeflerine ulaşmak için yenilenebilir enerjiye yatırım gerekir.',
    trap: 'Beş şık da "in" alabilir; interfere in (karışmak), indulge in (kendini kaptırmak), intervene in (müdahale etmek) yenilenebilir enerjiyle anlam vermez. insist "on" alır.',
    tactic: 'Fiil + in: anlamı bağlam belirler'
  },
  {
    q: 'The rapid _____ of smartphones in developing countries has made mobile banking available to millions of people for the first time.',
    o: ['spread', 'shortage', 'collapse', 'refusal', 'decay'],
    why: 'spread = yayılma. Akıllı telefonların hızla yayılması milyonlarca kişiye mobil bankacılığı açmıştır.',
    trap: 'shortage, collapse ve decay olumsuz isimlerdir; "has made mobile banking available" olumlu sonucuyla çelişir.',
    tactic: 'Olumlu sonuç → olumlu özne ismi'
  }
];
