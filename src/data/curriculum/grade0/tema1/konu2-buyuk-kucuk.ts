// DESTEK SINIFI - TEMA 1 - KONU 2: Büyük ve Küçük
// Karşılaştırma becerisi - Çok basit ve görsel
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep } from '../../helpers';

export const konu2BuyukKucuk: Topic = {
  id: 'buyuk-kucuk',
  title: 'Büyük ve Küçük',
  description: 'Büyük Fil 🐘 - Küçük Fare 🐭',
  emoji: '📏',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['büyük', 'küçük', 'karşılaştırma', 'boy'],
  objectives: [
    'Büyük kavramını tanır',
    'Küçük kavramını tanır',
    'İki nesneyi karşılaştırır',
    'Büyük-küçük farkını gösterir'
  ],
  content: {
    introduction: `Merhaba canım! 💝

Bugün BÜYÜK ve KÜÇÜK öğreneceğiz!

🐘 Fil çok BÜYÜK!
🐭 Fare çok KÜÇÜK!

Haydi başlayalım! 🌟`,

    motivationQuote: 'Büyük ve küçük çok kolay! Sen yapabilirsin! Aferin! 💝',

    funFacts: [
      '🐘 Fil dünyanın en büyük hayvanlarından!',
      '🐭 Fare çok küçük ve sevimli!',
      '🏔️ Dağlar çok büyük!',
      '🌼 Çiçekler küçük ve güzel!',
      '🚗 Araba büyük, oyuncak araba küçük!',
      '🏠 Ev büyük, kuş yuvası küçük!'
    ],

    steps: [
      // ADIM 1: BÜYÜK Kavramı
      createStep(
        '🐘 BÜYÜK',
        `Bak! Bu çok BÜYÜK! 🐘

FİL çok BÜYÜK!
Fil iri!
Fil koca!

BÜYÜK şeyler:
🐘 Fil - çok büyük!
🏔️ Dağ - çok büyük!
🏠 Ev - büyük!
🚗 Araba - büyük!
🌳 Ağaç - büyük!

BÜYÜK demek iri demek!`,
        'Büyük şeyler çok yer kaplar. Fil gibi!',
        {
          visual: `
╔════════════════════╗
║                    ║
║      🐘 FİL        ║
║   ÇOK BÜYÜK!       ║
║                    ║
╚════════════════════╝

🏔️ DAĞ - BÜYÜK
🏠 EV - BÜYÜK
🚗 ARABA - BÜYÜK`,
          tip: 'Kollarını aç! Büyük böyle! 🤗',
          examples: [
            createExample(
              'Fil büyük mü küçük mü?',
              'Büyük',
              'Aferin! Fil çok büyük! 🐘',
              '🐘 = BÜYÜK!'
            ),
            createExample(
              'Ev büyük mü?',
              'Evet, büyük',
              'Harika! Ev büyük! 🏠',
              '🏠 = BÜYÜK'
            ),
            createExample(
              'Dağ büyük mü?',
              'Evet, çok büyük',
              'Süper! Dağ çok büyük! 🏔️',
              '🏔️ = ÇOK BÜYÜK!'
            )
          ]
        }
      ),

      // ADIM 2: KÜÇÜK Kavramı
      createStep(
        '🐭 KÜÇÜK',
        `Bak! Bu çok KÜÇÜK! 🐭

FARE çok KÜÇÜK!
Fare minik!
Fare ufak!

KÜÇÜK şeyler:
🐭 Fare - çok küçük!
🐜 Karınca - çok küçük!
🌼 Çiçek - küçük!
🍓 Çilek - küçük!
⭐ Yıldız - küçük!

KÜÇÜK demek minik demek!`,
        'Küçük şeyler az yer kaplar. Fare gibi!',
        {
          visual: `
╔════════════════════╗
║                    ║
║      🐭            ║
║   KÜÇÜK FARE       ║
║                    ║
╚════════════════════╝

🐜 KARINCA - KÜÇÜK
🌼 ÇİÇEK - KÜÇÜK
🍓 ÇİLEK - KÜÇÜK`,
          tip: 'Parmağını göster! Küçük böyle! ☝️',
          examples: [
            createExample(
              'Fare büyük mü küçük mü?',
              'Küçük',
              'Bravo! Fare çok küçük! 🐭',
              '🐭 = KÜÇÜK!'
            ),
            createExample(
              'Karınca küçük mü?',
              'Evet, çok küçük',
              'Aferin! Karınca çok küçük! 🐜',
              '🐜 = ÇOK KÜÇÜK'
            ),
            createExample(
              'Çiçek küçük mü?',
              'Evet, küçük',
              'Harika! Çiçek küçük! 🌼',
              '🌼 = KÜÇÜK'
            )
          ]
        }
      ),

      // ADIM 3: Karşılaştırma - Fil vs Fare
      createStep(
        '🐘 vs 🐭 Karşılaştırma',
        `Şimdi karşılaştıralım!

FİL mi büyük?
FARE mi büyük?

Bak:
🐘 FİL - BÜYÜK!
🐭 FARE - KÜÇÜK!

Fil, fareden BÜYÜK!
Fare, filden KÜÇÜK!`,
        'Fili fareyle karşılaştır. Fil çok büyük!',
        {
          visual: `
╔══════════════════════╗
║   🐘  vs  🐭         ║
║                      ║
║   FİL      FARE      ║
║  BÜYÜK    KÜÇÜK      ║
╚══════════════════════╝

🐘 > 🐭
(Fil fareden büyük!)`,
          tip: 'Fil büyük! Fare küçük! Bak! 🐘 🐭',
          examples: [
            createExample(
              'Fil mi büyük, fare mi?',
              'Fil büyük',
              'Süper! Fil fareden çok büyük! 🐘',
              '🐘 BÜYÜK > 🐭 KÜÇÜK'
            ),
            createExample(
              'Fare mi küçük, fil mi?',
              'Fare küçük',
              'Aferin! Fare filden çok küçük! 🐭',
              '🐭 KÜÇÜK < 🐘 BÜYÜK'
            )
          ]
        }
      ),

      // ADIM 4: Daha Çok Karşılaştırma
      createStep(
        '⚖️ Daha Çok Örnekler',
        `Başka örnekler bakalım!

🏔️ DAĞ vs 🌼 ÇİÇEK
Dağ BÜYÜK! Çiçek KÜÇÜK!

🚗 ARABA vs 🚙 OYUNCAK ARABA
Araba BÜYÜK! Oyuncak küçük!

🏠 EV vs 🐦 KUŞ YUVASI
Ev BÜYÜK! Yuva küçük!

🌳 AĞAÇ vs 🌱 FİDE
Ağaç BÜYÜK! Fide küçük!`,
        'Her zaman karşılaştırabiliriz!',
        {
          visual: `
BÜYÜK          KÜÇÜK
━━━━━━━━━━━━━━━━━━━
🏔️  DAĞ    vs  🌼 ÇİÇEK
🚗 ARABA   vs  🚙 OYUNCAK
🏠  EV     vs  🐦 YUVA
🌳 AĞAÇ    vs  🌱 FİDE`,
          tip: 'Hepsini karşılaştır! Hangisi büyük? 📏',
          examples: [
            createExample(
              'Dağ mı büyük, çiçek mi?',
              'Dağ büyük',
              'Harika! Dağ çok büyük! 🏔️',
              '🏔️ BÜYÜK > 🌼 KÜÇÜK'
            ),
            createExample(
              'Araba mı büyük, oyuncak araba mı?',
              'Araba büyük',
              'Bravo! Araba büyük, oyuncak küçük! 🚗',
              '🚗 BÜYÜK > 🚙 KÜÇÜK'
            ),
            createExample(
              'Ev mi büyük, kuş yuvası mı?',
              'Ev büyük',
              'Süper! Ev büyük, yuva küçük! 🏠',
              '🏠 BÜYÜK > 🐦 KÜÇÜK'
            )
          ]
        }
      ),

      // ADIM 5: Top Oyunu
      createStep(
        '⚽ Top Oyunu',
        `Şimdi toplarla oynayalım!

BÜYÜK TOP: ⚽
KÜÇÜK TOP: 🎾

Bak farka!

⚽ Büyük top!
🎾 Küçük top!

Hangisi büyük? ⚽
Hangisi küçük? 🎾`,
        'Topları karşılaştır!',
        {
          visual: `
╔════════════════╗
║                ║
║    ⚽          ║
║  BÜYÜK TOP     ║
║                ║
╚════════════════╝

╔════════════════╗
║                ║
║     🎾         ║
║  KÜÇÜK TOP     ║
║                ║
╚════════════════╝`,
          tip: 'Büyük topu göster! ⚽ Küçük topu göster! 🎾',
          examples: [
            createExample(
              'Hangi top büyük?',
              'Futbol topu ⚽',
              'Aferin! Futbol topu büyük! ⚽',
              '⚽ BÜYÜK'
            ),
            createExample(
              'Hangi top küçük?',
              'Tenis topu 🎾',
              'Harika! Tenis topu küçük! 🎾',
              '🎾 KÜÇÜK'
            )
          ]
        }
      ),

      // ADIM 6: Hayvanlar
      createStep(
        '🦁 Hayvan Karşılaştırması',
        `Hayvanları karşılaştıralım!

🦁 ASLAN - BÜYÜK!
🐰 TAVŞAN - KÜÇÜK!

🐻 AYI - BÜYÜK!
🐿️ SINCAP - KÜÇÜK!

🐋 BALİNA - ÇOK BÜYÜK!
🐠 BALIK - KÜÇÜK!

Bak farklara! 👀`,
        'Hayvanları karşılaştır!',
        {
          visual: `
BÜYÜK HAYVANLAR:
🦁 Aslan
🐻 Ayı
🐋 Balina
🐘 Fil

KÜÇÜK HAYVANLAR:
🐰 Tavşan
🐿️ Sincap
🐠 Balık
🐭 Fare`,
          tip: 'Aslan büyük! Tavşan küçük! 🦁 🐰',
          examples: [
            createExample(
              'Aslan mı büyük, tavşan mı?',
              'Aslan büyük',
              'Bravo! Aslan tavşandan büyük! 🦁',
              '🦁 BÜYÜK > 🐰 KÜÇÜK'
            ),
            createExample(
              'Balina mı büyük, balık mı?',
              'Balina büyük',
              'Süper! Balina çok büyük! 🐋',
              '🐋 ÇOK BÜYÜK > 🐠 KÜÇÜK'
            )
          ]
        }
      ),

      // ADIM 7: Günlük Hayattan
      createStep(
        '🏠 Evde Büyük-Küçük',
        `Evimizde ne var?

BÜYÜK:
🛋️ Koltuk - büyük
🚪 Kapı - büyük
🛏️ Yatak - büyük

KÜÇÜK:
🧸 Oyuncak - küçük
📱 Telefon - küçük
🔑 Anahtar - küçük

Bak etrafına! 👀
Ne görüyorsun?`,
        'Evindeki eşyaları karşılaştır!',
        {
          visual: `
EVDE BÜYÜK EŞYALAR:
🛋️ Koltuk
🚪 Kapı
🛏️ Yatak
📺 Televizyon

EVDE KÜÇÜK EŞYALAR:
🧸 Oyuncak
📱 Telefon
🔑 Anahtar
✏️ Kalem`,
          tip: 'Odana bak! Büyük ve küçük eşyaları bul! 🏠',
          examples: [
            createExample(
              'Koltuk mu büyük, telefon mu?',
              'Koltuk büyük',
              'Harika! Koltuk büyük, telefon küçük! 🛋️',
              '🛋️ BÜYÜK > 📱 KÜÇÜK'
            ),
            createExample(
              'Yatak mı büyük, oyuncak mı?',
              'Yatak büyük',
              'Aferin! Yatak büyük, oyuncak küçük! 🛏️',
              '🛏️ BÜYÜK > 🧸 KÜÇÜK'
            )
          ]
        }
      ),

      // ADIM 8: Pratik Zamanı
      createStep(
        '🎯 Pratik Zamanı!',
        `Harika gidiyorsun! 💝

Şimdi oyun oynayalım!

👀 ETRAFINA BAK:
• Hangi şeyler BÜYÜK?
• Hangi şeyler KÜÇÜK?

👆 GÖSTER:
• En büyük şeyi göster!
• En küçük şeyi göster!

🎨 KARŞILAŞTIR:
• İki şeyi seç!
• Hangisi büyük?

Sen harikasın! 🌟`,
        'Pratik yap! Karşılaştır!',
        {
          visual: `
OYUN:

1. Odanda 2 oyuncak bul
2. Hangisi büyük?
3. Hangisi küçük?
4. Göster! 👆

Aferin sana! 🎉`,
          tip: 'Her gün karşılaştır! Büyük-küçük bul! 📏'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        '🐘 Fil büyük mü, küçük mü?',
        ['Büyük 🐘', 'Küçük 🐭'],
        'Büyük 🐘',
        'Aferin! Fil çok büyük! 🐘',
        '🐘 = BÜYÜK!',
        1,
        'File bak! Çok büyük! 🐘'
      ),

      createMultipleChoice(
        '🐭 Fare büyük mü, küçük mü?',
        ['Büyük 🐘', 'Küçük 🐭'],
        'Küçük 🐭',
        'Harika! Fare çok küçük! 🐭',
        '🐭 = KÜÇÜK!',
        1,
        'Fareye bak! Çok küçük! 🐭'
      ),

      createVisualQuestion(
        'Hangisi büyük?',
        '🐘 Fil     🐭 Fare',
        ['Fil 🐘', 'Fare 🐭'],
        'Fil 🐘',
        'Süper! Fil büyük! 🐘',
        1
      ),

      createVisualQuestion(
        'Hangisi küçük?',
        '🐘 Fil     🐭 Fare',
        ['Fil 🐘', 'Fare 🐭'],
        'Fare 🐭',
        'Bravo! Fare küçük! 🐭',
        1
      ),

      createMultipleChoice(
        '🏔️ Dağ büyük mü?',
        ['Evet, büyük 🏔️', 'Hayır, küçük'],
        'Evet, büyük 🏔️',
        'Mükemmel! Dağ çok büyük! 🏔️',
        '🏔️ = BÜYÜK',
        1
      ),

      createMultipleChoice(
        '🌼 Çiçek küçük mü?',
        ['Evet, küçük 🌼', 'Hayır, büyük'],
        'Evet, küçük 🌼',
        'Harika! Çiçek küçük! 🌼',
        '🌼 = KÜÇÜK',
        1
      ),

      createVisualQuestion(
        '🚗 Araba mı büyük, 🚙 Oyuncak araba mı?',
        '🚗 Araba     🚙 Oyuncak',
        ['Araba 🚗', 'Oyuncak 🚙'],
        'Araba 🚗',
        'Aferin! Araba büyük! 🚗',
        1
      ),

      createVisualQuestion(
        '⚽ Futbol topu mu büyük, 🎾 Tenis topu mu?',
        '⚽ Futbol     🎾 Tenis',
        ['Futbol ⚽', 'Tenis 🎾'],
        'Futbol ⚽',
        'Süper! Futbol topu büyük! ⚽',
        1
      ),

      createMultipleChoice(
        '🦁 Aslan mı büyük, 🐰 Tavşan mı?',
        ['Aslan büyük 🦁', 'Tavşan büyük 🐰'],
        'Aslan büyük 🦁',
        'Bravo! Aslan tavşandan büyük! 🦁',
        '🦁 > 🐰',
        1,
        'Aslan çok büyük! 🦁'
      ),

      createMultipleChoice(
        '🏠 Ev mi büyük, 🐦 Kuş yuvası mı?',
        ['Ev büyük 🏠', 'Yuva büyük 🐦'],
        'Ev büyük 🏠',
        'Harika! Ev yuvadan büyük! 🏠',
        '🏠 > 🐦',
        1
      ),

      createMultipleChoice(
        '🐋 Balina mı büyük, 🐠 Balık mı?',
        ['Balina büyük 🐋', 'Balık büyük 🐠'],
        'Balina büyük 🐋',
        'Mükemmel! Balina çok büyük! 🐋',
        '🐋 > 🐠',
        1
      ),

      createVisualQuestion(
        'BÜYÜK olanı seç:',
        '🐘 🐭 🏔️ 🌼',
        ['Fil 🐘', 'Fare 🐭', 'Dağ 🏔️', 'Çiçek 🌼'],
        'Dağ 🏔️',
        'Süper! Dağ en büyük! 🏔️',
        1
      ),

      createVisualQuestion(
        'KÜÇÜK olanı seç:',
        '🐘 🐭 🏔️ 🌼',
        ['Fil 🐘', 'Fare 🐭', 'Dağ 🏔️', 'Çiçek 🌼'],
        'Fare 🐭',
        'Aferin! Fare en küçük! 🐭',
        1
      )
    ],

    summary: `🎉 TEBRİKLER CANIM!

Sen muhteşemsin! 💝

Öğrendiklerimiz:
✅ BÜYÜK - Fil, Dağ, Ev gibi
✅ KÜÇÜK - Fare, Çiçek, Karınca gibi
✅ Karşılaştırma yapabiliyorsun!

🐘 BÜYÜK > 🐭 KÜÇÜK

Aferin sana! 👏
Sen çok akıllısın! 🌟

Her gün karşılaştır!
Büyük-küçük bul! 📏`,

    nextTopicPreview: 'Sonraki konuda EŞLEŞTIRME oyunları oynayacağız! 🎯'
  }
};
