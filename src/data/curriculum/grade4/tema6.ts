// 4. SINIF - TEMA 6: NESNELERİN GEOMETRİSİ (3) - SİMETRİ VE KODLAMA
// 13 saat (%7) - 3 Öğrenme Çıktısı

import { Theme } from '../types';

export const tema6: Theme = {
  id: 'grade4-tema6',
  title: 'Nesnelerin Geometrisi (3) - Simetri ve Kodlama',
  description: 'Simetri kavramını derinleştiriyor ve geometrik şekillerle kodlama yapıyoruz!',
  emoji: '🦋',
  color: 'from-pink-400 to-rose-500',
  bgColor: 'bg-pink-50',
  borderColor: 'border-pink-200',
  textColor: 'text-pink-600',
  hours: 13,
  objectives: [
    'Doğruya göre simetrinin aynaya göre simetri olduğunu yorumlayabilme',
    'Bir şeklin doğruya göre simetrisini oluşturabilme',
    'Geometrik şekillere dayalı yapı oluşturmak için kodlama stratejileri kullanabilme'
  ],
  keywords: [
    'Simetri', 'Doğruya göre simetri', 'Aynaya göre simetri',
    'Simetri doğrusu', 'Kodlama', 'Geometrik yapı', 'Algoritma'
  ],
  generalizations: [
    'Doğruya göre simetri, aynaya göre simetri ile aynıdır.',
    'Kodlama stratejileri, yapı oluşturmada kullanılır.'
  ],
  topics: [
    // Konu 1: Doğruya Göre Simetri
    {
      id: 'grade4-tema6-konu1',
      title: 'Doğruya Göre Simetri',
      description: 'Simetrinin ayna yansıması olduğunu anlıyoruz',
      emoji: '🪞',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Simetri', 'Ayna', 'Yansıma', 'Simetri doğrusu', 'Eş parçalar'],
      content: {
        introduction: 'Merhaba simetri kaşifleri! Bugün doğanın en güzel sırrını keşfedeceğiz - simetri! Bir kelebeğin kanatları, insan yüzü, kar taneleri... Hepsi simetriktir! 🦋🪞',
        motivationQuote: 'Simetri, doğanın güzellik formülüdür! Denge her yerde! ⚖️',
        funFacts: [
          '🦋 Kelebeklerin kanatları mükemmel simetriktir!',
          '❄️ Her kar tanesi 6 kollu simetriktir!',
          '🌻 Ayçiçeği spiral simetriye sahiptir!'
        ],
        steps: [
          {
            title: 'Simetri Nedir?',
            content: 'Simetri, bir şeklin bir doğruya göre iki eş parçaya ayrılabilmesidir. İki parça birbirinin ayna görüntüsüdür.',
            visual: '🦋 Simetri = Ayna Görüntüsü\n\n    |  \n  ◀ | ▶  \n    |    \n─── | ───\n    |    \n  ◀ | ▶  \n    |\n\n↑ Simetri doğrusu (ayna)\nSol = Sağın ayna görüntüsü',
            audio: 'Simetrik şekiller, simetri doğrusuna göre katlandığında üst üste gelir.',
            example: {
              question: 'A harfi simetrik midir?',
              answer: 'Evet, dikey simetri doğrusu var',
              explanation: 'A harfinin ortasından dikey bir çizgi çekildiğinde iki yarı eşittir'
            }
          },
          {
            title: 'Aynaya Göre Simetri',
            content: 'Bir nesneyi aynanın önüne koyduğunuzda, yansıması orijinalin simetrisidir.',
            visual: '🪞 Ayna Deneyi:\n\n      🪞\nGerçek | Yansıma\n   ✋  |  🤚\n   ▶   |  ◀\n   L   |  ⅃\n\nAyna doğrusu = Simetri doğrusu',
            audio: 'Aynadaki yansıma, doğruya göre simetrinin somut bir örneğidir.',
            example: {
              question: 'Aynada sağ el neye benzer?',
              answer: 'Sol ele',
              explanation: 'Ayna yansıması tersine çevirir'
            }
          },
          {
            title: 'Simetri Doğrusu',
            content: 'Simetri doğrusu, şekli iki eş parçaya ayıran doğrudur. Bazı şekillerin birden fazla simetri doğrusu vardır.',
            visual: '📐 Simetri Doğruları:\n\n▭ Dikdörtgen: 2 simetri doğrusu\n□ Kare: 4 simetri doğrusu\n⬡ Düzgün altıgen: 6 simetri doğrusu\n⭕ Daire: Sonsuz simetri doğrusu!\n\nNe kadar düzenli = O kadar simetri',
            audio: 'Düzgün şekillerin daha fazla simetri doğrusu vardır.',
            example: {
              question: 'Eşkenar üçgenin kaç simetri doğrusu var?',
              answer: '3',
              explanation: 'Her köşeden karşı kenara çizilen doğrular'
            }
          },
          {
            title: 'Simetrik ve Simetrik Olmayan',
            content: 'Tüm şekiller simetrik değildir. Düzensiz şekillerin simetri doğrusu olmayabilir.',
            visual: '✅ Simetrik:\nA, B, C, D, E, H, I, K, M, O, T, U, V, W, X, Y\n\n❌ Simetrik Değil:\nF, G, J, L, N, P, Q, R, S, Z\n\nHarfleri test et! 🔤',
            audio: 'Bazı şekillerin ve harflerin simetri doğrusu yoktur.',
            example: {
              question: 'S harfi simetrik midir?',
              answer: 'Hayır',
              explanation: 'S harfini hiçbir şekilde iki eş parçaya ayıramayız'
            }
          },
          {
            title: 'Doğada Simetri',
            content: 'Doğa simetri ile doludur. İnsan yüzü, yapraklar, çiçekler, hayvanlar...',
            visual: '🌿 Doğada Simetri:\n\n🦋 Kelebek kanatları\n🍂 Yaprak damarları\n🌸 Çiçek yaprakları\n👤 İnsan yüzü\n🐝 Arı peteği\n❄️ Kar taneleri',
            audio: 'Doğa, simetriyi güzellik ve denge için kullanır.',
            example: {
              question: 'Kelebek kanatlarının simetri doğrusu nerededir?',
              answer: 'Kelebeğin gövdesinden geçen dikey doğru',
              explanation: 'İki kanat birbirinin ayna görüntüsüdür'
            }
          },
          {
            title: 'Simetri Testi',
            content: 'Bir şeklin simetrik olup olmadığını test etmenin birkaç yolu var.',
            visual: '🔍 Simetri Testi:\n\n1. Kağıdı katla - üst üste geliyor mu?\n2. Ayna tut - aynı görünüyor mu?\n3. Zihninde çevir - eş mi?\n\n✅ Evetse → Simetrik\n❌ Hayırsa → Simetrik değil',
            audio: 'Şekli ortadan katlayarak simetriyi test edebiliriz.',
            example: {
              question: 'Kalp şekli ♥ simetrik midir?',
              answer: 'Evet, dikey simetri doğrusu var',
              explanation: 'Kalbi ortadan dikey katlarsak iki yarı üst üste gelir'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Hangisi simetrik bir harftir?',
            options: ['F', 'G', 'A', 'R'],
            correctAnswer: 'A',
            explanation: 'A harfinin dikey simetri doğrusu vardır'
          },
          {
            type: 'fill-blank',
            question: 'Karenin ___ tane simetri doğrusu vardır.',
            correctAnswer: '4',
            explanation: 'Kare: 2 köşegen + 2 kenar ortası = 4 simetri doğrusu'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi simetrik DEĞİLDİR?',
            options: ['Kelebek', 'Kar tanesi', 'Yaprak', 'Bulut'],
            correctAnswer: 'Bulut',
            explanation: 'Bulutların düzensiz şekli simetri oluşturmaz'
          },
          {
            type: 'fill-blank',
            question: 'Dairenin ___ simetri doğrusu vardır.',
            correctAnswer: 'sonsuz',
            explanation: 'Daire merkezinden geçen her doğru simetri doğrusudur'
          },
          {
            type: 'multiple-choice',
            question: 'Simetri doğrusu şekli neye ayırır?',
            options: ['Farklı parçalara', 'Eş parçalara', 'Üç parçaya', 'Rastgele parçalara'],
            correctAnswer: 'Eş parçalara',
            explanation: 'Simetri doğrusu şekli iki eş parçaya ayırır'
          },
          {
            type: 'fill-blank',
            question: 'Dikdörtgenin ___ simetri doğrusu vardır.',
            correctAnswer: '2',
            explanation: 'Dikdörtgen: Yatay ve dikey ortasından geçen 2 doğru'
          },
          {
            type: 'multiple-choice',
            question: 'Aynada sol el nasıl görünür?',
            options: ['Sol el olarak', 'Sağ el olarak', 'Ters olarak', 'Görünmez'],
            correctAnswer: 'Sağ el olarak',
            explanation: 'Ayna yansıması simetriktir, sol sağ olarak görünür'
          },
          {
            type: 'fill-blank',
            question: 'H harfi ___ simetri doğrusuna sahiptir.',
            correctAnswer: '2',
            explanation: 'H hem dikey hem yatay simetriye sahiptir'
          },
          {
            type: 'multiple-choice',
            question: 'Eşkenar üçgenin kaç simetri doğrusu var?',
            options: ['1', '2', '3', '4'],
            correctAnswer: '3',
            explanation: 'Eşkenar üçgenin 3 simetri doğrusu vardır'
          },
          {
            type: 'fill-blank',
            question: '🦋 Kelebeğin simetri doğrusu ___ yöndedir.',
            correctAnswer: 'dikey',
            explanation: 'Kelebeğin gövdesinden dikey simetri doğrusu geçer'
          }
        ]
      }
    },
    // Konu 2: Simetrik Şekil Çizme
    {
      id: 'grade4-tema6-konu2',
      title: 'Simetrik Şekil Çizme',
      description: 'Verilen şeklin simetriğini çizmeyi öğreniyoruz',
      emoji: '✏️',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Simetri çizimi', 'Yansıma', 'Kareli kağıt', 'Eş uzaklık'],
      content: {
        introduction: 'Merhaba simetri sanatçıları! Bugün simetrik şekiller çizeceğiz. Bir şeklin ayna görüntüsünü oluşturmak çok eğlenceli! ✏️🪞',
        motivationQuote: 'Simetri çizmek, matematiğin sanat olduğunu gösterir! 🎨',
        funFacts: [
          '🎨 Sanatçılar simetriyi denge için kullanır!',
          '🏛️ Antik Yunan mimarisi simetri ile ünlüdür!',
          '🎭 Maskelerin çoğu simetriktir!'
        ],
        steps: [
          {
            title: 'Simetri Çizmenin Kuralları',
            content: 'Simetrik şekil çizerken her nokta, simetri doğrusuna eşit uzaklıkta olmalıdır.',
            visual: '📏 Simetri Kuralı:\n\n    A  ← 3 birim →  |  ← 3 birim →  A\'\n       ← 2 birim →  |  ← 2 birim →  B\'\n    B               |\n\nHer nokta doğruya eşit uzaklıkta!\nA ile A\' arasında doğru tam ortada.',
            audio: 'Her noktanın simetriği, simetri doğrusuna eşit uzaklıkta olmalıdır.',
            example: {
              question: 'Bir nokta simetri doğrusuna 4 birim uzaksa, simetriği kaç birim uzaktadır?',
              answer: '4 birim (diğer tarafta)',
              explanation: 'Simetride uzaklıklar eşittir'
            }
          },
          {
            title: 'Kareli Kağıtta Simetri',
            content: 'Kareli kağıt, simetri çizmeyi kolaylaştırır. Kareleri sayarak doğru konumu buluruz.',
            visual: '📓 Kareli Kağıt Yöntemi:\n\n□□■□□|□□■□□\n□■■□□|□□■■□\n■■■□□|□□■■■\n□■■□□|□□■■□\n□□■□□|□□■□□\n\nSol şekil | Sağ simetri\nKareleri say, pozisyonu bul!',
            audio: 'Kareli kağıtta her kareyi sayarak simetrik noktayı buluruz.',
            example: {
              question: 'Bir nokta simetri doğrusunun 3 kare solundaysa, simetriği nerededir?',
              answer: 'Simetri doğrusunun 3 kare sağında',
              explanation: 'Eşit uzaklık kuralı'
            }
          },
          {
            title: 'Adım Adım Simetri Çizme',
            content: 'Simetrik şekil çizerken sistematik bir yol izleriz.',
            visual: '✏️ Simetri Çizme Adımları:\n\n1. Simetri doğrusunu belirle\n2. Şeklin köşelerini işaretle\n3. Her köşenin uzaklığını ölç\n4. Aynı uzaklıkta karşı tarafı işaretle\n5. Noktaları birleştir\n6. Kontrol et: Katla, üst üste geliyor mu?',
            audio: 'Her köşeyi ayrı ayrı simetri doğrusuna göre konumlandırırız.',
            example: {
              question: 'Üçgenin simetriğini çizmek için kaç nokta belirlemeliyiz?',
              answer: '3 nokta (köşeler)',
              explanation: 'Üçgenin 3 köşesi var, her birinin simetriğini bul'
            }
          },
          {
            title: 'Dikey Simetri Çizimi',
            content: 'Dikey simetri doğrusunda şekil yukarıdan aşağıya yansır.',
            visual: '| Dikey Simetri:\n\n ◀ |  ▶\n ◀◀| ▶▶\n◀◀◀|▶▶▶\n\nSol taraf | Sağ taraf\nSağ = Solun ayna görüntüsü',
            audio: 'Dikey simetride sol ve sağ yer değiştirir.',
            example: {
              question: 'Dikey simetride sola bakan ok nasıl görünür?',
              answer: 'Sağa bakan ok olarak',
              explanation: 'Yön tersine döner'
            }
          },
          {
            title: 'Yatay Simetri Çizimi',
            content: 'Yatay simetri doğrusunda şekil yukarıdan aşağıya (veya tersi) yansır.',
            visual: '─ Yatay Simetri:\n\n  ▲▲▲\n  ▲▲\n  ▲\n───────\n  ▼\n  ▼▼\n  ▼▼▼\n\nÜst | Alt\nAlt = Üstün ayna görüntüsü',
            audio: 'Yatay simetride üst ve alt yer değiştirir.',
            example: {
              question: 'Yatay simetride yukarı bakan ok nasıl görünür?',
              answer: 'Aşağı bakan ok olarak',
              explanation: 'Yön tersine döner'
            }
          },
          {
            title: 'Simetri Kontrolü',
            content: 'Çizdiğimiz simetrinin doğru olduğunu kontrol ederiz.',
            visual: '✅ Kontrol Yöntemleri:\n\n1. Kağıdı katla\n   → Üst üste gelmeli\n\n2. Ayna tut\n   → Aynı görünmeli\n\n3. Uzaklıkları ölç\n   → Eşit olmalı\n\n4. Bir arkadaşa göster\n   → Kontrolü yaptır!',
            audio: 'Doğru simetri kontrolü, hatasız çizim demektir.',
            example: {
              question: 'Simetrik çizimi nasıl kontrol ederiz?',
              answer: 'Kağıdı simetri doğrusundan katlayarak',
              explanation: 'Katlandığında şekiller üst üste gelmeli'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Simetri çizerken en önemli kural nedir?',
            options: ['Hızlı çizmek', 'Renkli kullanmak', 'Eşit uzaklık korumak', 'Büyük çizmek'],
            correctAnswer: 'Eşit uzaklık korumak',
            explanation: 'Her nokta simetri doğrusuna eşit uzaklıkta olmalı'
          },
          {
            type: 'fill-blank',
            question: 'Bir nokta simetri doğrusuna 5 birim uzaksa, simetriği de ___ birim uzaktadır.',
            correctAnswer: '5',
            explanation: 'Simetride uzaklıklar eşittir'
          },
          {
            type: 'multiple-choice',
            question: 'Kareli kağıtta simetri çizmek neden kolaydır?',
            options: ['Renkli olduğu için', 'Kareleri sayarak uzaklık buluruz', 'Katlamak kolay', 'Ucuz olduğu için'],
            correctAnswer: 'Kareleri sayarak uzaklık buluruz',
            explanation: 'Kareler sayılarak eşit uzaklık kolayca bulunur'
          },
          {
            type: 'fill-blank',
            question: 'Dikey simetride sağ taraf, solun ___ görüntüsüdür.',
            correctAnswer: 'ayna',
            explanation: 'Simetri = ayna yansıması'
          },
          {
            type: 'multiple-choice',
            question: 'Simetri kontrolü için ne yapabiliriz?',
            options: ['Büyüteç kullan', 'Kağıdı katla', 'Kağıdı yak', 'Kağıdı sula'],
            correctAnswer: 'Kağıdı katla',
            explanation: 'Katlandığında şekiller üst üste gelmelidir'
          },
          {
            type: 'fill-blank',
            question: 'Üçgenin simetriğini çizmek için ___ köşenin simetriğini bulmalıyız.',
            correctAnswer: '3',
            explanation: 'Üçgenin 3 köşesi vardır'
          },
          {
            type: 'multiple-choice',
            question: 'Yatay simetride yukarı bakan üçgen nasıl görünür?',
            options: ['Yine yukarı bakar', 'Aşağı bakar', 'Yana bakar', 'Kaybolur'],
            correctAnswer: 'Aşağı bakar',
            explanation: 'Yatay simetride yön tersine döner'
          },
          {
            type: 'fill-blank',
            question: 'Simetri doğrusu şekli ___ eş parçaya böler.',
            correctAnswer: '2',
            explanation: 'Simetri doğrusu tam ortadan geçer'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi simetri çiziminde ilk adımdır?',
            options: ['Renklendirmek', 'Simetri doğrusunu belirlemek', 'Şekli silmek', 'İmza atmak'],
            correctAnswer: 'Simetri doğrusunu belirlemek',
            explanation: 'Önce referans doğrusunu çizmeliyiz'
          },
          {
            type: 'fill-blank',
            question: 'Dikey simetride sola bakan ok, ___ bakan ok olur.',
            correctAnswer: 'sağa',
            explanation: 'Dikey simetride sol-sağ yer değiştirir'
          }
        ]
      }
    },
    // Konu 3: Geometrik Şekillerle Kodlama
    {
      id: 'grade4-tema6-konu3',
      title: 'Geometrik Şekillerle Kodlama',
      description: 'Kodlama stratejileri ile geometrik yapılar oluşturuyoruz',
      emoji: '💻',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Kodlama', 'Algoritma', 'Geometrik şekil', 'Yönerge', 'Desen'],
      content: {
        introduction: 'Merhaba küçük programcılar! Bugün geometrik şekillerle kodlama yapmayı öğreneceğiz. Bilgisayarlar da böyle çalışır - adım adım talimatlar! 💻🔷',
        motivationQuote: 'Kodlama, fikirleri gerçeğe dönüştüren sihirdir! ✨',
        funFacts: [
          '💻 İlk programcı Ada Lovelace bir kadındı!',
          '🎮 Video oyunları milyonlarca kod satırı içerir!',
          '🤖 Robotlar geometrik kodlamalarla hareket eder!'
        ],
        steps: [
          {
            title: 'Kodlama Nedir?',
            content: 'Kodlama, bir hedefe ulaşmak için adım adım talimatlar oluşturmaktır. Bilgisayarlar bu talimatları okuyarak çalışır.',
            visual: '💻 Kodlama = Talimat Dizisi\n\n📋 Kare Çizme Kodu:\n1. Kalemi koy\n2. 5 cm ileri git\n3. Sağa 90° dön\n4. 5 cm ileri git\n5. Sağa 90° dön\n6. 5 cm ileri git\n7. Sağa 90° dön\n8. 5 cm ileri git\n= KARE! ⬛',
            audio: 'Kodlama, bilgisayara ne yapacağını söyleyen adım adım talimatlardır.',
            example: {
              question: 'Üçgen çizmek için kaç "sağa dön" komutu gerekir?',
              answer: '3 kez 120° veya 3 kez sola 60°',
              explanation: 'Üçgenin 3 köşesi için 3 dönüş gerekir'
            }
          },
          {
            title: 'Temel Kodlama Komutları',
            content: 'Geometrik şekil çizmek için temel komutlar kullanırız.',
            visual: '🎮 Temel Komutlar:\n\n➡️ İLERİ (mesafe)\n⬅️ GERİ (mesafe)\n↪️ SAĞA DÖN (derece)\n↩️ SOLA DÖN (derece)\n🖊️ KALEMİ İNDİR\n✏️ KALEMİ KALDIR\n🔁 TEKRARLA (sayı)',
            audio: 'Bu temel komutlarla her şekli çizebiliriz.',
            example: {
              question: 'Çizgi çizmeden hareket etmek için hangi komutu kullanırız?',
              answer: 'KALEMİ KALDIR',
              explanation: 'Kalem kalktığında hareket iz bırakmaz'
            }
          },
          {
            title: 'Kare Çizme Kodu',
            content: 'Kare için 4 eşit kenar ve 4 dik açı (90°) gerekir.',
            visual: '⬛ Kare Algoritması:\n\nTEKRARLA 4:\n  → İLERİ 100\n  → SAĞA DÖN 90\n\nSonuç: □ (kare)\n\nNeden 4 kez?\n4 kenar = 4 tekrar',
            audio: 'Tekrarlama komutu, aynı işlemi defalarca yapmamızı engeller.',
            example: {
              question: 'Kare kodunda toplam kaç derece dönüş yapılır?',
              answer: '360° (4 × 90°)',
              explanation: 'Tam bir tur = 360°'
            }
          },
          {
            title: 'Üçgen Çizme Kodu',
            content: 'Eşkenar üçgen için 3 eşit kenar ve 3 eşit dönüş (120°) gerekir.',
            visual: '🔺 Üçgen Algoritması:\n\nTEKRARLA 3:\n  → İLERİ 100\n  → SAĞA DÖN 120\n\nSonuç: △ (üçgen)\n\nNeden 120°?\n360° ÷ 3 = 120°',
            audio: 'Düzgün çokgenler için dış açı = 360° ÷ kenar sayısı.',
            example: {
              question: 'Beşgen çizmek için kaç derece dönüş gerekir?',
              answer: '72° (360 ÷ 5)',
              explanation: 'Beşgenin 5 kenarı var'
            }
          },
          {
            title: 'Desen Oluşturma',
            content: 'Tekrar ve döngülerle karmaşık desenler oluşturabiliriz.',
            visual: '🎨 Desen Kodu:\n\nTEKRARLA 6:\n  → KARE ÇİZ\n  → SAĞA DÖN 60\n\nSonuç: 🌸 (çiçek deseni)\n\n6 kare × 60° = 360° (tam dönüş)',
            audio: 'Basit şekilleri birleştirerek karmaşık desenler oluştururuz.',
            example: {
              question: '8 üçgenle desen yapmak için her seferinde kaç derece dönmeliyiz?',
              answer: '45° (360 ÷ 8)',
              explanation: '8 eşit parça için 45°'
            }
          },
          {
            title: 'Hata Ayıklama',
            content: 'Kod çalışmazsa hatayı bulup düzeltiriz. Buna "hata ayıklama" denir.',
            visual: '🐛 Hata Ayıklama:\n\nYanlış Kod:\nTEKRARLA 4:\n  İLERİ 100\n  SAĞA 80  ❌\n\nSonuç: Kapalı olmayan şekil\n\nDüzeltme:\n  SAĞA 90 ✅\n\nDoğru açı = Doğru şekil!',
            audio: 'Hata bulmak programlamanın önemli bir parçasıdır.',
            example: {
              question: 'Kare yerine eğik dörtgen çiziliyorsa hata nedir?',
              answer: 'Açı 90° değil',
              explanation: 'Kare için mutlaka 90° gerekir'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Kare çizmek için kaç kez tekrar gerekir?',
            options: ['2', '3', '4', '5'],
            correctAnswer: '4',
            explanation: 'Karenin 4 kenarı vardır'
          },
          {
            type: 'fill-blank',
            question: 'Eşkenar üçgen çizmek için her köşede ___ derece dönülür.',
            correctAnswer: '120',
            explanation: '360° ÷ 3 = 120°'
          },
          {
            type: 'multiple-choice',
            question: 'Düzgün altıgen için dış açı kaç derecedir?',
            options: ['45°', '60°', '90°', '120°'],
            correctAnswer: '60°',
            explanation: '360° ÷ 6 = 60°'
          },
          {
            type: 'fill-blank',
            question: 'Kodlamada "TEKRARLA" komutu işlemi ___ kez yapar.',
            correctAnswer: 'belirtilen sayı',
            explanation: 'TEKRARLA 5 dersek işlem 5 kez yapılır'
          },
          {
            type: 'multiple-choice',
            question: 'Çizgi çizmeden hareket etmek için ne yapılır?',
            options: ['İLERİ 0', 'KALEMİ KALDIR', 'GERİ GİT', 'DUR'],
            correctAnswer: 'KALEMİ KALDIR',
            explanation: 'Kalem yukarıda iken iz bırakmaz'
          },
          {
            type: 'fill-blank',
            question: '8 kenarlı düzgün çokgen için dış açı ___ derecedir.',
            correctAnswer: '45',
            explanation: '360° ÷ 8 = 45°'
          },
          {
            type: 'multiple-choice',
            question: 'Kodda hata aramaya ne denir?',
            options: ['Hızlandırma', 'Hata ayıklama', 'Renklendirme', 'Kopyalama'],
            correctAnswer: 'Hata ayıklama',
            explanation: 'İngilizce "debugging" olarak da bilinir'
          },
          {
            type: 'fill-blank',
            question: 'Bir karenin dört kenarını çizmek için toplam ___ derece dönülür.',
            correctAnswer: '360',
            explanation: '4 × 90° = 360° (tam tur)'
          },
          {
            type: 'multiple-choice',
            question: '12 üçgenle çiçek deseni için her üçgen arasında kaç derece dönülür?',
            options: ['15°', '30°', '45°', '60°'],
            correctAnswer: '30°',
            explanation: '360° ÷ 12 = 30°'
          },
          {
            type: 'fill-blank',
            question: 'Düzgün beşgen için dış açı = 360 ÷ 5 = ___ derece.',
            correctAnswer: '72',
            explanation: '360° ÷ 5 = 72°'
          }
        ]
      }
    }
  ]
};
