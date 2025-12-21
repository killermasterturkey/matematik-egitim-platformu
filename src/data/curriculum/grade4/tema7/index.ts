// 4. SINIF - TEMA 7: OLAYLARIN OLASILIĞI VE VERİYE DAYALI ARAŞTIRMA
// 15 saat (%8) - 2 Öğrenme Çıktısı

import { Theme } from '../../types';

export const tema7: Theme = {
  id: 'grade4-tema7',
  title: 'Olasılık ve Veriye Dayalı Araştırma',
  description: 'Olayların olasılığını belirlemeyi ve verilerle araştırma yapmayı öğreniyoruz!',
  emoji: '🎲',
  color: 'from-amber-400 to-yellow-500',
  bgColor: 'bg-amber-50',
  borderColor: 'border-amber-200',
  textColor: 'text-amber-600',
  hours: 15,
  objectives: [
    'Olayların olasılığını "imkânsız, olabilir, kesin" olarak belirleyebilme',
    'Kategorik ve nicel verilerle çalışabilme ve veriye dayalı karar verebilme'
  ],
  keywords: [
    'Olasılık', 'İmkânsız', 'Olabilir', 'Kesin',
    'Kategorik veri', 'Nicel veri', 'Grafik', 'Çetele tablosu', 'Sıklık tablosu'
  ],
  generalizations: [
    'Olayların olasılığı "imkânsız, olabilir, kesin" olarak ifade edilebilir.',
    'Veriler, kategorik ve nicel olarak sınıflandırılabilir.',
    'Grafikler, verilerin görselleştirilmesinde kullanılır.'
  ],
  topics: [
    // Konu 1: Olasılık Kavramı
    {
      id: 'grade4-tema7-konu1',
      title: 'Olasılık Kavramı',
      description: 'Olayların olasılığını imkânsız, olabilir ve kesin olarak belirliyoruz',
      emoji: '🎲',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Olasılık', 'İmkânsız', 'Olabilir', 'Kesin', 'Şans'],
      content: {
        introduction: 'Merhaba şans kaşifleri! Bugün olasılık dünyasını keşfedeceğiz. Bazı şeyler kesinlikle olur, bazıları hiç olmaz, bazıları ise belki olur! Bunları nasıl anlayacağımızı öğreneceğiz! 🎲🍀',
        motivationQuote: 'Olasılık, geleceği tahmin etmenin matematiksel yoludur! 🔮',
        funFacts: [
          '🎲 Bir zarın 6 gelme olasılığı 6\'da 1\'dir!',
          '🌧️ Hava durumu tahminleri olasılık kullanır!',
          '🎰 Casino oyunları olasılık matematiğine dayanır!'
        ],
        steps: [
          {
            title: 'Olasılık Nedir?',
            content: 'Olasılık, bir olayın gerçekleşme şansını gösterir. "Ne kadar olası?" sorusunun cevabıdır.',
            visual: '🎯 Olasılık = Gerçekleşme Şansı\n\n⬇️ İmkânsız (asla olmaz)\n↕️ Olabilir (belki olur)\n⬆️ Kesin (mutlaka olur)\n\nÖrnek: Yarın güneş doğacak mı?\n→ KESİN! (her gün doğar)',
            audio: 'Olasılık, bir şeyin olup olmayacağı hakkında bilgi verir.',
            example: {
              question: 'Havaya atılan yazı-tura için sonuç nedir?',
              answer: 'Olabilir (ya yazı ya tura gelir)',
              explanation: 'İki seçenek var, hangisi geleceği belirsiz'
            }
          },
          {
            title: 'İmkânsız Olaylar',
            content: 'İmkânsız olaylar, hiçbir şekilde gerçekleşemeyecek olaylardır.',
            visual: '❌ İMKÂNSIZ = Asla Olmaz\n\nÖrnekler:\n• Güneş batıdan doğar ❌\n• Zarda 7 gelir ❌\n• Taş havada asılı kalır ❌\n• Kedi havlar ❌\n• 1 + 1 = 5 olur ❌\n\nBunlar asla gerçekleşmez!',
            audio: 'İmkânsız olaylar, doğa kanunlarına veya mantığa aykırı olaylardır.',
            example: {
              question: 'Normal bir zarda 8 gelmesi nasıl bir olaydır?',
              answer: 'İmkânsız',
              explanation: 'Zarın en yüksek yüzü 6\'dır, 8 yok'
            }
          },
          {
            title: 'Kesin Olaylar',
            content: 'Kesin olaylar, mutlaka gerçekleşecek olaylardır.',
            visual: '✅ KESİN = Mutlaka Olur\n\nÖrnekler:\n• Güneş doğudan doğar ✅\n• Buz ısınınca erir ✅\n• Zarda 1-6 arası gelir ✅\n• 1 hafta = 7 gün ✅\n• Dünya döner ✅\n\nBunlar her zaman gerçekleşir!',
            audio: 'Kesin olaylar, doğa kanunlarına göre kaçınılmaz olaylardır.',
            example: {
              question: 'Bir torbanın içinde sadece kırmızı toplar varsa, çekilen top ne renk olur?',
              answer: 'Kesinlikle kırmızı',
              explanation: 'Başka renk top yok'
            }
          },
          {
            title: 'Olabilir (Muhtemel) Olaylar',
            content: 'Olabilir olaylar, gerçekleşebilir veya gerçekleşmeyebilir. Belirsizdir.',
            visual: '❓ OLABİLİR = Belki Olur\n\nÖrnekler:\n• Yarın yağmur yağar ❓\n• Zarda 3 gelir ❓\n• Yazı-turada yazı gelir ❓\n• Maçı biz kazanırız ❓\n• Piyangoyu kazanırım ❓\n\nBunlar belirsizdir!',
            audio: 'Olabilir olaylar, şansa bağlıdır ve önceden bilinemez.',
            example: {
              question: 'Bir zarı attığınızda çift sayı gelmesi nasıl bir olaydır?',
              answer: 'Olabilir (2, 4 veya 6 gelebilir)',
              explanation: '6 ihtimalden 3\'ü çift sayı'
            }
          },
          {
            title: 'Olasılığı Değerlendirme',
            content: 'Bir olayın olasılığını değerlendirmek için düşünmeliyiz: Her zaman mı, hiçbir zaman mı, bazen mi?',
            visual: '🤔 Karar Ver:\n\n"Bu olay..." diye düşün:\n\n→ Her zaman olur → KESİN\n→ Hiç olmaz → İMKÂNSIZ\n→ Bazen olur, bazen olmaz → OLABİLİR\n\nÖrnek: "Yazın hava sıcak olur"\n→ Genelde evet ama garanti yok\n→ OLABİLİR',
            audio: 'Olasılığı değerlendirirken mantık ve deneyimlerimizi kullanırız.',
            example: {
              question: '"Kuş uçar" olasılığı nedir?',
              answer: 'Olabilir (çoğu kuş uçar ama penguen uçamaz)',
              explanation: 'Tüm kuşlar uçmaz'
            }
          },
          {
            title: 'Günlük Hayatta Olasılık',
            content: 'Olasılık kavramını günlük hayatımızda sıkça kullanırız.',
            visual: '🏠 Günlük Olasılık:\n\n🌅 Sabah güneş doğar → KESİN\n🌧️ Bugün yağmur yağar → OLABİLİR\n🦄 Unicorn görürüm → İMKÂNSIZ\n🎂 Bugün doğum günüm → ya KESİN ya OLABİLİR\n📚 Okula giderim → (ders varsa) KESİN',
            audio: 'Olasılık düşüncesi, karar vermemize yardımcı olur.',
            example: {
              question: 'Hafta sonu tatil yapma olasılığı nedir?',
              answer: 'Olabilir (planlara bağlı)',
              explanation: 'Bazen tatil yaparız, bazen çalışırız'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Bir zarda 6 gelmesi nasıl bir olaydır?',
            options: ['İmkânsız', 'Olabilir', 'Kesin', 'Hiçbiri'],
            correctAnswer: 'Olabilir',
            explanation: '6 ihtimalden biri, ama her zaman gelmez'
          },
          {
            type: 'fill-blank',
            question: 'Güneşin doğudan doğması ___ bir olaydır.',
            correctAnswer: 'kesin',
            explanation: 'Her gün doğudan doğar'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi imkânsız bir olaydır?',
            options: ['Yağmurun yağması', 'Taşın yüzmesi', 'Kartopunun erimesi', 'Kuşun uçması'],
            correctAnswer: 'Taşın yüzmesi',
            explanation: 'Taş suda batar, yüzemez'
          },
          {
            type: 'fill-blank',
            question: 'Bir torbada 3 kırmızı, 2 mavi top var. Kırmızı çekme ___ bir olaydır.',
            correctAnswer: 'olabilir',
            explanation: 'Mavi da çekilebilir, kesin değil'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi kesin bir olaydır?',
            options: ['Yarın kar yağar', 'Buz 100°C\'de erir', 'Piyangoyu kazanırım', 'Maçı kazanırız'],
            correctAnswer: 'Buz 100°C\'de erir',
            explanation: 'Buz 0°C\'de bile erir, 100°C\'de kesinlikle erir'
          },
          {
            type: 'fill-blank',
            question: 'Normal bir zarda 9 gelmesi ___ bir olaydır.',
            correctAnswer: 'imkânsız',
            explanation: 'Zarda en fazla 6 vardır'
          },
          {
            type: 'multiple-choice',
            question: 'Yazı-turada yazı gelmesi nasıl bir olaydır?',
            options: ['İmkânsız', 'Olabilir', 'Kesin', 'Çok zor'],
            correctAnswer: 'Olabilir',
            explanation: 'Ya yazı ya tura gelir, bilinemez'
          },
          {
            type: 'fill-blank',
            question: 'Kedinin miyavlaması ___ bir olaydır.',
            correctAnswer: 'olabilir',
            explanation: 'Kediler genelde miyavlar ama her zaman değil'
          },
          {
            type: 'multiple-choice',
            question: 'Hangisi "olabilir" olaydır?',
            options: ['Balık suda yaşar', 'Yarın tatil olur', 'Taş ağırdır', '1 yıl = 12 ay'],
            correctAnswer: 'Yarın tatil olur',
            explanation: 'Yarın tatil olabilir de olmayabilir de'
          },
          {
            type: 'fill-blank',
            question: 'Bir yılın 365 veya 366 gün olması ___ bir olaydır.',
            correctAnswer: 'kesin',
            explanation: 'Her yıl 365 veya 366 gündür (artık yıl)'
          }
        ]
      }
    },
    // Konu 2: Veri Toplama ve Grafik Oluşturma
    {
      id: 'grade4-tema7-konu2',
      title: 'Veri Toplama ve Grafik Oluşturma',
      description: 'Veri toplamayı, düzenlemeyi ve grafikle göstermeyi öğreniyoruz',
      emoji: '📊',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['Veri', 'Grafik', 'Çetele', 'Sıklık', 'Tablo'],
      content: {
        introduction: 'Merhaba veri bilimcileri! Bugün bilgi toplamayı ve bunu grafiklerle göstermeyi öğreneceğiz. Veriler bize hikayeler anlatır - sadece dinlemeyi bilmek gerekir! 📊📈',
        motivationQuote: 'Veri, modern dünyanın altınıdır! Her sayı bir hikaye anlatır! 💎',
        funFacts: [
          '📊 Google her gün milyarlarca veri işler!',
          '🏥 Hastaneler verileri hayat kurtarmak için kullanır!',
          '🌡️ Hava durumu tahmini veri analizine dayanır!'
        ],
        steps: [
          {
            title: 'Veri Nedir?',
            content: 'Veri, topladığımız bilgilerdir. Sayılar, isimler, renkler, boyutlar... Hepsi veri olabilir.',
            visual: '📋 Veri = Bilgi\n\nVeri Örnekleri:\n• Sınıfta kaç kız, kaç erkek var?\n• En sevilen meyve hangisi?\n• Herkesin boyu kaç cm?\n• Hangi renk en çok seviliyor?\n\nBunların hepsi veridir!',
            audio: 'Veri, belirli bir konuda topladığımız bilgilerdir.',
            example: {
              question: '"Sınıftaki öğrencilerin göz renkleri" bir veri midir?',
              answer: 'Evet, kategorik veridir',
              explanation: 'Göz rengi bilgisi toplanabilir'
            }
          },
          {
            title: 'Kategorik ve Nicel Veri',
            content: 'Kategorik veri: İsimler, renkler (sayılamaz). Nicel veri: Sayılar, ölçümler (sayılabilir).',
            visual: '📊 Veri Türleri:\n\n📝 KATEGORİK VERİ:\n• Renk: Kırmızı, Mavi, Yeşil\n• Meyve: Elma, Armut, Muz\n• Hayvan: Kedi, Köpek, Kuş\n\n🔢 NİCEL VERİ:\n• Boy: 140 cm, 145 cm\n• Yaş: 9, 10, 11\n• Ağırlık: 30 kg, 35 kg',
            audio: 'Kategorik veri grupları gösterir, nicel veri miktarları gösterir.',
            example: {
              question: '"Kitap sayısı" hangi tür veridir?',
              answer: 'Nicel veri',
              explanation: 'Sayı ile ifade edilir'
            }
          },
          {
            title: 'Çetele Tablosu',
            content: 'Çetele tablosu, verileri sayarak kaydetmemizi sağlar.',
            visual: '📋 Çetele Tablosu:\n\nSevilen Meyve | Çetele | Sayı\n─────────────────────────\nElma         | IIII I | 6\nMuz          | IIII   | 4\nÜzüm         | III    | 3\nKarpuz       | IIII II| 7\n\nIIII = 5 (4 dikey + 1 çapraz)',
            audio: 'Çetele tablosunda her 5 işarette bir çapraz çizgi çizeriz.',
            example: {
              question: 'IIII III kaç tane demektir?',
              answer: '8',
              explanation: '5 + 3 = 8'
            }
          },
          {
            title: 'Sıklık Tablosu',
            content: 'Sıklık tablosu, çetele işaretlerini sayılara çevirir.',
            visual: '📊 Sıklık Tablosu:\n\nRenk    | Sıklık\n────────────────\nKırmızı |   8\nMavi    |  12\nYeşil   |   5\nSarı    |   7\n────────────────\nToplam  |  32',
            audio: 'Sıklık, bir şeyin kaç kez tekrarlandığını gösterir.',
            example: {
              question: 'Sıklık tablosunda en çok tekrar eden nedir?',
              answer: 'En yüksek sayıya sahip olan',
              explanation: 'Örnekte Mavi (12) en sık'
            }
          },
          {
            title: 'Grafik Türleri',
            content: 'Verileri görselleştirmek için farklı grafik türleri kullanırız.',
            visual: '📈 Grafik Türleri:\n\n📊 Çubuk Grafik:\n   █████████ 9\n   ██████ 6\n   ████ 4\n\n⚫ Nokta Grafik:\n   ⚫⚫⚫⚫⚫ 5\n   ⚫⚫⚫ 3\n\n🟡 Resim Grafik:\n   🍎🍎🍎🍎 4 elma',
            audio: 'Grafik türünü verinin özelliğine göre seçeriz.',
            example: {
              question: 'Hangi grafik karşılaştırma için en uygun?',
              answer: 'Çubuk grafik',
              explanation: 'Çubukların boylarını karşılaştırmak kolay'
            }
          },
          {
            title: 'Grafik Yorumlama',
            content: 'Grafikleri okuyarak sonuçlar çıkarabiliriz.',
            visual: '🔍 Grafik Yorumlama:\n\n📊 Sorular:\n• En çok hangisi? (en uzun çubuk)\n• En az hangisi? (en kısa çubuk)\n• Toplam kaç? (hepsini topla)\n• Fark ne kadar? (büyük - küçük)\n\nGrafik bize hikaye anlatır!',
            audio: 'Grafikleri yorumlamak, veriden anlam çıkarmaktır.',
            example: {
              question: 'Bir çubuk grafikte en uzun çubuk ne anlama gelir?',
              answer: 'En çok tercih edilen veya en fazla olan',
              explanation: 'Uzun çubuk = yüksek değer'
            }
          },
          {
            title: 'Araştırma Yapma',
            content: 'Veri toplamak için araştırma sorusu belirleyip, veri toplayıp, analiz ederiz.',
            visual: '🔬 Araştırma Adımları:\n\n1️⃣ Soru Belirle:\n   "En sevilen ders hangisi?"\n\n2️⃣ Veri Topla:\n   Anket yap, say\n\n3️⃣ Düzenle:\n   Tablo oluştur\n\n4️⃣ Görselleştir:\n   Grafik çiz\n\n5️⃣ Yorumla:\n   Sonuç çıkar',
            audio: 'Bilimsel araştırma, sistematik veri toplama ve analizdir.',
            example: {
              question: 'Sınıfın en sevdiği sporu bulmak için ne yapmalıyız?',
              answer: 'Anket yapıp, sayıp, grafik çizmeliyiz',
              explanation: 'Sistematik veri toplama gerekli'
            }
          }
        ],
        practiceQuestions: [
          {
            type: 'multiple-choice',
            question: 'Hangisi nicel (sayısal) veridir?',
            options: ['Göz rengi', 'En sevilen yemek', 'Boy uzunluğu', 'Hobiler'],
            correctAnswer: 'Boy uzunluğu',
            explanation: 'Boy, sayı ile ölçülür'
          },
          {
            type: 'fill-blank',
            question: 'IIII IIII II = ___',
            correctAnswer: '12',
            explanation: '5 + 5 + 2 = 12'
          },
          {
            type: 'multiple-choice',
            question: 'Çetele tablosunda 5 işareti nasıl gösterilir?',
            options: ['IIIII', 'IIII/', 'IIII I', 'V'],
            correctAnswer: 'IIII/',
            explanation: '4 dikey çizgi ve 1 çapraz (IIII)'
          },
          {
            type: 'fill-blank',
            question: '"Favori renk" ___ türünde veridir.',
            correctAnswer: 'kategorik',
            explanation: 'Renk isimleri kategorik veridir'
          },
          {
            type: 'multiple-choice',
            question: 'Sıklık tablosunda sıklık ne demektir?',
            options: ['Renk', 'Kaç kez tekrarlandığı', 'Sıra numarası', 'Kategori adı'],
            correctAnswer: 'Kaç kez tekrarlandığı',
            explanation: 'Sıklık = tekrar sayısı'
          },
          {
            type: 'fill-blank',
            question: 'Çubuk grafikte en uzun çubuk ___ değeri gösterir.',
            correctAnswer: 'en yüksek',
            explanation: 'Uzun çubuk = yüksek değer'
          },
          {
            type: 'multiple-choice',
            question: 'Veri toplamak için ilk adım nedir?',
            options: ['Grafik çizmek', 'Soru belirlemek', 'Sayıları toplamak', 'Tablo silmek'],
            correctAnswer: 'Soru belirlemek',
            explanation: 'Önce neyi araştıracağımızı belirlememiz gerekir'
          },
          {
            type: 'fill-blank',
            question: '5 öğrenci kırmızı, 8 öğrenci mavi seçti. Toplam ___ öğrenci katıldı.',
            correctAnswer: '13',
            explanation: '5 + 8 = 13'
          },
          {
            type: 'multiple-choice',
            question: 'Karşılaştırma için hangi grafik en uygun?',
            options: ['Yazı', 'Çubuk grafik', 'Sadece sayılar', 'Resim'],
            correctAnswer: 'Çubuk grafik',
            explanation: 'Çubukların uzunluklarını karşılaştırmak kolay'
          },
          {
            type: 'fill-blank',
            question: '"Öğrenci sayısı" ___ türünde veridir.',
            correctAnswer: 'nicel',
            explanation: 'Sayı ile ifade edilir, sayılabilir'
          }
        ]
      }
    }
  ]
};
