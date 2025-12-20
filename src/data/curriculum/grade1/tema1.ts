// 1. TEMA: SAYILAR VE NİCELİKLER (1) - 7 öğrenme çıktısı
import { Theme } from '../types';

export const tema1: Theme = {
  id: 'sayilar-nicelikler-1',
  title: 'Sayılar ve Nicelikler (1)',
  description: 'Rakamları ve 20\'ye kadar olan sayıları öğrenelim, nesneleri sayalım ve karşılaştıralım!',
  emoji: '🔢',
  color: 'from-green-400 to-emerald-500',
  bgColor: 'bg-green-50',
  borderColor: 'border-green-200',
  textColor: 'text-green-600',
  hours: 57,
  objectives: [
    'Rakamları ve 20\'ye kadar olan sayıları tanıma',
    'Nesneleri sayma ve gruplama',
    'Sayıları karşılaştırma',
    '100\'e kadar ritmik sayma',
    'Örüntüleri tanıma'
  ],
  keywords: ['Rakamlar', 'Sayılar', 'Sıra sayısı', 'Ritmik sayma', 'Karşılaştırma', 'Örüntüler'],
  generalizations: ['Sayılar çoklukları temsil eder.', 'Sıra sayıları bir örüntü oluşturur.'],
  topics: [
    {
      id: 'rakamlar-sayilar',
      title: 'Rakamları ve Sayıları Tanıyalım',
      description: '0-20 arası rakam ve sayıları öğrenelim',
      emoji: '🔢',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['rakam', 'sayı', 'sıfır', 'bir', 'iki'],
      content: {
        introduction: 'Merhaba küçük matematikçi! Bugün sayıların büyülü dünyasına gireceğiz. Her yerde sayılar var - parmaklarımızda, oyuncaklarımızda, her şeyde!',
        motivationQuote: 'Her büyük yolculuk küçük bir adımla başlar! 🌟',
        funFacts: [
          'Sıfır sayısını ilk Hintliler kullanmış!',
          'Parmakların tam 10 tane, çünkü 10 özel bir sayı!',
          'Gökyüzünde sayamayacağın kadar çok yıldız var!'
        ],
        steps: [
          {
            title: 'Sayılar Ne İşe Yarar?',
            content: 'Sayılar, etrafımızdaki şeyleri saymak için kullanılır. Kaç elma var? Kaç arkadaşın var? Hepsini sayılarla ifade ederiz!',
            visual: '🍎 🍎 🍎 = 3 elma',
            audio: 'Sayılar günlük hayatımızın her yerinde. Kaç yaşındasın? Kaç kardeşin var? Bunların hepsi sayılarla ifade edilir.',
            example: { question: 'Kaç yıldız var? ⭐⭐⭐', answer: '3', explanation: 'Yıldızları tek tek sayarız: 1, 2, 3. Toplam 3 yıldız!' }
          },
          {
            title: 'Rakamları Öğrenelim: 0-5',
            content: '0 hiç yok demek. 1, 2, 3, 4, 5 rakamlarını parmaklarınla göster!',
            visual: '0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣',
            audio: 'Sıfır hiçbir şey olmadığını gösterir. Bir, iki, üç, dört, beş - bunlar temel rakamlarımız.',
            example: { question: 'Elini aç, kaç parmağın var?', answer: '5', explanation: 'Bir elimizde 5 parmak var!' }
          },
          {
            title: 'Rakamları Öğrenelim: 6-10',
            content: '6, 7, 8, 9, 10 rakamlarını öğrenelim. İki elimizi kullanarak 10\'a kadar sayabiliriz!',
            visual: '6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟',
            audio: 'Altı, yedi, sekiz, dokuz, on. İki elimizdeki parmakları sayarsak 10 eder!',
            example: { question: 'İki elinde kaç parmak var?', answer: '10', explanation: '5 + 5 = 10 parmak!' }
          },
          {
            title: '11-15 Arası Sayılar',
            content: '10\'dan sonra on bir, on iki, on üç, on dört, on beş gelir.',
            visual: '11 🦋 12 🦋 13 🦋 14 🦋 15 🦋',
            audio: 'On bir demek 10 ve 1 demek. On iki, on üç... hepsi 10 ile başlar!',
            example: { question: '10 + 3 kaç eder?', answer: '13', explanation: 'On üç! 10 ve 3 bir araya gelince 13 olur.' }
          },
          {
            title: '16-20 Arası Sayılar',
            content: 'On altı, on yedi, on sekiz, on dokuz ve yirmi! 20\'ye kadar saymayı öğrendik!',
            visual: '16 🌸 17 🌸 18 🌸 19 🌸 20 🌸',
            audio: 'On altı, on yedi, on sekiz, on dokuz ve yirmi. Artık 20\'ye kadar sayabilirsin!',
            example: { question: '20\'den önceki sayı hangisi?', answer: '19', explanation: '19\'dan sonra 20 gelir!' }
          },
          {
            title: 'Sayıları Yazalım',
            content: 'Şimdi sayıları yazmayı öğrenelim. Her rakamın kendine özgü şekli var.',
            visual: '✏️ 1 2 3 4 5 6 7 8 9 10',
            audio: 'Kalemini al ve sayıları yazmaya başla. 1 bir çizgi, 2 kuğu gibi, 3 kulaklı...',
            example: { question: '5 nasıl yazılır?', answer: 'Önce yatay çizgi, sonra yarım daire', explanation: '5 rakamı özel bir şekle sahip!' }
          },
          {
            title: 'Pratik Yapalım!',
            content: 'Etrafındaki nesneleri say! Kaç kitap var? Kaç kalem var?',
            visual: '📚📚📚 = 3 kitap | ✏️✏️✏️✏️ = 4 kalem',
            audio: 'Şimdi öğrendiklerini uygula! Odandaki eşyaları say.',
            example: { question: 'Masanda 7 kalem ve 2 silgi var. Toplam kaç eşya?', answer: '9', explanation: '7 + 2 = 9 eşya!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Hangi sayı 5\'ten büyüktür?', options: ['3', '4', '7', '2'], correctAnswer: '7', explanation: '7, 5\'ten büyüktür çünkü 5-6-7 diye sayarız.' },
          { type: 'multiple-choice', question: '🍎🍎🍎🍎 Kaç elma var?', options: ['3', '4', '5', '6'], correctAnswer: '4', explanation: 'Elmaları sayalım: 1, 2, 3, 4. Toplam 4 elma!' },
          { type: 'fill-blank', question: '10\'dan sonra gelen sayı ___', correctAnswer: '11', explanation: '10, 11, 12... 10\'dan sonra 11 gelir!' },
          { type: 'multiple-choice', question: '15 nasıl okunur?', options: ['Beş', 'On', 'On beş', 'Yirmi'], correctAnswer: 'On beş', explanation: '15 = 10 + 5, yani on beş!' },
          { type: 'multiple-choice', question: 'Hangisi en küçük sayıdır?', options: ['9', '0', '5', '3'], correctAnswer: '0', explanation: 'Sıfır en küçük sayıdır, hiçbir şey yok demektir!' },
          { type: 'fill-blank', question: '⭐⭐⭐⭐⭐⭐⭐ = ___ yıldız', correctAnswer: '7', explanation: 'Yıldızları sayalım: 1,2,3,4,5,6,7!' },
          { type: 'multiple-choice', question: '20\'den önceki sayı hangisi?', options: ['21', '18', '19', '17'], correctAnswer: '19', explanation: '...18, 19, 20. 19\'dan sonra 20 gelir!' },
          { type: 'fill-blank', question: '8\'den sonra ___ gelir', correctAnswer: '9', explanation: '7, 8, 9, 10... 8\'den sonra 9 gelir!' },
          { type: 'multiple-choice', question: 'İki elde kaç parmak var?', options: ['5', '8', '10', '12'], correctAnswer: '10', explanation: 'Her elde 5 parmak, 5+5=10 parmak!' },
          { type: 'multiple-choice', question: '🌺🌺🌺🌺🌺🌺 Kaç çiçek?', options: ['4', '5', '6', '7'], correctAnswer: '6', explanation: 'Çiçekleri sayalım: 1,2,3,4,5,6. Toplam 6 çiçek!' }
        ]
      }
    },
    {
      id: 'nesneleri-sayma',
      title: 'Nesneleri Sayalım ve Gruplayalım',
      description: 'Dağınık ve düzenli nesneleri sayma',
      emoji: '🎯',
      duration: '40 dk',
      difficulty: 1,
      keywords: ['sayma', 'gruplama', 'düzenli', 'dağınık'],
      content: {
        introduction: 'Nesneleri saymak çok eğlenceli! Bazen düzenli sırada, bazen dağınık olabilirler. Hepsini saymayı öğreneceğiz!',
        motivationQuote: 'Her nesne önemli, hiçbirini atlamadan sayalım! 🎯',
        funFacts: [
          'Arılar bal yaparken petek sayısını bilir!',
          'Karıncalar yiyecekleri sayarak taşır!',
          'Yunuslar sürüdeki arkadaşlarını sayabilir!'
        ],
        steps: [
          {
            title: 'Düzenli Nesneleri Sayma',
            content: 'Sırayla dizilmiş nesneleri saymak kolaydır. Baştan başla ve tek tek say!',
            visual: '🔴 🔴 🔴 🔴 🔴 = 5 top',
            audio: 'Düzenli dizilmiş nesneleri saymak için baştan başla: 1, 2, 3, 4, 5!',
            example: { question: '🟢🟢🟢🟢 Kaç yeşil top?', answer: '4', explanation: 'Baştan sayalım: 1, 2, 3, 4!' }
          },
          {
            title: 'Dağınık Nesneleri Sayma',
            content: 'Dağınık nesneleri sayarken, saydıklarını işaretle veya grupla!',
            visual: '🍎  🍎    🍎\n   🍎  🍎 = 5 elma',
            audio: 'Dağınık nesneleri sayarken parmağınla işaret et, böylece atlama olmuyor!',
            example: { question: 'Dağınık 6 topu nasıl sayarsın?', answer: 'Parmakla işaret ederek', explanation: 'Her birini işaret et ve say!' }
          },
          {
            title: 'Gruplar Halinde Sayma',
            content: 'Nesneleri 2\'li, 5\'li veya 10\'lu gruplar halinde saymak daha hızlıdır!',
            visual: '🟡🟡 | 🟡🟡 | 🟡🟡 = 2+2+2 = 6',
            audio: 'İkişer ikişer sayalım: 2, 4, 6! Bu daha hızlı!',
            example: { question: '🔵🔵 🔵🔵 🔵🔵 🔵🔵 kaç top?', answer: '8', explanation: '2+2+2+2 = 8 veya 2,4,6,8!' }
          },
          {
            title: 'Parçaları Birleştirme',
            content: 'Farklı gruplardaki nesneleri topla ve sonucu bul!',
            visual: '🍎🍎🍎 + 🍎🍎 = 3 + 2 = 5',
            audio: 'Bir grupta 3, diğerinde 2 var. Toplarsak 5 eder!',
            example: { question: '4 kırmızı ve 3 mavi top. Toplam?', answer: '7', explanation: '4 + 3 = 7 top!' }
          },
          {
            title: 'Sayma Stratejileri',
            content: 'Dokunarak, işaretleyerek veya göz ile takip ederek sayabiliriz.',
            visual: '👆 Dokun ve say! 👀 Gözle takip et!',
            audio: 'En iyi strateji nesnelere dokunarak saymaktır.',
            example: { question: 'En güvenli sayma yolu?', answer: 'Dokunarak sayma', explanation: 'Dokunarak sayınca atlama olmaz!' }
          },
          {
            title: 'Hadi Pratik Yapalım!',
            content: 'Şimdi farklı şekillerde dizilmiş nesneleri sayalım!',
            visual: '⭐⭐⭐\n⭐⭐⭐\n⭐⭐⭐ = 9 yıldız',
            audio: 'Satır satır sayalım: 3, 6, 9! Ya da tek tek: 1,2,3,4,5,6,7,8,9!',
            example: { question: '3 satırda 3\'er yıldız. Toplam?', answer: '9', explanation: '3+3+3 = 9 yıldız!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '🔴🔴🔴 🔴🔴 Kaç kırmızı top?', options: ['4', '5', '6', '7'], correctAnswer: '5', explanation: '3 + 2 = 5 top!' },
          { type: 'fill-blank', question: '🟢🟢 🟢🟢 🟢🟢 = ___ yeşil top', correctAnswer: '6', explanation: '2+2+2 = 6!' },
          { type: 'multiple-choice', question: 'Dağınık nesneleri sayarken ne yapmalıyız?', options: ['Hızlı saymalı', 'İşaretleyerek saymalı', 'Tahmin etmeli', 'Saymamalı'], correctAnswer: 'İşaretleyerek saymalı', explanation: 'İşaretleyerek saymak atlamamızı önler!' },
          { type: 'multiple-choice', question: '⭐⭐⭐⭐ ⭐⭐⭐ Kaç yıldız?', options: ['5', '6', '7', '8'], correctAnswer: '7', explanation: '4 + 3 = 7 yıldız!' },
          { type: 'fill-blank', question: '5 elma ve 3 armut = ___ meyve', correctAnswer: '8', explanation: '5 + 3 = 8 meyve!' },
          { type: 'multiple-choice', question: '🟡🟡🟡🟡🟡 🟡🟡🟡🟡🟡 Kaç sarı top?', options: ['8', '9', '10', '11'], correctAnswer: '10', explanation: '5 + 5 = 10 top!' },
          { type: 'fill-blank', question: '🔵🔵 🔵🔵 🔵🔵 🔵🔵 = ___', correctAnswer: '8', explanation: '2+2+2+2 = 8!' },
          { type: 'multiple-choice', question: 'Gruplar halinde saymak neden iyidir?', options: ['Daha yavaş', 'Daha hızlı', 'Daha zor', 'Gereksiz'], correctAnswer: 'Daha hızlı', explanation: 'Gruplar halinde saymak daha hızlıdır!' },
          { type: 'multiple-choice', question: '7 kuş ve 2 kuş daha geldi. Toplam?', options: ['7', '8', '9', '10'], correctAnswer: '9', explanation: '7 + 2 = 9 kuş!' },
          { type: 'fill-blank', question: '🌸🌸🌸 🌸🌸🌸 🌸🌸🌸 🌸 = ___', correctAnswer: '10', explanation: '3+3+3+1 = 10 çiçek!' }
        ]
      }
    },
    {
      id: 'sira-sayilari',
      title: 'Sıra Sayılarını Öğrenelim',
      description: 'Birinci, ikinci, üçüncü... sıra sayıları',
      emoji: '🏆',
      duration: '35 dk',
      difficulty: 1,
      keywords: ['sıra', 'birinci', 'ikinci', 'sonuncu'],
      content: {
        introduction: 'Yarışta kim birinci oldu? Sırada kaçıncısın? Sıra sayıları bunları söyler!',
        motivationQuote: 'Birinci olmak güzel ama katılmak daha önemli! 🏅',
        funFacts: [
          'Olimpiyatlarda ilk 3\'e madalya verilir!',
          'Haftanın birinci günü Pazartesi\'dir!',
          'Yılın birinci ayı Ocak\'tır!'
        ],
        steps: [
          {
            title: 'Sıra Sayısı Nedir?',
            content: 'Sıra sayıları, nesnelerin veya kişilerin sıradaki yerini gösterir.',
            visual: '🥇 1. = Birinci | 🥈 2. = İkinci | 🥉 3. = Üçüncü',
            audio: 'Sıra sayıları bir yarışta kimin kaçıncı olduğunu söyler.',
            example: { question: 'Yarışta 1. olan kişiye ne denir?', answer: 'Birinci', explanation: '1. = Birinci, şampiyon!' }
          },
          {
            title: '1-5 Arası Sıra Sayıları',
            content: 'Birinci (1.), İkinci (2.), Üçüncü (3.), Dördüncü (4.), Beşinci (5.)',
            visual: '1️⃣Birinci 2️⃣İkinci 3️⃣Üçüncü 4️⃣Dördüncü 5️⃣Beşinci',
            audio: 'Birinci, ikinci, üçüncü, dördüncü, beşinci. Bunları ezberle!',
            example: { question: '3. sıradaki kişi nasıl söylenir?', answer: 'Üçüncü', explanation: '3. = Üçüncü!' }
          },
          {
            title: '6-10 Arası Sıra Sayıları',
            content: 'Altıncı (6.), Yedinci (7.), Sekizinci (8.), Dokuzuncu (9.), Onuncu (10.)',
            visual: '6️⃣Altıncı 7️⃣Yedinci 8️⃣Sekizinci 9️⃣Dokuzuncu 🔟Onuncu',
            audio: 'Altıncı, yedinci, sekizinci, dokuzuncu, onuncu!',
            example: { question: '10. sıradaki?', answer: 'Onuncu', explanation: '10. = Onuncu!' }
          },
          {
            title: 'Sıra Sayılarını Kullanalım',
            content: 'Günlük hayatta sıra sayılarını çok kullanırız. Sırada kaçıncısın?',
            visual: '🧒1. 👧2. 👦3. 👧4. 🧒5.',
            audio: 'Market sırasında, okul sırasında hep sıra sayıları kullanırız.',
            example: { question: '5 kişilik sırada en sondaki kaçıncı?', answer: 'Beşinci', explanation: 'Son kişi 5. yani beşinci!' }
          },
          {
            title: 'Sonuncu ve Ortadaki',
            content: 'En sonda olan "sonuncu", ortada olan "ortadaki"dir.',
            visual: '🐶 🐱 🐰 🐻 🐼 - Ortadaki: 🐰 (3.)',
            audio: '5 hayvandan ortadaki 3. sıradadır.',
            example: { question: '7 kişide ortadaki kaçıncı?', answer: 'Dördüncü', explanation: '1,2,3,[4],5,6,7 - 4. ortada!' }
          },
          {
            title: 'Pratik Zamanı!',
            content: 'Şimdi sıra sayılarıyla ilgili sorular çözelim!',
            visual: '🎯 Hedef: Sıra sayılarını öğrenmek!',
            audio: 'Artık sıra sayılarını çok iyi biliyorsun!',
            example: { question: 'Pazartesi haftanın kaçıncı günü?', answer: 'Birinci', explanation: 'Pazartesi = 1. gün!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Yarışta 2. olan kişi nasıl söylenir?', options: ['Birinci', 'İkinci', 'Üçüncü', 'Dördüncü'], correctAnswer: 'İkinci', explanation: '2. = İkinci!' },
          { type: 'fill-blank', question: '5. = ___', correctAnswer: 'Beşinci', explanation: '5. sıra = Beşinci!' },
          { type: 'multiple-choice', question: '🥇🥈🥉 Bronz madalya kaçıncıya verilir?', options: ['1.', '2.', '3.', '4.'], correctAnswer: '3.', explanation: 'Bronz madalya 3. yani üçüncüye verilir!' },
          { type: 'fill-blank', question: 'Sekizinci = ___. sıra', correctAnswer: '8', explanation: 'Sekizinci = 8. sıra!' },
          { type: 'multiple-choice', question: '10 kişilik sırada en sondaki kaçıncı?', options: ['Birinci', 'Beşinci', 'Onuncu', 'Yirminci'], correctAnswer: 'Onuncu', explanation: '10 kişide sonuncu = 10. = Onuncu!' },
          { type: 'fill-blank', question: '7. = ___', correctAnswer: 'Yedinci', explanation: '7. = Yedinci!' },
          { type: 'multiple-choice', question: 'Haftanın 3. günü hangisi?', options: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe'], correctAnswer: 'Çarşamba', explanation: 'Pzt(1), Salı(2), Çarşamba(3)!' },
          { type: 'multiple-choice', question: 'Altıncı hangi sayıdır?', options: ['5', '6', '7', '8'], correctAnswer: '6', explanation: 'Altıncı = 6!' },
          { type: 'fill-blank', question: '4. = ___', correctAnswer: 'Dördüncü', explanation: '4. = Dördüncü!' },
          { type: 'multiple-choice', question: '9 kişide ortadaki kaçıncı?', options: ['3.', '4.', '5.', '6.'], correctAnswer: '5.', explanation: '1,2,3,4,[5],6,7,8,9 - 5. ortada!' }
        ]
      }
    },
    {
      id: 'karsilastirma',
      title: 'Sayıları Karşılaştıralım',
      description: 'Az, çok, eşit kavramlarını öğrenelim',
      emoji: '⚖️',
      duration: '40 dk',
      difficulty: 1,
      keywords: ['çok', 'az', 'eşit', 'karşılaştırma'],
      content: {
        introduction: 'Hangisi daha çok? Hangisi daha az? Karşılaştırma yapmayı öğrenelim!',
        motivationQuote: 'Karşılaştırarak dünyayı daha iyi anlarız! ⚖️',
        funFacts: [
          'Filler en ağır kara hayvanlarıdır!',
          'Karıncalar kendi ağırlıklarının 50 katını taşır!',
          'En uzun hayvan mavi balinadır!'
        ],
        steps: [
          {
            title: 'Çok ve Az',
            content: 'Sayısı fazla olan "çok", sayısı az olan "az"dır.',
            visual: '🍎🍎🍎🍎🍎 > 🍎🍎 (5 çok, 2 az)',
            audio: '5 elma, 2 elmadan çoktur. 2 elma, 5 elmadan azdır.',
            example: { question: '7 ve 3\'ten hangisi çok?', answer: '7', explanation: '7 > 3, yani 7 daha çoktur!' }
          },
          {
            title: 'Daha Çok ve Daha Az',
            content: 'İki grubu karşılaştırırken "daha çok" ve "daha az" deriz.',
            visual: '🔵🔵🔵🔵🔵🔵 vs 🔴🔴🔴🔴 (Mavi daha çok!)',
            audio: '6 mavi top, 4 kırmızı toptan daha çoktur.',
            example: { question: '8 kuş ve 5 kuş. Hangisi daha çok?', answer: '8 kuş', explanation: '8 > 5, 8 kuş daha çok!' }
          },
          {
            title: 'Eşit',
            content: 'İki grup aynı sayıda ise "eşit"tir.',
            visual: '🟢🟢🟢 = 🟡🟡🟡 (3 = 3, Eşit!)',
            audio: 'Her iki grupta da 3 tane var, yani eşitler!',
            example: { question: '4 elma ve 4 armut eşit mi?', answer: 'Evet', explanation: '4 = 4, eşitler!' }
          },
          {
            title: 'Büyük ve Küçük Sayılar',
            content: 'Sayı doğrusunda sağdaki sayı daha büyüktür.',
            visual: '1 2 3 4 5 6 7 8 9 10 → (10 en büyük)',
            audio: 'Sayarken sonra gelen sayı daha büyüktür.',
            example: { question: '6 mı 9 mu büyük?', answer: '9', explanation: '9 > 6, 9 daha büyük!' }
          },
          {
            title: 'Karşılaştırma Sembolleri',
            content: '> büyüktür, < küçüktür, = eşittir anlamına gelir.',
            visual: '5 > 3 (5 büyük 3) | 2 < 7 (2 küçük 7) | 4 = 4',
            audio: 'Timsahın ağzı büyük sayıya bakar! 5 > 3',
            example: { question: '8 ? 6 arasına ne gelir?', answer: '>', explanation: '8 > 6, 8 büyüktür 6!' }
          },
          {
            title: 'Pratik Yapalım!',
            content: 'Şimdi bol bol karşılaştırma yapalım!',
            visual: '🎯 Karşılaştırma ustası ol!',
            audio: 'Karşılaştırma yapmayı çok iyi öğrendin!',
            example: { question: '10 ve 10 için hangi sembol?', answer: '=', explanation: '10 = 10, eşitler!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Hangisi daha çok? 8 mi 5 mi?', options: ['5', '8', 'Eşit', 'Belli değil'], correctAnswer: '8', explanation: '8 > 5, 8 daha çok!' },
          { type: 'fill-blank', question: '6 ___ 9 (>, < veya =)', correctAnswer: '<', explanation: '6 < 9, 6 küçüktür 9!' },
          { type: 'multiple-choice', question: '🍎🍎🍎 ve 🍊🍊🍊 karşılaştırması?', options: ['Elma çok', 'Portakal çok', 'Eşit', 'Az'], correctAnswer: 'Eşit', explanation: '3 = 3, eşitler!' },
          { type: 'fill-blank', question: '15 ___ 12', correctAnswer: '>', explanation: '15 > 12, 15 büyüktür!' },
          { type: 'multiple-choice', question: 'En küçük sayı hangisi?', options: ['7', '3', '9', '5'], correctAnswer: '3', explanation: '3 en küçük sayı!' },
          { type: 'multiple-choice', question: '4 kuş ve 7 kuş. Hangisi az?', options: ['4 kuş', '7 kuş', 'Eşit', 'İkisi de'], correctAnswer: '4 kuş', explanation: '4 < 7, 4 kuş daha az!' },
          { type: 'fill-blank', question: '10 ___ 10', correctAnswer: '=', explanation: '10 = 10, eşit!' },
          { type: 'multiple-choice', question: '🔵🔵🔵🔵🔵 ve 🔴🔴🔴 hangisi daha çok?', options: ['Mavi', 'Kırmızı', 'Eşit', 'Yok'], correctAnswer: 'Mavi', explanation: '5 > 3, mavi daha çok!' },
          { type: 'fill-blank', question: '2 ___ 8', correctAnswer: '<', explanation: '2 < 8, 2 küçüktür!' },
          { type: 'multiple-choice', question: '11 ve 11 nasıl karşılaştırılır?', options: ['11 > 11', '11 < 11', '11 = 11', '11 ≠ 11'], correctAnswer: '11 = 11', explanation: 'Aynı sayılar eşittir!' }
        ]
      }
    },
    {
      id: 'ritmik-sayma',
      title: 'Ritmik Sayma',
      description: '100\'e kadar ileriye, 20\'den geriye sayma',
      emoji: '🎵',
      duration: '35 dk',
      difficulty: 2,
      keywords: ['ritmik', 'ileri sayma', 'geri sayma', 'atlayarak'],
      content: {
        introduction: 'Şarkı söyler gibi ritmik sayalım! 2\'şer, 5\'er, 10\'ar atlayarak saymak çok eğlenceli!',
        motivationQuote: 'Sayılar bir müzik gibi, ritmi yakala! 🎵',
        funFacts: [
          'Kalbimiz dakikada 60-100 kez atar - ritmik!',
          'Saatler 5\'er 5\'er sayar: 5, 10, 15...',
          'Futbol maçı 45\'er dakikalık iki yarıdan oluşur!'
        ],
        steps: [
          {
            title: 'Birer Birer Sayma',
            content: '1, 2, 3, 4, 5... şeklinde birer birer sayarız.',
            visual: '1 ➡️ 2 ➡️ 3 ➡️ 4 ➡️ 5 ➡️ ...',
            audio: 'Bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz, on!',
            example: { question: '7\'den sonra ne gelir?', answer: '8', explanation: '7, 8, 9... birer birer!' }
          },
          {
            title: 'İkişer İkişer Sayma',
            content: '2, 4, 6, 8, 10... şeklinde ikişer atlayarak sayarız.',
            visual: '2 ➡️ 4 ➡️ 6 ➡️ 8 ➡️ 10 ➡️ 12 ➡️ 14...',
            audio: 'İki, dört, altı, sekiz, on, on iki, on dört...',
            example: { question: '6\'dan sonra ikişer sayarsak?', answer: '8', explanation: '6 + 2 = 8!' }
          },
          {
            title: 'Beşer Beşer Sayma',
            content: '5, 10, 15, 20, 25... şeklinde beşer atlayarak sayarız.',
            visual: '5 ➡️ 10 ➡️ 15 ➡️ 20 ➡️ 25 ➡️ 30...',
            audio: 'Beş, on, on beş, yirmi, yirmi beş, otuz...',
            example: { question: '15\'ten sonra beşer sayarsak?', answer: '20', explanation: '15 + 5 = 20!' }
          },
          {
            title: 'Onar Onar Sayma',
            content: '10, 20, 30, 40... şeklinde onar atlayarak sayarız.',
            visual: '10 ➡️ 20 ➡️ 30 ➡️ 40 ➡️ 50... ➡️ 100',
            audio: 'On, yirmi, otuz, kırk, elli, altmış, yetmiş, seksen, doksan, yüz!',
            example: { question: '50\'den sonra onar sayarsak?', answer: '60', explanation: '50 + 10 = 60!' }
          },
          {
            title: 'Geriye Doğru Sayma',
            content: '20\'den geriye: 20, 19, 18, 17... 1, 0!',
            visual: '20 ⬅️ 19 ⬅️ 18 ⬅️ 17... ⬅️ 1 ⬅️ 0',
            audio: 'Yirmi, on dokuz, on sekiz, on yedi... üç, iki, bir, sıfır!',
            example: { question: '15\'ten önceki sayı?', answer: '14', explanation: '15, 14, 13... geriye doğru!' }
          },
          {
            title: 'Pratik Zamanı!',
            content: 'Şimdi farklı şekillerde ritmik sayalım!',
            visual: '🎯 Ritmik sayma ustası ol!',
            audio: 'Artık her türlü ritmik sayma yapabilirsin!',
            example: { question: '100\'e kadar onar onar kaç adım?', answer: '10', explanation: '10,20,30,40,50,60,70,80,90,100 = 10 adım!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '2, 4, 6, ___ ikişer sayarken sonraki?', options: ['7', '8', '9', '10'], correctAnswer: '8', explanation: '6 + 2 = 8!' },
          { type: 'fill-blank', question: '5, 10, 15, 20, ___', correctAnswer: '25', explanation: '20 + 5 = 25!' },
          { type: 'multiple-choice', question: '10, 20, 30, ___ onar sayarken?', options: ['35', '40', '45', '50'], correctAnswer: '40', explanation: '30 + 10 = 40!' },
          { type: 'fill-blank', question: '20, 19, 18, 17, ___', correctAnswer: '16', explanation: '17 - 1 = 16, geriye sayıyoruz!' },
          { type: 'multiple-choice', question: '10\'dan geriye 7\'ye kadar kaç sayı?', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: '10, 9, 8, 7 = 3 adım geriye!' },
          { type: 'fill-blank', question: '4, 6, 8, 10, ___', correctAnswer: '12', explanation: 'İkişer: 10 + 2 = 12!' },
          { type: 'multiple-choice', question: '50, 60, 70, ___', options: ['75', '80', '85', '90'], correctAnswer: '80', explanation: '70 + 10 = 80!' },
          { type: 'fill-blank', question: '15, 10, 5, ___', correctAnswer: '0', explanation: 'Beşer geriye: 5 - 5 = 0!' },
          { type: 'multiple-choice', question: '14\'ten önce gelen (geriye sayarken)?', options: ['13', '15', '12', '16'], correctAnswer: '13', explanation: '14 - 1 = 13!' },
          { type: 'fill-blank', question: '25, 30, 35, 40, ___', correctAnswer: '45', explanation: 'Beşer: 40 + 5 = 45!' }
        ]
      }
    },
    {
      id: 'oruntuler',
      title: 'Örüntüleri Keşfedelim',
      description: 'Sayı ve şekil örüntüleri',
      emoji: '🔄',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['örüntü', 'tekrar', 'dizi', 'kural'],
      content: {
        introduction: 'Örüntüler tekrar eden düzenlerdir. Doğada, müzikte, her yerde örüntüler var!',
        motivationQuote: 'Örüntüleri bulan, matematiğin sırlarını çözer! 🔄',
        funFacts: [
          'Arı petekleri altıgen örüntüsündedir!',
          'Zebra çizgileri bir örüntüdür!',
          'Kalp atışımız bile bir örüntü izler!'
        ],
        steps: [
          {
            title: 'Örüntü Nedir?',
            content: 'Örüntü, belirli bir kurala göre tekrar eden dizilerdir.',
            visual: '🔴🔵🔴🔵🔴🔵 (Kırmızı-Mavi tekrarı)',
            audio: 'Kırmızı, mavi, kırmızı, mavi... Bu bir örüntü!',
            example: { question: '🔴🔵🔴🔵🔴__ sonraki?', answer: '🔵', explanation: 'Kırmızı-mavi sırası, sonra mavi gelir!' }
          },
          {
            title: 'Şekil Örüntüleri',
            content: 'Şekiller de belirli bir sırayla tekrar edebilir.',
            visual: '⭐🌙⭐🌙⭐🌙 | 🔺🔺🔵🔺🔺🔵',
            audio: 'Yıldız-ay tekrarı veya üçgen-üçgen-daire tekrarı!',
            example: { question: '🔺🔵🔺🔵🔺__ sonraki?', answer: '🔵', explanation: 'Üçgen-daire sırası, sonra daire!' }
          },
          {
            title: 'Sayı Örüntüleri - Artan',
            content: 'Sayılar büyüyerek bir örüntü oluşturabilir.',
            visual: '2, 4, 6, 8, 10... (+2 örüntüsü)',
            audio: 'Her seferinde 2 ekleniyor: 2, 4, 6, 8...',
            example: { question: '1, 2, 3, 4, __ sonraki?', answer: '5', explanation: 'Birer artıyor, sonra 5!' }
          },
          {
            title: 'Sayı Örüntüleri - Azalan',
            content: 'Sayılar küçülerek de örüntü oluşturur.',
            visual: '10, 8, 6, 4, 2... (-2 örüntüsü)',
            audio: 'Her seferinde 2 çıkıyor: 10, 8, 6, 4...',
            example: { question: '20, 15, 10, __ sonraki?', answer: '5', explanation: 'Beşer azalıyor, sonra 5!' }
          },
          {
            title: 'Örüntü Kuralını Bulma',
            content: 'Örüntüdeki kuralı bulmak için ardışık elemanları karşılaştır.',
            visual: '3, 6, 9, 12... Kural: +3',
            audio: 'Her eleman arasındaki fark 3, yani +3 kuralı!',
            example: { question: '5, 10, 15, 20 kuralı?', answer: '+5', explanation: 'Her seferinde 5 ekleniyor!' }
          },
          {
            title: 'Örüntü Tamamlama',
            content: 'Eksik elemanları bularak örüntüyü tamamla!',
            visual: '🌸🌼🌸🌼?🌼 → 🌸 olmalı!',
            audio: 'Kuralı bul ve eksik elemanı tamamla!',
            example: { question: '2, __, 6, 8 eksik sayı?', answer: '4', explanation: 'İkişer artıyor: 2, 4, 6, 8!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '🔴🔵🔴🔵🔴__ sonraki?', options: ['🔴', '🔵', '🟢', '🟡'], correctAnswer: '🔵', explanation: 'Kırmızı-mavi sırası!' },
          { type: 'fill-blank', question: '2, 4, 6, 8, ___', correctAnswer: '10', explanation: 'İkişer artıyor: 8 + 2 = 10!' },
          { type: 'multiple-choice', question: '⭐⭐🌙⭐⭐🌙⭐⭐__ sonraki?', options: ['⭐', '🌙', '☀️', '🌍'], correctAnswer: '🌙', explanation: 'Yıldız-yıldız-ay sırası!' },
          { type: 'fill-blank', question: '20, 18, 16, 14, ___', correctAnswer: '12', explanation: 'İkişer azalıyor: 14 - 2 = 12!' },
          { type: 'multiple-choice', question: '5, 10, 15, 20, ___ kuralı ne?', options: ['+3', '+4', '+5', '+6'], correctAnswer: '+5', explanation: 'Her seferinde 5 ekleniyor!' },
          { type: 'fill-blank', question: '1, 3, 5, 7, ___', correctAnswer: '9', explanation: 'İkişer artıyor (tek sayılar): 7 + 2 = 9!' },
          { type: 'multiple-choice', question: '🔺🔵🔺🔵🔺🔵 hangi örüntü?', options: ['Üçlü', 'İkili', 'Dörtlü', 'Tekli'], correctAnswer: 'İkili', explanation: 'Üçgen-daire ikili tekrar!' },
          { type: 'fill-blank', question: '3, 6, 9, ___, 15', correctAnswer: '12', explanation: 'Üçer artıyor: 9 + 3 = 12!' },
          { type: 'multiple-choice', question: '🌈🌈⭐🌈🌈⭐ sonraki 2 eleman?', options: ['🌈🌈', '⭐⭐', '🌈⭐', '⭐🌈'], correctAnswer: '🌈🌈', explanation: 'Gökkuşağı-gökkuşağı-yıldız tekrarı!' },
          { type: 'fill-blank', question: '100, 90, 80, 70, ___', correctAnswer: '60', explanation: 'Onar azalıyor: 70 - 10 = 60!' }
        ]
      }
    },
    {
      id: 'tahmin-etme',
      title: 'Sayıları Tahmin Edelim',
      description: '20\'ye kadar olan nesnelerin sayısını tahmin etme',
      emoji: '🎲',
      duration: '35 dk',
      difficulty: 2,
      keywords: ['tahmin', 'sayma', 'karşılaştırma', 'strateji'],
      content: {
        introduction: 'Bazen saymadan önce tahmin yapmak eğlencelidir! Gözlerimizi kullanarak tahmin etmeyi öğrenelim!',
        motivationQuote: 'İyi bir tahmin, matematiğin ilk adımıdır! 🎲',
        funFacts: [
          'Bilim insanları da deney yapmadan önce tahmin yapar!',
          'Hava durumu tahmini de matematik kullanır!',
          'Arkeologlar kazı yapmadan önce tahmin yapar!'
        ],
        steps: [
          {
            title: 'Tahmin Nedir?',
            content: 'Tahmin, saymadan önce "yaklaşık kaç tane" diye düşünmektir.',
            visual: '🍎🍎🍎🍎🍎🍎 → Tahmin: 6? ✓',
            audio: 'Elmalara bak, kaç tane olabilir diye düşün!',
            example: { question: 'Tahmin etmek neden önemli?', answer: 'Hızlı fikir edinmek için', explanation: 'Tahmin, hızlı karar vermemize yardımcı olur!' }
          },
          {
            title: 'Referans Kullanma',
            content: 'Bildiğin bir sayıyı referans al. 5 tane biliyorsan, karşılaştır!',
            visual: '🔵🔵🔵🔵🔵 = 5 (Referans) | 🔵🔵🔵🔵🔵🔵🔵 = 5 + 2 = 7',
            audio: '5 tanenin nasıl göründüğünü bil, sonra karşılaştır!',
            example: { question: '5 topun yanında 3 top daha. Toplam tahmin?', answer: '8', explanation: '5 + 3 = 8 tahmin!' }
          },
          {
            title: 'Gruplama ile Tahmin',
            content: 'Nesneleri gözünle grupla, sonra grupları say.',
            visual: '(⭐⭐⭐)(⭐⭐⭐)(⭐⭐) → 3+3+2 ≈ 8',
            audio: 'Üçlü gruplar yap, kaç grup var say!',
            example: { question: '4 grup, her grupta 3 nesne. Tahmin?', answer: '12', explanation: '4 × 3 = 12!' }
          },
          {
            title: 'Tahmin ve Sayma',
            content: 'Önce tahmin et, sonra say ve karşılaştır!',
            visual: 'Tahmin: 10 | Sayım: 9 | Fark: 1 👍',
            audio: 'Tahmin 10, gerçek 9. Çok yakın tahmin!',
            example: { question: 'Tahmin: 15, Gerçek: 12. İyi tahmin mi?', answer: 'Evet, yakın', explanation: 'Fark sadece 3, iyi tahmin!' }
          },
          {
            title: 'Tahmin Stratejileri',
            content: 'Küçük miktarlar için sayma, büyük miktarlar için gruplama kullan.',
            visual: '📦 Az nesne → Say | 📦📦📦 Çok nesne → Grupla',
            audio: 'Az nesne varsa say, çok varsa grupla ve tahmin et!',
            example: { question: '20 nesne için en iyi strateji?', answer: 'Gruplama', explanation: '5\'li veya 10\'lu grupla, daha kolay!' }
          },
          {
            title: 'Pratik Yapalım!',
            content: 'Şimdi tahmin becerilerini test edelim!',
            visual: '🎯 Tahmin şampiyonu ol!',
            audio: 'Tahmin yapmak pratik ile gelişir!',
            example: { question: 'Her gün pratik yaparsan ne olur?', answer: 'Tahminlerin iyileşir', explanation: 'Pratik mükemmelleştirir!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '🍎🍎🍎🍎🍎🍎🍎 kaç elma? Tahmin et!', options: ['5', '7', '9', '11'], correctAnswer: '7', explanation: 'Sayalım: 1,2,3,4,5,6,7 = 7 elma!' },
          { type: 'fill-blank', question: 'Tahmin: 12, Gerçek: 10. Fark: ___', correctAnswer: '2', explanation: '12 - 10 = 2 fark!' },
          { type: 'multiple-choice', question: '5\'li 3 grup kaç eder?', options: ['10', '12', '15', '18'], correctAnswer: '15', explanation: '5 + 5 + 5 = 15!' },
          { type: 'fill-blank', question: '⭐⭐⭐⭐ ⭐⭐⭐⭐ = ___ yıldız', correctAnswer: '8', explanation: '4 + 4 = 8!' },
          { type: 'multiple-choice', question: 'Hangi tahmin daha iyi? Gerçek: 8', options: ['Tahmin: 5', 'Tahmin: 7', 'Tahmin: 12', 'Tahmin: 15'], correctAnswer: 'Tahmin: 7', explanation: '7 ve 8 arasında sadece 1 fark!' },
          { type: 'fill-blank', question: '10\'lu 2 grup = ___', correctAnswer: '20', explanation: '10 + 10 = 20!' },
          { type: 'multiple-choice', question: 'Çok nesne varsa ne yapmalı?', options: ['Tek tek say', 'Grupla', 'Sayma', 'Unut'], correctAnswer: 'Grupla', explanation: 'Çok nesne için gruplama en iyisi!' },
          { type: 'fill-blank', question: '🔵🔵🔵 🔵🔵🔵 🔵🔵🔵 🔵 = ___', correctAnswer: '10', explanation: '3+3+3+1 = 10!' },
          { type: 'multiple-choice', question: 'Tahmin: 20, Gerçek: 18. Başarılı mı?', options: ['Evet', 'Hayır', 'Belirsiz', 'Çok kötü'], correctAnswer: 'Evet', explanation: 'Fark sadece 2, çok iyi tahmin!' },
          { type: 'fill-blank', question: '5 + 5 + 5 + 5 = ___', correctAnswer: '20', explanation: '4 tane 5 = 20!' }
        ]
      }
    }
  ]
};
