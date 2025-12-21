// DESTEK SINIFI - TEMA 1 - KONU 1: Renklerle Tanışalım
// Özel eğitim gerektiren çocuklar için - Çok basit, çok sevgi dolu
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep, visualHelpers } from '../../helpers';

export const konu1Renkler: Topic = {
  id: 'renkler-tanisalim',
  title: 'Renklerle Tanışalım',
  description: 'Kırmızı, Mavi, Sarı, Yeşil - Renklerimiz Bizim Arkadaşlarımız',
  emoji: '🎨',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['kırmızı', 'mavi', 'sarı', 'yeşil', 'renk', 'renkler'],
  objectives: [
    'Kırmızı rengi tanır',
    'Mavi rengi tanır',
    'Sarı rengi tanır',
    'Yeşil rengi tanır',
    'Aynı renkteki nesneleri gruplar'
  ],
  content: {
    introduction: `Merhaba canım! 💝

Bugün renklerle tanışacağız!
Renkler çok güzel.
Renkler her yerde!

🎨 Çevremizde ne kadar çok renk var!
🌈 Haydi birlikte öğrenelim!

Sen çok zekisin! 🌟`,

    motivationQuote: 'Renkleri öğrenmek çok kolay! Sen yapabilirsin! Aferin sana! 💝',

    funFacts: [
      '❤️ Kırmızı renk çok sıcak bir renktir!',
      '💙 Mavi renk gökyüzü ve denizin rengidir!',
      '💛 Sarı renk güneşin rengidir! Çok parlak!',
      '💚 Yeşil renk ağaçların ve yaprakların rengidir!',
      '🌈 Gökkuşağında 7 renk var!',
      '🎨 Sarı ile mavi karışınca yeşil olur!',
      '❤️ En çok hangi rengi seviyorsun?'
    ],

    steps: [
      // ADIM 1: Kırmızı Renk
      createStep(
        '❤️ KIRMIZI Renk',
        `Bak! Bu KIRMIZI renk! ❤️

KIRMIZI çok güzel bir renk!

Nerede var?
🍎 Kırmızı elma
🍓 Kırmızı çilek
🌹 Kırmızı gül
❤️ Kırmızı kalp
🚗 Kırmızı araba

KIRMIZI renk sıcak bir renktir.
KIRMIZI renk çok parlak!`,
        'Kırmızı renk elma, çilek, kalp gibi güzel şeylerin rengidir!',
        {
          visual: `
╔════════════════════╗
║   ❤️  KIRMIZI  ❤️   ║
╠════════════════════╣
║  🍎  🍎  🍎  🍎  🍎  ║
║  🍓  🍓  🍓  🍓  🍓  ║
║  🌹  🌹  🌹  🌹  🌹  ║
║  ❤️  ❤️  ❤️  ❤️  ❤️  ║
╚════════════════════╝`,
          tip: '🍎 Elma göster! "Bak, kırmızı!" de!',
          examples: [
            createExample(
              'Elma hangi renk?',
              'Kırmızı',
              'Elma kırmızı renktedir! 🍎',
              '🍎 = KIRMIZI ❤️'
            ),
            createExample(
              'Kalp hangi renk?',
              'Kırmızı',
              'Kalp kırmızı renktedir! ❤️',
              '❤️ = KIRMIZI'
            ),
            createExample(
              'Çilek hangi renk?',
              'Kırmızı',
              'Çilek kırmızı renktedir! 🍓',
              '🍓 = KIRMIZI ❤️'
            )
          ]
        }
      ),

      // ADIM 2: Mavi Renk
      createStep(
        '💙 MAVİ Renk',
        `Bak! Bu MAVİ renk! 💙

MAVİ çok güzel bir renk!

Nerede var?
🌊 Mavi deniz
💙 Mavi gökyüzü
🐟 Mavi balık
👕 Mavi tişört
🦋 Mavi kelebek

MAVİ renk serin bir renktir.
MAVİ renk çok güzel!`,
        'Mavi renk deniz, gökyüzü gibi güzel şeylerin rengidir!',
        {
          visual: `
╔════════════════════╗
║   💙  MAVİ  💙     ║
╠════════════════════╣
║  🌊  🌊  🌊  🌊  🌊  ║
║  💙  💙  💙  💙  💙  ║
║  🐟  🐟  🐟  🐟  🐟  ║
║  🦋  🦋  🦋  🦋  🦋  ║
╚════════════════════╝`,
          tip: '🌊 Deniz göster! "Bak, mavi!" de!',
          examples: [
            createExample(
              'Gökyüzü hangi renk?',
              'Mavi',
              'Gökyüzü mavi renktedir! 💙',
              '☁️ Gökyüzü = MAVİ 💙'
            ),
            createExample(
              'Deniz hangi renk?',
              'Mavi',
              'Deniz mavi renktedir! 🌊',
              '🌊 = MAVİ 💙'
            ),
            createExample(
              'Balık hangi renk olabilir?',
              'Mavi',
              'Balık mavi renkte olabilir! 🐟',
              '🐟 = MAVİ 💙'
            )
          ]
        }
      ),

      // ADIM 3: Sarı Renk
      createStep(
        '💛 SARI Renk',
        `Bak! Bu SARI renk! 💛

SARI çok güzel bir renk!

Nerede var?
☀️ Sarı güneş
⭐ Sarı yıldız
🍌 Sarı muz
🌻 Sarı ayçiçeği
🦆 Sarı civciv

SARI renk parlak bir renktir.
SARI renk çok neşeli!`,
        'Sarı renk güneş, yıldız gibi parlak şeylerin rengidir!',
        {
          visual: `
╔════════════════════╗
║   💛  SARI  💛     ║
╠════════════════════╣
║  ☀️  ☀️  ☀️  ☀️  ☀️  ║
║  ⭐  ⭐  ⭐  ⭐  ⭐  ║
║  🍌  🍌  🍌  🍌  🍌  ║
║  🌻  🌻  🌻  🌻  🌻  ║
╚════════════════════╝`,
          tip: '☀️ Güneş göster! "Bak, sarı!" de!',
          examples: [
            createExample(
              'Güneş hangi renk?',
              'Sarı',
              'Güneş sarı renktedir! ☀️',
              '☀️ = SARI 💛'
            ),
            createExample(
              'Muz hangi renk?',
              'Sarı',
              'Muz sarı renktedir! 🍌',
              '🍌 = SARI 💛'
            ),
            createExample(
              'Yıldız hangi renk?',
              'Sarı',
              'Yıldız sarı renktedir! ⭐',
              '⭐ = SARI 💛'
            )
          ]
        }
      ),

      // ADIM 4: Yeşil Renk
      createStep(
        '💚 YEŞİL Renk',
        `Bak! Bu YEŞİL renk! 💚

YEŞİL çok güzel bir renk!

Nerede var?
🍀 Yeşil yaprak
🌳 Yeşil ağaç
🍏 Yeşil elma
🐸 Yeşil kurbağa
🌿 Yeşil bitki

YEŞİL renk doğanın rengidir.
YEŞİL renk çok dinlendirici!`,
        'Yeşil renk yaprak, ağaç gibi doğadaki şeylerin rengidir!',
        {
          visual: `
╔════════════════════╗
║   💚  YEŞİL  💚    ║
╠════════════════════╣
║  🍀  🍀  🍀  🍀  🍀  ║
║  🌳  🌳  🌳  🌳  🌳  ║
║  🍏  🍏  🍏  🍏  🍏  ║
║  🐸  🐸  🐸  🐸  🐸  ║
╚════════════════════╝`,
          tip: '🍀 Yaprak göster! "Bak, yeşil!" de!',
          examples: [
            createExample(
              'Yaprak hangi renk?',
              'Yeşil',
              'Yaprak yeşil renktedir! 🍀',
              '🍀 = YEŞİL 💚'
            ),
            createExample(
              'Ağaç hangi renk?',
              'Yeşil',
              'Ağaç yeşil renktedir! 🌳',
              '🌳 = YEŞİL 💚'
            ),
            createExample(
              'Kurbağa hangi renk?',
              'Yeşil',
              'Kurbağa yeşil renktedir! 🐸',
              '🐸 = YEŞİL 💚'
            )
          ]
        }
      ),

      // ADIM 5: Renkleri Tekrar Edelim
      createStep(
        '🌈 Renkleri Tekrar Edelim!',
        `Harika! Şimdi hepsini hatırlayalım!

❤️ KIRMIZI - Elma, kalp, çilek
💙 MAVİ - Deniz, gökyüzü, balık
💛 SARI - Güneş, yıldız, muz
💚 YEŞİL - Yaprak, ağaç, kurbağa

Sen harikasın! 🌟
Dört renk öğrendin! 🎨`,
        'Dört güzel renk: Kırmızı, Mavi, Sarı, Yeşil!',
        {
          visual: `
╔═══════════════════════════╗
║  🎨 RENKLER 🎨            ║
╠═══════════════════════════╣
║  ❤️ KIRMIZI = 🍎 🍓 🌹   ║
║  💙 MAVİ    = 🌊 💙 🐟   ║
║  💛 SARI    = ☀️ ⭐ 🍌   ║
║  💚 YEŞİL   = 🍀 🌳 🐸   ║
╚═══════════════════════════╝`,
          tip: 'Bak etrafına! Hangi renkleri görüyorsun? 🎨',
          examples: [
            createExample(
              'Hangi renkler var?',
              'Kırmızı, Mavi, Sarı, Yeşil',
              'Dört renk öğrendik: Kırmızı ❤️, Mavi 💙, Sarı 💛, Yeşil 💚',
              '🎨 4 renk!'
            )
          ]
        }
      ),

      // ADIM 6: Renkleri Eşleştir
      createStep(
        '🎯 Renkleri Eşleştir',
        `Haydi oyun oynayalım!

Aynı renkteki şeyleri bulalım!

🍎 Elma → ❤️ KIRMIZI
🌊 Deniz → 💙 MAVİ
☀️ Güneş → 💛 SARI
🍀 Yaprak → 💚 YEŞİL

Çok güzel! Aferin! 👏`,
        'Aynı renkteki şeyleri eşleştir!',
        {
          visual: `
EŞLEŞTIR:
🍎 Elma     →  ? → ❤️ KIRMIZI
🌊 Deniz    →  ? → 💙 MAVİ
☀️ Güneş    →  ? → 💛 SARI
🍀 Yaprak   →  ? → 💚 YEŞİL`,
          tip: 'Elmayı kırmızı ile eşleştir! 🍎 = ❤️',
          examples: [
            createExample(
              'Elma hangi renk?',
              'Kırmızı',
              'Elma kırmızı! Çok güzel! 🍎 ❤️',
              '🍎 → ❤️ KIRMIZI'
            ),
            createExample(
              'Deniz hangi renk?',
              'Mavi',
              'Deniz mavi! Aferin! 🌊 💙',
              '🌊 → 💙 MAVİ'
            ),
            createExample(
              'Güneş hangi renk?',
              'Sarı',
              'Güneş sarı! Harika! ☀️ 💛',
              '☀️ → 💛 SARI'
            )
          ]
        }
      ),

      // ADIM 7: Renkleri Grupla
      createStep(
        '📦 Aynı Renkleri Grupla',
        `Aynı renkteki şeyleri bir araya koyalım!

KIRMIZI GRUP: 🍎 🍓 ❤️ 🌹
MAVİ GRUP: 🌊 💙 🐟 🦋
SARI GRUP: ☀️ ⭐ 🍌 🌻
YEŞİL GRUP: 🍀 🌳 🍏 🐸

Süper! Çok güzel grupladın! 🌟`,
        'Aynı renkteki şeyleri bir araya koy!',
        {
          visual: `
╔════ KIRMIZI GRUP ════╗
║  🍎  🍓  ❤️  🌹       ║
╚══════════════════════╝

╔════ MAVİ GRUP ════╗
║  🌊  💙  🐟  🦋    ║
╚════════════════════╝

╔════ SARI GRUP ════╗
║  ☀️  ⭐  🍌  🌻    ║
╚════════════════════╝

╔════ YEŞİL GRUP ════╗
║  🍀  🌳  🍏  🐸     ║
╚═════════════════════╝`,
          tip: 'Kırmızı elmayı kırmızı gruba koy! 🍎',
          examples: [
            createExample(
              'Elma hangi gruba gider?',
              'Kırmızı grup',
              'Elma kırmızı! Kırmızı gruba koy! 🍎 ❤️',
              '🍎 → KIRMIZI GRUP'
            ),
            createExample(
              'Muz hangi gruba gider?',
              'Sarı grup',
              'Muz sarı! Sarı gruba koy! 🍌 💛',
              '🍌 → SARI GRUP'
            )
          ]
        }
      ),

      // ADIM 8: Pratik Zamanı
      createStep(
        '🎨 Pratik Zamanı!',
        `Harika gidiyorsun canım! 💝

Şimdi etrafına bak!

❤️ Hangi şeyler KIRMIZI?
💙 Hangi şeyler MAVİ?
💛 Hangi şeyler SARI?
💚 Hangi şeyler YEŞİL?

Bul ve göster! 👆

Her gün renklere bak!
Sen çok akıllısın! 🌟`,
        'Etrafındaki renkleri bul ve göster!',
        {
          visual: `
🏠 EVDE RENKLER ARA:

Salonda ne var?
Mutfakta ne var?
Odanda ne var?

Hangi renkleri gördün? 🎨`,
          tip: 'Ailene göster! "Bak, kırmızı!" de! ❤️',
          examples: [
            createExample(
              'Odanda kırmızı bir şey var mı?',
              'Evet/Hayır',
              'Bak ve bul! Belki oyuncak? Belki kitap? 🎨',
              '👀 Bak ve bul!'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // Çok basit tanıma soruları
      createMultipleChoice(
        '🍎 Elma hangi renk?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Kırmızı ❤️',
        'Aferin! Elma kırmızı renktedir! 🍎 ❤️',
        '🍎 = ❤️',
        1,
        'Elmaya bak! Hangi renk? 🍎'
      ),

      createMultipleChoice(
        '🌊 Deniz hangi renk?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Mavi 💙',
        'Harika! Deniz mavi renktedir! 🌊 💙',
        '🌊 = 💙',
        1,
        'Denize bak! Hangi renk? 🌊'
      ),

      createMultipleChoice(
        '☀️ Güneş hangi renk?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Sarı 💛',
        'Süper! Güneş sarı renktedir! ☀️ 💛',
        '☀️ = 💛',
        1,
        'Güneşe bak! Hangi renk? ☀️'
      ),

      createMultipleChoice(
        '🍀 Yaprak hangi renk?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Yeşil 💚',
        'Mükemmel! Yaprak yeşil renktedir! 🍀 💚',
        '🍀 = 💚',
        1,
        'Yaprağa bak! Hangi renk? 🍀'
      ),

      createMultipleChoice(
        '❤️ Kalp hangi renk?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Kırmızı ❤️',
        'Çok güzel! Kalp kırmızı renktedir! ❤️',
        '❤️ = KIRMIZI',
        1,
        'Kalbe bak! Hangi renk? ❤️'
      ),

      createMultipleChoice(
        '🍌 Muz hangi renk?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Sarı 💛',
        'Bravo! Muz sarı renktedir! 🍌 💛',
        '🍌 = 💛',
        1,
        'Muza bak! Hangi renk? 🍌'
      ),

      createMultipleChoice(
        '🌳 Ağaç hangi renk?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Yeşil 💚',
        'Harika! Ağaç yeşil renktedir! 🌳 💚',
        '🌳 = 💚',
        1,
        'Ağaca bak! Hangi renk? 🌳'
      ),

      createMultipleChoice(
        '🍓 Çilek hangi renk?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Kırmızı ❤️',
        'Aferin! Çilek kırmızı renktedir! 🍓 ❤️',
        '🍓 = ❤️',
        1,
        'Çileğe bak! Hangi renk? 🍓'
      ),

      createMultipleChoice(
        '⭐ Yıldız hangi renk?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Sarı 💛',
        'Süper! Yıldız sarı renktedir! ⭐ 💛',
        '⭐ = 💛',
        1,
        'Yıldıza bak! Hangi renk? ⭐'
      ),

      createMultipleChoice(
        '🐸 Kurbağa hangi renk?',
        ['Kırmızı ❤️', 'Mavi 💙', 'Sarı 💛', 'Yeşil 💚'],
        'Yeşil 💚',
        'Mükemmel! Kurbağa yeşil renktedir! 🐸 💚',
        '🐸 = 💚',
        1,
        'Kurbağaya bak! Hangi renk? 🐸'
      ),

      // Eşleştirme soruları
      createVisualQuestion(
        'Kırmızı olan hangisi?',
        '🍎 🌊 🍌 🍀',
        ['Elma 🍎', 'Deniz 🌊', 'Muz 🍌', 'Yaprak 🍀'],
        'Elma 🍎',
        'Harika! Elma kırmızı! 🍎 ❤️',
        1
      ),

      createVisualQuestion(
        'Mavi olan hangisi?',
        '🍎 🌊 🍌 🍀',
        ['Elma 🍎', 'Deniz 🌊', 'Muz 🍌', 'Yaprak 🍀'],
        'Deniz 🌊',
        'Süper! Deniz mavi! 🌊 💙',
        1
      ),

      createVisualQuestion(
        'Sarı olan hangisi?',
        '🍎 🌊 🍌 🍀',
        ['Elma 🍎', 'Deniz 🌊', 'Muz 🍌', 'Yaprak 🍀'],
        'Muz 🍌',
        'Aferin! Muz sarı! 🍌 💛',
        1
      ),

      createVisualQuestion(
        'Yeşil olan hangisi?',
        '🍎 🌊 🍌 🍀',
        ['Elma 🍎', 'Deniz 🌊', 'Muz 🍌', 'Yaprak 🍀'],
        'Yaprak 🍀',
        'Bravo! Yaprak yeşil! 🍀 💚',
        1
      )
    ],

    summary: `🎉 TEBRİKLER CANIM!

Sen harikasın! 💝
Dört renk öğrendin! 🎨

✅ ❤️ KIRMIZI - Elma, Kalp, Çilek
✅ 💙 MAVİ - Deniz, Gökyüzü, Balık
✅ 💛 SARI - Güneş, Yıldız, Muz
✅ 💚 YEŞİL - Yaprak, Ağaç, Kurbağa

Aferin sana! 👏
Sen çok zekisin! 🌟

Şimdi her gün renklere bak!
Renkleri göster! 🎨`,

    nextTopicPreview: 'Sonraki konuda BÜYÜK ve KÜÇÜK öğreneceğiz! Fil ve fare! 🐘🐭'
  }
};
