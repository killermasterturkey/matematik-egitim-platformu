// DESTEK SINIFI - TEMA 6 - KONU 5: PARA İLE TANIŞMA
// Para kavramı - sadece tanıma, hesap yok

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu5ParaTanima: Topic = {
  id: 'para-tanima',
  title: 'Para ile Tanışma',
  description: '1 Lira - Para tanıma!',
  emoji: '💰',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['para', 'lira', 'kuruş', 'alışveriş', 'market'],
  objectives: [
    'Para kavramını tanıyacaksın',
    '1 Lira tanıyacaksın',
    'Paranın ne işe yaradığını bileceksin',
    'Alışveriş kavramını öğreneceksin'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün para öğreneceğiz!\n\n💰 Para = Alışveriş!\n\n1 Lira ile ne alırız?\n\nHazır mısın? Başlayalım! 🛒',

    motivationQuote: 'Para ile güzel şeyler alırız! 💰',

    funFacts: [
      '💰 Para ile alışveriş yaparız!',
      '🍬 Şeker alabiliriz!',
      '🍞 Ekmek alabiliriz!',
      '🧃 Meyve suyu alabiliriz!',
      '🪙 Paralar yuvarlaktır!',
      '💵 Kağıt paralar vardır!',
      '🏦 Banka para saklar!',
      '💳 Kartla da alışveriş yapılır!',
      '🛒 Markette para gerekir!',
      '⭐ Para önemlidir!'
    ],

    tips: [
      '💡 Para ile alışveriş yaparız!',
      '💡 Parayı iyi sakla!',
      '💡 1 Lira tanı!',
      '💡 Küçük şeyler al!'
    ],

    steps: [
      createStep(
        'Para Nedir?',
        '💰 PARA!\n\nPara çok önemli!\n\n┌─────────────────────────────────────┐\n│                                     │\n│         💰 PARA                     │\n│                                     │\n│   Para ile alışveriş yaparız!       │\n│   Yemek alırız 🍞                   │\n│   Oyuncak alırız 🧸                 │\n│   Şeker alırız 🍬                   │\n│                                     │\n│   Para = Alışveriş! 🛒              │\n│                                     │\n└─────────────────────────────────────┘\n\nPara çok işe yarar!\n\nAlışveriş yaparız! 🛒',
        '💰 Para = Alışveriş!',
        'Para tanı!',
        {
          visual: 'PARA:\n\n💰 Para\n🛒 Market\n🍬 Şeker al\n😊 Mutlu ol\n\nPara işe yarar!',
          examples: [
            createExample(
              'Para ne işe yarar?',
              'Alışveriş yaparız!',
              'Para ile alışveriş yaparız! 💰 → 🛒',
              '💰',
              ['Para!', 'Alışveriş!', 'Al!']
            )
          ],
          tip: 'Para ile alışveriş yap! 💰'
        }
      ),

      createStep(
        '1 Lira',
        '💰 1 LİRA!\n\nBir lira!\n\n┌─────────────────────────────────────┐\n│                                     │\n│         💰 1 LİRA                   │\n│                                     │\n│   Yuvarlak madeni para! 🪙          │\n│   Üzerinde 1 yazar!                 │\n│   1 TL = 1 Türk Lirası              │\n│                                     │\n│   Bununla şeker alabilirsin! 🍬     │\n│                                     │\n└─────────────────────────────────────┘\n\n1 Lira tanı!\n\nÜzerinde 1 var! 💰',
        '💰 1 Lira!',
        '1 Lira tanı!',
        {
          visual: '1 LİRA:\n\n🪙 Yuvarlak\n1️⃣ Üzerinde 1\n💰 Para\n🍬 Şeker al\n\n1 TL!',
          examples: [
            createExample(
              '1 Lira nasıl görünür?',
              'Yuvarlak, üzerinde 1!',
              '1 Lira yuvarlaktır! 🪙 Üzerinde 1 yazar!',
              '🪙',
              ['Yuvarlak!', 'Üzerinde 1!', '1 Lira!']
            )
          ],
          tip: '1 Lira bul ve tanı! 💰'
        }
      ),

      createStep(
        '1 Lira ile Ne Alabilirim?',
        '🛒 ALIŞVERİŞ!\n\n1 Lira ile ne alalım?\n\n┌─────────────────────────────────────┐\n│                                     │\n│   1 LİRA İLE:                       │\n│                                     │\n│   ✅ 1 Şeker alabiliriz 🍬          │\n│   ✅ 1 Sakız alabiliriz 🍬          │\n│   ✅ 1 Küçük ekmek alabiliriz 🥖   │\n│                                     │\n│   ❌ Araba alamayız 🚗              │\n│   ❌ Ev alamayız 🏠                 │\n│   ❌ Telefon alamayız 📱            │\n│                                     │\n└─────────────────────────────────────┘\n\n1 Lira ile küçük şeyler!\n\nŞeker gibi! 🍬',
        '1 TL = Küçük şeyler!',
        'Ne alırsın?',
        {
          visual: '1 LİRA İLE:\n\n✅ Alırız:\n🍬🍬🥖\n\n❌ Alamayız:\n🚗🏠📱\n\nKüçük şeyler!',
          examples: [
            createExample(
              '1 Lira ile şeker alabilir miyiz?',
              'Evet!',
              '1 Lira ile şeker alabiliriz! 💰 → 🍬',
              '🍬',
              ['Şeker!', 'Alabiliriz!', 'Evet!']
            )
          ],
          tip: '1 Lira ile şeker al! 🍬'
        }
      ),

      createStep(
        'Markette Alışveriş',
        '🛒 MARKETE GİDELİM!\n\nAlışveriş yapalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   MARKET:                           │\n│                                     │\n│   1️⃣ Markete git 🛒                │\n│   2️⃣ Şeker seç 🍬                  │\n│   3️⃣ Kasaya git 💳                 │\n│   4️⃣ Para ver 💰                   │\n│   5️⃣ Şekeri al 🍬                  │\n│   6️⃣ Mutlu ol! 😊                  │\n│                                     │\n└─────────────────────────────────────┘\n\nAlışveriş çok eğlenceli!\n\nPara ver, al! 🛒',
        '🛒 Market!',
        'Alışveriş yap!',
        {
          visual: 'ALIŞVERİŞ:\n\n1️⃣ Git 🛒\n2️⃣ Seç 🍬\n3️⃣ Kasaya git 💳\n4️⃣ Ver 💰\n5️⃣ Al 🍬\n6️⃣ Mutlu! 😊',
          examples: [
            createExample(
              'Markette ne yaparız?',
              'Alışveriş!',
              'Markette alışveriş yaparız! 🛒 Para verir, alırız!',
              '🛒',
              ['Market!', 'Alışveriş!', 'Para ver!', 'Al!']
            )
          ],
          tip: 'Aileninle markete git! 🛒'
        }
      ),

      createStep(
        'Parayı Sakla',
        '🏦 PARAYI SAKLA!\n\nPara değerli!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   PARAYI NASIL SAKLARIZ?            │\n│                                     │\n│   💰 Kumbarada sakla                │\n│   👛 Cüzdanda sakla                 │\n│   🏦 Bankada sakla                  │\n│                                     │\n│   ❌ Yere atma!                     │\n│   ❌ Kaybet! Bul!                   │\n│   ❌ Islatma!                       │\n│                                     │\n│   Para değerli! Koru! 💰            │\n│                                     │\n└─────────────────────────────────────┘\n\nPara önemli!\n\nİyi sakla! 🏦',
        '💰 Sakla!',
        'Parayı koru!',
        {
          visual: 'SAKLA:\n\n✅ Doğru:\n💰👛🏦\n\n❌ Yanlış:\nYere at\nKaybet\nIslatma\n\nKoru! 💰',
          examples: [
            createExample(
              'Parayı nerede saklarız?',
              'Kumbarada!',
              'Parayı kumbarada saklarız! 💰',
              '💰',
              ['Kumbara!', 'Cüzdan!', 'Banka!', 'Sakla!']
            )
          ],
          tip: 'Kumbaranda sakla! 💰'
        }
      ),

      createStep(
        'Para Oyunu',
        '🎮 PARA OYUNU!\n\nOyun oynayalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   GÖREV:                            │\n│                                     │\n│   1 Liran var! 💰                   │\n│   Ne alırsın?                       │\n│                                     │\n│   A) 🍬 Şeker (1 TL)                │\n│   B) 🚗 Araba (Çok pahalı!)         │\n│   C) 🏠 Ev (Çok çok pahalı!)        │\n│                                     │\n│   Doğru cevap: A) Şeker! 🍬         │\n│                                     │\n└─────────────────────────────────────┘\n\nOyunu oyna!\n\nDoğru seç! 🎮',
        '🎮 Oyun!',
        'Ne alırsın?',
        {
          visual: 'OYUN:\n\n💰 1 Lira\n\nNe alırsın?\n🍬 Şeker ✅\n🚗 Araba ❌\n🏠 Ev ❌\n\nSeç! 🎮',
          examples: [
            createExample(
              '1 Lira ile araba alabilir miyiz?',
              'Hayır!',
              '1 Lira ile araba alamayız! 🚗 Çok pahalı!',
              '🚗',
              ['Alamayız!', 'Pahalı!', 'Hayır!']
            )
          ],
          tip: 'Her gün oyun oyna! 🎮'
        }
      ),

      createStep(
        'Teşekkür Ederim',
        '😊 TEŞEKKÜR EDERİM!\n\nAlışverişte nezaket!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ALIŞVERİŞTE:                      │\n│                                     │\n│   👋 "Merhaba" de                   │\n│   💰 Para ver                       │\n│   😊 "Teşekkür ederim" de           │\n│   👋 "Güle güle" de                 │\n│                                     │\n│   Kibar ol! 😊                      │\n│   Nazik ol! 💝                      │\n│                                     │\n└─────────────────────────────────────┘\n\nNezaket önemli!\n\nKibar ol! 😊',
        '😊 Kibar ol!',
        'Teşekkür et!',
        {
          visual: 'NEZAKETİ:\n\n👋 Merhaba\n💰 Para ver\n😊 Teşekkürler\n👋 Güle güle\n\nKibar! 😊',
          examples: [
            createExample(
              'Alışverişte ne deriz?',
              'Teşekkür ederim!',
              'Alışverişte "Teşekkür ederim" deriz! 😊',
              '😊',
              ['Teşekkürler!', 'Kibar!', 'Nezaket!']
            )
          ],
          tip: 'Her zaman teşekkür et! 😊'
        }
      ),

      createStep(
        'Para Şarkısı',
        '🎵 PARA ŞARKISI! 🎵\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Bir lira bende var                │\n│   Markete gideceğim! 🛒             │\n│                                     │\n│   Şeker alacağım                    │\n│   Çok mutlu olacağım! 🍬            │\n│                                     │\n│   Para ver, al, ye                  │\n│   Teşekkür et, gül! 😊              │\n│                                     │\n│   Para güzel, para özel             │\n│   İyi sakla hep! 💰                 │\n│                                     │\n└─────────────────────────────────────┘\n\n🎵 Şarkı söyle! 🎵\n\nPara öğrendik! 🎪',
        '🎵 Şarkı!',
        'Söyle!',
        {
          visual: 'ŞARKI:\n\n💰 Para\n🛒 Market\n🍬 Şeker\n😊 Mutlu\n\n🎵 Söyle!\n🎪 Eğlen!',
          examples: [
            createExample(
              'Para ile ne yapıyoruz?',
              'Alışveriş!',
              'Para ile alışveriş yapıyoruz! 💰 → 🛒',
              '💰',
              ['Alışveriş!', 'Al!', 'Mutlu ol!']
            )
          ],
          tip: 'Aileninle söyle! 🎵'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Para ne işe yarar?',
        ['Alışveriş yapmaya', 'Oynamaya', 'Yemeye', 'Uyumaya'],
        'Alışveriş yapmaya',
        'Para ile alışveriş yaparız! 💰 → 🛒',
        '💰',
        1,
        'Para alışveriş için!'
      ),

      createMultipleChoice(
        '1 Lira nasıl görünür?',
        ['Yuvarlak, üzerinde 1', 'Kare', 'Üçgen', 'Uzun'],
        'Yuvarlak, üzerinde 1',
        '1 Lira yuvarlaktır! 🪙 Üzerinde 1 yazar!',
        '🪙',
        1,
        'Yuvarlak ve 1!'
      ),

      createMultipleChoice(
        '1 Lira ile ne alabiliriz?',
        ['Şeker', 'Araba', 'Ev', 'Telefon'],
        'Şeker',
        '1 Lira ile şeker alabiliriz! 💰 → 🍬',
        '🍬',
        1,
        'Şeker alabiliriz!'
      ),

      createFillBlank(
        '1 Lira = 1 ___ Lirası.',
        ['Türk'],
        '1 Lira = 1 Türk Lirası! 💰',
        '💰',
        1,
        'Hangi para?'
      ),

      createMultipleChoice(
        'Parayı nerede saklarız?',
        ['Kumbarada', 'Yerde', 'Çöpte', 'Suda'],
        'Kumbarada',
        'Parayı kumbarada saklarız! 💰',
        '💰',
        1,
        'Kumbara!'
      ),

      createMultipleChoice(
        'Markette ne yaparız?',
        ['Alışveriş', 'Uyuruz', 'Koşarız', 'Hiçbir şey'],
        'Alışveriş',
        'Markette alışveriş yaparız! 🛒',
        '🛒',
        1,
        'Alışveriş yaparız!'
      ),

      createMultipleChoice(
        '1 Lira ile araba alabilir miyiz?',
        ['Hayır', 'Evet', 'Belki', 'Bilmiyorum'],
        'Hayır',
        '1 Lira ile araba alamayız! 🚗 Çok pahalı!',
        '🚗',
        1,
        'Araba pahalı!'
      ),

      createFillBlank(
        'Alışverişte ___ deriz.',
        ['teşekkür ederim', 'teşekkürler'],
        'Alışverişte "Teşekkür ederim" deriz! 😊',
        '😊',
        1,
        'Ne deriz?'
      ),

      createMultipleChoice(
        'Para değerli midir?',
        ['Evet', 'Hayır', 'Bilmiyorum', 'Belki'],
        'Evet',
        'Para değerlidir! 💰 İyi saklamalıyız!',
        '💰',
        1,
        'Para değerli!'
      ),

      createMultipleChoice(
        'Para ile şeker aldık. Ne demeliyiz?',
        ['Teşekkür ederim', 'Hiçbir şey', 'Bağır', 'Koş'],
        'Teşekkür ederim',
        'Teşekkür ederim demeliyiz! 😊',
        '😊',
        1,
        'Teşekkür et!'
      ),

      createMultipleChoice(
        'Paraları kim basar?',
        ['Devlet / Banka', 'Biz', 'Kimse', 'Bilmiyorum'],
        'Devlet / Banka',
        'Paraları devlet basar! 🏦',
        '🏦',
        1,
        'Devlet basar!'
      ),

      createFillBlank(
        'Markete gidip alışveriş yapmak için ___ gerekir.',
        ['para'],
        'Alışveriş için para gerekir! 💰',
        '💰',
        1,
        'Ne gerekir?'
      ),

      createMultipleChoice(
        'Kumbarada ne saklarız?',
        ['Para', 'Oyuncak', 'Yemek', 'Su'],
        'Para',
        'Kumbarada para saklarız! 💰',
        '💰',
        1,
        'Para saklarız!'
      ),

      createMultipleChoice(
        '1 Lira kaç kuruştur?',
        ['100 kuruş', '10 kuruş', '50 kuruş', '1 kuruş'],
        '100 kuruş',
        '1 Lira = 100 kuruş! 💰',
        '💰',
        1,
        '100 kuruş!'
      ),

      createMultipleChoice(
        'Alışverişte kibar olmalı mıyız?',
        ['Evet', 'Hayır', 'Belki', 'Bilmiyorum'],
        'Evet',
        'Evet! Her zaman kibar olmalıyız! 😊',
        '😊',
        1,
        'Kibar ol!'
      )
    ],

    summary: '🎉 Bugün para öğrendik!\n\n✅ Para = Alışveriş 💰\n✅ 1 Lira tanıdık 🪙\n✅ 1 Lira ile şeker alırız 🍬\n✅ Markette alışveriş yapılır 🛒\n✅ Parayı iyi saklarız 💰\n✅ Teşekkür ederiz 😊\n\nPara öğrendik! 💰\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste haftanın günlerini öğreneceğiz! Pazartesi, Salı... 📅'
  }
};
