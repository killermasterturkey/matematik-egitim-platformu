// 3. SINIF - 4. TEMA: NESNELERİN GEOMETRİSİ (1)
import { Theme } from '../types';

export const tema4: Theme = {
  id: 'nesnelerin-geometrisi-1',
  title: 'Nesnelerin Geometrisi (1)',
  description: 'Geometrik cisimler, çokgenler ve çevre uzunluğu!',
  emoji: '📐',
  color: 'from-green-400 to-emerald-500',
  bgColor: 'bg-green-50',
  borderColor: 'border-green-200',
  textColor: 'text-green-600',
  hours: 21,
  objectives: [
    'Geometrik cisimlerin özelliklerini tanıma',
    'Çokgenleri kenar sayısına göre sınıflandırma',
    'Geometrik şekiller çizme',
    'Çevre uzunluğu hesaplama',
    'Sıvı ölçü birimlerini kullanma'
  ],
  keywords: ['Geometrik cisim', 'Köşe', 'Yüz', 'Ayrıt', 'Çokgen', 'Çevre', 'Litre'],
  generalizations: [
    'Geometrik cisimlerin köşe, yüz ve ayrıt özellikleri vardır.',
    'Geometrik şekiller kenar sayılarına göre sınıflandırılabilir.',
    'Çevre, bir şeklin sınırlarının toplam uzunluğudur.'
  ],
  topics: [
    {
      id: 'geometrik-cisimler',
      title: 'Geometrik Cisimlerin Özellikleri',
      description: 'Köşe, yüz ve ayrıt kavramları',
      emoji: '🧊',
      duration: '50 dk',
      difficulty: 2,
      keywords: ['köşe', 'yüz', 'ayrıt', 'küp', 'prizma', 'piramit'],
      content: {
        introduction: 'Geometrik cisimlerin köşe, yüz ve ayrıtlarını öğreneceksin!',
        motivationQuote: '3 boyutlu dünyayı keşfet! 🧊',
        funFacts: [
          'Mısır piramitleri geometrik cisimlerdir!',
          'Arı kovanı altıgen prizmalardan oluşur!',
          'Futbol topu 32 yüzlü bir cisimdir!'
        ],
        steps: [
          {
            title: 'Köşe',
            content: 'Ayrıtların birleştiği noktaya köşe denir.',
            visual: '🧊 Küpün 8 köşesi var',
            audio: 'Ayrıtlar köşede buluşur!',
            example: { question: 'Dikdörtgenler prizmasının kaç köşesi var?', answer: '8 köşe', explanation: 'Küp gibi 8 köşe!' }
          },
          {
            title: 'Yüz',
            content: 'Cismi çevreleyen düz yüzeylere yüz denir.',
            visual: '🧊 Küpün 6 yüzü var (hepsi kare)',
            audio: 'Küpün her tarafı bir yüz!',
            example: { question: 'Dikdörtgenler prizmasının kaç yüzü var?', answer: '6 yüz', explanation: '6 dikdörtgen yüz!' }
          },
          {
            title: 'Ayrıt',
            content: 'İki yüzün birleştiği çizgiye ayrıt denir.',
            visual: '🧊 Küpün 12 ayrıtı var',
            audio: 'Yüzler ayrıtlarda birleşir!',
            example: { question: 'Dikdörtgenler prizmasının kaç ayrıtı var?', answer: '12 ayrıt', explanation: 'Küp gibi 12 ayrıt!' }
          },
          {
            title: 'Küp',
            content: '6 kare yüzlü, 8 köşeli, 12 ayrıtlı cisim.',
            visual: '🎲 Zar = Küp | Yüz: 6 | Köşe: 8 | Ayrıt: 12',
            audio: 'Küpün tüm yüzleri karedir!',
            example: { question: 'Küpün bir yüzü kaç kenarlı?', answer: '4 kenar', explanation: 'Her yüz kare, 4 kenar!' }
          },
          {
            title: 'Dikdörtgenler Prizması',
            content: '6 dikdörtgen yüzlü cisim (kutu şekli).',
            visual: '📦 Kutu = Dikdörtgenler prizması',
            audio: 'Ayakkabı kutusu dikdörtgenler prizması!',
            example: { question: 'Kutu hangi cisim?', answer: 'Dikdörtgenler prizması', explanation: '6 dikdörtgen yüz!' }
          },
          {
            title: 'Piramit',
            content: 'Tabanı çokgen, yüzleri üçgen olan sivri cisim.',
            visual: '🔺 Piramit: 1 kare taban + 4 üçgen yüz',
            audio: 'Mısır piramitleri kare tabanlı!',
            example: { question: 'Kare tabanlı piramidin kaç yüzü var?', answer: '5 yüz', explanation: '1 kare + 4 üçgen = 5!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Küpün kaç yüzü var?', options: ['4', '6', '8', '12'], correctAnswer: '6', explanation: 'Küpün 6 kare yüzü var!' },
          { type: 'fill-blank', question: 'Küpün ___ köşesi var', correctAnswer: '8', explanation: '8 köşe!' },
          { type: 'multiple-choice', question: 'Dikdörtgenler prizmasının kaç ayrıtı var?', options: ['6', '8', '10', '12'], correctAnswer: '12', explanation: '12 ayrıt!' },
          { type: 'fill-blank', question: 'İki yüzün birleştiği çizgi = ___', correctAnswer: 'ayrıt', explanation: 'Ayrıt!' },
          { type: 'multiple-choice', question: 'Kare tabanlı piramidin kaç köşesi var?', options: ['4', '5', '6', '8'], correctAnswer: '5', explanation: '4 tabanda + 1 tepede = 5!' },
          { type: 'fill-blank', question: 'Küpün tüm yüzleri ___ şeklindedir', correctAnswer: 'kare', explanation: '6 kare yüz!' },
          { type: 'multiple-choice', question: 'Hangisinin 6 yüzü var?', options: ['Piramit', 'Küp', 'Koni', 'Küre'], correctAnswer: 'Küp', explanation: 'Küpün 6 yüzü var!' },
          { type: 'fill-blank', question: 'Ayrıtların birleştiği nokta = ___', correctAnswer: 'köşe', explanation: 'Köşe!' },
          { type: 'multiple-choice', question: 'Silindir kaç yüze sahip?', options: ['1', '2', '3', '4'], correctAnswer: '3', explanation: '2 daire + 1 eğri yüz = 3!' },
          { type: 'fill-blank', question: 'Kare tabanlı piramit: ___ üçgen yüz', correctAnswer: '4', explanation: '4 üçgen yan yüz!' }
        ]
      }
    },
    {
      id: 'cokgenler',
      title: 'Çokgenler ve Sınıflandırma',
      description: 'Kenar sayısına göre çokgenler',
      emoji: '⬡',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['üçgen', 'dörtgen', 'beşgen', 'altıgen', 'sekizgen', 'çokgen'],
      content: {
        introduction: 'Çokgenleri kenar sayılarına göre adlandırmayı ve sınıflandırmayı öğreneceksin!',
        motivationQuote: 'Kenarları say, adını bul! ⬡',
        funFacts: [
          'Arı kovanındaki hücreler altıgendir!',
          'Dur işareti sekizgendir!',
          'Futbol topu beşgen ve altıgenlerden oluşur!'
        ],
        steps: [
          {
            title: 'Çokgen Nedir?',
            content: 'En az 3 doğru parçasıyla çevrili kapalı şekil.',
            visual: '△ ▢ ⬠ ⬡ (3, 4, 5, 6 kenarlı)',
            audio: 'Çok kenar = çokgen!',
            example: { question: 'Daire çokgen mi?', answer: 'Hayır', explanation: 'Dairenin doğru kenarı yok!' }
          },
          {
            title: 'Üçgen (3 kenar)',
            content: '3 kenarı ve 3 köşesi olan çokgen.',
            visual: '△ Üçgen: 3 kenar, 3 köşe',
            audio: 'Üç = 3, üçgen!',
            example: { question: 'Üçgenin iç açıları toplamı?', answer: '180°', explanation: 'Her üçgende 180 derece!' }
          },
          {
            title: 'Dörtgen (4 kenar)',
            content: '4 kenarı olan çokgen: kare, dikdörtgen, paralelkenar...',
            visual: '▢ Kare, dikdörtgen, eşkenar dörtgen = dörtgen',
            audio: 'Dört kenar = dörtgen!',
            example: { question: 'Kare bir dörtgen mi?', answer: 'Evet', explanation: '4 kenar, dörtgen!' }
          },
          {
            title: 'Beşgen (5 kenar)',
            content: '5 kenarı ve 5 köşesi olan çokgen.',
            visual: '⬠ Beşgen: 5 kenar, 5 köşe',
            audio: 'Beş kenar = beşgen!',
            example: { question: 'Düzgün beşgenin tüm kenarları...?', answer: 'Eşit', explanation: 'Düzgün = eşit kenarlı!' }
          },
          {
            title: 'Altıgen (6 kenar)',
            content: '6 kenarı ve 6 köşesi olan çokgen.',
            visual: '⬡ Altıgen: 6 kenar, 6 köşe | Arı kovanı!',
            audio: 'Altı kenar = altıgen!',
            example: { question: 'Arı kovanındaki hücre?', answer: 'Altıgen', explanation: '6 kenarlı!' }
          },
          {
            title: 'Sekizgen (8 kenar)',
            content: '8 kenarı ve 8 köşesi olan çokgen.',
            visual: '🛑 DUR işareti = Sekizgen',
            audio: 'Sekiz kenar = sekizgen!',
            example: { question: 'Dur tabelası hangi çokgen?', answer: 'Sekizgen', explanation: '8 kenar!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '5 kenarlı çokgenin adı?', options: ['Dörtgen', 'Beşgen', 'Altıgen', 'Yedigen'], correctAnswer: 'Beşgen', explanation: '5 = beş, beşgen!' },
          { type: 'fill-blank', question: 'Üçgenin ___ köşesi var', correctAnswer: '3', explanation: '3 kenar, 3 köşe!' },
          { type: 'multiple-choice', question: 'Hangisi dörtgen değil?', options: ['Kare', 'Dikdörtgen', 'Üçgen', 'Paralelkenar'], correctAnswer: 'Üçgen', explanation: 'Üçgenin 3 kenarı var!' },
          { type: 'fill-blank', question: 'Altıgenin ___ kenarı var', correctAnswer: '6', explanation: 'Altı = 6!' },
          { type: 'multiple-choice', question: 'Dur işareti hangi çokgen?', options: ['Altıgen', 'Yedigen', 'Sekizgen', 'Dokuzgen'], correctAnswer: 'Sekizgen', explanation: '8 kenar!' },
          { type: 'fill-blank', question: 'Arı kovanı hücresi = ___', correctAnswer: 'altıgen', explanation: '6 kenarlı!' },
          { type: 'multiple-choice', question: '7 kenarlı çokgen?', options: ['Altıgen', 'Yedigen', 'Sekizgen', 'Dokuzgen'], correctAnswer: 'Yedigen', explanation: '7 kenar = yedigen!' },
          { type: 'fill-blank', question: 'Dikdörtgen bir ___dir', correctAnswer: 'dörtgen', explanation: '4 kenar!' },
          { type: 'multiple-choice', question: 'Hangisinin en az kenarı var?', options: ['Dörtgen', 'Beşgen', 'Altıgen', 'Üçgen'], correctAnswer: 'Üçgen', explanation: '3 kenar en az!' },
          { type: 'fill-blank', question: '10 kenarlı çokgen = ___', correctAnswer: 'ongen', explanation: 'On kenar!' }
        ]
      }
    },
    {
      id: 'geometrik-cizim',
      title: 'Geometrik Şekil Çizimi',
      description: 'Cetvel ve araçlarla çizim yapma',
      emoji: '📏',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['çizim', 'cetvel', 'pergel', 'şekil', 'ölçü'],
      content: {
        introduction: 'Cetvel ve diğer araçlarla geometrik şekiller çizmeyi öğreneceksin!',
        motivationQuote: 'Doğru araç, doğru çizim! 📏',
        funFacts: [
          'Pergel 2000 yıldır kullanılıyor!',
          'Mimarlar geometrik çizim yapar!',
          'CAD programları dijital çizim yapar!'
        ],
        steps: [
          {
            title: 'Cetvel Kullanımı',
            content: 'Düz çizgiler çizmek için cetvel kullan.',
            visual: '📏 Cetveli sıkıca tut, kalemle çiz',
            audio: 'Cetvel düz çizgi için!',
            example: { question: '5 cm çizgi nasıl çizilir?', answer: '0\'dan 5\'e işaretle, cetvel ile çiz', explanation: 'Cetvelle ölç ve çiz!' }
          },
          {
            title: 'Doğru Parçası Çizme',
            content: 'İki nokta arasına düz çizgi çiz.',
            visual: 'A •————• B (A\'dan B\'ye doğru parçası)',
            audio: 'İki noktayı düz çizgiyle birleştir!',
            example: { question: '7 cm doğru parçası çiz', answer: 'Cetvelle 7 cm ölç ve çiz', explanation: 'Başı ve sonu işaretle!' }
          },
          {
            title: 'Üçgen Çizimi',
            content: '3 kenarı olan şekli çiz.',
            visual: '△ 3 köşeyi çiz, birleştir',
            audio: 'Üç noktayı birleştir!',
            example: { question: 'Kenarları 3, 4, 5 cm üçgen', answer: 'Her kenarı ölçerek çiz', explanation: 'Cetvelle her kenarı ölç!' }
          },
          {
            title: 'Kare ve Dikdörtgen Çizimi',
            content: '4 dik açılı köşe, 4 kenar.',
            visual: '▢ Önce bir kenar, sonra dik kenarları çiz',
            audio: 'Dört dik açı olmalı!',
            example: { question: '4 cm kenarlı kare', answer: 'Her kenarı 4 cm çiz, köşeler dik açı', explanation: 'Tüm kenarlar eşit!' }
          },
          {
            title: 'Pergel ile Daire',
            content: 'Pergelı merkeze koy, döndür.',
            visual: '⭕ Pergelin bir ayağı merkezde, diğeri çizer',
            audio: 'Pergeli döndürerek daire çiz!',
            example: { question: 'Yarıçapı 3 cm daire', answer: 'Pergeli 3 cm\'ye ayarla, döndür', explanation: 'Yarıçap = merkezden kenara!' }
          },
          {
            title: 'İzometrik Çizim',
            content: 'Üç boyutlu nesneleri kağıda çiz.',
            visual: '🧊 Küpü izometrik çiz: 3 görünen yüz',
            audio: 'Gerçek gibi görünen çizim!',
            example: { question: 'Küpü nasıl çizersin?', answer: '3 yüzü görünecek şekilde', explanation: 'Üst, ön ve yan!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Düz çizgi çizmek için?', options: ['Pergel', 'Cetvel', 'Iletki', 'Ataç'], correctAnswer: 'Cetvel', explanation: 'Cetvel düz çizgi için!' },
          { type: 'fill-blank', question: 'Daire çizmek için ___ kullanılır', correctAnswer: 'pergel', explanation: 'Pergel daire çizer!' },
          { type: 'multiple-choice', question: '6 cm kare için kenar?', options: ['Her biri 6 cm', 'Toplam 6 cm', '2 kenar 6 cm', '6 kenar'], correctAnswer: 'Her biri 6 cm', explanation: 'Karenin 4 kenarı eşit!' },
          { type: 'fill-blank', question: 'Pergelın bir ayağı ___ noktasında durur', correctAnswer: 'merkez', explanation: 'Merkez noktası!' },
          { type: 'multiple-choice', question: 'Dikdörtgen için gerekli?', options: ['3 köşe', '4 köşe', '5 köşe', '6 köşe'], correctAnswer: '4 köşe', explanation: 'Dikdörtgenin 4 köşesi var!' },
          { type: 'fill-blank', question: 'Üçgen çizmek için en az ___ nokta gerek', correctAnswer: '3', explanation: '3 köşe!' },
          { type: 'multiple-choice', question: 'Yarıçapı 5 cm daire için pergel açıklığı?', options: ['2,5 cm', '5 cm', '10 cm', '15 cm'], correctAnswer: '5 cm', explanation: 'Yarıçap = 5 cm!' },
          { type: 'fill-blank', question: 'Cetvel ile ___ çizilir', correctAnswer: 'doğru parçası', explanation: 'Düz çizgi!' },
          { type: 'multiple-choice', question: 'Kare çizmek için kaç dik açı?', options: ['2', '3', '4', '5'], correctAnswer: '4', explanation: '4 köşe, 4 dik açı!' },
          { type: 'fill-blank', question: 'Çapı 8 cm dairenin yarıçapı = ___', correctAnswer: '4 cm', explanation: '8 ÷ 2 = 4 cm!' }
        ]
      }
    },
    {
      id: 'cevre-uzunlugu',
      title: 'Çevre Uzunluğu',
      description: 'Şekillerin çevre hesabı',
      emoji: '⭕',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['çevre', 'uzunluk', 'toplam', 'kenar', 'hesaplama'],
      content: {
        introduction: 'Şekillerin çevre uzunluğunu hesaplamayı öğreneceksin!',
        motivationQuote: 'Etrafını dolaş, uzunluğu bul! ⭕',
        funFacts: [
          'Atletizm pistinin çevresi 400 metre!',
          'Dünyanın çevresi 40.075 km!',
          'Altıgen en verimli çevre uzunluğuna sahip!'
        ],
        steps: [
          {
            title: 'Çevre Nedir?',
            content: 'Bir şeklin kenarlarının toplam uzunluğu.',
            visual: '▢ Çevre = kenar1 + kenar2 + kenar3 + kenar4',
            audio: 'Tüm kenarları topla!',
            example: { question: 'Kenarları 3, 4, 5 cm üçgenin çevresi?', answer: '12 cm', explanation: '3 + 4 + 5 = 12!' }
          },
          {
            title: 'Kare Çevresi',
            content: 'Çevre = 4 × kenar',
            visual: '▢ Kenar = 5 cm → Çevre = 4 × 5 = 20 cm',
            audio: '4 eşit kenar, 4 ile çarp!',
            example: { question: '7 cm kenarlı kare çevresi?', answer: '28 cm', explanation: '4 × 7 = 28!' }
          },
          {
            title: 'Dikdörtgen Çevresi',
            content: 'Çevre = 2 × (uzun kenar + kısa kenar)',
            visual: '▭ 6 cm × 4 cm → Çevre = 2 × (6+4) = 20 cm',
            audio: 'Uzun ve kısa kenarı topla, 2 ile çarp!',
            example: { question: '8 cm × 3 cm dikdörtgen çevresi?', answer: '22 cm', explanation: '2 × (8+3) = 22!' }
          },
          {
            title: 'Üçgen Çevresi',
            content: 'Çevre = kenar1 + kenar2 + kenar3',
            visual: '△ 5, 6, 7 cm → Çevre = 5 + 6 + 7 = 18 cm',
            audio: 'Üç kenarı topla!',
            example: { question: 'Eşkenar üçgen, kenar 9 cm?', answer: '27 cm', explanation: '3 × 9 = 27!' }
          },
          {
            title: 'Çevre Tahmin',
            content: 'Ölçmeden önce tahmin yap.',
            visual: '~20 cm mi ~30 cm mi? Sonra ölç!',
            audio: 'Önce tahmin et, sonra hesapla!',
            example: { question: '5 cm kenarlı kare ≈ ?', answer: '≈ 20 cm', explanation: '5 × 4 = 20, tahmin doğru!' }
          },
          {
            title: 'Ölçerek Çevre Bulma',
            content: 'Cetvelle kenarları ölç, topla.',
            visual: '📏 Her kenarı ölç, not al, topla',
            audio: 'Dikkatli ölç, doğru topla!',
            example: { question: 'Düzensiz şeklin çevresi?', answer: 'Her kenarı ölç ve topla', explanation: 'Toplam = çevre!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '6 cm kenarlı kare çevresi?', options: ['18 cm', '24 cm', '30 cm', '36 cm'], correctAnswer: '24 cm', explanation: '4 × 6 = 24!' },
          { type: 'fill-blank', question: 'Dikdörtgen 10 cm × 5 cm çevresi = ___ cm', correctAnswer: '30', explanation: '2 × (10+5) = 30!' },
          { type: 'multiple-choice', question: 'Üçgen: 4, 5, 6 cm çevresi?', options: ['12 cm', '15 cm', '18 cm', '20 cm'], correctAnswer: '15 cm', explanation: '4 + 5 + 6 = 15!' },
          { type: 'fill-blank', question: 'Eşkenar üçgen, kenar 8 cm, çevre = ___', correctAnswer: '24 cm', explanation: '3 × 8 = 24!' },
          { type: 'multiple-choice', question: 'Çevresi 32 cm olan kare kenarı?', options: ['6 cm', '7 cm', '8 cm', '9 cm'], correctAnswer: '8 cm', explanation: '32 ÷ 4 = 8!' },
          { type: 'fill-blank', question: 'Dikdörtgen: uzun 12, kısa 4. Çevre = ___', correctAnswer: '32 cm', explanation: '2 × (12+4) = 32!' },
          { type: 'multiple-choice', question: 'Düzgün beşgen, kenar 5 cm çevresi?', options: ['20 cm', '25 cm', '30 cm', '35 cm'], correctAnswer: '25 cm', explanation: '5 × 5 = 25!' },
          { type: 'fill-blank', question: 'Düzgün altıgen, kenar 6 cm, çevre = ___', correctAnswer: '36 cm', explanation: '6 × 6 = 36!' },
          { type: 'multiple-choice', question: 'Çevre = 28 cm, kenarlar 6, 6, ?, ?', options: ['7, 9', '8, 8', '6, 10', '5, 11'], correctAnswer: '8, 8', explanation: '6+6+8+8 = 28!' },
          { type: 'fill-blank', question: 'Kare: çevre 40 cm, kenar = ___', correctAnswer: '10 cm', explanation: '40 ÷ 4 = 10!' }
        ]
      }
    },
    {
      id: 'sivi-olcme',
      title: 'Sıvı Ölçme',
      description: 'Litre ve mililitre',
      emoji: '🧪',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['litre', 'mililitre', 'sıvı', 'ölçme', 'tahmin'],
      content: {
        introduction: 'Sıvıların hacmini litre ve mililitre ile ölçmeyi öğreneceksin!',
        motivationQuote: 'Her damla önemli! 🧪',
        funFacts: [
          'İnsan vücudunun %60ı sudur!',
          'Bir yüzme havuzu 2.5 milyon litre su alır!',
          'Günde 2 litre su içmeliyiz!'
        ],
        steps: [
          {
            title: 'Litre (L)',
            content: 'Sıvı ölçmek için kullanılan temel birim.',
            visual: '🧴 1 L = Büyük su şişesi',
            audio: 'Bir litre, büyük şişe kadar!',
            example: { question: '2 şişe su (1L\'lik) kaç litre?', answer: '2 litre', explanation: '1 + 1 = 2 L!' }
          },
          {
            title: 'Mililitre (mL)',
            content: '1 litre = 1000 mililitre',
            visual: '1 L = 1000 mL | 1 mL ≈ 20 damla',
            audio: 'Bin mililitre bir litre!',
            example: { question: '500 mL kaç litre?', answer: '0,5 L (yarım)', explanation: '500 mL = ½ L!' }
          },
          {
            title: 'Litreden Mililitreye',
            content: 'Litre × 1000 = Mililitre',
            visual: '2 L = 2 × 1000 = 2000 mL',
            audio: 'İki litre iki bin mililitre!',
            example: { question: '3,5 L kaç mL?', answer: '3500 mL', explanation: '3.5 × 1000 = 3500!' }
          },
          {
            title: 'Mililitreden Litreye',
            content: 'Mililitre ÷ 1000 = Litre',
            visual: '4500 mL = 4500 ÷ 1000 = 4,5 L',
            audio: 'Dört bin beş yüz mililitre = 4,5 litre!',
            example: { question: '2500 mL kaç L?', answer: '2,5 L', explanation: '2500 ÷ 1000 = 2,5!' }
          },
          {
            title: 'Günlük Örnekler',
            content: 'Çay bardağı ≈ 200 mL, Su bardağı ≈ 250 mL',
            visual: '☕ 200 mL | 🥛 250 mL | 🧴 1000 mL',
            audio: 'Günlük kapların hacimlerini bil!',
            example: { question: '4 bardak su (250 mL\'lik) kaç litre?', answer: '1 L', explanation: '4 × 250 = 1000 mL = 1 L!' }
          },
          {
            title: 'Sıvı Tahmin',
            content: 'Görerek tahmin yap, sonra ölç.',
            visual: 'Kova ≈ ? L → Tahmin: 10 L → Ölç: 8 L',
            audio: 'Önce tahmin et, sonra ölç!',
            example: { question: 'Pet şişe tahmini?', answer: '≈ 1,5 L veya 500 mL', explanation: 'Yaygın boyutlar!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '1 L = ? mL', options: ['10', '100', '1000', '10000'], correctAnswer: '1000', explanation: '1 litre = 1000 mililitre!' },
          { type: 'fill-blank', question: '2,5 L = ___ mL', correctAnswer: '2500', explanation: '2.5 × 1000 = 2500!' },
          { type: 'multiple-choice', question: '750 mL = ?', options: ['0,075 L', '0,75 L', '7,5 L', '75 L'], correctAnswer: '0,75 L', explanation: '750 ÷ 1000 = 0,75!' },
          { type: 'fill-blank', question: '3 L + 500 mL = ___ mL', correctAnswer: '3500', explanation: '3000 + 500 = 3500!' },
          { type: 'multiple-choice', question: 'Hangisi en fazla?', options: ['1 L', '999 mL', '1001 mL', '100 mL'], correctAnswer: '1001 mL', explanation: '1001 > 1000 > 999 > 100!' },
          { type: 'fill-blank', question: '½ L = ___ mL', correctAnswer: '500', explanation: '1000 ÷ 2 = 500!' },
          { type: 'multiple-choice', question: '4 bardak (250 mL) = ?', options: ['500 mL', '750 mL', '1 L', '1,5 L'], correctAnswer: '1 L', explanation: '4 × 250 = 1000 mL = 1 L!' },
          { type: 'fill-blank', question: '1,75 L = ___ mL', correctAnswer: '1750', explanation: '1.75 × 1000 = 1750!' },
          { type: 'multiple-choice', question: '¼ L = ?', options: ['25 mL', '100 mL', '250 mL', '400 mL'], correctAnswer: '250 mL', explanation: '1000 ÷ 4 = 250!' },
          { type: 'fill-blank', question: '6000 mL = ___ L', correctAnswer: '6', explanation: '6000 ÷ 1000 = 6!' }
        ]
      }
    }
  ]
};
