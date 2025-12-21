// DESTEK SINIFI - TEMA 3 - KONU 6: 1-10 BÜYÜK TEKRAR VE KUTLAMA
// Final dersi - her şeyi tekrar - büyük kutlama!

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu6Tekrar: Topic = {
  id: 'bir-on-tekrar',
  title: '1-10 Büyük Tekrar ve Kutlama',
  description: 'Tüm sayıları birlikte tekrar edelim! Final kutlaması! 🎊',
  emoji: '🎊',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['tekrar', '1-10', 'kutlama', 'final', 'başarı'],
  objectives: [
    '1\'den 10\'a tüm sayıları tekrar edeceksin',
    'Her sayının özelliğini hatırlayacaksın',
    'Sayı şarkısı söyleyeceksin',
    'BÜYÜK BAŞARI kutlaması yapacaksın!'
  ],

  content: {
    introduction: '🎊🎊🎊 BÜYÜK KUTLAMA! 🎊🎊🎊\n\nBugün tüm sayıları tekrar edeceğiz!\n\n1\'den 10\'a!\n\nHer birini hatırlayacağız!\n\nVe...\n\nBÜYÜK KUTLAMA YAPACAĞIZ! 🎉\n\nHazır mısın?\n\nBAŞLAYALIM! 🏆',

    motivationQuote: 'SEN BİR ŞAMPİYONSUN! 1\'DEN 10\'A KADAR HERŞEYİ BİLİYORSUN! 🌟',

    funFacts: [
      '🎉 Sen artık 10\'a kadar sayabiliyorsun!',
      '🏆 Bu büyük bir başarı!',
      '⭐ Her sayıyı öğrendin!',
      '💪 Çok çalıştın, başardın!',
      '🎊 Gurur duyabilirsin!',
      '🌟 10 sayı = 10 arkadaş!',
      '🖐️🖐️ Parmaklarınla her şeyi sayabilirsin!',
      '🎯 Matematik yolculuğu başladı!'
    ],

    steps: [
      createStep(
        'BİR (1) - İlk Arkadaşımız',
        '☝️ BİR!\n\nİlk sayımız!\n\n┌─────────────────────────────────────┐\n│                                     │\n│         1 = BİR ☝️                  │\n│                                     │\n│           🔵                        │\n│                                     │\n│       Bir parmak!                   │\n│                                     │\n└─────────────────────────────────────┘\n\nHatırla:\n\n☀️ Gökyüzünde BİR güneş!\n\n🌙 Gökte BİR ay!\n\nBİR özel! 💝',
        '1 = BİR ☝️',
        'Bir parmağını kaldır!',
        {
          visual: '1️⃣ = BİR\n\n☝️ = 1 parmak\n\n🔵 = 1 top',
          examples: [
            createExample(
              'BİR sayısı kaç parmak?',
              '1 parmak! ☝️',
              'BİR = ☝️ bir parmak!',
              '☝️',
              ['Bir parmak kaldır!']
            )
          ],
          tip: '💡 1 = başlangıç!'
        }
      ),

      createStep(
        'İKİ (2) - Çift Arkadaş',
        '✌️ İKİ!\n\n┌─────────────────────────────────────┐\n│                                     │\n│         2 = İKİ ✌️                  │\n│                                     │\n│          🔵🔵                       │\n│                                     │\n│       İki parmak!                   │\n│                                     │\n└─────────────────────────────────────┘\n\nHatırla:\n\n👀 İki göz!\n\n👂 İki kulak!\n\n🦶 İki ayak!\n\nİKİ = çift! 💝',
        '2 = İKİ ✌️',
        'İki parmağını kaldır!',
        {
          visual: '2️⃣ = İKİ\n\n✌️ = 2 parmak\n\n👀 = 2 göz',
          examples: [
            createExample(
              'İKİ sayısı kaç parmak?',
              '2 parmak! ✌️',
              'İKİ = ✌️ iki parmak!',
              '✌️',
              ['İki parmak kaldır!']
            )
          ],
          tip: '💡 2 = çift!'
        }
      ),

      createStep(
        'ÜÇ (3) - Trafik Işığı',
        '🤟 ÜÇ!\n\n┌─────────────────────────────────────┐\n│         3 = ÜÇ 🤟                   │\n│                                     │\n│         🔵🔵🔵                      │\n│                                     │\n│       Üç parmak!                    │\n└─────────────────────────────────────┘\n\nHatırla:\n\n🚦 Trafik ışığı = 3 renk!\n\n🔴🟡🟢\n\nÜÇ özel! 💝',
        '3 = ÜÇ 🤟',
        'Üç parmağını kaldır!',
        {
          visual: '3️⃣ = ÜÇ\n\n🤟 = 3 parmak\n\n🚦 = 3 ışık',
          examples: [
            createExample(
              'ÜÇ sayısı kaç parmak?',
              '3 parmak! 🤟',
              'ÜÇ = 🤟 üç parmak!',
              '🤟',
              ['Üç parmak kaldır!']
            )
          ],
          tip: '💡 3 = trafik ışığı!'
        }
      ),

      createStep(
        'DÖRT (4) - Köpek Ayakları',
        '🖖 DÖRT!\n\n┌─────────────────────────────────────┐\n│        4 = DÖRT 🖖                  │\n│                                     │\n│        🔵🔵🔵🔵                     │\n│                                     │\n│       Dört parmak!                  │\n└─────────────────────────────────────┘\n\nHatırla:\n\n🐕 Köpek = 4 ayak!\n\n🪑 Sandalye = 4 ayak!\n\nDÖRT özel! 💝',
        '4 = DÖRT 🖖',
        'Dört parmağını kaldır!',
        {
          visual: '4️⃣ = DÖRT\n\n🖖 = 4 parmak\n\n🐕 = 4 ayak',
          examples: [
            createExample(
              'DÖRT sayısı kaç parmak?',
              '4 parmak! 🖖',
              'DÖRT = 🖖 dört parmak!',
              '🖖',
              ['Dört parmak kaldır!']
            )
          ],
          tip: '💡 4 = köpek ayakları!'
        }
      ),

      createStep(
        'BEŞ (5) - Bir El!',
        '🖐️ BEŞ!\n\n┌─────────────────────────────────────┐\n│        5 = BEŞ 🖐️                  │\n│                                     │\n│      🔵🔵🔵🔵🔵                     │\n│                                     │\n│      Bir el = 5 parmak!             │\n└─────────────────────────────────────┘\n\nHatırla:\n\n🖐️ Bir el = 5 parmak!\n\nBEŞ ÇOK ÖZEL! 💝\n\nYarı yol! 🎉',
        '5 = BEŞ 🖐️',
        'Bir elini aç!',
        {
          visual: '5️⃣ = BEŞ\n\n🖐️ = 5 parmak\n\nBir el!',
          examples: [
            createExample(
              'BEŞ sayısı kaç parmak?',
              '5 parmak! 🖐️',
              'BEŞ = 🖐️ bir el!',
              '🖐️',
              ['Bir elini aç!']
            )
          ],
          tip: '💡 5 = bir el!'
        }
      ),

      createStep(
        'ALTI (6) - Zar!',
        '🎲 ALTI!\n\n┌─────────────────────────────────────┐\n│        6 = ALTI 🎲                  │\n│                                     │\n│     🔵🔵🔵🔵🔵🔵                    │\n│                                     │\n│      5 + 1 = 6!                     │\n└─────────────────────────────────────┘\n\nHatırla:\n\n🎲 Zar = 6 nokta!\n\n5 + 1 = 6! 💝',
        '6 = ALTI 🎲',
        '5 + 1 parmak!',
        {
          visual: '6️⃣ = ALTI\n\n🖐️☝️ = 6 parmak\n\n🎲 = 6 nokta',
          examples: [
            createExample(
              'ALTI nasıl yapılır?',
              '5 + 1 = 6!',
              'ALTI = 5 artı 1!',
              '5 + 1',
              ['Bir el, bir parmak!']
            )
          ],
          tip: '💡 6 = zar!'
        }
      ),

      createStep(
        'YEDİ (7) - Gökkuşağı!',
        '🌈 YEDİ!\n\n┌─────────────────────────────────────┐\n│        7 = YEDİ 🌈                  │\n│                                     │\n│    🔵🔵🔵🔵🔵🔵🔵                   │\n│                                     │\n│     Gökkuşağı = 7 renk!             │\n└─────────────────────────────────────┘\n\nHatırla:\n\n🌈 Gökkuşağı = 7 renk!\n\n📅 Hafta = 7 gün! 💝',
        '7 = YEDİ 🌈',
        'Gökkuşağını düşün!',
        {
          visual: '7️⃣ = YEDİ\n\n🌈 = 7 renk\n\n📅 = 7 gün',
          examples: [
            createExample(
              'Gökkuşağında kaç renk?',
              '7 renk!',
              'YEDİ = 🌈 yedi renk!',
              '🌈',
              ['Gökkuşağı = 7!']
            )
          ],
          tip: '💡 7 = gökkuşağı!'
        }
      ),

      createStep(
        'SEKİZ (8) - Ahtapot!',
        '🐙 SEKİZ!\n\n┌─────────────────────────────────────┐\n│        8 = SEKİZ 🐙                 │\n│                                     │\n│   🔵🔵🔵🔵🔵🔵🔵🔵                  │\n│                                     │\n│     Ahtapot = 8 kol!                │\n└─────────────────────────────────────┘\n\nHatırla:\n\n🐙 Ahtapot = 8 kol!\n\n4 + 4 = 8! 💝\n\n8 → ∞ sonsuzluk!',
        '8 = SEKİZ 🐙',
        'Ahtapotu düşün!',
        {
          visual: '8️⃣ = SEKİZ\n\n🐙 = 8 kol\n\n4 + 4 = 8',
          examples: [
            createExample(
              'Ahtapotun kaç kolu?',
              '8 kol!',
              'SEKİZ = 🐙 sekiz kol!',
              '🐙',
              ['Ahtapot = 8!']
            )
          ],
          tip: '💡 8 = ahtapot!'
        }
      ),

      createStep(
        'DOKUZ (9) - Kedi!',
        '🐱 DOKUZ!\n\n┌─────────────────────────────────────┐\n│        9 = DOKUZ 🐱                 │\n│                                     │\n│  🔵🔵🔵🔵🔵🔵🔵🔵🔵                 │\n│                                     │\n│     Kedi = 9 can!                   │\n└─────────────────────────────────────┘\n\nHatırla:\n\n🐱 Kedi = 9 can!\n\n10 - 1 = 9! 💝\n\nNeredeyse 10!',
        '9 = DOKUZ 🐱',
        'Kediyi düşün!',
        {
          visual: '9️⃣ = DOKUZ\n\n🐱 = 9 can\n\n10 - 1 = 9',
          examples: [
            createExample(
              'Kedinin kaç canı?',
              '9 can!',
              'DOKUZ = 🐱 dokuz can!',
              '🐱',
              ['Kedi = 9!']
            )
          ],
          tip: '💡 9 = neredeyse 10!'
        }
      ),

      createStep(
        'ON (10) - İKİ EL!',
        '🖐️🖐️ ON!\n\n┌─────────────────────────────────────┐\n│       10 = ON 🖐️🖐️                │\n│                                     │\n│ 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵                │\n│                                     │\n│     İki el = 10 parmak!             │\n│                                     │\n│      🏆 BÜYÜK SAYI! 🏆              │\n└─────────────────────────────────────┘\n\nHatırla:\n\n🖐️🖐️ İki el = 10 parmak!\n\n5 + 5 = 10! 💝\n\nBÜYÜK BAŞARI! 🎉',
        '10 = ON 🖐️🖐️',
        'İki elini aç!',
        {
          visual: '1️⃣0️⃣ = ON\n\n🖐️🖐️ = 10 parmak\n\n5 + 5 = 10',
          examples: [
            createExample(
              'İki elde kaç parmak?',
              '10 parmak!',
              'ON = 🖐️🖐️ on parmak!',
              '🖐️🖐️',
              ['İki el = 10!']
            )
          ],
          tip: '💡 10 = BÜYÜK BAŞARI!'
        }
      ),

      createStep(
        'SAYI ŞARKISI! 🎵',
        '🎵 Hadi şarkı söyleyelim!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Bir, iki, üç! 🎵                  │\n│   Sayılar çok güzel!                │\n│                                     │\n│   Dört, beş, altı! 🎵               │\n│   Öğrenmek harika!                  │\n│                                     │\n│   Yedi, sekiz, dokuz! 🎵            │\n│   Neredeyse bitti!                  │\n│                                     │\n│   Ve... ON! 🎉                      │\n│   BAŞARDIK! 🏆                      │\n│                                     │\n└─────────────────────────────────────┘\n\nHep birlikte söyle!\n\n1, 2, 3, 4, 5, 6, 7, 8, 9, 10!\n\nBRAVO! 👏👏👏',
        '🎵 Sayı şarkısı!',
        'Şarkıyla say!',
        {
          visual: '🎵 Şarkı:\n\n1-2-3 ♪\n4-5-6 ♫\n7-8-9 ♪\n10! 🎉',
          examples: [
            createExample(
              'Şarkıyla 10\'a kadar say!',
              '1, 2, 3, 4, 5, 6, 7, 8, 9, 10!',
              'Şarkı söyleyerek say! Çok eğlenceli! 🎵',
              '🎵',
              ['Şarkı söyle!', 'Eğlen!', 'Say!']
            )
          ],
          tip: '💡 Şarkıyla öğrenmek kolay!'
        }
      ),

      createStep(
        'FİNAL KUTLAMASI! 🎊',
        '🎊🎊🎊 FİNAL KUTLAMASI! 🎊🎊🎊\n\n┌─────────────────────────────────────┐\n│                                     │\n│      🏆 TEBRİKLER! 🏆               │\n│                                     │\n│   1-10 ARASI TÜM SAYILARI           │\n│   ÖĞRENDİN!                         │\n│                                     │\n│   🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟               │\n│                                     │\n│   10 YILDIZ!                        │\n│   MÜKEMMEL BAŞARI!                  │\n│                                     │\n│      SEN BİR ŞAMPİYONSUN!           │\n│                                     │\n└─────────────────────────────────────┘\n\n🎉 Alkış! 👏👏👏\n\n💝 Sarıl! 🤗\n\n🏆 Gurur duy!\n\nÇOK İYİ İŞ ÇIKARDIN! 🌟',
        '🏆 BAŞARDIN! 🏆',
        'Kendini kutla!',
        {
          visual: 'BAŞARILAR:\n\n✅ 1-10 sayılar\n✅ Parmakla sayma\n✅ Toplama\n✅ Hafıza\n\n🎉 SÜPER! 🎉',
          examples: [
            createExample(
              'Kaç sayı öğrendin?',
              '10 sayı!',
              '1, 2, 3, 4, 5, 6, 7, 8, 9, 10! Hepsini öğrendin! 🏆',
              '1-10',
              ['Hepsi!', 'Mükemmel!', 'Şampiyon!']
            )
          ],
          tip: '💡 SEN MÜKEMMEL BİR ÖĞRENCİSİN! 🌟'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Bir elde kaç parmak var?',
        ['3', '4', '5', '6'],
        '5',
        'Bir elde 5 parmak var! 🖐️',
        '🖐️',
        1,
        'Parmaklarını say!'
      ),

      createMultipleChoice(
        'İki elde kaç parmak var?',
        ['8', '9', '10', '11'],
        '10',
        'İki elde 10 parmak var! 🖐️🖐️',
        '🖐️🖐️',
        1,
        'İki elini say!'
      ),

      createFillBlank(
        '1, 2, 3, 4, ___',
        ['5', 'beş'],
        '4\'ten sonra 5 gelir!',
        '4 → ?',
        1,
        'Sırayla say!'
      ),

      createMultipleChoice(
        'Gökkuşağında kaç renk var?',
        ['5', '6', '7', '8'],
        '7',
        'Gökkuşağında 7 renk var! 🌈',
        '🌈',
        1,
        'Gökkuşağını hatırla!'
      ),

      createMultipleChoice(
        'Zarda kaç nokta var?',
        ['4', '5', '6', '7'],
        '6',
        'Zarda 6 nokta var! 🎲',
        '🎲',
        1,
        'Zarı hatırla!'
      ),

      createMultipleChoice(
        'Ahtapotun kaç kolu var?',
        ['6', '7', '8', '9'],
        '8',
        'Ahtapotun 8 kolu var! 🐙',
        '🐙',
        1,
        'Ahtapotu hatırla!'
      ),

      createMultipleChoice(
        '5 + 5 = ?',
        ['8', '9', '10', '11'],
        '10',
        '5 artı 5 eşittir 10! 🖐️ + 🖐️',
        '5 + 5',
        1,
        'İki el!'
      ),

      createFillBlank(
        '___, 8, 9, 10',
        ['7', 'yedi'],
        '7\'den sonra 8 gelir!',
        '? → 8',
        1,
        'Geriye say!'
      ),

      createMultipleChoice(
        'Bir haftada kaç gün var?',
        ['5', '6', '7', '8'],
        '7',
        'Bir haftada 7 gün var! 📅',
        '📅',
        1,
        'Haftayı hatırla!'
      ),

      createMultipleChoice(
        '4 + 4 = ?',
        ['6', '7', '8', '9'],
        '8',
        '4 artı 4 eşittir 8!',
        '4 + 4',
        1,
        'İki tane 4!'
      ),

      createFillBlank(
        '10 - 1 = ___',
        ['9', 'dokuz'],
        '10 eksi 1 eşittir 9!',
        '10 - 1',
        1,
        '10\'dan 1 çıkar!'
      ),

      createMultipleChoice(
        'Köpeğin kaç ayağı var?',
        ['2', '3', '4', '5'],
        '4',
        'Köpeğin 4 ayağı var! 🐕',
        '🐕',
        1,
        'Köpeği hatırla!'
      ),

      createMultipleChoice(
        '3 + 3 = ?',
        ['4', '5', '6', '7'],
        '6',
        '3 artı 3 eşittir 6!',
        '3 + 3',
        1,
        'İki tane 3!'
      ),

      createFillBlank(
        '1, 2, 3, 4, 5, 6, 7, 8, 9, ___',
        ['10', 'on'],
        '9\'dan sonra 10 gelir! FİNAL!',
        '9 → ?',
        1,
        'Son sayı!'
      ),

      createMultipleChoice(
        '1\'den 10\'a kadar kaç sayı var?',
        ['8', '9', '10', '11'],
        '10',
        '1, 2, 3, 4, 5, 6, 7, 8, 9, 10 = 10 sayı!',
        '1-10',
        1,
        'Hepsini say!'
      )
    ],

    summary: '🏆🏆🏆 FİNAL KUTLAMASI! 🏆🏆🏆\n\n🎊 TEBRİKLER! 🎊\n\n✅ 1-10 tüm sayıları öğrendin!\n✅ Parmakla saymayı öğrendin!\n✅ Toplama yaptın!\n✅ Her sayının özelliğini biliyorsun!\n\n🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟\n\n10 YILDIZ KAZANDIN!\n\nSEN BİR ŞAMPİYONSUN!\n\nÇOK GURUR DUYUYORUZ! 💝💝💝\n\nAFERİN SANA! 🎉',

    nextTopicPreview: 'Artık hazırsın! Bir sonraki temada TOPLAMA VE ÇIKARMA öğreneceğiz! 🎯'
  }
};
