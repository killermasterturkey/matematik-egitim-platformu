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
        title: '1 Basamaklı Çıkarma',
        motivationQuote: 'Çıkarma işlemi de toplama kadar kolay! Her gün pratik yap, uzman ol!',
        introduction: 'Merhaba genç matematikçi! Çıkarma işlemi, bir şeylerden bir miktar almak demektir. Düşün ki 5 elaman var ve 2 tanesini yiyorsun. Geriye kaç elma kalır? İşte çıkarma bunu hesaplar!',
        steps: [
          {
            title: 'Çıkarma Nedir?',
            content: 'Çıkarma, bir sayıdan başka bir sayıyı eksiltme işlemidir. Elimizdeki şeylerden bir kısmını çıkardığımızda, geriye kaç tane kaldığını buluruz.',
            visual: '🍎🍎🍎🍎🍎 - 🍎🍎 = 🍎🍎🍎\n\n5 elma - 2 elma = 3 elma\n\n5 elmadan 2 elma yedik, 3 elma kaldı!',
            explanation: 'Çıkarma işleminde "-" (eksi) işareti kullanırız. Bu işaret "çıkar" veya "eksilt" anlamına gelir. 5 - 2 = 3 demek, 5\'ten 2 çıkarınca 3 kalır demektir.',
            audio: 'Çıkarma işlemi, bir sayıdan başka bir sayıyı eksiltmek demektir. Beş elma eksi iki elma eşittir üç elma! Çıkarma işleminde eksi işareti kullanırız.'
          },
          {
            title: 'Parmaklarla Çıkarma',
            content: 'Parmaklarınızı kullanarak çıkarma yapmak çok kolay! İlk sayı kadar parmak aç, sonra ikinci sayı kadar parmak kapat. Açık kalan parmakları say!',
            visual: '5 - 2 = ?\n\n✋ 5 parmak aç\n👆👆👆👆👆\n\n2 parmak kapat\n👆👆👆 ✊✊\n\nAçık kalan: 3 parmak!\n\nCevap: 3',
            explanation: '5 - 2 için önce 5 parmağını aç. Sonra 2 parmağını kapat. Kaç parmak açık kaldı? 3 parmak! İşte cevabın: 3!',
            audio: 'Parmaklarınızı kullanarak çıkarma yapabilirsiniz. Beş parmak açın, iki parmak kapatın. Kaç parmak kaldı? Üç parmak! Cevap üç!'
          },
          {
            title: 'Basit Çıkarma Örnekleri',
            content: 'Şimdi birlikte basit örnekler çözelim! Her örnekte nesneleri çıkararak sonucu bulacağız.',
            examples: [
              { question: '5 - 2 = ?', answer: '3', explanation: '5 toptan 2 top çıkarırsak 3 top kalır! Sayalım: 5, 4, 3!', visual: '⚽⚽⚽⚽⚽ - ⚽⚽ = ⚽⚽⚽' },
              { question: '7 - 3 = ?', answer: '4', explanation: '7 yıldızdan 3 yıldız çıkarırsak 4 yıldız kalır!', visual: '⭐⭐⭐⭐⭐⭐⭐ - ⭐⭐⭐ = ⭐⭐⭐⭐' },
              { question: '9 - 4 = ?', answer: '5', explanation: '9 kalpten 4 kalp çıkarırsak 5 kalp kalır!', visual: '❤️❤️❤️❤️❤️❤️❤️❤️❤️ - ❤️❤️❤️❤️ = ❤️❤️❤️❤️❤️' },
              { question: '8 - 3 = ?', answer: '5', explanation: '8 çiçekten 3 çiçek çıkarırsak 5 çiçek kalır!', visual: '🌸🌸🌸🌸🌸🌸🌸🌸 - 🌸🌸🌸 = 🌸🌸🌸🌸🌸' },
              { question: '6 - 1 = ?', answer: '5', explanation: '6 balondan 1 balon çıkarırsak 5 balon kalır!', visual: '🎈🎈🎈🎈🎈🎈 - 🎈 = 🎈🎈🎈🎈🎈' }
            ],
            audio: 'Şimdi birlikte örnekler çözelim. Beş eksi iki eşittir üç. Yedi eksi üç eşittir dört. Dokuz eksi dört eşittir beş.'
          },
          {
            title: 'Sayı Doğrusu ile Çıkarma',
            content: 'Sayı doğrusu, çıkarma yapmak için de harika bir araçtır! İlk sayıdan başla ve ikinci sayı kadar geri zıpla!',
            visual: '0---1---2---3---4---5---6---7---8---9---10\n\n7 - 3 için:\n• 7\'den başla\n• 3 adım geri zıpla: 6, 5, 4\n• Cevap: 4',
            explanation: 'Sayı doğrusunda 7 - 3 yapmak için 7\'nin üzerinde dur. Sonra 3 kere geri zıpla: 6\'ya, 5\'e, 4\'e. Vardığın yer cevaptır: 4!',
            audio: 'Sayı doğrusunda çıkarma yapmak için ilk sayının üzerinde dur. Sonra ikinci sayı kadar geri zıpla. Vardığın yer cevabın olacak!'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Çıkarma işlemini her gün kullanırız! Para harcarken, yemek yerken, oyun oynarken...',
            examples: [
              { scenario: '🍪 Kurabiye Yeme', question: '7 kurabiyeniz var, 3 tanesini yediniz. Kaç kurabiye kaldı?', answer: '4', explanation: '7 - 3 = 4 kurabiye! Daha var, endişelenme!' },
              { scenario: '🎮 Oyun Canı', question: '9 canınız var, 4 can kaybettiniz. Kaç can kaldı?', answer: '5', explanation: '9 - 4 = 5 can! Hâlâ devam edebilirsin!' },
              { scenario: '📚 Kitap Okuma', question: '8 sayfa okuyacaktınız, 5 sayfa okudunuz. Kaç sayfa kaldı?', answer: '3', explanation: '8 - 5 = 3 sayfa! Az kaldı, bitirebilirsin!' },
              { scenario: '🎈 Balon Patlaması', question: '6 balonunuz vardı, 2 tanesi patladı. Kaç balon kaldı?', answer: '4', explanation: '6 - 2 = 4 balon! Yine de güzel!' }
            ],
            audio: 'Çıkarma işlemini günlük hayatta sürekli kullanırız. Kurabiye yerken, oyun oynarken, kitap okurken, her yerde çıkarma var!'
          },
          {
            title: 'Sıfırdan Çıkarma ve Kendinden Çıkarma',
            content: 'Çıkarmada iki özel kural var: Sıfır çıkarma ve kendinden çıkarma. Bu kuralları öğrenince süper hızlı hesap yapabilirsin!',
            examples: [
              { question: '5 - 0 = ?', answer: '5', explanation: 'Bir sayıdan 0 çıkardığımızda sayı değişmez! Çünkü hiçbir şey çıkarmadık!', visual: '⭐⭐⭐⭐⭐ - (hiçbir şey) = ⭐⭐⭐⭐⭐' },
              { question: '7 - 0 = ?', answer: '7', explanation: '7\'den 0 çıkarırsak yine 7 olur!', visual: '7 - 0 = 7 ✓' },
              { question: '5 - 5 = ?', answer: '0', explanation: 'Bir sayıyı kendinden çıkardığımızda sonuç her zaman 0 olur! Hepsini çıkardık!', visual: '⭐⭐⭐⭐⭐ - ⭐⭐⭐⭐⭐ = (hiçbir şey kalmadı) = 0' },
              { question: '9 - 9 = ?', answer: '0', explanation: '9\'dan 9 çıkarırsak hiçbir şey kalmaz, yani 0!', visual: '9 - 9 = 0 ✓' }
            ],
            audio: 'Bir sayıdan sıfır çıkardığımızda sayı değişmez. Beş eksi sıfır eşittir beş. Bir sayıyı kendinden çıkardığımızda sonuç sıfır olur!'
          }
        ],
        practiceQuestions: [
          { question: '5 - 2 = ?', answer: '3', type: 'fill' },
          { question: '7 - 3 = ?', answer: '4', type: 'fill' },
          { question: '9 - 4 = ?', answer: '5', type: 'fill' },
          { question: '8 - 3 = ?', answer: '5', type: 'fill' },
          { question: '6 - 2 = ?', answer: '4', type: 'fill' },
          { question: '9 - 5 = ?', answer: '4', type: 'fill' },
          { question: '7 - 4 = ?', answer: '3', type: 'fill' },
          { question: '8 - 6 = ?', answer: '2', type: 'fill' },
          { question: '9 - 7 = ?', answer: '2', type: 'fill' },
          { question: '6 - 1 = ?', answer: '5', type: 'fill' }
        ]
      };
    case 2:
      return {
        title: '2 Basamaklı Çıkarma',
        motivationQuote: 'İki basamaklı çıkarma da senin için çocuk oyuncağı! Her zorluk seni güçlendirir!',
        introduction: 'Harika! Artık tek basamaklı çıkarmayı ustaca yapıyorsun. Şimdi iki basamaklı sayılarla çıkarma öğreneceğiz. Birler ve onlar basamağını ayrı ayrı işleyeceğiz. Hazır mısın?',
        steps: [
          {
            title: 'Borçsuz (Eldesiz) Çıkarma',
            content: 'Birler basamağındaki üstteki sayı, alttaki sayıdan büyük veya eşitse, borç almaya gerek yok. Çok kolay!',
            visual: '47 - 23 = ?\n\nBirler: 7 - 3 = 4 ✓ (7 > 3, borç yok)\nOnlar: 4 - 2 = 2 ✓\n\nSonuç: 24',
            examples: [
              {
                question: '47 - 23 = ?',
                answer: '24',
                steps: [
                  'Birler: 7 - 3 = 4',
                  'Onlar: 4 - 2 = 2',
                  'Sonuç: 24'
                ],
                visual: '  47\n- 23\n----\n  24',
                explanation: 'Birler: 7 - 3 = 4. Onlar: 4 - 2 = 2. Cevap: 24! Borç almadık çünkü 7 > 3.'
              },
              {
                question: '68 - 34 = ?',
                answer: '34',
                steps: [
                  'Birler: 8 - 4 = 4',
                  'Onlar: 6 - 3 = 3',
                  'Sonuç: 34'
                ],
                visual: '  68\n- 34\n----\n  34',
                explanation: 'Birler: 8 - 4 = 4. Onlar: 6 - 3 = 3. Cevap: 34!'
              },
              {
                question: '89 - 45 = ?',
                answer: '44',
                steps: [
                  'Birler: 9 - 5 = 4',
                  'Onlar: 8 - 4 = 4',
                  'Sonuç: 44'
                ],
                visual: '  89\n- 45\n----\n  44',
                explanation: 'Birler: 9 - 5 = 4. Onlar: 8 - 4 = 4. Cevap: 44!'
              }
            ],
            audio: 'Borçsuz çıkarmada, birler ve onlar basamağını ayrı ayrı çıkarıyoruz. Çok basit!'
          },
          {
            title: 'Borç Nedir? (Onluktan Borç Alma)',
            content: 'Birler basamağındaki üstteki sayı, alttaki sayıdan küçükse, onlar basamağından 1 borç alırız. Bu 1, birler basamağında 10 olarak eklenir!',
            visual: '52 - 27 = ?\n\nBirler: 2 < 7 (Sorun! 2\'den 7 çıkaramayız)\n→ Onlardan 1 borç al\n→ 5 onluk → 4 onluk\n→ 2 birlik + 10 = 12 birlik\n\nŞimdi: 12 - 7 = 5 ✓',
            explanation: '52 - 27 işleminde, birler basamağında 2 var, ama 7 çıkarmamız gerekiyor. 2\'den 7 çıkaramayız! O yüzden onlar basamağından 1 borç alırız. 5 onluk → 4 onluk olur. 2 birlik + 10 = 12 birlik olur. Şimdi 12 - 7 = 5!',
            audio: 'Birler basamağındaki sayı küçükse, onlar basamağından bir borç alırız. Bu bir, birler basamağında on olarak eklenir.'
          },
          {
            title: 'Borçlu Çıkarma Örnekleri',
            content: 'Şimdi borçlu çıkarma örnekleri çözelim. Adım adım takip et!',
            examples: [
              {
                question: '52 - 27 = ?',
                answer: '25',
                steps: [
                  'Birler: 2 < 7, onlardan 1 borç al',
                  '12 - 7 = 5',
                  'Onlar: 4 - 2 = 2 (5-1=4)',
                  'Sonuç: 25'
                ],
                visual: '  4¹²\n  52\n- 27\n----\n  25',
                explanation: '2, 7\'den küçük olduğu için onlardan 1 borç aldık. 12 - 7 = 5. Onlar: 4 - 2 = 2. Cevap: 25!'
              },
              {
                question: '73 - 48 = ?',
                answer: '25',
                steps: [
                  'Birler: 3 < 8, onlardan 1 borç al',
                  '13 - 8 = 5',
                  'Onlar: 6 - 4 = 2 (7-1=6)',
                  'Sonuç: 25'
                ],
                visual: '  6¹³\n  73\n- 48\n----\n  25',
                explanation: '3, 8\'den küçük olduğu için onlardan 1 borç aldık. 13 - 8 = 5. Onlar: 6 - 4 = 2. Cevap: 25!'
              },
              {
                question: '91 - 56 = ?',
                answer: '35',
                steps: [
                  'Birler: 1 < 6, onlardan 1 borç al',
                  '11 - 6 = 5',
                  'Onlar: 8 - 5 = 3 (9-1=8)',
                  'Sonuç: 35'
                ],
                visual: '  8¹¹\n  91\n- 56\n----\n  35',
                explanation: '1, 6\'dan küçük olduğu için onlardan 1 borç aldık. 11 - 6 = 5. Onlar: 8 - 5 = 3. Cevap: 35!'
              }
            ],
            audio: 'Borçlu çıkarmada, birler basamağı küçükse onlar basamağından bir borç alırız. Sonra normal çıkarma yaparız.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'İki basamaklı çıkarma günlük hayatta çok kullanılır! Para, sayfa, puan...',
            examples: [
              { scenario: '💰 Para Harcama', question: '65 TL\'niz var, 28 TL harcadınız. Kaç TL kaldı?', answer: '37', explanation: '65 - 28 = 37 TL! 5 < 8, borç aldık.' },
              { scenario: '📖 Sayfa Okuma', question: '84 sayfalık kitaptan 47 sayfa okudunuz. Kaç sayfa kaldı?', answer: '37', explanation: '84 - 47 = 37 sayfa! Az kaldı!' },
              { scenario: '🎮 Oyun Puanı', question: '92 puanınız vardı, 35 puan kaybettiniz. Kaç puan kaldı?', answer: '57', explanation: '92 - 35 = 57 puan! Hâlâ iyisin!' },
              { scenario: '🏃 Koşu', question: '76 metre koşacaktınız, 39 metre koştunuz. Kaç metre kaldı?', answer: '37', explanation: '76 - 39 = 37 metre! Az kaldı, devam et!' }
            ],
            audio: 'İki basamaklı çıkarma işlemini alışverişte, kitap okurken, oyun oynarken, spor yaparken kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '47 - 23 = ?', answer: '24', type: 'fill' },
          { question: '68 - 34 = ?', answer: '34', type: 'fill' },
          { question: '52 - 27 = ?', answer: '25', type: 'fill' },
          { question: '73 - 48 = ?', answer: '25', type: 'fill' },
          { question: '91 - 56 = ?', answer: '35', type: 'fill' },
          { question: '85 - 39 = ?', answer: '46', type: 'fill' },
          { question: '76 - 28 = ?', answer: '48', type: 'fill' },
          { question: '94 - 67 = ?', answer: '27', type: 'fill' },
          { question: '83 - 45 = ?', answer: '38', type: 'fill' },
          { question: '62 - 38 = ?', answer: '24', type: 'fill' }
        ]
      };
    case 3:
      return {
        title: '3 Basamaklı Çıkarma',
        motivationQuote: 'Büyük sayılar da senin için çok kolay! Sen bir matematik kahramanısın!',
        introduction: 'Harika! İki basamaklı çıkarmayı çok iyi yapıyorsun. Şimdi üç basamaklı sayılarla çalışacağız. Yüzler, onlar ve birler basamağını kullanacağız. Mantık aynı, sen hazırsın!',
        steps: [
          {
            title: 'Borçsuz Üç Basamaklı Çıkarma',
            content: 'Her basamakta üstteki sayı alttakinden büyükse, borç almaya gerek yok.',
            examples: [
              {
                question: '567 - 234 = ?',
                answer: '333',
                steps: [
                  '1. Birler: 7 - 4 = 3',
                  '2. Onlar: 6 - 3 = 3',
                  '3. Yüzler: 5 - 2 = 3',
                  'Sonuç: 333'
                ],
                visual: '  567\n- 234\n-----\n  333',
                explanation: 'Her basamağı sırayla çıkardık. Borç yok, çok kolay!'
              },
              {
                question: '896 - 543 = ?',
                answer: '353',
                steps: [
                  '1. Birler: 6 - 3 = 3',
                  '2. Onlar: 9 - 4 = 5',
                  '3. Yüzler: 8 - 5 = 3',
                  'Sonuç: 353'
                ],
                visual: '  896\n- 543\n-----\n  353',
                explanation: 'Her basamak uyumlu, borç almadık!'
              }
            ],
            audio: 'Borçsuz üç basamaklı çıkarmada her basamağı ayrı ayrı çıkarıyoruz. Çok basit!'
          },
          {
            title: 'Tek Borçlu Çıkarma',
            content: 'Sadece bir basamaktan borç gerekebilir. Hangi basamak olursa olsun, bir sonraki basamaktan 1 alırız.',
            examples: [
              {
                question: '745 - 328 = ?',
                answer: '417',
                steps: [
                  '1. Birler: 5 < 8, onlardan borç al → 15 - 8 = 7',
                  '2. Onlar: 3 - 2 = 1 (4-1=3)',
                  '3. Yüzler: 7 - 3 = 4',
                  'Sonuç: 417'
                ],
                visual: '  7³¹⁵\n  745\n- 328\n-----\n  417',
                explanation: 'Birlerden borç aldık! 15 - 8 = 7. Onlar: 3 - 2 = 1. Yüzler: 7 - 3 = 4.'
              },
              {
                question: '654 - 271 = ?',
                answer: '383',
                steps: [
                  '1. Birler: 4 < 1? Hayır, 4 > 1 → 4 - 1 = 3',
                  '2. Onlar: 5 < 7, yüzlerden borç al → 15 - 7 = 8',
                  '3. Yüzler: 5 - 2 = 3 (6-1=5)',
                  'Sonuç: 383'
                ],
                visual: '  5¹⁵4\n  654\n- 271\n-----\n  383',
                explanation: 'Bu sefer onlardan borç aldık! 15 - 7 = 8. Yüzler: 5 - 2 = 3.'
              }
            ],
            audio: 'Tek borçlu çıkarmada sadece bir basamaktan borç alırız. Borcu aldığımız basamak bir azalır.'
          },
          {
            title: 'Çift Borçlu Çıkarma',
            content: 'Bazen iki basamaktan da borç almak gerekebilir. Endişelenme, aynı mantık!',
            examples: [
              {
                question: '823 - 456 = ?',
                answer: '367',
                steps: [
                  '1. Birler: 3 < 6, onlardan borç al → 13 - 6 = 7',
                  '2. Onlar: 1 < 5, yüzlerden borç al → 11 - 5 = 6 (2-1=1)',
                  '3. Yüzler: 7 - 4 = 3 (8-1=7)',
                  'Sonuç: 367'
                ],
                visual: '  7¹¹³\n  823\n- 456\n-----\n  367',
                explanation: 'İki basamaktan da borç aldık! Adım adım ilerledik.'
              },
              {
                question: '712 - 345 = ?',
                answer: '367',
                steps: [
                  '1. Birler: 2 < 5, onlardan borç al → 12 - 5 = 7',
                  '2. Onlar: 0 < 4, yüzlerden borç al → 10 - 4 = 6 (1-1=0)',
                  '3. Yüzler: 6 - 3 = 3 (7-1=6)',
                  'Sonuç: 367'
                ],
                visual: '  6¹⁰¹²\n  712\n- 345\n-----\n  367',
                explanation: 'Dikkat! Onlar 0 oldu ama sorun değil, yüzlerden borç aldık.'
              }
            ],
            audio: 'Çift borçlu çıkarmada iki basamaktan borç alırız. Sakin ol ve adım adım ilerle!'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Üç basamaklı çıkarma gerçek hayatta sıkça karşımıza çıkar!',
            examples: [
              { scenario: '🏫 Okul Mevcudu', question: '678 öğrenci var, 234 öğrenci mezun oldu. Kaç öğrenci kaldı?', answer: '444', explanation: '678 - 234 = 444 öğrenci!' },
              { scenario: '📚 Kitap Stoku', question: '856 kitap var, 389 kitap ödünç verildi. Kaç kitap kaldı?', answer: '467', explanation: '856 - 389 = 467 kitap!' },
              { scenario: '🎪 Etkinlik', question: '925 kişilik salonda 378 kişi ayrıldı. Kaç kişi kaldı?', answer: '547', explanation: '925 - 378 = 547 kişi!' },
              { scenario: '💰 Birikim', question: '753 TL biriktirdiniz, 286 TL harcadınız. Kaç TL kaldı?', answer: '467', explanation: '753 - 286 = 467 TL!' }
            ],
            audio: 'Üç basamaklı çıkarma işlemini okullarda, kütüphanelerde, etkinliklerde, bankada kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '567 - 234 = ?', answer: '333', type: 'fill' },
          { question: '745 - 328 = ?', answer: '417', type: 'fill' },
          { question: '823 - 456 = ?', answer: '367', type: 'fill' },
          { question: '678 - 234 = ?', answer: '444', type: 'fill' },
          { question: '856 - 389 = ?', answer: '467', type: 'fill' },
          { question: '925 - 378 = ?', answer: '547', type: 'fill' },
          { question: '734 - 267 = ?', answer: '467', type: 'fill' },
          { question: '891 - 456 = ?', answer: '435', type: 'fill' },
          { question: '645 - 278 = ?', answer: '367', type: 'fill' },
          { question: '912 - 534 = ?', answer: '378', type: 'fill' }
        ]
      };
    case 4:
      return {
        title: '4 Basamaklı Çıkarma',
        motivationQuote: 'Sen bir matematik yıldızısın! Binlerle dans etmek senin için kolay!',
        introduction: 'Muhteşem! Üç basamaklı çıkarmayı da çok iyi yapıyorsun. Şimdi dört basamaklı sayılarla (binlerle) çalışacağız. Mantık aynı, sadece bir basamak daha var. Sen hazırsın!',
        steps: [
          {
            title: 'Borçsuz Dört Basamaklı Çıkarma',
            content: 'Her basamakta üstteki sayı alttakinden büyükse, borç almaya gerek yok.',
            examples: [
              {
                question: '6789 - 2345 = ?',
                answer: '4444',
                steps: [
                  '1. Birler: 9 - 5 = 4',
                  '2. Onlar: 8 - 4 = 4',
                  '3. Yüzler: 7 - 3 = 4',
                  '4. Binler: 6 - 2 = 4',
                  'Sonuç: 4444'
                ],
                visual: '  6789\n- 2345\n------\n  4444',
                explanation: 'Her basamağı sırayla çıkardık. Borç yok, çok kolay!'
              }
            ],
            audio: 'Borçsuz dört basamaklı çıkarmada her basamağı ayrı ayrı çıkarıyoruz.'
          },
          {
            title: 'Borçlu Büyük Sayı Çıkarma',
            content: 'Büyük sayılarda da borç aynı şekilde çalışır. Her basamaktan borç olabilir!',
            examples: [
              {
                question: '8456 - 3789 = ?',
                answer: '4667',
                steps: [
                  '1. Birler: 6 < 9, onlardan borç al → 16 - 9 = 7',
                  '2. Onlar: 4 < 8, yüzlerden borç al → 14 - 8 = 6 (5-1=4)',
                  '3. Yüzler: 3 < 7, binlerden borç al → 13 - 7 = 6 (4-1=3)',
                  '4. Binler: 7 - 3 = 4 (8-1=7)',
                  'Sonuç: 4667'
                ],
                visual: '  7³⁴¹⁶\n  8456\n- 3789\n------\n  4667',
                explanation: 'Üç basamaktan da borç aldık! Adım adım ilerleyince kolay!'
              },
              {
                question: '9234 - 5678 = ?',
                answer: '3556',
                steps: [
                  '1. Birler: 4 < 8, onlardan borç al → 14 - 8 = 6',
                  '2. Onlar: 2 < 7, yüzlerden borç al → 12 - 7 = 5 (3-1=2)',
                  '3. Yüzler: 1 < 6, binlerden borç al → 11 - 6 = 5 (2-1=1)',
                  '4. Binler: 8 - 5 = 3 (9-1=8)',
                  'Sonuç: 3556'
                ],
                visual: '  8¹¹²¹⁴\n  9234\n- 5678\n------\n  3556',
                explanation: 'Tüm basamaklardan borç aldık! Sen harikasın!'
              }
            ],
            audio: 'Borçlu büyük sayı çıkarmada da aynı kurallar geçerli. Her basamağı sırayla işliyoruz.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Dört basamaklı çıkarma büyük işlerde kullanılır!',
            examples: [
              { scenario: '🏟️ Stadyum', question: '8567 kişilik stadyumdan 3289 kişi ayrıldı. Kaç kişi kaldı?', answer: '5278', explanation: '8567 - 3289 = 5278 kişi!' },
              { scenario: '📦 Kargo', question: '7845 paket vardı, 3678 paket teslim edildi. Kaç paket kaldı?', answer: '4167', explanation: '7845 - 3678 = 4167 paket!' },
              { scenario: '🎬 Film', question: '9876 kişi bilet aldı, 4567 kişi iptal etti. Kaç kişi kaldı?', answer: '5309', explanation: '9876 - 4567 = 5309 kişi!' },
              { scenario: '💰 Banka', question: '6543 TL vardı, 2876 TL çekildi. Kaç TL kaldı?', answer: '3667', explanation: '6543 - 2876 = 3667 TL!' }
            ],
            audio: 'Dört basamaklı çıkarma işlemini stadyumlarda, kargo şirketlerinde, bankada kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '6789 - 2345 = ?', answer: '4444', type: 'fill' },
          { question: '8456 - 3789 = ?', answer: '4667', type: 'fill' },
          { question: '9234 - 5678 = ?', answer: '3556', type: 'fill' },
          { question: '7845 - 3678 = ?', answer: '4167', type: 'fill' },
          { question: '8567 - 3289 = ?', answer: '5278', type: 'fill' },
          { question: '9876 - 4567 = ?', answer: '5309', type: 'fill' },
          { question: '6543 - 2876 = ?', answer: '3667', type: 'fill' },
          { question: '8901 - 4567 = ?', answer: '4334', type: 'fill' },
          { question: '7654 - 3298 = ?', answer: '4356', type: 'fill' },
          { question: '9123 - 5678 = ?', answer: '3445', type: 'fill' }
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
      themeColor="red"
      onComplete={onComplete}
      onClose={onClose}
    />
  );
}
