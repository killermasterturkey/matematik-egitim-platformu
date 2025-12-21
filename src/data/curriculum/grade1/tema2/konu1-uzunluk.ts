// 1. SINIF - TEMA 2 - KONU 1: Uzunluk Ölçme
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1UzunlukOlcme: Topic = {
  id: 'uzunluk-olcme',
  title: 'Uzunluk Ölçmeyi Öğrenelim',
  description: 'Standart olmayan araçlarla uzunluk ölçme, uzun-kısa kavramları',
  emoji: '📏',
  duration: '45 dk',
  difficulty: 1,
  keywords: ['uzunluk', 'kısa', 'uzun', 'ölçme', 'karış', 'adım', 'ayak'],
  objectives: [
    'Uzunluk kavramını anlar',
    'Uzun ve kısa kavramlarını ayırt eder',
    'Karış, adım, ayak ile ölçüm yapar',
    'Tahmin ve ölçümü karşılaştırır',
    'Farklı nesnelerin uzunluklarını karşılaştırır'
  ],
  content: {
    introduction: `Merhaba küçük ölçümcü! 📏

Her şeyin bir uzunluğu var! Masanın, kalemin, parmağının, odan... Hatta yürüdüğün yolun bile!

Bugün uzunlukları ölçmeyi öğreneceğiz! Ellerimiz, ayaklarımız ve adımlarımızla ölçüm yapacağız. Bunlar "standart olmayan" ölçü birimleridir çünkü herkesin eli ve ayağı farklı büyüklüktedir.

Hazır mısın? Ölçüm macerasına başlayalım! 🚀`,

    motivationQuote: 'Ölçerek dünyayı daha iyi anlarız! Her şeyin bir ölçüsü var! 📏',

    funFacts: [
      'En uzun hayvan mavi balinadır - 30 metre uzunluğunda! 🐋',
      'En kısa kuş arı sinek kuşudur - sadece 5 cm! 🐦',
      'Zürafaların boynu tam 2 metre uzunluğundadır! 🦒',
      'Bir karınca kendi boyunun 50 katı mesafe yürüyebilir! 🐜',
      'Dünya\'nın çevresi yaklaşık 40.000 kilometre! 🌍',
      'Eski Mısırlılar "kübit" denilen ölçüyü kullanırlardı - dirsekten parmak ucuna! 📐',
      'Dünyanın en uzun köprüsü Çin\'de ve 164 kilometre uzunluğunda! 🌉',
      'Bir basketbolcunun kol açıklığı yaklaşık 2 metre! 🏀'
    ],

    steps: [
      createStep(
        'Uzunluk Nedir?',
        `Uzunluk, bir şeyin bir ucundan diğer ucuna olan mesafedir. Her şeyin bir uzunluğu vardır!

📏 UZUNLUK HER YERDE:
• Kalemin uzunluğu (kaç santim?)
• Masanın genişliği (kaç karış?)
• Odanın boyu (kaç adım?)
• Yolun mesafesi (kaç metre?)
• Kitabın kalınlığı (kaç parmak?)

🎯 UZUNLUK = Bir ucundan diğer ucuna olan mesafe

Uzunlukları ölçmek için farklı araçlar kullanırız:
• Cetvel (santimetre/milimetre)
• Metre (büyük uzunluklar)
• Karış, adım, ayak (standart olmayan)`,
        'Uzunluk bir şeyin ne kadar uzun veya kısa olduğunu gösterir.',
        {
          visual: `Uzunluk Örnekleri:
📏 ════════════════════ UZUN
📏 ════════════ ORTA
📏 ═════ KISA

🖊️ ──────────────── Kalem (uzun)
🖍️ ─────── Boya kalemi (orta)
🧲 ──── Silgi (kısa)

Her nesnenin farklı uzunluğu var!`,
          examples: [
            createExample(
              'Cetvel ne ölçer?',
              'Uzunluk',
              'Cetvel üzerindeki çizgiler ve sayılar uzunluk ölçmek içindir!',
              '📏 = Uzunluk ölçer',
              ['Cetvel düz bir araçtır', 'Üzerinde sayılar vardır', 'Nesnelerin boyunu ölçer', 'Cevap: Uzunluk']
            ),
            createExample(
              'Kalem kutusunun uzunluğu nasıl ölçülür?',
              'Bir ucundan diğer ucuna',
              'Başlangıç noktasından bitiş noktasına kadar ölçeriz!',
              '📦 |← ─────── →| Uzunluk'
            ),
            createExample(
              'Parmağının uzunluğu ölçülebilir mi?',
              'Evet',
              'Her şeyin uzunluğu ölçülebilir, parmak da dahil!',
              '👆 = Uzunluğu ölçülebilir!'
            ),
            createExample(
              'Hangi nesnelerin uzunluğu ölçülür?',
              'Hepsinin!',
              'Kalem, kitap, masa, oda, yol... Her şeyin uzunluğu ölçülebilir!',
              '🖊️📚🪑🚪 = Hepsinin uzunluğu var!'
            ),
            createExample(
              'Bir dairenin uzunluğu var mı?',
              'Çevresi var',
              'Dairenin kenarı çevre olarak ölçülür!',
              '⭕ = Çevresi ölçülebilir'
            ),
            createExample(
              'Suyun uzunluğu olur mu?',
              'Hayır, sıvıların uzunluğu olmaz',
              'Sıvılar şekil değiştirir, bu yüzden sabit uzunlukları yoktur!',
              '💧 = Uzunluğu yok (sıvı)'
            )
          ]
        }
      ),

      createStep(
        'Uzun ve Kısa Kavramı',
        `İki nesneyi karşılaştırarak hangisinin UZUN, hangisinin KISA olduğunu buluruz.

🔍 KARŞILAŞTIRMA ADIMLARI:
1. İki nesneyi yan yana koy
2. Bir uçlarını hizala (aynı çizgiye getir)
3. Diğer uçlarına bak
4. Daha fazla yer kaplayan = UZUN!
5. Daha az yer kaplayan = KISA!

📝 ÖNEMLİ KURALLAR:
• Karşılaştırırken nesneleri düz tutmalıyız
• Uçları hizalamalıyız
• Bükük veya eğik nesneleri düzeltiriz

🎯 UZUN vs KISA:
Uzun → Daha fazla yer kaplar
Kısa → Daha az yer kaplar`,
        'Uzun olan daha fazla yer kaplar, kısa olan daha az.',
        {
          visual: `Karşılaştırma Örneği:
🦒 Zürafa    ↑ UZUN (6 metre)
   ▓
   ▓
   ▓
   ▓
   ▓
   ▓

🐕 Köpek    ↓ KISA (50 cm)
   ▓

Karşılaştırınca: 🦒 > 🐕`,
          tip: 'Karşılaştırırken nesnelerin bir ucunu mutlaka hizala!',
          examples: [
            createExample(
              'Zürafa mı fil mi daha uzun boylu?',
              'Zürafa',
              'Zürafa dünyanın en uzun boylu hayvanıdır! Boyu 6 metreye kadar çıkar, fil ise 4 metre.',
              '🦒 > 🐘 (Boy: 6m > 4m)',
              ['Zürafa: yaklaşık 6 metre', 'Fil: yaklaşık 4 metre', '6 > 4', 'Cevap: Zürafa daha uzun boylu']
            ),
            createExample(
              'Hangisi daha kısa: kalem mi silgi mi?',
              'Silgi',
              'Silgi genellikle kalemden çok daha kısadır!',
              '🖊️───────── > 🧲────'
            ),
            createExample(
              'Otobüs mü araba mı daha uzun?',
              'Otobüs',
              'Otobüs arabalara göre çok daha uzundur!',
              '🚌─────────── > 🚗────'
            ),
            createExample(
              'Karınca mı kedi mi daha kısa?',
              'Karınca',
              'Karınca çok küçük bir böcek, kediden çok daha kısa!',
              '🐜 << 🐱 (Karınca çok kısa!)'
            ),
            createExample(
              'Kaşık mı çatal mı daha uzun?',
              'Genellikle eşit veya çatal biraz uzun',
              'Çatal ve kaşık çoğunlukla aynı boyda olur!',
              '🥄 ≈ 🍴 (Yaklaşık eşit)'
            ),
            createExample(
              'Kol mu bacak mı daha uzun?',
              'Bacak',
              'İnsanlarda bacaklar kollardan daha uzundur!',
              '🦵 > 💪 (Bacak daha uzun)'
            )
          ]
        }
      ),

      createStep(
        'Karış ile Ölçme',
        `Karış, elini açtığında başparmak ile serçe parmak arasındaki mesafedir! 🖐️

📏 KARIŞ NASIL YAPILIR?
1. Elini tamamen aç
2. Başparmak bir yana, serçe parmak diğer yana
3. Aradaki mesafe = 1 KARIŞ

📏 KARIŞ İLE ÖLÇME ADIMLARI:
1. Elini nesnenin başına koy
2. Serçe parmağın değdiği yeri işaretle
3. Elini kaldır, başparmağı işarete koy
4. Tekrar et ve say
5. Toplam karış sayısını söyle

⚠️ ÖNEMLİ:
Herkesin eli farklı boyda, bu yüzden karış "standart olmayan" ölçüdür!`,
        'Karış, eski zamanlarda çok kullanılan bir ölçü birimiydi.',
        {
          visual: `Karış Ölçümü:
🖐️ = 1 KARIŞ (başparmak ↔ serçe parmak)

📚 Kitap ölçümü:
|🖐️|🖐️| = 2 KARIŞ

📓 Defter ölçümü:
|🖐️|🖐️|🖐️| = 3 KARIŞ

📺 TV ölçümü:
|🖐️|🖐️|🖐️|🖐️|🖐️|🖐️| = 6 KARIŞ`,
          explanation: 'Karış herkesin elinde farklı olabilir, bu yüzden "standart olmayan" ölçü denir.',
          examples: [
            createExample(
              'Kitabın uzunluğu 2 karış. Bu ne demek?',
              'Elini 2 kez koyunca kitap bitiyor',
              'Her karış koymada eli kaydırıyoruz ve sayıyoruz!',
              '📚 = |🖐️|🖐️| = 2 karış',
              ['Eli kitabın başına koy', 'İşaretle ve tekrar koy', '2 kez koyunca bitiyor', 'Cevap: 2 karış']
            ),
            createExample(
              'Masanın uzunluğu Ali\'nin 5 karışı, Ayşe\'nin 6 karışı. Neden farklı?',
              'Elleri farklı büyüklükte',
              'Ali\'nin eli daha büyük olduğu için daha az karış çıktı!',
              'Ali 🖐️(büyük) = 5 karış\nAyşe 🖐️(küçük) = 6 karış'
            ),
            createExample(
              'Bir yetişkinin karışı çocuğun karışından neden büyük?',
              'Eli daha büyük',
              'Yetişkinlerin elleri daha büyük, bu yüzden karışları da büyük!',
              '👨🖐️ > 👦🖐️ (Yetişkin eli büyük)'
            ),
            createExample(
              'Karış ile ne ölçülür?',
              'Küçük ve orta boy nesneler',
              'Kitap, defter, kutu gibi nesneler karış ile ölçülebilir!',
              '📚📓📦 = Karış ile ölçülür'
            ),
            createExample(
              'Televizyon 8 karış. Bu büyük mü?',
              'Evet, oldukça büyük',
              '8 karış yaklaşık 1.5 metre, bu büyük bir TV!',
              '📺 = 8 karış = Büyük TV!'
            ),
            createExample(
              'Defterim 2 karış, kitabım 3 karış. Hangisi uzun?',
              'Kitap',
              '3 > 2, kitap defterden 1 karış daha uzun!',
              'Defter: 2 karış < Kitap: 3 karış'
            )
          ]
        }
      ),

      createStep(
        'Adım ile Ölçme',
        `Adım, yürürken bir ayağından diğerine olan mesafedir! 👣

📏 ADIM NASIL ATILIR?
1. Düzgün dur
2. Normal bir adım at
3. Her adımı say

📏 ADIM İLE ÖLÇME:
1. Ölçeceğin yerin başına git
2. Normal adımlarla yürü (ne çok büyük ne çok küçük)
3. Her adımı sesli say
4. Sonuna varınca toplam adım sayısını söyle

🎯 ADIM NE ZAMAN KULLANILIR?
• Odanın uzunluğu
• Koridorun uzunluğu
• Bahçenin bir kenarı
• Okul yolu

⚠️ DİKKAT: Her zaman normal adımlarla yürü!`,
        'Adım büyük mesafeleri ölçmek için idealdir.',
        {
          visual: `Adım Ölçümü:
👣 👣 👣 👣 👣 = 5 ADIM

Sınıf Ölçümü:
|👣👣👣👣👣👣👣👣👣👣| = 10 ADIM

Koridor Ölçümü:
|👣👣👣👣👣👣👣👣👣👣👣👣👣👣👣👣👣👣👣👣| = 20 ADIM

Bahçe Uzunluğu:
|👣...................................👣| = 50 ADIM`,
          tip: 'Normal adımlarla yürü, koşma veya çok küçük adım atma!',
          examples: [
            createExample(
              'Sınıf 15 adım, koridor 25 adım. Hangisi uzun?',
              'Koridor',
              '25 > 15 olduğu için koridor daha uzun!',
              'Sınıf: 15 adım < Koridor: 25 adım',
              ['Sınıf: 15 adım', 'Koridor: 25 adım', '25 > 15', 'Cevap: Koridor daha uzun']
            ),
            createExample(
              'Mehmet 10 adımda okula gidiyor. Fatma 8 adımda. Kimin evi yakın?',
              'Fatma\'nın evi',
              '8 < 10, daha az adım = daha yakın mesafe!',
              'Mehmet: 10 adım > Fatma: 8 adım'
            ),
            createExample(
              'Mutfak 6 adım, salon 12 adım. Salon mutfağın kaç katı?',
              '2 katı',
              '12 ÷ 6 = 2, salon mutfağın 2 katı uzunluğunda!',
              'Salon: 12 adım = 2 × Mutfak (6 adım)'
            ),
            createExample(
              'Ayşe büyük adımlarla yürüyünce oda 5 adım, küçük adımlarla 10 adım. Neden?',
              'Adım boyutu farklı',
              'Büyük adım daha uzun mesafe kaplar!',
              'Büyük adım: 5 vs Küçük adım: 10'
            ),
            createExample(
              'Bahçenin çevresi 100 adım. Bu çok mu?',
              'Evet, oldukça büyük',
              '100 adım yaklaşık 60-70 metre, büyük bir bahçe!',
              '🏡 çevresi = 100 adım = Büyük!'
            ),
            createExample(
              'Ali ile Veli aynı odayı ölçtü. Ali 8 adım, Veli 10 adım buldu. Kim doğru?',
              'İkisi de doğru',
              'Herkesin adım boyu farklı, bu yüzden farklı sonuçlar normal!',
              'Ali 👣(büyük) = 8, Veli 👣(küçük) = 10'
            )
          ]
        }
      ),

      createStep(
        'Ayak ile Ölçme',
        `Ayak ile ölçme, ayağını uç uca koyarak yapılan ölçümdür! 🦶

📏 AYAK İLE ÖLÇME ADIMLARI:
1. Ayağını ölçeceğin yerin başına koy
2. Parmak ucunun değdiği yeri işaretle (veya hatırla)
3. Topuğunu o işarete koy
4. Tekrar parmak ucu işaretle
5. Say ve devam et
6. Toplam ayak sayısını söyle

🎯 AYAK NE ZAMAN KULLANILIR?
• Halının uzunluğu
• Kapı genişliği
• Yatağın boyu
• Masanın uzunluğu

✨ AVANTAJI: Ayak ölçümü oldukça hassas sonuç verir!`,
        'Ayak ile ölçmek küçük ve orta mesafeler için idealdir.',
        {
          visual: `Ayak Ölçümü:
🦶 🦶 🦶 🦶 🦶 = 5 AYAK

Halı Ölçümü:
|🦶|🦶|🦶|🦶|🦶|🦶|🦶|🦶| = 8 AYAK

Kapı Genişliği:
|🦶|🦶|🦶| = 3 AYAK

Yatak Uzunluğu:
|🦶|🦶|🦶|🦶|🦶|🦶|🦶|🦶|🦶|🦶| = 10 AYAK`,
          examples: [
            createExample(
              'Halı 8 ayak uzunluğunda. Büyük mü?',
              'Evet, oldukça büyük',
              '8 ayak yaklaşık 2 metre civarı, bu büyük bir halı!',
              '|🦶🦶🦶🦶🦶🦶🦶🦶| = Büyük Halı'
            ),
            createExample(
              'Masa 5 ayak, sandalye 2 ayak. Hangisi uzun?',
              'Masa',
              '5 > 2, masa sandalyeden 3 ayak daha uzun!',
              'Masa: 5 ayak > Sandalye: 2 ayak',
              ['Masa: 5 ayak', 'Sandalye: 2 ayak', '5 > 2', 'Cevap: Masa daha uzun']
            ),
            createExample(
              'Kapı 3 ayak genişliğinde. Dolap geçer mi? (Dolap 4 ayak)',
              'Hayır, geçmez',
              'Dolap kapıdan daha geniş, sığmaz!',
              'Dolap: 4 ayak > Kapı: 3 ayak = Sığmaz!'
            ),
            createExample(
              'Yatağım 9 ayak. Boyum 7 ayak. Sığar mıyım?',
              'Evet, rahatça sığarsın',
              '9 > 7, yatak senden 2 ayak daha uzun!',
              'Yatak: 9 ayak > Boy: 7 ayak ✓'
            ),
            createExample(
              'Pencere 4 ayak, kapı 3 ayak genişliğinde. Hangisi geniş?',
              'Pencere',
              '4 > 3, pencere kapıdan 1 ayak daha geniş!',
              'Pencere: 4 ayak > Kapı: 3 ayak'
            ),
            createExample(
              'Neden adım yerine ayak kullanırız?',
              'Daha hassas ölçüm için',
              'Ayak daha küçük birim, hassas ölçümler için kullanılır!',
              'Ayak 🦶 = Hassas ölçüm'
            )
          ]
        }
      ),

      createStep(
        'Tahmin ve Ölçme',
        `Ölçmeden önce TAHMİN yapmak çok önemli! Sonra ölçüp karşılaştırırız. 🎯

📋 TAHMİN NASIL YAPILIR?
1. Nesneye dikkatlice bak
2. Bildiğin bir nesneyle karşılaştır
3. Aklından bir sayı tahmin et
4. Tahminini söyle veya yaz

📏 ÖLÇÜM VE KARŞILAŞTIRMA:
1. Nesneyi gerçekten ölç
2. Tahminle ölçümü karşılaştır
3. Farkı bul
4. Değerlendir

✅ Tahmin ölçüme yakınsa = HARİKA TAHMİN!
⚠️ Tahmin biraz farklıysa = İYİ TAHMİN!
❌ Tahmin çok farklıysa = PRATİK YAP!

💡 İPUCU: Tahmin yeteneği pratikle gelişir!`,
        'Tahmin, ölçmeden önce sonucu öngörmeye çalışmaktır.',
        {
          visual: `Tahmin vs Ölçüm:
┌─────────────────────────────┐
│ Nesne:  Kitap               │
│ Tahmin: 3 karış             │
│ Ölçüm:  2 karış             │
│ Fark:   1 karış             │
│ Sonuç:  Yakın! ✓            │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Nesne:  Oda                 │
│ Tahmin: 10 adım             │
│ Ölçüm:  10 adım             │
│ Fark:   0                   │
│ Sonuç:  MÜKEMMEL! 🌟        │
└─────────────────────────────┘`,
          tip: 'Her gün farklı nesneler için tahmin yap, pratik yap!',
          examples: [
            createExample(
              'Tahmin: 6 karış, Ölçüm: 5 karış. Tahmin iyi mi?',
              'Evet, çok yakın!',
              'Sadece 1 karış fark var, bu çok iyi bir tahmin!',
              'Tahmin: 6 ≈ Ölçüm: 5 (Fark: 1) ✓',
              ['Tahmin: 6 karış', 'Ölçüm: 5 karış', 'Fark: 6 - 5 = 1', 'Yakın tahmin! ✓']
            ),
            createExample(
              'Tahmin: 10 adım, Ölçüm: 4 adım. Tahmin nasıl?',
              'Çok fazla tahmin etmiş',
              '10 - 4 = 6 adım fark, daha dikkatli tahmin etmeli!',
              'Tahmin: 10 >> Ölçüm: 4 (Fark: 6) ❌'
            ),
            createExample(
              'Tahmin: 7 ayak, Ölçüm: 7 ayak. Tahmin nasıl?',
              'MÜKEMMEL!',
              'Tam tutturdu! Bu harika bir tahmin yeteneği!',
              'Tahmin: 7 = Ölçüm: 7 (Fark: 0) 🌟'
            ),
            createExample(
              'Masa için tahmin nasıl yapılır?',
              'Karışınla karşılaştır',
              'Masaya bak, kaç karış olabileceğini düşün!',
              'Masa → Gözle bak → Tahmin et → Ölç'
            ),
            createExample(
              'Neden tahmin önemli?',
              'Sonucu öngörmek için',
              'Tahmin yapmak beynimizi çalıştırır ve ölçme becerimizi geliştirir!',
              'Tahmin → Ölçüm → Karşılaştırma = Öğrenme!'
            ),
            createExample(
              'Ali tahmin etmedi, direkt ölçtü. Bu doğru mu?',
              'Eksik kalmış',
              'Önce tahmin etmek öğrenmeyi pekiştirir!',
              'Doğru yol: Tahmin → Ölç → Karşılaştır'
            )
          ]
        }
      ),

      createStep(
        'Farklı Ölçü Birimleri Karşılaştırma',
        `Karış, adım ve ayak farklı durumlarda kullanılır. Hangisini ne zaman kullanacağını öğrenelim!

📏 ÖLÇÜ BİRİMLERİ TABLOSU:
┌─────────┬─────────────────┬──────────────────┐
│ Birim   │ Boyut           │ Örnek Kullanım   │
├─────────┼─────────────────┼──────────────────┤
│ Karış   │ Küçük/Orta      │ Kitap, defter    │
│ Ayak    │ Orta            │ Halı, masa       │
│ Adım    │ Büyük           │ Oda, koridor     │
└─────────┴─────────────────┴──────────────────┘

🎯 NE ZAMAN HANGİSİ?
• KÜÇÜK nesneler → KARIŞ 🖐️
• ORTA nesneler → AYAK 🦶
• BÜYÜK mesafeler → ADIM 👣

⚠️ HATIRLA:
Büyük birimle ölçersen → Az sayı çıkar
Küçük birimle ölçersen → Çok sayı çıkar`,
        'Doğru ölçü birimini seçmek önemlidir!',
        {
          visual: `Ölçü Birimi Seçimi:
📚 Kitap = KARIŞ ile ölç (2-3 karış)
🛋️ Kanepe = AYAK ile ölç (8-10 ayak)
🏠 Ev = ADIM ile ölç (çok adım)

Aynı Nesne, Farklı Birimler:
Masa:
• 5 karış
• 3 ayak
• 1 adım (küçük masa için)

Birim küçüldükçe sayı büyür!`,
          examples: [
            createExample(
              'Oda ölçmek için en iyi birim hangisi?',
              'Adım',
              'Oda büyük bir yer, adımla ölçmek en pratik!',
              'Oda = Büyük → ADIM 👣'
            ),
            createExample(
              'Defter ölçmek için ne kullanmalıyız?',
              'Karış',
              'Defter küçük, karışla ölçmek ideal!',
              'Defter = Küçük → KARIŞ 🖐️'
            ),
            createExample(
              'Halı için hangi birim uygun?',
              'Ayak',
              'Halı orta boyutta, ayakla ölçülebilir!',
              'Halı = Orta → AYAK 🦶'
            ),
            createExample(
              'Okul bahçesi için hangi birim?',
              'Adım',
              'Bahçe çok büyük, adımla ölçmek gerekir!',
              'Bahçe = Çok Büyük → ADIM 👣👣👣'
            ),
            createExample(
              'Neden kalemlik için adım kullanmayız?',
              'Çok küçük, 1 adımdan az',
              'Kalemlik küçük, karışla ölçmek daha doğru!',
              'Kalemlik → Karış kullan, adım olmaz'
            ),
            createExample(
              'Bir masa 6 karış. Kaç ayak olabilir?',
              '3-4 ayak',
              'Ayak karıştan büyük, bu yüzden daha az sayı çıkar!',
              'Masa: 6 karış ≈ 3-4 ayak'
            )
          ]
        }
      ),

      createStep(
        'Pratik Zamanı! 📏',
        `Tebrikler! Artık uzunluk ölçme uzmanısın! Şimdi öğrendiklerini uygula!

🎮 EVDE YAPABİLECEĞİN ÖLÇÜMLER:
• Yatağını karış ile ölç
• Odanı adım ile ölç
• Ayakkabını ayak ile ölç
• Masanı karış ile ölç
• Mutfak ile salon arasını adımla ölç

📝 ÖLÇÜM GÜNLÜĞÜ TUT:
┌──────────┬─────────┬────────┬───────┐
│ Nesne    │ Tahmin  │ Ölçüm  │ Fark  │
├──────────┼─────────┼────────┼───────┤
│ Yatak    │ 8 karış │ 7 karış│ 1     │
│ Oda      │ 10 adım │ 12 adım│ 2     │
│ Masa     │ 5 ayak  │ 5 ayak │ 0     │
└──────────┴─────────┴────────┴───────┘

🏆 HEDEF: Her gün 3 farklı nesne ölç!`,
        'Pratik yaparak ölçme ustası ol!',
        {
          visual: `ÖLÇME ÖZETİ:
┌─────────────────────────────┐
│ 🖐️ KARIŞ = El açıklığı     │
│ 👣 ADIM = Yürüme adımı      │
│ 🦶 AYAK = Ayak boyu         │
│                             │
│ KÜÇÜK → Karış               │
│ ORTA  → Ayak                │
│ BÜYÜK → Adım                │
│                             │
│ Tahmin → Ölç → Karşılaştır  │
└─────────────────────────────┘`,
          examples: [
            createExample(
              'Hangi ölçü birimi ile masa ölçülür?',
              'Karış veya ayak',
              'Masa orta büyüklükte, karış veya ayak ile ölçülebilir!',
              '🪑 = Karış veya Ayak ile ölçülebilir'
            ),
            createExample(
              'Ölçüm yaparken ilk adım ne?',
              'Tahmin etmek',
              'Önce tahmin et, sonra ölç ve karşılaştır!',
              '1. Tahmin → 2. Ölç → 3. Karşılaştır'
            ),
            createExample(
              'Neden farklı ölçü birimleri var?',
              'Farklı boyutlar için',
              'Her boyuttaki nesne için uygun birim kullanırız!',
              'Küçük/Orta/Büyük → Farklı birimler'
            ),
            createExample(
              'En çok hangi birim kullanılır?',
              'Duruma göre değişir',
              'Her durumda en uygun birimi seçeriz!',
              'Doğru birim = Doğru ölçüm!'
            ),
            createExample(
              'Ölçme becerisi nasıl gelişir?',
              'Pratik yaparak',
              'Her gün farklı nesneler ölçerek pratik yap!',
              'Pratik → Gelişme → Ustalık! 🌟'
            ),
            createExample(
              'Bugün ne öğrendik?',
              'Uzunluk ölçmeyi!',
              'Karış, adım ve ayak ile ölçmeyi, tahmin yapmayı öğrendik!',
              '📏 Uzunluk → Karış/Adım/Ayak → Tahmin & Ölçüm'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // Uzunluk kavramı soruları (1-8)
      createMultipleChoice(
        'Hangisi uzunluk ölçer?',
        ['Terazi', 'Cetvel', 'Saat', 'Termometre'],
        'Cetvel',
        'Cetvel uzunluk ölçen bir araçtır!',
        '📏 = Uzunluk ölçer'
      ),
      createFillBlank(
        'Uzunluk bir şeyin bir ucundan diğer ___ olan mesafedir',
        ['ucuna', 'uca'],
        'Uzunluk = Bir ucundan diğer ucuna mesafe!'
      ),
      createMultipleChoice(
        'Hangisinin uzunluğu ölçülebilir?',
        ['Su', 'Hava', 'Kalem', 'Işık'],
        'Kalem',
        'Kalem katı bir nesne, uzunluğu ölçülebilir!'
      ),
      createFillBlank(
        'Daha uzun olan nesne daha ___ yer kaplar',
        ['çok', 'fazla'],
        'Uzun olan daha çok yer kaplar!'
      ),
      createMultipleChoice(
        'Uzunluk ölçmek için ne kullanıLMAZ?',
        ['Karış', 'Cetvel', 'Terazi', 'Ayak'],
        'Terazi',
        'Terazi ağırlık ölçer, uzunluk değil!'
      ),
      createFillBlank(
        'Nesnelerin boyunu ölçmek için ___ kullanırız',
        ['cetvel', 'uzunluk birimi'],
        'Cetvel uzunluk ölçmeye yarar!'
      ),
      createMultipleChoice(
        'Aşağıdakilerden hangisi standart olmayan ölçü?',
        ['Metre', 'Santimetre', 'Karış', 'Kilometre'],
        'Karış',
        'Karış herkesin elinde farklı olduğu için standart değildir!'
      ),
      createFillBlank(
        'Bir şeyin ne kadar ___ veya kısa olduğunu uzunluk gösterir',
        ['uzun'],
        'Uzunluk = Uzun veya kısa oluşu gösterir!'
      ),

      // Uzun-kısa kavramı soruları (9-16)
      createMultipleChoice(
        'Zürafa mı fil mi daha uzun boylu?',
        ['Zürafa', 'Fil', 'Eşit', 'Belli değil'],
        'Zürafa',
        'Zürafa 6 metre, fil 4 metre boyundadır!'
      ),
      createFillBlank(
        'Zürafa fileden daha ___ boyludur',
        ['uzun'],
        'Zürafa en uzun boylu kara hayvanıdır!'
      ),
      createMultipleChoice(
        'Hangisi en kısa?',
        ['Karınca', 'Kedi', 'At', 'Fil'],
        'Karınca',
        'Karınca en küçük ve en kısa hayvan!'
      ),
      createFillBlank(
        'İki nesneyi karşılaştırırken bir uçlarını ___ ',
        ['hizalarız', 'hizala'],
        'Karşılaştırmak için uçları hizalanmalı!'
      ),
      createMultipleChoice(
        'Otobüs mü araba mı daha uzun?',
        ['Otobüs', 'Araba', 'Eşit', 'Belli değil'],
        'Otobüs',
        'Otobüs arabadan çok daha uzundur!'
      ),
      createFillBlank(
        'Daha ___ yer kaplayan nesne daha uzundur',
        ['çok', 'fazla'],
        'Uzun olan çok yer kaplar!'
      ),
      createMultipleChoice(
        'Kalem ve silgi karşılaştırıldığında hangisi genellikle kısa?',
        ['Kalem', 'Silgi', 'Eşit', 'Farketmez'],
        'Silgi',
        'Silgi genellikle kalemden kısadır!'
      ),
      createFillBlank(
        'Uzun ve kısa kavramları ___ yaparken kullanılır',
        ['karşılaştırma', 'karsilastirma'],
        'Karşılaştırma için uzun-kısa deriz!'
      ),

      // Karış ile ölçme soruları (17-24)
      createMultipleChoice(
        'Karış neyle ölçülür?',
        ['Elle', 'Ayakla', 'Göz ile', 'Kulak ile'],
        'Elle',
        'Karış, el açıklığı ile yapılan ölçümdür! 🖐️'
      ),
      createFillBlank(
        '🖐️ = 1 ___',
        ['karış', 'KARIŞ'],
        'Bir el açıklığı = 1 karış!'
      ),
      createMultipleChoice(
        'Karış ölçümünde hangi parmaklar kullanılır?',
        ['Başparmak ve serçe parmak', 'İşaret ve orta parmak', 'Sadece başparmak', 'Tüm parmaklar'],
        'Başparmak ve serçe parmak',
        'Başparmak ile serçe parmak arası = karış!'
      ),
      createFillBlank(
        'Kitap 3 karış ise eli ___ kez koyunca bitiyor',
        ['3', 'üç'],
        '3 karış = eli 3 kez koymak!'
      ),
      createMultipleChoice(
        'Ali\'nin eli büyük, Ayşe\'nin eli küçük. Aynı masayı ölçerlerse?',
        ['Ali daha az karış sayar', 'Ayşe daha az karış sayar', 'Eşit sayarlar', 'Ölçemezler'],
        'Ali daha az karış sayar',
        'Büyük eli olan daha az karış sayar!'
      ),
      createFillBlank(
        'Karış standart ___ bir ölçü birimidir',
        ['olmayan', 'değil'],
        'Herkesin eli farklı, bu yüzden standart değil!'
      ),
      createMultipleChoice(
        'Karış ile ne ölçmek uygundur?',
        ['Kitap', 'Futbol sahası', 'Şehir', 'Ülke'],
        'Kitap',
        'Karış küçük nesneler için uygundur!'
      ),
      createFillBlank(
        'Defter 2 karış, kitap 3 karış. Kitap defterden ___ karış uzun',
        ['1', 'bir'],
        '3 - 2 = 1 karış fark!'
      ),

      // Adım ile ölçme soruları (25-32)
      createMultipleChoice(
        'Adım ile ne ölçmek uygundur?',
        ['Kalem', 'Silgi', 'Sınıf', 'Kitap'],
        'Sınıf',
        'Adım büyük mesafeler için kullanılır!'
      ),
      createFillBlank(
        '👣👣👣👣👣 = ___ adım',
        ['5', 'beş'],
        '5 ayak izi = 5 adım!'
      ),
      createMultipleChoice(
        'Sınıf 20 adım, koridor 30 adım. Hangisi uzun?',
        ['Sınıf', 'Koridor', 'Eşit', 'Belli değil'],
        'Koridor',
        '30 > 20, koridor daha uzun!'
      ),
      createFillBlank(
        'Sınıf 15 adım, koridor 25 adım. Koridor ___ adım daha uzun',
        ['10', 'on'],
        '25 - 15 = 10 adım fark!'
      ),
      createMultipleChoice(
        'Adım ölçümünde nasıl yürümeliyiz?',
        ['Koşarak', 'Normal adımlarla', 'Zıplayarak', 'Tek ayak üstünde'],
        'Normal adımlarla',
        'Normal adımlarla düzgün ölçüm yapılır!'
      ),
      createFillBlank(
        'Büyük mesafeler için ___ ile ölçüm yaparız',
        ['adım'],
        'Adım büyük mesafeler için ideal!'
      ),
      createMultipleChoice(
        'Mehmet 12 adımda markete gidiyor, Ali 8 adımda. Kimin evi yakın?',
        ['Mehmet\'in', 'Ali\'nin', 'Eşit', 'Belli değil'],
        'Ali\'nin',
        '8 < 12, Ali\'nin evi daha yakın!'
      ),
      createFillBlank(
        'Bahçe 50 adım, oda 10 adım. Bahçe odadan ___ kat büyük',
        ['5', 'beş'],
        '50 ÷ 10 = 5 kat!'
      ),

      // Ayak ile ölçme soruları (33-40)
      createMultipleChoice(
        'Ayak ile ölçme nasıl yapılır?',
        ['Ayağı uç uca koyarak', 'Ayağı havaya kaldırarak', 'Ayağı sallayarak', 'Tek ayakla durarak'],
        'Ayağı uç uca koyarak',
        'Ayak uç uca konarak ölçüm yapılır!'
      ),
      createFillBlank(
        '🦶🦶🦶🦶 = ___ ayak',
        ['4', 'dört'],
        '4 ayak!'
      ),
      createMultipleChoice(
        'Halı 8 ayak, masa 5 ayak. Hangisi uzun?',
        ['Halı', 'Masa', 'Eşit', 'Belli değil'],
        'Halı',
        '8 > 5, halı daha uzun!'
      ),
      createFillBlank(
        'Masa 5 ayak, sandalye 2 ayak. Masa ___ ayak daha uzun',
        ['3', 'üç'],
        '5 - 2 = 3 ayak fark!'
      ),
      createMultipleChoice(
        'Ayak ile ne ölçmek uygundur?',
        ['Parmak', 'Silgi', 'Halı', 'Kalem ucu'],
        'Halı',
        'Ayak orta boylu nesneler için kullanılır!'
      ),
      createFillBlank(
        'Ayak ölçümünde topuk ve ___ ucu kullanılır',
        ['parmak', 'ayak'],
        'Topuk ve parmak ucu ile ayak ölçülür!'
      ),
      createMultipleChoice(
        'Kapı 3 ayak genişliğinde. Dolap 4 ayak. Dolap sığar mı?',
        ['Evet', 'Hayır', 'Belki', 'Bilemeyiz'],
        'Hayır',
        '4 > 3, dolap kapıdan geniş, sığmaz!'
      ),
      createFillBlank(
        'Yatak 10 ayak, boyum 8 ayak. Yatakta ___ ayak boş kalır',
        ['2', 'iki'],
        '10 - 8 = 2 ayak boş!'
      ),

      // Tahmin soruları (41-45)
      createMultipleChoice(
        'Tahmin: 7 ayak, Ölçüm: 7 ayak. Tahmin nasıl?',
        ['Çok kötü', 'Kötü', 'İyi', 'Mükemmel'],
        'Mükemmel',
        'Tam tuttu! Mükemmel tahmin!'
      ),
      createFillBlank(
        'Tahmin: 6 karış, Ölçüm: 5 karış. Fark ___ karış',
        ['1', 'bir'],
        '6 - 5 = 1 karış fark!'
      ),
      createMultipleChoice(
        'Ölçümden önce ne yapmak gerekir?',
        ['Koşmak', 'Tahmin etmek', 'Uyumak', 'Yemek'],
        'Tahmin etmek',
        'Önce tahmin et, sonra ölç!'
      ),
      createFillBlank(
        'Tahmin: 10 adım, Ölçüm: 4 adım. Fark ___ adım',
        ['6', 'altı'],
        '10 - 4 = 6 adım fark (çok fazla)!'
      ),
      createMultipleChoice(
        'Tahmin yeteneği nasıl gelişir?',
        ['Uyuyarak', 'Pratik yaparak', 'Televizyon izleyerek', 'Hiçbir şekilde'],
        'Pratik yaparak',
        'Her gün pratik yaparsan tahmin yeteneğin gelişir!'
      )
    ],

    summary: 'Uzunluk kavramını, uzun-kısa karşılaştırmayı, karış, adım ve ayak ile ölçüm yapmayı ve tahmin-ölçüm karşılaştırmasını öğrendik! Unutma: Küçük nesneler için karış, orta nesneler için ayak, büyük mesafeler için adım kullan!',
    nextTopicPreview: 'Sonraki konuda kütle ve tartmayı öğreneceğiz! Nesnelerin ağırlığını nasıl ölçeriz?'
  }
};
