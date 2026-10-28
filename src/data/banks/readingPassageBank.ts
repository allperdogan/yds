// Generated reading bank: 90 passages x 4 questions.
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
  },
  {
    "id": "rb026",
    "title": "Self-Driving Cars and the Long Tail",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from IEEE Spectrum & Wired",
    "wordCount": 248,
    "passageText": "A decade ago, many technology companies predicted that fully self-driving cars would be common on public roads by around 2020. That prediction has not come true. Although autonomous taxis now operate in a handful of cities, they are restricted to carefully mapped areas and good weather, and most new cars offer only driver-assistance features that still require a human to pay attention.\n\nEngineers often explain the delay with the idea of the \"long tail\". Teaching a car to handle ninety-nine percent of driving situations, such as following lanes, keeping distance and stopping at red lights, turned out to be relatively manageable. The difficulty lies in the remaining one percent: an enormous variety of rare events, from a mattress falling off a lorry to a police officer directing traffic by hand or a child chasing a ball between parked cars. Each event is unusual on its own, but together they occur often enough that a car unable to deal with them would be dangerous.\n\nBecause machine-learning systems learn from examples, rare events pose a particular problem: there are, by definition, few examples to learn from. Companies have tried to solve this by driving millions of kilometres in computer simulations, where unusual situations can be created deliberately. Critics argue, however, that no simulation can anticipate everything the real world produces. Meanwhile, regulators face the difficult question of how safe an autonomous car must be before it is allowed on the road: as safe as an average human driver, or far safer?",
    "vocabularyNotes": [
      {
        "word": "autonomous",
        "meaningTr": "otonom, kendi kendine işleyen",
        "contextNote": "İsim: autonomy (özerklik)."
      },
      {
        "word": "restricted to",
        "meaningTr": "-e sınırlı",
        "contextNote": "Eş anlamlısı: limited to, confined to."
      },
      {
        "word": "manageable",
        "meaningTr": "üstesinden gelinebilir, yönetilebilir",
        "contextNote": "manage fiilinden."
      },
      {
        "word": "pose a problem",
        "meaningTr": "sorun teşkil etmek",
        "contextNote": "pose a threat/risk/challenge kalıpları sık gelir."
      },
      {
        "word": "deliberately",
        "meaningTr": "kasıtlı olarak",
        "contextNote": "Eş anlamlısı: intentionally, on purpose."
      },
      {
        "word": "anticipate",
        "meaningTr": "öngörmek, beklemek",
        "contextNote": "Eş anlamlısı: foresee, predict."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Each event is unusual on its own, but together they occur often enough that a car unable to deal with them would be dangerous.",
        "subject": "Each event / they (her olay / onlar)",
        "mainVerb": "is / occur (dır / meydana gelir)",
        "objectsAndComplements": "unusual on its own (tek başına alışılmadık) + often enough that ... (... yetecek kadar sık)",
        "grammaticalStructures": [
          "but ile zıtlık.",
          "enough that: -ecek kadar (sonuç).",
          "Reduced relative clause (a car [that is] unable to deal with them).",
          "would: varsayımsal sonuç."
        ],
        "translationTr": "Her olay tek başına sıra dışıdır, ancak hepsi birlikte, bunlarla başa çıkamayan bir aracın tehlikeli olacağı kadar sık meydana gelir."
      }
    ],
    "questions": [
      {
        "id": "rb026_q1",
        "type": "reading",
        "title": "Self-Driving Cars and the Long Tail",
        "question": "According to the passage, the current situation of self-driving cars is that _____ .",
        "options": {
          "A": "they are widely used on public roads in most countries, as companies had predicted",
          "B": "they operate only in limited areas and under favourable conditions",
          "C": "they have completely replaced human drivers in taxi services in major cities",
          "D": "they are no longer being developed by technology companies because of the costs",
          "E": "they can handle every driving situation but are blocked by strict regulators"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay & Güncel Durum",
        "trapWarning": "A şıkkı tahminin gerçekleştiğini söyler; metin tam tersini söyler. E şıkkı \"long tail\" sorununu yok sayar. C ve D aşırı iddialardır.",
        "explanation": "Otonom taksiler sadece birkaç şehirde, haritalanmış bölgelerde ve iyi havada çalışır (B şıkkı)."
      },
      {
        "id": "rb026_q2",
        "type": "reading",
        "title": "Self-Driving Cars and the Long Tail",
        "question": "The \"long tail\" mentioned in the passage refers to _____ .",
        "options": {
          "A": "the ordinary tasks such as following lanes that cars learned quickly",
          "B": "the large number of rare and unpredictable situations on the road",
          "C": "the long period that companies needed to map city streets",
          "D": "the queue of regulators waiting to approve autonomous vehicles",
          "E": "the extra distance that self-driving cars keep from other vehicles"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kavram Tanımı",
        "trapWarning": "A şıkkı uzun kuyruğun tam karşıtı olan yüzde doksan dokuzu tarif eder. C, D ve E kelimenin gerçek anlamıyla oynayan tuzaklardır.",
        "explanation": "Uzun kuyruk, toplamda sık görülen ama tek tek nadir olan olaylardır (B şıkkı)."
      },
      {
        "id": "rb026_q3",
        "type": "reading",
        "title": "Self-Driving Cars and the Long Tail",
        "question": "Why do rare events pose a particular problem for machine-learning systems?",
        "options": {
          "A": "Because such systems are unable to learn from any kind of example",
          "B": "Because few real examples of these events exist to learn from",
          "C": "Because rare events cannot be simulated on any computer",
          "D": "Because human drivers also fail to deal with them correctly",
          "E": "Because regulators do not allow such events to be recorded"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep Sorusu (by definition)",
        "trapWarning": "A şıkkı abartılıdır: sistemler örneklerden öğrenir. C şıkkı metinle çelişir: simülasyonda kasıtlı olarak oluşturulabilir. D ve E metinde yoktur.",
        "explanation": "Makine öğrenmesi örneklerden öğrenir ve nadir olayların tanımı gereği az örneği vardır (B şıkkı)."
      },
      {
        "id": "rb026_q4",
        "type": "reading",
        "title": "Self-Driving Cars and the Long Tail",
        "question": "The question in the last sentence suggests that _____ .",
        "options": {
          "A": "regulators have already decided that autonomous cars must be perfect",
          "B": "there is no agreed standard for how safe autonomous cars must be",
          "C": "human drivers are known to be safer than any autonomous car",
          "D": "autonomous cars will never be allowed on public roads",
          "E": "simulations have answered all of the regulators' safety questions"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Retorik Sorunun İşlevi",
        "trapWarning": "A ve E soruyu cevaplanmış sayar. C ve D metinde olmayan kesin hükümlerdir.",
        "explanation": "Soru düzenleyicilerin hâlâ ne kadar güvenliğin yeterli olduğuna karar veremediğini gösterir; ortak bir standart yoktur (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb027",
    "title": "Meat Without Animals",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Nature Food & The Guardian",
    "wordCount": 243,
    "passageText": "Cultivated meat, sometimes called lab-grown meat, is produced by taking a small sample of cells from a living animal and growing them in large steel tanks known as bioreactors. Fed with a nutrient-rich liquid, the cells multiply and can be formed into products such as minced meat or chicken nuggets. Supporters claim that the technology could eventually provide real meat without the slaughter of animals and with a fraction of the land, water and greenhouse gas emissions of conventional farming.\n\nThe first cultivated burger, presented in London in 2013, cost more than 300,000 dollars to produce. Prices have since fallen dramatically, and in 2020 Singapore became the first country to approve the sale of a cultivated chicken product. Nevertheless, the industry faces serious obstacles. Producing meat at large scale requires enormous bioreactors that must be kept completely sterile, since bacteria grow much faster than animal cells. The nutrient liquid has traditionally contained fetal bovine serum, taken from the blood of unborn calves, which undermines the claim that no animals are harmed, though several companies have now developed animal-free alternatives.\n\nThe environmental benefits are also less certain than early studies suggested. A 2023 analysis found that if the energy used to run bioreactors and purify ingredients comes from fossil fuels, cultivated beef could have a higher carbon footprint than some conventional beef. Whether cultivated meat becomes a mainstream food or remains a niche product may therefore depend as much on the energy system as on the technology itself.",
    "vocabularyNotes": [
      {
        "word": "cultivate",
        "meaningTr": "yetiştirmek, ekmek",
        "contextNote": "Hücre yetiştirme için de kullanılır."
      },
      {
        "word": "multiply",
        "meaningTr": "çoğalmak",
        "contextNote": "Matematikte çarpmak anlamı da vardır."
      },
      {
        "word": "slaughter",
        "meaningTr": "kesim, katliam",
        "contextNote": "Hayvan kesimi için kullanılır."
      },
      {
        "word": "sterile",
        "meaningTr": "steril, mikropsuz",
        "contextNote": "Zıt anlamlısı: contaminated."
      },
      {
        "word": "footprint",
        "meaningTr": "ayak izi",
        "contextNote": "carbon footprint: karbon ayak izi."
      },
      {
        "word": "niche",
        "meaningTr": "niş, dar bir pazar",
        "contextNote": "niche product: sınırlı kitleye hitap eden ürün."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Whether cultivated meat becomes a mainstream food or remains a niche product may therefore depend as much on the energy system as on the technology itself.",
        "subject": "Whether cultivated meat becomes ... or remains ... (isim cümleciği özne)",
        "mainVerb": "may depend (bağlı olabilir)",
        "objectsAndComplements": "as much on the energy system as on the technology itself (teknolojinin kendisi kadar enerji sistemine)",
        "grammaticalStructures": [
          "Whether ... or ... isim cümleciği özne konumunda.",
          "as much ... as ...: eşitlik karşılaştırması.",
          "depend on: -e bağlı olmak.",
          "therefore: sonuç bağlacı."
        ],
        "translationTr": "Bu nedenle laboratuvar etinin ana akım bir gıda mı olacağı yoksa niş bir ürün olarak mı kalacağı, teknolojinin kendisi kadar enerji sistemine de bağlı olabilir."
      }
    ],
    "questions": [
      {
        "id": "rb027_q1",
        "type": "reading",
        "title": "Meat Without Animals",
        "question": "According to the passage, cultivated meat is produced by _____ .",
        "options": {
          "A": "mixing plant proteins so that they imitate the texture of meat",
          "B": "growing animal cells in tanks filled with a nutrient liquid",
          "C": "raising animals in sterile conditions to prevent the spread of disease",
          "D": "taking blood from unborn calves and turning it into a meat product",
          "E": "using bacteria to convert fossil fuels into proteins that can be eaten"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Tanım Sorusu",
        "trapWarning": "A şıkkı bitkisel et alternatiflerini tarif eder. D şıkkı besin sıvısındaki serumu ürünün kendisiyle karıştırır. E şıkkı bakteri ve fosil yakıt bilgilerini birleştiren bir uydurmadır.",
        "explanation": "Hayvan hücreleri biyoreaktörlerde besin açısından zengin bir sıvıyla beslenerek çoğaltılır (B şıkkı)."
      },
      {
        "id": "rb027_q2",
        "type": "reading",
        "title": "Meat Without Animals",
        "question": "Why must bioreactors be kept completely sterile?",
        "options": {
          "A": "Because animal cells die when they are exposed to light",
          "B": "Because bacteria would grow faster than the animal cells",
          "C": "Because regulators in Singapore require it by law",
          "D": "Because fetal bovine serum is easily contaminated by plants",
          "E": "Because sterile tanks use less energy than ordinary ones"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep (since ...)",
        "trapWarning": "C ve E metinde olmayan nedenlerdir. D şıkkı serum bilgisini yanlış bir bağlama taşır.",
        "explanation": "\"since bacteria grow much faster than animal cells\" ifadesi doğrudan B şıkkıdır."
      },
      {
        "id": "rb027_q3",
        "type": "reading",
        "title": "Meat Without Animals",
        "question": "The use of fetal bovine serum is presented as a problem because it _____ .",
        "options": {
          "A": "makes cultivated meat taste different from conventional meat",
          "B": "contradicts the claim that the process does not harm animals",
          "C": "is the main reason that the first burger was so expensive",
          "D": "cannot be replaced by any animal-free alternative that companies have tested",
          "E": "increases the risk of bacterial contamination in the tanks"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çelişki Tespiti (undermines the claim)",
        "trapWarning": "D şıkkı metinle çelişir: bazı şirketler alternatif geliştirmiştir. A, C ve E metinde serumla ilişkilendirilmez.",
        "explanation": "Serum doğmamış buzağıların kanından alınır; bu da hayvanlara zarar verilmediği iddiasını zayıflatır (B şıkkı)."
      },
      {
        "id": "rb027_q4",
        "type": "reading",
        "title": "Meat Without Animals",
        "question": "It can be inferred from the last paragraph that the environmental benefit of cultivated meat _____ .",
        "options": {
          "A": "has been clearly proven by every study carried out since 2013",
          "B": "depends heavily on the source of the energy used in production",
          "C": "is greater for beef than for any other kind of conventional meat",
          "D": "is unimportant because consumers care only about the price",
          "E": "disappears completely once production reaches a very large scale"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (if the energy ... comes from fossil fuels)",
        "trapWarning": "A şıkkı \"less certain than early studies suggested\" ile çelişir. E şıkkı ölçek ile çevre etkisi arasında metinde olmayan bir bağ kurar. D şıkkı metinde yoktur.",
        "explanation": "Enerji fosil yakıtlardan gelirse karbon ayak izi daha yüksek olabilir; yani fayda enerji kaynağına bağlıdır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb028",
    "title": "Galaxies That Formed Too Early",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Nature Astronomy & NASA reports",
    "wordCount": 253,
    "passageText": "The James Webb Space Telescope, launched in December 2021, was designed above all to look back in time. Because light travels at a finite speed, observing very distant objects means seeing them as they were when the light left them. Webb's large mirror and sensitivity to infrared light allow it to detect galaxies whose light has been travelling for more than thirteen billion years, showing the universe as it was only a few hundred million years after the Big Bang.\n\nWithin months of beginning its observations, Webb produced a surprise. It found a number of galaxies in this very early period that appeared to be far brighter and more massive than standard models of galaxy formation had predicted. According to those models, the first galaxies should have been small and faint, gradually growing larger by merging with one another and drawing in gas over billions of years. Some headlines claimed that the discoveries had \"broken\" cosmology.\n\nMost astronomers have responded more cautiously. Some of the earliest estimates of distance turned out to be wrong when they were checked with more detailed measurements. Others suggest that the galaxies may appear unusually bright because young stars formed in intense bursts, or because the stars in the early universe were different from those we see today, rather than because the galaxies contained an impossible amount of matter. The standard model of cosmology, in other words, may need adjustments to its description of how galaxies form, but there is little evidence so far that its foundations are wrong.",
    "vocabularyNotes": [
      {
        "word": "finite",
        "meaningTr": "sonlu, sınırlı",
        "contextNote": "Zıt anlamlısı: infinite."
      },
      {
        "word": "infrared",
        "meaningTr": "kızılötesi",
        "contextNote": "infra- (altında) + red."
      },
      {
        "word": "merge",
        "meaningTr": "birleşmek",
        "contextNote": "İsim: merger."
      },
      {
        "word": "cautiously",
        "meaningTr": "dikkatle, temkinle",
        "contextNote": "Sıfat: cautious."
      },
      {
        "word": "burst",
        "meaningTr": "patlama, ani artış",
        "contextNote": "a burst of activity: ani bir hareketlilik."
      },
      {
        "word": "adjustment",
        "meaningTr": "ayarlama, düzeltme",
        "contextNote": "adjust (ayarlamak) fiilinden."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Others suggest that the galaxies may appear unusually bright because young stars formed in intense bursts, rather than because the galaxies contained an impossible amount of matter.",
        "subject": "Others (diğerleri)",
        "mainVerb": "suggest (öne sürer)",
        "objectsAndComplements": "[that-clause: galaksilerin ... madde içerdikleri için değil, genç yıldızlar yoğun patlamalarla oluştuğu için alışılmadık derecede parlak görünebileceği]",
        "grammaticalStructures": [
          "may appear + sıfat: gibi görünebilir.",
          "because ... rather than because ...: iki sebebin karşılaştırılması.",
          "Simple past (formed / contained)."
        ],
        "translationTr": "Diğerleri, galaksilerin imkânsız miktarda madde içerdikleri için değil, genç yıldızların yoğun patlamalar halinde oluşması nedeniyle alışılmadık derecede parlak görünebileceğini öne sürüyor."
      }
    ],
    "questions": [
      {
        "id": "rb028_q1",
        "type": "reading",
        "title": "Galaxies That Formed Too Early",
        "question": "According to the passage, observing very distant galaxies allows astronomers to _____ .",
        "options": {
          "A": "measure the exact speed at which light travels through space",
          "B": "see what the universe looked like a very long time ago",
          "C": "predict how galaxies will develop in the distant future",
          "D": "detect galaxies that are invisible in infrared light",
          "E": "prove that the Big Bang happened thirteen billion years ago"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay (look back in time)",
        "trapWarning": "D şıkkı teleskobun kızılötesi hassasiyetini ters çevirir. E şıkkı metnin yapmadığı bir kanıt iddiası ekler. A ve C metinde yoktur.",
        "explanation": "Uzak nesneleri gözlemlemek onları ışığın yola çıktığı andaki halleriyle görmek demektir; yani evrenin çok eski halini görmektir (B şıkkı)."
      },
      {
        "id": "rb028_q2",
        "type": "reading",
        "title": "Galaxies That Formed Too Early",
        "question": "Webb's discovery was surprising because the early galaxies _____ .",
        "options": {
          "A": "were smaller and fainter than any of the galaxies that had been seen before",
          "B": "seemed brighter and more massive than models had predicted",
          "C": "were moving away from each other at an impossible speed",
          "D": "contained no stars at all but only clouds of gas",
          "E": "had merged with one another much more slowly than expected"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Beklenti-Gerçek Zıtlığı",
        "trapWarning": "A şıkkı modellerin beklediği durumdur, sürpriz değildir. C, D ve E metinde yoktur.",
        "explanation": "Galaksiler standart modellerin öngördüğünden çok daha parlak ve kütleli görünmüştür (B şıkkı)."
      },
      {
        "id": "rb028_q3",
        "type": "reading",
        "title": "Galaxies That Formed Too Early",
        "question": "The author mentions headlines claiming that cosmology had been \"broken\" in order to _____ .",
        "options": {
          "A": "support the view that the standard model of cosmology has now completely failed",
          "B": "contrast a dramatic reaction with the more careful view of astronomers",
          "C": "show that journalists understand cosmology better than scientists",
          "D": "explain why the telescope was launched in December 2021",
          "E": "suggest that distance measurements are always unreliable"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Zıtlık İçin Kullanılan Örnek",
        "trapWarning": "A şıkkı son cümleyle çelişir. E şıkkı abartılı bir genellemedir: sadece bazı ilk tahminler yanlış çıkmıştır. C ve D ilgisizdir.",
        "explanation": "Hemen ardından \"Most astronomers have responded more cautiously\" gelir; manşetler temkinli görüşle karşılaştırılmak için verilmiştir (B şıkkı)."
      },
      {
        "id": "rb028_q4",
        "type": "reading",
        "title": "Galaxies That Formed Too Early",
        "question": "The author's conclusion is that the standard model of cosmology _____ .",
        "options": {
          "A": "must be replaced entirely by a new theory of the universe",
          "B": "may need some revision but is not fundamentally wrong",
          "C": "has been confirmed in every detail by the new observations",
          "D": "cannot explain why light travels at a finite speed",
          "E": "was designed only to describe galaxies near our own"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sonuç Cümlesi (may need adjustments, but ...)",
        "trapWarning": "A şıkkı manşetlerin görüşüdür. C şıkkı ayarlamaya ihtiyaç olabileceği bilgisini yok sayar. D ve E metinde yoktur.",
        "explanation": "Model galaksi oluşumu açıklamasında ayarlama gerektirebilir ama temellerinin yanlış olduğuna dair kanıt azdır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb029",
    "title": "Quantum Computers and the Future of Encryption",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Scientific American & NIST reports",
    "wordCount": 257,
    "passageText": "Much of the security of the internet rests on a simple mathematical fact: multiplying two large prime numbers is easy, but working out which two primes were multiplied to produce a given result is extraordinarily hard. The encryption systems that protect online banking, email and many government communications rely on this asymmetry. Even the most powerful conventional computers would need thousands of years to break a well-chosen key.\n\nQuantum computers could change this. Instead of bits that are either 0 or 1, they use quantum bits, or qubits, which can exist in a combination of states at once. In 1994, the mathematician Peter Shor showed that a sufficiently large quantum computer could factor large numbers dramatically faster than any ordinary machine, making today's widely used encryption methods vulnerable. No existing quantum computer is anywhere near large or reliable enough to do this; current machines have at most a few thousand qubits, and they make frequent errors. Estimates of when a dangerous machine might exist range from about a decade to several decades.\n\nSecurity experts nevertheless argue that preparation must begin now. One reason is the threat known as \"harvest now, decrypt later\": an attacker could record encrypted data today and store it until a quantum computer becomes available to unlock it. Information that must remain secret for many years, such as medical records or state secrets, is therefore already at risk. In 2024, the United States National Institute of Standards and Technology published the first standards for post-quantum encryption, based on mathematical problems believed to be hard even for quantum computers.",
    "vocabularyNotes": [
      {
        "word": "rest on",
        "meaningTr": "-e dayanmak",
        "contextNote": "Eş anlamlısı: depend on, be based on."
      },
      {
        "word": "asymmetry",
        "meaningTr": "asimetri, orantısızlık",
        "contextNote": "a- olumsuzluk + symmetry."
      },
      {
        "word": "factor",
        "meaningTr": "çarpanlarına ayırmak; etken",
        "contextNote": "Burada matematik fiili."
      },
      {
        "word": "vulnerable",
        "meaningTr": "savunmasız, korunmasız",
        "contextNote": "ÖSYM favorisi. Eş anlamlısı: susceptible, exposed."
      },
      {
        "word": "decrypt",
        "meaningTr": "şifresini çözmek",
        "contextNote": "Zıt anlamlısı: encrypt."
      },
      {
        "word": "harvest",
        "meaningTr": "hasat etmek, toplamak",
        "contextNote": "Burada veriyi toplayıp biriktirmek anlamında mecazi."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "An attacker could record encrypted data today and store it until a quantum computer becomes available to unlock it.",
        "subject": "An attacker (bir saldırgan)",
        "mainVerb": "could record ... and store (kaydedebilir ve saklayabilir)",
        "objectsAndComplements": "encrypted data (şifreli veri) + [until-clause: bir kuantum bilgisayar onu açmak için kullanılabilir hale gelene kadar]",
        "grammaticalStructures": [
          "could: olasılık.",
          "Paralel fiiller (record ... and store).",
          "until + present simple: gelecek anlamı taşıyan zaman yan cümlesi.",
          "Amaç bildiren to-infinitive (to unlock it)."
        ],
        "translationTr": "Bir saldırgan şifreli verileri bugün kaydedip, onları çözebilecek bir kuantum bilgisayar kullanılabilir hale gelene kadar saklayabilir."
      }
    ],
    "questions": [
      {
        "id": "rb029_q1",
        "type": "reading",
        "title": "Quantum Computers and the Future of Encryption",
        "question": "According to the passage, current internet encryption depends on the fact that _____ .",
        "options": {
          "A": "prime numbers are very difficult to multiply together quickly",
          "B": "finding the two primes behind a large number is extremely difficult",
          "C": "quantum computers make frequent errors when they handle large numbers",
          "D": "conventional computers can break any key within a few years",
          "E": "qubits can exist in a combination of different states at once"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Temel Prensip",
        "trapWarning": "A şıkkı ilişkiyi tersine çevirir: çarpmak kolaydır. D şıkkı metinle çelişir (binlerce yıl). C ve E kuantum bilgisayarlara aittir, mevcut şifrelemenin dayanağı değildir.",
        "explanation": "Asal sayıları çarpmak kolay, ama sonuçtan hangi asalların çarpıldığını bulmak çok zordur (B şıkkı)."
      },
      {
        "id": "rb029_q2",
        "type": "reading",
        "title": "Quantum Computers and the Future of Encryption",
        "question": "Which of the following is true about existing quantum computers?",
        "options": {
          "A": "They have already broken several of the most widely used encryption systems.",
          "B": "They are still too small and error-prone to threaten encryption.",
          "C": "They were first built by Peter Shor in the year 1994.",
          "D": "They use ordinary bits that are either 0 or 1.",
          "E": "They will certainly become dangerous within the next five years."
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Doğru Bilgi Seçimi",
        "trapWarning": "A ve E metinle çelişir. C şıkkı tuzaktır: Shor bir algoritma göstermiştir, bilgisayar yapmamıştır. D şıkkı kübit tanımının tersidir.",
        "explanation": "Metne göre mevcut makineler bunu yapacak kadar büyük ve güvenilir değildir; hata oranları yüksektir (B şıkkı)."
      },
      {
        "id": "rb029_q3",
        "type": "reading",
        "title": "Quantum Computers and the Future of Encryption",
        "question": "The threat called \"harvest now, decrypt later\" means that _____ .",
        "options": {
          "A": "quantum computers are being used today to steal medical records",
          "B": "data stolen now could be read in the future when quantum computers exist",
          "C": "attackers are waiting for new standards before collecting any data",
          "D": "encrypted data will automatically be deleted after several years",
          "E": "governments must decrypt their own secrets before quantum computers arrive"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kavram Açıklaması",
        "trapWarning": "A şıkkı zamanlamayı bozar: bugün çalınan veri gelecekte okunacaktır. C, D ve E kavramla ilgisizdir.",
        "explanation": "Saldırgan şifreli veriyi bugün kaydedip gelecekte bir kuantum bilgisayarla çözebilir (B şıkkı)."
      },
      {
        "id": "rb029_q4",
        "type": "reading",
        "title": "Quantum Computers and the Future of Encryption",
        "question": "It can be inferred from the passage that the experts' main argument is that _____ .",
        "options": {
          "A": "quantum computers will never be powerful enough to break encryption",
          "B": "action against the quantum threat should not wait until it actually arrives",
          "C": "medical records should no longer be stored in an encrypted form",
          "D": "conventional computers should be replaced by quantum ones as soon as possible",
          "E": "post-quantum encryption is already broken by today's machines"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Ana Argüman (preparation must begin now)",
        "trapWarning": "A şıkkı uzmanların görüşünü boşa çıkarır. C ve D metinde olmayan tavsiyelerdir. E şıkkı metne aykırıdır.",
        "explanation": "Uzmanlar hazırlığın şimdi başlaması gerektiğini savunur; tehdidin gelmesini beklememek gerekir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb030",
    "title": "Graphene's Slow Road to Market",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Nature Nanotechnology & Physics World",
    "wordCount": 239,
    "passageText": "When Andre Geim and Konstantin Novoselov isolated graphene in 2004, using little more than a pencil and a roll of sticky tape, the discovery was greeted with extraordinary excitement. Graphene is a single layer of carbon atoms arranged in a honeycomb pattern. It is about two hundred times stronger than steel by weight, conducts electricity and heat better than copper and is almost completely transparent. Within six years, the two physicists had received the Nobel Prize, and commentators predicted that graphene would soon transform everything from computer chips to aircraft.\n\nTwenty years later, these predictions have been only partly fulfilled. Graphene is now used in a range of products, including sports equipment, batteries and coatings, but usually in small quantities added to other materials to improve their strength or conductivity. The revolutionary applications, such as graphene-based processors replacing silicon, remain largely in the laboratory.\n\nThe gap between promise and reality has several causes. Producing large sheets of high-quality graphene cheaply has proved extremely difficult; methods that work in the laboratory often introduce defects when scaled up. In addition, graphene lacks a property called a band gap, which allows silicon transistors to be switched off completely, so it cannot simply replace silicon in digital electronics. Historians of technology point out, however, that such delays are normal. Aluminium was discovered in the 1820s, but it took more than half a century before an affordable method of production made it a common material.",
    "vocabularyNotes": [
      {
        "word": "isolate",
        "meaningTr": "ayırmak, yalıtmak",
        "contextNote": "Burada saf hâlde elde etmek anlamında."
      },
      {
        "word": "transparent",
        "meaningTr": "şeffaf",
        "contextNote": "Zıt anlamlısı: opaque."
      },
      {
        "word": "fulfil",
        "meaningTr": "yerine getirmek, gerçekleştirmek",
        "contextNote": "fulfil a prediction/promise."
      },
      {
        "word": "coating",
        "meaningTr": "kaplama",
        "contextNote": "coat (kaplamak) fiilinden."
      },
      {
        "word": "defect",
        "meaningTr": "kusur, hata",
        "contextNote": "Eş anlamlısı: flaw, fault."
      },
      {
        "word": "affordable",
        "meaningTr": "uygun fiyatlı, karşılanabilir",
        "contextNote": "afford (gücü yetmek) fiilinden."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Graphene lacks a property called a band gap, which allows silicon transistors to be switched off completely, so it cannot simply replace silicon in digital electronics.",
        "subject": "Graphene (grafen)",
        "mainVerb": "lacks (yoksundur)",
        "objectsAndComplements": "a property called a band gap (bant aralığı denen bir özellikten) + [which-clause] + so-clause (bu yüzden ...)",
        "grammaticalStructures": [
          "lack + nesne (edat almaz).",
          "Reduced passive relative (a property called ...).",
          "allow + nesne + to be V3 (passive infinitive).",
          "so: sonuç bağlacı."
        ],
        "translationTr": "Grafen, silikon transistörlerin tamamen kapatılabilmesini sağlayan bant aralığı adlı bir özellikten yoksundur; bu yüzden dijital elektronikte silikonun yerini basitçe alamaz."
      }
    ],
    "questions": [
      {
        "id": "rb030_q1",
        "type": "reading",
        "title": "Graphene's Slow Road to Market",
        "question": "According to the passage, graphene is used in commercial products today mainly _____ .",
        "options": {
          "A": "as a complete replacement for silicon in computer processors",
          "B": "in small amounts added to improve other materials",
          "C": "in the form of large sheets for the bodies of aircraft",
          "D": "only in laboratories, since no products contain it yet",
          "E": "as a cheaper alternative to aluminium in construction"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Güncel Kullanım Detayı",
        "trapWarning": "A ve C ilk dönemin tahminleridir, gerçekleşmemiştir. D şıkkı metinle çelişir: bazı ürünlerde kullanılmaktadır. E şıkkı alüminyum örneğini yanlış bağlar.",
        "explanation": "Grafen genellikle diğer malzemelere az miktarda eklenerek kullanılmaktadır (B şıkkı)."
      },
      {
        "id": "rb030_q2",
        "type": "reading",
        "title": "Graphene's Slow Road to Market",
        "question": "Which of the following is given as a reason why graphene cannot simply replace silicon?",
        "options": {
          "A": "It conducts electricity and heat much less efficiently than silicon does",
          "B": "It does not have a band gap that allows transistors to switch off",
          "C": "It is too transparent to be used inside electronic devices",
          "D": "It is weaker than steel when measured by its weight",
          "E": "Its discovery was made using very simple equipment"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep Detayı",
        "trapWarning": "A ve D metinle çelişir: grafen bakırdan iyi iletir ve çelikten güçlüdür. C ve E ilgisiz özelliklerdir.",
        "explanation": "Grafen bant aralığından yoksundur; bu yüzden silikon gibi tamamen kapatılamaz (B şıkkı)."
      },
      {
        "id": "rb030_q3",
        "type": "reading",
        "title": "Graphene's Slow Road to Market",
        "question": "The example of aluminium is used to suggest that _____ .",
        "options": {
          "A": "graphene will never become a widely used material",
          "B": "a long delay between discovery and wide use is not unusual",
          "C": "aluminium is a stronger material than graphene",
          "D": "graphene was discovered earlier than most people think",
          "E": "historians are more optimistic than scientists about every material"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Benzetme / Örnek İşlevi (such delays are normal)",
        "trapWarning": "A şıkkı örneğin amacının tersidir. C, D ve E metinde olmayan karşılaştırmalardır.",
        "explanation": "Alüminyum keşfinden yarım asır sonra yaygınlaşmıştır; bu da gecikmenin olağan olduğunu gösterir (B şıkkı)."
      },
      {
        "id": "rb030_q4",
        "type": "reading",
        "title": "Graphene's Slow Road to Market",
        "question": "The passage is mainly concerned with _____ .",
        "options": {
          "A": "the personal lives and scientific careers of two physicists who won the Nobel Prize",
          "B": "why the practical use of graphene has developed more slowly than expected",
          "C": "the methods used to produce high-quality aluminium in the 1800s",
          "D": "a comparison of the strength of different building materials",
          "E": "the reasons why silicon is likely to disappear from electronics in the near future"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Ana Konu",
        "trapWarning": "A ve C metnin küçük bir kısmıdır. E şıkkı metinle çelişir. D şıkkı ana konu değildir.",
        "explanation": "Metin grafenle ilgili büyük beklentilerin neden kısmen gerçekleştiğini ve gecikmenin nedenlerini anlatır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb031",
    "title": "Intermittent Fasting Under the Microscope",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from The New England Journal of Medicine & JAMA",
    "wordCount": 262,
    "passageText": "Intermittent fasting, an approach to eating that alternates periods of normal eating with periods of little or no food, has become one of the most popular diets of the past decade. Its best-known forms include the 16:8 method, in which all food is eaten within an eight-hour window each day, and the 5:2 diet, which involves eating normally for five days a week and sharply reducing calories on the other two. Supporters claim that fasting does more than reduce calories: it is said to improve the body's response to insulin, reduce inflammation and even slow ageing.\n\nMuch of the enthusiasm originally came from animal studies. Mice and rats placed on fasting schedules often live longer and develop fewer age-related diseases than animals allowed to eat freely. Human evidence, however, is more limited. Several well-designed trials have compared intermittent fasting with ordinary calorie restriction, in which people simply eat less every day, and found that the two approaches lead to similar weight loss and similar improvements in blood pressure and blood sugar.\n\nThese results suggest that the main benefit of intermittent fasting may come from the fact that people eat less overall, rather than from any special effect of the timing of meals. This does not make the method worthless. Some people find it easier to follow a rule about when to eat than to count calories, and for them fasting may be the more practical choice. Doctors caution, however, that it is not suitable for everyone, including pregnant women, people with diabetes who take certain medications and those with a history of eating disorders.",
    "vocabularyNotes": [
      {
        "word": "intermittent",
        "meaningTr": "aralıklı, kesintili",
        "contextNote": "Eş anlamlısı: periodic, sporadic."
      },
      {
        "word": "alternate",
        "meaningTr": "dönüşümlü yapmak; sırayla gelmek",
        "contextNote": "alternate A with B."
      },
      {
        "word": "restriction",
        "meaningTr": "kısıtlama",
        "contextNote": "calorie restriction: kalori kısıtlaması."
      },
      {
        "word": "enthusiasm",
        "meaningTr": "coşku, heves",
        "contextNote": "Sıfat: enthusiastic."
      },
      {
        "word": "worthless",
        "meaningTr": "değersiz",
        "contextNote": "-less eki: -sız."
      },
      {
        "word": "caution",
        "meaningTr": "uyarmak; dikkat",
        "contextNote": "caution against: -e karşı uyarmak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "These results suggest that the main benefit of intermittent fasting may come from the fact that people eat less overall, rather than from any special effect of the timing of meals.",
        "subject": "These results (bu sonuçlar)",
        "mainVerb": "suggest (göstermektedir)",
        "objectsAndComplements": "[that-clause: aralıklı orucun asıl faydasının ... öğün zamanlamasının özel bir etkisinden değil, insanların genel olarak daha az yemesinden kaynaklanabileceği]",
        "grammaticalStructures": [
          "the fact that: -dığı gerçeği (isim + açıklayıcı cümle).",
          "may come from: -den kaynaklanabilir.",
          "rather than: -den ziyade (iki from yapısını karşılaştırır)."
        ],
        "translationTr": "Bu sonuçlar, aralıklı orucun asıl faydasının öğün zamanlamasının özel bir etkisinden ziyade insanların genel olarak daha az yemesinden kaynaklanabileceğini göstermektedir."
      }
    ],
    "questions": [
      {
        "id": "rb031_q1",
        "type": "reading",
        "title": "Intermittent Fasting Under the Microscope",
        "question": "According to the passage, the 5:2 diet involves _____ .",
        "options": {
          "A": "eating all meals within an eight-hour period on five days a week",
          "B": "eating normally on most days and eating very little on two days",
          "C": "eating five small meals a day instead of two large ones",
          "D": "reducing calories slightly on every day of the week",
          "E": "fasting completely for two weeks out of every five"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Tanım Detayı",
        "trapWarning": "A şıkkı iki yöntemi karıştırır (16:8). D şıkkı sürekli kalori kısıtlamasını tarif eder. C ve E sayılarla oynayan tuzaklardır.",
        "explanation": "5:2 diyeti haftada beş gün normal yemeyi ve diğer iki gün kaloriyi ciddi şekilde azaltmayı içerir (B şıkkı)."
      },
      {
        "id": "rb031_q2",
        "type": "reading",
        "title": "Intermittent Fasting Under the Microscope",
        "question": "Trials comparing intermittent fasting with ordinary calorie restriction found that _____ .",
        "options": {
          "A": "fasting led to much greater weight loss than simply eating a little less every day",
          "B": "both approaches produced similar results for weight and health measures",
          "C": "only calorie restriction improved blood pressure and blood sugar",
          "D": "people who fasted lived longer than those who restricted calories",
          "E": "fasting slowed ageing in humans just as it did in mice and rats"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Araştırma Sonucu",
        "trapWarning": "A ve C sonuçlardan birini üstün gösterir. D ve E hayvan çalışmalarının bulgularını insanlara yanlış aktarır.",
        "explanation": "İki yaklaşım da benzer kilo kaybı ve benzer kan basıncı/şekeri iyileşmeleri sağlamıştır (B şıkkı)."
      },
      {
        "id": "rb031_q3",
        "type": "reading",
        "title": "Intermittent Fasting Under the Microscope",
        "question": "The author suggests that intermittent fasting may still be useful because _____ .",
        "options": {
          "A": "it has special effects on ageing that calorie counting does not have",
          "B": "some people find a timing rule easier to follow than counting calories",
          "C": "it is the only diet that is considered safe for people with diabetes who take medication",
          "D": "doctors recommend it for pregnant women and their babies",
          "E": "it works better in humans than in laboratory animals"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yazarın Değerlendirmesi (This does not make the method worthless)",
        "trapWarning": "A şıkkı metnin vardığı sonuçla çelişir. C ve D son cümlede uygun olmadığı söylenen gruplardır. E şıkkı metinde yoktur.",
        "explanation": "Bazı insanlar ne zaman yiyeceğine dair bir kuralı uygulamayı kalori saymaktan daha kolay bulur (B şıkkı)."
      },
      {
        "id": "rb031_q4",
        "type": "reading",
        "title": "Intermittent Fasting Under the Microscope",
        "question": "It can be inferred that the original enthusiasm for intermittent fasting _____ .",
        "options": {
          "A": "was based mainly on large and well-designed human trials",
          "B": "was based largely on results from studies of animals",
          "C": "was caused by doctors who recommended it to all patients",
          "D": "has been completely confirmed by recent human research",
          "E": "came from people with a history of eating disorders"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (Much of the enthusiasm came from animal studies)",
        "trapWarning": "A şıkkı tuzaktır: insan çalışmaları daha sınırlıdır ve heyecanı doğrulamamıştır. D şıkkı bu yüzden yanlıştır. C ve E metinde yoktur.",
        "explanation": "\"Much of the enthusiasm originally came from animal studies\" cümlesi doğrudan B şıkkıdır."
      }
    ]
  },
  {
    "id": "rb032",
    "title": "Herd Immunity Explained",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from WHO fact sheets & The Lancet Infectious Diseases",
    "wordCount": 233,
    "passageText": "Vaccines protect not only the people who receive them but also those who cannot. When a large enough share of a population is immune to an infectious disease, the disease has difficulty spreading, because an infected person is unlikely to meet someone who can catch it. This indirect protection, known as herd immunity, shields newborn babies who are too young to be vaccinated, people undergoing cancer treatment and others whose immune systems are weakened.\n\nThe proportion of people who need to be immune depends on how contagious a disease is. Epidemiologists measure this with a number called R0, the average number of people one infected person will infect in a population with no immunity. Measles, one of the most contagious diseases known, has an R0 of between twelve and eighteen, which means that about ninety-five percent of the population must be immune to prevent outbreaks. For diseases that spread less easily, the threshold is considerably lower.\n\nBecause the threshold for measles is so high, even small declines in vaccination rates can have serious consequences. In several European countries and in parts of the United States, outbreaks have returned in recent years in communities where vaccine hesitancy has spread, often fuelled by misinformation online. Public health experts emphasize that herd immunity is a collective achievement: it cannot be reached by individuals acting alone, and it can be lost more quickly than it was built.",
    "vocabularyNotes": [
      {
        "word": "immune",
        "meaningTr": "bağışık",
        "contextNote": "immune to: -e karşı bağışık. İsim: immunity."
      },
      {
        "word": "contagious",
        "meaningTr": "bulaşıcı",
        "contextNote": "Eş anlamlısı: infectious, communicable."
      },
      {
        "word": "epidemiologist",
        "meaningTr": "epidemiyolog (salgın bilimci)",
        "contextNote": "epidemic (salgın) kelimesinden."
      },
      {
        "word": "outbreak",
        "meaningTr": "salgın, patlak verme",
        "contextNote": "break out fiilinden türeyen isim."
      },
      {
        "word": "threshold",
        "meaningTr": "eşik",
        "contextNote": "ÖSYM'de çok sık geçer."
      },
      {
        "word": "hesitancy",
        "meaningTr": "tereddüt, isteksizlik",
        "contextNote": "vaccine hesitancy: aşı karşıtlığı/tereddüdü."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Measles, one of the most contagious diseases known, has an R0 of between twelve and eighteen, which means that about ninety-five percent of the population must be immune to prevent outbreaks.",
        "subject": "Measles (kızamık)",
        "mainVerb": "has (sahiptir)",
        "objectsAndComplements": "an R0 of between twelve and eighteen (12 ile 18 arasında bir R0 değeri) + [which-clause: bu da nüfusun yaklaşık %95'inin bağışık olması gerektiği anlamına gelir]",
        "grammaticalStructures": [
          "Appositive (one of the most contagious diseases known).",
          "Sentential which: önceki bilgiyi bir bütün olarak açıklar.",
          "must be: zorunluluk.",
          "Amaç bildiren to-infinitive (to prevent outbreaks)."
        ],
        "translationTr": "Bilinen en bulaşıcı hastalıklardan biri olan kızamığın R0 değeri 12 ile 18 arasındadır; bu da salgınları önlemek için nüfusun yaklaşık yüzde doksan beşinin bağışık olması gerektiği anlamına gelir."
      }
    ],
    "questions": [
      {
        "id": "rb032_q1",
        "type": "reading",
        "title": "Herd Immunity Explained",
        "question": "According to the passage, herd immunity benefits people who cannot be vaccinated because _____ .",
        "options": {
          "A": "they receive a weaker version of the vaccine through contact with others",
          "B": "the disease spreads less easily when most people around them are immune",
          "C": "their own immune systems become stronger when others are vaccinated",
          "D": "doctors give them priority access to new and more effective treatments",
          "E": "they are kept away from the rest of the population during outbreaks"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Mekanizma",
        "trapWarning": "A ve C dolaylı korumayı biyolojik bir aktarım gibi sunar. D ve E metinde yoktur.",
        "explanation": "Nüfusun büyük kısmı bağışık olduğunda hastalık yayılmakta zorlanır ve enfekte kişi hastalığı kapabilecek birine rastlamaz (B şıkkı)."
      },
      {
        "id": "rb032_q2",
        "type": "reading",
        "title": "Herd Immunity Explained",
        "question": "The number R0 refers to _____ .",
        "options": {
          "A": "the percentage of a population that has already been vaccinated against a particular disease",
          "B": "the average number of people one case will infect in a non-immune population",
          "C": "the number of years that immunity lasts after a person has been vaccinated",
          "D": "the rate at which vaccination levels decline in a particular community",
          "E": "the number of outbreaks of a disease recorded in a single year"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kavram Tanımı",
        "trapWarning": "A şıkkı eşiği R0 ile karıştırır. C, D ve E metinde geçmeyen tanımlardır.",
        "explanation": "R0, bağışıklık olmayan bir nüfusta bir enfekte kişinin ortalama kaç kişiyi enfekte edeceğidir (B şıkkı)."
      },
      {
        "id": "rb032_q3",
        "type": "reading",
        "title": "Herd Immunity Explained",
        "question": "Why can small declines in vaccination have serious consequences for measles?",
        "options": {
          "A": "Because the measles vaccine is less effective than most of the other vaccines in use",
          "B": "Because the share of the population that must be immune is very high",
          "C": "Because measles mainly affects people undergoing cancer treatment",
          "D": "Because misinformation about measles is spread only in Europe",
          "E": "Because measles has a lower R0 than most other infectious diseases"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep (Because the threshold ... is so high)",
        "trapWarning": "E şıkkı tam tersidir. D şıkkı \"only\" ile aşırı genelleme yapar. A ve C metinde yoktur.",
        "explanation": "Kızamık için eşik yaklaşık yüzde doksan beş gibi çok yüksektir; küçük düşüşler bile eşiğin altına inmeye yeter (B şıkkı)."
      },
      {
        "id": "rb032_q4",
        "type": "reading",
        "title": "Herd Immunity Explained",
        "question": "The statement that herd immunity \"is a collective achievement\" means that _____ .",
        "options": {
          "A": "each person can protect the whole community simply by being careful",
          "B": "it depends on a large number of people being immunized together",
          "C": "only governments, not individuals, are responsible for vaccination",
          "D": "it is achieved by collecting data about infections from many countries",
          "E": "once it has been reached, it can never be lost again"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "İfade Yorumu",
        "trapWarning": "A şıkkı \"cannot be reached by individuals acting alone\" ile çelişir. E şıkkı \"can be lost more quickly than it was built\" ile çelişir. C ve D yanlış yorumlardır.",
        "explanation": "Toplu başarı, sürü bağışıklığının çok sayıda kişinin birlikte bağışık olmasına dayandığı anlamına gelir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb033",
    "title": "Air Pollution and the Ageing Brain",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from The Lancet Commission on Dementia",
    "wordCount": 260,
    "passageText": "The harmful effects of air pollution on the lungs and heart have been recognized for decades. More recently, researchers have begun to examine its effects on the brain. Fine particulate matter, known as PM2.5, consists of particles less than 2.5 micrometres in diameter, about thirty times thinner than a human hair. These particles are produced mainly by vehicle exhausts, power plants and the burning of wood and coal, and they are small enough to pass from the lungs into the bloodstream. Some of the smallest may even reach the brain directly through the nose.\n\nA growing number of large population studies have linked long-term exposure to PM2.5 with a higher risk of dementia. In 2020, an influential international commission added air pollution to its list of modifiable risk factors for dementia, alongside factors such as physical inactivity, smoking and hearing loss. The commission estimated that around two percent of dementia cases worldwide could be attributed to air pollution.\n\nEstablishing cause and effect is difficult, however. People who live in polluted areas often differ from those in cleaner areas in income, diet and access to health care, all of which also affect the risk of dementia. Researchers try to account for these differences statistically, but they cannot rule them out completely. Laboratory studies in animals provide some support for a causal link, showing that exposure to fine particles can trigger inflammation in the brain. Because air pollution can be reduced through policy, many scientists argue that cleaner air may offer one of the few ways of lowering dementia risk across an entire population.",
    "vocabularyNotes": [
      {
        "word": "particulate matter",
        "meaningTr": "partikül madde",
        "contextNote": "PM2.5: ince partikül madde."
      },
      {
        "word": "exhaust",
        "meaningTr": "egzoz; tüketmek",
        "contextNote": "Burada araç egzozu anlamında isim."
      },
      {
        "word": "exposure",
        "meaningTr": "maruz kalma",
        "contextNote": "be exposed to fiilinden."
      },
      {
        "word": "modifiable",
        "meaningTr": "değiştirilebilir",
        "contextNote": "modify (değiştirmek) + -able."
      },
      {
        "word": "attribute to",
        "meaningTr": "-e atfetmek, bağlamak",
        "contextNote": "Passive: be attributed to."
      },
      {
        "word": "rule out",
        "meaningTr": "ihtimal dışı bırakmak",
        "contextNote": "ÖSYM'nin sık sorduğu phrasal verb."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "People who live in polluted areas often differ from those in cleaner areas in income, diet and access to health care, all of which also affect the risk of dementia.",
        "subject": "People who live in polluted areas (kirli bölgelerde yaşayan insanlar)",
        "mainVerb": "differ from (farklılık gösterir)",
        "objectsAndComplements": "those in cleaner areas (daha temiz bölgelerdekilerden) + in income, diet and access to health care + [all of which-clause]",
        "grammaticalStructures": [
          "Defining relative clause öznede (People who live ...).",
          "differ from A in B: A'dan B bakımından farklı olmak.",
          "those: people yerine geçen zamir.",
          "all of which: hepsi (non-defining relative)."
        ],
        "translationTr": "Kirli bölgelerde yaşayan insanlar, daha temiz bölgelerde yaşayanlardan genellikle gelir, beslenme ve sağlık hizmetlerine erişim bakımından farklılık gösterir ve bunların hepsi de demans riskini etkiler."
      }
    ],
    "questions": [
      {
        "id": "rb033_q1",
        "type": "reading",
        "title": "Air Pollution and the Ageing Brain",
        "question": "According to the passage, PM2.5 particles may affect the brain because they _____ .",
        "options": {
          "A": "are too large to be filtered out by the lungs and therefore build up in the blood",
          "B": "can enter the bloodstream and possibly reach the brain through the nose",
          "C": "are produced mainly by plants and natural sources",
          "D": "damage the heart, which then stops supplying the brain with blood",
          "E": "are about thirty times thicker than a human hair and are breathed in through the nose"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay & Mekanizma",
        "trapWarning": "A ve E boyut bilgisini tersine çevirir. C şıkkı kaynakları yanlış verir. D şıkkı metinde olmayan bir zincir kurar.",
        "explanation": "Parçacıklar akciğerden kana geçebilecek kadar küçüktür ve bazıları burun yoluyla doğrudan beyne ulaşabilir (B şıkkı)."
      },
      {
        "id": "rb033_q2",
        "type": "reading",
        "title": "Air Pollution and the Ageing Brain",
        "question": "The international commission mentioned in the passage _____ .",
        "options": {
          "A": "concluded that air pollution is now the main cause of most dementia cases worldwide",
          "B": "included air pollution among the risk factors for dementia that can be changed",
          "C": "found that hearing loss is caused by long-term exposure to PM2.5",
          "D": "estimated that half of all dementia cases are due to pollution",
          "E": "rejected the idea that physical inactivity affects dementia risk"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay (modifiable risk factors)",
        "trapWarning": "A ve D oranı abartır (yaklaşık yüzde iki). C şıkkı risk faktörlerini birbirine bağlar. E şıkkı metinle çelişir.",
        "explanation": "Komisyon hava kirliliğini değiştirilebilir risk faktörleri listesine eklemiştir (B şıkkı)."
      },
      {
        "id": "rb033_q3",
        "type": "reading",
        "title": "Air Pollution and the Ageing Brain",
        "question": "Why is it difficult to prove that air pollution causes dementia?",
        "options": {
          "A": "Because the level of PM2.5 cannot be measured accurately in large and crowded cities",
          "B": "Because people in polluted areas also differ in other ways that affect risk",
          "C": "Because animal studies have shown that particles do not harm the brain",
          "D": "Because dementia is too rare for large population studies",
          "E": "Because the commission refused to examine the evidence"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Karıştırıcı Değişkenler",
        "trapWarning": "C şıkkı metinle çelişir: hayvan çalışmaları nedensel bağı destekler. A, D ve E metinde yoktur.",
        "explanation": "Kirli bölgelerde yaşayanlar gelir, beslenme ve sağlık hizmetine erişim bakımından da farklıdır ve bunlar da riski etkiler (B şıkkı)."
      },
      {
        "id": "rb033_q4",
        "type": "reading",
        "title": "Air Pollution and the Ageing Brain",
        "question": "According to many scientists, cleaner air is important for dementia prevention because _____ .",
        "options": {
          "A": "it is the single most important risk factor for dementia",
          "B": "it can be achieved through policy and affect whole populations",
          "C": "it removes the need to deal with other risk factors such as hearing loss",
          "D": "it completely cures people who already have dementia",
          "E": "it is cheaper than any medication currently available"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Son Cümle Yorumu",
        "trapWarning": "A şıkkı oranla çelişir (yaklaşık yüzde iki). D şıkkı tedavi iddiası metinde yoktur. C ve E ilgisiz karşılaştırmalardır.",
        "explanation": "Hava kirliliği politikayla azaltılabilir; bu da tüm nüfusta riski düşürmenin az sayıdaki yolundan biridir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb034",
    "title": "The Trouble with Ultra-Processed Food",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from Cell Metabolism & BMJ",
    "wordCount": 252,
    "passageText": "Nutrition scientists have traditionally judged food by its ingredients: how much fat, sugar, salt or fibre it contains. In 2009, the Brazilian researcher Carlos Monteiro proposed a different approach, classifying foods according to how much they have been processed. At one end are unprocessed foods such as fruit, vegetables and eggs; at the other are ultra-processed foods, industrial products made mostly from substances extracted from foods, such as starches and oils, combined with additives like flavourings, colourings and emulsifiers. Examples include soft drinks, packaged snacks, many breakfast cereals and ready meals.\n\nIn many wealthy countries, ultra-processed foods now provide more than half of all the calories people eat. Observational studies have linked high consumption with obesity, type 2 diabetes, heart disease and early death. A carefully controlled experiment conducted in 2019 strengthened these concerns. Twenty adults lived in a clinic for four weeks and were offered either an ultra-processed or an unprocessed diet, each matched for calories, sugar, fat and fibre, and allowed to eat as much as they wished. On the ultra-processed diet, they ate about five hundred more calories a day and gained weight.\n\nWhy this happens is not yet clear. One possibility is that ultra-processed foods are eaten faster, giving the body less time to signal fullness. Another is that they are engineered to be especially pleasurable. Critics of the classification argue that it groups together very different products, from wholemeal bread made in a factory to sugary drinks, and that it is not always obvious which category a food belongs to.",
    "vocabularyNotes": [
      {
        "word": "classify",
        "meaningTr": "sınıflandırmak",
        "contextNote": "İsim: classification."
      },
      {
        "word": "extract",
        "meaningTr": "çıkarmak, özütlemek",
        "contextNote": "İsim olarak öz, ekstrakt."
      },
      {
        "word": "additive",
        "meaningTr": "katkı maddesi",
        "contextNote": "add (eklemek) fiilinden."
      },
      {
        "word": "observational",
        "meaningTr": "gözleme dayalı",
        "contextNote": "Deneysel (experimental) çalışmalardan farklıdır."
      },
      {
        "word": "matched for",
        "meaningTr": "-e göre eşleştirilmiş",
        "contextNote": "Deney tasarımında gruplar eşitlenir."
      },
      {
        "word": "engineer",
        "meaningTr": "tasarlamak, kurgulamak",
        "contextNote": "Burada fiil: özel olarak tasarlamak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Twenty adults lived in a clinic for four weeks and were offered either an ultra-processed or an unprocessed diet, each matched for calories, sugar, fat and fibre, and allowed to eat as much as they wished.",
        "subject": "Twenty adults (yirmi yetişkin)",
        "mainVerb": "lived ... and were offered ... and allowed (yaşadılar, sunuldu, izin verildi)",
        "objectsAndComplements": "either A or B diet + [each matched for ...: her biri ... açısından eşleştirilmiş] + to eat as much as they wished",
        "grammaticalStructures": [
          "either ... or ...: ya ... ya da ...",
          "Passive yapılar (were offered / [were] allowed).",
          "Absolute phrase (each matched for ...).",
          "as much as: istedikleri kadar."
        ],
        "translationTr": "Yirmi yetişkin dört hafta boyunca bir klinikte kaldı ve kendilerine kalori, şeker, yağ ve lif açısından eşleştirilmiş ya aşırı işlenmiş ya da işlenmemiş bir diyet sunuldu ve istedikleri kadar yemelerine izin verildi."
      }
    ],
    "questions": [
      {
        "id": "rb034_q1",
        "type": "reading",
        "title": "The Trouble with Ultra-Processed Food",
        "question": "Monteiro's approach differed from traditional nutrition science in that it _____ .",
        "options": {
          "A": "focused only on the amount of sugar and salt that each of the products contained",
          "B": "classified foods by the degree to which they had been processed",
          "C": "recommended that people eat only fruit, vegetables and eggs",
          "D": "measured the number of calories that each food contained",
          "E": "was based on experiments carried out in hospital clinics"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Karşılaştırma",
        "trapWarning": "A ve D geleneksel yaklaşımı tarif eder. C ve E yöntemin kendisi değildir.",
        "explanation": "Monteiro gıdaları içeriklerine göre değil, ne kadar işlendiklerine göre sınıflandırmayı önermiştir (B şıkkı)."
      },
      {
        "id": "rb034_q2",
        "type": "reading",
        "title": "The Trouble with Ultra-Processed Food",
        "question": "The 2019 experiment is important because it _____ .",
        "options": {
          "A": "proved that ultra-processed foods contain far more sugar and fat than unprocessed ones",
          "B": "showed people ate more on the ultra-processed diet despite matched nutrients",
          "C": "was the first study to observe large populations over many years",
          "D": "found that participants lost weight on the ultra-processed diet",
          "E": "showed that factory-made bread is as harmful as soft drinks"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Deneyin Önemi",
        "trapWarning": "A şıkkı tuzaktır: diyetler şeker ve yağ açısından eşleştirilmişti. C şıkkı gözlemsel çalışmaları tarif eder. D şıkkı sonucu tersine çevirir.",
        "explanation": "Besin değerleri eşitlenmiş olmasına rağmen katılımcılar aşırı işlenmiş diyette günde yaklaşık 500 kalori fazla yemiştir (B şıkkı)."
      },
      {
        "id": "rb034_q3",
        "type": "reading",
        "title": "The Trouble with Ultra-Processed Food",
        "question": "Which of the following is offered as a possible explanation for the results?",
        "options": {
          "A": "Ultra-processed foods contain much less fibre than other foods",
          "B": "People eat ultra-processed foods quickly, before feeling full",
          "C": "Participants were not allowed to eat as much as they wanted",
          "D": "Unprocessed foods are more expensive and harder to find",
          "E": "The clinic served larger portions of unprocessed food"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Olası Açıklama",
        "trapWarning": "A şıkkı deney tasarımıyla çelişir (lif eşitlenmişti). C şıkkı tam tersidir. D ve E metinde yoktur.",
        "explanation": "Bir olasılık, bu yiyeceklerin daha hızlı yenmesi ve vücuda tokluk sinyali için daha az zaman bırakmasıdır (B şıkkı)."
      },
      {
        "id": "rb034_q4",
        "type": "reading",
        "title": "The Trouble with Ultra-Processed Food",
        "question": "Critics of the classification argue that _____ .",
        "options": {
          "A": "ultra-processed foods are healthier than unprocessed ones",
          "B": "it puts very different products into the same category",
          "C": "it should be applied only in Brazil and not elsewhere",
          "D": "the 2019 experiment involved too many participants",
          "E": "nutrients such as sugar and fat are not important"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Eleştiri Tespiti",
        "trapWarning": "A şıkkı eleştiri değil, aşırı bir iddiadır. D şıkkı tuzaktır: katılımcı sayısı az olsa da eleştiri bu değildir. C ve E metinde yoktur.",
        "explanation": "Eleştirmenlere göre sınıflandırma fabrikada yapılmış tam buğday ekmeğiyle şekerli içecekleri aynı gruba koyar (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb035",
    "title": "Phantom Limbs and Mirror Therapy",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from Brain & the work of V. S. Ramachandran",
    "wordCount": 274,
    "passageText": "Most people who lose an arm or a leg continue to feel that the missing limb is still there. They may sense it moving, feel it itch or, in many cases, experience severe pain in it. This phenomenon, known as phantom limb pain, affects a majority of amputees at some point, and for some it lasts for years. Because the pain seems to come from a part of the body that no longer exists, it was once thought to be largely psychological.\n\nResearch in neuroscience has shown that the source of the pain is in fact the brain. Every part of the body is represented in a map on the surface of the brain. When a limb is lost, the area that once received signals from it does not simply fall silent; neighbouring areas may take it over, and the brain may continue to send commands to move the missing limb without receiving any feedback. One theory holds that this mismatch between the brain's commands and the absence of sensory information contributes to the pain.\n\nIn the 1990s, the neuroscientist V. S. Ramachandran developed a remarkably simple treatment. A patient places the remaining arm on one side of a mirror and the stump on the other, so that the reflection makes it appear as though both arms are present. When the patient moves the healthy arm, the brain sees the missing arm moving as well. In some patients, this visual feedback reduces pain considerably. Mirror therapy does not work for everyone, and larger trials have produced mixed results, but it has encouraged researchers to explore other ways of retraining the brain, including virtual reality.",
    "vocabularyNotes": [
      {
        "word": "phantom",
        "meaningTr": "hayalet, hayali",
        "contextNote": "phantom limb: hayalet uzuv."
      },
      {
        "word": "amputee",
        "meaningTr": "uzvu kesilmiş kişi",
        "contextNote": "amputate: uzvu kesmek."
      },
      {
        "word": "represent",
        "meaningTr": "temsil etmek",
        "contextNote": "İsim: representation."
      },
      {
        "word": "mismatch",
        "meaningTr": "uyumsuzluk",
        "contextNote": "mis- yanlış + match."
      },
      {
        "word": "stump",
        "meaningTr": "güdük, kütük",
        "contextNote": "Kesilen uzvun kalan kısmı."
      },
      {
        "word": "retrain",
        "meaningTr": "yeniden eğitmek",
        "contextNote": "re- yeniden + train."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "When a limb is lost, the area that once received signals from it does not simply fall silent; neighbouring areas may take it over.",
        "subject": "the area that once received signals from it (bir zamanlar ondan sinyal alan bölge)",
        "mainVerb": "does not simply fall silent (öylece susmaz)",
        "objectsAndComplements": "[When-clause, passive] + ; neighbouring areas may take it over (komşu bölgeler onu devralabilir)",
        "grammaticalStructures": [
          "Passive zaman yan cümlesi (When a limb is lost).",
          "Defining relative clause öznede (the area that once received ...).",
          "fall + sıfat: bir duruma geçmek (fall silent).",
          "Ayrılabilir phrasal verb (take it over)."
        ],
        "translationTr": "Bir uzuv kaybedildiğinde, bir zamanlar ondan sinyal alan bölge öylece susmaz; komşu bölgeler onu devralabilir."
      }
    ],
    "questions": [
      {
        "id": "rb035_q1",
        "type": "reading",
        "title": "Phantom Limbs and Mirror Therapy",
        "question": "In the past, phantom limb pain was considered to be _____ .",
        "options": {
          "A": "a rare condition affecting only a few amputees",
          "B": "mainly a psychological problem",
          "C": "caused by damage to the remaining limb",
          "D": "the result of infection in the stump",
          "E": "a sign that the limb could grow back"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Eski Görüş",
        "trapWarning": "A şıkkı metinle çelişir: amputelerin çoğunu etkiler. C ve D metinde olmayan nedenlerdir. E şıkkı saçma bir iddiadır.",
        "explanation": "\"it was once thought to be largely psychological\" ifadesi doğrudan B şıkkıdır."
      },
      {
        "id": "rb035_q2",
        "type": "reading",
        "title": "Phantom Limbs and Mirror Therapy",
        "question": "According to one theory mentioned in the passage, phantom pain is partly caused by _____ .",
        "options": {
          "A": "the brain receiving far too much information from the limb that has been lost",
          "B": "a conflict between the brain's commands and the lack of sensory feedback",
          "C": "the complete silence of the brain area that represented the limb",
          "D": "an injury to the brain that occurs during the operation itself",
          "E": "the patient's constant fear of losing yet another part of his or her body"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Teori Tespiti (mismatch)",
        "trapWarning": "A şıkkı tersidir: geri bildirim yoktur. C şıkkı metnin \"does not simply fall silent\" ifadesiyle çelişir. D ve E metinde yoktur.",
        "explanation": "Beynin komutları ile duyusal bilginin yokluğu arasındaki uyumsuzluk ağrıya katkıda bulunur (B şıkkı)."
      },
      {
        "id": "rb035_q3",
        "type": "reading",
        "title": "Phantom Limbs and Mirror Therapy",
        "question": "Mirror therapy works by _____ .",
        "options": {
          "A": "allowing the patient to feel the missing limb with the healthy hand",
          "B": "giving the brain visual feedback that the missing limb is moving",
          "C": "strengthening the muscles of the stump through regular exercise",
          "D": "showing the patient that the missing limb really is gone",
          "E": "replacing the lost limb with an artificial one controlled by the mind"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yöntem Açıklaması",
        "trapWarning": "D şıkkı tuzaktır: ayna tam tersine uzvun varmış gibi görünmesini sağlar. A, C ve E yöntemle ilgisizdir.",
        "explanation": "Sağlam kol hareket edince yansıma beyne kayıp kolun da hareket ettiği görsel geri bildirimini verir (B şıkkı)."
      },
      {
        "id": "rb035_q4",
        "type": "reading",
        "title": "Phantom Limbs and Mirror Therapy",
        "question": "The author's view of mirror therapy can best be described as _____ .",
        "options": {
          "A": "entirely negative, since larger trials found that it never works",
          "B": "cautiously positive, noting its limits as well as its influence",
          "C": "uncritical, presenting it as a cure for all amputees",
          "D": "indifferent, as it is mentioned only as a historical curiosity",
          "E": "hostile, because it delayed the development of virtual reality"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yazarın Tutumu",
        "trapWarning": "A şıkkı \"mixed results\" ifadesini \"never works\" ile abartır. C şıkkı \"does not work for everyone\" ile çelişir. E şıkkı metinle çelişir: VR araştırmalarını teşvik etmiştir.",
        "explanation": "Yazar yöntemin herkeste işe yaramadığını belirtir ama yeni araştırmalara ilham verdiğini de vurgular; temkinli olumlu bir tutumdur (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb036",
    "title": "Çatalhöyük: A Town Without Rulers?",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Ian Hodder's excavation reports & Science",
    "wordCount": 247,
    "passageText": "Çatalhöyük, a Neolithic settlement on the Konya Plain in central Anatolia, was home to as many as several thousand people between about 7100 and 5950 BC, making it one of the largest and best-preserved early farming communities in the world. Its houses were built so closely together that there were no streets; residents moved across the rooftops and entered their homes through openings in the roof, climbing down wooden ladders.\n\nWhat has fascinated archaeologists most is the apparent absence of social hierarchy. Excavations have found no palaces, temples or public buildings, and the houses are remarkably similar in size and layout. Studies of skeletons show that men and women had broadly similar diets and spent similar amounts of time indoors and outdoors, suggesting that they did comparable kinds of work. Burial practices, in which the dead were placed beneath the floors of houses, also show little difference in the treatment of individuals.\n\nThe settlement was not, however, a static paradise of equality. In its later phases, houses became more independent of one another, and there are signs that some households were storing more goods than others. Researchers have suggested that these changes may reflect a gradual shift towards private ownership. Furthermore, the absence of grand buildings does not necessarily prove that no one held authority; power may simply have been expressed in ways that leave few traces in the archaeological record. Nonetheless, Çatalhöyük shows that large communities could function for centuries without obvious central rulers.",
    "vocabularyNotes": [
      {
        "word": "settlement",
        "meaningTr": "yerleşim yeri",
        "contextNote": "settle (yerleşmek) fiilinden."
      },
      {
        "word": "hierarchy",
        "meaningTr": "hiyerarşi, aşama düzeni",
        "contextNote": "Sıfat: hierarchical."
      },
      {
        "word": "layout",
        "meaningTr": "yerleşim planı, düzen",
        "contextNote": "Bina ve sayfa düzeni için kullanılır."
      },
      {
        "word": "comparable",
        "meaningTr": "benzer, karşılaştırılabilir",
        "contextNote": "comparable to/with."
      },
      {
        "word": "static",
        "meaningTr": "durağan",
        "contextNote": "Zıt anlamlısı: dynamic."
      },
      {
        "word": "trace",
        "meaningTr": "iz",
        "contextNote": "leave few traces: az iz bırakmak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Furthermore, the absence of grand buildings does not necessarily prove that no one held authority; power may simply have been expressed in ways that leave few traces in the archaeological record.",
        "subject": "the absence of grand buildings (görkemli binaların yokluğu)",
        "mainVerb": "does not necessarily prove (mutlaka kanıtlamaz)",
        "objectsAndComplements": "[that-clause: kimsenin otorite sahibi olmadığını] + ; power may have been expressed ... (iktidar ... şekillerde ifade edilmiş olabilir)",
        "grammaticalStructures": [
          "not necessarily: mutlaka değil (kısmi olumsuzluk).",
          "may have been + V3: geçmişe dair olasılık (passive).",
          "Defining relative clause (ways that leave few traces).",
          "Furthermore: ek bilgi bağlacı."
        ],
        "translationTr": "Dahası, görkemli binaların yokluğu kimsenin otorite sahibi olmadığını mutlaka kanıtlamaz; iktidar yalnızca arkeolojik kayıtlarda az iz bırakan yollarla ifade edilmiş olabilir."
      }
    ],
    "questions": [
      {
        "id": "rb036_q1",
        "type": "reading",
        "title": "Çatalhöyük: A Town Without Rulers?",
        "question": "According to the passage, residents of Çatalhöyük entered their houses _____ .",
        "options": {
          "A": "through doors that opened onto narrow streets",
          "B": "through openings in the roofs, using ladders",
          "C": "through underground tunnels connecting the houses",
          "D": "through a central public building in the town",
          "E": "through gates in a wall surrounding the town"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Basit Detay",
        "trapWarning": "A şıkkı metinle çelişir: sokak yoktu. D şıkkı kamu binası olmadığı bilgisiyle çelişir. C ve E metinde yoktur.",
        "explanation": "Sakinler çatılardan geçip evlerine çatıdaki açıklıklardan merdivenle iniyordu (B şıkkı)."
      },
      {
        "id": "rb036_q2",
        "type": "reading",
        "title": "Çatalhöyük: A Town Without Rulers?",
        "question": "Which of the following is NOT presented as evidence of social equality at Çatalhöyük?",
        "options": {
          "A": "The lack of palaces, temples and other public buildings",
          "B": "The similar size and layout of almost all the houses",
          "C": "The similar diets of men and women",
          "D": "The similar treatment of the dead",
          "E": "The goods stored by some households"
        },
        "answer": "E",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve D eşitlik kanıtı olarak sunulur. E şıkkı ise son paragrafta eşitsizliğe doğru bir değişimin işareti olarak geçer.",
        "explanation": "Bazı hanelerin daha fazla mal depolaması eşitlik değil, özel mülkiyete doğru kaymanın işaretidir (E şıkkı)."
      },
      {
        "id": "rb036_q3",
        "type": "reading",
        "title": "Çatalhöyük: A Town Without Rulers?",
        "question": "The last paragraph mainly serves to _____ .",
        "options": {
          "A": "show that Çatalhöyük was in fact ruled by a single powerful king",
          "B": "add qualifications to the picture of a perfectly equal society",
          "C": "explain why the settlement was finally abandoned around 5950 BC",
          "D": "prove that men and women did different kinds of work",
          "E": "describe the methods used to excavate the houses"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Paragraf İşlevi (however)",
        "trapWarning": "A şıkkı aşırıya kaçar: metin sadece otoritenin iz bırakmamış olabileceğini söyler. D şıkkı ikinci paragrafla çelişir. C ve E metinde yoktur.",
        "explanation": "Son paragraf \"not, however, a static paradise of equality\" diyerek eşitlik tablosuna çekinceler ekler (B şıkkı)."
      },
      {
        "id": "rb036_q4",
        "type": "reading",
        "title": "Çatalhöyük: A Town Without Rulers?",
        "question": "It can be inferred that the author believes the absence of grand buildings _____ .",
        "options": {
          "A": "is clear proof that nobody at all held any authority in the settlement",
          "B": "is consistent with equality but does not rule out hidden forms of power",
          "C": "shows that the residents were too poor to build public structures",
          "D": "was caused by the lack of streets between the houses",
          "E": "means that the settlement must have been very small"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (does not necessarily prove)",
        "trapWarning": "A şıkkı \"does not necessarily prove\" ifadesiyle çelişir. E şıkkı nüfus bilgisiyle çelişir. C ve D metinde olmayan nedenlerdir.",
        "explanation": "Yazar görkemli binaların yokluğunun eşitlikle uyumlu olduğunu ama izsiz iktidar biçimlerini dışlamadığını söyler (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb037",
    "title": "Europe's Little Ice Age",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Past & Present & Nature Geoscience",
    "wordCount": 255,
    "passageText": "Between roughly the fourteenth and nineteenth centuries, much of the Northern Hemisphere experienced a period of cooler temperatures known as the Little Ice Age. The term is somewhat misleading: global temperatures fell by less than one degree Celsius on average, and the cooling was neither continuous nor uniform. Nevertheless, the effects were dramatic in some regions. Alpine glaciers advanced and destroyed farms and villages, the River Thames in London froze over on several occasions, and Norse settlements in Greenland were eventually abandoned.\n\nScientists have proposed several causes. Periods of low solar activity, during which very few sunspots were observed, coincided with some of the coldest decades. A series of large volcanic eruptions also threw ash and sulphur into the upper atmosphere, reflecting sunlight away from the Earth. A more recent and controversial theory suggests that the deaths of tens of millions of indigenous people in the Americas after European contact led to the abandonment of farmland, which was then reclaimed by forests that absorbed carbon dioxide from the air.\n\nHistorians have increasingly studied how societies responded to the changing climate. Repeated harvest failures contributed to famines, rising food prices and social unrest in many parts of Europe. Yet the period also stimulated innovation. In the Dutch Republic, for example, merchants built a flexible trading network that allowed grain to be imported from the Baltic when local harvests failed, and farmers adopted new crops and techniques. The Little Ice Age thus offers a historical case study of both the vulnerability and the adaptability of human societies.",
    "vocabularyNotes": [
      {
        "word": "uniform",
        "meaningTr": "tekdüze, her yerde aynı",
        "contextNote": "İsim olarak üniforma anlamı da vardır."
      },
      {
        "word": "advance",
        "meaningTr": "ilerlemek",
        "contextNote": "Buzullar için genişlemek anlamında."
      },
      {
        "word": "coincide with",
        "meaningTr": "-e denk gelmek",
        "contextNote": "İsim: coincidence."
      },
      {
        "word": "controversial",
        "meaningTr": "tartışmalı",
        "contextNote": "İsim: controversy."
      },
      {
        "word": "reclaim",
        "meaningTr": "geri kazanmak, geri almak",
        "contextNote": "Burada doğanın araziyi geri alması."
      },
      {
        "word": "unrest",
        "meaningTr": "huzursuzluk, kargaşa",
        "contextNote": "social unrest: toplumsal huzursuzluk."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "A more recent and controversial theory suggests that the deaths of tens of millions of indigenous people in the Americas after European contact led to the abandonment of farmland, which was then reclaimed by forests that absorbed carbon dioxide from the air.",
        "subject": "A more recent and controversial theory (daha yeni ve tartışmalı bir teori)",
        "mainVerb": "suggests (ileri sürer)",
        "objectsAndComplements": "[that-clause: on milyonlarca yerlinin ölümünün tarım arazilerinin terk edilmesine yol açtığı] + [which-clause: ki bu arazi daha sonra ... ormanlar tarafından geri alındı] + [that-clause: havadan karbondioksit emen]",
        "grammaticalStructures": [
          "lead to + isim: -e yol açmak.",
          "Non-defining relative (which was then reclaimed).",
          "Defining relative (forests that absorbed ...).",
          "Passive (was reclaimed by)."
        ],
        "translationTr": "Daha yeni ve tartışmalı bir teori, Avrupalılarla temastan sonra Amerika'da on milyonlarca yerlinin ölümünün tarım arazilerinin terk edilmesine yol açtığını ve bu arazilerin daha sonra havadaki karbondioksiti emen ormanlarca geri alındığını ileri sürer."
      }
    ],
    "questions": [
      {
        "id": "rb037_q1",
        "type": "reading",
        "title": "Europe's Little Ice Age",
        "question": "The author describes the term \"Little Ice Age\" as somewhat misleading because _____ .",
        "options": {
          "A": "temperatures actually rose during most of the period",
          "B": "the cooling was relatively small and varied across time and place",
          "C": "the period lasted for only a few decades in the fourteenth century",
          "D": "it affected the Southern Hemisphere much more than the Northern",
          "E": "glaciers retreated rather than advanced during the period"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Terim Eleştirisi",
        "trapWarning": "A ve E metinle çelişir. C şıkkı süreyi yanlış verir. D şıkkı metinde yoktur.",
        "explanation": "Küresel sıcaklıklar ortalama bir dereceden az düşmüş ve soğuma ne sürekli ne de her yerde aynıydı (B şıkkı)."
      },
      {
        "id": "rb037_q2",
        "type": "reading",
        "title": "Europe's Little Ice Age",
        "question": "Which of the following is NOT mentioned as a possible cause of the Little Ice Age?",
        "options": {
          "A": "Periods of low solar activity",
          "B": "Large volcanic eruptions",
          "C": "The regrowth of forests on abandoned farmland",
          "D": "A sudden change in the Earth's orbit",
          "E": "Ash and sulphur reflecting sunlight"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E ikinci paragrafta geçer.",
        "explanation": "Metin Dünya'nın yörüngesindeki bir değişimden söz etmez (D şıkkı)."
      },
      {
        "id": "rb037_q3",
        "type": "reading",
        "title": "Europe's Little Ice Age",
        "question": "The example of the Dutch Republic is used to illustrate _____ .",
        "options": {
          "A": "how repeated harvest failures led to famine and social unrest in Europe",
          "B": "how some societies adapted successfully to the colder climate",
          "C": "why the River Thames froze over on several occasions",
          "D": "why Norse settlements in Greenland were abandoned",
          "E": "how volcanic eruptions affected trade in the Baltic"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin İşlevi (Yet ... stimulated innovation)",
        "trapWarning": "A şıkkı örnekten önceki olumsuz etkilerdir. C, D ve E ilk paragraflardaki başka bilgilerdir.",
        "explanation": "Hollanda örneği iklim değişikliğine karşı yenilik ve uyum gösterilmesini örnekler (B şıkkı)."
      },
      {
        "id": "rb037_q4",
        "type": "reading",
        "title": "Europe's Little Ice Age",
        "question": "The main idea of the last paragraph is that the Little Ice Age _____ .",
        "options": {
          "A": "had no significant or lasting effect on the societies of Europe",
          "B": "revealed both the weaknesses and the flexibility of societies",
          "C": "was caused mainly by changes in the farming methods used across Europe",
          "D": "led directly to the collapse of the Dutch Republic",
          "E": "was beneficial to all the regions that it affected"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Paragraf Ana Fikri",
        "trapWarning": "A ve E metinle çelişir. D şıkkı örneği tersine çevirir. C şıkkı nedeni yanlış verir.",
        "explanation": "Son cümle dönemin toplumların hem kırılganlığını hem de uyum yeteneğini gösterdiğini söyler (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb038",
    "title": "The Coffeehouses of Istanbul",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from studies of Ottoman social history",
    "wordCount": 261,
    "passageText": "Coffee reached Istanbul from Yemen in the early sixteenth century, and the first coffeehouses are said to have opened in the city around 1555. They spread with remarkable speed. Within a few decades, travellers reported hundreds of them, ranging from simple shops to elegant establishments with fountains and cushioned benches. Unlike the mosque or the household, the coffeehouse offered a space where men from different social backgrounds, including craftsmen, soldiers, scholars and officials, could meet as equals.\n\nCoffeehouses quickly became centres of entertainment and conversation. Customers listened to professional storytellers, watched shadow-puppet plays, played games such as chess and backgammon and, above all, exchanged news. In an age before newspapers, the coffeehouse was one of the main places where information about prices, wars and court affairs circulated. Poets recited their latest works, and debates on religion and politics were common.\n\nThis freedom of discussion made the authorities uneasy. Some religious scholars argued that coffee was an intoxicant forbidden by Islamic law, while officials worried that coffeehouses encouraged idleness and spread criticism of the government. Several sultans ordered them to be closed, most famously Murad IV in the 1630s, who is said to have patrolled the streets in disguise to enforce the ban. Yet such prohibitions never lasted long. Coffee had become too popular, and the taxes collected from its trade were too valuable for the state to give up. Some historians have compared Ottoman coffeehouses to those of London and Paris, which have been described as early forms of a public sphere where opinions were formed outside the control of the state.",
    "vocabularyNotes": [
      {
        "word": "establishment",
        "meaningTr": "kurum, işletme",
        "contextNote": "Burada işyeri anlamında."
      },
      {
        "word": "circulate",
        "meaningTr": "dolaşmak, yayılmak",
        "contextNote": "İsim: circulation."
      },
      {
        "word": "recite",
        "meaningTr": "ezbere okumak, okumak (şiir)",
        "contextNote": "İsim: recitation."
      },
      {
        "word": "intoxicant",
        "meaningTr": "sarhoş edici madde",
        "contextNote": "intoxicate fiilinden."
      },
      {
        "word": "idleness",
        "meaningTr": "aylaklık, tembellik",
        "contextNote": "Sıfat: idle."
      },
      {
        "word": "prohibition",
        "meaningTr": "yasak",
        "contextNote": "prohibit (yasaklamak) fiilinden."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Coffee had become too popular, and the taxes collected from its trade were too valuable for the state to give up.",
        "subject": "Coffee / the taxes collected from its trade (kahve / ticaretinden toplanan vergiler)",
        "mainVerb": "had become / were (olmuştu / idi)",
        "objectsAndComplements": "too popular (fazla popüler) + too valuable for the state to give up (devletin vazgeçemeyeceği kadar değerli)",
        "grammaticalStructures": [
          "Past perfect (had become).",
          "Reduced passive relative (the taxes collected from ...).",
          "too + sıfat + for + nesne + to V1: -nin -emeyeceği kadar.",
          "give up: vazgeçmek."
        ],
        "translationTr": "Kahve fazlasıyla popüler hale gelmişti ve ticaretinden toplanan vergiler devletin vazgeçemeyeceği kadar değerliydi."
      }
    ],
    "questions": [
      {
        "id": "rb038_q1",
        "type": "reading",
        "title": "The Coffeehouses of Istanbul",
        "question": "According to the passage, what made the coffeehouse different from the mosque or the household?",
        "options": {
          "A": "It was open only to religious scholars and senior government officials",
          "B": "Men of different social backgrounds could meet there on equal terms",
          "C": "It was the only place where coffee could be legally prepared",
          "D": "It was a place where women and men were able to meet each other freely",
          "E": "It served as the main place for religious education"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Karşılaştırma (Unlike ...)",
        "trapWarning": "A şıkkı metinle çelişir: zanaatkârlar ve askerler de vardı. D şıkkı metinde yoktur; metin sadece erkeklerden söz eder. C ve E uydurmadır.",
        "explanation": "Kahvehane farklı sosyal geçmişlerden erkeklerin eşit olarak buluşabildiği bir alandı (B şıkkı)."
      },
      {
        "id": "rb038_q2",
        "type": "reading",
        "title": "The Coffeehouses of Istanbul",
        "question": "In an age before newspapers, coffeehouses were important because _____ .",
        "options": {
          "A": "they printed and sold the first news sheets in the city",
          "B": "news about prices, wars and the court spread through them",
          "C": "the government used them to announce new taxes officially",
          "D": "storytellers there were paid by the state to praise the sultan",
          "E": "they were the only places where people were allowed to read"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay",
        "trapWarning": "A şıkkı gazete öncesi dönemle çelişir. C ve D metinde olmayan resmi roller uydurur. E şıkkı aşırı bir iddiadır.",
        "explanation": "Kahvehaneler fiyatlar, savaşlar ve saray işleri hakkındaki haberlerin dolaştığı başlıca yerlerdendi (B şıkkı)."
      },
      {
        "id": "rb038_q3",
        "type": "reading",
        "title": "The Coffeehouses of Istanbul",
        "question": "Why did the bans on coffeehouses never last long?",
        "options": {
          "A": "Because religious scholars soon declared coffee to be healthy",
          "B": "Because coffee was too popular and its taxes too valuable",
          "C": "Because Murad IV changed his mind after visiting one",
          "D": "Because the coffeehouses moved to London and Paris",
          "E": "Because soldiers refused to enforce the sultan's orders"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep (Coffee had become too popular, and ...)",
        "trapWarning": "C ve E metinde olmayan anekdotlardır. A şıkkı dinî tartışmayı tersine çevirir. D şıkkı karşılaştırmayı yanlış yorumlar.",
        "explanation": "Kahve fazlasıyla popülerdi ve vergileri devletin vazgeçemeyeceği kadar değerliydi (B şıkkı)."
      },
      {
        "id": "rb038_q4",
        "type": "reading",
        "title": "The Coffeehouses of Istanbul",
        "question": "The comparison with coffeehouses in London and Paris suggests that Ottoman coffeehouses _____ .",
        "options": {
          "A": "were copied from European models that appeared in the seventeenth century",
          "B": "may have served as places where public opinion formed independently",
          "C": "were under the strict control of the state at all times",
          "D": "were far less popular than their European counterparts",
          "E": "were mainly used for trade rather than for conversation"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Karşılaştırmadan Çıkarım (public sphere)",
        "trapWarning": "A şıkkı tarih sırasını bozar: İstanbul'daki kahvehaneler daha eskidir. C şıkkı metnin anlattığı yasakların başarısızlığıyla çelişir. D ve E metinde yoktur.",
        "explanation": "Karşılaştırma, kahvehanelerin devlet kontrolü dışında kamuoyunun oluştuğu erken bir kamusal alan olabileceğini ima eder (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb039",
    "title": "Cracking the Code of the Rosetta Stone",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from British Museum publications",
    "wordCount": 228,
    "passageText": "For more than a thousand years after the last hieroglyphic inscriptions were carved in Egypt, no one could read them. Many European scholars believed that hieroglyphs were purely symbolic, each sign representing an idea or a mystical concept rather than a sound. This assumption made progress almost impossible.\n\nThe discovery of the Rosetta Stone by French soldiers in 1799 provided the key. The stone carries the same decree, issued in 196 BC, in three scripts: hieroglyphs, a later Egyptian script called demotic, and ancient Greek, which scholars could already read. In principle, the Greek text offered a translation of the other two. In practice, decipherment took more than twenty years, partly because large sections of the hieroglyphic text were missing.\n\nThe English scholar Thomas Young made important early progress, recognizing that some signs enclosed in oval rings, known as cartouches, spelled out royal names such as Ptolemy phonetically. It was the French linguist Jean-François Champollion, however, who achieved the decisive breakthrough in 1822. Champollion, who had studied Coptic, a late form of the Egyptian language still used in church services, realized that hieroglyphic writing combined signs representing sounds with signs representing whole words or ideas. His knowledge of Coptic allowed him to match sounds to the meanings of Egyptian words. Within a few years, he could read entire texts, opening up three thousand years of Egyptian history to modern study.",
    "vocabularyNotes": [
      {
        "word": "carve",
        "meaningTr": "oymak, kazımak",
        "contextNote": "carved inscriptions: oyulmuş yazıtlar."
      },
      {
        "word": "decree",
        "meaningTr": "ferman, kararname",
        "contextNote": "issue a decree: ferman çıkarmak."
      },
      {
        "word": "decipherment",
        "meaningTr": "şifre çözme, okuma",
        "contextNote": "decipher (çözmek) fiilinden."
      },
      {
        "word": "enclose",
        "meaningTr": "çevrelemek, kuşatmak",
        "contextNote": "Ayrıca mektuba eklemek anlamı vardır."
      },
      {
        "word": "phonetically",
        "meaningTr": "sesçil olarak",
        "contextNote": "phonetic: sesle ilgili."
      },
      {
        "word": "breakthrough",
        "meaningTr": "çığır açan buluş",
        "contextNote": "ÖSYM bilim metinlerinde sık kullanır."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Champollion, who had studied Coptic, a late form of the Egyptian language still used in church services, realized that hieroglyphic writing combined signs representing sounds with signs representing whole words or ideas.",
        "subject": "Champollion",
        "mainVerb": "realized (fark etti)",
        "objectsAndComplements": "[that-clause: hiyeroglif yazının sesleri temsil eden işaretlerle bütün kelimeleri ya da fikirleri temsil eden işaretleri birleştirdiğini]",
        "grammaticalStructures": [
          "Non-defining relative clause (who had studied Coptic).",
          "Appositive (a late form of the Egyptian language ...).",
          "Reduced passive relative (still used in church services).",
          "combine A with B.",
          "Reduced active relatives (signs representing ...)."
        ],
        "translationTr": "Kilise ayinlerinde hâlâ kullanılan, Mısır dilinin geç bir biçimi olan Kıpticeyi incelemiş olan Champollion, hiyeroglif yazının sesleri temsil eden işaretlerle bütün kelimeleri ya da fikirleri temsil eden işaretleri bir araya getirdiğini fark etti."
      }
    ],
    "questions": [
      {
        "id": "rb039_q1",
        "type": "reading",
        "title": "Cracking the Code of the Rosetta Stone",
        "question": "According to the passage, early European scholars failed to read hieroglyphs mainly because they _____ .",
        "options": {
          "A": "did not have access to any Egyptian inscriptions",
          "B": "assumed that each sign stood only for an idea, not a sound",
          "C": "were unable to read the ancient Greek text on the stone",
          "D": "believed that hieroglyphs were a form of the Coptic language",
          "E": "thought the Rosetta Stone had been carved by French soldiers"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep (This assumption made progress almost impossible)",
        "trapWarning": "C şıkkı tuzaktır: Yunanca zaten okunabiliyordu. A, D ve E metinle çelişir ya da metinde yoktur.",
        "explanation": "Akademisyenler hiyerogliflerin tamamen sembolik olduğunu, ses değil fikir temsil ettiğini varsaymışlardı (B şıkkı)."
      },
      {
        "id": "rb039_q2",
        "type": "reading",
        "title": "Cracking the Code of the Rosetta Stone",
        "question": "Why was the Rosetta Stone so valuable for decipherment?",
        "options": {
          "A": "It contained a complete dictionary of all the hieroglyphic signs",
          "B": "It presented the same text in a known language and in hieroglyphs",
          "C": "It was the oldest Egyptian inscription ever discovered",
          "D": "It explained how Coptic was used in church services",
          "E": "Its hieroglyphic section had been perfectly preserved over the centuries"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay & Önem",
        "trapWarning": "E şıkkı metinle çelişir: hiyeroglif kısmın büyük bölümü eksikti. A, C ve D metinde yoktur.",
        "explanation": "Taş aynı fermanı üç yazıyla verir; bunlardan biri okunabilen antik Yunancadır (B şıkkı)."
      },
      {
        "id": "rb039_q3",
        "type": "reading",
        "title": "Cracking the Code of the Rosetta Stone",
        "question": "Thomas Young's contribution was to show that _____ .",
        "options": {
          "A": "the whole hieroglyphic text could be translated using Coptic",
          "B": "some signs in cartouches represented the sounds of royal names",
          "C": "demotic and Greek were in fact two forms of the same language",
          "D": "hieroglyphs never represented sounds at all, only ideas",
          "E": "the stone had been carved in 196 BC by order of the king"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kişiye Göre Katkı",
        "trapWarning": "A şıkkı Champollion'un katkısıdır. D Young'ın bulgusunun tersidir. C ve E metinde ona atfedilmez.",
        "explanation": "Young, kartuşlardaki bazı işaretlerin Ptolemy gibi kraliyet adlarını sesçil olarak yazdığını fark etmiştir (B şıkkı)."
      },
      {
        "id": "rb039_q4",
        "type": "reading",
        "title": "Cracking the Code of the Rosetta Stone",
        "question": "What allowed Champollion to make the decisive breakthrough?",
        "options": {
          "A": "His discovery of a second stone with the same text",
          "B": "His knowledge of Coptic, which helped him link sounds to meanings",
          "C": "His decision to ignore the Greek part of the inscription altogether",
          "D": "His belief that every hieroglyph represented a mystical concept",
          "E": "His access to the notes of the soldiers who found the stone"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep Detayı",
        "trapWarning": "D şıkkı eski yanlış varsayımdır. A, C ve E metinde yoktur.",
        "explanation": "Kıptice bilgisi, sesleri Mısırca kelimelerin anlamlarıyla eşleştirmesini sağlamıştır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb040",
    "title": "Rethinking the Maya Collapse",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Science & Proceedings of the National Academy of Sciences",
    "wordCount": 243,
    "passageText": "Between about AD 800 and 950, many of the great cities of the Classic Maya in the southern lowlands of present-day Guatemala, Mexico and Belize were gradually abandoned. Monuments with dated inscriptions stopped being erected, royal dynasties came to an end and populations declined dramatically. This process has often been described as a collapse, and it has been the subject of intense debate.\n\nOne influential explanation focuses on drought. Sediment cores from lakes and mineral layers in caves record a series of severe dry periods during the ninth and tenth centuries. Because Maya cities depended on seasonal rainfall stored in reservoirs, prolonged drought would have reduced harvests and water supplies, especially in densely populated areas. Some researchers argue that deforestation, carried out to clear land for farming and to produce lime plaster for buildings, made the effects of drought worse by reducing rainfall locally and increasing soil erosion.\n\nOther scholars emphasize political factors. Inscriptions from the period describe frequent wars between rival kingdoms, and the authority of kings may have depended on their claim to be able to ensure good harvests through ritual. When droughts persisted, this claim would have lost its credibility. It is important to note, however, that the Maya people did not disappear. Cities in the northern Yucatán, such as Chichén Itzá, flourished after the southern decline, and millions of Maya people live in the region today. What collapsed was a particular political system, not a civilization or its people.",
    "vocabularyNotes": [
      {
        "word": "erect",
        "meaningTr": "dikmek, inşa etmek",
        "contextNote": "Sıfat olarak dik anlamı da vardır."
      },
      {
        "word": "dynasty",
        "meaningTr": "hanedan",
        "contextNote": "royal dynasty: kraliyet hanedanı."
      },
      {
        "word": "reservoir",
        "meaningTr": "su deposu, baraj gölü",
        "contextNote": "Okunuşu: rezervuar."
      },
      {
        "word": "deforestation",
        "meaningTr": "ormansızlaşma",
        "contextNote": "de- + forest."
      },
      {
        "word": "credibility",
        "meaningTr": "inanılırlık, güvenilirlik",
        "contextNote": "Sıfat: credible."
      },
      {
        "word": "flourish",
        "meaningTr": "gelişmek, serpilmek",
        "contextNote": "Eş anlamlısı: thrive, prosper."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "The authority of kings may have depended on their claim to be able to ensure good harvests through ritual.",
        "subject": "The authority of kings (kralların otoritesi)",
        "mainVerb": "may have depended on (dayanmış olabilir)",
        "objectsAndComplements": "their claim to be able to ensure good harvests through ritual (ritüel yoluyla iyi hasat sağlayabilme iddialarına)",
        "grammaticalStructures": [
          "may have + V3: geçmişe dair olasılık.",
          "depend on + isim.",
          "claim to + V1: -dığını iddia etmek (isim + to-infinitive).",
          "be able to: -ebilmek."
        ],
        "translationTr": "Kralların otoritesi, ritüel yoluyla iyi hasat sağlayabildikleri iddiasına dayanmış olabilir."
      }
    ],
    "questions": [
      {
        "id": "rb040_q1",
        "type": "reading",
        "title": "Rethinking the Maya Collapse",
        "question": "According to the passage, evidence for severe droughts comes from _____ .",
        "options": {
          "A": "inscriptions describing wars between rival kingdoms",
          "B": "lake sediments and mineral layers in caves",
          "C": "the reservoirs that were built in Maya cities",
          "D": "the records of Chichén Itzá in the northern Yucatán",
          "E": "the lime plaster used to build monuments"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Kanıt Kaynağı",
        "trapWarning": "A şıkkı siyasi açıklamanın kanıtıdır. C, D ve E metinde geçen ama kuraklık kanıtı olmayan unsurlardır.",
        "explanation": "Göl tortu örnekleri ve mağaralardaki mineral katmanları kurak dönemleri kaydeder (B şıkkı)."
      },
      {
        "id": "rb040_q2",
        "type": "reading",
        "title": "Rethinking the Maya Collapse",
        "question": "How might deforestation have contributed to the decline?",
        "options": {
          "A": "It provided far too much wood, which caused the price of timber to collapse",
          "B": "It may have worsened drought by reducing rainfall and causing erosion",
          "C": "It forced the Maya to move north to Chichén Itzá",
          "D": "It destroyed many of the reservoirs that stored the seasonal rainfall",
          "E": "It led to wars over the right to produce lime plaster"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep-Sonuç",
        "trapWarning": "D, C ve E metinde olmayan bağlantılar kurar. A şıkkı anlamsız bir ekonomik iddiadır.",
        "explanation": "Ormansızlaşma yerel yağışı azaltıp toprak erozyonunu artırarak kuraklığın etkisini kötüleştirmiş olabilir (B şıkkı)."
      },
      {
        "id": "rb040_q3",
        "type": "reading",
        "title": "Rethinking the Maya Collapse",
        "question": "According to the political explanation, prolonged drought weakened kings because _____ .",
        "options": {
          "A": "they were blamed by their subjects for cutting down too many forests",
          "B": "their claim to secure good harvests through ritual lost credibility",
          "C": "they spent all their wealth on building new reservoirs",
          "D": "rival kingdoms had better access to water in the south",
          "E": "they stopped erecting monuments with dated inscriptions in their cities"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş Detayı",
        "trapWarning": "E şıkkı bir sonuçtur, neden değildir. A, C ve D metinde yoktur.",
        "explanation": "Kralların otoritesi ritüelle iyi hasat sağlama iddiasına dayanıyordu; kuraklık sürünce bu iddia inanılırlığını yitirdi (B şıkkı)."
      },
      {
        "id": "rb040_q4",
        "type": "reading",
        "title": "Rethinking the Maya Collapse",
        "question": "The author's main point in the final paragraph is that _____ .",
        "options": {
          "A": "the whole Maya civilization had disappeared completely by about AD 950",
          "B": "the decline affected a political system rather than the Maya people",
          "C": "political factors were more important than drought in the collapse",
          "D": "Chichén Itzá was abandoned at the same time as the southern cities",
          "E": "millions of Maya people moved to the southern lowlands after 950"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Son Paragraf Vurgusu",
        "trapWarning": "A şıkkı son cümlenin tersidir. C şıkkı yazarın yapmadığı bir sıralamadır. D şıkkı metinle çelişir: Chichén Itzá gelişmiştir. E şıkkı yönü tersine çevirir.",
        "explanation": "\"What collapsed was a particular political system, not a civilization or its people\" (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb041",
    "title": "Wolves and the Yellowstone Story",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from BioScience & Ecology Letters",
    "wordCount": 255,
    "passageText": "Grey wolves were eliminated from Yellowstone National Park in the United States by the 1920s, mainly through government programmes designed to protect livestock. In their absence, the population of elk, a large deer, grew rapidly. The elk grazed heavily on young willow and aspen trees, especially along rivers, and many scientists believe this prevented the trees from regenerating for decades.\n\nIn 1995 and 1996, thirty-one wolves were reintroduced to the park. What followed has become one of the most famous stories in ecology. According to the popular version, the wolves not only reduced elk numbers but also changed their behaviour: fearing attack, elk avoided open river valleys, allowing trees to recover. The returning trees stabilized riverbanks, provided food for beavers and habitat for songbirds, and even changed the course of rivers. This chain of effects, in which a predator at the top of the food chain influences plants and landscapes far below it, is known as a trophic cascade.\n\nMore recent research suggests that the story is real but has been simplified. Studies that tracked elk with GPS collars found that they did not avoid risky areas as consistently as once thought. The decline in elk numbers also had other causes, including human hunting outside the park, drought and the return of bears and cougars. In some areas, willows have recovered only partly, because decades without beavers had lowered the water table, leaving the soil too dry. Ecologists now argue that reintroducing a predator can start important changes, but it cannot simply reverse a century of damage.",
    "vocabularyNotes": [
      {
        "word": "eliminate",
        "meaningTr": "yok etmek, ortadan kaldırmak",
        "contextNote": "Eş anlamlısı: eradicate, wipe out."
      },
      {
        "word": "livestock",
        "meaningTr": "çiftlik hayvanları",
        "contextNote": "Sayılamaz isim."
      },
      {
        "word": "regenerate",
        "meaningTr": "yenilenmek, yeniden büyümek",
        "contextNote": "İsim: regeneration."
      },
      {
        "word": "reintroduce",
        "meaningTr": "yeniden doğaya salmak",
        "contextNote": "re- + introduce."
      },
      {
        "word": "stabilize",
        "meaningTr": "sağlamlaştırmak, dengelemek",
        "contextNote": "Sıfat: stable."
      },
      {
        "word": "water table",
        "meaningTr": "yeraltı su seviyesi",
        "contextNote": "Hidroloji terimi."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "In some areas, willows have recovered only partly, because decades without beavers had lowered the water table, leaving the soil too dry.",
        "subject": "willows (söğütler)",
        "mainVerb": "have recovered only partly (sadece kısmen toparlanmıştır)",
        "objectsAndComplements": "[because-clause: kunduzsuz geçen onlarca yıl su seviyesini düşürmüş olduğu için] + [participle: toprağı fazla kuru bırakarak]",
        "grammaticalStructures": [
          "Present perfect (have recovered).",
          "Past perfect (had lowered): daha önceki bir neden.",
          "Sonuç bildiren -ing (leaving the soil too dry).",
          "leave + nesne + sıfat."
        ],
        "translationTr": "Bazı bölgelerde söğütler yalnızca kısmen toparlanmıştır, çünkü kunduzsuz geçen onlarca yıl yeraltı su seviyesini düşürmüş ve toprağı fazla kuru bırakmıştı."
      }
    ],
    "questions": [
      {
        "id": "rb041_q1",
        "type": "reading",
        "title": "Wolves and the Yellowstone Story",
        "question": "According to the passage, after wolves were removed from Yellowstone, _____ .",
        "options": {
          "A": "the number of elk fell sharply because of human hunting",
          "B": "elk grazing prevented young trees from growing back",
          "C": "beavers increased in number along the park's rivers",
          "D": "willow and aspen trees spread rapidly along the riverbanks",
          "E": "bears and cougars took over the role of the main predator"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep-Sonuç Zinciri",
        "trapWarning": "A ve E kurtların dönüşünden sonraki gelişmelerle karıştırır. C ve D tam tersidir.",
        "explanation": "Kurtsuz dönemde geyik sayısı arttı ve yoğun otlama genç ağaçların yenilenmesini engelledi (B şıkkı)."
      },
      {
        "id": "rb041_q2",
        "type": "reading",
        "title": "Wolves and the Yellowstone Story",
        "question": "A \"trophic cascade\" is defined in the passage as _____ .",
        "options": {
          "A": "the process by which rivers gradually change their course after periods of heavy rainfall",
          "B": "a chain of effects from a top predator down to plants and landscapes",
          "C": "the reintroduction of animals that were removed from a national park",
          "D": "the movement of elk away from open valleys out of fear of wolves",
          "E": "a decline in the population of a species caused by a long drought"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kavram Tanımı",
        "trapWarning": "D şıkkı zincirin sadece bir halkasıdır, tanımın kendisi değildir. A, C ve E kavramı daraltır ya da başka bir şeyi anlatır.",
        "explanation": "Tepedeki bir avcının besin zincirinin çok altındaki bitki ve arazileri etkilediği etki zinciridir (B şıkkı)."
      },
      {
        "id": "rb041_q3",
        "type": "reading",
        "title": "Wolves and the Yellowstone Story",
        "question": "Which of the following is presented as evidence that the popular story is too simple?",
        "options": {
          "A": "Elk were found to avoid risky areas less consistently than believed",
          "B": "Wolves were reintroduced to the park in much smaller numbers than reported",
          "C": "Beavers returned to the park long before the wolves were reintroduced",
          "D": "Songbirds disappeared from the park after the wolves returned",
          "E": "Trees grew back everywhere in the park within a few years"
        },
        "answer": "A",
        "difficulty": "İleri",
        "tacticUsed": "Kanıt Tespiti",
        "trapWarning": "E şıkkı metne aykırıdır: bazı yerlerde kısmen toparlanma vardır. B, C ve D metinde yoktur.",
        "explanation": "GPS tasmalı geyikler riskli alanlardan sanıldığı kadar tutarlı biçimde kaçınmamıştır (A şıkkı)."
      },
      {
        "id": "rb041_q4",
        "type": "reading",
        "title": "Wolves and the Yellowstone Story",
        "question": "The ecologists' conclusion in the last sentence suggests that _____ .",
        "options": {
          "A": "reintroducing wolves had no real effect on Yellowstone at all",
          "B": "predators can trigger change but cannot undo all earlier damage",
          "C": "wolves should be removed from the park again to allow the elk population to recover",
          "D": "all the damage caused over a century has now been repaired",
          "E": "beavers are more important than wolves for river ecosystems"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sonuç Yorumu",
        "trapWarning": "A şıkkı \"the story is real\" ile çelişir. D şıkkı tam tersidir. C ve E metnin varmadığı sonuçlardır.",
        "explanation": "Avcıyı geri getirmek önemli değişiklikler başlatabilir ama bir asırlık hasarı basitçe tersine çeviremez (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb042",
    "title": "Experiments with Basic Income",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from Journal of Economic Perspectives",
    "wordCount": 253,
    "passageText": "A universal basic income is a regular cash payment made by the government to every citizen, regardless of employment or wealth, with no conditions attached. The idea has supporters on both the left and the right. Some see it as a way to reduce poverty and give workers more bargaining power; others see it as a simpler and less bureaucratic replacement for complicated welfare programmes. Critics, however, worry that it would be extremely expensive and that people might stop working if they received money unconditionally.\n\nBecause a full national programme has never been tried, researchers have relied on smaller experiments. Between 2017 and 2018, Finland gave 2,000 unemployed people a monthly payment of 560 euros, which they kept even if they found work. Participants reported better well-being and less stress than a comparison group, and they were slightly more likely to be employed, although the effect on employment was small. In Kenya, a charity has been running a long-term study in which entire villages receive payments for up to twelve years. Early results show that recipients invested in businesses and livestock rather than spending the money on alcohol or other so-called temptation goods.\n\nThese experiments have important limits. Most of them gave money only to particular groups, such as the unemployed, rather than to everyone, and they lasted for a limited period. People may behave differently if they know that payments will continue for life. Moreover, no experiment can show how a national programme would be financed, which is perhaps the most difficult political question of all.",
    "vocabularyNotes": [
      {
        "word": "regardless of",
        "meaningTr": "-e bakılmaksızın",
        "contextNote": "YDS bağlaç sorularında çok sık çıkar."
      },
      {
        "word": "bureaucratic",
        "meaningTr": "bürokratik",
        "contextNote": "bureaucracy kelimesinden."
      },
      {
        "word": "unconditionally",
        "meaningTr": "koşulsuz olarak",
        "contextNote": "un- + condition."
      },
      {
        "word": "well-being",
        "meaningTr": "iyi oluş, refah",
        "contextNote": "Psikolojik ve fiziksel sağlık hali."
      },
      {
        "word": "recipient",
        "meaningTr": "alıcı",
        "contextNote": "receive fiilinden."
      },
      {
        "word": "finance",
        "meaningTr": "finanse etmek",
        "contextNote": "Fiil olarak kaynak sağlamak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Early results show that recipients invested in businesses and livestock rather than spending the money on alcohol or other so-called temptation goods.",
        "subject": "Early results (ilk sonuçlar)",
        "mainVerb": "show (göstermektedir)",
        "objectsAndComplements": "[that-clause: alıcıların parayı alkole ya da sözde ayartıcı mallara harcamak yerine işletmelere ve hayvanlara yatırdıklarını]",
        "grammaticalStructures": [
          "invest in: -e yatırım yapmak.",
          "rather than + V-ing: -mek yerine.",
          "spend money on: -e para harcamak.",
          "so-called: sözde, ... diye adlandırılan."
        ],
        "translationTr": "İlk sonuçlar, alıcıların parayı alkole ya da sözde ayartıcı mallara harcamak yerine işletmelere ve hayvanlara yatırdığını göstermektedir."
      }
    ],
    "questions": [
      {
        "id": "rb042_q1",
        "type": "reading",
        "title": "Experiments with Basic Income",
        "question": "According to the passage, a universal basic income is a payment that _____ .",
        "options": {
          "A": "is given only to people who have lost their jobs",
          "B": "is made to all citizens without any conditions",
          "C": "replaces wages for workers in the public sector",
          "D": "must be spent on businesses or livestock",
          "E": "is paid by charities rather than by governments"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Tanım",
        "trapWarning": "A şıkkı Finlandiya deneyinin sınırlı grubunu tanımla karıştırır. E şıkkı Kenya deneyini genelleştirir. C ve D metinde yoktur.",
        "explanation": "Hükümetin her vatandaşa, istihdam veya servetten bağımsız ve koşulsuz yaptığı düzenli nakit ödemedir (B şıkkı)."
      },
      {
        "id": "rb042_q2",
        "type": "reading",
        "title": "Experiments with Basic Income",
        "question": "The Finnish experiment found that participants _____ .",
        "options": {
          "A": "stopped looking for work once they began receiving payments",
          "B": "felt better and were slightly more likely to have jobs",
          "C": "lost their payments as soon as they found employment",
          "D": "spent most of the money on so-called temptation goods",
          "E": "reported more stress than those in the comparison group"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Deney Bulgusu",
        "trapWarning": "A şıkkı eleştirmenlerin korkusudur, bulgu değildir. C şıkkı metinle çelişir: iş bulsalar da ödemeyi koruyorlardı. D şıkkı Kenya'ya dair bulgunun tersidir. E şıkkı tersine çevirir.",
        "explanation": "Katılımcılar daha iyi bir iyi oluş ve daha az stres bildirmiş, istihdam ihtimalleri de biraz artmıştır (B şıkkı)."
      },
      {
        "id": "rb042_q3",
        "type": "reading",
        "title": "Experiments with Basic Income",
        "question": "The results from Kenya challenge the concern that _____ .",
        "options": {
          "A": "payments would be too small to make any difference",
          "B": "recipients would waste the money on things like alcohol",
          "C": "villages would become dependent on a single charity",
          "D": "basic income would soon replace all of the existing welfare programmes",
          "E": "the government would not be able to finance the scheme"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çürütülen Kaygı",
        "trapWarning": "E şıkkı son paragrafta açık kalan bir sorundur. A, C ve D Kenya sonuçlarıyla ilgisizdir.",
        "explanation": "Alıcılar parayı alkol gibi mallara değil işletme ve hayvanlara yatırmıştır; bu da israf kaygısını zayıflatır (B şıkkı)."
      },
      {
        "id": "rb042_q4",
        "type": "reading",
        "title": "Experiments with Basic Income",
        "question": "Which of the following is NOT mentioned as a limitation of the experiments?",
        "options": {
          "A": "They often targeted particular groups instead of everyone",
          "B": "They lasted only for a limited period of time",
          "C": "They cannot show how a national scheme would be paid for",
          "D": "They were carried out only in wealthy European countries",
          "E": "People might act differently if payments continued for life"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E son paragrafta sınırlılık olarak geçer.",
        "explanation": "Deneylerden biri Kenya'dadır; yani sadece zengin Avrupa ülkelerinde yapıldığı söylenemez ve metin bunu sınırlılık olarak saymaz (D şıkkı)."
      }
    ]
  },
  {
    "id": "rb043",
    "title": "Turning Seawater into Drinking Water",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from Nature Water & World Bank reports",
    "wordCount": 266,
    "passageText": "Although water covers most of the Earth's surface, about ninety-seven percent of it is salt water, and much of the remaining fresh water is locked in ice. As populations grow and droughts become more frequent, an increasing number of countries are turning to desalination, the process of removing salt from seawater. More than 20,000 desalination plants now operate worldwide, and countries such as Saudi Arabia, the United Arab Emirates and Israel obtain a large share of their drinking water this way.\n\nThe dominant technology today is reverse osmosis, in which seawater is pushed at high pressure through membranes that allow water molecules to pass but block salt. It has become far more efficient over the past few decades, and the energy needed to produce a cubic metre of fresh water has fallen by more than half since the 1980s. Even so, desalination remains more energy-intensive and more expensive than most traditional sources, such as rivers and groundwater, which is why it is used mainly in wealthy, water-scarce regions.\n\nDesalination also has environmental costs. For every litre of fresh water produced, plants generate roughly one and a half litres of brine, a highly concentrated salt solution that often also contains chemicals used to clean the membranes. When this brine is discharged back into the sea, it can sink to the seabed and harm marine life. Researchers are exploring ways to dilute the brine more effectively or to extract useful minerals from it. Many experts stress, however, that desalination should complement, rather than replace, efforts to use existing water more efficiently, such as repairing leaking pipes and recycling wastewater.",
    "vocabularyNotes": [
      {
        "word": "desalination",
        "meaningTr": "tuzdan arındırma",
        "contextNote": "de- + salt."
      },
      {
        "word": "membrane",
        "meaningTr": "zar, membran",
        "contextNote": "Biyoloji ve teknoloji metinlerinde geçer."
      },
      {
        "word": "energy-intensive",
        "meaningTr": "yoğun enerji gerektiren",
        "contextNote": "-intensive: yoğun ... gerektiren."
      },
      {
        "word": "brine",
        "meaningTr": "tuzlu su, salamura",
        "contextNote": "Arıtma atığı olarak kullanılır."
      },
      {
        "word": "discharge",
        "meaningTr": "boşaltmak, deşarj etmek",
        "contextNote": "Hastaneden taburcu etmek anlamı da vardır."
      },
      {
        "word": "complement",
        "meaningTr": "tamamlamak",
        "contextNote": "compliment (iltifat) ile karıştırılmamalı."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Many experts stress, however, that desalination should complement, rather than replace, efforts to use existing water more efficiently.",
        "subject": "Many experts (birçok uzman)",
        "mainVerb": "stress (vurgular)",
        "objectsAndComplements": "[that-clause: tuzdan arındırmanın mevcut suyu daha verimli kullanma çabalarının yerini almak yerine onları tamamlaması gerektiğini]",
        "grammaticalStructures": [
          "however: cümle içinde araya giren zıtlık zarfı.",
          "should: tavsiye.",
          "complement, rather than replace, X: ortak nesneye sahip iki fiil.",
          "efforts to + V1."
        ],
        "translationTr": "Ancak birçok uzman, tuzdan arındırmanın mevcut suyu daha verimli kullanma çabalarının yerini almak yerine onları tamamlaması gerektiğini vurgulamaktadır."
      }
    ],
    "questions": [
      {
        "id": "rb043_q1",
        "type": "reading",
        "title": "Turning Seawater into Drinking Water",
        "question": "According to the passage, reverse osmosis works by _____ .",
        "options": {
          "A": "boiling the seawater and then collecting the steam that rises from it",
          "B": "forcing seawater through membranes that let water pass but stop salt",
          "C": "adding special chemicals that cause the salt to sink to the bottom of the tank",
          "D": "freezing seawater so that the salt is separated from the ice",
          "E": "mixing seawater with groundwater to reduce its salt content"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Süreç Tanımı",
        "trapWarning": "A ve D başka arıtma yöntemlerini çağrıştıran tuzaklardır. C şıkkı kimyasalların membran temizliğindeki rolünü çarpıtır. E şıkkı metinde yoktur.",
        "explanation": "Deniz suyu yüksek basınçla suyu geçirip tuzu tutan zarlardan geçirilir (B şıkkı)."
      },
      {
        "id": "rb043_q2",
        "type": "reading",
        "title": "Turning Seawater into Drinking Water",
        "question": "Why is desalination used mainly in wealthy regions with little water?",
        "options": {
          "A": "Because poorer regions have far more fresh water available in rivers and lakes",
          "B": "Because it still costs more and uses more energy than most other sources",
          "C": "Because the energy it uses has risen sharply in every decade since the 1980s",
          "D": "Because its membranes can be produced only in rich countries",
          "E": "Because international law limits the number of plants elsewhere"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep (which is why ...)",
        "trapWarning": "C şıkkı metinle çelişir: enerji ihtiyacı yarıdan fazla azalmıştır. A, D ve E metinde yoktur.",
        "explanation": "Desalinasyon geleneksel kaynakların çoğundan daha pahalı ve daha fazla enerji gerektirir (B şıkkı)."
      },
      {
        "id": "rb043_q3",
        "type": "reading",
        "title": "Turning Seawater into Drinking Water",
        "question": "According to the passage, brine is harmful mainly because it _____ .",
        "options": {
          "A": "evaporates quickly and increases the salt content of the air",
          "B": "may sink to the seabed and damage marine organisms",
          "C": "contains fresh water that dilutes the surrounding sea",
          "D": "blocks the membranes and stops the plant from working",
          "E": "is used to produce minerals that pollute the oceans"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çevresel Etki Detayı",
        "trapWarning": "C şıkkı mantığı tersine çevirir: tuzlu su yoğun tuz içerir. E şıkkı araştırılan çözümü sorun gibi sunar. A ve D metinde yoktur.",
        "explanation": "Tuzlu su denize boşaltıldığında dibe çökebilir ve deniz canlılarına zarar verebilir (B şıkkı)."
      },
      {
        "id": "rb043_q4",
        "type": "reading",
        "title": "Turning Seawater into Drinking Water",
        "question": "Many experts believe that desalination _____ .",
        "options": {
          "A": "should become the main source of drinking water in every country",
          "B": "should support, not replace, efforts to use existing water better",
          "C": "is no longer needed at all if the leaking pipes in cities are properly repaired",
          "D": "has no environmental costs once the brine is diluted",
          "E": "should be banned until the brine problem is solved"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Uzman Görüşü",
        "trapWarning": "A ve C iki uç görüştür. D ve E metinde olmayan kesin yargılardır.",
        "explanation": "Uzmanlara göre desalinasyon, mevcut suyu verimli kullanma çabalarının yerini almamalı, onları tamamlamalıdır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb044",
    "title": "The Gig Economy and the Meaning of Work",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from Harvard Business Review & ILO reports",
    "wordCount": 257,
    "passageText": "Over the past fifteen years, digital platforms have created a new labour market often called the gig economy. Through smartphone applications, people can find short-term jobs such as delivering food, driving passengers or completing small online tasks. Companies that run these platforms usually describe their workers not as employees but as independent contractors who use the app to find customers.\n\nThis classification has major consequences. Employees in most countries are entitled to a minimum wage, paid holidays, sick pay and protection against unfair dismissal; independent contractors generally are not. Platform companies argue that their workers value the freedom to choose when and how much to work, and surveys confirm that flexibility is one of the main attractions of gig work, particularly for students, carers and people seeking additional income. Critics respond that this freedom is often limited in practice. Algorithms decide which jobs a worker is offered, set prices and can deactivate accounts with little explanation, giving companies a degree of control that resembles that of an employer.\n\nCourts and governments have reached different conclusions. In 2021, the United Kingdom's Supreme Court ruled that drivers for one major ride-hailing company were workers entitled to the minimum wage and holiday pay. Spain passed a law presuming that food-delivery riders are employees. The European Union has since adopted rules intended to determine more clearly when platform workers should be treated as employees. The debate reflects a wider question: whether labour laws designed for factories and offices in the twentieth century can be adapted to forms of work organized by software.",
    "vocabularyNotes": [
      {
        "word": "contractor",
        "meaningTr": "yüklenici, sözleşmeli çalışan",
        "contextNote": "independent contractor: serbest çalışan."
      },
      {
        "word": "entitled to",
        "meaningTr": "-e hakkı olan",
        "contextNote": "be entitled to + isim."
      },
      {
        "word": "dismissal",
        "meaningTr": "işten çıkarma",
        "contextNote": "dismiss (kovmak) fiilinden."
      },
      {
        "word": "deactivate",
        "meaningTr": "devre dışı bırakmak",
        "contextNote": "de- + activate."
      },
      {
        "word": "resemble",
        "meaningTr": "benzemek",
        "contextNote": "Edat almaz: resemble something."
      },
      {
        "word": "presume",
        "meaningTr": "varsaymak",
        "contextNote": "Hukukta aksi kanıtlanana kadar kabul etmek."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Algorithms decide which jobs a worker is offered, set prices and can deactivate accounts with little explanation, giving companies a degree of control that resembles that of an employer.",
        "subject": "Algorithms (algoritmalar)",
        "mainVerb": "decide ..., set ... and can deactivate (karar verir, belirler, kapatabilir)",
        "objectsAndComplements": "[which-clause: bir çalışana hangi işlerin teklif edileceğine] + prices + accounts + [participle: şirketlere ... bir kontrol düzeyi vererek]",
        "grammaticalStructures": [
          "Üç paralel fiil (decide, set, can deactivate).",
          "Dolaylı soru (which jobs a worker is offered) – passive.",
          "Sonuç bildiren -ing (giving companies ...).",
          "that of: aynı isim tekrarını önleyen zamir (the control of an employer)."
        ],
        "translationTr": "Algoritmalar bir çalışana hangi işlerin teklif edileceğine karar verir, fiyatları belirler ve hesapları çok az açıklamayla kapatabilir; bu da şirketlere bir işverenin kontrolüne benzeyen bir denetim gücü verir."
      }
    ],
    "questions": [
      {
        "id": "rb044_q1",
        "type": "reading",
        "title": "The Gig Economy and the Meaning of Work",
        "question": "Why is the classification of gig workers as independent contractors important?",
        "options": {
          "A": "Because contractors earn considerably more than employees do in most countries",
          "B": "Because contractors usually lack rights such as minimum wage and sick pay",
          "C": "Because it prevents workers from using more than one app",
          "D": "Because it forces the platforms to pay for their workers' smartphones and fuel",
          "E": "Because contractors are not free to choose when and where they work"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sonuç Önemi",
        "trapWarning": "E şıkkı durumu ters çevirir: esneklik bağımsız çalışmanın cazibesidir. A, C ve D metinde yoktur.",
        "explanation": "Çalışanların sahip olduğu asgari ücret, ücretli izin ve hastalık ödemesi gibi haklar genellikle serbest çalışanlara verilmez (B şıkkı)."
      },
      {
        "id": "rb044_q2",
        "type": "reading",
        "title": "The Gig Economy and the Meaning of Work",
        "question": "Platform companies defend their model by arguing that _____ .",
        "options": {
          "A": "algorithms treat all workers more fairly than human managers",
          "B": "workers appreciate being able to decide when and how much to work",
          "C": "gig workers are already protected by twentieth-century labour laws",
          "D": "courts in most countries have supported their classification",
          "E": "students and carers prefer full-time employment"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş Sahibi",
        "trapWarning": "D şıkkı metinle çelişir: mahkemeler farklı sonuçlara varmıştır. E şıkkı tersidir. A ve C metinde şirketlere atfedilmez.",
        "explanation": "Şirketler çalışanların ne zaman ve ne kadar çalışacaklarını seçme özgürlüğüne değer verdiğini savunur (B şıkkı)."
      },
      {
        "id": "rb044_q3",
        "type": "reading",
        "title": "The Gig Economy and the Meaning of Work",
        "question": "Critics argue that gig workers' freedom is limited because _____ .",
        "options": {
          "A": "they are required to work a fixed number of hours each week",
          "B": "algorithms control job offers, prices and account access",
          "C": "they must sign long-term contracts with a single company",
          "D": "platforms do not allow them to work as students or carers",
          "E": "governments forbid them from choosing their own customers"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Eleştiri Gerekçesi",
        "trapWarning": "A ve C esnekliğin tersini varsayar; metinde yoktur. D ve E metne aykırıdır.",
        "explanation": "Algoritmalar iş tekliflerini ve fiyatları belirler ve hesapları kapatabilir (B şıkkı)."
      },
      {
        "id": "rb044_q4",
        "type": "reading",
        "title": "The Gig Economy and the Meaning of Work",
        "question": "The examples of the United Kingdom, Spain and the European Union show that _____ .",
        "options": {
          "A": "almost all countries now treat gig workers as independent contractors under the law",
          "B": "authorities have increasingly given some gig workers employee-like rights",
          "C": "platform companies have stopped operating in Europe",
          "D": "labour laws from the twentieth century need no changes",
          "E": "food-delivery riders now earn considerably more than drivers for ride-hailing apps"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneklerden Genelleme",
        "trapWarning": "A ve D örneklerin tersini söyler. C ve E metinde yoktur.",
        "explanation": "Üç örnek de bazı platform çalışanlarına işçi haklarına benzer haklar tanındığını gösterir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb045",
    "title": "Mining the Deep Sea",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from Nature & International Seabed Authority reports",
    "wordCount": 263,
    "passageText": "Scattered across vast areas of the deep ocean floor, at depths of four to six kilometres, lie billions of potato-sized lumps known as polymetallic nodules. Formed over millions of years, they are rich in metals such as nickel, cobalt, manganese and copper, all of which are needed to manufacture batteries for electric vehicles and to store renewable energy. As demand for these metals grows, several companies have proposed collecting the nodules with robotic vehicles that would move across the seabed and pump them up to ships on the surface.\n\nSupporters argue that deep-sea mining could reduce the environmental and social damage associated with mining on land, which often involves clearing forests and, in some countries, child labour. They also point out that the nodules lie on the surface of the seabed and do not require digging deep into the earth.\n\nMarine scientists, however, have raised serious concerns. The deep sea is one of the least explored environments on the planet, and a large proportion of the species collected there in recent surveys were previously unknown to science. Many of these organisms live on the nodules themselves, which take millions of years to form and therefore cannot be replaced on any human timescale. Mining machines would also stir up clouds of sediment that could spread for many kilometres and smother animals that feed by filtering the water. An experiment that disturbed a small area of the Pacific seabed in 1989 found that, decades later, the site had still not recovered. More than thirty countries have called for a pause until the risks are better understood.",
    "vocabularyNotes": [
      {
        "word": "polymetallic",
        "meaningTr": "çok metalli",
        "contextNote": "poly- (çok) + metallic."
      },
      {
        "word": "nodule",
        "meaningTr": "yumru, nodül",
        "contextNote": "Okyanus tabanındaki metal yumruları."
      },
      {
        "word": "proportion",
        "meaningTr": "oran, pay",
        "contextNote": "a large proportion of: büyük bir kısmı."
      },
      {
        "word": "stir up",
        "meaningTr": "karıştırmak, kaldırmak (toz, tortu)",
        "contextNote": "Mecazi olarak kışkırtmak anlamı da vardır."
      },
      {
        "word": "smother",
        "meaningTr": "boğmak, örtüp nefessiz bırakmak",
        "contextNote": "Eş anlamlısı: suffocate."
      },
      {
        "word": "pause",
        "meaningTr": "duraklama, ara",
        "contextNote": "call for a pause: durdurulma çağrısı yapmak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Many of these organisms live on the nodules themselves, which take millions of years to form and therefore cannot be replaced on any human timescale.",
        "subject": "Many of these organisms (bu organizmaların birçoğu)",
        "mainVerb": "live on (üzerinde yaşar)",
        "objectsAndComplements": "the nodules themselves (nodüllerin kendileri) + [which-clause: oluşması milyonlarca yıl süren ve bu nedenle insan zaman ölçeğinde yerine konamayan]",
        "grammaticalStructures": [
          "Reflexive vurgu (the nodules themselves).",
          "take + süre + to V1: -mesi ... sürmek.",
          "therefore: sonuç.",
          "Passive modal (cannot be replaced)."
        ],
        "translationTr": "Bu organizmaların birçoğu, oluşması milyonlarca yıl süren ve bu nedenle insan ölçeğinde hiçbir zaman diliminde yerine konamayacak olan nodüllerin bizzat üzerinde yaşar."
      }
    ],
    "questions": [
      {
        "id": "rb045_q1",
        "type": "reading",
        "title": "Mining the Deep Sea",
        "question": "According to the passage, polymetallic nodules are attractive to companies because they _____ .",
        "options": {
          "A": "are found in shallow coastal waters that are easy to reach",
          "B": "contain metals needed for batteries and energy storage",
          "C": "can be replaced quickly after they have been collected",
          "D": "are home to many species that are valuable as food",
          "E": "are buried deep under the seabed and protected from damage"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay",
        "trapWarning": "A şıkkı derinlik bilgisiyle, C oluşum süresiyle, E \"lie on the surface\" ifadesiyle çelişir. D şıkkı metindeki türleri yanlış bağlar.",
        "explanation": "Nodüller elektrikli araç bataryaları ve enerji depolama için gereken nikel, kobalt gibi metaller içerir (B şıkkı)."
      },
      {
        "id": "rb045_q2",
        "type": "reading",
        "title": "Mining the Deep Sea",
        "question": "Supporters of deep-sea mining claim that it _____ .",
        "options": {
          "A": "would cause no damage to marine life of any kind",
          "B": "could reduce some of the harm caused by mining on land",
          "C": "would create millions of new jobs in coastal countries",
          "D": "has already been tested successfully in the Pacific Ocean",
          "E": "is necessary because land-based mines have been exhausted"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş Sahibi",
        "trapWarning": "A şıkkı aşırı bir iddiadır. D şıkkı 1989 deneyinin sonucunu tersine çevirir. C ve E metinde yoktur.",
        "explanation": "Destekçiler derin deniz madenciliğinin karadaki madenciliğin çevresel ve sosyal zararlarını azaltabileceğini savunur (B şıkkı)."
      },
      {
        "id": "rb045_q3",
        "type": "reading",
        "title": "Mining the Deep Sea",
        "question": "The 1989 experiment is mentioned to show that _____ .",
        "options": {
          "A": "robotic mining vehicles work well at great depths",
          "B": "damage to the deep seabed may last for decades",
          "C": "nodules form much faster than scientists had believed",
          "D": "sediment clouds settle within a few days",
          "E": "most deep-sea species are already known to science"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin İşlevi",
        "trapWarning": "C, D ve E metinle çelişir. A şıkkı deneyin amacı değildir.",
        "explanation": "Deney alanı onlarca yıl sonra bile toparlanmamıştır; yani hasar çok uzun sürebilir (B şıkkı)."
      },
      {
        "id": "rb045_q4",
        "type": "reading",
        "title": "Mining the Deep Sea",
        "question": "It can be inferred that the countries calling for a pause believe that _____ .",
        "options": {
          "A": "deep-sea mining should never be allowed under any circumstances",
          "B": "too little is known about the risks to begin mining now",
          "C": "land-based mining is more harmful than deep-sea mining",
          "D": "electric vehicles do not need nickel and cobalt",
          "E": "companies have already collected enough nodules"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (until the risks are better understood)",
        "trapWarning": "A şıkkı tuzaktır: duraklama kalıcı yasak değildir. C şıkkı destekçilerin görüşüdür. D ve E metinle çelişir.",
        "explanation": "Risklerin daha iyi anlaşılmasına kadar ara verilmesini istemeleri, şu an riskler hakkında yeterli bilgi olmadığını düşündüklerini gösterir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb046",
    "title": "The Power and Limits of Nudges",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Behavioural Public Policy",
    "wordCount": 249,
    "passageText": "In 2008, the economist Richard Thaler and the legal scholar Cass Sunstein popularized the idea of the \"nudge\": a small change in the way choices are presented that steers people towards better decisions without forbidding any option or significantly changing financial incentives. Placing fruit at eye level in a school canteen, for example, may lead children to choose it more often than desserts placed further away, even though all the options remain available.\n\nThe most celebrated example concerns pension savings. When employees must actively sign up for a workplace pension, many never do so, not because they have decided against saving but because they postpone the decision. When companies instead enrol workers automatically and allow them to opt out, participation rates often rise from around half to more than ninety percent. Such findings encouraged governments around the world to establish special \"nudge units\" to apply behavioural insights to public policy.\n\nIn recent years, however, researchers have questioned how powerful nudges really are. A large analysis published in 2022 found that many earlier studies had overestimated their effects, partly because experiments with impressive results were more likely to be published. When studies conducted by government nudge units were examined, the average effect was positive but considerably smaller than in academic journals. Critics also warn that focusing on nudges may distract policymakers from larger structural changes, such as taxes or regulations, that could achieve more. Supporters respond that nudges are cheap and that even small effects, applied to millions of people, can matter.",
    "vocabularyNotes": [
      {
        "word": "nudge",
        "meaningTr": "dürtme, hafifçe yönlendirme",
        "contextNote": "Davranışsal ekonomide yönlendirme tekniği."
      },
      {
        "word": "steer",
        "meaningTr": "yönlendirmek",
        "contextNote": "steer towards: -e doğru yönlendirmek."
      },
      {
        "word": "postpone",
        "meaningTr": "ertelemek",
        "contextNote": "Eş anlamlısı: put off, delay."
      },
      {
        "word": "enrol",
        "meaningTr": "kaydetmek, kaydolmak",
        "contextNote": "AmE: enroll."
      },
      {
        "word": "opt out",
        "meaningTr": "katılmamayı seçmek, çıkmak",
        "contextNote": "Zıt anlamlısı: opt in."
      },
      {
        "word": "overestimate",
        "meaningTr": "olduğundan fazla tahmin etmek",
        "contextNote": "Zıt anlamlısı: underestimate."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "When employees must actively sign up for a workplace pension, many never do so, not because they have decided against saving but because they postpone the decision.",
        "subject": "many (birçoğu)",
        "mainVerb": "never do so (bunu asla yapmaz)",
        "objectsAndComplements": "[When-clause] + not because ... but because ... (... yüzünden değil, ... yüzünden)",
        "grammaticalStructures": [
          "must: zorunluluk.",
          "do so: önceki eylemi işaret eder (sign up).",
          "not because A but because B: sebep düzeltmesi.",
          "decide against + V-ing: -memeye karar vermek."
        ],
        "translationTr": "Çalışanların işyeri emeklilik planına aktif olarak kaydolmaları gerektiğinde, birçoğu tasarruf yapmamaya karar verdikleri için değil, kararı ertelediği için bunu hiç yapmaz."
      }
    ],
    "questions": [
      {
        "id": "rb046_q1",
        "type": "reading",
        "title": "The Power and Limits of Nudges",
        "question": "According to the passage, a nudge is a change that _____ .",
        "options": {
          "A": "bans unhealthy options completely so that people are forced to choose better ones",
          "B": "influences choices without removing options or greatly changing costs",
          "C": "offers people large financial rewards for making good decisions",
          "D": "requires people to explain the reasons for each of their choices",
          "E": "is designed by companies to increase the sales of their products"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Tanım",
        "trapWarning": "A ve C tanımda açıkça dışlanan yöntemlerdir (yasaklama, büyük teşvikler). D ve E metinde yoktur.",
        "explanation": "Dürtme, hiçbir seçeneği yasaklamadan ya da mali teşvikleri ciddi biçimde değiştirmeden insanları daha iyi kararlara yönlendiren küçük bir değişikliktir (B şıkkı)."
      },
      {
        "id": "rb046_q2",
        "type": "reading",
        "title": "The Power and Limits of Nudges",
        "question": "According to the passage, many employees fail to join a pension scheme when they must sign up themselves because they _____ .",
        "options": {
          "A": "have carefully decided that saving is not worth it",
          "B": "keep putting off making the decision",
          "C": "are not allowed to opt out once they have joined",
          "D": "do not trust the companies that run the schemes",
          "E": "already have enough savings for their retirement"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep (not because ... but because ...)",
        "trapWarning": "A, cümlenin \"not because\" kısmında reddedilen nedendir. C, D ve E metinde yoktur.",
        "explanation": "Çalışanlar tasarruf yapmamaya karar verdikleri için değil, kararı ertedikleri için katılmaz (B şıkkı)."
      },
      {
        "id": "rb046_q3",
        "type": "reading",
        "title": "The Power and Limits of Nudges",
        "question": "The 2022 analysis found that _____ .",
        "options": {
          "A": "nudges have no measurable effect on people's behaviour",
          "B": "earlier studies had often exaggerated the effects of nudges",
          "C": "government nudge units achieved larger effects than academics",
          "D": "nudges are more expensive than taxes and regulations",
          "E": "automatic pension enrolment reduces participation rates"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Bulgu",
        "trapWarning": "A şıkkı aşırıdır: ortalama etki pozitiftir. C şıkkı tersidir. D ve E metinle çelişir.",
        "explanation": "Analiz birçok eski çalışmanın etkileri olduğundan büyük tahmin ettiğini bulmuştur (B şıkkı)."
      },
      {
        "id": "rb046_q4",
        "type": "reading",
        "title": "The Power and Limits of Nudges",
        "question": "Supporters of nudges respond to criticism by arguing that _____ .",
        "options": {
          "A": "nudges should completely replace taxes and regulations in most areas of policy",
          "B": "cheap measures with small effects can still matter at scale",
          "C": "academic journals have always reported their effects accurately",
          "D": "nudge units should stop publishing their results in academic journals",
          "E": "people prefer to be told exactly what to do"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Karşı Argüman",
        "trapWarning": "A şıkkı destekçilerin söylediğinden fazlasını iddia eder. C şıkkı analizin bulgusuyla çelişir. D ve E metinde yoktur.",
        "explanation": "Destekçilere göre dürtmeler ucuzdur ve küçük etkiler bile milyonlarca kişiye uygulanınca önemli olabilir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb047",
    "title": "Social Media and Teenage Mental Health",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Nature Human Behaviour & The Atlantic",
    "wordCount": 252,
    "passageText": "Since around 2012, rates of anxiety, depression and self-harm among teenagers have risen in the United States, the United Kingdom and several other countries, particularly among girls. Some psychologists argue that the main cause is the spread of smartphones and social media, which arrived in teenagers' lives at almost exactly the same time. They point out that heavy users spend less time sleeping, exercising and meeting friends in person, and that image-based platforms encourage constant comparison with idealized versions of other people's lives.\n\nOther researchers believe this conclusion goes beyond the evidence. Large studies that have examined the relationship between screen time and well-being generally find a negative association, but a small one. In one widely discussed analysis, the link between digital technology use and adolescent well-being was about as strong as the link between well-being and eating potatoes. Critics also note that most studies are correlational: teenagers who are already unhappy may spend more time online, rather than the other way round.\n\nThe disagreement is partly about method. Average effects can hide large differences between individuals; a platform that has little impact on most users may seriously harm a vulnerable minority. Experiments in which adults reduce their social media use for a few weeks have produced mixed results, and similar experiments with teenagers are rare. Despite the uncertainty, several governments have introduced or proposed measures such as age limits for social media accounts and bans on phones in schools, arguing that it would be unwise to wait for definitive evidence before acting.",
    "vocabularyNotes": [
      {
        "word": "self-harm",
        "meaningTr": "kendine zarar verme",
        "contextNote": "Sağlık metinlerinde geçer."
      },
      {
        "word": "idealized",
        "meaningTr": "idealleştirilmiş",
        "contextNote": "idealize fiilinden."
      },
      {
        "word": "association",
        "meaningTr": "ilişki, bağlantı",
        "contextNote": "negative association: ters yönlü ilişki."
      },
      {
        "word": "correlational",
        "meaningTr": "korelasyona dayalı",
        "contextNote": "Neden-sonuç kurmaz."
      },
      {
        "word": "vulnerable",
        "meaningTr": "savunmasız, kırılgan",
        "contextNote": "a vulnerable minority: kırılgan bir azınlık."
      },
      {
        "word": "definitive",
        "meaningTr": "kesin, nihai",
        "contextNote": "Eş anlamlısı: conclusive."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Average effects can hide large differences between individuals; a platform that has little impact on most users may seriously harm a vulnerable minority.",
        "subject": "Average effects / a platform that has little impact on most users",
        "mainVerb": "can hide / may seriously harm (gizleyebilir / ciddi zarar verebilir)",
        "objectsAndComplements": "large differences between individuals (bireyler arasındaki büyük farkları) + a vulnerable minority (kırılgan bir azınlığı)",
        "grammaticalStructures": [
          "Noktalı virgül: ikinci cümle birinciyi örnekler.",
          "Defining relative clause (a platform that has little impact ...).",
          "can / may: olasılık bildiren modallar."
        ],
        "translationTr": "Ortalama etkiler bireyler arasındaki büyük farklılıkları gizleyebilir; kullanıcıların çoğu üzerinde az etkisi olan bir platform, kırılgan bir azınlığa ciddi zarar verebilir."
      }
    ],
    "questions": [
      {
        "id": "rb047_q1",
        "type": "reading",
        "title": "Social Media and Teenage Mental Health",
        "question": "Psychologists who blame social media point out that _____ .",
        "options": {
          "A": "mental health problems among teenagers began to rise long before 2012",
          "B": "heavy users sleep, exercise and meet friends in person less",
          "C": "boys have been affected much more seriously than girls",
          "D": "teenagers who are unhappy are less likely to go online",
          "E": "image-based platforms discourage comparison with others"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Görüş Detayı",
        "trapWarning": "A şıkkı zaman bilgisini bozar. C şıkkı metinle çelişir (özellikle kızlar). D şıkkı eleştirmenlerin argümanını tersine çevirir. E şıkkı tam tersidir.",
        "explanation": "Yoğun kullanıcıların daha az uyuduğu, spor yaptığı ve yüz yüze görüştüğü vurgulanır (B şıkkı)."
      },
      {
        "id": "rb047_q2",
        "type": "reading",
        "title": "Social Media and Teenage Mental Health",
        "question": "The comparison with eating potatoes is used to suggest that _____ .",
        "options": {
          "A": "teenagers who use phones also tend to eat unhealthy food",
          "B": "the measured link between technology and well-being is weak",
          "C": "potatoes have a much stronger effect on teenagers' mood than most people believe",
          "D": "diet is the main cause of rising anxiety among teenagers",
          "E": "researchers should study diet instead of screen time"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Benzetmenin Amacı",
        "trapWarning": "A, C, D ve E karşılaştırmayı gerçek bir beslenme iddiası gibi okur; amaç ilişkinin zayıflığını göstermektir.",
        "explanation": "Karşılaştırma, teknoloji kullanımı ile iyi oluş arasındaki ilişkinin çok küçük olduğunu göstermek için yapılmıştır (B şıkkı)."
      },
      {
        "id": "rb047_q3",
        "type": "reading",
        "title": "Social Media and Teenage Mental Health",
        "question": "According to the passage, one weakness of most studies is that they _____ .",
        "options": {
          "A": "include only adult volunteers rather than teenagers of school age",
          "B": "cannot show whether social media causes unhappiness or vice versa",
          "C": "were carried out before smartphones became common",
          "D": "focus only on boys and ignore the experiences and problems of girls",
          "E": "are paid for by the technology companies whose platforms are being studied"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Metodoloji Eleştirisi",
        "trapWarning": "A şıkkı deneysel çalışmalar için kısmen doğrudur ama \"most studies\" için verilen zayıflık korelasyondur. C, D ve E metinde yoktur.",
        "explanation": "Çoğu çalışma korelasyoneldir; mutsuz gençler daha fazla internette vakit geçiriyor olabilir (B şıkkı)."
      },
      {
        "id": "rb047_q4",
        "type": "reading",
        "title": "Social Media and Teenage Mental Health",
        "question": "Governments that have introduced measures such as phone bans in schools believe that _____ .",
        "options": {
          "A": "the evidence against social media is now completely conclusive",
          "B": "action is justified even before the evidence is certain",
          "C": "social media has no effect on a vulnerable minority",
          "D": "teenagers should be allowed to decide for themselves",
          "E": "experiments with teenagers have produced clear results"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş Çıkarımı",
        "trapWarning": "A ve E \"Despite the uncertainty\" ve \"rare\" ifadeleriyle çelişir. C şıkkı metne aykırıdır.",
        "explanation": "Hükümetler kesin kanıt beklemenin akıllıca olmayacağını savunur; yani belirsizliğe rağmen harekete geçmeyi haklı görürler (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb048",
    "title": "How Many Friends Can We Have?",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from the work of Robin Dunbar & Biology Letters",
    "wordCount": 258,
    "passageText": "In the early 1990s, the British anthropologist Robin Dunbar noticed a relationship between the size of a primate species' neocortex, the outer layer of the brain associated with complex thought, and the size of the social groups in which it lives. Monkeys and apes with larger brains relative to their bodies tended to live in larger groups. Dunbar reasoned that keeping track of social relationships, knowing who is allied with whom and who owes favours to whom, is mentally demanding, so the brain limits the number of relationships an animal can maintain.\n\nApplying the same relationship to humans, he predicted that people should be able to maintain stable relationships with about 150 individuals. He then found this number appearing in many settings: the average size of hunter-gatherer communities, of villages recorded in England's Domesday Book in 1086 and of military units such as the company. The figure, now known as Dunbar's number, has become well known far beyond academia, and some companies have even designed their offices so that no more than 150 people work in each building.\n\nThe number has been criticized, however. A 2021 study using different statistical methods and more recent data on primate brains found that the predicted group size for humans could range from fewer than ten to more than five hundred, depending on the assumptions used. Other researchers argue that human social networks are shaped by culture, technology and personality, not only by brain size. Dunbar has replied that the number was never intended as an exact limit but as an average around which individuals vary.",
    "vocabularyNotes": [
      {
        "word": "primate",
        "meaningTr": "primat (maymun, insan vb.)",
        "contextNote": "Biyoloji metinlerinde sık geçer."
      },
      {
        "word": "keep track of",
        "meaningTr": "takip etmek, izini sürmek",
        "contextNote": "Eş anlamlısı: monitor, follow."
      },
      {
        "word": "allied with",
        "meaningTr": "ile müttefik",
        "contextNote": "İsim: alliance."
      },
      {
        "word": "mentally demanding",
        "meaningTr": "zihinsel olarak zorlayıcı",
        "contextNote": "demanding: emek isteyen."
      },
      {
        "word": "setting",
        "meaningTr": "ortam, çevre",
        "contextNote": "Ayrıca ayar anlamı vardır."
      },
      {
        "word": "assumption",
        "meaningTr": "varsayım",
        "contextNote": "assume fiilinden."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Dunbar reasoned that keeping track of social relationships, knowing who is allied with whom and who owes favours to whom, is mentally demanding, so the brain limits the number of relationships an animal can maintain.",
        "subject": "Dunbar",
        "mainVerb": "reasoned (akıl yürüttü)",
        "objectsAndComplements": "[that-clause: sosyal ilişkileri takip etmenin zihinsel olarak zorlayıcı olduğunu] + so-clause (bu yüzden beynin ... sınırladığını)",
        "grammaticalStructures": [
          "Gerund özne (keeping track of ...).",
          "Açıklayıcı ara ifade (knowing who ... and who ...).",
          "Dolaylı soru yapıları (who is allied with whom).",
          "Gizli relative clause (relationships [that] an animal can maintain)."
        ],
        "translationTr": "Dunbar, sosyal ilişkileri takip etmenin, yani kimin kiminle müttefik olduğunu ve kimin kime iyilik borçlu olduğunu bilmenin zihinsel olarak zorlayıcı olduğunu ve bu yüzden beynin bir hayvanın sürdürebileceği ilişki sayısını sınırladığını düşündü."
      }
    ],
    "questions": [
      {
        "id": "rb048_q1",
        "type": "reading",
        "title": "How Many Friends Can We Have?",
        "question": "Dunbar's original observation was that, among primates, _____ .",
        "options": {
          "A": "species living in larger groups tend to have smaller brains",
          "B": "a larger neocortex tends to go with larger social groups",
          "C": "body size is the best predictor of the size of social groups",
          "D": "only humans form groups larger than 150 individuals",
          "E": "apes live in larger groups than monkeys of the same size"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Gözlem Detayı",
        "trapWarning": "A şıkkı ilişkiyi tersine çevirir. C şıkkı beden büyüklüğünü ön plana çıkarır; metin beyin/vücut oranından söz eder. D ve E metinde yoktur.",
        "explanation": "Vücuduna göre daha büyük beyni olan türler daha büyük gruplarda yaşama eğilimindedir (B şıkkı)."
      },
      {
        "id": "rb048_q2",
        "type": "reading",
        "title": "How Many Friends Can We Have?",
        "question": "The examples of hunter-gatherer communities, English villages and military units are mentioned to _____ .",
        "options": {
          "A": "show that the number 150 appears in many kinds of human groups",
          "B": "prove that larger groups are always more efficient",
          "C": "explain why modern companies prefer small offices to large open-plan ones",
          "D": "suggest that military units were designed by anthropologists",
          "E": "argue that the number of friends has fallen since 1086"
        },
        "answer": "A",
        "difficulty": "İleri",
        "tacticUsed": "Örneklerin İşlevi",
        "trapWarning": "B, C, D ve E örneklerden çıkarılamayacak iddialardır.",
        "explanation": "Örnekler 150 sayısının pek çok farklı ortamda ortaya çıktığını göstermek için verilmiştir (A şıkkı)."
      },
      {
        "id": "rb048_q3",
        "type": "reading",
        "title": "How Many Friends Can We Have?",
        "question": "The 2021 study criticized Dunbar's number by showing that _____ .",
        "options": {
          "A": "humans actually have more friends than any other primate",
          "B": "the predicted group size varied hugely with the methods used",
          "C": "brain size has no relationship at all with group size in monkeys",
          "D": "most people maintain relationships with exactly 150 others",
          "E": "companies that limit buildings to 150 people perform worse"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Eleştiri Detayı",
        "trapWarning": "C şıkkı fazla ileri gider. D şıkkı eleştirinin tersini söyler. A ve E metinde yoktur.",
        "explanation": "Çalışma, varsayımlara göre tahmin edilen grup büyüklüğünün ondan az ile beş yüzden fazla arasında değişebildiğini bulmuştur (B şıkkı)."
      },
      {
        "id": "rb048_q4",
        "type": "reading",
        "title": "How Many Friends Can We Have?",
        "question": "Dunbar's reply to his critics suggests that he sees the number as _____ .",
        "options": {
          "A": "a precise limit that applies to every individual",
          "B": "a typical value around which people differ",
          "C": "a figure that applies only to hunter-gatherers",
          "D": "an error that should no longer be used",
          "E": "a rule that companies are legally required to follow"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yanıt Yorumu",
        "trapWarning": "A şıkkı Dunbar'ın açıkça reddettiği yorumdur. C, D ve E yanıtla ilgisizdir.",
        "explanation": "Dunbar sayının kesin bir sınır değil, bireylerin etrafında farklılık gösterdiği bir ortalama olduğunu söyler (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb049",
    "title": "Gentrification and Its Discontents",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Urban Studies & The Economist",
    "wordCount": 251,
    "passageText": "The term \"gentrification\" was coined in 1964 by the British sociologist Ruth Glass to describe how middle-class households were moving into working-class districts of London, renovating old houses and gradually changing the character of entire neighbourhoods. Today it is used around the world to describe a process in which rising investment in a previously poor area brings new shops, cafés and residents, accompanied by increases in rents and property prices.\n\nGentrification is widely criticized for displacing long-standing residents. When rents rise, low-income tenants may be forced to move to cheaper areas further from their jobs, schools and social networks. Small local businesses can also be replaced by chains that cater to newcomers. Residents who remain sometimes report feeling like strangers in their own neighbourhood.\n\nThe empirical picture, however, is more complex than this account suggests. Several large studies in American cities have found that residents of gentrifying neighbourhoods are not more likely to move out than residents of similar neighbourhoods that are not gentrifying. One possible reason is that poor households move frequently in any case, so the difference is hard to detect. Some studies also find benefits for existing residents who manage to stay, such as lower crime, better public services and improved credit scores. Researchers caution that these averages may conceal real hardship for particular groups, especially renters without legal protection. Many urban economists argue that the underlying problem is not gentrification itself but a shortage of housing, and that building more homes would reduce the pressure on rents.",
    "vocabularyNotes": [
      {
        "word": "coin",
        "meaningTr": "(terim) uydurmak, ilk kez kullanmak",
        "contextNote": "coin a term/phrase."
      },
      {
        "word": "renovate",
        "meaningTr": "yenilemek, tadilat yapmak",
        "contextNote": "İsim: renovation."
      },
      {
        "word": "displace",
        "meaningTr": "yerinden etmek",
        "contextNote": "İsim: displacement."
      },
      {
        "word": "cater to",
        "meaningTr": "-in ihtiyaçlarına hitap etmek",
        "contextNote": "cater for (BrE) da kullanılır."
      },
      {
        "word": "empirical",
        "meaningTr": "deneysel, gözleme dayalı",
        "contextNote": "Akademik metinlerde çok sık."
      },
      {
        "word": "conceal",
        "meaningTr": "gizlemek",
        "contextNote": "Eş anlamlısı: hide, mask."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Several large studies in American cities have found that residents of gentrifying neighbourhoods are not more likely to move out than residents of similar neighbourhoods that are not gentrifying.",
        "subject": "Several large studies in American cities (ABD şehirlerindeki birkaç büyük çalışma)",
        "mainVerb": "have found (bulmuştur)",
        "objectsAndComplements": "[that-clause: soylulaşan mahallelerin sakinlerinin, soylulaşmayan benzer mahallelerin sakinlerinden daha fazla taşınma eğiliminde olmadığını]",
        "grammaticalStructures": [
          "Present perfect (have found).",
          "be likely to + V1: muhtemel olmak.",
          "not more ... than: -den daha fazla değil.",
          "Defining relative clause (neighbourhoods that are not gentrifying)."
        ],
        "translationTr": "ABD şehirlerinde yapılan birkaç büyük çalışma, soylulaşan mahallelerdeki sakinlerin, soylulaşmayan benzer mahallelerdeki sakinlere göre taşınma olasılığının daha yüksek olmadığını bulmuştur."
      }
    ],
    "questions": [
      {
        "id": "rb049_q1",
        "type": "reading",
        "title": "Gentrification and Its Discontents",
        "question": "According to the passage, Ruth Glass originally used the term \"gentrification\" to describe _____ .",
        "options": {
          "A": "the building of new housing estates on the edge of the city for working-class families",
          "B": "middle-class people moving into and renovating working-class areas",
          "C": "the replacement of local shops by international chains",
          "D": "the movement of poor families from the city to the countryside",
          "E": "a government programme to reduce crime in London"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Terimin Kökeni",
        "trapWarning": "C şıkkı bugünkü eleştirilerden biridir, ilk tanım değildir. A, D ve E metinde yoktur.",
        "explanation": "Glass terimi orta sınıf hanelerin işçi sınıfı semtlerine taşınıp eski evleri yenilemesini tarif etmek için kullanmıştır (B şıkkı)."
      },
      {
        "id": "rb049_q2",
        "type": "reading",
        "title": "Gentrification and Its Discontents",
        "question": "Which of the following is NOT mentioned as a criticism of gentrification?",
        "options": {
          "A": "Low-income tenants may be forced to move away",
          "B": "Local businesses may be replaced by chains",
          "C": "Remaining residents may feel like strangers",
          "D": "Crime rates usually rise in gentrifying areas",
          "E": "People may lose access to their social networks"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E ikinci paragrafta eleştiri olarak geçer. D şıkkı ise üçüncü paragrafta suçun azaldığı yönündeki bulgunun tersidir.",
        "explanation": "Metin bazı çalışmaların suçun azaldığını bulduğunu söyler; suçun arttığı bir eleştiri olarak geçmez (D şıkkı)."
      },
      {
        "id": "rb049_q3",
        "type": "reading",
        "title": "Gentrification and Its Discontents",
        "question": "One possible explanation for why gentrification does not appear to increase moving out is that _____ .",
        "options": {
          "A": "rents in gentrifying areas actually tend to fall gradually over time",
          "B": "poor households move often anyway, so differences are hard to see",
          "C": "most residents of gentrifying areas own their homes outright",
          "D": "new residents usually leave before the original ones do",
          "E": "governments pay residents to remain in their neighbourhoods"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Olası Açıklama",
        "trapWarning": "A şıkkı metnin genel tanımıyla çelişir. C, D ve E metinde yoktur.",
        "explanation": "Yoksul haneler zaten sık taşındığı için farkı tespit etmek zordur (B şıkkı)."
      },
      {
        "id": "rb049_q4",
        "type": "reading",
        "title": "Gentrification and Its Discontents",
        "question": "Many urban economists believe that the real solution is to _____ .",
        "options": {
          "A": "prevent middle-class families from moving into poor areas",
          "B": "increase the supply of housing to ease pressure on rents",
          "C": "ban international chains from opening shops in cities",
          "D": "stop investing in previously poor neighbourhoods",
          "E": "give legal protection only to homeowners"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çözüm Önerisi",
        "trapWarning": "A, C ve D gentrifikasyonu doğrudan engellemeye yöneliktir; ekonomistler sorunun bu olmadığını söyler. E şıkkı kiracıların korunması ihtiyacıyla çelişir.",
        "explanation": "Ekonomistlere göre asıl sorun konut kıtlığıdır ve daha fazla konut yapmak kira baskısını azaltır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb050",
    "title": "Can Mindset Be Taught?",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Nature & Psychological Science",
    "wordCount": 260,
    "passageText": "Over the past three decades, the Stanford psychologist Carol Dweck has developed one of the most influential ideas in education: the distinction between a fixed mindset and a growth mindset. Students with a fixed mindset believe that intelligence is a fixed quantity, so a poor result shows that they lack ability. Students with a growth mindset believe that ability can be developed through effort and good strategies, so a poor result is a sign that they need to work differently. Dweck's early studies suggested that students with a growth mindset persisted longer in the face of difficulty and achieved better results.\n\nThe idea spread rapidly. Schools in many countries introduced lessons on the brain's ability to change, and teachers were encouraged to praise effort rather than intelligence. Some enthusiasts claimed that changing students' beliefs could close achievement gaps between rich and poor students.\n\nLater research has produced a more modest picture. Two large meta-analyses published in 2018 found that the overall relationship between mindset and academic achievement was weak and that most mindset interventions had small effects. However, a carefully designed national study in the United States, involving more than 12,000 students, found that a short online programme of less than an hour improved the grades of lower-achieving students by a small but meaningful amount, particularly in schools where peers supported the idea of challenging themselves. Researchers now emphasize that a growth mindset is not a magic solution. Its benefits appear to depend on context, and it is most likely to help when students are given real opportunities and support to improve.",
    "vocabularyNotes": [
      {
        "word": "mindset",
        "meaningTr": "zihniyet, bakış açısı",
        "contextNote": "fixed/growth mindset: sabit/gelişim zihniyeti."
      },
      {
        "word": "persist",
        "meaningTr": "sebat etmek, devam etmek",
        "contextNote": "persist in + V-ing."
      },
      {
        "word": "in the face of",
        "meaningTr": "karşısında, -e rağmen",
        "contextNote": "in the face of difficulty: zorluk karşısında."
      },
      {
        "word": "enthusiast",
        "meaningTr": "hevesli, meraklı",
        "contextNote": "Sıfat: enthusiastic."
      },
      {
        "word": "meta-analysis",
        "meaningTr": "meta-analiz",
        "contextNote": "Birçok çalışmanın birleştirilmiş analizi."
      },
      {
        "word": "intervention",
        "meaningTr": "müdahale, uygulama",
        "contextNote": "Eğitim/psikolojide program anlamında."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "A short online programme of less than an hour improved the grades of lower-achieving students by a small but meaningful amount, particularly in schools where peers supported the idea of challenging themselves.",
        "subject": "A short online programme of less than an hour (bir saatten kısa bir çevrim içi program)",
        "mainVerb": "improved (iyileştirdi)",
        "objectsAndComplements": "the grades of lower-achieving students (başarısı düşük öğrencilerin notlarını) + by a small but meaningful amount + [where-clause]",
        "grammaticalStructures": [
          "by + miktar: değişimin miktarı.",
          "Bileşik sıfat (lower-achieving).",
          "Relative adverb where (schools where ...).",
          "particularly: özellikle (vurgu)."
        ],
        "translationTr": "Bir saatten kısa süren çevrim içi bir program, özellikle akranların kendini zorlama fikrini desteklediği okullarda, başarısı düşük öğrencilerin notlarını küçük ama anlamlı bir miktarda iyileştirdi."
      }
    ],
    "questions": [
      {
        "id": "rb050_q1",
        "type": "reading",
        "title": "Can Mindset Be Taught?",
        "question": "According to the passage, a student with a fixed mindset is likely to interpret a poor result as _____ .",
        "options": {
          "A": "a sign that a different study strategy is needed",
          "B": "evidence of a lack of natural ability",
          "C": "the result of unfair treatment by the teacher",
          "D": "a useful opportunity to learn from mistakes",
          "E": "proof that effort is more important than talent"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Kavram Ayırımı",
        "trapWarning": "A ve D gelişim zihniyetine aittir. E şıkkı sabit zihniyetin tersidir. C şıkkı metinde yoktur.",
        "explanation": "Sabit zihniyetli öğrenciler zekânın sabit olduğuna inanır ve kötü sonucu yetenek eksikliği olarak görür (B şıkkı)."
      },
      {
        "id": "rb050_q2",
        "type": "reading",
        "title": "Can Mindset Be Taught?",
        "question": "Some enthusiasts claimed that teaching a growth mindset could _____ .",
        "options": {
          "A": "replace the need for well-qualified and experienced teachers in schools",
          "B": "reduce the gap in achievement between rich and poor students",
          "C": "make every student achieve top grades within a year",
          "D": "increase students' intelligence scores by many points",
          "E": "eliminate the need for praise in the classroom"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "İddia Tespiti",
        "trapWarning": "A, C, D ve E metinde geçmeyen aşırı iddialardır.",
        "explanation": "Bazı hevesliler inançları değiştirmenin zengin ve yoksul öğrenciler arasındaki başarı farkını kapatabileceğini iddia etmiştir (B şıkkı)."
      },
      {
        "id": "rb050_q3",
        "type": "reading",
        "title": "Can Mindset Be Taught?",
        "question": "The 2018 meta-analyses suggested that _____ .",
        "options": {
          "A": "mindset interventions have very large effects on achievement",
          "B": "the link between mindset and achievement is weaker than claimed",
          "C": "growth mindset harms students who are already successful",
          "D": "Dweck's original studies had never been carried out",
          "E": "praise for intelligence is more effective than praise for effort"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Bulgu",
        "trapWarning": "A şıkkı tam tersidir. C ve E metinde yoktur. D şıkkı saçma bir iddiadır.",
        "explanation": "Meta-analizler zihniyet ile akademik başarı arasındaki ilişkinin zayıf, müdahalelerin etkisinin küçük olduğunu bulmuştur (B şıkkı)."
      },
      {
        "id": "rb050_q4",
        "type": "reading",
        "title": "Can Mindset Be Taught?",
        "question": "According to the last paragraph, a growth mindset is most likely to help when _____ .",
        "options": {
          "A": "students are told by their teachers that intelligence cannot be changed",
          "B": "it comes with real opportunities and support for improvement",
          "C": "teachers stop giving students any form of feedback",
          "D": "it is taught to high-achieving students only",
          "E": "schools replace their normal lessons with short online programmes"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Koşul Tespiti",
        "trapWarning": "A şıkkı sabit zihniyeti tarif eder. D şıkkı metinle çelişir: düşük başarılı öğrencilerde etki görülmüştür. C ve E metinde yoktur.",
        "explanation": "Zihniyet en çok öğrencilere gelişmek için gerçek fırsatlar ve destek verildiğinde yardımcı olur (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb051",
    "title": "The Long Road to mRNA Vaccines",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Nature & The New York Times Science",
    "wordCount": 258,
    "passageText": "When the first mRNA vaccines against COVID-19 were authorized in December 2020, less than a year after the virus had been identified, many people assumed that the technology itself was new. In fact, it was the product of more than three decades of research, much of it carried out with little funding or recognition.\n\nMessenger RNA, or mRNA, is a molecule that carries instructions from a cell's DNA to the machinery that builds proteins. The idea behind mRNA vaccines is simple: instead of injecting a weakened virus or a viral protein, doctors inject mRNA that instructs the body's own cells to produce a harmless piece of the virus, which then trains the immune system to recognize it. For years, however, the approach faced a serious obstacle. When synthetic mRNA was injected into animals, it triggered strong inflammation and was quickly destroyed before it could do its job.\n\nThe Hungarian-born biochemist Katalin Karikó and her colleague Drew Weissman found a solution in 2005. They showed that replacing one of the building blocks of mRNA with a slightly modified version allowed the molecule to avoid detection by the immune system. Their discovery attracted little attention at first, and Karikó struggled for years to obtain research grants. A second advance, the development of tiny fat particles that protect mRNA and help it enter cells, was also essential. When the pandemic arrived, these pieces were already in place, allowing vaccines to be designed within days of the virus's genetic sequence being published. Karikó and Weissman received the Nobel Prize in Physiology or Medicine in 2023.",
    "vocabularyNotes": [
      {
        "word": "authorize",
        "meaningTr": "izin vermek, onaylamak",
        "contextNote": "İsim: authorization."
      },
      {
        "word": "recognition",
        "meaningTr": "tanınma, takdir",
        "contextNote": "recognize fiilinden."
      },
      {
        "word": "synthetic",
        "meaningTr": "sentetik, yapay",
        "contextNote": "Zıt anlamlısı: natural."
      },
      {
        "word": "modified",
        "meaningTr": "değiştirilmiş",
        "contextNote": "modify fiilinden."
      },
      {
        "word": "detection",
        "meaningTr": "tespit, algılanma",
        "contextNote": "avoid detection: fark edilmekten kaçınmak."
      },
      {
        "word": "grant",
        "meaningTr": "hibe, ödenek; vermek",
        "contextNote": "research grant: araştırma hibesi."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Instead of injecting a weakened virus or a viral protein, doctors inject mRNA that instructs the body's own cells to produce a harmless piece of the virus, which then trains the immune system to recognize it.",
        "subject": "doctors (doktorlar)",
        "mainVerb": "inject (enjekte ederler)",
        "objectsAndComplements": "mRNA + [that-clause: vücudun kendi hücrelerine virüsün zararsız bir parçasını üretmesini söyleyen] + [which-clause: bu parça da bağışıklık sistemini eğitir]",
        "grammaticalStructures": [
          "Instead of + V-ing: -mek yerine.",
          "Defining relative clause (mRNA that instructs ...).",
          "instruct + nesne + to V1.",
          "Non-defining relative (which then trains ...).",
          "train + nesne + to V1."
        ],
        "translationTr": "Doktorlar zayıflatılmış bir virüs ya da viral bir protein enjekte etmek yerine, vücudun kendi hücrelerine virüsün zararsız bir parçasını üretmesini söyleyen mRNA enjekte ederler; bu parça da bağışıklık sistemini virüsü tanıması için eğitir."
      }
    ],
    "questions": [
      {
        "id": "rb051_q1",
        "type": "reading",
        "title": "The Long Road to mRNA Vaccines",
        "question": "The author mentions that many people assumed mRNA technology was new in order to _____ .",
        "options": {
          "A": "support the view that the vaccines had been developed too quickly to be safe",
          "B": "correct a common belief by showing how long the research had taken",
          "C": "explain why the vaccines were authorized in December 2020",
          "D": "suggest that the virus was identified earlier than was reported",
          "E": "argue that older vaccine technologies were more effective"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Giriş Cümlesinin İşlevi (In fact)",
        "trapWarning": "A şıkkı yazarın ima etmediği bir güvenlik kaygısıdır. C, D ve E metinle ilgisizdir.",
        "explanation": "\"In fact\" ile yazar bu yaygın inancı düzeltir: teknoloji otuz yılı aşkın araştırmanın ürünüdür (B şıkkı)."
      },
      {
        "id": "rb051_q2",
        "type": "reading",
        "title": "The Long Road to mRNA Vaccines",
        "question": "According to the passage, mRNA vaccines work by _____ .",
        "options": {
          "A": "injecting a weakened version of the virus into the bloodstream",
          "B": "getting the body's cells to make a harmless part of the virus",
          "C": "destroying the virus's genetic material directly inside cells",
          "D": "replacing a person's DNA with modified building blocks",
          "E": "blocking the machinery that cells use to build proteins"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Mekanizma",
        "trapWarning": "A şıkkı geleneksel aşıları tarif eder. D şıkkı yanlış ve tehlikeli bir yanılgıdır; mRNA DNA'yı değiştirmez. C ve E metinde yoktur.",
        "explanation": "mRNA vücudun hücrelerine virüsün zararsız bir parçasını üretmesini söyler; bu da bağışıklık sistemini eğitir (B şıkkı)."
      },
      {
        "id": "rb051_q3",
        "type": "reading",
        "title": "The Long Road to mRNA Vaccines",
        "question": "What problem did Karikó and Weissman solve?",
        "options": {
          "A": "Synthetic mRNA was far too expensive to produce in the large amounts needed",
          "B": "Injected mRNA caused inflammation and was destroyed too quickly",
          "C": "Fat particles were unable to carry mRNA into cells",
          "D": "The genetic sequence of viruses could not be published quickly",
          "E": "Vaccines could not be stored at normal temperatures"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Problem-Çözüm",
        "trapWarning": "C şıkkı ikinci gelişmeyle karıştırır; onu Karikó ve Weissman çözmemiştir. A, D ve E metinde yoktur.",
        "explanation": "Sentetik mRNA güçlü iltihaplanmaya yol açıyor ve görevini yapamadan yok ediliyordu; değiştirilmiş yapı taşı bunu çözdü (B şıkkı)."
      },
      {
        "id": "rb051_q4",
        "type": "reading",
        "title": "The Long Road to mRNA Vaccines",
        "question": "It can be inferred from the passage that the speed of vaccine development in 2020 was possible because _____ .",
        "options": {
          "A": "regulators decided to skip all the usual safety tests",
          "B": "key scientific advances had been made long before 2020",
          "C": "Karikó had already designed a vaccine for COVID-19 in 2005",
          "D": "the virus was very similar to the influenza virus",
          "E": "pharmaceutical companies had stored large amounts of mRNA"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım (these pieces were already in place)",
        "trapWarning": "C şıkkı zamanlamayı bozar; 2005'te COVID-19 yoktu. A şıkkı metinde yoktur ve yanlış bir ima taşır. D ve E metinde yoktur.",
        "explanation": "Pandemi geldiğinde temel parçalar zaten hazırdı; hız yıllar önce yapılmış bilimsel ilerlemelerden kaynaklandı (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb052",
    "title": "From Continental Drift to Plate Tectonics",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Earth and Planetary Science Letters & Smithsonian",
    "wordCount": 269,
    "passageText": "In 1912, the German meteorologist Alfred Wegener proposed that the continents had once been joined in a single supercontinent, which he called Pangaea, and had since drifted apart. He pointed to several kinds of evidence: the coastlines of South America and Africa fit together like pieces of a puzzle; identical fossils of land animals and plants appear on continents now separated by oceans; and rock formations and traces of ancient glaciers match across the Atlantic.\n\nMost geologists rejected the theory for decades. Their main objection was not to the evidence but to the mechanism. Wegener could not explain what force was strong enough to push enormous continents through the solid rock of the ocean floor, and the explanations he suggested were shown to be far too weak. Many experts also distrusted the idea because Wegener was not a trained geologist. He died in 1930 during an expedition in Greenland, his theory still largely dismissed.\n\nThe situation changed in the 1950s and 1960s, when new technology developed partly for military purposes allowed scientists to map the ocean floor in detail. They discovered a vast system of underwater mountain ridges and found that the rocks on either side of these ridges recorded reversals in the Earth's magnetic field in symmetrical stripes. The pattern showed that new ocean floor was being created at the ridges and spreading outwards. This led to the theory of plate tectonics, according to which the Earth's surface is divided into rigid plates that move slowly over a hotter, softer layer beneath. Continents do not plough through the ocean floor, as Wegener had imagined; they are carried along with it.",
    "vocabularyNotes": [
      {
        "word": "drift",
        "meaningTr": "sürüklenmek",
        "contextNote": "continental drift: kıtaların kayması."
      },
      {
        "word": "objection",
        "meaningTr": "itiraz",
        "contextNote": "object to: -e itiraz etmek."
      },
      {
        "word": "dismiss",
        "meaningTr": "reddetmek, önemsememek",
        "contextNote": "Eş anlamlısı: reject, disregard."
      },
      {
        "word": "ridge",
        "meaningTr": "sırt, tepe sırası",
        "contextNote": "mid-ocean ridge: okyanus ortası sırtı."
      },
      {
        "word": "symmetrical",
        "meaningTr": "simetrik",
        "contextNote": "symmetry kelimesinden."
      },
      {
        "word": "rigid",
        "meaningTr": "katı, sert",
        "contextNote": "Eş anlamlısı: stiff, inflexible."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Their main objection was not to the evidence but to the mechanism.",
        "subject": "Their main objection (asıl itirazları)",
        "mainVerb": "was (idi)",
        "objectsAndComplements": "not to the evidence but to the mechanism (kanıta değil mekanizmaya)",
        "grammaticalStructures": [
          "objection to: -e itiraz.",
          "not A but B: A değil B.",
          "Paralel edat öbekleri (to the evidence / to the mechanism)."
        ],
        "translationTr": "Asıl itirazları kanıtlara değil, mekanizmaya yönelikti."
      }
    ],
    "questions": [
      {
        "id": "rb052_q1",
        "type": "reading",
        "title": "From Continental Drift to Plate Tectonics",
        "question": "Which of the following was NOT part of Wegener's evidence?",
        "options": {
          "A": "The matching shapes of the coastlines of South America and Africa",
          "B": "Identical fossils on continents separated by oceans",
          "C": "Matching rock formations on both sides of the Atlantic",
          "D": "Symmetrical magnetic stripes on the ocean floor",
          "E": "Traces of ancient glaciers across separated continents"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu & Kronoloji",
        "trapWarning": "A, B, C ve E Wegener'in kanıtlarıdır. D 1950'lerden sonra bulunmuştur.",
        "explanation": "Manyetik şeritler Wegener'in ölümünden sonra, okyanus tabanı haritalanınca keşfedilmiştir (D şıkkı)."
      },
      {
        "id": "rb052_q2",
        "type": "reading",
        "title": "From Continental Drift to Plate Tectonics",
        "question": "According to the passage, geologists mainly rejected Wegener's theory because _____ .",
        "options": {
          "A": "his fossil evidence was later shown to be completely false",
          "B": "he could not explain what force moved the continents",
          "C": "he refused to share his data with other scientists",
          "D": "the coastlines of the continents do not really match",
          "E": "he had carried out his research only in Greenland"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep (not to the evidence but to the mechanism)",
        "trapWarning": "A ve D kanıta itiraz eder; metin itirazın kanıta değil mekanizmaya olduğunu söyler. C ve E metinde yoktur.",
        "explanation": "Wegener kıtaları hareket ettirecek kadar güçlü kuvveti açıklayamamıştır (B şıkkı)."
      },
      {
        "id": "rb052_q3",
        "type": "reading",
        "title": "From Continental Drift to Plate Tectonics",
        "question": "The discovery of magnetic stripes on the ocean floor was important because it _____ .",
        "options": {
          "A": "proved that continents push through solid ocean rock",
          "B": "showed that new ocean floor forms at ridges and spreads out",
          "C": "revealed that the Earth's magnetic field has never changed",
          "D": "explained why Wegener had chosen to work in Greenland",
          "E": "showed that the ocean floor is much older than the continents themselves"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Bulgunun Önemi",
        "trapWarning": "A şıkkı Wegener'in yanlış düşündüğü mekanizmadır. C şıkkı manyetik tersinmeyle çelişir. D ve E metinde yoktur.",
        "explanation": "Şerit deseni sırtlarda yeni okyanus tabanı oluştuğunu ve dışa doğru yayıldığını göstermiştir (B şıkkı)."
      },
      {
        "id": "rb052_q4",
        "type": "reading",
        "title": "From Continental Drift to Plate Tectonics",
        "question": "According to the last sentence, plate tectonics differs from Wegener's idea in that _____ .",
        "options": {
          "A": "it denies that the continents have ever moved at all",
          "B": "continents move with the ocean floor rather than through it",
          "C": "it claims that all continents were never joined together",
          "D": "the plates move much faster than Wegener had imagined",
          "E": "it was proposed by geologists who had never seen the data"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Karşılaştırma",
        "trapWarning": "A ve C Pangea fikrini reddeder; metin bunu söylemez. D ve E metinde yoktur.",
        "explanation": "Kıtalar okyanus tabanını yararak ilerlemez; onunla birlikte taşınır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb053",
    "title": "Fusion Energy: A Milestone and a Long Road",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Science & Lawrence Livermore National Laboratory reports",
    "wordCount": 260,
    "passageText": "Nuclear fusion, the process that powers the Sun, has long been described as the ultimate source of clean energy. By forcing light atoms such as hydrogen to combine into heavier ones, fusion releases enormous amounts of energy without producing the long-lived radioactive waste of conventional nuclear power or the carbon emissions of fossil fuels. The difficulty is that fusion requires extreme temperatures and pressures, and for decades every experiment consumed more energy than it produced.\n\nIn December 2022, scientists at the National Ignition Facility in California announced a historic result. They fired 192 powerful lasers at a tiny capsule of hydrogen fuel, and the resulting fusion reaction released about 3.15 megajoules of energy, more than the 2.05 megajoules delivered by the lasers. For the first time, a fusion experiment had achieved what physicists call ignition, producing more energy from fusion than was put into the fuel.\n\nThe achievement, however, needs to be understood in context. The figure does not include the energy needed to power the lasers themselves, which was more than one hundred times greater than the energy they delivered to the target. The facility can fire only about once a day, whereas a power station would need to repeat the process several times per second. The facility was also designed mainly to support research on nuclear weapons rather than electricity generation. Meanwhile, other projects, such as the international ITER reactor under construction in France, use magnetic fields rather than lasers to contain the hot fuel. Most experts believe that commercial fusion electricity remains decades away, although private companies have promised faster progress.",
    "vocabularyNotes": [
      {
        "word": "ultimate",
        "meaningTr": "nihai, en büyük",
        "contextNote": "the ultimate source: en üstün kaynak."
      },
      {
        "word": "release",
        "meaningTr": "salmak, açığa çıkarmak",
        "contextNote": "İsim olarak salınım anlamı da var."
      },
      {
        "word": "consume",
        "meaningTr": "tüketmek",
        "contextNote": "İsim: consumption."
      },
      {
        "word": "ignition",
        "meaningTr": "ateşleme, tutuşma",
        "contextNote": "ignite (tutuşturmak) fiilinden."
      },
      {
        "word": "contain",
        "meaningTr": "kontrol altında tutmak; içermek",
        "contextNote": "Burada sıcak yakıtı hapsetmek."
      },
      {
        "word": "commercial",
        "meaningTr": "ticari",
        "contextNote": "commercial fusion: ticari füzyon."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "The figure does not include the energy needed to power the lasers themselves, which was more than one hundred times greater than the energy they delivered to the target.",
        "subject": "The figure (rakam)",
        "mainVerb": "does not include (içermez)",
        "objectsAndComplements": "the energy needed to power the lasers themselves (lazerlerin kendisini çalıştırmak için gereken enerjiyi) + [which-clause: hedefe verdikleri enerjinin yüz katından fazla olan]",
        "grammaticalStructures": [
          "Reduced passive relative (the energy [that was] needed to ...).",
          "Reflexive vurgu (the lasers themselves).",
          "Non-defining relative clause (which was ...).",
          "Katlı karşılaştırma (more than one hundred times greater than)."
        ],
        "translationTr": "Bu rakam, lazerlerin kendisini çalıştırmak için gereken enerjiyi içermez; o enerji lazerlerin hedefe ilettiği enerjinin yüz katından fazlaydı."
      }
    ],
    "questions": [
      {
        "id": "rb053_q1",
        "type": "reading",
        "title": "Fusion Energy: A Milestone and a Long Road",
        "question": "According to the passage, fusion is considered an attractive energy source because it _____ .",
        "options": {
          "A": "can be carried out quite easily at normal temperatures and pressures",
          "B": "produces no long-lived radioactive waste or carbon emissions",
          "C": "has already been used in power stations for several decades",
          "D": "requires far less energy than conventional nuclear power",
          "E": "produces more radioactive waste but less carbon dioxide"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Avantaj Detayı",
        "trapWarning": "A ve D aşırı sıcaklık ve basınç gerekliliğiyle çelişir. C şıkkı son paragrafa aykırıdır. E şıkkı atık bilgisini tersine çevirir.",
        "explanation": "Füzyon uzun ömürlü radyoaktif atık ya da karbon emisyonu üretmeden büyük enerji açığa çıkarır (B şıkkı)."
      },
      {
        "id": "rb053_q2",
        "type": "reading",
        "title": "Fusion Energy: A Milestone and a Long Road",
        "question": "The December 2022 experiment was historic because _____ .",
        "options": {
          "A": "it was the first time lasers had been used in fusion research",
          "B": "the reaction released more energy than the lasers delivered",
          "C": "it produced enough electricity to power a small city for a day",
          "D": "it showed that magnetic fields are better than lasers for fusion",
          "E": "it was carried out at the ITER reactor under construction in France"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Önem Tespiti (ignition)",
        "trapWarning": "C şıkkı metinde olmayan bir elektrik üretimi iddiasıdır. D ve E başka projelerle karıştırır. A şıkkı metinde yoktur.",
        "explanation": "Füzyon tepkimesi lazerlerin verdiği 2,05 MJ'den fazla, yaklaşık 3,15 MJ enerji açığa çıkarmıştır (B şıkkı)."
      },
      {
        "id": "rb053_q3",
        "type": "reading",
        "title": "Fusion Energy: A Milestone and a Long Road",
        "question": "The phrase \"needs to be understood in context\" introduces information that _____ .",
        "options": {
          "A": "shows that the result was entirely false and should be withdrawn",
          "B": "limits how far the result brings fusion closer to practical use",
          "C": "proves that fusion will produce electricity within a few years",
          "D": "explains why the lasers were fired at a capsule of hydrogen",
          "E": "suggests that ITER has already achieved a similar result"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Geçiş İfadesinin İşlevi",
        "trapWarning": "A şıkkı aşırıdır: sonuç gerçektir, sadece sınırlıdır. C şıkkı son cümleyle çelişir. D ve E metinde yoktur.",
        "explanation": "Sonraki bilgiler (lazerlerin harcadığı enerji, günde bir atış, amaç) sonucun pratik kullanıma ne kadar yaklaştırdığını sınırlar (B şıkkı)."
      },
      {
        "id": "rb053_q4",
        "type": "reading",
        "title": "Fusion Energy: A Milestone and a Long Road",
        "question": "It can be inferred from the passage that the National Ignition Facility _____ .",
        "options": {
          "A": "will soon be converted into a commercial power station",
          "B": "is far from being able to work like a power station",
          "C": "uses magnetic fields to hold the hot fuel in place",
          "D": "was built mainly to produce cheap electricity",
          "E": "fires its lasers several times every second"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım",
        "trapWarning": "A ve D metinle çelişir: tesis daha çok silah araştırması için tasarlanmıştır. C şıkkı ITER'e aittir. E şıkkı bir santralin ihtiyacıdır, tesisin yaptığı değildir.",
        "explanation": "Tesis günde yaklaşık bir kez atış yapabilir ve lazerleri çok enerji harcar; yani bir santral gibi çalışmaktan çok uzaktır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb054",
    "title": "The Alien Intelligence of the Octopus",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Current Biology & Peter Godfrey-Smith's research",
    "wordCount": 265,
    "passageText": "Octopuses are molluscs, more closely related to snails and clams than to any vertebrate, yet they display a range of abilities that scientists usually associate with intelligent mammals and birds. In laboratories, they have learned to open screw-top jars to reach food, find their way through mazes and recognize individual human keepers, sometimes squirting water at people they appear to dislike. In the wild, some have been observed carrying coconut shells across the seabed and assembling them into shelters, a behaviour that many researchers consider a form of tool use.\n\nWhat makes octopus intelligence especially interesting is that it evolved independently of our own. The last common ancestor of humans and octopuses, which lived more than 500 million years ago, was probably a simple worm-like creature with a very basic nervous system. Complex brains therefore arose at least twice on Earth, along very different paths.\n\nThe octopus nervous system is also organized differently. An octopus has around 500 million neurons, a number comparable to that of a dog, but about two-thirds of them are located not in its central brain but in its eight arms. Each arm can taste, touch and react to its surroundings with considerable independence; an arm separated from the body can still grasp food and attempt to pass it towards where the mouth would be. Some philosophers have suggested that studying such a distributed form of intelligence may help us understand what minds are and how many different ways there may be of having one. The octopus's short lifespan, usually only one or two years, makes its learning abilities all the more remarkable.",
    "vocabularyNotes": [
      {
        "word": "mollusc",
        "meaningTr": "yumuşakça",
        "contextNote": "Salyangoz, midye ve ahtapotu içeren grup."
      },
      {
        "word": "vertebrate",
        "meaningTr": "omurgalı",
        "contextNote": "Zıt anlamlısı: invertebrate."
      },
      {
        "word": "squirt",
        "meaningTr": "fışkırtmak",
        "contextNote": "squirt water at someone."
      },
      {
        "word": "assemble",
        "meaningTr": "bir araya getirmek, monte etmek",
        "contextNote": "İsim: assembly."
      },
      {
        "word": "ancestor",
        "meaningTr": "ata, cet",
        "contextNote": "common ancestor: ortak ata."
      },
      {
        "word": "distributed",
        "meaningTr": "dağıtılmış, yayılmış",
        "contextNote": "distributed intelligence: dağıtık zekâ."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "An octopus has around 500 million neurons, a number comparable to that of a dog, but about two-thirds of them are located not in its central brain but in its eight arms.",
        "subject": "An octopus / about two-thirds of them",
        "mainVerb": "has / are located (sahiptir / bulunur)",
        "objectsAndComplements": "around 500 million neurons + [appositive: bir köpeğinkiyle karşılaştırılabilir bir sayı] + not in ... but in ...",
        "grammaticalStructures": [
          "Appositive (a number comparable to that of a dog).",
          "that of: tekrarı önleyen zamir.",
          "Kesir ifadesi (two-thirds of them).",
          "not A but B yapısı."
        ],
        "translationTr": "Bir ahtapotun bir köpeğinkiyle karşılaştırılabilir sayıda, yaklaşık 500 milyon nöronu vardır, ancak bunların yaklaşık üçte ikisi merkezi beyninde değil sekiz kolunda bulunur."
      }
    ],
    "questions": [
      {
        "id": "rb054_q1",
        "type": "reading",
        "title": "The Alien Intelligence of the Octopus",
        "question": "The example of octopuses carrying coconut shells is given as evidence of _____ .",
        "options": {
          "A": "their ability to recognize individual human keepers",
          "B": "a behaviour that many researchers regard as tool use",
          "C": "their close evolutionary relationship to snails and clams",
          "D": "the independence of their arms from the central brain",
          "E": "their habit of squirting water at people they dislike"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Örneğin İşlevi",
        "trapWarning": "A ve E laboratuvar gözlemleridir. C ve D başka paragraflardaki bilgilerdir.",
        "explanation": "Hindistan cevizi kabuklarını taşıyıp barınak yapmak birçok araştırmacıya göre bir alet kullanımı biçimidir (B şıkkı)."
      },
      {
        "id": "rb054_q2",
        "type": "reading",
        "title": "The Alien Intelligence of the Octopus",
        "question": "According to the passage, octopus intelligence is especially interesting because it _____ .",
        "options": {
          "A": "is identical in structure to the intelligence of mammals",
          "B": "developed separately from the intelligence of humans",
          "C": "was inherited directly from a highly intelligent common ancestor",
          "D": "is found only in octopuses kept in laboratories",
          "E": "depends entirely on the central brain of the animal"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Ana Nokta (evolved independently)",
        "trapWarning": "C şıkkı metinle çelişir: ortak ata basit bir solucan benzeri canlıydı. A ve E üçüncü paragrafla çelişir. D şıkkı vahşi doğa gözlemleriyle çelişir.",
        "explanation": "Ahtapot zekâsı bizimkinden bağımsız olarak evrimleşmiştir (B şıkkı)."
      },
      {
        "id": "rb054_q3",
        "type": "reading",
        "title": "The Alien Intelligence of the Octopus",
        "question": "Which of the following is true about the octopus nervous system?",
        "options": {
          "A": "Most of its neurons are found in its central brain, as in mammals",
          "B": "Much of its processing happens in its arms, not its brain",
          "C": "It has far fewer neurons in total than a typical garden snail",
          "D": "Its arms stop functioning as soon as they are separated",
          "E": "It has about twice as many neurons as a dog"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Doğru Bilgi",
        "trapWarning": "A ve D metinle çelişir. E şıkkı sayıyı bozar: sayı köpeğinkiyle karşılaştırılabilir. C şıkkı metinde yoktur.",
        "explanation": "Nöronların yaklaşık üçte ikisi kollardadır ve her kol önemli ölçüde bağımsız davranabilir (B şıkkı)."
      },
      {
        "id": "rb054_q4",
        "type": "reading",
        "title": "The Alien Intelligence of the Octopus",
        "question": "Why does the author describe the octopus's learning abilities as \"all the more remarkable\"?",
        "options": {
          "A": "Because octopuses are closely related to dogs",
          "B": "Because octopuses live for only a very short time",
          "C": "Because their arms can taste and touch food",
          "D": "Because they were studied mainly by philosophers",
          "E": "Because their common ancestor had no nervous system"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Gerekçe (short lifespan)",
        "trapWarning": "E şıkkı \"very basic nervous system\" ifadesini \"no nervous system\" olarak çarpıtır. A, C ve D bu ifadeyle bağlantılı değildir.",
        "explanation": "Ahtapotlar genellikle sadece bir ya da iki yıl yaşar; bu kısa ömür öğrenme yeteneklerini daha da dikkat çekici kılar (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb055",
    "title": "Why Chatbots Make Things Up",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Communications of the ACM & Nature",
    "wordCount": 267,
    "passageText": "Large language models, the systems behind modern chatbots, can write essays, summarize documents and answer questions in fluent, confident prose. Yet they sometimes produce statements that are simply false: invented quotations, non-existent research papers or incorrect historical dates, delivered with the same confidence as accurate information. Researchers call this behaviour \"hallucination\".\n\nThe cause lies partly in how these systems are built. A language model is trained on enormous quantities of text to predict which word is most likely to come next in a sequence. Through this process it learns grammar, facts and patterns of reasoning, but it does not store information in the way a database does, and it has no built-in way of checking whether a statement is true. When asked about something that appeared rarely in its training data, it may generate an answer that sounds plausible because it follows familiar patterns, even though the content is wrong. Some researchers also argue that common training methods reward models for giving an answer rather than admitting uncertainty.\n\nSeveral approaches are being used to reduce the problem. One is to connect models to external sources such as search engines or document collections, so that they can base their answers on retrieved text and cite it. Another is to train models to express uncertainty or to decline to answer when they lack reliable information. These methods have reduced error rates considerably, but none has eliminated hallucination entirely. For this reason, experts advise users to treat chatbot output in important areas, such as medicine or law, as a starting point to be verified rather than as an authoritative source.",
    "vocabularyNotes": [
      {
        "word": "fluent",
        "meaningTr": "akıcı",
        "contextNote": "İsim: fluency."
      },
      {
        "word": "plausible",
        "meaningTr": "akla yatkın, makul görünen",
        "contextNote": "Zıt anlamlısı: implausible."
      },
      {
        "word": "admit",
        "meaningTr": "kabul etmek, itiraf etmek",
        "contextNote": "admit uncertainty: belirsizliği kabul etmek."
      },
      {
        "word": "retrieve",
        "meaningTr": "geri almak, erişmek",
        "contextNote": "information retrieval: bilgi erişimi."
      },
      {
        "word": "decline",
        "meaningTr": "reddetmek; azalmak",
        "contextNote": "Burada reddetmek: decline to answer."
      },
      {
        "word": "authoritative",
        "meaningTr": "yetkili, güvenilir",
        "contextNote": "an authoritative source: güvenilir kaynak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "When asked about something that appeared rarely in its training data, it may generate an answer that sounds plausible because it follows familiar patterns, even though the content is wrong.",
        "subject": "it (the model) (model)",
        "mainVerb": "may generate (üretebilir)",
        "objectsAndComplements": "an answer [that sounds plausible] + [because-clause] + [even though-clause]",
        "grammaticalStructures": [
          "Kısaltılmış passive zaman cümlesi (When [it is] asked about ...).",
          "Defining relative (something that appeared rarely ...).",
          "sound + sıfat (sounds plausible).",
          "even though: -e rağmen."
        ],
        "translationTr": "Eğitim verilerinde nadiren geçen bir şey sorulduğunda model, içerik yanlış olsa bile tanıdık kalıpları izlediği için akla yatkın görünen bir cevap üretebilir."
      }
    ],
    "questions": [
      {
        "id": "rb055_q1",
        "type": "reading",
        "title": "Why Chatbots Make Things Up",
        "question": "In the passage, \"hallucination\" refers to a language model _____ .",
        "options": {
          "A": "refusing to answer questions about medicine or law",
          "B": "confidently producing information that is false",
          "C": "copying long passages directly from its training data",
          "D": "writing in a style that is difficult to understand",
          "E": "searching the internet without being asked to do so"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Kavram Tanımı",
        "trapWarning": "A şıkkı çözüm olarak önerilen davranışa benzer. C, D ve E metinde halüsinasyonla ilişkilendirilmez.",
        "explanation": "Halüsinasyon, modelin yanlış bilgileri doğru bilgilerle aynı güvenle üretmesidir (B şıkkı)."
      },
      {
        "id": "rb055_q2",
        "type": "reading",
        "title": "Why Chatbots Make Things Up",
        "question": "According to the passage, one reason for hallucination is that language models _____ .",
        "options": {
          "A": "store every fact in a database that is sometimes damaged",
          "B": "predict likely words with no built-in way of checking truth",
          "C": "are trained on too little text to learn grammar properly",
          "D": "are deliberately designed by companies to mislead users",
          "E": "always admit uncertainty when they lack information"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep",
        "trapWarning": "A şıkkı metinle çelişir: model bir veritabanı gibi bilgi saklamaz. C şıkkı tam tersidir. D şıkkı metinde yoktur. E şıkkı sorunun tersidir.",
        "explanation": "Model sonraki olası kelimeyi tahmin eder ve bir ifadenin doğru olup olmadığını kontrol etmenin yerleşik bir yolu yoktur (B şıkkı)."
      },
      {
        "id": "rb055_q3",
        "type": "reading",
        "title": "Why Chatbots Make Things Up",
        "question": "Connecting models to search engines is intended to _____ .",
        "options": {
          "A": "make the models write their answers more quickly and fluently",
          "B": "let models base answers on retrieved sources",
          "C": "replace the need for any training data at all",
          "D": "allow models to delete incorrect answers automatically",
          "E": "make the models refuse to answer most questions"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Amaç",
        "trapWarning": "E şıkkı ikinci yaklaşımla karıştırır ve abartır. A, C ve D metinde yoktur.",
        "explanation": "Amaç modellerin cevaplarını erişilen metinlere dayandırmasını ve kaynak göstermesini sağlamaktır (B şıkkı)."
      },
      {
        "id": "rb055_q4",
        "type": "reading",
        "title": "Why Chatbots Make Things Up",
        "question": "The experts' advice in the last sentence suggests that _____ .",
        "options": {
          "A": "chatbots should never be used for any purpose",
          "B": "chatbot answers on serious matters should be checked",
          "C": "chatbots are now completely reliable on medical questions",
          "D": "lawyers and doctors no longer need to verify sources",
          "E": "hallucination has been fully solved by recent methods"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Tavsiye Yorumu",
        "trapWarning": "A şıkkı aşırıdır: tavsiye bir başlangıç noktası olarak kullanmaktır. C, D ve E \"none has eliminated hallucination entirely\" ile çelişir.",
        "explanation": "Uzmanlar tıp ya da hukuk gibi önemli alanlarda sohbet botu çıktısının doğrulanması gerektiğini söyler (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb056",
    "title": "Rethinking the Hygiene Hypothesis",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from The Lancet & Journal of Allergy and Clinical Immunology",
    "wordCount": 272,
    "passageText": "Over the second half of the twentieth century, allergies, asthma and other immune disorders became far more common in wealthy countries. In 1989, the British epidemiologist David Strachan noticed that children from large families were less likely to develop hay fever, and he suggested that early infections, passed between siblings, might protect against allergy. This idea became known as the hygiene hypothesis: modern societies, it was argued, had become too clean, depriving children's immune systems of the challenges they needed to develop properly.\n\nThe hypothesis was widely popularized, but in its original form it has not held up well. Many common childhood infections, such as measles, do not appear to protect against allergies, and some infections increase the risk of asthma. Moreover, household cleanliness has little relationship with allergy rates, and there is no evidence that washing hands or cleaning kitchens causes allergic disease.\n\nResearchers now favour a modified version sometimes called the \"old friends\" hypothesis. According to this view, what matters is not exposure to dangerous germs but contact with the harmless microorganisms that humans evolved alongside, found in soil, animals, unprocessed food and other people. Studies of Amish and Hutterite communities in the United States support this idea. Both groups share similar genetic backgrounds and lifestyles, but Amish children, who grow up on traditional farms in close contact with animals, have far lower rates of asthma than Hutterite children, whose farms are industrialized. Dust from Amish homes was found to stimulate the immune systems of mice in ways that protected them from asthma. Experts emphasize that this does not mean basic hygiene should be abandoned, since hand washing prevents serious infections.",
    "vocabularyNotes": [
      {
        "word": "sibling",
        "meaningTr": "kardeş",
        "contextNote": "Kız veya erkek kardeşler için genel terim."
      },
      {
        "word": "deprive of",
        "meaningTr": "-den yoksun bırakmak",
        "contextNote": "deprive someone of something."
      },
      {
        "word": "hold up",
        "meaningTr": "geçerliliğini korumak, dayanmak",
        "contextNote": "Bir teori için: hold up well."
      },
      {
        "word": "modified",
        "meaningTr": "değiştirilmiş, uyarlanmış",
        "contextNote": "a modified version: değiştirilmiş bir sürüm."
      },
      {
        "word": "microorganism",
        "meaningTr": "mikroorganizma",
        "contextNote": "micro- + organism."
      },
      {
        "word": "stimulate",
        "meaningTr": "uyarmak, harekete geçirmek",
        "contextNote": "İsim: stimulation."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Amish children, who grow up on traditional farms in close contact with animals, have far lower rates of asthma than Hutterite children, whose farms are industrialized.",
        "subject": "Amish children (Amiş çocukları)",
        "mainVerb": "have (sahiptir)",
        "objectsAndComplements": "far lower rates of asthma than Hutterite children (Huterit çocuklarından çok daha düşük astım oranlarına)",
        "grammaticalStructures": [
          "Non-defining relative (who grow up ...).",
          "far + comparative: çok daha (vurgu).",
          "Possessive relative (whose farms are industrialized).",
          "in close contact with: ile yakın temas içinde."
        ],
        "translationTr": "Hayvanlarla yakın temas içinde geleneksel çiftliklerde büyüyen Amiş çocuklarının astım oranları, çiftlikleri sanayileşmiş olan Huterit çocuklarınınkinden çok daha düşüktür."
      }
    ],
    "questions": [
      {
        "id": "rb056_q1",
        "type": "reading",
        "title": "Rethinking the Hygiene Hypothesis",
        "question": "Strachan's original observation was that _____ .",
        "options": {
          "A": "children who washed their hands very often had more allergies than others",
          "B": "children with many siblings were less likely to get hay fever",
          "C": "measles infections protected children against asthma",
          "D": "allergies were more common on traditional farms",
          "E": "household cleanliness was the main cause of allergies"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Gözlem Detayı",
        "trapWarning": "A ve E metnin reddettiği yorumlardır. C şıkkı ikinci paragrafla çelişir. D şıkkı Amiş verisiyle çelişir.",
        "explanation": "Strachan büyük ailelerden gelen çocukların saman nezlesine daha az yakalandığını fark etmiştir (B şıkkı)."
      },
      {
        "id": "rb056_q2",
        "type": "reading",
        "title": "Rethinking the Hygiene Hypothesis",
        "question": "According to the passage, the original hygiene hypothesis has been weakened because _____ .",
        "options": {
          "A": "allergy rates have fallen sharply in wealthy countries since 1989",
          "B": "many infections do not prevent allergy and cleaning does not cause it",
          "C": "Strachan withdrew the hypothesis shortly after publishing it",
          "D": "children from large families were later found to have more allergies than others",
          "E": "mice were found to be unaffected by household dust"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep",
        "trapWarning": "D şıkkı Strachan'ın gözlemini tersine çevirir. E şıkkı fare deneyiyle çelişir. A ve C metinde yoktur.",
        "explanation": "Birçok enfeksiyon alerjiye karşı korumaz ve ev temizliğinin alerjiye yol açtığına dair kanıt yoktur (B şıkkı)."
      },
      {
        "id": "rb056_q3",
        "type": "reading",
        "title": "Rethinking the Hygiene Hypothesis",
        "question": "According to the \"old friends\" hypothesis, the immune system benefits from _____ .",
        "options": {
          "A": "frequent infections with dangerous germs in early childhood",
          "B": "contact with harmless microbes that humans evolved alongside",
          "C": "avoiding all contact with soil and animals",
          "D": "eating only processed and sterilized food during the first years of life",
          "E": "taking antibiotics regularly during childhood"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Teori Özeti",
        "trapWarning": "A şıkkı eski hipotezin versiyonudur; metin tehlikeli mikropların önemli olmadığını söyler. C ve D teorinin tam tersidir. E şıkkı metinde yoktur.",
        "explanation": "Önemli olan tehlikeli mikroplar değil, insanlarla birlikte evrimleşmiş zararsız mikroorganizmalarla temastır (B şıkkı)."
      },
      {
        "id": "rb056_q4",
        "type": "reading",
        "title": "Rethinking the Hygiene Hypothesis",
        "question": "The comparison between Amish and Hutterite children is useful because the two groups _____ .",
        "options": {
          "A": "live in completely different climates and countries",
          "B": "are similar in genes and lifestyle but farm differently",
          "C": "have both abandoned basic hygiene practices such as regular hand washing",
          "D": "both live on highly industrialized farms",
          "E": "both have very high rates of asthma"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Karşılaştırmanın Değeri",
        "trapWarning": "D ve E grupların farkını yok sayar. C şıkkı metnin son cümlesine aykırıdır. A şıkkı metinle çelişir: ikisi de ABD'dedir.",
        "explanation": "İki grubun genetik ve yaşam tarzı benzer, ama çiftçilik biçimleri farklıdır; bu da farkın nedenini izole etmeyi sağlar (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb057",
    "title": "Exercise as a Treatment for Depression",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from BMJ & British Journal of Sports Medicine",
    "wordCount": 247,
    "passageText": "Depression is one of the leading causes of disability worldwide. The most common treatments are psychotherapy and antidepressant medication, both of which help many patients but not all. Medication can have side effects that lead people to stop taking it, and waiting lists for therapy are often long. For these reasons, researchers have increasingly studied whether physical activity can serve as a treatment in its own right.\n\nThe evidence has grown considerably. A large review published in 2024, combining the results of more than two hundred trials, found that exercise led to moderate reductions in depressive symptoms, comparable to those achieved by psychotherapy and medication. Walking or jogging, yoga and strength training appeared to be among the most effective forms. Interestingly, more intense exercise tended to produce larger benefits, and the effects were seen in people with both mild and more severe depression.\n\nScientists have proposed several explanations. Exercise increases the production of proteins that support the growth of new connections between brain cells, reduces inflammation and improves sleep. It may also have psychological effects, giving people a sense of achievement and, when done in groups, social contact. The researchers noted, however, that many trials were small and of uneven quality, and that people with depression often find it hard to start exercising because the illness itself reduces energy and motivation. They therefore recommended that exercise programmes be supervised and adapted to each person, and that exercise be offered as one option alongside, not instead of, existing treatments.",
    "vocabularyNotes": [
      {
        "word": "disability",
        "meaningTr": "engellilik, iş göremezlik",
        "contextNote": "leading cause of disability: başlıca iş göremezlik nedeni."
      },
      {
        "word": "side effect",
        "meaningTr": "yan etki",
        "contextNote": "Tıbbi metinlerde temel terim."
      },
      {
        "word": "in its own right",
        "meaningTr": "kendi başına, başlı başına",
        "contextNote": "Bağımsız bir değeri olduğunu vurgular."
      },
      {
        "word": "moderate",
        "meaningTr": "ılımlı, orta düzeyde",
        "contextNote": "moderate reduction: orta düzeyde azalma."
      },
      {
        "word": "uneven",
        "meaningTr": "düzensiz, eşit olmayan",
        "contextNote": "of uneven quality: kalitesi değişken."
      },
      {
        "word": "supervise",
        "meaningTr": "denetlemek, gözetmek",
        "contextNote": "İsim: supervision."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "They therefore recommended that exercise programmes be supervised and adapted to each person, and that exercise be offered as one option alongside, not instead of, existing treatments.",
        "subject": "They (araştırmacılar)",
        "mainVerb": "recommended (tavsiye ettiler)",
        "objectsAndComplements": "[that-clause 1: egzersiz programlarının denetlenmesini ve kişiye uyarlanmasını] + [that-clause 2: egzersizin mevcut tedavilerin yerine değil yanında bir seçenek olarak sunulmasını]",
        "grammaticalStructures": [
          "Subjunctive: recommend that + özne + V1 (be supervised, be offered).",
          "Passive subjunctive (be adapted).",
          "alongside, not instead of: yerine değil yanında.",
          "therefore: sonuç bağlacı."
        ],
        "translationTr": "Bu yüzden egzersiz programlarının denetlenmesini ve her kişiye uyarlanmasını, egzersizin de mevcut tedavilerin yerine değil yanında bir seçenek olarak sunulmasını tavsiye ettiler."
      }
    ],
    "questions": [
      {
        "id": "rb057_q1",
        "type": "reading",
        "title": "Exercise as a Treatment for Depression",
        "question": "According to the passage, researchers began studying exercise as a treatment partly because _____ .",
        "options": {
          "A": "psychotherapy and medication have now been shown to be useless for most patients",
          "B": "existing treatments do not help everyone and can be hard to access",
          "C": "exercise has no side effects and costs nothing at all",
          "D": "doctors have stopped prescribing antidepressant medication",
          "E": "depression is no longer a leading cause of disability"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "A şıkkı aşırıdır: tedaviler birçok hastaya yardımcı olur. C ve D metinde yoktur. E şıkkı ilk cümleyle çelişir.",
        "explanation": "Mevcut tedaviler herkese yardımcı olmaz, ilaçların yan etkileri vardır ve terapi için bekleme listeleri uzundur (B şıkkı)."
      },
      {
        "id": "rb057_q2",
        "type": "reading",
        "title": "Exercise as a Treatment for Depression",
        "question": "The 2024 review found that exercise _____ .",
        "options": {
          "A": "helped only those people whose depression was relatively mild",
          "B": "cut symptoms about as much as therapy and medication",
          "C": "was effective only when it was very gentle and lasted a short time",
          "D": "worked better than any other treatment for all patients",
          "E": "had no effect on people with severe depression"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Bulgu",
        "trapWarning": "A ve E metinle çelişir: hafif ve ağır depresyonda etki görülmüştür. C şıkkı tersidir: yoğun egzersiz daha etkilidir. D şıkkı abartılıdır.",
        "explanation": "Egzersiz psikoterapi ve ilaçla karşılaştırılabilir düzeyde, orta derecede belirti azalması sağlamıştır (B şıkkı)."
      },
      {
        "id": "rb057_q3",
        "type": "reading",
        "title": "Exercise as a Treatment for Depression",
        "question": "Which of the following is NOT mentioned as a way in which exercise may help?",
        "options": {
          "A": "Supporting new connections between brain cells",
          "B": "Reducing inflammation",
          "C": "Improving sleep",
          "D": "Lowering the level of sugar in the blood",
          "E": "Providing a sense of achievement"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E üçüncü paragrafta sayılır.",
        "explanation": "Metin kan şekerinden söz etmez (D şıkkı)."
      },
      {
        "id": "rb057_q4",
        "type": "reading",
        "title": "Exercise as a Treatment for Depression",
        "question": "The researchers recommended that exercise programmes be supervised because _____ .",
        "options": {
          "A": "exercise is considered dangerous for most people who suffer from depression",
          "B": "depression can make it hard to find the energy to begin",
          "C": "group exercise always causes conflict between participants",
          "D": "the trials they reviewed were all large and of high quality",
          "E": "medication stops working when patients start to exercise"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Gerekçe",
        "trapWarning": "D şıkkı metinle çelişir: çalışmaların çoğu küçük ve değişken kalitedeydi. A, C ve E metinde yoktur.",
        "explanation": "Hastalığın kendisi enerji ve motivasyonu azalttığı için depresyondaki kişiler egzersize başlamakta zorlanır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb058",
    "title": "The Hidden Salt in Our Diets",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from WHO reports & The New England Journal of Medicine",
    "wordCount": 264,
    "passageText": "High blood pressure is the single most important risk factor for heart attacks and strokes, which together kill more people worldwide than any other cause. One of the main dietary contributors to high blood pressure is sodium, consumed mostly in the form of salt. The World Health Organization recommends that adults eat less than five grams of salt a day, about a teaspoon, but average consumption in most countries is roughly double that amount.\n\nReducing salt intake is harder than it sounds, because most of the salt people eat is not added at the table or during cooking. In many wealthy countries, around three-quarters comes from processed and restaurant foods, such as bread, cheese, processed meats and ready meals. Individuals therefore have limited control over how much they consume. For this reason, public health experts argue that the most effective strategies involve the food industry. The United Kingdom set voluntary targets for manufacturers to reduce the salt content of products gradually, so slowly that consumers would not notice the change in taste. Between 2003 and 2011, average salt intake fell by about fifteen percent, and researchers linked the decline to falling blood pressure and fewer deaths from heart disease and stroke.\n\nAnother promising approach is the use of salt substitutes, in which part of the sodium chloride is replaced with potassium chloride. A large trial in rural China involving more than 20,000 people found that those using a substitute had fewer strokes and deaths over five years. However, potassium can be dangerous for people with advanced kidney disease, so experts recommend that such substitutes be clearly labelled.",
    "vocabularyNotes": [
      {
        "word": "contributor",
        "meaningTr": "katkıda bulunan etken",
        "contextNote": "contribute to fiilinden."
      },
      {
        "word": "intake",
        "meaningTr": "alım, tüketim",
        "contextNote": "salt intake: tuz tüketimi."
      },
      {
        "word": "voluntary",
        "meaningTr": "gönüllü",
        "contextNote": "Zıt anlamlısı: compulsory, mandatory."
      },
      {
        "word": "manufacturer",
        "meaningTr": "üretici",
        "contextNote": "manufacture fiilinden."
      },
      {
        "word": "substitute",
        "meaningTr": "ikame, yerine geçen şey",
        "contextNote": "a substitute for: -in yerine geçen."
      },
      {
        "word": "label",
        "meaningTr": "etiketlemek",
        "contextNote": "clearly labelled: açıkça etiketlenmiş."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "The United Kingdom set voluntary targets for manufacturers to reduce the salt content of products gradually, so slowly that consumers would not notice the change in taste.",
        "subject": "The United Kingdom (Birleşik Krallık)",
        "mainVerb": "set (belirledi)",
        "objectsAndComplements": "voluntary targets for manufacturers to reduce ... (üreticilerin ... azaltması için gönüllü hedefler) + so slowly that ... (o kadar yavaş ki ...)",
        "grammaticalStructures": [
          "for + nesne + to V1: -in -mesi için.",
          "Zarf (gradually) ve onu açıklayan so ... that yapısı.",
          "would not: geçmişte gelecek / beklenti."
        ],
        "translationTr": "Birleşik Krallık, üreticilerin ürünlerdeki tuz miktarını tüketicilerin tat değişikliğini fark etmeyeceği kadar yavaş, kademeli olarak azaltmaları için gönüllü hedefler belirledi."
      }
    ],
    "questions": [
      {
        "id": "rb058_q1",
        "type": "reading",
        "title": "The Hidden Salt in Our Diets",
        "question": "According to the passage, average salt consumption in most countries is _____ .",
        "options": {
          "A": "already below the level recommended by the WHO",
          "B": "about twice the recommended maximum",
          "C": "about one teaspoon per day",
          "D": "highest among people who cook at home",
          "E": "lower than it was in the early 2000s everywhere"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sayısal Detay",
        "trapWarning": "C şıkkı önerilen değerdir. A şıkkı tam tersidir. D ve E metinde yoktur.",
        "explanation": "WHO günde beş gramdan az tavsiye eder; çoğu ülkede ortalama tüketim bunun yaklaşık iki katıdır (B şıkkı)."
      },
      {
        "id": "rb058_q2",
        "type": "reading",
        "title": "The Hidden Salt in Our Diets",
        "question": "Why do individuals have limited control over their salt intake?",
        "options": {
          "A": "Because salt is added by law to all the bread and cheese that is sold",
          "B": "Because most salt comes from processed and restaurant food",
          "C": "Because people are unable to taste the salt in most of the foods they eat",
          "D": "Because doctors rarely give advice about salt",
          "E": "Because salt substitutes are not sold in shops"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep (therefore)",
        "trapWarning": "A şıkkı abartılı ve metinde olmayan bir yasal iddiadır. C, D ve E metinde yoktur.",
        "explanation": "Tüketilen tuzun yaklaşık dörtte üçü işlenmiş ve restoran yiyeceklerinden gelir (B şıkkı)."
      },
      {
        "id": "rb058_q3",
        "type": "reading",
        "title": "The Hidden Salt in Our Diets",
        "question": "The British approach to salt reduction was designed so that _____ .",
        "options": {
          "A": "manufacturers would be fined for exceeding legal limits",
          "B": "consumers would not notice the gradual change in taste",
          "C": "salt would be replaced entirely by potassium chloride",
          "D": "restaurants would add less salt at the table",
          "E": "people would stop buying processed food"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yöntem Detayı",
        "trapWarning": "A şıkkı tuzaktır: hedefler gönüllüydü. C şıkkı ikinci yaklaşımla karıştırır ve abartır. D ve E metinde yoktur.",
        "explanation": "Tuz, tüketicilerin tat değişikliğini fark etmeyeceği kadar yavaş azaltılmıştır (B şıkkı)."
      },
      {
        "id": "rb058_q4",
        "type": "reading",
        "title": "The Hidden Salt in Our Diets",
        "question": "Experts recommend that salt substitutes be clearly labelled because _____ .",
        "options": {
          "A": "they increase the risk of stroke even among people who are healthy",
          "B": "potassium can harm people with serious kidney disease",
          "C": "they taste very different from the ordinary salt people are used to",
          "D": "they are more expensive than normal salt",
          "E": "they contain more sodium than ordinary salt"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Gerekçe",
        "trapWarning": "A şıkkı deney sonucunun tersidir. E şıkkı tanımla çelişir. C ve D metinde yoktur.",
        "explanation": "Potasyum ileri böbrek hastalığı olanlar için tehlikeli olabilir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb059",
    "title": "Telemedicine After the Pandemic",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from Health Affairs & The Lancet Digital Health",
    "wordCount": 262,
    "passageText": "Before 2020, telemedicine, the delivery of health care through video calls, telephone and online messaging, was a small part of medical practice in most countries. Regulations often restricted it, insurers were reluctant to pay for it, and many doctors doubted that they could assess patients properly without seeing them in person. When the COVID-19 pandemic made face-to-face appointments risky, these barriers fell almost overnight. In some health systems, more than half of all consultations took place remotely during the first months of the crisis.\n\nAs the pandemic eased, the use of telemedicine declined but remained well above its earlier level. Patients and doctors had discovered its advantages. Remote appointments save travel time and costs, which is especially valuable for people in rural areas, those with mobility problems and workers who cannot easily take time off. They have proved particularly suitable for mental health care, routine follow-up appointments and the management of chronic conditions such as diabetes, where patients can share readings from home devices.\n\nTelemedicine also has limitations. Some conditions require a physical examination, and doctors worry that important signs may be missed during a video call. Studies suggest that remote consultations may lead to more follow-up visits in some cases, reducing the savings. There are also concerns about a \"digital divide\": older people, those on low incomes and people with limited internet access may find remote care harder to use, potentially widening existing health inequalities. Most experts now expect a hybrid model in which patients and doctors choose between remote and in-person care depending on the medical situation and the patient's preferences.",
    "vocabularyNotes": [
      {
        "word": "reluctant",
        "meaningTr": "isteksiz, gönülsüz",
        "contextNote": "be reluctant to + V1."
      },
      {
        "word": "assess",
        "meaningTr": "değerlendirmek",
        "contextNote": "İsim: assessment."
      },
      {
        "word": "consultation",
        "meaningTr": "muayene, danışma",
        "contextNote": "consult (danışmak) fiilinden."
      },
      {
        "word": "remotely",
        "meaningTr": "uzaktan",
        "contextNote": "remote: uzak."
      },
      {
        "word": "mobility",
        "meaningTr": "hareket kabiliyeti",
        "contextNote": "mobility problems: hareket kısıtlılığı."
      },
      {
        "word": "inequality",
        "meaningTr": "eşitsizlik",
        "contextNote": "health inequalities: sağlık eşitsizlikleri."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Older people, those on low incomes and people with limited internet access may find remote care harder to use, potentially widening existing health inequalities.",
        "subject": "Older people, those on low incomes and people with limited internet access",
        "mainVerb": "may find (bulabilir)",
        "objectsAndComplements": "remote care harder to use (uzaktan bakımı kullanması daha zor) + [participle: mevcut sağlık eşitsizliklerini potansiyel olarak genişleterek]",
        "grammaticalStructures": [
          "Üç öğeli özne listesi.",
          "find + nesne + sıfat + to V1 (find it hard to use).",
          "Sonuç bildiren -ing (potentially widening ...).",
          "those on low incomes: düşük gelirli olanlar."
        ],
        "translationTr": "Yaşlılar, düşük gelirliler ve internet erişimi sınırlı olan kişiler uzaktan bakımı kullanmayı daha zor bulabilir; bu da mevcut sağlık eşitsizliklerini potansiyel olarak artırabilir."
      }
    ],
    "questions": [
      {
        "id": "rb059_q1",
        "type": "reading",
        "title": "Telemedicine After the Pandemic",
        "question": "According to the passage, before 2020 telemedicine was limited partly because _____ .",
        "options": {
          "A": "patients did not own telephones or computers",
          "B": "rules restricted it and insurers were unwilling to pay",
          "C": "doctors were not allowed to see patients in person",
          "D": "it was more expensive than face-to-face appointments",
          "E": "it had been banned by several international health organizations"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Engel Tespiti",
        "trapWarning": "C şıkkı durumu tersine çevirir. A, D ve E metinde olmayan nedenlerdir.",
        "explanation": "Düzenlemeler onu kısıtlıyordu ve sigortacılar ödeme yapmaya isteksizdi (B şıkkı)."
      },
      {
        "id": "rb059_q2",
        "type": "reading",
        "title": "Telemedicine After the Pandemic",
        "question": "After the pandemic, the use of telemedicine _____ .",
        "options": {
          "A": "disappeared almost completely once the pandemic was over",
          "B": "fell but stayed well above its level before 2020",
          "C": "continued to account for most consultations in health systems",
          "D": "was banned in most health systems",
          "E": "was limited to emergency cases"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Eğilim",
        "trapWarning": "A ve D aşırıdır. C şıkkı pandeminin ilk aylarındaki durumu genelleştirir. E şıkkı metinde yoktur.",
        "explanation": "Kullanım azalmış ama önceki seviyesinin oldukça üzerinde kalmıştır (B şıkkı)."
      },
      {
        "id": "rb059_q3",
        "type": "reading",
        "title": "Telemedicine After the Pandemic",
        "question": "Which type of care is described as particularly suitable for remote appointments?",
        "options": {
          "A": "Emergency surgery",
          "B": "Mental health care",
          "C": "Physical examinations of the chest",
          "D": "Treatment of broken bones",
          "E": "Vaccination of young children"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay",
        "trapWarning": "A, C, D ve E fiziksel muayene ya da müdahale gerektirir; metin bunun bir sınırlılık olduğunu söyler.",
        "explanation": "Uzaktan randevular özellikle ruh sağlığı bakımı, rutin kontroller ve kronik hastalık yönetimi için uygundur (B şıkkı)."
      },
      {
        "id": "rb059_q4",
        "type": "reading",
        "title": "Telemedicine After the Pandemic",
        "question": "The \"digital divide\" mentioned in the passage refers to the risk that _____ .",
        "options": {
          "A": "doctors will divide their limited time unfairly between different patients",
          "B": "some groups may benefit less from remote care, widening inequality",
          "C": "rural areas will have faster internet than cities",
          "D": "hospitals will stop offering face-to-face appointments",
          "E": "younger doctors will refuse to use video calls"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kavram",
        "trapWarning": "A şıkkı kelimenin \"divide\" kısmına dayanan tuzaktır. C, D ve E metinde yoktur.",
        "explanation": "Yaşlılar, düşük gelirliler ve internet erişimi sınırlı olanlar uzaktan bakımdan daha az yararlanabilir ve eşitsizlik artabilir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb060",
    "title": "Artificial Intelligence in the Radiology Room",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from Radiology & The Lancet Oncology",
    "wordCount": 263,
    "passageText": "In 2016, a leading computer scientist predicted that people should stop training radiologists, because within five years artificial intelligence would read medical images better than humans. Nearly a decade later, the number of radiologists has not fallen; in many countries there is a severe shortage of them. The prediction failed, but not because AI proved useless. Rather, it underestimated both the complexity of radiologists' work and the ways in which humans and machines could work together.\n\nAI systems have indeed achieved impressive results in specific tasks, such as detecting lung nodules on CT scans or signs of breast cancer on mammograms. A large Swedish trial published in 2023 found that screening in which AI supported a single radiologist detected about twenty percent more cancers than the standard method, in which two radiologists read each mammogram independently, while reducing the radiologists' workload by almost half. Importantly, the AI did not make the final decisions; it highlighted suspicious areas and helped decide which images needed closer examination.\n\nRadiologists do much more than identify abnormalities in a single image. They compare current scans with previous ones, consider a patient's history and symptoms, communicate with other doctors and decide which further tests are needed. AI systems also have weaknesses: a system trained on images from one hospital may perform worse on images from another hospital that uses different equipment, and false positives can lead to unnecessary anxiety and procedures. Many experts now believe that the most likely future is not one in which machines replace radiologists, but one in which radiologists who use AI replace those who do not.",
    "vocabularyNotes": [
      {
        "word": "radiologist",
        "meaningTr": "radyolog",
        "contextNote": "Tıbbi görüntüleri yorumlayan uzman."
      },
      {
        "word": "underestimate",
        "meaningTr": "küçümsemek, olduğundan az tahmin etmek",
        "contextNote": "Zıt anlamlısı: overestimate."
      },
      {
        "word": "nodule",
        "meaningTr": "nodül, yumru",
        "contextNote": "lung nodule: akciğer nodülü."
      },
      {
        "word": "workload",
        "meaningTr": "iş yükü",
        "contextNote": "reduce the workload: iş yükünü azaltmak."
      },
      {
        "word": "abnormality",
        "meaningTr": "anormallik",
        "contextNote": "abnormal: anormal."
      },
      {
        "word": "false positive",
        "meaningTr": "yanlış pozitif",
        "contextNote": "Var olmayan bir durumu varmış gibi gösteren sonuç."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Many experts now believe that the most likely future is not one in which machines replace radiologists, but one in which radiologists who use AI replace those who do not.",
        "subject": "Many experts (birçok uzman)",
        "mainVerb": "believe (inanır)",
        "objectsAndComplements": "[that-clause: en olası geleceğin makinelerin radyologların yerini aldığı değil, yapay zekâ kullanan radyologların kullanmayanların yerini aldığı bir gelecek olduğu]",
        "grammaticalStructures": [
          "not one ... but one ...: one = future (tekrardan kaçınma).",
          "in which: edatlı relative clause.",
          "who use AI / those who do not: zamir + relative clause, eksiltili yapı (do not [use AI])."
        ],
        "translationTr": "Birçok uzman artık en olası geleceğin makinelerin radyologların yerini aldığı bir gelecek değil, yapay zekâ kullanan radyologların kullanmayanların yerini aldığı bir gelecek olduğuna inanıyor."
      }
    ],
    "questions": [
      {
        "id": "rb060_q1",
        "type": "reading",
        "title": "Artificial Intelligence in the Radiology Room",
        "question": "According to the passage, the 2016 prediction failed mainly because it _____ .",
        "options": {
          "A": "overestimated the number of radiologists in training",
          "B": "underestimated the complexity of radiology and of teamwork with AI",
          "C": "was based on early AI systems that were not able to read images at all",
          "D": "ignored the fact that AI systems are far more expensive than radiologists",
          "E": "assumed that patients would refuse to be examined by machines"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep (not because ... Rather ...)",
        "trapWarning": "C şıkkı \"not because AI proved useless\" ifadesiyle çelişir. A, D ve E metinde yoktur.",
        "explanation": "Tahmin, radyologların işinin karmaşıklığını ve insan-makine iş birliğini küçümsemişti (B şıkkı)."
      },
      {
        "id": "rb060_q2",
        "type": "reading",
        "title": "Artificial Intelligence in the Radiology Room",
        "question": "The Swedish trial found that screening supported by AI _____ .",
        "options": {
          "A": "detected fewer cancers but saved a great deal of time",
          "B": "found more cancers while reducing radiologists' workload",
          "C": "allowed AI to make the final decision on every image",
          "D": "required three radiologists to read each image",
          "E": "produced no false positives at all, unlike the standard method"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Deney Sonucu",
        "trapWarning": "A şıkkı sonucun ilk kısmını tersine çevirir. C şıkkı \"the AI did not make the final decisions\" ile çelişir. D ve E metinde yoktur.",
        "explanation": "Yapay zekâ destekli tarama yaklaşık yüzde yirmi daha fazla kanser bulmuş ve iş yükünü neredeyse yarıya indirmiştir (B şıkkı)."
      },
      {
        "id": "rb060_q3",
        "type": "reading",
        "title": "Artificial Intelligence in the Radiology Room",
        "question": "Which of the following is mentioned as a weakness of AI systems?",
        "options": {
          "A": "They are unable to detect lung nodules on CT scans of the chest",
          "B": "They may perform worse on images from different equipment",
          "C": "They are unable to highlight suspicious areas",
          "D": "They always miss the early signs of breast cancer on mammograms",
          "E": "They refuse to compare current scans with previous ones"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Zayıflık Tespiti",
        "trapWarning": "A ve D ikinci paragrafla çelişir. C şıkkı İsveç deneyiyle çelişir. E şıkkı metinde yoktur.",
        "explanation": "Bir hastanenin görüntüleriyle eğitilen sistem, farklı ekipman kullanan başka bir hastanede daha kötü performans gösterebilir (B şıkkı)."
      },
      {
        "id": "rb060_q4",
        "type": "reading",
        "title": "Artificial Intelligence in the Radiology Room",
        "question": "The final sentence suggests that radiologists in the future _____ .",
        "options": {
          "A": "will be completely replaced by machines",
          "B": "will need to work with AI to remain competitive",
          "C": "should avoid using AI in order to keep their jobs",
          "D": "will only check the decisions made by AI",
          "E": "will no longer need to consider patients' histories"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Son Cümle Yorumu",
        "trapWarning": "A şıkkı cümlenin açıkça reddettiği senaryodur. C şıkkı tersidir. D ve E metinle çelişir.",
        "explanation": "Yapay zekâ kullanan radyologlar kullanmayanların yerini alacaktır; yani rekabetçi kalmak için yapay zekâyla çalışmak gerekecektir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb061",
    "title": "The Printing Press and the Spread of Ideas",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Elizabeth Eisenstein's work & The Journal of Economic History",
    "wordCount": 277,
    "passageText": "Around 1450, Johannes Gutenberg developed a printing press with movable metal type in the German city of Mainz. Printing itself was not new; woodblock printing had been used in China for centuries, and movable type made of ceramic and later metal had been invented in East Asia. Gutenberg's achievement was to combine several technologies, including a durable metal alloy for the type, an oil-based ink and a press adapted from those used to make wine, into a system that could produce books quickly and relatively cheaply.\n\nThe technology spread with remarkable speed. By 1500, printing presses operated in more than two hundred European cities, and an estimated twenty million books had been printed. The price of books fell sharply, and texts that had previously existed in only a few handwritten copies became widely available. Historians have linked printing to several major developments. During the Protestant Reformation, Martin Luther's writings were printed and distributed in hundreds of thousands of copies, spreading his ideas far faster than church authorities could suppress them. Printing also allowed scientists to share precise diagrams and data, and to build on one another's work more reliably, since printed copies did not accumulate the errors that crept into manuscripts copied by hand.\n\nEconomic historians have found that European cities that adopted printing early grew faster in the following century than similar cities that did not. Yet some scholars warn against treating the press as the sole cause of these changes. Literacy rates remained low for a long time, and printing could spread misinformation and propaganda as easily as scholarship. The press, in this view, amplified existing social and intellectual currents rather than creating them on its own.",
    "vocabularyNotes": [
      {
        "word": "movable type",
        "meaningTr": "hareketli harf",
        "contextNote": "Matbaacılık terimi."
      },
      {
        "word": "durable",
        "meaningTr": "dayanıklı",
        "contextNote": "Eş anlamlısı: long-lasting, robust."
      },
      {
        "word": "alloy",
        "meaningTr": "alaşım",
        "contextNote": "Metal karışımı."
      },
      {
        "word": "suppress",
        "meaningTr": "bastırmak",
        "contextNote": "İsim: suppression."
      },
      {
        "word": "creep into",
        "meaningTr": "sızmak, gizlice girmek",
        "contextNote": "errors crept into: hatalar sızdı."
      },
      {
        "word": "amplify",
        "meaningTr": "güçlendirmek, büyütmek",
        "contextNote": "Ses için yükseltmek anlamı da vardır."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "The press, in this view, amplified existing social and intellectual currents rather than creating them on its own.",
        "subject": "The press (matbaa)",
        "mainVerb": "amplified (güçlendirdi)",
        "objectsAndComplements": "existing social and intellectual currents (var olan sosyal ve entelektüel akımları) + rather than creating them on its own (onları kendi başına yaratmak yerine)",
        "grammaticalStructures": [
          "Araya giren ifade (in this view).",
          "rather than + V-ing.",
          "on its own: kendi başına."
        ],
        "translationTr": "Bu görüşe göre matbaa, var olan sosyal ve entelektüel akımları kendi başına yaratmaktan çok onları güçlendirmiştir."
      }
    ],
    "questions": [
      {
        "id": "rb061_q1",
        "type": "reading",
        "title": "The Printing Press and the Spread of Ideas",
        "question": "According to the passage, Gutenberg's main achievement was _____ .",
        "options": {
          "A": "inventing the very first method of printing anywhere in the world",
          "B": "combining several technologies into an efficient printing system",
          "C": "introducing woodblock printing to Europe from China",
          "D": "being the first person to make movable type out of ceramic",
          "E": "creating a press that could print only religious texts"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay (Gutenberg's achievement was to combine ...)",
        "trapWarning": "A ve D metinle çelişir: baskı ve hareketli harf daha önce Doğu Asya'da vardı. C ve E metinde yoktur.",
        "explanation": "Gutenberg'in başarısı metal alaşım, yağ bazlı mürekkep ve pres gibi teknolojileri verimli bir sistemde birleştirmekti (B şıkkı)."
      },
      {
        "id": "rb061_q2",
        "type": "reading",
        "title": "The Printing Press and the Spread of Ideas",
        "question": "Printing helped science because printed copies _____ .",
        "options": {
          "A": "were always written in Latin so that all scholars could read them",
          "B": "did not collect the copying errors found in manuscripts",
          "C": "were more expensive and therefore treated with greater care",
          "D": "could be read only by trained scientists and church leaders",
          "E": "were protected from censorship by the church authorities"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep (since printed copies did not accumulate the errors)",
        "trapWarning": "C şıkkı fiyat bilgisini tersine çevirir. A, D ve E metinde yoktur.",
        "explanation": "Basılı kopyalar el yazmalarına sızan hataları biriktirmiyordu; bu da bilimsel çalışmanın daha güvenilir paylaşılmasını sağladı (B şıkkı)."
      },
      {
        "id": "rb061_q3",
        "type": "reading",
        "title": "The Printing Press and the Spread of Ideas",
        "question": "Luther's case is used to illustrate _____ .",
        "options": {
          "A": "how the church itself used the new presses to spread its own message across Europe",
          "B": "how printing let ideas spread faster than they could be suppressed",
          "C": "why literacy rates remained low throughout Europe for a long time afterwards",
          "D": "why books became more expensive after 1500",
          "E": "how scientists shared diagrams and data"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin İşlevi",
        "trapWarning": "A şıkkı tersidir: kilise bastırmaya çalışmıştır. C, D ve E başka bilgilerle karıştırır.",
        "explanation": "Luther'in yazıları kilise otoritelerinin bastırabileceğinden çok daha hızlı yayılmıştır (B şıkkı)."
      },
      {
        "id": "rb061_q4",
        "type": "reading",
        "title": "The Printing Press and the Spread of Ideas",
        "question": "The scholars mentioned in the last paragraph argue that the printing press _____ .",
        "options": {
          "A": "had no effect on European society or economic growth",
          "B": "strengthened changes already under way rather than causing them",
          "C": "spread only accurate scholarship and never misinformation",
          "D": "was the single cause of the Reformation and the scientific revolution",
          "E": "immediately made most Europeans able to read"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş Yorumu (amplified ... rather than creating)",
        "trapWarning": "A şıkkı aşırıdır. C ve E metinle çelişir. D şıkkı bu görüşün özellikle reddettiği fikirdir.",
        "explanation": "Bu görüşe göre matbaa var olan akımları güçlendirmiş, onları tek başına yaratmamıştır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb062",
    "title": "Building Hagia Sophia",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from studies of Byzantine architecture",
    "wordCount": 282,
    "passageText": "When the Byzantine emperor Justinian ordered the construction of a new cathedral in Constantinople after riots destroyed its predecessor in 532, he chose two unusual designers. Anthemius of Tralles and Isidore of Miletus were not primarily builders but mathematicians and experts in geometry and mechanics. Their design was astonishingly ambitious: a vast rectangular hall covered by a central dome more than thirty metres in diameter, apparently floating above a ring of forty windows. Remarkably, the building was completed in less than six years.\n\nThe central engineering problem was how to place a round dome on a square base. The architects solved it with pendentives, curved triangular sections of masonry that rise from the four corners of the square and gradually turn it into a circle on which the dome can rest. Although pendentives had been used before on a small scale, never had they supported a dome of such size. To reduce weight, the builders used thin bricks and a large amount of mortar, and the windows at the base of the dome lightened the structure while flooding the interior with light.\n\nThe ambition came at a cost. In 558, an earthquake caused the original dome to collapse. Isidore the Younger, a nephew of one of the original architects, rebuilt it with a steeper profile, which reduced the outward pressure on the supporting walls, and massive buttresses were later added outside. Parts of the dome collapsed again in later centuries and were repaired. Nevertheless, the building has survived for nearly fifteen hundred years in one of the most earthquake-prone cities in the world, serving as a cathedral, a mosque, a museum and again a mosque, and influencing the design of Ottoman mosques for centuries.",
    "vocabularyNotes": [
      {
        "word": "predecessor",
        "meaningTr": "selef, önceki",
        "contextNote": "Zıt anlamlısı: successor."
      },
      {
        "word": "ambitious",
        "meaningTr": "iddialı, hırslı",
        "contextNote": "İsim: ambition."
      },
      {
        "word": "masonry",
        "meaningTr": "taş/tuğla örgü, duvarcılık",
        "contextNote": "Mimari terim."
      },
      {
        "word": "mortar",
        "meaningTr": "harç",
        "contextNote": "Tuğlaları birbirine bağlayan karışım."
      },
      {
        "word": "buttress",
        "meaningTr": "payanda, destek duvarı",
        "contextNote": "Mecazi olarak desteklemek fiili de olur."
      },
      {
        "word": "earthquake-prone",
        "meaningTr": "depreme yatkın",
        "contextNote": "-prone: -e yatkın."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Although pendentives had been used before on a small scale, never had they supported a dome of such size.",
        "subject": "they (pendantifler)",
        "mainVerb": "had supported (desteklemişti) – devrik yapı",
        "objectsAndComplements": "a dome of such size (bu büyüklükte bir kubbe)",
        "grammaticalStructures": [
          "Although: -e rağmen.",
          "Past perfect passive (had been used).",
          "Devrik yapı: Never + had + özne + V3 (olumsuz zarf başta).",
          "such + isim: böyle bir ..."
        ],
        "translationTr": "Pandantifler daha önce küçük ölçekte kullanılmış olsa da, hiçbir zaman bu büyüklükte bir kubbeyi taşımamışlardı."
      }
    ],
    "questions": [
      {
        "id": "rb062_q1",
        "type": "reading",
        "title": "Building Hagia Sophia",
        "question": "What was unusual about the designers chosen by Justinian?",
        "options": {
          "A": "They had never been to Constantinople before they were chosen",
          "B": "They were mainly mathematicians, not builders",
          "C": "They had designed the cathedral destroyed in 532",
          "D": "They refused to use domes in their buildings",
          "E": "They came from the same family"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay",
        "trapWarning": "E şıkkı son paragraftaki yeğen bilgisini yanlış genelleştirir. A, C ve D metinde yoktur.",
        "explanation": "Anthemius ve Isidore öncelikle inşaatçı değil, geometri ve mekanik uzmanı matematikçilerdi (B şıkkı)."
      },
      {
        "id": "rb062_q2",
        "type": "reading",
        "title": "Building Hagia Sophia",
        "question": "According to the passage, pendentives were used to _____ .",
        "options": {
          "A": "make the dome lighter by adding many windows",
          "B": "allow a round dome to rest on a square base",
          "C": "protect the building from riots and fire",
          "D": "replace the bricks and mortar of the walls",
          "E": "make the interior of the cathedral darker"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "İşlev",
        "trapWarning": "A şıkkı pencerelerin işleviyle karıştırır. E şıkkı tam tersidir. C ve D metinde yoktur.",
        "explanation": "Pendantifler kare tabanı yavaş yavaş daireye çevirerek yuvarlak kubbenin oturmasını sağlar (B şıkkı)."
      },
      {
        "id": "rb062_q3",
        "type": "reading",
        "title": "Building Hagia Sophia",
        "question": "Why did Isidore the Younger rebuild the dome with a steeper profile?",
        "options": {
          "A": "To make the building look more like an Ottoman mosque",
          "B": "To reduce the outward pressure on the walls",
          "C": "To add a second ring of forty windows",
          "D": "To use fewer bricks and less mortar",
          "E": "To make space for a larger congregation"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Amaç",
        "trapWarning": "A şıkkı kronolojiyi bozar. C, D ve E metinde bu nedenle ilişkilendirilmez.",
        "explanation": "Daha dik profil destek duvarları üzerindeki dışa doğru basıncı azaltmıştır (B şıkkı)."
      },
      {
        "id": "rb062_q4",
        "type": "reading",
        "title": "Building Hagia Sophia",
        "question": "The author's attitude towards Hagia Sophia's design can best be described as _____ .",
        "options": {
          "A": "critical, as the building has been a repeated failure",
          "B": "admiring, while acknowledging the problems it faced",
          "C": "indifferent, as the building has no lasting influence",
          "D": "sceptical about whether it was completed so quickly",
          "E": "hostile to the use of mathematics in architecture"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yazarın Tutumu",
        "trapWarning": "A şıkkı çöküşleri abartır ve binanın 1500 yıllık varlığını yok sayar. C şıkkı Osmanlı camilerine etkisiyle çelişir. D ve E metinde yoktur.",
        "explanation": "Yazar tasarımı \"astonishingly ambitious\" olarak över ama çöküşleri de belirtir; hayranlık içinde sorunları da kabul eder (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb063",
    "title": "The Columbian Exchange",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Alfred Crosby's research & Journal of Economic Perspectives",
    "wordCount": 265,
    "passageText": "When Christopher Columbus reached the Caribbean in 1492, he connected two hemispheres whose plants, animals and diseases had evolved separately for thousands of years. The transfer of living things that followed, which the historian Alfred Crosby named the Columbian Exchange, transformed diets, economies and populations on both sides of the Atlantic.\n\nFrom the Americas came maize, potatoes, tomatoes, chilli peppers, cacao and cassava. Many of these crops became staples elsewhere. The potato, which produces more calories per hectare than most grains and grows well in cool climates, helped support rapid population growth in northern Europe, and some economists estimate that it accounts for roughly a quarter of the increase in the Old World's population between 1700 and 1900. Maize and cassava spread widely in Africa and Asia. In the other direction, Europeans brought wheat, sugar cane, coffee, horses, cattle and pigs to the Americas. Horses transformed the way of life of many Native American peoples on the Great Plains, who became skilled mounted hunters.\n\nThe exchange also had devastating consequences. Europeans carried diseases such as smallpox, measles and influenza, to which the inhabitants of the Americas had no immunity. Epidemics killed a large proportion of the indigenous population, in many regions perhaps as much as ninety percent, within a century of contact. The resulting shortage of labour, combined with the profitability of sugar plantations, was one of the factors behind the expansion of the Atlantic slave trade, which forcibly transported more than twelve million Africans across the ocean. The Columbian Exchange was therefore not simply a sharing of resources but a process shaped by conquest, disease and coercion.",
    "vocabularyNotes": [
      {
        "word": "hemisphere",
        "meaningTr": "yarımküre",
        "contextNote": "hemi- (yarım) + sphere."
      },
      {
        "word": "staple",
        "meaningTr": "temel gıda",
        "contextNote": "staple food: temel besin."
      },
      {
        "word": "account for",
        "meaningTr": "-i oluşturmak; açıklamak",
        "contextNote": "Burada oran olarak oluşturmak."
      },
      {
        "word": "devastating",
        "meaningTr": "yıkıcı",
        "contextNote": "devastate (harap etmek) fiilinden."
      },
      {
        "word": "profitability",
        "meaningTr": "kârlılık",
        "contextNote": "profitable: kârlı."
      },
      {
        "word": "coercion",
        "meaningTr": "zorlama, baskı",
        "contextNote": "coerce: zorlamak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "The resulting shortage of labour, combined with the profitability of sugar plantations, was one of the factors behind the expansion of the Atlantic slave trade.",
        "subject": "The resulting shortage of labour (ortaya çıkan işgücü kıtlığı)",
        "mainVerb": "was (idi)",
        "objectsAndComplements": "one of the factors behind the expansion of the Atlantic slave trade (Atlantik köle ticaretinin genişlemesinin ardındaki etkenlerden biri)",
        "grammaticalStructures": [
          "resulting: sonuç olarak ortaya çıkan (sıfat olarak -ing).",
          "Araya giren past participle öbeği (combined with ...).",
          "one of the + çoğul isim."
        ],
        "translationTr": "Bunun sonucunda ortaya çıkan işgücü kıtlığı, şeker plantasyonlarının kârlılığıyla birleşince Atlantik köle ticaretinin genişlemesinin ardındaki etkenlerden biri oldu."
      }
    ],
    "questions": [
      {
        "id": "rb063_q1",
        "type": "reading",
        "title": "The Columbian Exchange",
        "question": "According to the passage, the potato contributed to population growth in Europe because it _____ .",
        "options": {
          "A": "was the only crop that could be grown in Europe at the time",
          "B": "yields many calories per hectare and suits cool climates",
          "C": "was introduced to Europe by Native Americans on horseback",
          "D": "replaced wheat completely in the diets of most Europeans",
          "E": "could be stored for many years without losing its value"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "A ve D aşırı iddialardır. C ve E metinde yoktur.",
        "explanation": "Patates çoğu tahıldan daha fazla kalori verir ve serin iklimde iyi yetişir (B şıkkı)."
      },
      {
        "id": "rb063_q2",
        "type": "reading",
        "title": "The Columbian Exchange",
        "question": "Which of the following was brought from Europe to the Americas?",
        "options": {
          "A": "Potatoes",
          "B": "Horses",
          "C": "Maize",
          "D": "Cacao",
          "E": "Cassava"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Yön Ayrımı",
        "trapWarning": "A, C, D ve E Amerika'dan diğer kıtalara giden ürünlerdir.",
        "explanation": "Avrupalılar Amerika'ya buğday, şeker kamışı, kahve, at, sığır ve domuz getirmiştir (B şıkkı)."
      },
      {
        "id": "rb063_q3",
        "type": "reading",
        "title": "The Columbian Exchange",
        "question": "According to the passage, one factor behind the growth of the Atlantic slave trade was _____ .",
        "options": {
          "A": "the rapid spread of the potato across the farms of northern Europe",
          "B": "the labour shortage caused by epidemics among native peoples",
          "C": "the arrival of horses on the Great Plains",
          "D": "the immunity of Africans to all European diseases",
          "E": "the gradual decline of the sugar plantations in the Caribbean"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep-Sonuç Zinciri",
        "trapWarning": "E şıkkı metne aykırıdır: plantasyonların kârlılığı bir etkendir. D şıkkı metinde olmayan bir iddiadır. A ve C ilgisizdir.",
        "explanation": "Salgınların yol açtığı işgücü kıtlığı, şeker plantasyonlarının kârlılığıyla birlikte köle ticaretinin genişlemesine katkıda bulunmuştur (B şıkkı)."
      },
      {
        "id": "rb063_q4",
        "type": "reading",
        "title": "The Columbian Exchange",
        "question": "The last sentence suggests that the Columbian Exchange _____ .",
        "options": {
          "A": "was an equal and peaceful sharing of resources between continents",
          "B": "involved violence and suffering as well as resources",
          "C": "benefited the inhabitants of the Americas more than Europeans",
          "D": "had little effect on the diets of people in Africa and Asia",
          "E": "ended within a few decades of Columbus's first voyage"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sonuç Yorumu",
        "trapWarning": "A şıkkı son cümlenin reddettiği yorumdur. C ve D metinle çelişir. E şıkkı metinde yoktur.",
        "explanation": "Değişim basit bir kaynak paylaşımı değil; fetih, hastalık ve zorlamayla şekillenmiş bir süreçtir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb064",
    "title": "The Antikythera Mechanism",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Nature & Scientific Reports",
    "wordCount": 281,
    "passageText": "In 1901, sponge divers exploring a Roman-era shipwreck off the Greek island of Antikythera recovered bronze statues, glassware and a lump of corroded bronze and wood about the size of a shoebox. It was some time before anyone noticed that the lump contained gear wheels. Over the following century, researchers gradually realized that they were looking at the oldest known analogue computer, built in the second or first century BC.\n\nThe device was operated by turning a hand crank, which drove a system of at least thirty interlocking bronze gears. Dials on the front and back displayed the positions of the Sun and Moon in the zodiac, the phase of the Moon and the dates of solar and lunar eclipses. Inscriptions also indicate the timing of athletic games, including the Olympic Games. One particularly ingenious mechanism used two gears mounted slightly off-centre, one driving the other, to reproduce the Moon's varying speed across the sky, a phenomenon the Greeks had observed but could not explain physically.\n\nMuch of this knowledge comes from modern technology. Since 2005, X-ray computed tomography has allowed researchers to see inside the fragments and read thousands of tiny inscriptions hidden for two thousand years. Even so, only about a third of the original device survives, and some reconstructions, particularly of how it may have displayed the movements of the planets, remain partly speculative. What is clear is that the mechanism reflects a level of technical sophistication that does not appear again in the surviving record until astronomical clocks were built in medieval Europe more than a thousand years later. This suggests that it was probably not unique, though no similar device from the ancient world has yet been found.",
    "vocabularyNotes": [
      {
        "word": "shipwreck",
        "meaningTr": "batık gemi",
        "contextNote": "ship + wreck (enkaz)."
      },
      {
        "word": "corroded",
        "meaningTr": "aşınmış, paslanmış",
        "contextNote": "corrode: aşındırmak."
      },
      {
        "word": "interlocking",
        "meaningTr": "birbirine geçen",
        "contextNote": "interlock: kenetlenmek."
      },
      {
        "word": "ingenious",
        "meaningTr": "dâhice, yaratıcı",
        "contextNote": "ingenuous (saf) ile karıştırılmamalı."
      },
      {
        "word": "speculative",
        "meaningTr": "spekülatif, varsayıma dayalı",
        "contextNote": "speculate: tahmin yürütmek."
      },
      {
        "word": "sophistication",
        "meaningTr": "gelişmişlik, incelik",
        "contextNote": "Sıfat: sophisticated."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "One particularly ingenious mechanism used two gears mounted slightly off-centre, one driving the other, to reproduce the Moon's varying speed across the sky, a phenomenon the Greeks had observed but could not explain physically.",
        "subject": "One particularly ingenious mechanism (özellikle dâhice bir mekanizma)",
        "mainVerb": "used (kullandı)",
        "objectsAndComplements": "two gears mounted slightly off-centre (merkezden hafifçe kaydırılmış iki dişli) + amaç (to reproduce ...) + appositive (a phenomenon ...)",
        "grammaticalStructures": [
          "Reduced passive relative (gears mounted ...).",
          "Absolute construction (one driving the other).",
          "Amaç bildiren to-infinitive.",
          "Appositive + gizli relative (a phenomenon [that] the Greeks had observed)."
        ],
        "translationTr": "Özellikle dâhice bir mekanizma, Ay'ın gökyüzündeki değişken hızını yeniden üretmek için birbirini çeviren ve merkezden hafifçe kaydırılmış iki dişli kullanıyordu; bu, Yunanların gözlemlediği ama fiziksel olarak açıklayamadığı bir olguydu."
      }
    ],
    "questions": [
      {
        "id": "rb064_q1",
        "type": "reading",
        "title": "The Antikythera Mechanism",
        "question": "According to the passage, the significance of the lump recovered in 1901 _____ .",
        "options": {
          "A": "was recognized immediately by the sponge divers",
          "B": "became clear only gradually over the next century",
          "C": "was ignored until it was rediscovered in 2005",
          "D": "was first explained by Roman sailors",
          "E": "was overshadowed by the discovery of the statues and glassware"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay (gradually realized)",
        "trapWarning": "A şıkkı metinle çelişir. C şıkkı abartılı ve yanlıştır; 2005 sadece yeni teknolojinin kullanılmaya başladığı yıldır. D ve E metinde yoktur.",
        "explanation": "Araştırmacılar sonraki yüzyıl boyunca yavaş yavaş bunun bir analog bilgisayar olduğunu anlamıştır (B şıkkı)."
      },
      {
        "id": "rb064_q2",
        "type": "reading",
        "title": "The Antikythera Mechanism",
        "question": "Which of the following could the mechanism NOT do, according to the passage?",
        "options": {
          "A": "Show the changing phase of the Moon on a dial",
          "B": "Predict solar and lunar eclipses",
          "C": "Indicate the timing of athletic games such as the Olympics",
          "D": "Explain the physical cause of the Moon's speed",
          "E": "Show the positions of the Sun and Moon in the zodiac"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu & İnce Ayrım",
        "trapWarning": "A, B, C ve E metinde sayılır. D şıkkı tuzaktır: mekanizma hız değişimini yeniden üretir ama Yunanlar bunun fiziksel nedenini açıklayamıyordu.",
        "explanation": "Mekanizma Ay'ın değişken hızını taklit eder ama fiziksel nedenini açıklamaz (D şıkkı)."
      },
      {
        "id": "rb064_q3",
        "type": "reading",
        "title": "The Antikythera Mechanism",
        "question": "X-ray computed tomography has been important because it _____ .",
        "options": {
          "A": "allowed the missing two-thirds of the device to be found",
          "B": "revealed hidden inscriptions inside the fragments",
          "C": "proved exactly how the planets were displayed",
          "D": "showed that the device was built in medieval Europe",
          "E": "made it possible to restore the device to working order"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Teknolojinin Katkısı",
        "trapWarning": "A ve C metinle çelişir: cihazın sadece üçte biri vardır ve gezegen gösterimi spekülatif kalır. D şıkkı tarihi bozar. E şıkkı metinde yoktur.",
        "explanation": "Tomografi, parçaların içindeki binlerce gizli yazıtın okunmasını sağlamıştır (B şıkkı)."
      },
      {
        "id": "rb064_q4",
        "type": "reading",
        "title": "The Antikythera Mechanism",
        "question": "The author suggests that the mechanism was probably not unique because _____ .",
        "options": {
          "A": "many similar devices have been found in other shipwrecks",
          "B": "its advanced design implies a tradition of such work",
          "C": "medieval astronomical clocks were copied directly from it",
          "D": "ancient texts describe hundreds of identical machines",
          "E": "it was built by a famous scientist who made several copies"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım",
        "trapWarning": "A şıkkı son cümleyle çelişir. C, D ve E metinde yoktur.",
        "explanation": "Böylesine gelişmiş bir teknik düzey, benzer çalışmaların bir geleneği olduğunu düşündürür; ancak henüz benzeri bulunmamıştır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb065",
    "title": "The Codebreakers of Bletchley Park",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Imperial War Museum archives & The Journal of Intelligence History",
    "wordCount": 271,
    "passageText": "During the Second World War, the German armed forces encrypted their radio messages using Enigma machines, which scrambled each letter through a series of rotating wheels. Because the settings were changed every day and the number of possible combinations was astronomically large, German commanders believed the system to be unbreakable. At Bletchley Park, a country estate north of London, the British government assembled thousands of people to prove them wrong.\n\nThe work built on earlier achievements. In the 1930s, Polish mathematicians, led by Marian Rejewski, had already worked out how Enigma functioned and had built devices to help break it. Shortly before the war, they shared their knowledge with British and French intelligence. At Bletchley, Alan Turing and Gordon Welchman designed electromechanical machines called bombes, which tested possible settings far faster than any human could. The codebreakers also exploited human errors: German operators often began messages with predictable phrases, such as weather reports, which provided clues to the day's settings.\n\nThe popular image of Bletchley Park focuses on a few brilliant mathematicians, but by 1945 nearly 9,000 people worked there, about three-quarters of them women. They operated the bombes, intercepted and recorded messages, translated and analysed decrypted texts and managed vast card indexes linking pieces of information. The intelligence produced, known as Ultra, helped the Allies to locate German submarines in the Atlantic and to plan the D-Day landings. Some historians have estimated that it shortened the war by up to two years, although such claims are difficult to test. Because the work remained secret for decades after the war, many participants were never able to tell their families what they had done.",
    "vocabularyNotes": [
      {
        "word": "encrypt",
        "meaningTr": "şifrelemek",
        "contextNote": "Zıt anlamlısı: decrypt."
      },
      {
        "word": "scramble",
        "meaningTr": "karıştırmak, karmaşık hale getirmek",
        "contextNote": "Ayrıca acele etmek anlamı vardır."
      },
      {
        "word": "astronomically",
        "meaningTr": "astronomik ölçüde, son derece",
        "contextNote": "Mecazi: çok büyük."
      },
      {
        "word": "exploit",
        "meaningTr": "faydalanmak, istismar etmek",
        "contextNote": "Bağlama göre olumlu/olumsuz."
      },
      {
        "word": "intercept",
        "meaningTr": "yolda yakalamak, ele geçirmek",
        "contextNote": "intercept messages: mesajları ele geçirmek."
      },
      {
        "word": "shorten",
        "meaningTr": "kısaltmak",
        "contextNote": "short + -en."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Because the settings were changed every day and the number of possible combinations was astronomically large, German commanders believed the system to be unbreakable.",
        "subject": "German commanders (Alman komutanlar)",
        "mainVerb": "believed (inanıyordu)",
        "objectsAndComplements": "the system to be unbreakable (sistemin kırılamaz olduğuna)",
        "grammaticalStructures": [
          "Because-clause iki sebep içerir (and ile bağlı).",
          "Passive (were changed).",
          "believe + nesne + to be + sıfat: -in ... olduğuna inanmak.",
          "un- + break + -able."
        ],
        "translationTr": "Ayarlar her gün değiştirildiği ve olası kombinasyonların sayısı astronomik derecede büyük olduğu için Alman komutanlar sistemin kırılamaz olduğuna inanıyordu."
      }
    ],
    "questions": [
      {
        "id": "rb065_q1",
        "type": "reading",
        "title": "The Codebreakers of Bletchley Park",
        "question": "Why did German commanders believe that Enigma could not be broken?",
        "options": {
          "A": "Because the machines were kept in a secret country estate",
          "B": "Because settings changed daily and combinations were vast",
          "C": "Because Polish mathematicians had failed to understand it",
          "D": "Because messages never began with predictable phrases",
          "E": "Because the British government had no radio equipment"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "C şıkkı metinle çelişir: Polonyalılar Enigma'yı çözmüştü. D şıkkı tersidir. A ve E metinde yoktur.",
        "explanation": "Ayarlar her gün değişiyordu ve olası kombinasyon sayısı çok büyüktü (B şıkkı)."
      },
      {
        "id": "rb065_q2",
        "type": "reading",
        "title": "The Codebreakers of Bletchley Park",
        "question": "The contribution of Polish mathematicians was that they _____ .",
        "options": {
          "A": "designed the bombes used at Bletchley Park during the war",
          "B": "had worked out how Enigma functioned before the war",
          "C": "persuaded the Germans to change their settings every day",
          "D": "recruited thousands of women to work as codebreakers",
          "E": "located German submarines in the Atlantic"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Katkı Ayrımı",
        "trapWarning": "A şıkkı Turing ve Welchman'a aittir. D ve E Bletchley ve Ultra'nın işidir. C şıkkı metinde yoktur.",
        "explanation": "Polonyalı matematikçiler 1930'larda Enigma'nın nasıl çalıştığını çözmüş ve bilgilerini savaştan önce paylaşmıştı (B şıkkı)."
      },
      {
        "id": "rb065_q3",
        "type": "reading",
        "title": "The Codebreakers of Bletchley Park",
        "question": "The third paragraph mainly aims to _____ .",
        "options": {
          "A": "show that only a few mathematicians were involved in the work",
          "B": "correct a narrow popular image by describing the workforce",
          "C": "argue that Ultra had no effect on the course of the war",
          "D": "explain how the bombes were designed and built",
          "E": "describe the families of the people who worked there"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Paragraf Amacı",
        "trapWarning": "A şıkkı paragrafın düzelttiği yaygın imajdır. C şıkkı metinle çelişir. D şıkkı ikinci paragrafın konusudur. E şıkkı ana amaç değildir.",
        "explanation": "Paragraf, birkaç dâhi matematikçiye odaklanan imajı, çoğu kadın olan yaklaşık 9.000 kişilik iş gücünü anlatarak düzeltir (B şıkkı)."
      },
      {
        "id": "rb065_q4",
        "type": "reading",
        "title": "The Codebreakers of Bletchley Park",
        "question": "The author's attitude towards the claim that Ultra shortened the war by two years is _____ .",
        "options": {
          "A": "fully convinced, since it has been proven by historians",
          "B": "cautious, noting that such claims are hard to test",
          "C": "dismissive, since Ultra produced no useful intelligence",
          "D": "enthusiastic, claiming that it ended the war immediately",
          "E": "uninterested, as the claim is not mentioned in the passage"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yazarın Tutumu (difficult to test)",
        "trapWarning": "A ve D aşırı kesinlik ifade eder. C şıkkı metinle çelişir. E şıkkı soru kökünün tersidir.",
        "explanation": "Yazar iddiayı aktarır ama \"such claims are difficult to test\" diyerek temkinli kalır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb066",
    "title": "How Central Banks Fight Inflation",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from The Economist & Bank for International Settlements",
    "wordCount": 272,
    "passageText": "Inflation, a general rise in prices over time, reduces the purchasing power of money. Moderate inflation of around two percent a year is considered healthy by most central banks, because it gives businesses room to adjust wages and prices and reduces the risk of deflation, a damaging cycle of falling prices in which consumers delay purchases in the expectation that goods will become cheaper. When inflation rises well above this target, however, it erodes savings, creates uncertainty and hurts poorer households most, since they spend a larger share of their income on essentials such as food and energy.\n\nThe main tool central banks use to control inflation is the interest rate. By raising the rate at which they lend to commercial banks, they make borrowing more expensive throughout the economy. Higher rates discourage households from taking out mortgages and businesses from investing, while encouraging saving. As spending slows, demand for goods and services falls, and price increases gradually moderate. The process works with a delay, often of a year or more, which means that central banks must act on forecasts rather than on current figures.\n\nRaising rates is not without costs. Slower spending can lead to rising unemployment and, in extreme cases, a recession. Central banks therefore face a difficult balancing act: if they raise rates too little, inflation may become entrenched as people come to expect continual price rises; if they raise them too much, they may cause unnecessary economic damage. For this reason, many central banks are made independent of governments, so that decisions on interest rates are not influenced by politicians who might prefer lower rates before an election.",
    "vocabularyNotes": [
      {
        "word": "purchasing power",
        "meaningTr": "satın alma gücü",
        "contextNote": "Ekonomi metinlerinde temel kavram."
      },
      {
        "word": "deflation",
        "meaningTr": "deflasyon, fiyatların genel düşüşü",
        "contextNote": "Zıt anlamlısı: inflation."
      },
      {
        "word": "erode",
        "meaningTr": "aşındırmak, zayıflatmak",
        "contextNote": "İsim: erosion."
      },
      {
        "word": "mortgage",
        "meaningTr": "konut kredisi, ipotek",
        "contextNote": "take out a mortgage: konut kredisi çekmek."
      },
      {
        "word": "moderate",
        "meaningTr": "yavaşlamak, ılımlılaşmak (fiil)",
        "contextNote": "Sıfat olarak ılımlı anlamı da vardır."
      },
      {
        "word": "entrenched",
        "meaningTr": "kökleşmiş, yerleşik",
        "contextNote": "become entrenched: kökleşmek."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "If they raise rates too little, inflation may become entrenched as people come to expect continual price rises; if they raise them too much, they may cause unnecessary economic damage.",
        "subject": "inflation / they (enflasyon / merkez bankaları)",
        "mainVerb": "may become / may cause (... olabilir / yol açabilir)",
        "objectsAndComplements": "entrenched (kökleşmiş) + [as-clause: insanlar sürekli fiyat artışı beklemeye başladıkça] + unnecessary economic damage",
        "grammaticalStructures": [
          "İki paralel Type 1 koşul cümlesi (noktalı virgülle).",
          "too little / too much: aşırılık bildiren yapılar.",
          "as: -dıkça (zaman/sebep).",
          "come to + V1: zamanla -meye başlamak."
        ],
        "translationTr": "Faizleri çok az artırırlarsa, insanlar sürekli fiyat artışı beklemeye başladıkça enflasyon kökleşebilir; çok fazla artırırlarsa gereksiz ekonomik zarara yol açabilirler."
      }
    ],
    "questions": [
      {
        "id": "rb066_q1",
        "type": "reading",
        "title": "How Central Banks Fight Inflation",
        "question": "According to the passage, central banks prefer moderate inflation to zero inflation partly because _____ .",
        "options": {
          "A": "it allows governments to spend more money before elections",
          "B": "it lowers the risk of a harmful cycle of falling prices",
          "C": "it increases the savings of poorer households",
          "D": "it makes borrowing cheaper for commercial banks",
          "E": "it encourages consumers to delay their purchases"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "E şıkkı deflasyonun etkisidir, ılımlı enflasyonun değil. C şıkkı yüksek enflasyonun etkisinin tersidir. A ve D metinde böyle geçmez.",
        "explanation": "Ilımlı enflasyon, fiyatların düştüğü zararlı deflasyon döngüsü riskini azaltır (B şıkkı)."
      },
      {
        "id": "rb066_q2",
        "type": "reading",
        "title": "How Central Banks Fight Inflation",
        "question": "How does raising interest rates reduce inflation, according to the passage?",
        "options": {
          "A": "It forces businesses across the economy to lower the wages of their workers",
          "B": "It makes borrowing costlier, so spending and demand fall",
          "C": "It increases the amount of money available to households",
          "D": "It immediately reduces the prices of food and energy",
          "E": "It encourages people to take out more mortgages"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Mekanizma",
        "trapWarning": "D şıkkı \"works with a delay\" bilgisiyle çelişir. C ve E tam tersidir. A şıkkı metinde yoktur.",
        "explanation": "Yüksek faiz borçlanmayı pahalılaştırır, harcama ve talep düşer, fiyat artışları yavaşlar (B şıkkı)."
      },
      {
        "id": "rb066_q3",
        "type": "reading",
        "title": "How Central Banks Fight Inflation",
        "question": "Central banks must act on forecasts rather than current figures because _____ .",
        "options": {
          "A": "current figures are usually kept secret by governments",
          "B": "the effects of interest rate changes take time to appear",
          "C": "inflation always disappears without any action within a year",
          "D": "forecasts are required by law in most countries",
          "E": "commercial banks refuse to publish their current figures"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep (works with a delay)",
        "trapWarning": "C şıkkı metinle çelişir. A, D ve E metinde yoktur.",
        "explanation": "Süreç genellikle bir yıl ya da daha uzun bir gecikmeyle işler (B şıkkı)."
      },
      {
        "id": "rb066_q4",
        "type": "reading",
        "title": "How Central Banks Fight Inflation",
        "question": "Many central banks are made independent of governments so that _____ .",
        "options": {
          "A": "politicians can set interest rates themselves in the months before elections",
          "B": "interest rate decisions are not driven by political pressures",
          "C": "they can avoid raising rates whenever unemployment starts to rise",
          "D": "they do not need to make any forecasts about inflation",
          "E": "governments can borrow money from them more cheaply"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Amaç",
        "trapWarning": "A şıkkı tam tersidir. C, D ve E metnin söylemediği sonuçlardır.",
        "explanation": "Bağımsızlık, faiz kararlarının seçimden önce düşük faiz isteyebilecek politikacılardan etkilenmemesi içindir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb067",
    "title": "The Promise of Vertical Farming",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from Nature Food & Financial Times",
    "wordCount": 257,
    "passageText": "Vertical farms grow crops indoors in stacked layers, often inside warehouses or converted buildings in cities. Plants are grown without soil, their roots fed by water containing dissolved nutrients, and they are lit by LED lamps that can be tuned to the wavelengths plants use most efficiently. Because temperature, humidity and light are fully controlled, crops can be harvested year-round, regardless of the weather outside.\n\nSupporters point to impressive advantages. Vertical farms can produce many times more lettuce per square metre of floor space than open fields, and they use up to ninety-five percent less water, because water is recycled within a closed system. They need no pesticides, and since they can be located near consumers, they reduce transport distances and the time between harvest and sale, keeping produce fresher.\n\nThe main obstacle is energy. In a field, sunlight is free; in a vertical farm, every photon must be produced by electricity, and heating, cooling and ventilation add further costs. As a result, vertical farming has so far been profitable mainly for high-value, fast-growing crops such as leafy greens and herbs, which have little weight and short growing cycles. Staple crops such as wheat and rice, which require large amounts of light to produce relatively cheap grain, are far from economical to grow indoors. Several well-funded vertical farming companies went bankrupt in 2022 and 2023 when electricity prices rose sharply in Europe. Analysts suggest that the industry's future depends on cheaper renewable electricity and more efficient lighting, and that it is likely to complement rather than replace conventional agriculture.",
    "vocabularyNotes": [
      {
        "word": "stacked",
        "meaningTr": "üst üste dizilmiş",
        "contextNote": "stack: yığmak."
      },
      {
        "word": "dissolved",
        "meaningTr": "çözünmüş",
        "contextNote": "dissolve: çözünmek."
      },
      {
        "word": "tune",
        "meaningTr": "ayarlamak",
        "contextNote": "tune to: -e göre ayarlamak."
      },
      {
        "word": "pesticide",
        "meaningTr": "böcek ilacı, tarım ilacı",
        "contextNote": "pest (zararlı) + -cide (öldüren)."
      },
      {
        "word": "produce",
        "meaningTr": "ürün, sebze-meyve (isim)",
        "contextNote": "İsimde vurgu ilk hecede: PRO-duce."
      },
      {
        "word": "bankrupt",
        "meaningTr": "iflas etmiş",
        "contextNote": "go bankrupt: iflas etmek."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Staple crops such as wheat and rice, which require large amounts of light to produce relatively cheap grain, are far from economical to grow indoors.",
        "subject": "Staple crops such as wheat and rice (buğday ve pirinç gibi temel ürünler)",
        "mainVerb": "are (dır)",
        "objectsAndComplements": "far from economical to grow indoors (iç mekânda yetiştirmek için ekonomik olmaktan çok uzak)",
        "grammaticalStructures": [
          "Non-defining relative clause (which require ...).",
          "Amaç bildiren to-infinitive (to produce ...).",
          "far from + sıfat: -den çok uzak (olumsuz anlam).",
          "sıfat + to V1 (economical to grow)."
        ],
        "translationTr": "Nispeten ucuz tahıl üretmek için büyük miktarda ışık gerektiren buğday ve pirinç gibi temel ürünleri iç mekânda yetiştirmek ekonomik olmaktan çok uzaktır."
      }
    ],
    "questions": [
      {
        "id": "rb067_q1",
        "type": "reading",
        "title": "The Promise of Vertical Farming",
        "question": "According to the passage, vertical farms can harvest crops all year because _____ .",
        "options": {
          "A": "they are always located in countries with warm and sunny climates",
          "B": "conditions such as light and temperature are fully controlled",
          "C": "the crops they grow do not need any water or nutrients",
          "D": "they use pesticides that speed up the growth of plants",
          "E": "they rely on natural sunlight entering through glass roofs"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "C ve D metinle çelişir. E şıkkı tersidir: ışık LED ile sağlanır. A şıkkı metinde yoktur.",
        "explanation": "Sıcaklık, nem ve ışık tamamen kontrol edildiği için hasat hava koşullarından bağımsızdır (B şıkkı)."
      },
      {
        "id": "rb067_q2",
        "type": "reading",
        "title": "The Promise of Vertical Farming",
        "question": "Which of the following is NOT mentioned as an advantage of vertical farming?",
        "options": {
          "A": "Higher yields per square metre of floor space",
          "B": "Much lower water use",
          "C": "No need for pesticides",
          "D": "Lower energy costs than conventional farming",
          "E": "Shorter transport distances to consumers"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E ikinci paragrafta avantaj olarak sayılır. D şıkkı ise üçüncü paragrafta ana sorun olarak verilir.",
        "explanation": "Enerji dikey tarımın en büyük engelidir; düşük enerji maliyeti bir avantaj değildir (D şıkkı)."
      },
      {
        "id": "rb067_q3",
        "type": "reading",
        "title": "The Promise of Vertical Farming",
        "question": "Vertical farming has been profitable mainly for leafy greens and herbs because they _____ .",
        "options": {
          "A": "need more sunlight than most staple crops",
          "B": "are valuable, light and grow quickly",
          "C": "can be stored for many months after harvest",
          "D": "are the only crops that can grow without soil",
          "E": "are cheaper to transport than wheat and rice"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep",
        "trapWarning": "A şıkkı ışık bilgisini tersine çevirir. C, D ve E metinde yoktur.",
        "explanation": "Bu ürünler yüksek değerli, hafif ve kısa sürede yetişen ürünlerdir (B şıkkı)."
      },
      {
        "id": "rb067_q4",
        "type": "reading",
        "title": "The Promise of Vertical Farming",
        "question": "The bankruptcies of 2022 and 2023 are mentioned to show that _____ .",
        "options": {
          "A": "consumers had suddenly stopped buying leafy greens and herbs",
          "B": "vertical farms are very sensitive to the cost of electricity",
          "C": "pesticides had become too expensive for indoor farms",
          "D": "wheat and rice had become profitable to grow indoors",
          "E": "governments had banned vertical farms in several European countries"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin İşlevi",
        "trapWarning": "D şıkkı metinle çelişir. A, C ve E metinde yoktur.",
        "explanation": "İflaslar elektrik fiyatları keskin şekilde yükselince yaşanmıştır; dikey tarımın elektrik maliyetine çok duyarlı olduğunu gösterir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb068",
    "title": "The Limits of Plastic Recycling",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from Science Advances & OECD Global Plastics Outlook",
    "wordCount": 277,
    "passageText": "Since the 1950s, the world has produced more than eight billion tonnes of plastic, and annual production now exceeds four hundred million tonnes. Recycling has long been promoted as the solution to plastic waste, and the familiar triangular symbol appears on most plastic packaging. Yet according to the OECD, only about nine percent of all plastic waste worldwide is recycled. Roughly half goes to landfill, a fifth is burned and the rest is mismanaged, ending up in open dumps, rivers and the sea.\n\nThe low rate has several causes. Plastics come in thousands of formulations, and many products combine several types or include dyes and additives, which makes sorting difficult and expensive. Unlike glass or aluminium, most plastics lose quality each time they are recycled, so a drinking bottle is usually turned into a lower-value product, such as carpet fibre, rather than into another bottle. In addition, new plastic made from oil and gas is often cheaper than recycled material, reducing the incentive to recycle. For years, wealthy countries exported much of their plastic waste to Asia, where much of it was not recycled at all, until China banned most imports in 2018.\n\nExperts increasingly argue that recycling, though useful, cannot solve the problem on its own. They emphasize reducing the use of plastic in the first place, designing products from a single type of plastic so they are easier to recycle, and expanding reuse systems such as refillable containers. Some governments have introduced deposit schemes, in which consumers pay a small extra charge for drinks bottles that is refunded when the bottle is returned. Countries with such schemes often achieve collection rates above ninety percent for bottles.",
    "vocabularyNotes": [
      {
        "word": "exceed",
        "meaningTr": "aşmak",
        "contextNote": "İsim: excess. Sıfat: excessive."
      },
      {
        "word": "mismanaged",
        "meaningTr": "kötü yönetilmiş",
        "contextNote": "mis- + manage."
      },
      {
        "word": "formulation",
        "meaningTr": "formül, bileşim",
        "contextNote": "formulate fiilinden."
      },
      {
        "word": "incentive",
        "meaningTr": "teşvik",
        "contextNote": "Eş anlamlısı: motivation, encouragement."
      },
      {
        "word": "deposit",
        "meaningTr": "depozito; yatırmak",
        "contextNote": "deposit scheme: depozito sistemi."
      },
      {
        "word": "refund",
        "meaningTr": "geri ödemek, iade etmek",
        "contextNote": "İsim: refund (iade)."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Unlike glass or aluminium, most plastics lose quality each time they are recycled, so a drinking bottle is usually turned into a lower-value product, such as carpet fibre, rather than into another bottle.",
        "subject": "most plastics / a drinking bottle (çoğu plastik / bir içecek şişesi)",
        "mainVerb": "lose / is turned into (kaybeder / dönüştürülür)",
        "objectsAndComplements": "quality (kalite) + a lower-value product ... rather than into another bottle",
        "grammaticalStructures": [
          "Unlike + isim: -den farklı olarak.",
          "each time: her ... -dığında.",
          "so: sonuç bağlacı.",
          "Passive (is turned into).",
          "rather than into: -e değil."
        ],
        "translationTr": "Cam veya alüminyumun aksine çoğu plastik her geri dönüştürüldüğünde kalite kaybeder; bu yüzden bir içecek şişesi genellikle başka bir şişeye değil, halı lifi gibi daha düşük değerli bir ürüne dönüştürülür."
      }
    ],
    "questions": [
      {
        "id": "rb068_q1",
        "type": "reading",
        "title": "The Limits of Plastic Recycling",
        "question": "According to the OECD figures in the passage, most plastic waste _____ .",
        "options": {
          "A": "is recycled into new packaging",
          "B": "is either sent to landfill or burned",
          "C": "is exported to China for recycling",
          "D": "ends up in open dumps, rivers and the sea",
          "E": "is turned into carpet fibre"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sayısal Çıkarım",
        "trapWarning": "A şıkkı oranla çelişir (yüzde dokuz). D şıkkı atığın sadece bir kısmıdır. C şıkkı 2018 yasağıyla çelişir. E şıkkı küçük bir örnektir.",
        "explanation": "Yaklaşık yarısı çöp sahasına gider, beşte biri yakılır; yani çoğunluğu bu iki yola gider (B şıkkı)."
      },
      {
        "id": "rb068_q2",
        "type": "reading",
        "title": "The Limits of Plastic Recycling",
        "question": "Which of the following is NOT given as a reason for the low recycling rate?",
        "options": {
          "A": "The large variety of plastic types and additives",
          "B": "The loss of quality during recycling",
          "C": "The low price of new plastic",
          "D": "Consumers' refusal to use recycling bins",
          "E": "The difficulty and cost of sorting"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E ikinci paragrafta neden olarak geçer.",
        "explanation": "Metin tüketicilerin geri dönüşüm kutularını kullanmayı reddetmesinden söz etmez (D şıkkı)."
      },
      {
        "id": "rb068_q3",
        "type": "reading",
        "title": "The Limits of Plastic Recycling",
        "question": "According to the passage, a recycled drinking bottle usually becomes _____ .",
        "options": {
          "A": "another bottle of the same quality",
          "B": "a product of lower value",
          "C": "a material stronger than glass",
          "D": "fuel for power stations",
          "E": "new plastic made from oil and gas"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay",
        "trapWarning": "A şıkkı metnin özellikle reddettiği seçenektir. C ve D metinde yoktur. E şıkkı yeni plastiğin tanımıdır.",
        "explanation": "Şişe genellikle halı lifi gibi daha düşük değerli bir ürüne dönüştürülür (B şıkkı)."
      },
      {
        "id": "rb068_q4",
        "type": "reading",
        "title": "The Limits of Plastic Recycling",
        "question": "Deposit schemes are mentioned as an example of a policy that _____ .",
        "options": {
          "A": "has replaced recycling completely in some countries",
          "B": "achieves very high collection rates for bottles",
          "C": "makes new plastic more expensive than recycled plastic",
          "D": "requires consumers to sort plastics by type",
          "E": "was introduced after China banned plastic imports"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin Sonucu",
        "trapWarning": "A, C, D ve E metinde depozito sistemleriyle ilişkilendirilmez.",
        "explanation": "Depozito sistemi olan ülkeler şişelerde yüzde doksanın üzerinde toplama oranlarına ulaşır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb069",
    "title": "Remittances and Development",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from World Bank Migration and Development Briefs",
    "wordCount": 280,
    "passageText": "Every year, migrants working abroad send hundreds of billions of dollars back to their families in their countries of origin. These transfers, known as remittances, reached around 650 billion dollars to low- and middle-income countries in 2023, more than the total of foreign direct investment and official development aid combined. In some countries, such as Tajikistan, Tonga and Nepal, remittances are equivalent to a fifth or more of the national economy.\n\nResearch suggests that remittances bring significant benefits. Because they go directly to households, they are used to pay for food, housing, education and health care, and studies have found that children in families receiving remittances are more likely to stay in school. Unlike private investment, which often falls during economic crises, remittances tend to be stable or even increase when the home country suffers a disaster, since migrants send more money to help relatives in difficulty. They also provide foreign currency that helps countries pay for imports.\n\nRemittances are not without drawbacks, however. Sending money internationally remains expensive; the average fee is around six percent of the amount sent, well above the international target of three percent, and fees are especially high for transfers to sub-Saharan Africa. Heavy reliance on remittances may also make countries vulnerable to economic downturns or changes in immigration policy in the countries where migrants work. Some economists worry that large inflows can reduce the incentive to work among recipients or raise the value of the local currency, making exports less competitive, although evidence for these effects is mixed. Digital payment services have begun to lower costs, and many development agencies see cheaper transfers as one of the simplest ways to increase the incomes of poor households.",
    "vocabularyNotes": [
      {
        "word": "remittance",
        "meaningTr": "işçi dövizi, para havalesi",
        "contextNote": "Göçmenlerin ülkelerine gönderdiği para."
      },
      {
        "word": "origin",
        "meaningTr": "köken",
        "contextNote": "country of origin: menşe ülke."
      },
      {
        "word": "equivalent to",
        "meaningTr": "-e eşdeğer",
        "contextNote": "Eş anlamlısı: equal to."
      },
      {
        "word": "drawback",
        "meaningTr": "dezavantaj, sakınca",
        "contextNote": "Eş anlamlısı: disadvantage."
      },
      {
        "word": "downturn",
        "meaningTr": "durgunluk, düşüş",
        "contextNote": "economic downturn: ekonomik durgunluk."
      },
      {
        "word": "inflow",
        "meaningTr": "giriş, akış (para)",
        "contextNote": "Zıt anlamlısı: outflow."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Unlike private investment, which often falls during economic crises, remittances tend to be stable or even increase when the home country suffers a disaster.",
        "subject": "remittances (işçi dövizleri)",
        "mainVerb": "tend to be stable or even increase (istikrarlı kalma, hatta artma eğilimindedir)",
        "objectsAndComplements": "[when-clause: ülke bir felaket yaşadığında]",
        "grammaticalStructures": [
          "Unlike + isim: -in aksine.",
          "Non-defining relative clause (which often falls ...).",
          "tend to + V1.",
          "or even: hatta (vurgu)."
        ],
        "translationTr": "Ekonomik krizlerde sıklıkla düşen özel yatırımların aksine, işçi dövizleri ülke bir felaketle karşılaştığında istikrarlı kalma, hatta artma eğilimindedir."
      }
    ],
    "questions": [
      {
        "id": "rb069_q1",
        "type": "reading",
        "title": "Remittances and Development",
        "question": "According to the passage, remittances to low- and middle-income countries in 2023 were _____ .",
        "options": {
          "A": "smaller than the total of official development aid",
          "B": "larger than investment and aid combined",
          "C": "equal to a fifth of the world economy",
          "D": "mainly used to pay for imports",
          "E": "lower than they had been in previous years"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sayısal Detay",
        "trapWarning": "A şıkkı tersidir. C şıkkı beşte bir oranını yanlış bağlar: bu bazı ülkelerin ekonomisi içindir. D ve E metinde böyle geçmez.",
        "explanation": "Dövizler doğrudan yabancı yatırım ve resmi kalkınma yardımının toplamından fazlaydı (B şıkkı)."
      },
      {
        "id": "rb069_q2",
        "type": "reading",
        "title": "Remittances and Development",
        "question": "Remittances differ from private investment in that they _____ .",
        "options": {
          "A": "fall sharply whenever there is an economic crisis",
          "B": "often remain stable or rise when disaster strikes",
          "C": "are controlled by international development agencies",
          "D": "go mainly to large companies rather than families",
          "E": "are free of any fees or charges"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Karşılaştırma (Unlike ...)",
        "trapWarning": "A şıkkı özel yatırımı tarif eder. D ve E metinle çelişir. C şıkkı metinde yoktur.",
        "explanation": "Dövizler felaket zamanlarında istikrarlı kalır, hatta artar (B şıkkı)."
      },
      {
        "id": "rb069_q3",
        "type": "reading",
        "title": "Remittances and Development",
        "question": "Which of the following is presented as a drawback of remittances?",
        "options": {
          "A": "They are mostly spent on imported luxury goods",
          "B": "Transfer fees remain well above the target",
          "C": "They reduce the number of children attending school",
          "D": "They always reduce people's willingness to work",
          "E": "They have no effect on foreign currency reserves"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Dezavantaj",
        "trapWarning": "C şıkkı ikinci paragrafla çelişir. D şıkkı \"evidence is mixed\" ifadesini kesinliğe çevirir. A ve E metinde yoktur.",
        "explanation": "Ortalama ücret yaklaşık yüzde altıdır; bu yüzde üçlük uluslararası hedefin çok üzerindedir (B şıkkı)."
      },
      {
        "id": "rb069_q4",
        "type": "reading",
        "title": "Remittances and Development",
        "question": "Many development agencies believe that cheaper transfers _____ .",
        "options": {
          "A": "would encourage more people to migrate abroad",
          "B": "are a simple way to raise poor households' incomes",
          "C": "would make exports from poor countries less competitive",
          "D": "should be paid for by the countries where migrants work",
          "E": "are impossible because of digital payment services"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş",
        "trapWarning": "C şıkkı başka bir endişeyle karıştırır. E şıkkı tersidir: dijital servisler maliyetleri düşürmeye başlamıştır. A ve D metinde yoktur.",
        "explanation": "Kalkınma kuruluşları daha ucuz transferleri yoksul hanelerin gelirini artırmanın en basit yollarından biri olarak görür (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb070",
    "title": "The Disappearance of the Aral Sea",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from NASA Earth Observatory & UNEP reports",
    "wordCount": 283,
    "passageText": "In 1960, the Aral Sea, lying between Kazakhstan and Uzbekistan, was the fourth-largest lake in the world, supporting a thriving fishing industry and the communities along its shores. Within a few decades it had shrunk to less than a tenth of its former volume, splitting into several separate bodies of water. Abandoned fishing boats now lie rusting in a desert dozens of kilometres from the nearest shoreline.\n\nThe cause was not climate change but deliberate policy. In the 1950s and 1960s, Soviet planners decided to turn the dry plains of Central Asia into a major cotton-producing region. Huge irrigation canals diverted water from the two rivers that fed the sea, the Amu Darya and the Syr Darya. Many of these canals were poorly built and lost a large share of their water through leaks and evaporation. Cotton production rose, but the flow of water reaching the sea dropped dramatically.\n\nThe consequences went far beyond the loss of the fishing industry. As the water retreated, it exposed a seabed covered in salt and the residues of agricultural chemicals. Winds now carry this toxic dust across the region, and local populations have suffered high rates of respiratory illness. The climate around the former sea has also become more extreme, with hotter summers and colder winters.\n\nThere is one partial success. In 2005, Kazakhstan completed a dam that separates the northern part of the sea from the larger southern part. Water levels in the North Aral Sea have since risen, salinity has fallen and fish have returned, allowing a small fishing industry to revive. The southern part, however, continues to shrink, and restoring the whole sea is widely considered impossible without major changes to irrigation in the region.",
    "vocabularyNotes": [
      {
        "word": "thriving",
        "meaningTr": "gelişen, canlı",
        "contextNote": "thrive: gelişmek, serpilmek."
      },
      {
        "word": "shrink (shrank, shrunk)",
        "meaningTr": "küçülmek, çekmek",
        "contextNote": "Düzensiz fiil."
      },
      {
        "word": "divert",
        "meaningTr": "yönünü değiştirmek, saptırmak",
        "contextNote": "divert water: suyun yönünü değiştirmek."
      },
      {
        "word": "residue",
        "meaningTr": "kalıntı, tortu",
        "contextNote": "chemical residues: kimyasal kalıntılar."
      },
      {
        "word": "respiratory",
        "meaningTr": "solunumla ilgili",
        "contextNote": "respiratory illness: solunum yolu hastalığı."
      },
      {
        "word": "salinity",
        "meaningTr": "tuzluluk",
        "contextNote": "saline: tuzlu."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "As the water retreated, it exposed a seabed covered in salt and the residues of agricultural chemicals.",
        "subject": "it (the water) (su)",
        "mainVerb": "exposed (açığa çıkardı)",
        "objectsAndComplements": "a seabed covered in salt and the residues of agricultural chemicals (tuz ve tarım kimyasalı kalıntılarıyla kaplı bir deniz tabanını)",
        "grammaticalStructures": [
          "As: -dıkça (zaman/süreç).",
          "Reduced passive relative (a seabed [that was] covered in ...).",
          "be covered in/with: ile kaplı olmak."
        ],
        "translationTr": "Su çekildikçe tuz ve tarım kimyasalı kalıntılarıyla kaplı bir deniz tabanını açığa çıkardı."
      }
    ],
    "questions": [
      {
        "id": "rb070_q1",
        "type": "reading",
        "title": "The Disappearance of the Aral Sea",
        "question": "According to the passage, the main cause of the Aral Sea's decline was _____ .",
        "options": {
          "A": "a long period of drought caused by global climate change",
          "B": "diverting river water to irrigate cotton fields",
          "C": "the overfishing of the sea by local communities",
          "D": "the construction of a dam by Kazakhstan in 2005",
          "E": "pollution from factories built along its shores"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Ana Sebep (not ... but ...)",
        "trapWarning": "A şıkkı metnin özellikle reddettiği nedendir. D şıkkı sonradan gelen kısmi bir çözümdür. C ve E metinde yoktur.",
        "explanation": "Pamuk tarlalarını sulamak için nehir sularının kanallarla başka yöne aktarılmasıdır (B şıkkı)."
      },
      {
        "id": "rb070_q2",
        "type": "reading",
        "title": "The Disappearance of the Aral Sea",
        "question": "According to the passage, the irrigation canals were inefficient because _____ .",
        "options": {
          "A": "they carried the river water in the wrong direction, away from farms",
          "B": "they lost much water through leaks and evaporation",
          "C": "they were too small to supply the cotton fields",
          "D": "farmers refused to use them for growing cotton",
          "E": "they were built only on the northern side of the sea"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay",
        "trapWarning": "A, C, D ve E metinde yoktur; pamuk üretimi aslında artmıştır.",
        "explanation": "Kanalların çoğu kötü inşa edilmişti ve suyun büyük bir kısmını sızıntı ve buharlaşmayla kaybediyordu (B şıkkı)."
      },
      {
        "id": "rb070_q3",
        "type": "reading",
        "title": "The Disappearance of the Aral Sea",
        "question": "Which of the following is NOT mentioned as a consequence of the sea's shrinking?",
        "options": {
          "A": "The collapse of the fishing industry",
          "B": "Toxic dust carried by the wind",
          "C": "High rates of respiratory illness",
          "D": "More extreme summer and winter temperatures",
          "E": "A sharp increase in cotton prices"
        },
        "answer": "E",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve D metinde sonuç olarak geçer.",
        "explanation": "Metin pamuk fiyatlarından söz etmez (E şıkkı)."
      },
      {
        "id": "rb070_q4",
        "type": "reading",
        "title": "The Disappearance of the Aral Sea",
        "question": "It can be inferred from the last paragraph that the dam built by Kazakhstan _____ .",
        "options": {
          "A": "restored the entire Aral Sea to its 1960 size",
          "B": "helped the northern part but not the southern one",
          "C": "caused the southern part of the sea to dry up",
          "D": "has made irrigation in the whole region unnecessary",
          "E": "was built mainly to increase cotton production"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çıkarım",
        "trapWarning": "A şıkkı metinle çelişir: tüm denizin restorasyonu imkânsız görülür. C şıkkı güney kısmın küçülmesini bara bağlar; metin böyle demez. D ve E metinde yoktur.",
        "explanation": "Kuzey Aral'da su seviyesi yükselmiş ve balıklar dönmüş, ama güney kısım küçülmeye devam etmektedir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb071",
    "title": "Why Losses Loom Larger Than Gains",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from the work of Kahneman and Tversky",
    "wordCount": 276,
    "passageText": "Traditional economic theory assumed that people make decisions by calmly weighing the expected value of each option. In 1979, the psychologists Daniel Kahneman and Amos Tversky challenged this view with prospect theory, which was based on experiments showing how people actually behave when facing risk. One of their central findings was loss aversion: losing a sum of money feels roughly twice as painful as gaining the same sum feels pleasant.\n\nLoss aversion helps explain many puzzling behaviours. Most people refuse a bet in which they have an equal chance of winning 110 dollars or losing 100, even though the expected value is positive. Investors often hold on to shares that have fallen in value, hoping to avoid realizing a loss, while selling profitable shares too early. In one well-known experiment, students who were given a coffee mug demanded about twice as much money to sell it as other students were willing to pay to buy the same mug, a phenomenon known as the endowment effect.\n\nThe way a choice is described, or framed, also matters. When a medical treatment was described as having a ninety percent survival rate, people were far more likely to choose it than when it was described as having a ten percent mortality rate, although the two descriptions are identical. Marketers and policymakers have used such insights; for example, some energy companies tell customers how much money they are losing by not insulating their homes rather than how much they could save. Later research has suggested that loss aversion may be weaker for small amounts and in some contexts, but the broader idea that people do not evaluate gains and losses symmetrically remains highly influential.",
    "vocabularyNotes": [
      {
        "word": "loom",
        "meaningTr": "büyük görünmek, belirmek",
        "contextNote": "loom large: gözde büyümek."
      },
      {
        "word": "expected value",
        "meaningTr": "beklenen değer",
        "contextNote": "Olasılık × kazanç."
      },
      {
        "word": "aversion",
        "meaningTr": "isteksizlik, kaçınma",
        "contextNote": "loss aversion: kayıptan kaçınma."
      },
      {
        "word": "realize a loss",
        "meaningTr": "zararı gerçekleştirmek (satarak)",
        "contextNote": "Finans terimi."
      },
      {
        "word": "endowment",
        "meaningTr": "bağış, sahip olunan şey",
        "contextNote": "endowment effect: sahiplik etkisi."
      },
      {
        "word": "frame",
        "meaningTr": "çerçevelemek, sunmak",
        "contextNote": "framing effect: çerçeveleme etkisi."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Students who were given a coffee mug demanded about twice as much money to sell it as other students were willing to pay to buy the same mug.",
        "subject": "Students who were given a coffee mug (kendisine kahve kupası verilen öğrenciler)",
        "mainVerb": "demanded (talep etti)",
        "objectsAndComplements": "about twice as much money to sell it as ... (diğer öğrencilerin ödemeye razı olduğunun yaklaşık iki katı para)",
        "grammaticalStructures": [
          "Passive relative clause (who were given ...).",
          "twice as much ... as: iki katı kadar.",
          "be willing to + V1: -meye razı olmak.",
          "Amaç bildiren to-infinitive (to sell / to buy)."
        ],
        "translationTr": "Kendilerine kahve kupası verilen öğrenciler, onu satmak için diğer öğrencilerin aynı kupayı almak için ödemeye razı olduğu paranın yaklaşık iki katını talep etti."
      }
    ],
    "questions": [
      {
        "id": "rb071_q1",
        "type": "reading",
        "title": "Why Losses Loom Larger Than Gains",
        "question": "According to the passage, loss aversion means that _____ .",
        "options": {
          "A": "people always choose the option with the highest expected value",
          "B": "losses feel about twice as strong as equal gains",
          "C": "people enjoy winning money more than they fear losing it",
          "D": "investors usually sell shares as soon as they fall in value",
          "E": "most people are willing to accept any bet with a positive value"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Kavram Tanımı",
        "trapWarning": "A şıkkı geleneksel teorinin varsayımıdır. C şıkkı tersidir. D ve E metindeki örneklerle çelişir.",
        "explanation": "Bir miktarı kaybetmek, aynı miktarı kazanmanın verdiği hazdan yaklaşık iki kat daha acı verir (B şıkkı)."
      },
      {
        "id": "rb071_q2",
        "type": "reading",
        "title": "Why Losses Loom Larger Than Gains",
        "question": "The coffee mug experiment illustrates that people _____ .",
        "options": {
          "A": "are unwilling to buy objects they do not need",
          "B": "value things more highly once they own them",
          "C": "prefer money to physical objects in most situations",
          "D": "always sell their possessions for a fair price",
          "E": "pay more for items that are described positively"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Deneyin Gösterdiği (endowment effect)",
        "trapWarning": "E şıkkı çerçeveleme etkisiyle karıştırır. A, C ve D deneyden çıkmaz.",
        "explanation": "Kupa sahipleri satmak için alıcıların ödemeye razı olduğunun iki katını istemiştir; yani sahip olunan şeye daha fazla değer biçilir (B şıkkı)."
      },
      {
        "id": "rb071_q3",
        "type": "reading",
        "title": "Why Losses Loom Larger Than Gains",
        "question": "The medical treatment example shows that _____ .",
        "options": {
          "A": "survival rates are always more accurate and reliable than mortality rates",
          "B": "the same facts lead to different choices if worded differently",
          "C": "most patients do not really understand percentages or probabilities",
          "D": "doctors usually describe treatments in negative terms",
          "E": "people prefer treatments with higher mortality rates"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Çerçeveleme Etkisi",
        "trapWarning": "A şıkkı tuzaktır: iki tanım aynıdır. C, D ve E metinden çıkarılamaz.",
        "explanation": "Aynı bilgi farklı ifade edildiğinde insanlar farklı tercihler yapmıştır (B şıkkı)."
      },
      {
        "id": "rb071_q4",
        "type": "reading",
        "title": "Why Losses Loom Larger Than Gains",
        "question": "According to the last sentence, later research has _____ .",
        "options": {
          "A": "proved that loss aversion does not exist at all",
          "B": "qualified loss aversion without rejecting its core idea",
          "C": "shown that loss aversion is stronger for small amounts",
          "D": "replaced prospect theory with the older traditional economic theory",
          "E": "found that framing has no effect on medical decisions"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sonuç Yorumu",
        "trapWarning": "A ve D aşırıdır. C şıkkı bulguyu tersine çevirir. E şıkkı metinle çelişir.",
        "explanation": "Sonraki araştırmalar kayıptan kaçınmanın bazı durumlarda zayıf olabileceğini öne sürse de temel fikir etkili kalmaktadır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb072",
    "title": "The Flynn Effect",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Psychological Review & the work of James Flynn",
    "wordCount": 280,
    "passageText": "In the 1980s, the New Zealand political scientist James Flynn documented a striking fact: average scores on intelligence tests had been rising steadily throughout the twentieth century, by about three points per decade in many countries. Because IQ tests are periodically re-standardized so that the average score is always one hundred, the rise had gone largely unnoticed. If people from 1900 were scored against today's standards, their average IQ would be around seventy.\n\nThe gains were too rapid to be explained by genetic change, which happens over many generations. Researchers have therefore proposed environmental explanations. Better nutrition and health care, particularly in early childhood, may have improved brain development. Families became smaller, so parents could devote more attention to each child. Formal schooling expanded and lasted longer. Flynn himself argued that the most important change was in the kind of thinking modern societies demand. People increasingly learned to classify objects into abstract categories and to reason about hypothetical situations, exactly the skills that many IQ tests measure. The largest gains appeared on tests of abstract reasoning, while scores on vocabulary and arithmetic rose much less.\n\nMore recently, several studies have reported that the effect has slowed or even reversed in some wealthy countries, such as Norway, Denmark and Finland, since the 1990s. Analyses of Norwegian military conscripts, comparing brothers born in different years, suggest that the decline is caused by environmental factors rather than by changes in who has children. The causes of this reversal are still debated, with suggestions ranging from changes in education to changes in reading habits. Whatever the explanation, the Flynn effect shows that measured intelligence is far more sensitive to the environment than was once believed.",
    "vocabularyNotes": [
      {
        "word": "document",
        "meaningTr": "belgelemek",
        "contextNote": "Fiil olarak kayıt altına almak."
      },
      {
        "word": "standardize",
        "meaningTr": "standartlaştırmak",
        "contextNote": "re-standardize: yeniden standartlaştırmak."
      },
      {
        "word": "devote",
        "meaningTr": "adamak, ayırmak",
        "contextNote": "devote time/attention to."
      },
      {
        "word": "hypothetical",
        "meaningTr": "varsayımsal",
        "contextNote": "hypothesis kelimesinden."
      },
      {
        "word": "conscript",
        "meaningTr": "askere alınmış kişi",
        "contextNote": "conscription: zorunlu askerlik."
      },
      {
        "word": "reversal",
        "meaningTr": "tersine dönme",
        "contextNote": "reverse fiilinden."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "If people from 1900 were scored against today's standards, their average IQ would be around seventy.",
        "subject": "their average IQ (ortalama IQ'ları)",
        "mainVerb": "would be (olurdu)",
        "objectsAndComplements": "around seventy (yaklaşık yetmiş) + [If-clause: 1900'deki insanlar bugünün standartlarına göre puanlansaydı]",
        "grammaticalStructures": [
          "Type 2 koşul cümlesi (If + past, would + V1): gerçek dışı durum.",
          "Passive (were scored).",
          "against: -e göre, -e karşı (ölçüt bildirir)."
        ],
        "translationTr": "1900 yılındaki insanlar bugünün standartlarına göre puanlansaydı, ortalama IQ'ları yaklaşık yetmiş olurdu."
      }
    ],
    "questions": [
      {
        "id": "rb072_q1",
        "type": "reading",
        "title": "The Flynn Effect",
        "question": "According to the passage, the rise in IQ scores went largely unnoticed because _____ .",
        "options": {
          "A": "most countries stopped using intelligence tests after 1900",
          "B": "tests are regularly adjusted so the average stays at 100",
          "C": "the increase happened only in New Zealand",
          "D": "scores rose by less than one point per century",
          "E": "researchers did not publish any of their results until the 1980s"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "C ve D metinle çelişir. A ve E metinde yoktur.",
        "explanation": "IQ testleri ortalama hep yüz olacak şekilde düzenli olarak yeniden standartlaştırıldığı için artış fark edilmemiştir (B şıkkı)."
      },
      {
        "id": "rb072_q2",
        "type": "reading",
        "title": "The Flynn Effect",
        "question": "Why do researchers reject genetic change as the cause of the Flynn effect?",
        "options": {
          "A": "Because genes have no influence at all on human intelligence",
          "B": "Because the gains were too quick for genetic change",
          "C": "Because families became larger during the century",
          "D": "Because nutrition actually became worse in most countries",
          "E": "Because genetic tests are not allowed in schools"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Eleme Gerekçesi",
        "trapWarning": "A şıkkı aşırı bir genellemedir. C ve D metinle çelişir. E şıkkı ilgisizdir.",
        "explanation": "Artış, nesiller boyu gerçekleşen genetik değişimle açıklanamayacak kadar hızlıdır (B şıkkı)."
      },
      {
        "id": "rb072_q3",
        "type": "reading",
        "title": "The Flynn Effect",
        "question": "Flynn's own explanation emphasized that modern societies _____ .",
        "options": {
          "A": "provide children with better diets than in the past",
          "B": "require more abstract and hypothetical thinking",
          "C": "have reduced the number of years spent at school",
          "D": "focus education mainly on vocabulary and arithmetic",
          "E": "encourage parents to have larger families"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş Sahibi",
        "trapWarning": "A şıkkı diğer araştırmacıların açıklamalarından biridir. C ve E metinle çelişir. D şıkkı tuzaktır: kelime ve aritmetik puanları daha az artmıştır.",
        "explanation": "Flynn'e göre en önemli değişim, modern toplumların soyut kategoriler ve varsayımsal durumlar üzerine düşünmeyi gerektirmesidir (B şıkkı)."
      },
      {
        "id": "rb072_q4",
        "type": "reading",
        "title": "The Flynn Effect",
        "question": "The study of Norwegian brothers suggests that the recent decline in scores _____ .",
        "options": {
          "A": "is caused by changes in which people have children",
          "B": "comes from environmental, not genetic, factors",
          "C": "has affected only young men doing military service",
          "D": "began in the early decades of the twentieth century",
          "E": "proves that IQ tests are no longer reliable"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Araştırma Sonucu",
        "trapWarning": "A şıkkı çalışmanın özellikle dışladığı açıklamadır. C, D ve E metinden çıkarılamaz.",
        "explanation": "Kardeşlerin karşılaştırılması düşüşün kimin çocuk sahibi olduğundaki değişimden değil çevresel etkenlerden kaynaklandığını gösterir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb073",
    "title": "Why False News Travels Faster",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Science (Vosoughi, Roy & Aral, 2018)",
    "wordCount": 270,
    "passageText": "In 2018, researchers at the Massachusetts Institute of Technology published one of the largest studies ever conducted on the spread of news online. They analysed about 126,000 stories shared on Twitter by some three million people between 2006 and 2017, each of which had been checked by independent fact-checking organizations and classified as true or false. The results were striking. False stories reached more people, spread more quickly and penetrated more deeply into social networks than true ones. On average, true stories took about six times as long as false stories to reach 1,500 people.\n\nA common assumption is that automated accounts, or bots, are responsible for spreading misinformation. The researchers tested this by using an algorithm to remove bot activity from their data. False news still spread faster than true news, suggesting that humans, not bots, were mainly responsible for the difference.\n\nWhy would people share false stories more readily? The researchers found that false stories were more novel than true ones, meaning that they contained information users had not seen before, and that they provoked emotions such as surprise and disgust. True stories, by contrast, tended to inspire sadness, anticipation and trust. Sharing novel information may make people appear well-informed or interesting to others, which could explain the attraction of surprising claims regardless of their accuracy.\n\nThe study has some limitations: it focused on a single platform and on stories that had been fact-checked, which may not be typical of all news. Nevertheless, its findings suggest that efforts to fight misinformation cannot rely solely on detecting and removing bots; they must also address the human tendency to share what is new and surprising.",
    "vocabularyNotes": [
      {
        "word": "penetrate",
        "meaningTr": "nüfuz etmek, derinlemesine yayılmak",
        "contextNote": "İsim: penetration."
      },
      {
        "word": "automated",
        "meaningTr": "otomatik",
        "contextNote": "automate fiilinden."
      },
      {
        "word": "readily",
        "meaningTr": "kolayca, seve seve",
        "contextNote": "ready kelimesinden."
      },
      {
        "word": "novel",
        "meaningTr": "yeni, alışılmadık (sıfat)",
        "contextNote": "İsim olarak roman anlamına da gelir."
      },
      {
        "word": "provoke",
        "meaningTr": "kışkırtmak, uyandırmak",
        "contextNote": "provoke emotions: duyguları uyandırmak."
      },
      {
        "word": "solely",
        "meaningTr": "yalnızca",
        "contextNote": "sole: tek."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Efforts to fight misinformation cannot rely solely on detecting and removing bots; they must also address the human tendency to share what is new and surprising.",
        "subject": "Efforts to fight misinformation (yanlış bilgiyle mücadele çabaları)",
        "mainVerb": "cannot rely on / must address (dayanamaz / ele almalıdır)",
        "objectsAndComplements": "detecting and removing bots (botları tespit edip kaldırmaya) + the human tendency to share what is new and surprising",
        "grammaticalStructures": [
          "rely on + V-ing.",
          "solely: yalnızca.",
          "tendency to + V1: -me eğilimi.",
          "what-clause: yeni ve şaşırtıcı olanı (isim cümleciği)."
        ],
        "translationTr": "Yanlış bilgiyle mücadele çabaları yalnızca botları tespit edip kaldırmaya dayanamaz; insanların yeni ve şaşırtıcı olanı paylaşma eğilimini de ele almalıdır."
      }
    ],
    "questions": [
      {
        "id": "rb073_q1",
        "type": "reading",
        "title": "Why False News Travels Faster",
        "question": "According to the passage, compared with true stories, false stories _____ .",
        "options": {
          "A": "were shared mainly by automated accounts",
          "B": "reached more people and spread more quickly",
          "C": "took about six times longer to reach 1,500 people",
          "D": "were checked by fewer fact-checking organizations",
          "E": "tended to inspire trust and anticipation"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Karşılaştırma",
        "trapWarning": "C şıkkı oranı tersine çevirir: doğru haberler altı kat daha uzun sürmüştür. A şıkkı ikinci paragrafla, E üçüncü paragrafla çelişir. D şıkkı metinde yoktur.",
        "explanation": "Yanlış haberler daha fazla kişiye ulaşmış, daha hızlı yayılmış ve ağlara daha derinden nüfuz etmiştir (B şıkkı)."
      },
      {
        "id": "rb073_q2",
        "type": "reading",
        "title": "Why False News Travels Faster",
        "question": "What did the researchers find when they removed bot activity from the data?",
        "options": {
          "A": "True news began to spread faster than false news",
          "B": "False news still spread faster than true news",
          "C": "Most false stories disappeared from the platform",
          "D": "Bots had shared more true stories than false ones",
          "E": "The number of users dropped to a few thousand"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Deney Sonucu",
        "trapWarning": "A şıkkı sonucun tersidir. C, D ve E metinde yoktur.",
        "explanation": "Botlar çıkarıldığında da yanlış haberler daha hızlı yayılmaya devam etmiştir (B şıkkı)."
      },
      {
        "id": "rb073_q3",
        "type": "reading",
        "title": "Why False News Travels Faster",
        "question": "The researchers suggest that people may share false stories because _____ .",
        "options": {
          "A": "they are paid to do so by automated accounts",
          "B": "novel information can make the sharer look interesting",
          "C": "they always know perfectly well that the stories are false",
          "D": "true stories are too difficult to understand",
          "E": "fact-checkers encourage them to share surprising news"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Açıklama",
        "trapWarning": "C şıkkı metinde yoktur ve abartılıdır. A, D ve E metinle bağdaşmaz.",
        "explanation": "Yeni bilgi paylaşmak kişiyi bilgili veya ilginç gösterebilir (B şıkkı)."
      },
      {
        "id": "rb073_q4",
        "type": "reading",
        "title": "Why False News Travels Faster",
        "question": "The author's conclusion is that fighting misinformation _____ .",
        "options": {
          "A": "should focus only on removing bots from social media",
          "B": "must take account of human behaviour as well as bots",
          "C": "is impossible because people prefer false news",
          "D": "should be left to independent fact-checking organizations",
          "E": "is unnecessary because most news is true"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sonuç",
        "trapWarning": "A şıkkı son cümlenin reddettiği yaklaşımdır. C, D ve E yazarın vardığı sonuçlar değildir.",
        "explanation": "Mücadele sadece botlara değil, insanların yeni ve şaşırtıcı olanı paylaşma eğilimine de odaklanmalıdır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb074",
    "title": "Does Money Buy Happiness?",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from PNAS & the World Happiness Report",
    "wordCount": 266,
    "passageText": "In 1974, the economist Richard Easterlin observed a puzzle. Within any given country, richer people reported being happier than poorer people. Yet over time, as countries such as the United States became much wealthier, average reported happiness barely changed. This apparent contradiction, known as the Easterlin paradox, suggested that people care about their income relative to others rather than its absolute level, and that they quickly adapt to higher living standards.\n\nThe paradox has been widely debated. Using larger international data sets, some economists have found that average life satisfaction does rise with national income, both across countries and over time, although each additional dollar adds less as countries become richer. A much-cited 2010 study by Daniel Kahneman and Angus Deaton concluded that emotional well-being, as measured by daily feelings of joy or stress, stopped rising once annual household income reached about 75,000 dollars in the United States, while overall life satisfaction continued to increase.\n\nMore recent research has challenged even this threshold. A 2021 study using real-time reports of feelings from over 30,000 Americans found that emotional well-being kept rising with income well beyond 75,000 dollars. In 2023, the authors of the 2010 study and the 2021 study collaborated to resolve their disagreement. They concluded that for most people happiness continues to rise with income, but that among the unhappiest twenty percent, it levels off above about 100,000 dollars, suggesting that some sources of unhappiness, such as illness or grief, cannot be relieved by money. Most researchers agree that income matters most for those with little of it, and that factors such as health, relationships and a sense of purpose remain powerful influences on happiness.",
    "vocabularyNotes": [
      {
        "word": "paradox",
        "meaningTr": "paradoks, çelişki",
        "contextNote": "apparent contradiction ile açıklanır."
      },
      {
        "word": "relative",
        "meaningTr": "göreli; akraba",
        "contextNote": "relative to: -e göre."
      },
      {
        "word": "adapt to",
        "meaningTr": "-e uyum sağlamak",
        "contextNote": "İsim: adaptation."
      },
      {
        "word": "threshold",
        "meaningTr": "eşik",
        "contextNote": "a threshold of: ... eşiği."
      },
      {
        "word": "collaborate",
        "meaningTr": "iş birliği yapmak",
        "contextNote": "İsim: collaboration."
      },
      {
        "word": "level off",
        "meaningTr": "sabitlenmek, düzleşmek",
        "contextNote": "Artışın durduğu nokta için kullanılır."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "They concluded that for most people happiness continues to rise with income, but that among the unhappiest twenty percent, it levels off above about 100,000 dollars.",
        "subject": "They (araştırmacılar)",
        "mainVerb": "concluded (sonucuna vardılar)",
        "objectsAndComplements": "[that-clause 1: çoğu insan için mutluluğun gelirle birlikte artmaya devam ettiği] + [but that-clause 2: en mutsuz yüzde yirmide yaklaşık 100.000 doların üzerinde sabitlendiği]",
        "grammaticalStructures": [
          "İki paralel that-clause (that ... but that ...).",
          "continue to + V1.",
          "level off: sabitlenmek (phrasal verb).",
          "Superlative (the unhappiest twenty percent)."
        ],
        "translationTr": "Çoğu insan için mutluluğun gelirle birlikte artmaya devam ettiği, ancak en mutsuz yüzde yirmilik kesimde yaklaşık 100.000 doların üzerinde sabitlendiği sonucuna vardılar."
      }
    ],
    "questions": [
      {
        "id": "rb074_q1",
        "type": "reading",
        "title": "Does Money Buy Happiness?",
        "question": "The Easterlin paradox refers to the observation that _____ .",
        "options": {
          "A": "poorer people within a country reported being much happier than richer people did",
          "B": "richer people were happier, yet growing national wealth did not raise average happiness",
          "C": "happiness rose sharply and steadily in the United States as the country became wealthier",
          "D": "people in poor countries were happier than those in rich countries",
          "E": "income had no effect on happiness either within or between countries"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Kavram",
        "trapWarning": "A şıkkı ülke içi bulguyu tersine çevirir. C şıkkı paradoksun tersidir. E şıkkı ülke içi bulguyla çelişir. D şıkkı metinde yoktur.",
        "explanation": "Ülke içinde zenginler daha mutlu, ama ülke zenginleştikçe ortalama mutluluk neredeyse değişmemiş (B şıkkı)."
      },
      {
        "id": "rb074_q2",
        "type": "reading",
        "title": "Does Money Buy Happiness?",
        "question": "According to the 2010 study by Kahneman and Deaton, _____ .",
        "options": {
          "A": "life satisfaction stopped rising at about 75,000 dollars",
          "B": "daily emotional well-being levelled off near 75,000 dollars",
          "C": "people earning over 75,000 dollars a year were less happy than others",
          "D": "income had no effect on emotional well-being",
          "E": "happiness depended mainly on relative income"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Bulgu Ayrımı",
        "trapWarning": "A şıkkı tuzaktır: yaşam doyumu artmaya devam etmiştir; duran günlük duygusal iyi oluştur. C, D ve E metinle çelişir.",
        "explanation": "Günlük duygusal iyi oluş yaklaşık 75.000 dolarda artmayı bırakmış, genel yaşam doyumu artmaya devam etmiştir (B şıkkı)."
      },
      {
        "id": "rb074_q3",
        "type": "reading",
        "title": "Does Money Buy Happiness?",
        "question": "The 2023 collaboration concluded that _____ .",
        "options": {
          "A": "money has no real effect on the happiness of most people",
          "B": "happiness rises with income for most, but not the unhappiest",
          "C": "the 75,000-dollar threshold applies to everyone",
          "D": "illness and grief can be fully relieved by higher income",
          "E": "the 2021 study had been based on incorrect or incomplete data"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Uzlaşma Sonucu",
        "trapWarning": "A ve C metinle çelişir. D şıkkı tersidir. E şıkkı metinde yoktur.",
        "explanation": "Çoğu insan için mutluluk gelirle artar; en mutsuz yüzde yirmide ise belli bir noktadan sonra sabitlenir (B şıkkı)."
      },
      {
        "id": "rb074_q4",
        "type": "reading",
        "title": "Does Money Buy Happiness?",
        "question": "According to the last sentence, most researchers agree that _____ .",
        "options": {
          "A": "income is the only factor that determines happiness",
          "B": "income matters most to those who have little of it",
          "C": "relationships are less important than income",
          "D": "wealthy people do not benefit from extra income at all",
          "E": "a sense of purpose has no effect on happiness"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Ortak Görüş",
        "trapWarning": "A, C ve E son cümlede sayılan diğer etkenlerle çelişir. D şıkkı \"continues to rise\" bulgusuyla çelişir.",
        "explanation": "Gelir en çok az geliri olanlar için önemlidir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb075",
    "title": "The Pressure to Conform",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Social Psychology Quarterly & Solomon Asch's research",
    "wordCount": 268,
    "passageText": "In the early 1950s, the psychologist Solomon Asch conducted a series of experiments that became classics of social psychology. Participants were told they were taking part in a study of visual perception. Seated in a room with several other people, they were shown a line and asked which of three comparison lines matched its length. The answer was obvious. However, all the other people in the room were secretly working with the experimenter, and on certain trials they unanimously gave the same wrong answer before the real participant responded.\n\nThe results surprised Asch himself. Across the critical trials, participants went along with the obviously incorrect majority about a third of the time, and roughly three-quarters conformed at least once. When interviewed afterwards, some said they had genuinely begun to doubt their own perception; others knew the group was wrong but did not want to appear different. When participants could write their answers privately, conformity dropped sharply. And when just one other person in the group gave the correct answer, conformity fell dramatically, even if that ally later disagreed with the participant on other trials.\n\nAsch's findings are often presented as evidence that people are sheep, but this reading ignores an important detail: in about two-thirds of the critical trials, participants resisted the group. Later studies have found that levels of conformity vary across cultures and historical periods, tending to be higher in societies that place greater value on group harmony. Some researchers also note that in everyday life, following the majority is often a reasonable strategy, since groups usually have access to more information than any single person.",
    "vocabularyNotes": [
      {
        "word": "conform",
        "meaningTr": "uymak, uyum sağlamak",
        "contextNote": "İsim: conformity."
      },
      {
        "word": "perception",
        "meaningTr": "algı",
        "contextNote": "perceive fiilinden."
      },
      {
        "word": "unanimously",
        "meaningTr": "oybirliğiyle",
        "contextNote": "unanimous: oybirliği."
      },
      {
        "word": "go along with",
        "meaningTr": "-e uymak, katılmak",
        "contextNote": "Phrasal verb."
      },
      {
        "word": "ally",
        "meaningTr": "müttefik",
        "contextNote": "Çoğulu: allies."
      },
      {
        "word": "resist",
        "meaningTr": "direnmek",
        "contextNote": "İsim: resistance."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "When just one other person in the group gave the correct answer, conformity fell dramatically, even if that ally later disagreed with the participant on other trials.",
        "subject": "conformity (uyma davranışı)",
        "mainVerb": "fell (düştü)",
        "objectsAndComplements": "dramatically (çarpıcı biçimde) + [When-clause] + [even if-clause]",
        "grammaticalStructures": [
          "When: zaman/koşul.",
          "just one: yalnızca bir (vurgu).",
          "even if: -se bile.",
          "disagree with: ile aynı fikirde olmamak."
        ],
        "translationTr": "Gruptaki yalnızca bir kişi bile doğru cevabı verdiğinde, bu müttefik daha sonra diğer denemelerde katılımcıyla aynı fikirde olmasa bile, uyma davranışı çarpıcı biçimde düştü."
      }
    ],
    "questions": [
      {
        "id": "rb075_q1",
        "type": "reading",
        "title": "The Pressure to Conform",
        "question": "In Asch's experiments, the other people in the room _____ .",
        "options": {
          "A": "were real participants who genuinely made mistakes",
          "B": "had been told to give the same wrong answer on some trials",
          "C": "were experts in visual perception invited by the researchers",
          "D": "wrote their answers privately on paper before speaking",
          "E": "always gave the correct answer on every single trial"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Deney Düzeni",
        "trapWarning": "A şıkkı metinle çelişir: gizlice deneyciyle çalışıyorlardı. E şıkkı tam tersidir. C ve D metinde yoktur.",
        "explanation": "Odadaki diğer kişiler deneyciyle çalışıyordu ve bazı denemelerde hep birlikte aynı yanlış cevabı verdiler (B şıkkı)."
      },
      {
        "id": "rb075_q2",
        "type": "reading",
        "title": "The Pressure to Conform",
        "question": "According to the passage, conformity decreased sharply when _____ .",
        "options": {
          "A": "the lines were made more difficult to compare",
          "B": "one other group member gave the correct answer",
          "C": "participants were told the true purpose of the study",
          "D": "the group became larger",
          "E": "participants were interviewed afterwards"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Koşul",
        "trapWarning": "A, C, D ve E metinde uyma davranışını azaltan koşullar olarak geçmez.",
        "explanation": "Gruptan yalnızca bir kişi doğru cevabı verdiğinde uyma davranışı çarpıcı biçimde düşmüştür (B şıkkı)."
      },
      {
        "id": "rb075_q3",
        "type": "reading",
        "title": "The Pressure to Conform",
        "question": "The author argues that describing Asch's results as proof that people are \"sheep\" _____ .",
        "options": {
          "A": "is fully supported by the experimental data",
          "B": "overlooks how often people resisted the group",
          "C": "is the conclusion Asch himself reached",
          "D": "applies only to people living in certain cultures",
          "E": "was confirmed by all later studies"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yazarın İtirazı",
        "trapWarning": "A, C ve E metnin itirazıyla çelişir. D şıkkı kültürel farklılık bilgisini yanlış bağlar.",
        "explanation": "Bu yorum kritik denemelerin yaklaşık üçte ikisinde katılımcıların gruba direndiğini göz ardı eder (B şıkkı)."
      },
      {
        "id": "rb075_q4",
        "type": "reading",
        "title": "The Pressure to Conform",
        "question": "Some researchers suggest that following the majority in everyday life _____ .",
        "options": {
          "A": "is always a sign of a weak personality",
          "B": "can be sensible as groups often know more",
          "C": "should be avoided in all circumstances",
          "D": "is more common among scientists than others",
          "E": "happens only in experiments"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş",
        "trapWarning": "A ve C aşırı genellemelerdir. D ve E metinde yoktur.",
        "explanation": "Gruplar genellikle tek bir kişiden daha fazla bilgiye sahip olduğu için çoğunluğa uymak makul bir strateji olabilir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb076",
    "title": "The Growing Problem of Space Debris",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from European Space Agency reports & Science",
    "wordCount": 280,
    "passageText": "Since the launch of Sputnik in 1957, humanity has placed thousands of objects into orbit around the Earth. Many of them are no longer working. Along with active satellites, low Earth orbit now contains dead satellites, spent rocket stages and millions of fragments created by explosions and collisions. The European Space Agency estimates that there are more than 36,000 pieces of debris larger than ten centimetres and around a million between one and ten centimetres. Because objects in orbit travel at about 28,000 kilometres per hour, even a fragment the size of a marble can strike with the energy of a hand grenade.\n\nThe risk is growing quickly. Companies are launching large constellations of small satellites to provide internet access, and the number of active satellites has increased several times over in only a few years. In 1978, the NASA scientist Donald Kessler warned that if the density of objects in orbit became high enough, collisions could trigger a chain reaction: each collision would create more fragments, which would cause further collisions, eventually making some orbits unusable for generations. This scenario is now known as the Kessler syndrome.\n\nSeveral measures are being taken to reduce the danger. International guidelines recommend that satellites be removed from low orbit within twenty-five years of the end of their mission, and some agencies now require five. Operators move satellites to avoid predicted collisions, and companies are developing spacecraft designed to capture and remove large pieces of debris. However, compliance with the guidelines is voluntary in many countries, and tests in which countries deliberately destroyed their own satellites with missiles have added thousands of new fragments. Experts argue that binding international rules will be needed to keep orbit usable.",
    "vocabularyNotes": [
      {
        "word": "debris",
        "meaningTr": "enkaz, döküntü",
        "contextNote": "space debris: uzay çöpü."
      },
      {
        "word": "fragment",
        "meaningTr": "parça, kırıntı",
        "contextNote": "Fiil olarak parçalanmak."
      },
      {
        "word": "constellation",
        "meaningTr": "takımyıldız; uydu ağı",
        "contextNote": "Burada çok sayıda uydudan oluşan ağ."
      },
      {
        "word": "density",
        "meaningTr": "yoğunluk",
        "contextNote": "dense: yoğun."
      },
      {
        "word": "compliance",
        "meaningTr": "uyum, uyma",
        "contextNote": "comply with: -e uymak."
      },
      {
        "word": "binding",
        "meaningTr": "bağlayıcı",
        "contextNote": "binding rules: bağlayıcı kurallar."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Kessler warned that if the density of objects in orbit became high enough, collisions could trigger a chain reaction.",
        "subject": "Kessler",
        "mainVerb": "warned (uyardı)",
        "objectsAndComplements": "[that-clause: yörüngedeki nesnelerin yoğunluğu yeterince yükselirse çarpışmaların bir zincirleme reaksiyonu tetikleyebileceği]",
        "grammaticalStructures": [
          "Dolaylı anlatımda koşul cümlesi (if ... became, ... could).",
          "sıfat + enough: yeterince ...",
          "trigger: tetiklemek."
        ],
        "translationTr": "Kessler, yörüngedeki nesnelerin yoğunluğu yeterince yükselirse çarpışmaların zincirleme bir reaksiyonu tetikleyebileceği konusunda uyardı."
      }
    ],
    "questions": [
      {
        "id": "rb076_q1",
        "type": "reading",
        "title": "The Growing Problem of Space Debris",
        "question": "According to the passage, even small pieces of debris are dangerous because they _____ .",
        "options": {
          "A": "are too small to be seen by any satellite",
          "B": "move at extremely high speeds",
          "C": "contain explosive material from rockets",
          "D": "can fall back to Earth at any moment",
          "E": "are made of heavier metals than satellites"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "C şıkkı el bombası benzetmesini gerçek patlayıcı gibi okur. A, D ve E metinde yoktur.",
        "explanation": "Yörüngedeki nesneler saatte yaklaşık 28.000 km hızla hareket ettiği için küçük bir parça bile büyük enerjiyle çarpar (B şıkkı)."
      },
      {
        "id": "rb076_q2",
        "type": "reading",
        "title": "The Growing Problem of Space Debris",
        "question": "The \"Kessler syndrome\" refers to _____ .",
        "options": {
          "A": "a rule that satellites must leave orbit within five years",
          "B": "a chain of collisions that could make orbits unusable",
          "C": "the illness suffered by astronauts after long missions",
          "D": "the rapid growth of internet satellite constellations",
          "E": "the destruction of satellites by missiles"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kavram Tanımı",
        "trapWarning": "A, D ve E metinde geçen başka unsurlardır. C şıkkı \"syndrome\" kelimesinin tıbbi çağrışımına dayanan tuzaktır.",
        "explanation": "Her çarpışmanın yeni parçalar yaratıp yeni çarpışmalara yol açtığı ve bazı yörüngeleri kullanılamaz hale getirdiği zincirleme süreçtir (B şıkkı)."
      },
      {
        "id": "rb076_q3",
        "type": "reading",
        "title": "The Growing Problem of Space Debris",
        "question": "Why does the author mention satellite constellations?",
        "options": {
          "A": "To show that debris is decreasing",
          "B": "To explain why the risk is rising quickly",
          "C": "To describe a method of removing debris",
          "D": "To argue that internet access is unnecessary",
          "E": "To give an example of a missile test"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin İşlevi",
        "trapWarning": "A şıkkı tersidir. C, D ve E bağlamla ilgisizdir.",
        "explanation": "Uydu ağları aktif uydu sayısını birkaç kat artırmıştır; bu da riskin hızla büyümesinin bir nedenidir (B şıkkı)."
      },
      {
        "id": "rb076_q4",
        "type": "reading",
        "title": "The Growing Problem of Space Debris",
        "question": "The experts mentioned in the last sentence believe that _____ .",
        "options": {
          "A": "voluntary guidelines are already sufficient",
          "B": "binding international rules will be necessary",
          "C": "debris removal spacecraft will solve the problem",
          "D": "missile tests are a useful way to remove debris",
          "E": "satellites should no longer be launched at all"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Uzman Görüşü",
        "trapWarning": "A şıkkı son cümlenin tersidir. D şıkkı metinle çelişir: testler parça eklemiştir. C ve E aşırıdır.",
        "explanation": "Uzmanlar yörüngeyi kullanılabilir tutmak için bağlayıcı uluslararası kuralların gerekeceğini savunur (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb077",
    "title": "Predicting Earthquakes Versus Warning of Them",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Nature Geoscience & USGS publications",
    "wordCount": 285,
    "passageText": "Despite decades of research, scientists still cannot predict earthquakes in the sense that most people understand the word: stating in advance that an earthquake of a particular size will strike a particular place within a specific period. Many possible warning signs have been investigated, including small foreshocks, changes in groundwater levels, releases of radon gas and unusual animal behaviour, but none has proved reliable. Foreshocks, for instance, can only be identified as foreshocks after the main earthquake has occurred.\n\nWhat seismologists can do is estimate long-term probabilities. By studying the history of a fault and the rate at which stress builds up along it, they can calculate, for example, that there is a certain percentage chance of a major earthquake in a region over the next thirty years. Such forecasts do not tell anyone when to evacuate, but they are valuable for setting building codes, planning emergency services and deciding where to strengthen hospitals and schools.\n\nA different approach, earthquake early warning, has proved more practical. When an earthquake begins, it sends out fast but relatively weak waves followed by slower, more destructive ones. Networks of sensors near the source can detect the first waves and send alerts electronically, which travel faster than the seismic waves themselves. Depending on the distance from the epicentre, people may receive a warning a few seconds to a minute before strong shaking arrives. This may sound insignificant, but it is enough time to stop trains, halt surgery, open fire station doors and allow people to take cover. Japan, Mexico and parts of the United States already operate such systems. Their main limitation is that places closest to the epicentre, where shaking is often strongest, receive little or no warning.",
    "vocabularyNotes": [
      {
        "word": "foreshock",
        "meaningTr": "öncü deprem",
        "contextNote": "aftershock: artçı deprem."
      },
      {
        "word": "seismologist",
        "meaningTr": "sismolog, deprem bilimci",
        "contextNote": "seismic: sismik."
      },
      {
        "word": "fault",
        "meaningTr": "fay; hata",
        "contextNote": "fault line: fay hattı."
      },
      {
        "word": "building code",
        "meaningTr": "yapı yönetmeliği",
        "contextNote": "İnşaat kuralları."
      },
      {
        "word": "epicentre",
        "meaningTr": "merkez üssü",
        "contextNote": "AmE: epicenter."
      },
      {
        "word": "take cover",
        "meaningTr": "siper almak, korunmak",
        "contextNote": "Afet durumunda güvenli yere geçmek."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Networks of sensors near the source can detect the first waves and send alerts electronically, which travel faster than the seismic waves themselves.",
        "subject": "Networks of sensors near the source (kaynağa yakın sensör ağları)",
        "mainVerb": "can detect ... and send (tespit edebilir ve gönderebilir)",
        "objectsAndComplements": "the first waves (ilk dalgaları) + alerts electronically + [which-clause: sismik dalgaların kendisinden daha hızlı ilerleyen]",
        "grammaticalStructures": [
          "Paralel modal fiiller (can detect and send).",
          "Non-defining relative clause (which travel faster ...).",
          "Comparative (faster than).",
          "Reflexive vurgu (the seismic waves themselves)."
        ],
        "translationTr": "Kaynağa yakın sensör ağları ilk dalgaları tespit edip uyarıları elektronik olarak gönderebilir; bu uyarılar sismik dalgaların kendisinden daha hızlı ilerler."
      }
    ],
    "questions": [
      {
        "id": "rb077_q1",
        "type": "reading",
        "title": "Predicting Earthquakes Versus Warning of Them",
        "question": "According to the passage, foreshocks are not useful for prediction because _____ .",
        "options": {
          "A": "they occur only after the large earthquakes have ended",
          "B": "they can be recognized only after the main quake",
          "C": "they are too weak to be detected by sensors",
          "D": "they are mainly caused by changes in groundwater levels",
          "E": "they happen too far from the epicentre"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "A şıkkı tuzaktır: öncü depremler önce gelir ama ancak ana depremden sonra öncü olarak tanınır. C, D ve E metinde yoktur.",
        "explanation": "Öncü depremler ancak ana deprem gerçekleştikten sonra öncü deprem olarak tanımlanabilir (B şıkkı)."
      },
      {
        "id": "rb077_q2",
        "type": "reading",
        "title": "Predicting Earthquakes Versus Warning of Them",
        "question": "Long-term earthquake forecasts are described as useful for _____ .",
        "options": {
          "A": "telling people exactly when they need to evacuate their homes",
          "B": "setting building rules and planning emergency services",
          "C": "stopping trains and halting surgery a few seconds before shaking",
          "D": "detecting the first waves of an earthquake",
          "E": "measuring releases of radon gas"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Kullanım Alanı",
        "trapWarning": "A şıkkı metnin açıkça reddettiği kullanımdır. C ve D erken uyarı sistemlerine aittir. E şıkkı metinde tahmin girişimi olarak geçer.",
        "explanation": "Uzun vadeli tahminler yapı yönetmelikleri ve acil durum planlaması için değerlidir (B şıkkı)."
      },
      {
        "id": "rb077_q3",
        "type": "reading",
        "title": "Predicting Earthquakes Versus Warning of Them",
        "question": "Earthquake early warning is possible because _____ .",
        "options": {
          "A": "scientists can now predict quakes several days in advance",
          "B": "electronic alerts travel faster than the seismic waves",
          "C": "animals behave unusually before large earthquakes",
          "D": "the most destructive waves arrive first",
          "E": "sensors are placed in every building"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Mekanizma",
        "trapWarning": "A şıkkı ilk paragrafla çelişir. D şıkkı sırayı tersine çevirir. C şıkkı güvenilmez bulunmuş bir işarettir. E şıkkı metinde yoktur.",
        "explanation": "Elektronik uyarılar sismik dalgalardan daha hızlı yol alır (B şıkkı)."
      },
      {
        "id": "rb077_q4",
        "type": "reading",
        "title": "Predicting Earthquakes Versus Warning of Them",
        "question": "The main limitation of early warning systems is that _____ .",
        "options": {
          "A": "they give warnings only after the strong shaking has already ended",
          "B": "areas nearest the epicentre get little or no warning",
          "C": "they are used only in Japan and in no other country",
          "D": "they cannot stop trains or halt surgery",
          "E": "they require warnings of at least an hour"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sınırlılık",
        "trapWarning": "C şıkkı metinle çelişir: Meksika ve ABD'de de vardır. D şıkkı metindeki faydalarla çelişir. A ve E metinde yoktur.",
        "explanation": "Sarsıntının genellikle en güçlü olduğu merkez üssüne en yakın yerler çok az uyarı alır ya da hiç almaz (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb078",
    "title": "Searching for New Antibiotics",
    "topic": "Science & Technology",
    "sourceHint": "Adapted from Cell & Nature Reviews Drug Discovery",
    "wordCount": 277,
    "passageText": "Most of the antibiotics used today belong to classes discovered between the 1940s and the 1960s, a period often called the golden age of antibiotic discovery. Many came from soil microorganisms, which produce chemicals to compete with one another. Since then, the discovery of genuinely new classes has slowed dramatically, while bacteria have steadily evolved resistance to existing drugs. Drug-resistant infections were associated with nearly five million deaths in 2019.\n\nThe slowdown has scientific and economic causes. The easiest compounds to find in soil were found long ago, and many promising candidates fail because they are toxic to human cells. At the same time, new antibiotics are commercially unattractive. Doctors are encouraged to keep new drugs in reserve for cases where older ones fail, in order to slow the development of resistance, and patients typically take antibiotics for only a week or two. As a result, companies that develop a new antibiotic often sell very little of it, and several small firms have gone bankrupt shortly after receiving approval for their drugs.\n\nScientists are exploring new sources of drugs. Only a small fraction of soil bacteria can be grown in the laboratory, and new techniques that allow these unculturable species to grow have already led to the discovery of compounds such as teixobactin. Researchers are also using artificial intelligence to screen millions of molecules for antibacterial activity; in 2020, a machine-learning model identified a compound, later named halicin, that killed many resistant bacteria in laboratory tests. Governments are also experimenting with new payment models, such as subscription schemes in which health systems pay a fixed annual fee for access to a new antibiotic regardless of how much is used.",
    "vocabularyNotes": [
      {
        "word": "genuinely",
        "meaningTr": "gerçekten, hakikaten",
        "contextNote": "genuine: gerçek, sahici."
      },
      {
        "word": "resistance",
        "meaningTr": "direnç",
        "contextNote": "antibiotic resistance: antibiyotik direnci."
      },
      {
        "word": "compound",
        "meaningTr": "bileşik",
        "contextNote": "Kimya terimi."
      },
      {
        "word": "in reserve",
        "meaningTr": "yedekte",
        "contextNote": "keep in reserve: yedekte tutmak."
      },
      {
        "word": "unculturable",
        "meaningTr": "kültürü yapılamayan",
        "contextNote": "Laboratuvarda üretilemeyen."
      },
      {
        "word": "screen",
        "meaningTr": "taramak",
        "contextNote": "screen molecules: molekülleri taramak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Doctors are encouraged to keep new drugs in reserve for cases where older ones fail, in order to slow the development of resistance.",
        "subject": "Doctors (doktorlar)",
        "mainVerb": "are encouraged (teşvik edilir)",
        "objectsAndComplements": "to keep new drugs in reserve (yeni ilaçları yedekte tutmaya) + [where-clause: eski ilaçların başarısız olduğu durumlar için] + [amaç: direncin gelişimini yavaşlatmak için]",
        "grammaticalStructures": [
          "Passive + to-infinitive (are encouraged to keep).",
          "Relative adverb where (cases where ...).",
          "ones: drugs yerine geçen zamir.",
          "in order to + V1: amaç."
        ],
        "translationTr": "Direncin gelişimini yavaşlatmak için doktorlar, yeni ilaçları eski ilaçların başarısız olduğu durumlar için yedekte tutmaya teşvik edilir."
      }
    ],
    "questions": [
      {
        "id": "rb078_q1",
        "type": "reading",
        "title": "Searching for New Antibiotics",
        "question": "According to the passage, the period between the 1940s and the 1960s was important because _____ .",
        "options": {
          "A": "bacteria had not yet developed any resistance",
          "B": "most of today's antibiotic classes were discovered then",
          "C": "artificial intelligence was first used in medicine",
          "D": "soil bacteria were grown in laboratories for the first time",
          "E": "governments began paying subscriptions for antibiotics"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay",
        "trapWarning": "C ve E günümüze ait gelişmelerdir. A ve D metinde yoktur.",
        "explanation": "Bugün kullanılan antibiyotiklerin çoğu bu dönemde keşfedilen sınıflara aittir (B şıkkı)."
      },
      {
        "id": "rb078_q2",
        "type": "reading",
        "title": "Searching for New Antibiotics",
        "question": "New antibiotics are commercially unattractive mainly because _____ .",
        "options": {
          "A": "they are usually more toxic than older antibiotics",
          "B": "they are used sparingly and for short periods",
          "C": "patients refuse to take them for more than a week",
          "D": "governments set their prices far too high",
          "E": "they are difficult to find in the soil"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Ekonomik Sebep",
        "trapWarning": "A ve E bilimsel zorluklardır, ticari değil. C ve D metinde yoktur.",
        "explanation": "Yeni ilaçlar yedekte tutulur ve kısa süre kullanılır; bu yüzden şirketler çok az satış yapar (B şıkkı)."
      },
      {
        "id": "rb078_q3",
        "type": "reading",
        "title": "Searching for New Antibiotics",
        "question": "The examples of teixobactin and halicin show that _____ .",
        "options": {
          "A": "the golden age of discovery has finally ended",
          "B": "new methods are helping scientists find compounds",
          "C": "soil bacteria are no longer useful for drug discovery",
          "D": "machine learning can replace laboratory tests",
          "E": "all resistant bacteria can now be treated successfully"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneklerin İşlevi",
        "trapWarning": "C şıkkı teixobactin örneğiyle çelişir. D ve E aşırıdır. A şıkkı örneklerin amacı değildir.",
        "explanation": "Yeni kültür teknikleri ve yapay zekâ yeni bileşiklerin keşfine yardımcı olmaktadır (B şıkkı)."
      },
      {
        "id": "rb078_q4",
        "type": "reading",
        "title": "Searching for New Antibiotics",
        "question": "Under a subscription scheme, health systems _____ .",
        "options": {
          "A": "pay according to the number of patients treated",
          "B": "pay a fixed yearly fee whatever the amount used",
          "C": "buy antibiotics only when older drugs fail",
          "D": "require companies to lower the price of old drugs",
          "E": "develop new antibiotics in their own laboratories"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Tanım",
        "trapWarning": "A şıkkı modelin tersidir. C ve D metinde yoktur. E şıkkı metinle ilgisizdir.",
        "explanation": "Sağlık sistemleri ne kadar kullanıldığından bağımsız olarak sabit bir yıllık ücret öder (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb079",
    "title": "The New Weight-Loss Drugs",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from The New England Journal of Medicine & Nature Medicine",
    "wordCount": 260,
    "passageText": "A new class of drugs has transformed the treatment of obesity. Originally developed for type 2 diabetes, medicines such as semaglutide mimic a hormone called GLP-1, which the gut releases after eating. The hormone stimulates insulin production, slows the emptying of the stomach and acts on areas of the brain that regulate appetite, making people feel full sooner and for longer. In clinical trials, patients taking semaglutide lost on average about fifteen percent of their body weight over sixteen months, far more than with earlier medications and closer to the results of weight-loss surgery.\n\nThe benefits appear to extend beyond weight. A large trial published in 2023 found that semaglutide reduced the risk of heart attacks, strokes and cardiovascular deaths by about a fifth in people with obesity and heart disease, even among those who did not have diabetes. Researchers are now investigating whether the drugs might also help with kidney disease, sleep apnoea and even addiction.\n\nThe drugs nevertheless raise important questions. Common side effects include nausea and digestive problems, and some patients stop treatment because of them. Studies show that most people regain much of the lost weight within a year of stopping, suggesting that treatment may need to continue indefinitely. Weight loss also includes some loss of muscle, which may be a concern for older patients. Finally, the drugs are expensive, and demand has at times exceeded supply, leading to shortages for diabetes patients who depend on them. Health systems must therefore decide who should have priority access and how to pay for treatment that may last for life.",
    "vocabularyNotes": [
      {
        "word": "mimic",
        "meaningTr": "taklit etmek",
        "contextNote": "Eş anlamlısı: imitate."
      },
      {
        "word": "regulate",
        "meaningTr": "düzenlemek",
        "contextNote": "İsim: regulation."
      },
      {
        "word": "appetite",
        "meaningTr": "iştah",
        "contextNote": "suppress appetite: iştahı bastırmak."
      },
      {
        "word": "nausea",
        "meaningTr": "mide bulantısı",
        "contextNote": "Sıfat: nauseous."
      },
      {
        "word": "regain",
        "meaningTr": "geri kazanmak",
        "contextNote": "regain weight: kilo geri almak."
      },
      {
        "word": "indefinitely",
        "meaningTr": "süresiz olarak",
        "contextNote": "definite: kesin."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Studies show that most people regain much of the lost weight within a year of stopping, suggesting that treatment may need to continue indefinitely.",
        "subject": "Studies (çalışmalar)",
        "mainVerb": "show (göstermektedir)",
        "objectsAndComplements": "[that-clause: çoğu insanın bıraktıktan sonraki bir yıl içinde verdiği kilonun çoğunu geri aldığını] + [participle: tedavinin süresiz devam etmesi gerekebileceğini düşündürerek]",
        "grammaticalStructures": [
          "within + süre + of: -den sonraki ... içinde.",
          "Reduced relative (the lost weight).",
          "Sonuç/yorum bildiren -ing (suggesting that ...).",
          "may need to + V1."
        ],
        "translationTr": "Çalışmalar çoğu insanın ilacı bıraktıktan sonraki bir yıl içinde verdiği kilonun büyük kısmını geri aldığını göstermektedir; bu da tedavinin süresiz devam etmesi gerekebileceğini düşündürmektedir."
      }
    ],
    "questions": [
      {
        "id": "rb079_q1",
        "type": "reading",
        "title": "The New Weight-Loss Drugs",
        "question": "According to the passage, GLP-1 drugs help people lose weight by _____ .",
        "options": {
          "A": "preventing the body from absorbing fat from food",
          "B": "making people feel full sooner and for longer",
          "C": "increasing the amount of exercise people do",
          "D": "removing part of the stomach without surgery",
          "E": "reducing insulin production after meals"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Mekanizma",
        "trapWarning": "E şıkkı tersidir: hormon insülin üretimini uyarır. D şıkkı ameliyatla karıştırır. A ve C metinde yoktur.",
        "explanation": "İlaçlar iştahı düzenleyen beyin bölgelerine etki ederek insanların daha erken ve daha uzun süre tok hissetmesini sağlar (B şıkkı)."
      },
      {
        "id": "rb079_q2",
        "type": "reading",
        "title": "The New Weight-Loss Drugs",
        "question": "The 2023 trial found that semaglutide _____ .",
        "options": {
          "A": "helped only those patients who also had type 2 diabetes",
          "B": "lowered cardiovascular risk even without diabetes",
          "C": "caused more heart attacks than a placebo",
          "D": "cured kidney disease and sleep apnoea",
          "E": "worked better than weight-loss surgery"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Bulgu",
        "trapWarning": "A şıkkı metnin özellikle belirttiği bilgiyle çelişir. D şıkkı araştırılmakta olan bir konudur. C ve E metinle çelişir.",
        "explanation": "İlaç diyabeti olmayanlarda bile kalp krizi, inme ve kardiyovasküler ölüm riskini yaklaşık beşte bir azaltmıştır (B şıkkı)."
      },
      {
        "id": "rb079_q3",
        "type": "reading",
        "title": "The New Weight-Loss Drugs",
        "question": "Which of the following is NOT mentioned as a concern about the drugs?",
        "options": {
          "A": "Digestive side effects such as nausea",
          "B": "Weight regain after stopping treatment",
          "C": "Loss of muscle in older patients",
          "D": "Damage to the liver after long use",
          "E": "High cost and supply shortages"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E son paragrafta sayılır.",
        "explanation": "Metin karaciğer hasarından söz etmez (D şıkkı)."
      },
      {
        "id": "rb079_q4",
        "type": "reading",
        "title": "The New Weight-Loss Drugs",
        "question": "The final sentence suggests that health systems face _____ .",
        "options": {
          "A": "no difficulty at all, since the drugs are cheap",
          "B": "hard choices about access and costs",
          "C": "pressure to ban the drugs entirely",
          "D": "a surplus of drugs for diabetes patients",
          "E": "a decline in demand for the drugs"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sonuç Çıkarımı",
        "trapWarning": "A ve D metinle çelişir. C ve E metinde yoktur.",
        "explanation": "Sağlık sistemleri kimin öncelikli erişim alacağına ve ömür boyu sürebilecek tedavinin nasıl ödeneceğine karar vermek zorundadır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb080",
    "title": "Hearing Loss and the Risk of Dementia",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from The Lancet & JAMA Neurology",
    "wordCount": 274,
    "passageText": "Hearing loss is extremely common in later life; about two-thirds of people over seventy have some degree of it. Because it develops gradually and is not painful, it often goes untreated for years. Yet a growing body of research suggests that it may be one of the most important modifiable risk factors for dementia. The Lancet Commission on dementia estimated in 2020 that untreated hearing loss in midlife could account for around eight percent of dementia cases worldwide, more than any other single modifiable factor.\n\nScientists have proposed several explanations for the link. One is cognitive load: when hearing is poor, the brain must work harder to understand speech, which may draw resources away from memory and thinking. Another is social isolation, since people who struggle to follow conversations may withdraw from social activities, and isolation is itself linked to cognitive decline. A third possibility is that reduced input from the ears leads to changes in the structure of the brain, particularly in areas involved in processing sound. It is also possible that hearing loss and dementia share common causes, such as damage to small blood vessels.\n\nWhether treating hearing loss reduces dementia risk has been harder to establish. A trial published in 2023 found that, among older adults overall, providing hearing aids and counselling did not significantly slow cognitive decline over three years. However, among participants who were at higher risk of dementia, the intervention reduced the rate of decline by almost half. Although further research is needed, experts recommend regular hearing tests in middle and older age, noting that hearing aids also improve quality of life and communication regardless of any effect on dementia.",
    "vocabularyNotes": [
      {
        "word": "untreated",
        "meaningTr": "tedavi edilmemiş",
        "contextNote": "un- + treated."
      },
      {
        "word": "cognitive load",
        "meaningTr": "bilişsel yük",
        "contextNote": "Beynin işlem yükü."
      },
      {
        "word": "withdraw from",
        "meaningTr": "-den çekilmek",
        "contextNote": "withdraw from social life: sosyal hayattan çekilmek."
      },
      {
        "word": "input",
        "meaningTr": "girdi",
        "contextNote": "sensory input: duyusal girdi."
      },
      {
        "word": "counselling",
        "meaningTr": "danışmanlık",
        "contextNote": "counsel: öğüt vermek."
      },
      {
        "word": "regardless of",
        "meaningTr": "-e bakılmaksızın",
        "contextNote": "Bağlaç sorularında sık gelir."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "When hearing is poor, the brain must work harder to understand speech, which may draw resources away from memory and thinking.",
        "subject": "the brain (beyin)",
        "mainVerb": "must work harder (daha çok çalışmak zorundadır)",
        "objectsAndComplements": "[When-clause] + to understand speech (konuşmayı anlamak için) + [which-clause: bu da kaynakları bellek ve düşünmeden uzaklaştırabilir]",
        "grammaticalStructures": [
          "must: zorunluluk.",
          "Comparative zarf (harder).",
          "Amaç bildiren to-infinitive.",
          "Sentential which.",
          "draw away from: -den uzaklaştırmak."
        ],
        "translationTr": "İşitme zayıf olduğunda beyin konuşmayı anlamak için daha çok çalışmak zorunda kalır; bu da kaynakları bellek ve düşünme süreçlerinden uzaklaştırabilir."
      }
    ],
    "questions": [
      {
        "id": "rb080_q1",
        "type": "reading",
        "title": "Hearing Loss and the Risk of Dementia",
        "question": "According to the passage, hearing loss often goes untreated because it _____ .",
        "options": {
          "A": "cannot be detected by ordinary tests",
          "B": "develops slowly and causes no pain",
          "C": "affects only people over seventy",
          "D": "is considered a normal part of dementia",
          "E": "can be cured only by surgery"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "C şıkkı oranı yanlış genelleştirir. A, D ve E metinde yoktur.",
        "explanation": "İşitme kaybı yavaş gelişir ve ağrısızdır; bu yüzden yıllarca tedavi edilmeden kalabilir (B şıkkı)."
      },
      {
        "id": "rb080_q2",
        "type": "reading",
        "title": "Hearing Loss and the Risk of Dementia",
        "question": "Which of the following is NOT proposed as an explanation for the link?",
        "options": {
          "A": "Extra mental effort needed to understand speech",
          "B": "Withdrawal from social activities",
          "C": "Structural changes in the brain",
          "D": "Side effects of wearing hearing aids",
          "E": "Shared causes such as blood vessel damage"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E ikinci paragrafta açıklama olarak geçer.",
        "explanation": "Metin işitme cihazlarının yan etkilerinden söz etmez (D şıkkı)."
      },
      {
        "id": "rb080_q3",
        "type": "reading",
        "title": "Hearing Loss and the Risk of Dementia",
        "question": "The 2023 trial found that hearing aids and counselling _____ .",
        "options": {
          "A": "slowed the decline greatly in all of the older adults",
          "B": "helped mainly those at higher risk of dementia",
          "C": "made cognitive decline faster in some groups",
          "D": "had no effect on any of the participants",
          "E": "cured dementia in most participants"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Bulgu Nüansı",
        "trapWarning": "A şıkkı genel grupta anlamlı etki bulunmamasıyla çelişir. D şıkkı yüksek risk grubundaki etkiyi yok sayar. C ve E metinde yoktur.",
        "explanation": "Genel grupta anlamlı etki yokken, yüksek risk grubunda düşüş hızı neredeyse yarıya inmiştir (B şıkkı)."
      },
      {
        "id": "rb080_q4",
        "type": "reading",
        "title": "Hearing Loss and the Risk of Dementia",
        "question": "Experts recommend regular hearing tests because _____ .",
        "options": {
          "A": "hearing aids have now been proven to prevent dementia",
          "B": "treatment improves daily life whatever its effect",
          "C": "hearing loss is rare before the age of seventy",
          "D": "most cases of dementia are caused by untreated hearing loss",
          "E": "tests can reverse damage to blood vessels"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Gerekçe (regardless of any effect on dementia)",
        "trapWarning": "A şıkkı \"further research is needed\" ile çelişir. D şıkkı oranı abartır (yaklaşık yüzde sekiz). C ve E metinde yoktur.",
        "explanation": "İşitme cihazları demansa etkisinden bağımsız olarak yaşam kalitesini ve iletişimi iyileştirir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb081",
    "title": "Snakebite: A Neglected Emergency",
    "topic": "Health & Medicine",
    "sourceHint": "Adapted from WHO reports & PLOS Neglected Tropical Diseases",
    "wordCount": 274,
    "passageText": "Every year, an estimated 4.5 to 5.4 million people are bitten by snakes, and between 80,000 and 140,000 of them die. Around three times as many survive with permanent disabilities, such as amputations, scarring or kidney damage. Most victims are farmers, herders and children in rural areas of sub-Saharan Africa, South Asia and Latin America, where people often walk barefoot and work in fields at night. In 2017, after years of campaigning by doctors and researchers, the World Health Organization added snakebite envenoming to its list of neglected tropical diseases.\n\nThe main treatment, antivenom, has changed little since it was first developed in the 1890s. It is produced by injecting small amounts of venom into horses or sheep and then collecting the antibodies their immune systems produce. Antivenom can be highly effective if given quickly, but it has serious limitations. Each product usually works only against the venom of particular species from particular regions, it often needs to be kept refrigerated, and it can cause severe allergic reactions. Moreover, it is expensive, and in many affected regions the nearest hospital that stocks it may be hours away. Many victims turn first to traditional healers, losing valuable time.\n\nResearchers are developing alternatives. Some are designing antibodies produced in the laboratory that could neutralize the toxins of many different species. Others are testing small-molecule drugs, such as varespladib, which block a key family of venom enzymes and could potentially be taken as tablets immediately after a bite, before a patient reaches hospital. The WHO has set a goal of halving deaths and disabilities from snakebite by 2030, which experts say will also require better access to health care and education about prevention.",
    "vocabularyNotes": [
      {
        "word": "envenoming",
        "meaningTr": "zehirlenme (yılan vb.)",
        "contextNote": "venom: zehir."
      },
      {
        "word": "neglected",
        "meaningTr": "ihmal edilmiş",
        "contextNote": "neglected tropical diseases: ihmal edilmiş tropikal hastalıklar."
      },
      {
        "word": "antibody",
        "meaningTr": "antikor",
        "contextNote": "Bağışıklık sisteminin ürettiği protein."
      },
      {
        "word": "refrigerated",
        "meaningTr": "soğutulmuş",
        "contextNote": "refrigerator: buzdolabı."
      },
      {
        "word": "neutralize",
        "meaningTr": "etkisiz hale getirmek",
        "contextNote": "Eş anlamlısı: counteract."
      },
      {
        "word": "halve",
        "meaningTr": "yarıya indirmek",
        "contextNote": "half kelimesinden fiil."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "It is produced by injecting small amounts of venom into horses or sheep and then collecting the antibodies their immune systems produce.",
        "subject": "It (antivenom) (panzehir)",
        "mainVerb": "is produced (üretilir)",
        "objectsAndComplements": "by injecting ... and then collecting ... (enjekte edip ardından toplayarak)",
        "grammaticalStructures": [
          "Passive (is produced).",
          "by + V-ing: yöntem bildirir.",
          "Paralel gerund yapısı (injecting ... and collecting).",
          "Gizli relative clause (the antibodies [that] their immune systems produce)."
        ],
        "translationTr": "Panzehir, atlara ya da koyunlara küçük miktarlarda zehir enjekte edilip ardından bağışıklık sistemlerinin ürettiği antikorların toplanmasıyla üretilir."
      }
    ],
    "questions": [
      {
        "id": "rb081_q1",
        "type": "reading",
        "title": "Snakebite: A Neglected Emergency",
        "question": "According to the passage, most snakebite victims are _____ .",
        "options": {
          "A": "tourists visiting tropical forests",
          "B": "rural workers and children in poorer regions",
          "C": "researchers who handle snakes in laboratories",
          "D": "people living in large modern cities",
          "E": "elderly patients in European hospitals"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Detay",
        "trapWarning": "A, C, D ve E metinde verilen mağdur profiliyle uyuşmaz.",
        "explanation": "Mağdurların çoğu Sahra altı Afrika, Güney Asya ve Latin Amerika'nın kırsal bölgelerindeki çiftçiler, çobanlar ve çocuklardır (B şıkkı)."
      },
      {
        "id": "rb081_q2",
        "type": "reading",
        "title": "Snakebite: A Neglected Emergency",
        "question": "Which of the following is NOT mentioned as a limitation of antivenom?",
        "options": {
          "A": "It often works only against particular species",
          "B": "It may need to be kept cold",
          "C": "It can cause severe allergic reactions",
          "D": "It must be taken every day for several months",
          "E": "It is expensive and often far away"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E ikinci paragrafta sınırlılık olarak sayılır.",
        "explanation": "Metin panzehirin aylarca her gün alınması gerektiğinden söz etmez (D şıkkı)."
      },
      {
        "id": "rb081_q3",
        "type": "reading",
        "title": "Snakebite: A Neglected Emergency",
        "question": "Drugs such as varespladib are promising because they _____ .",
        "options": {
          "A": "are produced by injecting venom into horses",
          "B": "might be taken as tablets right after a bite",
          "C": "work only against the venom of a single species",
          "D": "replace the need for any hospital care",
          "E": "were first developed in the 1890s"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Avantaj",
        "trapWarning": "A ve E geleneksel panzehiri tarif eder. C şıkkı tam tersidir. D şıkkı aşırıdır.",
        "explanation": "Bu ilaçlar ısırıktan hemen sonra, hastaneye ulaşmadan tablet olarak alınabilir (B şıkkı)."
      },
      {
        "id": "rb081_q4",
        "type": "reading",
        "title": "Snakebite: A Neglected Emergency",
        "question": "According to experts, reaching the WHO's 2030 goal will also require _____ .",
        "options": {
          "A": "stopping the production of traditional antivenom completely",
          "B": "better health care access and prevention education",
          "C": "removing snakes from all agricultural areas",
          "D": "training traditional healers to produce antivenom",
          "E": "keeping all victims in hospital for a month"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Gereklilik",
        "trapWarning": "A, C, D ve E metinde yoktur.",
        "explanation": "Uzmanlara göre hedef sağlık hizmetlerine daha iyi erişim ve korunma eğitimi de gerektirecektir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb082",
    "title": "The Secret of Roman Concrete",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Science Advances & MIT News",
    "wordCount": 270,
    "passageText": "Many Roman structures have survived for two thousand years, including harbour walls that have been battered by seawater for centuries. Modern concrete, by contrast, often begins to crack and crumble within decades, especially in marine environments. For a long time, the durability of Roman concrete was something of a mystery.\n\nRoman builders mixed lime with volcanic ash, known as pozzolana after the town of Pozzuoli near Naples, together with pieces of rock. Research published in 2017 showed that in marine structures, seawater seeping into the concrete reacted with the volcanic ash to form rare minerals, including one called aluminous tobermorite. These crystals grew within the pores and cracks of the material, gradually making it stronger rather than weaker over time. Modern concrete is designed to be chemically inert once it has hardened, so any reaction with seawater tends to damage it.\n\nIn 2023, researchers at the Massachusetts Institute of Technology proposed another explanation. They noticed that Roman concrete contained small white lumps of lime, which had long been dismissed as evidence of poor mixing. Their analysis suggested that the Romans used quicklime, a highly reactive form of lime, and mixed it at high temperatures. The resulting lumps acted as a reservoir of calcium. When cracks formed and water entered them, the calcium dissolved and then recrystallized, filling the cracks and effectively allowing the concrete to heal itself.\n\nThese discoveries have attracted interest from engineers because the production of modern cement is responsible for about eight percent of global carbon dioxide emissions. Concrete that lasts longer, or that can repair its own cracks, would need to be replaced less often, reducing those emissions.",
    "vocabularyNotes": [
      {
        "word": "batter",
        "meaningTr": "hırpalamak, dövmek",
        "contextNote": "battered by waves: dalgalarla hırpalanmış."
      },
      {
        "word": "crumble",
        "meaningTr": "ufalanmak, parçalanmak",
        "contextNote": "Eş anlamlısı: disintegrate."
      },
      {
        "word": "seep",
        "meaningTr": "sızmak",
        "contextNote": "seep into: içine sızmak."
      },
      {
        "word": "inert",
        "meaningTr": "tepkimesiz, eylemsiz",
        "contextNote": "Kimyada tepkimeye girmeyen."
      },
      {
        "word": "dismiss as",
        "meaningTr": "... diye önemsememek",
        "contextNote": "dismiss something as a mistake."
      },
      {
        "word": "recrystallize",
        "meaningTr": "yeniden kristalleşmek",
        "contextNote": "re- + crystallize."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "These crystals grew within the pores and cracks of the material, gradually making it stronger rather than weaker over time.",
        "subject": "These crystals (bu kristaller)",
        "mainVerb": "grew (büyüdü)",
        "objectsAndComplements": "within the pores and cracks of the material (malzemenin gözenek ve çatlaklarında) + [participle: onu zamanla daha zayıf değil daha güçlü yaparak]",
        "grammaticalStructures": [
          "Sonuç bildiren -ing (gradually making it ...).",
          "make + nesne + sıfat.",
          "rather than: -den ziyade.",
          "over time: zamanla."
        ],
        "translationTr": "Bu kristaller malzemenin gözenekleri ve çatlakları içinde büyüyerek onu zamanla daha zayıf değil, daha güçlü hale getirdi."
      }
    ],
    "questions": [
      {
        "id": "rb082_q1",
        "type": "reading",
        "title": "The Secret of Roman Concrete",
        "question": "According to the passage, seawater affects Roman and modern concrete differently because _____ .",
        "options": {
          "A": "Roman concrete was never exposed to seawater",
          "B": "in Roman concrete it forms minerals that strengthen it",
          "C": "modern concrete contains more volcanic ash",
          "D": "Roman builders sealed their concrete with lime paint",
          "E": "modern concrete reacts with seawater to form tobermorite"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Karşılaştırma",
        "trapWarning": "A şıkkı ilk paragrafla çelişir. E şıkkı karşılaştırmayı tersine çevirir. C ve D metinde yoktur.",
        "explanation": "Roma betonunda deniz suyu volkanik külle tepkimeye girip malzemeyi güçlendiren mineraller oluşturur; modern beton ise zarar görür (B şıkkı)."
      },
      {
        "id": "rb082_q2",
        "type": "reading",
        "title": "The Secret of Roman Concrete",
        "question": "The white lumps of lime in Roman concrete were previously thought to be _____ .",
        "options": {
          "A": "a deliberate method of self-repair",
          "B": "a sign that the materials were badly mixed",
          "C": "crystals formed by contact with seawater",
          "D": "pieces of volcanic rock from Pozzuoli",
          "E": "the main source of the concrete's great strength over time"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Eski Yorum",
        "trapWarning": "A ve E 2023 araştırmasının yeni yorumudur. C ve D başka malzemelerle karıştırır.",
        "explanation": "Kireç topakları uzun süre kötü karıştırmanın kanıtı olarak görülmüştür (B şıkkı)."
      },
      {
        "id": "rb082_q3",
        "type": "reading",
        "title": "The Secret of Roman Concrete",
        "question": "According to the MIT researchers, the lumps allowed the concrete to _____ .",
        "options": {
          "A": "harden much more quickly when it was first poured into moulds",
          "B": "fill its own cracks as calcium recrystallized",
          "C": "resist high temperatures during volcanic eruptions",
          "D": "remain chemically inert after hardening",
          "E": "absorb carbon dioxide from the atmosphere"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Mekanizma",
        "trapWarning": "D şıkkı modern betonun özelliğidir. A, C ve E metinde yoktur.",
        "explanation": "Çatlaklara su girince kalsiyum çözünüp yeniden kristalleşerek çatlakları doldurur; beton kendini onarır (B şıkkı)."
      },
      {
        "id": "rb082_q4",
        "type": "reading",
        "title": "The Secret of Roman Concrete",
        "question": "Engineers are interested in these discoveries mainly because _____ .",
        "options": {
          "A": "they want to build new harbours exactly like the Roman ones",
          "B": "longer-lasting concrete could reduce carbon emissions",
          "C": "volcanic ash is cheaper than modern cement",
          "D": "modern concrete cannot be produced any more",
          "E": "quicklime is safer to handle than modern cement"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Önem / Amaç",
        "trapWarning": "A, C, D ve E metinde yoktur.",
        "explanation": "Daha uzun ömürlü ya da kendini onaran beton daha az değiştirilir ve çimento kaynaklı emisyonları azaltır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb083",
    "title": "The Nutmeg Islands",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from Journal of Southeast Asian Studies & History Today",
    "wordCount": 277,
    "passageText": "For centuries, nutmeg grew in only one place on Earth: the Banda Islands, a tiny group of volcanic islands in what is now eastern Indonesia. Traded through a long chain of merchants across Asia and the Middle East, the spice reached Europe at prices that could be hundreds of times higher than at its source. Wealthy Europeans valued nutmeg as a flavouring, a preservative and a medicine, and some believed it could protect against the plague.\n\nIn the early seventeenth century, the Dutch East India Company, a powerful trading corporation with its own army and the right to make treaties, set out to control the nutmeg trade completely. The Bandanese, who had traded freely with merchants from many nations for generations, resisted the Company's demands for a monopoly. In 1621, the Dutch commander Jan Pieterszoon Coen led an invasion of the islands. Most of the population, estimated at around fifteen thousand, were killed, starved or enslaved and deported. The Company then divided the land into plantations worked by enslaved people brought from other parts of Asia.\n\nThe English also had a foothold in the area, on the small island of Run. Under the Treaty of Breda in 1667, England formally gave up its claim to Run, while the Dutch confirmed English possession of a North American colony that the English had recently seized from them: New Amsterdam, later renamed New York. This exchange is often told as an amusing historical curiosity. Historians increasingly stress, however, that the story of nutmeg is also one of the earliest examples of a corporation using extreme violence to control a global commodity, with consequences for the Bandanese people that are still remembered today.",
    "vocabularyNotes": [
      {
        "word": "preservative",
        "meaningTr": "koruyucu madde",
        "contextNote": "preserve: korumak."
      },
      {
        "word": "treaty",
        "meaningTr": "antlaşma",
        "contextNote": "sign a treaty: antlaşma imzalamak."
      },
      {
        "word": "monopoly",
        "meaningTr": "tekel",
        "contextNote": "Sıfat: monopolistic."
      },
      {
        "word": "deport",
        "meaningTr": "sürgün etmek, sınır dışı etmek",
        "contextNote": "İsim: deportation."
      },
      {
        "word": "foothold",
        "meaningTr": "dayanak noktası, mevzi",
        "contextNote": "gain a foothold: tutunmak."
      },
      {
        "word": "commodity",
        "meaningTr": "emtia, ticari mal",
        "contextNote": "global commodity: küresel emtia."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "The Bandanese, who had traded freely with merchants from many nations for generations, resisted the Company's demands for a monopoly.",
        "subject": "The Bandanese (Bandalılar)",
        "mainVerb": "resisted (direndi)",
        "objectsAndComplements": "the Company's demands for a monopoly (Şirket'in tekel taleplerine)",
        "grammaticalStructures": [
          "Non-defining relative (who had traded ...).",
          "Past perfect (had traded): direnişten önceki uzun süreli durum.",
          "for generations: kuşaklar boyunca.",
          "demand for: ... talebi."
        ],
        "translationTr": "Kuşaklar boyunca birçok milletten tüccarla serbestçe ticaret yapmış olan Bandalılar, Şirket'in tekel taleplerine direndi."
      }
    ],
    "questions": [
      {
        "id": "rb083_q1",
        "type": "reading",
        "title": "The Nutmeg Islands",
        "question": "According to the passage, nutmeg was extremely expensive in Europe because _____ .",
        "options": {
          "A": "it was grown only in a small region of the Netherlands",
          "B": "it came from one remote place via many merchants",
          "C": "it was used only by doctors to treat the plague",
          "D": "the English had banned its import",
          "E": "it could be harvested only once every ten years"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "A şıkkı coğrafyayı karıştırır. C şıkkı kullanım alanlarını daraltır. D ve E metinde yoktur.",
        "explanation": "Küçük hindistan cevizi yalnızca Banda Adaları'nda yetişiyor ve uzun bir tüccar zinciriyle Avrupa'ya ulaşıyordu (B şıkkı)."
      },
      {
        "id": "rb083_q2",
        "type": "reading",
        "title": "The Nutmeg Islands",
        "question": "The Dutch East India Company invaded the Banda Islands in 1621 in order to _____ .",
        "options": {
          "A": "protect the Bandanese from English traders",
          "B": "gain complete control over the nutmeg trade",
          "C": "establish a colony in North America",
          "D": "stop the spread of the plague in Asia",
          "E": "free enslaved people from other parts of Asia"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Amaç",
        "trapWarning": "A ve E Şirket'in eylemlerinin tersidir. C ve D metinle ilgisizdir.",
        "explanation": "Şirket hindistan cevizi ticaretini tamamen kontrol etmek, yani tekel kurmak istiyordu (B şıkkı)."
      },
      {
        "id": "rb083_q3",
        "type": "reading",
        "title": "The Nutmeg Islands",
        "question": "Under the Treaty of Breda, _____ .",
        "options": {
          "A": "the Dutch handed the island of Run over to the English",
          "B": "England gave up Run but kept New Amsterdam",
          "C": "the Bandanese regained control of their islands",
          "D": "New York was handed back to the Dutch East India Company",
          "E": "nutmeg trade was opened to all nations"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay",
        "trapWarning": "A şıkkı yönü tersine çevirir. D şıkkı antlaşmanın tersidir. C ve E metinde yoktur.",
        "explanation": "İngiltere Run üzerindeki iddiasından vazgeçti, Hollanda da İngilizlerin New Amsterdam'a sahipliğini onayladı (B şıkkı)."
      },
      {
        "id": "rb083_q4",
        "type": "reading",
        "title": "The Nutmeg Islands",
        "question": "The author suggests that the exchange of Run and New Amsterdam _____ .",
        "options": {
          "A": "was the most important event in the history of New York",
          "B": "should not hide the violence behind the nutmeg trade",
          "C": "was a fair agreement that benefited the Bandanese",
          "D": "proves that the Dutch made a poor bargain",
          "E": "is no longer of any interest to historians"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yazarın Vurgusu",
        "trapWarning": "D şıkkı yaygın anlatımın esprili yorumudur, yazarın vurgusu değildir. C şıkkı metinle çelişir. A ve E metinde yoktur.",
        "explanation": "Yazar bu takasın eğlenceli bir merak olarak anlatıldığını ama ardındaki aşırı şiddetin unutulmaması gerektiğini vurgular (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb084",
    "title": "How Writing Began",
    "topic": "History & Archaeology",
    "sourceHint": "Adapted from the work of Denise Schmandt-Besserat & The British Museum",
    "wordCount": 262,
    "passageText": "Writing is often associated with literature, religion and law, but the earliest known writing system appears to have developed for a far more practical purpose: keeping accounts. Around 3300 BC, in the city of Uruk in southern Mesopotamia, administrators began pressing signs into clay tablets to record quantities of goods such as grain, sheep, beer and textiles, along with the names of people and institutions responsible for them.\n\nThe archaeologist Denise Schmandt-Besserat has argued that this system grew out of an even older practice. For thousands of years, people in the Near East had used small clay tokens of different shapes to represent goods: a cone might stand for a measure of grain, a cylinder for an animal. Tokens were sometimes sealed inside hollow clay balls to guarantee a transaction, and the shapes of the tokens were pressed onto the outside so that the contents could be known without breaking the ball. Eventually, she suggests, people realized that the impressions alone were sufficient, and the tokens became unnecessary. Not all scholars accept every detail of this theory, but the connection between early writing and accounting is widely recognized.\n\nOver the following centuries, the signs developed into the wedge-shaped script known as cuneiform, made with a cut reed. Signs that originally represented objects increasingly came to represent sounds, which allowed scribes to write names, words from other languages and eventually complete sentences. By around 2600 BC, cuneiform was being used for letters, literature and royal inscriptions. The system was adapted for more than a dozen languages and remained in use for about three thousand years.",
    "vocabularyNotes": [
      {
        "word": "administrator",
        "meaningTr": "yönetici, idareci",
        "contextNote": "administer: yönetmek."
      },
      {
        "word": "token",
        "meaningTr": "jeton, simge",
        "contextNote": "Burada mal temsil eden kil nesne."
      },
      {
        "word": "hollow",
        "meaningTr": "içi boş",
        "contextNote": "Zıt anlamlısı: solid."
      },
      {
        "word": "transaction",
        "meaningTr": "işlem",
        "contextNote": "commercial transaction: ticari işlem."
      },
      {
        "word": "impression",
        "meaningTr": "baskı izi; izlenim",
        "contextNote": "Burada kile bastırılan iz."
      },
      {
        "word": "wedge-shaped",
        "meaningTr": "kama biçimli",
        "contextNote": "cuneiform = çivi yazısı."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Signs that originally represented objects increasingly came to represent sounds, which allowed scribes to write names, words from other languages and eventually complete sentences.",
        "subject": "Signs that originally represented objects (başlangıçta nesneleri temsil eden işaretler)",
        "mainVerb": "came to represent (temsil eder hale geldi)",
        "objectsAndComplements": "sounds (sesleri) + [which-clause: bu da kâtiplerin ... yazmasına olanak verdi]",
        "grammaticalStructures": [
          "Defining relative clause öznede.",
          "come to + V1: zamanla ... hale gelmek.",
          "Sentential which.",
          "allow + nesne + to V1."
        ],
        "translationTr": "Başlangıçta nesneleri temsil eden işaretler giderek sesleri temsil eder hale geldi; bu da kâtiplerin adları, başka dillerden kelimeleri ve sonunda bütün cümleleri yazabilmesini sağladı."
      }
    ],
    "questions": [
      {
        "id": "rb084_q1",
        "type": "reading",
        "title": "How Writing Began",
        "question": "According to the passage, the earliest writing in Mesopotamia was used mainly to _____ .",
        "options": {
          "A": "record religious texts and prayers for the city's temples",
          "B": "keep records of goods and who held them",
          "C": "write letters between kings",
          "D": "preserve important works of poetry and literature",
          "E": "translate between different languages"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Ana Bilgi",
        "trapWarning": "A, C ve D sonraki kullanımlardır veya ilk paragrafta yazının genelde ilişkilendirildiği alanlardır. E şıkkı metinde böyle geçmez.",
        "explanation": "İlk yazı tahıl, koyun gibi malların miktarını ve sorumlu kişileri kaydetmek, yani muhasebe için kullanılmıştır (B şıkkı)."
      },
      {
        "id": "rb084_q2",
        "type": "reading",
        "title": "How Writing Began",
        "question": "According to Schmandt-Besserat, clay tokens became unnecessary when people realized that _____ .",
        "options": {
          "A": "the hollow clay balls could be broken far too easily",
          "B": "the marks on the outside were enough alone",
          "C": "cone-shaped tokens could also be used to represent animals",
          "D": "reeds could be used to cut clay",
          "E": "goods no longer needed to be counted"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Teori Detayı",
        "trapWarning": "A şıkkı teorinin tersidir: amaç topu kırmadan içeriği bilmekti. C, D ve E metinde böyle geçmez.",
        "explanation": "İnsanlar dıştaki izlerin tek başına yeterli olduğunu fark edince jetonlara gerek kalmamıştır (B şıkkı)."
      },
      {
        "id": "rb084_q3",
        "type": "reading",
        "title": "How Writing Began",
        "question": "What does the passage say about scholarly views of the token theory?",
        "options": {
          "A": "All scholars now accept it in every single detail",
          "B": "Details are disputed, but the accounting link is accepted",
          "C": "It has been completely disproved",
          "D": "It applies only to the development of Egyptian hieroglyphs",
          "E": "It was proposed by the scribes of Uruk"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Akademik Uzlaşı",
        "trapWarning": "A ve C iki uçtaki yanlış yorumlardır. D ve E metinde yoktur.",
        "explanation": "Teorinin her detayı kabul görmese de erken yazı ile muhasebe arasındaki bağ geniş çapta kabul edilir (B şıkkı)."
      },
      {
        "id": "rb084_q4",
        "type": "reading",
        "title": "How Writing Began",
        "question": "The change of signs from representing objects to representing sounds was important because it _____ .",
        "options": {
          "A": "made writing on clay tablets completely unnecessary",
          "B": "made it possible to write names and sentences",
          "C": "replaced cuneiform with an alphabet",
          "D": "limited writing to a single language for many centuries",
          "E": "ended the use of writing for accounting"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Önem",
        "trapWarning": "D şıkkı tersidir: sistem birçok dile uyarlanmıştır. A, C ve E metinde yoktur.",
        "explanation": "Ses temsil eden işaretler adların, yabancı kelimelerin ve sonunda tam cümlelerin yazılmasını sağlamıştır (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb085",
    "title": "The Scale of Food Waste",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from UNEP Food Waste Index & FAO reports",
    "wordCount": 278,
    "passageText": "According to the United Nations Environment Programme, more than one billion tonnes of food were wasted in 2022, about a fifth of all food available to consumers, in addition to the roughly thirteen percent lost in the supply chain between harvest and retail. At the same time, around 780 million people suffered from hunger. Food waste also has a large environmental cost: producing food that is never eaten uses land, water and energy, and food rotting in landfills releases methane, a powerful greenhouse gas. Taken together, food loss and waste are estimated to generate eight to ten percent of global greenhouse gas emissions.\n\nWhere waste occurs differs by country. In low-income countries, most losses take place early in the supply chain, because of inadequate storage, lack of refrigeration and poor roads that slow transport to markets. In high-income countries, a larger share is wasted by retailers and households. Supermarkets may reject fruit and vegetables that do not meet cosmetic standards, and consumers throw away food that has passed its date label, even though many such products are still safe to eat. Contrary to a common assumption, however, household food waste per person is similar in high-income and middle-income countries.\n\nSolutions therefore vary. In poorer countries, investment in cold storage, better packaging and roads can reduce losses significantly. In wealthier ones, governments and companies have tried clearer date labelling, distinguishing between \"best before\", which refers to quality, and \"use by\", which refers to safety. France passed a law in 2016 banning large supermarkets from destroying unsold food and requiring them to donate it to charities. Campaigns encouraging households to plan meals and use leftovers have also shown measurable results in some countries.",
    "vocabularyNotes": [
      {
        "word": "supply chain",
        "meaningTr": "tedarik zinciri",
        "contextNote": "Üretimden satışa kadar süreç."
      },
      {
        "word": "retail",
        "meaningTr": "perakende",
        "contextNote": "retailer: perakendeci."
      },
      {
        "word": "methane",
        "meaningTr": "metan",
        "contextNote": "Güçlü bir sera gazı."
      },
      {
        "word": "inadequate",
        "meaningTr": "yetersiz",
        "contextNote": "Zıt anlamlısı: adequate."
      },
      {
        "word": "cosmetic",
        "meaningTr": "görünüşle ilgili, kozmetik",
        "contextNote": "cosmetic standards: görünüş standartları."
      },
      {
        "word": "leftovers",
        "meaningTr": "artık yemek",
        "contextNote": "Çoğul kullanılır."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Contrary to a common assumption, however, household food waste per person is similar in high-income and middle-income countries.",
        "subject": "household food waste per person (kişi başına hane gıda israfı)",
        "mainVerb": "is (dır)",
        "objectsAndComplements": "similar in high-income and middle-income countries (yüksek ve orta gelirli ülkelerde benzer)",
        "grammaticalStructures": [
          "Contrary to: -in aksine.",
          "however: cümle içinde zıtlık.",
          "per person: kişi başına.",
          "similar in: ... bakımından benzer."
        ],
        "translationTr": "Ancak yaygın bir varsayımın aksine, kişi başına hane gıda israfı yüksek ve orta gelirli ülkelerde benzerdir."
      }
    ],
    "questions": [
      {
        "id": "rb085_q1",
        "type": "reading",
        "title": "The Scale of Food Waste",
        "question": "According to the passage, food waste harms the environment partly because _____ .",
        "options": {
          "A": "it reduces the number of people who suffer from hunger",
          "B": "rotting food in landfills releases methane",
          "C": "it encourages farmers to use less water",
          "D": "supermarkets donate unsold food to charities",
          "E": "most waste occurs in low-income countries"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "A şıkkı mantık dışıdır. C şıkkı tersidir: israf edilen gıda su kullanır. D şıkkı bir çözümdür. E şıkkı çevresel zararın nedeni değildir.",
        "explanation": "Çöplükte çürüyen gıda güçlü bir sera gazı olan metan salar (B şıkkı)."
      },
      {
        "id": "rb085_q2",
        "type": "reading",
        "title": "The Scale of Food Waste",
        "question": "In low-income countries, food is mostly lost _____ .",
        "options": {
          "A": "in households after it has been bought and cooked",
          "B": "early on, due to poor storage and transport",
          "C": "because supermarkets reject imperfect vegetables",
          "D": "because consumers misunderstand date labels",
          "E": "in restaurants, hotels and other parts of the food service industry"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Karşılaştırma",
        "trapWarning": "C ve D yüksek gelirli ülkelere ait nedenlerdir. A ve E metinde böyle geçmez.",
        "explanation": "Düşük gelirli ülkelerde kayıplar yetersiz depolama, soğutma eksikliği ve kötü yollar nedeniyle tedarik zincirinin başında olur (B şıkkı)."
      },
      {
        "id": "rb085_q3",
        "type": "reading",
        "title": "The Scale of Food Waste",
        "question": "The sentence beginning \"Contrary to a common assumption\" indicates that _____ .",
        "options": {
          "A": "middle-income countries waste no food at all",
          "B": "household waste per person is not much higher in rich nations",
          "C": "high-income countries waste far more food per person at home",
          "D": "households in the poorest countries waste the most food per person",
          "E": "date labels are used only in high-income countries"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Varsayımın Düzeltilmesi",
        "trapWarning": "C şıkkı cümlenin düzelttiği yaygın varsayımdır. A, D ve E metinden çıkmaz.",
        "explanation": "Kişi başına hane israfı yüksek ve orta gelirli ülkelerde benzerdir; yani zengin ülkelerde belirgin şekilde yüksek değildir (B şıkkı)."
      },
      {
        "id": "rb085_q4",
        "type": "reading",
        "title": "The Scale of Food Waste",
        "question": "The French law of 2016 is mentioned as an example of _____ .",
        "options": {
          "A": "investment in cold storage and better roads",
          "B": "a rule making supermarkets donate unsold food",
          "C": "a campaign encouraging households to plan their meals",
          "D": "a new system of date labelling",
          "E": "a ban on cosmetic standards for fruit and vegetables"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örnek",
        "trapWarning": "A şıkkı yoksul ülkeler için önerilen çözümdür. C ve D başka önlemlerdir. E şıkkı metinde yoktur.",
        "explanation": "Yasa büyük süpermarketlerin satılmayan gıdayı yok etmesini yasaklayıp hayır kurumlarına bağışlamasını zorunlu kılar (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb086",
    "title": "Charging Drivers to Enter the City",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from Transport Policy & The Economist",
    "wordCount": 274,
    "passageText": "Traffic congestion imposes heavy costs on cities: lost working hours, wasted fuel, air pollution and slower buses and deliveries. Economists have long argued that congestion persists because road space is usually free at the point of use. Each driver who enters a busy street slows down everyone else, but does not pay for the delay imposed on others. The economist William Vickrey proposed in the 1950s that drivers should be charged for using roads at busy times, a policy now known as congestion pricing.\n\nSeveral cities have put the idea into practice. Singapore introduced a charge in 1975 and later adopted an electronic system in which prices vary by location and time of day. London introduced a daily charge for driving into its centre in 2003, and traffic in the zone initially fell by around eighteen percent. Stockholm offers a particularly instructive case. Before a trial in 2006, a majority of residents opposed the charge. During the seven-month trial, traffic across the charging cordon fell by about twenty percent, and queues shrank dramatically. In a referendum held after the trial, a majority voted to keep the charge, and public support has since grown further.\n\nCongestion pricing nevertheless remains controversial. Critics argue that it is unfair to lower-income drivers, who may have fewer alternatives, and that it can harm businesses in the charged area. Supporters reply that most lower-income residents in large cities do not commute by car and that the revenue can be used to improve public transport. New York City, after years of political and legal battles, began charging vehicles entering lower Manhattan in January 2025, becoming the first city in the United States to do so.",
    "vocabularyNotes": [
      {
        "word": "congestion",
        "meaningTr": "tıkanıklık, sıkışıklık",
        "contextNote": "traffic congestion: trafik sıkışıklığı."
      },
      {
        "word": "at the point of use",
        "meaningTr": "kullanım anında",
        "contextNote": "free at the point of use: kullanırken ücretsiz."
      },
      {
        "word": "instructive",
        "meaningTr": "öğretici, aydınlatıcı",
        "contextNote": "instruct: öğretmek."
      },
      {
        "word": "cordon",
        "meaningTr": "kordon, çevre hattı",
        "contextNote": "charging cordon: ücretlendirme sınırı."
      },
      {
        "word": "referendum",
        "meaningTr": "referandum, halk oylaması",
        "contextNote": "hold a referendum."
      },
      {
        "word": "commute",
        "meaningTr": "işe gidip gelmek",
        "contextNote": "commuter: işe gidip gelen."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Each driver who enters a busy street slows down everyone else, but does not pay for the delay imposed on others.",
        "subject": "Each driver who enters a busy street (kalabalık bir sokağa giren her sürücü)",
        "mainVerb": "slows down ... but does not pay (yavaşlatır ama ödemez)",
        "objectsAndComplements": "everyone else (diğer herkesi) + for the delay imposed on others (başkalarına yüklenen gecikme için)",
        "grammaticalStructures": [
          "Defining relative öznede (Each driver who ...).",
          "Phrasal verb (slow down).",
          "but ile zıt iki yüklem.",
          "Reduced passive relative (the delay imposed on others)."
        ],
        "translationTr": "Kalabalık bir sokağa giren her sürücü diğer herkesi yavaşlatır, ancak başkalarına yüklediği gecikmenin bedelini ödemez."
      }
    ],
    "questions": [
      {
        "id": "rb086_q1",
        "type": "reading",
        "title": "Charging Drivers to Enter the City",
        "question": "According to economists, congestion persists mainly because _____ .",
        "options": {
          "A": "cities have far too few roads for their growing populations",
          "B": "drivers do not pay for the delays they cause others",
          "C": "public transport is always slower than driving",
          "D": "fuel prices are too low in most countries",
          "E": "deliveries are made at the busiest times of day"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Sebep",
        "trapWarning": "A, C, D ve E metinde ekonomistlerin açıklaması olarak geçmez.",
        "explanation": "Yol kullanım anında ücretsizdir; sürücüler başkalarına yükledikleri gecikmenin bedelini ödemez (B şıkkı)."
      },
      {
        "id": "rb086_q2",
        "type": "reading",
        "title": "Charging Drivers to Enter the City",
        "question": "Stockholm is described as an instructive case because _____ .",
        "options": {
          "A": "it was the very first city in the world to charge drivers for entry",
          "B": "opinion moved in favour of the charge after a trial",
          "C": "traffic increased after the charge was introduced",
          "D": "the charge was abolished after a referendum",
          "E": "it uses electronic prices that vary by location and time of day"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin Önemi",
        "trapWarning": "A şıkkı Singapur'a aittir. C ve D metinle çelişir. E şıkkı Singapur sistemiyle karıştırır.",
        "explanation": "Denemeden önce çoğunluk karşıydı, denemeden sonra çoğunluk ücretin sürmesine oy verdi (B şıkkı)."
      },
      {
        "id": "rb086_q3",
        "type": "reading",
        "title": "Charging Drivers to Enter the City",
        "question": "Critics of congestion pricing argue that _____ .",
        "options": {
          "A": "it has never really reduced traffic levels in any of the cities",
          "B": "it is unfair to poorer drivers and may hurt businesses",
          "C": "its revenue is always wasted by city governments",
          "D": "it makes buses and trains more expensive for ordinary passengers",
          "E": "it was invented too long ago to be useful"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Eleştiri",
        "trapWarning": "A şıkkı örneklerle çelişir. C, D ve E metinde yoktur.",
        "explanation": "Eleştirmenler ücretin düşük gelirli sürücülere haksızlık olduğunu ve bölgedeki işletmelere zarar verebileceğini savunur (B şıkkı)."
      },
      {
        "id": "rb086_q4",
        "type": "reading",
        "title": "Charging Drivers to Enter the City",
        "question": "According to the passage, New York City _____ .",
        "options": {
          "A": "finally rejected congestion pricing after a long legal battle",
          "B": "became the first US city to charge vehicles entering an area",
          "C": "copied Stockholm's referendum system",
          "D": "introduced the charge before London did",
          "E": "now charges drivers who use roads in all parts of the city"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Detay",
        "trapWarning": "A şıkkı tersidir. D şıkkı tarihle çelişir. E şıkkı metinle çelişir: aşağı Manhattan. C şıkkı metinde yoktur.",
        "explanation": "New York 2025'te aşağı Manhattan'a giren araçlardan ücret alan ilk ABD şehri olmuştur (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb087",
    "title": "What Happens When the Minimum Wage Rises?",
    "topic": "Economics & Environment",
    "sourceHint": "Adapted from American Economic Review & Nobel Prize summaries",
    "wordCount": 272,
    "passageText": "For much of the twentieth century, standard economic theory predicted that raising the minimum wage would reduce employment. The reasoning was straightforward: if the price of labour rises, employers will hire fewer workers, just as consumers buy less of a product when its price goes up. Most economics textbooks presented this conclusion with considerable confidence.\n\nIn 1994, David Card and Alan Krueger published a study that challenged this view. When the American state of New Jersey raised its minimum wage in 1992, they compared employment at fast-food restaurants there with restaurants in neighbouring eastern Pennsylvania, where the minimum wage had not changed. Because the two areas were similar in most other respects, Pennsylvania served as a natural comparison group. Contrary to the prediction, employment in New Jersey did not fall relative to Pennsylvania. This method of using real-world events to create comparison groups, known as a natural experiment, helped earn Card a share of the Nobel Prize in Economics in 2021.\n\nThe study provoked a long debate. Some economists reanalysed the data and found small negative effects; others confirmed the original findings. Several explanations have been proposed for why moderate increases may not reduce employment. Higher wages can reduce staff turnover, saving firms the costs of recruiting and training. In addition, in many local labour markets, employers have some power to set wages below what a fully competitive market would produce, so a higher minimum can bring wages closer to that level without reducing jobs. Most economists now agree that modest increases have little effect on employment, but they continue to disagree about how high the minimum wage can go before significant job losses occur.",
    "vocabularyNotes": [
      {
        "word": "straightforward",
        "meaningTr": "basit, açık",
        "contextNote": "Eş anlamlısı: simple, clear."
      },
      {
        "word": "neighbouring",
        "meaningTr": "komşu",
        "contextNote": "neighbour kelimesinden."
      },
      {
        "word": "comparison group",
        "meaningTr": "karşılaştırma grubu",
        "contextNote": "Kontrol grubu anlamında."
      },
      {
        "word": "natural experiment",
        "meaningTr": "doğal deney",
        "contextNote": "Gerçek olayları kullanan araştırma yöntemi."
      },
      {
        "word": "turnover",
        "meaningTr": "işgücü devri; ciro",
        "contextNote": "staff turnover: personel devir hızı."
      },
      {
        "word": "modest",
        "meaningTr": "ılımlı, küçük",
        "contextNote": "modest increase: küçük artış."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Higher wages can reduce staff turnover, saving firms the costs of recruiting and training.",
        "subject": "Higher wages (daha yüksek ücretler)",
        "mainVerb": "can reduce (azaltabilir)",
        "objectsAndComplements": "staff turnover (personel devir hızını) + [participle: firmaları işe alım ve eğitim maliyetlerinden kurtararak]",
        "grammaticalStructures": [
          "can: olasılık.",
          "Sonuç bildiren -ing (saving firms ...).",
          "save + kişi + şey: birini bir şeyden kurtarmak."
        ],
        "translationTr": "Daha yüksek ücretler personel devir hızını azaltarak firmaları işe alım ve eğitim maliyetlerinden kurtarabilir."
      }
    ],
    "questions": [
      {
        "id": "rb087_q1",
        "type": "reading",
        "title": "What Happens When the Minimum Wage Rises?",
        "question": "According to the standard theory described in the passage, raising the minimum wage would _____ .",
        "options": {
          "A": "increase employment by attracting more workers",
          "B": "lead employers to hire fewer workers",
          "C": "have no effect on employment at all",
          "D": "reduce the price of fast food",
          "E": "increase consumer demand for labour"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Eski Görüş",
        "trapWarning": "A ve C Card-Krueger tartışmasıyla ilgili yorumlardır, standart teoriye ait değildir. D ve E metinde yoktur.",
        "explanation": "Standart teoriye göre emeğin fiyatı yükselirse işverenler daha az işçi alır (B şıkkı)."
      },
      {
        "id": "rb087_q2",
        "type": "reading",
        "title": "What Happens When the Minimum Wage Rises?",
        "question": "Why did Card and Krueger compare New Jersey with eastern Pennsylvania?",
        "options": {
          "A": "Because Pennsylvania had raised its minimum wage even more",
          "B": "Because the areas were similar except for the wage change",
          "C": "Because Pennsylvania had no fast-food restaurants",
          "D": "Because New Jersey had refused to raise its minimum wage",
          "E": "Because both states had abolished the minimum wage"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Yöntem Gerekçesi",
        "trapWarning": "A ve D durumu tersine çevirir. C ve E metinle çelişir.",
        "explanation": "İki bölge asgari ücret değişikliği dışında çoğu bakımdan benzerdi; bu yüzden Pensilvanya doğal bir karşılaştırma grubu oldu (B şıkkı)."
      },
      {
        "id": "rb087_q3",
        "type": "reading",
        "title": "What Happens When the Minimum Wage Rises?",
        "question": "Which of the following is offered as an explanation for why moderate increases may not reduce jobs?",
        "options": {
          "A": "Workers stop looking for jobs when wages rise",
          "B": "Lower staff turnover can save firms money",
          "C": "Firms always pass the costs on to the government",
          "D": "Competition among employers is always perfect",
          "E": "Fast-food restaurants are not affected by wages"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Açıklama",
        "trapWarning": "D şıkkı tersidir: metin işverenlerin ücret belirleme gücüne vurgu yapar. A, C ve E metinde yoktur.",
        "explanation": "Yüksek ücretler personel devrini azaltarak işe alım ve eğitim maliyetlerini düşürür (B şıkkı)."
      },
      {
        "id": "rb087_q4",
        "type": "reading",
        "title": "What Happens When the Minimum Wage Rises?",
        "question": "What do most economists now agree on, according to the passage?",
        "options": {
          "A": "Any increase in the minimum wage destroys many jobs",
          "B": "Modest increases have little effect on employment",
          "C": "There should be no limit on how high the minimum wage goes",
          "D": "Card and Krueger's data were entirely wrong",
          "E": "Natural experiments are useless in economics"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Güncel Uzlaşı",
        "trapWarning": "A ve D eski görüş ya da tartışmanın bir tarafıdır. C şıkkı son cümleyle çelişir. E şıkkı Nobel bilgisiyle çelişir.",
        "explanation": "Ekonomistlerin çoğu küçük artışların istihdam üzerinde az etkisi olduğunda hemfikirdir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb088",
    "title": "A World of Falling Birth Rates",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from The Lancet & UN World Population Prospects",
    "wordCount": 277,
    "passageText": "For most of history, governments worried about populations growing too fast. Today, an increasing number are worried about the opposite. The total fertility rate, the average number of children a woman is expected to have over her lifetime, has fallen below 2.1, the level needed to keep a population stable without immigration, in more than half of the world's countries. South Korea's rate fell to about 0.72 in 2023, the lowest in the world, while rates in Italy, Spain, Japan and China are all well below 1.5.\n\nThe causes are complex. As countries become richer and more urban, children are less needed as farm workers or as support in old age, and the costs of raising them, especially housing and education, rise. Greater access to education and paid work has given women more choices, and many people now marry later or not at all. In some societies, long working hours and the expectation that women will do most of the childcare discourage people from having children.\n\nLow fertility has major economic consequences. As the share of older people grows, fewer workers support more retirees, putting pressure on pension and health systems. Governments have tried a range of policies, including cash payments for each birth, longer parental leave and subsidized childcare. The evidence suggests that such measures can raise birth rates somewhat, but rarely back to replacement level. Countries such as France and Sweden, which have invested heavily in family support for decades, have higher fertility than most of Europe, yet still below 2.1. Many demographers therefore argue that societies will need to adapt to ageing populations, through immigration, higher retirement ages and increased productivity, rather than expect birth rates to recover fully.",
    "vocabularyNotes": [
      {
        "word": "fertility rate",
        "meaningTr": "doğurganlık hızı",
        "contextNote": "total fertility rate: toplam doğurganlık hızı."
      },
      {
        "word": "replacement level",
        "meaningTr": "nüfusu yenileme düzeyi",
        "contextNote": "Yaklaşık 2,1 çocuk."
      },
      {
        "word": "retiree",
        "meaningTr": "emekli",
        "contextNote": "retire: emekli olmak."
      },
      {
        "word": "subsidized",
        "meaningTr": "sübvanse edilmiş",
        "contextNote": "subsidy: devlet desteği."
      },
      {
        "word": "demographer",
        "meaningTr": "demograf, nüfus bilimci",
        "contextNote": "demography kelimesinden."
      },
      {
        "word": "productivity",
        "meaningTr": "verimlilik",
        "contextNote": "productive: verimli."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "The evidence suggests that such measures can raise birth rates somewhat, but rarely back to replacement level.",
        "subject": "The evidence (kanıtlar)",
        "mainVerb": "suggests (göstermektedir)",
        "objectsAndComplements": "[that-clause: bu tür önlemlerin doğum oranlarını bir miktar artırabileceğini ama nadiren yenileme düzeyine geri getirebileceğini]",
        "grammaticalStructures": [
          "somewhat: bir miktar.",
          "but rarely ...: eksiltili yapı (but [they] rarely [raise them] back ...).",
          "back to: -e geri."
        ],
        "translationTr": "Kanıtlar bu tür önlemlerin doğum oranlarını bir miktar artırabileceğini, ancak nadiren yenileme düzeyine geri getirebileceğini göstermektedir."
      }
    ],
    "questions": [
      {
        "id": "rb088_q1",
        "type": "reading",
        "title": "A World of Falling Birth Rates",
        "question": "According to the passage, a total fertility rate of 2.1 is significant because it _____ .",
        "options": {
          "A": "is the highest fertility rate that has ever been recorded",
          "B": "keeps a population stable without migration",
          "C": "is the current rate in South Korea",
          "D": "is the target set by the United Nations",
          "E": "is reached only in rich countries"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Tanım",
        "trapWarning": "C şıkkı Güney Kore'nin oranını yanlış verir. A, D ve E metinde yoktur.",
        "explanation": "2,1 göç olmadan bir nüfusu sabit tutmak için gereken düzeydir (B şıkkı)."
      },
      {
        "id": "rb088_q2",
        "type": "reading",
        "title": "A World of Falling Birth Rates",
        "question": "Which of the following is NOT given as a cause of falling birth rates?",
        "options": {
          "A": "Rising costs of housing and education",
          "B": "More education and work options for women",
          "C": "People marrying later or not at all",
          "D": "A decline in the health of young adults",
          "E": "Long working hours"
        },
        "answer": "D",
        "difficulty": "Orta",
        "tacticUsed": "NOT Sorusu",
        "trapWarning": "A, B, C ve E ikinci paragrafta neden olarak geçer.",
        "explanation": "Metin genç yetişkinlerin sağlığının kötüleşmesinden söz etmez (D şıkkı)."
      },
      {
        "id": "rb088_q3",
        "type": "reading",
        "title": "A World of Falling Birth Rates",
        "question": "The examples of France and Sweden show that _____ .",
        "options": {
          "A": "family support has raised birth rates above replacement level in both",
          "B": "strong family policies help but do not restore 2.1",
          "C": "cash payments are more effective than childcare",
          "D": "these countries have the lowest fertility in Europe",
          "E": "immigration has stopped in both countries"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Örneğin Çıkarımı",
        "trapWarning": "A şıkkı metinle çelişir: oranlar hâlâ 2,1'in altındadır. D şıkkı tersidir. C ve E metinde yoktur.",
        "explanation": "Uzun süreli aile desteği oranları Avrupa ortalamasının üstüne çıkarmış ama 2,1'e ulaştırmamıştır (B şıkkı)."
      },
      {
        "id": "rb088_q4",
        "type": "reading",
        "title": "A World of Falling Birth Rates",
        "question": "Many demographers believe that societies should _____ .",
        "options": {
          "A": "expect birth rates to return to their earlier levels soon",
          "B": "adapt to ageing populations, not wait for recovery",
          "C": "ban immigration in order to protect their pension systems",
          "D": "lower the retirement age to create jobs",
          "E": "stop all forms of family support"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Görüş",
        "trapWarning": "A şıkkı son cümlenin reddettiği beklentidir. C ve D önerilenlerin tersidir. E şıkkı metinde yoktur.",
        "explanation": "Demograflar doğum oranlarının tamamen toparlanmasını beklemek yerine yaşlanan nüfusa uyum sağlanması gerektiğini savunur (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb089",
    "title": "The Myth of Multitasking",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from PNAS & Journal of Experimental Psychology",
    "wordCount": 278,
    "passageText": "Many people believe that they are good at multitasking: answering emails during meetings, studying with the television on or checking their phones while talking to friends. Research in cognitive psychology suggests that this belief is largely mistaken. For tasks that require attention, the brain does not truly do two things at once. Instead, it switches rapidly between them, and each switch carries a cost in time and accuracy.\n\nThese costs can be surprisingly large. In laboratory experiments, people who alternate between two tasks take longer and make more errors than people who complete the same tasks one after the other. The penalty increases when the tasks are complex or unfamiliar. Even brief interruptions matter: one study found that interruptions lasting only a few seconds doubled the error rate on a sequence-based task. Some activities can be combined with little cost, such as walking and talking, because one of them has become automatic through practice. Problems arise when both tasks compete for the same mental resources, such as language or visual attention.\n\nA well-known 2009 study at Stanford University compared people who regularly used many forms of media at once with those who rarely did. Surprisingly, the heavy multitaskers performed worse on tests of filtering out irrelevant information and switching between tasks, the very skills one might expect them to have developed. Later studies have produced mixed results, and it is not clear whether heavy multitasking causes these weaknesses or whether people who are easily distracted are more likely to multitask. Nevertheless, the practical advice from researchers is consistent: for demanding work, such as studying for an exam, focusing on a single task and limiting interruptions leads to better results.",
    "vocabularyNotes": [
      {
        "word": "multitask",
        "meaningTr": "aynı anda birden fazla iş yapmak",
        "contextNote": "multi- + task."
      },
      {
        "word": "alternate",
        "meaningTr": "dönüşümlü yapmak",
        "contextNote": "alternate between A and B."
      },
      {
        "word": "penalty",
        "meaningTr": "ceza, bedel",
        "contextNote": "Burada performans kaybı."
      },
      {
        "word": "interruption",
        "meaningTr": "kesinti",
        "contextNote": "interrupt fiilinden."
      },
      {
        "word": "filter out",
        "meaningTr": "ayıklamak, süzmek",
        "contextNote": "filter out irrelevant information."
      },
      {
        "word": "distracted",
        "meaningTr": "dikkati dağılmış",
        "contextNote": "distract: dikkatini dağıtmak."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Surprisingly, the heavy multitaskers performed worse on tests of filtering out irrelevant information and switching between tasks, the very skills one might expect them to have developed.",
        "subject": "the heavy multitaskers (yoğun çoklu görev yapanlar)",
        "mainVerb": "performed worse (daha kötü performans gösterdi)",
        "objectsAndComplements": "on tests of filtering out ... and switching ... + [appositive: tam da onların geliştirmiş olmasını bekleyebileceğimiz beceriler]",
        "grammaticalStructures": [
          "Surprisingly: beklenti dışılığı vurgular.",
          "of + V-ing (gerund) yapıları.",
          "the very + isim: tam da o.",
          "expect + nesne + to have + V3: -miş olmasını beklemek."
        ],
        "translationTr": "Şaşırtıcı biçimde, yoğun çoklu görev yapanlar, ilgisiz bilgiyi ayıklama ve görevler arasında geçiş yapma testlerinde, yani tam da geliştirmiş olmalarını bekleyebileceğimiz becerilerde daha kötü performans gösterdi."
      }
    ],
    "questions": [
      {
        "id": "rb089_q1",
        "type": "reading",
        "title": "The Myth of Multitasking",
        "question": "According to the passage, when people multitask on tasks requiring attention, the brain _____ .",
        "options": {
          "A": "performs both tasks at the same time without any cost",
          "B": "switches quickly between tasks, losing time and accuracy",
          "C": "stops working on the more difficult of the two tasks",
          "D": "becomes faster and more accurate with every switch",
          "E": "uses separate areas of the brain that never compete"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Ana Bilgi",
        "trapWarning": "A şıkkı metnin reddettiği inançtır. D ve E metinle çelişir. C şıkkı metinde yoktur.",
        "explanation": "Beyin gerçekte iki işi aynı anda yapmaz; aralarında hızla geçiş yapar ve her geçişin bir bedeli vardır (B şıkkı)."
      },
      {
        "id": "rb089_q2",
        "type": "reading",
        "title": "The Myth of Multitasking",
        "question": "Walking and talking can be combined with little cost because _____ .",
        "options": {
          "A": "both tasks require language skills",
          "B": "one of them has become automatic through practice",
          "C": "the brain stops switching during physical activity",
          "D": "talking is a less demanding task than reading",
          "E": "most people practise both tasks in laboratories"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sebep",
        "trapWarning": "A şıkkı tam tersidir: sorun aynı kaynakları kullanan görevlerde çıkar. C, D ve E metinde yoktur.",
        "explanation": "Biri pratikle otomatik hale geldiği için bu iki etkinlik az bedelle birleştirilebilir (B şıkkı)."
      },
      {
        "id": "rb089_q3",
        "type": "reading",
        "title": "The Myth of Multitasking",
        "question": "The result of the 2009 Stanford study was surprising because heavy multitaskers _____ .",
        "options": {
          "A": "performed better than expected on all of the tests used",
          "B": "were weaker at the very skills they might have built",
          "C": "refused to take part in the switching tests",
          "D": "used fewer forms of media than other people",
          "E": "were faster at filtering out irrelevant information"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Beklenti-Sonuç Zıtlığı",
        "trapWarning": "A ve E sonucu tersine çevirir. C ve D metinde yoktur.",
        "explanation": "Yoğun çoklu görev yapanlar, geliştirmiş olmaları beklenebilecek becerilerde daha zayıf çıkmıştır (B şıkkı)."
      },
      {
        "id": "rb089_q4",
        "type": "reading",
        "title": "The Myth of Multitasking",
        "question": "The researchers' practical advice for studying for an exam is to _____ .",
        "options": {
          "A": "study with music or television to stay alert",
          "B": "focus on one task and limit interruptions",
          "C": "alternate between several subjects every few minutes",
          "D": "check messages briefly between each page",
          "E": "practise multitasking until it becomes automatic"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Tavsiye",
        "trapWarning": "A, C ve D metnin uyardığı alışkanlıklardır. E şıkkı metinden çıkarılamaz.",
        "explanation": "Zorlu işlerde tek bir göreve odaklanmak ve kesintileri sınırlamak daha iyi sonuç verir (B şıkkı)."
      }
    ]
  },
  {
    "id": "rb090",
    "title": "Restorative Justice",
    "topic": "Social Sciences",
    "sourceHint": "Adapted from Criminology & Campbell Systematic Reviews",
    "wordCount": 269,
    "passageText": "Conventional criminal justice systems focus mainly on establishing guilt and imposing punishment. The victim's role is often limited to that of a witness, and offenders may never have to confront the human consequences of what they did. Restorative justice offers a different approach. It brings together offenders, victims and sometimes members of the community, usually in a meeting led by a trained facilitator, to discuss the harm that was caused and agree on how it can be repaired.\n\nIn a typical restorative conference, the offender must first admit responsibility. Victims can then describe how the crime affected them and ask questions that a court trial rarely answers, such as why they were targeted. Agreements may include an apology, financial compensation, community work or commitments to undergo treatment. Restorative justice is usually used alongside, rather than instead of, the formal justice system, and participation is voluntary for victims.\n\nResearch on its effects has been encouraging. A systematic review of ten randomized trials in Australia, the United Kingdom and the United States found that offenders who took part in face-to-face restorative conferences committed somewhat fewer repeat offences over the following two years than those processed only through conventional courts. The effects appeared stronger for violent crimes than for property crimes. Victims who participated reported higher satisfaction, less fear of the offender and, in some studies, fewer symptoms of post-traumatic stress. Critics caution that the approach is not suitable for all cases, particularly where there is a large imbalance of power between offender and victim, as in some cases of domestic violence, and that victims must never feel pressured to take part.",
    "vocabularyNotes": [
      {
        "word": "restorative",
        "meaningTr": "onarıcı",
        "contextNote": "restore: onarmak, eski haline getirmek."
      },
      {
        "word": "confront",
        "meaningTr": "yüzleşmek",
        "contextNote": "confront the consequences: sonuçlarla yüzleşmek."
      },
      {
        "word": "facilitator",
        "meaningTr": "kolaylaştırıcı, moderatör",
        "contextNote": "facilitate: kolaylaştırmak."
      },
      {
        "word": "compensation",
        "meaningTr": "tazminat",
        "contextNote": "compensate: telafi etmek."
      },
      {
        "word": "repeat offence",
        "meaningTr": "tekrar suç",
        "contextNote": "reoffend: yeniden suç işlemek."
      },
      {
        "word": "imbalance",
        "meaningTr": "dengesizlik",
        "contextNote": "power imbalance: güç dengesizliği."
      }
    ],
    "deconstructedSentences": [
      {
        "originalSentence": "Restorative justice is usually used alongside, rather than instead of, the formal justice system, and participation is voluntary for victims.",
        "subject": "Restorative justice / participation (onarıcı adalet / katılım)",
        "mainVerb": "is used / is (kullanılır / dır)",
        "objectsAndComplements": "alongside, rather than instead of, the formal justice system (resmi adalet sisteminin yerine değil yanında) + voluntary for victims",
        "grammaticalStructures": [
          "Passive (is used).",
          "alongside, rather than instead of, X: ortak nesneli iki edat.",
          "and ile iki bağımsız cümle."
        ],
        "translationTr": "Onarıcı adalet genellikle resmi adalet sisteminin yerine değil yanında kullanılır ve mağdurlar için katılım gönüllüdür."
      }
    ],
    "questions": [
      {
        "id": "rb090_q1",
        "type": "reading",
        "title": "Restorative Justice",
        "question": "According to the passage, restorative justice differs from conventional justice in that it _____ .",
        "options": {
          "A": "focuses only on punishing offenders more severely than before",
          "B": "brings both sides together to address the harm",
          "C": "replaces courts completely in most countries",
          "D": "prevents victims from asking any questions",
          "E": "is used only for property crimes"
        },
        "answer": "B",
        "difficulty": "Orta",
        "tacticUsed": "Karşılaştırma",
        "trapWarning": "A şıkkı geleneksel sistemi tarif eder. C şıkkı metinle çelişir: resmi sistemin yanında kullanılır. D şıkkı tersidir. E şıkkı bulgularla çelişir.",
        "explanation": "Onarıcı adalet failleri, mağdurları ve bazen topluluğu bir araya getirerek verilen zararı ve onarımını tartışır (B şıkkı)."
      },
      {
        "id": "rb090_q2",
        "type": "reading",
        "title": "Restorative Justice",
        "question": "Before a restorative conference can proceed, the offender must _____ .",
        "options": {
          "A": "pay financial compensation",
          "B": "accept responsibility for the offence",
          "C": "complete a period of community work",
          "D": "be found guilty of the crime by a jury",
          "E": "receive psychological treatment"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Ön Koşul",
        "trapWarning": "A, C ve E sonradan varılabilecek anlaşmalardır. D şıkkı metinde yoktur.",
        "explanation": "Tipik bir konferansta fail önce sorumluluğu kabul etmelidir (B şıkkı)."
      },
      {
        "id": "rb090_q3",
        "type": "reading",
        "title": "Restorative Justice",
        "question": "The systematic review found that restorative conferences _____ .",
        "options": {
          "A": "eliminated all repeat offending among the participants",
          "B": "reduced reoffending, especially after violent crime",
          "C": "worked better for property crimes than violent ones",
          "D": "made victims more afraid of their offenders than before",
          "E": "had no effect on victims' satisfaction"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Bulgu",
        "trapWarning": "A şıkkı abartılıdır. C ve D sonucu tersine çevirir. E şıkkı metinle çelişir.",
        "explanation": "Konferanslar tekrar suçu bir miktar azaltmış, etki şiddet suçlarında daha güçlü olmuştur (B şıkkı)."
      },
      {
        "id": "rb090_q4",
        "type": "reading",
        "title": "Restorative Justice",
        "question": "Critics warn that restorative justice may be unsuitable when _____ .",
        "options": {
          "A": "the offender has fully admitted responsibility for the crime",
          "B": "there is a large power imbalance between the sides",
          "C": "the crime involved damage to someone's property",
          "D": "victims want to ask the offender questions",
          "E": "a trained facilitator leads the meeting"
        },
        "answer": "B",
        "difficulty": "İleri",
        "tacticUsed": "Sınırlılık",
        "trapWarning": "A, C, D ve E sürecin normal unsurlarıdır, uygunsuzluk nedeni değildir.",
        "explanation": "Fail ile mağdur arasında büyük bir güç dengesizliği olduğunda, örneğin bazı aile içi şiddet vakalarında, uygun olmayabilir (B şıkkı)."
      }
    ]
  }
];

export const READING_PASSAGE_BANK: ReadingPassage[] = RAW_READING_PASSAGE_BANK.map((p) => ({
  ...p,
  questions: shuffleQuestionList(p.questions)
}));
