// DESTEK SINIFI - TEMA 3 - KONU 1: ALTI (6) SAYISI
// Sevgi dolu, basit, görsel ağırlıklı anlatım

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep, visualHelpers } from '../../helpers';

export const konu1Alti: Topic = {
  id: 'alti-sayisi',
  title: 'ALTI (6) Sayısı',
  description: 'Bak! 5\'ten sonra 6 geliyor!',
  emoji: '🎲',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['altı', '6', 'sayma', 'parmak', 'zar'],
  objectives: [
    '6 sayısını tanıyacaksın',
    '5 + 1 = 6 olduğunu göreceksin',
    '6 tane nesneyi sayacaksın',
    'İki elde 6 parmak sayacaksın'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün ALTI sayısını öğreneceğiz.\n\n6... ALTI!\n\n5\'ten sonra gelir.\n\nBak:\n1, 2, 3, 4, 5, 6! 🖐️☝️\n\nHazır mısın? Başlayalım!',

    motivationQuote: 'Sen harikasın! Birlikte 6\'yı öğreneceğiz! 💝',

    funFacts: [
      '🎲 Zarda 6 sayısı var! En büyük sayı!',
      '🐝 Arı petekleri altıgen şeklinde! 6 kenar var!',
      '🖐️☝️ Bir el 5 parmak, bir parmak daha = 6!',
      '🍕 Pizzayı 6 dilim yapabiliriz!',
      '🦷 İlk dişler 6 ay civarında çıkar!',
      '🔔 Okul zili 6 kere çalar (bazı okullarda)!',
      '🥚 6\'lı yumurta paketi!',
      '🐞 Uğur böceği 6 bacaklı!'
    ],

    steps: [
      // ADIM 1: 5'TEN 6'YA
      createStep(
        '5\'ten 6\'ya Geçiş',
        'Hatırla!\n\nBir elde 5 parmak var! 🖐️\n\n┌─────────────────────────────────────┐\n│                                     │\n│         🖐️                          │\n│                                     │\n│      5 parmak!                      │\n│                                     │\n└─────────────────────────────────────┘\n\nŞimdi bir parmak DAHA kaldır! ☝️\n\n┌─────────────────────────────────────┐\n│                                     │\n│       🖐️  ☝️                        │\n│                                     │\n│      5 + 1 = 6 parmak!              │\n│                                     │\n└─────────────────────────────────────┘\n\nBak! 5 artı 1 = ALTI! 🎉',
        '🖐️ + ☝️ = 6',
        'Bir elini aç (5), diğer elden 1 parmak kaldır!',
        {
          visual: '🖐️ = 5 parmak\n     +\n  ☝️ = 1 parmak\n     =\n  6 PARMAK!',
          examples: [
            createExample(
              '5 tane var, 1 tane daha geldi. Toplam kaç?',
              '6 tane!',
              'Bak: 🍎🍎🍎🍎🍎 + 🍎 = 6 elma!',
              '🍎🍎🍎🍎🍎🍎',
              ['5 elma var', '1 elma daha geldi', 'Hepsini say: bir, iki, üç, dört, beş, altı!', 'Toplam: 6']
            )
          ],
          tip: '💡 5 biliyorsan, 1 tane daha koy = 6! Çok kolay!'
        }
      ),

      // ADIM 2: 6 SAYISINI TANIYALIM
      createStep(
        '6 Sayısı - ALTI',
        'İşte 6 sayısı!\n\n┌─────────────────────────────────────┐\n│                                     │\n│      6 = ALTI                       │\n│                                     │\n│   🔵🔵🔵🔵🔵🔵                         │\n│                                     │\n│   Bak! 6 tane top!                  │\n│                                     │\n└─────────────────────────────────────┘\n\nSayalım:\n\n"Bir... iki... üç... dört... beş... ALTI!"\n\nHarika! 👏',
        '6 = ALTI = 🔵🔵🔵🔵🔵🔵',
        'Yüksek sesle say: bir, iki, üç, dört, beş, altı!',
        {
          visual: '6️⃣ = ALTI\n\n🔵🔵🔵🔵🔵🔵 = 6 top\n\n⭐⭐⭐⭐⭐⭐ = 6 yıldız\n\n🍎🍎🍎🍎🍎🍎 = 6 elma',
          examples: [
            createExample(
              'Kaç tane kalp var? 💝💝💝💝💝💝',
              '6 tane!',
              'Say: bir, iki, üç, dört, beş, altı! ALTI kalp! 💝',
              '💝💝💝💝💝💝',
              ['Teker teker say!', 'Son kalp 6. kalp!', 'Toplam: 6']
            )
          ],
          tip: '💡 Parmakları kullan! Bir el (5) + bir parmak (1) = 6!'
        }
      ),

      // ADIM 3: ZAR VE 6 SAYISI
      createStep(
        'Zarda 6 Sayısı',
        '🎲 Zar!\n\nZarda en büyük sayı 6!\n\n┌─────────────────────────────────────┐\n│                                     │\n│       🎲  =  ⚪⚪⚪                  │\n│              ⚪⚪⚪                  │\n│                                     │\n│       6 nokta!                      │\n│                                     │\n└─────────────────────────────────────┘\n\nBak! Zarda 6:\n\nİki sıra...\n\nHer sırada 3...\n\n3 + 3 = 6! 🎲\n\nWowww! 🎉',
        '🎲 = 6 nokta = ALTI',
        'Zardaki 6 noktayı say!',
        {
          visual: 'Zar üzerinde 6:\n\n⚪⚪⚪\n⚪⚪⚪\n\nÜst sıra: 3 nokta\nAlt sıra: 3 nokta\nToplam: 6 nokta!',
          examples: [
            createExample(
              'Zarda kaç nokta var? 🎲',
              '6 nokta!',
              'Zarda: ⚪⚪⚪ (üstte 3) + ⚪⚪⚪ (altta 3) = 6 nokta!',
              '⚪⚪⚪\n⚪⚪⚪',
              ['Üst sırayı say: 1, 2, 3', 'Alt sırayı say: 4, 5, 6', 'Toplam: 6 nokta!']
            )
          ],
          tip: '💡 Zar oyna! 6 atınca kazanırsın! 🎲'
        }
      ),

      // ADIM 4: 6 TANE NESNELER
      createStep(
        '6 Tane Nesneler',
        'Etrafımızda 6 tane neler var?\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🥚🥚🥚                             │\n│   🥚🥚🥚    = 6 yumurta paketi       │\n│                                     │\n│   🐞 = 6 bacak (uğur böceği)        │\n│                                     │\n│   🍕 = 6 dilim pizza                │\n│                                     │\n└─────────────────────────────────────┘\n\n6 her yerde!\n\nGözlerini aç, bul! 👀',
        '🥚🥚🥚🥚🥚🥚 = 6 yumurta',
        'Evinde 6 tane nesne bul!',
        {
          visual: 'Mutfakta 6:\n🥚🥚🥚🥚🥚🥚 = 6\'lı yumurta\n🍓🍓🍓🍓🍓🍓 = 6 çilek\n\nOyuncaklar:\n🧸🧸🧸🧸🧸🧸 = 6 oyuncak',
          examples: [
            createExample(
              'Yumurta paketinde kaç yumurta var? 🥚🥚🥚🥚🥚🥚',
              '6 yumurta!',
              'Say: bir, iki, üç, dört, beş, altı! ALTI yumurta! 🥚',
              '🥚🥚🥚\n🥚🥚🥚',
              ['Üst sıra: 3 yumurta', 'Alt sıra: 3 yumurta', '3 + 3 = 6 yumurta!']
            )
          ],
          tip: '💡 6\'lı paketler çok var! Yumurta, yoğurt, su...'
        }
      ),

      // ADIM 5: 6'YI FARKLI ŞEKİLLERDE OLUŞTURMA
      createStep(
        '6\'yı Farklı Şekillerde Yap',
        'Bak! 6 sayısını farklı şekillerde yapabiliriz!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   5 + 1 = 6   🖐️☝️                 │\n│                                     │\n│   4 + 2 = 6   🖖✌️                  │\n│                                     │\n│   3 + 3 = 6   🤟🤟                  │\n│                                     │\n│   2 + 4 = 6   ✌️🖖                  │\n│                                     │\n│   1 + 5 = 6   ☝️🖐️                 │\n│                                     │\n└─────────────────────────────────────┘\n\nHepsi 6!\n\nÇok eğlenceli! 🎉',
        '5+1, 4+2, 3+3 = hepsi 6!',
        'Parmaklarınla farklı 6\'lar yap!',
        {
          visual: 'ALTI yapmanın yolları:\n\n🍎🍎🍎🍎🍎 + 🍎 = 6\n\n🍎🍎🍎🍎 + 🍎🍎 = 6\n\n🍎🍎🍎 + 🍎🍎🍎 = 6',
          examples: [
            createExample(
              '3 elma + 3 elma = kaç elma?',
              '6 elma!',
              'Bak: 🍎🍎🍎 ile 🍎🍎🍎 bir araya gelince = 🍎🍎🍎🍎🍎🍎 = 6!',
              '🍎🍎🍎 + 🍎🍎🍎',
              ['Sol taraf: 3 elma', 'Sağ taraf: 3 elma', 'Birleştir: 6 elma!']
            )
          ],
          tip: '💡 6 yapmak çok kolay! 3+3 en kolay!'
        }
      ),

      // ADIM 6: 1'DEN 6'YA SAYALIM
      createStep(
        '1\'den 6\'ya Sayalım!',
        'Şimdi baştan sona sayalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1 → BİR     🔵                    │\n│   2 → İKİ     🔵🔵                  │\n│   3 → ÜÇ      🔵🔵🔵                │\n│   4 → DÖRT    🔵🔵🔵🔵              │\n│   5 → BEŞ     🔵🔵🔵🔵🔵            │\n│   6 → ALTI    🔵🔵🔵🔵🔵🔵          │\n│                                     │\n└─────────────────────────────────────┘\n\nYüksek sesle:\n\n"Bir, iki, üç, dört, beş, ALTI!"\n\nAferin! 👏👏',
        '1, 2, 3, 4, 5, 6!',
        'Parmaklarla 6\'ya kadar say!',
        {
          visual: 'Parmak sayma:\n\n☝️ = 1\n✌️ = 2\n🤟 = 3\n🖖 = 4\n🖐️ = 5\n🖐️☝️ = 6',
          examples: [
            createExample(
              '1\'den 6\'ya kadar say!',
              '1, 2, 3, 4, 5, 6!',
              'Bir parmak... iki parmak... üç... dört... beş... ve altı! 🖐️☝️',
              '☝️ → ✌️ → 🤟 → 🖖 → 🖐️ → 🖐️☝️',
              ['Her adımda bir parmak ekle!', 'Son: iki elde 6 parmak!']
            )
          ],
          tip: '💡 Her gün 6\'ya kadar say! Pratik yap! 🌟'
        }
      ),

      // ADIM 7: 6 İLE OYUNLAR
      createStep(
        '6 ile Eğlenceli Oyunlar',
        'Hadi oyun oynayalım! 🎮\n\n🎲 Oyun 1: Zar at!\nKaç nokta? 6 mı?\n\n🖐️ Oyun 2: Parmak göster!\n6 parmak göster!\n\n🍎 Oyun 3: Nesne say!\nOdanda 6 oyuncak bul!\n\n┌─────────────────────────────────────┐\n│                                     │\n│    Bugün 6 kere gül! 😊😊😊😊😊😊     │\n│                                     │\n│    Bugün 6 kere zıpla! 🦘          │\n│                                     │\n└─────────────────────────────────────┘\n\nŞimdi soruları çözelim! 📝',
        '6 ile oyna, 6\'yı öğren!',
        '6 kere alkış çal! 👏',
        {
          visual: 'Ev ödevleri:\n\n1. 6 kere gül 😊\n2. 6 nesne topla 🧸\n3. 6 kere zıpla 🦘\n4. Anneye 6 sarıl 🤗\n5. 6 parmak göster 🖐️☝️',
          examples: [
            createExample(
              '6 kere alkış çal! Kaç kere çaldın?',
              '6 kere!',
              'Bir, iki, üç, dört, beş, altı! 👏👏👏👏👏👏 ALTI kere!',
              '👏👏👏👏👏👏',
              ['Her alkışı say!', 'Son alkış 6. alkış!', 'Toplam: 6 kere!']
            )
          ],
          tip: '💡 Oyunla öğren! 6 daha eğlenceli olur! 🎉'
        }
      )
    ],

    // PRATİK SORULAR
    practiceQuestions: [
      createMultipleChoice(
        'Kaç tane yıldız var? ⭐⭐⭐⭐⭐⭐',
        ['4', '5', '6', '7'],
        '6',
        'Bir, iki, üç, dört, beş, altı! ALTI yıldız! ⭐',
        '⭐⭐⭐⭐⭐⭐',
        1,
        'Yıldızları teker teker say!'
      ),

      createMultipleChoice(
        '5 + 1 = ?',
        ['4', '5', '6', '7'],
        '6',
        '5 artı 1 eşittir 6! 🖐️ + ☝️ = 6',
        '🖐️ + ☝️',
        1,
        '5 var, 1 tane daha koy!'
      ),

      createFillBlank(
        '1, 2, 3, 4, 5, ___',
        ['6', 'altı'],
        '5\'ten sonra 6 gelir! 1, 2, 3, 4, 5, 6!',
        '1 → 2 → 3 → 4 → 5 → ?',
        1,
        'Sırayla say!'
      ),

      createMultipleChoice(
        '🎲 Zarda en büyük sayı kaç?',
        ['4', '5', '6', '7'],
        '6',
        'Zarda en büyük sayı 6! 🎲 = ⚪⚪⚪⚪⚪⚪',
        '🎲',
        1,
        'Zardaki noktalara bak!'
      ),

      createMultipleChoice(
        '3 + 3 = ?',
        ['4', '5', '6', '7'],
        '6',
        '3 artı 3 eşittir 6! 🤟 + 🤟 = 6',
        '🍎🍎🍎 + 🍎🍎🍎',
        1,
        '3 ile 3\'ü topla!'
      ),

      createMultipleChoice(
        'Kaç tane kalp? 💝💝💝💝💝💝',
        ['4', '5', '6', '7'],
        '6',
        'Say: bir, iki, üç, dört, beş, altı! 💝 = 6 tane!',
        '💝💝💝💝💝💝',
        1,
        'Kalpleri say!'
      ),

      createFillBlank(
        '6 yapmak için: 4 + ___ = 6',
        ['2', 'iki'],
        '4 artı 2 eşittir 6! 🖖 + ✌️ = 6',
        '4 + ? = 6',
        1,
        '4\'ten 6\'ya kaç eklemen lazım?'
      ),

      createMultipleChoice(
        'Yumurta paketinde kaç yumurta? 🥚🥚🥚🥚🥚🥚',
        ['4', '5', '6', '8'],
        '6',
        '6\'lı yumurta paketi! 🥚 = 6 tane!',
        '🥚🥚🥚\n🥚🥚🥚',
        1,
        'Yumurtaları say!'
      ),

      createMultipleChoice(
        '2 + 4 = ?',
        ['4', '5', '6', '7'],
        '6',
        '2 artı 4 eşittir 6! ✌️ + 🖖 = 6',
        '🔵🔵 + 🔵🔵🔵🔵',
        1,
        '2 ile 4\'ü topla!'
      ),

      createMultipleChoice(
        'Hangisi 6 tane?',
        ['🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎'],
        '🍎🍎🍎🍎🍎🍎',
        'İkinci seçenek! 🍎🍎🍎🍎🍎🍎 = 6 elma!',
        undefined,
        1,
        'Elmaları say!'
      ),

      createFillBlank(
        'Bir elde 5 parmak var. Bir parmak daha = ___ parmak.',
        ['6', 'altı'],
        '5 + 1 = 6 parmak! 🖐️☝️',
        '🖐️ + ☝️',
        1,
        '5\'e 1 ekle!'
      ),

      createMultipleChoice(
        'Kaç tane top? 🔵🔵🔵🔵🔵🔵',
        ['5', '6', '7', '8'],
        '6',
        'Altı tane top! 🔵 = 6!',
        '🔵🔵🔵🔵🔵🔵',
        1,
        'Topları say!'
      ),

      createMultipleChoice(
        '1 + 5 = ?',
        ['4', '5', '6', '7'],
        '6',
        '1 artı 5 eşittir 6! ☝️ + 🖐️ = 6',
        '☝️ + 🖐️',
        1,
        '1 ile 5\'i topla!'
      ),

      createMultipleChoice(
        'Zarda kaç nokta? ⚪⚪⚪ ve ⚪⚪⚪',
        ['5', '6', '7', '8'],
        '6',
        '3 nokta + 3 nokta = 6 nokta! 🎲',
        '⚪⚪⚪\n⚪⚪⚪',
        1,
        'Her sıradaki noktaları say!'
      ),

      createFillBlank(
        '___ sayısı 5\'ten sonra gelir.',
        ['6', 'altı'],
        '5\'ten sonra 6 gelir! 5 → 6',
        '5 → ?',
        1,
        '5, 6... diye say!'
      )
    ],

    summary: '🎉 Süpersin!\n\n✅ 6 = ALTI 🎲\n✅ 5 + 1 = 6\n✅ 3 + 3 = 6\n✅ 🖐️☝️ = 6 parmak\n✅ Zarda 6 nokta ⚪⚪⚪⚪⚪⚪\n\nALTI sayısını öğrendin!\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste YEDİ (7) sayısını öğreneceğiz! Gökkuşağının 7 rengi! 🌈'
  }
};
