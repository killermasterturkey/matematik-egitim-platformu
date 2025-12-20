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
        title: '1 Basamaklı Bölme',
        motivationQuote: 'Bölme, paylaşmak demektir! Paylaşınca herkes mutlu olur!',
        introduction: 'Merhaba genç matematikçi! Bölme işlemi, bir şeyleri eşit parçalara ayırmak demektir. Düşün ki 12 şekerin var ve 4 arkadaşına eşit paylaştırmak istiyorsun. Her birine kaç şeker düşer? İşte bölme bu soruyu cevaplar!',
        steps: [
          {
            title: 'Bölme Nedir?',
            content: 'Bölme, bir sayıyı eşit parçalara ayırma işlemidir. Paylaştırma ve gruplara ayırma anlamına gelir. Bölme işaretini "÷" veya "/" olarak yazarız.',
            visual: '12 ÷ 4 = ?\n\n12 şekeri 4 arkadaşa paylaştır:\n🍬🍬🍬 (1. arkadaş)\n🍬🍬🍬 (2. arkadaş)\n🍬🍬🍬 (3. arkadaş)\n🍬🍬🍬 (4. arkadaş)\n\nHer birine 3 şeker düşer!\n12 ÷ 4 = 3',
            explanation: 'Bölme işleminde "÷" işareti kullanırız. 12 ÷ 4 = 3 demek, 12\'yi 4 eşit parçaya böldük ve her parça 3 oldu demektir.',
            audio: 'Bölme işlemi, bir sayıyı eşit parçalara ayırmak demektir. On iki bölü dört eşittir üç! Çünkü on iki şekeri dört kişiye paylaştırınca her birine üç şeker düşer.'
          },
          {
            title: 'Çarpma ve Bölme İlişkisi',
            content: 'Bölme, çarpmanın tersidir! Çarpma bilirsen, bölme çok kolay olur.',
            visual: 'Çarpma → Bölme:\n\n4 × 3 = 12\n↓\n12 ÷ 4 = 3\n12 ÷ 3 = 4\n\n5 × 2 = 10\n↓\n10 ÷ 5 = 2\n10 ÷ 2 = 5\n\nÇarpma tablosunu bilirsen, bölme de biliyorsun demektir!',
            explanation: 'Eğer 4 × 3 = 12 ise, o zaman 12 ÷ 4 = 3 ve 12 ÷ 3 = 4 olur. Çarpma tablosunu iyi bil, bölme çok kolay olsun!',
            audio: 'Bölme çarpmanın tersidir. Dört çarpı üç eşittir on iki ise, on iki bölü dört eşittir üç. Çarpma tablosunu bilirsen bölme çok kolay!'
          },
          {
            title: 'Basit Bölme Örnekleri',
            content: 'Şimdi birlikte basit örnekler çözelim! Her örnekte nesneleri gruplara ayırarak sonucu bulacağız.',
            examples: [
              { question: '6 ÷ 2 = ?', answer: '3', explanation: '6 elmayı 2 kişiye paylaştırınca her birine 3 elma düşer!', visual: '🍎🍎🍎 | 🍎🍎🍎 = Her birine 3' },
              { question: '8 ÷ 4 = ?', answer: '2', explanation: '8 yıldızı 4 gruba ayırınca her grupta 2 yıldız olur!', visual: '⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ = Her grupta 2' },
              { question: '15 ÷ 5 = ?', answer: '3', explanation: '15 kalbi 5 kutuya koyunca her kutuda 3 kalp olur!', visual: '❤️❤️❤️ × 5 kutu = Her kutuda 3' },
              { question: '20 ÷ 4 = ?', answer: '5', explanation: '20 çiçeği 4 vazoya eşit koyunca her vazoda 5 çiçek olur!', visual: '🌸🌸🌸🌸🌸 × 4 vazo = Her vazoda 5' },
              { question: '12 ÷ 3 = ?', answer: '4', explanation: '12 balonu 3 çocuğa paylaştırınca her çocuğa 4 balon düşer!', visual: '🎈🎈🎈🎈 × 3 çocuk = Her çocuğa 4' }
            ],
            audio: 'Şimdi birlikte örnekler çözelim. Altı bölü iki eşittir üç. Sekiz bölü dört eşittir iki. On beş bölü beş eşittir üç.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Bölme işlemini her gün kullanırız! Paylaşırken, dağıtırken, gruplara ayırırken...',
            examples: [
              { scenario: '🍕 Pizza Paylaşımı', question: '8 dilim pizzayı 4 arkadaş eşit paylaşacak. Her birine kaç dilim düşer?', answer: '2', explanation: '8 ÷ 4 = 2 dilim! Herkes eşit pay alıyor.' },
              { scenario: '🎮 Oyun Takımları', question: '12 çocuk 3 takıma ayrılacak. Her takımda kaç çocuk olur?', answer: '4', explanation: '12 ÷ 3 = 4 çocuk! Eşit takımlar oluştu.' },
              { scenario: '📚 Kitap Dağıtımı', question: '20 kitap 5 rafa eşit konulacak. Her rafta kaç kitap olur?', answer: '4', explanation: '20 ÷ 5 = 4 kitap! Düzenli raflar!' },
              { scenario: '🍬 Şeker Dağıtımı', question: '18 şeker 6 çocuğa eşit dağıtılacak. Her çocuğa kaç şeker düşer?', answer: '3', explanation: '18 ÷ 6 = 3 şeker! Herkes mutlu!' }
            ],
            audio: 'Bölme işlemini günlük hayatta sürekli kullanırız. Pizza paylaşırken, takım kurarken, kitap dağıtırken, her yerde bölme var!'
          },
          {
            title: 'Özel Bölme Kuralları',
            content: 'Bölmenin özel kuralları vardır. Bu kuralları öğrenince süper hızlı hesap yapabilirsin!',
            examples: [
              { question: '5 ÷ 1 = ?', answer: '5', explanation: 'Bir sayıyı 1\'e böldüğümüzde sayı değişmez! 5\'i 1 kişiye verirsen hepsi ona gider!', visual: '5 ÷ 1 = 5 ✓' },
              { question: '7 ÷ 1 = ?', answer: '7', explanation: 'Herhangi bir sayı ÷ 1 = Kendisi!', visual: '7 ÷ 1 = 7 ✓' },
              { question: '8 ÷ 8 = ?', answer: '1', explanation: 'Bir sayıyı kendine böldüğümüzde sonuç her zaman 1 olur!', visual: '8 ÷ 8 = 1 ✓' },
              { question: '5 ÷ 5 = ?', answer: '1', explanation: '5 şekeri 5 kişiye paylaştırırsan, her birine 1 düşer!', visual: '5 ÷ 5 = 1 ✓' },
              { question: '0 ÷ 5 = ?', answer: '0', explanation: '0\'ı herhangi bir sayıya böldüğümüzde sonuç 0 olur. Çünkü hiçbir şeyi paylaştıramazsın!', visual: '0 ÷ 5 = 0 ✓' }
            ],
            audio: 'Bir sayıyı bire böldüğümüzde sayı değişmez. Bir sayıyı kendine böldüğümüzde sonuç her zaman bir olur!'
          },
          {
            title: 'DİKKAT: Sıfıra Bölme Yapılmaz!',
            content: 'Matematikte hiçbir şeyi sıfıra bölemeyiz! Bu kural çok önemlidir.',
            visual: '❌ 5 ÷ 0 = YAPILMAZ!\n❌ 10 ÷ 0 = YAPILMAZ!\n❌ 100 ÷ 0 = YAPILMAZ!\n\n🤔 Neden?\nDüşün: 10 şekeri 0 kişiye nasıl paylaştırırsın?\nPaylaştıracak kimse yok!\n\n✅ Ama 0 ÷ 5 = 0 (Bu yapılır!)',
            explanation: 'Hiçbir sayı sıfıra bölünemez! Çünkü hiçbir şeyi hiç kimseye paylaştıramazsın. Ama sıfırı bir sayıya bölebilirsin, sonuç sıfır olur.',
            audio: 'Dikkat! Hiçbir sayı sıfıra bölünemez. Bu matematikte yasak! Ama sıfırı bir sayıya bölebilirsin, sonuç sıfır olur.'
          }
        ],
        practiceQuestions: [
          { question: '6 ÷ 2 = ?', answer: '3', type: 'fill' },
          { question: '12 ÷ 4 = ?', answer: '3', type: 'fill' },
          { question: '15 ÷ 3 = ?', answer: '5', type: 'fill' },
          { question: '20 ÷ 5 = ?', answer: '4', type: 'fill' },
          { question: '18 ÷ 6 = ?', answer: '3', type: 'fill' },
          { question: '24 ÷ 4 = ?', answer: '6', type: 'fill' },
          { question: '16 ÷ 2 = ?', answer: '8', type: 'fill' },
          { question: '21 ÷ 7 = ?', answer: '3', type: 'fill' },
          { question: '25 ÷ 5 = ?', answer: '5', type: 'fill' },
          { question: '30 ÷ 6 = ?', answer: '5', type: 'fill' }
        ]
      };
    case 2:
      return {
        title: '2 Basamaklı Bölme',
        motivationQuote: 'İki basamaklı bölme de senin için çocuk oyuncağı! Adım adım ilerle!',
        introduction: 'Harika! Tek basamaklı bölmeyi çok iyi yapıyorsun. Şimdi iki basamaklı sayıları bölmeyi öğreneceğiz. Uzun bölme yöntemini kullanacağız. Hazır mısın?',
        steps: [
          {
            title: 'Uzun Bölme Yöntemi',
            content: 'İki basamaklı sayıları bölerken, soldan sağa doğru basamak basamak ilerleriz. Buna "uzun bölme" denir.',
            visual: '48 ÷ 4 = ?\n\nAdım 1: 4\'ü 4\'e böl → 4 ÷ 4 = 1\nAdım 2: 8\'i 4\'e böl → 8 ÷ 4 = 2\n\n    12\n   ----\n4 | 48\n   -4\n   --\n    08\n    -8\n    --\n     0\n\nSonuç: 48 ÷ 4 = 12',
            explanation: 'Uzun bölmede, önce en soldaki basamağı böleriz, sonra bir sonraki basamağa geçeriz. Her adımda "böl, çarp, çıkar, indir" yaparız.',
            audio: 'Uzun bölme yönteminde soldan sağa doğru basamak basamak ilerleriz. Önce böleriz, sonra çarparız, çıkarırız ve bir sonraki basamağı indiririz.'
          },
          {
            title: 'Basit İki Basamaklı Bölme',
            content: 'Önce tam bölünen örneklerle başlayalım. Kalan olmayan bölmeler çok kolay!',
            examples: [
              {
                question: '36 ÷ 3 = ?',
                answer: '12',
                steps: [
                  '3\'ü 3\'e böl: 3 ÷ 3 = 1',
                  '6\'yı 3\'e böl: 6 ÷ 3 = 2',
                  'Sonuç: 12'
                ],
                visual: '    12\n   ----\n3 | 36',
                explanation: '36\'yı 3\'e böldük. 3 ÷ 3 = 1, 6 ÷ 3 = 2. Cevap: 12!'
              },
              {
                question: '84 ÷ 4 = ?',
                answer: '21',
                steps: [
                  '8\'i 4\'e böl: 8 ÷ 4 = 2',
                  '4\'ü 4\'e böl: 4 ÷ 4 = 1',
                  'Sonuç: 21'
                ],
                visual: '    21\n   ----\n4 | 84',
                explanation: '84\'ü 4\'e böldük. 8 ÷ 4 = 2, 4 ÷ 4 = 1. Cevap: 21!'
              },
              {
                question: '72 ÷ 6 = ?',
                answer: '12',
                steps: [
                  '7\'yi 6\'ya böl: 7 ÷ 6 = 1, kalan 1',
                  '12\'yi 6\'ya böl: 12 ÷ 6 = 2',
                  'Sonuç: 12'
                ],
                visual: '    12\n   ----\n6 | 72',
                explanation: '72\'yi 6\'ya böldük. Cevap: 12!'
              }
            ],
            audio: 'Basit iki basamaklı bölmede her basamağı sırayla böleriz. Otuz altı bölü üç eşittir on iki.'
          },
          {
            title: 'Kalanlı Bölme',
            content: 'Bazen bölme işlemi tam bitmez ve "kalan" olur. Kalan, bölünemeyen kısmı gösterir.',
            visual: '47 ÷ 5 = ?\n\n47\'de kaç tane 5 var?\n5 × 9 = 45 ✓\n5 × 10 = 50 ✗ (çok büyük)\n\n47 - 45 = 2 (kalan)\n\nSonuç: 47 ÷ 5 = 9 kalan 2',
            examples: [
              { question: '17 ÷ 5 = ?', answer: '3 kalan 2', explanation: '5 × 3 = 15, 17 - 15 = 2. Cevap: 3 kalan 2!', visual: '17 = 5 × 3 + 2' },
              { question: '23 ÷ 4 = ?', answer: '5 kalan 3', explanation: '4 × 5 = 20, 23 - 20 = 3. Cevap: 5 kalan 3!', visual: '23 = 4 × 5 + 3' },
              { question: '38 ÷ 7 = ?', answer: '5 kalan 3', explanation: '7 × 5 = 35, 38 - 35 = 3. Cevap: 5 kalan 3!', visual: '38 = 7 × 5 + 3' }
            ],
            audio: 'Kalanlı bölmede, bölünemeyen kısma kalan diyoruz. Kırk yedi bölü beş eşittir dokuz kalan iki.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'İki basamaklı bölme günlük hayatta çok kullanılır!',
            examples: [
              { scenario: '🍬 Şeker Dağıtımı', question: '72 şeker 6 çocuğa eşit dağıtılacak. Her çocuğa kaç şeker düşer?', answer: '12', explanation: '72 ÷ 6 = 12 şeker!' },
              { scenario: '📦 Paketleme', question: '84 kitap 4\'erli paketlenecek. Kaç paket olur?', answer: '21', explanation: '84 ÷ 4 = 21 paket!' },
              { scenario: '🚗 Yolculuk', question: '96 km\'lik yolu 8 saatte gideceksin. Saatte kaç km gidersin?', answer: '12', explanation: '96 ÷ 8 = 12 km/saat!' },
              { scenario: '💰 Para Paylaşımı', question: '65 TL 5 arkadaş arasında paylaşılacak. Her birine kaç TL düşer? Kaç TL kalır?', answer: '13', explanation: '65 ÷ 5 = 13 TL (tam bölünür)!' }
            ],
            audio: 'İki basamaklı bölme işlemini şeker dağıtırken, paketlerken, yolculukta, para paylaşırken kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '36 ÷ 3 = ?', answer: '12', type: 'fill' },
          { question: '48 ÷ 4 = ?', answer: '12', type: 'fill' },
          { question: '72 ÷ 6 = ?', answer: '12', type: 'fill' },
          { question: '84 ÷ 4 = ?', answer: '21', type: 'fill' },
          { question: '96 ÷ 8 = ?', answer: '12', type: 'fill' },
          { question: '56 ÷ 7 = ?', answer: '8', type: 'fill' },
          { question: '63 ÷ 9 = ?', answer: '7', type: 'fill' },
          { question: '45 ÷ 5 = ?', answer: '9', type: 'fill' },
          { question: '81 ÷ 9 = ?', answer: '9', type: 'fill' },
          { question: '64 ÷ 8 = ?', answer: '8', type: 'fill' }
        ]
      };
    case 3:
      return {
        title: '3 Basamaklı Bölme',
        motivationQuote: 'Büyük sayılar da senin için çok kolay! Sen bir bölme ustasısın!',
        introduction: 'Harika! İki basamaklı bölmeyi çok iyi yapıyorsun. Şimdi üç basamaklı sayılarla çalışacağız. Uzun bölme yöntemini kullanacağız. Mantık aynı, sadece bir basamak daha fazla!',
        steps: [
          {
            title: 'Üç Basamaklı Uzun Bölme',
            content: 'Üç basamaklı sayıları bölerken de soldan sağa ilerleriz. Her adımda "böl, çarp, çıkar, indir" yaparız.',
            examples: [
              {
                question: '144 ÷ 4 = ?',
                answer: '36',
                steps: [
                  '1\'i 4\'e bölemeyiz, 14\'ü 4\'e böl: 14 ÷ 4 = 3 kalan 2',
                  '24\'ü 4\'e böl: 24 ÷ 4 = 6',
                  'Sonuç: 36'
                ],
                visual: '    36\n   ----\n4 | 144\n   -12\n   ---\n    24\n   -24\n   ---\n     0',
                explanation: 'Uzun bölme ile 144\'ü 4\'e böldük. Cevap: 36!'
              },
              {
                question: '256 ÷ 8 = ?',
                answer: '32',
                steps: [
                  '25\'i 8\'e böl: 25 ÷ 8 = 3 kalan 1',
                  '16\'yı 8\'e böl: 16 ÷ 8 = 2',
                  'Sonuç: 32'
                ],
                visual: '    32\n   ----\n8 | 256',
                explanation: '256\'yı 8\'e böldük. Cevap: 32!'
              }
            ],
            audio: 'Üç basamaklı bölmede de aynı yöntemi kullanırız. Soldan sağa doğru böl, çarp, çıkar, indir.'
          },
          {
            title: 'İki Basamaklı Bölenle Bölme',
            content: 'Bazen böleni de iki basamaklı olabilir. Aynı mantıkta ilerleriz!',
            examples: [
              {
                question: '156 ÷ 12 = ?',
                answer: '13',
                steps: [
                  '15\'te 12 kaç kere var? 1 kere (12 × 1 = 12)',
                  '15 - 12 = 3, 6\'yı indir → 36',
                  '36\'da 12 kaç kere var? 3 kere (12 × 3 = 36)',
                  'Sonuç: 13'
                ],
                visual: '     13\n    ----\n12 | 156\n    -12\n    ---\n     36\n    -36\n    ---\n      0',
                explanation: '156\'yı 12\'ye böldük. Cevap: 13!'
              },
              {
                question: '225 ÷ 15 = ?',
                answer: '15',
                steps: [
                  '22\'de 15 kaç kere var? 1 kere',
                  '22 - 15 = 7, 5\'i indir → 75',
                  '75\'te 15 kaç kere var? 5 kere',
                  'Sonuç: 15'
                ],
                visual: '     15\n    ----\n15 | 225',
                explanation: '225\'i 15\'e böldük. Cevap: 15!'
              }
            ],
            audio: 'İki basamaklı bölenle bölme de aynı mantıkta. Adım adım ilerle.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Üç basamaklı bölme büyük işlerde kullanılır!',
            examples: [
              { scenario: '🏫 Sınıf Dağılımı', question: '240 öğrenci 8 sınıfa eşit dağıtılacak. Her sınıfta kaç öğrenci olur?', answer: '30', explanation: '240 ÷ 8 = 30 öğrenci!' },
              { scenario: '📦 Koli Paketleme', question: '360 kitap 12\'şerli kolilere konulacak. Kaç koli olur?', answer: '30', explanation: '360 ÷ 12 = 30 koli!' },
              { scenario: '🚌 Otobüs Seferi', question: '450 yolcu 9 otobüse bölünecek. Her otobüste kaç yolcu olur?', answer: '50', explanation: '450 ÷ 9 = 50 yolcu!' },
              { scenario: '💰 Maaş Bölüşümü', question: '540 TL 6 kişi arasında paylaşılacak. Her birine kaç TL düşer?', answer: '90', explanation: '540 ÷ 6 = 90 TL!' }
            ],
            audio: 'Üç basamaklı bölme işlemini okullarda, depolarda, otobüs firmalarında, şirketlerde kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '144 ÷ 4 = ?', answer: '36', type: 'fill' },
          { question: '256 ÷ 8 = ?', answer: '32', type: 'fill' },
          { question: '240 ÷ 6 = ?', answer: '40', type: 'fill' },
          { question: '360 ÷ 9 = ?', answer: '40', type: 'fill' },
          { question: '156 ÷ 12 = ?', answer: '13', type: 'fill' },
          { question: '225 ÷ 15 = ?', answer: '15', type: 'fill' },
          { question: '450 ÷ 9 = ?', answer: '50', type: 'fill' },
          { question: '540 ÷ 6 = ?', answer: '90', type: 'fill' },
          { question: '378 ÷ 7 = ?', answer: '54', type: 'fill' },
          { question: '432 ÷ 8 = ?', answer: '54', type: 'fill' }
        ]
      };
    case 4:
      return {
        title: '4 Basamaklı Bölme',
        motivationQuote: 'Sen bir matematik yıldızısın! Binlerle bölme senin için kolay!',
        introduction: 'Muhteşem! Üç basamaklı bölmeyi de çok iyi yapıyorsun. Şimdi dört basamaklı sayılarla (binlerle) çalışacağız. Mantık aynı, sen artık bir uzman oldun!',
        steps: [
          {
            title: 'Dört Basamaklı Uzun Bölme',
            content: 'Dört basamaklı sayıları bölerken de aynı yöntemi kullanırız. Soldan sağa, adım adım ilerleriz.',
            examples: [
              {
                question: '1234 ÷ 2 = ?',
                answer: '617',
                steps: [
                  '1\'i 2\'ye bölemeyiz, 12\'yi 2\'ye böl: 12 ÷ 2 = 6',
                  '3\'ü 2\'ye böl: 3 ÷ 2 = 1 kalan 1',
                  '14\'ü 2\'ye böl: 14 ÷ 2 = 7',
                  'Sonuç: 617'
                ],
                visual: '    617\n   -----\n2 | 1234',
                explanation: '1234\'ü 2\'ye böldük. Cevap: 617!'
              },
              {
                question: '4896 ÷ 8 = ?',
                answer: '612',
                steps: [
                  '48\'i 8\'e böl: 48 ÷ 8 = 6',
                  '9\'u 8\'e böl: 9 ÷ 8 = 1 kalan 1',
                  '16\'yı 8\'e böl: 16 ÷ 8 = 2',
                  'Sonuç: 612'
                ],
                visual: '    612\n   -----\n8 | 4896',
                explanation: '4896\'yı 8\'e böldük. Cevap: 612!'
              }
            ],
            audio: 'Dört basamaklı bölmede de aynı yöntemi kullanırız. Bin iki yüz otuz dört bölü iki eşittir altı yüz on yedi.'
          },
          {
            title: 'Büyük Bölenlere Bölme',
            content: 'İki basamaklı bölenlere de bölebiliriz. Tahmin yeteneğimizi kullanırız!',
            examples: [
              {
                question: '2520 ÷ 12 = ?',
                answer: '210',
                steps: [
                  '25\'te 12 kaç kere? 2 kere (12 × 2 = 24)',
                  '25 - 24 = 1, 2\'yi indir → 12',
                  '12\'de 12 kaç kere? 1 kere',
                  '12 - 12 = 0, 0\'ı indir',
                  'Sonuç: 210'
                ],
                visual: '     210\n    -----\n12 | 2520',
                explanation: '2520\'yi 12\'ye böldük. Cevap: 210!'
              },
              {
                question: '3600 ÷ 15 = ?',
                answer: '240',
                steps: [
                  '36\'da 15 kaç kere? 2 kere (15 × 2 = 30)',
                  '36 - 30 = 6, 0\'ı indir → 60',
                  '60\'ta 15 kaç kere? 4 kere',
                  '0\'ı indir → kalan 0',
                  'Sonuç: 240'
                ],
                visual: '     240\n    -----\n15 | 3600',
                explanation: '3600\'ü 15\'e böldük. Cevap: 240!'
              }
            ],
            audio: 'Büyük bölenlerle bölme de aynı mantıkta. Tahminde bulunarak doğru cevabı buluruz.'
          },
          {
            title: 'Günlük Hayattan Örnekler',
            content: 'Dört basamaklı bölme büyük işlerde kullanılır!',
            examples: [
              { scenario: '🏟️ Stadyum', question: '4800 seyirci 12 sektöre eşit dağıtılacak. Her sektörde kaç kişi olur?', answer: '400', explanation: '4800 ÷ 12 = 400 kişi!' },
              { scenario: '📦 Fabrika', question: '7200 ürün 8 depoya eşit dağıtılacak. Her depoya kaç ürün düşer?', answer: '900', explanation: '7200 ÷ 8 = 900 ürün!' },
              { scenario: '🚗 Yol', question: '2400 km\'lik yol 6 günde gidilecek. Günde kaç km gidilmeli?', answer: '400', explanation: '2400 ÷ 6 = 400 km/gün!' },
              { scenario: '💰 Bütçe', question: '9600 TL yıllık bütçe 12 aya bölünecek. Aylık kaç TL?', answer: '800', explanation: '9600 ÷ 12 = 800 TL/ay!' }
            ],
            audio: 'Dört basamaklı bölme işlemini stadyumlarda, fabrikalarda, yolculuklarda, bütçe planlamasında kullanırız.'
          }
        ],
        practiceQuestions: [
          { question: '1234 ÷ 2 = ?', answer: '617', type: 'fill' },
          { question: '4896 ÷ 8 = ?', answer: '612', type: 'fill' },
          { question: '2520 ÷ 12 = ?', answer: '210', type: 'fill' },
          { question: '3600 ÷ 15 = ?', answer: '240', type: 'fill' },
          { question: '4800 ÷ 12 = ?', answer: '400', type: 'fill' },
          { question: '7200 ÷ 8 = ?', answer: '900', type: 'fill' },
          { question: '2400 ÷ 6 = ?', answer: '400', type: 'fill' },
          { question: '9600 ÷ 12 = ?', answer: '800', type: 'fill' },
          { question: '5600 ÷ 7 = ?', answer: '800', type: 'fill' },
          { question: '6300 ÷ 9 = ?', answer: '700', type: 'fill' }
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
      themeColor="green"
      onComplete={onComplete}
      onClose={onClose}
    />
  );
}
