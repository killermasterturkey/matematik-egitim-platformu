// DESTEK SINIFI - TEMA 1 - KONU 3: Eşleştirme Oyunları
// Eşleştirme ve ayırt etme becerisi
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep } from '../../helpers';

export const konu3Eslestirme: Topic = {
  id: 'eslestirme-oyunlari',
  title: 'Eşleştirme Oyunları',
  description: 'Aynı Olanları Bul ve Eşleştir',
  emoji: '🎯',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['eşleştirme', 'aynı', 'farklı', 'benzer'],
  objectives: [
    'Aynı renkleri eşleştirir',
    'Aynı şekilleri eşleştirir',
    'Aynı hayvanları eşleştirir',
    'Farklı olanı bulur'
  ],
  content: {
    introduction: `Merhaba canım! 💝

Bugün oyun oynayacağız!
Eşleştirme oyunları! 🎯

Aynı olanları bulacağız!
Eşleştirecek misin?

Haydi başlayalım! 🌟`,

    motivationQuote: 'Eşleştirme çok eğlenceli! Sen yapabilirsin! Oyun zamanı! 🎮',

    funFacts: [
      '👀 Gözlerimiz aynı olanları hemen görür!',
      '🧠 Beynimiz eşleştirme yapmayı sever!',
      '🎮 Eşleştirme oyunları çok eğlenceli!',
      '🎯 Aynı renkleri bulmak kolay!',
      '🦋 İki kanat birbirine benzer!',
      '👟 İki ayakkabı bir çift!'
    ],

    steps: [
      // ADIM 1: Aynı Renkleri Eşleştir
      createStep(
        '🎨 Aynı Renkleri Bul',
        `Aynı renkleri eşleştirelim!

Bak! İki kırmızı elma! 🍎 🍎
AYNI!

İki mavi balık! 🐟 🐟
AYNI!

İki sarı yıldız! ⭐ ⭐
AYNI!

Aynı renkte mi?
Eşleştir! 🎯`,
        'Aynı renkteki şeyleri bul!',
        {
          visual: `
╔══════════════════════╗
║  AYNI RENK EŞLEŞTIR  ║
╠══════════════════════╣
║  🍎  ←→  🍎          ║
║  (Kırmızı)           ║
║                      ║
║  🐟  ←→  🐟          ║
║  (Mavi)              ║
║                      ║
║  ⭐  ←→  ⭐          ║
║  (Sarı)              ║
╚══════════════════════╝`,
          tip: 'Aynı renkler! Bak ve eşleştir! 🎨',
          examples: [
            createExample(
              '🍎 Bu elma hangi elmayla aynı?',
              '🍎 Kırmızı elma',
              'Aferin! İki kırmızı elma! Aynı! 🍎 🍎',
              '🍎 ←→ 🍎'
            ),
            createExample(
              '💙 Bu kalp hangi kalple aynı?',
              '💙 Mavi kalp',
              'Harika! İki mavi kalp! Aynı! 💙 💙',
              '💙 ←→ 💙'
            ),
            createExample(
              '☀️ Bu güneş hangi yıldızla aynı renk?',
              '⭐ Sarı yıldız',
              'Süper! İkisi de sarı! ☀️ ⭐',
              '☀️ ←→ ⭐ (İkisi de sarı!)'
            )
          ]
        }
      ),

      // ADIM 2: Aynı Şekilleri Eşleştir
      createStep(
        '⭕ Aynı Şekilleri Bul',
        `Aynı şekilleri eşleştirelim!

Bak! İki yuvarlak! ⭕ ⭕
AYNI ŞEKİL!

İki kare! ⬜ ⬜
AYNI ŞEKİL!

İki yıldız! ⭐ ⭐
AYNI ŞEKİL!

Aynı şekil mi?
Eşleştir! 🎯`,
        'Aynı şekildeki şeyleri bul!',
        {
          visual: `
╔══════════════════════╗
║  AYNI ŞEKİL EŞLEŞTIR ║
╠══════════════════════╣
║  ⭕  ←→  ⭕          ║
║  (Yuvarlak)          ║
║                      ║
║  ⬜  ←→  ⬜          ║
║  (Kare)              ║
║                      ║
║  ⭐  ←→  ⭐          ║
║  (Yıldız)            ║
╚══════════════════════╝`,
          tip: 'Aynı şekiller! Bak ve eşleştir! ⭕',
          examples: [
            createExample(
              '⭕ Bu yuvarlak hangisiyle aynı?',
              '⭕ Başka yuvarlak',
              'Bravo! İki yuvarlak! Aynı şekil! ⭕ ⭕',
              '⭕ ←→ ⭕'
            ),
            createExample(
              '⬜ Bu kare hangisiyle aynı?',
              '⬜ Başka kare',
              'Harika! İki kare! Aynı şekil! ⬜ ⬜',
              '⬜ ←→ ⬜'
            )
          ]
        }
      ),

      // ADIM 3: Aynı Hayvanları Eşleştir
      createStep(
        '🐱 Aynı Hayvanları Bul',
        `Aynı hayvanları eşleştirelim!

Bak! İki kedi! 🐱 🐱
AYNI HAYVAN!

İki köpek! 🐶 🐶
AYNI HAYVAN!

İki balık! 🐠 🐠
AYNI HAYVAN!

Aynı hayvan mı?
Eşleştir! 🎯`,
        'Aynı hayvanlari bul!',
        {
          visual: `
╔═══════════════════════╗
║ AYNI HAYVAN EŞLEŞTIR  ║
╠═══════════════════════╣
║  🐱  ←→  🐱           ║
║  (Kedi)               ║
║                       ║
║  🐶  ←→  🐶           ║
║  (Köpek)              ║
║                       ║
║  🐠  ←→  🐠           ║
║  (Balık)              ║
╚═══════════════════════╝`,
          tip: 'Aynı hayvanlar! Bak ve eşleştir! 🐱',
          examples: [
            createExample(
              '🐱 Bu kedi hangisiyle aynı?',
              '🐱 Başka kedi',
              'Aferin! İki kedi! Aynı! 🐱 🐱',
              '🐱 ←→ 🐱'
            ),
            createExample(
              '🐶 Bu köpek hangisiyle aynı?',
              '🐶 Başka köpek',
              'Süper! İki köpek! Aynı! 🐶 🐶',
              '🐶 ←→ 🐶'
            ),
            createExample(
              '🐠 Bu balık hangisiyle aynı?',
              '🐠 Başka balık',
              'Harika! İki balık! Aynı! 🐠 🐠',
              '🐠 ←→ 🐠'
            )
          ]
        }
      ),

      // ADIM 4: Aynı Meyveleri Eşleştir
      createStep(
        '🍎 Aynı Meyveleri Bul',
        `Aynı meyveleri eşleştirelim!

Bak! İki elma! 🍎 🍎
AYNI MEYVE!

İki muz! 🍌 🍌
AYNI MEYVE!

İki üzüm! 🍇 🍇
AYNI MEYVE!

Aynı meyve mi?
Eşleştir! 🎯`,
        'Aynı meyveleri bul!',
        {
          visual: `
╔═══════════════════════╗
║ AYNI MEYVE EŞLEŞTIR   ║
╠═══════════════════════╣
║  🍎  ←→  🍎           ║
║  (Elma)               ║
║                       ║
║  🍌  ←→  🍌           ║
║  (Muz)                ║
║                       ║
║  🍇  ←→  🍇           ║
║  (Üzüm)               ║
╚═══════════════════════╝`,
          tip: 'Aynı meyveler! Bak ve eşleştir! 🍎',
          examples: [
            createExample(
              '🍎 Elma hangisiyle aynı?',
              '🍎 Başka elma',
              'Bravo! İki elma! Aynı! 🍎 🍎',
              '🍎 ←→ 🍎'
            ),
            createExample(
              '🍌 Muz hangisiyle aynı?',
              '🍌 Başka muz',
              'Aferin! İki muz! Aynı! 🍌 🍌',
              '🍌 ←→ 🍌'
            )
          ]
        }
      ),

      // ADIM 5: Farklı Olanı Bul
      createStep(
        '❌ Farklı Olanı Bul',
        `Şimdi farklı olanı bulalım!

Bak:
🍎 🍎 🍎 🍌
Hangisi farklı? 🍌 FARKLI!

🐱 🐱 🐶 🐱
Hangisi farklı? 🐶 FARKLI!

⭐ ⭐ ⭐ ⭕
Hangisi farklı? ⭕ FARKLI!

Farklı olanı bul! 👀`,
        'Farklı olan hangisi?',
        {
          visual: `
╔════════════════════╗
║ FARKLI OLANI BUL   ║
╠════════════════════╣
║ 🍎 🍎 🍎 🍌       ║
║      ↑ Bu farklı!  ║
║                    ║
║ 🐱 🐱 🐶 🐱       ║
║      ↑ Bu farklı!  ║
║                    ║
║ ⭐ ⭐ ⭐ ⭕       ║
║      ↑ Bu farklı!  ║
╚════════════════════╝`,
          tip: 'Farklı olanı göster! 👆',
          examples: [
            createExample(
              '🍎 🍎 🍌 Hangisi farklı?',
              '🍌 Muz',
              'Aferin! Muz farklı! 🍌',
              '🍎 🍎 [🍌] ← Farklı!'
            ),
            createExample(
              '🐱 🐶 🐱 Hangisi farklı?',
              '🐶 Köpek',
              'Harika! Köpek farklı! 🐶',
              '🐱 [🐶] 🐱 ← Farklı!'
            ),
            createExample(
              '⭐ ⭐ ⭕ Hangisi farklı?',
              '⭕ Yuvarlak',
              'Süper! Yuvarlak farklı! ⭕',
              '⭐ ⭐ [⭕] ← Farklı!'
            )
          ]
        }
      ),

      // ADIM 6: Çift Eşleştirme
      createStep(
        '👟 Çiftleri Bul',
        `Çiftleri eşleştirelim!

İki ayakkabı! 👟 👟
BİR ÇİFT!

İki eldiven! 🧤 🧤
BİR ÇİFT!

İki çorap! 🧦 🧦
BİR ÇİFT!

Çiftleri bul! 🎯`,
        'Çiftleri eşleştir!',
        {
          visual: `
╔════════════════════╗
║   ÇİFTLER          ║
╠════════════════════╣
║  👟  ←→  👟       ║
║  (Ayakkabı çifti)  ║
║                    ║
║  🧤  ←→  🧤       ║
║  (Eldiven çifti)   ║
║                    ║
║  🧦  ←→  🧦       ║
║  (Çorap çifti)     ║
╚════════════════════╝`,
          tip: 'İki ayakkabı bir çift! 👟 👟',
          examples: [
            createExample(
              '👟 Bu ayakkabının çifti nerde?',
              '👟 Başka ayakkabı',
              'Bravo! İki ayakkabı bir çift! 👟 👟',
              '👟 ←→ 👟 = ÇİFT!'
            ),
            createExample(
              '🧤 Bu eldiven eksi mi?',
              'Hayır, bir çift olmalı',
              'Aferin! İki eldiven lazım! 🧤 🧤',
              '🧤 ←→ 🧤 = ÇİFT!'
            )
          ]
        }
      ),

      // ADIM 7: Büyük Eşleştirme Oyunu
      createStep(
        '🎮 Büyük Oyun!',
        `Hepsini karışık eşleştirelim!

SOLDAKILER:
🍎 Elma
🐱 Kedi
⭐ Yıldız
🍌 Muz

SAĞDAKİLER:
🐱 Kedi
🍎 Elma
🍌 Muz
⭐ Yıldız

Eşleştir! 🎯`,
        'Büyük eşleştirme oyunu!',
        {
          visual: `
╔═══════════════════════╗
║    EŞLEŞTIR!          ║
╠═══════════════════════╣
║  🍎  ─?─→  🐱        ║
║  🐱  ─?─→  🍎        ║
║  ⭐  ─?─→  🍌        ║
║  🍌  ─?─→  ⭐        ║
╚═══════════════════════╝

DOĞRU:
🍎 ←→ 🍎
🐱 ←→ 🐱
⭐ ←→ ⭐
🍌 ←→ 🍌`,
          tip: 'Aynı olanları bul! Çizgi çek! 🎯'
        }
      ),

      // ADIM 8: Pratik Zamanı
      createStep(
        '🏆 Pratik Zamanı!',
        `Harika gidiyorsun! 💝

Şimdi pratik yapalım!

👀 OYUNLAR:

1. Evde çift bul!
   (Ayakkabı, eldiven, çorap)

2. Aynı renk bul!
   (Kırmızı şeyler, mavi şeyler)

3. Aynı şekil bul!
   (Yuvarlak, kare)

4. Farklı olanı bul!

Sen şampiyonsun! 🏆`,
        'Pratik yap! Eşleştir!',
        {
          visual: `
EVDE OYUN:

📦 Oyuncak kutusuna bak!
• Aynı oyuncaklar var mı?
• Eşleştir!

👟 Ayakkabılara bak!
• Çiftlerini bul!

🎨 Renklere bak!
• Aynı renkleri grupla!`,
          tip: 'Her gün eşleştirme yap! Çok eğlenceli! 🎮'
        }
      )
    ],

    practiceQuestions: [
      createVisualQuestion(
        '🍎 Bu elma hangisiyle aynı?',
        '🍎 🍊 🍎 🍌',
        ['İlk elma 🍎', 'Portakal 🍊', 'İkinci elma 🍎', 'Muz 🍌'],
        'İkinci elma 🍎',
        'Aferin! İki elma aynı! 🍎 🍎',
        1
      ),

      createVisualQuestion(
        '🐱 Bu kedi hangisiyle aynı?',
        '🐱 🐶 🐱 🐭',
        ['İlk kedi 🐱', 'Köpek 🐶', 'İkinci kedi 🐱', 'Fare 🐭'],
        'İkinci kedi 🐱',
        'Harika! İki kedi aynı! 🐱 🐱',
        1
      ),

      createVisualQuestion(
        '⭐ Bu yıldız hangisiyle aynı?',
        '⭐ ⭕ ⭐ ⬜',
        ['İlk yıldız ⭐', 'Yuvarlak ⭕', 'İkinci yıldız ⭐', 'Kare ⬜'],
        'İkinci yıldız ⭐',
        'Süper! İki yıldız aynı! ⭐ ⭐',
        1
      ),

      createMultipleChoice(
        '🍎 🍎 🍎 🍌 Hangisi farklı?',
        ['Elma 🍎', 'Muz 🍌'],
        'Muz 🍌',
        'Bravo! Muz farklı! Diğerleri elma! 🍌',
        '🍎 🍎 🍎 [🍌] ← Farklı!',
        1,
        'Üç elma, bir muz! Hangisi farklı? 🍌'
      ),

      createMultipleChoice(
        '🐱 🐱 🐶 🐱 Hangisi farklı?',
        ['Kedi 🐱', 'Köpek 🐶'],
        'Köpek 🐶',
        'Aferin! Köpek farklı! Diğerleri kedi! 🐶',
        '🐱 🐱 [🐶] 🐱 ← Farklı!',
        1,
        'Üç kedi, bir köpek! Hangisi farklı? 🐶'
      ),

      createMultipleChoice(
        '⭐ ⭐ ⭕ ⭐ Hangisi farklı?',
        ['Yıldız ⭐', 'Yuvarlak ⭕'],
        'Yuvarlak ⭕',
        'Harika! Yuvarlak farklı! Diğerleri yıldız! ⭕',
        '⭐ ⭐ [⭕] ⭐ ← Farklı!',
        1
      ),

      createVisualQuestion(
        'Aynı renk hangisi? (Kırmızı)',
        '🍎 🍌 🍓',
        ['Elma 🍎', 'Muz 🍌', 'Çilek 🍓'],
        'Çilek 🍓',
        'Süper! Elma ve çilek kırmızı! 🍎 🍓',
        1
      ),

      createVisualQuestion(
        'Aynı renk hangisi? (Sarı)',
        '☀️ 🍎 ⭐',
        ['Güneş ☀️', 'Elma 🍎', 'Yıldız ⭐'],
        'Yıldız ⭐',
        'Bravo! Güneş ve yıldız sarı! ☀️ ⭐',
        1
      ),

      createMultipleChoice(
        '👟 İki ayakkabı ne yapar?',
        ['Bir çift 👟👟', 'Bir tane 👟'],
        'Bir çift 👟👟',
        'Aferin! İki ayakkabı bir çift yapar! 👟 👟',
        '👟 + 👟 = ÇİFT!',
        1,
        'İki ayakkabı birlikte çift olur! 👟'
      ),

      createMultipleChoice(
        '🧦 İki çorap ne yapar?',
        ['Bir çift 🧦🧦', 'Bir tane 🧦'],
        'Bir çift 🧦🧦',
        'Harika! İki çorap bir çift yapar! 🧦 🧦',
        '🧦 + 🧦 = ÇİFT!',
        1
      ),

      createVisualQuestion(
        '🍎 🍎 🍎 Kaç tane aynı?',
        '🍎 🍎 🍎',
        ['Üç tane 🍎', 'İki tane', 'Bir tane'],
        'Üç tane 🍎',
        'Mükemmel! Üç elma! Hepsi aynı! 🍎 🍎 🍎',
        1
      ),

      createVisualQuestion(
        '🐱 🐱 Kaç tane aynı?',
        '🐱 🐱',
        ['İki tane 🐱', 'Bir tane', 'Üç tane'],
        'İki tane 🐱',
        'Süper! İki kedi! Aynılar! 🐱 🐱',
        1
      )
    ],

    summary: `🎉 TEBRİKLER!

Sen harikasın! 💝
Eşleştirme şampiyonu! 🏆

Öğrendiklerimiz:
✅ Aynı renkleri eşleştirdin! 🎨
✅ Aynı şekilleri buldun! ⭕
✅ Aynı hayvanları eşleştirdin! 🐱
✅ Farklı olanı buldun! ❌
✅ Çiftleri eşleştirdin! 👟

🎯 EŞLEŞTIRME USTASI OLDUN!

Aferin sana! 👏
Her gün eşleştir! 🎮`,

    nextTopicPreview: 'Sonraki konuda GRUPLAMA öğreneceğiz! Hayvanlar, meyveler! 🦁🍎'
  }
};
