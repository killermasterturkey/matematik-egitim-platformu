// 4. SINIF - TEMA 3: İŞLEMLERDEN CEBİRSEL DÜŞÜNMEYE
// 50 saat (%28) - 9 Öğrenme Çıktısı

import { Theme } from '../../types';

export const tema3: Theme = {
  id: 'grade4-tema3',
  title: 'İşlemlerden Cebirsel Düşünmeye',
  description: 'Dört işlem, zihinden hesaplama, problem çözme ve cebirsel düşünme becerileri kazanıyoruz!',
  emoji: '🧮',
  color: 'from-purple-400 to-violet-500',
  bgColor: 'bg-purple-50',
  borderColor: 'border-purple-200',
  textColor: 'text-purple-600',
  hours: 50,
  objectives: [
    'Toplama ve çıkarmayı zihinden yapabilme',
    'Dört basamaklı sayılarla işlem yapabilme',
    'Çarpma ve bölme sonuçlarını tahmin edebilme',
    '10, 100, 1000 ile kısa yol işlemler yapabilme',
    'Dört işlem problemleri çözebilme',
    'Problem kurabilme',
    'Eşitliğin farklı anlamlarını kavrayabilme'
  ],
  keywords: [
    'Toplama', 'Çıkarma', 'Çarpma', 'Bölme', 'Zihinden işlem',
    'Tahmin', 'Kısa yol', 'Problem çözme', 'Problem kurma', 'Eşitlik'
  ],
  generalizations: [
    'Dört işlem arasında ilişkiler vardır.',
    '10, 100 ve 1000 ile çarpma ve bölmenin kısa yolları vardır.',
    'Problemler farklı stratejilerle çözülebilir ve kurulabilir.'
  ],
  topics: [
    // Konu 1: Zihinden Toplama ve Çıkarma
    {
      id: 'grade4-tema3-konu1',
      title: 'Zihinden Toplama ve Çıkarma',
      description: 'Zihinden hızlı hesaplama stratejileri öğreniyoruz',
      emoji: '🧠',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Zihinden işlem', 'Strateji', 'Hızlı hesaplama', 'Mental matematik'],
      content: {
        introduction: 'Merhaba genç matematikçiler! Bugün beyninizi süper bir hesap makinesine dönüştüreceğiz! Zihinden hızlı toplama ve çıkarma yapmanın sırlarını öğreneceğiz. Hazır mısınız? 🧠✨',
        motivationQuote: 'Zihinden hesaplama, beynin jimnastiğidir! Ne kadar çok pratik yaparsan, o kadar güçlü olur! 💪',
        funFacts: [
          '🎯 Bazı insanlar zihinden 10 basamaklı sayıları bile toplayabilir!',
          '🧠 Zihinden hesaplama, beyin hücrelerini güçlendirir!',
          '⚡ Matematikçi Shakuntala Devi, 13 basamaklı iki sayıyı 28 saniyede çarpmıştır!'
        ],
        steps: [
          {
            title: 'Onluk Arkadaşlar Stratejisi',
            content: 'Sayıları 10\'a tamamlayarak toplamayı kolaylaştırırız. 28 + 45 için: 28 + 2 = 30, 30 + 43 = 73',
            visual: '28 + 45 = ?\n28 + 2 = 30 (onluğa tamamla)\n45 - 2 = 43 (aynı miktarı çıkar)\n30 + 43 = 73 ✅',
            audio: 'Sayılardan birini 10\'a veya 100\'e tamamlamak, hesaplamayı kolaylaştırır.',
            example: {
              question: '47 + 36 işlemini onluk arkadaşlar stratejisiyle yapın',
              answer: '83',
              explanation: '47 + 3 = 50, 36 - 3 = 33, 50 + 33 = 83'
            }
          },
          {
            title: 'Basamak Basamak Toplama',
            content: 'Sayıları basamaklarına ayırarak toplayabiliriz. 254 + 123: Yüzler: 200 + 100 = 300, Onlar: 50 + 20 = 70, Birler: 4 + 3 = 7',
            visual: '254 + 123\n= (200 + 100) + (50 + 20) + (4 + 3)\n= 300 + 70 + 7\n= 377 ✅',
            audio: 'Büyük sayıları basamaklarına ayırarak toplamak, zihinden hesaplamayı kolaylaştırır.',
            example: {
              question: '345 + 231 işlemini basamak basamak yapın',
              answer: '576',
              explanation: '300 + 200 = 500, 40 + 30 = 70, 5 + 1 = 6, Toplam: 576'
            }
          },
          {
            title: 'Eksiltme Stratejisi',
            content: 'Çıkarma işleminde, büyük sayıyı yuvarlayıp sonra düzeltebiliriz. 73 - 28: 73 - 30 = 43, 43 + 2 = 45',
            visual: '73 - 28 = ?\n28 yerine 30 çıkar: 73 - 30 = 43\nFazla çıkarılanı ekle: 43 + 2 = 45 ✅',
            audio: 'Çıkarma işleminde sayıyı yuvarlayarak hesaplama yapmak, sonra düzeltmek daha kolaydır.',
            example: {
              question: '85 - 37 işlemini bu stratejiyle yapın',
              answer: '48',
              explanation: '85 - 40 = 45, 45 + 3 = 48 (3 fazla çıkardık, ekledik)'
            }
          },
          {
            title: 'Sayı Doğrusu ile Zıplama',
            content: 'Zihinde sayı doğrusu hayal edip, yuvarlar sayılara zıplayarak hesap yapabiliriz.',
            visual: '156 + 47 = ?\n156 → 160 (+4)\n160 → 200 (+40)\n200 → 203 (+3)\nToplam eklenen: 4 + 40 + 3 = 47 ✅\nSonuç: 203',
            audio: 'Sayı doğrusunda yuvarlar sayılara atlayarak ilerlemek, zihinden hesaplamayı görselleştirir.',
            example: {
              question: '238 + 54 işlemini sayı doğrusu ile yapın',
              answer: '292',
              explanation: '238 → 240 (+2) → 290 (+50) → 292 (+2) = 292'
            }
          },
          {
            title: 'İkiye Katlama ve Yarılama',
            content: 'Bazı toplama ve çıkarmalar, ikiye katlamayla kolaylaşır. 25 + 27 için: 25 + 25 = 50, 50 + 2 = 52',
            visual: '25 + 27 = ?\n25 + 25 = 50 (iki 25 topla)\n50 + 2 = 52 (27 - 25 = 2 ekle) ✅',
            audio: 'Yakın sayıları toplarken, birini ikiye katlayıp farkı eklemek pratik bir yoldur.',
            example: {
              question: '48 + 46 işlemini ikiye katlama ile yapın',
              answer: '94',
              explanation: '48 × 2 = 96, 96 - 2 = 94 veya 46 × 2 = 92, 92 + 2 = 94'
            }
          },
          {
            title: 'Pratik ve Hız',
            content: 'Zihinden hesaplama bir kas gibidir - ne kadar çok çalışırsan o kadar güçlenir! Her gün biraz pratik yapmalıyız.',
            visual: '🏋️ Beyin Jimnastiği\n\nGünlük Pratik:\n• 5 zihinden toplama\n• 5 zihinden çıkarma\n• Süreyi ölç, her gün azalt!',
            audio: 'Günlük kısa pratikler, zihinden hesaplama hızınızı artırır. Her gün 5 dakika yeterlidir.',
            example: {
              question: 'Zihinden çöz: 67 + 45 - 22',
              answer: '90',
              explanation: '67 + 45 = 112, 112 - 22 = 90'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '56 + 38 işleminin sonucu zihinden kaçtır?',
            options: ['84', '94', '92', '104'],
            correctAnswer: '94',
            explanation: '56 + 4 = 60, 38 - 4 = 34, 60 + 34 = 94'
          },
          {
            type: 'fill-blank',
            question: '82 - 35 = ___',
            correctAnswer: '47',
            explanation: '82 - 35: 82 - 40 = 42, 42 + 5 = 47'
          },
          {
            type: 'multiple-choice',
            question: '125 + 67 işlemini zihinden yaparsak sonuç nedir?',
            options: ['182', '192', '202', '212'],
            correctAnswer: '192',
            explanation: '125 + 75 = 200, 200 - 8 = 192 veya basamak basamak: 100+0=100, 25+67=92, 192'
          },
          {
            type: 'fill-blank',
            question: '243 + 158 = ___',
            correctAnswer: '401',
            explanation: '200 + 100 = 300, 40 + 50 = 90, 3 + 8 = 11, 300 + 90 + 11 = 401'
          },
          {
            type: 'multiple-choice',
            question: '500 - 167 işleminin sonucu nedir?',
            options: ['343', '333', '323', '313'],
            correctAnswer: '333',
            explanation: '500 - 167 = 500 - 170 + 3 = 330 + 3 = 333'
          },
          {
            type: 'fill-blank',
            question: '89 + 76 = ___',
            correctAnswer: '165',
            explanation: '89 + 1 = 90, 76 - 1 = 75, 90 + 75 = 165'
          },
          {
            type: 'multiple-choice',
            question: 'Hangi strateji 48 + 52 için en uygun?',
            options: ['Basamak basamak', 'Onluğa tamamlama', '100\'e tamamlama', 'İkiye katlama'],
            correctAnswer: '100\'e tamamlama',
            explanation: '48 + 52 = 100, çünkü ikisi 100\'ü tamamlar!'
          },
          {
            type: 'fill-blank',
            question: '1000 - 456 = ___',
            correctAnswer: '544',
            explanation: '1000 - 456: 456\'yı 500\'e tamamla = 44, 1000 - 500 = 500, 500 + 44 = 544'
          },
          {
            type: 'multiple-choice',
            question: '378 + 225 işleminin sonucu nedir?',
            options: ['593', '603', '613', '583'],
            correctAnswer: '603',
            explanation: '378 + 225 = 378 + 222 + 3 = 600 + 3 = 603'
          },
          {
            type: 'fill-blank',
            question: '750 - 283 = ___',
            correctAnswer: '467',
            explanation: '750 - 300 = 450, 450 + 17 = 467 (17 fazla çıkardık)'
          }
        ]
      }
    },
    // Konu 2: Dört Basamaklı Sayılarla Toplama ve Çıkarma
    {
      id: 'grade4-tema3-konu2',
      title: 'Dört Basamaklı Sayılarla Toplama ve Çıkarma',
      description: 'Büyük sayılarla toplama ve çıkarma işlemleri yapıyoruz',
      emoji: '📊',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Dört basamaklı', 'Toplama', 'Çıkarma', 'Elde', 'Borç alma'],
      content: {
        introduction: 'Merhaba matematikçiler! Bugün büyük sayıların dünyasına dalıyoruz! Binlerle, on binlerle toplama ve çıkarma yapmayı öğreneceğiz. Büyük sayılar korkutucu değil, sadece daha çok basamak var! 🔢',
        motivationQuote: 'Büyük sayılar küçük adımlarla fethedilir! Her basamak bir zafer! 🏆',
        funFacts: [
          '🏦 Bankacılar her gün milyonlarca liralık işlem yapar!',
          '🌍 Dünya nüfusu 8 milyardan fazla - 10 basamaklı bir sayı!',
          '🔢 Antik Mısırlılar da binlerle hesap yapabiliyordu!'
        ],
        steps: [
          {
            title: 'Dört Basamaklı Sayıları Tanıyalım',
            content: 'Dört basamaklı sayılar 1000\'den 9999\'a kadar olan sayılardır. Binler, yüzler, onlar ve birler basamağı vardır.',
            visual: '5847\n↓↓↓↓\n5 = 5000 (binler)\n8 = 800 (yüzler)\n4 = 40 (onlar)\n7 = 7 (birler)',
            audio: 'Dört basamaklı sayılarda en soldaki basamak binler basamağıdır. Her basamak kendi değerini taşır.',
            example: {
              question: '6293 sayısının basamak değerlerini yazın',
              answer: '6000 + 200 + 90 + 3',
              explanation: '6 binler (6000), 2 yüzler (200), 9 onlar (90), 3 birler (3)'
            }
          },
          {
            title: 'Toplama İşlemi (Elde Var)',
            content: 'Dört basamaklı sayıları toplarken, basamakları alt alta yazıp sağdan sola doğru toplarız. 10\'u geçen değerlerde elde yaparız.',
            visual: '  3456\n+ 2867\n------\n  6323\n\nBirler: 6+7=13 (3 yaz, 1 elde)\nOnlar: 5+6+1=12 (2 yaz, 1 elde)\nYüzler: 4+8+1=13 (3 yaz, 1 elde)\nBinler: 3+2+1=6',
            audio: 'Toplama yaparken mutlaka basamakları alt alta hizalayın ve sağdan sola doğru toplayın.',
            example: {
              question: '4578 + 3645 işlemini yapın',
              answer: '8223',
              explanation: 'Birler: 8+5=13 (3 yaz, 1 elde), Onlar: 7+4+1=12, Yüzler: 5+6+1=12, Binler: 4+3+1=8'
            }
          },
          {
            title: 'Çıkarma İşlemi (Borç Alma)',
            content: 'Çıkarma işleminde üstteki rakam alttakinden küçükse, soldaki basamaktan 10 borç alırız.',
            visual: '  5234\n- 2867\n------\n  2367\n\nBirler: 4-7 yapamam, borç al: 14-7=7\nOnlar: 2-6 yapamam, borç al: 12-6=6\nYüzler: 1-8 yapamam, borç al: 11-8=3\nBinler: 4-2=2',
            audio: 'Çıkarma işleminde borç alma, büyük basamaktan 1 alıp, küçük basamağa 10 eklemektir.',
            example: {
              question: '7000 - 3456 işlemini yapın',
              answer: '3544',
              explanation: '7000\'den 3456 çıkarırken her basamakta borç alma gerekir'
            }
          },
          {
            title: 'Zincir Toplama',
            content: 'Birden fazla sayıyı art arda toplayabiliriz. Sayıları alt alta yazıp aynı şekilde toplarız.',
            visual: '  1234\n  2345\n+ 3456\n------\n  7035\n\nAdım adım: Her basamağı topla, elde et, devam et!',
            audio: 'İkiden fazla sayıyı toplarken de aynı kurallar geçerlidir. Her sütunu ayrı ayrı topla.',
            example: {
              question: '1500 + 2300 + 1200 işlemini yapın',
              answer: '5000',
              explanation: 'Yüzler ve binler toplanır: 1500 + 2300 = 3800, 3800 + 1200 = 5000'
            }
          },
          {
            title: 'Doğrulama Yöntemleri',
            content: 'İşlem sonucunu kontrol etmek için ters işlem kullanabiliriz. Toplama sonucunu çıkarmayla, çıkarma sonucunu toplamayla kontrol ederiz.',
            visual: 'Kontrol:\n4567 + 2345 = 6912\n\nDoğrulama:\n6912 - 2345 = 4567 ✅\n6912 - 4567 = 2345 ✅',
            audio: 'Her işlemin sonucunu ters işlemle kontrol etmek, hataları yakalamamızı sağlar.',
            example: {
              question: '5678 - 2345 = 3333 işlemini kontrol edin',
              answer: '3333 + 2345 = 5678 ✅',
              explanation: 'Çıkarma sonucu + çıkan = çıkarılan sayı olmalı'
            }
          },
          {
            title: 'Günlük Hayat Problemleri',
            content: 'Dört basamaklı sayılarla toplama ve çıkarma günlük hayatta sıkça karşımıza çıkar: fiyatlar, mesafeler, nüfuslar...',
            visual: '🏪 Market Alışverişi\nBilgisayar: 4500 TL\nYazıcı: 1250 TL\nToplam: 4500 + 1250 = 5750 TL\n\nElimizde: 8000 TL\nKalan: 8000 - 5750 = 2250 TL',
            audio: 'Günlük hayatta alışveriş, tasarruf ve bütçe hesaplarında büyük sayılarla işlem yaparız.',
            example: {
              question: 'Bir şehrin nüfusu 8765, 1234 kişi taşındı. Yeni nüfus kaç?',
              answer: '7531',
              explanation: '8765 - 1234 = 7531 kişi'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '3456 + 2789 işleminin sonucu nedir?',
            options: ['6245', '6255', '6145', '6235'],
            correctAnswer: '6245',
            explanation: 'Birler: 6+9=15, Onlar: 5+8+1=14, Yüzler: 4+7+1=12, Binler: 3+2+1=6'
          },
          {
            type: 'fill-blank',
            question: '5000 - 1234 = ___',
            correctAnswer: '3766',
            explanation: 'Borç alarak: 5000 - 1234 = 3766'
          },
          {
            type: 'multiple-choice',
            question: '7890 + 2345 işleminin sonucu kaçtır?',
            options: ['10235', '10135', '10225', '10335'],
            correctAnswer: '10235',
            explanation: 'Toplam 5 basamaklı olur: 7890 + 2345 = 10235'
          },
          {
            type: 'fill-blank',
            question: '8500 - 3750 = ___',
            correctAnswer: '4750',
            explanation: '8500 - 3750: Borç al ve çıkar = 4750'
          },
          {
            type: 'multiple-choice',
            question: '1234 + 2345 + 3456 işleminin sonucu nedir?',
            options: ['7035', '7025', '7135', '7045'],
            correctAnswer: '7035',
            explanation: 'Adım adım: 1234 + 2345 = 3579, 3579 + 3456 = 7035'
          },
          {
            type: 'fill-blank',
            question: '6543 - 2876 = ___',
            correctAnswer: '3667',
            explanation: 'Birlerden başlayarak borç alarak çıkar: 3667'
          },
          {
            type: 'multiple-choice',
            question: '9000 - 4567 işleminin sonucu nedir?',
            options: ['4433', '4333', '5433', '4443'],
            correctAnswer: '4433',
            explanation: '9000 - 4567 = 4433 (her basamakta borç al)'
          },
          {
            type: 'fill-blank',
            question: '4789 + 3456 = ___',
            correctAnswer: '8245',
            explanation: 'Basamak basamak toplayarak: 8245'
          },
          {
            type: 'multiple-choice',
            question: 'Bir kütüphanede 5670 kitap var. 1895 yeni kitap geldi. Toplam kaç kitap var?',
            options: ['7565', '7555', '7665', '7455'],
            correctAnswer: '7565',
            explanation: '5670 + 1895 = 7565 kitap'
          },
          {
            type: 'fill-blank',
            question: '7654 - 3789 = ___',
            correctAnswer: '3865',
            explanation: 'Borç alarak çıkarma yapılır: 7654 - 3789 = 3865'
          }
        ]
      }
    },
    // Konu 3: Çarpma ve Bölme Sonuçlarını Tahmin Etme
    {
      id: 'grade4-tema3-konu3',
      title: 'Çarpma ve Bölme Sonuçlarını Tahmin Etme',
      description: 'İşlem yapmadan önce sonucu tahmin etmeyi öğreniyoruz',
      emoji: '🔮',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Tahmin', 'Yuvarlama', 'Çarpma', 'Bölme', 'Yaklaşık değer'],
      content: {
        introduction: 'Merhaba küçük kahinler! Bugün matematiğin sihirli dünyasında tahmin etmeyi öğreneceğiz! İşlem sonuçlarını hesaplamadan önce yaklaşık olarak bilmek, bizi hatalardan korur. Hazır mısınız? 🔮✨',
        motivationQuote: 'İyi bir tahmin, başarılı bir hesabın ilk adımıdır! 🎯',
        funFacts: [
          '🧮 Market kasiyerleri her gün yüzlerce tahmin yapar!',
          '🚀 NASA mühendisleri uzay hesaplarını önce tahmin ederler!',
          '💡 Tahmin etmek, beynin sezgisel gücünü kullanmaktır!'
        ],
        steps: [
          {
            title: 'Neden Tahmin Ederiz?',
            content: 'Tahmin, işlem sonucunun mantıklı olup olmadığını kontrol etmemizi sağlar. Yanlış cevapları hemen fark edebiliriz!',
            visual: '❌ 23 × 4 = 812? Dur bir dakika!\n\n🤔 Tahmin: 20 × 4 = 80, 25 × 4 = 100\nSonuç 80-100 arası olmalı!\n\n✅ Doğru cevap: 23 × 4 = 92',
            audio: 'Tahmin, hesap hatasını yakalamanın en kolay yoludur. Sonuç mantıklı mı diye sorgula!',
            example: {
              question: '47 × 5 işleminin sonucu 235 mi 2350 mi?',
              answer: '235',
              explanation: 'Tahmin: 50 × 5 = 250, sonuç 250\'ye yakın olmalı, yani 235'
            }
          },
          {
            title: 'Yuvarlayarak Tahmin (Çarpma)',
            content: 'Çarpmada tahmin için sayıları en yakın onluğa veya yüzlüğe yuvarlayabiliriz.',
            visual: '38 × 42 = ?\n\nTahmin için yuvarlama:\n38 → 40\n42 → 40\n40 × 40 = 1600\n\nGerçek sonuç yaklaşık 1600 civarı olmalı!\n(Gerçek: 38 × 42 = 1596) ✅',
            audio: 'Sayıları yuvarlayarak çarpmak, gerçek sonuca yakın bir tahmin verir.',
            example: {
              question: '52 × 19 işlemini yuvarlayarak tahmin edin',
              answer: 'Yaklaşık 1000',
              explanation: '52 → 50, 19 → 20, 50 × 20 = 1000 (Gerçek: 988)'
            }
          },
          {
            title: 'Yuvarlayarak Tahmin (Bölme)',
            content: 'Bölmede de yuvarlama kullanabiliriz. Bölüneni ve böleni uygun sayılara yuvarlayarak tahmin ederiz.',
            visual: '156 ÷ 4 = ?\n\nTahmin için:\n156 → 160\n160 ÷ 4 = 40\n\nSonuç yaklaşık 40 civarı olmalı!\n(Gerçek: 156 ÷ 4 = 39) ✅',
            audio: 'Bölmede bölüneni kolay bölünebilecek bir sayıya yuvarlayarak tahmin yapabiliriz.',
            example: {
              question: '245 ÷ 5 işlemini yuvarlayarak tahmin edin',
              answer: 'Yaklaşık 50',
              explanation: '245 → 250, 250 ÷ 5 = 50 (Gerçek: 49)'
            }
          },
          {
            title: 'Aralık Belirleme',
            content: 'Sonucun hangi iki sayı arasında olduğunu belirleyebiliriz. Bu daha kesin bir tahmin yöntemidir.',
            visual: '67 × 8 = ?\n\nAlt sınır: 60 × 8 = 480\nÜst sınır: 70 × 8 = 560\n\nSonuç 480 ile 560 arasında!\n(Gerçek: 67 × 8 = 536) ✅',
            audio: 'Aralık belirleme, sonucun kesinlikle hangi değerler arasında olduğunu gösterir.',
            example: {
              question: '83 × 6 işleminin aralığını belirleyin',
              answer: '480 ile 540 arası',
              explanation: '80 × 6 = 480, 90 × 6 = 540 arası (Gerçek: 498)'
            }
          },
          {
            title: 'Karşılaştırmalı Tahmin',
            content: 'Bildiğimiz çarpım tablosu değerlerini kullanarak tahmin yapabiliriz.',
            visual: '24 × 7 = ?\n\nBiliyorum: 25 × 7 = 175\n24 × 7 = 175 - 7 = 168\n\nveya\n20 × 7 = 140\n4 × 7 = 28\n140 + 28 = 168 ✅',
            audio: 'Çarpım tablosu bilgimizi kullanarak yakın sayılardan tahmin yapabiliriz.',
            example: {
              question: '48 × 5 işlemini bilinen değerden tahmin edin',
              answer: '240',
              explanation: '50 × 5 = 250, 48 × 5 = 250 - 10 = 240'
            }
          },
          {
            title: 'Tahmin ve Kontrol',
            content: 'İşlemi yaptıktan sonra sonucu tahminimizle karşılaştırarak kontrol ederiz.',
            visual: '🎯 Tahmin Kontrol Listesi:\n\n1. İşlemden önce tahmin et\n2. İşlemi yap\n3. Sonucu tahminle karşılaştır\n4. Fark büyükse tekrar kontrol et!',
            audio: 'Tahmin, işlem sonucunu doğrulamanın en hızlı yoludur.',
            example: {
              question: '32 × 15 için tahmin edin ve kontrol edin',
              answer: 'Tahmin: 450-500, Gerçek: 480',
              explanation: '30 × 15 = 450, 35 × 15 = 525, arada olmalı'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '48 × 7 işleminin sonucu hangi aralıktadır?',
            options: ['200-250', '280-350', '350-400', '400-450'],
            correctAnswer: '280-350',
            explanation: '40 × 7 = 280, 50 × 7 = 350 arasında'
          },
          {
            type: 'fill-blank',
            question: '63 × 5 işlemini yuvarlayarak tahmin edin. Yaklaşık ___',
            correctAnswer: '300',
            explanation: '60 × 5 = 300 (Gerçek: 315)'
          },
          {
            type: 'multiple-choice',
            question: '256 ÷ 8 işleminin tahmini sonucu nedir?',
            options: ['Yaklaşık 20', 'Yaklaşık 32', 'Yaklaşık 40', 'Yaklaşık 50'],
            correctAnswer: 'Yaklaşık 32',
            explanation: '256 → 256, tam bölünür: 256 ÷ 8 = 32'
          },
          {
            type: 'fill-blank',
            question: '89 × 6 yaklaşık olarak ___ kadardır',
            correctAnswer: '540',
            explanation: '90 × 6 = 540 (Gerçek: 534)'
          },
          {
            type: 'multiple-choice',
            question: '324 ÷ 6 işleminin sonucu hangi aralıktadır?',
            options: ['40-50', '50-60', '60-70', '70-80'],
            correctAnswer: '50-60',
            explanation: '300 ÷ 6 = 50, 360 ÷ 6 = 60 arası (Gerçek: 54)'
          },
          {
            type: 'fill-blank',
            question: '75 × 8 yaklaşık ___',
            correctAnswer: '600',
            explanation: '75 × 8 = 600 (bu tam değer)'
          },
          {
            type: 'multiple-choice',
            question: '147 ÷ 7 işlemini tahmin edin. Sonuç?',
            options: ['15-20', '20-25', '25-30', '30-35'],
            correctAnswer: '20-25',
            explanation: '140 ÷ 7 = 20, 175 ÷ 7 = 25 arası (Gerçek: 21)'
          },
          {
            type: 'fill-blank',
            question: '42 × 23 yaklaşık ___',
            correctAnswer: '1000',
            explanation: '40 × 25 = 1000 (Gerçek: 966)'
          },
          {
            type: 'multiple-choice',
            question: '195 × 4 işleminin tahmin aralığı nedir?',
            options: ['600-700', '700-800', '800-900', '900-1000'],
            correctAnswer: '700-800',
            explanation: '200 × 4 = 800\'e yakın (Gerçek: 780)'
          },
          {
            type: 'fill-blank',
            question: '420 ÷ 6 yaklaşık ___',
            correctAnswer: '70',
            explanation: '420 ÷ 6 = 70 (tam değer)'
          }
        ]
      }
    },
    // Konu 4: 10, 100, 1000 ile Kısa Yol İşlemler
    {
      id: 'grade4-tema3-konu4',
      title: '10, 100, 1000 ile Kısa Yol İşlemler',
      description: 'Onlarla, yüzlerle, binlerle hızlı çarpma ve bölme yapıyoruz',
      emoji: '⚡',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['10 ile çarpma', '100 ile çarpma', '1000 ile çarpma', 'Kısa yol', 'Sıfır ekleme'],
      content: {
        introduction: 'Merhaba hız tutkunları! Bugün matematiğin en hızlı kestirme yollarını öğreneceğiz! 10, 100 ve 1000 ile işlem yapmak aslında çok kolay - sadece sıfır ekleme ve çıkarma işi! ⚡',
        motivationQuote: 'Kısa yolları bilen, uzun hesaplarda yorulmaz! 🏃‍♂️',
        funFacts: [
          '💵 Para birimlerinde 10, 100, 1000 sürekli kullanılır!',
          '📏 Uzunluk birimleri: mm, cm, dm, m - hep 10\'un katları!',
          '🌍 Metrik sistem tamamen 10\'un katlarına dayanır!'
        ],
        steps: [
          {
            title: '10 ile Çarpma',
            content: '10 ile çarpmak için sayının sonuna bir sıfır ekleriz. Çok basit!',
            visual: '5 × 10 = 50\n23 × 10 = 230\n147 × 10 = 1470\n1000 × 10 = 10000\n\n🔑 Kural: Sağa bir 0 ekle!',
            audio: '10 ile çarpmak demek, sayının sonuna bir sıfır eklemek demektir.',
            example: {
              question: '256 × 10 = ?',
              answer: '2560',
              explanation: 'Sona bir sıfır ekle: 256 → 2560'
            }
          },
          {
            title: '100 ile Çarpma',
            content: '100 ile çarpmak için sayının sonuna iki sıfır ekleriz.',
            visual: '5 × 100 = 500\n23 × 100 = 2300\n147 × 100 = 14700\n\n🔑 Kural: Sağa iki 0 ekle!',
            audio: '100 ile çarpmak demek, sayının sonuna iki sıfır eklemek demektir.',
            example: {
              question: '78 × 100 = ?',
              answer: '7800',
              explanation: 'Sona iki sıfır ekle: 78 → 7800'
            }
          },
          {
            title: '1000 ile Çarpma',
            content: '1000 ile çarpmak için sayının sonuna üç sıfır ekleriz.',
            visual: '5 × 1000 = 5000\n23 × 1000 = 23000\n147 × 1000 = 147000\n\n🔑 Kural: Sağa üç 0 ekle!',
            audio: '1000 ile çarpmak demek, sayının sonuna üç sıfır eklemek demektir.',
            example: {
              question: '45 × 1000 = ?',
              answer: '45000',
              explanation: 'Sona üç sıfır ekle: 45 → 45000'
            }
          },
          {
            title: '10 ile Bölme',
            content: '10\'a bölmek için sayının sonundaki bir sıfırı sileriz (veya virgül sola kayar).',
            visual: '50 ÷ 10 = 5\n230 ÷ 10 = 23\n1470 ÷ 10 = 147\n\n🔑 Kural: Sağdan bir 0 sil!',
            audio: '10\'a bölmek, çarpmanın tersine, sayıdan bir sıfır silmektir.',
            example: {
              question: '3500 ÷ 10 = ?',
              answer: '350',
              explanation: 'Sondaki bir sıfırı sil: 3500 → 350'
            }
          },
          {
            title: '100 ve 1000 ile Bölme',
            content: '100\'e bölmek için iki sıfır, 1000\'e bölmek için üç sıfır sileriz.',
            visual: '100\'e bölme:\n5000 ÷ 100 = 50\n12300 ÷ 100 = 123\n\n1000\'e bölme:\n45000 ÷ 1000 = 45\n123000 ÷ 1000 = 123',
            audio: '100\'e bölmekte iki sıfır, 1000\'e bölmekte üç sıfır silinir.',
            example: {
              question: '78000 ÷ 1000 = ?',
              answer: '78',
              explanation: 'Sondaki üç sıfırı sil: 78000 → 78'
            }
          },
          {
            title: 'Zincirleme İşlemler',
            content: 'Ardışık 10, 100, 1000 çarpmaları birleştirilebilir.',
            visual: '5 × 10 × 10 = 5 × 100 = 500\n3 × 10 × 100 = 3 × 1000 = 3000\n\n25 × 4 × 100 = 100 × 100 = 10000',
            audio: '10×10 = 100, 10×100 = 1000 bilgisini kullanarak zincirleme işlemler yapabiliriz.',
            example: {
              question: '7 × 10 × 10 × 10 = ?',
              answer: '7000',
              explanation: '10 × 10 × 10 = 1000, 7 × 1000 = 7000'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '45 × 10 = ?',
            options: ['45', '450', '4500', '4050'],
            correctAnswer: '450',
            explanation: 'Bir sıfır ekle: 45 → 450'
          },
          {
            type: 'fill-blank',
            question: '78 × 100 = ___',
            correctAnswer: '7800',
            explanation: 'İki sıfır ekle: 78 → 7800'
          },
          {
            type: 'multiple-choice',
            question: '23 × 1000 = ?',
            options: ['230', '2300', '23000', '230000'],
            correctAnswer: '23000',
            explanation: 'Üç sıfır ekle: 23 → 23000'
          },
          {
            type: 'fill-blank',
            question: '4500 ÷ 10 = ___',
            correctAnswer: '450',
            explanation: 'Bir sıfır sil: 4500 → 450'
          },
          {
            type: 'multiple-choice',
            question: '67000 ÷ 100 = ?',
            options: ['67', '670', '6700', '6.7'],
            correctAnswer: '670',
            explanation: 'İki sıfır sil: 67000 → 670'
          },
          {
            type: 'fill-blank',
            question: '125000 ÷ 1000 = ___',
            correctAnswer: '125',
            explanation: 'Üç sıfır sil: 125000 → 125'
          },
          {
            type: 'multiple-choice',
            question: '8 × 10 × 100 = ?',
            options: ['800', '8000', '80000', '80'],
            correctAnswer: '8000',
            explanation: '10 × 100 = 1000, 8 × 1000 = 8000'
          },
          {
            type: 'fill-blank',
            question: '34 × 1000 = ___',
            correctAnswer: '34000',
            explanation: 'Üç sıfır ekle: 34 → 34000'
          },
          {
            type: 'multiple-choice',
            question: '50000 ÷ 1000 = ?',
            options: ['5', '50', '500', '5000'],
            correctAnswer: '50',
            explanation: 'Üç sıfır sil: 50000 → 50'
          },
          {
            type: 'fill-blank',
            question: '6 × 100 × 10 = ___',
            correctAnswer: '6000',
            explanation: '100 × 10 = 1000, 6 × 1000 = 6000'
          }
        ]
      }
    },
    // Konu 5: Çarpma İşlemini Çözümleme
    {
      id: 'grade4-tema3-konu5',
      title: 'Çarpma İşlemini Çözümleme',
      description: 'Çarpma işleminin yapısını ve stratejilerini anlıyoruz',
      emoji: '✖️',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Çarpma', 'Çözümleme', 'Strateji', 'Basamak değeri', 'Dağılma özelliği'],
      content: {
        introduction: 'Merhaba çarpım ustası adayları! Bugün çarpma işleminin iç yapısını keşfedeceğiz. Çarpmayı parçalara ayırarak daha kolay hesaplayabileceğiz! 🧩✖️',
        motivationQuote: 'Büyük çarpımlar, küçük parçalara bölündüğünde kolaylaşır! 🎯',
        funFacts: [
          '📜 Eski Mısırlılar çarpmayı ikiye katlama yöntemiyle yapıyordu!',
          '🧮 Japon çarpım metodu çizgilerle yapılır!',
          '💡 Dağılma özelliği, matematiğin temel taşlarından biridir!'
        ],
        steps: [
          {
            title: 'Çarpmanın Anlamı',
            content: 'Çarpma, tekrarlı toplamadır. 4 × 5 demek, 4\'ü 5 kez toplamak demektir.',
            visual: '4 × 5 = ?\n\n4 + 4 + 4 + 4 + 4 = 20\n\nveya\n\n5 + 5 + 5 + 5 = 20\n\n4 × 5 = 5 × 4 = 20 ✅',
            audio: 'Çarpma, aynı sayıyı tekrar tekrar toplamaktır. Sırayı değiştirmek sonucu değiştirmez.',
            example: {
              question: '6 × 7 işlemini tekrarlı toplama olarak yazın',
              answer: '6 + 6 + 6 + 6 + 6 + 6 + 6 = 42',
              explanation: '6\'yı 7 kez topladık'
            }
          },
          {
            title: 'Dağılma Özelliği',
            content: 'Bir sayıyı parçalara ayırıp her parçayı ayrı çarpıp toplamak, aynı sonucu verir.',
            visual: '7 × 12 = ?\n\n7 × 12 = 7 × (10 + 2)\n      = 7 × 10 + 7 × 2\n      = 70 + 14\n      = 84 ✅',
            audio: 'Dağılma özelliği, büyük çarpmaları küçük parçalara ayırmamızı sağlar.',
            example: {
              question: '8 × 15 işlemini dağılma özelliğiyle çözün',
              answer: '120',
              explanation: '8 × 15 = 8 × 10 + 8 × 5 = 80 + 40 = 120'
            }
          },
          {
            title: 'İki Basamaklı ile Çarpma',
            content: 'İki basamaklı sayıyla çarparken, her basamağı ayrı çarpıp sonuçları toplarız.',
            visual: '23 × 14 = ?\n\n23 × 14 = 23 × 10 + 23 × 4\n        = 230 + 92\n        = 322\n\nveya\n\n23 × 14 = 20×14 + 3×14\n        = 280 + 42 = 322 ✅',
            audio: 'İki basamaklı çarpmada, onlar ve birler basamağını ayrı ayrı çarpabiliriz.',
            example: {
              question: '35 × 12 işlemini çözümleyin',
              answer: '420',
              explanation: '35 × 12 = 35×10 + 35×2 = 350 + 70 = 420'
            }
          },
          {
            title: 'Çarpımda Birleşme Özelliği',
            content: 'Üç veya daha fazla sayının çarpımında, hangi iki sayıyı önce çarpsak sonuç değişmez.',
            visual: '5 × 4 × 2 = ?\n\n(5 × 4) × 2 = 20 × 2 = 40\n5 × (4 × 2) = 5 × 8 = 40\n(5 × 2) × 4 = 10 × 4 = 40\n\nHepsi 40! ✅',
            audio: 'Birleşme özelliği sayesinde, çarpmayı kolaylaştırmak için sayıları istediğimiz gibi gruplayabiliriz.',
            example: {
              question: '25 × 7 × 4 işlemini kolay yoldan çözün',
              answer: '700',
              explanation: '25 × 4 = 100, 100 × 7 = 700 (önce 25 ve 4\'ü çarp)'
            }
          },
          {
            title: 'Çift ve Yarılama Stratejisi',
            content: 'Bir sayıyı ikiye katlayıp diğerini yarıya düşürmek, çarpım sonucunu değiştirmez.',
            visual: '35 × 4 = ?\n\n35 × 4\n= 70 × 2 (35\'i 2\'ye katla, 4\'ü yarıla)\n= 140 × 1\n= 140 ✅',
            audio: 'Çift-yarılama stratejisi, çarpmayı daha kolay sayılarla yapmamızı sağlar.',
            example: {
              question: '15 × 8 işlemini çift-yarılama ile yapın',
              answer: '120',
              explanation: '15 × 8 = 30 × 4 = 60 × 2 = 120'
            }
          },
          {
            title: 'Kontrol ve Doğrulama',
            content: 'Çarpma sonucunu bölme ile kontrol edebiliriz. Eğer sonuç ÷ çarpan = diğer çarpan ise doğrudur.',
            visual: '24 × 15 = 360\n\nKontrol:\n360 ÷ 24 = 15 ✅\n360 ÷ 15 = 24 ✅\n\nSonuç doğru!',
            audio: 'Çarpma sonucunu bölme ile doğrulamak, hataları yakalamanın en güvenilir yoludur.',
            example: {
              question: '18 × 12 = 216 işlemini kontrol edin',
              answer: '216 ÷ 18 = 12 ✅ veya 216 ÷ 12 = 18 ✅',
              explanation: 'Her iki bölme de doğru sonuç veriyor'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '14 × 6 işlemini dağılma özelliğiyle çözerken hangi toplama yapılır?',
            options: ['10×6 + 4×6', '14×3 + 14×3', '7×6 + 7×6', 'Hepsi doğru'],
            correctAnswer: 'Hepsi doğru',
            explanation: 'Hepsi 84 sonucunu verir'
          },
          {
            type: 'fill-blank',
            question: '25 × 16 = 25 × (10 + 6) = ___ + ___ = 400',
            correctAnswer: '250 + 150',
            explanation: '25 × 10 = 250, 25 × 6 = 150, toplam 400'
          },
          {
            type: 'multiple-choice',
            question: '8 × 5 × 4 işlemini en kolay hangi şekilde hesaplarız?',
            options: ['(8×5)×4 = 40×4', '8×(5×4) = 8×20', '(8×4)×5 = 32×5', 'Hepsi aynı zorluktadır'],
            correctAnswer: '8×(5×4) = 8×20',
            explanation: '8 × 20 = 160 en kolay hesaplananıdır'
          },
          {
            type: 'fill-blank',
            question: '35 × 6 = ___ (dağılma özelliğiyle)',
            correctAnswer: '210',
            explanation: '35 × 6 = 30×6 + 5×6 = 180 + 30 = 210'
          },
          {
            type: 'multiple-choice',
            question: '45 × 8 işlemini çift-yarılama ile çözersek?',
            options: ['90 × 4 = 360', '180 × 2 = 360', '360 × 1 = 360', 'Hepsi doğru'],
            correctAnswer: 'Hepsi doğru',
            explanation: 'Hepsi 360 sonucunu verir'
          },
          {
            type: 'fill-blank',
            question: '23 × 11 = ___',
            correctAnswer: '253',
            explanation: '23 × 11 = 23×10 + 23×1 = 230 + 23 = 253'
          },
          {
            type: 'multiple-choice',
            question: '17 × 8 = 136 sonucu doğru mu? (Kontrol edin)',
            options: ['Doğru, 136÷8=17', 'Yanlış, sonuç 126 olmalı', 'Yanlış, sonuç 146 olmalı', 'Yanlış, sonuç 156 olmalı'],
            correctAnswer: 'Doğru, 136÷8=17',
            explanation: '136 ÷ 8 = 17, sonuç doğru'
          },
          {
            type: 'fill-blank',
            question: '50 × 14 = ___',
            correctAnswer: '700',
            explanation: '50 × 14 = 50×10 + 50×4 = 500 + 200 = 700'
          },
          {
            type: 'multiple-choice',
            question: '12 × 12 işleminin sonucu nedir?',
            options: ['124', '134', '144', '154'],
            correctAnswer: '144',
            explanation: '12 × 12 = 12×10 + 12×2 = 120 + 24 = 144'
          },
          {
            type: 'fill-blank',
            question: '25 × 8 = ___ (çift-yarılama ile)',
            correctAnswer: '200',
            explanation: '25 × 8 = 50 × 4 = 100 × 2 = 200'
          }
        ]
      }
    },
    // Konu 6: Bölme İşlemini Çözümleme
    {
      id: 'grade4-tema3-konu6',
      title: 'Bölme İşlemini Çözümleme',
      description: 'Bölme işleminin yapısını ve stratejilerini anlıyoruz',
      emoji: '➗',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Bölme', 'Bölünen', 'Bölen', 'Bölüm', 'Kalan', 'Strateji'],
      content: {
        introduction: 'Merhaba paylaşım uzmanları! Bugün bölme işleminin sırlarını çözeceğiz. Bölme, eşit paylaştırmadır ve çarpmanın tersidir. Hazır mısınız bu macerayı keşfetmeye? ➗🎯',
        motivationQuote: 'Bölme, adil paylaşımın matematiğidir! Herkes eşit pay alır! 🤝',
        funFacts: [
          '🍕 Pizza dilimlemek aslında bir bölme işlemidir!',
          '📜 Bölme sembolü (÷) 1659 yılında İsviçre\'de kullanılmaya başlandı!',
          '💡 Bölme ile çarpma kardeş işlemlerdir - biri diğerini kontrol eder!'
        ],
        steps: [
          {
            title: 'Bölmenin Anlamı',
            content: 'Bölme, bir miktarı eşit gruplara ayırmaktır. 20 ÷ 4 = 5 demek, 20\'yi 4 eşit gruba böldüğümüzde her grupta 5 olur demektir.',
            visual: '20 ÷ 4 = ?\n\n🍎🍎🍎🍎🍎 | 🍎🍎🍎🍎🍎 | 🍎🍎🍎🍎🍎 | 🍎🍎🍎🍎🍎\n    5           5           5           5\n\n20 elma, 4 gruba eşit bölündü → Her grupta 5 elma',
            audio: 'Bölme, bir şeyi eşit parçalara ayırmak demektir.',
            example: {
              question: '24 şeker 6 çocuğa eşit paylaştırılırsa her çocuk kaç şeker alır?',
              answer: '4 şeker',
              explanation: '24 ÷ 6 = 4'
            }
          },
          {
            title: 'Bölme Terimleri',
            content: 'Bölme işleminde: Bölünen ÷ Bölen = Bölüm. Bazen kalan da olur!',
            visual: '45 ÷ 7 = 6 kalan 3\n\n    45  → Bölünen (paylaşılacak)\n÷    7  → Bölen (kaç gruba)\n------\n     6  → Bölüm (her grupta)\n     3  → Kalan (artan)',
            audio: 'Bölme işleminin terimlerini bilmek, problemleri anlamayı kolaylaştırır.',
            example: {
              question: '35 ÷ 8 işleminde bölüm ve kalan nedir?',
              answer: 'Bölüm: 4, Kalan: 3',
              explanation: '8 × 4 = 32, 35 - 32 = 3 kalan'
            }
          },
          {
            title: 'Çarpma ile Bölme İlişkisi',
            content: 'Bölme, çarpmanın ters işlemidir. Eğer a × b = c ise, c ÷ a = b ve c ÷ b = a',
            visual: '6 × 8 = 48\n\nTers işlemler:\n48 ÷ 6 = 8 ✅\n48 ÷ 8 = 6 ✅\n\n🔄 Çarpma ve bölme birbirini kontrol eder!',
            audio: 'Çarpım tablosunu iyi bilmek, bölme işlemlerini kolaylaştırır.',
            example: {
              question: '72 ÷ 9 = ? (Çarpım tablosunu kullan)',
              answer: '8',
              explanation: '9 × 8 = 72 olduğundan, 72 ÷ 9 = 8'
            }
          },
          {
            title: 'Adım Adım Bölme',
            content: 'Büyük sayıları bölerken, basamak basamak işlem yaparız.',
            visual: '96 ÷ 4 = ?\n\nAdım 1: 9 ÷ 4 = 2 kalan 1\nAdım 2: 16 ÷ 4 = 4\n\n96 ÷ 4 = 24 ✅\n\nKontrol: 24 × 4 = 96 ✅',
            audio: 'Bölme işleminde soldan başlayarak her basamağı böleriz.',
            example: {
              question: '84 ÷ 7 = ?',
              answer: '12',
              explanation: '7 × 12 = 84'
            }
          },
          {
            title: 'Yarılama Stratejisi',
            content: '2\'ye bölmek, sayıyı yarıya düşürmektir. Bu stratejiyi diğer bölmelere de uygulayabiliriz.',
            visual: '48 ÷ 4 = ?\n\n48 ÷ 2 = 24 (yarıla)\n24 ÷ 2 = 12 (tekrar yarıla)\n\n48 ÷ 4 = 12 ✅',
            audio: '4\'e bölmek, iki kez 2\'ye bölmekle aynıdır. 8\'e bölmek, üç kez 2\'ye bölmektir.',
            example: {
              question: '80 ÷ 8 işlemini yarılama ile yapın',
              answer: '10',
              explanation: '80÷2=40, 40÷2=20, 20÷2=10'
            }
          },
          {
            title: 'Kalan Hesaplama',
            content: 'Kalan = Bölünen - (Bölen × Bölüm). Kalan her zaman bölenden küçük olmalıdır!',
            visual: '47 ÷ 5 = ?\n\n5 × 9 = 45 (47\'ye en yakın)\n47 - 45 = 2\n\n47 ÷ 5 = 9 kalan 2\n\n⚠️ Kalan (2) < Bölen (5) ✅',
            audio: 'Kalan her zaman bölenden küçük olmalıdır, aksi halde bölüm yeterince büyük değildir.',
            example: {
              question: '58 ÷ 7 işleminin sonucunu kalan ile birlikte yazın',
              answer: '8 kalan 2',
              explanation: '7 × 8 = 56, 58 - 56 = 2'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '63 ÷ 9 = ?',
            options: ['6', '7', '8', '9'],
            correctAnswer: '7',
            explanation: '9 × 7 = 63'
          },
          {
            type: 'fill-blank',
            question: '84 ÷ 6 = ___',
            correctAnswer: '14',
            explanation: '6 × 14 = 84'
          },
          {
            type: 'multiple-choice',
            question: '45 ÷ 7 işleminde kalan kaçtır?',
            options: ['1', '2', '3', '4'],
            correctAnswer: '3',
            explanation: '7 × 6 = 42, 45 - 42 = 3'
          },
          {
            type: 'fill-blank',
            question: '72 ÷ 8 = ___',
            correctAnswer: '9',
            explanation: '8 × 9 = 72'
          },
          {
            type: 'multiple-choice',
            question: '100 ÷ 4 işlemini yarılama ile yaparsak?',
            options: ['20', '25', '30', '35'],
            correctAnswer: '25',
            explanation: '100÷2=50, 50÷2=25'
          },
          {
            type: 'fill-blank',
            question: '56 ÷ 8 = ___',
            correctAnswer: '7',
            explanation: '8 × 7 = 56'
          },
          {
            type: 'multiple-choice',
            question: '67 ÷ 9 işleminin sonucu nedir?',
            options: ['7 kalan 2', '7 kalan 4', '8 kalan 3', '6 kalan 13'],
            correctAnswer: '7 kalan 4',
            explanation: '9 × 7 = 63, 67 - 63 = 4'
          },
          {
            type: 'fill-blank',
            question: '96 ÷ 12 = ___',
            correctAnswer: '8',
            explanation: '12 × 8 = 96'
          },
          {
            type: 'multiple-choice',
            question: '5 × ? = 75 ise ? kaçtır?',
            options: ['12', '13', '14', '15'],
            correctAnswer: '15',
            explanation: '75 ÷ 5 = 15'
          },
          {
            type: 'fill-blank',
            question: '144 ÷ 12 = ___',
            correctAnswer: '12',
            explanation: '12 × 12 = 144'
          }
        ]
      }
    },
    // Konu 7: Dört İşlem İçeren Yönergeler
    {
      id: 'grade4-tema3-konu7',
      title: 'Dört İşlem İçeren Yönergeler',
      description: 'Adım adım yönergeler oluşturup takip ediyoruz',
      emoji: '📋',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Yönerge', 'Algoritma', 'Adım adım', 'İşlem sırası', 'Süreç'],
      content: {
        introduction: 'Merhaba küçük programcılar! Bugün dört işlem kullanarak yönergeler oluşturmayı öğreneceğiz. Yönergeler, adım adım talimatlar demektir - tıpkı bir tarif gibi! 📋🧑‍🍳',
        motivationQuote: 'İyi bir yönerge, herkesin aynı sonuca ulaşmasını sağlar! 🎯',
        funFacts: [
          '💻 Bilgisayar programları yönergelerden oluşur!',
          '🍳 Yemek tarifleri de bir tür yönergedir!',
          '🎮 Video oyunları milyonlarca yönerge içerir!'
        ],
        steps: [
          {
            title: 'Yönerge Nedir?',
            content: 'Yönerge, bir amaca ulaşmak için takip edilecek adımları sırayla anlatan talimatlardır.',
            visual: '📋 Sayı Tahmin Yönergesi:\n\n1. Bir sayı düşün\n2. 2 ile çarp\n3. 10 ekle\n4. 2\'ye böl\n5. İlk düşündüğün sayıyı çıkar\n\nSonuç her zaman 5! ✨',
            audio: 'Yönergeler adım adım takip edildiğinde herkes aynı sonuca ulaşır.',
            example: {
              question: '7 sayısı için yukarıdaki yönergeyi uygulayın',
              answer: '5',
              explanation: '7×2=14, 14+10=24, 24÷2=12, 12-7=5'
            }
          },
          {
            title: 'Basit Yönergeler Oluşturma',
            content: 'Bir sonuca nasıl ulaşılacağını adım adım yazabiliriz.',
            visual: '🎯 Hedef: 24\'e ulaş\n\nYönerge 1:\n1. 6 sayısından başla\n2. 4 ile çarp\n→ 6 × 4 = 24 ✅\n\nYönerge 2:\n1. 30 sayısından başla\n2. 6 çıkar\n→ 30 - 6 = 24 ✅',
            audio: 'Aynı sonuca farklı yönergelerle ulaşılabilir.',
            example: {
              question: '20\'ye ulaşmak için bir yönerge yazın',
              answer: '5 ile başla, 4 ile çarp: 5 × 4 = 20',
              explanation: 'Veya: 25 ile başla, 5 çıkar: 25 - 5 = 20'
            }
          },
          {
            title: 'Çok Adımlı Yönergeler',
            content: 'Bazı yönergeler birden fazla işlem gerektirir.',
            visual: '🔢 Başlangıç: 8\n\n1. 3 ile çarp → 8 × 3 = 24\n2. 6 ekle → 24 + 6 = 30\n3. 5\'e böl → 30 ÷ 5 = 6\n\nSonuç: 6',
            audio: 'Çok adımlı yönergelerde her adımı sırayla yapmak önemlidir.',
            example: {
              question: '10 ile başlayıp 2 ile çarp, 5 ekle, 5\'e böl. Sonuç?',
              answer: '5',
              explanation: '10×2=20, 20+5=25, 25÷5=5'
            }
          },
          {
            title: 'Ters Yönerge Oluşturma',
            content: 'Bir sayıdan diğerine nasıl gidildiğini bularak ters yönerge oluşturabiliriz.',
            visual: '❓ 12\'den 36\'ya nasıl gidilir?\n\nYol 1: 12 + 24 = 36 (24 ekle)\nYol 2: 12 × 3 = 36 (3 ile çarp)\n\n✅ Her iki yönerge de doğru!',
            audio: 'Bir sayıdan diğerine birden fazla yol olabilir.',
            example: {
              question: '5\'ten 20\'ye nasıl gidilir?',
              answer: '5 × 4 = 20 veya 5 + 15 = 20',
              explanation: 'Çarpma veya toplama kullanılabilir'
            }
          },
          {
            title: 'Yönerge Kontrolü',
            content: 'Oluşturduğumuz yönergelerin doğru çalışıp çalışmadığını test ederiz.',
            visual: '🧪 Test Yönergesi:\n\nYönerge: "Sayıyı 2 ile çarp, sonra 10 çıkar"\n\nTest 1: 8 → 8×2=16, 16-10=6 ✅\nTest 2: 15 → 15×2=30, 30-10=20 ✅\nTest 3: 20 → 20×2=40, 40-10=30 ✅\n\nYönerge çalışıyor!',
            audio: 'Yönergeleri farklı sayılarla test ederek doğruluğunu kontrol ederiz.',
            example: {
              question: '"Sayıyı 5\'e böl, sonra 3 ekle" yönergesini 25 ile test edin',
              answer: '8',
              explanation: '25÷5=5, 5+3=8'
            }
          },
          {
            title: 'Günlük Hayatta Yönergeler',
            content: 'Matematik yönergeleri günlük hayatta pek çok yerde kullanılır.',
            visual: '🛒 Alışveriş Yönergesi:\n\n1. Toplam fiyatı hesapla\n2. %20 indirim uygula (0.8 ile çarp)\n3. KDV ekle (1.18 ile çarp)\n4. Yuvarlayarak öde\n\n100 TL için:\n100 × 0.8 = 80 TL\n80 × 1.18 = 94.40 TL',
            audio: 'Alışveriş, yemek yapma, spor gibi birçok alanda yönergeler kullanırız.',
            example: {
              question: 'Bir fiyata %10 indirim uygulamak için yönerge yazın',
              answer: 'Fiyatı 0.9 ile çarp veya fiyatı 10\'a böl ve çıkar',
              explanation: 'Her iki yöntem de %10 indirim verir'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '"Sayıyı 4 ile çarp, sonra 8 ekle" yönergesi 5 ile uygulanırsa sonuç?',
            options: ['20', '28', '32', '40'],
            correctAnswer: '28',
            explanation: '5 × 4 = 20, 20 + 8 = 28'
          },
          {
            type: 'fill-blank',
            question: '"Sayıyı 3\'e böl, sonra 7 çıkar" yönergesi 24 ile uygulanırsa sonuç ___',
            correctAnswer: '1',
            explanation: '24 ÷ 3 = 8, 8 - 7 = 1'
          },
          {
            type: 'multiple-choice',
            question: '10\'dan 50\'ye hangi yönerge ulaştırır?',
            options: ['10 ekle, 4 ile çarp', '5 ile çarp', '8 ile çarp, 30 çıkar', 'Hepsi'],
            correctAnswer: 'Hepsi',
            explanation: '10+10=20, 20×4=80? Hayır! 10×5=50 ✅, 10×8-30=50 ✅'
          },
          {
            type: 'fill-blank',
            question: '6 ile başla, 5 ekle, 2 ile çarp. Sonuç: ___',
            correctAnswer: '22',
            explanation: '6 + 5 = 11, 11 × 2 = 22'
          },
          {
            type: 'multiple-choice',
            question: '"Sayıyı 2\'ye böl, 10 ekle, 3 ile çarp" yönergesi 8 ile?',
            options: ['42', '36', '48', '54'],
            correctAnswer: '42',
            explanation: '8÷2=4, 4+10=14, 14×3=42'
          },
          {
            type: 'fill-blank',
            question: '15 × 2 - 10 = ___',
            correctAnswer: '20',
            explanation: '15 × 2 = 30, 30 - 10 = 20'
          },
          {
            type: 'multiple-choice',
            question: 'Hangi yönerge 4\'ü 16\'ya çevirir?',
            options: ['4 ile çarp', '12 ekle', '3 ile çarp, 4 ekle', 'Hepsi'],
            correctAnswer: 'Hepsi',
            explanation: '4×4=16, 4+12=16, 4×3+4=16'
          },
          {
            type: 'fill-blank',
            question: '100 ÷ 4 + 15 = ___',
            correctAnswer: '40',
            explanation: '100 ÷ 4 = 25, 25 + 15 = 40'
          },
          {
            type: 'multiple-choice',
            question: '"Sayıyı 6 ile çarp" ve "Sayıyı 3 ile çarp, sonra 2 ile çarp" aynı mı?',
            options: ['Evet, aynı', 'Hayır, farklı', 'Bazı sayılar için aynı', 'Hiçbiri için aynı değil'],
            correctAnswer: 'Evet, aynı',
            explanation: '3 × 2 = 6, yani her iki yönerge de 6 ile çarpmaktır'
          },
          {
            type: 'fill-blank',
            question: '20\'den 4\'e ulaşmak için: 20 ÷ ___ = 4',
            correctAnswer: '5',
            explanation: '20 ÷ 5 = 4'
          }
        ]
      }
    },
    // Konu 8: Dört İşlem Gerektiren Problemler
    {
      id: 'grade4-tema3-konu8',
      title: 'Dört İşlem Gerektiren Problemler',
      description: 'Çok adımlı problemleri çözmeyi öğreniyoruz',
      emoji: '🧩',
      duration: '45 dk',
      difficulty: 3,
      keywords: ['Problem çözme', 'Çok adımlı', 'Strateji', 'Dört işlem', 'Analiz'],
      content: {
        introduction: 'Merhaba problem çözücüler! Bugün gerçek hayattan çok adımlı problemler çözeceğiz. Bu problemler birden fazla işlem gerektirir ve dikkatli analiz ister. Hazır mısınız bu meydan okumaya? 🧩🏆',
        motivationQuote: 'Her problem bir bulmacadır - doğru parçaları birleştirirsen çözüme ulaşırsın! 🔑',
        funFacts: [
          '🏗️ Mühendisler her gün yüzlerce problemi çözerler!',
          '🧠 Problem çözmek beyni güçlendirir!',
          '💡 En karmaşık problemler bile küçük adımlara bölünebilir!'
        ],
        steps: [
          {
            title: 'Problemi Anlama',
            content: 'İlk adım problemi dikkatlice okumak ve ne sorulduğunu anlamaktır.',
            visual: '📖 Problemi Analiz Et:\n\n1. Verilen bilgileri bul\n2. Soruyu belirle\n3. Hangi işlemler gerekli?\n4. Adımları planla\n\n✅ Anlamadan çözüm yok!',
            audio: 'Problemi birkaç kez okumak, anlamayı kolaylaştırır.',
            example: {
              question: 'Ali\'nin 45 TL\'si var. 15 TL\'lik kitap ve 8 TL\'lik defter aldı. Kaç TL kaldı?',
              answer: '22 TL',
              explanation: 'Verilenler: 45 TL, 15 TL, 8 TL. İşlemler: 15+8=23 harcama, 45-23=22 kalan'
            }
          },
          {
            title: 'Strateji Belirleme',
            content: 'Problemi çözmek için hangi işlemlerin hangi sırada yapılacağını belirleriz.',
            visual: '🎯 Strateji Seçimi:\n\n• Şekil çizme\n• Tablo yapma\n• Geriye doğru çalışma\n• Deneme yanılma\n• Benzer problemle karşılaştırma\n\nHer probleme en uygun stratejiyi seç!',
            audio: 'Doğru strateji, çözümü kolaylaştırır.',
            example: {
              question: 'Bir sayının 3 katının 12 fazlası 45 ise sayı kaçtır?',
              answer: '11',
              explanation: 'Geriye çalış: 45-12=33, 33÷3=11'
            }
          },
          {
            title: 'Adım Adım Çözüm',
            content: 'Stratejiyi uygulayarak her adımı sırayla yapıyoruz.',
            visual: '📝 Örnek Problem:\nBir market 125 kg elma aldı. 48 kg sattı, sonra 35 kg daha aldı. Kaç kg elma var?\n\nAdım 1: 125 - 48 = 77 kg (satış sonrası)\nAdım 2: 77 + 35 = 112 kg (alım sonrası)\n\nCevap: 112 kg ✅',
            audio: 'Her adımı yazarak çözmek, hata yapmayı önler.',
            example: {
              question: 'Bir sınıfta 32 öğrenci var. 8 erkek gitti, 5 kız geldi. Kaç öğrenci var?',
              answer: '29 öğrenci',
              explanation: '32 - 8 = 24, 24 + 5 = 29'
            }
          },
          {
            title: 'Kontrol Etme',
            content: 'Çözümün mantıklı olup olmadığını kontrol ederiz.',
            visual: '🔍 Kontrol Listesi:\n\n✓ Cevap soruya uygun mu?\n✓ Birimler doğru mu?\n✓ Sayılar mantıklı mı?\n✓ Tersine işlemle kontrol et\n\n"Markette -50 kg elma" olamaz!',
            audio: 'Her çözümden sonra sonucun mantıklı olduğunu kontrol etmeliyiz.',
            example: {
              question: 'Kontrol: 125 - 48 + 35 = 112 doğru mu?',
              answer: 'Evet, doğru',
              explanation: '112 + 48 - 35 = 125 başlangıç değerine döner'
            }
          },
          {
            title: 'Farklı Problem Türleri',
            content: 'Karşılaşabileceğimiz farklı problem türlerini tanıyalım.',
            visual: '📊 Problem Türleri:\n\n1. Para problemleri 💰\n2. Uzaklık-zaman problemleri 🚗\n3. Yaş problemleri 👨‍👩‍👧\n4. Miktar problemleri 📦\n5. Alışveriş problemleri 🛒',
            audio: 'Her problem türünün kendine özgü çözüm yolları vardır.',
            example: {
              question: 'Bir araba saatte 60 km gidiyor. 3 saatte kaç km gider?',
              answer: '180 km',
              explanation: '60 × 3 = 180 km (hız × zaman = yol)'
            }
          },
          {
            title: 'Çözümü Açıklama',
            content: 'Çözüm yolunu kendi cümlelerimizle ifade edebilmeliyiz.',
            visual: '💬 Açıklama Örneği:\n\n"Önce toplam harcamayı buldum:\n15 + 8 = 23 TL\nSonra başlangıçtan çıkardım:\n45 - 23 = 22 TL\nAli\'nin 22 TL\'si kaldı."',
            audio: 'Çözümü açıklamak, anladığımızı gösterir.',
            example: {
              question: 'Bir çiftlikte 45 tavuk, 28 ördek var. Toplam kaç hayvan?',
              answer: '73 hayvan - tavuk ve ördek sayılarını topladım',
              explanation: '45 + 28 = 73'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Ahmet\'in 120 TL\'si var. 35 TL\'lik oyuncak, 28 TL\'lik kitap aldı. Kaç TL kaldı?',
            options: ['47 TL', '57 TL', '67 TL', '77 TL'],
            correctAnswer: '57 TL',
            explanation: '35 + 28 = 63 TL harcadı. 120 - 63 = 57 TL kaldı'
          },
          {
            type: 'fill-blank',
            question: 'Bir bahçede 84 çiçek var. 36 çiçek koparıldı, 25 yeni dikildi. Kaç çiçek var? ___',
            correctAnswer: '73',
            explanation: '84 - 36 = 48, 48 + 25 = 73'
          },
          {
            type: 'multiple-choice',
            question: 'Bir otobüs saatte 75 km gidiyor. 4 saatte kaç km gider?',
            options: ['275 km', '300 km', '325 km', '350 km'],
            correctAnswer: '300 km',
            explanation: '75 × 4 = 300 km'
          },
          {
            type: 'fill-blank',
            question: 'Bir kütüphanede 1250 kitap var. 340 kitap ödünç verildi, 125 kitap geri döndü. Kaç kitap var? ___',
            correctAnswer: '1035',
            explanation: '1250 - 340 = 910, 910 + 125 = 1035'
          },
          {
            type: 'multiple-choice',
            question: 'Zeynep\'in yaşı 12. Babası Zeynep\'in yaşının 3 katından 4 yaş büyük. Baba kaç yaşında?',
            options: ['36', '38', '40', '42'],
            correctAnswer: '40',
            explanation: '12 × 3 = 36, 36 + 4 = 40 yaş'
          },
          {
            type: 'fill-blank',
            question: '6 kutu kalemde toplam 72 kalem var. 4 kutu kalemde kaç kalem var? ___',
            correctAnswer: '48',
            explanation: '72 ÷ 6 = 12 (her kutuda), 12 × 4 = 48'
          },
          {
            type: 'multiple-choice',
            question: 'Bir işçi günde 85 TL kazanıyor. 5 gün çalışıp 175 TL harcadı. Kaç TL kaldı?',
            options: ['250 TL', '275 TL', '300 TL', '325 TL'],
            correctAnswer: '250 TL',
            explanation: '85 × 5 = 425 TL kazandı. 425 - 175 = 250 TL kaldı'
          },
          {
            type: 'fill-blank',
            question: 'Bir sayının 5 katı 45\'tir. Bu sayının 8 katı kaçtır? ___',
            correctAnswer: '72',
            explanation: '45 ÷ 5 = 9 (sayı), 9 × 8 = 72'
          },
          {
            type: 'multiple-choice',
            question: '3 arkadaş 240 TL topladı. Eşit paylaştılar, sonra her biri 25 TL harcadı. Her birinin kaç TL\'si kaldı?',
            options: ['45 TL', '55 TL', '65 TL', '75 TL'],
            correctAnswer: '55 TL',
            explanation: '240 ÷ 3 = 80 TL (her birine), 80 - 25 = 55 TL'
          },
          {
            type: 'fill-blank',
            question: 'Bir market 8 kasa portakal aldı. Her kasada 45 portakal var. 120 tanesi satıldı. Kaç portakal kaldı? ___',
            correctAnswer: '240',
            explanation: '8 × 45 = 360 toplam, 360 - 120 = 240'
          }
        ]
      }
    },
    // Konu 9: Problem Kurma
    {
      id: 'grade4-tema3-konu9',
      title: 'Problem Kurma',
      description: 'Kendi problemlerimizi oluşturmayı öğreniyoruz',
      emoji: '✍️',
      duration: '45 dk',
      difficulty: 3,
      keywords: ['Problem kurma', 'Yaratıcılık', 'Değişken', 'Tasarım'],
      content: {
        introduction: 'Merhaba problem tasarımcıları! Bugün sadece problem çözmeyeceğiz - kendi problemlerimizi kuracağız! Bu, matematiği gerçekten anladığınızı gösterir. Haydi yaratıcılığınızı konuşturun! ✍️✨',
        motivationQuote: 'İyi problem kuran, harika problem çözer! 🎨',
        funFacts: [
          '📚 Matematik kitaplarındaki problemler matematikçiler tarafından kuruldu!',
          '🧪 Bilim insanları sürekli yeni problemler keşfeder!',
          '🎯 Problem kurmak, konuyu derinlemesine anlamayı gerektirir!'
        ],
        steps: [
          {
            title: 'Problem Kurmanın Temelleri',
            content: 'Bir problem kurmak için sayılar, işlemler ve bir hikaye gerekir.',
            visual: '🔧 Problem Parçaları:\n\n1. Sayılar (veriler)\n2. İşlemler (toplama, çıkarma, vb.)\n3. Hikaye/Bağlam\n4. Soru\n\nBunları birleştir = Problem!',
            audio: 'Her problem, mantıklı bir hikaye içinde sayıları ve işlemleri birleştirir.',
            example: {
              question: '24 ve 18 sayılarıyla toplama problemi kurun',
              answer: 'Ahmet\'in 24 kalemi, Ali\'nin 18 kalemi var. Toplam kaç kalemleri var?',
              explanation: 'Sayılar + işlem + hikaye + soru'
            }
          },
          {
            title: 'Günlük Hayattan Problemler',
            content: 'En iyi problemler günlük hayattan esinlenir.',
            visual: '🏠 Günlük Hayat Konuları:\n\n• Alışveriş 🛒\n• Yemek yapma 🍳\n• Spor 🏀\n• Okul 📚\n• Tatil ✈️\n• Para biriktirme 💰',
            audio: 'Çevrenizdeki durumları gözlemleyerek problem fikirleri bulabilirsiniz.',
            example: {
              question: 'Market alışverişi konusunda çarpma problemi kurun',
              answer: 'Bir kalem 5 TL. 7 kalem alırsam kaç TL öderim?',
              explanation: '5 × 7 = 35 TL çarpma problemi'
            }
          },
          {
            title: 'İşleme Göre Problem Kurma',
            content: 'Farklı işlemler farklı durumları anlatır.',
            visual: '🔢 İşlem-Durum İlişkisi:\n\n+ Toplama: Birleştirme, artış\n- Çıkarma: Ayırma, azalış\n× Çarpma: Tekrarlı toplama\n÷ Bölme: Paylaştırma, gruplama',
            audio: 'Her işlemin günlük hayatta karşılığı vardır.',
            example: {
              question: 'Bölme gerektiren bir problem kurun',
              answer: '36 çikolata 4 çocuğa eşit paylaştırılırsa her çocuk kaç çikolata alır?',
              explanation: '36 ÷ 4 = 9 bölme problemi'
            }
          },
          {
            title: 'Çok Adımlı Problem Kurma',
            content: 'Birden fazla işlem gerektiren problemler kurabiliriz.',
            visual: '📊 Çok Adımlı Problem Örneği:\n\n"Bir bahçıvan 45 fidan dikti.\n12 fidan kurudu.\n20 yeni fidan daha dikti.\nKaç fidan kaldı?"\n\n45 - 12 + 20 = 53 fidan',
            audio: 'Çok adımlı problemler birden fazla işlem içerir.',
            example: {
              question: 'Çarpma ve çıkarma içeren bir problem kurun',
              answer: 'Her biri 15 TL olan 4 kitap aldım. 100 TL verdim. Para üstü kaç TL?',
              explanation: '15 × 4 = 60 TL, 100 - 60 = 40 TL'
            }
          },
          {
            title: 'Problemi Değerlendirme',
            content: 'Kurduğumuz problemin iyi olup olmadığını kontrol ederiz.',
            visual: '✅ Problem Kontrol Listesi:\n\n□ Anlaşılır mı?\n□ Çözülebilir mi?\n□ Mantıklı mı?\n□ Soru açık mı?\n□ Sayılar uygun mu?\n\n⚠️ "Negatif 5 elma" olamaz!',
            audio: 'İyi bir problem açık, anlaşılır ve mantıklı olmalıdır.',
            example: {
              question: '"5 - 10 = ?" gerçek hayat problemi olabilir mi?',
              answer: 'Hayır, normal bir durumda negatif olmaz',
              explanation: 'Borç durumu hariç, sayılar pozitif olmalı'
            }
          },
          {
            title: 'Problemi Düzenleme',
            content: 'Kurduğumuz problemi gözden geçirip iyileştirebiliriz.',
            visual: '📝 Düzenleme Örneği:\n\nİlk Hali:\n"Ali 10 elma yedi. 5 elma daha yedi. Kaç?"\n\nDüzenlenmiş:\n"Ali\'nin 10 elması vardı. 5 tane daha aldı. Şimdi kaç elması var?"\n\n✅ Daha açık ve anlaşılır!',
            audio: 'Problemi başkasına okutur ve anlaşılıp anlaşılmadığını kontrol ederiz.',
            example: {
              question: 'Kurduğunuz problemi bir arkadaşınıza çözdürün. Anladı mı?',
              answer: 'Anlamadıysa problemi yeniden düzenleyin',
              explanation: 'İyi bir problem herkes tarafından anlaşılabilir olmalı'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Hangi durum toplama problemi için uygundur?',
            options: ['Pasta dilimlemek', 'İki sınıfı birleştirmek', 'Kalemi paylaşmak', 'Yaş farkı bulmak'],
            correctAnswer: 'İki sınıfı birleştirmek',
            explanation: 'Birleştirme durumu toplama gerektirir'
          },
          {
            type: 'fill-blank',
            question: '45 ve 9 sayılarıyla bölme problemi kur: "45 bilye ___ çocuğa eşit paylaştırılırsa..."',
            correctAnswer: '9',
            explanation: '45 ÷ 9 = 5 bilye (her çocuğa)'
          },
          {
            type: 'multiple-choice',
            question: 'Hangi problem çarpma gerektirir?',
            options: ['5 elma yedim, 3 kaldı', 'Her kasada 8 portakal, 5 kasa', 'Yaşım 12, kardeşim 8', '20 TL verdim, 12 TL para üstü'],
            correctAnswer: 'Her kasada 8 portakal, 5 kasa',
            explanation: '8 × 5 = 40 portakal çarpma işlemi'
          },
          {
            type: 'fill-blank',
            question: '100 - 35 işlemi için problem: "___TL\'m vardı. ___TL harcadım. Kaç TL kaldı?"',
            correctAnswer: '100, 35',
            explanation: '100 - 35 = 65 TL kalan'
          },
          {
            type: 'multiple-choice',
            question: '"12 kişi, her biri 5 TL verdi" hangi işlemi gerektirir?',
            options: ['Toplama', 'Çıkarma', 'Çarpma', 'Bölme'],
            correctAnswer: 'Çarpma',
            explanation: '12 × 5 = 60 TL toplam'
          },
          {
            type: 'fill-blank',
            question: '8 × 6 = 48 işlemi için bir problem kur: "Her kutuda ___ kalem var, ___ kutu..."',
            correctAnswer: '6, 8 veya 8, 6',
            explanation: 'Her iki yol da 48 kalem sonucunu verir'
          },
          {
            type: 'multiple-choice',
            question: 'Hangi problem iki işlem (çarpma + çıkarma) gerektirir?',
            options: ['5 × 4 = ?', '20 - 8 = ?', '3 paket kalem aldım (6\'lı), 2 verdim', '10 + 5 = ?'],
            correctAnswer: '3 paket kalem aldım (6\'lı), 2 verdim',
            explanation: '3 × 6 = 18, 18 - 2 = 16 kalem'
          },
          {
            type: 'fill-blank',
            question: '72 ÷ 8 için problem: "___ çikolata ___ çocuğa eşit paylaştırıldı"',
            correctAnswer: '72, 8',
            explanation: '72 ÷ 8 = 9 çikolata her çocuğa'
          },
          {
            type: 'multiple-choice',
            question: 'İyi bir problem için hangisi YANLIŞ?',
            options: ['Açık bir soru olmalı', 'Veriler yeterli olmalı', 'Negatif sonuç verebilir', 'Çözülebilir olmalı'],
            correctAnswer: 'Negatif sonuç verebilir',
            explanation: 'Günlük hayat problemlerinde genellikle negatif olmaz'
          },
          {
            type: 'fill-blank',
            question: 'Çok adımlı problem: "50 TL\'m var. 3 tane ___ TL\'lik kalem aldım. ___ TL kaldı."',
            correctAnswer: '12, 14',
            explanation: '3 × 12 = 36, 50 - 36 = 14 TL'
          }
        ]
      }
    },
    // Konu 10: Eşitliğin Farklı Anlamları
    {
      id: 'grade4-tema3-konu10',
      title: 'Eşitliğin Farklı Anlamları',
      description: 'Eşitlik işaretinin farklı kullanımlarını öğreniyoruz',
      emoji: '⚖️',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Eşitlik', 'Denge', 'Eşit işareti', 'Cebir', 'Denklem'],
      content: {
        introduction: 'Merhaba denge ustaları! Bugün "=" işaretinin sırlarını keşfedeceğiz! Eşitlik sadece "sonuç" demek değil - denge, denklik ve çok daha fazlası! Hazır mısınız matematiğin terazisini anlamaya? ⚖️',
        motivationQuote: 'Eşitlik, matematiğin terazisidir - her iki taraf da dengelidir! ⚖️',
        funFacts: [
          '⚖️ "=" işareti 1557 yılında Robert Recorde tarafından icat edildi!',
          '🧮 Eşitlik işareti "iki paralel çizgi çünkü hiçbir şey bunlardan daha eşit olamaz" diye tasarlandı!',
          '💡 Bilgisayar kodlarında "==" eşitlik kontrolü için kullanılır!'
        ],
        steps: [
          {
            title: 'Eşitlik İşaretinin Anlamı',
            content: 'Eşitlik işareti (=) "aynı değere sahip" demektir. Sol taraf ve sağ taraf dengededir.',
            visual: '⚖️ Terazi Modeli:\n\n    5 + 3  =  8\n   ⬛⬛⬛⬛⬛   ⬛⬛⬛⬛⬛⬛⬛⬛\n    \\______⚖️______/\n         DENGELİ!\n\nHer iki taraf da 8\'e eşit!',
            audio: 'Eşitlik işareti, iki tarafın aynı değere sahip olduğunu gösterir.',
            example: {
              question: '7 + 5 = ? + 4 eşitliğinde ? kaçtır?',
              answer: '8',
              explanation: '7 + 5 = 12, 12 = ? + 4, ? = 8'
            }
          },
          {
            title: 'Eşitliği Sağda ve Solda Kullanma',
            content: 'Eşitlik işaretinin sağında veya solunda sonuç olabilir.',
            visual: '➡️ Klasik kullanım:\n5 + 3 = 8\n\n⬅️ Ters kullanım:\n8 = 5 + 3\n\n↔️ Her iki tarafta işlem:\n5 + 3 = 4 + 4\n\nHepsi DOĞRU! ✅',
            audio: 'Eşitlik işareti sadece sonuç göstermez, dengeyi gösterir.',
            example: {
              question: '12 = ? + 5 eşitliğinde ? kaçtır?',
              answer: '7',
              explanation: '12 = 7 + 5, ? = 12 - 5 = 7'
            }
          },
          {
            title: 'Dört İşlemde Eşitlik',
            content: 'Eşitlik, dört işlem arasındaki ilişkileri gösterir.',
            visual: '🔄 İşlem İlişkileri:\n\n6 × 4 = 24\n24 ÷ 4 = 6\n24 ÷ 6 = 4\n\n15 + 8 = 23\n23 - 8 = 15\n23 - 15 = 8',
            audio: 'Toplama-çıkarma ve çarpma-bölme ters işlemlerdir, eşitlikle bağlıdır.',
            example: {
              question: '8 × 5 = 40 ise 40 ÷ 5 = ?',
              answer: '8',
              explanation: 'Çarpma ve bölme ters işlemlerdir'
            }
          },
          {
            title: 'Eşitliği Koruma',
            content: 'Eşitliğin her iki tarafına aynı işlemi yaparsak, eşitlik korunur.',
            visual: '⚖️ Denge Kuralı:\n\n10 = 10 (başlangıç)\n\nHer iki tarafa 5 ekle:\n10 + 5 = 10 + 5\n15 = 15 ✅\n\nHer iki tarafı 2 ile çarp:\n15 × 2 = 15 × 2\n30 = 30 ✅',
            audio: 'Eşitliğin her iki tarafına aynı şeyi yaparsak denge bozulmaz.',
            example: {
              question: 'x + 3 = 10 ise her iki taraftan 3 çıkarırsak x = ?',
              answer: '7',
              explanation: 'x + 3 - 3 = 10 - 3, x = 7'
            }
          },
          {
            title: 'Eksik Sayı Bulma',
            content: 'Eşitlikte bilinmeyen sayıyı bulabiliriz.',
            visual: '❓ Eksik Sayı Problemleri:\n\n? + 8 = 15\n? = 15 - 8 = 7\n\n24 ÷ ? = 6\n? = 24 ÷ 6 = 4\n\n? × 7 = 56\n? = 56 ÷ 7 = 8',
            audio: 'Ters işlemi kullanarak bilinmeyen sayıyı bulabiliriz.',
            example: {
              question: '? × 9 = 72 ise ? kaçtır?',
              answer: '8',
              explanation: '? = 72 ÷ 9 = 8'
            }
          },
          {
            title: 'Eşitlikleri Dönüştürme',
            content: 'Bir eşitliği farklı şekillerde ifade edebiliriz.',
            visual: '🔄 Dönüşüm Örnekleri:\n\n20 + 15 = 35\n↓\n35 - 15 = 20\n35 - 20 = 15\n\n4 × 8 = 32\n↓\n32 ÷ 8 = 4\n32 ÷ 4 = 8',
            audio: 'Bir eşitlikten diğer eşitlikleri türetebiliriz.',
            example: {
              question: '45 + 27 = 72 eşitliğinden bir çıkarma eşitliği yaz',
              answer: '72 - 27 = 45 veya 72 - 45 = 27',
              explanation: 'Toplama eşitliğinden çıkarma eşitlikleri türetilebilir'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '? + 12 = 25 eşitliğinde ? kaçtır?',
            options: ['13', '37', '12', '25'],
            correctAnswer: '13',
            explanation: '? = 25 - 12 = 13'
          },
          {
            type: 'fill-blank',
            question: '56 ÷ ? = 8 eşitliğinde ? = ___',
            correctAnswer: '7',
            explanation: '? = 56 ÷ 8 = 7'
          },
          {
            type: 'multiple-choice',
            question: 'Hangi eşitlik doğrudur?',
            options: ['5 + 4 = 10', '8 × 3 = 21', '36 ÷ 6 = 6', '15 - 7 = 9'],
            correctAnswer: '36 ÷ 6 = 6',
            explanation: '36 ÷ 6 = 6 doğrudur'
          },
          {
            type: 'fill-blank',
            question: '? × 6 = 42 eşitliğinde ? = ___',
            correctAnswer: '7',
            explanation: '? = 42 ÷ 6 = 7'
          },
          {
            type: 'multiple-choice',
            question: '35 - 18 = 17 eşitliğinden hangi eşitlik türetilebilir?',
            options: ['35 + 18 = 53', '17 + 18 = 35', '35 ÷ 18 = 17', '18 - 17 = 35'],
            correctAnswer: '17 + 18 = 35',
            explanation: 'Çıkarma işleminin ters eşitliği toplamadır'
          },
          {
            type: 'fill-blank',
            question: '48 = 6 × ? eşitliğinde ? = ___',
            correctAnswer: '8',
            explanation: '? = 48 ÷ 6 = 8'
          },
          {
            type: 'multiple-choice',
            question: '9 × 5 = 45 eşitliğinden hangi bölme eşitliği türetilir?',
            options: ['45 ÷ 9 = 4', '45 ÷ 5 = 8', '45 ÷ 5 = 9', '45 ÷ 45 = 1'],
            correctAnswer: '45 ÷ 5 = 9',
            explanation: '45 ÷ 5 = 9 veya 45 ÷ 9 = 5 türetilebilir'
          },
          {
            type: 'fill-blank',
            question: '100 - ? = 65 eşitliğinde ? = ___',
            correctAnswer: '35',
            explanation: '? = 100 - 65 = 35'
          },
          {
            type: 'multiple-choice',
            question: '24 + ? = 10 + 20 eşitliğinde ? kaçtır?',
            options: ['4', '6', '8', '10'],
            correctAnswer: '6',
            explanation: '10 + 20 = 30, 24 + ? = 30, ? = 6'
          },
          {
            type: 'fill-blank',
            question: '8 × 7 = ? × 4 eşitliğinde ? = ___',
            correctAnswer: '14',
            explanation: '8 × 7 = 56, 56 = ? × 4, ? = 14'
          }
        ]
      }
    }
  ]
};
