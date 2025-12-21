// DESTEK SINIFI - TEMA 5 - KONU 2: KARE
// Kare şeklini, 4 köşe ve 4 kenar tanıma

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu2Kare: Topic = {
  id: 'kare',
  title: 'Kare - Dört Köşeli Şekil',
  description: '4 köşe, 4 kenar - Kare çok güzel!',
  emoji: '⬜',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['kare', 'dört köşe', 'dört kenar', 'eşit', 'köşeli'],
  objectives: [
    'Kare şeklini tanıyacaksın',
    '4 köşe olduğunu bileceksin',
    '4 kenar olduğunu bileceksin',
    'Kare nesneleri bulacaksın'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün KARE öğreneceğiz!\n\nKare köşeli bir şekil!\n\n⬜ 4 köşe, 4 kenar!\n\nHazır mısın? Başlayalım! 🎨',

    motivationQuote: 'Dört köşe, dört kenar - sen de yapabilirsin! 💪',

    funFacts: [
      '⬜ Karenin 4 köşesi var!',
      '⬜ Karenin 4 kenarı var!',
      '⬜ Tüm kenarlar eşit uzunlukta!',
      '📺 TV kare gibidir!',
      '🪟 Pencere kare gibidir!',
      '📦 Kutu kare gibidir!',
      '🎁 Hediye kutusu kare!',
      '🧊 Buz küpü kare!',
      '🎲 Zar kare!',
      '⬛ Satranç tahtası karelerden oluşur!'
    ],

    tips: [
      '💡 Köşeleri say: 1, 2, 3, 4!',
      '💡 Kenarları say: 1, 2, 3, 4!',
      '💡 Daire yuvarlak, kare köşeli!',
      '💡 Parmaklarınla kare şekli yap!'
    ],

    steps: [
      // ADIM 1: KARE NEDİR?
      createStep(
        'Kare Nedir?',
        '⬜ KARE çok özel bir şekil!\n\nBir varmış bir yokmuş...\n\nDört köşeli bir şekil varmış.\n\nAdı KARE imiş! ⬜\n\n┌─────────────────────────────────────┐\n│                                     │\n│            ⬜                       │\n│                                     │\n│      Bu bir KARE!                   │\n│                                     │\n│      4 köşesi var!                  │\n│                                     │\n│      4 kenarı var!                  │\n│                                     │\n└─────────────────────────────────────┘\n\nKare köşelidir!\n\nDaireden farklı! ⭕ ≠ ⬜\n\nGüzel değil mi? 💝',
        '⬜ = Kare = 4 köşe!',
        'Parmaklarınla kare şekli yap!',
        {
          visual: '⬜ KARE\n\nÖzellikleri:\n✓ 4 köşe\n✓ 4 kenar\n✓ Tüm kenarlar eşit\n✓ Köşelidir',
          examples: [
            createExample(
              'Karenin kaç köşesi var?',
              '4 köşe!',
              'Kare 4 köşelidir! ⬜ Say: 1, 2, 3, 4!',
              '⬜ = 4 köşe',
              ['Köşe say!', '1, 2, 3, 4!', 'Toplam 4!']
            )
          ],
          tip: 'Parmaklarınla kare şekli yap! 4 köşe! ⬜'
        }
      ),

      // ADIM 2: 4 KÖŞE SAYALIM
      createStep(
        'Dört Köşe - 1, 2, 3, 4!',
        '🔢 Şimdi köşeleri sayalım!\n\nKare 4 köşelidir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│        1. köşe → ●────●  ← 2. köşe │\n│                 │    │              │\n│                 │    │              │\n│        4. köşe → ●────●  ← 3. köşe │\n│                                     │\n└─────────────────────────────────────┘\n\nBirlikte sayalım:\n\n"Bir... iki... üç... dört!" 🖖\n\n4 köşe! ⬜\n\nHarika! 🌟',
        '🖖 4 parmak = 4 köşe!',
        'Köşeleri say: 1, 2, 3, 4!',
        {
          visual: 'KÖŞE SAYMA:\n\n  ●────●\n  │    │  \n  │    │  \n  ●────●\n\n1️⃣ Üst sol\n2️⃣ Üst sağ\n3️⃣ Alt sağ\n4️⃣ Alt sol\n\nToplam: 4 köşe!',
          examples: [
            createExample(
              'Karenin köşelerini say!',
              '4 köşe!',
              'Bir, iki, üç, dört! ⬜ = 4 köşe!',
              '● ● ● ● = 4',
              ['1. köşe!', '2. köşe!', '3. köşe!', '4. köşe!']
            )
          ],
          tip: 'Parmaklarınla göster - 4 parmak = 4 köşe! 🖖'
        }
      ),

      // ADIM 3: 4 KENAR SAYALIM
      createStep(
        'Dört Kenar - 1, 2, 3, 4!',
        '📏 Şimdi kenarları sayalım!\n\nKare 4 kenarlıdır!\n\n┌─────────────────────────────────────┐\n│                                     │\n│            1. kenar                 │\n│        ●────────────●               │\n│        │            │               │\n│  4.    │            │  2.           │\n│ kenar  │            │ kenar         │\n│        │            │               │\n│        ●────────────●               │\n│            3. kenar                 │\n│                                     │\n└─────────────────────────────────────┘\n\nBirlikte sayalım:\n\n"Bir... iki... üç... dört!" 🖖\n\n4 kenar! ⬜\n\nMuhteşem! ⭐',
        '🖖 4 parmak = 4 kenar!',
        'Kenarları say: 1, 2, 3, 4!',
        {
          visual: 'KENAR SAYMA:\n\n  ─────  (1)\n  │   │  \n (4) (2)  \n  │   │  \n  ─────  (3)\n\n1️⃣ Üst kenar\n2️⃣ Sağ kenar\n3️⃣ Alt kenar\n4️⃣ Sol kenar\n\nToplam: 4 kenar!',
          examples: [
            createExample(
              'Karenin kenarlarını say!',
              '4 kenar!',
              'Bir, iki, üç, dört! ⬜ = 4 kenar!',
              '─ ─ ─ ─ = 4',
              ['1. kenar!', '2. kenar!', '3. kenar!', '4. kenar!']
            )
          ],
          tip: 'Parmağınla kenarları takip et! 📏'
        }
      ),

      // ADIM 4: TV - BİR KARE ÖRNEĞİ
      createStep(
        'TV - Evdeki Kare',
        '📺 TELEVİZYON!\n\nTV kare gibidir!\n\n(Bazı TV\'ler dikdörtgen ama şimdi kare düşün!)\n\n┌─────────────────────────────────────┐\n│                                     │\n│            📺                       │\n│                                     │\n│      TV köşelidir!                  │\n│                                     │\n│      4 köşesi var!                  │\n│                                     │\n│      KARE gibi!                     │\n│                                     │\n└─────────────────────────────────────┘\n\nTV izlemek eğlenceli! 📺\n\nTV KARE şeklinde! ⬜',
        '📺 TV = Kare gibi!',
        'TV\'ye bak - köşeli!',
        {
          visual: '📺 TV\n\n  ●────●\n  │📺  │  \n  │    │  \n  ●────●\n\n4 köşe!\n4 kenar!\nKARE! ⬜',
          examples: [
            createExample(
              'TV hangi şekildir?',
              'Kare!',
              'TV köşelidir! 📺 = Kare gibi! ⬜',
              '📺 → ⬜',
              ['TV köşeli!', '4 köşe!', 'Kare şekli!']
            )
          ],
          tip: 'Evindeki TV\'ye bak - köşeli! 📺'
        }
      ),

      // ADIM 5: PENCERE - KARE ŞEKLİ
      createStep(
        'Pencere - Işık Veren Kare',
        '🪟 PENCERE!\n\nPencere kare gibidir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│            🪟                       │\n│                                     │\n│      Pencere köşeli!                │\n│                                     │\n│      4 köşesi var!                  │\n│                                     │\n│      KARE gibi!                     │\n│                                     │\n└─────────────────────────────────────┘\n\nPencereden ışık gelir! ☀️\n\nPencere KARE şeklinde! ⬜',
        '🪟 Pencere = Kare!',
        'Pencereye bak - kare!',
        {
          visual: '🪟 PENCERE\n\n  ●────●\n  │☀️  │  \n  │    │  \n  ●────●\n\nIşık gelir!\n4 köşe!\nKARE! ⬜',
          examples: [
            createExample(
              'Pencere hangi şekildir?',
              'Kare!',
              'Pencere köşelidir! 🪟 = Kare! ⬜',
              '🪟 → ⬜',
              ['Pencere köşeli!', '4 köşe!', 'Kare şekli!']
            )
          ],
          tip: 'Odandaki pencereyi say - kaç köşe? 🪟'
        }
      ),

      // ADIM 6: KUTU - TAŞINABİLİR KARE
      createStep(
        'Kutu - Eşya Koyan Kare',
        '📦 KUTU!\n\nKutu kare gibidir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│            📦                       │\n│                                     │\n│      Kutu köşeli!                   │\n│                                     │\n│      4 köşesi var!                  │\n│                                     │\n│      KARE gibi!                     │\n│                                     │\n└─────────────────────────────────────┘\n\nKutuya eşya koyarız! 🎁\n\nKutu KARE şeklinde! ⬜',
        '📦 Kutu = Kare!',
        'Kutuya bak - kare!',
        {
          visual: '📦 KUTU\n\n  ●────●\n  │🎁  │  \n  │    │  \n  ●────●\n\nEşya konur!\n4 köşe!\nKARE! ⬜',
          examples: [
            createExample(
              'Kutu hangi şekildir?',
              'Kare!',
              'Kutu köşelidir! 📦 = Kare! ⬜',
              '📦 → ⬜',
              ['Kutu köşeli!', '4 köşe!', 'Kare şekli!']
            )
          ],
          tip: 'Evde kutu bul - köşeleri say! 📦'
        }
      ),

      // ADIM 7: KARE ÇİZELİM
      createStep(
        'Kare Çizelim!',
        '🎨 Şimdi kare çizeceğiz!\n\nKolay!\n\nHazır mısın? ✏️\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1. Bir yatay çizgi çiz ─          │\n│                                     │\n│   2. Aşağı in │                     │\n│                                     │\n│   3. Sola git ─                     │\n│                                     │\n│   4. Yukarı çık │                   │\n│                                     │\n│   5. Kare oldu! ⬜                  │\n│                                     │\n└─────────────────────────────────────┘\n\nAferin! 👏\n\nŞimdi sen çiz! ✏️',
        '✏️ Kare çizme zamanı!',
        '4 çizgi çiz!',
        {
          visual: 'KARE ÇİZME:\n\n1️⃣ ●────●\n2️⃣ ●────●\n       │\n3️⃣ ●────●\n   │    │\n4️⃣ ●────●\n   │    │\n5️⃣ ●────●\n\nBitti! ⬜',
          examples: [
            createExample(
              'Kare nasıl çizilir?',
              '4 çizgi çizeriz!',
              '4 eşit çizgi! ─ │ ─ │ = ⬜',
              '✏️ → ⬜',
              ['Yatay çiz!', 'Dikey çiz!', 'Tekrar et!', 'Kare oldu!']
            )
          ],
          tip: 'Her gün kare çiz - pratik yap! ✏️'
        }
      ),

      // ADIM 8: KARE ŞARKISI
      createStep(
        'Kare Şarkısı',
        '🎵 KARE ŞARKISI! 🎵\n\n(Şarkı söyleyelim!)\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Dört köşe, dört kenar             │\n│   Kare şekli çok güzel! ⬜          │\n│                                     │\n│   TV gibi, kutu gibi                │\n│   Pencere gibi köşeli! 📺           │\n│                                     │\n│   Bir, iki, üç, dört                │\n│   Kare çok güzel! ⬜                │\n│                                     │\n└─────────────────────────────────────┘\n\n🎵 Hep birlikte söyle! 🎵\n\nKöşeleri say! 1-2-3-4! 🖖\n\nKare çok güzel! 🎪',
        '🎵 Şarkı söyle!',
        'Kare şarkısını söyle!',
        {
          visual: 'HAREKETLİ OYUN:\n\n⬜ Kare şeklinde yürü!\n🖖 4 parmak göster!\n🎨 Kare çiz!\n🎵 Şarkı söyle!\n\nEğlen!',
          examples: [
            createExample(
              'Karenin kaç köşesi var?',
              'Dört köşe!',
              'Dört köşe, dört kenar! ⬜',
              '⬜ = 4',
              ['1 köşe!', '2 köşe!', '3 köşe!', '4 köşe!']
            )
          ],
          tip: 'Aileninle şarkı söyle! 🎵'
        }
      )
    ],

    // PRATİK SORULAR
    practiceQuestions: [
      createMultipleChoice(
        'Hangi şekil karedir? ⬜',
        ['⬜', '⭕', '🔺', '⬛'],
        '⬜',
        'Beyaz köşeli olan karedir! ⬜',
        '⬜',
        1,
        'Kare köşelidir!'
      ),

      createMultipleChoice(
        'Karenin kaç köşesi var? 🤔',
        ['2 köşe', '3 köşe', '4 köşe', '5 köşe'],
        '4 köşe',
        'Karenin 4 köşesi vardır! ⬜ = 4 köşe!',
        '⬜',
        1,
        'Köşeleri say: 1, 2, 3, 4!'
      ),

      createMultipleChoice(
        'Karenin kaç kenarı var?',
        ['2 kenar', '3 kenar', '4 kenar', '5 kenar'],
        '4 kenar',
        'Karenin 4 kenarı vardır! ⬜ = 4 kenar!',
        '⬜',
        1,
        'Kenarları say: 1, 2, 3, 4!'
      ),

      createMultipleChoice(
        'Hangisi kare şeklindedir? 🎯',
        ['📺 TV', '⚽ Top', '☀️ Güneş', '🎈 Balon'],
        '📺 TV',
        'TV köşelidir! 📺 = Kare! ⬜',
        '📺',
        1,
        'Köşeli olanı bul!'
      ),

      createFillBlank(
        'Kare ___ köşelidir.',
        ['4', 'dört'],
        'Kare 4 köşelidir! ⬜',
        '⬜',
        1,
        'Kaç köşe var?'
      ),

      createMultipleChoice(
        '🪟 Pencere hangi şekildir?',
        ['Kare', 'Daire', 'Üçgen', 'Yıldız'],
        'Kare',
        'Pencere köşelidir! 🪟 = Kare! ⬜',
        '🪟',
        1,
        'Pencere köşeli!'
      ),

      createMultipleChoice(
        '📦 Kutu hangi şekildir?',
        ['Kare', 'Daire', 'Üçgen', 'Yıldız'],
        'Kare',
        'Kutu köşelidir! 📦 = Kare! ⬜',
        '📦',
        1,
        'Kutu köşeli!'
      ),

      createFillBlank(
        'Kare ___ kenarlıdır.',
        ['4', 'dört'],
        'Kare 4 kenarlıdır! ⬜',
        '⬜',
        1,
        'Kaç kenar var?'
      ),

      createMultipleChoice(
        'Hangisi kare değildir?',
        ['⭕ Daire', '⬜ Kare', '📺 TV', '🪟 Pencere'],
        '⭕ Daire',
        'Daire yuvarlaktır! ⭕ Kare değildir! Kare köşelidir! ⬜',
        '⭕ ≠ ⬜',
        1,
        'Yuvarlak olanı bul!'
      ),

      createMultipleChoice(
        'Kare ve daire arasındaki fark nedir?',
        ['Kare köşeli, daire yuvarlak', 'İkisi de aynı', 'Kare yuvarlak', 'Daire köşeli'],
        'Kare köşeli, daire yuvarlak',
        'Kare köşelidir ⬜, daire yuvarlaktır ⭕!',
        '⬜ ≠ ⭕',
        1,
        'Kare köşeli, daire yuvarlak!'
      ),

      createMultipleChoice(
        'Karenin köşelerini nasıl sayarız?',
        ['1, 2, 3, 4', '1, 2', '1, 2, 3', '1, 2, 3, 4, 5'],
        '1, 2, 3, 4',
        'Bir, iki, üç, dört! ⬜ = 4 köşe!',
        '⬜',
        1,
        'Köşeleri say!'
      ),

      createMultipleChoice(
        'Kare çizmek için kaç çizgi çizeriz?',
        ['4 çizgi', '2 çizgi', '3 çizgi', '5 çizgi'],
        '4 çizgi',
        '4 çizgi çizeriz! ─ │ ─ │ = ⬜',
        '⬜',
        1,
        '4 çizgi = 1 kare!'
      ),

      createMultipleChoice(
        'Hangisi kare şeklindedir?',
        ['🎁 Hediye kutusu', '🎈 Balon', '⚽ Top', '☀️ Güneş'],
        '🎁 Hediye kutusu',
        'Hediye kutusu köşelidir! 🎁 = Kare! ⬜',
        '🎁',
        1,
        'Köşeli olanı seç!'
      ),

      createFillBlank(
        'Karenin tüm kenarları ___ uzunluktadır.',
        ['eşit', 'aynı'],
        'Karenin tüm kenarları eşittir! ⬜',
        '⬜',
        1,
        'Kenarlar nasıl?'
      ),

      createMultipleChoice(
        'Bir karede toplam kaç köşe ve kenar var?',
        ['4 köşe + 4 kenar = 8', '2 köşe + 2 kenar = 4', '3 köşe + 3 kenar = 6', '5 köşe + 5 kenar = 10'],
        '4 köşe + 4 kenar = 8',
        '4 köşe + 4 kenar = 8 tane! ⬜',
        '⬜',
        1,
        'Hepsini say!'
      )
    ],

    summary: '🎉 Bugün kare öğrendin!\n\n✅ Kare köşelidir ⬜\n✅ 4 köşesi var\n✅ 4 kenarı var\n✅ TV kare gibi 📺\n✅ Pencere kare gibi 🪟\n✅ Kutu kare gibi 📦\n\nEtrafındaki kareleri bul! 🔍\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste ÜÇGEN öğreneceğiz! 3 köşe, 3 kenar! 🔺'
  }
};
