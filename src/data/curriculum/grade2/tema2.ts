// 2. SINIF - 2. TEMA: SAYILAR VE NİCELİKLER (1)
import { Theme } from '../types';

export const tema2: Theme = {
  id: 'sayilar-nicelikler-1',
  title: 'Sayılar ve Nicelikler (1)',
  description: '100\'e kadar sayılar, basamak değeri ve örüntüler!',
  emoji: '💯',
  color: 'from-green-400 to-emerald-500',
  bgColor: 'bg-green-50',
  borderColor: 'border-green-200',
  textColor: 'text-green-600',
  hours: 41,
  objectives: [
    '100\'e kadar sayıları tanıma',
    'Basamak değerini anlama',
    'Ritmik sayma yapma',
    'Örüntüleri çözümleme'
  ],
  keywords: ['Basamak', 'Onluk', 'Birlik', 'Sayı doğrusu', 'Örüntü'],
  generalizations: ['Sayılar çoklukları temsil eder.', 'Sıra sayıları bir örüntü oluşturur.'],
  topics: [
    {
      id: '100e-kadar-sayilar',
      title: '100\'e Kadar Sayılar',
      description: 'İki basamaklı sayıları okuma ve yazma',
      emoji: '💯',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['yüz', 'iki basamak', 'onluk', 'birlik'],
      content: {
        introduction: 'Artık 100\'e kadar sayabileceksin! 21, 52, 87, 99... Büyük sayılar çok eğlenceli!',
        motivationQuote: 'Büyük sayılar büyük başarılar getirir! 💯',
        funFacts: [
          '100 yılda bir yüzyıl denir!',
          'Santimetre "yüzde bir metre" demek!',
          'Yüzme havuzları genellikle 25 veya 50 metre!'
        ],
        steps: [
          {
            title: 'Onluklar ve Birlikler',
            content: 'İki basamaklı sayılar onluk ve birliklerden oluşur.',
            visual: '45 = 4 onluk + 5 birlik = 40 + 5',
            audio: '45 sayısında 4 tane 10 ve 5 tane 1 var.',
            example: { question: '37\'de kaç onluk var?', answer: '3', explanation: '37 = 3 onluk + 7 birlik!' }
          },
          {
            title: '20\'den 50\'ye',
            content: 'Yirmi, otuz, kırk, elli! Her onluğun ismi var.',
            visual: '20 (yirmi) | 30 (otuz) | 40 (kırk) | 50 (elli)',
            audio: 'Yirmi, otuz, kırk, elli. Onar onar artıyor!',
            example: { question: '40\'ın okunuşu?', answer: 'Kırk', explanation: '40 = kırk!' }
          },
          {
            title: '60\'tan 100\'e',
            content: 'Altmış, yetmiş, seksen, doksan, yüz!',
            visual: '60 (altmış) | 70 (yetmiş) | 80 (seksen) | 90 (doksan) | 100 (yüz)',
            audio: 'Altmış, yetmiş, seksen, doksan ve yüz!',
            example: { question: '90\'ın okunuşu?', answer: 'Doksan', explanation: '90 = doksan!' }
          },
          {
            title: 'Ara Sayılar',
            content: '56 = elli altı, 83 = seksen üç şeklinde okunur.',
            visual: '56 = Elli altı | 83 = Seksen üç | 99 = Doksan dokuz',
            audio: 'Önce onluğu, sonra birliği oku!',
            example: { question: '74 nasıl okunur?', answer: 'Yetmiş dört', explanation: '70 + 4 = yetmiş dört!' }
          },
          {
            title: 'Sayı Yazma',
            content: 'Duyduğun sayıyı rakamlarla yaz.',
            visual: 'Altmış iki → 62 | Doksan yedi → 97',
            audio: 'Altmış = 60, iki = 2, birlikte 62!',
            example: { question: 'Seksen beş nasıl yazılır?', answer: '85', explanation: '80 + 5 = 85!' }
          },
          {
            title: 'Sayı Karşılaştırma',
            content: 'Büyük sayıyı bulmak için önce onluklara bak!',
            visual: '56 < 65 (5 onluk < 6 onluk)',
            audio: 'Onluklar farklıysa, büyük onluklu sayı büyük!',
            example: { question: '78 mi 72 mi büyük?', answer: '78', explanation: 'Onluklar eşit, 8 > 2!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '45\'te kaç onluk var?', options: ['4', '5', '45', '9'], correctAnswer: '4', explanation: '45 = 4 onluk + 5 birlik!' },
          { type: 'fill-blank', question: '63 = 6 onluk + ___ birlik', correctAnswer: '3', explanation: '63 = 60 + 3!' },
          { type: 'multiple-choice', question: 'Yetmiş sekiz nasıl yazılır?', options: ['87', '78', '68', '88'], correctAnswer: '78', explanation: 'Yetmiş = 70, sekiz = 8!' },
          { type: 'fill-blank', question: '90 = ___', correctAnswer: 'doksan', explanation: '90 doksan!' },
          { type: 'multiple-choice', question: '56 mı 65 mi büyük?', options: ['56', '65', 'Eşit', 'Belli değil'], correctAnswer: '65', explanation: '6 onluk > 5 onluk!' },
          { type: 'fill-blank', question: 'Seksen dört = ___', correctAnswer: '84', explanation: '80 + 4 = 84!' },
          { type: 'multiple-choice', question: '100\'ün okunuşu?', options: ['On', 'Yüz', 'Bin', 'Yirmi'], correctAnswer: 'Yüz', explanation: '100 = yüz!' },
          { type: 'fill-blank', question: '29\'da ___ birlik var', correctAnswer: '9', explanation: '29 = 2 onluk + 9 birlik!' },
          { type: 'multiple-choice', question: 'Altmış üç nasıl yazılır?', options: ['36', '63', '53', '73'], correctAnswer: '63', explanation: '60 + 3 = 63!' },
          { type: 'fill-blank', question: '50 = ___ onluk', correctAnswer: '5', explanation: '50 = 5 onluk!' }
        ]
      }
    },
    {
      id: 'basamak-degeri',
      title: 'Basamak Değeri',
      description: 'Sayılardaki rakamların değeri',
      emoji: '🔢',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['basamak', 'değer', 'onlar', 'birler'],
      content: {
        introduction: 'Aynı rakam farklı yerlerde farklı değer taşır! 23\'teki 2 ile 32\'deki 2 farklı değerde!',
        motivationQuote: 'Konum her şeyi değiştirir! 🔢',
        funFacts: [
          'Basamak sistemi Hintliler tarafından icat edildi!',
          'Onluk sistem 10 parmaklıdan geliyor!',
          'Bilgisayarlar ikilik (0 ve 1) sistemi kullanır!'
        ],
        steps: [
          {
            title: 'Basamak Nedir?',
            content: 'Sayıdaki her rakamın yeri farklı değer verir.',
            visual: '35: 3→Onlar basamağı, 5→Birler basamağı',
            audio: 'Soldaki rakam onlar, sağdaki birler basamağında.',
            example: { question: '47\'de 4 hangi basamakta?', answer: 'Onlar', explanation: '4 onlar basamağında!' }
          },
          {
            title: 'Birler Basamağı',
            content: 'En sağdaki rakam birler basamağındadır. Değeri rakamın kendisidir.',
            visual: '56 → 6 birler basamağında → Değeri: 6',
            audio: 'Birler basamağındaki rakamın değeri kendisidir.',
            example: { question: '89\'da birler basamağının değeri?', answer: '9', explanation: '9 birler basamağında = 9!' }
          },
          {
            title: 'Onlar Basamağı',
            content: 'Soldan ikinci rakam onlar basamağında. Değeri rakamın 10 katı.',
            visual: '56 → 5 onlar basamağında → Değeri: 50',
            audio: '5 onlar basamağında, değeri 5×10=50!',
            example: { question: '73\'te onlar basamağının değeri?', answer: '70', explanation: '7 × 10 = 70!' }
          },
          {
            title: 'Sayıyı Açma',
            content: 'Sayı = onların değeri + birlerin değeri',
            visual: '68 = 60 + 8 = 6×10 + 8×1',
            audio: '68\'i açalım: 60 ve 8, toplarsak 68!',
            example: { question: '45\'i aç', answer: '40 + 5', explanation: '45 = 40 + 5!' }
          },
          {
            title: 'Sayı Oluşturma',
            content: 'Basamak değerlerini toplayarak sayı oluştur.',
            visual: '30 + 7 = 37 | 50 + 2 = 52',
            audio: '30 ve 7\'yi topla: 37!',
            example: { question: '40 + 9 = ?', answer: '49', explanation: '40 + 9 = 49!' }
          },
          {
            title: 'Karşılaştırmada Basamak',
            content: 'Önce onlar basamağına bak, eşitse birlere bak.',
            visual: '54 ? 45 → 5 onluk > 4 onluk → 54 > 45',
            audio: 'Onluklar büyük olan sayı büyük!',
            example: { question: '67 ve 76\'yı karşılaştır', answer: '67 < 76', explanation: '6 < 7 (onluklar)!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '52\'de 5\'in basamak değeri?', options: ['5', '50', '500', '2'], correctAnswer: '50', explanation: '5 onlar basamağında = 50!' },
          { type: 'fill-blank', question: '78\'de 8\'in değeri = ___', correctAnswer: '8', explanation: '8 birler basamağında!' },
          { type: 'multiple-choice', question: '36 = 30 + ?', options: ['3', '6', '36', '0'], correctAnswer: '6', explanation: '36 = 30 + 6!' },
          { type: 'fill-blank', question: '64 = ___ + 4', correctAnswer: '60', explanation: '64 = 60 + 4!' },
          { type: 'multiple-choice', question: '47\'de onlar rakamı?', options: ['4', '7', '47', '40'], correctAnswer: '4', explanation: '4 onlar basamağında!' },
          { type: 'fill-blank', question: '90 + 3 = ___', correctAnswer: '93', explanation: '90 + 3 = 93!' },
          { type: 'multiple-choice', question: '23 ve 32\'de hangi 2 daha büyük değerde?', options: ['23\'teki 2', '32\'deki 2', 'Eşit', 'Yok'], correctAnswer: '23\'teki 2', explanation: '23\'te 2 onlar (20), 32\'de 2 birler (2)!' },
          { type: 'fill-blank', question: '85 = 8 × ___ + 5', correctAnswer: '10', explanation: '8 × 10 = 80!' },
          { type: 'multiple-choice', question: '70 + 0 = ?', options: ['7', '70', '700', '0'], correctAnswer: '70', explanation: '70 + 0 = 70!' },
          { type: 'fill-blank', question: '99 = ___ + 9', correctAnswer: '90', explanation: '99 = 90 + 9!' }
        ]
      }
    },
    {
      id: 'ritmik-sayma-100',
      title: 'Ritmik Sayma',
      description: '100\'e kadar ikişer, üçer, dörder, beşer sayma',
      emoji: '🎵',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['ritmik', 'atlama', 'örüntü', 'sayma'],
      content: {
        introduction: 'Atlayarak saymak hem eğlenceli hem de hızlı! İkişer, üçer, beşer...',
        motivationQuote: 'Ritmi yakala, sayıları fethet! 🎵',
        funFacts: [
          'Saatler beşer beşer sayar: 5, 10, 15, 20...',
          'Para sayarken onar saymak hızlıdır!',
          'Çarpım tablosu ritmik saymayla ilgili!'
        ],
        steps: [
          {
            title: 'İkişer Sayma',
            content: '2, 4, 6, 8, 10, 12... şeklinde ikişer atlayarak say.',
            visual: '2 → 4 → 6 → 8 → 10 → 12 → 14 → 16 → 18 → 20',
            audio: 'İki, dört, altı, sekiz, on, on iki...',
            example: { question: '8\'den sonra ikişer?', answer: '10', explanation: '8 + 2 = 10!' }
          },
          {
            title: 'Üçer Sayma',
            content: '3, 6, 9, 12, 15... şeklinde üçer atlayarak say.',
            visual: '3 → 6 → 9 → 12 → 15 → 18 → 21 → 24 → 27 → 30',
            audio: 'Üç, altı, dokuz, on iki, on beş...',
            example: { question: '12\'den sonra üçer?', answer: '15', explanation: '12 + 3 = 15!' }
          },
          {
            title: 'Dörder Sayma',
            content: '4, 8, 12, 16, 20... şeklinde dörder atlayarak say.',
            visual: '4 → 8 → 12 → 16 → 20 → 24 → 28 → 32 → 36 → 40',
            audio: 'Dört, sekiz, on iki, on altı, yirmi...',
            example: { question: '16\'dan sonra dörder?', answer: '20', explanation: '16 + 4 = 20!' }
          },
          {
            title: 'Beşer Sayma',
            content: '5, 10, 15, 20, 25... şeklinde beşer atlayarak say.',
            visual: '5 → 10 → 15 → 20 → 25 → 30 → ... → 95 → 100',
            audio: 'Beş, on, on beş, yirmi, yirmi beş...',
            example: { question: '35\'ten sonra beşer?', answer: '40', explanation: '35 + 5 = 40!' }
          },
          {
            title: 'Geriye Sayma',
            content: 'Atlayarak geriye de sayabiliriz.',
            visual: '20 → 18 → 16 → 14 → 12 → 10 (ikişer geri)',
            audio: 'Yirmi, on sekiz, on altı, on dört...',
            example: { question: '15\'ten üçer geri?', answer: '12', explanation: '15 - 3 = 12!' }
          },
          {
            title: 'Örüntü Bulma',
            content: 'Ritmik saymada her adım aynı sayı eklenir veya çıkarılır.',
            visual: '3, 6, 9, 12 → Kural: +3',
            audio: 'Her adımda 3 ekleniyor, kural +3!',
            example: { question: '4, 8, 12, 16 kuralı?', answer: '+4', explanation: 'Dörder artıyor!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '6, 8, 10, ?', options: ['11', '12', '13', '14'], correctAnswer: '12', explanation: 'İkişer: 10 + 2 = 12!' },
          { type: 'fill-blank', question: '3, 6, 9, 12, ___', correctAnswer: '15', explanation: 'Üçer: 12 + 3 = 15!' },
          { type: 'multiple-choice', question: '20, 24, 28, ?', options: ['30', '32', '34', '36'], correctAnswer: '32', explanation: 'Dörder: 28 + 4 = 32!' },
          { type: 'fill-blank', question: '25, 30, 35, 40, ___', correctAnswer: '45', explanation: 'Beşer: 40 + 5 = 45!' },
          { type: 'multiple-choice', question: '18, 16, 14, ?', options: ['10', '11', '12', '13'], correctAnswer: '12', explanation: 'İkişer geri: 14 - 2 = 12!' },
          { type: 'fill-blank', question: '2, 4, 6, 8, ___, 12', correctAnswer: '10', explanation: 'İkişer: 8 + 2 = 10!' },
          { type: 'multiple-choice', question: '5, 10, 15, 20 kuralı?', options: ['+3', '+4', '+5', '+10'], correctAnswer: '+5', explanation: 'Beşer artıyor!' },
          { type: 'fill-blank', question: '100, 95, 90, 85, ___', correctAnswer: '80', explanation: 'Beşer geri: 85 - 5 = 80!' },
          { type: 'multiple-choice', question: '9, 12, 15, 18 kuralı?', options: ['+2', '+3', '+4', '+5'], correctAnswer: '+3', explanation: 'Üçer artıyor!' },
          { type: 'fill-blank', question: '4, 8, 12, 16, 20, ___', correctAnswer: '24', explanation: 'Dörder: 20 + 4 = 24!' }
        ]
      }
    },
    {
      id: 'oruntu-cozumleme',
      title: 'Sayı Örüntüleri',
      description: 'Örüntü kuralını bulma ve devam ettirme',
      emoji: '🔄',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['örüntü', 'kural', 'dizi', 'tahmin'],
      content: {
        introduction: 'Sayı dizilerindeki gizli kuralı bul! 2, 4, 6, 8... kuralı nedir?',
        motivationQuote: 'Kuralı bulan matematiği çözer! 🔄',
        funFacts: [
          'Doğada Fibonacci dizisi çok yaygın!',
          'Müzik de örüntülerden oluşur!',
          'DNA bile bir örüntü içerir!'
        ],
        steps: [
          {
            title: 'Örüntü Kuralı',
            content: 'Ardışık sayılar arasındaki farkı bul, bu kuraldır.',
            visual: '5, 10, 15, 20 → Fark: 5 → Kural: +5',
            audio: '10-5=5, 15-10=5, 20-15=5. Kural +5!',
            example: { question: '3, 6, 9, 12 kuralı?', answer: '+3', explanation: 'Her seferinde 3 ekleniyor!' }
          },
          {
            title: 'Artan Örüntüler',
            content: 'Sayılar büyüyorsa artan örüntüdür.',
            visual: '10, 15, 20, 25 → Artan (+5)',
            audio: 'Sayılar artıyor, kural pozitif!',
            example: { question: '7, 14, 21, 28 artan mı?', answer: 'Evet', explanation: 'Sayılar büyüyor!' }
          },
          {
            title: 'Azalan Örüntüler',
            content: 'Sayılar küçülüyorsa azalan örüntüdür.',
            visual: '50, 45, 40, 35 → Azalan (-5)',
            audio: 'Sayılar azalıyor, kural negatif!',
            example: { question: '20, 16, 12, 8 azalan mı?', answer: 'Evet', explanation: 'Sayılar küçülüyor!' }
          },
          {
            title: 'Eksik Sayıyı Bul',
            content: 'Kuralı uygulayarak eksik sayıyı bul.',
            visual: '4, 8, __, 16, 20 → Kural +4 → Eksik: 12',
            audio: '8 + 4 = 12, eksik sayı 12!',
            example: { question: '5, 10, __, 20?', answer: '15', explanation: '+5 kuralı: 10 + 5 = 15!' }
          },
          {
            title: 'Devam Ettirme',
            content: 'Örüntüyü kuralına göre devam ettir.',
            visual: '2, 5, 8, 11, ?, ? → +3 → 14, 17',
            audio: '11 + 3 = 14, 14 + 3 = 17!',
            example: { question: '10, 20, 30, 40, ?, ?', answer: '50, 60', explanation: '+10: 50, 60!' }
          },
          {
            title: 'Karmaşık Örüntüler',
            content: 'Bazen kural değişebilir, dikkatli bak!',
            visual: '1, 2, 4, 7, 11 → +1, +2, +3, +4...',
            audio: 'Her seferinde fark 1 artıyor!',
            example: { question: '1, 3, 6, 10, ? kuralı?', answer: '+2, +3, +4, +5 → 15', explanation: 'Fark artıyor!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '2, 6, 10, 14 kuralı?', options: ['+2', '+3', '+4', '+5'], correctAnswer: '+4', explanation: 'Dörder artıyor!' },
          { type: 'fill-blank', question: '5, 10, 15, 20, ___, 30', correctAnswer: '25', explanation: '+5: 20 + 5 = 25!' },
          { type: 'multiple-choice', question: '100, 90, 80, 70, ?', options: ['50', '60', '65', '75'], correctAnswer: '60', explanation: '-10: 70 - 10 = 60!' },
          { type: 'fill-blank', question: '1, 4, 7, 10, ___', correctAnswer: '13', explanation: '+3: 10 + 3 = 13!' },
          { type: 'multiple-choice', question: '8, __, 16, 20 eksik?', options: ['10', '11', '12', '14'], correctAnswer: '12', explanation: '+4: 8 + 4 = 12!' },
          { type: 'fill-blank', question: '50, 40, 30, 20, ___', correctAnswer: '10', explanation: '-10: 20 - 10 = 10!' },
          { type: 'multiple-choice', question: '3, 6, 12, 24 kuralı?', options: ['+3', '+6', '×2', '+12'], correctAnswer: '×2', explanation: 'Her seferinde 2 katı!' },
          { type: 'fill-blank', question: '7, 14, 21, 28, ___', correctAnswer: '35', explanation: '+7: 28 + 7 = 35!' },
          { type: 'multiple-choice', question: '35, 30, 25, 20 örüntüsü?', options: ['Artan', 'Azalan', 'Sabit', 'Karışık'], correctAnswer: 'Azalan', explanation: 'Sayılar azalıyor!' },
          { type: 'fill-blank', question: '11, 22, 33, 44, ___', correctAnswer: '55', explanation: '+11: 44 + 11 = 55!' }
        ]
      }
    },
    {
      id: 'tahmin-50',
      title: 'Sayı Tahmini',
      description: '50\'ye kadar nesnelerin sayısını tahmin etme',
      emoji: '🎯',
      duration: '35 dk',
      difficulty: 2,
      keywords: ['tahmin', 'strateji', 'gruplama', 'sayma'],
      content: {
        introduction: 'Saymadan önce tahmin et! İyi bir tahmin matematik beynini geliştirir.',
        motivationQuote: 'İyi tahmin, deneyimle gelir! 🎯',
        funFacts: [
          'Bilim insanları her zaman tahminle başlar!',
          'Hava tahmini süper bilgisayarlarla yapılır!',
          'İyi tahminciler pazarlıkta avantajlıdır!'
        ],
        steps: [
          {
            title: 'Referans Kullan',
            content: '10\'luk bir grup oluştur, sonra karşılaştır.',
            visual: '10 nesne ≈ bu kadar → diğerleri 10 ile karşılaştır',
            audio: '10 tanenin nasıl göründüğünü bil, karşılaştır!',
            example: { question: '10 bilyenin yanında 30 bilye var. Toplam?', answer: '40', explanation: '10 + 30 = 40!' }
          },
          {
            title: 'Gruplama Stratejisi',
            content: '5\'li veya 10\'lu gruplar oluştur, grupları say.',
            visual: '⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ = 3 × 5 = 15',
            audio: '5\'erli 3 grup var, 5×3=15!',
            example: { question: '10\'luk 4 grup?', answer: '40', explanation: '10 × 4 = 40!' }
          },
          {
            title: 'Parça-Bütün',
            content: 'Büyük grubu parçalara ayır, parçaları tahmin et.',
            visual: 'Büyük grup = 20 + 15 + 10 = 45',
            audio: 'Parçalara ayır: 20, 15, 10. Topla: 45!',
            example: { question: 'İki parça: 25 ve 18. Bütün?', answer: '43', explanation: '25 + 18 = 43!' }
          },
          {
            title: 'Tahmin ve Kontrol',
            content: 'Tahmin et, sonra say, farkı bul!',
            visual: 'Tahmin: 35 | Sayım: 32 | Fark: 3',
            audio: 'Tahmin ve sayım yakınsa iyi tahmin!',
            example: { question: 'Tahmin 40, sayım 38. Fark?', answer: '2', explanation: '40 - 38 = 2!' }
          },
          {
            title: 'Tahmini Geliştirme',
            content: 'Pratik yaparakdaha iyi tahmin edersin!',
            visual: '📈 Her gün pratik yap!',
            audio: 'Ne kadar çok pratik, o kadar iyi tahmin!',
            example: { question: 'Tahminler neden gelişir?', answer: 'Pratikle', explanation: 'Pratik mükemmelleştirir!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '10\'lu 3 grup kaç?', options: ['13', '20', '30', '33'], correctAnswer: '30', explanation: '10 × 3 = 30!' },
          { type: 'fill-blank', question: '5\'li 6 grup = ___', correctAnswer: '30', explanation: '5 × 6 = 30!' },
          { type: 'multiple-choice', question: 'Tahmin: 45, Sayım: 42. Fark?', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: '45 - 42 = 3!' },
          { type: 'fill-blank', question: '20 + 15 + 10 = ___', correctAnswer: '45', explanation: '20+15+10 = 45!' },
          { type: 'multiple-choice', question: '10\'lu 5 grup kaç eder?', options: ['15', '50', '55', '100'], correctAnswer: '50', explanation: '10 × 5 = 50!' },
          { type: 'fill-blank', question: 'Tahmin yakınsa tahmin ___', correctAnswer: 'iyi', explanation: 'Yakın tahmin = iyi tahmin!' },
          { type: 'multiple-choice', question: '25 ve 17 toplamı tahmin?', options: ['32', '42', '52', '27'], correctAnswer: '42', explanation: '25 + 17 = 42!' },
          { type: 'fill-blank', question: '5\'li ___ grup = 35', correctAnswer: '7', explanation: '5 × 7 = 35!' },
          { type: 'multiple-choice', question: 'Gruplama neden iyi?', options: ['Yavaşlatır', 'Hızlandırır', 'Zorlaştırır', 'Önemi yok'], correctAnswer: 'Hızlandırır', explanation: 'Gruplama saymayı hızlandırır!' },
          { type: 'fill-blank', question: '10 + 10 + 10 + 10 + 8 = ___', correctAnswer: '48', explanation: '4×10 + 8 = 48!' }
        ]
      }
    },
    {
      id: 'sayilarin-sirasi',
      title: 'Sayıların Sırası',
      description: 'Sayıları küçükten büyüğe ve büyükten küçüğe sıralama',
      emoji: '📊',
      duration: '35 dk',
      difficulty: 1,
      keywords: ['sıra', 'küçük', 'büyük', 'karşılaştırma'],
      content: {
        introduction: 'Sayıları sıraya dizelim! Kim birinci, kim sonuncu?',
        motivationQuote: 'Düzen başarının anahtarı! 📊',
        funFacts: [
          'Kütüphaneler kitapları numaraya göre sıralar!',
          'Yarışlarda sıralama önemli!',
          'Telefon rehberi alfabetik sırada!'
        ],
        steps: [
          {
            title: 'Küçükten Büyüğe',
            content: 'En küçükten başla, en büyüğe git.',
            visual: '5, 23, 8, 15 → 5, 8, 15, 23',
            audio: 'En küçük 5, sonra 8, 15, en büyük 23!',
            example: { question: '12, 5, 18, 9 küçükten büyüğe?', answer: '5, 9, 12, 18', explanation: 'En küçükten başla!' }
          },
          {
            title: 'Büyükten Küçüğe',
            content: 'En büyükten başla, en küçüğe git.',
            visual: '5, 23, 8, 15 → 23, 15, 8, 5',
            audio: 'En büyük 23, sonra 15, 8, en küçük 5!',
            example: { question: '30, 15, 42, 8 büyükten küçüğe?', answer: '42, 30, 15, 8', explanation: 'En büyükten başla!' }
          },
          {
            title: 'Onluklara Bak',
            content: 'Karşılaştırırken önce onluklara bak.',
            visual: '45 < 54 (4 onluk < 5 onluk)',
            audio: 'Onluklar farklıysa, küçük onluklu küçük!',
            example: { question: '67 mı 76 mı büyük?', answer: '76', explanation: '7 onluk > 6 onluk!' }
          },
          {
            title: 'Eşit Onluklar',
            content: 'Onluklar eşitse birliklere bak.',
            visual: '34 < 38 (4 birlik < 8 birlik)',
            audio: 'Onluklar eşit, birliklere bak!',
            example: { question: '52 mı 57 mi büyük?', answer: '57', explanation: '7 > 2 (birlikler)!' }
          },
          {
            title: 'Sayı Doğrusu',
            content: 'Sayı doğrusunda sağdaki sayı büyük.',
            visual: '0 ─ 10 ─ 20 ─ 30 ─ 40 ─ 50 →',
            audio: 'Sağa gittikçe sayılar büyür!',
            example: { question: '25 ve 35 hangisi sağda?', answer: '35', explanation: '35 daha büyük, sağda!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '15, 8, 22, 3 küçükten büyüğe?', options: ['3,8,15,22', '22,15,8,3', '8,3,15,22', '15,22,3,8'], correctAnswer: '3,8,15,22', explanation: '3 < 8 < 15 < 22!' },
          { type: 'fill-blank', question: '40, 25, 60, 10 en küçüğü ___', correctAnswer: '10', explanation: '10 en küçük!' },
          { type: 'multiple-choice', question: '50, 35, 20, 65 en büyüğü?', options: ['20', '35', '50', '65'], correctAnswer: '65', explanation: '65 en büyük!' },
          { type: 'fill-blank', question: '45 ___ 54 (<, > veya =)', correctAnswer: '<', explanation: '4 onluk < 5 onluk!' },
          { type: 'multiple-choice', question: '78 ve 87 karşılaştır', options: ['78 > 87', '78 < 87', '78 = 87', 'Belli değil'], correctAnswer: '78 < 87', explanation: '7 < 8 (onluklar)!' },
          { type: 'fill-blank', question: '99, 11, 55, 33 büyükten küçüğe başı ___', correctAnswer: '99', explanation: '99 en büyük!' },
          { type: 'multiple-choice', question: '62 mı 26 mı büyük?', options: ['62', '26', 'Eşit', 'Belli değil'], correctAnswer: '62', explanation: '6 > 2 (onluklar)!' },
          { type: 'fill-blank', question: '30 < ___ < 40 (ortadaki sayı)', correctAnswer: '35', explanation: '35 ortada!' },
          { type: 'multiple-choice', question: '48 ve 84 hangisi sayı doğrusunda solda?', options: ['48', '84', 'Aynı yerde', 'Yok'], correctAnswer: '48', explanation: '48 < 84, solda!' },
          { type: 'fill-blank', question: '17, 71, 27, 72 en büyüğü ___', correctAnswer: '72', explanation: '72 en büyük!' }
        ]
      }
    }
  ]
};
