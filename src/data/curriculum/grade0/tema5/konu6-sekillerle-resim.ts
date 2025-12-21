// DESTEK SINIFI - TEMA 5 - KONU 6: ŞEKİLLERLE RESİM YAP
// Şekilleri birleştirerek resim yapma

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu6SekillerleResim: Topic = {
  id: 'sekillerle-resim',
  title: 'Şekillerle Resim Yap',
  description: 'Şekillerle ev, araba, robot yapalım!',
  emoji: '🎨',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['şekil', 'resim', 'ev', 'araba', 'robot', 'yaratıcılık'],
  objectives: [
    'Şekilleri birleştireceksin',
    'Ev çizeceksin',
    'Araba çizeceksin',
    'Robot çizeceksin',
    'Yaratıcı olacaksın'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün sanatçı olacağız!\n\nŞekillerle resim yapacağız!\n\n🏠 Ev, 🚗 Araba, 🤖 Robot!\n\nHazır mısın? Başlayalım! 🎨',

    motivationQuote: 'Sen harika bir sanatçısın! 🎨',

    funFacts: [
      '🎨 Ressamlar şekillerle resim yapar!',
      '🏗️ Mimarlar şekillerle bina tasarlar!',
      '🎮 Oyun yapımcıları şekil kullanır!',
      '📱 Uygulama tasarımcıları şekil kullanır!',
      '🎪 Her şey şekillerden oluşur!',
      '🌈 Renkli şekiller daha güzel!',
      '✨ Hayal gücün sınırsız!',
      '🖼️ Her resim özeldir!',
      '🎭 Şekillerle hikaye anlatabilirsin!',
      '🌟 Sen de sanatçısın!'
    ],

    tips: [
      '💡 Önce şekilleri çiz!',
      '💡 Sonra birleştir!',
      '💡 Renk kullan!',
      '💡 Hayal et ve çiz!'
    ],

    steps: [
      // ADIM 1: ŞEKİLLERLE NELER YAPILABİLİR?
      createStep(
        'Şekillerle Neler Yapılabilir?',
        '🎨 ŞEKİLLERLE SANAT!\n\nŞekillerle çok şey yapabiliriz!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🏠 EV yapabiliriz!                │\n│   (Üçgen + Kare)                    │\n│                                     │\n│   🚗 ARABA yapabiliriz!             │\n│   (Dikdörtgen + Daireler)           │\n│                                     │\n│   🤖 ROBOT yapabiliriz!             │\n│   (Kareler + Dikdörtgenler)         │\n│                                     │\n│   🌳 AĞAÇ yapabiliriz!              │\n│   (Üçgen + Dikdörtgen)              │\n│                                     │\n└─────────────────────────────────────┘\n\nHayal gücün sınırsız!\n\nŞimdi başlayalım! 🌟',
        '🎨 Şekillerle her şey!',
        'Hayal et!',
        {
          visual: 'ŞEKİLLERLE:\n\n🏠 = 🔺 + ⬜\n🚗 = ▭ + ⭕⭕\n🤖 = ⬜ + ⬜⬜\n🌳 = 🔺 + ▭\n\nKolay!',
          examples: [
            createExample(
              'Ev hangi şekillerden yapılır?',
              'Üçgen ve kare!',
              'Ev = Üçgen çatı + Kare duvar! 🏠 = 🔺 + ⬜',
              '🏠',
              ['Üçgen çatı!', 'Kare duvar!', 'Ev oldu!']
            )
          ],
          tip: 'Her şeyi şekillerle yapabilirsin! 🎨'
        }
      ),

      // ADIM 2: EV YAPALIM
      createStep(
        'Ev Yapalım!',
        '🏠 EV YAPIYORUZ!\n\nAdım adım ev yapalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ADIM 1: Üçgen çatı çiz            │\n│              🔺                     │\n│                                     │\n│   ADIM 2: Kare duvar çiz            │\n│              🔺                     │\n│              ⬜                     │\n│                                     │\n│   ADIM 3: Kapı ve pencere ekle      │\n│              🔺                     │\n│            🪟 ⬜ 🪟                │\n│              🚪                     │\n│                                     │\n│   TAMAM! Ev hazır! 🏠               │\n│                                     │\n└─────────────────────────────────────┘\n\nGördün mü?\n\nÇok kolay! 🌟\n\nŞimdi sen çiz! ✏️',
        '🏠 = 🔺 + ⬜',
        'Ev çiz!',
        {
          visual: 'EV YAPIMI:\n\n1️⃣    🔺\n     (Çatı)\n\n2️⃣    🔺\n      ⬜\n     (Duvar)\n\n3️⃣    🔺\n    🪟⬜🪟\n      🚪\n     (Ev!)',
          examples: [
            createExample(
              'Ev çatısı hangi şekildir?',
              'Üçgen!',
              'Ev çatısı üçgendir! 🔺 = Çatı!',
              '🔺',
              ['Çatı üçgen!', 'Sivri!', 'Güzel!']
            )
          ],
          tip: 'Evini renklendir! 🖍️'
        }
      ),

      // ADIM 3: ARABA YAPALIM
      createStep(
        'Araba Yapalım!',
        '🚗 ARABA YAPIYORUZ!\n\nAdım adım araba yapalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ADIM 1: Dikdörtgen gövde çiz      │\n│              ▭▭▭▭                  │\n│                                     │\n│   ADIM 2: Daire tekerlekler ekle    │\n│              ▭▭▭▭                  │\n│              ⭕  ⭕                 │\n│                                     │\n│   ADIM 3: Pencere ve kapı ekle      │\n│            🪟▭▭▭▭🪟               │\n│              ⭕  ⭕                 │\n│                                     │\n│   TAMAM! Araba hazır! 🚗            │\n│                                     │\n└─────────────────────────────────────┘\n\nVruum vruum! 🚙\n\nAraban çok güzel! 🌟\n\nŞimdi sen çiz! ✏️',
        '🚗 = ▭ + ⭕⭕',
        'Araba çiz!',
        {
          visual: 'ARABA YAPIMI:\n\n1️⃣   ▭▭▭▭\n    (Gövde)\n\n2️⃣   ▭▭▭▭\n     ⭕  ⭕\n  (Tekerlekler)\n\n3️⃣ 🪟▭▭▭▭🪟\n     ⭕  ⭕\n    (Araba!)',
          examples: [
            createExample(
              'Araba tekerlekleri hangi şekildir?',
              'Daire!',
              'Tekerlekler yuvarlaktır! ⭕ = Tekerlek!',
              '⭕',
              ['Tekerlek yuvarlak!', 'Daire!', 'Yuvarlanır!']
            )
          ],
          tip: 'Arabana renk ver! Kırmızı mı, mavi mi? 🎨'
        }
      ),

      // ADIM 4: ROBOT YAPALIM
      createStep(
        'Robot Yapalım!',
        '🤖 ROBOT YAPIYORUZ!\n\nAdım adım robot yapalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ADIM 1: Kare kafa çiz             │\n│              ⬜                     │\n│                                     │\n│   ADIM 2: Dikdörtgen gövde çiz      │\n│              ⬜                     │\n│              ▭                      │\n│                                     │\n│   ADIM 3: Kol ve bacak ekle         │\n│          ▭ ⬜ ▭                    │\n│            ▭                        │\n│          ▭   ▭                     │\n│                                     │\n│   TAMAM! Robot hazır! 🤖            │\n│                                     │\n└─────────────────────────────────────┘\n\nBeep boop! 🤖\n\nRobotun çok güzel! 🌟\n\nŞimdi sen çiz! ✏️',
        '🤖 = ⬜ + ▭ + ⬜⬜',
        'Robot çiz!',
        {
          visual: 'ROBOT YAPIMI:\n\n1️⃣     ⬜\n      (Kafa)\n\n2️⃣     ⬜\n       ▭\n     (Gövde)\n\n3️⃣  ▭ ⬜ ▭\n      ▭\n    ▭   ▭\n   (Robot!)',
          examples: [
            createExample(
              'Robot kafası hangi şekildir?',
              'Kare!',
              'Robot kafası karedir! ⬜ = Kafa!',
              '⬜',
              ['Kafa kare!', 'Köşeli!', 'Güzel!']
            )
          ],
          tip: 'Robotuna göz, ağız çiz! 👀'
        }
      ),

      // ADIM 5: AĞAÇ YAPALIM
      createStep(
        'Ağaç Yapalım!',
        '🌳 AĞAÇ YAPIYORUZ!\n\nAdım adım ağaç yapalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ADIM 1: Üçgen yapraklar çiz       │\n│              🔺                     │\n│             🔺🔺                    │\n│            🔺🔺🔺                   │\n│                                     │\n│   ADIM 2: Dikdörtgen gövde çiz      │\n│              🔺                     │\n│             🔺🔺                    │\n│            🔺🔺🔺                   │\n│              ▭                      │\n│              ▭                      │\n│                                     │\n│   TAMAM! Ağaç hazır! 🌳             │\n│                                     │\n└─────────────────────────────────────┘\n\nYeşil ağaç! 🌿\n\nÇok güzel! 🌟\n\nŞimdi sen çiz! ✏️',
        '🌳 = 🔺🔺🔺 + ▭',
        'Ağaç çiz!',
        {
          visual: 'AĞAÇ YAPIMI:\n\n1️⃣     🔺\n      🔺🔺\n     🔺🔺🔺\n   (Yapraklar)\n\n2️⃣     🔺\n      🔺🔺\n     🔺🔺🔺\n       ▭\n       ▭\n     (Ağaç!)',
          examples: [
            createExample(
              'Ağaç yaprakları hangi şekildir?',
              'Üçgen!',
              'Yapraklar üçgendir! 🔺🔺🔺 = Yapraklar!',
              '🔺',
              ['Yaprak üçgen!', 'Sivri!', 'Yeşil!']
            )
          ],
          tip: 'Ağacına elma ekle! 🍎'
        }
      ),

      // ADIM 6: GÜNEŞ VE BULUT
      createStep(
        'Güneş ve Bulut Yapalım!',
        '☀️ GÜNEŞ VE BULUT!\n\nGökyüzünü süsleyelim!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   GÜNEŞ:                            │\n│   • Büyük daire çiz ⭕              │\n│   • Etrafına çizgiler çiz           │\n│   • Sarı renkli yap ☀️              │\n│                                     │\n│   BULUT:                            │\n│   • Küçük daireler çiz ⭕⭕⭕        │\n│   • Yan yana koy                    │\n│   • Beyaz renkli yap ☁️             │\n│                                     │\n│   GÖKYÜZÜ:                          │\n│        ☀️      ☁️                   │\n│                                     │\n└─────────────────────────────────────┘\n\nGüzel gökyüzü! 🌈\n\nŞimdi sen çiz! ✏️',
        '☀️ = ⭕, ☁️ = ⭕⭕⭕',
        'Gökyüzü çiz!',
        {
          visual: 'GÖKYÜZÜ:\n\n☀️ Güneş:\n   ⭕ (Daire)\n   + Işınlar\n\n☁️ Bulut:\n   ⭕⭕⭕\n   (Daireler)\n\nBeraber:\n  ☀️  ☁️\n\nGüzel!',
          examples: [
            createExample(
              'Güneş hangi şekildir?',
              'Daire!',
              'Güneş yuvarlaktır! ☀️ = ⭕ Daire!',
              '☀️',
              ['Güneş yuvarlak!', 'Daire!', 'Sarı!']
            )
          ],
          tip: 'Gökkuşağı da ekle! 🌈'
        }
      ),

      // ADIM 7: TAM BİR RESİM
      createStep(
        'Tam Bir Resim Yapalım!',
        '🖼️ TAM BİR RESİM!\n\nHepsini birleştirelim!\n\n┌─────────────────────────────────────┐\n│                                     │\n│      ☀️        ☁️                   │\n│                                     │\n│        🌳    🏠    🌳               │\n│                                     │\n│            🚗                       │\n│   ═══════════════════════           │\n│                                     │\n│   • Gökyüzü (Güneş + Bulut)         │\n│   • Ev (Üçgen + Kare)               │\n│   • Ağaçlar (Üçgen + Dikdörtgen)    │\n│   • Araba (Dikdörtgen + Daireler)   │\n│   • Yol (Uzun dikdörtgen)           │\n│                                     │\n└─────────────────────────────────────┘\n\nMuhteşem bir resim! 🎨\n\nHepsini birleştirdin! 🌟\n\nAferin! 👏',
        '🖼️ Tam resim!',
        'Hepsini çiz!',
        {
          visual: 'TAM RESİM:\n\n☀️ ☁️ (Gökyüzü)\n🌳 🏠 🌳 (Doğa)\n   🚗 (Yol)\n═════════\n\nHepsi bir arada!\n\nGüzel!',
          examples: [
            createExample(
              'Resimde kaç şekil kullandık?',
              'Çok şekil!',
              'Daire, kare, üçgen, dikdörtgen! Hepsini kullandık! 🎨',
              '⭕⬜🔺▭',
              ['Daire!', 'Kare!', 'Üçgen!', 'Dikdörtgen!', 'Hepsi!']
            )
          ],
          tip: 'Kendi resmini yap! Ne istersen! 🎨'
        }
      ),

      // ADIM 8: SEN DE YARAT!
      createStep(
        'Sen De Yaratıcı Ol!',
        '🌟 SEN DE YARAT!\n\nŞimdi sıra sende!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   FİKİRLER:                         │\n│                                     │\n│   🏰 Kale yap                       │\n│   🚂 Tren yap                       │\n│   🦋 Kelebek yap                    │\n│   🌸 Çiçek yap                      │\n│   🐟 Balık yap                      │\n│   🚁 Helikopter yap                 │\n│   🏴‍☠️ Korsan gemisi yap              │\n│   👾 Uzaylı yap                     │\n│   🎪 Sirk yap                       │\n│   🌃 Şehir yap                      │\n│                                     │\n│   Hayal gücün sınırsız! ✨          │\n│                                     │\n└─────────────────────────────────────┘\n\nSen ne yapmak istersin?\n\nDüşün ve çiz! 🎨\n\nSen harika bir sanatçısın! 🌟',
        '✨ Hayal et!',
        'Yarat!',
        {
          visual: 'SENİN RESMİN:\n\nNe çizmek\nistersin?\n\n🎨 Düşün\n✏️ Çiz\n🖍️ Renklendir\n🌟 Paylaş\n\nYarat!',
          examples: [
            createExample(
              'Şekillerle ne yapabiliriz?',
              'Her şeyi!',
              'Hayal gücünle her şeyi yapabilirsin! 🎨 ✨',
              '🌟',
              ['Ev!', 'Araba!', 'Robot!', 'Her şey!', 'Sınırsız!']
            )
          ],
          tip: 'Resimlerini aileninle paylaş! 🖼️'
        }
      )
    ],

    // PRATİK SORULAR
    practiceQuestions: [
      createMultipleChoice(
        'Ev hangi şekillerden yapılır?',
        ['Üçgen + Kare', 'Daire + Kare', 'Üçgen + Daire', 'Kare + Dikdörtgen'],
        'Üçgen + Kare',
        'Ev = Üçgen çatı + Kare duvar! 🏠 = 🔺 + ⬜',
        '🏠',
        1,
        'Çatı üçgen, duvar kare!'
      ),

      createMultipleChoice(
        'Araba tekerlekleri hangi şekildir?',
        ['Daire', 'Kare', 'Üçgen', 'Dikdörtgen'],
        'Daire',
        'Tekerlekler yuvarlaktır! ⭕ = Tekerlek!',
        '⚙️',
        1,
        'Tekerlekler yuvarlak!'
      ),

      createMultipleChoice(
        'Robot kafası hangi şekildir?',
        ['Kare', 'Daire', 'Üçgen', 'Yıldız'],
        'Kare',
        'Robot kafası karedir! ⬜ = Kafa!',
        '🤖',
        1,
        'Robot kafası köşeli!'
      ),

      createMultipleChoice(
        'Ağaç yaprakları hangi şekildir?',
        ['Üçgen', 'Daire', 'Kare', 'Dikdörtgen'],
        'Üçgen',
        'Yapraklar üçgendir! 🔺 = Yaprak!',
        '🌳',
        1,
        'Yapraklar sivri!'
      ),

      createFillBlank(
        'Güneş ___ şeklindedir.',
        ['daire', 'yuvarlak'],
        'Güneş yuvarlaktır! ☀️ = ⭕ Daire!',
        '☀️',
        1,
        'Güneş nasıl?'
      ),

      createMultipleChoice(
        'Ev çatısı hangi şekildir?',
        ['Üçgen', 'Daire', 'Kare', 'Dikdörtgen'],
        'Üçgen',
        'Çatı sivridir! 🔺 = Çatı!',
        '🏠',
        1,
        'Çatı sivri üçgen!'
      ),

      createMultipleChoice(
        'Araba gövdesi hangi şekildir?',
        ['Dikdörtgen', 'Daire', 'Kare', 'Üçgen'],
        'Dikdörtgen',
        'Araba gövdesi uzundur! ▭ = Gövde!',
        '🚗',
        1,
        'Gövde uzun!'
      ),

      createMultipleChoice(
        'Ağaç gövdesi hangi şekildir?',
        ['Dikdörtgen', 'Daire', 'Kare', 'Üçgen'],
        'Dikdörtgen',
        'Ağaç gövdesi uzundur! ▭ = Gövde!',
        '🌳',
        1,
        'Gövde uzun dikdörtgen!'
      ),

      createFillBlank(
        'Robot ___ şekillerden yapılır.',
        ['kare', 'köşeli'],
        'Robot kare ve dikdörtgenlerden yapılır! 🤖 = ⬜ + ▭',
        '🤖',
        1,
        'Robot köşeli!'
      ),

      createMultipleChoice(
        'Bulut hangi şekillerden yapılır?',
        ['Küçük daireler', 'Kareler', 'Üçgenler', 'Dikdörtgenler'],
        'Küçük daireler',
        'Bulut küçük dairelerden yapılır! ☁️ = ⭕⭕⭕',
        '☁️',
        1,
        'Bulut yuvarlak!'
      ),

      createMultipleChoice(
        'Tam bir resim için ne gerekir?',
        ['Birçok şekil', 'Sadece daire', 'Sadece kare', 'Sadece üçgen'],
        'Birçok şekil',
        'Tam resim için tüm şekilleri kullanırız! ⭕⬜🔺▭',
        '🖼️',
        1,
        'Hepsini kullan!'
      ),

      createMultipleChoice(
        'Şekillerle neler yapabiliriz?',
        ['Her şeyi', 'Sadece ev', 'Sadece araba', 'Hiçbir şey'],
        'Her şeyi',
        'Hayal gücünle her şeyi yapabilirsin! 🎨 ✨',
        '🌟',
        1,
        'Sınırsız!'
      ),

      createFillBlank(
        'Ev yapmak için ___ ve ___ gerekir.',
        ['üçgen kare', 'üçgen ve kare'],
        'Ev = Üçgen + Kare! 🏠 = 🔺 + ⬜',
        '🏠',
        1,
        'Hangi şekiller?'
      ),

      createMultipleChoice(
        'Resim yaparken ne kullanmalıyız?',
        ['Hayal gücümüz', 'Sadece kural', 'Sadece şablon', 'Hiçbir şey'],
        'Hayal gücümüz',
        'Hayal gücünle yaratıcı ol! 🎨 ✨',
        '✨',
        1,
        'Hayal et!'
      ),

      createMultipleChoice(
        'En güzel resim hangisidir?',
        ['Senin yaptığın', 'Başkasınınki', 'Bilgisayardaki', 'Kitaptaki'],
        'Senin yaptığın',
        'En güzel resim senin yaptığındır! 🎨 Sen sanatçısın! 🌟',
        '🎨',
        1,
        'Sen özelsin!'
      )
    ],

    summary: '🎉 Bugün sanatçı olduk!\n\n✅ Ev yaptık 🏠 (Üçgen + Kare)\n✅ Araba yaptık 🚗 (Dikdörtgen + Daireler)\n✅ Robot yaptık 🤖 (Kareler)\n✅ Ağaç yaptık 🌳 (Üçgenler + Dikdörtgen)\n✅ Güneş ve bulut yaptık ☀️☁️\n✅ Tam resim yaptık! 🖼️\n\nHayal gücün sınırsız! 🎨\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki temada günlük hayat matematiği öğreneceğiz! Sabah-öğle-akşam, büyük-küçük! 🌅'
  }
};
