import { VocabQuizQuestion } from '../types';
import { shuffleArrayStable } from '../services/optionShuffle';

const RAW_YDS_VOCAB_QUIZ_QUESTIONS: VocabQuizQuestion[] = [
  {
    "id": "vq1",
    "category": "vocab",
    "targetWordId": "w1",
    "targetWord": "enhance",
    "type": "verb",
    "sentence": "The government has launched a comprehensive digital initiative to _____ cyber security across all state departments.",
    "options": [
      "enhance",
      "undermine",
      "deteriorate",
      "deplete",
      "impede"
    ],
    "correctAnswer": "enhance",
    "meaningTr": "geliştirmek, artırmak, yükseltmek",
    "explanation": "Boşluktan sonra \"cyber security (siber güvenlik)\" gelmektedir. Bir hükümet güvenliği baltalamak veya tüketmek için değil, geliştirmek / artırmak (enhance) için girişim başlatır.",
    "synonyms": [
      "boost",
      "improve",
      "strengthen",
      "augment"
    ],
    "collocation": "enhance security / quality",
    "optionsBreakdown": {
      "enhance": {
        "word": "enhance",
        "meaning": "geliştirmek, artırmak, yükseltmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"EN-ŞANSLI\" olan kişi yeteneklerini sürekli ENHANCE eden (geliştiren) kişidir.",
        "rootAnalysis": "🔬 Kök: Eski Fransızca \"enhaucer\" (yükseğe çıkarmak) kökünden gelir."
      },
      "undermine": {
        "word": "undermine",
        "meaning": "baltalamak, altını oymak, temelini sarsmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"UNDER (alt)\" + \"MINE (maden/mayın)\". Bir kalenin altına maden tüneli kazıp patlatarak temelini sarsmak / baltalamak.",
        "rootAnalysis": "🔬 Kök: Fiziksel olarak altını kazmak -> mecazen gücünü/otoritesini gizlice zayıflatmak."
      },
      "deteriorate": {
        "word": "deteriorate",
        "meaning": "kötüleşmek, bozulmak, gerilemek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"DETERjanla\" çok yıkayınca elbisenin kumaşı DETERIORATE oldu (kötüleşti/yıprandı).",
        "rootAnalysis": "🔬 Kök: Latince \"deterior\" (daha kötü, altta kalan)."
      },
      "deplete": {
        "word": "deplete",
        "meaning": "tüketmek, suyunu çekmek, boşaltmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"DE- (aşağı/yokluk)\" + \"PLETE (dolu - complete/plenty)\". Doluluğu sıfırlayıp tüketmek.",
        "rootAnalysis": "🔬 Zıt Anlam: Replenish (tekrar doldurmak) kelimesinin tam tersidir."
      },
      "impede": {
        "word": "impede",
        "meaning": "engellemek, köstek olmak, ilerlemesini yavaşlatmak",
        "mnemonic": "💡 ÇAĞRIŞIM: 'İM-PED (Ayak bağı olmak)' -> Latince 'ped' (ayak) kökünden; insanın ayağına çelme takıp ilerlemesine mani olmak: IMPEDE.",
        "rootAnalysis": "🔬 YDS Notu: 'Hinder', 'hamper', 'obstruct' ve 'block' ile tam eştir; isim hali 'impediment' (engel) kelimesi de çok sorulur."
      }
    }
  },
  {
    "id": "vq2",
    "category": "vocab",
    "targetWordId": "w2",
    "targetWord": "deteriorate",
    "type": "verb",
    "sentence": "Due to severe funding cuts, living conditions in the refugee camps began to _____ alarmingly over the winter months.",
    "options": [
      "flourish",
      "deteriorate",
      "alleviate",
      "comply with",
      "prosper"
    ],
    "correctAnswer": "deteriorate",
    "meaningTr": "kötüleşmek, bozulmak",
    "explanation": "\"Due to severe funding cuts (bütçe kesintileri nedeniyle)\" ifadesi cümlenin eksi (-) olduğunu gösterir. Kamptaki koşullar gelişmez, kötüleşir (deteriorate).",
    "synonyms": [
      "worsen",
      "decline",
      "degenerate"
    ],
    "collocation": "rapidly deteriorate",
    "optionsBreakdown": {
      "flourish": {
        "word": "flourish",
        "meaning": "serpilmek, gelişmek, refaha kavuşmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"FLOWER (çiçek)\" gibi açmak, yeşermek, refah bulup serpilmek.",
        "rootAnalysis": "🔬 Kök: Latince \"florere\" (çiçek açmak)."
      },
      "deteriorate": {
        "word": "deteriorate",
        "meaning": "kötüleşmek, bozulmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"DETERJAN\" fazla kaçınca çamaşırlar DETERIORATE oldu (bozuldu, yıprandı).",
        "rootAnalysis": "🔬 Kök: Sınavda zıttı \"improve / recover\"dır."
      },
      "alleviate": {
        "word": "alleviate",
        "meaning": "hafifletmek, acısını dindirmek, yatıştırmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"ALİ EVDE YAT\" -> Başın ağrıyorsa Ali gibi evde yatıp dinlenerek ağrını ALLEVİATE edersin (hafifletirsin).",
        "rootAnalysis": "🔬 Kök: Latince \"levis\" (hafif - elevator/levitate ile akraba)."
      },
      "comply with": {
        "word": "comply with",
        "meaning": "uymak, riayet etmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"KOMutanın PLAnına\" COMPLY WITH yapacaksın (uyacaksın/riayet edeceksin).",
        "rootAnalysis": "🔬 Edat: Mutlaka \"WITH\" edatı alır."
      },
      "prosper": {
        "word": "prosper",
        "meaning": "zenginleşmek, refaha ermek, serpilmek, gelişmek",
        "mnemonic": "💡 ÇAĞRIŞIM: 'PROSPERITY (Refah)' -> İşlerin tıkırında gidip refah içinde büyümesi: PROSPER (refaha ermek, serpilmek).",
        "rootAnalysis": "🔬 YDS Notu: 'Prosperity' (refah) ve 'prosperous' (müreffeh) kelimelerinin fiilidir; 'thrive' ve 'flourish' ile eşanlamlıdır."
      }
    }
  },
  {
    "id": "vq3",
    "category": "vocab",
    "targetWordId": "w3",
    "targetWord": "mitigate",
    "type": "verb",
    "sentence": "Developing green urban corridors is one of the most effective methods to _____ the urban heat island effect.",
    "options": [
      "aggravate",
      "mitigate",
      "jeopardize",
      "hamper",
      "exacerbate"
    ],
    "correctAnswer": "mitigate",
    "meaningTr": "hafifletmek, etkisini azaltmak",
    "explanation": "Yeşil koridorlar kentsel ısı adası etkisini artırmak veya tehlikeye atmak için değil, hafifletmek (mitigate = alleviate) için yapılır.",
    "synonyms": [
      "alleviate",
      "ease",
      "lessen",
      "relieve"
    ],
    "collocation": "mitigate risks / climate change",
    "optionsBreakdown": {
      "aggravate": {
        "word": "aggravate",
        "meaning": "kötüleştirmek, şiddetlendirmek, çileden çıkarmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"AĞIR-laştır-mak\". Bir sorunun ağırlığını artırıp durumu daha da kötüleştirmek.",
        "rootAnalysis": "🔬 Kök: Latince \"gravis\" (ağır - gravity/grave ile akraba)."
      },
      "mitigate": {
        "word": "mitigate",
        "meaning": "hafifletmek, etkisini azaltmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"MİTİNG-E\" gitmeyip evde kalarak gerginliğin etkisini MİTİGATE etti (hafifletti).",
        "rootAnalysis": "🔬 Kök: Latince \"mitis\" (yumuşak, ılımlı)."
      },
      "jeopardize": {
        "word": "jeopardize",
        "meaning": "tehlikeye atmak, riske sokmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"JAPON DİZE geldi\". Düşman ordusu orantısız savaşa girerek geleceğini JEOPARDIZE etti (tehlikeye attı).",
        "rootAnalysis": "🔬 Kök: \"In jeopardy\" (tehlikede) kalıbından türetilmiştir."
      },
      "hamper": {
        "word": "hamper",
        "meaning": "engellemek, aksatmak, köstek olmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"HAMPUR HUMPUR\" tıkınırken konuşması ve işi HAMPER oldu (aksadı/engellendi).",
        "rootAnalysis": "🔬 Kök: \"Hinder / impede\" kelimeleriyle eş anlamlıdır."
      },
      "exacerbate": {
        "word": "exacerbate",
        "meaning": "daha da kötüleştirmek",
        "mnemonic": "💡 ÇAĞRIŞIM: 'EKSTRA-BERBAT' -> Durumu zaten kötüyken ekstra berbat hale getirmek, EXACERBATE etmek (daha da kötüleştirmek).",
        "rootAnalysis": "🔬 YDS Notu: 'Worsen / aggravate' ile eşanlamlıdır; sağlık, ekonomi ve çevre felaketi sorularında sıkça doğru cevaptır."
      }
    }
  },
  {
    "id": "vq4",
    "category": "vocab",
    "targetWordId": "w4",
    "targetWord": "undermine",
    "type": "verb",
    "sentence": "Spreading unsubstantiated rumors can seriously _____ public confidence in scientific discoveries.",
    "options": [
      "reinforce",
      "fortify",
      "undermine",
      "precede",
      "bolster"
    ],
    "correctAnswer": "undermine",
    "meaningTr": "baltalamak, zayıflatmak, temelini sarsmak",
    "explanation": "Asılsız dedikoduların yayılması halkın güvenini güçlendirmez (reinforce), güveni baltalar / temelini sarsar (undermine).",
    "synonyms": [
      "weaken",
      "sabotage",
      "erode"
    ],
    "collocation": "undermine confidence / authority",
    "optionsBreakdown": {
      "reinforce": {
        "word": "reinforce",
        "meaning": "güçlendirmek, takviye etmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"RE (tekrar)\" + \"FORCE (kuvvet)\". Tekrar kuvvet vererek takviye etmek/güçlendirmek.",
        "rootAnalysis": "🔬 Eşanlam: Strengthen, bolster, fortify."
      },
      "fortify": {
        "word": "fortify",
        "meaning": "sağlamlaştırmak, tahkim etmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"FORT (kale)\" gibi sağlamlaştırmak, savunmasını güçlendirmek.",
        "rootAnalysis": "🔬 Kök: Latince \"fortis\" (güçlü)."
      },
      "undermine": {
        "word": "undermine",
        "meaning": "baltalamak, altını oymak, temelini sarsmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"UNDER (alt)\" + \"MINE (maden/mayın)\". Bir binanın altını kazıp mayınlayarak temelini sarsmak/baltalamak.",
        "rootAnalysis": "🔬 Sınav Sırrı: ÖSYM bunu hep \"confidence / stability\" ile sorar."
      },
      "precede": {
        "word": "precede",
        "meaning": "önde/önce gelmek, -den önce olmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"PRE (önce)\" + \"CEDE (gitmek)\". Zamanda veya sırada önden gitmek.",
        "rootAnalysis": "🔬 Kök: \"Preceding year\" (önceki yıl)."
      },
      "bolster": {
        "word": "bolster",
        "meaning": "desteklemek, güçlendirmek, takviye etmek",
        "mnemonic": "💡 ÇAĞRIŞIM: 'BOL-STAR' -> Kadrosuna bol bol yıldız (star) futbolcu alarak takımını takviye eden, BOLSTER eden (güçlendiren) kulüp.",
        "rootAnalysis": "🔬 YDS Notu: ÖSYM'nin en sevdiği pozitif fiillerdendir; 'strengthen', 'reinforce' veya 'boost' yerine sıklıkla doğru cevap olarak sorulur."
      }
    }
  },
  {
    "id": "vq5",
    "category": "vocab",
    "targetWordId": "w6",
    "targetWord": "vulnerable to",
    "type": "adjective",
    "sentence": "Coastal lowlands without flood defenses are exceptionally _____ rising sea levels and storm surges.",
    "options": [
      "resilient to",
      "immune to",
      "vulnerable to",
      "indispensable to",
      "impervious to"
    ],
    "correctAnswer": "vulnerable to",
    "meaningTr": "savunmasız, hassas, kolay incinen",
    "explanation": "Taşkın koruması olmayan kıyılar deniz seviyesinin yükselmesine karşı dirençli veya bağışık değil, savunmasızdır (vulnerable to).",
    "synonyms": [
      "susceptible to",
      "prone to",
      "exposed to"
    ],
    "collocation": "vulnerable to disaster / attack",
    "optionsBreakdown": {
      "resilient to": {
        "word": "resilient",
        "meaning": "dirençli, esnek, çabuk toparlanan",
        "mnemonic": "💡 ÇAĞRIŞIM: \"REZİL\" olsa da yıkılmayıp hemen ayağa kalkan, çabuk toparlanan RESILIENT (dayanıklı) insan.",
        "rootAnalysis": "🔬 Kök: \"Re-silire\" (geriye yaylanmak/zıplamak)."
      },
      "immune to": {
        "word": "immune",
        "meaning": "bağışık, etkilenmeyen",
        "mnemonic": "💡 ÇAĞRIŞIM: \"İMMÜN SİSTEMİ\" kuvvetli olan kişi hastalıklara karşı IMMUNE'dur (bağışıktır).",
        "rootAnalysis": "🔬 Edat: \"Immune to\" şeklinde kullanılır."
      },
      "vulnerable to": {
        "word": "vulnerable",
        "meaning": "savunmasız, hassas, kolay incinen",
        "mnemonic": "💡 ÇAĞRIŞIM: \"VURULABİLİR\" -> Koruması olmadığı için kolayca VURULABİLİR / yara alabilir olan kişi VULNERABLE'dır (savunmasızdır).",
        "rootAnalysis": "🔬 Kök: Latince \"vulnus\" (yara)."
      },
      "indispensable to": {
        "word": "indispensable",
        "meaning": "vazgeçilmez, elzem, zorunlu",
        "mnemonic": "💡 ÇAĞRIŞIM: \"IN (değil)\" + \"DISPENSE (vazgeçmek/dağıtmak)\". Vazgeçilmesi mümkün olmayan şey.",
        "rootAnalysis": "🔬 Eşanlam: Essential, crucial, vital."
      },
      "impervious to": {
        "word": "impervious to",
        "meaning": "etkilenmeyen, geçirmez, kayıtsız",
        "mnemonic": "💡 ÇELDİRİCİ: Anlam alanı yakın ama cümlenin mantığına/yapısına uymuyor."
      }
    }
  },
  {
    "id": "vq6",
    "category": "vocab",
    "targetWordId": "w7",
    "targetWord": "detrimental to",
    "type": "adjective",
    "sentence": "Excessive reliance on automated decision-making may prove _____ critical thinking skills among young learners.",
    "options": [
      "beneficial to",
      "detrimental to",
      "lucrative to",
      "coherent with",
      "conducive to"
    ],
    "correctAnswer": "detrimental to",
    "meaningTr": "zararlı, hasar verici, olumsuz",
    "explanation": "Aşırı otomasyona bel bağlamak eleştirel düşünme becerileri için karlı veya faydalı değil, zararlıdır (detrimental to = harmful).",
    "synonyms": [
      "harmful",
      "damaging",
      "adverse"
    ],
    "collocation": "detrimental effect on",
    "optionsBreakdown": {
      "beneficial to": {
        "word": "beneficial",
        "meaning": "faydalı, yararlı",
        "mnemonic": "💡 ÇAĞRIŞIM: \"BENE-\" kökü iyi/fayda demektir (benefit/benevolent).",
        "rootAnalysis": "🔬 Zıttı: Detrimental, harmful."
      },
      "detrimental to": {
        "word": "detrimental",
        "meaning": "zararlı, hasar verici",
        "mnemonic": "💡 ÇAĞRIŞIM: \"DERT-MENTAL\" -> Zihnine (mental) DERT açan her şey DETRIMENTAL'dir (zararlıdır/hasar vericidir).",
        "rootAnalysis": "🔬 Kök: Latince \"deterere\" (aşındırmak, hasar vermek)."
      },
      "lucrative to": {
        "word": "lucrative",
        "meaning": "kazançlı, karlı, çok para getiren",
        "mnemonic": "💡 ÇAĞRIŞIM: \"LÜKS\" hayat yaşamak istiyorsan LUCRATIVE (kazançlı/karlı) bir iş kurmalısın.",
        "rootAnalysis": "🔬 Eşanlam: Profitable, gainful."
      },
      "coherent with": {
        "word": "coherent",
        "meaning": "tutarlı, uyumlu, mantıklı",
        "mnemonic": "💡 ÇAĞRIŞIM: \"CO (birlikte)\" + \"HERE (yapışmak - adhere/adhesive)\". Parçaları birbirine yapışık, tutarlı olan.",
        "rootAnalysis": "🔬 Zıttı: Incoherent (tutarsız/kopuk)."
      },
      "conducive to": {
        "word": "conducive to",
        "meaning": "elverişli, yol açan, katkı sağlayan",
        "mnemonic": "💡 ÇELDİRİCİ: Anlam alanı yakın ama cümlenin mantığına/yapısına uymuyor."
      }
    }
  },
  {
    "id": "vq7",
    "category": "vocab",
    "targetWordId": "w11",
    "targetWord": "bring about",
    "type": "phrasal_verb",
    "sentence": "The discovery of electricity helped _____ the modern industrial and technological revolution.",
    "options": [
      "call off",
      "bring about",
      "turn down",
      "back up",
      "break out"
    ],
    "correctAnswer": "bring about",
    "meaningTr": "sebep olmak, yol açmak (= cause)",
    "explanation": "Elektriğin keşfi sanayi devrimini iptal etmedi (call off), sanayi devrimine yol açtı / sebep oldu (bring about = cause).",
    "synonyms": [
      "cause",
      "lead to",
      "give rise to"
    ],
    "collocation": "bring about change / reform",
    "optionsBreakdown": {
      "call off": {
        "word": "call off",
        "meaning": "iptal etmek, sonlandırmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"CALL (çağır)\" + \"OFF (kapat/bitir)\". Herkesi çağırıp maçı veya grevi iptal ettiğini duyurmak.",
        "rootAnalysis": "🔬 Dikkat: Put off (ertelemek) ile Call off (iptal etmek) ayrımı sık sorulur!"
      },
      "bring about": {
        "word": "bring about",
        "meaning": "sebep olmak, yol açmak, meydana getirmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"BRING (getirmek)\" + \"ABOUT (ortaya)\". Bir olayı ortaya çıkarmak / neden olmak (= CAUSE).",
        "rootAnalysis": "🔬 ÖSYM Sırrı: Her iki YDS sınavının birinde doğru cevaptır."
      },
      "turn down": {
        "word": "turn down",
        "meaning": "1. Reddetmek, 2. Sesini kısmak",
        "mnemonic": "💡 ÇAĞRIŞIM: Başparmağını \"DOWN (aşağı)\" çevirip teklifi geri çevirmek / reddetmek.",
        "rootAnalysis": "🔬 Eşanlam: Reject, refuse, decline."
      },
      "back up": {
        "word": "back up",
        "meaning": "desteklemek, arkasında durmak, yedeklemek",
        "mnemonic": "💡 ÇAĞRIŞIM: Arkadaşının \"BACK (arkasında)\" durup ona UP (arka çıkmak/destek olmak).",
        "rootAnalysis": "🔬 Eşanlam: Support, reinforce."
      },
      "break out": {
        "word": "break out",
        "meaning": "patlak vermek (savaş/yangın/salgın)",
        "mnemonic": "💡 ÇAĞRIŞIM: 'BREAK (Kırmak)' + 'OUT (Dışarı)' -> Bastırılan öfke zincirlerini kırıp dışarı taştı, isyan BREAK OUT oldu (patlak verdi).",
        "rootAnalysis": "🔬 YDS Notu: Savaş, yangın, isyan veya salgın hastalıkların aniden 'patlak vermesi' anlamında en sık çıkan phrasal verb'lerdendir."
      }
    }
  },
  {
    "id": "vq8",
    "category": "vocab",
    "targetWordId": "w12",
    "targetWord": "carry out",
    "type": "phrasal_verb",
    "sentence": "Before marketing the new pharmaceutical compound, researchers had to _____ rigorous clinical trials on volunteers.",
    "options": [
      "carry out",
      "rule out",
      "wipe out",
      "give up",
      "set off"
    ],
    "correctAnswer": "carry out",
    "meaningTr": "yürütmek, gerçekleştirmek, uygulamak (= conduct)",
    "explanation": "Araştırmacılar klinik deneyleri ihtimal dışı bırakmadı; deneyleri bizzat yürüttü / gerçekleştirdi (carry out = conduct).",
    "synonyms": [
      "conduct",
      "perform",
      "execute"
    ],
    "collocation": "carry out research / experiment",
    "optionsBreakdown": {
      "carry out": {
        "word": "carry out",
        "meaning": "yürütmek, icra etmek, uygulamak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"CARRY (taşımak)\" + \"OUT (dışarı/sahaya)\". Projeyi masadan sahaya taşıyıp uygulamak / yürütmek.",
        "rootAnalysis": "🔬 Altın Formül: Research, experiment, survey kelimeleriyle %90 CARRY OUT eşleşir."
      },
      "rule out": {
        "word": "rule out",
        "meaning": "göz ardı etmek, ihtimal dışı bırakmak, elemek",
        "mnemonic": "💡 ÇAĞRIŞIM: Cetvelle (RULE) adını çizip OUT (dışarı) atmak, ihtimali elemek.",
        "rootAnalysis": "🔬 Eşanlam: Exclude, dismiss."
      },
      "wipe out": {
        "word": "wipe out",
        "meaning": "yok etmek, silip süpürmek, kökünü kazımak",
        "mnemonic": "💡 ÇAĞRIŞIM: Islak mendille (WIPE) masadaki tüm kırıntıları silip süpürüp yok etmek.",
        "rootAnalysis": "🔬 Eşanlam: Destroy, eradicate, annihilate."
      },
      "give up": {
        "word": "give up",
        "meaning": "vazgeçmek, pes etmek, bırakmak",
        "mnemonic": "💡 ÇAĞRIŞIM: Elleri yukarı kaldırıp (UP) teslim olmak / vazgeçmek.",
        "rootAnalysis": "🔬 Eşanlam: Abandon, surrender."
      },
      "set off": {
        "word": "set off",
        "meaning": "tetiklemek, yol açmak; yola çıkmak",
        "mnemonic": "💡 ÇAĞRIŞIM: 'SET (Kurmak)' + 'OFF (Ateşlemek)' -> Bombanın fitilini ateşleyip patlamayı veya krizi tetiklemek (set off).",
        "rootAnalysis": "🔬 YDS Notu: İki anlam: 1) Yolculuğa başlamak ('set off on a journey'); 2) Bir krizi, alarmı veya zincirleme reaksiyonu tetiklemek ('set off a reaction')."
      }
    }
  },
  {
    "id": "cq1",
    "category": "conjunction",
    "targetWordId": "conj_although",
    "targetWord": "Although",
    "type": "conjunction",
    "sentence": "_____ medical scientists have made immense progress in oncology, cancer remains one of the leading causes of mortality worldwide.",
    "options": [
      "Although",
      "Because",
      "Since",
      "Provided that",
      "Once"
    ],
    "correctAnswer": "Although",
    "meaningTr": "-e rağmen, her ne kadar ... ise de (Zıtlık / Cümle Alan)",
    "explanation": "İlk cümlecikte \"büyük ilerleme kaydedildi (+)\", ikinci cümlecikte \"kanser ölümün ana sebeplerinden biri olmaya devam ediyor (-)\" zıtlığı vardır. Cümle aldığı için \"Although\" doğru cevaptır.",
    "synonyms": [
      "Even though",
      "Though",
      "Much as"
    ],
    "collocation": "Although + Subject + Verb, ...",
    "optionsBreakdown": {
      "Although": {
        "word": "Although",
        "meaning": "-e rağmen (Zıtlık)",
        "mnemonic": "💡 FORMÜL: Although arkasından TAM CÜMLE alır (S + V). Artı (+) bir durumdan eksi (-) bir duruma geçiş yaptırır.",
        "rootAnalysis": "🔬 Kural: Kendisinden sonra virgül gelmez, iki cümleyi bağlar."
      },
      "Because": {
        "word": "Because",
        "meaning": "çünkü, -dığı için (Sebep)",
        "mnemonic": "💡 FORMÜL: Sebep bildirir (+ ile + veya - ile - paralellik kurar).",
        "rootAnalysis": "🔬 Kural: İki zıt durumu bağlayamaz."
      },
      "Since": {
        "word": "Since",
        "meaning": "1. -dığı için (çünkü), 2. -den beri",
        "mnemonic": "💡 FORMÜL: Sebep anlamında \"Because\" ile aynıdır. Zıtlık kuramaz.",
        "rootAnalysis": "🔬 Sınav Sırrı: Zaman anlamındaysa ana cümlede have/has V3 ister."
      },
      "Provided that": {
        "word": "Provided that",
        "meaning": "şartıyla, koşuluyla (= If)",
        "mnemonic": "💡 FORMÜL: Bir koşul bağlacıdır. Koşul gerçekleşirse sonuç doğar.",
        "rootAnalysis": "🔬 Eşanlam: Providing (that), on condition that."
      },
      "Once": {
        "word": "Once",
        "meaning": "-dığında, -ır -maz (zaman bağlacı)",
        "mnemonic": "💡 ÇELDİRİCİ: Anlam alanı yakın ama cümlenin mantığına/yapısına uymuyor."
      }
    }
  },
  {
    "id": "cq2",
    "category": "conjunction",
    "targetWordId": "conj_despite",
    "targetWord": "Despite",
    "type": "conjunction",
    "sentence": "_____ significant breakthroughs in clean energy storage, global reliance on fossil fuels continues to rise at an alarming rate.",
    "options": [
      "Although",
      "Despite",
      "Even though",
      "Whereas",
      "Owing to"
    ],
    "correctAnswer": "Despite",
    "meaningTr": "-e rağmen (İsim / İsim Öbeği Alan Zıtlık Bağlacı)",
    "explanation": "Boşluktan sonra tam bir cümle (S+V) değil, \"significant breakthroughs (önemli buluşlar)\" şeklinde bir İSİM ÖBEĞİ (Noun Phrase) gelmiştir. İsim alan zıtlık bağlacı \"Despite\" veya \"In spite of\"dur!",
    "synonyms": [
      "In spite of",
      "Notwithstanding"
    ],
    "collocation": "Despite + Noun / V-ing, ...",
    "optionsBreakdown": {
      "Although": {
        "word": "Although",
        "meaning": "-e rağmen (Tam Cümle Alır)",
        "mnemonic": "💡 TUZAK: Although tam cümle ister (S+V). Boşluktan sonra yüklem (fiil) olmadığı için elenir!",
        "rootAnalysis": "🔬 Altın Ayrım: Although + Cümle / Despite + İsim."
      },
      "Despite": {
        "word": "Despite",
        "meaning": "-e rağmen (İsim / Noun Phrase Alır)",
        "mnemonic": "💡 FORMÜL: \"Despite + İsim\". Arkasından özne-fiil değil, sadece isim öbeği alır!",
        "rootAnalysis": "🔬 Eşanlam: In spite of. Kesinlikle \"of\" almaz (Despite of denmez!)."
      },
      "Even though": {
        "word": "Even though",
        "meaning": "-e rağmen (Aşırı Zıtlık / Tam Cümle İster)",
        "mnemonic": "💡 TUZAK: Arkasından tam cümle bekler, isim öbeği alamaz.",
        "rootAnalysis": "🔬 Kural: Although ile aynı gruptadır."
      },
      "Whereas": {
        "word": "Whereas",
        "meaning": "oysaki, -e karşın (Kıyaslama / Tam Cümle İster)",
        "mnemonic": "💡 FORMÜL: İki farklı özneyi kıyaslar ve arkasından tam cümle ister.",
        "rootAnalysis": "🔬 Kural: İsim öbeği alamaz."
      },
      "Owing to": {
        "word": "Owing to",
        "meaning": "-den dolayı, yüzünden, sebebiyle (+ Noun)",
        "mnemonic": "💡 FORMÜL: OWING TO + İSİM. 'Due to' ve 'because of' ile aynı anlama gelen sebep yapısı (-den dolayı).",
        "rootAnalysis": "🔬 YDS Notu: Kendinden sonra tam cümle değil, bir isim öbeği alır. 'Due to' ve 'because of' ile tamamen birbirinin yerine geçebilir."
      }
    }
  },
  {
    "id": "cq3",
    "category": "conjunction",
    "targetWordId": "conj_whereas",
    "targetWord": "Whereas",
    "type": "conjunction",
    "sentence": "Some developed nations invest heavily in carbon-neutral public transportation, _____ others continue subsidizing private vehicle emissions.",
    "options": [
      "whereas",
      "therefore",
      "so that",
      "in case",
      "provided that"
    ],
    "correctAnswer": "whereas",
    "meaningTr": "oysaki, halbuki, -e karşın (Taban Tabana İki Durumu Kıyaslar)",
    "explanation": "Cümlede \"bazı gelişmiş ülkeler (X)\" ile \"diğerleri (Y)\" arasındaki zıt yaklaşım kıyaslanmaktadır. İki ayrı özne/durum tezatlığı %100 \"Whereas\" veya \"While\" ile anlatılır.",
    "synonyms": [
      "while",
      "whilst"
    ],
    "collocation": "X does A, whereas Y does B",
    "optionsBreakdown": {
      "whereas": {
        "word": "whereas",
        "meaning": "oysaki, -e karşılık (Kıyaslama Zıtlığı)",
        "mnemonic": "💡 FORMÜL: \"X şunu yaparken, WHEREAS Y bunu yapar.\" İki farklı tarafın karşılaştırmalı tezatlığı!",
        "rootAnalysis": "🔬 Eşanlam: While (oysaki anlamındaki hali)."
      },
      "therefore": {
        "word": "therefore",
        "meaning": "bu yüzden, dolayısıyla (Sonuç)",
        "mnemonic": "💡 FORMÜL: Sebep-sonuç bildirir. İki farklı grubun zıtlığını vermez.",
        "rootAnalysis": "🔬 Eşanlam: Thus, consequently, hence."
      },
      "so that": {
        "word": "so that",
        "meaning": "-sın diye, amacıyla (Amaç)",
        "mnemonic": "💡 FORMÜL: Amaç bildirir. Arkasından can/could/may/might modalları gelir.",
        "rootAnalysis": "🔬 Eşanlam: In order that."
      },
      "in case": {
        "word": "in case",
        "meaning": "-mesi ihtimaline karşı (Önlem)",
        "mnemonic": "💡 FORMÜL: İleride olabilecek kötü bir olaya karşı tedbir alma durumudur (\"şemsiye al, yağmur yağabilir\").",
        "rootAnalysis": "🔬 Kural: If ile aynı değildir, önlem bildirir."
      },
      "provided that": {
        "word": "provided that",
        "meaning": "şartıyla, -mesi koşuluyla (+ Cümle)",
        "mnemonic": "💡 ÇAĞRIŞIM: 'PROVIDE' (sağlamak) fiilinden gelir; o şart sağlandığı takdirde: ŞARTIYLA, -MESİ KOŞULUYLA.",
        "rootAnalysis": "🔬 YDS Notu: Koşul bildiren 'if' bağlacının en prestijli akademik eşanlamlısıdır; ardından tam cümle gelir."
      }
    }
  },
  {
    "id": "cq4",
    "category": "conjunction",
    "targetWordId": "conj_unless",
    "targetWord": "Unless",
    "type": "conjunction",
    "sentence": "_____ urgent international protocols are strictly enforced to curtail ocean acidification, marine coral ecosystems will collapse completely.",
    "options": [
      "Unless",
      "As long as",
      "Since",
      "Because",
      "Even though"
    ],
    "correctAnswer": "Unless",
    "meaningTr": "-mezse, -madıkça (If not - Gizli Olumsuzluk Koşulu)",
    "explanation": "\"Acil protokoller sıkıca uygulanmazsa, mercan ekosistemleri çökecektir.\" Anlam olumsuz bir koşul gerektirdiğinden \"Unless (= If not)\" doğru cevaptır.",
    "synonyms": [
      "If ... not",
      "Except if"
    ],
    "collocation": "Unless + Positive Verb, Negative Outcome",
    "optionsBreakdown": {
      "Unless": {
        "word": "Unless",
        "meaning": "-mezse, -madıkça (= If not)",
        "mnemonic": "💡 FORMÜL: Unless kendi içinde \"NOT\" taşır. Bağlandığı cümle olumlu yazılır ama anlamı \"olmazsa / yapılmazsa\"dır.",
        "rootAnalysis": "🔬 ÖSYM Sırrı: Unless olan cümlenin ana cümlesinde genelde olumsuz bir tehlike anlatılır."
      },
      "As long as": {
        "word": "As long as",
        "meaning": "-dığı sürece (= So long as)",
        "mnemonic": "💡 FORMÜL: Koşul sağlandığı müddetçe eylem devam eder.",
        "rootAnalysis": "🔬 Kural: \"Protokoller uygulandığı sürece mercanlar çöker\" diyemeyiz, anlam ters kalır."
      },
      "Since": {
        "word": "Since",
        "meaning": "-dığı için, çünkü (Sebep)",
        "mnemonic": "💡 TUZAK: Sebep olamaz; \"protokoller uygulandığı için çöker\" mantıksızdır.",
        "rootAnalysis": "🔬 Eşanlam: Because, as."
      },
      "Because": {
        "word": "Because",
        "meaning": "çünkü (Sebep)",
        "mnemonic": "💡 TUZAK: Neden-sonuç bağlamına uymaz.",
        "rootAnalysis": "🔬 Kural: Anlamca çelişir."
      },
      "Even though": {
        "word": "Even though",
        "meaning": "-e rağmen, -se bile, her ne kadar ... ise de (+ Tam Cümle)",
        "mnemonic": "💡 FORMÜL: EVEN THOUGH + Tam Cümle. Beklentinin tersine gerçekleşen zıtlık bildirir: '+ iken - olur'.",
        "rootAnalysis": "🔬 YDS Notu: 'Although', 'though' ve 'while' ile tam eş anlamlıdır. Kendisinden sonra İsim değil, Tam Cümle (S+V) alır."
      }
    }
  },
  {
    "id": "gq1",
    "category": "grammar",
    "targetWordId": "gram_since",
    "targetWord": "Ever since ... discovered / has transformed",
    "type": "grammar",
    "sentence": "Ever since Alexander Fleming _____ penicillin in 1928, antibiotic therapeutics _____ the treatment of infectious bacterial diseases.",
    "options": [
      "discovered / has transformed",
      "has discovered / transformed",
      "had discovered / transforms",
      "discovered / will transform",
      "had discovered / has transformed"
    ],
    "correctAnswer": "discovered / has transformed",
    "meaningTr": "Ever since + Past Simple (V2), Present Perfect (have/has V3)",
    "explanation": "ÖSYM'nin 1 numaralı değişmez formülü: \"Since / Ever since + Geçmiş Zaman Tarihi/Cümlesi (V2), Present Perfect (have/has V3)\" kuralıdır.",
    "synonyms": [
      "Since + Past Simple, Present Perfect"
    ],
    "collocation": "Ever since + V2, ... have/has V3",
    "optionsBreakdown": {
      "discovered / has transformed": {
        "word": "V2 / has V3",
        "meaning": "Keşfetti / Dönüştürmüştür (Doğru Formül)",
        "mnemonic": "💡 ÖSYM DEMİRBAŞ KURALI: \"Since + Past Simple (V2), Present Perfect (have/has V3)\". 1928 geçmişte kaldığı için V2, etkisi bugüne geldiği için has transformed.",
        "rootAnalysis": "🔬 Zaman Uyumu: Past olayın günümüzdeki sonucudur."
      },
      "has discovered / transformed": {
        "word": "has discovered / transformed",
        "meaning": "Yanlış Zaman Dizilimi",
        "mnemonic": "💡 TUZAK: \"in 1928\" net geçmiş zaman zarfıdır, asla \"has discovered\" alamaz!",
        "rootAnalysis": "🔬 Kural: Belirli geçmiş tarihler (in 1928, yesterday) V2 ister."
      },
      "had discovered / transforms": {
        "word": "had discovered / transforms",
        "meaning": "Zaman Tutarsızlığı",
        "mnemonic": "💡 TUZAK: Geçmişin geçmişinden (had V3) sebepsizce geniş zamana atlanamaz.",
        "rootAnalysis": "🔬 Kural: Past Perfect için başka bir geçmiş olay referansı gerekir."
      },
      "discovered / will transform": {
        "word": "discovered / will transform",
        "meaning": "Gelecek Zaman Tutarsızlığı",
        "mnemonic": "💡 TUZAK: Olay 1928'de başlayıp bugüne kadar dönüştürmüştür, geleceğe atıf yapmaz.",
        "rootAnalysis": "🔬 Kural: Since yapısı \"will\" ile ana cümle kurmaz."
      },
      "had discovered / has transformed": {
        "word": "had discovered / has transformed",
        "meaning": "Past Perfect + Present Perfect: \"since\" cümlesinde Past Perfect kullanılmaz",
        "mnemonic": "💡 ÇELDİRİCİ: Anlam alanı yakın ama cümlenin mantığına/yapısına uymuyor."
      }
    }
  },
  {
    "id": "gq2",
    "category": "grammar",
    "targetWordId": "gram_reduction",
    "targetWord": "Driven",
    "type": "grammar",
    "sentence": "_____ by an insatiable demand for rare earth minerals, deep-sea mining corporations are now engineering submersibles capable of descending eleven kilometers.",
    "options": [
      "Driving",
      "Driven",
      "Having driven",
      "To drive",
      "Drives"
    ],
    "correctAnswer": "Driven",
    "meaningTr": "Güdülenen, harekete geçirilen (Edilgen / Pasif Sadeleştirme)",
    "explanation": "Virgülden sonraki ana özneye bakın: \"deep-sea mining corporations (derin deniz madencilik şirketleri)\". Şirketler talep tarafından \"harekete mi geçirilmiştir (pasif)\" yoksa kendileri mi harekete geçirmiştir? \"BY\" edatı eylemin pasif (V3) olduğunu kanıtlar: \"Driven by...\"",
    "synonyms": [
      "Being driven",
      "Having been driven"
    ],
    "collocation": "Driven by ... (V3 Pasif Sadeleştirme)",
    "optionsBreakdown": {
      "Driving": {
        "word": "Driving (V-ing)",
        "meaning": "Aktif / Etken Sadeleştirme",
        "mnemonic": "💡 TUZAK: V-ing aktif eylemdir. Boşluktan sonra \"by\" edatı varsa aktif yapı seçilemez!",
        "rootAnalysis": "🔬 Kural: Nesne alsaydı (Driving the demand) aktif olurdu."
      },
      "Driven": {
        "word": "Driven (V3)",
        "meaning": "Pasif / Edilgen Sadeleştirme (Doğru Cevap)",
        "mnemonic": "💡 FORMÜL: Cümle başında kısaltma sorulup arkasından \"BY\" edatı geliyorsa cevap %99 PASİF (V3) seçenektir: \"Driven by... = (Because they are driven by...)\"",
        "rootAnalysis": "🔬 Kural: Past Participle edilgen anlam verir."
      },
      "Having driven": {
        "word": "Having driven (Having V3)",
        "meaning": "Aktif Öncelik Bildiren Sadeleştirme",
        "mnemonic": "💡 TUZAK: Yine aktiftir (işi bizzat yapan özne). \"By\" ile pasif olamaz.",
        "rootAnalysis": "🔬 Kural: Pasif hali \"Having been driven\" olurdu."
      },
      "To drive": {
        "word": "To drive (Infinitive)",
        "meaning": "Amaç Bildiren Sadeleştirme (-mek için)",
        "mnemonic": "💡 TUZAK: Cümle başında \"To V1\" amaç anlatır (\"harekete geçirmek için\"). \"By\" ile uyumsuzdur.",
        "rootAnalysis": "🔬 Kural: Amaç anlamı bağlama uymaz."
      },
      "Drives": {
        "word": "Drives",
        "meaning": "Çekimli fiil: cümle başında yan cümle kuramaz, cümlede iki ana fiil olur",
        "mnemonic": "💡 ÇELDİRİCİ: Anlam alanı yakın ama cümlenin mantığına/yapısına uymuyor."
      }
    }
  },
  {
    "id": "vq16",
    "category": "verb",
    "targetWordId": "w266",
    "targetWord": "substantiate",
    "type": "verb",
    "sentence": "The research team failed to _____ their controversial claims regarding nuclear fusion with verifiable empirical data.",
    "options": [
      "substantiate",
      "undermine",
      "fabricate",
      "repudiate",
      "distort"
    ],
    "correctAnswer": "substantiate",
    "meaningTr": "kanıtlamak, somut verilerle doğrulamak",
    "explanation": "Cümlede \"failed to _____ with empirical data (somut verilerle iddialarını ..... başaramadılar)\" denmektedir. İddialar veriyle ispatlanır/doğrulanır (substantiate).",
    "synonyms": [
      "corroborate",
      "verify",
      "validate",
      "confirm"
    ],
    "collocation": "substantiate claims with data",
    "optionsBreakdown": {
      "substantiate": {
        "word": "substantiate",
        "meaning": "kanıtlamak, somutlaştırmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"SUBSTANCE (madde/somut cisim)\". İddiayı somut bir madde/kanıt haline getirmek, ispatlamak.",
        "rootAnalysis": "🔬 Kök: Latince substantia (öz, varlık, somut cevher)."
      },
      "undermine": {
        "word": "undermine",
        "meaning": "baltalamak, altını oymak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"UNDER (alt)\" + \"MINE (kazmak/mayın)\". Kalenin altını kazıp temelini çürütmek.",
        "rootAnalysis": "🔬 Mecaz: Gizlice gücünü veya otoritesini zayıflatmak."
      },
      "fabricate": {
        "word": "fabricate",
        "meaning": "uydurmak, sahtesini üretmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"FABRİKA\" gibi durmadan yalan ve sahte kanıt üretmek/uydurmak.",
        "rootAnalysis": "🔬 Kök: Fabric (kumaş dokumak) -> zihinde yalan örmek."
      },
      "repudiate": {
        "word": "repudiate",
        "meaning": "reddetmek, inkar etmek, tanımamak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"RE- (geri)\" + \"PUD (ayakla itmek)\". Ayakla geri itip antlaşmayı/iddiayı reddetmek.",
        "rootAnalysis": "🔬 Kök: Latince repudiare (boşanmak, defetmek, tanımamak)."
      },
      "distort": {
        "word": "distort",
        "meaning": "çarpıtmak, saptırmak, şeklini/anlamını bozmak",
        "mnemonic": "💡 ÇAĞRIŞIM: 'TORTE / DİS-TORT' -> Gitar sesini bozan distortion pedalı gibi, gerçeğin orijinal biçimini bozup yamultmak, çarpıtmak (distort).",
        "rootAnalysis": "🔬 YDS Notu: Gerçeklerin çarpıtılması ('distort facts/truth') veya sinyallerin bozulması ('distort signals') metinlerinde 'falsify' veya 'misrepresent' yerine sorulur."
      }
    }
  },
  {
    "id": "vq17",
    "category": "verb",
    "targetWordId": "w268",
    "targetWord": "jeopardize",
    "type": "verb",
    "sentence": "Leaking confidential diplomatic cables to foreign media outlets could seriously _____ national security and bilateral relations.",
    "options": [
      "jeopardize",
      "safeguard",
      "foster",
      "reconcile",
      "bolster"
    ],
    "correctAnswer": "jeopardize",
    "meaningTr": "tehlikeye atmak, riske sokmak",
    "explanation": "Gizli diplomatik yazışmaların sızdırılması milli güvenliği korumaz ya da geliştirmez; ciddi şekilde tehlikeye atar / riske sokar (jeopardize).",
    "synonyms": [
      "endanger",
      "imperil",
      "threaten",
      "compromise"
    ],
    "collocation": "jeopardize national security",
    "optionsBreakdown": {
      "jeopardize": {
        "word": "jeopardize",
        "meaning": "tehlikeye atmak, riske sokmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"JAPON DİZE\" gelmez ama bu hata ülkeyi JEOPARDIZE eder (tehlikeye atar).",
        "rootAnalysis": "🔬 Kök: Eski Fransızca \"jeu parti\" (bölünmüş oyun, eşit şans/büyük kumar)."
      },
      "safeguard": {
        "word": "safeguard",
        "meaning": "korumak, muhafaza etmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"SAFE (güvenli)\" + \"GUARD (muhafız)\". Güvenliği koruma altına almak.",
        "rootAnalysis": "🔬 Zıt Anlam: Endanger / Jeopardize zıttıdır."
      },
      "foster": {
        "word": "foster",
        "meaning": "teşvik etmek, geliştirmek, büyütmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"FOSTER PARENT (koruyucu anne-baba)\". Çocuğu sevgiyle büyütmek, teşvik etmek.",
        "rootAnalysis": "🔬 Kök: Beslemek, büyütmek."
      },
      "reconcile": {
        "word": "reconcile",
        "meaning": "uzlaştırmak, barıştırmak",
        "mnemonic": "💡 ÇAĞRIŞIM: Küsleri \"RE-CON-SİLE (sil baştan)\" barıştırıp uzlaştırmak.",
        "rootAnalysis": "🔬 Edat: Reconcile with (ile uzlaştırmak)."
      },
      "bolster": {
        "word": "bolster",
        "meaning": "desteklemek, güçlendirmek, takviye etmek",
        "mnemonic": "💡 ÇAĞRIŞIM: 'BOL-STAR' -> Kadrosuna bol bol yıldız (star) futbolcu alarak takımını takviye eden, BOLSTER eden (güçlendiren) kulüp.",
        "rootAnalysis": "🔬 YDS Notu: ÖSYM'nin en sevdiği pozitif fiillerdendir; 'strengthen', 'reinforce' veya 'boost' yerine sıklıkla doğru cevap olarak sorulur."
      }
    }
  },
  {
    "id": "vq18",
    "category": "verb",
    "targetWordId": "w270",
    "targetWord": "hamper",
    "type": "verb",
    "sentence": "Dense fog and torrential rainfall continue to _____ search and rescue operations across the mountainous crash site.",
    "options": [
      "hamper",
      "facilitate",
      "accelerate",
      "substantiate",
      "expedite"
    ],
    "correctAnswer": "hamper",
    "meaningTr": "engellemek, aksatmak, güçleştirmek",
    "explanation": "Yoğun sis ve sağanak yağış olumsuz hava koşullarıdır (-). Kurtarma çalışmalarını kolaylaştırmaz; engeller ve aksatır (hamper).",
    "synonyms": [
      "impede",
      "hinder",
      "obstruct",
      "thwart"
    ],
    "collocation": "hamper rescue efforts / economic growth",
    "optionsBreakdown": {
      "hamper": {
        "word": "hamper",
        "meaning": "engellemek, aksatmak",
        "mnemonic": "💡 ÇAĞRIŞIM: Koşarken önüne koca bir piknik sepeti (HAMPER) koyup ayağına engel oldular.",
        "rootAnalysis": "🔬 Benzer Kelime: Hinder / Impede ile birebir eşanlamlıdır."
      },
      "facilitate": {
        "word": "facilitate",
        "meaning": "kolaylaştırmak, olanak sağlamak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"FACİLE (Fransızca kolay)\". İşi kolaylaştırmak, önünü açmak.",
        "rootAnalysis": "🔬 Zıt Anlam: Hamper / Impede kelimelerinin tam tersidir."
      },
      "accelerate": {
        "word": "accelerate",
        "meaning": "hızlandırmak, ivme kazandırmak",
        "mnemonic": "💡 ÇAĞRIŞIM: Arabanın \"GAZ PEDALI (Accelerator)\" gaza basıp hızı artırır.",
        "rootAnalysis": "🔬 Fizik Terimi: Acceleration (İvme)."
      },
      "substantiate": {
        "word": "substantiate",
        "meaning": "somut kanıtlarla doğrulamak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"Substance\" katarak iddiayı sağlam kanıtlarla ispatlamak.",
        "rootAnalysis": "🔬 Akademik Terim: Bilimsel kanıtlama."
      },
      "expedite": {
        "word": "expedite",
        "meaning": "hızlandırmak, kolaylaştırmak",
        "mnemonic": "💡 ÇAĞRIŞIM: 'EKSPRES' -> Ekspres kargo gibi süreci jet hızıyla EXPEDITE etmek (hızlandırmak).",
        "rootAnalysis": "🔬 YDS Notu: 'Accelerate / hasten / speed up' eşanlamlısıdır; bürokratik veya fiziksel süreçleri hızlandırmaktır."
      }
    }
  },
  {
    "id": "vq19",
    "category": "verb",
    "targetWordId": "w271",
    "targetWord": "exacerbate",
    "type": "verb",
    "sentence": "Rising interest rates and record inflation could further _____ the financial distress of heavily indebted households.",
    "options": [
      "exacerbate",
      "mitigate",
      "alleviate",
      "soothe",
      "offset"
    ],
    "correctAnswer": "exacerbate",
    "meaningTr": "kötüleştirmek, alevlendirmek, şiddetlendirmek",
    "explanation": "Yüksek faiz ve enflasyon borçlu ailelerin durumunu hafifletmez; daha da kötüleştirir / alevlendirir (exacerbate).",
    "synonyms": [
      "aggravate",
      "worsen",
      "intensify"
    ],
    "collocation": "exacerbate the crisis / problem",
    "optionsBreakdown": {
      "exacerbate": {
        "word": "exacerbate",
        "meaning": "kötüleştirmek, şiddetlendirmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"EKSTRA SERT\" yaparak yarayı kaşıyıp daha da EXACERBATE etti (kötüleştirdi).",
        "rootAnalysis": "🔬 Kök: Latince acerbus (acı, ekşi, sert)."
      },
      "mitigate": {
        "word": "mitigate",
        "meaning": "hafifletmek, yatıştırmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"MİTİNGDEKİ\" öfkeyi polisin ikram ettiği çay MİTİGATE etti (hafifletti).",
        "rootAnalysis": "🔬 Zıt Anlam: Exacerbate / Aggravate kelimesinin doğrudan zıttıdır."
      },
      "alleviate": {
        "word": "alleviate",
        "meaning": "dindirmek, hafifletmek, azaltmak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"ALİ EVDE YATIP\" ağrısını dindirdi, hafifletti.",
        "rootAnalysis": "🔬 Kök: Latince levis (hafif)."
      },
      "soothe": {
        "word": "soothe",
        "meaning": "teskin etmek, yatıştırmak",
        "mnemonic": "💡 ÇAĞRIŞIM: Bebeğe emzik verip kulağına ninniyle SOOTHE ettiler (sakinleştirdiler).",
        "rootAnalysis": "🔬 Kullanım: Ağrıyı ya da öfkeyi dindirmek."
      },
      "offset": {
        "word": "offset",
        "meaning": "dengelemek, telafi etmek, karşılamak, nötrlemek",
        "mnemonic": "💡 ÇAĞRIŞIM: 'OFF-SET (Ayarını sıfırlamak)' -> Bir taraftaki fazlalığı diğer taraftaki eksiyle eşitleyip dengelemek: OFFSET (dengelemek, telafi etmek).",
        "rootAnalysis": "🔬 YDS Notu: ÖSYM çevre ve ekonomi metinlerinde 'offset carbon emissions' (karbon emisyonlarını nötrlemek) ve 'offset losses' (kayıpları telafi etmek) olarak sıkça sorar."
      }
    }
  },
  {
    "id": "vq20",
    "category": "adjective",
    "targetWordId": "w273",
    "targetWord": "susceptible",
    "type": "adjective",
    "sentence": "Infants and immunocompromised individuals are extraordinarily _____ to seasonal influenza complications.",
    "options": [
      "susceptible",
      "impervious",
      "immune",
      "indifferent",
      "resilient"
    ],
    "correctAnswer": "susceptible",
    "meaningTr": "hassas, savunmasız, kolay etkilenen (-to ile)",
    "explanation": "Boşluktan sonra gelen \"to\" edatına dikkat edin. Bağışıklığı zayıf kişiler komplikasyonlara karşı bağışık (immune) değil, hassastır/savunmasızdır (susceptible to).",
    "synonyms": [
      "vulnerable",
      "prone",
      "predisposed"
    ],
    "collocation": "susceptible to infection / disease",
    "optionsBreakdown": {
      "susceptible": {
        "word": "susceptible",
        "meaning": "hassas, savunmasız (-to)",
        "mnemonic": "💡 ÇAĞRIŞIM: \"SÜS BİTKİSİ\" soğuğa karşı çok SUSCEPTIBLE'dır (savunmasızdır, hemen solar).",
        "rootAnalysis": "🔬 Altın Edat: Susceptible TO / Prone TO / Vulnerable TO üçlüsü."
      },
      "impervious": {
        "word": "impervious",
        "meaning": "etkilenmez, geçirmez (-to)",
        "mnemonic": "💡 ÇAĞRIŞIM: \"İM-POSSIBLE TO PIERCE (delinmesi imkansız)\". Su geçirmez zırh gibi.",
        "rootAnalysis": "🔬 Zıt Anlam: Susceptible kelimesinin tam tersidir."
      },
      "immune": {
        "word": "immune",
        "meaning": "bağışık, muaf (-to)",
        "mnemonic": "💡 ÇAĞRIŞIM: \"İMMÜN SİSTEMİ\" virüsü tanıyıp hastalıktan muaf kıldı.",
        "rootAnalysis": "🔬 Tıbbi Terim: Immunity (Bağışıklık)."
      },
      "indifferent": {
        "word": "indifferent",
        "meaning": "kayıtsız, umursamaz (-to)",
        "mnemonic": "💡 ÇAĞRIŞIM: \"IN (değil)\" + \"DIFFERENT (farklı)\". Benim için hiç fark etmez, banane diyen umursamaz.",
        "rootAnalysis": "🔬 Duygu Analizi: Nötr / İlgisiz."
      },
      "resilient": {
        "word": "resilient",
        "meaning": "dirençli, dayanıklı, çabuk toparlanan, esnek",
        "mnemonic": "💡 ÇAĞRIŞIM: 'REZİSTANS (Direnç)' -> Darbeler karşısında kırılmayan, esneyip hemen eski sağlam haline toparlanan dirençli (resilient) yapı.",
        "rootAnalysis": "🔬 YDS Notu: ÖSYM'nin en popüler sıfatlarından biridir! Krizden çabuk çıkan ekonomi ('resilient economy') veya afetlere dirençli yapılar için kullanılır."
      }
    }
  },
  {
    "id": "vq21",
    "category": "adjective",
    "targetWordId": "w274",
    "targetWord": "detrimental",
    "type": "adjective",
    "sentence": "Discharging untreated industrial effluents into local rivers exerts a highly _____ impact on aquatic ecosystems.",
    "options": [
      "detrimental",
      "lucrative",
      "beneficial",
      "negligible",
      "benign"
    ],
    "correctAnswer": "detrimental",
    "meaningTr": "zararlı, hasar verici, yıkıcı (-to)",
    "explanation": "Arıtılmamış fabrika atıklarının nehre dökülmesi nehirdeki canlılar için karlı veya faydalı olamaz; son derece zararlıdır (detrimental).",
    "synonyms": [
      "harmful",
      "damaging",
      "deleterious",
      "adverse"
    ],
    "collocation": "detrimental effect / impact on",
    "optionsBreakdown": {
      "detrimental": {
        "word": "detrimental",
        "meaning": "zararlı, yıkıcı",
        "mnemonic": "💡 ÇAĞRIŞIM: \"DETRİTUS (çürük atık)\" sulara karışırsa çevreye DETRIMENTAL (zararlı) olur.",
        "rootAnalysis": "🔬 Kök: Latince detrimentum (hasar, kayıp, ziyan)."
      },
      "lucrative": {
        "word": "lucrative",
        "meaning": "çok kazançlı, karlı",
        "mnemonic": "💡 ÇAĞRIŞIM: \"LÜKS\" hayat yaşatan iş, son derece LUCRATIVE (karlı) bir iştir.",
        "rootAnalysis": "🔬 Ekonomi Terimi: Profitable."
      },
      "beneficial": {
        "word": "beneficial",
        "meaning": "faydalı, yararlı",
        "mnemonic": "💡 ÇAĞRIŞIM: \"BENEFIT (fayda)\". İyilik ve yarar sağlayan.",
        "rootAnalysis": "🔬 Kök: Bene- (iyi, güzel)."
      },
      "negligible": {
        "word": "negligible",
        "meaning": "ihmal edilebilir, önemsiz",
        "mnemonic": "💡 ÇAĞRIŞIM: \"NEGLECT (ihmal etmek)\". O kadar küçük ki görmezden gelinebilir.",
        "rootAnalysis": "🔬 Kök: Negligere (ihmal etmek)."
      },
      "benign": {
        "word": "benign",
        "meaning": "iyi huylu, zararsız, tehlikesiz, sevecen",
        "mnemonic": "💡 ÇAĞRIŞIM: 'BENE- (İyi)' -> Latince 'bene' (iyi, güzel) kökünden; kanser yapmayan, zararsız ve iyi huylu: BENIGN.",
        "rootAnalysis": "🔬 YDS Notu: Tıpta 'benign tumor' (iyi huylu tümör) olarak; 'malignant' (kötü huylu) kelimesinin zıttı olarak sürekli sorulur."
      }
    }
  },
  {
    "id": "vq22",
    "category": "adjective",
    "targetWordId": "w276",
    "targetWord": "indispensable",
    "type": "adjective",
    "sentence": "In contemporary healthcare, rigorous hygiene protocols and sterile gloves are _____ for preventing surgical infections.",
    "options": [
      "indispensable",
      "superfluous",
      "redundant",
      "negligible",
      "trivial"
    ],
    "correctAnswer": "indispensable",
    "meaningTr": "vazgeçilmez, olmazsa olmaz, zorunlu",
    "explanation": "Ameliyatlarda enfeksiyonu önlemek için hijyen ve steril eldiven lüks veya gereksiz (superfluous) değil; vazgeçilmezdir (indispensable).",
    "synonyms": [
      "essential",
      "vital",
      "crucial",
      "imperative"
    ],
    "collocation": "indispensable tool / component",
    "optionsBreakdown": {
      "indispensable": {
        "word": "indispensable",
        "meaning": "vazgeçilmez, elzem",
        "mnemonic": "💡 ÇAĞRIŞIM: \"IN (olumsuzluk)\" + \"DISPENSE (vazgeçmek/dağıtmak)\". Vazgeçilmesi imkansız olan şey.",
        "rootAnalysis": "🔬 Formül: Indispensable to / for (için vazgeçilmez)."
      },
      "superfluous": {
        "word": "superfluous",
        "meaning": "fuzuli, gereğinden fazla, lüzumsuz",
        "mnemonic": "💡 ÇAĞRIŞIM: \"SUPER (aşırı)\" + \"FLOW (taşmak)\". Bardaktan taşan su gibi gereksiz/fazlalık.",
        "rootAnalysis": "🔬 Kök: Latince superfluere (taşmak)."
      },
      "redundant": {
        "word": "redundant",
        "meaning": "gereksiz, ihtiyaç fazlası, gereksizce tekrarlanan",
        "mnemonic": "💡 ÇAĞRIŞIM: Şirkette aynı işi yapan iki kişi varsa biri REDUNDANT (gereksiz fazlalık) olur.",
        "rootAnalysis": "🔬 Eşanlam: Superfluous, unnecessary."
      },
      "negligible": {
        "word": "negligible",
        "meaning": "önemsiz, hesaba katılmayacak kadar az",
        "mnemonic": "💡 ÇAĞRIŞIM: \"Neglect\" edilen önemsiz ayrıntı.",
        "rootAnalysis": "🔬 Eşanlam: Insignificant."
      },
      "trivial": {
        "word": "trivial",
        "meaning": "önemsiz, incir çekirdeğini doldurmaz, adi, kayda değmez",
        "mnemonic": "💡 ÇAĞRIŞIM: Bilgi yarışması 'TRIVIA' -> Çok büyük bir önemi olmayan, incir çekirdeğini doldurmaz ufak tefek detaylar: TRIVIAL (önemsiz).",
        "rootAnalysis": "🔬 YDS Notu: 'Trivial' önemsiz olanı nitelerken; 'vital/crucial/momentous' kelimelerinin doğrudan zıttı olarak sınavlarda çeldiricidir."
      }
    }
  },
  {
    "id": "vq23",
    "category": "conjunction",
    "targetWordId": "w280",
    "targetWord": "nevertheless",
    "type": "conjunction",
    "sentence": "The experimental rocket suffered several critical engine anomalies during ascent; _____, ground control managed to achieve orbital insertion.",
    "options": [
      "nevertheless",
      "therefore",
      "furthermore",
      "otherwise",
      "moreover"
    ],
    "correctAnswer": "nevertheless",
    "meaningTr": "yine de, buna rağmen, bununla birlikte",
    "explanation": "İlk cümle motor arızasıyla negatiftir (-); noktalı virgülden sonraki cümle ise görevin başarıyla yörüngeye girdiğini belirterek pozitiftir (+). Zıtlık geçiş zarfı \"nevertheless\" gereklidir.",
    "synonyms": [
      "nonetheless",
      "however",
      "still",
      "even so"
    ],
    "collocation": "; nevertheless, (Noktalı virgül + nevertheless + virgül)",
    "optionsBreakdown": {
      "nevertheless": {
        "word": "nevertheless",
        "meaning": "yine de, buna rağmen",
        "mnemonic": "💡 KURAL: Eksi (-) duruma rağmen olumlu (+) bir sonuç alındığında kullanılan altın zıtlık zarfı.",
        "rootAnalysis": "🔬 Eşdeğer: Nonetheless / However ile %100 aynı görevdedir."
      },
      "therefore": {
        "word": "therefore",
        "meaning": "bu yüzden, dolayısıyla",
        "mnemonic": "💡 KURAL: Sebep-sonuç bildirir. Arıza çıktığı için yörüngeye girilmez; mantıken elenir.",
        "rootAnalysis": "🔬 Eşdeğer: Thus, hence, consequently."
      },
      "furthermore": {
        "word": "furthermore",
        "meaning": "dahası, üstelik, ayrıca",
        "mnemonic": "💡 KURAL: Paralel ekleme yapar (+ ise +, - ise -). Burada ise eksiye karşı artı vardır.",
        "rootAnalysis": "🔬 Eşdeğer: In addition, moreover."
      },
      "otherwise": {
        "word": "otherwise",
        "meaning": "aksi takdirde, yoksa",
        "mnemonic": "💡 KURAL: Tehdit veya şart bildirir: \"Çalış yoksa kalırsın (Study, otherwise you will fail)\".",
        "rootAnalysis": "🔬 Kullanım: Gizli If Not anlamı taşır."
      },
      "moreover": {
        "word": "moreover",
        "meaning": "dahası, ayrıca, üstelik, buna ek olarak",
        "mnemonic": "💡 ÇAĞRIŞIM: 'MORE (daha fazlası)' + 'OVER (üzerine)' -> Mevcut bilginin üzerine bir fazlasını daha eklemek: MOREOVER (dahası, üstelik).",
        "rootAnalysis": "🔬 YDS Notu: Ek bilgi bağlacıdır (Addition); 'furthermore', 'in addition' ve 'besides' ile eş anlamlı olarak iki olumlu veya iki olumsuz fikri bağlar."
      }
    }
  },
  {
    "id": "vq24",
    "category": "conjunction",
    "targetWordId": "w281",
    "targetWord": "provided that",
    "type": "conjunction",
    "sentence": "Developing nations can successfully transition to green energy _____ wealthier countries supply adequate financial grants and technical patents.",
    "options": [
      "provided that",
      "unless",
      "although",
      "whereas",
      "even though"
    ],
    "correctAnswer": "provided that",
    "meaningTr": "şartıyla, koşuluyla (if / as long as)",
    "explanation": "Yeşil enerjiye geçiş, zengin ülkelerin finansman ve patent sağlaması şartına / koşuluna (provided that) bağlıdır.",
    "synonyms": [
      "as long as",
      "on condition that",
      "only if"
    ],
    "collocation": "provided that + tam cümle",
    "optionsBreakdown": {
      "provided that": {
        "word": "provided that",
        "meaning": "şartıyla, koşuluyla (= If)",
        "mnemonic": "💡 FORMÜL: \"PROVIDED THAT = IF / AS LONG AS\". Arkasından olumlu şart ister.",
        "rootAnalysis": "🔬 Kural: \"Providing that\" şeklinde de gelebilir."
      },
      "unless": {
        "word": "unless",
        "meaning": "-medikçe, -madıkça (= If not)",
        "mnemonic": "💡 KURAL: Olumsuz şart bağlacıdır. \"Unless wealthier supply\" olsaydı \"sağlamadıkları sürece\" olurdu.",
        "rootAnalysis": "🔬 Kural: Kendisinden sonraki cümlede \"not\" almaz."
      },
      "although": {
        "word": "although",
        "meaning": "-e rağmen, her ne kadar ... ise de",
        "mnemonic": "💡 KURAL: Zıtlık bildirir; burada şart-sonuç ilişkisi vardır.",
        "rootAnalysis": "🔬 Eşdeğer: Even though, though."
      },
      "whereas": {
        "word": "whereas",
        "meaning": "oysa ki, -e karşın",
        "mnemonic": "💡 KURAL: İki farklı özneyi karşılaştırır (Ali zenginken, Veli fakirdir).",
        "rootAnalysis": "🔬 Eşdeğer: While."
      },
      "even though": {
        "word": "even though",
        "meaning": "-e rağmen, -se bile, her ne kadar ... ise de (+ Tam Cümle)",
        "mnemonic": "💡 FORMÜL: EVEN THOUGH + Tam Cümle. Beklentinin tersine gerçekleşen zıtlık bildirir: '+ iken - olur'.",
        "rootAnalysis": "🔬 YDS Notu: 'Although', 'though' ve 'while' ile tam eş anlamlıdır. Kendisinden sonra İsim değil, Tam Cümle (S+V) alır."
      }
    }
  },
  {
    "id": "vq25",
    "category": "conjunction",
    "targetWordId": "w282",
    "targetWord": "thereby",
    "type": "conjunction",
    "sentence": "The new aerodynamic fuselage design reduces drag by eighteen percent, _____ lowering overall jet fuel consumption.",
    "options": [
      "thereby",
      "whereas",
      "unless",
      "nonetheless",
      "otherwise"
    ],
    "correctAnswer": "thereby",
    "meaningTr": "böylelikle, bu sayede (thereby + V-ing)",
    "explanation": "Öncesindeki eylemin sonucunu \"-erek/-arak, böylelikle\" anlamıyla bağlayan ve arkasından doğrudan \"V-ing (lowering)\" alan altın YDS yapısı \"thereby\"dır.",
    "synonyms": [
      "thus",
      "in this way"
    ],
    "collocation": ", thereby + V-ing",
    "optionsBreakdown": {
      "thereby": {
        "word": "thereby",
        "meaning": "böylelikle, bu yolla (+ V-ing)",
        "mnemonic": "💡 ALTIN FORMÜL: Virgülün arkasından \"thereby + V-ing\" gelmesi YDS'nin 1 numaralı imza kalıbıdır.",
        "rootAnalysis": "🔬 Gramer: Eylemin mantıksal sonucunu anlatan zarf."
      },
      "whereas": {
        "word": "whereas",
        "meaning": "oysa ki, taban tabana zıt olarak",
        "mnemonic": "💡 KURAL: Tam cümle (özne + fiil) ister; V-ing ile bağlanamaz.",
        "rootAnalysis": "🔬 Kıyaslama bağlacı."
      },
      "unless": {
        "word": "unless",
        "meaning": "-medikçe (If not)",
        "mnemonic": "💡 KURAL: Koşul cümlesi ister (Unless + S + V).",
        "rootAnalysis": "🔬 Şart bağlacı."
      },
      "nonetheless": {
        "word": "nonetheless",
        "meaning": "yine de, buna rağmen",
        "mnemonic": "💡 KURAL: Zıtlık geçiş zarfıdır, arkasından tam cümle ister.",
        "rootAnalysis": "🔬 Zıtlık zarfı."
      },
      "otherwise": {
        "word": "otherwise",
        "meaning": "aksi takdirde, yoksa (koşul/uyarı bağlacı)",
        "mnemonic": "💡 ÇELDİRİCİ: Anlam alanı yakın ama cümlenin mantığına/yapısına uymuyor."
      }
    }
  },
  {
    "id": "vq26",
    "category": "phrasal_verb",
    "targetWordId": "w283",
    "targetWord": "bring about",
    "type": "phrasal_verb",
    "sentence": "The widespread adoption of artificial intelligence in healthcare is expected to _____ revolutionary changes in early diagnosis.",
    "options": [
      "bring about",
      "call off",
      "turn down",
      "put out",
      "give off"
    ],
    "correctAnswer": "bring about",
    "meaningTr": "yol açmak, sebep olmak, meydana getirmek",
    "explanation": "Yapay zekanın sağlıkta benimsenmesi teşhiste devrimsel değişiklikleri iptal etmez; bu değişikliklere yol açar / meydana getirir (bring about).",
    "synonyms": [
      "cause",
      "induce",
      "trigger",
      "lead to",
      "give rise to"
    ],
    "collocation": "bring about changes / reforms",
    "optionsBreakdown": {
      "bring about": {
        "word": "bring about",
        "meaning": "yol açmak, meydana getirmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"BRING (getirmek)\" + \"ABOUT (etrafına)\". Etrafına yeni bir sonuç getirmek, yol açmak.",
        "rootAnalysis": "🔬 Eşdeğer: Lead to / Cause."
      },
      "call off": {
        "word": "call off",
        "meaning": "iptal etmek",
        "mnemonic": "💡 ÇAĞRIŞIM: Maçı \"OFF\" ettiler, iptal çağrısı yaptılar.",
        "rootAnalysis": "🔬 Eşdeğer: Cancel."
      },
      "turn down": {
        "word": "turn down",
        "meaning": "reddetmek, sesini kısmak",
        "mnemonic": "💡 ÇAĞRIŞIM: İşi beğenmeyip başını \"DOWN (aşağı)\" çevirip teklifi reddetti.",
        "rootAnalysis": "🔬 Eşdeğer: Reject, decline."
      },
      "put out": {
        "word": "put out",
        "meaning": "yangını söndürmek, yayımlamak",
        "mnemonic": "💡 ÇAĞRIŞIM: İtfaiyeci ateşi dışarıya (OUT) attı ve söndürdü.",
        "rootAnalysis": "🔬 Eşdeğer: Extinguish."
      },
      "give off": {
        "word": "give off",
        "meaning": "(koku, duman, ısı, ışık) salmak, yaymak",
        "mnemonic": "💡 ÇAĞRIŞIM: 'GIVE (Vermek) + OFF (Dışarı)' -> Dışarıya koku, duman veya ısı fışkırtmak: GIVE OFF (salmak, yaymak).",
        "rootAnalysis": "🔬 YDS Notu: 'Emit' fiilinin birebir phrasal verb karşılığıdır; gaz, koku, duman ve ışık yayılmalarında sınavın en popüler kalıbıdır."
      }
    }
  },
  {
    "id": "vq27",
    "category": "phrasal_verb",
    "targetWordId": "w284",
    "targetWord": "cope with",
    "type": "phrasal_verb",
    "sentence": "Municipal services are struggling to _____ the unprecedented influx of displaced migrants following the devastating earthquake.",
    "options": [
      "cope with",
      "account for",
      "rule out",
      "rely on",
      "dispose of"
    ],
    "correctAnswer": "cope with",
    "meaningTr": "başa çıkmak, üstesinden gelmek, göğüs germek",
    "explanation": "Belediye hizmetleri deprem sonrası gelen yoğun göç dalgasıyla başa çıkmakta / göğüs germekte zorlanmaktadır (struggling to cope with).",
    "synonyms": [
      "handle",
      "deal with",
      "tackle",
      "overcome"
    ],
    "collocation": "cope with problems / stress / influx",
    "optionsBreakdown": {
      "cope with": {
        "word": "cope with",
        "meaning": "başa çıkmak, üstesinden gelmek",
        "mnemonic": "💡 ÇAĞRIŞIM: \"KOP (Cope)\" gel diyerek zorluğun üstesinden geldi, başa çıktı.",
        "rootAnalysis": "🔬 Altın Eşdeğer: Deal with / Handle."
      },
      "account for": {
        "word": "account for",
        "meaning": "oluşturmak, tekabül etmek (% / oran)",
        "mnemonic": "💡 ÇAĞRIŞIM: Muhasebe (account) tutarken oranların hesabını vermek.",
        "rootAnalysis": "🔬 YDS İpucu: Rakam veya yüzde varsa doğru cevaptır."
      },
      "rule out": {
        "word": "rule out",
        "meaning": "elemek, ihtimal dışı bırakmak",
        "mnemonic": "💡 ÇAĞRIŞIM: Kural dışına (OUT) itip olasılığı yok saymak.",
        "rootAnalysis": "🔬 Eşdeğer: Exclude, dismiss."
      },
      "rely on": {
        "word": "rely on",
        "meaning": "güvenmek, bel bağlamak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"Rely ON / Depend ON\". Birinin omzuna dayanmak.",
        "rootAnalysis": "🔬 Eşdeğer: Trust, depend on."
      },
      "dispose of": {
        "word": "dispose of",
        "meaning": "elden çıkarmak, imha etmek, kurtulmak",
        "mnemonic": "💡 ÇAĞRIŞIM: 'DİS-POZET' -> Çöp poşetine koyup DISPOSE OF yaptı (elden çıkardı, attı).",
        "rootAnalysis": "🔬 YDS Notu: 'Get rid of' eşanlamlısıdır; özellikle atıkların imhası metinlerinde 'dispose of waste' kalıbı standarttır."
      }
    }
  },
  {
    "id": "vq28",
    "category": "phrasal_verb",
    "targetWordId": "w285",
    "targetWord": "stem from",
    "type": "phrasal_verb",
    "sentence": "Most sociological conflicts in developing megacities _____ deep-rooted wealth inequality and inadequate access to public services.",
    "options": [
      "stem from",
      "result in",
      "lead to",
      "call for",
      "make up for"
    ],
    "correctAnswer": "stem from",
    "meaningTr": "-den kaynaklanmak, -den ileri gelmek",
    "explanation": "Sosyolojik çatışmalar derinleşen eşitsizliğe yol açmaz; o eşitsizlikten beslenir ve ondan kaynaklanır (stem from). Boşluktan sonra \"sebep\" gelmektedir!",
    "synonyms": [
      "originate from",
      "arise from",
      "derive from"
    ],
    "collocation": "stem from + Sebep",
    "optionsBreakdown": {
      "stem from": {
        "word": "stem from",
        "meaning": "-den kaynaklanmak, köken almak",
        "mnemonic": "💡 ÇAĞRIŞIM: \"STEM (bitki gövdesi/sapı)\". Ağacın kökünden/sapından çıkıp gelmek.",
        "rootAnalysis": "🔬 YDS DİKKAT: Result in (yol açar), Stem from (kaynaklanır). Yönleri tam terstir!"
      },
      "result in": {
        "word": "result in",
        "meaning": "ile sonuçlanmak, yol açmak",
        "mnemonic": "💡 KURAL: Arkasından sonuç ister (Action -> Result in -> Catastrophe).",
        "rootAnalysis": "🔬 Eşdeğer: Lead to, cause."
      },
      "lead to": {
        "word": "lead to",
        "meaning": "yol açmak, sebep olmak",
        "mnemonic": "💡 KURAL: Liderlik edip o sonuca götürmek.",
        "rootAnalysis": "🔬 Sebep -> Sonuç."
      },
      "call for": {
        "word": "call for",
        "meaning": "çağrıda bulunmak, talep etmek",
        "mnemonic": "💡 ÇAĞRIŞIM: Mikrofonla acil eylem çağrısı yapmak.",
        "rootAnalysis": "🔬 Eşdeğer: Demand, urge."
      },
      "make up for": {
        "word": "make up for",
        "meaning": "telafi etmek, açığı kapatmak, bedelini ödemek",
        "mnemonic": "💡 ÇAĞRIŞIM: 'MAKE UP (makyaj / düzeltmek)' -> Eksik ve kusurlu olan yeri kapatıp düzeltmek, aradaki açığı telafi etmek (make up for).",
        "rootAnalysis": "🔬 YDS Notu: ÖSYM phrasal verb sorularının efsanesidir: 'make up for' = 'compensate for' = 'offset'. Kaçırılmaması gereken bir kelimedir!"
      }
    }
  }
];

// Options are reordered per question so the target word is not always the first choice.
export const YDS_VOCAB_QUIZ_QUESTIONS: VocabQuizQuestion[] = RAW_YDS_VOCAB_QUIZ_QUESTIONS.map((q) => ({
  ...q,
  options: shuffleArrayStable(q.options, q.id)
}));
