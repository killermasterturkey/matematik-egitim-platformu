// DESTEK SINIFI - TEMA 3 - KONU 3: SEKİZ (8) SAYISI
// Ahtapot temalı, eğlenceli anlatım

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu3Sekiz: Topic = {
  id: 'sekiz-sayisi',
  title: 'SEKİZ (8) Sayısı',
  description: 'Ahtapotun 8 kolu var! 8 = iki tane 4! 🐙',
  emoji: '🐙',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['sekiz', '8', 'ahtapot', 'sonsuzluk'],
  objectives: [
    '8 sayısını tanıyacaksın',
    '7 + 1 = 8 olduğunu göreceksin',
    '4 + 4 = 8 olduğunu anlayacaksın',
    '8 şeklinin ∞ gibi olduğunu göreceksin'
  ],

  content: {
    introduction: '🐙 Merhaba!\n\nBugün SEKİZ sayısını öğreneceğiz.\n\n8... SEKİZ!\n\nAhtapotun 8 kolu var! 🐙\n\n8 şekli çok özel: ∞ (sonsuzluk!)\n\nHazır mısın? Başlayalım!',

    motivationQuote: 'Sen bir ahtapot kadar güçlüsün! 8 kolu var, hepsini kullanır! 🐙',

    funFacts: [
      '🐙 Ahtapotun 8 kolu var!',
      '∞ 8 yan yatınca sonsuzluk işareti olur!',
      '🕷️ Örümceğin 8 bacağı var!',
      '🎱 Bilardo toplarında 8 numarası özel!',
      '📦 8 köşeli kutu (küp)!',
      '🎵 Müzikte sekizli nota!',
      '⚽ Bazı takımlarda 8 numara çok önemli!',
      '🍕 Pizzayı 8 dilime bölebiliriz!'
    ],

    steps: [
      createStep(
        '7\'den 8\'e Geçiş',
        'Hatırla! 7 sayısını biliyorsun! 🌈\n\n┌─────────────────────────────────────┐\n│   🔵🔵🔵🔵🔵🔵🔵                      │\n│        7 top!                       │\n└─────────────────────────────────────┘\n\nŞimdi bir tane DAHA! 🔵\n\n┌─────────────────────────────────────┐\n│   🔵🔵🔵🔵🔵🔵🔵  🔵                 │\n│      7 + 1 = 8 top!                 │\n└─────────────────────────────────────┘\n\nBak! 7 artı 1 = SEKİZ! 🎉',
        '7 + 1 = 8',
        '7 var, 1 tane daha ekle!',
        {
          visual: '7: 🍎🍎🍎🍎🍎🍎🍎\n +\n1: 🍎\n =\n8: 🍎🍎🍎🍎🍎🍎🍎🍎',
          examples: [
            createExample(
              '7 tane var, 1 tane daha geldi. Toplam kaç?',
              '8 tane!',
              'Bak: 🎈🎈🎈🎈🎈🎈🎈 + 🎈 = 8 balon!',
              '🎈🎈🎈🎈🎈🎈🎈🎈',
              ['7 balon var', '1 balon daha', 'Say: 1, 2, 3, 4, 5, 6, 7, 8!']
            )
          ],
          tip: '💡 7 biliyorsan, 1 ekle = 8!'
        }
      ),

      createStep(
        'Ahtapot ve 8 Kol',
        '🐙 AHTAPOT!\n\nAhtapot denizde yaşar.\n\n8 kolu var!\n\n┌─────────────────────────────────────┐\n│                                     │\n│        🐙                           │\n│       ╱│╲                           │\n│      ╱ │ ╲                          │\n│     8 kolu var!                     │\n│                                     │\n└─────────────────────────────────────┘\n\nSay kolları:\n\n1, 2, 3, 4, 5, 6, 7, 8!\n\nSEKİZ kol! 🐙\n\nÇok güçlü! 💪',
        '🐙 = 8 kol',
        'Ahtapotun kollarını say!',
        {
          visual: 'Ahtapot:\n\n🐙\n\n8 kol!\nHer kolla tutabilir!',
          examples: [
            createExample(
              'Ahtapotun kaç kolu var?',
              '8 kol!',
              'Ahtapotun SEKİZ kolu var! 🐙 = 8',
              '🐙',
              ['Kolları say!', 'Hepsi uzun!', 'Toplam: 8 kol!']
            )
          ],
          tip: '💡 Ahtapot akıllı! 8 koluyla her şeyi yapar! 🐙'
        }
      ),

      createStep(
        '8 = İki Tane 4',
        'Bak! Çok önemli!\n\n8 = 4 + 4\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🔵🔵🔵🔵  +  🔵🔵🔵🔵               │\n│                                     │\n│      4    +     4    =  8           │\n│                                     │\n└─────────────────────────────────────┘\n\nİki tane 4... birleştir... 8!\n\nHarika! 🎉',
        '4 + 4 = 8',
        'İki elin 4 parmağını göster!',
        {
          visual: '🖖 + 🖖 = 8\n\n4 parmak + 4 parmak = 8 parmak!',
          examples: [
            createExample(
              '4 elma + 4 elma = kaç elma?',
              '8 elma!',
              '🍎🍎🍎🍎 + 🍎🍎🍎🍎 = 8 elma!',
              '🍎🍎🍎🍎🍎🍎🍎🍎',
              ['İlk grup: 4 elma', 'İkinci grup: 4 elma', 'Toplam: 8 elma!']
            )
          ],
          tip: '💡 8 = iki tane 4! Bunu hatırla! Çok kolay!'
        }
      ),

      createStep(
        '8 Şekli ve Sonsuzluk',
        '8 çok özel!\n\nBak 8 şekline: 8\n\nYan çevir: ∞\n\n┌─────────────────────────────────────┐\n│                                     │\n│      8  →  (yan çevir)  →  ∞        │\n│                                     │\n│     Sonsuzluk işareti!              │\n│                                     │\n└─────────────────────────────────────┘\n\n∞ = Sonsuz!\n\nHiç bitmeyen!\n\nWowww! 😍',
        '8 → ∞ (sonsuzluk)',
        '8\'i yan çevir!',
        {
          visual: '8 şekli:\n\n  ⚪⚪\n ⚪  ⚪\n  ⚪⚪\n ⚪  ⚪\n  ⚪⚪\n\nYan yatır: ∞',
          examples: [
            createExample(
              '8 şeklini yan yatırınca ne olur?',
              'Sonsuzluk işareti! ∞',
              '8 → ∞ Sonsuzluk!',
              '8 ⟲ ∞',
              ['8\'i çevir', 'Yatay olur', 'Sonsuzluk! ∞']
            )
          ],
          tip: '💡 8 özel bir sayı! Yan yatınca ∞ olur!'
        }
      ),

      createStep(
        '8 Sayısı - SEKİZ',
        'İşte 8 sayısı!\n\n┌─────────────────────────────────────┐\n│      8 = SEKİZ                      │\n│                                     │\n│   ⭐⭐⭐⭐⭐⭐⭐⭐                      │\n│                                     │\n│   Bak! 8 yıldız!                    │\n└─────────────────────────────────────┘\n\nSayalım:\n\n"Bir, iki, üç, dört, beş, altı, yedi, SEKİZ!"\n\nMükemmel! 🌟',
        '8 = SEKİZ',
        '1\'den 8\'e say!',
        {
          visual: '8️⃣ = SEKİZ\n\n⭐⭐⭐⭐⭐⭐⭐⭐\n\n💝💝💝💝💝💝💝💝',
          examples: [
            createExample(
              'Kaç tane kalp? 💝💝💝💝💝💝💝💝',
              '8 tane!',
              'Say: bir, iki, üç, dört, beş, altı, yedi, sekiz! SEKİZ kalp!',
              '💝💝💝💝💝💝💝💝',
              ['Her birini say!', 'Son: 8. kalp!']
            )
          ],
          tip: '💡 8\'e kadar saymak artık kolay! 🎉'
        }
      ),

      createStep(
        '8\'i Farklı Şekillerde Yap',
        '8 yapmanın yolları:\n\n┌─────────────────────────────────────┐\n│   7 + 1 = 8                         │\n│   6 + 2 = 8                         │\n│   5 + 3 = 8                         │\n│   4 + 4 = 8 ⭐ EN KOLAY!            │\n│   3 + 5 = 8                         │\n│   2 + 6 = 8                         │\n│   1 + 7 = 8                         │\n└─────────────────────────────────────┘\n\nHepsi 8!\n\nEn kolay: 4 + 4 = 8! 🎉',
        '4 + 4 = 8 (en kolay!)',
        'İki elin 4 parmağı!',
        {
          visual: '8 yapma:\n\n🍎🍎🍎🍎 + 🍎🍎🍎🍎 = 8 (4+4)\n\n🍎🍎🍎🍎🍎 + 🍎🍎🍎 = 8 (5+3)',
          examples: [
            createExample(
              '5 + 3 = ?',
              '8!',
              '5 artı 3 eşittir 8! 🖐️ + 🤟 = 8',
              '5 + 3',
              ['5 var', '3 ekle', 'Toplam: 8!']
            )
          ],
          tip: '💡 4 + 4 = 8 bunu ezberle! Çok işe yarar!'
        }
      ),

      createStep(
        '1\'den 8\'e Sayalım!',
        'Büyük sayma zamanı!\n\n┌─────────────────────────────────────┐\n│   1 → 🔵                            │\n│   2 → 🔵🔵                          │\n│   3 → 🔵🔵🔵                        │\n│   4 → 🔵🔵🔵🔵                      │\n│   5 → 🔵🔵🔵🔵🔵                    │\n│   6 → 🔵🔵🔵🔵🔵🔵                  │\n│   7 → 🔵🔵🔵🔵🔵🔵🔵                │\n│   8 → 🔵🔵🔵🔵🔵🔵🔵🔵              │\n└─────────────────────────────────────┘\n\nYüksek sesle:\n\n"1, 2, 3, 4, 5, 6, 7, 8!"\n\nSüpersin! 🌟',
        '1, 2, 3, 4, 5, 6, 7, 8!',
        '8\'e kadar say!',
        {
          visual: 'Sayma:\n1 2 3 4 5 6 7 8\n\n🐙 Ahtapot gibi güçlüsün!',
          examples: [
            createExample(
              '1\'den 8\'e kadar say!',
              '1, 2, 3, 4, 5, 6, 7, 8!',
              'Bir, iki, üç, dört, beş, altı, yedi, sekiz! 🐙',
              '1→2→3→4→5→6→7→8',
              ['Her sayıyı söyle!', 'Son: sekiz!']
            )
          ],
          tip: '💡 Her gün 8\'e kadar say! Ahtapotu hatırla! 🐙'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Ahtapotun kaç kolu var? 🐙',
        ['6', '7', '8', '9'],
        '8',
        'Ahtapotun SEKİZ kolu var! 🐙 = 8',
        '🐙',
        1,
        'Ahtapotun kollarını say!'
      ),

      createMultipleChoice(
        '7 + 1 = ?',
        ['6', '7', '8', '9'],
        '8',
        '7 artı 1 eşittir 8!',
        '7 + 1',
        1,
        '7\'ye 1 ekle!'
      ),

      createMultipleChoice(
        '4 + 4 = ?',
        ['6', '7', '8', '9'],
        '8',
        '4 artı 4 eşittir 8! 🖖 + 🖖 = 8',
        '4 + 4',
        1,
        'İki tane 4!'
      ),

      createFillBlank(
        '1, 2, 3, 4, 5, 6, 7, ___',
        ['8', 'sekiz'],
        '7\'den sonra 8 gelir!',
        '7 → ?',
        1,
        'Sırayla say!'
      ),

      createMultipleChoice(
        'Kaç tane yıldız? ⭐⭐⭐⭐⭐⭐⭐⭐',
        ['6', '7', '8', '9'],
        '8',
        'SEKİZ yıldız! ⭐ = 8',
        '⭐⭐⭐⭐⭐⭐⭐⭐',
        1,
        'Yıldızları say!'
      ),

      createMultipleChoice(
        '5 + 3 = ?',
        ['6', '7', '8', '9'],
        '8',
        '5 artı 3 eşittir 8!',
        '5 + 3',
        1,
        '5 ile 3\'ü topla!'
      ),

      createMultipleChoice(
        '8 yan yatınca ne olur?',
        ['7', '9', 'Sonsuzluk ∞', 'Hiçbir şey'],
        'Sonsuzluk ∞',
        '8 yan yatınca ∞ (sonsuzluk) olur!',
        '8 → ∞',
        1,
        '8\'i çevir!'
      ),

      createFillBlank(
        '8 yapmak için: 6 + ___ = 8',
        ['2', 'iki'],
        '6 artı 2 eşittir 8!',
        '6 + ? = 8',
        1,
        '6\'dan 8\'e kaç lazım?'
      ),

      createMultipleChoice(
        'Kaç tane kalp? 💝💝💝💝💝💝💝💝',
        ['6', '7', '8', '9'],
        '8',
        'SEKİZ kalp! 💝 = 8',
        '💝💝💝💝💝💝💝💝',
        1,
        'Kalpleri say!'
      ),

      createMultipleChoice(
        '2 + 6 = ?',
        ['6', '7', '8', '9'],
        '8',
        '2 artı 6 eşittir 8!',
        '2 + 6',
        1,
        '2 ile 6\'yı topla!'
      ),

      createMultipleChoice(
        '3 + 5 = ?',
        ['6', '7', '8', '9'],
        '8',
        '3 artı 5 eşittir 8!',
        '3 + 5',
        1,
        '3 ile 5\'i topla!'
      ),

      createFillBlank(
        'İki tane 4 = ___',
        ['8', 'sekiz'],
        '4 + 4 = 8! İki tane 4 eşittir 8!',
        '4 + 4',
        1,
        '4 artı 4?'
      ),

      createMultipleChoice(
        '1 + 7 = ?',
        ['6', '7', '8', '9'],
        '8',
        '1 artı 7 eşittir 8!',
        '1 + 7',
        1,
        '1 ile 7\'yi topla!'
      ),

      createMultipleChoice(
        'Hangisi 8 tane?',
        ['🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎'],
        '🍎🍎🍎🍎🍎🍎🍎🍎',
        'Üçüncü seçenek! 🍎 = 8 elma!',
        undefined,
        1,
        'Elmaları say!'
      ),

      createMultipleChoice(
        'Örümceğin kaç bacağı var? 🕷️',
        ['6', '7', '8', '10'],
        '8',
        'Örümceğin SEKİZ bacağı var! 🕷️ = 8',
        '🕷️',
        1,
        'Örümcek bacaklarını say!'
      )
    ],

    summary: '🐙 Harikasın!\n\n✅ 8 = SEKİZ 🐙\n✅ Ahtapot = 8 kol\n✅ 7 + 1 = 8\n✅ 4 + 4 = 8 ⭐\n✅ 8 → ∞ (sonsuzluk)\n✅ Örümcek = 8 bacak 🕷️\n\nSEKİZ sayısını öğrendin!\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste DOKUZ (9) sayısını öğreneceğiz! Kedinin 9 canı! 🐱'
  }
};
