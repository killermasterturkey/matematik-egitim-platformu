// DESTEK SINIFI - TEMA 6 - KONU 1: SABAH - ÖĞLE - AKŞAM
// Günün zamanlarını tanıma

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1SabahOgleAksam: Topic = {
  id: 'sabah-ogle-aksam',
  title: 'Sabah - Öğle - Akşam',
  description: 'Günün zamanlarını öğreniyoruz!',
  emoji: '🌅',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['sabah', 'öğle', 'akşam', 'gün', 'zaman', 'güneş', 'ay'],
  objectives: [
    'Sabahı tanıyacaksın',
    'Öğleyi tanıyacaksın',
    'Akşamı tanıyacaksın',
    'Gün döngüsünü anlayacaksın'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün günün zamanlarını öğreneceğiz!\n\n🌅 Sabah, ☀️ Öğle, 🌙 Akşam\n\nHer gün aynı sırada!\n\nHazır mısın? Başlayalım! ⏰',

    motivationQuote: 'Her gün yeni bir başlangıç! 🌅',

    funFacts: [
      '🌅 Sabah güneş doğar!',
      '☀️ Öğlen güneş tepededir!',
      '🌙 Akşam ay çıkar!',
      '🌍 Dünya döndüğü için gün ve gece olur!',
      '🐓 Horoz sabahleyin öter!',
      '🦉 Baykuş geceleri uyanıktır!',
      '☀️ Güneş ışık verir!',
      '🌙 Ay geceleri parlar!',
      '⏰ Her gün aynı sırayla gelir!',
      '🌈 Her gün özeldir!'
    ],

    tips: [
      '💡 Sabah uyanırız!',
      '💡 Öğlen yemek yeriz!',
      '💡 Akşam uyuruz!',
      '💡 Her gün tekrar eder!'
    ],

    steps: [
      // ADIM 1: SABAH
      createStep(
        'Sabah - Günaydın!',
        '🌅 SABAH!\n\nBir varmış bir yokmuş...\n\nGüneş uyumuş.\n\nSonra uyanmış!\n\nDoğudan çıkmış! 🌅\n\n┌─────────────────────────────────────┐\n│                                     │\n│          🌅 SABAH                   │\n│                                     │\n│      Güneş doğar                    │\n│      Işıklar artar                  │\n│      Kuşlar ötmeye başlar 🐦        │\n│      Biz uyanırız 😊                │\n│                                     │\n│      "Günaydın!" 🌅                 │\n│                                     │\n└─────────────────────────────────────┘\n\nSabah çok güzel!\n\nYeni bir gün başlar! 🌟',
        '🌅 Sabah = Güneş doğar!',
        'Sabah uyanırız!',
        {
          visual: '🌅 SABAH\n\n☀️ Güneş doğar\n🐓 Horoz öter\n🐦 Kuşlar öter\n😊 Uyanırız\n🥐 Kahvaltı yaparız\n\nGünaydın!',
          examples: [
            createExample(
              'Sabah ne olur?',
              'Güneş doğar!',
              'Sabah güneş doğar! 🌅 Biz uyanırız! 😊',
              '🌅',
              ['Güneş doğar!', 'Uyanırız!', 'Kahvaltı!']
            )
          ],
          tip: 'Her sabah güneşe "günaydın" de! 🌅'
        }
      ),

      // ADIM 2: SABAH RUTİNİ
      createStep(
        'Sabah Rutini',
        '🌅 SABAHLEYIN NE YAPARIZ?\n\nSabah rutinimiz var!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1️⃣ Uyanırız 😊                   │\n│      (Güneş doğar)                  │\n│                                     │\n│   2️⃣ Yıkanırız 🚿                  │\n│      (Temiz oluruz)                 │\n│                                     │\n│   3️⃣ Giyiniriz 👕                  │\n│      (Kıyafet giyeriz)              │\n│                                     │\n│   4️⃣ Kahvaltı yaparız 🥐           │\n│      (Karnımız doyar)               │\n│                                     │\n│   5️⃣ Güne başlarız! 🎒             │\n│                                     │\n└─────────────────────────────────────┘\n\nHer sabah aynı!\n\nSırayla yaparız! 🌟',
        '🌅 Sabah rutini!',
        'Sırayla yap!',
        {
          visual: 'SABAH:\n\n😊 Uyan\n🚿 Yıkan\n👕 Giyın\n🥐 Kahvaltı\n🎒 Başla\n\nHer sabah!',
          examples: [
            createExample(
              'Sabah ilk ne yaparız?',
              'Uyanırız!',
              'Sabah ilk uyanırız! 😊 Sonra yıkanırız! 🚿',
              '😊',
              ['Uyan!', 'Yıkan!', 'Giyın!', 'Kahvaltı!']
            )
          ],
          tip: 'Sabah rutinini hep aynı yap! 📝'
        }
      ),

      // ADIM 3: ÖĞLE
      createStep(
        'Öğle - Güneş Tepede!',
        '☀️ ÖĞLE!\n\nGüneş yükselmiş!\n\nTepede durmuş! ☀️\n\nÇok ışıklı!\n\n┌─────────────────────────────────────┐\n│                                     │\n│          ☀️ ÖĞLE                    │\n│                                     │\n│      Güneş tepede                   │\n│      Çok aydınlık                   │\n│      Hava sıcak 🌡️                 │\n│      Yemek zamanı 🍽️                │\n│                                     │\n│      "İyi öğlenler!" ☀️             │\n│                                     │\n└─────────────────────────────────────┘\n\nÖğle günün ortası!\n\nGüneş en yukarıda! 🌟',
        '☀️ Öğle = Güneş tepede!',
        'Öğle yemek yeriz!',
        {
          visual: '☀️ ÖĞLE\n\n☀️ Güneş tepede\n🌡️ Hava sıcak\n🍽️ Öğle yemeği\n😴 Dinleniriz\n🎮 Oynarız\n\nGüneş yukarıda!',
          examples: [
            createExample(
              'Öğlen ne olur?',
              'Güneş tepededir!',
              'Öğlen güneş tepededir! ☀️ Yemek yeriz! 🍽️',
              '☀️',
              ['Güneş tepede!', 'Yemek!', 'Dinlen!']
            )
          ],
          tip: 'Öğlen güneşe bak - tepede! ☀️'
        }
      ),

      // ADIM 4: ÖĞLE RUTİNİ
      createStep(
        'Öğle Rutini',
        '☀️ ÖĞLEN NE YAPARIZ?\n\nÖğle rutinimiz var!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1️⃣ Oynarız 🎮                    │\n│      (Sabah oyunları)               │\n│                                     │\n│   2️⃣ Öğle yemeği yeriz 🍽️          │\n│      (Karnımız doyar)               │\n│                                     │\n│   3️⃣ Dinleniriz 😴                 │\n│      (Biraz uyuyabiliriz)           │\n│                                     │\n│   4️⃣ Tekrar oynarız 🎨             │\n│      (Öğleden sonra)                │\n│                                     │\n└─────────────────────────────────────┘\n\nÖğle eğlenceli!\n\nOyun zamanı! 🎪',
        '☀️ Öğle eğlenceli!',
        'Oyna ve ye!',
        {
          visual: 'ÖĞLE:\n\n🎮 Oyna\n🍽️ Ye\n😴 Dinlen\n🎨 Oyna\n\nEğlenceli!',
          examples: [
            createExample(
              'Öğlen ne yeriz?',
              'Öğle yemeği!',
              'Öğlen öğle yemeği yeriz! 🍽️ Lezzetli!',
              '🍽️',
              ['Öğle yemeği!', 'Lezzetli!', 'Karnımız doyar!']
            )
          ],
          tip: 'Öğlen yemeğini ye! 🍽️'
        }
      ),

      // ADIM 5: AKŞAM
      createStep(
        'Akşam - İyi Geceler!',
        '🌙 AKŞAM!\n\nGüneş batmış!\n\nAy çıkmış! 🌙\n\nKaranlık olmuş!\n\n┌─────────────────────────────────────┐\n│                                     │\n│          🌙 AKŞAM                   │\n│                                     │\n│      Güneş batar                    │\n│      Ay çıkar                       │\n│      Karanlık olur 🌃               │\n│      Yıldızlar parlar ⭐            │\n│      Uyku zamanı 😴                 │\n│                                     │\n│      "İyi geceler!" 🌙              │\n│                                     │\n└─────────────────────────────────────┘\n\nAkşam dinlenme zamanı!\n\nUyku zamanı! 😴',
        '🌙 Akşam = Ay çıkar!',
        'Akşam uyuruz!',
        {
          visual: '🌙 AKŞAM\n\n🌅 Güneş batar\n🌙 Ay çıkar\n⭐ Yıldızlar\n🌃 Karanlık\n😴 Uyuruz\n\nİyi geceler!',
          examples: [
            createExample(
              'Akşam ne olur?',
              'Ay çıkar!',
              'Akşam ay çıkar! 🌙 Karanlık olur! 🌃',
              '🌙',
              ['Ay çıkar!', 'Karanlık!', 'Uyku!']
            )
          ],
          tip: 'Akşam aya "iyi geceler" de! 🌙'
        }
      ),

      // ADIM 6: AKŞAM RUTİNİ
      createStep(
        'Akşam Rutini',
        '🌙 AKŞAM NE YAPARIZ?\n\nAkşam rutinimiz var!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1️⃣ Akşam yemeği yeriz 🍽️         │\n│      (Karnımız doyar)               │\n│                                     │\n│   2️⃣ Biraz oynarız 🧸               │\n│      (Sakin oyunlar)                │\n│                                     │\n│   3️⃣ Yıkanırız 🛁                  │\n│      (Temiz oluruz)                 │\n│                                     │\n│   4️⃣ Diş fırçalarız 🪥             │\n│      (Dişlerimiz temiz)             │\n│                                     │\n│   5️⃣ Uyuruz 😴                     │\n│      (İyi geceler)                  │\n│                                     │\n└─────────────────────────────────────┘\n\nAkşam dinlenme zamanı!\n\nUyku önemli! 😴',
        '🌙 Akşam rutini!',
        'Yıkan ve uyu!',
        {
          visual: 'AKŞAM:\n\n🍽️ Ye\n🧸 Oyna\n🛁 Yıkan\n🪥 Fırçala\n😴 Uyu\n\nİyi geceler!',
          examples: [
            createExample(
              'Akşam uyumadan önce ne yaparız?',
              'Yıkanırız!',
              'Yıkanır, diş fırçalarız! 🛁🪥 Sonra uyuruz! 😴',
              '🛁',
              ['Yıkan!', 'Diş fırçala!', 'Uyu!']
            )
          ],
          tip: 'Her akşam aynı saatte uyu! ⏰'
        }
      ),

      // ADIM 7: GÜN DÖNGÜSÜ
      createStep(
        'Gün Döngüsü',
        '🔄 GÜN DÖNGÜSÜ!\n\nHer gün aynı sıra!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🌅 SABAH                          │\n│   ↓                                 │\n│   ☀️ ÖĞLE                           │\n│   ↓                                 │\n│   🌙 AKŞAM                          │\n│   ↓                                 │\n│   🌅 SABAH (Yeni gün!)              │\n│                                     │\n│   Hep böyle devam eder! 🔄          │\n│                                     │\n└─────────────────────────────────────┘\n\nBir gün biter!\n\nYeni gün başlar! 🌟\n\nSonsuz döngü! 🔄',
        '🔄 Sabah → Öğle → Akşam → Sabah',
        'Hep tekrar eder!',
        {
          visual: 'GÜN DÖNGÜSÜ:\n\n🌅 Sabah\n  ↓\n☀️ Öğle\n  ↓\n🌙 Akşam\n  ↓\n🌅 Sabah\n\n🔄 Tekrar!',
          examples: [
            createExample(
              'Akşamdan sonra ne gelir?',
              'Sabah!',
              'Akşam 🌙 → Gece 😴 → Sabah 🌅! Yeni gün!',
              '🔄',
              ['Akşam biter!', 'Gece uyuruz!', 'Sabah başlar!']
            )
          ],
          tip: 'Her gün aynı sıra! 🔄'
        }
      ),

      // ADIM 8: GÜNÜN ŞARKISI
      createStep(
        'Günün Şarkısı',
        '🎵 GÜNÜN ŞARKISI! 🎵\n\n(Şarkı söyleyelim!)\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Sabah oldu güneş doğdu            │\n│   Günaydın günaydın! 🌅             │\n│                                     │\n│   Öğle oldu güneş tepede            │\n│   Afiyet olsun! ☀️                  │\n│                                     │\n│   Akşam oldu ay çıktı               │\n│   İyi geceler! 🌙                   │\n│                                     │\n│   Her gün böyle devam eder          │\n│   Sabah, öğle, akşam! 🔄            │\n│                                     │\n└─────────────────────────────────────┘\n\n🎵 Hep birlikte söyle! 🎵\n\nGünü öğrendik! 🎪',
        '🎵 Şarkı söyle!',
        'Günü hatırla!',
        {
          visual: 'ŞARKI:\n\n🌅 Sabah doğdu\n☀️ Öğle tepede\n🌙 Akşam battı\n\n🎵 Söyle!\n🎪 Eğlen!',
          examples: [
            createExample(
              'Günün kaç zamanı var?',
              'Üç zaman!',
              'Sabah, öğle, akşam = 3 zaman! 🌅☀️🌙',
              '🌅☀️🌙',
              ['Sabah!', 'Öğle!', 'Akşam!', '3 zaman!']
            )
          ],
          tip: 'Aileninle şarkı söyle! 🎵'
        }
      )
    ],

    // PRATİK SORULAR
    practiceQuestions: [
      createMultipleChoice(
        'Sabah ne olur?',
        ['Güneş doğar', 'Ay çıkar', 'Güneş batar', 'Karanlık olur'],
        'Güneş doğar',
        'Sabah güneş doğar! 🌅',
        '🌅',
        1,
        'Sabah aydınlık olur!'
      ),

      createMultipleChoice(
        'Öğlen güneş nerededir?',
        ['Tepede', 'Doğuda', 'Batıda', 'Yok'],
        'Tepede',
        'Öğlen güneş tepededir! ☀️',
        '☀️',
        1,
        'Güneş yukarıda!'
      ),

      createMultipleChoice(
        'Akşam ne olur?',
        ['Ay çıkar', 'Güneş doğar', 'Güneş tepede', 'Sabah olur'],
        'Ay çıkar',
        'Akşam ay çıkar! 🌙 Karanlık olur!',
        '🌙',
        1,
        'Akşam karanlık!'
      ),

      createFillBlank(
        'Sabah ___ doğar.',
        ['güneş'],
        'Sabah güneş doğar! 🌅',
        '🌅',
        1,
        'Sabah ne doğar?'
      ),

      createMultipleChoice(
        'Günün ilk zamanı nedir?',
        ['Sabah', 'Öğle', 'Akşam', 'Gece'],
        'Sabah',
        'Günün ilk zamanı sabahtır! 🌅',
        '🌅',
        1,
        'İlk zaman sabah!'
      ),

      createMultipleChoice(
        'Öğlen ne yeriz?',
        ['Öğle yemeği', 'Kahvaltı', 'Akşam yemeği', 'Hiçbir şey'],
        'Öğle yemeği',
        'Öğlen öğle yemeği yeriz! 🍽️',
        '🍽️',
        1,
        'Öğle yemeği!'
      ),

      createMultipleChoice(
        'Akşam ne yaparız?',
        ['Uyuruz', 'Kahvaltı yaparız', 'Okula gideriz', 'Uyanırız'],
        'Uyuruz',
        'Akşam uyuruz! 😴 İyi geceler!',
        '😴',
        1,
        'Akşam uyku zamanı!'
      ),

      createFillBlank(
        'Akşam ___ çıkar.',
        ['ay'],
        'Akşam ay çıkar! 🌙',
        '🌙',
        1,
        'Akşam ne çıkar?'
      ),

      createMultipleChoice(
        'Günün zamanları sırayla nasıldır?',
        ['Sabah → Öğle → Akşam', 'Öğle → Sabah → Akşam', 'Akşam → Sabah → Öğle', 'Sabah → Akşam → Öğle'],
        'Sabah → Öğle → Akşam',
        'Sabah → Öğle → Akşam! Hep bu sıra! 🌅☀️🌙',
        '🌅☀️🌙',
        1,
        'Sıra önemli!'
      ),

      createMultipleChoice(
        'Akşamdan sonra ne gelir?',
        ['Sabah', 'Öğle', 'Akşam', 'Hiçbir şey'],
        'Sabah',
        'Akşam → Gece → Sabah! 🌙😴🌅',
        '🔄',
        1,
        'Yeni gün başlar!'
      ),

      createMultipleChoice(
        'Sabah ne yaparız?',
        ['Kahvaltı yaparız', 'Uyuruz', 'Akşam yemeği yeriz', 'Hiçbir şey'],
        'Kahvaltı yaparız',
        'Sabah kahvaltı yaparız! 🥐',
        '🥐',
        1,
        'Sabah kahvaltı!'
      ),

      createFillBlank(
        'Sabah, öğle, akşam = ___ zaman.',
        ['3', 'üç'],
        'Sabah, öğle, akşam = 3 zaman! 🌅☀️🌙',
        '🌅☀️🌙',
        1,
        'Kaç zaman var?'
      ),

      createMultipleChoice(
        'Güneş tepede olunca hangi zamandır?',
        ['Öğle', 'Sabah', 'Akşam', 'Gece'],
        'Öğle',
        'Güneş tepede = Öğle! ☀️',
        '☀️',
        1,
        'Güneş yukarıda!'
      ),

      createMultipleChoice(
        'Hangi zamanda karanlık olur?',
        ['Akşam', 'Sabah', 'Öğle', 'Hiçbiri'],
        'Akşam',
        'Akşam karanlık olur! 🌙',
        '🌙',
        1,
        'Akşam karanlık!'
      ),

      createMultipleChoice(
        'Her gün aynı sıra mı gelir?',
        ['Evet, hep aynı', 'Hayır, karışık', 'Bazen', 'Bilmiyorum'],
        'Evet, hep aynı',
        'Her gün aynı sıra! Sabah → Öğle → Akşam! 🔄',
        '🔄',
        1,
        'Hep aynı sıra!'
      )
    ],

    summary: '🎉 Bugün günü öğrendik!\n\n✅ Sabah güneş doğar 🌅\n✅ Öğlen güneş tepede ☀️\n✅ Akşam ay çıkar 🌙\n✅ Her gün aynı sıra 🔄\n✅ Sabah → Öğle → Akşam\n\nGünü tanıdık! ⏰\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste büyük-küçük-orta öğreneceğiz! 3 Ayı gibi! 🐻'
  }
};
