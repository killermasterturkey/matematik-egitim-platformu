// DESTEK SINIFI - TEMA 2 - KONU 3: ÜÇ (3) Sayısı
import { Topic } from '../../types';
import { createMultipleChoice, createVisualQuestion, createExample, createStep } from '../../helpers';

export const konu3Uc: Topic = {
  id: 'uc-sayisi',
  title: 'ÜÇ (3) Sayısı',
  description: 'Üç Tane - Üçlü - Üçgen',
  emoji: '3️⃣',
  duration: '40 dk',
  difficulty: 1,
  keywords: ['üç', '3', 'üçlü', 'üçgen'],
  objectives: ['ÜÇ sayısını tanır', '3 rakamını tanır', 'Üç tane kavramını anlar', 'Üç parmak gösterir'],
  content: {
    introduction: `Merhaba canım! 💝\n\nBugün ÜÇ sayısını öğreneceğiz!\n\n3️⃣ ÜÇ!\nÜç tane!\nÜçlü!\n\nHaydi! 🌟`,
    motivationQuote: 'ÜÇ çok kolay! Üç top, üç yıldız! Sen yapabilirsin! 💝',
    funFacts: ['⚽⚽⚽ Üç top!', '⭐⭐⭐ Üç yıldız!', '🍎🍎🍎 Üç elma!', '🔺 Üçgen üç köşeli!', '🤟 Üç parmak!', '3️⃣ ÜÇ güzel bir sayı!'],
    steps: [
      createStep('3️⃣ ÜÇ Nedir?', `ÜÇ! 3️⃣\n\nÜÇ = Üç tane!\nÜÇ = Üçlü!\n\nBak:\n⚽⚽⚽ Üç top\n⭐⭐⭐ Üç yıldız\n🍎🍎🍎 Üç elma\n🔺 Üçgen\n\nÜÇ TANE! 3️⃣`, 'Üç tane!', {
        visual: `╔═══════════════════╗\n║    3️⃣ ÜÇ         ║\n╠═══════════════════╣\n║   🤟 ÜÇ PARMAK   ║\n║   ⚽⚽⚽ Üç top   ║\n║   ⭐⭐⭐ Üç y.  ║\n║   🔺 Üçgen       ║\n╚═══════════════════╝`,
        tip: 'Üç parmak göster! 🤟',
        examples: [createExample('Kaç top? ⚽⚽⚽', 'Üç top', 'Aferin! Üç top! ⚽⚽⚽', '⚽⚽⚽ = ÜÇ = 3'), createExample('Kaç yıldız? ⭐⭐⭐', 'Üç yıldız', 'Harika! Üç yıldız! ⭐⭐⭐', '⭐⭐⭐ = ÜÇ = 3')]
      }),
      createStep('✏️ ÜÇ Rakamı: 3', `ÜÇ sayısının rakamı: 3\n\nBak nasıl yazılır:\n3 = İki yarım daire!\n\n  ₃\n  ₃\n\nÜst üste! 3️⃣`, '3 rakamı iki yarım daire!', {
        visual: `╔═══════════════════╗\n║  3 NASIL YAZILIR? ║\n╠═══════════════════╣\n║      ₃            ║\n║      ₃            ║\n║      3            ║\n║  İKİ YARIM DAİRE  ║\n╚═══════════════════╝`,
        tip: 'İki yarım daire! ✏️'
      }),
      createStep('🤟 ÜÇ Parmak', `ÜÇ PARMAK! 🤟\n\nElini aç!\nÜç parmak kaldır!\n🤟 ÜÇ!\n\nİşaret, orta, yüzük!\n\n🤟 = ÜÇ = 3`, 'Üç parmak göster!', {
        visual: `╔════════════════════╗\n║   ÜÇ PARMAK        ║\n╠════════════════════╣\n║       🤟           ║\n║  İŞARET+ORTA+YÜZÜK ║\n║    🤟 = 3️⃣        ║\n╚════════════════════╝`,
        tip: 'Üç parmak! 🤟'
      }),
      createStep('⚽⚽⚽ ÜÇ Tane', `ÜÇ TANE NESNELER!\n\n⚽⚽⚽ Üç top\n⭐⭐⭐ Üç yıldız\n🍎🍎🍎 Üç elma\n🌸🌸🌸 Üç çiçek\n\nÜÇ TANE! 3️⃣`, 'Üç tane olanları say!', {
        visual: `╔═══════════════════╗\n║ ÜÇ TANE OLANLAR   ║\n╠═══════════════════╣\n║ ⚽⚽⚽ Üç top     ║\n║ ⭐⭐⭐ Üç y.    ║\n║ 🍎🍎🍎 Üç elma  ║\n╚═══════════════════╝`,
        tip: 'Üçlü say! 1-2-3! 🔢'
      })
    ],
    practiceQuestions: [
      createVisualQuestion('Kaç parmak? 🤟', '🤟', ['Bir', 'İki', 'Üç 🤟'], 'Üç 🤟', 'Aferin! Üç parmak! 🤟', 1),
      createVisualQuestion('Kaç top? ⚽⚽⚽', '⚽ ⚽ ⚽', ['Bir', 'İki', 'Üç 3️⃣'], 'Üç 3️⃣', 'Harika! Üç top! ⚽⚽⚽', 1),
      createVisualQuestion('Kaç yıldız? ⭐⭐⭐', '⭐ ⭐ ⭐', ['Bir', 'İki', 'Üç 3️⃣'], 'Üç 3️⃣', 'Süper! Üç yıldız! ⭐⭐⭐', 1),
      createMultipleChoice('Hangi rakam ÜÇ?', ['1', '2', '3', '4'], '3', 'Bravo! 3 = ÜÇ! 3️⃣', '3 = ÜÇ', 1),
      createMultipleChoice('3 nasıl okunur?', ['Bir', 'İki', 'Üç', 'Dört'], 'Üç', 'Aferin! 3 = ÜÇ! 🎵', '3 = ÜÇ', 1),
      createVisualQuestion('Kaç elma? 🍎🍎🍎', '🍎 🍎 🍎', ['Bir', 'İki', 'Üç 3️⃣'], 'Üç 3️⃣', 'Harika! Üç elma! 🍎🍎🍎', 1)
    ],
    summary: `🎉 TEBRİKLER!\n\nÜÇ USTASI oldun! 3️⃣\n\nÖğrendiklerimiz:\n✅ ÜÇ sayısı!\n✅ 3 rakamı!\n✅ Üç parmak! 🤟\n✅ Üç tane!\n\n3️⃣ = ÜÇ\n\nAferin! 👏`,
    nextTopicPreview: 'Sonraki konuda DÖRT (4) öğreneceğiz! Dört köşe! ⬜'
  }
};
