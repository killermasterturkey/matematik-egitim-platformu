// DESTEK SINIFI - TEMA 4 - KONU 2: AYIRMA
// "Çıkarma" kelimesi yok - sadece "ayır" veya "gitti"

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu2Ayirma: Topic = {
  id: 'ayirma',
  title: 'Ayırma',
  description: '3 elmadan 1 tanesini ye... 2 kaldı! 🍎',
  emoji: '👋',
  duration: '45 dk',
  difficulty: 1,
  keywords: ['ayır', 'gitti', 'kaldı', 'çıkarma hazırlık'],
  objectives: [
    'Nesneleri ayırmayı öğreneceksin',
    '"Kaç tane kaldı?" sorusunu cevaplayacaksın',
    'Bir şey gittiğinde ne olduğunu göreceksin',
    'Basit ayırma işlemleri yapacaksın'
  ],

  content: {
    introduction: '👋 Merhaba!\n\nBugün nesneleri ayıracağız!\n\nBak:\n\n🍎🍎🍎 → 🍎 gitti → 🍎🍎 kaldı\n\nİki elma kaldı!\n\nÇok kolay! 😊\n\nHazır mısın? Başlayalım!',

    motivationQuote: 'Ayırmak çok kolay! Sen başarabilirsin! 💝',

    funFacts: [
      '🍎 Bir elma yedin, kaçı kaldı?',
      '🎈 Bir balon uçtu, kaçı kaldı?',
      '🧸 Bir oyuncak arkadaşına gitti!',
      '🍪 Kurabiye bitince ne olur?',
      '👋 Gitti = azaldı!',
      '💝 Kalan = geriye kalan!'
    ],

    steps: [
      createStep(
        'Ayırmak Nedir?',
        'Bak!\n\nİki tane elma var: 🍎🍎\n\nBir tanesini ye! 😋\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🍎🍎  →  bir tane ye  →  🍎       │\n│                                     │\n│   Kaç tane kaldı?                   │\n│                                     │\n│        Bir tane!                    │\n│                                     │\n└─────────────────────────────────────┘\n\n🍎🍎 → 🍎 gitti → 🍎 kaldı\n\nBu çok kolay! 😊',
        '🍎🍎 → 🍎',
        'Bir tanesini ayır!',
        {
          visual: 'Başta: 🍎🍎 (iki tane)\n\nBir tane gitti: 🍎 ❌\n\nKalan: 🍎 (bir tane)',
          examples: [
            createExample(
              'İki elmadan bir tanesini yersen kaç elma kalır?',
              'Bir elma!',
              'Bak: 🍎🍎 → bir tane ye → 🍎 kaldı!',
              '🍎🍎 → 🍎',
              ['İki elma var', 'Bir tanesini ye', 'Bir elma kaldı!']
            )
          ],
          tip: '💡 Gitti = azaldı = kalan!'
        }
      ),

      createStep(
        'Oyuncakları Ayır',
        'Oyuncaklarla deneyelim!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🧸🧸🧸                             │\n│                                     │\n│   Bir tane arkadaşına ver!          │\n│                                     │\n│   🧸🧸🧸  →  🧸 gitti  →  🧸🧸      │\n│                                     │\n│   Kaç oyuncak kaldı? İki!           │\n│                                     │\n└─────────────────────────────────────┘\n\nBak ne kolay! 😊',
        '🧸🧸🧸 → 🧸🧸',
        'Bir tanesini ayır!',
        {
          visual: 'Başta: 🧸🧸🧸 (üç oyuncak)\n\nBir tane git: 🧸 ❌\n\nKalan: 🧸🧸 (iki oyuncak)',
          examples: [
            createExample(
              'Üç oyuncağından bir tanesini verirsen kaç kalır?',
              'İki oyuncak!',
              '🧸🧸🧸 → bir tane ver → 🧸🧸 kaldı!',
              '🧸🧸🧸 → 🧸🧸',
              ['Üç oyuncak var', 'Bir tane ver', 'İki oyuncak kaldı!']
            )
          ],
          tip: '💡 Verince azalır!'
        }
      ),

      createStep(
        'Balon Uçtu!',
        'Balonlarla oynayalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🎈🎈🎈🎈                           │\n│                                     │\n│   Bir balon uçtu! 🎈💨              │\n│                                     │\n│   🎈🎈🎈🎈  →  🎈💨  →  🎈🎈🎈      │\n│                                     │\n│   Kaç balon kaldı? Üç!              │\n│                                     │\n└─────────────────────────────────────┘\n\nBir balon uçtu, üç balon kaldı! 😊',
        '🎈🎈🎈🎈 → 🎈🎈🎈',
        'Bir balon uçtu!',
        {
          visual: 'Başta: 🎈🎈🎈🎈 (dört balon)\n\nBir balon uçtu: 🎈💨\n\nKalan: 🎈🎈🎈 (üç balon)',
          examples: [
            createExample(
              'Dört balonun bir tanesi uçarsa kaç balon kalır?',
              'Üç balon!',
              '🎈🎈🎈🎈 → bir balon uçtu 💨 → 🎈🎈🎈 kaldı!',
              '🎈🎈🎈',
              ['Dört balon var', 'Bir balon uçtu', 'Üç balon kaldı!']
            )
          ],
          tip: '💡 Uçunca azalır!'
        }
      ),

      createStep(
        'Parmakla Ayırma',
        'Parmaklarla deneyelim!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🤟 (üç parmak)                    │\n│                                     │\n│   Bir parmak kapat!                 │\n│                                     │\n│   🤟  →  bir kapat  →  ✌️          │\n│                                     │\n│   Kaç parmak kaldı? İki!            │\n│                                     │\n└─────────────────────────────────────┘\n\nÜç parmak... bir kapat... iki kaldı!\n\nMükemmel! 🎉',
        '🤟 → ✌️',
        'Bir parmağını kapat!',
        {
          visual: 'Başta: 🤟 (üç parmak)\n\nBir parmak kapat: ☝️ ❌\n\nKalan: ✌️ (iki parmak)',
          examples: [
            createExample(
              'Üç parmağından bir tanesini kapatırsan kaç parmak kalır?',
              'İki parmak!',
              '🤟 → bir parmak kapat → ✌️ kaldı!',
              '✌️',
              ['Üç parmak aç', 'Bir parmak kapat', 'İki parmak kaldı!']
            )
          ],
          tip: '💡 Parmaklarını kullan! Çok kolay!'
        }
      ),

      createStep(
        'Yemek Zamanı!',
        'Yemekler de ayırabiliriz!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🍪🍪🍪🍪🍪 (beş kurabiye)          │\n│                                     │\n│   Bir tane ye! 😋                   │\n│                                     │\n│   🍪🍪🍪🍪🍪  →  😋  →  🍪🍪🍪🍪    │\n│                                     │\n│   Kaç kurabiye kaldı? Dört!         │\n│                                     │\n└─────────────────────────────────────┘\n\nYedin= azaldı! 😊',
        '🍪🍪🍪🍪🍪 → 🍪🍪🍪🍪',
        'Bir tane ye!',
        {
          visual: 'Başta: 🍪🍪🍪🍪🍪 (beş kurabiye)\n\nBir tane ye: 🍪 😋\n\nKalan: 🍪🍪🍪🍪 (dört kurabiye)',
          examples: [
            createExample(
              'Beş kurabiyeden bir tanesini yersen kaç kurabiye kalır?',
              'Dört kurabiye!',
              '🍪🍪🍪🍪🍪 → bir tane ye → 🍪🍪🍪🍪 kaldı!',
              '🍪🍪🍪🍪',
              ['Beş kurabiye var', 'Bir tane ye', 'Dört kurabiye kaldı!']
            )
          ],
          tip: '💡 Yediğinde azalır!'
        }
      ),

      createStep(
        'Günlük Hayatta Ayırma',
        'Her gün ayırırız!\n\n┌─────────────────────────────────────┐\n│                                     │\n│  🖍️🖍️🖍️  →  bir ver  →  🖍️🖍️   │\n│  İki kalem kaldı!                   │\n│                                     │\n│  📚📚📚📚  →  bir oku  →  📚📚📚  │\n│  Üç kitap kaldı!                    │\n│                                     │\n└─────────────────────────────────────┘\n\nHer yerde ayırma var! 😊',
        'Günlük hayatta!',
        'Etrafına bak!',
        {
          visual: 'Evde:\n\n🖍️🖍️🖍️ → bir ver → 🖍️🖍️\n📚📚📚📚 → bir oku → 📚📚📚',
          examples: [
            createExample(
              'Üç kaleminden bir tanesini verirsen kaç kalem kalır?',
              'İki kalem!',
              '🖍️🖍️🖍️ → bir tane ver → 🖍️🖍️ kaldı!',
              '🖍️🖍️',
              ['Üç kalem var', 'Bir tane ver', 'İki kalem kaldı!']
            )
          ],
          tip: '💡 Her gün nesneleri ayırıyoruz!'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        '🍎🍎 → bir tane ye → kaç elma kalır?',
        ['Sıfır', 'Bir', 'İki', 'Üç'],
        'Bir',
        '🍎🍎 → bir ye → 🍎 kaldı! Bir elma!',
        '🍎',
        1,
        'Kalanı say!'
      ),

      createMultipleChoice(
        '🧸🧸🧸 → bir tane ver → kaç oyuncak kalır?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '🧸🧸🧸 → bir ver → 🧸🧸 kaldı! İki oyuncak!',
        '🧸🧸',
        1,
        'Kalanı say!'
      ),

      createMultipleChoice(
        '🎈🎈🎈🎈 → bir balon uçtu → kaç balon kaldı?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'Üç',
        '🎈🎈🎈🎈 → bir uçtu → 🎈🎈🎈 kaldı! Üç balon!',
        '🎈🎈🎈',
        1,
        'Kalanı say!'
      ),

      createMultipleChoice(
        '🤟 (üç parmak) → bir parmak kapat → kaç parmak kalır?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '🤟 → bir kapat → ✌️ kaldı! İki parmak!',
        '✌️',
        1,
        'Parmaklarını kullan!'
      ),

      createMultipleChoice(
        '🍪🍪🍪🍪🍪 → bir ye → kaç kurabiye kaldı?',
        ['İki', 'Üç', 'Dört', 'Beş'],
        'Dört',
        '🍪🍪🍪🍪🍪 → bir ye → 🍪🍪🍪🍪 kaldı! Dört kurabiye!',
        '🍪🍪🍪🍪',
        1,
        'Kalanı say!'
      ),

      createMultipleChoice(
        '🔵🔵🔵 → bir top git → kaç top kaldı?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '🔵🔵🔵 → bir git → 🔵🔵 kaldı! İki top!',
        '🔵🔵',
        1,
        'Kalanı say!'
      ),

      createMultipleChoice(
        '⭐⭐⭐⭐ → bir yıldız söndü → kaç yıldız kaldı?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'Üç',
        '⭐⭐⭐⭐ → bir söndü → ⭐⭐⭐ kaldı! Üç yıldız!',
        '⭐⭐⭐',
        1,
        'Kalanı say!'
      ),

      createMultipleChoice(
        '💝💝💝💝💝 → bir kalp git → kaç kalp kaldı?',
        ['İki', 'Üç', 'Dört', 'Beş'],
        'Dört',
        '💝💝💝💝💝 → bir git → 💝💝💝💝 kaldı! Dört kalp!',
        '💝💝💝💝',
        1,
        'Kalanı say!'
      ),

      createMultipleChoice(
        '🖍️🖍️🖍️ → bir kalem ver → kaç kalem kaldı?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'İki',
        '🖍️🖍️🖍️ → bir ver → 🖍️🖍️ kaldı! İki kalem!',
        '🖍️🖍️',
        1,
        'Kalanı say!'
      ),

      createMultipleChoice(
        '🖐️ (beş parmak) → bir parmak kapat → kaç parmak kaldı?',
        ['İki', 'Üç', 'Dört', 'Beş'],
        'Dört',
        '🖐️ → bir kapat → 🖖 kaldı! Dört parmak!',
        '🖖',
        1,
        'Parmaklarını kullan!'
      )
    ],

    summary: '👋 Harika!\n\n✅ Ayırmayı öğrendin!\n✅ 🍎🍎 → 🍎 gitti → 🍎 kaldı\n✅ Kaç tane kaldığını saydın!\n✅ Gitti = azaldı!\n\nÇok iyi iş çıkardın! 💝',

    nextTopicPreview: 'Bir sonraki derste en kolay toplamaları öğreneceğiz! 1+1 ve 2+1!'
  }
};
