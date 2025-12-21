// DESTEK SINIFI - TEMA 3 - KONU 2: YEDİ (7) SAYISI
// Gökkuşağı temalı, renkli, sevgi dolu anlatım

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu2Yedi: Topic = {
  id: 'yedi-sayisi',
  title: 'YEDİ (7) Sayısı',
  description: 'Gökkuşağının 7 rengi! Haftanın 7 günü! 🌈',
  emoji: '🌈',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['yedi', '7', 'gökkuşağı', 'hafta', 'renk'],
  objectives: [
    '7 sayısını tanıyacaksın',
    'Haftanın 7 gününü sayacaksın',
    'Gökkuşağının 7 rengini göreceksin',
    '6 + 1 = 7 olduğunu anlayacaksın'
  ],

  content: {
    introduction: '🌈 Merhaba!\n\nBugün YEDİ sayısını öğreneceğiz.\n\n7... YEDİ!\n\nGökkuşağının 7 rengi var! 🌈\n\nHaftanın 7 günü var! 📅\n\nHazır mısın? Başlayalım!',

    motivationQuote: 'Sen bir gökkuşağı gibi renklisin! Birlikte 7\'yi öğreneceğiz! 🌈',

    funFacts: [
      '🌈 Gökkuşağında 7 renk var! Kırmızı, turuncu, sarı, yeşil, mavi, lacivert, mor!',
      '📅 Haftada 7 gün var! Pazartesi\'den Pazar\'a!',
      '🎵 Müzikte 7 nota var! Do, re, mi, fa, sol, la, si!',
      '📚 Yedi Cüceler hikayesi çok ünlü!',
      '🌍 Dünyada 7 kıta var!',
      '🌊 Yedi deniz (eski deyim)!',
      '⭐ Yıldızlar 7 kola sahip olabilir!',
      '🐞 Bazı uğur böcekleri 7 noktalı!'
    ],

    steps: [
      // ADIM 1: 6'DAN 7'YE
      createStep(
        '6\'dan 7\'ye Geçiş',
        'Hatırla!\n\n6 sayısını biliyorsun! 🖐️☝️\n\n┌─────────────────────────────────────┐\n│                                     │\n│       🔵🔵🔵🔵🔵🔵                    │\n│                                     │\n│         6 top!                      │\n│                                     │\n└─────────────────────────────────────┘\n\nŞimdi bir tane DAHA koy! 🔵\n\n┌─────────────────────────────────────┐\n│                                     │\n│     🔵🔵🔵🔵🔵🔵  🔵                 │\n│                                     │\n│      6 + 1 = 7 top!                 │\n│                                     │\n└─────────────────────────────────────┘\n\nBak! 6 artı 1 = YEDİ! 🎉',
        '6 + 1 = 7',
        '6 var, 1 tane daha ekle!',
        {
          visual: '6 tane: 🍎🍎🍎🍎🍎🍎\n     +\n1 tane: 🍎\n     =\n7 tane: 🍎🍎🍎🍎🍎🍎🍎',
          examples: [
            createExample(
              '6 tane var, 1 tane daha geldi. Toplam kaç?',
              '7 tane!',
              'Bak: 🎈🎈🎈🎈🎈🎈 + 🎈 = 7 balon!',
              '🎈🎈🎈🎈🎈🎈🎈',
              ['6 balon var', '1 balon daha geldi', 'Hepsini say: 1, 2, 3, 4, 5, 6, 7!', 'Toplam: 7']
            )
          ],
          tip: '💡 6 biliyorsan, 1 tane daha = 7! Çok kolay!'
        }
      ),

      // ADIM 2: GÖKKUŞAĞI VE 7 RENK
      createStep(
        'Gökkuşağının 7 Rengi',
        '🌈 GÖKKUŞAĞI!\n\nGökkuşağında 7 renk var!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🔴 1. Kırmızı                     │\n│   🟠 2. Turuncu                     │\n│   🟡 3. Sarı                        │\n│   🟢 4. Yeşil                       │\n│   🔵 5. Mavi                        │\n│   🟣 6. Lacivert                    │\n│   🟣 7. Mor                         │\n│                                     │\n└─────────────────────────────────────┘\n\nSay!\n\n1, 2, 3, 4, 5, 6, 7!\n\nYEDİ renk! 🌈\n\nNe kadar güzel! 😍',
        '🌈 = 7 renk',
        'Gökkuşağının renklerini say!',
        {
          visual: 'Gökkuşağı:\n\n🔴🟠🟡🟢🔵🟣🟣\n\n7 renk!\n\nYağmurdan sonra gökte görünür!',
          examples: [
            createExample(
              'Gökkuşağında kaç renk var?',
              '7 renk!',
              'Say: Kırmızı, turuncu, sarı, yeşil, mavi, lacivert, mor! YEDİ renk! 🌈',
              '🔴🟠🟡🟢🔵🟣🟣',
              ['Her rengi teker teker say!', 'Son renk 7. renk!', 'Toplam: 7 renk!']
            )
          ],
          tip: '💡 Yağmur yağdıktan sonra gökkuşağına bak! 7 rengi gör! 🌈'
        }
      ),

      // ADIM 3: HAFTANIN 7 GÜNÜ
      createStep(
        'Haftanın 7 Günü',
        '📅 HAFTA!\n\nBir haftada 7 gün var!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1️⃣ Pazartesi                     │\n│   2️⃣ Salı                          │\n│   3️⃣ Çarşamba                      │\n│   4️⃣ Perşembe                      │\n│   5️⃣ Cuma                          │\n│   6️⃣ Cumartesi                     │\n│   7️⃣ Pazar                         │\n│                                     │\n└─────────────────────────────────────┘\n\nHepsi YEDİ gün! 📅\n\nSayalım:\n\nBir, iki, üç, dört, beş, altı, yedi!\n\nHarika! 👏',
        '📅 = 7 gün',
        'Haftanın günlerini say!',
        {
          visual: 'Pazartesi → 1\nSalı → 2\nÇarşamba → 3\nPerşembe → 4\nCuma → 5\nCumartesi → 6\nPazar → 7\n\nToplam: 7 gün!',
          examples: [
            createExample(
              'Bir haftada kaç gün var?',
              '7 gün!',
              'Pazartesi, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar! YEDİ gün! 📅',
              '📅',
              ['Her günü say!', 'Pazartesi 1, Pazar 7!', 'Toplam: 7 gün!']
            )
          ],
          tip: '💡 Her hafta 7 gün! Takvime bak! 📅'
        }
      ),

      // ADIM 4: 7 SAYISINI TANIYALIM
      createStep(
        '7 Sayısı - YEDİ',
        'İşte 7 sayısı!\n\n┌─────────────────────────────────────┐\n│                                     │\n│      7 = YEDİ                       │\n│                                     │\n│   ⭐⭐⭐⭐⭐⭐⭐                        │\n│                                     │\n│   Bak! 7 yıldız!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nSayalım:\n\n"Bir... iki... üç... dört... beş... altı... YEDİ!"\n\nMükemmel! 🌟',
        '7 = YEDİ = ⭐⭐⭐⭐⭐⭐⭐',
        'Yüksek sesle say: 1\'den 7\'ye!',
        {
          visual: '7️⃣ = YEDİ\n\n⭐⭐⭐⭐⭐⭐⭐ = 7 yıldız\n\n🍎🍎🍎🍎🍎🍎🍎 = 7 elma\n\n💝💝💝💝💝💝💝 = 7 kalp',
          examples: [
            createExample(
              'Kaç tane kalp var? 💝💝💝💝💝💝💝',
              '7 tane!',
              'Say: bir, iki, üç, dört, beş, altı, yedi! YEDİ kalp! 💝',
              '💝💝💝💝💝💝💝',
              ['Teker teker say!', 'Son kalp 7. kalp!', 'Toplam: 7']
            )
          ],
          tip: '💡 7 özel bir sayı! Gökkuşağı, hafta... hep 7! 🌈'
        }
      ),

      // ADIM 5: 7 CÜCELER
      createStep(
        'Yedi Cüceler Hikayesi',
        '📚 Yedi Cüceler!\n\nBilir misin?\n\nPamuk Prenses ve Yedi Cüceler!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🧙 🧙 🧙 🧙 🧙 🧙 🧙               │\n│                                     │\n│      7 cüce var!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nSay cüceleri:\n\n1, 2, 3, 4, 5, 6, 7!\n\nYEDİ cüce! 🧙\n\nÇok sevimli! 💝',
        '🧙 × 7 = Yedi Cüceler',
        'Masallarda 7 çok var!',
        {
          visual: 'Yedi Cüceler:\n\n🧙 🧙 🧙 🧙 🧙 🧙 🧙\n\nHepsi Pamuk Prenses\'le yaşar! 👸',
          examples: [
            createExample(
              'Pamuk Prenses kaç cüceyle yaşar?',
              '7 cüce!',
              'Hikayede: 🧙 🧙 🧙 🧙 🧙 🧙 🧙 = YEDİ cüce!',
              '🧙🧙🧙🧙🧙🧙🧙',
              ['Cüceleri say!', 'Hepsi küçük ve sevimli!', 'Toplam: 7 cüce!']
            )
          ],
          tip: '💡 Masalları dinle! 7 sayısı çok geçer! 📚'
        }
      ),

      // ADIM 6: 7'Yİ FARKLI ŞEKİLLERDE OLUŞTURMA
      createStep(
        '7\'yi Farklı Şekillerde Yap',
        'Bak! 7 sayısını farklı şekillerde yapabiliriz!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   6 + 1 = 7                         │\n│   5 + 2 = 7                         │\n│   4 + 3 = 7                         │\n│   3 + 4 = 7                         │\n│   2 + 5 = 7                         │\n│   1 + 6 = 7                         │\n│                                     │\n└─────────────────────────────────────┘\n\nHepsi 7!\n\nİnanılmaz! 🎉',
        '6+1, 5+2, 4+3 = hepsi 7!',
        'Farklı yollarla 7 yap!',
        {
          visual: 'YEDİ yapmanın yolları:\n\n🍎🍎🍎🍎🍎🍎 + 🍎 = 7\n\n🍎🍎🍎🍎🍎 + 🍎🍎 = 7\n\n🍎🍎🍎🍎 + 🍎🍎🍎 = 7',
          examples: [
            createExample(
              '4 elma + 3 elma = kaç elma?',
              '7 elma!',
              'Bak: 🍎🍎🍎🍎 ile 🍎🍎🍎 bir araya gelince = 🍎🍎🍎🍎🍎🍎🍎 = 7!',
              '🍎🍎🍎🍎 + 🍎🍎🍎',
              ['Sol taraf: 4 elma', 'Sağ taraf: 3 elma', 'Birleştir: 7 elma!']
            )
          ],
          tip: '💡 7 yapmak kolay! 4+3 veya 5+2!'
        }
      ),

      // ADIM 7: 1'DEN 7'YE SAYALIM
      createStep(
        '1\'den 7\'ye Sayalım!',
        'Şimdi baştan sona sayalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1 → 🔵                            │\n│   2 → 🔵🔵                          │\n│   3 → 🔵🔵🔵                        │\n│   4 → 🔵🔵🔵🔵                      │\n│   5 → 🔵🔵🔵🔵🔵                    │\n│   6 → 🔵🔵🔵🔵🔵🔵                  │\n│   7 → 🔵🔵🔵🔵🔵🔵🔵                │\n│                                     │\n└─────────────────────────────────────┘\n\nYüksek sesle:\n\n"Bir, iki, üç, dört, beş, altı, YEDİ!"\n\nSüpersin! 🌟🌟',
        '1, 2, 3, 4, 5, 6, 7!',
        '7\'ye kadar say!',
        {
          visual: 'Gökkuşağı sayma:\n\n🔴 1\n🟠 2\n🟡 3\n🟢 4\n🔵 5\n🟣 6\n🟣 7\n\nYEDİ renk!',
          examples: [
            createExample(
              '1\'den 7\'ye kadar say!',
              '1, 2, 3, 4, 5, 6, 7!',
              'Bir, iki, üç, dört, beş, altı, yedi! 🌈',
              '1 → 2 → 3 → 4 → 5 → 6 → 7',
              ['Her sayıyı sesli söyle!', 'Son: yedi!']
            )
          ],
          tip: '💡 Her gün 7\'ye kadar say! Gökkuşağını hatırla! 🌈'
        }
      )
    ],

    // PRATİK SORULAR
    practiceQuestions: [
      createMultipleChoice(
        'Gökkuşağında kaç renk var? 🌈',
        ['5', '6', '7', '8'],
        '7',
        'Gökkuşağında YEDİ renk var! 🔴🟠🟡🟢🔵🟣🟣 = 7',
        '🌈',
        1,
        'Gökkuşağının renklerini say!'
      ),

      createMultipleChoice(
        'Bir haftada kaç gün var? 📅',
        ['5', '6', '7', '8'],
        '7',
        'Bir haftada YEDİ gün var! Pazartesi-Pazar = 7 gün!',
        '📅',
        1,
        'Haftanın günlerini say!'
      ),

      createMultipleChoice(
        '6 + 1 = ?',
        ['5', '6', '7', '8'],
        '7',
        '6 artı 1 eşittir 7! 🔵🔵🔵🔵🔵🔵 + 🔵 = 7',
        '6 + 1',
        1,
        '6\'ya 1 ekle!'
      ),

      createFillBlank(
        '1, 2, 3, 4, 5, 6, ___',
        ['7', 'yedi'],
        '6\'dan sonra 7 gelir! 1, 2, 3, 4, 5, 6, 7!',
        '1 → 2 → 3 → 4 → 5 → 6 → ?',
        1,
        'Sırayla say!'
      ),

      createMultipleChoice(
        'Kaç tane yıldız? ⭐⭐⭐⭐⭐⭐⭐',
        ['5', '6', '7', '8'],
        '7',
        'YEDİ yıldız! ⭐ = 7 tane!',
        '⭐⭐⭐⭐⭐⭐⭐',
        1,
        'Yıldızları say!'
      ),

      createMultipleChoice(
        'Pamuk Prenses kaç cüceyle yaşar? 🧙',
        ['5', '6', '7', '8'],
        '7',
        'Yedi Cüceler! 🧙 × 7 = 7 cüce!',
        '🧙🧙🧙🧙🧙🧙🧙',
        1,
        'Masalı hatırla!'
      ),

      createMultipleChoice(
        '4 + 3 = ?',
        ['5', '6', '7', '8'],
        '7',
        '4 artı 3 eşittir 7! 🔵🔵🔵🔵 + 🔵🔵🔵 = 7',
        '4 + 3',
        1,
        '4 ile 3\'ü topla!'
      ),

      createFillBlank(
        '7 yapmak için: 5 + ___ = 7',
        ['2', 'iki'],
        '5 artı 2 eşittir 7! 🖐️ + ✌️ = 7',
        '5 + ? = 7',
        1,
        '5\'ten 7\'ye kaç eklemen lazım?'
      ),

      createMultipleChoice(
        'Kaç tane kalp? 💝💝💝💝💝💝💝',
        ['5', '6', '7', '8'],
        '7',
        'YEDİ kalp! 💝 = 7 tane!',
        '💝💝💝💝💝💝💝',
        1,
        'Kalpleri say!'
      ),

      createMultipleChoice(
        '2 + 5 = ?',
        ['5', '6', '7', '8'],
        '7',
        '2 artı 5 eşittir 7! ✌️ + 🖐️ = 7',
        '2 + 5',
        1,
        '2 ile 5\'i topla!'
      ),

      createFillBlank(
        'Müzikte ___ nota var. (Do, re, mi...)',
        ['7', 'yedi'],
        'Müzikte YEDİ nota var! Do, re, mi, fa, sol, la, si = 7!',
        '🎵',
        1,
        'Notaları say!'
      ),

      createMultipleChoice(
        'Hangisi 7 tane?',
        ['🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎'],
        '🍎🍎🍎🍎🍎🍎🍎',
        'Üçüncü seçenek! 🍎🍎🍎🍎🍎🍎🍎 = 7 elma!',
        undefined,
        1,
        'Elmaları say!'
      ),

      createMultipleChoice(
        '3 + 4 = ?',
        ['5', '6', '7', '8'],
        '7',
        '3 artı 4 eşittir 7! 🤟 + 🖖 = 7',
        '3 + 4',
        1,
        '3 ile 4\'ü topla!'
      ),

      createMultipleChoice(
        '1 + 6 = ?',
        ['5', '6', '7', '8'],
        '7',
        '1 artı 6 eşittir 7! ☝️ + 🖐️☝️ = 7',
        '1 + 6',
        1,
        '1 ile 6\'yı topla!'
      ),

      createFillBlank(
        'Gökkuşağının renkleri: Kırmızı, turuncu, sarı, yeşil, mavi, lacivert, ___',
        ['mor', 'Mor'],
        'Son renk MOR! Toplam 7 renk! 🌈',
        '🔴🟠🟡🟢🔵🟣?',
        1,
        'Son rengi hatırla!'
      )
    ],

    summary: '🌈 Harikasın!\n\n✅ 7 = YEDİ 🌈\n✅ Gökkuşağı = 7 renk 🔴🟠🟡🟢🔵🟣🟣\n✅ Hafta = 7 gün 📅\n✅ 6 + 1 = 7\n✅ 4 + 3 = 7\n✅ Yedi Cüceler 🧙\n\nYEDİ sayısını öğrendin!\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste SEKİZ (8) sayısını öğreneceğiz! Ahtapotun 8 kolu! 🐙'
  }
};
