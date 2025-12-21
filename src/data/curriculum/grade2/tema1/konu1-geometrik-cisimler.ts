// 2. SINIF - TEMA 1 - KONU 1: Geometrik Cisimleri Tanıyalım
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1GeometrikCisimler: Topic = {
  id: 'geometrik-cisimler',
  title: 'Geometrik Cisimleri Tanıyalım',
  description: 'Küp, küre, silindir, koni ve prizma - 3 boyutlu şekillerin büyülü dünyası!',
  emoji: '🎲',
  duration: '50 dk',
  difficulty: 1,
  keywords: ['küp', 'küre', 'silindir', 'koni', 'prizma', 'üç boyutlu', 'yüz', 'köşe', 'kenar', 'hacim'],
  objectives: [
    'Geometrik cisimleri tanır ve adlandırır',
    'Cisimlerin özelliklerini (yüz, köşe, kenar) söyler',
    'Günlük hayattan cisim örnekleri verir',
    'Cisimleri özelliklerine göre sınıflandırır',
    'Yuvarlanabilen ve yuvarlanamayanları ayırt eder',
    'Düz ve eğri yüzeyleri tanır'
  ],
  content: {
    introduction: `Merhaba küçük geometri kaşifi! 🌟

Bugün 3 boyutlu şekillerin - yani GEOMETRİK CİSİMLERİN - harika dünyasına gireceğiz!

Düz şekiller sadece kağıtta yaşar. Ama geometrik cisimler gerçek dünyada yaşar!
Onları tutabilir, çevirebilir, yuvarlaabilirsin!

Etrafına bak:
🎲 Zar → Küp şeklinde!
⚽ Top → Küre şeklinde!
🥫 Konserve kutusu → Silindir şeklinde!
🍦 Dondurma külahı → Koni şeklinde!
📦 Ayakkabı kutusu → Dikdörtgenler prizması!

Geometrik cisimler HER YERDE! Onları tanımaya hazır mısın?
Gözlerini aç, beynini çalıştır, hazırlan! 🚀`,

    motivationQuote: 'Şekilleri tanıyan dünyayı daha iyi görür! Senin gözlerin artık geometri gözleri! 👀✨',

    funFacts: [
      '🏛️ Mısır piramitleri dünyanın en ünlü geometrik yapılarıdır - 4500 yaşındalar ve hala ayaktalar!',
      '⚽ Futbol topu aslında 32 parçadan (12 beşgen + 20 altıgen) oluşan özel bir küredir!',
      '🐝 Arılar peteklerini altıgen prizma şeklinde yapar - en az balmumu kullanarak en çok bal depolayan şekil!',
      '🌍 Dünyamız tam bir küre değil, kutuplarda biraz basık bir küredir - elips gibi!',
      '🎪 Sirk çadırları koni şeklindedir - hem yağmur akıp gitsin hem de güçlü dursun diye!',
      '🧊 Buz kristalleri altıgen prizma şeklindedir - kar tanelerinin 6 kolu olmasının sebebi bu!',
      '🏠 Ev çatıları üçgen prizma şeklindedir - kar ve yağmur kayıp gitsin diye!',
      '🎯 Dart tahtaları silindir şeklindedir - oklar düzgün saplansın diye!',
      '🍕 Pizza kutuları dikdörtgenler prizması şeklindedir - ama pizza çember!',
      '🔮 Kristal küreler mükemmel küre şeklinde cilalanır - fal bakılsın diye değil, ışığı kırsın diye!'
    ],

    steps: [
      createStep(
        'Geometrik Cisim Nedir? - 3 Boyutlu Şekiller',
        `Geometrik cisimler 3 BOYUTLU şekillerdir! 📦

📏 3 BOYUT NE DEMEK?
• EN (genişlik) → Sağa sola gider ↔️
• BOY (yükseklik) → Yukarı aşağı gider ↕️
• DERİNLİK (kalınlık) → İçeri dışarı gider ↙️↗️

2 BOYUTLU vs 3 BOYUTLU:
• Kağıt üzerindeki şekiller → 2 boyutlu (düz) → Tutulamaz
• Elinde tuttuğun şekiller → 3 boyutlu (hacimli) → Tutulur!

🎯 GEOMETRİK CİSİMLERİN ÖZELLİKLERİ:
✨ YÜZ - Cismin düz veya eğri yüzeyleri
✨ KÖŞE - Yüzlerin birleştiği sivri noktalar
✨ KENAR - Yüzlerin birleştiği çizgiler
✨ HACİM - Cismin içindeki boşluk

💡 KOLAY ANLATIM:
• Bir kutuyu düşün - içine bir şey koyabilirsin (hacim var!)
• Bir kağıdı düşün - içine bir şey koyamazsın (hacim yok!)`,
        '3 boyutlu şekilleri elinde tutabilirsin, kağıttakileri tutamazsın! Hacmi olan şekiller 3B!',
        {
          visual: `2 BOYUTLU (Düz)        3 BOYUTLU (Hacimli)
     ⬜                       📦
   (Kare)                   (Küp)

   ⭕                        ⚽
  (Daire)                  (Küre)

Kağıtta çizilir          Elinde tutulur
Düzdür                   Hacmi vardır
İçi boş                  İçine koyulur`,
          tip: '💡 Bir nesneyi kaldırıp altına bakabiliyorsan ve içine bir şey koyabiliyorsan, o 3 boyutludur!',
          examples: [
            createExample(
              'Hangileri 3 boyutludur: Daire, Top, Kare, Zar?',
              'Top ve Zar',
              'Daire ve kare düz şekillerdir (2 boyutlu). Top ve zar ise elimizde tutabileceğimiz 3 boyutlu cisimlerdir.',
              '⭕ 2B | ⚽ 3B | ⬜ 2B | 🎲 3B'
            ),
            createExample(
              'Bir kağıdın üzerine çizilen üçgen 3 boyutlu mudur?',
              'Hayır, 2 boyutludur',
              'Kağıt üzerinde çizilen şekiller düzdür, hacmi yoktur, bu yüzden 2 boyutludur.',
              'Kağıttaki üçgen = 2B (düz)'
            ),
            createExample(
              'Elimde tuttuğum bir küp şeker 3 boyutlu mudur?',
              'Evet, 3 boyutludur',
              'Küp şekeri elimizde tutabiliriz, altına bakabiliriz, içi dolu - bu 3 boyutlu demektir.',
              '🧊 Küp şeker = 3B (hacimli)'
            ),
            createExample(
              'Boyut sayısı ne demek?',
              'Ölçülebilen yön sayısı',
              '2 boyutlu: en ve boy. 3 boyutlu: en, boy ve derinlik. Ne kadar çok boyut, o kadar gerçekçi!',
              '2B: ↔️↕️ | 3B: ↔️↕️↙️'
            ),
            createExample(
              'Fotoğraf 2 boyutlu, peki fotoğraftaki evin gerçeği?',
              '3 boyutlu',
              'Fotoğraf düz kağıt (2B), ama gerçek ev içine girebileceğimiz 3 boyutlu bir yapı!',
              '📷 Fotoğraf: 2B | 🏠 Gerçek ev: 3B'
            ),
            createExample(
              'Televizyondaki görüntüler kaç boyutlu?',
              '2 boyutlu',
              'Televizyon ekranı düzdür, görüntüler 2 boyutludur. 3D gözlüklerle 3 boyutlu gibi görünür!',
              '📺 Ekran = 2B (düz)'
            )
          ]
        }
      ),

      createStep(
        'KÜP - Zar Şekli 🎲',
        `KÜP, en bilinen geometrik cisimlerden biridir!

🎲 KÜPÜN ÖZELLİKLERİ:
• 6 tane YÜZÜ var (hepsi KARE şeklinde!)
• 8 tane KÖŞESİ var (sivri noktalar)
• 12 tane KENARI var (düz çizgiler)
• Tüm kenarları EŞİT uzunlukta!
• Tüm yüzleri birbirine eşit!

📦 KÜPE BENZEYEN NESNELER:
• Zar 🎲 (en ünlü küp!)
• Küp şeker 🧊
• Rubik küp 🧩
• Bazı hediye kutuları 🎁
• Buzdolabındaki buz kalıpları 🧊
• Bazı kutular 📦

🔍 KÜPÜ TANIMA İPUCU:
Hangi tarafından bakarsan bak, hep KARE görürsün!
Tüm kenarları ölçersen hep aynı uzunluk çıkar!

💡 KÜP NEDİR?
Küp, 6 tane eşit kareden oluşan 3 boyutlu bir şekildir.
Her yüzü aynı, her kenarı aynı - mükemmel bir şekil!`,
        'Küpün 6 yüzü, 8 köşesi, 12 kenarı var. Tüm yüzleri kare, tüm kenarları eşit!',
        {
          visual: `    ┌─────────┐
   ╱│        ╱│
  ╱ │       ╱ │
 ┌──┼──────┐  │    🎲 KÜP
 │  │      │  │    ✓ 6 yüz (hepsi kare)
 │  └──────┼──┘    ✓ 8 köşe
 │ ╱       │ ╱     ✓ 12 kenar
 │╱        │╱      ✓ Tüm kenarlar eşit
 └─────────┘`,
          tip: '🎯 Zarı hatırla: Her yüzünde 1-6 arası nokta var ve hepsi kare şeklinde!',
          examples: [
            createExample(
              'Bir küpün tüm yüzlerini saymak istiyoruz. Kaç yüz sayarız?',
              '6 yüz',
              'Küpün üstü, altı, önü, arkası, sağı ve solu olmak üzere 6 yüzü vardır.',
              '⬆️ Üst + ⬇️ Alt + ➡️ Sağ + ⬅️ Sol + 🔼 Ön + 🔽 Arka = 6'
            ),
            createExample(
              'Küp şekerin kenar uzunluğu 2 cm. Tüm kenarların toplamı kaç cm?',
              '24 cm',
              'Küpün 12 kenarı var ve hepsi eşit. 12 × 2 = 24 cm',
              '12 kenar × 2 cm = 24 cm'
            ),
            createExample(
              'Bir zarın köşelerini sayalım. Kaç köşe var?',
              '8 köşe',
              'Zarın üstünde 4 köşe, altında 4 köşe var. Toplam 8 köşe!',
              '4 üst + 4 alt = 8 köşe'
            ),
            createExample(
              'Küpün bir yüzünün alanı 9 cm² ise, kenar uzunluğu kaç cm?',
              '3 cm',
              'Kare alanı = kenar × kenar. 9 = 3 × 3. Kenar = 3 cm.',
              '√9 = 3 cm'
            ),
            createExample(
              'Rubik küp neden küp adını almış?',
              'Çünkü 6 yüzü var ve hepsi kare',
              'Rubik küpün tüm yüzleri kare şeklinde ve eşit. Bu onu küp yapar!',
              '🧩 Rubik = Küp şekli'
            ),
            createExample(
              'Küp mü yoksa dikdörtgenler prizması mı: Tüm kenarları 4 cm olan kutu',
              'Küp',
              'Tüm kenarları eşit olan kutu küptür. Farklı olsaydı prizma olurdu.',
              '4×4×4 = Küp!'
            )
          ]
        }
      ),

      createStep(
        'KÜRE - Top Şekli ⚽',
        `KÜRE, tamamen yuvarlak bir cisimdir!

⚽ KÜRENİN ÖZELLİKLERİ:
• DÜZ YÜZÜ YOK (tek bir eğri yüzeyi var)
• KÖŞESİ YOK (hiçbir yeri sivri değil)
• KENARI YOK (hiçbir yeri keskin değil)
• Her yerden baksan DAİRE görürsün!
• Yuvarlanabilir! 🔄
• Tamamen pürüzsüz!

🌍 KÜREYE BENZEYEN NESNELER:
• Futbol topu ⚽
• Basketbol topu 🏀
• Tenis topu 🎾
• Dünya 🌍
• Ay 🌙
• Güneş ☀️
• Portakal 🍊
• Bilye 🔮
• Sabun köpüğü 🫧
• Göz bebeği 👁️

🔍 KÜREYİ TANIMA İPUCU:
Yuvarla! Eğer her yöne eşit yuvarlanıyorsa küredir!
Hiçbir yeri sivri değilse küredir!

💡 KÜRE ÖZELDİR:
Küre en az yüzeyle en çok hacmi kaplayan şekildir!
Bu yüzden sabun köpükleri küre şeklindedir!`,
        'Kürenin köşesi ve kenarı yoktur - tamamen pürüzsüz ve yuvarlak! Her yöne yuvarlanır!',
        {
          visual: `       .-"""-.
      /        \\
     |          |     ⚽ KÜRE
     |    ⚽    |     ✗ Düz yüz yok
     |          |     ✗ Köşe yok
      \\        /      ✗ Kenar yok
       '-....-'       ✓ Yuvarlanır!`,
          tip: '⚽ Futbol topunu düşün - her yerden yuvarlak görünür ve her yöne yuvarlanır!',
          examples: [
            createExample(
              'Neden kürenin köşesi yoktur?',
              'Çünkü hiçbir yeri sivri değildir, her yeri yuvarlaktır',
              'Köşe, yüzlerin birleştiği sivri noktadır. Küre tamamen yuvarlak olduğu için sivri nokta oluşmaz.',
              '⚽ = Tamamen yuvarlak = Köşesiz'
            ),
            createExample(
              'Portakal hangi geometrik cisme benzer?',
              'Küre',
              'Portakal yuvarlaktır, köşesi ve kenarı yoktur - tıpkı küre gibi!',
              '🍊 ≈ ⚽ = Küre'
            ),
            createExample(
              'Dünya neden küre şeklinde?',
              'Yerçekimi her yöne eşit çektiği için',
              'Gezegenlerin merkeze doğru çeken yerçekimi, maddeyi yuvarlak şekle sokar.',
              '🌍 Yerçekimi → Küre'
            ),
            createExample(
              'Top yuvarlanır, zar yuvarlanır mı?',
              'Top yuvarlanır, zar yuvarlanamaz',
              'Top küre şeklinde (köşesiz), zar küp şeklinde (köşeli). Köşeler yuvarlanmayı engeller.',
              '⚽ Yuvarlanır | 🎲 Yuvarlanamaz'
            ),
            createExample(
              'Kürenin kaç yüzü var?',
              'Düz yüzü yok, 1 eğri yüzeyi var',
              'Kürenin düz yüzü yoktur. Sadece bir tane sürekli eğri yüzeyi vardır.',
              '⚽ = 0 düz yüz + 1 eğri yüzey'
            ),
            createExample(
              'Bilye ve boncuk neden küre şeklinde?',
              'Her yöne eşit yuvarlanması için',
              'Küre şekli sayesinde bilye her yöne eşit hızda yuvarlanır, oyunda adil olur!',
              '🔮 Küre = Eşit yuvarlanma'
            )
          ]
        }
      ),

      createStep(
        'SİLİNDİR - Teneke Kutu Şekli 🥫',
        `SİLİNDİR, iki dairesi ve yuvarlak gövdesi olan cisimdir!

🥫 SİLİNDİRİN ÖZELLİKLERİ:
• 2 tane DÜZ YÜZÜ var (üst ve alt - ikisi de DAİRE!)
• 1 tane EĞRİ YÜZEYİ var (yanlar - sardığında dikdörtgen olur!)
• KÖŞESİ YOK (yuvarlak olduğu için)
• KENARI YOK (düz keskin çizgi yok)
• Yan yatırınca YUVARLANIR! 🔄
• Dik durduğunda yuvarlanmaz!

📦 SİLİNDİRE BENZEYEN NESNELER:
• Konserve kutusu 🥫
• Bardak 🥛
• Rulo tuvalet kağıdı 🧻
• Kalem ✏️
• Boru 🔧
• Mum 🕯️
• Teneke kutu 🥫
• Direk 🏗️
• Rulo makarna 🍝
• Havuç (yaklaşık) 🥕

🔍 SİLİNDİRİ TANIMA İPUCU:
Üstten ve alttan bak: Daire görürsün!
Yandan bak: Dikdörtgen görürsün!`,
        'Silindirin 2 daire yüzü (üst-alt) ve 1 eğri yüzeyi (yan) var! Yan yatınca yuvarlanır!',
        {
          visual: `      ╭───────╮
     ╱  ○○○○  ╲   ← Üst (Daire)
    │          │
    │   🥫    │  ← Eğri Yüzey
    │          │
     ╲  ○○○○  ╱   ← Alt (Daire)
      ╰───────╯

🥫 SİLİNDİR
✓ 2 düz yüz (daire)
✓ 1 eğri yüzey
✗ Köşe yok
✗ Kenar yok`,
          tip: '🥫 Konserve kutusunu düşün: Kapağı daire, gövdesi yuvarlak! Yan yatır, yuvarlanır!',
          examples: [
            createExample(
              'Silindirin kaç tane düz yüzü vardır?',
              '2 tane',
              'Silindirin üstü ve altı düz yüzeylerdir ve ikisi de daire şeklindedir.',
              '⭕ Üst + ⭕ Alt = 2 düz yüz'
            ),
            createExample(
              'Kalem hangi geometrik cisme benzer? Neden?',
              'Silindir - çünkü iki ucu daire ve gövdesi yuvarlak',
              'Kalemin iki ucu daire şeklinde, gövdesi ise yuvarlaktır.',
              '✏️ = Silindir'
            ),
            createExample(
              'Silindiri yan yatırınca ne olur?',
              'Yuvarlanır',
              'Silindirin yan yüzeyi eğri olduğu için yan yatırınca yuvarlanır.',
              '🥫 → 🔄 Yuvarlanır'
            ),
            createExample(
              'Silindirin yan yüzeyini açarsak hangi şekil çıkar?',
              'Dikdörtgen',
              'Silindirin eğri yan yüzeyini açıp düzleştirirsek dikdörtgen elde ederiz.',
              'Eğri yüzey açılınca = Dikdörtgen'
            ),
            createExample(
              'Rulo tuvalet kağıdı neden silindir şeklinde?',
              'Kolayca yuvarlanıp sarılsın diye',
              'Silindir şekli sayesinde kağıt düzgünce sarılır ve kolayca açılır.',
              '🧻 = Silindir (kolay sarma)'
            ),
            createExample(
              'Silindirin köşesi var mı?',
              'Hayır, köşesi yok',
              'Silindirin yuvarlak yapısı nedeniyle hiçbir yeri sivri değildir, köşesi yoktur.',
              '🥫 = 0 köşe'
            )
          ]
        }
      ),

      createStep(
        'KONİ - Dondurma Külahı Şekli 🍦',
        `KONİ, bir dairesi ve sivri tepesi olan cisimdir!

🍦 KONİNİN ÖZELLİKLERİ:
• 1 tane DÜZ YÜZÜ var (taban - DAİRE şeklinde!)
• 1 tane EĞRİ YÜZEYİ var (yanlar)
• 1 tane SİVRİ TEPESİ var (tepe noktası)
• KÖŞESİ YOK (ama tepesi var - bu farklı!)
• KENARI YOK (düz çizgi yok)
• Yan yatırınca yuvarlanır - ama düz gitmez, döner!

🎪 KONİYE BENZEYEN NESNELER:
• Dondurma külahı 🍦
• Trafik konisi 🚧
• Parti şapkası 🎉
• Havuç (yaklaşık) 🥕
• Sirk çadırının tepesi 🎪
• Huni 📢
• Uçak burnu ✈️
• Füze burnu 🚀
• Tükenmez kalem ucu ✏️
• Yoğurt külahı 🍧

🔍 KONİYİ TANIMA İPUCU:
Alttan bak: Daire görürsün!
Yandan bak: Üçgene benzer ama yuvarlatılmış!
Tepesi sivri, tabanı geniş!`,
        'Koninin 1 daire tabanı, 1 eğri yanı, 1 sivri tepesi var! Huni gibi düşün!',
        {
          visual: `         ▲  ← Sivri Tepe
        ╱ ╲
       ╱   ╲      🍦 KONİ
      ╱ 🍦 ╲     ✓ 1 düz yüz (daire)
     ╱       ╲    ✓ 1 eğri yüzey
    ╱         ╲   ✓ 1 sivri tepe
   ╱___________╲  ✗ Köşe yok
    ╲○○○○○○○╱    ✗ Kenar yok
     ╲______╱  ← Daire Taban`,
          tip: '🍦 Dondurma külahını ters tut - sivri ucu aşağı, geniş daire yukarı! İşte koni!',
          examples: [
            createExample(
              'Koninin kaç tepesi vardır?',
              '1 tepe',
              'Koninin sadece bir sivri tepesi vardır - tüm yan yüzey bu noktada birleşir.',
              '🍦 → Tek sivri uç = 1 tepe'
            ),
            createExample(
              'Havuç neden koniye benzer?',
              'Çünkü bir ucu geniş (daire gibi), diğer ucu sivri',
              'Havucun üst kısmı geniş ve yuvarlak, alt kısmı (ucu) sivridir - tıpkı koni gibi!',
              '🥕 = 🍦 Koni şekli'
            ),
            createExample(
              'Trafik konisi neden koni şeklinde?',
              'Görünür olsun ve rüzgarda düşmesin diye',
              'Koni şekli hem uzaktan görülür hem de ağırlık merkezi aşağıda olduğu için devrilmez.',
              '🚧 Koni = Dayanıklı + Görünür'
            ),
            createExample(
              'Koninin tabanı hangi şekil?',
              'Daire',
              'Koninin tek düz yüzü tabanıdır ve bu taban daire şeklindedir.',
              '🍦 Taban = ⭕ Daire'
            ),
            createExample(
              'Huni neden koni şeklinde?',
              'Sıvı dar yerden aksın diye',
              'Koninin geniş ağzı sıvıyı toplar, sivri ucu dar yere yönlendirir. Mükemmel tasarım!',
              '📢 Huni = Koni (akış için)'
            ),
            createExample(
              'Koniyi yan yatırınca ne olur?',
              'Yuvarlanır ama düz gitmez, döner',
              'Koninin tabanı geniş, tepesi dar olduğu için düz değil, daire çizerek yuvarlanır.',
              '🍦 → ↺ Dönerek yuvarlanır'
            )
          ]
        }
      ),

      createStep(
        'DİKDÖRTGENLER PRİZMASI - Kutu Şekli 📦',
        `DİKDÖRTGENLER PRİZMASI, 6 dikdörtgen yüzü olan cisimdir!

📦 PRİZMANIN ÖZELLİKLERİ:
• 6 tane YÜZÜ var (hepsi DİKDÖRTGEN!)
• 8 tane KÖŞESİ var (üstte 4 + altta 4)
• 12 tane KENARI var
• Karşılıklı yüzler birbirine EŞİT!
• 3 farklı kenar uzunluğu olabilir!
• YUVARLANAMAZ (köşeleri var!)

🎁 PRİZMAYA BENZEYEN NESNELER:
• Ayakkabı kutusu 📦
• Kitap 📚
• Cep telefonu 📱
• Tuğla 🧱
• Buzdolabı 🧊
• Dolap 🗄️
• Kibrit kutusu 📦
• Tablet 📱
• Çikolata paketi 🍫
• Kargo kutusu 📮

💡 KÜPTEN FARKI:
• KÜP: Tüm yüzler KARE, tüm kenarlar EŞİT
• PRİZMA: Yüzler DİKDÖRTGEN, kenarlar FARKLI olabilir

🔍 PRİZMAYI TANIMA İPUCU:
Kutu şeklinde ama kenarları farklı uzunlukta!
Uzunluğu, genişliği ve yüksekliği farklı olabilir!`,
        'Prizmanın 6 dikdörtgen yüzü, 8 köşesi, 12 kenarı var! Küpün kuzeni gibi ama kenarları farklı!',
        {
          visual: `    ┌─────────────┐
   ╱│            ╱│
  ╱ │           ╱ │    📦 DİKDÖRTGENLER PRİZMASI
 ┌──┼──────────┐  │    ✓ 6 yüz (dikdörtgen)
 │  │    📦    │  │    ✓ 8 köşe
 │  └──────────┼──┘    ✓ 12 kenar
 │ ╱           │ ╱     ✗ Yuvarlanamaz
 │╱            │╱
 └─────────────┘`,
          tip: '📦 Ayakkabı kutusunu düşün: Uzunluğu, genişliği ve yüksekliği farklı - ama hepsi dikdörtgen!',
          examples: [
            createExample(
              'Bir ayakkabı kutusunun kaç köşesi vardır?',
              '8 köşe',
              'Dikdörtgenler prizmasının (kutunun) 8 köşesi vardır: üstte 4, altta 4.',
              '📦 = 4 üst + 4 alt = 8 köşe'
            ),
            createExample(
              'Küp mü prizma mı: Tüm yüzleri 5 cm × 5 cm olan kutu',
              'Küp',
              'Tüm yüzler kare (5×5) ve eşit olduğu için bu bir küptür.',
              '5×5 = Kare yüz → Küp!'
            ),
            createExample(
              'Kitap hangi geometrik cisme benzer?',
              'Dikdörtgenler prizması',
              'Kitabın 6 yüzü var ve hepsi dikdörtgen şeklinde. Bu onu prizma yapar!',
              '📚 = Dikdörtgenler Prizması'
            ),
            createExample(
              'Prizmanın karşılıklı yüzleri nasıldır?',
              'Birbirine eşittir',
              'Üst-alt eşit, ön-arka eşit, sağ-sol eşit. Karşılıklı yüzler aynı büyüklükte!',
              '📦 Karşılıklı yüzler = Eşit'
            ),
            createExample(
              'Prizma yuvarlanabilir mi?',
              'Hayır, köşeleri olduğu için yuvarlanamaz',
              'Prizmanın 8 köşesi var. Köşeler yuvarlanmayı engeller.',
              '📦 = 8 köşe → Yuvarlanamaz'
            ),
            createExample(
              'Telefon hangi cisme benzer?',
              'Dikdörtgenler prizması',
              'Telefonun ince bir kutu şekli var - bu dikdörtgenler prizmasıdır.',
              '📱 = İnce prizma'
            )
          ]
        }
      ),

      createStep(
        'Cisimleri Karşılaştıralım! ⚖️',
        `Geometrik cisimleri özelliklerine göre karşılaştıralım:

📊 ÖZET TABLO:
┌──────────┬─────┬──────┬───────┬─────────────┐
│ Cisim    │ Yüz │ Köşe │ Kenar │ Yuvarlanır? │
├──────────┼─────┼──────┼───────┼─────────────┤
│ Küp      │ 6   │ 8    │ 12    │ ❌ Hayır    │
│ Küre     │ 0*  │ 0    │ 0     │ ✅ Evet     │
│ Silindir │ 2** │ 0    │ 0     │ ✅ Yan yat. │
│ Koni     │ 1** │ 0    │ 0     │ ✅ Dönerek  │
│ Prizma   │ 6   │ 8    │ 12    │ ❌ Hayır    │
└──────────┴─────┴──────┴───────┴─────────────┘

* Kürenin düz yüzü yok, sadece eğri yüzeyi var
** Daire şeklinde düz yüz + eğri yüzey

🔍 GRUPLANDIRMA:
• DÜZ YÜZLÜ: Küp, Prizma (köşeli kutular)
• EĞRİ YÜZEYLİ: Küre, Silindir, Koni (yuvarlak)
• YUVARLANABILEN: Küre, Silindir, Koni
• YUVARLANAMAYANLAR: Küp, Prizma

💡 AKILDA TUTAN FORMÜL:
• Küp & Prizma: 6 yüz, 8 köşe, 12 kenar
• Küre: 0-0-0 (hiçbir şey yok, sadece yuvarlaklık!)
• Silindir: 2 daire + 1 eğri = kalem gibi
• Koni: 1 daire + 1 tepe = huni gibi`,
        'Her cismin kendine özel özellikleri var! Köşeli olanlar yuvarlanmaz, yuvarlak olanlar yuvarlanır!',
        {
          visual: `YUVARLANABİLENLER    YUVARLANAMAYALAR
    ⚽ 🥫 🍦              🎲 📦
   Küre Sil. Koni       Küp Prizma

DÜZ YÜZLÜLER         EĞRİ YÜZEYLİLER
   🎲 📦                ⚽ 🥫 🍦
  Küp Prizma          Küre Sil. Koni`,
          tip: '🎯 Kolay ezber: Yuvarlak = Yuvarlanır, Köşeli = Yuvarlanmaz!',
          examples: [
            createExample(
              'Hangisi yuvarlanabilir: Küp mü Küre mi?',
              'Küre',
              'Kürenin köşesi olmadığı için yuvarlanır. Küpün köşeleri olduğu için yuvarlanamaz.',
              '⚽ Yuvarlanır | 🎲 Yuvarlanamaz'
            ),
            createExample(
              'Küp ve prizmanın ortak özellikleri nelerdir?',
              'İkisinin de 6 yüzü, 8 köşesi ve 12 kenarı var',
              'Küp ve prizma aynı sayıda yüz, köşe ve kenara sahiptir. Fark: kenar uzunlukları.',
              '🎲 📦 → 6 yüz, 8 köşe, 12 kenar'
            ),
            createExample(
              'Hangi cismin köşesi yoktur?',
              'Küre, Silindir ve Koni',
              'Bu üç cisim yuvarlak olduğu için sivri köşeleri yoktur.',
              '⚽🥫🍦 = 0 köşe'
            ),
            createExample(
              'En çok yüzü olan cisim hangisi?',
              'Küp ve Prizma (6 yüz)',
              'Küp ve prizmanın 6\'şar yüzü var. Silindir 2, koni 1, küre 0 düz yüz.',
              '🎲📦 = 6 > 🥫 = 2 > 🍦 = 1 > ⚽ = 0'
            ),
            createExample(
              'Hem düz hem eğri yüzeyi olan cisimler hangileri?',
              'Silindir ve Koni',
              'Silindirin 2 daire yüzü + 1 eğri yanı var. Koninin 1 daire tabanı + 1 eğri yanı var.',
              '🥫🍦 = Düz + Eğri'
            ),
            createExample(
              'Sadece eğri yüzeyi olan cisim hangisi?',
              'Küre',
              'Kürenin hiç düz yüzü yoktur, tamamen eğri bir yüzeyle çevrilidir.',
              '⚽ = %100 eğri'
            )
          ]
        }
      ),

      createStep(
        'Günlük Hayatta Geometrik Cisimler 🏠',
        `Etrafımız geometrik cisimlerle dolu! Bakalım nerede ne var:

🏠 EVDE GEOMETRİK CİSİMLER:
• Buzdolabı → Dikdörtgenler Prizması 📦
• Top → Küre ⚽
• Bardak → Silindir 🥛
• Şapka → Koni 🎉
• Zar/Buz kalıbı → Küp 🎲
• Kitap → Prizma 📚
• Mum → Silindir 🕯️
• Portakal → Küre 🍊

🏫 OKULDA GEOMETRİK CİSİMLER:
• Kalem → Silindir ✏️
• Silgi → Prizma 📏
• Küre harita → Küre 🌍
• Tahta → Prizma (düz ama kalın!)

🚗 SOKAKTA GEOMETRİK CİSİMLER:
• Trafik konisi → Koni 🚧
• Boru → Silindir 🔧
• Binalar → Prizma 🏢
• Tekerlek → Silindir (kalın daire) 🛞

💡 DİKKAT:
Bazı nesneler birden fazla cisme benzer!
Örneğin: Dondurma (koni külah + küre top) 🍦⚽`,
        'Geometri gözleriyle bak! Her yerde cisimler görürsün! Artık dünyayı farklı görüyorsun!',
        {
          visual: `🏠 EV TURUMuz:
┌────────────────────────────────┐
│  🧊 Buzdolabı = 📦 Prizma     │
│  ⚽ Top = Küre                 │
│  🥛 Bardak = 🥫 Silindir      │
│  🎲 Zar = Küp                  │
│  📚 Kitap = 📦 Prizma         │
│  🍊 Portakal = ⚽ Küre        │
│  🕯️ Mum = 🥫 Silindir         │
│  🎉 Şapka = 🍦 Koni           │
└────────────────────────────────┘`,
          tip: '🔍 Şekil avcısı ol! Her gün 5 tane geometrik cisim bul ve say!',
          examples: [
            createExample(
              'Evde küre şeklinde neler var?',
              'Top, portakal, bilye, göz bebeği',
              'Yuvarlak ve köşesiz her şey küre şeklindedir.',
              '⚽🍊🔮👁️ = Küre'
            ),
            createExample(
              'Mutfakta hangi cisimler bulunur?',
              'Silindir (bardak, kutu), Prizma (buzdolabı), Küre (meyve)',
              'Mutfak geometri harikası! Her köşede farklı cisim var!',
              '🥛🥫📦🍊'
            ),
            createExample(
              'Yolda gördüğümüz trafik konisi hangi cisim?',
              'Koni',
              'Trafik konisinin tabanı daire, tepesi sivri - bu konidir!',
              '🚧 = 🍦 Koni'
            ),
            createExample(
              'Kalem ve silgi hangi cisimlere benzer?',
              'Kalem: Silindir, Silgi: Prizma',
              'Kalem yuvarlak gövdeli (silindir), silgi köşeli kutu (prizma).',
              '✏️ = Silindir | 📏 = Prizma'
            ),
            createExample(
              'Dondurma hangi cisimlere benzer?',
              'Koni (külah) + Küre (top)',
              'Dondurma külahı koni şeklinde, üstündeki dondurma topları küre şeklinde!',
              '🍦 = Koni + ⚽ Küre'
            ),
            createExample(
              'Binalar genellikle hangi cisim?',
              'Dikdörtgenler Prizması',
              'Binaların 6 yüzü dikdörtgen şeklindedir - bu prizmadır!',
              '🏢 = 📦 Prizma'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // Küp soruları (1-10)
      createMultipleChoice(
        '🎲 Küpün kaç yüzü vardır?',
        ['4', '5', '6', '8'],
        '6',
        'Küpün 6 tane kare yüzü vardır: üst, alt, ön, arka, sağ, sol.'
      ),
      createFillBlank(
        'Küpün tüm yüzleri ___ şeklindedir',
        ['kare', 'Kare'],
        'Küpün 6 yüzü vardır ve hepsi birbirine eşit kare şeklindedir!'
      ),
      createMultipleChoice(
        '🎲 Küpün kaç köşesi vardır?',
        ['4', '6', '8', '12'],
        '8',
        'Küpün üstte 4, altta 4 olmak üzere 8 köşesi vardır.'
      ),
      createFillBlank(
        'Küpün ___ kenarı vardır',
        ['12', 'on iki'],
        'Küpün toplam 12 kenarı vardır!'
      ),
      createMultipleChoice(
        'Zar hangi geometrik cisme benzer?',
        ['Küre', 'Silindir', 'Küp', 'Koni'],
        'Küp',
        'Zarın 6 kare yüzü var - bu küp şeklidir!'
      ),
      createFillBlank(
        'Küpün tüm kenarları ___ uzunluktadır',
        ['eşit', 'aynı'],
        'Küpün 12 kenarı da birbirine eşittir!'
      ),
      createMultipleChoice(
        'Küp yuvarlanabilir mi?',
        ['Evet', 'Hayır', 'Bazen', 'Belki'],
        'Hayır',
        'Küpün 8 köşesi var, köşeler yuvarlanmayı engeller.'
      ),
      createFillBlank(
        'Rubik küpün her yüzü ___ şeklinde',
        ['kare', 'Kare'],
        'Rubik küpün 6 yüzü de kare şeklindedir!'
      ),
      createMultipleChoice(
        'Küp şekerin kenarı 3 cm ise, tüm kenarların toplamı?',
        ['18 cm', '24 cm', '36 cm', '48 cm'],
        '36 cm',
        '12 kenar × 3 cm = 36 cm'
      ),
      createFillBlank(
        'Küpün yüz sayısı ___, köşe sayısı ___, kenar sayısı 12',
        ['6', '8'],
        'Küp: 6 yüz, 8 köşe, 12 kenar!'
      ),

      // Küre soruları (11-20)
      createFillBlank(
        'Futbol topu ___ şeklindedir',
        ['küre', 'Küre'],
        'Futbol topu tamamen yuvarlaktır - köşesi ve kenarı yoktur, tıpkı küre gibi!'
      ),
      createMultipleChoice(
        '⚽ Kürenin köşesi var mıdır?',
        ['Evet, 4 köşesi var', 'Evet, 8 köşesi var', 'Hayır, köşesi yoktur', 'Evet, 1 köşesi var'],
        'Hayır, köşesi yoktur',
        'Küre tamamen yuvarlaktır, hiçbir yeri sivri değildir.'
      ),
      createFillBlank(
        'Kürenin kenar sayısı ___',
        ['0', 'sıfır', 'yok'],
        'Kürenin kenarı yoktur, her yeri yuvarlaktır!'
      ),
      createMultipleChoice(
        'Portakal hangi cisme benzer?',
        ['Küp', 'Silindir', 'Küre', 'Prizma'],
        'Küre',
        'Portakal yuvarlaktır, köşesiz ve kenarsızdır - küre!'
      ),
      createFillBlank(
        '___ yuvarlanabilir çünkü köşesi yoktur',
        ['Küre', 'küre', 'Top'],
        'Kürenin köşesi olmadığı için her yöne yuvarlanabilir!'
      ),
      createMultipleChoice(
        'Kürenin düz yüzü var mı?',
        ['Evet, 1 tane', 'Evet, 2 tane', 'Hayır, yok', 'Evet, 6 tane'],
        'Hayır, yok',
        'Kürenin düz yüzü yoktur, sadece eğri yüzeyi var.'
      ),
      createFillBlank(
        'Dünya ___ şeklindedir',
        ['küre', 'Küre'],
        'Gezegenimiz Dünya küre şeklindedir!'
      ),
      createMultipleChoice(
        'Hangi nesne küre değildir?',
        ['Top', 'Portakal', 'Zar', 'Bilye'],
        'Zar',
        'Zar küp şeklindedir, diğerleri küre!'
      ),
      createFillBlank(
        'Küre her yöne ___ çünkü köşesi yok',
        ['yuvarlanır', 'yuvarlanabilir'],
        'Kürenin köşesi olmadığı için engelsiz yuvarlanır!'
      ),
      createMultipleChoice(
        'Basketbol topu hangi cisim?',
        ['Silindir', 'Koni', 'Küre', 'Prizma'],
        'Küre',
        'Basketbol topu yuvarlak = küre!'
      ),

      // Silindir soruları (21-27)
      createMultipleChoice(
        '🍦 Dondurma külahı hangi geometrik cisme benzer?',
        ['Küp', 'Silindir', 'Koni', 'Küre'],
        'Koni',
        'Dondurma külahının tabanı daire, tepesi sivri - koni!'
      ),
      createFillBlank(
        'Silindirin üstü ve altı ___ şeklindedir',
        ['daire', 'Daire', 'çember'],
        'Silindirin iki düz yüzü daire şeklindedir!'
      ),
      createMultipleChoice(
        'Silindirin kaç düz yüzü var?',
        ['0', '1', '2', '6'],
        '2',
        'Silindirin üstü ve altı olmak üzere 2 düz daire yüzü var.'
      ),
      createFillBlank(
        'Konserve kutusu ___ şeklindedir',
        ['silindir', 'Silindir'],
        'Konserve kutusunun üstü-altı daire, yanları yuvarlak - silindir!'
      ),
      createMultipleChoice(
        'Silindir yan yatırılınca ne olur?',
        ['Düşer', 'Durur', 'Yuvarlanır', 'Zıplar'],
        'Yuvarlanır',
        'Silindirin eğri yan yüzeyi olduğu için yan yatınca yuvarlanır.'
      ),
      createFillBlank(
        'Kalem ___ şeklindedir',
        ['silindir', 'Silindir'],
        'Kalemin uçları daire, gövdesi yuvarlak - silindir!'
      ),
      createMultipleChoice(
        'Silindirin köşesi var mı?',
        ['Evet, 2 tane', 'Evet, 4 tane', 'Hayır, yok', 'Evet, 8 tane'],
        'Hayır, yok',
        'Silindir yuvarlak olduğu için köşesi yoktur.'
      ),

      // Koni soruları (28-34)
      createMultipleChoice(
        '🚧 Trafik konisinin kaç sivri tepesi vardır?',
        ['0', '1', '2', '4'],
        '1',
        'Koninin sadece bir sivri tepesi vardır.'
      ),
      createFillBlank(
        'Koninin tabanı ___ şeklindedir',
        ['daire', 'Daire'],
        'Koninin tek düz yüzü (tabanı) daire şeklindedir!'
      ),
      createMultipleChoice(
        'Parti şapkası hangi cisim?',
        ['Küp', 'Küre', 'Silindir', 'Koni'],
        'Koni',
        'Parti şapkasının tabanı daire, tepesi sivri - koni!'
      ),
      createFillBlank(
        'Havuç ___ şekline benzer',
        ['koni', 'Koni'],
        'Havucun bir ucu geniş, diğeri sivri - koniye benzer!'
      ),
      createMultipleChoice(
        'Koninin kaç düz yüzü var?',
        ['0', '1', '2', '3'],
        '1',
        'Koninin sadece tabanında 1 düz daire yüzü var.'
      ),
      createFillBlank(
        'Huni ___ şeklindedir',
        ['koni', 'Koni'],
        'Huninin geniş ağzı ve sivri ucu var - koni!'
      ),
      createMultipleChoice(
        'Koni yuvarlanınca ne olur?',
        ['Düz gider', 'Daire çizer', 'Durur', 'Zıplar'],
        'Daire çizer',
        'Koninin tabanı geniş, tepesi dar olduğu için daire çizerek yuvarlanır.'
      ),

      // Prizma soruları (35-40)
      createMultipleChoice(
        '📦 Dikdörtgenler prizmasının kaç köşesi vardır?',
        ['4', '6', '8', '12'],
        '8',
        'Prizmanın üstte 4, altta 4 olmak üzere 8 köşesi var.'
      ),
      createFillBlank(
        'Kitap ___ prizması şeklindedir',
        ['dikdörtgenler', 'Dikdörtgenler', 'dikdörtgen'],
        'Kitabın 6 dikdörtgen yüzü var - dikdörtgenler prizması!'
      ),
      createMultipleChoice(
        'Ayakkabı kutusu hangi cisim?',
        ['Küp', 'Küre', 'Koni', 'Prizma'],
        'Prizma',
        'Ayakkabı kutusunun yüzleri dikdörtgen - dikdörtgenler prizması!'
      ),
      createFillBlank(
        'Prizmanın ___ kenarı vardır',
        ['12', 'on iki'],
        'Prizmanın toplam 12 kenarı vardır!'
      ),
      createMultipleChoice(
        'Küp ve prizmanın ortak özelliği?',
        ['İkisi de yuvarlanır', 'İkisinin de 6 yüzü var', 'İkisi de köşesiz', 'İkisi de silindir'],
        'İkisinin de 6 yüzü var',
        'Hem küpün hem prizmanın 6 yüzü, 8 köşesi, 12 kenarı var.'
      ),
      createFillBlank(
        'Telefon ___ şeklindedir',
        ['prizma', 'Prizma', 'dikdörtgenler prizması'],
        'Telefonun 6 dikdörtgen yüzü var - ince bir prizma!'
      ),

      // Karşılaştırma soruları (41-45)
      createMultipleChoice(
        'Hangisinin yüzü düz DEĞİLDİR?',
        ['Küp', 'Prizma', 'Küre', 'Hiçbiri'],
        'Küre',
        'Kürenin düz yüzü yoktur, sadece eğri yüzeyi var.'
      ),
      createMultipleChoice(
        'Hangi cisimler yuvarlanabilir?',
        ['Küp ve Prizma', 'Küre ve Silindir', 'Sadece Küp', 'Sadece Prizma'],
        'Küre ve Silindir',
        'Küre ve silindir yuvarlak oldukları için yuvarlanabilir.'
      ),
      createFillBlank(
        'Köşesi olmayan cisimler: Küre, Silindir ve ___',
        ['Koni', 'koni'],
        'Küre, silindir ve koninin köşesi yoktur!'
      ),
      createMultipleChoice(
        'En çok köşesi olan cisim hangisi?',
        ['Küre (0)', 'Koni (0)', 'Küp (8)', 'Silindir (0)'],
        'Küp (8)',
        'Küp ve prizmanın 8 köşesi var, en çok!'
      ),
      createMultipleChoice(
        'Hem düz hem eğri yüzeyi olan cisim?',
        ['Küp', 'Küre', 'Silindir', 'Prizma'],
        'Silindir',
        'Silindirin 2 daire yüzü (düz) ve 1 eğri yan yüzeyi var.'
      )
    ],

    summary: `Bugün geometrik cisimleri öğrendik! 🎉

🎲 KÜP: 6 kare yüz, 8 köşe, 12 eşit kenar - Zar gibi!
⚽ KÜRE: Köşesiz, kenarsız, tamamen yuvarlak - Top gibi!
🥫 SİLİNDİR: 2 daire yüz + yuvarlak gövde - Teneke gibi!
🍦 KONİ: 1 daire taban + sivri tepe - Külah gibi!
📦 PRİZMA: 6 dikdörtgen yüz, 8 köşe, 12 kenar - Kutu gibi!

Artık etrafındaki nesnelerin geometrik şekillerini tanıyabilirsin!
Geometri gözleriyle dünyaya bak! 👀✨`,

    nextTopicPreview: 'Sonraki konuda geometrik cisimlerle harika yapılar oluşturacağız! Küplerle kuleler, silindirlerle köprüler yapalım! 🏗️'
  }
};
