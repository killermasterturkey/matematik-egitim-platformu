// 3. SINIF - 3. TEMA: İŞLEMLERDEN CEBİRSEL DÜŞÜNMEYE
import { Theme } from '../../types';

export const tema3: Theme = {
  id: 'islemlerden-cebirsel-dusunmeye',
  title: 'İşlemlerden Cebirsel Düşünmeye',
  description: 'Dört işlem, problem çözme ve eşitlik kavramı!',
  emoji: '🧮',
  color: 'from-orange-400 to-amber-500',
  bgColor: 'bg-orange-50',
  borderColor: 'border-orange-200',
  textColor: 'text-orange-600',
  hours: 55,
  objectives: [
    'Toplama ve çıkarma işlemlerinde muhakeme',
    'Çarpma ve bölme işlemlerini anlama',
    'Günlük yaşam problemleri çözme',
    'Problem yapılandırma',
    'Eşitlik kavramını yorumlama'
  ],
  keywords: ['Toplama', 'Çıkarma', 'Çarpma', 'Bölme', 'Eşitlik', 'Problem', 'Strateji'],
  generalizations: [
    'Dört işlem arasında ilişkiler vardır.',
    'Problemler farklı stratejilerle çözülebilir.',
    'Eşitlik, iki tarafın denk olduğunu gösterir.'
  ],
  topics: [
    {
      id: 'toplama-cikarma-muhakeme',
      title: 'Toplama ve Çıkarmada Muhakeme',
      description: 'Zihinden işlem ve tahmin',
      emoji: '🧠',
      duration: '50 dk',
      difficulty: 2,
      keywords: ['toplama', 'çıkarma', 'tahmin', 'zihinden', 'muhakeme'],
      content: {
        introduction: 'Toplama ve çıkarma sonuçlarını tahmin etmeyi ve zihinden hesaplamayı öğreneceksin!',
        motivationQuote: 'Düşün, tahmin et, hesapla! 🧠',
        funFacts: [
          'Matematikçiler zihinden çok hızlı hesaplar!',
          'Beyin en hızlı hesap makinesidir!',
          'Tahmin yapmak beyni güçlendirir!'
        ],
        steps: [
          {
            title: 'Yuvarlayarak Tahmin',
            content: 'Sayıları yuvarlak sayılara yuvarla, sonucu tahmin et.',
            visual: '48 + 53 ≈ 50 + 50 = 100',
            audio: 'Kırk sekiz yaklaşık elli, elli üç yaklaşık elli!',
            example: { question: '97 + 104 yaklaşık?', answer: '≈ 200', explanation: '100 + 100 = 200!' }
          },
          {
            title: 'Zihinden Toplama',
            content: 'Kolay sayılara ayırarak topla.',
            visual: '67 + 25 = 67 + 20 + 5 = 87 + 5 = 92',
            audio: 'Önce yirmiyi ekle, sonra beşi ekle!',
            example: { question: '45 + 38 = ?', answer: '83', explanation: '45 + 40 - 2 = 83!' }
          },
          {
            title: 'Zihinden Çıkarma',
            content: 'Kolay sayılara ayırarak çıkar.',
            visual: '73 - 28 = 73 - 30 + 2 = 43 + 2 = 45',
            audio: 'Otuz çıkar, iki ekle!',
            example: { question: '82 - 35 = ?', answer: '47', explanation: '82 - 30 - 5 = 47!' }
          },
          {
            title: 'Toplama-Çıkarma İlişkisi',
            content: 'Toplama ve çıkarma birbirinin tersidir.',
            visual: '25 + 17 = 42 ⟺ 42 - 17 = 25',
            audio: 'Topladığını çıkarırsan başa dönersin!',
            example: { question: '56 + 24 = 80 ise 80 - 24 = ?', answer: '56', explanation: 'Ters işlem!' }
          },
          {
            title: 'Sonucu Kontrol',
            content: 'Ters işlemle sonucu kontrol et.',
            visual: '125 + 75 = 200 → Kontrol: 200 - 75 = 125 ✓',
            audio: 'Çıkararak kontrol et!',
            example: { question: '340 - 120 = 220. Nasıl kontrol edersin?', answer: '220 + 120 = 340', explanation: 'Toplama ile kontrol!' }
          },
          {
            title: 'Strateji Seçme',
            content: 'En uygun stratejiyi seç.',
            visual: '99 + 67 = 100 + 67 - 1 = 166',
            audio: 'Doksan dokuz yerine yüz kullan, bir çıkar!',
            example: { question: '198 + 45 için strateji?', answer: '200 + 45 - 2 = 243', explanation: '200e tamamla!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '47 + 55 yaklaşık?', options: ['90', '100', '110', '120'], correctAnswer: '100', explanation: '50 + 50 = 100!' },
          { type: 'fill-blank', question: '68 + 27 = ___', correctAnswer: '95', explanation: '68 + 30 - 3 = 95!' },
          { type: 'multiple-choice', question: '93 - 48 yaklaşık?', options: ['35', '45', '55', '65'], correctAnswer: '45', explanation: '90 - 50 = 40, ≈ 45!' },
          { type: 'fill-blank', question: '156 - 78 = ___', correctAnswer: '78', explanation: '156 - 80 + 2 = 78!' },
          { type: 'multiple-choice', question: '75 + 45 = 120 ise 120 - 45 = ?', options: ['75', '45', '30', '165'], correctAnswer: '75', explanation: 'Ters işlem!' },
          { type: 'fill-blank', question: '99 + 56 = 100 + 56 - 1 = ___', correctAnswer: '155', explanation: '156 - 1 = 155!' },
          { type: 'multiple-choice', question: 'Hangi strateji daha kolay? 48 + 52', options: ['Direkt topla', '50 + 50', '40 + 60', '48 + 50 + 2'], correctAnswer: '50 + 50', explanation: 'Her iki sayı da 50ye yakın!' },
          { type: 'fill-blank', question: '234 + 166 = ___', correctAnswer: '400', explanation: '234 + 166 = 400!' },
          { type: 'multiple-choice', question: '500 - 235 = ?', options: ['265', '275', '285', '295'], correctAnswer: '265', explanation: '500 - 235 = 265!' },
          { type: 'fill-blank', question: '187 + ___ = 300', correctAnswer: '113', explanation: '300 - 187 = 113!' }
        ]
      }
    },
    {
      id: 'toplama-cikarma-cozumleme',
      title: 'Toplama ve Çıkarma Çözümleme',
      description: 'İşlem stratejileri ve adımlar',
      emoji: '📝',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['toplama', 'çıkarma', 'strateji', 'çözümleme', 'eldeli'],
      content: {
        introduction: 'Toplama ve çıkarma işlemlerini adım adım çözmeyi öğreneceksin!',
        motivationQuote: 'Adım adım hedefe ulaş! 📝',
        funFacts: [
          'Eski çağlarda abaküsle hesaplanırdı!',
          'İlk hesap makinesi 1600\'lerde yapıldı!',
          'Toplama en temel matematiksel işlem!'
        ],
        steps: [
          {
            title: 'Alt Alta Toplama',
            content: 'Sayıları basamak değerlerine göre alt alta yaz.',
            visual: '  345\\n+ 267\\n-----\\n  612',
            audio: 'Birler, onlar, yüzler alt alta!',
            example: { question: '234 + 158 = ?', answer: '392', explanation: 'Alt alta yaz ve topla!' }
          },
          {
            title: 'Eldeli Toplama',
            content: 'Toplam 10 veya daha fazlaysa elde var.',
            visual: '  ¹\\n  58\\n+ 67\\n----\\n 125',
            audio: 'Sekiz artı yedi on beş, beş yaz bir elde!',
            example: { question: '89 + 45 = ?', answer: '134', explanation: '9+5=14, elde 1, 8+4+1=13!' }
          },
          {
            title: 'Alt Alta Çıkarma',
            content: 'Büyük sayı üstte, küçük sayı altta.',
            visual: '  456\\n- 123\\n-----\\n  333',
            audio: 'Altı eksi üç = üç, beş eksi iki = üç...',
            example: { question: '567 - 234 = ?', answer: '333', explanation: 'Alt alta yaz ve çıkar!' }
          },
          {
            title: 'Onluk Bozdurma',
            content: 'Üstteki sayı küçükse onluktan bozdur.',
            visual: '  4¹6\\n-  28\\n-----\\n   18',
            audio: 'Altı eksi sekiz yapamam, onluktan bozdur!',
            example: { question: '52 - 38 = ?', answer: '14', explanation: '12 - 8 = 4, 4 - 3 = 1!' }
          },
          {
            title: 'Yüzlük Bozdurma',
            content: 'Gerekirse yüzlükten de bozdur.',
            visual: '  3⁰¹⁰\\n-  145\\n------\\n   165',
            audio: 'Yüzlükten onluğa, onluktan birliğe bozdur!',
            example: { question: '400 - 175 = ?', answer: '225', explanation: '10-5=5, 9-7=2, 3-1=2!' }
          },
          {
            title: 'Kontrol Etme',
            content: 'Sonucu ters işlemle kontrol et.',
            visual: '333 + 123 = 456 ✓',
            audio: 'Çıkardığımızı toplarsak orijinal sayıyı bulmalıyız!',
            example: { question: '525 - 178 = 347. Kontrol?', answer: '347 + 178 = 525 ✓', explanation: 'Toplama ile kontrol!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '267 + 345 = ?', options: ['612', '602', '512', '622'], correctAnswer: '612', explanation: '7+5=12, 6+4+1=11, 2+3+1=6!' },
          { type: 'fill-blank', question: '438 - 259 = ___', correctAnswer: '179', explanation: 'Bozdurarak çıkar!' },
          { type: 'multiple-choice', question: '599 + 234 = ?', options: ['733', '823', '833', '843'], correctAnswer: '833', explanation: '9+4=13, 9+3+1=13, 5+2+1=8!' },
          { type: 'fill-blank', question: '700 - 456 = ___', correctAnswer: '244', explanation: 'Yüzlükten bozdur!' },
          { type: 'multiple-choice', question: '389 + 111 = ?', options: ['400', '490', '500', '510'], correctAnswer: '500', explanation: '389 + 111 = 500!' },
          { type: 'fill-blank', question: '812 - 367 = ___', correctAnswer: '445', explanation: 'Adım adım çıkar!' },
          { type: 'multiple-choice', question: 'Hangisinde elde var?', options: ['23 + 15', '45 + 32', '58 + 36', '71 + 12'], correctAnswer: '58 + 36', explanation: '8 + 6 = 14, elde 1!' },
          { type: 'fill-blank', question: '1000 - 573 = ___', correctAnswer: '427', explanation: '10-3=7, 9-7=2, 9-5=4!' },
          { type: 'multiple-choice', question: '456 - 289 kontrolü?', options: ['456 + 289', '167 + 289', '289 - 167', '456 - 167'], correctAnswer: '167 + 289', explanation: 'Sonuç + çıkan = ilk sayı!' },
          { type: 'fill-blank', question: '375 + 625 = ___', correctAnswer: '1000', explanation: '375 + 625 = 1000!' }
        ]
      }
    },
    {
      id: 'carpma-bolme-muhakeme',
      title: 'Çarpma ve Bölmede Muhakeme',
      description: 'Çarpma ve bölme ilişkileri',
      emoji: '✖️',
      duration: '50 dk',
      difficulty: 2,
      keywords: ['çarpma', 'bölme', 'tahmin', 'ilişki', 'muhakeme'],
      content: {
        introduction: 'Çarpma ve bölme arasındaki ilişkileri keşfedecek ve muhakeme yapacaksın!',
        motivationQuote: 'Çarp ya da böl, sonucu bul! ✖️',
        funFacts: [
          'Çarpma hızlı toplamadır!',
          'Bölme eşit paylaşmaktır!',
          'Çarpma tablosu 4000 yıldır kullanılıyor!'
        ],
        steps: [
          {
            title: 'Çarpma Nedir?',
            content: 'Tekrarlı toplama işlemidir.',
            visual: '4 × 3 = 3 + 3 + 3 + 3 = 12',
            audio: 'Dört kere üç eşittir on iki!',
            example: { question: '5 × 6 = ?', answer: '30', explanation: '6 + 6 + 6 + 6 + 6 = 30!' }
          },
          {
            title: 'Çarpma Tablosu',
            content: '1den 10a kadar çarpımları ezberle.',
            visual: '7 × 8 = 56 | 9 × 6 = 54',
            audio: 'Yedi kere sekiz elli altı!',
            example: { question: '8 × 7 = ?', answer: '56', explanation: 'Çarpma tablosundan!' }
          },
          {
            title: 'Bölme Nedir?',
            content: 'Eşit gruplara ayırma işlemidir.',
            visual: '12 ÷ 3 = 4 (12 nesne 3 gruba)',
            audio: 'On iki bölü üç eşittir dört!',
            example: { question: '20 ÷ 5 = ?', answer: '4', explanation: '20 nesne 5 gruba = her grupta 4!' }
          },
          {
            title: 'Çarpma-Bölme İlişkisi',
            content: 'Çarpma ve bölme birbirinin tersidir.',
            visual: '6 × 8 = 48 ⟺ 48 ÷ 8 = 6',
            audio: 'Çarptığını bölersen başa dönersin!',
            example: { question: '7 × 9 = 63 ise 63 ÷ 7 = ?', answer: '9', explanation: 'Ters işlem!' }
          },
          {
            title: 'Tahmin Yapma',
            content: 'Sonucu tahmin et, sonra hesapla.',
            visual: '8 × 12 ≈ 8 × 10 = 80, gerçek: 96',
            audio: 'Sekiz kere on yaklaşık seksen, gerçek doksan altı!',
            example: { question: '7 × 11 yaklaşık?', answer: '≈ 70', explanation: '7 × 10 = 70, gerçek 77!' }
          },
          {
            title: 'Kontrol Etme',
            content: 'Bölme sonucunu çarpma ile kontrol et.',
            visual: '56 ÷ 7 = 8 → Kontrol: 8 × 7 = 56 ✓',
            audio: 'Sekiz kere yedi elli altı, doğru!',
            example: { question: '45 ÷ 9 = 5 kontrolü?', answer: '5 × 9 = 45 ✓', explanation: 'Çarpma ile kontrol!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '6 × 7 = ?', options: ['36', '42', '48', '49'], correctAnswer: '42', explanation: 'Altı kere yedi kırk iki!' },
          { type: 'fill-blank', question: '72 ÷ 8 = ___', correctAnswer: '9', explanation: 'Sekiz kere dokuz = 72!' },
          { type: 'multiple-choice', question: '9 × 8 = 72 ise 72 ÷ 9 = ?', options: ['7', '8', '9', '10'], correctAnswer: '8', explanation: 'Ters işlem!' },
          { type: 'fill-blank', question: '5 × ___ = 45', correctAnswer: '9', explanation: '45 ÷ 5 = 9!' },
          { type: 'multiple-choice', question: '56 ÷ 7 = ?', options: ['6', '7', '8', '9'], correctAnswer: '8', explanation: 'Yedi kere sekiz = 56!' },
          { type: 'fill-blank', question: '8 × 8 = ___', correctAnswer: '64', explanation: 'Sekiz kare = 64!' },
          { type: 'multiple-choice', question: '63 ÷ 9 kontrolü?', options: ['9 × 7', '7 + 9', '63 - 9', '9 ÷ 7'], correctAnswer: '9 × 7', explanation: '7 × 9 = 63!' },
          { type: 'fill-blank', question: '___ × 6 = 54', correctAnswer: '9', explanation: '54 ÷ 6 = 9!' },
          { type: 'multiple-choice', question: '7 × 12 yaklaşık?', options: ['70', '80', '84', '90'], correctAnswer: '84', explanation: '7 × 12 = 84 (tam değer)!' },
          { type: 'fill-blank', question: '81 ÷ 9 = ___', correctAnswer: '9', explanation: 'Dokuz kere dokuz = 81!' }
        ]
      }
    },
    {
      id: 'carpma-bolme-cozumleme',
      title: 'Çarpma ve Bölme Çözümleme',
      description: 'İşlem stratejileri',
      emoji: '➗',
      duration: '45 dk',
      difficulty: 3,
      keywords: ['çarpma', 'bölme', 'strateji', 'çözümleme', 'kalan'],
      content: {
        introduction: 'Çarpma ve bölme işlemlerini adım adım çözmeyi öğreneceksin!',
        motivationQuote: 'Stratejiyle her işlem kolay! ➗',
        funFacts: [
          'Bölme en zor dört işlem kabul edilir!',
          'Eski Mısırlılar farklı bölme yöntemi kullanırdı!',
          'Kalanlı bölme gerçek hayatta çok kullanılır!'
        ],
        steps: [
          {
            title: 'Çarpma Stratejileri',
            content: 'Sayıyı parçalara ayırarak çarp.',
            visual: '14 × 3 = (10 × 3) + (4 × 3) = 30 + 12 = 42',
            audio: 'On üç otuz, dört üç on iki, toplam kırk iki!',
            example: { question: '15 × 4 = ?', answer: '60', explanation: '10×4 + 5×4 = 40 + 20 = 60!' }
          },
          {
            title: 'İki Basamaklı Çarpma',
            content: 'Çarpanı parçalara ayır.',
            visual: '23 × 4 = 20×4 + 3×4 = 80 + 12 = 92',
            audio: 'Yirmi dört seksen, üç dört on iki, toplam doksan iki!',
            example: { question: '34 × 5 = ?', answer: '170', explanation: '30×5 + 4×5 = 150 + 20 = 170!' }
          },
          {
            title: 'Basit Bölme',
            content: 'Böleni kaç kez çarparsak bölünene ulaşırız?',
            visual: '36 ÷ 4 = ? → 4 × 9 = 36 → Cevap: 9',
            audio: 'Dört kaç kere otuz altı eder? Dokuz kere!',
            example: { question: '48 ÷ 6 = ?', answer: '8', explanation: '6 × 8 = 48!' }
          },
          {
            title: 'Kalanlı Bölme',
            content: 'Tam bölünmezse kalan vardır.',
            visual: '17 ÷ 5 = 3 kalan 2 (5×3=15, 17-15=2)',
            audio: 'On yedi bölü beş = üç, kalan iki!',
            example: { question: '23 ÷ 4 = ?', answer: '5 kalan 3', explanation: '4×5=20, 23-20=3!' }
          },
          {
            title: 'Kalan Kontrolü',
            content: 'Bölüm × Bölen + Kalan = Bölünen',
            visual: '17 ÷ 5 = 3 kalan 2 → 3×5 + 2 = 15 + 2 = 17 ✓',
            audio: 'Üç kere beş artı iki = on yedi, doğru!',
            example: { question: '29 ÷ 6 = 4 kalan 5 kontrolü?', answer: '4×6 + 5 = 29 ✓', explanation: '24 + 5 = 29!' }
          },
          {
            title: 'Büyük Sayılarla Bölme',
            content: 'Adım adım böl.',
            visual: '84 ÷ 7 = ? → 7×10=70, 7×12=84 → Cevap: 12',
            audio: 'Yedi on yetmiş, yedi on iki seksen dört!',
            example: { question: '96 ÷ 8 = ?', answer: '12', explanation: '8 × 12 = 96!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '25 × 4 = ?', options: ['90', '100', '110', '120'], correctAnswer: '100', explanation: '25 × 4 = 100!' },
          { type: 'fill-blank', question: '56 ÷ 7 = ___', correctAnswer: '8', explanation: '7 × 8 = 56!' },
          { type: 'multiple-choice', question: '17 ÷ 3 = ?', options: ['5 kalan 1', '5 kalan 2', '6 kalan 1', '6 kalan 2'], correctAnswer: '5 kalan 2', explanation: '3×5=15, 17-15=2!' },
          { type: 'fill-blank', question: '36 × 2 = ___', correctAnswer: '72', explanation: '30×2 + 6×2 = 60 + 12 = 72!' },
          { type: 'multiple-choice', question: '45 ÷ 6 kalan?', options: ['1', '2', '3', '4'], correctAnswer: '3', explanation: '6×7=42, 45-42=3!' },
          { type: 'fill-blank', question: '48 ÷ 5 = ___ kalan ___', correctAnswer: '9 kalan 3', explanation: '5×9=45, 48-45=3!' },
          { type: 'multiple-choice', question: '23 × 3 = ?', options: ['66', '69', '72', '75'], correctAnswer: '69', explanation: '20×3 + 3×3 = 60 + 9 = 69!' },
          { type: 'fill-blank', question: '100 ÷ 8 = ___ kalan ___', correctAnswer: '12 kalan 4', explanation: '8×12=96, 100-96=4!' },
          { type: 'multiple-choice', question: '34 ÷ 7 = 4 kalan 6 kontrolü?', options: ['4×6+7=34', '4×7+6=34', '7×6+4=34', '6×4+7=34'], correctAnswer: '4×7+6=34', explanation: '28 + 6 = 34!' },
          { type: 'fill-blank', question: '75 ÷ 9 = ___ kalan ___', correctAnswer: '8 kalan 3', explanation: '9×8=72, 75-72=3!' }
        ]
      }
    },
    {
      id: 'gunluk-yasam-problemleri',
      title: 'Günlük Yaşam Problemleri',
      description: 'Dört işlem gerektiren problemler',
      emoji: '🏪',
      duration: '50 dk',
      difficulty: 3,
      keywords: ['problem', 'günlük yaşam', 'strateji', 'çözüm', 'dört işlem'],
      content: {
        introduction: 'Günlük hayattan problemleri çözmeyi öğreneceksin!',
        motivationQuote: 'Matematik her yerde! 🏪',
        funFacts: [
          'Market alışverişi matematiktir!',
          'Zaman planlaması problem çözmedir!',
          'Mutfakta bile matematik kullanılır!'
        ],
        steps: [
          {
            title: 'Problemi Anlama',
            content: 'Verilen ve istenen bilgiyi bul.',
            visual: 'Verilen: 24 elma, 6 sepet | İstenen: Her sepette kaç elma?',
            audio: 'Ne verilmiş, ne isteniyor?',
            example: { question: '35 TL ile 7 TL\'lik kalem alınır. Kaç kalem?', answer: '5 kalem', explanation: 'Verilen: 35 TL, 7 TL. İstenen: kaç kalem?' }
          },
          {
            title: 'İşlemi Belirleme',
            content: 'Hangi işlem gerektiğini bul.',
            visual: 'Paylaştırma → Bölme | Birleştirme → Toplama',
            audio: 'Eşit paylaşmak = bölme!',
            example: { question: '8 kutu, her kutuda 12 kalem. Toplam?', answer: 'Çarpma: 8×12=96', explanation: 'Grupları birleştir = çarpma!' }
          },
          {
            title: 'Çözüm Stratejisi',
            content: 'Adım adım çöz.',
            visual: '1) Anla 2) Plan yap 3) Çöz 4) Kontrol et',
            audio: 'Dört adımda problem çöz!',
            example: { question: '120 sayfa kitap, günde 15 sayfa. Kaç günde biter?', answer: '120÷15=8 gün', explanation: 'Bölme problemi!' }
          },
          {
            title: 'İki İşlemli Problemler',
            content: 'Bazen iki işlem gerekir.',
            visual: '5 paket, her pakette 8 kalem. 3 kalem kayıp. Kalan?',
            audio: 'Önce çarp, sonra çıkar!',
            example: { question: 'Çözüm?', answer: '5×8-3 = 40-3 = 37', explanation: 'Çarpma + Çıkarma!' }
          },
          {
            title: 'Sonucu Yorumlama',
            content: 'Sonucun anlamlı olup olmadığını kontrol et.',
            visual: '13 çocuk, 4 kişilik arabalar. Kaç araba? 13÷4=3 kalan 1 → 4 araba!',
            audio: 'Kalan 1 çocuk için de araba lazım!',
            example: { question: '25 kişi 6 kişilik masalara oturuyor. Kaç masa?', answer: '5 masa (25÷6=4 kalan 1, +1)', explanation: 'Kalanlar için de masa lazım!' }
          },
          {
            title: 'Kontrol Etme',
            content: 'Çözümün doğru olup olmadığını kontrol et.',
            visual: '5×8=40, 40-3=37 kalem ✓',
            audio: 'İşlemi tersinden kontrol et!',
            example: { question: '8 gün × 15 sayfa = ?', answer: '120 sayfa ✓', explanation: 'Kontrol: doğru!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '72 top, 8 kutu. Her kutuda kaç top?', options: ['7', '8', '9', '10'], correctAnswer: '9', explanation: '72 ÷ 8 = 9!' },
          { type: 'fill-blank', question: '15 TL + 25 TL - 12 TL = ___ TL', correctAnswer: '28', explanation: '40 - 12 = 28!' },
          { type: 'multiple-choice', question: '6 sepet, her sepette 9 elma. Toplam?', options: ['48', '54', '63', '72'], correctAnswer: '54', explanation: '6 × 9 = 54!' },
          { type: 'fill-blank', question: '100 TL ile 8 TL\'lik kitap alınca para üstü = ___', correctAnswer: '92', explanation: '100 - 8 = 92!' },
          { type: 'multiple-choice', question: '45 öğrenci, 9 kişilik gruplar. Kaç grup?', options: ['4', '5', '6', '7'], correctAnswer: '5', explanation: '45 ÷ 9 = 5!' },
          { type: 'fill-blank', question: '4 paket bisküvi, her pakette 12 tane. 5 tane yedim. Kalan = ___', correctAnswer: '43', explanation: '4×12 - 5 = 48 - 5 = 43!' },
          { type: 'multiple-choice', question: '20 kişi, 3 kişilik arabalar. En az kaç araba?', options: ['5', '6', '7', '8'], correctAnswer: '7', explanation: '20÷3=6 kalan 2, +1 = 7!' },
          { type: 'fill-blank', question: '7 kutu × 8 kalem = ___ kalem', correctAnswer: '56', explanation: '7 × 8 = 56!' },
          { type: 'multiple-choice', question: '50 TL - 15 TL - 20 TL = ?', options: ['5 TL', '10 TL', '15 TL', '20 TL'], correctAnswer: '15 TL', explanation: '50 - 35 = 15!' },
          { type: 'fill-blank', question: '3 kat, her katta 12 daire. Toplam ___ daire', correctAnswer: '36', explanation: '3 × 12 = 36!' }
        ]
      }
    },
    {
      id: 'problem-yapilandirma',
      title: 'Problem Yapılandırma',
      description: 'Kendi problemini kur',
      emoji: '✏️',
      duration: '40 dk',
      difficulty: 3,
      keywords: ['problem kurma', 'yapılandırma', 'değişken', 'yaratıcılık'],
      content: {
        introduction: 'Kendi matematik problemlerini oluşturmayı öğreneceksin!',
        motivationQuote: 'Problem çözen, problem de kurar! ✏️',
        funFacts: [
          'Matematik problemleri yüzyıllardır yazılıyor!',
          'Öğretmenler de problem kurar!',
          'İyi problem, iyi düşünme demek!'
        ],
        steps: [
          {
            title: 'Değişkenleri Belirleme',
            content: 'Problemdeki sayıları ve nesneleri belirle.',
            visual: 'Değişkenler: 24 elma, 6 çocuk',
            audio: 'Sayılar ve nesneler değişkenler!',
            example: { question: '8 ve 5 ile problem kur', answer: '8 kitabım var, 5 tane daha aldım. Kaç kitabım oldu?', explanation: 'Değişkenler: 8 ve 5!' }
          },
          {
            title: 'İlişki Kurma',
            content: 'Değişkenler arasındaki ilişkiyi belirle.',
            visual: '24 elma, 6 çocuk → Paylaştırma → Bölme',
            audio: 'Elmalar çocuklara paylaştırılıyor!',
            example: { question: '12 ve 4 için ilişki?', answer: '12 kurabiye 4 çocuğa paylaşılırsa...', explanation: 'Bölme ilişkisi!' }
          },
          {
            title: 'Problem Cümlesi Yazma',
            content: 'Anlaşılır ve mantıklı bir cümle yaz.',
            visual: '"24 elmayı 6 çocuğa eşit paylaştırırsak her çocuğa kaç elma düşer?"',
            audio: 'Soru açık ve net olmalı!',
            example: { question: 'Çarpma problemi yaz', answer: '7 torbada 8er portakal var. Toplam kaç portakal?', explanation: '7 × 8 problemi!' }
          },
          {
            title: 'Problemi Kontrol Etme',
            content: 'Problem çözülebilir mi? Mantıklı mı?',
            visual: 'Kontrol: Veriler yeterli mi? Soru anlaşılır mı?',
            audio: 'Problemi başkasına sor, anlıyor mu?',
            example: { question: 'Eksik veri örneği?', answer: '"Kaç top aldı?" - Ücret belli değil!', explanation: 'Veri eksik, çözülemez!' }
          },
          {
            title: 'Farklı İşlemler için Problem',
            content: 'Aynı sayılarla farklı işlem problemleri kur.',
            visual: '12 ve 3: Toplama (12+3), Çıkarma (12-3), Çarpma (12×3), Bölme (12÷3)',
            audio: 'Dört farklı problem kurulabilir!',
            example: { question: '20 ve 4 ile bölme problemi', answer: '20 şeker 4 çocuğa paylaşılırsa...', explanation: '20 ÷ 4 = 5!' }
          },
          {
            title: 'Problemi Sunma',
            content: 'Problemini arkadaşlarına sun, çözmelerini iste.',
            visual: '🎤 "Problemimi çözer misiniz?"',
            audio: 'Kendi problemini sun ve tartış!',
            example: { question: 'Sunumda ne söylersin?', answer: 'Problemi oku, çözüm için zaman ver, cevabı kontrol et', explanation: 'Adım adım sunum!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '6 ve 7 ile toplama problemi?', options: ['6 ÷ 7', '6 × 7', '6 + 7', '6 - 7'], correctAnswer: '6 + 7', explanation: '6 + 7 = 13 toplama problemi!' },
          { type: 'fill-blank', question: '"15 kişi 3 gruba eşit dağılırsa..." işlem: ___', correctAnswer: 'bölme', explanation: '15 ÷ 3 = 5!' },
          { type: 'multiple-choice', question: 'Hangisi çarpma problemi?', options: ['25 TL - 10 TL', '4 kutu × 6 kalem', '30 ÷ 5', '12 + 8'], correctAnswer: '4 kutu × 6 kalem', explanation: '4 × 6 = 24!' },
          { type: 'fill-blank', question: '8 ve 5 ile çıkarma problemi cevabı: ___', correctAnswer: '3', explanation: '8 - 5 = 3!' },
          { type: 'multiple-choice', question: 'Problem için gerekli değil?', options: ['Sayılar', 'Soru', 'Çözüm', 'Renk'], correctAnswer: 'Renk', explanation: 'Renk problem için gerekli değil!' },
          { type: 'fill-blank', question: '"24 kalem 8 çocuğa paylaşılırsa..." cevap: ___', correctAnswer: '3', explanation: '24 ÷ 8 = 3!' },
          { type: 'multiple-choice', question: 'Hangisi eksik veri içerir?', options: ['5+3 kaç?', 'Kaç TL aldı?', '12÷4 kaç?', '6×7 kaç?'], correctAnswer: 'Kaç TL aldı?', explanation: 'Ne aldığı belli değil!' },
          { type: 'fill-blank', question: '9 × 4 için problem: "9 kutuda ___er elma..."', correctAnswer: '4', explanation: '9 × 4 = 36!' },
          { type: 'multiple-choice', question: 'İyi problem özelliği?', options: ['Uzun olmalı', 'Çözülebilir olmalı', 'Zor olmalı', 'Resimli olmalı'], correctAnswer: 'Çözülebilir olmalı', explanation: 'Problem çözülebilir olmalı!' },
          { type: 'fill-blank', question: '50 - 15 problemi: "50 TL\'den 15 TL harcadım. Kalan: ___"', correctAnswer: '35 TL', explanation: '50 - 15 = 35!' }
        ]
      }
    },
    {
      id: 'dort-islem-yonergeler',
      title: 'Dört İşlem ve Yönergeler',
      description: 'Yönergeleri takip ederek işlem yapma',
      emoji: '📋',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['yönerge', 'sıra', 'işlem', 'takip', 'sonuç'],
      content: {
        introduction: 'Verilen yönergeleri sırayla takip ederek sonuca ulaşmayı öğreneceksin!',
        motivationQuote: 'Yönergeyi takip et, hedefe ulaş! 📋',
        funFacts: [
          'Bilgisayarlar da yönergeleri takip eder!',
          'Tarifler de yönergedir!',
          'Yanlış sıra yanlış sonuç verir!'
        ],
        steps: [
          {
            title: 'Yönerge Nedir?',
            content: 'Adım adım yapılması gerekenleri anlatan talimatlar.',
            visual: '1) 5 ile başla 2) 3 ekle 3) 2 ile çarp = (5+3)×2 = 16',
            audio: 'Sırayla yap: beşe üç ekle, ikiyle çarp!',
            example: { question: '10 ile başla, 4 çıkar, 2 ile çarp', answer: '12', explanation: '(10-4)×2 = 12!' }
          },
          {
            title: 'Sırayı Takip Et',
            content: 'Yönergeleri verilen sırada uygula.',
            visual: '1→2→3→4 Sırasını değiştirme!',
            audio: 'Her adımı sırayla yap!',
            example: { question: '8 → +5 → ×2 → -6', answer: '20', explanation: '8+5=13, 13×2=26, 26-6=20!' }
          },
          {
            title: 'Ara Sonuçlar',
            content: 'Her adımın sonucunu not et.',
            visual: '4 → +6 = 10 → ×3 = 30 → -5 = 25',
            audio: 'Dört artı altı on, on üç otuz, otuz eksi beş yirmi beş!',
            example: { question: '2 → ×5 → +8 → ÷2', answer: '9', explanation: '10 → 18 → 9!' }
          },
          {
            title: 'Sonucu Açıklama',
            content: 'Sonuca nasıl ulaştığını açıkla.',
            visual: '"Önce topladım, sonra çarptım, en son çıkardım"',
            audio: 'Adımları sözle anlat!',
            example: { question: '5→×4→-7→+3 açıkla', answer: '5×4=20, 20-7=13, 13+3=16', explanation: 'Adım adım!' }
          },
          {
            title: 'Ters Yönerge',
            content: 'Sonuçtan başlayıp başa dön.',
            visual: '16 →÷2→-3→+5 = ? Ters: 16÷2=8, 8-3=5, 5+5=10 değil! 10→-5→+3→×2=16',
            audio: 'Tersten gidince işlemler de ters olur!',
            example: { question: '24 için: ?→×3→-6. Başlangıç?', answer: '10', explanation: '24+6=30, 30÷3=10!' }
          },
          {
            title: 'Yönerge Yazma',
            content: 'Kendi yönerge dizini oluştur.',
            visual: 'Hedef: 7yi 35e çevir → 7×5=35 veya 7+28=35',
            audio: 'Birden fazla yol olabilir!',
            example: { question: '3ü 15e çeviren yönerge?', answer: '×5 veya +12', explanation: 'İki farklı yol!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '6 → +4 → ×2 = ?', options: ['16', '18', '20', '22'], correctAnswer: '20', explanation: '6+4=10, 10×2=20!' },
          { type: 'fill-blank', question: '5 → ×3 → -7 = ___', correctAnswer: '8', explanation: '15 - 7 = 8!' },
          { type: 'multiple-choice', question: '12 → ÷4 → +5 → ×2 = ?', options: ['14', '16', '18', '20'], correctAnswer: '16', explanation: '3→8→16!' },
          { type: 'fill-blank', question: '10 → -3 → ×4 → ÷2 = ___', correctAnswer: '14', explanation: '7→28→14!' },
          { type: 'multiple-choice', question: '? → +5 → ×2 = 20. Başlangıç?', options: ['3', '5', '7', '10'], correctAnswer: '5', explanation: '5+5=10, 10×2=20!' },
          { type: 'fill-blank', question: '8 → ×2 → +4 → ÷5 = ___', correctAnswer: '4', explanation: '16→20→4!' },
          { type: 'multiple-choice', question: '3ü 12ye çeviren?', options: ['×2', '×3', '×4', '×5'], correctAnswer: '×4', explanation: '3 × 4 = 12!' },
          { type: 'fill-blank', question: '20 → ÷4 → +3 → ×2 = ___', correctAnswer: '16', explanation: '5→8→16!' },
          { type: 'multiple-choice', question: '7 → ? → 28', options: ['+21', '×4', '×3', '+14'], correctAnswer: '×4', explanation: '7 × 4 = 28!' },
          { type: 'fill-blank', question: '? → -8 → ×3 = 15. Başlangıç: ___', correctAnswer: '13', explanation: '15÷3=5, 5+8=13!' }
        ]
      }
    },
    {
      id: 'esitlik-kavrami',
      title: 'Eşitlik Kavramı',
      description: 'Eşit işaretinin anlamı',
      emoji: '⚖️',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['eşitlik', 'eşit işareti', 'denge', 'denklem', 'bilinmeyen'],
      content: {
        introduction: 'Eşit işaretinin gerçek anlamını ve farklı kullanımlarını öğreneceksin!',
        motivationQuote: 'İki taraf eşitse denge var! ⚖️',
        funFacts: [
          'Eşit işareti 1557\'de icat edildi!',
          'Robert Recorde "=" işaretini yarattı!',
          'Terazi eşitliği en iyi gösterir!'
        ],
        steps: [
          {
            title: 'Eşitlik Nedir?',
            content: 'İki tarafın aynı değerde olması demektir.',
            visual: '5 + 3 = 8 (sol taraf = sağ taraf)',
            audio: 'Beş artı üç sekize eşit!',
            example: { question: '7 + 4 = ?', answer: '11', explanation: '7 + 4 = 11, iki taraf eşit!' }
          },
          {
            title: 'Terazi Modeli',
            content: 'Eşitlik terazi gibidir, iki taraf dengeli olmalı.',
            visual: '⚖️ [5+3] = [8]',
            audio: 'Terazi dengede, iki taraf eşit!',
            example: { question: '[6+?] = [10] Denge için?', answer: '4', explanation: '6 + 4 = 10, denge!' }
          },
          {
            title: 'Eşitliğin İki Yönü',
            content: '5 + 3 = 8 ve 8 = 5 + 3 aynı anlama gelir.',
            visual: '5 + 3 = 8 ⟺ 8 = 5 + 3',
            audio: 'Sol sağa, sağ sola eşit!',
            example: { question: '12 = 7 + ? için?', answer: '5', explanation: '7 + 5 = 12!' }
          },
          {
            title: 'Bilinmeyen Bulma',
            content: 'Eşitliği koruyacak sayıyı bul.',
            visual: '? + 6 = 15 → ? = 15 - 6 = 9',
            audio: 'Soru işareti yerine 9 gelirse eşitlik sağlanır!',
            example: { question: '? × 4 = 20', answer: '5', explanation: '5 × 4 = 20!' }
          },
          {
            title: 'İşlem Dönüştürme',
            content: 'Eşitliği kullanarak işlemi dönüştür.',
            visual: '12 + 8 = 20 → 20 - 8 = 12 → 20 - 12 = 8',
            audio: 'Toplama, çıkarmaya dönüşür!',
            example: { question: '6 × 7 = 42 nasıl dönüşür?', answer: '42 ÷ 7 = 6 veya 42 ÷ 6 = 7', explanation: 'Çarpma, bölmeye dönüşür!' }
          },
          {
            title: 'Eşitliği Açıklama',
            content: 'Eşitliğin anlamını kendi sözlerinle ifade et.',
            visual: '"Sol tarafın değeri sağ tarafa eşittir"',
            audio: 'İki taraf aynı değeri taşır!',
            example: { question: '15 = 10 + 5 ne demek?', answer: 'On beş, on ile beşin toplamına eşit', explanation: 'İki taraf aynı değer: 15!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '? + 7 = 15', options: ['6', '7', '8', '9'], correctAnswer: '8', explanation: '8 + 7 = 15!' },
          { type: 'fill-blank', question: '24 = 6 × ___', correctAnswer: '4', explanation: '6 × 4 = 24!' },
          { type: 'multiple-choice', question: '18 - ? = 10', options: ['6', '7', '8', '9'], correctAnswer: '8', explanation: '18 - 8 = 10!' },
          { type: 'fill-blank', question: '___ ÷ 5 = 9', correctAnswer: '45', explanation: '45 ÷ 5 = 9!' },
          { type: 'multiple-choice', question: '7 × 6 = ? × 7', options: ['5', '6', '7', '8'], correctAnswer: '6', explanation: '7 × 6 = 6 × 7 = 42!' },
          { type: 'fill-blank', question: '14 + ___ = 8 + 12', correctAnswer: '6', explanation: '14 + 6 = 20 = 8 + 12!' },
          { type: 'multiple-choice', question: '36 ÷ 4 = 3 × ?', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: '9 = 3 × 3!' },
          { type: 'fill-blank', question: '5 × 8 = 10 × ___', correctAnswer: '4', explanation: '40 = 10 × 4!' },
          { type: 'multiple-choice', question: '100 - 35 = 30 + ?', options: ['25', '30', '35', '40'], correctAnswer: '35', explanation: '65 = 30 + 35!' },
          { type: 'fill-blank', question: '___ + 17 = 50 - 8', correctAnswer: '25', explanation: '42 - 17 = 25!' }
        ]
      }
    }
  ]
};
