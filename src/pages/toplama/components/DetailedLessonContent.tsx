import EnhancedLessonContent from '../../../components/lesson/EnhancedLessonContent';

interface DetailedLessonContentProps {
  lesson: any;
  onComplete: () => void;
  onClose: () => void;
}

const getLessonContent = (level: number) => {
  switch (level) {
    case 1:
      return {
        title: '1 Basamaklı Toplama',
        motivationQuote: 'Küçük adımlar, büyük başarılar getirir! Her hesap seni bir adım ileriye taşır!',
        introduction: 'Merhaba genç matematikçi! Tek basamaklı sayıları toplamak çok kolay ve eğlenceli! Parmaklarını kullanarak, resimlerle ve oyunlarla birlikte öğreneceğiz. Hazır mısın? Hadi başlayalım!',
        steps: [
          {
            title: 'Toplama Nedir?',
            content: 'Toplama, iki veya daha fazla sayıyı birleştirerek yeni bir sayı bulmaktır. Düşün ki sepetinde elmalar var ve annen sana daha fazla elma veriyor. İşte toplama tam da bu! Elmaları birleştiriyorsun!',
            visual: '🍎🍎🍎 + 🍎🍎 = 🍎🍎🍎🍎🍎\n\n3 elma + 2 elma = 5 elma',
            explanation: 'Toplama işleminde "+" işareti kullanırız. Bu işaret "birleştir" veya "ekle" anlamına gelir. "=" işareti ise "eşittir" yani "sonuç" demektir.',
            audio: 'Toplama işlemi, sayıları birleştirmek demektir. Üç elma artı iki elma eşittir beş elma! Toplama işleminde artı işareti kullanırız.'
          },
          {
            title: 'Parmaklarla Toplama',
            content: 'En kolay toplama yöntemi parmaklarını kullanmaktır! Sol elinde bir sayı kadar parmak aç, sağ elinde diğer sayı kadar parmak aç. Sonra hepsini birlikte say!',
            visual: '✋ Sol el: 3 parmak\n🤚 Sağ el: 2 parmak\n\n👆1 👆2 👆3 👆4 👆5\n\nToplam: 5 parmak!',
            explanation: '3 + 2 için önce sol elinde 3 parmak aç, sonra sağ elinde 2 parmak aç. Şimdi hepsini baştan say: 1, 2, 3, 4, 5! İşte cevabın: 5!',
            audio: 'Parmaklarınızı kullanarak toplama yapabilirsiniz. Sol elinizde üç parmak, sağ elinizde iki parmak açın. Şimdi hepsini sayın: bir, iki, üç, dört, beş! Cevap beş!'
          },
          {
            title: 'Basit Toplama Örnekleri',
            content: 'Şimdi birlikte basit örnekler çözelim! Her örnekte nesneleri sayarak sonucu bulacağız.',
            examples: [
              { question: '2 + 3 = ?', answer: '5', explanation: '2 top ile 3 topu birleştirirsek 5 top olur! Sayalım: 1, 2 ve 3, 4, 5!', visual: '⚽⚽ + ⚽⚽⚽ = ⚽⚽⚽⚽⚽' },
              { question: '4 + 1 = ?', answer: '5', explanation: '4 yıldız ile 1 yıldızı birleştirirsek 5 yıldız olur!', visual: '⭐⭐⭐⭐ + ⭐ = ⭐⭐⭐⭐⭐' },
              { question: '3 + 4 = ?', answer: '7', explanation: '3 kalp ile 4 kalbi birleştirirsek 7 kalp olur! Parmaklarınla da kontrol et!', visual: '❤️❤️❤️ + ❤️❤️❤️❤️ = 7 kalp' },
              { question: '5 + 2 = ?', answer: '7', explanation: '5 çiçek ile 2 çiçeği birleştirirsek 7 çiçek olur!', visual: '🌸🌸🌸🌸🌸 + 🌸🌸 = 7 çiçek' },
              { question: '1 + 8 = ?', answer: '9', explanation: '1 balon ile 8 balonu birleştirirsek 9 balon olur!', visual: '🎈 + 🎈🎈🎈🎈🎈🎈🎈🎈 = 9 balon' }
            ],
            audio: 'Şimdi birlikte örnekler çözelim. İki artı üç eşittir beş. Dört artı bir eşittir beş. Üç artı dört eşittir yedi.'
          },
          {
            title: 'Sayı Doğrusu ile Toplama',
            content: 'Sayı doğrusu, toplama yapmak için harika bir araçtır! İlk sayıdan başla ve ikinci sayı kadar ileri zıpla!',
            visual: '0---1---2---3---4---5---6---7---8---9---10\n\n3 + 4 için:\n• 3\'ten başla\n• 4 adım ileri zıpla: 4, 5, 6, 7\n• Cevap: 7',
            explanation: 'Sayı doğrusunda 3 + 4 yapmak için 3\'ün üzerinde dur. Sonra 4 kere ileri zıpla: 4\'e, 5\'e, 6\'ya, 7\'ye. Vardığın yer cevaptır: 7!',
            audio: 'Sayı doğrusunda toplama yapmak için ilk sayının üzerinde dur. Sonra ikinci sayı kadar ileri zıpla. Vardığın yer cevabın olacak!'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Toplama işlemini her gün kullanırız! Evde, okulda, parkta... Her yerde toplama var!',
            examples: [
              { scenario: '🍪 Kurabiye Zamanı', question: 'Sabah 3 kurabiye yedin, öğleden sonra 4 kurabiye daha yedin. Toplam kaç kurabiye yedin?', answer: '7', explanation: '3 + 4 = 7 kurabiye! Vay be, çok kurabiye yemişsin!' },
              { scenario: '🎮 Oyun Puanı', question: 'İlk turda 5 puan, ikinci turda 3 puan kazandın. Toplam kaç puan kazandın?', answer: '8', explanation: '5 + 3 = 8 puan! Harika bir skor!' },
              { scenario: '📚 Kitap Okuma', question: 'Dün 2 sayfa, bugün 6 sayfa okudun. Toplam kaç sayfa okudun?', answer: '8', explanation: '2 + 6 = 8 sayfa! Aferin, okumaya devam!' },
              { scenario: '🎈 Doğum Günü', question: 'Partide 4 kırmızı, 5 mavi balon var. Toplam kaç balon var?', answer: '9', explanation: '4 + 5 = 9 balon! Ne renkli bir parti!' }
            ],
            audio: 'Toplama işlemini günlük hayatta sürekli kullanırız. Kurabiye sayarken, oyun oynarken, kitap okurken, her yerde toplama var!'
          },
          {
            title: 'Sıfır ve Bir ile Toplama',
            content: 'Sıfır ve bir ile toplamak çok özeldir! Bu kuralları öğrenince süper hızlı hesap yapabilirsin!',
            examples: [
              { question: '5 + 0 = ?', answer: '5', explanation: 'Bir sayıya 0 eklediğimizde sayı değişmez! 5 yıldıza 0 yıldız eklersek yine 5 yıldız olur!', visual: '⭐⭐⭐⭐⭐ + (hiçbir şey) = ⭐⭐⭐⭐⭐' },
              { question: '0 + 7 = ?', answer: '7', explanation: '0\'a herhangi bir sayı eklersek o sayı olur! Çünkü hiçbir şeye 7 eklersen 7 olur!', visual: '(hiçbir şey) + ❤️❤️❤️❤️❤️❤️❤️ = 7 kalp' },
              { question: '8 + 1 = ?', answer: '9', explanation: 'Bir sayıya 1 eklediğimizde bir sonraki sayıyı buluruz! 8\'in bir sonrası 9\'dur!', visual: '8 → 9 (bir adım ileri!)' },
              { question: '1 + 6 = ?', answer: '7', explanation: '6\'ya 1 eklersek 7 olur! Çok kolay!', visual: '6 + 1 = 7' }
            ],
            audio: 'Bir sayıya sıfır eklediğimizde sayı değişmez. Beş artı sıfır eşittir beş. Bir sayıya bir eklediğimizde bir sonraki sayıyı buluruz!'
          },
          {
            title: 'Değişme Özelliği',
            content: 'Toplamada sıra önemli değildir! 3 + 5 ile 5 + 3 aynı sonucu verir. Bu çok işimize yarar!',
            visual: '3 + 5 = 8\n5 + 3 = 8\n\nİkisi de aynı! ✓',
            explanation: 'Bu özellik sayesinde bazen hesabı daha kolay yapabiliriz. Büyük sayıdan başlamak genellikle daha kolaydır!',
            audio: 'Toplamada sayıların yeri değişince sonuç değişmez. Üç artı beş de sekiz, beş artı üç de sekiz!'
          }
        ],
        practiceQuestions: [
          { question: '3 + 2 = ?', answer: '5', type: 'fill' },
          { question: '1 + 4 = ?', answer: '5', type: 'fill' },
          { question: '5 + 3 = ?', answer: '8', type: 'fill' },
          { question: '2 + 6 = ?', answer: '8', type: 'fill' },
          { question: '4 + 4 = ?', answer: '8', type: 'fill' },
          { question: '7 + 2 = ?', answer: '9', type: 'fill' },
          { question: '3 + 5 = ?', answer: '8', type: 'fill' },
          { question: '6 + 1 = ?', answer: '7', type: 'fill' },
          { question: '2 + 2 = ?', answer: '4', type: 'fill' },
          { question: '8 + 1 = ?', answer: '9', type: 'fill' }
        ]
      };
    case 2:
      return {
        title: '2 Basamaklı Toplama',
        motivationQuote: 'Her adım seni daha güçlü yapıyor! Büyük sayılar da senin için çok kolay!',
        introduction: 'Harika! Artık tek basamaklı sayıları çok iyi topluyorsun. Şimdi iki basamaklı sayılarla toplama öğreneceğiz. Onlar ve birler basamağını ayrı ayrı işleyeceğiz. Çok eğlenceli olacak!',
        steps: [
          {
            title: 'İki Basamaklı Sayıları Tanıyalım',
            content: 'İki basamaklı sayılar 10 ile 99 arasındaki sayılardır. Her iki basamaklı sayı "onlar" ve "birler" basamağından oluşur.',
            visual: '23 sayısını inceleyelim:\n\n  2  |  3\n onlar | birler\n   ↓       ↓\n 20   +   3  = 23\n\n45 = 40 + 5 (4 onluk + 5 birlik)\n78 = 70 + 8 (7 onluk + 8 birlik)',
            explanation: 'Onlar basamağındaki rakam, kaç tane 10 olduğunu gösterir. Birler basamağındaki rakam ise kaç tane 1 olduğunu gösterir. 23 = 2 tane 10 + 3 tane 1',
            audio: 'İki basamaklı sayılar onlar ve birler basamağından oluşur. Yirmi üç sayısı iki onluk ve üç birlikten oluşur. Yani yirmi artı üç.'
          },
          {
            title: 'Eldesiz Toplama',
            content: 'Birler basamağı toplamı 10\'dan küçükse, elde olmaz. Bu en kolay toplama türüdür!',
            examples: [
              {
                question: '23 + 14 = ?',
                answer: '37',
                steps: [
                  'Birler basamağı: 3 + 4 = 7',
                  'Onlar basamağı: 2 + 1 = 3',
                  'Sonuç: 37'
                ],
                visual: '  23\n+ 14\n----\n  37',
                explanation: 'Önce birleri topla: 3 + 4 = 7. Sonra onları topla: 2 + 1 = 3. Cevap: 37!'
              },
              {
                question: '52 + 31 = ?',
                answer: '83',
                steps: [
                  'Birler basamağı: 2 + 1 = 3',
                  'Onlar basamağı: 5 + 3 = 8',
                  'Sonuç: 83'
                ],
                visual: '  52\n+ 31\n----\n  83',
                explanation: 'Birler: 2 + 1 = 3. Onlar: 5 + 3 = 8. Cevap: 83!'
              },
              {
                question: '45 + 32 = ?',
                answer: '77',
                steps: [
                  'Birler basamağı: 5 + 2 = 7',
                  'Onlar basamağı: 4 + 3 = 7',
                  'Sonuç: 77'
                ],
                visual: '  45\n+ 32\n----\n  77',
                explanation: 'Birler: 5 + 2 = 7. Onlar: 4 + 3 = 7. Cevap: 77! İlginç, iki basamak da 7!'
              }
            ],
            audio: 'Eldesiz toplamada önce birler basamağını, sonra onlar basamağını topluyoruz. Çok basit!'
          },
          {
            title: 'Eldeli Toplama - Elde Nedir?',
            content: 'Birler basamağı toplamı 10 veya daha büyükse, 10\'luğu onlar basamağına taşırız. Buna "elde" denir.',
            visual: '27 + 15 = ?\n\nBirler: 7 + 5 = 12\n• 12\'nin birler basamağı (2) → birler hanesine\n• 12\'nin onlar basamağı (1) → elde olarak onlara\n\n  ¹\n  27\n+ 15\n----\n  42',
            explanation: '7 + 5 = 12 olduğunda, 2\'yi birler basamağına yazarız, 1\'i elde olarak onlar basamağına ekleriz. Sonra onları toplarken eldeyi de ekleriz: 2 + 1 + 1(elde) = 4',
            audio: 'Eldeli toplamada, birler toplamı on veya daha büyükse, onluğu onlar basamağına taşırız. Buna elde diyoruz.'
          },
          {
            title: 'Eldeli Toplama Örnekleri',
            content: 'Şimdi eldeli toplama örnekleri çözelim. Her adımı dikkatli takip et!',
            examples: [
              {
                question: '27 + 15 = ?',
                answer: '42',
                steps: [
                  'Birler: 7 + 5 = 12 (2 yaz, 1 elde)',
                  'Onlar: 2 + 1 + 1(elde) = 4',
                  'Sonuç: 42'
                ],
                visual: '  ¹\n  27\n+ 15\n----\n  42',
                explanation: 'Birler: 7 + 5 = 12. 2\'yi yazdık, 1\'i elde ettik. Onlar: 2 + 1 + 1 = 4. Cevap: 42!'
              },
              {
                question: '38 + 24 = ?',
                answer: '62',
                steps: [
                  'Birler: 8 + 4 = 12 (2 yaz, 1 elde)',
                  'Onlar: 3 + 2 + 1(elde) = 6',
                  'Sonuç: 62'
                ],
                visual: '  ¹\n  38\n+ 24\n----\n  62',
                explanation: 'Birler: 8 + 4 = 12. 2\'yi yazdık, 1\'i elde ettik. Onlar: 3 + 2 + 1 = 6. Cevap: 62!'
              },
              {
                question: '56 + 29 = ?',
                answer: '85',
                steps: [
                  'Birler: 6 + 9 = 15 (5 yaz, 1 elde)',
                  'Onlar: 5 + 2 + 1(elde) = 8',
                  'Sonuç: 85'
                ],
                visual: '  ¹\n  56\n+ 29\n----\n  85',
                explanation: 'Birler: 6 + 9 = 15. 5\'i yazdık, 1\'i elde ettik. Onlar: 5 + 2 + 1 = 8. Cevap: 85!'
              }
            ],
            audio: 'Eldeli toplama örnekleri çözelim. Yirmi yedi artı on beş için, birler yedi artı beş on iki. İkiyi yazıyoruz, biri elde ediyoruz.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'İki basamaklı sayılarla toplama günlük hayatta çok kullanılır! Alışverişte, puanlarda, sayfalarda...',
            examples: [
              { scenario: '💰 Alışveriş', question: 'Bir defter 25 TL, bir kalem kutusu 18 TL. Toplam kaç TL ödeyeceksin?', answer: '43', explanation: '25 + 18 = 43 TL! Birler: 5+8=13 (1 elde). Onlar: 2+1+1=4.' },
              { scenario: '📖 Sayfa Sayma', question: 'Dün 34 sayfa, bugün 28 sayfa okudun. Toplam kaç sayfa okudun?', answer: '62', explanation: '34 + 28 = 62 sayfa! Harika bir okuyucusun!' },
              { scenario: '🎮 Oyun Puanı', question: 'İlk oyunda 47 puan, ikinci oyunda 35 puan kazandın. Toplam kaç puan?', answer: '82', explanation: '47 + 35 = 82 puan! Süper skor!' },
              { scenario: '🏃 Adım Sayısı', question: 'Sabah 56 adım, öğleden sonra 38 adım attın. Toplam kaç adım?', answer: '94', explanation: '56 + 38 = 94 adım! Çok aktifsin!' }
            ],
            audio: 'İki basamaklı sayılarla toplama işlemini alışverişte, kitap okurken, oyun oynarken, spor yaparken kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '23 + 14 = ?', answer: '37', type: 'fill' },
          { question: '45 + 32 = ?', answer: '77', type: 'fill' },
          { question: '27 + 18 = ?', answer: '45', type: 'fill' },
          { question: '56 + 29 = ?', answer: '85', type: 'fill' },
          { question: '38 + 41 = ?', answer: '79', type: 'fill' },
          { question: '64 + 25 = ?', answer: '89', type: 'fill' },
          { question: '19 + 37 = ?', answer: '56', type: 'fill' },
          { question: '72 + 16 = ?', answer: '88', type: 'fill' },
          { question: '43 + 54 = ?', answer: '97', type: 'fill' },
          { question: '81 + 15 = ?', answer: '96', type: 'fill' }
        ]
      };
    case 3:
      return {
        title: '3 Basamaklı Toplama',
        motivationQuote: 'Büyük sayılar da senin için çok kolay! Sen bir matematik şampiyonusun!',
        introduction: 'Vay canına! Artık iki basamaklı sayıları ustaca topluyorsun. Şimdi üç basamaklı sayılarla çalışacağız. Yüzler, onlar ve birler basamağını ayrı ayrı işleyeceğiz. Endişelenme, mantık aynı!',
        steps: [
          {
            title: 'Üç Basamaklı Sayıları Tanıyalım',
            content: 'Üç basamaklı sayılar 100 ile 999 arasındaki sayılardır. Yüzler, onlar ve birler basamağından oluşur.',
            visual: '456 sayısını inceleyelim:\n\n  4   |   5   |   6\nyüzler | onlar | birler\n   ↓        ↓       ↓\n 400   +  50   +   6  = 456\n\n789 = 700 + 80 + 9\n234 = 200 + 30 + 4',
            explanation: 'Yüzler basamağı kaç tane 100 olduğunu, onlar basamağı kaç tane 10 olduğunu, birler basamağı kaç tane 1 olduğunu gösterir.',
            audio: 'Üç basamaklı sayılar yüzler, onlar ve birler basamağından oluşur. Dört yüz elli altı sayısı dört yüzlük, beş onluk ve altı birlikten oluşur.'
          },
          {
            title: 'Adım Adım Toplama',
            content: 'Üç basamaklı sayıları toplarken sağdan sola doğru, yani birler → onlar → yüzler sırasıyla ilerleriz.',
            examples: [
              {
                question: '234 + 152 = ?',
                answer: '386',
                steps: [
                  '1. Birler: 4 + 2 = 6',
                  '2. Onlar: 3 + 5 = 8',
                  '3. Yüzler: 2 + 1 = 3',
                  'Sonuç: 386'
                ],
                visual: '  234\n+ 152\n-----\n  386',
                explanation: 'Her basamağı ayrı ayrı topladık. Elde yok çünkü hiçbir basamak toplamı 10\'a ulaşmadı.'
              },
              {
                question: '421 + 367 = ?',
                answer: '788',
                steps: [
                  '1. Birler: 1 + 7 = 8',
                  '2. Onlar: 2 + 6 = 8',
                  '3. Yüzler: 4 + 3 = 7',
                  'Sonuç: 788'
                ],
                visual: '  421\n+ 367\n-----\n  788',
                explanation: 'Bu örnekte de elde yok. Her basamak toplamı 10\'dan küçük.'
              }
            ],
            audio: 'Üç basamaklı sayıları toplarken sağdan sola doğru, birler, onlar ve yüzler basamağını sırayla topluyoruz.'
          },
          {
            title: 'Tek Elde ile Toplama',
            content: 'Bazen sadece bir basamaktan elde olur. Hangi basamaktan elde olursa olsun, bir sonraki basamağa 1 ekleriz.',
            examples: [
              {
                question: '467 + 328 = ?',
                answer: '795',
                steps: [
                  '1. Birler: 7 + 8 = 15 (5 yaz, 1 elde)',
                  '2. Onlar: 6 + 2 + 1 = 9',
                  '3. Yüzler: 4 + 3 = 7',
                  'Sonuç: 795'
                ],
                visual: '    ¹\n  467\n+ 328\n-----\n  795',
                explanation: 'Birlerden elde var! 7 + 8 = 15, 5\'i yazdık 1\'i elde ettik. Onlar: 6 + 2 + 1 = 9. Yüzler: 4 + 3 = 7.'
              },
              {
                question: '356 + 271 = ?',
                answer: '627',
                steps: [
                  '1. Birler: 6 + 1 = 7',
                  '2. Onlar: 5 + 7 = 12 (2 yaz, 1 elde)',
                  '3. Yüzler: 3 + 2 + 1 = 6',
                  'Sonuç: 627'
                ],
                visual: '   ¹\n  356\n+ 271\n-----\n  627',
                explanation: 'Bu sefer onlardan elde var! 5 + 7 = 12. 2\'yi yazdık, 1\'i yüzlere elde ettik.'
              }
            ],
            audio: 'Tek elde ile toplama örneği yapalım. Birler yedi artı sekiz on beş. Beşi yazıyoruz, biri onlara elde ediyoruz.'
          },
          {
            title: 'Çoklu Elde ile Toplama',
            content: 'Bazen birden fazla basamaktan elde olabilir. Endişelenme, her elde aynı şekilde çalışır!',
            examples: [
              {
                question: '589 + 276 = ?',
                answer: '865',
                steps: [
                  '1. Birler: 9 + 6 = 15 (5 yaz, 1 elde)',
                  '2. Onlar: 8 + 7 + 1 = 16 (6 yaz, 1 elde)',
                  '3. Yüzler: 5 + 2 + 1 = 8',
                  'Sonuç: 865'
                ],
                visual: '   ¹¹\n  589\n+ 276\n-----\n  865',
                explanation: 'İki basamaktan da elde var! Birler: 9+6=15. Onlar: 8+7+1=16. Yüzler: 5+2+1=8.'
              },
              {
                question: '678 + 195 = ?',
                answer: '873',
                steps: [
                  '1. Birler: 8 + 5 = 13 (3 yaz, 1 elde)',
                  '2. Onlar: 7 + 9 + 1 = 17 (7 yaz, 1 elde)',
                  '3. Yüzler: 6 + 1 + 1 = 8',
                  'Sonuç: 873'
                ],
                visual: '   ¹¹\n  678\n+ 195\n-----\n  873',
                explanation: 'Yine iki elde! Adım adım ilerleyince çok kolay!'
              }
            ],
            audio: 'Çoklu elde ile toplama da çok kolay. Her elde işlemini sırayla yapıyoruz. Sakin ol ve adım adım ilerle!'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Üç basamaklı sayılarla toplama gerçek hayatta sıkça karşımıza çıkar!',
            examples: [
              { scenario: '🏫 Okul Mevcudu', question: 'Bir okulda 345 kız, 278 erkek öğrenci var. Toplam kaç öğrenci?', answer: '623', explanation: '345 + 278 = 623 öğrenci! Kalabalık bir okul!' },
              { scenario: '📚 Kütüphane', question: 'Kütüphanede 456 hikaye kitabı, 387 bilim kitabı var. Toplam kaç kitap?', answer: '843', explanation: '456 + 387 = 843 kitap! Ne zengin bir kütüphane!' },
              { scenario: '🎪 Etkinlik', question: 'Cumartesi 512 kişi, pazar 398 kişi katıldı. Toplam kaç kişi?', answer: '910', explanation: '512 + 398 = 910 kişi! Büyük bir etkinlik!' },
              { scenario: '🚗 Yolculuk', question: 'İlk gün 234 km, ikinci gün 189 km gittin. Toplam kaç km?', answer: '423', explanation: '234 + 189 = 423 km! Uzun bir yolculuk!' }
            ],
            audio: 'Üç basamaklı sayılarla toplama işlemini okullarda, kütüphanelerde, etkinliklerde, yolculuklarda kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '234 + 152 = ?', answer: '386', type: 'fill' },
          { question: '456 + 321 = ?', answer: '777', type: 'fill' },
          { question: '567 + 289 = ?', answer: '856', type: 'fill' },
          { question: '678 + 195 = ?', answer: '873', type: 'fill' },
          { question: '345 + 478 = ?', answer: '823', type: 'fill' },
          { question: '789 + 156 = ?', answer: '945', type: 'fill' },
          { question: '234 + 567 = ?', answer: '801', type: 'fill' },
          { question: '456 + 389 = ?', answer: '845', type: 'fill' },
          { question: '678 + 234 = ?', answer: '912', type: 'fill' },
          { question: '512 + 398 = ?', answer: '910', type: 'fill' }
        ]
      };
    case 4:
      return {
        title: '4 Basamaklı Toplama',
        motivationQuote: 'Sen bir matematik yıldızısın! Binlerle oynamak senin için çocuk oyuncağı!',
        introduction: 'Muhteşem! Artık üç basamaklı sayıları da harika topluyorsun. Şimdi dört basamaklı sayılarla (binlerle) çalışacağız. Mantık aynı, sadece bir basamak daha fazla. Sen hazırsın!',
        steps: [
          {
            title: 'Dört Basamaklı Sayıları Tanıyalım',
            content: 'Dört basamaklı sayılar 1000 ile 9999 arasındaki sayılardır. Binler, yüzler, onlar ve birler basamağından oluşur.',
            visual: '5678 sayısını inceleyelim:\n\n  5    |   6   |   7   |   8\nbinler | yüzler | onlar | birler\n   ↓        ↓        ↓       ↓\n5000  +  600  +   70  +   8  = 5678\n\n2345 = 2000 + 300 + 40 + 5\n7896 = 7000 + 800 + 90 + 6',
            explanation: 'Binler basamağı kaç tane 1000 olduğunu gösterir. Yüzler kaç tane 100, onlar kaç tane 10, birler kaç tane 1 olduğunu gösterir.',
            audio: 'Dört basamaklı sayılar binler, yüzler, onlar ve birler basamağından oluşur. Beş bin altı yüz yetmiş sekiz sayısı beş binlik, altı yüzlük, yedi onluk ve sekiz birlikten oluşur.'
          },
          {
            title: 'Adım Adım Toplama',
            content: 'Dört basamaklı sayıları toplamak üç basamaklı sayılarla aynı mantıkta! Sadece bir basamak daha var.',
            examples: [
              {
                question: '2345 + 1523 = ?',
                answer: '3868',
                steps: [
                  '1. Birler: 5 + 3 = 8',
                  '2. Onlar: 4 + 2 = 6',
                  '3. Yüzler: 3 + 5 = 8',
                  '4. Binler: 2 + 1 = 3',
                  'Sonuç: 3868'
                ],
                visual: '  2345\n+ 1523\n------\n  3868',
                explanation: 'Her basamağı sırayla topladık. Bu örnekte elde yok!'
              },
              {
                question: '3412 + 2456 = ?',
                answer: '5868',
                steps: [
                  '1. Birler: 2 + 6 = 8',
                  '2. Onlar: 1 + 5 = 6',
                  '3. Yüzler: 4 + 4 = 8',
                  '4. Binler: 3 + 2 = 5',
                  'Sonuç: 5868'
                ],
                visual: '  3412\n+ 2456\n------\n  5868',
                explanation: 'Eldesiz, basit bir toplama. Dört basamaklı olması onu zorlaştırmıyor!'
              }
            ],
            audio: 'Dört basamaklı sayıları toplarken önce birleri, sonra onları, yüzleri ve en son binleri topluyoruz.'
          },
          {
            title: 'Eldeli Büyük Sayı Toplama',
            content: 'Büyük sayılarda da elde aynı şekilde çalışır. Her basamaktan elde olabilir!',
            examples: [
              {
                question: '4567 + 3289 = ?',
                answer: '7856',
                steps: [
                  '1. Birler: 7 + 9 = 16 (6 yaz, 1 elde)',
                  '2. Onlar: 6 + 8 + 1 = 15 (5 yaz, 1 elde)',
                  '3. Yüzler: 5 + 2 + 1 = 8',
                  '4. Binler: 4 + 3 = 7',
                  'Sonuç: 7856'
                ],
                visual: '   ¹¹\n  4567\n+ 3289\n------\n  7856',
                explanation: 'Birlerden ve onlardan elde var. Her eldeyi dikkatli takip ettik!'
              },
              {
                question: '6789 + 2456 = ?',
                answer: '9245',
                steps: [
                  '1. Birler: 9 + 6 = 15 (5 yaz, 1 elde)',
                  '2. Onlar: 8 + 5 + 1 = 14 (4 yaz, 1 elde)',
                  '3. Yüzler: 7 + 4 + 1 = 12 (2 yaz, 1 elde)',
                  '4. Binler: 6 + 2 + 1 = 9',
                  'Sonuç: 9245'
                ],
                visual: '  ¹¹¹\n  6789\n+ 2456\n------\n  9245',
                explanation: 'Üç basamaktan da elde var! Ama sen harikasın, hepsini doğru yaptın!'
              }
            ],
            audio: 'Eldeli büyük sayı toplamada da aynı kurallar geçerli. Her basamağı sırayla işliyoruz.'
          },
          {
            title: 'Beş Basamaklı Sonuçlar',
            content: 'Bazen dört basamaklı iki sayıyı topladığımızda beş basamaklı sonuç çıkabilir. Bu çok normal!',
            examples: [
              {
                question: '7845 + 3678 = ?',
                answer: '11523',
                steps: [
                  '1. Birler: 5 + 8 = 13 (3 yaz, 1 elde)',
                  '2. Onlar: 4 + 7 + 1 = 12 (2 yaz, 1 elde)',
                  '3. Yüzler: 8 + 6 + 1 = 15 (5 yaz, 1 elde)',
                  '4. Binler: 7 + 3 + 1 = 11',
                  'Sonuç: 11523'
                ],
                visual: '  ¹¹¹\n  7845\n+ 3678\n------\n 11523',
                explanation: 'Binler toplamı 11 oldu, bu yüzden sonuç beş basamaklı! 11 bini on bir bin olarak yazarız.'
              },
              {
                question: '8567 + 4893 = ?',
                answer: '13460',
                steps: [
                  '1. Birler: 7 + 3 = 10 (0 yaz, 1 elde)',
                  '2. Onlar: 6 + 9 + 1 = 16 (6 yaz, 1 elde)',
                  '3. Yüzler: 5 + 8 + 1 = 14 (4 yaz, 1 elde)',
                  '4. Binler: 8 + 4 + 1 = 13',
                  'Sonuç: 13460'
                ],
                visual: '  ¹¹¹\n  8567\n+ 4893\n------\n 13460',
                explanation: 'Yine beş basamaklı sonuç! 13 bin dört yüz altmış.'
              }
            ],
            audio: 'Bazen dört basamaklı sayıları topladığımızda beş basamaklı sonuç çıkabilir. Bu çok normal, endişelenme!'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Dört basamaklı sayılarla toplama büyük işlerde kullanılır!',
            examples: [
              { scenario: '🏟️ Stadyum', question: 'Alt katta 4567 kişi, üst katta 3289 kişi var. Toplam kaç kişi?', answer: '7856', explanation: '4567 + 3289 = 7856 kişi! Dolu bir stadyum!' },
              { scenario: '📦 Kargo', question: 'Pazartesi 2345 paket, salı 1876 paket teslim edildi. Toplam kaç paket?', answer: '4221', explanation: '2345 + 1876 = 4221 paket! Yoğun bir hafta!' },
              { scenario: '🎬 Sinema', question: 'Cumartesi 5678 kişi, pazar 4123 kişi filme gitti. Toplam kaç kişi?', answer: '9801', explanation: '5678 + 4123 = 9801 kişi! Popüler bir film!' },
              { scenario: '💰 Birikim', question: 'İlk ay 3456 TL, ikinci ay 2789 TL biriktirdin. Toplam kaç TL?', answer: '6245', explanation: '3456 + 2789 = 6245 TL! Harika bir birikim!' }
            ],
            audio: 'Dört basamaklı sayılarla toplama işlemini stadyumlarda, kargo şirketlerinde, sinema salonlarında, bankada kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '2345 + 1523 = ?', answer: '3868', type: 'fill' },
          { question: '4567 + 3289 = ?', answer: '7856', type: 'fill' },
          { question: '6789 + 2456 = ?', answer: '9245', type: 'fill' },
          { question: '3456 + 2789 = ?', answer: '6245', type: 'fill' },
          { question: '5678 + 1234 = ?', answer: '6912', type: 'fill' },
          { question: '7890 + 1567 = ?', answer: '9457', type: 'fill' },
          { question: '2345 + 6789 = ?', answer: '9134', type: 'fill' },
          { question: '4567 + 4567 = ?', answer: '9134', type: 'fill' },
          { question: '8901 + 1234 = ?', answer: '10135', type: 'fill' },
          { question: '7845 + 3678 = ?', answer: '11523', type: 'fill' }
        ]
      };
    default:
      return null;
  }
};

export default function DetailedLessonContent({ lesson, onComplete, onClose }: DetailedLessonContentProps) {
  return (
    <EnhancedLessonContent
      lesson={lesson}
      getLessonContent={getLessonContent}
      themeColor="purple"
      onComplete={onComplete}
      onClose={onClose}
    />
  );
}
