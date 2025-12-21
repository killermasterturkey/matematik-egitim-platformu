// DESTEK SINIFI - TEMA 6 - KONU 2: BÜYÜK - KÜÇÜK - ORTA
// Boyut karşılaştırması - 3 Ayı Masalı

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu2BuyukKucukOrta: Topic = {
  id: 'buyuk-kucuk-orta',
  title: 'Büyük - Küçük - Orta',
  description: '3 Ayı gibi! Büyük, orta, küçük!',
  emoji: '🐻',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['büyük', 'küçük', 'orta', 'boyut', 'karşılaştırma', '3 ayı'],
  objectives: [
    'Büyük - küçük - orta kavramlarını anlayacaksın',
    'Nesneleri boyuta göre sıralayacaksın',
    '3 Ayı masalını öğreneceksin',
    'Karşılaştırma yapacaksın'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün büyüklükleri öğreneceğiz!\n\n🐻 Büyük, 🐻 Orta, 🐻 Küçük\n\n3 Ayı masalı gibi!\n\nHazır mısın? Başlayalım! 📚',

    motivationQuote: 'Her boyut özeldir! 🐻',

    funFacts: [
      '🐘 Fil çok büyüktür!',
      '🐭 Fare çok küçüktür!',
      '🐶 Köpek ortadır!',
      '🐻 3 Ayı masalında 3 ayı var!',
      '📏 Boyutlar önemlidir!',
      '🌳 Ağaçlar büyüktür!',
      '🌼 Çiçekler küçüktür!',
      '🏠 Evler büyüktür!',
      '🏡 Kulübeler küçüktür!',
      '⭐ Her boyut güzeldir!'
    ],

    tips: [
      '💡 Büyük = Çok yer kaplar!',
      '💡 Küçük = Az yer kaplar!',
      '💡 Orta = İkisinin arası!',
      '💡 3 Ayıyı hatırla!'
    ],

    steps: [
      createStep(
        '3 Ayı Masalı',
        '📚 3 AYI MASALI!\n\nBir varmış bir yokmuş...\n\nBir evde 3 ayı yaşarmış:\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🐻 BABA AYI                       │\n│   Çok BÜYÜK ayı!                    │\n│                                     │\n│   🐻 ANNE AYI                       │\n│   ORTA boyda ayı!                   │\n│                                     │\n│   🐻 YAVRU AYI                      │\n│   Çok KÜÇÜK ayı!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nÜç farklı boyut!\n\nBüyük, orta, küçük! 🐻',
        '🐻 3 Ayı = 3 Boyut!',
        '3 Ayıyı hatırla!',
        {
          visual: '3 AYI:\n\n🐻 Büyük\n  (Baba ayı)\n\n🐻 Orta\n  (Anne ayı)\n\n🐻 Küçük\n  (Yavru ayı)\n\n3 boyut!',
          examples: [
            createExample(
              'Baba ayı nasıl bir ayıdır?',
              'Büyük ayı!',
              'Baba ayı en büyüktür! 🐻 (BÜYÜK)',
              '🐻',
              ['Baba ayı!', 'En büyük!', 'Çok büyük!']
            )
          ],
          tip: '3 Ayı masalını dinle! 📚'
        }
      ),

      createStep(
        'Büyük',
        '🐻 BÜYÜK!\n\nBaba ayı BÜYÜK!\n\nÇok yer kaplar!\n\n┌─────────────────────────────────────┐\n│                                     │\n│         🐻 BÜYÜK AYI                │\n│                                     │\n│   • Çok yer kaplar                  │\n│   • Sandalyesi büyük 🪑             │\n│   • Yatağı büyük 🛏️                │\n│   • Tabağı büyük 🍽️                │\n│                                     │\n│   En BÜYÜK! 🐻                      │\n│                                     │\n└─────────────────────────────────────┘\n\nBüyük çok fazla yer kaplar!\n\nBaba ayı gibi! 🐻',
        '🐻 Büyük = Çok yer!',
        'Büyük nesneleri bul!',
        {
          visual: 'BÜYÜK:\n\n🐘 Fil\n🏠 Ev\n🚌 Otobüs\n🌳 Ağaç\n⛰️ Dağ\n\nÇok büyük!',
          examples: [
            createExample(
              'Fil nasıldır?',
              'Büyüktür!',
              'Fil çok büyüktür! 🐘 Çok yer kaplar!',
              '🐘',
              ['Fil büyük!', 'Çok yer!', 'En büyük!']
            )
          ],
          tip: 'Büyük nesnelere bak - çok yer kaplar! 🐘'
        }
      ),

      createStep(
        'Küçük',
        '🐻 KÜÇÜK!\n\nYavru ayı KÜÇÜK!\n\nAz yer kaplar!\n\n┌─────────────────────────────────────┐\n│                                     │\n│         🐻 KÜÇÜK AYI                │\n│                                     │\n│   • Az yer kaplar                   │\n│   • Sandalyesi küçük 🪑             │\n│   • Yatağı küçük 🛏️                │\n│   • Tabağı küçük 🍽️                │\n│                                     │\n│   En KÜÇÜK! 🐻                      │\n│                                     │\n└─────────────────────────────────────┘\n\nKüçük az yer kaplar!\n\nYavru ayı gibi! 🐻',
        '🐻 Küçük = Az yer!',
        'Küçük nesneleri bul!',
        {
          visual: 'KÜÇÜK:\n\n🐭 Fare\n🐝 Arı\n🌼 Çiçek\n🍎 Elma\n⚽ Top\n\nÇok küçük!',
          examples: [
            createExample(
              'Fare nasıldır?',
              'Küçüktür!',
              'Fare çok küçüktür! 🐭 Az yer kaplar!',
              '🐭',
              ['Fare küçük!', 'Az yer!', 'En küçük!']
            )
          ],
          tip: 'Küçük nesnelere bak - az yer kaplar! 🐭'
        }
      ),

      createStep(
        'Orta',
        '🐻 ORTA!\n\nAnne ayı ORTA!\n\nİkisinin arası!\n\n┌─────────────────────────────────────┐\n│                                     │\n│         🐻 ORTA AYI                 │\n│                                     │\n│   • Ne çok büyük                    │\n│   • Ne çok küçük                    │\n│   • İkisinin arası! 🐻              │\n│   • Tam ortada!                     │\n│                                     │\n│   ORTA boyda! 🐻                    │\n│                                     │\n└─────────────────────────────────────┘\n\nOrta ikisinin arası!\n\nAnne ayı gibi! 🐻',
        '🐻 Orta = Arada!',
        'Orta boyutları bul!',
        {
          visual: 'ORTA:\n\n🐶 Köpek\n🐱 Kedi\n🌻 Ayçiçeği\n🎒 Çanta\n📖 Kitap\n\nOrta boyut!',
          examples: [
            createExample(
              'Köpek nasıldır?',
              'Ortadır!',
              'Köpek orta boydadır! 🐶 Ne büyük ne küçük!',
              '🐶',
              ['Köpek orta!', 'İkisinin arası!', 'Tam orta!']
            )
          ],
          tip: 'Orta nesnelere bak - arada! 🐶'
        }
      ),

      createStep(
        'Sıralama',
        '📏 SIRALAMA!\n\n3 Ayıyı sıralayalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   KÜÇÜKTEN BÜYÜĞE:                  │\n│                                     │\n│   🐻 (Küçük) Yavru ayı              │\n│     ↓                               │\n│   🐻 (Orta) Anne ayı                │\n│     ↓                               │\n│   🐻 (Büyük) Baba ayı               │\n│                                     │\n│   BÜYÜKTEN KÜÇÜĞE:                  │\n│                                     │\n│   🐻 (Büyük) Baba ayı               │\n│     ↓                               │\n│   🐻 (Orta) Anne ayı                │\n│     ↓                               │\n│   🐻 (Küçük) Yavru ayı              │\n│                                     │\n└─────────────────────────────────────┘\n\nİki türlü sıralayabiliriz!\n\nBüyükten küçüğe veya küçükten büyüğe! 📏',
        '📏 Sırala!',
        'Boyuta göre sırala!',
        {
          visual: 'SIRALAMA:\n\n↑ Büyük 🐻\n│ Orta 🐻\n↓ Küçük 🐻\n\nveya\n\n↑ Küçük 🐻\n│ Orta 🐻\n↓ Büyük 🐻\n\nİki yön!',
          examples: [
            createExample(
              'En küçük ayı kimdir?',
              'Yavru ayı!',
              'En küçük yavru ayıdır! 🐻 (Küçük)',
              '🐻',
              ['Yavru ayı!', 'En küçük!', 'Mini!']
            )
          ],
          tip: 'Nesneleri sırala! 📏'
        }
      ),

      createStep(
        'Günlük Hayatta Boyutlar',
        '🔍 BOYUT AVI!\n\nEtrafındaki nesnelere bak!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   BÜYÜK:                            │\n│   🏠 Ev, 🚌 Otobüs, 🌳 Ağaç         │\n│                                     │\n│   ORTA:                             │\n│   🪑 Sandalye, 📺 TV, 🎒 Çanta      │\n│                                     │\n│   KÜÇÜK:                            │\n│   ✏️ Kalem, 🍎 Elma, 📱 Telefon     │\n│                                     │\n└─────────────────────────────────────┘\n\nHer yerde boyutlar var!\n\nBul ve karşılaştır! 🔍',
        '🔍 Bul!',
        'Etrafına bak!',
        {
          visual: 'EVDE:\n\nBüyük:\n🏠🚪🪟\n\nOrta:\n🪑📺🛏️\n\nKüçük:\n✏️📱🍎\n\nKarşılaştır!',
          examples: [
            createExample(
              'Ev mi büyük, kalem mi?',
              'Ev büyük!',
              'Ev çok büyüktür! 🏠 Kalem küçüktür! ✏️',
              '🏠 > ✏️',
              ['Ev büyük!', 'Kalem küçük!', 'Fark var!']
            )
          ],
          tip: 'Her gün 3 nesne karşılaştır! 🔍'
        }
      ),

      createStep(
        'Karşılaştırma Oyunu',
        '🎮 KARŞILAŞTIRMA!\n\nOyun oynayalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Hangisi daha büyük?               │\n│                                     │\n│   🐘 Fil mi? 🐭 Fare mi?            │\n│   Cevap: 🐘 Fil!                    │\n│                                     │\n│   🏠 Ev mi? 🍎 Elma mı?             │\n│   Cevap: 🏠 Ev!                     │\n│                                     │\n│   🚌 Otobüs mü? 🚗 Araba mı?        │\n│   Cevap: 🚌 Otobüs!                 │\n│                                     │\n└─────────────────────────────────────┘\n\nKarşılaştırmak kolay!\n\nSen de dene! 🎮',
        '🎮 Karşılaştır!',
        'Hangisi büyük?',
        {
          visual: 'KARŞILAŞTIR:\n\n🐘 > 🐭\n🏠 > 🍎\n🚌 > 🚗\n🌳 > 🌼\n\n> = Büyük\n< = Küçük',
          examples: [
            createExample(
              'Fil mi büyük, fare mi?',
              'Fil!',
              'Fil çok büyüktür! 🐘 > 🐭 Fare küçüktür!',
              '🐘 > 🐭',
              ['Fil büyük!', 'Fare küçük!', 'Fil > Fare!']
            )
          ],
          tip: 'Karşılaştırma yap! 🎮'
        }
      ),

      createStep(
        'Boyut Şarkısı',
        '🎵 BOYUT ŞARKISI! 🎵\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Büyük baba ayı                    │\n│   Orta anne ayı                     │\n│   Küçük yavru ayı 🐻                │\n│                                     │\n│   Üç ayı var evde                   │\n│   Hepsi farklı boyda! 🐻🐻🐻        │\n│                                     │\n│   Büyük, orta, küçük                │\n│   Hepsi çok güzel! 🎵               │\n│                                     │\n└─────────────────────────────────────┘\n\n🎵 Hep birlikte söyle! 🎵\n\nBoyutları öğrendik! 🎪',
        '🎵 Şarkı!',
        'Boyut şarkısı!',
        {
          visual: 'ŞARKI:\n\n🐻 Büyük\n🐻 Orta\n🐻 Küçük\n\n3 ayı!\n3 boyut!\n\n🎵 Söyle!',
          examples: [
            createExample(
              'Kaç ayı var?',
              '3 ayı!',
              '3 ayı var! 🐻🐻🐻 Büyük, orta, küçük!',
              '🐻🐻🐻',
              ['3 ayı!', 'Farklı boyutlar!', 'Güzel!']
            )
          ],
          tip: 'Aileninle söyle! 🎵'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Baba ayı nasıl bir ayıdır?',
        ['Büyük', 'Orta', 'Küçük', 'Mini'],
        'Büyük',
        'Baba ayı en büyüktür! 🐻',
        '🐻',
        1,
        'Baba ayı büyük!'
      ),

      createMultipleChoice(
        'Yavru ayı nasıl bir ayıdır?',
        ['Küçük', 'Büyük', 'Orta', 'Dev'],
        'Küçük',
        'Yavru ayı en küçüktür! 🐻',
        '🐻',
        1,
        'Yavru ayı küçük!'
      ),

      createMultipleChoice(
        'Anne ayı nasıl bir ayıdır?',
        ['Orta', 'Büyük', 'Küçük', 'Mini'],
        'Orta',
        'Anne ayı orta boydadır! 🐻',
        '🐻',
        1,
        'Anne ayı orta!'
      ),

      createMultipleChoice(
        'Hangisi daha büyük? 🐘 Fil mi 🐭 Fare mi?',
        ['Fil', 'Fare', 'İkisi eşit', 'Bilmiyorum'],
        'Fil',
        'Fil çok büyüktür! 🐘 > 🐭',
        '🐘',
        1,
        'Fil büyük!'
      ),

      createFillBlank(
        '3 Ayı masalında ___ ayı var.',
        ['3', 'üç'],
        '3 ayı var! 🐻🐻🐻 Büyük, orta, küçük!',
        '🐻🐻🐻',
        1,
        'Kaç ayı?'
      ),

      createMultipleChoice(
        'Hangisi daha küçük? 🏠 Ev mi 🍎 Elma mı?',
        ['Elma', 'Ev', 'İkisi eşit', 'Bilmiyorum'],
        'Elma',
        'Elma küçüktür! 🍎 < 🏠 Ev büyüktür!',
        '🍎',
        1,
        'Elma küçük!'
      ),

      createMultipleChoice(
        'En büyük ayı kimdir?',
        ['Baba ayı', 'Anne ayı', 'Yavru ayı', 'Bilmiyorum'],
        'Baba ayı',
        'En büyük baba ayıdır! 🐻',
        '🐻',
        1,
        'Baba en büyük!'
      ),

      createMultipleChoice(
        'En küçük ayı kimdir?',
        ['Yavru ayı', 'Anne ayı', 'Baba ayı', 'Bilmiyorum'],
        'Yavru ayı',
        'En küçük yavru ayıdır! 🐻',
        '🐻',
        1,
        'Yavru en küçük!'
      ),

      createFillBlank(
        'Büyük çok yer ___, küçük az yer ___.',
        ['kaplar kaplar'],
        'Büyük çok yer kaplar, küçük az yer kaplar!',
        '🐘🐭',
        1,
        'Ne kadar yer?'
      ),

      createMultipleChoice(
        'Orta ne demektir?',
        ['İkisinin arası', 'En büyük', 'En küçük', 'Bilmiyorum'],
        'İkisinin arası',
        'Orta = İkisinin arası! Ne büyük ne küçük!',
        '🐻',
        1,
        'Orta arada!'
      ),

      createMultipleChoice(
        'Kaç farklı boyut öğrendik?',
        ['3 boyut', '2 boyut', '4 boyut', '5 boyut'],
        '3 boyut',
        'Büyük, orta, küçük = 3 boyut!',
        '🐻🐻🐻',
        1,
        '3 boyut!'
      ),

      createMultipleChoice(
        'Sıralama yaparken neye bakarız?',
        ['Boyuta', 'Renge', 'İsme', 'Hiçbiri'],
        'Boyuta',
        'Sıralama yaparken boyuta bakarız! 📏',
        '📏',
        1,
        'Boyut önemli!'
      ),

      createMultipleChoice(
        'Hangisi orta boydadır?',
        ['🐶 Köpek', '🐘 Fil', '🐭 Fare', '🏠 Ev'],
        '🐶 Köpek',
        'Köpek orta boydadır! 🐶',
        '🐶',
        1,
        'Köpek orta!'
      ),

      createFillBlank(
        'Küçükten büyüğe: Küçük → ___ → Büyük',
        ['Orta', 'orta'],
        'Küçük → Orta → Büyük! 🐻🐻🐻',
        '🐻🐻🐻',
        1,
        'Ortadaki ne?'
      ),

      createMultipleChoice(
        '3 Ayı masalı kaç ayının hikayesidir?',
        ['3 ayı', '2 ayı', '4 ayı', '5 ayı'],
        '3 ayı',
        '3 Ayı = 3 ayının hikayesi! 🐻🐻🐻',
        '🐻🐻🐻',
        1,
        '3 ayı!'
      )
    ],

    summary: '🎉 Bugün boyutları öğrendik!\n\n✅ Büyük çok yer kaplar 🐻\n✅ Küçük az yer kaplar 🐻\n✅ Orta ikisinin arası 🐻\n✅ 3 Ayı masalı 🐻🐻🐻\n✅ Sıralama yaptık 📏\n\nBoyutları tanıdık! 🔍\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste uzun-kısa öğreneceğiz! Zürafa gibi! 🦒'
  }
};
