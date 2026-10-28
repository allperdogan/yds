// Generated question bank: restatement (100 questions).
import { YdsQuestion } from '../../types';
import { shuffleQuestionList } from '../../services/optionShuffle';

const RAW_RESTATEMENT_BANK: YdsQuestion[] = [
  {
    "id": "bank_rs_001",
    "type": "restatement",
    "question": "Given sentence: 'Had the alarm not gone off in time, the fire would have spread to the neighbouring buildings.'",
    "options": {
      "A": "The fire spread to the neighbouring buildings because the alarm went off too late.",
      "B": "Thanks to the alarm going off in time, the fire did not reach the nearby buildings.",
      "C": "Even though the alarm went off in time, the fire reached the neighbouring buildings.",
      "D": "If the alarm goes off in time, the fire will not spread to other buildings.",
      "E": "The alarm went off only after the fire had reached the neighbouring buildings."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Devrik Type 3 = gerçekte tersi oldu",
    "trapWarning": "A, C ve E yangının yayıldığını söyler; D şıkkı ise genel bir koşul cümlesine çevirir.",
    "explanation": "Had ... not gone off = alarm zamanında çaldı, bu yüzden yangın yayılmadı (B şıkkı)."
  },
  {
    "id": "bank_rs_002",
    "type": "restatement",
    "question": "Given sentence: 'The museum is so popular that visitors often have to queue for over an hour.'",
    "options": {
      "A": "Visitors rarely have to wait long because the museum is not very popular.",
      "B": "Because so many people want to visit the museum, the wait can exceed an hour.",
      "C": "The museum has become popular because visitors enjoy queuing outside.",
      "D": "Although the museum is popular, visitors seldom wait more than an hour.",
      "E": "Visitors who queue for over an hour find the museum less popular."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "so ... that = neden-sonuç",
    "trapWarning": "A ve D sonucu olumsuzlar; C ve E neden-sonuç ilişkisini tersine çevirir.",
    "explanation": "Müze o kadar popüler ki ziyaretçiler bir saatten fazla sıra bekliyor (B şıkkı)."
  },
  {
    "id": "bank_rs_003",
    "type": "restatement",
    "question": "Given sentence: 'Not until the late nineteenth century did doctors begin to wash their hands before surgery.'",
    "options": {
      "A": "Doctors stopped washing their hands before surgery in the late nineteenth century.",
      "B": "Doctors only started washing their hands before operations in the late 1800s.",
      "C": "By the late nineteenth century, doctors had washed their hands for centuries.",
      "D": "Doctors in the late nineteenth century refused to wash their hands before surgery.",
      "E": "Washing hands before surgery was common long before the nineteenth century."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Not until X = ancak X'te",
    "trapWarning": "A ve D eylemi olumsuzlar; C ve E ise zamanı geriye taşır.",
    "explanation": "Doktorlar ancak 19. yüzyılın sonlarında ameliyattan önce el yıkamaya başladı (B şıkkı)."
  },
  {
    "id": "bank_rs_004",
    "type": "restatement",
    "question": "Given sentence: 'Despite being one of the smallest countries in Europe, Luxembourg has one of the highest incomes per person.'",
    "options": {
      "A": "Luxembourg's very small size is the main reason why its income per person is so high.",
      "B": "Although it is very small, Luxembourg is among Europe's richest nations per person.",
      "C": "Luxembourg is one of the largest countries in Europe and also one of the richest per person.",
      "D": "Because it is one of the smallest countries in Europe, Luxembourg has a low income per person.",
      "E": "Luxembourg's income per person is high, but it is falling rapidly."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Despite = Although (zıtlık)",
    "trapWarning": "A şıkkı zıtlığı nedene çevirir; C şıkkı boyutu, D geliri tersine çevirir; E şıkkı metinde olmayan bilgi ekler.",
    "explanation": "Despite being small = Although it is small (B şıkkı)."
  },
  {
    "id": "bank_rs_005",
    "type": "restatement",
    "question": "Given sentence: 'The new drug is no more effective than the one currently in use.'",
    "options": {
      "A": "The new drug works much better than the existing one.",
      "B": "The new drug is less effective than any other drug available.",
      "C": "The drug currently in use works at least as well as the new one.",
      "D": "The new drug will soon replace the one currently in use.",
      "E": "Doctors no longer use the drug that was effective before."
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "no more ... than = ondan daha ... değil",
    "trapWarning": "A şıkkı tam tersidir; B şıkkı 'any other drug' ile aşırı genelleme yapar; D ve E metinde olmayan bilgi ekler.",
    "explanation": "Yeni ilaç mevcut ilaçtan daha etkili değil = mevcut ilaç en az yeni ilaç kadar iyi (C şıkkı)."
  },
  {
    "id": "bank_rs_006",
    "type": "restatement",
    "question": "Given sentence: 'Hardly had the meeting started when the fire alarm went off.'",
    "options": {
      "A": "The fire alarm went off just after the meeting had begun.",
      "B": "The meeting started only after the fire alarm had stopped.",
      "C": "The fire alarm went off a long time before the meeting.",
      "D": "The meeting was cancelled because the alarm was too loud.",
      "E": "The fire alarm rarely goes off during meetings."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Hardly ... when = -ir -mez",
    "trapWarning": "B ve C sırayı değiştirir; D şıkkı sonuç ekler; E şıkkı 'hardly' kelimesini 'rarely' anlamında yorumlayan bir tuzaktır.",
    "explanation": "Toplantı başlar başlamaz yangın alarmı çaldı (A şıkkı)."
  },
  {
    "id": "bank_rs_007",
    "type": "restatement",
    "question": "Given sentence: 'It is widely believed that regular exercise reduces the risk of heart disease.'",
    "options": {
      "A": "Many people think that exercising regularly lowers the chance of heart problems.",
      "B": "Scientists have proven that exercise completely prevents heart disease.",
      "C": "Regular exercise is believed to increase the risk of heart disease.",
      "D": "Few people believe that taking regular exercise has any real effect on heart disease.",
      "E": "People who suffer from heart disease are widely advised not to do any regular exercise."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "It is widely believed = Many people think",
    "trapWarning": "B şıkkı kesinliği artırır ('proven', 'completely'); C şıkkı yönü tersine çevirir; D şıkkı yaygınlığı olumsuzlar; E şıkkı konuyu değiştirir.",
    "explanation": "Yaygın olarak düşünülür ki düzenli egzersiz kalp hastalığı riskini azaltır (A şıkkı)."
  },
  {
    "id": "bank_rs_008",
    "type": "restatement",
    "question": "Given sentence: 'The project would have been completed on time if the funding had not been cut.'",
    "options": {
      "A": "The project was finished on time even though its funding was reduced.",
      "B": "The project was delayed because its funding was cut.",
      "C": "If the funding is cut, the project will not be completed on time.",
      "D": "The funding was cut because the project was behind schedule.",
      "E": "The project was completed on time thanks to additional funding."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Type 3 = gerçekte tersi",
    "trapWarning": "A ve E projenin zamanında bittiğini söyler; C şıkkı genel koşul cümlesine çevirir; D şıkkı sebep-sonucu tersine çevirir.",
    "explanation": "Fon kesilmeseydi proje zamanında biterdi = fon kesildi, proje gecikti (B şıkkı)."
  },
  {
    "id": "bank_rs_009",
    "type": "restatement",
    "question": "Given sentence: 'Only by reducing emissions dramatically can we prevent the worst effects of climate change.'",
    "options": {
      "A": "Reducing emissions is one of many ways to prevent climate change.",
      "B": "The worst effects of climate change can be avoided only through a sharp cut in emissions.",
      "C": "Even a dramatic cut in emissions will not prevent the worst effects of climate change.",
      "D": "The worst effects of climate change have already been prevented by lower emissions.",
      "E": "We should reduce emissions slowly in order to prevent the effects of climate change."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Only by ... can = ancak ... ile",
    "trapWarning": "A şıkkı 'only' anlamını kaybeder; C şıkkı sonucu olumsuzlar; D şıkkı zamanı değiştirir; E şıkkı 'dramatically' anlamını bozar.",
    "explanation": "İklim değişikliğinin en kötü etkileri ancak emisyonları çok büyük ölçüde azaltarak önlenebilir (B şıkkı)."
  },
  {
    "id": "bank_rs_010",
    "type": "restatement",
    "question": "Given sentence: 'The professor's lecture was too complicated for most students to follow.'",
    "options": {
      "A": "Most students found the professor's lecture easy to understand.",
      "B": "The lecture was so complex that most students could not follow it.",
      "C": "Most students followed the lecture carefully, although it was complicated.",
      "D": "The professor made the lecture complicated so that students would follow it.",
      "E": "Only a few students thought the lecture was too simple."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "too ... to = o kadar ... ki ... -emez",
    "trapWarning": "A ve C öğrencilerin anladığını söyler; D şıkkı amaç ekler; E şıkkı anlamı tersine çevirir.",
    "explanation": "Ders, öğrencilerin çoğunun takip edemeyeceği kadar karmaşıktı (B şıkkı)."
  },
  {
    "id": "bank_rs_011",
    "type": "restatement",
    "question": "Given sentence: 'Unless the company reduces its costs, it will go bankrupt within a year.'",
    "options": {
      "A": "The company will go bankrupt within a year even if it reduces its costs.",
      "B": "The company has gone bankrupt because it failed to reduce its costs.",
      "C": "If the company doesn't cut its costs, it will go out of business within a year.",
      "D": "The company reduced its costs last year and managed to avoid going bankrupt.",
      "E": "Reducing its costs over the next year would actually cause the company to go bankrupt."
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "Unless = If ... not",
    "trapWarning": "A şıkkı koşulun etkisini yok sayar; B ve D zamanı değiştirir; E şıkkı sebep-sonucu tersine çevirir.",
    "explanation": "Unless = If ... not: maliyetlerini azaltmazsa bir yıl içinde iflas eder (C şıkkı)."
  },
  {
    "id": "bank_rs_012",
    "type": "restatement",
    "question": "Given sentence: 'Scarcely any of the original buildings survived the earthquake.'",
    "options": {
      "A": "Most of the original buildings survived the earthquake without damage.",
      "B": "Almost none of the original buildings were left standing after the earthquake.",
      "C": "The earthquake damaged only a few of the original buildings.",
      "D": "None of the buildings were damaged because the earthquake was so weak.",
      "E": "The original buildings were rebuilt soon after the earthquake."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Scarcely any = neredeyse hiç",
    "trapWarning": "A ve C hasarı azaltır; D şıkkı tam tersini söyler; E şıkkı metinde olmayan bilgi ekler.",
    "explanation": "Orijinal binaların neredeyse hiçbiri depremden sağ çıkmadı (B şıkkı)."
  },
  {
    "id": "bank_rs_013",
    "type": "restatement",
    "question": "Given sentence: 'The more you practise a language, the more confident you become in speaking it.'",
    "options": {
      "A": "Practising a language makes you less confident about speaking it.",
      "B": "Your confidence in speaking a language grows as you practise it more.",
      "C": "You should become confident before you start practising a language.",
      "D": "Confident speakers rarely need to practise a language.",
      "E": "Practising a language for a short time is enough to become confident."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "The more ..., the more ...",
    "trapWarning": "A şıkkı yönü tersine çevirir; C şıkkı sırayı değiştirir; D ve E anlamı bozar.",
    "explanation": "Bir dili ne kadar çok pratik yaparsanız konuşurken o kadar özgüven kazanırsınız (B şıkkı)."
  },
  {
    "id": "bank_rs_014",
    "type": "restatement",
    "question": "Given sentence: 'No sooner had the minister resigned than a new scandal broke out.'",
    "options": {
      "A": "A new scandal broke out shortly before the minister resigned.",
      "B": "The minister resigned because of a new scandal.",
      "C": "Immediately after the minister resigned, another scandal emerged.",
      "D": "The minister refused to resign despite the new scandal.",
      "E": "A new scandal broke out long after the minister's resignation."
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "No sooner ... than = -ir -mez",
    "trapWarning": "A şıkkı sırayı değiştirir; B şıkkı sebep ilişkisi ekler; D şıkkı istifayı olumsuzlar; E şıkkı zamanı uzatır.",
    "explanation": "Bakan istifa eder etmez yeni bir skandal patlak verdi (C şıkkı)."
  },
  {
    "id": "bank_rs_015",
    "type": "restatement",
    "question": "Given sentence: 'The disease is far less common today than it was a century ago.'",
    "options": {
      "A": "The disease has become much more widespread over the last hundred years.",
      "B": "The disease was much rarer a century ago than it is today.",
      "C": "Far fewer people suffer from the disease now than a hundred years ago.",
      "D": "The disease is as common today as it was a century ago.",
      "E": "The disease disappeared completely about a hundred years ago."
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "far less common = çok daha az yaygın",
    "trapWarning": "A ve B karşılaştırmayı tersine çevirir; D şıkkı farkı yok sayar; E şıkkı aşırı bir sonuç çıkarır.",
    "explanation": "Hastalık bugün yüz yıl öncesine göre çok daha az yaygın (C şıkkı)."
  },
  {
    "id": "bank_rs_016",
    "type": "restatement",
    "question": "Given sentence: 'However carefully the experiment is designed, some errors are unavoidable.'",
    "options": {
      "A": "If the experiment is designed carefully, it will be free of errors.",
      "B": "No matter how careful the design of an experiment, a few errors cannot be avoided.",
      "C": "Careless experimental design is the main cause of the errors that scientists make.",
      "D": "Errors in an experiment can be avoided only when the experiment is designed very carefully.",
      "E": "Most experiments are designed so carefully that they contain no errors."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "However + zarf = ne kadar ... olursa olsun",
    "trapWarning": "A, D ve E dikkatli tasarımın hataları önleyeceğini söyler; C şıkkı ise konuyu değiştirir.",
    "explanation": "Deney ne kadar dikkatli tasarlanırsa tasarlansın bazı hatalar kaçınılmazdır (B şıkkı)."
  },
  {
    "id": "bank_rs_017",
    "type": "restatement",
    "question": "Given sentence: 'She was the first woman in her country to win a Nobel Prize.'",
    "options": {
      "A": "Before her, no woman from her country had ever won a Nobel Prize.",
      "B": "She won the Nobel Prize after many other women from her country.",
      "C": "She was the only person from her country to win a Nobel Prize.",
      "D": "Several women from her country won the Nobel Prize at the same time.",
      "E": "She was the first person in the world to win a Nobel Prize."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "the first ... to = ondan önce hiç kimse",
    "trapWarning": "B şıkkı sırayı tersine çevirir; C şıkkı 'only person' ile anlamı daraltıp değiştirir; D ve E kapsamı bozar.",
    "explanation": "Ondan önce ülkesinden hiçbir kadın Nobel almamıştı (A şıkkı)."
  },
  {
    "id": "bank_rs_018",
    "type": "restatement",
    "question": "Given sentence: 'The bridge was built in such a way that it could withstand strong earthquakes.'",
    "options": {
      "A": "The bridge was designed to resist powerful earthquakes.",
      "B": "The bridge was destroyed by a strong earthquake.",
      "C": "The bridge was built after a powerful earthquake.",
      "D": "Strong earthquakes made it impossible to build the bridge.",
      "E": "The bridge was built quickly, so it could not withstand earthquakes."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "in such a way that = amaç/sonuç",
    "trapWarning": "B ve E sonucu tersine çevirir; C şıkkı zaman ilişkisi ekler; D şıkkı anlamı bozar.",
    "explanation": "Köprü güçlü depremlere dayanacak şekilde inşa edildi (A şıkkı)."
  },
  {
    "id": "bank_rs_019",
    "type": "restatement",
    "question": "Given sentence: 'Were it not for the support of volunteers, the festival could not take place.'",
    "options": {
      "A": "The festival takes place without any help from volunteers.",
      "B": "Without the volunteers' help, the festival would not be possible.",
      "C": "Volunteers decided not to support the festival this year.",
      "D": "The festival will be cancelled because there are too few volunteers.",
      "E": "The festival takes place in spite of the volunteers."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Were it not for = Without / If it were not for",
    "trapWarning": "A ve E gönüllülerin önemini yok sayar; C ve D metinde olmayan bir durum anlatır.",
    "explanation": "Gönüllülerin desteği olmasaydı festival yapılamazdı (B şıkkı)."
  },
  {
    "id": "bank_rs_020",
    "type": "restatement",
    "question": "Given sentence: 'The novel has been translated into more languages than any other book by the author.'",
    "options": {
      "A": "The author's other books have been translated into more languages than this particular novel.",
      "B": "Of all the author's books, this novel has been translated into the most languages.",
      "C": "This novel is the only book by the author that has been translated.",
      "D": "The author translated the novel into many languages himself.",
      "E": "The novel has been translated into more languages than any other book that has ever been written."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "more ... than any other = en çok",
    "trapWarning": "A şıkkı karşılaştırmayı tersine çevirir; C şıkkı 'only' ile anlamı daraltır; D şıkkı konuyu değiştirir; E şıkkı kapsamı tüm kitaplara genişletir.",
    "explanation": "Yazarın tüm kitapları içinde en çok dile çevrilen bu romandır (B şıkkı)."
  },
  {
    "id": "bank_rs_021",
    "type": "restatement",
    "question": "Given sentence: 'It was the lack of rain, rather than poor farming methods, that caused the crops to fail.'",
    "options": {
      "A": "Poor and outdated farming methods were the main reason why the crops failed that year.",
      "B": "The crops failed not because of poor farming but because there was too little rain.",
      "C": "Both poor farming methods and heavy rain caused the crops to fail.",
      "D": "The crops would have failed anyway, even if there had been a lot more rain that year.",
      "E": "Farmers blamed the lack of rain for the failure of their poor and outdated farming methods."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "It was X, rather than Y, that ... (vurgu)",
    "trapWarning": "A şıkkı nedeni değiştirir; C şıkkı iki nedeni birleştirir ve yağmuru tersine çevirir; D şıkkı koşulun etkisini yok sayar; E şıkkı anlamı bozar.",
    "explanation": "Ürünler kötü tarım yöntemleri yüzünden değil, yağmur eksikliği yüzünden kurudu (B şıkkı)."
  },
  {
    "id": "bank_rs_022",
    "type": "restatement",
    "question": "Given sentence: 'Many people find it difficult to accept criticism, even when it is constructive.'",
    "options": {
      "A": "Most people welcome criticism as long as it is constructive.",
      "B": "Even helpful criticism is hard for many people to accept.",
      "C": "Constructive criticism is easier to give than to receive.",
      "D": "People rarely offer constructive criticism to one another.",
      "E": "Criticism is difficult to accept only when it is unfair."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "even when = -dığında bile",
    "trapWarning": "A ve E 'even when' anlamını yok sayar; C ve D konuyu değiştirir.",
    "explanation": "Yapıcı olduğunda bile birçok kişi eleştiriyi kabul etmekte zorlanır (B şıkkı)."
  },
  {
    "id": "bank_rs_023",
    "type": "restatement",
    "question": "Given sentence: 'The company's profits rose by twenty percent, mainly as a result of strong sales in Asia.'",
    "options": {
      "A": "Strong sales in Asia were the main reason for the twenty percent increase in profits.",
      "B": "The company's profits fell by twenty percent despite strong sales in Asia.",
      "C": "Sales in Asia rose by twenty percent, but profits remained the same.",
      "D": "The company is planning to increase its sales in Asia by twenty percent next year.",
      "E": "The company's profits rose by twenty percent in every region of the world except Asia."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "as a result of = -in sonucu olarak",
    "trapWarning": "B şıkkı yönü tersine çevirir; C şıkkı oranı satışlara taşır; D şıkkı zamanı değiştirir; E şıkkı bölgeyi tersine çevirir.",
    "explanation": "Kârdaki yüzde yirmilik artışın ana nedeni Asya'daki güçlü satışlardır (A şıkkı)."
  },
  {
    "id": "bank_rs_024",
    "type": "restatement",
    "question": "Given sentence: 'Had I known about the traffic, I would have taken the train.'",
    "options": {
      "A": "I took the train because I knew about the traffic.",
      "B": "I didn't take the train because I wasn't aware of the traffic.",
      "C": "I will definitely take the train next time if there is heavy traffic on the roads.",
      "D": "I knew about the heavy traffic before I left, but I still decided to drive.",
      "E": "The train I wanted to take was delayed because of the heavy traffic in the city."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Devrik Type 3 = gerçekte bilmiyordu, treni almadı",
    "trapWarning": "A ve D bildiğini söyler; C şıkkı genel koşul cümlesidir; E şıkkı konuyu değiştirir.",
    "explanation": "Trafiği bilseydim treni alırdım = bilmiyordum, treni almadım (B şıkkı)."
  },
  {
    "id": "bank_rs_025",
    "type": "restatement",
    "question": "Given sentence: 'Hardly anyone expected the small team to win the championship.'",
    "options": {
      "A": "Most people thought the small team would win the championship.",
      "B": "Almost no one predicted that the small team would become champions.",
      "C": "The small team hardly ever wins any championships.",
      "D": "Few teams expected to play against the small team in the championship.",
      "E": "The small team expected to lose the championship."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Hardly anyone = neredeyse hiç kimse",
    "trapWarning": "A şıkkı tam tersidir; C şıkkı 'hardly' kelimesini 'nadiren' anlamında kullanır; D ve E anlamı değiştirir.",
    "explanation": "Neredeyse hiç kimse küçük takımın şampiyon olacağını beklemiyordu (B şıkkı)."
  },
  {
    "id": "bank_rs_026",
    "type": "restatement",
    "question": "Given sentence: 'The documentary was so moving that many viewers were in tears by the end.'",
    "options": {
      "A": "Many viewers cried by the end of the documentary because it was so emotional.",
      "B": "The documentary was so boring that many viewers left before the end of it.",
      "C": "Many viewers were moved to tears even though the documentary was quite dull.",
      "D": "By the end of the documentary, most viewers had stopped watching it altogether.",
      "E": "The documentary showed many people in tears, which bored most of the viewers."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "so ... that = neden-sonuç",
    "trapWarning": "B ve D etkiyi olumsuzlar; C şıkkı zıtlık ekler; E şıkkı gözyaşlarını belgeseldeki kişilere aktarır.",
    "explanation": "Belgesel o kadar dokunaklıydı ki izleyicilerin çoğu sonunda ağlıyordu (A şıkkı)."
  },
  {
    "id": "bank_rs_027",
    "type": "restatement",
    "question": "Given sentence: 'Without access to clean water, the village would not have survived the drought.'",
    "options": {
      "A": "The village did not survive the drought, even though it had access to clean water.",
      "B": "The village survived the drought because its people had access to clean water.",
      "C": "If the village gets access to clean water, it will survive the next drought.",
      "D": "The drought destroyed the village's only source of clean drinking water.",
      "E": "The village had no clean water, which is why it was abandoned during the drought."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Without = If it had not been for",
    "trapWarning": "A ve E köyün kurtulamadığını söyler; C şıkkı geleceğe taşır; D şıkkı başka bir olay anlatır.",
    "explanation": "Temiz su olmasaydı köy kuraklıktan kurtulamazdı = temiz su vardı, köy kurtuldu (B şıkkı)."
  },
  {
    "id": "bank_rs_028",
    "type": "restatement",
    "question": "Given sentence: 'It was not until she moved abroad that she realised how much she loved her hometown.'",
    "options": {
      "A": "She realised how much she loved her hometown only after she had moved abroad.",
      "B": "She moved abroad because she had never really loved her hometown very much.",
      "C": "She loved her hometown so much that she never wanted to move abroad at all.",
      "D": "Before she moved abroad, she already knew how much she loved her hometown.",
      "E": "After moving abroad, she realised that she did not miss her hometown at all."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "It was not until ... that = ancak ... -dıktan sonra",
    "trapWarning": "B ve E sevgiyi olumsuzlar; C şıkkı taşınmayı olumsuzlar; D şıkkı zamanı değiştirir.",
    "explanation": "Memleketini ne kadar sevdiğini ancak yurtdışına taşındıktan sonra fark etti (A şıkkı)."
  },
  {
    "id": "bank_rs_029",
    "type": "restatement",
    "question": "Given sentence: 'The higher the price of fuel, the less people tend to drive.'",
    "options": {
      "A": "People tend to drive more when the price of fuel goes up sharply.",
      "B": "When fuel becomes more expensive, people generally use their cars less.",
      "C": "People drive less because they want to keep the price of fuel low.",
      "D": "The price of fuel has little effect on how much people choose to drive.",
      "E": "People who drive a lot are usually willing to pay higher fuel prices."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "The + comparative ..., the + comparative ...",
    "trapWarning": "A şıkkı yönü tersine çevirir; C şıkkı sebep-sonucu ters çevirir; D şıkkı ilişkiyi yok sayar; E şıkkı konuyu değiştirir.",
    "explanation": "Yakıt fiyatı ne kadar yüksekse insanlar o kadar az araba kullanır (B şıkkı)."
  },
  {
    "id": "bank_rs_030",
    "type": "restatement",
    "question": "Given sentence: 'Although the theory was proposed in the 1960s, it was only proven decades later.'",
    "options": {
      "A": "The theory was proposed and proven at the same time in the 1960s.",
      "B": "The theory, put forward in the 1960s, was not confirmed until many years afterwards.",
      "C": "The theory was proven in the 1960s but was rejected decades later.",
      "D": "Because the theory was proven decades later, it was rarely discussed in the 1960s.",
      "E": "Many scientists tried to disprove the theory in the decades after the 1960s."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Although: önerilmesi ↔ geç kanıtlanması",
    "trapWarning": "A şıkkı zaman farkını yok sayar; C şıkkı olayları tersine çevirir; D ve E metinde olmayan bilgi ekler.",
    "explanation": "1960'larda ortaya atılan kuram ancak on yıllar sonra kanıtlandı (B şıkkı)."
  },
  {
    "id": "bank_rs_031",
    "type": "restatement",
    "question": "Given sentence: 'Few cities in the world can match Istanbul for its wealth of history.'",
    "options": {
      "A": "Istanbul has less history than most other cities in the world.",
      "B": "Istanbul's history is richer than that of almost any other city in the world.",
      "C": "Many cities in the world have a history as rich as that of Istanbul.",
      "D": "Istanbul is one of the few cities in the world with no historical buildings.",
      "E": "Istanbul has become wealthy mainly because of its long and rich history."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Few ... can match = çok az şehir boy ölçüşebilir",
    "trapWarning": "A ve C karşılaştırmayı tersine çevirir; D şıkkı anlamsızdır; E şıkkı 'wealth' kelimesini parasal zenginlik sanan bir tuzaktır.",
    "explanation": "Tarihi zenginlik konusunda dünyada çok az şehir İstanbul ile boy ölçüşebilir (B şıkkı)."
  },
  {
    "id": "bank_rs_032",
    "type": "restatement",
    "question": "Given sentence: 'The negotiations might have succeeded if both sides had been more willing to compromise.'",
    "options": {
      "A": "The negotiations succeeded because both sides were willing to compromise.",
      "B": "The negotiations failed partly because neither side was willing enough to compromise.",
      "C": "Both sides will compromise more if the negotiations continue next month.",
      "D": "The negotiations succeeded even though neither side was willing to compromise.",
      "E": "Both sides refused to negotiate because they did not want to compromise."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Type 3 = gerçekte başarısız oldu",
    "trapWarning": "A ve D müzakerelerin başarılı olduğunu söyler; C şıkkı geleceğe taşır; E şıkkı müzakerelerin hiç yapılmadığını ima eder.",
    "explanation": "Taraflar uzlaşmaya daha istekli olsaydı müzakereler başarılı olabilirdi = yeterince istekli değillerdi, başarısız oldu (B şıkkı)."
  },
  {
    "id": "bank_rs_033",
    "type": "restatement",
    "question": "Given sentence: 'This is by far the most difficult exam I have ever taken.'",
    "options": {
      "A": "I have taken many exams that were more difficult than this one.",
      "B": "Of all the exams I have taken, this one is much harder than any other.",
      "C": "This exam was a little more difficult than the one I took last year.",
      "D": "This is the first exam I have taken, so I cannot compare it with others.",
      "E": "This exam was difficult, but I have taken a few that were harder."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "by far the most = açık ara en",
    "trapWarning": "A ve E karşılaştırmayı tersine çevirir; C şıkkı 'by far' vurgusunu zayıflatır; D şıkkı 'ever taken' ile çelişir.",
    "explanation": "Bu, açık ara girdiğim en zor sınav (B şıkkı)."
  },
  {
    "id": "bank_rs_034",
    "type": "restatement",
    "question": "Given sentence: 'The government introduced the law in order that fewer people would smoke in public places.'",
    "options": {
      "A": "The law was introduced because more people had started smoking at home.",
      "B": "The law aimed to reduce the number of people smoking in public places.",
      "C": "The law has made it easier for people to smoke in public places.",
      "D": "Fewer people smoked in public places before the law was introduced.",
      "E": "The government introduced the law because people had stopped smoking."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "in order that = amacıyla",
    "trapWarning": "A ve E nedeni değiştirir; C şıkkı sonucu tersine çevirir; D şıkkı zamanı karıştırır.",
    "explanation": "Yasa, kamusal alanlarda sigara içen insan sayısını azaltmayı amaçlıyordu (B şıkkı)."
  },
  {
    "id": "bank_rs_035",
    "type": "restatement",
    "question": "Given sentence: 'The children were too excited to fall asleep on the night before the trip.'",
    "options": {
      "A": "The children fell asleep early so that they would be fresh and ready for the trip.",
      "B": "The children were so excited about the trip that they couldn't sleep the night before.",
      "C": "The children were not excited about the trip, so they slept very well.",
      "D": "The children fell asleep quickly because the long trip had made them very tired.",
      "E": "The children were excited about the trip, but they still slept well."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "too ... to = o kadar ... ki ... -emedi",
    "trapWarning": "A, D ve E uyuduklarını söyler; C şıkkı heyecanı olumsuzlar.",
    "explanation": "Çocuklar o kadar heyecanlıydı ki geziden önceki gece uyuyamadılar (B şıkkı)."
  },
  {
    "id": "bank_rs_036",
    "type": "restatement",
    "question": "Given sentence: 'Not only does the new phone have a better camera, but it is also cheaper than the old model.'",
    "options": {
      "A": "The new phone has a better camera, but it costs more than the old model.",
      "B": "The new phone is cheaper than the old one, and its camera is better as well.",
      "C": "The old model had a better camera, but the new phone is much cheaper.",
      "D": "The new phone is more expensive because it has a much better camera.",
      "E": "The new phone is neither cheaper nor better than the old model."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Not only ... but also",
    "trapWarning": "A ve D fiyatı, C kamerayı tersine çevirir; E şıkkı her ikisini de olumsuzlar.",
    "explanation": "Yeni telefonun yalnızca kamerası daha iyi değil, aynı zamanda eski modelden daha ucuz (B şıkkı)."
  },
  {
    "id": "bank_rs_037",
    "type": "restatement",
    "question": "Given sentence: 'Should you need any further information, please contact our office.'",
    "options": {
      "A": "You should contact our office before you need any further information.",
      "B": "If you require more information, please get in touch with our office.",
      "C": "Our office will contact you when further information is available.",
      "D": "You need to contact our office in order to provide further information.",
      "E": "Our office cannot provide any further information on this matter."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Devrik koşul: Should you = If you",
    "trapWarning": "A şıkkı sırayı değiştirir; C şıkkı yönü tersine çevirir; D şıkkı anlamı bozar; E şıkkı teklifi olumsuzlar.",
    "explanation": "Should you need = If you need: daha fazla bilgiye ihtiyacınız olursa ofisimizle iletişime geçin (B şıkkı)."
  },
  {
    "id": "bank_rs_038",
    "type": "restatement",
    "question": "Given sentence: 'Hardly a day goes by without news of another cyber attack.'",
    "options": {
      "A": "News of cyber attacks is rarely reported in the media these days.",
      "B": "There is news of a new cyber attack almost every single day.",
      "C": "Cyber attacks usually happen at night rather than during the day.",
      "D": "A day without news of cyber attacks is now quite common.",
      "E": "Cyber attacks have become much less frequent in recent years."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Hardly a day goes by without = neredeyse her gün",
    "trapWarning": "A, D ve E sıklığı tersine çevirir; C şıkkı konuyu değiştirir.",
    "explanation": "Neredeyse her gün yeni bir siber saldırı haberi çıkıyor (B şıkkı)."
  },
  {
    "id": "bank_rs_039",
    "type": "restatement",
    "question": "Given sentence: 'The team's victory was largely due to the brilliant performance of its goalkeeper.'",
    "options": {
      "A": "The team won mainly because its goalkeeper played exceptionally well.",
      "B": "The team won despite a poor performance from its goalkeeper.",
      "C": "The goalkeeper played brilliantly, but the team still lost the match.",
      "D": "The team's victory surprised its goalkeeper more than anyone else.",
      "E": "The goalkeeper was injured, so the team had to win without him."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "due to = -den dolayı",
    "trapWarning": "B şıkkı performansı tersine çevirir; C şıkkı sonucu tersine çevirir; D ve E anlamı değiştirir.",
    "explanation": "Takımın galibiyeti büyük ölçüde kalecinin muhteşem performansı sayesindeydi (A şıkkı)."
  },
  {
    "id": "bank_rs_040",
    "type": "restatement",
    "question": "Given sentence: 'Rarely have scientists seen such a rapid decline in a bird population.'",
    "options": {
      "A": "Scientists often see bird populations decline as rapidly as this.",
      "B": "Scientists have seldom observed a bird population fall so quickly.",
      "C": "The bird population declined slowly, as scientists had predicted.",
      "D": "Scientists rarely study the decline of bird populations.",
      "E": "The bird population is growing faster than scientists expected."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Rarely have ... = nadiren",
    "trapWarning": "A şıkkı sıklığı tersine çevirir; C şıkkı hızı tersine çevirir; D şıkkı anlamı değiştirir; E şıkkı yönü tersine çevirir.",
    "explanation": "Bilim insanları bir kuş popülasyonunda bu kadar hızlı bir düşüşü nadiren gördü (B şıkkı)."
  },
  {
    "id": "bank_rs_041",
    "type": "restatement",
    "question": "Given sentence: 'The longer the patients waited for treatment, the worse their condition became.'",
    "options": {
      "A": "The patients' condition improved while they were waiting for treatment.",
      "B": "Patients who waited longer for treatment ended up in poorer health.",
      "C": "The patients had to wait longer because their condition was getting worse.",
      "D": "Patients whose condition was serious were treated without any waiting.",
      "E": "Waiting for treatment had no effect on the patients' condition."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "The longer ..., the worse ...",
    "trapWarning": "A şıkkı yönü tersine çevirir; C şıkkı sebep-sonucu ters çevirir; D ve E ilişkiyi değiştirir.",
    "explanation": "Hastalar tedavi için ne kadar uzun beklediyse durumları o kadar kötüleşti (B şıkkı)."
  },
  {
    "id": "bank_rs_042",
    "type": "restatement",
    "question": "Given sentence: 'The report claims that air pollution is responsible for millions of early deaths each year.'",
    "options": {
      "A": "According to the report, air pollution causes millions of people to die early every year.",
      "B": "The report proves that air pollution has no effect on how long people live.",
      "C": "The report claims that millions of people die each year from causes other than pollution.",
      "D": "According to the report, millions of people protest against air pollution each year.",
      "E": "The report shows that early deaths have caused air pollution to increase."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "be responsible for = -e neden olmak",
    "trapWarning": "B şıkkı ilişkiyi olumsuzlar; C şıkkı nedeni değiştirir; D şıkkı konuyu değiştirir; E şıkkı sebep-sonucu ters çevirir.",
    "explanation": "Rapora göre hava kirliliği her yıl milyonlarca erken ölüme neden oluyor (A şıkkı)."
  },
  {
    "id": "bank_rs_043",
    "type": "restatement",
    "question": "Given sentence: 'Much as I would like to help you, I simply don't have the time.'",
    "options": {
      "A": "I would help you if I had the time, but unfortunately I don't.",
      "B": "I don't want to help you, even though I have plenty of time.",
      "C": "I have plenty of time, so I would be happy to help you.",
      "D": "I helped you because I wanted to, even though I had little time.",
      "E": "I would like you to help me, but you don't have the time."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Much as = Although (… istesem de)",
    "trapWarning": "B şıkkı isteği olumsuzlar; C şıkkı zamanı tersine çevirir; D şıkkı yardım edildiğini söyler; E şıkkı rolleri değiştirir.",
    "explanation": "Sana ne kadar yardım etmek istesem de zamanım yok (A şıkkı)."
  },
  {
    "id": "bank_rs_044",
    "type": "restatement",
    "question": "Given sentence: 'The museum's collection is so large that it would take weeks to see everything.'",
    "options": {
      "A": "The museum's collection is small enough to be seen in a single afternoon.",
      "B": "Seeing the whole collection of the museum would require several weeks.",
      "C": "The museum is open for only a few weeks each year because it is so large.",
      "D": "Visitors need to book their tickets several weeks before visiting the museum.",
      "E": "The museum's collection has grown larger over the past few weeks."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "so ... that",
    "trapWarning": "A şıkkı büyüklüğü tersine çevirir; C, D ve E 'weeks' kelimesini başka bağlamlarda kullanır.",
    "explanation": "Müzenin koleksiyonu o kadar büyük ki her şeyi görmek haftalar alır (B şıkkı)."
  },
  {
    "id": "bank_rs_045",
    "type": "restatement",
    "question": "Given sentence: 'The policy, which was meant to reduce traffic, has actually increased congestion.'",
    "options": {
      "A": "The policy has successfully reduced traffic, just as it was meant to do.",
      "B": "Contrary to its aim, the policy has led to more traffic congestion.",
      "C": "The policy was introduced because traffic congestion had increased.",
      "D": "Traffic congestion has made it impossible to introduce the new policy.",
      "E": "The policy was meant to increase traffic, and it has done so."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "meant to ... has actually ... = amacın tersi",
    "trapWarning": "A şıkkı sonucu tersine çevirir; C şıkkı sebep-sonucu değiştirir; D şıkkı anlamsızdır; E şıkkı amacı tersine çevirir.",
    "explanation": "Trafiği azaltması amaçlanan politika aslında sıkışıklığı artırdı (B şıkkı)."
  },
  {
    "id": "bank_rs_046",
    "type": "restatement",
    "question": "Given sentence: 'You can borrow my car provided that you return it by Sunday.'",
    "options": {
      "A": "You can borrow my car only if you bring it back by Sunday.",
      "B": "You can't borrow my car, even if you return it by Sunday.",
      "C": "You must return my car on Sunday because I'll need it then.",
      "D": "You can borrow my car after Sunday, when I no longer need it.",
      "E": "You returned my car on Sunday, so you can borrow it again."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "provided that = koşuluyla",
    "trapWarning": "B şıkkı izni olumsuzlar; C şıkkı koşulu nedene çevirir; D şıkkı zamanı değiştirir; E şıkkı zamanı geçmişe taşır.",
    "explanation": "Pazara kadar geri getirmen koşuluyla arabamı ödünç alabilirsin (A şıkkı)."
  },
  {
    "id": "bank_rs_047",
    "type": "restatement",
    "question": "Given sentence: 'In spite of years of research, the cause of the disease remains unknown.'",
    "options": {
      "A": "Years of research have finally revealed the cause of the disease.",
      "B": "The cause of the disease is still a mystery, despite many years of research.",
      "C": "Researchers have spent years ignoring the cause of the disease.",
      "D": "The cause of the disease was discovered before research began.",
      "E": "Because the cause is unknown, nobody has researched the disease."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "In spite of = Despite",
    "trapWarning": "A ve D nedenin bulunduğunu söyler; C ve E araştırmayı olumsuzlar.",
    "explanation": "Yıllarca araştırmaya rağmen hastalığın nedeni hâlâ bilinmiyor (B şıkkı)."
  },
  {
    "id": "bank_rs_048",
    "type": "restatement",
    "question": "Given sentence: 'The new manager is not as strict as the previous one.'",
    "options": {
      "A": "The new manager is much stricter than the previous one was.",
      "B": "The previous manager was stricter than the new one is.",
      "C": "The new manager and the previous one are equally strict.",
      "D": "The previous manager was not strict at all, unlike the new one.",
      "E": "The new manager is the strictest the company has ever had."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "not as ... as = ... kadar değil",
    "trapWarning": "A, D ve E karşılaştırmayı tersine çevirir; C şıkkı eşitlik kurar.",
    "explanation": "Yeni müdür öncekisi kadar katı değil = önceki daha katıydı (B şıkkı)."
  },
  {
    "id": "bank_rs_049",
    "type": "restatement",
    "question": "Given sentence: 'But for the doctor's quick action, the patient would have died.'",
    "options": {
      "A": "The patient died because the doctor did not act quickly enough.",
      "B": "The patient survived thanks to the doctor's quick action.",
      "C": "The doctor acted quickly, but the patient died anyway.",
      "D": "The patient will survive if the doctor acts quickly.",
      "E": "The doctor was too slow to save the patient's life."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "But for = If it had not been for",
    "trapWarning": "A, C ve E hastanın öldüğünü söyler; D şıkkı geleceğe taşır.",
    "explanation": "Doktorun hızlı müdahalesi olmasaydı hasta ölürdü = hasta kurtuldu (B şıkkı)."
  },
  {
    "id": "bank_rs_050",
    "type": "restatement",
    "question": "Given sentence: 'The more she learned about the subject, the less certain she felt.'",
    "options": {
      "A": "Learning more about the subject made her feel more and more certain.",
      "B": "As her knowledge of the subject grew, her certainty decreased.",
      "C": "She felt uncertain, so she decided to stop learning about the subject.",
      "D": "She felt certain about the subject before she knew anything about it.",
      "E": "Her lack of certainty stopped her from learning about the subject."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "The more ..., the less ...",
    "trapWarning": "A şıkkı yönü tersine çevirir; C ve E sebep-sonucu ters çevirir; D şıkkı konuyu değiştirir.",
    "explanation": "Konu hakkında ne kadar çok şey öğrendiyse o kadar az emin hissetti (B şıkkı)."
  },
  {
    "id": "bank_rs_051",
    "type": "restatement",
    "question": "Given sentence: 'Scientists are unlikely to find a cure for the disease within the next decade.'",
    "options": {
      "A": "Scientists will almost certainly find a cure for the disease within ten years.",
      "B": "It is improbable that a cure for the disease will be found in the next ten years.",
      "C": "Scientists found a cure for the disease about ten years ago, after decades of work.",
      "D": "Scientists have stopped looking for a cure for the disease over the past decade.",
      "E": "A cure for the disease has already been available for more than a decade."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "be unlikely to = olası değil",
    "trapWarning": "A şıkkı olasılığı tersine çevirir; C ve E zamanı geçmişe taşır; D şıkkı aramayı olumsuzlar.",
    "explanation": "Bilim insanlarının önümüzdeki on yıl içinde tedavi bulması olası değil (B şıkkı)."
  },
  {
    "id": "bank_rs_052",
    "type": "restatement",
    "question": "Given sentence: 'The building was evacuated as soon as smoke was detected.'",
    "options": {
      "A": "Smoke was detected long after the building had been evacuated.",
      "B": "The building was evacuated immediately after smoke was noticed.",
      "C": "The building was not evacuated, although smoke had been detected.",
      "D": "Smoke was detected because the building had been evacuated.",
      "E": "The building was evacuated an hour before smoke was detected."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "as soon as = -ir -mez",
    "trapWarning": "A ve E sırayı değiştirir; C şıkkı tahliyeyi olumsuzlar; D şıkkı sebep-sonucu ters çevirir.",
    "explanation": "Duman tespit edilir edilmez bina boşaltıldı (B şıkkı)."
  },
  {
    "id": "bank_rs_053",
    "type": "restatement",
    "question": "Given sentence: 'Only a small fraction of the plastic we use is ever recycled.'",
    "options": {
      "A": "Most of the plastic we use is eventually recycled.",
      "B": "Very little of the plastic we use ends up being recycled.",
      "C": "A small amount of plastic is used to make recycled products.",
      "D": "We use only a small amount of plastic compared to the past.",
      "E": "Recycled plastic makes up most of the plastic we use."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Only a small fraction = çok küçük bir kısmı",
    "trapWarning": "A ve E oranı tersine çevirir; C ve D anlamı değiştirir.",
    "explanation": "Kullandığımız plastiğin yalnızca çok küçük bir kısmı geri dönüştürülüyor (B şıkkı)."
  },
  {
    "id": "bank_rs_054",
    "type": "restatement",
    "question": "Given sentence: 'If it hadn't been for the map, we would have got lost in the forest.'",
    "options": {
      "A": "We got lost in the forest because we didn't have a map.",
      "B": "The map helped us find our way through the forest.",
      "C": "We lost the map while we were walking through the forest.",
      "D": "We will get lost in the forest unless we take a map.",
      "E": "The map was wrong, so we got lost in the forest."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "If it hadn't been for = sayesinde",
    "trapWarning": "A ve E kaybolduklarını söyler; C şıkkı konuyu değiştirir; D şıkkı geleceğe taşır.",
    "explanation": "Harita olmasaydı ormanda kaybolurduk = harita sayesinde yolumuzu bulduk (B şıkkı)."
  },
  {
    "id": "bank_rs_055",
    "type": "restatement",
    "question": "Given sentence: 'The city is now twice as large as it was fifty years ago.'",
    "options": {
      "A": "The city was twice as large fifty years ago as it is today.",
      "B": "The city has doubled in size over the last fifty years.",
      "C": "The city has grown by about fifty percent over the past two decades.",
      "D": "The city has remained the same size for the past fifty years.",
      "E": "Fifty years ago, the city was the second largest in the country."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "twice as large as = iki katı",
    "trapWarning": "A şıkkı karşılaştırmayı tersine çevirir; C şıkkı oranı ve zamanı değiştirir; D şıkkı büyümeyi yok sayar; E şıkkı sıralamayı karıştırır.",
    "explanation": "Şehir bugün elli yıl öncekinin iki katı büyüklüğünde = son elli yılda iki katına çıktı (B şıkkı)."
  },
  {
    "id": "bank_rs_056",
    "type": "restatement",
    "question": "Given sentence: 'Nobody but the director knew the real reason for the decision.'",
    "options": {
      "A": "Everyone except the director knew the real reason for the decision.",
      "B": "The director was the only person who knew the true reason for the decision.",
      "C": "The director did not know the real reason for the decision.",
      "D": "Nobody, including the director, knew the real reason for the decision.",
      "E": "The director told everyone the real reason for the decision."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Nobody but = -den başka kimse",
    "trapWarning": "A şıkkı tam tersini söyler; C ve D yöneticinin bildiğini olumsuzlar; E şıkkı ise bilginin herkese yayıldığını söyler.",
    "explanation": "Yöneticiden başka kimse kararın gerçek nedenini bilmiyordu (B şıkkı)."
  },
  {
    "id": "bank_rs_057",
    "type": "restatement",
    "question": "Given sentence: 'The longer you leave the problem, the harder it will be to solve.'",
    "options": {
      "A": "The problem will become easier to solve if you wait a while.",
      "B": "Delaying action on the problem will only make it more difficult to fix.",
      "C": "The problem is hard to solve, so you should leave it for later.",
      "D": "You should solve the problem quickly, even though it is easy.",
      "E": "Solving the problem will take a long time, however hard you try."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "The longer ..., the harder ...",
    "trapWarning": "A şıkkı yönü tersine çevirir; C şıkkı tavsiyeyi tersine çevirir; D şıkkı zorluğu olumsuzlar; E şıkkı ilişkiyi değiştirir.",
    "explanation": "Sorunu ne kadar bekletirsen çözmek o kadar zorlaşır (B şıkkı)."
  },
  {
    "id": "bank_rs_058",
    "type": "restatement",
    "question": "Given sentence: 'So successful was the campaign that it was copied in several other countries.'",
    "options": {
      "A": "The campaign failed, so other countries decided not to copy it.",
      "B": "Several countries adopted the campaign because it had been so successful.",
      "C": "The campaign was copied from a successful one in another country.",
      "D": "The campaign was successful only in the countries that copied it.",
      "E": "Other countries copied the campaign before it became successful."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Devrik So ... that",
    "trapWarning": "A şıkkı başarıyı olumsuzlar; C şıkkı yönü tersine çevirir; D şıkkı kapsamı değiştirir; E şıkkı sırayı değiştirir.",
    "explanation": "Kampanya o kadar başarılıydı ki başka ülkelerde de kopyalandı (B şıkkı)."
  },
  {
    "id": "bank_rs_059",
    "type": "restatement",
    "question": "Given sentence: 'The professor is said to have discovered the ancient tomb by accident.'",
    "options": {
      "A": "The professor is known for searching for the ancient tomb for many years.",
      "B": "According to reports, the professor found the ancient tomb by chance.",
      "C": "The professor said that someone else had discovered the tomb by accident.",
      "D": "The ancient tomb was discovered by accident before the professor was born.",
      "E": "The professor accidentally damaged the ancient tomb while studying it."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "is said to have V3 = söylendiğine göre ... -mış",
    "trapWarning": "A şıkkı tesadüfü olumsuzlar; C ve D keşfi başkasına verir; E şıkkı anlamı değiştirir.",
    "explanation": "Söylendiğine göre profesör antik mezarı tesadüfen keşfetmiş (B şıkkı)."
  },
  {
    "id": "bank_rs_060",
    "type": "restatement",
    "question": "Given sentence: 'Even though the restaurant is expensive, it is always full.'",
    "options": {
      "A": "The restaurant is always full mainly because its prices are so low.",
      "B": "Despite its high prices, the restaurant is never short of customers.",
      "C": "The restaurant is expensive, so very few people eat there.",
      "D": "The restaurant is full only when it reduces its prices.",
      "E": "The restaurant became expensive only after it started to fill up every night."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Even though = Despite",
    "trapWarning": "A şıkkı fiyatı tersine çevirir; C şıkkı doluluğu olumsuzlar; D şıkkı koşul ekler; E şıkkı sebep-sonucu değiştirir.",
    "explanation": "Yüksek fiyatlarına rağmen restoran hep dolu (B şıkkı)."
  },
  {
    "id": "bank_rs_061",
    "type": "restatement",
    "question": "Given sentence: 'Under no circumstances should passengers open the emergency door during the flight.'",
    "options": {
      "A": "Passengers may open the emergency door if they feel unwell during the flight.",
      "B": "Passengers must never open the emergency door while the plane is in the air.",
      "C": "Passengers should open the emergency door only during an emergency landing.",
      "D": "The emergency door can be opened by passengers under certain circumstances.",
      "E": "Passengers should ask the crew before opening the emergency door."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Under no circumstances = hiçbir koşulda",
    "trapWarning": "A, C, D ve E bazı koşullarda izin verir; 'under no circumstances' ile çelişir.",
    "explanation": "Yolcular uçuş sırasında acil çıkış kapısını hiçbir koşulda açmamalıdır (B şıkkı)."
  },
  {
    "id": "bank_rs_062",
    "type": "restatement",
    "question": "Given sentence: 'The company would hire more staff if it could find people with the right skills.'",
    "options": {
      "A": "The company has hired many new staff members with the right skills.",
      "B": "The company isn't hiring more staff because it can't find suitably skilled people.",
      "C": "The company doesn't need more staff because its workers are highly skilled.",
      "D": "The company will train its staff so that they have the right skills.",
      "E": "The company hired more staff, but they didn't have the right skills."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Type 2 = şu anki gerçek durumun tersi",
    "trapWarning": "A ve E işe aldıklarını söyler; C şıkkı ihtiyacı olumsuzlar; D şıkkı metinde olmayan bir plan ekler.",
    "explanation": "Doğru becerilere sahip insan bulabilse şirket daha fazla eleman alırdı = bulamadığı için almıyor (B şıkkı)."
  },
  {
    "id": "bank_rs_063",
    "type": "restatement",
    "question": "Given sentence: 'It took the team three years to build the prototype.'",
    "options": {
      "A": "The team spent three years building the prototype.",
      "B": "The prototype was built three years before the team was formed.",
      "C": "The team built three prototypes in a single year.",
      "D": "The prototype lasted for three years before it broke down.",
      "E": "The team has been building the prototype for three months."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "It took ... to = ... sürdü",
    "trapWarning": "B şıkkı sırayı değiştirir; C şıkkı sayıyı karıştırır; D şıkkı anlamı değiştirir; E şıkkı süreyi değiştirir.",
    "explanation": "Takımın prototipi yapması üç yıl sürdü (A şıkkı)."
  },
  {
    "id": "bank_rs_064",
    "type": "restatement",
    "question": "Given sentence: 'Seldom do politicians admit that they have made a mistake.'",
    "options": {
      "A": "Politicians often admit their mistakes in public.",
      "B": "Politicians rarely acknowledge that they were wrong.",
      "C": "Politicians seldom make mistakes in their work.",
      "D": "Politicians admit their mistakes only when they are forced to.",
      "E": "Politicians never make any serious mistakes."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Seldom = nadiren",
    "trapWarning": "A şıkkı sıklığı tersine çevirir; C ve E hata yapmayı olumsuzlar; D şıkkı metinde olmayan bir koşul ekler.",
    "explanation": "Politikacılar hata yaptıklarını nadiren kabul eder (B şıkkı)."
  },
  {
    "id": "bank_rs_065",
    "type": "restatement",
    "question": "Given sentence: 'The disease can be treated successfully as long as it is diagnosed early.'",
    "options": {
      "A": "The disease can be treated successfully no matter when it is diagnosed.",
      "B": "Early diagnosis is essential for the successful treatment of the disease.",
      "C": "The disease is usually diagnosed too late to be treated successfully.",
      "D": "The disease can be diagnosed early only after treatment has started.",
      "E": "Successful treatment makes it easier to diagnose the disease early."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "as long as = koşuluyla",
    "trapWarning": "A şıkkı koşulu yok sayar; C şıkkı metinde olmayan bilgi ekler; D ve E sırayı/ilişkiyi tersine çevirir.",
    "explanation": "Erken teşhis edildiği sürece hastalık başarıyla tedavi edilebilir (B şıkkı)."
  },
  {
    "id": "bank_rs_066",
    "type": "restatement",
    "question": "Given sentence: 'I'd rather walk than take the bus on such a beautiful day.'",
    "options": {
      "A": "I prefer to walk instead of taking the bus on a lovely day like this.",
      "B": "I'd take the bus today because it's too nice a day to waste time walking.",
      "C": "I usually walk, but today I'd prefer to take the bus.",
      "D": "The bus is better than walking when the weather is beautiful.",
      "E": "I would walk, but the bus is much faster and more comfortable on such a day."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "would rather ... than = tercih",
    "trapWarning": "B, C ve D tercihi tersine çevirir; E şıkkı yürümeyi bir engelle olumsuzlar.",
    "explanation": "Böyle güzel bir günde otobüse binmek yerine yürümeyi tercih ederim (A şıkkı)."
  },
  {
    "id": "bank_rs_067",
    "type": "restatement",
    "question": "Given sentence: 'The government denied that it had known about the problem in advance.'",
    "options": {
      "A": "The government admitted that it had been aware of the problem beforehand.",
      "B": "The government said that it had not been aware of the problem beforehand.",
      "C": "The government knew about the problem but decided to ignore it.",
      "D": "The government warned people about the problem well in advance.",
      "E": "The government denied that there was any problem at all."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "deny that = inkar etmek",
    "trapWarning": "A şıkkı tam tersidir; C ve D bilgiyi kabul eder; E şıkkı sorunun varlığını inkar eder, önceden bilmeyi değil.",
    "explanation": "Hükümet sorundan önceden haberdar olduğunu inkar etti (B şıkkı)."
  },
  {
    "id": "bank_rs_068",
    "type": "restatement",
    "question": "Given sentence: 'As far as I know, the meeting has not been cancelled.'",
    "options": {
      "A": "I am certain that the meeting has been cancelled.",
      "B": "To my knowledge, the meeting is still going ahead.",
      "C": "I don't know when the meeting will take place.",
      "D": "I have just heard that the meeting was cancelled.",
      "E": "The meeting was cancelled because I didn't know about it."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "As far as I know = bildiğim kadarıyla",
    "trapWarning": "A ve D iptali söyler; C şıkkı anlamı değiştirir; E şıkkı sebep ilişkisi ekler.",
    "explanation": "Bildiğim kadarıyla toplantı iptal edilmedi (B şıkkı)."
  },
  {
    "id": "bank_rs_069",
    "type": "restatement",
    "question": "Given sentence: 'It is essential that all staff attend the safety training.'",
    "options": {
      "A": "Attending the safety training is optional for most staff.",
      "B": "Every member of staff must take part in the safety training.",
      "C": "Only new staff need to attend the safety training.",
      "D": "The safety training is essential for managers but not for other staff.",
      "E": "Staff who attend the safety training will receive a bonus."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "It is essential that = zorunlu",
    "trapWarning": "A şıkkı zorunluluğu kaldırır; C ve D kapsamı daraltır; E şıkkı metinde olmayan bir ödül ekler.",
    "explanation": "Tüm personelin güvenlik eğitimine katılması zorunludur (B şıkkı)."
  },
  {
    "id": "bank_rs_070",
    "type": "restatement",
    "question": "Given sentence: 'Though widely used, the method has never been properly tested.'",
    "options": {
      "A": "The method has been tested many times, so it is widely used.",
      "B": "Although many people use the method, it has not been tested adequately.",
      "C": "The method is rarely used because it has never been tested.",
      "D": "The method was tested properly before it became widely used.",
      "E": "Proper testing has shown that the method should not be used."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Though = Although",
    "trapWarning": "A ve D testi olumlu sunar; C şıkkı kullanımı tersine çevirir; E şıkkı metinde olmayan bir sonuç ekler.",
    "explanation": "Yaygın olarak kullanılsa da yöntem hiçbir zaman düzgün test edilmedi (B şıkkı)."
  },
  {
    "id": "bank_rs_071",
    "type": "restatement",
    "question": "Given sentence: 'The fewer mistakes you make, the higher your score will be.'",
    "options": {
      "A": "Making more mistakes will lead to a higher score.",
      "B": "Your score will rise as the number of your mistakes falls.",
      "C": "Your score depends on how quickly you answer the questions.",
      "D": "A high score will help you make fewer mistakes in future.",
      "E": "The number of mistakes you make has no effect on your score."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "The fewer ..., the higher ...",
    "trapWarning": "A şıkkı yönü tersine çevirir; C şıkkı konuyu değiştirir; D şıkkı sebep-sonucu ters çevirir; E şıkkı ilişkiyi yok sayar.",
    "explanation": "Ne kadar az hata yaparsanız puanınız o kadar yüksek olur (B şıkkı)."
  },
  {
    "id": "bank_rs_072",
    "type": "restatement",
    "question": "Given sentence: 'The tickets sold out within minutes of going on sale.'",
    "options": {
      "A": "It took the organisers several weeks to sell all of the tickets.",
      "B": "All the tickets were sold almost immediately after they became available.",
      "C": "The tickets went on sale a few minutes later than had been planned.",
      "D": "Only a handful of tickets were sold in the first few minutes of the sale.",
      "E": "The tickets were cheaper for those who managed to buy them early."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "within minutes = dakikalar içinde",
    "trapWarning": "A şıkkı süreyi uzatır; C ve E konuyu değiştirir; D şıkkı anlamı tersine çevirir.",
    "explanation": "Biletler satışa çıktıktan dakikalar sonra tükendi (B şıkkı)."
  },
  {
    "id": "bank_rs_073",
    "type": "restatement",
    "question": "Given sentence: 'There is little doubt that the economy will grow next year.'",
    "options": {
      "A": "Many experts doubt that the economy will grow next year.",
      "B": "It is almost certain that the economy will expand next year.",
      "C": "The economy grew very little last year, as expected.",
      "D": "There is no chance of economic growth next year.",
      "E": "Experts are unsure whether the economy will grow or shrink."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "little doubt = neredeyse kesin",
    "trapWarning": "A ve E şüpheyi artırır; C şıkkı zamanı değiştirir; D şıkkı tam tersini söyler.",
    "explanation": "Ekonominin gelecek yıl büyüyeceğine dair pek şüphe yok = neredeyse kesin (B şıkkı)."
  },
  {
    "id": "bank_rs_074",
    "type": "restatement",
    "question": "Given sentence: 'Instead of punishing the students, the teacher decided to talk to them.'",
    "options": {
      "A": "The teacher punished the students after talking to them.",
      "B": "The teacher chose to speak with the students rather than punish them.",
      "C": "The students were punished because they refused to talk to the teacher.",
      "D": "The teacher talked to the students and then punished them.",
      "E": "The teacher decided to punish the students without talking to them."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Instead of = ... yerine",
    "trapWarning": "A, D ve E cezalandırmayı gerçekleşmiş sayar; C şıkkı rolleri değiştirir.",
    "explanation": "Öğretmen öğrencileri cezalandırmak yerine onlarla konuşmaya karar verdi (B şıkkı)."
  },
  {
    "id": "bank_rs_075",
    "type": "restatement",
    "question": "Given sentence: 'The village is accessible only by boat during the winter months.'",
    "options": {
      "A": "In winter, the only way to reach the village is by boat.",
      "B": "Boats cannot reach the village during the winter months.",
      "C": "The village can be reached by car or boat all year round.",
      "D": "The village is closed to visitors during the winter months.",
      "E": "People in the village build boats during the winter."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "only by = yalnızca ... ile",
    "trapWarning": "B şıkkı tam tersini söyler; C şıkkı kısıtı kaldırır; D ve E anlamı değiştirir.",
    "explanation": "Kış aylarında köye yalnızca tekneyle ulaşılabilir (A şıkkı)."
  },
  {
    "id": "bank_rs_076",
    "type": "restatement",
    "question": "Given sentence: 'Archaeologists have yet to determine who built the ancient structure.'",
    "options": {
      "A": "Archaeologists have finally discovered who built the ancient structure.",
      "B": "It is still not known who constructed the ancient structure.",
      "C": "Archaeologists built a copy of the ancient structure to study it.",
      "D": "The ancient structure was built by archaeologists many years ago.",
      "E": "Archaeologists have stopped trying to find out who built the structure."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "have yet to = henüz ... -medi",
    "trapWarning": "A şıkkı tam tersini söyler; C ve D anlamı değiştirir; E şıkkı aramanın bırakıldığını iddia eder.",
    "explanation": "Arkeologlar yapıyı kimin inşa ettiğini henüz belirleyemedi (B şıkkı)."
  },
  {
    "id": "bank_rs_077",
    "type": "restatement",
    "question": "Given sentence: 'The team could have won the match if their best player had not been injured.'",
    "options": {
      "A": "The team won the match even though their best player was injured.",
      "B": "The team lost, partly because their best player was injured.",
      "C": "The team's best player will be fit enough to play in the next match.",
      "D": "The team won because their best player was not injured.",
      "E": "The best player was injured because the team lost the match."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Type 3 = gerçekte kaybettiler",
    "trapWarning": "A ve D kazandıklarını söyler; C şıkkı geleceğe taşır; E şıkkı sebep-sonucu ters çevirir.",
    "explanation": "En iyi oyuncu sakatlanmasaydı takım kazanabilirdi = sakatlandı, kaybettiler (B şıkkı)."
  },
  {
    "id": "bank_rs_078",
    "type": "restatement",
    "question": "Given sentence: 'The novel is based on a true story, though some details have been changed.'",
    "options": {
      "A": "The novel is completely fictional and has nothing to do with real events.",
      "B": "Although some details are different, the novel tells a story that really happened.",
      "C": "Every detail in the novel is exactly as it happened in real life.",
      "D": "The true story was later changed in several ways to match the events in the novel.",
      "E": "The novel later inspired a true story that shared many of the same details."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "though = -e rağmen",
    "trapWarning": "A şıkkı gerçeklik bağını kaldırır; C şıkkı değişiklikleri yok sayar; D ve E yönü tersine çevirir.",
    "explanation": "Bazı ayrıntılar değiştirilmiş olsa da roman gerçek bir hikayeye dayanır (B şıkkı)."
  },
  {
    "id": "bank_rs_079",
    "type": "restatement",
    "question": "Given sentence: 'Not a single student failed the final exam this year.'",
    "options": {
      "A": "Only one student failed the final exam this year.",
      "B": "Every student passed the final exam this year.",
      "C": "Most students failed the final exam this year.",
      "D": "The final exam was cancelled this year.",
      "E": "A single student passed the final exam this year."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Not a single = hiç ... değil",
    "trapWarning": "A ve E 'single' kelimesini yanlış yorumlar; C şıkkı tam tersidir; D şıkkı sınavı olumsuzlar.",
    "explanation": "Bu yıl tek bir öğrenci bile final sınavından kalmadı = herkes geçti (B şıkkı)."
  },
  {
    "id": "bank_rs_080",
    "type": "restatement",
    "question": "Given sentence: 'She had no sooner arrived at the office than her phone began to ring.'",
    "options": {
      "A": "Her phone began to ring long before she arrived at the office.",
      "B": "As soon as she reached the office, her phone started ringing.",
      "C": "She arrived at the office late because her phone kept ringing.",
      "D": "Her phone stopped ringing as soon as she arrived at the office.",
      "E": "She did not answer her phone because she was not yet at the office."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "no sooner ... than = -ir -mez",
    "trapWarning": "A şıkkı sırayı değiştirir; C şıkkı sebep ilişkisi ekler; D şıkkı eylemi tersine çevirir; E şıkkı konuyu değiştirir.",
    "explanation": "Ofise varır varmaz telefonu çalmaya başladı (B şıkkı)."
  },
  {
    "id": "bank_rs_081",
    "type": "restatement",
    "question": "Given sentence: 'The government is considering raising the minimum wage.'",
    "options": {
      "A": "The government has already raised the minimum wage.",
      "B": "The government is thinking about increasing the minimum wage.",
      "C": "The government has refused to change the minimum wage.",
      "D": "The government is planning to reduce the minimum wage.",
      "E": "The government will definitely raise the minimum wage next year."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "consider + V-ing = düşünmek, değerlendirmek",
    "trapWarning": "A ve E kesinleşmiş gibi sunar; C ve D anlamı değiştirir.",
    "explanation": "Hükümet asgari ücreti artırmayı düşünüyor (B şıkkı)."
  },
  {
    "id": "bank_rs_082",
    "type": "restatement",
    "question": "Given sentence: 'Unlike his brother, who loves sport, Tom prefers reading.'",
    "options": {
      "A": "Like his brother, Tom spends most of his free time playing sport.",
      "B": "Tom would rather read, whereas his brother is keen on sport.",
      "C": "Tom and his brother both prefer reading to playing sport.",
      "D": "Tom's brother prefers reading, while Tom loves sport.",
      "E": "Tom started reading because his brother didn't like sport."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Unlike = -in aksine",
    "trapWarning": "A ve C benzerlik kurar; D şıkkı rolleri değiştirir; E şıkkı sebep ilişkisi ekler.",
    "explanation": "Spor seven kardeşinin aksine Tom okumayı tercih ediyor (B şıkkı)."
  },
  {
    "id": "bank_rs_083",
    "type": "restatement",
    "question": "Given sentence: 'The storm caused far less damage than had been predicted.'",
    "options": {
      "A": "The storm caused much more damage than experts had expected.",
      "B": "The damage from the storm was much smaller than forecasters had expected.",
      "C": "The storm caused exactly the amount of damage that had been predicted.",
      "D": "Experts were unable to predict the damage the storm would cause.",
      "E": "The storm was predicted to cause very little damage, and it did."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "far less ... than predicted",
    "trapWarning": "A şıkkı karşılaştırmayı tersine çevirir; C şıkkı farkı yok sayar; D ve E tahmini değiştirir.",
    "explanation": "Fırtına tahmin edilenden çok daha az hasara yol açtı (B şıkkı)."
  },
  {
    "id": "bank_rs_084",
    "type": "restatement",
    "question": "Given sentence: 'You had better leave now if you want to catch the last train.'",
    "options": {
      "A": "You should leave now; otherwise you may miss the last train.",
      "B": "You missed the last train because you left too late.",
      "C": "The last train leaves later than you think, so there is no hurry.",
      "D": "It would be better to wait for the next train instead.",
      "E": "You can leave whenever you want, as there are many trains."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "had better = -se iyi olur (tavsiye)",
    "trapWarning": "B şıkkı zamanı geçmişe taşır; C, D ve E aciliyeti ortadan kaldırır.",
    "explanation": "Son treni yakalamak istiyorsan şimdi çıksan iyi olur (A şıkkı)."
  },
  {
    "id": "bank_rs_085",
    "type": "restatement",
    "question": "Given sentence: 'The medicine should be taken with food so as not to upset the stomach.'",
    "options": {
      "A": "Taking the medicine on an empty stomach helps it work faster.",
      "B": "The medicine should be taken with a meal to avoid stomach problems.",
      "C": "The medicine may upset the stomach even if it is taken with food.",
      "D": "Food should be avoided for an hour after taking the medicine.",
      "E": "The medicine is used to treat stomach problems caused by food."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "so as not to = -memek için",
    "trapWarning": "A ve D tavsiyeyi tersine çevirir; C şıkkı amacı yok sayar; E şıkkı ilacın kullanımını değiştirir.",
    "explanation": "Mideyi rahatsız etmemek için ilaç yemekle alınmalı (B şıkkı)."
  },
  {
    "id": "bank_rs_086",
    "type": "restatement",
    "question": "Given sentence: 'It is thought that the painting was stolen during the war.'",
    "options": {
      "A": "The painting was definitely stolen after the war had ended.",
      "B": "The painting is believed to have been stolen during the war.",
      "C": "The painting was painted during the war by an unknown artist.",
      "D": "It is certain that the painting was not stolen during the war.",
      "E": "The painting was hidden during the war to prevent it being stolen."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "It is thought that = ... düşünülüyor",
    "trapWarning": "A ve D kesinlik ekler ve olayı değiştirir; C ve E farklı olaylar anlatır.",
    "explanation": "Tablonun savaş sırasında çalındığı düşünülüyor (B şıkkı)."
  },
  {
    "id": "bank_rs_087",
    "type": "restatement",
    "question": "Given sentence: 'Had the company invested in new technology, it would still be competitive today.'",
    "options": {
      "A": "The company is still competitive because it invested in new technology.",
      "B": "The company is no longer competitive because it didn't invest in new technology.",
      "C": "The company will invest in new technology so that it can remain competitive.",
      "D": "The company invested in new technology, but it is no longer competitive.",
      "E": "The company stopped investing in new technology because it was competitive."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Karma koşul: geçmiş → bugün",
    "trapWarning": "A ve D yatırım yapıldığını söyler; C şıkkı geleceğe taşır; E şıkkı sebep-sonucu değiştirir.",
    "explanation": "Şirket yeni teknolojiye yatırım yapsaydı bugün hâlâ rekabetçi olurdu = yapmadı, rekabetçi değil (B şıkkı)."
  },
  {
    "id": "bank_rs_088",
    "type": "restatement",
    "question": "Given sentence: 'Hardly ever do we see such talent in someone so young.'",
    "options": {
      "A": "We often see young people with this kind of talent.",
      "B": "It is very rare to see such ability in someone of that age.",
      "C": "Young people hardly ever show any interest in developing talent.",
      "D": "Talented people usually become successful when they are young.",
      "E": "This young person has no special talent at all."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Hardly ever = nadiren",
    "trapWarning": "A şıkkı sıklığı tersine çevirir; C ve D anlamı değiştirir; E şıkkı yeteneği olumsuzlar.",
    "explanation": "Bu kadar genç birinde bu kadar yeteneği nadiren görürüz (B şıkkı)."
  },
  {
    "id": "bank_rs_089",
    "type": "restatement",
    "question": "Given sentence: 'The project was abandoned owing to a lack of funding.'",
    "options": {
      "A": "The project was completed despite a lack of funding.",
      "B": "The project was stopped because there was not enough money.",
      "C": "The project received too much funding, so it was abandoned.",
      "D": "A lack of funding was caused by the project being abandoned.",
      "E": "The project was abandoned before it had received any funding."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "owing to = -den dolayı",
    "trapWarning": "A ve C nedeni değiştirir; D şıkkı sebep-sonucu ters çevirir; E şıkkı zamanı karıştırır.",
    "explanation": "Proje fon eksikliği nedeniyle bırakıldı (B şıkkı)."
  },
  {
    "id": "bank_rs_090",
    "type": "restatement",
    "question": "Given sentence: 'No other planet in our solar system is as hot as Venus.'",
    "options": {
      "A": "Several planets in our solar system are hotter than Venus.",
      "B": "Venus is the hottest planet in our solar system.",
      "C": "Venus is as hot as most other planets in our solar system.",
      "D": "Venus is the closest planet to the Sun in our solar system.",
      "E": "Venus is hotter than Earth but colder than Mercury."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "No other ... as ... as = en ...",
    "trapWarning": "A ve E Venüs'ten daha sıcak gezegen olduğunu söyler; C şıkkı eşitlik kurar; D şıkkı konuyu değiştirir.",
    "explanation": "Güneş sistemimizde hiçbir gezegen Venüs kadar sıcak değil = Venüs en sıcak gezegen (B şıkkı)."
  },
  {
    "id": "bank_rs_091",
    "type": "restatement",
    "question": "Given sentence: 'The researchers failed to find any evidence that the drug was effective.'",
    "options": {
      "A": "The researchers proved that the drug was very effective.",
      "B": "The researchers found no proof that the drug worked.",
      "C": "The researchers did not have time to test the drug.",
      "D": "The researchers found evidence that the drug was dangerous.",
      "E": "The researchers stopped the study because the drug worked so well."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "fail to = -emedi",
    "trapWarning": "A ve E etkililiği kanıtlanmış sayar; C ve D metinde olmayan bilgi ekler.",
    "explanation": "Araştırmacılar ilacın etkili olduğuna dair kanıt bulamadı (B şıkkı)."
  },
  {
    "id": "bank_rs_092",
    "type": "restatement",
    "question": "Given sentence: 'However much you earn, you should always save some of it.'",
    "options": {
      "A": "You should save money only if you earn a high salary.",
      "B": "Whatever your income, it's wise to save part of it.",
      "C": "The more you earn, the less you need to save.",
      "D": "People who earn a lot usually spend everything they make.",
      "E": "You should earn more money before you start saving."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "However much = ne kadar ... olursa olsun",
    "trapWarning": "A ve E tavsiyeye koşul ekler; C şıkkı ilişkiyi tersine çevirir; D şıkkı konuyu değiştirir.",
    "explanation": "Ne kadar kazanırsan kazan her zaman bir kısmını biriktirmelisin (B şıkkı)."
  },
  {
    "id": "bank_rs_093",
    "type": "restatement",
    "question": "Given sentence: 'The flight was delayed due to bad weather, not technical problems.'",
    "options": {
      "A": "Technical problems, not bad weather, caused the flight to be delayed.",
      "B": "Bad weather, rather than any technical issue, was the reason for the delay.",
      "C": "The flight was delayed because of both bad weather and technical problems.",
      "D": "The flight left on time despite the bad weather.",
      "E": "The flight was cancelled because of serious technical problems."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "due to X, not Y",
    "trapWarning": "A şıkkı nedenleri tersine çevirir; C şıkkı ikisini birleştirir; D şıkkı gecikmeyi olumsuzlar; E şıkkı olayı değiştirir.",
    "explanation": "Uçuş teknik sorunlar nedeniyle değil kötü hava nedeniyle gecikti (B şıkkı)."
  },
  {
    "id": "bank_rs_094",
    "type": "restatement",
    "question": "Given sentence: 'I wish I had studied harder when I was at school.'",
    "options": {
      "A": "I'm glad that I studied so hard when I was at school.",
      "B": "I regret not having worked harder during my school years.",
      "C": "I'm going to study harder now that I'm back at school.",
      "D": "I studied very hard at school, but it didn't help me.",
      "E": "I wish my children would study harder at school."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "wish + Past Perfect = geçmiş pişmanlık",
    "trapWarning": "A ve D çok çalıştığını söyler; C şıkkı geleceğe taşır; E şıkkı kişiyi değiştirir.",
    "explanation": "Keşke okuldayken daha çok çalışsaydım = daha çok çalışmadığım için pişmanım (B şıkkı)."
  },
  {
    "id": "bank_rs_095",
    "type": "restatement",
    "question": "Given sentence: 'The road will remain closed until the repairs have been completed.'",
    "options": {
      "A": "The road will reopen before the repairs are completed.",
      "B": "The road won't reopen until the repair work is finished.",
      "C": "The repairs will begin as soon as the road is closed.",
      "D": "The road has been closed because the repairs were completed.",
      "E": "The repairs will take place while the road remains open."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "until = -e kadar",
    "trapWarning": "A şıkkı sırayı değiştirir; C ve D ilişkiyi tersine çevirir; E şıkkı kapanmayı olumsuzlar.",
    "explanation": "Yol, onarımlar tamamlanana kadar kapalı kalacak (B şıkkı)."
  },
  {
    "id": "bank_rs_096",
    "type": "restatement",
    "question": "Given sentence: 'It is no use complaining about the decision now.'",
    "options": {
      "A": "You should complain about the decision as soon as possible.",
      "B": "There is no point in complaining about the decision at this stage.",
      "C": "Complaining about the decision is the best way to change it.",
      "D": "Nobody has complained about the decision so far.",
      "E": "You can complain about the decision, but only in writing."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "It is no use + V-ing = ... faydasız",
    "trapWarning": "A ve C şikayeti teşvik eder; D şıkkı konuyu değiştirir; E şıkkı koşul ekler.",
    "explanation": "Karar hakkında şimdi şikayet etmenin faydası yok (B şıkkı)."
  },
  {
    "id": "bank_rs_097",
    "type": "restatement",
    "question": "Given sentence: 'Many species of plants are threatened with extinction as a result of deforestation.'",
    "options": {
      "A": "Deforestation has caused many plant species to become extinct already.",
      "B": "Because of forest clearance, many plant species are in danger of disappearing.",
      "C": "Many plant species have adapted well to the effects of deforestation.",
      "D": "The extinction of many plant species has led to deforestation.",
      "E": "Deforestation has had little effect on the survival of plant species."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "as a result of = sonucu olarak",
    "trapWarning": "A şıkkı 'threatened' kelimesini kesin yok oluşa çevirir; C ve E etkiyi olumsuzlar; D şıkkı sebep-sonucu ters çevirir.",
    "explanation": "Ormansızlaşma sonucu birçok bitki türü yok olma tehdidi altında (B şıkkı)."
  },
  {
    "id": "bank_rs_098",
    "type": "restatement",
    "question": "Given sentence: 'The athlete was disqualified for failing a drug test.'",
    "options": {
      "A": "The athlete was disqualified after testing positive for banned substances.",
      "B": "The athlete refused to take the drug test, so he won the race.",
      "C": "The athlete passed the drug test and was allowed to compete.",
      "D": "Many plant species have been destroyed, which has in turn led to deforestation.",
      "E": "Deforestation has had surprisingly little effect on the survival of plant species."
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "for + V-ing = ... nedeniyle",
    "trapWarning": "B ve C sonucu değiştirir; D şıkkı 'fail' fiilini yarışa uygular; E şıkkı testi geçtiğini söyler.",
    "explanation": "Sporcu doping testinde başarısız olduğu için diskalifiye edildi (A şıkkı)."
  },
  {
    "id": "bank_rs_099",
    "type": "restatement",
    "question": "Given sentence: 'Hard as he tried, he couldn't open the jar.'",
    "options": {
      "A": "He opened the jar easily because he tried very hard.",
      "B": "Although he tried very hard, he was unable to open the jar.",
      "C": "He didn't try very hard, so he couldn't open the jar.",
      "D": "He tried to open the jar, but it was already open.",
      "E": "He gave up trying because the jar was too easy to open."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Hard as he tried = Although he tried hard",
    "trapWarning": "A şıkkı sonucu tersine çevirir; C şıkkı çabayı olumsuzlar; D ve E anlamı değiştirir.",
    "explanation": "Ne kadar uğraşsa da kavanozu açamadı (B şıkkı)."
  },
  {
    "id": "bank_rs_100",
    "type": "restatement",
    "question": "Given sentence: 'The results of the study are far from conclusive.'",
    "options": {
      "A": "The study's results clearly prove the researchers' theory.",
      "B": "The results of the study are not at all definite.",
      "C": "The study has not yet produced any results.",
      "D": "The researchers have concluded the study early.",
      "E": "The study's results are almost complete."
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "far from = hiç de ... değil",
    "trapWarning": "A ve E kesinliği artırır; C ve D anlamı değiştirir ('conclusive' kelimesini 'conclude' ile karıştırır).",
    "explanation": "Çalışmanın sonuçları kesin olmaktan çok uzak (B şıkkı)."
  }
];

export const RESTATEMENT_BANK: YdsQuestion[] = shuffleQuestionList(RAW_RESTATEMENT_BANK);
