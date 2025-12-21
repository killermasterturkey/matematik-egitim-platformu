// 2. SINIF - TEMA 2 - KONU 1: 100'e Kadar Sayılar
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1_100eKadarSayilar: Topic = {
  id: '100e-kadar-sayilar',
  title: '100\'e Kadar Sayılar',
  description: 'İki basamaklı sayıları okuma, yazma ve anlama',
  emoji: '💯',
  duration: '50 dk',
  difficulty: 2,
  keywords: ['yüz', 'iki basamak', 'onluk', 'birlik', 'basamak değeri', 'sayı doğrusu'],
  objectives: [
    '100\'e kadar sayıları okur ve yazar',
    'Onluk ve birlik kavramlarını anlar',
    'Basamak değerini belirler',
    'Sayıları karşılaştırır ve sıralar',
    'Sayı doğrusunda gösterir'
  ],
  content: {
    introduction: `Merhaba küçük matematikçi! 💯

Bugün 100'e kadar sayıları öğreneceğiz! Bu sayılar iki basamaktan oluşur: ONLAR ve BİRLER.

🔢 NEDEN 100'E KADAR SAYILAR ÖNEMLİ?

Günlük hayatta her yerde kullanırız:
📚 Kitaptaki sayfa sayısı: 87 sayfa
👨‍👩‍👧‍👦 Sınıftaki öğrenci sayısı: 32 kişi
🎂 Büyükanne/büyükbabanın yaşı: 75 yaş
🛒 Marketteki fiyatlar: 45 TL, 99 TL
⚽ Maç skoru: 3-2 (ama tribündeki seyirci: 45.000)
🌡️ Sıcaklık: 28 derece

İki basamaklı sayıları anladığında:
✅ Paraları sayabilirsin
✅ Sayfaları bulabilirsin
✅ Yaşları hesaplayabilirsin
✅ Tarihleri okuyabilirsin

Haydi başlayalım! 🚀`,

    motivationQuote: 'Büyük sayılar büyük başarılar getirir! 100\'e kadar sayı öğrenmek, matematiğin kapısını açar! 💯✨',

    funFacts: [
      '💡 100 yılda bir yüzyıl denir! 20. yüzyıl 1901-2000, 21. yüzyıl 2001-2100 yılları arasıdır.',
      '📏 Santimetre kelimesi "yüzde bir metre" demektir! 100 santimetre = 1 metre.',
      '💰 100 kuruş = 1 TL! Para sistemimiz de 100\'lük sistem kullanır.',
      '🏊 Olimpik yüzme havuzu 50 metre, gidiş-dönüş 100 metre!',
      '🔢 Bilgisayarlar 0 ve 1 kullanır ama biz 0-9 arası 10 rakam kullanırız!',
      '📅 Bir yüzyıl = 100 yıl, Yarım yüzyıl = 50 yıl, Çeyrek yüzyıl = 25 yıl.',
      '🎯 Okulda 100 üzerinden not sistemi vardır. 100 = Tam puan!',
      '🌡️ Suyun kaynama noktası 100°C\'dir!',
      '🏃 100 metre koşusu dünyanın en hızlı yarışıdır - rekoru 9.58 saniye!',
      '🎪 Sirklerde yüzlerce gösteri var - 100\'lerce farklı numara!'
    ],

    steps: [
      createStep(
        'Onluklar ve Birlikler 🔢',
        `İki basamaklı sayılar ONLUK ve BİRLİK olarak iki kısımdan oluşur.

📊 BASAMAK SİSTEMİ:

Soldaki rakam → ONLAR basamağı (değeri 10 katı)
Sağdaki rakam → BİRLER basamağı (değeri kendisi)

ÖRNEK: 45 sayısını inceleyelim
┌───┬───┐
│ 4 │ 5 │
└───┴───┘
  ↓   ↓
Onlar Birler

45 = 4 onluk + 5 birlik
45 = 40 + 5
45 = 4 × 10 + 5 × 1

🎲 SOMUT ÖRNEKLER:
• 10 tane 1'lik = 1 tane 10'luk
• 10 tane kalem = 1 kutu (10'lu kutu)
• 10 tane yumurta = 1 koli
• 10 TL'lik bozukluk = 1 tane 10 TL

💡 İPUCU: Onluğu "kutu", birliği "tek tek" olarak düşün!`,
        'İki basamaklı sayı = Onluklar × 10 + Birlikler. Soldaki onlar, sağdaki birler!',
        {
          visual: `BASAMAK DEĞERİ:
┌─────────┬─────────┐
│ ONLAR   │ BİRLER  │
│ × 10    │ × 1     │
├─────────┼─────────┤
│    4    │    5    │
│   40    │    5    │
└─────────┴─────────┘
     45 = 40 + 5`,
          tip: '🎲 Lego veya boncuklarla dene! 10 tanesini bir gruba koy, geri kalanı say.',
          examples: [
            createExample(
              '37\'de kaç onluk var?',
              '3 onluk',
              '37\'nin soldaki rakamı 3\'tür. Bu onlar basamağındadır. 3 onluk = 30',
              '37 = 3 onluk + 7 birlik = 30 + 7',
              ['Soldaki rakamı bul: 3', 'Bu onlar basamağında', '3 × 10 = 30', '3 onluk!']
            ),
            createExample(
              '52\'de kaç birlik var?',
              '2 birlik',
              '52\'nin sağdaki rakamı 2\'dir. Bu birler basamağındadır. 2 birlik = 2',
              '52 = 5 onluk + 2 birlik = 50 + 2',
              ['Sağdaki rakamı bul: 2', 'Bu birler basamağında', '2 × 1 = 2', '2 birlik!']
            ),
            createExample(
              '89\'u onluk ve birlik olarak yaz',
              '8 onluk + 9 birlik',
              '89 = 80 + 9 = 8 × 10 + 9 × 1',
              '89 = 8 onluk + 9 birlik',
              ['8 onlar basamağında', '9 birler basamağında', '80 + 9 = 89']
            ),
            createExample(
              '60\'ta kaç onluk kaç birlik var?',
              '6 onluk + 0 birlik',
              '60\'ta birler basamağında 0 var. 6 onluk + 0 birlik = 60',
              '60 = 6 onluk + 0 birlik = 60 + 0',
              ['Soldaki: 6 (onlar)', 'Sağdaki: 0 (birler)', '60 + 0 = 60']
            ),
            createExample(
              '99\'u aç',
              '9 onluk + 9 birlik = 90 + 9',
              '99, 100\'den hemen önce gelen en büyük iki basamaklı sayıdır.',
              '99 = 90 + 9 = 9 × 10 + 9 × 1',
              ['9 onluk = 90', '9 birlik = 9', '90 + 9 = 99', 'En büyük iki basamaklı!']
            ),
            createExample(
              '10\'u onluk-birlik olarak yaz',
              '1 onluk + 0 birlik',
              '10, tam 1 onluktur. Birler basamağında hiç yok (0).',
              '10 = 1 onluk + 0 birlik = 10 + 0',
              ['1 onluk = 10', '0 birlik = 0', 'En küçük iki basamaklı!']
            )
          ]
        }
      ),

      createStep(
        'Onluk Sayıları Tanıyalım 🔟',
        `Onluk sayılar: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

Her birinin özel bir ismi var:

🔢 ONLUK SAYILAR VE İSİMLERİ:

10 → ON         (1 onluk)
20 → YİRMİ      (2 onluk)
30 → OTUZ       (3 onluk)
40 → KIRK       (4 onluk) ⚠️ Kırk, dört değil!
50 → ELLİ       (5 onluk)
60 → ALTMIŞ    (6 onluk)
70 → YETMİŞ    (7 onluk)
80 → SEKSEN    (8 onluk)
90 → DOKSAN    (9 onluk)
100 → YÜZ      (10 onluk)

📝 DİKKAT:
• 40 = KIRK (dört + on değil!)
• 50 = ELLİ (beş + on değil!)
• Bu özel isimleri ezberle!`,
        '10, 20, 30... her biri onar onar artar. 10 onluk = 100 (yüz)!',
        {
          visual: `ONLUK SAYILAR:
10 (on)      ▓
20 (yirmi)   ▓▓
30 (otuz)    ▓▓▓
40 (kırk)    ▓▓▓▓
50 (elli)    ▓▓▓▓▓
60 (altmış)  ▓▓▓▓▓▓
70 (yetmiş)  ▓▓▓▓▓▓▓
80 (seksen)  ▓▓▓▓▓▓▓▓
90 (doksan)  ▓▓▓▓▓▓▓▓▓
100 (yüz)    ▓▓▓▓▓▓▓▓▓▓`,
          tip: '🎵 Şarkı gibi ezberle: On, yirmi, otuz, kırk, elli, altmış, yetmiş, seksen, doksan, yüz!',
          examples: [
            createExample(
              '40\'ın okunuşu nedir?',
              'Kırk',
              '40, "kırk" olarak okunur. "Dört-on" denmez!',
              '40 = KIRK',
              ['4 onluk', 'Özel ismi: Kırk', 'Dört-on DEĞİL!']
            ),
            createExample(
              '70\'in okunuşu nedir?',
              'Yetmiş',
              '70, "yetmiş" olarak okunur. 7 tane 10\'luk.',
              '70 = YETMİŞ',
              ['7 onluk', 'Özel ismi: Yetmiş', '7 × 10 = 70']
            ),
            createExample(
              '50\'nin okunuşu nedir?',
              'Elli',
              '50, "elli" olarak okunur. Beş-on denmez!',
              '50 = ELLİ',
              ['5 onluk', 'Özel ismi: Elli', 'Beş-on DEĞİL!']
            ),
            createExample(
              '90\'dan sonra hangi onluk gelir?',
              '100 (Yüz)',
              '90\'dan sonra 100 gelir. 100 = 10 onluk = 1 yüzlük.',
              '90 → 100',
              ['90 = 9 onluk', '100 = 10 onluk', '10 onluk = 1 yüzlük']
            ),
            createExample(
              '20 ile 30 arasında kaç onluk fark var?',
              '1 onluk (10 fark)',
              '30 - 20 = 10. Yani 1 onluk fark var.',
              '30 - 20 = 10 = 1 onluk',
              ['30 = 3 onluk', '20 = 2 onluk', '3 - 2 = 1 onluk fark']
            ),
            createExample(
              '100\'ü onluk olarak yaz',
              '10 onluk',
              '100 = 10 × 10 = 10 onluk. Veya 1 yüzlük.',
              '100 = 10 onluk = 1 yüzlük',
              ['10 × 10 = 100', '10 onluk = 100', 'Yeni basamak: Yüzler!']
            )
          ]
        }
      ),

      createStep(
        'Ara Sayıları Okuma ve Yazma 📝',
        `Onluk ve birliği birleştirerek tüm sayıları okuyabiliriz!

📖 OKUMA KURALI:
Önce onluğu oku, sonra birliği ekle.

ÖRNEKLER:
23 → Yirmi üç (20 + 3)
45 → Kırk beş (40 + 5)
67 → Altmış yedi (60 + 7)
89 → Seksen dokuz (80 + 9)

⚠️ DİKKAT EDİLECEK SAYILAR:
• 11 = On bir (özel değil, normal!)
• 12 = On iki
• 14 = On dört
• 15 = On beş
• 40 = Kırk (kırk bir, kırk iki...)
• 50 = Elli (elli bir, elli iki...)

✍️ YAZMA KURALI:
Duyduğun onluğu yaz, birliği yanına ekle.

ÖRNEKLER:
"Altmış iki" → 62 (60 + 2)
"Doksan yedi" → 97 (90 + 7)`,
        'Önce onluğu oku/yaz, sonra birliği ekle. 23 = Yirmi üç!',
        {
          visual: `OKUMA ÖRNEKLERİ:
┌────────┬────────────────┐
│ SAYI   │ OKUNUŞU        │
├────────┼────────────────┤
│   23   │ Yirmi üç       │
│   45   │ Kırk beş       │
│   67   │ Altmış yedi    │
│   89   │ Seksen dokuz   │
│   99   │ Doksan dokuz   │
└────────┴────────────────┘`,
          tip: '📖 Sayıyı iki parçaya ayır: Önce onluk, sonra birlik!',
          examples: [
            createExample(
              '74 nasıl okunur?',
              'Yetmiş dört',
              '74 = 70 + 4. Önce yetmiş, sonra dört.',
              '74 = 70 + 4 = Yetmiş dört',
              ['70 = Yetmiş', '4 = Dört', 'Birleştir: Yetmiş dört']
            ),
            createExample(
              '56 nasıl okunur?',
              'Elli altı',
              '56 = 50 + 6. Önce elli, sonra altı.',
              '56 = 50 + 6 = Elli altı',
              ['50 = Elli', '6 = Altı', 'Birleştir: Elli altı']
            ),
            createExample(
              '"Seksen beş" nasıl yazılır?',
              '85',
              'Seksen = 80, beş = 5. 80 + 5 = 85',
              'Seksen beş = 80 + 5 = 85',
              ['Seksen = 80', 'Beş = 5', '80 + 5 = 85']
            ),
            createExample(
              '"Kırk dokuz" nasıl yazılır?',
              '49',
              'Kırk = 40, dokuz = 9. 40 + 9 = 49',
              'Kırk dokuz = 40 + 9 = 49',
              ['Kırk = 40', 'Dokuz = 9', '40 + 9 = 49']
            ),
            createExample(
              '11 nasıl okunur?',
              'On bir',
              '11 = 10 + 1. On ve bir.',
              '11 = 10 + 1 = On bir',
              ['10 = On', '1 = Bir', 'On bir (11)']
            ),
            createExample(
              '"Doksan dokuz" nasıl yazılır?',
              '99',
              '99, en büyük iki basamaklı sayıdır. Doksan = 90, dokuz = 9.',
              'Doksan dokuz = 90 + 9 = 99',
              ['Doksan = 90', 'Dokuz = 9', '99 = En büyük iki basamaklı!']
            )
          ]
        }
      ),

      createStep(
        'Sayıları Karşılaştırma ⚖️',
        `İki sayıyı karşılaştırırken ÖNCE ONLUKLARA BAK!

📊 KARŞILAŞTIRMA KURALI:

1️⃣ Önce onlukları karşılaştır
   Büyük onluklu sayı büyüktür!

2️⃣ Onluklar eşitse birliklere bak
   Büyük birlikli sayı büyüktür!

SEMBOLLER:
< → küçüktür (ağzı büyük tarafa açık)
> → büyüktür (ağzı büyük tarafa açık)
= → eşittir

ÖRNEKLER:
56 < 65 → 5 onluk < 6 onluk
78 > 72 → Onluklar eşit, 8 > 2
45 = 45 → Her iki basamak eşit

💡 HATIRLATMA:
< ve > sembolleri için: Timsah hep büyük sayıyı yer! 🐊`,
        'Karşılaştırmada: Önce onluklar, sonra birlikler! Timsah büyüğü yer! 🐊',
        {
          visual: `KARŞILAŞTIRMA:
56 🐊 65
5 onluk < 6 onluk
→ 56 < 65

78 🐊 72
7 onluk = 7 onluk
8 birlik > 2 birlik
→ 78 > 72`,
          tip: '🐊 Timsah ağzını büyük sayıya açar! 5 < 8 (timsah 8\'i yer)',
          examples: [
            createExample(
              '45 ve 54\'ü karşılaştır',
              '45 < 54',
              '4 onluk < 5 onluk. Onluklar farklı, büyük onluklu kazanır!',
              '45 < 54 (4 onluk < 5 onluk)',
              ['45: 4 onluk', '54: 5 onluk', '4 < 5', '45 < 54']
            ),
            createExample(
              '78 ve 72\'yi karşılaştır',
              '78 > 72',
              'Onluklar eşit (7 = 7). Birliklere bak: 8 > 2.',
              '78 > 72 (8 birlik > 2 birlik)',
              ['78: 7 onluk 8 birlik', '72: 7 onluk 2 birlik', 'Onluklar eşit', '8 > 2, 78 > 72']
            ),
            createExample(
              '33 ve 33\'ü karşılaştır',
              '33 = 33',
              'Onluklar eşit, birlikler eşit. Sayılar eşit!',
              '33 = 33',
              ['Onluklar: 3 = 3', 'Birlikler: 3 = 3', 'Eşit!']
            ),
            createExample(
              '89 ve 98\'i karşılaştır',
              '89 < 98',
              '8 onluk < 9 onluk. 89 daha küçük.',
              '89 < 98 (8 onluk < 9 onluk)',
              ['89: 8 onluk', '98: 9 onluk', '8 < 9', '89 < 98']
            ),
            createExample(
              '60 ve 59\'u karşılaştır',
              '60 > 59',
              '6 onluk > 5 onluk. 60, 59\'dan büyük!',
              '60 > 59 (6 onluk > 5 onluk)',
              ['60: 6 onluk', '59: 5 onluk', '6 > 5', '60 > 59']
            ),
            createExample(
              '100 ve 99\'u karşılaştır',
              '100 > 99',
              '100 üç basamaklı, 99 iki basamaklı. Üç basamak > iki basamak!',
              '100 > 99',
              ['100: 3 basamak', '99: 2 basamak', '3 basamak > 2 basamak', '100 > 99']
            )
          ]
        }
      ),

      createStep(
        'Sayıları Sıralama 📊',
        `Sayıları küçükten büyüğe veya büyükten küçüğe sıralayabiliriz.

📊 SIRALAMA YÖNTEMİ:

1️⃣ KÜÇÜKTEN BÜYÜĞE (Artan):
   En küçüğü bul, sonra bir büyüğü...
   Örnek: 45, 23, 67, 12 → 12, 23, 45, 67

2️⃣ BÜYÜKTEN KÜÇÜĞE (Azalan):
   En büyüğü bul, sonra bir küçüğü...
   Örnek: 45, 23, 67, 12 → 67, 45, 23, 12

📝 SIRALAMA İPUÇLARI:
• Önce onluklara göre grupla
• Aynı onluklu sayıları kendi aralarında sırala
• Sırayı yaz

Örnek: 34, 56, 31, 58
Grupla: (31, 34) ve (56, 58)
Küçükten büyüğe: 31, 34, 56, 58`,
        'Sıralamada önce onlukları grupla, sonra sırala!',
        {
          visual: `SIRALAMA ÖRNEĞİ:
Verilen: 45, 23, 67, 12

Küçükten Büyüğe:
12 < 23 < 45 < 67
──→──→──→──→

Büyükten Küçüğe:
67 > 45 > 23 > 12
──→──→──→──→`,
          tip: '📊 Sıralamayı kontrol et: Her sayı bir öncekinden büyük (veya küçük) mü?',
          examples: [
            createExample(
              '15, 51, 25, 52\'yi küçükten büyüğe sırala',
              '15, 25, 51, 52',
              'Onluklara göre: 1 onluklu (15, 25), 5 onluklu (51, 52). Sonra sırala.',
              '15 < 25 < 51 < 52',
              ['En küçük: 15', 'Sonra: 25', 'Sonra: 51', 'En büyük: 52']
            ),
            createExample(
              '78, 87, 77, 88\'i büyükten küçüğe sırala',
              '88, 87, 78, 77',
              '8 onluklu: 88 > 87. 7 onluklu: 78 > 77.',
              '88 > 87 > 78 > 77',
              ['En büyük: 88', 'Sonra: 87', 'Sonra: 78', 'En küçük: 77']
            ),
            createExample(
              '33, 13, 31, 11\'i küçükten büyüğe sırala',
              '11, 13, 31, 33',
              '1 onluklu: 11 < 13. 3 onluklu: 31 < 33.',
              '11 < 13 < 31 < 33',
              ['1 onluklu olanlar önce', '11 < 13', '3 onluklu olanlar sonra', '31 < 33']
            ),
            createExample(
              '90, 9, 99, 19\'u sırala',
              '9, 19, 90, 99',
              'Dikkat: 9 tek basamaklı! 9 < 19 < 90 < 99',
              '9 < 19 < 90 < 99',
              ['9: 0 onluk (tek basamak)', '19: 1 onluk', '90: 9 onluk', '99: 9 onluk 9 birlik']
            ),
            createExample(
              '50, 55, 45, 54\'ü sırala',
              '45, 50, 54, 55',
              '4 onluklu: 45. 5 onluklu: 50, 54, 55.',
              '45 < 50 < 54 < 55',
              ['45 en küçük', '50 < 54 < 55', 'Hepsi sıralı']
            ),
            createExample(
              '100, 10, 1, 50\'yi sırala',
              '1, 10, 50, 100',
              'Basamak sayısına göre: 1 (tek), 10, 50 (iki), 100 (üç basamak).',
              '1 < 10 < 50 < 100',
              ['1: Tek basamak', '10, 50: İki basamak', '100: Üç basamak', 'Sıralı!']
            )
          ]
        }
      ),

      createStep(
        'Sayı Doğrusu 📏',
        `Sayı doğrusu, sayıları görsel olarak gösterir ve karşılaştırmayı kolaylaştırır.

📏 SAYI DOĞRUSU ÖZELLİKLERİ:

1️⃣ Soldan sağa gidildikçe sayılar BÜYÜR
2️⃣ Sağdan sola gidildikçe sayılar KÜÇÜLÜR
3️⃣ Eşit aralıklarla bölünmüştür

ÖRNEK SAYI DOĞRUSU:
0 ─ 10 ─ 20 ─ 30 ─ 40 ─ 50 ─ 60 ─ 70 ─ 80 ─ 90 ─ 100

ARA DEĞERLER:
20 ─ 21 ─ 22 ─ 23 ─ 24 ─ 25 ─ 26 ─ 27 ─ 28 ─ 29 ─ 30

📊 SAYI DOĞRUSUNDA:
• Sağdaki sayı BÜYÜK
• Soldaki sayı KÜÇÜK
• İki sayı arasındaki sayılar ortadadır`,
        'Sayı doğrusunda sağa git = sayı büyür, sola git = sayı küçülür!',
        {
          visual: `SAYI DOĞRUSU:
0──10──20──30──40──50──60──70──80──90──100
│   │   │   │   │   │   │   │   │   │    │
↑                   ↑                    ↑
Başlangıç          Orta               Son

35 nerede?
30──31──32──33──34──[35]──36──37──38──39──40
                    ↑`,
          tip: '📏 Sayı doğrusunu çizmeye başla: 0\'dan başla, 10\'ar atla!',
          examples: [
            createExample(
              '45 sayı doğrusunda nerede?',
              '40 ile 50 arasında',
              '45, 40\'tan 5 fazla, 50\'den 5 eksik.',
              '40 ─ 45 ─ 50',
              ['40\'tan başla', '5 adım ilerle', '45\'e ulaş', '50\'ye 5 kaldı']
            ),
            createExample(
              '78 ve 87 sayı doğrusunda hangisi sağda?',
              '87 sağda',
              'Büyük sayı sağda. 87 > 78, yani 87 sağda.',
              '78 ─ ─ ─ 87',
              ['78 solda', '87 sağda', 'Büyük olan sağda', '87 > 78']
            ),
            createExample(
              '50 ile 60 arasında kaç sayı var?',
              '9 sayı (51-59)',
              '51, 52, 53, 54, 55, 56, 57, 58, 59 = 9 sayı',
              '50 ─ (51-59) ─ 60',
              ['50\'den sonra 51', '60\'tan önce 59', 'Arada: 51-59', '9 tane sayı']
            ),
            createExample(
              '25\'ten 5 adım sağa gidersen?',
              '30',
              'Sağa gitmek = toplamak. 25 + 5 = 30',
              '25 → 26 → 27 → 28 → 29 → 30',
              ['Her adım +1', '5 adım = +5', '25 + 5 = 30']
            ),
            createExample(
              '70\'ten 10 adım sola gidersen?',
              '60',
              'Sola gitmek = çıkarmak. 70 - 10 = 60',
              '70 → 60',
              ['Sola = çıkarma', '10 adım = -10', '70 - 10 = 60']
            ),
            createExample(
              '33 ile 37 tam ortası?',
              '35',
              'Ortayı bulmak: (33 + 37) ÷ 2 = 70 ÷ 2 = 35',
              '33 ─ 34 ─ [35] ─ 36 ─ 37',
              ['33\'ten 2 adım = 35', '37\'den 2 adım = 35', 'Orta: 35']
            )
          ]
        }
      ),

      createStep(
        'Birer, Onar Sayma 🔢',
        `Sayıları atlayarak sayabiliriz - bu sayma işlemini hızlandırır!

🔢 BİRER SAYMA:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12...
Her adımda 1 eklenir.

🔟 ONAR SAYMA:
10, 20, 30, 40, 50, 60, 70, 80, 90, 100
Her adımda 10 eklenir.

📊 KARMA SAYMA:
23\'ten başla, onar say:
23, 33, 43, 53, 63, 73, 83, 93...
(Birler basamağı değişmez!)

💡 GERIYE SAYMA:
100\'den geriye onar:
100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0

45\'ten geriye birer:
45, 44, 43, 42, 41, 40, 39, 38...`,
        'Onar sayarken birler değişmez! 23, 33, 43, 53... hep 3 ile biter.',
        {
          visual: `ONAR SAYMA:
10─20─30─40─50─60─70─80─90─100
+10 +10 +10 +10 +10 +10 +10 +10 +10

17'DEN ONAR:
17─27─37─47─57─67─77─87─97
+10 +10 +10 +10 +10 +10 +10 +10`,
          tip: '🔢 Onar sayarken sadece onlar basamağı değişir!',
          examples: [
            createExample(
              '25\'ten başla, onar say (5 tane)',
              '25, 35, 45, 55, 65',
              'Her adımda 10 ekle: 25 + 10 = 35, 35 + 10 = 45...',
              '25 → 35 → 45 → 55 → 65',
              ['25 + 10 = 35', '35 + 10 = 45', '45 + 10 = 55', '55 + 10 = 65']
            ),
            createExample(
              '80\'den geriye onar say (4 tane)',
              '80, 70, 60, 50',
              'Her adımda 10 çıkar: 80 - 10 = 70, 70 - 10 = 60...',
              '80 → 70 → 60 → 50',
              ['80 - 10 = 70', '70 - 10 = 60', '60 - 10 = 50']
            ),
            createExample(
              '43\'ten başla, birer say (5 tane)',
              '43, 44, 45, 46, 47',
              'Her adımda 1 ekle.',
              '43 → 44 → 45 → 46 → 47',
              ['43 + 1 = 44', '44 + 1 = 45', '45 + 1 = 46', '46 + 1 = 47']
            ),
            createExample(
              '100\'den geriye onar say (başa kadar)',
              '100, 90, 80, 70, 60, 50, 40, 30, 20, 10',
              'Her adımda 10 çıkar.',
              '100 → 90 → 80 → ... → 10',
              ['100 - 10 = 90', '90 - 10 = 80', '...', '20 - 10 = 10']
            ),
            createExample(
              '38, 48, 58, ? (sonraki sayı)',
              '68',
              'Onar sayma: 58 + 10 = 68',
              '38 → 48 → 58 → 68',
              ['Fark: 10', 'Onar sayma', '58 + 10 = 68']
            ),
            createExample(
              '76, 75, 74, ? (sonraki sayı)',
              '73',
              'Geriye birer sayma: 74 - 1 = 73',
              '76 → 75 → 74 → 73',
              ['Fark: -1', 'Geriye birer', '74 - 1 = 73']
            )
          ]
        }
      ),

      createStep(
        'Sayı Problemleri 🧩',
        `Günlük hayatta sayılarla ilgili problemleri çözelim!

🧩 PROBLEM TÜRLERİ:

1️⃣ SIRALAMA PROBLEMLERİ:
"Kim kaçıncı sırada?" sorularına cevap bul.

2️⃣ KARŞILAŞTIRMA PROBLEMLERİ:
"Hangisi büyük/küçük?" sorularına cevap bul.

3️⃣ BASAMAK PROBLEMLERİ:
"Kaç onluk? Kaç birlik?" sorularına cevap bul.

4️⃣ SIRALAMA PROBLEMLERİ:
"Sıraya diz" komutlarını uygula.

💡 PROBLEM ÇÖZME STRATEJİSİ:
1. Problemi dikkatlice oku
2. Ne sorulduğunu anla
3. Bilgileri çıkar
4. İşlem yap
5. Cevabı kontrol et`,
        'Problem çözerken: Anla → Planla → Çöz → Kontrol et!',
        {
          visual: `PROBLEM ÇÖZME:
┌──────────────────────────────┐
│ 1. OKU   → Problemi anla     │
│ 2. BUL   → Verileri çıkar    │
│ 3. PLANLA → Strateji belirle │
│ 4. ÇÖZ   → İşlemi yap        │
│ 5. KONTROL → Cevabı kontrol  │
└──────────────────────────────┘`,
          tip: '🧩 Problem zor geliyorsa küçük parçalara ayır!',
          examples: [
            createExample(
              'Ali 45, Ayşe 54 yaşında. Kim büyük?',
              'Ayşe büyük (54 > 45)',
              '54 > 45. Ayşe 54 yaşında, Ali 45 yaşında.',
              '54 > 45 → Ayşe büyük',
              ['45: 4 onluk', '54: 5 onluk', '5 > 4', 'Ayşe büyük']
            ),
            createExample(
              '78 sayısında kaç tane 10\'luk var?',
              '7 tane 10\'luk (70)',
              '78 = 7 onluk + 8 birlik. Onlar basamağındaki rakam 7.',
              '78 = 70 + 8 = 7 onluk',
              ['78\'in solundaki: 7', '7 × 10 = 70', '7 tane onluk']
            ),
            createExample(
              '30 + 40 = ?',
              '70',
              '3 onluk + 4 onluk = 7 onluk = 70',
              '30 + 40 = 70',
              ['30 = 3 onluk', '40 = 4 onluk', '3 + 4 = 7 onluk', '7 onluk = 70']
            ),
            createExample(
              '56 ile 65\'in farkı?',
              '9',
              '65 - 56 = 9. Veya 56\'dan 65\'e kaç sayı var?',
              '65 - 56 = 9',
              ['65 > 56', 'Fark: 65 - 56', '= 9']
            ),
            createExample(
              'En küçük iki basamaklı sayı?',
              '10',
              '10, iki basamaklı sayıların en küçüğüdür. (9 tek basamaklı)',
              '10 = En küçük iki basamaklı',
              ['9: Tek basamak', '10: İki basamak', '10 en küçük iki basamaklı']
            ),
            createExample(
              'En büyük iki basamaklı sayı?',
              '99',
              '99, iki basamaklı sayıların en büyüğüdür. (100 üç basamaklı)',
              '99 = En büyük iki basamaklı',
              ['99: İki basamak', '100: Üç basamak', '99 en büyük iki basamaklı']
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // === BASAMAK DEĞERİ (1-10) ===
      createMultipleChoice(
        '45\'te kaç onluk var?',
        ['4', '5', '45', '9'],
        '4',
        '45 = 4 onluk + 5 birlik. Onlar basamağındaki rakam 4.',
        '45 = 4 onluk + 5 birlik',
        1
      ),
      createFillBlank(
        '63 = 6 onluk + ___ birlik',
        ['3'],
        '63 = 60 + 3 = 6 onluk + 3 birlik.',
        '63 = 60 + 3'
      ),
      createMultipleChoice(
        '78\'de birler basamağının değeri?',
        ['7', '8', '70', '78'],
        '8',
        'Birler basamağındaki rakam 8, değeri de 8.',
        '78 = 70 + 8',
        1
      ),
      createFillBlank(
        '90 = ___ onluk + 0 birlik',
        ['9'],
        '90 = 9 onluk + 0 birlik. Birler basamağında 0 var.',
        '90 = 9 onluk'
      ),
      createMultipleChoice(
        '52\'de 5\'in basamak değeri?',
        ['5', '52', '50', '2'],
        '50',
        '5 onlar basamağında. 5 × 10 = 50',
        '52 = 50 + 2',
        2
      ),
      createFillBlank(
        '29\'da ___ birlik var',
        ['9'],
        '29 = 2 onluk + 9 birlik. Birler basamağında 9 var.',
        '29 = 20 + 9'
      ),
      createMultipleChoice(
        '36 = 30 + ?',
        ['3', '6', '36', '0'],
        '6',
        '36 = 30 + 6. Birler basamağı değeri 6.',
        '36 = 3 onluk + 6 birlik',
        1
      ),
      createFillBlank(
        '84 = ___ + 4',
        ['80'],
        '84 = 80 + 4. Onlar basamağı değeri 80.',
        '84 = 8 onluk + 4 birlik'
      ),
      createMultipleChoice(
        '50 kaç onluk?',
        ['5', '50', '0', '10'],
        '5',
        '50 = 5 onluk + 0 birlik.',
        '50 = 5 × 10',
        1
      ),
      createFillBlank(
        '100 = ___ onluk',
        ['10'],
        '100 = 10 onluk. 10 × 10 = 100.',
        '100 = 10 onluk = 1 yüzlük'
      ),

      // === OKUMA VE YAZMA (11-20) ===
      createMultipleChoice(
        'Yetmiş sekiz nasıl yazılır?',
        ['87', '78', '68', '88'],
        '78',
        'Yetmiş = 70, sekiz = 8. 70 + 8 = 78',
        'Yetmiş sekiz = 78',
        1
      ),
      createFillBlank(
        '90 = ___',
        ['doksan', 'Doksan'],
        '90 okunuşu doksan.',
        '90 = Doksan'
      ),
      createMultipleChoice(
        '100\'ün okunuşu?',
        ['On', 'Yüz', 'Bin', 'Yirmi'],
        'Yüz',
        '100 = yüz. En küçük üç basamaklı sayı.',
        '100 = Yüz',
        1
      ),
      createFillBlank(
        'Seksen dört = ___',
        ['84'],
        'Seksen = 80, dört = 4. 80 + 4 = 84',
        'Seksen dört = 84'
      ),
      createMultipleChoice(
        'Altmış üç nasıl yazılır?',
        ['36', '63', '53', '73'],
        '63',
        'Altmış = 60, üç = 3. 60 + 3 = 63',
        'Altmış üç = 63',
        1
      ),
      createFillBlank(
        '40 = ___',
        ['kırk', 'Kırk'],
        '40 okunuşu kırk. (Dört-on değil!)',
        '40 = Kırk'
      ),
      createMultipleChoice(
        '74 nasıl okunur?',
        ['Yedi dört', 'Yetmiş dört', 'On dört yedi', 'Dört yetmiş'],
        'Yetmiş dört',
        '74 = 70 + 4 = Yetmiş dört',
        '74 = Yetmiş dört',
        1
      ),
      createFillBlank(
        'Elli yedi = ___',
        ['57'],
        'Elli = 50, yedi = 7. 50 + 7 = 57',
        'Elli yedi = 57'
      ),
      createMultipleChoice(
        '99 nasıl okunur?',
        ['Dokuz dokuz', 'Doksan dokuz', 'On sekiz', 'Yüz eksik bir'],
        'Doksan dokuz',
        '99 = 90 + 9 = Doksan dokuz. En büyük iki basamaklı sayı!',
        '99 = Doksan dokuz',
        1
      ),
      createFillBlank(
        '11 = on ___',
        ['bir'],
        '11 = 10 + 1 = On bir.',
        '11 = On bir'
      ),

      // === KARŞILAŞTIRMA (21-30) ===
      createMultipleChoice(
        '56 mı 65 mi büyük?',
        ['56', '65', 'Eşit', 'Belli değil'],
        '65',
        '5 onluk < 6 onluk. 56 < 65',
        '56 < 65',
        1
      ),
      createFillBlank(
        '45 ___ 54 (<, > veya =)',
        ['<'],
        '4 onluk < 5 onluk. 45 < 54',
        '45 < 54'
      ),
      createMultipleChoice(
        '78 ve 87 karşılaştır',
        ['78 > 87', '78 < 87', '78 = 87', 'Belli değil'],
        '78 < 87',
        '7 onluk < 8 onluk. 78 < 87',
        '78 < 87',
        1
      ),
      createFillBlank(
        '67 ___ 76 (<, > veya =)',
        ['<'],
        '6 onluk < 7 onluk. 67 < 76',
        '67 < 76'
      ),
      createMultipleChoice(
        '78 mı 72 mi büyük?',
        ['78', '72', 'Eşit', 'Belli değil'],
        '78',
        'Onluklar eşit (7=7), birlikler: 8 > 2. 78 > 72',
        '78 > 72',
        1
      ),
      createFillBlank(
        '99 ___ 100 (<, > veya =)',
        ['<'],
        '99 < 100. 99 iki basamak, 100 üç basamak.',
        '99 < 100'
      ),
      createMultipleChoice(
        '50 ve 49 hangisi büyük?',
        ['50', '49', 'Eşit', 'Belli değil'],
        '50',
        '5 onluk > 4 onluk. 50 > 49',
        '50 > 49',
        1
      ),
      createFillBlank(
        '33 ___ 33 (<, > veya =)',
        ['='],
        'Onluklar eşit, birlikler eşit. 33 = 33',
        '33 = 33'
      ),
      createMultipleChoice(
        '89 ve 98 hangisi küçük?',
        ['89', '98', 'Eşit', 'İkisi de'],
        '89',
        '8 onluk < 9 onluk. 89 < 98',
        '89 < 98',
        2
      ),
      createFillBlank(
        '62 ___ 26 (<, > veya =)',
        ['>'],
        '6 onluk > 2 onluk. 62 > 26',
        '62 > 26'
      ),

      // === SIRALAMA (31-35) ===
      createMultipleChoice(
        '15, 8, 22, 3 küçükten büyüğe?',
        ['3, 8, 15, 22', '22, 15, 8, 3', '8, 3, 15, 22', '15, 22, 3, 8'],
        '3, 8, 15, 22',
        '3 < 8 < 15 < 22. Küçükten büyüğe sıralı.',
        '3 < 8 < 15 < 22',
        2
      ),
      createFillBlank(
        '40, 25, 60, 10 en küçüğü ___',
        ['10'],
        '10 < 25 < 40 < 60. En küçük 10.',
        'En küçük: 10'
      ),
      createMultipleChoice(
        '50, 35, 20, 65 en büyüğü?',
        ['20', '35', '50', '65'],
        '65',
        '65 > 50 > 35 > 20. En büyük 65.',
        'En büyük: 65',
        1
      ),
      createFillBlank(
        '99, 11, 55, 33 büyükten küçüğe başı ___',
        ['99'],
        '99 > 55 > 33 > 11. En büyük 99.',
        '99 > 55 > 33 > 11'
      ),
      createMultipleChoice(
        '17, 71, 27, 72 en büyüğü?',
        ['17', '71', '27', '72'],
        '72',
        '72 > 71 > 27 > 17. En büyük 72.',
        'En büyük: 72',
        2
      ),

      // === SAYI DOĞRUSU (36-40) ===
      createMultipleChoice(
        '25 ve 35 hangisi sayı doğrusunda sağda?',
        ['25', '35', 'Aynı yerde', 'Yok'],
        '35',
        'Büyük sayı sağda. 35 > 25, 35 sağda.',
        '35 sağda',
        1
      ),
      createFillBlank(
        '30 ile 40 arasında ___ sayı var',
        ['9'],
        '31, 32, 33, 34, 35, 36, 37, 38, 39 = 9 sayı',
        '31-39 arası 9 sayı'
      ),
      createMultipleChoice(
        '48 ve 84 hangisi sayı doğrusunda solda?',
        ['48', '84', 'Aynı yerde', 'Yok'],
        '48',
        'Küçük sayı solda. 48 < 84, 48 solda.',
        '48 solda',
        1
      ),
      createFillBlank(
        '50\'den 10 adım sağa = ___',
        ['60'],
        'Sağa = topla. 50 + 10 = 60',
        '50 + 10 = 60'
      ),
      createMultipleChoice(
        '70\'ten 20 adım sola?',
        ['50', '90', '60', '80'],
        '50',
        'Sola = çıkar. 70 - 20 = 50',
        '70 - 20 = 50',
        2
      ),

      // === SAYMA (41-45) ===
      createMultipleChoice(
        '6, 8, 10, ? sonraki?',
        ['11', '12', '13', '14'],
        '12',
        'İkişer sayma: 10 + 2 = 12',
        '6, 8, 10, 12',
        1
      ),
      createFillBlank(
        '25, 35, 45, ___ (onar)',
        ['55'],
        'Onar sayma: 45 + 10 = 55',
        '25, 35, 45, 55'
      ),
      createMultipleChoice(
        '90, 80, 70, ? geriye onar',
        ['50', '60', '65', '75'],
        '60',
        'Geriye onar: 70 - 10 = 60',
        '90, 80, 70, 60',
        1
      ),
      createFillBlank(
        '73, 74, 75, 76, ___',
        ['77'],
        'Birer sayma: 76 + 1 = 77',
        '73, 74, 75, 76, 77'
      ),
      createMultipleChoice(
        '43, 53, 63, ? onar sayma',
        ['73', '64', '72', '83'],
        '73',
        'Onar sayma: 63 + 10 = 73',
        '43, 53, 63, 73',
        1
      )
    ],

    summary: `Bugün 100'e kadar sayıları öğrendik! 💯

📊 BASAMAK DEĞERİ:
• İki basamaklı sayı = Onluklar + Birlikler
• Soldaki rakam × 10 = Onlar değeri
• Sağdaki rakam × 1 = Birler değeri
• 45 = 4 onluk + 5 birlik = 40 + 5

🔢 ONLUK SAYILAR:
• 10 (on), 20 (yirmi), 30 (otuz), 40 (kırk), 50 (elli)
• 60 (altmış), 70 (yetmiş), 80 (seksen), 90 (doksan), 100 (yüz)

📖 OKUMA/YAZMA:
• Önce onluğu oku, sonra birliği ekle
• 74 = Yetmiş dört
• Seksen beş = 85

⚖️ KARŞILAŞTIRMA:
• Önce onluklara bak, eşitse birliklere bak
• Büyük onluklu sayı büyüktür
• < küçüktür, > büyüktür, = eşittir

📏 SAYI DOĞRUSU:
• Sağa gidince sayı büyür
• Sola gidince sayı küçülür

🔢 SAYMA:
• Birer: 1, 2, 3, 4, 5...
• Onar: 10, 20, 30, 40, 50...

Artık büyük sayıları okuyup yazabilirsin! 🎉`,

    nextTopicPreview: 'Sonraki konuda basamak değerini daha derinlemesine öğrenecek, sayıları parçalayıp birleştireceğiz! 🔢'
  }
};
