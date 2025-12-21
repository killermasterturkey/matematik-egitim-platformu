// 2. SINIF - 1. TEMA: NESNELERİN GEOMETRİSİ (1)
import { Theme } from '../../types';

export const tema1: Theme = {
  id: 'nesnelerin-geometrisi-1',
  title: 'Nesnelerin Geometrisi (1)',
  description: 'Geometrik cisimleri tanıyalım! Küp, silindir, koni, küre...',
  emoji: '🎲',
  color: 'from-blue-400 to-indigo-500',
  bgColor: 'bg-blue-50',
  borderColor: 'border-blue-200',
  textColor: 'text-blue-600',
  hours: 25,
  objectives: [
    'Geometrik cisimleri tanıma ve adlandırma',
    'Cisimlerden yapılar oluşturma',
    'Şekillerle modeller oluşturma',
    'Sıvı miktarını tahmin etme'
  ],
  keywords: ['Küp', 'Silindir', 'Koni', 'Küre', 'Prizma', 'Geometrik cisim'],
  generalizations: ['Geometrik cisimler üç boyutludur.', 'Geometrik şekiller iki boyutludur.'],
  topics: [
    {
      id: 'geometrik-cisimler',
      title: 'Geometrik Cisimleri Tanıyalım',
      description: 'Küp, küre, silindir, koni ve prizma',
      emoji: '🎲',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['küp', 'küre', 'silindir', 'koni', 'prizma'],
      content: {
        introduction: 'Etrafımızdaki nesneler geometrik cisimlere benzer! Top küre, zar küp, teneke kutu silindir!',
        motivationQuote: 'Dünya 3 boyutlu şekillerle dolu! 🎲',
        funFacts: [
          'Mısır piramitleri dünyanın en ünlü geometrik yapılarıdır!',
          'Futbol topu aslında 32 parçadan oluşan bir küredir!',
          'Arı petekleri altıgen prizmadır!'
        ],
        steps: [
          {
            title: 'Küp',
            content: 'Küpün 6 yüzü var ve hepsi kare. Zarlar ve küp şeker gibi!',
            visual: '🎲 Küp: 6 kare yüz, 8 köşe, 12 kenar',
            audio: 'Küpün tüm yüzleri kare şeklindedir. Zar, küp şekline örnektir.',
            example: { question: 'Küpün kaç yüzü var?', answer: '6', explanation: 'Küpün 6 tane kare yüzü var!' }
          },
          {
            title: 'Küre',
            content: 'Küre tamamen yuvarlak! Top, dünya, portakal gibi.',
            visual: '⚽ Küre: Yuvarlak, köşesiz, kenarsız',
            audio: 'Kürenin köşesi ve kenarı yoktur, her yeri yuvarlaktır.',
            example: { question: 'Top hangi geometrik cisim?', answer: 'Küre', explanation: 'Top tamamen yuvarlak, yani küre!' }
          },
          {
            title: 'Silindir',
            content: 'Silindirin iki çember yüzü ve yuvarlak gövdesi var. Teneke kutu gibi!',
            visual: '🥫 Silindir: 2 çember yüz, yuvarlak gövde',
            audio: 'Silindirin üstü ve altı çember, yanları yuvarlaktır.',
            example: { question: 'Konserve kutusu hangi cisim?', answer: 'Silindir', explanation: 'Konserve kutusu silindir şeklinde!' }
          },
          {
            title: 'Koni',
            content: 'Koninin bir çember tabanı ve sivri tepesi var. Dondurma külahı gibi!',
            visual: '🍦 Koni: 1 çember taban, sivri tepe',
            audio: 'Dondurma külahı, trafik konisi koni şeklindedir.',
            example: { question: 'Dondurma külahı hangi cisim?', answer: 'Koni', explanation: 'Külah altı çember, üstü sivri - koni!' }
          },
          {
            title: 'Dikdörtgenler Prizması',
            content: 'Dikdörtgenler prizmasının 6 yüzü dikdörtgen. Kutu gibi!',
            visual: '📦 Prizma: 6 dikdörtgen yüz',
            audio: 'Ayakkabı kutusu, cep telefonu prizması örneğidir.',
            example: { question: 'Kitap hangi cisme benzer?', answer: 'Dikdörtgenler prizması', explanation: 'Kitap kutumsu şekilde!' }
          },
          {
            title: 'Cisimleri Günlük Hayatta Bul!',
            content: 'Etrafında geometrik cisimleri bul!',
            visual: '🔍 Top:Küre | Kalem:Silindir | Zar:Küp',
            audio: 'Evinde ve okulunda geometrik cisimleri ara!',
            example: { question: 'Bardak hangi cisim?', answer: 'Silindir', explanation: 'Bardak silindir şeklinde!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Küpün kaç yüzü var?', options: ['4', '5', '6', '8'], correctAnswer: '6', explanation: 'Küpün 6 kare yüzü var!' },
          { type: 'fill-blank', question: 'Top ___ şeklindedir', correctAnswer: 'küre', explanation: 'Top tamamen yuvarlak!' },
          { type: 'multiple-choice', question: 'Dondurma külahı hangi cisim?', options: ['Küp', 'Koni', 'Silindir', 'Küre'], correctAnswer: 'Koni', explanation: 'Külah koni şeklinde!' },
          { type: 'fill-blank', question: 'Teneke kutu ___ şeklindedir', correctAnswer: 'silindir', explanation: 'Teneke kutu silindir!' },
          { type: 'multiple-choice', question: 'Hangisinin köşesi yok?', options: ['Küp', 'Prizma', 'Küre', 'Piramit'], correctAnswer: 'Küre', explanation: 'Küre tamamen yuvarlak!' },
          { type: 'fill-blank', question: 'Zar ___ şeklindedir', correctAnswer: 'küp', explanation: 'Zar küp şeklinde!' },
          { type: 'multiple-choice', question: 'Silindirin üstü ve altı hangi şekil?', options: ['Kare', 'Üçgen', 'Çember', 'Dikdörtgen'], correctAnswer: 'Çember', explanation: 'Silindirin yüzleri çember!' },
          { type: 'fill-blank', question: 'Koninin tepesi ___', correctAnswer: 'sivri', explanation: 'Koni sivri uçlu!' },
          { type: 'multiple-choice', question: 'Kutu hangi cisim?', options: ['Küre', 'Koni', 'Prizma', 'Silindir'], correctAnswer: 'Prizma', explanation: 'Kutu dikdörtgenler prizması!' },
          { type: 'fill-blank', question: 'Dünyamız ___ şeklindedir', correctAnswer: 'küre', explanation: 'Dünya bir küre!' }
        ]
      }
    },
    {
      id: 'cisimlerden-yapilar',
      title: 'Cisimlerden Yapılar Oluşturalım',
      description: 'Geometrik cisimlerle özgün yapılar kurma',
      emoji: '🏗️',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['yapı', 'model', 'birleştirme', 'tasarım'],
      content: {
        introduction: 'Geometrik cisimlerle harika yapılar oluşturabilirsin! Lego gibi!',
        motivationQuote: 'Her mimar geometri bilir! 🏗️',
        funFacts: [
          'Mısır piramitleri kare tabanlı piramitlerdir!',
          'Eyfel Kulesi metal üçgenlerden yapılmıştır!',
          'İglo yarım küre şeklindedir!'
        ],
        steps: [
          {
            title: 'Cisimleri Birleştirme',
            content: 'Farklı cisimleri üst üste veya yan yana koyarak yapılar oluştur.',
            visual: '🎲 + 🎲 = 🏛️ İki küp yan yana',
            audio: 'Küpleri üst üste koyarak kule yapabilirsin.',
            example: { question: '3 küp üst üste ne olur?', answer: 'Kule', explanation: 'Üst üste küpler kule oluşturur!' }
          },
          {
            title: 'Ev Modeli',
            content: 'Prizma + üçgen prizma = ev şekli!',
            visual: '🏠 = 📦 (gövde) + 🔺 (çatı)',
            audio: 'Evin gövdesi prizma, çatısı üçgen prizma!',
            example: { question: 'Evin çatısı hangi cisim?', answer: 'Üçgen prizma', explanation: 'Çatı üçgen prizmadır!' }
          },
          {
            title: 'Araç Modeli',
            content: 'Prizma + silindirler (tekerlekler) = araba!',
            visual: '🚗 = 📦 + 🛞🛞🛞🛞',
            audio: 'Araba gövdesi prizma, tekerlekler silindir!',
            example: { question: 'Tekerlek hangi cisim?', answer: 'Silindir', explanation: 'Tekerlek silindir şeklinde!' }
          },
          {
            title: 'Robot Modeli',
            content: 'Küp (kafa) + prizma (gövde) + silindirler (kollar)!',
            visual: '🤖 = 🎲 + 📦 + 🥫🥫',
            audio: 'Robotları geometrik cisimlerle tasarlayabilirsin!',
            example: { question: 'Robot kafası için hangi cisim?', answer: 'Küp veya küre', explanation: 'Küp veya küre kullanılır!' }
          },
          {
            title: 'Kendi Yapını Tasarla!',
            content: 'Hayal gücünü kullan ve özgün yapılar oluştur!',
            visual: '✨ Sen bir mimarsın!',
            audio: 'Farklı cisimleri birleştirerek neler yapabilirsin?',
            example: { question: 'Roket nasıl yapılır?', answer: 'Koni + silindir', explanation: 'Roket üstü koni, gövdesi silindir!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Ev çatısı hangi cisim?', options: ['Küp', 'Silindir', 'Üçgen prizma', 'Küre'], correctAnswer: 'Üçgen prizma', explanation: 'Çatı üçgen prizma!' },
          { type: 'fill-blank', question: 'Tekerlek ___ şeklindedir', correctAnswer: 'silindir', explanation: 'Tekerlek silindir!' },
          { type: 'multiple-choice', question: 'İglo neye benzer?', options: ['Küp', 'Yarım küre', 'Koni', 'Silindir'], correctAnswer: 'Yarım küre', explanation: 'İglo yarım küre!' },
          { type: 'fill-blank', question: 'Piramit tabanı ___ şeklindedir', correctAnswer: 'kare', explanation: 'Piramit kare tabanlı!' },
          { type: 'multiple-choice', question: 'Roketin ucu hangi cisim?', options: ['Küp', 'Koni', 'Küre', 'Silindir'], correctAnswer: 'Koni', explanation: 'Roket ucu koni!' },
          { type: 'fill-blank', question: '3 küpü üst üste koyunca ___ olur', correctAnswer: 'kule', explanation: 'Üst üste = kule!' },
          { type: 'multiple-choice', question: 'Araba gövdesi hangi cisim?', options: ['Küre', 'Prizma', 'Koni', 'Silindir'], correctAnswer: 'Prizma', explanation: 'Araba gövdesi prizma!' },
          { type: 'fill-blank', question: 'Kar adamı ___ cisimlerden yapılır', correctAnswer: 'küre', explanation: 'Kar topları küre!' },
          { type: 'multiple-choice', question: 'Masa ayağı hangi cisim?', options: ['Küre', 'Koni', 'Silindir', 'Prizma'], correctAnswer: 'Silindir', explanation: 'Masa ayağı genellikle silindir!' },
          { type: 'fill-blank', question: 'Lego parçaları genellikle ___ şeklindedir', correctAnswer: 'küp', explanation: 'Lego parçaları küp veya prizma!' }
        ]
      }
    },
    {
      id: 'sekillerle-modeller',
      title: 'Şekillerle Modeller Oluşturalım',
      description: 'Üçgen, kare, dikdörtgen ve çemberle tasarımlar',
      emoji: '🎨',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['model', 'tasarım', 'birleştirme', 'şekil'],
      content: {
        introduction: 'Geometrik şekilleri birleştirerek harika desenler ve resimler yapabilirsin!',
        motivationQuote: 'Şekillerle sanat yap! 🎨',
        funFacts: [
          'Mondrian ünlü resimlerini kareler ve dikdörtgenlerle yaptı!',
          'Mozaikler geometrik şekillerden oluşur!',
          'Mandala desenleri çemberlerden yapılır!'
        ],
        steps: [
          {
            title: 'Şekilleri Birleştirme',
            content: 'Farklı şekilleri yan yana veya üst üste koyarak yeni şekiller oluştur.',
            visual: '△ + △ = ◇ İki üçgen = eşkenar dörtgen',
            audio: 'İki üçgeni birleştirerek dörtgen yapabilirsin.',
            example: { question: 'İki kareyi yan yana koysan?', answer: 'Dikdörtgen', explanation: 'İki kare = bir dikdörtgen!' }
          },
          {
            title: 'Ev Çizimi',
            content: 'Dikdörtgen + üçgen = ev!',
            visual: '🏠 = ⬜ (duvar) + △ (çatı)',
            audio: 'Evin duvarı dikdörtgen, çatısı üçgen!',
            example: { question: 'Ev çatısı hangi şekil?', answer: 'Üçgen', explanation: 'Çatı üçgen!' }
          },
          {
            title: 'Araba Çizimi',
            content: 'Dikdörtgen + çemberler = araba!',
            visual: '🚗 = ▬ (gövde) + ⚪⚪ (tekerlekler)',
            audio: 'Araba gövdesi dikdörtgen, tekerlekler çember!',
            example: { question: 'Tekerlekler hangi şekil?', answer: 'Çember', explanation: 'Tekerlekler çember!' }
          },
          {
            title: 'Çiçek Çizimi',
            content: 'Çember (orta) + çemberler veya üçgenler (yapraklar)!',
            visual: '🌸 = ⚪ + 🔵🔵🔵🔵🔵',
            audio: 'Çiçek ortası çember, yaprakları yuvarlak veya sivri!',
            example: { question: 'Papatya ortası hangi şekil?', answer: 'Çember', explanation: 'Papatya ortası çember!' }
          },
          {
            title: 'Yaratıcı Ol!',
            content: 'Kendi tasarımlarını şekillerle yap!',
            visual: '✏️ Hayal et ve çiz!',
            audio: 'Şekillerle robot, uzay gemisi, hayvan çizebilirsin!',
            example: { question: 'Şekillerle ne çizersin?', answer: 'Her şeyi!', explanation: 'Hayal gücün sınır!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Ev çatısı hangi şekil?', options: ['Kare', 'Üçgen', 'Çember', 'Dikdörtgen'], correctAnswer: 'Üçgen', explanation: 'Çatı üçgen!' },
          { type: 'fill-blank', question: 'İki kare yan yana = ___', correctAnswer: 'dikdörtgen', explanation: 'İki kare = dikdörtgen!' },
          { type: 'multiple-choice', question: 'Tekerlek hangi şekil?', options: ['Kare', 'Üçgen', 'Çember', 'Dikdörtgen'], correctAnswer: 'Çember', explanation: 'Tekerlek çember!' },
          { type: 'fill-blank', question: 'Güneş ___ şeklindedir', correctAnswer: 'çember', explanation: 'Güneş çember!' },
          { type: 'multiple-choice', question: 'Kapı hangi şekil?', options: ['Üçgen', 'Çember', 'Dikdörtgen', 'Yıldız'], correctAnswer: 'Dikdörtgen', explanation: 'Kapı dikdörtgen!' },
          { type: 'fill-blank', question: 'İki üçgen birleşirse ___ olabilir', correctAnswer: 'kare', explanation: 'İki üçgen = kare veya dörtgen!' },
          { type: 'multiple-choice', question: 'Robot kafası hangi şekil?', options: ['Kare', 'Dikdörtgen', 'Her ikisi', 'Hiçbiri'], correctAnswer: 'Her ikisi', explanation: 'Kare veya dikdörtgen olabilir!' },
          { type: 'fill-blank', question: 'Pizza ___ şeklindedir', correctAnswer: 'çember', explanation: 'Pizza çember!' },
          { type: 'multiple-choice', question: 'Bayrak direği şekli?', options: ['Üçgen', 'Dikdörtgen', 'Çember', 'Çizgi'], correctAnswer: 'Dikdörtgen', explanation: 'Bayrak dikdörtgen!' },
          { type: 'fill-blank', question: 'Yelken genellikle ___ şeklindedir', correctAnswer: 'üçgen', explanation: 'Yelken üçgen!' }
        ]
      }
    },
    {
      id: 'konum-degisimi',
      title: 'Konum Değişse de Şekil Aynı',
      description: 'Döndürme ve kaydırma ile şekil değişmez',
      emoji: '🔄',
      duration: '35 dk',
      difficulty: 2,
      keywords: ['döndürme', 'kaydırma', 'konum', 'sabit'],
      content: {
        introduction: 'Bir şekli döndürsen veya kaydırsan şekil aynı kalır! Sadece yeri değişir.',
        motivationQuote: 'Şekiller sadık arkadaşlar - hep aynı kalırlar! 🔄',
        funFacts: [
          'Aynada yansıman tersine döner ama sen aynı kişisin!',
          'Dünya döndüğünde şekli değişmez!',
          'Araba gitse de şekli aynı kalır!'
        ],
        steps: [
          {
            title: 'Döndürme',
            content: 'Şekli döndürdüğünde şekil aynı kalır.',
            visual: '⬜ → ◇ → ⬜ Kare döndü ama hâlâ kare!',
            audio: 'Kareyi çevir, yine kare! Şekil değişmez.',
            example: { question: 'Üçgeni ters çevirsen ne olur?', answer: 'Yine üçgen', explanation: 'Döndürme şekli değiştirmez!' }
          },
          {
            title: 'Kaydırma',
            content: 'Şekli sağa, sola, yukarı veya aşağı kaydırsan yine aynı.',
            visual: '⚪ → → → ⚪ Çember kaydı ama çember!',
            audio: 'Çemberi sağa kaydır, yine çember!',
            example: { question: 'Dikdörtgeni sola kaydırsan?', answer: 'Yine dikdörtgen', explanation: 'Kaydırma şekli değiştirmez!' }
          },
          {
            title: 'Büyütme ve Küçültme',
            content: 'Şekli büyütsen veya küçültsen şekil türü aynı.',
            visual: '△ (küçük) → △ (orta) → △ (büyük)',
            audio: 'Büyük üçgen de üçgen, küçük de!',
            example: { question: 'Büyük kare hangi şekil?', answer: 'Kare', explanation: 'Boyut değişse de kare!' }
          },
          {
            title: 'Cisimler İçin de Geçerli',
            content: 'Küpü döndür, hâlâ küp! Topu yuvarla, hâlâ küre!',
            visual: '🎲 → 🎲 Zar döndü ama küp!',
            audio: 'Zarı nasıl koyarsan koy, 6 yüzlü küp!',
            example: { question: 'Topu yuvarlarsan?', answer: 'Yine küre', explanation: 'Yuvarlamak şekli değiştirmez!' }
          },
          {
            title: 'Öğrendiklerimiz',
            content: 'Konum, yön veya boyut değişse de şeklin özellikleri aynı kalır!',
            visual: '✨ Şekiller sabittir!',
            audio: 'Şekillerin özellikleri hiç değişmez!',
            example: { question: 'Şeklin özelliği değişir mi?', answer: 'Hayır', explanation: 'Özellikler sabittir!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Kareyi döndürsen ne olur?', options: ['Çember', 'Üçgen', 'Kare', 'Dikdörtgen'], correctAnswer: 'Kare', explanation: 'Döndürme şekli değiştirmez!' },
          { type: 'fill-blank', question: 'Çemberi kaydırsan yine ___ olur', correctAnswer: 'çember', explanation: 'Kaydırma şekli değiştirmez!' },
          { type: 'multiple-choice', question: 'Büyük üçgen hangi şekil?', options: ['Kare', 'Çember', 'Üçgen', 'Dikdörtgen'], correctAnswer: 'Üçgen', explanation: 'Boyut değişse de üçgen!' },
          { type: 'fill-blank', question: 'Küpü döndürsen yine ___', correctAnswer: 'küp', explanation: 'Küp küp kalır!' },
          { type: 'multiple-choice', question: 'Topu yuvarlarsan?', options: ['Küp olur', 'Küre kalır', 'Koni olur', 'Kaybolur'], correctAnswer: 'Küre kalır', explanation: 'Küre hep küre!' },
          { type: 'fill-blank', question: 'Şekli ters çevirsen ___ değişmez', correctAnswer: 'şekil', explanation: 'Şekil aynı kalır!' },
          { type: 'multiple-choice', question: 'Dikdörtgeni küçültsen?', options: ['Kare', 'Dikdörtgen', 'Üçgen', 'Nokta'], correctAnswer: 'Dikdörtgen', explanation: 'Küçük dikdörtgen de dikdörtgen!' },
          { type: 'fill-blank', question: 'Konum değişse ___ aynı kalır', correctAnswer: 'şekil', explanation: 'Şekil özellikleri sabit!' },
          { type: 'multiple-choice', question: 'Silindiri yatırsan?', options: ['Küre', 'Silindir', 'Koni', 'Küp'], correctAnswer: 'Silindir', explanation: 'Yatan silindir de silindir!' },
          { type: 'fill-blank', question: 'Büyütme şekli ___', correctAnswer: 'değiştirmez', explanation: 'Şekil sabit kalır!' }
        ]
      }
    },
    {
      id: 'sivi-olcme',
      title: 'Sıvı Miktarını Ölçelim',
      description: 'Standart olmayan araçlarla sıvı ölçme',
      emoji: '🥤',
      duration: '40 dk',
      difficulty: 1,
      keywords: ['sıvı', 'ölçme', 'bardak', 'tahmin'],
      content: {
        introduction: 'Su, süt, meyve suyu... sıvıları ölçmeyi öğrenelim! Bardak ve kaşıkla ölçebiliriz.',
        motivationQuote: 'Ölçerek doğru miktarı buluruz! 🥤',
        funFacts: [
          'İnsan vücudunun %60\'ı sudur!',
          'Bir fil günde 200 litre su içer!',
          'Dünya\'nın %71\'i su ile kaplıdır!'
        ],
        steps: [
          {
            title: 'Sıvı Nedir?',
            content: 'Sıvılar akar ve kabın şeklini alır. Su, süt, yağ sıvıdır.',
            visual: '💧 Su, 🥛 Süt, 🧃 Meyve suyu = Sıvılar',
            audio: 'Sıvılar dökülebilir ve kabın şeklini alır.',
            example: { question: 'Su sıvı mı?', answer: 'Evet', explanation: 'Su bir sıvıdır!' }
          },
          {
            title: 'Bardakla Ölçme',
            content: 'Sıvı miktarını bardakla ölçebiliriz.',
            visual: '🥤 1 bardak | 🥤🥤 2 bardak | 🥤🥤🥤 3 bardak',
            audio: 'Sürahideki su kaç bardak? Say ve öğren!',
            example: { question: 'Sürahi 5 bardak su alıyorsa?', answer: '5 bardak sıvı var', explanation: '5 bardak = 5 ölçü!' }
          },
          {
            title: 'Kaşıkla Ölçme',
            content: 'Küçük miktarları kaşıkla ölçeriz.',
            visual: '🥄 1 kaşık | 🥄🥄🥄🥄🥄 5 kaşık',
            audio: 'Bir bardak kaç kaşık tutar? Sayarak bul!',
            example: { question: 'Reçeteye 3 kaşık şeker yazıyorsa?', answer: '3 kaşık koy', explanation: '3 kaşık = 3 ölçü!' }
          },
          {
            title: 'Tahmin Etme',
            content: 'Önce tahmin et, sonra ölç!',
            visual: 'Tahmin: 4 bardak | Ölçüm: 5 bardak | Yakın!',
            audio: 'Şişede kaç bardak su var? Önce tahmin et!',
            example: { question: 'Tahmin neden önemli?', answer: 'Ölçmeden fikir edinmek için', explanation: 'Tahmin bizi hazırlar!' }
          },
          {
            title: 'Karşılaştırma',
            content: 'Hangisi daha çok? Bardak sayısına bak!',
            visual: '🥤🥤🥤 > 🥤🥤 (3 bardak > 2 bardak)',
            audio: 'Daha çok bardak dolduran daha fazla sıvı!',
            example: { question: '4 bardak mı 6 bardak mı fazla?', answer: '6 bardak', explanation: '6 > 4, 6 bardak daha fazla!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Su sıvı mı katı mı?', options: ['Katı', 'Sıvı', 'Gaz', 'Hiçbiri'], correctAnswer: 'Sıvı', explanation: 'Su sıvıdır!' },
          { type: 'fill-blank', question: 'Sürahide 3 bardak su var. Bir bardak döktük, ___ bardak kaldı', correctAnswer: '2', explanation: '3 - 1 = 2!' },
          { type: 'multiple-choice', question: 'Hangisi sıvı değil?', options: ['Su', 'Süt', 'Taş', 'Meyve suyu'], correctAnswer: 'Taş', explanation: 'Taş katıdır!' },
          { type: 'fill-blank', question: 'Bir bardak ___ kaşık olabilir', correctAnswer: 'çok', explanation: 'Bardak birçok kaşık tutar!' },
          { type: 'multiple-choice', question: '5 bardak mı 3 bardak mı fazla?', options: ['5 bardak', '3 bardak', 'Eşit', 'Belli değil'], correctAnswer: '5 bardak', explanation: '5 > 3!' },
          { type: 'fill-blank', question: 'Sıvılar kabın ___ alır', correctAnswer: 'şeklini', explanation: 'Sıvı kabın şeklini alır!' },
          { type: 'multiple-choice', question: 'Tahmin: 6, Ölçüm: 5. Fark kaç?', options: ['0', '1', '2', '11'], correctAnswer: '1', explanation: '6 - 5 = 1!' },
          { type: 'fill-blank', question: 'Yağ bir ___', correctAnswer: 'sıvı', explanation: 'Yağ sıvıdır!' },
          { type: 'multiple-choice', question: 'Çay bardağıyla ölçersek?', options: ['Sıvı ölçülür', 'Uzunluk ölçülür', 'Ağırlık ölçülür', 'Hiçbiri'], correctAnswer: 'Sıvı ölçülür', explanation: 'Bardak sıvı ölçer!' },
          { type: 'fill-blank', question: '🥤🥤🥤🥤 = ___ bardak', correctAnswer: '4', explanation: '4 bardak!' }
        ]
      }
    }
  ]
};
