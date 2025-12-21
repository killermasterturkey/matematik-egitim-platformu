// DESTEK SINIFI - TEMA 2 - KONU 5: BEŞ (5) Sayısı
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep } from '../../helpers';

export const konu5Bes: Topic = {
  id: 'bes-sayisi',
  title: 'BEŞ (5) Sayısı',
  description: 'Beş Tane - Bir El - Beşli',
  emoji: '5️⃣',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['beş', '5', 'beşli', 'el'],
  objectives: ['BEŞ sayısını tanır', '5 rakamını tanır', 'Beş tane kavramını anlar', 'Bir el beş parmak gösterir'],
  content: {
    introduction: `Merhaba canım! 💝\n\nBugün BEŞ sayısını öğreneceğiz!\n\n5️⃣ BEŞ!\nBeş tane!\nBir el!\n\nHaydi! 🌟`,
    motivationQuote: 'BEŞ çok kolay! Bir elin beş parmağı! Sen yapabilirsin! 💝',
    funFacts: ['🖐️ Bir elde beş parmak var!', '⭐⭐⭐⭐⭐ Beş yıldız!', '🌟 Yıldız beş köşeli!', '✋ Elini aç, beş parmak!', '5️⃣ BEŞ özel bir sayı!', '🖐️ Parmaklar: Başparmak, işaret, orta, yüzük, serçe!'],
    steps: [
      createStep('5️⃣ BEŞ Nedir?', `BEŞ! 5️⃣\n\nBEŞ = Beş tane!\nBEŞ = Bir el!\nBEŞ = Beşli!\n\nBak:\n🖐️ Bir el (beş parmak)\n⭐⭐⭐⭐⭐ Beş yıldız\n🍎🍎🍎🍎🍎 Beş elma\n🌟 Yıldız (beş köşe)\n\nBEŞ TANE! 5️⃣`, 'Beş tane! Bir el!', {
        visual: `╔═══════════════════╗\n║    5️⃣ BEŞ        ║\n╠═══════════════════╣\n║   🖐️ BİR EL     ║\n║   (BEŞ PARMAK)    ║\n║   ⭐⭐⭐⭐⭐    ║\n║   🌟 Yıldız (5 k.)║\n╚═══════════════════╝`,
        tip: 'Elini aç! Beş parmak! 🖐️',
        examples: [createExample('Bir elde kaç parmak? 🖐️', 'Beş parmak', 'Aferin! Beş parmak! 🖐️', '🖐️ = BEŞ PARMAK = 5'), createExample('Kaç yıldız? ⭐⭐⭐⭐⭐', 'Beş yıldız', 'Harika! Beş yıldız! ⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐ = BEŞ = 5')]
      }),
      createStep('✏️ BEŞ Rakamı: 5', `BEŞ sayısının rakamı: 5\n\nBak nasıl yazılır:\n5 = Şapkalı adam!\n\n  ₅\n  └\n\nÜstte şapka! ⛑️`, '5 rakamı şapkalı adam gibi!', {
        visual: `╔═══════════════════╗\n║ 5 NASIL YAZILIR?  ║\n╠═══════════════════╣\n║      ₅            ║\n║      └            ║\n║      5            ║\n║  ŞAPKALI ADAM ⛑️  ║\n╚═══════════════════╝`,
        tip: 'Şapkalı adam! ✏️'
      }),
      createStep('🖐️ BEŞ Parmak - Bir El', `BEŞ PARMAK! 🖐️\n\nElini aç!\nBeş parmak!\n🖐️ BEŞ!\n\nParmakların:\n👍 Başparmak\n☝️ İşaret parmağı\n🖕 Orta parmak\n💍 Yüzük parmağı\n🤙 Serçe parmak\n\n🖐️ = BEŞ = 5`, 'Beş parmak göster!', {
        visual: `╔════════════════════╗\n║   BEŞ PARMAK       ║\n╠════════════════════╣\n║       🖐️           ║\n║   TÜM PARMAKLAR!   ║\n║   👍☝️🖕💍🤙     ║\n║    🖐️ = 5️⃣        ║\n╚════════════════════╝`,
        tip: 'Tüm parmakları aç! 🖐️'
      }),
      createStep('⭐⭐⭐⭐⭐ BEŞ Tane', `BEŞ TANE NESNELER!\n\n⭐⭐⭐⭐⭐ Beş yıldız\n🍎🍎🍎🍎🍎 Beş elma\n🎈🎈🎈🎈🎈 Beş balon\n🌸🌸🌸🌸🌸 Beş çiçek\n🖐️ Bir el (beş parmak)\n\nBEŞ TANE! 5️⃣`, 'Beş tane olanları say!', {
        visual: `╔═══════════════════╗\n║ BEŞ TANE OLANLAR  ║\n╠═══════════════════╣\n║ ⭐⭐⭐⭐⭐ Y.  ║\n║ 🍎🍎🍎🍎🍎 E. ║\n║ 🖐️ Bir el        ║\n╚═══════════════════╝`,
        tip: 'Beşli say! 1-2-3-4-5! 🔢'
      }),
      createStep('🎮 BEŞ Oyunları', `BEŞ OYUNLARI! 🎮\n\n1. Beş tane bul!\n2. Elini aç! 🖐️\n3. Beş say! 1-2-3-4-5!\n4. 5 yaz! ✏️\n5. Parmakları say!\n\nEğlenceli! 🎉`, 'Oyun oyna! Beş öğren!', {
        visual: `╔═══════════════════╗\n║  BEŞ OYUNLARI     ║\n╠═══════════════════╣\n║ 👀 BUL: Beş tane! ║\n║ 🖐️ GÖSTER: Beş! ║\n║ 🔢 SAY: 1-2-3-4-5!║\n║ ✏️ YAZ: 5        ║\n╚═══════════════════╝`,
        tip: 'Her gün oyun oyna! 🎮'
      })
    ],
    practiceQuestions: [
      createVisualQuestion('Kaç parmak? 🖐️', '🖐️', ['Üç', 'Dört', 'Beş 🖐️'], 'Beş 🖐️', 'Aferin! Beş parmak! 🖐️', 1),
      createVisualQuestion('Kaç yıldız? ⭐⭐⭐⭐⭐', '⭐ ⭐ ⭐ ⭐ ⭐', ['Üç', 'Dört', 'Beş 5️⃣'], 'Beş 5️⃣', 'Harika! Beş yıldız! ⭐⭐⭐⭐⭐', 1),
      createVisualQuestion('Bir elde kaç parmak? ✋', '✋', ['Üç', 'Dört', 'Beş 5️⃣'], 'Beş 5️⃣', 'Süper! Beş parmak! ✋', 1),
      createMultipleChoice('Hangi rakam BEŞ?', ['1', '2', '3', '4', '5'], '5', 'Bravo! 5 = BEŞ! 5️⃣', '5 = BEŞ', 1),
      createMultipleChoice('5 nasıl okunur?', ['Bir', 'İki', 'Üç', 'Dört', 'Beş'], 'Beş', 'Aferin! 5 = BEŞ! 🎵', '5 = BEŞ', 1),
      createVisualQuestion('Kaç elma? 🍎🍎🍎🍎🍎', '🍎 🍎 🍎 🍎 🍎', ['Üç', 'Dört', 'Beş 5️⃣'], 'Beş 5️⃣', 'Harika! Beş elma! 🍎🍎🍎🍎🍎', 1),
      createMultipleChoice('Parmakların adları kaç tane?', ['Üç', 'Dört', 'Beş'], 'Beş', 'Aferin! Beş parmak! 👍☝️🖕💍🤙', 'BEŞ PARMAK', 1)
    ],
    summary: `🎉 TEBRİKLER!\n\nBEŞ USTASI oldun! 5️⃣\n\nÖğrendiklerimiz:\n✅ BEŞ sayısı!\n✅ 5 rakamı!\n✅ Bir el beş parmak! 🖐️\n✅ Beş tane!\n✅ Parmak isimleri!\n\n5️⃣ = BEŞ = BİR EL\n\nAferin! 👏`,
    nextTopicPreview: 'Son konu: 1-5 TEKRAR ve PEKİŞTİRME! Hepsini birlikte! 🔢'
  }
};
