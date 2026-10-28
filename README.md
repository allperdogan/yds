# 🎓 YDS Master PRO

> **YDS & YÖKDİL Sınavları İçin 30 Günlük Bilimsel Hazırlık, Akademik Kelime & Soru Çözüm Platformu**

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🌟 Öne Çıkan Özellikler

### 1. 🧠 Akademik Kelime & SRS Motoru (3.005 Kelime)
- **ÖSYM & Bademci Sözlüğü Kapsamı:** Fen, sağlık ve sosyal bilimler sınavlarında en sık sorulan 3.005 akademik kelime, fiil, sıfat, zarf, phrasal verb ve bağlaç.
- **Ebbinghaus SM-2 Aralıklı Tekrar (SRS):** Bilimsel hafıza eğrisiyle kelimeleri kalıcı uzun süreli hafızaya aktarma algoritması (🔴 *Yarın*, 🟠 *2 Gün*, 🟢 *4 Gün*, 🔵 *7 Gün*).
- **İngilizce Doğal Sesli Telaffuz (TTS):** Web Speech API destekli doğal aksanla sesli dinleme.
- **İkili Çalışma Modu:**
  - 🎴 **3D Flashcard Modu:** Ön yüz, arka yüz, eş anlamlılar (*synonyms*), tamlamalar (*collocations*), sınav örnek cümleleri ve YDS altın ipuçları.
  - 📚 **Kelime Atlası & A-Z Sözlük:** Gerçek zamanlı arama, tür filtreleri (Fiil, Sıfat, İsim, Phrasal Verb, Bağlaç, Zarf) ve 60 FPS akıcı sayfalama (*pagination*).

### 2. ⚡ Soru & Çeldirici Eleme Atölyesi (Vocab Drill)
- Gerçek sınav formatında 5 şıklı cümle doldurma soruları. Şıklar boşluğun istediği biçimde (-ed, -s, -ing) gelir ve birbirinin eş anlamlısı olmayan, aynı türden kelimelerden seçilir.
- Çeldirici tuzak uyarıları (*trapWarning*) ve kök-ek çözümlemeleri.
- Akılda kalıcı hikayeleştirme ve ses çağrışım modelleri (*mnemonics*).

### 3. 📖 Akademik Okuma & Paragraf Deşifre Laboratuvarı
- Nature, The Economist, New Scientist seviyesinde ağır akademik makaleler.
- Cümle analiz modu: Noun Clauses, Relative Clauses, Reductions ve Inversions renkli bileşenlerle ayrıştırılmış gramer çözümlemeleri.
- Paragraf anlama soruları ve kelime notları.

### 4. ⏱️ 9 Tam YDS Denemesi (180 Dakika / 80 Soru)
- ÖSYM soru dağılımıyla 9 deneme. 4-9. denemelerde kelime, cümle tamamlama ve 63-80 arası sorular gerçek sınav uzunluğunda, yalnızca denemeler için yazıldı.
- ÖSYM optik form dizilimi ve gerçek sınav zamanlayıcısı.
- Soru tiplerine göre otomatik net hesaplama ve detaylı performans karnesi.
- Şık eleme (*üstünü çizme*) özelliği.

### 5. 💡 10 Temel Soru Tipi İçin Altın Taktik Kılavuzu
- Çeviri sorularında özne-yüklem eşleştirme ve yüklemler aynıyken kip, olumsuzluk ve niceleyici kontrolü.
- Sınavın geneli: yanlış doğruyu götürmez, 180 dakikalık süre planı, çözüm sırası ve optik kodlama.
- Tense uyumu, zaman bağlaçları, edat eşleştirmeleri ve artı/eksi (+/-) duygu analizi.

### 6. ☁️ Kesintisiz Cihaz Eşitleme & PWA Desteği
- iPhone Safari'de **"Ana Ekrana Ekle"** ile gerçek bir yerel iOS uygulaması gibi çalışma.
- Tek tıkla şifreli senkronizasyon kodu ile bilgisayar ve telefon arasında veri aktarımı.

---

## 🛠️ Kurulum & Yerel Geliştirme

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Testleri çalıştırın
npm test

# Üretim (Production) derlemesi alın
npm run build
```

---

## 🚀 Ücretsiz Yayın (GitHub Pages)

`main` dalına her push'ta `.github/workflows/deploy-pages.yml` testleri çalıştırır, uygulamayı derler ve **https://allperdogan.github.io/yds/** adresine yayınlar. GitHub Pages herkese açık depolarda ücretsizdir ve build kredisi yoktur.

İlk kurulum (bir kez): GitHub'da **Settings → Pages → Build and deployment → Source: GitHub Actions** seçin.

Uygulama PWA'dır: telefonda "Ana Ekrana Ekle" ile kurulur ve bir kez açıldıktan sonra internetsiz çalışır.

### İlerleme nerede saklanır?
Tüm ilerleme cihazın tarayıcısında (`localStorage`) tutulur; sunucu veya hesap yoktur. Cihazlar arasında taşımak için uygulamadaki **Yedek Al / Geri Yükle** penceresini kullanın.

---

## 📄 Lisans
MIT License.
