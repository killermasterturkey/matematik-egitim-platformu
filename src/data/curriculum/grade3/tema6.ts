// 3. SINIF - 6. TEMA: VERİYE DAYALI ARAŞTIRMA
import { Theme } from '../types';

export const tema6: Theme = {
  id: 'veriye-dayali-arastirma',
  title: 'Veriye Dayalı Araştırma',
  description: 'Veri toplama, analiz ve grafik oluşturma!',
  emoji: '📊',
  color: 'from-teal-400 to-cyan-500',
  bgColor: 'bg-teal-50',
  borderColor: 'border-teal-200',
  textColor: 'text-teal-600',
  hours: 15,
  objectives: [
    'Kategorik ve nicel veri toplama',
    'Çetele ve sıklık tablosu oluşturma',
    'Nokta grafiği çizme ve yorumlama',
    'Araştırma sorusu oluşturma',
    'Veriye dayalı karar verme'
  ],
  keywords: ['Kategorik veri', 'Nicel veri', 'Çetele', 'Sıklık tablosu', 'Nokta grafiği'],
  generalizations: [
    'Veriler kategorik ve nicel olarak sınıflandırılabilir.',
    'Nokta grafiği, verilerin dağılımını gösterir.'
  ],
  topics: [
    {
      id: 'veri-turleri',
      title: 'Kategorik ve Nicel Veri',
      description: 'Veri türlerini tanıma ve sınıflandırma',
      emoji: '📋',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['kategorik', 'nicel', 'sayma', 'sınıflandırma', 'veri türü'],
      content: {
        introduction: 'Verileri kategorik ve nicel olarak ayırt etmeyi öğreneceksin!',
        motivationQuote: 'Veriyi tanı, doğru yorumla! 📋',
        funFacts: [
          'Big data her gün 2.5 trilyon bayt veri üretir!',
          'İlk veri analizi 1663te yapıldı!',
          'Veri bilimi en gözde mesleklerden!'
        ],
        steps: [
          {
            title: 'Veri Nedir?',
            content: 'Toplanan bilgi ve ölçümlerdir.',
            visual: 'Göz rengi, boy, yaş, tercih... hepsi veri!',
            audio: 'Sorularla toplanan bilgiler veridir!',
            example: { question: 'En sevdiğin renk veri mi?', answer: 'Evet', explanation: 'Tercih = veri!' }
          },
          {
            title: 'Kategorik Veri',
            content: 'Gruplara ayrılabilen, sayılmayan veriler.',
            visual: 'Renk: Kırmızı, Mavi, Yeşil | Hayvan: Kedi, Köpek',
            audio: 'Kategorik: sayıyla ölçülmez, gruplandırılır!',
            example: { question: 'Favori meyve kategorik mi?', answer: 'Evet', explanation: 'Elma, armut... gruplar!' }
          },
          {
            title: 'Nicel Veri (Sayısal)',
            content: 'Sayarak veya ölçerek elde edilen veriler.',
            visual: 'Boy: 130 cm | Yaş: 9 | Kitap sayısı: 15',
            audio: 'Nicel: sayıyla ifade edilir!',
            example: { question: 'Kardeş sayısı nicel mi?', answer: 'Evet', explanation: '0, 1, 2... sayısal!' }
          },
          {
            title: 'Sayma Verisi',
            content: 'Sayarak elde edilen nicel veri türü.',
            visual: 'Kaç öğrenci? 25 | Kaç top? 8',
            audio: 'Sayarak bulduğun veri = sayma verisi!',
            example: { question: 'Sınıfta kaç kız var? Sayma verisi mi?', answer: 'Evet', explanation: 'Sayarak buldun!' }
          },
          {
            title: 'Veri Sınıflandırma',
            content: 'Veriyi kategorik veya nicel olarak ayır.',
            visual: 'Göz rengi → Kategorik | Göz sayısı → Nicel',
            audio: 'Grup mu sayı mı? Kategorik mi nicel mi?',
            example: { question: 'Ayakkabı numarası?', answer: 'Nicel', explanation: 'Sayısal değer!' }
          },
          {
            title: 'Araştırma Sorusu',
            content: 'Veri toplamak için soru oluştur.',
            visual: '"Sınıfta en çok hangi renk sevilir?" → Kategorik',
            audio: 'İyi soru, iyi veri!',
            example: { question: 'Nicel veri sorusu örneği?', answer: '"Günde kaç bardak su içersin?"', explanation: 'Cevap sayısal!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Hangisi kategorik veri?', options: ['Boy', 'Yaş', 'Göz rengi', 'Kilo'], correctAnswer: 'Göz rengi', explanation: 'Renk kategorik!' },
          { type: 'fill-blank', question: 'Sayıyla ölçülen veri = ___ veri', correctAnswer: 'nicel', explanation: 'Sayısal = nicel!' },
          { type: 'multiple-choice', question: 'Kaç kardeşin var? Cevap?', options: ['Kategorik', 'Nicel', 'Her ikisi', 'Hiçbiri'], correctAnswer: 'Nicel', explanation: 'Sayısal cevap!' },
          { type: 'fill-blank', question: 'Favori film türü = ___ veri', correctAnswer: 'kategorik', explanation: 'Gruplandırılır!' },
          { type: 'multiple-choice', question: 'Hangisi nicel değil?', options: ['Sınav notu', 'Öğrenci sayısı', 'Doğum yeri', 'Oda sıcaklığı'], correctAnswer: 'Doğum yeri', explanation: 'Yer kategorik!' },
          { type: 'fill-blank', question: 'Sayarak bulunan veri = ___ verisi', correctAnswer: 'sayma', explanation: 'Sayma verisi!' },
          { type: 'multiple-choice', question: 'Ulaşım tercihi veri türü?', options: ['Nicel', 'Kategorik', 'Sayısal', 'Ölçümsel'], correctAnswer: 'Kategorik', explanation: 'Otobüs, metro... gruplar!' },
          { type: 'fill-blank', question: 'Kilo ve boy ___ veridir', correctAnswer: 'nicel', explanation: 'Ölçülen sayı!' },
          { type: 'multiple-choice', question: '"En sevdiğin ders?" sorusu?', options: ['Nicel', 'Kategorik', 'Sayma', 'Ölçüm'], correctAnswer: 'Kategorik', explanation: 'Matematik, fen... kategoriler!' },
          { type: 'fill-blank', question: 'Veri toplamak için ___ oluşturulur', correctAnswer: 'soru', explanation: 'Araştırma sorusu!' }
        ]
      }
    },
    {
      id: 'veri-toplama-duzenleme',
      title: 'Veri Toplama ve Düzenleme',
      description: 'Çetele ve sıklık tablosu oluşturma',
      emoji: '📝',
      duration: '50 dk',
      difficulty: 2,
      keywords: ['çetele', 'sıklık', 'tablo', 'düzenleme', 'kayıt'],
      content: {
        introduction: 'Verileri çetele ve sıklık tablosuyla düzenlemeyi öğreneceksin!',
        motivationQuote: 'Düzenli veri, kolay analiz! 📝',
        funFacts: [
          'Çetele Eski Roma\'da kullanılırdı!',
          'Her 5 çizgi bir grup yapar!',
          'Excel 1 milyon satır veri tutabilir!'
        ],
        steps: [
          {
            title: 'Veri Toplama',
            content: 'Soru sor, cevapları kaydet.',
            visual: '"Favori meyven?" → Elma, Armut, Elma, Muz...',
            audio: 'Herkese sor, cevapları yaz!',
            example: { question: 'Sınıfta anket nasıl yapılır?', answer: 'Soru sor, cevapları kaydet', explanation: 'Tek tek sor, not al!' }
          },
          {
            title: 'Çetele İşareti',
            content: 'Her veri için bir çizgi çek.',
            visual: '| = 1 | || = 2 | ||| = 3 | |||| = 4 | ||||̶ = 5',
            audio: 'Her cevap bir çizgi, beşte bir grup!',
            example: { question: '7 veri için çetele?', answer: '||||̶ ||', explanation: '5 + 2 = 7!' }
          },
          {
            title: 'Çetele Tablosu',
            content: 'Kategorileri ve çetelelerini tabloya yaz.',
            visual: 'Elma: ||||̶ || | Armut: |||| | Muz: |||',
            audio: 'Her kategori bir satır!',
            example: { question: 'Elma: 7, Armut: 4, Muz: 3. Çetele?', answer: 'Elma: ||||̶ || Armut: |||| Muz: |||', explanation: 'Çizgilerle göster!' }
          },
          {
            title: 'Sıklık',
            content: 'Her kategorinin kaç kez tekrarlandığı.',
            visual: 'Elma çetelesi: ||||̶ || → Sıklık: 7',
            audio: 'Çizgileri say, sıklığı bul!',
            example: { question: '||||̶ ||| sıklığı?', answer: '8', explanation: '5 + 3 = 8!' }
          },
          {
            title: 'Sıklık Tablosu',
            content: 'Kategori ve sıklıkları düzenli tabloda göster.',
            visual: '| Meyve | Sıklık |\\n| Elma | 7 |\\n| Armut | 4 |',
            audio: 'Tablo: kategori ve sayı yan yana!',
            example: { question: 'Sıklık tablosunda ne var?', answer: 'Kategori adı ve sayısı', explanation: 'İsim + sıklık!' }
          },
          {
            title: 'Toplam Hesaplama',
            content: 'Tüm sıklıkları topla.',
            visual: 'Elma: 7 + Armut: 4 + Muz: 3 = Toplam: 14',
            audio: 'Sıklıkları topla = toplam veri!',
            example: { question: '5 + 8 + 7 = ?', answer: '20 kişi', explanation: 'Tüm katılımcılar!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '||||̶ || kaç eder?', options: ['5', '6', '7', '8'], correctAnswer: '7', explanation: '5 + 2 = 7!' },
          { type: 'fill-blank', question: '||||| = ___', correctAnswer: '5', explanation: 'Beş çizgi!' },
          { type: 'multiple-choice', question: 'Sıklık ne demek?', options: ['Renk', 'Tekrar sayısı', 'Toplam', 'Fark'], correctAnswer: 'Tekrar sayısı', explanation: 'Kaç kez tekrarlandığı!' },
          { type: 'fill-blank', question: '9 için çetele = ||||̶ ____', correctAnswer: '||||', explanation: '5 + 4 = 9!' },
          { type: 'multiple-choice', question: 'Çetele tablosunda ne var?', options: ['Sadece sayılar', 'Sadece isimler', 'İsim ve çetele', 'Grafik'], correctAnswer: 'İsim ve çetele', explanation: 'Kategori + çizgiler!' },
          { type: 'fill-blank', question: '||||̶ ||||̶ = ___', correctAnswer: '10', explanation: '5 + 5 = 10!' },
          { type: 'multiple-choice', question: 'Sıklık 5, 8, 7. Toplam?', options: ['15', '18', '20', '22'], correctAnswer: '20', explanation: '5 + 8 + 7 = 20!' },
          { type: 'fill-blank', question: '12 = ||||̶ ||||̶ ___', correctAnswer: '||', explanation: '5 + 5 + 2 = 12!' },
          { type: 'multiple-choice', question: 'Hangi veri en sık? A:5, B:9, C:3', options: ['A', 'B', 'C', 'Eşit'], correctAnswer: 'B', explanation: '9 en büyük!' },
          { type: 'fill-blank', question: 'Veri düzenlemek için ___ tablosu kullanılır', correctAnswer: 'sıklık', explanation: 'Sıklık tablosu!' }
        ]
      }
    },
    {
      id: 'nokta-grafigi',
      title: 'Nokta Grafiği',
      description: 'Verileri nokta grafiğiyle gösterme',
      emoji: '📍',
      duration: '50 dk',
      difficulty: 2,
      keywords: ['nokta grafiği', 'grafik', 'görselleştirme', 'eksen', 'dağılım'],
      content: {
        introduction: 'Verileri nokta grafiğiyle görselleştirmeyi öğreneceksin!',
        motivationQuote: 'Bir resim bin kelimeye bedel! 📍',
        funFacts: [
          'Nokta grafiği 1800lerde icat edildi!',
          'Bilim insanları grafik çok kullanır!',
          'Dağılım en iyi nokta grafiğinde görülür!'
        ],
        steps: [
          {
            title: 'Nokta Grafiği Nedir?',
            content: 'Verileri noktalarla gösteren grafik türü.',
            visual: '• • • • (her nokta bir veri)',
            audio: 'Her veri bir nokta!',
            example: { question: '5 veri kaç nokta?', answer: '5 nokta', explanation: 'Veri sayısı = nokta sayısı!' }
          },
          {
            title: 'Eksen Çizme',
            content: 'Yatay eksene kategorileri veya değerleri yaz.',
            visual: '|--Elma--|--Armut--|--Muz--|',
            audio: 'Alt çizgiye kategorileri yaz!',
            example: { question: 'Sayısal veri için eksen?', answer: 'Sayı değerleri yazılır', explanation: '1, 2, 3, 4, 5...' }
          },
          {
            title: 'Nokta Yerleştirme',
            content: 'Her veri için kategorinin üstüne nokta koy.',
            visual: 'Elma: 3 kişi → Elma üstünde 3 nokta\\n• • •',
            audio: 'Kaç kişi seçtiyse o kadar nokta!',
            example: { question: '5 kişi armut seçti. Kaç nokta?', answer: '5 nokta', explanation: 'Armut üstüne 5 nokta!' }
          },
          {
            title: 'Dikey Nokta Dizimi',
            content: 'Noktaları üst üste diz.',
            visual: '    •\\n    •\\n    •\\n|--Elma--|',
            audio: 'Noktalar dikey, alt alta!',
            example: { question: '4 nokta nasıl dizilir?', answer: 'Üst üste 4 nokta', explanation: 'Dikey sıra!' }
          },
          {
            title: 'Grafiği Yorumlama',
            content: 'En uzun sütun = en çok seçilen.',
            visual: 'Elma: ••• | Armut: ••••• | Muz: ••',
            audio: 'En çok nokta olan en popüler!',
            example: { question: 'Armutta 5, Elmada 3 nokta. Hangisi çok?', answer: 'Armut', explanation: '5 > 3!' }
          },
          {
            title: 'Sonuç Çıkarma',
            content: 'Grafikten sorulara cevap ver.',
            visual: 'En az tercih = en az nokta',
            audio: 'Grafiğe bakarak karar ver!',
            example: { question: 'En az tercih edilen meyve?', answer: 'En az noktası olan', explanation: 'Grafik bize söylüyor!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Nokta grafiğinde 1 veri = ?', options: ['1 çizgi', '1 nokta', '1 sütun', '1 tablo'], correctAnswer: '1 nokta', explanation: 'Her veri bir nokta!' },
          { type: 'fill-blank', question: 'Noktalar ___ üste dizilir', correctAnswer: 'üst', explanation: 'Dikey düzende!' },
          { type: 'multiple-choice', question: 'A: 6 nokta, B: 4 nokta. Hangisi çok?', options: ['A', 'B', 'Eşit', 'Belli değil'], correctAnswer: 'A', explanation: '6 > 4!' },
          { type: 'fill-blank', question: 'Yatay eksene ___ yazılır', correctAnswer: 'kategoriler', explanation: 'Alt çizgi = kategoriler!' },
          { type: 'multiple-choice', question: 'En uzun sütun ne anlama gelir?', options: ['En az', 'En çok', 'Orta', 'Hiçbiri'], correctAnswer: 'En çok', explanation: 'Çok nokta = çok seçim!' },
          { type: 'fill-blank', question: '7 kişi elma seçti = ___ nokta', correctAnswer: '7', explanation: 'Kişi sayısı = nokta sayısı!' },
          { type: 'multiple-choice', question: 'Grafikte toplam 15 nokta, 3 kategori. Ortalama?', options: ['3', '5', '7', '15'], correctAnswer: '5', explanation: '15 ÷ 3 = 5!' },
          { type: 'fill-blank', question: 'En kısa sütun = en ___ seçilen', correctAnswer: 'az', explanation: 'Az nokta = az tercih!' },
          { type: 'multiple-choice', question: 'Nokta grafiği neyi gösterir?', options: ['Renkleri', 'Dağılımı', 'Simetriyi', 'Çevreyi'], correctAnswer: 'Dağılımı', explanation: 'Verilerin dağılımı!' },
          { type: 'fill-blank', question: 'Grafik ___ anlamayı kolaylaştırır', correctAnswer: 'veriyi', explanation: 'Görsel = kolay anlama!' }
        ]
      }
    },
    {
      id: 'arastirma-sureci',
      title: 'Araştırma Süreci',
      description: 'Baştan sona istatistiksel araştırma',
      emoji: '🔬',
      duration: '50 dk',
      difficulty: 3,
      keywords: ['araştırma', 'süreç', 'analiz', 'yorum', 'karar'],
      content: {
        introduction: 'Bir araştırmayı baştan sona yürütmeyi öğreneceksin!',
        motivationQuote: 'Soru sor, araştır, keşfet! 🔬',
        funFacts: [
          'Bilim araştırmayla gelişir!',
          'Einstein bile soru sorarak başladı!',
          'İyi araştırma iyi kararlar demek!'
        ],
        steps: [
          {
            title: 'Araştırma Konusu Belirleme',
            content: 'Merak ettiğin bir konu seç.',
            visual: '"Sınıfta en çok hangi renk sevilir?"',
            audio: 'Merakın araştırma konusu olsun!',
            example: { question: 'Konu örneği?', answer: 'Favori spor, yemek, kitap...', explanation: 'İlgi çekici konu seç!' }
          },
          {
            title: 'Araştırma Sorusu Oluşturma',
            content: 'Net ve ölçülebilir soru yaz.',
            visual: '"Sınıftaki öğrencilerin favori rengi nedir?"',
            audio: 'Soru net olmalı!',
            example: { question: 'İyi soru özellikleri?', answer: 'Açık, ölçülebilir, cevaplanabilir', explanation: 'Net soru, net cevap!' }
          },
          {
            title: 'Veri Toplama Planı',
            content: 'Kimden, nasıl, ne zaman veri toplanacak?',
            visual: 'Kim: Sınıf arkadaşları | Nasıl: Anket | Ne zaman: Teneffüste',
            audio: 'Planla: kim, nasıl, ne zaman?',
            example: { question: 'Veri nasıl toplanır?', answer: 'Anket, gözlem, sayım...', explanation: 'Duruma uygun yöntem!' }
          },
          {
            title: 'Veri Analizi',
            content: 'Verileri düzenle, çetele ve grafik yap.',
            visual: 'Ham veri → Çetele → Sıklık tablosu → Grafik',
            audio: 'Adım adım düzenle!',
            example: { question: 'Analiz sırası?', answer: 'Topla → düzenle → görselleştir', explanation: 'Düzenli analiz!' }
          },
          {
            title: 'Sonuçları Yorumlama',
            content: 'Grafikten anlamlı sonuçlar çıkar.',
            visual: 'En çok mavi (8), sonra kırmızı (5), en az yeşil (2)',
            audio: 'Veriler ne söylüyor?',
            example: { question: 'Yorumlama örneği?', answer: '"Sınıfın çoğunluğu maviyi seviyor"', explanation: 'Grafikten sonuç!' }
          },
          {
            title: 'Karar Verme',
            content: 'Sonuçlara göre karar ver veya öneri sun.',
            visual: 'Öneri: "Sınıf panosu mavi olsun"',
            audio: 'Veriye dayalı karar!',
            example: { question: 'Veriye dayalı karar örneği?', answer: '"En çok sevilen meyve sınıf pikniğine alınsın"', explanation: 'Çoğunluğun tercihi!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Araştırma ne ile başlar?', options: ['Grafik', 'Soru', 'Cevap', 'Karar'], correctAnswer: 'Soru', explanation: 'Soru ile başlar!' },
          { type: 'fill-blank', question: 'Veri toplamadan önce ___ yapılır', correctAnswer: 'plan', explanation: 'Plan şart!' },
          { type: 'multiple-choice', question: 'Analiz sırası?', options: ['Grafik → Veri → Soru', 'Soru → Veri → Grafik', 'Karar → Soru → Veri', 'Grafik → Soru → Veri'], correctAnswer: 'Soru → Veri → Grafik', explanation: 'Önce soru, sonra veri, en son grafik!' },
          { type: 'fill-blank', question: 'Grafikten çıkan anlam = ___', correctAnswer: 'yorum', explanation: 'Yorumlama!' },
          { type: 'multiple-choice', question: 'Veriye dayalı karar ne demek?', options: ['Rastgele', 'Veriden çıkan', 'Önceden belirlenen', 'Hiçbiri'], correctAnswer: 'Veriden çıkan', explanation: 'Veriden gelen karar!' },
          { type: 'fill-blank', question: 'Araştırma ___ oluşturarak başlar', correctAnswer: 'soru', explanation: 'Araştırma sorusu!' },
          { type: 'multiple-choice', question: 'Ham veri nasıl düzenlenir?', options: ['Renklendirilir', 'Çetele/tablo yapılır', 'Silinir', 'Değiştirilir'], correctAnswer: 'Çetele/tablo yapılır', explanation: 'Düzenleme = çetele/tablo!' },
          { type: 'fill-blank', question: 'En son adım: ___ verme', correctAnswer: 'karar', explanation: 'Sonuç ve karar!' },
          { type: 'multiple-choice', question: 'İyi araştırma özelliği?', options: ['Hızlı', 'Planlı', 'Gizli', 'Kolay'], correctAnswer: 'Planlı', explanation: 'İyi plan = iyi araştırma!' },
          { type: 'fill-blank', question: 'Sonuçları açıklamak = ___', correctAnswer: 'yorumlama', explanation: 'Yorumlama!' }
        ]
      }
    }
  ]
};
