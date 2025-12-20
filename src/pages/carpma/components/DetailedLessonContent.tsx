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
        title: '1 Basamaklı Çarpma',
        motivationQuote: 'Çarpma işlemi hızlı toplama demektir! Çarpım tablosunu ezberlersen süper güçlü olursun!',
        introduction: 'Merhaba genç matematikçi! Çarpma işlemi, bir sayıyı birçok kez toplamak demektir. Düşün ki 3 tane kutuda 4\'er tane elma var. Hepsini saymak yerine 3 × 4 = 12 diyebiliriz! İşte çarpma bu kadar kolay!',
        steps: [
          {
            title: 'Çarpma Nedir?',
            content: 'Çarpma, bir sayıyı belirli sayıda tekrarlayarak toplama işlemidir. Hızlı toplama yöntemidir! Çarpma işaretini "×" olarak yazarız.',
            visual: '3 × 4 = ?\n\n3\'ü 4 kere topla:\n3 + 3 + 3 + 3 = 12\n\nYani: 3 × 4 = 12\n\n🍎🍎🍎 (1. grup)\n🍎🍎🍎 (2. grup)\n🍎🍎🍎 (3. grup)\n🍎🍎🍎 (4. grup)\n\n4 grup × 3 elma = 12 elma',
            explanation: '3 × 4 işlemi, 3 sayısını 4 kere toplamak demektir. 3 + 3 + 3 + 3 = 12. Ya da 4 tane 3\'lük grup demektir.',
            audio: 'Çarpma işlemi, bir sayıyı belirli sayıda tekrarlayarak toplamaktır. Üç çarpı dört eşittir on iki! Çünkü üçü dört kere topladık.'
          },
          {
            title: 'Çarpma Tablosu: 2 ile Çarpma',
            content: '2 ile çarpma çok kolay! Her sayıyı 2 kere toplamak demektir. Yani sayının iki katı!',
            visual: '2 × 1 = 2 (iki bir kere)\n2 × 2 = 4 (2 + 2)\n2 × 3 = 6 (2 + 2 + 2)\n2 × 4 = 8 (2 + 2 + 2 + 2)\n2 × 5 = 10 (2 + 2 + 2 + 2 + 2)\n\n📌 İpucu: 2 ile çarpma = Sayının 2 katı!',
            examples: [
              { question: '2 × 1 = ?', answer: '2', explanation: '2\'yi 1 kere alıyoruz: 2', visual: '🍎🍎' },
              { question: '2 × 3 = ?', answer: '6', explanation: '2\'yi 3 kere topluyoruz: 2 + 2 + 2 = 6', visual: '🍎🍎 + 🍎🍎 + 🍎🍎 = 6' },
              { question: '2 × 5 = ?', answer: '10', explanation: '2\'yi 5 kere topluyoruz: 2 + 2 + 2 + 2 + 2 = 10', visual: '🍎🍎 × 5 = 10' },
              { question: '2 × 7 = ?', answer: '14', explanation: '2\'yi 7 kere topluyoruz = 14', visual: '2 × 7 = 14' },
              { question: '2 × 9 = ?', answer: '18', explanation: '2\'yi 9 kere topluyoruz = 18', visual: '2 × 9 = 18' }
            ],
            audio: 'İki ile çarpma tablosunu öğrenelim. İki çarpı bir eşittir iki. İki çarpı iki eşittir dört. İki çarpı üç eşittir altı.'
          },
          {
            title: 'Çarpma Tablosu: 3 ile Çarpma',
            content: '3 ile çarpma da eğlenceli! Her sayıyı 3 kere toplamak demektir.',
            visual: '3 × 1 = 3\n3 × 2 = 6\n3 × 3 = 9\n3 × 4 = 12\n3 × 5 = 15\n\n📌 İpucu: 3\'lerin toplamı 3, 6, 9, 12, 15... diye gider!',
            examples: [
              { question: '3 × 2 = ?', answer: '6', explanation: '3\'ü 2 kere topluyoruz: 3 + 3 = 6', visual: '⭐⭐⭐ + ⭐⭐⭐ = 6' },
              { question: '3 × 4 = ?', answer: '12', explanation: '3\'ü 4 kere topluyoruz: 3 + 3 + 3 + 3 = 12', visual: '⭐⭐⭐ × 4 = 12' },
              { question: '3 × 5 = ?', answer: '15', explanation: '3\'ü 5 kere topluyoruz = 15', visual: '⭐⭐⭐ × 5 = 15' },
              { question: '3 × 7 = ?', answer: '21', explanation: '3\'ü 7 kere topluyoruz = 21', visual: '3 × 7 = 21' }
            ],
            audio: 'Üç ile çarpma tablosunu öğrenelim. Üç çarpı bir eşittir üç. Üç çarpı iki eşittir altı. Üç çarpı üç eşittir dokuz.'
          },
          {
            title: 'Çarpma Tablosu: 4 ve 5 ile Çarpma',
            content: '4 ve 5 ile çarpma da aynı mantıkta! 5 ile çarpmak özellikle kolay çünkü sonuç hep 0 veya 5 ile biter!',
            visual: '4 × 2 = 8    |    5 × 2 = 10\n4 × 3 = 12   |    5 × 3 = 15\n4 × 4 = 16   |    5 × 4 = 20\n4 × 5 = 20   |    5 × 5 = 25\n\n📌 İpucu: 5 ile çarpım hep 0 veya 5 ile biter!',
            examples: [
              { question: '4 × 3 = ?', answer: '12', explanation: '4\'ü 3 kere topluyoruz: 4 + 4 + 4 = 12', visual: '🎈🎈🎈🎈 × 3 = 12' },
              { question: '5 × 4 = ?', answer: '20', explanation: '5\'i 4 kere topluyoruz: 5 + 5 + 5 + 5 = 20', visual: '🌸🌸🌸🌸🌸 × 4 = 20' },
              { question: '4 × 5 = ?', answer: '20', explanation: '4 × 5 = 5 × 4 = 20. Çarpımda sıra önemli değil!', visual: '4 × 5 = 20' },
              { question: '5 × 6 = ?', answer: '30', explanation: '5\'i 6 kere topluyoruz = 30. 0 ile bitiyor!', visual: '5 × 6 = 30' }
            ],
            audio: 'Dört ve beş ile çarpma tablosunu öğrenelim. Dört çarpı iki eşittir sekiz. Beş çarpı iki eşittir on.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Çarpma işlemini her gün kullanırız! Gruplar halinde sayarken çarpma çok işimize yarar.',
            examples: [
              { scenario: '🍪 Kurabiye Paketleri', question: 'Her pakette 4 kurabiye var. 3 paket alırsan kaç kurabiye olur?', answer: '12', explanation: '4 × 3 = 12 kurabiye!' },
              { scenario: '🎮 Oyun Seviyeleri', question: 'Her seviyede 5 puan kazanıyorsun. 6 seviye geçersen kaç puan kazanırsın?', answer: '30', explanation: '5 × 6 = 30 puan!' },
              { scenario: '📚 Kitap Sayfaları', question: 'Her gün 3 sayfa okuyorsun. 7 günde kaç sayfa okursun?', answer: '21', explanation: '3 × 7 = 21 sayfa!' },
              { scenario: '🎈 Balon Dağıtımı', question: 'Her çocuğa 2 balon verilecek. 8 çocuk varsa kaç balon lazım?', answer: '16', explanation: '2 × 8 = 16 balon!' }
            ],
            audio: 'Çarpma işlemini günlük hayatta sürekli kullanırız. Kurabiye paketlerinde, oyun puanlarında, kitap sayfalarında...'
          },
          {
            title: 'Özel Çarpma Kuralları',
            content: '0 ve 1 ile çarpmanın özel kuralları vardır. Bu kuralları öğrenince süper hızlı hesap yapabilirsin!',
            visual: 'SIFIR KURALI:\n• 5 × 0 = 0\n• 0 × 7 = 0\n• Herhangi bir sayı × 0 = 0\n\nBİR KURALI:\n• 5 × 1 = 5\n• 1 × 9 = 9\n• Herhangi bir sayı × 1 = Kendisi',
            examples: [
              { question: '5 × 0 = ?', answer: '0', explanation: 'Bir sayıyı 0 kere almak demek, hiç almamak demektir. Sonuç hep 0!', visual: '5 × 0 = 0' },
              { question: '0 × 100 = ?', answer: '0', explanation: '0\'ı kaç kere alırsan al, hep 0 olur!', visual: '0 × 100 = 0' },
              { question: '7 × 1 = ?', answer: '7', explanation: 'Bir sayıyı 1 kere almak, kendisi demektir.', visual: '7 × 1 = 7' },
              { question: '1 × 9 = ?', answer: '9', explanation: '1 ile çarpınca sayı değişmez!', visual: '1 × 9 = 9' }
            ],
            audio: 'Sıfır ve bir ile çarpmanın özel kuralları vardır. Herhangi bir sayı sıfırla çarpılırsa sonuç sıfır olur! Birle çarpılırsa kendisi olur!'
          },
          {
            title: 'Çarpmanın Değişme Özelliği',
            content: 'Çarpmada sayıların yeri değişince sonuç değişmez! Bu çok işimize yarar.',
            visual: '3 × 4 = 12\n4 × 3 = 12\n\n🍎🍎🍎 🍎🍎🍎 🍎🍎🍎 🍎🍎🍎 = 12\n(4 sıra, her sırada 3)\n\n🍎🍎🍎🍎 🍎🍎🍎🍎 🍎🍎🍎🍎 = 12\n(3 sıra, her sırada 4)\n\nİkisi de 12!',
            explanation: 'Bu özellik sayesinde hangi sayıyı önce yazarsan yaz, sonuç aynı olur. Bazen bir taraf daha kolay olabilir!',
            audio: 'Çarpmada sayıların yeri değişince sonuç değişmez. Üç çarpı dört de on iki, dört çarpı üç de on iki!'
          }
        ],
        practiceQuestions: [
          { question: '2 × 3 = ?', answer: '6', type: 'fill' },
          { question: '3 × 4 = ?', answer: '12', type: 'fill' },
          { question: '4 × 2 = ?', answer: '8', type: 'fill' },
          { question: '5 × 3 = ?', answer: '15', type: 'fill' },
          { question: '2 × 5 = ?', answer: '10', type: 'fill' },
          { question: '3 × 3 = ?', answer: '9', type: 'fill' },
          { question: '4 × 4 = ?', answer: '16', type: 'fill' },
          { question: '5 × 2 = ?', answer: '10', type: 'fill' },
          { question: '2 × 4 = ?', answer: '8', type: 'fill' },
          { question: '3 × 5 = ?', answer: '15', type: 'fill' }
        ]
      };
    case 2:
      return {
        title: '2 Basamaklı Çarpma',
        motivationQuote: 'İki basamaklı çarpma da senin için çocuk oyuncağı! Adım adım ilerle, başarı senin!',
        introduction: 'Harika! Tek basamaklı çarpmayı çok iyi yapıyorsun. Şimdi iki basamaklı sayıları çarpacağız. Önce tek basamakla, sonra iki basamakla çarpma öğreneceğiz. Hazır mısın?',
        steps: [
          {
            title: 'İki Basamaklı × Tek Basamaklı',
            content: 'İki basamaklı sayıyı tek basamaklı sayıyla çarparken, her basamağı ayrı ayrı çarparız.',
            visual: '12 × 3 = ?\n\nYöntem 1: Ayırarak çarp\n12 = 10 + 2\n\n10 × 3 = 30\n2 × 3 = 6\n\n30 + 6 = 36\n\nSonuç: 12 × 3 = 36',
            examples: [
              {
                question: '12 × 3 = ?',
                answer: '36',
                steps: [
                  'Birleri çarp: 2 × 3 = 6',
                  'Onları çarp: 10 × 3 = 30',
                  'Topla: 30 + 6 = 36'
                ],
                visual: '  12\n×  3\n----\n  36',
                explanation: '12 sayısını 10 + 2 olarak düşün. 10 × 3 = 30, 2 × 3 = 6. Toplam: 36!'
              },
              {
                question: '23 × 4 = ?',
                answer: '92',
                steps: [
                  'Birleri çarp: 3 × 4 = 12 (2 yaz, 1 elde)',
                  'Onları çarp: 2 × 4 = 8, elde ile 8 + 1 = 9',
                  'Sonuç: 92'
                ],
                visual: '  23\n×  4\n----\n  92',
                explanation: 'Birler: 3 × 4 = 12, 2\'yi yazdık 1\'i elde ettik. Onlar: 2 × 4 = 8, elde ile 9. Cevap: 92!'
              },
              {
                question: '15 × 5 = ?',
                answer: '75',
                steps: [
                  'Birleri çarp: 5 × 5 = 25 (5 yaz, 2 elde)',
                  'Onları çarp: 1 × 5 = 5, elde ile 5 + 2 = 7',
                  'Sonuç: 75'
                ],
                visual: '  15\n×  5\n----\n  75',
                explanation: 'Birler: 5 × 5 = 25. Onlar: 1 × 5 + 2 = 7. Cevap: 75!'
              }
            ],
            audio: 'İki basamaklı sayıyı tek basamaklı sayı ile çarparken, önce birleri sonra onları çarpıyoruz.'
          },
          {
            title: 'İki Basamaklı × İki Basamaklı',
            content: 'İki basamaklı iki sayıyı çarparken, her basamağı ayrı ayrı çarpıp sonuçları toplarız.',
            visual: '12 × 13 = ?\n\nAdım 1: 12 × 3 = 36\nAdım 2: 12 × 10 = 120\nAdım 3: Topla: 36 + 120 = 156\n\n   12\n × 13\n-----\n   36  (12 × 3)\n  120  (12 × 10)\n-----\n  156',
            examples: [
              {
                question: '12 × 13 = ?',
                answer: '156',
                steps: [
                  '12 × 3 = 36',
                  '12 × 10 = 120',
                  'Topla: 120 + 36 = 156'
                ],
                visual: '   12\n × 13\n-----\n   36\n 120\n-----\n  156',
                explanation: 'Önce 12 × 3 = 36, sonra 12 × 10 = 120. Hepsini topla: 156!'
              },
              {
                question: '24 × 12 = ?',
                answer: '288',
                steps: [
                  '24 × 2 = 48',
                  '24 × 10 = 240',
                  'Topla: 240 + 48 = 288'
                ],
                visual: '   24\n × 12\n-----\n   48\n 240\n-----\n  288',
                explanation: 'Önce 24 × 2 = 48, sonra 24 × 10 = 240. Toplam: 288!'
              },
              {
                question: '15 × 11 = ?',
                answer: '165',
                steps: [
                  '15 × 1 = 15',
                  '15 × 10 = 150',
                  'Topla: 150 + 15 = 165'
                ],
                visual: '   15\n × 11\n-----\n   15\n 150\n-----\n  165',
                explanation: '11 ile çarpmak kolay! 15 + 150 = 165.'
              }
            ],
            audio: 'İki basamaklı sayıları çarparken, her basamağı ayrı ayrı çarpıp sonuçları topluyoruz.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'İki basamaklı çarpma gerçek hayatta çok kullanılır!',
            examples: [
              { scenario: '💰 Alışveriş', question: 'Bir defter 15 TL. 12 defter alırsan kaç TL ödersin?', answer: '180', explanation: '15 × 12 = 180 TL!' },
              { scenario: '📦 Kutu Sayısı', question: 'Her kutuda 24 kalem var. 11 kutu alırsan kaç kalem olur?', answer: '264', explanation: '24 × 11 = 264 kalem!' },
              { scenario: '🎮 Oyun Puanı', question: 'Her turda 18 puan kazanıyorsun. 13 tur oynarsan kaç puan kazanırsın?', answer: '234', explanation: '18 × 13 = 234 puan!' },
              { scenario: '🚗 Yol', question: 'Araba saatte 25 km gidiyor. 14 saatte kaç km gider?', answer: '350', explanation: '25 × 14 = 350 km!' }
            ],
            audio: 'İki basamaklı çarpma işlemini alışverişte, kutu sayarken, oyun oynarken kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '12 × 3 = ?', answer: '36', type: 'fill' },
          { question: '23 × 4 = ?', answer: '92', type: 'fill' },
          { question: '15 × 5 = ?', answer: '75', type: 'fill' },
          { question: '12 × 13 = ?', answer: '156', type: 'fill' },
          { question: '24 × 12 = ?', answer: '288', type: 'fill' },
          { question: '15 × 11 = ?', answer: '165', type: 'fill' },
          { question: '18 × 13 = ?', answer: '234', type: 'fill' },
          { question: '21 × 14 = ?', answer: '294', type: 'fill' },
          { question: '16 × 12 = ?', answer: '192', type: 'fill' },
          { question: '19 × 15 = ?', answer: '285', type: 'fill' }
        ]
      };
    case 3:
      return {
        title: '3 Basamaklı Çarpma',
        motivationQuote: 'Büyük sayılar da senin için çok kolay! Sen bir matematik dehasisin!',
        introduction: 'Muhteşem! İki basamaklı çarpmayı çok iyi yapıyorsun. Şimdi üç basamaklı sayılarla çalışacağız. Mantık aynı, sadece bir basamak daha var. Sen hazırsın!',
        steps: [
          {
            title: 'Üç Basamaklı × Tek Basamaklı',
            content: 'Üç basamaklı sayıyı tek basamaklı sayıyla çarpmak iki basamaklıyla aynı mantıkta!',
            examples: [
              {
                question: '123 × 4 = ?',
                answer: '492',
                steps: [
                  '1. Birler: 3 × 4 = 12 (2 yaz, 1 elde)',
                  '2. Onlar: 2 × 4 = 8, elde ile 9',
                  '3. Yüzler: 1 × 4 = 4',
                  'Sonuç: 492'
                ],
                visual: '  123\n×   4\n-----\n  492',
                explanation: 'Her basamağı sırayla çarptık. Harika!'
              },
              {
                question: '234 × 3 = ?',
                answer: '702',
                steps: [
                  '1. Birler: 4 × 3 = 12 (2 yaz, 1 elde)',
                  '2. Onlar: 3 × 3 = 9, elde ile 10 (0 yaz, 1 elde)',
                  '3. Yüzler: 2 × 3 = 6, elde ile 7',
                  'Sonuç: 702'
                ],
                visual: '  234\n×   3\n-----\n  702',
                explanation: 'İki eldeli çarpma! Adım adım ilerledik.'
              }
            ],
            audio: 'Üç basamaklı sayıyı tek basamaklı sayı ile çarparken, her basamağı sırayla çarpıyoruz.'
          },
          {
            title: 'Üç Basamaklı × İki Basamaklı',
            content: 'Üç basamaklı sayıyı iki basamaklı sayıyla çarpmak aynı mantıkta!',
            examples: [
              {
                question: '125 × 12 = ?',
                answer: '1500',
                steps: [
                  '1. 125 × 2 = 250',
                  '2. 125 × 10 = 1250',
                  '3. Topla: 1250 + 250 = 1500'
                ],
                visual: '   125\n ×  12\n------\n   250  (125 × 2)\n  1250  (125 × 10)\n------\n  1500',
                explanation: 'Önce 125 × 2, sonra 125 × 10. Hepsini topladık!'
              },
              {
                question: '234 × 15 = ?',
                answer: '3510',
                steps: [
                  '1. 234 × 5 = 1170',
                  '2. 234 × 10 = 2340',
                  '3. Topla: 2340 + 1170 = 3510'
                ],
                visual: '   234\n ×  15\n------\n  1170  (234 × 5)\n  2340  (234 × 10)\n------\n  3510',
                explanation: 'Önce 234 × 5 = 1170, sonra 234 × 10 = 2340. Toplam: 3510!'
              }
            ],
            audio: 'Üç basamaklı sayıları çarparken, her basamağı ayrı ayrı çarpıp sonuçları topluyoruz.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Üç basamaklı çarpma büyük işlerde kullanılır!',
            examples: [
              { scenario: '🏫 Okul Malzemeleri', question: '125 öğrenci için 12\'şer kalem alınacak. Toplam kaç kalem?', answer: '1500', explanation: '125 × 12 = 1500 kalem!' },
              { scenario: '📚 Kitap Stoku', question: '234 farklı kitaptan 15\'er adet alınacak. Toplam kaç kitap?', answer: '3510', explanation: '234 × 15 = 3510 kitap!' },
              { scenario: '🎪 Etkinlik Bileti', question: '456 kişi var, her kişi 11 TL ödüyor. Toplam kaç TL?', answer: '5016', explanation: '456 × 11 = 5016 TL!' }
            ],
            audio: 'Üç basamaklı çarpma işlemini okullarda, kütüphanelerde, etkinliklerde kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '123 × 4 = ?', answer: '492', type: 'fill' },
          { question: '234 × 3 = ?', answer: '702', type: 'fill' },
          { question: '345 × 2 = ?', answer: '690', type: 'fill' },
          { question: '125 × 12 = ?', answer: '1500', type: 'fill' },
          { question: '234 × 15 = ?', answer: '3510', type: 'fill' },
          { question: '156 × 11 = ?', answer: '1716', type: 'fill' },
          { question: '278 × 13 = ?', answer: '3614', type: 'fill' },
          { question: '189 × 14 = ?', answer: '2646', type: 'fill' },
          { question: '456 × 11 = ?', answer: '5016', type: 'fill' },
          { question: '367 × 12 = ?', answer: '4404', type: 'fill' }
        ]
      };
    case 4:
      return {
        title: '4 Basamaklı Çarpma',
        motivationQuote: 'Sen bir matematik yıldızısın! Binlerle çarpma senin için oyun!',
        introduction: 'Harika! Üç basamaklı çarpmayı da çok iyi yapıyorsun. Şimdi dört basamaklı sayılarla çalışacağız. Mantık aynı, sen artık bir uzman oldun!',
        steps: [
          {
            title: 'Dört Basamaklı × Tek Basamaklı',
            content: 'Dört basamaklı sayıyı tek basamaklı sayıyla çarpmak aynı mantıkta!',
            examples: [
              {
                question: '1234 × 5 = ?',
                answer: '6170',
                steps: [
                  '1. Birler: 4 × 5 = 20 (0 yaz, 2 elde)',
                  '2. Onlar: 3 × 5 = 15, elde ile 17 (7 yaz, 1 elde)',
                  '3. Yüzler: 2 × 5 = 10, elde ile 11 (1 yaz, 1 elde)',
                  '4. Binler: 1 × 5 = 5, elde ile 6',
                  'Sonuç: 6170'
                ],
                visual: '  1234\n×    5\n------\n  6170',
                explanation: 'Her basamağı sırayla çarptık. Harika!'
              }
            ],
            audio: 'Dört basamaklı sayıyı tek basamaklı sayı ile çarparken, her basamağı sırayla çarpıyoruz.'
          },
          {
            title: 'Dört Basamaklı × İki Basamaklı',
            content: 'Dört basamaklı sayıyı iki basamaklı sayıyla çarpmak aynı mantıkta!',
            examples: [
              {
                question: '2345 × 12 = ?',
                answer: '28140',
                steps: [
                  '1. 2345 × 2 = 4690',
                  '2. 2345 × 10 = 23450',
                  '3. Topla: 23450 + 4690 = 28140'
                ],
                visual: '   2345\n ×   12\n-------\n   4690  (2345 × 2)\n  23450  (2345 × 10)\n-------\n  28140',
                explanation: 'Önce 2345 × 2, sonra 2345 × 10. Hepsini topladık!'
              }
            ],
            audio: 'Dört basamaklı sayıları çarparken, her basamağı ayrı ayrı çarpıp sonuçları topluyoruz.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Dört basamaklı çarpma büyük işlerde kullanılır!',
            examples: [
              { scenario: '🏟️ Stadyum Bileti', question: '2345 kişi geliyor, her bilet 12 TL. Toplam kaç TL?', answer: '28140', explanation: '2345 × 12 = 28140 TL!' },
              { scenario: '📦 Fabrika', question: 'Günde 1234 ürün üretiliyor. 15 günde kaç ürün üretilir?', answer: '18510', explanation: '1234 × 15 = 18510 ürün!' },
              { scenario: '🎬 Sinema', question: '3456 kişi, her bilet 11 TL. Toplam kaç TL?', answer: '38016', explanation: '3456 × 11 = 38016 TL!' }
            ],
            audio: 'Dört basamaklı çarpma işlemini stadyumlarda, fabrikalarda, sinema salonlarında kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '1234 × 5 = ?', answer: '6170', type: 'fill' },
          { question: '2345 × 4 = ?', answer: '9380', type: 'fill' },
          { question: '3456 × 3 = ?', answer: '10368', type: 'fill' },
          { question: '1234 × 12 = ?', answer: '14808', type: 'fill' },
          { question: '2345 × 15 = ?', answer: '35175', type: 'fill' },
          { question: '1567 × 11 = ?', answer: '17237', type: 'fill' },
          { question: '2789 × 13 = ?', answer: '36257', type: 'fill' },
          { question: '1890 × 14 = ?', answer: '26460', type: 'fill' },
          { question: '3456 × 11 = ?', answer: '38016', type: 'fill' },
          { question: '2678 × 12 = ?', answer: '32136', type: 'fill' }
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
      themeColor="blue"
      onComplete={onComplete}
      onClose={onClose}
    />
  );
}
