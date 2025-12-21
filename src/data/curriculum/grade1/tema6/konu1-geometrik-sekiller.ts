// 1. SINIF - TEMA 6 - KONU 1: Geometrik Şekiller
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1GeometrikSekiller: Topic = {
  id: 'geometrik-sekiller',
  title: 'Geometrik Şekilleri Tanıyalım',
  description: 'Üçgen, kare, dikdörtgen ve çember şekillerini öğrenelim',
  emoji: '🔷',
  duration: '50 dk',
  difficulty: 1,
  keywords: ['üçgen', 'kare', 'dikdörtgen', 'çember', 'köşe', 'kenar'],
  objectives: [
    'Temel geometrik şekilleri tanır',
    'Şekillerin köşe ve kenar sayılarını bilir',
    'Günlük hayatta şekilleri bulur',
    'Şekilleri çizer ve sınıflandırır'
  ],
  content: {
    introduction: `Merhaba küçük geometrici! 🔷

Etrafımız şekillerle dolu! Kapı dikdörtgen, pizza dilimi üçgen, tekerlek çember!

Bugün geometrik şekilleri tanıyacak ve her yerde bulacağız!

Hazır mısın? Şekiller dünyasına dalalım! 🚀`,

    motivationQuote: 'Şekiller her yerde, gözlerini aç! 🔷',

    funFacts: [
      'Arı petekleri altıgen şeklindedir! 🐝',
      'Mısır piramitleri üçgen yüzlüdür! 🏛️',
      'Dünya bir küre şeklindedir! 🌍',
      'Pizza dilimleri üçgen şeklindedir! 🍕',
      'Futbol topu beşgen ve altıgenlerden oluşur! ⚽'
    ],

    steps: [
      createStep(
        'Çember',
        `Çember yuvarlak bir şekildir! ⭕

📋 ÇEMBERİN ÖZELLİKLERİ:
• Yuvarlak
• Köşesi YOK
• Kenarı YOK
• Her yeri eğri

🎯 ÇEMBER ÖRNEKLERİ:
• Top ⚽
• Tekerlek 🛞
• Saat ⏰
• Tabak 🍽️
• Güneş ☀️`,
        'Çember yuvarlak, köşesi yok!',
        {
          visual: `Çember:
     ⭕
  ╭──────╮
  │      │
  │  ⭕  │  ← KÖŞE YOK!
  │      │
  ╰──────╯

Örnek: 🛞 Tekerlek`,
          examples: [
            createExample(
              'Tekerlek hangi şekil?',
              'Çember',
              'Tekerlek yuvarlaktır, yani çember!',
              '🛞 = ⭕ Çember'
            ),
            createExample(
              'Çemberin kaç köşesi var?',
              '0 (Sıfır)',
              'Çemberin köşesi yoktur, yuvarlaktır!',
              '⭕ = 0 köşe'
            )
          ]
        }
      ),

      createStep(
        'Üçgen',
        `Üçgenin 3 köşesi ve 3 kenarı vardır! 🔺

📋 ÜÇGENİN ÖZELLİKLERİ:
• 3 KÖŞE
• 3 KENAR
• Adı 3'ten gelir!

🎯 ÜÇGEN ÖRNEKLERİ:
• Pizza dilimi 🍕
• Piramit 🔺
• Trafik levhası ⚠️
• Yelken ⛵`,
        'Üçgenin adı 3\'ten gelir. 3 köşe, 3 kenar!',
        {
          visual: `Üçgen:
      🔺
      /\\
     /  \\    ← 3 KÖŞE
    /    \\   ← 3 KENAR
   /______\\

Örnek: 🍕 Pizza dilimi`,
          tip: 'Üç-gen = Üç köşe!',
          examples: [
            createExample(
              'Üçgenin kaç köşesi var?',
              '3',
              'Üçgenin 3 köşesi ve 3 kenarı var!',
              '🔺 = 3 köşe, 3 kenar'
            ),
            createExample(
              'Pizza dilimi hangi şekil?',
              'Üçgen',
              'Pizza dilimi üçgen şeklindedir!',
              '🍕 = 🔺 Üçgen'
            )
          ]
        }
      ),

      createStep(
        'Kare',
        `Karenin 4 köşesi ve 4 eşit kenarı vardır! ⬜

📋 KARENİN ÖZELLİKLERİ:
• 4 KÖŞE
• 4 KENAR
• Tüm kenarları EŞİT uzunlukta!

🎯 KARE ÖRNEKLERİ:
• Zar 🎲
• Peçete 🧻
• Fayans 🏠
• Oyun kartı 🃏`,
        'Karenin 4 eşit kenarı var!',
        {
          visual: `Kare:
┌─────┐
│     │  ← 4 KÖŞE
│  ⬜ │  ← 4 EŞİT KENAR
│     │
└─────┘

Örnek: 🎲 Zar`,
          tip: 'Kare = 4 eşit kenar!',
          examples: [
            createExample(
              'Karenin kaç köşesi var?',
              '4',
              'Karenin 4 köşesi ve 4 eşit kenarı var!',
              '⬜ = 4 köşe'
            ),
            createExample(
              'Zar hangi şekil?',
              'Kare (yüzeyleri)',
              'Zarın yüzeyleri kare şeklinde!',
              '🎲 = ⬜ Kare'
            )
          ]
        }
      ),

      createStep(
        'Dikdörtgen',
        `Dikdörtgenin 4 köşesi var ama kenarları farklı uzunlukta! 📐

📋 DİKDÖRTGENİN ÖZELLİKLERİ:
• 4 KÖŞE
• 4 KENAR
• 2 uzun kenar, 2 kısa kenar
• Karşılıklı kenarlar eşit

🎯 DİKDÖRTGEN ÖRNEKLERİ:
• Kapı 🚪
• Telefon 📱
• Kitap 📕
• Televizyon 📺`,
        'Dikdörtgenin 2 uzun, 2 kısa kenarı var!',
        {
          visual: `Dikdörtgen:
┌─────────────┐
│             │  ← 4 KÖŞE
│     📐      │  ← 2 UZUN KENAR
│             │  ← 2 KISA KENAR
└─────────────┘

Örnek: 🚪 Kapı`,
          examples: [
            createExample(
              'Kapı hangi şekil?',
              'Dikdörtgen',
              'Kapı dikdörtgen şeklindedir - 2 uzun, 2 kısa kenar!',
              '🚪 = 📐 Dikdörtgen'
            ),
            createExample(
              'Dikdörtgen ile kare farkı ne?',
              'Dikdörtgenin kenarları farklı uzunlukta',
              'Kare: 4 eşit kenar, Dikdörtgen: 2 uzun + 2 kısa kenar',
              '⬜ (eşit) ≠ 📐 (farklı)'
            )
          ]
        }
      ),

      createStep(
        'Şekilleri Karşılaştıralım',
        `Şekillerin özelliklerini karşılaştıralım! 📊

📋 KÖŞE SAYILARI:
• Çember: 0 köşe
• Üçgen: 3 köşe
• Kare: 4 köşe
• Dikdörtgen: 4 köşe

📋 KENAR SAYILARI:
• Çember: 0 kenar (yuvarlak)
• Üçgen: 3 kenar
• Kare: 4 eşit kenar
• Dikdörtgen: 4 kenar (2+2)`,
        'Her şeklin kendine özgü özellikleri var!',
        {
          visual: `Şekil Karşılaştırma:
┌─────────┬───────┬───────┐
│ Şekil   │ Köşe  │ Kenar │
├─────────┼───────┼───────┤
│ ⭕       │   0   │   0   │
│ 🔺       │   3   │   3   │
│ ⬜       │   4   │   4   │
│ 📐       │   4   │   4   │
└─────────┴───────┴───────┘`,
          examples: [
            createExample(
              'Hangi şeklin en çok köşesi var?',
              'Kare ve Dikdörtgen (4 köşe)',
              'Kare ve dikdörtgenin 4 köşesi var!',
              '⬜ = 📐 = 4 köşe'
            )
          ]
        }
      ),

      createStep(
        'Şekiller Her Yerde! 🔍',
        `Etrafına bak, şekilleri bul!

🎮 ŞEKİL AVINA ÇIK:
• Evinde kare bul
• Okulda dikdörtgen bul
• Sokakta çember bul
• Yemekte üçgen bul

📝 ŞEKİL GÜNLÜğÜ TUT:
1. Gördüğün nesneyi yaz
2. Şeklini bul
3. Köşe sayısını say`,
        'Her yerde şekiller var, keşfetmeye hazır mısın?',
        {
          visual: `Günlük Hayatta Şekiller:
🚪 Kapı → Dikdörtgen
⏰ Saat → Çember
🍕 Pizza → Üçgen (dilim)
🎲 Zar → Kare
📺 TV → Dikdörtgen
🏀 Top → Çember`,
          examples: [
            createExample(
              'Saat hangi şekil?',
              'Çember',
              'Saatler genellikle yuvarlak, çember şeklinde!',
              '⏰ = ⭕ Çember'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Tekerlek hangi şekildir?',
        ['Üçgen', 'Kare', 'Çember', 'Dikdörtgen'],
        'Çember',
        'Tekerlek yuvarlak = çember!'
      ),
      createFillBlank(
        'Üçgenin ___ köşesi vardır',
        ['3', 'üç'],
        'Üçgen = 3 köşe!'
      ),
      createMultipleChoice(
        'Karenin kaç kenarı eşit?',
        ['2', '3', '4', '0'],
        '4',
        'Karenin 4 kenarı da eşit!'
      ),
      createFillBlank(
        'Çemberin köşe sayısı ___',
        ['0', 'sıfır', 'yok'],
        'Çemberin köşesi yok!'
      ),
      createMultipleChoice(
        'Pizza dilimi hangi şekil?',
        ['Çember', 'Üçgen', 'Kare', 'Dikdörtgen'],
        'Üçgen',
        'Pizza dilimi üçgen!'
      ),
      createFillBlank(
        'Dikdörtgenin ___ köşesi var',
        ['4', 'dört'],
        'Dikdörtgen = 4 köşe!'
      ),
      createMultipleChoice(
        'Köşesi olmayan şekil hangisi?',
        ['Üçgen', 'Kare', 'Çember', 'Dikdörtgen'],
        'Çember',
        'Çember yuvarlak, köşesi yok!'
      ),
      createFillBlank(
        'Kapı ___ şeklindedir',
        ['dikdörtgen'],
        'Kapılar dikdörtgen şeklinde!'
      ),
      createMultipleChoice(
        'En az köşeli şekil hangisi?',
        ['Çember', 'Üçgen', 'Kare', 'Dikdörtgen'],
        'Çember',
        'Çember: 0 köşe, en az!'
      ),
      createFillBlank(
        'Zar yüzeyleri ___ şeklinde',
        ['kare'],
        'Zar yüzeyleri kare!'
      ),
      createMultipleChoice(
        'Top hangi şekil?',
        ['Kare', 'Üçgen', 'Çember', 'Dikdörtgen'],
        'Çember',
        'Top yuvarlak = çember!'
      ),
      createFillBlank(
        'Üçgenin ___ kenarı var',
        ['3', 'üç'],
        'Üçgen = 3 kenar!'
      ),
      createMultipleChoice(
        'Hangisinin 4 köşesi var?',
        ['Çember', 'Üçgen', 'Kare', 'Hepsi'],
        'Kare',
        'Kare ve dikdörtgenin 4 köşesi var!'
      ),
      createFillBlank(
        'Piramit yüzeyleri ___ şeklinde',
        ['üçgen'],
        'Piramit yüzeyleri üçgen!'
      ),
      createMultipleChoice(
        'Dikdörtgen ile kare farkı?',
        ['Köşe sayısı', 'Kenar uzunlukları', 'Renk', 'Hiçbiri'],
        'Kenar uzunlukları',
        'Kare eşit kenar, dikdörtgen farklı!'
      )
    ],

    summary: 'Çember, üçgen, kare ve dikdörtgen şekillerini, köşe ve kenar sayılarını öğrendik!',
    nextTopicPreview: 'Sonraki konuda veri toplama ve grafik öğreneceğiz!'
  }
};
