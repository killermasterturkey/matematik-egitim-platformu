// 1. SINIF - TEMA 2 - KONU 2: Kütle ve Tartma
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu2KutleTartma: Topic = {
  id: 'kutle-tartma',
  title: 'Kütle ve Tartma',
  description: 'Ağır, hafif kavramları ve terazi ile tartma',
  emoji: '⚖️',
  duration: '45 dk',
  difficulty: 1,
  keywords: ['ağır', 'hafif', 'tartma', 'kütle', 'terazi', 'denge'],
  objectives: [
    'Kütle kavramını anlar',
    'Ağır ve hafif kavramlarını ayırt eder',
    'Terazi kullanarak karşılaştırma yapar',
    'Standart olmayan araçlarla tartım yapar',
    'Tahmin ve tartma işlemi arasındaki farkı kavrar'
  ],
  content: {
    introduction: `Merhaba küçük tartı ustası! ⚖️

Bazı şeyler ağır, bazıları hafif! Bir taş kaldırmak zor, bir tüy kaldırmak kolay! Bu farkı hissedebiliyorsun değil mi?

Peki hangi nesnenin daha ağır olduğunu nasıl anlarız? İşte bugün bunu öğreneceğiz!

Terazi gibi düşünmeye hazır mısın? Ağır ve hafif dünyasına yolculuğa başlayalım! 🎯`,

    motivationQuote: 'Tartarak karşılaştırmayı öğrenelim! Her şeyin bir ağırlığı var! ⚖️',

    funFacts: [
      'Mavi balina 150 ton ağırlığındadır - 30 fil kadar! 🐋',
      'Bir kuş tüyü sadece birkaç gram ağırlığındadır! 🪶',
      'Ay\'da olsaydın 6 kat daha hafif olurdun! 🌙',
      'Bir fil günde 200 kg yemek yer! 🐘',
      'Dünyanın en hafif kuşu arı sinek kuşudur - 2 gram! 🐦',
      'İnsan vücudunun yaklaşık %60\'ı sudur! 💧',
      'Bir sivrisinek sadece 2.5 miligram ağırlığındadır! 🦟',
      'Dünyanın en ağır meyvesi cempedak - 40 kg olabilir! 🍈'
    ],

    steps: [
      createStep(
        'Kütle Nedir?',
        `Kütle, bir nesnenin ne kadar madde içerdiğini gösterir! Günlük hayatta buna "ağırlık" da deriz.

⚖️ KÜTLENİN TANIMI:
• Bir şeyin ne kadar "madde" içerdiği
• Ne kadar "ağır" olduğu
• Tartıyla ölçtüğümüz miktar

📦 KÜTLE ÖRNEKLERİ:
• 🪨 Taş → ÇOK kütle (ağır)
• 📚 Kitap → ORTA kütle
• 🪶 Tüy → AZ kütle (hafif)
• ☁️ Pamuk → ÇOK AZ kütle

🎯 ÖNEMLİ BİLGİ:
Kütle her yerde aynıdır! Dünya'da da Ay'da da aynı kütleye sahipsin. Ama ağırlık farklı hissedilir (Ay'da daha hafif hissedersin!)`,
        'Kütle bir nesnenin içindeki madde miktarını gösterir.',
        {
          visual: `Kütle Örnekleri:
🪨 Taş = ÇOK KÜTLE (Ağır hissederiz)
    [■■■■■■■■■■]

📚 Kitap = ORTA KÜTLE
    [■■■■■■]

🪶 Tüy = AZ KÜTLE (Hafif hissederiz)
    [■]

⚖️ Kütle = Madde miktarı!`,
          examples: [
            createExample(
              'Hangisinde daha çok kütle var: taş mı tüy mü?',
              'Taş',
              'Taş daha ağır çünkü içinde daha çok madde var!',
              '🪨 >> 🪶 (Taş çok daha fazla kütle)',
              ['Taşı kaldırmak zor', 'Tüyü kaldırmak çok kolay', 'Taş daha ağır', 'Cevap: Taş']
            ),
            createExample(
              'Bir elma ile bir karpuz karşılaştırıldığında hangisinin kütlesi fazla?',
              'Karpuz',
              'Karpuz çok daha büyük ve içinde çok daha fazla madde var!',
              '🍎 < 🍉 (Karpuz çok ağır!)'
            ),
            createExample(
              'Boş bir kutu ile dolu bir kutu hangisi ağır?',
              'Dolu kutu',
              'Dolu kutuda daha çok madde var, o yüzden daha ağır!',
              '📦(boş) < 📦(dolu)'
            ),
            createExample(
              'Hava kütle içerir mi?',
              'Evet, çok az',
              'Hava da maddedir, ama çok hafiftir!',
              '💨 = Çok az kütle'
            ),
            createExample(
              'Neden taşı kaldırmak tüyü kaldırmaktan zor?',
              'Taşın kütlesi fazla',
              'Kütle ne kadar çok olursa, kaldırmak o kadar zor!',
              'Çok kütle → Zor kaldır'
            ),
            createExample(
              'Bir bardak su ile bir bardak bal hangisi ağır?',
              'Bal',
              'Bal sudan daha yoğun, aynı miktarda olsa bile bal daha ağır!',
              '🍯 > 💧 (Bal daha ağır)'
            )
          ]
        }
      ),

      createStep(
        'Ağır ve Hafif Kavramı',
        `İki nesneyi karşılaştırırken AĞIR ve HAFİF kavramlarını kullanırız.

🏋️ AĞIR NEDİR?
• Kaldırması ZOR olan
• Elimizi aşağı çeken
• Çok kütle içeren

🪶 HAFİF NEDİR?
• Kaldırması KOLAY olan
• Elimizi aşağı çekmeyen
• Az kütle içeren

📋 NASIL ANLARIZ?
1. İki nesneyi ellerine al
2. Hangisi elini daha çok aşağı çekiyor?
3. Çok çeken = AĞIR
4. Az çeken = HAFİF

🎯 KARŞILAŞTIRMA ÖRNEKLERİ:
• 🍉 Karpuz AĞIR ↔ 🍓 Çilek HAFİF
• 📚 Kitap AĞIR ↔ 📄 Kağıt HAFİF
• 🪨 Taş AĞIR ↔ ☁️ Pamuk HAFİF`,
        'Ağır nesneyi kaldırmak zor, hafif nesneyi kaldırmak kolay!',
        {
          visual: `Ağır vs Hafif Karşılaştırma:

         AĞIR              HAFİF
         ⬇️⬇️              ⬆️
🏋️ Kaldırması zor    🪶 Kaldırması kolay
   Eli aşağı çeker      Eli çekmez

📊 Örnekler:
🍉 Karpuz  ←→  🍓 Çilek
   AĞIR           HAFİF

📚 Kitap   ←→  📄 Kağıt
   AĞIR           HAFİF

🐘 Fil     ←→  🐜 Karınca
   AĞIR           HAFİF`,
          examples: [
            createExample(
              'Kitap mı tüy mü ağır?',
              'Kitap',
              'Kitap birçok sayfadan oluşur, tüy ise neredeyse hiç ağırlık hissettirmez!',
              '📚 >> 🪶 (Kitap çok ağır)',
              ['Kitabı eline al', 'Tüyü eline al', 'Kitap elini aşağı çeker', 'Cevap: Kitap ağır']
            ),
            createExample(
              'Fil mi karınca mı hafif?',
              'Karınca',
              'Karınca minicik ve çok hafif, fil ise dünyanın en ağır kara hayvanlarından!',
              '🐘 >>>> 🐜 (Karınca çok hafif)'
            ),
            createExample(
              'Araba mı bisiklet mi ağır?',
              'Araba',
              'Araba metalden yapılmış büyük bir araç, bisiklet çok daha hafif!',
              '🚗 >>> 🚲 (Araba ağır)'
            ),
            createExample(
              'Balon mu top mu hafif?',
              'Balon',
              'Balon içi hava dolu, top ise daha ağır malzemeden!',
              '🎈 < ⚽ (Balon hafif)'
            ),
            createExample(
              'Demir çivi mi plastik kalem mi ağır?',
              'Demir çivi',
              'Demir çok ağır bir maddedir, plastik daha hafif!',
              '🔩 > 🖊️ (Demir ağır)'
            ),
            createExample(
              'Bir kova su mu bir kova kum mu ağır?',
              'Bir kova kum',
              'Kum sudan daha yoğun, aynı hacimde kum daha ağır!',
              '🪣(kum) > 🪣(su)'
            )
          ]
        }
      ),

      createStep(
        'Ellerimizle Karşılaştırma',
        `Ellerimizi doğal bir terazi gibi kullanabiliriz! 🤲

📋 ELLERİMİZLE TARTMA ADIMLARI:
1. İki elini önüne uzat
2. Avuçlarını yukarı çevir
3. Sol eline bir nesne koy
4. Sağ eline başka bir nesne koy
5. Hangi el aşağı iniyor?

⬇️ AŞAĞI İNEN EL = AĞIR nesne tutuyor
⬆️ YUKARI KALAN EL = HAFİF nesne tutuyor
→← AYNI SEVIYEDE = EŞİT ağırlık

💡 İPUÇLARI:
• Gözlerini kapat, daha iyi hissedersin
• Kollarını rahat tut
• Aynı anda iki nesneyi karşılaştır
• Sabırlı ol, farkı hisset`,
        'Ellerini terazi gibi kullanarak karşılaştırma yapabilirsin!',
        {
          visual: `Elle Tartma Örneği:

        Sol El        Sağ El
          🍎            🍋
          ⬇️            ⬆️
        (Ağır)       (Hafif)

Sonuç: Elma limondan AĞIR!

Dengeli Durum:
        Sol El        Sağ El
          🍎            🍎
          ─             ─
       (Aynı)        (Aynı)

Sonuç: İki elma EŞİT ağırlıkta!`,
          tip: 'İki elini aynı hizada tut ve gözlerini kapat, farkı daha iyi hissedersin!',
          examples: [
            createExample(
              'Sol elde elma, sağ elde üzüm. Hangisi ağır?',
              'Elma',
              'Elma üzüm tanesinden çok daha ağırdır, sol el aşağı iner!',
              'Sol: 🍎 ⬇️ | Sağ: 🍇 ⬆️',
              ['Elmayı sol eline koy', 'Üzümü sağ eline koy', 'Sol el aşağı iniyor', 'Elma daha ağır!']
            ),
            createExample(
              'İki elinde de aynı şeyleri hissediyorsan?',
              'Eşit ağırlıkta',
              'İki el aynı seviyede kalırsa nesneler eşit ağırlıkta demektir!',
              'Sol = Sağ → EŞİT'
            ),
            createExample(
              'Sol elde kalem, sağ elde silgi. Ne olur?',
              'Duruma göre değişir',
              'Silginin boyutuna göre değişir, ama genellikle silgi daha ağır!',
              '✏️ ? 🧲 → Karşılaştır!'
            ),
            createExample(
              'Neden gözleri kapatmak yardımcı olur?',
              'Daha iyi hissetmek için',
              'Görmeden sadece hissetmeye odaklanırız, böylece farkı daha iyi anlarız!',
              '👁️ kapat → 🤲 hisset!'
            ),
            createExample(
              'Sol el çok aşağıda, sağ el yukarıda. Bu ne demek?',
              'Sol eldeki nesne çok ağır',
              'Sol el ne kadar aşağıdaysa, oradaki nesne o kadar ağır demektir!',
              'Sol ⬇️⬇️ = Çok ağır!'
            ),
            createExample(
              'Her iki el de neredeyse aynı seviyede ama sol biraz aşağıda?',
              'Sol biraz daha ağır',
              'Küçük bir fark bile olsa, aşağıdaki el ağır nesneyi tutuyor!',
              'Sol ↘️ = Biraz ağır'
            )
          ]
        }
      ),

      createStep(
        'Terazi ile Tartma',
        `Terazi, nesneleri karşılaştırmak için kullanılan özel bir araçtır! ⚖️

📋 TERAZİNİN PARÇALARI:
• İki KEFE (nesneleri koyduğumuz yer)
• KIRIŞ (ortada denge noktası)
• AYAK (teraziyi tutan kısım)

📋 TERAZİ NASIL ÇALIŞIR?
1. Bir kefeye bir nesne koy
2. Diğer kefeye başka bir nesne koy
3. Hangi taraf aşağı indi?

⚖️ TERAZİ KURALLARI:
↙️ AŞAĞI inen taraf = AĞIR nesne
↗️ YUKARI kalan taraf = HAFİF nesne
━━ DÜZ duruyor = EŞİT ağırlık

💡 ÖNEMLİ: Terazi boşken dengede durmalı!`,
        'Terazinin ağır olan tarafı aşağıya eğilir.',
        {
          visual: `Terazi Çalışma Prensibi:

Ağır olan aşağı iner:
      ╱━━━━━━━━━━━━╲
     🍎              🍋
     ↓               ↑
   AĞIR           HAFİF

Eşit ağırlıkta denge:
      ╱━━━━━━╲
     🍎      🍎
     ━━ DENGE ━━
   EŞİT AĞIRLIK

Boş terazi:
      ╱━━━━━━╲
     ○        ○
     DENGEDE`,
          explanation: 'Terazi bize hangi nesnenin daha ağır olduğunu gösterir!',
          examples: [
            createExample(
              'Terazide sol taraf aşağıda. Hangi taraf ağır?',
              'Sol taraf',
              'Aşağıdaki taraf her zaman daha ağırdır!',
              '↙️ Sol = AĞIR | ↗️ Sağ = HAFİF'
            ),
            createExample(
              'Terazi dengede. Bu ne anlama gelir?',
              'İki taraf eşit ağırlıkta',
              'Terazi düz duruyorsa iki taraftaki nesneler eşit ağırlıkta!',
              '━━━ = EŞİT ağırlık',
              ['Terazi düz duruyor', 'Hiçbir taraf aşağı inmiyor', 'İki taraf eşit', 'Cevap: Eşit ağırlık']
            ),
            createExample(
              'Terazi boşken eğik duruyorsa ne yaparız?',
              'Teraziyi düzeltiriz',
              'Terazi boşken dengede olmalı, yoksa ölçüm yanlış olur!',
              'Önce denge → Sonra ölç'
            ),
            createExample(
              'Terazinin bir tarafına hiç nesne koymazsam?',
              'Nesne olan taraf aşağı iner',
              'Bir tarafta nesne varsa, o taraf ağır olur!',
              '🍎 ↓ | ○ ↑'
            ),
            createExample(
              'Sağ kefe çok aşağıda. Sol kefede ne var?',
              'Hafif bir nesne veya hiçbir şey',
              'Sağ ağır olduğu için sol taraf yukarı kalkmış!',
              'Sol ↗️ (hafif) | Sağ ↙️ (ağır)'
            ),
            createExample(
              'Neden terazi kullanırız?',
              'Doğru karşılaştırma için',
              'Elle karşılaştırma yanıltıcı olabilir, terazi daha kesin sonuç verir!',
              'Terazi = Kesin sonuç!'
            )
          ]
        }
      ),

      createStep(
        'Standart Olmayan Ölçülerle Tartma',
        `Terazi ile tartarken farklı nesneleri ölçü birimi olarak kullanabiliriz! 🎯

📦 KULLANILABILECEK NESNELER:
• 🪙 Bozuk paralar (1 TL, 50 kuruş)
• 🔮 Bilyeler
• 🧊 Küpler
• 🪨 Küçük taşlar
• 📎 Ataçlar

📋 NASIL TARTARIZ?
1. Bir kefeye ölçmek istediğin nesneyi koy
2. Diğer kefeye bozuk para/bilye koy
3. Terazi dengelenene kadar ekle
4. Kaç tane koyduğunu say
5. Sonucu yaz!

🎯 ÖRNEK SONUÇLAR:
• 🍎 Elma = 5 bozuk para ağırlığında
• ✏️ Kalem = 2 bilye ağırlığında
• 📕 Kitap = 10 küp ağırlığında

⚠️ DİKKAT: Herkesin kullandığı birim farklı olabilir!`,
        'Bozuk para, bilye gibi nesnelerle ağırlık ölçüp karşılaştırabiliriz.',
        {
          visual: `Standart Olmayan Tartım:

      ╱━━━━━━━━━━━━╲
     🍎         🪙🪙🪙🪙
        DENGE!
Elma = 4 bozuk para ağırlığında!

      ╱━━━━━━━━━━━━╲
     📕         🔮🔮🔮🔮🔮
        DENGE!
Kitap = 5 bilye ağırlığında!

      ╱━━━━━━━━━━━━╲
     ✏️         📎📎📎
        DENGE!
Kalem = 3 ataç ağırlığında!`,
          examples: [
            createExample(
              'Elma 5 bozuk para, armut 3 bozuk para. Hangisi ağır?',
              'Elma',
              '5 > 3 olduğu için elma daha ağır!',
              '🍎(5🪙) > 🍐(3🪙)',
              ['Elma: 5 bozuk para', 'Armut: 3 bozuk para', '5 > 3', 'Elma daha ağır!']
            ),
            createExample(
              'Kalem 2 bilye, silgi 4 bilye ağırlığında. Hangisi hafif?',
              'Kalem',
              '2 < 4 olduğu için kalem daha hafif!',
              '✏️(2🔮) < 🧲(4🔮)'
            ),
            createExample(
              'Kitap 8 bozuk para. Defter 8 bozuk para. Hangisi ağır?',
              'Eşit ağırlıkta',
              'İkisi de 8 bozuk para, yani eşit ağırlıkta!',
              '📚(8) = 📓(8) → Eşit!'
            ),
            createExample(
              'Ali elmayı 6 bilye ile tarttı. Ayşe aynı elmayı 4 bozuk para ile tarttı. Neden farklı?',
              'Ölçü birimleri farklı',
              'Bilye ve bozuk para farklı ağırlıkta, bu yüzden sayılar farklı!',
              '🍎 = 6 bilye = 4 para (farklı birim)'
            ),
            createExample(
              'Bir nesneyi 10 ataç dengeledi. Bu ağır mı hafif mi?',
              'Duruma göre değişir',
              '10 ataç orta ağırlık, ataçların ağırlığına göre değişir!',
              '10 ataç = Orta ağırlık'
            ),
            createExample(
              'Neden "standart olmayan" deniyor?',
              'Herkes farklı birim kullanabilir',
              'Herkesin bilyesi, parası farklı ağırlıkta olabilir, bu yüzden standart değil!',
              'Farklı birim → Farklı sonuç'
            )
          ]
        }
      ),

      createStep(
        'Tahmin ve Tartma',
        `Tartmadan önce TAHMİN yapmak önemli bir beceridir! 🎯

📋 TAHMİN ADIMLARI:
1. İki nesneye dikkatlice bak
2. Boyutlarını düşün
3. Hangisi ağır görünüyor? Tahmin et!
4. Terazi ile tart
5. Tahmininle karşılaştır

⚡ DİKKAT - SÜRPRİZLER OLABİLİR!
• BÜYÜK olan her zaman AĞIR değildir!
• 🎈 Balon büyük ama çok hafif!
• 🔩 Vida küçük ama ağır olabilir!

🎯 TAHMİN DEĞERLENDİRME:
✅ Tahmin = Tartım → MÜKEMMEL!
⚠️ Tahmin ≈ Tartım → İYİ!
❌ Tahmin ≠ Tartım → PRATİK YAP!`,
        'Bazen tahminimiz yanlış çıkabilir, tartarak doğruyu öğreniriz!',
        {
          visual: `Tahmin vs Tartım:
┌──────────────────────────────┐
│ Soru: Hangisi ağır?          │
│ 🎈 Balon - 🔮 Bilye          │
│                              │
│ TAHMİN: Balon büyük,         │
│         balon ağır olmalı!   │
│                              │
│ TARTIM: Bilye ağır çıktı!    │
│                              │
│ 🎓 DERS: Büyük ≠ Ağır!       │
└──────────────────────────────┘

┌──────────────────────────────┐
│ Soru: Hangisi ağır?          │
│ ☁️ Pamuk - 🪨 Taş            │
│                              │
│ TAHMİN: Taş ağır!            │
│ TARTIM: Taş ağır!            │
│                              │
│ 🎓 DERS: Tahmin doğru! ✓     │
└──────────────────────────────┘`,
          tip: 'Boyut aldatıcı olabilir, tartmak en doğru sonucu verir!',
          examples: [
            createExample(
              'Tahmin: Pamuk ağır. Tartım: Taş ağır. Ne öğrendik?',
              'Büyük görünen her zaman ağır değil',
              'Pamuk büyük görünse de taş çok daha ağırdır!',
              '☁️ Pamuk (Hafif) << 🪨 Taş (Ağır)'
            ),
            createExample(
              'Neden tartmak önemli?',
              'Kesin sonuç için',
              'Tahmin yanıltabilir, tartmak kesin sonuç verir!',
              'Tahmin = Belki | Tartım = Kesin!'
            ),
            createExample(
              'Tahmin: Elma ağır. Tartım: Elma ağır. Bu ne anlama gelir?',
              'Tahmin doğru çıktı!',
              'Bazen tahminimiz doğru olur, bu çok güzel!',
              'Tahmin ✓ = Tartım ✓ → Harika!'
            ),
            createExample(
              'Bir top ile bir bilye. Tahmin yapmadan önce ne yapmalıyız?',
              'Dikkatlice bakmalıyız',
              'Nesnelerin boyutunu, malzemesini düşünmeliyiz!',
              'Bak → Düşün → Tahmin et → Tart'
            ),
            createExample(
              'Tahmin yeteneğimi nasıl geliştiririm?',
              'Pratik yaparak',
              'Ne kadar çok tahmin ve tartım yaparsan, o kadar iyi tahmin edersin!',
              'Çok pratik → İyi tahmin!'
            ),
            createExample(
              'Arkadaşımla aynı nesneler için farklı tahmin yaptık. Kim haklı?',
              'Tartarak öğreniriz',
              'Tahmin kişisel, tartım kesin sonuç verir!',
              'Tartım = Gerçek sonuç!'
            )
          ]
        }
      ),

      createStep(
        'Karşılaştırma ve Sıralama',
        `Birden fazla nesneyi ağırlıklarına göre SIRALAYABILIRIZ! 📊

📋 SIRALAMA ADIMLARI:
1. Nesneleri ikişer ikişer karşılaştır
2. Ağır olanları ve hafif olanları belirle
3. En hafiften en ağıra doğru sırala

🎯 SIRALAMA TÜRLERİ:
📈 HAFİFTEN AĞIRA: En hafif → ... → En ağır
📉 AĞIRDAN HAFİFE: En ağır → ... → En hafif

📋 ÖRNEK SIRALAMA:
Nesneler: 🍎 Elma, 🍇 Üzüm, 🍉 Karpuz

Karşılaştırma:
• Elma > Üzüm (elma ağır)
• Karpuz > Elma (karpuz ağır)
• Karpuz > Üzüm (karpuz ağır)

Sıralama (hafiften ağıra):
🍇 Üzüm → 🍎 Elma → 🍉 Karpuz`,
        'Nesneleri ağırlıklarına göre sıralayabiliriz!',
        {
          visual: `Sıralama Örneği:

Nesneler: 📚 Kitap, 📄 Kağıt, 📕 Defter

Tartım Sonuçları:
• 📚 Kitap = 8 bozuk para
• 📄 Kağıt = 1 bozuk para
• 📕 Defter = 4 bozuk para

Sıralama (Hafiften Ağıra):
📄 (1) → 📕 (4) → 📚 (8)
Kağıt → Defter → Kitap

Sıralama (Ağırdan Hafife):
📚 (8) → 📕 (4) → 📄 (1)
Kitap → Defter → Kağıt`,
          examples: [
            createExample(
              'Tüy, taş, kalem. Hafiften ağıra sırala.',
              'Tüy → Kalem → Taş',
              'Tüy en hafif, taş en ağır!',
              '🪶 → ✏️ → 🪨'
            ),
            createExample(
              'Fil, karınca, kedi. Ağırdan hafife sırala.',
              'Fil → Kedi → Karınca',
              'Fil en ağır, karınca en hafif!',
              '🐘 → 🐱 → 🐜'
            ),
            createExample(
              'Elma 5, armut 3, muz 4 bozuk para. Sıralama?',
              'Armut → Muz → Elma (hafiften ağıra)',
              '3 < 4 < 5 sıralaması!',
              '🍐(3) → 🍌(4) → 🍎(5)'
            ),
            createExample(
              '3 kitabı sıralamak için kaç karşılaştırma gerekir?',
              'En az 3 karşılaştırma',
              'Her ikilinin karşılaştırılması gerekir!',
              'A-B, B-C, A-C karşılaştır'
            ),
            createExample(
              'Üç nesne aynı ağırlıkta. Sıralama nasıl olur?',
              'Herhangi bir sırada olabilir',
              'Eşit ağırlıktakiler aynı sırada sayılır!',
              'A = B = C → Eşit sıra'
            ),
            createExample(
              'Neden sıralama önemli?',
              'Karşılaştırmayı kolaylaştırır',
              'Sıralı düşünmek, nesneleri daha iyi anlamamızı sağlar!',
              'Sıralama = Düzenli düşünme'
            )
          ]
        }
      ),

      createStep(
        'Pratik Zamanı! ⚖️',
        `Harika gidiyorsun! Şimdi öğrendiklerini evde uygula!

🎮 EVDE YAPABİLECEĞİN DENEYLER:

📋 DENEY 1: Meyve Tartma
1. Mutfaktan farklı meyveler al
2. Ellerinle karşılaştır
3. En ağırı ve en hafifi bul
4. Sırala!

📋 DENEY 2: Oyuncak Tartma
1. Oyuncaklarını topla
2. İkişer ikişer karşılaştır
3. Ağırdan hafife sırala

📋 DENEY 3: Bozuk Para ile Tartma
1. Basit bir terazi yap (veya mutfak terazisi)
2. Küçük nesneleri tart
3. Kaç bozuk para ağırlığında yaz

📝 TARTIM GÜNLÜĞÜ:
| Nesne    | Tahmin  | Tartım  | Sonuç   |
|----------|---------|---------|---------|
| Elma     | Ağır    | Ağır    | Doğru!  |
| Balon    | Ağır    | Hafif   | Yanlış! |`,
        'Tartma ustası olmak için her gün pratik yap!',
        {
          visual: `TARTMA ÖZETİ:
┌─────────────────────────────────┐
│ 🏋️ AĞIR = Kaldırması ZOR       │
│ 🪶 HAFİF = Kaldırması KOLAY     │
│                                 │
│ ⚖️ TERAZİ KURALLARI:           │
│ ↙️ Aşağı inen = AĞIR           │
│ ↗️ Yukarı kalan = HAFİF        │
│ ━━ Düz duran = EŞİT            │
│                                 │
│ 📏 STANDART OLMAYAN BİRİMLER:  │
│ 🪙 Bozuk para                   │
│ 🔮 Bilye                        │
│ 📎 Ataç                         │
│                                 │
│ 🎯 TAHMİN → TART → ÖĞREN!      │
└─────────────────────────────────┘`,
          examples: [
            createExample(
              'Hangi araç ağırlık ölçmez?',
              'Cetvel',
              'Cetvel uzunluk ölçer, terazi ağırlık ölçer!',
              '📏 = Uzunluk | ⚖️ = Ağırlık'
            ),
            createExample(
              'Evde terazi yoksa ne yapabilirim?',
              'Ellerini kullan veya basit terazi yap',
              'İki bardağı bir askıya asarak basit terazi yapabilirsin!',
              '🤲 Elle tart veya ⚖️ terazi yap'
            ),
            createExample(
              'En çok hangi nesneyi tartmak eğlenceli?',
              'Meyveler!',
              'Meyveler farklı ağırlıkta, karşılaştırmak çok eğlenceli!',
              '🍎🍊🍋🍇 → Tart ve karşılaştır!'
            ),
            createExample(
              'Tartım sonuçlarını nereye yazmalıyım?',
              'Bir deftere veya kağıda',
              'Tartım günlüğü tutmak öğrenmeyi pekiştirir!',
              '📓 Tartım günlüğü tut!'
            ),
            createExample(
              'Bugün ne öğrendik?',
              'Ağır-hafif kavramını ve tartmayı!',
              'Terazi kullanmayı, tahmin etmeyi ve sıralamayı öğrendik!',
              '⚖️ Tartma uzmanı olduk!'
            ),
            createExample(
              'Sonraki konuda ne öğreneceğiz?',
              'Toplama işlemi!',
              'Sayıları birleştirmeyi öğreneceğiz!',
              '➕ Toplama geliyor!'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // Kütle kavramı soruları (1-8)
      createMultipleChoice(
        'Hangisi ağır?',
        ['Tüy', 'Taş', 'Kağıt', 'Balon'],
        'Taş',
        'Taş en ağır olandır!'
      ),
      createFillBlank(
        'Kütle bir nesnenin ne kadar ___ içerdiğini gösterir',
        ['madde'],
        'Kütle = Madde miktarı!'
      ),
      createMultipleChoice(
        'Hangisinin kütlesi en az?',
        ['Kitap', 'Masa', 'Tüy', 'Taş'],
        'Tüy',
        'Tüy en hafif, kütlesi en az!'
      ),
      createFillBlank(
        'Ağır nesneyi kaldırmak ___',
        ['zor'],
        'Ağır = Kaldırması zor!'
      ),
      createMultipleChoice(
        'Karpuz mu çilek mi ağır?',
        ['Karpuz', 'Çilek', 'Eşit', 'Belli değil'],
        'Karpuz',
        'Karpuz çok ağır, çilek hafif!'
      ),
      createFillBlank(
        'Hafif nesneyi kaldırmak ___',
        ['kolay'],
        'Hafif = Kolay kaldırılır!'
      ),
      createMultipleChoice(
        'Fil mi karınca mı daha ağır?',
        ['Fil', 'Karınca', 'Eşit', 'Belli değil'],
        'Fil',
        'Fil dünyanın en ağır kara hayvanlarından!'
      ),
      createFillBlank(
        'Fil karıncadan daha ___',
        ['ağır'],
        'Fil çok ağır!'
      ),

      // Terazi soruları (9-16)
      createMultipleChoice(
        'Terazi dengede ise?',
        ['Sol ağır', 'Sağ ağır', 'Eşit ağırlık', 'Bozuk terazi'],
        'Eşit ağırlık',
        'Denge = eşit ağırlık!'
      ),
      createFillBlank(
        'Terazi ağır tarafa ___ eğilir',
        ['aşağı'],
        'Ağır taraf aşağıya iner!'
      ),
      createMultipleChoice(
        'Terazinin sol tarafı aşağıda. Hangi taraf ağır?',
        ['Sol', 'Sağ', 'Eşit', 'Bilinmiyor'],
        'Sol',
        'Aşağıya inen taraf ağır!'
      ),
      createFillBlank(
        'Terazinin hafif tarafı ___ kalır',
        ['yukarı', 'yukarıda'],
        'Hafif taraf yukarı kalkar!'
      ),
      createMultipleChoice(
        'Terazinin iki tarafı da düz ise?',
        ['Sol ağır', 'Sağ ağır', 'Eşit', 'Boş'],
        'Eşit',
        'Düz terazi = eşit ağırlık!'
      ),
      createFillBlank(
        'İki nesne aynı ağırlıkta ise terazi ___',
        ['dengede', 'düz'],
        'Eşit ağırlık = denge!'
      ),
      createMultipleChoice(
        'Terazi ne ölçer?',
        ['Uzunluk', 'Ağırlık', 'Zaman', 'Renk'],
        'Ağırlık',
        'Terazi ağırlık ölçer!'
      ),
      createFillBlank(
        'Terazinin hafif tarafına nesne eklersek terazi ___',
        ['dengelenir', 'dengede kalır'],
        'Hafif tarafa ekleyince denge sağlanır!'
      ),

      // Standart olmayan ölçüm soruları (17-24)
      createMultipleChoice(
        'Hangisi standart olmayan ölçü aracıdır?',
        ['Terazi', 'Bozuk para', 'Kilogram', 'Gram'],
        'Bozuk para',
        'Bozuk para standart olmayan ölçüdür!'
      ),
      createFillBlank(
        '🍎 = 🪙🪙🪙🪙 → Elma ___ bozuk para ağırlığında',
        ['4', 'dört'],
        '4 bozuk para!'
      ),
      createMultipleChoice(
        'Kitap 5 bilye, kalem 2 bilye ağırlığında. Hangisi ağır?',
        ['Kitap', 'Kalem', 'Eşit', 'Belli değil'],
        'Kitap',
        '5 > 2, kitap ağır!'
      ),
      createFillBlank(
        'Elma 6 bozuk para, armut 4 bozuk para. Elma ___ bozuk para daha ağır',
        ['2', 'iki'],
        '6 - 4 = 2 bozuk para fark!'
      ),
      createMultipleChoice(
        'Portakal 6 bozuk para, elma 4 bozuk para. Hangisi hafif?',
        ['Portakal', 'Elma', 'Eşit', 'Bilinmiyor'],
        'Elma',
        '4 < 6, elma daha hafif!'
      ),
      createFillBlank(
        'Kalem 3 bilye, silgi 3 bilye. İkisi ___ ağırlıkta',
        ['eşit', 'aynı'],
        '3 = 3, eşit ağırlık!'
      ),
      createMultipleChoice(
        'Neden bozuk para ile tartım "standart olmayan" denir?',
        ['Bozuk para küçük', 'Herkesin parası farklı ağırlıkta olabilir', 'Para ile tartılmaz', 'Terazi gerekli'],
        'Herkesin parası farklı ağırlıkta olabilir',
        'Farklı bozuk paralar farklı ağırlıkta!'
      ),
      createFillBlank(
        'Defter 5 ataç, kitap 8 ataç. Kitap ___ ataç daha ağır',
        ['3', 'üç'],
        '8 - 5 = 3 ataç fark!'
      ),

      // Tahmin soruları (25-32)
      createMultipleChoice(
        'Büyük olan her zaman ağır mıdır?',
        ['Evet', 'Hayır', 'Bazen', 'Her zaman'],
        'Hayır',
        'Balon büyük ama hafif! Boyut ≠ Ağırlık'
      ),
      createFillBlank(
        'Tahmin yapmak için nesneye dikkatlice ___ ',
        ['bakarız', 'bak'],
        'Önce dikkatlice bak, sonra tahmin et!'
      ),
      createMultipleChoice(
        'Balon mu bilye mu ağır?',
        ['Balon', 'Bilye', 'Eşit', 'Belli değil'],
        'Bilye',
        'Balon büyük ama hafif, bilye küçük ama ağır!'
      ),
      createFillBlank(
        'Tahmin ile tartım aynı çıkarsa tahmin ___',
        ['doğru', 'mükemmel'],
        'Tahmin doğru çıktı!'
      ),
      createMultipleChoice(
        'Pamuk mu demir mu ağır?',
        ['Pamuk', 'Demir', 'Eşit', 'Bilinmiyor'],
        'Demir',
        'Pamuk hafif, demir çok ağır!'
      ),
      createFillBlank(
        'Tartmak tahmin etmekten daha ___ sonuç verir',
        ['kesin', 'doğru'],
        'Tartım kesin sonuç verir!'
      ),
      createMultipleChoice(
        'Tahmin yeteneği nasıl gelişir?',
        ['Uyuyarak', 'Pratik yaparak', 'TV izleyerek', 'Hiçbir şekilde'],
        'Pratik yaparak',
        'Çok pratik = iyi tahmin!'
      ),
      createFillBlank(
        'Büyük görünen her zaman ___ olmaz',
        ['ağır'],
        'Boyut aldatıcı olabilir!'
      ),

      // Sıralama soruları (33-40)
      createMultipleChoice(
        'Tüy, taş, kalem. En ağır hangisi?',
        ['Tüy', 'Taş', 'Kalem', 'Hepsi eşit'],
        'Taş',
        'Taş en ağır!'
      ),
      createFillBlank(
        'Elma 5, armut 3, muz 4. En hafif ___',
        ['armut'],
        '3 en küçük sayı, armut en hafif!'
      ),
      createMultipleChoice(
        'Fil, kedi, karınca. Hafiften ağıra sıralama?',
        ['Karınca-Kedi-Fil', 'Fil-Kedi-Karınca', 'Kedi-Fil-Karınca', 'Karınca-Fil-Kedi'],
        'Karınca-Kedi-Fil',
        'Karınca en hafif, fil en ağır!'
      ),
      createFillBlank(
        'Kitap 8, defter 4, kağıt 1 bozuk para. En ağır ___',
        ['kitap'],
        '8 en büyük sayı, kitap en ağır!'
      ),
      createMultipleChoice(
        '3 nesneyi sıralamak için en az kaç karşılaştırma gerekir?',
        ['1', '2', '3', '4'],
        '3',
        'Her ikili karşılaştırılmalı: A-B, B-C, A-C'
      ),
      createFillBlank(
        'A 5g, B 3g, C 7g. Ağırdan hafife: C, A, ___',
        ['B'],
        '7 > 5 > 3, sıralama C-A-B!'
      ),
      createMultipleChoice(
        'İki nesne eşit ağırlıkta. Sıralamada ne olur?',
        ['Biri önce', 'Biri sonra', 'Aynı sırada', 'Sıralanamaz'],
        'Aynı sırada',
        'Eşit ağırlıkta olanlar aynı sırada!'
      ),
      createFillBlank(
        'Sıralama yaparken önce nesneleri ___ karşılaştırırız',
        ['ikişer', 'ikişer ikişer'],
        'İkili karşılaştırma yapılır!'
      ),

      // Karışık sorular (41-45)
      createMultipleChoice(
        'Hangisi hafif?',
        ['Araba', 'Ev', 'Kuş tüyü', 'Masa'],
        'Kuş tüyü',
        'Kuş tüyü en hafif!'
      ),
      createFillBlank(
        'Ellerimizi ___ gibi kullanarak karşılaştırma yapabiliriz',
        ['terazi'],
        'Eller terazi gibi çalışır!'
      ),
      createMultipleChoice(
        'Cetvel ne ölçer?',
        ['Ağırlık', 'Uzunluk', 'Sıcaklık', 'Zaman'],
        'Uzunluk',
        'Cetvel uzunluk ölçer, terazi ağırlık ölçer!'
      ),
      createFillBlank(
        'Ağır nesne elimizi ___ çeker',
        ['aşağı', 'aşağıya'],
        'Ağır olan aşağı çeker!'
      ),
      createMultipleChoice(
        'Günlük hayatta en çok ne ile tartarız?',
        ['Elle', 'Cetvel ile', 'Terazi ile', 'Göz ile'],
        'Terazi ile',
        'Terazi en doğru sonucu verir!'
      )
    ],

    summary: 'Ağır-hafif kavramlarını, terazi kullanmayı, standart olmayan araçlarla tartmayı, tahmin etmeyi ve nesneleri sıralamayı öğrendik! Unutma: Büyük olan her zaman ağır değildir, tartmak en kesin sonucu verir!',
    nextTopicPreview: 'Sonraki temada paralarımızı tanıyacağız! TL ve kuruşları öğreneceğiz! 💰'
  }
};
