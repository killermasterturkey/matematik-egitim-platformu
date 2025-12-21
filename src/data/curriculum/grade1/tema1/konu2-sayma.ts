// 1. SINIF - TEMA 1 - KONU 2: Nesneleri Sayalım ve Gruplayalım
// DETAYLI VE ZENGİN İÇERİK - 35+ SORU
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu2NesneleriSayma: Topic = {
  id: 'nesneleri-sayma',
  title: 'Nesneleri Sayalım ve Gruplayalım',
  description: 'Dağınık ve düzenli nesneleri sayma, gruplama stratejileri',
  emoji: '🎯',
  duration: '50 dk',
  difficulty: 1,
  keywords: ['sayma', 'gruplama', 'düzenli', 'dağınık', 'strateji', 'ikişer', 'beşer', 'onar'],
  objectives: [
    'Düzenli dizilmiş nesneleri sayar',
    'Dağınık nesneleri doğru sayar',
    'Nesneleri gruplar halinde sayar',
    'İkişer ikişer sayar',
    'Beşer beşer sayar',
    'Onar onar sayar',
    'Farklı sayma stratejileri kullanır'
  ],
  content: {
    introduction: `Merhaba sayma kahramanı! 🦸

Bugün nesneleri saymanın farklı yollarını öğreneceğiz!

🌟 SAYMA NEDEN ÖNEMLİ?
• Oyuncaklarını sayarsın
• Paralarını sayarsın
• Kalemlerini sayarsın
• Her gün sayma kullanırsın!

📋 BU KONUDA ÖĞRENECEKLERİN:
✅ Düzenli nesneleri sayma
✅ Dağınık nesneleri sayma
✅ İkişer ikişer sayma (2, 4, 6, 8...)
✅ Beşer beşer sayma (5, 10, 15, 20...)
✅ Onar onar sayma (10, 20, 30...)
✅ Grupları birleştirme

Bazen nesneler düzenli sırada, bazen dağınık olabilir. Ama merak etme, hepsini saymanın püf noktalarını öğreneceksin!

Hazır mısın? Sayma maceramıza başlayalım! 🚀`,

    motivationQuote: 'Her nesne önemli, hiçbirini atlamadan sayalım! Sayma ustası olmak için pratik şart! 🎯',

    funFacts: [
      'Arılar bal yaparken petek sayısını bilir! 🐝',
      'Karıncalar yiyecekleri sayarak taşır ve yol haritası çıkarır! 🐜',
      'Yunuslar sürüdeki arkadaşlarını sayabilir! 🐬',
      'Kargalar 7\'ye kadar sayabilir! 🐦',
      'Fillerin hafızası çok güçlüdür, sayıları hatırlar! 🐘',
      'Şempanzeler sırayla sayabilir! 🐵',
      'Köpekler 5\'e kadar sayabilir! 🐕',
      'Papağanlar sayıları konuşarak söyleyebilir! 🦜'
    ],

    steps: [
      createStep(
        'Düzenli Nesneleri Sayma',
        `Sırayla dizilmiş nesneleri saymak çok kolay!

📋 SAYMA KURALLARI:
1️⃣ En baştaki nesneden başla
2️⃣ Tek tek say
3️⃣ Her nesneyi BİR KEZ say
4️⃣ Son nesneye gelince sayını söyle

🎯 ÖRNEK:
🔴 🔴 🔴 🔴 🔴
 1   2   3   4   5 = 5 top

💡 ÖNEMLİ İPUÇLARI:
• Parmağınla her nesneyi göster
• Sesli say (böylece nerede kaldığını bilirsin)
• Acele etme, dikkatli ol
• Saydığın nesneyi tekrar sayma!

Bu kadar basit! Düzenli nesneler en kolay sayılanlardır.`,
        'Düzenli dizilmiş nesneleri saymak için baştan başla ve tek tek say!',
        {
          visual: `Düzenli Sayma:
┌─────────────────────────────────┐
│  🔴 🔴 🔴 🔴 🔴                 │
│   1   2   3   4   5 = 5 top    │
│                                 │
│  🌟 🌟 🌟 🌟 🌟 🌟 🌟           │
│   1   2   3   4   5   6   7    │
│   = 7 yıldız                   │
│                                 │
│  📚 📚 📚 📚 📚 📚              │
│   1   2   3   4   5   6        │
│   = 6 kitap                    │
└─────────────────────────────────┘`,
          tip: 'Parmağınla her nesneyi göster ve sesli say!',
          examples: [
            createExample(
              '🟢🟢🟢🟢 Kaç yeşil top var?',
              '4',
              'Baştan sayalım: 1, 2, 3, 4. Toplam 4 yeşil top!',
              '🟢🟢🟢🟢 = 4',
              ['Birinci top: 1', 'İkinci top: 2', 'Üçüncü top: 3', 'Dördüncü top: 4', 'Toplam: 4']
            ),
            createExample(
              '🦋🦋🦋🦋🦋🦋🦋🦋 Kaç kelebek var?',
              '8',
              'Tek tek sayalım: 1,2,3,4,5,6,7,8. 8 kelebek!',
              '🦋🦋🦋🦋🦋🦋🦋🦋 = 8',
              ['İlk 5\'i say: 1,2,3,4,5', 'Devam et: 6,7,8', 'Toplam: 8 kelebek']
            ),
            createExample(
              '🍎🍎🍎🍎🍎🍎 Kaç elma var?',
              '6',
              '1, 2, 3, 4, 5, 6. Altı elma!',
              '🍎🍎🍎🍎🍎🍎 = 6',
              ['Tek tek say', '1 den 6 ya kadar', 'Toplam: 6']
            ),
            createExample(
              '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ Kaç yıldız?',
              '10',
              '1,2,3,4,5,6,7,8,9,10. On yıldız!',
              '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ = 10',
              ['5 e kadar say', '10 a kadar devam et', 'Toplam: 10']
            ),
            createExample(
              '🎈🎈🎈 Kaç balon var?',
              '3',
              '1, 2, 3. Üç balon!',
              '🎈🎈🎈 = 3',
              ['Basit: 1, 2, 3']
            )
          ]
        }
      ),

      createStep(
        'Dağınık Nesneleri Sayma',
        `Dağınık nesneler biraz daha dikkat ister. Ama korkmayın, tekniğimiz var!

📌 DAĞINIK SAYMA TEKNİKLERİ:
1️⃣ Parmağınla her nesneyi işaretle
2️⃣ Saydığın nesnenin üstüne (kafanda) çarpı koy
3️⃣ Bir köşeden başla, diğer köşeye doğru ilerle
4️⃣ Aynı nesneyi iki kez saymamaya dikkat et!

📋 TARAMA YÖNTEMİ:
• Soldan sağa tara (satır satır)
• Yukarıdan aşağı ilerle
• Her nesneyi işaretle
• Hiçbir nesneyi atla!

⚠️ DİKKAT:
• Aynı nesneyi iki kez sayma!
• Hiçbir nesneyi atlama!
• Yavaş ve dikkatli ol!`,
        'Dağınık nesneleri sayarken parmağınla işaret et, böylece atlama olmaz!',
        {
          visual: `Dağınık Nesneleri Sayma:
┌─────────────────────────────────┐
│  Dağınık elmalar:               │
│      🍎     🍎                   │
│    🍎    🍎                      │
│         🍎   🍎                  │
│                                 │
│  ✅ Doğru yol:                  │
│  Soldan sağa, üstten alta tara  │
│  Sayım: 1, 2, 3, 4, 5, 6        │
│  = 6 elma!                      │
│                                 │
│  🔢 Tarama sırası:              │
│  (1) (2)                        │
│  (3) (4)                        │
│      (5) (6)                    │
└─────────────────────────────────┘`,
          explanation: 'Gözlerinle bir yol çiz ve o yolu takip et.',
          examples: [
            createExample(
              'Dağınık 6 topu nasıl sayarsın?',
              'Parmakla işaret ederek',
              'Her birini işaret et ve say! Böylece atlama veya tekrar olmaz.',
              '🔵  🔵    🔵\n   🔵  🔵 🔵 = 6',
              ['Soldan başla', 'Her topu göster', 'Say: 1, 2, 3, 4, 5, 6']
            ),
            createExample(
              'Aşağıdaki yıldızları say:\n⭐    ⭐\n  ⭐ ⭐ ⭐',
              '5',
              'Soldan sağa, üstten alta sayarsak: 1,2 (üst satır) + 3,4,5 (alt satır) = 5 yıldız',
              '⭐    ⭐\n  ⭐ ⭐ ⭐',
              ['Üst satır: 2 yıldız', 'Alt satır: 3 yıldız', 'Toplam: 2 + 3 = 5']
            ),
            createExample(
              'Dağınık çiçekleri say:\n🌸  🌸\n🌸     🌸\n  🌸 🌸 🌸',
              '7',
              'Satır satır say: 2 + 2 + 3 = 7 çiçek!',
              '🌸  🌸\n🌸     🌸\n  🌸 🌸 🌸 = 7',
              ['1. satır: 2', '2. satır: 2', '3. satır: 3', 'Toplam: 7']
            ),
            createExample(
              'Bu topları say:\n   🔴\n🔴    🔴\n🔴 🔴',
              '5',
              'Tarama yöntemiyle: 1 + 2 + 2 = 5 top',
              '5 kırmızı top',
              ['Yukarıdan aşağı tara', 'Her satırı say', 'Topla']
            )
          ]
        }
      ),

      createStep(
        'İkişer İkişer Sayma',
        `Çok sayıda nesne varsa ikişer ikişer saymak daha hızlı!

📋 İKİŞER SAYMA:
2, 4, 6, 8, 10, 12, 14, 16, 18, 20...

🎯 NASIL YAPILIR?
1️⃣ Nesneleri ikili gruplara ayır
2️⃣ Her grubu "2" olarak say
3️⃣ 2, 4, 6, 8... diye ilerle

💡 NE ZAMAN KULLANILIR?
• Çift sayıda nesne varsa
• Çorapları sayarken (çift çift!)
• Ayakkabıları sayarken
• Eldivenleri sayarken

🎵 EZBERLEMELİK ŞARKI:
"İki, dört, altı, sekiz,
Saymak hiç de zor değil!
On, on iki, on dört, on altı,
Yirmi oldu, kolay geldi!" 🎶`,
        'İkişer ikişer sayalım: 2, 4, 6, 8! Bu daha hızlı!',
        {
          visual: `İkişer Sayma:
┌─────────────────────────────────┐
│  🟡🟡 | 🟡🟡 | 🟡🟡 | 🟡🟡      │
│    2  +   2  +   2  +   2 = 8  │
│                                 │
│  Sayalım: 2, 4, 6, 8!          │
│                                 │
│  ─────────────────────         │
│                                 │
│  İkişer sayma sırası:          │
│  2 → 4 → 6 → 8 → 10            │
│  12 → 14 → 16 → 18 → 20        │
│                                 │
│  Bu sırayı ezberle! 📝         │
└─────────────────────────────────┘`,
          tip: 'Çoraplarını ikişer ikişer sayabilirsin! Bir çift = 2',
          examples: [
            createExample(
              '🔵🔵 🔵🔵 🔵🔵 🔵🔵 kaç top?',
              '8',
              'İkişer gruplar: 2, 4, 6, 8. Toplam 8 top!',
              '🔵🔵 🔵🔵 🔵🔵 🔵🔵 = 8',
              ['İlk grup: 2', 'İkinci grup: 4', 'Üçüncü grup: 6', 'Dördüncü grup: 8']
            ),
            createExample(
              '10 tane elma ikişer sayılırsa kaç grup olur?',
              '5 grup',
              '2, 4, 6, 8, 10 - Beş kez "2" dedik, yani 5 grup!',
              '🍎🍎 🍎🍎 🍎🍎 🍎🍎 🍎🍎 = 5 grup',
              ['Her grup 2 elma', '10 ÷ 2 = 5 grup']
            ),
            createExample(
              '6 çorap kaç çift?',
              '3 çift',
              'İkişer say: 2, 4, 6. Üç kez saydık = 3 çift!',
              '🧦🧦 🧦🧦 🧦🧦 = 3 çift',
              ['2, 4, 6', '3 çift çorap']
            ),
            createExample(
              '12\'ye kadar ikişer say',
              '2, 4, 6, 8, 10, 12',
              '2 den başla, 12 ye kadar ikişer git!',
              '2 → 4 → 6 → 8 → 10 → 12',
              ['2 den başla', 'Her seferinde 2 ekle', '12 ye kadar']
            ),
            createExample(
              '🥾🥾 🥾🥾 🥾🥾 🥾🥾 🥾🥾 Kaç ayakkabı?',
              '10',
              'İkişer say: 2, 4, 6, 8, 10!',
              '5 çift = 10 ayakkabı',
              ['5 çift ayakkabı', 'Her çift 2 tane', '5 × 2 = 10']
            )
          ]
        }
      ),

      createStep(
        'Beşer Beşer Sayma',
        `Beşer sayma da çok kullanışlı! Özellikle parmakları saymak için:

📋 BEŞER SAYMA:
5, 10, 15, 20, 25, 30, 35, 40, 45, 50...

🖐️ NEDEN BEŞER?
• Her el 5 parmak!
• Para sayarken çok kullanılır (5 kuruş, 5 TL)
• Büyük sayılarda daha hızlı!

💡 NASIL YAPILIR?
1️⃣ Nesneleri 5'li gruplara ayır
2️⃣ Her grubu "5" olarak say
3️⃣ 5, 10, 15, 20... diye ilerle

🎵 EZBERLEMELİK:
"Beş, on, on beş, yirmi,
Beşer saymak ne güzel!
Yirmi beş, otuz, otuz beş,
Sayma ustası olduk biz!" 🎶`,
        'Beş, on, on beş, yirmi... Ellerimizi sayarak beşer sayabiliriz!',
        {
          visual: `Beşer Sayma:
┌─────────────────────────────────┐
│  🖐️ = 5 parmak                  │
│  🖐️🖐️ = 10 parmak               │
│  🖐️🖐️🖐️ = 15 parmak             │
│  🖐️🖐️🖐️🖐️ = 20 parmak           │
│                                 │
│  Her el bir 5!                 │
│                                 │
│  ─────────────────────         │
│                                 │
│  Beşer sayma sırası:           │
│  5 → 10 → 15 → 20 → 25         │
│  30 → 35 → 40 → 45 → 50        │
│                                 │
│  Bu sırayı ezberle! 📝         │
└─────────────────────────────────┘`,
          explanation: 'Beşer sayma, para ve puan sayarken çok işe yarar!',
          examples: [
            createExample(
              '15\'e kadar beşer say',
              '5, 10, 15',
              'Beşer beşer: 5, 10, 15. Üç adımda 15\'e ulaştık!',
              '5 → 10 → 15',
              ['İlk adım: 5', 'İkinci adım: 10', 'Üçüncü adım: 15']
            ),
            createExample(
              '4 elin toplamı kaç parmak?',
              '20',
              '4 el × 5 parmak = 20 parmak! Beşer beşer: 5, 10, 15, 20!',
              '🖐️🖐️🖐️🖐️ = 20',
              ['1. el: 5', '2. el: 10', '3. el: 15', '4. el: 20']
            ),
            createExample(
              '30\'a kadar beşer say',
              '5, 10, 15, 20, 25, 30',
              'Beşer beşer: 5, 10, 15, 20, 25, 30!',
              '5 → 10 → 15 → 20 → 25 → 30',
              ['6 adımda 30 a ulaştık']
            ),
            createExample(
              '3 el kaç parmak?',
              '15',
              '3 × 5 = 15 parmak! Beşer say: 5, 10, 15!',
              '🖐️🖐️🖐️ = 15',
              ['5, 10, 15']
            ),
            createExample(
              '50\'ye kadar beşer say',
              '5, 10, 15, 20, 25, 30, 35, 40, 45, 50',
              '10 adımda 50 ye ulaşırız!',
              '5 → 10 → ... → 50',
              ['Her seferinde 5 ekle', '50 ye kadar']
            )
          ]
        }
      ),

      createStep(
        'Onar Onar Sayma',
        `En hızlı sayma yöntemi: Onar onar sayma!

📋 ONAR SAYMA:
10, 20, 30, 40, 50, 60, 70, 80, 90, 100...

🎯 NEDEN ONAR?
• En büyük atlama ile sayma
• 100\'e kadar çok hızlı ulaşırsın
• Para sayarken kullanılır (10 TL, 10 TL...)

💡 NE ZAMAN KULLANILIR?
• Çok sayıda nesne varsa
• 10\'un katları sayarken
• Büyük sayılarda
• Para sayarken

🔢 ONAR SAYMA TABLOSU:
10 - On
20 - Yirmi
30 - Otuz
40 - Kırk
50 - Elli
60 - Altmış
70 - Yetmiş
80 - Seksen
90 - Doksan
100 - Yüz`,
        'Onar onar sayma: 10, 20, 30, 40, 50! En hızlı yöntem!',
        {
          visual: `Onar Sayma:
┌─────────────────────────────────┐
│  🖐️🖐️ = 10                      │
│  🖐️🖐️🖐️🖐️ = 20                  │
│  🖐️🖐️🖐️🖐️🖐️🖐️ = 30              │
│                                 │
│  Onar sayma sırası:            │
│  10 → 20 → 30 → 40 → 50        │
│  60 → 70 → 80 → 90 → 100       │
│                                 │
│  On kez "10" dersen 100 olur!  │
└─────────────────────────────────┘`,
          tip: 'Para sayarken onar sayma kullan!',
          examples: [
            createExample(
              '50\'ye kadar onar say',
              '10, 20, 30, 40, 50',
              'Onar onar: 10, 20, 30, 40, 50!',
              '10 → 20 → 30 → 40 → 50',
              ['5 adımda 50 ye ulaştık']
            ),
            createExample(
              '100\'e kadar onar say',
              '10, 20, 30, 40, 50, 60, 70, 80, 90, 100',
              '10 adımda 100 e ulaşırız!',
              '10 → 20 → ... → 100',
              ['Her seferinde 10 ekle', '10 adımda 100']
            ),
            createExample(
              '5 tane 10 TL kaç TL?',
              '50 TL',
              'Onar say: 10, 20, 30, 40, 50 TL!',
              '💰💰💰💰💰 = 50 TL',
              ['5 × 10 = 50 TL']
            ),
            createExample(
              '70\'e kadar onar say',
              '10, 20, 30, 40, 50, 60, 70',
              '7 adımda 70 e ulaşırız!',
              '10 → 20 → 30 → 40 → 50 → 60 → 70',
              ['Her seferinde 10 ekle']
            )
          ]
        }
      ),

      createStep(
        'Grupları Birleştirme',
        `Farklı gruplardaki nesneleri toplamak için grupları birleştiririz:

📋 BİRLEŞTİRME ADIMLARI:
1️⃣ Her grubu ayrı ayrı say
2️⃣ Grupların sayılarını topla
3️⃣ Sonucu bul!

🎯 ÖRNEK:
Kırmızı toplar: 🔴🔴🔴 = 3
Mavi toplar: 🔵🔵 = 2
─────────────────
Toplam: 3 + 2 = 5 top

💡 BU YÖNTEM NE ZAMAN İŞE YARAR?
• Farklı renkte nesneler varsa
• Farklı türde nesneler varsa
• Büyük sayılarda

Bu yöntem büyük sayılarda çok işe yarar!`,
        'Her grubu ayrı say, sonra topla!',
        {
          visual: `Grupları Birleştirme:
┌─────────────────────────────────┐
│  Grup 1: 🍎🍎🍎 = 3             │
│  Grup 2: 🍎🍎 = 2               │
│  ─────────────────              │
│  Toplam: 3 + 2 = 5 elma        │
│                                 │
│  Grup A: 🔵🔵🔵🔵 = 4           │
│  Grup B: 🔴🔴🔴 = 3             │
│  Grup C: 🟢🟢 = 2               │
│  ─────────────────              │
│  Toplam: 4 + 3 + 2 = 9 top     │
└─────────────────────────────────┘`,
          tip: 'Renklere göre grupla, sonra topla!',
          examples: [
            createExample(
              '4 kırmızı ve 3 mavi top. Toplam kaç top?',
              '7',
              '4 + 3 = 7 top! Renkleri ayrı say, sonra topla.',
              '🔴🔴🔴🔴 + 🔵🔵🔵 = 7',
              ['Kırmızı topları say: 4', 'Mavi topları say: 3', 'Topla: 4 + 3 = 7']
            ),
            createExample(
              '5 kalem, 3 silgi ve 2 defter. Toplam kaç eşya?',
              '10',
              '5 + 3 + 2 = 10 eşya!',
              '✏️✏️✏️✏️✏️ + 🧽🧽🧽 + 📓📓 = 10',
              ['Kalemleri say: 5', 'Silgileri say: 3', 'Defterleri say: 2', 'Topla: 5 + 3 + 2 = 10']
            ),
            createExample(
              '6 kız ve 8 erkek. Toplam kaç çocuk?',
              '14',
              '6 + 8 = 14 çocuk!',
              '👧👧👧👧👧👧 + 👦👦👦👦👦👦👦👦 = 14',
              ['Kızlar: 6', 'Erkekler: 8', 'Toplam: 14']
            ),
            createExample(
              '3 elma, 4 armut, 2 muz. Toplam kaç meyve?',
              '9',
              '3 + 4 + 2 = 9 meyve!',
              '🍎🍎🍎 + 🍐🍐🍐🍐 + 🍌🍌 = 9',
              ['3 + 4 = 7', '7 + 2 = 9']
            ),
            createExample(
              '7 kırmızı, 5 mavi, 3 yeşil balon. Toplam?',
              '15',
              '7 + 5 + 3 = 15 balon!',
              '🔴×7 + 🔵×5 + 🟢×3 = 15',
              ['7 + 5 = 12', '12 + 3 = 15']
            )
          ]
        }
      ),

      createStep(
        'Sayma Stratejileri',
        `Farklı durumlar için farklı stratejiler kullanabiliriz:

📋 STRATEJİ REHBERİ:

| Durum | Strateji |
|-------|----------|
| Az nesne (1-10) | Tek tek say |
| Çok nesne | Grupla ve say |
| Düzenli dizili | Baştan sona say |
| Dağınık | İşaretle ve say |
| Çift sayı | İkişer say |
| 5'in katları | Beşer say |
| 10'un katları | Onar say |

💡 EN İYİ STRATEJİ:
• Sana en kolay gelen stratejiyi kullan
• Duruma göre strateji değiştir
• Pratik yap!`,
        'En iyi strateji duruma göre değişir. Bazen tek tek, bazen grupla!',
        {
          visual: `Duruma Göre Strateji:
┌─────────────────────────────────┐
│  📦 3 elma → Tek tek say        │
│     (1, 2, 3)                   │
│                                 │
│  📦 10 top → Beşer say          │
│     (5, 10)                     │
│                                 │
│  📦 8 kalem → İkişer say        │
│     (2, 4, 6, 8)                │
│                                 │
│  📦 30 para → Onar say          │
│     (10, 20, 30)                │
│                                 │
│  📦 Dağınık → İşaretle ve say   │
└─────────────────────────────────┘`,
          tip: 'Hangisi senin için daha kolay? Onu kullan!',
          examples: [
            createExample(
              '20 nesne için en iyi strateji hangisi?',
              'Beşer veya onar sayma',
              '20 nesne için beşer (5,10,15,20) veya onar (10,20) saymak en hızlısı!',
              '5 → 10 → 15 → 20 veya 10 → 20',
              ['Beşer: 4 adım', 'Onar: 2 adım']
            ),
            createExample(
              '6 nesne için en iyi strateji?',
              'Tek tek veya ikişer',
              '6 için tek tek (1,2,3,4,5,6) veya ikişer (2,4,6)',
              '1-2-3-4-5-6 veya 2-4-6',
              ['İkisi de kolay']
            ),
            createExample(
              '100 nesne için en iyi strateji?',
              'Onar sayma',
              '100 için onar saymak en hızlısı: 10, 20, 30... 100',
              '10 → 20 → ... → 100',
              ['10 adımda 100 e ulaşırsın']
            )
          ]
        }
      ),

      createStep(
        'Pratik Zamanı! 🎯',
        `Harika iş çıkardın! Şimdi öğrendiklerini uygula:

🎮 GÜNLÜK SAYMA OYUNLARI:
• Odandaki oyuncakları say
• Mutfaktaki bardakları grupla ve say
• Ayakkabılarını ikişer say (çift çift!)
• Ailenin parmaklarını beşer say
• Merdiven basamaklarını onar say

📝 HER GÜN PRATİK YAP:
• 5 dakika sayma pratiği
• İkişer, beşer, onar sayma tekrarla
• Günlük hayatta sayma bul
• Ailene sayma soruları sor

🏆 SAYMA USTASI OLMAK İÇİN:
1. İkişer sayma ezberle: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
2. Beşer sayma ezberle: 5, 10, 15, 20, 25, 30
3. Onar sayma ezberle: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

Her gün biraz pratik yaparsan sayma ustası olursun! 🏆`,
        'Şimdi farklı şekillerde dizilmiş nesneleri sayalım!',
        {
          visual: `Sayma Özeti:
┌─────────────────────────────────┐
│  TEK TEK: 1, 2, 3, 4, 5...      │
│  İKİŞER:  2, 4, 6, 8, 10...     │
│  BEŞER:   5, 10, 15, 20, 25...  │
│  ONAR:    10, 20, 30, 40, 50... │
│                                 │
│  💡 Duruma göre seç!            │
│  • Az nesne → Tek tek           │
│  • Çift sayı → İkişer           │
│  • Çok nesne → Beşer/Onar       │
│                                 │
│  Her gün pratik yap! 🏆         │
└─────────────────────────────────┘`,
          examples: [
            createExample(
              '3 satırda 3\'er yıldız. Toplam kaç yıldız?',
              '9',
              '3 + 3 + 3 = 9 yıldız! Üçer üçer de sayabilirsin: 3, 6, 9!',
              '⭐⭐⭐\n⭐⭐⭐\n⭐⭐⭐',
              ['1. satır: 3', '2. satır: 3 (toplam 6)', '3. satır: 3 (toplam 9)']
            ),
            createExample(
              '20\'ye kadar ikişer say',
              '2, 4, 6, 8, 10, 12, 14, 16, 18, 20',
              'İkişer sayma: 2 den 20 ye!',
              '2→4→6→8→10→12→14→16→18→20',
              ['10 adımda 20 ye ulaştık']
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // TEK TEK SAYMA (1-8)
      createMultipleChoice(
        '🔴🔴🔴 🔴🔴 Kaç kırmızı top var?',
        ['4', '5', '6', '7'],
        '5',
        'İki grubu topla: 3 + 2 = 5 top!'
      ),
      createFillBlank(
        '🟢🟢🟢🟢🟢🟢 = ___ yeşil top',
        ['6', 'altı'],
        'Tek tek say: 1, 2, 3, 4, 5, 6!'
      ),
      createMultipleChoice(
        '⭐⭐⭐⭐ ⭐⭐⭐ Kaç yıldız?',
        ['5', '6', '7', '8'],
        '7',
        'İki grubu topla: 4 + 3 = 7 yıldız!'
      ),
      createFillBlank(
        '🍎🍎🍎🍎🍎🍎🍎🍎 = ___',
        ['8', 'sekiz'],
        'Tek tek say: 8 elma!'
      ),
      createMultipleChoice(
        '🦋🦋🦋🦋🦋🦋🦋🦋🦋 Kaç kelebek?',
        ['7', '8', '9', '10'],
        '9',
        'Tek tek say: 9 kelebek!'
      ),
      createFillBlank(
        '🎈🎈🎈🎈🎈 = ___',
        ['5', 'beş'],
        '5 balon!'
      ),
      createMultipleChoice(
        '📚📚📚📚📚📚📚 Kaç kitap?',
        ['5', '6', '7', '8'],
        '7',
        '7 kitap!'
      ),
      createFillBlank(
        '🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸 = ___',
        ['10', 'on'],
        '10 çiçek!'
      ),

      // İKİŞER SAYMA (9-16)
      createMultipleChoice(
        '🔵🔵 🔵🔵 🔵🔵 🔵🔵 = ?',
        ['6', '7', '8', '9'],
        '8',
        'İkişer say: 2, 4, 6, 8!'
      ),
      createFillBlank(
        'İkişer say: 2, 4, 6, 8, ___',
        ['10', 'on'],
        '2, 4, 6, 8, 10!'
      ),
      createMultipleChoice(
        '6 çorap kaç çift?',
        ['2', '3', '4', '5'],
        '3',
        '6 ÷ 2 = 3 çift!'
      ),
      createFillBlank(
        '🧦🧦 🧦🧦 🧦🧦 🧦🧦 = ___ çorap',
        ['8', 'sekiz'],
        'İkişer say: 2, 4, 6, 8!'
      ),
      createMultipleChoice(
        '12\'ye kadar ikişer sayarsak kaç adım?',
        ['4', '5', '6', '7'],
        '6',
        '2, 4, 6, 8, 10, 12 = 6 adım!'
      ),
      createFillBlank(
        'İkişer say: 2, 4, ___, 8, 10',
        ['6', 'altı'],
        '2, 4, 6, 8, 10!'
      ),
      createMultipleChoice(
        '🥾🥾 🥾🥾 🥾🥾 🥾🥾 🥾🥾 Kaç ayakkabı?',
        ['8', '9', '10', '11'],
        '10',
        'İkişer say: 2, 4, 6, 8, 10!'
      ),
      createFillBlank(
        '14 sonra ikişer sayarsak ___',
        ['16', 'on altı'],
        '14 + 2 = 16!'
      ),

      // BEŞER SAYMA (17-24)
      createMultipleChoice(
        '🖐️🖐️🖐️🖐️ Kaç parmak?',
        ['15', '20', '25', '30'],
        '20',
        '4 el × 5 = 20 parmak!'
      ),
      createFillBlank(
        'Beşer say: 5, 10, 15, ___',
        ['20', 'yirmi'],
        '5, 10, 15, 20!'
      ),
      createMultipleChoice(
        '30\'a kadar beşer sayarsak kaç adım?',
        ['4', '5', '6', '7'],
        '6',
        '5, 10, 15, 20, 25, 30 = 6 adım!'
      ),
      createFillBlank(
        '🖐️🖐️🖐️ = ___ parmak',
        ['15', 'on beş'],
        '3 × 5 = 15 parmak!'
      ),
      createMultipleChoice(
        'Beşer sayma: 5, 10, ?, 20, 25',
        ['12', '14', '15', '16'],
        '15',
        '5, 10, 15, 20, 25!'
      ),
      createFillBlank(
        '25 sonra beşer sayarsak ___',
        ['30', 'otuz'],
        '25 + 5 = 30!'
      ),
      createMultipleChoice(
        '6 elin toplam parmak sayısı?',
        ['25', '30', '35', '40'],
        '30',
        '6 × 5 = 30 parmak!'
      ),
      createFillBlank(
        'Beşer say: 5, 10, 15, 20, 25, ___',
        ['30', 'otuz'],
        '5, 10, 15, 20, 25, 30!'
      ),

      // ONAR SAYMA (25-30)
      createMultipleChoice(
        '50\'ye kadar onar sayarsak kaç adım?',
        ['3', '4', '5', '6'],
        '5',
        '10, 20, 30, 40, 50 = 5 adım!'
      ),
      createFillBlank(
        'Onar say: 10, 20, 30, ___',
        ['40', 'kırk'],
        '10, 20, 30, 40!'
      ),
      createMultipleChoice(
        '7 tane 10 TL kaç TL?',
        ['50 TL', '60 TL', '70 TL', '80 TL'],
        '70 TL',
        '7 × 10 = 70 TL!'
      ),
      createFillBlank(
        'Onar say: 10, 20, 30, 40, 50, ___',
        ['60', 'altmış'],
        '10, 20, 30, 40, 50, 60!'
      ),
      createMultipleChoice(
        '100\'e kadar onar sayarsak kaç adım?',
        ['8', '9', '10', '11'],
        '10',
        '10, 20, 30... 100 = 10 adım!'
      ),
      createFillBlank(
        '80 sonra onar sayarsak ___',
        ['90', 'doksan'],
        '80 + 10 = 90!'
      ),

      // GRUPLAMA VE TOPLAMA (31-40)
      createMultipleChoice(
        '5 elma ve 3 armut = ?',
        ['6', '7', '8', '9'],
        '8',
        '5 + 3 = 8 meyve!'
      ),
      createFillBlank(
        '4 kırmızı + 5 mavi = ___ top',
        ['9', 'dokuz'],
        '4 + 5 = 9 top!'
      ),
      createMultipleChoice(
        '🟡🟡🟡🟡🟡 🟡🟡🟡🟡🟡 Kaç sarı top?',
        ['8', '9', '10', '11'],
        '10',
        'İki grup beşer: 5 + 5 = 10 top!'
      ),
      createFillBlank(
        '6 kız + 8 erkek = ___ çocuk',
        ['14', 'on dört'],
        '6 + 8 = 14 çocuk!'
      ),
      createMultipleChoice(
        '7 kuş ve 2 kuş daha geldi. Toplam kaç kuş?',
        ['7', '8', '9', '10'],
        '9',
        '7 + 2 = 9 kuş!'
      ),
      createFillBlank(
        '8 kırmızı, 4 mavi, 3 yeşil = ___ top',
        ['15', 'on beş'],
        '8 + 4 + 3 = 15 top!'
      ),
      createMultipleChoice(
        '3 satırda 4\'er elma. Toplam kaç elma?',
        ['10', '11', '12', '13'],
        '12',
        '3 × 4 = 12 elma veya 4 + 4 + 4 = 12!'
      ),
      createFillBlank(
        '🌸🌸🌸 🌸🌸🌸 🌸🌸🌸 🌸 = ___',
        ['10', 'on'],
        '3 + 3 + 3 + 1 = 10 çiçek!'
      ),
      createMultipleChoice(
        '15 nesneyi en hızlı nasıl sayarsın?',
        ['Tek tek', 'İkişer', 'Beşer', 'Hiç saymam'],
        'Beşer',
        '15 için beşer saymak en hızlısı: 5, 10, 15!'
      ),
      createFillBlank(
        '4 + 4 + 4 = ___',
        ['12', 'on iki'],
        'Üç tane 4: 4 + 4 + 4 = 12!'
      ),

      // DAĞINIK VE STRATEJİ (41-45)
      createMultipleChoice(
        'Dağınık nesneleri sayarken ne yapmalıyız?',
        ['Hızlı saymalı', 'İşaretleyerek saymalı', 'Tahmin etmeli', 'Saymamalı'],
        'İşaretleyerek saymalı',
        'İşaretleyerek saymak, nesneyi atlamamamızı sağlar!'
      ),
      createMultipleChoice(
        'Gruplar halinde saymak neden iyidir?',
        ['Daha yavaş', 'Daha hızlı', 'Daha zor', 'Gereksiz'],
        'Daha hızlı',
        'Gruplar halinde saymak daha hızlıdır!'
      ),
      createMultipleChoice(
        'Aşağıdakilerden hangisi doğru sayma stratejisi değildir?',
        ['Parmakla işaret etme', 'Grupla sayma', 'Rastgele atlama', 'İkişer sayma'],
        'Rastgele atlama',
        'Rastgele atlamak yanlış sayıma neden olur!'
      ),
      createMultipleChoice(
        '100 nesne için en iyi strateji?',
        ['Tek tek', 'İkişer', 'Beşer', 'Onar'],
        'Onar',
        '100 için onar saymak en hızlısı!'
      ),
      createMultipleChoice(
        'Çorapları sayarken hangi yöntem kullanılır?',
        ['Tek tek', 'İkişer (çift çift)', 'Beşer', 'Onar'],
        'İkişer (çift çift)',
        'Çoraplar çift çift sayılır: 2, 4, 6, 8...'
      )
    ],

    summary: `🎉 SAYMA KONUSU ÖZET:

✅ Öğrendiklerimiz:
• Düzenli ve dağınık nesneleri saydık
• İkişer ikişer saymayı öğrendik: 2, 4, 6, 8, 10...
• Beşer beşer saymayı öğrendik: 5, 10, 15, 20...
• Onar onar saymayı öğrendik: 10, 20, 30, 40...
• Grupları birleştirmeyi öğrendik

✅ Strateji Rehberi:
• Az nesne → Tek tek say
• Çift sayıda → İkişer say
• Çok nesne → Beşer veya onar say
• Dağınık → İşaretle ve say

Artık sayma ustasısın! 🏆`,
    nextTopicPreview: 'Sonraki konuda sıra sayılarını (birinci, ikinci, üçüncü...) öğreneceğiz!'
  }
};
