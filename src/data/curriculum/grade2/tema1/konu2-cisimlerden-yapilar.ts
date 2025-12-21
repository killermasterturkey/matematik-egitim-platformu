// 2. SINIF - TEMA 1 - KONU 2: Cisimlerden Yapılar Oluşturalım
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu2CisimlerdenYapilar: Topic = {
  id: 'cisimlerden-yapilar',
  title: 'Cisimlerden Yapılar Oluşturalım',
  description: 'Geometrik cisimlerle harika yapılar tasarla ve inşa et!',
  emoji: '🏗️',
  duration: '50 dk',
  difficulty: 2,
  keywords: ['yapı', 'model', 'birleştirme', 'tasarım', 'mimar', 'inşaat', 'kule', 'köprü', 'lego', 'blok'],
  objectives: [
    'Geometrik cisimleri birleştirerek yapılar oluşturur',
    'Bir yapıda hangi cisimlerin kullanıldığını söyler',
    'Kendi özgün tasarımlarını yapar',
    'Yapıları tanımlar ve açıklar',
    'Farklı birleştirme tekniklerini kullanır',
    'Yapılarda denge ve sağlamlık kavramını anlar'
  ],
  content: {
    introduction: `Merhaba küçük mimar! 🏗️

Bugün geometrik cisimleri birleştirerek harika yapılar oluşturacağız! Dünya'daki en ünlü binalar, köprüler ve heykeller hep geometrik cisimlerden yapılmıştır. Bir mühendis, mimar veya tasarımcı olmak istiyorsan, geometrik cisimleri birleştirmeyi öğrenmelisin!

Gerçek mimarlar da bunu yapar:
🏠 Evler = Prizmalar + Üçgen prizmalar (çatı)
🏰 Kaleler = Küpler + Silindirler (kuleler)
🚀 Roketler = Silindirler + Koniler (burun)
🤖 Robotlar = Küpler + Silindirler + Küreler
🌉 Köprüler = Silindirler + Prizmalar + Üçgenler
🗼 Kuleler = Üst üste küpler + Koniler

Lego oynarken, kum kalesi yaparken, kardan adam yaparken hep geometrik cisimleri birleştiriyorsun! Bu derste öğreneceğin bilgilerle çok daha güzel yapılar inşa edebileceksin!

Sen de bir mimarsın! Hayal gücünü kullan! 🌟`,

    motivationQuote: 'Her büyük yapı, küçük bir hayalle başlar! Senin hayalin ne? 🏗️✨',

    funFacts: [
      '🏛️ Mısır piramitleri kare tabanlı piramit şeklindedir ve 4500 yıldır ayakta! Hiçbir harç kullanmadan sadece taş bloklar üst üste konularak yapılmıştır.',
      '🗼 Eyfel Kulesi binlerce metal üçgenden yapılmıştır! Üçgen şekli çok sağlam olduğu için tercih edilmiştir.',
      '🏠 İglo (Eskimo evi) yarım küre şeklindedir - kar bloklarından yapılır ve içerisi sıcak kalır!',
      '🏰 Ortaçağ kalelerinin kuleleri silindir şeklindedir - düşmanın tırmanmasını zorlaştırır ve toplar daha az hasar verir!',
      '🕌 Cami kubbeleri yarım küre şeklindedir - ses daha iyi yayılsın ve yapı daha sağlam olsun diye!',
      '🌉 Boğaz köprüleri dev silindir sütunlar ve çelik kablolar kullanılarak yapılır!',
      '🏢 Gökdelenler yüzlerce dikdörtgenler prizmasının üst üste konmasıyla inşa edilir!',
      '⛺ Çadırlar koni veya piramit şeklindedir - yağmur ve rüzgara dayanıklı olsun diye!',
      '🎪 Sirk çadırları dev koni şeklindedir - içinde binlerce kişi seyirci olabilir!',
      '🛕 Hint tapınakları piramit, koni ve küre gibi birçok geometrik cismi bir arada kullanır!'
    ],

    steps: [
      createStep(
        'Cisimleri Birleştirme Yöntemleri',
        `Farklı geometrik cisimleri birleştirerek yeni yapılar oluşturabiliriz! Mimarlar ve mühendisler binlerce yıldır bu teknikleri kullanıyor.

🔧 BİRLEŞTİRME YÖNTEMLERİ:

1️⃣ ÜST ÜSTE KOYMA (Dikey Birleştirme)
🎲 + 🎲 + 🎲 = Kule!
Küpleri üst üste koy → Yüksek kule!
Önemli: Alt cisim geniş, üst cisim dar olmalı!

2️⃣ YAN YANA KOYMA (Yatay Birleştirme)
📦 + 📦 + 📦 = Uzun duvar!
Prizmaları yan yana koy → Duvar veya çit!
Önemli: Cisimler aynı yükseklikte olmalı!

3️⃣ KARIŞIK BİRLEŞTİRME (Hem Dikey Hem Yatay)
📦 + 🔺 = Ev!
Prizma (gövde) + Üçgen prizma (çatı) = Ev!

4️⃣ İÇ İÇE KOYMA
Büyük kürenin içine küçük küre → Matruşka bebek!

Cisimleri farklı şekillerde birleştirerek sonsuz yapı oluşturabilirsin! ♾️`,
        'Üst üste, yan yana, karışık veya iç içe birleştir!',
        {
          visual: `ÜST ÜSTE          YAN YANA          KARIŞIK
   🎲
   🎲              📦📦📦              🔺
   🎲                                📦📦
 (Kule)           (Duvar)            (Ev)`,
          tip: '🧱 Legolarla oynadığını düşün - onlar da geometrik cisimler! Her lego parçası bir prizma veya küp gibidir.',
          examples: [
            createExample(
              '5 küpü üst üste koyarsan ne oluşur?',
              'Kule',
              'Küpleri üst üste koymak yüksek bir kule oluşturur. Ne kadar çok küp, o kadar yüksek kule!',
              '🎲+🎲+🎲+🎲+🎲 = 🗼 Kule (5 katlı)',
              ['1. küpü yere koy (taban)', '2. küpü üstüne koy', '3. küpü ekle', '4. küpü ekle', '5. küpü en üste koy', 'Kule tamam!']
            ),
            createExample(
              'Prizma ve silindirleri kullanarak ne yapabilirsin?',
              'Kamyon, tren, araba...',
              'Prizma gövde olur, silindirler tekerlek olur! Araçların çoğu bu kombinasyonla yapılır.',
              '📦 + 🔵🔵🔵🔵 = 🚚',
              ['Prizma seç (gövde için)', '4 silindir al (tekerlekler)', 'Silindirleri prizmanın altına koy', 'Kamyon hazır!']
            ),
            createExample(
              '10 küpü yan yana koyarsan ne olur?',
              'Duvar veya çit',
              'Küpleri yan yana dizmek uzun bir duvar oluşturur. Kaleler böyle yapılır!',
              '🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲 = 🧱 Duvar',
              ['Küpleri sıraya diz', 'Aralarında boşluk bırakma', 'Düz bir çizgi oluştur', 'Duvar tamam!']
            ),
            createExample(
              '3 silindiri üst üste koyarsan ne oluşur?',
              'Silindir kule',
              'Silindirler de üst üste konabilir! Fabrika bacaları böyle yapılır.',
              '🔵+🔵+🔵 = 🏭 Baca',
              ['1. silindiri koy', '2. silindiri üstüne koy', '3. silindiri en üste koy', 'Baca hazır!']
            ),
            createExample(
              'Büyük bir kürenin içine küçük küre koyarsan ne olur?',
              'İç içe küre (Matruşka gibi)',
              'Bazı yapılarda cisimler iç içe konur. Rus matruşka bebekler böyledir!',
              '⚽ içinde ⚾ = Matruşka',
              ['Büyük küreyi al', 'Ortasını aç', 'Küçük küreyi içine koy', 'İç içe yapı!']
            ),
            createExample(
              'Piramit ve prizma ile ne yapabilirsin?',
              'Tapınak veya anıt',
              'Piramit tepede, prizma tabanda olursa tapınak veya anıt olur!',
              '🔺 + 📦 = 🏛️ Anıt',
              ['Prizmayı taban olarak koy', 'Piramidi üstüne yerleştir', 'Anıt hazır!']
            )
          ]
        }
      ),

      createStep(
        'Ev Modeli Yapalım 🏠',
        `En temel yapı: EV! Nasıl yapılır? Her evin bir gövdesi ve çatısı vardır. Farklı ülkelerde farklı ev modelleri olsa da hepsinde geometrik cisimler kullanılır.

🏠 EV MODELİ:

MALZEMELER:
• 1 Dikdörtgenler prizması (gövde/duvarlar)
• 1 Üçgen prizma (çatı)
• Opsiyonel: 1 silindir (baca)

YAPIM:
1. Prizması yere koy → Bu evin gövdesi!
2. Üçgen prizmayı üstüne koy → Bu çatı!
3. İstersen silindir baca ekle!
4. Ev tamam! 🎉

    🔺  ← Üçgen Prizma (Çatı)
   ════
  │    │
  │ 🚪 │ ← Dikdörtgenler Prizması (Gövde)
  │    │
  ══════

Kapı ve pencereler dikdörtgen şeklinde! Baca silindir şeklinde!`,
        'Ev = Prizma (gövde) + Üçgen prizma (çatı) + Silindir (baca)!',
        {
          visual: `    ╱╲  🔵 (Baca)
   ╱  ╲    ← Çatı (Üçgen Prizma)
  ╱    ╲
 ────────
 │  🪟  │
 │      │  ← Gövde (Dikdörtgenler Prizması)
 │  🚪  │
 ────────

🏠 = 📦 + 🔺 + 🔵`,
          tip: '🏠 Evinin çatısına bak - üçgen gibi görünüyor değil mi? Yağmur ve kar kayıp gidebilsin diye eğimli!',
          examples: [
            createExample(
              'Evin çatısı hangi cisimden yapılır?',
              'Üçgen prizma',
              'Evin çatısı üçgen prizma şeklindedir - yağmur ve kar kayıp gitsin diye eğimli! Düz çatılar sıcak ülkelerde kullanılır.',
              '🏠 çatı = 🔺 (üçgen prizma)',
              ['Çatıya bak', 'Önden üçgen görünüyor', 'Yana doğru uzuyor', 'Bu üçgen prizma!']
            ),
            createExample(
              'Bir evde kaç tane geometrik cisim var?',
              'En az 2 (gövde + çatı), bacayla 3',
              'Temel ev: 1 dikdörtgenler prizması (gövde) + 1 üçgen prizma (çatı) = 2 cisim. Baca eklenirse 3 olur!',
              '🏠 = 📦 + 🔺 + 🔵 = 3 cisim',
              ['Gövde: 1 prizma', 'Çatı: 1 üçgen prizma', 'Baca: 1 silindir', 'Toplam: 3 cisim!']
            ),
            createExample(
              'Evin kapısı hangi şekildedir?',
              'Dikdörtgen',
              'Kapılar dikdörtgen şeklindedir - insanlar rahatça geçebilsin diye! Bazı kapılar üstte yarım daire olabilir.',
              '🚪 = Dikdörtgen',
              ['Kapına bak', 'Dört köşesi var', 'Karşılıklı kenarları eşit', 'Dikdörtgen!']
            ),
            createExample(
              'Evin penceresi hangi şekildedir?',
              'Kare veya dikdörtgen',
              'Pencereler genellikle kare veya dikdörtgen şeklindedir. Bazı özel binalarda daire pencereler de olabilir!',
              '🪟 = Kare veya Dikdörtgen',
              ['Pencereye bak', 'Dört köşesi var', 'Kare veya dikdörtgen', 'Işık alsın diye!']
            ),
            createExample(
              'Neden çatılar eğimli yapılır?',
              'Yağmur ve kar kayıp gitsin diye',
              'Eğimli çatılar su birikintisi oluşmasını engeller. Düz çatılar sıcak, kurak bölgelerde kullanılır.',
              'Eğimli çatı → 🌧️ kayar',
              ['Yağmur yağdığında', 'Su eğimden aşağı akar', 'Birikmez', 'Çatı zarar görmez!']
            ),
            createExample(
              '2 katlı bir ev için kaç prizma gerekir?',
              '2 prizma (üst üste) + 1 üçgen prizma (çatı)',
              'Her kat için bir prizma! 2 katlı ev = 2 prizma gövde + 1 üçgen prizma çatı = 3 cisim',
              '📦 + 📦 + 🔺 = 2 katlı ev',
              ['1. kat: prizma', '2. kat: prizma (üstüne)', 'Çatı: üçgen prizma', 'Toplam: 3 cisim!']
            )
          ]
        }
      ),

      createStep(
        'Araç Modeli Yapalım 🚗',
        `Araçlar da geometrik cisimlerden oluşur! Arabalar, otobüsler, kamyonlar, trenler - hepsi benzer cisimlerden yapılır.

🚗 ARABA MODELİ:

MALZEMELER:
• 1 Dikdörtgenler prizması (gövde)
• 4 Silindir (tekerlekler)
• Opsiyonel: Yarım küre (farlar)

YAPIM:
1. Prizması koy → Araba gövdesi!
2. 4 silindiri alt köşelere koy → Tekerlekler!
3. Farları ekle → Yarım küre!
4. Araba hazır! 🎉

    ┌─────────┐
    │  🚗    │ ← Prizma (Gövde)
    │         │
    └─────────┘
     🔵    🔵  ← Silindirler (Tekerlekler)

🚌 OTOBÜS = Uzun prizma + 6-8 silindir
🚂 TREN = Çok prizma + çok silindir + koni (baca)
🚁 HELİKOPTER = Küre gövde + silindir pervaneler`,
        'Araç = Prizma (gövde) + Silindirler (tekerlekler)!',
        {
          visual: `  ┌─────────────┐
  │   🚗        │
  │             │
  └─────────────┘
   ⚫         ⚫

🚗 = 📦 + 🔵🔵🔵🔵

🚌 OTOBÜS     🚂 TREN        🚁 HELİKOPTER
 ▔▔▔▔▔▔▔▔▔    ▔▔🔺▔▔▔▔        ━━━━
 ⚫⚫  ⚫⚫    ⚫⚫ ⚫⚫ ⚫⚫      (◯)`,
          tip: '🚗 Oyuncak arabana bak - tekerlekler silindir, gövde prizma! Her araç geometrik cisimlerden oluşur.',
          examples: [
            createExample(
              'Bir arabanın kaç tekerleği var ve tekerlekler hangi şekilde?',
              '4 tekerlek, silindir şeklinde',
              'Arabaların 4 tekerleği vardır ve tekerlekler silindir şeklindedir - yuvarlanabilmesi için yuvarlak olmalı!',
              '🚗 = 4 × 🔵 (silindir)',
              ['Tekerlekleri say: 4', 'Şekline bak: Yuvarlak', 'Yandan bakınca daire', 'Silindir!']
            ),
            createExample(
              'Otobüsün araçtan farkı ne?',
              'Daha uzun prizma ve daha çok tekerlek',
              'Otobüs daha uzun bir prizma (daha çok yolcu sığsın) ve 6-8 tekerlek (silindir) kullanır.',
              '🚌 = Uzun 📦 + 6-8 🔵',
              ['Otobüs uzun', 'Daha uzun prizma gerekir', 'Ağır olduğu için', 'Daha çok tekerlek: 6-8']
            ),
            createExample(
              'Eski buharlı tren nasıl bir yapıya sahip?',
              'Silindir gövde + silindir tekerlekler + koni baca',
              'Eski trenler silindir şeklinde buhar kazanına sahipti. Baca koni şeklinde duman çıkarırdı!',
              '🚂 = 🔵 (gövde) + 🔵🔵🔵🔵 (tekerlekler) + 🍦 (baca)',
              ['Buhar kazanı: Silindir', 'Tekerlekler: Silindir', 'Baca: Koni', 'Duman çıkar!']
            ),
            createExample(
              'Kamyonun arabadan farkı ne?',
              'Daha büyük prizma ve 6-18 tekerlek',
              'Kamyonlar ağır yük taşıdığı için daha büyük gövde ve daha çok tekerlek gerektirir.',
              '🚚 = Büyük 📦 + 6-18 🔵',
              ['Kamyon ağır yük taşır', 'Büyük prizma gövde', 'Çok tekerlek gerekir', 'TIR 18 tekerlek!']
            ),
            createExample(
              'Motosikletin kaç tekerleği var?',
              '2 tekerlek (silindir)',
              'Motosikletler 2 tekerlek kullanır. Bisikletler de! Denge gerektirir.',
              '🏍️ = 📦 + 🔵🔵 (2 silindir)',
              ['Motosiklet 2 tekerlekli', 'Ön tekerlek: 1 silindir', 'Arka tekerlek: 1 silindir', 'Denge gerekir!']
            ),
            createExample(
              'Helikopterin gövdesi hangi cisme benzer?',
              'Küre veya elips',
              'Helikopter gövdesi yuvarlak, küreye benzer. Pervaneler silindir gibi döner!',
              '🚁 = ⚽ (gövde) + ━━ (pervane)',
              ['Gövde: Küre gibi yuvarlak', 'Pervane: Dönen çubuklar', 'Havada durabilir', 'Geometri sihri!']
            )
          ]
        }
      ),

      createStep(
        'Robot Modeli Yapalım 🤖',
        `Robotlar birçok geometrik cisimden oluşur! Film ve çizgi filmlerdeki robotları düşün - hepsi geometrik cisimlerle tasarlanmış!

🤖 ROBOT MODELİ:

MALZEMELER:
• 1 Küp veya küre (kafa)
• 1 Dikdörtgenler prizması (gövde)
• 4 Silindir (kollar ve bacaklar)
• 2 Küçük küre (eller)
• 2 Küçük küre veya silindir (gözler)
• 1-2 Koni veya silindir (anten)

YAPIM:
    ⚽  ← Küre (Kafa) + 📡 Anten
    │
   📦  ← Prizma (Gövde)
  ╱  ╲
 🔵  🔵 ← Silindirler (Kollar)
  │  │
 🔵  🔵 ← Silindirler (Bacaklar)

Robotun gözleri küçük küreler olabilir! 👀
Antenleri koni olabilir! 📡`,
        'Robot = Küp/Küre (kafa) + Prizma (gövde) + Silindirler (kol/bacak)!',
        {
          visual: `    📡 ← Anten (Koni/Silindir)
    🔵 ← Küre (Kafa)
   │││
  ┌───┐
🔵│   │🔵 ← Silindirler (Kollar)
  │📦 │ ← Prizma (Gövde)
  └───┘
  ╱   ╲
 🔵   🔵 ← Silindirler (Bacaklar)

🤖 = ⚽ + 📦 + 🔵🔵🔵🔵 + 📡`,
          tip: '🤖 Transformers robotlarını düşün - hepsi geometrik cisimlerden! R2-D2 ise silindir gövdeli!',
          examples: [
            createExample(
              'Robot kafası için hangi cisim kullanılabilir?',
              'Küp veya küre',
              'Robot kafası kare (küp) veya yuvarlak (küre) olabilir - tasarımcının tercihine bağlı! Wall-E küp, R2-D2 silindir kafa!',
              '🤖 kafa = 🎲 veya ⚽',
              ['Kare kafa istersen: Küp', 'Yuvarlak kafa istersen: Küre', 'Silindir de olabilir', 'Wall-E: Küp kafa!']
            ),
            createExample(
              'Bir robotun kolları neden silindir şeklinde?',
              'Çünkü kollar uzun ve yuvarlaktır, hareket edebilir',
              'Silindir şekli uzun ve yuvarlaktır, eklemlerde dönebilir - tıpkı gerçek kollar gibi!',
              '🔵 = Uzun + Yuvarlak = Hareket edebilir',
              ['Kollar uzun olmalı', 'Hareket edebilmeli', 'Silindir hem uzun hem yuvarlak', 'Eklemlerde döner!']
            ),
            createExample(
              'Robot gövdesi için en uygun cisim hangisi?',
              'Dikdörtgenler prizması (kutu)',
              'Robot gövdesi genellikle kutu şeklindedir - içine motor, pil ve devreler sığsın diye!',
              '🤖 gövde = 📦',
              ['Geniş alan gerekir', 'Motor sığmalı', 'Pil sığmalı', 'Prizma en uygun!']
            ),
            createExample(
              'Robotun antenleri hangi cisimden yapılır?',
              'Koni veya silindir',
              'Anten silindir gibi uzun çubuk veya koni gibi sivri olabilir. Sinyal alıp gönderir!',
              '📡 = 🍦 veya 🔵 (uzun)',
              ['Anten uzun olmalı', 'Koni sivri uçlu', 'Silindir çubuk gibi', 'Sinyal alır!']
            ),
            createExample(
              'Bir robotun gözleri hangi cisimden yapılır?',
              'Küre veya silindir',
              'Robot gözleri küçük küre (top gibi) veya silindir (lens gibi) olabilir!',
              '👀 = ⚽⚽ veya 🔵🔵',
              ['Gözler yuvarlak', 'Küre: Top gibi göz', 'Silindir: Lens gibi göz', 'Işık yayar!']
            ),
            createExample(
              'Basit bir robot kaç cisimden oluşur?',
              'En az 6: kafa + gövde + 2 kol + 2 bacak',
              'Basit robot: 1 kafa (küre/küp) + 1 gövde (prizma) + 2 kol (silindir) + 2 bacak (silindir) = 6 cisim!',
              '🤖 = 1 + 1 + 2 + 2 = 6 cisim',
              ['Kafa: 1', 'Gövde: 1', 'Kollar: 2', 'Bacaklar: 2', 'Toplam: 6 cisim!']
            )
          ]
        }
      ),

      createStep(
        'Roket Modeli Yapalım 🚀',
        `Roketler de geometrik cisimlerden yapılır! Uzaya giden roketler ve havai fişekler aynı prensiple çalışır!

🚀 ROKET MODELİ:

MALZEMELER:
• 1 Silindir (gövde - uzun)
• 1 Koni (burun/tepe - sivri)
• 3-4 Üçgen prizma (kanatlar/finler)
• Opsiyonel: Daha küçük silindirler (yan roketler)

YAPIM:
     🔺  ← Koni (Burun) - Havayı yarar
     │
    🥫  ← Silindir (Gövde) - Yakıt ve astronot
     │
    🔥  ← Ateş çıkışı

    ╱│╲ ← Üçgen kanatlar (finler) - Denge için

Roketin burnu koni şeklinde:
Havayı yararak ilerliyor! 💨`,
        'Roket = Silindir (gövde) + Koni (burun) + Üçgenler (kanatlar)!',
        {
          visual: `      ▲  ← Koni (Burun)
     ╱ ╲
    ╱   ╲
   │     │
   │ 🚀  │ ← Silindir (Gövde)
   │     │
   │     │
  ╱│     │╲ ← Kanatlar (Üçgen Prizma)
 ╱ │     │ ╲
   └──┬──┘
      🔥

🚀 = 🍦 + 🥫 + 🔺🔺🔺`,
          tip: '🚀 Havai fişekleri düşün - onlar da küçük roketler! NASA roketleri de aynı prensipte çalışır.',
          examples: [
            createExample(
              'Roketin burnu neden koni şeklinde?',
              'Havayı yararak daha hızlı ilerlemek için',
              'Koni şekli sivri olduğu için havayı yarar ve roketin hızla ilerlemesini sağlar. Hava direnci azalır!',
              '🍦 = Sivri = Havayı yarar',
              ['Koni sivri', 'Havayı yarar', 'Daha az direnç', 'Daha hızlı ilerler!']
            ),
            createExample(
              'Roket gövdesi neden silindir şeklinde?',
              'Yakıt ve astronotları taşımak için geniş alan sağlar',
              'Silindir geniş bir iç hacme sahiptir - yakıt tankları ve astronot kabini buraya sığar!',
              '🥫 = Geniş iç alan',
              ['Silindir geniş', 'Yakıt tankı sığar', 'Astronotlar sığar', 'Mükemmel gövde!']
            ),
            createExample(
              'Roket kanatları (finler) ne işe yarar?',
              'Dengeyi sağlamak için',
              'Üçgen şeklindeki kanatlar roketin düz uçmasını sağlar. Yoksa roket döner, sapıtır!',
              '🔺🔺🔺 = Denge',
              ['Kanatlar üçgen', 'Roket döner mi?', 'Kanatlar engeller', 'Düz uçar!']
            ),
            createExample(
              'Havai fişek hangi cisimlerden oluşur?',
              'Silindir (gövde) + koni (burun)',
              'Havai fişekler küçük roketlerdir! Silindir içinde barut, koni ucuyla havayı yarar.',
              '🎆 = 🥫 + 🍦',
              ['Havai fişek küçük roket', 'Silindir: Barut', 'Koni: Sivri uç', 'Patlayınca ışık!']
            ),
            createExample(
              'Neden bazı roketlerin yan roketleri var?',
              'Daha fazla güç için',
              'Ana roketin yanına eklenen küçük roketler (booster) daha fazla itme gücü sağlar. Uzaya fırlatma için gerekli!',
              '🚀 + 🚀🚀 = Daha güçlü',
              ['Ana roket ortada', 'Yan roketler (booster)', 'Daha fazla güç', 'Uzaya kadar!']
            ),
            createExample(
              'Bir roket kaç temel cisimden oluşur?',
              'En az 4-5: 1 koni + 1 silindir + 3 üçgen prizma',
              'Basit roket: 1 koni (burun) + 1 silindir (gövde) + 3 üçgen prizma (kanat) = 5 cisim!',
              '🚀 = 1 + 1 + 3 = 5 cisim',
              ['Burun: 1 koni', 'Gövde: 1 silindir', 'Kanatlar: 3 üçgen', 'Toplam: 5 cisim!']
            )
          ]
        }
      ),

      createStep(
        'Kule ve Köprü Modelleri 🗼🌉',
        `Kuleler ve köprüler mühendisliğin en etkileyici yapılarıdır! Bu yapılar özel tasarım gerektirir.

🗼 KULE MODELLERİ:

1. BASİT KULE (Küplerle):
🎲 + 🎲 + 🎲 + 🎲 = 4 katlı kule
Tepede koni veya piramit olabilir!

2. SİLİNDİR KULE (Fener gibi):
🔵 + 🔵 + 🔵 + 🍦 = Deniz feneri!

3. EYFEL KULESİ (Üçgenlerle):
Binlerce üçgen metal birleşerek sağlam kule oluşturur!

🌉 KÖPRÜ MODELLERİ:

1. DÜZ KÖPRÜ:
📦──────📦  (İki ayak arası prizma)

2. KEMERLİ KÖPRÜ:
 ╭────╮
│      │  (Yarım silindir kemer)

3. ASMA KÖPRÜ:
 ┃    ┃   (Silindir kuleler)
 ≈≈≈≈≈≈   (Kablolar)`,
        'Kule = Üst üste cisimler! Köprü = Yatay + Dikey cisimler!',
        {
          visual: `🗼 KULE          🌉 KÖPRÜ         🏛️ FENER
  🍦              ┃    ┃           🔺
  🎲              ≈≈≈≈≈≈           🔵
  🎲             ━━━━━━━           🔵
  🎲            ╭━━━━━━╮           🔵
(4 cisim)      (5 cisim)         (4 cisim)`,
          tip: '🗼 Kuleler dikeydir (yukarı), köprüler yataydır (iki taraf arası)!',
          examples: [
            createExample(
              '5 katlı bir kule yapmak için kaç küp gerekir?',
              '5 küp',
              'Her kat için bir küp! 5 katlı kule = 5 küp üst üste.',
              '🗼 5 kat = 5 × 🎲',
              ['1. kat: Küp', '2. kat: Küp', '...', '5. kat: Küp', 'Toplam: 5 küp!']
            ),
            createExample(
              'Deniz feneri hangi cisimlerden yapılır?',
              'Silindirler (gövde) + koni veya yarım küre (tepe)',
              'Deniz fenerleri silindir şeklindedir - denizden görülsün diye yüksek ve ışık yaysın diye tepesi cam!',
              '🏛️ = 🔵 + 🔵 + 🔵 + 🔺',
              ['3 silindir üst üste', 'Tepede koni (ışık)', 'Yüksek olmalı', 'Gemiler görsün!']
            ),
            createExample(
              'Düz köprü hangi cisimlerden yapılır?',
              '2 prizma (ayak) + 1 uzun prizma (yol)',
              'Düz köprü: İki ayak ve aralarında uzanan yol kısmı - hepsi prizma!',
              '🌉 = 📦 + ━━━━ + 📦',
              ['Sol ayak: Prizma', 'Yol: Uzun prizma', 'Sağ ayak: Prizma', 'Köprü tamam!']
            ),
            createExample(
              'Asma köprü nasıl yapılır?',
              '2 silindir kule + kablolar + prizma yol',
              'Asma köprüler dev kuleler ve kablolarla havada durur! Boğaz köprüleri böyle!',
              '🌉 = 🔵🔵 + ≈≈ + ━━',
              ['2 kule: Silindir', 'Kablolar: Çelik', 'Yol: Prizma', 'Havada durur!']
            ),
            createExample(
              'Eyfel Kulesi neden çok sağlam?',
              'Üçgen şeklinde metal parçalar kullanılmış',
              'Üçgen en sağlam şekildir! Eyfel Kulesi binlerce metal üçgenden yapılmış.',
              '🗼 = 🔺🔺🔺... (binlerce üçgen)',
              ['Üçgen çok sağlam', 'Rüzgara dayanır', 'Binlerce üçgen', '130 yıldır ayakta!']
            ),
            createExample(
              'Pisa Kulesi neden eğik?',
              'Taban toprağı yumuşak, denge bozulmuş',
              'Pisa Kulesi silindir şeklinde ama zemin yumuşak olduğu için eğilmiş - hala düşmüyor!',
              '🏛️ = Eğik silindir',
              ['Zemin yumuşak', 'Kule ağır', 'Eğilmiş', 'Ama hala ayakta!']
            )
          ]
        }
      ),

      createStep(
        'Denge ve Sağlamlık 🏗️',
        `Yapılar sağlam olmalı ki yıkılmasın! Denge ve sağlamlık çok önemli.

⚖️ DENGE KURALLARI:

1. TABAN GENİŞ OLMALI:
Alt kısım büyük → Yapı devrilmez!
Piramitler bu yüzden çok sağlam!

2. AĞIRLIK ALTTA OLMALI:
Ağır cisimler alta → Daha dengeli!
Kardan adam: En büyük küre altta!

3. ORTADAN DİKMELİ:
Yapıyı ortadan dikersen → Daha dengeli!
Eğri dikilirse → Devrilir!

🔺 ÜÇGENİN GÜCÜ:
Üçgen en sağlam şekildir!
Köprüler, kuleler, binalar hep üçgen kullanır!

🏛️ SIRLARI:
• Taş binalar: Taşlar sıkıştırılır
• Çelik binalar: Kiriş ve kolonlar
• Modern binalar: Beton + Demir`,
        'Geniş taban + Ağırlık altta + Üçgen yapı = Sağlam yapı!',
        {
          visual: `SAĞLAM:        SAĞLAM DEĞİL:
   🔺              🎲
  ████             🎲
 ██████            🎲
████████          (Dar taban)
(Geniş taban)

⚖️ Denge Kuralı: Alt geniş olmalı!`,
          tip: '⚖️ Deneyle: Legoları dar ve geniş tabanlı dik. Hangisi daha sağlam?',
          examples: [
            createExample(
              'Piramitler neden binlerce yıl ayakta?',
              'Geniş taban, sivri tepe - çok sağlam',
              'Piramitlerin tabanı çok geniş, yukarı doğru darlaşır. Bu şekil çok sağlam ve depreme dayanıklı!',
              '🔺 Taban geniş → Sağlam',
              ['Taban çok geniş', 'Yukarı darlaşır', 'Ağırlık altta', '4500 yıldır ayakta!']
            ),
            createExample(
              'Kar adamı yaparken en büyük top nereye konur?',
              'En alta (taban)',
              'Kar adamı 3 küreden oluşur: En büyük altta (gövde), orta ortada, en küçük tepede (kafa). Böylece dengeli durur!',
              '⛄ = Büyük → Orta → Küçük',
              ['En büyük: Alt', 'Orta: Ortada', 'En küçük: Tepede', 'Dengeli!']
            ),
            createExample(
              'Üçgen neden en sağlam şekildir?',
              'Köşeleri hareket edemez, şekil bozulmaz',
              'Üçgenin 3 köşesi birbirine bağlı. Bir köşeye bastığında diğerleri hareket edemez - şekil korunur!',
              '🔺 = Hareket yok = Sağlam',
              ['3 köşe bağlı', 'Bastığında', 'Hareket edemez', 'Şekil korunur!']
            ),
            createExample(
              'Neden gökdelenler alt katta daha kalın?',
              'Üstteki katların ağırlığını taşımak için',
              'Gökdelenin alt katları çok ağırlık taşır - o yüzden duvarlar ve kolonlar altta daha kalın!',
              '🏢 Alt kalın → Sağlam',
              ['Üst katlar ağır', 'Alt katlar taşır', 'Kalın kolonlar', 'Daha sağlam!']
            ),
            createExample(
              'Köprüler neden üçgen yapı kullanır?',
              'Üçgen en sağlam şekil, ağırlığı dağıtır',
              'Köprüler arabaların ağırlığını taşımalı. Üçgen yapı bu ağırlığı eşit dağıtır ve köprü bükülmez!',
              '🌉 = 🔺🔺🔺 → Sağlam',
              ['Araba ağır', 'Üçgen dağıtır', 'Ağırlık eşit', 'Köprü sağlam!']
            ),
            createExample(
              'Bir yapı neden yıkılır?',
              'Denge bozulursa, taban dar ise, malzeme zayıf ise',
              'Yapılar: 1) Taban dar olursa, 2) Üstü ağır olursa, 3) Malzeme zayıf olursa yıkılabilir!',
              '⚠️ Yıkılma nedenleri',
              ['Dar taban → Devrilme', 'Ağır tepe → Dengesizlik', 'Zayıf malzeme → Kırılma', 'Dikkat!']
            )
          ]
        }
      ),

      createStep(
        'Kendi Yapını Tasarla! ✨',
        `Şimdi sıra sende! Kendi özgün yapını tasarla! Öğrendiğin tüm cisimleri ve kuralları kullan!

🎨 TASARIM FİKİRLERİ:

🏰 KALE:
• Küpler (duvarlar) + Silindirler (kuleler) + Koniler (çatılar)
• Geniş taban, yüksek kuleler!

⛪ CAMİ:
• Dikdörtgenler prizması (gövde) + Yarım küre (kubbe)
• Silindirler (minareler) + Koniler (minare tepeleri)

🎪 SIRK ÇADIRI:
• Büyük koni (çadır) + Silindir (giriş)
• Renkli ve eğlenceli!

⛄ KAR ADAMI:
• 3 küre (büyük→orta→küçük)
• Silindir (şapka) + Koni (burun)

🦸 SÜPER KAHRAMAN MERKEZİ:
• Prizma bina + Küre radar + Silindir kuleler

SEN NE TASARLAMAK İSTERSİN? 🤔
Hayal gücünün sınırı yok! ♾️`,
        'Hayal et, tasarla, yap! Sen bir mimarsın! 🏗️',
        {
          visual: `🏰 KALE           ⛪ CAMİ          ⛄ KAR ADAMI
 🔺   🔺          🌙              ⚽ (küçük)
 🔵   🔵         ╭─╮              ⚽ (orta)
🎲 🎲 🎲        🔵📦🔵            ⚽ (büyük)

🎪 SIRK          🗼 KULE          🦸 MERKEZ
   ╱╲            🔺              ⚽
  ╱  ╲           🎲              📦📦📦
 ╱    ╲          🎲              🔵🔵🔵`,
          tip: '✏️ Önce kağıda çiz, hangi cisimler kullanacağını yaz, sonra gerçek malzemelerle yap!',
          examples: [
            createExample(
              'Bir kale yapmak için hangi cisimler lazım?',
              'Küpler (duvar), silindirler (kule), koniler (çatı)',
              'Kale: Küp duvarlar, silindir kuleler, koni veya piramit çatılar! Geniş taban unutma!',
              '🏰 = 🎲🎲🎲 + 🔵🔵 + 🍦🍦',
              ['Duvarlar: Küpler', 'Kuleler: Silindirler', 'Çatılar: Koniler', 'Taban geniş!']
            ),
            createExample(
              'Kar adamı hangi cisimlerden yapılır?',
              '3 küre (büyük, orta, küçük) + silindir şapka + koni burun',
              'Kar adamı 3 farklı boyutta küreden oluşur. En büyük altta, en küçük tepede!',
              '⛄ = ⚽ + ⚽ + ⚽ + 🎩 + 🥕',
              ['Büyük küre: Gövde', 'Orta küre: Göğüs', 'Küçük küre: Kafa', 'Şapka + Burun ekle!']
            ),
            createExample(
              'Cami kubbesi hangi cisimdir?',
              'Yarım küre',
              'Cami kubbeleri yarım küre şeklindedir. Ses içeride güzel yayılır, yapı da sağlam olur!',
              '🕌 kubbe = Yarım ⚽',
              ['Kubbe yuvarlak', 'Yarım küre', 'Ses yayılır', 'Çok güzel!']
            ),
            createExample(
              'Denizaltı hangi cisme benzer?',
              'Silindir (uçları yuvarlak)',
              'Denizaltılar silindir şeklindedir - su içinde süzülür, basınca dayanır!',
              '🚢 = 🔵 (iki ucu kapalı)',
              ['Silindir gövde', 'Uçlar yuvarlak', 'Su süzülür', 'Basınca dayanır!']
            ),
            createExample(
              'Uzay istasyonu hangi cisimlerden oluşur?',
              'Silindirler (modüller) + dikdörtgen paneller (güneş)',
              'Uzay istasyonları silindir modüller ve dikdörtgen güneş panellerinden oluşur!',
              '🛸 = 🔵🔵🔵 + ▭▭',
              ['Yaşam alanı: Silindir', 'Modüller: Silindir', 'Güneş paneli: Dikdörtgen', 'Uzayda!']
            ),
            createExample(
              'Kendi tasarımın için nasıl başlamalısın?',
              '1) Ne yapacağına karar ver 2) Hangi cisimleri kullanacağını düşün 3) Çiz 4) Yap!',
              'Her büyük yapı bir fikirle başlar! Önce düşün, çiz, sonra yap!',
              '💡 → ✏️ → 🏗️',
              ['1. Fikir bul', '2. Cisimleri seç', '3. Kağıda çiz', '4. Malzeme bul ve yap!']
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // Ev ve Bina Soruları (1-10)
      createMultipleChoice(
        '🏠 Evin çatısı hangi cisimden yapılır?',
        ['Küp', 'Silindir', 'Üçgen prizma', 'Küre'],
        'Üçgen prizma',
        'Evin çatısı üçgen prizma şeklindedir - yağmur ve kar kayıp gitsin diye eğimli!',
        '🏠',
        1
      ),
      createFillBlank(
        'Ev = Dikdörtgenler prizması + ___',
        ['üçgen prizma', 'Üçgen prizma', 'çatı'],
        'Evin gövdesi dikdörtgenler prizması, çatısı üçgen prizmadır.',
        '🏠'
      ),
      createMultipleChoice(
        'Evin bacası hangi cisimden yapılır?',
        ['Küp', 'Silindir', 'Koni', 'Küre'],
        'Silindir',
        'Baca silindir şeklindedir - duman çıkabilmesi için boru gibi!',
        '🏠🔵',
        1
      ),
      createFillBlank(
        'Bir evde en az ___ geometrik cisim vardır',
        ['2', 'iki'],
        'En basit ev: gövde (prizma) + çatı (üçgen prizma) = 2 cisim.',
        '🏠'
      ),
      createMultipleChoice(
        'Evin kapısı hangi şekildedir?',
        ['Daire', 'Dikdörtgen', 'Üçgen', 'Kare'],
        'Dikdörtgen',
        'Kapılar dikdörtgen şeklindedir - insanlar rahatça geçebilsin diye!',
        '🚪',
        1
      ),
      createMultipleChoice(
        '2 katlı ev için kaç gövde prizması gerekir?',
        ['1', '2', '3', '4'],
        '2',
        'Her kat için 1 prizma gerekir. 2 katlı ev = 2 prizma (üst üste).',
        '🏠🏠',
        2
      ),
      createFillBlank(
        'Evin penceresi ___ veya dikdörtgen şeklindedir',
        ['kare', 'Kare'],
        'Pencereler genellikle kare veya dikdörtgen şeklindedir.',
        '🪟'
      ),
      createMultipleChoice(
        'Gökdelen hangi cisimlerden oluşur?',
        ['Küpler', 'Silindirler', 'Dikdörtgenler prizmaları', 'Koniler'],
        'Dikdörtgenler prizmaları',
        'Gökdelenler yüzlerce dikdörtgenler prizmasının üst üste konmasıyla inşa edilir!',
        '🏢',
        2
      ),
      createFillBlank(
        'İglo (Eskimo evi) yarım ___ şeklindedir',
        ['küre', 'Küre'],
        'İglo yarım küre şeklindedir - kar blokları ile yapılır.',
        '🏠❄️'
      ),
      createMultipleChoice(
        'Bir binayı yapmak için en az kaç farklı cisim kullanılır?',
        ['1', '2', '3', '4'],
        '2',
        'Basit bir ev için en az 2 cisim gerekir: gövde (prizma) ve çatı (üçgen prizma).',
        '🏠',
        2
      ),

      // Araç Soruları (11-20)
      createFillBlank(
        'Araba tekerlekleri ___ şeklindedir',
        ['silindir', 'Silindir'],
        'Tekerlekler yuvarlanabilmesi için silindir şeklindedir.',
        '🚗'
      ),
      createMultipleChoice(
        'Bir arabanın kaç tekerleği var?',
        ['2', '3', '4', '6'],
        '4',
        'Normal arabaların 4 tekerleği vardır!',
        '🚗',
        1
      ),
      createFillBlank(
        'Otobüs = Uzun ___ + 6-8 silindir (tekerlek)',
        ['prizma', 'Prizma', 'dikdörtgenler prizması'],
        'Otobüs uzun bir prizma gövdeye ve 6-8 silindir tekerleğe sahiptir.',
        '🚌'
      ),
      createMultipleChoice(
        'Motosikletin kaç tekerleği var?',
        ['2', '3', '4', '6'],
        '2',
        'Motosikletler 2 tekerlekle denge kurarak gider!',
        '🏍️',
        1
      ),
      createFillBlank(
        'TIR kamyonlarının ___ tane tekerleği olabilir',
        ['18', 'on sekiz'],
        'Büyük TIR kamyonlarının 18 tekerleği olabilir - çok ağır yük taşır!',
        '🚛'
      ),
      createMultipleChoice(
        'Eski buharlı trenin gövdesi hangi cisimdir?',
        ['Küp', 'Silindir', 'Prizma', 'Koni'],
        'Silindir',
        'Eski trenler silindir şeklinde buhar kazanına sahipti!',
        '🚂',
        2
      ),
      createMultipleChoice(
        'Helikopterin gövdesi hangi cisme benzer?',
        ['Küp', 'Küre', 'Prizma', 'Koni'],
        'Küre',
        'Helikopter gövdesi yuvarlak, küreye benzer!',
        '🚁',
        2
      ),
      createFillBlank(
        'Araç gövdesi genellikle ___ şeklindedir',
        ['prizma', 'Prizma', 'dikdörtgenler prizması'],
        'Araç gövdeleri genellikle prizma şeklindedir.',
        '🚗'
      ),
      createMultipleChoice(
        'Tekerlekler neden silindir şeklinde?',
        ['Güzel görünsün', 'Yuvarlanabilsin', 'Hafif olsun', 'Renkli olsun'],
        'Yuvarlanabilsin',
        'Silindirler yuvarlak olduğu için döner ve araç hareket eder!',
        '⚫',
        1
      ),
      createFillBlank(
        'Bisikletin ___ tekerleği vardır',
        ['2', 'iki'],
        'Bisikletler 2 tekerlekle denge kurarak gider!',
        '🚲'
      ),

      // Robot Soruları (21-27)
      createMultipleChoice(
        '🤖 Robot gövdesi genellikle hangi cisimdir?',
        ['Küre', 'Koni', 'Dikdörtgenler prizması', 'Üçgen'],
        'Dikdörtgenler prizması',
        'Robot gövdesi genellikle dikdörtgenler prizması (kutu) şeklindedir.',
        '🤖',
        1
      ),
      createFillBlank(
        'Robot kafası ___ veya küre şeklinde olabilir',
        ['küp', 'Küp'],
        'Robot kafası küp (kare) veya küre (yuvarlak) olabilir!',
        '🤖'
      ),
      createMultipleChoice(
        'Robot kolları hangi cisimden yapılır?',
        ['Küp', 'Silindir', 'Koni', 'Piramit'],
        'Silindir',
        'Robot kolları silindir şeklindedir - uzun ve hareket edebilir!',
        '🤖',
        1
      ),
      createFillBlank(
        'Basit bir robot en az ___ cisimden oluşur',
        ['6', 'altı'],
        'Robot: 1 kafa + 1 gövde + 2 kol + 2 bacak = 6 cisim!',
        '🤖'
      ),
      createMultipleChoice(
        'Robot anteni hangi cisimden yapılır?',
        ['Küre', 'Koni veya silindir', 'Küp', 'Prizma'],
        'Koni veya silindir',
        'Antenler uzun silindir veya sivri koni şeklinde olabilir!',
        '📡',
        2
      ),
      createMultipleChoice(
        'Wall-E robotunun kafası hangi cisimdir?',
        ['Küre', 'Silindir', 'Küp', 'Koni'],
        'Küp',
        'Wall-E küp şeklinde kare kafaya sahip sevimli bir robot!',
        '🤖',
        2
      ),
      createFillBlank(
        'Robot gözleri genellikle ___ şeklindedir',
        ['küre', 'Küre', 'daire'],
        'Robot gözleri küre (yuvarlak) şeklindedir!',
        '👀'
      ),

      // Roket Soruları (28-33)
      createMultipleChoice(
        '🚀 Roketin burnu hangi cisimden yapılır?',
        ['Küp', 'Koni', 'Silindir', 'Prizma'],
        'Koni',
        'Roketin burnu koni şeklindedir - havayı yararak ilerlemek için sivri olmalı!',
        '🚀',
        1
      ),
      createFillBlank(
        'Roket gövdesi ___ şeklindedir',
        ['silindir', 'Silindir'],
        'Roket gövdesi silindir şeklindedir - yakıt ve astronotlar buraya sığar!',
        '🚀'
      ),
      createMultipleChoice(
        'Roket kanatları (finler) ne işe yarar?',
        ['Güzel görünsün', 'Denge için', 'Hızlansın', 'Yavaşlasın'],
        'Denge için',
        'Üçgen kanatlar roketin düz uçmasını sağlar!',
        '🔺',
        2
      ),
      createFillBlank(
        'Basit roket = 1 koni + 1 silindir + ___ üçgen',
        ['3', 'üç'],
        'Basit roket: burun (koni) + gövde (silindir) + 3 kanat (üçgen) = 5 cisim!',
        '🚀'
      ),
      createMultipleChoice(
        'Havai fişek hangi cisimlere benzer?',
        ['Küre + Küp', 'Silindir + Koni', 'Prizma + Piramit', 'Küre + Silindir'],
        'Silindir + Koni',
        'Havai fişek = silindir gövde + koni burun = mini roket!',
        '🎆',
        2
      ),
      createMultipleChoice(
        'Roket burnu neden koni şeklinde?',
        ['Güzel görünsün', 'Havayı yarsın', 'Hafif olsun', 'Renkli olsun'],
        'Havayı yarsın',
        'Sivri koni şekli havayı yarar ve roket hızla ilerler!',
        '🍦',
        1
      ),

      // Kule ve Köprü Soruları (34-40)
      createFillBlank(
        '3 küpü üst üste koyunca ___ oluşur',
        ['kule', 'Kule'],
        'Küpleri üst üste koymak bir kule oluşturur.',
        '🎲🎲🎲'
      ),
      createMultipleChoice(
        '🏰 Kale kuleleri genellikle hangi şekildedir?',
        ['Küp', 'Silindir', 'Koni', 'Prizma'],
        'Silindir',
        'Ortaçağ kalelerinin kuleleri silindir şeklindedir - düşmanın tırmanması zor!',
        '🏰',
        2
      ),
      createFillBlank(
        'Deniz feneri ___ + koni şeklindedir',
        ['silindir', 'Silindir'],
        'Deniz feneri silindir gövde + koni/yarım küre tepe!',
        '🏛️'
      ),
      createMultipleChoice(
        'Asma köprüler hangi cisimlerden yapılır?',
        ['Sadece prizma', 'Silindir kule + kablo + prizma yol', 'Sadece küp', 'Sadece silindir'],
        'Silindir kule + kablo + prizma yol',
        'Asma köprüler dev silindir kuleler ve prizma yol kullanır!',
        '🌉',
        2
      ),
      createMultipleChoice(
        'Eyfel Kulesi neden çok sağlam?',
        ['Büyük olduğu için', 'Üçgen yapı kullandığı için', 'Renkli olduğu için', 'Eski olduğu için'],
        'Üçgen yapı kullandığı için',
        'Binlerce metal üçgen birleşerek çok sağlam yapı oluşturur!',
        '🗼',
        2
      ),
      createFillBlank(
        '5 katlı kule için ___ küp gerekir',
        ['5', 'beş'],
        'Her kat için 1 küp! 5 katlı kule = 5 küp üst üste.',
        '🗼'
      ),
      createMultipleChoice(
        'Köprüler neden üçgen yapı kullanır?',
        ['Güzel görünsün', 'Ucuz olsun', 'Sağlam olsun', 'Renkli olsun'],
        'Sağlam olsun',
        'Üçgen en sağlam şekildir, ağırlığı eşit dağıtır!',
        '🔺',
        2
      ),

      // Diğer Yapılar (41-45)
      createFillBlank(
        'Kar adamı ___ küreden yapılır',
        ['3', 'üç'],
        'Kar adamı 3 farklı boyutta küreden oluşur: büyük (gövde), orta (göğüs), küçük (kafa).',
        '⛄'
      ),
      createMultipleChoice(
        '🎪 Sirk çadırı hangi cisme benzer?',
        ['Küp', 'Silindir', 'Koni', 'Küre'],
        'Koni',
        'Sirk çadırı koni şeklindedir - tepesi sivri, tabanı geniş!',
        '🎪',
        1
      ),
      createMultipleChoice(
        'Cami kubbesi hangi cisme benzer?',
        ['Küp', 'Yarım küre', 'Koni', 'Silindir'],
        'Yarım küre',
        'Cami kubbeleri yarım küre şeklindedir - ses daha iyi yayılır!',
        '🕌',
        2
      ),
      createFillBlank(
        'Piramit tabanı ___ şeklindedir',
        ['kare', 'Kare'],
        'Mısır piramitlerinin tabanı kare şeklindedir.',
        '🏛️'
      ),
      createMultipleChoice(
        'Piramitler neden binlerce yıl ayakta?',
        ['Renkli oldukları için', 'Geniş taban, sivri tepe - çok sağlam', 'Küçük oldukları için', 'Yeni oldukları için'],
        'Geniş taban, sivri tepe - çok sağlam',
        'Piramit şekli çok sağlamdır - taban geniş, tepe sivri!',
        '🔺',
        2
      )
    ],

    summary: `Bugün geometrik cisimlerle yapılar oluşturmayı öğrendik! 🏗️

📚 ÖĞRENDİKLERİMİZ:

🔧 BİRLEŞTİRME YÖNTEMLERİ:
• Üst üste koyma (dikey) → Kuleler
• Yan yana koyma (yatay) → Duvarlar
• Karışık birleştirme → Evler, binalar
• İç içe koyma → Özel yapılar

🏗️ YAPI MODELLERİ:
🏠 EV = Prizma (gövde) + Üçgen prizma (çatı) + Silindir (baca)
🚗 ARABA = Prizma (gövde) + 4 Silindir (tekerlek)
🤖 ROBOT = Küp/Küre (kafa) + Prizma (gövde) + 4 Silindir (kol/bacak)
🚀 ROKET = Koni (burun) + Silindir (gövde) + 3 Üçgen (kanat)
🗼 KULE = Üst üste küpler + Koni/Piramit (tepe)
🌉 KÖPRÜ = Silindir kuleler + Prizma yol

⚖️ DENGE VE SAĞLAMLIK:
• Taban geniş olmalı
• Ağırlık altta olmalı
• Üçgen yapılar en sağlam

Artık sen de bir mimarsın! Hayal et, tasarla ve yap! ✨
Unutma: Her büyük yapı küçük bir hayalle başlar! 🌟`,

    nextTopicPreview: 'Sonraki konuda şekillerle güzel desenler ve modeller oluşturacağız! Geometrik cisimlerle sanat yapacağız! 🎨'
  }
};
