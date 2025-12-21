// DESTEK SINIFI - TEMA 4 - KONU 5: TOPLA VE AYIR OYUNLARI
// Hikayeli problemler - çok basit - eğlenceli

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu5Oyunlar: Topic = {
  id: 'topla-ayir-oyunlar',
  title: 'Topla ve Ayır Oyunları',
  description: 'Eğlenceli hikayeler ve oyunlar! Ali, Ayşe ve arkadaşları! 🎮',
  emoji: '🎮',
  duration: '45 dk',
  difficulty: 1,
  keywords: ['oyun', 'hikaye', 'problem', 'eğlenceli'],
  objectives: [
    'Hikayeli problemler çözeceksin',
    'Oyunlarla toplama yapacaksın',
    'Oyunlarla çıkarma yapacaksın',
    'Eğlenerek öğreneceksin!'
  ],

  content: {
    introduction: '🎮 Merhaba!\n\nBugün OYUN zamanı!\n\nHikayeler dinleyeceğiz!\n\nToplama ve çıkarma oyunları oynayacağız!\n\n🎉 Çok eğlenceli olacak!\n\nHazır mısın? Başlayalım!',

    motivationQuote: 'Oyunla öğrenmek çok eğlenceli! Sen başarabilirsin! 💝',

    funFacts: [
      '🎮 Oyunla öğrenmek kolay!',
      '📖 Hikayeler eğlenceli!',
      '👫 Ali ve Ayşe arkadaşlar!',
      '🍎 Meyve toplama oyunu!',
      '🧸 Oyuncak paylaşma oyunu!',
      '💝 Eğlenerek öğren!'
    ],

    steps: [
      createStep(
        'Ali\'nin Topu - Toplama Oyunu',
        '⚽ Ali\'nin Hikayesi:\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Ali\'nin 1 topu var. ⚽            │\n│                                     │\n│   Babası 1 top daha aldı! ⚽        │\n│                                     │\n│   Ali\'nin kaç topu oldu?           │\n│                                     │\n│   ⚽ + ⚽ = ⚽⚽                      │\n│                                     │\n│   İki top! 1 + 1 = 2                │\n│                                     │\n└─────────────────────────────────────┘\n\nAli çok mutlu! 😊',
        'Ali: 1 + 1 = 2',
        'Ali\'nin toplarını say!',
        {
          visual: 'Ali:\n\nÖnce: ⚽ (1 top)\nBabası verdi: ⚽ (1 top)\n\nŞimdi:\n⚽⚽ (2 top)',
          examples: [
            createExample(
              'Ali\'nin 1 topu var, babası 1 top daha aldı. Kaç topu oldu?',
              '2 top!',
              'Ali: ⚽ + ⚽ = ⚽⚽ İki top! 1 + 1 = 2',
              '⚽⚽',
              ['Ali: 1 top', 'Babası: 1 top daha', 'Toplam: 2 top!']
            )
          ],
          tip: '💡 Ali mutlu! 1 + 1 = 2 top!'
        }
      ),

      createStep(
        'Ayşe\'nin Oyuncağı - Çıkarma Oyunu',
        '🧸 Ayşe\'nin Hikayesi:\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Ayşe\'nin 2 oyuncağı var. 🧸🧸     │\n│                                     │\n│   1 tanesini arkadaşına verdi! 🧸  │\n│                                     │\n│   Ayşe\'nin kaç oyuncağı kaldı?     │\n│                                     │\n│   🧸🧸 - 🧸 = 🧸                    │\n│                                     │\n│   Bir oyuncak! 2 - 1 = 1            │\n│                                     │\n└─────────────────────────────────────┘\n\nPaylaşmak güzel! 😊',
        'Ayşe: 2 - 1 = 1',
        'Ayşe\'nin oyuncağını say!',
        {
          visual: 'Ayşe:\n\nÖnce: 🧸🧸 (2 oyuncak)\nVerdi: 🧸 (1 oyuncak)\n\nKalan:\n🧸 (1 oyuncak)',
          examples: [
            createExample(
              'Ayşe\'nin 2 oyuncağı var, 1 tanesini verdi. Kaç oyuncağı kaldı?',
              '1 oyuncak!',
              'Ayşe: 🧸🧸 - 🧸 = 🧸 Bir oyuncak! 2 - 1 = 1',
              '🧸',
              ['Ayşe: 2 oyuncak', '1 verdi', 'Kalan: 1 oyuncak!']
            )
          ],
          tip: '💡 Paylaşmak güzel! 2 - 1 = 1!'
        }
      ),

      createStep(
        'Meyve Toplama Oyunu',
        '🍎 Meyve Bahçesi:\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Bahçede 2 elma var. 🍎🍎          │\n│                                     │\n│   1 elma daha düştü! 🍎             │\n│                                     │\n│   Kaç elma oldu?                    │\n│                                     │\n│   🍎🍎 + 🍎 = 🍎🍎🍎                │\n│                                     │\n│   Üç elma! 2 + 1 = 3                │\n│                                     │\n└─────────────────────────────────────┘\n\nTopla elmaları! 🍎',
        'Bahçe: 2 + 1 = 3',
        'Elmaları topla!',
        {
          visual: 'Bahçe:\n\nÖnce: 🍎🍎 (2 elma)\nDüştü: 🍎 (1 elma)\n\nŞimdi:\n🍎🍎🍎 (3 elma)',
          examples: [
            createExample(
              'Bahçede 2 elma var, 1 elma daha düştü. Kaç elma oldu?',
              '3 elma!',
              'Bahçe: 🍎🍎 + 🍎 = 🍎🍎🍎 Üç elma! 2 + 1 = 3',
              '🍎🍎🍎',
              ['Önce: 2 elma', 'Düştü: 1 elma', 'Toplam: 3 elma!']
            )
          ],
          tip: '💡 Topla! 2 + 1 = 3 elma!'
        }
      ),

      createStep(
        'Balon Uçurma Oyunu',
        '🎈 Balon Oyunu:\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Çocukların 3 balonu var. 🎈🎈🎈   │\n│                                     │\n│   1 balon uçtu! 🎈💨                │\n│                                     │\n│   Kaç balon kaldı?                  │\n│                                     │\n│   🎈🎈🎈 - 🎈 = 🎈🎈               │\n│                                     │\n│   İki balon! 3 - 1 = 2              │\n│                                     │\n└─────────────────────────────────────┘\n\nDikkat! Balon uçmasın! 💨',
        'Balon: 3 - 1 = 2',
        'Kalan balonları say!',
        {
          visual: 'Balon:\n\nÖnce: 🎈🎈🎈 (3 balon)\nUçtu: 🎈💨 (1 balon)\n\nKalan:\n🎈🎈 (2 balon)',
          examples: [
            createExample(
              'Çocukların 3 balonu var, 1 balon uçtu. Kaç balon kaldı?',
              '2 balon!',
              'Balon: 🎈🎈🎈 - 🎈 = 🎈🎈 İki balon! 3 - 1 = 2',
              '🎈🎈',
              ['Önce: 3 balon', 'Uçtu: 1 balon', 'Kalan: 2 balon!']
            )
          ],
          tip: '💡 Dikkat! 3 - 1 = 2 balon kaldı!'
        }
      ),

      createStep(
        'Kurabiye Paylaşma Oyunu',
        '🍪 Kurabiye Zamanı:\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Anne 1 kurabiye verdi. 🍪         │\n│                                     │\n│   Baba 1 kurabiye daha verdi! 🍪    │\n│                                     │\n│   Kaç kurabiye oldu?                │\n│                                     │\n│   🍪 + 🍪 = 🍪🍪                    │\n│                                     │\n│   İki kurabiye! 1 + 1 = 2           │\n│                                     │\n└─────────────────────────────────────┘\n\nAfiyetle ye! 😋',
        'Kurabiye: 1 + 1 = 2',
        'Kurabiyeleri say!',
        {
          visual: 'Kurabiye:\n\nAnne: 🍪 (1 kurabiye)\nBaba: 🍪 (1 kurabiye)\n\nToplam:\n🍪🍪 (2 kurabiye)',
          examples: [
            createExample(
              'Anne 1 kurabiye verdi, baba 1 kurabiye daha verdi. Kaç kurabiye oldu?',
              '2 kurabiye!',
              'Kurabiye: 🍪 + 🍪 = 🍪🍪 İki kurabiye! 1 + 1 = 2',
              '🍪🍪',
              ['Anne: 1 kurabiye', 'Baba: 1 kurabiye', 'Toplam: 2 kurabiye!']
            )
          ],
          tip: '💡 Yummy! 1 + 1 = 2 kurabiye!'
        }
      ),

      createStep(
        'Park Oyunu',
        '🦆 Parkta:\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Parkta 2 ördek var. 🦆🦆          │\n│                                     │\n│   1 ördek yüzmeye gitti. 🦆💨       │\n│                                     │\n│   Kaç ördek kaldı?                  │\n│                                     │\n│   🦆🦆 - 🦆 = 🦆                    │\n│                                     │\n│   Bir ördek! 2 - 1 = 1              │\n│                                     │\n└─────────────────────────────────────┘\n\nParkta eğlenelim! 🌳',
        'Park: 2 - 1 = 1',
        'Kalan ördekleri say!',
        {
          visual: 'Park:\n\nÖnce: 🦆🦆 (2 ördek)\nGitti: 🦆 (1 ördek)\n\nKalan:\n🦆 (1 ördek)',
          examples: [
            createExample(
              'Parkta 2 ördek var, 1 ördek gitti. Kaç ördek kaldı?',
              '1 ördek!',
              'Park: 🦆🦆 - 🦆 = 🦆 Bir ördek! 2 - 1 = 1',
              '🦆',
              ['Önce: 2 ördek', 'Gitti: 1 ördek', 'Kalan: 1 ördek!']
            )
          ],
          tip: '💡 Park eğlenceli! 2 - 1 = 1 ördek!'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Ali\'nin 1 topu var, babası 1 top daha aldı. Kaç topu oldu?',
        ['1', '2', '3', '4'],
        '2',
        'Ali: ⚽ + ⚽ = ⚽⚽ İki top! 1 + 1 = 2',
        '⚽⚽',
        1,
        'Ali\'nin toplarını say!'
      ),

      createMultipleChoice(
        'Ayşe\'nin 2 oyuncağı var, 1 tanesini verdi. Kaç kaldı?',
        ['0', '1', '2', '3'],
        '1',
        'Ayşe: 🧸🧸 - 🧸 = 🧸 Bir oyuncak! 2 - 1 = 1',
        '🧸',
        1,
        'Ayşe\'nin oyuncağını say!'
      ),

      createMultipleChoice(
        'Bahçede 2 elma var, 1 elma daha düştü. Kaç elma oldu?',
        ['1', '2', '3', '4'],
        '3',
        'Bahçe: 🍎🍎 + 🍎 = 🍎🍎🍎 Üç elma! 2 + 1 = 3',
        '🍎🍎🍎',
        1,
        'Elmaları say!'
      ),

      createMultipleChoice(
        '3 balon var, 1 balon uçtu. Kaç balon kaldı?',
        ['0', '1', '2', '3'],
        '2',
        'Balon: 🎈🎈🎈 - 🎈 = 🎈🎈 İki balon! 3 - 1 = 2',
        '🎈🎈',
        1,
        'Kalan balonları say!'
      ),

      createMultipleChoice(
        'Anne 1 kurabiye verdi, baba 1 kurabiye verdi. Kaç kurabiye oldu?',
        ['1', '2', '3', '4'],
        '2',
        'Kurabiye: 🍪 + 🍪 = 🍪🍪 İki kurabiye! 1 + 1 = 2',
        '🍪🍪',
        1,
        'Kurabiyeleri say!'
      ),

      createMultipleChoice(
        'Parkta 2 ördek var, 1 ördek gitti. Kaç ördek kaldı?',
        ['0', '1', '2', '3'],
        '1',
        'Park: 🦆🦆 - 🦆 = 🦆 Bir ördek! 2 - 1 = 1',
        '🦆',
        1,
        'Kalan ördekleri say!'
      ),

      createMultipleChoice(
        'Mehmet\'in 1 kitabı var, abisi 1 kitap daha verdi. Kaç kitabı oldu?',
        ['1', '2', '3', '4'],
        '2',
        'Mehmet: 📚 + 📚 = 📚📚 İki kitap! 1 + 1 = 2',
        '📚📚',
        1,
        'Kitapları say!'
      ),

      createMultipleChoice(
        'Sepette 3 portakal var, 1 tanesini yedin. Kaç portakal kaldı?',
        ['0', '1', '2', '3'],
        '2',
        'Sepet: 🍊🍊🍊 - 🍊 = 🍊🍊 İki portakal! 3 - 1 = 2',
        '🍊🍊',
        1,
        'Kalan portakalları say!'
      ),

      createMultipleChoice(
        'Bahçede 2 kelebek var, 1 kelebek daha geldi. Kaç kelebek oldu?',
        ['1', '2', '3', '4'],
        '3',
        'Bahçe: 🦋🦋 + 🦋 = 🦋🦋🦋 Üç kelebek! 2 + 1 = 3',
        '🦋🦋🦋',
        1,
        'Kelebekleri say!'
      ),

      createMultipleChoice(
        'Masada 2 kalem var, 1 kalemi kullandın. Kaç kalem kaldı?',
        ['0', '1', '2', '3'],
        '1',
        'Masa: 🖍️🖍️ - 🖍️ = 🖍️ Bir kalem! 2 - 1 = 1',
        '🖍️',
        1,
        'Kalan kalemleri say!'
      )
    ],

    summary: '🎮 Harika!\n\n✅ Hikayeli problemler çözdün!\n✅ Ali, Ayşe ve arkadaşları!\n✅ Toplama ve çıkarma oynadın!\n✅ Eğlenerek öğrendin!\n\nÇok iyi iş çıkardın! 💝\n\nMATEMATİK EĞLENCELİ! 🎉',

    nextTopicPreview: 'Tebrikler! Destek Sınıfı müfredatını tamamladın! Artık matematik yapabiliyorsun! 🏆'
  }
};
