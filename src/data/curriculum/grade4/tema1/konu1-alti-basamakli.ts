// 4. SINIF - TEMA 1 - KONU 1: Altı Basamaklı Sayılar
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1AltiBasamakli: Topic = {
  id: 'alti-basamakli-sayilar',
  title: 'Altı Basamaklı Sayılar',
  description: 'Yüz binler basamağına kadar sayıları okuma, yazma ve anlama',
  emoji: '🔢',
  duration: '50 dk',
  difficulty: 2,
  keywords: ['altı basamak', 'yüz binler', 'on binler', 'binler', 'büyük sayılar'],
  objectives: [
    'Altı basamaklı sayıları okur ve yazar',
    'Basamak ve bölük kavramlarını anlar',
    'Sayıları çözümler ve birleştirir',
    'Gerçek hayattan örnekler verir'
  ],
  content: {
    introduction: `Merhaba genç matematikçi! 🌟

Bugün çok büyük sayıların dünyasına gireceğiz. Altı basamaklı sayılar 100.000'den 999.999'a kadar olan sayılardır.

Bu sayılar hayatımızda her yerde:
- Şehirlerin nüfusu 🏙️
- Arabaların kilometre sayacı 🚗
- Büyük şirketlerin gelirleri 💰
- Stadyumların kapasitesi ⚽

Hazır mısın? Büyük sayıların dünyasına adım atalım!`,

    motivationQuote: 'Büyük sayıları öğrenen, büyük düşünür! Senin için sınır yok! 🚀',

    funFacts: [
      'İstanbul\'un nüfusu 15 milyonun üzerinde - 8 basamaklı bir sayı! 🏙️',
      'Dünya\'nın çevresi yaklaşık 40.000 km - beş basamaklı! 🌍',
      'Antik zamanlarda insanlar sadece 100\'e kadar sayabilirdi! 📜',
      'Bilgisayarlar saniyede milyarlarca işlem yapar! 💻',
      'Türkiye\'nin yüzölçümü 783.562 km² - altı basamaklı! 🗺️'
    ],

    steps: [
      createStep(
        'Neden Büyük Sayılara İhtiyacımız Var?',
        `Küçük sayılar günlük işlerimiz için yeterli ama büyük şeyleri saymak için büyük sayılara ihtiyacımız var!

📊 Bir şehirde kaç kişi yaşıyor? → Yüz binler!
🚗 Arabanın kaç km yaptığı? → On binler, yüz binler!
📚 Kütüphanede kaç kitap var? → Binler, on binler!
🏟️ Stadyumda kaç kişi var? → On binler!

Altı basamaklı sayılar: 100.000 ile 999.999 arasındaki sayılardır.
En küçük altı basamaklı sayı: 100.000 (yüz bin)
En büyük altı basamaklı sayı: 999.999 (dokuz yüz doksan dokuz bin dokuz yüz doksan dokuz)`,
        'Büyük sayılar büyük şeyleri ölçmek için kullanılır.',
        {
          visual: `🏙️ İstanbul: 15.000.000+ kişi
🏟️ Stadyum: 80.000 kişi
📚 Kütüphane: 250.000 kitap
🚗 Araba: 150.000 km`,
          tip: 'Altı basamaklı sayıların hepsinde yüz binler basamağı vardır!',
          examples: [
            createExample(
              'Stadyumda 52.000 kişi var. Bu kaç basamaklı bir sayı?',
              '5 basamaklı',
              '52.000 sayısında 5 rakam var: 5-2-0-0-0. Yani 5 basamaklı.',
              '52.000 = 5 basamak',
              ['Rakamları say: 5, 2, 0, 0, 0', 'Toplam 5 rakam var', 'Bu beş basamaklı bir sayı']
            ),
            createExample(
              '150.000 hangi basamaklı sayıdır?',
              '6 basamaklı',
              '150.000 sayısında 6 rakam var: 1-5-0-0-0-0. En küçük altı basamaklı sayı 100.000\'dir.',
              '150.000 → 1,5,0,0,0,0 = 6 basamak',
              ['Rakamları say', '1-5-0-0-0-0 = 6 rakam', 'Altı basamaklı sayı!']
            )
          ]
        }
      ),

      createStep(
        'Basamakları Tanıyalım',
        `Altı basamaklı sayılarda 6 farklı basamak vardır:

📍 BİRLER (en sağda) → 1, 2, 3...
📍 ONLAR → 10, 20, 30...
📍 YÜZLER → 100, 200, 300...
📍 BİNLER → 1.000, 2.000, 3.000...
📍 ON BİNLER → 10.000, 20.000, 30.000...
📍 YÜZ BİNLER (en solda) → 100.000, 200.000, 300.000...

Örnek: 385.472 sayısını inceleyelim:
• 3 → Yüz binler basamağında (300.000)
• 8 → On binler basamağında (80.000)
• 5 → Binler basamağında (5.000)
• 4 → Yüzler basamağında (400)
• 7 → Onlar basamağında (70)
• 2 → Birler basamağında (2)`,
        'Her basamağın kendine özel bir değeri vardır!',
        {
          visual: `    385.472
    ↓↓↓.↓↓↓
    YOB.YOB
    üıi.üol
    znnn.zna
    bll.lle
    ıee.err
    nrr.rı
    l    `,
          explanation: 'Sağdan sola: Birler, Onlar, Yüzler, Binler, On binler, Yüz binler',
          examples: [
            createExample(
              '247.683 sayısında on binler basamağındaki rakam kaçtır?',
              '4',
              'Sağdan 5. basamak on binler basamağıdır. 247.683 → 4 on binler basamağında.',
              '247.683 → 4 (on binler)',
              ['Sağdan say: 3-birler, 8-onlar, 6-yüzler, 7-binler, 4-on binler', '4 rakamı on binler basamağında']
            ),
            createExample(
              '592.146 sayısında yüz binler basamağındaki rakamın değeri nedir?',
              '500.000',
              'Yüz binler basamağındaki 5 rakamının değeri 5 × 100.000 = 500.000\'dir.',
              '5 × 100.000 = 500.000',
              ['Yüz binler basamağında 5 var', '5 × 100.000 = 500.000', 'Basamak değeri 500.000']
            )
          ]
        }
      ),

      createStep(
        'Bölükler: Binler ve Birler',
        `Altı basamaklı sayıları okumayı kolaylaştırmak için sayıyı bölüklere ayırırız.

🔹 BİRLER BÖLÜĞÜ: Sağdaki 3 basamak (birler, onlar, yüzler)
🔹 BİNLER BÖLÜĞÜ: Soldaki 3 basamak (binler, on binler, yüz binler)

Örnek: 385.472
• Binler bölüğü: 385 (üç yüz seksen beş BİN)
• Birler bölüğü: 472 (dört yüz yetmiş iki)
• Okuma: Üç yüz seksen beş bin dört yüz yetmiş iki

Nokta (.) binler bölüğü ile birler bölüğünü ayırır.
Binler bölüğünü okurken sonuna "BİN" eklenir!`,
        'Bölükler sayıyı okumayı çok kolaylaştırır!',
        {
          visual: `┌─────────────┬─────────────┐
│ BİNLER      │ BİRLER      │
│ BÖLÜĞÜ      │ BÖLÜĞÜ      │
├─────────────┼─────────────┤
│ 385         │ 472         │
│ (üç yüz     │ (dört yüz   │
│  seksen     │  yetmiş     │
│  beş BİN)   │  iki)       │
└─────────────┴─────────────┘`,
          tip: 'Noktadan önceki kısmı oku, "bin" de, noktadan sonraki kısmı oku!',
          examples: [
            createExample(
              '642.517 sayısını bölüklerine ayır.',
              'Binler: 642, Birler: 517',
              'Noktadan öncesi binler bölüğü (642), noktadan sonrası birler bölüğü (517).',
              '642.517 → 642 | 517',
              ['Noktayı bul', 'Sol taraf: 642 (binler bölüğü)', 'Sağ taraf: 517 (birler bölüğü)']
            ),
            createExample(
              '208.035 sayısını oku.',
              'İki yüz sekiz bin otuz beş',
              'Binler bölüğü: 208 (iki yüz sekiz BİN), Birler bölüğü: 035 (otuz beş).',
              '208.035 = iki yüz sekiz bin otuz beş',
              ['Binler bölüğü: 208 = iki yüz sekiz', '"Bin" ekle: iki yüz sekiz BİN', 'Birler bölüğü: 035 = otuz beş', 'Birleştir: iki yüz sekiz bin otuz beş']
            )
          ]
        }
      ),

      createStep(
        'Sayıları Okuma',
        `Altı basamaklı sayıları doğru okumak için şu kuralları uygula:

1️⃣ Önce binler bölüğünü oku
2️⃣ "Bin" kelimesini ekle
3️⃣ Birler bölüğünü oku

Örnekler:
• 456.789 → Dört yüz elli altı bin yedi yüz seksen dokuz
• 100.000 → Yüz bin
• 305.040 → Üç yüz beş bin kırk
• 999.999 → Dokuz yüz doksan dokuz bin dokuz yüz doksan dokuz

⚠️ DİKKAT: Sıfırlar okunmaz!
• 500.001 → Beş yüz bin bir (ortadaki sıfırlar okunmaz)
• 400.020 → Dört yüz bin yirmi`,
        'Binler bölüğünü oku, BİN de, birler bölüğünü oku - bu kadar!',
        {
          visual: `456.789
  ↓
Dört yüz elli altı (binler)
  + BİN +
Yedi yüz seksen dokuz (birler)
  ↓
"Dört yüz elli altı bin yedi yüz seksen dokuz"`,
          warning: 'Ortadaki sıfırları okuma! 305.040 = "üç yüz beş bin kırk" (sıfırları söyleme)',
          examples: [
            createExample(
              '723.456 nasıl okunur?',
              'Yedi yüz yirmi üç bin dört yüz elli altı',
              'Binler: 723 (yedi yüz yirmi üç BİN) + Birler: 456 (dört yüz elli altı)',
              '723.456',
              ['Binler bölüğü: 723 = yedi yüz yirmi üç', '"Bin" ekle', 'Birler bölüğü: 456 = dört yüz elli altı', 'Sonuç: yedi yüz yirmi üç bin dört yüz elli altı']
            ),
            createExample(
              '800.005 nasıl okunur?',
              'Sekiz yüz bin beş',
              'Binler: 800 (sekiz yüz BİN), Birler: 005 (beş). Sıfırlar okunmaz!',
              '800.005',
              ['Binler: 800 = sekiz yüz', '"Bin" ekle', 'Birler: 005 = beş (sıfırlar okunmaz)', 'Sonuç: sekiz yüz bin beş']
            )
          ]
        }
      ),

      createStep(
        'Sayıları Yazma',
        `Söylenen sayıyı rakamlarla yazmak için:

1️⃣ "Bin" kelimesini bul - bu ayırma noktası
2️⃣ "Bin"den önceki kısmı yaz (binler bölüğü)
3️⃣ Nokta koy
4️⃣ "Bin"den sonraki kısmı yaz (birler bölüğü)

⚠️ Her bölük 3 basamak olmalı! Eksik basamakları 0 ile tamamla.

Örnek: "Dört yüz on iki bin yetmiş üç"
• Binler: "Dört yüz on iki" = 412
• Birler: "Yetmiş üç" = 73 → 073 (3 basamak olmalı!)
• Sonuç: 412.073

Örnek: "Yüz bin"
• Binler: "Yüz" = 100
• Birler: yok → 000
• Sonuç: 100.000`,
        'Her bölük 3 basamak! Eksikleri sıfırla tamamla.',
        {
          visual: `"Üç yüz kırk beş bin altmış yedi"
         ↓
Binler: üç yüz kırk beş = 345
Birler: altmış yedi = 67 → 067
         ↓
      345.067`,
          tip: 'Birler bölüğü 3 basamaktan az ise başına sıfır ekle!',
          examples: [
            createExample(
              '"Beş yüz yirmi dört bin dokuz yüz seksen bir" nasıl yazılır?',
              '524.981',
              'Binler: 524, Birler: 981 - ikisi de 3 basamaklı.',
              'Beş yüz yirmi dört bin dokuz yüz seksen bir = 524.981',
              ['"Bin" kelimesini bul', 'Öncesi: beş yüz yirmi dört = 524', 'Sonrası: dokuz yüz seksen bir = 981', 'Birleştir: 524.981']
            ),
            createExample(
              '"İki yüz bin sekiz" nasıl yazılır?',
              '200.008',
              'Binler: 200, Birler: 8 → 008 (3 basamak olmalı)',
              'İki yüz bin sekiz = 200.008',
              ['Binler: iki yüz = 200', 'Birler: sekiz = 8', '3 basamak için: 008', 'Sonuç: 200.008']
            )
          ]
        }
      ),

      createStep(
        'Sayıları Çözümleme',
        `Bir sayıyı çözümlemek, onu basamak değerlerine ayırmaktır.

Örnek: 385.472
= 300.000 + 80.000 + 5.000 + 400 + 70 + 2
= 3 yüz binlik + 8 on binlik + 5 binlik + 4 yüzlük + 7 onluk + 2 birlik

Çözümleme Yöntemleri:

1️⃣ Toplam olarak:
385.472 = 300.000 + 80.000 + 5.000 + 400 + 70 + 2

2️⃣ Çarpım olarak:
385.472 = (3 × 100.000) + (8 × 10.000) + (5 × 1.000) + (4 × 100) + (7 × 10) + (2 × 1)

3️⃣ Sözel olarak:
385.472 = 3 yüz binlik + 8 on binlik + 5 binlik + 4 yüzlük + 7 onluk + 2 birlik`,
        'Çözümleme, sayıyı parçalarına ayırmaktır.',
        {
          visual: `     385.472
         ↓
┌────────────────────────┐
│ 300.000 (3 × 100.000)  │
│ + 80.000 (8 × 10.000)  │
│ +  5.000 (5 × 1.000)   │
│ +    400 (4 × 100)     │
│ +     70 (7 × 10)      │
│ +      2 (2 × 1)       │
├────────────────────────┤
│ = 385.472              │
└────────────────────────┘`,
          examples: [
            createExample(
              '256.734 sayısını çözümle.',
              '200.000 + 50.000 + 6.000 + 700 + 30 + 4',
              'Her basamaktaki rakamı değeriyle çarp ve topla.',
              '256.734 = 200.000 + 50.000 + 6.000 + 700 + 30 + 4',
              ['2 × 100.000 = 200.000', '5 × 10.000 = 50.000', '6 × 1.000 = 6.000', '7 × 100 = 700', '3 × 10 = 30', '4 × 1 = 4', 'Hepsini topla!']
            ),
            createExample(
              '400.050 sayısını çözümle.',
              '400.000 + 50',
              'Sıfır olan basamakları yazmana gerek yok.',
              '400.050 = 400.000 + 50',
              ['4 × 100.000 = 400.000', '0 × 10.000 = 0 (yazma)', '0 × 1.000 = 0 (yazma)', '0 × 100 = 0 (yazma)', '5 × 10 = 50', '0 × 1 = 0 (yazma)', 'Sonuç: 400.000 + 50']
            )
          ]
        }
      ),

      createStep(
        'Gerçek Hayatta Büyük Sayılar',
        `Altı basamaklı sayılar günlük hayatımızda her yerde!

🏙️ ŞEHİR NÜFUSLARI:
• Ankara: 5.700.000 (yaklaşık)
• Gaziantep: 2.100.000 (yaklaşık)
• Trabzon: 800.000 (yaklaşık)

🚗 ARAÇ KİLOMETRESİ:
• Yeni araba: 0 km
• 3 yaşında araba: 45.000 km
• 10 yaşında araba: 150.000 km

💰 FİYATLAR:
• Yeni telefon: 25.000 TL
• Bilgisayar: 40.000 TL
• Araba: 800.000 TL

📊 DİĞER ÖRNEKLER:
• Türkiye yüzölçümü: 783.562 km²
• Bir stadyum kapasitesi: 52.000 kişi`,
        'Büyük sayılar hayatın her yerinde!',
        {
          visual: `📊 GÜNLÜK HAYATTA BÜYÜK SAYILAR

🏙️ Şehir nüfusu: 500.000 kişi
🚗 Araba km: 125.000 km
📚 Kütüphane: 350.000 kitap
🏟️ Stadyum: 48.000 koltuk`,
          examples: [
            createExample(
              'Bir arabanın kilometre sayacı 234.567 gösteriyor. Bu kaç km yaptığı anlamına gelir?',
              '234.567 kilometre',
              'Arabanın üretildiğinden bu yana toplam 234.567 km yol yaptığı anlamına gelir.',
              '🚗 234.567 km',
              ['Sayacı oku: 234.567', 'Bu altı basamaklı bir sayı', 'Araba 234.567 km yol yapmış']
            ),
            createExample(
              'Bir şehirde 850.000 kişi yaşıyor. Bu sayıyı oku.',
              'Sekiz yüz elli bin',
              '850.000: Binler bölüğü 850 (sekiz yüz elli BİN), birler bölüğü 000.',
              '850.000 = sekiz yüz elli bin',
              ['Binler: 850 = sekiz yüz elli', '"Bin" ekle', 'Birler: 000 (okunmaz)', 'Sonuç: sekiz yüz elli bin']
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        '456.789 sayısını oku.',
        ['Dört yüz elli altı yedi yüz seksen dokuz', 'Dört yüz elli altı bin yedi yüz seksen dokuz', 'Dört elli altı bin yedi seksen dokuz', 'Dört yüz elli altı milyon'],
        'Dört yüz elli altı bin yedi yüz seksen dokuz',
        'Binler bölüğü: 456 (dört yüz elli altı BİN) + Birler bölüğü: 789 (yedi yüz seksen dokuz)',
        '456.789',
        1
      ),
      createFillBlank(
        '523.641 sayısında on binler basamağındaki rakam ___',
        ['2'],
        'Sağdan 5. basamak on binler basamağıdır. 523.641 → 2 on binler basamağında.',
        '523.641'
      ),
      createMultipleChoice(
        'Hangisi en büyük altı basamaklı sayıdır?',
        ['100.000', '999.999', '1.000.000', '900.000'],
        '999.999',
        '999.999 en büyük altı basamaklı sayıdır. 1.000.000 yedi basamaklıdır.',
        undefined,
        1
      ),
      createFillBlank(
        '"Yedi yüz kırk iki bin beş yüz altmış üç" = ___',
        ['742.563'],
        'Binler: 742, Birler: 563 → 742.563',
        'yedi yüz kırk iki bin beş yüz altmış üç'
      ),
      createMultipleChoice(
        '300.000 + 50.000 + 2.000 + 400 + 30 + 5 = ?',
        ['352.435', '35.435', '3.524.035', '350.435'],
        '352.435',
        'Tüm basamak değerlerini topla: 300.000 + 50.000 + 2.000 + 400 + 30 + 5 = 352.435',
        undefined,
        2
      ),
      createFillBlank(
        '800.005 sayısı nasıl okunur? "Sekiz yüz bin ___"',
        ['beş', '5'],
        'Binler: 800 (sekiz yüz BİN), Birler: 005 (beş). Sıfırlar okunmaz!',
        '800.005'
      ),
      createMultipleChoice(
        '628.417 sayısında yüz binler basamağındaki rakamın değeri nedir?',
        ['6', '600', '6.000', '600.000'],
        '600.000',
        '6 yüz binler basamağında: 6 × 100.000 = 600.000',
        undefined,
        2
      ),
      createFillBlank(
        'En küçük altı basamaklı sayı ___',
        ['100.000', '100000', 'yüz bin'],
        'En küçük altı basamaklı sayı 100.000\'dir (yüz bin).',
        '6 basamaklı en küçük sayı'
      ),
      createMultipleChoice(
        '"Dört yüz bin yirmi" nasıl yazılır?',
        ['4.020', '40.020', '400.020', '400.200'],
        '400.020',
        'Binler: 400, Birler: 020 → 400.020',
        undefined,
        2
      ),
      createFillBlank(
        '999.999 + 1 = ___',
        ['1.000.000', '1000000'],
        '999.999 en büyük 6 basamaklı sayı, bir fazlası 1.000.000 (7 basamaklı)',
        '999.999 + 1'
      ),
      createMultipleChoice(
        '547.382 sayısının binler bölüğü hangisidir?',
        ['382', '547', '47.382', '5.473'],
        '547',
        'Noktadan önceki kısım binler bölüğüdür: 547',
        '547.382',
        1
      ),
      createFillBlank(
        '250.000 sayısında ___ tane on binlik vardır',
        ['25'],
        '250.000 ÷ 10.000 = 25 on binlik',
        '250.000'
      ),
      createMultipleChoice(
        'Bir araba 185.432 km yapmış. Bu sayıda birler basamağındaki rakam kaçtır?',
        ['1', '8', '4', '2'],
        '2',
        'En sağdaki rakam birler basamağındadır: 185.432 → 2',
        '185.432',
        1
      ),
      createFillBlank(
        '(7 × 100.000) + (3 × 1.000) + (4 × 10) = ___',
        ['703.040'],
        '700.000 + 3.000 + 40 = 703.040',
        '7 yüz binlik + 3 binlik + 4 onluk'
      ),
      createMultipleChoice(
        'Hangisi altı basamaklı bir sayı DEĞİLDİR?',
        ['100.000', '500.500', '99.999', '999.999'],
        '99.999',
        '99.999 beş basamaklı bir sayıdır. Altı basamaklı sayılar 100.000\'den başlar.',
        undefined,
        1
      )
    ],

    summary: `Bugün altı basamaklı sayıları öğrendik!

✅ Altı basamak: Birler, Onlar, Yüzler, Binler, On binler, Yüz binler
✅ İki bölük: Binler bölüğü (sol 3 basamak) ve Birler bölüğü (sağ 3 basamak)
✅ Okuma: Binler bölüğünü oku + "bin" + Birler bölüğünü oku
✅ En küçük: 100.000 (yüz bin), En büyük: 999.999
✅ Gerçek hayat: Şehir nüfusu, araba km, fiyatlar...`,

    nextTopicPreview: 'Sonraki konuda sayıları karşılaştırma ve sıralama öğreneceğiz!'
  }
};
