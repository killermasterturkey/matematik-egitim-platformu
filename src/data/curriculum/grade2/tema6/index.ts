// 2. SINIF - 6. TEMA: VERİYE DAYALI ARAŞTIRMA
import { Theme } from '../../types';

export const tema6: Theme = {
  id: 'veriye-dayali-arastirma',
  title: 'Veriye Dayalı Araştırma',
  description: 'İki veri grubuyla çalışma ve karşılaştırma!',
  emoji: '📊',
  color: 'from-pink-400 to-rose-500',
  bgColor: 'bg-pink-50',
  borderColor: 'border-pink-200',
  textColor: 'text-pink-600',
  hours: 10,
  objectives: [
    'İki veri grubuyla çalışma',
    'Verileri karşılaştırma',
    'Şekil grafiği oluşturma'
  ],
  keywords: ['Veri', 'Karşılaştırma', 'Grafik', 'Çetele', 'Sıklık'],
  generalizations: ['Grafikler verilerin karşılaştırılmasına olanak sağlar.'],
  topics: [
    {
      id: 'veri-karsilastirma',
      title: 'Veri Karşılaştırma',
      description: 'İki veri grubunu karşılaştırma',
      emoji: '📊',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['karşılaştırma', 'grafik', 'veri', 'analiz'],
      content: {
        introduction: 'İki grup veriyi karşılaştırarak daha iyi kararlar verebiliriz!',
        motivationQuote: 'Karşılaştırma bilgeliğin başlangıcı! 📊',
        funFacts: [
          'Hava durumu grafiklerle gösterilir!',
          'Sporcuların istatistikleri karşılaştırılır!',
          'Şirketler satış verilerini karşılaştırır!'
        ],
        steps: [
          {
            title: 'İki Veri Grubu',
            content: 'Farklı grupların verilerini yan yana koyarız.',
            visual: '🍎 Kızlar: 5 | 🍎 Erkekler: 8',
            audio: 'Kızların ve erkeklerin elma tercihi farklı!',
            example: { question: 'Erkekler daha çok mu elma sever?', answer: 'Evet, 8 > 5', explanation: '8 kişi > 5 kişi!' }
          },
          {
            title: 'Çetele ile Kayıt',
            content: 'Her iki grup için ayrı çetele tut.',
            visual: 'Kızlar: |||| = 4 | Erkekler: ||||̶ | = 6',
            audio: 'İki sütunlu çetele tablosu yap!',
            example: { question: '|||| ve ||||̶ || hangisi çok?', answer: '||||̶ || (7)', explanation: '4 < 7!' }
          },
          {
            title: 'Şekil Grafiği',
            content: 'Verileri şekillerle göster, karşılaştır.',
            visual: '🔵🔵🔵🔵 Kızlar\n🔴🔴🔴🔴🔴🔴 Erkekler',
            audio: 'Uzun sütun daha çok demek!',
            example: { question: 'Hangi grup daha uzun?', answer: 'Erkekler', explanation: '6 > 4!' }
          },
          {
            title: 'Fark Bulma',
            content: 'İki grup arasındaki farkı hesapla.',
            visual: 'Erkekler: 8 | Kızlar: 5 | Fark: 8-5 = 3',
            audio: 'Erkekler 3 kişi daha fazla elma seviyor!',
            example: { question: '12 ve 7 arasındaki fark?', answer: '5', explanation: '12 - 7 = 5!' }
          },
          {
            title: 'Yorumlama',
            content: 'Verilerden anlam çıkar.',
            visual: '🍌 Kızlar: 10, Erkekler: 6 → Kızlar muzu daha çok seviyor',
            audio: 'Kızlar erkeklerden daha çok muz seviyor!',
            example: { question: 'Grafiğe bakarak ne anlarsın?', answer: 'Tercihleri', explanation: 'Grafik tercihleri gösterir!' }
          },
          {
            title: 'Karar Verme',
            content: 'Verilere göre karar ver.',
            visual: '🍎 10 kişi, 🍌 5 kişi → Daha çok elma al!',
            audio: 'Çoğunluk elmayı seviyor, elma al!',
            example: { question: 'Kantinde hangi meyve daha çok satılır?', answer: 'Çoğunluğun sevdiği', explanation: 'Veri bize söylüyor!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Kızlar: 7, Erkekler: 5. Fark?', options: ['2', '3', '12', '35'], correctAnswer: '2', explanation: '7 - 5 = 2!' },
          { type: 'fill-blank', question: '🔵🔵🔵 = ___ kişi', correctAnswer: '3', explanation: 'Her şekil 1 kişi!' },
          { type: 'multiple-choice', question: 'A grubu: 15, B grubu: 10. Hangisi çok?', options: ['A', 'B', 'Eşit', 'Belli değil'], correctAnswer: 'A', explanation: '15 > 10!' },
          { type: 'fill-blank', question: '||||̶ = ___', correctAnswer: '5', explanation: '5 çizgi!' },
          { type: 'multiple-choice', question: 'Grafik ne gösterir?', options: ['Renkleri', 'Verileri', 'Hayvanları', 'Hiçbirini'], correctAnswer: 'Verileri', explanation: 'Grafik veri gösterir!' },
          { type: 'fill-blank', question: '12 - 8 = ___ fark', correctAnswer: '4', explanation: '12 - 8 = 4!' },
          { type: 'multiple-choice', question: 'Kızlar: 🔴🔴🔴, Erkekler: 🔴🔴🔴🔴🔴. Kim çok?', options: ['Kızlar', 'Erkekler', 'Eşit', 'Yok'], correctAnswer: 'Erkekler', explanation: '5 > 3!' },
          { type: 'fill-blank', question: 'İki veri grubu ___ ile gösterilir', correctAnswer: 'grafik', explanation: 'Grafik karşılaştırır!' },
          { type: 'multiple-choice', question: '20 elma, 15 armut. Hangisi az?', options: ['Elma', 'Armut', 'Eşit', 'Belli değil'], correctAnswer: 'Armut', explanation: '15 < 20!' },
          { type: 'fill-blank', question: 'Toplam = Grup A + Grup B = 8 + 12 = ___', correctAnswer: '20', explanation: '8 + 12 = 20!' }
        ]
      }
    }
  ]
};
