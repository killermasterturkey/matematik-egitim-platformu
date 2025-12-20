// 4. SINIF - TEMA 4: NESNELERİN GEOMETRİSİ (1)
// 17 saat (%10) - 4 Öğrenme Çıktısı

import { Theme } from '../types';

export const tema4: Theme = {
  id: 'grade4-tema4',
  title: 'Nesnelerin Geometrisi (1)',
  description: 'Geometrik cisimlerin açınımları, şekillerin köşe ve kenar özellikleri, çevre ve alan kavramları!',
  emoji: '📐',
  color: 'from-teal-400 to-cyan-500',
  bgColor: 'bg-teal-50',
  borderColor: 'border-teal-200',
  textColor: 'text-teal-600',
  hours: 17,
  objectives: [
    'Geometrik cisimlerin açınımlarını yapabilme',
    'Üçgen, kare ve dikdörtgenin köşe ve kenar özelliklerini yorumlayabilme',
    'Geometrik şekillerin çevre uzunluğunu ölçebilme',
    'Şekillerin alanlarını tahmin edebilme'
  ],
  keywords: [
    'Geometrik cisim', 'Açınım', 'Küp', 'Dikdörtgenler prizması',
    'Üçgen', 'Kare', 'Dikdörtgen', 'Köşe', 'Kenar', 'Çevre', 'Alan'
  ],
  generalizations: [
    'Geometrik cisimlerin açınımları yapılabilir.',
    'Geometrik şekillerin çevre uzunluğu ve alanı ölçülebilir.'
  ],
  topics: [
    // Konu 1: Geometrik Cisimlerin Açınımları
    {
      id: 'grade4-tema4-konu1',
      title: 'Geometrik Cisimlerin Açınımları',
      description: 'Küp ve dikdörtgenler prizmasının açınımlarını öğreniyoruz',
      emoji: '📦',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Açınım', 'Küp', 'Dikdörtgenler prizması', 'Yüzey', 'Katla'],
      content: {
        introduction: 'Merhaba küçük mimarlar! Bugün kutuların sırlarını çözeceğiz! Bir kutuyu düzleştirdiğimizde nasıl görünür? Buna açınım diyoruz. 3 boyuttan 2 boyuta yolculuk yapacağız! 📦✨',
        motivationQuote: 'Her kutu, katlandığında 3 boyutlu, açıldığında 2 boyutlu bir sihirdir! ✨',
        funFacts: [
          '📦 Karton kutu fabrikaları açınımlardan kutu üretir!',
          '🎁 Hediye paketleri tasarlanırken açınımlar çizilir!',
          '🏗️ Mimarlar bina maketlerini açınımlardan yapar!'
        ],
        steps: [
          {
            title: 'Açınım Nedir?',
            content: 'Açınım, 3 boyutlu bir cismi keserek düzleme yaymaktır. Bir kutuyu kesip açtığımızda düz bir şekil elde ederiz.',
            visual: '📦 Kutu → Kes → Aç → Düz Şekil\n\n🎁 Gerçek Hayat:\nBir kutu yapıştırmak için:\n1. Açınımı çiz\n2. Kes\n3. Katla\n4. Yapıştır\n= Kutu hazır! ✅',
            audio: 'Açınım, 3 boyutlu cismi düzlemde gösterir. Kutuları açınımlarından üretiriz.',
            example: {
              question: 'Bir zar (küp) açınımında kaç yüz görünür?',
              answer: '6 yüz',
              explanation: 'Küpün 6 kare yüzü vardır, açınımda hepsi görünür'
            }
          },
          {
            title: 'Küpün Açınımı',
            content: 'Küpün 6 tane eşit kare yüzü vardır. Açınımda bu 6 kare farklı şekillerde dizilir.',
            visual: '⬛ Küpün Açınımları:\n\n    □\n□ □ □ □    (Haç şekli)\n    □\n\n□ □ □\n    □ □ □  (Merdiven şekli)\n\n11 farklı açınım şekli var!',
            audio: 'Küpün 11 farklı açınım şekli vardır, ama hepsinde 6 kare bulunur.',
            example: {
              question: 'Küpün bir yüzü 4 cm ise açınımın toplam alanı kaç cm²?',
              answer: '96 cm²',
              explanation: '6 × (4 × 4) = 6 × 16 = 96 cm²'
            }
          },
          {
            title: 'Dikdörtgenler Prizmasının Açınımı',
            content: 'Dikdörtgenler prizması (kutu şeklinde) 6 yüze sahiptir: 2 alt-üst, 2 ön-arka, 2 yan.',
            visual: '📦 Dikdörtgenler Prizması Açınımı:\n\n      [üst]\n[yan][ön][yan][arka]\n      [alt]\n\nÜst = Alt (aynı)\nÖn = Arka (aynı)\nYan = Yan (aynı)\n\n3 çift eş dikdörtgen!',
            audio: 'Dikdörtgenler prizmasının açınımında 3 çift eş dikdörtgen vardır.',
            example: {
              question: 'Bir kutunun uzunluğu 5 cm, genişliği 3 cm, yüksekliği 2 cm. Taban alanı kaç cm²?',
              answer: '15 cm²',
              explanation: '5 × 3 = 15 cm² (uzunluk × genişlik)'
            }
          },
          {
            title: 'Açınımdan Cisim Oluşturma',
            content: 'Verilen açınımı zihnimizde katlayarak hangi cismin oluşacağını bulabiliriz.',
            visual: '🧠 Zihinsel Katlama:\n\n1. Orta kareyi taban say\n2. Yanları yukarı kaldır\n3. Üstü kapat\n= Küp! 🎲\n\nİpucu: Karşılıklı yüzler birbirine değmez!',
            audio: 'Açınımı zihninde katlayarak hangi cismin oluşacağını tahmin edebiliriz.',
            example: {
              question: 'T şeklinde 5 kare bir açınım küp oluşturur mu?',
              answer: 'Hayır',
              explanation: 'Küp için 6 kare gerekir, T şeklinde 5 kare eksik kalır'
            }
          },
          {
            title: 'Açınım Çizme',
            content: 'Verilen bir cismin açınımını çizebiliriz. Kenar uzunluklarına dikkat etmeliyiz.',
            visual: '✏️ Açınım Çizme Adımları:\n\n1. Cismin yüzlerini say\n2. Her yüzün şeklini belirle\n3. Kenar uzunluklarını ölç\n4. Yüzleri birbirine bağla\n5. Kontrol et: Katlandığında cisim oluşur mu?',
            audio: 'Açınım çizerken yüzlerin kenar uzunluklarının uyumlu olmasına dikkat ederiz.',
            example: {
              question: '2 cm kenarlı küpün açınımını çizerken her kare kaç cm olmalı?',
              answer: '2 cm × 2 cm',
              explanation: 'Küpün tüm yüzleri eş karelerdir'
            }
          },
          {
            title: 'Günlük Hayatta Açınımlar',
            content: 'Açınımlar ambalaj tasarımı, mimari ve sanatta kullanılır.',
            visual: '🎁 Günlük Kullanım:\n\n• Hediye kutuları 🎁\n• Ayakkabı kutuları 👟\n• Süt ve meyve suyu kutuları 🥛\n• Pizza kutuları 🍕\n• Karton evler 🏠\n\nHepsi açınımdan üretilir!',
            audio: 'Etrafımızdaki birçok kutu ve ambalaj, açınımlardan üretilir.',
            example: {
              question: 'Bir pizza kutusu hangi cismin açınımından yapılır?',
              answer: 'Dikdörtgenler prizması (düşük yükseklikli)',
              explanation: 'Pizza kutusu alt-üst ve yanları olan bir kutudur'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Bir küpün açınımında kaç kare yüz vardır?',
            options: ['4', '5', '6', '8'],
            correctAnswer: '6',
            explanation: 'Küpün 6 eş kare yüzü vardır'
          },
          {
            type: 'fill-blank',
            question: 'Dikdörtgenler prizmasının açınımında ___ yüz vardır.',
            correctAnswer: '6',
            explanation: 'Dikdörtgenler prizmasının da 6 yüzü vardır'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi küpün açınımı olamaz?',
            options: ['Haç şekli', 'T şekli', 'Merdiven şekli', 'Z şekli'],
            correctAnswer: 'Z şekli',
            explanation: 'Z şeklinde 6 kare birbirine uygun şekilde bağlanamaz'
          },
          {
            type: 'fill-blank',
            question: 'Bir kenarı 3 cm olan küpün bir yüzünün alanı ___ cm².',
            correctAnswer: '9',
            explanation: '3 × 3 = 9 cm²'
          },
          {
            type: 'multiple-choice',
            question: 'Dikdörtgenler prizmasının açınımında eş yüz çiftleri kaç tanedir?',
            options: ['2', '3', '4', '6'],
            correctAnswer: '3',
            explanation: 'Üst-alt, ön-arka, yan-yan olmak üzere 3 eş çift'
          },
          {
            type: 'fill-blank',
            question: 'Küpün ___ farklı açınım şekli vardır.',
            correctAnswer: '11',
            explanation: 'Matematiksel olarak 11 farklı açınım şekli hesaplanmıştır'
          },
          {
            type: 'multiple-choice',
            question: '5 cm kenarlı küpün toplam yüzey alanı kaç cm²?',
            options: ['125 cm²', '150 cm²', '175 cm²', '200 cm²'],
            correctAnswer: '150 cm²',
            explanation: '6 × (5 × 5) = 6 × 25 = 150 cm²'
          },
          {
            type: 'fill-blank',
            question: 'Bir kutunun 4×3 cm boyutunda ___ tane yüzü olabilir.',
            correctAnswer: '2',
            explanation: 'Ön ve arka (veya başka bir çift) aynı boyutta olabilir'
          },
          {
            type: 'multiple-choice',
            question: 'Açınım yapıldığında hangi cisim 6 dikdörtgenden oluşmaz?',
            options: ['Küp', 'Kalem kutusu', 'Kibrit kutusu', 'Ayakkabı kutusu'],
            correctAnswer: 'Küp',
            explanation: 'Küp 6 kareden oluşur, dikdörtgen değil'
          },
          {
            type: 'fill-blank',
            question: 'Bir zar küpünde karşılıklı yüzlerin toplamı ___.',
            correctAnswer: '7',
            explanation: '1-6, 2-5, 3-4 karşılıklıdır, hepsi 7 eder'
          }
        ]
      }
    },
    // Konu 2: Üçgen, Kare ve Dikdörtgenin Köşe ve Kenar Özellikleri
    {
      id: 'grade4-tema4-konu2',
      title: 'Üçgen, Kare ve Dikdörtgenin Özellikleri',
      description: 'Temel geometrik şekillerin köşe ve kenar özelliklerini keşfediyoruz',
      emoji: '🔺',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Üçgen', 'Kare', 'Dikdörtgen', 'Köşe', 'Kenar', 'Açı'],
      content: {
        introduction: 'Merhaba şekil dedektifleri! Bugün üçgen, kare ve dikdörtgenin gizli özelliklerini keşfedeceğiz. Köşeler, kenarlar ve açılar... Geometrinin temel yapı taşlarını inceleyelim! 🔺📐',
        motivationQuote: 'Geometri, doğanın gizli dilidir! 🌟',
        funFacts: [
          '🔺 Mısır piramitleri üçgen yüzlerden oluşur!',
          '🏠 Evlerin çoğu dikdörtgen pencereler ve kapılarla tasarlanır!',
          '🎲 Zarlar küp şeklindedir - 6 kare yüzü var!'
        ],
        steps: [
          {
            title: 'Köşe ve Kenar Nedir?',
            content: 'Köşe, iki kenarın birleştiği noktadır. Kenar, iki köşeyi birleştiren doğru parçasıdır.',
            visual: '📐 Temel Kavramlar:\n\n      A\n     /\\\n    /  \\  ← Kenarlar\n   /    \\\n  B------C\n\nKöşeler: A, B, C\nKenarlar: AB, BC, CA',
            audio: 'Geometrik şekillerde köşeler nokta, kenarlar çizgidir.',
            example: {
              question: 'Bir karenin kaç köşesi ve kaç kenarı vardır?',
              answer: '4 köşe, 4 kenar',
              explanation: 'Kare, 4 köşeli ve 4 kenarlı bir dörtgendir'
            }
          },
          {
            title: 'Üçgenin Özellikleri',
            content: 'Üçgen, 3 köşeli ve 3 kenarlı en basit çokgendir. İç açıları toplamı 180°\'dir.',
            visual: '🔺 ÜÇGEN\n\nKöşe sayısı: 3\nKenar sayısı: 3\nİç açılar toplamı: 180°\n\nÜçgen Çeşitleri:\n• Eşkenar: 3 kenar eşit\n• İkizkenar: 2 kenar eşit\n• Çeşitkenar: Hiçbir kenar eşit değil',
            audio: 'Üçgen, en az köşeye sahip çokgendir. Her üçgenin iç açıları toplamı 180 derecedir.',
            example: {
              question: 'Bir üçgenin iki açısı 60° ve 70° ise üçüncü açı kaç derecedir?',
              answer: '50°',
              explanation: '180° - 60° - 70° = 50°'
            }
          },
          {
            title: 'Karenin Özellikleri',
            content: 'Kare, 4 eş kenarı ve 4 dik açısı olan özel bir dörtgendir.',
            visual: '⬛ KARE\n\nKöşe sayısı: 4\nKenar sayısı: 4\nTüm kenarlar EŞİT\nTüm açılar 90° (dik açı)\n\n□ → Kenar: a\n    Çevre: 4 × a\n    Alan: a × a',
            audio: 'Karenin tüm kenarları eşit ve tüm açıları dik açıdır.',
            example: {
              question: 'Kenarı 5 cm olan karenin çevresi kaç cm?',
              answer: '20 cm',
              explanation: 'Çevre = 4 × 5 = 20 cm'
            }
          },
          {
            title: 'Dikdörtgenin Özellikleri',
            content: 'Dikdörtgen, karşılıklı kenarları eşit ve tüm açıları dik olan dörtgendir.',
            visual: '▭ DİKDÖRTGEN\n\nKöşe sayısı: 4\nKenar sayısı: 4\nKarşılıklı kenarlar EŞİT\nTüm açılar 90° (dik açı)\n\nUzun kenar: a\nKısa kenar: b\nÇevre: 2×a + 2×b\nAlan: a × b',
            audio: 'Dikdörtgenin karşılıklı kenarları eşit uzunluktadır.',
            example: {
              question: 'Uzunluğu 8 cm, genişliği 3 cm olan dikdörtgenin çevresi kaç cm?',
              answer: '22 cm',
              explanation: 'Çevre = 2×8 + 2×3 = 16 + 6 = 22 cm'
            }
          },
          {
            title: 'Şekilleri Karşılaştırma',
            content: 'Üçgen, kare ve dikdörtgenin benzerlik ve farklılıklarını inceleyelim.',
            visual: '📊 Karşılaştırma Tablosu:\n\n        |Üçgen|Kare |Dikdörtgen\nKöşe    |  3  |  4  |    4\nKenar   |  3  |  4  |    4\nEş Kenar|değişir|4  |    2 çift\nAçı Top.|180° |360° |  360°',
            audio: 'Her şeklin kendine özgü özellikleri vardır.',
            example: {
              question: 'Kare aynı zamanda dikdörtgen midir?',
              answer: 'Evet',
              explanation: 'Kare, kenarları eşit olan özel bir dikdörtgendir'
            }
          },
          {
            title: 'Günlük Hayatta Şekiller',
            content: 'Bu şekiller günlük hayatımızda her yerde karşımıza çıkar.',
            visual: '🏠 Günlük Örnekler:\n\n🔺 Üçgen: Çatılar, trafik işaretleri\n⬛ Kare: Karolar, zarlar, ekmek dilimleri\n▭ Dikdörtgen: Kapılar, pencereler, kitaplar\n\nBak ve bul! 👀',
            audio: 'Etrafımıza baktığımızda her yerde geometrik şekiller görürüz.',
            example: {
              question: 'Bir futbol sahası hangi şekildir?',
              answer: 'Dikdörtgen',
              explanation: 'Futbol sahaları uzun ve geniş kenarları olan dikdörtgendir'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Bir üçgenin iç açıları toplamı kaç derecedir?',
            options: ['90°', '180°', '270°', '360°'],
            correctAnswer: '180°',
            explanation: 'Üçgenin iç açıları toplamı her zaman 180°\'dir'
          },
          {
            type: 'fill-blank',
            question: 'Karenin ___ kenarı birbirine eşittir.',
            correctAnswer: '4',
            explanation: 'Karenin 4 kenarı da eşit uzunluktadır'
          },
          {
            type: 'multiple-choice',
            question: 'Dikdörtgende kaç çift eş kenar vardır?',
            options: ['1', '2', '3', '4'],
            correctAnswer: '2',
            explanation: 'Karşılıklı kenarlar eşittir: uzun-uzun ve kısa-kısa'
          },
          {
            type: 'fill-blank',
            question: 'Kenarı 6 cm olan karenin çevresi ___ cm.',
            correctAnswer: '24',
            explanation: '4 × 6 = 24 cm'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi eşkenar üçgenin özelliği DEĞİLDİR?',
            options: ['3 kenarı eşit', '3 açısı 60°', 'Toplam açı 180°', '4 köşesi var'],
            correctAnswer: '4 köşesi var',
            explanation: 'Üçgenin 3 köşesi vardır, 4 değil'
          },
          {
            type: 'fill-blank',
            question: 'Uzunluğu 10 cm, genişliği 4 cm olan dikdörtgenin çevresi ___ cm.',
            correctAnswer: '28',
            explanation: '2×10 + 2×4 = 20 + 8 = 28 cm'
          },
          {
            type: 'multiple-choice',
            question: 'Bir karenin her açısı kaç derecedir?',
            options: ['45°', '60°', '90°', '120°'],
            correctAnswer: '90°',
            explanation: 'Karenin her açısı dik açıdır (90°)'
          },
          {
            type: 'fill-blank',
            question: 'Dikdörtgenin köşe sayısı ___ ve kenar sayısı ___ dir.',
            correctAnswer: '4, 4',
            explanation: 'Dikdörtgen 4 köşeli, 4 kenarlı bir dörtgendir'
          },
          {
            type: 'multiple-choice',
            question: 'Aşağıdakilerden hangisi hem üçgende hem karede bulunur?',
            options: ['4 kenar', 'Dik açı', 'Köşe noktaları', 'Eşit kenarlar'],
            correctAnswer: 'Köşe noktaları',
            explanation: 'Her ikisinde de köşe noktaları vardır'
          },
          {
            type: 'fill-blank',
            question: 'Bir üçgenin iki açısı 45° ve 90° ise üçüncü açı ___ derecedir.',
            correctAnswer: '45',
            explanation: '180° - 45° - 90° = 45°'
          }
        ]
      }
    },
    // Konu 3: Çevre Uzunluğunu Ölçme
    {
      id: 'grade4-tema4-konu3',
      title: 'Çevre Uzunluğunu Ölçme',
      description: 'Geometrik şekillerin çevre uzunluğunu hesaplıyoruz',
      emoji: '📏',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Çevre', 'Ölçme', 'Uzunluk', 'Cetvel', 'Metre', 'Santimetre'],
      content: {
        introduction: 'Merhaba ölçüm uzmanları! Bugün şekillerin etrafında yürüyeceğiz - tabii matematikte! Bir şeklin çevresi, etrafını tamamen dolaştığımızda aldığımız yoldur. Hazır mısınız? 📏🚶',
        motivationQuote: 'Çevre, şeklin dış sınırının toplam uzunluğudur! 🔄',
        funFacts: [
          '🏃 Atletizm pistinin çevresi genellikle 400 metredir!',
          '🖼️ Çerçeve yapmak için tablonun çevresini bilmeliyiz!',
          '🌍 Dünya\'nın çevresi yaklaşık 40.000 km\'dir!'
        ],
        steps: [
          {
            title: 'Çevre Nedir?',
            content: 'Çevre, bir şeklin dış sınırının toplam uzunluğudur. Tüm kenarların uzunluklarını toplarız.',
            visual: '🔄 Çevre = Kenarların Toplamı\n\n▭ Dikdörtgen:\n┌─────────┐\n│    6 cm    │  3 cm\n└─────────┘\n\nÇevre = 6 + 3 + 6 + 3 = 18 cm',
            audio: 'Çevre, şeklin kenarlarının toplam uzunluğudur.',
            example: {
              question: 'Kenarları 5 cm, 7 cm, 5 cm, 7 cm olan dikdörtgenin çevresi kaç cm?',
              answer: '24 cm',
              explanation: '5 + 7 + 5 + 7 = 24 cm'
            }
          },
          {
            title: 'Karenin Çevresi',
            content: 'Karenin 4 kenarı eşit olduğu için çevre = 4 × kenar uzunluğu.',
            visual: '⬛ Kare Çevre Formülü:\n\nÇevre = 4 × a\n\n□ a = 5 cm ise\nÇevre = 4 × 5 = 20 cm\n\nKolay hesaplama! ✅',
            audio: 'Karenin çevresini bulmak için kenar uzunluğunu 4 ile çarparız.',
            example: {
              question: 'Kenarı 8 cm olan karenin çevresi kaç cm?',
              answer: '32 cm',
              explanation: 'Çevre = 4 × 8 = 32 cm'
            }
          },
          {
            title: 'Dikdörtgenin Çevresi',
            content: 'Dikdörtgenin çevresi = 2 × (uzun kenar + kısa kenar).',
            visual: '▭ Dikdörtgen Çevre Formülü:\n\nÇevre = 2 × (a + b)\n\na = 10 cm, b = 4 cm ise\nÇevre = 2 × (10 + 4)\n      = 2 × 14\n      = 28 cm',
            audio: 'Dikdörtgenin çevresini bulmak için uzun ve kısa kenarı toplayıp 2 ile çarparız.',
            example: {
              question: 'Uzunluğu 12 cm, genişliği 5 cm olan dikdörtgenin çevresi kaç cm?',
              answer: '34 cm',
              explanation: 'Çevre = 2 × (12 + 5) = 2 × 17 = 34 cm'
            }
          },
          {
            title: 'Üçgenin Çevresi',
            content: 'Üçgenin çevresi, üç kenarının toplamıdır.',
            visual: '🔺 Üçgen Çevre:\n\n      /\\\n   5cm/  \\4cm\n    /    \\\n   /______\\\n     6cm\n\nÇevre = 5 + 4 + 6 = 15 cm',
            audio: 'Üçgenin çevresi için üç kenarı toplayın.',
            example: {
              question: 'Eşkenar üçgenin kenarı 7 cm ise çevresi kaç cm?',
              answer: '21 cm',
              explanation: 'Çevre = 3 × 7 = 21 cm (3 kenar eşit)'
            }
          },
          {
            title: 'Ölçme Araçları',
            content: 'Çevre ölçmek için cetvel, mezura veya ip kullanabiliriz.',
            visual: '🔧 Ölçme Araçları:\n\n📏 Cetvel: Düz kenarlar için\n📐 Mezura: Uzun mesafeler için\n🧵 İp + Cetvel: Eğri kenarlar için\n\nDikkat: Doğru ölçüm, doğru sonuç!',
            audio: 'Farklı durumlar için farklı ölçme araçları kullanırız.',
            example: {
              question: 'Yuvarlak bir saksının çevresini nasıl ölçeriz?',
              answer: 'İp sarıp sonra iplyi cetvelle ölçeriz',
              explanation: 'Eğri kenarlar için ip kullanılır'
            }
          },
          {
            title: 'Problem Çözme',
            content: 'Çevre problemlerinde bazen kenar uzunluğunu bulmamız gerekir.',
            visual: '❓ Ters Problem:\n\nBir karenin çevresi 36 cm.\nKenarı kaç cm?\n\nÇevre = 4 × kenar\n36 = 4 × kenar\nkenar = 36 ÷ 4 = 9 cm ✅',
            audio: 'Çevre verilip kenar sorulduğunda bölme kullanırız.',
            example: {
              question: 'Dikdörtgenin çevresi 40 cm, uzun kenarı 12 cm. Kısa kenarı kaç cm?',
              answer: '8 cm',
              explanation: '40 = 2 × (12 + kısa), 20 = 12 + kısa, kısa = 8 cm'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Kenarı 9 cm olan karenin çevresi kaç cm?',
            options: ['27 cm', '36 cm', '45 cm', '81 cm'],
            correctAnswer: '36 cm',
            explanation: 'Çevre = 4 × 9 = 36 cm'
          },
          {
            type: 'fill-blank',
            question: 'Uzunluğu 15 cm, genişliği 8 cm olan dikdörtgenin çevresi ___ cm.',
            correctAnswer: '46',
            explanation: '2 × (15 + 8) = 2 × 23 = 46 cm'
          },
          {
            type: 'multiple-choice',
            question: 'Kenarları 6 cm, 8 cm ve 10 cm olan üçgenin çevresi kaç cm?',
            options: ['18 cm', '24 cm', '28 cm', '48 cm'],
            correctAnswer: '24 cm',
            explanation: '6 + 8 + 10 = 24 cm'
          },
          {
            type: 'fill-blank',
            question: 'Eşkenar üçgenin kenarı 12 cm ise çevresi ___ cm.',
            correctAnswer: '36',
            explanation: '3 × 12 = 36 cm'
          },
          {
            type: 'multiple-choice',
            question: 'Bir karenin çevresi 48 cm ise kenarı kaç cm?',
            options: ['8 cm', '12 cm', '16 cm', '24 cm'],
            correctAnswer: '12 cm',
            explanation: '48 ÷ 4 = 12 cm'
          },
          {
            type: 'fill-blank',
            question: 'Çevresi 30 cm olan dikdörtgenin kısa kenarı 5 cm ise uzun kenarı ___ cm.',
            correctAnswer: '10',
            explanation: '30 = 2 × (uzun + 5), 15 = uzun + 5, uzun = 10 cm'
          },
          {
            type: 'multiple-choice',
            question: 'İkizkenar üçgenin eşit kenarları 7 cm, tabanı 4 cm. Çevresi kaç cm?',
            options: ['15 cm', '18 cm', '21 cm', '28 cm'],
            correctAnswer: '18 cm',
            explanation: '7 + 7 + 4 = 18 cm'
          },
          {
            type: 'fill-blank',
            question: 'Bir bahçenin etrafına çit çekilecek. Bahçe 20 m × 15 m dikdörtgen. Kaç metre çit lazım? ___',
            correctAnswer: '70',
            explanation: '2 × (20 + 15) = 2 × 35 = 70 m'
          },
          {
            type: 'multiple-choice',
            question: 'Kenarları 5 cm ve 8 cm olan dikdörtgen ile 6,5 cm kenarlı karenin çevresi eşit midir?',
            options: ['Evet, ikisi de 26 cm', 'Hayır, dikdörtgen daha büyük', 'Hayır, kare daha büyük', 'Karşılaştırılamaz'],
            correctAnswer: 'Evet, ikisi de 26 cm',
            explanation: 'Dikdörtgen: 2×(5+8)=26, Kare: 4×6,5=26'
          },
          {
            type: 'fill-blank',
            question: 'Bir kare ve bir eşkenar üçgenin çevreleri eşit. Karenin kenarı 6 cm ise üçgenin kenarı ___ cm.',
            correctAnswer: '8',
            explanation: 'Kare çevresi: 4×6=24, Üçgen: 24÷3=8 cm'
          }
        ]
      }
    },
    // Konu 4: Alan Tahmini
    {
      id: 'grade4-tema4-konu4',
      title: 'Alan Tahmini',
      description: 'Standart olmayan birimlerle alan tahmin etmeyi öğreniyoruz',
      emoji: '📐',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Alan', 'Tahmin', 'Birim kare', 'Ölçme', 'Karşılaştırma'],
      content: {
        introduction: 'Merhaba alan keşifçileri! Bugün şekillerin kapladığı alanı tahmin etmeyi öğreneceğiz. Resmi birimler olmadan bile alan hakkında fikir edinebiliriz! 📐🔍',
        motivationQuote: 'Tahmin, gözlem gücünün matematiğe yansımasıdır! 👁️',
        funFacts: [
          '🏠 Ev alırken metrekare ile fiyat hesaplanır!',
          '🌾 Çiftçiler tarla alanlarını dönüm ile ölçer!',
          '🎨 Ressamlar tuval alanını santimetre kare ile bilir!'
        ],
        steps: [
          {
            title: 'Alan Nedir?',
            content: 'Alan, bir şeklin kapladığı yüzeyin büyüklüğüdür. Kaç birim kare ile kaplanabileceğini gösterir.',
            visual: '📐 Alan = Kaplanan Yüzey\n\n⬛⬛⬛⬛\n⬛⬛⬛⬛\n⬛⬛⬛⬛\n\n4 × 3 = 12 birim kare\nAlan = 12 birim kare',
            audio: 'Alan, bir şeklin yüzeyinin büyüklüğünü ölçer.',
            example: {
              question: 'Bir dikdörtgen 5 birim kare × 3 birim kare. Alanı kaç birim kare?',
              answer: '15 birim kare',
              explanation: '5 × 3 = 15 birim kare'
            }
          },
          {
            title: 'Standart Olmayan Birimler',
            content: 'Alan tahmini için kitap, silgi, posta pulu gibi nesneler kullanabiliriz.',
            visual: '📚 Standart Olmayan Birimler:\n\n• Kitap 📕\n• Silgi 🧹\n• Posta pulu 📮\n• El ayası ✋\n• Kareli defter karesi 📓\n\nBunlarla tahmin yap!',
            audio: 'Standart birimler olmadan da, günlük nesnelerle alan tahmini yapabiliriz.',
            example: {
              question: 'Bir masa kaç kitap kaplar diye düşünün. Bu bir alan tahminidir!',
              answer: 'Örneğin: Yaklaşık 6 kitap',
              explanation: 'Kitapları masaya dizersen kaç tane sığar?'
            }
          },
          {
            title: 'Kareli Kağıt ile Tahmin',
            content: 'Şekli kareli kağıda çizip kareleri sayarak alan tahmin edebiliriz.',
            visual: '📓 Kareli Kağıt Yöntemi:\n\n⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜\n\nDolu kareler: 4\nYarım kareler: 0\nToplam alan ≈ 4 kare',
            audio: 'Kareli kağıt, alan tahmini için çok kullanışlıdır.',
            example: {
              question: 'Bir şekil 10 tam kare ve 4 yarım kare kaplıyorsa alanı yaklaşık kaç kare?',
              answer: '12 kare',
              explanation: '10 + (4 ÷ 2) = 10 + 2 = 12 kare'
            }
          },
          {
            title: 'Tahmin ve Ölçme Karşılaştırması',
            content: 'Tahmin yaptıktan sonra gerçek ölçümle karşılaştırırız. Bu, tahmin gücümüzü geliştirir.',
            visual: '🎯 Tahmin → Ölç → Karşılaştır\n\n1. Tahmin: Bu masa ≈ 8 kitap\n2. Ölçüm: Gerçek = 7 kitap\n3. Fark: |8 - 7| = 1\n\nYakın tahmin! ✅',
            audio: 'Tahminlerimizi gerçek ölçümlerle karşılaştırmak, doğruluğumuzu artırır.',
            example: {
              question: 'Tahmin: 20 kare, Ölçüm: 18 kare. Fark kaç?',
              answer: '2 kare',
              explanation: '20 - 18 = 2 kare fark'
            }
          },
          {
            title: 'Alanları Karşılaştırma',
            content: 'Farklı şekillerin alanlarını karşılaştırabiliriz: daha büyük, daha küçük veya eşit.',
            visual: '⚖️ Alan Karşılaştırma:\n\n□ 3×4 = 12 kare\n□ 5×2 = 10 kare\n□ 4×3 = 12 kare\n\n12 > 10\nİlk ve son şekil eşit!\n3×4 = 4×3 ✅',
            audio: 'Alanları karşılaştırarak hangisinin daha büyük olduğunu bulabiliriz.',
            example: {
              question: '6 cm × 4 cm dikdörtgen mi yoksa 5 cm kenarlı kare mi daha büyük?',
              answer: 'Kare daha büyük (25 > 24)',
              explanation: 'Dikdörtgen: 6×4=24 cm², Kare: 5×5=25 cm²'
            }
          },
          {
            title: 'Günlük Hayatta Alan Tahmini',
            content: 'Alan tahmini günlük hayatta çok kullanışlıdır.',
            visual: '🏠 Günlük Örnekler:\n\n• Oda kaç halı ile kaplanır?\n• Duvar kaç poster sığar?\n• Bahçe kaç çimen parçası?\n• Masa kaç tabak sığar?\n\nTahmin et, sonra dene!',
            audio: 'Alan tahmini, günlük kararlarımızda bize yardımcı olur.',
            example: {
              question: 'Bir duvara kaç A4 kağıdı sığar? Bu bir alan tahminidir.',
              answer: 'Duvara ve kağıt boyutuna göre değişir',
              explanation: 'Önce tahmin et, sonra say!'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Bir dikdörtgen 6 birim uzun, 4 birim geniş. Alanı kaç birim kare?',
            options: ['10', '20', '24', '28'],
            correctAnswer: '24',
            explanation: '6 × 4 = 24 birim kare'
          },
          {
            type: 'fill-blank',
            question: 'Kenarı 5 birim olan karenin alanı ___ birim kare.',
            correctAnswer: '25',
            explanation: '5 × 5 = 25 birim kare'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi standart olmayan alan birimidir?',
            options: ['Metrekare', 'Santimetrekare', 'Posta pulu', 'Hepsi standart'],
            correctAnswer: 'Posta pulu',
            explanation: 'Posta pulu standart olmayan bir birimdir'
          },
          {
            type: 'fill-blank',
            question: 'Bir şekil 15 tam kare ve 6 yarım kare kaplıyor. Toplam alan yaklaşık ___ kare.',
            correctAnswer: '18',
            explanation: '15 + (6 ÷ 2) = 15 + 3 = 18 kare'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisinin alanı daha büyük: 3×8 dikdörtgen mi, 5×5 kare mi?',
            options: ['Dikdörtgen (24 > 25)', 'Kare (25 > 24)', 'Eşitler', 'Karşılaştırılamaz'],
            correctAnswer: 'Kare (25 > 24)',
            explanation: 'Dikdörtgen: 24, Kare: 25, 25 > 24'
          },
          {
            type: 'fill-blank',
            question: 'Tahmin: 30 kare, Gerçek: 27 kare. Fark ___ kare.',
            correctAnswer: '3',
            explanation: '30 - 27 = 3 kare'
          },
          {
            type: 'multiple-choice',
            question: 'Bir dikdörtgenin alanı 36 birim kare, genişliği 4 birim. Uzunluğu kaç birim?',
            options: ['6 birim', '8 birim', '9 birim', '12 birim'],
            correctAnswer: '9 birim',
            explanation: '36 ÷ 4 = 9 birim'
          },
          {
            type: 'fill-blank',
            question: '7 cm × 6 cm dikdörtgenin alanı ___ cm².',
            correctAnswer: '42',
            explanation: '7 × 6 = 42 cm²'
          },
          {
            type: 'multiple-choice',
            question: 'El ayası ile alan tahmini yapmak neden yararlıdır?',
            options: ['Kesin sonuç verir', 'Cetvel gerekmez', 'Her zaman doğrudur', 'Daha hızlıdır ama kesin değil'],
            correctAnswer: 'Daha hızlıdır ama kesin değil',
            explanation: 'Tahmin hızlıdır ama kesin sonuç için ölçme gerekir'
          },
          {
            type: 'fill-blank',
            question: '4 cm kenarlı karenin alanı ___ cm², çevresi ___ cm.',
            correctAnswer: '16, 16',
            explanation: 'Alan: 4×4=16 cm², Çevre: 4×4=16 cm'
          }
        ]
      }
    }
  ]
};
