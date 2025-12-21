// DESTEK SINIFI - TEMA 4 - KONU 3: 1+1 VE 2+1 (EN BASİT TOPLAMALAR)
// İlk kez "+" işaretini görüyoruz!

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu3BasitToplama: Topic = {
  id: 'basit-toplama',
  title: '1+1 ve 2+1',
  description: 'En kolay toplamalar! 1+1=2, 2+1=3! ➕',
  emoji: '➕',
  duration: '45 dk',
  difficulty: 1,
  keywords: ['toplama', '1+1', '2+1', 'artı'],
  objectives: [
    '1+1=2 öğreneceksin',
    '2+1=3 öğreneceksin',
    '"+" işaretini tanıyacaksın',
    'Parmakla toplama yapacaksın'
  ],

  content: {
    introduction: '➕ Merhaba!\n\nBugün TOPLAMA öğreneceğiz!\n\nBak bu işaret: +\n\nBu "artı" demek!\n\n1 + 1 = 2\n\nBir artı bir eşittir iki!\n\nÇok kolay! 😊\n\nHazır mısın? Başlayalım!',

    motivationQuote: 'Toplama çok kolay! Sen başarabilirsin! 💝',

    funFacts: [
      '➕ + işareti "artı" okunur!',
      '1+1=2 en kolay toplama!',
      '🖐️ Parmakla toplama yapabilirsin!',
      '➕ Toplama = bir araya getirme!',
      '= işareti "eşittir" demek!',
      '💝 Toplamak güzel!'
    ],

    steps: [
      createStep(
        '+ İşareti - ARTI',
        'Yeni bir işaret öğrenelim!\n\n┌─────────────────────────────────────┐\n│                                     │\n│          +                          │\n│                                     │\n│   Bu "ARTI" işaretidir!             │\n│                                     │\n│   + = bir araya getir!              │\n│                                     │\n└─────────────────────────────────────┘\n\nBak:\n\n🍎 + 🍎\n\nBir elma ARTI bir elma!\n\nBir araya getir! 🍎🍎\n\nHarika! 😊',
        '+ = artı',
        'Artı = bir araya getir!',
        {
          visual: '+ işareti:\n\n  │\n──┼──\n  │\n\nARTI!',
          examples: [
            createExample(
              '+ işareti ne demek?',
              'Artı! Bir araya getir!',
              '+ = artı = topla = birleştir!',
              '+',
              ['Artı işareti', 'Toplama demek!']
            )
          ],
          tip: '💡 + = artı = topla!'
        }
      ),

      createStep(
        '1 + 1 = 2 (En Kolay Toplama!)',
        '🎉 EN KOLAY TOPLAMA!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1  +  1  =  2                     │\n│                                     │\n│   ☝️ + ☝️ = ✌️                     │\n│                                     │\n│   Bir artı bir eşittir iki!         │\n│                                     │\n└─────────────────────────────────────┘\n\nBak:\n\n🍎 + 🍎 = 🍎🍎\n\nBir artı bir = iki!\n\n1 + 1 = 2\n\nMÜKEMMEL! 🎉',
        '1 + 1 = 2',
        'Bir artı bir eşittir iki!',
        {
          visual: '1 + 1 = 2\n\n☝️ + ☝️ = ✌️\n\n🍎 + 🍎 = 🍎🍎',
          examples: [
            createExample(
              '1 + 1 = ?',
              '2!',
              'Bir artı bir eşittir iki! ☝️ + ☝️ = ✌️',
              '1 + 1 = 2',
              ['Bir parmak', 'Bir parmak daha', 'İki parmak! 2!']
            )
          ],
          tip: '💡 1 + 1 = 2 bunu ezberle!'
        }
      ),

      createStep(
        'Parmakla 1 + 1',
        'Parmaklarla yapalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Sol el: bir parmak ☝️             │\n│                                     │\n│   Sağ el: bir parmak ☝️             │\n│                                     │\n│   Birlikte kaç parmak?              │\n│                                     │\n│   ☝️ + ☝️ = ✌️ İki parmak!         │\n│                                     │\n└─────────────────────────────────────┘\n\n1 + 1 = 2\n\nSüper! 🎉',
        'Parmaklarla 1+1!',
        'İki elinden birer parmak!',
        {
          visual: 'Sol el: ☝️ (1)\nSağ el: ☝️ (1)\n\nBirlikte:\n✌️ (2 parmak)',
          examples: [
            createExample(
              'İki elinden birer parmak kaldırırsan kaç parmak olur?',
              '2 parmak!',
              '☝️ + ☝️ = ✌️ İki parmak!',
              '✌️',
              ['Sol el: 1 parmak', 'Sağ el: 1 parmak', 'Toplam: 2 parmak!']
            )
          ],
          tip: '💡 Parmaklarını kullan! Çok kolay!'
        }
      ),

      createStep(
        '2 + 1 = 3',
        'Şimdi biraz daha büyük!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   2  +  1  =  3                     │\n│                                     │\n│   ✌️ + ☝️ = 🤟                     │\n│                                     │\n│   İki artı bir eşittir üç!          │\n│                                     │\n└─────────────────────────────────────┘\n\nBak:\n\n🍎🍎 + 🍎 = 🍎🍎🍎\n\nİki artı bir = üç!\n\n2 + 1 = 3\n\nHARİKA! 🎉',
        '2 + 1 = 3',
        'İki artı bir eşittir üç!',
        {
          visual: '2 + 1 = 3\n\n✌️ + ☝️ = 🤟\n\n🍎🍎 + 🍎 = 🍎🍎🍎',
          examples: [
            createExample(
              '2 + 1 = ?',
              '3!',
              'İki artı bir eşittir üç! ✌️ + ☝️ = 🤟',
              '2 + 1 = 3',
              ['İki var', 'Bir daha ekle', 'Üç oldu! 3!']
            )
          ],
          tip: '💡 2 + 1 = 3 bunu ezberle!'
        }
      ),

      createStep(
        'Parmakla 2 + 1',
        'Parmaklarla yapalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Sol el: iki parmak ✌️             │\n│                                     │\n│   Sağ el: bir parmak ☝️             │\n│                                     │\n│   Birlikte kaç parmak?              │\n│                                     │\n│   ✌️ + ☝️ = 🤟 Üç parmak!          │\n│                                     │\n└─────────────────────────────────────┘\n\n2 + 1 = 3\n\nMükemmel! 🎉',
        'Parmaklarla 2+1!',
        'Bir elden 2, diğerinden 1!',
        {
          visual: 'Sol el: ✌️ (2)\nSağ el: ☝️ (1)\n\nBirlikte:\n🤟 (3 parmak)',
          examples: [
            createExample(
              'Bir elden 2, diğerinden 1 parmak kaldırırsan kaç parmak olur?',
              '3 parmak!',
              '✌️ + ☝️ = 🤟 Üç parmak!',
              '🤟',
              ['Sol el: 2 parmak', 'Sağ el: 1 parmak', 'Toplam: 3 parmak!']
            )
          ],
          tip: '💡 Parmaklarını kullan! Çok kolay!'
        }
      ),

      createStep(
        'Günlük Hayatta Toplama',
        'Her gün toplama yapıyoruz!\n\n┌─────────────────────────────────────┐\n│                                     │\n│  🍎 + 🍎 = 🍎🍎 (2 elma)            │\n│                                     │\n│  🧸🧸 + 🧸 = 🧸🧸🧸 (3 oyuncak)      │\n│                                     │\n│  📚 + 📚 = 📚📚 (2 kitap)           │\n│                                     │\n└─────────────────────────────────────┘\n\nHer yerde toplama var! 😊',
        'Günlük hayatta toplama!',
        'Etrafına bak!',
        {
          visual: 'Evde toplama:\n\n1 elma + 1 elma = 2 elma\n2 oyuncak + 1 oyuncak = 3 oyuncak',
          examples: [
            createExample(
              'Bir elmayı bir elmayla toplarsan kaç elma olur?',
              '2 elma!',
              '🍎 + 🍎 = 🍎🍎 İki elma! 1 + 1 = 2',
              '🍎🍎',
              ['1 elma', '1 elma daha', '2 elma!']
            )
          ],
          tip: '💡 Her gün toplama yapıyoruz!'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        '1 + 1 = ?',
        ['1', '2', '3', '4'],
        '2',
        '1 artı 1 eşittir 2! ☝️ + ☝️ = ✌️',
        '1 + 1',
        1,
        'Bir artı bir!'
      ),

      createMultipleChoice(
        '2 + 1 = ?',
        ['1', '2', '3', '4'],
        '3',
        '2 artı 1 eşittir 3! ✌️ + ☝️ = 🤟',
        '2 + 1',
        1,
        'İki artı bir!'
      ),

      createMultipleChoice(
        '🍎 + 🍎 = kaç elma?',
        ['1', '2', '3', '4'],
        '2',
        '🍎 + 🍎 = 🍎🍎 İki elma! 1 + 1 = 2',
        '🍎🍎',
        1,
        'Elmaları topla!'
      ),

      createMultipleChoice(
        '🧸🧸 + 🧸 = kaç oyuncak?',
        ['1', '2', '3', '4'],
        '3',
        '🧸🧸 + 🧸 = 🧸🧸🧸 Üç oyuncak! 2 + 1 = 3',
        '🧸🧸🧸',
        1,
        'Oyuncakları topla!'
      ),

      createFillBlank(
        '1 + 1 = ___',
        ['2', 'iki'],
        '1 artı 1 eşittir 2!',
        '1 + 1',
        1,
        'Bir artı bir?'
      ),

      createFillBlank(
        '2 + 1 = ___',
        ['3', 'üç'],
        '2 artı 1 eşittir 3!',
        '2 + 1',
        1,
        'İki artı bir?'
      ),

      createMultipleChoice(
        '☝️ + ☝️ = kaç parmak?',
        ['1', '2', '3', '4'],
        '2',
        '☝️ + ☝️ = ✌️ İki parmak! 1 + 1 = 2',
        '✌️',
        1,
        'Parmakları topla!'
      ),

      createMultipleChoice(
        '✌️ + ☝️ = kaç parmak?',
        ['1', '2', '3', '4'],
        '3',
        '✌️ + ☝️ = 🤟 Üç parmak! 2 + 1 = 3',
        '🤟',
        1,
        'Parmakları topla!'
      ),

      createMultipleChoice(
        '🔵 + 🔵 = kaç top?',
        ['1', '2', '3', '4'],
        '2',
        '🔵 + 🔵 = 🔵🔵 İki top! 1 + 1 = 2',
        '🔵🔵',
        1,
        'Topları topla!'
      ),

      createMultipleChoice(
        '🔵🔵 + 🔵 = kaç top?',
        ['1', '2', '3', '4'],
        '3',
        '🔵🔵 + 🔵 = 🔵🔵🔵 Üç top! 2 + 1 = 3',
        '🔵🔵🔵',
        1,
        'Topları topla!'
      )
    ],

    summary: '➕ Harika!\n\n✅ + işaretini öğrendin!\n✅ 1 + 1 = 2 ☝️+☝️=✌️\n✅ 2 + 1 = 3 ✌️+☝️=🤟\n✅ Toplama yaptın!\n\nÇok iyi iş çıkardın! 💝',

    nextTopicPreview: 'Bir sonraki derste basit çıkarmalar öğreneceğiz! 2-1 ve 3-1!'
  }
};
