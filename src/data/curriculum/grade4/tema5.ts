// 4. SINIF - TEMA 5: NESNELERİN GEOMETRİSİ (2) - AÇILAR
// 11 saat (%6) - 3 Öğrenme Çıktısı

import { Theme } from '../types';

export const tema5: Theme = {
  id: 'grade4-tema5',
  title: 'Nesnelerin Geometrisi (2) - Açılar',
  description: 'Açı kavramını öğreniyor, açıları ölçüyor ve sınıflandırıyoruz!',
  emoji: '📐',
  color: 'from-indigo-400 to-blue-500',
  bgColor: 'bg-indigo-50',
  borderColor: 'border-indigo-200',
  textColor: 'text-indigo-600',
  hours: 11,
  objectives: [
    'Açıyı dönme miktarı olarak yorumlayabilme',
    'Açı ölçümünde standart ölçme araçlarının gerekliliğini değerlendirebilme',
    'Dik açıyı referans alarak açıları dar ve geniş olarak sınıflandırabilme'
  ],
  keywords: [
    'Açı', 'Dönme', 'Dönme miktarı', 'Açıölçer', 'Derece',
    'Dik açı', 'Dar açı', 'Geniş açı'
  ],
  generalizations: [
    'Açı, bir dönme miktarıdır.',
    'Açılar; dar, dik ve geniş olarak sınıflandırılabilir.'
  ],
  topics: [
    // Konu 1: Açı ve Dönme Kavramı
    {
      id: 'grade4-tema5-konu1',
      title: 'Açı ve Dönme Kavramı',
      description: 'Açıyı bir dönme miktarı olarak anlıyoruz',
      emoji: '🔄',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Açı', 'Dönme', 'Dönme miktarı', 'Yön', 'Derece'],
      content: {
        introduction: 'Merhaba döngü ustası adayları! Bugün açının sihirli dünyasını keşfedeceğiz. Açı aslında bir dönme miktarıdır - kapıyı açmak, anahtarı çevirmek, hepsi açı ile ilgili! 🔄🚪',
        motivationQuote: 'Açı, hareketin ölçüsüdür! Her dönüş bir açıdır! 🎯',
        funFacts: [
          '🌍 Dünya 24 saatte 360° döner - tam bir tur!',
          '⏰ Saat yelkovanı 12 saatte 360° döner!',
          '🎡 Dönme dolap bir turda 360° döner!'
        ],
        steps: [
          {
            title: 'Açı Nedir?',
            content: 'Açı, ortak bir noktadan çıkan iki ışının oluşturduğu şekildir. Aynı zamanda bir dönme miktarını gösterir.',
            visual: '📐 Açı = İki Işın + Ortak Nokta\n\n         /\n        /\n       / ) açı\n      /____\n     A\n\nA noktası: Köşe\nIşınlar: Kenarlar\nAradaki dönme: Açı',
            audio: 'Açı, iki ışının kesiştiği noktada oluşan ve dönme miktarını gösteren geometrik kavramdır.',
            example: {
              question: 'Bir kapı açıldığında ne oluşur?',
              answer: 'Kapı menteşesinde açı oluşur',
              explanation: 'Kapı ne kadar açılırsa, açı o kadar büyük olur'
            }
          },
          {
            title: 'Dönme ve Açı İlişkisi',
            content: 'Her dönme hareketi bir açı oluşturur. Dönme miktarı arttıkça açı büyür.',
            visual: '🔄 Dönme = Açı\n\nKüçük dönüş → Küçük açı\nBüyük dönüş → Büyük açı\n\nÖrnekler:\n• Anahtar çevirme 🔑\n• Kapı açma 🚪\n• Musluk çevirme 🚿\n• Direksiyon çevirme 🚗',
            audio: 'Ne kadar dönerseniz o kadar büyük açı elde edersiniz.',
            example: {
              question: 'Hangisi daha büyük açı oluşturur: Kapıyı aralık bırakmak mı, tamamen açmak mı?',
              answer: 'Tamamen açmak',
              explanation: 'Daha çok dönme = daha büyük açı'
            }
          },
          {
            title: 'Günlük Hayatta Açılar',
            content: 'Açılar günlük hayatımızın her yerinde karşımıza çıkar.',
            visual: '🏠 Günlük Açı Örnekleri:\n\n⏰ Saat yelkovanları arası açı\n📐 Köşebent açısı\n🚗 Direksiyon dönüşü\n✂️ Makas açıklığı\n🚪 Kapı açıklığı\n⚽ Kale direği açısı',
            audio: 'Etrafımızda dikkatli bakarsak her yerde açılar görürüz.',
            example: {
              question: 'Saat 3:00\'ı gösterirken akrep ve yelkovan arasında nasıl bir açı var?',
              answer: 'Dik açı (90°)',
              explanation: '3:00\'da akrep 12\'de, yelkovan 3\'te - aralarında çeyrek tur var'
            }
          },
          {
            title: 'Tam Dönüş ve 360°',
            content: 'Bir tam dönüş 360 derecedir. Bu, dairenin tamamını dolaşmak demektir.',
            visual: '⭕ Tam Dönüş = 360°\n\nYarım dönüş = 180°\nÇeyrek dönüş = 90°\n1/8 dönüş = 45°\n\n360 ÷ 4 = 90° (çeyrek)\n360 ÷ 2 = 180° (yarım)',
            audio: 'Tam bir dönüş 360 derecedir. Bu, matematiğin temel kurallarından biridir.',
            example: {
              question: 'Bir balerin tam iki tur dönerse kaç derece döner?',
              answer: '720°',
              explanation: '2 × 360° = 720°'
            }
          },
          {
            title: 'Açı Yönleri',
            content: 'Açılar saat yönünde veya saat yönünün tersine ölçülebilir.',
            visual: '🔄 Açı Yönleri:\n\n↻ Saat yönü (pozitif)\n↺ Saat yönü tersi (negatif)\n\nÖrnek:\n→ Sağa dön: Saat yönü\n← Sola dön: Saat yönü tersi',
            audio: 'Matematikte genellikle saat yönünün tersi pozitif yön kabul edilir.',
            example: {
              question: 'Sağa 90° dönmek ile sola 270° dönmek aynı mıdır?',
              answer: 'Evet, aynı konuma geliriz',
              explanation: '90° + 270° = 360° (tam tur)'
            }
          },
          {
            title: 'Açı Sembolleri',
            content: 'Açılar ∠ sembolü ve derece (°) birimi ile gösterilir.',
            visual: '📝 Açı Gösterimi:\n\n∠ABC = 45°\n\nA, B, C: Noktalar\nB: Köşe (ortadaki)\n45°: Açı ölçüsü\n\nÖrnek: ∠XYZ = 90°\nY noktası köşe',
            audio: 'Açıları gösterirken ortadaki harf her zaman köşeyi belirtir.',
            example: {
              question: '∠DEF = 60° ifadesinde köşe hangi noktadır?',
              answer: 'E noktası',
              explanation: 'Ortadaki harf her zaman köşeyi gösterir'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Tam bir dönüş kaç derecedir?',
            options: ['90°', '180°', '270°', '360°'],
            correctAnswer: '360°',
            explanation: 'Tam bir dönüş 360 derecedir'
          },
          {
            type: 'fill-blank',
            question: 'Yarım dönüş ___ derecedir.',
            correctAnswer: '180',
            explanation: '360 ÷ 2 = 180°'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi günlük hayatta açı örneği DEĞİLDİR?',
            options: ['Kapı açıklığı', 'Kitap sayfası sayısı', 'Saat yelkovanları arası', 'Makas açıklığı'],
            correctAnswer: 'Kitap sayfası sayısı',
            explanation: 'Sayfa sayısı bir açı değil, bir miktar ifade eder'
          },
          {
            type: 'fill-blank',
            question: 'Çeyrek dönüş ___ derecedir.',
            correctAnswer: '90',
            explanation: '360 ÷ 4 = 90°'
          },
          {
            type: 'multiple-choice',
            question: '∠ABC ifadesinde açının köşesi hangi noktadır?',
            options: ['A', 'B', 'C', 'ABC'],
            correctAnswer: 'B',
            explanation: 'Açı gösteriminde ortadaki harf köşeyi belirtir'
          },
          {
            type: 'fill-blank',
            question: 'Üç tam dönüş ___ derecedir.',
            correctAnswer: '1080',
            explanation: '3 × 360 = 1080°'
          },
          {
            type: 'multiple-choice',
            question: 'Saat 6:00\'yı gösterirken akrep ve yelkovan arasındaki açı nedir?',
            options: ['0°', '90°', '180°', '270°'],
            correctAnswer: '180°',
            explanation: '6:00\'da akrep ve yelkovan karşılıklıdır = yarım dönüş = 180°'
          },
          {
            type: 'fill-blank',
            question: 'Açı birimi ___ dir.',
            correctAnswer: 'derece',
            explanation: 'Açılar derece (°) birimi ile ölçülür'
          },
          {
            type: 'multiple-choice',
            question: 'Bir kapı aralık bırakıldığında oluşan açı için ne söylenebilir?',
            options: ['Hiç açı yok', 'Küçük bir açı var', 'Tam dönüş var', 'Açı ölçülemez'],
            correctAnswer: 'Küçük bir açı var',
            explanation: 'Az dönme = küçük açı'
          },
          {
            type: 'fill-blank',
            question: '1/8 dönüş ___ derecedir.',
            correctAnswer: '45',
            explanation: '360 ÷ 8 = 45°'
          }
        ]
      }
    },
    // Konu 2: Açı Ölçme Araçları
    {
      id: 'grade4-tema5-konu2',
      title: 'Açı Ölçme Araçları',
      description: 'Açıölçer kullanarak açıları ölçmeyi öğreniyoruz',
      emoji: '📐',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Açıölçer', 'Ölçme', 'Derece', 'İletki', 'Standart ölçme'],
      content: {
        introduction: 'Merhaba açı ölçüm uzmanları! Bugün açıların nasıl ölçüldüğünü öğreneceğiz. Açıölçer (iletki) kullanarak açıları tam olarak ölçebiliriz! 📐🔍',
        motivationQuote: 'Doğru ölçüm, doğru sonuç demektir! Açıölçer en iyi arkadaşın! 🎯',
        funFacts: [
          '📐 İlk açıölçer antik Mısır\'da kullanıldı!',
          '🔭 Astronomlar yıldızları açıölçerle konumlandırır!',
          '✈️ Pilotlar uçuş açılarını hassas aletlerle ölçer!'
        ],
        steps: [
          {
            title: 'Neden Standart Ölçüm?',
            content: 'Tahmin yetersiz kalır, standart ölçüm herkese aynı sonucu verir.',
            visual: '❓ Tahmin vs Ölçüm:\n\nAli: "Bu açı büyük"\nVeli: "Hayır, küçük"\n\n📐 Açıölçer: "45 derece"\n\n✅ Herkes aynı fikirde!\nStandart ölçüm tartışmayı bitirir.',
            audio: 'Standart ölçme araçları sayesinde herkes aynı sonuca ulaşır.',
            example: {
              question: 'İki kişi aynı açıyı farklı tahmin ederse ne yapmalı?',
              answer: 'Açıölçer ile ölçmeli',
              explanation: 'Standart ölçüm doğru cevabı verir'
            }
          },
          {
            title: 'Açıölçer (İletki) Tanıtımı',
            content: 'Açıölçer, yarım daire şeklinde, üzerinde 0°\'den 180°\'ye kadar sayılar olan ölçü aletidir.',
            visual: '📐 Açıölçer Özellikleri:\n\n• Yarım daire şekli\n• 0° - 180° arası ölçüler\n• Merkez noktası (açı köşesi için)\n• İç ve dış ölçek (iki yönlü okuma)\n• Şeffaf malzeme',
            audio: 'Açıölçer, açıları derece cinsinden ölçmemizi sağlar.',
            example: {
              question: 'Açıölçer en fazla kaç derece ölçebilir?',
              answer: '180°',
              explanation: 'Yarım daire 180° kadardır. Daha büyük açılar için ek ölçüm gerekir.'
            }
          },
          {
            title: 'Açıölçer Kullanımı',
            content: 'Açıölçeri doğru yerleştirmek, doğru ölçüm için kritiktir.',
            visual: '📏 Açıölçer Kullanım Adımları:\n\n1. Merkezi açının köşesine koy\n2. Taban çizgisini bir kenara hizala\n3. Diğer kenarın ölçeği kestiği yeri oku\n4. Doğru ölçeği seç (iç/dış)\n\n⚠️ Dikkat: 0°\'dan başla!',
            audio: 'Açıölçeri doğru konumlandırmak en önemli adımdır.',
            example: {
              question: 'Açıölçerin merkezi nereye konulmalı?',
              answer: 'Açının köşesine',
              explanation: 'Merkez, açının tepe noktasına yerleştirilir'
            }
          },
          {
            title: 'İç ve Dış Ölçek',
            content: 'Açıölçerde iki ölçek vardır: iç ölçek (0°\'dan 180°\'ye) ve dış ölçek (180°\'den 0°\'ye).',
            visual: '🔢 İç ve Dış Ölçek:\n\nDış: 180° 150° 120° 90° 60° 30° 0°\nİç:  0°   30°  60°  90° 120° 150° 180°\n\n✅ Hangi kenar 0°\'da ise o ölçekten oku!\n\nÖrnek: Sol kenar 0°\'da → iç ölçek kullan',
            audio: 'Açıölçer okurken, 0 ile başlayan ölçeği kullanmalıyız.',
            example: {
              question: 'İç ölçekte 60° gösteren yer, dış ölçekte kaç gösterir?',
              answer: '120°',
              explanation: '60° + 120° = 180° (tamamlayıcı)'
            }
          },
          {
            title: 'Ölçüm Hataları',
            content: 'Yanlış yerleştirme veya yanlış ölçek okuma hataya yol açar.',
            visual: '⚠️ Sık Yapılan Hatalar:\n\n❌ Merkez köşede değil\n❌ Taban çizgisi hizalı değil\n❌ Yanlış ölçek okundu\n❌ Göz hizası yanlış\n\n✅ Kontrol listesi kullan!',
            audio: 'Doğru ölçüm için her adımı dikkatli yapmalıyız.',
            example: {
              question: 'Açıölçer merkezi köşeden kayarsa ne olur?',
              answer: 'Yanlış ölçüm yapılır',
              explanation: 'Merkez mutlaka köşede olmalı'
            }
          },
          {
            title: 'Açı Çizme',
            content: 'Açıölçer ile istediğimiz ölçüde açı çizebiliriz.',
            visual: '✏️ Açı Çizme Adımları:\n\n1. Bir ışın çiz (taban)\n2. Açıölçeri yerleştir\n3. İstenen dereceyi bul\n4. O noktayı işaretle\n5. Noktayı köşeye birleştir\n\n📐 45° açı çizelim!',
            audio: 'Açıölçer hem ölçme hem de çizme için kullanılır.',
            example: {
              question: '90° açı çizmek için ne yapmalıyız?',
              answer: 'Açıölçerde 90° noktasını işaretleyip köşeye birleştiririz',
              explanation: '90° dik açı oluşturur'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Açıölçer en fazla kaç derecelik açı ölçer?',
            options: ['90°', '180°', '270°', '360°'],
            correctAnswer: '180°',
            explanation: 'Standart açıölçer yarım daire olduğu için 180° ölçer'
          },
          {
            type: 'fill-blank',
            question: 'Açıölçerin merkezi açının ___sine yerleştirilir.',
            correctAnswer: 'köşe',
            explanation: 'Merkez noktası köşeye hizalanmalıdır'
          },
          {
            type: 'multiple-choice',
            question: 'Açı ölçerken hangi adım ilk yapılır?',
            options: ['Dereceyi oku', 'Merkezi köşeye koy', 'Çizgi çiz', 'Hesapla'],
            correctAnswer: 'Merkezi köşeye koy',
            explanation: 'Önce açıölçeri doğru yerleştirmek gerekir'
          },
          {
            type: 'fill-blank',
            question: 'Açı birimi ___dir ve ° sembolü ile gösterilir.',
            correctAnswer: 'derece',
            explanation: 'Açılar derece cinsinden ölçülür'
          },
          {
            type: 'multiple-choice',
            question: 'İç ölçekte 45° gösteren yer, dış ölçekte kaç derece gösterir?',
            options: ['45°', '90°', '135°', '180°'],
            correctAnswer: '135°',
            explanation: '180° - 45° = 135°'
          },
          {
            type: 'fill-blank',
            question: 'Açıölçerin şekli ___ dairedir.',
            correctAnswer: 'yarım',
            explanation: 'Standart açıölçer yarım daire şeklindedir'
          },
          {
            type: 'multiple-choice',
            question: 'Neden standart ölçme araçları kullanırız?',
            options: ['Daha pahalı olduğu için', 'Herkesin aynı sonucu bulması için', 'Daha güzel göründüğü için', 'Zorunlu olduğu için'],
            correctAnswer: 'Herkesin aynı sonucu bulması için',
            explanation: 'Standart ölçüm tutarlı sonuçlar sağlar'
          },
          {
            type: 'fill-blank',
            question: 'Açıölçerde ___ ölçek vardır: iç ve dış.',
            correctAnswer: '2',
            explanation: 'Açıölçerde iç ve dış olmak üzere iki ölçek bulunur'
          },
          {
            type: 'multiple-choice',
            question: '75° açı çizmek için açıölçerde hangi noktayı işaretleriz?',
            options: ['15°', '75°', '105°', '165°'],
            correctAnswer: '75°',
            explanation: 'İstenen açı değerini doğrudan işaretleriz'
          },
          {
            type: 'fill-blank',
            question: 'Açıölçer kullanırken taban çizgisi açının bir ___na hizalanır.',
            correctAnswer: 'kenar',
            explanation: 'Taban çizgisi açının bir kenarı ile çakıştırılır'
          }
        ]
      }
    },
    // Konu 3: Açıların Sınıflandırılması
    {
      id: 'grade4-tema5-konu3',
      title: 'Açıların Sınıflandırılması',
      description: 'Açıları dar, dik ve geniş olarak sınıflandırıyoruz',
      emoji: '📊',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Dar açı', 'Dik açı', 'Geniş açı', 'Sınıflandırma', '90 derece'],
      content: {
        introduction: 'Merhaba açı sınıflandırıcıları! Bugün açıları türlerine göre ayırmayı öğreneceğiz. Dik açı referansımız olacak - 90° büyülü bir sayı! 📊✨',
        motivationQuote: 'Dik açı, tüm açıların ölçüt noktasıdır! 90° her yerde! 📐',
        funFacts: [
          '📐 Dik açı, L harfine benzer!',
          '🏗️ Binalar dik açılarla ayakta durur!',
          '🎯 90° olmadan düz çizgiler düz olamaz!'
        ],
        steps: [
          {
            title: 'Dik Açı (90°)',
            content: 'Dik açı tam 90 derecedir. L harfi şeklindedir ve referans açımızdır.',
            visual: '📐 DİK ACI = 90°\n\n    |\n    |  ⌐ (köşe işareti)\n    |\n    |_________\n\nÖzellikler:\n• Tam çeyrek dönüş\n• L şeklinde\n• Köşede küçük kare ile gösterilir',
            audio: 'Dik açı 90 derecedir ve tüm açıları sınıflandırmada referans noktamızdır.',
            example: {
              question: 'Bir karenin köşeleri kaç derecelik açıdır?',
              answer: '90° (dik açı)',
              explanation: 'Karenin tüm köşeleri dik açıdır'
            }
          },
          {
            title: 'Dar Açı (0° - 90° arası)',
            content: 'Dar açı, dik açıdan küçük olan açılardır. 0° ile 90° arasındadır.',
            visual: '◠ DAR ACI < 90°\n\n        /\n       /\n      / ) dar\n     /____\n\nÖrnekler:\n• 30° → dar ✅\n• 45° → dar ✅\n• 60° → dar ✅\n• 89° → dar ✅',
            audio: 'Dar açılar, dik açıdan daha küçük, yani 90 dereceden az olan açılardır.',
            example: {
              question: '45° açı hangi türdendir?',
              answer: 'Dar açı',
              explanation: '45° < 90° olduğu için dar açıdır'
            }
          },
          {
            title: 'Geniş Açı (90° - 180° arası)',
            content: 'Geniş açı, dik açıdan büyük olan açılardır. 90° ile 180° arasındadır.',
            visual: '◡ GENİŞ ACI > 90°\n\n    \\              /\n     \\            /\n      \\    )    /\n       \\______/\n\nÖrnekler:\n• 91° → geniş ✅\n• 120° → geniş ✅\n• 150° → geniş ✅\n• 179° → geniş ✅',
            audio: 'Geniş açılar, dik açıdan büyük, yani 90 dereceden fazla olan açılardır.',
            example: {
              question: '135° açı hangi türdendir?',
              answer: 'Geniş açı',
              explanation: '135° > 90° olduğu için geniş açıdır'
            }
          },
          {
            title: 'Doğru Açı (180°)',
            content: 'Doğru açı tam 180 derecedir ve düz bir çizgi oluşturur.',
            visual: '━━━ DOĞRU ACI = 180°\n\n←━━━━━●━━━━━→\n\nÖzellikler:\n• Yarım dönüş\n• Düz çizgi\n• İki ışın zıt yönde',
            audio: 'Doğru açı 180 derecedir ve düz bir çizgi gibi görünür.',
            example: {
              question: 'Düz bir çizgi kaç derecelik açı oluşturur?',
              answer: '180° (doğru açı)',
              explanation: 'Doğru açı düz çizgidir'
            }
          },
          {
            title: 'Açıları Karşılaştırma',
            content: 'Açıları karşılaştırırken dik açıyı (90°) referans alırız.',
            visual: '⚖️ Karşılaştırma:\n\nAçı < 90° → DAR\nAçı = 90° → DİK\nAçı > 90° → GENİŞ\nAçı = 180° → DOĞRU\n\nSoru: 87° nasıl bir açı?\n87° < 90° → DAR ✅',
            audio: '90 dereceden küçük dar, eşit dik, büyük geniştir.',
            example: {
              question: '92° açı hangi türdendir?',
              answer: 'Geniş açı',
              explanation: '92° > 90° olduğu için geniştir'
            }
          },
          {
            title: 'Günlük Hayatta Açı Türleri',
            content: 'Etrafımızda farklı türde açılar görebiliriz.',
            visual: '🏠 Günlük Örnekler:\n\n📐 Dik Açı:\n• Kitap köşesi\n• Kapı kenarı\n• Masa köşesi\n\n◠ Dar Açı:\n• Pizza dilimi ucu\n• Açılmamış makas\n• Üçgen çatı tepesi\n\n◡ Geniş Açı:\n• Açılmış kitap\n• Uçan kuş kanadı\n• Çok açılmış makas',
            audio: 'Etrafımızdaki nesnelerde üç tür açıyı da görebiliriz.',
            example: {
              question: 'Kitabı 90° açtığımızda nasıl açı oluşur?',
              answer: 'Dik açı',
              explanation: 'Kitap L şeklinde açılırsa dik açı olur'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Dik açı kaç derecedir?',
            options: ['45°', '90°', '135°', '180°'],
            correctAnswer: '90°',
            explanation: 'Dik açı tam 90 derecedir'
          },
          {
            type: 'fill-blank',
            question: '60° açı ___ açıdır.',
            correctAnswer: 'dar',
            explanation: '60° < 90° olduğu için dar açıdır'
          },
          {
            type: 'multiple-choice',
            question: '120° açı hangi türdendir?',
            options: ['Dar açı', 'Dik açı', 'Geniş açı', 'Doğru açı'],
            correctAnswer: 'Geniş açı',
            explanation: '120° > 90° olduğu için geniş açıdır'
          },
          {
            type: 'fill-blank',
            question: 'Dar açılar ___ derece ile 90 derece arasındadır.',
            correctAnswer: '0',
            explanation: 'Dar açı: 0° < açı < 90°'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi dar açı örneğidir?',
            options: ['30°', '90°', '150°', '180°'],
            correctAnswer: '30°',
            explanation: '30° < 90° olduğu için dar açıdır'
          },
          {
            type: 'fill-blank',
            question: 'Geniş açılar 90° ile ___ derece arasındadır.',
            correctAnswer: '180',
            explanation: 'Geniş açı: 90° < açı < 180°'
          },
          {
            type: 'multiple-choice',
            question: 'Bir karenin köşe açısı hangi türdendir?',
            options: ['Dar açı', 'Dik açı', 'Geniş açı', 'Doğru açı'],
            correctAnswer: 'Dik açı',
            explanation: 'Karenin köşeleri 90° yani dik açıdır'
          },
          {
            type: 'fill-blank',
            question: '89° açı ___ açıdır.',
            correctAnswer: 'dar',
            explanation: '89° < 90° olduğu için dar açıdır'
          },
          {
            type: 'multiple-choice',
            question: 'Doğru açı kaç derecedir?',
            options: ['90°', '120°', '180°', '360°'],
            correctAnswer: '180°',
            explanation: 'Doğru açı 180 derecedir'
          },
          {
            type: 'fill-blank',
            question: '91° açı ___ açıdır.',
            correctAnswer: 'geniş',
            explanation: '91° > 90° olduğu için geniş açıdır'
          }
        ]
      }
    }
  ]
};
