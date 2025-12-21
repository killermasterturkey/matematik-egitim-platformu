// 1. SINIF - TEMA 1 - KONU 1: Rakamları ve Sayıları Tanıyalım
// ÇOK DETAYLI VE ZENGİN İÇERİK
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep, visualHelpers } from '../../helpers';

export const konu1RakamlarSayilar: Topic = {
  id: 'rakamlar-sayilar',
  title: 'Rakamları ve Sayıları Tanıyalım',
  description: '0-20 arası rakam ve sayıları öğrenelim, yazalım ve tanıyalım',
  emoji: '🔢',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['rakam', 'sayı', 'sıfır', 'bir', 'iki', 'on', 'yirmi', 'sayma', 'parmak'],
  objectives: [
    '0-9 rakamlarını tanır ve yazar',
    '10-20 arası sayıları okur ve yazar',
    'Sayıları nesnelerle eşleştirir',
    'Sayıların sırasını bilir',
    'Parmaklarla sayı gösterir',
    'Günlük hayatta sayıları kullanır'
  ],
  content: {
    introduction: `Merhaba küçük matematikçi! 🌟

Bugün sayıların büyülü dünyasına gireceğiz! Sayılar her yerde:
🖐️ Parmaklarımızda
🧸 Oyuncaklarımızda
🚗 Sokaktaki arabalarda
⭐ Gökyüzündeki yıldızlarda
🍎 Yediğimiz elmalarda

Sayıları öğrenmek, dünyanın dilini öğrenmek gibidir!

Hazır mısın? Haydi bu macerayı birlikte başlatalım! 🚀`,

    motivationQuote: 'Her büyük matematikçi senin gibi sayıları sayarak başladı! Sen de bir gün büyük işler başaracaksın! ⭐',

    funFacts: [
      '🇮🇳 Sıfır sayısını ilk olarak Hintli matematikçiler bulmuş!',
      '🖐️ Parmaklarımız 10 tane olduğu için 10\'luk sayı sistemini kullanıyoruz!',
      '🔢 En küçük tek basamaklı sayı 1, en büyüğü 9\'dur!',
      '⭐ Gökyüzünde sayamayacağın kadar çok yıldız var - trilyonlarca!',
      '🏛️ Antik Mısırlılar piramitleri yaparken sayıları kullandı!',
      '🐝 Arılar bile sayı sayabilir - 4\'e kadar sayabildikleri kanıtlandı!',
      '🎂 Doğum günü pastalarındaki mumlar yaşımızı sayıyla gösterir!',
      '📞 Telefon numaraları sayılardan oluşur!'
    ],

    steps: [
      // ADIM 1: Sayılar Ne İşe Yarar?
      createStep(
        '🌟 Sayılar Ne İşe Yarar?',
        `Sayılar, etrafımızdaki şeyleri saymak ve sıralamak için kullanılır.

📦 Kaç oyuncağın var? Sayılarla söylersin!
🍎 Kaç elma yedin? Sayılarla bilirsin!
👨‍👩‍👧‍👦 Kaç kardeşin var? Sayılarla anlatırsın!
🏠 Eviniz kaç numarada? Sayılarla bulursun!
📅 Bugün ayın kaçı? Sayılarla öğrenirsin!
⏰ Saat kaç? Sayılarla bakarsın!

Gördün mü? Sayılar olmadan dünyamız çok karışık olurdu! 🌍`,
        'Sayılar günlük hayatımızın her yerinde. Sabah kaçta kalktın? Bugün ayın kaçı? Her şey sayılarla!',
        {
          visual: `🍎 🍎 🍎 = 3 elma
🌟 🌟 🌟 🌟 🌟 = 5 yıldız
🚗 🚗 = 2 araba
🎈 🎈 🎈 🎈 = 4 balon
🐱 = 1 kedi`,
          explanation: 'Her grupta kaç tane nesne olduğunu sayarak bulabiliriz. Haydi birlikte sayalım!',
          tip: 'Her gün etrafındaki şeyleri saymaya çalış! Bu seni sayı şampiyonu yapar!',
          examples: [
            createExample(
              'Kaç yıldız var? ⭐⭐⭐',
              '3',
              'Yıldızları tek tek sayarız: 1, 2, 3. Toplam 3 yıldız var!',
              '⭐ ⭐ ⭐',
              ['Birinci yıldızı say: 1', 'İkinci yıldızı say: 2', 'Üçüncü yıldızı say: 3', 'Toplam: 3 yıldız!']
            ),
            createExample(
              'Masada 4 kalem ve 2 silgi var. Toplam kaç eşya var?',
              '6',
              '4 kalem + 2 silgi = 6 eşya! Hepsini tek tek sayabilirsin.',
              '✏️✏️✏️✏️ + 🧽🧽 = 6',
              ['Kalemleri say: 1, 2, 3, 4', 'Silgileri say: 1, 2', '4 + 2 = 6 eşya']
            ),
            createExample(
              'Bahçede 5 kırmızı gül ve 3 sarı gül var. Kaç gül var?',
              '8',
              'Gülleri toplarsak: 5 + 3 = 8 gül!',
              '🌹🌹🌹🌹🌹 + 🌻🌻🌻 = 8',
              ['Kırmızı güller: 5', 'Sarı güller: 3', 'Toplam: 8 gül']
            ),
            createExample(
              'Rafta 7 kitap var. Kaç kitap var?',
              '7',
              '7 kitap! Tek tek sayarak buluruz.',
              '📚📚📚📚📚📚📚 = 7'
            )
          ]
        }
      ),

      // ADIM 2: 0-5 Arası Rakamlar
      createStep(
        '🔢 Rakamları Öğrenelim: 0-5',
        `İlk olarak 0'dan 5'e kadar olan rakamları öğrenelim:

0️⃣ SIFIR (0)
   Hiç yok demek. Elinde 0 elma var = Hiç elma yok!
   Görsel: (boş) - Hiçbir şey yok!

1️⃣ BİR (1)
   Tek bir tane. Sen birsin, eşsizsin!
   Görsel: 🔴 - Bir tane top!

2️⃣ İKİ (2)
   Bir çift. İki gözün, iki kulağın var!
   Görsel: 🔴🔴 - İki tane top!

3️⃣ ÜÇ (3)
   Bir, iki, üç! Üçgen üç köşeli!
   Görsel: 🔴🔴🔴 - Üç tane top!

4️⃣ DÖRT (4)
   Masanın dört ayağı var!
   Görsel: 🔴🔴🔴🔴 - Dört tane top!

5️⃣ BEŞ (5)
   Bir elinde 5 parmak!
   Görsel: 🔴🔴🔴🔴🔴 - Beş tane top!`,
        'Sıfır hiçbir şey olmadığını gösterir. Bir, iki, üç, dört, beş - bunlar temel rakamlarımız.',
        {
          visual: `PARMAK SAYMA:
✊ = 0 (Yumruk - hiç parmak yok)
☝️ = 1 (Bir parmak)
✌️ = 2 (İki parmak)
🤟 = 3 (Üç parmak)
🖖 = 4 (Dört parmak)
🖐️ = 5 (Beş parmak - tam bir el!)`,
          tip: 'Parmaklarınla sayıları göstermeyi dene! 0 = Yumruk, 1 = Bir parmak, 5 = Açık el!',
          examples: [
            createExample(
              'Bir elini aç, kaç parmağın var?',
              '5',
              'Bir elimizde 5 parmak var! Başparmak, işaret, orta, yüzük ve serçe parmak.',
              '🖐️ = 5 parmak',
              ['Başparmak: 1', 'İşaret parmağı: 2', 'Orta parmak: 3', 'Yüzük parmağı: 4', 'Serçe parmak: 5']
            ),
            createExample(
              'Sınıfta 0 öğrenci var ne demek?',
              'Hiç öğrenci yok, sınıf boş',
              'Sıfır, hiç olmadığını gösterir. 0 öğrenci = Sınıf boş!',
              '🏫 = 👤👤👤 ❌ = 0'
            ),
            createExample(
              'Tabakta 3 çilek var. Kaç çilek?',
              '3',
              'Çilekleri sayalım: 1, 2, 3. Üç çilek!',
              '🍓🍓🍓 = 3'
            ),
            createExample(
              'Masada 4 bardak var. Göster!',
              '🥤🥤🥤🥤',
              '4 bardak: 1, 2, 3, 4!',
              '🥤🥤🥤🥤 = 4'
            ),
            createExample(
              'Sepette hiç elma yok. Kaç elma var?',
              '0',
              'Hiç elma yok = 0 elma. Sıfır!',
              '🧺 = (boş) = 0'
            )
          ]
        }
      ),

      // ADIM 3: 6-10 Arası Rakamlar
      createStep(
        '🔢 Rakamları Öğrenelim: 6-10',
        `Şimdi 6'dan 10'a kadar olan rakamları öğrenelim:

6️⃣ ALTI (6)
   Beşten bir fazla. Bir böceğin 6 bacağı var!
   Görsel: 🔵🔵🔵🔵🔵🔵

7️⃣ YEDİ (7)
   Haftanın 7 günü var! Gökkuşağının 7 rengi var!
   Görsel: 🔵🔵🔵🔵🔵🔵🔵

8️⃣ SEKİZ (8)
   Ahtapotun 8 kolu var! Örümceğin 8 bacağı var!
   Görsel: 🔵🔵🔵🔵🔵🔵🔵🔵

9️⃣ DOKUZ (9)
   10'dan bir eksik! En büyük tek basamaklı sayı!
   Görsel: 🔵🔵🔵🔵🔵🔵🔵🔵🔵

🔟 ON (10)
   İki elindeki toplam parmak sayısı! Çift basamağa geçtik!
   Görsel: 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵`,
        'Altı, yedi, sekiz, dokuz, on. İki elimizdeki parmakları sayarsak 10 eder!',
        {
          visual: `İKİ EL İLE SAYMA:
🖐️ = 5 (Sol el)
🖐️ = 5 (Sağ el)
🖐️ + 🖐️ = 10 (İki el birlikte!)

HAYVANLARLA ÖĞREN:
🐜 Karınca = 6 bacak
🌈 Gökkuşağı = 7 renk
🐙 Ahtapot = 8 kol
⚽ Futbol takımı = 11 kişi (10+1)`,
          tip: 'İki elini birleştir! 5 + 5 = 10 parmak!',
          examples: [
            createExample(
              'İki elinde toplam kaç parmak var?',
              '10',
              '5 parmak + 5 parmak = 10 parmak!',
              '🖐️ + 🖐️ = 10',
              ['Sol el: 5 parmak', 'Sağ el: 5 parmak', 'Toplam: 5 + 5 = 10']
            ),
            createExample(
              'Bir ahtapotun kaç kolu var?',
              '8',
              'Ahtapotun 8 kolu vardır! Sekiz çok özel bir sayıdır.',
              '🐙 = 8 kol'
            ),
            createExample(
              'Haftada kaç gün var?',
              '7',
              'Pazartesi, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar = 7 gün!',
              '📅 = 7 gün'
            ),
            createExample(
              'Bir örümceğin kaç bacağı var?',
              '8',
              'Örümceklerin 8 bacağı vardır!',
              '🕷️ = 8 bacak'
            ),
            createExample(
              '9\'dan sonra hangi sayı gelir?',
              '10',
              '...7, 8, 9, 10! Dokuzdan sonra on gelir!',
              '9 → 10'
            ),
            createExample(
              'Gökkuşağında kaç renk var?',
              '7',
              'Kırmızı, turuncu, sarı, yeşil, mavi, çivit, mor = 7 renk!',
              '🌈 = 7 renk'
            )
          ]
        }
      ),

      // ADIM 4: 11-15 Arası Sayılar
      createStep(
        '🔢 11-15 Arası Sayılar',
        `10'dan sonra sayılar "on" ile başlar:

1️⃣1️⃣ ON BİR (11)
    10 + 1 = 11
    Görsel: 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 + 🔴

1️⃣2️⃣ ON İKİ (12)
    10 + 2 = 12 (Bir yılda 12 ay var!)
    Görsel: 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 + 🔴🔴

1️⃣3️⃣ ON ÜÇ (13)
    10 + 3 = 13
    Görsel: 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 + 🔴🔴🔴

1️⃣4️⃣ ON DÖRT (14)
    10 + 4 = 14
    Görsel: 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 + 🔴🔴🔴🔴

1️⃣5️⃣ ON BEŞ (15)
    10 + 5 = 15 (Bir onluk + bir el!)
    Görsel: 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 + 🔴🔴🔴🔴🔴

Dikkat et: Hepsi "ON" ile başlıyor, sonra 1-5 arası sayı geliyor!`,
        'On bir demek 10 ve 1 demek. On iki, on üç... hepsi 10 ile başlar!',
        {
          visual: `SAYILARI PARÇALA:
11 = 10 + 1 = 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 + 🔴
12 = 10 + 2 = 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 + 🔴🔴
13 = 10 + 3 = 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 + 🔴🔴🔴
14 = 10 + 4 = 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 + 🔴🔴🔴🔴
15 = 10 + 5 = 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 + 🔴🔴🔴🔴🔴`,
          explanation: 'Her sayı 10 mavi top + kırmızı toplar şeklinde gösterilebilir.',
          examples: [
            createExample(
              '10 + 3 kaç eder?',
              '13',
              'On üç! 10 ve 3 bir araya gelince 13 olur.',
              '10 + 3 = 13',
              ['10 tane var', '3 tane daha ekle', 'Toplam: 10 + 3 = 13']
            ),
            createExample(
              '12 nasıl okunur?',
              'On iki',
              '12 = 10 + 2, yani "on iki" diye okunur!',
              '12 = ON + İKİ = ON İKİ'
            ),
            createExample(
              'Bir yılda kaç ay var?',
              '12',
              'Ocak, Şubat, Mart... Aralık = 12 ay!',
              '📅 Yıl = 12 ay'
            ),
            createExample(
              '11 = 10 + ?',
              '1',
              '11 sayısı 10 ve 1\'in toplamıdır!',
              '11 = 10 + 1'
            ),
            createExample(
              '14\'ten önceki sayı nedir?',
              '13',
              '...12, 13, 14. 14\'ten önce 13 gelir!',
              '12 → 13 → 14'
            )
          ]
        }
      ),

      // ADIM 5: 16-20 Arası Sayılar
      createStep(
        '🔢 16-20 Arası Sayılar',
        `Devam edelim! 16'dan 20'ye:

1️⃣6️⃣ ON ALTI (16)
    10 + 6 = 16
    Görsel: 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 + 🟡🟡🟡🟡🟡🟡

1️⃣7️⃣ ON YEDİ (17)
    10 + 7 = 17
    Görsel: 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 + 🟡🟡🟡🟡🟡🟡🟡

1️⃣8️⃣ ON SEKİZ (18)
    10 + 8 = 18
    Görsel: 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 + 🟡🟡🟡🟡🟡🟡🟡🟡

1️⃣9️⃣ ON DOKUZ (19)
    10 + 9 = 19
    Görsel: 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 + 🟡🟡🟡🟡🟡🟡🟡🟡🟡

2️⃣0️⃣ YİRMİ (20)
    10 + 10 = 20 (İki tane 10!)
    Görsel: 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 + 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢

🎉 Tebrikler! Artık 20'ye kadar sayabilirsin!`,
        'On altı, on yedi, on sekiz, on dokuz ve yirmi. Yirmi iki tane 10 demektir!',
        {
          visual: `YİRMİ ÖZEL BİR SAYI:
20 = 10 + 10
20 = İki el + İki el
20 = 🖐️🖐️ + 🖐️🖐️

PARMAKLARLA 20:
İki kişinin tüm parmakları = 20`,
          tip: '20 = İki tane 10! Yani 10 + 10 = 20. Dört el!',
          examples: [
            createExample(
              '20\'den önceki sayı hangisi?',
              '19',
              '...17, 18, 19, 20 diye sayarız. 20\'den önce 19 gelir!',
              '17 → 18 → 19 → 20'
            ),
            createExample(
              '10 + 10 kaç eder?',
              '20',
              'İki tane 10 toplandığında 20 olur! Bu sayıya "yirmi" deriz.',
              '10 + 10 = 20 = YİRMİ'
            ),
            createExample(
              '18 = 10 + ?',
              '8',
              '18 sayısı 10 ve 8\'in toplamıdır!',
              '18 = 10 + 8'
            ),
            createExample(
              '16\'dan sonra hangi sayı gelir?',
              '17',
              '16, 17, 18... 16\'dan sonra 17 gelir!',
              '16 → 17'
            ),
            createExample(
              'Sınıfta 20 öğrenci var. İki el ile göster!',
              '🖐️🖐️🖐️🖐️',
              '20 = 4 el = 4 × 5 = 20 parmak!',
              '🖐️🖐️🖐️🖐️ = 20'
            )
          ]
        }
      ),

      // ADIM 6: Sayıları Yazalım
      createStep(
        '✏️ Sayıları Yazalım',
        `Şimdi sayıları yazmayı öğrenelim. Her rakamın kendine özgü bir şekli var:

✏️ 0 - Yumurta gibi yuvarlak
✏️ 1 - Düz bir çizgi (en kolay!)
✏️ 2 - Kuğu gibi kıvrımlı
✏️ 3 - İki yarım daire üst üste
✏️ 4 - Bayrak direği gibi köşeli
✏️ 5 - Şapkalı adam (düz çizgi + yarım daire)
✏️ 6 - Kıvrık kuyruklu (ters 9 gibi)
✏️ 7 - Burunlu düz çizgi
✏️ 8 - İki yuvarlak üst üste (kardan adam!)
✏️ 9 - Balon gibi (ters 6)

🎯 İPUCU: Havada parmağınla çiz, sonra kağıda yaz!`,
        'Kalemini al ve sayıları yazmaya başla. Her gün biraz pratik yap!',
        {
          visual: `YAZIM REHBERİ:
0 = O şeklinde yuvarlak çiz
1 = Yukarıdan aşağı düz çizgi
2 = Yukarı başla, sağa kıvrıl, sola çiz
3 = İki yarım daire sağa bak
4 = Aşağı, sağa, sonra yukarıdan aşağı
5 = Sağa çiz, aşağı, yarım daire
6 = Yukarıdan kıvrılarak aşağı, yuvarlak
7 = Sağa çiz, sonra sola eğik aşağı
8 = Yukarıdan başla, 8 çiz (iki daire)
9 = Yuvarlak çiz, aşağı in`,
          tip: 'Her gün 5 dakika yazı pratiği yap. Çok geçmeden usta olursun!',
          examples: [
            createExample(
              '5 rakamını nasıl yazarsın?',
              'Önce düz çizgi sağa, sonra aşağı, sonra yarım daire',
              '5 rakamı sanki şapka takmış bir adam gibidir!',
              '5 = Şapkalı adam'
            ),
            createExample(
              'Hangi rakam iki yuvarlaktan oluşur?',
              '8',
              '8 rakamı iki yuvarlak üst üste - kardan adam gibi!',
              '8 = ⚪ + ⚪'
            ),
            createExample(
              'En kolay yazılan rakam hangisi?',
              '1',
              '1 sadece düz bir çizgi! Yukarıdan aşağı.',
              '1 = |'
            )
          ]
        }
      ),

      // ADIM 7: Sayı Sıralaması
      createStep(
        '📊 Sayıları Sırala',
        `Sayıların bir sırası var. Küçükten büyüğe gider:

0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10

10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20

📌 ÖNEMLİ KAVRAMLAR:
• "Önce gelen" = Daha küçük sayı
• "Sonra gelen" = Daha büyük sayı
• "Arasındaki" = İki sayının ortasındaki

🎯 ÖRNEK:
5'ten önce → 4
5'ten sonra → 6
4 ile 6 arasında → 5`,
        'Sayılar sırayla gider. Her sayının bir öncesi ve bir sonrası vardır!',
        {
          visual: `SAYI DOĞRUSU:
0--1--2--3--4--5--6--7--8--9--10
|__________________________|
        Tek basamaklı

10--11--12--13--14--15--16--17--18--19--20
|___________________________________|
            Çift basamaklı`,
          examples: [
            createExample(
              '7\'den sonra hangi sayı gelir?',
              '8',
              '...6, 7, 8, 9... 7\'den sonra 8 gelir!',
              '7 → 8'
            ),
            createExample(
              '12\'den önce hangi sayı var?',
              '11',
              '10, 11, 12... 12\'den önce 11 gelir!',
              '11 → 12'
            ),
            createExample(
              '8 ile 10 arasındaki sayı nedir?',
              '9',
              '8, 9, 10 - Arada 9 var!',
              '8 → 9 → 10'
            ),
            createExample(
              '15\'ten önce ve sonra hangi sayılar var?',
              'Önce 14, sonra 16',
              '14 → 15 → 16',
              '14 ← 15 → 16'
            )
          ]
        }
      ),

      // ADIM 8: Pratik Zamanı
      createStep(
        '🎯 Pratik Zamanı!',
        `Harika gidiyorsun! Şimdi öğrendiklerini pekiştirelim.

🎯 GÜNLÜK PRATİKLER:

1. Etrafındaki nesneleri say!
   • Odanda kaç kitap var?
   • Masanda kaç kalem var?
   • Pencereden kaç araba görüyorsun?

2. Bir kağıda 1'den 20'ye kadar sayıları yaz!

3. Parmaklarınla sayı göster!

4. Ailenle sayı oyunu oyna!
   • Sen bir sayı söyle, onlar göstersin
   • Onlar göstersin, sen tahmin et

5. Evdeki eşyaları say:
   • Sandalye sayısı
   • Tabak sayısı
   • Çatal sayısı

🏆 Her gün pratik yaparsan sayı şampiyonu olursun!`,
        'Şimdi öğrendiklerini uygula! Pratik yapmak çok önemli.',
        {
          visual: `📚📚📚 = 3 kitap
✏️✏️✏️✏️ = 4 kalem
🚗🚗🚗🚗🚗 = 5 araba
🌸🌸🌸🌸🌸🌸🌸 = 7 çiçek
🎈🎈🎈🎈🎈🎈🎈🎈 = 8 balon`,
          explanation: 'Her gün biraz pratik yaparsan sayıları çok çabuk öğrenirsin!',
          examples: [
            createExample(
              'Masanda 7 kalem, 3 silgi ve 2 defter var. Toplam kaç eşya?',
              '12',
              '7 + 3 + 2 = 12 eşya! Hepsini tek tek sayabilirsin.',
              '✏️✏️✏️✏️✏️✏️✏️ + 🧽🧽🧽 + 📓📓 = 12',
              ['Kalemleri say: 7', 'Silgileri ekle: 7 + 3 = 10', 'Defterleri ekle: 10 + 2 = 12']
            ),
            createExample(
              'Bahçede 6 kuş ve 4 kelebek var. Toplam kaç canlı?',
              '10',
              '6 + 4 = 10 canlı!',
              '🐦🐦🐦🐦🐦🐦 + 🦋🦋🦋🦋 = 10'
            )
          ]
        }
      )
    ],

    // ÇOK DAHA FAZLA PRATİK SORUSU (25+ soru)
    practiceQuestions: [
      // Temel sayma soruları
      createMultipleChoice(
        '🍎🍎🍎🍎 Kaç elma var?',
        ['3', '4', '5', '6'],
        '4',
        'Elmaları tek tek sayalım: 1, 2, 3, 4. Toplam 4 elma var!',
        '🍎🍎🍎🍎',
        1,
        'Elmaları parmağınla tek tek say!'
      ),
      createMultipleChoice(
        '⭐⭐⭐⭐⭐⭐ Kaç yıldız var?',
        ['4', '5', '6', '7'],
        '6',
        'Yıldızları sayalım: 1, 2, 3, 4, 5, 6. Altı yıldız!',
        '⭐⭐⭐⭐⭐⭐',
        1
      ),
      createMultipleChoice(
        '🎈🎈🎈🎈🎈🎈🎈 Kaç balon var?',
        ['5', '6', '7', '8'],
        '7',
        'Balonları tek tek sayalım: 1-2-3-4-5-6-7. Yedi balon!',
        '🎈🎈🎈🎈🎈🎈🎈',
        1
      ),

      // Karşılaştırma soruları
      createMultipleChoice(
        'Hangi sayı 5\'ten büyüktür?',
        ['3', '4', '7', '2'],
        '7',
        '7, 5\'ten büyüktür çünkü sayı doğrusunda 5\'ten sonra gelir: 5, 6, 7',
        '5 → 6 → 7',
        1
      ),
      createMultipleChoice(
        'Hangi sayı 8\'den küçüktür?',
        ['9', '10', '6', '11'],
        '6',
        '6, 8\'den küçüktür. Sayı doğrusunda: 6, 7, 8',
        '6 → 7 → 8',
        1
      ),
      createMultipleChoice(
        'Hangisi en küçük sayıdır?',
        ['9', '0', '5', '3'],
        '0',
        'Sıfır (0) en küçük sayıdır. Hiçbir şey yok demektir!',
        '0 < 3 < 5 < 9',
        1
      ),
      createMultipleChoice(
        'Hangisi en büyük sayıdır?',
        ['15', '12', '18', '14'],
        '18',
        '18 en büyük! 12 < 14 < 15 < 18',
        '12 < 14 < 15 < 18',
        1
      ),

      // Sıralama soruları
      createFillBlank(
        '10\'dan sonra gelen sayı nedir? ___',
        ['11', 'on bir', 'onbir'],
        '10, 11, 12... 10\'dan sonra 11 gelir! On bir.',
        '10 → ? → 12'
      ),
      createFillBlank(
        '8\'den sonra ___ gelir',
        ['9', 'dokuz'],
        '7, 8, 9, 10... 8\'den sonra 9 gelir!',
        '7 → 8 → ? → 10'
      ),
      createFillBlank(
        '15\'ten önce ___ gelir',
        ['14', 'on dört'],
        '...13, 14, 15. 15\'ten önce 14 gelir!',
        '13 → 14 → 15'
      ),
      createFillBlank(
        '6 ile 8 arasındaki sayı ___',
        ['7', 'yedi'],
        '6, 7, 8 - Arada 7 var!',
        '6 → ? → 8'
      ),

      // Sayı okuma soruları
      createMultipleChoice(
        '15 nasıl okunur?',
        ['Beş', 'On', 'On beş', 'Yirmi'],
        'On beş',
        '15 = 10 + 5, yani "on beş" diye okunur!',
        '15 = ON + BEŞ',
        1
      ),
      createMultipleChoice(
        '17 nasıl okunur?',
        ['Yedi', 'On yedi', 'Yirmi yedi', 'On'],
        'On yedi',
        '17 = 10 + 7 = On yedi!',
        '17 = ON + YEDİ',
        1
      ),
      createMultipleChoice(
        '"On iki" hangi sayıdır?',
        ['2', '10', '12', '20'],
        '12',
        'On iki = 10 + 2 = 12',
        'ON + İKİ = 12',
        1
      ),

      // Parmak sayma soruları
      createMultipleChoice(
        'İki elde toplam kaç parmak var?',
        ['5', '8', '10', '12'],
        '10',
        'Her elde 5 parmak var: 5 + 5 = 10 parmak!',
        '🖐️ + 🖐️ = 10',
        1
      ),
      createMultipleChoice(
        'Dört elde kaç parmak var?',
        ['10', '15', '20', '25'],
        '20',
        '4 el × 5 parmak = 20 parmak!',
        '🖐️🖐️🖐️🖐️ = 20',
        1
      ),

      // Sıfır ve boşluk soruları
      createFillBlank(
        'Sıfır kaç demek? Hiç ___ demek.',
        ['yok', 'yoktur', 'bir şey yok'],
        'Sıfır (0) hiçbir şey olmadığını gösterir. Yani "hiç yok" demek!',
        '0 = Hiç yok'
      ),
      createMultipleChoice(
        'Tabakta hiç elma yok. Kaç elma var?',
        ['1', '0', '5', '10'],
        '0',
        'Hiç elma yok = 0 elma. Sıfır!',
        '🍽️ = 0 elma',
        1
      ),

      // Toplama temelli sayma
      createMultipleChoice(
        '10 + 7 kaç eder?',
        ['15', '16', '17', '18'],
        '17',
        '10 + 7 = 17. Bu sayıya "on yedi" deriz.',
        '10 + 7 = 17',
        1
      ),
      createFillBlank(
        '13 = 10 + ___',
        ['3', 'üç'],
        '13 sayısı 10 ve 3\'ün toplamıdır: 10 + 3 = 13',
        '13 = 10 + ?'
      ),
      createFillBlank(
        '16 = 10 + ___',
        ['6', 'altı'],
        '16 = 10 + 6 (on artı altı)',
        '16 = 10 + ?'
      ),
      createFillBlank(
        '19 = 10 + ___',
        ['9', 'dokuz'],
        '19 = 10 + 9 (on artı dokuz)',
        '19 = 10 + ?'
      ),

      // Günlük hayat soruları
      createMultipleChoice(
        'Bir haftada kaç gün var?',
        ['5', '6', '7', '8'],
        '7',
        'Bir haftada 7 gün var: Pazartesi, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar!',
        '📅 = 7 gün',
        1
      ),
      createMultipleChoice(
        'Bir yılda kaç ay var?',
        ['10', '11', '12', '13'],
        '12',
        'Bir yılda 12 ay var! Ocak\'tan Aralık\'a.',
        '📅 = 12 ay',
        1
      ),
      createMultipleChoice(
        'Ahtapotun kaç kolu var?',
        ['6', '7', '8', '9'],
        '8',
        'Ahtapotun 8 kolu vardır!',
        '🐙 = 8 kol',
        1
      ),

      // Ardışık sayılar
      createMultipleChoice(
        '9\'dan sonra gelen sayı hangisi?',
        ['8', '10', '11', '7'],
        '10',
        '8, 9, 10... 9\'dan sonra 10 gelir!',
        '8 → 9 → 10',
        1
      ),
      createMultipleChoice(
        '20\'den önceki sayı hangisi?',
        ['21', '18', '19', '17'],
        '19',
        '...17, 18, 19, 20. Sayı doğrusunda 20\'den önce 19 gelir!',
        '17 → 18 → 19 → 20',
        1
      ),
      createFillBlank(
        '11\'den sonra ___ gelir',
        ['12', 'on iki'],
        '10, 11, 12... 11\'den sonra 12 gelir!',
        '10 → 11 → ?'
      ),

      // Görsel sayma soruları
      createFillBlank(
        '⭐⭐⭐⭐⭐⭐⭐ = ___ yıldız',
        ['7', 'yedi'],
        'Yıldızları tek tek sayalım: 1,2,3,4,5,6,7. Toplam 7 yıldız!',
        '⭐⭐⭐⭐⭐⭐⭐'
      ),
      createFillBlank(
        '🌸🌸🌸🌸🌸🌸🌸🌸 = ___ çiçek',
        ['8', 'sekiz'],
        'Çiçekleri sayalım: 1-2-3-4-5-6-7-8. Sekiz çiçek!',
        '🌸🌸🌸🌸🌸🌸🌸🌸'
      ),
      createFillBlank(
        '🐱🐱🐱🐱🐱 = ___ kedi',
        ['5', 'beş'],
        'Kedileri sayalım: 1, 2, 3, 4, 5. Beş kedi!',
        '🐱🐱🐱🐱🐱'
      ),

      // İleri seviye sorular
      createMultipleChoice(
        'En büyük tek basamaklı sayı hangisidir?',
        ['8', '9', '10', '0'],
        '9',
        'Tek basamaklı sayılar: 0-9 arası. En büyüğü 9!',
        '0,1,2,3,4,5,6,7,8,9 → En büyük: 9',
        2
      ),
      createMultipleChoice(
        'En küçük iki basamaklı sayı hangisidir?',
        ['9', '10', '11', '0'],
        '10',
        'İki basamaklı sayılar 10\'dan başlar. En küçüğü 10!',
        '10,11,12... → En küçük: 10',
        2
      ),
      createMultipleChoice(
        '🔵🔵🔵 + 🔴🔴🔴🔴 = ?',
        ['5', '6', '7', '8'],
        '7',
        '3 mavi + 4 kırmızı = 7 top!',
        '3 + 4 = 7',
        1
      ),
      createFillBlank(
        '20 = 10 + ___',
        ['10', 'on'],
        '20 = 10 + 10. Yirmi, iki tane ondan oluşur!',
        '20 = 10 + ?'
      ),
      createMultipleChoice(
        '5 + 5 + 5 kaç eder?',
        ['10', '12', '15', '20'],
        '15',
        '5 + 5 = 10, 10 + 5 = 15!',
        '5 + 5 + 5 = 15',
        2
      )
    ],

    summary: `🎉 TEBRİKLER! Bu derste çok şey öğrendin:

✅ 0'dan 20'ye kadar tüm sayıları öğrendin
✅ Rakamları tanıdın ve yazmayı öğrendin
✅ Sayıların sırasını biliyorsun
✅ Nesneleri sayabiliyorsun
✅ Parmaklarınla sayı gösterebiliyorsun

🌟 Artık günlük hayatta sayıları kullanabilirsin!

📌 UNUTMA:
• Sıfır = Hiç yok
• 1-9 = Tek basamaklı sayılar
• 10-20 = Çift basamaklı sayılar (hepsi "on" ile başlar)
• İki el = 10 parmak
• Dört el = 20 parmak`,

    nextTopicPreview: 'Sonraki konuda nesneleri nasıl sayacağımızı ve gruplayacağımızı öğreneceğiz! 🎯'
  }
};
