// 2. SINIF - 3. TEMA: İŞLEMLERDEN CEBİRSEL DÜŞÜNMEYE
import { Theme } from '../../types';

export const tema3: Theme = {
  id: 'islemler-cebir',
  title: 'İşlemlerden Cebirsel Düşünmeye',
  description: 'Dört işlem öğrenelim! Toplama, çıkarma, çarpma ve bölme.',
  emoji: '🧮',
  color: 'from-purple-400 to-violet-500',
  bgColor: 'bg-purple-50',
  borderColor: 'border-purple-200',
  textColor: 'text-purple-600',
  hours: 55,
  objectives: [
    'Toplama ve çıkarma problemleri çözme',
    'Çarpma işlemini anlama',
    'Bölme işlemini anlama',
    'Dört işlem arasındaki ilişki'
  ],
  keywords: ['Toplama', 'Çıkarma', 'Çarpma', 'Bölme', 'Problem', 'Eşitlik'],
  generalizations: ['Dört işlem arasında ilişkiler vardır.', 'Çarpma tekrarlı toplama, bölme tekrarlı çıkarmadır.'],
  topics: [
    {
      id: 'toplama-cikarma-problem',
      title: 'Toplama ve Çıkarma Problemleri',
      description: 'Günlük hayat problemlerini çözme',
      emoji: '📝',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['problem', 'çözüm', 'strateji', 'işlem'],
      content: {
        introduction: 'Matematiği hayatta kullanırız! Markette, oyunda, her yerde problem çözeriz.',
        motivationQuote: 'Her problem bir fırsattır! 📝',
        funFacts: [
          'Mühendisler her gün problemleri çözer!',
          'Doktorlar da matematik kullanır!',
          'Aşçılar tariflerde toplama yapar!'
        ],
        steps: [
          {
            title: 'Problemi Anlama',
            content: 'Önce ne sorulduğunu anla, verileri bul.',
            visual: '📖 Oku → 🔍 Anla → ✏️ Çöz',
            audio: 'Problemi dikkatlice oku, ne isteniyor bul!',
            example: { question: 'Ali 15 bilye, Ayşe 8 bilye verdi. Toplam?', answer: '23 bilye', explanation: '15 + 8 = 23!' }
          },
          {
            title: 'Toplama Problemleri',
            content: '"Toplam", "birlikte", "hepsi" toplama gerektirir.',
            visual: '12 elma + 8 elma = 20 elma',
            audio: 'Birleştirme, ekleme = toplama!',
            example: { question: '25 kırmızı, 17 mavi top. Toplam?', answer: '42', explanation: '25 + 17 = 42!' }
          },
          {
            title: 'Çıkarma Problemleri',
            content: '"Kalan", "fark", "eksilen" çıkarma gerektirir.',
            visual: '30 kuş - 12 uçtu = 18 kaldı',
            audio: 'Azalma, ayırma = çıkarma!',
            example: { question: '45 TL\'den 20 TL harcadın. Kalan?', answer: '25 TL', explanation: '45 - 20 = 25!' }
          },
          {
            title: 'İki İşlemli Problemler',
            content: 'Bazen iki işlem gerekebilir.',
            visual: '10 + 5 - 3 = 15 - 3 = 12',
            audio: 'Önce topla, sonra çıkar (veya tersi).',
            example: { question: '20 aldın, 8 verdin, 5 daha aldın?', answer: '17', explanation: '20 - 8 + 5 = 17!' }
          },
          {
            title: 'Strateji Seçimi',
            content: 'Problem için en uygun yolu seç.',
            visual: '🎯 Sayı doğrusu | 🎯 Parmakla | 🎯 Yazarak',
            audio: 'Farklı problemler farklı stratejiler gerektirir.',
            example: { question: 'Büyük sayılar için en iyi yol?', answer: 'Yazarak çözme', explanation: 'Yazarak hata azalır!' }
          },
          {
            title: 'Sonucu Kontrol',
            content: 'Ters işlemle kontrol et.',
            visual: '15 + 7 = 22 → Kontrol: 22 - 7 = 15 ✓',
            audio: 'Topladıysan çıkararak kontrol et!',
            example: { question: '35 - 12 = 23 kontrolü?', answer: '23 + 12 = 35 ✓', explanation: 'Doğru!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '24 + 18 = ?', options: ['32', '42', '52', '62'], correctAnswer: '42', explanation: '24 + 18 = 42!' },
          { type: 'fill-blank', question: '50 - 23 = ___', correctAnswer: '27', explanation: '50 - 23 = 27!' },
          { type: 'multiple-choice', question: 'Ali 35, Veli 28 misket. Toplam?', options: ['53', '63', '73', '7'], correctAnswer: '63', explanation: '35 + 28 = 63!' },
          { type: 'fill-blank', question: '42 kuştan 17 uçtu. Kalan: ___', correctAnswer: '25', explanation: '42 - 17 = 25!' },
          { type: 'multiple-choice', question: '15 + 20 - 8 = ?', options: ['27', '37', '43', '33'], correctAnswer: '27', explanation: '35 - 8 = 27!' },
          { type: 'fill-blank', question: '60 TL\'den 35 TL harcadın. Kalan: ___', correctAnswer: '25', explanation: '60 - 35 = 25!' },
          { type: 'multiple-choice', question: '38 + 24 = ?', options: ['52', '62', '72', '82'], correctAnswer: '62', explanation: '38 + 24 = 62!' },
          { type: 'fill-blank', question: '100 - 45 = ___', correctAnswer: '55', explanation: '100 - 45 = 55!' },
          { type: 'multiple-choice', question: '"Hepsi" hangi işlemi gerektirir?', options: ['Toplama', 'Çıkarma', 'Çarpma', 'Bölme'], correctAnswer: 'Toplama', explanation: 'Hepsi = toplam!' },
          { type: 'fill-blank', question: '28 + ___ = 50', correctAnswer: '22', explanation: '50 - 28 = 22!' }
        ]
      }
    },
    {
      id: 'carpma-temelleri',
      title: 'Çarpma İşlemi',
      description: 'Tekrarlı toplama olarak çarpma',
      emoji: '✖️',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['çarpma', 'tekrar', 'toplama', 'çarpım'],
      content: {
        introduction: 'Çarpma, aynı sayıyı tekrar tekrar toplamaktır! 3+3+3+3 = 3×4!',
        motivationQuote: 'Çarpma toplamanın kısa yolu! ✖️',
        funFacts: [
          'Çarpım tablosu Babilliler tarafından icat edildi!',
          'Hesap makineleri çarpımı çok hızlı yapar!',
          '9 çarpım tablosunda parmak hilesi var!'
        ],
        steps: [
          {
            title: 'Tekrarlı Toplama',
            content: 'Aynı sayıyı tekrar toplamak = çarpma',
            visual: '2+2+2+2+2 = 2×5 = 10',
            audio: '2\'yi 5 kere topluyoruz: 2×5 = 10!',
            example: { question: '3+3+3 = ?', answer: '3×3 = 9', explanation: '3 tane 3 = 3×3 = 9!' }
          },
          {
            title: 'Çarpma İşareti',
            content: '× işareti çarpma anlamına gelir.',
            visual: '4 × 3 = 12 (Dört kere üç)',
            audio: '4 çarpı 3 eşittir 12!',
            example: { question: '5 × 2 nasıl okunur?', answer: 'Beş kere iki', explanation: '5 çarpı 2 = 10!' }
          },
          {
            title: '2\'nin Katları',
            content: '2, 4, 6, 8, 10, 12, 14, 16, 18, 20...',
            visual: '2×1=2 | 2×2=4 | 2×3=6 | 2×4=8 | 2×5=10',
            audio: 'İkişer atlayarak: 2, 4, 6, 8, 10...',
            example: { question: '2 × 7 = ?', answer: '14', explanation: '2+2+2+2+2+2+2 = 14!' }
          },
          {
            title: '5\'in Katları',
            content: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50...',
            visual: '5×1=5 | 5×2=10 | 5×3=15 | 5×4=20 | 5×5=25',
            audio: 'Beşer atlayarak: 5, 10, 15, 20, 25...',
            example: { question: '5 × 6 = ?', answer: '30', explanation: '5+5+5+5+5+5 = 30!' }
          },
          {
            title: '10\'un Katları',
            content: '10, 20, 30, 40, 50... Sona 0 ekle!',
            visual: '10×3=30 | 10×5=50 | 10×9=90',
            audio: '10 ile çarpmak kolay: sona 0 ekle!',
            example: { question: '10 × 7 = ?', answer: '70', explanation: '7\'nin sonuna 0 ekle = 70!' }
          },
          {
            title: 'Değişme Özelliği',
            content: 'Çarpmada yer değiştirme sonucu değiştirmez.',
            visual: '3 × 4 = 4 × 3 = 12',
            audio: '3 kere 4 de 12, 4 kere 3 de 12!',
            example: { question: '6 × 2 = 2 × ?', answer: '6', explanation: 'Yer değişir: 2 × 6!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '4 + 4 + 4 = ?', options: ['4×2', '4×3', '4×4', '4×5'], correctAnswer: '4×3', explanation: '3 tane 4 = 4×3 = 12!' },
          { type: 'fill-blank', question: '3 × 5 = ___', correctAnswer: '15', explanation: '3×5 = 15!' },
          { type: 'multiple-choice', question: '2 × 8 = ?', options: ['14', '16', '18', '20'], correctAnswer: '16', explanation: '2×8 = 16!' },
          { type: 'fill-blank', question: '5 × 4 = ___', correctAnswer: '20', explanation: '5×4 = 20!' },
          { type: 'multiple-choice', question: '10 × 6 = ?', options: ['16', '60', '66', '100'], correctAnswer: '60', explanation: '10×6 = 60!' },
          { type: 'fill-blank', question: '2 × 9 = ___', correctAnswer: '18', explanation: '2×9 = 18!' },
          { type: 'multiple-choice', question: '5 × 7 = ?', options: ['30', '35', '40', '45'], correctAnswer: '35', explanation: '5×7 = 35!' },
          { type: 'fill-blank', question: '10 × 10 = ___', correctAnswer: '100', explanation: '10×10 = 100!' },
          { type: 'multiple-choice', question: '3 × 4 = 4 × ?', options: ['3', '4', '7', '12'], correctAnswer: '3', explanation: 'Değişme: 4×3!' },
          { type: 'fill-blank', question: '5 + 5 + 5 + 5 = 5 × ___', correctAnswer: '4', explanation: '4 tane 5!' }
        ]
      }
    },
    {
      id: 'bolme-temelleri',
      title: 'Bölme İşlemi',
      description: 'Eşit paylaştırma ve gruplama',
      emoji: '➗',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['bölme', 'paylaştırma', 'gruplama', 'eşit'],
      content: {
        introduction: 'Bölme, eşit paylaştırmaktır! 12 elmayı 3 kişiye paylaştırırsan herkes 4 alır.',
        motivationQuote: 'Paylaşmak güzeldir! ➗',
        funFacts: [
          'Pizza dilimlerken bölme yaparız!',
          'Para paylaşırken bölme kullanırız!',
          'Futbol takımları eşit bölünmüş oyunculardan oluşur!'
        ],
        steps: [
          {
            title: 'Eşit Paylaştırma',
            content: 'Bölme, bir miktarı eşit parçalara ayırmaktır.',
            visual: '12 ÷ 3 = 4 (12 elma 3 kişiye = 4\'er elma)',
            audio: '12 elmayı 3 kişiye eşit paylaştırırsan herkes 4 alır.',
            example: { question: '10 şekeri 2 kişiye?', answer: '5\'er', explanation: '10 ÷ 2 = 5!' }
          },
          {
            title: 'Bölme İşareti',
            content: '÷ işareti bölme anlamına gelir.',
            visual: '20 ÷ 4 = 5 (Yirmi bölü dört)',
            audio: '20 bölü 4 eşittir 5!',
            example: { question: '15 ÷ 3 nasıl okunur?', answer: 'On beş bölü üç', explanation: '15 ÷ 3 = 5!' }
          },
          {
            title: 'Gruplama ile Bölme',
            content: 'Kaç tane grup yapılır?',
            visual: '12 elmayı 4\'erli gruplara ayır = 3 grup',
            audio: '12\'de kaç tane 4 var? 3 tane!',
            example: { question: '20\'de kaç tane 5?', answer: '4', explanation: '20 ÷ 5 = 4 grup!' }
          },
          {
            title: 'Çarpma ile İlişki',
            content: 'Bölme, çarpmanın tersidir.',
            visual: '3 × 4 = 12 ↔ 12 ÷ 4 = 3',
            audio: '3 kere 4 = 12, 12 bölü 4 = 3!',
            example: { question: '5 × 6 = 30 ise 30 ÷ 6 = ?', answer: '5', explanation: 'Çarpmanın tersi!' }
          },
          {
            title: '2 ile Bölme',
            content: 'İkiye bölmek yarıya bölmektir.',
            visual: '10 ÷ 2 = 5 | 16 ÷ 2 = 8 | 20 ÷ 2 = 10',
            audio: '2\'ye bölerken yarısını al!',
            example: { question: '14 ÷ 2 = ?', answer: '7', explanation: '14\'ün yarısı 7!' }
          },
          {
            title: '5 ile Bölme',
            content: '5 ile bölünebilen sayılar 0 veya 5 ile biter.',
            visual: '15 ÷ 5 = 3 | 25 ÷ 5 = 5 | 40 ÷ 5 = 8',
            audio: 'Sonu 0 veya 5 ise 5\'e bölünür!',
            example: { question: '35 ÷ 5 = ?', answer: '7', explanation: '35 ÷ 5 = 7!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '12 ÷ 4 = ?', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: '12 ÷ 4 = 3!' },
          { type: 'fill-blank', question: '20 ÷ 5 = ___', correctAnswer: '4', explanation: '20 ÷ 5 = 4!' },
          { type: 'multiple-choice', question: '18 elma 3 kişiye?', options: ['5\'er', '6\'şar', '7\'şer', '8\'er'], correctAnswer: '6\'şar', explanation: '18 ÷ 3 = 6!' },
          { type: 'fill-blank', question: '16 ÷ 2 = ___', correctAnswer: '8', explanation: '16 ÷ 2 = 8!' },
          { type: 'multiple-choice', question: '30 ÷ 10 = ?', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: '30 ÷ 10 = 3!' },
          { type: 'fill-blank', question: '40 ÷ 5 = ___', correctAnswer: '8', explanation: '40 ÷ 5 = 8!' },
          { type: 'multiple-choice', question: '4 × 5 = 20 ise 20 ÷ 5 = ?', options: ['3', '4', '5', '6'], correctAnswer: '4', explanation: 'Ters işlem: 4!' },
          { type: 'fill-blank', question: '10 ÷ 2 = ___', correctAnswer: '5', explanation: '10\'un yarısı 5!' },
          { type: 'multiple-choice', question: '25 ÷ 5 = ?', options: ['3', '4', '5', '6'], correctAnswer: '5', explanation: '25 ÷ 5 = 5!' },
          { type: 'fill-blank', question: '50 ÷ 10 = ___', correctAnswer: '5', explanation: '50 ÷ 10 = 5!' }
        ]
      }
    },
    {
      id: 'islemler-arasi-iliski',
      title: 'İşlemler Arası İlişki',
      description: 'Dört işlem arasındaki bağlantılar',
      emoji: '🔗',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['ilişki', 'ters işlem', 'kontrol', 'bağlantı'],
      content: {
        introduction: 'Dört işlem birbirine bağlı! Toplama-çıkarma ve çarpma-bölme kardeştir.',
        motivationQuote: 'Bağlantıları gören matematiği kavrar! 🔗',
        funFacts: [
          'Tüm matematik işlemleri birbirine bağlı!',
          'Bilgisayarlar çarpmayı toplamaya çevirir!',
          'Hesap makineleri ters işlemleri kullanır!'
        ],
        steps: [
          {
            title: 'Toplama ↔ Çıkarma',
            content: 'Toplama ve çıkarma ters işlemlerdir.',
            visual: '7 + 5 = 12 ↔ 12 - 5 = 7',
            audio: 'Topladıysan çıkararak, çıkardıysan toplayarak kontrol et!',
            example: { question: '8 + 9 = 17 kontrolü?', answer: '17 - 9 = 8', explanation: 'Çıkararak kontrol!' }
          },
          {
            title: 'Çarpma ↔ Bölme',
            content: 'Çarpma ve bölme ters işlemlerdir.',
            visual: '6 × 4 = 24 ↔ 24 ÷ 4 = 6',
            audio: 'Çarptıysan bölerek, böldüysen çarparak kontrol et!',
            example: { question: '5 × 7 = 35 kontrolü?', answer: '35 ÷ 7 = 5', explanation: 'Bölerek kontrol!' }
          },
          {
            title: 'Çarpma = Tekrarlı Toplama',
            content: 'Çarpma aslında toplama işlemidir.',
            visual: '4 × 3 = 4 + 4 + 4 = 12',
            audio: '4 kere 3 = 4\'ü 3 kere topla!',
            example: { question: '5 × 4 = 5 + 5 + 5 + ?', answer: '5', explanation: '5 + 5 + 5 + 5 = 20!' }
          },
          {
            title: 'Bölme = Tekrarlı Çıkarma',
            content: 'Bölme aslında çıkarma işlemidir.',
            visual: '12 ÷ 3 → 12-3=9, 9-3=6, 6-3=3, 3-3=0 (4 kez)',
            audio: '12\'den 3\'ü kaç kez çıkarabilirsin? 4 kez!',
            example: { question: '15 ÷ 5 kaç kez çıkarma?', answer: '3 kez', explanation: '15-5-5-5=0, 3 kez!' }
          },
          {
            title: 'Sayı Aileleri',
            content: 'Bazı sayılar aile oluşturur.',
            visual: '3, 5, 15: 3×5=15, 5×3=15, 15÷3=5, 15÷5=3',
            audio: '3, 5, 15 bir aile! 4 işlem yapabilirsin.',
            example: { question: '2, 6, 12 ailesi için çarpma?', answer: '2×6=12, 6×2=12', explanation: 'İki çarpma!' }
          },
          {
            title: 'Problem Çözmede Kullanma',
            content: 'Doğru işlemi seç ve ters işlemle kontrol et.',
            visual: '✅ İşlem yap → ✅ Ters işlemle kontrol et',
            audio: 'Her problemi çözdükten sonra kontrol et!',
            example: { question: 'Kontrolün faydası?', answer: 'Hata yakalar', explanation: 'Kontrol hataları önler!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Toplamanın tersi?', options: ['Toplama', 'Çıkarma', 'Çarpma', 'Bölme'], correctAnswer: 'Çıkarma', explanation: 'Çıkarma ters işlem!' },
          { type: 'fill-blank', question: '24 ÷ 6 = 4 kontrolü: 4 × 6 = ___', correctAnswer: '24', explanation: 'Çarparak kontrol!' },
          { type: 'multiple-choice', question: 'Çarpmanın tersi?', options: ['Toplama', 'Çıkarma', 'Çarpma', 'Bölme'], correctAnswer: 'Bölme', explanation: 'Bölme ters işlem!' },
          { type: 'fill-blank', question: '7 × 3 = 7 + 7 + ___', correctAnswer: '7', explanation: '3 tane 7!' },
          { type: 'multiple-choice', question: '8 + 6 = 14 kontrolü?', options: ['14 + 6', '14 - 6', '14 × 6', '14 ÷ 6'], correctAnswer: '14 - 6', explanation: 'Çıkararak kontrol!' },
          { type: 'fill-blank', question: '20 ÷ 4 için tekrarlı çıkarma: ___ kez', correctAnswer: '5', explanation: '20-4-4-4-4-4=0, 5 kez!' },
          { type: 'multiple-choice', question: '2, 8, 16 ailesi için bölme?', options: ['16÷2=8', '16÷4=4', '8÷2=16', '16÷8=16'], correctAnswer: '16÷2=8', explanation: '16÷2=8!' },
          { type: 'fill-blank', question: '45 - 18 = 27 kontrolü: 27 + 18 = ___', correctAnswer: '45', explanation: 'Toplayarak kontrol!' },
          { type: 'multiple-choice', question: '6 × 5 = 5 + 5 + 5 + 5 + 5 + ?', options: ['0', '5', '6', '30'], correctAnswer: '5', explanation: '6 tane 5!' },
          { type: 'fill-blank', question: '3 × 7 = 21 ise 21 ÷ 7 = ___', correctAnswer: '3', explanation: 'Ters işlem: 3!' }
        ]
      }
    },
    {
      id: 'dort-islem-esitlik',
      title: 'Dört İşlemde Eşitlik',
      description: 'Eşit işaretinin anlamı ve kullanımı',
      emoji: '⚖️',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['eşitlik', 'denge', 'bilinmeyen', 'denklem'],
      content: {
        introduction: 'Eşittir işareti iki tarafın dengede olduğunu gösterir. Terazi gibi!',
        motivationQuote: 'Denge matematiğin temelidir! ⚖️',
        funFacts: [
          'Eşittir işareti 1557\'de icat edildi!',
          'Denklem "denge" anlamına gelir!',
          'Bilgisayar programlama da = kullanır!'
        ],
        steps: [
          {
            title: 'Eşitlik Nedir?',
            content: 'Sol ve sağ taraf aynı değere eşit.',
            visual: '3 + 5 = 8 (Sol: 8, Sağ: 8)',
            audio: '3 artı 5 sekiz eder, iki taraf eşit!',
            example: { question: '7 + 4 = 11 doğru mu?', answer: 'Evet', explanation: '7 + 4 = 11 ✓' }
          },
          {
            title: 'Dört İşlemde Eşitlik',
            content: 'Her işlemde = kullanılır.',
            visual: '2+3=5 | 9-4=5 | 5×2=10 | 10÷2=5',
            audio: 'Toplama, çıkarma, çarpma, bölme hepsinde eşitlik var!',
            example: { question: '6 × 3 = ?', answer: '18', explanation: '6 × 3 = 18!' }
          },
          {
            title: 'Bilinmeyen Bulma',
            content: 'Eksik sayıyı bulmak için ters işlem kullan.',
            visual: '__ + 8 = 15 → 15 - 8 = 7 → __ = 7',
            audio: 'Bilinmeyeni bulmak için ters işlem yap!',
            example: { question: '__ × 4 = 20?', answer: '5', explanation: '20 ÷ 4 = 5!' }
          },
          {
            title: 'Farklı Yazımlar',
            content: 'Aynı değer farklı şekillerde yazılabilir.',
            visual: '12 = 6+6 = 3×4 = 24÷2 = 15-3',
            audio: '12\'yi farklı işlemlerle yazabiliriz!',
            example: { question: '20\'yi çarpma olarak yaz', answer: '4×5 veya 2×10', explanation: 'Birçok yol var!' }
          },
          {
            title: 'Dengeyi Koru',
            content: 'İki tarafa aynı işlemi yaparsan denge bozulmaz.',
            visual: '5 = 5 → 5+3 = 5+3 → 8 = 8',
            audio: 'İki tarafa aynı sayıyı ekle, denge kalır!',
            example: { question: '10 = 10 ise 10-4 = ?', answer: '6', explanation: '10-4 = 6, iki taraftan çıkar!' }
          },
          {
            title: 'Problem Çözme',
            content: 'Eşitliği kullanarak problem çöz.',
            visual: '? + 12 = 30 → ? = 30 - 12 = 18',
            audio: 'Bilinmeyeni bul: 30\'dan 12 çıkar = 18!',
            example: { question: '? × 5 = 25?', answer: '5', explanation: '25 ÷ 5 = 5!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '__ + 7 = 15?', options: ['7', '8', '9', '22'], correctAnswer: '8', explanation: '15 - 7 = 8!' },
          { type: 'fill-blank', question: '__ × 3 = 18', correctAnswer: '6', explanation: '18 ÷ 3 = 6!' },
          { type: 'multiple-choice', question: '45 - __ = 20?', options: ['20', '25', '30', '65'], correctAnswer: '25', explanation: '45 - 20 = 25!' },
          { type: 'fill-blank', question: '40 ÷ __ = 8', correctAnswer: '5', explanation: '40 ÷ 8 = 5!' },
          { type: 'multiple-choice', question: '24 farklı yazımı?', options: ['6×4', '20+5', '30-4', '12÷2'], correctAnswer: '6×4', explanation: '6 × 4 = 24!' },
          { type: 'fill-blank', question: '__ - 15 = 35', correctAnswer: '50', explanation: '35 + 15 = 50!' },
          { type: 'multiple-choice', question: '__ ÷ 4 = 7?', options: ['11', '21', '28', '32'], correctAnswer: '28', explanation: '7 × 4 = 28!' },
          { type: 'fill-blank', question: '9 × __ = 36', correctAnswer: '4', explanation: '36 ÷ 9 = 4!' },
          { type: 'multiple-choice', question: '100 = 50 + ?', options: ['25', '50', '75', '150'], correctAnswer: '50', explanation: '100 - 50 = 50!' },
          { type: 'fill-blank', question: '__ + __ = 16 (iki eşit sayı)', correctAnswer: '8', explanation: '8 + 8 = 16!' }
        ]
      }
    },
    {
      id: 'zihinden-islem',
      title: 'Zihinden İşlem',
      description: 'Hızlı hesaplama stratejileri',
      emoji: '🧠',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['zihinden', 'hızlı', 'strateji', 'hesap'],
      content: {
        introduction: 'Yazı yazmadan, kafadan hesap yapabilirsin! Pratikle hızlanırsın.',
        motivationQuote: 'Beynin en güçlü hesap makinesi! 🧠',
        funFacts: [
          'Eski çağlarda hesap makinesi yoktu, herkes zihinden yapardı!',
          'Satranç ustaları 10 hamle öncesini hesaplar!',
          'Abaküs zihinden hesabı kolaylaştırır!'
        ],
        steps: [
          {
            title: '10\'a Tamamlama',
            content: '8 + 5 = 8 + 2 + 3 = 10 + 3 = 13',
            visual: '8 + 5 → 8+2=10, 5-2=3 → 10+3 = 13',
            audio: 'Önce 10\'a tamamla, sonra kalanı ekle!',
            example: { question: '7 + 6 =?', answer: '13', explanation: '7+3=10, 10+3=13!' }
          },
          {
            title: 'Yakın Sayılarla',
            content: '49 + 23 ≈ 50 + 23 - 1 = 72',
            visual: '49 ≈ 50 → 50+23=73, 73-1=72',
            audio: '49\'u 50 yap, sonra 1 çıkar!',
            example: { question: '98 + 15 =?', answer: '113', explanation: '100+15=115, 115-2=113!' }
          },
          {
            title: 'Kolay Çıkarma',
            content: '53 - 28 = 53 - 30 + 2 = 25',
            visual: '53 - 28 → 53-30=23, 23+2=25',
            audio: '30 çıkar, 2 geri ekle!',
            example: { question: '72 - 19 =?', answer: '53', explanation: '72-20=52, 52+1=53!' }
          },
          {
            title: 'Çarpma Hileleri',
            content: '5 ile çarp = 10\'a bölüp 10 ile çarp',
            visual: '14 × 5 = 14 × 10 ÷ 2 = 140 ÷ 2 = 70',
            audio: '10 ile çarp kolay, yarısını al!',
            example: { question: '16 × 5 =?', answer: '80', explanation: '160 ÷ 2 = 80!' }
          },
          {
            title: 'Bölme Hileleri',
            content: '2\'ye bölmek = yarısını almak',
            visual: '48 ÷ 2 = 24 (yarısı)',
            audio: 'Çift sayının yarısını al!',
            example: { question: '64 ÷ 2 =?', answer: '32', explanation: '64\'ün yarısı 32!' }
          },
          {
            title: 'Pratik Yap!',
            content: 'Her gün birkaç hesap yap, hızlanırsın!',
            visual: '🎯 Günde 10 hesap yap!',
            audio: 'Pratik mükemmelleştirir!',
            example: { question: 'Hızlanmak için?', answer: 'Pratik yap', explanation: 'Günlük pratik şart!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '9 + 7 (10\'a tamamla)?', options: ['14', '15', '16', '17'], correctAnswer: '16', explanation: '9+1=10, 10+6=16!' },
          { type: 'fill-blank', question: '48 + 35 = ___', correctAnswer: '83', explanation: '50+35=85, 85-2=83!' },
          { type: 'multiple-choice', question: '65 - 28 =?', options: ['33', '37', '43', '47'], correctAnswer: '37', explanation: '65-30=35, 35+2=37!' },
          { type: 'fill-blank', question: '15 × 5 = ___', correctAnswer: '75', explanation: '150 ÷ 2 = 75!' },
          { type: 'multiple-choice', question: '84 ÷ 2 =?', options: ['32', '42', '44', '52'], correctAnswer: '42', explanation: '84\'ün yarısı 42!' },
          { type: 'fill-blank', question: '99 + 7 = ___', correctAnswer: '106', explanation: '100+7=107, 107-1=106!' },
          { type: 'multiple-choice', question: '52 - 17 =?', options: ['25', '35', '45', '69'], correctAnswer: '35', explanation: '52-20=32, 32+3=35!' },
          { type: 'fill-blank', question: '25 × 4 = ___', correctAnswer: '100', explanation: '25×4 = 100!' },
          { type: 'multiple-choice', question: '70 ÷ 2 =?', options: ['30', '35', '40', '45'], correctAnswer: '35', explanation: '70\'in yarısı 35!' },
          { type: 'fill-blank', question: '8 + 6 + 4 = ___', correctAnswer: '18', explanation: '8+6=14, 14+4=18!' }
        ]
      }
    }
  ]
};
