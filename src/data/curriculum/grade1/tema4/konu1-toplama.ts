// 1. SINIF - TEMA 4 - KONU 1: Toplama İşlemi
// DETAYLI VE ZENGİN İÇERİK - 30+ SORU
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1Toplama: Topic = {
  id: 'toplama-temelleri',
  title: 'Toplama İşlemi',
  description: 'İki sayıyı toplama, toplam bulma ve günlük hayatta toplama',
  emoji: '➕',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['toplama', 'artı', 'toplam', 'birleştirme', 'ekle', 'bir araya getir'],
  objectives: [
    'Toplama kavramını anlar ve açıklar',
    'Artı (+) işaretini tanır ve doğru kullanır',
    'Toplamı 10\'a kadar hesaplar',
    'Toplamı 20\'ye kadar hesaplar',
    '10 yapan ikilileri ezberler',
    'Günlük hayatta toplama problemleri çözer',
    'Parmaklarla ve nesnelerle toplama yapar'
  ],
  content: {
    introduction: `Merhaba küçük matematikçi! ➕

Toplama, matematiğin en temel ve en eğlenceli işlemidir! 🎉

🌟 TOPLAMA NEDİR?
İki veya daha fazla şeyi bir araya getirip toplam bulmaktır!

🍎 GÜNLÜK HAYATTAN ÖRNEKLER:
• 2 elma + 3 elma = 5 elma
• 4 kalem + 2 kalem = 6 kalem
• 3 arkadaş + 2 arkadaş = 5 arkadaş

Elmalrını, oyuncaklarını, arkadaşlarını... Her şeyi toplama ile sayabilirsin!

🎯 BU KONUDA NELER ÖĞRENECEKSİN?
✅ Toplama nedir, ne işe yarar
✅ Artı (+) işareti nasıl kullanılır
✅ 10'a kadar toplama
✅ 10 yapan ikilileri (çok önemli!)
✅ 20'ye kadar toplama
✅ Günlük hayatta toplama

Hazır mısın? Toplama macerasına başlayalım! 🚀`,

    motivationQuote: 'Toplamak birleştirmektir, birlik güçtür! Toplama öğrenirsen matematik kolay gelir! ➕',

    funFacts: [
      'Toplama en eski matematik işlemidir - 6000 yıllık! 📜',
      'Bilgisayarlar saniyede milyarlarca toplama yapabilir! 💻',
      'Arılar bile toplu halde çalışır ve sayı hesabı yapar! 🐝',
      'Beynimiz günde binlerce toplama işlemi yapar! 🧠',
      'İlk hesap makinesi toplama için icat edildi! 🔢',
      'Piramitler toplama hesapları ile inşa edildi! 🏛️',
      'Karıncalar yiyecek toplarken matematik yapar! 🐜',
      'Futbolda gol sayısı toplama ile bulunur! ⚽'
    ],

    steps: [
      createStep(
        'Toplama Nedir?',
        `Toplama, nesneleri bir araya getirip toplam sayısını bulmaktır! ➕

📋 TOPLAMA KURALLARI:
• İki veya daha fazla sayı bir araya getirilir
• Sonuca TOPLAM denir
• Artı (+) işareti kullanılır
• Eşittir (=) işaretinden sonra sonuç yazılır

🎯 BASİT ÖRNEK:
🍎🍎 + 🍎🍎🍎 = 🍎🍎🍎🍎🍎
  2  +    3   =      5

2 elma ve 3 elma bir araya gelince 5 elma olur!

📝 TOPLAMA İŞLEMİNİN PARÇALARI:
   2   +   3   =   5
   ↓       ↓       ↓
Toplanan  Toplanan  TOPLAM
(1.sayı)  (2.sayı)  (Sonuç)

💡 HATIRLA:
• "Ekle" demek toplama demek
• "Birleştir" demek toplama demek
• "Daha" demek toplama demek`,
        '2 elma ve 3 elma bir araya gelince 5 elma olur!',
        {
          visual: `Toplama Gösterimi:
┌─────────────────────────────────────────┐
│  🍎🍎   +   🍎🍎🍎   =   🍎🍎🍎🍎🍎     │
│    2    +     3     =       5          │
│                                         │
│  Birinci   Artı   İkinci   Eşittir  Toplam │
│   Sayı     (+)     Sayı      (=)         │
└─────────────────────────────────────────┘

Birleştirdik ve saydık: 5 elma!`,
          examples: [
            createExample(
              '3 + 2 = ?',
              '5',
              '3 elma ve 2 elma toplarsak 5 elma olur!',
              '🍎🍎🍎 + 🍎🍎 = 🍎🍎🍎🍎🍎',
              ['3 tane var', '2 tane daha ekle', 'Hepsini say', '3 + 2 = 5', 'Cevap: 5']
            ),
            createExample(
              '4 + 1 = ?',
              '5',
              '4 taneye 1 eklersek 5 olur!',
              '⭐⭐⭐⭐ + ⭐ = ⭐⭐⭐⭐⭐',
              ['4 yıldız var', '1 yıldız daha ekle', 'Hepsini say: 5']
            ),
            createExample(
              '2 + 2 = ?',
              '4',
              '2 ve 2 eşit sayılar! Toplamı 4!',
              '🎈🎈 + 🎈🎈 = 🎈🎈🎈🎈',
              ['2 balon var', '2 balon daha ekle', 'Toplam: 4 balon']
            ),
            createExample(
              '1 + 4 = ?',
              '5',
              '1 taneye 4 daha eklersek 5 olur!',
              '🐱 + 🐱🐱🐱🐱 = 🐱🐱🐱🐱🐱',
              ['1 kedi var', '4 kedi daha geldi', '1 + 4 = 5 kedi']
            ),
            createExample(
              '3 + 3 = ?',
              '6',
              'İki tane 3! Eşit sayıları toplamak kolay!',
              '🌸🌸🌸 + 🌸🌸🌸 = 🌸🌸🌸🌸🌸🌸',
              ['3 çiçek + 3 çiçek', '= 6 çiçek']
            ),
            createExample(
              '5 + 0 = ?',
              '5',
              'Sıfır eklersen sayı değişmez!',
              '🍌🍌🍌🍌🍌 + (hiç) = 🍌🍌🍌🍌🍌',
              ['5 muz var', '0 muz ekle', 'Hala 5 muz!']
            )
          ]
        }
      ),

      createStep(
        'Artı İşareti (+)',
        `Artı işareti (+) toplama yaparken kullanılır! ➕

📋 ARTI İŞARETİNİN ANLAMI:
• + = Artı = Ekle = Birleştir = Daha
• "Artı" diye okunur
• Toplama işleminin simgesi

📝 OKUMA ŞEKLİ:
4 + 3 = 7
"Dört artı üç eşittir yedi"

🎵 EZBERLEMELİK ŞARKI:
"Artı demek ekle demek,
Ekle, birleştir, topla!
İki sayıyı al,
Bir araya koy,
Toplam bul, mutlu ol!" 🎶

📋 GÜNLÜK DİLDE TOPLAMA:
"2 artı 3" = "2 ve 3" = "2 ile 3" = "2'ye 3 ekle"
Hepsi aynı anlama gelir!

💡 İPUCU:
+ işareti bir artı gibi görünür
Dikey çizgi ve yatay çizgi kesişir`,
        'Artı demek ekle, birleştir demek!',
        {
          visual: `Artı İşareti (+):
┌───────────────────────────────┐
│      +  = ARTI = EKLE         │
│                               │
│   Nasıl çizilir?              │
│       │                       │
│    ───┼───                    │
│       │                       │
│                               │
│  4 + 3 = 7                    │
│   ↓   ↓   ↓                   │
│  dört artı üç eşittir yedi    │
└───────────────────────────────┘`,
          tip: 'Artı işaretini görünce "ekle" veya "birleştir" diye düşün!',
          examples: [
            createExample(
              '5 + 1 nasıl okunur?',
              'Beş artı bir',
              '+ işareti "artı" diye okunur!',
              '5 + 1 = "Beş artı bir"',
              ['5 sayısını oku: beş', '+ işareti: artı', '1 sayısını oku: bir', 'Beş artı bir']
            ),
            createExample(
              '2 + 6 = ? (Oku ve cevapla)',
              'İki artı altı eşittir sekiz (8)',
              'Okuma: İki artı altı eşittir sekiz!',
              '2 + 6 = 8',
              ['İki artı altı', '2 ve 6\'yı topla', '2 + 6 = 8', 'Sekiz!']
            ),
            createExample(
              '7 + 2 nasıl okunur?',
              'Yedi artı iki',
              '+ işareti her zaman "artı" diye okunur',
              '7 + 2 = "Yedi artı iki eşittir dokuz"',
              ['7: yedi', '+: artı', '2: iki', '=: eşittir', '9: dokuz']
            ),
            createExample(
              '3 + 5 nasıl okunur?',
              'Üç artı beş',
              'Oku: Üç artı beş eşittir sekiz!',
              '3 + 5 = 8',
              ['Üç artı beş', '= sekiz']
            ),
            createExample(
              '"Dört ve üç kaç eder?" sorusunu işlem olarak yaz',
              '4 + 3',
              '"Ve" kelimesi de toplama anlamına gelir!',
              '"4 ve 3" = 4 + 3 = 7',
              ['"Ve" = "artı"', '4 + 3 yaz', 'Sonuç: 7']
            )
          ]
        }
      ),

      createStep(
        'Parmaklarla Toplama',
        `Parmaklarını kullanarak toplama yapabilirsin! ✋

📋 NASIL YAPILIR?
1️⃣ Birinci sayı kadar parmak aç
2️⃣ İkinci sayı kadar daha parmak aç
3️⃣ Tüm açık parmakları say
4️⃣ Sonuç = TOPLAM!

🎯 ÖRNEK: 3 + 4 = ?
✋ Sol el: 3 parmak aç
✋ Sağ el: 4 parmak aç
🔢 Hepsini say: 1, 2, 3, 4, 5, 6, 7
✅ Cevap: 7

💡 ÖNEMLİ BİLGİ:
• Her elde 5 parmak var
• İki el toplam 10 parmak
• 10'a kadar toplama parmaklarla kolay!

🎮 PARMAK OYUNU:
Sol elde sayıları tut,
Sağ ele daha ekle,
Hepsini say,
Toplamı bul!`,
        'Parmaklarını hesap makinesi gibi kullan!',
        {
          visual: `Parmaklarla Toplama:
┌─────────────────────────────────────┐
│  Sol El     +     Sağ El    = Toplam│
│    ✋              ✋                │
│  5 parmak  +   2 parmak   = 7 parmak│
│                                     │
│  Örnek: 4 + 4                       │
│  ✋ 4 parmak + ✋ 4 parmak = 8      │
│                                     │
│  10 Parmağın Var:                   │
│  Sol El: 🖐️ 5 parmak               │
│  Sağ El: 🖐️ 5 parmak               │
│  Toplam: 10 parmak                  │
└─────────────────────────────────────┘`,
          tip: '10\'dan büyük sayılar için başka yöntemler kullanacağız!',
          examples: [
            createExample(
              '4 + 4 parmaklarla kaç?',
              '8 parmak',
              'Her elde 4 parmak aç = 8 toplam!',
              '✋ 4 + ✋ 4 = 8',
              ['Sol ele 4 parmak aç', 'Sağ ele 4 parmak aç', 'Hepsini say: 1,2,3,4,5,6,7,8', 'Cevap: 8']
            ),
            createExample(
              '5 + 3 = ?',
              '8',
              'Bir el tam açık (5), diğer elden 3 parmak!',
              '🖐️ 5 + ✌️👆 3 = 8',
              ['Sol el: 5 parmak (tam)', 'Sağ el: 3 parmak', 'Toplam: 8']
            ),
            createExample(
              '2 + 5 = ?',
              '7',
              'Sol el 2, sağ el 5 parmak aç!',
              '✌️ 2 + 🖐️ 5 = 7',
              ['2 parmak + 5 parmak', '= 7 parmak']
            ),
            createExample(
              '5 + 5 = ?',
              '10',
              'İki el de tam açık! 10 parmak!',
              '🖐️ + 🖐️ = 10',
              ['Sol el: 5', 'Sağ el: 5', 'Tüm parmaklar: 10']
            ),
            createExample(
              '3 + 6 = ?',
              '9',
              '3 parmak + 6 parmak = 9 parmak!',
              '3 + 6 = 9 (bir elde 5, diğerinde 4)',
              ['Sol: 3 parmak', 'Sağ: 5+1=6 parmak', 'Toplam: 9']
            ),
            createExample(
              '1 + 7 = ?',
              '8',
              '1 parmak + 7 parmak = 8',
              '☝️ + (🖐️+✌️) = 8',
              ['1 parmak aç', '7 parmak daha aç', 'Say: 8 parmak']
            )
          ]
        }
      ),

      createStep(
        '5\'e Kadar Toplama',
        `Küçük sayılarla başlayalım! 🔢

📋 TOPLAMASI 5 VE DAHA AZ OLAN İŞLEMLER:

1 + 1 = 2     🍎+🍎 = 🍎🍎
1 + 2 = 3     🍎+🍎🍎 = 🍎🍎🍎
1 + 3 = 4     🍎+🍎🍎🍎 = 🍎🍎🍎🍎
1 + 4 = 5     🍎+🍎🍎🍎🍎 = 🍎🍎🍎🍎🍎
2 + 2 = 4     🍎🍎+🍎🍎 = 🍎🍎🍎🍎
2 + 3 = 5     🍎🍎+🍎🍎🍎 = 🍎🍎🍎🍎🍎

💡 SIFIRLA TOPLAMA:
0 + 5 = 5 (Sıfır eklersen sayı değişmez!)
3 + 0 = 3
0 + 0 = 0

🎯 EZBERLEMELİK:
Bu küçük toplamları ezberle!
Daha büyük hesaplarda işine yarayacak!`,
        'Küçük sayıları toplamak kolay! 1+1=2, 2+2=4, 2+3=5',
        {
          visual: `5'e Kadar Toplama Tablosu:
┌─────────────────────────────┐
│  0 + 1 = 1   0 + 2 = 2      │
│  0 + 3 = 3   0 + 4 = 4      │
│  0 + 5 = 5                  │
│                             │
│  1 + 1 = 2   1 + 2 = 3      │
│  1 + 3 = 4   1 + 4 = 5      │
│                             │
│  2 + 1 = 3   2 + 2 = 4      │
│  2 + 3 = 5                  │
│                             │
│  3 + 1 = 4   3 + 2 = 5      │
│  4 + 1 = 5                  │
└─────────────────────────────┘`,
          tip: 'Bu tabloyu ezberle! Matematik kolaylaşır!',
          examples: [
            createExample(
              '2 + 2 = ?',
              '4',
              'İki tane 2! 2 + 2 = 4',
              '🌟🌟 + 🌟🌟 = 🌟🌟🌟🌟',
              ['2 yıldız', '2 yıldız daha', 'Toplam: 4']
            ),
            createExample(
              '1 + 3 = ?',
              '4',
              '1 ve 3 toplamı 4!',
              '🎈 + 🎈🎈🎈 = 🎈🎈🎈🎈',
              ['1 + 3 = 4']
            ),
            createExample(
              '0 + 5 = ?',
              '5',
              'Sıfır eklersen sayı değişmez!',
              '(hiç) + 🍭🍭🍭🍭🍭 = 🍭🍭🍭🍭🍭',
              ['0 eklemek = hiç eklemek', 'Sayı aynı kalır: 5']
            ),
            createExample(
              '2 + 1 = ?',
              '3',
              '2\'ye 1 ekle, 3 olur!',
              '🐕🐕 + 🐕 = 🐕🐕🐕',
              ['2 köpek', '1 köpek daha', '3 köpek']
            ),
            createExample(
              '4 + 1 = ?',
              '5',
              '4\'e 1 ekleyince 5 olur!',
              '🚗🚗🚗🚗 + 🚗 = 🚗🚗🚗🚗🚗',
              ['4 araba + 1 araba = 5 araba']
            )
          ]
        }
      ),

      createStep(
        'Toplamı 10\'a Kadar',
        `10'a kadar olan toplama işlemlerini öğrenelim! 🔟

📋 10 YAPAN İKİLİLER (ALTIN KURALI!):
┌─────────────────────────┐
│  1 + 9 = 10  ⭐⭐⭐     │
│  2 + 8 = 10  ⭐⭐⭐     │
│  3 + 7 = 10  ⭐⭐⭐     │
│  4 + 6 = 10  ⭐⭐⭐     │
│  5 + 5 = 10  ⭐⭐⭐     │
│  6 + 4 = 10  ⭐⭐⭐     │
│  7 + 3 = 10  ⭐⭐⭐     │
│  8 + 2 = 10  ⭐⭐⭐     │
│  9 + 1 = 10  ⭐⭐⭐     │
└─────────────────────────┘

💡 BU İKİLİLERİ MUTLAKA EZBERLE!
Matematikte çok çok işine yarayacak!

🎵 ŞARKI İLE EZBERLE:
"1-9, 2-8, 3-7, 4-6, 5-5
Hepsi 10 yapar, kolay gelir!"

📋 DİĞER 10'A KADAR TOPLAMA:
6 + 3 = 9    7 + 2 = 9    8 + 1 = 9
5 + 4 = 9    4 + 5 = 9
5 + 3 = 8    6 + 2 = 8    7 + 1 = 8
4 + 4 = 8`,
        '10 yapan ikilileri ezberle: 1-9, 2-8, 3-7, 4-6, 5-5!',
        {
          visual: `10 Yapan İkililer (Ezberle!):
┌─────────────────────────────────┐
│     1 + 9 = 10                  │
│    🔵 + 🔵🔵🔵🔵🔵🔵🔵🔵🔵     │
│                                 │
│     2 + 8 = 10                  │
│    🔵🔵 + 🔵🔵🔵🔵🔵🔵🔵🔵      │
│                                 │
│     3 + 7 = 10                  │
│    🔵🔵🔵 + 🔵🔵🔵🔵🔵🔵🔵      │
│                                 │
│     4 + 6 = 10                  │
│    🔵🔵🔵🔵 + 🔵🔵🔵🔵🔵🔵      │
│                                 │
│     5 + 5 = 10                  │
│    🔵🔵🔵🔵🔵 + 🔵🔵🔵🔵🔵      │
└─────────────────────────────────┘`,
          explanation: '10 yapan ikilileri bilmek, daha büyük hesaplar için çok önemli!',
          examples: [
            createExample(
              '10 yapmak için 6\'ya ne eklemeliyiz?',
              '4',
              '6 + 4 = 10! Bu ikiliyi ezberle!',
              '6 + ? = 10 → 6 + 4 = 10',
              ['10 yapan ikili düşün', '6 + _ = 10', '4 eklersek 10 olur', 'Cevap: 4']
            ),
            createExample(
              '7 + 3 = ?',
              '10',
              '7 ve 3, 10 yapan bir ikilidir!',
              '7 + 3 = 10 ✓',
              ['7 + 3', '10 yapan ikili!', 'Cevap: 10']
            ),
            createExample(
              '10 yapmak için 8\'e ne eklemeliyiz?',
              '2',
              '8 + 2 = 10! Ezberle!',
              '8 + ? = 10 → 8 + 2 = 10',
              ['8 + _ = 10', '10 - 8 = 2', 'Cevap: 2']
            ),
            createExample(
              '5 + 5 = ?',
              '10',
              'İki tane 5 = 10! En kolay ikili!',
              '🖐️ + 🖐️ = 10 (iki el)',
              ['5 + 5', '= 10']
            ),
            createExample(
              '10 yapmak için 1\'e ne eklemeliyiz?',
              '9',
              '1 + 9 = 10!',
              '1 + ? = 10 → 1 + 9 = 10',
              ['1 + 9 = 10', 'En büyük ikili farkı']
            ),
            createExample(
              '6 + 4 = ?',
              '10',
              '6 ve 4 de 10 yapan ikilidir!',
              '6 + 4 = 10 ✓',
              ['Ezberle: 6 + 4 = 10']
            )
          ]
        }
      ),

      createStep(
        'Toplamı 20\'ye Kadar',
        `Şimdi daha büyük toplamlar öğrenelim! 📈

📋 STRATEJİ: 10'A TAMAMLA
Bu strateji ile her hesabı yapabilirsin!

🎯 ÖRNEK 1: 9 + 5 = ?
Adım 1: 9'u 10'a tamamla → 9 + 1 = 10
Adım 2: 5'ten 1 aldık, 4 kaldı
Adım 3: 10 + 4 = 14
✅ Cevap: 9 + 5 = 14

🎯 ÖRNEK 2: 8 + 6 = ?
Adım 1: 8'i 10'a tamamla → 8 + 2 = 10
Adım 2: 6'dan 2 aldık, 4 kaldı
Adım 3: 10 + 4 = 14
✅ Cevap: 8 + 6 = 14

💡 İPUCU:
• Büyük sayıyı 10'a tamamla
• Küçük sayıdan eksik kısmı al
• 10 + kalan = sonuç

📋 SIKÇA KARŞILAŞILAN:
9 + 2 = 11    9 + 3 = 12    9 + 4 = 13
9 + 5 = 14    9 + 6 = 15    9 + 7 = 16
8 + 3 = 11    8 + 4 = 12    8 + 5 = 13`,
        '10\'a tamamlama stratejisi: 9 + 5 = 10 + 4 = 14!',
        {
          visual: `10'a Tamamlama Stratejisi:
┌─────────────────────────────────┐
│  9 + 5 = ?                      │
│                                 │
│  Adım 1: 9 → 10 (1 ekle)        │
│  Adım 2: 5 - 1 = 4 (kalan)      │
│  Adım 3: 10 + 4 = 14            │
│                                 │
│  Sonuç: 9 + 5 = 14 ✓            │
│                                 │
│  ──────────────────────         │
│                                 │
│  8 + 7 = ?                      │
│  8 → 10 (2 ekle)                │
│  7 - 2 = 5 (kalan)              │
│  10 + 5 = 15                    │
│                                 │
│  Sonuç: 8 + 7 = 15 ✓            │
└─────────────────────────────────┘`,
          tip: 'Büyük sayıyı 10\'a tamamla, diğerinden al!',
          examples: [
            createExample(
              '8 + 7 = ?',
              '15',
              '8 + 2 = 10, 7 - 2 = 5, 10 + 5 = 15!',
              '8 + 7 = 10 + 5 = 15',
              ['8\'i 10\'a tamamla: 8+2=10', '7\'den 2 al: 7-2=5', '10 + 5 = 15', 'Cevap: 15']
            ),
            createExample(
              '9 + 6 = ?',
              '15',
              '9 + 1 = 10, 6 - 1 = 5, 10 + 5 = 15!',
              '9 + 6 = 10 + 5 = 15',
              ['9 + 1 = 10', '6 - 1 = 5', '10 + 5 = 15']
            ),
            createExample(
              '7 + 5 = ?',
              '12',
              '7 + 3 = 10, 5 - 3 = 2, 10 + 2 = 12!',
              '7 + 5 = 10 + 2 = 12',
              ['7 + 3 = 10', '5 - 3 = 2', '10 + 2 = 12']
            ),
            createExample(
              '11 + 4 = ?',
              '15',
              '11\'e 4 eklersek 15 olur!',
              '11 + 4 = 15 (10 + 1 + 4 = 15)',
              ['11 = 10 + 1', '10 + 1 + 4 = 15']
            ),
            createExample(
              '9 + 9 = ?',
              '18',
              '9 + 1 = 10, 9 - 1 = 8, 10 + 8 = 18!',
              '9 + 9 = 18',
              ['İki tane 9', '= 18']
            ),
            createExample(
              '6 + 8 = ?',
              '14',
              '8 + 2 = 10, 6 - 2 = 4, 10 + 4 = 14!',
              '6 + 8 = 10 + 4 = 14',
              ['Büyük sayı 8\'i 10\'a tamamla', '6\'dan 2 al', '10 + 4 = 14']
            )
          ]
        }
      ),

      createStep(
        'Değişme Özelliği',
        `Toplamanın sihirli bir özelliği var! ✨

📋 DEĞİŞME ÖZELLİĞİ:
Sayıların yerini değiştirsen de toplam aynı kalır!

🎯 ÖRNEK:
3 + 5 = 8
5 + 3 = 8
İkisi de aynı! ✓

2 + 7 = 9
7 + 2 = 9
Aynı sonuç! ✓

💡 NEDEN ÖNEMLİ?
Büyük sayıdan başlamak daha kolay!
• 2 + 9 yerine 9 + 2 düşün!
• 9'dan başla, 2 ekle = 11

Bu özellik sadece toplamada var!
(Çıkarmada yok dikkat!)

🎵 HATIRLATMA:
"Toplama işleminde yer değişir,
Ama sonuç hiç değişmez!"`,
        'Toplamada sayıların yeri değişse de sonuç aynıdır!',
        {
          visual: `Değişme Özelliği:
┌─────────────────────────────────┐
│  3 + 5 = 8    ve    5 + 3 = 8   │
│  🍎🍎🍎+🍎🍎🍎🍎🍎 = 🍎🍎+🍎🍎🍎🍎🍎🍎 │
│                                 │
│  2 + 7 = 9    ve    7 + 2 = 9   │
│  ⭐⭐+⭐⭐⭐⭐⭐⭐⭐ = ⭐⭐⭐⭐⭐⭐⭐+⭐⭐ │
│                                 │
│  SONUÇ HİÇ DEĞİŞMEZ!            │
│                                 │
│  İpucu: Büyük sayıdan başla!    │
│  2 + 9 → 9 + 2 düşün (daha kolay)│
└─────────────────────────────────┘`,
          tip: 'Büyük sayıyı öne al, hesap kolaylaşsın!',
          examples: [
            createExample(
              '4 + 6 ile 6 + 4 eşit mi?',
              'Evet, ikisi de 10',
              'Değişme özelliği! Yer değişir, sonuç aynı!',
              '4 + 6 = 10 = 6 + 4',
              ['4 + 6 = 10', '6 + 4 = 10', 'Aynı sonuç!']
            ),
            createExample(
              '3 + 8 = ?',
              '11',
              '8 + 3 düşün! 8\'den başla, 3 ekle!',
              '3 + 8 = 8 + 3 = 11',
              ['Büyük sayıdan başla: 8', '3 ekle: 8+3=11']
            ),
            createExample(
              '2 + 9 = ?',
              '11',
              '9 + 2 düşün! 9\'dan başlamak kolay!',
              '2 + 9 = 9 + 2 = 11',
              ['9\'dan başla', '2 ekle', '= 11']
            ),
            createExample(
              '5 + 7 ile 7 + 5 sonucu nedir?',
              '12 (ikisi de)',
              'Değişme özelliği: Her ikisi de 12!',
              '5 + 7 = 7 + 5 = 12',
              ['5 + 7 = 12', '7 + 5 = 12', 'Aynı!']
            )
          ]
        }
      ),

      createStep(
        'Günlük Hayatta Toplama',
        `Toplama her yerde! 🌍

📋 GÜNLÜK TOPLAMA ÖRNEKLERİ:

🎈 OYUNCAKLAR:
4 araba + 3 araba = 7 araba
5 bebek + 2 bebek = 7 bebek

👧👦 ARKADAŞLAR:
3 kız + 2 erkek = 5 çocuk
4 arkadaş + 3 arkadaş = 7 arkadaş

💰 PARA:
5 TL + 3 TL = 8 TL
10 kuruş + 10 kuruş = 20 kuruş

🍎 YİYECEKLER:
2 elma + 3 muz = 5 meyve
4 çikolata + 2 şeker = 6 tatlı

📚 OKUL:
3 kitap + 4 defter = 7 malzeme

Her gün farkında olmadan toplama yaparsın!`,
        'Günlük hayat toplama ile dolu!',
        {
          visual: `Günlük Hayatta Toplama:
┌─────────────────────────────────┐
│  👧👧👧 + 👦👦 = 5 çocuk        │
│                                 │
│  🎈🎈🎈🎈 + 🎈🎈🎈 = 7 balon    │
│                                 │
│  💰 5 TL + 💰 3 TL = 8 TL       │
│                                 │
│  📚 4 kitap + 📚 2 kitap = 6 kitap │
│                                 │
│  🍎🍎 + 🍌🍌🍌 = 5 meyve        │
│                                 │
│  ⚽⚽⚽ + ⚽⚽ = 5 top             │
└─────────────────────────────────┘`,
          tip: 'Etrafına bak, toplamalar bul!',
          examples: [
            createExample(
              '4 kırmızı ve 3 mavi balon. Toplam?',
              '7 balon',
              '4 + 3 = 7 balon!',
              '🎈🎈🎈🎈 + 🔵🔵🔵 = 7',
              ['4 kırmızı balon', '3 mavi balon', '4 + 3 = 7', 'Toplam: 7 balon']
            ),
            createExample(
              'Sınıfta 8 kız, 7 erkek. Toplam öğrenci?',
              '15 öğrenci',
              '8 + 7 = 15 öğrenci!',
              '👧8 + 👦7 = 15',
              ['8 kız', '7 erkek', '8 + 7 = 15']
            ),
            createExample(
              '6 TL\'m var, annem 4 TL verdi. Kaç TL\'m oldu?',
              '10 TL',
              '6 + 4 = 10 TL!',
              '💰6 + 💰4 = 💰10',
              ['6 TL var', '4 TL daha', '6 + 4 = 10 TL']
            ),
            createExample(
              '5 kalemim var, 3 tane daha aldım. Kaç kalemim oldu?',
              '8 kalem',
              '5 + 3 = 8 kalem!',
              '✏️5 + ✏️3 = ✏️8',
              ['5 kalem', '3 kalem daha', '5 + 3 = 8']
            ),
            createExample(
              'Bahçede 9 gül, 6 papatya var. Toplam çiçek?',
              '15 çiçek',
              '9 + 6 = 15 çiçek!',
              '🌹9 + 🌼6 = 15',
              ['9 gül', '6 papatya', '9 + 6 = 15 çiçek']
            ),
            createExample(
              'Kutuda 7 kırmızı, 5 yeşil top var. Kaç top?',
              '12 top',
              '7 + 5 = 12 top!',
              '🔴7 + 🟢5 = 12',
              ['7 + 5 = 12 top']
            )
          ]
        }
      ),

      createStep(
        'Toplama Pratiği! ➕',
        `Harika öğrendin! Şimdi pratik zamanı!

🎮 TOPLAMA OYUNLARI:
• Zar at, çıkan sayıları topla!
• Evdeki nesneleri say ve topla!
• Araba plakalarındaki sayıları topla!
• Merdiven çıkarken adımları topla!
• Kart oyunlarında sayıları topla!

📝 HER GÜN PRATİK YAP:
• 5 dakika toplama çöz
• 10 yapan ikilileri tekrarla
• Günlük hayatta toplama bul
• Ailene toplama soruları sor

🏆 TOPLAMA ŞAMPİYONU OLMAK İÇİN:
1. 10 yapan ikilileri ezberle ✓
2. 10'a tamamlama stratejisini uygula ✓
3. Her gün pratik yap ✓
4. Günlük hayatta toplama bul ✓

🎯 ÖZET:
• + = Artı = Ekle = Birleştir
• Toplama = İki sayıyı bir araya getirme
• 10 yapan ikilileri ezberle!
• 10'a tamamlama stratejisi büyük sayılar için
• Değişme özelliği: 3+5 = 5+3`,
        'Pratik yaparsan toplama şampiyonu olursun!',
        {
          visual: `Toplama Özeti:
┌─────────────────────────────────┐
│  ➕ = ARTI = EKLE               │
│                                 │
│  Toplama = Birleştirme          │
│                                 │
│  10 Yapan İkililer (EZBERLE!):  │
│  1+9, 2+8, 3+7, 4+6, 5+5        │
│                                 │
│  10'a Tamamla Stratejisi:       │
│  9+5 = 10+4 = 14                │
│                                 │
│  Değişme Özelliği:              │
│  3+5 = 5+3 = 8                  │
│                                 │
│  Her gün pratik yap! 🏆         │
└─────────────────────────────────┘`,
          examples: [
            createExample(
              'Toplama işaretinin adı nedir?',
              'Artı',
              '+ işaretine artı denir!',
              '+ = ARTI',
              ['+ işareti', 'Adı: Artı']
            ),
            createExample(
              '10 yapan ikililerden 3 tanesini say',
              '1+9, 2+8, 3+7, 4+6, 5+5',
              'Hepsini ezberle!',
              '1+9=10, 2+8=10, 3+7=10, 4+6=10, 5+5=10',
              ['5 tane var', 'Hepsini ezberle!']
            ),
            createExample(
              '10\'a tamamlama stratejisi ne demek?',
              'Büyük sayıyı 10\'a tamamla, sonra kalanı ekle',
              '9+5: önce 9+1=10, sonra 10+4=14',
              '9+5 = 10+4 = 14',
              ['10\'a tamamla', 'Kalanı ekle']
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // KOLAY SORULAR (1-10)
      createMultipleChoice(
        '3 + 5 = ?',
        ['6', '7', '8', '9'],
        '8',
        '3 + 5 = 8! Parmaklarınla say!'
      ),
      createFillBlank(
        '7 + 2 = ___',
        ['9', 'dokuz'],
        '7 + 2 = 9!'
      ),
      createMultipleChoice(
        '2 + 2 = ?',
        ['3', '4', '5', '6'],
        '4',
        'İki tane 2 = 4!'
      ),
      createFillBlank(
        '4 + 3 = ___',
        ['7', 'yedi'],
        '4 + 3 = 7!'
      ),
      createMultipleChoice(
        '1 + 5 = ?',
        ['4', '5', '6', '7'],
        '6',
        '1 + 5 = 6!'
      ),
      createFillBlank(
        '5 + 4 = ___',
        ['9', 'dokuz'],
        '5 + 4 = 9!'
      ),
      createMultipleChoice(
        '3 + 3 = ?',
        ['5', '6', '7', '8'],
        '6',
        'İki tane 3 = 6!'
      ),
      createFillBlank(
        '6 + 2 = ___',
        ['8', 'sekiz'],
        '6 + 2 = 8!'
      ),
      createMultipleChoice(
        '🍎🍎🍎 + 🍎🍎 = ?',
        ['4', '5', '6', '7'],
        '5',
        '3 + 2 = 5 elma!'
      ),
      createFillBlank(
        '2 + 5 = ___',
        ['7', 'yedi'],
        '2 + 5 = 7!'
      ),

      // 10 YAPAN İKİLİLER (11-20)
      createMultipleChoice(
        '10 yapmak için 4 + __ ?',
        ['4', '5', '6', '7'],
        '6',
        '4 + 6 = 10! Ezberle!'
      ),
      createFillBlank(
        '3 + ___ = 10',
        ['7', 'yedi'],
        '3 + 7 = 10! 10 yapan ikili!'
      ),
      createMultipleChoice(
        '10 yapmak için 8\'e ne eklemeliyiz?',
        ['1', '2', '3', '4'],
        '2',
        '8 + 2 = 10!'
      ),
      createFillBlank(
        '5 + 5 = ___',
        ['10', 'on'],
        '5 + 5 = 10! En kolay ikili!'
      ),
      createMultipleChoice(
        '7 + 3 = ?',
        ['8', '9', '10', '11'],
        '10',
        '7 + 3 = 10! 10 yapan ikili!'
      ),
      createFillBlank(
        '1 + ___ = 10',
        ['9', 'dokuz'],
        '1 + 9 = 10!'
      ),
      createMultipleChoice(
        '10 yapmak için 6\'ya ne eklemeliyiz?',
        ['3', '4', '5', '6'],
        '4',
        '6 + 4 = 10!'
      ),
      createFillBlank(
        '9 + 1 = ___',
        ['10', 'on'],
        '9 + 1 = 10!'
      ),
      createMultipleChoice(
        '2 + 8 = ?',
        ['8', '9', '10', '11'],
        '10',
        '2 + 8 = 10! Ezberle!'
      ),
      createFillBlank(
        '___ + 6 = 10',
        ['4', 'dört'],
        '4 + 6 = 10!'
      ),

      // BÜYÜK TOPLAMA (21-30)
      createMultipleChoice(
        '9 + 5 = ?',
        ['13', '14', '15', '16'],
        '14',
        '9 + 5 = 14! (10 + 4)'
      ),
      createFillBlank(
        '8 + 7 = ___',
        ['15', 'on beş'],
        '8 + 7 = 15!'
      ),
      createMultipleChoice(
        '9 + 9 = ?',
        ['16', '17', '18', '19'],
        '18',
        '9 + 9 = 18!'
      ),
      createFillBlank(
        '7 + 6 = ___',
        ['13', 'on üç'],
        '7 + 6 = 13!'
      ),
      createMultipleChoice(
        '8 + 5 = ?',
        ['11', '12', '13', '14'],
        '13',
        '8 + 5 = 13!'
      ),
      createFillBlank(
        '9 + 6 = ___',
        ['15', 'on beş'],
        '9 + 6 = 15!'
      ),
      createMultipleChoice(
        '6 + 7 = ?',
        ['11', '12', '13', '14'],
        '13',
        '6 + 7 = 13!'
      ),
      createFillBlank(
        '8 + 8 = ___',
        ['16', 'on altı'],
        '8 + 8 = 16!'
      ),
      createMultipleChoice(
        '7 + 8 = ?',
        ['14', '15', '16', '17'],
        '15',
        '7 + 8 = 15!'
      ),
      createFillBlank(
        '9 + 4 = ___',
        ['13', 'on üç'],
        '9 + 4 = 13!'
      ),

      // DEĞİŞME ÖZELLİĞİ VE KAVRMA (31-40)
      createMultipleChoice(
        '3 + 8 ile 8 + 3 eşit mi?',
        ['Evet, ikisi de 11', 'Hayır, farklı', 'Evet, ikisi de 10', 'Hayır, biri büyük'],
        'Evet, ikisi de 11',
        'Değişme özelliği! 3+8 = 8+3 = 11'
      ),
      createFillBlank(
        '6 + 6 = ___',
        ['12', 'on iki'],
        '6 + 6 = 12!'
      ),
      createMultipleChoice(
        'Toplama işaretinin adı?',
        ['Eksi', 'Artı', 'Çarpı', 'Bölü'],
        'Artı',
        '+ işareti artı!'
      ),
      createFillBlank(
        '10 + 5 = ___',
        ['15', 'on beş'],
        '10 + 5 = 15!'
      ),
      createMultipleChoice(
        '0 + 7 = ?',
        ['0', '7', '70', '17'],
        '7',
        'Sıfır eklersen sayı değişmez!'
      ),
      createFillBlank(
        '5 + 5 + 5 = ___',
        ['15', 'on beş'],
        '5 + 5 + 5 = 15!'
      ),
      createMultipleChoice(
        '2 + 9 en kolay nasıl hesaplanır?',
        ['2\'den başla', '9\'dan başla', 'İkisini de say', 'Parmakla say'],
        '9\'dan başla',
        '9\'dan başla, 2 ekle! Değişme özelliği!'
      ),
      createFillBlank(
        '12 + 5 = ___',
        ['17', 'on yedi'],
        '12 + 5 = 17!'
      ),
      createMultipleChoice(
        '🔵🔵🔵🔵 + 🔴🔴🔴🔴🔴 = ?',
        ['7', '8', '9', '10'],
        '9',
        '4 + 5 = 9!'
      ),
      createFillBlank(
        '11 + 8 = ___',
        ['19', 'on dokuz'],
        '11 + 8 = 19!'
      ),

      // GÜNLÜK HAYAT PROBLEMLERİ (41-50)
      createMultipleChoice(
        '3 kırmızı ve 5 mavi kalemim var. Toplam kaç kalem?',
        ['6', '7', '8', '9'],
        '8',
        '3 + 5 = 8 kalem!'
      ),
      createFillBlank(
        '6 erkek ve 7 kız öğrenci var. Toplam ___ öğrenci.',
        ['13', 'on üç'],
        '6 + 7 = 13 öğrenci!'
      ),
      createMultipleChoice(
        '5 TL\'m vardı, 4 TL daha aldım. Kaç TL\'m oldu?',
        ['7 TL', '8 TL', '9 TL', '10 TL'],
        '9 TL',
        '5 + 4 = 9 TL!'
      ),
      createFillBlank(
        '8 elma ve 6 armut var. Toplam ___ meyve.',
        ['14', 'on dört'],
        '8 + 6 = 14 meyve!'
      ),
      createMultipleChoice(
        'Kutuda 7 kırmızı, 8 mavi top var. Toplam kaç top?',
        ['13', '14', '15', '16'],
        '15',
        '7 + 8 = 15 top!'
      ),
      createFillBlank(
        'Bahçede 9 gül ve 5 papatya var. Toplam ___ çiçek.',
        ['14', 'on dört'],
        '9 + 5 = 14 çiçek!'
      ),
      createMultipleChoice(
        '4 kedi ve 6 köpek var. Toplam kaç hayvan?',
        ['8', '9', '10', '11'],
        '10',
        '4 + 6 = 10 hayvan!'
      ),
      createFillBlank(
        '3 kalem, 4 silgi ve 2 cetvel aldım. Toplam ___ malzeme.',
        ['9', 'dokuz'],
        '3 + 4 + 2 = 9 malzeme!'
      ),
      createMultipleChoice(
        'Sınıfta 10 masa, 8 sandalye var. Toplam kaç eşya?',
        ['16', '17', '18', '19'],
        '18',
        '10 + 8 = 18 eşya!'
      ),
      createFillBlank(
        '7 bisküvi yedim, 6 tane daha yedim. Toplam ___ bisküvi.',
        ['13', 'on üç'],
        '7 + 6 = 13 bisküvi!'
      )
    ],

    summary: `🎉 TOPLAMA KONUSU ÖZET:

✅ Öğrendiklerimiz:
• Toplama = İki veya daha fazla sayıyı birleştirme
• + işareti = Artı (ekle, birleştir anlamında)
• Toplam = Toplama işleminin sonucu

✅ 10 Yapan İkililer (EZBERLE!):
1+9, 2+8, 3+7, 4+6, 5+5

✅ 10'a Tamamlama Stratejisi:
9+5 → 9+1=10, 10+4=14

✅ Değişme Özelliği:
3+5 = 5+3 = 8 (Yer değişir, sonuç aynı!)

Artık toplama şampiyonusun! 🏆`,
    nextTopicPreview: 'Sonraki konuda çıkarma işlemini öğreneceğiz! Çıkarma, toplamanın kardeşidir!'
  }
};
