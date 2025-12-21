// DESTEK SINIFI - TEMA 1 - KONU 1: 1'DEN 5'E SAYMA
// Bu konu, en temel düzeyde sayıları öğretir.
// Çok kısa cümleler, bol görsel, sürekli tekrar.

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1Sayma15: Topic = {
  id: 'sayma-1-5',
  title: "1'den 5'e Sayalım",
  description: 'Birlikte 1, 2, 3, 4, 5 sayacağız!',
  emoji: '🖐️',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['bir', 'iki', 'üç', 'dört', 'beş', 'sayma', 'parmak'],
  objectives: [
    '1 sayısını tanıyacaksın',
    '2 sayısını tanıyacaksın',
    '3 sayısını tanıyacaksın',
    '4 sayısını tanıyacaksın',
    '5 sayısını tanıyacaksın',
    'Parmaklarınla sayacaksın'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün sayıları öğreneceğiz.\n\nSayılar çok eğlenceli!\n\n1, 2, 3, 4, 5... 🖐️\n\nBirlikte öğreneceğiz.\n\nHazır mısın? Başlayalım!',

    motivationQuote: 'Sen çok özelsin! Birlikte öğreneceğiz! 💝',

    funFacts: [
      '🖐️ Bir elinde 5 parmak var!',
      '🐕 Bir köpeğin 4 ayağı var!',
      '🚦 Trafik lambasında 3 renk var!'
    ],

    tips: [
      '💡 Parmaklarını kullan!',
      '💡 Yüksek sesle say!',
      '💡 Acele etme, yavaş yavaş!'
    ],

    steps: [
      // ADIM 1: BİR (1) SAYISI
      createStep(
        '1 Sayısı - BİR',
        '🔵 Bu bir tane top.\n\nBİR = 1\n\n☝️ Bir parmak kaldır.\n\n┌─────────────────────────────────────┐\n│                                     │\n│           🔵                        │\n│                                     │\n│      Bu BİR tane!                   │\n│                                     │\n│           1                         │\n│                                     │\n└─────────────────────────────────────┘\n\nHaydi birlikte söyleyelim:\n\n"BİR!" ☝️\n\nAferin! 👏',
        '☝️ BİR parmak = 1',
        'Bir parmağını kaldır ve "bir" de!',
        {
          visual: '☝️ = 1 = BİR\n\n🔵 = 1 top\n\n🍎 = 1 elma\n\n1 tane demek!',
          examples: [
            createExample(
              'Kaç tane güneş var? ☀️',
              '1 tane!',
              'Gökyüzünde BİR tane güneş var! ☀️',
              '☀️',
              ['Güneşi say: bir!', 'Cevap: 1']
            )
          ],
          tip: 'Bir parmağını kaldırarak "1" gösterebilirsin! ☝️'
        }
      ),

      // ADIM 2: İKİ (2) SAYISI
      createStep(
        '2 Sayısı - İKİ',
        '🔵🔵 Bunlar iki tane top.\n\nİKİ = 2\n\n✌️ İki parmak kaldır.\n\n┌─────────────────────────────────────┐\n│                                     │\n│         🔵    🔵                    │\n│                                     │\n│      Bunlar İKİ tane!               │\n│                                     │\n│           2                         │\n│                                     │\n└─────────────────────────────────────┘\n\nBirlikte sayalım:\n\n"Bir... İki!" ✌️\n\nHarika! 🌟',
        '✌️ İKİ parmak = 2',
        'İki parmağını kaldır ve say: bir, iki!',
        {
          visual: '✌️ = 2 = İKİ\n\n🔵🔵 = 2 top\n\n👀 = 2 göz\n\n🦶🦶 = 2 ayak\n\n2 tane demek!',
          examples: [
            createExample(
              'Kaç tane ayak? 🦶🦶',
              '2 tane!',
              'Bir... iki! İKİ ayağımız var! 🦶🦶',
              '🦶🦶',
              ['İlk ayak: bir!', 'İkinci ayak: iki!', 'Toplam: 2']
            )
          ],
          tip: 'Gözlerini say! Bir göz... iki göz... 2 gözün var! 👀'
        }
      ),

      // ADIM 3: ÜÇ (3) SAYISI
      createStep(
        '3 Sayısı - ÜÇ',
        '🔵🔵🔵 Bunlar üç tane top.\n\nÜÇ = 3\n\n🤟 Üç parmak kaldır.\n\n┌─────────────────────────────────────┐\n│                                     │\n│       🔵    🔵    🔵                │\n│                                     │\n│      Bunlar ÜÇ tane!                │\n│                                     │\n│           3                         │\n│                                     │\n└─────────────────────────────────────┘\n\nBirlikte sayalım:\n\n"Bir... iki... üç!" 🤟\n\nSüpersin! 🎉',
        '🤟 ÜÇ parmak = 3',
        'Üç parmağını kaldır ve say: bir, iki, üç!',
        {
          visual: '🤟 = 3 = ÜÇ\n\n🔵🔵🔵 = 3 top\n\n🚦 = 3 ışık (kırmızı, sarı, yeşil)\n\n🍎🍎🍎 = 3 elma\n\n3 tane demek!',
          examples: [
            createExample(
              'Trafik lambasında kaç renk var? 🚦',
              '3 renk!',
              'Kırmızı, sarı, yeşil... ÜÇ renk! 🚦',
              '🔴🟡🟢',
              ['Kırmızı: bir!', 'Sarı: iki!', 'Yeşil: üç!', 'Toplam: 3']
            )
          ],
          tip: 'Trafik ışığını hatırla: Kırmızı-Sarı-Yeşil = 3! 🚦'
        }
      ),

      // ADIM 4: DÖRT (4) SAYISI
      createStep(
        '4 Sayısı - DÖRT',
        '🔵🔵🔵🔵 Bunlar dört tane top.\n\nDÖRT = 4\n\n🖖 Dört parmak kaldır.\n\n┌─────────────────────────────────────┐\n│                                     │\n│     🔵   🔵   🔵   🔵               │\n│                                     │\n│      Bunlar DÖRT tane!              │\n│                                     │\n│            4                        │\n│                                     │\n└─────────────────────────────────────┘\n\nBirlikte sayalım:\n\n"Bir... iki... üç... dört!" 🖖\n\nMuhteşem! ⭐',
        '🖖 DÖRT parmak = 4',
        'Dört parmağını kaldır ve say: bir, iki, üç, dört!',
        {
          visual: '🖖 = 4 = DÖRT\n\n🔵🔵🔵🔵 = 4 top\n\n🐕 bacakları = 4 ayak\n\n🚗 tekerlekleri = 4 tekerlek\n\n🪑 ayakları = 4 ayak\n\n4 tane demek!',
          examples: [
            createExample(
              'Bir köpeğin kaç ayağı var? 🐕',
              '4 ayak!',
              'Köpek: bir, iki, üç, dört... DÖRT ayak! 🐕',
              '🦵🦵🦵🦵',
              ['Ön sol: bir!', 'Ön sağ: iki!', 'Arka sol: üç!', 'Arka sağ: dört!', 'Toplam: 4']
            )
          ],
          tip: 'Bir masanın 4 ayağı var! Sandalyenin de! 🪑'
        }
      ),

      // ADIM 5: BEŞ (5) SAYISI
      createStep(
        '5 Sayısı - BEŞ',
        '🔵🔵🔵🔵🔵 Bunlar beş tane top.\n\nBEŞ = 5\n\n🖐️ Beş parmak kaldır - tüm elin!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🔵  🔵  🔵  🔵  🔵                │\n│                                     │\n│      Bunlar BEŞ tane!               │\n│                                     │\n│            5                        │\n│                                     │\n└─────────────────────────────────────┘\n\nBirlikte sayalım:\n\n"Bir... iki... üç... dört... beş!" 🖐️\n\nHarika! Tüm elin! 👏👏',
        '🖐️ BEŞ parmak = 5 = Tüm elin!',
        'Tüm parmaklarını aç ve say: bir, iki, üç, dört, beş!',
        {
          visual: '🖐️ = 5 = BEŞ\n\n🔵🔵🔵🔵🔵 = 5 top\n\nBir eldeki tüm parmaklar = 5\n\n🍎🍎🍎🍎🍎 = 5 elma\n\n⭐⭐⭐⭐⭐ = 5 yıldız\n\n5 tane demek!',
          examples: [
            createExample(
              'Bir elinde kaç parmak var? 🖐️',
              '5 parmak!',
              'Bir, iki, üç, dört, beş! BEŞ parmak! 🖐️',
              '☝️✌️🤟🖖🖐️',
              ['Başparmak: bir!', 'İşaret: iki!', 'Orta: üç!', 'Yüzük: dört!', 'Serçe: beş!', 'Toplam: 5']
            )
          ],
          tip: 'Elini aç ve parmaklarını say! Her elde 5 parmak var! 🖐️'
        }
      ),

      // ADIM 6: HEP BİRLİKTE SAYALIM
      createStep(
        'Hep Birlikte Sayalım!',
        '🎉 Şimdi hepsini birlikte sayalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ☝️  1 = BİR    🔵                 │\n│                                     │\n│   ✌️  2 = İKİ    🔵🔵               │\n│                                     │\n│   🤟 3 = ÜÇ     🔵🔵🔵              │\n│                                     │\n│   🖖 4 = DÖRT   🔵🔵🔵🔵            │\n│                                     │\n│   🖐️ 5 = BEŞ    🔵🔵🔵🔵🔵          │\n│                                     │\n└─────────────────────────────────────┘\n\nYüksek sesle söyle:\n\n"BİR! İKİ! ÜÇ! DÖRT! BEŞ!"\n\n👏 Tebrikler! Sayıları öğrendin! 👏',
        '☝️✌️🤟🖖🖐️ = 1, 2, 3, 4, 5',
        "Parmaklarını kullanarak 1'den 5'e kadar say!",
        {
          visual: '1️⃣ BİR   = ☝️ = 🔵\n2️⃣ İKİ   = ✌️ = 🔵🔵\n3️⃣ ÜÇ    = 🤟 = 🔵🔵🔵\n4️⃣ DÖRT  = 🖖 = 🔵🔵🔵🔵\n5️⃣ BEŞ   = 🖐️ = 🔵🔵🔵🔵🔵',
          examples: [
            createExample(
              "Ellerini kullanarak 1'den 5'e say!",
              '1, 2, 3, 4, 5!',
              'Bir parmak, iki parmak, üç parmak, dört parmak, beş parmak! 🖐️',
              '☝️ → ✌️ → 🤟 → 🖖 → 🖐️',
              ['☝️ Bir!', '✌️ İki!', '🤟 Üç!', '🖖 Dört!', '🖐️ Beş!']
            )
          ],
          tip: 'Her gün parmaklarınla sayı pratiği yap! 🌟'
        }
      ),

      // ADIM 7: GÜNLÜK HAYATTA SAYILAR
      createStep(
        'Etrafımızda Sayılar',
        '🏠 Evinde de sayılar var!\n\nBul ve say:\n\n🪟 Pencere sayısı kaç?\n🚪 Kapı sayısı kaç?\n🪑 Sandalye sayısı kaç?\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🍎🍎🍎 = 3 elma                   │\n│                                     │\n│   🥚🥚🥚🥚 = 4 yumurta              │\n│                                     │\n│   🥄🥄 = 2 kaşık                    │\n│                                     │\n└─────────────────────────────────────┘\n\nSayılar her yerde! 🌍\n\nŞimdi soruları çözelim! 📝',
        '🏠 Evindeki nesneleri say!',
        'Odana bak ve nesneleri say!',
        {
          visual: 'Mutfakta:\n🍎🍎🍎 = 3 elma\n🥄🥄🥄🥄🥄 = 5 kaşık\n\nOdanda:\n🧸🧸 = 2 oyuncak\n📚📚📚 = 3 kitap',
          examples: [
            createExample(
              'Mutfakta 3 elma var. Kaç elma?',
              '3 elma!',
              'Elmalar: bir, iki, üç! ÜÇ elma! 🍎🍎🍎',
              '🍎🍎🍎',
              ['İlk elma: bir!', 'İkinci elma: iki!', 'Üçüncü elma: üç!', 'Toplam: 3']
            )
          ],
          tip: 'Bugün evindeki oyuncakları say! 🧸'
        }
      )
    ],

    // PRATİK SORULAR - Çok basit, görsel destekli
    practiceQuestions: [
      createMultipleChoice(
        'Kaç tane elma var? 🍎',
        ['1', '2', '3', '4'],
        '1',
        'Bir tane elma! 🍎 = 1',
        '🍎',
        1,
        'Elmaları tek tek say!'
      ),

      createMultipleChoice(
        'Kaç tane top var? 🔵🔵',
        ['1', '2', '3', '4'],
        '2',
        'Bir... iki! İKİ top! 🔵🔵 = 2',
        '🔵🔵',
        1,
        'Topları say: bir, iki...'
      ),

      createMultipleChoice(
        'Kaç tane yıldız var? ⭐⭐⭐',
        ['2', '3', '4', '5'],
        '3',
        'Bir, iki, üç! ÜÇ yıldız! ⭐⭐⭐ = 3',
        '⭐⭐⭐',
        1,
        'Yıldızları say: bir, iki, üç!'
      ),

      createMultipleChoice(
        'Kaç tane kalp var? 💝💝💝💝',
        ['2', '3', '4', '5'],
        '4',
        'Bir, iki, üç, dört! DÖRT kalp! 💝💝💝💝 = 4',
        '💝💝💝💝',
        1,
        'Kalpleri say!'
      ),

      createMultipleChoice(
        'Kaç tane parmak? 🖐️',
        ['3', '4', '5', '6'],
        '5',
        'Bir elde BEŞ parmak var! 🖐️ = 5',
        '🖐️',
        1,
        'Parmaklarını say!'
      ),

      createFillBlank(
        'Bir elde ___ parmak var.',
        ['5', 'beş'],
        'Parmaklarını say! 1, 2, 3, 4, 5 = BEŞ parmak! 🖐️',
        '☝️✌️🤟🖖🖐️',
        1,
        'Elindeki parmaklara bak!'
      ),

      createMultipleChoice(
        '2 sayısının adı nedir?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '2 = İKİ! ✌️',
        '2 = ?',
        1,
        '✌️ İki parmak!'
      ),

      createMultipleChoice(
        '🐕 Köpeğin kaç ayağı var?',
        ['2', '3', '4', '5'],
        '4',
        'Köpeğin DÖRT ayağı var! 🐕 = 4 ayak',
        '🐕',
        1,
        'Köpeğin ayaklarını say!'
      ),

      createFillBlank(
        'Gözlerimiz ___ tane.',
        ['2', 'iki'],
        'Bir göz... iki göz! İKİ gözümüz var! 👀',
        '👀',
        1,
        'Gözlerini say!'
      ),

      createMultipleChoice(
        '3 sayısı için kaç parmak kaldırırız?',
        ['1 parmak', '2 parmak', '3 parmak', '4 parmak'],
        '3 parmak',
        '3 = ÜÇ parmak! 🤟',
        '🤟',
        1,
        '3 için üç parmak!'
      ),

      createMultipleChoice(
        'Hangisi 1 tane?',
        ['🌙', '⭐⭐', '🔵🔵🔵', '❤️❤️❤️❤️'],
        '🌙',
        'Ay tek! 🌙 = 1 tane!',
        undefined,
        1,
        'Tek olan hangisi?'
      ),

      createMultipleChoice(
        '🚦 Trafik lambasında kaç renk var?',
        ['1', '2', '3', '4'],
        '3',
        'Kırmızı, sarı, yeşil = ÜÇ renk! 🚦',
        '🔴🟡🟢',
        1,
        'Kırmızı-Sarı-Yeşil!'
      ),

      createFillBlank(
        'Bir, iki, üç, dört, ___',
        ['5', 'beş'],
        '1, 2, 3, 4, 5! Beş! 🖐️',
        '1 → 2 → 3 → 4 → ?',
        1,
        'Sırayla say!'
      ),

      createMultipleChoice(
        '🖖 Bu kaç parmak?',
        ['2', '3', '4', '5'],
        '4',
        '🖖 = DÖRT parmak!',
        '🖖',
        1,
        'Parmakları say!'
      ),

      createMultipleChoice(
        'Kaç tane kuş var? 🐦🐦🐦🐦🐦',
        ['3', '4', '5', '6'],
        '5',
        'Bir, iki, üç, dört, beş! BEŞ kuş! 🐦🐦🐦🐦🐦',
        '🐦🐦🐦🐦🐦',
        1,
        'Kuşları say!'
      )
    ],

    summary: '🎉 Bugün çok şey öğrendin!\n\n✅ 1 = BİR ☝️\n✅ 2 = İKİ ✌️\n✅ 3 = ÜÇ 🤟\n✅ 4 = DÖRT 🖖\n✅ 5 = BEŞ 🖐️\n\nParmaklarınla sayabilirsin!\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste 6, 7, 8, 9, 10 sayılarını öğreneceğiz! 🔢'
  }
};
