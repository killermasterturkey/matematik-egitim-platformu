// 1. SINIF - TEMA 1 - KONU 4: Sayıları Karşılaştıralım
// Detaylı içerik: 8 adım, 45+ soru
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu4Karsilastirma: Topic = {
  id: 'karsilastirma',
  title: 'Sayıları Karşılaştıralım',
  description: 'Az, çok, eşit kavramlarını ve karşılaştırma sembollerini (>, <, =) öğren',
  emoji: '⚖️',
  duration: '55 dk',
  difficulty: 1,
  keywords: ['çok', 'az', 'eşit', 'büyük', 'küçük', 'karşılaştırma', 'timsah', 'sembol'],
  objectives: [
    'Nesnelerin sayılarını birebir eşleme ile karşılaştırır',
    'Az, çok, eşit kavramlarını doğru kullanır',
    '>, <, = sembollerini tanır ve doğru yere koyar',
    'Timsah kuralını kullanarak sembolleri hatırlar',
    'Sayıları büyükten küçüğe veya küçükten büyüğe sıralar',
    'Sayı doğrusunu kullanarak karşılaştırma yapar'
  ],
  content: {
    introduction: `Merhaba küçük karşılaştırma ustası! ⚖️

Bugün çok önemli bir beceri öğreneceğiz: KARŞILAŞTIRMA!

Hangisi daha çok? Hangisi daha az? İkisi eşit mi?

Bu soruların cevaplarını bulmak için özel semboller kullanacağız:
• > büyüktür
• < küçüktür
• = eşittir

Ayrıca sana yardımcı olacak bir arkadaşımız var: TİMSAH! 🐊
Timsah hep büyük sayıyı yemek ister, bu yüzden ağzını hep büyük sayıya açar!

Haydi karşılaştırma dünyasına girelim! 🚀`,

    motivationQuote: 'Karşılaştırarak dünyayı daha iyi anlarız! Her gün neyin daha çok, neyin daha az olduğunu anlamamız gerekir! ⚖️',

    funFacts: [
      'Filler karada yaşayan en ağır hayvanlardır - 6000 kg! 🐘',
      'Karıncalar kendi ağırlıklarının 50 katını taşıyabilir! 🐜',
      'En uzun hayvan mavi balinadır - 30 metre! 🐋',
      'Çita en hızlı kara hayvanıdır - saatte 120 km! 🐆',
      'Zurafa en uzun boylu hayvandır - 6 metre! 🦒',
      'Bir timsahın 80 dişi vardır ve hayatı boyunca yenilenir! 🐊',
      'İnsan kalbi günde yaklaşık 100.000 kez atar! ❤️'
    ],

    steps: [
      createStep(
        'Çok ve Az Kavramı',
        `İki grubu karşılaştırırken:

📦 ÇOK: Sayısı FAZLA olan grup
📦 AZ: Sayısı EKSİK olan grup

NASIL ANLARIZ?
1. Her iki grubu say
2. Sayıları karşılaştır
3. Büyük sayılı grup ÇOK, küçük sayılı grup AZ

ÖRNEK:
🍎🍎🍎🍎🍎 ve 🍎🍎
Birinci grupta 5 elma
İkinci grupta 2 elma
5 > 2 olduğu için:
• 5 elmada ÇOK
• 2 elmada AZ`,
        '5 elma, 2 elmadan çoktur. 2 elma, 5 elmadan azdır.',
        {
          visual: `KARŞILAŞTIRMA:
🍎🍎🍎🍎🍎  ←  ÇOK (5)
    vs
🍎🍎        ←  AZ (2)

5 büyük sayı → ÇOK
2 küçük sayı → AZ`,
          tip: 'Sayarken büyük çıkan grupta ÇOK, küçük çıkan grupta AZ vardır!',
          examples: [
            createExample(
              '7 top ve 3 top. Hangisinde çok?',
              '7 top',
              '7 > 3 olduğu için 7 toplu grupta daha çok top var!',
              '🔵🔵🔵🔵🔵🔵🔵 > 🔵🔵🔵'
            ),
            createExample(
              '4 kuş ve 9 kuş. Hangisinde az?',
              '4 kuş',
              '4 < 9 olduğu için 4 kuşlu grupta daha az kuş var!',
              '🐦🐦🐦🐦 < 🐦🐦🐦🐦🐦🐦🐦🐦🐦'
            ),
            createExample(
              '8 kalem ve 2 kalem. Hangisi çok, hangisi az?',
              '8 çok, 2 az',
              '8 > 2 olduğu için 8 kalem çok, 2 kalem az!',
              '✏️✏️✏️✏️✏️✏️✏️✏️ (çok) vs ✏️✏️ (az)'
            ),
            createExample(
              '6 yıldız ve 10 yıldız. Hangisinde çok?',
              '10 yıldız',
              '10 > 6 olduğu için 10 yıldızlı grupta daha çok yıldız var!',
              '⭐x6 < ⭐x10'
            ),
            createExample(
              '1 araba ve 5 araba. Hangisinde az?',
              '1 araba',
              '1 < 5 olduğu için 1 araba en az!',
              '🚗 < 🚗🚗🚗🚗🚗'
            )
          ]
        }
      ),

      createStep(
        'Eşit Kavramı',
        `İki grup AYNI sayıda nesneye sahipse EŞİT deriz.

🟢🟢🟢 = 🟡🟡🟡

Her iki grupta da 3 tane var, yani EŞİTLER!

EŞİTLİK SEMBOLİ: = (eşittir)

YAZIM:
• "3 eşittir 3"
• "3 = 3" şeklinde yazarız

ÖNEMLİ KURALLAR:
✅ Her sayı kendisine eşittir: 5 = 5, 7 = 7
✅ Farklı sayılar eşit DEĞİLDİR: 3 ≠ 5
✅ Nesneler farklı olsa da sayılar aynıysa eşittir:
   🍎🍎🍎 = 🍊🍊🍊 (3 = 3)`,
        'Eşit demek "aynı sayıda" demektir. 3 elma = 3 portakal!',
        {
          visual: `EŞİTLİK ÖRNEKLERİ:
🟢🟢🟢 = 🟡🟡🟡
   3    =    3
    ↓   =   ↓
  EŞİT! ✓

🍎🍎🍎🍎 = 🍋🍋🍋🍋
    4    =    4
      EŞİT! ✓

DİKKAT:
🔵🔵🔵 ≠ 🔴🔴🔴🔴🔴
   3   ≠    5
  EŞİT DEĞİL! ✗`,
          explanation: 'Eşit demek "aynı sayıda" demektir. Nesneler farklı olabilir!',
          examples: [
            createExample(
              '4 elma ve 4 armut eşit mi?',
              'Evet, eşit',
              '4 = 4 olduğu için eşitler! İkisinde de 4 tane var.',
              '🍎🍎🍎🍎 = 🍐🍐🍐🍐'
            ),
            createExample(
              '6 = 6 doğru mu?',
              'Evet, doğru',
              'Bir sayı kendisine her zaman eşittir!',
              '6 = 6 ✓'
            ),
            createExample(
              '5 kuş ve 5 kelebek eşit mi?',
              'Evet, eşit',
              '5 = 5 olduğu için eşitler! İkisinde de 5 tane var.',
              '🐦🐦🐦🐦🐦 = 🦋🦋🦋🦋🦋'
            ),
            createExample(
              '3 ve 8 eşit mi?',
              'Hayır, eşit değil',
              '3 ≠ 8. Farklı sayılar eşit olamaz!',
              '3 ≠ 8 (Eşit değil)'
            ),
            createExample(
              '10 = 10 doğru mu?',
              'Evet, doğru',
              '10, 10\'a eşittir. Her sayı kendisine eşittir!',
              '10 = 10 ✓'
            )
          ]
        }
      ),

      createStep(
        'Birebir Eşleme ile Karşılaştırma',
        `Sayı saymadan da karşılaştırma yapabiliriz!

BİREBİR EŞLEME:
Her nesneyi karşısındakiyle eşle.
Eşi kalmayan grup ÇOK demektir!

ÖRNEK:
🍎 - 🍊
🍎 - 🍊
🍎 - 🍊
🍎 - ❌ (eşi yok!)
🍎 - ❌ (eşi yok!)

5 elma, 3 portakanla eşlendi.
2 elmanın eşi kalmadı.
Yani: 5 elma > 3 portakal`,
        'Birebir eşleme ile saymadan da karşılaştırma yapabiliriz!',
        {
          visual: `BİREBİR EŞLEME:
🐶 — 🦴
🐶 — 🦴
🐶 — 🦴
🐶 — ❌ (kemik yok!)

4 köpek, 3 kemik
4 > 3
Köpekler daha çok!`,
          tip: 'Eşleştirirken eşi kalmayan grup daha çoktur!',
          examples: [
            createExample(
              '3 çocuk ve 3 şeker. Eşit mi?',
              'Evet, eşit',
              'Her çocuğa 1 şeker düşer, eşi kalmaz. 3 = 3!',
              '👧-🍬 👦-🍬 👧-🍬 (Tam eşit!)'
            ),
            createExample(
              '5 öğrenci ve 4 sandalye. Hangisi çok?',
              'Öğrenci çok',
              '1 öğrencinin sandalyesi yok, öğrenci fazla. 5 > 4!',
              '👤👤👤👤👤 > 🪑🪑🪑🪑'
            ),
            createExample(
              '6 tabak ve 6 kaşık. Eşit mi?',
              'Evet, eşit',
              'Her tabağa 1 kaşık düşer. 6 = 6!',
              '🍽️🍽️🍽️🍽️🍽️🍽️ = 🥄🥄🥄🥄🥄🥄'
            ),
            createExample(
              '7 arı ve 4 çiçek. Hangisi az?',
              'Çiçek az',
              '3 arının çiçeği yok. 4 < 7, çiçek az!',
              '🐝🐝🐝🐝🐝🐝🐝 vs 🌸🌸🌸🌸'
            ),
            createExample(
              '8 parmak ve 8 yüzük. Eşit mi?',
              'Evet, eşit',
              'Her parmağa 1 yüzük düşer. 8 = 8!',
              '👆x8 = 💍x8'
            )
          ]
        }
      ),

      createStep(
        'Karşılaştırma Sembolleri',
        `Üç önemli sembol var:

> BÜYÜKTÜR (sağa bakan timsah ağzı)
  • Soldaki sayı BÜYÜK
  • 8 > 5 → "8 büyüktür 5"

< KÜÇÜKTÜR (sola bakan timsah ağzı)
  • Soldaki sayı KÜÇÜK
  • 3 < 7 → "3 küçüktür 7"

= EŞİTTİR (iki paralel çizgi)
  • İki sayı AYNI
  • 4 = 4 → "4 eşittir 4"

🐊 TİMSAH KURALI:
Timsahın ağzı her zaman BÜYÜK sayıya bakar!
5 > 3 → Timsah 5'e bakıyor çünkü 5 büyük!
2 < 7 → Timsah 7'ye bakıyor çünkü 7 büyük!`,
        'Timsahın ağzı büyük sayıya bakar! > veya < kullan, eşitse = kullan.',
        {
          visual: `SEMBOLLER:

BÜYÜKTÜR (>):
5 > 3  →  🐊 ağzı 5'e bakıyor
"5 büyüktür 3"

KÜÇÜKTÜR (<):
2 < 7  →  🐊 ağzı 7'ye bakıyor
"2 küçüktür 7"

EŞİTTİR (=):
4 = 4  →  İkisi eşit!
"4 eşittir 4"

TİMSAH:
  🐊
 ----→  büyük sayıya bakar!`,
          tip: 'Timsah hep daha büyük sayıyı yemek ister! Ağzını büyük sayıya aç! 🐊',
          examples: [
            createExample(
              '8 ? 6 arasına hangi sembol gelir?',
              '>',
              '8 > 6 (8 büyüktür 6). Timsah 8\'e bakıyor!',
              '8 🐊 6 → 8 > 6'
            ),
            createExample(
              '3 ? 9 arasına hangi sembol gelir?',
              '<',
              '3 < 9 (3 küçüktür 9). Timsah 9\'a bakıyor!',
              '3 🐊 9 → 3 < 9'
            ),
            createExample(
              '7 ? 7 arasına hangi sembol gelir?',
              '=',
              '7 = 7 (7 eşittir 7). İki sayı aynı!',
              '7 = 7'
            ),
            createExample(
              '10 ? 5 arasına hangi sembol gelir?',
              '>',
              '10 > 5 (10 büyüktür 5). Timsah 10\'a bakıyor!',
              '10 🐊 5 → 10 > 5'
            ),
            createExample(
              '4 ? 11 arasına hangi sembol gelir?',
              '<',
              '4 < 11 (4 küçüktür 11). Timsah 11\'e bakıyor!',
              '4 🐊 11 → 4 < 11'
            )
          ]
        }
      ),

      createStep(
        'Sayı Doğrusunda Karşılaştırma',
        `Sayı doğrusu, sayıları sırayla gösterir:

0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10

ÖNEMLİ KURALLAR:
• SAĞA gidildikçe sayılar BÜYÜR
• SOLA gidildikçe sayılar KÜÇÜLÜR
• Sağdaki sayı her zaman soldakinden BÜYÜK

ÖRNEK:
0--1--2--3--4--5--6--7--8--9--10
          ↑           ↑
          4           7

4 solda, 7 sağda
7 daha sağda olduğu için 7 > 4
4 daha solda olduğu için 4 < 7`,
        'Sayı doğrusunda sağa gidildikçe sayılar büyür, sola gidildikçe küçülür.',
        {
          visual: `SAYI DOĞRUSU:
0--1--2--3--4--5--6--7--8--9--10
←←← KÜÇÜK          BÜYÜK →→→

Örnek 1:
0--1--2--3--4--5--6--7--8--9--10
      ↑                 ↑
      3                 8
3 < 8 (3 solda, 8 sağda)

Örnek 2:
0--1--2--3--4--5--6--7--8--9--10
            ↑     ↑
            5     6
5 < 6 (5 solda, 6 sağda)`,
          explanation: 'Sayarken sonra gelen sayı her zaman daha büyüktür. 1,2,3... diye sayarken her sayı öncekinden büyük!',
          examples: [
            createExample(
              '6 mı büyük, 9 mu?',
              '9',
              'Sayı doğrusunda 9, 6\'dan sağda. Yani 9 > 6!',
              '0--1--2--3--4--5--6--7--8--9--10 (9 sağda)'
            ),
            createExample(
              '2 mi küçük, 5 mi?',
              '2',
              'Sayı doğrusunda 2, 5\'ten solda. Yani 2 < 5!',
              '0--1--2--3--4--5 (2 solda)'
            ),
            createExample(
              '8 ve 3 karşılaştır',
              '8 > 3',
              '8 daha sağda, 3 daha solda. 8 > 3!',
              '3 ← ... → 8'
            ),
            createExample(
              '1 ve 10 karşılaştır',
              '1 < 10',
              '1 en solda, 10 en sağda. 1 < 10!',
              '1 ← ... ... ... → 10'
            ),
            createExample(
              '7 ve 4 karşılaştır',
              '7 > 4',
              '7 daha sağda olduğu için 7 büyük. 7 > 4!',
              '4 ← ... → 7'
            )
          ]
        }
      ),

      createStep(
        'Sayıları Sıralama',
        `Sayıları iki şekilde sıralayabiliriz:

1️⃣ KÜÇÜKTEN BÜYÜĞE (Artan Sıra):
   En küçükten başla, büyüğe doğru git
   Örnek: 2, 5, 8, 10 (← doğru sıra)

2️⃣ BÜYÜKTEN KÜÇÜĞE (Azalan Sıra):
   En büyükten başla, küçüğe doğru git
   Örnek: 10, 8, 5, 2 (← doğru sıra)

NASIL SIRALARIZ?
1. Tüm sayıları bul
2. En küçüğü veya en büyüğü seç
3. Sırayla yaz

ÖRNEK: 7, 3, 9, 1
• Küçükten büyüğe: 1, 3, 7, 9
• Büyükten küçüğe: 9, 7, 3, 1`,
        'Sayıları küçükten büyüğe veya büyükten küçüğe sıralayabiliriz.',
        {
          visual: `SIRALAMA ÖRNEĞİ:
Sayılar: 5, 2, 8, 4

Küçükten büyüğe (↑):
2 → 4 → 5 → 8

Büyükten küçüğe (↓):
8 → 5 → 4 → 2

SAYI DOĞRUSUNDA:
0--1--2--3--4--5--6--7--8--9--10
      ↑  ↑  ↑     ↑
      2  4  5     8`,
          tip: 'Sayı doğrusunu kullan! Soldan sağa küçükten büyüğe sıralanır.',
          examples: [
            createExample(
              '4, 1, 7, 3 - Küçükten büyüğe sırala',
              '1, 3, 4, 7',
              'En küçük 1, sonra 3, 4, en büyük 7',
              '1 < 3 < 4 < 7'
            ),
            createExample(
              '9, 2, 6, 5 - Büyükten küçüğe sırala',
              '9, 6, 5, 2',
              'En büyük 9, sonra 6, 5, en küçük 2',
              '9 > 6 > 5 > 2'
            ),
            createExample(
              '8, 10, 3 - Küçükten büyüğe sırala',
              '3, 8, 10',
              'En küçük 3, sonra 8, en büyük 10',
              '3 < 8 < 10'
            ),
            createExample(
              '6, 1, 4, 9, 2 - En küçük hangisi?',
              '1',
              'Sayılar içinde en solda olan 1\'dir. 1 en küçük!',
              'En küçük: 1'
            ),
            createExample(
              '5, 8, 2, 7 - En büyük hangisi?',
              '8',
              'Sayılar içinde en sağda olan 8\'dir. 8 en büyük!',
              'En büyük: 8'
            )
          ]
        }
      ),

      createStep(
        'Günlük Hayatta Karşılaştırma',
        `Karşılaştırma günlük hayatımızda çok kullanılır:

🛒 MARKETTE:
• "Hangi kuyruk daha kısa?"
• "Hangi meyve daha ucuz?"
• "Hangi pakette daha çok var?"

🏫 OKULDA:
• "Sınıfta kaç kız, kaç erkek var?"
• "Hangi sınıf daha kalabalık?"
• "Matematik mi zor, Türkçe mi?"

🏠 EVDE:
• "Kim daha uzun?" (boy karşılaştırması)
• "Hangi bardakta daha çok su var?"
• "Kimin daha çok oyuncağı var?"

⚽ OYUNDA:
• "Kim kazandı?" (skor karşılaştırması)
• "Kaç gol attık, kaç gol yedik?"`,
        'Karşılaştırma her yerde kullanılır: markette, okulda, evde, oyunda!',
        {
          visual: `GÜNLÜK HAYAT ÖRNEKLERİ:

Futbol maçı:
Takım A: ⚽⚽⚽ (3 gol)
Takım B: ⚽⚽ (2 gol)
3 > 2 → Takım A kazandı!

Market kuyruğu:
Kuyruk 1: 👤👤👤👤👤 (5 kişi)
Kuyruk 2: 👤👤👤 (3 kişi)
3 < 5 → Kuyruk 2 daha kısa!

Boy karşılaştırması:
Ali: 📏 120 cm
Ayşe: 📏 115 cm
120 > 115 → Ali daha uzun!`,
          examples: [
            createExample(
              'Maçta 4-2 yendik. Hangisi çok?',
              'Attığımız goller (4)',
              '4 > 2 olduğu için biz daha çok gol attık ve kazandık!',
              '⚽⚽⚽⚽ > ⚽⚽'
            ),
            createExample(
              'Kuyrukta 6 kişi, diğerinde 3 kişi. Hangisi kısa?',
              '3 kişilik kuyruk',
              '3 < 6 olduğu için 3 kişilik kuyruk daha kısa!',
              '👤👤👤 < 👤👤👤👤👤👤'
            ),
            createExample(
              'Ali 8 yaşında, Mehmet 6 yaşında. Kim büyük?',
              'Ali',
              '8 > 6 olduğu için Ali daha büyük (yaşça)!',
              '8 yaş > 6 yaş'
            ),
            createExample(
              'Bir pakette 10 bisküvi, diğerinde 10 bisküvi. Karşılaştır.',
              'Eşit',
              '10 = 10 olduğu için iki pakette de eşit miktarda bisküvi var!',
              '🍪x10 = 🍪x10'
            ),
            createExample(
              'Annem 35 yaşında, babam 40 yaşında. Kim genç?',
              'Annem',
              '35 < 40 olduğu için annem daha genç (yaşı küçük)!',
              '35 yaş < 40 yaş'
            )
          ]
        }
      ),

      createStep(
        'Pratik Zamanı! 🎯',
        `Tebrikler! Karşılaştırma ustası oldun! 🏆

📝 HATIRLA:
• > büyüktür (timsah büyüğe bakar)
• < küçüktür (timsah büyüğe bakar)
• = eşittir (aynı sayı)

🐊 TİMSAH KURALI:
Timsahın ağzı HER ZAMAN büyük sayıya bakar!
8 > 5 → Timsah 8'e bakıyor
3 < 7 → Timsah 7'ye bakıyor

📊 SAYI DOĞRUSU:
Sağdaki sayı büyük, soldaki sayı küçük!

🎯 ADIMLAR:
1. İki sayıyı bul
2. Hangisi büyük, hangisi küçük karar ver
3. Timsahı büyük sayıya doğru çevir
4. Doğru sembolü yaz!`,
        'Artık karşılaştırma ustasısın! >, <, = sembollerini doğru kullanabilirsin!',
        {
          visual: `KARŞILAŞTIRMA ÖZETİ:
┌────────────────────────────┐
│ SEMBOL │ ANLAMI   │ ÖRNEK │
├────────┼──────────┼───────┤
│   >    │ Büyüktür │ 8 > 5 │
│   <    │ Küçüktür │ 3 < 7 │
│   =    │ Eşittir  │ 6 = 6 │
└────────┴──────────┴───────┘

🐊 TİMSAH: Büyük sayıyı yer!

SAYI DOĞRUSU:
0--1--2--3--4--5--6--7--8--9--10
KÜÇÜK ←←←          →→→ BÜYÜK`,
          tip: 'Her zaman timsahı düşün! Timsah büyük sayıyı yemek ister!',
          examples: [
            createExample(
              '12 ve 15\'i karşılaştır',
              '12 < 15',
              '12 küçüktür 15. Timsah 15\'e bakıyor!',
              '12 🐊 15 → 12 < 15'
            ),
            createExample(
              '20 ve 18\'i karşılaştır',
              '20 > 18',
              '20 büyüktür 18. Timsah 20\'ye bakıyor!',
              '20 🐊 18 → 20 > 18'
            ),
            createExample(
              '9 ve 9\'u karşılaştır',
              '9 = 9',
              '9 eşittir 9. İkisi aynı!',
              '9 = 9'
            ),
            createExample(
              '100 ve 50\'yi karşılaştır',
              '100 > 50',
              '100 büyüktür 50. Timsah 100\'e bakıyor!',
              '100 🐊 50 → 100 > 50'
            ),
            createExample(
              '1, 5, 3, 8, 2 - En büyük ve en küçük?',
              'En büyük: 8, En küçük: 1',
              'Sayı doğrusunda 8 en sağda (büyük), 1 en solda (küçük)!',
              '1 < 2 < 3 < 5 < 8'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // Çok/Az Kavramı
      createMultipleChoice(
        'Hangisi daha çok? 8 mi 5 mi?',
        ['5', '8', 'Eşit', 'Belli değil'],
        '8',
        '8 > 5, yani 8 daha çok!'
      ),
      createMultipleChoice(
        '7 top ve 3 top. Hangisinde az?',
        ['7 top', '3 top', 'Eşit', 'İkisi de'],
        '3 top',
        '3 < 7, yani 3 toplu grupta daha az!'
      ),
      createMultipleChoice(
        '4 kuş ve 9 kuş. Hangisinde çok?',
        ['4 kuş', '9 kuş', 'Eşit', 'Hiçbiri'],
        '9 kuş',
        '9 > 4, yani 9 kuşlu grupta daha çok!'
      ),
      createMultipleChoice(
        '2 elma ve 6 elma. Hangisinde az?',
        ['2 elma', '6 elma', 'Eşit', 'Kararsızım'],
        '2 elma',
        '2 < 6, yani 2 elmalı grupta daha az!'
      ),
      createMultipleChoice(
        '10 kalem ve 5 kalem. Hangisinde çok?',
        ['5 kalem', '10 kalem', 'Eşit', 'İkisinde de'],
        '10 kalem',
        '10 > 5, yani 10 kalemli grupta daha çok!'
      ),

      // Eşit Kavramı
      createMultipleChoice(
        '🍎🍎🍎 ve 🍊🍊🍊 karşılaştırması?',
        ['Elma çok', 'Portakal çok', 'Eşit', 'Karşılaştırılamaz'],
        'Eşit',
        '3 = 3, ikisi de 3 tane olduğu için eşit!'
      ),
      createMultipleChoice(
        '5 = 5 doğru mu?',
        ['Doğru', 'Yanlış', 'Bazen', 'Belli değil'],
        'Doğru',
        'Her sayı kendisine eşittir! 5 = 5 doğru!'
      ),
      createMultipleChoice(
        '4 kuş ve 4 kelebek eşit mi?',
        ['Evet', 'Hayır', 'Bazen', 'Nesneler farklı'],
        'Evet',
        '4 = 4, sayılar eşit! Nesneler farklı olsa da sayılar aynı.'
      ),

      // Sembol Soruları
      createFillBlank(
        '6 ___ 9 (>, < veya =)',
        ['<', 'küçüktür'],
        '6 < 9, çünkü 6 küçüktür 9!'
      ),
      createFillBlank(
        '15 ___ 12',
        ['>', 'büyüktür'],
        '15 > 12, çünkü 15 büyüktür 12!'
      ),
      createFillBlank(
        '10 ___ 10',
        ['=', 'eşit', 'eşittir'],
        '10 = 10, bir sayı kendisine eşittir!'
      ),
      createFillBlank(
        '2 ___ 8',
        ['<', 'küçüktür'],
        '2 < 8, çünkü 2 küçüktür 8!'
      ),
      createFillBlank(
        '20 ___ 18',
        ['>', 'büyüktür'],
        '20 > 18, çünkü 20 büyüktür 18!'
      ),
      createFillBlank(
        '1 ___ 19',
        ['<', 'küçüktür'],
        '1 < 19, çünkü 1 çok küçüktür 19!'
      ),
      createFillBlank(
        '7 ___ 7',
        ['=', 'eşit', 'eşittir'],
        '7 = 7, bir sayı kendisine eşittir!'
      ),
      createFillBlank(
        '14 ___ 9',
        ['>', 'büyüktür'],
        '14 > 9, çünkü 14 büyüktür 9!'
      ),

      // Timsah Kuralı
      createMultipleChoice(
        'Timsah sembolü hangi sayıya bakar?',
        ['Küçük sayıya', 'Büyük sayıya', 'İkisine de', 'Hiçbirine'],
        'Büyük sayıya',
        'Timsahın ağzı her zaman büyük sayıya bakar! 🐊'
      ),
      createMultipleChoice(
        '5 🐊 3 - Timsah hangi sayıya bakıyor?',
        ['3', '5', 'İkisine de', 'Hiçbirine'],
        '5',
        'Timsah 5\'e bakıyor çünkü 5, 3\'ten büyük!'
      ),
      createMultipleChoice(
        '2 🐊 9 - Timsah hangi sayıya bakıyor?',
        ['2', '9', 'İkisine de', 'Hiçbirine'],
        '9',
        'Timsah 9\'a bakıyor çünkü 9, 2\'den büyük!'
      ),

      // Sayı Doğrusu
      createMultipleChoice(
        'Sayı doğrusunda sağa gidildikçe sayılar ne olur?',
        ['Küçülür', 'Büyür', 'Aynı kalır', 'Değişmez'],
        'Büyür',
        'Sayı doğrusunda sağa gidildikçe sayılar büyür!'
      ),
      createMultipleChoice(
        'Sayı doğrusunda 4 mü solda, 7 mi?',
        ['4', '7', 'İkisi de aynı yerde', 'Belli değil'],
        '4',
        '4 daha solda, 7 daha sağda. Solda olan küçüktür!'
      ),

      // Görsel Karşılaştırma
      createMultipleChoice(
        '🔵🔵🔵🔵🔵 ve 🔴🔴🔴 hangisi daha çok?',
        ['Mavi', 'Kırmızı', 'Eşit', 'Yok'],
        'Mavi',
        '5 > 3, mavi toplar daha çok!'
      ),
      createMultipleChoice(
        '🌟🌟🌟🌟🌟🌟 ve 🌟🌟🌟🌟 karşılaştırması?',
        ['6 > 4', '6 < 4', '6 = 4', '4 > 6'],
        '6 > 4',
        '6 yıldız > 4 yıldız, 6 büyüktür 4!'
      ),
      createMultipleChoice(
        '🍎🍎🍎🍎 ve 🍎🍎🍎🍎 eşit mi?',
        ['Evet', 'Hayır', 'Bazen', 'Belli değil'],
        'Evet',
        '4 = 4, ikisinde de 4 elma var, eşitler!'
      ),

      // En Büyük/En Küçük
      createMultipleChoice(
        'En küçük sayı hangisi?',
        ['7', '3', '9', '5'],
        '3',
        '3, listedeki en küçük sayıdır: 3 < 5 < 7 < 9'
      ),
      createMultipleChoice(
        'En büyük sayı hangisi?',
        ['4', '8', '2', '6'],
        '8',
        '8, listedeki en büyük sayıdır: 2 < 4 < 6 < 8'
      ),
      createMultipleChoice(
        '1, 5, 3, 9, 2 - En büyük hangisi?',
        ['1', '5', '3', '9'],
        '9',
        '9, listedeki en büyük sayıdır!'
      ),
      createMultipleChoice(
        '8, 4, 6, 2, 10 - En küçük hangisi?',
        ['8', '4', '6', '2'],
        '2',
        '2, listedeki en küçük sayıdır!'
      ),

      // Sıralama
      createMultipleChoice(
        '5, 2, 8 - Küçükten büyüğe doğru sıralama?',
        ['5, 2, 8', '8, 5, 2', '2, 5, 8', '2, 8, 5'],
        '2, 5, 8',
        'Küçükten büyüğe: 2 < 5 < 8'
      ),
      createMultipleChoice(
        '9, 3, 6 - Büyükten küçüğe doğru sıralama?',
        ['3, 6, 9', '9, 6, 3', '6, 3, 9', '9, 3, 6'],
        '9, 6, 3',
        'Büyükten küçüğe: 9 > 6 > 3'
      ),
      createMultipleChoice(
        '4, 1, 7, 2 - Küçükten büyüğe sırala',
        ['1, 2, 4, 7', '7, 4, 2, 1', '4, 7, 1, 2', '2, 1, 4, 7'],
        '1, 2, 4, 7',
        'Küçükten büyüğe: 1 < 2 < 4 < 7'
      ),

      // Doğru/Yanlış Karşılaştırma
      createMultipleChoice(
        '11 ve 11 nasıl karşılaştırılır?',
        ['11 > 11', '11 < 11', '11 = 11', '11 ≠ 11'],
        '11 = 11',
        'Aynı sayılar eşittir! 11 = 11'
      ),
      createMultipleChoice(
        'Hangi karşılaştırma yanlıştır?',
        ['5 > 3', '7 < 9', '6 = 8', '4 < 10'],
        '6 = 8',
        '6 ≠ 8! 6 ve 8 farklı sayılar, eşit değiller.'
      ),
      createMultipleChoice(
        'Hangi karşılaştırma doğrudur?',
        ['3 > 7', '5 = 9', '8 < 4', '6 > 2'],
        '6 > 2',
        '6 > 2 doğru! 6, 2\'den büyüktür.'
      ),
      createMultipleChoice(
        '9 > 12 doğru mu?',
        ['Doğru', 'Yanlış', 'Bazen doğru', 'Belli değil'],
        'Yanlış',
        '9 < 12! 9, 12\'den küçüktür. Yani 9 > 12 yanlış!'
      ),

      // Günlük Hayat
      createMultipleChoice(
        'Maçta 5-3 yendik. Hangisi çok?',
        ['Attığımız gol', 'Yediğimiz gol', 'Eşit', 'Belli değil'],
        'Attığımız gol',
        '5 > 3, attığımız goller daha çok!'
      ),
      createMultipleChoice(
        'Ali 7 yaşında, Ayşe 9 yaşında. Kim büyük?',
        ['Ali', 'Ayşe', 'İkisi de', 'Belli değil'],
        'Ayşe',
        '9 > 7, Ayşe daha büyük (yaşça)!'
      ),
      createFillBlank(
        'Sınıfta 15 kız, 12 erkek var. Kızlar ___ erkekler',
        ['>', 'fazla', 'çok'],
        '15 > 12, kızlar daha fazla!'
      ),
      createFillBlank(
        'Bir kitapta 50 sayfa, diğerinde 50 sayfa. İki kitap ___',
        ['=', 'eşit'],
        '50 = 50, iki kitapta da aynı sayfa sayısı var!'
      ),

      // Karışık Sorular
      createFillBlank(
        '3 ___ 3',
        ['=', 'eşit', 'eşittir'],
        '3 = 3, aynı sayılar eşittir!'
      ),
      createFillBlank(
        '17 ___ 13',
        ['>', 'büyüktür'],
        '17 > 13, çünkü 17 büyüktür 13!'
      ),
      createFillBlank(
        '4 ___ 11',
        ['<', 'küçüktür'],
        '4 < 11, çünkü 4 küçüktür 11!'
      ),
      createMultipleChoice(
        'Hangisinde = sembolü kullanılır?',
        ['5 ve 8', '3 ve 3', '9 ve 6', '1 ve 4'],
        '3 ve 3',
        '3 = 3, aynı sayılar eşit olduğu için = kullanılır!'
      ),
      createMultipleChoice(
        'Hangisinde > sembolü kullanılır?',
        ['2 ve 7', '4 ve 4', '3 ve 9', '8 ve 5'],
        '8 ve 5',
        '8 > 5, 8 büyük olduğu için > kullanılır!'
      ),
      createMultipleChoice(
        'Hangisinde < sembolü kullanılır?',
        ['6 ve 3', '5 ve 5', '2 ve 8', '9 ve 4'],
        '2 ve 8',
        '2 < 8, 2 küçük olduğu için < kullanılır!'
      )
    ],

    summary: 'Karşılaştırma sembollerini (>, <, =) öğrendik. Timsah kuralı ile sembolleri kolayca hatırlayabiliyoruz: Timsahın ağzı her zaman büyük sayıya bakar! Sayı doğrusunda sağdaki sayı büyük, soldaki küçüktür.',
    nextTopicPreview: 'Sonraki konuda ritmik sayma (ikişer, beşer, onar) öğreneceğiz!'
  }
};
