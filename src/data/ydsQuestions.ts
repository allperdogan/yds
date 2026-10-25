import { YdsQuestion } from '../types';
import { YDS_GRAMMAR_DRILL_BANK } from './ydsGrammarBank';

const BASE_YDS_QUESTIONS_DATA: YdsQuestion[] = [
  // 1. KELİME SORUSU (Vocabulary)
  {
    id: 'q1',
    type: 'vocabulary',
    question: 'Although many developing nations have made substantial progress in public health, infectious diseases still pose a _____ threat to rural populations lacking access to modern sanitation.',
    options: {
      A: 'negligible',
      B: 'lucrative',
      C: 'detrimental',
      D: 'sustainable',
      E: 'superficial'
    },
    answer: 'C',
    difficulty: 'İleri',
    tacticUsed: 'Artı (+) / Eksi (-) & Zıtlık Bağlacı Analizi',
    trapWarning: 'A şıkkındaki "negligible (önemsiz)" kelimesi "progress" ile uyumlu görünse de Although zıtlık bağlacı ikinci cümlenin olumsuz (tehdit) olmasını şart koşar!',
    explanation: `🎯 TAKTİK ADIMLARI:
1. Bağlaç Kontrolü: Cümle "Although (Her ne kadar... ise de)" zıtlık bağlacıyla başlıyor. İlk cümlecik "substantial progress (önemli ilerleme)" ile olumlu (+).
2. Sonuç Cümlesi Yönü: Zıtlık gereği ana cümlecik olumsuz (-) olmak zorundadır. "Infectious diseases still pose a _____ threat" (Bulaşıcı hastalıklar halen ..... bir tehdit oluşturuyor).
3. Şık Elemesi:
   - A) negligible (önemsiz) -> Tehdidin önemsiz olması zıtlık yaratmaz, elenir.
   - B) lucrative (karlı/kazançlı) -> Tehdit için kullanılamaz, elenir.
   - C) detrimental (zararlı/yıkıcı) -> Olumsuz bir tehdit sıfatı! Doğru cevap.
   - D) sustainable (sürdürülebilir) -> Anlamca uyuşmaz.
   - E) superficial (yüzeysel) -> Tehdidi hafife alır, bağlama uymaz.`
  },

  // 2. PHRASAL VERB SORUSU
  {
    id: 'q2',
    type: 'vocabulary',
    question: 'A team of marine biologists _____ an unprecedented underwater expedition last summer to investigate how warming sea temperatures affect coral reefs.',
    options: {
      A: 'called off',
      B: 'carried out',
      C: 'turned down',
      D: 'looked into',
      E: 'backed up'
    },
    answer: 'B',
    difficulty: 'Orta',
    tacticUsed: 'Collocation (Eşdizimlilik) Taktiği: Araştırma/Deney Yürütmek',
    trapWarning: 'D şıkkındaki "looked into (araştırmak, incelemek)" cazip görünebilir ancak bir keşif seferi (expedition) "incelenmez", "yürütülür/gerçekleştirilir".',
    explanation: `🎯 TAKTİK ADIMLARI:
1. Nesne Analizi: Boşluktan sonra "an unprecedented underwater expedition (benzeri görülmemiş bir su altı seferi)" gelmektedir.
2. ÖSYM Altın Formülü: İngilizcede "research, experiment, study, expedition, survey, investigation" kelimeleri eyleme dökülürken %95 "carry out" veya "conduct" fiiliyle birleşir.
3. Şık Analizi:
   - A) called off (iptal etti)
   - B) carried out (yürüttü, icra etti) -> Doğru cevap!
   - C) turned down (reddetti)
   - D) looked into (inceledi/soruşturdu)
   - E) backed up (destekledi/yedekledi)`
  },

  // 3. DİLBİLGİSİ - ZAMAN VE EDAT (Grammar / Tenses)
  {
    id: 'q3',
    type: 'grammar',
    question: 'Ever since cognitive psychologists _____ the fundamental mechanisms of memory retrieval in the 1970s, neuroscience _____ enormous breakthroughs in understanding dementia.',
    options: {
      A: 'discovered / has made',
      B: 'have discovered / made',
      C: 'had discovered / is making',
      D: 'were discovering / makes',
      E: 'discovered / will make'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: 'ÖSYM\'nin Vazgeçilmez "Ever Since" Kuralı',
    trapWarning: 'B şıkkında "in the 1970s" geçmiş zaman ipucu varken ilk tarafa Present Perfect (have discovered) getirilemez!',
    explanation: `🎯 TAKTİK ADIMLARI:
1. Kural: "Since / Ever since + Past Simple (V2), Present Perfect (have/has V3)" kuralı YDS\'nin demirbaş formülüdür.
2. İlk Taraf: "in the 1970s" net bir geçmiş zaman ifadesi olduğundan Past Simple (discovered) olmak zorundadır. (B, C, D şıkları anında elenir).
3. İkinci Taraf: O tarihten günümüze kadar gelen başarıyı ifade ettiği için Present Perfect (has made) gelmelidir.
4. Doğru Şık: A`
  },

  // 4. SADELEŞTİRME VE DİLBİLGİSİ (Participle Reduction)
  {
    id: 'q4',
    type: 'grammar',
    question: '_____ by ancient Roman architectural techniques, modern civil engineers are now developing self-healing concrete that can endure earthquakes.',
    options: {
      A: 'Inspiring',
      B: 'Having inspired',
      C: 'Inspired',
      D: 'To inspire',
      E: 'Being inspired'
    },
    answer: 'C',
    difficulty: 'İleri',
    tacticUsed: 'Edilgen (Passive) Sadeleştirme & "By" İpucu',
    trapWarning: 'A ve B şıkları etken (active) yapılardır. Cümlenin başında nesne değil "by" edatı varsa aktif yapılar direkt elenir!',
    explanation: `🎯 TAKTİK ADIMLARI:
1. Sadeleştirme Kuralı: Virgülden sonraki ana özneye bakın: "modern civil engineers (modern inşaat mühendisleri)".
2. Eylemin Yönü: Mühendisler Roma tekniklerinden "ilham mı almıştır" yoksa "ilham mı vermiştir"? Arkasından gelen "by ancient Roman architectural techniques" yapısı eylemin edilgen (pasif) olduğunu kanıtlar.
3. Formül: Pasif kısaltmalarda geçmişte tamamlanmış eylemler doğrudan "V3" (Inspired) veya "Having been V3" ile ifade edilir.
4. Doğru Şık: C`
  },

  // 5. CÜMLE TAMAMLAMA (Sentence Completion)
  {
    id: 'q5',
    type: 'sentence_completion',
    question: 'While industrial automation dramatically enhances production efficiency and reduces manufacturing errors, _____.',
    options: {
      A: 'it also helps companies lower their total operational expenditures over time',
      B: 'it inevitably causes severe structural unemployment among low-skilled laborers',
      C: 'manufacturers have already integrated robotics into nearly all assembly lines',
      D: 'because skilled engineers are constantly required to maintain complex machinery',
      E: 'as a result, consumer goods have become far more accessible to the public'
    },
    answer: 'B',
    difficulty: 'İleri',
    tacticUsed: 'While Taban Tabana Zıtlık (+ / -) Formülü',
    trapWarning: 'A ve E şıkları olumlu sonuçlardır; oysa "While" ile başlayan kök cümle zaten olumlu bir avantajdan bahsettiği için tamamlayan cümlenin olumsuz (dezavantaj) olması gerekir!',
    explanation: `🎯 TAKTİK ADIMLARI:
1. Bağlaç: "While" iki durum arasındaki tezatlığı / zıtlığı kıyaslar.
2. Anlam Analizi (Kök): "dramatically enhances efficiency and reduces errors" -> Çok net olumlu (+).
3. Beklenen Cümle: Endüstriyel otomasyonun getirdiği bir zarar, tehdit veya olumsuzluk (-) olmalıdır.
4. Şık Değerlendirmesi:
   - A) Maliyetleri düşürmeye yardımcı olur (+) -> Paralel, zıtlık yok, elenir.
   - B) Vasıfsız işçiler arasında kaçınılmaz olarak yapısal işsizliğe yol açar (-) -> Mükemmel zıtlık ve özne uyumu ("it" = industrial automation). Doğru cevap!
   - C) Zamansal uyumsuzluk ve nötr durum.
   - D) "Because" gereksiz ikinci bir yan cümle bağlacı ekler, ana cümle eksik kalır.
   - E) Malların erişilebilir hale gelmesi (+) -> Olumlu sonuç, elenir.`
  },

  // 6. İNGİLİZCE - TÜRKÇE ÇEVİRİ (Translation EN -> TR)
  {
    id: 'q6',
    type: 'translation_en_tr',
    question: 'Although renewable energy technologies have developed significantly over the last two decades, fossil fuels still meet more than eighty percent of global energy consumption.',
    options: {
      A: 'Yenilenebilir enerji teknolojileri son yirmi yılda önemli ölçüde gelişse de, küresel enerji tüketiminin yüzde sekseninden fazlasını hâlâ fosil yakıtlar karşılamaktadır.',
      B: 'Son yirmi yılda yenilenebilir enerji teknolojilerinin önemli ölçüde gelişmesi sayesinde fosil yakıtlar artık küresel enerjinin sadece yüzde seksenini karşılayabilmektedir.',
      C: 'Fosil yakıtlar küresel enerji tüketiminin yüzde sekseninden fazlasını karşılamaya devam ettikçe yenilenebilir enerji teknolojileri beklenen gelişimi gösteremeyecektir.',
      D: 'Yenilenebilir enerji teknolojileri son yirmi yılda önemli bir gelişme kaydetmiştir fakat fosil yakıtların küresel enerji tüketimindeki payı neredeyse yüzde seksen civarındadır.',
      E: 'Küresel enerji tüketiminin yüzde sekseninden fazlasının fosil yakıtlar tarafından karşılanması, son yirmi yıldaki yenilenebilir enerji teknolojilerinin gelişimini yavaşlatmıştır.'
    },
    answer: 'A',
    difficulty: 'Orta',
    tacticUsed: '30 Saniyelik Özne ve Ana Yüklem Eşleştirme Formülü',
    trapWarning: 'D şıkkında "fakat" kullanılarak cümle iki bağımsız cümleye bölünmüş, B şıkkında ise "sayesinde" denilerek sebep-sonuca dönüştürülmüştür.',
    explanation: `🎯 20 SANİYEDE ÇÖZÜM FORMÜLÜ:
1. Ana Yüklemi Bul: İngilizce cümlenin ana yüklemi: "... still meet (hâlâ karşılamaktadır)".
   - Şıkların son kelimelerine bakın:
     - A) "... hâlâ fosil yakıtlar karşılamaktadır." (Tam uyum!)
     - B) "... karşılayabilmektedir." (Modal uydurması, elendi)
     - C) "... gelişimi gösteremeyecektir." (Yanlış yüklem, elendi)
     - D) "... yüzde seksen civarındadır." (Yanlış yüklem, elendi)
     - E) "... gelişimini yavaşlatmıştır." (Yanlış yüklem, elendi)
2. Sonuç: Yalnızca yükleme bakarak 10 saniyede 4 şık elendi ve doğru cevap A olarak çıktı!`
  },

  // 7. TÜRKÇE - İNGİLİZCE ÇEVİRİ (Translation TR -> EN)
  {
    id: 'q7',
    type: 'translation_tr_en',
    question: 'Bilim insanlarının iklim değişikliğinin yıkıcı etkilerini hafifletmek için geliştirdiği yeni stratejiler, dünya genelindeki hükümetler tarafından hızla benimsenmelidir.',
    options: {
      A: 'Governments worldwide must rapidly adopt the new strategies developed by scientists to mitigate the devastating effects of climate change.',
      B: 'The new strategies that scientists develop to reduce climate change effects might be adopted by governments around the world rapidly.',
      C: 'The new strategies developed by scientists to mitigate the devastating effects of climate change must be rapidly adopted by governments worldwide.',
      D: 'In order to mitigate the devastating effects of climate change, scientists have developed new strategies which should be adopted by world governments.',
      E: 'If governments worldwide rapidly adopt the strategies developed by scientists, the devastating effects of climate change can be mitigated.'
    },
    answer: 'C',
    difficulty: 'İleri',
    tacticUsed: 'Ana Özne & Pasif Modal Eşleştirme Taktiği',
    trapWarning: 'A şıkkı aktif çatılıdır ("Governments must adopt"). Oysa Türkçe cümlenin öznesi "Bilim insanlarının... geliştirdiği yeni stratejiler"dir ve cümle pasiftir ("benimsenmelidir").',
    explanation: `🎯 TAKTİK ADIMLARI:
1. Türkçe Yüklem: "... hızla benimsenmelidir." (Edilgen / Pasif ve Zorunluluk Modalı: "must be rapidly adopted").
   - A) Aktif çatı: "Governments must adopt" -> Elendi.
   - B) İhtimal modalı: "might be adopted" -> Elendi (Türkçede -meli/-malı var).
   - E) Şart cümlesi yapılmış: "If governments..." -> Elendi.
2. Türkçe Özne: "Bilim insanlarının iklim değişikliğinin yıkıcı etkilerini hafifletmek için geliştirdiği yeni stratejiler" (The new strategies developed by scientists to mitigate the devastating effects of climate change...).
3. Karşılaştırma: C şıkkı hem özneyi hem de edilgen yüklemi birebir ve eksiksiz karşılar!
4. Doğru Şık: C`
  },

  // 8. PARAGRAF / OKUMA ANLAMA (Reading Passage)
  {
    id: 'q8',
    type: 'reading',
    passage: 'Throughout the 20th century, antibiotics were hailed as the ultimate silver bullet against infectious bacteria, saving hundreds of millions of lives. However, widespread overprescription in human medicine and rampant use in livestock agriculture have accelerated the natural phenomenon of antimicrobial resistance. Today, resistant "superbugs" render standard treatments increasingly ineffective. The World Health Organization warns that unless coordinated international protocols are immediately enforced to curb misuse and incentivize the synthesis of novel antibiotic classes, minor bacterial infections could once again become routine death sentences by the mid-21st century.',
    question: 'It can be understood from the passage that the primary driver behind the proliferation of drug-resistant bacteria is _____.',
    options: {
      A: 'the complete failure of modern pharmaceutical laboratories to synthesize any effective medications',
      B: 'the excessive and uncontrolled utilization of antibiotics across both human healthcare and animal farming',
      C: 'a purely natural evolutionary cycle that humans have no capacity whatsoever to mitigate or prevent',
      D: 'the total absence of medical doctors in rural clinics capable of diagnosing bacterial strains accurately',
      E: 'solely the inability of international organizations like the WHO to draft meaningful health regulations'
    },
    answer: 'B',
    difficulty: 'YDS Master',
    tacticUsed: 'Paraphrase (Yeniden İfade) & Extreme Words Çeldirici Eleme',
    trapWarning: 'A ("complete failure"), C ("purely natural / no capacity whatsoever"), D ("total absence") ve E ("solely") şıklarındaki radikal kelimeler (extreme words) ÖSYM\'nin en belirgin tuzaklarıdır!',
    explanation: `🎯 TAKTİK ADIMLARI:
1. Soru Kökü: "primary driver behind the proliferation of drug-resistant bacteria" (ilaç dirençli bakterilerin çoğalmasının arkasındaki temel etken).
2. Metindeki Karşılığı: "... widespread overprescription in human medicine and rampant use in livestock agriculture have accelerated..."
3. Paraphrase (Eş Anlamlandırma):
   - "widespread overprescription" + "rampant use in livestock" = "excessive and uncontrolled utilization across both human healthcare and animal farming" (B şıkkı!).
4. Tuzak Şıkları Eleme:
   - A) "complete failure" -> Aşırı kesin, metinde yok.
   - C) "no capacity whatsoever" -> Aşırı kesin çeldirici.
   - D) "total absence" -> Paragrafta böyle bir şey geçmiyor.
   - E) "solely" -> Yalnızca WHO'yu suçlayan radikal çeldirici.
5. Doğru Şık: B`
  },

  // 9. DİYALOG TAMAMLAMA (Dialogue Completion)
  {
    id: 'q9',
    type: 'dialogue',
    dialogueSpeaker: 'Dr. Evans & Dr. Wright (İki Tıp Araştırmacısı)',
    question: `Dr. Evans: Have you reviewed the preliminary trial data for the new Alzheimer’s therapeutic?
Dr. Wright: Yes, and while the cognitive slowing was statistically significant, the rate of severe cerebral swelling in Phase 3 patients is deeply concerning.
Dr. Evans: _____
Dr. Wright: Precisely. Without modifying the dosing regimen or introducing protective monoclonal antibodies, the regulatory agency will never authorize clinical deployment.`,
    options: {
      A: 'Do you really believe that the cost of synthesizing this medication is too exorbitant for commercial markets?',
      B: 'So you are implying that the treatment cannot be approved in its current form despite its apparent therapeutic benefits?',
      C: 'I am confident that the regulatory agency will overlook the side effects due to the extreme severity of dementia.',
      D: 'Why don’t we just terminate all clinical research immediately and discard the chemical compounds entirely?',
      E: 'Are you suggesting that patients in the placebo group exhibited identical neurodegenerative symptoms?'
    },
    answer: 'B',
    difficulty: 'İleri',
    tacticUsed: 'Sonraki Cevaptan Geriye Yürüme Taktiği',
    trapWarning: 'C şıkkı Dr. Wright\'ın "the regulatory agency will never authorize" ifadesiyle doğrudan çelişir.',
    explanation: `🎯 TAKTİK ADIMLARI:
1. Boşluktan HEMEN SONRAKİ Cümle: Dr. Wright "Precisely. Without modifying..., the regulatory agency will never authorize clinical deployment." (Aynen öyle. Dozaj değiştirilmeden veya koruyucu antikorlar olmadan onay kurumu asla izin vermeyecek).
2. Çıkarım: Demek ki Dr. Evans boşlukta "Yani mevcut haliyle faydalı olsa da onay alamaz mı diyorsun?" benzeri bir özetleme yapmıştır.
3. Şık Analizi:
   - B şıkkında Dr. Evans tam olarak bunu söyler: "So you are implying that the treatment cannot be approved in its current form despite its apparent therapeutic benefits?"
   - Dr. Wright da "Precisely (Kesinlikle/Aynen öyle)" diyerek bunu teyit eder.
4. Doğru Şık: B`
  },

  // 10. AKIŞI BOZAN CÜMLE (Irrelevant Sentence)
  {
    id: 'q10',
    type: 'irrelevant_sentence',
    question: `(I) For decades, honeybees have been recognized as indispensable pollinators essential for maintaining global biodiversity and agricultural food security.
(II) In recent years, commercial beekeepers around the globe have reported devastating colony collapse disorder, losing up to half of their hives annually.
(III) Extensive field research indicates that this dramatic decline is driven by a toxic combination of neonicotinoid pesticides, parasitic mites, and habitat loss.
(IV) Honey produced in volcanic regions typically commands higher market prices due to its unique mineral composition and distinct floral aroma.
(V) Consequently, environmental policymakers are introducing strict moratoriums on hazardous chemical sprays to safeguard these vulnerable insect populations.`,
    options: {
      A: 'I',
      B: 'II',
      C: 'III',
      D: 'IV',
      E: 'V'
    },
    answer: 'D',
    difficulty: 'Orta',
    tacticUsed: 'Odak Noktası Sapması (Focus Shift) Taktiği',
    trapWarning: 'IV. cümlede de "honey (bal)" kelimesi geçtiği için aceleci okuyucu aynı konudan bahsedildiğini sanabilir!',
    explanation: `🎯 TAKTİK ADIMLARI:
1. Paragrafın Teması: Arıların ekosistem için önemi (I), toplu ölümleri (II), ölümlerin nedenleri olan tarım ilaçları ve parazitler (III), ve hükümetlerin arıları korumak için ilaç yasakları getirmesi (V).
2. Akışı Bozan Cümle: (IV) Numaralı cümle aniden "volkanik bölgelerdeki balın yüksek fiyatından ve aromatik tadından" bahsetmektedir.
3. Kontrol: IV. cümleyi atıp III'ten doğrudan V'e geçildiğinde: "...decline is driven by hazardous chemicals... Consequently, policymakers are introducing strict moratoriums on chemical sprays..." pürüzsüz bir mantık zinciri kurulmaktadır.
4. Doğru Şık: D (IV. Cümle)`
  }
];

export const YDS_QUESTIONS_DATA: YdsQuestion[] = [
  ...BASE_YDS_QUESTIONS_DATA,
  ...YDS_GRAMMAR_DRILL_BANK
];

import { YDS_FULL_MOCK_EXAM_1, YDS_FULL_MOCK_EXAM_2, YDS_FULL_MOCK_EXAM_3 } from './ydsFullMockExam';
import { YDS_READING_PASSAGES } from './ydsReadingPassages';
import { YDS_VOCAB_QUIZ_QUESTIONS } from './ydsVocabQuiz';
import { YDS_VOCABULARY_LIST } from './ydsVocabulary';

// Flatten reading questions
const readingPassageQuestions: YdsQuestion[] = YDS_READING_PASSAGES.flatMap((p) => p.questions);

// Convert curated vocab quiz questions into standard YdsQuestion
const vocabQuizAsYdsQuestions: YdsQuestion[] = YDS_VOCAB_QUIZ_QUESTIONS.map((vq) => ({
  id: vq.id,
  type: 'vocabulary',
  title: `Kelime Sorusu: ${vq.targetWord}`,
  question: vq.sentence,
  options: {
    A: vq.options[0] || '',
    B: vq.options[1] || '',
    C: vq.options[2] || '',
    D: vq.options[3] || '',
    E: vq.options[4] || 'diğer'
  },
  answer: (['A', 'B', 'C', 'D', 'E'][vq.options.indexOf(vq.correctAnswer)] || 'A') as 'A' | 'B' | 'C' | 'D' | 'E',
  explanation: `${vq.explanation} (Doğru Anlam: ${vq.meaningTr})`,
  tacticUsed: 'Kelime Eş Anlam & Bağlam Analizi',
  difficulty: 'İleri'
}));

// Complete unified questions master pool
export const ALL_UNIFIED_YDS_QUESTIONS: YdsQuestion[] = [
  ...YDS_QUESTIONS_DATA,
  ...YDS_FULL_MOCK_EXAM_1,
  ...YDS_FULL_MOCK_EXAM_2,
  ...YDS_FULL_MOCK_EXAM_3,
  ...readingPassageQuestions,
  ...vocabQuizAsYdsQuestions
];

const unifiedQuestionMap = new Map<string, YdsQuestion>();
ALL_UNIFIED_YDS_QUESTIONS.forEach((q) => unifiedQuestionMap.set(q.id, q));

export const getUnifiedQuestionById = (id: string): YdsQuestion | undefined => {
  if (unifiedQuestionMap.has(id)) {
    return unifiedQuestionMap.get(id);
  }

  // Handle synthetic infinite vocab questions (e.g., inf_w14)
  if (id.startsWith('inf_')) {
    const wordId = id.replace('inf_', '');
    const wordObj = YDS_VOCABULARY_LIST.find((w) => w.id === wordId);
    if (wordObj) {
      const syntheticQ: YdsQuestion = {
        id,
        type: 'vocabulary',
        title: `Hatalı Kelime Testi: ${wordObj.word}`,
        question: `The research committee pointed out that _____ conditions were critical. ("${wordObj.exampleEn}")`,
        options: {
          A: wordObj.word,
          B: 'enhance',
          C: 'undermine',
          D: 'mitigate',
          E: 'deteriorate'
        },
        answer: 'A',
        explanation: `Doğru Kelime: ${wordObj.word} (${wordObj.meaning}). Örnek: "${wordObj.exampleEn}" - ${wordObj.exampleTr}. Çağrışım: ${wordObj.mnemonic || 'ÖSYM VIP sözcüğü'}`,
        tacticUsed: 'Kelime Çağrışım ve Soru Çözümü',
        trapWarning: 'Bu kelimede pratik testi sırasında hata yapıldı.',
        difficulty: 'İleri'
      };
      unifiedQuestionMap.set(id, syntheticQ);
      return syntheticQ;
    }
  }

  return undefined;
};

