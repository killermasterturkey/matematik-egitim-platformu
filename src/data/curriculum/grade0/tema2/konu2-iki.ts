// DESTEK SINIFI - TEMA 2 - KONU 2: İKİ (2) Sayısı
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep } from '../../helpers';

export const konu2Iki: Topic = {
  id: 'iki-sayisi',
  title: 'İKİ (2) Sayısı',
  description: 'İki Tane - Çift - İkiz',
  emoji: '2️⃣',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['iki', '2', 'çift', 'ikiz'],
  objectives: [
    'İKİ sayısını tanır',
    '2 rakamını tanır',
    'İki tane kavramını anlar',
    'İki parmak gösterir'
  ],
  content: {
    introduction: `Merhaba canım! 💝

Bugün İKİ sayısını öğreneceğiz!

2️⃣ İKİ!
İki tane!
Çift!

Haydi! 🌟`,

    motivationQuote: 'İKİ çok kolay! İki göz, iki el! Sen yapabilirsin! 💝',

    funFacts: [
      '👀 İki gözün var!',
      '👂 İki kulağın var!',
      '✋ İki elin var!',
      '🦶 İki ayağın var!',
      '👟 İki ayakkabı bir çift!',
      '2️⃣ İKİ = ÇİFT!'
    ],

    steps: [
      createStep(
        '2️⃣ İKİ Nedir?',
        `İKİ! 2️⃣

İKİ = İki tane!
İKİ = Çift!
İKİ = İkiz!

Bak:
👀 İki göz
✋ İki el
🦶 İki ayak
👂 İki kulak

İKİ TANE! 2️⃣`,
        'İki tane demek çift demek!',
        {
          visual: `
╔═══════════════════╗
║    2️⃣ İKİ        ║
╠═══════════════════╣
║   ✌️ İKİ PARMAK  ║
║   👀 İKİ GÖZ     ║
║   ✋ İKİ EL      ║
║   🦶 İKİ AYAK    ║
╚═══════════════════╝`,
          tip: 'İki parmak göster! ✌️',
          examples: [
            createExample(
              'Kaç göz? 👀',
              'İki göz',
              'Aferin! İki göz! 👀',
              '👀 = İKİ = 2'
            ),
            createExample(
              'Kaç el? ✋✋',
              'İki el',
              'Harika! İki el! ✋✋',
              '✋✋ = İKİ = 2'
            )
          ]
        }
      ),

      createStep(
        '✏️ İKİ Rakamı: 2',
        `İKİ sayısının rakamı: 2

Bak nasıl yazılır:
2 = Kuğu gibi!
Eğri büğrü!

   ₂
  /
 /_

Kuğu boynu gibi! 🦢`,
        '2 rakamı kuğu gibi!',
        {
          visual: `
╔═══════════════════╗
║  2 NASIL YAZILIR? ║
╠═══════════════════╣
║       ₂           ║
║      / \          ║
║     /___          ║
║      2            ║
║   KUĞU GİBİ 🦢   ║
╚═══════════════════╝`,
          tip: 'Havada yaz! Kuğu gibi! ✏️'
        }
      ),

      createStep(
        '✌️ İKİ Parmak',
        `İKİ PARMAK! ✌️

Elini aç!
İki parmak kaldır!
✌️ İKİ!

İşaret ve orta parmak!
V harfi gibi!

✌️ = İKİ = 2`,
        'İki parmak göster!',
        {
          visual: `
╔════════════════════╗
║   İKİ PARMAK       ║
╠════════════════════╣
║       ✌️           ║
║   İŞARET + ORTA    ║
║    V GİBİ!         ║
║    ✌️ = 2️⃣        ║
╚════════════════════╝`,
          tip: 'V gibi! İki parmak! ✌️'
        }
      ),

      createStep(
        '🍎🍎 İKİ Tane',
        `İKİ TANE NESNELER!

🍎 🍎 İki elma
👀 İki göz
✋ ✋ İki el
👂 👂 İki kulak
👟 👟 İki ayakkabı

İKİ TANE! 2️⃣`,
        'İki tane olanları bul!',
        {
          visual: `
╔═══════════════════╗
║ İKİ TANE OLANLAR  ║
╠═══════════════════╣
║ 🍎 🍎 İki elma   ║
║ 👀 İki göz       ║
║ ✋ ✋ İki el     ║
║ 👂 👂 İki kulak ║
╚═══════════════════╝`,
          tip: 'Etrafında iki tane olanları bul! 👀'
        }
      ),

      createStep(
        '🎮 İKİ Oyunları',
        `İKİ OYUNLARI! 🎮

1. İki tane bul!
2. İki parmak göster! ✌️
3. İki say! 🍎 🍎
4. 2 yaz! ✏️

Eğlenceli! 🎉`,
        'Oyun oyna! İki öğren!',
        {
          visual: `
╔═══════════════════╗
║  İKİ OYUNLARI     ║
╠═══════════════════╣
║ 👀 BUL: İki tane! ║
║ ✌️ GÖSTER: İki!  ║
║ 🔢 SAY: İki!     ║
║ ✏️ YAZ: 2        ║
╚═══════════════════╝`,
          tip: 'Her gün oyun oyna! 🎮'
        }
      )
    ],

    practiceQuestions: [
      createVisualQuestion('Kaç parmak? ✌️', '✌️', ['Bir', 'İki ✌️', 'Üç'], 'İki ✌️', 'Aferin! İki parmak! ✌️', 1),
      createVisualQuestion('Kaç elma? 🍎🍎', '🍎 🍎', ['Bir', 'İki 2️⃣', 'Üç'], 'İki 2️⃣', 'Harika! İki elma! 🍎🍎', 1),
      createVisualQuestion('Kaç göz? 👀', '👀', ['Bir', 'İki 2️⃣', 'Üç'], 'İki 2️⃣', 'Süper! İki göz! 👀', 1),
      createMultipleChoice('Hangi rakam İKİ?', ['1', '2', '3', '4'], '2', 'Bravo! 2 = İKİ! 2️⃣', '2 = İKİ', 1),
      createMultipleChoice('2 nasıl okunur?', ['Bir', 'İki', 'Üç'], 'İki', 'Aferin! 2 = İKİ! 🎵', '2 = İKİ', 1),
      createVisualQuestion('Kaç el? ✋✋', '✋ ✋', ['Bir', 'İki 2️⃣', 'Üç'], 'İki 2️⃣', 'Harika! İki el! ✋✋', 1),
      createMultipleChoice('Kaç kulağın var? 👂', ['Bir', 'İki', 'Üç'], 'İki', 'Aferin! İki kulak! 👂👂', '👂 = İKİ', 1),
      createMultipleChoice('Kaç ayağın var? 🦶', ['Bir', 'İki', 'Üç'], 'İki', 'Süper! İki ayak! 🦶🦶', '🦶 = İKİ', 1),
      createVisualQuestion('İKİ parmak hangisi?', '☝️  ✌️  🤟', ['Bir', 'İki ✌️', 'Üç'], 'İki ✌️', 'Bravo! İki parmak! ✌️', 1),
      createVisualQuestion('Hangi sayı 2?', '1  2  3', ['1', '2', '3'], '2', 'Aferin! Bu iki! 2️⃣', 1)
    ],

    summary: `🎉 TEBRİKLER!

İKİ USTASI oldun! 2️⃣

Öğrendiklerimiz:
✅ İKİ sayısı!
✅ 2 rakamı!
✅ İki parmak! ✌️
✅ İki tane!

2️⃣ = İKİ = ÇİFT

Aferin! 👏`,

    nextTopicPreview: 'Sonraki konuda ÜÇ (3) öğreneceğiz! Üç top! ⚽⚽⚽'
  }
};
