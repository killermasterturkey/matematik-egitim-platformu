// 3. SINIF - 1. TEMA: SAYILAR VE NİCELİKLER (1)
import { Theme } from '../../types';

export const tema1: Theme = {
  id: 'sayilar-ve-nicelikler-1',
  title: 'Sayılar ve Nicelikler (1)',
  description: '1000\'e kadar sayılar, basamak değeri ve örüntüler!',
  emoji: '🔢',
  color: 'from-purple-400 to-violet-500',
  bgColor: 'bg-purple-50',
  borderColor: 'border-purple-200',
  textColor: 'text-purple-600',
  hours: 26,
  objectives: [
    '1000\'e kadar sayıları temsil etme',
    'Basamak ve basamak değerini anlama',
    'Sayıları sıralama ve karşılaştırma',
    'Ritmik sayma yapma',
    'Tek ve çift sayıları ayırt etme',
    'Sayı örüntülerini keşfetme',
    'Tahmin stratejileri geliştirme'
  ],
  keywords: ['Sayı doğrusu', 'Basamak değeri', 'Birlik', 'Onluk', 'Yüzlük', 'Tek sayı', 'Çift sayı', 'Örüntü'],
  generalizations: [
    'Sayılar çoklukları temsil eder.',
    'Sayılar tek ve çift olarak sınıflandırılabilir.',
    'Ritmik saymalar örüntüler oluşturur.'
  ],
  topics: [
    {
      id: '1000e-kadar-sayilar',
      title: '1000\'e Kadar Sayılar',
      description: 'Üç basamaklı sayıları okuma ve yazma',
      emoji: '🔢',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['sayı', 'yüzlük', 'üç basamaklı', 'okuma', 'yazma'],
      content: {
        introduction: '1000\'e kadar olan sayıları öğrenecek ve bunları doğru okuyup yazacaksın!',
        motivationQuote: 'Büyük sayılar büyük başarılar demek! 🔢',
        funFacts: [
          '1000 yıllık ağaçlar var!',
          '1000 adım yaklaşık 1 kilometre!',
          'Antik Roma\'da 1000 için M harfi kullanılırdı!'
        ],
        steps: [
          {
            title: 'Yüzlükler',
            content: '100, 200, 300... şeklinde yüzer yüzer sayarız.',
            visual: '💯 100 | 💯💯 200 | 💯💯💯 300 ...',
            audio: 'Yüz, iki yüz, üç yüz... bin!',
            example: { question: '500\'den sonra hangi yüzlük gelir?', answer: '600', explanation: '500 + 100 = 600!' }
          },
          {
            title: 'Üç Basamaklı Sayılar',
            content: 'Yüzler, onlar ve birler basamağından oluşur.',
            visual: '345 = 3 yüzlük + 4 onluk + 5 birlik',
            audio: 'Üç yüz kırk beş: 3 yüzlük, 4 onluk, 5 birlik!',
            example: { question: '528\'de kaç yüzlük var?', answer: '5', explanation: '5 yüzlük (500)!' }
          },
          {
            title: 'Sayı Okuma',
            content: 'Önce yüzler, sonra onlar, en son birler okunur.',
            visual: '763 → Yedi yüz altmış üç',
            audio: 'Yedi yüz, altmış, üç diye okuruz!',
            example: { question: '492 nasıl okunur?', answer: 'Dört yüz doksan iki', explanation: '4 yüz + 90 + 2!' }
          },
          {
            title: 'Sayı Yazma',
            content: 'Duyduğun sayıyı rakamlarla yaz.',
            visual: 'Sekiz yüz yirmi beş → 825',
            audio: 'Sekiz yüz = 800, yirmi = 20, beş = 5, toplam 825!',
            example: { question: 'Altı yüz elli dört nasıl yazılır?', answer: '654', explanation: '600 + 50 + 4 = 654!' }
          },
          {
            title: 'Sayı Doğrusu',
            content: 'Sayıları doğru üzerinde sıralarız.',
            visual: '|--100--|--200--|--300--|--400--|--500--|',
            audio: 'Her çizgi bir yüzlüğü temsil eder!',
            example: { question: '250 hangi yüzlükler arasında?', answer: '200 ve 300', explanation: '250, 200\'den büyük 300\'den küçük!' }
          },
          {
            title: '1000 Sayısı',
            content: '999\'dan sonra 1000 gelir. 1000 = 10 tane 100\'dür.',
            visual: '999 + 1 = 1000 = 10 × 100',
            audio: 'Bin, en küçük dört basamaklı sayı!',
            example: { question: '1000\'de kaç yüzlük var?', answer: '10', explanation: '1000 = 10 × 100!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '724 nasıl okunur?', options: ['Yetmiş iki dört', 'Yedi yüz yirmi dört', 'Yedi iki dört', 'Yedi yüz iki dört'], correctAnswer: 'Yedi yüz yirmi dört', explanation: '7 yüzlük, 2 onluk, 4 birlik!' },
          { type: 'fill-blank', question: 'Beş yüz otuz altı = ___', correctAnswer: '536', explanation: '500 + 30 + 6 = 536!' },
          { type: 'multiple-choice', question: '800\'den sonra hangi yüzlük gelir?', options: ['700', '850', '900', '1000'], correctAnswer: '900', explanation: '800 + 100 = 900!' },
          { type: 'fill-blank', question: '999 + 1 = ___', correctAnswer: '1000', explanation: '999\'dan sonra 1000 gelir!' },
          { type: 'multiple-choice', question: '463\'te kaç onluk var?', options: ['3', '4', '6', '46'], correctAnswer: '6', explanation: '463\'te 6 onluk (60) var!' },
          { type: 'fill-blank', question: '_____ = 8 yüzlük + 5 onluk + 2 birlik', correctAnswer: '852', explanation: '800 + 50 + 2 = 852!' },
          { type: 'multiple-choice', question: '1000 = ? × 100', options: ['1', '5', '10', '100'], correctAnswer: '10', explanation: '1000 = 10 × 100!' },
          { type: 'fill-blank', question: '376\'da yüzler basamağı = ___', correctAnswer: '3', explanation: '3 yüzlük = 300!' },
          { type: 'multiple-choice', question: 'Hangisi en büyük?', options: ['589', '598', '985', '895'], correctAnswer: '985', explanation: 'En büyük yüzler basamağı: 9!' },
          { type: 'fill-blank', question: 'Dokuz yüz doksan dokuz = ___', correctAnswer: '999', explanation: '900 + 90 + 9 = 999!' }
        ]
      }
    },
    {
      id: 'basamak-degeri',
      title: 'Basamak Değeri',
      description: 'Rakamların bulunduğu yere göre değeri',
      emoji: '📊',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['basamak', 'değer', 'birlik', 'onluk', 'yüzlük'],
      content: {
        introduction: 'Aynı rakam farklı yerlerde farklı değerler alır. Bu basamak değeri!',
        motivationQuote: 'Yer değiştir, değer değişsin! 📊',
        funFacts: [
          'Basamak sistemi Hindistan\'da keşfedildi!',
          '0 rakamı basamak değerini değiştirmez!',
          'Roma rakamlarında basamak değeri yoktu!'
        ],
        steps: [
          {
            title: 'Birler Basamağı',
            content: 'En sağdaki basamak birler basamağıdır.',
            visual: '45̲3̲ → 3 birler basamağında, değeri 3',
            audio: 'En sağdaki rakam birler basamağında!',
            example: { question: '786\'da birler basamağındaki rakam?', answer: '6', explanation: 'En sağda 6 var!' }
          },
          {
            title: 'Onlar Basamağı',
            content: 'Sağdan ikinci basamak onlar basamağıdır.',
            visual: '4̲5̲3 → 5 onlar basamağında, değeri 50',
            audio: 'Ortadaki rakam onlar basamağında!',
            example: { question: '392\'de onlar basamağının değeri?', answer: '90', explanation: '9 × 10 = 90!' }
          },
          {
            title: 'Yüzler Basamağı',
            content: 'Sağdan üçüncü basamak yüzler basamağıdır.',
            visual: '4̲53 → 4 yüzler basamağında, değeri 400',
            audio: 'En soldaki rakam yüzler basamağında!',
            example: { question: '629\'da yüzler basamağının değeri?', answer: '600', explanation: '6 × 100 = 600!' }
          },
          {
            title: 'Basamak vs Basamak Değeri',
            content: 'Basamak: rakamın yeri. Basamak değeri: rakamın değeri.',
            visual: '572: 7 onlar basamağında, basamak değeri 70',
            audio: '7 rakamının değeri 70 çünkü onlar basamağında!',
            example: { question: '845\'te 4\'ün basamak değeri?', answer: '40', explanation: '4 onlar basamağında: 4 × 10 = 40!' }
          },
          {
            title: 'Sayıyı Çözümleme',
            content: 'Sayıyı basamak değerlerinin toplamı olarak yaz.',
            visual: '683 = 600 + 80 + 3',
            audio: '6 yüzlük + 8 onluk + 3 birlik = 683!',
            example: { question: '459 nasıl çözümlenir?', answer: '400 + 50 + 9', explanation: '4 yüzlük + 5 onluk + 9 birlik!' }
          },
          {
            title: 'Yer Değiştirme',
            content: 'Aynı rakamlar farklı sayılar oluşturabilir.',
            visual: '3, 5, 7 → 357, 375, 537, 573, 735, 753',
            audio: 'Üç rakamla 6 farklı sayı yapılabilir!',
            example: { question: '2, 4, 6 ile en büyük sayı?', answer: '642', explanation: 'En büyük rakam en sola!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '547\'de 4\'ün basamak değeri?', options: ['4', '40', '400', '47'], correctAnswer: '40', explanation: '4 onlar basamağında: 4 × 10 = 40!' },
          { type: 'fill-blank', question: '836 = 800 + ___ + 6', correctAnswer: '30', explanation: '3 onluk = 30!' },
          { type: 'multiple-choice', question: '925\'te yüzler basamağındaki rakam?', options: ['2', '5', '9', '25'], correctAnswer: '9', explanation: 'En soldaki rakam 9!' },
          { type: 'fill-blank', question: '762\'de 6\'nın basamak değeri = ___', correctAnswer: '60', explanation: '6 onlar basamağında!' },
          { type: 'multiple-choice', question: '1, 3, 5 ile en küçük 3 basamaklı sayı?', options: ['135', '153', '315', '531'], correctAnswer: '135', explanation: 'En küçük rakam en sola!' },
          { type: 'fill-blank', question: '_____ = 500 + 70 + 8', correctAnswer: '578', explanation: '5 yüzlük + 7 onluk + 8 birlik!' },
          { type: 'multiple-choice', question: '409\'da 0\'ın basamak değeri?', options: ['0', '9', '40', '90'], correctAnswer: '0', explanation: '0 × 10 = 0!' },
          { type: 'fill-blank', question: '283\'te birler basamağındaki rakam = ___', correctAnswer: '3', explanation: 'En sağdaki rakam 3!' },
          { type: 'multiple-choice', question: '700 + 20 + 5 = ?', options: ['725', '752', '257', '527'], correctAnswer: '725', explanation: '7 yüzlük + 2 onluk + 5 birlik!' },
          { type: 'fill-blank', question: '999\'da tüm rakamların basamak değerleri toplamı = ___', correctAnswer: '999', explanation: '900 + 90 + 9 = 999!' }
        ]
      }
    },
    {
      id: 'sayilari-siralama',
      title: 'Sayıları Sıralama',
      description: 'Sayıları küçükten büyüğe veya büyükten küçüğe sıralama',
      emoji: '📈',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['sıralama', 'küçükten büyüğe', 'büyükten küçüğe', 'karşılaştırma'],
      content: {
        introduction: 'Sayıları karşılaştırıp doğru sıraya koyabilmeyi öğreneceksin!',
        motivationQuote: 'Sıralı düşün, sıralı yaşa! 📈',
        funFacts: [
          'Bilgisayarlar saniyede milyonlarca sayı sıralayabilir!',
          'Sıralama algoritmaları çok önemli!',
          'En eski sıralama yöntemi 3000 yıl önce kullanıldı!'
        ],
        steps: [
          {
            title: 'Karşılaştırma Sembolleri',
            content: '< küçüktür, > büyüktür, = eşittir',
            visual: '5 < 8 (5 küçüktür 8) | 9 > 3 (9 büyüktür 3)',
            audio: 'Açık taraf büyük sayıya bakar!',
            example: { question: '456 ○ 465, hangi sembol?', answer: '<', explanation: '456 < 465 çünkü 56 < 65!' }
          },
          {
            title: 'Basamak Sayısına Göre',
            content: 'Daha çok basamaklı sayı daha büyüktür.',
            visual: '99 < 100 (2 basamak < 3 basamak)',
            audio: 'Basamak sayısı fazla olan büyük!',
            example: { question: '999 mı 1000 mı büyük?', answer: '1000', explanation: '4 basamak > 3 basamak!' }
          },
          {
            title: 'Yüzler Basamağına Göre',
            content: 'Aynı basamak sayısında önce yüzler karşılaştırılır.',
            visual: '723 > 623 (7 > 6)',
            audio: 'Yüzler basamağı büyük olan kazanır!',
            example: { question: '845 mı 945 mi büyük?', answer: '945', explanation: '9 > 8, yüzler basamağı!' }
          },
          {
            title: 'Onlar Basamağına Göre',
            content: 'Yüzler eşitse onlara bakılır.',
            visual: '567 > 543 (67 > 43)',
            audio: 'Yüzler eşit, onlara bak!',
            example: { question: '782 ○ 758', answer: '>', explanation: '82 > 58, onlar basamağı!' }
          },
          {
            title: 'Küçükten Büyüğe',
            content: 'Artan sıra: en küçükten başla.',
            visual: '234, 432, 342 → 234 < 342 < 432',
            audio: 'Küçükten büyüğe = artan sıra!',
            example: { question: '567, 576, 657 sırala', answer: '567 < 576 < 657', explanation: 'En küçükten başla!' }
          },
          {
            title: 'Büyükten Küçüğe',
            content: 'Azalan sıra: en büyükten başla.',
            visual: '234, 432, 342 → 432 > 342 > 234',
            audio: 'Büyükten küçüğe = azalan sıra!',
            example: { question: '890, 809, 980 sırala (azalan)', answer: '980 > 890 > 809', explanation: 'En büyükten başla!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '678 ○ 687', options: ['<', '>', '='], correctAnswer: '<', explanation: '78 < 87!' },
          { type: 'fill-blank', question: '345, 354, 435 → En büyük: ___', correctAnswer: '435', explanation: '4 yüzlük en büyük!' },
          { type: 'multiple-choice', question: 'Hangisi en küçük?', options: ['789', '798', '879', '897'], correctAnswer: '789', explanation: 'Onlar basamağı en küçük!' },
          { type: 'fill-blank', question: '999 ___ 1000', correctAnswer: '<', explanation: '999 < 1000!' },
          { type: 'multiple-choice', question: '456, 546, 645 artan sıra?', options: ['645, 546, 456', '456, 546, 645', '546, 456, 645', '456, 645, 546'], correctAnswer: '456, 546, 645', explanation: 'Küçükten büyüğe!' },
          { type: 'fill-blank', question: '823, 832, 283 → En küçük: ___', correctAnswer: '283', explanation: '2 yüzlük en küçük!' },
          { type: 'multiple-choice', question: '500 ○ 499', options: ['<', '>', '='], correctAnswer: '>', explanation: '500 > 499!' },
          { type: 'fill-blank', question: '729 > ___ > 719', correctAnswer: 'örn: 725', explanation: '719 ile 729 arasında bir sayı!' },
          { type: 'multiple-choice', question: '100, 10, 1000 azalan sıra?', options: ['10, 100, 1000', '1000, 100, 10', '100, 1000, 10', '1000, 10, 100'], correctAnswer: '1000, 100, 10', explanation: 'Büyükten küçüğe!' },
          { type: 'fill-blank', question: '567 = 500 + 60 + ___', correctAnswer: '7', explanation: '567 = 500 + 60 + 7!' }
        ]
      }
    },
    {
      id: 'ritmik-sayma',
      title: 'Ritmik Sayma',
      description: 'Belirli aralıklarla ileri ve geri sayma',
      emoji: '🎵',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['ritmik', 'sayma', 'atlayarak', 'ileri', 'geri', 'örüntü'],
      content: {
        introduction: 'Belli aralıklarla sayarak örüntüler keşfedeceksin!',
        motivationQuote: 'Ritimle say, örüntü bul! 🎵',
        funFacts: [
          'Müzik de ritmik sayma kullanır!',
          'Kalp atışları ritmiktir!',
          'Gezegenler güneş etrafında ritmik döner!'
        ],
        steps: [
          {
            title: 'Dörder Sayma',
            content: '4, 8, 12, 16, 20... Her adımda 4 ekle.',
            visual: '4 → 8 → 12 → 16 → 20 → 24 → ...',
            audio: 'Dört, sekiz, on iki, on altı, yirmi!',
            example: { question: '4, 8, 12, ?, 20', answer: '16', explanation: '12 + 4 = 16!' }
          },
          {
            title: 'Beşer Sayma',
            content: '5, 10, 15, 20, 25... Her adımda 5 ekle.',
            visual: '5 → 10 → 15 → 20 → 25 → 30 → ...',
            audio: 'Beş, on, on beş, yirmi, yirmi beş!',
            example: { question: '25, 30, 35, ?', answer: '40', explanation: '35 + 5 = 40!' }
          },
          {
            title: 'Onarlı Sayma (100\'e kadar)',
            content: '10, 20, 30... 100\'e kadar. Her adımda 10 ekle.',
            visual: '10 → 20 → 30 → 40 → 50 → ... → 100',
            audio: 'On, yirmi, otuz... yüz!',
            example: { question: '60, 70, 80, ?', answer: '90', explanation: '80 + 10 = 90!' }
          },
          {
            title: 'Yüzerlik Sayma (1000\'e)',
            content: '100, 200, 300... 1000\'e kadar.',
            visual: '100 → 200 → 300 → ... → 1000',
            audio: 'Yüz, iki yüz, üç yüz... bin!',
            example: { question: '700, 800, ?', answer: '900', explanation: '800 + 100 = 900!' }
          },
          {
            title: 'Geriye Sayma',
            content: 'Aynı aralıklarla çıkararak say.',
            visual: '50 → 45 → 40 → 35 → 30 (beşer geri)',
            audio: 'Elli, kırk beş, kırk, otuz beş, otuz!',
            example: { question: '28, 24, 20, ?', answer: '16', explanation: '20 - 4 = 16 (dörder geri)!' }
          },
          {
            title: 'Örüntü Bulma',
            content: 'Ritmik saymada artış veya azalış miktarını bul.',
            visual: '3, 6, 9, 12, ? → +3 örüntüsü',
            audio: 'Her adımda 3 ekleniyor, üçer sayma!',
            example: { question: '7, 14, 21, 28, ? Örüntü?', answer: '+7', explanation: 'Yedişer sayma!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '5, 10, 15, 20, ?', options: ['22', '23', '25', '30'], correctAnswer: '25', explanation: 'Beşer sayma: 20 + 5 = 25!' },
          { type: 'fill-blank', question: '100, 200, 300, ___, 500', correctAnswer: '400', explanation: 'Yüzer sayma!' },
          { type: 'multiple-choice', question: '4, 8, 12, 16 örüntüsü?', options: ['+2', '+3', '+4', '+5'], correctAnswer: '+4', explanation: 'Dörder sayma!' },
          { type: 'fill-blank', question: '30, 25, 20, 15, ___', correctAnswer: '10', explanation: 'Beşer geri: 15 - 5 = 10!' },
          { type: 'multiple-choice', question: '50, 60, 70, ? (onarlı)', options: ['75', '80', '85', '90'], correctAnswer: '80', explanation: '70 + 10 = 80!' },
          { type: 'fill-blank', question: '12, 16, 20, 24, ___', correctAnswer: '28', explanation: 'Dörder sayma: 24 + 4 = 28!' },
          { type: 'multiple-choice', question: '1000, 900, 800, ?', options: ['600', '700', '750', '850'], correctAnswer: '700', explanation: 'Yüzer geri: 800 - 100 = 700!' },
          { type: 'fill-blank', question: '6, 12, 18, 24, ___ (altışar)', correctAnswer: '30', explanation: '24 + 6 = 30!' },
          { type: 'multiple-choice', question: '45, 40, 35, 30 örüntüsü?', options: ['+5', '-5', '+10', '-10'], correctAnswer: '-5', explanation: 'Beşer geriye!' },
          { type: 'fill-blank', question: '100, 90, 80, ___, 60', correctAnswer: '70', explanation: 'Onar geri: 80 - 10 = 70!' }
        ]
      }
    },
    {
      id: 'tek-cift-sayilar',
      title: 'Tek ve Çift Sayılar',
      description: 'Sayıları tek ve çift olarak sınıflandırma',
      emoji: '🔄',
      duration: '40 dk',
      difficulty: 1,
      keywords: ['tek', 'çift', 'sınıflandırma', 'birler basamağı'],
      content: {
        introduction: 'Hangi sayılar tek, hangileri çift? Birler basamağına bakarak anlayacaksın!',
        motivationQuote: 'Tek mi çift mi? Birler söyler! 🔄',
        funFacts: [
          'Sıfır çift sayıdır!',
          'Çift sayılar ikiye tam bölünür!',
          'Tek sayıların toplamı her zaman çift!'
        ],
        steps: [
          {
            title: 'Çift Sayılar',
            content: 'Birler basamağı 0, 2, 4, 6, 8 olan sayılar çifttir.',
            visual: '2, 4, 6, 8, 10, 12, 14... (çift)',
            audio: 'Sonu 0, 2, 4, 6, 8 ise çift!',
            example: { question: '346 tek mi çift mi?', answer: 'Çift', explanation: 'Sonu 6, çift!' }
          },
          {
            title: 'Tek Sayılar',
            content: 'Birler basamağı 1, 3, 5, 7, 9 olan sayılar tektir.',
            visual: '1, 3, 5, 7, 9, 11, 13... (tek)',
            audio: 'Sonu 1, 3, 5, 7, 9 ise tek!',
            example: { question: '587 tek mi çift mi?', answer: 'Tek', explanation: 'Sonu 7, tek!' }
          },
          {
            title: 'Büyük Sayılarda',
            content: 'Sadece birler basamağına bak.',
            visual: '752 → sonu 2 → ÇİFT | 839 → sonu 9 → TEK',
            audio: 'Ne kadar büyük olursa olsun, sona bak!',
            example: { question: '1000 tek mi çift mi?', answer: 'Çift', explanation: 'Sonu 0, çift!' }
          },
          {
            title: 'Çift + Çift = ?',
            content: 'İki çift sayının toplamı her zaman çifttir.',
            visual: '4 + 6 = 10 (çift) | 8 + 2 = 10 (çift)',
            audio: 'Çift artı çift eşittir çift!',
            example: { question: '12 + 8 = ? Tek mi çift mi?', answer: 'Çift (20)', explanation: 'Çift + çift = çift!' }
          },
          {
            title: 'Tek + Tek = ?',
            content: 'İki tek sayının toplamı her zaman çifttir.',
            visual: '3 + 5 = 8 (çift) | 7 + 9 = 16 (çift)',
            audio: 'Tek artı tek eşittir çift!',
            example: { question: '11 + 7 = ? Tek mi çift mi?', answer: 'Çift (18)', explanation: 'Tek + tek = çift!' }
          },
          {
            title: 'Tek + Çift = ?',
            content: 'Bir tek bir çift sayının toplamı her zaman tektir.',
            visual: '3 + 4 = 7 (tek) | 5 + 8 = 13 (tek)',
            audio: 'Tek artı çift eşittir tek!',
            example: { question: '9 + 6 = ? Tek mi çift mi?', answer: 'Tek (15)', explanation: 'Tek + çift = tek!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '458 tek mi çift mi?', options: ['Tek', 'Çift'], correctAnswer: 'Çift', explanation: 'Sonu 8, çift!' },
          { type: 'fill-blank', question: '673 ___ sayıdır', correctAnswer: 'tek', explanation: 'Sonu 3, tek!' },
          { type: 'multiple-choice', question: '14 + 26 sonucu?', options: ['Tek', 'Çift'], correctAnswer: 'Çift', explanation: 'Çift + çift = çift!' },
          { type: 'fill-blank', question: '7 + 9 = ___ (tek/çift)', correctAnswer: 'çift', explanation: 'Tek + tek = çift (16)!' },
          { type: 'multiple-choice', question: 'Hangisi tek?', options: ['120', '352', '487', '694'], correctAnswer: '487', explanation: 'Sonu 7, tek!' },
          { type: 'fill-blank', question: '5 + 8 = ___ (tek/çift)', correctAnswer: 'tek', explanation: 'Tek + çift = tek (13)!' },
          { type: 'multiple-choice', question: '1000 tek mi çift mi?', options: ['Tek', 'Çift'], correctAnswer: 'Çift', explanation: 'Sonu 0, çift!' },
          { type: 'fill-blank', question: '999 ___ sayıdır', correctAnswer: 'tek', explanation: 'Sonu 9, tek!' },
          { type: 'multiple-choice', question: 'En küçük üç basamaklı çift sayı?', options: ['100', '101', '102', '110'], correctAnswer: '100', explanation: '100, sonu 0 çift!' },
          { type: 'fill-blank', question: '246 + 135 sonucu ___ (tek/çift)', correctAnswer: 'tek', explanation: 'Çift + tek = tek!' }
        ]
      }
    },
    {
      id: 'sayi-oruntuleri',
      title: 'Sayı Örüntüleri',
      description: 'Sayı dizilerindeki kuralı bulma',
      emoji: '🧩',
      duration: '45 dk',
      difficulty: 3,
      keywords: ['örüntü', 'dizi', 'kural', 'çıkarım', 'devam ettirme'],
      content: {
        introduction: 'Sayılar arasındaki gizli kuralları keşfedecek ve örüntüleri devam ettireceksin!',
        motivationQuote: 'Kuralı bul, geleceği gör! 🧩',
        funFacts: [
          'Fibonacci dizisi doğada çok görülür!',
          'Bilgisayarlar örüntü bulmada çok iyi!',
          'Şifreler bile örüntülerle çözülür!'
        ],
        steps: [
          {
            title: 'Sabit Artış',
            content: 'Her adımda aynı sayı eklenir.',
            visual: '2, 5, 8, 11, 14 → her adımda +3',
            audio: 'İki, beş, sekiz... Her seferinde 3 ekliyoruz!',
            example: { question: '3, 7, 11, 15, ?', answer: '19', explanation: 'Her adımda +4: 15 + 4 = 19!' }
          },
          {
            title: 'Sabit Azalış',
            content: 'Her adımda aynı sayı çıkarılır.',
            visual: '50, 45, 40, 35, 30 → her adımda -5',
            audio: 'Elli, kırk beş, kırk... Her seferinde 5 çıkarıyoruz!',
            example: { question: '100, 90, 80, 70, ?', answer: '60', explanation: 'Her adımda -10: 70 - 10 = 60!' }
          },
          {
            title: 'İkiye Katlama',
            content: 'Her sayı bir öncekinin 2 katı.',
            visual: '1, 2, 4, 8, 16, 32 → ×2',
            audio: 'Bir, iki, dört, sekiz... İkiye katlıyoruz!',
            example: { question: '3, 6, 12, 24, ?', answer: '48', explanation: '24 × 2 = 48!' }
          },
          {
            title: 'Değişen Artış',
            content: 'Artış miktarı da düzenli değişir.',
            visual: '1, 2, 4, 7, 11 → +1, +2, +3, +4...',
            audio: 'Artış miktarı 1, 2, 3, 4 şeklinde artıyor!',
            example: { question: '2, 3, 5, 8, 12, ?', answer: '17', explanation: '+1, +2, +3, +4, +5: 12 + 5 = 17!' }
          },
          {
            title: 'Tekrarlayan Örüntü',
            content: 'Belirli bir grup tekrar eder.',
            visual: '1, 2, 3, 1, 2, 3, 1, 2, 3...',
            audio: 'Bir, iki, üç tekrar ediyor!',
            example: { question: '5, 10, 15, 5, 10, 15, 5, ?', answer: '10', explanation: '5, 10, 15 tekrarı!' }
          },
          {
            title: 'Kural İfade Etme',
            content: 'Örüntünün kuralını sözle açıkla.',
            visual: '4, 8, 12, 16 → "Her sayı 4\'ün katı" veya "Dörder artıyor"',
            audio: 'Kuralı bul ve açıkla!',
            example: { question: '10, 20, 30, 40 kuralı?', answer: 'Onar artıyor veya 10\'un katları', explanation: 'Her sayı öncekinden 10 fazla!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '5, 9, 13, 17, ?', options: ['19', '20', '21', '22'], correctAnswer: '21', explanation: '+4 örüntüsü: 17 + 4 = 21!' },
          { type: 'fill-blank', question: '2, 4, 8, 16, ___', correctAnswer: '32', explanation: '×2 örüntüsü: 16 × 2 = 32!' },
          { type: 'multiple-choice', question: '100, 95, 90, 85, ?', options: ['75', '80', '82', '84'], correctAnswer: '80', explanation: '-5 örüntüsü: 85 - 5 = 80!' },
          { type: 'fill-blank', question: '1, 3, 6, 10, ___ (+2, +3, +4...)', correctAnswer: '15', explanation: '+5: 10 + 5 = 15!' },
          { type: 'multiple-choice', question: '7, 14, 21, 28 kuralı?', options: ['+5', '+6', '+7', '+8'], correctAnswer: '+7', explanation: 'Yedişer artıyor!' },
          { type: 'fill-blank', question: '50, 40, 30, 20, ___', correctAnswer: '10', explanation: '-10 örüntüsü!' },
          { type: 'multiple-choice', question: '3, 6, 12, 24, ?', options: ['30', '36', '48', '96'], correctAnswer: '48', explanation: '×2: 24 × 2 = 48!' },
          { type: 'fill-blank', question: '1, 4, 9, 16, ___ (kare sayılar)', correctAnswer: '25', explanation: '5² = 25!' },
          { type: 'multiple-choice', question: 'A, B, C, A, B, C, A, ?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'B', explanation: 'ABC tekrarı!' },
          { type: 'fill-blank', question: '11, 22, 33, 44, ___', correctAnswer: '55', explanation: '+11 örüntüsü!' }
        ]
      }
    },
    {
      id: 'tahmin-stratejileri',
      title: 'Tahmin Stratejileri',
      description: 'Nesne sayılarını tahmin etme',
      emoji: '🎯',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['tahmin', 'strateji', 'yaklaşık', 'gruplama', 'karşılaştırma'],
      content: {
        introduction: 'Saymadan önce tahmin yapmayı öğreneceksin. İyi tahmin, iyi strateji demek!',
        motivationQuote: 'Önce tahmin et, sonra kontrol et! 🎯',
        funFacts: [
          'Uzmanlar çok iyi tahmin yapar!',
          'Tahmin becerisi geliştirilebilir!',
          'Marketlerde stok tahmini çok önemli!'
        ],
        steps: [
          {
            title: 'Referans Grubu',
            content: '10 veya 20 nesnelik bir grup belirle, karşılaştır.',
            visual: '🔵🔵🔵🔵🔵 (10 tane) → Diğer grup bunun kaç katı?',
            audio: '10 nesneyi say, diğerlerini karşılaştır!',
            example: { question: '10 elma gördün, yanındaki grup?', answer: 'Yaklaşık 30 (3 grup)', explanation: '3 tane 10\'luk grup!' }
          },
          {
            title: 'Bölgelere Ayırma',
            content: 'Alanı parçalara böl, bir parçayı say, çarp.',
            visual: '[ A ] [ B ] [ C ] → A\'da 15 varsa, toplam ≈ 45',
            audio: 'Bir parçayı say, parça sayısıyla çarp!',
            example: { question: '4 eşit bölge, birinde 20 nesne. Toplam?', answer: '≈ 80', explanation: '4 × 20 = 80!' }
          },
          {
            title: 'Yuvarlatma',
            content: 'Tahmini yuvarlak sayılara yuvarla.',
            visual: '47 ≈ 50 | 123 ≈ 120 veya 130',
            audio: 'Yaklaşık değerler işimizi kolaylaştırır!',
            example: { question: '38 + 52 yaklaşık?', answer: '≈ 90', explanation: '40 + 50 = 90!' }
          },
          {
            title: 'Karşılaştırma',
            content: 'Bildiğin bir miktarla karşılaştır.',
            visual: 'Bir avuç fıstık ≈ 15-20 tane',
            audio: 'Daha önce saydığın benzer şeyleri hatırla!',
            example: { question: 'Kavanozda kaç bilye? (Kutu: 50)', answer: 'Kavanoz kutudan büyükse > 50', explanation: 'Referansla karşılaştır!' }
          },
          {
            title: 'Tahmin ve Kontrol',
            content: 'Tahmin yap, sonra say ve karşılaştır.',
            visual: 'Tahmin: 40 | Gerçek: 45 | Fark: 5 (yakın!)',
            audio: 'Tahminini kontrol et, geliştir!',
            example: { question: 'Tahmin: 30, Gerçek: 28. Başarılı mı?', answer: 'Evet', explanation: 'Fark sadece 2!' }
          },
          {
            title: 'İyi Tahmin Nedir?',
            content: 'Gerçeğe yakın tahmin iyi tahmindir.',
            visual: 'Gerçek: 50 | Tahmin: 48 ✓ | Tahmin: 25 ✗',
            audio: 'Fark ne kadar azsa tahmin o kadar iyi!',
            example: { question: 'Gerçek 100. Hangi tahmin daha iyi: 95 mi 110 mu?', answer: '95', explanation: '|100-95| = 5 < |100-110| = 10!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '10 nesne referans. 4 grup varsa toplam?', options: ['30', '40', '50', '60'], correctAnswer: '40', explanation: '4 × 10 = 40!' },
          { type: 'fill-blank', question: '3 eşit bölge, birinde 25. Toplam ≈ ___', correctAnswer: '75', explanation: '3 × 25 = 75!' },
          { type: 'multiple-choice', question: '47 + 53 yaklaşık?', options: ['90', '100', '110', '120'], correctAnswer: '100', explanation: '50 + 50 = 100!' },
          { type: 'fill-blank', question: '28 ≈ ___ (en yakın onluk)', correctAnswer: '30', explanation: '28, 30\'a daha yakın!' },
          { type: 'multiple-choice', question: 'Gerçek: 60, Tahmin: 55. Fark?', options: ['3', '4', '5', '6'], correctAnswer: '5', explanation: '60 - 55 = 5!' },
          { type: 'fill-blank', question: '97 ≈ ___ (en yakın onluk)', correctAnswer: '100', explanation: '97, 100\'e daha yakın!' },
          { type: 'multiple-choice', question: 'Hangisi 80 için daha iyi tahmin?', options: ['60', '75', '95', '50'], correctAnswer: '75', explanation: '|80-75| = 5, en küçük fark!' },
          { type: 'fill-blank', question: '5 kutu, her kutuda ~20 kalem. Toplam ≈ ___', correctAnswer: '100', explanation: '5 × 20 = 100!' },
          { type: 'multiple-choice', question: '49 + 51 = ?', options: ['90', '100', '110', '98'], correctAnswer: '100', explanation: '49 + 51 = 100 (tam!)' },
          { type: 'fill-blank', question: 'Gerçek 45, tahmin 50. Fark = ___', correctAnswer: '5', explanation: '50 - 45 = 5!' }
        ]
      }
    },
    {
      id: 'tek-cift-toplami',
      title: 'Tek ve Çift Sayıların Toplamı',
      description: 'Tek ve çift sayıları topladığında ne olur?',
      emoji: '➕',
      duration: '35 dk',
      difficulty: 2,
      keywords: ['tek', 'çift', 'toplam', 'kural', 'sonuç'],
      content: {
        introduction: 'Tek ve çift sayıları topladığında sonuç ne olur? Kuralları keşfedelim!',
        motivationQuote: 'Kuralı öğren, sonucu bil! ➕',
        funFacts: [
          'Bu kural her zaman geçerli!',
          'Binlerce yıldır bilinen bir gerçek!',
          'Matematikçiler bunu "parite" der!'
        ],
        steps: [
          {
            title: 'Çift + Çift = Çift',
            content: 'İki çift sayıyı topladığında sonuç her zaman çift.',
            visual: '2 + 4 = 6 ✓ | 10 + 8 = 18 ✓ | 100 + 200 = 300 ✓',
            audio: 'Çift artı çift eşittir çift!',
            example: { question: '24 + 16 = ? Tek mi çift mi?', answer: 'Çift (40)', explanation: 'Çift + çift = çift!' }
          },
          {
            title: 'Tek + Tek = Çift',
            content: 'İki tek sayıyı topladığında sonuç her zaman çift.',
            visual: '3 + 5 = 8 ✓ | 7 + 9 = 16 ✓ | 101 + 99 = 200 ✓',
            audio: 'Tek artı tek eşittir çift!',
            example: { question: '15 + 27 = ? Tek mi çift mi?', answer: 'Çift (42)', explanation: 'Tek + tek = çift!' }
          },
          {
            title: 'Tek + Çift = Tek',
            content: 'Bir tek bir çift topladığında sonuç her zaman tek.',
            visual: '3 + 4 = 7 ✓ | 5 + 10 = 15 ✓ | 99 + 100 = 199 ✓',
            audio: 'Tek artı çift eşittir tek!',
            example: { question: '13 + 20 = ? Tek mi çift mi?', answer: 'Tek (33)', explanation: 'Tek + çift = tek!' }
          },
          {
            title: 'Neden Böyle?',
            content: 'Çift sayılar ikiye tam bölünür, tek sayılar 1 artar.',
            visual: '2+2=4 (ikişer ikişer) | 3+3=6 (birer artar, çift olur)',
            audio: 'İki tek bir araya gelince çift oluyor!',
            example: { question: '1 + 1 = ? Neden çift?', answer: '2 (çift)', explanation: 'İki yarım = bir bütün!' }
          },
          {
            title: 'Üç Sayının Toplamı',
            content: 'Üç sayının toplamında tek sayıların adedine bak.',
            visual: 'Tek+Tek+Tek=Tek | Tek+Tek+Çift=Çift | Tek+Çift+Çift=Tek',
            audio: 'Tek sayı adedi tek ise sonuç tek!',
            example: { question: '3 + 5 + 2 = ? Tek mi çift mi?', answer: 'Çift (10)', explanation: '2 tek sayı var: Tek+Tek=Çift, Çift+Çift=Çift!' }
          },
          {
            title: 'Kuralı Uygula',
            content: 'Hesaplamadan sonucun tek mi çift mi olduğunu bil.',
            visual: '457 + 328 → Tek + Çift = TEK',
            audio: 'Birler basamağına bak: 7 tek, 8 çift, sonuç tek!',
            example: { question: '999 + 1 sonucu?', answer: 'Çift (1000)', explanation: 'Tek + tek = çift!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '22 + 44 sonucu?', options: ['Tek', 'Çift'], correctAnswer: 'Çift', explanation: 'Çift + çift = çift!' },
          { type: 'fill-blank', question: '35 + 17 = ___ (tek/çift)', correctAnswer: 'çift', explanation: 'Tek + tek = çift!' },
          { type: 'multiple-choice', question: '50 + 31 sonucu?', options: ['Tek', 'Çift'], correctAnswer: 'Tek', explanation: 'Çift + tek = tek!' },
          { type: 'fill-blank', question: '100 + 100 = ___ (tek/çift)', correctAnswer: 'çift', explanation: 'Çift + çift = çift!' },
          { type: 'multiple-choice', question: '77 + 23 + 10 sonucu?', options: ['Tek', 'Çift'], correctAnswer: 'Çift', explanation: 'Tek+Tek=Çift, Çift+Çift=Çift!' },
          { type: 'fill-blank', question: '5 + 5 + 5 = ___ (tek/çift)', correctAnswer: 'tek', explanation: '3 tek sayı, sonuç tek!' },
          { type: 'multiple-choice', question: '246 + 135 sonucu?', options: ['Tek', 'Çift'], correctAnswer: 'Tek', explanation: 'Çift + tek = tek!' },
          { type: 'fill-blank', question: '999 + 999 = ___ (tek/çift)', correctAnswer: 'çift', explanation: 'Tek + tek = çift!' },
          { type: 'multiple-choice', question: '1 + 2 + 3 + 4 sonucu?', options: ['Tek', 'Çift'], correctAnswer: 'Çift', explanation: '2 tek, 2 çift: Çift!' },
          { type: 'fill-blank', question: '0 + 1 = ___ (tek/çift)', correctAnswer: 'tek', explanation: 'Çift + tek = tek!' }
        ]
      }
    }
  ]
};
