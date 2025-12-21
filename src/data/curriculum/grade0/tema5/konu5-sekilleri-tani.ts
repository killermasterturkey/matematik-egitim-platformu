// DESTEK SINIFI - TEMA 5 - KONU 5: ŞEKİLLERİ TANI VE EŞLEŞTİR
// Öğrenilen şekilleri tanıma ve eşleştirme

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu5SekilleriTani: Topic = {
  id: 'sekilleri-tani',
  title: 'Şekilleri Tanı ve Eşleştir',
  description: 'Şekilleri bulalım ve eşleştirelim!',
  emoji: '🎯',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['şekil', 'tanı', 'eşleştir', 'bul', 'oyun'],
  objectives: [
    'Daire, kare, üçgen, dikdörtgeni ayırt edeceksin',
    'Şekilleri nesnelerle eşleştireceksin',
    'Günlük hayatta şekilleri bulacaksın',
    'Şekil oyunları oynayacaksın'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün şekil avına çıkıyoruz!\n\nDaire ⭕, kare ⬜, üçgen 🔺, dikdörtgen ▭\n\nHepsini bulacağız!\n\nHazır mısın? Başlayalım! 🔍',

    motivationQuote: 'Sen harika bir şekil avcısısın! 🎯',

    funFacts: [
      '⭕ Daire yuvarlak - köşesi yok!',
      '⬜ Kare 4 köşe - hepsi eşit!',
      '🔺 Üçgen 3 köşe - sivri!',
      '▭ Dikdörtgen 4 köşe - uzun!',
      '🌍 Dünyada milyonlarca şekil var!',
      '🎨 Ressamlar şekillerle resim yapar!',
      '🏗️ Binalar şekillerden yapılır!',
      '🎮 Oyunlarda şekiller vardır!',
      '🧩 Yapbozlar şekillerden oluşur!',
      '🎪 Her yer şekil dolu!'
    ],

    tips: [
      '💡 Yuvarlak mı? → Daire!',
      '💡 4 köşe eşit mi? → Kare!',
      '💡 3 köşe sivri mi? → Üçgen!',
      '💡 4 köşe uzun mu? → Dikdörtgen!'
    ],

    steps: [
      // ADIM 1: ŞEKİLLERİ HATIRLAYALIM
      createStep(
        'Şekilleri Hatırlayalım',
        '📚 ŞEKİLLERİMİZ!\n\nÖğrendiğimiz şekiller:\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ⭕ DAİRE                          │\n│   • Yuvarlak                        │\n│   • Köşesi yok                      │\n│                                     │\n│   ⬜ KARE                           │\n│   • 4 köşe                          │\n│   • Tüm kenarlar eşit               │\n│                                     │\n│   🔺 ÜÇGEN                          │\n│   • 3 köşe                          │\n│   • Sivri                           │\n│                                     │\n│   ▭ DİKDÖRTGEN                      │\n│   • 4 köşe                          │\n│   • Uzun                            │\n│                                     │\n└─────────────────────────────────────┘\n\nHepsini hatırladın mı? 🧠',
        '⭕⬜🔺▭ = Şekillerimiz!',
        'Şekilleri hatırla!',
        {
          visual: 'ŞEKİL LİSTESİ:\n\n⭕ Daire\n⬜ Kare\n🔺 Üçgen\n▭ Dikdörtgen\n\nHepsi özel!',
          examples: [
            createExample(
              'Kaç şekil öğrendik?',
              '4 şekil!',
              'Daire, kare, üçgen, dikdörtgen = 4 şekil!',
              '⭕⬜🔺▭',
              ['Daire!', 'Kare!', 'Üçgen!', 'Dikdörtgen!']
            )
          ],
          tip: 'Her şekli parmağınla çiz! ✏️'
        }
      ),

      // ADIM 2: DAİRE AVI
      createStep(
        'Daire Avı - Yuvarlak Bul!',
        '⭕ DAİRE AVI!\n\nYuvarlak şeyleri bul!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Bunlar DAİRE:                     │\n│                                     │\n│   ⚽ Top                             │\n│   ☀️ Güneş                          │\n│   🍕 Pizza                          │\n│   ⏰ Saat                            │\n│   🎈 Balon                           │\n│   🪙 Para                            │\n│                                     │\n│   Hepsi yuvarlak! ⭕                │\n│                                     │\n└─────────────────────────────────────┘\n\nŞimdi sen bul!\n\nOdanda yuvarlak ne var? 🔍',
        '⭕ Yuvarlak = Daire!',
        'Yuvarlak şeyler ara!',
        {
          visual: 'DAİRE NESNELER:\n\n⚽ Top → ⭕\n☀️ Güneş → ⭕\n🍕 Pizza → ⭕\n⏰ Saat → ⭕\n🎈 Balon → ⭕\n🪙 Para → ⭕\n\nHepsi daire!',
          examples: [
            createExample(
              'Top hangi şekildir?',
              'Daire!',
              'Top yuvarlaktır! ⚽ = Daire! ⭕',
              '⚽ → ⭕',
              ['Top yuvarlak!', 'Daire şekli!', 'Köşesi yok!']
            )
          ],
          tip: 'Evde 5 yuvarlak şey bul! 🎯'
        }
      ),

      // ADIM 3: KARE AVI
      createStep(
        'Kare Avı - Köşeli Bul!',
        '⬜ KARE AVI!\n\nKöşeli eşit şeyler bul!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Bunlar KARE:                      │\n│                                     │\n│   📺 TV (bazıları)                  │\n│   🪟 Pencere (bazıları)             │\n│   📦 Kutu                           │\n│   🎁 Hediye kutusu                  │\n│   🧊 Buz küpü                       │\n│   🎲 Zar                            │\n│                                     │\n│   Hepsi köşeli! ⬜                  │\n│                                     │\n└─────────────────────────────────────┘\n\nŞimdi sen bul!\n\nOdanda köşeli ne var? 🔍',
        '⬜ Köşeli = Kare!',
        'Köşeli şeyler ara!',
        {
          visual: 'KARE NESNELER:\n\n📺 TV → ⬜\n🪟 Pencere → ⬜\n📦 Kutu → ⬜\n🎁 Hediye → ⬜\n🧊 Buz → ⬜\n🎲 Zar → ⬜\n\nHepsi kare!',
          examples: [
            createExample(
              'Kutu hangi şekildir?',
              'Kare!',
              'Kutu köşelidir! 📦 = Kare! ⬜',
              '📦 → ⬜',
              ['Kutu köşeli!', 'Kare şekli!', '4 köşe!']
            )
          ],
          tip: 'Evde 5 kare şey bul! 🎯'
        }
      ),

      // ADIM 4: ÜÇGEN AVI
      createStep(
        'Üçgen Avı - Sivri Bul!',
        '🔺 ÜÇGEN AVI!\n\nSivri şeyler bul!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Bunlar ÜÇGEN:                     │\n│                                     │\n│   🍕 Pizza dilimi                   │\n│   🏠 Ev çatısı                      │\n│   🎄 Noel ağacı                     │\n│   🏔️ Dağ                           │\n│   ⚠️ Uyarı işareti                  │\n│   🚩 Bayrak                         │\n│                                     │\n│   Hepsi sivri! 🔺                   │\n│                                     │\n└─────────────────────────────────────┘\n\nŞimdi sen bul!\n\nOdanda sivri ne var? 🔍',
        '🔺 Sivri = Üçgen!',
        'Sivri şeyler ara!',
        {
          visual: 'ÜÇGEN NESNELER:\n\n🍕 Pizza dilimi → 🔺\n🏠 Çatı → 🔺\n🎄 Ağaç → 🔺\n🏔️ Dağ → 🔺\n⚠️ İşaret → 🔺\n🚩 Bayrak → 🔺\n\nHepsi üçgen!',
          examples: [
            createExample(
              'Pizza dilimi hangi şekildir?',
              'Üçgen!',
              'Pizza dilimi sivridir! 🍕 = Üçgen! 🔺',
              '🍕 → 🔺',
              ['Dilim sivri!', 'Üçgen şekli!', '3 köşe!']
            )
          ],
          tip: 'Evde 3 üçgen şey bul! 🎯'
        }
      ),

      // ADIM 5: DİKDÖRTGEN AVI
      createStep(
        'Dikdörtgen Avı - Uzun Bul!',
        '▭ DİKDÖRTGEN AVI!\n\nUzun köşeli şeyler bul!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Bunlar DİKDÖRTGEN:                │\n│                                     │\n│   🚪 Kapı                           │\n│   📱 Telefon                        │\n│   📖 Kitap                          │\n│   🪟 Pencere (çoğu)                 │\n│   📺 TV (çoğu)                      │\n│   🎫 Bilet                          │\n│                                     │\n│   Hepsi uzun! ▭                     │\n│                                     │\n└─────────────────────────────────────┘\n\nŞimdi sen bul!\n\nOdanda uzun ne var? 🔍',
        '▭ Uzun = Dikdörtgen!',
        'Uzun şeyler ara!',
        {
          visual: 'DİKDÖRTGEN NESNELER:\n\n🚪 Kapı → ▭\n📱 Telefon → ▭\n📖 Kitap → ▭\n🪟 Pencere → ▭\n📺 TV → ▭\n🎫 Bilet → ▭\n\nHepsi dikdörtgen!',
          examples: [
            createExample(
              'Kapı hangi şekildir?',
              'Dikdörtgen!',
              'Kapı uzundur! 🚪 = Dikdörtgen! ▭',
              '🚪 → ▭',
              ['Kapı uzun!', 'Dikdörtgen şekli!', '4 köşe!']
            )
          ],
          tip: 'Evde 5 dikdörtgen bul! 🎯'
        }
      ),

      // ADIM 6: EŞLEŞTİRME OYUNU
      createStep(
        'Eşleştirme Oyunu',
        '🎮 EŞLEŞTİRME OYUNU!\n\nNesneyi şekille eşleştir!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ⚽ Top      →  ⭕ Daire           │\n│                                     │\n│   📦 Kutu    →  ⬜ Kare            │\n│                                     │\n│   🍕 Dilim   →  🔺 Üçgen           │\n│                                     │\n│   🚪 Kapı    →  ▭ Dikdörtgen       │\n│                                     │\n└─────────────────────────────────────┘\n\nGördün mü?\n\nHer nesnenin bir şekli var!\n\nŞimdi sen eşleştir! 🎯',
        '🎮 Eşleştir!',
        'Nesne ile şekli bul!',
        {
          visual: 'EŞLEŞTİRMELER:\n\n⚽→⭕ Top=Daire\n📦→⬜ Kutu=Kare\n🍕→🔺 Dilim=Üçgen\n🚪→▭ Kapı=Dikdörtgen\n\nDoğru eşleştir!',
          examples: [
            createExample(
              'Güneş hangi şekille eşleşir?',
              'Daire!',
              'Güneş yuvarlaktır! ☀️ → ⭕ Daire!',
              '☀️ → ⭕',
              ['Güneş yuvarlak!', 'Daire ile eşleşir!', 'Doğru!']
            )
          ],
          tip: '10 nesne bul ve eşleştir! 🎯'
        }
      ),

      // ADIM 7: ŞEKİL BULMACA
      createStep(
        'Şekil Bulmacası',
        '🧩 ŞEKİL BULMACASI!\n\nİpuçlardan şekli bul!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   İPUCU 1:                          │\n│   "Benim köşem yok,                 │\n│    yuvarlağım ben!"                 │\n│   → Cevap: ⭕ DAİRE                 │\n│                                     │\n│   İPUCU 2:                          │\n│   "4 köşem var,                     │\n│    hepsi eşit!"                     │\n│   → Cevap: ⬜ KARE                  │\n│                                     │\n│   İPUCU 3:                          │\n│   "3 köşem var,                     │\n│    sivriyim ben!"                   │\n│   → Cevap: 🔺 ÜÇGEN                │\n│                                     │\n└─────────────────────────────────────┘\n\nAnladın mı nasıl?\n\nŞimdi sen ipucu ver! 🎯',
        '🧩 Bulmaca çöz!',
        'İpucudan şekli bul!',
        {
          visual: 'İPUÇLARI:\n\n⭕ Yuvarlak, köşesiz\n⬜ 4 köşe, eşit\n🔺 3 köşe, sivri\n▭ 4 köşe, uzun\n\nHangisi?',
          examples: [
            createExample(
              'İpucu: "Uzunum ben, 4 köşem var!" Hangisi?',
              'Dikdörtgen!',
              'Uzun ve 4 köşe = ▭ Dikdörtgen!',
              '▭',
              ['Uzun!', '4 köşe!', 'Dikdörtgen!']
            )
          ],
          tip: 'Aileninle bulmaca yap! 🧩'
        }
      ),

      // ADIM 8: ŞEKİL YARIŞI
      createStep(
        'Şekil Yarışı',
        '🏁 ŞEKİL YARIŞI!\n\nEn hızlı şekli bul!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   GÖREV 1:                          │\n│   Evinde 3 daire bul! ⭕            │\n│                                     │\n│   GÖREV 2:                          │\n│   Evinde 3 kare bul! ⬜             │\n│                                     │\n│   GÖREV 3:                          │\n│   Evinde 3 üçgen bul! 🔺            │\n│                                     │\n│   GÖREV 4:                          │\n│   Evinde 3 dikdörtgen bul! ▭        │\n│                                     │\n│   TOPLAM: 12 şekil! 🎯              │\n│                                     │\n└─────────────────────────────────────┘\n\nHazır mısın?\n\nBaşla! 🏃\n\nHepsini buldun mu? 🏆',
        '🏁 Yarış!',
        'Şekilleri bul!',
        {
          visual: 'GÖREVLER:\n\n✓ 3 daire ⭕⭕⭕\n✓ 3 kare ⬜⬜⬜\n✓ 3 üçgen 🔺🔺🔺\n✓ 3 dikdörtgen ▭▭▭\n\nToplam: 12 şekil!\n\nBul!',
          examples: [
            createExample(
              'Kaç şekil bulmalısın?',
              '12 şekil!',
              'Her şekilden 3 tane = 3+3+3+3 = 12 şekil!',
              '⭕⭕⭕⬜⬜⬜🔺🔺🔺▭▭▭',
              ['3 daire!', '3 kare!', '3 üçgen!', '3 dikdörtgen!', '12 toplam!']
            )
          ],
          tip: 'Zamanla yarış! En hızlı kim? ⏱️'
        }
      )
    ],

    // PRATİK SORULAR
    practiceQuestions: [
      createMultipleChoice(
        '⚽ Top hangi şekildir?',
        ['⭕ Daire', '⬜ Kare', '🔺 Üçgen', '▭ Dikdörtgen'],
        '⭕ Daire',
        'Top yuvarlaktır! ⚽ = ⭕ Daire!',
        '⚽',
        1,
        'Top yuvarlak!'
      ),

      createMultipleChoice(
        '📦 Kutu hangi şekildir?',
        ['⬜ Kare', '⭕ Daire', '🔺 Üçgen', '▭ Dikdörtgen'],
        '⬜ Kare',
        'Kutu köşelidir! 📦 = ⬜ Kare!',
        '📦',
        1,
        'Kutu köşeli!'
      ),

      createMultipleChoice(
        '🍕 Pizza dilimi hangi şekildir?',
        ['🔺 Üçgen', '⭕ Daire', '⬜ Kare', '▭ Dikdörtgen'],
        '🔺 Üçgen',
        'Pizza dilimi sivridir! 🍕 = 🔺 Üçgen!',
        '🍕',
        1,
        'Dilim sivri!'
      ),

      createMultipleChoice(
        '🚪 Kapı hangi şekildir?',
        ['▭ Dikdörtgen', '⭕ Daire', '⬜ Kare', '🔺 Üçgen'],
        '▭ Dikdörtgen',
        'Kapı uzundur! 🚪 = ▭ Dikdörtgen!',
        '🚪',
        1,
        'Kapı uzun!'
      ),

      createMultipleChoice(
        'Hangisi daire şeklindedir?',
        ['☀️ Güneş', '📱 Telefon', '🏠 Çatı', '📖 Kitap'],
        '☀️ Güneş',
        'Güneş yuvarlaktır! ☀️ = ⭕ Daire!',
        '☀️',
        1,
        'Yuvarlak olanı seç!'
      ),

      createMultipleChoice(
        'Hangisi kare şeklindedir?',
        ['🎁 Hediye kutusu', '⚽ Top', '🍕 Pizza dilimi', '🚪 Kapı'],
        '🎁 Hediye kutusu',
        'Hediye kutusu köşelidir! 🎁 = ⬜ Kare!',
        '🎁',
        1,
        'Köşeli eşit olanı seç!'
      ),

      createMultipleChoice(
        'Hangisi üçgen şeklindedir?',
        ['🏠 Ev çatısı', '⚽ Top', '📦 Kutu', '📱 Telefon'],
        '🏠 Ev çatısı',
        'Ev çatısı sivridir! 🏠 = 🔺 Üçgen!',
        '🏠',
        1,
        'Sivri olanı seç!'
      ),

      createMultipleChoice(
        'Hangisi dikdörtgen şeklindedir?',
        ['📱 Telefon', '⚽ Top', '🍕 Pizza dilimi', '⏰ Saat'],
        '📱 Telefon',
        'Telefon uzundur! 📱 = ▭ Dikdörtgen!',
        '📱',
        1,
        'Uzun olanı seç!'
      ),

      createFillBlank(
        'Top ___ şeklindedir.',
        ['daire', 'yuvarlak'],
        'Top yuvarlaktır! ⚽ = ⭕ Daire!',
        '⚽',
        1,
        'Top nasıl?'
      ),

      createMultipleChoice(
        'İpucu: "Yuvarlağım, köşem yok!" Hangisi?',
        ['⭕ Daire', '⬜ Kare', '🔺 Üçgen', '▭ Dikdörtgen'],
        '⭕ Daire',
        'Yuvarlak ve köşesiz = ⭕ Daire!',
        '⭕',
        1,
        'Yuvarlak olanı bul!'
      ),

      createMultipleChoice(
        'İpucu: "4 köşem var, hepsi eşit!" Hangisi?',
        ['⬜ Kare', '⭕ Daire', '🔺 Üçgen', '▭ Dikdörtgen'],
        '⬜ Kare',
        '4 köşe ve eşit = ⬜ Kare!',
        '⬜',
        1,
        '4 köşe eşit olanı bul!'
      ),

      createMultipleChoice(
        'İpucu: "3 köşem var, sivriyim!" Hangisi?',
        ['🔺 Üçgen', '⭕ Daire', '⬜ Kare', '▭ Dikdörtgen'],
        '🔺 Üçgen',
        '3 köşe ve sivri = 🔺 Üçgen!',
        '🔺',
        1,
        '3 köşe sivri olanı bul!'
      ),

      createMultipleChoice(
        'İpucu: "4 köşem var, uzunum!" Hangisi?',
        ['▭ Dikdörtgen', '⭕ Daire', '⬜ Kare', '🔺 Üçgen'],
        '▭ Dikdörtgen',
        '4 köşe ve uzun = ▭ Dikdörtgen!',
        '▭',
        1,
        '4 köşe uzun olanı bul!'
      ),

      createMultipleChoice(
        'Kaç çeşit şekil öğrendik?',
        ['4 şekil', '2 şekil', '3 şekil', '5 şekil'],
        '4 şekil',
        'Daire, kare, üçgen, dikdörtgen = 4 şekil!',
        '⭕⬜🔺▭',
        1,
        'Şekilleri say!'
      ),

      createFillBlank(
        'Pizza dilimi ___ şeklindedir.',
        ['üçgen', 'sivri'],
        'Pizza dilimi üçgen şeklindedir! 🍕 = 🔺',
        '🍕',
        1,
        'Pizza dilimi nasıl?'
      )
    ],

    summary: '🎉 Bugün şekil avı yaptık!\n\n✅ Daire yuvarlak ⭕\n✅ Kare köşeli eşit ⬜\n✅ Üçgen sivri 🔺\n✅ Dikdörtgen uzun ▭\n✅ Nesnelerle eşleştirdik!\n✅ Şekil oyunları oynadık!\n\nEtrafındaki şekilleri bul! 🔍\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste şekillerle resim yapacağız! Ev, araba, robot! 🎨'
  }
};
