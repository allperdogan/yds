// Generated reading bank: 25 passages x 4 questions.
import { ReadingPassage } from '../../types';
import { shuffleQuestionList } from '../../services/optionShuffle';

const RAW_READING_PASSAGE_BANK: ReadingPassage[] = [
  {
    "id": "rb001",
    "title": "Perovskite Solar Cells: Promise and Fragility",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Nature Energy & Science",
    "wordCount": 217,
    "passageText": "Since they were first tested in 2009, perovskite solar cells have improved faster than any other photovoltaic technology in history. Their efficiency at converting sunlight into electricity rose from under four percent to more than twenty-five percent in little over a decade, a gain that silicon cells needed nearly half a century to achieve. Perovskites are also cheap to produce: whereas silicon must be purified at extremely high temperatures, perovskite crystals can be printed from a liquid solution at room temperature, much like ink on a newspaper.\n\nDespite these advantages, perovskite panels are not yet found on rooftops. The main obstacle is durability. The crystals tend to break down when they are exposed to moisture, oxygen and heat, which are precisely the conditions a solar panel must endure for twenty-five years or more. Many laboratory cells lose a large share of their efficiency within a few months. Moreover, the most efficient versions contain small amounts of lead, raising concerns about contamination if damaged panels leak into the soil.\n\nResearchers are therefore pursuing two strategies at once. Some are sealing the cells in protective layers of glass and polymer, while others are combining a thin perovskite layer with conventional silicon to create so-called tandem cells, which capture a wider range of the solar spectrum than either material could alone.",
    "vocabularyNotes": [
      {
        "word": "photovoltaic",
        "meaningTr": "fotovoltaik, güneş ışığını elektriğe çeviren",
        "contextNote": "Enerji metinlerinde sık geçen teknik sıfat."
      },
      {
        "word": "purify",
        "meaningTr": "saflaştırmak, arındırmak",
        "contextNote": "İsim hali: purification."
      },
      {
        "word": "endure",
        "meaningTr": "dayanmak, katlanmak, sürmek",
        "contextNote": "Eş anlamlısı: withstand, tolerate."
      },
      {
        "word": "obstacle",
        "meaningTr": "engel",
        "contextNote": "Eş anlamlısı: barrier, impediment, hindrance."
      },
      {
        "word": "contamination",
        "meaningTr": "kirlenme, bulaşma",
        "contextNote": "Fiil: contaminate. ÖSYM çevre metinlerinde sık sorar."
      },
      {
        "word": "pursue",
        "meaningTr": "sürdürmek, peşinden gitmek",
        "contextNote": "pursue a strategy/goal kalıbıyla gelir."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "The crystals tend to break down when they are exposed to moisture, oxygen and heat, which are precisely the conditions a solar panel must endure for twenty-five years or more.",
        "subject": "The crystals (kristaller)",
        "mainVerb": "tend to break down (bozunma eğilimindedir)",
        "objectsAndComplements": "[when-clause: neme, oksijene ve ısıya maruz kaldıklarında] + [which-clause: ki bunlar tam da bir panelin dayanması gereken koşullardır]",
        "grammaticalStructures": [
          "tend to + V1: eğilim bildirir.",
          "Passive (are exposed to): maruz kalmak.",
          "Non-defining relative clause (which are precisely...): önceki üç ismi topluca niteler.",
          "Gizli relative clause (the conditions [that] a solar panel must endure)."
        ],
        "translationTr": "Kristaller neme, oksijene ve ısıya maruz kaldıklarında bozunma eğilimindedir ve bunlar tam da bir güneş panelinin yirmi beş yıl veya daha uzun süre dayanması gereken koşullardır."
      }
    ],
    "questions": [
      {
        "id": "rb001_q1",
        "type": "reading",
        "title": "Perovskite Solar Cells: Promise and Fragility",
        "question": "According to the passage, one advantage of perovskite cells over silicon cells is that _____ .",
        "options": {
          "A": "they can be manufactured at room temperature without costly purification",
          "B": "they remain stable for much longer periods when exposed to outdoor heat",
          "C": "they already convert sunlight more efficiently than any tandem design",
          "D": "they contain no toxic metals at all that might later leak into the soil",
          "E": "they have been tested on rooftops for more than twenty-five years"
        },
        "answer": "A",
        "difficulty": "Orta",
        "tacticUsed": "Detay Sorusu & Eş Anlamlı İfade (printed at room temperature = manufactured at room temperature)",
        "trapWarning": "B şıkkı dayanıklılık sorununu tersine çevirir. D şıkkı metinle çelişir (kurşun içerir). C ve E metinde olmayan iddialardır.",
        "explanation": "İlk paragrafta silikonun çok yüksek sıcaklıkta saflaştırılması gerektiği, perovskitin ise oda sıcaklığında sıvıdan basılabildiği söylenir. Bu da A şıkkıdır."
      },
      {
        "id": "rb001_q2",
        "type": "reading",
        "title": "Perovskite Solar Cells: Promise and Fragility",
        "question": "It can be understood from the passage that perovskite panels are not yet in widespread use mainly because _____ .",
        "options": {
          "A": "their efficiency has improved more slowly than that of silicon",
          "B": "printing them from liquid solutions has proved too expensive",
          "C": "they degrade too quickly under ordinary outdoor conditions",
          "D": "governments have banned all products that contain any lead",
          "E": "tandem cells capture only a narrow part of the solar spectrum"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Ana Engel Tespiti (The main obstacle is durability)",
        "trapWarning": "A ve B metnin söylediğinin tersidir. D şıkkı kurşun endişesini yasağa dönüştürerek abartır. E şıkkı tandem hücreler hakkında yanlış bilgi verir.",
        "explanation": "İkinci paragraf \"The main obstacle is durability\" der ve kristallerin nem, oksijen ve ısıyla bozulduğunu açıklar. C şıkkı bunu \"degrade too quickly\" ile karşılar."
      },
      {
        "id": "rb001_q3",
        "type": "reading",
        "title": "Perovskite Solar Cells: Promise and Fragility",
        "question": "The word \"endure\" in the second paragraph is closest in meaning to _____ .",
        "options": {
          "A": "generate",
          "B": "withstand",
          "C": "prevent",
          "D": "measure",
          "E": "reflect"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Bağlamdan Kelime Anlamı",
        "trapWarning": "A ve E panelin işleviyle ilgili kelimelerdir ama \"endure\" dayanmak demektir. C şıkkı anlamı tersine çevirir.",
        "explanation": "\"Endure\" bir koşula dayanmak, katlanmak anlamındadır. En yakın karşılık \"withstand\" (B şıkkı)."
      },
      {
        "id": "rb001_q4",
        "type": "reading",
        "title": "Perovskite Solar Cells: Promise and Fragility",
        "question": "The main purpose of the last paragraph is to _____ .",
        "options": {
          "A": "argue that silicon cells will soon be completely replaced by perovskites",
          "B": "describe the environmental damage caused by damaged solar panels",
          "C": "compare the efficiency figures of several types of laboratory cells",
          "D": "outline the approaches being taken to overcome the stated weaknesses",
          "E": "explain why researchers have abandoned the idea of tandem cells"
        },
        "answer": "D",
        "difficulty": "İleri",
        "tacticUsed": "Paragraf Amacı (therefore → çözüm yolları)",
        "trapWarning": "A şıkkı metnin vardığı bir sonuç değildir; tandem hücreler silikonu ortadan kaldırmaz, onunla birleşir. E şıkkı tam tersidir. B şıkkı ikinci paragrafa aittir.",
        "explanation": "Son paragraf \"Researchers are therefore pursuing two strategies\" diyerek koruyucu katmanları ve tandem hücreleri anlatır; yani sorunları aşma yollarını özetler (D şıkkı)."
      }
    ]
  },
  {
    "id": "rb002",
    "title": "The Giant Impact and the Birth of the Moon",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Scientific American & Nature Geoscience",
    "wordCount": 236,
    "passageText": "For most of the twentieth century, the origin of the Moon was a puzzle with three competing solutions. Some scientists believed that the Moon had been captured by Earth's gravity as it passed by; others argued that it had formed alongside Earth from the same cloud of dust; a third group suggested that a rapidly spinning young Earth had thrown off a piece of itself. Each theory, however, failed to explain at least one key observation.\n\nThe rock samples brought back by the Apollo missions changed the debate. They showed that lunar rocks have almost exactly the same oxygen isotopes as rocks on Earth, which made the capture theory highly unlikely. Yet the Moon has a very small iron core, which the shared-cloud theory could not account for. In the 1970s, researchers proposed a new scenario: about 4.5 billion years ago, a Mars-sized body, later named Theia, struck the young Earth at an angle. The collision melted and vaporized enormous quantities of rock, and the debris that went into orbit gradually came together to form the Moon.\n\nThe giant impact hypothesis is now the most widely accepted explanation, but it is not free of problems. Computer simulations suggest that most of the Moon's material should have come from Theia rather than Earth, which makes the near-identical isotopes surprising. Some scientists therefore suspect that the impact was even more violent than first thought, thoroughly mixing the two bodies.",
    "vocabularyNotes": [
      {
        "word": "account for",
        "meaningTr": "açıklamak; oluşturmak",
        "contextNote": "YDS'nin en sık sorduğu phrasal verb'lerden. explain anlamında."
      },
      {
        "word": "debris",
        "meaningTr": "enkaz, döküntü",
        "contextNote": "Okunuşu: debri. Uzay ve afet metinlerinde sık geçer."
      },
      {
        "word": "vaporize",
        "meaningTr": "buharlaştırmak",
        "contextNote": "vapor (buhar) kökünden."
      },
      {
        "word": "isotope",
        "meaningTr": "izotop",
        "contextNote": "Bilim metinlerinde kanıt olarak kullanılır."
      },
      {
        "word": "thoroughly",
        "meaningTr": "tamamen, baştan sona",
        "contextNote": "Eş anlamlısı: completely, entirely."
      },
      {
        "word": "hypothesis",
        "meaningTr": "hipotez, varsayım",
        "contextNote": "Çoğulu: hypotheses."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Computer simulations suggest that most of the Moon's material should have come from Theia rather than Earth, which makes the near-identical isotopes surprising.",
        "subject": "Computer simulations (bilgisayar simülasyonları)",
        "mainVerb": "suggest (ileri sürer, işaret eder)",
        "objectsAndComplements": "[that-clause: Ay'ın malzemesinin çoğunun Dünya'dan değil Theia'dan gelmiş olması gerektiği] + [which: bu da neredeyse aynı izotopları şaşırtıcı kılar]",
        "grammaticalStructures": [
          "Noun clause (suggest that ...).",
          "should have + V3: geçmişe yönelik beklenti (gelmiş olması gerekirdi).",
          "Sentential which: tüm önceki cümleyi niteler.",
          "make + nesne + sıfat (makes the isotopes surprising)."
        ],
        "translationTr": "Bilgisayar simülasyonları Ay'ın malzemesinin çoğunun Dünya'dan değil Theia'dan gelmiş olması gerektiğini ileri sürmektedir; bu da neredeyse aynı olan izotopları şaşırtıcı kılmaktadır."
      }
    ],
    "questions": [
      {
        "id": "rb002_q1",
        "type": "reading",
        "title": "The Giant Impact and the Birth of the Moon",
        "question": "According to the passage, the Apollo rock samples made the capture theory unlikely because _____ .",
        "options": {
          "A": "they revealed that the Moon has an unusually large iron core",
          "B": "they proved that the Moon had once been part of a planet the size of Mars",
          "C": "their oxygen isotopes are almost identical to those of Earth's rocks",
          "D": "they showed that the young Earth had been spinning very rapidly at the time",
          "E": "they contained material that had clearly come from Theia"
        },
        "answer": "C",
        "difficulty": "Orta",
        "tacticUsed": "Sebep-Sonuç Eşleme (which made the capture theory highly unlikely)",
        "trapWarning": "A şıkkı metinle çelişir (çekirdek çok küçüktür). E şıkkı simülasyonların beklentisidir, kanıt değildir. B ve D metinde böyle geçmez.",
        "explanation": "İkinci paragrafta Apollo örneklerinin Dünya ile neredeyse aynı oksijen izotoplarına sahip olduğu, bunun da yakalanma teorisini olası olmaktan çıkardığı söylenir (C şıkkı)."
      },
      {
        "id": "rb002_q2",
        "type": "reading",
        "title": "The Giant Impact and the Birth of the Moon",
        "question": "The phrase \"account for\" in the second paragraph is closest in meaning to _____ .",
        "options": {
          "A": "predict",
          "B": "explain",
          "C": "reject",
          "D": "measure",
          "E": "conceal"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Bağlamdan Phrasal Verb Anlamı",
        "trapWarning": "C şıkkı cümleyi anlamsız kılmaz ama \"could not\" ile birlikte çift olumsuz bir anlam verir. A ve D bağlamda mantıklı görünür ama \"account for\" açıklamak demektir.",
        "explanation": "\"The shared-cloud theory could not account for\" küçük demir çekirdeği açıklayamadığı anlamındadır; doğru karşılık \"explain\" (B şıkkı)."
      },
      {
        "id": "rb002_q3",
        "type": "reading",
        "title": "The Giant Impact and the Birth of the Moon",
        "question": "It can be inferred from the passage that the giant impact hypothesis _____ .",
        "options": {
          "A": "was proposed before the Apollo missions returned any lunar samples",
          "B": "has been fully confirmed by a series of recent and detailed computer simulations",
          "C": "is accepted by most scientists although some details remain unresolved",
          "D": "explains why the Moon has a larger iron core than Earth",
          "E": "has now been rejected by most researchers in favour of a far more violent collision"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım Sorusu (most widely accepted ... but not free of problems)",
        "trapWarning": "B şıkkı metnin tersidir: simülasyonlar sorun yaratır. E şıkkı hipotezi reddetmez, onu daha şiddetli bir çarpışma olarak günceller. A şıkkı tarih sırasını bozar (1970'ler Apollo'dan sonradır).",
        "explanation": "Son paragraf hipotezin \"en yaygın kabul gören\" açıklama olduğunu ama sorunsuz olmadığını söyler. C şıkkı bu dengeyi doğru yansıtır."
      },
      {
        "id": "rb002_q4",
        "type": "reading",
        "title": "The Giant Impact and the Birth of the Moon",
        "question": "Which of the following best describes the organization of the passage?",
        "options": {
          "A": "A single theory is described in detail, and its practical applications are then listed one by one.",
          "B": "Earlier theories are presented, a new one is introduced, and its remaining problems are noted.",
          "C": "Two opposing theories are compared, and the author declares one of them correct.",
          "D": "A historical mission is described, and its technical difficulties are discussed.",
          "E": "A current theory is criticized at length, and an older theory is shown to be far more convincing."
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Metin Organizasyonu",
        "trapWarning": "C şıkkı yanlıştır: üç eski teori vardır ve yazar kesin bir hüküm vermez. E şıkkı eski teorileri yeniden öne çıkarmaz. D şıkkı Apollo'yu ana konu yapar.",
        "explanation": "Metin önce üç eski teoriyi, sonra dev çarpışma hipotezini, en sonda da hipotezin çözülmemiş sorunlarını anlatır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb003",
    "title": "Gene Drives: Editing Wild Populations",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from New Scientist & PNAS",
    "wordCount": 220,
    "passageText": "Under the normal rules of inheritance, a gene carried by one parent has a fifty percent chance of being passed on to each offspring. A gene drive is a genetic tool that breaks this rule. Built with the gene-editing system CRISPR, it copies itself onto the partner chromosome, so that nearly all of the offspring inherit it. Within a few generations, a gene drive released into a wild population can spread to almost every individual.\n\nThe most discussed application is the fight against malaria, which still kills more than half a million people every year. Scientists have designed gene drives that make female Anopheles mosquitoes infertile or unable to carry the malaria parasite. In caged experiments, such drives have wiped out entire mosquito populations within a year. Supporters argue that the technology could save more lives than any vaccine.\n\nCritics, however, warn that a gene drive, once released, cannot easily be recalled. Because it is designed to spread across borders, a decision made by one country could affect ecosystems in many others. It is also uncertain what would happen to the birds, fish and bats that feed on mosquitoes. For these reasons, many researchers insist that field trials should begin only after affected communities have been consulted and after so-called reversal drives, which could undo the changes, have been tested.",
    "vocabularyNotes": [
      {
        "word": "inheritance",
        "meaningTr": "kalıtım; miras",
        "contextNote": "inherit (miras almak) fiilinden."
      },
      {
        "word": "offspring",
        "meaningTr": "yavru, döl",
        "contextNote": "Tekili ve çoğulu aynıdır."
      },
      {
        "word": "infertile",
        "meaningTr": "kısır, verimsiz",
        "contextNote": "Zıt anlamlısı: fertile."
      },
      {
        "word": "wipe out",
        "meaningTr": "yok etmek, silip süpürmek",
        "contextNote": "Eş anlamlısı: eradicate, eliminate."
      },
      {
        "word": "recall",
        "meaningTr": "geri çağırmak; hatırlamak",
        "contextNote": "Bağlama göre anlamı değişir; burada geri toplamak."
      },
      {
        "word": "consult",
        "meaningTr": "danışmak, görüşünü almak",
        "contextNote": "consult with someone kalıbı da vardır."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "For these reasons, many researchers insist that field trials should begin only after affected communities have been consulted and after so-called reversal drives, which could undo the changes, have been tested.",
        "subject": "many researchers (birçok araştırmacı)",
        "mainVerb": "insist (ısrar ederler)",
        "objectsAndComplements": "[that-clause: saha denemelerinin ancak etkilenen topluluklara danışıldıktan ve tersine çevirme sürücüleri test edildikten sonra başlaması gerektiği]",
        "grammaticalStructures": [
          "insist that + should: zorunluluk bildiren isim cümleciği.",
          "only after ... and after ...: iki koşullu zaman yapısı.",
          "Present perfect passive (have been consulted / have been tested).",
          "Non-defining relative clause (which could undo the changes)."
        ],
        "translationTr": "Bu nedenlerle birçok araştırmacı, saha denemelerinin ancak etkilenen topluluklara danışıldıktan ve yapılan değişiklikleri geri alabilecek tersine çevirme sürücüleri test edildikten sonra başlaması gerektiğinde ısrar etmektedir."
      }
    ],
    "questions": [
      {
        "id": "rb003_q1",
        "type": "reading",
        "title": "Gene Drives: Editing Wild Populations",
        "question": "According to the passage, what makes a gene drive different from ordinary inheritance?",
        "options": {
          "A": "It is passed on only to female offspring.",
          "B": "It ensures that almost all offspring receive the modified gene.",
          "C": "It reduces the chance of a gene being inherited to fifty percent.",
          "D": "It can only spread within populations kept in laboratory cages.",
          "E": "It changes the genes of adult insects rather than their offspring."
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Tanım Sorusu",
        "trapWarning": "C şıkkı normal kalıtımı tarif eder. A şıkkı yanlış bir genellemedir: dişi sivrisinekler sadece bir uygulama örneğidir. D şıkkı kafes deneylerini kuralmış gibi sunar.",
        "explanation": "Metne göre gen sürücüsü kendini eş kromozoma kopyalar ve \"nearly all of the offspring inherit it\" (B şıkkı)."
      },
      {
        "id": "rb003_q2",
        "type": "reading",
        "title": "Gene Drives: Editing Wild Populations",
        "question": "Supporters of gene drives mentioned in the passage believe that _____ .",
        "options": {
          "A": "the technology may prevent more deaths than any existing vaccine",
          "B": "the effects of a drive can be reversed easily once it has spread",
          "C": "local communities should decide whether field trials go ahead",
          "D": "mosquitoes play no important role in natural food chains",
          "E": "the tool should be limited to the country that releases it"
        },
        "answer": "A",
        "difficulty": "Orta",
        "tacticUsed": "Görüş Sahibi Ayırma (Supporters vs Critics)",
        "trapWarning": "B ve C eleştirmenlerin ya da temkinli araştırmacıların görüşleriyle ilgilidir. D şıkkı metinde belirsizlik olarak geçer. E şıkkı metne aykırıdır: sürücü sınır tanımaz.",
        "explanation": "İkinci paragrafın sonunda \"Supporters argue that the technology could save more lives than any vaccine\" denir (A şıkkı)."
      },
      {
        "id": "rb003_q3",
        "type": "reading",
        "title": "Gene Drives: Editing Wild Populations",
        "question": "One concern raised by critics is that _____ .",
        "options": {
          "A": "gene drives have so far failed to reduce mosquito numbers even in carefully controlled caged trials",
          "B": "malaria parasites will quickly become resistant to the new vaccines",
          "C": "a drive released in one country may spread to others that did not agree to it",
          "D": "CRISPR is still far too expensive to be used on a large scale in the poorer countries",
          "E": "birds and bats will start carrying the malaria parasite"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Detay & Eş Anlamlı İfade (designed to spread across borders)",
        "trapWarning": "A şıkkı metinle çelişir: kafeslerde popülasyonlar yok edilmiştir. E şıkkı metindeki belirsizliği kesin ve yanlış bir sonuca çevirir. B ve D metinde yoktur.",
        "explanation": "Eleştirmenler \"a decision made by one country could affect ecosystems in many others\" der. Bu C şıkkıdır."
      },
      {
        "id": "rb003_q4",
        "type": "reading",
        "title": "Gene Drives: Editing Wild Populations",
        "question": "The author's attitude towards gene drives can best be described as _____ .",
        "options": {
          "A": "enthusiastic, because they could end malaria within a single year",
          "B": "dismissive, since they have no proven practical benefits",
          "C": "hostile, as they are certain to damage ecosystems",
          "D": "balanced, presenting both their potential and their risks",
          "E": "indifferent, as they are relevant only to laboratory research"
        },
        "answer": "D",
        "difficulty": "İleri",
        "tacticUsed": "Yazarın Tutumu",
        "trapWarning": "A, kafes deneyindeki \"bir yıl\" bilgisini gerçek dünyaya taşıyarak abartır. C şıkkı belirsizliği kesinliğe çevirir. B ve E metnin anlattığı faydalarla çelişir.",
        "explanation": "Yazar destekçilerin ve eleştirmenlerin görüşlerini yan yana verir, kendi adına taraf tutmaz. Bu dengeli bir tutumdur (D şıkkı)."
      }
    ]
  },
  {
    "id": "rb004",
    "title": "How Bats See with Sound",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Journal of Experimental Biology",
    "wordCount": 222,
    "passageText": "Most bats hunt at night, when their eyes are of limited use. Instead, they rely on echolocation: they emit high-pitched calls and listen for the echoes that bounce back from objects around them. By measuring how long an echo takes to return, a bat can judge the distance to its prey; by comparing the sound reaching each ear, it can work out the direction. Some species can detect a wire thinner than a human hair in complete darkness.\n\nEcholocation is not as simple as shouting and listening, however. A bat's call can be louder than a jet engine at close range, yet the returning echo is extremely faint. To avoid deafening itself, the bat contracts a tiny muscle in its middle ear a fraction of a second before each call, then relaxes it in time to hear the echo. As it closes in on an insect, it also increases its call rate dramatically, producing a rapid series of clicks known as the feeding buzz.\n\nInterestingly, the arms race between bats and their prey has shaped the evolution of both. Certain moths have developed ears that detect bat calls and trigger evasive dives, while others produce ultrasonic clicks of their own that appear to jam the bats' sonar. Some bats, in turn, have shifted their calls to frequencies that these moths cannot hear.",
    "vocabularyNotes": [
      {
        "word": "emit",
        "meaningTr": "yaymak, salmak",
        "contextNote": "İsim hali: emission (salınım, emisyon)."
      },
      {
        "word": "faint",
        "meaningTr": "zayıf, belli belirsiz",
        "contextNote": "Fiil olarak bayılmak anlamı da vardır."
      },
      {
        "word": "contract",
        "meaningTr": "kasılmak; sözleşme",
        "contextNote": "Burada kasın kasılması anlamında fiildir."
      },
      {
        "word": "evasive",
        "meaningTr": "kaçamak, kaçınan",
        "contextNote": "evade (kaçınmak) fiilinden."
      },
      {
        "word": "arms race",
        "meaningTr": "silahlanma yarışı",
        "contextNote": "Biyolojide av ile avcı arasındaki karşılıklı evrim için mecazi kullanılır."
      },
      {
        "word": "in turn",
        "meaningTr": "buna karşılık, sırayla",
        "contextNote": "Karşılıklı etkiyi anlatır; ÖSYM sık kullanır."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "To avoid deafening itself, the bat contracts a tiny muscle in its middle ear a fraction of a second before each call, then relaxes it in time to hear the echo.",
        "subject": "the bat (yarasa)",
        "mainVerb": "contracts ... then relaxes (kasar ... sonra gevşetir)",
        "objectsAndComplements": "a tiny muscle in its middle ear (orta kulağındaki küçük bir kası) + zaman ifadesi (her çağrıdan saniyenin bir kesri önce)",
        "grammaticalStructures": [
          "Amaç bildiren to-infinitive (To avoid deafening itself).",
          "avoid + V-ing.",
          "Paralel fiiller: contracts ..., then relaxes ...",
          "in time to + V1: bir şeyi yapmaya zamanında yetişmek."
        ],
        "translationTr": "Kendini sağır etmemek için yarasa, her çağrıdan saniyenin bir kesri kadar önce orta kulağındaki küçük bir kası kasar, ardından yankıyı duymaya zamanında yetişecek şekilde onu gevşetir."
      }
    ],
    "questions": [
      {
        "id": "rb004_q1",
        "type": "reading",
        "title": "How Bats See with Sound",
        "question": "According to the passage, a bat determines how far away its prey is by _____ .",
        "options": {
          "A": "comparing the loudness of the sound in each of its ears",
          "B": "measuring the time it takes for the echo to come back",
          "C": "watching the movement of insects in the dark",
          "D": "detecting the clicks that moths produce while flying",
          "E": "changing the frequency of its calls several times"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay Eşleme",
        "trapWarning": "A şıkkı yön bulmak için kullanılır, mesafe için değil; metindeki iki bilgiyi karıştıran klasik tuzaktır. C şıkkı metinle çelişir: gözler gece işe yaramaz.",
        "explanation": "\"By measuring how long an echo takes to return, a bat can judge the distance\" cümlesi doğrudan B şıkkıdır."
      },
      {
        "id": "rb004_q2",
        "type": "reading",
        "title": "How Bats See with Sound",
        "question": "Why does a bat contract a muscle in its middle ear before calling?",
        "options": {
          "A": "To make its call louder than a jet engine",
          "B": "To hear the faint echoes more clearly",
          "C": "To protect its hearing from its own loud call",
          "D": "To detect frequencies that moths cannot hear",
          "E": "To increase the rate of its calls near prey"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Amaç Sorusu (To avoid deafening itself)",
        "trapWarning": "B şıkkı mantıklı görünür ama kas çağrı sırasında kasılır, yankıyı duymak için ise gevşetilir. A ve E metindeki başka bilgileri yanlış ilişkilendirir.",
        "explanation": "Metin kasın \"to avoid deafening itself\" amacıyla kasıldığını söyler; yani kendi sesinden işitmesini korumak içindir (C şıkkı)."
      },
      {
        "id": "rb004_q3",
        "type": "reading",
        "title": "How Bats See with Sound",
        "question": "The \"feeding buzz\" mentioned in the passage refers to _____ .",
        "options": {
          "A": "the clicking sounds that moths make in order to confuse a bat that is approaching",
          "B": "a series of rapid calls a bat produces as it nears an insect",
          "C": "the echo that returns to a bat from a wire that is thinner than a human hair",
          "D": "the noise a bat makes while eating its prey",
          "E": "a low-frequency call that moths are unable to detect"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Gönderge / Tanım Sorusu",
        "trapWarning": "D şıkkı kelimenin günlük anlamına (feeding = yemek yeme) dayanan tuzaktır. A şıkkı güvelerin tıklamalarıdır. E şıkkı son paragraftaki bilgiyle karıştırır.",
        "explanation": "İkinci paragrafa göre yarasa böceğe yaklaşırken çağrı hızını artırır ve \"a rapid series of clicks known as the feeding buzz\" üretir (B şıkkı)."
      },
      {
        "id": "rb004_q4",
        "type": "reading",
        "title": "How Bats See with Sound",
        "question": "It can be inferred from the last paragraph that _____ .",
        "options": {
          "A": "moths have no effective way of escaping from hunting bats",
          "B": "bats have stopped using echolocation to hunt certain moths",
          "C": "adaptations in moths have led to further adaptations in bats",
          "D": "all moth species can now jam bat sonar with their own clicks",
          "E": "bats originally evolved echolocation as a direct response to the clicks of moths"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (arms race, in turn)",
        "trapWarning": "A şıkkı metinle çelişir. D şıkkı \"certain/some\" ifadelerini \"all\" ile genelleştirir. E şıkkı sebep-sonucu tersine çevirir. B şıkkı metinde yoktur; yarasalar frekanslarını değiştirmiştir.",
        "explanation": "\"Arms race\" ve \"in turn\" karşılıklı uyumu anlatır: güveler savunma geliştirmiş, bazı yarasalar da buna karşı frekans değiştirmiştir (C şıkkı)."
      }
    ]
  },
  {
    "id": "rb005",
    "title": "Why Machine Translation Still Stumbles",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from MIT Technology Review",
    "wordCount": 217,
    "passageText": "Machine translation has improved enormously since neural networks replaced the rule-based systems of the past. Older programs translated sentences word by word using grammar rules written by linguists, and the results were often comically literal. Modern systems instead learn from millions of sentences that humans have already translated, and they consider whole sentences at once. As a result, they now produce fluent text that readers frequently cannot distinguish from human work.\n\nFluency, however, can be misleading. Because neural systems are trained to produce the most probable sequence of words, they sometimes generate sentences that sound perfectly natural but say something different from the original. A dropped negative, for example, may turn a medical warning into its opposite without any visible error in the grammar. Such mistakes are arguably more dangerous than the clumsy errors of older systems, which at least warned readers that something had gone wrong.\n\nThe quality of translation also depends heavily on the amount of training data available. For widely used language pairs such as English and Spanish, the results are impressive. For languages with few digital texts, many of which are spoken by millions of people, performance remains poor. Researchers are now experimenting with methods that transfer knowledge from rich languages to poor ones, but closing this gap is likely to take years.",
    "vocabularyNotes": [
      {
        "word": "literal",
        "meaningTr": "harfi harfine, kelimesi kelimesine",
        "contextNote": "Zıt anlamlısı: figurative (mecazi)."
      },
      {
        "word": "distinguish",
        "meaningTr": "ayırt etmek",
        "contextNote": "distinguish A from B kalıbı."
      },
      {
        "word": "misleading",
        "meaningTr": "yanıltıcı",
        "contextNote": "mislead (yanıltmak) fiilinden."
      },
      {
        "word": "arguably",
        "meaningTr": "tartışmaya açık olsa da, muhtemelen",
        "contextNote": "Yazarın temkinli görüşünü gösterir."
      },
      {
        "word": "clumsy",
        "meaningTr": "beceriksiz, kaba",
        "contextNote": "Burada hantal, göze batan hatalar için."
      },
      {
        "word": "transfer",
        "meaningTr": "aktarmak",
        "contextNote": "transfer A to B kalıbıyla gelir."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Such mistakes are arguably more dangerous than the clumsy errors of older systems, which at least warned readers that something had gone wrong.",
        "subject": "Such mistakes (bu tür hatalar)",
        "mainVerb": "are (dır)",
        "objectsAndComplements": "arguably more dangerous than the clumsy errors of older systems (eski sistemlerin hantal hatalarından muhtemelen daha tehlikeli) + [which-clause]",
        "grammaticalStructures": [
          "Comparative (more dangerous than).",
          "Non-defining relative clause (which at least warned readers...).",
          "Past perfect (had gone wrong): uyarıdan önceki bir hatayı anlatır.",
          "arguably: yazarın temkinli yorumu."
        ],
        "translationTr": "Bu tür hatalar, eski sistemlerin en azından okura bir şeylerin ters gittiğini haber veren hantal hatalarından muhtemelen daha tehlikelidir."
      }
    ],
    "questions": [
      {
        "id": "rb005_q1",
        "type": "reading",
        "title": "Why Machine Translation Still Stumbles",
        "question": "According to the passage, modern translation systems differ from older ones in that they _____ .",
        "options": {
          "A": "rely on grammar rules carefully written by professional linguists",
          "B": "learn from large numbers of existing human translations",
          "C": "translate each word separately before combining the results",
          "D": "make errors that are easy for readers to notice",
          "E": "work equally well for all languages regardless of data"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Karşılaştırma Sorusu",
        "trapWarning": "A ve C eski sistemleri tarif eder. D şıkkı eski sistemlerin hatalarına aittir. E şıkkı son paragrafla çelişir.",
        "explanation": "İlk paragrafa göre modern sistemler \"learn from millions of sentences that humans have already translated\" (B şıkkı)."
      },
      {
        "id": "rb005_q2",
        "type": "reading",
        "title": "Why Machine Translation Still Stumbles",
        "question": "The author mentions a \"dropped negative\" in order to _____ .",
        "options": {
          "A": "show that neural systems still make grammatical mistakes more often than older systems",
          "B": "illustrate how a fluent translation can convey the wrong meaning",
          "C": "argue that medical texts should never be translated by machines",
          "D": "prove that older systems were more accurate than modern ones",
          "E": "explain why some languages have very little training data"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin İşlevi",
        "trapWarning": "A şıkkı tersidir: hata dilbilgisinde görünmez. C ve D yazarın varmadığı aşırı sonuçlardır. E şıkkı başka paragrafın konusudur.",
        "explanation": "Örnek, akıcı ve dilbilgisi hatasız bir cümlenin aslında anlamı tersine çevirebileceğini göstermek için verilmiştir (B şıkkı)."
      },
      {
        "id": "rb005_q3",
        "type": "reading",
        "title": "Why Machine Translation Still Stumbles",
        "question": "Why does the author consider the errors of older systems less dangerous?",
        "options": {
          "A": "Because they occurred only in specialised medical and technical texts",
          "B": "Because they were always corrected in advance by professional linguists",
          "C": "Because their obvious clumsiness alerted readers to a problem",
          "D": "Because they never changed the meaning of a sentence",
          "E": "Because they were limited to the most widely used pairs of languages"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Sebep Sorusu (which at least warned readers)",
        "trapWarning": "D şıkkı aşırı genellemedir; eski hatalar da anlamı bozabilirdi ama göze batardı. B ve E metinde yoktur.",
        "explanation": "Eski sistemlerin hataları \"at least warned readers that something had gone wrong\"; yani beceriksizlikleri okuru uyarıyordu (C şıkkı)."
      },
      {
        "id": "rb005_q4",
        "type": "reading",
        "title": "Why Machine Translation Still Stumbles",
        "question": "It can be concluded from the last paragraph that _____ .",
        "options": {
          "A": "languages spoken by few people are the only ones with poor results",
          "B": "the gap between rich and poor languages in translation quality will be closed very soon",
          "C": "translation quality is closely linked to the amount of digital text available",
          "D": "researchers have stopped working on languages with limited data",
          "E": "English-Spanish translation is still worse than older rule-based systems"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Sonuç Çıkarma",
        "trapWarning": "A şıkkı tuzaktır: metin az veri olan dillerin bazılarının milyonlarca kişi tarafından konuşulduğunu söyler. B şıkkı \"likely to take years\" ile çelişir. D şıkkı tam tersidir.",
        "explanation": "Paragraf \"The quality of translation also depends heavily on the amount of training data available\" diye başlar ve örneklerle bunu destekler (C şıkkı)."
      }
    ]
  },
  {
    "id": "rb006",
    "title": "The Gut-Brain Axis",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from Cell & The Lancet Psychiatry",
    "wordCount": 226,
    "passageText": "The human gut contains trillions of bacteria, collectively known as the microbiome, and for a long time they were thought to matter mainly for digestion. Over the past two decades, however, evidence has accumulated that these microbes also communicate with the brain. They produce chemicals that act on the nervous system, including most of the body's serotonin, a molecule closely associated with mood. They also send signals along the vagus nerve, a long nerve connecting the digestive tract to the brainstem.\n\nThe most striking findings come from experiments on mice. Animals raised in completely sterile conditions, without any gut bacteria, react to stress in exaggerated ways, and their behaviour partly returns to normal when they are given bacteria from healthy mice. In one study, mice that received gut bacteria from depressed human patients began to show signs of depression themselves.\n\nResearchers are cautious about applying these results to humans. Mice are not small people, and most human studies so far have only shown correlations: people with depression tend to have less diverse microbiomes, but it is unclear whether the bacteria cause the illness or the illness, through changes in diet and stress, alters the bacteria. Clinical trials of so-called psychobiotics, probiotic supplements intended to improve mental health, have produced mixed results. Nevertheless, the field has changed how scientists think about the boundary between body and mind.",
    "vocabularyNotes": [
      {
        "word": "accumulate",
        "meaningTr": "birikmek, toplanmak",
        "contextNote": "evidence accumulates kalıbı akademik metinlerde yaygındır."
      },
      {
        "word": "sterile",
        "meaningTr": "steril, mikropsuz; kısır",
        "contextNote": "Burada mikroorganizma içermeyen anlamında."
      },
      {
        "word": "exaggerated",
        "meaningTr": "abartılı",
        "contextNote": "exaggerate (abartmak) fiilinden."
      },
      {
        "word": "correlation",
        "meaningTr": "ilişki, korelasyon",
        "contextNote": "Korelasyon nedensellik değildir: YDS'de sık tuzak."
      },
      {
        "word": "diverse",
        "meaningTr": "çeşitli, farklı",
        "contextNote": "İsim: diversity."
      },
      {
        "word": "boundary",
        "meaningTr": "sınır",
        "contextNote": "Eş anlamlısı: border, limit."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "People with depression tend to have less diverse microbiomes, but it is unclear whether the bacteria cause the illness or the illness, through changes in diet and stress, alters the bacteria.",
        "subject": "People with depression (depresyonu olan insanlar) / it (gizli özne)",
        "mainVerb": "tend to have ... / is unclear (sahip olma eğilimindedir / belirsizdir)",
        "objectsAndComplements": "[whether A or B: bakterilerin hastalığa mı yol açtığı, yoksa hastalığın mı bakterileri değiştirdiği]",
        "grammaticalStructures": [
          "but ile karşıtlık.",
          "it is unclear whether ... or ...: iki ihtimalli isim cümleciği.",
          "Araya giren edat öbeği (through changes in diet and stress).",
          "Ters çevrilmiş özne-nesne yapısı: bacteria cause illness / illness alters bacteria."
        ],
        "translationTr": "Depresyonu olan kişilerin mikrobiyomu daha az çeşitli olma eğilimindedir, ancak bakterilerin mi hastalığa yol açtığı, yoksa hastalığın mı beslenme ve stresteki değişiklikler yoluyla bakterileri değiştirdiği belirsizdir."
      }
    ],
    "questions": [
      {
        "id": "rb006_q1",
        "type": "reading",
        "title": "The Gut-Brain Axis",
        "question": "According to the passage, gut bacteria may influence the brain by _____ .",
        "options": {
          "A": "producing chemicals that act on the nervous system and sending signals along a nerve",
          "B": "increasing the diversity of the microbiome in people who already suffer from depression",
          "C": "replacing the serotonin that the brain normally produces with a more effective molecule",
          "D": "reducing the amount of stress that the digestive system experiences after a heavy meal",
          "E": "preventing the vagus nerve from carrying signals between the stomach and the brainstem"
        },
        "answer": "A",
        "difficulty": "Orta",
        "tacticUsed": "Detay Sorusu (iki mekanizma)",
        "trapWarning": "E şıkkı vagus sinirinin rolünü tersine çevirir. C şıkkı metinde olmayan bir değişim iddiasıdır. B şıkkı ilişkiyi ters yönden kurar.",
        "explanation": "İlk paragrafta bakterilerin sinir sistemine etki eden kimyasallar ürettiği ve vagus siniri boyunca sinyal gönderdiği söylenir (A şıkkı)."
      },
      {
        "id": "rb006_q2",
        "type": "reading",
        "title": "The Gut-Brain Axis",
        "question": "The experiments with mice raised in sterile conditions suggest that _____ .",
        "options": {
          "A": "the absence of gut bacteria has no measurable effect on behaviour",
          "B": "gut bacteria play a role in how the animals respond to stress",
          "C": "bacteria from depressed humans make mice resistant to stress",
          "D": "mice need far fewer bacteria than humans in order to stay healthy",
          "E": "sterile conditions permanently damage the vagus nerve of young mice"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Deney Sonucundan Çıkarım",
        "trapWarning": "A şıkkı tam tersidir. C şıkkı deneyin sonucunu ters çevirir: o fareler depresyon belirtileri gösterir. E şıkkı metinde olmayan bir sebep uydurur.",
        "explanation": "Bakterisiz fareler strese abartılı tepki verir ve bakteri verilince davranışları kısmen düzelir; demek ki bakteriler stres tepkisinde rol oynar (B şıkkı)."
      },
      {
        "id": "rb006_q3",
        "type": "reading",
        "title": "The Gut-Brain Axis",
        "question": "Why are researchers cautious about the human evidence?",
        "options": {
          "A": "Human trials of psychobiotics have all shown clear and lasting benefits for patients",
          "B": "Most human studies show correlations without establishing which factor is the cause",
          "C": "People with depression have been found to have far more diverse microbiomes than others",
          "D": "Ethical rules prevent scientists from studying the human microbiome at all",
          "E": "The vagus nerve in humans is not connected to the digestive tract"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Korelasyon ≠ Nedensellik",
        "trapWarning": "A şıkkı \"mixed results\" ile çelişir. C şıkkı metnin tersini söyler. D ve E metinde yoktur.",
        "explanation": "Metin insan çalışmalarının çoğunun yalnızca korelasyon gösterdiğini ve hangisinin neden olduğunun belirsiz olduğunu açıkça söyler (B şıkkı)."
      },
      {
        "id": "rb006_q4",
        "type": "reading",
        "title": "The Gut-Brain Axis",
        "question": "The sentence \"Mice are not small people\" is used to emphasize that _____ .",
        "options": {
          "A": "mice are more sensitive to stress than human beings usually are",
          "B": "findings from animal studies cannot automatically be applied to humans",
          "C": "experiments on mice should be replaced by experiments on human volunteers",
          "D": "the microbiome of mice is much less diverse than that of human beings",
          "E": "human depression is caused by entirely different bacteria from those of mice"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "İfadenin İşlevi",
        "trapWarning": "C şıkkı yazarın önermediği bir sonuçtur. A, D ve E fareler ile insanlar arasında metinde geçmeyen özel farklar uydurur.",
        "explanation": "Cümle, araştırmacıların fare sonuçlarını insanlara uygulama konusundaki temkinini açıklar; yani hayvan bulguları doğrudan insana genellenemez (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb007",
    "title": "The Honest Placebo",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from BMJ & Harvard Medical School research",
    "wordCount": 234,
    "passageText": "The placebo effect, in which patients improve after receiving a treatment with no active ingredient, has traditionally been explained by deception. Patients believe they are taking a real drug, and their expectation of recovery triggers genuine changes in how they feel. For this reason, doctors have long assumed that a placebo would stop working the moment a patient learned the truth.\n\nA growing number of studies challenge this assumption. In so-called open-label trials, patients are told directly that they are receiving sugar pills containing no medicine at all. Surprisingly, many of them still report significant improvements. In a well-known study of people with irritable bowel syndrome, those who knowingly took placebo pills twice a day for three weeks reported clearly greater relief than a group that received no treatment. Similar results have since been reported for chronic back pain and cancer-related fatigue.\n\nWhy honest placebos work is not fully understood. One explanation is that the ritual of treatment itself, including the act of swallowing a pill and the attention of a caring doctor, activates the brain's own pain-relieving systems. Another is conditioning: after years of taking medicines that help, the body may respond automatically to the experience of taking a pill. Whatever the mechanism, researchers stress that open-label placebos are best suited to conditions defined largely by symptoms, such as pain and fatigue, and that they cannot shrink a tumour or cure an infection.",
    "vocabularyNotes": [
      {
        "word": "deception",
        "meaningTr": "aldatma, kandırma",
        "contextNote": "deceive (aldatmak) fiilinden."
      },
      {
        "word": "trigger",
        "meaningTr": "tetiklemek",
        "contextNote": "Eş anlamlısı: set off, prompt, provoke."
      },
      {
        "word": "assumption",
        "meaningTr": "varsayım",
        "contextNote": "assume (varsaymak) fiilinden."
      },
      {
        "word": "chronic",
        "meaningTr": "kronik, süregelen",
        "contextNote": "Zıt anlamlısı: acute (akut)."
      },
      {
        "word": "fatigue",
        "meaningTr": "yorgunluk, bitkinlik",
        "contextNote": "Eş anlamlısı: exhaustion, tiredness."
      },
      {
        "word": "conditioning",
        "meaningTr": "koşullanma",
        "contextNote": "Psikolojide öğrenilmiş otomatik tepki."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Whatever the mechanism, researchers stress that open-label placebos are best suited to conditions defined largely by symptoms, such as pain and fatigue, and that they cannot shrink a tumour or cure an infection.",
        "subject": "researchers (araştırmacılar)",
        "mainVerb": "stress (vurgularlar)",
        "objectsAndComplements": "[that-clause 1: açık plaseboların en çok semptomlarla tanımlanan durumlara uygun olduğu] + [that-clause 2: tümör küçültemeyecekleri ya da enfeksiyonu iyileştiremeyecekleri]",
        "grammaticalStructures": [
          "Whatever + isim (Whatever the mechanism [is]): her ne olursa olsun.",
          "İki paralel that-clause (that ... and that ...).",
          "Reduced relative clause (conditions defined largely by symptoms).",
          "be suited to: -e uygun olmak."
        ],
        "translationTr": "Mekanizma ne olursa olsun, araştırmacılar açık etiketli plaseboların en çok ağrı ve yorgunluk gibi büyük ölçüde semptomlarla tanımlanan durumlara uygun olduğunu ve bir tümörü küçültemeyeceklerini ya da bir enfeksiyonu iyileştiremeyeceklerini vurgulamaktadır."
      }
    ],
    "questions": [
      {
        "id": "rb007_q1",
        "type": "reading",
        "title": "The Honest Placebo",
        "question": "According to the traditional view mentioned in the passage, a placebo works because _____ .",
        "options": {
          "A": "sugar itself has a mild but measurable effect on the brain's pain-relieving systems",
          "B": "patients mistakenly believe that they are receiving an active drug",
          "C": "doctors carefully explain to patients how the pills are made",
          "D": "patients have taken real medicines for many years beforehand",
          "E": "the ritual of swallowing a pill relaxes the digestive system"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Görüş Ayırma (traditional view)",
        "trapWarning": "D ve E metinde açık plasebolar için önerilen yeni açıklamalardır; geleneksel görüş değildir. C şıkkı açık etiketli denemeleri anlatır.",
        "explanation": "Geleneksel açıklama aldatmaya dayanır: hasta gerçek ilaç aldığına inanır (B şıkkı)."
      },
      {
        "id": "rb007_q2",
        "type": "reading",
        "title": "The Honest Placebo",
        "question": "What is surprising about the open-label trials?",
        "options": {
          "A": "Patients improved even though they knew the pills contained no medicine",
          "B": "Doctors refused to tell patients that the pills contained only sugar",
          "C": "Patients who received no treatment reported the greatest relief of all",
          "D": "The placebo pills turned out to contain a small amount of medicine",
          "E": "The improvements disappeared as soon as the trial ended after three weeks"
        },
        "answer": "A",
        "difficulty": "İleri",
        "tacticUsed": "Beklenti-Sonuç Zıtlığı (Surprisingly)",
        "trapWarning": "B şıkkı denemenin tanımına aykırıdır. C şıkkı sonucu ters çevirir. E şıkkı metinde yoktur.",
        "explanation": "\"Surprisingly, many of them still report significant improvements\" cümlesi, hastaların gerçeği bildikleri halde iyileştiğini gösterir (A şıkkı)."
      },
      {
        "id": "rb007_q3",
        "type": "reading",
        "title": "The Honest Placebo",
        "question": "The word \"stress\" in the last paragraph is closest in meaning to _____ .",
        "options": {
          "A": "worry",
          "B": "deny",
          "C": "emphasize",
          "D": "suspect",
          "E": "discover"
        },
        "answer": "C",
        "difficulty": "Orta",
        "tacticUsed": "Bağlamdan Kelime Anlamı (fiil olarak stress)",
        "trapWarning": "A, \"stress\" kelimesinin isim anlamına (stres, endişe) dayanan tuzaktır. Burada fiildir ve vurgulamak demektir.",
        "explanation": "\"Researchers stress that ...\" yapısında stress = vurgulamak, yani \"emphasize\" (C şıkkı)."
      },
      {
        "id": "rb007_q4",
        "type": "reading",
        "title": "The Honest Placebo",
        "question": "It can be inferred from the passage that open-label placebos would be least appropriate for _____ .",
        "options": {
          "A": "a patient suffering from long-term lower back pain",
          "B": "a person who feels constantly tired during cancer treatment",
          "C": "a patient with irritable bowel syndrome",
          "D": "a patient with a serious bacterial infection",
          "E": "a person with chronic pain of unknown origin"
        },
        "answer": "D",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım & Uygulama",
        "trapWarning": "A, B, C ve E metinde plasebonun işe yaradığı semptom temelli durumlardır.",
        "explanation": "Son cümle açık plaseboların \"cannot shrink a tumour or cure an infection\" olduğunu söyler; bu yüzden ciddi bir bakteriyel enfeksiyon için en uygunsuz seçenektir (D şıkkı)."
      }
    ]
  },
  {
    "id": "rb008",
    "title": "Sleep and the Consolidation of Memory",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from Nature Reviews Neuroscience",
    "wordCount": 231,
    "passageText": "It has long been known that people remember information better after a night's sleep than after an equal period of wakefulness. For many years this was explained passively: sleep simply protected new memories from interference by shielding the brain from fresh experiences. Research over the past thirty years, however, indicates that the sleeping brain plays a far more active role.\n\nDuring the day, new memories are stored temporarily in the hippocampus, a small structure deep in the brain. During deep, slow-wave sleep, the hippocampus repeatedly replays these experiences, often at many times their original speed. This replay appears to transfer the memories to the cortex, the brain's outer layer, where they can be stored for the long term and linked to existing knowledge. When researchers disrupted slow-wave sleep in volunteers with gentle sounds, without waking them, the volunteers' memory for words learned the previous evening was noticeably weaker.\n\nSleep does not strengthen all memories equally, however. Studies suggest that the brain gives priority to information that is expected to be useful in the future. Volunteers who were told before sleeping that they would be tested the next day remembered more than those who were not told, even though both groups had studied the same material. Such findings have practical implications for students, for whom staying up all night before an exam may undermine the very learning they are trying to secure.",
    "vocabularyNotes": [
      {
        "word": "consolidation",
        "meaningTr": "pekiştirme, sağlamlaştırma",
        "contextNote": "Bellek araştırmalarında temel terimdir."
      },
      {
        "word": "interference",
        "meaningTr": "müdahale, karışma",
        "contextNote": "interfere with kalıbıyla fiil hali."
      },
      {
        "word": "shield",
        "meaningTr": "korumak, siper etmek",
        "contextNote": "Eş anlamlısı: protect, guard."
      },
      {
        "word": "disrupt",
        "meaningTr": "bozmak, kesintiye uğratmak",
        "contextNote": "İsim: disruption."
      },
      {
        "word": "give priority to",
        "meaningTr": "-e öncelik vermek",
        "contextNote": "prioritize ile eş anlamlı."
      },
      {
        "word": "undermine",
        "meaningTr": "baltalamak, zayıflatmak",
        "contextNote": "ÖSYM'nin en sevdiği fiillerden. Eş anlamlısı: weaken."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Such findings have practical implications for students, for whom staying up all night before an exam may undermine the very learning they are trying to secure.",
        "subject": "Such findings (bu tür bulgular)",
        "mainVerb": "have (sahiptir)",
        "objectsAndComplements": "practical implications for students (öğrenciler için pratik sonuçlar) + [for whom-clause]",
        "grammaticalStructures": [
          "Edatlı relative clause (for whom ...): öğrenciler için.",
          "Gerund özne (staying up all night).",
          "the very + isim: tam da o (vurgu).",
          "Gizli relative clause (the learning [that] they are trying to secure)."
        ],
        "translationTr": "Bu tür bulgular öğrenciler için pratik sonuçlar doğurur; zira onlar için bir sınavdan önce bütün gece uyumamak, tam da sağlama almaya çalıştıkları öğrenmeyi baltalayabilir."
      }
    ],
    "questions": [
      {
        "id": "rb008_q1",
        "type": "reading",
        "title": "Sleep and the Consolidation of Memory",
        "question": "According to the older, passive explanation, sleep improves memory because it _____ .",
        "options": {
          "A": "replays the day's experiences at a much faster speed",
          "B": "transfers memories from the hippocampus to the cortex",
          "C": "prevents new experiences from interfering with recent memories",
          "D": "gives priority to information that will be useful later",
          "E": "strengthens all memories equally regardless of their importance"
        },
        "answer": "C",
        "difficulty": "Orta",
        "tacticUsed": "Eski Görüş / Yeni Görüş Ayrımı",
        "trapWarning": "A, B ve D metnin anlattığı yeni, aktif görüşe aittir. E şıkkı son paragrafla çelişir.",
        "explanation": "Pasif açıklamaya göre uyku, beyni yeni deneyimlerden koruyarak anıları karışmaya karşı korur (C şıkkı)."
      },
      {
        "id": "rb008_q2",
        "type": "reading",
        "title": "Sleep and the Consolidation of Memory",
        "question": "The experiment in which slow-wave sleep was disrupted with sounds shows that _____ .",
        "options": {
          "A": "volunteers woke up frequently during the night and therefore felt very tired",
          "B": "deep sleep contributes to the retention of newly learned material",
          "C": "gentle sounds played during sleep can improve people's memory for new words",
          "D": "the hippocampus stops working completely during deep sleep",
          "E": "the cortex can store memories without any help from sleep"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Deney Yorumu",
        "trapWarning": "A şıkkı deneyin tasarımıyla çelişir: katılımcılar uyandırılmamıştır. C şıkkı sonucu tersine çevirir. D şıkkı metne aykırıdır.",
        "explanation": "Yavaş dalga uykusu bozulunca kelime hafızası zayıflamıştır; bu, derin uykunun yeni öğrenilenlerin korunmasına katkı yaptığını gösterir (B şıkkı)."
      },
      {
        "id": "rb008_q3",
        "type": "reading",
        "title": "Sleep and the Consolidation of Memory",
        "question": "The study in which some volunteers were told about a test suggests that _____ .",
        "options": {
          "A": "people who expect a test study much harder than those who do not",
          "B": "the brain gives preference during sleep to memories it expects to need",
          "C": "telling people about a test causes stress that weakens their memory",
          "D": "both groups remembered the same amount because they studied the same material",
          "E": "volunteers who were not told about the test slept for a longer period"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (gives priority to ...)",
        "trapWarning": "A şıkkı tuzaktır: iki grup aynı materyali çalışmıştır, fark çalışma miktarında değildir. D şıkkı sonucu inkâr eder. C şıkkı metinle çelişir.",
        "explanation": "Testten haberi olanlar daha fazla hatırlamıştır; metin bunu beynin gelecekte işe yarayacak bilgiye öncelik vermesiyle açıklar (B şıkkı)."
      },
      {
        "id": "rb008_q4",
        "type": "reading",
        "title": "Sleep and the Consolidation of Memory",
        "question": "The author's main point about students in the final sentence is that _____ .",
        "options": {
          "A": "they should avoid studying in the evening before going to sleep",
          "B": "they should tell their teachers in advance when they plan to sleep",
          "C": "sacrificing sleep to study may weaken the learning they want to achieve",
          "D": "staying awake all night is the most effective way to prepare for an exam",
          "E": "they remember information better when they study in short sessions"
        },
        "answer": "C",
        "difficulty": "Orta",
        "tacticUsed": "Sonuç Cümlesi Yorumu",
        "trapWarning": "D şıkkı tam tersidir. A ve E metinde verilmemiş tavsiyelerdir. B şıkkı ilgiyi saçma biçimde uygular.",
        "explanation": "Son cümleye göre sınavdan önce bütün gece uyanık kalmak, sağlanmak istenen öğrenmeyi baltalayabilir (C şıkkı)."
      }
    ]
  },
  {
    "id": "rb009",
    "title": "The Myopia Epidemic",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from Nature & Ophthalmology",
    "wordCount": 238,
    "passageText": "Short-sightedness, or myopia, is spreading at an astonishing rate. In parts of East Asia, as many as eighty to ninety percent of young adults are now myopic, compared with about twenty percent two generations ago. Rates are rising in Europe and North America too, though less dramatically. Because myopia increases the risk of serious eye conditions later in life, including retinal detachment and glaucoma, public health experts have begun to describe the trend as an epidemic.\n\nFor a long time, the condition was blamed on reading and, more recently, on the use of screens. Close work certainly seems to play some role. However, large studies have found that the strongest protective factor is not reducing close work but simply spending time outdoors. Children who spend more hours outside are less likely to become myopic, regardless of how much they read. The leading explanation involves light: outdoor light is many times brighter than indoor lighting, and bright light stimulates the release of dopamine in the retina, which appears to slow the elongation of the eyeball that causes myopia.\n\nThese findings have led to practical interventions. In a trial in Guangzhou, China, schools added forty minutes of outdoor activity to each school day, and the number of new myopia cases fell by about a quarter over three years. Taiwan, which introduced a national programme encouraging two hours of daily outdoor time, has reported a reversal in its long-rising myopia rates.",
    "vocabularyNotes": [
      {
        "word": "astonishing",
        "meaningTr": "şaşırtıcı, hayret verici",
        "contextNote": "Eş anlamlısı: remarkable, startling."
      },
      {
        "word": "detachment",
        "meaningTr": "ayrılma, kopma",
        "contextNote": "retinal detachment: retina yırtılması/dekolmanı."
      },
      {
        "word": "blame on",
        "meaningTr": "-i suçlamak, sorumlu tutmak",
        "contextNote": "blame A on B: A'dan B'yi sorumlu tutmak."
      },
      {
        "word": "regardless of",
        "meaningTr": "-e bakılmaksızın",
        "contextNote": "YDS'de bağlaç sorusu olarak da gelir."
      },
      {
        "word": "elongation",
        "meaningTr": "uzama",
        "contextNote": "elongate (uzamak) fiilinden."
      },
      {
        "word": "reversal",
        "meaningTr": "tersine dönüş",
        "contextNote": "reverse (tersine çevirmek) fiilinden."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Bright light stimulates the release of dopamine in the retina, which appears to slow the elongation of the eyeball that causes myopia.",
        "subject": "Bright light (parlak ışık)",
        "mainVerb": "stimulates (uyarır, tetikler)",
        "objectsAndComplements": "the release of dopamine in the retina (retinada dopamin salınımını) + [which-clause: göz küresinin uzamasını yavaşlatıyor gibi görünen] + [that-clause: miyopiye yol açan]",
        "grammaticalStructures": [
          "İç içe iki relative clause (which ... / that ...).",
          "appear to + V1: gibi görünmek (temkinli dil).",
          "İsim öbeği zinciri (the elongation of the eyeball)."
        ],
        "translationTr": "Parlak ışık retinada dopamin salınımını uyarır; dopamin de miyopiye neden olan göz küresi uzamasını yavaşlatıyor gibi görünmektedir."
      }
    ],
    "questions": [
      {
        "id": "rb009_q1",
        "type": "reading",
        "title": "The Myopia Epidemic",
        "question": "Experts have started to call myopia an epidemic because _____ .",
        "options": {
          "A": "it spreads easily from one child to another in the crowded classrooms of schools",
          "B": "its rates have risen sharply and it raises the risk of serious eye disease",
          "C": "it can no longer be corrected effectively with ordinary glasses or contact lenses",
          "D": "it is found only in East Asia and nowhere else in the world",
          "E": "screens have been proven to be the only cause of the condition"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep Sorusu",
        "trapWarning": "A, \"epidemic\" kelimesinin bulaşıcı hastalık çağrışımına dayanan tuzaktır. D şıkkı metinle çelişir (Avrupa ve Kuzey Amerika). E şıkkı ikinci paragrafa aykırıdır.",
        "explanation": "İlk paragraf hızlı artışı ve ileride ciddi göz hastalıklarına yol açma riskini birlikte verir; uzmanların \"salgın\" demesinin nedeni budur (B şıkkı)."
      },
      {
        "id": "rb009_q2",
        "type": "reading",
        "title": "The Myopia Epidemic",
        "question": "According to the passage, the most important protective factor against myopia is _____ .",
        "options": {
          "A": "reading less and avoiding close work",
          "B": "using screens only for short periods",
          "C": "spending more time outside",
          "D": "wearing glasses from an early age",
          "E": "taking dopamine supplements"
        },
        "answer": "C",
        "difficulty": "Orta",
        "tacticUsed": "Detay & Zıtlık (not ... but ...)",
        "trapWarning": "A ve B eski görüşe aittir; metin \"not reducing close work but simply spending time outdoors\" der. E şıkkı dopamin bilgisini yanlış uygular.",
        "explanation": "Büyük çalışmalara göre en güçlü koruyucu etken dışarıda zaman geçirmektir (C şıkkı)."
      },
      {
        "id": "rb009_q3",
        "type": "reading",
        "title": "The Myopia Epidemic",
        "question": "It is stated in the passage that outdoor light may protect against myopia because it _____ .",
        "options": {
          "A": "reduces the amount of time children spend reading books",
          "B": "is much brighter and triggers dopamine release in the retina",
          "C": "lengthens the eyeball so that distant objects are seen clearly",
          "D": "contains less blue light than modern electronic screens",
          "E": "relaxes the eye muscles that are strained by close work"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Mekanizma Sorusu",
        "trapWarning": "C şıkkı mekanizmayı tersine çevirir: miyopiye uzama yol açar. A şıkkı \"regardless of how much they read\" ile çelişir. D ve E metinde yoktur.",
        "explanation": "Dış mekân ışığı çok daha parlaktır ve retinada dopamin salınımını uyarır (B şıkkı)."
      },
      {
        "id": "rb009_q4",
        "type": "reading",
        "title": "The Myopia Epidemic",
        "question": "The examples of Guangzhou and Taiwan are given to show that _____ .",
        "options": {
          "A": "myopia rates in East Asia are higher than anywhere else in the world",
          "B": "school-based outdoor programmes can reduce the spread of myopia",
          "C": "children in China and Taiwan read more than children elsewhere",
          "D": "two hours of daily outdoor time are needed to cure existing myopia",
          "E": "national programmes are always more effective than local trials"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneklerin İşlevi",
        "trapWarning": "D şıkkı \"cure\" diyerek abartır; programlar yeni vakaları azaltır. E şıkkı iki örnek arasında metinde olmayan bir kıyas kurar. A ve C örneklerin amacı değildir.",
        "explanation": "İki örnek de dış mekân etkinliğini artıran okul programlarının miyopi artışını azalttığını gösterir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb010",
    "title": "Loneliness as a Health Risk",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from PLOS Medicine & The Lancet",
    "wordCount": 231,
    "passageText": "Loneliness is usually discussed as an emotional problem, but a substantial body of research now treats it as a risk factor for physical illness. A widely cited analysis of nearly 150 studies concluded that weak social relationships increase the risk of early death to a degree comparable to smoking fifteen cigarettes a day and greater than that of obesity or physical inactivity. Lonely people are more likely to develop heart disease, to suffer strokes and to experience faster cognitive decline in old age.\n\nIt is important to distinguish loneliness from social isolation. Isolation is an objective condition: a person who lives alone and rarely sees others is isolated. Loneliness, by contrast, is the subjective feeling that one's relationships are inadequate. A person surrounded by family can feel lonely, while someone who lives alone may feel perfectly content. Both conditions are linked to poorer health, but they do not always occur together.\n\nScientists have proposed several ways in which loneliness may damage the body. Chronic loneliness is associated with elevated levels of stress hormones, raised blood pressure and inflammation. Lonely people also tend to sleep poorly and are less likely to exercise or to seek medical help. From an evolutionary perspective, some researchers argue that loneliness once served a useful purpose, signalling danger and motivating people to rejoin the group, but that in modern societies this alarm can remain switched on for years.",
    "vocabularyNotes": [
      {
        "word": "substantial",
        "meaningTr": "önemli, büyük, kayda değer",
        "contextNote": "Eş anlamlısı: considerable, significant."
      },
      {
        "word": "comparable",
        "meaningTr": "karşılaştırılabilir, denk",
        "contextNote": "comparable to kalıbı."
      },
      {
        "word": "inadequate",
        "meaningTr": "yetersiz",
        "contextNote": "Zıt anlamlısı: adequate, sufficient."
      },
      {
        "word": "content",
        "meaningTr": "memnun, hoşnut",
        "contextNote": "Sıfat olarak vurgu ikinci hecede: con-TENT."
      },
      {
        "word": "elevated",
        "meaningTr": "yükselmiş, yüksek",
        "contextNote": "Eş anlamlısı: raised, high."
      },
      {
        "word": "inflammation",
        "meaningTr": "iltihap, enflamasyon",
        "contextNote": "inflame fiilinden."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Some researchers argue that loneliness once served a useful purpose, signalling danger and motivating people to rejoin the group, but that in modern societies this alarm can remain switched on for years.",
        "subject": "Some researchers (bazı araştırmacılar)",
        "mainVerb": "argue (ileri sürer)",
        "objectsAndComplements": "[that-clause 1: yalnızlığın bir zamanlar yararlı bir amaca hizmet ettiği] + [but that-clause 2: modern toplumlarda bu alarmın yıllarca açık kalabildiği]",
        "grammaticalStructures": [
          "İki that-clause'un but ile bağlanması.",
          "Participle clauses (signalling ... and motivating ...): sonucu/işlevi açıklar.",
          "motivate + nesne + to V1.",
          "remain + V3 (switched on): durum bildirir."
        ],
        "translationTr": "Bazı araştırmacılar yalnızlığın bir zamanlar tehlikeye işaret ederek ve insanları gruba yeniden katılmaya güdüleyerek yararlı bir amaca hizmet ettiğini, ancak modern toplumlarda bu alarmın yıllarca açık kalabildiğini ileri sürmektedir."
      }
    ],
    "questions": [
      {
        "id": "rb010_q1",
        "type": "reading",
        "title": "Loneliness as a Health Risk",
        "question": "The comparison with smoking in the first paragraph is used to _____ .",
        "options": {
          "A": "argue that lonely people are more likely to start smoking",
          "B": "show how serious the health effects of weak social ties can be",
          "C": "prove that loneliness is a more common habit than smoking",
          "D": "suggest that obesity and inactivity are no longer health risks",
          "E": "explain why heavy smokers usually have weak social relationships"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Karşılaştırmanın İşlevi",
        "trapWarning": "A ve E sigara ile yalnızlık arasında metinde olmayan bir nedensellik kurar. D şıkkı karşılaştırmayı yanlış yorumlar.",
        "explanation": "Sigara karşılaştırması zayıf sosyal ilişkilerin sağlık riskinin ne kadar büyük olduğunu göstermek için yapılmıştır (B şıkkı)."
      },
      {
        "id": "rb010_q2",
        "type": "reading",
        "title": "Loneliness as a Health Risk",
        "question": "According to the passage, the difference between loneliness and social isolation is that _____ .",
        "options": {
          "A": "isolation affects mainly older people living alone, while loneliness affects all age groups",
          "B": "loneliness is a personal feeling, whereas isolation is an observable situation",
          "C": "isolation is harmful to health, while loneliness has no physical effects",
          "D": "loneliness always leads to isolation if it is not treated in time",
          "E": "isolated people never feel lonely because they choose to live alone"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Tanım & Zıtlık (objective vs subjective)",
        "trapWarning": "C şıkkı metinle çelişir: ikisi de sağlıkla ilişkilidir. D şıkkı metnin \"they do not always occur together\" ifadesine aykırıdır. E şıkkı \"may feel perfectly content\" ifadesini \"never\" ile genelleştirir.",
        "explanation": "Metne göre izolasyon nesnel bir durumdur, yalnızlık ise ilişkilerin yetersiz olduğu yönündeki öznel histir (B şıkkı)."
      },
      {
        "id": "rb010_q3",
        "type": "reading",
        "title": "Loneliness as a Health Risk",
        "question": "Which of the following is NOT mentioned as a way in which loneliness may harm health?",
        "options": {
          "A": "Higher levels of stress hormones",
          "B": "Increased blood pressure",
          "C": "Poor sleep quality",
          "D": "An unhealthy diet high in sugar",
          "E": "Reluctance to seek medical care"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu – Eleme",
        "trapWarning": "A, B, C ve E son paragrafta tek tek geçer. Beslenme ise hiç anılmaz.",
        "explanation": "Metin stres hormonlarını, yüksek tansiyonu, kötü uykuyu ve tıbbi yardım aramamayı sayar; şekerli beslenmeden söz etmez (D şıkkı)."
      },
      {
        "id": "rb010_q4",
        "type": "reading",
        "title": "Loneliness as a Health Risk",
        "question": "According to the evolutionary view mentioned in the passage, loneliness _____ .",
        "options": {
          "A": "has always been harmful and served no purpose in the past",
          "B": "originally encouraged people to return to the safety of the group",
          "C": "developed only quite recently as a direct result of crowded modern city life",
          "D": "can be switched off easily once a person makes new friends",
          "E": "protected early humans from the diseases spread within groups"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş Detayı",
        "trapWarning": "A ve C görüşün tam tersidir. D şıkkı \"can remain switched on for years\" ile çelişir. E şıkkı metinde olmayan bir işlev uydurur.",
        "explanation": "Evrimsel görüşe göre yalnızlık tehlikeye işaret ederek insanları gruba geri dönmeye güdülerdi (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb011",
    "title": "Göbekli Tepe and the Origins of Civilization",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Antiquity & National Geographic",
    "wordCount": 220,
    "passageText": "For much of the twentieth century, archaeologists agreed on a simple sequence of events. First, people learned to farm; then, once they had a reliable food supply, they settled in villages, and only after that did they build temples and develop organized religion. Monumental architecture, in this view, was a product of agriculture.\n\nThe excavation of Göbekli Tepe in southeastern Turkey, which began in 1995, turned this sequence upside down. The site contains massive circles of carved limestone pillars, some more than five metres tall and weighing several tonnes, decorated with images of foxes, snakes, vultures and scorpions. Radiocarbon dating shows that the oldest structures were built around 9500 BC, at least a thousand years before domesticated crops appear in the region. The builders, in other words, were hunter-gatherers.\n\nKlaus Schmidt, who led the excavations until his death in 2014, argued that the site was a ritual centre where scattered groups gathered for ceremonies and feasts. Feeding the large workforces needed to quarry and raise the pillars, he suggested, may have encouraged people to cultivate wild grains more intensively, eventually leading to agriculture. Later research has complicated this picture, revealing houses and water-collection systems that suggest some people lived at the site. Even so, Göbekli Tepe remains strong evidence that complex communal projects could come before farming rather than after it.",
    "vocabularyNotes": [
      {
        "word": "sequence",
        "meaningTr": "sıra, dizi",
        "contextNote": "in sequence: sırayla."
      },
      {
        "word": "monumental",
        "meaningTr": "anıtsal, devasa",
        "contextNote": "monument (anıt) kelimesinden."
      },
      {
        "word": "excavation",
        "meaningTr": "kazı",
        "contextNote": "excavate (kazı yapmak) fiilinden."
      },
      {
        "word": "domesticated",
        "meaningTr": "evcilleştirilmiş",
        "contextNote": "Bitki için de kullanılır: domesticated crops."
      },
      {
        "word": "scattered",
        "meaningTr": "dağınık, dağılmış",
        "contextNote": "scatter (dağıtmak) fiilinden."
      },
      {
        "word": "communal",
        "meaningTr": "ortak, topluluğa ait",
        "contextNote": "community kelimesiyle ilişkilidir."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Feeding the large workforces needed to quarry and raise the pillars, he suggested, may have encouraged people to cultivate wild grains more intensively, eventually leading to agriculture.",
        "subject": "Feeding the large workforces (büyük iş güçlerini beslemek) – gerund özne",
        "mainVerb": "may have encouraged (teşvik etmiş olabilir)",
        "objectsAndComplements": "people to cultivate wild grains more intensively (insanları yabani tahılları daha yoğun ekmeye) + [participle: sonunda tarıma yol açarak]",
        "grammaticalStructures": [
          "Gerund özne (Feeding ...).",
          "Reduced passive relative clause (workforces [that were] needed to ...).",
          "Araya giren ifade (he suggested).",
          "may have + V3: geçmişe dair olasılık.",
          "Sonuç bildiren -ing (eventually leading to)."
        ],
        "translationTr": "Sütunları taş ocağından çıkarıp dikmek için gereken büyük iş güçlerini beslemenin, insanları yabani tahılları daha yoğun biçimde yetiştirmeye teşvik etmiş ve sonunda tarıma yol açmış olabileceğini ileri sürdü."
      }
    ],
    "questions": [
      {
        "id": "rb011_q1",
        "type": "reading",
        "title": "Göbekli Tepe and the Origins of Civilization",
        "question": "According to the traditional view described in the first paragraph, _____ .",
        "options": {
          "A": "temples were built by hunter-gatherers before they settled in villages",
          "B": "monumental buildings appeared only after the development of farming",
          "C": "religion encouraged people to begin cultivating wild grains",
          "D": "agriculture and village life developed at exactly the same time",
          "E": "large ritual centres were the main reason that villages were built"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Eski Görüşün Tespiti",
        "trapWarning": "A ve C Göbekli Tepe'nin ortaya koyduğu yeni görüşe aittir. D şıkkı sıralamayı bozar. E şıkkı sebep-sonucu ters kurar.",
        "explanation": "Geleneksel görüşe göre önce tarım, sonra köy, en son tapınak gelir: \"Monumental architecture ... was a product of agriculture\" (B şıkkı)."
      },
      {
        "id": "rb011_q2",
        "type": "reading",
        "title": "Göbekli Tepe and the Origins of Civilization",
        "question": "Göbekli Tepe challenged earlier assumptions mainly because _____ .",
        "options": {
          "A": "its pillars are decorated with images of wild animals",
          "B": "it was excavated by a team led by a German archaeologist",
          "C": "it was built by people who did not yet farm",
          "D": "it contains the earliest known houses in the region",
          "E": "its builders used domesticated animals to move the stones"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Ana Fikir (in other words)",
        "trapWarning": "A şıkkı doğru bir detaydır ama varsayımı çürüten şey değildir. D şıkkı sonradan bulunan evlerden söz eder ve \"earliest\" diyerek abartır. E şıkkı metinde yoktur.",
        "explanation": "Yapılar tarımdan en az bin yıl önce inşa edilmiştir: \"The builders, in other words, were hunter-gatherers\" (C şıkkı)."
      },
      {
        "id": "rb011_q3",
        "type": "reading",
        "title": "Göbekli Tepe and the Origins of Civilization",
        "question": "According to Klaus Schmidt, the site may have contributed to the rise of agriculture because _____ .",
        "options": {
          "A": "the carved animals encouraged people to keep animals as pets",
          "B": "the need to feed many workers led to more intensive use of wild grains",
          "C": "people who lived at the site permanently began to grow crops near their houses",
          "D": "water-collection systems made the soil around the site especially fertile",
          "E": "religious leaders ordered hunter-gatherers to give up hunting entirely"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş Sahibinin Fikri",
        "trapWarning": "C ve D sonraki araştırmaların bulgularını Schmidt'in açıklamasıyla karıştırır. A ve E metinde yoktur.",
        "explanation": "Schmidt'e göre büyük iş güçlerini beslemek yabani tahılların daha yoğun yetiştirilmesine ve sonunda tarıma yol açmış olabilir (B şıkkı)."
      },
      {
        "id": "rb011_q4",
        "type": "reading",
        "title": "Göbekli Tepe and the Origins of Civilization",
        "question": "It can be understood from the last paragraph that later research _____ .",
        "options": {
          "A": "proved that Göbekli Tepe was built after the beginning of farming",
          "B": "showed that nobody ever lived at Göbekli Tepe",
          "C": "added details that made Schmidt's interpretation less simple",
          "D": "confirmed every aspect of Schmidt's original theory",
          "E": "found that the pillars had been moved from another site"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (has complicated this picture)",
        "trapWarning": "A şıkkı son cümleyle çelişir. B şıkkı bulguların tersini söyler. D şıkkı \"complicated\" ifadesine aykırıdır.",
        "explanation": "Sonraki araştırmalar evler ve su toplama sistemleri bularak tabloyu karmaşıklaştırmıştır; yani Schmidt'in yorumunu daha az basit hale getirmiştir (C şıkkı)."
      }
    ]
  },
  {
    "id": "rb012",
    "title": "The Black Death and the Price of Labour",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from The Economic History Review",
    "wordCount": 215,
    "passageText": "Between 1347 and 1351, the Black Death killed between a third and a half of Europe's population. The immediate consequences were catastrophic: fields went unharvested, villages were abandoned, and in many towns there were too few people left to bury the dead. Yet historians have long argued that the plague also had surprising long-term effects, some of which benefited the survivors.\n\nThe most important of these concerned labour. Before the epidemic, Europe had been crowded, and landlords could easily find peasants willing to work for low wages. After it, workers were scarce, and those who remained could demand higher pay or move to estates that offered better conditions. In England, real wages for agricultural labourers roughly doubled over the following century. Landlords and governments tried to resist these changes. The English Statute of Labourers of 1351, for example, attempted to fix wages at pre-plague levels, but it proved almost impossible to enforce.\n\nSome economic historians go further, arguing that the plague helped set Western Europe on a different path from Eastern Europe. In the West, the weakening of landlords contributed to the gradual decline of serfdom. In parts of the East, by contrast, landowners succeeded in tightening their control over peasants. Such arguments remain debated, but they illustrate how a demographic disaster could reshape social relationships for generations.",
    "vocabularyNotes": [
      {
        "word": "catastrophic",
        "meaningTr": "felaket niteliğinde, yıkıcı",
        "contextNote": "catastrophe (felaket) kelimesinden."
      },
      {
        "word": "scarce",
        "meaningTr": "kıt, az bulunan",
        "contextNote": "İsim: scarcity. Zıt anlamlısı: abundant."
      },
      {
        "word": "estate",
        "meaningTr": "malikâne, arazi",
        "contextNote": "Ayrıca miras ve emlak anlamları vardır."
      },
      {
        "word": "enforce",
        "meaningTr": "uygulamak, yürürlüğe koymak",
        "contextNote": "Kanun için kullanılır: enforce a law."
      },
      {
        "word": "serfdom",
        "meaningTr": "serflik, toprak köleliği",
        "contextNote": "serf: toprağa bağlı köylü."
      },
      {
        "word": "demographic",
        "meaningTr": "nüfusa ilişkin, demografik",
        "contextNote": "demography: nüfus bilimi."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "After it, workers were scarce, and those who remained could demand higher pay or move to estates that offered better conditions.",
        "subject": "workers / those who remained (işçiler / geride kalanlar)",
        "mainVerb": "were / could demand ... or move (idi / talep edebilir ya da taşınabilirlerdi)",
        "objectsAndComplements": "scarce (kıt) + higher pay (daha yüksek ücret) + to estates [that offered better conditions]",
        "grammaticalStructures": [
          "those who: -enler (zamir + relative clause).",
          "Paralel modal fiiller: could demand ... or move ...",
          "Defining relative clause (estates that offered better conditions)."
        ],
        "translationTr": "Salgından sonra işçiler kıtlaştı ve hayatta kalanlar daha yüksek ücret talep edebiliyor ya da daha iyi koşullar sunan malikânelere taşınabiliyordu."
      }
    ],
    "questions": [
      {
        "id": "rb012_q1",
        "type": "reading",
        "title": "The Black Death and the Price of Labour",
        "question": "According to the passage, workers' position improved after the Black Death because _____ .",
        "options": {
          "A": "governments passed laws that guaranteed them higher wages",
          "B": "the shortage of labour gave them greater bargaining power",
          "C": "landlords voluntarily shared their land with the survivors",
          "D": "agricultural production rose sharply in the following decade",
          "E": "they were no longer needed to harvest the abandoned fields"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep-Sonuç",
        "trapWarning": "A şıkkı tam tersidir: yasa ücretleri düşük tutmaya çalışmıştır. C ve D metinde yoktur. E şıkkı metindeki işlenmeyen tarlalar bilgisini yanlış yorumlar.",
        "explanation": "Salgından sonra işçi kıtlığı oluşmuş ve kalanlar daha yüksek ücret isteyebilmiştir; yani pazarlık güçleri artmıştır (B şıkkı)."
      },
      {
        "id": "rb012_q2",
        "type": "reading",
        "title": "The Black Death and the Price of Labour",
        "question": "The Statute of Labourers is mentioned as an example of _____ .",
        "options": {
          "A": "a successful attempt to raise the living standards of peasants",
          "B": "an effort by those in power to prevent wages from rising",
          "C": "a law that caused the decline of serfdom in Western Europe",
          "D": "a measure that helped villages recover from the epidemic",
          "E": "the first time an English government had collected taxes"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin İşlevi (for example)",
        "trapWarning": "A şıkkı amacı tersine çevirir ve \"successful\" der; yasa uygulanamamıştır. C şıkkı serfliğin çöküşünü yasaya bağlar.",
        "explanation": "Yasa \"attempted to fix wages at pre-plague levels\"; yani güç sahiplerinin ücret artışını engelleme çabasıdır (B şıkkı)."
      },
      {
        "id": "rb012_q3",
        "type": "reading",
        "title": "The Black Death and the Price of Labour",
        "question": "It can be inferred from the passage that the Statute of Labourers _____ .",
        "options": {
          "A": "was widely obeyed by both landlords and workers",
          "B": "failed to achieve its intended purpose",
          "C": "doubled the real wages of agricultural workers",
          "D": "was copied by landowners in Eastern Europe",
          "E": "was introduced before the plague reached England"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (proved almost impossible to enforce)",
        "trapWarning": "A ve C metnin tersidir. E şıkkı tarihle çelişir (1351). D şıkkı metinde yoktur.",
        "explanation": "Yasanın \"almost impossible to enforce\" olduğu söylenir; demek ki amacına ulaşamamıştır (B şıkkı)."
      },
      {
        "id": "rb012_q4",
        "type": "reading",
        "title": "The Black Death and the Price of Labour",
        "question": "What does the last paragraph suggest about Eastern Europe?",
        "options": {
          "A": "The plague did not reach most parts of Eastern Europe.",
          "B": "Serfdom disappeared there even faster than it did in the West.",
          "C": "Landowners in some areas strengthened their hold over peasants.",
          "D": "Real wages there doubled just as they did in England.",
          "E": "Historians have now agreed on why it developed so differently."
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Karşılaştırma (by contrast)",
        "trapWarning": "B şıkkı karşıtlığı tersine çevirir. E şıkkı \"remain debated\" ifadesiyle çelişir. A ve D metinde yoktur.",
        "explanation": "\"In parts of the East, by contrast, landowners succeeded in tightening their control over peasants\" (C şıkkı)."
      }
    ]
  },
  {
    "id": "rb013",
    "title": "The Many Deaths of the Library of Alexandria",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from History Today",
    "wordCount": 236,
    "passageText": "The Library of Alexandria, founded in Egypt in the third century BC, is often remembered as the greatest collection of knowledge in the ancient world and its destruction as one of history's great cultural disasters. In the popular imagination, the library vanished in a single, dramatic fire, taking with it countless works that were lost forever.\n\nThe historical record tells a more complicated story. Ancient sources disagree about when, or even whether, a single catastrophe occurred. Julius Caesar's troops started a fire in the city in 48 BC that may have damaged some books stored near the harbour, but scholars continued to work in Alexandria for centuries afterwards. Later accounts blame Christian mobs in the fourth century or Arab conquerors in the seventh, but these stories were written long after the events they describe and are regarded by many historians as unreliable.\n\nWhat seems more likely is that the library declined gradually. Royal funding shrank as the Ptolemaic dynasty lost power, and scholars were expelled during political purges. Papyrus scrolls also decayed in the humid air near the Mediterranean and had to be copied regularly to survive; when money and interest disappeared, so did the copies. In this sense, the library was not so much destroyed as neglected. Some historians argue that this lesson is more relevant today than the myth of the fire, since knowledge is more often lost through lack of maintenance than through violence.",
    "vocabularyNotes": [
      {
        "word": "vanish",
        "meaningTr": "kaybolmak, ortadan kalkmak",
        "contextNote": "Eş anlamlısı: disappear."
      },
      {
        "word": "account",
        "meaningTr": "anlatım, kayıt; hesap",
        "contextNote": "Burada tarihsel anlatı anlamında."
      },
      {
        "word": "expel",
        "meaningTr": "kovmak, sürmek",
        "contextNote": "İsim: expulsion."
      },
      {
        "word": "purge",
        "meaningTr": "tasfiye, temizlik (siyasi)",
        "contextNote": "Siyasi muhaliflerin uzaklaştırılması."
      },
      {
        "word": "decay",
        "meaningTr": "çürümek, bozulmak",
        "contextNote": "Eş anlamlısı: deteriorate, rot."
      },
      {
        "word": "neglect",
        "meaningTr": "ihmal etmek",
        "contextNote": "İsim hali de aynıdır: neglect (ihmal)."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Papyrus scrolls also decayed in the humid air near the Mediterranean and had to be copied regularly to survive; when money and interest disappeared, so did the copies.",
        "subject": "Papyrus scrolls (papirüs tomarlar)",
        "mainVerb": "decayed ... and had to be copied (çürüdü ve kopyalanmak zorundaydı)",
        "objectsAndComplements": "[to survive: varlığını sürdürmek için] + [when-clause] + so did the copies (kopyalar da öyle oldu)",
        "grammaticalStructures": [
          "Passive modal (had to be copied).",
          "Amaç bildiren to-infinitive (to survive).",
          "so + yardımcı fiil + özne: \"... da öyle\" yapısı (so did the copies).",
          "Noktalı virgül ile iki bağımsız cümle."
        ],
        "translationTr": "Papirüs tomarlar da Akdeniz kıyısındaki nemli havada çürüyordu ve varlığını sürdürmesi için düzenli olarak kopyalanması gerekiyordu; para ve ilgi ortadan kalkınca kopyalar da ortadan kalktı."
      }
    ],
    "questions": [
      {
        "id": "rb013_q1",
        "type": "reading",
        "title": "The Many Deaths of the Library of Alexandria",
        "question": "The author mentions the popular image of a single dramatic fire in order to _____ .",
        "options": {
          "A": "support it with evidence from several ancient sources",
          "B": "introduce a common belief that the passage then questions",
          "C": "show that Julius Caesar deliberately destroyed the library",
          "D": "argue that the loss of the library has been exaggerated",
          "E": "explain why papyrus scrolls were especially easy to burn"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Giriş Paragrafının İşlevi",
        "trapWarning": "A şıkkı tam tersidir. C şıkkı metnin söylemediği bir kasıt ekler. D şıkkı tuzaktır: yazar kaybın kendisini değil, nasıl gerçekleştiğini sorgular.",
        "explanation": "Yazar önce yaygın inancı verir, sonra \"The historical record tells a more complicated story\" diyerek onu sorgular (B şıkkı)."
      },
      {
        "id": "rb013_q2",
        "type": "reading",
        "title": "The Many Deaths of the Library of Alexandria",
        "question": "Why does the author consider the later accounts blaming Christians or Arabs unreliable?",
        "options": {
          "A": "They were written by Caesar's own soldiers",
          "B": "They were produced long after the events they describe",
          "C": "They contradict the archaeological evidence found in the harbour",
          "D": "They were deliberately destroyed during political purges",
          "E": "They describe a fire that took place in a different city"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep Detayı",
        "trapWarning": "C ve E metinde olmayan kanıtlar uydurur. A ve D metindeki başka unsurları karıştırır.",
        "explanation": "Metne göre bu hikâyeler \"written long after the events they describe\" (B şıkkı)."
      },
      {
        "id": "rb013_q3",
        "type": "reading",
        "title": "The Many Deaths of the Library of Alexandria",
        "question": "According to the passage, which of the following contributed to the library's decline?",
        "options": {
          "A": "A shortage of scholars who could read ancient Greek",
          "B": "The loss of royal funding and the removal of scholars",
          "C": "A decision to move the collection to another city",
          "D": "A ban on copying papyrus scrolls by later rulers",
          "E": "An earthquake that destroyed the buildings near the harbour"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay Eşleme (funding shrank, scholars were expelled)",
        "trapWarning": "D şıkkı metindeki kopyalama bilgisini yasak olarak çarpıtır. A, C ve E metinde hiç geçmez.",
        "explanation": "Son paragrafta kraliyet finansmanının azaldığı ve akademisyenlerin sürüldüğü söylenir (B şıkkı)."
      },
      {
        "id": "rb013_q4",
        "type": "reading",
        "title": "The Many Deaths of the Library of Alexandria",
        "question": "The phrase \"not so much destroyed as neglected\" means that the library _____ .",
        "options": {
          "A": "was destroyed by fire and neglected by its rulers to exactly the same degree",
          "B": "suffered more from lack of care than from deliberate destruction",
          "C": "was never actually damaged at any point in its history",
          "D": "was neglected only after a fire had already destroyed it",
          "E": "was destroyed mainly because it had been neglected by its own scholars"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kalıp Anlamı (not so much A as B = A'dan çok B)",
        "trapWarning": "A şıkkı kalıbın anlamını bilmeyenler için tuzaktır. C şıkkı aşırıya kaçar. D ve E sıralama/sebep uydurur.",
        "explanation": "\"Not so much A as B\" yapısı \"A'dan ziyade B\" demektir: kütüphane yıkılmaktan çok ihmal edilmiştir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb014",
    "title": "Wayfinding in the Pacific",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Journal of the Polynesian Society",
    "wordCount": 232,
    "passageText": "Polynesians settled almost every habitable island in a triangle of ocean stretching from Hawaii to New Zealand and Easter Island, an area larger than Europe and Asia combined. They did so without compasses, maps or writing, and many of the islands they reached lie thousands of kilometres apart. For much of the twentieth century, some Western scholars found this achievement so difficult to believe that they concluded the islands must have been settled by accident, by canoes that drifted off course in storms.\n\nThis theory was seriously weakened in 1976, when the voyaging canoe Hōkūleʻa sailed from Hawaii to Tahiti using only traditional navigation methods. Its navigator, Mau Piailug from Micronesia, steered by the rising and setting points of stars, the direction and shape of ocean swells, the flight paths of seabirds and the colour of clouds, which can reflect the green of a lagoon below them. The voyage of more than four thousand kilometres arrived exactly where it had intended to.\n\nComputer simulations have since shown that drift alone could not explain the pattern of settlement, since winds and currents would rarely carry an unsteered canoe in the right direction. Archaeological evidence also indicates that settlers brought pigs, chickens, dogs and crop plants with them, which suggests carefully planned journeys rather than accidents. Today, the revival of traditional wayfinding has become a source of cultural pride across the Pacific.",
    "vocabularyNotes": [
      {
        "word": "habitable",
        "meaningTr": "yaşanabilir, oturulabilir",
        "contextNote": "inhabit fiiliyle ilişkili."
      },
      {
        "word": "drift",
        "meaningTr": "sürüklenmek",
        "contextNote": "drift off course: rotadan sapmak."
      },
      {
        "word": "swell",
        "meaningTr": "dalga kabarması, ölü dalga",
        "contextNote": "Fiil olarak şişmek anlamı da vardır."
      },
      {
        "word": "steer",
        "meaningTr": "yönlendirmek, dümen kırmak",
        "contextNote": "steer by the stars: yıldızlara göre yön bulmak."
      },
      {
        "word": "unsteered",
        "meaningTr": "dümensiz, yönlendirilmemiş",
        "contextNote": "un- olumsuzluk ön eki."
      },
      {
        "word": "revival",
        "meaningTr": "yeniden canlanma",
        "contextNote": "revive (canlandırmak) fiilinden."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Some Western scholars found this achievement so difficult to believe that they concluded the islands must have been settled by accident, by canoes that drifted off course in storms.",
        "subject": "Some Western scholars (bazı Batılı akademisyenler)",
        "mainVerb": "found (buldular, saydılar)",
        "objectsAndComplements": "this achievement so difficult to believe (bu başarıyı inanılması o kadar zor) + [that-clause: adaların kazara yerleşilmiş olması gerektiği sonucuna vardılar]",
        "grammaticalStructures": [
          "find + nesne + sıfat (found this achievement difficult).",
          "so ... that: sonuç yapısı.",
          "must have been + V3: geçmişe dair güçlü çıkarım (passive).",
          "Defining relative clause (canoes that drifted off course)."
        ],
        "translationTr": "Bazı Batılı akademisyenler bu başarıyı inanılması o kadar zor buldular ki adaların, fırtınalarda rotasından sapan kanolar tarafından kazara yerleşilmiş olması gerektiği sonucuna vardılar."
      }
    ],
    "questions": [
      {
        "id": "rb014_q1",
        "type": "reading",
        "title": "Wayfinding in the Pacific",
        "question": "Some Western scholars believed that the Pacific islands had been settled by accident because _____ .",
        "options": {
          "A": "they had found the remains of several canoes that had been destroyed in storms",
          "B": "they could not believe such long voyages were possible without instruments",
          "C": "Polynesian legends described settlers being lost at sea",
          "D": "computer simulations of winds and currents supported the theory of accidental drift",
          "E": "Polynesians had already lost their knowledge of navigation"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep Sorusu (so difficult to believe that)",
        "trapWarning": "D şıkkı sonucu ters çevirir: simülasyonlar teoriyi çürütmüştür. A ve C metinde olmayan kanıtlardır.",
        "explanation": "Pusula, harita ya da yazı olmadan yapılan bu yolculuklar onlara inanılmaz gelmiştir (B şıkkı)."
      },
      {
        "id": "rb014_q2",
        "type": "reading",
        "title": "Wayfinding in the Pacific",
        "question": "Which of the following was NOT used by Mau Piailug to navigate?",
        "options": {
          "A": "The positions of rising and setting stars",
          "B": "The direction of ocean swells",
          "C": "The flight paths of seabirds",
          "D": "A simple magnetic compass",
          "E": "The colour of clouds"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E metinde sayılır. Pusula ise ilk paragrafta özellikle kullanılmadığı belirtilen araçtır.",
        "explanation": "Yolculuk \"using only traditional navigation methods\" ile yapılmıştır; pusula kullanılmamıştır (D şıkkı)."
      },
      {
        "id": "rb014_q3",
        "type": "reading",
        "title": "Wayfinding in the Pacific",
        "question": "The fact that settlers brought animals and crop plants suggests that _____ .",
        "options": {
          "A": "the islands had no food sources of their own",
          "B": "the voyages were planned in advance",
          "C": "canoes often sank because they were overloaded",
          "D": "settlers returned home after a short stay",
          "E": "animals helped them find their way to land"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (which suggests ...)",
        "trapWarning": "A şıkkı abartılı bir çıkarımdır. E şıkkı kuş bilgisini hayvanlarla karıştırır. C ve D metinde yoktur.",
        "explanation": "Hayvan ve bitki taşınması \"carefully planned journeys rather than accidents\" anlamına gelir (B şıkkı)."
      },
      {
        "id": "rb014_q4",
        "type": "reading",
        "title": "Wayfinding in the Pacific",
        "question": "The voyage of Hōkūleʻa is important in the passage because it _____ .",
        "options": {
          "A": "was the first voyage ever made by any canoe between the islands of Hawaii and Tahiti",
          "B": "showed that traditional methods could guide a long voyage accurately",
          "C": "proved that all islands had been settled from Micronesia",
          "D": "demonstrated that modern canoes are faster than ancient ones",
          "E": "was guided not by the stars but by the latest computer simulations of ocean currents"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kanıtın İşlevi",
        "trapWarning": "A şıkkı aşırı bir iddiadır; Polinezyalılar bu yolu çok önce yapmıştı. E şıkkı metinle çelişir: sadece geleneksel yöntemler kullanılmıştır. C şıkkı navigatörün kökenini yanlış genellemeye dönüştürür.",
        "explanation": "Yolculuk sadece geleneksel yöntemlerle 4.000 km'den fazla yol alıp tam hedefe varmış ve kaza teorisini zayıflatmıştır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb015",
    "title": "The Late Bronze Age Collapse",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Eric Cline's research & Antiquity",
    "wordCount": 231,
    "passageText": "Around 1200 BC, the interconnected civilizations of the eastern Mediterranean entered a period of sudden decline. Within a few decades, the Hittite Empire in Anatolia disappeared, the Mycenaean palaces of Greece were burned and abandoned, the trading city of Ugarit on the Syrian coast was destroyed, and Egypt, though it survived, was severely weakened. Writing systems fell out of use in some regions, and long-distance trade in copper and tin, essential for making bronze, largely collapsed.\n\nFor many years, the blame was placed on the mysterious Sea Peoples, groups of raiders mentioned in Egyptian inscriptions as having attacked from the sea. Today, however, most historians reject the idea that a single cause was responsible. Evidence from lake sediments and pollen indicates a long period of drought in the region, which would have led to crop failures and famine. Records also mention earthquakes, rebellions and the disruption of trade routes.\n\nThe current view is that these pressures reinforced one another. Because the kingdoms depended heavily on one another for food and raw materials, a problem in one place could quickly spread to others, much as a financial crisis spreads through a global economy today. The Sea Peoples may have been as much a symptom of the collapse, people displaced by famine and searching for new land, as its cause. Some scholars see in this a warning about the fragility of highly interdependent systems.",
    "vocabularyNotes": [
      {
        "word": "interconnected",
        "meaningTr": "birbirine bağlı",
        "contextNote": "inter- (arası) + connected."
      },
      {
        "word": "inscription",
        "meaningTr": "yazıt, kitabe",
        "contextNote": "inscribe (kazımak, yazmak) fiilinden."
      },
      {
        "word": "sediment",
        "meaningTr": "tortu, çökelti",
        "contextNote": "Göl ve deniz araştırmalarında kanıt olarak geçer."
      },
      {
        "word": "famine",
        "meaningTr": "kıtlık, açlık",
        "contextNote": "Eş anlamlısı: starvation (kısmen)."
      },
      {
        "word": "reinforce",
        "meaningTr": "güçlendirmek, pekiştirmek",
        "contextNote": "reinforce one another: birbirini beslemek."
      },
      {
        "word": "displaced",
        "meaningTr": "yerinden edilmiş",
        "contextNote": "displaced people: yerinden edilmiş kişiler."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "The Sea Peoples may have been as much a symptom of the collapse, people displaced by famine and searching for new land, as its cause.",
        "subject": "The Sea Peoples (Deniz Kavimleri)",
        "mainVerb": "may have been (olmuş olabilir)",
        "objectsAndComplements": "as much a symptom of the collapse ... as its cause (çöküşün nedeni olduğu kadar belirtisi de)",
        "grammaticalStructures": [
          "as much A as B: B olduğu kadar A da.",
          "may have been: geçmişe dair olasılık.",
          "Araya giren açıklayıcı ifade (people displaced by famine and searching for new land).",
          "Reduced relative clauses: displaced by (passive), searching for (active)."
        ],
        "translationTr": "Deniz Kavimleri, kıtlık nedeniyle yerinden edilmiş ve yeni toprak arayan insanlar olarak, çöküşün nedeni olduğu kadar belki de belirtisiydi."
      }
    ],
    "questions": [
      {
        "id": "rb015_q1",
        "type": "reading",
        "title": "The Late Bronze Age Collapse",
        "question": "Which of the following is NOT mentioned as a result of the collapse?",
        "options": {
          "A": "The disappearance of the Hittite Empire",
          "B": "The destruction of the city of Ugarit",
          "C": "The abandonment of Mycenaean palaces",
          "D": "The complete conquest of Egypt by the Sea Peoples",
          "E": "The breakdown of long-distance trade in the metals needed for bronze"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E ilk paragrafta sayılır. Mısır ise \"survived\" denir; fethedilmemiştir.",
        "explanation": "Metne göre Mısır ayakta kalmış ama zayıflamıştır; tamamen fethedildiği söylenmez (D şıkkı)."
      },
      {
        "id": "rb015_q2",
        "type": "reading",
        "title": "The Late Bronze Age Collapse",
        "question": "According to the passage, most historians today believe that the collapse was caused by _____ .",
        "options": {
          "A": "the repeated attacks of the Sea Peoples alone, as Egyptian inscriptions say",
          "B": "a combination of several pressures acting together",
          "C": "a single long drought that lasted for centuries",
          "D": "the sudden failure of the bronze-making industry",
          "E": "a rebellion that started in the Hittite capital"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Güncel Görüş (reinforced one another)",
        "trapWarning": "A şıkkı eski görüştür. C şıkkı kuraklığı tek nedene dönüştürür ve \"centuries\" diyerek abartır. D ve E tek bir etkeni öne çıkarır.",
        "explanation": "Tarihçiler tek nedeni reddeder; kuraklık, deprem, isyan ve ticaretin bozulması birbirini güçlendirmiştir (B şıkkı)."
      },
      {
        "id": "rb015_q3",
        "type": "reading",
        "title": "The Late Bronze Age Collapse",
        "question": "The author compares the spread of problems among the kingdoms to _____ .",
        "options": {
          "A": "the movement of large groups of displaced people in search of new land",
          "B": "the way a financial crisis spreads in today's global economy",
          "C": "the gradual decline of writing systems in some regions",
          "D": "the trade in copper and tin across the Mediterranean",
          "E": "the effect of drought on the crops of a single region"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Benzetme Tespiti (much as ...)",
        "trapWarning": "A, C, D ve E metinde geçen ama benzetmenin konusu olmayan unsurlardır.",
        "explanation": "\"much as a financial crisis spreads through a global economy today\" ifadesi benzetmeyi verir (B şıkkı)."
      },
      {
        "id": "rb015_q4",
        "type": "reading",
        "title": "The Late Bronze Age Collapse",
        "question": "It can be inferred that the Sea Peoples _____ .",
        "options": {
          "A": "were the only cause of the destruction of the Mycenaean palaces",
          "B": "may have been driven to raid by the same crisis they are blamed for",
          "C": "were invented by Egyptian scribes and never actually existed as real groups",
          "D": "came from regions that were not affected by any drought",
          "E": "brought new writing systems to the eastern Mediterranean"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (as much a symptom as its cause)",
        "trapWarning": "A şıkkı eski tek neden görüşünü tekrarlar. C şıkkı Mısır yazıtlarıyla çelişir. D ve E metinde yoktur.",
        "explanation": "Metne göre Deniz Kavimleri kıtlıkla yerinden edilmiş insanlar olabilir; yani suçlandıkları krizin kendisi onları akınlara itmiş olabilir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb016",
    "title": "Putting a Price on Carbon",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from The Economist & IMF Working Papers",
    "wordCount": 263,
    "passageText": "Economists have long described climate change as the largest market failure the world has ever seen. When a factory burns coal or a driver fills a tank, the costs of the resulting emissions, in the form of floods, droughts and heatwaves, are borne by society as a whole rather than by the polluter. Because these costs do not appear in the price of fossil fuels, people use more of them than they would if they had to pay the full price.\n\nThe solution most economists favour is to put a price on carbon. This can be done in two ways. A carbon tax sets a fixed charge for every tonne of carbon dioxide emitted and lets the market decide how much emissions fall. A cap-and-trade system does the opposite: the government sets a limit on total emissions and issues a fixed number of permits, which companies can buy and sell, so that the price is determined by the market. In both cases, firms that can cut emissions cheaply have an incentive to do so, which makes the overall reduction less costly than rules imposed on every firm equally.\n\nDespite its appeal to economists, carbon pricing has proved politically difficult. Higher energy prices fall hardest on poorer households, which spend a larger share of their income on fuel and heating. In France, a planned rise in fuel taxes in 2018 triggered months of street protests. For this reason, several countries now return the revenue from carbon taxes directly to citizens as an equal annual payment, so that most low-income families receive more than they pay.",
    "vocabularyNotes": [
      {
        "word": "market failure",
        "meaningTr": "piyasa başarısızlığı",
        "contextNote": "Ekonomi metinlerinin temel kavramlarındandır."
      },
      {
        "word": "bear (borne)",
        "meaningTr": "katlanmak, üstlenmek (maliyet)",
        "contextNote": "bear the cost: maliyeti üstlenmek. V3: borne."
      },
      {
        "word": "permit",
        "meaningTr": "izin belgesi; izin vermek",
        "contextNote": "İsimde vurgu ilk hecede: PER-mit."
      },
      {
        "word": "incentive",
        "meaningTr": "teşvik, özendirici",
        "contextNote": "Eş anlamlısı: motivation, stimulus."
      },
      {
        "word": "impose",
        "meaningTr": "dayatmak, uygulamak (vergi, kural)",
        "contextNote": "impose a tax/rule on: -e vergi/kural koymak."
      },
      {
        "word": "revenue",
        "meaningTr": "gelir, hasılat",
        "contextNote": "tax revenue: vergi geliri."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "In both cases, firms that can cut emissions cheaply have an incentive to do so, which makes the overall reduction less costly than rules imposed on every firm equally.",
        "subject": "firms that can cut emissions cheaply (emisyonları ucuza azaltabilen firmalar)",
        "mainVerb": "have (sahiptir)",
        "objectsAndComplements": "an incentive to do so (bunu yapmak için bir teşvik) + [which-clause: bu da toplam azaltımı ... daha az maliyetli kılar]",
        "grammaticalStructures": [
          "Defining relative clause öznede (firms that can cut...).",
          "do so: önceki eylemi tekrar etmeden işaret eder.",
          "Sentential which.",
          "make + nesne + sıfat (less costly than).",
          "Reduced passive relative (rules imposed on every firm)."
        ],
        "translationTr": "Her iki durumda da emisyonlarını ucuza azaltabilen firmalar bunu yapmaya teşvik edilir; bu da toplam azaltımı, her firmaya eşit biçimde dayatılan kurallardan daha az maliyetli hale getirir."
      }
    ],
    "questions": [
      {
        "id": "rb016_q1",
        "type": "reading",
        "title": "Putting a Price on Carbon",
        "question": "According to the passage, climate change is described as a market failure because _____ .",
        "options": {
          "A": "fossil fuels have become too expensive for most poor households to afford",
          "B": "the damage caused by emissions is not reflected in the price of fuels",
          "C": "governments have failed to build enough renewable power plants in time",
          "D": "companies are not allowed to buy and sell emission permits freely in markets",
          "E": "floods and droughts have reduced the profits of many large industrial firms"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Tanım & Sebep",
        "trapWarning": "A şıkkı son paragraftaki yoksul hane bilgisini başka bir bağlama taşır. D şıkkı cap-and-trade sistemini sebep gibi sunar. C ve E metinde yoktur.",
        "explanation": "Emisyonların maliyeti kirleticiye değil topluma yansır ve yakıt fiyatlarında görünmez; bu yüzden piyasa başarısızlığıdır (B şıkkı)."
      },
      {
        "id": "rb016_q2",
        "type": "reading",
        "title": "Putting a Price on Carbon",
        "question": "The main difference between a carbon tax and a cap-and-trade system is that _____ .",
        "options": {
          "A": "a carbon tax applies only to factories, while cap-and-trade applies to drivers",
          "B": "a tax fixes the price of emissions, whereas cap-and-trade fixes their quantity",
          "C": "cap-and-trade gives the revenue back to citizens, while a tax does not",
          "D": "a carbon tax is preferred by economists, but cap-and-trade is not",
          "E": "cap-and-trade sets a fixed price for each tonne of carbon dioxide emitted"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Karşılaştırma (does the opposite)",
        "trapWarning": "E şıkkı vergiyi tarif eder, cap-and-trade'i değil. D şıkkı metinle çelişir: ekonomistler genel olarak karbon fiyatlamayı savunur. C şıkkı geri ödemeyi yanlış sisteme bağlar.",
        "explanation": "Vergi tonu başına sabit bir fiyat koyar ve miktarı piyasaya bırakır; cap-and-trade ise toplam miktarı sabitler ve fiyatı piyasaya bırakır (B şıkkı)."
      },
      {
        "id": "rb016_q3",
        "type": "reading",
        "title": "Putting a Price on Carbon",
        "question": "The French protests of 2018 are mentioned to illustrate _____ .",
        "options": {
          "A": "the success of a cap-and-trade system in reducing emissions",
          "B": "the political resistance that carbon pricing can provoke",
          "C": "the reasons why economists oppose taxes on fossil fuels",
          "D": "a country that returns carbon tax revenue to its citizens",
          "E": "the effect of floods and heatwaves on poorer households"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Örneğin İşlevi",
        "trapWarning": "D şıkkı sonraki cümledeki çözümü Fransa'ya bağlar. C şıkkı ekonomistlerin görüşünü tersine çevirir. A ve E bağlamla ilgisizdir.",
        "explanation": "Paragraf \"carbon pricing has proved politically difficult\" der; Fransa protestoları bu siyasi direnişin örneğidir (B şıkkı)."
      },
      {
        "id": "rb016_q4",
        "type": "reading",
        "title": "Putting a Price on Carbon",
        "question": "Returning carbon tax revenue to citizens as an equal payment is intended to _____ .",
        "options": {
          "A": "encourage factories and power plants to cut their emissions more quickly",
          "B": "make carbon pricing fairer and more acceptable to poorer families",
          "C": "replace the need for any limit on total emissions",
          "D": "raise energy prices further for households that use relatively little fuel",
          "E": "allow companies to buy permits at a lower market price"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Amaç Çıkarımı (For this reason)",
        "trapWarning": "A şıkkı mekanizmanın amacı değildir. D şıkkı sonucu tersine çevirir. C ve E başka sistemlerle karıştırır.",
        "explanation": "Eşit ödeme sayesinde düşük gelirli ailelerin çoğu ödediğinden fazlasını alır; amaç uygulamayı daha adil ve kabul edilebilir kılmaktır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb017",
    "title": "Microfinance: Promise and Evidence",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from American Economic Journal: Applied Economics",
    "wordCount": 236,
    "passageText": "In the 1980s and 1990s, microfinance was celebrated as one of the most promising tools against global poverty. The idea was simple: by lending very small sums to poor people, especially women, who had no access to ordinary banks, lenders could help them start or expand small businesses and work their way out of poverty. The model was associated above all with the Grameen Bank in Bangladesh, whose founder, Muhammad Yunus, received the Nobel Peace Prize in 2006. Repayment rates were remarkably high, which seemed to prove that the poor were reliable borrowers.\n\nWhen economists began testing microfinance with randomized controlled trials, however, the results were more modest than expected. A set of six studies across four continents, published together in 2015, found that access to microcredit did lead some households to invest in businesses, but on average it did not significantly raise incomes, nor did it improve health or children's schooling. Some borrowers used the loans not for business but to cope with emergencies or to buy household goods.\n\nThese findings do not mean that microfinance is useless. Many economists now argue that its main value lies in giving poor families more flexibility in managing irregular incomes, rather than in transforming their lives. The studies also suggested that a small minority of borrowers, those who already ran businesses before receiving loans, benefited considerably. The lesson, critics say, is not that microfinance failed but that it was oversold.",
    "vocabularyNotes": [
      {
        "word": "celebrate",
        "meaningTr": "övmek, kutlamak",
        "contextNote": "Burada övgüyle karşılanmak anlamında."
      },
      {
        "word": "randomized controlled trial",
        "meaningTr": "randomize kontrollü deney",
        "contextNote": "Bilimsel kanıtın altın standardı."
      },
      {
        "word": "modest",
        "meaningTr": "mütevazı, ılımlı, az",
        "contextNote": "modest results: beklenenden az sonuç."
      },
      {
        "word": "cope with",
        "meaningTr": "başa çıkmak",
        "contextNote": "Eş anlamlısı: deal with, handle."
      },
      {
        "word": "irregular",
        "meaningTr": "düzensiz",
        "contextNote": "Zıt anlamlısı: regular."
      },
      {
        "word": "oversell (oversold)",
        "meaningTr": "abartarak övmek, gereğinden fazla pazarlamak",
        "contextNote": "over- ön eki aşırılık bildirir."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Many economists now argue that its main value lies in giving poor families more flexibility in managing irregular incomes, rather than in transforming their lives.",
        "subject": "Many economists (birçok ekonomist)",
        "mainVerb": "argue (ileri sürer)",
        "objectsAndComplements": "[that-clause: asıl değerinin ... hayatlarını dönüştürmekten ziyade düzensiz gelirleri yönetmede esneklik sağlamakta yattığı]",
        "grammaticalStructures": [
          "lie in + V-ing: -de yatmak (bir şeyin özünün nerede olduğunu bildirir).",
          "rather than: -den ziyade, paralel yapı (in giving ... rather than in transforming).",
          "Gerund kullanımları (giving, managing, transforming)."
        ],
        "translationTr": "Birçok ekonomist artık mikrofinansın asıl değerinin yoksul ailelerin hayatlarını dönüştürmekten ziyade, onlara düzensiz gelirlerini yönetmede daha fazla esneklik sağlamakta yattığını savunuyor."
      }
    ],
    "questions": [
      {
        "id": "rb017_q1",
        "type": "reading",
        "title": "Microfinance: Promise and Evidence",
        "question": "High repayment rates in the early years seemed to show that _____ .",
        "options": {
          "A": "microfinance had already lifted most of its borrowers out of poverty",
          "B": "poor borrowers could be trusted to pay back their loans",
          "C": "ordinary banks were lending too much money to poor women",
          "D": "the Grameen Bank was charging unusually low interest rates",
          "E": "randomized trials had confirmed the benefits of microcredit"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay Çıkarımı (which seemed to prove)",
        "trapWarning": "A şıkkı yüksek geri ödemeyi yoksulluktan kurtulmayla karıştırır. E şıkkı kronolojiyi bozar; deneyler sonra yapılmıştır. C ve D metinde yoktur.",
        "explanation": "Metne göre yüksek geri ödeme oranları \"seemed to prove that the poor were reliable borrowers\" (B şıkkı)."
      },
      {
        "id": "rb017_q2",
        "type": "reading",
        "title": "Microfinance: Promise and Evidence",
        "question": "According to the 2015 studies, access to microcredit _____ .",
        "options": {
          "A": "sharply increased the average income of borrowing households",
          "B": "had no measurable effect at all on any household's business activity or investment",
          "C": "led to some business investment but no significant rise in average income",
          "D": "improved children's schooling considerably but did not have any effect on their health",
          "E": "was used by every borrower exclusively for business purposes"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Detay & Nüans (did lead some ... but on average did not)",
        "trapWarning": "A şıkkı sonucu tersine çevirir. B şıkkı \"some households invest\" bilgisini yok sayar. D şıkkı eğitim üzerindeki etkiyi yanlış verir. E şıkkı metinle çelişir.",
        "explanation": "Çalışmalar bazı hanelerin işletmeye yatırım yaptığını ama ortalama gelirin anlamlı biçimde artmadığını bulmuştur (C şıkkı)."
      },
      {
        "id": "rb017_q3",
        "type": "reading",
        "title": "Microfinance: Promise and Evidence",
        "question": "The word \"oversold\" in the last sentence suggests that microfinance _____ .",
        "options": {
          "A": "was sold to far too many borrowers at too high a price by commercial lenders",
          "B": "had been promoted with greater claims than the evidence supported",
          "C": "proved to be completely useless for poor families everywhere in the world",
          "D": "was more successful than its critics had originally expected",
          "E": "should be replaced by ordinary bank loans for the poor"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Bağlamdan Kelime / Yazarın Vargısı",
        "trapWarning": "A şıkkı kelimenin gerçek anlamına (fazla satmak) takılan tuzaktır. C, \"does not mean that microfinance is useless\" cümlesiyle çelişir. D şıkkı tersidir.",
        "explanation": "\"Oversold\" burada abartılı biçimde pazarlanmak demektir: kanıtların desteklediğinden büyük iddialarla sunulmuştur (B şıkkı)."
      },
      {
        "id": "rb017_q4",
        "type": "reading",
        "title": "Microfinance: Promise and Evidence",
        "question": "It can be inferred that microfinance is most likely to be beneficial for _____ .",
        "options": {
          "A": "families who have never had any experience of running a business",
          "B": "borrowers who already had a business before taking out a loan",
          "C": "households that want to improve their children's school results",
          "D": "women who already have full access to ordinary bank services",
          "E": "families who need loans only to buy expensive household goods"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım",
        "trapWarning": "A şıkkı tam tersidir. D şıkkı mikrofinansın hedef kitlesiyle çelişir. C ve E metinde fayda sağlamadığı söylenen kullanımlardır.",
        "explanation": "Metne göre kredi almadan önce zaten işletmesi olan küçük bir azınlık önemli ölçüde fayda görmüştür (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb018",
    "title": "Coral Bleaching and the Future of Reefs",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from Science & Nature Climate Change",
    "wordCount": 232,
    "passageText": "Coral reefs cover less than one percent of the ocean floor but support roughly a quarter of all marine species. They also protect coastlines from storms and provide food and income for hundreds of millions of people. Yet reefs are among the ecosystems most threatened by climate change.\n\nThe main danger is bleaching. Corals are animals, but they depend on tiny algae living inside their tissues, which supply them with most of their food through photosynthesis and give them their colour. When the water becomes too warm, even by just one or two degrees above the normal summer maximum for a few weeks, this partnership breaks down and the corals expel the algae, turning white. Bleached corals are not dead, and they can recover if temperatures return to normal quickly. If the heat persists, however, they starve.\n\nIn the past, severe bleaching events occurred perhaps once every twenty-five or thirty years, leaving reefs time to recover. Since the 1980s, they have become far more frequent. Australia's Great Barrier Reef suffered mass bleaching in 2016, 2017, 2020, 2022 and 2024. Scientists warn that recovery from a major event typically takes ten years or more, so reefs are increasingly struck again before they have healed. Efforts to breed heat-tolerant corals and to reduce local pressures such as overfishing and pollution may buy time, but most researchers agree that the long-term survival of reefs depends on limiting global warming itself.",
    "vocabularyNotes": [
      {
        "word": "tissue",
        "meaningTr": "doku",
        "contextNote": "Biyoloji metinlerinde sık geçer."
      },
      {
        "word": "photosynthesis",
        "meaningTr": "fotosentez",
        "contextNote": "Bitkilerin ışıkla besin üretmesi."
      },
      {
        "word": "expel",
        "meaningTr": "dışarı atmak, kovmak",
        "contextNote": "İsim: expulsion."
      },
      {
        "word": "persist",
        "meaningTr": "sürmek, devam etmek",
        "contextNote": "İsim: persistence. Sıfat: persistent."
      },
      {
        "word": "starve",
        "meaningTr": "açlıktan ölmek, aç kalmak",
        "contextNote": "İsim: starvation."
      },
      {
        "word": "heal",
        "meaningTr": "iyileşmek",
        "contextNote": "Eş anlamlısı: recover."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "When the water becomes too warm, even by just one or two degrees above the normal summer maximum for a few weeks, this partnership breaks down and the corals expel the algae, turning white.",
        "subject": "this partnership / the corals (bu ortaklık / mercanlar)",
        "mainVerb": "breaks down / expel (bozulur / dışarı atar)",
        "objectsAndComplements": "the algae (algleri) + [participle: beyazlaşarak]",
        "grammaticalStructures": [
          "Zaman yan cümlesi (When the water becomes too warm).",
          "Araya giren vurgulu açıklama (even by just one or two degrees ...).",
          "and ile bağlanan iki ana cümle.",
          "Sonuç bildiren -ing (turning white)."
        ],
        "translationTr": "Su çok ısındığında, birkaç hafta boyunca normal yaz azamisinin yalnızca bir iki derece üstüne çıksa bile, bu ortaklık bozulur ve mercanlar algleri dışarı atarak beyazlaşır."
      }
    ],
    "questions": [
      {
        "id": "rb018_q1",
        "type": "reading",
        "title": "Coral Bleaching and the Future of Reefs",
        "question": "According to the passage, the algae living inside corals _____ .",
        "options": {
          "A": "are harmful parasites that corals try to remove in warm water",
          "B": "provide corals with most of their food and their colour",
          "C": "protect coastlines from storms by strengthening the reef",
          "D": "survive only in water that is warmer than the summer maximum",
          "E": "feed on the dead tissue of corals that have been bleached"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay Eşleme",
        "trapWarning": "A şıkkı ilişkinin doğasını ters çevirir; bu bir ortaklıktır. C şıkkı resiflerin genel işlevini alglere mal eder. D şıkkı sıcaklık bilgisini çarpıtır.",
        "explanation": "Algler fotosentezle mercanın besininin çoğunu sağlar ve ona rengini verir (B şıkkı)."
      },
      {
        "id": "rb018_q2",
        "type": "reading",
        "title": "Coral Bleaching and the Future of Reefs",
        "question": "Which of the following is true about bleached corals?",
        "options": {
          "A": "They die immediately once they lose their algae.",
          "B": "They can recover if the water cools down soon enough.",
          "C": "They turn white because pollution damages their tissues.",
          "D": "They are no longer able to support any marine species.",
          "E": "They become more tolerant of heat after each event."
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Doğru Bilgi Tespiti",
        "trapWarning": "A şıkkı \"Bleached corals are not dead\" cümlesiyle çelişir. C şıkkı nedeni yanlış verir (sıcaklık). E şıkkı metinde ıslah çalışmalarıyla karıştırılmış bir iddiadır.",
        "explanation": "\"They can recover if temperatures return to normal quickly\" ifadesi doğrudan B şıkkıdır."
      },
      {
        "id": "rb018_q3",
        "type": "reading",
        "title": "Coral Bleaching and the Future of Reefs",
        "question": "The main problem described in the third paragraph is that _____ .",
        "options": {
          "A": "bleaching events now occur too often for reefs to recover between them",
          "B": "the Great Barrier Reef has been seriously bleached only once in its long history",
          "C": "scientists have not yet discovered what causes coral bleaching",
          "D": "heat-tolerant corals have already replaced most of the natural reefs",
          "E": "overfishing has become a greater threat to reefs than warming"
        },
        "answer": "A",
        "difficulty": "İleri",
        "tacticUsed": "Paragraf Ana Fikri",
        "trapWarning": "B şıkkı beş olayı sayan metinle çelişir. C şıkkı neden açıkça verilmiştir. D ve E metnin vurgusunu bozar.",
        "explanation": "Olaylar sıklaştığı ve toparlanma on yıl sürdüğü için resifler iyileşmeden tekrar vurulmaktadır (A şıkkı)."
      },
      {
        "id": "rb018_q4",
        "type": "reading",
        "title": "Coral Bleaching and the Future of Reefs",
        "question": "The author's view of breeding heat-tolerant corals is that it _____ .",
        "options": {
          "A": "is the only realistic way of saving coral reefs in the long term",
          "B": "may delay the damage but cannot replace action against global warming",
          "C": "has been proven to stop bleaching completely on the Great Barrier Reef",
          "D": "is more harmful to reefs than overfishing and local pollution",
          "E": "should be abandoned because it distracts from protecting coastlines"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yazarın Tutumu (may buy time, but ...)",
        "trapWarning": "A şıkkı son cümlenin tersidir. C şıkkı kanıtlanmamış bir başarıdan söz eder. D ve E metinde olmayan olumsuz yargılardır.",
        "explanation": "\"may buy time, but ... long-term survival of reefs depends on limiting global warming itself\" ifadesi B şıkkını verir."
      }
    ]
  },
  {
    "id": "rb019",
    "title": "The Hidden Cost of Fast Fashion",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from Ellen MacArthur Foundation reports",
    "wordCount": 236,
    "passageText": "Over the past two decades, the global fashion industry has been transformed by a business model known as fast fashion. Retailers copy catwalk designs within weeks, produce them cheaply in large quantities and sell them at low prices, introducing new collections many times a year rather than twice. Between 2000 and 2015, global clothing production roughly doubled, while the average number of times a garment was worn before being discarded fell by more than a third.\n\nThe environmental consequences are considerable. Textile production uses vast amounts of water; growing the cotton for a single T-shirt can require thousands of litres. Dyeing and finishing processes are a major source of industrial water pollution, and synthetic fabrics such as polyester shed microscopic plastic fibres every time they are washed, many of which end up in the oceans. Less than one percent of the material used to make clothing is recycled into new clothing; the rest is mostly burned or sent to landfill.\n\nSolutions are being discussed at several levels. Some brands now offer repair services or resale platforms for second-hand clothes. Several governments have proposed making producers financially responsible for collecting and recycling the garments they sell, a policy already applied to electronics and packaging in many countries. Technologies that separate blended fabrics into reusable fibres are also being developed. Yet critics argue that none of these measures will be sufficient unless consumers in wealthy countries simply buy fewer clothes.",
    "vocabularyNotes": [
      {
        "word": "catwalk",
        "meaningTr": "podyum",
        "contextNote": "Moda metinlerinde runway ile eş anlamlı."
      },
      {
        "word": "garment",
        "meaningTr": "giysi, kıyafet",
        "contextNote": "Eş anlamlısı: piece of clothing."
      },
      {
        "word": "discard",
        "meaningTr": "atmak, elden çıkarmak",
        "contextNote": "Eş anlamlısı: throw away, dispose of."
      },
      {
        "word": "shed",
        "meaningTr": "dökmek, saçmak",
        "contextNote": "Düzensiz fiil: shed-shed-shed."
      },
      {
        "word": "landfill",
        "meaningTr": "çöp sahası",
        "contextNote": "send to landfill: çöpe göndermek."
      },
      {
        "word": "sufficient",
        "meaningTr": "yeterli",
        "contextNote": "Zıt anlamlısı: insufficient."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Several governments have proposed making producers financially responsible for collecting and recycling the garments they sell, a policy already applied to electronics and packaging in many countries.",
        "subject": "Several governments (birkaç hükümet)",
        "mainVerb": "have proposed (önermiştir)",
        "objectsAndComplements": "making producers financially responsible for ... (üreticileri ... konusunda mali açıdan sorumlu tutmayı) + [appositive: birçok ülkede elektronik ve ambalaja zaten uygulanan bir politika]",
        "grammaticalStructures": [
          "propose + V-ing.",
          "make + nesne + sıfat (making producers responsible).",
          "responsible for + V-ing.",
          "Gizli relative clause (the garments [that] they sell).",
          "Appositive isim öbeği (a policy already applied to ...)."
        ],
        "translationTr": "Birkaç hükümet, üreticileri sattıkları giysileri toplama ve geri dönüştürme konusunda mali açıdan sorumlu tutmayı önermiştir; bu, birçok ülkede elektronik ve ambalaja zaten uygulanan bir politikadır."
      }
    ],
    "questions": [
      {
        "id": "rb019_q1",
        "type": "reading",
        "title": "The Hidden Cost of Fast Fashion",
        "question": "According to the passage, the fast fashion model involves _____ .",
        "options": {
          "A": "producing a limited number of collections of higher quality each year",
          "B": "quickly copying designer styles and selling them cheaply in large volumes",
          "C": "repairing and reselling second-hand clothes through online platforms",
          "D": "using only recycled fibres to produce new garments for low prices",
          "E": "increasing the number of times each garment is worn before it is thrown away"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Tanım Sorusu",
        "trapWarning": "A şıkkı modelin tersidir. C ve D çözüm olarak anılan uygulamalardır. E şıkkı istatistiği ters çevirir.",
        "explanation": "Hızlı moda, podyum tasarımlarını haftalar içinde kopyalayıp büyük miktarlarda ucuza üretmek ve satmaktır (B şıkkı)."
      },
      {
        "id": "rb019_q2",
        "type": "reading",
        "title": "The Hidden Cost of Fast Fashion",
        "question": "Which of the following is NOT mentioned as an environmental problem of the clothing industry?",
        "options": {
          "A": "The large amount of water needed to grow cotton",
          "B": "Pollution caused by dyeing and finishing processes",
          "C": "Plastic fibres released when synthetic clothes are washed",
          "D": "The destruction of forests to make room for factories",
          "E": "The very low rate at which clothing is recycled"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E ikinci paragrafta açıkça geçer.",
        "explanation": "Metin ormansızlaşmadan söz etmez (D şıkkı)."
      },
      {
        "id": "rb019_q3",
        "type": "reading",
        "title": "The Hidden Cost of Fast Fashion",
        "question": "The policy of making producers responsible for collecting and recycling garments _____ .",
        "options": {
          "A": "has already been applied successfully to clothing in many countries",
          "B": "is similar to rules that already exist for electronics and packaging",
          "C": "has been rejected by most governments as being far too expensive",
          "D": "is the only measure that critics believe will actually be sufficient",
          "E": "would require consumers to return all their old clothes to the shops"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay & Nüans (already applied to electronics)",
        "trapWarning": "A şıkkı tuzaktır: politika elektronik ve ambalaja uygulanmıştır, giyime değil. D şıkkı son cümleyle çelişir. C ve E metinde yoktur.",
        "explanation": "Metne göre bu politika birçok ülkede elektronik ve ambalaja zaten uygulanmaktadır (B şıkkı)."
      },
      {
        "id": "rb019_q4",
        "type": "reading",
        "title": "The Hidden Cost of Fast Fashion",
        "question": "According to the critics mentioned in the last paragraph, _____ .",
        "options": {
          "A": "new recycling technologies will solve the whole problem within the next decade",
          "B": "the most important change must be a reduction in overall clothing consumption",
          "C": "governments should ban synthetic fabrics such as polyester entirely",
          "D": "repair services offered by brands are the most effective solution",
          "E": "consumers in poorer countries are mainly responsible for the growth of the problem"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş Sahibi (critics argue)",
        "trapWarning": "A ve D eleştirmenlerin yetersiz bulduğu önlemlerdir. E şıkkı metinle çelişir: zengin ülkeler vurgulanır. C şıkkı metinde yoktur.",
        "explanation": "Eleştirmenlere göre zengin ülkelerdeki tüketiciler daha az giysi almadıkça önlemler yetmez (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb020",
    "title": "Beyond the Tragedy of the Commons",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from the work of Elinor Ostrom",
    "wordCount": 236,
    "passageText": "In 1968, the ecologist Garrett Hardin published an influential essay titled \"The Tragedy of the Commons\". He asked readers to imagine a pasture open to all herders. Each herder gains the full benefit of adding one more animal to the field, while the cost of overgrazing is shared by everyone. Acting rationally, each herder keeps adding animals until the pasture is destroyed. Hardin concluded that shared resources could only be protected in one of two ways: by turning them into private property or by placing them under strict government control.\n\nThe political scientist Elinor Ostrom spent decades testing this conclusion against real communities. From Swiss alpine meadows to Japanese forests and irrigation systems in Nepal and Spain, she found many cases in which local users had managed common resources sustainably for centuries without either privatization or central regulation. These communities had developed their own rules about who could use the resource and how much, monitored one another's behaviour and imposed gradually increasing penalties on those who broke the rules.\n\nOstrom did not claim that communities always succeed. She identified conditions that make success more likely, such as clearly defined boundaries, rules adapted to local circumstances and the ability of users to take part in changing the rules. Her work, which earned her the Nobel Prize in Economics in 2009, the first awarded to a woman, showed that the tragedy Hardin described is a possibility rather than an inevitability.",
    "vocabularyNotes": [
      {
        "word": "influential",
        "meaningTr": "etkili, nüfuzlu",
        "contextNote": "influence (etki) kelimesinden."
      },
      {
        "word": "pasture",
        "meaningTr": "mera, otlak",
        "contextNote": "Eş anlamlısı: meadow, grazing land."
      },
      {
        "word": "overgrazing",
        "meaningTr": "aşırı otlatma",
        "contextNote": "over- aşırılık bildirir."
      },
      {
        "word": "sustainably",
        "meaningTr": "sürdürülebilir şekilde",
        "contextNote": "sustain (sürdürmek) fiilinden."
      },
      {
        "word": "monitor",
        "meaningTr": "izlemek, denetlemek",
        "contextNote": "Eş anlamlısı: observe, supervise."
      },
      {
        "word": "inevitability",
        "meaningTr": "kaçınılmazlık",
        "contextNote": "Sıfat: inevitable."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Each herder gains the full benefit of adding one more animal to the field, while the cost of overgrazing is shared by everyone.",
        "subject": "Each herder (her çoban) / the cost of overgrazing (aşırı otlatmanın maliyeti)",
        "mainVerb": "gains / is shared (kazanır / paylaşılır)",
        "objectsAndComplements": "the full benefit of adding one more animal (bir hayvan daha eklemenin tüm faydasını)",
        "grammaticalStructures": [
          "while: zıtlık bağlacı (-ken, oysa).",
          "of + V-ing (the benefit of adding).",
          "Present simple passive (is shared by everyone)."
        ],
        "translationTr": "Her çoban tarlaya bir hayvan daha eklemenin tüm faydasını elde ederken, aşırı otlatmanın maliyeti herkes tarafından paylaşılır."
      }
    ],
    "questions": [
      {
        "id": "rb020_q1",
        "type": "reading",
        "title": "Beyond the Tragedy of the Commons",
        "question": "According to Hardin, shared resources can be protected only if _____ .",
        "options": {
          "A": "local users agree on their own rules for using them",
          "B": "they are either privatized or strictly controlled by the state",
          "C": "each herder adds animals to the pasture at the same rate",
          "D": "communities impose gradually increasing penalties on rule-breakers",
          "E": "users are allowed to take part in changing the existing rules"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Görüş Sahibi Ayırma (Hardin vs Ostrom)",
        "trapWarning": "A, D ve E Ostrom'un bulgularıdır; Hardin'in görüşü değildir. C şıkkı metinde yoktur.",
        "explanation": "Hardin'e göre iki yol vardır: özel mülkiyet ya da sıkı devlet kontrolü (B şıkkı)."
      },
      {
        "id": "rb020_q2",
        "type": "reading",
        "title": "Beyond the Tragedy of the Commons",
        "question": "Ostrom's research showed that _____ .",
        "options": {
          "A": "most common resources are destroyed within a few generations",
          "B": "some communities have managed shared resources well without outside control",
          "C": "government regulation is always more effective than local management",
          "D": "private property is the most reliable way to prevent overgrazing",
          "E": "Hardin's model applies only to pastures and not to forests or to irrigation water"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Ana Bulgu",
        "trapWarning": "A ve D Hardin'in görüşüne yakındır. C Ostrom'un bulgusuyla çelişir. E şıkkı metinde yoktur.",
        "explanation": "Ostrom, yerel kullanıcıların yüzyıllar boyunca ne özelleştirme ne de merkezi düzenleme olmadan kaynakları sürdürülebilir yönettiğini bulmuştur (B şıkkı)."
      },
      {
        "id": "rb020_q3",
        "type": "reading",
        "title": "Beyond the Tragedy of the Commons",
        "question": "Which of the following is mentioned as a condition that makes community management more likely to succeed?",
        "options": {
          "A": "Strict control by a distant central government",
          "B": "Allowing everyone unlimited access to the resource",
          "C": "Clearly defined limits on who may use the resource",
          "D": "Turning the resource into private property as soon as possible",
          "E": "Keeping the same rules unchanged for many centuries"
        },
        "answer": "C",
        "difficulty": "İleri",
        "tacticUsed": "Detay Eşleme (clearly defined boundaries)",
        "trapWarning": "A ve D Hardin'in çözümleridir. B şıkkı trajediye yol açan durumdur. E şıkkı \"ability of users to take part in changing the rules\" ifadesiyle çelişir.",
        "explanation": "Ostrom'un saydığı koşullardan biri açıkça tanımlanmış sınırlardır (C şıkkı)."
      },
      {
        "id": "rb020_q4",
        "type": "reading",
        "title": "Beyond the Tragedy of the Commons",
        "question": "The final sentence suggests that the tragedy of the commons _____ .",
        "options": {
          "A": "can happen but is not bound to happen",
          "B": "never occurs in real communities",
          "C": "was first described by Elinor Ostrom",
          "D": "is unavoidable without government control",
          "E": "applies only to communities in Europe"
        },
        "answer": "A",
        "difficulty": "İleri",
        "tacticUsed": "Son Cümle Yorumu (possibility rather than inevitability)",
        "trapWarning": "B şıkkı aşırıya kaçar; Ostrom toplulukların her zaman başarılı olmadığını kabul eder. D şıkkı Hardin'in görüşüdür. C ve E yanlış bilgidir.",
        "explanation": "\"A possibility rather than an inevitability\" = olabilir ama kaçınılmaz değildir (A şıkkı)."
      }
    ]
  },
  {
    "id": "rb021",
    "title": "Is There a Bilingual Advantage?",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Psychological Bulletin & Nature Human Behaviour",
    "wordCount": 238,
    "passageText": "For much of the twentieth century, raising children with two languages was thought to be harmful. Early studies, many of them poorly designed, reported that bilingual children scored lower on intelligence tests, and parents were sometimes advised to speak only the majority language at home. These studies, however, often compared bilingual immigrant children from poor families with wealthier monolingual children, so the differences probably reflected social circumstances rather than language.\n\nFrom the 1960s onwards, the pendulum swung in the opposite direction. Researchers began to report that bilinguals outperformed monolinguals on tasks requiring attention and self-control. The explanation seemed intuitive: because both languages are always active in a bilingual's mind, the speaker must constantly suppress one of them, and this daily practice was thought to strengthen general executive functions. Some studies even suggested that bilingualism delayed the onset of dementia by several years.\n\nMore recently, this so-called bilingual advantage has itself come under scrutiny. Several large studies involving thousands of participants have found little or no difference between bilinguals and monolinguals on executive function tasks. Critics also point to publication bias: studies that found an advantage were more likely to be published than those that did not. The debate is not settled, but many researchers now believe that any cognitive benefit is smaller and less consistent than once claimed. Importantly, none of the evidence suggests that bilingualism is harmful, and its social and cultural benefits are not in doubt.",
    "vocabularyNotes": [
      {
        "word": "pendulum",
        "meaningTr": "sarkaç",
        "contextNote": "the pendulum swung: kamuoyu/görüş tersine döndü (mecaz)."
      },
      {
        "word": "outperform",
        "meaningTr": "-den daha iyi performans göstermek",
        "contextNote": "Eş anlamlısı: surpass, outdo."
      },
      {
        "word": "intuitive",
        "meaningTr": "sezgisel",
        "contextNote": "intuition (sezgi) kelimesinden."
      },
      {
        "word": "suppress",
        "meaningTr": "bastırmak",
        "contextNote": "Eş anlamlısı: inhibit, restrain."
      },
      {
        "word": "onset",
        "meaningTr": "başlangıç (hastalık)",
        "contextNote": "the onset of a disease: bir hastalığın başlaması."
      },
      {
        "word": "scrutiny",
        "meaningTr": "dikkatli inceleme",
        "contextNote": "come under scrutiny: mercek altına alınmak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Because both languages are always active in a bilingual's mind, the speaker must constantly suppress one of them, and this daily practice was thought to strengthen general executive functions.",
        "subject": "the speaker / this daily practice (konuşan kişi / bu günlük alıştırma)",
        "mainVerb": "must suppress / was thought to strengthen (bastırmak zorundadır / güçlendirdiği düşünülüyordu)",
        "objectsAndComplements": "one of them (onlardan birini) + general executive functions (genel yürütücü işlevleri)",
        "grammaticalStructures": [
          "Sebep yan cümlesi (Because ...).",
          "must: zorunluluk.",
          "be thought to + V1: -dığı düşünülmek (passive reporting).",
          "and ile iki ana cümle bağlanır."
        ],
        "translationTr": "Her iki dil de iki dilli birinin zihninde sürekli etkin olduğu için konuşan kişi bunlardan birini sürekli bastırmak zorundadır ve bu günlük alıştırmanın genel yürütücü işlevleri güçlendirdiği düşünülüyordu."
      }
    ],
    "questions": [
      {
        "id": "rb021_q1",
        "type": "reading",
        "title": "Is There a Bilingual Advantage?",
        "question": "According to the passage, early studies that found bilingualism harmful were flawed because _____ .",
        "options": {
          "A": "they tested children only in the language they spoke at home",
          "B": "they compared groups that differed in social and economic background",
          "C": "they were carried out before intelligence tests had been invented",
          "D": "they included far too many wealthy children who spoke only one language at home",
          "E": "they ignored the cultural benefits that bilingualism clearly brings"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Metodoloji Eleştirisi",
        "trapWarning": "D şıkkı tuzaktır: sorun zengin çocukların sayısı değil, karşılaştırılan grupların farklı sosyal koşullardan gelmesidir. A ve C metinde yoktur.",
        "explanation": "Yoksul göçmen iki dilli çocuklar daha varlıklı tek dilli çocuklarla karşılaştırılmıştır; fark dilden değil sosyal koşullardan kaynaklanıyordu (B şıkkı)."
      },
      {
        "id": "rb021_q2",
        "type": "reading",
        "title": "Is There a Bilingual Advantage?",
        "question": "The phrase \"the pendulum swung in the opposite direction\" means that _____ .",
        "options": {
          "A": "researchers stopped studying bilingual children for several decades",
          "B": "opinion moved from seeing bilingualism as harmful to seeing it as beneficial",
          "C": "bilingual children began to perform worse on tests of attention",
          "D": "parents were advised to speak only the majority language at home",
          "E": "studies became much more careful about comparing children from similar kinds of families"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Deyim/Mecaz Anlamı",
        "trapWarning": "D şıkkı ilk paragraftaki eski tavsiyedir. C şıkkı tam tersidir. E şıkkı metinde bu döneme atfedilmez.",
        "explanation": "Sarkaç benzetmesi, görüşün \"zararlı\"dan \"faydalı\"ya tersine döndüğünü anlatır (B şıkkı)."
      },
      {
        "id": "rb021_q3",
        "type": "reading",
        "title": "Is There a Bilingual Advantage?",
        "question": "Which of the following is given as a reason to doubt the bilingual advantage?",
        "options": {
          "A": "Bilinguals were found to develop dementia several years earlier than monolinguals",
          "B": "Studies showing a benefit were more likely to be published than others",
          "C": "Bilingual speakers were unable to suppress either of their languages",
          "D": "Most researchers have concluded that bilingualism harms attention",
          "E": "Large studies found that monolinguals had much better self-control"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay (publication bias)",
        "trapWarning": "A ve D metinle çelişir. E şıkkı abartır: büyük çalışmalar \"little or no difference\" bulmuştur. C şıkkı metinde yoktur.",
        "explanation": "Eleştirmenler yayın yanlılığına dikkat çeker: avantaj bulan çalışmaların yayımlanma olasılığı daha yüksektir (B şıkkı)."
      },
      {
        "id": "rb021_q4",
        "type": "reading",
        "title": "Is There a Bilingual Advantage?",
        "question": "The author's conclusion in the last paragraph is that _____ .",
        "options": {
          "A": "bilingualism has been shown to have no cognitive or social benefits at all",
          "B": "any cognitive benefit may be limited, but bilingualism is certainly not harmful",
          "C": "the bilingual advantage has finally been proven beyond doubt by several large-scale studies",
          "D": "parents should avoid raising children with two languages until more is known",
          "E": "the debate has been settled in favour of researchers in the 1960s"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sonuç Paragrafı",
        "trapWarning": "A şıkkı sosyal faydaları inkâr eder. C ve E \"The debate is not settled\" ifadesiyle çelişir. D şıkkı yazarın vardığı sonucun tersidir.",
        "explanation": "Yazar bilişsel faydanın küçük ve tutarsız olabileceğini, ama iki dilliliğin zararlı olmadığını vurgular (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb022",
    "title": "Rethinking the Bystander Effect",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from American Psychologist",
    "wordCount": 243,
    "passageText": "In 1964, a young woman named Kitty Genovese was murdered outside her apartment in New York. A newspaper reported that thirty-eight neighbours had watched the attack without calling the police, and the story became a symbol of urban indifference. It also inspired a famous line of research. In a series of experiments, psychologists John Darley and Bibb Latané showed that people were less likely to help someone in an emergency when other witnesses were present. They called this the bystander effect and explained it by a diffusion of responsibility: when many people are watching, each feels less personally obliged to act.\n\nLater investigations revealed that the original newspaper account was greatly exaggerated. Far fewer people had witnessed the attack, most of them heard rather than saw it, and at least two neighbours did call the police. The bystander effect itself, however, has been reproduced in many laboratory studies.\n\nRecent research has added an important qualification. A 2019 study analysed security camera footage of real public conflicts in three countries and found that in nine out of ten cases at least one bystander intervened. Moreover, the more bystanders there were, the more likely it was that someone would help. The researchers argued that while each individual may be less likely to act in a crowd, the presence of many people increases the chance that at least one of them will. Victims of public violence, they suggested, are therefore not as alone as the famous story implies.",
    "vocabularyNotes": [
      {
        "word": "indifference",
        "meaningTr": "kayıtsızlık, ilgisizlik",
        "contextNote": "Sıfat: indifferent (to)."
      },
      {
        "word": "diffusion",
        "meaningTr": "yayılma, dağılma",
        "contextNote": "diffusion of responsibility: sorumluluğun dağılması."
      },
      {
        "word": "obliged",
        "meaningTr": "zorunlu, yükümlü",
        "contextNote": "feel obliged to: kendini -mek zorunda hissetmek."
      },
      {
        "word": "reproduce",
        "meaningTr": "yeniden üretmek, tekrarlamak (deney)",
        "contextNote": "replicate ile eş anlamlı kullanılır."
      },
      {
        "word": "qualification",
        "meaningTr": "kısıtlama, çekince; nitelik",
        "contextNote": "Burada bir iddiaya eklenen sınırlama."
      },
      {
        "word": "intervene",
        "meaningTr": "müdahale etmek",
        "contextNote": "İsim: intervention."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "The researchers argued that while each individual may be less likely to act in a crowd, the presence of many people increases the chance that at least one of them will.",
        "subject": "The researchers (araştırmacılar)",
        "mainVerb": "argued (ileri sürdüler)",
        "objectsAndComplements": "[that-clause: her birey kalabalıkta harekete geçmeye daha az eğilimli olsa da çok sayıda kişinin varlığının en az birinin bunu yapma ihtimalini artırdığı]",
        "grammaticalStructures": [
          "while: -se de (zıtlık).",
          "be likely to + V1: muhtemel olmak.",
          "the chance that ...: isim + açıklayıcı that-clause.",
          "Eksiltili yapı (at least one of them will [act])."
        ],
        "translationTr": "Araştırmacılar, her bir bireyin kalabalık içinde harekete geçme olasılığı daha düşük olsa da çok sayıda insanın varlığının en az birinin harekete geçme ihtimalini artırdığını ileri sürdüler."
      }
    ],
    "questions": [
      {
        "id": "rb022_q1",
        "type": "reading",
        "title": "Rethinking the Bystander Effect",
        "question": "According to Darley and Latané, people are less likely to help in an emergency when others are present because _____ .",
        "options": {
          "A": "they are afraid of being attacked themselves",
          "B": "each person feels less personally responsible",
          "C": "they assume the victim does not really need help",
          "D": "city life has made them indifferent to strangers",
          "E": "they do not know how to contact the police"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Açıklama Tespiti (diffusion of responsibility)",
        "trapWarning": "D şıkkı gazete hikâyesinin yarattığı genel algıdır, araştırmacıların açıklaması değildir. A, C ve E metinde yoktur.",
        "explanation": "Açıklama sorumluluğun dağılmasıdır: çok kişi izlediğinde her biri kendini harekete geçmek zorunda daha az hisseder (B şıkkı)."
      },
      {
        "id": "rb022_q2",
        "type": "reading",
        "title": "Rethinking the Bystander Effect",
        "question": "What did later investigations reveal about the Kitty Genovese case?",
        "options": {
          "A": "More than thirty-eight people had actually watched the attack.",
          "B": "The newspaper had exaggerated how many people saw and ignored the attack.",
          "C": "None of the neighbours had heard or seen anything at all on the night of the attack.",
          "D": "The attack had taken place in a different city from the one reported.",
          "E": "Darley and Latané had invented the case for their experiments."
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay (greatly exaggerated)",
        "trapWarning": "A şıkkı tam tersidir. C şıkkı metinle çelişir: çoğu duymuştur ve en az ikisi polisi aramıştır. D ve E metinde yoktur.",
        "explanation": "Sonraki incelemelere göre olayı gören kişi sayısı çok daha azdı ve en az iki komşu polisi aramıştı; yani haber abartılıydı (B şıkkı)."
      },
      {
        "id": "rb022_q3",
        "type": "reading",
        "title": "Rethinking the Bystander Effect",
        "question": "The 2019 study found that _____ .",
        "options": {
          "A": "bystanders rarely intervened in real public conflicts recorded on security cameras",
          "B": "the chance of someone helping increased with the number of bystanders",
          "C": "laboratory studies of the bystander effect had all been faked",
          "D": "people in some countries never help strangers in public",
          "E": "each individual is more likely to help when he or she is part of a large crowd"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Araştırma Bulgusu",
        "trapWarning": "A şıkkı sonucu tersine çevirir (10 vakadan 9'unda müdahale). E şıkkı tuzaktır: bireysel olasılık değil, en az bir kişinin yardım etme olasılığı artar. C şıkkı metinde yoktur.",
        "explanation": "\"The more bystanders there were, the more likely it was that someone would help\" (B şıkkı)."
      },
      {
        "id": "rb022_q4",
        "type": "reading",
        "title": "Rethinking the Bystander Effect",
        "question": "Which of the following best expresses the main idea of the passage?",
        "options": {
          "A": "The Kitty Genovese story proves that people living in big cities do not care about others at all.",
          "B": "The bystander effect is real, but victims in public are still usually helped by someone.",
          "C": "Laboratory experiments are more reliable than security camera footage.",
          "D": "Newspapers should not report crimes before the police have investigated them.",
          "E": "The diffusion of responsibility explains why crime rates are higher in cities."
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Ana Fikir",
        "trapWarning": "A şıkkı metnin çürüttüğü eski algıdır. C şıkkı karşılaştırmayı ters kurar. D ve E metnin kapsamı dışındadır.",
        "explanation": "Metin bystander etkisinin laboratuvarda tekrarlandığını ama gerçek hayatta birinin genellikle yardım ettiğini söyler (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb023",
    "title": "Remote Work and the Future of Cities",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Stanford Institute for Economic Policy Research",
    "wordCount": 257,
    "passageText": "Before 2020, only about five percent of working days in the United States were spent at home. During the COVID-19 pandemic, the figure rose to more than sixty percent, and although it has since fallen, it has settled at around a quarter, roughly five times its pre-pandemic level. Similar, if smaller, shifts have occurred in Europe and parts of Asia. For many office workers, a hybrid arrangement of two or three days in the office each week has become normal.\n\nThe consequences for cities are significant. Office occupancy in many downtown areas remains well below pre-pandemic levels, and the restaurants, shops and transport systems that depended on commuters have lost revenue. Because commercial property taxes are an important source of income for many city governments, falling office values could put pressure on public budgets. Some economists have warned of an \"urban doom loop\", in which lower revenues lead to cuts in services, which make city centres less attractive, which in turn drives away more businesses and residents.\n\nOthers are more optimistic. They point out that cities have survived many earlier shocks and that the end of the daily commute may allow people to live in a wider range of places. Empty offices could be converted into housing, helping to ease shortages in expensive cities. Moreover, remote work appears to benefit groups who previously struggled to work full-time in an office, including parents of young children and people with disabilities. Whether cities decline or simply change, most analysts agree that a full return to the pre-pandemic pattern is unlikely.",
    "vocabularyNotes": [
      {
        "word": "hybrid",
        "meaningTr": "karma, melez",
        "contextNote": "hybrid work: karma çalışma (ofis + ev)."
      },
      {
        "word": "occupancy",
        "meaningTr": "doluluk (oranı)",
        "contextNote": "occupy (işgal etmek, doldurmak) fiilinden."
      },
      {
        "word": "commuter",
        "meaningTr": "işe gidip gelen kişi",
        "contextNote": "commute: işe gidip gelmek."
      },
      {
        "word": "doom loop",
        "meaningTr": "kıyamet döngüsü, kısır döngü",
        "contextNote": "Kendini besleyen kötüleşme süreci."
      },
      {
        "word": "convert into",
        "meaningTr": "-e dönüştürmek",
        "contextNote": "convert A into B."
      },
      {
        "word": "ease",
        "meaningTr": "hafifletmek, azaltmak",
        "contextNote": "ease a shortage: bir sıkıntıyı azaltmak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Some economists have warned of an \"urban doom loop\", in which lower revenues lead to cuts in services, which make city centres less attractive, which in turn drives away more businesses and residents.",
        "subject": "Some economists (bazı ekonomistler)",
        "mainVerb": "have warned of (-e karşı uyarmıştır)",
        "objectsAndComplements": "an urban doom loop (kentsel bir kısır döngü) + art arda üç relative clause (in which ... which ... which ...)",
        "grammaticalStructures": [
          "warn of: -e karşı uyarmak.",
          "Edatlı relative clause (in which ...).",
          "Zincirleme which yapıları: her biri bir önceki sonucu niteler.",
          "in turn: bunun sonucunda da."
        ],
        "translationTr": "Bazı ekonomistler, düşen gelirlerin hizmetlerde kesintiye, bunun şehir merkezlerini daha az çekici hale getirmesine, bunun da daha fazla işletme ve sakini uzaklaştırmasına yol açtığı bir \"kentsel kısır döngü\" konusunda uyarıda bulunmuştur."
      }
    ],
    "questions": [
      {
        "id": "rb023_q1",
        "type": "reading",
        "title": "Remote Work and the Future of Cities",
        "question": "According to the passage, the share of working days spent at home in the United States _____ .",
        "options": {
          "A": "has returned to about five percent since the pandemic ended",
          "B": "is now about five times higher than it was before 2020",
          "C": "has remained above sixty percent since the pandemic began",
          "D": "is higher in Europe and Asia than in the United States",
          "E": "fell to around a quarter of its level before the pandemic"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sayısal Detay",
        "trapWarning": "E şıkkı tuzaktır: oran \"çeyrek\" düzeyine yerleşmiştir ama bu öncekinin beş katıdır. A ve C metinle çelişir. D şıkkı \"if smaller\" ifadesine aykırıdır.",
        "explanation": "Oran yaklaşık yüzde yirmi beşe yerleşmiştir; bu pandemi öncesinin kabaca beş katıdır (B şıkkı)."
      },
      {
        "id": "rb023_q2",
        "type": "reading",
        "title": "Remote Work and the Future of Cities",
        "question": "The \"urban doom loop\" refers to _____ .",
        "options": {
          "A": "a plan to convert the empty offices in city centres into affordable housing for residents",
          "B": "a cycle in which falling revenues and declining services reinforce each other",
          "C": "the daily journey that commuters make between home and the office",
          "D": "a rise in commercial property taxes that eventually forces many businesses to leave the city",
          "E": "the movement of workers to cheaper cities after the pandemic"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kavram Tanımı",
        "trapWarning": "A şıkkı iyimser görüşe aittir. D şıkkı sebebi yanlış verir: vergi artışı değil, gelir düşüşü başlatır. C ve E kavramla ilgisizdir.",
        "explanation": "Döngüde düşen gelirler hizmet kesintilerine, bu da daha fazla kaybına yol açar; birbirini besleyen bir süreçtir (B şıkkı)."
      },
      {
        "id": "rb023_q3",
        "type": "reading",
        "title": "Remote Work and the Future of Cities",
        "question": "Which of the following is NOT mentioned as a possible benefit of remote work?",
        "options": {
          "A": "People may be able to live in a wider range of places",
          "B": "Empty offices could provide additional housing",
          "C": "Parents of young children may find it easier to work",
          "D": "People with disabilities may gain better access to jobs",
          "E": "City governments may collect more property taxes"
        },
        "answer": "E",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve D son paragrafta geçer. E şıkkı ise metnin söylediğinin tersidir: emlak vergisi gelirleri düşebilir.",
        "explanation": "Metne göre düşen ofis değerleri vergi gelirlerini azaltabilir; daha fazla vergi toplanacağı söylenmez (E şıkkı)."
      },
      {
        "id": "rb023_q4",
        "type": "reading",
        "title": "Remote Work and the Future of Cities",
        "question": "What do most analysts agree on, according to the last sentence?",
        "options": {
          "A": "Cities will inevitably decline over the coming decades as more people work from home.",
          "B": "Work patterns are unlikely to return completely to how they were before 2020.",
          "C": "Remote work will soon replace office work entirely.",
          "D": "The urban doom loop has already begun in most cities.",
          "E": "Hybrid work will gradually disappear once the value of office buildings recovers."
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Uzlaşı Noktası",
        "trapWarning": "A ve D karamsar görüşü kesinleştirir. C şıkkı aşırı bir genellemedir. E şıkkı metne aykırıdır.",
        "explanation": "\"Most analysts agree that a full return to the pre-pandemic pattern is unlikely\" (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb024",
    "title": "The Marshmallow Test Revisited",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Psychological Science",
    "wordCount": 245,
    "passageText": "In the late 1960s, psychologist Walter Mischel conducted a now famous experiment at a nursery school at Stanford University. Young children were offered a choice: they could eat one marshmallow immediately, or wait alone in a room for about fifteen minutes and receive two. Some children ate the sweet at once, while others covered their eyes, sang to themselves or turned away to resist temptation. Follow-up studies years later reported that children who had waited longer tended to have higher exam scores, better health and fewer behavioural problems as adolescents and adults.\n\nThese findings were widely interpreted as evidence that self-control is a stable personal trait that shapes life outcomes, and they inspired many programmes aimed at teaching children to delay gratification. However, the original studies involved fewer than a hundred children, almost all from the families of Stanford staff and students.\n\nIn 2018, researchers repeated the experiment with more than nine hundred children from more diverse backgrounds. They found that the link between waiting time and later achievement was about half as strong as originally reported. More importantly, once they took into account factors such as family income and the mother's education, the link almost disappeared. Other studies have shown that children wait longer when they trust the adult who promised the reward. Together, these results suggest that a child's decision to eat the marshmallow may reflect his or her circumstances, including whether promises are usually kept, as much as an innate capacity for self-control.",
    "vocabularyNotes": [
      {
        "word": "temptation",
        "meaningTr": "ayartı, cazibe",
        "contextNote": "tempt (ayartmak) fiilinden."
      },
      {
        "word": "adolescent",
        "meaningTr": "ergen",
        "contextNote": "adolescence: ergenlik."
      },
      {
        "word": "trait",
        "meaningTr": "özellik, nitelik (kişilik)",
        "contextNote": "personality trait: kişilik özelliği."
      },
      {
        "word": "delay gratification",
        "meaningTr": "hazzı ertelemek",
        "contextNote": "Psikolojide öz denetim kavramı."
      },
      {
        "word": "take into account",
        "meaningTr": "hesaba katmak",
        "contextNote": "Eş anlamlısı: consider, allow for."
      },
      {
        "word": "innate",
        "meaningTr": "doğuştan",
        "contextNote": "Eş anlamlısı: inborn, inherent."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Once they took into account factors such as family income and the mother's education, the link almost disappeared.",
        "subject": "the link (bağlantı)",
        "mainVerb": "almost disappeared (neredeyse ortadan kalktı)",
        "objectsAndComplements": "[Once-clause: aile geliri ve annenin eğitimi gibi faktörleri hesaba kattıklarında]",
        "grammaticalStructures": [
          "Once: -ince, -dığı anda (zaman bağlacı).",
          "take into account + nesne (nesne uzun olduğu için sona alınmış).",
          "such as: örnek verme."
        ],
        "translationTr": "Aile geliri ve annenin eğitimi gibi faktörleri hesaba kattıklarında bağlantı neredeyse ortadan kalktı."
      }
    ],
    "questions": [
      {
        "id": "rb024_q1",
        "type": "reading",
        "title": "The Marshmallow Test Revisited",
        "question": "In the original experiment, children who waited were rewarded with _____ .",
        "options": {
          "A": "praise from the researcher",
          "B": "a second marshmallow",
          "C": "permission to leave the room",
          "D": "a song chosen by themselves",
          "E": "higher scores on a later exam"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Basit Detay",
        "trapWarning": "E şıkkı deneyin ödülü değil, yıllar sonraki takip bulgusudur. C ve D çocukların bekleme stratejileriyle karıştırılmıştır.",
        "explanation": "Çocuklar yaklaşık on beş dakika beklerse iki marshmallow alacaktı; yani ikinci bir marshmallow (B şıkkı)."
      },
      {
        "id": "rb024_q2",
        "type": "reading",
        "title": "The Marshmallow Test Revisited",
        "question": "The author points out that the original studies involved children mostly from Stanford families in order to _____ .",
        "options": {
          "A": "show that the experiment was conducted under carefully controlled and ideal conditions",
          "B": "suggest that the sample was too small and too narrow to generalize from",
          "C": "explain why those children were better at resisting temptation",
          "D": "prove that wealthy children always have greater self-control",
          "E": "argue that the experiment should never have been carried out"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yazarın Amacı (However ...)",
        "trapWarning": "C ve D örneklemi bir sonucun nedeni gibi sunar; yazar ise genellemenin sınırına dikkat çeker. A şıkkı tersidir. E şıkkı aşırıdır.",
        "explanation": "\"However\" ile gelen bilgi örneklemin küçük ve dar olduğunu, dolayısıyla genellemenin riskli olduğunu vurgular (B şıkkı)."
      },
      {
        "id": "rb024_q3",
        "type": "reading",
        "title": "The Marshmallow Test Revisited",
        "question": "According to the 2018 study, _____ .",
        "options": {
          "A": "the link between waiting time and later achievement was twice as strong as first reported",
          "B": "family background explained much of the link between waiting and later success",
          "C": "children from diverse backgrounds were unable to wait for any reward",
          "D": "the original findings were confirmed in every important respect",
          "E": "mothers' education had no effect at all on children's later achievement"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Bulgu Yorumu",
        "trapWarning": "A şıkkı oranı tersine çevirir (yarısı kadar). D ve E metinle çelişir. C şıkkı metinde yoktur.",
        "explanation": "Aile geliri ve annenin eğitimi hesaba katılınca bağlantı neredeyse kaybolmuştur; yani bağlantıyı büyük ölçüde aile arka planı açıklar (B şıkkı)."
      },
      {
        "id": "rb024_q4",
        "type": "reading",
        "title": "The Marshmallow Test Revisited",
        "question": "The finding that children wait longer when they trust the adult suggests that _____ .",
        "options": {
          "A": "self-control is entirely determined by genes",
          "B": "a child's choice may depend on past experience with promises",
          "C": "children who trust adults are always more successful later in life",
          "D": "adults should never make promises to young children",
          "E": "the original experiment measured children's trust in adults rather than their patience"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım",
        "trapWarning": "A şıkkı son cümlenin tersidir. C şıkkı \"always\" ile aşırı genelleme yapar. E şıkkı tuzaktır: metin \"as much as\" der; yani yalnızca güveni ölçtüğünü iddia etmez.",
        "explanation": "Son cümleye göre çocuğun kararı, sözlerin genellikle tutulup tutulmadığı gibi koşulları yansıtabilir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb025",
    "title": "When a Language Dies",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from UNESCO Atlas of the World's Languages in Danger",
    "wordCount": 253,
    "passageText": "Of the roughly seven thousand languages spoken in the world today, around forty percent are considered endangered, and linguists estimate that at least half could disappear by the end of this century. Most of them are spoken by small communities, and many have never been written down. When the last fluent speaker of such a language dies, an entire system of knowledge often disappears with it.\n\nLanguages rarely die because their speakers die. More often, communities gradually shift to a more dominant language for economic and social reasons. Parents may decide that their children will have better opportunities if they speak the national language, or children may stop using the community language because it is not used at school or in the media. Within two or three generations, a language that was once spoken by everyone can survive only among the elderly.\n\nThe loss matters for several reasons. Languages encode knowledge about local plants, animals and ecosystems that may not exist anywhere else; some indigenous names for plants, for example, have guided scientists to medicinal compounds. They also preserve oral histories, songs and ways of seeing the world. Nevertheless, decline is not always irreversible. Hebrew, which had not been used as an everyday spoken language for many centuries, was revived in the late nineteenth and twentieth centuries and now has millions of native speakers. Less dramatic but still encouraging examples include Welsh and Māori, whose use has grown thanks to school programmes in which children are taught entirely in the community language.",
    "vocabularyNotes": [
      {
        "word": "endangered",
        "meaningTr": "tehlike altındaki",
        "contextNote": "endangered species/languages."
      },
      {
        "word": "dominant",
        "meaningTr": "baskın, hâkim",
        "contextNote": "dominate fiilinden."
      },
      {
        "word": "encode",
        "meaningTr": "kodlamak, şifrelemek",
        "contextNote": "Burada bilgiyi içinde barındırmak."
      },
      {
        "word": "indigenous",
        "meaningTr": "yerli, bir bölgeye özgü",
        "contextNote": "Eş anlamlısı: native."
      },
      {
        "word": "irreversible",
        "meaningTr": "geri döndürülemez",
        "contextNote": "Zıt anlamlısı: reversible."
      },
      {
        "word": "revive",
        "meaningTr": "canlandırmak, diriltmek",
        "contextNote": "İsim: revival."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Hebrew, which had not been used as an everyday spoken language for many centuries, was revived in the late nineteenth and twentieth centuries and now has millions of native speakers.",
        "subject": "Hebrew (İbranice)",
        "mainVerb": "was revived ... and now has (canlandırıldı ve şimdi sahiptir)",
        "objectsAndComplements": "[which-clause: yüzyıllardır gündelik konuşma dili olarak kullanılmamış olan] + millions of native speakers",
        "grammaticalStructures": [
          "Non-defining relative clause (which had not been used ...).",
          "Past perfect passive (had not been used).",
          "Simple past passive (was revived).",
          "and ile geçmiş ve şimdiki zamanın bağlanması."
        ],
        "translationTr": "Yüzyıllar boyunca gündelik konuşma dili olarak kullanılmamış olan İbranice, on dokuzuncu yüzyılın sonu ile yirminci yüzyılda yeniden canlandırıldı ve bugün milyonlarca anadili konuşuruna sahiptir."
      }
    ],
    "questions": [
      {
        "id": "rb025_q1",
        "type": "reading",
        "title": "When a Language Dies",
        "question": "According to the passage, languages usually disappear because _____ .",
        "options": {
          "A": "their speakers are killed in large numbers by wars or diseases",
          "B": "communities gradually adopt a more dominant language",
          "C": "linguists fail to write them down in time",
          "D": "governments officially ban them from being used in schools",
          "E": "they lack words for modern technology"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep & Olumsuz Tuzak (rarely ... More often ...)",
        "trapWarning": "A şıkkı metnin \"Languages rarely die because their speakers die\" cümlesiyle çelişir. D şıkkı resmi yasaktan söz eder; metin sadece okulda kullanılmadığını söyler. C ve E metinde yoktur.",
        "explanation": "Diller genellikle toplulukların ekonomik ve sosyal nedenlerle baskın bir dile yavaş yavaş geçmesiyle yok olur (B şıkkı)."
      },
      {
        "id": "rb025_q2",
        "type": "reading",
        "title": "When a Language Dies",
        "question": "The example of indigenous plant names is used to show that _____ .",
        "options": {
          "A": "most endangered languages have been written down by scientists",
          "B": "languages can contain valuable knowledge found nowhere else",
          "C": "scientists should learn indigenous languages before studying plants",
          "D": "plants are disappearing faster than languages in many regions",
          "E": "indigenous names for plants are usually borrowed from other languages"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin İşlevi",
        "trapWarning": "C şıkkı yazarın önermediği bir tavsiyedir. A şıkkı ilk paragrafla çelişir. D ve E metinde yoktur.",
        "explanation": "Örnek, dillerin başka hiçbir yerde bulunmayan yerel bilgileri barındırdığını göstermek için verilmiştir (B şıkkı)."
      },
      {
        "id": "rb025_q3",
        "type": "reading",
        "title": "When a Language Dies",
        "question": "The examples of Hebrew, Welsh and Māori support the idea that _____ .",
        "options": {
          "A": "only languages with a long written history can be saved",
          "B": "language decline can sometimes be reversed",
          "C": "school programmes are the main cause of language loss",
          "D": "all endangered languages will eventually be revived",
          "E": "dominant languages are disappearing faster than small ones"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneklerin Desteklediği Fikir",
        "trapWarning": "C şıkkı okul programlarının rolünü tersine çevirir. D şıkkı \"not always\" ifadesini \"all\" ile abartır. A şıkkı metinde böyle bir koşul yoktur.",
        "explanation": "Örnekler \"decline is not always irreversible\" fikrini destekler (B şıkkı)."
      },
      {
        "id": "rb025_q4",
        "type": "reading",
        "title": "When a Language Dies",
        "question": "It can be inferred from the passage that a language spoken only by elderly people _____ .",
        "options": {
          "A": "is likely to become more widely spoken in the next generation",
          "B": "is at serious risk of disappearing",
          "C": "has usually been revived through school programmes",
          "D": "cannot contain any knowledge about local ecosystems",
          "E": "has never been used by the whole community"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım",
        "trapWarning": "A şıkkı tersidir. C şıkkı canlandırmanın her zaman gerçekleştiğini varsayar. E şıkkı metinle çelişir: bir zamanlar herkes konuşuyordu.",
        "explanation": "İkinci paragrafa göre bir dilin sadece yaşlılar arasında kalması, iki üç kuşakta yok olma sürecinin son aşamasıdır; yani ciddi tehlike altındadır (B şıkkı)."
      }
    ]
  }
];

export const READING_PASSAGE_BANK: ReadingPassage[] = RAW_READING_PASSAGE_BANK.map((p) => ({
  ...p,
  questions: shuffleQuestionList(p.questions)
}));
