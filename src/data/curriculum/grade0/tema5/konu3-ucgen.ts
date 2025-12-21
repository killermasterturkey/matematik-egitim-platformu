// DESTEK SINIFI - TEMA 5 - KONU 3: ÜÇGEN
// Üçgen şeklini, 3 köşe ve 3 kenar tanıma

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu3Ucgen: Topic = {
  id: 'ucgen',
  title: 'Üçgen - Üç Köşeli Şekil',
  description: '3 köşe, 3 kenar - Üçgen çok güzel!',
  emoji: '🔺',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['üçgen', 'üç köşe', 'üç kenar', 'sivri', 'pizza dilimi'],
  objectives: [
    'Üçgen şeklini tanıyacaksın',
    '3 köşe olduğunu bileceksin',
    '3 kenar olduğunu bileceksin',
    'Üçgen nesneleri bulacaksın'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün ÜÇGEN öğreneceğiz!\n\nÜçgen sivri bir şekil!\n\n🔺 3 köşe, 3 kenar!\n\nHazır mısın? Başlayalım! 🎨',

    motivationQuote: 'Üç köşe, üç kenar - sen de çizebilirsin! 💪',

    funFacts: [
      '🔺 Üçgenin 3 köşesi var!',
      '🔺 Üçgenin 3 kenarı var!',
      '🍕 Pizza dilimi üçgen!',
      '🏠 Ev çatısı üçgen!',
      '🎄 Noel ağacı üçgen!',
      '🚩 Bayrak üçgen olabilir!',
      '🔼 Yukarı ok üçgen!',
      '⚠️ Uyarı işareti üçgen!',
      '🏔️ Dağ üçgen gibi!',
      '🎪 Sirk çadırı üçgen!'
    ],

    tips: [
      '💡 Köşeleri say: 1, 2, 3!',
      '💡 Kenarları say: 1, 2, 3!',
      '💡 Pizza dilimi gibi düşün!',
      '💡 Üç parmaklarınla üçgen yap!'
    ],

    steps: [
      // ADIM 1: ÜÇGEN NEDİR?
      createStep(
        'Üçgen Nedir?',
        '🔺 ÜÇGEN çok özel bir şekil!\n\nBir varmış bir yokmuş...\n\nÜç köşeli bir şekil varmış.\n\nAdı ÜÇGEN imiş! 🔺\n\n┌─────────────────────────────────────┐\n│                                     │\n│            🔺                       │\n│                                     │\n│      Bu bir ÜÇGEN!                  │\n│                                     │\n│      3 köşesi var!                  │\n│                                     │\n│      3 kenarı var!                  │\n│                                     │\n└─────────────────────────────────────┘\n\nÜçgen sivridir!\n\nKareden farklı! ⬜ ≠ 🔺\n\nGüzel değil mi? 💝',
        '🔺 = Üçgen = 3 köşe!',
        'Parmaklarınla üçgen şekli yap!',
        {
          visual: '🔺 ÜÇGEN\n\nÖzellikleri:\n✓ 3 köşe\n✓ 3 kenar\n✓ Sivridir\n✓ Dik durabilir',
          examples: [
            createExample(
              'Üçgenin kaç köşesi var?',
              '3 köşe!',
              'Üçgen 3 köşelidir! 🔺 Say: 1, 2, 3!',
              '🔺 = 3 köşe',
              ['Köşe say!', '1, 2, 3!', 'Toplam 3!']
            )
          ],
          tip: 'Parmaklarınla üçgen şekli yap! 3 köşe! 🔺'
        }
      ),

      // ADIM 2: 3 KÖŞE SAYALIM
      createStep(
        'Üç Köşe - 1, 2, 3!',
        '🔢 Şimdi köşeleri sayalım!\n\nÜçgen 3 köşelidir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│               ●  ← 1. köşe          │\n│              /  \\                   │\n│             /    \\                  │\n│  2. köşe → ●──────●  ← 3. köşe     │\n│                                     │\n└─────────────────────────────────────┘\n\nBirlikte sayalım:\n\n"Bir... iki... üç!" 🤟\n\n3 köşe! 🔺\n\nHarika! 🌟',
        '🤟 3 parmak = 3 köşe!',
        'Köşeleri say: 1, 2, 3!',
        {
          visual: 'KÖŞE SAYMA:\n\n     ●\n    / \\\n   /   \\\n  ●─────●\n\n1️⃣ Üst köşe\n2️⃣ Sol alt köşe\n3️⃣ Sağ alt köşe\n\nToplam: 3 köşe!',
          examples: [
            createExample(
              'Üçgenin köşelerini say!',
              '3 köşe!',
              'Bir, iki, üç! 🔺 = 3 köşe!',
              '● ● ● = 3',
              ['1. köşe!', '2. köşe!', '3. köşe!']
            )
          ],
          tip: 'Parmaklarınla göster - 3 parmak = 3 köşe! 🤟'
        }
      ),

      // ADIM 3: 3 KENAR SAYALIM
      createStep(
        'Üç Kenar - 1, 2, 3!',
        '📏 Şimdi kenarları sayalım!\n\nÜçgen 3 kenarlıdır!\n\n┌─────────────────────────────────────┐\n│                                     │\n│               ●                     │\n│         1.   / \\   2.               │\n│         kenar/   \\kenar             │\n│            /       \\                │\n│           ●─────────●               │\n│             3. kenar                │\n│                                     │\n└─────────────────────────────────────┘\n\nBirlikte sayalım:\n\n"Bir... iki... üç!" 🤟\n\n3 kenar! 🔺\n\nMuhteşem! ⭐',
        '🤟 3 parmak = 3 kenar!',
        'Kenarları say: 1, 2, 3!',
        {
          visual: 'KENAR SAYMA:\n\n     ●\n  (1)/ \\(2)\n   /   \\\n  ●─────●\n    (3)\n\n1️⃣ Sol kenar\n2️⃣ Sağ kenar\n3️⃣ Alt kenar\n\nToplam: 3 kenar!',
          examples: [
            createExample(
              'Üçgenin kenarlarını say!',
              '3 kenar!',
              'Bir, iki, üç! 🔺 = 3 kenar!',
              '─ ─ ─ = 3',
              ['1. kenar!', '2. kenar!', '3. kenar!']
            )
          ],
          tip: 'Parmağınla kenarları takip et! 📏'
        }
      ),

      // ADIM 4: PİZZA DİLİMİ - LEZZETLİ ÜÇGEN
      createStep(
        'Pizza Dilimi - Lezzetli Üçgen',
        '🍕 PİZZA DİLİMİ!\n\nPizza dilimi üçgendir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│            🍕                       │\n│                                     │\n│      Pizza dilimi sivri!            │\n│                                     │\n│      3 köşesi var!                  │\n│                                     │\n│      ÜÇGEN gibi!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nPizza dilimi lezzetli! 😋\n\nPizza dilimi ÜÇGEN! 🔺',
        '🍕 Pizza dilimi = Üçgen!',
        'Pizza dilimi hayal et!',
        {
          visual: '🍕 PİZZA DİLİMİ\n\n     ●\n    /🍕\\\n   /   \\\n  ●─────●\n\n3 köşe!\n3 kenar!\nÜÇGEN! 🔺',
          examples: [
            createExample(
              'Pizza dilimi hangi şekildir?',
              'Üçgen!',
              'Pizza dilimi sivridir! 🍕 = Üçgen! 🔺',
              '🍕 → 🔺',
              ['Dilim sivri!', '3 köşe!', 'Üçgen şekli!']
            )
          ],
          tip: 'Pizzayı böl - her dilim üçgen! 🍕'
        }
      ),

      // ADIM 5: EV ÇATISI - ÜÇGEN
      createStep(
        'Ev Çatısı - Üçgen Çatı',
        '🏠 EV ÇATISI!\n\nÇatı üçgen gibidir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│            🏠                       │\n│                                     │\n│       Çatı sivri!                   │\n│                                     │\n│       3 köşesi var!                 │\n│                                     │\n│       ÜÇGEN gibi!                   │\n│                                     │\n└─────────────────────────────────────┘\n\nÇatı bizi korur! ☔\n\nÇatı ÜÇGEN şeklinde! 🔺',
        '🏠 Çatı = Üçgen!',
        'Evlere bak - çatı üçgen!',
        {
          visual: '🏠 EV ÇATISI\n\n     ●\n    /🏠\\\n   /   \\\n  ●─────●\n  │     │\n\nÇatı üçgen!\nEvi korur!\n🔺',
          examples: [
            createExample(
              'Ev çatısı hangi şekildir?',
              'Üçgen!',
              'Çatı sivridir! 🏠 = Üçgen! 🔺',
              '🏠 → 🔺',
              ['Çatı sivri!', '3 köşe!', 'Üçgen şekli!']
            )
          ],
          tip: 'Dışarı çık - evlerin çatısına bak! 🏠'
        }
      ),

      // ADIM 6: DAĞ - DOĞAL ÜÇGEN
      createStep(
        'Dağ - Büyük Üçgen',
        '🏔️ DAĞ!\n\nDağ üçgen gibidir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│            🏔️                      │\n│                                     │\n│       Dağ sivri!                    │\n│                                     │\n│       Tepesi üçgen!                 │\n│                                     │\n│       ÜÇGEN gibi!                   │\n│                                     │\n└─────────────────────────────────────┘\n\nDağ çok yüksek! ⛰️\n\nDağ ÜÇGEN şeklinde! 🔺',
        '🏔️ Dağ = Üçgen!',
        'Dağı hayal et - sivri!',
        {
          visual: '🏔️ DAĞ\n\n     ●⛰️\n    / \\\n   /   \\\n  /     \\\n ●───────●\n\nDağ sivri!\nÜçgen gibi!\n🔺',
          examples: [
            createExample(
              'Dağ hangi şekildir?',
              'Üçgen!',
              'Dağ sivridir! 🏔️ = Üçgen gibi! 🔺',
              '🏔️ → 🔺',
              ['Dağ sivri!', 'Tepesi üçgen!', 'Üçgen şekli!']
            )
          ],
          tip: 'Dağ resimleri bul - hepsi üçgen! 🏔️'
        }
      ),

      // ADIM 7: ÜÇGEN ÇİZELİM
      createStep(
        'Üçgen Çizelim!',
        '🎨 Şimdi üçgen çizeceğiz!\n\nKolay!\n\nHazır mısın? ✏️\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1. Bir nokta koy (üst)  ●         │\n│                                     │\n│   2. Sol alta git  /                │\n│                                     │\n│   3. Sağa çiz  ─                    │\n│                                     │\n│   4. Yukarı çık  \\                  │\n│                                     │\n│   5. Üçgen oldu! 🔺                 │\n│                                     │\n└─────────────────────────────────────┘\n\nAferin! 👏\n\nŞimdi sen çiz! ✏️',
        '✏️ Üçgen çizme zamanı!',
        '3 çizgi çiz!',
        {
          visual: 'ÜÇGEN ÇİZME:\n\n1️⃣    ●\n2️⃣   /\n3️⃣  ●─\n4️⃣  ●─●\n5️⃣  ●─●\n    / \\\n   ●───●\n\nBitti! 🔺',
          examples: [
            createExample(
              'Üçgen nasıl çizilir?',
              '3 çizgi çizeriz!',
              '3 çizgi! / ─ \\ = 🔺',
              '✏️ → 🔺',
              ['Yukarı koy!', 'Aşağı çiz!', 'Birleştir!', 'Üçgen oldu!']
            )
          ],
          tip: 'Her gün üçgen çiz - pratik yap! ✏️'
        }
      ),

      // ADIM 8: ÜÇGEN ŞARKISI
      createStep(
        'Üçgen Şarkısı',
        '🎵 ÜÇGEN ŞARKISI! 🎵\n\n(Şarkı söyleyelim!)\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Üç köşe, üç kenar                 │\n│   Üçgen şekli çok güzel! 🔺         │\n│                                     │\n│   Pizza gibi, çatı gibi             │\n│   Dağ gibi sivri! 🏔️               │\n│                                     │\n│   Bir, iki, üç                      │\n│   Üçgen çok güzel! 🔺               │\n│                                     │\n└─────────────────────────────────────┘\n\n🎵 Hep birlikte söyle! 🎵\n\nKöşeleri say! 1-2-3! 🤟\n\nÜçgen çok güzel! 🎪',
        '🎵 Şarkı söyle!',
        'Üçgen şarkısını söyle!',
        {
          visual: 'HAREKETLİ OYUN:\n\n🔺 Üçgen şeklinde yürü!\n🤟 3 parmak göster!\n🎨 Üçgen çiz!\n🎵 Şarkı söyle!\n\nEğlen!',
          examples: [
            createExample(
              'Üçgenin kaç köşesi var?',
              'Üç köşe!',
              'Üç köşe, üç kenar! 🔺',
              '🔺 = 3',
              ['1 köşe!', '2 köşe!', '3 köşe!']
            )
          ],
          tip: 'Aileninle şarkı söyle! 🎵'
        }
      )
    ],

    // PRATİK SORULAR
    practiceQuestions: [
      createMultipleChoice(
        'Hangi şekil üçgendir? 🔺',
        ['🔺', '⭕', '⬜', '⬛'],
        '🔺',
        'Sivri olan üçgendir! 🔺',
        '🔺',
        1,
        'Sivri olanı seç!'
      ),

      createMultipleChoice(
        'Üçgenin kaç köşesi var? 🤔',
        ['1 köşe', '2 köşe', '3 köşe', '4 köşe'],
        '3 köşe',
        'Üçgenin 3 köşesi vardır! 🔺 = 3 köşe!',
        '🔺',
        1,
        'Köşeleri say: 1, 2, 3!'
      ),

      createMultipleChoice(
        'Üçgenin kaç kenarı var?',
        ['1 kenar', '2 kenar', '3 kenar', '4 kenar'],
        '3 kenar',
        'Üçgenin 3 kenarı vardır! 🔺 = 3 kenar!',
        '🔺',
        1,
        'Kenarları say: 1, 2, 3!'
      ),

      createMultipleChoice(
        'Hangisi üçgen şeklindedir? 🎯',
        ['🍕 Pizza dilimi', '⚽ Top', '📺 TV', '🎈 Balon'],
        '🍕 Pizza dilimi',
        'Pizza dilimi sivridir! 🍕 = Üçgen! 🔺',
        '🍕',
        1,
        'Sivri olanı bul!'
      ),

      createFillBlank(
        'Üçgen ___ köşelidir.',
        ['3', 'üç'],
        'Üçgen 3 köşelidir! 🔺',
        '🔺',
        1,
        'Kaç köşe var?'
      ),

      createMultipleChoice(
        '🏠 Ev çatısı hangi şekildir?',
        ['Üçgen', 'Daire', 'Kare', 'Yıldız'],
        'Üçgen',
        'Çatı sivridir! 🏠 = Üçgen! 🔺',
        '🏠',
        1,
        'Çatı sivri!'
      ),

      createMultipleChoice(
        '🏔️ Dağ hangi şekildir?',
        ['Üçgen', 'Daire', 'Kare', 'Yıldız'],
        'Üçgen',
        'Dağ sivridir! 🏔️ = Üçgen gibi! 🔺',
        '🏔️',
        1,
        'Dağ sivri!'
      ),

      createFillBlank(
        'Üçgen ___ kenarlıdır.',
        ['3', 'üç'],
        'Üçgen 3 kenarlıdır! 🔺',
        '🔺',
        1,
        'Kaç kenar var?'
      ),

      createMultipleChoice(
        'Hangisi üçgen değildir?',
        ['⭕ Daire', '🔺 Üçgen', '🍕 Pizza dilimi', '🏠 Ev çatısı'],
        '⭕ Daire',
        'Daire yuvarlaktır! ⭕ Üçgen değildir! Üçgen sivridir! 🔺',
        '⭕ ≠ 🔺',
        1,
        'Yuvarlak olanı bul!'
      ),

      createMultipleChoice(
        'Üçgen ve kare arasındaki fark nedir?',
        ['Üçgen 3 köşe, kare 4 köşe', 'İkisi de aynı', 'Üçgen 4 köşe', 'Kare 3 köşe'],
        'Üçgen 3 köşe, kare 4 köşe',
        'Üçgen 3 köşelidir 🔺, kare 4 köşelidir ⬜!',
        '🔺 ≠ ⬜',
        1,
        'Üçgen 3, kare 4!'
      ),

      createMultipleChoice(
        'Pizza dilimi neden üçgen şeklindedir?',
        ['Pizzayı böldüğümüzde üçgen olur', 'Pizza yuvarlaktır', 'Pizza karedir', 'Bilmiyorum'],
        'Pizzayı böldüğümüzde üçgen olur',
        'Yuvarlak pizzayı böldüğümüzde dilimler üçgen olur! 🍕 → 🔺',
        '🍕',
        1,
        'Pizza böl - dilim üçgen!'
      ),

      createMultipleChoice(
        'Üçgenin köşelerini nasıl sayarız?',
        ['1, 2, 3', '1, 2', '1, 2, 3, 4', '1, 2, 3, 4, 5'],
        '1, 2, 3',
        'Bir, iki, üç! 🔺 = 3 köşe!',
        '🔺',
        1,
        'Köşeleri say!'
      ),

      createMultipleChoice(
        'Üçgen çizmek için kaç çizgi çizeriz?',
        ['3 çizgi', '2 çizgi', '4 çizgi', '5 çizgi'],
        '3 çizgi',
        '3 çizgi çizeriz! / ─ \\ = 🔺',
        '🔺',
        1,
        '3 çizgi = 1 üçgen!'
      ),

      createMultipleChoice(
        'Hangisi üçgen şeklindedir?',
        ['⚠️ Uyarı işareti', '🎈 Balon', '⚽ Top', '☀️ Güneş'],
        '⚠️ Uyarı işareti',
        'Uyarı işareti sivridir! ⚠️ = Üçgen! 🔺',
        '⚠️',
        1,
        'Sivri olanı seç!'
      ),

      createFillBlank(
        'Dağ ___ şeklindedir.',
        ['üçgen', 'sivri'],
        'Dağ üçgen şeklindedir! 🏔️ = 🔺',
        '🏔️',
        1,
        'Dağın şekli ne?'
      )
    ],

    summary: '🎉 Bugün üçgen öğrendin!\n\n✅ Üçgen sivridir 🔺\n✅ 3 köşesi var\n✅ 3 kenarı var\n✅ Pizza dilimi üçgen 🍕\n✅ Ev çatısı üçgen 🏠\n✅ Dağ üçgen gibi 🏔️\n\nEtrafındaki üçgenleri bul! 🔍\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste DİKDÖRTGEN öğreneceğiz! Uzun kare gibi!'
  }
};
