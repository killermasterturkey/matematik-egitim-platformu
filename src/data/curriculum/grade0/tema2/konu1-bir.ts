// DESTEK SINIFI - TEMA 2 - KONU 1: BİR (1) Sayısı
// En basit sayı: BİR - Çok detaylı ve sevgi dolu
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep, visualHelpers } from '../../helpers';

export const konu1Bir: Topic = {
  id: 'bir-sayisi',
  title: 'BİR (1) Sayısı',
  description: 'Bir Tane - Tek - Yalnız',
  emoji: '1️⃣',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['bir', '1', 'tek', 'tane', 'yalnız'],
  objectives: [
    'BİR sayısını tanır',
    '1 rakamını tanır',
    'Bir tane kavramını anlar',
    'Bir parmak gösterir',
    'Tek nesneyi sayar'
  ],
  content: {
    introduction: `Merhaba canım! 💝

Bugün BİR sayısını öğreneceğiz!

1️⃣ BİR!
Bir tane!
Tek!

Çok kolay! 🌟
Haydi başlayalım!`,

    motivationQuote: 'BİR çok kolay! Sen bir tane zeki çocuksun! Aferin! 💝',

    funFacts: [
      '☝️ Bir parmak böyle! ☝️',
      '❤️ Bir kalp! Seni seviyorum! ❤️',
      '☀️ Bir güneş var! ☀️',
      '🌙 Bir ay var! 🌙',
      '👃 Bir burnun var!',
      '👄 Bir ağzın var!',
      '1️⃣ BİR en küçük sayı!'
    ],

    steps: [
      // ADIM 1: BİR Nedir?
      createStep(
        '1️⃣ BİR Nedir?',
        `BİR! 1️⃣

BİR = Tek tane!
BİR = Yalnız!
BİR = Sadece bir!

Bak:
☝️ Bir parmak
🍎 Bir elma
❤️ Bir kalp
⭐ Bir yıldız

BİR TANE! 1️⃣`,
        'Bir tane demek tek demek!',
        {
          visual: `
╔═══════════════════╗
║                   ║
║      1️⃣ BİR      ║
║                   ║
║      ☝️           ║
║   BİR PARMAK      ║
║                   ║
╚═══════════════════╝

🍎 = BİR ELMA
❤️ = BİR KALP
⭐ = BİR YILDIZ`,
          tip: 'Parmağını kaldır! Bir! ☝️',
          examples: [
            createExample(
              'Kaç parmak? ☝️',
              'Bir parmak',
              'Aferin! Bir parmak! ☝️',
              '☝️ = BİR PARMAK = 1'
            ),
            createExample(
              'Kaç elma? 🍎',
              'Bir elma',
              'Harika! Bir elma! 🍎',
              '🍎 = BİR ELMA = 1'
            ),
            createExample(
              'Kaç kalp? ❤️',
              'Bir kalp',
              'Süper! Bir kalp! ❤️',
              '❤️ = BİR KALP = 1'
            )
          ]
        }
      ),

      // ADIM 2: BİR Rakamı
      createStep(
        '✏️ BİR Rakamı: 1',
        `BİR sayısının rakamı: 1

Bak nasıl yazılır:
1 = Düz çizgi!
Yukarıdan aşağıya!

   |
   |
   |

Çok kolay!
Bir çizgi = 1 ✏️`,
        '1 rakamı düz bir çizgi gibi!',
        {
          visual: `
╔═══════════════════╗
║   1 NASIL YAZILIR?║
╠═══════════════════╣
║                   ║
║       |           ║
║       |           ║
║       |           ║
║       1           ║
║                   ║
║  Yukarıdan aşağı! ║
╚═══════════════════╝

✏️ HAVADA YAZ:
Parmağınla havada 1 yaz!`,
          tip: 'Havada yaz! Yukarıdan aşağı! ✏️',
          examples: [
            createExample(
              '1 nasıl yazılır?',
              'Düz çizgi, yukarıdan aşağı',
              'Aferin! Düz bir çizgi! | = 1',
              '| = 1'
            ),
            createExample(
              'Hangi rakam? 1',
              'Bir',
              'Harika! Bu bir! 1 = BİR',
              '1 = BİR'
            )
          ]
        }
      ),

      // ADIM 3: BİR Parmak
      createStep(
        '☝️ BİR Parmak',
        `BİR PARMAK! ☝️

Elini aç!
Bir parmak kaldır!
☝️ BİR!

Parmakla BİR göster!
İşaret parmağı!
Yukarı kaldır!

☝️ = BİR = 1`,
        'Bir parmak göster!',
        {
          visual: `
╔════════════════════╗
║   BİR PARMAK       ║
╠════════════════════╣
║                    ║
║       ☝️           ║
║                    ║
║   İŞARET PARMAĞI   ║
║   YUKARI KALK!     ║
║                    ║
║    ☝️ = 1️⃣        ║
╚════════════════════╝`,
          tip: 'İşaret parmağını kaldır! ☝️',
          examples: [
            createExample(
              'BİR nasıl gösterilir?',
              'Bir parmak ☝️',
              'Süper! Bir parmak! ☝️',
              '☝️ = BİR = 1'
            ),
            createExample(
              'Kaç parmak? ☝️',
              'Bir',
              'Aferin! Bir parmak! 1',
              '☝️ = 1'
            )
          ]
        }
      ),

      // ADIM 4: BİR Tane Nesneler
      createStep(
        '🍎 BİR Tane Nesneler',
        `BİR TANE NESNELER! 🍎

Etrafında bak!
Bir tane ne var?

🍎 Bir elma
🌙 Bir ay
☀️ Bir güneş
👃 Bir burun
👄 Bir ağız
💝 Bir kalp

BİR TANE! 1️⃣`,
        'Bir tane olanları bul!',
        {
          visual: `
╔═══════════════════╗
║  BİR TANE OLANLAR ║
╠═══════════════════╗
║                   ║
║  ☀️ Bir güneş    ║
║  🌙 Bir ay       ║
║  👃 Bir burun    ║
║  👄 Bir ağız     ║
║  💝 Bir kalp     ║
║                   ║
╚═══════════════════╝

Hepsi BİR tane! 1️⃣`,
          tip: 'Etrafına bak! Bir tane olanları bul! 👀',
          examples: [
            createExample(
              'Kaç güneş var? ☀️',
              'Bir güneş',
              'Harika! Bir güneş var! ☀️',
              '☀️ = BİR = 1'
            ),
            createExample(
              'Kaç ağzın var? 👄',
              'Bir ağız',
              'Aferin! Bir ağzın var! 👄',
              '👄 = BİR = 1'
            ),
            createExample(
              'Kaç burnun var? 👃',
              'Bir burun',
              'Süper! Bir burnun var! 👃',
              '👃 = BİR = 1'
            )
          ]
        }
      ),

      // ADIM 5: BİR Taneli Gruplar
      createStep(
        '📦 BİR Taneli Gruplar',
        `BİR TANELİ GRUPLAR! 📦

Bir kutuda bir tane!

📦 → 🍎 Bir elma
📦 → 🍌 Bir muz
📦 → ⭐ Bir yıldız
📦 → 💎 Bir elmas

Her kutuda BİR tane! 1️⃣`,
        'Her grupta bir tane!',
        {
          visual: `
╔═══╗     ╔═══╗
║ 🍎 ║     ║ 🍌 ║
╚═══╝     ╚═══╝
 BİR       BİR

╔═══╗     ╔═══╗
║ ⭐ ║     ║ 💎 ║
╚═══╝     ╚═══╝
 BİR       BİR

Hepsi BİR tane! 1️⃣`,
          tip: 'Her kutuda bir tane! 📦',
          examples: [
            createExample(
              'Kutuda kaç elma? 📦🍎',
              'Bir elma',
              'Bravo! Bir elma! 🍎',
              '📦 → 🍎 = BİR'
            ),
            createExample(
              'Kutuda kaç yıldız? 📦⭐',
              'Bir yıldız',
              'Aferin! Bir yıldız! ⭐',
              '📦 → ⭐ = BİR'
            )
          ]
        }
      ),

      // ADIM 6: BİR ve Sesler
      createStep(
        '🎵 BİR Sesi',
        `BİR SESİ! 🎵

BİR diye söyle!
BBB-İİİ-RRR!

1 = BİR

Sesli söyle:
"Bir elma!" 🍎
"Bir kalp!" ❤️
"Bir yıldız!" ⭐

Yüksek sesle: BİR! 🎵`,
        'Bir sesini söyle!',
        {
          visual: `
╔═══════════════════╗
║   SÖYLEYELİM!     ║
╠═══════════════════╣
║                   ║
║   1 = BİR 🎵      ║
║                   ║
║  🍎 = BİR ELMA    ║
║  ❤️ = BİR KALP    ║
║  ⭐ = BİR YILDIZ  ║
║                   ║
╚═══════════════════╝`,
          tip: 'Yüksek sesle söyle: BİR! 🎵',
          examples: [
            createExample(
              '1 nasıl okunur?',
              'Bir',
              'Harika! BİR! 🎵',
              '1 = BİR'
            ),
            createExample(
              'Bir elma nasıl söylenir?',
              'BİR ELMA',
              'Aferin! BİR ELMA! 🍎',
              '🍎 = BİR ELMA'
            )
          ]
        }
      ),

      // ADIM 7: BİR Oyunları
      createStep(
        '🎮 BİR Oyunları',
        `BİR OYUNLARI! 🎮

OYUN 1: Bir tane bul!
Odanda bir tane ne var?

OYUN 2: Bir göster!
Parmakla bir göster! ☝️

OYUN 3: Bir say!
Bir elma say! 🍎

OYUN 4: Bir yaz!
1 rakamını yaz! ✏️

Çok eğlenceli! 🎉`,
        'Oyun oyna! Bir öğren!',
        {
          visual: `
╔═══════════════════╗
║   BİR OYUNLARI    ║
╠═══════════════════╣
║                   ║
║ 👀 BUL: Bir tane! ║
║ ☝️ GÖSTER: Bir!  ║
║ 🔢 SAY: Bir!     ║
║ ✏️ YAZ: 1        ║
║                   ║
╚═══════════════════╝`,
          tip: 'Her gün bir oyunu oyna! 🎮'
        }
      ),

      // ADIM 8: Pratik Zamanı
      createStep(
        '🏆 Pratik Zamanı!',
        `Harika gidiyorsun! 💝

BİR ALIŞTIRMALARI:

1. Odanda BİR tane neler var?
   • Bir yatak? 🛏️
   • Bir kapı? 🚪
   • Bir pencere? 🪟

2. Parmakla BİR göster!
   ☝️ İşaret parmağı!

3. Havada 1 yaz!
   ✏️ Düz çizgi!

4. Yüksek sesle söyle!
   🎵 "BİR!"

SEN BİR USTASI OLDUN! 🌟`,
        'Pratik yap! Bir öğren!',
        {
          visual: `
EVDE ALIŞTIRMA:

👀 ETRAFINA BAK:
• Kaç yatak var? 🛏️
• Kaç kapı var? 🚪
• Kaç burun var? 👃

☝️ GÖSTER:
Bir parmak!

✏️ YAZ:
1 rakamı!`,
          tip: 'Her gün bir alıştırması yap! 📝'
        }
      )
    ],

    practiceQuestions: [
      createVisualQuestion(
        'Kaç parmak? ☝️',
        '☝️',
        ['Bir ☝️', 'İki ✌️', 'Üç 🤟'],
        'Bir ☝️',
        'Aferin! Bir parmak! ☝️',
        1
      ),

      createVisualQuestion(
        'Kaç elma? 🍎',
        '🍎',
        ['Bir 1️⃣', 'İki 2️⃣', 'Üç 3️⃣'],
        'Bir 1️⃣',
        'Harika! Bir elma! 🍎',
        1
      ),

      createVisualQuestion(
        'Kaç kalp? ❤️',
        '❤️',
        ['Bir 1️⃣', 'İki 2️⃣', 'Üç 3️⃣'],
        'Bir 1️⃣',
        'Süper! Bir kalp! ❤️',
        1
      ),

      createMultipleChoice(
        'Hangi rakam BİR?',
        ['1', '2', '3', '4'],
        '1',
        'Bravo! 1 = BİR! 1️⃣',
        '1 = BİR',
        1,
        '1 rakamı düz çizgi gibi!'
      ),

      createMultipleChoice(
        '1 nasıl okunur?',
        ['Bir', 'İki', 'Üç', 'Dört'],
        'Bir',
        'Aferin! 1 = BİR! 🎵',
        '1 = BİR',
        1
      ),

      createVisualQuestion(
        'Kaç yıldız? ⭐',
        '⭐',
        ['Bir 1️⃣', 'İki 2️⃣', 'Sıfır 0️⃣'],
        'Bir 1️⃣',
        'Harika! Bir yıldız! ⭐',
        1
      ),

      createVisualQuestion(
        'Kaç güneş? ☀️',
        '☀️',
        ['Bir 1️⃣', 'İki 2️⃣', 'Üç 3️⃣'],
        'Bir 1️⃣',
        'Mükemmel! Bir güneş! ☀️',
        1
      ),

      createMultipleChoice(
        'Kaç burnun var? 👃',
        ['Bir', 'İki', 'Üç'],
        'Bir',
        'Aferin! Bir burnun var! 👃',
        '👃 = BİR',
        1
      ),

      createMultipleChoice(
        'Kaç ağzın var? 👄',
        ['Bir', 'İki', 'Üç'],
        'Bir',
        'Süper! Bir ağzın var! 👄',
        '👄 = BİR',
        1
      ),

      createVisualQuestion(
        'BİR parmak hangisi?',
        '☝️  ✌️  🤟',
        ['Bir ☝️', 'İki ✌️', 'Üç 🤟'],
        'Bir ☝️',
        'Bravo! Bir parmak! ☝️',
        1
      ),

      createMultipleChoice(
        'Bir elma kaç tane? 🍎',
        ['1 tane', '2 tane', '3 tane'],
        '1 tane',
        'Harika! Bir elma = 1 tane! 🍎',
        '🍎 = 1',
        1
      ),

      createVisualQuestion(
        'Hangi sayı 1?',
        '1  2  3',
        ['1', '2', '3'],
        '1',
        'Aferin! Bu bir! 1️⃣',
        1
      )
    ],

    summary: `🎉 TEBRİKLER!

Sen muhteşemsin! 💝
BİR USTASI oldun! 1️⃣

Öğrendiklerimiz:
✅ BİR sayısını biliyorsun!
✅ 1 rakamını tanıyorsun!
✅ Bir parmak gösterebiliyorsun! ☝️
✅ Bir tane sayabiliyorsun!
✅ BİR diyebiliyorsun! 🎵

1️⃣ BİR = TEK = YALNIZ

Aferin sana! 👏
Sen bir tane harika çocuksun! 🌟`,

    nextTopicPreview: 'Sonraki konuda İKİ (2) öğreneceğiz! İki göz, iki el! 👀✋'
  }
};
