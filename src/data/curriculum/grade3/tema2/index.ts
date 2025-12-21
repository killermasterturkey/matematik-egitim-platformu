// 3. SINIF - 2. TEMA: SAYILAR VE NİCELİKLER (2)
import { Theme } from '../../types';

export const tema2: Theme = {
  id: 'sayilar-ve-nicelikler-2',
  title: 'Sayılar ve Nicelikler (2)',
  description: 'Kesirler, zaman, uzunluk, kütle ve para!',
  emoji: '⏰',
  color: 'from-blue-400 to-indigo-500',
  bgColor: 'bg-blue-50',
  borderColor: 'border-blue-200',
  textColor: 'text-blue-600',
  hours: 45,
  objectives: [
    'Bütün, yarım ve çeyreği kesir olarak gösterme',
    'Birim kesirleri anlama',
    'Pay ve paydayı tanıma',
    'Saati okuma ve yazma',
    'Zaman birimlerini dönüştürme',
    'Uzunluk ve kütle birimlerini kullanma',
    'Para ile işlem yapma'
  ],
  keywords: ['Kesir', 'Pay', 'Payda', 'Birim kesir', 'Saat', 'Dakika', 'Saniye', 'Metre', 'Kilogram', 'Türk Lirası'],
  generalizations: [
    'Kesirler, bütünün eş parçalarını ifade eder.',
    'Zaman, uzunluk ve kütle birimleri arasında ilişkiler vardır.',
    'Para birimleri dönüştürülebilir.'
  ],
  topics: [
    {
      id: 'butun-yarim-ceyrek',
      title: 'Bütün, Yarım ve Çeyrek',
      description: 'Kesir kavramına giriş',
      emoji: '🥧',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['bütün', 'yarım', 'çeyrek', 'kesir', '1/2', '1/4'],
      content: {
        introduction: 'Bir bütünü parçalara ayırmayı ve kesir olarak göstermeyi öğreneceksin!',
        motivationQuote: 'Paylaşmak güzeldir, kesir de öyle! 🥧',
        funFacts: [
          'Pizza kesirleri öğretmek için harika!',
          'Müzikte yarım ve çeyrek notalar var!',
          'Futbol maçları iki yarıdan oluşur!'
        ],
        steps: [
          {
            title: 'Bütün',
            content: 'Hiç bölünmemiş, tam olan şey bütündür.',
            visual: '🍕 = 1 bütün pizza',
            audio: 'Bir bütün, tam olan demek!',
            example: { question: 'Bir elma kaç bütün?', answer: '1 bütün', explanation: 'Bölünmemiş elma = 1 bütün!' }
          },
          {
            title: 'Yarım (1/2)',
            content: 'Bütünü 2 eşit parçaya böl. Her parça yarım.',
            visual: '🍕 → 🍕½ + 🍕½ = ½ + ½ = 1',
            audio: 'İki yarım bir bütün eder!',
            example: { question: 'Elmanın yarısını yersen kalan?', answer: '½ (yarım)', explanation: '1 - ½ = ½!' }
          },
          {
            title: 'Çeyrek (1/4)',
            content: 'Bütünü 4 eşit parçaya böl. Her parça çeyrek.',
            visual: '🍕 → ¼ + ¼ + ¼ + ¼ = 1',
            audio: 'Dört çeyrek bir bütün eder!',
            example: { question: '4 çeyrek toplarsak?', answer: '1 bütün', explanation: '4 × ¼ = 1!' }
          },
          {
            title: 'Yarım ve Çeyrek İlişkisi',
            content: '1 yarım = 2 çeyrek',
            visual: '½ = ¼ + ¼ = 2/4',
            audio: 'Bir yarım, iki çeyreğe eşit!',
            example: { question: '½ pizza kaç çeyrek?', answer: '2 çeyrek', explanation: '½ = 2 × ¼!' }
          },
          {
            title: 'Kesir Yazımı',
            content: 'Üstteki sayı pay, alttaki sayı payda.',
            visual: '½ → üstte 1 (pay), altta 2 (payda)',
            audio: 'Pay bölünen, payda bölen!',
            example: { question: '¼ te pay kaç?', answer: '1', explanation: 'Üstteki sayı pay!' }
          },
          {
            title: 'Modeller',
            content: 'Kesirler daire, dikdörtgen veya sayı doğrusunda gösterilir.',
            visual: '⬜⬛ = ½ | ⬜⬜⬜⬛ = ¼',
            audio: 'Boyalı kısım kesri gösterir!',
            example: { question: '3 parçadan 1i boyalı. Kesir?', answer: '⅓', explanation: 'Pay 1, payda 3!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '2 yarım = ?', options: ['½', '1', '2', '4'], correctAnswer: '1', explanation: '2 × ½ = 1 bütün!' },
          { type: 'fill-blank', question: '4 çeyrek = ___ bütün', correctAnswer: '1', explanation: '4 × ¼ = 1!' },
          { type: 'multiple-choice', question: '½ kaç çeyreğe eşit?', options: ['1', '2', '3', '4'], correctAnswer: '2', explanation: '½ = 2 × ¼!' },
          { type: 'fill-blank', question: '¼ te payda = ___', correctAnswer: '4', explanation: 'Alttaki sayı 4!' },
          { type: 'multiple-choice', question: 'Pizza 4 eşit parça. 1 dilim?', options: ['½', '⅓', '¼', '⅕'], correctAnswer: '¼', explanation: '1/4 = çeyrek!' },
          { type: 'fill-blank', question: '½ + ½ = ___', correctAnswer: '1', explanation: 'İki yarım = bir bütün!' },
          { type: 'multiple-choice', question: '2 çeyrek = ?', options: ['¼', '½', '¾', '1'], correctAnswer: '½', explanation: '2 × ¼ = ½!' },
          { type: 'fill-blank', question: '1 bütün = ___ yarım', correctAnswer: '2', explanation: '1 = 2 × ½!' },
          { type: 'multiple-choice', question: '¾ kaç çeyrek?', options: ['1', '2', '3', '4'], correctAnswer: '3', explanation: '¾ = 3 × ¼!' },
          { type: 'fill-blank', question: 'Bütün kesir olarak: ___', correctAnswer: '1/1 veya 1', explanation: '1 bütün = 1/1!' }
        ]
      }
    },
    {
      id: 'birim-kesirler',
      title: 'Birim Kesirler',
      description: 'Payı 1 olan kesirler',
      emoji: '🍰',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['birim kesir', 'pay', 'payda', 'eş parça'],
      content: {
        introduction: 'Bütünü eşit parçalara bölüp birim kesirleri keşfedeceğiz!',
        motivationQuote: 'Küçük parçalar büyük anlam taşır! 🍰',
        funFacts: [
          'Eski Mısırlılar sadece birim kesir kullanırdı!',
          'Birim kesir en temel kesirdir!',
          'Her kesir birim kesirlerin toplamıdır!'
        ],
        steps: [
          {
            title: 'Birim Kesir Nedir?',
            content: 'Payı 1 olan kesirler birim kesirdir.',
            visual: '½, ⅓, ¼, ⅕, ⅙, ⅐, ⅛, ⅑, 1/10...',
            audio: 'Pay 1 ise birim kesir!',
            example: { question: '1/5 birim kesir mi?', answer: 'Evet', explanation: 'Payı 1!' }
          },
          {
            title: 'Eş Parçalara Bölme',
            content: 'Bütünü n eşit parçaya böl, her parça 1/n.',
            visual: '⬜⬜⬜⬜⬜ → Her biri 1/5',
            audio: '5 eşit parça = her biri beşte bir!',
            example: { question: '8 eşit parçada her biri?', answer: '⅛', explanation: '1/8 = sekizde bir!' }
          },
          {
            title: 'Birim Kesir Büyüklüğü',
            content: 'Payda büyükse birim kesir küçük.',
            visual: '½ > ⅓ > ¼ > ⅕ > ⅙',
            audio: 'Çok parça = küçük parça!',
            example: { question: '1/10 mu 1/5 mi büyük?', answer: '1/5', explanation: 'Payda küçük = kesir büyük!' }
          },
          {
            title: 'Bütünü Oluşturma',
            content: 'n tane 1/n kesir = 1 bütün',
            visual: '⅓ + ⅓ + ⅓ = 3/3 = 1',
            audio: 'Üç tane üçte bir = bir bütün!',
            example: { question: '6 tane ⅙ = ?', answer: '1 bütün', explanation: '6 × ⅙ = 6/6 = 1!' }
          },
          {
            title: 'Kesir Oluşturma',
            content: 'Birim kesirleri toplayarak kesir yap.',
            visual: '⅓ + ⅓ = 2/3 (iki tane üçte bir)',
            audio: 'İki tane üçte bir = üçte iki!',
            example: { question: '3 tane ¼ = ?', answer: '¾', explanation: '3 × ¼ = 3/4!' }
          },
          {
            title: 'İlişkileri Bulma',
            content: 'Birim kesirlerin birbirleriyle ilişkisi.',
            visual: '½ = 2 × ¼ = 3 × ⅙ = 4 × ⅛',
            audio: 'Bir yarım kaç çeyrek? İki çeyrek!',
            example: { question: '⅓ kaç tane ⅙?', answer: '2 tane', explanation: '⅓ = 2 × ⅙!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Hangisi birim kesir değil?', options: ['½', '⅔', '¼', '⅕'], correctAnswer: '⅔', explanation: 'Payı 2, birim kesir değil!' },
          { type: 'fill-blank', question: '5 eşit parçada her biri = ___', correctAnswer: '1/5', explanation: 'Beşte bir!' },
          { type: 'multiple-choice', question: 'Hangisi en büyük?', options: ['⅓', '¼', '⅕', '⅙'], correctAnswer: '⅓', explanation: 'Payda en küçük = kesir en büyük!' },
          { type: 'fill-blank', question: '4 × ¼ = ___', correctAnswer: '1', explanation: '4/4 = 1 bütün!' },
          { type: 'multiple-choice', question: '⅕ + ⅕ + ⅕ = ?', options: ['⅓', '⅖', '⅗', '⅘'], correctAnswer: '⅗', explanation: '3 × ⅕ = 3/5!' },
          { type: 'fill-blank', question: '½ = ___ tane ¼', correctAnswer: '2', explanation: '½ = 2/4!' },
          { type: 'multiple-choice', question: '7 tane 1/7 = ?', options: ['½', '⅔', '¾', '1'], correctAnswer: '1', explanation: '7/7 = 1 bütün!' },
          { type: 'fill-blank', question: '1/10 ___ 1/5 (< veya >)', correctAnswer: '<', explanation: '1/10 daha küçük!' },
          { type: 'multiple-choice', question: '¼ + ¼ = ?', options: ['⅛', '¼', '½', '1'], correctAnswer: '½', explanation: '2/4 = ½!' },
          { type: 'fill-blank', question: '1 = ___ tane ⅙', correctAnswer: '6', explanation: '6/6 = 1!' }
        ]
      }
    },
    {
      id: 'pay-payda',
      title: 'Pay ve Payda',
      description: 'Kesrin bileşenlerini anlama',
      emoji: '📐',
      duration: '35 dk',
      difficulty: 2,
      keywords: ['pay', 'payda', 'kesir', 'bölüm', 'parça'],
      content: {
        introduction: 'Kesirlerdeki pay ve paydanın ne anlama geldiğini öğreneceksin!',
        motivationQuote: 'Pay alınan, payda bölünen! 📐',
        funFacts: [
          '"Pay" paylaşmak kelimesinden gelir!',
          'Payda hiçbir zaman 0 olamaz!',
          'Kesir çizgisi bölme işareti gibidir!'
        ],
        steps: [
          {
            title: 'Payda',
            content: 'Bütünün kaç eşit parçaya bölündüğünü gösterir (alttaki sayı).',
            visual: '3/4 → Payda = 4 (4 eşit parça)',
            audio: 'Payda bölünen parça sayısı!',
            example: { question: '5/8 te payda?', answer: '8', explanation: '8 eşit parça!' }
          },
          {
            title: 'Pay',
            content: 'Kaç parçanın alındığını gösterir (üstteki sayı).',
            visual: '3/4 → Pay = 3 (3 parça alındı)',
            audio: 'Pay alınan parça sayısı!',
            example: { question: '5/8 te pay?', answer: '5', explanation: '5 parça alındı!' }
          },
          {
            title: 'Kesir Anlamı',
            content: 'Pay/Payda = Alınan/Bölünen',
            visual: '3/4 = 4 parçadan 3ü',
            audio: '4 parçadan 3 tanesini aldık!',
            example: { question: '2/5 ne demek?', answer: '5 parçadan 2si', explanation: '5e böl, 2 al!' }
          },
          {
            title: 'Kesir Karşılaştırma',
            content: 'Aynı paydada pay büyükse kesir büyük.',
            visual: '2/5 < 3/5 < 4/5',
            audio: 'Payda aynı, pay büyük = kesir büyük!',
            example: { question: '3/7 mi 5/7 mi büyük?', answer: '5/7', explanation: 'Pay büyük = kesir büyük!' }
          },
          {
            title: 'Pay = Payda',
            content: 'Pay paydaya eşitse kesir 1 bütün.',
            visual: '4/4 = 1 | 5/5 = 1 | 8/8 = 1',
            audio: 'Tüm parçaları aldık, tam bütün!',
            example: { question: '6/6 = ?', answer: '1 bütün', explanation: 'Altı altıda bir = 1!' }
          },
          {
            title: 'Pay > Payda',
            content: 'Pay paydadan büyükse 1den fazla.',
            visual: '5/4 = 1 + ¼ (bileşik kesir)',
            audio: 'Bir bütün ve çeyrek!',
            example: { question: '7/4 kaç bütün?', answer: '1 bütün ve ¾', explanation: '4/4 + 3/4 = 1 + ¾!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '7/9 da pay?', options: ['7', '9', '16', '2'], correctAnswer: '7', explanation: 'Üstteki sayı pay!' },
          { type: 'fill-blank', question: '4/11 de payda = ___', correctAnswer: '11', explanation: 'Alttaki sayı payda!' },
          { type: 'multiple-choice', question: '3/8 mi 5/8 mi büyük?', options: ['3/8', '5/8', 'Eşit', 'Belli değil'], correctAnswer: '5/8', explanation: 'Payda aynı, pay büyük!' },
          { type: 'fill-blank', question: '9/9 = ___', correctAnswer: '1', explanation: 'Pay = payda = 1 bütün!' },
          { type: 'multiple-choice', question: '4/3 nedir?', options: ['1den küçük', '1e eşit', '1den büyük', 'Tanımsız'], correctAnswer: '1den büyük', explanation: 'Pay > payda!' },
          { type: 'fill-blank', question: '5 parçadan 2si = ___', correctAnswer: '2/5', explanation: 'Pay 2, payda 5!' },
          { type: 'multiple-choice', question: 'Hangisi 1 bütün?', options: ['3/4', '4/3', '5/5', '2/3'], correctAnswer: '5/5', explanation: 'Pay = payda = 1!' },
          { type: 'fill-blank', question: '8/8 + 3/8 = ___', correctAnswer: '11/8', explanation: '8 + 3 = 11, payda aynı!' },
          { type: 'multiple-choice', question: '1/4 de neyi gösterir payda?', options: ['Alınan parça', 'Eşit parça sayısı', 'Toplam', 'Fark'], correctAnswer: 'Eşit parça sayısı', explanation: 'Payda = bölünen parça sayısı!' },
          { type: 'fill-blank', question: '6/5 = 1 + ___', correctAnswer: '1/5', explanation: '6/5 = 5/5 + 1/5!' }
        ]
      }
    },
    {
      id: 'saat-okuma-yazma',
      title: 'Saat Okuma ve Yazma',
      description: 'Analog ve dijital saatleri okuma',
      emoji: '🕐',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['saat', 'dakika', 'analog', 'dijital', 'akrep', 'yelkovan'],
      content: {
        introduction: 'Saati hem analog hem dijital olarak okumayı ve yazmayı öğreneceksin!',
        motivationQuote: 'Zaman altın, onu iyi kullan! 🕐',
        funFacts: [
          'İlk saatler güneş saatleriydi!',
          'Atomik saatler saniyede 9 milyar kez titreşir!',
          'Greenwich dünya saatinin merkezidir!'
        ],
        steps: [
          {
            title: 'Analog Saatin Parçaları',
            content: 'Kısa iğne (akrep) = saat, uzun iğne (yelkovan) = dakika.',
            visual: '🕐 Akrep 12de, yelkovan 12de = 12:00',
            audio: 'Akrep saati, yelkovan dakikayı gösterir!',
            example: { question: 'Akrep 3te, yelkovan 12de. Saat?', answer: '3:00', explanation: 'Saat 3, dakika 0!' }
          },
          {
            title: 'Tam Saatler',
            content: 'Yelkovan 12de ise tam saat.',
            visual: '🕐🕑🕒🕓🕔🕕 = 12:00, 1:00, 2:00...',
            audio: 'Yelkovan tepede = tam saat!',
            example: { question: 'Akrep 7de, yelkovan 12de. Saat?', answer: '7:00', explanation: 'Saat 7 tam!' }
          },
          {
            title: 'Yarım Saatler',
            content: 'Yelkovan 6da ise yarım saat (30 dakika).',
            visual: '🕐 Akrep 3-4 arası, yelkovan 6 = 3:30',
            audio: 'Yarım = 30 dakika!',
            example: { question: 'Saat 9:30da yelkovan nerede?', answer: '6da', explanation: '30 dakika = 6!' }
          },
          {
            title: 'Çeyrek Saatler',
            content: '15 dakika = çeyrek (yelkovan 3te), 45 dakika = çeyreğe (yelkovan 9da).',
            visual: '3:15 = üçü çeyrek geçiyor | 3:45 = dörde çeyrek var',
            audio: 'Çeyrek 15 dakika, üç çeyrek 45 dakika!',
            example: { question: 'Saat 5:15 nasıl söylenir?', answer: '5i çeyrek geçiyor', explanation: '15 dakika geçti!' }
          },
          {
            title: 'Dakikaları Okuma',
            content: 'Yelkovanın gösterdiği sayıyı 5 ile çarp.',
            visual: 'Yelkovan 4te: 4 × 5 = 20 dakika',
            audio: 'Her sayı 5 dakika!',
            example: { question: 'Yelkovan 7de. Dakika?', answer: '35', explanation: '7 × 5 = 35 dakika!' }
          },
          {
            title: 'Dijital Saat',
            content: 'Saat:Dakika formatında yazılır.',
            visual: '14:25 = öğleden sonra 2:25',
            audio: 'İki nokta saati dakikadan ayırır!',
            example: { question: '3:45 dijital saat. Analog saat kaç?', answer: 'Akrep 3-4 arası, yelkovan 9da', explanation: '45 = 9 × 5!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Akrep 2de, yelkovan 12de. Saat?', options: ['12:02', '2:00', '2:12', '12:00'], correctAnswer: '2:00', explanation: 'Saat 2 tam!' },
          { type: 'fill-blank', question: '5:30 = 5 buçuk veya 5i ___ geçiyor', correctAnswer: 'yarım', explanation: '30 dakika = yarım!' },
          { type: 'multiple-choice', question: 'Yelkovan 6da. Dakika?', options: ['6', '30', '36', '60'], correctAnswer: '30', explanation: '6 × 5 = 30 dakika!' },
          { type: 'fill-blank', question: '4:15 = 4ü ___ geçiyor', correctAnswer: 'çeyrek', explanation: '15 dakika = çeyrek!' },
          { type: 'multiple-choice', question: '8:45 nasıl söylenir?', options: ['8 buçuk', '9a çeyrek var', '8i çeyrek geçiyor', '9 buçuk'], correctAnswer: '9a çeyrek var', explanation: '45 dk = 15 dk kaldı!' },
          { type: 'fill-blank', question: 'Yelkovan 9da = ___ dakika', correctAnswer: '45', explanation: '9 × 5 = 45!' },
          { type: 'multiple-choice', question: '12:00 öğle mi gece yarısı mı?', options: ['Sadece öğle', 'Sadece gece yarısı', 'İkisi de olabilir', 'Hiçbiri'], correctAnswer: 'İkisi de olabilir', explanation: '12:00 hem öğle hem gece yarısı!' },
          { type: 'fill-blank', question: '7:30 = 7 ___', correctAnswer: 'buçuk', explanation: '30 dakika = yarım!' },
          { type: 'multiple-choice', question: 'Yelkovan tam bir tur atarsa?', options: ['1 saat', '1 dakika', '12 saat', '60 saat'], correctAnswer: '1 saat', explanation: '60 dakika = 1 saat!' },
          { type: 'fill-blank', question: '10:55 = 11e ___ var', correctAnswer: '5', explanation: '60 - 55 = 5 dakika!' }
        ]
      }
    },
    {
      id: 'zaman-birimleri',
      title: 'Zaman Birimleri',
      description: 'Saat, dakika ve saniye ilişkileri',
      emoji: '⏱️',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['saat', 'dakika', 'saniye', 'dönüştürme', 'zaman'],
      content: {
        introduction: 'Saat, dakika ve saniye arasındaki ilişkileri öğreneceksin!',
        motivationQuote: 'Her saniye değerli! ⏱️',
        funFacts: [
          'Bir günde 86.400 saniye var!',
          'Usain Bolt 100 metreyi 9.58 saniyede koştu!',
          'Işık 1 saniyede dünyayı 7 kez dolanır!'
        ],
        steps: [
          {
            title: '1 Dakika = 60 Saniye',
            content: 'Saniyeler toplanarak dakikayı oluşturur.',
            visual: '1 dk = 60 sn | 2 dk = 120 sn',
            audio: 'Altmış saniye bir dakika!',
            example: { question: '3 dakika kaç saniye?', answer: '180 saniye', explanation: '3 × 60 = 180!' }
          },
          {
            title: '1 Saat = 60 Dakika',
            content: 'Dakikalar toplanarak saati oluşturur.',
            visual: '1 saat = 60 dk | 2 saat = 120 dk',
            audio: 'Altmış dakika bir saat!',
            example: { question: '2 saat kaç dakika?', answer: '120 dakika', explanation: '2 × 60 = 120!' }
          },
          {
            title: 'Dakikadan Saate',
            content: '60 dakika = 1 saat. Dakikayı 60a böl.',
            visual: '90 dk = 60 + 30 = 1 saat 30 dk',
            audio: 'Doksan dakika = bir buçuk saat!',
            example: { question: '150 dakika kaç saat?', answer: '2 saat 30 dakika', explanation: '150 = 120 + 30!' }
          },
          {
            title: 'Süre Hesaplama',
            content: 'Bitiş - Başlangıç = Süre',
            visual: '9:30 - 8:00 = 1 saat 30 dakika',
            audio: 'Geçen süreyi bul!',
            example: { question: '10:15 - 9:45 = ?', answer: '30 dakika', explanation: '10:15 - 9:45 = 30 dk!' }
          },
          {
            title: 'Süre Tahmini',
            content: 'Olayların ne kadar sürdüğünü tahmin et.',
            visual: 'Diş fırçalama ≈ 2 dk | Film ≈ 2 saat',
            audio: 'Deneyimlerini kullanarak tahmin yap!',
            example: { question: 'Uyku kaç saat sürer?', answer: '≈ 8 saat', explanation: 'Ortalama uyku 8 saat!' }
          },
          {
            title: '1 Saat = 3600 Saniye',
            content: '60 × 60 = 3600 saniye.',
            visual: '1 saat = 60 dk × 60 sn = 3600 sn',
            audio: 'Bir saat üç bin altı yüz saniye!',
            example: { question: 'Yarım saat kaç saniye?', answer: '1800 saniye', explanation: '30 × 60 = 1800!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '2 dakika = ? saniye', options: ['20', '60', '120', '200'], correctAnswer: '120', explanation: '2 × 60 = 120!' },
          { type: 'fill-blank', question: '3 saat = ___ dakika', correctAnswer: '180', explanation: '3 × 60 = 180!' },
          { type: 'multiple-choice', question: '180 saniye kaç dakika?', options: ['1', '2', '3', '18'], correctAnswer: '3', explanation: '180 ÷ 60 = 3!' },
          { type: 'fill-blank', question: '1,5 saat = ___ dakika', correctAnswer: '90', explanation: '1.5 × 60 = 90!' },
          { type: 'multiple-choice', question: '10:45 - 10:15 = ?', options: ['15 dk', '30 dk', '45 dk', '1 saat'], correctAnswer: '30 dk', explanation: '45 - 15 = 30 dakika!' },
          { type: 'fill-blank', question: '1 saat = ___ saniye', correctAnswer: '3600', explanation: '60 × 60 = 3600!' },
          { type: 'multiple-choice', question: '75 dakika = ?', options: ['1 saat', '1 saat 15 dk', '1 saat 25 dk', '1,5 saat'], correctAnswer: '1 saat 15 dk', explanation: '75 = 60 + 15!' },
          { type: 'fill-blank', question: '2,5 saat = ___ dakika', correctAnswer: '150', explanation: '2.5 × 60 = 150!' },
          { type: 'multiple-choice', question: 'Film 2 saat 30 dk. Kaç dakika?', options: ['130', '150', '180', '230'], correctAnswer: '150', explanation: '120 + 30 = 150!' },
          { type: 'fill-blank', question: 'Yarım dakika = ___ saniye', correctAnswer: '30', explanation: '0.5 × 60 = 30!' }
        ]
      }
    },
    {
      id: 'uzunluk-birimleri',
      title: 'Uzunluk Birimleri',
      description: 'Milimetre, santimetre ve metre',
      emoji: '📏',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['milimetre', 'santimetre', 'metre', 'uzunluk', 'ölçme'],
      content: {
        introduction: 'Milimetre, santimetre ve metre arasındaki ilişkileri öğreneceksin!',
        motivationQuote: 'Ölç, biç, doğru hesapla! 📏',
        funFacts: [
          'Metre Fransızca\'dan gelir!',
          'Dünyanın çevresi 40.000 km!',
          'İnsan saçı 0,1 mm kalınlığında!'
        ],
        steps: [
          {
            title: '1 cm = 10 mm',
            content: 'Bir santimetre on milimetreye eşittir.',
            visual: '|--1cm--| = |mm|mm|mm|mm|mm|mm|mm|mm|mm|mm|',
            audio: 'Bir santimetre on milimetre!',
            example: { question: '3 cm kaç mm?', answer: '30 mm', explanation: '3 × 10 = 30!' }
          },
          {
            title: '1 m = 100 cm',
            content: 'Bir metre yüz santimetreye eşittir.',
            visual: '1 m = 100 cm | 1/2 m = 50 cm',
            audio: 'Bir metre yüz santimetre!',
            example: { question: '2 m kaç cm?', answer: '200 cm', explanation: '2 × 100 = 200!' }
          },
          {
            title: '1 m = 1000 mm',
            content: 'Bir metre bin milimetreye eşittir.',
            visual: '1 m = 100 cm = 1000 mm',
            audio: 'Bin milimetre bir metre!',
            example: { question: 'Yarım metre kaç mm?', answer: '500 mm', explanation: '1000 ÷ 2 = 500!' }
          },
          {
            title: 'Büyükten Küçüğe',
            content: 'Büyük birimden küçük birime çevirirken çarp.',
            visual: '5 m = 5 × 100 = 500 cm',
            audio: 'Metreden santimetreye: 100 ile çarp!',
            example: { question: '4 cm kaç mm?', answer: '40 mm', explanation: '4 × 10 = 40!' }
          },
          {
            title: 'Küçükten Büyüğe',
            content: 'Küçük birimden büyük birime çevirirken böl.',
            visual: '250 cm = 250 ÷ 100 = 2,5 m',
            audio: 'Santimetreden metreye: 100e böl!',
            example: { question: '80 mm kaç cm?', answer: '8 cm', explanation: '80 ÷ 10 = 8!' }
          },
          {
            title: 'Karışık Dönüşüm',
            content: 'Metre ve santimetreyi birlikte yaz.',
            visual: '185 cm = 1 m 85 cm | 2 m 30 cm = 230 cm',
            audio: 'Yüz santimetreden sonra metreye geç!',
            example: { question: '150 cm = ?', answer: '1 m 50 cm', explanation: '150 = 100 + 50!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '5 cm = ? mm', options: ['5', '50', '500', '0,5'], correctAnswer: '50', explanation: '5 × 10 = 50!' },
          { type: 'fill-blank', question: '3 m = ___ cm', correctAnswer: '300', explanation: '3 × 100 = 300!' },
          { type: 'multiple-choice', question: '1000 mm = ? m', options: ['1', '10', '100', '0,1'], correctAnswer: '1', explanation: '1000 ÷ 1000 = 1!' },
          { type: 'fill-blank', question: '250 cm = ___ m ___ cm', correctAnswer: '2 m 50 cm', explanation: '250 = 200 + 50!' },
          { type: 'multiple-choice', question: '2 m 45 cm = ? cm', options: ['245', '2045', '2450', '24,5'], correctAnswer: '245', explanation: '200 + 45 = 245!' },
          { type: 'fill-blank', question: '70 mm = ___ cm', correctAnswer: '7', explanation: '70 ÷ 10 = 7!' },
          { type: 'multiple-choice', question: 'Hangisi en uzun?', options: ['100 cm', '10 m', '1000 mm', '1 m'], correctAnswer: '10 m', explanation: '10 m = 1000 cm!' },
          { type: 'fill-blank', question: '1,5 m = ___ cm', correctAnswer: '150', explanation: '1.5 × 100 = 150!' },
          { type: 'multiple-choice', question: '45 mm + 55 mm = ?', options: ['100 mm', '1 cm', '10 cm', '100 mm = 10 cm'], correctAnswer: '100 mm = 10 cm', explanation: '45 + 55 = 100 mm = 10 cm!' },
          { type: 'fill-blank', question: '5 m = ___ mm', correctAnswer: '5000', explanation: '5 × 1000 = 5000!' }
        ]
      }
    },
    {
      id: 'kutle-birimleri',
      title: 'Kütle Birimleri',
      description: 'Gram ve kilogram',
      emoji: '⚖️',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['gram', 'kilogram', 'kütle', 'ağırlık', 'ölçme'],
      content: {
        introduction: 'Gram ve kilogram arasındaki ilişkileri öğreneceksin!',
        motivationQuote: 'Ağırlıkları doğru ölç! ⚖️',
        funFacts: [
          'Dünyada standart kilogram vardı (artık atom ile tanımlı)!',
          'Uzayda ağırlık sıfır ama kütle aynı!',
          'Bir fil yaklaşık 5000 kg!'
        ],
        steps: [
          {
            title: '1 kg = 1000 g',
            content: 'Bir kilogram bin grama eşittir.',
            visual: '1 kg = 1000 g | 2 kg = 2000 g',
            audio: 'Bin gram bir kilogram!',
            example: { question: '3 kg kaç gram?', answer: '3000 g', explanation: '3 × 1000 = 3000!' }
          },
          {
            title: 'Gramdan Kilograma',
            content: 'Gramı 1000e böl.',
            visual: '5000 g = 5000 ÷ 1000 = 5 kg',
            audio: 'Beş bin gram beş kilogram!',
            example: { question: '2500 g kaç kg?', answer: '2,5 kg', explanation: '2500 ÷ 1000 = 2,5!' }
          },
          {
            title: 'Kilogramdan Grama',
            content: 'Kilogramı 1000 ile çarp.',
            visual: '4,5 kg = 4,5 × 1000 = 4500 g',
            audio: 'Dört buçuk kilogram dört bin beş yüz gram!',
            example: { question: '1,5 kg kaç gram?', answer: '1500 g', explanation: '1.5 × 1000 = 1500!' }
          },
          {
            title: 'Karışık Yazım',
            content: 'Kilogram ve gram birlikte yazılabilir.',
            visual: '2750 g = 2 kg 750 g',
            audio: 'İki kilogram yedi yüz elli gram!',
            example: { question: '3 kg 250 g kaç gram?', answer: '3250 g', explanation: '3000 + 250 = 3250!' }
          },
          {
            title: 'Yarım Kilogram',
            content: '1/2 kg = 500 g',
            visual: '½ kg = 500 g | ¼ kg = 250 g',
            audio: 'Yarım kilo beş yüz gram!',
            example: { question: '¼ kg kaç gram?', answer: '250 g', explanation: '1000 ÷ 4 = 250!' }
          },
          {
            title: 'Günlük Örnekler',
            content: 'Elma ≈ 200 g, şeker paketi = 1 kg',
            visual: '🍎 ≈ 200 g | 📦 şeker = 1 kg',
            audio: 'Günlük nesnelerin ağırlıklarını tahmin et!',
            example: { question: '5 elma yaklaşık kaç gram?', answer: '≈ 1000 g (1 kg)', explanation: '5 × 200 = 1000 g!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '2 kg = ? g', options: ['20', '200', '2000', '20000'], correctAnswer: '2000', explanation: '2 × 1000 = 2000!' },
          { type: 'fill-blank', question: '4500 g = ___ kg ___ g', correctAnswer: '4 kg 500 g', explanation: '4500 = 4000 + 500!' },
          { type: 'multiple-choice', question: '½ kg = ? g', options: ['50', '100', '250', '500'], correctAnswer: '500', explanation: '1000 ÷ 2 = 500!' },
          { type: 'fill-blank', question: '3 kg 750 g = ___ g', correctAnswer: '3750', explanation: '3000 + 750 = 3750!' },
          { type: 'multiple-choice', question: '6000 g = ? kg', options: ['0,6', '6', '60', '600'], correctAnswer: '6', explanation: '6000 ÷ 1000 = 6!' },
          { type: 'fill-blank', question: '¼ kg = ___ g', correctAnswer: '250', explanation: '1000 ÷ 4 = 250!' },
          { type: 'multiple-choice', question: '1 kg 200 g + 800 g = ?', options: ['1 kg 1000 g', '2 kg', '2 kg 800 g', '1,8 kg'], correctAnswer: '2 kg', explanation: '1200 + 800 = 2000 g = 2 kg!' },
          { type: 'fill-blank', question: '2,5 kg = ___ g', correctAnswer: '2500', explanation: '2.5 × 1000 = 2500!' },
          { type: 'multiple-choice', question: 'Hangisi daha ağır?', options: ['1 kg', '999 g', '1001 g', 'Hepsi eşit'], correctAnswer: '1001 g', explanation: '1001 > 1000 > 999!' },
          { type: 'fill-blank', question: '750 g + 750 g = ___ kg ___ g', correctAnswer: '1 kg 500 g', explanation: '750 + 750 = 1500 g!' }
        ]
      }
    },
    {
      id: 'para-hesaplama',
      title: 'Para Hesaplama',
      description: 'Türk Lirası ve kuruş işlemleri',
      emoji: '💰',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['para', 'lira', 'kuruş', 'toplama', 'çıkarma', 'bozuk para'],
      content: {
        introduction: 'Para birimlerini, dönüşümlerini ve hesaplamalarını öğreneceksin!',
        motivationQuote: 'Paranı iyi yönet! 💰',
        funFacts: [
          'Türk Lirası 1923\'te kullanılmaya başladı!',
          'Dünyadaki ilk madeni para Lidya\'da basıldı!',
          'Kağıt para Çin\'de icat edildi!'
        ],
        steps: [
          {
            title: '1 TL = 100 Kuruş',
            content: 'Bir lira yüz kuruşa eşittir.',
            visual: '1 TL = 100 kr | 2 TL = 200 kr',
            audio: 'Yüz kuruş bir lira!',
            example: { question: '3 TL kaç kuruş?', answer: '300 kuruş', explanation: '3 × 100 = 300!' }
          },
          {
            title: 'Bozuk Paralar',
            content: '5 kr, 10 kr, 25 kr, 50 kr, 1 TL madeni para.',
            visual: '🪙 5 kr | 🪙 10 kr | 🪙 25 kr | 🪙 50 kr | 🪙 1 TL',
            audio: 'Farklı değerde bozuk paralar var!',
            example: { question: '2 tane 50 kuruş kaç TL?', answer: '1 TL', explanation: '50 + 50 = 100 kr = 1 TL!' }
          },
          {
            title: 'Kağıt Paralar',
            content: '5 TL, 10 TL, 20 TL, 50 TL, 100 TL, 200 TL banknot.',
            visual: '💵 5 TL | 💵 10 TL | 💵 20 TL | 💵 50 TL | 💵 100 TL | 💵 200 TL',
            audio: 'Kağıt paralar daha büyük değerler!',
            example: { question: '3 tane 20 TL kaç TL?', answer: '60 TL', explanation: '3 × 20 = 60!' }
          },
          {
            title: 'Para Toplama',
            content: 'Önce TL, sonra kuruşları topla.',
            visual: '5 TL 30 kr + 3 TL 50 kr = 8 TL 80 kr',
            audio: 'Beş lira otuz artı üç lira elli eşittir sekiz lira seksen!',
            example: { question: '12 TL 60 kr + 7 TL 40 kr = ?', answer: '20 TL', explanation: '60 + 40 = 100 kr = 1 TL, 12+7+1 = 20!' }
          },
          {
            title: 'Para Çıkarma',
            content: 'Üst üste yaz, çıkar.',
            visual: '10 TL - 4 TL 50 kr = 5 TL 50 kr',
            audio: 'On liradan dört lira elli çıkar: beş lira elli!',
            example: { question: '20 TL - 8 TL 75 kr = ?', answer: '11 TL 25 kr', explanation: '20 TL = 19 TL 100 kr, 100-75=25!' }
          },
          {
            title: 'Para Üstü',
            content: 'Verilen para - tutar = para üstü.',
            visual: 'Aldın: 7 TL 50 kr | Verdin: 10 TL | Üstü: 2 TL 50 kr',
            audio: 'On liradan yedi lira elli çıkar = iki lira elli!',
            example: { question: '15 TL verdin, 12 TL 30 kr ödendi. Üstün?', answer: '2 TL 70 kr', explanation: '15 - 12,30 = 2,70!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '4 TL = ? kuruş', options: ['4', '40', '400', '4000'], correctAnswer: '400', explanation: '4 × 100 = 400!' },
          { type: 'fill-blank', question: '250 kuruş = ___ TL ___ kr', correctAnswer: '2 TL 50 kr', explanation: '250 = 200 + 50!' },
          { type: 'multiple-choice', question: '5 TL 60 kr + 4 TL 40 kr = ?', options: ['9 TL', '10 TL', '9 TL 100 kr', '10 TL 100 kr'], correctAnswer: '10 TL', explanation: '60 + 40 = 100 kr = 1 TL!' },
          { type: 'fill-blank', question: '20 TL - 13 TL 25 kr = ___', correctAnswer: '6 TL 75 kr', explanation: '20 - 13,25 = 6,75!' },
          { type: 'multiple-choice', question: '4 tane 25 kuruş = ?', options: ['25 kr', '50 kr', '75 kr', '1 TL'], correctAnswer: '1 TL', explanation: '4 × 25 = 100 kr = 1 TL!' },
          { type: 'fill-blank', question: '10 TL verdin, 6 TL 80 kr ödedin. Üstün = ___', correctAnswer: '3 TL 20 kr', explanation: '10 - 6,80 = 3,20!' },
          { type: 'multiple-choice', question: '50 TL + 50 TL = ?', options: ['50 TL', '100 TL', '500 TL', '1000 TL'], correctAnswer: '100 TL', explanation: '50 + 50 = 100!' },
          { type: 'fill-blank', question: '1 TL 50 kr × 2 = ___', correctAnswer: '3 TL', explanation: '150 × 2 = 300 kr = 3 TL!' },
          { type: 'multiple-choice', question: '200 TL hangi kağıt para?', options: ['Mor', 'Yeşil', 'Kırmızı', 'Mavi'], correctAnswer: 'Mor', explanation: '200 TL mor renktir!' },
          { type: 'fill-blank', question: '7 TL 25 kr + 2 TL 75 kr = ___', correctAnswer: '10 TL', explanation: '25 + 75 = 100 kr = 1 TL, 7+2+1 = 10!' }
        ]
      }
    }
  ]
};
