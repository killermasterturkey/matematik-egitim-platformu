// 2. SINIF - TEMA 1 - KONU 3: Şekillerle Modeller Oluşturalım
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu3SekillerleModeller: Topic = {
  id: 'sekillerle-modeller',
  title: 'Şekillerle Modeller Oluşturalım',
  description: 'Üçgen, kare, dikdörtgen ve çemberle harika desenler ve resimler yap!',
  emoji: '🎨',
  duration: '50 dk',
  difficulty: 2,
  keywords: ['model', 'desen', 'şekil', 'birleştirme', 'sanat', 'tasarım', 'tangram', 'mozaik', 'simetri'],
  objectives: [
    'Düzlemsel şekilleri birleştirir',
    'Şekillerle resimler oluşturur',
    'Desenleri tanır ve devam ettirir',
    'Yaratıcı tasarımlar yapar',
    'Tangram ve mozaik sanatını tanır',
    'Simetrik desenler oluşturur'
  ],
  content: {
    introduction: `Merhaba küçük sanatçı! 🎨

Bugün 2 boyutlu şekillerle (kare, dikdörtgen, üçgen, daire) harika resimler ve desenler yapacağız! Dünya'nın en ünlü ressamları, mimarları ve tasarımcıları geometrik şekilleri kullanarak eserlerini yaratmıştır. Sen de bu derste bir sanatçı olacaksın!

Şekiller her yerde:
🏠 Ev çizimi = Dikdörtgen + Üçgen
🚗 Araba çizimi = Dikdörtgen + Daireler
🌸 Çiçek çizimi = Daire + Yapraklar
🤖 Robot çizimi = Kareler + Dikdörtgenler
🦋 Kelebek çizimi = Daireler + Üçgenler (kanat)
🚀 Roket çizimi = Dikdörtgen + Üçgen (burun)
⛄ Kardan adam = Daireler (3 tane)

Tangram oyuncağını duydun mu? O da şekillerle yapılan sanat! Binlerce yıllık Çin oyunu geometrik şekillerle hayvan, insan ve nesne figürleri yapmayı öğretir.

Sen de bir sanatçısın! Fırçan şekiller! 🖌️`,

    motivationQuote: 'Şekillerle her şeyi çizebilirsin! Hayal gücünün sınırı yok! 🎨✨',

    funFacts: [
      '🎨 Piet Mondrian adlı ünlü ressam sadece kare, dikdörtgen ve düz çizgilerle dünyaca ünlü tablolar yaptı! Renkleri kırmızı, mavi, sarı, siyah ve beyaz kullandı.',
      '🏛️ Antik Yunan ve Roma mozaikleri binlerce küçük geometrik şekilden oluşur. Bazıları 2000 yıldan fazla ayakta!',
      '🕸️ Örümcek ağları mükemmel geometrik desenler içerir - altıgen ve üçgen şekiller kullanılır!',
      '☯️ Mandala desenleri binlerce yıldır Tibet ve Hindistan\'da dairelerle çiziliyor - meditasyon için kullanılır!',
      '🦋 Kelebek kanatları simetrik desenlerden oluşur - her iki kanat aynıdır!',
      '🎭 Tangram oyunu 2000 yıllık Çin oyunudur - 7 şekille binlerce farklı figür yapılabilir!',
      '🏺 İslam sanatı geometrik desenlerle ünlüdür - camilerde ve saraylarda görülebilir!',
      '🎪 Sirk palyaçolarının kostümleri geometrik şekil desenlerinden oluşur!',
      '🖼️ Wassily Kandinsky daire, üçgen ve karelerle soyut resimler yaptı!',
      '🧩 Tetris oyunu geometrik şekillerle oynanan dünyanın en popüler oyunlarından biri!'
    ],

    steps: [
      createStep(
        'Düzlemsel Şekilleri Hatırlayalım',
        `2 boyutlu (düz) şekillere DÜZLEMSEL ŞEKİL denir. Bu şekillerin sadece uzunluk ve genişliği vardır, derinliği (kalınlığı) yoktur. Kağıda çizilebilen her şekil düzlemseldir!

📐 TEMEL DÜZLEMSEL ŞEKİLLER:

⬜ KARE
• 4 eşit kenar
• 4 köşe (hepsi dik açı = 90°)
• Örnekler: Satranç karesi, fayans, post-it

▬ DİKDÖRTGEN
• 4 kenar (karşılıklı kenarlar eşit)
• 4 köşe (hepsi dik açı = 90°)
• Örnekler: Kitap kapağı, kapı, ekran

🔺 ÜÇGEN
• 3 kenar
• 3 köşe
• Örnekler: Yol tabelası, pizza dilimi, piramit yüzü

⭕ DAİRE (Çember)
• Kenar yok (sürekli eğri çizgi)
• Köşe yok
• Tamamen yuvarlak
• Örnekler: Tekerlek, tabak, saat

Bu şekilleri kağıda çizebilirsin!`,
        'Kare, dikdörtgen, üçgen ve daire temel şekillerimiz! Hepsi 2 boyutludur.',
        {
          visual: `⬜ KARE        ▬ DİKDÖRTGEN
4 eşit kenar   2'şer eşit kenar
4 köşe         4 köşe

🔺 ÜÇGEN       ⭕ DAİRE
3 kenar        Kenar yok
3 köşe         Köşe yok`,
          tip: '💡 Düzlemsel = Düz = Kağıda çizilebilen! 3 boyutlu cisimler değil, 2 boyutlu şekiller.',
          examples: [
            createExample(
              'Hangisi düzlemsel şekil: Küp mü Kare mi?',
              'Kare',
              'Kare düz bir şekildir (2B), küp ise hacimli bir cisimdir (3B). Karenin kalınlığı yok!',
              '⬜ = 2B (Düzlemsel) | 🎲 = 3B (Cisim)',
              ['Kare düz mü? Evet!', 'Kağıda çizilebilir mi? Evet!', 'Kalınlığı var mı? Hayır!', 'O zaman düzlemsel!']
            ),
            createExample(
              'Karenin kaç kenarı ve köşesi var?',
              '4 kenar, 4 köşe',
              'Kare, 4 eşit kenara ve 4 köşeye sahiptir. Her köşe dik açıdır (90°).',
              '⬜ = 4 kenar + 4 köşe',
              ['Kenarları say: 1, 2, 3, 4', 'Köşeleri say: 1, 2, 3, 4', 'Her kenar eşit', 'Her köşe 90°']
            ),
            createExample(
              'Dikdörtgenin karesinden farkı ne?',
              'Dikdörtgende karşılıklı kenarlar eşit, karede tüm kenarlar eşit',
              'Kare: 4 kenar aynı. Dikdörtgen: Uzun kenarlar eşit, kısa kenarlar eşit.',
              '⬜ Her kenar eşit | ▬ Karşılıklı kenarlar eşit',
              ['Kare: ■ (eşit kenarlar)', 'Dikdörtgen: ▭ (uzun-kısa)', 'Kare özel dikdörtgen!']
            ),
            createExample(
              'Üçgenin kaç köşesi var?',
              '3 köşe',
              'Üçgen adını 3 köşesinden alır! Üç-Gen = Üç köşe.',
              '🔺 = 3 kenar + 3 köşe',
              ['Köşeleri say: 1, 2, 3', 'Kenarları say: 1, 2, 3', 'Adı: ÜÇ-gen']
            ),
            createExample(
              'Dairenin köşesi var mı?',
              'Hayır, dairenin köşesi yoktur',
              'Daire tamamen yuvarlaktır, keskin köşe olmadığı için köşe sayısı 0!',
              '⭕ = 0 köşe, 0 kenar',
              ['Köşe ara: Bulamadık!', 'Kenar ara: Eğri çizgi var', 'Kenar yok, köşe yok!']
            ),
            createExample(
              'Pizza dilimi hangi şekle benzer?',
              'Üçgen',
              'Pizza dilimi üçgene benzer - sivri bir ucu ve geniş bir tabanı var!',
              '🍕 ≈ 🔺',
              ['Pizza dilimine bak', '3 kenarı var', 'Sivri ucu var', 'Üçgen!']
            )
          ]
        }
      ),

      createStep(
        'Şekilleri Birleştirme',
        `Farklı şekilleri birleştirerek yeni şekiller oluşturabiliriz! Tıpkı lego parçaları gibi, geometrik şekilleri de birleştirebilirsin.

🔧 BİRLEŞTİRME YÖNTEMLERİ:

1️⃣ YAN YANA KOYMA:
⬜ + ⬜ = ▬ (Dikdörtgen)
İki kareyi yan yana koy!

2️⃣ ÜST ÜSTE KOYMA:
🔺 + ⬜ = 🏠 (Ev şekli)
Karenin üstüne üçgen koy!

3️⃣ TABAN TABANA KOYMA:
🔺 + 🔺 = ◇ (Eşkenar dörtgen)
İki üçgeni taban tabana birleştir!

4️⃣ İÇ İÇE KOYMA:
⭕ içinde ⭕ = 🎯 (Hedef)
Büyük dairenin içine küçük daire koy!

5️⃣ KARMA BİRLEŞTİRME:
⭕ + ⭕ + ⭕ = ⛄ (Kardan adam)
Üç daireyi üst üste koy!

Hayal gücünü kullan! 🌈`,
        'Şekilleri birleştir, yeni şekiller oluştur!',
        {
          visual: `BİRLEŞTİRME ÖRNEKLERİ:

🔺       ⬜⬜      🔺        ⭕
🔺  →◇   yan→▬    ⬜ →🏠     ⭕→⛄
                            ⭕`,
          tip: '🧩 Tangram oyununu denedin mi? 7 parçayla binlerce şekil yapılabilir!',
          examples: [
            createExample(
              'İki kareyi yan yana koysan ne oluşur?',
              'Dikdörtgen',
              'İki kare yan yana = uzun bir dikdörtgen! Karşılıklı kenarlar eşit olur.',
              '⬜ + ⬜ = ▬',
              ['1. kareyi koy', '2. kareyi yanına koy', 'Şekle bak: Uzun', 'Dikdörtgen!']
            ),
            createExample(
              'Kare + Üçgen = ?',
              'Ev şekli',
              'Karenin üstüne üçgen koyarsan ev şekli oluşur! Kare duvar, üçgen çatı!',
              '⬜ + 🔺 = 🏠',
              ['Kareyi koy (duvar)', 'Üçgeni üstüne koy (çatı)', 'Ev tamam!']
            ),
            createExample(
              'İki üçgeni taban tabana birleştirsen ne olur?',
              'Eşkenar dörtgen (baklava dilimi)',
              'İki üçgeni tabanlarından birleştirirsen elmas/baklava şekli oluşur!',
              '🔺 + 🔻 = ◇',
              ['1. üçgeni koy', '2. üçgeni ters çevir', 'Tabanları birleştir', 'Baklava şekli!']
            ),
            createExample(
              '3 daireyi üst üste koysan ne olur?',
              'Kardan adam',
              'Büyükten küçüğe 3 daire = kardan adam! Alt büyük (gövde), orta orta (göğüs), üst küçük (kafa).',
              '⭕ + ⭕ + ⭕ = ⛄',
              ['Büyük daire (gövde)', 'Orta daire (göğüs)', 'Küçük daire (kafa)', 'Kardan adam!']
            ),
            createExample(
              'Dikdörtgen + 2 daire = ?',
              'Araba',
              'Dikdörtgen gövde, iki daire tekerlek olursa basit bir araba çizmiş olursun!',
              '▬ + ⭕⭕ = 🚗',
              ['Dikdörtgen (gövde)', 'Sol daire (tekerlek)', 'Sağ daire (tekerlek)', 'Araba!']
            ),
            createExample(
              '4 üçgeni bir merkez noktada birleştirsen ne olur?',
              'Yel değirmeni veya rüzgar gülü',
              'Üçgenleri merkez noktada döner şekilde birleştirirsen yel değirmeni olur!',
              '🔺🔺🔺🔺 = 💨',
              ['4 üçgen al', 'Sivri uçları merkeze koy', 'Döndürerek yerleştir', 'Yel değirmeni!']
            )
          ]
        }
      ),

      createStep(
        'Ev Çizimi 🏠',
        `Şekillerle ev çizelim! Ev çizimi çocukların en çok sevdiği aktivitelerden biridir. Geometrik şekillerle kolayca harika evler çizebilirsin!

🏠 EV ÇİZİMİ:

MALZEMELER:
• 1 Dikdörtgen (duvar)
• 1 Üçgen (çatı)
• 1-2 Küçük kare (pencere)
• 1 Dikdörtgen (kapı)
• 1 Daire (güneş)
• İsteğe bağlı: Baca, çiçek, ağaç

ÇİZİM ADIMLARI:
1️⃣ Önce büyük dikdörtgen çiz (duvar)
2️⃣ Üstüne üçgen ekle (çatı)
3️⃣ İçine küçük kareler çiz (pencere)
4️⃣ Alt ortaya dikdörtgen ekle (kapı)
5️⃣ Gökyüzüne daire çiz (güneş)
6️⃣ Detay ekle (baca, çiçek, ağaç)

☀️ Güneş için daire çiz!
🌳 Ağaç için üçgen + dikdörtgen!`,
        'Ev = Dikdörtgen + Üçgen + Kareler! Önce büyük şekiller, sonra detaylar!',
        {
          visual: `        ☀️ (Daire)
       ╱╲
      ╱  ╲   (Üçgen - Çatı)
     ╱    ╲
    ┌──────┐
    │⬜  ⬜│ (Kareler - Pencere)
    │      │ (Dikdörtgen - Duvar)
    │  ▬   │ (Dikdörtgen - Kapı)
    └──────┘
🌳 Ağaç: 🔺 + ▮`,
          tip: '🏠 Önce büyük şekilleri çiz, sonra detayları ekle! Silgiyle düzeltme yapmaktan korkma!',
          examples: [
            createExample(
              'Ev çiziminde kaç tane şekil var?',
              'En az 5 şekil',
              '1 dikdörtgen (duvar) + 1 üçgen (çatı) + 2 kare (pencere) + 1 dikdörtgen (kapı) = 5 şekil',
              '▬ + 🔺 + ⬜⬜ + ▬ = 5 şekil',
              ['Duvar: 1 dikdörtgen', 'Çatı: 1 üçgen', 'Pencereler: 2 kare', 'Kapı: 1 dikdörtgen', 'Toplam: 5!']
            ),
            createExample(
              'Ev çatısı neden üçgen?',
              'Yağmur ve kar akması için',
              'Üçgen çatı sayesinde yağmur ve kar aşağı kayar, evde su birikintisi olmaz!',
              '🔺 = 💧 akar',
              ['Üçgen eğimli', 'Su aşağı kayar', 'Ev kuru kalır', 'Akıllı tasarım!']
            ),
            createExample(
              'Apartman çizimi için kaç dikdörtgen?',
              'En az 5-10 dikdörtgen',
              'Apartmanda her kat için dikdörtgen, her daire için pencere kareleri gerekir!',
              '▬ üstüne ▬ üstüne ▬',
              ['Giriş katı: 1', 'Her kat: 1 dikdörtgen', '3 katlı = 4 dikdörtgen', 'Pencereler: Kareler']
            ),
            createExample(
              'Kulübe ve ev arasındaki fark?',
              'Kulübe daha küçük, basit',
              'Kulübe: 1 kare + 1 üçgen. Ev: 1 dikdörtgen + 1 üçgen + pencere + kapı',
              '⬜ + 🔺 (basit) vs ▬ + 🔺 + ⬜⬜ + ▬ (detaylı)',
              ['Kulübe: Sadece duvar + çatı', 'Ev: Pencere + kapı var', 'Kulübe küçük', 'Ev büyük']
            ),
            createExample(
              'Baca hangi şekille çizilir?',
              'Dikdörtgen',
              'Baca çatıdan çıkan dikdörtgendir - duman için!',
              '▬ (baca) üzerinde 🔺 (çatı)',
              ['Baca dikdörtgen', 'Çatıda duruyor', 'Duman çıkar', 'Dikdörtgen + Daire (duman)']
            ),
            createExample(
              'Kapı pencereden büyük mü?',
              'Evet, kapı daha büyük',
              'Kapı insanların geçmesi için büyük dikdörtgen, pencere ise küçük karedir.',
              '▬ (kapı) > ⬜ (pencere)',
              ['Kapı: Büyük dikdörtgen', 'Pencere: Küçük kare', 'Kapı > Pencere', 'İnsan kapıdan geçer']
            )
          ]
        }
      ),

      createStep(
        'Araba Çizimi 🚗',
        `Şekillerle araba çizelim! Araba çizimi çok eğlencelidir ve farklı araç türleri öğrenirsin.

🚗 ARABA ÇİZİMİ:

MALZEMELER:
• 1 Dikdörtgen (gövde)
• 1 Küçük dikdörtgen veya trapez (kabin)
• 2 Daire (tekerlekler)
• Küçük kareler (pencereler)
• İsteğe bağlı: Farlar (daire), Plaka (dikdörtgen)

ÇİZİM ADIMLARI:
1️⃣ Büyük dikdörtgen çiz (gövde)
2️⃣ Üstüne küçük dikdörtgen/trapez ekle (kabin)
3️⃣ Alta 2 daire çiz (tekerlekler)
4️⃣ Kabine kare pencereler ekle
5️⃣ Detay ekle (far, plaka, kapı çizgisi)

ARAÇ TÜRLERİ:
🚗 Araba: Kısa gövde + 2 tekerlek
🚚 Kamyon: Uzun gövde + 2-4 tekerlek
🚌 Otobüs: Çok uzun gövde + 4-6 tekerlek
🚜 Traktör: Büyük arka tekerlek + Küçük ön tekerlek`,
        'Araba = Dikdörtgenler + Daireler! Her araç farklı boyutta şekil kullanır.',
        {
          visual: `      ┌───┐
      │⬜│  (Pencere - Kare)
   ┌──┴───┴──┐
   │   🚗   │  (Gövde - Dikdörtgen)
   └─────────┘
     ⭕   ⭕   (Tekerlekler - Daire)`,
          tip: '🚗 Tekerlekleri yuvarlak çiz - daire olmalı! Kare tekerlek zıplar!',
          examples: [
            createExample(
              'Araba çiziminde tekerlekler hangi şekil?',
              'Daire',
              'Tekerlekler yuvarlaktır, bu yüzden daire şeklinde çizilir! Kare tekerlek olsa araba zıplardı!',
              '⭕ = Tekerlek',
              ['Tekerlek yuvarlak', 'Daire de yuvarlak', 'Tekerlek = Daire!', 'Düzgün yuvarlanır']
            ),
            createExample(
              'Kamyon ve araba çizimi arasındaki fark ne?',
              'Kamyonun gövde dikdörtgeni daha uzun',
              'Kamyon daha büyük ve uzun, bu yüzden daha uzun dikdörtgen kullanılır. Ayrıca kamyonun kasası ayrı bir dikdörtgendir.',
              '🚗 ▬ | 🚚 ▬▬▬',
              ['Araba gövdesi: Kısa dikdörtgen', 'Kamyon gövdesi: Uzun dikdörtgen', 'Kamyon kasası: Ekstra dikdörtgen', 'Fark: Uzunluk + Kasa!']
            ),
            createExample(
              'Otobüs çiziminde kaç pencere var?',
              '5-10 pencere (kare veya dikdörtgen)',
              'Otobüs uzun olduğu için çok sayıda yolcu penceresi vardır. Her pencere kare veya dikdörtgen!',
              '▬▬▬ içinde ⬜⬜⬜⬜⬜',
              ['Otobüs uzun', 'Çok yolcu var', 'Her yolcuya pencere', '5-10 kare pencere']
            ),
            createExample(
              'Traktör çiziminin özelliği ne?',
              'Arka tekerlek ön tekerlekten büyük',
              'Traktörün arka tekerlekleri çok büyük daire, ön tekerlekleri küçük dairedir!',
              '⭕ (büyük arka) + ⚫ (küçük ön)',
              ['Arka tekerlek: Büyük daire', 'Ön tekerlek: Küçük daire', 'Güç için böyle', 'Tarlada çalışır']
            ),
            createExample(
              'Araba farları hangi şekil?',
              'Daire veya dikdörtgen',
              'Eski arabalar daire far kullanır, yeni arabalar dikdörtgen far kullanabilir.',
              '⭕ veya ▬ (far)',
              ['Eski araba: Daire far', 'Yeni araba: Dikdörtgen far', 'İkisi de olabilir', 'Aydınlatma için']
            ),
            createExample(
              'Bisiklet çiziminde kaç daire var?',
              '2 daire (tekerlekler)',
              'Bisikletin 2 tekerleri vardır - ikisi de daire! Ortalarında küçük daire (göbek) olabilir.',
              '⭕ ─ ⭕',
              ['Ön tekerlek: 1 daire', 'Arka tekerlek: 1 daire', 'Toplam: 2 daire', 'Gövde: Çizgiler']
            )
          ]
        }
      ),

      createStep(
        'Çiçek ve Ağaç Çizimi 🌸🌳',
        `Doğadaki şekilleri çizelim! Çiçek ve ağaç çizimi doğayı tanımamıza yardımcı olur.

🌸 ÇİÇEK TÜRLERİ VE ŞEKİLLERİ:

PAPATYA 🌼:
• 1 Sarı daire (orta)
• 6-8 Beyaz oval (yaprak)
• 1 Yeşil dikdörtgen (sap)

GÜL 🌹:
• İç içe daireler/yarım daireler
• Yeşil dikdörtgen sap

AYÇİÇEĞİ 🌻:
• 1 Büyük kahverengi daire (orta)
• Çok sayıda sarı oval (yaprak)

LALE 🌷:
• 1 Oval veya yarım daire (taç yaprak)
• 1 Dikdörtgen (sap)

🌳 AĞAÇ TÜRLERİ VE ŞEKİLLERİ:

ÇAM AĞACI 🌲:
• 1-3 Üçgen (sivri yaprak)
• 1 Dikdörtgen (gövde)

MEŞE AĞACI 🌳:
• 1 Büyük daire/oval (yaprak)
• 1 Dikdörtgen (gövde)

HURMA AĞACI 🌴:
• Uzun dikdörtgen gövde
• Üstte üçgenler (yapraklar)`,
        'Çiçek = Daireler + Dikdörtgen, Ağaç = Üçgen/Daire + Dikdörtgen!',
        {
          visual: `🌸 ÇİÇEK          🌳 AĞAÇ
    ⭕               🔺
  ⭕🟡⭕           🔺 🔺
    ⭕              │▮│
     │              │▮│
     │`,
          tip: '🌻 Ayçiçeği için ortaya büyük daire, etrafına küçük yapraklar! Doğaya bak, şekilleri gör!',
          examples: [
            createExample(
              'Papatya çiziminde kaç daire var?',
              'En az 7-9 daire (1 orta + 6-8 yaprak)',
              'Ortada 1 sarı daire, etrafında 6-8 beyaz yaprak dairesi!',
              '🟡 + ⭕⭕⭕⭕⭕⭕ = 🌼',
              ['Orta: 1 sarı daire', 'Yapraklar: 6-8 beyaz daire', 'Sap: 1 dikdörtgen', 'Toplam: 8-10 şekil']
            ),
            createExample(
              'Çam ağacı çiziminde hangi şekil kullanılır?',
              'Üçgen (1-3 tane)',
              'Çam ağaçları sivri olduğu için üçgen şeklinde çizilir! Birden fazla üçgen üst üste koyulabilir.',
              '🌲 = 🔺 + 🔺 + 🔺 + ▮',
              ['Çam sivri', 'Üçgen de sivri', '3 üçgen üst üste', 'Altta dikdörtgen gövde']
            ),
            createExample(
              'Meşe ağacı ve çam ağacı farkı ne?',
              'Meşe: Daire yaprak, Çam: Üçgen yaprak',
              'Meşe ağacının yaprağı yuvarlak daire, çam ağacının yaprağı sivri üçgen!',
              '🌳 = ⭕ + ▮ | 🌲 = 🔺 + ▮',
              ['Meşe: Yuvarlak yaprak', 'Çam: Sivri yaprak', 'Gövde ikisinde de dikdörtgen', 'Fark: Yaprak şekli']
            ),
            createExample(
              'Ayçiçeği neden özel?',
              'Ortası çok büyük daire, yaprakları çok sayıda',
              'Ayçiçeğinin ortası büyük kahverengi daire, etrafında 20-30 sarı yaprak var!',
              '🌻 = Büyük ⭕ + çok sayıda yaprak',
              ['Orta: Büyük daire', 'Çekirdekler burada', 'Yapraklar: 20-30 oval', 'En büyük çiçek!']
            ),
            createExample(
              'Lale çiziminde kaç şekil var?',
              '3-4 şekil',
              'Lale: 1 oval (çiçek) + 2 uzun yaprak (oval) + 1 sap (dikdörtgen)!',
              '🌷 = oval + oval + oval + ▮',
              ['Çiçek başı: 1 oval', 'Yapraklar: 2 oval', 'Sap: 1 dikdörtgen', 'Toplam: 4 şekil']
            ),
            createExample(
              'Orman resmi çizmek için kaç şekil?',
              'Çok sayıda (ağaç + çiçek + güneş)',
              'Orman: 5-10 ağaç (üçgen+dikdörtgen) + çiçekler (daireler) + güneş (1 daire) + bulut (daireler)',
              '🌲🌳🌸☀️☁️ = 50+ şekil',
              ['Her ağaç: 2-4 şekil', '5 ağaç: 10-20 şekil', 'Çiçekler: 10-20 şekil', 'Güneş+bulut: 5-10 şekil']
            )
          ]
        }
      ),

      createStep(
        'Desen Oluşturma 🎭',
        `Şekilleri tekrarlayarak desenler oluşturabiliriz!

🔄 DESEN KURALLARI:

1️⃣ TEKRAR EDEN DESEN:
⬜🔺⬜🔺⬜🔺⬜🔺
Kare-Üçgen-Kare-Üçgen...

2️⃣ RENKLİ DESEN:
🔴🔵🔴🔵🔴🔵
Kırmızı-Mavi-Kırmızı-Mavi...

3️⃣ BOYUT DESENİ:
⬜▪️⬜▪️⬜▪️
Büyük-Küçük-Büyük-Küçük...

4️⃣ KARIŞIK DESEN:
🔴🔺🔵⬜🔴🔺🔵⬜
4'lü tekrar!

Deseni bul ve devam ettir! 🧩`,
        'Desen = Tekrar eden şekiller!',
        {
          visual: `DESEN ÖRNEKLERİ:

1. ⬜🔺⬜🔺⬜🔺 ❓
   (Sonraki: 🔺)

2. ⭕⭕⬜⭕⭕⬜ ❓
   (Sonraki: ⭕)

3. 🔴🔵🟢🔴🔵🟢 ❓
   (Sonraki: 🔴)`,
          tip: '🔍 Desende tekrar eden kısmı bul, sonra devam ettir!',
          examples: [
            createExample(
              '⬜⬜🔺⬜⬜🔺⬜⬜? Sıradaki şekil ne?',
              '🔺 (Üçgen)',
              'Desen: Kare-Kare-Üçgen tekrarı. İki kareden sonra üçgen gelir!',
              '⬜⬜🔺 | ⬜⬜🔺 | ⬜⬜🔺',
              ['Desene bak: ⬜⬜🔺', 'Bu 3 şekil tekrarlanıyor', '2 kareden sonra üçgen', 'Sonraki: 🔺']
            ),
            createExample(
              '🔴🔵🟢🔴🔵? Sıradaki renk ne?',
              '🟢 (Yeşil)',
              'Desen: Kırmızı-Mavi-Yeşil tekrarı. Maviden sonra yeşil gelir!',
              '🔴🔵🟢 | 🔴🔵🟢',
              ['Kırmızı → Mavi → Yeşil', 'Bu 3 renk tekrarlanıyor', 'Maviden sonra yeşil', 'Sonraki: 🟢']
            ),
            createExample(
              '⭕⬜⭕⬜⭕? Sıradaki şekil ne?',
              '⬜ (Kare)',
              'Desen: Daire-Kare tekrarı. Daireden sonra kare gelir!',
              '⭕⬜ | ⭕⬜ | ⭕⬜',
              ['Desen: Daire-Kare', 'Sonra yine Daire-Kare', 'Daireden sonra kare', 'Sonraki: ⬜']
            ),
            createExample(
              '🔺🔺⬜🔺🔺? Sıradaki şekil ne?',
              '⬜ (Kare)',
              'Desen: Üçgen-Üçgen-Kare tekrarı. İki üçgenden sonra kare gelir!',
              '🔺🔺⬜ | 🔺🔺⬜',
              ['Desen: 🔺🔺⬜', '2 üçgen 1 kare', 'Sonra tekrar', 'Sonraki: ⬜']
            ),
            createExample(
              '🔵🔵🔴🔴🔵🔵? Sıradaki ne?',
              '🔴🔴 (2 kırmızı)',
              'Desen: 2 mavi - 2 kırmızı tekrarı. 2 maviden sonra 2 kırmızı gelir!',
              '🔵🔵🔴🔴 | 🔵🔵🔴🔴',
              ['Desen: 2 mavi + 2 kırmızı', 'Bu 4 şekil tekrar', 'Sonraki: 🔴🔴']
            ),
            createExample(
              'Büyük-küçük-büyük-küçük deseni nasıl devam eder?',
              'Büyük-küçük',
              'Boyut deseni: Büyük ve küçük şekiller sırayla. Küçükten sonra büyük!',
              '⬛▪️⬛▪️⬛▪️',
              ['Büyük-küçük tekrar', 'Boyut değişiyor', 'Sıra: B-K-B-K', 'Sonraki: Büyük']
            )
          ]
        }
      ),

      createStep(
        'Tangram Oyunu 🧩',
        `Tangram, 7 geometrik parçayla binlerce farklı figür yapabileceğin efsanevi Çin oyunu! 2000 yıldır oynanıyor.

🧩 TANGRAM PARÇALARI (7 parça):

5 ÜÇGEN:
• 2 Büyük üçgen
• 1 Orta üçgen
• 2 Küçük üçgen

1 KARE:
• 1 Orta boy kare

1 PARALELKENAR:
• 1 Eğik dikdörtgen

🎯 TANGRAM KURALLARI:
✅ 7 parçanın hepsini kullan
✅ Parçaları üst üste koyma
✅ Parçalar birbirine değmeli
❌ Parça dışarıda kalmamalı

YAPILABİLECEK FİGÜRLER:
🐱 Kedi, 🐕 Köpek, 🏠 Ev, ⛵ Gemi
🏃 İnsan, 🐦 Kuş, 🐟 Balık ve daha fazlası!`,
        'Tangram = 7 parça + Hayal gücü = Sonsuz figür!',
        {
          visual: `TANGRAM PARÇALARI:

🔺🔺 Büyük üçgenler (2)
 🔺  Orta üçgen (1)
🔺🔺 Küçük üçgenler (2)
 ⬜  Kare (1)
 ◇  Paralelkenar (1)

ÖRNEK FİGÜRLER:
🐱 Kedi    🏠 Ev    ⛵ Gemi`,
          tip: '🧩 Tangram setini internetten indirebilir, kağıttan kesebilirsin!',
          examples: [
            createExample(
              'Tangram kaç parçadan oluşur?',
              '7 parça',
              'Tangram 7 geometrik parçadan oluşur: 5 üçgen, 1 kare, 1 paralelkenar.',
              '🧩 = 7 parça',
              ['5 üçgen', '1 kare', '1 paralelkenar', 'Toplam: 7']
            ),
            createExample(
              'Tangram\'da en çok hangi şekil var?',
              'Üçgen (5 tane)',
              'Tangram\'da 5 tane üçgen var: 2 büyük, 1 orta, 2 küçük.',
              '🔺🔺🔺🔺🔺 = 5 üçgen',
              ['2 büyük üçgen', '1 orta üçgen', '2 küçük üçgen', 'Toplam: 5']
            ),
            createExample(
              'Tangram\'la kedi figürü nasıl yapılır?',
              'Üçgenleri kafa, gövde, kuyruk için kullan',
              'Büyük üçgen gövde, küçük üçgenler kulak ve kuyruk, kare ve paralelkenar bacaklar olabilir!',
              '🐱 = 7 parça dizilimi',
              ['Gövde: Büyük üçgen', 'Kafa: Orta üçgen', 'Kulaklar: Küçük üçgenler', 'Kuyruk + Bacaklar']
            ),
            createExample(
              'Tangram\'da parçalar üst üste konabilir mi?',
              'Hayır, konulamaz',
              'Tangram kuralı: Parçalar üst üste gelemez, hepsi yan yana olmalı!',
              '❌ Üst üste yasak',
              ['Kural: Üst üste olmaz', 'Yan yana olmalı', 'Hepsi görünmeli', 'Parça kaybolmamalı']
            ),
            createExample(
              'Tangram hangi ülkeden geliyor?',
              'Çin',
              'Tangram yaklaşık 2000 yıl önce Çin\'de icat edilmiş eski bir oyundur!',
              '🇨🇳 Çin oyunu',
              ['2000 yıl önce', 'Çin\'de icat edildi', 'Dünyaya yayıldı', 'Hala popüler!']
            ),
            createExample(
              'Tangram ile kaç farklı figür yapılabilir?',
              'Binlerce (sonsuz denebilir)',
              'Tangram\'ın 7 parçasıyla binlerce farklı hayvan, nesne ve insan figürü yapılabilir!',
              '7 parça → ∞ figür',
              ['Hayvanlar', 'Nesneler', 'İnsanlar', 'Binlerce kombinasyon!']
            )
          ]
        }
      ),

      createStep(
        'Mozaik Sanatı 🎨',
        `Mozaik, küçük şekil parçalarını yan yana dizerek büyük resimler oluşturmaktır. Antik çağlardan beri yapılır!

🎨 MOZAİK NEDİR?

Küçük taş, cam veya seramik parçalarını bir araya getirerek resim yapma sanatı.

📐 MOZAİK ŞEKİLLERİ:
• Kareler (en yaygın)
• Üçgenler
• Altıgenler
• Daireler

🏛️ NEREDE GÖRÜRSİN?
• Cami ve kilise zeminleri
• Havuz kenarları
• Mutfak ve banyo fayansları
• Roma dönemi kalıntıları

🎯 SENİN MOZAİĞİN:
Kare kağıtları boyayıp yan yana dizerek mozaik yap!
Kareli defter kullanarak kolayca mozaik çizebilirsin!`,
        'Mozaik = Küçük parçalar + Sabır = Büyük sanat!',
        {
          visual: `MOZAİK ÖRNEĞİ:

⬜🟥⬜🟥⬜
🟥⬜🟥⬜🟥
⬜🟥⬜🟥⬜
🟥⬜🟥⬜🟥

(Satranç tahtası deseni)

🌸 ÇİÇEK MOZAİĞİ:
  🟡
🔴🟡🔴
  🟡`,
          tip: '📓 Kareli deftere boyama yaparak kolay mozaik oluşturabilirsin!',
          examples: [
            createExample(
              'Mozaik nedir?',
              'Küçük parçalardan yapılan büyük resim',
              'Mozaik, küçük taş veya cam parçalarını bir araya getirerek büyük resimler oluşturma sanatıdır.',
              '▪️▪️▪️ → 🖼️',
              ['Küçük parçalar al', 'Yan yana diz', 'Resim oluştur', 'Mozaik!']
            ),
            createExample(
              'Mozaikte en çok hangi şekil kullanılır?',
              'Kare',
              'Kareler kolay dizildiği için mozaikte en çok kare şekli kullanılır.',
              '⬜⬜⬜ = Kolay diz',
              ['Kare: 4 düz kenar', 'Boşluk kalmaz', 'Kolay dizer', 'En yaygın!']
            ),
            createExample(
              'Kareli defterde nasıl mozaik yapılır?',
              'Kareleri boyayarak',
              'Kareli defterdeki kareleri farklı renklerle boyayarak mozaik desen oluşturabilirsin!',
              '📓 + 🖍️ = Mozaik',
              ['Kareli defter al', 'Desen düşün', 'Kareleri boya', 'Mozaik tamam!']
            ),
            createExample(
              'Satranç tahtası mozaik mi?',
              'Evet, siyah-beyaz kare mozaik',
              'Satranç tahtası 64 kare (8x8) siyah-beyaz mozaiktir!',
              '⬜⬛⬜⬛ = Satranç',
              ['64 kare var', 'Siyah-beyaz', 'Sırayla dizili', 'Mozaik!']
            ),
            createExample(
              'Camilerde mozaik nerede görülür?',
              'Duvarlarda ve kubbelerde',
              'İslam sanatında geometrik mozaikler cami duvarlarını ve kubbelerini süsler. Selçuklu ve Osmanlı eserleri ünlüdür!',
              '🕌 = Geometrik mozaik',
              ['Duvarlar', 'Kubbeler', 'Çiniler', 'Geometrik desenler']
            ),
            createExample(
              'Piksel sanatı mozaik mi?',
              'Evet, dijital mozaik',
              'Bilgisayar piksel sanatı da mozaiğin modern versiyonudur! Her piksel küçük bir karedir.',
              '👾 = Piksel mozaik',
              ['Piksel = Küçük kare', 'Yan yana dizilir', 'Resim oluşur', 'Dijital mozaik!']
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // === TEMEL ŞEKİLLER (1-10) ===
      createMultipleChoice(
        '🏠 Ev çatısı hangi şekille çizilir?',
        ['Kare', 'Daire', 'Üçgen', 'Dikdörtgen'],
        'Üçgen',
        'Ev çatıları üçgen şeklindedir - sivri tepeli!',
        '🏠',
        1
      ),
      createMultipleChoice(
        'Karenin kaç köşesi vardır?',
        ['2', '3', '4', '5'],
        '4',
        'Karenin 4 köşesi ve 4 eşit kenarı vardır.',
        '⬜',
        1
      ),
      createMultipleChoice(
        'Üçgenin kaç kenarı vardır?',
        ['2', '3', '4', '5'],
        '3',
        'Üçgenin 3 kenarı ve 3 köşesi vardır - adı da buradan gelir!',
        '🔺',
        1
      ),
      createFillBlank(
        'Dairenin köşe sayısı: ___',
        ['0', 'yok', 'sıfır'],
        'Daire tamamen yuvarlaktır, köşesi yoktur!',
        '⭕'
      ),
      createMultipleChoice(
        'Dikdörtgenin kaç kenarı var?',
        ['2', '3', '4', '6'],
        '4',
        'Dikdörtgenin 4 kenarı var - karşılıklı kenarlar eşit!',
        '▬',
        1
      ),
      createFillBlank(
        'Karenin tüm kenarları ___',
        ['eşit', 'eşittir', 'aynı'],
        'Karenin 4 kenarı birbirine eşittir.',
        '⬜'
      ),
      createMultipleChoice(
        'Hangisi düzlemsel şekildir?',
        ['Küp', 'Top', 'Kare', 'Silindir'],
        'Kare',
        'Kare 2 boyutlu düzlemsel şekildir. Diğerleri 3 boyutlu cisimdir.',
        '⬜ vs 🎲',
        2
      ),
      createFillBlank(
        'Daire tamamen ___ bir şekildir',
        ['yuvarlak', 'eğri'],
        'Dairenin kenarı yok, tamamen yuvarlak!',
        '⭕'
      ),
      createMultipleChoice(
        'Pencere genellikle hangi şekilde?',
        ['Üçgen', 'Daire', 'Kare', 'Beşgen'],
        'Kare',
        'Pencereler genellikle kare veya dikdörtgen şeklindedir.',
        '🪟',
        1
      ),
      createFillBlank(
        'Üçgen adını ___ köşesinden alır',
        ['3', 'üç'],
        'Üç-Gen = Üç köşe demektir!',
        '🔺'
      ),

      // === ŞEKİL BİRLEŞTİRME (11-20) ===
      createFillBlank(
        'İki kare yan yana = ___',
        ['dikdörtgen', 'Dikdörtgen'],
        'İki kareyi yan yana koyunca uzun bir dikdörtgen oluşur.',
        '⬜ + ⬜ = ?'
      ),
      createMultipleChoice(
        'Kare + Üçgen = ?',
        ['Araba', 'Ev', 'Çiçek', 'Ağaç'],
        'Ev',
        'Karenin (duvar) üstüne üçgen (çatı) koyunca ev olur!',
        '⬜ + 🔺 = ?',
        1
      ),
      createFillBlank(
        'İki üçgeni taban tabana birleştir = ___',
        ['baklava', 'eşkenar dörtgen', 'karo'],
        'İki üçgen taban tabana = baklava dilimi şekli!',
        '🔺 + 🔻 = ?'
      ),
      createMultipleChoice(
        '3 daire üst üste = ?',
        ['Araba', 'Ev', 'Kardan adam', 'Çiçek'],
        'Kardan adam',
        '3 daire üst üste koyunca kardan adam olur! ⛄',
        '⭕ + ⭕ + ⭕ = ?',
        1
      ),
      createFillBlank(
        'Dikdörtgen + 2 daire = ___',
        ['araba', 'Araba', 'otobüs'],
        'Dikdörtgen gövde + 2 daire tekerlek = araba!',
        '▬ + ⭕⭕ = ?'
      ),
      createMultipleChoice(
        '4 üçgeni merkez noktada birleştir = ?',
        ['Ev', 'Yel değirmeni', 'Çiçek', 'Araba'],
        'Yel değirmeni',
        '4 üçgen merkezde döner şekilde = yel değirmeni!',
        '🔺🔺🔺🔺',
        2
      ),
      createFillBlank(
        'Dairenin içine daire = ___ tahtası',
        ['dart', 'hedef', 'nişan'],
        'İç içe daireler dart tahtası veya hedef oluşturur!',
        '⭕ içinde ⭕'
      ),
      createMultipleChoice(
        'Roket çizimi için hangi 2 şekil?',
        ['Kare + Daire', 'Dikdörtgen + Üçgen', 'Daire + Daire', 'Üçgen + Üçgen'],
        'Dikdörtgen + Üçgen',
        'Roket = Dikdörtgen gövde + Üçgen burun!',
        '🚀',
        1
      ),
      createFillBlank(
        'Kelebek kanatları ___ üçgenle çizilir',
        ['2', 'iki'],
        'Kelebek: 2 üçgen kanat + gövde için dikdörtgen!',
        '🦋'
      ),
      createMultipleChoice(
        'Balık çiziminde gövde için ne kullanılır?',
        ['Kare', 'Oval/Elips', 'Üçgen', 'Dikdörtgen'],
        'Oval/Elips',
        'Balık gövdesi oval, kuyruk üçgen şeklinde çizilir!',
        '🐟',
        2
      ),

      // === DESEN OLUŞTURMA (21-30) ===
      createFillBlank(
        '⬜🔺⬜🔺⬜? Sıradaki şekil: ___',
        ['🔺', 'üçgen', 'Üçgen'],
        'Desen: Kare-Üçgen tekrarı. Kareden sonra üçgen gelir!',
        '⬜🔺⬜🔺⬜?'
      ),
      createMultipleChoice(
        '⬜⬜🔺⬜⬜🔺⬜⬜? Sıradaki ne?',
        ['⬜', '🔺', '⭕', '▬'],
        '🔺',
        'Desen: Kare-Kare-Üçgen tekrarı. İki kareden sonra üçgen gelir!',
        '⬜⬜🔺⬜⬜🔺⬜⬜?',
        2
      ),
      createFillBlank(
        '🔴🔵🟢🔴🔵? Sıradaki: ___',
        ['🟢', 'yeşil', 'Yeşil'],
        'Desen: Kırmızı-Mavi-Yeşil tekrarı. Maviden sonra yeşil gelir!',
        '🔴🔵🟢🔴🔵?'
      ),
      createMultipleChoice(
        '🔵🔴🔵🔴🔵? Sıradaki renk ne?',
        ['🔵', '🔴', '🟢', '🟡'],
        '🔴',
        'Desen: Mavi-Kırmızı tekrarı. Maviden sonra kırmızı gelir!',
        '🔵🔴🔵🔴🔵?',
        1
      ),
      createFillBlank(
        '⭕⬜⭕⬜⭕? Sıradaki: ___',
        ['⬜', 'kare', 'Kare'],
        'Desen: Daire-Kare tekrarı. Daireden sonra kare!',
        '⭕⬜⭕⬜⭕?'
      ),
      createMultipleChoice(
        '🔺🔺🔺⬜🔺🔺🔺? Sıradaki ne?',
        ['🔺', '⬜', '⭕', '▬'],
        '⬜',
        'Desen: 3 üçgen + 1 kare tekrarı!',
        '🔺🔺🔺⬜',
        2
      ),
      createFillBlank(
        'Büyük-küçük-büyük-küçük... Sıradaki: ___',
        ['büyük', 'Büyük'],
        'Boyut deseni: Küçükten sonra büyük gelir!',
        '⬛▪️⬛▪️?'
      ),
      createMultipleChoice(
        '🟡🟡🔴🟡🟡🔴? Sıradaki ne?',
        ['🟡', '🔴', '🟢', '🔵'],
        '🟡',
        'Desen: Sarı-Sarı-Kırmızı tekrarı. Kırmızıdan sonra sarı!',
        '🟡🟡🔴',
        2
      ),
      createFillBlank(
        '🔵🔵🔴🔴🔵🔵? Sıradaki 2 renk: ___',
        ['kırmızı', '🔴🔴', 'kırmızı kırmızı'],
        'Desen: 2 mavi + 2 kırmızı tekrarı!',
        '🔵🔵🔴🔴'
      ),
      createMultipleChoice(
        'Desen nedir?',
        ['Rastgele şekiller', 'Tekrar eden şekil sırası', 'Tek şekil', 'Renksiz şekil'],
        'Tekrar eden şekil sırası',
        'Desen = Belirli bir sırayla tekrar eden şekiller!',
        '🔄',
        1
      ),

      // === MODEL OLUŞTURMA (31-35) ===
      createFillBlank(
        'Ev çizimi = Dikdörtgen + ___',
        ['üçgen', 'Üçgen'],
        'Ev çiziminde dikdörtgen (duvar) ve üçgen (çatı) kullanılır.',
        '🏠'
      ),
      createMultipleChoice(
        '🚗 Araba tekerlekleri hangi şekille çizilir?',
        ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen'],
        'Daire',
        'Tekerlekler yuvarlaktır, bu yüzden daire şeklinde çizilir!',
        '🚗',
        1
      ),
      createFillBlank(
        'Robot çiziminde kafa için ___ kullanılır',
        ['kare', 'Kare', 'daire'],
        'Robot kafası kare veya daire şeklinde çizilebilir.',
        '🤖'
      ),
      createMultipleChoice(
        '🌸 Çiçek ortası hangi şekille çizilir?',
        ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen'],
        'Daire',
        'Çiçeğin ortası yuvarlaktır - daire şeklinde çizilir!',
        '🌸',
        1
      ),
      createFillBlank(
        'Güneş ___ şeklinde çizilir',
        ['daire', 'Daire'],
        'Güneş yuvarlaktır, daire şeklinde çizilir!',
        '☀️'
      ),

      // === TANGRAM (36-40) ===
      createMultipleChoice(
        'Tangram kaç parçadan oluşur?',
        ['5', '6', '7', '8'],
        '7',
        'Tangram tam 7 geometrik parçadan oluşur!',
        '🧩',
        1
      ),
      createFillBlank(
        'Tangram\'da en çok ___ şekli var',
        ['üçgen', 'Üçgen'],
        'Tangram\'da 5 üçgen var (2 büyük, 1 orta, 2 küçük)!',
        '🧩'
      ),
      createMultipleChoice(
        'Tangram hangi ülkeden?',
        ['Japonya', 'Çin', 'Hindistan', 'Türkiye'],
        'Çin',
        'Tangram yaklaşık 2000 yıl önce Çin\'de icat edildi!',
        '🇨🇳',
        1
      ),
      createFillBlank(
        'Tangram kuralı: Parçalar üst üste ___',
        ['gelmez', 'konmaz', 'konamaz', 'olmaz'],
        'Tangram\'da parçalar üst üste gelemez, yan yana olmalı!',
        '❌'
      ),
      createMultipleChoice(
        'Tangram\'da kare kaç tane?',
        ['0', '1', '2', '3'],
        '1',
        'Tangram\'da sadece 1 adet orta boy kare bulunur!',
        '⬜',
        1
      ),

      // === MOZAİK (41-45) ===
      createMultipleChoice(
        'Mozaikte en çok kullanılan şekil?',
        ['Üçgen', 'Daire', 'Kare', 'Beşgen'],
        'Kare',
        'Kareler kolay dizildiği için mozaikte en çok kullanılır!',
        '⬜⬜⬜',
        1
      ),
      createFillBlank(
        'Mozaik = Küçük parçalar + ___',
        ['sabır', 'emek', 'zaman'],
        'Mozaik sabır ve emek ister - küçük parçaları dizmek zaman alır!',
        '🎨'
      ),
      createMultipleChoice(
        'Satranç tahtası kaç kareden oluşur?',
        ['32', '48', '64', '100'],
        '64',
        'Satranç tahtası 8x8 = 64 kareden oluşan mozaiktir!',
        '♟️',
        2
      ),
      createFillBlank(
        'Piksel sanatı dijital ___ gibidir',
        ['mozaik', 'Mozaik'],
        'Piksel = küçük kare = dijital mozaik!',
        '👾'
      ),
      createMultipleChoice(
        '🌳 Çam ağacı hangi şekle benzer?',
        ['Kare', 'Dikdörtgen', 'Daire', 'Üçgen'],
        'Üçgen',
        'Çam ağaçları üçgen şeklindedir - sivri tepeli!',
        '🌲',
        1
      )
    ],

    summary: `Bugün şekillerle modeller oluşturmayı öğrendik! 🎨

📐 TEMEL ŞEKİLLER:
• Kare: 4 eşit kenar, 4 köşe
• Dikdörtgen: Karşılıklı kenarlar eşit, 4 köşe
• Üçgen: 3 kenar, 3 köşe
• Daire: Kenar yok, köşe yok, tamamen yuvarlak

🔧 ŞEKİL BİRLEŞTİRME:
• 2 kare yan yana = Dikdörtgen
• Kare + Üçgen = Ev
• 2 üçgen taban tabana = Baklava dilimi
• 3 daire üst üste = Kardan adam

🎨 MODEL ÖRNEKLERİ:
🏠 EV = Dikdörtgen (duvar) + Üçgen (çatı) + Kareler (pencere)
🚗 ARABA = Dikdörtgen (gövde) + Daireler (tekerlek)
🌸 ÇİÇEK = Daire (orta) + Daireler (yaprak) + Dikdörtgen (sap)
🌳 AĞAÇ = Üçgen/Daire (yaprak) + Dikdörtgen (gövde)

🔄 DESEN = Tekrar eden şekiller (kare-üçgen-kare-üçgen...)

🧩 TANGRAM = 7 parça (5 üçgen + 1 kare + 1 paralelkenar) ile sonsuz figür!

🎨 MOZAİK = Küçük şekillerle büyük resimler (satranç tahtası gibi)

Artık geometri sanatçısısın! 🖌️✨`,

    nextTopicPreview: 'Sonraki konuda şekillerin konumu değişse bile aynı kaldığını öğreneceğiz! Döndürme ve kaydırma ile tanışacağız! 🔄'
  }
};
