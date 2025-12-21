// 1. SINIF - TEMA 3 - KONU 1: Paraları Tanıyalım
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1ParalariTaniyalim: Topic = {
  id: 'paralari-taniyalim',
  title: 'Paraları Tanıyalım',
  description: 'Türk Lirası kağıt ve madeni paraları, değerleri ve alışveriş',
  emoji: '💰',
  duration: '50 dk',
  difficulty: 1,
  keywords: ['TL', 'para', 'banknot', 'madeni', 'alışveriş', 'tasarruf', 'kuruş'],
  objectives: [
    'Türk Lirası birimlerini tanır',
    'Madeni ve kağıt paraları ayırt eder',
    'Para değerlerini karşılaştırır',
    'Basit alışveriş hesapları yapar',
    'Tasarruf kavramını öğrenir'
  ],
  content: {
    introduction: `Merhaba küçük tasarrufçu! 💰

Para ile alışveriş yaparız! Market, oyuncakçı, kitapçı... Her yerde para kullanırız!

Bugün Türk Lirası'nı tanıyacak, paraların değerlerini öğrenecek ve alışveriş yapmayı öğreneceğiz! Ayrıca tasarruf etmenin ne kadar önemli olduğunu keşfedeceğiz!

Hazır mısın? Kumbaranı al ve başlayalım! 🐷`,

    motivationQuote: 'Parayı tanıyan, tasarrufu öğrenir! Bugünün küçük kumbarası, yarının büyük hayalleri! 💰',

    funFacts: [
      'Atatürk tüm Türk paralarının üzerindedir! 🇹🇷',
      'İlk madeni para 2700 yıl önce Lidyalılar tarafından Anadolu\'da yapıldı! 🪙',
      'Dünyada 180\'den fazla farklı para birimi var! 🌍',
      'Kağıt para aslında pamuktan yapılır, bu yüzden yıkansa bile dayanır! 📄',
      'En büyük kumbara dünya rekoruyla 2.65 metre yüksekliğindedir! 🐷',
      'Türkiye\'nin ilk parası 1923\'te basıldı! 🏛️',
      'Dünyanın en eski para müzesi İstanbul\'dadır! 🏛️',
      'Paranın üzerindeki Atatürk resmi her zaman sol tarafa bakar! 👁️'
    ],

    steps: [
      createStep(
        'Para Nedir?',
        `Para, alışveriş yapmak için kullanılan değişim aracıdır! 💵

📋 PARA NE İŞE YARAR?
• Market alışverişi (yiyecek, içecek)
• Oyuncak almak
• Kitap ve kırtasiye almak
• Otobüse binmek
• Sinema bileti almak
• Hediye almak
• İhtiyaçlarımızı karşılamak

💡 PARA OLMADAN NE OLURDU?
Eskiden insanlar TAKAS yapardı!
🍎 3 elma = 🍞 1 ekmek
🥚 10 yumurta = 🥛 1 litre süt

Ama takas zor! Herkesin istediği farklı.
Para hayatı ÇOK kolaylaştırır!

🇹🇷 TÜRKİYE'DE: Türk Lirası (TL) kullanılır`,
        'Para ile istediğimiz şeyleri satın alabiliriz. Para bir değişim aracıdır.',
        {
          visual: `Para ile Alışveriş:
💵 Para → 🛒 Market → 🍎🥛🍞

Takas vs Para:
❌ Takas: 🍎 🍞 (Zor!)
✅ Para:  💵 → Her şey!

Türk Lirası (TL):
🇹🇷 Türkiye'nin parası = TL`,
          examples: [
            createExample(
              'Para ne işe yarar?',
              'Alışveriş yapmaya',
              'Para ile ihtiyaçlarımızı satın alırız!',
              '💵 → 🛒 = Alışveriş',
              ['Para bir araçtır', 'Alışverişte kullanılır', 'İhtiyaçlarımızı alırız', 'Cevap: Alışveriş']
            ),
            createExample(
              'Türk parasının adı nedir?',
              'Türk Lirası (TL)',
              'Türkiye\'de Türk Lirası kullanılır, kısaca TL denir!',
              '🇹🇷 = Türk Lirası = TL'
            ),
            createExample(
              'Takas ne demek?',
              'Eşya değiş tokuşu',
              'Para yokken insanlar eşyalarını değişirdi!',
              '🍎 ↔ 🍞 = Takas'
            ),
            createExample(
              'Para neden icat edildi?',
              'Alışverişi kolaylaştırmak için',
              'Takas zor, para kolay!',
              'Takas (zor) → Para (kolay)'
            ),
            createExample(
              'Başka ülkelerde de TL kullanılır mı?',
              'Hayır, her ülkenin parası farklı',
              'ABD\'de Dolar, Avrupa\'da Euro kullanılır!',
              '🇹🇷 TL | 🇺🇸 Dolar | 🇪🇺 Euro'
            ),
            createExample(
              'Para olmadan alışveriş yapılabilir mi?',
              'Yapılabilir ama çok zor',
              'Kartla veya takas ile yapılabilir ama para en kolay yol!',
              '💵 = En kolay alışveriş'
            )
          ]
        }
      ),

      createStep(
        'Madeni Paralar',
        `Madeni paralar metalden yapılır ve cebimizde taşırız! 🪙

🪙 MADENİ PARALARIN TÜRLERI:
• 1 Kuruş (çok küçük değer)
• 5 Kuruş (biraz değerli)
• 10 Kuruş (orta değer)
• 25 Kuruş (çeyrek lira)
• 50 Kuruş (yarım lira)
• 1 TL = 100 Kuruş (en değerli madeni)

💡 ÖNEMLİ BİLGİ:
100 Kuruş = 1 TL (Yüz kuruş bir lira eder!)

📋 MADENİ PARALARIN ÖZELLİKLERİ:
• Metalden yapılır (dayanıklı)
• Yuvarlak şekillidir
• Üzerinde rakamlar var
• Küçük alışverişlerde kullanılır
• Kumbarada biriktirilir

🛒 NE ALINABİLİR?
Şeker, sakız, küçük oyuncaklar, kalem...`,
        'Madeni paralar metalden yapılır. 100 kuruş = 1 TL!',
        {
          visual: `Madeni Paralar (Kuruşlar):
🪙 1 Kuruş   = En küçük
🪙 5 Kuruş   = 5 × 1 kuruş
🪙 10 Kuruş  = 10 × 1 kuruş
🪙 25 Kuruş  = Çeyrek (1/4 lira)
🪙 50 Kuruş  = Yarım (1/2 lira)
🪙 1 TL      = 100 Kuruş 👑

100 Kuruş = 1 TL!`,
          tip: 'Madeni paraları kumbarada biriktir! Zamanla büyük para olur!',
          examples: [
            createExample(
              'En değerli madeni para hangisi?',
              '1 TL',
              '1 TL = 100 kuruş, en değerli madeni paradır!',
              '🪙 1 TL > 50 kuruş > 25 kuruş...',
              ['1 TL = 100 kuruş', '50 kuruş = yarım lira', '1 TL en büyük', 'Cevap: 1 TL']
            ),
            createExample(
              '50 kuruş + 50 kuruş = ?',
              '1 TL (100 kuruş)',
              '50 + 50 = 100 kuruş = 1 TL!',
              '🪙 50 + 🪙 50 = 🪙 1 TL'
            ),
            createExample(
              '25 kuruş + 25 kuruş + 25 kuruş + 25 kuruş = ?',
              '1 TL',
              '25 × 4 = 100 kuruş = 1 TL!',
              '🪙🪙🪙🪙 (25\'lik) = 1 TL'
            ),
            createExample(
              'Kaç tane 10 kuruş 1 TL eder?',
              '10 tane',
              '10 × 10 = 100 kuruş = 1 TL!',
              '🪙×10 (10\'luk) = 1 TL'
            ),
            createExample(
              'Madeni paralar neden metalden yapılır?',
              'Dayanıklı olsun diye',
              'Metal sağlam, yıpranmaz ve uzun süre dayanır!',
              '🪙 = Metal = Dayanıklı'
            ),
            createExample(
              '1 TL kaç 50 kuruş eder?',
              '2 tane 50 kuruş',
              '50 + 50 = 100 kuruş = 1 TL!',
              '1 TL = 🪙🪙 (50\'lik)'
            )
          ]
        }
      ),

      createStep(
        'Kağıt Paralar (Banknotlar)',
        `Kağıt paralar daha büyük değerler için kullanılır! 💵

💵 KAĞIT PARALAR (BANKNOTLAR):
• 5 TL   → MOR renk 🟣
• 10 TL  → KIRMIZI renk 🔴
• 20 TL  → YEŞİL renk 🟢
• 50 TL  → TURUNCU renk 🟠
• 100 TL → MAVİ renk 🔵
• 200 TL → KOYU YEŞİL renk 🌲

📋 BANKNOT ÖZELLİKLERİ:
• Hepsinin üzerinde ATATÜRK var 🇹🇷
• Her birinin FARKLI RENGİ var
• Pamuktan yapılır (dayanıklı)
• Büyük alışverişlerde kullanılır
• Dikdörtgen şekillidir

🛒 NE ALINABİLİR?
Kitaplar, oyuncaklar, kıyafetler, yemek...`,
        'Kağıt paralara banknot denir. Her birinin farklı rengi var!',
        {
          visual: `Kağıt Paralar (Banknotlar):
💵 5 TL   = MOR     🟣
💵 10 TL  = KIRMIZI 🔴
💵 20 TL  = YEŞİL   🟢
💵 50 TL  = TURUNCU 🟠
💵 100 TL = MAVİ    🔵
💵 200 TL = K.YEŞİL 🌲 👑

En Değerli: 200 TL
Tümünde: ATATÜRK 🇹🇷`,
          explanation: 'Tüm Türk paralarının üzerinde Atatürk portresi bulunur.',
          examples: [
            createExample(
              'En büyük değerli banknot hangisi?',
              '200 TL',
              '200 en büyük sayı, en değerli banknot!',
              '💵 200 TL 👑',
              ['5 < 10 < 20 < 50 < 100 < 200', '200 en büyük', 'Cevap: 200 TL']
            ),
            createExample(
              '10 TL hangi renktir?',
              'Kırmızı',
              '10 TL\'lik banknot kırmızı renklidir!',
              '💵 10 TL = 🔴 Kırmızı'
            ),
            createExample(
              '20 TL hangi renktir?',
              'Yeşil',
              '20 TL\'lik banknot yeşil renklidir!',
              '💵 20 TL = 🟢 Yeşil'
            ),
            createExample(
              'Tüm banknotlarda kim var?',
              'Atatürk',
              'Tüm Türk paralarında Atatürk portresi bulunur!',
              '💵 = 🇹🇷 Atatürk'
            ),
            createExample(
              'En küçük değerli banknot hangisi?',
              '5 TL',
              '5 TL en küçük değerli kağıt paradır!',
              '💵 5 TL = En küçük banknot'
            ),
            createExample(
              'Banknotlar neden farklı renklerde?',
              'Kolay ayırt etmek için',
              'Renkler sayesinde hangi para olduğunu hemen anlarız!',
              'Renk = Kolay tanıma!'
            )
          ]
        }
      ),

      createStep(
        'Paraları Karşılaştırma',
        `Büyük sayılı para daha değerlidir! 📊

📏 DEĞER SIRASI (Küçükten Büyüğe):
1 kuruş < 5 kuruş < 10 kuruş < 25 kuruş < 50 kuruş < 1 TL < 5 TL < 10 TL < 20 TL < 50 TL < 100 TL < 200 TL

🔍 NASIL KARŞILAŞTIRIRIZ?
1. Sayılara bak
2. Büyük sayı = Daha DEĞERLİ
3. Küçük sayı = Daha AZ değerli

📋 KARŞILAŞTIRMA ÖRNEKLERİ:
• 50 TL > 20 TL (50 daha büyük)
• 10 TL < 100 TL (10 daha küçük)
• 5 TL = 5 TL (eşit değer)
• 100 TL > 50 TL + 20 TL (100 > 70)

🎯 KURAL: Sayı büyükse, değer büyük!`,
        '100 TL, 50 TL\'den daha değerlidir! Sayı büyükse değer büyük!',
        {
          visual: `Para Değer Sıralaması:
MADENİ      KAĞIT
   ↓          ↓
1 kuruş    5 TL
   ↓          ↓
5 kuruş    10 TL
   ↓          ↓
10 kuruş   20 TL
   ↓          ↓
25 kuruş   50 TL
   ↓          ↓
50 kuruş   100 TL
   ↓          ↓
1 TL       200 TL 👑`,
          examples: [
            createExample(
              '20 TL mi 50 TL mi daha değerli?',
              '50 TL',
              '50 > 20 olduğu için 50 TL daha değerli!',
              '💵 50 TL > 💵 20 TL',
              ['20 ve 50\'yi karşılaştır', '50 > 20', '50 TL daha büyük değer', 'Cevap: 50 TL']
            ),
            createExample(
              '100 TL ile 10 TL karşılaştır',
              '100 TL > 10 TL',
              '100, 10\'un 10 katı! 100 TL çok daha değerli!',
              '💵 100 TL >>> 💵 10 TL'
            ),
            createExample(
              '50 kuruş ile 1 TL karşılaştır',
              '1 TL > 50 kuruş',
              '1 TL = 100 kuruş, 50 kuruştan büyük!',
              '🪙 1 TL > 🪙 50 kuruş'
            ),
            createExample(
              '20 TL + 10 TL mı, 50 TL mi büyük?',
              '50 TL',
              '20 + 10 = 30, ama 50 > 30!',
              '20 + 10 = 30 < 50'
            ),
            createExample(
              '5 tane 10 TL mı, 1 tane 100 TL mi büyük?',
              'Eşit!',
              '5 × 10 = 50, 100 > 50... Hayır, 50 TL ve 100 TL eşit değil!',
              '5 × 10 = 50 TL < 100 TL'
            ),
            createExample(
              '2 tane 100 TL kaç TL eder?',
              '200 TL',
              '100 + 100 = 200 TL!',
              '💵💵 (100\'lük) = 200 TL'
            )
          ]
        }
      ),

      createStep(
        'Para Biriktirme (Tasarruf)',
        `Kumbarada para biriktirmek TASARRUF etmektir! 🐷

📋 TASARRUF NE DEMEKTİR?
• Parayı hemen HARCAMAMAK
• Kumbaraya veya bankaya KOYMAK
• İLERİDE kullanmak için saklamak
• SABIR ile birikim yapmak

🎯 GÜNLÜK TASARRUF PLANI:
• Her gün 1 TL biriktir
• 7 günde (1 hafta) = 7 TL
• 30 günde (1 ay) = 30 TL
• 365 günde (1 yıl) = 365 TL!

💡 NEDEN TASARRUF EDERİZ?
• Büyük hayallerimiz için (bisiklet, tablet...)
• İstediğimiz oyuncak için
• Zor günler için
• Aileye yardım için
• Eğitim için

🐷 Kumbara = En iyi arkadaş!`,
        'Her gün 1 TL biriktirsen, haftada 7 TL, ayda 30 TL olur!',
        {
          visual: `Tasarruf Hesabı:
🐷 Kumbara

Günlük 1 TL Biriktirme:
Pazartesi: 🪙 1 TL → Toplam: 1 TL
Salı:      🪙 1 TL → Toplam: 2 TL
Çarşamba:  🪙 1 TL → Toplam: 3 TL
Perşembe:  🪙 1 TL → Toplam: 4 TL
Cuma:      🪙 1 TL → Toplam: 5 TL
Cumartesi: 🪙 1 TL → Toplam: 6 TL
Pazar:     🪙 1 TL → Toplam: 7 TL
═══════════════════════════════
1 HAFTA = 💰 7 TL!`,
          tip: 'Her gün kumbarana para at, bir ay sonra sürpriz!',
          examples: [
            createExample(
              '5 gün, günde 2 TL biriktirsen kaç TL olur?',
              '10 TL',
              '5 gün × 2 TL = 10 TL!',
              '🐷 5 × 2 = 10 TL',
              ['Her gün 2 TL', '5 gün boyunca', '5 × 2 = 10', 'Cevap: 10 TL']
            ),
            createExample(
              'Kumbarada 15 TL var. 5 TL daha atarsan?',
              '20 TL',
              '15 + 5 = 20 TL olur!',
              '🐷 15 + 5 = 20 TL'
            ),
            createExample(
              '1 hafta boyunca günde 5 TL biriktirsen?',
              '35 TL',
              '7 × 5 = 35 TL!',
              '🐷 7 × 5 = 35 TL'
            ),
            createExample(
              'Neden tasarruf önemli?',
              'Büyük hedefler için',
              'Küçük paralar biriktirerek büyük hayallere ulaşırız!',
              'Küçük + Küçük = Büyük!'
            ),
            createExample(
              'Kumbarada 50 TL var. 100 TL\'lik oyuncak için ne kadar daha lazım?',
              '50 TL daha',
              '100 - 50 = 50 TL daha biriktirmeli!',
              '100 - 50 = 50 TL eksik'
            ),
            createExample(
              'Her gün 3 TL biriktiren çocuk 10 günde kaç TL biriktirir?',
              '30 TL',
              '10 × 3 = 30 TL!',
              '🐷 10 × 3 = 30 TL'
            )
          ]
        }
      ),

      createStep(
        'Basit Alışveriş',
        `Alışveriş yaparken paramızın yetip yetmediğine bakarız! 🛒

📋 ALIŞVERİŞ KURALLARI:
1. Ürünün FİYATINA bak
2. CEBİNDEKİ PARAYA bak
3. KARŞILAŞTIR:
   • Param ≥ Fiyat → ALABİLİRİM ✅
   • Param < Fiyat → ALAMAM ❌

🎯 PARA ÜSTÜ HESABI:
Verilen Para - Ürün Fiyatı = Para Üstü

📋 ÖRNEK:
💵 10 TL verdim
🍎 Elma fiyatı: 7 TL
Para üstü: 10 - 7 = 3 TL!

⚠️ DİKKAT:
Para üstünü mutlaka kontrol et!`,
        'Param 5 TL, elma 3 TL. 5 > 3, yani elma alabilirim! 2 TL de para üstü!',
        {
          visual: `Alışveriş Örneği:
┌─────────────────────────┐
│ 🍎 Elma Fiyatı: 3 TL    │
│ 💰 Benim Param: 5 TL    │
│                         │
│ 5 > 3 → Alabilirim! ✅  │
│                         │
│ Para üstü: 5 - 3 = 2 TL │
└─────────────────────────┘

┌─────────────────────────┐
│ 🧸 Oyuncak: 25 TL       │
│ 💰 Benim Param: 20 TL   │
│                         │
│ 20 < 25 → Alamam! ❌    │
│                         │
│ Eksik: 25 - 20 = 5 TL   │
└─────────────────────────┘`,
          examples: [
            createExample(
              'Param 10 TL, defter 8 TL. Alabilir miyim?',
              'Evet, 2 TL para üstü',
              '10 > 8, param yeterli! 10 - 8 = 2 TL para üstü.',
              '💵 10 TL > 📕 8 TL = ✅',
              ['Param: 10 TL', 'Defter: 8 TL', '10 > 8', 'Cevap: Evet, 2 TL para üstü!']
            ),
            createExample(
              'Param 15 TL, oyuncak 20 TL. Alabilir miyim?',
              'Hayır, 5 TL eksik',
              '15 < 20, param yetmiyor! 20 - 15 = 5 TL daha lazım.',
              '💵 15 TL < 🧸 20 TL = ❌'
            ),
            createExample(
              'Param 50 TL, kitap 35 TL. Para üstü?',
              '15 TL',
              '50 - 35 = 15 TL para üstü alırım!',
              '50 - 35 = 15 TL üstü'
            ),
            createExample(
              'Param 20 TL. 5 TL\'lik dondurma ve 10 TL\'lik çikolata alabilir miyim?',
              'Evet, 5 TL para üstü',
              '5 + 10 = 15 TL, param 20 TL. 20 - 15 = 5 TL kalır!',
              '5 + 10 = 15 < 20 ✅'
            ),
            createExample(
              'Kasiyer yanlış para üstü verse ne yapmalıyız?',
              'Düzeltmesini istemeliyiz',
              'Para üstünü hesaplayıp kontrol etmeliyiz!',
              'Kontrol et → Düzelt!'
            ),
            createExample(
              'Param tam yetiyorsa para üstü var mı?',
              'Hayır, sıfır',
              'Param = Fiyat ise para üstü 0 TL!',
              '10 TL = 10 TL → Üstü: 0 TL'
            )
          ]
        }
      ),

      createStep(
        'Para Toplama ve Sayma',
        `Farklı paraları toplayarak toplam değeri buluruz! 🧮

📋 PARA TOPLAMA KURALLARI:
1. Tüm paraları say
2. Değerlerini topla
3. Toplam tutarı bul

📋 ÖRNEK 1:
💵 10 TL + 💵 5 TL + 🪙 1 TL = 16 TL

📋 ÖRNEK 2:
🪙 50 kuruş + 🪙 50 kuruş = 1 TL
🪙 25 kuruş + 🪙 25 kuruş = 50 kuruş

🎯 STRATEJİ:
• Önce büyük paraları say
• Sonra küçük paraları ekle
• Kuruşları TL'ye çevir
• Toplam tutarı bul`,
        'Farklı paraları toplayarak toplam tutarı hesaplarız!',
        {
          visual: `Para Toplama Örneği:

Cüzdanımda ne var?
💵 20 TL → 20
💵 10 TL → 10
💵 5 TL  → 5
🪙 1 TL  → 1
🪙 1 TL  → 1
─────────────
TOPLAM = 37 TL

Kuruş Örneği:
🪙 50 kuruş
🪙 25 kuruş
🪙 25 kuruş
─────────────
TOPLAM = 100 kuruş = 1 TL`,
          examples: [
            createExample(
              '10 TL + 10 TL + 5 TL = ?',
              '25 TL',
              '10 + 10 + 5 = 25 TL!',
              '💵💵💵 = 25 TL'
            ),
            createExample(
              '50 kuruş + 50 kuruş + 50 kuruş = ?',
              '1 TL 50 kuruş',
              '150 kuruş = 1 TL 50 kuruş!',
              '🪙🪙🪙 = 1 TL 50 kuruş'
            ),
            createExample(
              '20 TL + 20 TL + 10 TL = ?',
              '50 TL',
              '20 + 20 + 10 = 50 TL!',
              '💵💵💵 = 50 TL'
            ),
            createExample(
              '5 TL + 5 TL + 5 TL + 5 TL = ?',
              '20 TL',
              '4 tane 5 TL = 20 TL!',
              '💵×4 (5\'lik) = 20 TL'
            ),
            createExample(
              '100 TL + 50 TL + 20 TL = ?',
              '170 TL',
              '100 + 50 + 20 = 170 TL!',
              '💵💵💵 = 170 TL'
            ),
            createExample(
              '1 TL + 50 kuruş = ?',
              '1 TL 50 kuruş',
              'TL ve kuruşu ayrı yaz!',
              '🪙🪙 = 1 TL 50 kuruş'
            )
          ]
        }
      ),

      createStep(
        'Pratik Zamanı! 💰',
        `Harika öğrendin! Şimdi para ustası olma zamanı!

🎮 EVDE YAPABİLECEĞİN ETKİNLİKLER:

📋 ETKİNLİK 1: Kumbara Sayma
• Kumbarandaki paraları say
• Toplam tutarı hesapla
• Deftere yaz

📋 ETKİNLİK 2: Market Alışverişi
• Aile ile markete git
• Fiyat etiketlerini oku
• Para üstü hesapla

📋 ETKİNLİK 3: Evde Alışveriş Oyunu
• Evdeki nesnelere fiyat koy
• Kağıttan para yap
• Alışveriş yap ve hesapla

📋 ETKİNLİK 4: Tasarruf Planı
• Haftalık tasarruf hedefi koy
• Her gün kumbara at
• Hafta sonunda say

Her gün pratik yap, para ustası ol!`,
        'Pratik yaparak para konusunda uzman ol!',
        {
          visual: `PARA ÖZETİ:
┌─────────────────────────────┐
│ 🪙 MADENİ PARALAR:          │
│ 1, 5, 10, 25, 50 kuruş      │
│ 1 TL                        │
│                             │
│ 💵 KAĞIT PARALAR:           │
│ 5, 10, 20, 50, 100, 200 TL  │
│                             │
│ 📏 SIRA:                    │
│ Küçük → Büyük               │
│ 1 kuruş → ... → 200 TL      │
│                             │
│ 🐷 TASARRUF = Biriktir!     │
│                             │
│ 🛒 Param ≥ Fiyat → ALABİLİRİM│
│                             │
│ 💰 Para Üstü =              │
│    Verilen - Fiyat          │
└─────────────────────────────┘`,
          examples: [
            createExample(
              'Bu derste en önemli kural ne?',
              'Büyük sayı = Daha değerli',
              'Sayı büyükse para daha değerlidir!',
              '100 > 50 > 20 > 10 > 5 > 1'
            ),
            createExample(
              'Tasarruf neden önemli?',
              'Büyük hedefler için birikim',
              'Küçük paralar biriktirerek büyük hayallere ulaşırız!',
              '🐷 Küçük → Büyük!'
            ),
            createExample(
              'Alışverişte ne kontrol edilmeli?',
              'Para üstü',
              'Aldığımız para üstünü mutlaka kontrol etmeliyiz!',
              '💵 - 🛒 = Para üstü kontrol!'
            ),
            createExample(
              'Paranın üzerinde kim var?',
              'Atatürk',
              'Tüm Türk paralarında Atatürk bulunur!',
              '💵🪙 = 🇹🇷 Atatürk'
            ),
            createExample(
              '100 kuruş kaç TL?',
              '1 TL',
              '100 kuruş = 1 Türk Lirası!',
              '100 kuruş = 1 TL'
            ),
            createExample(
              'En değerli Türk parası hangisi?',
              '200 TL',
              '200 TL en büyük değerli kağıt paradır!',
              '💵 200 TL 👑'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // Para kavramı soruları (1-8)
      createMultipleChoice(
        'Para ne için kullanılır?',
        ['Oynamak', 'Alışveriş', 'Yazmak', 'Boyamak'],
        'Alışveriş',
        'Para alışveriş yapmak içindir!'
      ),
      createFillBlank(
        'TL = Türk ___',
        ['Lirası'],
        'TL = Türk Lirası!'
      ),
      createMultipleChoice(
        'Türkiye\'de hangi para kullanılır?',
        ['Dolar', 'Euro', 'Türk Lirası', 'Pound'],
        'Türk Lirası',
        'Türkiye\'de TL kullanılır!'
      ),
      createFillBlank(
        'Tüm Türk paralarının üzerinde ___ var',
        ['Atatürk'],
        'Atatürk tüm paralarda!'
      ),
      createMultipleChoice(
        'Para olmadan önce insanlar ne yapardı?',
        ['Takas', 'Alışveriş', 'Birikim', 'Harcama'],
        'Takas',
        'Eskiden takas yapılırdı!'
      ),
      createFillBlank(
        '100 kuruş = ___ TL',
        ['1', 'bir'],
        '100 kuruş = 1 TL!'
      ),
      createMultipleChoice(
        'Banknotlar neden farklı renklerde?',
        ['Güzel olsun diye', 'Kolay ayırt etmek için', 'Tesadüfen', 'Zorunlu değil'],
        'Kolay ayırt etmek için',
        'Renkler ayırt etmeyi kolaylaştırır!'
      ),
      createFillBlank(
        'Kağıt paralara ___ denir',
        ['banknot'],
        'Kağıt para = Banknot!'
      ),

      // Madeni para soruları (9-16)
      createMultipleChoice(
        'Hangisi madeni para?',
        ['200 TL', '100 TL', '1 TL', '50 TL'],
        '1 TL',
        '1 TL madeni paradır!'
      ),
      createFillBlank(
        '50 kuruş + 50 kuruş = ___ TL',
        ['1', 'bir'],
        '50 + 50 = 100 kuruş = 1 TL!'
      ),
      createMultipleChoice(
        'En değerli madeni para hangisi?',
        ['50 kuruş', '25 kuruş', '1 TL', '10 kuruş'],
        '1 TL',
        '1 TL = 100 kuruş, en değerli!'
      ),
      createFillBlank(
        '4 tane 25 kuruş = ___ TL',
        ['1', 'bir'],
        '25 × 4 = 100 kuruş = 1 TL!'
      ),
      createMultipleChoice(
        'Kaç tane 10 kuruş 1 TL eder?',
        ['5', '10', '20', '100'],
        '10',
        '10 × 10 = 100 kuruş = 1 TL!'
      ),
      createFillBlank(
        '50 kuruş = yarım ___',
        ['lira', 'TL'],
        '50 kuruş = yarım lira!'
      ),
      createMultipleChoice(
        'Madeni paralar neden metal?',
        ['Ucuz olsun', 'Dayanıklı olsun', 'Ağır olsun', 'Parlak olsun'],
        'Dayanıklı olsun',
        'Metal dayanıklıdır!'
      ),
      createFillBlank(
        '2 tane 50 kuruş = ___ TL',
        ['1', 'bir'],
        '50 + 50 = 100 kuruş = 1 TL!'
      ),

      // Kağıt para soruları (17-24)
      createMultipleChoice(
        'Hangisi en değerli?',
        ['5 TL', '20 TL', '10 TL', '1 TL'],
        '20 TL',
        '20 en büyük sayı, en değerli!'
      ),
      createFillBlank(
        '10 TL ___ renktedir',
        ['kırmızı'],
        '10 TL kırmızı!'
      ),
      createMultipleChoice(
        'En küçük değerli banknot?',
        ['1 TL', '5 TL', '10 TL', '20 TL'],
        '5 TL',
        '5 TL en küçük banknot! 1 TL madeni.'
      ),
      createFillBlank(
        '100 TL ___ renktedir',
        ['mavi'],
        '100 TL mavi!'
      ),
      createMultipleChoice(
        'En büyük değerli banknot?',
        ['50 TL', '100 TL', '200 TL', '500 TL'],
        '200 TL',
        '200 TL en büyük banknot!'
      ),
      createFillBlank(
        '20 TL ___ renktedir',
        ['yeşil'],
        '20 TL yeşil!'
      ),
      createMultipleChoice(
        '50 TL hangi renk?',
        ['Mor', 'Mavi', 'Turuncu', 'Kırmızı'],
        'Turuncu',
        '50 TL turuncudur!'
      ),
      createFillBlank(
        '5 TL ___ renktedir',
        ['mor'],
        '5 TL mor!'
      ),

      // Karşılaştırma soruları (25-32)
      createMultipleChoice(
        '100 TL mi 50 TL mi daha değerli?',
        ['50 TL', '100 TL', 'Eşit', 'Belli değil'],
        '100 TL',
        '100 > 50, 100 TL daha değerli!'
      ),
      createFillBlank(
        '100 TL, ___ TL\'den daha değerli',
        ['50', 'elli'],
        '100 > 50!'
      ),
      createMultipleChoice(
        'Hangisi daha az değerli?',
        ['20 TL', '10 TL', '50 TL', '100 TL'],
        '10 TL',
        '10 en küçük sayı, en az değerli!'
      ),
      createFillBlank(
        '200 TL > 100 TL > ___ TL',
        ['50', 'elli'],
        '200 > 100 > 50!'
      ),
      createMultipleChoice(
        '20 TL + 30 TL mı, 40 TL mi büyük?',
        ['20+30=50 TL', '40 TL', 'Eşit', 'Belli değil'],
        '20+30=50 TL',
        '20 + 30 = 50 > 40!'
      ),
      createFillBlank(
        '5 tane 20 TL = ___ TL',
        ['100', 'yüz'],
        '5 × 20 = 100 TL!'
      ),
      createMultipleChoice(
        '10 tane 10 TL kaç TL eder?',
        ['10 TL', '50 TL', '100 TL', '1000 TL'],
        '100 TL',
        '10 × 10 = 100 TL!'
      ),
      createFillBlank(
        '2 tane 100 TL = ___ TL',
        ['200', 'iki yüz'],
        '100 + 100 = 200 TL!'
      ),

      // Alışveriş soruları (33-40)
      createMultipleChoice(
        'Param 15 TL, oyuncak 20 TL. Alabilir miyim?',
        ['Evet', 'Hayır', 'Belki', 'Belli değil'],
        'Hayır',
        '15 < 20, param yetmez!'
      ),
      createFillBlank(
        '10 TL + 10 TL = ___ TL',
        ['20', 'yirmi'],
        '10 + 10 = 20!'
      ),
      createMultipleChoice(
        'Param 50 TL, kitap 35 TL. Para üstü?',
        ['10 TL', '15 TL', '20 TL', '25 TL'],
        '15 TL',
        '50 - 35 = 15 TL para üstü!'
      ),
      createFillBlank(
        '20 TL - 5 TL = ___ TL para üstü',
        ['15', 'on beş'],
        '20 - 5 = 15 TL üstü!'
      ),
      createMultipleChoice(
        'Param 30 TL. 10 TL + 15 TL alabilir miyim?',
        ['Evet, 5 TL kalır', 'Hayır', 'Tam yeter', 'Belli değil'],
        'Evet, 5 TL kalır',
        '10 + 15 = 25 < 30, 5 TL kalır!'
      ),
      createFillBlank(
        '100 TL - 75 TL = ___ TL para üstü',
        ['25', 'yirmi beş'],
        '100 - 75 = 25 TL!'
      ),
      createMultipleChoice(
        'Param tam fiyat kadarsa para üstü var mı?',
        ['Evet', 'Hayır', 'Az var', 'Çok var'],
        'Hayır',
        'Param = Fiyat ise üstü 0!'
      ),
      createFillBlank(
        'Alabilmek için param fiyattan ___ veya eşit olmalı',
        ['büyük', 'fazla'],
        'Param ≥ Fiyat = Alabilirim!'
      ),

      // Tasarruf soruları (41-45)
      createMultipleChoice(
        'Kumbarada 30 TL var. 10 TL daha atarsan?',
        ['20 TL', '30 TL', '40 TL', '50 TL'],
        '40 TL',
        '30 + 10 = 40 TL!'
      ),
      createFillBlank(
        '7 gün, günde 5 TL = ___ TL',
        ['35', 'otuz beş'],
        '7 × 5 = 35 TL!'
      ),
      createMultipleChoice(
        'Her gün 2 TL biriktiren 10 günde kaç TL biriktirir?',
        ['12 TL', '20 TL', '22 TL', '10 TL'],
        '20 TL',
        '10 × 2 = 20 TL!'
      ),
      createFillBlank(
        'Tasarruf = para ___',
        ['biriktirmek', 'biriktirme'],
        'Tasarruf = Biriktirmek!'
      ),
      createMultipleChoice(
        'Neden tasarruf ederiz?',
        ['Paramız çok diye', 'Büyük hedefler için', 'Zorunlu diye', 'Eğlence için'],
        'Büyük hedefler için',
        'Büyük hayaller için biriktiririz!'
      )
    ],

    summary: 'Türk Lirası birimlerini (kuruş ve TL), madeni ve kağıt paraları, para karşılaştırmayı, tasarruf etmeyi, para üstü hesabını ve basit alışveriş hesaplarını öğrendik! 100 kuruş = 1 TL olduğunu ve büyük sayının daha değerli olduğunu unutma!',
    nextTopicPreview: 'Sonraki temada toplama işlemini öğreneceğiz! Sayıları birleştirmeyi keşfedeceğiz! ➕'
  }
};
