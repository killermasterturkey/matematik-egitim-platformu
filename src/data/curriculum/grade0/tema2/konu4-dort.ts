// DESTEK SINIFI - TEMA 2 - KONU 4: DÖRT (4) Sayısı
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep } from '../../helpers';

export const konu4Dort: Topic = {
  id: 'dort-sayisi',
  title: 'DÖRT (4) Sayısı',
  description: 'Dört Tane - Dörtlü - Kare',
  emoji: '4️⃣',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['dört', '4', 'dörtlü', 'kare'],
  objectives: ['DÖRT sayısını tanır', '4 rakamını tanır', 'Dört tane kavramını anlar', 'Dört parmak gösterir'],
  content: {
    introduction: `Merhaba canım! 💝\n\nBugün DÖRT sayısını öğreneceğiz!\n\n4️⃣ DÖRT!\nDört tane!\nDörtlü!\n\nHaydi! 🌟`,
    motivationQuote: 'DÖRT çok kolay! Dört ayak, dört köşe! Sen yapabilirsin! 💝',
    funFacts: ['🐕 Köpeğin dört ayağı var!', '🐱 Kedinin dört ayağı var!', '⬜ Kare dört köşeli!', '🖖 Dört parmak!', '🍀 Yonca dört yapraklı şanslı!', '4️⃣ DÖRT özel bir sayı!'],
    steps: [
      createStep('4️⃣ DÖRT Nedir?', `DÖRT! 4️⃣\n\nDÖRT = Dört tane!\nDÖRT = Dörtlü!\n\nBak:\n🐕 Dört ayak\n⬜ Dört köşe\n🍀 Dört yaprak\n🎈🎈🎈🎈 Dört balon\n\nDÖRT TANE! 4️⃣`, 'Dört tane!', {
        visual: `╔═══════════════════╗\n║    4️⃣ DÖRT       ║\n╠═══════════════════╣\n║   🖖 DÖRT PARMAK ║\n║   🐕 Dört ayak   ║\n║   ⬜ Kare (4 köşe)║\n║   🎈🎈🎈🎈      ║\n╚═══════════════════╝`,
        tip: 'Dört parmak göster! 🖖',
        examples: [createExample('Köpeğin kaç ayağı var? 🐕', 'Dört ayak', 'Aferin! Dört ayak! 🐕', '🐕 = DÖRT AYAK = 4'), createExample('Kare kaç köşeli? ⬜', 'Dört köşeli', 'Harika! Dört köşe! ⬜', '⬜ = DÖRT KÖŞE = 4')]
      }),
      createStep('✏️ DÖRT Rakamı: 4', `DÖRT sayısının rakamı: 4\n\nBak nasıl yazılır:\n4 = Bayrak gibi!\n\n  |\n  |__\n\nBayrak direği! 🚩`, '4 rakamı bayrak gibi!', {
        visual: `╔═══════════════════╗\n║ 4 NASIL YAZILIR?  ║\n╠═══════════════════╣\n║      |            ║\n║      |__          ║\n║      4            ║\n║   BAYRAK GİBİ 🚩 ║\n╚═══════════════════╝`,
        tip: 'Bayrak gibi! ✏️'
      }),
      createStep('🖖 DÖRT Parmak', `DÖRT PARMAK! 🖖\n\nElini aç!\nDört parmak kaldır!\n🖖 DÖRT!\n\nBaşparmak hariç!\nDiğer dördü!\n\n🖖 = DÖRT = 4`, 'Dört parmak göster!', {
        visual: `╔════════════════════╗\n║   DÖRT PARMAK      ║\n╠════════════════════╣\n║       🖖           ║\n║  BAŞPARMAK HARİÇ  ║\n║    🖖 = 4️⃣        ║\n╚════════════════════╝`,
        tip: 'Dört parmak! 🖖'
      }),
      createStep('🎈🎈🎈🎈 DÖRT Tane', `DÖRT TANE NESNELER!\n\n🎈🎈🎈🎈 Dört balon\n⭐⭐⭐⭐ Dört yıldız\n🍎🍎🍎🍎 Dört elma\n🌸🌸🌸🌸 Dört çiçek\n\nDÖRT TANE! 4️⃣`, 'Dört tane olanları say!', {
        visual: `╔═══════════════════╗\n║ DÖRT TANE OLANLAR ║\n╠═══════════════════╣\n║ 🎈🎈🎈🎈 Balon  ║\n║ ⭐⭐⭐⭐ Y.    ║\n║ 🍎🍎🍎🍎 Elma  ║\n╚═══════════════════╝`,
        tip: 'Dörtlü say! 1-2-3-4! 🔢'
      })
    ],
    practiceQuestions: [
      createVisualQuestion('Kaç parmak? 🖖', '🖖', ['İki', 'Üç', 'Dört 🖖'], 'Dört 🖖', 'Aferin! Dört parmak! 🖖', 1),
      createVisualQuestion('Kaç balon? 🎈🎈🎈🎈', '🎈 🎈 🎈 🎈', ['İki', 'Üç', 'Dört 4️⃣'], 'Dört 4️⃣', 'Harika! Dört balon! 🎈🎈🎈🎈', 1),
      createVisualQuestion('Köpeğin kaç ayağı var? 🐕', '🐕', ['İki', 'Üç', 'Dört 4️⃣'], 'Dört 4️⃣', 'Süper! Dört ayak! 🐕', 1),
      createMultipleChoice('Hangi rakam DÖRT?', ['1', '2', '3', '4'], '4', 'Bravo! 4 = DÖRT! 4️⃣', '4 = DÖRT', 1),
      createMultipleChoice('4 nasıl okunur?', ['Bir', 'İki', 'Üç', 'Dört'], 'Dört', 'Aferin! 4 = DÖRT! 🎵', '4 = DÖRT', 1),
      createMultipleChoice('Kare kaç köşeli? ⬜', ['İki', 'Üç', 'Dört'], 'Dört', 'Harika! Dört köşe! ⬜', '⬜ = 4 KÖŞE', 1)
    ],
    summary: `🎉 TEBRİKLER!\n\nDÖRT USTASI oldun! 4️⃣\n\nÖğrendiklerimiz:\n✅ DÖRT sayısı!\n✅ 4 rakamı!\n✅ Dört parmak! 🖖\n✅ Dört tane!\n\n4️⃣ = DÖRT\n\nAferin! 👏`,
    nextTopicPreview: 'Sonraki konuda BEŞ (5) öğreneceğiz! Beş parmak! 🖐️'
  }
};
