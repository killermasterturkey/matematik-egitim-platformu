// 2. SINIF - 4. TEMA: SAYILAR VE NİCELİKLER (2) - Kesir, Para, Zaman, Ölçme
import { Theme } from '../../types';

export const tema4: Theme = {
  id: 'sayilar-nicelikler-2',
  title: 'Sayılar ve Nicelikler (2)',
  description: 'Bütün, yarım, çeyrek; para, zaman ve ölçme!',
  emoji: '⏰',
  color: 'from-amber-400 to-orange-500',
  bgColor: 'bg-amber-50',
  borderColor: 'border-amber-200',
  textColor: 'text-amber-600',
  hours: 30,
  objectives: [
    'Bütün, yarım, çeyrek kavramları',
    'Para hesaplamaları',
    'Zaman ölçü birimleri',
    'Uzunluk ve kütle ölçme'
  ],
  keywords: ['Bütün', 'Yarım', 'Çeyrek', 'Para', 'Saat', 'Metre', 'Kilogram'],
  generalizations: ['Bütün, yarım ve çeyrek parça-bütün ilişkisini ifade eder.', 'Ölçmede standart birimler kullanılır.'],
  topics: [
    {
      id: 'butun-yarim-ceyrek',
      title: 'Bütün, Yarım ve Çeyrek',
      description: 'Parça-bütün ilişkisi',
      emoji: '🍕',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['bütün', 'yarım', 'çeyrek', 'parça'],
      content: {
        introduction: 'Pizza, elma, kek... hepsini paylaşabiliriz! Yarım, çeyrek kavramlarını öğrenelim.',
        motivationQuote: 'Paylaşmak güzeldir! 🍕',
        funFacts: [
          'Futbol maçı 2 yarıdan oluşur!',
          'Çeyrek 25 kuruşa da denir (ABD)!',
          'Pizza genellikle 8 dilime bölünür!'
        ],
        steps: [
          {
            title: 'Bütün Nedir?',
            content: 'Tam, kesilmemiş, parçalanmamış hali bütündür.',
            visual: '🍕 Tam pizza = 1 bütün',
            audio: 'Hiç kesilmemiş pizza bir bütün!',
            example: { question: 'Tam elma kaç bütün?', answer: '1 bütün', explanation: 'Tam elma = 1 bütün!' }
          },
          {
            title: 'Yarım Nedir?',
            content: 'Bütünü iki eşit parçaya bölersen her biri yarım.',
            visual: '🍕 → 🍕/2 + 🍕/2 (İki yarım)',
            audio: 'Bir bütün = iki yarım!',
            example: { question: 'İki yarım elma kaç bütün?', answer: '1 bütün', explanation: 'Yarım + yarım = 1 bütün!' }
          },
          {
            title: 'Çeyrek Nedir?',
            content: 'Bütünü dört eşit parçaya bölersen her biri çeyrek.',
            visual: '🍕 → 4 dilim (Her dilim çeyrek)',
            audio: 'Bir bütün = dört çeyrek!',
            example: { question: 'Dört çeyrek kaç bütün?', answer: '1 bütün', explanation: '4 çeyrek = 1 bütün!' }
          },
          {
            title: 'Yarım ve Çeyrek İlişkisi',
            content: 'Bir yarım = iki çeyrek.',
            visual: '1/2 = 2/4 (Yarım = 2 çeyrek)',
            audio: 'Yarımı ikiye bölersen iki çeyrek olur!',
            example: { question: '1 yarım kaç çeyrek?', answer: '2 çeyrek', explanation: '1 yarım = 2 çeyrek!' }
          },
          {
            title: 'Günlük Hayatta',
            content: 'Saat, para, yiyeceklerde yarım ve çeyrek kullanırız.',
            visual: '⏰ Yarım saat = 30 dk | Çeyrek = 15 dk',
            audio: 'Saat yarım geçiyor = 12:30!',
            example: { question: 'Çeyrek saat kaç dakika?', answer: '15 dakika', explanation: '60 ÷ 4 = 15 dk!' }
          },
          {
            title: 'Parçaları Birleştirme',
            content: 'Parçaları toplayarak bütün oluşturuz.',
            visual: '1/4 + 1/4 + 1/4 + 1/4 = 1 bütün',
            audio: 'Dört çeyreği bir araya getir, bütün olur!',
            example: { question: '3 çeyrek + 1 çeyrek = ?', answer: '1 bütün', explanation: '4 çeyrek = 1 bütün!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'İki yarım kaç bütün?', options: ['Yarım', '1 bütün', '2 bütün', '4 çeyrek'], correctAnswer: '1 bütün', explanation: 'Yarım + yarım = 1 bütün!' },
          { type: 'fill-blank', question: '1 bütün = ___ çeyrek', correctAnswer: '4', explanation: '1 bütün = 4 çeyrek!' },
          { type: 'multiple-choice', question: '1 yarım = kaç çeyrek?', options: ['1', '2', '3', '4'], correctAnswer: '2', explanation: '1 yarım = 2 çeyrek!' },
          { type: 'fill-blank', question: 'Çeyrek saat = ___ dakika', correctAnswer: '15', explanation: '60 ÷ 4 = 15 dk!' },
          { type: 'multiple-choice', question: '3 çeyrek pizza yedim. Kaç çeyrek kaldı?', options: ['1', '2', '3', '4'], correctAnswer: '1', explanation: '4 - 3 = 1 çeyrek!' },
          { type: 'fill-blank', question: 'Yarım saat = ___ dakika', correctAnswer: '30', explanation: '60 ÷ 2 = 30 dk!' },
          { type: 'multiple-choice', question: 'Elmanın yarısını yedim. Ne kadar kaldı?', options: ['Tam', 'Yarım', 'Çeyrek', 'Hiç'], correctAnswer: 'Yarım', explanation: '1 - yarım = yarım kaldı!' },
          { type: 'fill-blank', question: '2 yarım = ___ bütün', correctAnswer: '1', explanation: '2 yarım = 1 bütün!' },
          { type: 'multiple-choice', question: '8 çeyrek kaç bütün?', options: ['1', '2', '4', '8'], correctAnswer: '2', explanation: '8 ÷ 4 = 2 bütün!' },
          { type: 'fill-blank', question: '1/2 + 1/2 = ___ bütün', correctAnswer: '1', explanation: 'Yarım + yarım = 1!' }
        ]
      }
    },
    {
      id: 'para-hesaplama',
      title: 'Para Hesaplamaları',
      description: 'TL ve kuruş ile işlemler',
      emoji: '💵',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['TL', 'kuruş', 'para üstü', 'alışveriş'],
      content: {
        introduction: 'Parayı tanıyalım, hesap yapalım, para üstü alalım!',
        motivationQuote: 'Hesabını bilen kazanır! 💵',
        funFacts: [
          '100 kuruş = 1 TL!',
          'ATM\'ler 50.000\'den fazla TL tutabilir!',
          'Dünyanın en pahalı parası Kuveyt Dinarı!'
        ],
        steps: [
          {
            title: 'TL ve Kuruş',
            content: '100 kuruş = 1 TL. Kuruş, TL\'nin küçük birimidir.',
            visual: '100 kr = 1 TL | 50 kr = yarım TL',
            audio: 'Yüz kuruş bir lira eder!',
            example: { question: '150 kuruş kaç TL?', answer: '1 TL 50 kr', explanation: '100 kr = 1 TL, 50 kr kalır!' }
          },
          {
            title: 'Para Toplama',
            content: 'Paraları toplayarak toplam bul.',
            visual: '5 TL + 10 TL + 20 TL = 35 TL',
            audio: 'Tüm paraları topla!',
            example: { question: '25 TL + 15 TL = ?', answer: '40 TL', explanation: '25 + 15 = 40 TL!' }
          },
          {
            title: 'Para Üstü',
            content: 'Verdiğin para - fiyat = para üstü.',
            visual: '50 TL - 35 TL = 15 TL üstü',
            audio: 'Fazla verdiğin para geri alırsın!',
            example: { question: '100 TL verdim, 72 TL tutttu. Üstü?', answer: '28 TL', explanation: '100 - 72 = 28 TL!' }
          },
          {
            title: 'Alışveriş Hesabı',
            content: 'Aldığın ürünlerin fiyatlarını topla.',
            visual: '🍎 3 TL + 🍌 5 TL + 🍊 4 TL = 12 TL',
            audio: 'Hepsini topla, kasaya öde!',
            example: { question: 'Defter 8 TL, kalem 3 TL. Toplam?', answer: '11 TL', explanation: '8 + 3 = 11 TL!' }
          },
          {
            title: 'Bütçe Hesabı',
            content: 'Param yeterli mi? Fiyatla karşılaştır.',
            visual: 'Param: 50 TL | Oyuncak: 45 TL | ✅ Alabilirim!',
            audio: 'Paran fiyattan fazlaysa alabilirsin!',
            example: { question: '30 TL\'m var, 35 TL\'lik şey alabilir miyim?', answer: 'Hayır', explanation: '30 < 35, yetmez!' }
          },
          {
            title: 'Biriktirme',
            content: 'Her gün biriktirerek hedefine ulaş.',
            visual: '7 gün × 5 TL = 35 TL',
            audio: 'Günde 5 TL biriktir, haftada 35 TL!',
            example: { question: '10 gün, günde 3 TL. Toplam?', answer: '30 TL', explanation: '10 × 3 = 30 TL!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '100 kuruş kaç TL?', options: ['10 TL', '1 TL', '0.5 TL', '100 TL'], correctAnswer: '1 TL', explanation: '100 kr = 1 TL!' },
          { type: 'fill-blank', question: '25 TL + 30 TL = ___ TL', correctAnswer: '55', explanation: '25 + 30 = 55!' },
          { type: 'multiple-choice', question: '50 TL verdim, 38 TL tuttu. Üstü?', options: ['10 TL', '12 TL', '18 TL', '88 TL'], correctAnswer: '12 TL', explanation: '50 - 38 = 12!' },
          { type: 'fill-blank', question: '100 TL - 65 TL = ___ TL üstü', correctAnswer: '35', explanation: '100 - 65 = 35!' },
          { type: 'multiple-choice', question: '40 TL\'m var, 45 TL\'lik oyuncak. Eksik?', options: ['5 TL', '85 TL', '45 TL', '40 TL'], correctAnswer: '5 TL', explanation: '45 - 40 = 5 TL eksik!' },
          { type: 'fill-blank', question: '🍎2TL + 🍌3TL + 🍊5TL = ___TL', correctAnswer: '10', explanation: '2+3+5 = 10!' },
          { type: 'multiple-choice', question: '1 TL 50 kr kaç kuruş?', options: ['50', '100', '150', '200'], correctAnswer: '150', explanation: '100 + 50 = 150 kr!' },
          { type: 'fill-blank', question: '5 gün × 4 TL = ___ TL', correctAnswer: '20', explanation: '5 × 4 = 20!' },
          { type: 'multiple-choice', question: '20 TL + 20 TL + 10 TL = ?', options: ['30 TL', '40 TL', '50 TL', '60 TL'], correctAnswer: '50 TL', explanation: '20+20+10 = 50!' },
          { type: 'fill-blank', question: '200 kuruş = ___ TL', correctAnswer: '2', explanation: '200 ÷ 100 = 2 TL!' }
        ]
      }
    },
    {
      id: 'zaman-olcme',
      title: 'Zamanı Ölçelim',
      description: 'Saat, dakika, gün, hafta, ay, yıl',
      emoji: '⏰',
      duration: '45 dk',
      difficulty: 2,
      keywords: ['saat', 'dakika', 'gün', 'hafta', 'ay', 'yıl'],
      content: {
        introduction: 'Zaman hep akıyor! Saati okumayı ve zaman birimlerini öğrenelim.',
        motivationQuote: 'Zamanı iyi kullan! ⏰',
        funFacts: [
          'Bir yılda 365 gün var (artık yılda 366)!',
          'Dünya\'nın Güneş etrafındaki dönüşü 1 yıl!',
          'En uzun gün 21 Haziran\'da!'
        ],
        steps: [
          {
            title: 'Saat ve Dakika',
            content: '1 saat = 60 dakika. Uzun akrep dakika, kısa akrep saat.',
            visual: '⏰ 1 saat = 60 dakika',
            audio: 'Kısa akrep saati, uzun akrep dakikayı gösterir.',
            example: { question: '2 saat kaç dakika?', answer: '120 dakika', explanation: '2 × 60 = 120 dk!' }
          },
          {
            title: 'Saati Okuma',
            content: 'Kısa akrep saat, uzun akrep dakika gösterir.',
            visual: '3:00 (üç) | 3:30 (üç buçuk) | 3:15 (üçü çeyrek geçiyor)',
            audio: 'Üçü çeyrek geçiyor = 3:15!',
            example: { question: '6:30 nasıl okunur?', answer: 'Altı buçuk', explanation: '6:30 = altı buçuk!' }
          },
          {
            title: 'Gün ve Hafta',
            content: '1 hafta = 7 gün. Pazartesi, Salı, Çarşamba...',
            visual: 'Pzt - Salı - Çar - Per - Cum - Cmt - Paz = 7 gün',
            audio: 'Bir hafta yedi gündür!',
            example: { question: '2 hafta kaç gün?', answer: '14 gün', explanation: '2 × 7 = 14 gün!' }
          },
          {
            title: 'Ay ve Yıl',
            content: '1 yıl = 12 ay. Ocak, Şubat, Mart...',
            visual: '12 ay = 1 yıl | 365 gün = 1 yıl',
            audio: 'Bir yıl on iki aydan oluşur!',
            example: { question: '6 ay yarım yıl mı?', answer: 'Evet', explanation: '12 ÷ 2 = 6 ay = yarım yıl!' }
          },
          {
            title: 'Takvim Okuma',
            content: 'Takvimde gün, ay ve yıl yazar.',
            visual: '15 Nisan 2024 → Gün: 15, Ay: Nisan, Yıl: 2024',
            audio: 'Takvimi okuyarak tarihi öğrenirsin!',
            example: { question: '1 Ocak hangi ay?', answer: 'Ocak (1. ay)', explanation: 'Ocak yılın ilk ayı!' }
          },
          {
            title: 'Zaman Hesaplama',
            content: 'Süreleri toplayarak veya çıkararak hesapla.',
            visual: '2 saat + 3 saat = 5 saat',
            audio: 'Süreleri toplayabiliriz!',
            example: { question: '5 gün + 3 gün = ?', answer: '8 gün', explanation: '5 + 3 = 8 gün!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '1 saat kaç dakika?', options: ['30', '45', '60', '100'], correctAnswer: '60', explanation: '1 saat = 60 dakika!' },
          { type: 'fill-blank', question: '1 hafta = ___ gün', correctAnswer: '7', explanation: '1 hafta = 7 gün!' },
          { type: 'multiple-choice', question: '1 yıl kaç ay?', options: ['10', '11', '12', '13'], correctAnswer: '12', explanation: '1 yıl = 12 ay!' },
          { type: 'fill-blank', question: '3 saat = ___ dakika', correctAnswer: '180', explanation: '3 × 60 = 180 dk!' },
          { type: 'multiple-choice', question: '4:30 nasıl okunur?', options: ['Dört', 'Dört buçuk', 'Beş', 'Üç buçuk'], correctAnswer: 'Dört buçuk', explanation: '4:30 = dört buçuk!' },
          { type: 'fill-blank', question: '2 hafta = ___ gün', correctAnswer: '14', explanation: '2 × 7 = 14!' },
          { type: 'multiple-choice', question: 'Yarım saat kaç dakika?', options: ['15', '30', '45', '60'], correctAnswer: '30', explanation: '60 ÷ 2 = 30 dk!' },
          { type: 'fill-blank', question: '24 ay = ___ yıl', correctAnswer: '2', explanation: '24 ÷ 12 = 2 yıl!' },
          { type: 'multiple-choice', question: 'Haftanın 3. günü?', options: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe'], correctAnswer: 'Çarşamba', explanation: 'Pzt, Salı, Çarşamba!' },
          { type: 'fill-blank', question: 'Çeyrek saat = ___ dakika', correctAnswer: '15', explanation: '60 ÷ 4 = 15 dk!' }
        ]
      }
    },
    {
      id: 'uzunluk-olcme',
      title: 'Uzunluk Ölçme',
      description: 'Metre ve santimetre ile ölçme',
      emoji: '📐',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['metre', 'santimetre', 'uzunluk', 'cetvel'],
      content: {
        introduction: 'Metre ve santimetre ile her şeyi ölçebilirsin! Cetvel ve metre kullanmayı öğren.',
        motivationQuote: 'Ölçerek kesin bilgi edinirsin! 📐',
        funFacts: [
          '1 metre = 100 santimetre!',
          'En uzun insan 2.72 metre boyundaydı!',
          'Everest Dağı 8848 metre yüksekliğinde!'
        ],
        steps: [
          {
            title: 'Metre (m)',
            content: 'Metre uzunluk ölçü birimidir. m ile gösterilir.',
            visual: '1 m = bir adım (yaklaşık) | 📏',
            audio: 'Bir metre yaklaşık bir büyük adım kadar!',
            example: { question: 'Sınıf tahtası kaç metre?', answer: '3-4 metre', explanation: 'Tahtalar genellikle 3-4 metre!' }
          },
          {
            title: 'Santimetre (cm)',
            content: 'Santimetre küçük uzunluklar için. 1 m = 100 cm.',
            visual: '1 cm = bir parmak ucu genişliği | 100 cm = 1 m',
            audio: 'Yüz santimetre bir metre eder!',
            example: { question: '50 cm kaç metre?', answer: 'Yarım metre', explanation: '50 = 100\'ün yarısı!' }
          },
          {
            title: 'Cetvel ile Ölçme',
            content: 'Cetvelin 0\'ından başla, nesnenin sonundaki sayıyı oku.',
            visual: '📏 0 ─ 5 ─ 10 ─ 15 ─ 20 cm',
            audio: 'Sıfırdan başla, bitiş noktasını oku!',
            example: { question: 'Kalem 15 cm mi 15 m mi?', answer: '15 cm', explanation: 'Kalemler santimetre ile ölçülür!' }
          },
          {
            title: 'Metre ile Ölçme',
            content: 'Büyük şeyler için metre kullanırız.',
            visual: '🏠 Oda: 4 m | 🚗 Araba: 4 m | 🧍 Boy: 1.5 m',
            audio: 'Oda, araba, boy metre ile ölçülür!',
            example: { question: 'Futbol sahası kaç metre?', answer: '100-110 metre', explanation: 'Sahalar çok uzun!' }
          },
          {
            title: 'Dönüştürme',
            content: '1 m = 100 cm. Çevirme yap.',
            visual: '2 m = 200 cm | 150 cm = 1 m 50 cm',
            audio: '2 metre = 2 × 100 = 200 santimetre!',
            example: { question: '3 m kaç cm?', answer: '300 cm', explanation: '3 × 100 = 300 cm!' }
          },
          {
            title: 'Tahmin ve Ölçme',
            content: 'Önce tahmin et, sonra ölç, karşılaştır.',
            visual: 'Tahmin: 20 cm | Ölçüm: 18 cm | Yakın!',
            audio: 'Tahmin ve ölçüm ne kadar yakın?',
            example: { question: 'Tahmin neden önemli?', answer: 'Ölçüm mantıklı mı kontrol için', explanation: 'Tahmin kontrole yarar!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '1 metre kaç santimetre?', options: ['10', '50', '100', '1000'], correctAnswer: '100', explanation: '1 m = 100 cm!' },
          { type: 'fill-blank', question: '2 m = ___ cm', correctAnswer: '200', explanation: '2 × 100 = 200!' },
          { type: 'multiple-choice', question: 'Kalem uzunluğu için hangi birim?', options: ['km', 'm', 'cm', 'mm'], correctAnswer: 'cm', explanation: 'Küçük şeyler cm ile!' },
          { type: 'fill-blank', question: '150 cm = ___ m ___ cm', correctAnswer: '1 m 50', explanation: '100 cm = 1 m, 50 cm kalır!' },
          { type: 'multiple-choice', question: 'Oda genişliği için hangi birim?', options: ['mm', 'cm', 'm', 'Hiçbiri'], correctAnswer: 'm', explanation: 'Büyük şeyler m ile!' },
          { type: 'fill-blank', question: '5 m = ___ cm', correctAnswer: '500', explanation: '5 × 100 = 500!' },
          { type: 'multiple-choice', question: '50 cm = ?', options: ['5 m', '0.5 m', '50 m', '500 m'], correctAnswer: '0.5 m', explanation: '50 = 100\'ün yarısı = yarım metre!' },
          { type: 'fill-blank', question: '1 m 25 cm = ___ cm', correctAnswer: '125', explanation: '100 + 25 = 125!' },
          { type: 'multiple-choice', question: 'Cetvelle ölçerken nereden başlarız?', options: ['1\'den', '0\'dan', '10\'dan', 'Sondan'], correctAnswer: '0\'dan', explanation: 'Her zaman 0\'dan başla!' },
          { type: 'fill-blank', question: '300 cm = ___ m', correctAnswer: '3', explanation: '300 ÷ 100 = 3!' }
        ]
      }
    },
    {
      id: 'kutle-olcme',
      title: 'Kütle Ölçme',
      description: 'Kilogram ve gram ile ölçme',
      emoji: '⚖️',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['kilogram', 'gram', 'tartı', 'ağırlık'],
      content: {
        introduction: 'Kilogram ve gram ile kütleleri ölçeriz. Terazi ve tartı kullanırız.',
        motivationQuote: 'Tartarak doğru miktarı buluruz! ⚖️',
        funFacts: [
          '1 kilogram = 1000 gram!',
          'Fil 5000 kg ağırlığında olabilir!',
          'Bir karınca sadece birkaç miligram!'
        ],
        steps: [
          {
            title: 'Kilogram (kg)',
            content: 'Kilogram ağır şeyler için. 1 litre su = 1 kg.',
            visual: '⚖️ 1 kg = 1 litre su ağırlığı',
            audio: 'Kilogram günlük hayatta çok kullanılır!',
            example: { question: 'Bir çocuk kaç kg?', answer: '20-40 kg', explanation: 'Çocuklar 20-40 kg arasında!' }
          },
          {
            title: 'Gram (g)',
            content: 'Gram hafif şeyler için. 1 kg = 1000 g.',
            visual: '1 kg = 1000 g | Bir elma ≈ 200 g',
            audio: 'Bin gram bir kilogram eder!',
            example: { question: '500 g kaç kg?', answer: 'Yarım kg', explanation: '500 = 1000\'in yarısı!' }
          },
          {
            title: 'Terazi Kullanma',
            content: 'Terazi ile kütle ölçeriz. Dijital veya ibreli.',
            visual: '⚖️ Sağ kefeye 1 kg, sol kefeye nesne koy',
            audio: 'Terazi dengede ise iki taraf eşit ağırlıkta!',
            example: { question: 'Terazi ne ölçer?', answer: 'Kütle/ağırlık', explanation: 'Terazi kütle ölçer!' }
          },
          {
            title: 'Dönüştürme',
            content: '1 kg = 1000 g. Çevirme yap.',
            visual: '2 kg = 2000 g | 1500 g = 1 kg 500 g',
            audio: '2 kilogram = 2 × 1000 = 2000 gram!',
            example: { question: '3 kg kaç g?', answer: '3000 g', explanation: '3 × 1000 = 3000!' }
          },
          {
            title: 'Günlük Hayatta',
            content: 'Market, mutfak, sporda kütle ölçeriz.',
            visual: '🍎 Elma: 200 g | 🥛 Süt: 1 kg | 🏋️ Halter: 20 kg',
            audio: 'Markette meyve gramla, süt kilogramla satılır!',
            example: { question: '1 kg elma kaç tane?', answer: '5-6 tane', explanation: 'Her elma yaklaşık 200 g!' }
          },
          {
            title: 'Tahmin ve Tartma',
            content: 'Önce tahmin et, sonra tart.',
            visual: 'Tahmin: 300 g | Tartım: 280 g | İyi tahmin!',
            audio: 'Elinde tut, tahmin et, sonra tart!',
            example: { question: 'Tahmin doğruysa ne olur?', answer: 'Deneyim kazanırsın', explanation: 'Pratikle tahmin gelişir!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '1 kg kaç gram?', options: ['10', '100', '1000', '10000'], correctAnswer: '1000', explanation: '1 kg = 1000 g!' },
          { type: 'fill-blank', question: '2 kg = ___ g', correctAnswer: '2000', explanation: '2 × 1000 = 2000!' },
          { type: 'multiple-choice', question: 'Elma tartmak için hangi birim?', options: ['m', 'cm', 'kg', 'g'], correctAnswer: 'g', explanation: 'Elma gram ile tartılır!' },
          { type: 'fill-blank', question: '500 g = yarım ___', correctAnswer: 'kg', explanation: '500 = 1000\'in yarısı!' },
          { type: 'multiple-choice', question: 'Bir insan kaç kg?', options: ['5-10', '50-80', '500-800', '5000'], correctAnswer: '50-80', explanation: 'Yetişkinler 50-80 kg!' },
          { type: 'fill-blank', question: '4 kg = ___ g', correctAnswer: '4000', explanation: '4 × 1000 = 4000!' },
          { type: 'multiple-choice', question: '1500 g = ?', options: ['1 kg', '1 kg 500 g', '15 kg', '150 g'], correctAnswer: '1 kg 500 g', explanation: '1000 g = 1 kg, 500 g kalır!' },
          { type: 'fill-blank', question: '3000 g = ___ kg', correctAnswer: '3', explanation: '3000 ÷ 1000 = 3!' },
          { type: 'multiple-choice', question: 'Terazi ne için kullanılır?', options: ['Uzunluk', 'Ağırlık', 'Zaman', 'Sıcaklık'], correctAnswer: 'Ağırlık', explanation: 'Terazi ağırlık ölçer!' },
          { type: 'fill-blank', question: '1 kg 200 g = ___ g', correctAnswer: '1200', explanation: '1000 + 200 = 1200!' }
        ]
      }
    }
  ]
};
