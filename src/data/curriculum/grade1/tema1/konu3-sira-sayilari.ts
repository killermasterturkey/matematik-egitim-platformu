// 1. SINIF - TEMA 1 - KONU 3: Sıra Sayılarını Öğrenelim
// Detaylı içerik: 8 adım, 45+ soru
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu3SiraSayilari: Topic = {
  id: 'sira-sayilari',
  title: 'Sıra Sayılarını Öğrenelim',
  description: 'Birinci, ikinci, üçüncü... sıra sayılarını öğren ve günlük hayatta kullan',
  emoji: '🏆',
  duration: '50 dk',
  difficulty: 1,
  keywords: ['sıra', 'birinci', 'ikinci', 'üçüncü', 'sonuncu', 'ortadaki', 'sıralama', 'yarış'],
  objectives: [
    '1-10 arası sıra sayılarını doğru söyler ve yazar',
    'Sıra sayılarını sembollerle (1., 2., 3.) gösterir',
    'Nesnelerin ve kişilerin sırasını belirler',
    'Ortadaki ve sonuncu kavramlarını anlar ve kullanır',
    'Sıra sayısı ile sayma sayısı arasındaki farkı ayırt eder',
    'Günlük hayatta sıra sayılarını doğru kullanır'
  ],
  content: {
    introduction: `Merhaba küçük şampiyon! 🏆

Yarışta kim birinci oldu? Sırada kaçıncısın? Haftanın kaçıncı günündeyiz? Sınıfta kaçıncı sırada oturuyorsun?

İşte sıra sayıları bunları söyler! Birinci, ikinci, üçüncü... diye devam eder.

Sayma sayıları "kaç tane?" sorusuna cevap verir: 5 elma 🍎🍎🍎🍎🍎
Sıra sayıları "kaçıncı?" sorusuna cevap verir: 5. sırada! 🏅

Haydi sıra sayılarının dünyasına girelim! 🚀`,

    motivationQuote: 'Birinci olmak güzel ama katılmak daha önemli! Her yarışta bir şeyler öğrenirsin! 🏅',

    funFacts: [
      'Olimpiyatlarda ilk 3\'e madalya verilir! Altın (1.), Gümüş (2.), Bronz (3.) 🥇🥈🥉',
      'Haftanın birinci günü Pazartesi\'dir! Hafta başı böyle başlar! 📅',
      'Yılın birinci ayı Ocak, sonuncu ayı Aralık\'tır! ❄️',
      'Bir yarışta birinci olan "şampiyon" unvanını alır! 🏆',
      'Okuldaki sınıflar da sıra sayılarıyla adlandırılır: 1. sınıf, 2. sınıf, 3. sınıf... 📚',
      'Türkiye\'de 81 il var ve her birinin plaka numarası var: 1. Adana, 34. İstanbul, 06. Ankara! 🚗',
      'Dünya\'da en uzun nehir 1. sırada Nil, 2. sırada Amazon nehridir! 🌊'
    ],

    steps: [
      createStep(
        'Sıra Sayısı Nedir?',
        `Sıra sayıları, kişi veya nesnelerin sıradaki YERİNİ gösterir.

📍 SAYMA SAYISI (kaç tane?):
   "5 elma var" → Miktar (adet)

📍 SIRA SAYISI (kaçıncı?):
   "5. sıradayım" → Konum (yer)

ÖNEMLİ KURAL:
Sıra sayıları yazılırken sonuna NOKTA (.) konur!

1 → 1. (birinci)
2 → 2. (ikinci)
3 → 3. (üçüncü)

Bu nokta "-inci, -ıncı, -üncü, -uncu" anlamına gelir!`,
        'Sıra sayıları bir yarışta veya kuyrukta kimin kaçıncı olduğunu söyler. Sayının sonuna nokta koyarız.',
        {
          visual: `SAYMA SAYISI        SIRA SAYISI
vs
"Kaç tane?"         "Kaçıncı?"
─────────────────────────────────
5 kitap             5. kitap
(beş adet)          (beşinci sıradaki)

3 çocuk             3. çocuk
(üç adet)           (üçüncü sıradaki)

🍎🍎🍎🍎🍎 = 5 elma
👤 → 5. = Beşinci (sırada)`,
          tip: 'Nokta koymayı unutma! 1. 2. 3. şeklinde yazılır!',
          examples: [
            createExample(
              'Yarışta 1. olan kişiye ne denir?',
              'Birinci',
              '1. = Birinci! Bu kişi şampiyondur!',
              '🥇 = 1. = BİRİNCİ'
            ),
            createExample(
              '"5 elma" ile "5. elma" arasındaki fark nedir?',
              '5 elma = beş adet elma, 5. elma = beşinci sıradaki elma',
              '"5 elma" miktar, "5. elma" sıra gösterir!',
              '🍎🍎🍎🍎🍎 = 5 elma | 🍎 = 5. elma'
            ),
            createExample(
              'Sıra sayısı yazarken ne eklenir?',
              'Nokta (.)',
              '1. 2. 3. 4. 5. şeklinde nokta koyulur!',
              '1 → 1. | 2 → 2. | 3 → 3.'
            ),
            createExample(
              '"3. sınıf" ne demek?',
              'Üçüncü sınıf',
              '3. sınıf = sıralamada üçüncü olan sınıf!',
              '1. sınıf → 2. sınıf → 3. sınıf'
            ),
            createExample(
              'Madalya alan ilk 3 kişi hangi sıralarda?',
              '1., 2., 3.',
              'Altın: 1. (birinci), Gümüş: 2. (ikinci), Bronz: 3. (üçüncü)',
              '🥇🥈🥉 = 1. 2. 3.'
            )
          ]
        }
      ),

      createStep(
        '1-5 Arası Sıra Sayıları',
        `İlk beş sıra sayısını öğrenelim:

1️⃣  1. = BİRİNCİ
    • En önde, ilk sırada olan
    • Örnek: Yarışın birincisi, sınıfın birincisi

2️⃣  2. = İKİNCİ
    • Birinciden hemen sonra gelen
    • Örnek: Haftanın ikinci günü Salı

3️⃣  3. = ÜÇÜNCÜ
    • İkinciden sonra gelen
    • Örnek: Üçüncü katta oturuyoruz

4️⃣  4. = DÖRDÜNCÜ
    • Üçüncüden sonra gelen
    • Örnek: Dördüncü soruyu çözdüm

5️⃣  5. = BEŞİNCİ
    • Dördüncüden sonra gelen
    • Örnek: Beşinci sırada bekliyorum`,
        'Birinci, ikinci, üçüncü, dördüncü, beşinci. Bunları ezberle!',
        {
          visual: `Yarış sıralaması:
🏃 1. Birinci  → 🥇 (ALTIN)
🏃 2. İkinci   → 🥈 (GÜMÜŞ)
🏃 3. Üçüncü   → 🥉 (BRONZ)
🏃 4. Dördüncü → 🏅
🏃 5. Beşinci  → 🎖️

Parmakların:
👍 Başparmak = 1. (Birinci)
👆 İşaret    = 2. (İkinci)
🖐 Orta      = 3. (Üçüncü)
💍 Yüzük     = 4. (Dördüncü)
🤙 Serçe     = 5. (Beşinci)`,
          tip: 'Parmaklarını sırala: Başparmak 1., işaret 2., orta 3., yüzük 4., serçe 5.!',
          examples: [
            createExample(
              '3. sıradaki kişi nasıl söylenir?',
              'Üçüncü',
              '3. = Üçüncü! Yarışta bronz madalya alır.',
              '🥉 = 3. = ÜÇÜNCÜ'
            ),
            createExample(
              'Beşinci kaçıncı sıra demek?',
              '5.',
              'Beşinci = 5. sıra',
              '5. = BEŞİNCİ'
            ),
            createExample(
              'Altın madalya kaçıncıya verilir?',
              '1. (Birinci)',
              'Altın madalya yarışın birincisine, yani 1. olana verilir!',
              '🥇 = 1. = BİRİNCİ'
            ),
            createExample(
              'Haftanın ikinci günü hangisi?',
              'Salı',
              'Pazartesi 1., Salı 2. gündür!',
              'Pzt(1.) → Sal(2.)'
            ),
            createExample(
              '1. 2. 3. 4. ? ... Sırada 5 nedir?',
              '5. (Beşinci)',
              'Sıralama: 1. 2. 3. 4. 5. = Birinci, İkinci, Üçüncü, Dördüncü, Beşinci',
              '4. → 5.'
            ),
            createExample(
              'Dördüncü parmağın adı ne?',
              'Yüzük parmağı',
              'Başparmak(1), İşaret(2), Orta(3), Yüzük(4), Serçe(5)',
              '4. parmak = Yüzük parmağı'
            )
          ]
        }
      ),

      createStep(
        '6-10 Arası Sıra Sayıları',
        `Devam edelim, 6-10 arası sıra sayıları:

6️⃣  6. = ALTINCI
    • Beşinciden sonra gelen
    • Örnek: Haftanın altıncı günü Cumartesi

7️⃣  7. = YEDİNCİ
    • Altıncıdan sonra gelen
    • Örnek: Yedinci katta oturuyoruz

8️⃣  8. = SEKİZİNCİ
    • Yedinciden sonra gelen
    • Örnek: Sekizinci sayfayı aç

9️⃣  9. = DOKUZUNCU
    • Sekizinciden sonra gelen
    • Örnek: Dokuzuncu ayda doğdum (Eylül)

🔟 10. = ONUNCU
    • Dokuzuncudan sonra gelen
    • Örnek: Onuncu soruyu çözdüm

Artık 10'a kadar tüm sıra sayılarını biliyorsun! 🎉`,
        'Altıncı, yedinci, sekizinci, dokuzuncu, onuncu! 6-10 arası tamamlandı!',
        {
          visual: `TÜM SIRA SAYILARI TABLOSU:
┌──────┬─────────────┐
│ 1.   │ Birinci     │
│ 2.   │ İkinci      │
│ 3.   │ Üçüncü      │
│ 4.   │ Dördüncü    │
│ 5.   │ Beşinci     │
├──────┼─────────────┤
│ 6.   │ Altıncı     │
│ 7.   │ Yedinci     │
│ 8.   │ Sekizinci   │
│ 9.   │ Dokuzuncu   │
│ 10.  │ Onuncu      │
└──────┴─────────────┘`,
          explanation: '"-inci, -ıncı, -uncu, -üncü" ekleri Türkçe ünlü uyumuna göre değişir.',
          examples: [
            createExample(
              '10. sıradaki nasıl söylenir?',
              'Onuncu',
              '10. = Onuncu! En son değilse sıralama devam edebilir.',
              '10. = ONUNCU'
            ),
            createExample(
              'Yedinci kaçıncı sıra?',
              '7.',
              'Yedinci = 7. sıra',
              'YEDİNCİ = 7.'
            ),
            createExample(
              'Haftanın 6. günü hangisi?',
              'Cumartesi',
              'Pzt(1), Sal(2), Çar(3), Per(4), Cum(5), Cmt(6) = Cumartesi 6. gün!',
              '6. gün = Cumartesi'
            ),
            createExample(
              '6. 7. 8. ? ... Sırada 9 nedir?',
              '9. (Dokuzuncu)',
              '6. Altıncı, 7. Yedinci, 8. Sekizinci, 9. Dokuzuncu',
              '8. → 9.'
            ),
            createExample(
              'Eylül yılın kaçıncı ayı?',
              '9. (Dokuzuncu)',
              'Ocak(1)... Eylül(9). Eylül yılın dokuzuncu ayıdır!',
              'Eylül = 9. ay'
            ),
            createExample(
              '10 kitabın sonuncusu kaçıncı kitap?',
              '10. (Onuncu)',
              '10 tane kitap varsa, sonuncusu 10. kitap = Onuncu kitap!',
              '📚📚📚📚📚📚📚📚📚📚 → 10. = Sonuncu'
            )
          ]
        }
      ),

      createStep(
        'Sıra Sayılarını Yazalım',
        `Sıra sayılarını iki şekilde yazabiliriz:

1️⃣ RAKAMLA (noktalı):
   1. 2. 3. 4. 5. 6. 7. 8. 9. 10.

2️⃣ YAZIYALA:
   Birinci, İkinci, Üçüncü, Dördüncü, Beşinci...

YAZIM KURALLARI:
✍️ Rakamdan sonra mutlaka nokta (.) konur
✍️ Yazıyla yazarken küçük harfle başlanır (birinci)
✍️ Cümle başında büyük harfle yazılır (Birinci)

OKUMA:
📖 1. → "birinci" diye okunur
📖 5. → "beşinci" diye okunur
📖 10. → "onuncu" diye okunur`,
        'Sıra sayıları nokta ile yazılır: 1. 2. 3. Yazıyla da birinci, ikinci, üçüncü şeklinde yazılır.',
        {
          visual: `DOĞRU YAZIM:
✅ 1. sınıf = Birinci sınıf
✅ 3. kişi = Üçüncü kişi
✅ 5. sıra = Beşinci sıra

YANLIŞ YAZIM:
❌ 1 sınıf (nokta yok)
❌ 1: sınıf (iki nokta yanlış)
❌ Birincinci (yanlış sözcük)`,
          tip: 'Nokta koymayı asla unutma! 1. 2. 3. şeklinde yaz.',
          examples: [
            createExample(
              '"Üçüncü" nasıl rakamla yazılır?',
              '3.',
              'Üçüncü = 3. (noktalı yazılır)',
              'Üçüncü → 3.'
            ),
            createExample(
              '"7." nasıl okunur?',
              'Yedinci',
              '7. = Yedinci diye okunur',
              '7. → Yedinci'
            ),
            createExample(
              '"Dördüncü sıra" rakamla nasıl?',
              '4. sıra',
              'Dördüncü = 4. şeklinde yazılır',
              'Dördüncü sıra → 4. sıra'
            ),
            createExample(
              '"8." nasıl yazıyla yazılır?',
              'Sekizinci',
              '8. = Sekizinci',
              '8. → Sekizinci'
            ),
            createExample(
              'Hangisi doğru: "2 sınıf" mı "2. sınıf" mı?',
              '2. sınıf',
              'Sıra sayısı olduğu için nokta konmalı: 2. sınıf = İkinci sınıf',
              '2. sınıf ✅'
            )
          ]
        }
      ),

      createStep(
        'Sonuncu Kavramı',
        `SONUNCU: Sıralamanın en sonunda olan kişi veya nesne.

🔚 KURALLAR:
• Kaç kişi/nesne varsa, sonuncu o kadarıncıdır
• 5 kişide sonuncu = 5. kişi (Beşinci)
• 8 kişide sonuncu = 8. kişi (Sekizinci)
• 10 kişide sonuncu = 10. kişi (Onuncu)

FORMÜL: Sonuncu = Toplam sayı + "inci/ıncı/üncü/uncu"

ÖRNEKLER:
👥 4 arkadaş sırada bekliyor → Sonuncu = 4. (Dördüncü)
📚 7 kitap rafta dizili → Sonuncu = 7. (Yedinci)
🏃 10 kişi yarışıyor → Sonuncu = 10. (Onuncu)`,
        'Sonuncu = En sonda olan. 5 kişide sonuncu 5., 10 kişide sonuncu 10. olur.',
        {
          visual: `5 ÖĞRENCİ SIRADA:
👧 → 1. (Birinci) ← EN ÖNDE
👦 → 2. (İkinci)
👧 → 3. (Üçüncü)
👦 → 4. (Dördüncü)
🧒 → 5. (Beşinci) ← SONUNCU

7 MEYVE SIRADA:
🍎🍊🍋🍇🍓🍑🍒
1. 2. 3. 4. 5. 6. 7.
              ↑
           SONUNCU = 7.`,
          tip: 'Toplam sayı = Sonuncunun sırası! 6 tane varsa sonuncu 6. olur.',
          examples: [
            createExample(
              '6 kişilik sırada sonuncu kaçıncı?',
              '6. (Altıncı)',
              '6 kişi varsa sonuncu 6. sıradadır = Altıncı!',
              '1→2→3→4→5→6 (Sonuncu)'
            ),
            createExample(
              '9 öğrenci sırada, sonuncu kim?',
              '9. (Dokuzuncu)',
              '9 öğrenci = Sonuncu 9. öğrenci = Dokuzuncu',
              '👤x9 → Sonuncu = 9.'
            ),
            createExample(
              '3 kardeş var, en küçük hangisi?',
              '3. (Üçüncü - Sonuncu)',
              'Sırayla: 1. (en büyük), 2. (ortanca), 3. (en küçük = sonuncu)',
              '1.→2.→3.(son)'
            ),
            createExample(
              '10 sayfalık kitabın son sayfası kaç?',
              '10. sayfa',
              '10 sayfa var, sonuncusu 10. sayfa = Onuncu sayfa',
              'Sayfa: 1...2...3...→10.(son)'
            ),
            createExample(
              '4 mevsimin sonuncusu hangisi?',
              '4. (Kış - Dördüncü)',
              'İlkbahar(1), Yaz(2), Sonbahar(3), Kış(4) = Kış sonuncu',
              '🌸→☀️→🍂→❄️(son)'
            )
          ]
        }
      ),

      createStep(
        'Ortadaki Kavramı',
        `ORTADAKİ: Sıralamanın tam ortasında bulunan kişi veya nesne.

🎯 KURALLAR:
• Tek sayıda nesne varsa ortadaki tektir
• Her iki tarafta eşit sayıda nesne olmalı

FORMÜL: Ortadaki = (Toplam + 1) ÷ 2

ÖRNEKLER:
• 3 kişide ortadaki = 2. → (1) [2] (3)
• 5 kişide ortadaki = 3. → (1,2) [3] (4,5)
• 7 kişide ortadaki = 4. → (1,2,3) [4] (5,6,7)
• 9 kişide ortadaki = 5. → (1,2,3,4) [5] (6,7,8,9)

DİKKAT: Çift sayıda (2, 4, 6, 8...) tam ortadaki YOKTUR!
• 4 kişide: 1,2 | 3,4 → Ortada 2 kişi var, tek ortadaki yok
• 6 kişide: 1,2,3 | 4,5,6 → Ortada 2 kişi var`,
        'Ortadaki = Tam ortada olan. 5 kişide 3., 7 kişide 4., 9 kişide 5. ortadadır.',
        {
          visual: `5 HAYVAN:
🐶 🐱 🐰 🐻 🐼
1.  2.  3.  4.  5.
        ↑
    ORTADAKİ = 3.
(2 önünde, 2 arkasında)

7 TOP:
⚽ 🏀 🎾 🏐 ⚾ 🥎 🎱
1.  2.  3.  4.  5.  6.  7.
            ↑
        ORTADAKİ = 4.
(3 önünde, 3 arkasında)

9 ÇİÇEK:
🌸🌼🌷🌻🌹🌺🌸🌼🌷
1. 2. 3. 4. 5. 6. 7. 8. 9.
            ↑
        ORTADAKİ = 5.`,
          tip: 'Tek sayıda nesne varsa ortadaki tektir. Ortadakinin her iki yanında eşit sayıda nesne olmalı!',
          examples: [
            createExample(
              '5 öğrenci sırada, ortadaki kaçıncı?',
              '3. (Üçüncü)',
              '1,2,[3],4,5 → 3. ortada! 2 önünde, 2 arkasında.',
              '👤👤[👤]👤👤 = 3. ortada'
            ),
            createExample(
              '7 kişide ortadaki kaçıncı?',
              '4. (Dördüncü)',
              '1,2,3,[4],5,6,7 → 4. ortada! 3 önünde, 3 arkasında.',
              '👤👤👤[👤]👤👤👤 = 4.'
            ),
            createExample(
              '9 elmada ortadaki kaçıncı?',
              '5. (Beşinci)',
              '1,2,3,4,[5],6,7,8,9 → 5. ortada! 4 önünde, 4 arkasında.',
              '🍎x4 [🍎] 🍎x4 = 5.'
            ),
            createExample(
              '3 kardeşin ortancası kaçıncı?',
              '2. (İkinci)',
              '1,[2],3 → 2. ortada! 1 önünde, 1 arkasında.',
              '👤[👤]👤 = 2.'
            ),
            createExample(
              '6 kişide ortadaki var mı?',
              'Hayır, tam ortadaki yok',
              '6 çift sayı, 1,2,3 | 4,5,6 → Ortada 3 ve 4 var, tek ortadaki yok!',
              '👤👤👤|👤👤👤 → 2 kişi ortada'
            )
          ]
        }
      ),

      createStep(
        'Günlük Hayatta Sıra Sayıları',
        `Sıra sayıları günlük hayatımızda çok kullanılır:

📅 HAFTANIN GÜNLERİ:
1. Pazartesi (Birinci gün)
2. Salı (İkinci gün)
3. Çarşamba (Üçüncü gün)
4. Perşembe (Dördüncü gün)
5. Cuma (Beşinci gün)
6. Cumartesi (Altıncı gün)
7. Pazar (Yedinci gün - Sonuncu)

🗓️ YILIN AYLARI:
1. Ocak, 2. Şubat, 3. Mart... 12. Aralık

🏫 OKULDA:
• 1. sınıf, 2. sınıf, 3. sınıf, 4. sınıf
• 1. kat, 2. kat, 3. kat

🚌 SIRALARDA:
• "Ben 3. sıradayım" = Üçüncüyüm
• "5. numara gelsin" = Beşinci kişi gelsin`,
        'Market sırasında, okul sırasında, yarışlarda hep sıra sayıları kullanırız.',
        {
          visual: `MARKET SIRASI:
👧 ← 1. (Birinci) - Şu an işlem yapılıyor
👦 ← 2. (İkinci) - Sonraki
👧 ← 3. (Üçüncü)
👦 ← 4. (Dördüncü)
🧒 ← 5. (Beşinci - SEN!)

"Ben 5. sıradayım" = "Ben beşinciyim"

APARTMAN KATLARI:
🏠 3. kat - Üçüncü kat
🏠 2. kat - İkinci kat
🏠 1. kat - Birinci kat
🏠 Zemin kat`,
          examples: [
            createExample(
              'Pazartesi haftanın kaçıncı günü?',
              '1. (Birinci)',
              'Pazartesi = Haftanın 1. günü = Birinci gün!',
              'Pzt = 1. gün'
            ),
            createExample(
              'Pazar haftanın kaçıncı günü?',
              '7. (Yedinci - Sonuncu)',
              'Pazartesi(1)...Pazar(7) = Haftanın son günü!',
              'Pazar = 7. gün (son)'
            ),
            createExample(
              'Mart yılın kaçıncı ayı?',
              '3. (Üçüncü)',
              'Ocak(1), Şubat(2), Mart(3) = Mart 3. ay!',
              'Mart = 3. ay'
            ),
            createExample(
              'Çarşamba haftanın kaçıncı günü?',
              '3. (Üçüncü)',
              'Pazartesi(1), Salı(2), Çarşamba(3) = 3. gün!',
              'Çar = 3. gün'
            ),
            createExample(
              'Aralık yılın kaçıncı ayı?',
              '12. (On ikinci - Sonuncu)',
              'Ocak(1)...Aralık(12) = Yılın son ayı!',
              'Aralık = 12. ay (son)'
            )
          ]
        }
      ),

      createStep(
        'Pratik Zamanı! 🎯',
        `Tebrikler! Sıra sayılarını öğrendin! 🏆

Şimdi pratik yapalım:

🎮 OYUN FİKİRLERİ:
1. Aileni sıraya diz - Kim kaçıncı?
2. Oyuncaklarını sırala - Hangisi birinci?
3. Kitaplarını diz - Ortadaki hangisi?
4. Kardeşlerinle yarış yap - Kim kaçıncı oldu?
5. Merdivendeki basamakları say - Kaçıncı basamaktasın?

📝 HATIRLA:
• Sıra sayısı = Kaçıncı? sorusuna cevap
• Yazarken nokta koy: 1. 2. 3.
• Sonuncu = En sondaki (toplam kadar)
• Ortadaki = Tam ortadaki (her iki yanda eşit)`,
        'Artık sıra sayılarını çok iyi biliyorsun! Pratik yap ve ustalaş!',
        {
          visual: `🎯 SIRA SAYILARI ÖZETİ:
┌────┬────────────┬────────────┐
│ No │ Sıra Sayısı│ Yazılış    │
├────┼────────────┼────────────┤
│ 1  │ Birinci    │ 1.         │
│ 2  │ İkinci     │ 2.         │
│ 3  │ Üçüncü     │ 3.         │
│ 4  │ Dördüncü   │ 4.         │
│ 5  │ Beşinci    │ 5.         │
│ 6  │ Altıncı    │ 6.         │
│ 7  │ Yedinci    │ 7.         │
│ 8  │ Sekizinci  │ 8.         │
│ 9  │ Dokuzuncu  │ 9.         │
│ 10 │ Onuncu     │ 10.        │
└────┴────────────┴────────────┘

🏆 Sıra sayılarının şampiyonusun!`,
          tip: 'Her gün sıra sayılarını kullan: "Bugün haftanın kaçıncı günü?", "Kaçıncı sıradayım?"',
          examples: [
            createExample(
              'Sınıfta 25 öğrenci var, sonuncu kaçıncı?',
              '25. (Yirmi beşinci)',
              'Toplam 25 öğrenci = Sonuncu 25. sıradadır!',
              '25 öğrenci → Sonuncu = 25.'
            ),
            createExample(
              '11 kişilik takımda ortadaki kaçıncı?',
              '6. (Altıncı)',
              '1,2,3,4,5,[6],7,8,9,10,11 → 6. ortada! 5 önünde, 5 arkasında.',
              '👤x5 [👤] 👤x5 = 6.'
            ),
            createExample(
              'Cumartesi haftanın kaçıncı günü?',
              '6. (Altıncı)',
              'Pzt(1), Sal(2), Çar(3), Per(4), Cum(5), Cmt(6) = 6. gün!',
              'Cmt = 6. gün'
            ),
            createExample(
              'Mayıs yılın kaçıncı ayı?',
              '5. (Beşinci)',
              'Ocak(1), Şubat(2), Mart(3), Nisan(4), Mayıs(5) = 5. ay!',
              'Mayıs = 5. ay'
            ),
            createExample(
              '8. ne demek?',
              'Sekizinci',
              '8. = Sekizinci sıra, sekizinci kişi, sekizinci gün...',
              '8. = SEKİZİNCİ'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // Temel Sıra Sayıları (1-10)
      createMultipleChoice(
        'Yarışta 1. olan kişiye ne denir?',
        ['Sonuncu', 'Birinci', 'Ortadaki', 'İkinci'],
        'Birinci',
        '1. = Birinci! Yarışın şampiyonudur!'
      ),
      createMultipleChoice(
        'Yarışta 2. olan kişi nasıl söylenir?',
        ['Birinci', 'İkinci', 'Üçüncü', 'Dördüncü'],
        'İkinci',
        '2. = İkinci! Gümüş madalya alır.'
      ),
      createFillBlank(
        '3. = ___',
        ['Üçüncü', 'üçüncü'],
        '3. = Üçüncü! Bronz madalya alır.'
      ),
      createFillBlank(
        '5. = ___',
        ['Beşinci', 'beşinci'],
        '5. sıra = Beşinci!'
      ),
      createMultipleChoice(
        '🥇🥈🥉 Bronz madalya kaçıncıya verilir?',
        ['1.', '2.', '3.', '4.'],
        '3.',
        'Bronz madalya 3. yani üçüncüye verilir!'
      ),
      createFillBlank(
        'Dördüncü = ___.',
        ['4'],
        'Dördüncü = 4. sıra!'
      ),
      createMultipleChoice(
        'Altıncı hangi sayıdır?',
        ['5', '6', '7', '8'],
        '6',
        'Altıncı = 6!'
      ),
      createFillBlank(
        '7. = ___',
        ['Yedinci', 'yedinci'],
        '7. = Yedinci!'
      ),
      createFillBlank(
        'Sekizinci = ___. sıra',
        ['8'],
        'Sekizinci = 8. sıra!'
      ),
      createMultipleChoice(
        '9. nasıl okunur?',
        ['Sekizinci', 'Dokuzuncu', 'Onuncu', 'Yedinci'],
        'Dokuzuncu',
        '9. = Dokuzuncu!'
      ),
      createFillBlank(
        '10. = ___',
        ['Onuncu', 'onuncu'],
        '10. = Onuncu!'
      ),
      createMultipleChoice(
        'Onuncu kaçıncı sıra?',
        ['9.', '10.', '11.', '8.'],
        '10.',
        'Onuncu = 10. sıra!'
      ),

      // Sonuncu Kavramı
      createMultipleChoice(
        '5 kişilik sırada sonuncu kaçıncı?',
        ['Birinci', 'Üçüncü', 'Beşinci', 'Dördüncü'],
        'Beşinci',
        '5 kişide sonuncu = 5. = Beşinci!'
      ),
      createMultipleChoice(
        '10 kişilik sırada sonuncu kaçıncı?',
        ['Birinci', 'Beşinci', 'Onuncu', 'Yirminci'],
        'Onuncu',
        '10 kişide sonuncu = 10. = Onuncu!'
      ),
      createFillBlank(
        '7 elmada sonuncu elma = ___.',
        ['7', 'yedinci', 'Yedinci'],
        '7 elma varsa sonuncusu 7. elmadır!'
      ),
      createMultipleChoice(
        '8 öğrenci sırada bekliyor. Sonuncu kaçıncı?',
        ['7.', '8.', '9.', '6.'],
        '8.',
        '8 öğrenci = Sonuncu 8. sıradadır!'
      ),
      createFillBlank(
        '6 kitapta sonuncu = ___.  kitap',
        ['6', 'altıncı', 'Altıncı'],
        '6 kitapta sonuncu = 6. kitap!'
      ),

      // Ortadaki Kavramı
      createMultipleChoice(
        '5 kişide ortadaki kaçıncı?',
        ['2.', '3.', '4.', '5.'],
        '3.',
        '1,2,[3],4,5 - 3. kişi ortada! 2 önünde, 2 arkasında.'
      ),
      createMultipleChoice(
        '7 kişide ortadaki kaçıncı?',
        ['3.', '4.', '5.', '6.'],
        '4.',
        '1,2,3,[4],5,6,7 - 4. kişi ortada! 3 önünde, 3 arkasında.'
      ),
      createMultipleChoice(
        '9 kişide ortadaki kaçıncı?',
        ['4.', '5.', '6.', '3.'],
        '5.',
        '1,2,3,4,[5],6,7,8,9 - 5. ortada! 4 önünde, 4 arkasında.'
      ),
      createFillBlank(
        '3 kişide ortadaki = ___.',
        ['2', 'ikinci', 'İkinci'],
        '1,[2],3 - İkinci kişi ortada!'
      ),
      createMultipleChoice(
        '11 kişide ortadaki kaçıncı?',
        ['5.', '6.', '7.', '4.'],
        '6.',
        '1,2,3,4,5,[6],7,8,9,10,11 - 6. ortada! 5 önünde, 5 arkasında.'
      ),

      // Haftanın Günleri
      createMultipleChoice(
        'Haftanın 1. günü hangisi?',
        ['Pazar', 'Pazartesi', 'Cumartesi', 'Salı'],
        'Pazartesi',
        'Pazartesi = Haftanın 1. günü = Birinci gün!'
      ),
      createMultipleChoice(
        'Haftanın 3. günü hangisi?',
        ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe'],
        'Çarşamba',
        'Pazartesi(1), Salı(2), Çarşamba(3)!'
      ),
      createFillBlank(
        'Cuma haftanın ___. günü',
        ['5', 'beşinci', 'Beşinci'],
        'Pzt(1), Sal(2), Çar(3), Per(4), Cum(5) = 5. gün!'
      ),
      createMultipleChoice(
        'Pazar haftanın kaçıncı günü?',
        ['5.', '6.', '7.', '1.'],
        '7.',
        'Pazar = Haftanın 7. günü = Yedinci gün = Sonuncu gün!'
      ),
      createMultipleChoice(
        'Cumartesi haftanın kaçıncı günü?',
        ['5.', '6.', '7.', '4.'],
        '6.',
        'Pzt(1), Sal(2), Çar(3), Per(4), Cum(5), Cmt(6) = 6. gün!'
      ),
      createFillBlank(
        'Salı haftanın ___. günü',
        ['2', 'ikinci', 'İkinci'],
        'Pazartesi(1), Salı(2) = 2. gün!'
      ),
      createMultipleChoice(
        'Perşembe haftanın kaçıncı günü?',
        ['3.', '4.', '5.', '6.'],
        '4.',
        'Pzt(1), Sal(2), Çar(3), Per(4) = 4. gün!'
      ),

      // Yılın Ayları
      createMultipleChoice(
        'Ocak yılın kaçıncı ayı?',
        ['1.', '2.', '11.', '12.'],
        '1.',
        'Ocak = Yılın 1. ayı = Birinci ay!'
      ),
      createFillBlank(
        'Mart yılın ___. ayı',
        ['3', 'üçüncü', 'Üçüncü'],
        'Ocak(1), Şubat(2), Mart(3) = 3. ay!'
      ),
      createMultipleChoice(
        'Aralık yılın kaçıncı ayı?',
        ['1.', '10.', '11.', '12.'],
        '12.',
        'Aralık = Yılın 12. ayı = Sonuncu ay!'
      ),
      createFillBlank(
        'Mayıs yılın ___. ayı',
        ['5', 'beşinci', 'Beşinci'],
        'Ocak(1)...Mayıs(5) = 5. ay!'
      ),

      // Sıra Sayısı vs Sayma Sayısı
      createMultipleChoice(
        'Aşağıdakilerden hangisi sıra sayısıdır?',
        ['5 elma', 'Beşinci', '5 tane', '5 adet'],
        'Beşinci',
        '"Beşinci" sıra sayısıdır. Diğerleri miktar (sayma) sayısı.'
      ),
      createMultipleChoice(
        '"5. sıra" ile "5 sıra" arasındaki fark nedir?',
        ['Fark yok', '5. = beşinci sıra, 5 = beş adet sıra', '5. daha büyük', '5 daha büyük'],
        '5. = beşinci sıra, 5 = beş adet sıra',
        '"5. sıra" konum, "5 sıra" miktar belirtir!'
      ),
      createMultipleChoice(
        'Hangisi doğru yazılmış?',
        ['3 sınıf', '3. sınıf', '3: sınıf', '3, sınıf'],
        '3. sınıf',
        'Sıra sayısı olduğu için nokta konmalı: 3. sınıf!'
      ),

      // Yazım ve Okuma
      createMultipleChoice(
        'Dokuzuncu nasıl yazılır?',
        ['9.', '9', 'IX', '90'],
        '9.',
        'Dokuzuncu = 9. (nokta ile yazılır)'
      ),
      createFillBlank(
        '"Birinci" rakamla = ___',
        ['1.'],
        'Birinci = 1. şeklinde yazılır!'
      ),
      createFillBlank(
        '"Altıncı" rakamla = ___',
        ['6.'],
        'Altıncı = 6. şeklinde yazılır!'
      ),

      // Uygulama Soruları
      createMultipleChoice(
        '7 kişilik kuyrukta 4. sıradaki için hangisi doğru?',
        ['En önde', 'En sonda', 'Ortada', 'Hiçbiri'],
        'Ortada',
        '7 kişide: 1,2,3,[4],5,6,7 - 4. kişi tam ortada!'
      ),
      createMultipleChoice(
        'Bir yarışta 10 kişi koşuyor. Sonuncu kaçıncı?',
        ['1.', '5.', '9.', '10.'],
        '10.',
        '10 kişi = Sonuncu 10. sıradadır!'
      ),
      createFillBlank(
        'Başparmak elin ___. parmağı',
        ['1', 'birinci', 'Birinci'],
        'Başparmak = Elin 1. (birinci) parmağı!'
      ),
      createMultipleChoice(
        '4 mevsimde sonuncu hangisi?',
        ['İlkbahar', 'Yaz', 'Sonbahar', 'Kış'],
        'Kış',
        'İlkbahar(1), Yaz(2), Sonbahar(3), Kış(4) = Kış sonuncu!'
      ),
      createFillBlank(
        '8 basamaklı merdivende son basamak = ___.',
        ['8', 'sekizinci', 'Sekizinci'],
        '8 basamak = Son basamak 8. basamaktır!'
      )
    ],

    summary: 'Sıra sayılarını (1.-10. arası birinci, ikinci, üçüncü...) öğrendik. Sonuncu = en sondaki, ortadaki = tam ortadaki kavramlarını anladık. Sıra sayıları nokta ile yazılır: 1. 2. 3.',
    nextTopicPreview: 'Sonraki konuda sayıları karşılaştırmayı (büyük-küçük, az-çok, eşit) öğreneceğiz!'
  }
};
