// 4. SINIF - TEMA 1: SAYILAR VE NİCELİKLER (1)
// 23 saat (%13) - 5 Öğrenme Çıktısı

import { Theme } from '../types';

export const tema1: Theme = {
  id: 'grade4-tema1',
  title: 'Sayılar ve Nicelikler (1)',
  description: 'Altı basamaklı sayılar, bölükler, sıralama, ritmik sayma ve örüntüler!',
  emoji: '🔢',
  color: 'from-orange-400 to-amber-500',
  bgColor: 'bg-orange-50',
  borderColor: 'border-orange-200',
  textColor: 'text-orange-600',
  hours: 23,
  objectives: [
    'Altı basamaklı sayıların temsillerinden yararlanabilme',
    'Altı basamaklı sayıları çözümleyebilme',
    'Sayıları sıralayabilme',
    'Ritmik saymayı yapılandırabilme',
    'Artan-azalan örüntülerdeki değişimi genelleyebilme'
  ],
  keywords: [
    'Basamak', 'Basamak değeri', 'Bölük', 'Birler bölüğü', 'Binler bölüğü',
    'Sayı doğrusu', 'Ritmik sayma', 'Örüntü'
  ],
  generalizations: [
    'Sayılar, basamak ve bölüklerden oluşur.',
    'Örüntülerdeki değişimler genellenebilir.'
  ],
  topics: [
    // Konu 1: Altı Basamaklı Sayılar
    {
      id: 'grade4-tema1-konu1',
      title: 'Altı Basamaklı Sayılar',
      description: 'Altı basamaklı sayıları okuma, yazma ve gösterme',
      emoji: '🔢',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Altı basamak', 'Yüz binler', 'Büyük sayılar', 'Okuma', 'Yazma'],
      content: {
        introduction: 'Merhaba sayı kaşifleri! Bugün çok büyük sayıların dünyasına gireceğiz. Yüz binler, hatta yüz binlerin de ötesini öğreneceğiz! 🔢🚀',
        motivationQuote: 'Büyük sayılar büyük düşüncelerin başlangıcıdır! 💫',
        funFacts: [
          '🏙️ İstanbul\'un nüfusu 15 milyondan fazla - 8 basamaklı bir sayı!',
          '💰 1 milyon = 1.000.000 (7 basamaklı sayı)',
          '🌍 Türkiye\'nin yüzölçümü yaklaşık 780.000 km²!'
        ],
        steps: [
          {
            title: 'Yüz Binler Basamağı',
            content: 'Altı basamaklı sayılarda en soldaki basamak yüz binler basamağıdır. 100.000 = yüz bin.',
            visual: '🔢 Altı Basamak:\n\n     1  2  3  4  5  6\n     ↓  ↓  ↓  ↓  ↓  ↓\nYüz On Bin Yüz On Bir\nBin Bin ler ler lar ler\n\n234.567 = \nİki yüz otuz dört bin\nbeş yüz altmış yedi',
            audio: 'Altı basamaklı sayılarda soldan sağa: yüz binler, on binler, binler, yüzler, onlar, birler.',
            example: {
              question: '456.789 sayısını sözcüklerle yazın',
              answer: 'Dört yüz elli altı bin yedi yüz seksen dokuz',
              explanation: '456 bin + 789'
            }
          },
          {
            title: 'Sayı Okuma ve Yazma',
            content: 'Altı basamaklı sayıları okurken önce binler bölüğünü, sonra birler bölüğünü okuruz.',
            visual: '📖 Okuma Kuralı:\n\n567.234\n↓↓↓ ↓↓↓\nBinler Birler\nBölüğü Bölüğü\n\n"Beş yüz altmış yedi bin\n iki yüz otuz dört"',
            audio: 'Büyük sayıları okurken bölükleri ayrı ayrı okuyup "bin" kelimesiyle bağlarız.',
            example: {
              question: '"Üç yüz kırk beş bin altı yüz yetmiş sekiz" nasıl yazılır?',
              answer: '345.678',
              explanation: 'Binler bölüğü: 345, Birler bölüğü: 678'
            }
          },
          {
            title: 'Farklı Gösterimler',
            content: 'Aynı sayı farklı şekillerde gösterilebilir: rakamla, sözcükle, çözümlenmiş halde.',
            visual: '📝 Aynı Sayının Gösterimleri:\n\n• Rakamla: 523.461\n• Sözcükle: Beş yüz yirmi üç bin dört yüz altmış bir\n• Çözümlenmiş: 500.000 + 20.000 + 3.000 + 400 + 60 + 1',
            audio: 'Sayıları farklı şekillerde göstermek, onları daha iyi anlamamızı sağlar.',
            example: {
              question: '600.000 + 50.000 + 4.000 + 300 + 20 + 5 toplamı kaçtır?',
              answer: '654.325',
              explanation: 'Her basamak değerini topla'
            }
          },
          {
            title: 'Basamak Değerleri',
            content: 'Her rakamın değeri, bulunduğu basamağa göre değişir.',
            visual: '💯 Basamak Değeri:\n\n     7  3  4  5  6  2\n     ↓  ↓  ↓  ↓  ↓  ↓\n700.000+30.000+4.000+500+60+2\n\n7 rakamının değeri: 700.000\n3 rakamının değeri: 30.000',
            audio: 'Aynı rakam farklı basamaklarda farklı değerler alır.',
            example: {
              question: '458.362 sayısında 5\'in basamak değeri nedir?',
              answer: '50.000',
              explanation: '5, on binler basamağında, değeri 5 × 10.000 = 50.000'
            }
          },
          {
            title: 'En Büyük ve En Küçük',
            content: 'En küçük 6 basamaklı sayı 100.000, en büyük 6 basamaklı sayı 999.999\'dur.',
            visual: '📊 Sınırlar:\n\nEn küçük 6 basamaklı:\n100.000 (yüz bin)\n\nEn büyük 6 basamaklı:\n999.999 (dokuz yüz doksan dokuz bin dokuz yüz doksan dokuz)\n\n999.999 + 1 = 1.000.000 (7 basamaklı!)',
            audio: 'Altı basamaklı sayılar 100.000\'dan 999.999\'a kadar olan sayılardır.',
            example: {
              question: '3, 5, 0, 8, 2, 7 rakamlarıyla yazılabilecek en büyük 6 basamaklı sayı?',
              answer: '875.320',
              explanation: 'Rakamları büyükten küçüğe diz'
            }
          },
          {
            title: 'Gerçek Hayat Örnekleri',
            content: 'Altı basamaklı sayılar günlük hayatta sıkça karşımıza çıkar.',
            visual: '🌍 Günlük Örnekler:\n\n🏠 Ev fiyatı: 850.000 TL\n🚗 Araba km: 145.000 km\n👥 Şehir nüfusu: 320.000\n📚 Kütüphane kitap: 250.000 adet\n💵 Maaş: 100.000 TL',
            audio: 'Ev fiyatları, araç kilometresi, nüfus gibi birçok şey 6 basamaklı sayılarla ifade edilir.',
            example: {
              question: 'Bir şehrin nüfusu 534.000. Bu sayıyı sözcüklerle yazın.',
              answer: 'Beş yüz otuz dört bin',
              explanation: '534 bin olarak okunur'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '645.789 sayısında 4 rakamının basamak değeri nedir?',
            options: ['4', '400', '4.000', '40.000'],
            correctAnswer: '40.000',
            explanation: '4, on binler basamağında: 4 × 10.000 = 40.000'
          },
          {
            type: 'fill-blank',
            question: 'En küçük altı basamaklı sayı ___.',
            correctAnswer: '100.000',
            explanation: 'En küçük 6 basamaklı sayı yüz bindir'
          },
          {
            type: 'multiple-choice',
            question: '"Yedi yüz seksen dört bin üç yüz elli bir" nasıl yazılır?',
            options: ['784.351', '748.315', '784.315', '748.351'],
            correctAnswer: '784.351',
            explanation: '784 bin + 351'
          },
          {
            type: 'fill-blank',
            question: '500.000 + 60.000 + 7.000 + 400 + 30 + 2 = ___',
            correctAnswer: '567.432',
            explanation: 'Basamak değerlerini topla'
          },
          {
            type: 'multiple-choice',
            question: '999.999 sayısından sonra gelen sayı kaçtır?',
            options: ['999.000', '1.000.000', '100.000', '999.998'],
            correctAnswer: '1.000.000',
            explanation: '999.999 + 1 = 1.000.000 (bir milyon)'
          },
          {
            type: 'fill-blank',
            question: '236.478 sayısını sözcüklerle yazın: ___ bin dört yüz yetmiş sekiz',
            correctAnswer: 'İki yüz otuz altı',
            explanation: '236.478 = İki yüz otuz altı bin dört yüz yetmiş sekiz'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi altı basamaklı sayı DEĞİLDİR?',
            options: ['100.000', '99.999', '500.000', '999.999'],
            correctAnswer: '99.999',
            explanation: '99.999 beş basamaklıdır'
          },
          {
            type: 'fill-blank',
            question: '1, 3, 5, 7, 9, 0 rakamlarıyla en küçük 6 basamaklı sayı: ___',
            correctAnswer: '103.579',
            explanation: 'Başa 0 gelemez, en küçükten başla: 1, 0, 3, 5, 7, 9'
          },
          {
            type: 'multiple-choice',
            question: '468.235 sayısında binler bölüğünün değeri nedir?',
            options: ['235', '468', '468.000', '235.000'],
            correctAnswer: '468.000',
            explanation: 'Binler bölüğü: 468, değeri 468 × 1000 = 468.000'
          },
          {
            type: 'fill-blank',
            question: '823.456 sayısında 2 rakamının basamak değeri ___.',
            correctAnswer: '20.000',
            explanation: '2, on binler basamağında: 2 × 10.000 = 20.000'
          }
        ]
      }
    },
    // Konu 2: Bölükler ve Basamak İlişkileri
    {
      id: 'grade4-tema1-konu2',
      title: 'Bölükler ve Basamak İlişkileri',
      description: 'Birler ve binler bölüğünü anlama, basamaklar arası ilişkiler',
      emoji: '📊',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Bölük', 'Birler bölüğü', 'Binler bölüğü', 'Basamak ilişkisi'],
      content: {
        introduction: 'Merhaba matematik dedektifleri! Bugün sayıların gizli yapısını çözeceğiz. Bölükler ve basamaklar arasındaki ilişkileri keşfedeceğiz! 📊🔍',
        motivationQuote: 'Sayıların yapısını anlamak, matematiğin kapısını açmaktır! 🗝️',
        funFacts: [
          '📜 Bölük sistemi Hindistan\'da geliştirildi!',
          '🔢 Her bölükte 3 basamak vardır!',
          '🌍 Dünya\'nın her yerinde aynı sistem kullanılır!'
        ],
        steps: [
          {
            title: 'Bölük Nedir?',
            content: 'Bölük, sayıları gruplandırmak için kullanılan üçlü basamak gruplarıdır.',
            visual: '📦 Bölükler:\n\n     567  .  234\n     ↓↓↓     ↓↓↓\n   Binler   Birler\n   Bölüğü   Bölüğü\n\nHer bölükte 3 basamak var!\nBölükler nokta ile ayrılır.',
            audio: 'Bölükler sayıları okumayı ve anlamayı kolaylaştırır.',
            example: {
              question: '845.123 sayısında birler bölüğü hangi rakamlardan oluşur?',
              answer: '123',
              explanation: 'Noktadan sonraki 3 rakam birler bölüğüdür'
            }
          },
          {
            title: 'Birler Bölüğü',
            content: 'Birler bölüğü, sayının sağındaki üç basamaktır: yüzler, onlar, birler.',
            visual: '🔵 Birler Bölüğü:\n\n        1  2  3\n        ↓  ↓  ↓\n     Yüzler Onlar Birler\n\n567.123\'te birler bölüğü = 123\n= 1 yüzlük + 2 onluk + 3 birlik\n= 100 + 20 + 3',
            audio: 'Birler bölüğü, sayının son üç basamağını içerir.',
            example: {
              question: '789.456 sayısında birler bölüğünün değeri nedir?',
              answer: '456',
              explanation: 'Birler bölüğü = 4 yüz + 5 on + 6 bir = 456'
            }
          },
          {
            title: 'Binler Bölüğü',
            content: 'Binler bölüğü, noktadan önceki üç basamaktır: yüz binler, on binler, binler.',
            visual: '🟡 Binler Bölüğü:\n\n     5  6  7\n     ↓  ↓  ↓\n  YüzBin OnBin Bin\n\n567.123\'te binler bölüğü = 567\n= 5 yüz bin + 6 on bin + 7 bin\n= 500.000 + 60.000 + 7.000',
            audio: 'Binler bölüğü, sayının binler kısmını gösterir.',
            example: {
              question: '234.567 sayısında binler bölüğünün değeri kaçtır?',
              answer: '234.000',
              explanation: '234 × 1000 = 234.000'
            }
          },
          {
            title: 'Basamaklar Arası İlişki',
            content: 'Her basamak, sağındaki basamağın 10 katı değerindedir.',
            visual: '🔄 10 Katı İlişkisi:\n\n1 onluk = 10 birlik\n1 yüzlük = 10 onluk\n1 binlik = 10 yüzlük\n1 on binlik = 10 binlik\n1 yüz binlik = 10 on binlik\n\n↑ Her basamak sağındakinin 10 katı!',
            audio: 'Basamaklar arasında 10 katı ilişkisi vardır.',
            example: {
              question: '50.000 kaç tane 5.000\'dir?',
              answer: '10 tane',
              explanation: '50.000 ÷ 5.000 = 10'
            }
          },
          {
            title: 'Çözümleme ve Birleştirme',
            content: 'Sayıları bölüklerine ayırabilir veya bölüklerden sayı oluşturabiliriz.',
            visual: '🔨 Çözümleme:\n456.789 = 456 bin + 789\n        = 456.000 + 789\n\n🔧 Birleştirme:\n345 bin + 678 = 345.678\nBinler + Birler = Sayı',
            audio: 'Çözümleme ayırma, birleştirme ise toplama işlemidir.',
            example: {
              question: '123 bin + 456 kaç eder?',
              answer: '123.456',
              explanation: 'Binler bölüğü: 123, Birler bölüğü: 456'
            }
          },
          {
            title: 'Karşılaştırma',
            content: 'Bölükleri karşılaştırarak sayıları karşılaştırabiliriz.',
            visual: '⚖️ Karşılaştırma:\n\n567.234 ? 567.432\n\nBinler bölüğü: 567 = 567 (eşit)\nBirler bölüğü: 234 < 432\n\nSonuç: 567.234 < 567.432',
            audio: 'Önce binler bölüğünü, eşitse birler bölüğünü karşılaştırırız.',
            example: {
              question: '845.123 ve 845.321 sayılarından hangisi büyük?',
              answer: '845.321',
              explanation: 'Binler eşit, 321 > 123'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '456.789 sayısında binler bölüğü hangisidir?',
            options: ['456', '789', '456.000', '789.000'],
            correctAnswer: '456',
            explanation: 'Noktadan önceki 3 rakam binler bölüğüdür'
          },
          {
            type: 'fill-blank',
            question: '1 yüz binlik = ___ tane on binlik',
            correctAnswer: '10',
            explanation: '100.000 ÷ 10.000 = 10'
          },
          {
            type: 'multiple-choice',
            question: '678 bin + 345 kaç eder?',
            options: ['678.345', '345.678', '678.000', '1.023'],
            correctAnswer: '678.345',
            explanation: 'Binler: 678, Birler: 345 = 678.345'
          },
          {
            type: 'fill-blank',
            question: '234.567 sayısının birler bölüğü ___.',
            correctAnswer: '567',
            explanation: 'Noktadan sonraki 3 rakam'
          },
          {
            type: 'multiple-choice',
            question: '1 binlik kaç yüzlüktür?',
            options: ['10', '100', '1000', '1'],
            correctAnswer: '10',
            explanation: '1.000 ÷ 100 = 10'
          },
          {
            type: 'fill-blank',
            question: '345.678 = 345.000 + ___',
            correctAnswer: '678',
            explanation: 'Birler bölüğü: 678'
          },
          {
            type: 'multiple-choice',
            question: '555.555 sayısında birler bölüğü ile binler bölüğü arasındaki fark?',
            options: ['0', '555', '1', '555.000'],
            correctAnswer: '0',
            explanation: 'Her iki bölük de 555, fark = 0'
          },
          {
            type: 'fill-blank',
            question: '30.000 kaç tane 3.000\'dir? ___',
            correctAnswer: '10',
            explanation: '30.000 ÷ 3.000 = 10'
          },
          {
            type: 'multiple-choice',
            question: '567.890 ve 567.098 sayılarından hangisi büyük?',
            options: ['567.890', '567.098', 'Eşit', 'Karşılaştırılamaz'],
            correctAnswer: '567.890',
            explanation: 'Binler eşit, 890 > 098'
          },
          {
            type: 'fill-blank',
            question: '100.000 = ___ tane 1.000',
            correctAnswer: '100',
            explanation: '100.000 ÷ 1.000 = 100'
          }
        ]
      }
    },
    // Konu 3: Sayıları Sıralama
    {
      id: 'grade4-tema1-konu3',
      title: 'Sayıları Sıralama',
      description: 'Altı basamaklı sayıları küçükten büyüğe ve büyükten küçüğe sıralama',
      emoji: '📈',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Sıralama', 'Karşılaştırma', 'Küçükten büyüğe', 'Büyükten küçüğe'],
      content: {
        introduction: 'Merhaba sıralama uzmanları! Bugün büyük sayıları karşılaştırıp sıralamayı öğreneceğiz. Hangisi büyük, hangisi küçük? Hadi bulalım! 📈📉',
        motivationQuote: 'Sayıları sıralamak, düzeni sevmektir! 📊',
        funFacts: [
          '🏆 Olimpiyatlarda sıralama çok önemli!',
          '📊 Bilgisayarlar saniyede milyonlarca sayı sıralayabilir!',
          '🎯 Sıralama algoritmaları bilgisayar biliminin temelidir!'
        ],
        steps: [
          {
            title: 'Karşılaştırma Kuralları',
            content: 'Önce basamak sayısına, eşitse soldaki basamaklara bakarak karşılaştırırız.',
            visual: '🔍 Karşılaştırma Adımları:\n\n1️⃣ Basamak sayısı farklıysa:\n   Daha çok basamaklı = Daha büyük\n\n2️⃣ Basamak sayısı aynıysa:\n   Soldan sağa karşılaştır\n   İlk farklı basamak belirler!',
            audio: 'Basamak sayısı fazla olan sayı her zaman büyüktür.',
            example: {
              question: '45.678 ve 456.789 sayılarından hangisi büyük?',
              answer: '456.789',
              explanation: '6 basamaklı > 5 basamaklı'
            }
          },
          {
            title: 'Aynı Basamak Sayılı Karşılaştırma',
            content: 'Basamak sayısı aynı olan sayılarda soldan sağa karşılaştırırız.',
            visual: '⚖️ Örnek:\n\n567.890 ? 567.098\n  ↓↓↓ ↓↓↓\n  5=5, 6=6, 7=7\n  8>0 → BÜYÜK!\n\n567.890 > 567.098',
            audio: 'Soldan başlayarak ilk farklı basamak hangisinde büyükse, o sayı büyüktür.',
            example: {
              question: '234.567 ve 234.657 sayılarından hangisi büyük?',
              answer: '234.657',
              explanation: 'Sol 4 basamak eşit, 6 > 5'
            }
          },
          {
            title: 'Küçükten Büyüğe Sıralama',
            content: 'Sayıları en küçükten en büyüğe doğru dizme işlemidir.',
            visual: '📈 Küçükten Büyüğe:\n\n123.456, 234.567, 345.678, 456.789\n   ↑        ↑        ↑        ↑\n  en                        en\nküçük                     büyük\n\n< < <',
            audio: 'Küçükten büyüğe sıralamada sayılar artar.',
            example: {
              question: '500.000, 450.000, 550.000 sayılarını küçükten büyüğe sıralayın',
              answer: '450.000 < 500.000 < 550.000',
              explanation: 'En küçük: 450.000, En büyük: 550.000'
            }
          },
          {
            title: 'Büyükten Küçüğe Sıralama',
            content: 'Sayıları en büyükten en küçüğe doğru dizme işlemidir.',
            visual: '📉 Büyükten Küçüğe:\n\n987.654, 876.543, 765.432, 654.321\n   ↑        ↑        ↑        ↑\n  en                        en\nbüyük                     küçük\n\n> > >',
            audio: 'Büyükten küçüğe sıralamada sayılar azalır.',
            example: {
              question: '678.000, 687.000, 768.000 sayılarını büyükten küçüğe sıralayın',
              answer: '768.000 > 687.000 > 678.000',
              explanation: 'En büyük: 768.000, En küçük: 678.000'
            }
          },
          {
            title: 'Sayı Doğrusu',
            content: 'Sayıları sayı doğrusunda göstererek sıralayabiliriz.',
            visual: '📏 Sayı Doğrusu:\n\n|-------|-------|-------|-------|-------|\n100K   200K   300K   400K   500K   600K\n\n🔵 150.000  🔴 350.000  🟢 450.000\n\nSolda küçük, sağda büyük!',
            audio: 'Sayı doğrusunda sağa gittikçe sayılar büyür.',
            example: {
              question: 'Sayı doğrusunda 250.000 ile 400.000 arasına hangi sayı gelebilir?',
              answer: '300.000, 350.000 gibi',
              explanation: '250.000 < ? < 400.000'
            }
          },
          {
            title: 'Arada Sayı Bulma',
            content: 'İki sayı arasındaki sayıları bulabiliriz.',
            visual: '🔢 Arada Sayı:\n\n345.000 ile 347.000 arasında:\n→ 345.000\n→ 345.500\n→ 346.000\n→ 346.500\n→ 347.000\n\nSonsuz sayı olabilir!',
            audio: 'İki sayı arasında sonsuz sayıda sayı bulunabilir.',
            example: {
              question: '500.000 ile 510.000 arasında 3 sayı yazın',
              answer: '502.000, 505.000, 508.000',
              explanation: 'Araya istediğimiz kadar sayı yazabiliriz'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Hangisi en büyük sayıdır?',
            options: ['456.789', '465.789', '456.978', '456.798'],
            correctAnswer: '465.789',
            explanation: 'On binler basamağında 6 > 5'
          },
          {
            type: 'fill-blank',
            question: '234.567 ___ 234.576 (< veya >)',
            correctAnswer: '<',
            explanation: '567 < 576'
          },
          {
            type: 'multiple-choice',
            question: '123.456, 124.356, 123.546 küçükten büyüğe sıralanırsa ortadaki hangisi?',
            options: ['123.456', '124.356', '123.546', 'Hiçbiri'],
            correctAnswer: '123.546',
            explanation: '123.456 < 123.546 < 124.356'
          },
          {
            type: 'fill-blank',
            question: 'En küçük 6 basamaklı çift sayı: ___',
            correctAnswer: '100.000',
            explanation: '100.000 en küçük 6 basamaklıdır ve çifttir'
          },
          {
            type: 'multiple-choice',
            question: '500.000 ile 600.000 arasında kaç tane tam sayı vardır?',
            options: ['100', '1000', '99.999', '100.000'],
            correctAnswer: '99.999',
            explanation: '600.000 - 500.000 - 1 = 99.999 (uçlar hariç)'
          },
          {
            type: 'fill-blank',
            question: '345.678 sayısından 1 büyük sayı: ___',
            correctAnswer: '345.679',
            explanation: '345.678 + 1 = 345.679'
          },
          {
            type: 'multiple-choice',
            question: '888.888, 898.888, 889.888 büyükten küçüğe sıralanırsa ilk hangisi?',
            options: ['888.888', '898.888', '889.888', 'Hepsi eşit'],
            correctAnswer: '898.888',
            explanation: 'On binler: 9 > 8, 898.888 en büyük'
          },
          {
            type: 'fill-blank',
            question: '400.000 ___ 399.999 (< veya >)',
            correctAnswer: '>',
            explanation: '400.000 > 399.999 (basamak sayısı aynı, sol basamak büyük)'
          },
          {
            type: 'multiple-choice',
            question: '250.000 ile 260.000 arasındaki tam orta sayı?',
            options: ['255.000', '254.000', '256.000', '250.500'],
            correctAnswer: '255.000',
            explanation: '(250.000 + 260.000) ÷ 2 = 255.000'
          },
          {
            type: 'fill-blank',
            question: 'En büyük 6 basamaklı tek sayı: ___',
            correctAnswer: '999.999',
            explanation: '999.999 hem en büyük 6 basamaklı, hem tek sayıdır'
          }
        ]
      }
    },
    // Konu 4: Ritmik Sayma
    {
      id: 'grade4-tema1-konu4',
      title: 'Ritmik Sayma',
      description: 'İleriye ve geriye doğru ritmik sayma kurallarını öğreniyoruz',
      emoji: '🎵',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Ritmik sayma', 'İleriye sayma', 'Geriye sayma', 'Atlayarak sayma'],
      content: {
        introduction: 'Merhaba ritim uzmanları! Bugün sayıların müziğini yapacağız! Atlayarak sayma, ritmik sayma - matematiğin ritmi burada! 🎵🔢',
        motivationQuote: 'Sayıların da bir ritmi var, onu keşfet! 🎶',
        funFacts: [
          '🎹 Müzikteki ölçüler ritmik saymaya benzer!',
          '⏱️ Kronometreler ritmik sayar!',
          '🚀 Roket fırlatmada geri sayım yapılır: 10, 9, 8...'
        ],
        steps: [
          {
            title: 'Ritmik Sayma Nedir?',
            content: 'Ritmik sayma, belirli bir kurala göre (aynı sayı kadar atlayarak) sayma işlemidir.',
            visual: '🎵 Ritmik Sayma:\n\n5\'er 5\'er: 5, 10, 15, 20, 25...\n10\'ar 10\'ar: 10, 20, 30, 40, 50...\n100\'er 100\'er: 100, 200, 300, 400...\n\n🔑 Kural: Hep aynı sayı eklenir!',
            audio: 'Ritmik saymada her adımda aynı miktarı ekler veya çıkarırız.',
            example: {
              question: '3\'er 3\'er sayarken 15\'ten sonra ne gelir?',
              answer: '18',
              explanation: '15 + 3 = 18'
            }
          },
          {
            title: 'İleriye Ritmik Sayma',
            content: 'Sayılar büyüyerek ilerler. Her adımda aynı sayı eklenir.',
            visual: '📈 İleriye Sayma:\n\n1.000\'er 1.000\'er:\n100.000 → 101.000 → 102.000 → 103.000\n\n10.000\'er 10.000\'er:\n200.000 → 210.000 → 220.000 → 230.000\n\nSayılar büyüyor! ↗️',
            audio: 'İleriye ritmik saymada sayılar artar.',
            example: {
              question: '50.000\'den başlayarak 5.000\'er sayınca 3. sayı ne olur?',
              answer: '60.000',
              explanation: '50.000 → 55.000 → 60.000'
            }
          },
          {
            title: 'Geriye Ritmik Sayma',
            content: 'Sayılar küçülerek gider. Her adımda aynı sayı çıkarılır.',
            visual: '📉 Geriye Sayma:\n\n1.000\'er 1.000\'er:\n105.000 → 104.000 → 103.000 → 102.000\n\n10.000\'er 10.000\'er:\n250.000 → 240.000 → 230.000 → 220.000\n\nSayılar küçülüyor! ↘️',
            audio: 'Geriye ritmik saymada sayılar azalır.',
            example: {
              question: '80.000\'den başlayarak 5.000\'er geri sayınca 4. sayı ne olur?',
              answer: '65.000',
              explanation: '80.000 → 75.000 → 70.000 → 65.000'
            }
          },
          {
            title: 'Kuralı Bulma',
            content: 'Verilen sayılardan ritmik sayma kuralını bulabiliriz.',
            visual: '🔍 Kuralı Bul:\n\n120.000, 130.000, 140.000, 150.000\n      +10.000  +10.000  +10.000\n\nKural: 10.000\'er ileriye sayma\n\n350.000, 340.000, 330.000, 320.000\n      -10.000  -10.000  -10.000\n\nKural: 10.000\'er geriye sayma',
            audio: 'İki ardışık sayı arasındaki fark, kuralı verir.',
            example: {
              question: '25.000, 30.000, 35.000, 40.000 dizisinin kuralı nedir?',
              answer: '5.000\'er ileriye',
              explanation: 'Her adımda 5.000 ekleniyor'
            }
          },
          {
            title: 'Devam Ettirme',
            content: 'Kuralı uygulayarak diziyi devam ettirebiliriz.',
            visual: '➡️ Devam Ettir:\n\n100.000, 125.000, 150.000, ?, ?, ?\n\nKural: +25.000\n\nDevamı:\n150.000 + 25.000 = 175.000\n175.000 + 25.000 = 200.000\n200.000 + 25.000 = 225.000',
            audio: 'Kuralı bulunca diziyi istediğimiz kadar devam ettirebiliriz.',
            example: {
              question: '200.000, 180.000, 160.000, ? Sonraki ne?',
              answer: '140.000',
              explanation: 'Kural: -20.000, 160.000 - 20.000 = 140.000'
            }
          },
          {
            title: 'Günlük Hayat Örnekleri',
            content: 'Ritmik sayma günlük hayatta çok kullanılır.',
            visual: '🌍 Günlük Kullanım:\n\n💰 Para sayma: 1.000, 2.000, 3.000...\n📅 Yıl: 2020, 2021, 2022, 2023...\n🏃 Koşu: 100m, 200m, 300m...\n⏰ Dakika: 0, 5, 10, 15, 20...',
            audio: 'Para sayma, zaman ölçme gibi işlerde ritmik sayma kullanırız.',
            example: {
              question: '10.000 TL\'lik banknotları sayarken: 10.000, 20.000, ?, ?',
              answer: '30.000, 40.000',
              explanation: '10.000\'er ileriye sayma'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '5.000\'er ileriye saydığımızda 125.000\'den sonra gelen sayı?',
            options: ['126.000', '130.000', '135.000', '125.500'],
            correctAnswer: '130.000',
            explanation: '125.000 + 5.000 = 130.000'
          },
          {
            type: 'fill-blank',
            question: '200.000, 190.000, 180.000, ___',
            correctAnswer: '170.000',
            explanation: '10.000\'er geriye: 180.000 - 10.000 = 170.000'
          },
          {
            type: 'multiple-choice',
            question: '100.000, 150.000, 200.000 dizisinin kuralı nedir?',
            options: ['10.000\'er', '25.000\'er', '50.000\'er', '100.000\'er'],
            correctAnswer: '50.000\'er',
            explanation: '150.000 - 100.000 = 50.000'
          },
          {
            type: 'fill-blank',
            question: '500.000\'den 25.000\'er geriye 3. sayı: ___',
            correctAnswer: '450.000',
            explanation: '500.000 → 475.000 → 450.000'
          },
          {
            type: 'multiple-choice',
            question: '80.000\'den başlayıp 8.000\'er ileri saydığımızda hangi sayıya ulaşamayız?',
            options: ['88.000', '96.000', '100.000', '104.000'],
            correctAnswer: '100.000',
            explanation: '80, 88, 96, 104... 100 atlanan sayılar arasında değil'
          },
          {
            type: 'fill-blank',
            question: '750.000, 700.000, 650.000, ___, ___',
            correctAnswer: '600.000, 550.000',
            explanation: '50.000\'er geriye sayılıyor'
          },
          {
            type: 'multiple-choice',
            question: '10.000\'er saydığımızda 340.000\'den 400.000\'e kaç adım?',
            options: ['4', '5', '6', '7'],
            correctAnswer: '6',
            explanation: '340→350→360→370→380→390→400 (6 adım)'
          },
          {
            type: 'fill-blank',
            question: '250.000\'den 1.000\'er geri saydığımızda 5. sayı: ___',
            correctAnswer: '246.000',
            explanation: '250→249→248→247→246 (bin)'
          },
          {
            type: 'multiple-choice',
            question: '?, 325.000, 350.000, 375.000 dizisinde ilk sayı ne?',
            options: ['300.000', '305.000', '310.000', '315.000'],
            correctAnswer: '300.000',
            explanation: 'Kural: +25.000, 325.000 - 25.000 = 300.000'
          },
          {
            type: 'fill-blank',
            question: '100.000\'den 100.000\'er ileri saydığımızda 6. sayı: ___',
            correctAnswer: '600.000',
            explanation: '100→200→300→400→500→600 (bin)'
          }
        ]
      }
    },
    // Konu 5: Örüntülerde Değişimi Genelleme
    {
      id: 'grade4-tema1-konu5',
      title: 'Örüntülerde Değişimi Genelleme',
      description: 'Sayı ve şekil örüntülerindeki değişimi bulup genelliyoruz',
      emoji: '🔄',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Örüntü', 'Desen', 'Kural', 'Genelleme', 'Artan', 'Azalan'],
      content: {
        introduction: 'Merhaba desen avcıları! Bugün örüntülerin sırrını çözeceğiz. Sayılarda ve şekillerde gizli desenler var - onları bulacağız! 🔄🔍',
        motivationQuote: 'Örüntü görmek, matematiğin gözleriyle bakmaktır! 👀',
        funFacts: [
          '🐚 Deniz kabuklarında Fibonacci örüntüsü var!',
          '🌻 Ayçiçeği tohumları spiral örüntü oluşturur!',
          '🎨 Sanat eserlerinde simetri ve örüntüler kullanılır!'
        ],
        steps: [
          {
            title: 'Örüntü Nedir?',
            content: 'Örüntü, belirli bir kurala göre tekrar eden desen veya düzendir.',
            visual: '🔄 Örüntü Örnekleri:\n\nSayı: 2, 4, 6, 8, 10... (+2)\nŞekil: 🔵🔴🔵🔴🔵🔴...\nHarf: A, B, A, B, A, B...\n\n🔑 Kural bulunca devamı tahmin edilir!',
            audio: 'Örüntü, tekrar eden bir düzen veya kuraldır.',
            example: {
              question: '1, 4, 7, 10, 13... örüntüsünün kuralı nedir?',
              answer: '+3',
              explanation: 'Her adımda 3 ekleniyor'
            }
          },
          {
            title: 'Artan Örüntüler',
            content: 'Sayılar büyüyerek devam eden örüntülerdir.',
            visual: '📈 Artan Örüntü:\n\n10.000, 15.000, 20.000, 25.000...\n    +5.000  +5.000  +5.000\n\n5.000, 10.000, 20.000, 40.000...\n    ×2      ×2      ×2\n\nSayılar büyüyor! ↗️',
            audio: 'Artan örüntülerde sayılar giderek büyür.',
            example: {
              question: '1.000, 3.000, 5.000, 7.000... sonraki?',
              answer: '9.000',
              explanation: '+2.000 kuralı, 7.000 + 2.000 = 9.000'
            }
          },
          {
            title: 'Azalan Örüntüler',
            content: 'Sayılar küçülerek devam eden örüntülerdir.',
            visual: '📉 Azalan Örüntü:\n\n100.000, 90.000, 80.000, 70.000...\n     -10.000  -10.000  -10.000\n\n64.000, 32.000, 16.000, 8.000...\n      ÷2       ÷2      ÷2\n\nSayılar küçülüyor! ↘️',
            audio: 'Azalan örüntülerde sayılar giderek küçülür.',
            example: {
              question: '50.000, 45.000, 40.000... sonraki?',
              answer: '35.000',
              explanation: '-5.000 kuralı'
            }
          },
          {
            title: 'Şekil Örüntüleri',
            content: 'Şekiller de örüntü oluşturabilir.',
            visual: '🔷 Şekil Örüntüsü:\n\n⭐ → ⭐⭐ → ⭐⭐⭐ → ⭐⭐⭐⭐\n1    2      3       4\n\nKural: Her adımda 1 yıldız ekle\n\n🔴🔵 → 🔴🔵🔴🔵 → 🔴🔵🔴🔵🔴🔵\n 2        4           6\n\nKural: Her adımda 2 şekil ekle',
            audio: 'Şekil örüntülerinde de sayı kuralları geçerlidir.',
            example: {
              question: '▲, ▲▲, ▲▲▲, ... 5. adımda kaç üçgen?',
              answer: '5 üçgen',
              explanation: 'Her adımda 1 üçgen ekleniyor'
            }
          },
          {
            title: 'Kuralı Genelleme',
            content: 'Örüntünün kuralını bulup genel bir formül yazabiliriz.',
            visual: '📝 Genelleme:\n\nÖrüntü: 5, 10, 15, 20...\n\nKural: "5 × adım sayısı"\n\n1. adım: 5 × 1 = 5\n2. adım: 5 × 2 = 10\n3. adım: 5 × 3 = 15\n10. adım: 5 × 10 = 50',
            audio: 'Kuralı genellemek, herhangi bir adımı bulmamızı sağlar.',
            example: {
              question: '3, 6, 9, 12... dizisinde 100. sayı kaçtır?',
              answer: '300',
              explanation: 'Kural: 3 × adım, 3 × 100 = 300'
            }
          },
          {
            title: 'Örüntü Oluşturma',
            content: 'Kendimiz de örüntüler oluşturabiliriz.',
            visual: '✏️ Örüntü Oluştur:\n\nKural: +7\nBaşlangıç: 3\n→ 3, 10, 17, 24, 31...\n\nKural: ×2\nBaşlangıç: 5\n→ 5, 10, 20, 40, 80...',
            audio: 'Bir kural ve başlangıç değeri ile örüntü oluşturabiliriz.',
            example: {
              question: 'Kural: +1.000, Başlangıç: 2.000. İlk 4 sayıyı yazın.',
              answer: '2.000, 3.000, 4.000, 5.000',
              explanation: 'Her adımda 1.000 ekleniyor'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: '5.000, 10.000, 15.000, 20.000 örüntüsünün kuralı nedir?',
            options: ['+500', '+5.000', '×2', '+1.000'],
            correctAnswer: '+5.000',
            explanation: '10.000 - 5.000 = 5.000'
          },
          {
            type: 'fill-blank',
            question: '100.000, 80.000, 60.000, ___',
            correctAnswer: '40.000',
            explanation: '-20.000 kuralı'
          },
          {
            type: 'multiple-choice',
            question: '2, 4, 8, 16, 32 örüntüsünün kuralı?',
            options: ['+2', '+4', '×2', '×4'],
            correctAnswer: '×2',
            explanation: 'Her sayı öncekinin 2 katı'
          },
          {
            type: 'fill-blank',
            question: '1.000, 4.000, 7.000, 10.000, ___, ___',
            correctAnswer: '13.000, 16.000',
            explanation: '+3.000 kuralı'
          },
          {
            type: 'multiple-choice',
            question: '⭐, ⭐⭐, ⭐⭐⭐⭐, ... 4. adımda kaç yıldız?',
            options: ['4', '8', '10', '16'],
            correctAnswer: '8',
            explanation: 'Kural: ×2 (1, 2, 4, 8)'
          },
          {
            type: 'fill-blank',
            question: '64.000, 32.000, 16.000, ___',
            correctAnswer: '8.000',
            explanation: '÷2 kuralı'
          },
          {
            type: 'multiple-choice',
            question: '10, 15, 20, 25... dizisinde 20. sayı?',
            options: ['100', '105', '110', '95'],
            correctAnswer: '105',
            explanation: 'Kural: 10 + 5×(n-1), 10 + 5×19 = 105'
          },
          {
            type: 'fill-blank',
            question: '2.000, 6.000, 18.000, ___ (×3 kuralı)',
            correctAnswer: '54.000',
            explanation: '18.000 × 3 = 54.000'
          },
          {
            type: 'multiple-choice',
            question: 'Hangi örüntü azalıyor?',
            options: ['3, 6, 9, 12', '100, 80, 60, 40', '1, 2, 4, 8', '5, 10, 15, 20'],
            correctAnswer: '100, 80, 60, 40',
            explanation: 'Sadece bu dizide sayılar küçülüyor'
          },
          {
            type: 'fill-blank',
            question: 'Kural: ×10, Başlangıç: 5. İlk 4 sayı: 5, ___, ___, ___',
            correctAnswer: '50, 500, 5.000',
            explanation: '5 × 10 = 50, 50 × 10 = 500, 500 × 10 = 5.000'
          }
        ]
      }
    }
  ]
};
