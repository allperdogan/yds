// Generated question bank: dialogue (100 questions).
import { YdsQuestion } from '../../types';
import { shuffleQuestionList } from '../../services/optionShuffle';

const RAW_DIALOGUE_BANK: YdsQuestion[] = [
  {
    "id": "bank_dl_001",
    "type": "dialogue",
    "question": "Emma: I've read that the city plans to build a new airport on the wetlands to the east.\nDaniel: _____\nEmma: Exactly. Thousands of migrating birds stop there every spring, and nobody seems to care.\nDaniel: Maybe we should join the protest next weekend.",
    "options": {
      "A": "Won't that destroy an important habitat for wildlife?",
      "B": "Will the new airport create many jobs for local people?",
      "C": "How long will it take to fly to the capital from there?",
      "D": "Isn't the old airport too small for the number of passengers?",
      "E": "Do you think ticket prices will go down after it opens?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Sonraki cevaptan geri çıkarım",
    "trapWarning": "B, C, D ve E makul sorulardır ama Emma 'Exactly' deyip kuşlardan bahseder; boşlukta doğal yaşam kaygısı olmalıdır.",
    "explanation": "Emma 'Exactly' ile onaylar ve göçmen kuşlardan söz eder; Daniel'in sorusu yaşam alanının yok olmasıyla ilgili olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_002",
    "type": "dialogue",
    "question": "Student: I'm not sure whether to write my thesis on renewable energy or on water management.\nProfessor: _____\nStudent: That's true. I spent last summer working at a water treatment plant, so I already have some data.\nProfessor: Then the choice seems clear.",
    "options": {
      "A": "Renewable energy is a more popular topic among examiners these days.",
      "B": "Why not choose the one where you already have some practical experience?",
      "C": "You should read the latest reports on renewable energy before deciding.",
      "D": "Water management is a very difficult subject for a first thesis.",
      "E": "Have you discussed the topic with the other students in your group?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Cevaptaki 'That's true' + deneyim vurgusu",
    "trapWarning": "A ve D seçimi diğer konuya yönlendirir; C ve E öğrencinin cevabıyla bağlanmaz.",
    "explanation": "Öğrenci 'That's true' deyip su arıtma tesisindeki deneyiminden söz eder; profesör deneyimi olan konuyu önermiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_003",
    "type": "dialogue",
    "question": "Sarah: Our company is thinking of letting everyone work from home three days a week.\nMark: That sounds great for the employees.\nSarah: _____\nMark: You're right. Some teams might find it harder to share ideas and solve problems together.",
    "options": {
      "A": "Yes, and it will also save the company a lot of money on office rent.",
      "B": "I agree, most employees have been asking for this for years.",
      "C": "Perhaps, but I'm worried about how it might affect teamwork.",
      "D": "Actually, the plan has already been approved by the board.",
      "E": "Do you think employees would prefer four days instead?"
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "Mark'ın 'You're right' + ekip çalışması endişesi",
    "trapWarning": "A ve B planı destekler; D ve E Mark'ın ekip çalışması yorumuyla bağlanmaz.",
    "explanation": "Mark 'You're right' diyerek ekiplerin fikir paylaşmasının zorlaşabileceğini söyler; Sarah bir endişe dile getirmiş olmalıdır (C şıkkı)."
  },
  {
    "id": "bank_dl_004",
    "type": "dialogue",
    "question": "Journalist: Your research suggests that bilingual children perform better at certain tasks. Which ones?\nResearcher: _____\nJournalist: So switching between two languages trains the brain to focus?\nResearcher: That's our main hypothesis, yes.",
    "options": {
      "A": "Mainly those that require ignoring distractions and switching attention.",
      "B": "Mostly reading and spelling tasks in their first language.",
      "C": "We didn't find any significant difference in mathematics.",
      "D": "Our study included more than five hundred children aged six to ten.",
      "E": "Children who learned the second language later did slightly worse."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Sonraki soru boşluğun özetidir",
    "trapWarning": "Gazeteci 'dikkat' ve 'iki dil arasında geçiş' der. B, C, D ve E bu özetle bağlanmaz.",
    "explanation": "Gazetecinin 'switching ... trains the brain to focus' çıkarımı, boşlukta dikkat ve geçiş gerektiren görevlerin söylendiğini gösterir (A şıkkı)."
  },
  {
    "id": "bank_dl_005",
    "type": "dialogue",
    "question": "Customer: I bought this laptop last week, but the battery only lasts about an hour.\nShop assistant: _____\nCustomer: Yes, I've checked that already. It's set to save energy.\nShop assistant: In that case, we'll replace it for you.",
    "options": {
      "A": "Have you tried changing the power settings on your laptop?",
      "B": "Would you like to buy an extra battery at a discount?",
      "C": "Did you keep the receipt from your purchase last week?",
      "D": "Most laptops of this model last about ten hours, actually.",
      "E": "Have you installed any new programs since you bought it?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Cevap 'I've checked that ... It's set to save energy'",
    "trapWarning": "C ve E de makul sorulardır ama müşterinin 'enerji tasarrufuna ayarlı' cevabıyla bağlanmaz.",
    "explanation": "Müşteri 'enerji tasarrufu ayarında' diyor; satıcı güç ayarlarını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_006",
    "type": "dialogue",
    "question": "Ali: Did you hear that the government is going to raise the retirement age to seventy?\nZeynep: _____\nAli: True, but many people in physically demanding jobs simply can't work that long.\nZeynep: That's a fair point.",
    "options": {
      "A": "I suppose it makes sense, since people are living much longer now.",
      "B": "That's terrible; nobody will support such an unfair decision.",
      "C": "Really? I thought they were going to lower it to sixty.",
      "D": "Will the new rule apply to people who are already retired?",
      "E": "I heard about it, but I don't think it will ever happen."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'True, but ...' önceki görüşe kısmen katılıp itiraz eder",
    "trapWarning": "B şıkkı zaten olumsuz bir görüştür, 'True, but' ile itiraz gerekmez; C, D ve E bir görüş bildirmez.",
    "explanation": "Ali 'True, but' ile itiraz ediyor; Zeynep kararı destekleyen bir gerekçe vermiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_007",
    "type": "dialogue",
    "question": "Doctor: Your test results show that your cholesterol is a little high.\nPatient: _____\nDoctor: Not at this stage. I'd rather you try changing your diet and exercising more first.\nPatient: All right, I'll do my best.",
    "options": {
      "A": "Is it caused by something I eat every day?",
      "B": "Will I need to start taking medication for it?",
      "C": "How often should I have my blood tested?",
      "D": "Is high cholesterol common in people of my age?",
      "E": "Could it be a mistake in the laboratory results?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Not at this stage' + alternatif öneri",
    "trapWarning": "A, C, D ve E de makul sorulardır ama 'Not at this stage ... try diet first' cevabı ilaç sorusuna bağlanır.",
    "explanation": "Doktor 'Bu aşamada değil, önce diyet ve egzersiz' diyor; hasta ilaç gerekip gerekmediğini sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_008",
    "type": "dialogue",
    "question": "Lucy: I can't believe how expensive concert tickets have become.\nTom: _____\nLucy: Maybe, but that doesn't explain why prices have doubled in just two years.\nTom: I suppose you're right.",
    "options": {
      "A": "I know. I couldn't afford to go to any concerts last year.",
      "B": "Well, bands earn much less from selling music these days.",
      "C": "Have you thought about buying tickets for the next tour?",
      "D": "Which concert were you hoping to go to this summer?",
      "E": "They're cheaper if you buy them online, aren't they?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Maybe, but ...' bir açıklamaya itiraz",
    "trapWarning": "A şıkkı Lucy'ye katılır, itiraz gerektirmez; C ve D soru sorar; E şıkkı de bir açıklama sayılmaz, fiyat artışını açıklamaz.",
    "explanation": "Lucy 'Belki ama bu fiyatların iki katına çıkmasını açıklamıyor' der; Tom bir neden ileri sürmüş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_009",
    "type": "dialogue",
    "question": "Manager: We've received a lot of complaints about late deliveries this month.\nEmployee: _____\nManager: I see. Then we should hire temporary drivers until the end of the holiday season.\nEmployee: I'll contact the agency today.",
    "options": {
      "A": "Most customers were happy with the quality of the products.",
      "B": "That's because several of our drivers have been off sick.",
      "C": "We could offer customers a discount on their next order.",
      "D": "Our competitors are having the same problem, I believe.",
      "E": "Shall I write a letter of apology to each customer?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Çözüm (geçici şoför) → sorunun nedeni",
    "trapWarning": "C ve E de makul tepkilerdir ama yöneticinin 'geçici şoför alalım' çözümü şoför eksikliğine dayanır.",
    "explanation": "Yönetici geçici şoför almayı önerdiğine göre çalışan şoförlerin hasta olduğunu söylemiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_010",
    "type": "dialogue",
    "question": "Hannah: Why do you think so many people are moving out of big cities?\nOmar: _____\nHannah: That's probably part of it, but I think the rise of remote work matters more.\nOmar: You may be right.",
    "options": {
      "A": "I don't think many people are actually leaving.",
      "B": "Mainly because housing has become so expensive.",
      "C": "They're probably moving to other big cities abroad.",
      "D": "Most of them are retired people, I think.",
      "E": "Because remote work allows them to live anywhere."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'part of it, but ... remote work matters more'",
    "trapWarning": "E şıkkı ince tuzaktır: Hannah uzaktan çalışmayı kendi fikri olarak ekler, Omar söylemiş olamaz. A şıkkı soruyu reddeder; C ve D neden vermez.",
    "explanation": "Hannah 'Bu muhtemelen nedenlerden biri ama uzaktan çalışma daha önemli' der; Omar başka bir neden (konut fiyatları) vermiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_011",
    "type": "dialogue",
    "question": "Interviewer: What made you decide to become a marine biologist?\nScientist: _____\nInterviewer: So it all started with a childhood holiday?\nScientist: Yes, I've never forgotten that first dive.",
    "options": {
      "A": "I studied biology at university and then specialised in it.",
      "B": "When I was ten, I went snorkelling on a coral reef and was amazed.",
      "C": "My parents wanted me to become a doctor, but I refused.",
      "D": "I've always believed that the oceans need more protection.",
      "E": "There are very few jobs in this field, unfortunately."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Sonraki özet: 'childhood holiday'",
    "trapWarning": "A, C, D ve E kariyer seçimine dair makul cevaplardır ama çocukluk tatiliyle bağlanmaz.",
    "explanation": "Röportajcı 'Yani her şey çocuklukta bir tatille mi başladı?' diye özetler; boşlukta çocukken mercan resifinde şnorkelle yüzme anlatılmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_012",
    "type": "dialogue",
    "question": "Nina: I'm thinking of buying an electric car, but I'm worried about the range.\nPaul: _____\nNina: Really? I didn't know there were so many charging points around here.\nPaul: Yes, they've built dozens in the last year.",
    "options": {
      "A": "You could always rent a petrol car for long trips.",
      "B": "Electric cars are still much more expensive than others.",
      "C": "You won't have a problem; there are chargers everywhere now.",
      "D": "Most electric cars can travel at least four hundred kilometres.",
      "E": "Why don't you wait until the prices come down a bit?"
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "Nina 'şarj noktaları' der",
    "trapWarning": "D şıkkı de menzil endişesine iyi bir cevaptır ama Nina'nın 'bu kadar çok şarj noktası olduğunu bilmiyordum' tepkisiyle bağlanmaz.",
    "explanation": "Nina'nın şaşkınlığı şarj noktalarıyla ilgilidir; Paul her yerde şarj istasyonu olduğunu söylemiş olmalıdır (C şıkkı)."
  },
  {
    "id": "bank_dl_013",
    "type": "dialogue",
    "question": "Professor: The results of your experiment don't match the ones we published last year.\nStudent: _____\nProfessor: Good thinking. If the temperature was different, that could explain everything.\nStudent: I'll check the lab records.",
    "options": {
      "A": "Maybe we made a mistake when we wrote last year's paper.",
      "B": "Could the room have been warmer during my experiment?",
      "C": "Should I repeat the experiment with a larger sample?",
      "D": "I think I should ask another student to check my data.",
      "E": "Perhaps we should publish these results as well."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Professor 'If the temperature was different'",
    "trapWarning": "A, C ve D de makul ama profesörün sıcaklık açıklamasıyla bağlanmaz; E şıkkı ise erken bir öneridir.",
    "explanation": "Profesör 'Sıcaklık farklıysa bu her şeyi açıklar' der; öğrenci odanın sıcaklığını sorgulamış olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_014",
    "type": "dialogue",
    "question": "Jack: This new app says it can teach you a language in just three months.\nMaria: _____\nJack: I know, but it might help me learn the basics before my trip.\nMaria: That's true. It can't hurt to try.",
    "options": {
      "A": "That's amazing! I'm going to download it right now.",
      "B": "I doubt you can really become fluent that quickly.",
      "C": "How much does it cost to download the app?",
      "D": "Which languages does it offer at the moment?",
      "E": "My sister learned Spanish with a similar app."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'I know, but ...' şüpheye cevap",
    "trapWarning": "A ve E uygulamayı destekler, 'I know, but' gerektirmez; C ve D bilgi sorar.",
    "explanation": "Jack 'Biliyorum ama temel bilgileri öğrenmeme yardım edebilir' der; Maria bir şüphe dile getirmiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_015",
    "type": "dialogue",
    "question": "Guide: This castle was built in the twelfth century and has survived three major sieges.\nTourist: _____\nGuide: Mainly because of its location. It's built on a cliff, so attackers could only approach from one side.\nTourist: That's clever.",
    "options": {
      "A": "How did it manage to survive for so long?",
      "B": "Who lives in the castle these days?",
      "C": "How many people visit the castle each year?",
      "D": "When was the castle opened to the public?",
      "E": "Was it badly damaged during the sieges?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Mainly because of ...' bir 'neden' sorusuna cevaptır",
    "trapWarning": "E şıkkı de ilgili bir sorudur ama rehberin 'konumundan dolayı' cevabı 'nasıl dayandı' sorusuna bağlanır.",
    "explanation": "Rehber nedeni açıklıyor ('Mainly because of its location'); turist kalenin nasıl dayandığını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_016",
    "type": "dialogue",
    "question": "Kate: I've been offered a job abroad, but the salary is lower than what I earn now.\nLiam: _____\nKate: Yes, and I'd get to learn a new language and meet new people.\nLiam: Then it sounds like a great opportunity.",
    "options": {
      "A": "Then you should definitely turn it down.",
      "B": "But think of the experience you'd gain.",
      "C": "Is the cost of living higher over there?",
      "D": "How long would the contract last?",
      "E": "Have you told your current boss yet?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Yes, and ...' önceki fikri genişletir",
    "trapWarning": "A şıkkı teklifi reddettirir, Kate'in olumlu devamıyla çelişir; C, D ve E soru olup 'Yes, and' ile genişletilecek bir fikir sunmaz.",
    "explanation": "Kate 'Evet, ayrıca yeni bir dil öğrenirim' diyerek Liam'ın olumlu fikrine ekleme yapar; Liam deneyimden söz etmiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_017",
    "type": "dialogue",
    "question": "Reporter: Some people say that video games make children more violent.\nPsychologist: _____\nReporter: So other factors, such as family life, are more important?\nPsychologist: Exactly.",
    "options": {
      "A": "That's true; we've seen a sharp rise in violence among gamers.",
      "B": "Most research has found little evidence of a direct link.",
      "C": "Children should not play games for more than an hour a day.",
      "D": "Many games are now designed with educational goals in mind.",
      "E": "Parents often don't know which games their children play."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Sonraki soru: 'other factors ... more important?'",
    "trapWarning": "A şıkkı tam tersini söyler; C, D ve E konuyla ilgili ama 'diğer etkenler daha önemli' çıkarımını desteklemez.",
    "explanation": "Muhabir 'Yani aile hayatı gibi başka etkenler daha mı önemli?' diye çıkarım yapar; psikolog doğrudan bir bağ bulunmadığını söylemiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_018",
    "type": "dialogue",
    "question": "Ben: I've decided to stop eating meat for environmental reasons.\nClaire: _____\nBen: Actually, studies show that beef produces far more emissions than any plant-based food.\nClaire: I didn't realise the difference was so big.",
    "options": {
      "A": "That's a good idea; it's also much healthier for you, isn't it?",
      "B": "Do you really think it makes much difference to the planet?",
      "C": "How will you get enough protein without meat?",
      "D": "I tried that once, but I gave up after about a month or so.",
      "E": "Are you going to stop eating fish as well?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Actually, studies show ...' şüpheye kanıtla cevap",
    "trapWarning": "C şıkkı de makul bir sorudur ama Ben'in cevabı emisyonlarla ilgilidir, proteinle değil.",
    "explanation": "Ben emisyon verileriyle cevap verir; Claire çevreye gerçekten fark yaratıp yaratmadığını sorgulamış olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_019",
    "type": "dialogue",
    "question": "Anna: The library is going to close at six instead of nine from next month.\nRobert: _____\nAnna: Apparently, it's because of budget cuts. They can't afford to pay the evening staff.\nRobert: That's a shame.",
    "options": {
      "A": "That's great; I usually go there in the morning anyway.",
      "B": "Why are they changing the opening hours?",
      "C": "Will it be open on Sundays as well?",
      "D": "Where else can students study in the evening?",
      "E": "How many people work at the library now?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Apparently, it's because of ...' → neden sorusu",
    "trapWarning": "D şıkkı de makul bir tepkidir ama Anna'nın 'it's because of budget cuts' cevabı 'neden' sorusuna bağlanır.",
    "explanation": "Anna nedenini açıklıyor; Robert saatlerin neden değiştiğini sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_020",
    "type": "dialogue",
    "question": "Teacher: Your essay has some very interesting ideas, but it's too long.\nStudent: _____\nTeacher: Yes, try to remove the second example and shorten the introduction.\nStudent: I'll do that tonight.",
    "options": {
      "A": "Should I add some more examples to support my ideas?",
      "B": "Could you tell me which parts I should cut?",
      "C": "Do you think my ideas are original enough?",
      "D": "Can I submit it a few days late?",
      "E": "Would it be better to choose another topic?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Öğretmenin cevabı: hangi kısımları çıkaracağı",
    "trapWarning": "A şıkkı tam tersini önerir; C, D ve E öğretmenin 'ikinci örneği çıkar' cevabıyla bağlanmaz.",
    "explanation": "Öğretmen hangi kısımların kısaltılacağını söylüyor; öğrenci hangi kısımları çıkarması gerektiğini sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_021",
    "type": "dialogue",
    "question": "Mia: Scientists have found water ice on the Moon.\nJames: _____\nMia: Yes, because it means astronauts could make fuel and drinking water there instead of bringing it from Earth.\nJames: That would make long missions much cheaper.",
    "options": {
      "A": "Isn't the Moon too cold for anyone to live there?",
      "B": "Is that important for future space missions?",
      "C": "How did the ice get there in the first place?",
      "D": "Which country's mission made the discovery?",
      "E": "Will they send astronauts to collect it soon?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Yes, because ...' önem açıklaması",
    "trapWarning": "C, D ve E evet/hayır cevabı ile 'because' açıklamasına uymaz; A şıkkı ise konuyu değiştirir.",
    "explanation": "Mia 'Evet, çünkü...' ile önemini açıklıyor; James keşfin gelecekteki görevler için önemli olup olmadığını sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_022",
    "type": "dialogue",
    "question": "Customer: I'd like to cancel my gym membership.\nReceptionist: _____\nCustomer: No, it's not that. I'm moving to another city next month.\nReceptionist: I see. I'll prepare the paperwork for you.",
    "options": {
      "A": "Certainly. Could you give me your membership number?",
      "B": "Is there a problem with our classes or equipment?",
      "C": "Would you like to freeze it for a few months instead?",
      "D": "Did you know that cancellation costs fifty euros?",
      "E": "Have you tried our new swimming pool yet?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'No, it's not that' → bir sorun tahmini reddedilir",
    "trapWarning": "A, C ve D de makul cevaplardır ama müşterinin 'Hayır, sebep o değil' cevabı bir sorun tahminiyle bağlanır.",
    "explanation": "Müşteri 'Hayır, öyle değil' diyerek bir tahmini reddeder; resepsiyonist bir sorun olup olmadığını sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_023",
    "type": "dialogue",
    "question": "Lena: I read that sleeping less than six hours a night can harm your memory.\nOscar: _____\nLena: I know, but it's worth trying to go to bed a bit earlier.\nOscar: You're right. I'll give it a try.",
    "options": {
      "A": "That explains why I forget things so easily.",
      "B": "But with my job, it's almost impossible to sleep more.",
      "C": "Most adults need about eight hours of sleep every single night.",
      "D": "Which study did you read that in? Was it a reliable one?",
      "E": "My doctor told me the same thing last year."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'I know, but it's worth trying' → bir engel dile getirilmiştir",
    "trapWarning": "A, C ve E bilgiyi kabul eder; 'I know, but' ile cevap gerektirmez. D şıkkı bir soru sorar.",
    "explanation": "Lena 'Biliyorum ama denemeye değer' der; Oscar daha fazla uyumanın zor olduğunu söylemiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_024",
    "type": "dialogue",
    "question": "Engineer: The bridge needs urgent repairs, or it may become unsafe within a year.\nMayor: _____\nEngineer: About two million euros, if we start immediately.\nMayor: I'll raise it at the next council meeting.",
    "options": {
      "A": "Who designed the bridge in the first place?",
      "B": "How much would the repairs cost?",
      "C": "How long would the bridge be closed?",
      "D": "Could we build a new bridge instead?",
      "E": "Why wasn't this problem noticed earlier?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Cevap bir miktar bildirir",
    "trapWarning": "C şıkkı de makul bir sorudur ama 'About two million euros' cevabı maliyet sorusuna bağlanır.",
    "explanation": "Mühendis 'yaklaşık iki milyon euro' der; belediye başkanı maliyeti sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_025",
    "type": "dialogue",
    "question": "Sophie: I don't understand why so many people still don't recycle.\nDavid: _____\nSophie: Then the council should make it easier, for example by collecting it from every house.\nDavid: Exactly.",
    "options": {
      "A": "Recycling has increased quite a lot in the last few years.",
      "B": "Many people say it's too complicated and takes too much time.",
      "C": "I always recycle paper and glass, but not plastic.",
      "D": "Some countries recycle more than half of their waste.",
      "E": "Recycling plants use a lot of energy themselves, you know."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Çözüm önerisi ('make it easier') → sorun ('too complicated')",
    "trapWarning": "A, C, D ve E konuyla ilgilidir ama Sophie'nin 'daha kolay hale getirmeli' çözümü zorluk sorununa bağlanır.",
    "explanation": "Sophie belediyenin geri dönüşümü kolaylaştırmasını önerir; David insanların bunu zor bulduğunu söylemiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_026",
    "type": "dialogue",
    "question": "Rachel: _____\nSam: Not yet. The council still has to approve the plans.\nRachel: I hope they do. That old factory site has been empty for years.\nSam: So do I. A park would be perfect there.",
    "options": {
      "A": "Have they started building the new park yet?",
      "B": "Did you hear that the factory is going to reopen?",
      "C": "Who owns the land where the old factory was?",
      "D": "Why was the factory closed down in the first place?",
      "E": "Do you think the park will attract many visitors?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Not yet' + 'plans' → bir başlangıç sorusu",
    "trapWarning": "B şıkkı fabrikanın yeniden açılmasından bahseder, 'park' ile çelişir; C, D ve E 'Not yet' cevabına uymaz.",
    "explanation": "Sam 'Henüz değil, planların onaylanması gerekiyor' der; Rachel park inşaatının başlayıp başlamadığını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_027",
    "type": "dialogue",
    "question": "Pilot: We're expecting some turbulence over the mountains.\nPassenger: _____\nPilot: Not at all. It's completely normal and the aircraft is designed to handle it.\nPassenger: That's a relief.",
    "options": {
      "A": "How long will it take us to cross them?",
      "B": "Is it dangerous for the plane?",
      "C": "Will we arrive on time despite it?",
      "D": "Should I keep my seatbelt fastened?",
      "E": "Can I still use the toilet during it?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Not at all ... completely normal' → tehlike sorusu",
    "trapWarning": "D şıkkı de makul bir sorudur ama 'Not at all' cevabıyla anlam olarak ters düşer (kemer takılmalıdır).",
    "explanation": "Pilot 'Hiç değil, tamamen normal' der; yolcu bunun tehlikeli olup olmadığını sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_028",
    "type": "dialogue",
    "question": "Ellen: The new manager wants us to have a meeting every morning.\nFrank: _____\nEllen: She says it will help us share problems before they become serious.\nFrank: Well, I suppose that makes sense.",
    "options": {
      "A": "What's the point of meeting every day?",
      "B": "How long will each meeting last?",
      "C": "Can we have it online instead?",
      "D": "Will she be at every meeting herself?",
      "E": "Do the other departments do the same?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'She says it will help ...' → amaç sorusu",
    "trapWarning": "B, C, D ve E de makul sorulardır ama Ellen'ın cevabı toplantının amacını açıklar.",
    "explanation": "Ellen toplantının amacını açıklıyor; Frank bunun ne işe yarayacağını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_029",
    "type": "dialogue",
    "question": "Historian: Most people think the Vikings were simply violent raiders.\nInterviewer: _____\nHistorian: Not entirely. They were also skilled traders, farmers and explorers who reached North America.\nInterviewer: That's a very different picture.",
    "options": {
      "A": "Did the Vikings ever travel as far as North America?",
      "B": "Is that view accurate?",
      "C": "Where did the Vikings come from originally?",
      "D": "How did they build such fast ships?",
      "E": "Why did they stop raiding other countries?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Not entirely' → doğruluk sorusu",
    "trapWarning": "A şıkkı ince tuzaktır: tarihçi Kuzey Amerika'dan bahseder ama 'Not entirely' bu soruya cevap olmaz. C, D ve E de yaygın görüşün doğruluğunu sorgulamaz.",
    "explanation": "Tarihçi 'Tamamen değil' diyerek yaygın görüşü düzeltir; röportajcı bu görüşün doğru olup olmadığını sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_030",
    "type": "dialogue",
    "question": "Amy: I'm going to apply for the scholarship to study in Japan.\nBrian: That's wonderful! When is the deadline?\nAmy: _____\nBrian: Then you'd better start writing your application today.",
    "options": {
      "A": "I haven't decided which university to choose yet.",
      "B": "It's at the end of this week, unfortunately.",
      "C": "I need two letters of recommendation from my teachers.",
      "D": "Only five students will be selected this year.",
      "E": "The scholarship covers all tuition and living costs."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Soru → son tarih; tepki → acele",
    "trapWarning": "C ve D de başvuruyla ilgilidir ama Brian'ın 'bugün başlasan iyi olur' tepkisi yakın bir son tarihe bağlanır.",
    "explanation": "Brian son tarihi sorar ve 'bugün başlasan iyi olur' der; son tarih yakın olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_031",
    "type": "dialogue",
    "question": "Father: You've been playing that game for three hours.\nSon: _____\nFather: Then finish this level, and after that it's time for homework.\nSon: Okay, I promise.",
    "options": {
      "A": "But I've already finished all my homework.",
      "B": "I'm almost at the end of this level.",
      "C": "My friends play for much longer than me.",
      "D": "This game is actually very educational.",
      "E": "Can I play again after dinner?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Then finish this level' → seviye bitmek üzere",
    "trapWarning": "A şıkkı ödevin bittiğini söyler, babanın 'sonra ödev zamanı' cevabıyla çelişir; C, D ve E 'finish this level' ile bağlanmaz.",
    "explanation": "Baba 'O zaman bu seviyeyi bitir' der; oğul seviyenin sonuna yaklaştığını söylemiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_032",
    "type": "dialogue",
    "question": "Laura: Our neighbourhood is planning to start a community garden.\nPeter: _____\nLaura: Anyone who wants to. Each family will get a small plot to grow vegetables.\nPeter: I'd love to take part.",
    "options": {
      "A": "Where exactly will the garden be?",
      "B": "Who will be able to use it?",
      "C": "How much will it cost to join?",
      "D": "When will it be ready to use?",
      "E": "What kind of vegetables will you grow?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Anyone who wants to' → kim sorusu",
    "trapWarning": "A, C, D ve E de makul sorulardır ama 'Anyone who wants to' yalnızca 'kim' sorusuna cevap olur.",
    "explanation": "Laura 'İsteyen herkes' der; Peter bahçeyi kimin kullanabileceğini sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_033",
    "type": "dialogue",
    "question": "Chef: Our restaurant now uses only ingredients from local farms.\nCritic: _____\nChef: A little, yes, but our customers say the quality is worth it.\nCritic: I can certainly taste the difference.",
    "options": {
      "A": "Has that made your dishes more expensive?",
      "B": "Which farms do you buy your vegetables from?",
      "C": "Do you change the menu every season now?",
      "D": "Was it difficult to find reliable suppliers?",
      "E": "Are your customers mostly local people?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'A little, yes, but ... worth it' → maliyet",
    "trapWarning": "D şıkkı de 'a little, yes' ile cevaplanabilir ama 'kalite buna değer' ifadesi fiyat artışına işaret eder.",
    "explanation": "Şef 'Biraz, evet, ama müşteriler kalitenin buna değdiğini söylüyor' der; eleştirmen yemeklerin pahalılaşıp pahalılaşmadığını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_034",
    "type": "dialogue",
    "question": "Nurse: You'll need to stay in bed for at least two more days.\nPatient: _____\nNurse: I'm afraid not. Your wound needs time to heal properly.\nPatient: All right, I understand.",
    "options": {
      "A": "Can I have some visitors this afternoon?",
      "B": "Couldn't I go home a bit sooner?",
      "C": "How long will it take for the wound to heal?",
      "D": "Will I need any more medication today?",
      "E": "Is the doctor coming to see me later?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'I'm afraid not' + gerekçe → bir rica reddedilir",
    "trapWarning": "A ve D de 'I'm afraid not' ile cevaplanabilir ama 'yaranın iyileşmesi için zaman gerek' gerekçesi erken çıkma isteğine bağlanır.",
    "explanation": "Hemşire 'Maalesef hayır, yaranın zamana ihtiyacı var' der; hasta daha erken eve gidip gidemeyeceğini sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_035",
    "type": "dialogue",
    "question": "Olivia: I think school uniforms should be banned.\nHenry: _____\nOlivia: Maybe, but they also stop students from expressing their personality.\nHenry: I hadn't thought of it that way.",
    "options": {
      "A": "I agree. They're uncomfortable and expensive.",
      "B": "But they help reduce differences between rich and poor students.",
      "C": "Most schools in this country don't have uniforms anyway, do they?",
      "D": "Did you have to wear a uniform at your own school, then?",
      "E": "Who would decide what students are allowed to wear?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Maybe, but ...' → karşı argümana itiraz",
    "trapWarning": "A şıkkı Olivia'ya katılır, 'Maybe, but' gerektirmez; C, D ve E argüman sunmaz.",
    "explanation": "Olivia 'Belki ama...' ile itiraz eder; Henry üniformaları destekleyen bir argüman sunmuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_036",
    "type": "dialogue",
    "question": "Receptionist: I'm sorry, but we don't have any double rooms left for tonight.\nGuest: _____\nReceptionist: Yes, we have two single rooms on the third floor.\nGuest: That will be fine, thank you.",
    "options": {
      "A": "Could you recommend another hotel nearby?",
      "B": "Is there anything else available?",
      "C": "Can I book a double room for tomorrow?",
      "D": "How much does a double room usually cost?",
      "E": "Do you offer a discount for long stays?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Yes, we have two single rooms' → başka seçenek sorusu",
    "trapWarning": "A ve C de makul tepkilerdir ama resepsiyonistin 'Evet, iki tek kişilik oda var' cevabı başka seçenek sorusuna bağlanır.",
    "explanation": "Resepsiyonist başka seçenek sunar; misafir başka bir şey olup olmadığını sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_037",
    "type": "dialogue",
    "question": "Grace: I've noticed that you always take the stairs instead of the lift.\nEthan: _____\nGrace: That's a good habit. Maybe I should start doing the same.\nEthan: You should. It really makes a difference.",
    "options": {
      "A": "The lift in our building is often broken.",
      "B": "It's an easy way to get some exercise every day.",
      "C": "I'm afraid of getting stuck in small spaces.",
      "D": "The stairs are usually quicker at busy times.",
      "E": "My office is only on the second floor."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'That's a good habit ... I should do the same'",
    "trapWarning": "A, C, D ve E de merdiven kullanma nedenleridir ama Grace'in 'iyi bir alışkanlık, ben de yapmalıyım' tepkisi egzersiz nedeniyle bağlanır.",
    "explanation": "Grace bunu 'iyi bir alışkanlık' olarak görüp kendisi de yapmak ister; Ethan sağlık/egzersiz nedenini söylemiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_038",
    "type": "dialogue",
    "question": "Economist: Inflation has fallen for the third month in a row.\nPresenter: _____\nEconomist: Not necessarily. Many prices are still much higher than they were two years ago.\nPresenter: So people may not feel any relief yet.",
    "options": {
      "A": "Does that mean the cost of living is going down?",
      "B": "What has caused inflation to fall so quickly?",
      "C": "Will the central bank cut interest rates now?",
      "D": "Is inflation falling in other countries as well?",
      "E": "How long do you expect this trend to continue?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Not necessarily' + fiyatların hâlâ yüksek olması",
    "trapWarning": "C şıkkı de evet/hayır sorusudur ama ekonomistin fiyatlarla ilgili cevabı yaşam maliyeti sorusuna bağlanır.",
    "explanation": "Ekonomist 'Mutlaka değil, fiyatlar hâlâ yüksek' der; sunucu yaşam maliyetinin düşüp düşmediğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_039",
    "type": "dialogue",
    "question": "Mike: I can't decide whether to buy a house or keep renting.\nJulia: _____\nMike: True. With interest rates this high, the monthly payments would be enormous.\nJulia: Then waiting a year or two might be wise.",
    "options": {
      "A": "Buying is always better in the long run.",
      "B": "It might be better to wait until interest rates fall.",
      "C": "You should ask your parents for some advice.",
      "D": "Have you looked at any houses in the city centre?",
      "E": "Renting gives you more freedom to move around."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'True. With interest rates this high ...'",
    "trapWarning": "E şıkkı de makul bir argümandır ama Mike'ın faiz oranlarıyla ilgili cevabına bağlanmaz; A ise Mike'ın tepkisiyle çelişir.",
    "explanation": "Mike 'Doğru, faizler bu kadar yüksekken...' der; Julia faizlerin düşmesini beklemeyi önermiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_040",
    "type": "dialogue",
    "question": "Student: Why do we have to learn about history? It's all in the past.\nTeacher: _____\nStudent: So knowing what happened before can help us make better decisions now?\nTeacher: Exactly.",
    "options": {
      "A": "Because it will be on the final exam next month.",
      "B": "Because understanding past mistakes helps us avoid repeating them.",
      "C": "History is one of the oldest subjects taught in schools around the world.",
      "D": "Many famous leaders studied history at university before entering politics.",
      "E": "You'll find it more interesting as you get older."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Öğrencinin özeti: 'help us make better decisions now'",
    "trapWarning": "A, C, D ve E de cevap olabilir ama öğrencinin 'daha iyi kararlar' özetine bağlanmaz.",
    "explanation": "Öğrenci 'Yani geçmişi bilmek daha iyi kararlar vermemize yardım eder mi?' diye özetler; öğretmen geçmiş hatalardan ders almaktan söz etmiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_041",
    "type": "dialogue",
    "question": "Zoe: Did you watch the documentary about plastic in the oceans last night?\nAdam: _____\nZoe: You should. It made me realise how much plastic I use every day.\nAdam: I'll watch it this weekend.",
    "options": {
      "A": "Yes, it was shocking, wasn't it?",
      "B": "No, I missed it, unfortunately.",
      "C": "I've seen several films on that topic.",
      "D": "Which channel was it on?",
      "E": "I don't really like documentaries."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'You should' → izlememiş",
    "trapWarning": "A şıkkı izlediğini söyler, 'You should' ile çelişir; C, D ve E belirsizdir; E şıkkı ayrıca Adam'ın son cümlesiyle çelişir.",
    "explanation": "Zoe 'İzlemelisin' der; Adam izlemediğini söylemiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_042",
    "type": "dialogue",
    "question": "Architect: We've designed the new school so that every classroom gets natural light.\nParent: _____\nArchitect: Yes, studies show students concentrate better and feel less tired.\nParent: That's good to hear.",
    "options": {
      "A": "Will that make the building more expensive to heat?",
      "B": "Does that really help children learn?",
      "C": "How many classrooms will the school have?",
      "D": "When will the building work be finished?",
      "E": "Will the school have a library as well?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Yes, studies show students concentrate better'",
    "trapWarning": "A şıkkı da evet/hayır sorusudur ama mimarın cevabı öğrenme üzerindeki etkiyi anlatır.",
    "explanation": "Mimar 'Evet, çalışmalar öğrencilerin daha iyi odaklandığını gösteriyor' der; veli bunun öğrenmeye gerçekten yardım edip etmediğini sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_043",
    "type": "dialogue",
    "question": "Tina: I heard you're learning to play the violin.\nGeorge: Yes, but it's much harder than I expected.\nTina: _____\nGeorge: Thanks. I'll keep practising, then.",
    "options": {
      "A": "Then maybe you should try an easier instrument.",
      "B": "Don't worry. Everyone finds it difficult at first.",
      "C": "How much did you pay for your violin, if you don't mind me asking?",
      "D": "My brother gave up the violin after only one year of lessons.",
      "E": "Who is your teacher? Is it the same one my sister had?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Thanks. I'll keep practising'",
    "trapWarning": "A ve D vazgeçmeyi ima eder, 'devam edeceğim' tepkisiyle çelişir; C ve E teşekkür gerektirmez.",
    "explanation": "George teşekkür edip devam edeceğini söyler; Tina cesaret verici bir şey söylemiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_044",
    "type": "dialogue",
    "question": "Investor: Your company has grown fast, but it still isn't making a profit.\nFounder: _____\nInvestor: I understand, but how long do you expect that to take?\nFounder: About two more years, according to our plan.",
    "options": {
      "A": "We're spending heavily now to win more customers.",
      "B": "We've been very profitable since our first year.",
      "C": "Our main competitor has just gone out of business.",
      "D": "We plan to sell the company within six months.",
      "E": "Most of our staff work from home to save costs."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'I understand, but how long ...?' → bir strateji açıklaması",
    "trapWarning": "B şıkkı yatırımcının sözüyle çelişir; C, D ve E 'bu ne kadar sürer?' sorusuna zemin hazırlamaz.",
    "explanation": "Yatırımcı 'Anlıyorum ama ne kadar sürer?' diye sorar; kurucu şimdi müşteri kazanmak için harcadıklarını söylemiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_045",
    "type": "dialogue",
    "question": "Ivy: I'm thinking of taking a year off before university.\nMother: _____\nIvy: I'd like to volunteer abroad and maybe learn Spanish.\nMother: That sounds like a useful experience.",
    "options": {
      "A": "Won't you forget everything you learned at school?",
      "B": "What would you do during that year?",
      "C": "Have you told your teachers about this?",
      "D": "How would you pay for your living costs?",
      "E": "Which university have you applied to?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Cevap planları anlatır → 'ne yapacaksın' sorusu",
    "trapWarning": "A, C, D ve E de makul sorulardır ama Ivy'nin cevabı o yıl boyunca yapacaklarını anlatır.",
    "explanation": "Ivy gönüllülük ve İspanyolca öğrenme planlarını anlatır; annesi o yıl ne yapacağını sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_046",
    "type": "dialogue",
    "question": "Driver: _____\nMechanic: It's the brakes. The pads are completely worn out.\nDriver: Can you replace them today?\nMechanic: Yes, it'll be ready by five.",
    "options": {
      "A": "How much will the repair cost me?",
      "B": "What's causing that strange noise?",
      "C": "When was the car last serviced?",
      "D": "Do you sell new tyres as well?",
      "E": "Is it safe to drive the car home?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Cevap sorunun nedenini söyler",
    "trapWarning": "A, C, D ve E de makul sorulardır ama 'It's the brakes' cevabı sorunun ne olduğunu soran bir soruya uyar.",
    "explanation": "Tamirci 'Frenler' diyerek nedeni açıklar; sürücü garip sesin nedenini sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_047",
    "type": "dialogue",
    "question": "Lily: Why did the museum remove that famous painting from the main hall?\nCurator: _____\nLily: So it's not gone for good?\nCurator: No, it'll be back in about six months.",
    "options": {
      "A": "It has been sold to a private collector.",
      "B": "It's being cleaned and restored at the moment.",
      "C": "Many visitors complained that it was offensive.",
      "D": "We discovered that it was actually a copy.",
      "E": "It was stolen during the night last week."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'So it's not gone for good?' → geçici bir neden",
    "trapWarning": "A, C, D ve E kalıcı bir kaybı ima eder; küratörün 'altı ay sonra geri gelecek' cevabıyla çelişir.",
    "explanation": "Tablo altı ay sonra geri dönecekse geçici olarak kaldırılmıştır: temizlenip restore ediliyor (B şıkkı)."
  },
  {
    "id": "bank_dl_048",
    "type": "dialogue",
    "question": "Coach: You played well today, but you need to work on your passing.\nPlayer: _____\nCoach: Practise with the younger players after training. It'll improve your accuracy.\nPlayer: I'll start tomorrow.",
    "options": {
      "A": "Do you think I'll be in the team next week?",
      "B": "What do you suggest I do?",
      "C": "Why didn't you let me play the whole match?",
      "D": "Was my shooting better than last time?",
      "E": "Who was the best player on the field today?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Cevap bir öneri içerir",
    "trapWarning": "A, C, D ve E koçun 'antrenmandan sonra pratik yap' önerisiyle bağlanmaz.",
    "explanation": "Koç bir öneri verir; oyuncu ne yapmasını önerdiğini sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_049",
    "type": "dialogue",
    "question": "Hugo: I think tourism is ruining this beautiful island.\nIris: _____\nHugo: That's true, but the hotels are destroying the coastline and the coral reefs.\nIris: Maybe there should be stricter rules.",
    "options": {
      "A": "I agree; there are far too many visitors now.",
      "B": "But it also brings jobs and money to local people.",
      "C": "Why didn't you let me play the whole match today?",
      "D": "Which hotel are you staying in?",
      "E": "Who was the best player on the field today, in your opinion?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'That's true, but ...' → karşı argüman",
    "trapWarning": "A şıkkı Hugo'ya katılır, 'but' gerektirmez; C, D ve E argüman sunmaz.",
    "explanation": "Hugo 'Doğru ama otel...' der; Iris turizmin faydasından söz etmiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_050",
    "type": "dialogue",
    "question": "Scientist: We've discovered a new species of frog in the rainforest.\nJournalist: _____\nScientist: Yes, its skin produces a chemical that could be used to make new painkillers.\nJournalist: That's remarkable.",
    "options": {
      "A": "How many frogs did you find altogether?",
      "B": "Is there anything special about it?",
      "C": "Why do frogs live in the rainforest?",
      "D": "Where exactly did you find it?",
      "E": "Is the frog dangerous to humans?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Yes, its skin produces ...' → özel bir özellik",
    "trapWarning": "E şıkkı de evet/hayır sorusudur ama cevap tehlikeden değil faydalı bir özellikten bahseder.",
    "explanation": "Bilim insanı kurbağanın derisindeki özel kimyasaldan bahseder; gazeteci kurbağanın özel bir yanı olup olmadığını sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_051",
    "type": "dialogue",
    "question": "Noah: The city wants to ban cars from the old town on weekends.\nEva: _____\nNoah: The council says shops in other cities actually made more money after similar bans.\nEva: Well, if that's true, it could work here too.",
    "options": {
      "A": "Won't local shops lose a lot of customers?",
      "B": "Will there be enough parking outside the old town?",
      "C": "When is the ban supposed to start?",
      "D": "Do you drive into the old town very often?",
      "E": "Isn't the air in the old town already clean?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Cevap dükkanların gelirine dair kanıt sunar",
    "trapWarning": "B ve C de makul sorulardır ama Noah'ın cevabı dükkan gelirleriyle ilgilidir.",
    "explanation": "Noah başka şehirlerde dükkanların daha çok kazandığını söyler; Eva dükkanların müşteri kaybedeceğinden endişe etmiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_052",
    "type": "dialogue",
    "question": "Teacher: Many of you made the same mistake in question five.\nStudent: _____\nTeacher: You used the past simple instead of the present perfect.\nStudent: Oh, I see. 'For ten years' needs the present perfect.",
    "options": {
      "A": "Can we take the test again next week?",
      "B": "What was the mistake exactly?",
      "C": "Will the mistake affect our final grade?",
      "D": "Was question five worth many points?",
      "E": "Did anyone get it right?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Öğretmen hatanın ne olduğunu açıklar",
    "trapWarning": "C ve E de makul sorulardır ama öğretmenin cevabı hatanın içeriğini açıklar.",
    "explanation": "Öğretmen hatanın ne olduğunu söyler; öğrenci hatanın tam olarak ne olduğunu sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_053",
    "type": "dialogue",
    "question": "Ahmet: Did you know that octopuses can solve puzzles and open jars?\nSelin: _____\nAhmet: Yes, scientists now think they're among the most intelligent invertebrates.\nSelin: I'll never look at them the same way again.",
    "options": {
      "A": "Really? I thought they were quite simple animals.",
      "B": "How long do octopuses usually live in the wild?",
      "C": "Do they live in all the world's oceans?",
      "D": "My uncle caught an octopus while fishing once.",
      "E": "Are octopuses dangerous to swimmers?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Yes, scientists now think ...' → şaşkınlık/inanmama",
    "trapWarning": "E şıkkı de evet/hayır sorusudur ama Ahmet'in cevabı zekayla ilgilidir; B, C ve D bağlanmaz.",
    "explanation": "Ahmet 'Evet, bilim insanları onları en zeki omurgasızlardan sayıyor' der; Selin onları basit hayvanlar sandığını söylemiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_054",
    "type": "dialogue",
    "question": "Manager: I'd like you to lead the new project in Germany.\nEmployee: _____\nManager: Don't worry, you'll have a translator for the first few months.\nEmployee: In that case, I'd be happy to accept.",
    "options": {
      "A": "How long would the project last?",
      "B": "But I don't speak any German.",
      "C": "Would I have to move there permanently?",
      "D": "Who else will be in the team?",
      "E": "Is there a salary increase involved?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Don't worry ... translator' → dil endişesi",
    "trapWarning": "A, C, D ve E de makul sorulardır ama müdürün 'çevirmenin olacak' cevabı dil sorununa bağlanır.",
    "explanation": "Müdür çevirmen olacağını söyleyerek rahatlatır; çalışan Almanca bilmediğini söylemiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_055",
    "type": "dialogue",
    "question": "Lisa: Our town's population has fallen by a third in the last twenty years.\nMarco: _____\nLisa: Mainly because the mines closed and there were no other jobs.\nMarco: That's happened in many towns in the region.",
    "options": {
      "A": "Why have so many people left?",
      "B": "Where did most people move to?",
      "C": "How many people live there now?",
      "D": "Is the town still worth visiting?",
      "E": "Do you still have family there?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Mainly because ...' → neden sorusu",
    "trapWarning": "B ve C de makul sorulardır ama Lisa'nın 'Mainly because' cevabı bir 'neden' sorusuna verilir.",
    "explanation": "Lisa nedeni açıklar; Marco bu kadar çok kişinin neden ayrıldığını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_056",
    "type": "dialogue",
    "question": "Researcher: Our study found that people who volunteer regularly live longer.\nHost: _____\nResearcher: Probably the sense of purpose and social contact it gives them.\nHost: That's an encouraging finding.",
    "options": {
      "A": "How many people took part in your study?",
      "B": "What do you think explains this effect?",
      "C": "Do most people volunteer in their free time?",
      "D": "Is volunteering common in other countries too?",
      "E": "How long did the study take to complete?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'Probably ...' bir açıklama/tahmin",
    "trapWarning": "A, C, D ve E de makul sorulardır ama araştırmacının cevabı etkinin nedenini açıklar.",
    "explanation": "Araştırmacı muhtemel nedeni açıklar; sunucu bu etkiyi neyin açıkladığını sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_057",
    "type": "dialogue",
    "question": "Felix: I've been offered a promotion, but it means working longer hours.\nAnna: _____\nFelix: That's the problem. I'd hardly see my children during the week.\nAnna: Then maybe it isn't worth it.",
    "options": {
      "A": "Congratulations! You must be very proud.",
      "B": "How would that affect your family life?",
      "C": "Is the salary much higher?",
      "D": "When would you start the new position?",
      "E": "Have you accepted it yet?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'That's the problem' + aile hayatı",
    "trapWarning": "C şıkkı de önemli bir sorudur ama Felix'in cevabı çocuklarıyla ilgilidir.",
    "explanation": "Felix çocuklarını göremeyeceğini söyler; Anna aile hayatına etkisini sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_058",
    "type": "dialogue",
    "question": "Visitor: _____\nGuard: I'm afraid not. Flash can damage the colours of old paintings.\nVisitor: Can I take photos without the flash, then?\nGuard: Yes, that's fine.",
    "options": {
      "A": "Can I take photos with flash in this gallery?",
      "B": "Where can I buy a guide to the museum?",
      "C": "How old are the paintings in this room?",
      "D": "Is the museum open late on Fridays?",
      "E": "Are these paintings originals or copies?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'I'm afraid not ... Flash' → flaş izni sorusu",
    "trapWarning": "B, C, D ve E görevlinin flaşla ilgili cevabına bağlanmaz.",
    "explanation": "Görevli 'Maalesef hayır, flaş eski tablolara zarar verebilir' der; ziyaretçi flaşla fotoğraf çekip çekemeyeceğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_059",
    "type": "dialogue",
    "question": "Kim: I don't think online friendships are real friendships.\nLeo: _____\nKim: But you've never actually met them in person.\nLeo: That doesn't mean we aren't close.",
    "options": {
      "A": "You're probably right about that.",
      "B": "Some of my best friends are people I met online.",
      "C": "Most people use the internet for many hours every day now.",
      "D": "Do you use social media very often in your free time?",
      "E": "Online games can be very addictive for young people."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'But you've never actually met them' → Leo'nun online arkadaşları",
    "trapWarning": "A şıkkı Kim'e katılır; C, D ve E 'onlarla hiç yüz yüze tanışmadın' itirazına zemin hazırlamaz.",
    "explanation": "Kim 'Ama onlarla hiç yüz yüze tanışmadın' der; Leo en iyi arkadaşlarından bazılarını internette tanıdığını söylemiş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_060",
    "type": "dialogue",
    "question": "Farmer: This year's harvest was the worst in a decade.\nReporter: _____\nFarmer: There was almost no rain from May to August.\nReporter: Many farmers in the region are saying the same.",
    "options": {
      "A": "What went wrong this year?",
      "B": "How much land do you farm?",
      "C": "What do you mainly grow here?",
      "D": "Will food prices go up as a result?",
      "E": "How long has your family farmed here?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Cevap kötü hasadın nedenini verir",
    "trapWarning": "D şıkkı de makul bir sorudur ama çiftçinin 'yağmur yağmadı' cevabı neyin ters gittiğine dairdir.",
    "explanation": "Çiftçi kuraklığı anlatır; muhabir bu yıl neyin ters gittiğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_061",
    "type": "dialogue",
    "question": "Sara: I've decided to stop using social media for a month.\nTim: _____\nSara: I've noticed it makes me anxious and wastes a lot of my time.\nTim: I might try that myself.",
    "options": {
      "A": "What made you decide to do that?",
      "B": "Do you think you can really manage it?",
      "C": "Which apps will you delete?",
      "D": "Will you tell your friends about it?",
      "E": "How will people contact you?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Cevap kararın nedenini verir",
    "trapWarning": "B, C, D ve E de makul sorulardır ama Sara'nın cevabı kararın nedenini açıklar.",
    "explanation": "Sara nedenini açıklar (kaygı ve zaman kaybı); Tim kararın nedenini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_062",
    "type": "dialogue",
    "question": "Dentist: You have a small cavity in one of your back teeth.\nPatient: _____\nDentist: No, it's quite simple. It'll take about twenty minutes.\nPatient: That's a relief.",
    "options": {
      "A": "Will I need a long and painful treatment?",
      "B": "How did I get a cavity if I brush every day?",
      "C": "Should I stop eating sweets completely?",
      "D": "Do I need to come back for a check-up?",
      "E": "Could it affect my other teeth?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'No, it's quite simple. Twenty minutes'",
    "trapWarning": "E şıkkı de evet/hayır sorusudur ama 'çok basit, yirmi dakika' cevabı tedavinin süresi ve zorluğuyla ilgilidir.",
    "explanation": "Diş hekimi 'Hayır, oldukça basit, yirmi dakika sürer' der; hasta uzun ve acılı bir tedavi gerekip gerekmediğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_063",
    "type": "dialogue",
    "question": "Daniel: I read that some companies are testing a four-day working week.\nMaya: _____\nDaniel: Surprisingly, no. In most cases, productivity actually went up.\nMaya: Then more companies should try it.",
    "options": {
      "A": "Didn't their productivity fall as a result?",
      "B": "Did the employees get paid less for it?",
      "C": "Which countries are the companies in?",
      "D": "Would you like to work only four days?",
      "E": "How long have they been testing it?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Surprisingly, no ... productivity went up'",
    "trapWarning": "B şıkkı de 'no' ile cevaplanabilir ama Daniel'in cevabı verimlilikle ilgilidir.",
    "explanation": "Daniel 'Şaşırtıcı biçimde hayır, verimlilik arttı' der; Maya verimliliğin düşüp düşmediğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_064",
    "type": "dialogue",
    "question": "Ruth: I'm nervous about giving a speech at my sister's wedding.\nPaul: _____\nRuth: That's a good idea. I'll practise in front of my family this weekend.\nPaul: You'll be fine.",
    "options": {
      "A": "Why don't you rehearse it a few times first?",
      "B": "How long does the speech have to be, do you know?",
      "C": "Are there going to be many guests?",
      "D": "When exactly is the wedding taking place this year?",
      "E": "Have you written the speech already?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'That's a good idea. I'll practise'",
    "trapWarning": "B, C, D ve E de makul sorulardır ama Ruth'un 'iyi fikir, prova yapacağım' cevabı bir öneriye verilir.",
    "explanation": "Ruth 'İyi fikir, pratik yapacağım' der; Paul prova yapmasını önermiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_065",
    "type": "dialogue",
    "question": "Professor: The ancient city was abandoned around 900 AD.\nStudent: _____\nProfessor: We're not completely sure, but a long drought seems the most likely cause.\nStudent: So the climate may have played a major role.",
    "options": {
      "A": "Why did people leave the city?",
      "B": "Where did people go after that?",
      "C": "How large was the city at its peak?",
      "D": "When was the city first discovered?",
      "E": "Who built the city originally?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'... seems the most likely cause'",
    "trapWarning": "B ve C de makul sorulardır ama profesörün cevabı bir neden önerir.",
    "explanation": "Profesör en olası nedeni (kuraklık) açıklar; öğrenci insanların şehri neden terk ettiğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_066",
    "type": "dialogue",
    "question": "Lucas: I'm thinking of studying medicine.\nMother: _____\nLucas: I know it's a long course, but I've always wanted to help people.\nMother: Then you should go for it.",
    "options": {
      "A": "It takes many years of hard work, you know.",
      "B": "Your grandfather was a doctor too.",
      "C": "Which university would you like to go to?",
      "D": "Doctors earn very good salaries.",
      "E": "Have you talked to your teachers about it?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'I know it's a long course, but ...'",
    "trapWarning": "B, C, D ve E Lucas'ın 'uzun bir eğitim olduğunu biliyorum' cevabına zemin hazırlamaz.",
    "explanation": "Lucas 'Uzun bir eğitim olduğunu biliyorum ama...' der; annesi bunun yıllar süren zorlu bir çalışma olduğunu hatırlatmış olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_067",
    "type": "dialogue",
    "question": "Waiter: I'm sorry, the fish is finished for today.\nCustomer: _____\nWaiter: I'd suggest the chicken. It's very popular.\nCustomer: All right, I'll have that.",
    "options": {
      "A": "What would you recommend instead?",
      "B": "When will you have fish again?",
      "C": "Is the fish usually fresh here?",
      "D": "Can I see the dessert menu?",
      "E": "How long will the chicken take?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'I'd suggest ...' → öneri sorusu",
    "trapWarning": "B, C, D ve E garsonun önerisine zemin hazırlamaz.",
    "explanation": "Garson tavuk önerir; müşteri yerine ne önerdiğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_068",
    "type": "dialogue",
    "question": "Ela: The government says the new motorway will reduce traffic jams.\nMax: _____\nEla: Why do you say that?\nMax: Because history shows that new roads usually just attract more cars.",
    "options": {
      "A": "I'm not convinced it will.",
      "B": "I'm sure they're right about that.",
      "C": "When will it be completed?",
      "D": "Will drivers have to pay a toll?",
      "E": "How much will it cost?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Why do you say that?' + karşı gerekçe",
    "trapWarning": "B şıkkı Max'in gerekçesiyle çelişir; C, D ve E 'neden öyle diyorsun' sorusuna zemin hazırlamaz.",
    "explanation": "Max yeni yolların daha çok araç çektiğini söyler; önce şüphesini dile getirmiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_069",
    "type": "dialogue",
    "question": "Patient: I've been having trouble sleeping lately.\nDoctor: _____\nPatient: Yes, quite a lot. I usually have four or five cups a day.\nDoctor: Try cutting down, especially in the afternoon.",
    "options": {
      "A": "Do you drink much coffee?",
      "B": "How many hours do you sleep?",
      "C": "Do you exercise regularly?",
      "D": "Is anything worrying you?",
      "E": "When did the problem start?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'four or five cups a day' → kahve",
    "trapWarning": "B, C, D ve E de uykusuzluk için makul sorulardır ama 'günde dört beş fincan' cevabı yalnızca kahve sorusuna uyar.",
    "explanation": "Hasta 'günde dört beş fincan' der; doktor kahve içip içmediğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_070",
    "type": "dialogue",
    "question": "Clara: _____\nJoe: Because it's much cheaper and I can read on the train.\nClara: That makes sense. Driving in the city is so stressful anyway.\nJoe: Exactly.",
    "options": {
      "A": "Why do you take the train to work instead of driving?",
      "B": "How long does it usually take you to get to work in the morning?",
      "C": "Do you enjoy reading on the train on your way to the office?",
      "D": "Which train do you usually catch when you go to work?",
      "E": "Have you ever tried driving to work instead of taking the train?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Because ...' → neden sorusu",
    "trapWarning": "B, C, D ve E Joe'nun 'Çünkü...' cevabıyla bağlanmaz.",
    "explanation": "Joe 'Çünkü daha ucuz ve trende okuyabiliyorum' der; Clara neden araba yerine trenle gittiğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_071",
    "type": "dialogue",
    "question": "Politician: We plan to plant one million trees in the city over the next ten years.\nCitizen: _____\nPolitician: Most of them will go along roads and in new parks on the edge of the city.\nCitizen: That should make a big difference.",
    "options": {
      "A": "Where will you find space for all of them?",
      "B": "How much will the project cost?",
      "C": "Who will look after the trees?",
      "D": "Why do you think planting trees in the city is so important?",
      "E": "Which types of trees are you planning to plant?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Cevap yeri belirtir",
    "trapWarning": "B, C, D ve E de makul sorulardır ama politikacının cevabı ağaçların nereye dikileceğini anlatır.",
    "explanation": "Politikacı ağaçların yerini açıklar; vatandaş bunlar için nerede yer bulunacağını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_072",
    "type": "dialogue",
    "question": "Amelia: I've been learning Turkish for a year, but I still find it hard to speak.\nKerem: _____\nAmelia: That's true. I mostly study grammar from books.\nKerem: Then try to find a conversation partner.",
    "options": {
      "A": "Maybe you need more practice with real people.",
      "B": "Turkish grammar is very logical, actually.",
      "C": "You speak much better than you think.",
      "D": "How many hours a week do you spend studying?",
      "E": "Why did you decide to start learning Turkish?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'That's true. I mostly study from books'",
    "trapWarning": "C şıkkı de cesaret verici bir cevaptır ama 'That's true' ile kitaptan çalışma itirafına bağlanmaz.",
    "explanation": "Amelia 'Doğru, çoğunlukla kitaplardan gramer çalışıyorum' der; Kerem gerçek insanlarla pratik yapması gerektiğini söylemiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_073",
    "type": "dialogue",
    "question": "Reporter: How did you feel when you won the award?\nWriter: _____\nReporter: Why were you so surprised?\nWriter: Because the other books on the list were so much better known.",
    "options": {
      "A": "Honestly, I couldn't believe it at first.",
      "B": "I was happy, as I had expected to win.",
      "C": "I dedicated it to my family and friends.",
      "D": "The ceremony was held in a beautiful hall.",
      "E": "It was the third award I have won."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Why were you so surprised?'",
    "trapWarning": "B şıkkı şaşırmamayı söyler; C, D ve E şaşkınlık ifade etmez.",
    "explanation": "Muhabir 'Neden bu kadar şaşırdınız?' der; yazar ilk başta inanamadığını söylemiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_074",
    "type": "dialogue",
    "question": "Liam: I'm thinking of adopting a dog.\nSophie: _____\nLiam: Not really. I work from home most days, so it won't be alone much.\nSophie: Then it sounds like a good idea.",
    "options": {
      "A": "Won't it be difficult with your work schedule?",
      "B": "What kind of dog would you like to have, do you think?",
      "C": "Have you ever had a pet before?",
      "D": "Dogs are much friendlier than cats, in my opinion.",
      "E": "Where would you adopt it from? A local shelter?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Not really ... it won't be alone much'",
    "trapWarning": "C şıkkı de evet/hayır sorusudur ama Liam'ın cevabı iş programıyla ilgilidir.",
    "explanation": "Liam 'Pek değil, evden çalışıyorum' der; Sophie iş programı nedeniyle zor olup olmayacağını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_075",
    "type": "dialogue",
    "question": "Student A: Did you understand today's lecture on quantum physics?\nStudent B: _____\nStudent A: Me neither. Shall we ask the professor to explain it again?\nStudent B: Good idea.",
    "options": {
      "A": "Not really. It was far too complicated for me.",
      "B": "Yes, it was much easier than I expected.",
      "C": "I missed it because I was ill and stayed at home.",
      "D": "The professor explained everything very clearly, I thought.",
      "E": "I've read a lot about quantum physics on my own."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Me neither' olumsuz bir ifadeye cevaptır",
    "trapWarning": "B, D ve E anladığını ima eder; C şıkkı ise derse girmediğini söyler, 'Me neither' anlamsız olur.",
    "explanation": "A öğrencisi 'Ben de anlamadım' der; B öğrencisi anlamadığını söylemiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_076",
    "type": "dialogue",
    "question": "Martin: I've heard that the old cinema in town is going to be turned into a shopping centre.\nAlice: _____\nMartin: I know, but nobody has been going there for years. It's been losing money.\nAlice: That's sad, but I suppose it was inevitable.",
    "options": {
      "A": "Oh no, that cinema has been part of the town for a century.",
      "B": "Great! We really need more shops in the town centre.",
      "C": "When will the shopping centre open to the public?",
      "D": "Who bought the building from the previous owners?",
      "E": "Do you know which shops will be moving in there?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'I know, but ...' → üzüntüye karşı gerekçe",
    "trapWarning": "B şıkkı sevinç bildirir, 'I know, but' ile karşılık verilmez; C, D ve E bilgi sorar.",
    "explanation": "Martin 'Biliyorum ama yıllardır kimse gitmiyordu' der; Alice sinemanın kapanmasına üzüldüğünü belirtmiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_077",
    "type": "dialogue",
    "question": "Officer: I'm afraid your visa application has been rejected.\nApplicant: _____\nOfficer: You didn't include proof that you have enough money for your stay.\nApplicant: I can bring my bank statements tomorrow.",
    "options": {
      "A": "Can I apply again next month instead?",
      "B": "Could you tell me the reason, please?",
      "C": "How long does the process usually take?",
      "D": "Is there anyone else I can speak to?",
      "E": "Will I get my application fee back?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Görevli reddin nedenini açıklar",
    "trapWarning": "A, C, D ve E de makul tepkilerdir ama görevlinin cevabı reddin nedenini verir.",
    "explanation": "Görevli eksik belgeyi açıklar; başvuran nedenini sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_078",
    "type": "dialogue",
    "question": "Grandmother: When I was young, we didn't have any of these gadgets.\nGrandson: _____\nGrandmother: We played outside, read books and talked to each other much more.\nGrandson: That sounds quite nice, actually.",
    "options": {
      "A": "Did you find life boring without them?",
      "B": "So what did you do in your free time?",
      "C": "When did you get your first television?",
      "D": "Would you like me to teach you to use a phone?",
      "E": "Weren't phones very expensive back then?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Cevap boş zaman etkinliklerini sayar",
    "trapWarning": "A şıkkı da yakın bir sorudur ama büyükannenin cevabı 'sıkıcı mıydı' sorusuna evet/hayır vermez, etkinlikleri sayar.",
    "explanation": "Büyükanne boş zamanlarında yaptıklarını anlatır; torun boş zamanlarında ne yaptıklarını sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_079",
    "type": "dialogue",
    "question": "Ian: I want to start running, but I always give up after a week.\nRosa: _____\nIan: That's a good idea. If someone is waiting for me, I'll have to go.\nRosa: Exactly. It makes it much harder to skip a session.",
    "options": {
      "A": "Have you tried running with a friend or a group?",
      "B": "Maybe you should buy a better pair of running shoes.",
      "C": "Running is very hard on your knees, you know.",
      "D": "Why don't you set yourself a goal, like a race?",
      "E": "How far do you usually run when you start?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'If someone is waiting for me' → biriyle koşmak",
    "trapWarning": "D şıkkı de motivasyon için iyi bir öneridir ama Ian'ın 'biri beni bekliyorsa' cevabıyla bağlanmaz.",
    "explanation": "Ian 'Biri beni bekliyorsa gitmek zorunda kalırım' der; Rosa bir arkadaşla ya da grupla koşmayı önermiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_080",
    "type": "dialogue",
    "question": "Expert: Many people believe that we only use ten percent of our brains.\nPresenter: _____\nExpert: No, brain scans show that we use almost all of it, just not all at the same time.\nPresenter: So it's a complete myth.",
    "options": {
      "A": "Which part of the brain do we use the most?",
      "B": "Is there any truth in that idea?",
      "C": "Where does this idea come from originally?",
      "D": "Can we train ourselves to use more of it?",
      "E": "Do other animals use more of their brains?"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'No, brain scans show ...' → doğruluk sorusu",
    "trapWarning": "D şıkkı de evet/hayır sorusudur ama uzmanın cevabı inancın doğruluğunu çürütür.",
    "explanation": "Uzman 'Hayır' deyip inancı çürütür ve sunucu 'Tamamen efsane' diye özetler; sunucu bunun doğru olup olmadığını sormuş olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_dl_081",
    "type": "dialogue",
    "question": "Jenny: Our team won the regional final last night!\nCarl: _____\nJenny: Yes, especially since we were losing at half-time.\nCarl: That makes the win even sweeter.",
    "options": {
      "A": "Congratulations! You must be thrilled.",
      "B": "Who was the best player on your team?",
      "C": "Was it an easy game for you in the end?",
      "D": "When is the next round of the competition?",
      "E": "How many people came to watch the match?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Yes, especially since ...' → sevinci onaylar",
    "trapWarning": "C şıkkı de evet/hayır sorusudur ama ilk yarıda geride olmak 'kolay maçtı' ile çelişir.",
    "explanation": "Jenny 'Evet, özellikle ilk yarıda geride olduğumuz için' der; Carl tebrik edip çok mutlu olması gerektiğini söylemiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_082",
    "type": "dialogue",
    "question": "Teacher: _____\nStudent: I'm sorry, my bus broke down on the way to school.\nTeacher: All right, but please try to leave home earlier next time.\nStudent: I will.",
    "options": {
      "A": "Why are you late again this morning?",
      "B": "Have you finished your homework for today?",
      "C": "Why didn't you come to school yesterday?",
      "D": "Could you open the window, please?",
      "E": "Did you enjoy the school trip last week?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Cevap gecikmenin nedenini verir",
    "trapWarning": "C şıkkı de bir 'neden' sorusudur ama 'otobüsüm yolda bozuldu' ve 'daha erken çık' tepkisi gecikmeyle ilgilidir.",
    "explanation": "Öğrenci otobüsün bozulduğunu söyler, öğretmen 'daha erken çık' der; öğretmen neden geç kaldığını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_083",
    "type": "dialogue",
    "question": "Hotel guest: The air conditioning in my room isn't working.\nReceptionist: _____\nGuest: Yes, I've tried everything, but it still won't turn on.\nReceptionist: I'll send someone up straight away.",
    "options": {
      "A": "Have you checked the remote control settings?",
      "B": "Would you like to change to a different room?",
      "C": "How long have you been staying with us?",
      "D": "Did you report this problem yesterday as well?",
      "E": "Is your room on the top floor of the hotel?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Yes, I've tried everything' → kontrol sorusu",
    "trapWarning": "B ve D de evet/hayır sorusudur ama 'her şeyi denedim' cevabı ancak bir deneme/kontrol sorusuna uyar.",
    "explanation": "Misafir 'Evet, her şeyi denedim' der; resepsiyonist kumanda ayarlarını kontrol edip etmediğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_084",
    "type": "dialogue",
    "question": "Activist: Fast fashion is one of the most polluting industries in the world.\nStudent: _____\nActivist: Buy fewer clothes, choose better quality, and repair what you have.\nStudent: That sounds easy enough to start with.",
    "options": {
      "A": "What can ordinary people do about it?",
      "B": "Which companies are the worst polluters?",
      "C": "How much water does it take to make a T-shirt?",
      "D": "Why are clothes so cheap these days?",
      "E": "Is the situation getting better or worse?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Cevap bireysel öneriler sunar",
    "trapWarning": "B, C, D ve E de makul sorulardır ama aktivistin cevabı bireylerin ne yapabileceğini anlatır.",
    "explanation": "Aktivist bireysel önerilerde bulunur; öğrenci sıradan insanların ne yapabileceğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_085",
    "type": "dialogue",
    "question": "Paula: _____\nDaniel: About three hours by car, if the traffic isn't bad.\nPaula: That's not too far. We could go for the weekend.\nDaniel: Good idea.",
    "options": {
      "A": "How far is the lake from here?",
      "B": "What's the best way to get to the lake?",
      "C": "Is the lake worth visiting in winter?",
      "D": "Have you ever been to the lake?",
      "E": "Can we swim in the lake?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'About three hours by car' → mesafe sorusu",
    "trapWarning": "B şıkkı de ulaşımla ilgilidir ama 'arabayla yaklaşık üç saat' cevabı mesafe sorusuna doğrudan uyar; Paula da 'çok uzak değil' der.",
    "explanation": "Daniel süreyi söyler, Paula 'Çok uzak değil' der; Paula gölün ne kadar uzakta olduğunu sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_086",
    "type": "dialogue",
    "question": "Nora: My doctor says I should cut down on sugar.\nVictor: _____\nNora: Mostly in soft drinks and biscuits. I have them every day.\nVictor: Then that's an easy place to start.",
    "options": {
      "A": "Where does most of the sugar in your diet come from?",
      "B": "Is it difficult to stop eating sugar completely?",
      "C": "Did your doctor give you any medicine for it?",
      "D": "How long have you had this problem with sugar?",
      "E": "Do you exercise much these days, or not really?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Mostly in soft drinks and biscuits'",
    "trapWarning": "B, C, D ve E de makul sorulardır ama Nora'nın cevabı şekerin kaynağını söyler.",
    "explanation": "Nora şekeri çoğunlukla nereden aldığını söyler; Victor şekerin kaynağını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_087",
    "type": "dialogue",
    "question": "Fiona: Why are bees so important to farmers?\nGeorge: _____\nFiona: I had no idea so many crops depended on them.\nGeorge: Without them, our diet would be much poorer.",
    "options": {
      "A": "Because they pollinate many of the fruits and vegetables we eat.",
      "B": "Because they produce honey that farmers can sell at markets.",
      "C": "Because they keep harmful insects away from the crops.",
      "D": "Because farmers can earn money by renting out their hives.",
      "E": "Because they help the soil hold more water."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'so many crops depended on them'",
    "trapWarning": "B ve D arıların ekonomik faydasından bahseder ama Fiona'nın 'bu kadar çok ürünün onlara bağlı olduğunu bilmiyordum' tepkisi tozlaşmaya bağlanır.",
    "explanation": "Fiona birçok ürünün arılara bağlı olduğunu öğrenir; George tozlaşmadan söz etmiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_088",
    "type": "dialogue",
    "question": "Customer: I'd like to return these shoes. They're too small.\nAssistant: _____\nCustomer: No, I'd rather have my money back, please.\nAssistant: Of course. Do you have the receipt?",
    "options": {
      "A": "Would you like to exchange them for a bigger size?",
      "B": "Have you worn them outside at all, even just once?",
      "C": "When exactly did you buy them from our shop?",
      "D": "Did you try them on in the shop before buying them?",
      "E": "Would you like a bag to carry them in?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'No, I'd rather have my money back' → değişim önerisi",
    "trapWarning": "B, D ve E de hayır ile cevaplanabilir ama 'parayı geri almayı tercih ederim' bir alternatif teklifine cevaptır.",
    "explanation": "Müşteri 'Hayır, paramı geri almayı tercih ederim' der; satıcı daha büyük bir numarayla değiştirmeyi önermiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_089",
    "type": "dialogue",
    "question": "Meteorologist: We expect heavy snow across the north of the country tomorrow.\nPresenter: _____\nMeteorologist: Yes, I'd advise people not to travel unless it's absolutely necessary.\nPresenter: Thank you for the warning.",
    "options": {
      "A": "Should people avoid driving?",
      "B": "How much snow is expected?",
      "C": "How long will the snow last?",
      "D": "Will it reach the capital as well?",
      "E": "Is this unusual for the time of year?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Yes, I'd advise people not to travel'",
    "trapWarning": "D ve E de evet/hayır sorusudur ama meteoroloğun tavsiyesi yolculukla ilgilidir.",
    "explanation": "Meteorolog 'Evet, zorunlu olmadıkça yolculuk yapmayın' der; sunucu insanların araç kullanmaktan kaçınması gerekip gerekmediğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_090",
    "type": "dialogue",
    "question": "Hassan: I've finally finished writing my first novel.\nLena: _____\nHassan: Not yet. I'm still looking for a publisher.\nLena: I'm sure someone will want it.",
    "options": {
      "A": "That's wonderful! Is it going to be published?",
      "B": "How long did it take you to write the whole thing?",
      "C": "What's the story about? Can you tell me a bit?",
      "D": "Is it based on your own life or completely invented?",
      "E": "Can I read it before anyone else does?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Not yet ... looking for a publisher'",
    "trapWarning": "D ve E de evet/hayır ile cevaplanabilir ama Hassan'ın cevabı yayıncıyla ilgilidir.",
    "explanation": "Hassan 'Henüz değil, yayıncı arıyorum' der; Lena kitabın yayımlanıp yayımlanmayacağını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_091",
    "type": "dialogue",
    "question": "Teresa: _____\nMichael: I'm afraid so. The train company has cancelled all services after eight.\nTeresa: Then we'll have to take a taxi home.\nMichael: Or we could stay at my cousin's flat nearby.",
    "options": {
      "A": "Have we missed the last train?",
      "B": "What time does the next train leave?",
      "C": "Is the train station far from here?",
      "D": "How much is a ticket to the city?",
      "E": "Why is the station so crowded?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'I'm afraid so' → olumsuz bir tahminin onayı",
    "trapWarning": "B, C, D ve E 'I'm afraid so' (maalesef evet) ile cevaplanamaz.",
    "explanation": "Michael 'Maalesef öyle' der ve seferlerin iptal edildiğini söyler; Teresa son treni kaçırıp kaçırmadıklarını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_092",
    "type": "dialogue",
    "question": "Writer: I always write my first drafts by hand.\nInterviewer: _____\nWriter: I find that I think more carefully when I write slowly.\nInterviewer: That's an interesting approach.",
    "options": {
      "A": "Why do you prefer that to using a computer?",
      "B": "How long does a first draft usually take you?",
      "C": "Do you ever show your drafts to anyone?",
      "D": "What kind of pen do you like to use?",
      "E": "Have you always written in this way?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Cevap bir tercih nedenini açıklar",
    "trapWarning": "E şıkkı de makul bir sorudur ama yazarın cevabı tercihinin nedenini açıklar.",
    "explanation": "Yazar yavaş yazınca daha dikkatli düşündüğünü söyler; röportajcı bunu bilgisayara neden tercih ettiğini sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_093",
    "type": "dialogue",
    "question": "Aunt: You look tired. Have you been working too hard?\nNiece: _____\nAunt: Then you should take a few days off after it's over.\nNiece: That's exactly what I'm planning to do.",
    "options": {
      "A": "Yes, I have a big project that ends next week.",
      "B": "No, I've been on holiday for the last two weeks.",
      "C": "I've just started a new job at a bank.",
      "D": "I haven't been sleeping well because of the noise.",
      "E": "My manager has been very supportive lately."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'after it's over' → bitecek bir iş",
    "trapWarning": "B şıkkı yorgunlukla çelişir; C, D ve E 'bittikten sonra' ifadesindeki 'it' göndergesini vermez.",
    "explanation": "Teyze 'Bittikten sonra birkaç gün izin al' der; yeğen haftaya bitecek büyük bir projeden söz etmiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_094",
    "type": "dialogue",
    "question": "Expert: Many species are moving to higher altitudes as the climate warms.\nStudent: _____\nExpert: They become trapped. Eventually there's nowhere higher left to go.\nStudent: That's worrying.",
    "options": {
      "A": "What happens when they reach the top of the mountain?",
      "B": "Which species are moving the fastest at the moment?",
      "C": "Is this happening on every continent, or only in some?",
      "D": "How do scientists track the movements of these species?",
      "E": "Are any species moving to lower altitudes?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'They become trapped ... nowhere higher'",
    "trapWarning": "B, C, D ve E de makul sorulardır ama uzmanın cevabı zirveye ulaşınca olanları anlatır.",
    "explanation": "Uzman türlerin sıkıştığını ve gidecek yer kalmadığını söyler; öğrenci zirveye ulaşınca ne olacağını sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_095",
    "type": "dialogue",
    "question": "Mark: _____\nJane: Not at all. Go ahead.\nMark: Thanks. It's getting really hot in here.\nJane: You're right. I hadn't noticed.",
    "options": {
      "A": "Do you mind if I open the window?",
      "B": "Would you like me to close the window?",
      "C": "Is it always this hot in the office?",
      "D": "Could you turn off the air conditioning?",
      "E": "Shall we have the meeting outside?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Not at all. Go ahead.' → 'Do you mind if ...?' sorusuna cevap",
    "trapWarning": "'Not at all' izin isteyen 'Do you mind if...?' sorusunun kalıp cevabıdır. B ve D sıcaklıkla çelişir; C ve E 'Go ahead' ile uyuşmaz.",
    "explanation": "'Not at all. Go ahead.' cevabı 'Do you mind if I ...?' izin sorusuna verilir (A şıkkı)."
  },
  {
    "id": "bank_dl_096",
    "type": "dialogue",
    "question": "Daughter: Why do leaves change colour in autumn?\nFather: _____\nDaughter: So the colours were there all along, just hidden?\nFather: That's right.",
    "options": {
      "A": "Because the green pigment breaks down and reveals other colours.",
      "B": "Because the cold weather paints them yellow and red.",
      "C": "Because the trees want to attract birds and insects.",
      "D": "Because the leaves absorb much more sunlight in autumn.",
      "E": "Because the autumn rain washes away the green colour."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Kızın özeti: 'the colours were there all along, just hidden'",
    "trapWarning": "B, C, D ve E 'renkler hep oradaydı, sadece gizliydi' özetiyle bağlanmaz.",
    "explanation": "Kız 'Yani renkler hep oradaydı, sadece gizliydi?' der; baba yeşil pigmentin bozulup diğer renkleri ortaya çıkardığını söylemiş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_097",
    "type": "dialogue",
    "question": "Peter: I've been offered two jobs, and I can't decide between them.\nSusan: _____\nPeter: One pays more, but the other is much closer to home.\nSusan: Then think about how much you'd spend on commuting.",
    "options": {
      "A": "What's the main difference between them?",
      "B": "Which company is more famous?",
      "C": "When do you have to give them an answer?",
      "D": "Have you asked your family for advice?",
      "E": "Do you like your current job?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Cevap iki iş arasındaki farkı anlatır",
    "trapWarning": "B, C, D ve E de makul sorulardır ama Peter'ın cevabı iki iş arasındaki farkı açıklar.",
    "explanation": "Peter işlerden birinin daha iyi ödediğini, diğerinin eve yakın olduğunu söyler; Susan aralarındaki temel farkı sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_098",
    "type": "dialogue",
    "question": "Reporter: The new vaccine has been approved for children.\nParent: _____\nReporter: According to the experts, they are rare and usually mild.\nParent: That's reassuring.",
    "options": {
      "A": "What about side effects?",
      "B": "How many doses will children need?",
      "C": "When will it be available in schools?",
      "D": "Is it free for all families?",
      "E": "How long did the trials last?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'they are rare and usually mild' → yan etki",
    "trapWarning": "B, C, D ve E de makul sorulardır ama 'nadir ve genelde hafif' ifadesi yan etkilere uyar.",
    "explanation": "Muhabir 'nadir ve genelde hafif' der; veli yan etkileri sormuş olmalıdır (A şıkkı)."
  },
  {
    "id": "bank_dl_099",
    "type": "dialogue",
    "question": "Emily: I can't believe you've never seen the sea!\nRaj: _____\nEmily: Then we must go to the coast together this summer.\nRaj: I'd love that.",
    "options": {
      "A": "Well, I grew up in a city far from the coast.",
      "B": "I've been to the sea many times, actually.",
      "C": "I don't really like swimming in cold water.",
      "D": "The sea is very polluted near my hometown.",
      "E": "I prefer the mountains to the beach."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'Then we must go ...' → hiç görmemiş olmasının nedeni",
    "trapWarning": "B şıkkı Emily'nin sözüyle çelişir; C, D ve E isteksizlik ima eder, Raj'ın 'I'd love that' tepkisiyle çelişir.",
    "explanation": "Raj kıyıdan uzak bir şehirde büyüdüğünü söyler; Emily de bu yaz birlikte sahile gitmeyi önerir (A şıkkı)."
  },
  {
    "id": "bank_dl_100",
    "type": "dialogue",
    "question": "Lawyer: You have the right to remain silent.\nClient: _____\nLawyer: No, it can't be used against you in court.\nClient: Then I'll wait until I've spoken to you in private.",
    "options": {
      "A": "Will my silence make me look guilty?",
      "B": "How long will the questioning take?",
      "C": "Can my family visit me today?",
      "D": "When will I see the judge?",
      "E": "Do I have to pay for your services?"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "'No, it can't be used against you'",
    "trapWarning": "B, C, D ve E de makul sorulardır ama avukatın cevabı susmanın aleyhte kullanılıp kullanılamayacağıyla ilgilidir.",
    "explanation": "Avukat 'Hayır, aleyhine kullanılamaz' der; müvekkil susmanın onu suçlu gösterip göstermeyeceğini sormuş olmalıdır (A şıkkı)."
  }
];

export const DIALOGUE_BANK: YdsQuestion[] = shuffleQuestionList(RAW_DIALOGUE_BANK);
