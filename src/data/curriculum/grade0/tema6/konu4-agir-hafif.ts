// DESTEK SINIFI - TEMA 6 - KONU 4: AĞIR - HAFİF
// Ağırlık karşılaştırması

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu4AgirHafif: Topic = {
  id: 'agir-hafif',
  title: 'Ağır - Hafif',
  description: 'Fil ağır, tüy hafif!',
  emoji: '🐘',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['ağır', 'hafif', 'ağırlık', 'tartı', 'fil', 'tüy'],
  objectives: [
    'Ağır - hafif kavramlarını anlayacaksın',
    'Nesneleri ağırlığa göre karşılaştıracaksın',
    'Ağır ve hafif nesneler bulacaksın',
    'Tartı kavramını öğreneceksin'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün ağırlıkları öğreneceğiz!\n\n🐘 Ağır, 🪶 Hafif\n\nFil gibi ağır!\n\nHazır mısın? Başlayalım! ⚖️',

    motivationQuote: 'Her ağırlık özeldir! 🐘',

    funFacts: [
      '🐘 Fil çok ağırdır!',
      '🪶 Tüy çok hafiftir!',
      '⚖️ Terazi ağırlık ölçer!',
      '🏋️ Ağır şeyleri kaldırmak zor!',
      '🎈 Balon hafiftir, uçar!',
      '🪨 Taş ağırdır!',
      '🍃 Yaprak hafiftir!',
      '📚 Kitap yığını ağırdır!',
      '📄 Kağıt hafiftir!',
      '⭐ Her ağırlık farklıdır!'
    ],

    tips: [
      '💡 Ağır = Zor kaldırılır!',
      '💡 Hafif = Kolay kaldırılır!',
      '💡 Fili hatırla!',
      '💡 Taşımayı dene!'
    ],

    steps: [
      createStep(
        'Ağır Nedir?',
        '🐘 AĞIR!\n\nFil çok ağır!\n\nKaldıramayız! 🐘\n\n┌─────────────────────────────────────┐\n│                                     │\n│         🐘 FİL                      │\n│                                     │\n│   Çok ağır hayvan!                  │\n│   Kaldıramayız!                     │\n│   Çok güçlü olmalı!                 │\n│   En ağır hayvan! 🐘                │\n│                                     │\n└─────────────────────────────────────┘\n\nAğır = Zor kaldırılır!\n\nFil gibi! 🐘',
        '🐘 Ağır!',
        'Ağır nesneleri bul!',
        {
          visual: 'AĞIR:\n\n🐘 Fil\n🪨 Taş\n🚗 Araba\n📚 Kitap yığını\n🏠 Ev\n\nHepsi ağır!',
          examples: [
            createExample(
              'Fil nasıldır?',
              'Ağırdır!',
              'Fil çok ağırdır! 🐘 Kaldıramayız!',
              '🐘',
              ['Fil ağır!', 'Çok ağır!', 'Kaldıramayız!']
            )
          ],
          tip: 'Ağır şeyi kaldırmaya çalış - zor! 🐘'
        }
      ),

      createStep(
        'Hafif Nedir?',
        '🪶 HAFİF!\n\nTüy çok hafif!\n\nKolay kaldırırız! 🪶\n\n┌─────────────────────────────────────┐\n│                                     │\n│         🪶 TÜY                      │\n│                                     │\n│   Çok hafif!                        │\n│   Kolay kaldırırız!                 │\n│   Rüzgar bile uçurur!               │\n│   Çok hafif! 🪶                     │\n│                                     │\n└─────────────────────────────────────┘\n\nHafif = Kolay kaldırılır!\n\nTüy gibi! 🪶',
        '🪶 Hafif!',
        'Hafif nesneleri bul!',
        {
          visual: 'HAFİF:\n\n🪶 Tüy\n🍃 Yaprak\n📄 Kağıt\n🎈 Balon\n☁️ Bulut\n\nHepsi hafif!',
          examples: [
            createExample(
              'Tüy nasıldır?',
              'Hafiftir!',
              'Tüy çok hafiftir! 🪶 Kolay kaldırırız!',
              '🪶',
              ['Tüy hafif!', 'Çok hafif!', 'Uçar!']
            )
          ],
          tip: 'Hafif şeyi kaldır - kolay! 🪶'
        }
      ),

      createStep(
        'Fil ve Tüy',
        '🐘🪶 FİL VE TÜY!\n\nKarşılaştıralım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   🐘 Fil (ÇOK AĞIR!)                │\n│   💪💪💪 Kaldıramayız!              │\n│                                     │\n│   🪶 Tüy (ÇOK HAFİF!)               │\n│   👌 Kolayca kaldırırız!            │\n│                                     │\n│   Fil > Tüy                         │\n│   (Ağır) (Hafif)                    │\n│                                     │\n└─────────────────────────────────────┘\n\nBüyük fark var!\n\nFil çok ağır! 🐘',
        '🐘 >> 🪶',
        'Karşılaştır!',
        {
          visual: 'KARŞILAŞTIR:\n\n🐘 Ağır\n│\n│ (ÇOK FARK)\n│\n🪶 Hafif\n\n🐘 >> 🪶',
          examples: [
            createExample(
              'Fil mi ağır, tüy mü?',
              'Fil!',
              'Fil çok ağırdır! 🐘 >> 🪶 Tüy hafiftir!',
              '🐘 >> 🪶',
              ['Fil ağır!', 'Tüy hafif!', 'Fil >> Tüy!']
            )
          ],
          tip: 'Fili tüyle karşılaştır! 🐘🪶'
        }
      ),

      createStep(
        'Terazi - Ağırlık Ölçer',
        '⚖️ TERAZİ!\n\nAğırlık ölçer!\n\n┌─────────────────────────────────────┐\n│                                     │\n│         ⚖️ TERAZİ                   │\n│                                     │\n│   Ağır taraf aşağı iner! ⬇️         │\n│   Hafif taraf yukarı çıkar! ⬆️      │\n│                                     │\n│     🪨              🪶               │\n│      ⬇️              ⬆️             │\n│   (Ağır iner)  (Hafif çıkar)        │\n│                                     │\n└─────────────────────────────────────┘\n\nTerazi gösterir!\n\nAğırlık ölçer! ⚖️',
        '⚖️ Terazi!',
        'Terazi kullan!',
        {
          visual: 'TERAZİ:\n\n  🪨   🪶\n   ⬇️   ⬆️\n  ═════════\n\nAğır ⬇️\nHafif ⬆️\n\nÖlç! ⚖️',
          examples: [
            createExample(
              'Terazide ağır taraf ne yapar?',
              'Aşağı iner!',
              'Ağır taraf aşağı iner! ⬇️ Hafif taraf yukarı çıkar! ⬆️',
              '⚖️',
              ['Ağır iner!', 'Hafif çıkar!', 'Terazi ölçer!']
            )
          ],
          tip: 'Terazi ile ölç! ⚖️'
        }
      ),

      createStep(
        'Günlük Hayatta Ağır-Hafif',
        '🔍 AĞIR-HAFİF AVI!\n\nEtrafına bak!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   AĞIR:                             │\n│   🪑 Sandalye                       │\n│   📚 Kitap yığını                   │\n│   🎒 Dolu çanta                     │\n│   🪨 Taş                            │\n│                                     │\n│   HAFİF:                            │\n│   📄 Kağıt                          │\n│   🍃 Yaprak                         │\n│   🪶 Tüy                            │\n│   🎈 Balon                          │\n│                                     │\n└─────────────────────────────────────┘\n\nHer yerde ağır-hafif var!\n\nBul! 🔍',
        '🔍 Bul!',
        'Etrafına bak!',
        {
          visual: 'EVDE:\n\nAğır:\n🪑📚🎒🪨\n\nHafif:\n📄🍃🪶🎈\n\nKarşılaştır!',
          examples: [
            createExample(
              'Kitap yığını mı ağır, kağıt mı?',
              'Kitap yığını!',
              'Kitap yığını ağırdır! 📚 >> 📄 Kağıt hafiftir!',
              '📚 >> 📄',
              ['Kitaplar ağır!', 'Kağıt hafif!', 'Kitaplar >> Kağıt!']
            )
          ],
          tip: 'Her gün ağır-hafif bul! 🔍'
        }
      ),

      createStep(
        'Taşıma Oyunu',
        '🎮 TAŞIMA OYUNU!\n\nHangisini taşıyabilirsin?\n\n┌─────────────────────────────────────┐\n│                                     │\n│   ✅ TAŞIYABİLİRİM:                 │\n│   📄 Kağıt                          │\n│   🍎 Elma                           │\n│   📱 Telefon                        │\n│   ✏️ Kalem                          │\n│                                     │\n│   ❌ TAŞIYAMAYABİLİRİM:             │\n│   🚗 Araba                          │\n│   🏠 Ev                             │\n│   🌳 Ağaç                           │\n│   🐘 Fil                            │\n│                                     │\n└─────────────────────────────────────┘\n\nHafif olanı taşırız!\n\nAğır olanı taşıyamayız! 💪',
        '🎮 Oyun!',
        'Taşımayı dene!',
        {
          visual: 'TAŞIMA:\n\n✅ Kolay:\n📄✏️🍎📱\n\n❌ Zor:\n🚗🏠🌳🐘\n\nDene! 💪',
          examples: [
            createExample(
              'Telefonu taşıyabilir miyiz?',
              'Evet!',
              'Telefon hafiftir! 📱 Taşıyabiliriz! ✅',
              '📱',
              ['Telefon hafif!', 'Taşıyabiliriz!', 'Kolay!']
            )
          ],
          tip: 'Taşımayı dene! 💪'
        }
      ),

      createStep(
        'Ağırlık Şarkısı',
        '🎵 AĞIRLIK ŞARKISI! 🎵\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Fil ağır çok ağır                 │\n│   Kaldıramam ben! 🐘                │\n│                                     │\n│   Tüy hafif çok hafif               │\n│   Kolay taşırım! 🪶                 │\n│                                     │\n│   Ağır mı hafif mi?                 │\n│   Terazide gör! ⚖️                  │\n│                                     │\n│   Hepsi güzel, hepsi özel           │\n│   Ağır da hafif de! 🎵              │\n│                                     │\n└─────────────────────────────────────┘\n\n🎵 Şarkı söyle! 🎵\n\nAğırlık öğrendik! 🎪',
        '🎵 Şarkı!',
        'Söyle!',
        {
          visual: 'ŞARKI:\n\n🐘 Ağır\n🪶 Hafif\n⚖️ Terazi\n\n🎵 Söyle!\n🎪 Eğlen!',
          examples: [
            createExample(
              'Şarkıda hangi hayvan var?',
              'Fil!',
              'Fil var! 🐘 Çok ağırdır!',
              '🐘',
              ['Fil!', 'Ağır!', 'Çok güçlü!']
            )
          ],
          tip: 'Aileninle söyle! 🎵'
        }
      ),

      createStep(
        'Ağırlık Tahmin Oyunu',
        '🎯 TAHMİN OYUNU!\n\nOyun oynayalım!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   GÖREV:                            │\n│   Hangisi daha ağır?                │\n│                                     │\n│   1️⃣ 🍎 Elma mı, 📄 Kağıt mı?      │\n│   Cevap: Elma! 🍎                   │\n│                                     │\n│   2️⃣ 📱 Telefon mu, 🪶 Tüy mü?     │\n│   Cevap: Telefon! 📱                │\n│                                     │\n│   3️⃣ 🪑 Sandalye mi, ✏️ Kalem mi?  │\n│   Cevap: Sandalye! 🪑               │\n│                                     │\n└─────────────────────────────────────┘\n\nTahmin et!\n\nDoğru mu? 🎯',
        '🎯 Tahmin!',
        'Hangisi ağır?',
        {
          visual: 'TAHMİN:\n\n🍎 > 📄\n📱 > 🪶\n🪑 > ✏️\n\nDoğru mu?\nKontrol et! 🎯',
          examples: [
            createExample(
              'Elma mı ağır, kağıt mı?',
              'Elma!',
              'Elma ağırdır! 🍎 > 📄 Kağıt hafiftir!',
              '🍎',
              ['Elma ağır!', 'Kağıt hafif!', 'Elma > Kağıt!']
            )
          ],
          tip: 'Her gün tahmin et! 🎯'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Fil nasıldır?',
        ['Ağırdır', 'Hafiftir', 'Ortadır', 'Bilmiyorum'],
        'Ağırdır',
        'Fil çok ağırdır! 🐘',
        '🐘',
        1,
        'Fil ağır!'
      ),

      createMultipleChoice(
        'Tüy nasıldır?',
        ['Hafiftir', 'Ağırdır', 'Ortadır', 'Bilmiyorum'],
        'Hafiftir',
        'Tüy çok hafiftir! 🪶',
        '🪶',
        1,
        'Tüy hafif!'
      ),

      createMultipleChoice(
        'Hangisi daha ağır? 🐘 Fil mi 🪶 Tüy mü?',
        ['Fil', 'Tüy', 'Eşit', 'Bilmiyorum'],
        'Fil',
        'Fil çok ağırdır! 🐘 >> 🪶',
        '🐘',
        1,
        'Fil ağır!'
      ),

      createFillBlank(
        'Fil ___, tüy ___.',
        ['ağır hafif'],
        'Fil ağır, tüy hafif! 🐘🪶',
        '🐘🪶',
        1,
        'Nasıllar?'
      ),

      createMultipleChoice(
        'Ağırlık neyle ölçülür?',
        ['Terazi', 'Cetvel', 'Saat', 'Kalem'],
        'Terazi',
        'Ağırlık terazi ile ölçülür! ⚖️',
        '⚖️',
        1,
        'Terazi ölçer!'
      ),

      createMultipleChoice(
        'Terazide ağır taraf ne yapar?',
        ['Aşağı iner', 'Yukarı çıkar', 'Durur', 'Bilmiyorum'],
        'Aşağı iner',
        'Ağır taraf aşağı iner! ⬇️',
        '⚖️',
        1,
        'Ağır iner!'
      ),

      createMultipleChoice(
        'Terazide hafif taraf ne yapar?',
        ['Yukarı çıkar', 'Aşağı iner', 'Durur', 'Bilmiyorum'],
        'Yukarı çıkar',
        'Hafif taraf yukarı çıkar! ⬆️',
        '⚖️',
        1,
        'Hafif çıkar!'
      ),

      createFillBlank(
        'Ağır = Zor ___, Hafif = Kolay ___.',
        ['kaldırılır kaldırılır'],
        'Ağır = Zor kaldırılır, Hafif = Kolay kaldırılır!',
        '🐘🪶',
        1,
        'Nasıl kaldırılır?'
      ),

      createMultipleChoice(
        'Hangisi ağır? 🪨 Taş mı 🍃 Yaprak mı?',
        ['Taş', 'Yaprak', 'Eşit', 'Bilmiyorum'],
        'Taş',
        'Taş ağırdır! 🪨 > 🍃',
        '🪨',
        1,
        'Taş ağır!'
      ),

      createMultipleChoice(
        'Hangisi hafif? 📚 Kitap yığını mı 📄 Kağıt mı?',
        ['Kağıt', 'Kitap yığını', 'Eşit', 'Bilmiyorum'],
        'Kağıt',
        'Kağıt hafiftir! 📄 << 📚',
        '📄',
        1,
        'Kağıt hafif!'
      ),

      createMultipleChoice(
        'Balon neden uçar?',
        ['Hafif olduğu için', 'Ağır olduğu için', 'Bilmiyorum', 'Uçmaz'],
        'Hafif olduğu için',
        'Balon hafif olduğu için uçar! 🎈',
        '🎈',
        1,
        'Hafif uçar!'
      ),

      createFillBlank(
        'Ağır şeyleri kaldırmak ___.',
        ['zor', 'zordur'],
        'Ağır şeyleri kaldırmak zordur! 🐘',
        '🐘',
        1,
        'Nasıl kaldırılır?'
      ),

      createMultipleChoice(
        'Hangisi en ağır?',
        ['🐘 Fil', '🐭 Fare', '🐶 Köpek', '🪶 Tüy'],
        '🐘 Fil',
        'Fil en ağırdır! 🐘',
        '🐘',
        1,
        'Fil en ağır!'
      ),

      createMultipleChoice(
        'Hangisi en hafif?',
        ['🪶 Tüy', '🐘 Fil', '🪨 Taş', '📚 Kitap'],
        '🪶 Tüy',
        'Tüy en hafiftir! 🪶',
        '🪶',
        1,
        'Tüy en hafif!'
      ),

      createMultipleChoice(
        'Telefonu taşıyabilir miyiz?',
        ['Evet, hafif', 'Hayır, ağır', 'Bilmiyorum', 'Belki'],
        'Evet, hafif',
        'Telefon hafiftir! 📱 Taşıyabiliriz!',
        '📱',
        1,
        'Telefon hafif!'
      )
    ],

    summary: '🎉 Bugün ağırlıkları öğrendik!\n\n✅ Ağır = Zor kaldırılır 🐘\n✅ Hafif = Kolay kaldırılır 🪶\n✅ Fil ağır\n✅ Tüy hafif\n✅ Terazi ölçer ⚖️\n\nAğır-hafif biliyoruz! 🔍\n\nAferin sana! 💝',

    nextTopicPreview: 'Bir sonraki derste para ile tanışacağız! 1 Lira! 💰'
  }
};
