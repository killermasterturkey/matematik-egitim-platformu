// 4. SINIF - TEMA 1 - KONU 2: Sayıları Karşılaştırma ve Sıralama
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu2SayiKarsilastirma: Topic = {
  id: 'sayi-karsilastirma-siralama',
  title: 'Sayıları Karşılaştırma ve Sıralama',
  description: 'Büyük sayıları karşılaştırma, sıralama ve sayı doğrusunda gösterme',
  emoji: '⚖️',
  duration: '45 dk',
  difficulty: 2,
  keywords: ['karşılaştırma', 'sıralama', 'büyük', 'küçük', 'eşit', 'sayı doğrusu'],
  objectives: [
    'Altı basamaklı sayıları karşılaştırır',
    'Sayıları küçükten büyüğe ve büyükten küçüğe sıralar',
    'Sayıları sayı doğrusunda gösterir',
    'İki sayı arasındaki sayıları bulur'
  ],
  content: {
    introduction: `Merhaba! ⚖️

Bugün büyük sayıları karşılaştırmayı öğreneceğiz. Hangi şehirde daha çok insan yaşıyor? Hangi araba daha fazla yol yapmış? Bu soruların cevapları için sayıları karşılaştırmalıyız!

Karşılaştırma sembolleri:
• > (büyüktür)
• < (küçüktür)
• = (eşittir)

Hazır mısın? Sayıları yarıştırmaya başlayalım! 🏁`,

    motivationQuote: 'Karşılaştırma yapmak, doğru karar vermenin ilk adımıdır! ⚖️',

    funFacts: [
      'En büyük sayının sonu yoktur - sonsuzdur! ∞',
      'Sıfır, ne pozitif ne negatiftir!',
      'Sayı karşılaştırma bilgisayarların temel işlemlerinden biridir!',
      'Antik Mısırlılar da sayıları karşılaştırmak için semboller kullanırdı!'
    ],

    steps: [
      createStep(
        'Karşılaştırma Sembolleri',
        `Sayıları karşılaştırmak için 3 sembol kullanırız:

➤ BÜYÜKTÜR ( > )
5 > 3 → "5, 3'ten büyüktür"
500.000 > 400.000 → "500.000, 400.000'den büyüktür"

➤ KÜÇÜKTÜR ( < )
3 < 5 → "3, 5'ten küçüktür"
200.000 < 300.000 → "200.000, 300.000'den küçüktür"

➤ EŞİTTİR ( = )
5 = 5 → "5, 5'e eşittir"
250.000 = 250.000 → "250.000, 250.000'e eşittir"

💡 İPUCU: Sembolün sivri ucu küçük sayıya, açık tarafı büyük sayıya bakar!
< küçük büyük
> büyük küçük`,
        'Sivri uç küçük sayıya bakar!',
        {
          visual: `     <
   küçük  büyük

     >
   büyük  küçük

🐊 Timsah büyük sayıyı yer!
5 < 8 → Timsah 8'i yer
8 > 5 → Timsah 8'i yer`,
          tip: 'Timsah ağzını büyük sayıya açar!',
          examples: [
            createExample(
              '345.678 ☐ 456.789 - Kutuya hangi sembol gelir?',
              '<',
              '345.678 küçük, 456.789 büyük. Sivri uç küçüğe bakar!',
              '345.678 < 456.789',
              ['İki sayıyı karşılaştır', '345.678 daha küçük', 'Küçük < Büyük', 'Sembol: <']
            ),
            createExample(
              '800.000 ☐ 750.000 - Kutuya hangi sembol gelir?',
              '>',
              '800.000 büyük, 750.000 küçük. Açık taraf büyüğe bakar!',
              '800.000 > 750.000',
              ['İki sayıyı karşılaştır', '800.000 daha büyük', 'Büyük > Küçük', 'Sembol: >']
            )
          ]
        }
      ),

      createStep(
        'Karşılaştırma Kuralları',
        `Büyük sayıları karşılaştırırken şu kuralları uygula:

📏 KURAL 1: Basamak Sayısına Bak
Daha çok basamaklı sayı daha büyüktür!
• 123.456 > 99.999 (6 basamak > 5 basamak)

📏 KURAL 2: Soldan Başla
Basamak sayısı aynıysa soldan başlayarak karşılaştır!
• 567.890 ☐ 568.123
• Sol basamak: 5 = 5 ✓
• İkinci basamak: 6 = 6 ✓
• Üçüncü basamak: 7 < 8 ❌
• Sonuç: 567.890 < 568.123

📏 KURAL 3: İlk Farklı Basamak
İlk farklı basamaktaki rakamlar sonucu belirler!`,
        'Önce basamak sayısı, sonra soldan karşılaştırma!',
        {
          visual: `Karşılaştırma Adımları:

1. Basamak sayısını kontrol et
   654.321 (6) vs 87.654 (5)
   → 654.321 BÜYÜK!

2. Eşit basamaksa soldan başla
   456.789 vs 457.123
   4 = 4 ✓
   5 = 5 ✓
   6 < 7 ❌
   → 456.789 KÜÇÜK!`,
          examples: [
            createExample(
              '234.567 ve 234.589 sayılarını karşılaştır.',
              '234.567 < 234.589',
              'İlk 4 basamak aynı (2345), 5. basamakta 6 < 8',
              '234.567 ☐ 234.589',
              ['Basamak sayısı: 6 = 6', 'Soldan başla: 2=2, 3=3, 4=4, 5=5', '5. basamak: 6 < 8', 'Sonuç: 234.567 < 234.589']
            ),
            createExample(
              '99.999 ve 100.000 sayılarını karşılaştır.',
              '99.999 < 100.000',
              '99.999 beş basamaklı, 100.000 altı basamaklı. Daha çok basamak = daha büyük!',
              '5 basamak < 6 basamak',
              ['99.999: 5 basamak', '100.000: 6 basamak', '5 < 6 basamak', 'Sonuç: 99.999 < 100.000']
            )
          ]
        }
      ),

      createStep(
        'Küçükten Büyüğe Sıralama (Artan)',
        `Sayıları küçükten büyüğe sıralamak = ARTAN SIRALAMA

Örnek: 456.789, 123.456, 789.012, 234.567 sayılarını sırala

1️⃣ En küçüğü bul: 123.456 ✓
2️⃣ Sonraki en küçük: 234.567 ✓
3️⃣ Sonraki: 456.789 ✓
4️⃣ En büyük: 789.012 ✓

Artan sıralama: 123.456 < 234.567 < 456.789 < 789.012

💡 Ok ile gösterme: → → → →
123.456 → 234.567 → 456.789 → 789.012`,
        'Küçükten büyüğe = Artan = Tırmanış gibi!',
        {
          visual: `ARTAN SIRALAMA (Küçük → Büyük)

     789.012 ▲
    /
   456.789 ▲
  /
 234.567 ▲
/
123.456 ▲ (Başlangıç - En küçük)`,
          tip: 'Artan sıralama için en küçükle başla!',
          examples: [
            createExample(
              '567.890, 345.678, 678.901, 456.789 sayılarını küçükten büyüğe sırala.',
              '345.678 < 456.789 < 567.890 < 678.901',
              'En küçükten başla ve sırayla yaz.',
              '345.678 → 456.789 → 567.890 → 678.901',
              ['En küçük: 345.678', 'Sonraki: 456.789', 'Sonraki: 567.890', 'En büyük: 678.901']
            )
          ]
        }
      ),

      createStep(
        'Büyükten Küçüğe Sıralama (Azalan)',
        `Sayıları büyükten küçüğe sıralamak = AZALAN SIRALAMA

Örnek: 456.789, 123.456, 789.012, 234.567 sayılarını sırala

1️⃣ En büyüğü bul: 789.012 ✓
2️⃣ Sonraki en büyük: 456.789 ✓
3️⃣ Sonraki: 234.567 ✓
4️⃣ En küçük: 123.456 ✓

Azalan sıralama: 789.012 > 456.789 > 234.567 > 123.456

💡 Ok ile gösterme: ← ← ← ←
789.012 ← 456.789 ← 234.567 ← 123.456`,
        'Büyükten küçüğe = Azalan = İniş gibi!',
        {
          visual: `AZALAN SIRALAMA (Büyük → Küçük)

789.012 ▼ (Başlangıç - En büyük)
\\
 456.789 ▼
  \\
   234.567 ▼
    \\
     123.456 ▼`,
          tip: 'Azalan sıralama için en büyükle başla!',
          examples: [
            createExample(
              '234.567, 567.890, 123.456, 890.123 sayılarını büyükten küçüğe sırala.',
              '890.123 > 567.890 > 234.567 > 123.456',
              'En büyükten başla ve sırayla yaz.',
              '890.123 → 567.890 → 234.567 → 123.456',
              ['En büyük: 890.123', 'Sonraki: 567.890', 'Sonraki: 234.567', 'En küçük: 123.456']
            )
          ]
        }
      ),

      createStep(
        'Sayı Doğrusu',
        `Sayıları bir doğru üzerinde gösterebiliriz. Bu sayı doğrusudur.

📍 Sayı doğrusunda:
• Sağa gittikçe sayılar BÜYÜR →
• Sola gittikçe sayılar KÜÇÜLÜR ←

Örnek: 100.000 ile 200.000 arasını gösteren sayı doğrusu

|-------|-------|-------|-------|-------|
100.000 120.000 140.000 160.000 180.000 200.000

Her aralık 20.000 birim!

💡 Sayı doğrusunda bir sayı diğerinin sağındaysa daha büyüktür!`,
        'Sayı doğrusunda sağdaki sayı daha büyük!',
        {
          visual: `SAYI DOĞRUSU

←───────────────────────────────────→
0     200.000    400.000    600.000    800.000

        ↑           ↑          ↑
      KÜÇÜK      ORTA       BÜYÜK

Sağa git → Sayılar büyür
Sola git ← Sayılar küçülür`,
          examples: [
            createExample(
              '350.000 sayı doğrusunda 400.000\'in neresinde?',
              'Solunda',
              '350.000 < 400.000 olduğu için 350.000, 400.000\'in solunda yer alır.',
              '350.000 ← 400.000',
              ['350.000 küçük mü büyük mü?', '350.000 < 400.000', 'Küçük sayı solda', 'Cevap: Solunda']
            ),
            createExample(
              'Sayı doğrusunda 500.000 ile 600.000 arasında hangi sayılar var?',
              '510.000, 520.000, ... , 590.000',
              'Bu iki sayı arasında sonsuz sayıda sayı vardır.',
              '500.000 ... 600.000',
              ['500.000 ile başla', 'Birler ekle: 500.001, 500.002...', 'On binler ekle: 510.000, 520.000...', 'Arada sonsuz sayı var!']
            )
          ]
        }
      ),

      createStep(
        'Arada Kalan Sayılar',
        `İki sayı arasında sonsuz sayıda sayı bulunur!

Örnek: 450.000 ile 460.000 arasındaki sayılar

• Onlu sayılar: 450.010, 450.020, 450.030...
• Yüzlü sayılar: 450.100, 450.200, 450.300...
• Binli sayılar: 451.000, 452.000, 453.000...

📌 Belirli aralıkla sayılar:
"450.000 ile 460.000 arasında 2.000'er artarak say"
450.000 → 452.000 → 454.000 → 456.000 → 458.000 → 460.000

📌 Tam ortadaki sayı:
İki sayının tam ortası = (a + b) ÷ 2
(450.000 + 460.000) ÷ 2 = 910.000 ÷ 2 = 455.000`,
        'İki sayı arasında sonsuz sayı var!',
        {
          visual: `450.000 ─────────────────── 460.000
           │                   │
           ▼                   ▼
     451.000...455.000...459.000

Tam orta: 455.000`,
          examples: [
            createExample(
              '500.000 ile 600.000 arasındaki tam ortadaki sayı nedir?',
              '550.000',
              '(500.000 + 600.000) ÷ 2 = 1.100.000 ÷ 2 = 550.000',
              '(500.000 + 600.000) ÷ 2 = 550.000',
              ['İki sayıyı topla: 500.000 + 600.000 = 1.100.000', '2\'ye böl: 1.100.000 ÷ 2 = 550.000', 'Tam orta: 550.000']
            ),
            createExample(
              '300.000 ile 400.000 arasında 25.000\'er artarak say.',
              '300.000, 325.000, 350.000, 375.000, 400.000',
              '25.000 ekleyerek ilerle.',
              '300.000 → +25.000 → 325.000 → +25.000 → ...',
              ['Başla: 300.000', '+25.000: 325.000', '+25.000: 350.000', '+25.000: 375.000', '+25.000: 400.000']
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        '567.890 ☐ 576.890 - Kutuya hangi sembol gelir?',
        ['>', '<', '='],
        '<',
        'Soldan karşılaştır: 5=5, 6<7. Yani 567.890 < 576.890',
        '567.890 ☐ 576.890',
        1
      ),
      createFillBlank(
        '345.678 > 345.___ olması için boşluğa 6\'dan ___ bir rakam gelmelidir',
        ['küçük', 'az'],
        'Yüzler basamağında 6\'dan küçük rakam olmalı: 0, 1, 2, 3, 4 veya 5',
        '345.678 > 345.???'
      ),
      createMultipleChoice(
        'Hangisi en büyük sayıdır?',
        ['456.789', '465.789', '564.789', '546.789'],
        '564.789',
        'İlk basamakları karşılaştır: 5 > 4. 564.789 en büyük!',
        undefined,
        1
      ),
      createFillBlank(
        '234.567, 432.765, 342.657, 243.576 sayılarını küçükten büyüğe sıraladığımızda en başa ___ gelir',
        ['234.567'],
        'En küçük sayı 234.567\'dir (2 ile başlayan en küçük)',
        'Artan sıralama'
      ),
      createMultipleChoice(
        '99.999 ☐ 100.000 - Doğru sembol hangisi?',
        ['>', '<', '='],
        '<',
        '99.999 beş basamaklı, 100.000 altı basamaklı. 5 basamak < 6 basamak!',
        '99.999 ☐ 100.000',
        1
      ),
      createFillBlank(
        '500.000 ile 600.000 arasındaki tam ortadaki sayı ___',
        ['550.000', '550000'],
        '(500.000 + 600.000) ÷ 2 = 550.000',
        'Tam orta'
      ),
      createMultipleChoice(
        '678.901 > ☐ olması için kutuya hangi sayı yazılabilir?',
        ['789.012', '678.901', '567.890', '679.000'],
        '567.890',
        '678.901\'den küçük bir sayı olmalı. 567.890 < 678.901',
        undefined,
        2
      ),
      createFillBlank(
        'Sayı doğrusunda sağdaki sayı soldaki sayıdan daha ___',
        ['büyük', 'büyüktür'],
        'Sayı doğrusunda sağa gittikçe sayılar büyür!',
        'Sayı doğrusu kuralı'
      ),
      createMultipleChoice(
        '456.789, 654.987, 547.896, 465.978 - Büyükten küçüğe sıralama hangisi?',
        ['456.789 > 465.978 > 547.896 > 654.987', '654.987 > 547.896 > 465.978 > 456.789', '654.987 > 456.789 > 465.978 > 547.896', '547.896 > 654.987 > 465.978 > 456.789'],
        '654.987 > 547.896 > 465.978 > 456.789',
        'En büyükten başla: 654.987, sonra 547.896, 465.978, 456.789',
        undefined,
        2
      ),
      createFillBlank(
        '400.000 ile 500.000 arasında 20.000\'er artarak sayarsak ___ tane sayı yazarız',
        ['6', 'altı'],
        '400.000, 420.000, 440.000, 460.000, 480.000, 500.000 = 6 sayı',
        '20.000\'er artış'
      ),
      createMultipleChoice(
        '123.456 = 123.4☐6 olması için kutuya hangi rakam gelir?',
        ['4', '5', '6', '7'],
        '5',
        'Eşitlik için aynı sayı olmalı: 123.456 = 123.456. Onlar basamağı: 5',
        '123.456 = 123.4?6',
        1
      ),
      createFillBlank(
        '750.000, 730.000, 710.000, ___, 670.000 örüntüsünde boşluk ___',
        ['690.000', '690000'],
        'Her adımda 20.000 azalıyor: 750 → 730 → 710 → 690 → 670',
        'Azalan örüntü'
      ),
      createMultipleChoice(
        'Aşağıdakilerden hangisi yanlıştır?',
        ['1.000.000 > 999.999', '500.000 = 500.000', '100.000 < 99.999', '250.000 > 200.000'],
        '100.000 < 99.999',
        '100.000 altı basamaklı, 99.999 beş basamaklı. 6 basamak > 5 basamak, yani 100.000 > 99.999',
        undefined,
        2
      ),
      createFillBlank(
        '345.678\'den büyük, 345.700\'den küçük en küçük binlik sayı ___',
        ['346.000'],
        '345.678 < 346.000 < 345.700 - Bu aralıktaki en küçük binlik (000 ile biten)',
        'Aradaki sayılar'
      ),
      createMultipleChoice(
        '☐ < 500.000 olması için kutuya yazılabilecek en büyük sayı hangisi?',
        ['500.001', '499.999', '500.000', '499.000'],
        '499.999',
        '500.000\'den küçük en büyük sayı 499.999\'dur.',
        undefined,
        2
      )
    ],

    summary: `Bugün sayıları karşılaştırma ve sıralama öğrendik!

✅ Semboller: > (büyük), < (küçük), = (eşit)
✅ Karşılaştırma: Önce basamak sayısı, sonra soldan karşılaştırma
✅ Artan sıralama: Küçükten büyüğe (↗)
✅ Azalan sıralama: Büyükten küçüğe (↘)
✅ Sayı doğrusu: Sağdaki sayı daha büyük
✅ İki sayı arasında sonsuz sayı var!`,

    nextTopicPreview: 'Sonraki konuda ritmik sayma ve örüntüleri keşfedeceğiz!'
  }
};
