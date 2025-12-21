// DESTEK SINIFI - TEMA 2 - KONU 6: 1-5 Tekrar ve Pekiştirme
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep } from '../../helpers';

export const konu6Tekrar: Topic = {
  id: 'tekrar-1-5',
  title: '1-5 Tekrar ve Pekiştirme',
  description: 'Tüm Sayıları Tekrar Edelim - 1, 2, 3, 4, 5',
  emoji: '🔢',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['tekrar', '1-5', 'pekiştirme', 'sayılar'],
  objectives: ['1-5 sayıları birlikte tekrar eder', 'Sırayla sayar', 'Karşılaştırma yapar', 'Sayı oyunları oynar'],
  content: {
    introduction: `Merhaba canım! 💝\n\nBugün hepsini tekrar edeceğiz!\n\n1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n\nBir, İki, Üç, Dört, Beş!\nHepsini biliyorsun! 🌟`,
    motivationQuote: 'Sen artık sayı uzmanısın! 1\'den 5\'e kadar hepsini biliyorsun! Aferin! 💝',
    funFacts: ['🔢 Beş sayı öğrendin!', '☝️✌️🤟🖖🖐️ Parmakla gösterebiliyorsun!', '1-2-3-4-5 Sırayla sayabiliyorsun!', '🌟 Sen şampiyonsun!', '💝 Her sayının özel bir anlamı var!', '🎉 Sayılar arkadaşın oldu!'],
    steps: [
      createStep('🔢 Tüm Sayıları Hatırlayalım', `TÜM SAYILAR! 🔢\n\n1️⃣ BİR - Tek, yalnız, bir tane\n2️⃣ İKİ - Çift, ikiz, iki tane\n3️⃣ ÜÇ - Üçlü, üçgen, üç tane\n4️⃣ DÖRT - Dörtlü, kare, dört tane\n5️⃣ BEŞ - Beşli, bir el, beş tane\n\nHEPSİNİ BİLİYORSUN! 🌟`, 'Tüm sayıları hatırla!', {
        visual: `╔═══════════════════╗\n║   SAYILAR 1-5     ║\n╠═══════════════════╣\n║ 1️⃣ BİR   ☝️     ║\n║ 2️⃣ İKİ   ✌️     ║\n║ 3️⃣ ÜÇ    🤟     ║\n║ 4️⃣ DÖRT  🖖     ║\n║ 5️⃣ BEŞ   🖐️     ║\n╚═══════════════════╝`,
        tip: 'Hepsini parmakla göster! ☝️✌️🤟🖖🖐️'
      }),
      createStep('🔢 Sırayla Sayalım', `SIRAYLA SAYMA! 🔢\n\n1 → 2 → 3 → 4 → 5\n\nBİR!\nİKİ!\nÜÇ!\nDÖRT!\nBEŞ!\n\n🎵 Hep birlikte:\n"Bir, iki, üç, dört, beş!"\n\nSIRA ÖNEMLİ! 📊`, 'Sırayla say!', {
        visual: `╔═══════════════════╗\n║   SIRA İLE SAY    ║\n╠═══════════════════╣\n║ 1️⃣ → 2️⃣ → 3️⃣   ║\n║      ↓            ║\n║ 5️⃣ ← 4️⃣         ║\n║                   ║\n║ 1-2-3-4-5! 🎵    ║\n╚═══════════════════╝`,
        tip: 'Yüksek sesle say! 1-2-3-4-5! 🎵'
      }),
      createStep('📊 Karşılaştırma', `KARŞILAŞTIRMA! 📊\n\nHangisi daha fazla?\nHangisi daha az?\n\n1 < 2 (Bir, ikiden az)\n2 < 3 (İki, üçten az)\n3 < 4 (Üç, dörtten az)\n4 < 5 (Dört, beşten az)\n\n5 en büyük!\n1 en küçük!`, 'Karşılaştır!', {
        visual: `╔═══════════════════╗\n║  KARŞILAŞTIRMA    ║\n╠═══════════════════╣\n║ 1️⃣ < 2️⃣ < 3️⃣   ║\n║       < 4️⃣ < 5️⃣  ║\n║                   ║\n║ KÜÇÜK → BÜYÜK     ║\n╚═══════════════════╝`,
        tip: '5 en büyük! 1 en küçük! 📊'
      }),
      createStep('🎮 Sayı Oyunları', `SAYI OYUNLARI! 🎮\n\nOYUN 1: Parmakla Göster\n☝️ Bir! ✌️ İki! 🤟 Üç!\n🖖 Dört! 🖐️ Beş!\n\nOYUN 2: Hızlı Say\n1-2-3-4-5!\n5-4-3-2-1!\n\nOYUN 3: Eksik Olanı Bul\n1-2-?-4-5 (Cevap: 3)\n\nOYUN 4: Karışık Say\n2-4-1-5-3 → 1-2-3-4-5`, 'Oyunlarla öğren!', {
        visual: `╔═══════════════════╗\n║   SAYDI OYUNLARI  ║\n╠═══════════════════╣\n║ 🎯 GÖSTER        ║\n║ 🏃 HIZLI SAY     ║\n║ 🔍 EKSİK BUL     ║\n║ 🔀 KARIŞIK SAY   ║\n╚═══════════════════╝`,
        tip: 'Her gün oyun oyna! Çok eğlenceli! 🎮'
      }),
      createStep('🌟 Sayı Şarkısı', `SAYI ŞARKISI! 🌟\n\n🎵 BİR parmağım var!\n🎵 İKİ gözüm var!\n🎵 ÜÇ top var!\n🎵 DÖRT ayaklı köpek!\n🎵 BEŞ parmak bir el!\n\n🎶 Hep birlikte:\n"Bir, iki, üç, dört, beş!\nSayıları öğrendik geçmiş!\nAferin bize, aferin bize!\nSayıları biliyoruz artık!" 🎶`, 'Şarkıyla öğren!', {
        visual: `╔═══════════════════╗\n║   ŞARKI SÖYLEYİN  ║\n╠═══════════════════╣\n║ 🎵 1-2-3-4-5!    ║\n║ 🎶 Sayılar!      ║\n║ 🎵 Arkadaşız!    ║\n║ 🎶 Hep birlikte! ║\n╚═══════════════════╝`,
        tip: 'Şarkı söyle! Çok eğlenceli! 🎵'
      }),
      createStep('🏆 Sayı Ustası', `SAYI USTASI! 🏆\n\nSen artık:\n✅ 1-5 sayıları biliyorsun!\n✅ Parmakla gösterebiliyorsun!\n✅ Sırayla sayabiliyorsun!\n✅ Karşılaştırma yapabiliyorsun!\n✅ Sayı oyunları oynayabiliyorsun!\n\nSEN ŞAMPIYONSUN! 🏆`, 'Sen bir sayı ustası oldun!', {
        visual: `╔═══════════════════╗\n║   🏆 ŞAMPIYON! 🏆 ║\n╠═══════════════════╣\n║ ☝️✌️🤟🖖🖐️     ║\n║ 1️⃣2️⃣3️⃣4️⃣5️⃣   ║\n║                   ║\n║ SAYI USTASI!      ║\n╚═══════════════════╝`,
        tip: 'Sen çok akıllısın! Aferin! 🌟'
      })
    ],
    practiceQuestions: [
      createMultipleChoice('1-2-3-?-5 Eksik olan?', ['2', '3', '4', '5'], '4', 'Aferin! 4 eksik! 1-2-3-4-5!', '1-2-3-[4]-5', 1),
      createMultipleChoice('Hangi sayı en büyük? 1-2-3-4-5', ['1', '3', '5'], '5', 'Harika! 5 en büyük! 5️⃣', '5 > hepsi', 1),
      createMultipleChoice('Hangi sayı en küçük? 1-2-3-4-5', ['1', '2', '3'], '1', 'Süper! 1 en küçük! 1️⃣', '1 < hepsi', 1),
      createVisualQuestion('Parmakla 3 hangisi?', '☝️  ✌️  🤟  🖖  🖐️', ['Bir', 'İki', 'Üç 🤟', 'Dört', 'Beş'], 'Üç 🤟', 'Bravo! Üç parmak! 🤟', 1),
      createVisualQuestion('Parmakla 5 hangisi?', '☝️  ✌️  🤟  🖖  🖐️', ['Bir', 'İki', 'Üç', 'Dört', 'Beş 🖐️'], 'Beş 🖐️', 'Aferin! Beş parmak! 🖐️', 1),
      createMultipleChoice('2\'den sonra hangi sayı?', ['1', '3', '4', '5'], '3', 'Harika! 2\'den sonra 3! 2→3', '2 → 3', 1),
      createMultipleChoice('4\'ten önce hangi sayı?', ['1', '2', '3', '5'], '3', 'Süper! 4\'ten önce 3! 3→4', '3 → 4', 1),
      createVisualQuestion('Kaç elma? 🍎🍎🍎', '🍎 🍎 🍎', ['1', '2', '3', '4', '5'], '3', 'Bravo! Üç elma! 🍎🍎🍎', 1),
      createVisualQuestion('Kaç yıldız? ⭐⭐⭐⭐⭐', '⭐ ⭐ ⭐ ⭐ ⭐', ['1', '2', '3', '4', '5'], '5', 'Mükemmel! Beş yıldız! ⭐⭐⭐⭐⭐', 1),
      createMultipleChoice('3 ile 5 arasında hangi sayı?', ['2', '3', '4', '5'], '4', 'Aferin! 3 ile 5 arasında 4 var! 3-4-5', '3 → 4 → 5', 1)
    ],
    summary: `🎉 SÜPER TEBRİKLER!!! 🎉\n\nSen muhteşemsin! 💝\nSAYI ŞAMPIYONU oldun! 🏆\n\nNeler öğrendin:\n✅ 1️⃣ BİR - Tek, bir tane\n✅ 2️⃣ İKİ - Çift, iki tane\n✅ 3️⃣ ÜÇ - Üçlü, üç tane\n✅ 4️⃣ DÖRT - Dörtlü, dört tane\n✅ 5️⃣ BEŞ - Beşli, bir el\n\n☝️✌️🤟🖖🖐️ Parmakla göster!\n🔢 Sırayla say: 1-2-3-4-5!\n📊 Karşılaştır: 1 < 5\n🎮 Oyun oyna!\n\nSEN HARIKASIIN! 🌟\nTEMA 2 BİTTİ! 🎊\n\nAferin sana! 👏👏👏`,
    nextTopicPreview: 'Tebrikler! TEMA 2 tamamlandı! Artık sayıları biliyorsun! 🎊'
  }
};
