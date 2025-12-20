// 7. TEMA: VERİYE DAYALI ARAŞTIRMA
import { Theme } from '../types';

export const tema7: Theme = {
  id: 'veriye-dayali-arastirma',
  title: 'Veriye Dayalı Araştırma',
  description: 'Veri toplama, grafik oluşturma ve yorumlama öğrenelim!',
  emoji: '📊',
  color: 'from-pink-400 to-rose-500',
  bgColor: 'bg-pink-50',
  borderColor: 'border-pink-200',
  textColor: 'text-pink-600',
  hours: 10,
  objectives: [
    'Veri toplama',
    'Çetele ve grafik oluşturma',
    'Verileri yorumlama'
  ],
  keywords: ['Veri', 'Çetele', 'Grafik', 'Sıklık', 'Sayma'],
  generalizations: ['Grafikler verilerin görsel temsilidir.'],
  topics: [
    {
      id: 'veri-toplama-grafik',
      title: 'Veri Toplama ve Grafik',
      description: 'Çetele tablosu ve nesne grafiği oluşturma',
      emoji: '📈',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['veri', 'çetele', 'grafik', 'sayma'],
      content: {
        introduction: 'Veri toplamak soru sormak ve cevapları saymaktır! Grafik ise verilerin resmidir.',
        motivationQuote: 'Veriler bize hikayeler anlatır! 📊',
        funFacts: [
          'İlk grafik 1786 yılında çizildi!',
          'Hava durumu tahminleri veri analiziyle yapılır!',
          'Futbolda goller veri olarak kaydedilir!'
        ],
        steps: [
          {
            title: 'Veri Nedir?',
            content: 'Veri, topladığımız bilgilerdir. Sayılar, renkler, isimler veri olabilir.',
            visual: '📋 En sevilen meyve? 🍎5 🍌3 🍊4',
            audio: 'Sınıfta en sevilen meyveyi sorarsak, cevaplar veridir.',
            example: { question: 'Göz renkleri veri midir?', answer: 'Evet', explanation: 'Sayıp kaydettiğimiz her bilgi veridir!' }
          },
          {
            title: 'Soru Sormak',
            content: 'Veri toplamak için önce soru sormalıyız.',
            visual: '❓ En sevdiğin renk hangisi?',
            audio: 'Sınıfa sor: En sevdiğin hayvan hangisi?',
            example: { question: 'Hangi soru veri toplar?', answer: 'Kaç kardeşin var?', explanation: 'Sayılabilir cevaplar verir!' }
          },
          {
            title: 'Çetele Tablosu',
            content: 'Çetele, verileri çizgilerle saymaktır. Her 5\'te yatay çizgi çekeriz.',
            visual: '|||| = 4 | ||||̶ = 5 (beşinci yatay)',
            audio: 'Dört çizgi çiz, beşincide üstünü çiz!',
            example: { question: '||||̶ || kaç kişi?', answer: '7', explanation: '5 + 2 = 7 kişi!' }
          },
          {
            title: 'Sıklık Tablosu',
            content: 'Çetelelerden sıklık tablosu oluştururuz.',
            visual: 'Elma: 5 | Muz: 3 | Portakal: 4',
            audio: 'Elma 5 kez seçildi, muz 3 kez, portakal 4 kez.',
            example: { question: 'Hangi meyve en çok seçildi?', answer: 'Elma', explanation: '5 en büyük sayı!' }
          },
          {
            title: 'Nesne Grafiği',
            content: 'Nesneleri veya semboller dikey olarak dizip grafik yaparız.',
            visual: '🍎🍎🍎🍎🍎\n🍌🍌🍌\n🍊🍊🍊🍊',
            audio: 'Her meyveyi alt alta diz. En uzun sütun en çok olanı gösterir.',
            example: { question: 'Grafikte en uzun sütun?', answer: 'Elma', explanation: '5 elma, en çok!' }
          },
          {
            title: 'Grafiği Yorumlama',
            content: 'Grafiklere bakarak sorular cevaplayabiliriz.',
            visual: '📊 Elma en çok, Muz en az',
            audio: 'Grafiğe bak: Hangisi en çok? En az hangisi?',
            example: { question: 'Toplam kaç meyve seçildi?', answer: '12', explanation: '5+3+4 = 12!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Veri toplamak için ne yaparız?', options: ['Oyun oynarız', 'Soru sorarız', 'Uyuruz', 'Koşarız'], correctAnswer: 'Soru sorarız', explanation: 'Veri toplamak için soru sorarız!' },
          { type: 'fill-blank', question: '||||̶ = ___ kişi', correctAnswer: '5', explanation: 'Beş çizgi = 5!' },
          { type: 'multiple-choice', question: '||||̶ ||| kaç?', options: ['6', '7', '8', '9'], correctAnswer: '8', explanation: '5 + 3 = 8!' },
          { type: 'fill-blank', question: 'Grafik verilerin ___ temsilidir', correctAnswer: 'görsel', explanation: 'Grafik görsel!' },
          { type: 'multiple-choice', question: '🍎:5, 🍌:3, 🍊:4 - En az?', options: ['Elma', 'Muz', 'Portakal', 'Eşit'], correctAnswer: 'Muz', explanation: '3 en küçük!' },
          { type: 'fill-blank', question: '|||| = ___', correctAnswer: '4', explanation: 'Dört çizgi = 4!' },
          { type: 'multiple-choice', question: '🔵:6, 🔴:4, 🟢:6 - Eşit olanlar?', options: ['Mavi-Kırmızı', 'Mavi-Yeşil', 'Kırmızı-Yeşil', 'Hepsi'], correctAnswer: 'Mavi-Yeşil', explanation: '6 = 6 Eşit!' },
          { type: 'fill-blank', question: '5+3+4 = ___ toplam', correctAnswer: '12', explanation: '12 toplam!' },
          { type: 'multiple-choice', question: 'Çetele ne için kullanılır?', options: ['Resim yapmak', 'Sayma', 'Yazma', 'Okuma'], correctAnswer: 'Sayma', explanation: 'Çetele saymak için!' },
          { type: 'fill-blank', question: 'En uzun sütun en ___ olanı gösterir', correctAnswer: 'çok', explanation: 'Uzun = Çok!' }
        ]
      }
    }
  ]
};
