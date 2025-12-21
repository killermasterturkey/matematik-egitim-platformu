// 3. SINIF - 5. TEMA: NESNELERİN GEOMETRİSİ (2) - SİMETRİ
import { Theme } from '../../types';

export const tema5: Theme = {
  id: 'nesnelerin-geometrisi-2',
  title: 'Nesnelerin Geometrisi (2)',
  description: 'Simetri doğruları ve simetrik şekiller!',
  emoji: '🦋',
  color: 'from-pink-400 to-rose-500',
  bgColor: 'bg-pink-50',
  borderColor: 'border-pink-200',
  textColor: 'text-pink-600',
  hours: 10,
  objectives: [
    'Birden fazla simetri doğrusu olan şekilleri tanıma',
    'Simetrik şekilleri tamamlama',
    'Kodlama stratejileriyle simetri oluşturma'
  ],
  keywords: ['Simetri', 'Simetri doğrusu', 'Yatay simetri', 'Dikey simetri', 'Kodlama'],
  generalizations: [
    'Bazı şekillerin birden fazla simetri doğrusu vardır.',
    'Simetrik şekiller, simetri doğrusuna göre eştir.'
  ],
  topics: [
    {
      id: 'simetri-dogrulari',
      title: 'Birden Fazla Simetri Doğrusu',
      description: 'Şekillerdeki tüm simetri doğrularını bulma',
      emoji: '🔲',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['simetri doğrusu', 'kare', 'dikdörtgen', 'daire', 'çoklu simetri'],
      content: {
        introduction: 'Bazı şekillerin birden fazla simetri doğrusu vardır. Hepsini keşfedelim!',
        motivationQuote: 'Her açıdan simetri bul! 🔲',
        funFacts: [
          'Kar tanesi 6 simetri doğrusuna sahip!',
          'Dairenin sonsuz simetri doğrusu var!',
          'İnsan vücudu tek simetri doğrusuna sahip!'
        ],
        steps: [
          {
            title: 'Simetri Doğrusu Hatırlama',
            content: 'Şekli iki eş parçaya bölen çizgi.',
            visual: '🦋 Kelebek: 1 dikey simetri doğrusu',
            audio: 'Ortadan bölen ve eş parçalar oluşturan çizgi!',
            example: { question: 'Üçgenin simetri doğrusu var mı?', answer: 'Bazılarının var', explanation: 'İkizkenar ve eşkenar üçgenler!' }
          },
          {
            title: 'Kare: 4 Simetri Doğrusu',
            content: 'Kare: 2 köşegen + 2 orta simetri = 4 doğru',
            visual: '▢ Dikey | Yatay | Köşegen \\ | Köşegen /',
            audio: 'Karenin 4 farklı simetri doğrusu var!',
            example: { question: 'Karenin köşegen simetrileri?', answer: '2 tane', explanation: 'Her iki köşegenden geçen!' }
          },
          {
            title: 'Dikdörtgen: 2 Simetri Doğrusu',
            content: 'Dikdörtgen: sadece yatay ve dikey orta simetri.',
            visual: '▭ Dikey | Yatay | (Köşegen YOK)',
            audio: 'Dikdörtgenin 2 simetri doğrusu var!',
            example: { question: 'Dikdörtgenin köşegen simetrisi var mı?', answer: 'Hayır', explanation: 'Köşeler eşit parça vermez!' }
          },
          {
            title: 'Daire: Sonsuz Simetri',
            content: 'Dairenin her çapı bir simetri doğrusu.',
            visual: '⭕ Her yönden geçen çap = simetri',
            audio: 'Dairenin sonsuz simetri doğrusu var!',
            example: { question: 'Dairede kaç simetri doğrusu?', answer: 'Sonsuz', explanation: 'Her çap bir simetri!' }
          },
          {
            title: 'Eşkenar Üçgen: 3 Simetri',
            content: 'Her köşeden karşı kenara çizilen 3 doğru.',
            visual: '△ 3 simetri doğrusu (her köşeden)',
            audio: 'Eşkenar üçgenin 3 simetri doğrusu var!',
            example: { question: 'İkizkenar üçgende kaç simetri?', answer: '1 tane', explanation: 'Sadece tepe açısından!' }
          },
          {
            title: 'Düzgün Çokgenler',
            content: 'Düzgün n-gen: n tane simetri doğrusu.',
            visual: '⬡ Düzgün altıgen: 6 simetri doğrusu',
            audio: 'Kenar sayısı kadar simetri!',
            example: { question: 'Düzgün sekizgende kaç simetri?', answer: '8 tane', explanation: '8 kenar = 8 simetri!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Karenin kaç simetri doğrusu var?', options: ['2', '3', '4', '6'], correctAnswer: '4', explanation: '2 orta + 2 köşegen = 4!' },
          { type: 'fill-blank', question: 'Dikdörtgenin ___ simetri doğrusu var', correctAnswer: '2', explanation: 'Yatay ve dikey orta!' },
          { type: 'multiple-choice', question: 'Hangisinin sonsuz simetri doğrusu var?', options: ['Kare', 'Üçgen', 'Daire', 'Altıgen'], correctAnswer: 'Daire', explanation: 'Her çap bir simetri!' },
          { type: 'fill-blank', question: 'Eşkenar üçgenin ___ simetri doğrusu var', correctAnswer: '3', explanation: 'Her köşeden bir tane!' },
          { type: 'multiple-choice', question: 'Düzgün beşgende kaç simetri?', options: ['3', '4', '5', '6'], correctAnswer: '5', explanation: '5 kenar = 5 simetri!' },
          { type: 'fill-blank', question: 'İkizkenar üçgenin ___ simetri doğrusu var', correctAnswer: '1', explanation: 'Sadece tepe açısından!' },
          { type: 'multiple-choice', question: 'Hangi harfin 2 simetri doğrusu var?', options: ['A', 'B', 'H', 'E'], correctAnswer: 'H', explanation: 'H: yatay ve dikey simetri!' },
          { type: 'fill-blank', question: 'Düzgün altıgenin ___ simetri doğrusu var', correctAnswer: '6', explanation: '6 kenar = 6 simetri!' },
          { type: 'multiple-choice', question: 'Dikdörtgenin köşegen simetrisi?', options: ['Var', 'Yok', '2 tane', '4 tane'], correctAnswer: 'Yok', explanation: 'Köşegen eş parça vermez!' },
          { type: 'fill-blank', question: 'X harfinin ___ simetri doğrusu var', correctAnswer: '2', explanation: 'Yatay ve dikey!' }
        ]
      }
    },
    {
      id: 'simetrik-sekil-tamamlama',
      title: 'Simetrik Şekil Tamamlama',
      description: 'Yarım şekli simetri doğrusuna göre tamamlama',
      emoji: '✂️',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['tamamlama', 'yansıma', 'ayna görüntüsü', 'eş parça'],
      content: {
        introduction: 'Verilen yarım şekli simetri doğrusuna göre tamamlamayı öğreneceksin!',
        motivationQuote: 'Yarımı gör, bütünü çiz! ✂️',
        funFacts: [
          'Ayna tam simetri yansıması yapar!',
          'Beyin yarıları simetriktir!',
          'Kağıt katlama simetri oluşturur!'
        ],
        steps: [
          {
            title: 'Simetri Doğrusunu Bul',
            content: 'Önce şeklin nereden bölüneceğini belirle.',
            visual: '|--| Şekil | simetri doğrusu | Boş alan',
            audio: 'Dikey veya yatay simetri çizgisini bul!',
            example: { question: 'Yatay simetride çizgi nerede?', answer: 'Ortada yatay', explanation: 'Şekli üst-alt böler!' }
          },
          {
            title: 'Noktaları İşaretle',
            content: 'Orijinal şeklin köşe noktalarını bul.',
            visual: '● Nokta A → Simetriği A\' (aynı uzaklıkta)',
            audio: 'Her noktanın simetriği aynı uzaklıkta!',
            example: { question: 'A noktası simetri doğrusuna 3 cm ise A\' nerede?', answer: 'Diğer tarafta 3 cm', explanation: 'Eşit uzaklık!' }
          },
          {
            title: 'Ayna Görüntüsü',
            content: 'Simetrik parça ayna yansıması gibidir.',
            visual: 'Sol yarı → Ayna → Sağ yarı (ters)',
            audio: 'Aynaya bak, simetriği gör!',
            example: { question: 'Solda L şekli varsa sağda?', answer: 'Ters L (⌐)', explanation: 'Ayna yansıması!' }
          },
          {
            title: 'Dikey Simetri Tamamlama',
            content: 'Dikey simetride sağ-sol eş olur.',
            visual: '◖ → ◖◗ (sol yarı + sağ yarı)',
            audio: 'Sol tarafı sağ tarafa yansıt!',
            example: { question: 'Dikey simetride üst değişir mi?', answer: 'Hayır, aynı yükseklik', explanation: 'Sadece sağ-sol değişir!' }
          },
          {
            title: 'Yatay Simetri Tamamlama',
            content: 'Yatay simetride üst-alt eş olur.',
            visual: '◠ → ◯ (üst yarı + alt yarı)',
            audio: 'Üst kısmı alt kısma yansıt!',
            example: { question: 'Yatay simetride sağ değişir mi?', answer: 'Hayır, aynı genişlik', explanation: 'Sadece üst-alt değişir!' }
          },
          {
            title: 'Kareli Kağıtta Çizim',
            content: 'Kareleri sayarak simetriği çiz.',
            visual: '⬜⬛⬜\\n⬜⬜⬜ → Simetriği: ⬜⬛⬜\\n⬜⬜⬜',
            audio: 'Kare sayarak aynı şekli ters çiz!',
            example: { question: 'Sol köşe boyalı ise simetrikte?', answer: 'Sağ köşe boyalı', explanation: 'Ters tarafta aynı yer!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Dikey simetride ne değişir?', options: ['Üst-alt', 'Sağ-sol', 'Hiçbiri', 'Her ikisi'], correctAnswer: 'Sağ-sol', explanation: 'Dikey: sağ-sol yer değiştirir!' },
          { type: 'fill-blank', question: 'Yatay simetride ___-___ eş olur', correctAnswer: 'üst-alt', explanation: 'Yatay çizgiye göre!' },
          { type: 'multiple-choice', question: 'A noktası çizgiden 4 cm ise A\' kaç cm?', options: ['2 cm', '4 cm', '6 cm', '8 cm'], correctAnswer: '4 cm', explanation: 'Aynı uzaklık!' },
          { type: 'fill-blank', question: 'Simetri = ___ yansıması', correctAnswer: 'ayna', explanation: 'Ayna gibi ters!' },
          { type: 'multiple-choice', question: 'Sol üst köşe boyalı, dikey simetride?', options: ['Sağ üst', 'Sol alt', 'Sağ alt', 'Aynı yer'], correctAnswer: 'Sağ üst', explanation: 'Üst kalır, sol-sağ değişir!' },
          { type: 'fill-blank', question: 'Kareli kağıtta simetri ___ sayarak çizilir', correctAnswer: 'kare', explanation: 'Kareleri say!' },
          { type: 'multiple-choice', question: 'Yatay simetride sol üst köşe nereye gider?', options: ['Sağ üst', 'Sol alt', 'Sağ alt', 'Aynı yer'], correctAnswer: 'Sol alt', explanation: 'Sol kalır, üst-alt değişir!' },
          { type: 'fill-blank', question: 'Simetri doğrusu şekli ___ eş parçaya böler', correctAnswer: '2', explanation: 'İki eş parça!' },
          { type: 'multiple-choice', question: 'B harfini yatay simetriyle tamamla?', options: ['BB', '8', 'B', 'Tamamlanamaz'], correctAnswer: '8', explanation: 'B üstte, yansıması altta = 8!' },
          { type: 'fill-blank', question: 'C harfi dikey simetri ile = ___', correctAnswer: 'O veya ◯', explanation: 'C + ters C = O!' }
        ]
      }
    },
    {
      id: 'simetri-kodlama',
      title: 'Simetri ve Kodlama',
      description: 'Kodlama stratejileriyle simetri oluşturma',
      emoji: '💻',
      duration: '45 dk',
      difficulty: 3,
      keywords: ['kodlama', 'algoritma', 'strateji', 'komut', 'simetri'],
      content: {
        introduction: 'Adım adım komutlarla simetrik şekiller oluşturmayı öğreneceksin!',
        motivationQuote: 'Kodla, çiz, simetri bul! 💻',
        funFacts: [
          'Bilgisayarlar simetri algılayabilir!',
          'Robotlar simetri ile yön bulur!',
          'Grafik programları simetri kullanır!'
        ],
        steps: [
          {
            title: 'Kodlama Stratejisi',
            content: 'Şekil çizimini adım adım komutlara dönüştür.',
            visual: '→ sağa git | ↑ yukarı git | ← sola git',
            audio: 'Her adımı komut olarak yaz!',
            example: { question: 'Kare çizmek için?', answer: '→ ↑ ← ↓', explanation: 'Sağ, yukarı, sol, aşağı!' }
          },
          {
            title: 'Simetri Komutu',
            content: 'Orijinal komutları simetri için dönüştür.',
            visual: '→ → ↑ için simetri: ← ← ↑ (dikey)',
            audio: 'Sağ sol olur, sol sağ olur!',
            example: { question: '→ ↓ → komutunun dikey simetrisi?', answer: '← ↓ ←', explanation: 'Sağlar sola döner!' }
          },
          {
            title: 'Strateji Belirleme',
            content: 'En verimli stratejiyi seç.',
            visual: 'Strateji 1: Tek tek çiz | Strateji 2: Yarısını çiz, kopyala',
            audio: 'Simetriyi kullan, zamandan kazan!',
            example: { question: 'Hangisi daha hızlı?', answer: 'Yarısını çiz, yansıt', explanation: 'Yarım iş, tam sonuç!' }
          },
          {
            title: 'Yatay Simetri Kodlama',
            content: 'Yukarı aşağı olur, aşağı yukarı olur.',
            visual: '↑ ↑ → için yatay simetri: ↓ ↓ →',
            audio: 'Yukarılar aşağıya döner!',
            example: { question: '↓ → ↓ komutunun yatay simetrisi?', answer: '↑ → ↑', explanation: 'Aşağılar yukarıya!' }
          },
          {
            title: 'Strateji Değerlendirme',
            content: 'Seçilen stratejinin doğru sonuç verip vermediğini kontrol et.',
            visual: 'Sonuç simetrik mi? ✓ veya ✗',
            audio: 'Kontrol et, gerekirse düzelt!',
            example: { question: 'Sonuç simetrik değilse?', answer: 'Stratejiyi değiştir', explanation: 'Farklı yol dene!' }
          },
          {
            title: 'Karmaşık Şekiller',
            content: 'Büyük şekilleri küçük parçalara ayır.',
            visual: 'Büyük şekil = Parça1 + Parça2 + Parça3',
            audio: 'Parça parça çöz, birleştir!',
            example: { question: 'Karmaşık şekil nasıl çizilir?', answer: 'Adım adım, parça parça', explanation: 'Küçük parçalar = kolay çözüm!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '→ → ↑ dikey simetrisi?', options: ['→ → ↓', '← ← ↑', '↑ ← ←', '↓ → →'], correctAnswer: '← ← ↑', explanation: 'Sağlar sola döner!' },
          { type: 'fill-blank', question: '↑ ↓ komutunun tersi = ___ ↑', correctAnswer: '↓', explanation: 'Önce aşağı, sonra yukarı!' },
          { type: 'multiple-choice', question: '↓ → yatay simetrisi?', options: ['↑ →', '↓ ←', '↑ ←', '→ ↓'], correctAnswer: '↑ →', explanation: 'Aşağı yukarı olur!' },
          { type: 'fill-blank', question: 'Verimli strateji: yarısını çiz, ___', correctAnswer: 'yansıt', explanation: 'Simetriyi kullan!' },
          { type: 'multiple-choice', question: '→ ↑ → ↓ dikey simetrisi?', options: ['← ↑ ← ↓', '→ ↓ → ↑', '← ↓ ← ↑', '↑ → ↓ →'], correctAnswer: '← ↑ ← ↓', explanation: 'Sadece sağ-sol değişir!' },
          { type: 'fill-blank', question: 'Büyük şekil = küçük ___lar', correctAnswer: 'parça', explanation: 'Parçalara ayır!' },
          { type: 'multiple-choice', question: 'Sonuç yanlışsa?', options: ['Bırak', 'Strateji değiştir', 'Aynısını tekrarla', 'Hiçbiri'], correctAnswer: 'Strateji değiştir', explanation: 'Farklı yol dene!' },
          { type: 'fill-blank', question: '↑ ↑ ↑ yatay simetrisi = ___ ↓ ↓', correctAnswer: '↓', explanation: 'Tüm yukarılar aşağı!' },
          { type: 'multiple-choice', question: 'Kare çizmek için en az kaç komut?', options: ['2', '3', '4', '5'], correctAnswer: '4', explanation: 'Her kenar için 1 komut!' },
          { type: 'fill-blank', question: 'Kontrol: Sonuç ___ mi?', correctAnswer: 'simetrik', explanation: 'Simetri kontrolü!' }
        ]
      }
    }
  ]
};
