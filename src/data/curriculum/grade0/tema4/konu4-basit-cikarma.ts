// DESTEK SINIFI - TEMA 4 - KONU 4: 2-1 VE 3-1 (EN BASİT ÇIKARMALAR)
// İlk kez "-" işaretini görüyoruz!

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu4BasitCikarma: Topic = {
  id: 'basit-cikarma',
  title: '2-1 ve 3-1',
  description: 'En kolay çıkarmalar! 2-1=1, 3-1=2! ➖',
  emoji: '➖',
  duration: '45 dk',
  difficulty: 1,
  keywords: ['çıkarma', '2-1', '3-1', 'eksi'],
  objectives: [
    '2-1=1 öğreneceksin',
    '3-1=2 öğreneceksin',
    '"-" işaretini tanıyacaksın',
    'Parmakla çıkarma yapacaksın'
  ],

  content: {
    introduction: '➖ Merhaba!\n\nBugün ÇIKARMA öğreneceğiz!\n\nBak bu işaret: -\n\nBu "eksi" demek!\n\n2 - 1 = 1\n\nİki eksi bir eşittir bir!\n\nÇok kolay! 😊\n\nHazır mısın? Başlayalım!',

    motivationQuote: 'Çıkarma çok kolay! Sen başarabilirsin! 💝',

    funFacts: [
      '➖ - işareti "eksi" okunur!',
      '2-1=1 en kolay çıkarma!',
      '🖐️ Parmakla çıkarma yapabilirsin!',
      '➖ Çıkarma = ayırma!',
      '= işareti "eşittir" demek!',
      '💝 Çıkarmak da kolay!'
    ],

    steps: [
      createStep(
        '- İşareti - EKSİ',
        'Yeni bir işaret öğrenelim!\n\n┌─────────────────────────────────────┐\n│                                     │\n│          -                          │\n│                                     │\n│   Bu "EKSİ" işaretidir!             │\n│                                     │\n│   - = çıkar! gitti!                 │\n│                                     │\n└─────────────────────────────────────┘\n\nBak:\n\n🍎🍎 - 🍎\n\nİki elma EKSİ bir elma!\n\nBir tane git! 🍎\n\nHarika! 😊',
        '- = eksi',
        'Eksi = çıkar!',
        {
          visual: '- işareti:\n\n────\n\nEKSİ!',
          examples: [
            createExample(
              '- işareti ne demek?',
              'Eksi! Çıkar!',
              '- = eksi = çıkar = git!',
              '-',
              ['Eksi işareti', 'Çıkarma demek!']
            )
          ],
          tip: '💡 - = eksi = çıkar!'
        }
      ),

      createStep(
        '2 - 1 = 1 (En Kolay Çıkarma!)',
        '🎉 EN KOLAY ÇIKARMA!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   2  -  1  =  1                     │\n│                                     │\n│   ✌️ → ☝️ kapat → ☝️              │\n│                                     │\n│   İki eksi bir eşittir bir!         │\n│                                     │\n└─────────────────────────────────────┘\n\nBak:\n\n🍎🍎 - 🍎 = 🍎\n\nİki eksi bir = bir!\n\n2 - 1 = 1\n\nMÜKEMMEL! 🎉',
        '2 - 1 = 1',
        'İki eksi bir eşittir bir!',
        {
          visual: '2 - 1 = 1\n\n✌️ → ☝️ kapat → ☝️\n\n🍎🍎 → 🍎 git → 🍎',
          examples: [
            createExample(
              '2 - 1 = ?',
              '1!',
              'İki eksi bir eşittir bir! ✌️ → bir kapat → ☝️',
              '2 - 1 = 1',
              ['İki parmak', 'Bir parmak kapat', 'Bir parmak kaldı! 1!']
            )
          ],
          tip: '💡 2 - 1 = 1 bunu ezberle!'
        }
      ),

      createStep(
        'Parmakla 2 - 1',
        'Parmaklarla yapalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Başla: iki parmak ✌️              │\n│                                     │\n│   Bir parmak kapat! ☝️ ❌           │\n│                                     │\n│   Kaç parmak kaldı?                 │\n│                                     │\n│   ☝️ Bir parmak!                    │\n│                                     │\n└─────────────────────────────────────┘\n\n2 - 1 = 1\n\nSüper! 🎉',
        'Parmaklarla 2-1!',
        'İki parmak aç, bir kapat!',
        {
          visual: 'Başta: ✌️ (2 parmak)\nBir kapat: ☝️ ❌\n\nKalan:\n☝️ (1 parmak)',
          examples: [
            createExample(
              'İki parmağından bir tanesini kapatırsan kaç parmak kalır?',
              '1 parmak!',
              '✌️ → bir kapat → ☝️ Bir parmak!',
              '☝️',
              ['Başta: 2 parmak', 'Bir kapat', 'Kalan: 1 parmak!']
            )
          ],
          tip: '💡 Parmaklarını kullan! Çok kolay!'
        }
      ),

      createStep(
        '3 - 1 = 2',
        'Şimdi biraz daha büyük!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   3  -  1  =  2                     │\n│                                     │\n│   🤟 → ☝️ kapat → ✌️              │\n│                                     │\n│   Üç eksi bir eşittir iki!          │\n│                                     │\n└─────────────────────────────────────┘\n\nBak:\n\n🍎🍎🍎 - 🍎 = 🍎🍎\n\nÜç eksi bir = iki!\n\n3 - 1 = 2\n\nHARİKA! 🎉',
        '3 - 1 = 2',
        'Üç eksi bir eşittir iki!',
        {
          visual: '3 - 1 = 2\n\n🤟 → ☝️ kapat → ✌️\n\n🍎🍎🍎 → 🍎 git → 🍎🍎',
          examples: [
            createExample(
              '3 - 1 = ?',
              '2!',
              'Üç eksi bir eşittir iki! 🤟 → bir kapat → ✌️',
              '3 - 1 = 2',
              ['Üç var', 'Bir git', 'İki kaldı! 2!']
            )
          ],
          tip: '💡 3 - 1 = 2 bunu ezberle!'
        }
      ),

      createStep(
        'Parmakla 3 - 1',
        'Parmaklarla yapalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Başla: üç parmak 🤟               │\n│                                     │\n│   Bir parmak kapat! ☝️ ❌           │\n│                                     │\n│   Kaç parmak kaldı?                 │\n│                                     │\n│   ✌️ İki parmak!                    │\n│                                     │\n└─────────────────────────────────────┘\n\n3 - 1 = 2\n\nMükemmel! 🎉',
        'Parmaklarla 3-1!',
        'Üç parmak aç, bir kapat!',
        {
          visual: 'Başta: 🤟 (3 parmak)\nBir kapat: ☝️ ❌\n\nKalan:\n✌️ (2 parmak)',
          examples: [
            createExample(
              'Üç parmağından bir tanesini kapatırsan kaç parmak kalır?',
              '2 parmak!',
              '🤟 → bir kapat → ✌️ İki parmak!',
              '✌️',
              ['Başta: 3 parmak', 'Bir kapat', 'Kalan: 2 parmak!']
            )
          ],
          tip: '💡 Parmaklarını kullan! Çok kolay!'
        }
      ),

      createStep(
        'Günlük Hayatta Çıkarma',
        'Her gün çıkarma yapıyoruz!\n\n┌─────────────────────────────────────┐\n│                                     │\n│  🍎🍎 - 🍎 = 🍎 (1 elma kaldı)      │\n│                                     │\n│  🧸🧸🧸 - 🧸 = 🧸🧸 (2 oyuncak)     │\n│                                     │\n│  🍪🍪 - 🍪 = 🍪 (1 kurabiye)        │\n│                                     │\n└─────────────────────────────────────┘\n\nHer yerde çıkarma var! 😊',
        'Günlük hayatta çıkarma!',
        'Etrafına bak!',
        {
          visual: 'Evde çıkarma:\n\n2 elma - 1 elma = 1 elma\n3 oyuncak - 1 oyuncak = 2 oyuncak',
          examples: [
            createExample(
              'İki elmadan bir tanesini yersen kaç elma kalır?',
              '1 elma!',
              '🍎🍎 - 🍎 = 🍎 Bir elma! 2 - 1 = 1',
              '🍎',
              ['2 elma var', '1 elma ye', '1 elma kaldı!']
            )
          ],
          tip: '💡 Her gün çıkarma yapıyoruz!'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        '2 - 1 = ?',
        ['0', '1', '2', '3'],
        '1',
        '2 eksi 1 eşittir 1! ✌️ → bir kapat → ☝️',
        '2 - 1',
        1,
        'İki eksi bir!'
      ),

      createMultipleChoice(
        '3 - 1 = ?',
        ['0', '1', '2', '3'],
        '2',
        '3 eksi 1 eşittir 2! 🤟 → bir kapat → ✌️',
        '3 - 1',
        1,
        'Üç eksi bir!'
      ),

      createMultipleChoice(
        '🍎🍎 - 🍎 = kaç elma?',
        ['0', '1', '2', '3'],
        '1',
        '🍎🍎 - 🍎 = 🍎 Bir elma! 2 - 1 = 1',
        '🍎',
        1,
        'Elmaları çıkar!'
      ),

      createMultipleChoice(
        '🧸🧸🧸 - 🧸 = kaç oyuncak?',
        ['0', '1', '2', '3'],
        '2',
        '🧸🧸🧸 - 🧸 = 🧸🧸 İki oyuncak! 3 - 1 = 2',
        '🧸🧸',
        1,
        'Oyuncakları çıkar!'
      ),

      createFillBlank(
        '2 - 1 = ___',
        ['1', 'bir'],
        '2 eksi 1 eşittir 1!',
        '2 - 1',
        1,
        'İki eksi bir?'
      ),

      createFillBlank(
        '3 - 1 = ___',
        ['2', 'iki'],
        '3 eksi 1 eşittir 2!',
        '3 - 1',
        1,
        'Üç eksi bir?'
      ),

      createMultipleChoice(
        '✌️ → bir parmak kapat → kaç parmak kalır?',
        ['0', '1', '2', '3'],
        '1',
        '✌️ → bir kapat → ☝️ Bir parmak! 2 - 1 = 1',
        '☝️',
        1,
        'Parmakları çıkar!'
      ),

      createMultipleChoice(
        '🤟 → bir parmak kapat → kaç parmak kalır?',
        ['0', '1', '2', '3'],
        '2',
        '🤟 → bir kapat → ✌️ İki parmak! 3 - 1 = 2',
        '✌️',
        1,
        'Parmakları çıkar!'
      ),

      createMultipleChoice(
        '🔵🔵 - 🔵 = kaç top?',
        ['0', '1', '2', '3'],
        '1',
        '🔵🔵 - 🔵 = 🔵 Bir top! 2 - 1 = 1',
        '🔵',
        1,
        'Topları çıkar!'
      ),

      createMultipleChoice(
        '🔵🔵🔵 - 🔵 = kaç top?',
        ['0', '1', '2', '3'],
        '2',
        '🔵🔵🔵 - 🔵 = 🔵🔵 İki top! 3 - 1 = 2',
        '🔵🔵',
        1,
        'Topları çıkar!'
      )
    ],

    summary: '➖ Harika!\n\n✅ - işaretini öğrendin!\n✅ 2 - 1 = 1 ✌️→☝️\n✅ 3 - 1 = 2 🤟→✌️\n✅ Çıkarma yaptın!\n\nÇok iyi iş çıkardın! 💝',

    nextTopicPreview: 'Bir sonraki derste toplama ve çıkarma oyunları oynayacağız! Eğlenceli hikayeler! 🎮'
  }
};
