// Generated question bank: sentence_completion (100 questions).
import { YdsQuestion } from '../../types';
import { shuffleQuestionList } from '../../services/optionShuffle';

const RAW_SENTENCE_COMPLETION_BANK: YdsQuestion[] = [
  {
    "id": "bank_sc_001",
    "type": "sentence_completion",
    "question": "Although the new vaccine proved highly effective in clinical trials, _____ .",
    "options": {
      "A": "it was approved by health authorities within a few months",
      "B": "many people remained reluctant to be vaccinated",
      "C": "researchers had tested it on more than thirty thousand volunteers",
      "D": "it is expected to prevent millions of infections each year",
      "E": "most doctors recommended it to their elderly patients"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Although (+ / -) zıtlık",
    "trapWarning": "A, C, D ve E ilk yarıyla aynı yönde (olumlu) devam eder; Although ise beklenmedik/olumsuz bir sonuç ister.",
    "explanation": "Aşı etkiliydi (+) ama insanlar aşı olmaya isteksizdi (-). Zıtlığı yalnızca B kurar."
  },
  {
    "id": "bank_sc_002",
    "type": "sentence_completion",
    "question": "By the time the rescue team reached the collapsed mine, _____ .",
    "options": {
      "A": "the trapped workers will have run out of oxygen",
      "B": "the trapped workers have been waiting for three days",
      "C": "the trapped workers had already been brought to the surface",
      "D": "the miners are brought to the surface one by one",
      "E": "the miners were going to be rescued by helicopter"
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "By the time + Past Simple → Past Perfect",
    "trapWarning": "A şıkkı gelecek, B ve D şimdiki zamanla zaman uyumunu bozar. E şıkkı anlam olarak da 'reached' ile bağlanmaz.",
    "explanation": "By the time + V2 yapısından sonra ana cümlede Past Perfect (had V3) gelir: ekip vardığında işçiler çoktan çıkarılmıştı."
  },
  {
    "id": "bank_sc_003",
    "type": "sentence_completion",
    "question": "Unless coastal cities invest in stronger flood defences, _____ .",
    "options": {
      "A": "they have suffered serious damage from storms in recent years",
      "B": "rising sea levels will put millions of residents at risk",
      "C": "they would have avoided the worst effects of the hurricane",
      "D": "sea levels have been rising faster than scientists expected",
      "E": "they can attract more tourists during the summer months"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Unless (= if ... not) + gelecek zamanlı olumsuz sonuç",
    "trapWarning": "A ve D present perfect ile koşul-sonuç ilişkisini kurmaz; C şıkkı Type 3 yapısıdır ve Unless + Present ile uyuşmaz; E şıkkı anlamsız bir sonuçtur.",
    "explanation": "Unless + Present Simple, ana cümlede will ister: yatırım yapmazlarsa yükselen deniz seviyesi milyonları riske atacak."
  },
  {
    "id": "bank_sc_004",
    "type": "sentence_completion",
    "question": "The research team decided to repeat the experiment _____ .",
    "options": {
      "A": "since the first results had been published in a leading journal",
      "B": "because the results were exactly what they had predicted",
      "C": "even though the equipment had been checked carefully",
      "D": "so that they could rule out any errors in the first trial",
      "E": "as soon as they had received funding for a new project"
    },
    "answer": "D",
    "difficulty": "İleri",
    "tacticUsed": "Amaç bildiren so that",
    "trapWarning": "A ve B tekrar etmek için mantıklı bir neden vermez; C şıkkı zıtlık kurar ama anlam bağı zayıftır; E şıkkı bir zaman bildirir ama tekrarın nedeni değildir.",
    "explanation": "Deneyi tekrarlamanın en mantıklı amacı ilk denemedeki hataları elemektir: so that they could rule out any errors."
  },
  {
    "id": "bank_sc_005",
    "type": "sentence_completion",
    "question": "_____ , the ancient city was abandoned within a single generation.",
    "options": {
      "A": "Because its rivers provided water throughout the year",
      "B": "Once its main water source dried up during a long drought",
      "C": "Although the population continued to grow steadily",
      "D": "Since it had been rebuilt after every earthquake",
      "E": "As long as trade with neighbouring cities flourished"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Neden-sonuç: şehrin terk edilme nedeni",
    "trapWarning": "A, D ve E şehrin terk edilmesine değil, ayakta kalmasına neden olur; C şıkkı ise zıtlık bildirir ama 'growing population' terk edilmeyle bağlanmaz.",
    "explanation": "Ana cümle 'terk edildi' der; tek mantıklı neden ana su kaynağının kurumasıdır (B şıkkı)."
  },
  {
    "id": "bank_sc_006",
    "type": "sentence_completion",
    "question": "So complex is the human immune system _____ .",
    "options": {
      "A": "because it consists of many types of specialised cells",
      "B": "that scientists still do not fully understand how it works",
      "C": "while some of its parts have been studied for centuries",
      "D": "although it protects the body against most infections",
      "E": "which is why vaccines can train it to recognise viruses"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "So + sıfat + devrik yapı ... that",
    "trapWarning": "Devrik 'So complex is ...' yapısı mutlaka 'that' ile tamamlanır. Diğer şıklar anlamca makul görünse de yapıyı tamamlamaz.",
    "explanation": "So + adj + inversion ... that kalıbı: o kadar karmaşık ki bilim insanları hâlâ tam olarak anlayamıyor."
  },
  {
    "id": "bank_sc_007",
    "type": "sentence_completion",
    "question": "While some economists argue that a higher minimum wage destroys jobs, _____ .",
    "options": {
      "A": "others claim that it increases spending and supports growth",
      "B": "many small businesses have closed because of rising labour costs",
      "C": "unemployment usually rises when wages increase too quickly",
      "D": "the government has decided to freeze the minimum wage",
      "E": "workers in many countries earn less than they did a decade ago"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "While (karşılaştırma / zıtlık): bazıları ... diğerleri ...",
    "trapWarning": "B ve C ilk görüşü destekler; D ve E konuyla ilgili ama iki görüşü karşılaştırmaz.",
    "explanation": "While some ... argue yapısı karşı görüşü bekler: others claim ... (A şıkkı)."
  },
  {
    "id": "bank_sc_008",
    "type": "sentence_completion",
    "question": "Had the engineers paid attention to the warning signs, _____ .",
    "options": {
      "A": "the bridge does not collapse during the storm",
      "B": "the bridge would not have collapsed during the storm",
      "C": "they will be able to prevent another disaster",
      "D": "they noticed several cracks in the main supports",
      "E": "the bridge had been closed for repairs a week earlier"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Devrik Type 3: Had + S + V3, would have V3",
    "trapWarning": "A ve C zaman uyumunu bozar; D ve E koşul cümlesinin sonucunu vermez.",
    "explanation": "Had they paid = If they had paid. Sonuç tarafı would (not) have V3 olmalıdır (B şıkkı)."
  },
  {
    "id": "bank_sc_009",
    "type": "sentence_completion",
    "question": "Many species of frogs are disappearing rapidly _____ .",
    "options": {
      "A": "since a deadly fungal disease has spread worldwide",
      "B": "although their natural habitats have been carefully protected",
      "C": "in case their populations recover in the coming years",
      "D": "so that new species can occupy their habitats",
      "E": "as they are among the oldest vertebrates on Earth"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Since = çünkü (neden)",
    "trapWarning": "B şıkkı zıtlık kurar ama neden açıklamaz; C ve D mantıksız bir amaç bildirir; E şıkkı ise yok olmaya neden değildir.",
    "explanation": "Kurbağaların hızla yok olmasının nedeni ölümcül bir mantar hastalığının yayılmasıdır (A şıkkı)."
  },
  {
    "id": "bank_sc_010",
    "type": "sentence_completion",
    "question": "It was not until the invention of the microscope _____ .",
    "options": {
      "A": "when scientists began to study cells in detail",
      "B": "that scientists were able to observe bacteria directly",
      "C": "because lenses had been used since ancient times",
      "D": "scientists had already identified most diseases",
      "E": "which allowed doctors to treat infections more effectively"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "It was not until ... that ...",
    "trapWarning": "Kalıp 'that' ile tamamlanır; 'when' (A şıkkı) ya da 'which' (E şıkkı) yapıyı bozar. C ve D anlamsal olarak da bağlanmaz.",
    "explanation": "It was not until X that Y = ancak X'ten sonra Y oldu: mikroskop icat edildikten sonra bakteriler doğrudan gözlemlenebildi."
  },
  {
    "id": "bank_sc_011",
    "type": "sentence_completion",
    "question": "The company has decided to move its factory abroad _____ .",
    "options": {
      "A": "even though labour costs there are considerably lower",
      "B": "now that production costs at home have risen sharply",
      "C": "until the government lowers taxes on imported goods",
      "D": "whereas most of its customers live in the home country",
      "E": "unless it can find enough skilled workers abroad"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Now that = madem ki / -dığına göre (neden)",
    "trapWarning": "A şıkkı ince tuzaktır: 'even though' zıtlık bildirir ama düşük işçilik maliyeti taşınmayı destekler, zıtlık oluşmaz. C, D ve E anlamca bağlanmaz.",
    "explanation": "Yurtiçi maliyetlerin artması fabrikayı taşıma kararının mantıklı nedenidir (B şıkkı)."
  },
  {
    "id": "bank_sc_012",
    "type": "sentence_completion",
    "question": "Just as the steam engine transformed manufacturing in the nineteenth century, _____ .",
    "options": {
      "A": "factory workers often faced dangerous working conditions",
      "B": "artificial intelligence is now reshaping many industries",
      "C": "the first railways were built in Britain in the 1820s",
      "D": "electricity had not yet been used in most homes",
      "E": "many traditional crafts disappeared within a few decades"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Just as ... (tıpkı ... gibi) paralellik",
    "trapWarning": "A, C, D ve E aynı dönemden bilgiler verir; Just as ise bugüne ait paralel bir dönüşüm ister.",
    "explanation": "Buhar makinesi üretimi dönüştürdüğü gibi yapay zeka da bugün birçok sektörü yeniden şekillendiriyor (B şıkkı)."
  },
  {
    "id": "bank_sc_013",
    "type": "sentence_completion",
    "question": "Despite having one of the highest incomes per person in the world, _____ .",
    "options": {
      "A": "the country attracts many workers from neighbouring states",
      "B": "the country invests heavily in education and research",
      "C": "the country still struggles with high levels of inequality",
      "D": "its citizens enjoy free access to healthcare and education",
      "E": "its economy depends largely on oil and gas exports"
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "Despite + V-ing → beklenmedik sonuç",
    "trapWarning": "A, B ve D yüksek gelirin doğal sonuçlarıdır, zıtlık kurmaz; E şıkkı ise zıtlık değil ek bilgidir.",
    "explanation": "Yüksek gelire rağmen eşitsizlikle mücadele etmesi beklenmedik bir durumdur; Despite bunu ister (C şıkkı)."
  },
  {
    "id": "bank_sc_014",
    "type": "sentence_completion",
    "question": "_____ that he had to be taken to hospital after the marathon.",
    "options": {
      "A": "He was so tired and dehydrated",
      "B": "Although he had trained for months",
      "C": "He was such an experienced runner",
      "D": "He ran the race more slowly",
      "E": "It was such a cool and pleasant day"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "so + sıfat + that (sonuç)",
    "trapWarning": "C ve E 'such ... that' yapısını doğru kurar ama anlam olarak hastaneye kaldırılmayı açıklamaz; B ve D yapıyı tamamlamaz.",
    "explanation": "O kadar yorgun ve susuzdu ki hastaneye kaldırılması gerekti (A şıkkı)."
  },
  {
    "id": "bank_sc_015",
    "type": "sentence_completion",
    "question": "As long as the central bank keeps interest rates low, _____ .",
    "options": {
      "A": "inflation fell sharply during the last financial crisis",
      "B": "borrowing will remain attractive for businesses and consumers",
      "C": "it would have prevented the collapse of several banks",
      "D": "the economy had grown faster than most experts expected",
      "E": "savers have always preferred to keep their money in banks"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "As long as (-dığı sürece) + Present → will",
    "trapWarning": "A, C, D ve E zaman uyumunu bozar; koşul cümlesi gelecek zamanlı bir sonuç ister.",
    "explanation": "Faizler düşük kaldığı sürece borçlanma cazip olmaya devam edecek (B şıkkı)."
  },
  {
    "id": "bank_sc_016",
    "type": "sentence_completion",
    "question": "Scientists are developing drought-resistant crops _____ .",
    "options": {
      "A": "because rainfall has increased in most farming regions",
      "B": "so that farmers can maintain yields as the climate gets drier",
      "C": "although droughts have become more frequent in recent years",
      "D": "since most crops already need very little water",
      "E": "unless farmers choose traditional varieties instead"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Amaç: so that",
    "trapWarning": "C şıkkı ince tuzaktır: kuraklığın artması bir neden olurdu, zıtlık değil. A ve D çelişkili bilgiler verir; E şıkkı ise mantıksızdır.",
    "explanation": "Kuraklığa dayanıklı ürün geliştirmenin amacı iklim kurudukça verimi korumaktır (B şıkkı)."
  },
  {
    "id": "bank_sc_017",
    "type": "sentence_completion",
    "question": "No sooner had the minister announced the new tax _____ .",
    "options": {
      "A": "when thousands of people protested in the capital",
      "B": "than thousands of people took to the streets in protest",
      "C": "that the opposition parties criticised the decision",
      "D": "so the government lost much of its public support",
      "E": "but most economists supported the new policy"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "No sooner ... than",
    "trapWarning": "A şıkkı ince tuzaktır: 'when' Hardly/Scarcely ile kullanılır, No sooner ile değil. C, D ve E yapıyı tamamlamaz.",
    "explanation": "No sooner had ... than: vergiyi açıklar açıklamaz binlerce kişi sokağa döküldü (B şıkkı)."
  },
  {
    "id": "bank_sc_018",
    "type": "sentence_completion",
    "question": "Whereas traditional cameras capture light on film, _____ .",
    "options": {
      "A": "professional photographers still prefer them for artistic work",
      "B": "digital cameras convert it into electronic signals",
      "C": "they have become less popular over the past two decades",
      "D": "film must be developed in a dark room before printing",
      "E": "both types of camera rely on a lens to focus light"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Whereas (karşılaştırma)",
    "trapWarning": "A ve C yine geleneksel kameralardan bahseder; D şıkkı ek bilgi verir; E şıkkı benzerlik kurar, karşıtlık değil.",
    "explanation": "Whereas iki şeyi karşılaştırır: geleneksel kameralar ışığı filme kaydeder, dijital kameralar elektrik sinyaline çevirir (B şıkkı)."
  },
  {
    "id": "bank_sc_019",
    "type": "sentence_completion",
    "question": "The museum will reopen to the public _____ .",
    "options": {
      "A": "as soon as the restoration work has been completed",
      "B": "after the restoration work had been finished",
      "C": "while the restoration work was being planned",
      "D": "because the restoration work was cancelled last year",
      "E": "although the restoration work will start next month"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Zaman uyumu: will + as soon as + Present Perfect",
    "trapWarning": "B ve C geçmiş zamanla uyumsuzdur; D ve E anlamsal olarak çelişir.",
    "explanation": "Gelecek zaman bildiren ana cümle, zaman bağlacından sonra Present/Present Perfect ister: restorasyon tamamlanır tamamlanmaz (A şıkkı)."
  },
  {
    "id": "bank_sc_020",
    "type": "sentence_completion",
    "question": "If governments had acted on early warnings about the virus, _____ .",
    "options": {
      "A": "many lives could have been saved",
      "B": "many lives can be saved in the future",
      "C": "they will need better hospitals",
      "D": "the virus spreads more slowly",
      "E": "they had warned the public too late"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Type 3 koşul: had V3 → could have V3",
    "trapWarning": "B, C ve D zaman uyumunu bozar; E şıkkı koşulun sonucu değildir.",
    "explanation": "If + had V3 yapısının sonucu would/could have V3 olur: birçok hayat kurtarılabilirdi (A şıkkı)."
  },
  {
    "id": "bank_sc_021",
    "type": "sentence_completion",
    "question": "Even though e-books are cheaper and easier to carry, _____ .",
    "options": {
      "A": "sales of e-readers have increased steadily in recent years",
      "B": "many readers still prefer the feel of a printed book",
      "C": "students can store hundreds of books on a single device",
      "D": "publishers have started to release more digital titles",
      "E": "they allow readers to adjust the size of the text"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Even though (+ / -)",
    "trapWarning": "A, C, D ve E e-kitapların avantajını sürdürür; zıtlık oluşturan tek şık B'dir.",
    "explanation": "E-kitaplar ucuz ve taşınabilir olsa da birçok okur basılı kitabı tercih ediyor (B şıkkı)."
  },
  {
    "id": "bank_sc_022",
    "type": "sentence_completion",
    "question": "_____ , the patient was allowed to go home the next day.",
    "options": {
      "A": "Since the operation had gone smoothly",
      "B": "Although the doctors had expected complications",
      "C": "Unless the infection spread to other organs",
      "D": "Before the surgeons decided to operate",
      "E": "While the hospital was short of beds"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Neden: Since",
    "trapWarning": "B şıkkı zıtlık bildirir ama anlamı sonuçla zayıf bağlanır; C şıkkı koşul ve zaman uyumsuzdur; D ve E taburcu olmanın nedeni değildir.",
    "explanation": "Ameliyat sorunsuz geçtiği için hasta ertesi gün eve gönderildi (A şıkkı)."
  },
  {
    "id": "bank_sc_023",
    "type": "sentence_completion",
    "question": "Not only did the earthquake destroy thousands of homes, _____ .",
    "options": {
      "A": "but it also cut off water and power to the entire region",
      "B": "because it struck in the middle of the night",
      "C": "although most buildings had been built to strict codes",
      "D": "so the government declared a state of emergency",
      "E": "and many residents had left the city before it happened"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Not only ... but also",
    "trapWarning": "Devrik 'Not only did ...' yapısı 'but (also)' ile tamamlanır. Diğer bağlaçlar yapıyı bozar.",
    "explanation": "Deprem yalnızca binlerce evi yıkmakla kalmadı, tüm bölgenin su ve elektriğini de kesti (A şıkkı)."
  },
  {
    "id": "bank_sc_024",
    "type": "sentence_completion",
    "question": "Rather than relying on a single supplier, _____ .",
    "options": {
      "A": "the company has always bought its parts from one factory",
      "B": "many firms now buy their materials from several countries",
      "C": "prices of raw materials have risen sharply this year",
      "D": "the supplier increased its prices by twenty percent",
      "E": "most small businesses cannot afford to buy in bulk"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Rather than (… yerine) + mantıksal karşıtlık",
    "trapWarning": "A şıkkı tam tersini söyler; C, D ve E ana cümle öznesi olarak tek tedarikçiye güvenmeme eylemini yapacak bir kurum vermez.",
    "explanation": "Tek tedarikçiye güvenmek yerine birçok firma artık malzemelerini farklı ülkelerden alıyor (B şıkkı)."
  },
  {
    "id": "bank_sc_025",
    "type": "sentence_completion",
    "question": "The ancient manuscript was so fragile _____ .",
    "options": {
      "A": "because it had been kept in a dry, dark room",
      "B": "that researchers had to scan it without touching it",
      "C": "which is why it was stored in a museum for centuries",
      "D": "since it was written on paper made from papyrus",
      "E": "although it was more than two thousand years old"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "so + sıfat + that",
    "trapWarning": "'so fragile' yapısı 'that' ile sonuç ister; A, C, D ve E yapıyı tamamlamaz.",
    "explanation": "El yazması o kadar kırılgandı ki araştırmacılar sayfalara dokunmadan taramak zorunda kaldı (B şıkkı)."
  },
  {
    "id": "bank_sc_026",
    "type": "sentence_completion",
    "question": "Provided that the weather remains stable, _____ .",
    "options": {
      "A": "the climbers reached the summit early in the morning",
      "B": "the climbers should reach the summit by Friday",
      "C": "the expedition had been postponed twice before",
      "D": "the mountain is one of the most dangerous in the region",
      "E": "the climbers would have turned back at the last camp"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Provided that (koşuluyla) + Present → modal/will",
    "trapWarning": "A ve C geçmiş zamanla koşul kurmaz; D şıkkı koşula bağlı bir sonuç değildir; E şıkkı Type 3 sonucu olup zaman uyumunu bozar.",
    "explanation": "Hava sabit kalırsa tırmanıcılar cuma gününe kadar zirveye ulaşmalı (B şıkkı)."
  },
  {
    "id": "bank_sc_027",
    "type": "sentence_completion",
    "question": "Although the region is rich in natural resources, _____ .",
    "options": {
      "A": "most of its people live in poverty",
      "B": "it exports large amounts of copper and gold",
      "C": "foreign companies have invested heavily there",
      "D": "its economy has grown rapidly in recent years",
      "E": "it produces much of the country's electricity"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Although (+ / -)",
    "trapWarning": "B, C, D ve E doğal kaynak zenginliğiyle aynı yönde ilerler.",
    "explanation": "Bölge kaynak bakımından zengin (+) olsa da halkının çoğu yoksulluk içinde (-) (A şıkkı)."
  },
  {
    "id": "bank_sc_028",
    "type": "sentence_completion",
    "question": "The exhibition attracted far more visitors than expected, _____ .",
    "options": {
      "A": "which is why the gallery has decided to extend it by a month",
      "B": "because it was poorly advertised in the local newspapers and radio",
      "C": "although the museum is located in the city centre",
      "D": "so the organisers had to close it down after only a week",
      "E": "unless the tickets are sold at a lower price"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Sonuç bildiren 'which is why'",
    "trapWarning": "B ve D beklenenden fazla ziyaretçiyle çelişir; C şıkkı mantıklı bir zıtlık kurmaz; E şıkkı ise zaman uyumsuz bir koşuldur.",
    "explanation": "Beklenenden fazla ziyaretçi geldiği için galeri sergiyi bir ay uzatmaya karar verdi (A şıkkı)."
  },
  {
    "id": "bank_sc_029",
    "type": "sentence_completion",
    "question": "Before the printing press was invented, _____ .",
    "options": {
      "A": "books have been copied by hand in monasteries",
      "B": "books had to be copied by hand, which took months",
      "C": "most people are able to read and write",
      "D": "books will be much cheaper than they are today",
      "E": "newspapers were printed every morning in large numbers"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Geçmişte bir olaydan önce: Past / Past Perfect",
    "trapWarning": "A, C ve D zaman uyumunu bozar; E şıkkı ise anlamca matbaadan önceki dönemle çelişir.",
    "explanation": "Matbaadan önce kitaplar elle kopyalanmak zorundaydı (B şıkkı)."
  },
  {
    "id": "bank_sc_030",
    "type": "sentence_completion",
    "question": "_____ , scientists believe that the comet will pass safely by Earth.",
    "options": {
      "A": "Although it will come closer than any comet in recent history",
      "B": "Because it is expected to strike the Moon instead of the Earth",
      "C": "Since it has already collided with a nearby asteroid",
      "D": "Unless its orbit is changed by the gravity of a nearby planet",
      "E": "As it is the largest comet ever recorded"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Although: tehlike gibi görünen durum ↔ güvenli geçiş",
    "trapWarning": "B ve C anlamsal olarak çelişir; D şıkkı koşul bildirir ama ana cümlenin güvenli geçiş iddiasıyla yönü ters olur; E şıkkı nedensellik kurmaz.",
    "explanation": "Son dönemdeki herhangi bir kuyruklu yıldızdan daha yakın gelecek olmasına rağmen güvenle geçecek (A şıkkı)."
  },
  {
    "id": "bank_sc_031",
    "type": "sentence_completion",
    "question": "The government introduced a sugar tax _____ .",
    "options": {
      "A": "because sugary drinks had become much less popular",
      "B": "in an effort to reduce obesity among children",
      "C": "even though obesity rates had been rising for years",
      "D": "so that soft drink companies could increase their profits",
      "E": "whereas most fruit juices contain natural sugar"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Amaç: in an effort to",
    "trapWarning": "C şıkkı ince tuzaktır: artan obezite vergiye neden olur, zıtlık değil. A ve D mantıksızdır; E şıkkı konuyu değiştirir.",
    "explanation": "Şeker vergisinin amacı çocuklar arasında obeziteyi azaltmaktır (B şıkkı)."
  },
  {
    "id": "bank_sc_032",
    "type": "sentence_completion",
    "question": "Once a language loses its last native speaker, _____ .",
    "options": {
      "A": "it usually spreads to neighbouring regions",
      "B": "it becomes the official language of the country",
      "C": "much of the knowledge it carried may be lost forever",
      "D": "linguists had recorded thousands of its words",
      "E": "its grammar becomes simpler and easier to learn"
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "Once (-dığında / -ınca) + sonuç",
    "trapWarning": "A ve B anlamsal olarak çelişir; D şıkkı zaman uyumunu bozar; E şıkkı ise metinde mantıksız bir sonuçtur.",
    "explanation": "Bir dil son anadil konuşucusunu kaybettiğinde taşıdığı bilgilerin çoğu sonsuza dek kaybolabilir (C şıkkı)."
  },
  {
    "id": "bank_sc_033",
    "type": "sentence_completion",
    "question": "Such was the demand for the new smartphone _____ .",
    "options": {
      "A": "that stores ran out of stock within hours",
      "B": "because it had a larger screen than earlier models",
      "C": "when it was launched in more than fifty countries",
      "D": "although its price was higher than its rivals",
      "E": "which made the company very profitable"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Such + be + özne ... that",
    "trapWarning": "Devrik 'Such was ...' yapısı 'that' ile sonuç ister.",
    "explanation": "Yeni telefona talep öyle yüksekti ki mağazalarda stoklar saatler içinde tükendi (A şıkkı)."
  },
  {
    "id": "bank_sc_034",
    "type": "sentence_completion",
    "question": "Since the factory closed down last year, _____ .",
    "options": {
      "A": "unemployment in the town will rise sharply",
      "B": "many young people have left the town in search of work",
      "C": "the town had been the region's main industrial centre",
      "D": "its workers were offered jobs in a nearby city",
      "E": "the river is going to become much cleaner"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Since + Past Simple → Present Perfect",
    "trapWarning": "A ve E gelecek, C past perfect, D ise past simple kullanarak 'since' yapısıyla zaman uyumunu bozar.",
    "explanation": "Since + V2 (closed), ana cümlede Present Perfect: geçen yıldan beri birçok genç kasabayı terk etti (B şıkkı)."
  },
  {
    "id": "bank_sc_035",
    "type": "sentence_completion",
    "question": "Many people continue to smoke _____ .",
    "options": {
      "A": "because they are fully aware of how dangerous it is",
      "B": "despite knowing that it causes serious diseases",
      "C": "so that they can protect their lungs",
      "D": "since smoking is now banned in most public places",
      "E": "unless cigarettes become cheaper"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Despite + V-ing",
    "trapWarning": "A şıkkı mantıksal olarak ters; C ve D çelişki yaratır; E şıkkı zaman ve anlam olarak uyumsuz.",
    "explanation": "Ciddi hastalıklara neden olduğunu bilmelerine rağmen birçok kişi sigara içmeye devam ediyor (B şıkkı)."
  },
  {
    "id": "bank_sc_036",
    "type": "sentence_completion",
    "question": "_____ , the team managed to finish the project on time.",
    "options": {
      "A": "Since they had plenty of time and resources",
      "B": "Even though two of its members fell ill",
      "C": "Because the deadline had been extended",
      "D": "As the client had approved every stage",
      "E": "Now that the budget had been increased"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "'managed to' → zorluk + zıtlık",
    "trapWarning": "'Managed to' bir zorluğa rağmen başarıyı vurgular. A, C, D ve E işi kolaylaştıran nedenlerdir ve bu vurguyla uyuşmaz.",
    "explanation": "İki üyesi hastalanmasına rağmen ekip projeyi zamanında bitirmeyi başardı (B şıkkı)."
  },
  {
    "id": "bank_sc_037",
    "type": "sentence_completion",
    "question": "If the Earth's atmosphere did not contain greenhouse gases, _____ .",
    "options": {
      "A": "the planet would be far too cold to support most life",
      "B": "temperatures will rise much faster than they do now",
      "C": "the oceans would have absorbed more carbon dioxide",
      "D": "the planet had been warmer in the distant past",
      "E": "sunlight is reflected back into space by the clouds"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Type 2 koşul: did not → would",
    "trapWarning": "B, D ve E zaman uyumunu bozar; C şıkkı ise Type 3 sonucudur.",
    "explanation": "If + V2 yapısı would + V1 ister: sera gazları olmasaydı gezegen yaşam için fazla soğuk olurdu (A şıkkı)."
  },
  {
    "id": "bank_sc_038",
    "type": "sentence_completion",
    "question": "The more people use public transport, _____ .",
    "options": {
      "A": "the fewer cars there will be on city roads",
      "B": "the city has built several new metro lines",
      "C": "most commuters prefer to drive to work",
      "D": "the more expensive cars became last year",
      "E": "the faster trains travelled in the past"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "The more ..., the more/fewer ...",
    "trapWarning": "B ve C kalıbı tamamlamaz; D ve E kalıba uyar ama zaman ve anlam olarak bağlanmaz.",
    "explanation": "İnsanlar toplu taşımayı ne kadar çok kullanırsa yollarda o kadar az araba olur (A şıkkı)."
  },
  {
    "id": "bank_sc_039",
    "type": "sentence_completion",
    "question": "Whether or not the treaty is signed, _____ .",
    "options": {
      "A": "the two countries had been at war with each other for decades",
      "B": "tensions between the two countries are likely to remain",
      "C": "it would have ended the conflict between them immediately",
      "D": "the leaders met secretly last year",
      "E": "both sides signed it in the capital"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Whether or not (olsun ya da olmasın)",
    "trapWarning": "A ve D geçmişe ait bilgi verir, koşulla bağlanmaz; C şıkkı Type 3 sonucudur; E şıkkı ise 'whether or not' ile çelişir.",
    "explanation": "Anlaşma imzalansın ya da imzalanmasın gerginlikler muhtemelen sürecek (B şıkkı)."
  },
  {
    "id": "bank_sc_040",
    "type": "sentence_completion",
    "question": "Just as children learn by imitating adults, _____ .",
    "options": {
      "A": "adults rarely change their habits after the age of thirty",
      "B": "young animals acquire many skills by copying their parents",
      "C": "schools have started to teach children through games",
      "D": "many parents spend less time with their children",
      "E": "children learn languages faster than adults do"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Just as: paralellik",
    "trapWarning": "A, C, D ve E konuyla ilgilidir ama 'taklit ederek öğrenme' paralelliğini kurmaz.",
    "explanation": "Çocuklar yetişkinleri taklit ederek öğrendiği gibi yavru hayvanlar da ebeveynlerini kopyalayarak öğrenir (B şıkkı)."
  },
  {
    "id": "bank_sc_041",
    "type": "sentence_completion",
    "question": "Because the drug had only been tested on adults, _____ .",
    "options": {
      "A": "it was quickly approved for use in children",
      "B": "doctors were cautious about prescribing it to children",
      "C": "its side effects were well known in all age groups",
      "D": "children had responded well to the treatment",
      "E": "it is the most widely used drug in the world"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Because: neden-sonuç",
    "trapWarning": "A ve C sonuçla çelişir; D şıkkı ise mantıksal olarak imkansızdır; E şıkkı ilgisizdir.",
    "explanation": "İlaç yalnızca yetişkinlerde test edildiği için doktorlar çocuklara yazmakta temkinliydi (B şıkkı)."
  },
  {
    "id": "bank_sc_042",
    "type": "sentence_completion",
    "question": "The researchers will publish their findings _____ .",
    "options": {
      "A": "as soon as the data has been checked by an independent team",
      "B": "after the data had been checked by an independent team",
      "C": "while the independent team was checking the data",
      "D": "although the data has been checked by an independent team",
      "E": "because the data was rejected by an independent team"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "will + as soon as + Present Perfect",
    "trapWarning": "B ve C zaman uyumunu bozar; D şıkkı zıtlık kurar ama anlam yoktur; E şıkkı ise yayımlamaya engeldir.",
    "explanation": "Bulgular, veriler bağımsız bir ekip tarafından kontrol edilir edilmez yayımlanacak (A şıkkı)."
  },
  {
    "id": "bank_sc_043",
    "type": "sentence_completion",
    "question": "_____ , most of the forest had already been destroyed.",
    "options": {
      "A": "When firefighters finally arrived on the scene",
      "B": "As long as the rain continues to fall",
      "C": "Unless more firefighters are sent to the area",
      "D": "Before the fire starts spreading to nearby towns",
      "E": "Since the forest is protected by law"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Past Perfect ↔ When + Past Simple",
    "trapWarning": "B, C, D ve E şimdiki/geniş zamanla Past Perfect'e bağlanmaz.",
    "explanation": "İtfaiyeciler nihayet geldiğinde ormanın çoğu çoktan yok olmuştu (A şıkkı)."
  },
  {
    "id": "bank_sc_044",
    "type": "sentence_completion",
    "question": "The bridge was closed to heavy vehicles _____ .",
    "options": {
      "A": "after engineers discovered cracks in its supports",
      "B": "because it had just been fully repaired and repainted",
      "C": "so that more trucks could use it",
      "D": "although it was too weak to carry such heavy loads",
      "E": "unless the cracks are repaired"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Zaman/neden: after",
    "trapWarning": "B ve C anlamsal olarak çelişir; D şıkkı zıtlık kurar ama mantıksızdır; E şıkkı zaman uyumsuzdur.",
    "explanation": "Mühendisler destek kolonlarında çatlak bulduktan sonra köprü ağır araçlara kapatıldı (A şıkkı)."
  },
  {
    "id": "bank_sc_045",
    "type": "sentence_completion",
    "question": "Little did the explorers know _____ .",
    "options": {
      "A": "that the river they were following led nowhere",
      "B": "because the river they followed led to the sea",
      "C": "when they reached the river after weeks",
      "D": "although the river had been mapped before",
      "E": "whether the river was safe to drink"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Devrik 'Little did ... know that'",
    "trapWarning": "'Know' fiili bir nesne cümlesi ister; 'that' bu yapının en doğal tamamlayıcısıdır. B, C ve D yapıyı tamamlamaz; E şıkkı dilbilgisi olarak mümkün ama anlamsal vurgu taşımaz.",
    "explanation": "Kaşifler takip ettikleri nehrin hiçbir yere çıkmadığını pek bilmiyorlardı (A şıkkı)."
  },
  {
    "id": "bank_sc_046",
    "type": "sentence_completion",
    "question": "While wind power is clean and renewable, _____ .",
    "options": {
      "A": "it produces no greenhouse gases during operation",
      "B": "its output depends heavily on the weather",
      "C": "many countries plan to build more wind farms",
      "D": "it is cheaper than coal in many regions",
      "E": "it creates thousands of new jobs every year"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "While (zıtlık)",
    "trapWarning": "A, C, D ve E rüzgar enerjisinin avantajlarını sürdürür.",
    "explanation": "Rüzgar enerjisi temiz ve yenilenebilir olsa da üretimi büyük ölçüde havaya bağlıdır (B şıkkı)."
  },
  {
    "id": "bank_sc_047",
    "type": "sentence_completion",
    "question": "_____ , the city would not have been able to host the Olympics.",
    "options": {
      "A": "If it hadn't received funding from the national government",
      "B": "As it receives funding from the national government",
      "C": "Unless it receives funding from the national government",
      "D": "Because it had received funding from the national government",
      "E": "Although it received funding from the national government"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Type 3: If + had (not) V3",
    "trapWarning": "B, C ve E zaman uyumunu bozar; D şıkkı anlamca ters yöndedir.",
    "explanation": "Ulusal hükümetten fon almasaydı şehir olimpiyatlara ev sahipliği yapamazdı (A şıkkı)."
  },
  {
    "id": "bank_sc_048",
    "type": "sentence_completion",
    "question": "Most experts agree that the economy will recover _____ .",
    "options": {
      "A": "only if consumer confidence improves",
      "B": "because consumer confidence fell last year",
      "C": "even though consumer confidence improves",
      "D": "whereas consumer confidence had improved",
      "E": "so that consumer confidence improved"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Only if (ancak ... olursa)",
    "trapWarning": "B şıkkı neden olarak çelişir; C ve E mantıksızdır; D şıkkı zaman uyumunu bozar.",
    "explanation": "Uzmanlar ekonominin ancak tüketici güveni artarsa toparlanacağı konusunda hemfikir (A şıkkı)."
  },
  {
    "id": "bank_sc_049",
    "type": "sentence_completion",
    "question": "The more carefully you plan a trip, _____ .",
    "options": {
      "A": "the less likely you are to face problems",
      "B": "you will face many unexpected problems",
      "C": "the more problems you faced last year",
      "D": "the most expensive it will become",
      "E": "you are going to spend more money"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "The + comparative ..., the + comparative ...",
    "trapWarning": "B ve E kalıbı tamamlamaz; C şıkkı zaman uyumunu, D ise karşılaştırma yapısını bozar.",
    "explanation": "Bir geziyi ne kadar dikkatli planlarsanız sorun yaşama olasılığınız o kadar azalır (A şıkkı)."
  },
  {
    "id": "bank_sc_050",
    "type": "sentence_completion",
    "question": "In case the main power supply fails, _____ .",
    "options": {
      "A": "the hospital has a backup generator",
      "B": "the hospital lost power for six hours",
      "C": "the generator had broken down twice",
      "D": "patients were moved to another building",
      "E": "the electricity bill will be much higher"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "In case (… ihtimaline karşı)",
    "trapWarning": "B, C ve D geçmiş zamanda olmuş olayları anlatır; E şıkkı ise önlem değildir.",
    "explanation": "Ana elektrik kesilir diye hastanenin yedek jeneratörü var (A şıkkı)."
  },
  {
    "id": "bank_sc_051",
    "type": "sentence_completion",
    "question": "Although bees are best known for producing honey, _____ .",
    "options": {
      "A": "their most valuable role is pollinating crops",
      "B": "they store honey in wax cells inside the hive",
      "C": "beekeepers collect honey several times a year",
      "D": "honey has been used as a medicine for centuries",
      "E": "some types of honey are more expensive than others"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Although: beklenen bilgi ↔ asıl önemli bilgi",
    "trapWarning": "B, C, D ve E yine bal üretimiyle ilgilidir ve zıtlık kurmaz.",
    "explanation": "Arılar en çok bal üretimiyle bilinse de en değerli rolleri tozlaşmadır (A şıkkı)."
  },
  {
    "id": "bank_sc_052",
    "type": "sentence_completion",
    "question": "_____ , the company's profits have fallen for three years in a row.",
    "options": {
      "A": "Because demand for its products has risen steadily",
      "B": "Despite a sharp increase in sales across Asia",
      "C": "Since it opened twenty new stores last year",
      "D": "As its main competitor went out of business",
      "E": "Now that labour costs have fallen considerably"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Despite: beklenmedik sonuç",
    "trapWarning": "A, D ve E kârın artması için nedenlerdir, düşüşle bağlanmaz; C şıkkı de olumlu bir gelişmedir.",
    "explanation": "Asya'daki satışlar keskin şekilde artmasına rağmen şirketin kârı üç yıldır düşüyor (B şıkkı)."
  },
  {
    "id": "bank_sc_053",
    "type": "sentence_completion",
    "question": "The patient's condition improved so rapidly _____ .",
    "options": {
      "A": "that she was discharged after only two days",
      "B": "because the doctors had prescribed new medicine",
      "C": "although the treatment had serious side effects",
      "D": "when she was transferred to a larger hospital",
      "E": "since the surgery had been a complete success"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "so + zarf + that",
    "trapWarning": "'so rapidly' yapısı 'that' ile sonuç ister; diğer bağlaçlar yapıyı tamamlamaz.",
    "explanation": "Hastanın durumu o kadar hızlı düzeldi ki sadece iki gün sonra taburcu edildi (A şıkkı)."
  },
  {
    "id": "bank_sc_054",
    "type": "sentence_completion",
    "question": "Unless the two sides reach an agreement by Friday, _____ .",
    "options": {
      "A": "the strike had ended after three weeks",
      "B": "the workers went back to their jobs",
      "C": "the strike will continue into next week",
      "D": "the company would have lost millions",
      "E": "the union leaders signed the contract"
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "Unless + Present → will",
    "trapWarning": "A, B ve E geçmiş zamanlıdır; D şıkkı Type 3 sonucudur.",
    "explanation": "Cumaya kadar anlaşmaya varılmazsa grev gelecek haftaya uzayacak (C şıkkı)."
  },
  {
    "id": "bank_sc_055",
    "type": "sentence_completion",
    "question": "By the end of this century, _____ .",
    "options": {
      "A": "sea levels rose by about twenty centimetres",
      "B": "sea levels may have risen by more than a metre",
      "C": "sea levels have risen by about twenty centimetres",
      "D": "sea levels had already started to rise",
      "E": "sea levels were rising faster than ever"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "By + gelecek zaman → Future Perfect / modal + have V3",
    "trapWarning": "A, C, D ve E geçmiş ya da şimdiki zamanı anlatır; 'by the end of this century' gelecekte tamamlanmış eylem ister.",
    "explanation": "Bu yüzyılın sonuna kadar deniz seviyesi bir metreden fazla yükselmiş olabilir (B şıkkı)."
  },
  {
    "id": "bank_sc_056",
    "type": "sentence_completion",
    "question": "Many athletes train at high altitudes _____ .",
    "options": {
      "A": "because the air there contains more oxygen",
      "B": "so that their bodies produce more red blood cells",
      "C": "even though it helps them perform better",
      "D": "unless they are preparing for races in the mountains",
      "E": "as long as they avoid competing in long-distance races"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Amaç: so that",
    "trapWarning": "A şıkkı bilgisel olarak yanlıştır (yüksekte oksijen azdır); C şıkkı zıtlık kurar ama mantıksızdır; D ve E anlamsızdır.",
    "explanation": "Sporcular vücutlarının daha fazla kırmızı kan hücresi üretmesi için yüksek rakımda çalışır (B şıkkı)."
  },
  {
    "id": "bank_sc_057",
    "type": "sentence_completion",
    "question": "Hardly had the concert begun _____ .",
    "options": {
      "A": "than the lights went out",
      "B": "when the power suddenly failed",
      "C": "that the audience started to leave",
      "D": "before it was an hour long",
      "E": "so the band played louder"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Hardly ... when",
    "trapWarning": "A şıkkı ince tuzaktır: 'than' No sooner ile kullanılır. C, D ve E yapıyı tamamlamaz.",
    "explanation": "Hardly/Scarcely ... when kalıbı: konser başlar başlamaz elektrik kesildi (B şıkkı)."
  },
  {
    "id": "bank_sc_058",
    "type": "sentence_completion",
    "question": "Coral reefs cover less than one percent of the ocean floor, _____ .",
    "options": {
      "A": "yet they support about a quarter of all marine species",
      "B": "so they are home to very few species of fish",
      "C": "because they grow only in very warm waters",
      "D": "and they are found mainly in the Pacific Ocean",
      "E": "since they are made of the skeletons of tiny animals"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Yet (ama, yine de): şaşırtıcı zıtlık",
    "trapWarning": "B şıkkı mantıksal sonucu ters kurar; C, D ve E ek bilgi verir ama 'less than one percent' vurgusuyla zıtlık kurmaz.",
    "explanation": "Mercan resifleri okyanus tabanının yüzde birinden azını kaplar ama deniz türlerinin dörtte birini barındırır (A şıkkı)."
  },
  {
    "id": "bank_sc_059",
    "type": "sentence_completion",
    "question": "_____ , the old tram system was brought back into service.",
    "options": {
      "A": "Since traffic congestion in the city had become unbearable",
      "B": "Although the city had too few cars on its roads",
      "C": "Unless the city builds a new underground railway",
      "D": "Because the trams were too slow and unreliable",
      "E": "While the city was planning to close all its stations"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Since: neden",
    "trapWarning": "B ve D tramvayların geri dönmesine neden olmaz; C şıkkı zaman uyumsuzdur; E şıkkı çelişkilidir.",
    "explanation": "Trafik sıkışıklığı dayanılmaz hale geldiği için eski tramvay sistemi yeniden hizmete alındı (A şıkkı)."
  },
  {
    "id": "bank_sc_060",
    "type": "sentence_completion",
    "question": "Were the government to raise taxes on fuel, _____ .",
    "options": {
      "A": "public transport would probably become more popular",
      "B": "drivers were already complaining about the high prices",
      "C": "fuel prices have increased by ten percent",
      "D": "the economy had grown more slowly than in previous years",
      "E": "the government will lose the next election"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Devrik koşul: Were + S + to V → would",
    "trapWarning": "B, C ve D geçmiş zaman kullanır; E şıkkı ise 'will' ile devrik Type 2 yapısına uymaz.",
    "explanation": "Were ... to raise = If ... raised. Sonuç: toplu taşıma muhtemelen daha popüler olurdu (A şıkkı)."
  },
  {
    "id": "bank_sc_061",
    "type": "sentence_completion",
    "question": "As the population of the city grew, _____ .",
    "options": {
      "A": "the demand for housing increased sharply",
      "B": "house prices fell to their lowest level",
      "C": "many people moved to the countryside",
      "D": "the city will need more schools",
      "E": "the number of empty homes rose steadily"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "As (… dıkça): paralel değişim",
    "trapWarning": "B, C ve E nüfus artışıyla mantıksal olarak çelişir; D şıkkı zaman uyumunu bozar.",
    "explanation": "Şehrin nüfusu arttıkça konut talebi de keskin biçimde arttı (A şıkkı)."
  },
  {
    "id": "bank_sc_062",
    "type": "sentence_completion",
    "question": "Even if scientists find a cure for the disease, _____ .",
    "options": {
      "A": "it may take years before it is available to everyone",
      "B": "it was discovered by accident in a university laboratory",
      "C": "millions of people were saved by the new drug",
      "D": "the disease has already been wiped out in most countries",
      "E": "doctors had been searching for it for decades"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Even if (… olsa bile) + gelecek",
    "trapWarning": "B, C ve E geçmiş zamanlıdır; D şıkkı ise 'even if' ile çelişir.",
    "explanation": "Bilim insanları tedavi bulsa bile herkese ulaşması yıllar alabilir (A şıkkı)."
  },
  {
    "id": "bank_sc_063",
    "type": "sentence_completion",
    "question": "The ancient Egyptians preserved the bodies of the dead _____ .",
    "options": {
      "A": "because they believed in a life after death",
      "B": "although they had no knowledge of chemistry",
      "C": "so that the bodies would decay more quickly",
      "D": "unless the person had been a pharaoh",
      "E": "whereas the Greeks also practised mummification"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Because: neden",
    "trapWarning": "B şıkkı zıtlık kurar ama mantıksızdır; C şıkkı amaçla çelişir; D ve E anlamsal olarak bağlanmaz.",
    "explanation": "Eski Mısırlılar ölümden sonra yaşama inandıkları için ölülerin bedenlerini korurdu (A şıkkı)."
  },
  {
    "id": "bank_sc_064",
    "type": "sentence_completion",
    "question": "Not until the 1990s _____ .",
    "options": {
      "A": "was the internet widely used by the public",
      "B": "the internet was widely used by the public",
      "C": "the public has widely used the internet",
      "D": "did the public widely use the internet before",
      "E": "the internet had been widely used by the public"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Not until + devrik yapı",
    "trapWarning": "'Not until' cümle başında ana cümlenin devrik olmasını gerektirir. B, C ve E devrik değildir; D şıkkı ise devriktir ama 'before' anlamı bozar.",
    "explanation": "Not until ... yapısı: internet ancak 1990'larda halk tarafından yaygın kullanıldı (A şıkkı)."
  },
  {
    "id": "bank_sc_065",
    "type": "sentence_completion",
    "question": "Whereas earlier generations often stayed with one employer for life, _____ .",
    "options": {
      "A": "today's workers change jobs much more frequently",
      "B": "pensions were generous in most large companies",
      "C": "job security was an important value for them",
      "D": "many factories offered housing to their workers",
      "E": "they usually retired at the age of sixty-five"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Whereas: karşılaştırma",
    "trapWarning": "B, C, D ve E yine eski nesilden bahseder; karşılaştırmanın diğer tarafını vermez.",
    "explanation": "Önceki nesiller genelde hayat boyu tek işverende kalırken bugünün çalışanları çok daha sık iş değiştiriyor (A şıkkı)."
  },
  {
    "id": "bank_sc_066",
    "type": "sentence_completion",
    "question": "_____ that the meeting had to be postponed.",
    "options": {
      "A": "So many members were absent",
      "B": "Since most members were absent",
      "C": "Such few members attended",
      "D": "Although many members came",
      "E": "Many members were so absent"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "so many + isim + that",
    "trapWarning": "C şıkkı 'such few' yanlış kullanımdır (so few olmalı); E şıkkı 'so absent' anlamsızdır; B ve D 'that' ile tamamlanmaz.",
    "explanation": "O kadar çok üye yoktu ki toplantı ertelenmek zorunda kaldı (A şıkkı)."
  },
  {
    "id": "bank_sc_067",
    "type": "sentence_completion",
    "question": "The museum does not allow visitors to use flash photography _____ .",
    "options": {
      "A": "because strong light can damage old paintings",
      "B": "so that the paintings can be seen more clearly",
      "C": "although most paintings are protected by glass",
      "D": "as long as visitors pay an extra fee",
      "E": "unless the paintings were painted recently"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Because: yasağın nedeni",
    "trapWarning": "B şıkkı mantıksızdır; C şıkkı zıtlık kurar ama yasağı açıklamaz; D ve E anlamsız koşullardır.",
    "explanation": "Müze flaşa izin vermiyor çünkü güçlü ışık eski tablolara zarar verebilir (A şıkkı)."
  },
  {
    "id": "bank_sc_068",
    "type": "sentence_completion",
    "question": "After the dam was built, _____ .",
    "options": {
      "A": "farmers downstream will receive less water",
      "B": "the river had flooded the valley every spring",
      "C": "the valley upstream was turned into a large lake",
      "D": "engineers are designing a new spillway",
      "E": "fish populations have been growing rapidly"
    },
    "answer": "C",
    "difficulty": "İleri",
    "tacticUsed": "After + Past Simple → Past Simple",
    "trapWarning": "A ve D zaman uyumunu bozar; B şıkkı olaydan önceki durumu anlatır; E şıkkı present perfect ile 'after ... was built' bağlamında uyuşmaz.",
    "explanation": "Baraj inşa edildikten sonra yukarıdaki vadi büyük bir göle dönüştü (C şıkkı)."
  },
  {
    "id": "bank_sc_069",
    "type": "sentence_completion",
    "question": "However hard they tried, _____ .",
    "options": {
      "A": "the climbers could not reach the summit",
      "B": "the climbers reached the summit easily",
      "C": "the summit was reached in record time",
      "D": "the climbers will succeed next year",
      "E": "they have climbed higher than ever"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "However + sıfat/zarf (ne kadar ... olursa olsun)",
    "trapWarning": "B ve C 'ne kadar uğraşsalar da' yapısıyla çelişir; D ve E zaman uyumunu bozar.",
    "explanation": "Ne kadar uğraşsalar da tırmanıcılar zirveye ulaşamadı (A şıkkı)."
  },
  {
    "id": "bank_sc_070",
    "type": "sentence_completion",
    "question": "_____ , many plant species are able to survive in the desert.",
    "options": {
      "A": "Because the desert receives heavy rainfall every month",
      "B": "Although water is extremely scarce there",
      "C": "Since the soil is rich in nutrients and water",
      "D": "Unless they are watered regularly by farmers",
      "E": "As long as the temperature remains low"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Although: beklenmedik durum",
    "trapWarning": "A ve C bilgisel olarak yanlıştır; D ve E çölde mantıksız koşullardır.",
    "explanation": "Su son derece kıt olmasına rağmen birçok bitki türü çölde hayatta kalabiliyor (B şıkkı)."
  },
  {
    "id": "bank_sc_071",
    "type": "sentence_completion",
    "question": "If the company had listened to its customers, _____ .",
    "options": {
      "A": "it would not be facing such heavy losses now",
      "B": "it is facing heavy losses for the third year in a row",
      "C": "it will have to close several stores",
      "D": "it had lost many of its customers",
      "E": "it can reduce its losses by closing some of its stores"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Karma koşul: had V3 → would + V1 (now)",
    "trapWarning": "B, C, D ve E koşul cümlesiyle uyumlu bir sonuç yapısı kurmaz.",
    "explanation": "Şirket müşterilerini dinleseydi şimdi bu kadar büyük zarar etmiyor olurdu (A şıkkı)."
  },
  {
    "id": "bank_sc_072",
    "type": "sentence_completion",
    "question": "Some birds migrate thousands of kilometres every year, _____ .",
    "options": {
      "A": "while others stay in the same area all their lives",
      "B": "because they cannot find any food in summer",
      "C": "so that they can avoid flying long distances",
      "D": "unless the weather becomes warmer in autumn",
      "E": "although they are among the fastest birds"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "While (karşılaştırma): some ... others",
    "trapWarning": "B şıkkı bilgisel olarak yanlış, C çelişkili, D ve E anlamsal olarak bağlanmaz.",
    "explanation": "Bazı kuşlar her yıl binlerce kilometre göç ederken diğerleri ömür boyu aynı yerde kalır (A şıkkı)."
  },
  {
    "id": "bank_sc_073",
    "type": "sentence_completion",
    "question": "Now that most people own a smartphone, _____ .",
    "options": {
      "A": "fewer people buy separate cameras and music players",
      "B": "phones were used only to make calls in the past",
      "C": "smartphones were invented in the early 2000s",
      "D": "they will be much cheaper and more powerful in the future",
      "E": "landline phones had become very popular"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Now that (… dığına göre)",
    "trapWarning": "B ve C geçmişe ait bilgi verir; D şıkkı sonuç değildir; E şıkkı zaman ve anlam olarak çelişir.",
    "explanation": "Artık çoğu kişinin akıllı telefonu olduğuna göre daha az kişi ayrı kamera ve müzik çalar alıyor (A şıkkı)."
  },
  {
    "id": "bank_sc_074",
    "type": "sentence_completion",
    "question": "No matter how much money is spent on security, _____ .",
    "options": {
      "A": "no computer system can be made completely safe",
      "B": "most systems were hacked last year",
      "C": "the company will become much safer than its rivals",
      "D": "hackers had stolen millions of passwords",
      "E": "it is still the best way to protect sensitive data"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "No matter how (ne kadar ... olursa olsun)",
    "trapWarning": "C ve E 'ne kadar harcansa da' anlamıyla çelişir; B ve D zaman uyumunu bozar.",
    "explanation": "Güvenliğe ne kadar para harcanırsa harcansın hiçbir sistem tamamen güvenli hale getirilemez (A şıkkı)."
  },
  {
    "id": "bank_sc_075",
    "type": "sentence_completion",
    "question": "The study was criticised _____ .",
    "options": {
      "A": "because it included only a small number of participants",
      "B": "so that it could include more participants in the future",
      "C": "although it included only a few participants",
      "D": "unless it includes more participants from other countries",
      "E": "whereas it included many more participants than expected"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Because: eleştirinin nedeni",
    "trapWarning": "B ve D anlamsızdır; C şıkkı zıtlık kurar ama küçük örneklem eleştirinin nedenidir; E şıkkı yapı olarak bağlanmaz.",
    "explanation": "Çalışma az sayıda katılımcı içerdiği için eleştirildi (A şıkkı)."
  },
  {
    "id": "bank_sc_076",
    "type": "sentence_completion",
    "question": "Although the first electric car was built in the nineteenth century, _____ .",
    "options": {
      "A": "it could travel only short distances on a single charge",
      "B": "electric cars became popular only recently",
      "C": "its inventor is still unknown to most historians",
      "D": "it was much quieter than cars with petrol engines",
      "E": "early models were built mainly by small companies"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Although: erken icat ↔ geç yaygınlaşma",
    "trapWarning": "A, C, D ve E ilk elektrikli araba hakkında ek bilgi verir; zıtlık kurmaz.",
    "explanation": "İlk elektrikli araba 19. yüzyılda yapılmış olsa da elektrikli arabalar ancak 21. yüzyılda yaygınlaştı (B şıkkı)."
  },
  {
    "id": "bank_sc_077",
    "type": "sentence_completion",
    "question": "_____ , the bank refused to lend the company any more money.",
    "options": {
      "A": "As the company had failed to repay its earlier loans",
      "B": "Although the company had always paid its debts on time",
      "C": "Because the company's profits had doubled that year",
      "D": "Since the bank had plenty of money available to lend",
      "E": "While the company was expanding into new markets"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "As (çünkü)",
    "trapWarning": "B şıkkı zıtlık kurar ama anlam mantıksızdır; C ve D kredi vermemeye neden olmaz; E şıkkı ilişki kurmaz.",
    "explanation": "Şirket önceki kredilerini ödemediği için banka daha fazla borç vermeyi reddetti (A şıkkı)."
  },
  {
    "id": "bank_sc_078",
    "type": "sentence_completion",
    "question": "Volcanic eruptions can cool the planet for several years _____ .",
    "options": {
      "A": "because they release ash and gases that block sunlight",
      "B": "although they release large amounts of heat into the air",
      "C": "so that the polar ice caps can melt more quickly",
      "D": "unless the eruption takes place under the sea",
      "E": "since most volcanoes are found near the equator"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Because: mekanizma",
    "trapWarning": "B şıkkı zıtlık kurar ama soğumayı açıklamaz; C şıkkı sonuçla çelişir; D ve E anlamsal olarak bağlanmaz.",
    "explanation": "Volkanik patlamalar güneş ışığını engelleyen kül ve gazlar saldığı için gezegeni soğutabilir (A şıkkı)."
  },
  {
    "id": "bank_sc_079",
    "type": "sentence_completion",
    "question": "Once the new law comes into force, _____ .",
    "options": {
      "A": "companies were required to publish their pay gaps",
      "B": "companies will be required to publish their pay gaps",
      "C": "companies had been asked to publish their pay gaps",
      "D": "companies have published their pay gaps every year",
      "E": "companies would have published their pay gaps"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Once + Present → will",
    "trapWarning": "A, C, D ve E zaman uyumunu bozar.",
    "explanation": "Yeni yasa yürürlüğe girdiğinde şirketlerin ücret farklarını yayımlaması zorunlu olacak (B şıkkı)."
  },
  {
    "id": "bank_sc_080",
    "type": "sentence_completion",
    "question": "The novel became a best-seller _____ .",
    "options": {
      "A": "even though it had received poor reviews from critics",
      "B": "because no one had ever heard of its young author",
      "C": "so that more critics would decide to write about it",
      "D": "unless the publisher reduces its price next year",
      "E": "whereas the author wrote it in only six months"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Even though: beklenmedik başarı",
    "trapWarning": "B şıkkı mantıksal neden değildir; C ve D anlamsızdır; E şıkkı karşılaştırma bildirir ama ilişki kurmaz.",
    "explanation": "Eleştirmenlerden kötü yorumlar almasına rağmen roman çok satanlar listesine girdi (A şıkkı)."
  },
  {
    "id": "bank_sc_081",
    "type": "sentence_completion",
    "question": "Scarcely had the plane taken off _____ .",
    "options": {
      "A": "than one of its engines caught fire",
      "B": "when one of its engines caught fire",
      "C": "that one of its engines caught fire",
      "D": "before one of its engines catches fire",
      "E": "so one of its engines caught fire"
    },
    "answer": "B",
    "difficulty": "İleri",
    "tacticUsed": "Scarcely ... when",
    "trapWarning": "A şıkkı 'than' No sooner ile kullanılır; C, D ve E yapıyı tamamlamaz.",
    "explanation": "Uçak kalkar kalkmaz motorlarından biri alev aldı (B şıkkı)."
  },
  {
    "id": "bank_sc_082",
    "type": "sentence_completion",
    "question": "_____ , more and more people are choosing to work from home.",
    "options": {
      "A": "Since fast internet has become widely available",
      "B": "Although most offices now have fast internet",
      "C": "Because commuting has become cheaper and faster",
      "D": "Unless companies require them to come to the office",
      "E": "As long as office rents continue to fall"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Since: neden",
    "trapWarning": "B şıkkı zıtlık kurar ama mantıksal değildir; C şıkkı evden çalışmanın nedeni değil tersidir; D ve E koşul olarak uyumsuzdur.",
    "explanation": "Hızlı internet yaygınlaştığı için giderek daha fazla kişi evden çalışmayı seçiyor (A şıkkı)."
  },
  {
    "id": "bank_sc_083",
    "type": "sentence_completion",
    "question": "If the ice sheets of Greenland melted completely, _____ .",
    "options": {
      "A": "global sea levels would rise by about seven metres",
      "B": "global sea levels have risen by a few centimetres",
      "C": "scientists will measure the change from space",
      "D": "the ice sheets had been shrinking for decades",
      "E": "global temperatures were falling in the past"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Type 2: V2 → would",
    "trapWarning": "B, C, D ve E zaman uyumunu bozar.",
    "explanation": "Grönland buz tabakaları tamamen erirse küresel deniz seviyesi yaklaşık yedi metre yükselirdi (A şıkkı)."
  },
  {
    "id": "bank_sc_084",
    "type": "sentence_completion",
    "question": "Not only is the new material lighter than steel, _____ .",
    "options": {
      "A": "but it is also several times stronger",
      "B": "because it is made from carbon fibres",
      "C": "although it is more expensive to produce",
      "D": "so engineers use it in aircraft",
      "E": "and it was invented in a laboratory"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Not only ... but also",
    "trapWarning": "Devrik 'Not only is ...' yapısı 'but (also)' ister; diğer bağlaçlar yapıyı tamamlamaz.",
    "explanation": "Yeni malzeme yalnızca çelikten hafif değil, aynı zamanda birkaç kat daha güçlü (A şıkkı)."
  },
  {
    "id": "bank_sc_085",
    "type": "sentence_completion",
    "question": "The children were taught to swim at an early age _____ .",
    "options": {
      "A": "since they lived on a small island surrounded by sea",
      "B": "although their parents could not swim at all",
      "C": "so that they would not be afraid of water",
      "D": "unless they lived close enough to a public swimming pool",
      "E": "because swimming is the least popular sport in the region"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Since: neden",
    "trapWarning": "C şıkkı de makul bir amaç gibi görünür ama çocukların yüzmeyi öğrenmesinin en güçlü nedeni denizle çevrili bir adada yaşamalarıdır; B şıkkı mantık kurmaz; D ve E anlamsızdır.",
    "explanation": "Denizle çevrili küçük bir adada yaşadıkları için çocuklara erken yaşta yüzme öğretildi (A şıkkı)."
  },
  {
    "id": "bank_sc_086",
    "type": "sentence_completion",
    "question": "While the economy grew rapidly in the cities, _____ .",
    "options": {
      "A": "rural areas remained poor and underdeveloped",
      "B": "many new factories were opened in urban areas",
      "C": "the cities attracted millions of new workers",
      "D": "incomes in the cities rose faster than prices",
      "E": "urban unemployment fell to record low levels"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "While: karşılaştırma",
    "trapWarning": "B, C, D ve E yine şehirlerdeki büyümeyi anlatır; kırsalla karşıtlığı vermez.",
    "explanation": "Şehirlerde ekonomi hızla büyürken kırsal bölgeler yoksul kaldı (A şıkkı)."
  },
  {
    "id": "bank_sc_087",
    "type": "sentence_completion",
    "question": "_____ , she would have won the race.",
    "options": {
      "A": "If she hadn't fallen at the last hurdle",
      "B": "Because she fell at the last hurdle",
      "C": "Unless she falls at the last hurdle",
      "D": "Although she fell at the last hurdle",
      "E": "When she fell at the last hurdle"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Type 3: If + had (not) V3",
    "trapWarning": "B, D ve E olumsuz sonuçla çelişir; C şıkkı zaman uyumunu bozar.",
    "explanation": "Son engelde düşmeseydi yarışı kazanırdı (A şıkkı)."
  },
  {
    "id": "bank_sc_088",
    "type": "sentence_completion",
    "question": "The more trees are cut down, _____ .",
    "options": {
      "A": "the more carbon dioxide remains in the atmosphere",
      "B": "forests have grown more rapidly in Europe since then",
      "C": "the government planted millions of new trees last year",
      "D": "the less land was used for farming",
      "E": "the cleaner the air became last year"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "The more ..., the more ...",
    "trapWarning": "B ve C kalıbı tamamlamaz; D ve E kalıba uysa da zaman ve anlam olarak bağlanmaz.",
    "explanation": "Ne kadar çok ağaç kesilirse atmosferde o kadar çok karbondioksit kalır (A şıkkı)."
  },
  {
    "id": "bank_sc_089",
    "type": "sentence_completion",
    "question": "Although the theory was rejected when it was first proposed, _____ .",
    "options": {
      "A": "it is now widely accepted by scientists",
      "B": "few scientists took it seriously at the time",
      "C": "its author was not a professional scientist",
      "D": "it was based on very limited evidence",
      "E": "it contradicted the views of most experts"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Although: geçmişte red ↔ bugün kabul",
    "trapWarning": "B, C, D ve E reddedilme nedenlerini açıklar; zıtlık kurmaz.",
    "explanation": "Kuram ilk önerildiğinde reddedilmiş olsa da bugün bilim insanlarınca yaygın olarak kabul görüyor (A şıkkı)."
  },
  {
    "id": "bank_sc_090",
    "type": "sentence_completion",
    "question": "_____ , doctors advise patients to finish the full course of antibiotics.",
    "options": {
      "A": "So that bacteria do not develop resistance",
      "B": "Although bacteria rarely develop resistance",
      "C": "Because antibiotics have no side effects",
      "D": "Unless the patient feels better after a day",
      "E": "Even if the infection has been caused by a virus"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Amaç: so that",
    "trapWarning": "B şıkkı tavsiyeyi gereksiz kılar; C şıkkı yanlış bilgidir; D ve E tavsiyeyle çelişir.",
    "explanation": "Bakterilerin direnç geliştirmemesi için doktorlar antibiyotiğin tamamlanmasını önerir (A şıkkı)."
  },
  {
    "id": "bank_sc_091",
    "type": "sentence_completion",
    "question": "The city has banned cars from its centre, _____ .",
    "options": {
      "A": "which has made the streets quieter and cleaner",
      "B": "because traffic in the centre was very light",
      "C": "although most residents supported the decision",
      "D": "unless drivers pay a daily fee to enter",
      "E": "so that more drivers could park there"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Sonuç bildiren 'which'",
    "trapWarning": "B şıkkı mantıksal neden değildir; C şıkkı zıtlık kurmaz; D şıkkı zaman ve yapı olarak uyumsuzdur; E şıkkı amaçla çelişir.",
    "explanation": "Şehir arabaları merkezden yasakladı, bu da sokakları daha sessiz ve temiz yaptı (A şıkkı)."
  },
  {
    "id": "bank_sc_092",
    "type": "sentence_completion",
    "question": "_____ , the expedition was forced to turn back.",
    "options": {
      "A": "Because a severe storm hit the mountain",
      "B": "Although the weather was perfect for climbing",
      "C": "Since they had more than enough supplies",
      "D": "As long as the team stayed healthy",
      "E": "Unless the guides decide otherwise"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Because: zorunlu dönüşün nedeni",
    "trapWarning": "B ve C dönüş için neden değildir; D ve E zaman uyumsuz koşullardır.",
    "explanation": "Dağda şiddetli bir fırtına çıktığı için sefer geri dönmek zorunda kaldı (A şıkkı)."
  },
  {
    "id": "bank_sc_093",
    "type": "sentence_completion",
    "question": "Many historians believe that the empire collapsed _____ .",
    "options": {
      "A": "because it had grown too large to govern effectively",
      "B": "so that its neighbours could take over its lands",
      "C": "although it had grown too large to govern effectively",
      "D": "unless its army had been defeated in battle",
      "E": "whereas its neighbours had been weakened by war"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Because: çöküşün nedeni",
    "trapWarning": "C şıkkı aynı içeriği zıtlık bağlacıyla verir ve mantığı bozar; B ve D anlamsızdır; E şıkkı ise nedeni açıklamaz.",
    "explanation": "Tarihçilerin çoğu imparatorluğun etkili yönetilemeyecek kadar büyüdüğü için çöktüğüne inanır (A şıkkı)."
  },
  {
    "id": "bank_sc_094",
    "type": "sentence_completion",
    "question": "Despite the fact that it rarely rains in the region, _____ .",
    "options": {
      "A": "farmers grow rice, which needs a lot of water",
      "B": "most of the land in the region is covered by desert",
      "C": "farmers struggle to grow enough food",
      "D": "the rivers are often dry in summer",
      "E": "the population there is very small and widely scattered"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Despite the fact that: beklenmedik sonuç",
    "trapWarning": "B, C, D ve E az yağışın doğal sonuçlarıdır; zıtlık kurmaz.",
    "explanation": "Bölgeye nadiren yağmur yağmasına rağmen çiftçiler çok su isteyen pirinç yetiştiriyor (A şıkkı)."
  },
  {
    "id": "bank_sc_095",
    "type": "sentence_completion",
    "question": "It is only when we lose our health _____ .",
    "options": {
      "A": "that we realise how valuable it is",
      "B": "when we decide to eat a healthier diet",
      "C": "because we did not take care of ourselves",
      "D": "which makes us visit the doctor more often",
      "E": "so we should exercise regularly"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "It is only when ... that ...",
    "trapWarning": "Vurgu yapısı (cleft sentence) 'that' ile tamamlanır; B şıkkı ince tuzaktır.",
    "explanation": "Sağlığımızı ancak kaybettiğimizde ne kadar değerli olduğunu anlarız (A şıkkı)."
  },
  {
    "id": "bank_sc_096",
    "type": "sentence_completion",
    "question": "The project was abandoned _____ .",
    "options": {
      "A": "after it became clear that it would cost twice as much",
      "B": "because it was cheaper than originally estimated",
      "C": "so that it could be completed ahead of schedule",
      "D": "although it had become far too expensive",
      "E": "unless more funding is found by the end of the year"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "After: neden/zaman",
    "trapWarning": "B ve C terk edilmeyle çelişir; D şıkkı zıtlık bağlacı mantığı bozar; E şıkkı zaman uyumsuzdur.",
    "explanation": "Maliyetin iki katına çıkacağı anlaşılınca proje terk edildi (A şıkkı)."
  },
  {
    "id": "bank_sc_097",
    "type": "sentence_completion",
    "question": "Since the invention of the telescope, _____ .",
    "options": {
      "A": "astronomers have discovered thousands of new stars",
      "B": "astronomers discovered the first planets in 1600",
      "C": "the stars will be easier to observe",
      "D": "astronomers had believed that Earth was flat",
      "E": "most stars were invisible to the naked eye"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Since + zaman noktası → Present Perfect",
    "trapWarning": "B, C, D ve E Present Perfect yerine başka zamanlar kullanır.",
    "explanation": "Teleskopun icadından beri gökbilimciler binlerce yeni yıldız keşfetti (A şıkkı)."
  },
  {
    "id": "bank_sc_098",
    "type": "sentence_completion",
    "question": "Unlike most mammals, which give birth to live young, _____ .",
    "options": {
      "A": "the platypus lays eggs",
      "B": "whales feed their young on milk",
      "C": "dogs are born with their eyes closed",
      "D": "elephants carry their young for two years",
      "E": "horses can stand soon after birth"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Unlike: karşıtlık",
    "trapWarning": "B, C, D ve E memelilerin canlı doğurma özelliğiyle çelişen bir şey söylemez.",
    "explanation": "Canlı doğuran çoğu memelinin aksine ornitorenk yumurtlar (A şıkkı)."
  },
  {
    "id": "bank_sc_099",
    "type": "sentence_completion",
    "question": "_____ , the company would never have survived the crisis.",
    "options": {
      "A": "Without the support of its loyal customers",
      "B": "Thanks to the support of its loyal customers",
      "C": "Because of the support of its loyal customers",
      "D": "With the support of its loyal customers",
      "E": "As a result of its loyal customers"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Without = If it had not been for",
    "trapWarning": "B, C, D ve E desteğin varlığını söyler; 'would never have survived' ile çelişir.",
    "explanation": "Sadık müşterilerinin desteği olmasaydı şirket krizi asla atlatamazdı (A şıkkı)."
  },
  {
    "id": "bank_sc_100",
    "type": "sentence_completion",
    "question": "Researchers are studying the behaviour of ants _____ .",
    "options": {
      "A": "in order to design better systems for managing traffic",
      "B": "because ants are the largest and strongest insects on Earth",
      "C": "although ants live in very large colonies",
      "D": "unless they can find a more interesting subject",
      "E": "so that ants could build their nests much faster"
    },
    "answer": "A",
    "difficulty": "İleri",
    "tacticUsed": "Amaç: in order to",
    "trapWarning": "B şıkkı yanlış bilgidir; C şıkkı zıtlık kurmaz; D ve E anlamsızdır.",
    "explanation": "Araştırmacılar daha iyi trafik yönetim sistemleri tasarlamak için karıncaları inceliyor (A şıkkı)."
  }
];

export const SENTENCE_COMPLETION_BANK: YdsQuestion[] = shuffleQuestionList(RAW_SENTENCE_COMPLETION_BANK);
