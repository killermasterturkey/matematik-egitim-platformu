// DESTEK SINIFI - TEMA 1 - KONU 4: Gruplama
// Sınıflandırma ve kategorize etme becerisi
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep } from '../../helpers';

export const konu4Gruplama: Topic = {
  id: 'gruplama',
  title: 'Gruplama',
  description: 'Aynı Olanları Grupla - Hayvanlar, Meyveler, Renkler',
  emoji: '📦',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['gruplama', 'sınıflandırma', 'kategori', 'toplama'],
  objectives: [
    'Hayvanları gruplar',
    'Meyveleri gruplar',
    'Renklere göre gruplar',
    'Şekillere göre gruplar'
  ],
  content: {
    introduction: `Merhaba canım! 💝

Bugün GRUPLAMA öğreneceğiz!

Aynı şeyleri bir araya koyacağız!
Gruplar yapacağız! 📦

Çok eğlenceli! 🌟
Haydi başlayalım!`,

    motivationQuote: 'Gruplama çok kolay! Aynıları birlikte koy! Sen yapabilirsin! 💪',

    funFacts: [
      '🦁 Hayvanlar grubu çok kalabalık!',
      '🍎 Meyveler lezzetli bir grup!',
      '🎨 Renkler güzel gruplar yapar!',
      '📦 Gruplama düzen demek!',
      '🧸 Oyuncaklar bir grupta!',
      '👕 Giysiler bir grupta!'
    ],

    steps: [
      // ADIM 1: Hayvanları Grupla
      createStep(
        '🦁 Hayvanları Grupla',
        `HAYVANLAR GRUBU! 🦁

Hayvanları bir araya koyalım!

🐱 Kedi - HAYVAN!
🐶 Köpek - HAYVAN!
🐰 Tavşan - HAYVAN!
🐘 Fil - HAYVAN!
🦁 Aslan - HAYVAN!

Hepsi aynı grupta!
HAYVANLAR! 🦁`,
        'Hayvanları bir gruba koy!',
        {
          visual: `
╔═════════════════════╗
║  HAYVANLAR GRUBU    ║
╠═════════════════════╣
║   🐱  🐶  🐰       ║
║   🐘  🦁  🐯       ║
║   🐻  🐼  🦊       ║
║   🐨  🐸  🐠       ║
╚═════════════════════╝

Hepsi HAYVAN! 🦁`,
          tip: 'Hayvanları bir yere topla! 🐱🐶🐰',
          examples: [
            createExample(
              '🐱 Kedi hangi grupta?',
              'Hayvanlar grubunda',
              'Aferin! Kedi bir hayvandır! 🐱',
              '🐱 → HAYVANLAR GRUBU'
            ),
            createExample(
              '🐶 Köpek hangi grupta?',
              'Hayvanlar grubunda',
              'Harika! Köpek bir hayvandır! 🐶',
              '🐶 → HAYVANLAR GRUBU'
            ),
            createExample(
              '🐘 Fil hangi grupta?',
              'Hayvanlar grubunda',
              'Süper! Fil bir hayvandır! 🐘',
              '🐘 → HAYVANLAR GRUBU'
            )
          ]
        }
      ),

      // ADIM 2: Meyveleri Grupla
      createStep(
        '🍎 Meyveleri Grupla',
        `MEYVELER GRUBU! 🍎

Meyveleri bir araya koyalım!

🍎 Elma - MEYVE!
🍌 Muz - MEYVE!
🍊 Portakal - MEYVE!
🍇 Üzüm - MEYVE!
🍓 Çilek - MEYVE!

Hepsi aynı grupta!
MEYVELER! 🍎`,
        'Meyveleri bir gruba koy!',
        {
          visual: `
╔═════════════════════╗
║   MEYVELER GRUBU    ║
╠═════════════════════╣
║   🍎  🍌  🍊       ║
║   🍇  🍓  🍉       ║
║   🍑  🍒  🥝       ║
║   🍍  🥭  🍋       ║
╚═════════════════════╝

Hepsi MEYVE! 🍎`,
          tip: 'Meyveleri bir yere topla! 🍎🍌🍊',
          examples: [
            createExample(
              '🍎 Elma hangi grupta?',
              'Meyveler grubunda',
              'Bravo! Elma bir meyvedir! 🍎',
              '🍎 → MEYVELER GRUBU'
            ),
            createExample(
              '🍌 Muz hangi grupta?',
              'Meyveler grubunda',
              'Aferin! Muz bir meyvedir! 🍌',
              '🍌 → MEYVELER GRUBU'
            ),
            createExample(
              '🍇 Üzüm hangi grupta?',
              'Meyveler grubunda',
              'Harika! Üzüm bir meyvedir! 🍇',
              '🍇 → MEYVELER GRUBU'
            )
          ]
        }
      ),

      // ADIM 3: Renklere Göre Grupla
      createStep(
        '🎨 Renklere Göre Grupla',
        `RENKLERE GÖRE GRUPLAMA! 🎨

Aynı renkteki şeyleri birlikte koy!

KIRMIZI GRUP:
🍎 Elma 🍓 Çilek ❤️ Kalp

MAVİ GRUP:
🌊 Deniz 💙 Kalp 🐟 Balık

SARI GRUP:
☀️ Güneş 🍌 Muz ⭐ Yıldız

YEŞİL GRUP:
🍀 Yaprak 🌳 Ağaç 🍏 Elma`,
        'Aynı renkleri grupla!',
        {
          visual: `
╔════ KIRMIZI ════╗
║  🍎  🍓  ❤️     ║
╚═════════════════╝

╔════ MAVİ ════╗
║  🌊  💙  🐟   ║
╚═══════════════╝

╔════ SARI ════╗
║  ☀️  🍌  ⭐   ║
╚═══════════════╝

╔════ YEŞİL ════╗
║  🍀  🌳  🍏    ║
╚════════════════╝`,
          tip: 'Kırmızıları bir yere! Mavileri bir yere! 🎨',
          examples: [
            createExample(
              '🍎 Elma hangi renk grubunda?',
              'Kırmızı grubu',
              'Aferin! Elma kırmızı grupta! 🍎',
              '🍎 → KIRMIZI GRUP'
            ),
            createExample(
              '🍌 Muz hangi renk grubunda?',
              'Sarı grubu',
              'Harika! Muz sarı grupta! 🍌',
              '🍌 → SARI GRUP'
            ),
            createExample(
              '🍀 Yaprak hangi renk grubunda?',
              'Yeşil grubu',
              'Süper! Yaprak yeşil grupta! 🍀',
              '🍀 → YEŞİL GRUP'
            )
          ]
        }
      ),

      // ADIM 4: Büyük-Küçük Gruplama
      createStep(
        '📏 Büyük-Küçük Gruplama',
        `BÜYÜK ve KÜÇÜK GRUPLARI! 📏

Büyükleri bir araya!
Küçükleri bir araya!

BÜYÜK GRUP:
🐘 Fil 🏔️ Dağ 🏠 Ev 🚗 Araba

KÜÇÜK GRUP:
🐭 Fare 🌼 Çiçek 🐜 Karınca 🍓 Çilek

Büyükler bir yerde!
Küçükler bir yerde!`,
        'Büyük ve küçük grupları ayır!',
        {
          visual: `
╔════ BÜYÜK ════╗
║  🐘  🏔️  🏠   ║
║  🚗  🌳  📺   ║
╚═══════════════╝

╔════ KÜÇÜK ════╗
║  🐭  🌼  🐜   ║
║  🍓  ⭐  🧸   ║
╚═══════════════╝`,
          tip: 'Büyükleri bir tarafa! Küçükleri başka tarafa! 📏',
          examples: [
            createExample(
              '🐘 Fil hangi grupta?',
              'Büyük grup',
              'Bravo! Fil büyük grupta! 🐘',
              '🐘 → BÜYÜK GRUP'
            ),
            createExample(
              '🐭 Fare hangi grupta?',
              'Küçük grup',
              'Aferin! Fare küçük grupta! 🐭',
              '🐭 → KÜÇÜK GRUP'
            )
          ]
        }
      ),

      // ADIM 5: Şekillere Göre Grupla
      createStep(
        '⭕ Şekillere Göre Grupla',
        `ŞEKİLLERE GÖRE GRUPLAMA! ⭕

Aynı şekilleri birlikte koy!

YUVARLAK GRUP:
⭕ ⭕ ⭕

KARE GRUP:
⬜ ⬜ ⬜

YILDIZ GRUP:
⭐ ⭐ ⭐

KALP GRUP:
❤️ ❤️ ❤️`,
        'Aynı şekilleri grupla!',
        {
          visual: `
╔════ YUVARLAK ════╗
║  ⭕  ⭕  ⭕      ║
╚══════════════════╝

╔════ KARE ════╗
║  ⬜  ⬜  ⬜   ║
╚═══════════════╝

╔════ YILDIZ ════╗
║  ⭐  ⭐  ⭐    ║
╚════════════════╝

╔════ KALP ════╗
║  ❤️  ❤️  ❤️   ║
╚═══════════════╝`,
          tip: 'Yuvarlakları bir yere! Kareleri bir yere! ⭕',
          examples: [
            createExample(
              '⭕ Yuvarlak hangi grupta?',
              'Yuvarlak grup',
              'Harika! Yuvarlak grupta! ⭕',
              '⭕ → YUVARLAK GRUP'
            ),
            createExample(
              '⬜ Kare hangi grupta?',
              'Kare grup',
              'Süper! Kare grupta! ⬜',
              '⬜ → KARE GRUP'
            )
          ]
        }
      ),

      // ADIM 6: İçinde-Dışında
      createStep(
        '📦 İçinde ve Dışında',
        `İÇİNDE ve DIŞINDA! 📦

Kutu var!
İçinde ne var?
Dışında ne var?

KUTU İÇİNDE:
🍎 🍌 🍊 (Meyveler)

KUTU DIŞINDA:
🐱 🐶 🐰 (Hayvanlar)

Gruplayalım!`,
        'İçinde ve dışında grupla!',
        {
          visual: `
╔═══════════════╗
║  KUTU İÇİ     ║
║               ║
║  🍎  🍌  🍊  ║
║               ║
╚═══════════════╝

KUTU DIŞI:
🐱  🐶  🐰`,
          tip: 'Meyveleri kutuya koy! Hayvanlar dışarda! 📦',
          examples: [
            createExample(
              '🍎 Elma nerede olmalı?',
              'Kutu içinde (meyve)',
              'Aferin! Elma kutu içinde! 🍎',
              '🍎 → KUTU İÇİ'
            ),
            createExample(
              '🐱 Kedi nerede olmalı?',
              'Kutu dışında (hayvan)',
              'Harika! Kedi dışarda! 🐱',
              '🐱 → KUTU DIŞI'
            )
          ]
        }
      ),

      // ADIM 7: Karışık Gruplama
      createStep(
        '🎯 Karışık Gruplama',
        `KARIŞIK GRUPLAMA OYUNU! 🎯

Şimdi hepsini karıştırdık!
Gruplayabilir misin?

KARIŞIK:
🍎 🐱 🍌 🐶 🍊 🐰

GRUPLA:

HAYVANLAR:
🐱 🐶 🐰

MEYVELER:
🍎 🍌 🍊

Aferin! Başardın! 🎉`,
        'Karışık olanları grupla!',
        {
          visual: `
KARIŞIK:
🍎 🐱 🍌 🐶 🍊 🐰
❓ ❓ ❓ ❓ ❓ ❓

AYIR:
╔═══ HAYVANLAR ═══╗
║  🐱  🐶  🐰     ║
╚═════════════════╝

╔═══ MEYVELER ═══╗
║  🍎  🍌  🍊    ║
╚════════════════╝`,
          tip: 'Hayvanları bir yere! Meyveleri bir yere! 🎯',
          examples: [
            createExample(
              'Bu karışık! Grupla: 🍎 🐱 🍌',
              'Hayvan: 🐱, Meyve: 🍎 🍌',
              'Süper! Kedi hayvan, elma ve muz meyve! 🎉',
              '🐱 → HAYVAN | 🍎 🍌 → MEYVE'
            )
          ]
        }
      ),

      // ADIM 8: Pratik Zamanı
      createStep(
        '🏆 Pratik Zamanı!',
        `Harika gidiyorsun! 💝

Şimdi pratik yapalım!

EVDE GRUPLAMA:

1. Oyuncakları grupla!
   (Arabalar, bebekler, toplar)

2. Giysileri grupla!
   (Tişörtler, pantolonlar, çoraplar)

3. Kitapları grupla!
   (Boyama, hikaye, öğrenme)

4. Yemekleri grupla!
   (Meyveler, sebzeler, atıştırmalıklar)

Sen gruplama uzmanısın! 🌟`,
        'Pratik yap! Grupla!',
        {
          visual: `
ODANDA:

📦 Oyuncak Kutusu
• Arabaları bir yere!
• Bebekleri bir yere!
• Topları bir yere!

👕 Dolap
• Tişörtleri bir yere!
• Pantolonları bir yere!

📚 Kitaplık
• Kitapları grupla!`,
          tip: 'Her gün bir şey grupla! Düzen çok güzel! 📦'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        '🐱 Kedi hangi grupta olmalı?',
        ['Hayvanlar 🦁', 'Meyveler 🍎', 'Renkler 🎨'],
        'Hayvanlar 🦁',
        'Aferin! Kedi hayvanlar grubunda! 🐱',
        '🐱 → HAYVANLAR',
        1,
        'Kedi bir hayvandır! 🐱'
      ),

      createMultipleChoice(
        '🍎 Elma hangi grupta olmalı?',
        ['Hayvanlar 🦁', 'Meyveler 🍎', 'Şekiller ⭕'],
        'Meyveler 🍎',
        'Harika! Elma meyveler grubunda! 🍎',
        '🍎 → MEYVELER',
        1,
        'Elma bir meyvedir! 🍎'
      ),

      createMultipleChoice(
        '🍌 Muz hangi grupta?',
        ['Hayvanlar 🦁', 'Meyveler 🍎', 'Giysiler 👕'],
        'Meyveler 🍎',
        'Bravo! Muz meyveler grubunda! 🍌',
        '🍌 → MEYVELER',
        1
      ),

      createMultipleChoice(
        '🐶 Köpek hangi grupta?',
        ['Hayvanlar 🦁', 'Meyveler 🍎', 'Oyuncaklar 🧸'],
        'Hayvanlar 🦁',
        'Süper! Köpek hayvanlar grubunda! 🐶',
        '🐶 → HAYVANLAR',
        1
      ),

      createVisualQuestion(
        'Hangisi hayvan grubu?',
        '🐱 🐶 🐰    |    🍎 🍌 🍊',
        ['Solda (Kedi, Köpek, Tavşan)', 'Sağda (Elma, Muz, Portakal)'],
        'Solda (Kedi, Köpek, Tavşan)',
        'Aferin! 🐱 🐶 🐰 hayvanlar! 🦁',
        1
      ),

      createVisualQuestion(
        'Hangisi meyve grubu?',
        '🐱 🐶 🐰    |    🍎 🍌 🍊',
        ['Solda (Kedi, Köpek, Tavşan)', 'Sağda (Elma, Muz, Portakal)'],
        'Sağda (Elma, Muz, Portakal)',
        'Harika! 🍎 🍌 🍊 meyveler! 🍎',
        1
      ),

      createMultipleChoice(
        '🍓 Kırmızı çilek hangi renk grubunda?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Kırmızı ❤️',
        'Bravo! Çilek kırmızı grupta! 🍓 ❤️',
        '🍓 → KIRMIZI GRUP',
        1,
        'Çilek kırmızı! 🍓'
      ),

      createMultipleChoice(
        '🍌 Sarı muz hangi renk grubunda?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Sarı 💛',
        'Süper! Muz sarı grupta! 🍌 💛',
        '🍌 → SARI GRUP',
        1
      ),

      createMultipleChoice(
        '🍀 Yeşil yaprak hangi renk grubunda?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Yeşil 💚',
        'Harika! Yaprak yeşil grupta! 🍀 💚',
        '🍀 → YEŞİL GRUP',
        1
      ),

      createMultipleChoice(
        '🐘 Fil hangi grupta?',
        ['Büyük grup 🐘', 'Küçük grup 🐭'],
        'Büyük grup 🐘',
        'Aferin! Fil büyük grupta! 🐘',
        '🐘 → BÜYÜK GRUP',
        1,
        'Fil çok büyük! 🐘'
      ),

      createMultipleChoice(
        '🐭 Fare hangi grupta?',
        ['Büyük grup 🐘', 'Küçük grup 🐭'],
        'Küçük grup 🐭',
        'Bravo! Fare küçük grupta! 🐭',
        '🐭 → KÜÇÜK GRUP',
        1
      ),

      createVisualQuestion(
        'Hangileri aynı grupta? (Hayvanlar)',
        '🐱 🍎 🐶',
        ['Kedi ve Köpek 🐱🐶', 'Kedi ve Elma 🐱🍎', 'Köpek ve Elma 🐶🍎'],
        'Kedi ve Köpek 🐱🐶',
        'Mükemmel! Kedi ve köpek hayvan! 🐱 🐶',
        1
      ),

      createVisualQuestion(
        'Hangisi farklı grupta?',
        '🍎 🍌 🐱 🍊',
        ['Elma 🍎', 'Muz 🍌', 'Kedi 🐱', 'Portakal 🍊'],
        'Kedi 🐱',
        'Süper! Kedi hayvan, diğerleri meyve! 🐱',
        1
      )
    ],

    summary: `🎉 TEBRİKLER!

Sen muhteşemsin! 💝
Gruplama uzmanı oldun! 📦

Öğrendiklerimiz:
✅ Hayvanları gruplayabiliyorsun! 🦁
✅ Meyveleri gruplayabiliyorsun! 🍎
✅ Renklere göre gruplayabiliyorsun! 🎨
✅ Büyük-küçük ayırabiliyorsun! 📏
✅ Şekillere göre gruplayabiliyorsun! ⭕

🏆 GRUPLAMA ŞAMPIYONU!

Aferin sana! 👏
Her gün bir şey grupla! 📦
Düzen çok güzel! 🌟`,

    nextTopicPreview: 'Sonraki konuda DİKKAT ve ODAKLANMA oyunları! Farklı olanı bul! 🔍'
  }
};
