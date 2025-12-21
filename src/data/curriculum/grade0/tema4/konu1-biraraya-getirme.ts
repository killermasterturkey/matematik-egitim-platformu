// DESTEK SINIFI - TEMA 4 - KONU 1: BİR ARAYA GETİRME
// "Toplama" kelimesi yok - sadece "bir araya getir"

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1BirarayaGetirme: Topic = {
  id: 'biraraya-getirme',
  title: 'Bir Araya Getirme',
  description: 'Nesneleri bir araya getirelim! 🍎 + 🍎 = İki elma!',
  emoji: '🤝',
  duration: '45 dk',
  difficulty: 1,
  keywords: ['bir araya getir', 'birleştir', 'toplama hazırlık'],
  objectives: [
    'Nesneleri bir araya getirmeyi öğreneceksin',
    'İki grubu birleştirmeyi göreceksin',
    '"Kaç tane oldu?" sorusunu cevaplayacaksın',
    'Basit birleştirmeler yapacaksın'
  ],

  content: {
    introduction: '🤝 Merhaba!\n\nBugün nesneleri bir araya getireceğiz!\n\nBak:\n\n🍎 + 🍎 = 🍎🍎\n\nİki elma!\n\nÇok kolay! 😊\n\nHazır mısın? Başlayalım!',

    motivationQuote: 'Bir araya getirmek çok kolay! Sen başarabilirsin! 💝',

    funFacts: [
      '🍎 Elmaları bir araya getir!',
      '🧸 Oyuncakları bir araya getir!',
      '📚 Kitapları bir araya getir!',
      '🤝 Arkadaşlarla bir araya gel!',
      '💝 Bir araya gelmek güzel!',
      '🎁 Hediyeleri bir araya topla!'
    ],

    steps: [
      createStep(
        'Bir Araya Getirmek Nedir?',
        'Bak!\n\nBir tane elma: 🍎\n\nBir tane daha elma: 🍎\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🍎    ile    🍎                   │\n│                                     │\n│   BİR ARAYA GETİR!                  │\n│                                     │\n│        🍎🍎                         │\n│                                     │\n│   Bak! İki elma oldu!               │\n│                                     │\n└─────────────────────────────────────┘\n\n🍎 + 🍎 = 🍎🍎\n\nBu çok kolay! 😊',
        '🍎 + 🍎 = 🍎🍎',
        'Elmaları bir araya getir!',
        {
          visual: 'Bir tane: 🍎\nBir tane daha: 🍎\n\nBir araya getir:\n🍎🍎\n\nKaç tane? İki tane!',
          examples: [
            createExample(
              '🍎 ile 🍎 bir araya gelince kaç elma olur?',
              'İki elma!',
              'Bak: 🍎 + 🍎 = 🍎🍎 İki elma!',
              '🍎🍎',
              ['Bir elma var', 'Bir elma daha', 'İkisi birlikte: iki elma!']
            )
          ],
          tip: '💡 Bir araya getir = birleştir!'
        }
      ),

      createStep(
        'Oyuncakları Bir Araya Getir',
        'Oyuncaklarla deneyelim!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🧸  ile  🧸                       │\n│                                     │\n│   Bir araya getir!                  │\n│                                     │\n│        🧸🧸                         │\n│                                     │\n│   Kaç oyuncak? İki oyuncak!         │\n│                                     │\n└─────────────────────────────────────┘\n\nBak ne kolay! 😊',
        '🧸 + 🧸 = 🧸🧸',
        'Oyuncakları birleştir!',
        {
          visual: 'Bir oyuncak: 🧸\nBir oyuncak daha: 🧸\n\nBirleştir:\n🧸🧸',
          examples: [
            createExample(
              'Bir oyuncak ile bir oyuncak bir araya gelince kaç olur?',
              'İki oyuncak!',
              '🧸 + 🧸 = 🧸🧸 İki oyuncak!',
              '🧸🧸',
              ['Bir oyuncak', 'Bir daha', 'İki oyuncak!']
            )
          ],
          tip: '💡 Bir ile bir = iki!'
        }
      ),

      createStep(
        'Daha Fazla Bir Araya Getir',
        'Şimdi daha fazla!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🍎🍎  ile  🍎                     │\n│                                     │\n│   Bir araya getir!                  │\n│                                     │\n│        🍎🍎🍎                       │\n│                                     │\n│   Kaç elma? Üç elma!                │\n│                                     │\n└─────────────────────────────────────┘\n\nİki elma ile bir elma = üç elma!\n\nSüper! 🎉',
        '🍎🍎 + 🍎 = 🍎🍎🍎',
        'İki ile bir\'i birleştir!',
        {
          visual: 'İki elma: 🍎🍎\nBir elma daha: 🍎\n\nBirleştir:\n🍎🍎🍎\n\nÜç elma!',
          examples: [
            createExample(
              'İki elma ile bir elma bir araya gelince kaç olur?',
              'Üç elma!',
              '🍎🍎 + 🍎 = 🍎🍎🍎 Üç elma!',
              '🍎🍎🍎',
              ['İki elma var', 'Bir elma daha', 'Üç elma oldu!']
            )
          ],
          tip: '💡 Say ve gör kaç tane oldu!'
        }
      ),

      createStep(
        'Farklı Nesneler Bir Araya',
        'Farklı şeyler de olabilir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🍎  ile  🍊                       │\n│                                     │\n│   Bir araya getir!                  │\n│                                     │\n│        🍎🍊                         │\n│                                     │\n│   Kaç meyve? İki meyve!             │\n│                                     │\n└─────────────────────────────────────┘\n\nElma ile portakal = iki meyve!\n\nHarika! 😊',
        '🍎 + 🍊 = İki meyve',
        'Farklı şeyleri birleştir!',
        {
          visual: 'Bir elma: 🍎\nBir portakal: 🍊\n\nBirlikte:\n🍎🍊\n\nİki meyve!',
          examples: [
            createExample(
              'Bir elma ile bir portakal kaç meyve yapar?',
              'İki meyve!',
              '🍎 + 🍊 = 🍎🍊 İki meyve!',
              '🍎🍊',
              ['Elma = bir', 'Portakal = bir', 'İkisi = iki meyve!']
            )
          ],
          tip: '💡 Farklı olsa da birleştirebiliriz!'
        }
      ),

      createStep(
        'Parmakla Bir Araya Getir',
        'Parmaklarla deneyelim!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ☝️  ile  ☝️                      │\n│                                     │\n│   Bir araya getir!                  │\n│                                     │\n│        ✌️                           │\n│                                     │\n│   Kaç parmak? İki parmak!           │\n│                                     │\n└─────────────────────────────────────┘\n\nBir parmak ile bir parmak = iki parmak!\n\nMükemmel! 🎉',
        '☝️ + ☝️ = ✌️',
        'Parmaklarını birleştir!',
        {
          visual: 'Bir parmak: ☝️\nBir parmak daha: ☝️\n\nBirlikte:\n✌️ (iki parmak)',
          examples: [
            createExample(
              'Bir parmak ile bir parmak kaç parmak yapar?',
              'İki parmak!',
              '☝️ + ☝️ = ✌️ İki parmak!',
              '✌️',
              ['Bir parmak', 'Bir daha', 'İki parmak!']
            )
          ],
          tip: '💡 Parmaklarını kullan! Çok kolay!'
        }
      ),

      createStep(
        'Günlük Hayatta Bir Araya Getirme',
        'Her gün bir araya getiririz!\n\n┌─────────────────────────────────────┐\n│                                     │\n│  🥄  ile  🥄  = 🥄🥄               │\n│  İki kaşık!                         │\n│                                     │\n│  📚  ile  📚  = 📚📚               │\n│  İki kitap!                         │\n│                                     │\n│  👟  ile  👟  = 👟👟               │\n│  İki ayakkabı!                      │\n│                                     │\n└─────────────────────────────────────┘\n\nHer yerde bir araya getirme var! 😊',
        'Günlük hayatta!',
        'Etrafına bak!',
        {
          visual: 'Evde:\n🥄 + 🥄 = iki kaşık\n📚 + 📚 = iki kitap\n👟 + 👟 = iki ayakkabı',
          examples: [
            createExample(
              'Bir ayakkabı ile bir ayakkabı kaç ayakkabı yapar?',
              'İki ayakkabı!',
              '👟 + 👟 = 👟👟 İki ayakkabı! Bir çift!',
              '👟👟',
              ['Sol ayakkabı', 'Sağ ayakkabı', 'Bir çift!']
            )
          ],
          tip: '💡 Her gün nesneleri bir araya getiririz!'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        '🍎 ile 🍎 bir araya gelince kaç elma olur?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '🍎 + 🍎 = 🍎🍎 İki elma!',
        '🍎🍎',
        1,
        'Elmaları say!'
      ),

      createMultipleChoice(
        '🧸 ile 🧸 bir araya gelince kaç oyuncak?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '🧸 + 🧸 = 🧸🧸 İki oyuncak!',
        '🧸🧸',
        1,
        'Oyuncakları say!'
      ),

      createMultipleChoice(
        '🍎🍎 ile 🍎 bir araya gelince kaç elma?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'Üç',
        '🍎🍎 + 🍎 = 🍎🍎🍎 Üç elma!',
        '🍎🍎🍎',
        1,
        'Hepsini say!'
      ),

      createMultipleChoice(
        'Bir parmak ile bir parmak = ?',
        ['Bir parmak', 'İki parmak', 'Üç parmak', 'Dört parmak'],
        'İki parmak',
        '☝️ + ☝️ = ✌️ İki parmak!',
        '✌️',
        1,
        'Parmaklarını kullan!'
      ),

      createMultipleChoice(
        '💝 ile 💝 bir araya gelince kaç kalp?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '💝 + 💝 = 💝💝 İki kalp!',
        '💝💝',
        1,
        'Kalpleri say!'
      ),

      createMultipleChoice(
        '🔵 ile 🔵 bir araya gelince kaç top?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '🔵 + 🔵 = 🔵🔵 İki top!',
        '🔵🔵',
        1,
        'Topları say!'
      ),

      createMultipleChoice(
        '🍎 ile 🍊 kaç meyve yapar?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '🍎 + 🍊 = İki meyve!',
        '🍎🍊',
        1,
        'Meyveleri say!'
      ),

      createMultipleChoice(
        '⭐ ile ⭐ bir araya gelince kaç yıldız?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '⭐ + ⭐ = ⭐⭐ İki yıldız!',
        '⭐⭐',
        1,
        'Yıldızları say!'
      ),

      createMultipleChoice(
        '🧸🧸 ile 🧸 bir araya gelince kaç oyuncak?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'Üç',
        '🧸🧸 + 🧸 = 🧸🧸🧸 Üç oyuncak!',
        '🧸🧸🧸',
        1,
        'Hepsini say!'
      ),

      createMultipleChoice(
        '📚 ile 📚 bir araya gelince kaç kitap?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '📚 + 📚 = 📚📚 İki kitap!',
        '📚📚',
        1,
        'Kitapları say!'
      )
    ],

    summary: '🤝 Harika!\n\n✅ Bir araya getirmeyi öğrendin!\n✅ 🍎 + 🍎 = 🍎🍎\n✅ Nesneleri birleştirdin!\n✅ Kaç tane olduğunu saydın!\n\nÇok iyi iş çıkardın! 💝',

    nextTopicPreview: 'Bir sonraki derste nesneleri AYIRMAYI öğreneceğiz! 🍎🍎 → 🍎'
  }
};
