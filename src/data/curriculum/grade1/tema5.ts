// 5. TEMA: NESNELERİN GEOMETRİSİ (1) - Yer, Yön, Konum
import { Theme } from '../types';

export const tema5: Theme = {
  id: 'nesnelerin-geometrisi-1',
  title: 'Nesnelerin Geometrisi (1)',
  description: 'Yer, yön ve konum kavramlarını öğrenelim! Sağ, sol, üst, alt...',
  emoji: '🧭',
  color: 'from-teal-400 to-cyan-500',
  bgColor: 'bg-teal-50',
  borderColor: 'border-teal-200',
  textColor: 'text-teal-600',
  hours: 15,
  objectives: [
    'Yer, yön ve konum kavramlarını anlama',
    'Yönergeleri takip etme',
    'Nesnelerin eşliğini değerlendirme'
  ],
  keywords: ['Yer', 'Yön', 'Konum', 'Sağ', 'Sol', 'Üst', 'Alt', 'Eşlik'],
  generalizations: ['Yer, yön ve konum birbiriyle ilişkilidir.', 'Eş nesneler birbiri ile aynıdır.'],
  topics: [
    {
      id: 'yer-yon-konum',
      title: 'Yer, Yön ve Konum',
      description: 'Nesnelerin yerini ve yönünü tanımlama',
      emoji: '🧭',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['yer', 'yön', 'konum', 'üst', 'alt'],
      content: {
        introduction: 'Her şeyin bir yeri var! Üstte mi altta mı? Sağda mı solda mı? Öğrenelim!',
        motivationQuote: 'Yönünü bilen, yolunu bulur! 🧭',
        funFacts: [
          'Kuşlar manyetik alanı kullanarak yön bulur!',
          'Pusula her zaman kuzeyi gösterir!',
          'GPS uyduları konumumuzu metre hassasiyetiyle bulur!'
        ],
        steps: [
          {
            title: 'Üst ve Alt',
            content: 'Yukarıda olan üstte, aşağıda olan alttadır.',
            visual: '☁️ Bulut üstte | 🌱 Çimen altta',
            audio: 'Başını yukarı kaldır, tavan üstte. Ayağına bak, yer altta.',
            example: { question: 'Kuşlar nerede uçar?', answer: 'Üstte', explanation: 'Kuşlar gökyüzünde, yani üstte!' }
          },
          {
            title: 'Sağ ve Sol',
            content: 'Kalbin olduğu taraf sol, diğer taraf sağ.',
            visual: '👈 Sol el | 👉 Sağ el',
            audio: 'Kalbinin olduğu taraf sol tarafın!',
            example: { question: 'Kalem yazma elin hangisi? (Çoğu kişi için)', answer: 'Sağ el', explanation: 'Çoğu insan sağ elini kullanır!' }
          },
          {
            title: 'İçinde ve Dışında',
            content: 'Bir şeyin içinde veya dışında olabilirsin.',
            visual: '📦 Kutu içinde: 🧸 | Kutu dışında: 🎈',
            audio: 'Oyuncak ayı kutunun içinde, balon dışında.',
            example: { question: 'Balık nerede yaşar?', answer: 'Suyun içinde', explanation: 'Balıklar suyun içinde yüzer!' }
          },
          {
            title: 'Önünde ve Arkasında',
            content: 'Yüzünün baktığı taraf ön, sırtının olduğu taraf arka.',
            visual: '👤 Önümde: 📺 TV | Arkamda: 🚪 Kapı',
            audio: 'Gözlerinin gördüğü taraf ön, göremediğin taraf arka.',
            example: { question: 'Sırt çantası nerededir?', answer: 'Arkanda', explanation: 'Sırt çantası sırtında, yani arkanda!' }
          },
          {
            title: 'Yakın ve Uzak',
            content: 'Bize yakın olan az mesafede, uzak olan çok mesafededir.',
            visual: '🏠 Yakın: Komşu | 🏔️ Uzak: Dağ',
            audio: 'Elini uzat, dokunabildiğin yakın. Uzakta olanı göremeyebilirsin bile.',
            example: { question: 'Güneş bize yakın mı uzak mı?', answer: 'Uzak', explanation: 'Güneş çok çok uzakta!' }
          },
          {
            title: 'Arasında',
            content: 'İki şeyin ortasında olmak "arasında" olmaktır.',
            visual: '🍎 🍊 🍋 → Portakal elma ile limon arasında',
            audio: 'Ortadaki nesne iki nesnenin arasındadır.',
            example: { question: 'A B C de B nerededir?', answer: 'A ile C arasında', explanation: 'B ortada!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Güneş nerededir?', options: ['Altta', 'Üstte', 'İçinde', 'Arkada'], correctAnswer: 'Üstte', explanation: 'Güneş gökyüzünde, üstte!' },
          { type: 'fill-blank', question: 'Kalbin olduğu taraf ___ tarafın', correctAnswer: 'sol', explanation: 'Kalp sol tarafta!' },
          { type: 'multiple-choice', question: 'Balık suyun neresinde?', options: ['Üstünde', 'Altında', 'İçinde', 'Yanında'], correctAnswer: 'İçinde', explanation: 'Balık suyun içinde!' },
          { type: 'fill-blank', question: 'Gözlerinin gördüğü taraf ___ taraf', correctAnswer: 'ön', explanation: 'Baktığın yer öndür!' },
          { type: 'multiple-choice', question: 'Ay bize yakın mı uzak mı?', options: ['Yakın', 'Uzak', 'İçinde', 'Altında'], correctAnswer: 'Uzak', explanation: 'Ay çok uzakta!' },
          { type: 'fill-blank', question: '🔴 🔵 🟢 - Mavi ___ arasında', correctAnswer: 'kırmızı ve yeşil', explanation: 'Mavi ortada!' },
          { type: 'multiple-choice', question: 'Masa örtüsü nerededir?', options: ['Masanın altında', 'Masanın üstünde', 'Masanın içinde', 'Masanın arkasında'], correctAnswer: 'Masanın üstünde', explanation: 'Örtü masanın üstünde!' },
          { type: 'fill-blank', question: 'Yeraltı trenine ___ denir', correctAnswer: 'metro', explanation: 'Metro yer altında çalışır!' },
          { type: 'multiple-choice', question: 'Sıranın önündeki öğrenci nerede?', options: ['Arkamda', 'Önümde', 'Yanımda', 'Üstümde'], correctAnswer: 'Önümde', explanation: 'Önündeki = senin ön tarafında!' },
          { type: 'fill-blank', question: 'Çorap ayağının ___ giyilir', correctAnswer: 'içine', explanation: 'Çorap ayağın içine!' }
        ]
      }
    },
    {
      id: 'nesnelerin-esligi',
      title: 'Nesnelerin Eşliği',
      description: 'Eş nesneleri tanıma ve karşılaştırma',
      emoji: '👯',
      duration: '40 dk',
      difficulty: 1,
      keywords: ['eş', 'aynı', 'benzer', 'farklı'],
      content: {
        introduction: 'Bazı nesneler birbirinin aynısıdır, onlara eş deriz!',
        motivationQuote: 'Eşini bulmak güzel! 👯',
        funFacts: [
          'İkizler birbirinin eşidir!',
          'Ayakkabılar çift olarak satılır - eştir!',
          'Kelebekler simetrik, iki kanatları eş!'
        ],
        steps: [
          {
            title: 'Eş Nedir?',
            content: 'Birbirinin tıpatıp aynısı olan nesneler eştir.',
            visual: '🔵 = 🔵 Eş! | 🔵 ≠ 🔴 Eş değil!',
            audio: 'İki mavi top eş, mavi ve kırmızı eş değil.',
            example: { question: 'İki aynı kalem eş mi?', answer: 'Evet', explanation: 'Aynı = Eş!' }
          },
          {
            title: 'Renk ile Eşlik',
            content: 'Aynı renkteki nesneler renk bakımından eştir.',
            visual: '🟢🟢 Eş (ikisi de yeşil)',
            audio: 'İki yeşil top renk olarak eş.',
            example: { question: 'Kırmızı ve turuncu eş mi?', answer: 'Hayır', explanation: 'Farklı renkler eş değil!' }
          },
          {
            title: 'Boyut ile Eşlik',
            content: 'Aynı büyüklükteki nesneler boyut bakımından eştir.',
            visual: '⬤ ⬤ (Aynı boy) Eş! | ⬤ ● (Farklı) Değil!',
            audio: 'İki aynı boyutlu top, boyut bakımından eş.',
            example: { question: 'Büyük ve küçük elma eş mi?', answer: 'Hayır', explanation: 'Boyutları farklı!' }
          },
          {
            title: 'Şekil ile Eşlik',
            content: 'Aynı şekildeki nesneler şekil bakımından eştir.',
            visual: '▲ ▲ Eş! | ▲ ■ Eş değil!',
            audio: 'İki üçgen şekil olarak eş, üçgen ve kare değil.',
            example: { question: 'Daire ve oval eş mi?', answer: 'Hayır', explanation: 'Farklı şekiller!' }
          },
          {
            title: 'Tam Eşlik',
            content: 'Renk, boyut ve şekil olarak aynı ise tam eştir.',
            visual: '🔵(küçük) = 🔵(küçük) ✓ Tam eş!',
            audio: 'Her yönden aynı olan nesneler tam eş.',
            example: { question: 'Aynı çoraplar eş mi?', answer: 'Evet', explanation: 'Çoraplar tam eş!' }
          },
          {
            title: 'Eşini Bul!',
            content: 'Nesnelerin eşini bulmak bir oyun gibi!',
            visual: '🧩 Eşleştirme oyunu yap!',
            audio: 'Hafıza kartı oyununda eşleri buluruz!',
            example: { question: 'Bir ayakkabının eşi nerede?', answer: 'Diğer ayakkabı', explanation: 'Çift = Eş!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '🔵🔵 bu iki nesne?', options: ['Eş', 'Farklı', 'Benzer', 'Zıt'], correctAnswer: 'Eş', explanation: 'İkisi de aynı, eş!' },
          { type: 'fill-blank', question: 'Birbirinin aynısı olan nesneler ___dir', correctAnswer: 'eş', explanation: 'Aynı = Eş!' },
          { type: 'multiple-choice', question: '▲ ve ■ eş mi?', options: ['Evet', 'Hayır'], correctAnswer: 'Hayır', explanation: 'Farklı şekiller!' },
          { type: 'fill-blank', question: '🟡🟡 sarı toplar renk olarak ___', correctAnswer: 'eş', explanation: 'Aynı renk = Eş!' },
          { type: 'multiple-choice', question: 'Büyük 🔴 ve küçük 🔴 eş mi?', options: ['Evet', 'Hayır'], correctAnswer: 'Hayır', explanation: 'Boyutları farklı!' },
          { type: 'fill-blank', question: 'Çoraplar genellikle ___ olarak satılır', correctAnswer: 'çift', explanation: 'İki eş çorap!' },
          { type: 'multiple-choice', question: 'Tam eşlik için ne lazım?', options: ['Sadece renk', 'Sadece boyut', 'Renk+Boyut+Şekil', 'Hiçbiri'], correctAnswer: 'Renk+Boyut+Şekil', explanation: 'Hepsi aynı olmalı!' },
          { type: 'fill-blank', question: 'İkizler birbirinin ___', correctAnswer: 'eşi', explanation: 'İkizler eş!' },
          { type: 'multiple-choice', question: '🌟🌟🌟 üç yıldız eş mi?', options: ['Evet', 'Hayır'], correctAnswer: 'Evet', explanation: 'Hepsi aynı yıldız!' },
          { type: 'fill-blank', question: 'Ayna karşısında gördüğün sen eşindir, buna ___ denir', correctAnswer: 'yansıma', explanation: 'Aynadaki yansımandır!' }
        ]
      }
    }
  ]
};
