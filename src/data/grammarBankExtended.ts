import { GrammarDrillQuestion } from '../types';

export const EXTENDED_GRAMMAR_BANK: GrammarDrillQuestion[] = [
  // =========================================================================
  // 1. TENSES & TIME CLAUSES (EK ZAMAN & ZAMAN BAĞLAÇLARI - 15 SORU)
  // =========================================================================
  {
    id: 'g_t7_b',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Future Perfect (By + Gelecek Zaman -> Will Have V3)',
    question: 'By the year 2040, aerospace engineers estimate that commercially viable fusion propulsion systems _____ interplanetary transit durations to Mars by more than half.',
    options: {
      A: 'will have reduced',
      B: 'have reduced',
      C: 'would reduce',
      D: 'had reduced',
      E: 'will be reducing'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'By + Gelecek Zaman İfadesi -> Future Perfect (will have V3) Formülü',
    trapWarning: 'B şıkkında "have reduced" şimdiki bitmiş zaman verir; oysa 2040 gelecekte bir tarihtir!',
    explanation: '🎯 FORMÜL: "By + Gelecek Tarih (by 2040, by the end of this century)", o tarihe kadar tamamlanmış olacak eylemleri anlatmak için daima "Will have V3" (Future Perfect) gerektirir. Doğru cevap A.'
  },
  {
    id: 'g_t8_b',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'No Sooner ... Than (Geçmiş Zaman Sıralaması & Devriklik)',
    question: 'No sooner _____ the archeological expedition team unearthed the royal sarcophagus _____ an unforeseen torrential storm triggered severe subterranean flooding.',
    options: {
      A: 'had / than',
      B: 'did / when',
      C: 'have / before',
      D: 'were / that',
      E: 'had / then'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'No sooner + Had S V3 ... THAN Kalıbı',
    trapWarning: 'B şıkkında "did / when" ve E şıkkında "then" çeldiricileri vardır. No sooner daima THAN ile eşleşir!',
    explanation: '🎯 FORMÜL: "No sooner had + S + V3 ... than + Past Simple (V2)" (Tam lahit gün yüzüne çıkarılmıştı ki sel bastı). No sooner cümle başında devrik "had team unearthed" alır ve bağlacı daima "than"dir. Doğru cevap A.'
  },
  {
    id: 'g_t9',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Hardly / Scarcely ... When (Tam Olmuştu ki...)',
    question: 'Hardly _____ the central bank announced the currency devaluation _____ speculative panics erupted across domestic commodity exchanges.',
    options: {
      A: 'had / when',
      B: 'did / than',
      C: 'has / while',
      D: 'was / after',
      E: 'had / that'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Hardly / Scarcely + Had S V3 ... WHEN Kalıbı',
    trapWarning: 'No sooner -> than ile kullanılırken, Hardly / Scarcely daima -> WHEN ile kullanılır!',
    explanation: '🎯 ÖSYM KODU: "Hardly + had S V3 ... when + V2" (Merkez bankası devalüasyonu tam duyurmuştu ki panik patlak verdi). Doğru cevap A.'
  },
  {
    id: 'g_t10',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Until vs By (Süreç vs Bitiş Noktası)',
    question: 'Medieval alchemists persistently boiled volatile mercury compounds _____ they realized that the toxic vapors were causing permanent neurological deterioration.',
    options: {
      A: 'until',
      B: 'by the time',
      C: 'as soon as',
      D: 'during',
      E: 'unless'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Eylemin Bir Noktaya Kadar Devam Etmesi: UNTIL + Cümle',
    trapWarning: 'B şıkkındaki "by the time" bitiş gerektirir; "boiled until they realized" (fark edene kadar kaynattılar) eylemin süresini belirtir.',
    explanation: '🎯 BAĞLAÇ ANLAMI: "until they realized" (-e kadar). Simyacılar buharların zehirli olduğunu fark edene kadar kaynatmaya devam ettiler. Doğru cevap A.'
  },
  {
    id: 'g_t11',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'For the last / past decade (Present Perfect Continuous)',
    question: 'For the past three decades, glaciologists _____ satellite telemetry to monitor how the Greenland ice sheet _____ mass at an accelerating tempo.',
    options: {
      A: 'have been utilizing / has been losing',
      B: 'utilized / lost',
      C: 'had utilized / was losing',
      D: 'utilize / will lose',
      E: 'are utilizing / had lost'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'For the past / last + Süre -> Present Perfect / Present Perfect Continuous',
    trapWarning: 'Geçmiş 30 yıl boyunca başlayıp halen devam ettiği için Simple Past (B) elenir.',
    explanation: '🎯 FORMÜL: "For the past / last three decades" ifadesi günümüzle bağlantılı devam eden bir süreçtir. Gladyologlar 30 yıldır kullanmaktadır (have been utilizing) ve buzul kütle kaybetmektedir (has been losing). Doğru cevap A.'
  },
  {
    id: 'g_t12',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'As soon as / The moment (Anında Gerçekleşen Eylemler)',
    question: 'The immune system initiates a cascade of inflammatory cytokines the moment pathogenic antigens _____ the mucosal vascular barrier.',
    options: {
      A: 'penetrate',
      B: 'will penetrate',
      C: 'penetrated',
      D: 'had penetrated',
      E: 'would penetrate'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Zaman Bağlaçlarında Zaman Uyumu (Present -> Present)',
    trapWarning: 'Zaman bağlaçlarının (the moment, when, as soon as) yanındaki cümleciğe asla "will / would" gelmez! (B ve E elenir).',
    explanation: '🎯 KURAL: "The moment + Present Simple (penetrate), Ana Cümle: Present Simple (initiates)". Biyolojik genel doğrular daima Present Simple ile kurulur. Doğru cevap A.'
  },
  {
    id: 'g_t13',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Prior to / Before + V-ing (Zaman Sıralaması)',
    question: 'Prior to _____ the historic peace accord in 1998, delegate diplomats _____ intense backchannel negotiations for nearly eighteen months.',
    options: {
      A: 'signing / had conducted',
      B: 'signed / were conducting',
      C: 'having signed / conducted',
      D: 'to sign / have conducted',
      E: 'sign / had been conducting'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Prior to (Edat) + V-ing , Past Perfect (Had conducted)',
    trapWarning: '"Prior to" bir edattır (preposition); edatlardan sonra fiil -ing (signing) alır. Anlaşmayı imzalamadan önce 18 aydır müzakere yürütmüşlerdi (Past Perfect).',
    explanation: '🎯 FORMÜL: "Prior to + V-ing (signing), [Geçmişin geçmişi: had conducted]". Doğru cevap A.'
  },
  {
    id: 'g_t14',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'While / Whereas (Zaman vs Karşılaştırma Uyumu)',
    question: 'While deep subterranean aquifers _____ thousands of years to recharge, modern industrial agriculture _____ them in just a few decades.',
    options: {
      A: 'require / is depleting',
      B: 'required / had depleted',
      C: 'will require / depletes',
      D: 'have required / depleted',
      E: 'were requiring / would deplete'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Zıtlık/Zaman Bağlacında Genel Gerçeklik Uyumu (Present / Present Continuous)',
    trapWarning: 'Akiferlerin binlerce yıl istemesi doğa kanunudur (require); sanayi tarımının tüketmesi güncel olaydır (is depleting).',
    explanation: '🎯 ÇÖZÜM: Yeraltı su kaynaklarının dolması binlerce yıl gerektirirken (require), modern tarım onları onlarca yılda tüketmektedir (is depleting). Doğru cevap A.'
  },

  // =========================================================================
  // 2. CONJUNCTIONS & TRANSITIONS (EK BAĞLAÇLAR & GEÇİŞ İFADELERİ - 20 SORU)
  // =========================================================================
  {
    id: 'g_c7_b',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Although vs In spite of (Cümle vs İsim Ayrımı)',
    question: '_____ the severe diplomatic sanctions imposed by the international community, the authoritarian regime refused to dismantle its illicit uranium enrichment facilities.',
    options: {
      A: 'In spite of',
      B: 'Although',
      C: 'Even though',
      D: 'Whereas',
      E: 'Much as'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'İsim Öbeği Öncesi Zıtlık: In spite of / Despite + Noun Phrase',
    trapWarning: 'B ve C şıklarındaki "Although / Even though" tam cümle (S + V + O) ister; boşluktan sonra fiil yoktur, sadece isim tamlaması ("the severe sanctions...") vardır!',
    explanation: '🎯 KURAL: Virgüle kadar olan kısımda yüklem (fiil) var mı? Yok! Sadece isim tamlaması var. Dolayısıyla "In spite of" veya "Despite" gelmek zorundadır. Doğru cevap A.'
  },
  {
    id: 'g_c8_b',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'However / Nevertheless (Noktalı Virgül & Virgül Uyumu)',
    question: 'Renewable solar panels have become significantly more cost-effective over the past decade; _____, widespread adoption remains hindered by inadequate battery storage infrastructure.',
    options: {
      A: 'nevertheless',
      B: 'moreover',
      C: 'consequently',
      D: 'likewise',
      E: 'inasmuch as'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: '; nevertheless , / ; however , Zıtlık Geçiş Zarfı',
    trapWarning: 'İlk cümle olumlu (+ maliyet düştü), ikinci cümle olumsuz (- batarya yetersiz). Zıtlık gerekir. C şıkkındaki consequently sonuç bildirir, elenir.',
    explanation: '🎯 NOKTALAMA & ANLAM: Noktalı virgül (;) ve virgülden (,) sonra gelen zıtlık zarfı "nevertheless" (yine de, buna rağmen) kullanılır. Doğru cevap A.'
  },
  {
    id: 'g_c9',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Given that / Inasmuch as (Sebep Bağlacı = Mademki / -dığı için)',
    question: '_____ global demand for rare earth minerals is projected to quadruple, mining corporations are expanding prospecting expeditions into deep abyssal seabeds.',
    options: {
      A: 'Given that',
      B: 'Even if',
      C: 'Unless',
      D: 'Although',
      E: 'Regardless of'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Given that = -dığı dikkate alınırsa / -dığı için (Sebep-Sonuç)',
    trapWarning: 'Talep 4 katına çıkacak (+) bu yüzden madenciler denize açılıyor (+). İki taraf da aynı yönde; zıtlık bağlaçları (B, C, D, E) elenir.',
    explanation: '🎯 FORMÜL: "Given that + Cümle" = "Considering that / Because". Nadir element talebinin 4 katına çıkacağı göz önüne alındığında, şirketler denize açılmaktadır. Doğru cevap A.'
  },
  {
    id: 'g_c10',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'In case (Tedbir / Ne Olur Ne Olmaz Diye)',
    question: 'Space exploration vessels carry multiple redundant atmospheric filtration units _____ primary mechanical pumps suffer unexpected orbital debris strikes.',
    options: {
      A: 'in case',
      B: 'so that',
      C: 'as though',
      D: 'in order that',
      E: 'provided that'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'In case + Olası Risk / İhtimal = ... olursa diye tedbir alma',
    trapWarning: '"so that" amaç bildirir (-ebilsin diye); "in case" ise olası bir riske karşı önceden yedek önlem almayı anlatır.',
    explanation: '🎯 TEDBİR BAĞLACI: Uzay araçları yedek filtre üniteleri taşır; ne olur ne olmaz, ana pompalar enkaz çarpmasına maruz kalırsa diye (in case). Doğru cevap A.'
  },
  {
    id: 'g_c11',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Lest / For fear that (-mesin diye / Korkusuyla)',
    question: 'The central bank maintained elevated interest rates throughout the economic recovery _____ inflation expectations become unanchored among private consumers.',
    options: {
      A: 'lest',
      B: 'whereas',
      C: 'as long as',
      D: 'in spite of',
      E: 'unless'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Lest / For fear that + (should) V1 = -mesin / -korkusuyla',
    trapWarning: 'Lest arkasından olumlu cümle alır fakat anlamı olumsuzdur ("enflasyon kontrolden çıkmasın diye"). Not kelimesi almaz.',
    explanation: '🎯 AKADEMİK BAĞLAÇ: "lest + S + (should) V1" = -olmasın diye. Enflasyon beklentileri çıpasını kaybetmesin korkusuyla faizler yüksek tutuldu. Doğru cevap A.'
  },
  {
    id: 'g_c12',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'So ... that / Such ... that (Öyle ... ki)',
    question: 'The gravitational pull of a supermassive black hole is _____ intense _____ even electromagnetic radiation photons cannot escape its event horizon.',
    options: {
      A: 'so / that',
      B: 'such / that',
      C: 'too / to',
      D: 'as / as',
      E: 'either / or'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'So + Sıfat (intense) + THAT + Tam Cümle',
    trapWarning: 'B şıkkındaki "such ... that" olabilmesi için sıfatın yanında isim tamlaması ("such an intense pull that...") olması gerekirdi.',
    explanation: '🎯 FORMÜL: "So + Sıfat/Zarf + that" (Öylesine yoğun ki, fotonlar bile kaçamaz). "Intense" tek başına bir sıfat olduğu için "So ... that" doğru cevaptır. Doğru cevap A.'
  },
  {
    id: 'g_c13',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Much as (Zıtlık Bağlacı = Her ne kadar ... ise de)',
    question: '_____ theoretical physicists admire the mathematical elegance of string theory, empirical verification remains entirely beyond current experimental reach.',
    options: {
      A: 'Much as',
      B: 'In order that',
      C: 'Providing',
      D: 'As long as',
      E: 'Consequently'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Much as + Cümle = Although / Even though (Her ne kadar... hayran olsalar da)',
    trapWarning: '"Much as" kalıbı YDS\'de doğrudan "Although" gibi zıtlık bağlacı olarak doğru cevap çıkar.',
    explanation: '🎯 ÖSYM SÜRPRİZ BAĞLACI: "Much as theoretical physicists admire..." = Fizikçiler sicim teorisinin zarafetine her ne kadar hayran olsalar da, kanıtlanamamaktadır. Doğru cevap A.'
  },
  {
    id: 'g_c14',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'On the grounds that (Gerekçesiyle / -dığı iddiasıyla)',
    question: 'The pharmaceutical regulatory agency suspended the phase-three trial on the grounds _____ preliminary toxicity biomarkers were detected in liver tissue samples.',
    options: {
      A: 'that',
      B: 'which',
      C: 'whether',
      D: 'whose',
      E: 'how'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'On the grounds THAT + Cümle (Gerekçesiyle)',
    trapWarning: 'Grounds kelimesini mekan sanıp "where" veya "which" seçmeyin; "on the grounds that" ayrılmaz bir kalıptır.',
    explanation: '🎯 HUKUK & BİLİM KALIBI: "on the grounds that..." = -dığı gerekçesiyle / sebebiyle. Karaciğer dokusunda toksisite tespit edildiği gerekçesiyle deneme durduruldu. Doğru cevap A.'
  },

  // =========================================================================
  // 3. PREPOSITIONS & PHRASAL VERBS (EK EDATLAR & EDAT KOMBİNASYONLARI - 20 SORU)
  // =========================================================================
  {
    id: 'g_p7_b',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Prone to / Deficient in',
    question: 'Populations residing in high-altitude desert plateaus are particularly prone _____ respiratory irritation because the arid atmosphere is deficient _____ humidity.',
    options: {
      A: 'to / in',
      B: 'for / of',
      C: 'with / by',
      D: 'at / from',
      E: 'towards / with'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'prone TO + deficient IN Formülü',
    trapWarning: '"deficient of" değil "deficient in" (nem bakımından eksik) ve "prone to" (tahrişe yatkın).',
    explanation: '🎯 EŞLEŞTİRME: "prone to" (kötü bir şeye yatkın olmak) ve "deficient in" (bir şey bakımından eksik olmak). Doğru cevap A (to / in).'
  },
  {
    id: 'g_p8',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Susceptible to / Immune to',
    question: 'While genetically modified grain cultivars are engineered to be immune _____ common agricultural blights, they may remain susceptible _____ severe drought stress.',
    options: {
      A: 'to / to',
      B: 'from / for',
      C: 'against / with',
      D: 'of / towards',
      E: 'with / by'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'immune TO + susceptible TO Kalıbı',
    trapWarning: 'Türkçedeki "hastalıklardan muaf/bağışık" çevirisi "from" tuzağına çeker; ancak "immune" ve "susceptible" her ikisi de TO alır!',
    explanation: '🎯 TIP & BİYOLOJİ ÇİFTİ: "immune to diseases" (hastalıklara bağışık) ve "susceptible to drought" (kuraklığa karşı hassas). Her iki kelime de "to" edatıyla bağlanır. Doğru cevap A (to / to).'
  },
  {
    id: 'g_p9',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Stem from / Result in',
    question: 'Most sociopolitical unrest across the sub-Saharan belt stems _____ unresolved resource scarcity, which frequently results _____ regional military conflicts.',
    options: {
      A: 'from / in',
      B: 'of / to',
      C: 'out / for',
      D: 'by / with',
      E: 'in / from'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'stem FROM (kaynaklanmak) & result IN (yol açmak)',
    trapWarning: 'E şıkkındaki "in / from" tam tersidir! Sebep -> sonuç için "result in", sonuç -> sebep için "stem from".',
    explanation: '🎯 SEBEP-SONUÇ DÖNGÜSÜ: "stems from scarcity" (kıtlıktan kaynaklanır) ve "results in conflicts" (çatışmalara yol açar). Doğru cevap A (from / in).'
  },
  {
    id: 'g_p10',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Coincide with / Substitute for',
    question: 'The volcanic eruption coincided _____ a major tidal surge, forcing civil authorities to substitute maritime evacuation routes _____ severed highway passages.',
    options: {
      A: 'with / for',
      B: 'to / by',
      C: 'at / with',
      D: 'in / from',
      E: 'of / towards'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'coincide WITH + substitute X FOR Y Formülü',
    trapWarning: 'Substitute X for Y = X\'i Y\'nin yerine kullanmak / ikame etmek.',
    explanation: '🎯 EDAT FORMÜLÜ: Patlama gelgitle aynı zamana denk geldi (coincided with) ve yetkililer deniz rotalarını karayolunun yerine koydu (substitute for). Doğru cevap A (with / for).'
  },
  {
    id: 'g_p11',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Account for / Rely on',
    question: 'Hydropower dams account _____ more than forty percent of national electricity, but they rely heavily _____ seasonal glacial meltwaters.',
    options: {
      A: 'for / on',
      B: 'to / in',
      C: 'of / with',
      D: 'by / upon',
      E: 'in / about'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'account FOR (oran oluşturmak) + rely ON (bağımlı olmak)',
    trapWarning: 'Yüzde veya oran görünce doğrudan "account for" refleksini çalıştırın!',
    explanation: '🎯 FORMÜL: "account for 40%" (yüzde 40\'ını oluşturur) ve "rely on meltwaters" (eriyen buzul sularına güvenir/dayanır). Doğru cevap A (for / on).'
  },
  {
    id: 'g_p12',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Dispose of / Deprive of',
    question: 'Failing to properly dispose _____ hazardous industrial effluents deprives downstream agricultural communities _____ potable groundwater supplies.',
    options: {
      A: 'of / of',
      B: 'off / from',
      C: 'with / to',
      D: 'away / with',
      E: 'out / for'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'dispose OF + deprive OF Çifti',
    trapWarning: 'Dispose tek f ile "of" alır; deprive da daima "of" alır.',
    explanation: '🎯 ÇİFTE "OF" TESTİ: "dispose of effluents" (atıkları imha etmek/elden çıkarmak) ve "deprive communities of groundwater" (toplulukları yeraltı suyundan mahrum bırakmak). Doğru cevap A (of / of).'
  },

  // =========================================================================
  // 4. REDUCTIONS & PARTICIPLES (EK SADELEŞTİRMELER - 15 SORU)
  // =========================================================================
  {
    id: 'g_r7',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Having V3 (Öncelik Bildiren Aktif Sadeleştirme)',
    question: '_____ several decades deciphering enigmatic Mayan hieroglyphic codices, epigraphers finally unlocked the dynastic genealogies of Copán.',
    options: {
      A: 'Having spent',
      B: 'Spent',
      C: 'Being spent',
      D: 'To have spent',
      E: 'Having been spent'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Having + V3 = Öncelik Bildiren Etken (Aktif) Zaman Sadeleştirmesi',
    trapWarning: 'Epigrafistler (epigraphers) zamanı "harcamıştır" (etken). Dolayısıyla B, C ve E şıklarındaki edilgen (passive) yapılar elenir.',
    explanation: '🎯 AKTİF ÖNCELİK FORMÜLÜ: "Having spent several decades..." = Onlarca yıl harcadıktan sonra (önce harcadılar, sonra şifreyi çözdüler). Eylemi yapan epigrafistler olduğu için aktif "Having spent" kullanılır. Doğru cevap A.'
  },
  {
    id: 'g_r8',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'V3 Passive Reduction (Edilgen Sıfat-Fiil Sadeleştirmesi)',
    question: 'Metals _____ to prolonged cryogenic temperatures undergo profound molecular restructuring, often exhibiting zero electrical resistance.',
    options: {
      A: 'subjected',
      B: 'subjecting',
      C: 'having subjected',
      D: 'to subject',
      E: 'to be subjecting'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'İsim + V3 (Passive Reduction: which are subjected -> subjected)',
    trapWarning: 'Metaller kendi kendini dondurucu sıcaklığa maruz bırakmaz; maruz bırakılır (passive: which are subjected to -> subjected to).',
    explanation: '🎯 EDİLGEN SADELEŞTİRME: "Metals [which are] subjected to cryogenic temperatures..." (kriyojenik sıcaklıklara maruz bırakılan metaller). Doğru cevap A.'
  },
  {
    id: 'g_r9',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'The first / only + TO V1 (Sıra Sayısı Sadeleştirmesi)',
    question: 'Marie Curie remains the only female scientist in Nobel history _____ two separate prizes in two distinct scientific disciplines.',
    options: {
      A: 'to receive',
      B: 'receiving',
      C: 'received',
      D: 'having received',
      E: 'being received'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'The only / The first / The best + TO V1 Kalıbı',
    trapWarning: 'The first, the second, the only, the last gibi ifadelerden sonra kısaltma DAİMA "to infinitive" (to receive) ile yapılır!',
    explanation: '🎯 DEMİRBAŞ ÖSYM KURALI: "the only scientist to receive" (ödül alan tek bilim insanı). Sıra sayıları ve "the only" ifadelerinden sonra V-ing değil "To V1" gelir. Doğru cevap A.'
  },
  {
    id: 'g_r10',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Having been V3 (Öncelikli Edilgen Sadeleştirme)',
    question: '_____ by severe flash floods three consecutive times, the ancient Mesopotamian riverbank fortress was permanently abandoned by its garrison.',
    options: {
      A: 'Having been inundated',
      B: 'Having inundated',
      C: 'Inundating',
      D: 'To inundate',
      E: 'To be inundated'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Having been V3 = Geçmişte Önceden Meydana Gelen Edilgen Durum',
    trapWarning: 'Kale sular altında bıraktı mı, bırakıldı mı? "By flash floods" ipucu eylemin edilgen (passive) olduğunu kanıtlar.',
    explanation: '🎯 ÖNCELİKLİ EDİLGEN FORMÜL: "Having been inundated three times, the fortress was abandoned" (Üç kez sular altında bırakıldıktan sonra kale terk edildi). Doğru cevap A.'
  },

  // =========================================================================
  // 5. MODALS & PAST DEDUCTIONS (EK MODAL SORULARI - 15 SORU)
  // =========================================================================
  {
    id: 'g_m7',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Must have V3 vs Can\'t have V3 (Geçmiş Çıkarım)',
    question: 'Given that the ancient vault was sealed with intact wax stamps from the Pharaoh\'s court, grave robbers _____ entered the chamber before modern archeologists.',
    options: {
      A: 'cannot have',
      B: 'must have',
      C: 'should have',
      D: 'might have',
      E: 'would have'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Cannot have V3 / Can\'t have V3 = Geçmişe Yönelik Kesin Olumsuz Çıkarım (Girmiş Olamaz)',
    trapWarning: 'Mühürler bozulmamış halde (intact) duruyorsa, soyguncuların girmiş olması imkansızdır!',
    explanation: '🎯 GEÇMİŞ KESİN İMKANSIZLIK: "cannot have entered" (girmiş olamazlar, çünkü balmumu mühürler hiç bozulmamıştı). Doğru cevap A.'
  },
  {
    id: 'g_m8',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Could have V3 (Yapabilirdi ama Yapmadı)',
    question: 'With the technological breakthroughs available at the turn of the century, electric automobiles _____ widespread adoption decades earlier, but patent suppressions halted progress.',
    options: {
      A: 'could have achieved',
      B: 'must have achieved',
      C: 'should achieve',
      D: 'would rather achieve',
      E: 'had better achieve'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Could have V3 = Geçmişte Bir Şeyi Yapabilirdi / Başarabilirdi (ama yapamadı/olmadı)',
    trapWarning: '"patent suppressions halted progress" (patent baskıları ilerlemeyi durdurdu) cümlesi, eylemin potansiyel olarak mümkün olduğunu ama gerçekleşmediğini gösterir.',
    explanation: '🎯 KAÇIRILAN FIRSAT MODAL\'I: "could have achieved decades earlier" (onlarca yıl önce yaygınlaşabilirdi ama engellendi). Doğru cevap A.'
  },
  {
    id: 'g_m9',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Should have V3 (Geçmiş Eleştiri / Pişmanlık)',
    question: 'Civil structural auditors warned that maritime bridge engineers _____ reinforced corrosion-resistant alloy girders instead of standard carbon rebar.',
    options: {
      A: 'should have utilized',
      B: 'must utilize',
      C: 'need utilize',
      D: 'used to utilize',
      E: 'would rather have utilized'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Should have V3 = Kullanmalıydılar (ama kullanmadılar - Eleştiri)',
    trapWarning: 'Mühendisler standart demir kullandı, denetçiler ise korozyona dayanıklı alaşım kullanmalıydılar diye eleştiriyor.',
    explanation: '🎯 GEÇMİŞ ELEŞTİRİ FORMÜLÜ: "should have utilized" (kullanmalıydılar ama yapmadılar). Doğru cevap A.'
  },

  // =========================================================================
  // 6. RELATIVE & NOUN CLAUSES (EK İLGİ & İSİM CÜMLECİKLERİ - 15 SORU)
  // =========================================================================
  {
    id: 'g_cl5',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'Preposition + Which (in which / through which)',
    question: 'Quantum computing represents an entirely unprecedented computational paradigm _____ information is processed using subatomic probabilistic superposition states.',
    options: {
      A: 'in which',
      B: 'whose',
      C: 'whom',
      D: 'of which',
      E: 'which'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'in which = where (içinde bilginin işlendiği bir paradigma)',
    trapWarning: 'Boşluktan sonra tam cümle (S + V + O: information is processed) gelmektedir; dolayısıyla yalın "which" nesne/özne eksik olmadığı için elenir!',
    explanation: '🎯 EDAT + WHICH FORMÜLÜ: "paradigm in which information is processed" (içinde bilginin kuantum durumlarıyla işlendiği paradigma). Doğru cevap A.'
  },
  {
    id: 'g_cl6',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'Quantifier + of which / of whom (most of which / all of whom)',
    question: 'The deep-sea submersible collected thirty-five previously undocumented benthic specimens, _____ exhibited complete biological bioluminescence.',
    options: {
      A: 'most of which',
      B: 'most of whom',
      C: 'that',
      D: 'whose',
      E: 'where'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Quantifier (most / all / some) + OF WHICH (Cansız/Hayvan)',
    trapWarning: 'B şıkkındaki "whom" insanlar için kullanılır; deniz canlıları (specimens) için "which" kullanılır. Virgülle ayrıldığı için "that" (C) asla gelemez!',
    explanation: '🎯 ÖSYM KLASİĞİ: Virgülden sonra miktar ifadesi (most of) varsa insan dışı varlıklar için "most of which", insanlar için "most of whom" gelir. Doğru cevap A.'
  },
  {
    id: 'g_cl7',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'Whose + İsim (Aitlik / İyelik Bağıntısı)',
    question: 'Astronomers recently detected an exoplanet _____ orbital equilibrium is gravitationally stabilized by three surrounding red dwarf stars.',
    options: {
      A: 'whose',
      B: 'which',
      C: 'where',
      D: 'that',
      E: 'whom'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Whose + Yalın İsim (orbital equilibrium = yörünge dengesi)',
    trapWarning: 'Boşluğun hemen sağındaki kelimeye bakın: "orbital equilibrium" başında the/a/an olmayan bir isimdir. Gezegenin yörüngesi kastedildiği için "whose" gelir.',
    explanation: '🎯 AİTLİK BAĞLACI: "an exoplanet whose orbital equilibrium is stabilized" (yörünge dengesi stabilize edilmiş olan ötegezegen). Doğru cevap A.'
  },

  // =========================================================================
  // 7. INVERSION & CONDITIONALS (EK DEVRİK CÜMLELER & KOŞULLAR - 15 SORU)
  // =========================================================================
  {
    id: 'g_inv5',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Not only ... but also (Devrik Başlangıç)',
    question: 'Not only _____ the atmospheric greenhouse effect insulate our planet from freezing temperatures, but it _____ the water cycle across continents.',
    options: {
      A: 'does / also sustains',
      B: 'is / sustained',
      C: 'did / has sustained',
      D: 'will / was sustaining',
      E: 'can / had sustained'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Not only + Yardımcı Fiil + Özne (Devriklik: Does the effect insulate) ... BUT ALSO',
    trapWarning: 'Cümle "Not only" ile başlıyorsa soru cümlesi gibi devrik yapılır ("does the effect insulate"). Genel gerçeklik olduğu için Present Simple (A) seçilir.',
    explanation: '🎯 DEVRİKLİK KURALI: "Not only does the effect insulate ..., but it also sustains..." (Sera etkisi sadece dünyayı yalıtmakla kalmaz, su döngüsünü de sürdürür). Doğru cevap A.'
  },
  {
    id: 'g_inv6',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Had it not been for (Type 3 Devrik If = If it had not been for)',
    question: '_____ the swift deployment of deep-sea containment booms, the offshore oil spill _____ irreparable toxicity across the marine sanctuary.',
    options: {
      A: 'Had it not been for / would have caused',
      B: 'Were it not for / will cause',
      C: 'Should it be / had caused',
      D: 'If it were not / caused',
      E: 'Unless there was / would cause'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Had it not been for + İsim , would have V3 (Type 3 Devrik Geçmiş Şart)',
    trapWarning: 'Geçmişte yaşanmış bir petrol sızıntısı ve kurtarma operasyonu anlatılıyor. Type 3 geçmiş hipotezdir: "Had it not been for ... would have caused".',
    explanation: '🎯 GEÇMİŞ DEVRİK ŞART: "Had it not been for [İsim], S + would have V3" (Eğer bariyerler hızlıca konuşlandırılmamış olsaydı, sızıntı onarılamaz toksisiteye yol açmış olacaktı). Doğru cevap A.'
  },
  {
    id: 'g_inv7',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Mixed Conditionals (Type 3 Geçmiş Sebep -> Type 2 Şimdiki Sonuç)',
    question: 'If the theoretical physicist _____ the groundbreaking mathematical formulation thirty years ago, our laboratory _____ the dark matter detector today.',
    options: {
      A: 'had not published / would not be operating',
      B: 'did not publish / will not operate',
      C: 'would not publish / was not operating',
      D: 'has not published / had not operated',
      E: 'does not publish / would not operate'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Mixed Conditional: Past Cause (thirty years ago -> had V3) -> Present Result (today -> would V1 / would be V-ing)',
    trapWarning: 'Zaman ipuçlarına dikkat: "thirty years ago" (geçmiş) ve "today" (bugün). Geçmişteki eylemin bugünkü sonucu!',
    explanation: '🎯 MIXED CONDITIONAL FORMÜLÜ: "If + had V3 (30 yıl önce yayımlamamış olsaydı), S + would be V-ing (bugün çalıştırıyor olmazdık)". Doğru cevap A.'
  },
  {
    id: 'g_inv8',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Only after (Cümle Başı Devriklik)',
    question: 'Only after the regulatory board _____ the forensic accounting audit _____ the public prosecutor issue formal subpoenas for the corporate executives.',
    options: {
      A: 'concluded / did',
      B: 'had concluded / has',
      C: 'concludes / will have',
      D: 'would conclude / had',
      E: 'concluding / was'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Only after + S + V2 ... DİD + S + V1 (Ana Cümlede Devriklik)',
    trapWarning: '"Only after / Only when" cümleciği normal düzende kalır; devriklik ANA CÜMLEDE (did the prosecutor issue) gerçekleşir!',
    explanation: '🎯 ÖSYM TUZAĞI: "Only after [cümlecik: board concluded], [devrik ana cümle: did the prosecutor issue...]". Doğru cevap A.'
  },
  // =========================================================================
  // TENSES & TIME CLAUSES (DEVAM - 9 SORU)
  // =========================================================================
  {
    id: 'g_t11_b',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Past Simple vs Present Perfect (Zaman Belirteci Ayrımı)',
    question: 'Although archaeologists _____ the ancient subterranean aqueduct in 1984, hydrologists _____ its exact flow mechanics only in recent years.',
    options: {
      A: 'discovered / have deciphered',
      B: 'have discovered / deciphered',
      C: 'had discovered / will decipher',
      D: 'were discovering / decipher',
      E: 'discover / had deciphered'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Geçmiş Belirli Tarih (in 1984 -> Past Simple V2) & Yakın Geçmiş (in recent years -> Present Perfect)',
    trapWarning: 'B şıkkında tam tersi verilmiştir; "in 1984" geçmişte net bir tarihtir, ASLA present perfect almaz!',
    explanation: '🎯 FORMÜL: "in 1984" geçmiş belirli zaman zarfıdır (Past Simple: discovered). "in recent years" ise günümüze kadar gelen süreci anlatır (Present Perfect: have deciphered). Doğru cevap A.'
  },
  {
    id: 'g_t12_b',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Until vs By (Süreç vs Son Bitiş Tarihi)',
    question: 'The clinical researchers agreed that patient observations would continue _____ all physiological biomarkers stabilized, whereas the preliminary report had to be delivered _____ Friday.',
    options: {
      A: 'until / by',
      B: 'by / until',
      C: 'since / for',
      D: 'during / on',
      E: 'while / at'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Until (o ana kadar devam eden eylem) vs By (-e kadar tamamlanması gereken son an)',
    trapWarning: 'Until ve By birbirinin en meşhur çeldiricisidir. Until bir sürecin devamını, By ise son teslim vaktini (deadline) belirtir.',
    explanation: '🎯 ÖSYM AYRIMI: Gözlemler biyobelirteçler stabilize olana kadar SÜRECEK (until stabilized); rapor ise Cuma gününe kadar BİTMİŞ/TESLİM EDİLMİŞ olmalıdır (by Friday). Doğru cevap A.'
  },
  {
    id: 'g_t13_b',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Future Continuous (This time next decade / in the future)',
    question: 'By this time next decade, autonomous robotic rovers _____ the Martian subterranean caverns while orbital satellites continuously relay geochemical telemetry.',
    options: {
      A: 'will be surveying',
      B: 'have surveyed',
      C: 'had surveyed',
      D: 'were surveying',
      E: 'would survey'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'By this time next decade -> Gelecekte Devam Eden Eylem (Future Continuous: will be V-ing)',
    trapWarning: '"By this time next..." kalıbı "Gelecek 10 yılın bu zamanlarında yapıyor olacaklar" vurgusu taşır; geçmiş zaman şıkları elenir.',
    explanation: '🎯 ZAMAN FORMÜLÜ: "By this time next year / decade", gelecekte belirli bir anda sürüyor olacak eylemleri bildirir (will be surveying). Doğru cevap A.'
  },
  {
    id: 'g_t14_b',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Once / As soon as (Zaman Uyumu: Present -> Future)',
    question: 'Once the national regulatory commission _____ the environmental impact dossier, construction crews _____ work on the offshore wind farm.',
    options: {
      A: 'approves / will begin',
      B: 'will approve / began',
      C: 'approved / will have begun',
      D: 'has approved / had begun',
      E: 'had approved / begin'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Once / As soon as + Present Simple (V1/Vs) -> Ana Cümle Future Simple (will V1)',
    trapWarning: 'Zaman bağlaçlarının (when, once, as soon as) bulunduğu yan cümleye ASLA "will / would" gelmez (B şıkkı elenir)!',
    explanation: '🎯 ZAMAN BAĞLACI KURALI: "Once + Present Simple (approves), Ana Cümle: Future Simple (will begin)". Komisyon dosyayı onaylar onaylamaz ekipler çalışmaya başlayacak. Doğru cevap A.'
  },
  {
    id: 'g_t15',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Past Perfect Continuous (Had been V-ing for ... before V2)',
    question: 'Geologists realized that the tectonic fault _____ seismic tension for over two centuries before the catastrophic magnitude 7.8 earthquake occurred.',
    options: {
      A: 'had been accumulating',
      B: 'has been accumulating',
      C: 'will have accumulated',
      D: 'is accumulating',
      E: 'accumulates'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'For over two centuries + BEFORE + Past Simple (V2) -> Past Perfect Continuous (had been V-ing)',
    trapWarning: 'Depremin oluşu geçmiştedir (occurred - V2). Ondan önceki 200 yıllık birikim geçmişin de geçmişi (had been accumulating) olmak zorundadır.',
    explanation: '🎯 FORMÜL: "Past Perfect Continuous (Had been V-ing) + for [süre] + BEFORE + Past Simple (occurred)". Geçmişteki bir olaydan önce ne kadar süredir devam ettiğini bildirir. Doğru cevap A.'
  },
  {
    id: 'g_t16',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'This is the first time + Present Perfect',
    question: 'This marks the first time in documented ornithological records that arctic terns _____ their transatlantic migratory route by more than 500 kilometers.',
    options: {
      A: 'have altered',
      B: 'had altered',
      C: 'altered',
      D: 'will alter',
      E: 'were altering'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'It / This is the first time + Present Perfect (have/has V3)',
    trapWarning: 'Cümle "This marks (Geniş Zaman)" ile başlıyor. Bu yüzden Past Perfect (had altered) değil, Present Perfect (have altered) gelir.',
    explanation: '🎯 FORMÜL: "This is / marks the first/second time that S + Present Perfect (have/has V3)". Tarihte ilk kez rotalarını değiştirdiler. Doğru cevap A.'
  },
  {
    id: 'g_t17',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'While / As (Eşzamanlı Geçmiş Devamlı Eylemler)',
    question: 'While astrophysicists _____ the gravitational wave signature, optical telescopes around the world _____ to capture the corresponding gamma-ray burst.',
    options: {
      A: 'were analyzing / were attempting',
      B: 'analyzed / will attempt',
      C: 'have analyzed / attempted',
      D: 'had analyzed / are attempting',
      E: 'are analyzing / had attempted'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'While + Past Continuous (were analyzing) , Past Continuous (were attempting) [Eşzamanlılık]',
    trapWarning: 'Farklı zaman kiplerinin (Past ile Will / Present Perfect) mantıksız eşleştiği B, C ve D şıkları zaman uyumsuzluğundan elenir.',
    explanation: '🎯 ZAMAN UYUMU: Bir tarafta astrofizikçiler dalgaları analiz ederken, aynı anda dünyanın dört bir yanındaki teleskoplar gama ışınını yakalamaya çalışıyordu. Doğru cevap A.'
  },
  {
    id: 'g_t18',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Since then (O zamandan beri -> Present Perfect)',
    question: 'The international moratorium on commercial whaling was ratified in 1986; since then, marine biologists _____ gradual recoveries in certain humpback populations.',
    options: {
      A: 'have observed',
      B: 'had observed',
      C: 'observed',
      D: 'observe',
      E: 'will have observed'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Since then -> Present Perfect (have/has V3)',
    trapWarning: '"Since then (o zamandan beri)" ifadesi geçmişten bugüne gelen süreci işaret eder, Past Simple (observed) ile karıştırılmamalıdır.',
    explanation: '🎯 FORMÜL: "Since then / Ever since then" = o andan günümüze kadar. Ana cümlede daima Present Perfect (have observed) kullanılır. Doğru cevap A.'
  },
  {
    id: 'g_t19',
    type: 'grammar',
    grammarCategory: 'tenses_time_clauses',
    grammarTopicTitle: 'Barely / Scarcely ... When (Tam Olmuştu ki...)',
    question: 'Scarcely _____ the volcanic ash cloud penetrated the lower stratosphere _____ commercial aviation authorities ordered an immediate grounding of all regional flights.',
    options: {
      A: 'had / when',
      B: 'did / than',
      C: 'have / before',
      D: 'was / that',
      E: 'would / as'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Scarcely had + S + V3 ... WHEN + S + V2 Kalıbı',
    trapWarning: 'No sooner "than" ile kullanılırken, Scarcely ve Hardly DAİMA "when" ile eşleşir!',
    explanation: '🎯 FORMÜL: "Scarcely had + S + V3 ... when + V2" (Kül bulutu stratosfere henüz girmişti ki uçuşlar durduruldu). Cümle başı devriktir ve bağlacı when\'dir. Doğru cevap A.'
  },

  // =========================================================================
  // CONJUNCTIONS & TRANSITIONS (DEVAM - 9 SORU)
  // =========================================================================
  {
    id: 'g_c10_b',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Inasmuch as / Seeing that (Sebep Bildiren Bağlaçlar)',
    question: '_____ the initial clinical trials yielded statistically ambiguous therapeutic outcomes, the pharmacology board requested a secondary double-blind investigation.',
    options: {
      A: 'Inasmuch as',
      B: 'Despite',
      C: 'Unless',
      D: 'Whereas',
      E: 'However'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Inasmuch as / Seeing that = Mademki, -dığı için (Sebep-Sonuç)',
    trapWarning: 'Despite bir edattır arkasından tam cümle (S+V) alamaz (B elenir). However iki bağımsız cümle arasında noktalı virgülle kullanılır (E elenir).',
    explanation: '🎯 SEBEP BAĞLACI: "Inasmuch as the trials yielded ambiguous outcomes..." (İlk deneyler belirsiz sonuçlar verdiği için / mademki verdi, kurul ikinci bir araştırma talep etti). Tam cümle alan sebep bağlacıdır. Doğru cevap A.'
  },
  {
    id: 'g_c11_b',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Provided that / Providing (Şartıyla, Koşuluyla)',
    question: 'Developing agrarian nations can achieve resilient food security _____ sustainable irrigation infrastructure is universally implemented across rural regions.',
    options: {
      A: 'provided that',
      B: 'in case',
      C: 'although',
      D: 'so that',
      E: 'whereas'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Provided that / Providing that = Şartıyla, Eğer (If alternatifi)',
    trapWarning: 'In case "önlem alma" bildirir (olursa diye); oysa burada önlem değil gıda güvenliğine ulaşmanın temel şartı anlatılmaktadır.',
    explanation: '🎯 ŞART BAĞLACI: "Gıda güvenliği sağlanabilir ŞARTIYLA Kİ (provided that) sürdürülebilir sulama altyapısı kurulsun". Doğru cevap A.'
  },
  {
    id: 'g_c12_b',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Despite / In spite of + Noun Phrase (Zıtlık Edatı)',
    question: '_____ stringent monetary tightening measures implemented by the central bank, national consumer inflation continued to accelerate throughout the fiscal quarter.',
    options: {
      A: 'Despite',
      B: 'Although',
      C: 'Even though',
      D: 'Since',
      E: 'Whereas'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Despite / In spite of + İsim Öbeği (Noun Phrase) [Zıtlık]',
    trapWarning: 'Boşluktan sonra "stringent monetary tightening measures" (isim öbeği) vardır, fiil yoktur! Although, Even though ve Whereas tam cümle (S+V) ister.',
    explanation: '🎯 ÖSYM GRAMER AYRIMI: İsim öbeği öncesi zıtlık edatı "Despite / In spite of" kullanılır. Merkez bankasının sıkı tedbirlerine RAĞMEN enflasyon hızlanmaya devam etti. Doğru cevap A.'
  },
  {
    id: 'g_c13_b',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Whereas / While (Taban Tabana Kıyaslama ve Zıtlık)',
    question: 'Solar photovoltaic farms require extensive geographical land mass, _____ geothermal power generation facilities operate on remarkably compact surface footprints.',
    options: {
      A: 'whereas',
      B: 'because',
      C: 'so that',
      D: 'in case',
      E: 'as long as'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Whereas / While = Oysa, -iken (İki zıt durumu kıyaslama)',
    trapWarning: 'Güneş santrallerinin geniş alana ihtiyaç duyması ile jeotermal santrallerin kompakt olması doğrudan bir zıt kıyastır.',
    explanation: '🎯 KIYASLAMA ZITLIĞI: Güneş tarlaları geniş arazi isterken, OYSA Kİ (whereas) jeotermal tesisler son derece kompakt alanlarda çalışır. Doğru cevap A.'
  },
  {
    id: 'g_c14_b',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'In case (Önlem Bildirme: -olur diye / -durumunda)',
    question: 'Submarine exploration vessels are equipped with redundant catalytic oxygen generators _____ primary atmospheric scrubber modules suffer critical mechanical failure.',
    options: {
      A: 'in case',
      B: 'so that',
      C: 'unless',
      D: 'although',
      E: 'provided that'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'In case + Kötü Olasılık (Önlem Alma: ...olur diye)',
    trapWarning: 'So that "-sin diye amaç" bildirir; In case ise "olur diye önceden yedek önlem alma" bildirir.',
    explanation: '🎯 ÖSYM ÖNLEM KALIBI: Denizaltılar yedek oksijen jeneratörleri taşır; birincil modüller bozulursa DİYE / bozulması İHTİMALİNE KARŞI (in case they suffer failure). Doğru cevap A.'
  },
  {
    id: 'g_c15',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Lest ... (should) (Korkusuyla, -mesin diye)',
    question: 'The central national archive maintains strict atmospheric humidity regulation protocols _____ fragile medieval parchment codices _____ irreversible biological degradation.',
    options: {
      A: 'lest / should suffer',
      B: 'so that / will suffer',
      C: 'unless / have suffered',
      D: 'in case / suffered',
      E: 'provided that / must suffer'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Lest + S + (should) V1 = -mesin diye, korkusuyla (Cümle anlamca olumsuzdur, not almaz)',
    trapWarning: 'Lest yapısı kendi içinde negatif anlam taşır. B şıkkında "so that will suffer" (bozulsun diye) saçma bir anlam doğurur.',
    explanation: '🎯 AKADEMİK İFADE: "Lest fragile codices should suffer degradation" (Ortaçağ el yazmaları biyolojik bozulmaya uğramasın diye / korkusuyla arşiv nemi kontrol eder). Doğru cevap A.'
  },
  {
    id: 'g_c16',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'So that / In order that (Amaç Bildiren Bağlaçlar)',
    question: 'Civil engineers installed tuned liquid dampers throughout the skyscraper tower _____ the structure _____ destructive harmonic vibrations during high-velocity windstorms.',
    options: {
      A: 'so that / could withstand',
      B: 'although / would withstand',
      C: 'in case / has withstood',
      D: 'unless / withstands',
      E: 'as if / is withstanding'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'So that + S + could/can V1 = -ebilsin diye (Amaç)',
    trapWarning: 'Ana cümle past tense (installed) olduğu için "so that" ardına "could/would/might + V1" modeli gelir.',
    explanation: '🎯 AMAÇ BAĞLACI: Mühendisler sıvı sönümleyiciler yerleştirdi Kİ BÖYLECE gökdelen fırtına titreşimlerine dayanabilsin (so that it could withstand). Doğru cevap A.'
  },
  {
    id: 'g_c17',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'On the grounds that (Gerekçesiyle, İddiasıyla)',
    question: 'The antitrust regulatory commission blocked the proposed telecommunications merger _____ it would stifle free-market competition and inflate consumer tariffs.',
    options: {
      A: 'on the grounds that',
      B: 'despite the fact that',
      C: 'as long as',
      D: 'even though',
      E: 'unless'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'On the grounds that = Gerekçesiyle, -dığı sebebiyle (Resmi / Hukuki Gerekçe)',
    trapWarning: 'Despite the fact that ve Even though zıtlık verir; oysa birleşmeyi engellemenin haklı GEREKÇESİ (sebebi) anlatılmaktadır.',
    explanation: '🎯 RESMİ GEREKÇE BAĞLACI: Rekabeti boğacağı ve tarifeleri şişireceği GEREKÇESİYLE (on the grounds that) birleşme durduruldu. Doğru cevap A.'
  },
  {
    id: 'g_c18',
    type: 'grammar',
    grammarCategory: 'conjunctions_transitions',
    grammarTopicTitle: 'Whether ... or (İster ... ister, Olup olmadığı)',
    question: '_____ the demographic contraction stems from declining fertility rates _____ from increased emigratory outflows, municipal infrastructure must adjust accordingly.',
    options: {
      A: 'Whether / or',
      B: 'Neither / nor',
      C: 'Both / and',
      D: 'Not only / but',
      E: 'Either / and'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Whether ... or = İster ... ister (Alternatifli şart / bağlaç)',
    trapWarning: 'Cümle başında "İster doğurganlığın düşmesinden, isterse göçten kaynaklansın" ikili alternatifi için "Whether ... or" kullanılır.',
    explanation: '🎯 FORMÜL: "Whether X or Y, [Ana Cümle]" (Sebep ister X olsun ister Y olsun, belediye altyapısı uyum sağlamak zorundadır). Doğru cevap A.'
  },

  // =========================================================================
  // PREPOSITIONS & COLLOCATIONS (DEVAM - 9 SORU)
  // =========================================================================
  {
    id: 'g_p10_b',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Abstain from / Refrain from (Uzak Durmak, Kaçınmak)',
    question: 'Jurors presiding over high-profile criminal litigation are legally instructed to abstain _____ reviewing speculative social media commentary throughout the active trial.',
    options: {
      A: 'from',
      B: 'to',
      C: 'against',
      D: 'with',
      E: 'in'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Abstain FROM + V-ing = Bir şeyden sakınmak / uzak durmak',
    trapWarning: 'Türkçedeki "yorumlara karşı" çevirisi "against" seçtirmeye çalışabilir; Abstain DAİMA "from" alır.',
    explanation: '🎯 EDAT FORMÜLÜ: "abstain from", "refrain from", "prohibit from", "prevent from". Sakınma ve men etme fiilleri "from" ile birleşir. Doğru cevap A.'
  },
  {
    id: 'g_p11_b',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Adhere to (Uymak, Bağlı Kalmak)',
    question: 'Biomedical genetic laboratories must rigorously adhere _____ aseptic containment protocols to avoid accidental pathogen transmission.',
    options: {
      A: 'to',
      B: 'with',
      C: 'by',
      D: 'for',
      E: 'about'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Adhere TO = Bir kurala / protokole bağlı kalmak, riayet etmek',
    trapWarning: 'Comply fiili "with" alırken, Adhere ve Conform fiilleri "to" alır (adhere to, conform to).',
    explanation: '🎯 ÖSYM AYIRT EDİCİSİ: "comply with" <-> "adhere to". Protokollere sıkı sıkıya bağlı kalmak (adhere to). Doğru cevap A.'
  },
  {
    id: 'g_p12_b',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Prone to (Yatkın, Meyilli)',
    question: 'Arid subtropical agricultural valleys are inherently prone _____ prolonged drought spells followed by sudden catastrophic flash flooding.',
    options: {
      A: 'to',
      B: 'for',
      C: 'in',
      D: 'with',
      E: 'against'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Prone TO / Susceptible TO / Vulnerable TO Üçlüsü',
    trapWarning: 'Türkçedeki "-e karşı meyilli" ifadesinden dolayı "against" tuzağına düşmeyin. İngilizcede eğilim ve hassasiyet sıfatları "to" alır.',
    explanation: '🎯 SIK ÇIKAN ÜÇLÜ: "prone to", "susceptible to", "vulnerable to". Olumsuz durumlara açık / yatkın olmak anlamında "to" kullanılır. Doğru cevap A.'
  },
  {
    id: 'g_p13',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Deficient in (Bakımından Yetersiz / Eksik)',
    question: 'Populations subsisting on diets deficient _____ essential micronutrients like zinc and bioavailable iron exhibit heightened vulnerability to stunted growth.',
    options: {
      A: 'in',
      B: 'of',
      C: 'from',
      D: 'about',
      E: 'for'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Deficient IN / Lacking IN / Rich IN (Bakımından)',
    trapWarning: 'B şıkkındaki "of" (lack of) ile karıştırılır; lack isim iken "of" alır fakat "lacking" ve "deficient" sıfatları "in" alır!',
    explanation: '🎯 ÖSYM KURALI: "deficient in zinc" (çinko bakımından yetersiz), "rich in minerals" (minerallerce zengin). Doğru cevap A.'
  },
  {
    id: 'g_p14',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'In terms of (Açısından, Bakımından)',
    question: 'Modern lithium-iron-phosphate battery chemistry dramatically outperforms conventional nickel formulations _____ thermal stability and cyclic operational longevity.',
    options: {
      A: 'in terms of',
      B: 'by means of',
      C: 'at the expense of',
      D: 'in contrast to',
      E: 'as a consequence of'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'In terms of = Açısından, bakımından (Kıyaslama kriteri)',
    trapWarning: 'Termal kararlılık ve ömür birer kriterdir; bu kriterler "açısından" üstünlük sağlandığı için "in terms of" seçilir.',
    explanation: '🎯 FORMÜL: "outperforms ... in terms of [kriter]" (termal stabilite ve kullanım ömrü AÇISINDAN daha üstündür). Doğru cevap A.'
  },
  {
    id: 'g_p15',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'At the expense of (Pahasına, Zararına)',
    question: 'Rapid urban development and industrial zoning should never be accelerated _____ designated agricultural greenbelts and critical freshwater aquifer reserves.',
    options: {
      A: 'at the expense of',
      B: 'in favor of',
      C: 'in place of',
      D: 'by reason of',
      E: 'with a view to'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'At the expense of / At the cost of = Pahasına, zarar vererek',
    trapWarning: 'In favor of: lehine; oysa burada tarım alanlarının ve su kaynaklarının "aleyhine / pahasına" bir büyüme yapılmaması gerektiği uyarılıyor.',
    explanation: '🎯 KALIP İFADE: "at the expense of greenbelts" (yeşil alanların pahasına/zararına). Doğru cevap A.'
  },
  {
    id: 'g_p16',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Stem from (Kaynaklanmak, -den ileri gelmek)',
    question: 'Most structural dysfunctions currently plaguing international semiconductor supply chains stem _____ an over-reliance on a handful of manufacturing hubs.',
    options: {
      A: 'from',
      B: 'to',
      C: 'in',
      D: 'with',
      E: 'for'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Stem FROM / Arise FROM / Originate IN (Köken Almak)',
    trapWarning: 'Aşırı bağımlılıktan "kaynaklanmak" anlamında fiil "stem from"dur.',
    explanation: '🎯 ÖSYM TEMEL PREPOSITION: "stem from" = -den kaynaklanmak (Eş anlamlıları: arise from, derive from). Doğru cevap A.'
  },
  {
    id: 'g_p17',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'Result in vs Result from (Sebep-Sonuç Yönü)',
    question: 'Chronic sleep fragmentation frequently results _____ systemic cardiovascular inflammation, whereas acute daytime fatigue directly results _____ irregular slow-wave cycles.',
    options: {
      A: 'in / from',
      B: 'from / in',
      C: 'to / with',
      D: 'of / by',
      E: 'with / of'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Result IN (Yol Açmak / Sebep Olmak) vs Result FROM (-den Kaynaklanmak)',
    trapWarning: 'B şıkkında yönler tam ters çevrilmiştir! İlk boşluk sebep -> sonuç (in), ikinci boşluk sonuç <- sebep (from).',
    explanation: '🎯 ÖSYM TUZAĞI: 1. Uykusuzluk iltihaplanmaya YOL AÇAR (results in inflammation). 2. Yorgunluk dalga düzensizliğinden KAYNAKLANIR (results from irregular cycles). Doğru cevap A (in / from).'
  },
  {
    id: 'g_p18',
    type: 'grammar',
    grammarCategory: 'prepositions',
    grammarTopicTitle: 'By means of (Vasıtasıyla, Yoluyla)',
    question: 'Unmanned deep-sea submersibles map bathymetric contours across abyssal oceanic trenches _____ multi-beam sonar arrays and laser bathymetry.',
    options: {
      A: 'by means of',
      B: 'on behalf of',
      C: 'in accordance with',
      D: 'in charge of',
      E: 'for the sake of'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'By means of = Vasıtasıyla, aracılığıyla (Yöntem bildirme)',
    trapWarning: 'On behalf of: adına/namına demektir. Sonar ve lazer birer yöntem / araç olduğu için "by means of" kullanılır.',
    explanation: '🎯 YÖNTEM BELİRTEÇLERİ: Sonar sistemleri VASITASIYLA (by means of multi-beam sonar) haritalama yapılır. Doğru cevap A.'
  },

  // =========================================================================
  // REDUCTIONS & PARTICIPLES (DEVAM - 9 SORU)
  // =========================================================================
  {
    id: 'g_r10_b',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Having been V3 (Öncelikli Edilgen Kısaltma)',
    question: '_____ for nearly two millennia beneath layers of volcanic pumice, the Roman fresco murals retained extraordinary chemical vibrancy upon excavation.',
    options: {
      A: 'Having been preserved',
      B: 'Preserving',
      C: 'To preserve',
      D: 'Having preserved',
      E: 'To have preserved'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Having been V3 = Geçmişte edilgen olarak korunmuş olan (Zaman Önceliği + Edilgenlik)',
    trapWarning: 'Freskler kendi kendini korumaz, "korunur" (Edilgenlik). Ayrıca kazıdan (retained) 2000 yıl önce yaşandığı için öncelik bildirir (Having been preserved).',
    explanation: '🎯 KISALTMA ANALİZİ: Freskler (özne) korunmuştur (Passive: been preserved) ve bu durum kazıdan çok daha önce yüzyıllarca sürmüştür (Öncelik: Having been). Doğru cevap A.'
  },
  {
    id: 'g_r11',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'The first / only person + to V1 (To-Infinitive Kısaltma)',
    question: 'Marie Curie remains the only distinguished scientist in history _____ Nobel Prizes in two distinct fundamental scientific disciplines, namely physics and chemistry.',
    options: {
      A: 'to receive',
      B: 'receiving',
      C: 'having received',
      D: 'received',
      E: 'to be receiving'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'The first / second / only / last + TO V1 Kuralı',
    trapWarning: '"The only scientist" ifadesinden sonra V-ing (receiving) gelmez; sıra sayıları ve "the only" kalıbı to-infinitive (to receive) alır!',
    explanation: '🎯 FORMÜL: "The first / The second / The only / The last + [İsim] + TO V1". İki farklı dalda Nobel alan tek bilim insanı (the only scientist to receive). Doğru cevap A.'
  },
  {
    id: 'g_r12',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Given + Noun Phrase (Göz Önüne Alındığında)',
    question: '_____ the extraordinary mathematical complexity of macroscopic quantum entanglement, theoretical physicists continue to scrutinize its implications for general relativity.',
    options: {
      A: 'Given',
      B: 'Giving',
      C: 'To give',
      D: 'Having given',
      E: 'To be given'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Given + İsim Öbeği = Göz önüne alındığında, hesaba katıldığında (Considering)',
    trapWarning: 'Burada aktif fiil "giving" (veren) değil, kalıplaşmış edat/participle "Given (göz önüne alındığında)" aranmaktadır.',
    explanation: '🎯 ÖSYM AKADEMİK KALIP: "Given [İsim]" = Göz önünde bulundurulduğunda (Given the complexity of entanglement). Doğru cevap A.'
  },
  {
    id: 'g_r13',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'With + Object + V-ing (Mutlak Yapı / Absolute Clause)',
    question: 'With global ocean surface temperatures _____ unprecedented historic records throughout the summer, meteorologists anticipate unusually catastrophic tropical cyclogenesis.',
    options: {
      A: 'reaching',
      B: 'reached',
      C: 'to reach',
      D: 'having been reached',
      E: 'to be reached'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'With + Nesne + V-ing (Aktif Devam Eden Durum: Sıcaklıkların rekorlara ulaşmasıyla birlikte)',
    trapWarning: 'Sıcaklıklar kendisi rekor seviyelere ulaşmaktadır (Aktif eylemdir, pasif V3 olan "reached" seçilmez).',
    explanation: '🎯 MUTLAK YAPI (ABSOLUTE CLAUSE): "With ocean temperatures reaching records..." (Deniz yüzeyi sıcaklıklarının rekorlara ulaşmasıyla birlikte meteorologlar kasırgalar bekliyor). Aktif eylem V-ing alır. Doğru cevap A.'
  },
  {
    id: 'g_r14',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Compared with / to (Kıyaslandığında Edilgen Kısaltması)',
    question: '_____ fossil-fuel powered combustion turbines, solid-oxide fuel cell systems generate electrical power with dramatically lower atmospheric particulate emissions.',
    options: {
      A: 'Compared with',
      B: 'Comparing with',
      C: 'To compare with',
      D: 'Having compared',
      E: 'To have compared'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Compared with / to = Kıyaslandığında (Edilgen Participle)',
    trapWarning: 'Yakıt hücreleri türbinlerle "kıyaslar" değil, "kıyaslandığında" (edilgen) anlamı taşır; dolayısıyla "Comparing" değil "Compared" kullanılır.',
    explanation: '🎯 FORMÜL: "Compared with / to [A], [B] generates power..." (Fosil yakıtlı türbinlerle kıyaslandığında, yakıt hücreleri çok daha düşük emisyon üretir). Doğru cevap A.'
  },
  {
    id: 'g_r15',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Active Participle (Virgül Sonrası Sonuç V-ing: Thereby reducing)',
    question: 'The municipality installed decentralized solar microgrids across all municipal buildings, _____ regional dependence on coal-fired thermal utilities by 40 percent.',
    options: {
      A: 'thereby reducing',
      B: 'having reduced by',
      C: 'reduced',
      D: 'to reduce to',
      E: 'to be reduced'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Virgül + thereby + V-ing (Sonuç Bildiren Aktif Kısaltma: Böylelikle azaltarak)',
    trapWarning: 'Virgülden sonra gelen ve tüm cümlenin sonucunu bildiren aktif eylemlerde "thereby V-ing" standart akademik kalıptır.',
    explanation: '🎯 SONUÇ BİLDİREN V-ING: Güneş mikroşebekeleri kuruldu, "böylelikle bölgesel kömür bağımlılığını %40 oranında azaltarak" (thereby reducing dependence). Doğru cevap A.'
  },
  {
    id: 'g_r16',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Passive Reduction (Which were collected -> Collected)',
    question: 'The geological core samples _____ by the robotic drilling rig from the abyssal seabed confirmed the presence of ancient hydrocarbon deposits.',
    options: {
      A: 'collected',
      B: 'collecting',
      C: 'having collected',
      D: 'to collect',
      E: 'to be collecting'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'İsim + V3 (Passive Reduction: Samples which were collected -> Samples collected)',
    trapWarning: 'Numuneler toplama eylemini yapmaz, toplanır (Edilgen V3: collected). Collecting aktif olduğu için elenir.',
    explanation: '🎯 EDİLGEN SIFAT-FİİL: "The core samples collected by the rig..." (Sondaj kulesi tarafından toplanan jeolojik karot numuneleri). Doğru cevap A.'
  },
  {
    id: 'g_r17',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'With a view to + V-ing (Amacıyla)',
    question: 'The multilateral monetary consortium lowered interbank interest rates with a view to _____ sovereign liquidity crunches across emerging economies.',
    options: {
      A: 'mitigating',
      B: 'mitigate',
      C: 'to mitigate',
      D: 'having mitigated',
      E: 'mitigated'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'With a view to + V-ING (İstisnai To + Gerund Kalıbı)',
    trapWarning: 'ÖSYM\'nin en tehlikeli tuzağıdır! Buradaki "to" mastar eki değil, edattır (preposition). Bu yüzden ardından V1 (mitigate) değil, V-ing (mitigating) gelir!',
    explanation: '🎯 ÖSYM "TO + V-ING" İSTİSNASI: "look forward to + V-ing", "be accustomed to + V-ing", "with a view to + V-ING". Likidite krizlerini hafifletmek amacıyla (with a view to mitigating). Doğru cevap A.'
  },
  {
    id: 'g_r18',
    type: 'grammar',
    grammarCategory: 'reductions_participles',
    grammarTopicTitle: 'Passive Infinitive Purpose (In order to be recognized)',
    question: 'In order _____ by the international patent tribunal, a novel biomedical invention must demonstrate undeniable technological utility and non-obviousness.',
    options: {
      A: 'to be recognized',
      B: 'to recognize',
      C: 'recognizing',
      D: 'having recognized',
      E: 'being recognized'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'In order to BE V3 (Edilgen Amaç: Tanınmak / Kabul edilmek için)',
    trapWarning: 'Buluş (invention) kendisi tanımaz, mahkeme tarafından "tanınır/onaylanır" (Edilgen yapı: to be recognized).',
    explanation: '🎯 EDİLGEN AMAÇ BİLDİRİMİ: "In order to be recognized by the tribunal..." (Mahkeme tarafından tescil edilmek/tanınmak için yeni bir buluş fayda kanıtlamalıdır). Doğru cevap A.'
  },

  // =========================================================================
  // MODALS & SEMI-MODALS (DEVAM - 8 SORU)
  // =========================================================================
  {
    id: 'g_m10',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'May / Might have V3 (Geçmişe Dair Zayıf İhtimal)',
    question: 'Paleontologists speculate that abrupt climatic cooling caused by intense volcanism _____ a decisive role in the localized extinction of megafauna.',
    options: {
      A: 'might have played',
      B: 'must play',
      C: 'should play',
      D: 'can play',
      E: 'would have been playing'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Speculate (tahmin etmek) + Geçmiş Olay -> Might have V3 (Oynamış olabilir)',
    trapWarning: '"Speculate" fiili kesinlik değil tahmin ve olasılık bildirir; bu yüzden geçmişe dönük zayıf ihtimal kipi "might have played" seçilir.',
    explanation: '🎯 GEÇMİŞ İHTİMAL: Paleontologlar volkanik soğumanın kitlesel yok oluşta belirleyici bir rol oynamış olabileceğini tahmin ediyor (might have played). Doğru cevap A.'
  },
  {
    id: 'g_m11',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Must have V3 (Geçmişe Dair Güçlü Mantıksal Çıkarım)',
    question: 'The unprecedented displacement of tectonic strata along the fault line indicates that the prehistoric seismic rupture _____ a magnitude well in excess of 8.5.',
    options: {
      A: 'must have had',
      B: 'should have',
      C: 'might have to have',
      D: 'could not have',
      E: 'would rather have'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Somut Kanıt (Unprecedented displacement) -> Güçlü Geçmiş Çıkarım (Must have V3: Olmuş olmalı)',
    trapWarning: 'Eldeki jeolojik kanıt (tabakaların devasa yer değiştirmesi) olayın 8.5\'ten büyük olduğunu kesinlikle gösterir (must have had).',
    explanation: '🎯 FORMÜL: "Eldeki Güçlü İpucu -> Must have V3" (Tarih öncesi depremin büyüklüğü kesinlikle 8.5\'in üzerinde olmuş olmalı). Doğru cevap A.'
  },
  {
    id: 'g_m12',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Needn\'t have V3 vs Didn\'t need to (Gerek Yoktu Ama Yaptı)',
    question: 'The maritime rescue agency dispatched three helicopters; however, as the stranded yacht docked safely on its own, crews _____ such an expensive deployment.',
    options: {
      A: 'needn\'t have launched',
      B: 'didn\'t launch',
      C: 'must not launch',
      D: 'cannot launch',
      E: 'could not launch'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Needn\'t have V3 = Gerek yoktu ama boşuna yapıldı (Eylem gerçekleşti fakat gereksizdi)',
    trapWarning: 'Helikopterler zaten gönderilmiştir ("dispatched"); yat kendi başına yanaşınca bu operasyonun boşuna yapıldığı anlaşılmıştır. Bu durum "needn\'t have launched" ile ifade edilir.',
    explanation: '🎯 ÖSYM AYIRT EDİCİSİ: "Didn\'t need to do": Gerek yoktu ve yapmadı. "Needn\'t have done": Gerek yoktu ama yaptı (boşuna masraf oldu). Doğru cevap A.'
  },
  {
    id: 'g_m13',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Should have V3 (Yapmalıydı ama yapmadı - Geçmiş Eleştiri)',
    question: 'Municipal safety inspectors _____ the cracked structural pillars during the previous annual audit; failing to do so directly caused the bridge to collapse.',
    options: {
      A: 'should have condemned',
      B: 'must condemn',
      C: 'might condemn',
      D: 'can have condemned',
      E: 'would condemn'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Should have V3 = Yapmalıydı ama yapmadı (Geçmişe yönelik pişmanlık veya görev ihmali eleştirisi)',
    trapWarning: '"Failing to do so directly caused the collapse" cümlesi müfettişlerin görevi ihmal ettiğini açıklar. Yapmaları gerekirdi ama yapmadılar: "should have condemned".',
    explanation: '🎯 GEÇMİŞ ELEŞTİRİ: Müfettişlerin önceki denetimde çatlak kolonları kusurlu ilan etmesi gerekirdi ama etmediler (should have condemned). Doğru cevap A.'
  },
  {
    id: 'g_m14',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Could have V3 (Yapabilirdi ama yapmadı / Olabilirdi)',
    question: 'Without the swift deployment of localized antimicrobial prophylaxis, the hospital pathogen outbreak _____ into a catastrophic regional epidemic.',
    options: {
      A: 'could have escalated',
      B: 'must escalate',
      C: 'should escalate',
      D: 'can escalate',
      E: 'had escalated'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Without + İsim -> Could have V3 (Olabilirdi, gerçekleşebilirdi ama önlendi)',
    trapWarning: 'Hızlı müdahale olmasaydı salgın kontrolden çıkabilirdi (ancak müdahale edildi ve önlendi). Bu karşıt-olgusal olasılık "could have escalated" ile anlatılır.',
    explanation: '🎯 HİPOTETİK GEÇMİŞ OLASILIK: "Without prophylaxis, the outbreak could have escalated..." (Hızlı önlem olmasaydı salgın felakete dönüşebilirdi). Doğru cevap A.'
  },
  {
    id: 'g_m15',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Can\'t have V3 / Couldn\'t have V3 (Yapmış olamaz - Geçmiş İmkansızlık)',
    question: 'Given that Bronze Age artisans lacked metallurgical bellows capable of sustaining 1500°C temperatures, they _____ pure titanium alloys.',
    options: {
      A: 'could not have smelted',
      B: 'might not smelt',
      C: 'should not smelt',
      D: 'must not have to smelt',
      E: 'would not smelt'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'İmkansızlık Kanıtı (Lacked tools) -> Could not have V3 (Yapmış olamazlar)',
    trapWarning: 'Bronz çağı ustalarının o sıcaklığa ulaşacak aletleri yoktu; dolayısıyla titanyumu eritmiş olmaları MÜMKÜN DEĞİLDİR (could not have smelted).',
    explanation: '🎯 GEÇMİŞ İMKANSIZLIK ÇIKARIMI: "could not have V3" / "can\'t have V3" (O aletler olmadan saf titanyumu eritmiş olamazlar). Doğru cevap A.'
  },
  {
    id: 'g_m16',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Be supposed to V1 (Gerekmek, Yapması Beklenmek)',
    question: 'Under international civil aviation guidelines, commercial airlines _____ dual redundant telemetry transmitters before receiving passenger authorization.',
    options: {
      A: 'are supposed to install',
      B: 'had supposed to install',
      C: 'were installing to',
      D: 'have supposed to install',
      E: 'would be installing'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Be supposed to V1 = Kurallar gereği yapması beklenmek / gerekmek',
    trapWarning: 'Uluslararası sivil havacılık kuralları mevcut genel bir zorunluluk getirir; Present tense "are supposed to install" kullanılır.',
    explanation: '🎯 FORMÜL: "be supposed to V1" = Kural, kanun veya beklenti gereği bir şeyi yapması gerekmek. Doğru cevap A.'
  },
  {
    id: 'g_m17',
    type: 'grammar',
    grammarCategory: 'modals',
    grammarTopicTitle: 'Had better V1 (Yapsa iyi olur - Uyarı / Tavsiye)',
    question: 'Emerging economies vulnerable to sudden foreign exchange fluctuations _____ their sovereign debt portfolios before global central banks raise interest rates.',
    options: {
      A: 'had better diversify',
      B: 'had better diversified',
      C: 'would rather to diversify',
      D: 'have better diversified',
      E: 'are better diversify'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Had better + V1 (Yalın Fiil) = Yapsa iyi olur (Aksi halde kötü bir sonuç doğar)',
    trapWarning: 'Had better yapısında "had" geçmiş zaman gibi görünse de günümüz ve gelecek için kuvvetli tavsiye bildirir ve ardından DAİMA yalın fiil (diversify) gelir!',
    explanation: '🎯 FORMÜL: "Had better + V1" (Gelişmekte olan ekonomiler faiz artışından önce borç portföylerini çeşitlendirse iyi olur, yoksa kriz çıkar). Doğru cevap A.'
  },

  // =========================================================================
  // RELATIVE & NOUN CLAUSES (DEVAM - 8 SORU)
  // =========================================================================
  {
    id: 'g_rel9',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'Preposition + Whom (İnsanlar İçin İlgi Cümleciği)',
    question: 'The distinguished medical oncologists _____ our university hospital collaborated during the international immunotherapy trial were awarded the prestigious Lasker Prize.',
    options: {
      A: 'with whom',
      B: 'in which',
      C: 'to whose',
      D: 'for that',
      E: 'by which'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Collaborate WITH [People] -> With whom (Kendileriyle işbirliği yapılan onkologlar)',
    trapWarning: 'Onkologlar insandır, "which" alamaz (B, E elenir). Edat arkasına "that" gelemez (D elenir: "for that" kural dışıdır). Geriye "with whom" kalır.',
    explanation: '🎯 FORMÜL: "collaborate with somebody" fiilindeki edat başa gelir: "oncologists with whom we collaborated" (birlikte çalıştığımız onkologlar). Doğru cevap A.'
  },
  {
    id: 'g_rel10',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'Quantifier + of which (Miktar Bildiren İlgi Cümleciği)',
    question: 'The botanical expedition cataloged forty previously unclassified alpine flora species, _____ exhibited potent antimicrobial biochemical properties.',
    options: {
      A: 'several of which',
      B: 'several of whom',
      C: 'that several of',
      D: 'which of several',
      E: 'of which several'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Miktar Sözcüğü (several / all / none) + OF WHICH (Cansız/Bitki/Hayvan)',
    trapWarning: 'Bitki türleri (flora species) insan değildir; bu nedenle "of whom" değil "several of which" kullanılır.',
    explanation: '🎯 FORMÜL: "Virgül + [several / most / all / neither] OF WHICH" (40 yeni tür kataloglandı, Kİ BUNLARIN BİRÇOĞU antimikrobiyal özellikler sergiledi). Doğru cevap A.'
  },
  {
    id: 'g_rel11',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'Whose + Noun (Aitlik İlgi Zamiri)',
    question: 'Astrophysicists captured ultra-high-resolution imagery of a distant spiral galaxy _____ supermassive galactic core expels colossal relativistic plasma jets.',
    options: {
      A: 'whose',
      B: 'which',
      C: 'of which',
      D: 'that',
      E: 'where'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'İsim (galaxy) + WHOSE + Yalın İsim (core) [Galaksinin çekirdeği]',
    trapWarning: 'Boşluktan sonra "supermassive core" tamlaması (isim) gelmektedir. Galaksinin çekirdeği aitlik ilişkisi kurduğu için "whose" şarttır.',
    explanation: '🎯 AİTLİK BAĞLACI: "a galaxy WHOSE core expels jets..." (çekirdeği devasa plazma jetleri püskürten sarmal galaksi). Doğru cevap A.'
  },
  {
    id: 'g_rel12',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'The reason why / for which',
    question: 'The fundamental thermodynamic reason _____ catalytic water electrolysis remains energetically intensive is the high kinetic activation barrier of the oxygen evolution reaction.',
    options: {
      A: 'why',
      B: 'which',
      C: 'how',
      D: 'whose',
      E: 'what'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'The reason WHY / The reason FOR WHICH = Sebebi',
    trapWarning: 'The reason sözcüğünden sonra tam cümle geliyorsa ilgi zamiri "why" veya "for which" olur (which tek başına nesne eksikliği ister).',
    explanation: '🎯 FORMÜL: "The reason why S + V + O" (Elektrolizin enerji yoğun olmasının temel sebebi...). Doğru cevap A.'
  },
  {
    id: 'g_rel13',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'Subjunctive Mood in Noun Clauses (Demand/Mandate that S (should) V1)',
    question: 'International biosafety treaties explicitly mandate that every high-containment facility _____ stringent digital inventories of hazardous genetic vectors.',
    options: {
      A: 'maintain',
      B: 'maintains',
      C: 'maintained',
      D: 'will maintain',
      E: 'is maintaining'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'Mandate / Demand / Require that + S + (should) V1 (Yalın Fiil - Subjunctive)',
    trapWarning: '"every high-containment facility" tekil bir öznedir; öğrenci otomatik olarak "maintains (Vs)" işaretlemeye meyleder. Oysa MANDATE fiili subjunctive gerektirir, fiil daima YALIN (maintain) kalır!',
    explanation: '🎯 ÖSYM SUBJUNCTIVE TUZAĞI: "mandate / demand / insist / require that S + (should) V1". Özne he/she/it veya tekil olsa dahi fiil -s takısı almaz, yalın kalır (maintain). Doğru cevap A.'
  },
  {
    id: 'g_rel14',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'What as Nominal Relative (Şey / Ne olduğu - Özne Konumunda)',
    question: '_____ astounded the international team of biochemists was the extraordinary metabolic resilience of the newly identified subterranean extremophile bacteria.',
    options: {
      A: 'What',
      B: 'That',
      C: 'Which',
      D: 'How',
      E: 'Whether'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'WHAT + Fiil (Öznesi eksik Noun Clause: Biyokimyacıları hayrete düşüren ŞEY)',
    trapWarning: '"That" arkasından tam cümle ister (S+V+O). Oysa "astounded" doğrudan fiildir, öznesi yoktur; "özne rolünü üstlenen isim cümleciği" WHAT ile kurulur.',
    explanation: '🎯 NOMINAL RELATIVE KURALI: "What astounded the team was [resilience]..." (Ekibi hayrete düşüren şey bakterinin dayanıklılığıydı). Doğru cevap A.'
  },
  {
    id: 'g_rel15',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'Whether ... (or not) as Noun Clause Object',
    question: 'Astrobiologists are currently debating _____ subterranean oceans on Saturn\'s moon Enceladus possess sufficient hydrothermal nutrients to sustain primitive microbial life.',
    options: {
      A: 'whether',
      B: 'that',
      C: 'what',
      D: 'which',
      E: 'whose'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Debate / Investigate + WHETHER (Olup olmadığını tartışmak / araştırmak)',
    trapWarning: 'Bilim insanları henüz kesin bir gerçeği bilmiyor, "tartışıyorlar" (debating). Bilinmezlik veya olasılık durumlarında Noun Clause "whether" ile bağlanır.',
    explanation: '🎯 NOUN CLAUSE BELİRSİZLİK: "debating whether oceans possess nutrients" (okyanusların besin barındırıp barındırmadığını tartışıyorlar). Doğru cevap A.'
  },
  {
    id: 'g_rel16',
    type: 'grammar',
    grammarCategory: 'relative_noun_clauses',
    grammarTopicTitle: 'The extent to which (Ne dereceye kadar, Hangi ölçüde)',
    question: 'Cognitive neuroscientists continue to investigate the precise extent _____ early multilingual exposure enhances executive mental flexibility in advanced adulthood.',
    options: {
      A: 'to which',
      B: 'in which',
      C: 'for which',
      D: 'at which',
      E: 'on which'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'The extent TO WHICH / The degree TO WHICH (Hangi ölçüde / Ne dereceye kadar)',
    trapWarning: 'Extent ve degree isimleri kalıp olarak "to" edatıyla birleşir (to that extent -> to which).',
    explanation: '🎯 FORMÜL: "the extent to which [S + V]" = bir şeyin hangi ölçüde gerçekleştiği. Doğru cevap A (to which).'
  },

  // =========================================================================
  // CONDITIONALS & INVERSIONS (DEVAM - 8 SORU)
  // =========================================================================
  {
    id: 'g_inv9',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Should S V1 (Type 1 Devrik If: If S should V1)',
    question: '_____ the subterranean magma chamber register abnormal barometric pressures, volcanologists will immediately recommend regional evacuations.',
    options: {
      A: 'Should',
      B: 'Were',
      C: 'Had',
      D: 'If it had',
      E: 'Unless'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Should + Özne + V1 (Type 1 Devrik Şart: If + S + Present Simple)',
    trapWarning: 'Ana cümleye bakın: "will immediately recommend" (Type 1 - Future will). Type 1 devriği "Should" ile yapılır ("Were" Type 2, "Had" Type 3\'tür).',
    explanation: '🎯 TYPE 1 DEVRİK FORMÜLÜ: "Should + S + V1 (register) , S + will V1". Anlam: Eğer anormal basınç kaydederse... Doğru cevap A.'
  },
  {
    id: 'g_inv10',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Under no circumstances (Olumsuz Zarf Cümle Başı Devriklik)',
    question: 'Under no circumstances _____ laboratory research personnel bypass primary biosafety decontamination chambers when handling high-risk viral cultures.',
    options: {
      A: 'should',
      B: 'they should',
      C: 'have they to',
      D: 'will they have',
      E: 'they must'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Under no circumstances + Yardımcı Fiil (should) + Özne + V1',
    trapWarning: 'Cümle "Under no circumstances" olumsuz ifadesiyle başladığı için düz sıra (they should - B) kurulamaz, mutlaka devrik (should personnel bypass) olmalıdır!',
    explanation: '🎯 DEVRİKLİK KURALI: Olumsuz edat öbekleri (under no circumstances, on no account) cümle başında gelirse cümle soru formu gibi devrilir. Doğru cevap A.'
  },
  {
    id: 'g_inv11',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Seldom / Rarely (Cümle Başı Devriklik)',
    question: 'Seldom _____ deep-sea marine biologists encountered such a pristine cold-water coral ecosystem undisturbed by bottom-trawling commercial fisheries.',
    options: {
      A: 'have',
      B: 'did',
      C: 'had they',
      D: 'will',
      E: 'were'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Seldom + have/has + Özne + V3 (Present Perfect Devriklik)',
    trapWarning: 'Fiil V3 formundadır ("encountered"). Dolayısıyla yardımcı fiil "have" olmak zorundadır ("did" olsaydı yalın encounter gelirdi).',
    explanation: '🎯 DEVRİKLİK ZAMAN UYUMU: "Seldom have biologists encountered..." (Biyologlar nadiren böylesine bozulmamış bir mercan ekosistemiyle karşılaşmışlardır). Doğru cevap A.'
  },
  {
    id: 'g_inv12',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'But for / Without (Type 3 Şart Alternatifi)',
    question: '_____ the swift intervention of emergency backup diesel generators, the hospital\'s intensive care ventilation systems _____ catastrophic shutdown.',
    options: {
      A: 'But for / would have suffered',
      B: 'Were it for / will suffer',
      C: 'Had it been / suffered',
      D: 'If it were / had suffered',
      E: 'As if / would suffer'
    },
    answer: 'A',
    difficulty: 'Zor',
    tacticUsed: 'But for + İsim (O olmasaydı) , would have V3 (Type 3 Şart)',
    trapWarning: '"But for" yapısı "If it had not been for" anlamına gelir ve Type 3 sonuç cümlesiyle (would have suffered) tamamlanır.',
    explanation: '🎯 FORMÜL: "But for [İsim], S + would have V3" (Acil durum jeneratörleri olmasaydı, yoğun bakım sistemleri feci bir kapanma yaşamış olacaktı). Doğru cevap A.'
  },
  {
    id: 'g_inv13',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Unless (Medikçe / Madıkça = If not)',
    question: '_____ municipal water authorities enforce stringent industrial recycling protocols, subterranean freshwater aquifers will become irreversibly salinized.',
    options: {
      A: 'Unless',
      B: 'If',
      C: 'Provided that',
      D: 'As long as',
      E: 'In case'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'Unless = If not (-medikçe / -mezse)',
    trapWarning: 'If veya As long as seçilirse "su yetkilileri geri dönüşümü zorlarsa akiferler tuzlanır" gibi mantıksız bir anlam çıkar.',
    explanation: '🎯 ŞART KURALI: Katı protokoller uygulanmadıkça (Unless authorities enforce), su kaynakları tuzlanacaktır. Doğru cevap A.'
  },
  {
    id: 'g_inv14',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'In no way / By no means (Devriklik)',
    question: 'In no way _____ the preliminary exploratory findings be interpreted as definitive proof of extraterrestrial microbial metabolism.',
    options: {
      A: 'can',
      B: 'it can',
      C: 'they will',
      D: 'is',
      E: 'has'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'In no way + Yardımcı Fiil (can) + Özne + be V3 (Devrik)',
    trapWarning: '"In no way" cümle başında devrik yapı ister (can the findings be interpreted). Düz sıra (it can / they will) elenir.',
    explanation: '🎯 DEVRİK FORMÜL: "In no way can the findings be interpreted..." (Ön bulgular hiçbir şekilde kesin kanıt olarak yorumlanamaz). Doğru cevap A.'
  },
  {
    id: 'g_inv15',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'As long as / So long as (Sürece, Şartıyla)',
    question: 'Geothermal energy plants can produce continuous base-load electrical power _____ subterranean hydrothermal reservoirs are sustainably replenished.',
    options: {
      A: 'as long as',
      B: 'unless',
      C: 'although',
      D: 'whereas',
      E: 'lest'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'As long as / So long as = -dığı sürece (Şart)',
    trapWarning: 'Rezervuarlar sürdürülebilir şekilde beslendiği SÜRECE (as long as) jeotermal santraller kesintisiz elektrik üretir.',
    explanation: '🎯 ŞART FORMÜLÜ: "As long as [şart sağlanırsa], santraller elektrik üretebilir". Doğru cevap A.'
  },
  {
    id: 'g_inv16',
    type: 'grammar',
    grammarCategory: 'inversion_conditionals',
    grammarTopicTitle: 'Scarcely had S V3 ... when (İkili Devrik Zaman Kalıbı)',
    question: 'Scarcely had the international diplomatic envoys _____ the treaty summit hall _____ civil unrest erupted in the border province.',
    options: {
      A: 'entered / when',
      B: 'enter / than',
      C: 'entered / than',
      D: 'entering / that',
      E: 'been entering / before'
    },
    answer: 'A',
    difficulty: 'İleri',
    tacticUsed: 'Scarcely had + S + V3 (entered) ... WHEN + S + V2',
    trapWarning: 'No sooner "than" alır; Scarcely ve Hardly ise daima "when" alır!',
    explanation: '🎯 DEVRİK ÇİFTLER: "Scarcely had envoys entered ... when civil unrest erupted" (Elçiler zirve salonuna henüz girmişlerdi ki sınırda olaylar patlak verdi). Doğru cevap A.'
  }
];
