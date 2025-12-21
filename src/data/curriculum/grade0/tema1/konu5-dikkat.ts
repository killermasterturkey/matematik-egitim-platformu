// DESTEK SINIFI - TEMA 1 - KONU 5: Dikkat ve Odaklanma
// Dikkat, gözlem ve konsantrasyon becerileri
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep } from '../../helpers';

export const konu5Dikkat: Topic = {
  id: 'dikkat-odaklanma',
  title: 'Dikkat ve Odaklanma',
  description: 'Farklı Olanı Bul - Eksik Olanı Bul - Dikkatli Bak',
  emoji: '🔍',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['dikkat', 'odaklanma', 'farklı', 'eksik', 'gözlem'],
  objectives: [
    'Farklı olanı bulur',
    'Eksik olanı bulur',
    'Dikkatli gözlem yapar',
    'Basit labirent çözer'
  ],
  content: {
    introduction: `Merhaba canım! 💝

Bugün DİKKAT oyunları oynayacağız!

👀 Gözlerinle iyi bak!
🔍 Farklı olanı bul!
🎯 Eksik olanı bul!

Çok eğlenceli! 🌟
Sen yapabilirsin!`,

    motivationQuote: 'Dikkatli bakarsan her şeyi bulursun! Sen çok zekisin! 👀',

    funFacts: [
      '👀 Gözlerimiz çok hızlı fark eder!',
      '🧠 Beyin farklılıkları seviyor!',
      '🔍 Dedektif gibi olacağız!',
      '🎯 Dikkat oyunu eğlenceli!',
      '🦅 Kartal çok dikkatli bakar!',
      '🐝 Arılar çiçekleri çok iyi bulur!'
    ],

    steps: [
      // ADIM 1: Farklı Olanı Bul
      createStep(
        '🔍 Farklı Olanı Bul',
        `FARKLI OLANI BUL OYUNU! 🔍

Dikkatli bak!
Hangisi farklı?

🍎 🍎 🍎 🍌
Hangisi farklı? → 🍌 MUZ!

🐱 🐱 🐶 🐱
Hangisi farklı? → 🐶 KÖPEK!

⭐ ⭐ ⭕ ⭐
Hangisi farklı? → ⭕ YUVARLAK!

Bak ve bul! 👀`,
        'Farklı olanı dikkatli bak ve bul!',
        {
          visual: `
╔════════════════════╗
║  FARKLI OLANI BUL  ║
╠════════════════════╣
║                    ║
║  🍎 🍎 🍎 🍌      ║
║           ↑        ║
║        FARKLI!     ║
║                    ║
║  🐱 🐱 🐶 🐱      ║
║        ↑           ║
║     FARKLI!        ║
╚════════════════════╝`,
          tip: 'Üçü aynı, biri farklı! Bul! 🔍',
          examples: [
            createExample(
              '🍎 🍎 🍎 🍌 Hangisi farklı?',
              '🍌 Muz',
              'Aferin! Muz farklı! Üç elma var! 🍌',
              '🍎 🍎 🍎 [🍌] ← FARKLI!'
            ),
            createExample(
              '🐱 🐱 🐶 Hangisi farklı?',
              '🐶 Köpek',
              'Harika! Köpek farklı! İki kedi var! 🐶',
              '🐱 🐱 [🐶] ← FARKLI!'
            ),
            createExample(
              '⭐ ⭐ ⭕ Hangisi farklı?',
              '⭕ Yuvarlak',
              'Süper! Yuvarlak farklı! İki yıldız var! ⭕',
              '⭐ ⭐ [⭕] ← FARKLI!'
            )
          ]
        }
      ),

      // ADIM 2: Renkte Farklı Olanı Bul
      createStep(
        '🎨 Renkte Farklı Olan',
        `RENKTE FARKLI OLANI BUL! 🎨

Renkler karıştı!
Hangisi farklı renk?

❤️ ❤️ ❤️ 💙
Hangisi farklı? → 💙 MAVİ!

💛 💛 💚 💛
Hangisi farklı? → 💚 YEŞİL!

🍎 🍎 🍎 🍌
Hangisi farklı? → 🍌 SARI!

Bak renklere! 🎨`,
        'Farklı rengi bul!',
        {
          visual: `
╔═══════════════════╗
║ RENKTE FARKLI     ║
╠═══════════════════╣
║                   ║
║ ❤️ ❤️ ❤️ 💙     ║
║          ↑        ║
║       FARKLI!     ║
║                   ║
║ 🍎 🍎 🍎 🍌     ║
║          ↑        ║
║       FARKLI!     ║
╚═══════════════════╝`,
          tip: 'Üçü kırmızı, biri mavi! Bul! 🎨',
          examples: [
            createExample(
              '❤️ ❤️ ❤️ 💙 Hangisi farklı renk?',
              '💙 Mavi',
              'Bravo! Mavi farklı! Üçü kırmızı! 💙',
              '❤️ ❤️ ❤️ [💙] ← FARKLI RENK!'
            ),
            createExample(
              '🍎 🍎 🍌 Hangisi farklı renk?',
              '🍌 Muz (sarı)',
              'Aferin! Muz sarı, elmalar kırmızı! 🍌',
              '🍎 🍎 [🍌] ← FARKLI!'
            )
          ]
        }
      ),

      // ADIM 3: Büyüklükte Farklı Olan
      createStep(
        '📏 Büyüklükte Farklı Olan',
        `BÜYÜKLÜKTE FARKLI OLANI BUL! 📏

Boyutlara bak!
Hangisi farklı?

🐘 🐭 🐭 🐭
Hangisi farklı? → 🐘 BÜYÜK FİL!

⚽ 🎾 🎾 🎾
Hangisi farklı? → ⚽ BÜYÜK TOP!

🍎 🍎 🍎 🍓
Hangisi farklı? → 🍓 KÜÇÜK ÇİLEK!

Bak boyutlara! 📏`,
        'Farklı boyutu bul!',
        {
          visual: `
╔═════════════════════╗
║  BOYUTTA FARKLI     ║
╠═════════════════════╣
║                     ║
║  🐘  🐭  🐭  🐭    ║
║  ↑                  ║
║ BÜYÜK!              ║
║                     ║
║  ⚽  🎾  🎾  🎾    ║
║  ↑                  ║
║ BÜYÜK!              ║
╚═════════════════════╝`,
          tip: 'Fil büyük! Fareler küçük! 🐘🐭',
          examples: [
            createExample(
              '🐘 🐭 🐭 Hangisi farklı?',
              '🐘 Fil (büyük)',
              'Harika! Fil büyük, fareler küçük! 🐘',
              '[🐘] 🐭 🐭 ← FİL BÜYÜK!'
            ),
            createExample(
              '⚽ 🎾 🎾 Hangisi farklı?',
              '⚽ Futbol topu (büyük)',
              'Süper! Futbol topu büyük! ⚽',
              '[⚽] 🎾 🎾 ← BÜYÜK TOP!'
            )
          ]
        }
      ),

      // ADIM 4: Eksik Olanı Bul
      createStep(
        '❓ Eksik Olanı Bul',
        `EKSİK OLANI BUL! ❓

Bir şey eksik!
Ne eksik?

🍎 🍊 ___ 🍇
Ne eksik? → 🍌 MUZ EKSİK!

🐱 🐶 ___ 🐭
Ne eksik? → 🐰 TAVŞAN EKSİK!

1-2-3-___-5
Ne eksik? → 4 EKSİK!

Eksik olanı bul! 🔍`,
        'Eksik olanı bul ve tamamla!',
        {
          visual: `
╔═══════════════════╗
║  EKSİK OLANI BUL  ║
╠═══════════════════╣
║                   ║
║  🍎 🍊 [?] 🍇    ║
║         ↑         ║
║      EKSİK!       ║
║                   ║
║  1 - 2 - [?] - 4  ║
║          ↑        ║
║       3 EKSİK!    ║
╚═══════════════════╝`,
          tip: '1, 2, sonra ne? 3! 🔢',
          examples: [
            createExample(
              '🍎 ___ 🍇 Ne eksik?',
              '🍌 veya başka meyve',
              'Aferin! Bir meyve eksik! 🍌',
              '🍎 [🍌] 🍇 ← EKSİK!'
            ),
            createExample(
              '1 - 2 - ___ - 4 Ne eksik?',
              '3',
              'Harika! 3 eksik! 1-2-3-4! 3️⃣',
              '1 - 2 - [3] - 4'
            )
          ]
        }
      ),

      // ADIM 5: Sıra Bozuğu Bul
      createStep(
        '🔀 Sıra Bozuğu Bul',
        `SIRA BOZUĞUNU BUL! 🔀

Sıra karıştı!
Hangisi yanlış yerde?

1️⃣ 2️⃣ 4️⃣ 3️⃣ 5️⃣
Hangisi yanlış? → 4 ve 3 yer değiştirmeli!

🍎 🐱 🍌 🍊
Hangisi yanlış? → 🐱 hayvan!

KÜÇÜK-ORTA-BÜYÜK sırası:
🐭 🐘 🐰
Hangisi yanlış? → 🐘 en sonda olmalı!`,
        'Sırayı düzelt!',
        {
          visual: `
╔════════════════════╗
║  SIRA BOZUĞU       ║
╠════════════════════╣
║                    ║
║  1 - 2 - 4 - 3 - 5 ║
║          ↕         ║
║     KARIŞMIŞ!      ║
║                    ║
║ DOĞRUSU:           ║
║  1 - 2 - 3 - 4 - 5 ║
╚════════════════════╝`,
          tip: '1, 2, 3, 4, 5 sırada! 🔢',
          examples: [
            createExample(
              '1-2-4-3-5 Hangisi yanlış?',
              '3 ve 4 yer değiştirmeli',
              'Aferin! 3 ve 4 yer değiştirmeli! 3️⃣4️⃣',
              '1-2-[3]-[4]-5 ← DOĞRU SIRA'
            )
          ]
        }
      ),

      // ADIM 6: Basit Labirent
      createStep(
        '🌀 Basit Labirent',
        `BASİT LABİRENT! 🌀

Yolu bul!
🐭 Fare peynire gitsin! 🧀

BAŞLA: 🐭
↓
→ → →
    ↓
    🧀 BİTİR!

Yolu takip et! 👆`,
        'Labirent yolunu bul!',
        {
          visual: `
╔═══════════════════╗
║   LABİRENT        ║
╠═══════════════════╣
║                   ║
║  🐭 → → → ↓      ║
║           ↓       ║
║           🧀      ║
║                   ║
╚═══════════════════╝

YOL:
🐭 → → → ↓ → 🧀`,
          tip: 'Parmağınla yolu takip et! 👆',
          examples: [
            createExample(
              'Fare peynire nasıl gider?',
              'Sağa git, sonra aşağı git',
              'Harika! Yolu buldun! 🐭 → 🧀',
              '🐭 → → ↓ 🧀'
            )
          ]
        }
      ),

      // ADIM 7: Aynı ve Farklı
      createStep(
        '⚖️ Aynı mı Farklı mı?',
        `AYNI MI FARKLI MI? ⚖️

Karşılaştır!
Aynı mı? Farklı mı?

🍎 = 🍎 → AYNI! ✅
🍎 ≠ 🍌 → FARKLI! ❌

🐱 = 🐱 → AYNI! ✅
🐱 ≠ 🐶 → FARKLI! ❌

⭐ = ⭐ → AYNI! ✅
⭐ ≠ ⭕ → FARKLI! ❌

Karşılaştır! 👀`,
        'Aynı mı farklı mı karar ver!',
        {
          visual: `
╔══════════════════╗
║  KARŞILAŞTIR     ║
╠══════════════════╣
║                  ║
║  🍎 = 🍎 ✅     ║
║  (AYNI)          ║
║                  ║
║  🍎 ≠ 🍌 ❌     ║
║  (FARKLI)        ║
╚══════════════════╝`,
          tip: 'Elma elmaya eşit! Elma muza eşit değil! 🍎',
          examples: [
            createExample(
              '🍎 = 🍎 Doğru mu?',
              'Evet, doğru ✅',
              'Aferin! İki elma aynı! ✅',
              '🍎 = 🍎 ✅ AYNI!'
            ),
            createExample(
              '🍎 = 🍌 Doğru mu?',
              'Hayır, yanlış ❌',
              'Harika! Elma ve muz farklı! ❌',
              '🍎 ≠ 🍌 ❌ FARKLI!'
            )
          ]
        }
      ),

      // ADIM 8: Pratik Zamanı
      createStep(
        '🎯 Pratik Zamanı!',
        `Harika gidiyorsun! 💝

DİKKAT OYUNLARI:

1. Farklı olanı bul!
   (Oyuncaklar, giysiler)

2. Eksik olanı bul!
   (Çorap çiftleri, ayakkabılar)

3. Labirent çiz ve çöz!
   (Kağıda çiz)

4. Aynı-farklı oyunu!
   (Ailece oyna)

SEN DİKKAT USTASISIN! 🏆

Her gün dikkat oyunu oyna!
Çok eğlenceli! 🎮`,
        'Pratik yap! Dikkatli ol!',
        {
          visual: `
EVDE OYUNLAR:

👀 FARKLI BUL:
• Odana bak!
• Farklı olanı bul!

🔍 EKSİK BUL:
• Çorap çiftleri tam mı?
• Eksik var mı?

🌀 LABİRENT:
• Kağıda çiz!
• Yolu bul!`,
          tip: 'Her gün bir dikkat oyunu! Çok eğlenceli! 🎯'
        }
      )
    ],

    practiceQuestions: [
      createVisualQuestion(
        '🍎 🍎 🍎 🍌 Hangisi farklı?',
        '🍎 🍎 🍎 🍌',
        ['Elma 🍎', 'Muz 🍌'],
        'Muz 🍌',
        'Aferin! Muz farklı! Üç elma var! 🍌',
        1
      ),

      createVisualQuestion(
        '🐱 🐱 🐶 🐱 Hangisi farklı?',
        '🐱 🐱 🐶 🐱',
        ['Kedi 🐱', 'Köpek 🐶'],
        'Köpek 🐶',
        'Harika! Köpek farklı! Üç kedi var! 🐶',
        1
      ),

      createVisualQuestion(
        '⭐ ⭐ ⭕ ⭐ Hangisi farklı?',
        '⭐ ⭐ ⭕ ⭐',
        ['Yıldız ⭐', 'Yuvarlak ⭕'],
        'Yuvarlak ⭕',
        'Süper! Yuvarlak farklı! Üç yıldız var! ⭕',
        1
      ),

      createVisualQuestion(
        '❤️ ❤️ ❤️ 💙 Hangisi farklı renk?',
        '❤️ ❤️ ❤️ 💙',
        ['Kırmızı kalp ❤️', 'Mavi kalp 💙'],
        'Mavi kalp 💙',
        'Bravo! Mavi farklı! Üçü kırmızı! 💙',
        1
      ),

      createVisualQuestion(
        '💛 💛 💚 💛 Hangisi farklı renk?',
        '💛 💛 💚 💛',
        ['Sarı 💛', 'Yeşil 💚'],
        'Yeşil 💚',
        'Aferin! Yeşil farklı! Üçü sarı! 💚',
        1
      ),

      createVisualQuestion(
        '🐘 🐭 🐭 🐭 Hangisi farklı büyüklükte?',
        '🐘 🐭 🐭 🐭',
        ['Fil 🐘 (büyük)', 'Fare 🐭 (küçük)'],
        'Fil 🐘 (büyük)',
        'Harika! Fil büyük, fareler küçük! 🐘',
        1
      ),

      createVisualQuestion(
        '⚽ 🎾 🎾 🎾 Hangisi farklı büyüklükte?',
        '⚽ 🎾 🎾 🎾',
        ['Futbol topu ⚽ (büyük)', 'Tenis topu 🎾 (küçük)'],
        'Futbol topu ⚽ (büyük)',
        'Süper! Futbol topu büyük! ⚽',
        1
      ),

      createMultipleChoice(
        '🍎 ___ 🍇 Ne eksik?',
        ['Bir meyve 🍌', 'Bir hayvan 🐱', 'Bir araba 🚗'],
        'Bir meyve 🍌',
        'Bravo! Bir meyve eksik! 🍌',
        '🍎 [🍌] 🍇',
        1,
        'Meyve eksik! 🍎🍌🍇'
      ),

      createMultipleChoice(
        '1 - 2 - ___ - 4 Ne eksik?',
        ['3', '5', '6'],
        '3',
        'Aferin! 3 eksik! 1-2-3-4! 3️⃣',
        '1 - 2 - [3] - 4',
        1,
        '1, 2 sonra ne? 3! 🔢'
      ),

      createMultipleChoice(
        '🍎 = 🍎 Doğru mu?',
        ['Doğru ✅', 'Yanlış ❌'],
        'Doğru ✅',
        'Harika! İki elma aynı! ✅',
        '🍎 = 🍎 ✅',
        1,
        'Aynılar! ✅'
      ),

      createMultipleChoice(
        '🍎 = 🍌 Doğru mu?',
        ['Doğru ✅', 'Yanlış ❌'],
        'Yanlış ❌',
        'Süper! Elma ve muz farklı! ❌',
        '🍎 ≠ 🍌 ❌',
        1,
        'Farklılar! ❌'
      ),

      createVisualQuestion(
        '🐱 🐱 🐱 🐱 Hepsi aynı mı?',
        '🐱 🐱 🐱 🐱',
        ['Evet, hepsi aynı ✅', 'Hayır, farklı ❌'],
        'Evet, hepsi aynı ✅',
        'Mükemmel! Dört kedi! Hepsi aynı! 🐱',
        1
      ),

      createVisualQuestion(
        '🍎 🍌 🍊 🍇 Hepsi aynı mı?',
        '🍎 🍌 🍊 🍇',
        ['Evet, hepsi aynı ✅', 'Hayır, farklı ❌'],
        'Hayır, farklı ❌',
        'Bravo! Hepsi farklı meyve! Ama hepsi meyve! 🍎',
        1
      )
    ],

    summary: `🎉 TEBRİKLER!

Sen muhteşemsin! 💝
DİKKAT USTASI oldun! 🏆

Öğrendiklerimiz:
✅ Farklı olanı bulabiliyorsun! 🔍
✅ Eksik olanı bulabiliyorsun! ❓
✅ Renkte farklı olanı görüyorsun! 🎨
✅ Büyüklükte farklı olanı ayırt ediyorsun! 📏
✅ Basit labirent çözebiliyorsun! 🌀
✅ Aynı-farklı ayırabiliyorsun! ⚖️

👀 DİKKATLİ GÖZLEM ŞAMPIYONU!

Aferin sana! 👏
Her gün dikkat oyunları oyna! 🎯
Gözlerinle iyi bak! 👀`,

    nextTopicPreview: 'Artık TEMA 1 bitti! Sırada TEMA 2: SAYILARLA TANIŞMA! 1️⃣2️⃣3️⃣4️⃣5️⃣'
  }
};
