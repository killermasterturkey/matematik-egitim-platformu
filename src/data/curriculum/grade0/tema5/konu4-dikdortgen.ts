// DESTEK SINIFI - TEMA 5 - KONU 4: DİKDÖRTGEN
// Dikdörtgen şeklini tanıma - uzun kare

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu4Dikdortgen: Topic = {
  id: 'dikdortgen',
  title: 'Dikdörtgen - Uzun Kare',
  description: 'Dikdörtgen - uzun kare gibi!',
  emoji: '▭',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['dikdörtgen', 'uzun', 'kare', 'kapı', 'telefon', 'kitap'],
  objectives: [
    'Dikdörtgen şeklini tanıyacaksın',
    '4 köşe olduğunu bileceksin',
    '4 kenar olduğunu bileceksin',
    'Dikdörtgen nesneleri bulacaksın'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün DİKDÖRTGEN öğreneceğiz!\n\nDikdörtgen uzun kare gibi!\n\n▭ 4 köşe, 4 kenar - ama uzun!\n\nHazır mısın? Başlayalım! 🎨',

    motivationQuote: 'Dikdörtgen uzun ve güzel! Sen de öğrenebilirsin! 💪',

    funFacts: [
      '▭ Dikdörtgenin 4 köşesi var!',
      '▭ Dikdörtgenin 4 kenarı var!',
      '▭ Kare gibi ama uzun!',
      '🚪 Kapı dikdörtgen!',
      '📱 Telefon dikdörtgen!',
      '📖 Kitap dikdörtgen!',
      '🪟 Bazı pencereler dikdörtgen!',
      '🚌 Otobüs dikdörtgen gibi!',
      '📺 Birçok TV dikdörtgen!',
      '🎫 Bilet dikdörtgen!'
    ],

    tips: [
      '💡 Kare gibi ama uzun!',
      '💡 Yine 4 köşe var!',
      '💡 Kapı gibi düşün!',
      '💡 Telefon gibi düşün!'
    ],

    steps: [
      // ADIM 1: DİKDÖRTGEN NEDİR?
      createStep(
        'Dikdörtgen Nedir?',
        '▭ DİKDÖRTGEN çok özel!\n\nBir varmış bir yokmuş...\n\nKare varmış.\n\nBir gün uzamış!\n\nDikdörtgen olmuş! ▭\n\n┌─────────────────────────────────────┐\n│                                     │\n│          ▭▭▭▭▭▭                    │\n│          ▭    ▭                    │\n│          ▭▭▭▭▭▭                    │\n│                                     │\n│      Bu bir DİKDÖRTGEN!             │\n│                                     │\n│      Kare gibi ama uzun!            │\n│                                     │\n└─────────────────────────────────────┘\n\nDikdörtgen köşelidir!\n\nAma uzundur! ⬜ → ▭\n\nGüzel değil mi? 💝',
        '▭ = Dikdörtgen = Uzun kare!',
        'Parmaklarınla dikdörtgen yap!',
        {
          visual: '▭ DİKDÖRTGEN\n\nÖzellikleri:\n✓ 4 köşe\n✓ 4 kenar\n✓ 2 kenar uzun\n✓ 2 kenar kısa\n✓ Kare gibi ama uzun!',
          examples: [
            createExample(
              'Dikdörtgen nasıl bir şekildir?',
              'Uzun kare gibi!',
              'Dikdörtgen kare gibidir ama uzundur! ⬜ → ▭',
              '▭',
              ['Kare gibi!', 'Ama uzun!', '4 köşe!']
            )
          ],
          tip: 'Kare düşün - sonra uzat! ⬜ → ▭'
        }
      ),

      // ADIM 2: KARE VS DİKDÖRTGEN
      createStep(
        'Kare mi? Dikdörtgen mi?',
        '🤔 KARE ve DİKDÖRTGEN\n\nBirbirlerine benziyorlar!\n\nAma farklılar!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   KARE:           DİKDÖRTGEN:       │\n│                                     │\n│   ⬜⬜⬜          ▭▭▭▭▭▭▭          │\n│   ⬜  ⬜          ▭     ▭          │\n│   ⬜⬜⬜          ▭▭▭▭▭▭▭          │\n│                                     │\n│   Eşit kenar      Uzun kenar        │\n│                                     │\n└─────────────────────────────────────┘\n\nİkisi de 4 köşeli!\n\nAma dikdörtgen uzun! ⬜ ≠ ▭\n\nGüzel değil mi? 🌟',
        '⬜ = Eşit, ▭ = Uzun!',
        'Farkı gör!',
        {
          visual: 'FARK:\n\n⬜ KARE\n• Tüm kenarlar eşit\n• Kısa ve dengeli\n\n▭ DİKDÖRTGEN\n• 2 uzun kenar\n• 2 kısa kenar\n• Uzun!',
          examples: [
            createExample(
              'Kare ve dikdörtgen arasındaki fark nedir?',
              'Dikdörtgen daha uzun!',
              'Kare dengeli ⬜, dikdörtgen uzun ▭!',
              '⬜ → ▭',
              ['Kare eşit!', 'Dikdörtgen uzun!', 'İkisi de 4 köşe!']
            )
          ],
          tip: 'Kareyi uzat - dikdörtgen olur! ⬜ → ▭'
        }
      ),

      // ADIM 3: KAPI - DİKDÖRTGEN
      createStep(
        'Kapı - Dikdörtgen Kapı',
        '🚪 KAPI!\n\nKapı dikdörtgendir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│            🚪                       │\n│                                     │\n│      Kapı uzundur!                  │\n│                                     │\n│      4 köşesi var!                  │\n│                                     │\n│      DİKDÖRTGEN!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nKapıdan geçeriz! 🚶\n\nKapı DİKDÖRTGEN! ▭',
        '🚪 Kapı = Dikdörtgen!',
        'Kapıya bak - uzun!',
        {
          visual: '🚪 KAPI\n\n  ●────────●\n  │        │  \n  │   🚪   │  \n  │        │\n  │        │  \n  ●────────●\n\n4 köşe!\nUzun!\nDİKDÖRTGEN! ▭',
          examples: [
            createExample(
              'Kapı hangi şekildir?',
              'Dikdörtgen!',
              'Kapı uzundur! 🚪 = Dikdörtgen! ▭',
              '🚪 → ▭',
              ['Kapı uzun!', '4 köşe!', 'Dikdörtgen!']
            )
          ],
          tip: 'Odandaki kapıya bak - dikdörtgen! 🚪'
        }
      ),

      // ADIM 4: TELEFON - CEPTE DİKDÖRTGEN
      createStep(
        'Telefon - Cepteki Dikdörtgen',
        '📱 TELEFON!\n\nTelefon dikdörtgendir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│            📱                       │\n│                                     │\n│      Telefon uzundur!               │\n│                                     │\n│      4 köşesi var!                  │\n│                                     │\n│      DİKDÖRTGEN!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nTelefonla konuşuruz! 📞\n\nTelefon DİKDÖRTGEN! ▭',
        '📱 Telefon = Dikdörtgen!',
        'Telefona bak - uzun!',
        {
          visual: '📱 TELEFON\n\n  ●──────●\n  │ 📱   │  \n  │      │  \n  │      │  \n  ●──────●\n\n4 köşe!\nUzun!\nDİKDÖRTGEN! ▭',
          examples: [
            createExample(
              'Telefon hangi şekildir?',
              'Dikdörtgen!',
              'Telefon uzundur! 📱 = Dikdörtgen! ▭',
              '📱 → ▭',
              ['Telefon uzun!', '4 köşe!', 'Dikdörtgen!']
            )
          ],
          tip: 'Telefonunu al - dikdörtgen! 📱'
        }
      ),

      // ADIM 5: KİTAP - BİLGİ DOLU DİKDÖRTGEN
      createStep(
        'Kitap - Bilgi Dolu Dikdörtgen',
        '📖 KİTAP!\n\nKitap dikdörtgendir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│            📖                       │\n│                                     │\n│      Kitap uzundur!                 │\n│                                     │\n│      4 köşesi var!                  │\n│                                     │\n│      DİKDÖRTGEN!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nKitap okumak güzel! 📚\n\nKitap DİKDÖRTGEN! ▭',
        '📖 Kitap = Dikdörtgen!',
        'Kitaba bak - uzun!',
        {
          visual: '📖 KİTAP\n\n  ●──────●\n  │      │  \n  │  📖  │  \n  │      │  \n  ●──────●\n\n4 köşe!\nUzun!\nDİKDÖRTGEN! ▭',
          examples: [
            createExample(
              'Kitap hangi şekildir?',
              'Dikdörtgen!',
              'Kitap uzundur! 📖 = Dikdörtgen! ▭',
              '📖 → ▭',
              ['Kitap uzun!', '4 köşe!', 'Dikdörtgen!']
            )
          ],
          tip: 'Bir kitap al - dikdörtgen! 📖'
        }
      ),

      // ADIM 6: DİKDÖRTGEN ÇİZELİM
      createStep(
        'Dikdörtgen Çizelim!',
        '🎨 Şimdi dikdörtgen çizeceğiz!\n\nKolay!\n\nHazır mısın? ✏️\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1. Uzun yatay çizgi ────────      │\n│                                     │\n│   2. Aşağı kısa in │                │\n│                                     │\n│   3. Sola uzun git ────────         │\n│                                     │\n│   4. Yukarı kısa çık │              │\n│                                     │\n│   5. Dikdörtgen oldu! ▭             │\n│                                     │\n└─────────────────────────────────────┘\n\nAferin! 👏\n\nŞimdi sen çiz! ✏️',
        '✏️ Dikdörtgen çizme zamanı!',
        'Uzun çiz!',
        {
          visual: 'DİKDÖRTGEN ÇİZME:\n\n1️⃣ ●──────●\n2️⃣ ●──────●\n         │\n3️⃣ ●──────●\n   │      │\n4️⃣ ●──────●\n   │      │\n5️⃣ ●──────●\n\nBitti! ▭',
          examples: [
            createExample(
              'Dikdörtgen nasıl çizilir?',
              'Uzun çizgiler çizeriz!',
              '2 uzun, 2 kısa çizgi! ─── │ ─── │ = ▭',
              '✏️ → ▭',
              ['Uzun yatay!', 'Kısa dikey!', 'Tekrar et!', 'Dikdörtgen!']
            )
          ],
          tip: 'Her gün dikdörtgen çiz! ✏️'
        }
      ),

      // ADIM 7: DİKDÖRTGEN AVI
      createStep(
        'Dikdörtgen Avı',
        '🔍 DİKDÖRTGEN AVI!\n\nEtrafına bak!\n\nKaç dikdörtgen var?\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🚪 Kapı - dikdörtgen!             │\n│                                     │\n│   📱 Telefon - dikdörtgen!          │\n│                                     │\n│   📖 Kitap - dikdörtgen!            │\n│                                     │\n│   🪟 Pencere - dikdörtgen!          │\n│                                     │\n│   📺 TV - dikdörtgen!               │\n│                                     │\n└─────────────────────────────────────┘\n\nHer yerde dikdörtgen var!\n\nBul ve say! 🎯',
        '🔍 Dikdörtgen bul!',
        'Uzun şeyler ara!',
        {
          visual: 'EVDE DİKDÖRTGENLER:\n\n🚪 Kapılar\n📱 Telefonlar\n📖 Kitaplar\n🪟 Pencereler\n📺 TV\'ler\n🎫 Biletler\n💳 Kartlar\n\nHepsi ▭!',
          examples: [
            createExample(
              'Evde dikdörtgen neler var?',
              'Kapı, telefon, kitap!',
              'Kapı 🚪, telefon 📱, kitap 📖 = Dikdörtgen! ▭',
              '🚪📱📖 → ▭',
              ['Kapı!', 'Telefon!', 'Kitap!', 'Hepsi dikdörtgen!']
            )
          ],
          tip: 'Bugün 10 dikdörtgen bul! 🎯'
        }
      ),

      // ADIM 8: DİKDÖRTGEN ŞARKISI
      createStep(
        'Dikdörtgen Şarkısı',
        '🎵 DİKDÖRTGEN ŞARKISI! 🎵\n\n(Şarkı söyleyelim!)\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Dikdörtgen uzun bir şekil         │\n│   Dört köşe, çok güzel! ▭           │\n│                                     │\n│   Kapı gibi, kitap gibi             │\n│   Telefon gibi uzun! 📱             │\n│                                     │\n│   İki uzun, iki kısa                │\n│   Dikdörtgen çok güzel! ▭           │\n│                                     │\n└─────────────────────────────────────┘\n\n🎵 Hep birlikte söyle! 🎵\n\nKollarını uzat! 💪\n\nDikdörtgen gibi! 🎪',
        '🎵 Şarkı söyle!',
        'Dikdörtgen şarkısı!',
        {
          visual: 'HAREKETLİ OYUN:\n\n▭ Uzun adımlar at!\n💪 Kollarını uzat!\n🎨 Dikdörtgen çiz!\n🎵 Şarkı söyle!\n\nEğlen!',
          examples: [
            createExample(
              'Dikdörtgen nasıl bir şekildir?',
              'Uzun!',
              'Dikdörtgen uzundur! ▭',
              '▭',
              ['Uzun!', '4 köşe!', 'Güzel!']
            )
          ],
          tip: 'Aileninle şarkı söyle! 🎵'
        }
      )
    ],

    // PRATİK SORULAR
    practiceQuestions: [
      createMultipleChoice(
        'Hangi şekil dikdörtgendir? ▭',
        ['▭', '⭕', '🔺', '⬜'],
        '▭',
        'Uzun olan dikdörtgendir! ▭',
        '▭',
        1,
        'Uzun olanı seç!'
      ),

      createMultipleChoice(
        'Dikdörtgenin kaç köşesi var?',
        ['2 köşe', '3 köşe', '4 köşe', '5 köşe'],
        '4 köşe',
        'Dikdörtgenin 4 köşesi vardır! ▭ = 4 köşe!',
        '▭',
        1,
        'Köşeleri say!'
      ),

      createMultipleChoice(
        'Hangisi dikdörtgen şeklindedir? 🎯',
        ['🚪 Kapı', '⚽ Top', '🔺 Üçgen', '⭕ Daire'],
        '🚪 Kapı',
        'Kapı uzundur! 🚪 = Dikdörtgen! ▭',
        '🚪',
        1,
        'Uzun olanı bul!'
      ),

      createFillBlank(
        'Dikdörtgen ___ kare gibidir.',
        ['uzun'],
        'Dikdörtgen uzun kare gibidir! ⬜ → ▭',
        '▭',
        1,
        'Nasıl kare?'
      ),

      createMultipleChoice(
        '📱 Telefon hangi şekildir?',
        ['Dikdörtgen', 'Daire', 'Üçgen', 'Yıldız'],
        'Dikdörtgen',
        'Telefon uzundur! 📱 = Dikdörtgen! ▭',
        '📱',
        1,
        'Telefon uzun!'
      ),

      createMultipleChoice(
        '📖 Kitap hangi şekildir?',
        ['Dikdörtgen', 'Daire', 'Üçgen', 'Kare'],
        'Dikdörtgen',
        'Kitap uzundur! 📖 = Dikdörtgen! ▭',
        '📖',
        1,
        'Kitap uzun!'
      ),

      createMultipleChoice(
        'Kare ve dikdörtgen arasındaki fark nedir?',
        ['Dikdörtgen daha uzun', 'İkisi de aynı', 'Kare daha uzun', 'Bilmiyorum'],
        'Dikdörtgen daha uzun',
        'Kare eşit ⬜, dikdörtgen uzun ▭!',
        '⬜ ≠ ▭',
        1,
        'Dikdörtgen uzun!'
      ),

      createFillBlank(
        'Dikdörtgenin ___ kenarı vardır.',
        ['4', 'dört'],
        'Dikdörtgenin 4 kenarı vardır! ▭',
        '▭',
        1,
        'Kaç kenar?'
      ),

      createMultipleChoice(
        'Hangisi dikdörtgen değildir?',
        ['⭕ Daire', '🚪 Kapı', '📱 Telefon', '📖 Kitap'],
        '⭕ Daire',
        'Daire yuvarlaktır! ⭕ Dikdörtgen değildir! ▭',
        '⭕ ≠ ▭',
        1,
        'Yuvarlak olanı bul!'
      ),

      createMultipleChoice(
        '🚪 Kapı neden dikdörtgendir?',
        ['Uzundur', 'Kısadır', 'Yuvarlaktır', 'Sivridir'],
        'Uzundur',
        'Kapı uzundur! 🚪 = Dikdörtgen! ▭',
        '🚪',
        1,
        'Kapı uzun!'
      ),

      createMultipleChoice(
        'Dikdörtgenin kaç kenarı uzundur?',
        ['2 kenar uzun', '1 kenar uzun', '3 kenar uzun', '4 kenar uzun'],
        '2 kenar uzun',
        'Dikdörtgenin 2 kenarı uzun, 2 kenarı kısa! ▭',
        '▭',
        1,
        '2 uzun, 2 kısa!'
      ),

      createMultipleChoice(
        'Hangisi dikdörtgen şeklindedir?',
        ['🎫 Bilet', '⚽ Top', '🔺 Üçgen', '⭕ Daire'],
        '🎫 Bilet',
        'Bilet uzundur! 🎫 = Dikdörtgen! ▭',
        '🎫',
        1,
        'Uzun olanı seç!'
      ),

      createMultipleChoice(
        'Dikdörtgen çizmek için ne yapmalıyız?',
        ['Uzun çizgiler çizmeliyiz', 'Yuvarlak çizmeliyiz', 'Sivri çizmeliyiz', 'Bilmiyorum'],
        'Uzun çizgiler çizmeliyiz',
        'Uzun çizgiler çizeriz! ─── │ ─── │ = ▭',
        '▭',
        1,
        'Uzun çiz!'
      ),

      createFillBlank(
        'Kapı ___ şeklindedir.',
        ['dikdörtgen', 'uzun'],
        'Kapı dikdörtgen şeklindedir! 🚪 = ▭',
        '🚪',
        1,
        'Kapının şekli ne?'
      ),

      createMultipleChoice(
        'Dikdörtgende toplam kaç köşe ve kenar var?',
        ['4 köşe + 4 kenar = 8', '2 köşe + 2 kenar = 4', '3 köşe + 3 kenar = 6', '5 köşe + 5 kenar = 10'],
        '4 köşe + 4 kenar = 8',
        '4 köşe + 4 kenar = 8 tane! ▭',
        '▭',
        1,
        'Hepsini say!'
      )
    ],

    summary: '🎉 Bugün dikdörtgen öğrendin!\n\n✅ Dikdörtgen uzundur ▭\n✅ 4 köşesi var\n✅ 4 kenarı var (2 uzun, 2 kısa)\n✅ Kapı dikdörtgen 🚪\n✅ Telefon dikdörtgen 📱\n✅ Kitap dikdörtgen 📖\n\nEtrafındaki dikdörtgenleri bul! 🔍\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste şekilleri tanıma ve eşleştirme oyunları oynayacağız! 🎮'
  }
};
