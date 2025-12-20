// 2. TEMA: SAYILAR VE NİCELİKLER (2) - Ölçme
import { Theme } from '../types';

export const tema2: Theme = {
  id: 'sayilar-nicelikler-2',
  title: 'Sayılar ve Nicelikler (2) - Ölçme',
  description: 'Uzunluk ve kütle ölçmeyi öğrenelim! Standart olmayan araçlarla ölçüm yapalım.',
  emoji: '📏',
  color: 'from-blue-400 to-cyan-500',
  bgColor: 'bg-blue-50',
  borderColor: 'border-blue-200',
  textColor: 'text-blue-600',
  hours: 18,
  objectives: [
    'Uzunluk kavramını anlama',
    'Kütle kavramını anlama',
    'Standart olmayan araçlarla ölçme',
    'Ölçüm sonuçlarını tahmin etme'
  ],
  keywords: ['Uzunluk', 'Kısa', 'Uzun', 'Ağır', 'Hafif', 'Ölçme', 'Tartma'],
  generalizations: ['Nesneler, kendilerine sayısal değerler atanmadan da karşılaştırılabilir.'],
  topics: [
    {
      id: 'uzunluk-olcme',
      title: 'Uzunluk Ölçmeyi Öğrenelim',
      description: 'Standart olmayan araçlarla uzunluk ölçme',
      emoji: '📏',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['uzunluk', 'kısa', 'uzun', 'ölçme'],
      content: {
        introduction: 'Her şeyin bir uzunluğu var! Masanın, kalemin, parmağının... Hepsini ölçebiliriz!',
        motivationQuote: 'Ölçerek dünyayı daha iyi anlarız! 📏',
        funFacts: [
          'En uzun hayvan mavi balinadır - 30 metre!',
          'En kısa kuş arı sinek kuşudur - 5 cm!',
          'Zürafaların boynu 2 metre uzunluğundadır!'
        ],
        steps: [
          {
            title: 'Uzunluk Nedir?',
            content: 'Uzunluk, bir şeyin ne kadar uzun veya kısa olduğunu gösterir.',
            visual: '📏 ══════════ Uzun | ══ Kısa',
            audio: 'Kalemini masaya koy, bir ucu ile diğer ucu arasındaki mesafe uzunluktur.',
            example: { question: 'Cetvel ne ölçer?', answer: 'Uzunluk', explanation: 'Cetvel uzunluk ölçer!' }
          },
          {
            title: 'Uzun ve Kısa',
            content: 'İki nesneyi yan yana koyarak hangisinin uzun, hangisinin kısa olduğunu buluruz.',
            visual: '🖍️🖍️🖍️🖍️🖍️ Uzun kalem | 🖍️🖍️ Kısa kalem',
            audio: 'Uzun kalem daha fazla yer kaplar, kısa kalem daha az.',
            example: { question: 'Zürafa mı fil mi daha uzun boylu?', answer: 'Zürafa', explanation: 'Zürafa daha uzun boyludur!' }
          },
          {
            title: 'Karış ile Ölçme',
            content: 'Elini aç, başparmak ile serçe parmak arası bir karıştır.',
            visual: '🖐️ = 1 Karış | Masa = 5 karış uzunluğunda',
            audio: 'Karış, eski zamanlarda kullanılan bir ölçü birimiydi.',
            example: { question: 'Kitabın uzunluğu 2 karış. Bu ne demek?', answer: 'Kitap 2 karış uzunluğunda', explanation: 'Elinle ölçtüğünde 2 karış eder!' }
          },
          {
            title: 'Adım ile Ölçme',
            content: 'Bir adım atarak mesafe ölçebiliriz.',
            visual: '👣 👣 👣 👣 👣 = 5 adım',
            audio: 'Sınıfın bir ucundan diğerine kaç adım? Say ve öğren!',
            example: { question: 'Oda 10 adım uzunluğunda. Bu çok mu az mı?', answer: 'Orta', explanation: '10 adım küçük bir oda için normal!' }
          },
          {
            title: 'Ayak ile Ölçme',
            content: 'Ayağını kullanarak da ölçüm yapabilirsin.',
            visual: '🦶🦶🦶🦶 = 4 ayak uzunluğunda',
            audio: 'Ayağını uç uca koyarak mesafe ölçebilirsin.',
            example: { question: 'Halı 8 ayak uzunluğunda. Büyük mü?', answer: 'Evet, büyük', explanation: '8 ayak oldukça büyük bir halı!' }
          },
          {
            title: 'Tahmin ve Ölçme',
            content: 'Önce tahmin et, sonra ölç ve karşılaştır!',
            visual: 'Tahmin: 6 karış | Ölçüm: 5 karış | Yakın! ✓',
            audio: 'Tahminin ölçüme ne kadar yakın?',
            example: { question: 'Tahmin: 10 adım, Ölçüm: 8 adım. Fark?', answer: '2 adım', explanation: '10 - 8 = 2 adım fark!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Hangisi uzunluk ölçer?', options: ['Terazi', 'Cetvel', 'Saat', 'Termometre'], correctAnswer: 'Cetvel', explanation: 'Cetvel uzunluk ölçer!' },
          { type: 'fill-blank', question: 'Zürafa fileden daha ___ boyludur', correctAnswer: 'uzun', explanation: 'Zürafa en uzun kara hayvanıdır!' },
          { type: 'multiple-choice', question: 'Karış neyle ölçülür?', options: ['Elle', 'Ayakla', 'Göz ile', 'Kulak ile'], correctAnswer: 'Elle', explanation: 'Karış el açıklığıdır!' },
          { type: 'fill-blank', question: '👣👣👣👣👣 = ___ adım', correctAnswer: '5', explanation: '5 adım!' },
          { type: 'multiple-choice', question: 'Hangisi en kısa?', options: ['Karınca', 'Kedi', 'At', 'Fil'], correctAnswer: 'Karınca', explanation: 'Karınca en küçük ve en kısa!' },
          { type: 'fill-blank', question: 'Masa 4 karış, sandalye 2 karış. Masa ___ karış daha uzun', correctAnswer: '2', explanation: '4 - 2 = 2 karış fark!' },
          { type: 'multiple-choice', question: 'Hangi araç standart değil?', options: ['Cetvel', 'Metre', 'Karış', 'Mezura'], correctAnswer: 'Karış', explanation: 'Karış herkesin elinde farklı olabilir!' },
          { type: 'fill-blank', question: 'Daha uzun olan ___ yer kaplar', correctAnswer: 'çok', explanation: 'Uzun olan daha çok yer kaplar!' },
          { type: 'multiple-choice', question: 'Sınıf 20 adım. Koridor 30 adım. Hangisi uzun?', options: ['Sınıf', 'Koridor', 'Eşit', 'Belli değil'], correctAnswer: 'Koridor', explanation: '30 > 20, koridor daha uzun!' },
          { type: 'fill-blank', question: 'Tahmin: 7 ayak, Ölçüm: 7 ayak. Tahmin ___', correctAnswer: 'doğru', explanation: 'Mükemmel tahmin!' }
        ]
      }
    },
    {
      id: 'kutle-tartma',
      title: 'Kütle ve Tartma',
      description: 'Ağır, hafif kavramları ve tartma',
      emoji: '⚖️',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['ağır', 'hafif', 'tartma', 'kütle'],
      content: {
        introduction: 'Bazı şeyler ağır, bazıları hafif! Hangisinin daha ağır olduğunu nasıl anlarız?',
        motivationQuote: 'Tartarak karşılaştırmayı öğrenelim! ⚖️',
        funFacts: [
          'Mavi balina 150 ton ağırlığındadır!',
          'Bir tüy sadece birkaç gram!',
          'Ay\'da daha hafif olursun çünkü yerçekimi az!'
        ],
        steps: [
          {
            title: 'Ağır ve Hafif',
            content: 'Ağır olan nesneyi kaldırmak zordur, hafif olanı kaldırmak kolaydır.',
            visual: '🏋️ Ağır! | 🪶 Hafif!',
            audio: 'Bir taş ağırdır, bir tüy hafiftir.',
            example: { question: 'Kitap mı tüy mü ağır?', answer: 'Kitap', explanation: 'Kitap tüyden çok daha ağır!' }
          },
          {
            title: 'Ellerimizle Karşılaştırma',
            content: 'İki nesneyi ellerine al, hangisi daha ağır hisset!',
            visual: '🤲 Sol el: Elma | Sağ el: Karpuz → Karpuz ağır!',
            audio: 'Ellerini terazi gibi kullan!',
            example: { question: 'Silgi ve defter hangisi ağır?', answer: 'Defter', explanation: 'Defter silgiden ağırdır!' }
          },
          {
            title: 'Terazi ile Tartma',
            content: 'Terazi iki nesneyi karşılaştırmaya yarar. Ağır olan taraf aşağı iner.',
            visual: '⚖️ ↙️ Ağır taraf aşağı iner!',
            audio: 'Terazinin ağır olan tarafı aşağıya doğru eğilir.',
            example: { question: 'Terazide elma aşağıda, portakal yukarıda. Hangisi ağır?', answer: 'Elma', explanation: 'Aşağıdaki ağırdır!' }
          },
          {
            title: 'Eşit Kütle',
            content: 'İki nesne aynı ağırlıkta ise terazi dengede kalır.',
            visual: '⚖️ ─── Dengede = Eşit ağırlık',
            audio: 'Terazi düz duruyorsa iki taraf eşit ağırlıkta!',
            example: { question: 'Terazi dengede. Ne anlama gelir?', answer: 'Eşit ağırlık', explanation: 'İki taraf aynı ağırlıkta!' }
          },
          {
            title: 'Standart Olmayan Ölçü',
            content: 'Bozuk para, bilye gibi nesnelerle ağırlık ölçebiliriz.',
            visual: '🍎 = 🪙🪙🪙 (3 bozuk para ağırlığında)',
            audio: 'Elma 3 bozuk para ağırlığında!',
            example: { question: 'Kalem 2 bilye ağırlığında. Silgi 3 bilye. Hangisi ağır?', answer: 'Silgi', explanation: '3 > 2, silgi daha ağır!' }
          },
          {
            title: 'Tahmin ve Tartma',
            content: 'Önce tahmin et, sonra tart ve karşılaştır!',
            visual: 'Tahmin: Armut ağır | Tartım: Elma ağır | Sürpriz!',
            audio: 'Bazen tahminimiz yanlış çıkabilir, tartarak öğreniriz!',
            example: { question: 'Neden tartmak önemli?', answer: 'Doğru sonuç için', explanation: 'Tahmin yanıltabilir, tartmak kesin sonuç verir!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Hangisi ağır?', options: ['Tüy', 'Taş', 'Kağıt', 'Balon'], correctAnswer: 'Taş', explanation: 'Taş en ağır olanı!' },
          { type: 'fill-blank', question: 'Terazi ağır tarafa ___ eğilir', correctAnswer: 'aşağı', explanation: 'Ağır taraf aşağıya iner!' },
          { type: 'multiple-choice', question: 'Terazi dengede ise?', options: ['Sol ağır', 'Sağ ağır', 'Eşit', 'Bozuk'], correctAnswer: 'Eşit', explanation: 'Denge = eşit ağırlık!' },
          { type: 'fill-blank', question: 'Fil karıncadan daha ___', correctAnswer: 'ağır', explanation: 'Fil çok ağır!' },
          { type: 'multiple-choice', question: 'Hangisi hafif?', options: ['Araba', 'Ev', 'Kuş', 'Masa'], correctAnswer: 'Kuş', explanation: 'Kuş en hafif!' },
          { type: 'fill-blank', question: '🍎 = 🪙🪙🪙🪙 → Elma ___ bozuk para ağırlığında', correctAnswer: '4', explanation: '4 bozuk para!' },
          { type: 'multiple-choice', question: 'Kitap 5 bilye, kalem 2 bilye. Hangisi ağır?', options: ['Kitap', 'Kalem', 'Eşit', 'Belli değil'], correctAnswer: 'Kitap', explanation: '5 > 2, kitap ağır!' },
          { type: 'fill-blank', question: 'Hafif olan nesneyi kaldırmak ___', correctAnswer: 'kolay', explanation: 'Hafif = kolay kaldırılır!' },
          { type: 'multiple-choice', question: 'Karpuz mu çilek mi ağır?', options: ['Karpuz', 'Çilek', 'Eşit', 'Belli değil'], correctAnswer: 'Karpuz', explanation: 'Karpuz çok ağır!' },
          { type: 'fill-blank', question: 'Terazinin ağır tarafı ___ iner', correctAnswer: 'aşağı', explanation: 'Ağır = aşağı!' }
        ]
      }
    }
  ]
};
