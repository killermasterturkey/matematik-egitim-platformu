// 2. SINIF - 5. TEMA: NESNELERİN GEOMETRİSİ (2) - Yön ve Simetri
import { Theme } from '../../types';

export const tema5: Theme = {
  id: 'nesnelerin-geometrisi-2',
  title: 'Nesnelerin Geometrisi (2)',
  description: 'Yön bulma ve simetri öğrenelim!',
  emoji: '🧭',
  color: 'from-teal-400 to-cyan-500',
  bgColor: 'bg-teal-50',
  borderColor: 'border-teal-200',
  textColor: 'text-teal-600',
  hours: 11,
  objectives: [
    'Mesafe ve yön kavramlarını anlama',
    'Hedefe ulaşmak için strateji geliştirme',
    'Simetrik şekilleri tanıma'
  ],
  keywords: ['Yön', 'Mesafe', 'Strateji', 'Simetri', 'Hedef'],
  generalizations: ['Hedefe ulaşmak için farklı stratejiler kullanılabilir.', 'Bazı şekiller simetriktir.'],
  topics: [
    {
      id: 'yon-mesafe',
      title: 'Yön ve Mesafe',
      description: 'Hedefe ulaşmak için yönergeler',
      emoji: '🧭',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['yön', 'mesafe', 'sağ', 'sol', 'ileri', 'geri'],
      content: {
        introduction: 'Haritada yön bulmak, hedefe ulaşmak için strateji geliştirmek çok önemli!',
        motivationQuote: 'Yolunu bilen hedefe ulaşır! 🧭',
        funFacts: [
          'Kuşlar manyetik alan ile yön bulur!',
          'Pusula her zaman kuzeyi gösterir!',
          'GPS 30 uydu ile çalışır!'
        ],
        steps: [
          {
            title: 'Dört Ana Yön',
            content: 'Kuzey, Güney, Doğu, Batı dört ana yöndür.',
            visual: '⬆️ Kuzey | ⬇️ Güney | ➡️ Doğu | ⬅️ Batı',
            audio: 'Güneş doğudan doğar, batıdan batar!',
            example: { question: 'Güneş nereden doğar?', answer: 'Doğu', explanation: 'Güneş doğudan doğar!' }
          },
          {
            title: 'Sağ ve Sol',
            content: 'Sağ elinin tarafı sağ, sol elinin tarafı sol.',
            visual: '👈 Sol | 👉 Sağ',
            audio: 'Yazı yazdığın el (çoğu kişi için) sağ el!',
            example: { question: 'Kalbin hangi tarafta?', answer: 'Sol', explanation: 'Kalp sol tarafta!' }
          },
          {
            title: 'İleri ve Geri',
            content: 'Baktığın yön ileri, arkandaki yön geri.',
            visual: '⬆️ İleri | ⬇️ Geri',
            audio: 'Yürürken ileri gidersin!',
            example: { question: 'Araba geri giderse?', answer: 'Ters yöne gider', explanation: 'Geri = ters yön!' }
          },
          {
            title: 'Mesafe',
            content: 'İki nokta arasındaki uzaklık mesafedir.',
            visual: 'A -------- B (mesafe)',
            audio: 'Evden okula kaç adım? Bu mesafedir!',
            example: { question: 'Mesafe neyle ölçülür?', answer: 'Metre, km, adım...', explanation: 'Uzunluk birimleri!' }
          },
          {
            title: 'Yönerge Takip',
            content: '3 adım ileri, 2 adım sağa, 1 adım geri...',
            visual: '↑↑↑ →→ ↓ (yönerge)',
            audio: 'Yönergeleri sırayla takip et!',
            example: { question: '5 adım ileri, 3 adım sola nereye gelirsin?', answer: 'Sol üst köşeye', explanation: 'İleri sonra sola!' }
          },
          {
            title: 'Strateji Seçme',
            content: 'Hedefe ulaşmak için en kısa veya en güvenli yolu seç.',
            visual: 'Yol A: 10 adım | Yol B: 15 adım (engel yok)',
            audio: 'Bazen uzun yol daha güvenli olabilir!',
            example: { question: 'Hangi stratejiyi seçersin?', answer: 'Duruma göre', explanation: 'Koşullara göre karar ver!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Güneş nereden batar?', options: ['Kuzey', 'Güney', 'Doğu', 'Batı'], correctAnswer: 'Batı', explanation: 'Güneş batıdan batar!' },
          { type: 'fill-blank', question: 'Baktığın yön = ___', correctAnswer: 'ileri', explanation: 'Baktığın yer ileridir!' },
          { type: 'multiple-choice', question: 'Pusula neyi gösterir?', options: ['Güney', 'Kuzey', 'Doğu', 'Batı'], correctAnswer: 'Kuzey', explanation: 'Pusula kuzeyi gösterir!' },
          { type: 'fill-blank', question: 'Kalbin ___ tarafında', correctAnswer: 'sol', explanation: 'Kalp sol tarafta!' },
          { type: 'multiple-choice', question: '3 adım ileri, 2 adım geri. Toplam ilerleme?', options: ['1 adım', '3 adım', '5 adım', '0 adım'], correctAnswer: '1 adım', explanation: '3 - 2 = 1 adım ileri!' },
          { type: 'fill-blank', question: 'Evden okula gidip gelmek = ___ mesafe', correctAnswer: '2', explanation: 'Gidiş + dönüş = 2 kat!' },
          { type: 'multiple-choice', question: 'Sağ tarafın neresi?', options: ['Kalbin tarafı', 'Yazı elinin tarafı (çoğu kişi)', 'Arkandaki', 'Öndeki'], correctAnswer: 'Yazı elinin tarafı (çoğu kişi)', explanation: 'Çoğu kişi sağ elle yazar!' },
          { type: 'fill-blank', question: '⬆️ işareti ___ yönü gösterir', correctAnswer: 'ileri', explanation: 'Yukarı ok = ileri!' },
          { type: 'multiple-choice', question: 'Kısa yol mu güvenli yol mu?', options: ['Her zaman kısa', 'Her zaman güvenli', 'Duruma göre', 'Hiçbiri'], correctAnswer: 'Duruma göre', explanation: 'Koşullara göre karar ver!' },
          { type: 'fill-blank', question: 'Doğu\'nun tersi ___', correctAnswer: 'Batı', explanation: 'Doğu-Batı zıt yönler!' }
        ]
      }
    },
    {
      id: 'simetri',
      title: 'Simetri',
      description: 'Simetrik şekilleri tanıma',
      emoji: '🦋',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['simetri', 'ayna', 'yarı', 'eş'],
      content: {
        introduction: 'Kelebeğin kanatları aynı! Bu simetridir. Simetrik şekilleri keşfedelim.',
        motivationQuote: 'Doğa simetri ile dolu! 🦋',
        funFacts: [
          'İnsan yüzü simetriktir!',
          'Kar taneleri 6 kollu simetriye sahip!',
          'Kelebekler en güzel simetri örneği!'
        ],
        steps: [
          {
            title: 'Simetri Nedir?',
            content: 'Bir şekli ortadan böldüğünde iki parça aynıysa simetriktir.',
            visual: '🦋 Kelebek: Sol kanat = Sağ kanat',
            audio: 'Ortadan kesersen iki yarı aynı görünür!',
            example: { question: 'Kelebek simetrik mi?', answer: 'Evet', explanation: 'İki kanat aynı!' }
          },
          {
            title: 'Simetri Ekseni',
            content: 'Şekli eşit iki parçaya bölen çizgiye simetri ekseni denir.',
            visual: '⬜ Karenin ortasından çizgi = simetri ekseni',
            audio: 'Simetri ekseni şekli ikiye böler!',
            example: { question: 'Dikdörtgenin simetri ekseni var mı?', answer: 'Evet', explanation: 'Dikdörtgenin 2 simetri ekseni var!' }
          },
          {
            title: 'Ayna Simetrisi',
            content: 'Aynaya baktığında görüntün simetrik yansımadır.',
            visual: '🪞 A | A (ayna yansıması)',
            audio: 'Ayna görüntün simetrik!',
            example: { question: 'Aynada sağ elin nasıl görünür?', answer: 'Sol el gibi', explanation: 'Aynada ters görünür!' }
          },
          {
            title: 'Simetrik Şekiller',
            content: 'Kare, dikdörtgen, daire, kelebek simetriktir.',
            visual: '⬜ Kare: 4 simetri ekseni | ⚪ Daire: Sonsuz eksen',
            audio: 'Kare çok simetri eksenine sahip!',
            example: { question: 'Dairenin kaç simetri ekseni var?', answer: 'Sonsuz', explanation: 'Her çap bir simetri ekseni!' }
          },
          {
            title: 'Simetrik Olmayan',
            content: 'Bazı şekillerin simetri ekseni yoktur.',
            visual: '✋ El şekli: Simetrik değil (başparmak farklı)',
            audio: 'El şekli simetrik değil!',
            example: { question: 'Üçgenin hepsi simetrik mi?', answer: 'Hayır', explanation: 'Sadece ikizkenar ve eşkenar üçgenler!' }
          },
          {
            title: 'Simetri Çizme',
            content: 'Yarım şekli simetri eksenine göre tamamla.',
            visual: 'Sol yarı 🦋 → Sağ yarıyı çiz!',
            audio: 'Eksene göre ayna yansıması çiz!',
            example: { question: 'Simetri çiziminde ne yaparsın?', answer: 'Ayna görüntüsü çiz', explanation: 'Eksene göre yansıt!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Kelebek simetrik mi?', options: ['Evet', 'Hayır', 'Bazen', 'Bilinmiyor'], correctAnswer: 'Evet', explanation: 'Kelebek simetrik!' },
          { type: 'fill-blank', question: 'Simetri ekseni şekli ___ eşit parçaya böler', correctAnswer: '2', explanation: '2 eşit parça!' },
          { type: 'multiple-choice', question: 'Karenin kaç simetri ekseni var?', options: ['1', '2', '4', '8'], correctAnswer: '4', explanation: 'Kare: 4 simetri ekseni!' },
          { type: 'fill-blank', question: 'Dairenin simetri ekseni sayısı: ___', correctAnswer: 'sonsuz', explanation: 'Her çap bir eksen!' },
          { type: 'multiple-choice', question: 'Hangisi simetrik değil?', options: ['Kare', 'Daire', 'Rastgele şekil', 'Dikdörtgen'], correctAnswer: 'Rastgele şekil', explanation: 'Rastgele şekil simetrik olmayabilir!' },
          { type: 'fill-blank', question: 'Aynada görüntü ___ yansımadır', correctAnswer: 'simetrik', explanation: 'Ayna simetri oluşturur!' },
          { type: 'multiple-choice', question: 'İnsan yüzü simetrik mi?', options: ['Evet', 'Hayır', 'Kısmen', 'Hiç değil'], correctAnswer: 'Evet', explanation: 'Yüz yaklaşık simetrik!' },
          { type: 'fill-blank', question: 'Üçgende simetri ekseni ___ da olabilir', correctAnswer: '0, 1 veya 3', explanation: 'Türüne göre değişir!' },
          { type: 'multiple-choice', question: 'H harfi simetrik mi?', options: ['Evet', 'Hayır'], correctAnswer: 'Evet', explanation: 'H hem yatay hem dikey simetrik!' },
          { type: 'fill-blank', question: 'Kar tanesi ___ kollu simetrik', correctAnswer: '6', explanation: 'Kar tanesi 6 kollu!' }
        ]
      }
    }
  ]
};
