// 4. SINIF - TEMA 2: SAYILAR VE NİCELİKLER (2)
// Kesir Türleri, Denk Kesirler, Kesir İşlemleri ve Birim Dönüşümleri
// 12 Öğrenme Çıktısı

import { Theme } from '../types';

export const tema2: Theme = {
  id: 'grade4-tema2',
  title: 'Sayılar ve Nicelikler (2)',
  description: 'Kesir türleri, denk kesirler, kesir işlemleri ve birim dönüşümleri! Matematiğin lezzetli dünyasına hoş geldin!',
  emoji: '🍕',
  color: 'from-purple-400 to-violet-500',
  bgColor: 'bg-purple-50',
  borderColor: 'border-purple-200',
  textColor: 'text-purple-600',
  hours: 43,
  objectives: [
    'Basit, bileşik ve tam sayılı kesirleri anlama ve sınıflandırma',
    'Bileşik ve tam sayılı kesirler arasında dönüşüm yapma',
    'Denk kesirleri anlama ve kullanma',
    'Birim kesirleri ve aynı paydalı kesirleri karşılaştırma',
    'Aynı paydalı kesirlerle toplama ve çıkarma yapma',
    'Uzunluk ve kütle birimlerini dönüştürme'
  ],
  keywords: ['Basit kesir', 'Bileşik kesir', 'Tam sayılı kesir', 'Denk kesir', 'Kesir işlemleri', 'Birim dönüşümü', 'Uzunluk', 'Kütle'],
  generalizations: [
    'Kesirler; basit, bileşik ve tam sayılı kesirler olarak sınıflandırılabilir.',
    'Bileşik ve tam sayılı kesirler birbirine dönüştürülebilir.',
    'Denk kesirler farklı görünseler de aynı değeri temsil eder.',
    'Paydaları eşit kesirlerle toplama ve çıkarma yapılabilir.',
    'Uzunluk ve kütle birimleri kendi aralarında dönüştürülebilir.'
  ],
  topics: [
    {
      id: 'grade4-tema2-konu1',
      title: 'Kesir Türleri',
      description: 'Basit, bileşik ve tam sayılı kesirleri tanıyalım ve sınıflandıralım!',
      emoji: '🍰',
      duration: '50 dk',
      difficulty: 2,
      keywords: ['basit kesir', 'bileşik kesir', 'tam sayılı kesir', 'sınıflandırma', 'pay', 'payda'],
      content: {
        introduction: 'Bugün kesirlerin farklı türlerini öğreneceksin! Basit, bileşik ve tam sayılı kesirler arasındaki farkları keşfedeceksin. Bu bilgi sana günlük hayatta pizza paylaşmaktan tariflere kadar birçok yerde yardımcı olacak!',
        motivationQuote: 'Kesirler her yerde! Bir dilim pizza bile bir kesirdir! 🍕',
        funFacts: [
          'Eski Mısırlılar sadece birim kesirler (1/2, 1/3, 1/4 gibi) kullanırlardı!',
          'Müzikte nota süreleri kesirlerle ifade edilir: dörtlük nota = 1/4, sekizlik nota = 1/8!',
          'Pizza, kesir kavramını anlamak için dünyanın en lezzetli öğretim materyalidir!'
        ],
        steps: [
          {
            title: 'Kesir Nedir?',
            content: 'Kesir, bir bütünün eşit parçalarından bir veya birkaçını gösteren sayıdır. Üstteki sayıya PAY, alttaki sayıya PAYDA denir. Payda bütünün kaç eşit parçaya bölündüğünü, pay ise kaç parça alındığını gösterir.',
            visual: '🍕 Pizza 8 dilime bölündü → 3/8 = 3 dilim aldık\n\n    3 ← PAY (alınan parça sayısı)\n   ―\n    8 ← PAYDA (toplam parça sayısı)',
            audio: 'Kesir bir bütünün parçasıdır. Üstteki pay, alttaki paydadır. Payda bütünü böler, pay parçayı gösterir!',
            example: {
              question: '🍫 Bir çikolata 12 parçaya bölündü. Ayşe 5 parça aldı. Bunu kesir olarak yaz.',
              answer: '5/12',
              explanation: 'Payda (bütün): 12 parça, Pay (alınan): 5 parça → 5/12!'
            }
          },
          {
            title: 'Basit Kesir',
            content: 'Pay < Payda olan kesirlerdir. Yani kesrin değeri 1\'den küçüktür. Bir bütünün tamamından daha azını gösterir.',
            visual: '✅ Basit Kesir Örnekleri:\n\n1/2 → yarım (1 < 2) ✓\n2/3 → üçte iki (2 < 3) ✓\n3/4 → dörtte üç (3 < 4) ✓\n5/8 → sekizde beş (5 < 8) ✓\n7/10 → onda yedi (7 < 10) ✓\n\n🔑 Kural: Pay < Payda = Basit Kesir',
            audio: 'Basit kesirde pay paydadan küçüktür. Bu kesirler 1\'den küçüktür çünkü bütünün tamamı alınmamıştır!',
            example: {
              question: '9/15 basit kesir midir?',
              answer: 'Evet, basit kesirdir',
              explanation: 'Pay (9) < Payda (15) olduğu için basit kesirdir. 9/15 değeri 1\'den küçüktür.'
            }
          },
          {
            title: 'Bileşik Kesir',
            content: 'Pay ≥ Payda olan kesirlerdir. Yani kesrin değeri 1 veya 1\'den büyüktür. Bir veya daha fazla bütünü gösterir.',
            visual: '✅ Bileşik Kesir Örnekleri:\n\n4/4 = 1 (bir tam) → 4 = 4 ✓\n5/3 (beş üçte) → 5 > 3 ✓\n7/4 (yedi dörtte) → 7 > 4 ✓\n9/2 (dokuz yarım) → 9 > 2 ✓\n11/5 (on bir beşte) → 11 > 5 ✓\n\n🔑 Kural: Pay ≥ Payda = Bileşik Kesir',
            audio: 'Bileşik kesirde pay paydaya eşit veya büyüktür. Bu kesirler 1 veya 1\'den büyüktür!',
            example: {
              question: '12/7 bileşik kesir midir?',
              answer: 'Evet, bileşik kesirdir',
              explanation: 'Pay (12) > Payda (7) olduğu için bileşik kesirdir. 12/7 değeri 1\'den büyüktür.'
            }
          },
          {
            title: 'Tam Sayılı Kesir',
            content: 'Bileşik kesrin tam kısım ve kesir kısmı olarak yazılmış halidir. Örneğin 7/4 = 1 3/4 şeklinde yazılır.',
            visual: '🔄 Bileşik → Tam Sayılı Dönüşümü:\n\n7/4 = ?\n7 ÷ 4 = 1 kalan 3\n\n   1 ← Tam kısım (bölüm)\n     3 ← Kalan (yeni pay)\n   ―\n     4 ← Payda aynı\n\n7/4 = 1 3/4 (Bir tam dörtte üç)',
            audio: 'Tam sayılı kesir, bir tam sayı ve bir kesir kısmından oluşur. Bileşik kesirden dönüştürülür!',
            example: {
              question: '13/5 kesrini tam sayılı kesir olarak yaz.',
              answer: '2 3/5',
              explanation: '13 ÷ 5 = 2 kalan 3. Yani 13/5 = 2 3/5 (iki tam beşte üç)!'
            }
          },
          {
            title: 'Bileşikten Tam Sayılıya Dönüşüm',
            content: 'Adım 1: Payı paydaya böl.\nAdım 2: Bölüm = Tam kısım, Kalan = Yeni pay.\nAdım 3: Payda değişmez.',
            visual: '📝 Örnek: 17/6 = ?\n\nAdım 1: 17 ÷ 6 = 2 (bölüm), kalan 5\nAdım 2: Tam kısım = 2, Pay = 5\nAdım 3: Payda = 6\n\n17/6 = 2 5/6 ✓\n\n📝 Örnek: 25/4 = ?\n25 ÷ 4 = 6 kalan 1\n25/4 = 6 1/4 ✓',
            audio: 'Payı paydaya böl. Bölüm tam kısım olur, kalan yeni pay olur, payda değişmez!',
            example: {
              question: '29/8 kesrini tam sayılı kesir olarak yaz.',
              answer: '3 5/8',
              explanation: '29 ÷ 8 = 3 kalan 5. Yani 29/8 = 3 5/8!'
            }
          },
          {
            title: 'Tam Sayılıdan Bileşiğe Dönüşüm',
            content: 'Adım 1: Tam kısım × Payda hesapla.\nAdım 2: Sonuca payı ekle → Yeni pay.\nAdım 3: Payda değişmez.',
            visual: '📝 Örnek: 3 2/5 = ?\n\nAdım 1: 3 × 5 = 15\nAdım 2: 15 + 2 = 17 (yeni pay)\nAdım 3: Payda = 5\n\n3 2/5 = 17/5 ✓\n\n📝 Örnek: 4 3/7 = ?\n4 × 7 = 28, 28 + 3 = 31\n4 3/7 = 31/7 ✓',
            audio: 'Tam kısımı paydayla çarp, paya ekle. Bu yeni pay olur, payda aynı kalır!',
            example: {
              question: '5 2/3 kesrini bileşik kesir olarak yaz.',
              answer: '17/3',
              explanation: '5 × 3 = 15, 15 + 2 = 17. Yani 5 2/3 = 17/3!'
            }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '5/8 hangi kesir türüdür?', options: ['Basit kesir', 'Bileşik kesir', 'Tam sayılı kesir', 'Doğal sayı'], correctAnswer: 'Basit kesir', explanation: '5 < 8 olduğu için pay < payda, basit kesirdir!' },
          { type: 'multiple-choice', question: 'Hangisi bileşik kesirdir?', options: ['3/5', '7/10', '9/9', '2/3'], correctAnswer: '9/9', explanation: '9 = 9, pay = payda olduğu için bileşik kesirdir (değeri 1)!' },
          { type: 'fill-blank', question: '11/4 kesrinin tam sayılı kesir hali = ___ ___/4', correctAnswer: '2 3', explanation: '11 ÷ 4 = 2 kalan 3, yani 11/4 = 2 3/4!' },
          { type: 'fill-blank', question: '3 1/5 kesrinin bileşik kesir hali = ___/5', correctAnswer: '16', explanation: '3 × 5 + 1 = 16, yani 3 1/5 = 16/5!' },
          { type: 'multiple-choice', question: '15/7 = ?', options: ['2 1/7', '2 2/7', '1 8/7', '2 3/7'], correctAnswer: '2 1/7', explanation: '15 ÷ 7 = 2 kalan 1, yani 15/7 = 2 1/7!' },
          { type: 'multiple-choice', question: 'Hangisi basit kesirdir?', options: ['8/5', '6/6', '10/3', '4/9'], correctAnswer: '4/9', explanation: '4 < 9, pay < payda olduğu için basit kesirdir!' },
          { type: 'fill-blank', question: '4 2/3 = ___/3', correctAnswer: '14', explanation: '4 × 3 + 2 = 14, yani 4 2/3 = 14/3!' },
          { type: 'fill-blank', question: '23/6 = ___ ___/6', correctAnswer: '3 5', explanation: '23 ÷ 6 = 3 kalan 5, yani 23/6 = 3 5/6!' },
          { type: 'multiple-choice', question: 'Aşağıdakilerden hangisi 1\'e eşittir?', options: ['5/6', '6/5', '7/7', '8/9'], correctAnswer: '7/7', explanation: '7/7 = 1, pay = payda olduğunda değer 1\'dir!' },
          { type: 'fill-blank', question: '5 3/8 = ___/8', correctAnswer: '43', explanation: '5 × 8 + 3 = 43, yani 5 3/8 = 43/8!' }
        ]
      }
    },
    {
      id: 'grade4-tema2-konu2',
      title: 'Denk Kesirler',
      description: 'Aynı değere sahip farklı kesirleri keşfedelim!',
      emoji: '⚖️',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['denk kesir', 'eşdeğer', 'genişletme', 'sadeleştirme', 'en sade hal'],
      content: {
        introduction: 'Bugün aynı değeri gösteren farklı kesirleri keşfedeceksin! 1/2, 2/4 ve 3/6 aynı değeri mi gösterir? Denk kesirler dünyasına hoş geldin!',
        motivationQuote: 'Farklı görünseler de eşitler! Yarım pizza her zaman yarımdır! ⚖️',
        funFacts: [
          '1/2 kesrinin sonsuz sayıda denk kesri vardır: 2/4, 3/6, 4/8, 5/10...',
          'İnşaat mühendisleri denk kesirleri ölçeklendirmede kullanır!',
          'Müzikte tempo değişiklikleri denk kesirlerle yapılır!'
        ],
        steps: [
          {
            title: 'Denk Kesir Nedir?',
            content: 'Denk kesirler, farklı pay ve paydaya sahip olsalar da aynı değeri gösteren kesirlerdir. Görsel olarak aynı miktarı temsil ederler.',
            visual: '🍕 Pizza ile Gösterim:\n\n[▓▓░░] 1/2 pizza\n[▓▓░░░░░░] 2/4 pizza\n[▓▓▓░░░░░░░░░] 3/6 pizza\n\nHepsi YARI pizza! ✓\n\n1/2 = 2/4 = 3/6 = 4/8 = 5/10 ...',
            audio: 'Denk kesirler farklı yazılsalar da aynı değeri gösterir. Yarım pizza, ister iki dilim ister dört dilim olsun, hep yarımdır!',
            example: {
              question: '2/4 hangi kesre denktir?',
              answer: '1/2',
              explanation: 'İkisi de yarımı gösterir. 2/4 sadeleştirilince 1/2 olur!'
            }
          },
          {
            title: 'Genişletme (Çarpma)',
            content: 'Pay ve paydayı AYNI sayı ile çarparak denk kesir bulunur. Bu işlem kesrin değerini değiştirmez.',
            visual: '📐 Genişletme Kuralı:\n\n× 2       × 3       × 4\n↓         ↓         ↓\n1   2     1   3     1   4\n― = ―     ― = ―     ― = ―\n3   6     3   9     3   12\n↑         ↑         ↑\n× 2       × 3       × 4\n\n🔑 Her iki tarafı aynı sayıyla çarp!',
            audio: 'Pay ve paydayı aynı sayıyla çarpınca kesrin değeri değişmez, sadece görünüşü değişir!',
            example: {
              question: '2/5 kesrinin paydasını 15 yap.',
              answer: '6/15',
              explanation: '5 × 3 = 15, o halde 2 × 3 = 6. Yani 2/5 = 6/15!'
            }
          },
          {
            title: 'Sadeleştirme (Bölme)',
            content: 'Pay ve paydayı AYNI sayı ile bölerek denk kesir bulunur. Bu işlem kesri basitleştirir.',
            visual: '📐 Sadeleştirme Kuralı:\n\n÷ 2       ÷ 3       ÷ 4\n↓         ↓         ↓\n6   3     9   3     12  3\n― = ―     ― = ―     ―― = ―\n8   4     12  4     16  4\n↑         ↑         ↑\n÷ 2       ÷ 3       ÷ 4\n\n🔑 Her iki tarafı aynı sayıya böl!',
            audio: 'Pay ve paydayı aynı sayıya bölünce kesrin değeri değişmez, sadece daha basit hale gelir!',
            example: {
              question: '12/18 kesrini sadeleştir.',
              answer: '2/3',
              explanation: '12 ve 18\'in OBEB\'i 6. 12 ÷ 6 = 2, 18 ÷ 6 = 3. Yani 12/18 = 2/3!'
            }
          },
          {
            title: 'En Sade Hali',
            content: 'Bir kesrin en sade hali, pay ve paydanın ortak böleni yalnızca 1 olduğu durumdur. Yani daha fazla sadeleştirilemez.',
            visual: '📝 En Sade Hale Getirme:\n\n24/36 → 12/18 → 6/9 → 2/3 ✓\n      ÷2      ÷2     ÷3\n\nKısa Yol: OBEB ile böl!\n24/36 → 2/3 (OBEB = 12)\n      ÷12\n\n2/3 EN SADE HAL (2 ve 3 aralarında asal)',
            audio: 'En sade halini bulmak için pay ve paydayı ortak bölenlerine böl. Aralarında asal olunca en sade haldir!',
            example: {
              question: '15/25 kesrinin en sade hali nedir?',
              answer: '3/5',
              explanation: 'OBEB = 5. 15 ÷ 5 = 3, 25 ÷ 5 = 5. En sade hal: 3/5!'
            }
          },
          {
            title: 'Denk Kesir Bulma Yöntemleri',
            content: 'Verilen bir kesre denk kesir bulmak için genişletme veya sadeleştirme kullanılır. İstenen paydaya göre çarpan belirlenir.',
            visual: '🎯 Denk Kesir Bulma:\n\nSoru: 3/4 = ?/20\n\nAdım 1: 4 × ? = 20\n        4 × 5 = 20 ✓\n\nAdım 2: 3 × 5 = 15\n\nCevap: 3/4 = 15/20 ✓\n\n📌 İpucu: Paydaları karşılaştır, çarpanı bul!',
            audio: 'Önce paydalara bak, çarpanı bul. Sonra aynı çarpanı paya uygula!',
            example: {
              question: '2/3 = ?/12 denkleminde ? kaçtır?',
              answer: '8',
              explanation: '3 × 4 = 12, o halde 2 × 4 = 8. Yani 2/3 = 8/12!'
            }
          },
          {
            title: 'Denk Kesirleri Model ile Gösterme',
            content: 'Denk kesirler modeller üzerinde aynı alanı kaplar. Farklı bölünmüş olsalar da eşit büyüklüktedirler.',
            visual: '🎨 Model Gösterimi:\n\n[████████░░░░░░░░] 1/2\n\n[████░░░░████░░░░] 2/4\n\n[██░░██░░██░░██░░] 4/8\n\n✓ Hepsi aynı alan = Yarım!\n\n🔑 Rengli kısımlar eşit büyüklükte',
            audio: 'Model üzerinde denk kesirler her zaman aynı alanı kaplar. Parça sayısı farklı olsa da toplam alan aynıdır!',
            example: {
              question: 'Bir dikdörtgenin 3/6\'sı boyandı. Bu 1/2\'ye eşit mi?',
              answer: 'Evet, eşit',
              explanation: '3/6 = 3÷3/6÷3 = 1/2. Her ikisi de yarımı gösterir!'
            }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '3/4 = ?/12', options: ['6', '8', '9', '10'], correctAnswer: '9', explanation: '4 × 3 = 12, yani 3 × 3 = 9!' },
          { type: 'fill-blank', question: '6/9 en sade hali = ___', correctAnswer: '2/3', explanation: '6 ÷ 3 = 2, 9 ÷ 3 = 3. En sade hal: 2/3!' },
          { type: 'multiple-choice', question: 'Hangisi 1/2\'ye denktir?', options: ['3/5', '4/8', '5/9', '6/11'], correctAnswer: '4/8', explanation: '4/8 = 4÷4/8÷4 = 1/2 ✓' },
          { type: 'fill-blank', question: '2/5 = ___/15', correctAnswer: '6', explanation: '5 × 3 = 15, yani 2 × 3 = 6!' },
          { type: 'multiple-choice', question: '8/12 kesrinin en sade hali?', options: ['4/6', '2/3', '1/2', '3/4'], correctAnswer: '2/3', explanation: '8 ÷ 4 = 2, 12 ÷ 4 = 3. En sade: 2/3!' },
          { type: 'fill-blank', question: '5/6 = ___/18', correctAnswer: '15', explanation: '6 × 3 = 18, yani 5 × 3 = 15!' },
          { type: 'multiple-choice', question: 'Hangisi en sade halde DEĞİLDİR?', options: ['3/4', '5/7', '6/9', '2/5'], correctAnswer: '6/9', explanation: '6/9 = 2/3 yapılabilir, diğerleri en sade!' },
          { type: 'fill-blank', question: '12/16 = 3/___', correctAnswer: '4', explanation: '12 ÷ 4 = 3, 16 ÷ 4 = 4. Yani 12/16 = 3/4!' },
          { type: 'multiple-choice', question: '4/5 = 20/?', options: ['20', '25', '30', '35'], correctAnswer: '25', explanation: '4 × 5 = 20, yani 5 × 5 = 25!' },
          { type: 'fill-blank', question: '18/24 en sade = ___', correctAnswer: '3/4', explanation: 'OBEB = 6. 18÷6 = 3, 24÷6 = 4. En sade: 3/4!' }
        ]
      }
    },
    {
      id: 'grade4-tema2-konu3',
      title: 'Kesirleri Karşılaştırma',
      description: 'Kesirlerin büyüklük-küçüklük ilişkisini keşfedelim!',
      emoji: '📊',
      duration: '50 dk',
      difficulty: 2,
      keywords: ['karşılaştırma', 'büyük', 'küçük', 'eşit', 'birim kesir', 'sıralama'],
      content: {
        introduction: 'Bugün kesirleri karşılaştırmayı öğreneceksin! Hangi kesir daha büyük? 3/4 mü yoksa 2/3 mü? Hadi bu sorunun cevabını bulalım!',
        motivationQuote: 'Büyüğü bul, doğru seç! Karşılaştırma matematik gücüdür! 📊',
        funFacts: [
          'Birim kesirlerde payda büyükse kesir küçüktür: 1/10 < 1/5 < 1/2!',
          'Markette indirimleri karşılaştırırken kesir bilgisi işe yarar!',
          'Yarım (1/2) kesirler dünyasının referans noktasıdır!'
        ],
        steps: [
          {
            title: 'Birim Kesirleri Karşılaştırma',
            content: 'Birim kesirler (payı 1 olan) karşılaştırılırken payda küçük olan kesir büyüktür. Çünkü daha az parçaya bölünmüş bütünün parçaları daha büyüktür.',
            visual: '🍕 Birim Kesir Karşılaştırma:\n\n1/2 [████░░░░] → 2 parça, büyük dilim\n1/4 [██░░░░░░] → 4 parça, küçük dilim\n1/8 [█░░░░░░░] → 8 parça, daha küçük\n\n1/2 > 1/4 > 1/8\n\n🔑 Payda ↑ = Kesir ↓',
            audio: 'Birim kesirlerde payda ne kadar büyükse, kesir o kadar küçüktür. Çok parça demek küçük parça demektir!',
            example: {
              question: '1/6 ve 1/9 kesirlerinden hangisi büyük?',
              answer: '1/6 > 1/9',
              explanation: '6 < 9 olduğu için 1/6 > 1/9. Altıya bölünen parça dokuzdan büyük!'
            }
          },
          {
            title: 'Aynı Paydada Karşılaştırma',
            content: 'Paydalar aynı olduğunda, payı büyük olan kesir büyüktür. Çünkü aynı büyüklükteki parçalardan daha fazla alınmıştır.',
            visual: '🎯 Aynı Payda Karşılaştırma:\n\n3/8 [███░░░░░] → 3 parça\n5/8 [█████░░░] → 5 parça\n7/8 [███████░] → 7 parça\n\n3/8 < 5/8 < 7/8\n\n🔑 Payda aynı → Paya bak!',
            audio: 'Paydalar eşit olduğunda sadece paylara bakarız. Pay büyükse kesir büyüktür!',
            example: {
              question: '4/11 ○ 7/11 karşılaştır.',
              answer: '4/11 < 7/11',
              explanation: 'Paydalar eşit (11), paylar: 4 < 7. Yani 4/11 < 7/11!'
            }
          },
          {
            title: 'Aynı Payda Karşılaştırma',
            content: 'Paylar aynı olduğunda, paydası küçük olan kesir büyüktür. Çünkü daha az parçaya bölünen bütünün parçası daha büyüktür.',
            visual: '🎯 Aynı Pay Karşılaştırma:\n\n3/4 [███░] → dörtte üç (büyük parça)\n3/5 [███░░] → beşte üç (orta parça)\n3/8 [███░░░░░] → sekizde üç (küçük parça)\n\n3/4 > 3/5 > 3/8\n\n🔑 Pay aynı → Payda küçükse kesir büyük!',
            audio: 'Paylar eşit olduğunda paydaya bakarız. Payda küçükse parça büyük, kesir büyük!',
            example: {
              question: '5/6 ○ 5/9 karşılaştır.',
              answer: '5/6 > 5/9',
              explanation: 'Paylar eşit (5), paydalar: 6 < 9. Payda küçükse kesir büyük!'
            }
          },
          {
            title: 'Paydaları Eşitleme Yöntemi',
            content: 'Farklı payda ve paya sahip kesirler karşılaştırılırken önce paydalar eşitlenir (denk kesir bulunur), sonra paylar karşılaştırılır.',
            visual: '📝 Örnek: 2/3 ○ 3/4\n\nAdım 1: Ortak payda bul (3×4 = 12)\nAdım 2: Denk kesirleri yaz\n   2/3 = 8/12 (×4)\n   3/4 = 9/12 (×3)\nAdım 3: Karşılaştır\n   8/12 < 9/12\n\nSonuç: 2/3 < 3/4 ✓',
            audio: 'Paydaları farklı kesirleri karşılaştırmak için önce paydaları eşitle, sonra paylara bak!',
            example: {
              question: '3/5 ○ 2/3 karşılaştır.',
              answer: '3/5 < 2/3',
              explanation: 'Ortak payda 15: 3/5 = 9/15, 2/3 = 10/15. 9 < 10 olduğu için 3/5 < 2/3!'
            }
          },
          {
            title: '1 ve 1/2 ile Karşılaştırma',
            content: '1 ve 1/2 referans noktası olarak kullanılabilir. Pay = Payda ise kesir = 1. Pay > Payda×1/2 ise kesir > 1/2.',
            visual: '🎯 Referans Noktaları:\n\n       0        1/2        1\n       |---------|----------|----→\n\n✓ 3/5 → 3 > 5÷2=2.5 → 1/2\'den büyük\n✓ 7/8 → 7 < 8 → 1\'den küçük\n✓ 9/8 → 9 > 8 → 1\'den büyük\n✓ 2/5 → 2 < 5÷2=2.5 → 1/2\'den küçük',
            audio: 'Yarım ve tam sayılar referans noktasıdır. Bunlara göre kesrin konumu belirlenir!',
            example: {
              question: '5/9 kesri 1/2\'den büyük mü küçük mü?',
              answer: '1/2\'den büyük',
              explanation: '1/2 = 4.5/9. 5 > 4.5 olduğu için 5/9 > 1/2!'
            }
          },
          {
            title: 'Kesirleri Sıralama',
            content: 'Birden fazla kesri sıralamak için hepsini aynı paydaya getir, sonra paylara göre sırala.',
            visual: '📝 Örnek: 1/2, 2/3, 3/4 sırala (büyükten küçüğe)\n\nOrtak payda: 12\n1/2 = 6/12\n2/3 = 8/12\n3/4 = 9/12\n\nSıralama: 9/12 > 8/12 > 6/12\n\nSonuç: 3/4 > 2/3 > 1/2 ✓',
            audio: 'Birden fazla kesri sıralamak için hepsini aynı paydaya getir, sonra paylara bak!',
            example: {
              question: '2/5, 1/3, 3/10 kesirlerini küçükten büyüğe sırala.',
              answer: '1/3 < 3/10 < 2/5',
              explanation: 'Ortak payda 30: 2/5=12/30, 1/3=10/30, 3/10=9/30. Sıra: 9<10<12!'
            }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '1/5 ○ 1/3', options: ['<', '>', '='], correctAnswer: '<', explanation: '5 > 3, yani 1/5 < 1/3!' },
          { type: 'fill-blank', question: '7/12 ___ 5/12', correctAnswer: '>', explanation: 'Paydalar eşit, paylar: 7 > 5!' },
          { type: 'multiple-choice', question: 'Hangisi en büyük?', options: ['1/4', '1/3', '1/5', '1/6'], correctAnswer: '1/3', explanation: 'Payda en küçük olan en büyük birim kesirdir!' },
          { type: 'fill-blank', question: '4/7 ___ 4/9', correctAnswer: '>', explanation: 'Paylar eşit (4), 7 < 9, yani 4/7 > 4/9!' },
          { type: 'multiple-choice', question: '3/4 ○ 5/6', options: ['<', '>', '='], correctAnswer: '<', explanation: '3/4=9/12, 5/6=10/12. 9 < 10!' },
          { type: 'fill-blank', question: '5/8 ___ 1/2', correctAnswer: '>', explanation: '1/2 = 4/8, 5/8 > 4/8!' },
          { type: 'multiple-choice', question: '7/10 ○ 2/3', options: ['<', '>', '='], correctAnswer: '>', explanation: '7/10=21/30, 2/3=20/30. 21 > 20!' },
          { type: 'fill-blank', question: '8/5 ___ 1', correctAnswer: '>', explanation: '8 > 5, bileşik kesir = 1\'den büyük!' },
          { type: 'multiple-choice', question: '2/5, 1/2, 3/10 küçükten büyüğe sırası?', options: ['3/10, 2/5, 1/2', '3/10, 1/2, 2/5', '1/2, 2/5, 3/10', '2/5, 3/10, 1/2'], correctAnswer: '3/10, 2/5, 1/2', explanation: '3/10=3/10, 2/5=4/10, 1/2=5/10. 3<4<5!' },
          { type: 'fill-blank', question: '3/7 ___ 1/2', correctAnswer: '<', explanation: '1/2 = 3.5/7, 3 < 3.5!' }
        ]
      }
    },
    {
      id: 'grade4-tema2-konu4',
      title: 'Kesirlerle Toplama ve Çıkarma',
      description: 'Paydası eşit kesirlerle işlem yapmayı öğrenelim!',
      emoji: '➕',
      duration: '55 dk',
      difficulty: 2,
      keywords: ['toplama', 'çıkarma', 'aynı payda', 'kesir işlemi', 'sadeleştirme'],
      content: {
        introduction: 'Bugün paydaları eşit kesirlerle toplama ve çıkarma yapmayı öğreneceksin! Pizza dilimlerini toplamak, kek paylaşmak - hepsi kesir işlemi!',
        motivationQuote: 'Payda aynı, işlem kolay! Kesirlerle hesap yapmak çok eğlenceli! ➕',
        funFacts: [
          'Tarifler hazırlarken sürekli kesir işlemi yaparız!',
          'Müzik notalarının süreleri kesir toplamıyla hesaplanır!',
          'Eski Mısırlılar kesir toplamak için tablolar kullanırdı!'
        ],
        steps: [
          {
            title: 'Aynı Paydada Toplama',
            content: 'Paydalar aynı olduğunda paylar toplanır, payda değişmez.',
            visual: '🍕 Kesir Toplama:\n\n  2     3     2+3     5\n ─── + ─── = ───── = ───\n  7     7      7      7\n\n[██░░░░░] + [███░░░░] = [█████░░]\n 2 dilim  +  3 dilim  =  5 dilim\n\n🔑 Kural: Payları topla, payda aynı!',
            audio: 'Paydalar aynıysa payları topla, paydayı değiştirme! İki yedide artı üç yedide eşittir beş yedide!',
            example: {
              question: '4/9 + 3/9 = ?',
              answer: '7/9',
              explanation: 'Payları topla: 4 + 3 = 7. Payda aynı: 9. Sonuç: 7/9!'
            }
          },
          {
            title: 'Aynı Paydada Çıkarma',
            content: 'Paydalar aynı olduğunda paylar çıkarılır, payda değişmez.',
            visual: '🍕 Kesir Çıkarma:\n\n  7     4     7-4     3\n ─── - ─── = ───── = ───\n  8     8      8      8\n\n[███████░] - [████░░░░] = [███░░░░░]\n 7 dilim  -  4 dilim  =  3 dilim\n\n🔑 Kural: Payları çıkar, payda aynı!',
            audio: 'Paydalar aynıysa payları çıkar, paydayı değiştirme! Yedi sekizde eksi dört sekizde eşittir üç sekizde!',
            example: {
              question: '8/11 - 5/11 = ?',
              answer: '3/11',
              explanation: 'Payları çıkar: 8 - 5 = 3. Payda aynı: 11. Sonuç: 3/11!'
            }
          },
          {
            title: 'Sonucu Sadeleştirme',
            content: 'İşlem sonucunda elde edilen kesir sadeleştirilebilirse, en sade haline getirilir.',
            visual: '📝 Sadeleştirme Örneği:\n\n  3     3     6      6÷2     3\n ─── + ─── = ─── = ───── = ───\n  8     8     8      8÷2     4\n\nKontrol: 6 ve 8 ortak böleni 2\n6 ÷ 2 = 3, 8 ÷ 2 = 4\n\n✓ En sade hal: 3/4',
            audio: 'İşlem bittikten sonra sonucu sadeleştirebilir misin kontrol et! En sade hali bul!',
            example: {
              question: '2/10 + 4/10 = ?',
              answer: '6/10 = 3/5',
              explanation: 'Payları topla: 2+4=6. Sonuç 6/10. Sadeleştir: 6÷2=3, 10÷2=5. En sade: 3/5!'
            }
          },
          {
            title: 'Bileşik Sonuç (1\'i Geçen)',
            content: 'Toplama sonucu 1\'i geçerse (pay ≥ payda), sonuç bileşik kesir olur ve tam sayılı kesre dönüştürülür.',
            visual: '📝 Bileşik Sonuç:\n\n  5     4     9\n ─── + ─── = ─── = 1²/₇\n  7     7     7\n\n9 ÷ 7 = 1 kalan 2\n\n✓ 9/7 = 1 tam 2/7\n\n🔑 Pay ≥ Payda → Tam sayılı yaz!',
            audio: 'Toplama sonucu 1\'i geçerse bileşik kesir olur. Bunu tam sayılı kesir olarak yaz!',
            example: {
              question: '5/6 + 4/6 = ?',
              answer: '9/6 = 1 3/6 = 1 1/2',
              explanation: '5+4=9, 9/6 bileşik kesir. 9÷6=1 kalan 3. Sonuç 1 3/6 = 1 1/2!'
            }
          },
          {
            title: 'Tam Sayılı Kesirlerle İşlem',
            content: 'Tam sayılı kesirlerle işlem yapmak için önce bileşik kesre çevir, işlemi yap, sonra tam sayılı kesre dönüştür.',
            visual: '📝 Örnek: 2¹/₅ + ³/₅ = ?\n\nAdım 1: 2¹/₅ = (2×5+1)/5 = 11/5\nAdım 2: 11/5 + 3/5 = 14/5\nAdım 3: 14 ÷ 5 = 2 kalan 4\n\n✓ Sonuç: 14/5 = 2⁴/₅',
            audio: 'Tam sayılı kesirle işlem yapmak için önce bileşiğe çevir, işlemi yap, sonra tam sayılıya dön!',
            example: {
              question: '1 3/4 + 2/4 = ?',
              answer: '2 1/4',
              explanation: '1 3/4 = 7/4. 7/4 + 2/4 = 9/4. 9÷4=2 kalan 1. Sonuç: 2 1/4!'
            }
          },
          {
            title: 'Problem Çözme',
            content: 'Günlük hayat problemlerinde kesir işlemleri çok kullanılır. Problemi dikkatli oku ve doğru işlemi belirle.',
            visual: '📝 Problem:\nBir pizzanın 3/8\'ini Ali,\n2/8\'ini Ayşe yedi.\nToplam ne kadar yediler?\n\n  3     2     5\n ─── + ─── = ───\n  8     8     8\n\n✓ Toplam 5/8 pizza yediler.\n\nKalan = 8/8 - 5/8 = 3/8 pizza',
            audio: 'Problemleri dikkatli oku. Toplam bulunacaksa topla, kalan bulunacaksa çıkar!',
            example: {
              question: 'Bir su şişesinin 5/12\'si sabah, 4/12\'si akşam içildi. Ne kadar su kaldı?',
              answer: '3/12 = 1/4',
              explanation: 'İçilen: 5/12+4/12=9/12. Kalan: 12/12-9/12=3/12=1/4 su kaldı!'
            }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '3/7 + 2/7 = ?', options: ['5/7', '5/14', '1/7', '6/7'], correctAnswer: '5/7', explanation: 'Payları topla: 3+2=5. Payda aynı: 7. Sonuç: 5/7!' },
          { type: 'fill-blank', question: '9/10 - 3/10 = ___', correctAnswer: '6/10 veya 3/5', explanation: '9-3=6. 6/10 sadeleşir: 3/5!' },
          { type: 'multiple-choice', question: '5/8 + 5/8 = ?', options: ['10/16', '10/8', '1 2/8', 'B ve C'], correctAnswer: 'B ve C', explanation: '5+5=10. 10/8 = 1 2/8 = 1 1/4!' },
          { type: 'fill-blank', question: '4/9 + 5/9 = ___ = 1', correctAnswer: '9/9', explanation: '4+5=9. 9/9 = 1!' },
          { type: 'multiple-choice', question: '7/12 - 1/12 = ? (en sade)', options: ['6/12', '1/2', '3/6', 'Hepsi'], correctAnswer: 'Hepsi', explanation: '6/12 = 1/2 = 3/6 hepsi denk!' },
          { type: 'fill-blank', question: '2 1/5 + 3/5 = ___ ___/5', correctAnswer: '2 4', explanation: '11/5 + 3/5 = 14/5 = 2 4/5!' },
          { type: 'multiple-choice', question: '4/6 + 3/6 = ?', options: ['7/6', '7/12', '1 1/6', 'A ve C'], correctAnswer: 'A ve C', explanation: '4+3=7. 7/6 = 1 1/6!' },
          { type: 'fill-blank', question: '3 2/7 - 4/7 = ___ ___/7', correctAnswer: '2 5', explanation: '23/7 - 4/7 = 19/7 = 2 5/7!' },
          { type: 'multiple-choice', question: 'Pizza 8 dilim. 3 dilim sabah, 2 dilim akşam yenildi. Kalan kesir?', options: ['5/8', '3/8', '1/2', '2/8'], correctAnswer: '3/8', explanation: 'Yenen: 3+2=5. Kalan: 8-5=3. 3/8 kaldı!' },
          { type: 'fill-blank', question: '5/6 + 4/6 - 3/6 = ___/6 = 1', correctAnswer: '6', explanation: '5+4-3=6. 6/6=1!' }
        ]
      }
    },
    {
      id: 'grade4-tema2-konu5',
      title: 'Uzunluk ve Kütle Dönüşümleri',
      description: 'Birimler arası dönüşüm yaparak ölçüm uzmanı olalım!',
      emoji: '📏',
      duration: '55 dk',
      difficulty: 2,
      keywords: ['uzunluk', 'kütle', 'dönüşüm', 'kilometre', 'metre', 'santimetre', 'ton', 'kilogram', 'gram'],
      content: {
        introduction: 'Bugün uzunluk ve kütle birimlerini kendi aralarında dönüştürmeyi öğreneceksin! Kilometre, metre, santimetre; ton, kilogram, gram... Hepsini birbirine çevirebileceksin!',
        motivationQuote: 'Birimi değiştir, değeri koru! Ölçü birimlerinin ustası ol! 📏',
        funFacts: [
          'Metrik sistem 1795\'te Fransa\'da icat edildi!',
          'Uzayda mesafeler ışık yılıyla ölçülür: 1 ışık yılı = 9,461 trilyon kilometre!',
          'Dünyanın en ağır canlısı mavi balina yaklaşık 200 ton ağırlığındadır!'
        ],
        steps: [
          {
            title: 'Uzunluk Birimleri Hiyerarşisi',
            content: 'Uzunluk birimleri küçükten büyüğe: milimetre (mm), santimetre (cm), desimetre (dm), metre (m), kilometre (km).',
            visual: '📏 Uzunluk Birimleri:\n\nmm ← cm ← dm ← m ← km\n×10  ×10  ×10  ×1000\n\n10 mm = 1 cm\n10 cm = 1 dm\n10 dm = 1 m (100 cm = 1 m)\n1000 m = 1 km\n\n🔑 Her adım 10 kat, km→m 1000 kat!',
            audio: 'Uzunluk birimleri arasında her adım 10 kat, kilometre ile metre arası 1000 kattır!',
            example: {
              question: '5 m kaç cm\'dir?',
              answer: '500 cm',
              explanation: '1 m = 100 cm, yani 5 × 100 = 500 cm!'
            }
          },
          {
            title: 'Kilometre ve Metre Dönüşümü',
            content: '1 km = 1000 m. Km\'den m\'ye: 1000 ile çarp. M\'den km\'ye: 1000\'e böl.',
            visual: '🛣️ Kilometre ↔ Metre:\n\n          ×1000\n    km ─────────→ m\n       ←─────────\n          ÷1000\n\nÖrnekler:\n3 km = 3 × 1000 = 3000 m\n4500 m = 4500 ÷ 1000 = 4,5 km\n2,5 km = 2500 m',
            audio: 'Kilometreyi metreye çevirmek için bin ile çarp. Metreyi kilometreye çevirmek için bine böl!',
            example: {
              question: '7250 m kaç km\'dir?',
              answer: '7,25 km',
              explanation: '7250 ÷ 1000 = 7,25 km!'
            }
          },
          {
            title: 'Metre, Desimetre, Santimetre',
            content: '1 m = 10 dm = 100 cm. 1 dm = 10 cm.',
            visual: '📐 Metre Alt Birimleri:\n\n1 m = 10 dm = 100 cm = 1000 mm\n\n      ×10       ×10       ×10\n m ───────→ dm ───────→ cm ───────→ mm\n   ←───────    ←───────    ←───────\n      ÷10       ÷10       ÷10\n\nÖrnek: 2,5 m = 25 dm = 250 cm',
            audio: 'Bir metre on desimetre, yüz santimetre, bin milimetredir!',
            example: {
              question: '45 dm kaç m\'dir?',
              answer: '4,5 m',
              explanation: '45 ÷ 10 = 4,5 m!'
            }
          },
          {
            title: 'Kütle Birimleri Hiyerarşisi',
            content: 'Kütle birimleri küçükten büyüğe: miligram (mg), gram (g), kilogram (kg), ton (t).',
            visual: '⚖️ Kütle Birimleri:\n\nmg ← g ← kg ← t\n×1000 ×1000 ×1000\n\n1000 mg = 1 g\n1000 g = 1 kg\n1000 kg = 1 t\n\n🔑 Her adım 1000 kat!',
            audio: 'Kütle birimlerinde her adım bin kattır. Bin miligram bir gram, bin gram bir kilogram, bin kilogram bir ton!',
            example: {
              question: '3 kg kaç g\'dir?',
              answer: '3000 g',
              explanation: '1 kg = 1000 g, yani 3 × 1000 = 3000 g!'
            }
          },
          {
            title: 'Ton ve Kilogram Dönüşümü',
            content: '1 ton = 1000 kg. Ton\'dan kg\'a: 1000 ile çarp. Kg\'dan ton\'a: 1000\'e böl.',
            visual: '🏋️ Ton ↔ Kilogram:\n\n         ×1000\n    t ─────────→ kg\n      ←─────────\n         ÷1000\n\nÖrnekler:\n2 t = 2 × 1000 = 2000 kg\n5500 kg = 5500 ÷ 1000 = 5,5 t\n1,25 t = 1250 kg',
            audio: 'Tonu kilograma çevirmek için bin ile çarp. Kilogramı tona çevirmek için bine böl!',
            example: {
              question: '3750 kg kaç ton\'dur?',
              answer: '3,75 t',
              explanation: '3750 ÷ 1000 = 3,75 ton!'
            }
          },
          {
            title: 'Karışık Birim İşlemleri',
            content: 'Farklı birimlerle işlem yaparken önce aynı birime çevir, sonra işlemi yap.',
            visual: '📝 Örnek: 2 km 500 m + 1500 m = ?\n\nYöntem 1 (metre):\n2 km 500 m = 2500 m\n2500 m + 1500 m = 4000 m = 4 km\n\nYöntem 2 (km):\n1500 m = 1,5 km\n2,5 km + 1,5 km = 4 km\n\n✓ Sonuç: 4 km',
            audio: 'Farklı birimleri toplamak için önce aynı birime çevir, sonra topla!',
            example: {
              question: '3 kg 200 g + 800 g = ?',
              answer: '4 kg veya 4000 g',
              explanation: '3 kg 200 g = 3200 g. 3200 + 800 = 4000 g = 4 kg!'
            }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '4 km = ? m', options: ['40', '400', '4000', '40000'], correctAnswer: '4000', explanation: '4 × 1000 = 4000 m!' },
          { type: 'fill-blank', question: '2500 g = ___ kg ___g', correctAnswer: '2 500', explanation: '2500 ÷ 1000 = 2 kalan 500!' },
          { type: 'multiple-choice', question: '3 t = ? kg', options: ['30', '300', '3000', '30000'], correctAnswer: '3000', explanation: '3 × 1000 = 3000 kg!' },
          { type: 'fill-blank', question: '65 dm = ___ m ___ dm', correctAnswer: '6 5', explanation: '65 ÷ 10 = 6 kalan 5!' },
          { type: 'multiple-choice', question: '1,5 km + 800 m = ? m', options: ['1580', '2300', '2800', '8150'], correctAnswer: '2300', explanation: '1500 + 800 = 2300 m!' },
          { type: 'fill-blank', question: '4 kg 750 g = ___ g', correctAnswer: '4750', explanation: '4000 + 750 = 4750 g!' },
          { type: 'multiple-choice', question: '350 cm = ? m', options: ['3,5', '35', '0,35', '350'], correctAnswer: '3,5', explanation: '350 ÷ 100 = 3,5 m!' },
          { type: 'fill-blank', question: '2,5 t = ___ kg', correctAnswer: '2500', explanation: '2,5 × 1000 = 2500 kg!' },
          { type: 'multiple-choice', question: '2 m 45 cm = ? cm', options: ['247', '245', '2045', '2450'], correctAnswer: '245', explanation: '200 + 45 = 245 cm!' },
          { type: 'fill-blank', question: '6200 m = ___ km ___ m', correctAnswer: '6 200', explanation: '6200 ÷ 1000 = 6 kalan 200!' }
        ]
      }
    }
  ]
};
