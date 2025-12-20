// 6. TEMA: NESNELERİN GEOMETRİSİ (2) - Şekiller
import { Theme } from '../types';

export const tema6: Theme = {
  id: 'nesnelerin-geometrisi-2',
  title: 'Nesnelerin Geometrisi (2)',
  description: 'Geometrik şekilleri tanıyalım! Üçgen, kare, dikdörtgen, çember...',
  emoji: '🔷',
  color: 'from-indigo-400 to-blue-500',
  bgColor: 'bg-indigo-50',
  borderColor: 'border-indigo-200',
  textColor: 'text-indigo-600',
  hours: 15,
  objectives: [
    'Geometrik şekilleri tanıma',
    'Şekillerin özelliklerini anlama',
    'Şekilleri sınıflandırma'
  ],
  keywords: ['Üçgen', 'Kare', 'Dikdörtgen', 'Çember', 'Köşe', 'Kenar'],
  generalizations: ['Nesneler ile geometrik yapılar ilişkilidir.', 'Geometrik yapılar ile geometrik şekiller ilişkilidir.'],
  topics: [
    {
      id: 'geometrik-sekiller',
      title: 'Geometrik Şekilleri Tanıyalım',
      description: 'Üçgen, kare, dikdörtgen ve çember',
      emoji: '🔺',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['üçgen', 'kare', 'dikdörtgen', 'çember'],
      content: {
        introduction: 'Etrafımız şekillerle dolu! Kapı dikdörtgen, pizza dilimi üçgen, tekerlek çember!',
        motivationQuote: 'Şekiller her yerde, gözlerini aç! 🔷',
        funFacts: [
          'Arı petekleri altıgen şeklindedir!',
          'Mısır piramitleri üçgen yüzlüdür!',
          'Dünya bir küre şeklindedir!'
        ],
        steps: [
          {
            title: 'Çember',
            content: 'Çember yuvarlak bir şekildir, köşesi yoktur.',
            visual: '⚪ Çember - Köşesiz, yuvarlak!',
            audio: 'Çember yuvarlak, köşesi yok. Top, tekerlek, saat çember şeklinde!',
            example: { question: 'Tekerlek hangi şekil?', answer: 'Çember', explanation: 'Tekerlek yuvarlak, çember!' }
          },
          {
            title: 'Üçgen',
            content: 'Üçgenin 3 köşesi ve 3 kenarı vardır.',
            visual: '🔺 Üçgen: 3 köşe, 3 kenar',
            audio: 'Üçgenin adı 3\'ten gelir. 3 köşe, 3 kenar!',
            example: { question: 'Üçgenin kaç köşesi var?', answer: '3', explanation: 'Üçgen = 3 köşe!' }
          },
          {
            title: 'Kare',
            content: 'Karenin 4 köşesi ve 4 eşit kenarı vardır.',
            visual: '⬜ Kare: 4 köşe, 4 eşit kenar',
            audio: 'Karenin 4 tarafı eşit uzunlukta!',
            example: { question: 'Karede kenarlar nasıl?', answer: 'Hepsi eşit', explanation: 'Kare: 4 eşit kenar!' }
          },
          {
            title: 'Dikdörtgen',
            content: 'Dikdörtgenin 4 köşesi var, karşılıklı kenarları eşit.',
            visual: '▬ Dikdörtgen: 2 uzun, 2 kısa kenar',
            audio: 'Dikdörtgen uzun kare gibi! Kapı, defter dikdörtgen.',
            example: { question: 'Defter hangi şekil?', answer: 'Dikdörtgen', explanation: 'Defter dikdörtgen şeklinde!' }
          },
          {
            title: 'Köşe ve Kenar',
            content: 'Köşe: Çizgilerin birleştiği nokta. Kenar: İki köşe arası çizgi.',
            visual: '▲ Köşe: 3 nokta | Kenar: 3 çizgi',
            audio: 'Köşeler nokta, kenarlar çizgi!',
            example: { question: 'Karenin kaç kenarı var?', answer: '4', explanation: 'Kare: 4 köşe, 4 kenar!' }
          },
          {
            title: 'Şekilleri Bul!',
            content: 'Etrafındaki nesnelerde şekilleri bul!',
            visual: '🚪 Kapı: Dikdörtgen | 🍕 Pizza: Çember',
            audio: 'Saat çember, pencere dikdörtgen, çatı üçgen!',
            example: { question: 'Tabak hangi şekil?', answer: 'Çember', explanation: 'Tabak yuvarlak, çember!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Üçgenin kaç kenarı var?', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: 'Üçgen = 3 kenar!' },
          { type: 'fill-blank', question: 'Çemberin ___ köşesi vardır', correctAnswer: 'hiç', explanation: 'Çember köşesiz!' },
          { type: 'multiple-choice', question: 'Hangi şeklin kenarları eşit?', options: ['Dikdörtgen', 'Üçgen', 'Kare', 'Çember'], correctAnswer: 'Kare', explanation: 'Kare: 4 eşit kenar!' },
          { type: 'fill-blank', question: 'Karenin ___ köşesi vardır', correctAnswer: '4', explanation: 'Kare: 4 köşe!' },
          { type: 'multiple-choice', question: 'Tekerlek hangi şekil?', options: ['Kare', 'Üçgen', 'Çember', 'Dikdörtgen'], correctAnswer: 'Çember', explanation: 'Tekerlek yuvarlak!' },
          { type: 'fill-blank', question: 'Dikdörtgenin ___ kenarı vardır', correctAnswer: '4', explanation: 'Dikdörtgen: 4 kenar!' },
          { type: 'multiple-choice', question: 'Pizza dilimi hangi şekil?', options: ['Çember', 'Kare', 'Üçgen', 'Dikdörtgen'], correctAnswer: 'Üçgen', explanation: 'Dilim üçgen şeklinde!' },
          { type: 'fill-blank', question: 'Kapı genellikle ___ şeklindedir', correctAnswer: 'dikdörtgen', explanation: 'Kapılar dikdörtgen!' },
          { type: 'multiple-choice', question: 'Hangi şekil yuvarlak?', options: ['Kare', 'Üçgen', 'Çember', 'Dikdörtgen'], correctAnswer: 'Çember', explanation: 'Çember yuvarlak!' },
          { type: 'fill-blank', question: 'Piramitlerin yüzleri ___ şeklindedir', correctAnswer: 'üçgen', explanation: 'Piramit yüzleri üçgen!' }
        ]
      }
    },
    {
      id: 'nesnelerde-sekiller',
      title: 'Günlük Hayatta Şekiller',
      description: 'Çevremizdeki nesnelerde şekilleri bulma',
      emoji: '🏠',
      duration: '40 dk',
      difficulty: 1,
      keywords: ['nesne', 'şekil', 'günlük', 'çevre'],
      content: {
        introduction: 'Evimizde, okulda, sokakta her yerde şekiller var! Onları bulalım!',
        motivationQuote: 'Şekil avcısı ol! 🔍',
        funFacts: [
          'Bal peteği en güçlü doğal yapıdır - altıgen!',
          'Gökkuşağı yarım çember şeklindedir!',
          'Kar taneleri altıgen yapıdadır!'
        ],
        steps: [
          {
            title: 'Evdeki Şekiller',
            content: 'Evdeki nesnelerde şekilleri bulalım!',
            visual: '🚪 Kapı: Dikdörtgen | 🪟 Pencere: Kare | ⏰ Saat: Çember',
            audio: 'Bak etrafına! Kapı dikdörtgen, saat çember, fayans kare!',
            example: { question: 'Televizyon hangi şekil?', answer: 'Dikdörtgen', explanation: 'TV ekranı dikdörtgen!' }
          },
          {
            title: 'Okuldaki Şekiller',
            content: 'Okulda da şekiller var!',
            visual: '📚 Kitap: Dikdörtgen | 📐 Cetvel: Dikdörtgen | ✏️ Kalem ucu: Üçgen',
            audio: 'Kitap dikdörtgen, silgi dikdörtgen veya kare, kalem ucu üçgen!',
            example: { question: 'Tahta hangi şekil?', answer: 'Dikdörtgen', explanation: 'Yazı tahtası dikdörtgen!' }
          },
          {
            title: 'Sokaktaki Şekiller',
            content: 'Trafik işaretleri ve binalar şekil dolu!',
            visual: '⚠️ Dikkat: Üçgen | 🛑 Dur: Sekizgen | 🚦 Işık: Çember',
            audio: 'Tehlike işareti üçgen, dur işareti sekizgen!',
            example: { question: 'Yaya geçidi işareti?', answer: 'Üçgen veya dikdörtgen', explanation: 'Trafik işaretleri çeşitli şekillerde!' }
          },
          {
            title: 'Yiyeceklerde Şekiller',
            content: 'Yiyecekler de şekil dolu!',
            visual: '🍕 Pizza: Çember | 🍰 Pasta dilimi: Üçgen | 🍞 Ekmek: Dikdörtgen',
            audio: 'Pizza çember, dilimi üçgen, sandviç dikdörtgen!',
            example: { question: 'Bisküvi genellikle?', answer: 'Çember veya kare', explanation: 'Bisküviler çeşitli şekillerde!' }
          },
          {
            title: 'Doğada Şekiller',
            content: 'Doğa da şekillerle dolu!',
            visual: '🌙 Ay: Çember | ⭐ Yıldız: Çokgen | 🌲 Çam: Üçgen',
            audio: 'Dolunay çember, çam ağacı üçgen gibi görünür!',
            example: { question: 'Portakal dilimi?', answer: 'Üçgen', explanation: 'Dilimler üçgen şeklinde!' }
          },
          {
            title: 'Şekil Avı!',
            content: 'Şimdi çevrende 5 şekil bul!',
            visual: '🔍 Şekil avcısı ol!',
            audio: 'Odanda kaç tane çember var? Kaç kare? Say!',
            example: { question: 'Oturduğun sandalye?', answer: 'Dikdörtgenler', explanation: 'Sandalye dikdörtgen parçalardan oluşur!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Saat hangi şekil?', options: ['Kare', 'Çember', 'Üçgen', 'Dikdörtgen'], correctAnswer: 'Çember', explanation: 'Saat genellikle çember!' },
          { type: 'fill-blank', question: 'Tehlike işareti ___ şeklindedir', correctAnswer: 'üçgen', explanation: 'Üçgen = Dikkat!' },
          { type: 'multiple-choice', question: 'Defter hangi şekil?', options: ['Çember', 'Dikdörtgen', 'Üçgen', 'Oval'], correctAnswer: 'Dikdörtgen', explanation: 'Defter dikdörtgen!' },
          { type: 'fill-blank', question: 'Fayanslar genellikle ___ şeklindedir', correctAnswer: 'kare', explanation: 'Fayanslar çoğunlukla kare!' },
          { type: 'multiple-choice', question: 'Pizza hangi şekil?', options: ['Üçgen', 'Kare', 'Çember', 'Dikdörtgen'], correctAnswer: 'Çember', explanation: 'Bütün pizza çember!' },
          { type: 'fill-blank', question: 'Pencereler çoğunlukla ___ veya dikdörtgendir', correctAnswer: 'kare', explanation: 'Pencereler kare veya dikdörtgen!' },
          { type: 'multiple-choice', question: 'Çam ağacı neye benzer?', options: ['Kare', 'Çember', 'Üçgen', 'Dikdörtgen'], correctAnswer: 'Üçgen', explanation: 'Çam üçgen şeklinde!' },
          { type: 'fill-blank', question: 'Top ___ şeklindedir', correctAnswer: 'çember', explanation: 'Top yuvarlak!' },
          { type: 'multiple-choice', question: 'Dur işareti kaç kenarlı?', options: ['3', '4', '6', '8'], correctAnswer: '8', explanation: 'Sekizgen = 8 kenar!' },
          { type: 'fill-blank', question: 'Kapı ___ şeklindedir', correctAnswer: 'dikdörtgen', explanation: 'Kapılar dikdörtgen!' }
        ]
      }
    },
    {
      id: 'sekilleri-siniflandirma',
      title: 'Şekilleri Sınıflandıralım',
      description: 'Şekilleri özelliklerine göre gruplandırma',
      emoji: '📊',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['sınıflandırma', 'gruplama', 'özellik', 'karşılaştırma'],
      content: {
        introduction: 'Şekilleri özelliklerine göre gruplandırabiliriz! Köşeli mi yuvarlak mı?',
        motivationQuote: 'Gruplamak düzeni sağlar! 📊',
        funFacts: [
          'Matematikçiler şekilleri binlerce yıldır sınıflandırır!',
          'Dörtgenler 4 kenarlı şekillerin ailesidir!',
          'Çokgenler çok kenarlı şekillerdir!'
        ],
        steps: [
          {
            title: 'Köşeli ve Yuvarlak',
            content: 'Şekiller köşeli veya yuvarlak olabilir.',
            visual: 'Köşeli: 🔺⬜⬛ | Yuvarlak: ⚪🔵',
            audio: 'Üçgen, kare köşeli. Çember yuvarlak!',
            example: { question: 'Dikdörtgen köşeli mi?', answer: 'Evet', explanation: 'Dikdörtgenin 4 köşesi var!' }
          },
          {
            title: 'Kenar Sayısına Göre',
            content: '3 kenar: Üçgen, 4 kenar: Dörtgen, köşesiz: Çember',
            visual: '3️⃣ Üçgen | 4️⃣ Kare, Dikdörtgen | 0️⃣ Çember',
            audio: 'Kenar sayısı şekli tanımlar!',
            example: { question: '6 kenarlı şekil?', answer: 'Altıgen', explanation: '6 kenar = Altıgen!' }
          },
          {
            title: 'Eşit Kenarlı mı?',
            content: 'Kare: Tüm kenarlar eşit. Dikdörtgen: Karşı kenarlar eşit.',
            visual: '⬜ Kare: 4 eşit | ▬ Dikdörtgen: 2+2 eşit',
            audio: 'Karenin 4 kenarı aynı uzunlukta!',
            example: { question: 'Dikdörtgende eşit kenar var mı?', answer: 'Evet, karşılıklılar', explanation: 'Uzunlar eşit, kısalar eşit!' }
          },
          {
            title: 'Büyüklüğe Göre',
            content: 'Aynı şekiller farklı büyüklüklerde olabilir.',
            visual: '🔺 (küçük) 🔺 (orta) 🔺 (büyük)',
            audio: 'Üçgen küçük de olsa büyük de olsa üçgendir!',
            example: { question: 'Büyük çember, şekil olarak ne?', answer: 'Yine çember', explanation: 'Büyüklük şekli değiştirmez!' }
          },
          {
            title: 'Renk ve Şekil',
            content: 'Renk değişse de şekil aynı kalır.',
            visual: '🔵 🔴 🟢 Hepsi çember!',
            audio: 'Mavi, kırmızı, yeşil çember - hepsi çember!',
            example: { question: 'Sarı kare şekil olarak ne?', answer: 'Kare', explanation: 'Renk şekli değiştirmez!' }
          },
          {
            title: 'Şekil Grupları Oluştur!',
            content: 'Verilen şekilleri gruplandır!',
            visual: '🔺🔺🔺 | ⬜⬜ | ⚪⚪⚪⚪',
            audio: 'Üçgenleri bir gruba, kareleri bir gruba, çemberleri bir gruba koy!',
            example: { question: '🔺⬜🔺⚪🔺 kaç üçgen?', answer: '3', explanation: '3 tane üçgen var!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Hangi şekil köşeli değil?', options: ['Üçgen', 'Kare', 'Çember', 'Dikdörtgen'], correctAnswer: 'Çember', explanation: 'Çember yuvarlak, köşesiz!' },
          { type: 'fill-blank', question: 'Karenin ___ kenarı eşittir', correctAnswer: '4', explanation: 'Kare: 4 eşit kenar!' },
          { type: 'multiple-choice', question: 'Hangileri dörtgen?', options: ['Üçgen, Çember', 'Kare, Dikdörtgen', 'Çember, Kare', 'Üçgen, Kare'], correctAnswer: 'Kare, Dikdörtgen', explanation: '4 kenar = Dörtgen!' },
          { type: 'fill-blank', question: '5 kenarlı şekil: ___', correctAnswer: 'beşgen', explanation: '5 = Beşgen!' },
          { type: 'multiple-choice', question: 'Büyük üçgen hangi şekil?', options: ['Kare', 'Üçgen', 'Çember', 'Dikdörtgen'], correctAnswer: 'Üçgen', explanation: 'Büyük de olsa üçgen!' },
          { type: 'fill-blank', question: 'Çemberin köşe sayısı: ___', correctAnswer: '0', explanation: 'Çember köşesiz!' },
          { type: 'multiple-choice', question: '🔺🔺⬜🔺⬜ kaç üçgen?', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: '3 tane üçgen!' },
          { type: 'fill-blank', question: 'Dikdörtgenin kenar sayısı: ___', correctAnswer: '4', explanation: '4 kenar!' },
          { type: 'multiple-choice', question: 'Yuvarlak şekiller grubu?', options: ['Kare, Dikdörtgen', 'Çember, Oval', 'Üçgen, Çember', 'Kare, Çember'], correctAnswer: 'Çember, Oval', explanation: 'İkisi de yuvarlak!' },
          { type: 'fill-blank', question: 'Kırmızı kare, şekil olarak ___', correctAnswer: 'kare', explanation: 'Renk şekli değiştirmez!' }
        ]
      }
    }
  ]
};
