import { ExamItem } from './helpers';

// Exam-level dialogues: two people discussing an academic or scientific topic,
// as in ÖSYM papers. The key is usually the line right after the blank.
export const XL_DIALOGUE: ExamItem[] = [
  {
    q: 'Selin: I\'ve just read that some researchers think the Neanderthals didn\'t die out but were absorbed into modern human populations.\nMark: That would explain why most people outside Africa carry a small percentage of Neanderthal DNA.\nSelin: _____\nMark: Not exactly. Some of those genes seem to affect our immune systems and even our risk of certain diseases today.',
    o: [
      'So does that mean those inherited genes have no effect on us at all?',
      'How did scientists manage to extract DNA from such old bones?',
      'Why did the Neanderthals live mainly in Europe and western Asia?',
      'Did modern humans and Neanderthals ever use the same tools?',
      'When exactly did the first modern humans leave Africa?'
    ],
    why: 'Mark "Not exactly" deyip bu genlerin bugün bağışıklığımızı etkilediğini söyler; demek ki Selin genlerin hiçbir etkisinin olmadığını öne süren bir soru sormuştur.',
    trap: 'B, C, D ve E konuyla ilgili sorulardır ama Mark\'ın "Not exactly" ile başlayan ve genlerin etkisini anlatan cevabına bağlanmaz.',
    tactic: 'Sonraki cevap "Not exactly" → boşlukta yanlış bir çıkarım'
  },
  {
    q: 'Professor Hall: The results of our survey suggest that people who work from home are more productive than their office-based colleagues.\nDr. Yılmaz: _____\nProfessor Hall: That\'s a fair point. We\'ll need objective data from employers before we can draw any firm conclusions.\nDr. Yılmaz: I can contact a few companies that might be willing to share their figures.',
    o: [
      'But isn\'t productivity in your survey based only on how the employees rated themselves?',
      'Have you considered publishing the results in an international journal?',
      'Many companies have already decided to let their staff work from home permanently.',
      'Working from home also reduces traffic congestion and air pollution in cities.',
      'How many of the participants said they preferred working in an office?'
    ],
    why: 'Profesör "fair point" deyip işverenlerden nesnel veriye ihtiyaç olduğunu söyler; boşlukta verilerin öznel olduğuna (çalışanların kendini değerlendirmesi) dair bir itiraz olmalıdır.',
    trap: 'C ve D konuyla ilgili doğru bilgiler verir ama "nesnel veri" ihtiyacını doğuracak bir eleştiri içermez.',
    tactic: 'Sonraki cevap "fair point" + çözüm → boşlukta eleştiri'
  },
  {
    q: 'Ahmet: Did you know that octopuses have neurons not only in their brains but also in their arms?\nLaura: _____\nAhmet: Apparently, yes. Experiments show that an arm can still reach for food even after it has been separated from the body.\nLaura: That\'s remarkable, and a little disturbing.',
    o: [
      'Does that mean each arm can act to some extent on its own?',
      'How many arms does an octopus actually have?',
      'Why are octopuses so good at changing colour?',
      'Isn\'t it true that octopuses only live for a year or two?',
      'Do you think octopuses are more intelligent than dolphins?'
    ],
    why: 'Ahmet "Apparently, yes" deyip vücuttan ayrılmış bir kolun bile yiyeceğe uzanabildiğini anlatır; boşlukta kolların kendi başına hareket edip edemediği sorulmuştur.',
    trap: 'B, C, D ve E ahtapotlarla ilgili makul sorulardır ama "evet" cevabı ve kolun bağımsız hareketi örneğiyle eşleşmez.',
    tactic: 'Yes/No sorusu + cevaptaki örnek'
  },
  {
    q: 'Dr. Evans: The new tax on plastic bags has reduced their use by almost ninety percent in just one year.\nDr. Kaya: That\'s impressive. _____\nDr. Evans: Unfortunately, it has. Sales of thicker "reusable" bags have risen sharply, and many people throw them away after a single use.\nDr. Kaya: So the overall amount of plastic may not have fallen much at all.',
    o: [
      'But has it had any unintended consequences?',
      'How much money has the tax raised so far?',
      'Which country was the first to introduce such a tax?',
      'Do supermarkets support the new policy?',
      'Will the government extend the tax to other products?'
    ],
    why: 'Dr. Evans "Unfortunately, it has" diye başlayıp istenmeyen bir sonucu (kalın poşet satışlarının artması) anlatır; boşlukta beklenmedik yan etkiler sorulmuştur.',
    trap: 'B ve D "has it" sorusuna uyabilecek yapıdadır ama "Unfortunately" ile anlatılan olumsuz yan sonuçla bağlanmaz.',
    tactic: '"Unfortunately, it has" → olumsuz sonucu soran Present Perfect sorusu'
  },
  {
    q: 'Student: I don\'t understand why the Roman Empire in the West collapsed while the Eastern Empire survived for another thousand years.\nLecturer: _____\nStudent: So Constantinople was simply richer and easier to defend?\nLecturer: That\'s part of the answer, although historians also point to the East\'s more stable system of government.',
    o: [
      'Well, the East had a stronger economy, and its capital was protected by water on three sides and massive walls.',
      'The Western Empire was officially divided from the Eastern Empire in the year 395.',
      'Many Germanic tribes had settled within the borders of the Western Empire by then.',
      'The Eastern Empire is usually referred to by historians as the Byzantine Empire.',
      'Rome was sacked by the Visigoths in 410 and again by the Vandals in 455.'
    ],
    why: 'Öğrencinin "Yani İstanbul daha zengin ve savunması daha kolaydı?" sorusu, öğretim görevlisinin ekonomi ve coğrafi savunma avantajından söz ettiğini gösterir.',
    trap: 'C ve E Batı\'nın çöküşüyle ilgili doğru bilgilerdir ama öğrencinin "zengin ve savunması kolay" özetine dayanak olmaz.',
    tactic: 'Sonraki konuşmacının özeti ("So ... ?") → boşluktaki açıklama'
  },
  {
    q: 'Jane: The city council wants to plant thousands of trees to reduce summer temperatures in the city centre.\nOmar: Will that really make a difference?\nJane: _____\nOmar: Then it sounds like a good investment, especially as heatwaves are becoming more frequent.',
    o: [
      'Studies show that streets with plenty of trees can be several degrees cooler than those without.',
      'Some residents have complained that the trees will block their view.',
      'The trees will be planted mainly along the banks of the river.',
      'It will take at least ten years for the trees to reach their full size.',
      'The council has not yet decided which species to plant.'
    ],
    why: 'Omar\'ın "Then it sounds like a good investment" tepkisi, Jane\'in ağaçların sıcaklığı gerçekten düşürdüğüne dair ikna edici bir kanıt verdiğini gösterir.',
    trap: 'B ve D olumsuz bilgiler verir; "o zaman iyi bir yatırım" sonucuna götürmez.',
    tactic: 'Then + olumlu sonuç → boşlukta destekleyici kanıt'
  },
  {
    q: 'Dr. Lee: I\'m surprised that so many people still believe vaccines cause autism.\nDr. Aksoy: _____\nDr. Lee: Yes, and even though that study was later shown to be fraudulent and was withdrawn, the damage had already been done.\nDr. Aksoy: It shows how hard it is to correct misinformation once it spreads.',
    o: [
      'Much of that belief can be traced back to a single study published in the late 1990s.',
      'Vaccination rates have increased steadily in most countries over the past decade.',
      'Autism is now diagnosed far more often than it was thirty years ago.',
      'Several new vaccines are being developed to protect children from infectious diseases.',
      'Most doctors believe that parents should be free to decide about vaccination.'
    ],
    why: 'Dr. Lee "that study" diyerek daha önce sözü edilmiş tek bir çalışmaya gönderme yapar; boşlukta o çalışma tanıtılmış olmalıdır.',
    trap: 'C konuyla ilgili doğru bir bilgidir ama "that study" zamirinin göndereceği bir çalışma içermez.',
    tactic: 'Zamir takibi: "that study" → boşlukta çalışma geçmeli'
  },
  {
    q: 'Erin: Why do you think honeybee populations have been declining so rapidly?\nCan: _____\nErin: So there isn\'t a single cause that we could simply eliminate?\nCan: Exactly. That\'s what makes the problem so difficult to solve.',
    o: [
      'It seems to be a combination of pesticides, parasites, disease and the loss of wild flowers.',
      'Honeybees are responsible for pollinating about a third of the crops we eat.',
      'Beekeepers in North America lost almost half of their colonies last winter.',
      'Some farmers have started using bumblebees to pollinate their greenhouse crops.',
      'Scientists first noticed the decline in the early 2000s.'
    ],
    why: 'Erin "Yani ortadan kaldırabileceğimiz tek bir sebep yok mu?" diye sorar; Can boşlukta birden çok sebebi bir arada saymış olmalıdır.',
    trap: 'C düşüşün boyutunu, E başlangıcını anlatır; "why" sorusuna sebep vermez.',
    tactic: 'Why sorusu + sonraki "single cause" → çok etkenli cevap'
  },
  {
    q: 'Dr. Novak: Our experiment shows that people make riskier financial decisions when they are tired.\nDr. Arslan: _____\nDr. Novak: We did. Participants who had slept well the night before took far fewer risks in the same tasks.\nDr. Arslan: Then the effect seems quite convincing.',
    o: [
      'Did you compare them with a group of participants who were well rested?',
      'How did you measure how risky each decision was?',
      'Why did you choose financial decisions rather than other kinds?',
      'Have you considered how alcohol might affect decision-making?',
      'Who funded such an unusual experiment?'
    ],
    why: 'Dr. Novak\'ın "We did" cevabı ve iyi uyumuş katılımcılardan söz etmesi, boşlukta bir kontrol grubuyla karşılaştırma yapılıp yapılmadığının sorulduğunu gösterir.',
    trap: 'B de "did you" ile cevaplanabilecek bir soru gibi görünür ama "How" sorusu "We did" ile cevaplanmaz.',
    tactic: 'Kısa cevap (We did) → Yes/No sorusu + içerik eşleşmesi'
  },
  {
    q: 'Tom: I read that languages like Turkish and Korean put the verb at the end of the sentence.\nZeynep: That\'s right, and so do about half of the world\'s languages.\nTom: _____\nZeynep: Not at all. It\'s actually English, with its subject-verb-object order, that belongs to the minority in many respects.',
    o: [
      'Doesn\'t that make them rather unusual compared with English?',
      'How many languages are spoken in the world today?',
      'Is Korean related to Japanese in any way?',
      'Why do languages change their word order over time?',
      'Did Turkish always use the Latin alphabet?'
    ],
    why: 'Zeynep "Not at all" deyip aslında İngilizcenin azınlıkta olduğunu söyler; Tom bu dillerin olağandışı olduğunu ima eden bir soru sormuştur.',
    trap: 'D kelime sırasıyla ilgilidir ama "Not at all" cevabına ve İngilizce karşılaştırmasına uymaz.',
    tactic: '"Not at all" → boşlukta yanlış bir varsayım'
  },
  {
    q: 'Interviewer: Your book argues that boredom can actually be good for us. How is that possible?\nAuthor: _____\nInterviewer: So, in a sense, constantly checking our phones prevents that from happening?\nAuthor: Precisely. We rarely allow our minds the time to wander anymore.',
    o: [
      'When we are bored, our minds tend to wander, and that is often when creative ideas emerge.',
      'Most people say they feel bored at least once a day at work.',
      'Boredom has been studied by psychologists for more than a century.',
      'Children today have many more toys and activities than in the past.',
      'People who are easily bored are more likely to take risks.'
    ],
    why: 'Görüşmeci "telefonlarımız bunun olmasını engelliyor mu?" diye sorar; "that" zamiri boşlukta anlatılan bir sürece (zihnin dolaşması, yaratıcı fikirler) gönderme yapar.',
    trap: 'E sıkılmanın bir etkisini verir ama olumsuzdur; "nasıl faydalı olabilir" sorusuna cevap olmaz.',
    tactic: 'How is that possible? → mekanizmayı açıklayan cevap'
  },
  {
    q: 'Nurse: More and more hospitals are using robots to deliver medicine to patients\' rooms.\nDoctor: _____\nNurse: In a way, yes. The robots save time, so nurses can spend more of it with patients instead of walking around the building.\nDoctor: That sounds like a sensible use of technology.',
    o: [
      'Doesn\'t that mean nurses actually get more time for patient care?',
      'Aren\'t you worried that robots will make mistakes with the medicine?',
      'How much does each of those robots cost?',
      'Were the robots designed by engineers at a university?',
      'Do patients feel uncomfortable when a robot enters their room?'
    ],
    why: 'Hemşirenin "In a way, yes" cevabı ve hemşirelerin hastalara daha çok zaman ayırabilmesini anlatması, boşlukta bu sonucun sorulduğunu gösterir.',
    trap: 'B ve E "yes" ile cevaplanabilir ama sonraki açıklama hata ya da rahatsızlık değil, kazanılan zaman hakkındadır.',
    tactic: '"In a way, yes" + açıklama → boşluktaki çıkarım'
  },
  {
    q: 'Melis: I\'ve heard that the Great Barrier Reef is visible from space. Is that true?\nPaul: _____\nMelis: I see. So it\'s visible, but not in the way most people imagine.\nPaul: Exactly. You can\'t see individual corals, of course, only the outline of the reef system.',
    o: [
      'Yes, but only from low orbit and only as a faint pattern of colour in the sea.',
      'No, the only human-made structure visible from space is the Great Wall of China.',
      'The reef is made up of almost three thousand individual reefs.',
      'Scientists use satellites to monitor coral bleaching on the reef.',
      'It stretches for more than two thousand kilometres along the coast.'
    ],
    why: 'Melis "görülebiliyor ama çoğu insanın hayal ettiği gibi değil" diye özetler; Paul "evet, ama..." diyerek bir sınırlama getirmiş olmalıdır.',
    trap: 'B "hayır" der ve Melis\'in "visible" özetiyle çelişir. D uydu kullanımını anlatır ama soruya doğrudan cevap vermez.',
    tactic: 'Özetleyen tepki (So it\'s visible, but...) → "Yes, but" cevabı'
  },
  {
    q: 'Dr. Baker: Inflation has fallen to two percent, which is exactly the central bank\'s target.\nDr. Tekin: _____\nDr. Baker: That\'s true. Many families still find it difficult to afford basic goods.\nDr. Tekin: So the problem hasn\'t really been solved for ordinary people.',
    o: [
      'Yes, but prices are still much higher than they were three years ago.',
      'Then the central bank will probably raise interest rates again.',
      'The target was set by the government more than twenty years ago.',
      'Inflation is usually measured by the consumer price index.',
      'Most economists predicted that inflation would fall even further.'
    ],
    why: 'Dr. Baker "That\'s true" deyip ailelerin hâlâ temel ürünleri almakta zorlandığını söyler; Dr. Tekin enflasyonun düşmesine rağmen fiyatların hâlâ yüksek olduğunu belirtmiş olmalıdır.',
    trap: 'B şıkkı "Then" ile yeni bir politika tahmini yapar; ailelerin zorluğuna bağlanmaz.',
    tactic: '"That\'s true" + olumsuz durum → boşlukta "Yes, but..." itirazı'
  },
  {
    q: 'Student: Why do some medicines have to be taken with food while others must be taken on an empty stomach?\nPharmacist: _____\nStudent: So taking them at the wrong time could make them less effective?\nPharmacist: That\'s right, or in some cases it could increase the side effects.',
    o: [
      'It depends on how food affects the way each drug is absorbed into the bloodstream.',
      'Most patients forget to take their medicine at least once a week.',
      'Doctors usually prescribe medicine to be taken three times a day.',
      'Some medicines are much more expensive than others.',
      'The instructions are always printed on the label of the package.'
    ],
    why: 'Öğrenci "yanlış zamanda almak etkinliği azaltabilir mi?" diye çıkarım yapar; eczacı yiyeceğin ilacın emilimini nasıl etkilediğini açıklamış olmalıdır.',
    trap: 'E talimatın nerede olduğunu söyler; "why" sorusunu cevaplamaz.',
    tactic: 'Why sorusu → mekanizma açıklaması'
  },
  {
    q: 'Dr. Reed: We\'ve found evidence that people were farming in this valley at least a thousand years earlier than we thought.\nDr. Uslu: _____\nDr. Reed: Mainly seeds of cultivated wheat and barley, which we dated using radiocarbon methods.\nDr. Uslu: That\'s a significant discovery.',
    o: [
      'What kind of evidence are you basing that conclusion on?',
      'When are you planning to publish your findings?',
      'Have other teams been excavating in the same valley?',
      'Why did the people eventually abandon the valley?',
      'How many people do you think lived there at the time?'
    ],
    why: 'Dr. Reed\'in cevabı ("Mainly seeds of cultivated wheat and barley") bir kanıt türüdür; demek ki Dr. Uslu hangi kanıta dayandıklarını sormuştur.',
    trap: 'C ve E makul sorulardır ama "tohumlar" cevabı onlara uymaz.',
    tactic: 'Cevabın türü (isim/kanıt) → What kind of ... sorusu'
  },
  {
    q: 'Ayşe: I read that the number of people living in extreme poverty has fallen dramatically over the past thirty years.\nDavid: _____\nAyşe: Not evenly, no. Most of the progress has been in East Asia, while numbers in parts of sub-Saharan Africa have actually risen.\nDavid: So the global figure hides very large regional differences.',
    o: [
      'Has that improvement been shared equally across all regions?',
      'How exactly do economists define extreme poverty?',
      'Which organisation published those figures?',
      'Is poverty still increasing in most developed countries?',
      'Why did poverty fall so quickly in the past?'
    ],
    why: 'Ayşe "Not evenly, no" diye cevap verir ve bölgesel farkları anlatır; boşlukta gelişmenin bölgeler arasında eşit dağılıp dağılmadığı sorulmuştur.',
    trap: 'E sebep sorar, ama Ayşe sebep değil dağılım anlatır.',
    tactic: '"Not evenly" → eşitlik/dağılım sorusu'
  },
  {
    q: 'Kerem: Why do astronauts lose bone mass during long missions in space?\nDr. Price: _____\nKerem: So that\'s why they have to exercise for about two hours every day on the space station.\nDr. Price: Exactly, although even that only slows the process down.',
    o: [
      'Because without gravity, their bones no longer have to carry the weight of their bodies.',
      'Because the food on the space station contains too much calcium.',
      'Most astronauts return to Earth after about six months.',
      'Radiation levels in space are much higher than on Earth.',
      'Astronauts are carefully selected for their physical fitness.'
    ],
    why: 'Kerem\'in "Demek ki bu yüzden her gün iki saat egzersiz yapıyorlar" çıkarımı, kemik kaybının yerçekimi yokluğunda kemiklerin yük taşımamasından kaynaklandığını gösterir.',
    trap: 'D uzayla ilgili doğru bir bilgidir ama egzersizle önlenebilecek bir sebep değildir.',
    tactic: '"So that\'s why ..." → boşlukta sebep'
  },
  {
    q: 'Moderator: Some people argue that social media has made political debate more democratic.\nPanellist: _____\nModerator: You mean people mostly see opinions that confirm what they already believe?\nPanellist: Yes, and that makes genuine debate between different groups much rarer.',
    o: [
      'In some ways, but algorithms also tend to place users in so-called echo chambers.',
      'Most politicians now have accounts on several different platforms.',
      'Younger voters are more likely to get their news from social media.',
      'Social media companies earn most of their income from advertising.',
      'Political debate on television has become less popular in recent years.'
    ],
    why: 'Moderatör "Yani insanlar çoğunlukla zaten inandıkları görüşleri mi görüyor?" diye açar; panelist "yankı odası" kavramından söz etmiş olmalıdır.',
    trap: 'C sosyal medyanın siyasetteki rolünü anlatır ama "inandıklarını doğrulayan görüşler" özetine götürmez.',
    tactic: '"You mean ...?" → boşlukta açıklanacak bir kavram'
  },
  {
    q: 'Elif: The new bridge design uses a material that can repair small cracks by itself.\nMartin: _____\nElif: It contains bacteria that produce limestone when water gets into a crack, sealing it from the inside.\nMartin: That could reduce maintenance costs enormously.',
    o: [
      'How does it manage to do that?',
      'When will construction of the bridge begin?',
      'Is the material more expensive than ordinary concrete?',
      'Who designed the bridge in the first place?',
      'Has it been used in any other countries?'
    ],
    why: 'Elif\'in cevabı malzemenin çatlakları nasıl onardığını açıklar (bakteriler kireçtaşı üretir); Martin bunun nasıl olduğunu sormuştur.',
    trap: 'C de malzemeyle ilgilidir ama cevap maliyet değil işleyişle ilgilidir; maliyet ancak Martin\'in son cümlesinde geçer.',
    tactic: 'Cevap bir süreç anlatıyorsa → How sorusu'
  },
  {
    q: 'Lisa: I\'ve noticed that my grandmother remembers her childhood very clearly but often forgets what she did yesterday.\nDr. Demir: _____\nLisa: So it\'s quite normal and not necessarily a sign of dementia?\nDr. Demir: In most cases, yes, though it\'s always worth mentioning to her doctor.',
    o: [
      'That\'s very common in older people, because long-term memories are stored differently from recent ones.',
      'Dementia affects about one in ten people over the age of sixty-five.',
      'You should encourage her to write down her memories of childhood.',
      'Memory usually begins to decline in a person\'s late twenties.',
      'Many people find their childhood memories change over time.'
    ],
    why: 'Lisa "Yani bu oldukça normal mi?" diye sorar; Dr. Demir bunun yaşlılarda çok yaygın olduğunu ve sebebini açıklamış olmalıdır.',
    trap: 'B demans istatistiği verir; "normal" sonucuna değil, kaygıya yol açar.',
    tactic: '"So it\'s quite normal...?" → boşlukta yaygınlık/normallik vurgusu'
  },
  {
    q: 'Deniz: Our lecturer said that the Black Death may have actually raised living standards for the survivors.\nOliver: _____\nDeniz: Because so many people had died, there was a shortage of workers, so those who survived could demand higher wages.\nOliver: I\'d never thought of it that way.',
    o: [
      'How could a disaster like that possibly have improved people\'s lives?',
      'When did the plague first reach Europe?',
      'How many people died during the pandemic?',
      'Did doctors at the time understand how the disease spread?',
      'Which cities were affected most severely?'
    ],
    why: 'Deniz, "Because..." ile felaketin yaşam koşullarını nasıl iyileştirdiğini açıklar; Oliver bunun nasıl mümkün olduğunu sormuştur.',
    trap: 'C ölü sayısını sorar; Deniz\'in cevabı ölümlerden söz etse de bir sayı değil, bir sebep-sonuç zinciri verir.',
    tactic: '"Because" ile başlayan cevap → How/Why sorusu'
  },
  {
    q: 'Dr. Grant: Our results show that children who grow up on farms are less likely to develop allergies.\nDr. Öztürk: That supports the idea that early exposure to microbes trains the immune system.\nDr. Grant: _____\nDr. Öztürk: Perhaps, but we would need a long-term study to prove that.',
    o: [
      'So could deliberately exposing children to certain microbes help prevent allergies?',
      'How many children took part in your study?',
      'Allergies are much more common in cities than in rural areas.',
      'Most of the farms in our study kept cows and pigs.',
      'The immune system is not fully developed at birth.'
    ],
    why: 'Dr. Öztürk "Perhaps, but..." deyip bunu kanıtlamak için uzun vadeli bir çalışma gerektiğini söyler; boşlukta yeni bir uygulama önerisi/hipotez soru biçiminde gelmiştir.',
    trap: 'C ve D bulguyu destekleyen bilgilerdir; "belki ama kanıtlanmalı" tepkisini gerektiren bir öneri içermez.',
    tactic: '"Perhaps, but we would need..." → boşlukta öneri/hipotez'
  },
  {
    q: 'Burak: I read that there are more trees on Earth today than there were a hundred years ago.\nSophie: _____\nBurak: That\'s the catch. Most of the new growth is in plantations, which support far fewer species than ancient forests.\nSophie: So the number of trees alone doesn\'t tell us much about the health of forests.',
    o: [
      'That\'s surprising, but are those new trees as valuable for wildlife as the old forests?',
      'Which countries have planted the largest number of trees?',
      'Then deforestation must have stopped completely.',
      'How do scientists count the number of trees on Earth?',
      'Trees absorb a large amount of carbon dioxide from the atmosphere.'
    ],
    why: 'Burak "That\'s the catch" (işin püf noktası bu) deyip yeni ağaçların yaban hayatı için eski ormanlar kadar değerli olmadığını açıklar; Sophie tam bunu sormuştur.',
    trap: 'C aşırı bir çıkarım yapar; Burak\'ın cevabı onu düzeltmez, tür çeşitliliğinden söz eder.',
    tactic: '"That\'s the catch" → boşlukta bir şüphe ya da sınırlama sorusu'
  },
  {
    q: 'Manager: We\'re planning to introduce a four-day working week without reducing salaries.\nConsultant: _____\nManager: That\'s what the trial is for. If output drops, we\'ll go back to the old system.\nConsultant: That sounds like a sensible approach.',
    o: [
      'What will you do if productivity falls as a result?',
      'Which day of the week will employees have off?',
      'Have your employees been asking for this change?',
      'Several other companies in your sector have already done the same.',
      'Will the new system apply to part-time staff as well?'
    ],
    why: 'Yönetici "Deneme bunun için. Üretim düşerse eski sisteme döneriz" der; boşlukta üretkenlik düşerse ne yapılacağı sorulmuştur.',
    trap: 'B ve E sistemle ilgili ayrıntıları sorar; "üretim düşerse" cevabına bağlanmaz.',
    tactic: 'Cevaptaki "If output drops" → What if ...? sorusu'
  },
  {
    q: 'Student: Why is the sea salty while rivers and lakes are mostly fresh?\nTeacher: _____\nStudent: So the salt slowly builds up in the oceans because it has nowhere else to go?\nTeacher: That\'s it. Over millions of years, the concentration has reached the level we see today.',
    o: [
      'Rivers carry small amounts of dissolved minerals into the sea, and when the water evaporates, the salt stays behind.',
      'About ninety-seven percent of the water on Earth is found in the oceans.',
      'The Dead Sea is so salty that people can float on its surface easily.',
      'Some fish can live in both salt water and fresh water.',
      'Sea water cannot be used for drinking without being treated first.'
    ],
    why: 'Öğrenci "tuz okyanuslarda yavaşça birikiyor çünkü gidecek başka yeri yok" der; öğretmen nehirlerin mineral taşıdığını ve buharlaşmada tuzun geride kaldığını anlatmış olmalıdır.',
    trap: 'C tuzlulukla ilgili ilginç bir örnektir ama birikme sürecini açıklamaz.',
    tactic: 'Öğrencinin özeti → boşlukta süreç açıklaması'
  },
  {
    q: 'Dr. Ford: Recent research suggests that bilingual people may develop the symptoms of dementia several years later than monolinguals.\nDr. Şahin: _____\nDr. Ford: Not necessarily. It may simply delay the symptoms by giving the brain more ways to compensate for damage.\nDr. Şahin: That\'s an important distinction.',
    o: [
      'Does that mean speaking two languages actually prevents the disease itself?',
      'How many languages do most people in the world speak?',
      'At what age do people usually learn a second language?',
      'Is it easier for children to learn a second language than adults?',
      'Have you studied people who speak more than two languages?'
    ],
    why: 'Dr. Ford "Not necessarily" deyip iki dilliliğin hastalığı önlemediğini, yalnızca belirtileri geciktirebileceğini açıklar; boşlukta hastalığın önlenip önlenmediği sorulmuştur.',
    trap: 'E de "not necessarily" ile cevaplanabilir gibi görünür ama Ford\'un açıklaması önleme ile geciktirme arasındaki farka odaklanır.',
    tactic: '"Not necessarily" + ayrım → boşlukta aşırı çıkarım'
  },
  {
    q: 'Gül: It\'s strange that we still don\'t know exactly why we dream.\nAlex: _____\nGül: So it\'s possible that dreaming helps us cope with difficult experiences?\nAlex: That\'s one of the main theories, at least.',
    o: [
      'Well, some researchers think dreams help the brain process emotions from the day.',
      'Most people forget their dreams within a few minutes of waking up.',
      'Dreams occur mainly during a stage of sleep known as REM sleep.',
      'Some people say they never dream at all.',
      'Children usually have more nightmares than adults.'
    ],
    why: 'Gül "Yani rüya görmek zor deneyimlerle başa çıkmamıza yardım edebilir mi?" der; Alex rüyaların duyguları işlemeye yardım ettiğini savunan bir görüşten söz etmiş olmalıdır.',
    trap: 'C rüyalarla ilgili doğru bir bilgidir ama "neden" rüya gördüğümüze dair bir açıklama vermez.',
    tactic: '"So it\'s possible that ...?" → boşlukta teori'
  },
  {
    q: 'Hande: Global sales of electric cars rose by forty percent last year.\nJames: _____\nHande: Because battery prices have fallen sharply, making the cars much more affordable for ordinary buyers.\nJames: And I suppose government subsidies have also played a part.',
    o: [
      'What do you think is driving such rapid growth?',
      'Which country has the largest market for electric cars?',
      'How long does it take to charge an electric car?',
      'Are electric cars really better for the environment?',
      'Will petrol cars be banned in the near future?'
    ],
    why: 'Hande\'nin "Because battery prices have fallen..." cevabı bir sebep verir; James bu hızlı büyümenin nedenini sormuştur.',
    trap: 'D de tartışmalı bir sorudur ama "Because battery prices have fallen" cevabı çevreyle değil, satış artışının nedeniyle ilgilidir.',
    tactic: '"Because" cevabı → sebep soran soru'
  },
  {
    q: 'Professor: Many of the paintings in this cave are around forty thousand years old.\nStudent: _____\nProfessor: We use a method that measures the decay of uranium in the thin layers of mineral that have formed on top of the paintings.\nStudent: So the paintings must be at least as old as those layers.',
    o: [
      'How is it possible to know their age so precisely?',
      'Who do you think painted them?',
      'Why did people paint animals rather than humans?',
      'Are visitors allowed to enter the cave?',
      'What kind of paint did they use?'
    ],
    why: 'Profesör yaşın nasıl ölçüldüğünü anlatır (uranyum bozunması); öğrenci yaşın nasıl bu kadar kesin bilinebildiğini sormuştur.',
    trap: 'E de bir yöntem sorusu gibidir ama cevap boya değil, tarihleme yöntemidir.',
    tactic: 'Cevap bir yöntem → How is it possible ...?'
  }
];
