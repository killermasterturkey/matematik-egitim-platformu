// DESTEK SINIFI - TEMA 3 - KONU 5: ON (10) SAYISI
// BÜYÜK BAŞARI! İki el birlikte! Kutlama zamanı!

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu5On: Topic = {
  id: 'on-sayisi',
  title: 'ON (10) Sayısı',
  description: 'BÜYÜK BAŞARI! İki el birlikte! 10 parmak! 🖐️🖐️',
  emoji: '🏆',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['on', '10', 'iki el', 'parmak', 'başarı'],
  objectives: [
    '10 sayısını tanıyacaksın',
    'İki elin 10 parmağını sayacaksın',
    '9 + 1 = 10 olduğunu göreceksin',
    '5 + 5 = 10 olduğunu öğreneceksin',
    'BÜYÜK BAŞARI kutlaması yapacaksın!'
  ],

  content: {
    introduction: '🎉🎉🎉 KUTLAMA ZAMANI!\n\nBugün ON sayısını öğreneceğiz.\n\n10... ON!\n\nİKİ EL BİRLİKTE! 🖐️🖐️\n\n10 PARMAK!\n\nBÜYÜK SAYIYA GELDİK!\n\nHazır mısın? BAŞLAYALIM! 🏆',

    motivationQuote: 'SEN MÜKEMMEL BİR ÖĞRENCİSİN! 10\'A KADAR SAYABILECEKSIN! 🌟',

    funFacts: [
      '🖐️🖐️ İki elimizde 10 parmak var!',
      '🔢 10, özel bir sayı! "Onluk sistem" denir!',
      '⚽ Futbol takımında 10 numara çok özel!',
      '🎂 10 yaş parti yaşı!',
      '🏆 10 üzerinden 10 = mükemmel!',
      '💯 100 = on tane 10!',
      '🎯 10 = tam isabet!',
      '🌟 10 yıldız = süper başarı!'
    ],

    steps: [
      createStep(
        '9\'dan 10\'a Geçiş - BÜYÜK ADIM!',
        'Hatırla! 9 sayısını biliyorsun! 🐱\n\n┌─────────────────────────────────────┐\n│   🔵🔵🔵🔵🔵🔵🔵🔵🔵                 │\n│        9 top!                       │\n└─────────────────────────────────────┘\n\nŞimdi bir tane DAHA!\n\nBU ÇOK ÖNEMLİ! 🎉\n\n┌─────────────────────────────────────┐\n│   🔵🔵🔵🔵🔵🔵🔵🔵🔵  🔵             │\n│      9 + 1 = 10 top!                │\n│                                     │\n│        🎉 ON! 🎉                    │\n└─────────────────────────────────────┘\n\nBak! 9 artı 1 = ON!\n\nBÜYÜK BAŞARI! 🏆',
        '9 + 1 = 10 🏆',
        '9\'a 1 ekle = 10!',
        {
          visual: '9: 🍎🍎🍎🍎🍎🍎🍎🍎🍎\n +\n1: 🍎\n =\n10: 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎\n\n🎉 ON! 🎉',
          examples: [
            createExample(
              '9 tane var, 1 tane daha geldi. Toplam kaç?',
              '10 tane! BÜYÜK SAYI!',
              'Bak: 9 + 1 = 10! 🎉🎉🎉',
              '9 + 1 = 10',
              ['9 vardı', '1 daha geldi', 'TOPLAM: 10! 🎉']
            )
          ],
          tip: '💡 9\'dan 10\'a geçmek SÜPER BAŞARI!'
        }
      ),

      createStep(
        'İKİ EL BİRLİKTE - 10 PARMAK!',
        '🖐️🖐️ İKİ ELİN!\n\nBir elin kaç parmağı var?\n\n5 parmak! 🖐️\n\nDiğer elin?\n\n5 parmak! 🖐️\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🖐️  +  🖐️  =  10 PARMAK!        │\n│                                     │\n│   5   +   5   =   10                │\n│                                     │\n└─────────────────────────────────────┘\n\nİKİ EL BİRLİKTE!\n\n5 + 5 = 10!\n\nPARMAKLARINI AÇ! 🖐️🖐️\n\nSAY: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!\n\nHARİKASIN! 🎉',
        '🖐️ + 🖐️ = 10',
        'İki elini aç ve say!',
        {
          visual: 'Sol el: 🖐️ (5 parmak)\n\nSağ el: 🖐️ (5 parmak)\n\nİkisi birlikte:\n🖐️🖐️ = 10 PARMAK!',
          examples: [
            createExample(
              'İki elinde kaç parmak var?',
              '10 parmak!',
              '🖐️ (5) + 🖐️ (5) = 10 parmak! Harika!',
              '🖐️🖐️',
              ['Sol el: 1,2,3,4,5', 'Sağ el: 6,7,8,9,10', 'Toplam: 10!']
            )
          ],
          tip: '💡 5 + 5 = 10! En önemli toplama!'
        }
      ),

      createStep(
        '10 Sayısı - ON',
        'İşte 10 sayısı!\n\n┌─────────────────────────────────────┐\n│                                     │\n│         10 = ON                     │\n│                                     │\n│   ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐                 │\n│                                     │\n│   Bak! 10 yıldız!                   │\n│                                     │\n│      BÜYÜK SAYI! 🏆                 │\n│                                     │\n└─────────────────────────────────────┘\n\nSayalım:\n\n"Bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz, ON!"\n\nSÜPERSİN! 🌟🌟🌟',
        '10 = ON 🏆',
        '1\'den 10\'a say!',
        {
          visual: '1️⃣0️⃣ = ON\n\n⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐\n\n🏆 BÜYÜK BAŞARI! 🏆',
          examples: [
            createExample(
              'Kaç tane kalp? 💝💝💝💝💝💝💝💝💝💝',
              '10 tane! ON!',
              'Say: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10! ON kalp! 💝',
              '💝💝💝💝💝💝💝💝💝💝',
              ['Her birini say!', 'Son: 10. kalp!', 'BÜYÜK BAŞARI!']
            )
          ],
          tip: '💡 10 = iki rakam! 1 ve 0! Özel!'
        }
      ),

      createStep(
        '10\'u Farklı Şekillerde Yap',
        '10 yapmanın yolları:\n\n┌─────────────────────────────────────┐\n│   9 + 1 = 10                        │\n│   8 + 2 = 10                        │\n│   7 + 3 = 10                        │\n│   6 + 4 = 10                        │\n│   5 + 5 = 10 ⭐ EN KOLAY!           │\n│   4 + 6 = 10                        │\n│   3 + 7 = 10                        │\n│   2 + 8 = 10                        │\n│   1 + 9 = 10                        │\n└─────────────────────────────────────┘\n\nHepsi 10!\n\nEn kolay: 5 + 5 = 10! 🖐️🖐️',
        '5 + 5 = 10 (en kolay!)',
        'İki elin = 10!',
        {
          visual: '10 yapma:\n\n🍎🍎🍎🍎🍎 + 🍎🍎🍎🍎🍎 = 10\n\n🖐️ + 🖐️ = 10',
          examples: [
            createExample(
              '6 + 4 = ?',
              '10!',
              '6 artı 4 eşittir 10! 🖐️☝️ + 🖖 = 10',
              '6 + 4',
              ['6 var', '4 ekle', 'Toplam: 10!']
            )
          ],
          tip: '💡 5 + 5 = 10 bunu ezberle! Çok önemli!'
        }
      ),

      createStep(
        '1\'den 10\'a BÜYÜK SAYMA!',
        '🎉 ŞİMDİ BÜYÜK SAYMA!\n\n┌─────────────────────────────────────┐\n│   1 → 🔵                            │\n│   2 → 🔵🔵                          │\n│   3 → 🔵🔵🔵                        │\n│   4 → 🔵🔵🔵🔵                      │\n│   5 → 🔵🔵🔵🔵🔵                    │\n│   6 → 🔵🔵🔵🔵🔵🔵                  │\n│   7 → 🔵🔵🔵🔵🔵🔵🔵                │\n│   8 → 🔵🔵🔵🔵🔵🔵🔵🔵              │\n│   9 → 🔵🔵🔵🔵🔵🔵🔵🔵🔵            │\n│  10 → 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵          │\n└─────────────────────────────────────┘\n\nYÜKSEK SESLE SAY:\n\n"1, 2, 3, 4, 5, 6, 7, 8, 9, 10!"\n\n🎉 BAŞARDIN! 🎉',
        '1→10 SAY!',
        '10\'a kadar say!',
        {
          visual: 'Tam sayma:\n\n1 2 3 4 5 6 7 8 9 10\n\n🏆 MÜKEMMEL! 🏆',
          examples: [
            createExample(
              '1\'den 10\'a kadar say!',
              '1, 2, 3, 4, 5, 6, 7, 8, 9, 10!',
              'Bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz, ON! 🎉',
              '1→10',
              ['Her sayıyı söyle!', 'Son: ON!', 'BAŞARDIN!']
            )
          ],
          tip: '💡 Her gün 10\'a kadar say! Sen şampiyonsun! 🏆'
        }
      ),

      createStep(
        'KUTLAMA ZAMANI! 🎉',
        '🎉🎉🎉 TEBRİKLER! 🎉🎉🎉\n\n10\'A KADAR SAYABİLİYORSUN!\n\n┌─────────────────────────────────────┐\n│                                     │\n│      🏆 BÜYÜK BAŞARI! 🏆            │\n│                                     │\n│   1, 2, 3, 4, 5, 6, 7, 8, 9, 10!    │\n│                                     │\n│      🎉 SEN MUHTEŞEMSIN! 🎉         │\n│                                     │\n│   ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐                 │\n│                                     │\n│      10 YILDIZ! MÜKEMMEL!           │\n│                                     │\n└─────────────────────────────────────┘\n\nŞimdi alkış çal! 👏👏👏\n\n10 kere!\n\nHAYDI! 🎊',
        '🏆 BAŞARDIN! 🏆',
        '10 kere alkış çal!',
        {
          visual: 'BAŞARILAR:\n\n✅ 1-10 arası sayabiliyorsun!\n✅ Parmaklarını kullanıyorsun!\n✅ Toplama yapabiliyorsun!\n\n🌟 SÜPERSIN! 🌟',
          examples: [
            createExample(
              'Kaç sayıya kadar sayabiliyorsun?',
              '10\'a kadar!',
              '1, 2, 3, 4, 5, 6, 7, 8, 9, 10! MÜKEMMEL! 🏆',
              '1-10',
              ['Hepsini biliyorsun!', 'Süpersin!', 'TEBRİKLER! 🎉']
            )
          ],
          tip: '💡 Sen bir şampiyonsun! 10\'a kadar sayabiliyorsun! 🏆'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'İki elinde kaç parmak var? 🖐️🖐️',
        ['8', '9', '10', '11'],
        '10',
        'İki elde 10 parmak var! 🖐️🖐️ = 10',
        '🖐️🖐️',
        1,
        'Parmaklarını say!'
      ),

      createMultipleChoice(
        '9 + 1 = ?',
        ['8', '9', '10', '11'],
        '10',
        '9 artı 1 eşittir 10! BÜYÜK BAŞARI! 🎉',
        '9 + 1',
        1,
        '9\'a 1 ekle!'
      ),

      createMultipleChoice(
        '5 + 5 = ?',
        ['8', '9', '10', '11'],
        '10',
        '5 artı 5 eşittir 10! 🖐️ + 🖐️ = 10',
        '5 + 5',
        1,
        'İki el!'
      ),

      createFillBlank(
        '1, 2, 3, 4, 5, 6, 7, 8, 9, ___',
        ['10', 'on'],
        '9\'dan sonra 10 gelir! BÜYÜK SAYI!',
        '9 → ?',
        1,
        'Sırayla say!'
      ),

      createMultipleChoice(
        'Kaç tane yıldız? ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐',
        ['8', '9', '10', '11'],
        '10',
        'ON yıldız! ⭐ = 10! MÜKEMMEL!',
        '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐',
        1,
        'Yıldızları say!'
      ),

      createMultipleChoice(
        '6 + 4 = ?',
        ['8', '9', '10', '11'],
        '10',
        '6 artı 4 eşittir 10!',
        '6 + 4',
        1,
        '6 ile 4\'ü topla!'
      ),

      createMultipleChoice(
        '7 + 3 = ?',
        ['8', '9', '10', '11'],
        '10',
        '7 artı 3 eşittir 10!',
        '7 + 3',
        1,
        '7 ile 3\'ü topla!'
      ),

      createFillBlank(
        '10 yapmak için: 8 + ___ = 10',
        ['2', 'iki'],
        '8 artı 2 eşittir 10!',
        '8 + ? = 10',
        1,
        '8\'den 10\'a kaç lazım?'
      ),

      createMultipleChoice(
        'Kaç tane kalp? 💝💝💝💝💝💝💝💝💝💝',
        ['8', '9', '10', '11'],
        '10',
        'ON kalp! 💝 = 10! HARIKA!',
        '💝💝💝💝💝💝💝💝💝💝',
        1,
        'Kalpleri say!'
      ),

      createMultipleChoice(
        '4 + 6 = ?',
        ['8', '9', '10', '11'],
        '10',
        '4 artı 6 eşittir 10!',
        '4 + 6',
        1,
        '4 ile 6\'yı topla!'
      ),

      createMultipleChoice(
        '3 + 7 = ?',
        ['8', '9', '10', '11'],
        '10',
        '3 artı 7 eşittir 10!',
        '3 + 7',
        1,
        '3 ile 7\'yi topla!'
      ),

      createFillBlank(
        'Bir elde 5 parmak, diğerinde 5 parmak = ___ parmak',
        ['10', 'on'],
        '5 + 5 = 10 parmak! 🖐️🖐️',
        '🖐️ + 🖐️',
        1,
        'İki el!'
      ),

      createMultipleChoice(
        '2 + 8 = ?',
        ['8', '9', '10', '11'],
        '10',
        '2 artı 8 eşittir 10!',
        '2 + 8',
        1,
        '2 ile 8\'i topla!'
      ),

      createMultipleChoice(
        'Hangisi 10 tane?',
        ['🍎🍎🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎🍎'],
        '🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎',
        'Üçüncü seçenek! 🍎 = 10 elma! MÜKEMMEL!',
        undefined,
        1,
        'Elmaları say!'
      ),

      createMultipleChoice(
        '1 + 9 = ?',
        ['8', '9', '10', '11'],
        '10',
        '1 artı 9 eşittir 10!',
        '1 + 9',
        1,
        '1 ile 9\'u topla!'
      )
    ],

    summary: '🏆🏆🏆 BÜYÜK BAŞARI! 🏆🏆🏆\n\n✅ 10 = ON 🖐️🖐️\n✅ İki el = 10 parmak\n✅ 5 + 5 = 10 ⭐\n✅ 9 + 1 = 10\n✅ 1\'den 10\'a sayabiliyorsun!\n\n🎉 SEN MÜTHİŞSİN! 🎉\n\n10 SAYISINI ÖĞRENDİN!\n\nTEBRİKLER! 💝💝💝',

    nextTopicPreview: 'Bir sonraki derste tüm sayıları tekrar edeceğiz! 1-10 arasında BÜYÜK tekrar! 🎊'
  }
};
