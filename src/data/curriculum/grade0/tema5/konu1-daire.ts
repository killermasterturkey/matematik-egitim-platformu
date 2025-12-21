// DESTEK SINIFI - TEMA 5 - KONU 1: DAİRE
// Daire şeklini, yuvarlak nesneleri tanıma

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1Daire: Topic = {
  id: 'daire',
  title: 'Daire - Yuvarlak Şekil',
  description: 'Yuvarlak ve güzel daire şeklini öğreniyoruz!',
  emoji: '⭕',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['daire', 'yuvarlak', 'köşe yok', 'top', 'güneş'],
  objectives: [
    'Daire şeklini tanıyacaksın',
    'Yuvarlak nesneleri bulacaksın',
    'Dairenin köşesi olmadığını öğreneceksin',
    'Daire çizebileceksin'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün DAİRE öğreneceğiz!\n\nDaire çok güzel bir şekil!\n\nYuvarlak yuvarlar... ⭕\n\nHazır mısın? Başlayalım! 🎨',

    motivationQuote: 'Daire gibi yuvarlan, eğlen! 🎉',

    funFacts: [
      '⚽ Top yuvarlaktır - daire gibi!',
      '🌕 Ay yuvarlaktır - daire gibi!',
      '🍕 Pizza yuvarlaktır - daire gibi!',
      '⭕ Dairenin köşesi yoktur!',
      '🌍 Dünya yuvarlaktır - daire gibi!',
      '🎈 Balon yuvarlaktır - daire gibi!',
      '🔴 Kırmızı ışık dairedir!',
      '🎯 Hedef tahtası dairelerden oluşur!',
      '🍪 Kurabiye yuvarlaktır!',
      '⏰ Saatin yüzü dairedir!'
    ],

    tips: [
      '💡 Parmağınla havada daire çiz!',
      '💡 Etrafa bak - yuvarlak ne var?',
      '💡 Daire yuvarlar, köşesi yok!',
      '💡 Top gibi düşün - yuvarlak!'
    ],

    steps: [
      // ADIM 1: DAİRE NEDİR?
      createStep(
        'Daire Nedir?',
        '⭕ DAİRE çok özel bir şekil!\n\nBir varmış bir yokmuş...\n\nYuvarlak bir şekil varmış.\n\nAdı DAİRE imiş! ⭕\n\n┌─────────────────────────────────────┐\n│                                     │\n│            ⭕                       │\n│                                     │\n│      Bu bir DAİRE!                  │\n│                                     │\n│      Yuvarlak yuvarlar!             │\n│                                     │\n│      Köşesi yok!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nDaire yuvarlaktır!\n\nYuvarlar yuvarlar... 🎪\n\nGüzel değil mi? 💝',
        '⭕ = Daire = Yuvarlak!',
        'Parmağınla havada daire çiz!',
        {
          visual: '⭕ DAİRE\n\nÖzellikleri:\n✓ Yuvarlak\n✓ Köşesi yok\n✓ Yuvarlanır\n✓ Her yeri aynı uzaklıkta',
          examples: [
            createExample(
              'Daire nasıl bir şekildir?',
              'Yuvarlak!',
              'Daire yuvarlaktır! ⭕ Köşesi yoktur!',
              '⭕',
              ['Daire yuvarlak!', 'Köşesi yok!', 'Yuvarlar!']
            )
          ],
          tip: 'Parmağınla havada yavaşça daire çiz! ⭕'
        }
      ),

      // ADIM 2: TOP - İLK DAİRE ÖRNEĞİMİZ
      createStep(
        'Top - Yuvarlan Top!',
        '⚽ TOP!\n\nTop yuvarlaktır!\n\nTop bir dairedir! ⚽\n\n┌─────────────────────────────────────┐\n│                                     │\n│            ⚽                        │\n│                                     │\n│      Top yuvarlanır!                │\n│                                     │\n│      Köşesi yok!                    │\n│                                     │\n│      DAİRE gibi!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nTuuup tuuup yuvarlan! ⚽\n\nTopla oynamak çok eğlenceli!\n\nTop DAİRE şeklinde! 🎈',
        '⚽ Top = Daire şekli!',
        'Bir top hayal et - yuvarlak!',
        {
          visual: '⚽ TOP\n\n🏀 Basketbol topu\n⚽ Futbol topu\n🎾 Tenis topu\n🏐 Voleybol topu\n\nHepsi DAİRE! ⭕',
          examples: [
            createExample(
              'Top hangi şekildir?',
              'Daire!',
              'Top yuvarlaktır! ⚽ = Daire şekli! ⭕',
              '⚽ → ⭕',
              ['Top yuvarlak!', 'Yuvarlanır!', 'Daire şekli!']
            )
          ],
          tip: 'Evinde top var mı? Git bak - yuvarlak! ⚽'
        }
      ),

      // ADIM 3: GÜNEŞ - GÖKYÜZÜNDE DAİRE
      createStep(
        'Güneş - Gökyüzündeki Daire',
        '☀️ GÜNEŞ!\n\nGüneş gökyüzünde!\n\nGüneş yuvarlaktır! ☀️\n\n┌─────────────────────────────────────┐\n│                                     │\n│            ☀️                       │\n│                                     │\n│      Güneş daire gibi!              │\n│                                     │\n│      Işınları var ama...            │\n│                                     │\n│      Ortası yuvarlak!               │\n│                                     │\n└─────────────────────────────────────┘\n\nGüneş aydınlatır! ☀️\n\nGüneş ısıtır! 🔥\n\nVe güneş DAİRE şeklinde! ⭕',
        '☀️ Güneş = Daire!',
        'Gökyüzüne bak - güneş yuvarlak!',
        {
          visual: '☀️ GÜNEŞ\n🌕 AY\n🌍 DÜNYA\n🪐 GEZEGENLER\n\nHepsi DAİRE! ⭕\n\nGökyüzü daire dolu!',
          examples: [
            createExample(
              'Güneş hangi şekildir?',
              'Daire!',
              'Güneş yuvarlaktır! ☀️ = Daire! ⭕',
              '☀️ → ⭕',
              ['Güneş yuvarlak!', 'Daire şekli!', 'Işık verir!']
            )
          ],
          tip: 'Gece ayı izle - o da daire! 🌕'
        }
      ),

      // ADIM 4: PİZZA - YENEBİLEN DAİRE
      createStep(
        'Pizza - Lezzetli Daire',
        '🍕 PİZZA!\n\nPizza yuvarlaktır!\n\nPizza bir dairedir! 🍕\n\n┌─────────────────────────────────────┐\n│                                     │\n│            🍕                       │\n│                                     │\n│      Pizza yuvarlak!                │\n│                                     │\n│      Dilimlere böleriz!             │\n│                                     │\n│      Ama pizza yuvarlak!            │\n│                                     │\n└─────────────────────────────────────┘\n\nPizza çok lezzetli! 😋\n\nPizza DAİRE şeklinde!\n\nYuvarlak ve güzel! 🎨',
        '🍕 Pizza = Yuvarlak daire!',
        'Pizza hayal et - yuvarlak!',
        {
          visual: '🍕 YUVARLAK YEMEKLER\n\n🍕 Pizza\n🥞 Krep\n🍪 Kurabiye\n🫓 Lavaş\n🧇 Waffle\n\nHepsi DAİRE! ⭕',
          examples: [
            createExample(
              'Pizza hangi şekildir?',
              'Daire!',
              'Pizza yuvarlaktır! 🍕 = Daire! ⭕',
              '🍕 → ⭕',
              ['Pizza yuvarlak!', 'Daire şekli!', 'Lezzetli!']
            )
          ],
          tip: 'Evde kurabiye yap - yuvarlak yap! 🍪'
        }
      ),

      // ADIM 5: GÜNLÜK HAYATTA DAİRELER
      createStep(
        'Etrafımızdaki Daireler',
        '🔍 Şimdi daire avına çıkıyoruz!\n\nEtrafına bak!\n\nKaç tane yuvarlak şey var?\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ⏰ Saat yuvarlak                  │\n│                                     │\n│   💿 CD yuvarlak                    │\n│                                     │\n│   🎈 Balon yuvarlak                 │\n│                                     │\n│   🔴 Düğme yuvarlak                 │\n│                                     │\n│   🪙 Para yuvarlak                  │\n│                                     │\n└─────────────────────────────────────┘\n\nHer yerde daire var! 🌍\n\nGözlerini aç ve bul! 🔍',
        '🔍 Daire avı zamanı!',
        'Odana bak - yuvarlak ne var?',
        {
          visual: 'EVDE DAİRELER:\n\n⏰ Duvar saati\n🍽️ Tabak\n☕ Fincan ağzı\n💡 Ampul\n🚪 Kapı kolu\n🪞 Yuvarlak ayna\n\nHepsi DAİRE! ⭕',
          examples: [
            createExample(
              'Saat hangi şekildir?',
              'Daire!',
              'Saat yuvarlaktır! ⏰ = Daire! ⭕',
              '⏰ → ⭕',
              ['Saat yuvarlak!', 'Daire şekli!', 'Zamanı gösterir!']
            )
          ],
          tip: 'Bugün 10 tane yuvarlak şey bul! 🎯'
        }
      ),

      // ADIM 6: DAİRE ÇİZELİM
      createStep(
        'Daire Çizelim!',
        '🎨 Şimdi daire çizeceğiz!\n\nÇok kolay!\n\nHazır mısın? ✏️\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1. Parmağını havaya kaldır ☝️    │\n│                                     │\n│   2. Yuvarlak çiz ⭕                │\n│                                     │\n│   3. Başladığın yere gel 🔄         │\n│                                     │\n│   4. Tamam! Daire oldu! ✅          │\n│                                     │\n└─────────────────────────────────────┘\n\nAferin! 👏\n\nŞimdi kağıda çiz!\n\nYavaş yavaş... ⭕',
        '✏️ Daire çizme zamanı!',
        'Yavaşça yuvarlak çiz!',
        {
          visual: 'DAİRE ÇİZME:\n\n1️⃣ Bir nokta koy\n2️⃣ Yuvarlak git\n3️⃣ Başa dön\n4️⃣ Bitti! ⭕\n\nPratik yap!',
          examples: [
            createExample(
              'Daire nasıl çizilir?',
              'Yuvarlak çizeriz!',
              'Parmağınla havada yuvarlak çiz! ⭕ Sonra kağıda!',
              '✏️ → ⭕',
              ['Yuvarlak çiz!', 'Başa dön!', 'Daire oldu!']
            )
          ],
          tip: 'Her gün 5 daire çiz - pratik yap! ✏️'
        }
      ),

      // ADIM 7: DAİRE ŞARKISI
      createStep(
        'Daire Şarkısı',
        '🎵 DAİRE ŞARKISI! 🎵\n\n(Şarkı söyleyelim!)\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Daire daire yuvarlak              │\n│   Köşesi yok, çok parlak! ⭕        │\n│                                     │\n│   Top gibi yuvarlar                 │\n│   Güneş gibi parlar! ☀️             │\n│                                     │\n│   Pizza gibi yuvarlak               │\n│   Daire çok güzel, çok parlak! 🍕  │\n│                                     │\n└─────────────────────────────────────┘\n\n🎵 Hep birlikte söyle! 🎵\n\nDans et ve döne döne! 💃\n\nDaire gibi yuvarlan! 🎪',
        '🎵 Şarkı söyle!',
        'Şarkıyı tekrarla!',
        {
          visual: 'HAREKETLİ OYUN:\n\n🔄 Döne döne dans et!\n⭕ Daire şeklinde koş!\n🎨 Havada daire çiz!\n🎵 Şarkı söyle!\n\nEğlen!',
          examples: [
            createExample(
              'Daire şarkısı neyle başlar?',
              'Daire daire yuvarlak!',
              'Daire daire yuvarlak... Köşesi yok! 🎵',
              '🎵',
              ['Şarkı söyle!', 'Dans et!', 'Eğlen!']
            )
          ],
          tip: 'Aileninle birlikte şarkı söyle! 🎵'
        }
      ),

      // ADIM 8: DAİRE OYUNU
      createStep(
        'Daire Bulma Oyunu',
        '🎮 OYUN ZAMANI!\n\nEtrafında daire şekli bul!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   GÖREV: 5 yuvarlak şey bul!        │\n│                                     │\n│   ✓ Top bul                         │\n│   ✓ Tabak bul                       │\n│   ✓ Saat bul                        │\n│   ✓ Para bul                        │\n│   ✓ Düğme bul                       │\n│                                     │\n└─────────────────────────────────────┘\n\nBuldukça say!\n\nKaç tane buldun? 🎯\n\nHepsini bulduysan TEBRİKLER! 🎉',
        '🎯 Daire avı!',
        'Yuvarlak şeyler bul!',
        {
          visual: 'DAİRE AVI:\n\nEvde:\n⏰🍽️🪙🔴💿\n\nBahçede:\n⚽🎈🌕☀️🎾\n\nKaç tane?\n\nHepsini bul!',
          examples: [
            createExample(
              'Tabak hangi şekildir?',
              'Daire!',
              'Tabak yuvarlaktır! 🍽️ = Daire! ⭕',
              '🍽️ → ⭕',
              ['Tabak yuvarlak!', 'Daire şekli!', 'Yemek için!']
            )
          ],
          tip: 'Her buldun yuvarlak için puan kazan! 🌟'
        }
      )
    ],

    // PRATİK SORULAR
    practiceQuestions: [
      createMultipleChoice(
        'Hangi şekil dairedir? ⭕',
        ['⭕', '⬜', '🔺', '⬛'],
        '⭕',
        'Yuvarlak olan dairedir! ⭕',
        '⭕',
        1,
        'Yuvarlak olanı seç!'
      ),

      createMultipleChoice(
        'Hangisi daire şeklindedir? 🎯',
        ['⚽ Top', '📺 TV', '📱 Telefon', '🚪 Kapı'],
        '⚽ Top',
        'Top yuvarlaktır! ⚽ = Daire! ⭕',
        '⚽',
        1,
        'Yuvarlak olanı bul!'
      ),

      createMultipleChoice(
        'Dairenin kaç köşesi var? 🤔',
        ['0 köşe', '1 köşe', '3 köşe', '4 köşe'],
        '0 köşe',
        'Dairenin köşesi yoktur! ⭕ Yuvarlaktır!',
        '⭕',
        1,
        'Daire yuvarlak - köşesi yok!'
      ),

      createFillBlank(
        'Daire ___ bir şekildir.',
        ['yuvarlak'],
        'Daire yuvarlaktır! ⭕ Köşesi yoktur!',
        '⭕',
        1,
        'Daire nasıl bir şekil?'
      ),

      createMultipleChoice(
        '☀️ Güneş hangi şekildir?',
        ['Daire', 'Kare', 'Üçgen', 'Dikdörtgen'],
        'Daire',
        'Güneş yuvarlaktır! ☀️ = Daire! ⭕',
        '☀️',
        1,
        'Güneşe bak - yuvarlak!'
      ),

      createMultipleChoice(
        '🍕 Pizza hangi şekildir?',
        ['Daire', 'Kare', 'Üçgen', 'Dikdörtgen'],
        'Daire',
        'Pizza yuvarlaktır! 🍕 = Daire! ⭕',
        '🍕',
        1,
        'Pizza yuvarlak!'
      ),

      createFillBlank(
        'Top ___ şeklindedir.',
        ['daire', 'yuvarlak'],
        'Top yuvarlaktır! ⚽ = Daire! ⭕',
        '⚽',
        1,
        'Top nasıl bir şekil?'
      ),

      createMultipleChoice(
        'Hangisi daire değildir?',
        ['⬜ Kare', '🌕 Ay', '⚽ Top', '🍕 Pizza'],
        '⬜ Kare',
        'Kare köşelidir! ⬜ Daire değildir! Daire yuvarlaktır! ⭕',
        '⬜ ≠ ⭕',
        1,
        'Yuvarlak olmayanı bul!'
      ),

      createMultipleChoice(
        '⏰ Saat hangi şekildir?',
        ['Daire', 'Kare', 'Üçgen', 'Dikdörtgen'],
        'Daire',
        'Saat yuvarlaktır! ⏰ = Daire! ⭕',
        '⏰',
        1,
        'Saate bak - yuvarlak!'
      ),

      createMultipleChoice(
        'Daire nasıl yuvarlanır?',
        ['Kolay yuvarlanır', 'Yuvarlanamaz', 'Zor yuvarlanır', 'Hiç yuvarlanmaz'],
        'Kolay yuvarlanır',
        'Daire yuvarlak olduğu için kolay yuvarlanır! ⭕',
        '⭕ → 🏃',
        1,
        'Daire yuvarlak - kolay yuvarlanır!'
      ),

      createFillBlank(
        'Balon ___ şeklindedir.',
        ['daire', 'yuvarlak'],
        'Balon yuvarlaktır! 🎈 = Daire! ⭕',
        '🎈',
        1,
        'Balonun şekli ne?'
      ),

      createMultipleChoice(
        'Hangisi daire şeklindedir?',
        ['🪙 Para', '📱 Telefon', '📺 TV', '🚪 Kapı'],
        '🪙 Para',
        'Para yuvarlaktır! 🪙 = Daire! ⭕',
        '🪙',
        1,
        'Yuvarlak olanı seç!'
      ),

      createMultipleChoice(
        'Daire çizmek için ne yaparız?',
        ['Yuvarlak çizeriz', 'Düz çizgi çizeriz', 'Köşe çizeriz', 'Kare çizeriz'],
        'Yuvarlak çizeriz',
        'Daire için yuvarlak çizeriz! ⭕',
        '✏️ → ⭕',
        1,
        'Daire nasıl çizilir?'
      ),

      createMultipleChoice(
        '🌍 Dünya hangi şekildir?',
        ['Daire (yuvarlak)', 'Kare', 'Üçgen', 'Dikdörtgen'],
        'Daire (yuvarlak)',
        'Dünya yuvarlaktır! 🌍 = Daire! ⭕',
        '🌍',
        1,
        'Dünya yuvarlak!'
      ),

      createMultipleChoice(
        'Hangisi daire şeklindedir?',
        ['🍪 Kurabiye', '🏠 Ev', '📖 Kitap', '✏️ Kalem'],
        '🍪 Kurabiye',
        'Kurabiye yuvarlaktır! 🍪 = Daire! ⭕',
        '🍪',
        1,
        'Yuvarlak olanı bul!'
      )
    ],

    summary: '🎉 Bugün daire öğrendin!\n\n✅ Daire yuvarlaktır ⭕\n✅ Dairenin köşesi yoktur\n✅ Top dairedir ⚽\n✅ Güneş dairedir ☀️\n✅ Pizza dairedir 🍕\n✅ Daire yuvarlanır\n\nEtrafındaki daireleri bul! 🔍\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste KARE öğreneceğiz! 4 köşe, 4 kenar! ⬜'
  }
};
