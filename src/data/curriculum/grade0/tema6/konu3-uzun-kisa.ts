// DESTEK SINIFI - TEMA 6 - KONU 3: UZUN - KISA
// Uzunluk karşılaştırması

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu3UzunKisa: Topic = {
  id: 'uzun-kisa',
  title: 'Uzun - Kısa',
  description: 'Zürafa uzun, fare kısa!',
  emoji: '🦒',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['uzun', 'kısa', 'boy', 'uzunluk', 'zürafa', 'fare'],
  objectives: [
    'Uzun - kısa kavramlarını anlayacaksın',
    'Nesneleri uzunluğa göre karşılaştıracaksın',
    'Boy karşılaştırması yapacaksın',
    'Uzun ve kısa nesneler bulacaksın'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün uzunlukları öğreneceğiz!\n\n🦒 Uzun, 🐭 Kısa\n\nZürafa gibi uzun!\n\nHazır mısın? Başlayalım! 📏',

    motivationQuote: 'Her boy özeldir! 🦒',

    funFacts: [
      '🦒 Zürafa çok uzundur!',
      '🐭 Fare çok kısadır!',
      '🐍 Yılan uzundur!',
      '🐌 Sümüklüböcek kısadır!',
      '📏 Uzunluk ölçülebilir!',
      '🌳 Ağaçlar uzundur!',
      '🌼 Çiçekler kısadır!',
      '✏️ Kalem uzun olabilir!',
      '📌 Raptiye kısadır!',
      '⭐ Her uzunluk güzeldir!'
    ],

    tips: [
      '💡 Uzun = Çok boy!',
      '💡 Kısa = Az boy!',
      '💡 Zürafayı hatırla!',
      '💡 Karşılaştır!'
    ],

    steps: [
      createStep(
        'Uzun Nedir?',
        '🦒 UZUN!\n\nZürafa çok uzun!\n\nBoynu çok uzun! 🦒\n\n┌─────────────────────────────────────┐\n│                                     │\n│         🦒 ZÜRAFA                   │\n│                                     │\n│   Çok uzun hayvan!                  │\n│   Boynu çok uzun!                   │\n│   Ağaç yapraklarını yer!            │\n│   En uzun hayvan! 🦒                │\n│                                     │\n└─────────────────────────────────────┘\n\nUzun = Çok boy!\n\nZürafa gibi! 🦒',
        '🦒 Uzun = Çok boy!',
        'Uzun nesneleri bul!',
        {
          visual: 'UZUN:\n\n🦒 Zürafa\n🐍 Yılan\n🌳 Ağaç\n📏 Cetvel\n✏️ Kalem\n\nHepsi uzun!',
          examples: [
            createExample(
              'Zürafa nasıldır?',
              'Uzundur!',
              'Zürafa çok uzundur! 🦒 Boynu çok uzun!',
              '🦒',
              ['Zürafa uzun!', 'Boyu çok!', 'En uzun!']
            )
          ],
          tip: 'Zürafanın boynuna bak! 🦒'
        }
      ),

      createStep(
        'Kısa Nedir?',
        '🐭 KISA!\n\nFare çok kısa!\n\nBoyu çok kısa! 🐭\n\n┌─────────────────────────────────────┐\n│                                     │\n│         🐭 FARE                     │\n│                                     │\n│   Çok kısa hayvan!                  │\n│   Boyu çok kısa!                    │\n│   Küçük ve kısa!                    │\n│   Çok sevimli! 🐭                   │\n│                                     │\n└─────────────────────────────────────┘\n\nKısa = Az boy!\n\nFare gibi! 🐭',
        '🐭 Kısa = Az boy!',
        'Kısa nesneleri bul!',
        {
          visual: 'KISA:\n\n🐭 Fare\n🐌 Sümüklüböcek\n🌼 Çiçek\n📌 Raptiye\n🔑 Anahtar\n\nHepsi kısa!',
          examples: [
            createExample(
              'Fare nasıldır?',
              'Kısadır!',
              'Fare çok kısadır! 🐭 Boyu az!',
              '🐭',
              ['Fare kısa!', 'Boyu az!', 'Küçük!']
            )
          ],
          tip: 'Fareye bak - kısa! 🐭'
        }
      ),

      createStep(
        'Zürafa ve Fare',
        '🦒🐭 ZÜRAFA VE FARE!\n\nKarşılaştıralım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🦒 Zürafa                         │\n│   │                                 │\n│   │ Çok uzun!                       │\n│   │                                 │\n│   │                                 │\n│   │                                 │\n│   🐭 Fare (Çok kısa!)               │\n│                                     │\n│   Zürafa > Fare                     │\n│   (Uzun)   (Kısa)                   │\n│                                     │\n└─────────────────────────────────────┘\n\nBüyük fark var!\n\nZürafa çok uzun! 🦒',
        '🦒 > 🐭',
        'Karşılaştır!',
        {
          visual: 'KARŞILAŞTIR:\n\n🦒 Uzun\n│\n│ (Çok fark)\n│\n🐭 Kısa\n\n🦒 > 🐭',
          examples: [
            createExample(
              'Zürafa mı uzun, fare mi?',
              'Zürafa!',
              'Zürafa çok uzundur! 🦒 > 🐭 Fare kısadır!',
              '🦒 > 🐭',
              ['Zürafa uzun!', 'Fare kısa!', 'Zürafa > Fare!']
            )
          ],
          tip: 'Zürafayı fareyle karşılaştır! 🦒🐭'
        }
      ),

      createStep(
        'Günlük Hayatta Uzun-Kısa',
        '🔍 UZUN-KISA AVI!\n\nEtrafına bak!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   UZUN:                             │\n│   📏 Cetvel                         │\n│   ✏️ Kalem                          │\n│   🚪 Kapı                           │\n│   🌳 Ağaç                           │\n│                                     │\n│   KISA:                             │\n│   📌 Raptiye                        │\n│   🔑 Anahtar                        │\n│   ✂️ Makas                          │\n│   🍎 Elma                           │\n│                                     │\n└─────────────────────────────────────┘\n\nHer yerde uzun-kısa var!\n\nBul! 🔍',
        '🔍 Bul!',
        'Etrafına bak!',
        {
          visual: 'EVDE:\n\nUzun:\n📏✏️🚪🌳\n\nKısa:\n📌🔑✂️🍎\n\nKarşılaştır!',
          examples: [
            createExample(
              'Kalem mi uzun, raptiye mi?',
              'Kalem!',
              'Kalem uzundur! ✏️ > 📌 Raptiye kısadır!',
              '✏️ > 📌',
              ['Kalem uzun!', 'Raptiye kısa!', 'Kalem > Raptiye!']
            )
          ],
          tip: 'Her gün uzun-kısa bul! 🔍'
        }
      ),

      createStep(
        'Boy Karşılaştırması',
        '📏 BOY KARŞILAŞTIR!\n\nÜç nesne karşılaştır!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1. En uzun hangisi?               │\n│   2. En kısa hangisi?               │\n│   3. Ortadaki hangisi?              │\n│                                     │\n│   Örnek:                            │\n│   🦒 Zürafa (En uzun)               │\n│   🐶 Köpek (Orta)                   │\n│   🐭 Fare (En kısa)                 │\n│                                     │\n│   🦒 > 🐶 > 🐭                      │\n│                                     │\n└─────────────────────────────────────┘\n\nÜçünü karşılaştır!\n\nSırala! 📏',
        '📏 3 nesne!',
        'Sırala!',
        {
          visual: '3 NESNE:\n\n🦒 En uzun\n🐶 Orta\n🐭 En kısa\n\n🦒 > 🐶 > 🐭\n\nSırala!',
          examples: [
            createExample(
              'Zürafa, köpek, fare - hangisi en uzun?',
              'Zürafa!',
              'Zürafa en uzundur! 🦒 > 🐶 > 🐭',
              '🦒',
              ['Zürafa uzun!', 'Köpek orta!', 'Fare kısa!']
            )
          ],
          tip: '3 nesne karşılaştır! 📏'
        }
      ),

      createStep(
        'Boyumuz',
        '🧍 BOYUMUZ!\n\nİnsanların boyu farklı!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   👨 Baba uzun!                     │\n│   👩 Anne orta!                     │\n│   🧒 Çocuk kısa!                    │\n│                                     │\n│   Büyüyünce boy uzar!               │\n│                                     │\n│   Şimdi kısasın,                    │\n│   Sonra uzarsın! 🌱                 │\n│                                     │\n└─────────────────────────────────────┘\n\nHerkesin boyu farklı!\n\nBüyüyeceğiz! 🌱',
        '👨 > 👩 > 🧒',
        'Boy uzar!',
        {
          visual: 'AİLE:\n\n👨 Baba\n│ (Uzun)\n👩 Anne\n│ (Orta)\n🧒 Ben\n  (Kısa)\n\nBüyüyeceğim!',
          examples: [
            createExample(
              'Ailede en uzun kimdir?',
              'Baba!',
              'Genelde baba en uzundur! 👨',
              '👨',
              ['Baba uzun!', 'Anne orta!', 'Çocuk kısa!']
            )
          ],
          tip: 'Büyüyünce uzarsın! 🌱'
        }
      ),

      createStep(
        'Uzun-Kısa Şarkısı',
        '🎵 UZUN-KISA ŞARKISI! 🎵\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Zürafa uzun boylu                 │\n│   Boynu çok uzun! 🦒                │\n│                                     │\n│   Fare kısa boylu                   │\n│   Boyu çok kısa! 🐭                 │\n│                                     │\n│   Uzun mu kısa mı?                  │\n│   Karşılaştır bul! 📏               │\n│                                     │\n│   Hepsi güzel, hepsi özel           │\n│   Uzun da kısa da! 🎵               │\n│                                     │\n└─────────────────────────────────────┘\n\n🎵 Şarkı söyle! 🎵\n\nUzun-kısa öğrendik! 🎪',
        '🎵 Şarkı!',
        'Söyle!',
        {
          visual: 'ŞARKI:\n\n🦒 Uzun\n🐭 Kısa\n📏 Karşılaştır\n\n🎵 Söyle!\n🎪 Eğlen!',
          examples: [
            createExample(
              'Şarkıda hangi hayvanlar var?',
              'Zürafa ve fare!',
              'Zürafa uzun 🦒, fare kısa 🐭!',
              '🦒🐭',
              ['Zürafa!', 'Fare!', 'İki hayvan!']
            )
          ],
          tip: 'Aileninle söyle! 🎵'
        }
      ),

      createStep(
        'Uzunluk Oyunu',
        '🎮 UZUNLUK OYUNU!\n\nOyun oynayalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   GÖREV:                            │\n│   Evinde 5 uzun şey bul!            │\n│   Evinde 5 kısa şey bul!            │\n│                                     │\n│   Karşılaştır:                      │\n│   Hangisi daha uzun?                │\n│   Hangisi daha kısa?                │\n│                                     │\n│   Sırala:                           │\n│   En uzundan en kısaya!             │\n│                                     │\n└─────────────────────────────────────┘\n\nOyunu oyna!\n\nKazan! 🏆',
        '🎮 Oyun!',
        'Bul ve karşılaştır!',
        {
          visual: 'OYUN:\n\n1️⃣ 5 uzun bul\n2️⃣ 5 kısa bul\n3️⃣ Karşılaştır\n4️⃣ Sırala\n\nOyna! 🎮',
          examples: [
            createExample(
              'Oyunda ne yapmalıyız?',
              'Uzun-kısa nesneler bulmalıyız!',
              'Uzun ve kısa nesneler bul! Karşılaştır! 🔍',
              '🔍',
              ['Bul!', 'Karşılaştır!', 'Sırala!', 'Oyna!']
            )
          ],
          tip: 'Her gün oyun oyna! 🎮'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Zürafa nasıldır?',
        ['Uzundur', 'Kısadır', 'Ortadır', 'Bilmiyorum'],
        'Uzundur',
        'Zürafa çok uzundur! 🦒',
        '🦒',
        1,
        'Zürafa uzun!'
      ),

      createMultipleChoice(
        'Fare nasıldır?',
        ['Kısadır', 'Uzundur', 'Ortadır', 'Bilmiyorum'],
        'Kısadır',
        'Fare çok kısadır! 🐭',
        '🐭',
        1,
        'Fare kısa!'
      ),

      createMultipleChoice(
        'Hangisi daha uzun? 🦒 Zürafa mı 🐭 Fare mi?',
        ['Zürafa', 'Fare', 'Eşit', 'Bilmiyorum'],
        'Zürafa',
        'Zürafa çok uzundur! 🦒 > 🐭',
        '🦒',
        1,
        'Zürafa uzun!'
      ),

      createFillBlank(
        'Zürafa ___, fare ___.',
        ['uzun kısa'],
        'Zürafa uzun, fare kısa! 🦒🐭',
        '🦒🐭',
        1,
        'Nasıllar?'
      ),

      createMultipleChoice(
        'Hangisi uzun? 📏 Cetvel mi 📌 Raptiye mi?',
        ['Cetvel', 'Raptiye', 'Eşit', 'Bilmiyorum'],
        'Cetvel',
        'Cetvel uzundur! 📏 > 📌',
        '📏',
        1,
        'Cetvel uzun!'
      ),

      createMultipleChoice(
        'Hangisi kısa? ✏️ Kalem mi 🔑 Anahtar mı?',
        ['Anahtar', 'Kalem', 'Eşit', 'Bilmiyorum'],
        'Anahtar',
        'Anahtar kısadır! 🔑 < ✏️',
        '🔑',
        1,
        'Anahtar kısa!'
      ),

      createFillBlank(
        'Uzun = Çok ___, Kısa = Az ___.',
        ['boy boy'],
        'Uzun = Çok boy, Kısa = Az boy!',
        '🦒🐭',
        1,
        'Ne kadar boy?'
      ),

      createMultipleChoice(
        'Ailede genelde en uzun kimdir?',
        ['Baba', 'Anne', 'Çocuk', 'Bilmiyorum'],
        'Baba',
        'Genelde baba en uzundur! 👨',
        '👨',
        1,
        'Baba uzun!'
      ),

      createMultipleChoice(
        'Çocuklar büyüyünce ne olur?',
        ['Boyları uzar', 'Boyları kısalır', 'Değişmez', 'Bilmiyorum'],
        'Boyları uzar',
        'Büyüyünce boyumuz uzar! 🌱',
        '🌱',
        1,
        'Boy uzar!'
      ),

      createMultipleChoice(
        'Hangisi en uzun hayvan?',
        ['Zürafa', 'Fare', 'Kedi', 'Köpek'],
        'Zürafa',
        'Zürafa en uzun hayvandır! 🦒',
        '🦒',
        1,
        'Zürafa en uzun!'
      ),

      createMultipleChoice(
        '🦒 Zürafa, 🐶 Köpek, 🐭 Fare - En kısa hangisi?',
        ['Fare', 'Köpek', 'Zürafa', 'Bilmiyorum'],
        'Fare',
        'Fare en kısadır! 🐭',
        '🐭',
        1,
        'Fare en kısa!'
      ),

      createFillBlank(
        'Zürafanın ___ çok uzundur.',
        ['boynu'],
        'Zürafanın boynu çok uzundur! 🦒',
        '🦒',
        1,
        'Neyi uzun?'
      ),

      createMultipleChoice(
        'Karşılaştırma yaparken neye bakarız?',
        ['Boya / Uzunluğa', 'Renge', 'İsme', 'Hiçbiri'],
        'Boya / Uzunluğa',
        'Karşılaştırma yaparken boya bakarız! 📏',
        '📏',
        1,
        'Boy önemli!'
      ),

      createMultipleChoice(
        'Hangisi en uzun? 🌳 Ağaç mı 🌼 Çiçek mi?',
        ['Ağaç', 'Çiçek', 'Eşit', 'Bilmiyorum'],
        'Ağaç',
        'Ağaç çok uzundur! 🌳 > 🌼',
        '🌳',
        1,
        'Ağaç uzun!'
      ),

      createMultipleChoice(
        'Uzun ve kısa nesneleri nasıl buluruz?',
        ['Karşılaştırarak', 'Tartarak', 'Sayarak', 'Bilmiyorum'],
        'Karşılaştırarak',
        'Karşılaştırarak buluruz! 📏',
        '📏',
        1,
        'Karşılaştır!'
      )
    ],

    summary: '🎉 Bugün uzunlukları öğrendik!\n\n✅ Uzun = Çok boy 🦒\n✅ Kısa = Az boy 🐭\n✅ Zürafa uzun\n✅ Fare kısa\n✅ Karşılaştırma yaptık 📏\n\nUzun-kısa biliyoruz! 🔍\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste ağır-hafif öğreneceğiz! Fil gibi! 🐘'
  }
};
