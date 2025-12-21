// 1. SINIF - TEMA 4 - KONU 2: Çıkarma İşlemi
// DETAYLI VE ZENGİN İÇERİK - 35+ SORU
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu2Cikarma: Topic = {
  id: 'cikarma-temelleri',
  title: 'Çıkarma İşlemi',
  description: 'Bir sayıdan diğerini çıkarma, fark bulma ve günlük hayatta çıkarma',
  emoji: '➖',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['çıkarma', 'eksi', 'fark', 'azaltma', 'eksiltme', 'kalan'],
  objectives: [
    'Çıkarma kavramını anlar ve açıklar',
    'Eksi (-) işaretini tanır ve doğru kullanır',
    'Farkı 10\'a kadar hesaplar',
    'Farkı 20\'ye kadar hesaplar',
    '10\'dan çıkarma işlemlerini yapar',
    'Toplama ile çıkarma arasındaki ilişkiyi anlar',
    'Günlük hayatta çıkarma problemleri çözer'
  ],
  content: {
    introduction: `Merhaba küçük matematikçi! ➖

Çıkarma, toplamanın kardeşidir! 👫

🌟 ÇIKARMA NEDİR?
Bir şeyden bir miktar almak veya azaltmaktır!

🍎 GÜNLÜK HAYATTAN ÖRNEKLER:
• 5 elma vardı, 2 tanesini yedin → 3 elma kaldı!
• 7 TL'n vardı, 3 TL harcadın → 4 TL kaldı!
• 10 top vardı, 4 tanesi patladı → 6 top kaldı!

Alışverişte para üstü hesaplarken, kalan şeyleri sayarken, geri sayarken... Hep çıkarma kullanırız!

🎯 BU KONUDA NELER ÖĞRENECEKSİN?
✅ Çıkarma nedir, ne işe yarar
✅ Eksi (-) işareti nasıl kullanılır
✅ 10'a kadar çıkarma
✅ 10'dan çıkarma (çok önemli!)
✅ 20'ye kadar çıkarma
✅ Toplama-çıkarma ilişkisi
✅ Günlük hayatta çıkarma

Hazır mısın? Çıkarma öğrenelim! 🚀`,

    motivationQuote: 'Çıkarma azaltır ama bilgiyi artırır! Toplama bilirsen çıkarma çok kolay! ➖',

    funFacts: [
      'Çıkarma, toplamanın tersidir! ↔️',
      'Roket fırlatmalarında geri sayım çıkarmadır! 🚀',
      'Alışverişte para üstü çıkarma ile bulunur! 💰',
      'Saat geriye giderken çıkarma yaparız! ⏰',
      'Futbolda gol farkı çıkarma ile bulunur! ⚽',
      'Kumbara açınca kaç para kaldığını çıkarma ile bulursun! 🐷',
      'Yaş farkı çıkarma ile hesaplanır! 👶👴',
      'Geri sayım: 10, 9, 8, 7... çıkarmadır! ⏳'
    ],

    steps: [
      createStep(
        'Çıkarma Nedir?',
        `Çıkarma, bir sayıdan başka bir sayıyı eksiltmektir! ➖

📋 ÇIKARMA KURALLARI:
• Büyük sayıdan küçük sayı çıkarılır
• Sonuca FARK denir
• Eksi (-) işareti kullanılır
• Eşittir (=) işaretinden sonra sonuç yazılır

🎯 BASİT ÖRNEK:
🍎🍎🍎🍎🍎 - 🍎🍎 = 🍎🍎🍎
     5    -   2   =   3

5 elmadan 2 elma alınca 3 elma kalır!

📝 ÇIKARMA İŞLEMİNİN PARÇALARI:
   5   -   2   =   3
   ↓       ↓       ↓
Eksilen  Çıkan   FARK
(Büyük)  (Alınan) (Kalan)

💡 HATIRLA:
• "Al" demek çıkarma demek
• "Azalt" demek çıkarma demek
• "Eksilt" demek çıkarma demek
• "Kalan" = Fark`,
        '5 elmadan 2 elma alınca 3 elma kalır!',
        {
          visual: `Çıkarma Gösterimi:
┌─────────────────────────────────────────┐
│  🍎🍎🍎🍎🍎  ➖  🍎🍎  =  🍎🍎🍎       │
│      5      -    2    =     3          │
│                                         │
│  5 elmadan 2 tane alındı, 3 kaldı!     │
│                                         │
│  Eksilen   Eksi   Çıkan   Eşittir  Fark │
│   (5)      (-)    (2)      (=)     (3) │
└─────────────────────────────────────────┘`,
          examples: [
            createExample(
              '5 - 2 = ?',
              '3',
              '5 elmadan 2 tane alınca 3 kalır!',
              '🍎🍎🍎🍎🍎 - 🍎🍎 = 🍎🍎🍎',
              ['5 tane var', '2 tane al', 'Kalanı say', '5 - 2 = 3', 'Cevap: 3']
            ),
            createExample(
              '7 - 3 = ?',
              '4',
              '7 nesneden 3 tane çıkar, 4 kalır!',
              '⭐⭐⭐⭐⭐⭐⭐ - ⭐⭐⭐ = ⭐⭐⭐⭐',
              ['7 yıldız var', '3 yıldız al', '4 yıldız kaldı']
            ),
            createExample(
              '6 - 4 = ?',
              '2',
              '6\'dan 4 çıkarınca 2 kalır!',
              '🎈🎈🎈🎈🎈🎈 - 🎈🎈🎈🎈 = 🎈🎈',
              ['6 balon', '4 tanesi uçtu', '2 balon kaldı']
            ),
            createExample(
              '4 - 1 = ?',
              '3',
              '4\'ten 1 çıkarınca 3 kalır!',
              '🐱🐱🐱🐱 - 🐱 = 🐱🐱🐱',
              ['4 kedi', '1 kedi gitti', '3 kedi kaldı']
            ),
            createExample(
              '8 - 5 = ?',
              '3',
              '8\'den 5 çıkarınca 3 kalır!',
              '🌸🌸🌸🌸🌸🌸🌸🌸 - 🌸🌸🌸🌸🌸 = 🌸🌸🌸',
              ['8 çiçek', '5 tanesi soldu', '3 çiçek kaldı']
            ),
            createExample(
              '5 - 0 = ?',
              '5',
              'Sıfır çıkarırsan sayı değişmez!',
              '🍌🍌🍌🍌🍌 - (hiç) = 🍌🍌🍌🍌🍌',
              ['5 muz', 'Hiç almadık', 'Hala 5 muz!']
            )
          ]
        }
      ),

      createStep(
        'Eksi İşareti (-)',
        `Eksi işareti (-) çıkarma yaparken kullanılır! ➖

📋 EKSİ İŞARETİNİN ANLAMI:
• - = Eksi = Çıkar = Al = Azalt
• "Eksi" diye okunur
• Çıkarma işleminin simgesi

📝 OKUMA ŞEKLİ:
8 - 3 = 5
"Sekiz eksi üç eşittir beş"

🎵 EZBERLEMELİK:
"Eksi demek al demek,
Al, azalt, eksilt!
Büyük sayıdan küçüğü,
Çıkar ve farkı bul!" 🎶

📋 GÜNLÜK DİLDE ÇIKARMA:
"8 eksi 3" = "8'den 3 çıkar" = "8'den 3 al"
Hepsi aynı anlama gelir!

💡 İPUCU:
- işareti düz bir çizgidir
Artı işaretinin yarısı gibi`,
        'Eksi demek al, azalt, eksilt demek!',
        {
          visual: `Eksi İşareti (-):
┌───────────────────────────────┐
│      -  = EKSİ = AL           │
│                               │
│   Nasıl çizilir?              │
│    ─────                      │
│   (düz çizgi)                 │
│                               │
│  8 - 3 = 5                    │
│   ↓   ↓   ↓                   │
│  sekiz eksi üç eşittir beş    │
└───────────────────────────────┘`,
          tip: 'Eksi işaretini görünce "al" veya "çıkar" diye düşün!',
          examples: [
            createExample(
              '10 - 4 nasıl okunur?',
              'On eksi dört',
              '- işareti "eksi" diye okunur!',
              '10 - 4 = "On eksi dört"',
              ['10 sayısını oku: on', '- işareti: eksi', '4 sayısını oku: dört', 'On eksi dört']
            ),
            createExample(
              '9 - 5 = ? (Oku ve cevapla)',
              'Dokuz eksi beş eşittir dört (4)',
              'Okuma: Dokuz eksi beş eşittir dört!',
              '9 - 5 = 4',
              ['Dokuz eksi beş', '9\'dan 5 çıkar', '9 - 5 = 4', 'Dört!']
            ),
            createExample(
              '7 - 2 nasıl okunur?',
              'Yedi eksi iki',
              '- işareti her zaman "eksi" diye okunur',
              '7 - 2 = "Yedi eksi iki eşittir beş"',
              ['7: yedi', '-: eksi', '2: iki', '=: eşittir', '5: beş']
            ),
            createExample(
              '6 - 3 nasıl okunur?',
              'Altı eksi üç',
              'Oku: Altı eksi üç eşittir üç!',
              '6 - 3 = 3',
              ['Altı eksi üç', '= üç']
            ),
            createExample(
              '"Beş\'ten iki çıkar" işlem olarak nasıl yazılır?',
              '5 - 2',
              '"Çıkar" kelimesi eksi anlamına gelir!',
              '"5\'ten 2 çıkar" = 5 - 2 = 3',
              ['"Çıkar" = "eksi"', '5 - 2 yaz', 'Sonuç: 3']
            )
          ]
        }
      ),

      createStep(
        'Parmaklarla Çıkarma',
        `Parmaklarını kullanarak çıkarma yapabilirsin! ✋

📋 NASIL YAPILIR?
1️⃣ Birinci sayı kadar parmak aç
2️⃣ İkinci sayı kadar parmak kapat
3️⃣ Kalan açık parmakları say
4️⃣ Sonuç = FARK!

🎯 ÖRNEK: 7 - 3 = ?
✋✌️ 7 parmak aç (5+2)
✊✊✊ 3 parmak kapat
🔢 Kalanı say: 4 parmak
✅ Cevap: 4

💡 HATIRLA:
• Çıkarmada parmak KAPATIRSIN
• Toplamada parmak AÇARSIN
• Kalan parmaklar = FARK

🎮 PARMAK OYUNU:
Büyük sayı kadar aç,
Küçük sayı kadar kapat,
Kalanı say,
Farkı bul!`,
        'Parmaklarını hesap makinesi gibi kullan!',
        {
          visual: `Parmaklarla Çıkarma:
┌─────────────────────────────────────┐
│  7 - 3 = ?                          │
│                                     │
│  Başla: 🖐️✌️ (7 parmak açık)       │
│  Kapat: ✊✊✊ (3 parmak kapat)       │
│  Kaldı: ✋ (4 parmak)               │
│                                     │
│  Cevap: 7 - 3 = 4                   │
│                                     │
│  💡 İpucu:                          │
│  Toplama → parmak AÇ               │
│  Çıkarma → parmak KAPAT            │
└─────────────────────────────────────┘`,
          tip: 'Büyük sayı kadar parmak aç, küçük sayı kadar kapat!',
          examples: [
            createExample(
              '8 - 5 parmaklarla kaç?',
              '3 parmak',
              '8 parmak aç, 5 parmak kapat = 3 kaldı!',
              '8 parmak - 5 kapat = 3 kaldı',
              ['8 parmak aç', '5 parmak kapat', 'Kalan parmakları say', 'Cevap: 3']
            ),
            createExample(
              '6 - 2 = ?',
              '4',
              '6 parmak aç, 2 tane kapat!',
              '🖐️☝️ - ✌️ = ✋(4)',
              ['6 parmak aç', '2 parmak kapat', '4 kaldı']
            ),
            createExample(
              '5 - 3 = ?',
              '2',
              '5 parmak aç, 3 kapat, 2 kaldı!',
              '🖐️ - ✊✊✊ = ✌️',
              ['5 parmak (bir el)', '3 kapat', '2 kaldı']
            ),
            createExample(
              '9 - 4 = ?',
              '5',
              '9 parmak aç, 4 kapat, 5 kaldı!',
              '🖐️✋ - ✊✊✊✊ = 🖐️',
              ['9 parmak aç', '4 kapat', 'Bir el kaldı: 5']
            ),
            createExample(
              '10 - 7 = ?',
              '3',
              '10 parmak aç (iki el), 7 kapat!',
              '🖐️🖐️ - 7 kapat = 3 kaldı',
              ['10 parmak (iki el)', '7 kapat', '3 kaldı']
            ),
            createExample(
              '4 - 4 = ?',
              '0',
              '4 parmak aç, 4 kapat = hiç kalmadı!',
              '✋ - ✋ = ✊ (0)',
              ['4 aç', '4 kapat', 'Hiç kalmadı: 0']
            )
          ]
        }
      ),

      createStep(
        '5\'ten Çıkarma',
        `Küçük çıkarma işlemleri ile başlayalım! 🔢

📋 5'TEN VE DAHA KÜÇÜK SAYILARDAN ÇIKARMA:

5 - 1 = 4     🍎🍎🍎🍎🍎 - 🍎 = 🍎🍎🍎🍎
5 - 2 = 3     🍎🍎🍎🍎🍎 - 🍎🍎 = 🍎🍎🍎
5 - 3 = 2     🍎🍎🍎🍎🍎 - 🍎🍎🍎 = 🍎🍎
5 - 4 = 1     🍎🍎🍎🍎🍎 - 🍎🍎🍎🍎 = 🍎
5 - 5 = 0     🍎🍎🍎🍎🍎 - 🍎🍎🍎🍎🍎 = (hiç)

4 - 1 = 3     4 - 2 = 2     4 - 3 = 1     4 - 4 = 0
3 - 1 = 2     3 - 2 = 1     3 - 3 = 0
2 - 1 = 1     2 - 2 = 0
1 - 1 = 0

💡 SIFIR İLE ÇIKARMA:
5 - 0 = 5 (Sıfır çıkarırsan sayı değişmez!)
3 - 0 = 3

🎯 ÖNEMLİ KURAL:
Bir sayıdan kendisini çıkarırsan sıfır olur!
5 - 5 = 0, 3 - 3 = 0, 7 - 7 = 0`,
        'Küçük çıkarmaları ezberle! 5-1=4, 5-2=3, 5-3=2...',
        {
          visual: `5'ten Çıkarma Tablosu:
┌─────────────────────────────┐
│  5 - 0 = 5  (Hiç çıkarma)   │
│  5 - 1 = 4  🖐️ - ☝️ = ✋    │
│  5 - 2 = 3  🖐️ - ✌️ = 3    │
│  5 - 3 = 2  🖐️ - 3 = ✌️    │
│  5 - 4 = 1  🖐️ - 4 = ☝️    │
│  5 - 5 = 0  🖐️ - 🖐️ = ✊   │
│                             │
│  Dikkat: 5 - 5 = 0          │
│  Kendinden çıkarınca 0 kalır│
└─────────────────────────────┘`,
          tip: 'Bir sayıdan kendisini çıkarırsan 0 olur!',
          examples: [
            createExample(
              '5 - 2 = ?',
              '3',
              '5\'ten 2 çıkar = 3!',
              '🖐️ - ✌️ = 3 parmak',
              ['5 parmak', '2 kapat', '3 kaldı']
            ),
            createExample(
              '4 - 3 = ?',
              '1',
              '4\'ten 3 çıkar = 1!',
              '🍎🍎🍎🍎 - 🍎🍎🍎 = 🍎',
              ['4 elma', '3 elma al', '1 elma kaldı']
            ),
            createExample(
              '3 - 3 = ?',
              '0',
              'Kendinden çıkarınca 0 kalır!',
              '⭐⭐⭐ - ⭐⭐⭐ = (hiç)',
              ['3 tane var', '3 tane al', 'Hiç kalmadı: 0']
            ),
            createExample(
              '5 - 0 = ?',
              '5',
              'Sıfır çıkarırsan sayı değişmez!',
              '🍌🍌🍌🍌🍌 - (hiç) = 🍌🍌🍌🍌🍌',
              ['5 muz', 'Hiç almadık', 'Hala 5 muz!']
            ),
            createExample(
              '4 - 1 = ?',
              '3',
              '4\'ten 1 çıkar = 3!',
              '🎈🎈🎈🎈 - 🎈 = 🎈🎈🎈',
              ['4 balon', '1 patladı', '3 kaldı']
            )
          ]
        }
      ),

      createStep(
        '10\'dan Çıkarma',
        `10'dan çıkarma çok önemli! 🔟

📋 10'DAN ÇIKARMA TABLOSU (EZBERLE!):
┌─────────────────────────┐
│  10 - 1 = 9  ⭐⭐⭐     │
│  10 - 2 = 8  ⭐⭐⭐     │
│  10 - 3 = 7  ⭐⭐⭐     │
│  10 - 4 = 6  ⭐⭐⭐     │
│  10 - 5 = 5  ⭐⭐⭐     │
│  10 - 6 = 4  ⭐⭐⭐     │
│  10 - 7 = 3  ⭐⭐⭐     │
│  10 - 8 = 2  ⭐⭐⭐     │
│  10 - 9 = 1  ⭐⭐⭐     │
└─────────────────────────┘

💡 GÖRDÜN MÜ? Bu, 10 yapan ikililerin tersi!
10 - 3 = 7 → çünkü 3 + 7 = 10
10 - 6 = 4 → çünkü 6 + 4 = 10

🎵 ŞARKI İLE EZBERLE:
"10'dan 1 çıkınca 9,
10'dan 2 çıkınca 8,
Toplama bilirsen,
Çıkarma çok kolay!"`,
        '10\'dan çıkarma = 10 yapan ikililerin tersi!',
        {
          visual: `10'dan Çıkarma (Ezberle!):
┌─────────────────────────────────┐
│  10 - 1 = 9  (çünkü 1 + 9 = 10) │
│  10 - 2 = 8  (çünkü 2 + 8 = 10) │
│  10 - 3 = 7  (çünkü 3 + 7 = 10) │
│  10 - 4 = 6  (çünkü 4 + 6 = 10) │
│  10 - 5 = 5  (çünkü 5 + 5 = 10) │
│  10 - 6 = 4  (çünkü 6 + 4 = 10) │
│  10 - 7 = 3  (çünkü 7 + 3 = 10) │
│  10 - 8 = 2  (çünkü 8 + 2 = 10) │
│  10 - 9 = 1  (çünkü 9 + 1 = 10) │
│                                 │
│  İpucu: 10 yapan ikiliyi bilirsen│
│  10'dan çıkarma çok kolay!      │
└─────────────────────────────────┘`,
          explanation: 'Çıkarılan sayı + kalan sayı = 10',
          examples: [
            createExample(
              '10 - 6 = ?',
              '4',
              '10 - 6 = 4, çünkü 6 + 4 = 10!',
              '10 - 6 = 4 ✓',
              ['10 yapan ikiliyi düşün', '6 + ? = 10', '6 + 4 = 10', 'Cevap: 4']
            ),
            createExample(
              '10 - 8 = ?',
              '2',
              '10 - 8 = 2, çünkü 8 + 2 = 10!',
              '10 - 8 = 2 ✓',
              ['8 + ? = 10', '8 + 2 = 10', 'Cevap: 2']
            ),
            createExample(
              '10 - 3 = ?',
              '7',
              '10 - 3 = 7, çünkü 3 + 7 = 10!',
              '10 - 3 = 7 ✓',
              ['3 + 7 = 10', '10 - 3 = 7']
            ),
            createExample(
              '10 - 5 = ?',
              '5',
              '10 - 5 = 5! Yarısı!',
              '10 - 5 = 5 ✓',
              ['5 + 5 = 10', '10 - 5 = 5']
            ),
            createExample(
              '10 - 9 = ?',
              '1',
              '10 - 9 = 1, çünkü 9 + 1 = 10!',
              '10 - 9 = 1 ✓',
              ['9 + 1 = 10', '10 - 9 = 1']
            ),
            createExample(
              '10 - 4 = ?',
              '6',
              '10 - 4 = 6, çünkü 4 + 6 = 10!',
              '10 - 4 = 6 ✓',
              ['4 + 6 = 10', '10 - 4 = 6']
            )
          ]
        }
      ),

      createStep(
        '20\'ye Kadar Çıkarma',
        `Daha büyük çıkarma işlemleri yapalım! 📉

📋 STRATEJİ: 10'A İN
Bu strateji ile büyük çıkarmaları kolayca yapabilirsin!

🎯 ÖRNEK 1: 15 - 7 = ?
Adım 1: 15 - 5 = 10 (10'a in)
Adım 2: 7 - 5 = 2 (kalan çıkarma)
Adım 3: 10 - 2 = 8
✅ Cevap: 15 - 7 = 8

🎯 ÖRNEK 2: 13 - 6 = ?
Adım 1: 13 - 3 = 10 (10'a in)
Adım 2: 6 - 3 = 3 (kalan çıkarma)
Adım 3: 10 - 3 = 7
✅ Cevap: 13 - 6 = 7

💡 İPUCU:
• Önce 10'a in
• Kalan miktarı 10'dan çıkar
• Sonucu bul!

📋 SIKÇA KARŞILAŞILAN:
11 - 2 = 9    12 - 3 = 9    13 - 4 = 9
14 - 5 = 9    15 - 6 = 9    16 - 7 = 9`,
        '10\'a inme stratejisi ile büyük çıkarmaları çöz!',
        {
          visual: `10'a İnme Stratejisi:
┌─────────────────────────────────┐
│  15 - 7 = ?                     │
│                                 │
│  Adım 1: 15 → 10 (5 çıkar)      │
│  Adım 2: 7 - 5 = 2 (kalan)      │
│  Adım 3: 10 - 2 = 8             │
│                                 │
│  Sonuç: 15 - 7 = 8 ✓            │
│                                 │
│  ──────────────────────         │
│                                 │
│  14 - 6 = ?                     │
│  14 → 10 (4 çıkar)              │
│  6 - 4 = 2 (kalan)              │
│  10 - 2 = 8                     │
│                                 │
│  Sonuç: 14 - 6 = 8 ✓            │
└─────────────────────────────────┘`,
          tip: 'Önce 10\'a in, sonra kalan miktarı çıkar!',
          examples: [
            createExample(
              '14 - 6 = ?',
              '8',
              '14 - 4 = 10, 6 - 4 = 2, 10 - 2 = 8!',
              '14 - 6 = 14 - 4 - 2 = 8',
              ['14\'ten 10\'a in: 14-4=10', '6-4=2 kaldı', '10-2=8', 'Cevap: 8']
            ),
            createExample(
              '16 - 9 = ?',
              '7',
              '16 - 6 = 10, 9 - 6 = 3, 10 - 3 = 7!',
              '16 - 9 = 7',
              ['16 → 10 (6 çıkar)', '9 - 6 = 3', '10 - 3 = 7']
            ),
            createExample(
              '13 - 5 = ?',
              '8',
              '13 - 3 = 10, 5 - 3 = 2, 10 - 2 = 8!',
              '13 - 5 = 8',
              ['13 → 10', '5 - 3 = 2', '10 - 2 = 8']
            ),
            createExample(
              '17 - 8 = ?',
              '9',
              '17 - 7 = 10, 8 - 7 = 1, 10 - 1 = 9!',
              '17 - 8 = 9',
              ['17 → 10', '8 - 7 = 1', '10 - 1 = 9']
            ),
            createExample(
              '12 - 4 = ?',
              '8',
              '12 - 2 = 10, 4 - 2 = 2, 10 - 2 = 8!',
              '12 - 4 = 8',
              ['12 → 10', '4 - 2 = 2', '10 - 2 = 8']
            ),
            createExample(
              '18 - 9 = ?',
              '9',
              '18 - 8 = 10, 9 - 8 = 1, 10 - 1 = 9!',
              '18 - 9 = 9',
              ['Yarısı!', '18 - 9 = 9']
            )
          ]
        }
      ),

      createStep(
        'Toplama ve Çıkarma İlişkisi',
        `Toplama ve çıkarma kardeştir! 👫

📋 KARDEŞ İŞLEMLER:
Eğer 3 + 5 = 8 ise:
• 8 - 5 = 3 ✓
• 8 - 3 = 5 ✓

Yani:
• Toplamdan bir sayıyı çıkarırsan, diğerini bulursun!

🎯 SAYFA AİLELERİ:
3, 5, 8 bir aile:
• 3 + 5 = 8 (toplama)
• 5 + 3 = 8 (toplama)
• 8 - 3 = 5 (çıkarma)
• 8 - 5 = 3 (çıkarma)

4, 6, 10 bir aile:
• 4 + 6 = 10
• 6 + 4 = 10
• 10 - 4 = 6
• 10 - 6 = 4

💡 BU BİLGİ ÇOK İŞE YARAR!
Çıkarma bilmiyorsan, toplama ile bul!
8 - 5 = ? → 5 + ? = 8 → 5 + 3 = 8 → Cevap: 3`,
        'Toplama ve çıkarma birbirinin tersidir!',
        {
          visual: `Kardeş İşlemler (Sayı Ailesi):
┌─────────────────────────────────┐
│      3 + 5 = 8                  │
│        ↓   ↓                    │
│     8 - 5 = 3                   │
│     8 - 3 = 5                   │
│                                 │
│  Bir aile: 3, 5, 8              │
│  2 toplama + 2 çıkarma = 4 işlem│
│                                 │
│  ─────────────────────          │
│                                 │
│      7 + 3 = 10                 │
│        ↓   ↓                    │
│     10 - 3 = 7                  │
│     10 - 7 = 3                  │
│                                 │
│  Bir aile: 3, 7, 10             │
└─────────────────────────────────┘`,
          explanation: 'Her toplama işleminin iki kardeş çıkarma işlemi var!',
          examples: [
            createExample(
              '7 + 2 = 9 ise, 9 - 7 = ?',
              '2',
              'Toplamdan bir sayıyı çıkarınca diğeri kalır!',
              '7 + 2 = 9 → 9 - 7 = 2',
              ['7 + 2 = 9', '9 - 7 = ?', 'Diğer sayı: 2', 'Cevap: 2']
            ),
            createExample(
              '5 + 4 = 9 ise, 9 - 4 = ?',
              '5',
              '9\'dan 4 çıkarınca diğer arkadaş 5 kalır!',
              '5 + 4 = 9 → 9 - 4 = 5',
              ['Aile: 4, 5, 9', '9 - 4 = 5']
            ),
            createExample(
              '6 + 8 = 14 ise, 14 - 8 = ?',
              '6',
              'Toplamdan 8 çıkarınca 6 kalır!',
              '6 + 8 = 14 → 14 - 8 = 6',
              ['Aile: 6, 8, 14', '14 - 8 = 6']
            ),
            createExample(
              '8 - 5 = ? (Toplamayla bul)',
              '3',
              '5 + ? = 8 → 5 + 3 = 8 → Cevap: 3',
              '5 + 3 = 8 → 8 - 5 = 3',
              ['5 + ? = 8 düşün', '5 + 3 = 8', '8 - 5 = 3']
            ),
            createExample(
              '3, 4, 7 ailesi için 4 işlem yaz',
              '3+4=7, 4+3=7, 7-3=4, 7-4=3',
              'Her aile 4 işlem verir!',
              '3+4=7, 4+3=7, 7-3=4, 7-4=3',
              ['2 toplama', '2 çıkarma', '= 4 işlem']
            )
          ]
        }
      ),

      createStep(
        'Günlük Hayatta Çıkarma',
        `Çıkarma her yerde! 🌍

📋 GÜNLÜK ÇIKARMA ÖRNEKLERİ:

💰 PARA ÜSTÜ:
10 TL - 7 TL = 3 TL üstü
20 TL - 15 TL = 5 TL üstü

🍎 YİYECEKLER:
8 elma - 3 yedim = 5 kaldı
10 bisküvi - 6 yedim = 4 kaldı

🚀 GERİ SAYIM:
10, 9, 8, 7, 6, 5, 4, 3, 2, 1, FIRLA!

👶👴 YAŞ FARKI:
10 yaş - 7 yaş = 3 yaş fark

⚽ GOL FARKI:
5 gol - 3 gol = 2 gol fark

📚 OKUL:
10 soru - 2 yanlış = 8 doğru

Her gün çıkarma yaparsın!`,
        'Günlük hayat çıkarma ile dolu!',
        {
          visual: `Günlük Hayatta Çıkarma:
┌─────────────────────────────────┐
│  🍎🍎🍎🍎🍎 - 🍎🍎 = 🍎🍎🍎    │
│  5 elma - 2 yedim = 3 kaldı     │
│                                 │
│  💰 10 TL - 💰 6 TL = 4 TL üstü │
│                                 │
│  🚀 GERİ SAYIM:                 │
│  10, 9, 8, 7, 6, 5, 4, 3, 2, 1! │
│                                 │
│  ⚽ Takım A: 4 gol              │
│  ⚽ Takım B: 2 gol              │
│  Fark: 4 - 2 = 2 gol            │
└─────────────────────────────────┘`,
          tip: 'Para üstü, kalan şeyler, geri sayım... Hep çıkarma!',
          examples: [
            createExample(
              '10 TL verdim, 7 TL\'lik aldım. Para üstü?',
              '3 TL',
              '10 - 7 = 3 TL para üstü alırsın!',
              '💰10 - 💰7 = 💰3 TL üstü',
              ['Verilen: 10 TL', 'Fiyat: 7 TL', '10 - 7 = 3', 'Para üstü: 3 TL']
            ),
            createExample(
              '12 şeker vardı, 5 tane dağıttım. Kaç kaldı?',
              '7 şeker',
              '12 - 5 = 7 şeker kaldı!',
              '🍬12 - 🍬5 = 🍬7',
              ['12 şeker var', '5 dağıttın', '12 - 5 = 7 kaldı']
            ),
            createExample(
              'Babam 35 yaşında, ben 8 yaşındayım. Yaş farkı?',
              '27 yaş',
              'Büyük yaştan küçük yaşı çıkar!',
              '35 - 8 = 27 yaş fark',
              ['35 - 8', '= 27 yaş fark']
            ),
            createExample(
              'Sınıfta 15 öğrenci var, 6\'sı erkek. Kaç kız?',
              '9 kız',
              '15 - 6 = 9 kız öğrenci!',
              '👧👦 15 - 👦6 = 👧9',
              ['Toplam: 15', 'Erkek: 6', 'Kız: 15 - 6 = 9']
            ),
            createExample(
              'Maçta 4-1 bitti. Gol farkı kaç?',
              '3 gol',
              '4 - 1 = 3 gol fark!',
              '⚽4 - ⚽1 = 3 gol fark',
              ['Kazanan: 4 gol', 'Kaybeden: 1 gol', 'Fark: 3']
            ),
            createExample(
              '20 TL\'m vardı, 8 TL harcadım. Kaç TL kaldı?',
              '12 TL',
              '20 - 8 = 12 TL kaldı!',
              '💰20 - 💰8 = 💰12',
              ['20 TL var', '8 TL harcadın', '12 TL kaldı']
            )
          ]
        }
      ),

      createStep(
        'Çıkarma Pratiği! ➖',
        `Harika öğrendin! Şimdi pratik zamanı!

🎮 ÇIKARMA OYUNLARI:
• Geri sayım yap: 20, 19, 18, 17...
• Markette para üstü hesapla!
• Kalan şeyleri say!
• Zar at, büyükten küçüğü çıkar!

📝 HER GÜN PRATİK YAP:
• 5 dakika çıkarma çöz
• 10'dan çıkarmayı tekrarla
• Günlük hayatta çıkarma bul
• Toplama-çıkarma ilişkisini kullan

🏆 ÇIKARMA ŞAMPİYONU OLMAK İÇİN:
1. 10'dan çıkarmayı ezberle ✓
2. 10'a inme stratejisini uygula ✓
3. Toplama-çıkarma ilişkisini kullan ✓
4. Her gün pratik yap ✓

🎯 ÖZET:
• - = Eksi = Al = Çıkar = Azalt
• Çıkarma = Bir sayıdan bir miktar alma
• FARK = Çıkarma işleminin sonucu
• 10'dan çıkarma = 10 yapan ikililerin tersi
• Toplama ve çıkarma kardeştir!`,
        'Pratik yaparsan çıkarma şampiyonu olursun!',
        {
          visual: `Çıkarma Özeti:
┌─────────────────────────────────┐
│  ➖ = EKSİ = AL = ÇIKAR         │
│                                 │
│  Çıkarma = Azaltma              │
│  Fark = Çıkarma sonucu          │
│                                 │
│  10'dan Çıkarma (EZBERLE!):     │
│  10-1=9, 10-2=8, 10-3=7         │
│  10-4=6, 10-5=5, 10-6=4         │
│  10-7=3, 10-8=2, 10-9=1         │
│                                 │
│  10'a İnme Stratejisi:          │
│  15-7 = 15-5-2 = 10-2 = 8       │
│                                 │
│  Kardeş İşlemler:               │
│  3+5=8 → 8-5=3, 8-3=5           │
│                                 │
│  Her gün pratik yap! 🏆         │
└─────────────────────────────────┘`,
          examples: [
            createExample(
              'Çıkarma işaretinin adı nedir?',
              'Eksi',
              '- işaretine eksi denir!',
              '- = EKSİ',
              ['- işareti', 'Adı: Eksi']
            ),
            createExample(
              'Çıkarma sonucuna ne denir?',
              'Fark',
              'Çıkarma işleminin sonucuna FARK denir!',
              '8 - 3 = 5 (5 fark)',
              ['Toplama sonucu: Toplam', 'Çıkarma sonucu: Fark']
            ),
            createExample(
              '10\'dan çıkarma neden kolay?',
              '10 yapan ikililerin tersi olduğu için',
              '3 + 7 = 10 bilirsen, 10 - 3 = 7 kolay!',
              '10 - 3 = 7 (çünkü 3 + 7 = 10)',
              ['10 yapan ikililer', 'Çıkarmayı kolaylaştırır']
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // KOLAY SORULAR (1-10)
      createMultipleChoice(
        '8 - 3 = ?',
        ['4', '5', '6', '7'],
        '5',
        '8 - 3 = 5!'
      ),
      createFillBlank(
        '10 - 4 = ___',
        ['6', 'altı'],
        '10 - 4 = 6!'
      ),
      createMultipleChoice(
        '5 - 2 = ?',
        ['2', '3', '4', '5'],
        '3',
        '5 - 2 = 3!'
      ),
      createFillBlank(
        '7 - 3 = ___',
        ['4', 'dört'],
        '7 - 3 = 4!'
      ),
      createMultipleChoice(
        '🍎🍎🍎🍎🍎 - 🍎🍎 = ?',
        ['2', '3', '4', '5'],
        '3',
        '5 - 2 = 3 elma!'
      ),
      createFillBlank(
        '9 - 5 = ___',
        ['4', 'dört'],
        '9 - 5 = 4!'
      ),
      createMultipleChoice(
        '6 - 4 = ?',
        ['1', '2', '3', '4'],
        '2',
        '6 - 4 = 2!'
      ),
      createFillBlank(
        '8 - 6 = ___',
        ['2', 'iki'],
        '8 - 6 = 2!'
      ),
      createMultipleChoice(
        '4 - 4 = ?',
        ['0', '1', '2', '4'],
        '0',
        'Kendinden çıkarınca 0 kalır!'
      ),
      createFillBlank(
        '5 - 0 = ___',
        ['5', 'beş'],
        'Sıfır çıkarınca sayı değişmez!'
      ),

      // 10'DAN ÇIKARMA (11-20)
      createMultipleChoice(
        '10 - 6 = ?',
        ['3', '4', '5', '6'],
        '4',
        '10 - 6 = 4! (6 + 4 = 10)'
      ),
      createFillBlank(
        '10 - 3 = ___',
        ['7', 'yedi'],
        '10 - 3 = 7!'
      ),
      createMultipleChoice(
        '10 - 8 = ?',
        ['1', '2', '3', '4'],
        '2',
        '10 - 8 = 2!'
      ),
      createFillBlank(
        '10 - 5 = ___',
        ['5', 'beş'],
        '10 - 5 = 5! (Yarısı!)'
      ),
      createMultipleChoice(
        '10 - 9 = ?',
        ['0', '1', '2', '3'],
        '1',
        '10 - 9 = 1!'
      ),
      createFillBlank(
        '10 - 2 = ___',
        ['8', 'sekiz'],
        '10 - 2 = 8!'
      ),
      createMultipleChoice(
        '10 - 7 = ?',
        ['2', '3', '4', '5'],
        '3',
        '10 - 7 = 3!'
      ),
      createFillBlank(
        '10 - 1 = ___',
        ['9', 'dokuz'],
        '10 - 1 = 9!'
      ),
      createMultipleChoice(
        '10 - 4 = ?',
        ['4', '5', '6', '7'],
        '6',
        '10 - 4 = 6!'
      ),
      createFillBlank(
        '10 - 10 = ___',
        ['0', 'sıfır'],
        '10 - 10 = 0! Kendinden çıkarınca 0!'
      ),

      // BÜYÜK ÇIKARMA (21-30)
      createMultipleChoice(
        '15 - 7 = ?',
        ['6', '7', '8', '9'],
        '8',
        '15 - 7 = 8!'
      ),
      createFillBlank(
        '12 - 5 = ___',
        ['7', 'yedi'],
        '12 - 5 = 7!'
      ),
      createMultipleChoice(
        '18 - 9 = ?',
        ['7', '8', '9', '10'],
        '9',
        '18 - 9 = 9!'
      ),
      createFillBlank(
        '14 - 6 = ___',
        ['8', 'sekiz'],
        '14 - 6 = 8!'
      ),
      createMultipleChoice(
        '16 - 8 = ?',
        ['6', '7', '8', '9'],
        '8',
        '16 - 8 = 8!'
      ),
      createFillBlank(
        '13 - 4 = ___',
        ['9', 'dokuz'],
        '13 - 4 = 9!'
      ),
      createMultipleChoice(
        '17 - 9 = ?',
        ['6', '7', '8', '9'],
        '8',
        '17 - 9 = 8!'
      ),
      createFillBlank(
        '11 - 3 = ___',
        ['8', 'sekiz'],
        '11 - 3 = 8!'
      ),
      createMultipleChoice(
        '20 - 8 = ?',
        ['10', '11', '12', '13'],
        '12',
        '20 - 8 = 12!'
      ),
      createFillBlank(
        '19 - 10 = ___',
        ['9', 'dokuz'],
        '19 - 10 = 9!'
      ),

      // TOPLAMA-ÇIKARMA İLİŞKİSİ (31-35)
      createMultipleChoice(
        '7 + 3 = 10 ise, 10 - 7 = ?',
        ['2', '3', '4', '5'],
        '3',
        '10 - 7 = 3! (Kardeş işlem)'
      ),
      createFillBlank(
        '5 + 4 = 9 ise, 9 - 5 = ___',
        ['4', 'dört'],
        '9 - 5 = 4!'
      ),
      createMultipleChoice(
        '6 + 8 = 14 ise, 14 - 6 = ?',
        ['6', '7', '8', '9'],
        '8',
        '14 - 6 = 8!'
      ),
      createFillBlank(
        '9 + 6 = 15 ise, 15 - 9 = ___',
        ['6', 'altı'],
        '15 - 9 = 6!'
      ),
      createMultipleChoice(
        'Çıkarma işaretinin adı?',
        ['Artı', 'Eksi', 'Çarpı', 'Bölü'],
        'Eksi',
        '- işareti eksi!'
      ),

      // GÜNLÜK HAYAT PROBLEMLERİ (36-45)
      createMultipleChoice(
        '10 TL - 4 TL = ? para üstü',
        ['4 TL', '5 TL', '6 TL', '7 TL'],
        '6 TL',
        '10 - 4 = 6 TL!'
      ),
      createFillBlank(
        '8 elmam vardı, 3 yedim. ___ elma kaldı.',
        ['5', 'beş'],
        '8 - 3 = 5 elma kaldı!'
      ),
      createMultipleChoice(
        '15 öğrenci var, 6\'sı erkek. Kaç kız?',
        ['7', '8', '9', '10'],
        '9',
        '15 - 6 = 9 kız!'
      ),
      createFillBlank(
        '12 şeker vardı, 7 dağıttım. ___ şeker kaldı.',
        ['5', 'beş'],
        '12 - 7 = 5 şeker kaldı!'
      ),
      createMultipleChoice(
        'Maç 5-2 bitti. Gol farkı kaç?',
        ['2', '3', '4', '5'],
        '3',
        '5 - 2 = 3 gol fark!'
      ),
      createFillBlank(
        '20 TL verdim, 13 TL\'lik aldım. ___ TL üstü.',
        ['7', 'yedi'],
        '20 - 13 = 7 TL üstü!'
      ),
      createMultipleChoice(
        'Kutuda 14 top var, 6 tanesi patladı. Kaç kaldı?',
        ['6', '7', '8', '9'],
        '8',
        '14 - 6 = 8 top kaldı!'
      ),
      createFillBlank(
        '16 sayfalık kitabın 9 sayfasını okudum. ___ sayfa kaldı.',
        ['7', 'yedi'],
        '16 - 9 = 7 sayfa kaldı!'
      ),
      createMultipleChoice(
        '🔵🔵🔵🔵🔵🔵🔵 - 🔵🔵🔵 = ?',
        ['3', '4', '5', '6'],
        '4',
        '7 - 3 = 4!'
      ),
      createFillBlank(
        '11 çocuk oyunda, 4\'ü eve gitti. ___ çocuk kaldı.',
        ['7', 'yedi'],
        '11 - 4 = 7 çocuk kaldı!'
      )
    ],

    summary: `🎉 ÇIKARMA KONUSU ÖZET:

✅ Öğrendiklerimiz:
• Çıkarma = Bir sayıdan bir miktar alma
• - işareti = Eksi (al, çıkar, azalt anlamında)
• Fark = Çıkarma işleminin sonucu

✅ 10'dan Çıkarma (EZBERLE!):
10-1=9, 10-2=8, 10-3=7, 10-4=6, 10-5=5
10-6=4, 10-7=3, 10-8=2, 10-9=1

✅ 10'a İnme Stratejisi:
15-7 → 15-5=10, 10-2=8

✅ Toplama-Çıkarma İlişkisi:
3+5=8 → 8-5=3, 8-3=5 (Kardeş işlemler!)

Artık çıkarma şampiyonusun! 🏆`,
    nextTopicPreview: 'Sonraki konuda geometri öğreneceğiz! Şekiller ve çizgiler!'
  }
};
