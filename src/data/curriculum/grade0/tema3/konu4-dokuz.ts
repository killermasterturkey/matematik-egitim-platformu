// DESTEK SINIFI - TEMA 3 - KONU 4: DOKUZ (9) SAYISI
// Kedi temalı, 10'a hazırlık

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu4Dokuz: Topic = {
  id: 'dokuz-sayisi',
  title: 'DOKUZ (9) Sayısı',
  description: 'Kedinin 9 canı var! 9 = neredeyse 10! 🐱',
  emoji: '🐱',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['dokuz', '9', 'kedi', '10\'a yakın'],
  objectives: [
    '9 sayısını tanıyacaksın',
    '8 + 1 = 9 olduğunu göreceksin',
    '9 = 10 - 1 olduğunu anlayacaksın',
    '10\'a çok yakın olduğunu göreceksin'
  ],

  content: {
    introduction: '🐱 Merhaba!\n\nBugün DOKUZ sayısını öğreneceğiz.\n\n9... DOKUZ!\n\nKedinin 9 canı varmış! 🐱\n\n9, 10\'dan sadece 1 eksik!\n\nHazır mısın? Başlayalım!',

    motivationQuote: 'Sen 9 canlı bir kedi gibisin! Her şeyi başarabilirsin! 🐱',

    funFacts: [
      '🐱 Kedinin 9 canı varmış (masal)!',
      '9️⃣ 9, 10\'dan sadece 1 eksik!',
      '⚽ Futbolda 9 numara forvet oynar!',
      '☁️ 9 bulut, yağmur getirir (bazı kültürlerde)!',
      '🎂 9 yaş parti zamanı!',
      '🌙 Ay\'ın 9 evresi var (bazı takvimler)!',
      '📱 Telefonlarda 9 rakamı var!',
      '🧮 9 ile çarpım tablosu özel!'
    ],

    steps: [
      createStep(
        '8\'den 9\'a Geçiş',
        'Hatırla! 8 sayısını biliyorsun! 🐙\n\n┌─────────────────────────────────────┐\n│   🔵🔵🔵🔵🔵🔵🔵🔵                    │\n│        8 top!                       │\n└─────────────────────────────────────┘\n\nŞimdi bir tane DAHA! 🔵\n\n┌─────────────────────────────────────┐\n│   🔵🔵🔵🔵🔵🔵🔵🔵  🔵               │\n│      8 + 1 = 9 top!                 │\n└─────────────────────────────────────┘\n\nBak! 8 artı 1 = DOKUZ! 🎉',
        '8 + 1 = 9',
        '8 var, 1 tane daha ekle!',
        {
          visual: '8: 🍎🍎🍎🍎🍎🍎🍎🍎\n +\n1: 🍎\n =\n9: 🍎🍎🍎🍎🍎🍎🍎🍎🍎',
          examples: [
            createExample(
              '8 tane var, 1 tane daha geldi. Toplam kaç?',
              '9 tane!',
              'Bak: 🎈🎈🎈🎈🎈🎈🎈🎈 + 🎈 = 9 balon!',
              '🎈🎈🎈🎈🎈🎈🎈🎈🎈',
              ['8 balon var', '1 balon daha', 'Toplam: 9!']
            )
          ],
          tip: '💡 8 biliyorsan, 1 ekle = 9!'
        }
      ),

      createStep(
        'Kedi ve 9 Can',
        '🐱 KEDİ MASALI!\n\nEskiden beri söylenir:\n\nKedinin 9 canı varmış!\n\n┌─────────────────────────────────────┐\n│                                     │\n│        🐱                           │\n│                                     │\n│    9 can! Çok şanslı!               │\n│                                     │\n│   💝💝💝💝💝💝💝💝💝                  │\n│                                     │\n└─────────────────────────────────────┘\n\nBu yüzden kediler çok akıllı!\n\nSay: 1, 2, 3, 4, 5, 6, 7, 8, 9!\n\nDOKUZ can! 🐱',
        '🐱 = 9 can (masal)',
        'Kediler çok şanslı!',
        {
          visual: 'Kedi:\n\n🐱\n\n9 can!\n💝💝💝💝💝💝💝💝💝',
          examples: [
            createExample(
              'Masalda kedinin kaç canı var?',
              '9 can!',
              'Kedinin DOKUZ canı var! 🐱 = 9',
              '🐱 💝×9',
              ['Masal der ki:', 'Kedi 9 canlı!', 'Çok şanslı!']
            )
          ],
          tip: '💡 Kediyi gördüğünde 9\'u hatırla! 🐱'
        }
      ),

      createStep(
        '9 = 10\'dan 1 Eksik!',
        'ÇOK ÖNEMLİ!\n\n9, 10\'a çok yakın!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   10 - 1 = 9                        │\n│                                     │\n│   🖐️🖐️ eksi ☝️ = 9 parmak!        │\n│                                     │\n└─────────────────────────────────────┘\n\nBak:\n\n10 var... 1 tane git... 9 kaldı!\n\n🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 → ❌ = 🔵🔵🔵🔵🔵🔵🔵🔵🔵\n\nNeredeyse 10! 🎉',
        '10 - 1 = 9',
        '10\'dan 1 eksiği 9!',
        {
          visual: '10 tane:\n🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎\n\n1 tane git:\n🍎🍎🍎🍎🍎🍎🍎🍎🍎 ❌\n\n9 kaldı!',
          examples: [
            createExample(
              '10 tane var, 1 tane gitti. Kaç kaldı?',
              '9 kaldı!',
              '10 - 1 = 9! Neredeyse 10!',
              '10 → 9',
              ['10 vardı', '1 gitti', '9 kaldı!']
            )
          ],
          tip: '💡 9 = neredeyse 10! Çok yakın!'
        }
      ),

      createStep(
        '9 Sayısı - DOKUZ',
        'İşte 9 sayısı!\n\n┌─────────────────────────────────────┐\n│      9 = DOKUZ                      │\n│                                     │\n│   ⭐⭐⭐⭐⭐⭐⭐⭐⭐                   │\n│                                     │\n│   Bak! 9 yıldız!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nSayalım:\n\n"Bir, iki, üç, dört, beş, altı, yedi, sekiz, DOKUZ!"\n\nSüper! 🌟',
        '9 = DOKUZ',
        '1\'den 9\'a say!',
        {
          visual: '9️⃣ = DOKUZ\n\n⭐⭐⭐⭐⭐⭐⭐⭐⭐\n\n💝💝💝💝💝💝💝💝💝',
          examples: [
            createExample(
              'Kaç tane kalp? 💝💝💝💝💝💝💝💝💝',
              '9 tane!',
              'Say: 1, 2, 3, 4, 5, 6, 7, 8, 9! DOKUZ kalp!',
              '💝💝💝💝💝💝💝💝💝',
              ['Her birini say!', 'Son: 9. kalp!']
            )
          ],
          tip: '💡 9\'a kadar saymak artık kolay!'
        }
      ),

      createStep(
        '9\'u Farklı Şekillerde Yap',
        '9 yapmanın yolları:\n\n┌─────────────────────────────────────┐\n│   8 + 1 = 9                         │\n│   7 + 2 = 9                         │\n│   6 + 3 = 9                         │\n│   5 + 4 = 9                         │\n│   4 + 5 = 9                         │\n│   3 + 6 = 9                         │\n│   2 + 7 = 9                         │\n│   1 + 8 = 9                         │\n│                                     │\n│   10 - 1 = 9 ⭐ ÖNEMLİ!            │\n└─────────────────────────────────────┘\n\nHepsi 9!\n\nEn önemli: 10 - 1 = 9!',
        '10 - 1 = 9 (çok önemli!)',
        '10\'a çok yakın!',
        {
          visual: '9 yapma:\n\n🍎🍎🍎🍎🍎 + 🍎🍎🍎🍎 = 9\n\n🖐️🖐️ - ☝️ = 9',
          examples: [
            createExample(
              '5 + 4 = ?',
              '9!',
              '5 artı 4 eşittir 9! 🖐️ + 🖖 = 9',
              '5 + 4',
              ['5 var', '4 ekle', 'Toplam: 9!']
            )
          ],
          tip: '💡 9 = 10 - 1 bunu ezberle!'
        }
      ),

      createStep(
        'Parmakla 9 Gösterme',
        'İki elle 9 nasıl gösterilir?\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🖐️ + 🖖 = 9 parmak!              │\n│                                     │\n│   5 parmak + 4 parmak = 9           │\n│                                     │\n└─────────────────────────────────────┘\n\nVeya:\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🖐️🖐️ eksi ☝️ = 9 parmak!        │\n│                                     │\n│   10 parmak - 1 parmak = 9          │\n│                                     │\n└─────────────────────────────────────┘\n\nİki yol! Harika! 🎉',
        '🖐️ + 🖖 = 9 veya 🖐️🖐️ - ☝️ = 9',
        'Parmaklarınla 9 göster!',
        {
          visual: 'Yöntem 1:\n5 + 4 = 9\n\nYöntem 2:\n10 - 1 = 9',
          examples: [
            createExample(
              'İki elin kaç parmağı var?',
              '10 parmak!',
              '🖐️🖐️ = 10 parmak! 1 kapat = 9!',
              '🖐️🖐️',
              ['10 parmak var', '1\'ini kapat', '9 parmak kalır!']
            )
          ],
          tip: '💡 10 parmak biliyorsun! 1\'ini kapat = 9!'
        }
      ),

      createStep(
        '1\'den 9\'a Sayalım!',
        'Büyük sayma!\n\n┌─────────────────────────────────────┐\n│   1 → 🔵                            │\n│   2 → 🔵🔵                          │\n│   3 → 🔵🔵🔵                        │\n│   4 → 🔵🔵🔵🔵                      │\n│   5 → 🔵🔵🔵🔵🔵                    │\n│   6 → 🔵🔵🔵🔵🔵🔵                  │\n│   7 → 🔵🔵🔵🔵🔵🔵🔵                │\n│   8 → 🔵🔵🔵🔵🔵🔵🔵🔵              │\n│   9 → 🔵🔵🔵🔵🔵🔵🔵🔵🔵            │\n└─────────────────────────────────────┘\n\nYüksek sesle:\n\n"1, 2, 3, 4, 5, 6, 7, 8, 9!"\n\nHarikasın! 🌟',
        '1→2→3→4→5→6→7→8→9!',
        '9\'a kadar say!',
        {
          visual: 'Sayma:\n\n1 2 3 4 5 6 7 8 9\n\n🐱 Kedi gibi akıllısın!',
          examples: [
            createExample(
              '1\'den 9\'a kadar say!',
              '1, 2, 3, 4, 5, 6, 7, 8, 9!',
              'Bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz! 🐱',
              '1→9',
              ['Her sayıyı söyle!', 'Son: dokuz!']
            )
          ],
          tip: '💡 Her gün 9\'a kadar say! Kediyi hatırla! 🐱'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Masalda kedinin kaç canı var? 🐱',
        ['7', '8', '9', '10'],
        '9',
        'Kedinin DOKUZ canı var! 🐱 = 9',
        '🐱',
        1,
        'Kedi masalını hatırla!'
      ),

      createMultipleChoice(
        '8 + 1 = ?',
        ['7', '8', '9', '10'],
        '9',
        '8 artı 1 eşittir 9!',
        '8 + 1',
        1,
        '8\'e 1 ekle!'
      ),

      createMultipleChoice(
        '10 - 1 = ?',
        ['7', '8', '9', '10'],
        '9',
        '10 eksi 1 eşittir 9! Çok önemli!',
        '10 - 1',
        1,
        '10\'dan 1 çıkar!'
      ),

      createFillBlank(
        '1, 2, 3, 4, 5, 6, 7, 8, ___',
        ['9', 'dokuz'],
        '8\'den sonra 9 gelir!',
        '8 → ?',
        1,
        'Sırayla say!'
      ),

      createMultipleChoice(
        'Kaç tane yıldız? ⭐⭐⭐⭐⭐⭐⭐⭐⭐',
        ['7', '8', '9', '10'],
        '9',
        'DOKUZ yıldız! ⭐ = 9',
        '⭐⭐⭐⭐⭐⭐⭐⭐⭐',
        1,
        'Yıldızları say!'
      ),

      createMultipleChoice(
        '5 + 4 = ?',
        ['7', '8', '9', '10'],
        '9',
        '5 artı 4 eşittir 9!',
        '5 + 4',
        1,
        '5 ile 4\'ü topla!'
      ),

      createMultipleChoice(
        '6 + 3 = ?',
        ['7', '8', '9', '10'],
        '9',
        '6 artı 3 eşittir 9!',
        '6 + 3',
        1,
        '6 ile 3\'ü topla!'
      ),

      createFillBlank(
        '9 yapmak için: 7 + ___ = 9',
        ['2', 'iki'],
        '7 artı 2 eşittir 9!',
        '7 + ? = 9',
        1,
        '7\'den 9\'a kaç lazım?'
      ),

      createMultipleChoice(
        'Kaç tane kalp? 💝💝💝💝💝💝💝💝💝',
        ['7', '8', '9', '10'],
        '9',
        'DOKUZ kalp! 💝 = 9',
        '💝💝💝💝💝💝💝💝💝',
        1,
        'Kalpleri say!'
      ),

      createMultipleChoice(
        '4 + 5 = ?',
        ['7', '8', '9', '10'],
        '9',
        '4 artı 5 eşittir 9!',
        '4 + 5',
        1,
        '4 ile 5\'i topla!'
      ),

      createMultipleChoice(
        '3 + 6 = ?',
        ['7', '8', '9', '10'],
        '9',
        '3 artı 6 eşittir 9!',
        '3 + 6',
        1,
        '3 ile 6\'yı topla!'
      ),

      createFillBlank(
        '9 = 10 - ___',
        ['1', 'bir'],
        '9 eşittir 10 eksi 1! Çok önemli!',
        '9 = 10 - ?',
        1,
        '10\'dan kaç eksiği 9?'
      ),

      createMultipleChoice(
        '2 + 7 = ?',
        ['7', '8', '9', '10'],
        '9',
        '2 artı 7 eşittir 9!',
        '2 + 7',
        1,
        '2 ile 7\'yi topla!'
      ),

      createMultipleChoice(
        'Hangisi 9 tane?',
        ['🍎🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎'],
        '🍎🍎🍎🍎🍎🍎🍎🍎🍎',
        'Üçüncü seçenek! 🍎 = 9 elma!',
        undefined,
        1,
        'Elmaları say!'
      ),

      createMultipleChoice(
        '1 + 8 = ?',
        ['7', '8', '9', '10'],
        '9',
        '1 artı 8 eşittir 9!',
        '1 + 8',
        1,
        '1 ile 8\'i topla!'
      )
    ],

    summary: '🐱 Mükemmel!\n\n✅ 9 = DOKUZ 🐱\n✅ Kedi = 9 can (masal)\n✅ 8 + 1 = 9\n✅ 10 - 1 = 9 ⭐\n✅ 5 + 4 = 9\n✅ Neredeyse 10!\n\nDOKUZ sayısını öğrendin!\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste ON (10) sayısını öğreneceğiz! İki el birlikte! 🖐️🖐️'
  }
};
