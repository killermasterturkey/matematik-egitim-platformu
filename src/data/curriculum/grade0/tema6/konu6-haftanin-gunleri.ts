// DESTEK SINIFI - TEMA 6 - KONU 6: HAFTANIN GÜNLERİ
// Pazartesi'den Pazar'a - Günleri tanıma

import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu6HaftaninGunleri: Topic = {
  id: 'haftanin-gunleri',
  title: 'Haftanın Günleri',
  description: 'Pazartesi, Salı, Çarşamba... Haftayı öğren!',
  emoji: '📅',
  duration: '60 dk',
  difficulty: 1,
  keywords: ['hafta', 'gün', 'pazartesi', 'salı', 'çarşamba', 'perşembe', 'cuma', 'cumartesi', 'pazar'],
  objectives: [
    'Haftanın 7 gününü öğreneceksin',
    'Günleri sırayla sayacaksın',
    'Bugün hangi gün olduğunu bileceksin',
    'Hafta sonu ve hafta içi kavramlarını öğreneceksin'
  ],

  content: {
    introduction: '🎉 Merhaba!\n\nBugün haftayı öğreneceğiz!\n\n📅 7 gün = 1 hafta\n\nPazartesi\'den Pazar\'a!\n\nHazır mısın? Başlayalım! 📆',

    motivationQuote: 'Her gün özel! Her hafta yeni! 📅',

    funFacts: [
      '📅 Haftada 7 gün var!',
      '🎒 5 gün okula gideriz!',
      '🏠 2 gün tatil yaparız!',
      '📆 Pazartesi hafta başı!',
      '🎉 Pazar hafta sonu!',
      '⏰ Her gün 24 saat!',
      '🌍 Tüm dünya aynı günleri kullanır!',
      '📝 Takvimlerde günler vardır!',
      '🎊 Hafta sonunda dinleniriz!',
      '⭐ Her gün yeni bir fırsat!'
    ],

    tips: [
      '💡 7 gün = 1 hafta!',
      '💡 Günleri sırayla say!',
      '💡 Bugün hangi gün?',
      '💡 Şarkı söyle!'
    ],

    steps: [
      createStep(
        'Hafta Nedir?',
        '📅 HAFTA!\n\nHafta çok özel!\n\n┌─────────────────────────────────────┐\n│                                     │\n│         📅 HAFTA                    │\n│                                     │\n│   Haftada 7 gün var!                │\n│                                     │\n│   1️⃣ Pazartesi                     │\n│   2️⃣ Salı                          │\n│   3️⃣ Çarşamba                      │\n│   4️⃣ Perşembe                      │\n│   5️⃣ Cuma                          │\n│   6️⃣ Cumartesi                     │\n│   7️⃣ Pazar                         │\n│                                     │\n│   7 gün = 1 hafta! 📆               │\n│                                     │\n└─────────────────────────────────────┘\n\nHafta 7 gün!\n\nHer gün özel! 🌟',
        '📅 = 7 gün!',
        'Haftayı tanı!',
        {
          visual: 'HAFTA:\n\n1️⃣ Pazartesi\n2️⃣ Salı\n3️⃣ Çarşamba\n4️⃣ Perşembe\n5️⃣ Cuma\n6️⃣ Cumartesi\n7️⃣ Pazar\n\n7 gün!',
          examples: [
            createExample(
              'Haftada kaç gün var?',
              '7 gün!',
              'Haftada 7 gün vardır! 📅',
              '📅',
              ['7 gün!', 'Bir hafta!', '7!']
            )
          ],
          tip: 'Haftayı öğren! 📅'
        }
      ),

      createStep(
        'Pazartesi - 1. Gün',
        '1️⃣ PAZARTESİ!\n\nHafta başlıyor!\n\n┌─────────────────────────────────────┐\n│                                     │\n│       1️⃣ PAZARTESİ                 │\n│                                     │\n│   Hafta başladı! 🎒                 │\n│   Okul başladı! 📚                  │\n│   Yeni hafta! 🌟                    │\n│                                     │\n│   "Günaydın Pazartesi!" ☀️          │\n│                                     │\n└─────────────────────────────────────┘\n\nPazartesi ilk gün!\n\nHafta başı! 🎒',
        '1️⃣ Pazartesi!',
        'İlk gün!',
        {
          visual: 'PAZARTESİ:\n\n1️⃣ İlk gün\n🎒 Okul\n📚 Ders\n☀️ Başla\n\nHafta başı!',
          examples: [
            createExample(
              'Haftanın ilk günü hangisidir?',
              'Pazartesi!',
              'Haftanın ilk günü Pazartesi\'dir! 1️⃣',
              '1️⃣',
              ['Pazartesi!', 'İlk gün!', '1. gün!']
            )
          ],
          tip: 'Pazartesi hafta başı! 1️⃣'
        }
      ),

      createStep(
        'Salı - 2. Gün',
        '2️⃣ SALI!\n\nİkinci gün!\n\n┌─────────────────────────────────────┐\n│                                     │\n│       2️⃣ SALI                      │\n│                                     │\n│   İkinci gün! 📅                    │\n│   Pazartesiden sonra! ➡️            │\n│   Çarşambadan önce! ⬅️              │\n│                                     │\n│   "Merhaba Salı!" 👋                │\n│                                     │\n└─────────────────────────────────────┘\n\nSalı ikinci gün!\n\nDevam ediyoruz! 📚',
        '2️⃣ Salı!',
        'İkinci gün!',
        {
          visual: 'SALI:\n\n2️⃣ İkinci gün\n📅 Hafta içi\n📚 Ders\n👋 Merhaba\n\n2. gün!',
          examples: [
            createExample(
              'Pazartesiden sonra hangi gün gelir?',
              'Salı!',
              'Pazartesiden sonra Salı gelir! 1️⃣ → 2️⃣',
              '2️⃣',
              ['Salı!', '2. gün!', 'İkinci!']
            )
          ],
          tip: 'Salı 2. gün! 2️⃣'
        }
      ),

      createStep(
        'Çarşamba - 3. Gün',
        '3️⃣ ÇARŞAMBA!\n\nÜçüncü gün!\n\n┌─────────────────────────────────────┐\n│                                     │\n│       3️⃣ ÇARŞAMBA                  │\n│                                     │\n│   Üçüncü gün! 📅                    │\n│   Haftanın ortası! 🌟               │\n│   Salıdan sonra! ➡️                 │\n│                                     │\n│   "Güzel Çarşamba!" 😊              │\n│                                     │\n└─────────────────────────────────────┘\n\nÇarşamba ortada!\n\nYarı yol! 🎒',
        '3️⃣ Çarşamba!',
        'Üçüncü gün!',
        {
          visual: 'ÇARŞAMBA:\n\n3️⃣ Üçüncü gün\n🌟 Orta\n📚 Ders\n😊 Güzel\n\n3. gün!',
          examples: [
            createExample(
              'Salıdan sonra hangi gün gelir?',
              'Çarşamba!',
              'Salıdan sonra Çarşamba gelir! 2️⃣ → 3️⃣',
              '3️⃣',
              ['Çarşamba!', '3. gün!', 'Üçüncü!']
            )
          ],
          tip: 'Çarşamba 3. gün! 3️⃣'
        }
      ),

      createStep(
        'Perşembe - 4. Gün',
        '4️⃣ PERŞEMBE!\n\nDördüncü gün!\n\n┌─────────────────────────────────────┐\n│                                     │\n│       4️⃣ PERŞEMBE                  │\n│                                     │\n│   Dördüncü gün! 📅                  │\n│   Çarşambadan sonra! ➡️             │\n│   Cumaya yakın! 🎉                  │\n│                                     │\n│   "Harika Perşembe!" ⭐             │\n│                                     │\n└─────────────────────────────────────┘\n\nPerşembe güzel!\n\nCumaya yakın! 🌟',
        '4️⃣ Perşembe!',
        'Dördüncü gün!',
        {
          visual: 'PERŞEMBE:\n\n4️⃣ Dördüncü gün\n📅 Hafta içi\n🎉 Yakın\n⭐ Harika\n\n4. gün!',
          examples: [
            createExample(
              'Çarşambadan sonra hangi gün gelir?',
              'Perşembe!',
              'Çarşambadan sonra Perşembe gelir! 3️⃣ → 4️⃣',
              '4️⃣',
              ['Perşembe!', '4. gün!', 'Dördüncü!']
            )
          ],
          tip: 'Perşembe 4. gün! 4️⃣'
        }
      ),

      createStep(
        'Cuma - 5. Gün',
        '5️⃣ CUMA!\n\nBeşinci gün!\n\n┌─────────────────────────────────────┐\n│                                     │\n│       5️⃣ CUMA                      │\n│                                     │\n│   Beşinci gün! 📅                   │\n│   Perşembeden sonra! ➡️             │\n│   Hafta sonuna yakın! 🎊            │\n│   Yarın Cumartesi! 🎉               │\n│                                     │\n│   "Sevgili Cuma!" 💝                │\n│                                     │\n└─────────────────────────────────────┘\n\nCuma güzel!\n\nYarın tatil! 🎉',
        '5️⃣ Cuma!',
        'Beşinci gün!',
        {
          visual: 'CUMA:\n\n5️⃣ Beşinci gün\n📅 Son gün\n🎊 Heyecan\n💝 Sevgili\n\n5. gün!',
          examples: [
            createExample(
              'Perşembeden sonra hangi gün gelir?',
              'Cuma!',
              'Perşembeden sonra Cuma gelir! 4️⃣ → 5️⃣',
              '5️⃣',
              ['Cuma!', '5. gün!', 'Beşinci!']
            )
          ],
          tip: 'Cuma 5. gün! 5️⃣'
        }
      ),

      createStep(
        'Cumartesi - 6. Gün',
        '6️⃣ CUMARTESİ!\n\nAltıncı gün!\n\n┌─────────────────────────────────────┐\n│                                     │\n│       6️⃣ CUMARTESİ                 │\n│                                     │\n│   Altıncı gün! 📅                   │\n│   HAFTA SONU! 🎉                    │\n│   Okul yok! 🏠                      │\n│   Tatil günü! 😊                    │\n│                                     │\n│   "Yaşasın Cumartesi!" 🎊           │\n│                                     │\n└─────────────────────────────────────┘\n\nCumartesi tatil!\n\nOkul yok! 🎉',
        '6️⃣ Cumartesi!',
        'Tatil günü!',
        {
          visual: 'CUMARTESİ:\n\n6️⃣ Altıncı gün\n🎉 Tatil\n🏠 Ev\n😊 Mutlu\n\n6. gün!',
          examples: [
            createExample(
              'Cumadan sonra hangi gün gelir?',
              'Cumartesi!',
              'Cumadan sonra Cumartesi gelir! 5️⃣ → 6️⃣',
              '6️⃣',
              ['Cumartesi!', '6. gün!', 'Tatil!']
            )
          ],
          tip: 'Cumartesi tatil! 6️⃣'
        }
      ),

      createStep(
        'Pazar - 7. Gün',
        '7️⃣ PAZAR!\n\nYedinci gün!\n\n┌─────────────────────────────────────┐\n│                                     │\n│       7️⃣ PAZAR                     │\n│                                     │\n│   Yedinci gün! 📅                   │\n│   HAFTA SONU! 🎉                    │\n│   Son gün! 🏠                       │\n│   Yarın Pazartesi! 🎒               │\n│                                     │\n│   "Tatlı Pazar!" 🌸                 │\n│                                     │\n└─────────────────────────────────────┘\n\nPazar son gün!\n\nYarın yeni hafta! 🔄',
        '7️⃣ Pazar!',
        'Son gün!',
        {
          visual: 'PAZAR:\n\n7️⃣ Yedinci gün\n🎉 Tatil\n🏠 Ev\n🔄 Yeni hafta\n\n7. gün!',
          examples: [
            createExample(
              'Cumartesiden sonra hangi gün gelir?',
              'Pazar!',
              'Cumartesiden sonra Pazar gelir! 6️⃣ → 7️⃣',
              '7️⃣',
              ['Pazar!', '7. gün!', 'Son gün!']
            )
          ],
          tip: 'Pazar 7. gün! 7️⃣'
        }
      ),

      createStep(
        'Hafta İçi ve Hafta Sonu',
        '📅 HAFTA İÇİ - HAFTA SONU!\n\nİki bölüm!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   📚 HAFTA İÇİ (5 gün):             │\n│   1️⃣ Pazartesi                     │\n│   2️⃣ Salı                          │\n│   3️⃣ Çarşamba                      │\n│   4️⃣ Perşembe                      │\n│   5️⃣ Cuma                          │\n│   → Okul günleri! 🎒                │\n│                                     │\n│   🎉 HAFTA SONU (2 gün):            │\n│   6️⃣ Cumartesi                     │\n│   7️⃣ Pazar                         │\n│   → Tatil günleri! 🏠               │\n│                                     │\n└─────────────────────────────────────┘\n\n5 + 2 = 7 gün!\n\nBir hafta! 📆',
        '📚 + 🎉 = 📅',
        'İki bölüm!',
        {
          visual: 'HAFTA:\n\n📚 Hafta içi:\n1️⃣2️⃣3️⃣4️⃣5️⃣\n(5 gün)\n\n🎉 Hafta sonu:\n6️⃣7️⃣\n(2 gün)\n\n5+2=7!',
          examples: [
            createExample(
              'Hafta içi kaç gün?',
              '5 gün!',
              'Hafta içi 5 gündür! 📚 Okul günleri!',
              '📚',
              ['5 gün!', 'Okul!', 'Pazartesi-Cuma!']
            )
          ],
          tip: 'Hafta içi 5, hafta sonu 2! 📅'
        }
      ),

      createStep(
        'Haftanın Günleri Şarkısı',
        '🎵 GÜNLER ŞARKISI! 🎵\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Pazartesi, Salı, Çarşamba         │\n│   Perşembe, Cuma gelir arka! 📅     │\n│                                     │\n│   Cumartesi, Pazar tatil            │\n│   Yedi gün olur hafta! 🎵           │\n│                                     │\n│   Bir, iki, üç, dört, beş           │\n│   Altı, yedi - hepsi güzel! 🌟      │\n│                                     │\n│   Yedi gün var haftada              │\n│   Hepsini bil, hatırla! 📆          │\n│                                     │\n└─────────────────────────────────────┘\n\n🎵 Şarkı söyle! 🎵\n\nGünleri öğren! 🎪',
        '🎵 Şarkı!',
        'Söyle!',
        {
          visual: 'ŞARKI:\n\n1️⃣ Pazartesi\n2️⃣ Salı\n3️⃣ Çarşamba\n4️⃣ Perşembe\n5️⃣ Cuma\n6️⃣ Cumartesi\n7️⃣ Pazar\n\n🎵 Söyle!',
          examples: [
            createExample(
              'Şarkıda kaç gün var?',
              '7 gün!',
              'Şarkıda 7 gün var! 📅 Haftanın tüm günleri!',
              '📅',
              ['7 gün!', 'Hepsi!', 'Tam hafta!']
            )
          ],
          tip: 'Her gün şarkı söyle! 🎵'
        }
      ),

      createStep(
        'Bugün Hangi Gün?',
        '📅 BUGÜN HANGİ GÜN?\n\nHer gün sor!\n\n┌─────────────────────────────────────┐\n│                                     │\n│   Sabah uyandığında sor:            │\n│   "Bugün hangi gün?" 🤔             │\n│                                     │\n│   Takvimine bak! 📆                 │\n│   Anneye sor! 👨‍👩‍👧                │\n│   Günü öğren! 📝                    │\n│                                     │\n│   Örnek:                            │\n│   "Bugün Pazartesi!" 1️⃣            │\n│   "Bugün Cumartesi!" 6️⃣            │\n│                                     │\n└─────────────────────────────────────┘\n\nHer gün öğren!\n\nGünü bil! 📅',
        '📅 Bugün?',
        'Sor ve öğren!',
        {
          visual: 'BUGÜN:\n\n🤔 Sor\n📆 Bak\n👨‍👩‍👧 Sor\n📝 Öğren\n\nHer gün!',
          examples: [
            createExample(
              'Bugün hangi gün diye nasıl öğreniriz?',
              'Takvimine bakarız!',
              'Takvimine bakarız! 📆 Veya anneye sorarız! 👨‍👩‍👧',
              '📆',
              ['Takvim!', 'Sor!', 'Öğren!']
            )
          ],
          tip: 'Her sabah bugünü öğren! 📅'
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Haftada kaç gün var?',
        ['7 gün', '5 gün', '6 gün', '10 gün'],
        '7 gün',
        'Haftada 7 gün vardır! 📅',
        '📅',
        1,
        '7 gün!'
      ),

      createMultipleChoice(
        'Haftanın ilk günü hangisidir?',
        ['Pazartesi', 'Pazar', 'Salı', 'Cuma'],
        'Pazartesi',
        'Haftanın ilk günü Pazartesi\'dir! 1️⃣',
        '1️⃣',
        1,
        'Pazartesi ilk!'
      ),

      createMultipleChoice(
        'Pazartesiden sonra hangi gün gelir?',
        ['Salı', 'Pazar', 'Çarşamba', 'Cuma'],
        'Salı',
        'Pazartesiden sonra Salı gelir! 1️⃣ → 2️⃣',
        '2️⃣',
        1,
        'Salı gelir!'
      ),

      createFillBlank(
        'Pazartesi, ___, Çarşamba',
        ['Salı'],
        'Pazartesi, Salı, Çarşamba! 1️⃣2️⃣3️⃣',
        '📅',
        1,
        'Ortadaki?'
      ),

      createMultipleChoice(
        'Haftanın son günü hangisidir?',
        ['Pazar', 'Pazartesi', 'Cumartesi', 'Cuma'],
        'Pazar',
        'Haftanın son günü Pazar\'dır! 7️⃣',
        '7️⃣',
        1,
        'Pazar son!'
      ),

      createMultipleChoice(
        'Hafta içi kaç gün?',
        ['5 gün', '2 gün', '7 gün', '3 gün'],
        '5 gün',
        'Hafta içi 5 gündür! 📚 Okul günleri!',
        '📚',
        1,
        '5 gün okul!'
      ),

      createMultipleChoice(
        'Hafta sonu kaç gün?',
        ['2 gün', '5 gün', '7 gün', '3 gün'],
        '2 gün',
        'Hafta sonu 2 gündür! 🎉 Tatil günleri!',
        '🎉',
        1,
        '2 gün tatil!'
      ),

      createFillBlank(
        'Cumartesi ve ___ hafta sonu günleridir.',
        ['Pazar'],
        'Cumartesi ve Pazar hafta sonu günleridir! 6️⃣7️⃣',
        '🎉',
        1,
        'İkinci tatil günü?'
      ),

      createMultipleChoice(
        'Salıdan sonra hangi gün gelir?',
        ['Çarşamba', 'Pazartesi', 'Perşembe', 'Cuma'],
        'Çarşamba',
        'Salıdan sonra Çarşamba gelir! 2️⃣ → 3️⃣',
        '3️⃣',
        1,
        'Çarşamba gelir!'
      ),

      createMultipleChoice(
        'Cumadan sonra hangi gün gelir?',
        ['Cumartesi', 'Perşembe', 'Pazar', 'Pazartesi'],
        'Cumartesi',
        'Cumadan sonra Cumartesi gelir! 5️⃣ → 6️⃣ Tatil başlar!',
        '6️⃣',
        1,
        'Cumartesi - tatil!'
      ),

      createMultipleChoice(
        'Hangi günler okula gideriz?',
        ['Pazartesi-Cuma arası', 'Cumartesi-Pazar', 'Sadece Pazartesi', 'Her gün'],
        'Pazartesi-Cuma arası',
        'Pazartesi-Cuma arası okula gideriz! 📚 Hafta içi!',
        '📚',
        1,
        'Hafta içi okul!'
      ),

      createFillBlank(
        'Perşembe, ___, Cumartesi',
        ['Cuma'],
        'Perşembe, Cuma, Cumartesi! 4️⃣5️⃣6️⃣',
        '📅',
        1,
        'Ortadaki?'
      ),

      createMultipleChoice(
        'Pazar hangi sırada?',
        ['7. gün', '1. gün', '5. gün', '3. gün'],
        '7. gün',
        'Pazar 7. gündür! 7️⃣ Son gün!',
        '7️⃣',
        1,
        'Pazar 7. gün!'
      ),

      createMultipleChoice(
        'Hangi günler tatildir?',
        ['Cumartesi ve Pazar', 'Pazartesi ve Salı', 'Çarşamba ve Perşembe', 'Sadece Pazar'],
        'Cumartesi ve Pazar',
        'Cumartesi ve Pazar tatildir! 🎉 Hafta sonu!',
        '🎉',
        1,
        'Hafta sonu tatil!'
      ),

      createFillBlank(
        '5 gün hafta içi + 2 gün hafta sonu = ___ gün hafta',
        ['7'],
        '5 + 2 = 7 gün! Bir hafta! 📅',
        '📅',
        1,
        'Toplam kaç?'
      )
    ],

    summary: '🎉 Bugün haftayı öğrendik!\n\n✅ Haftada 7 gün var 📅\n✅ Pazartesi → Pazar\n✅ Hafta içi 5 gün 📚\n✅ Hafta sonu 2 gün 🎉\n✅ Günleri sırayla saydık\n✅ Şarkı söyledik 🎵\n\nHaftayı biliyoruz! 📆\n\nAferin sana! 💝',

    nextTopicPreview: 'Tüm temaları tamamladık! Aferin! Artık çok şey biliyorsun! 🌟'
  }
};
