// 4. TEMA: İŞLEMLERDEN CEBİRSEL DÜŞÜNMEYE
import { Theme } from '../types';

export const tema4: Theme = {
  id: 'islemler-cebir',
  title: 'İşlemlerden Cebirsel Düşünmeye',
  description: 'Toplama ve çıkarma işlemlerini öğrenelim! Matematik işlemlerinin temelini atalım.',
  emoji: '➕',
  color: 'from-purple-400 to-indigo-500',
  bgColor: 'bg-purple-50',
  borderColor: 'border-purple-200',
  textColor: 'text-purple-600',
  hours: 50,
  objectives: [
    'Toplama işlemini anlama',
    'Çıkarma işlemini anlama',
    'Toplama ve çıkarma arasındaki ilişki',
    'Eşitlik kavramını anlama'
  ],
  keywords: ['Toplama', 'Çıkarma', 'Artı', 'Eksi', 'Eşittir', 'Toplam', 'Fark'],
  generalizations: ['Toplama ve çıkarma matematikte temel aritmetik işlemlerdendir.'],
  topics: [
    {
      id: 'toplama-temelleri',
      title: 'Toplama İşlemi',
      description: 'İki sayıyı toplama ve toplam bulma',
      emoji: '➕',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['toplama', 'artı', 'toplam', 'birleştirme'],
      content: {
        introduction: 'Toplama, iki veya daha fazla şeyi bir araya getirmektir. Elmalarını topla!',
        motivationQuote: 'Toplamak birleştirmektir, birlik güçtür! ➕',
        funFacts: [
          'Toplama en eski matematik işlemidir!',
          'Bilgisayarlar saniyede milyarlarca toplama yapabilir!',
          'Arılar bile toplu halde çalışır!'
        ],
        steps: [
          {
            title: 'Toplama Nedir?',
            content: 'Toplama, nesneleri bir araya getirip sayısını bulmaktır.',
            visual: '🍎🍎 + 🍎🍎🍎 = 🍎🍎🍎🍎🍎 (2 + 3 = 5)',
            audio: '2 elma ve 3 elma bir araya gelince 5 elma olur!',
            example: { question: '3 + 2 = ?', answer: '5', explanation: '3 ve 2\'yi toplarsak 5 eder!' }
          },
          {
            title: 'Artı İşareti (+)',
            content: 'Artı işareti (+) toplama yaparken kullanılır.',
            visual: '4 + 3 = 7 (Dört artı üç eşittir yedi)',
            audio: 'Artı demek ekle, birleştir demek!',
            example: { question: '5 + 1 nasıl okunur?', answer: 'Beş artı bir', explanation: '+ işareti artı diye okunur!' }
          },
          {
            title: 'Parmaklarla Toplama',
            content: 'Parmaklarını kullanarak toplama yapabilirsin!',
            visual: '✋ 5 parmak + ✌️ 2 parmak = 7 parmak',
            audio: 'Bir elinde 5, diğerinde 2 parmak aç. Toplam 7!',
            example: { question: '4 + 4 parmaklarla nasıl gösterilir?', answer: '8 parmak', explanation: 'Her elde 4 parmak = 8 toplam!' }
          },
          {
            title: 'Toplamı 10\'a Kadar',
            content: '10\'a kadar olan toplama işlemlerini öğrenelim.',
            visual: '6 + 4 = 10 | 7 + 3 = 10 | 8 + 2 = 10',
            audio: '10 yapan ikilileri ezberle: 1-9, 2-8, 3-7, 4-6, 5-5!',
            example: { question: '10 yapmak için 6\'ya ne eklemeliyiz?', answer: '4', explanation: '6 + 4 = 10!' }
          },
          {
            title: 'Toplamı 20\'ye Kadar',
            content: '10\'dan büyük toplamları öğrenelim.',
            visual: '9 + 5 = 14 | 8 + 7 = 15 | 10 + 10 = 20',
            audio: '9 artı 5 eşittir 14. 10\'a tamamla: 9+1=10, 10+4=14!',
            example: { question: '11 + 4 = ?', answer: '15', explanation: '11 artı 4 eşittir 15!' }
          },
          {
            title: 'Günlük Hayatta Toplama',
            content: 'Toplama her yerde! Kaç top, kaç arkadaş...',
            visual: '👧👧👧 + 👦👦 = 5 çocuk',
            audio: '3 kız ve 2 erkek arkadaşın var. Toplam 5 arkadaş!',
            example: { question: '4 kırmızı ve 3 mavi balon. Toplam?', answer: '7 balon', explanation: '4 + 3 = 7 balon!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '3 + 5 = ?', options: ['6', '7', '8', '9'], correctAnswer: '8', explanation: '3 + 5 = 8!' },
          { type: 'fill-blank', question: '7 + 2 = ___', correctAnswer: '9', explanation: '7 + 2 = 9!' },
          { type: 'multiple-choice', question: '10 yapmak için 4 + __ ?', options: ['4', '5', '6', '7'], correctAnswer: '6', explanation: '4 + 6 = 10!' },
          { type: 'fill-blank', question: '6 + 6 = ___', correctAnswer: '12', explanation: '6 + 6 = 12!' },
          { type: 'multiple-choice', question: '🍎🍎🍎 + 🍎🍎 = ?', options: ['4', '5', '6', '7'], correctAnswer: '5', explanation: '3 + 2 = 5 elma!' },
          { type: 'fill-blank', question: '8 + 4 = ___', correctAnswer: '12', explanation: '8 + 4 = 12!' },
          { type: 'multiple-choice', question: '9 + 9 = ?', options: ['16', '17', '18', '19'], correctAnswer: '18', explanation: '9 + 9 = 18!' },
          { type: 'fill-blank', question: '10 + 5 = ___', correctAnswer: '15', explanation: '10 + 5 = 15!' },
          { type: 'multiple-choice', question: 'Toplama işaretinin adı?', options: ['Eksi', 'Artı', 'Çarpı', 'Bölü'], correctAnswer: 'Artı', explanation: '+ işareti artı!' },
          { type: 'fill-blank', question: '5 + 5 + 5 = ___', correctAnswer: '15', explanation: '5+5+5 = 15!' }
        ]
      }
    },
    {
      id: 'cikarma-temelleri',
      title: 'Çıkarma İşlemi',
      description: 'Bir sayıdan diğerini çıkarma ve fark bulma',
      emoji: '➖',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['çıkarma', 'eksi', 'fark', 'azaltma'],
      content: {
        introduction: 'Çıkarma, bir gruptan bazılarını almaktır. 5 elmadan 2 tane yersen kaç kalır?',
        motivationQuote: 'Çıkarmak azaltmaktır, dikkatli ol! ➖',
        funFacts: [
          'Çıkarma, toplamanın tersidir!',
          'Para harcarken çıkarma yaparız!',
          'Geri sayım da çıkarmadır: 10, 9, 8...'
        ],
        steps: [
          {
            title: 'Çıkarma Nedir?',
            content: 'Çıkarma, bir gruptan bazı nesneleri almak veya ayırmaktır.',
            visual: '🍎🍎🍎🍎🍎 - 🍎🍎 = 🍎🍎🍎 (5 - 2 = 3)',
            audio: '5 elmadan 2 tane alırsan 3 elma kalır!',
            example: { question: '7 - 3 = ?', answer: '4', explanation: '7\'den 3 çıkarınca 4 kalır!' }
          },
          {
            title: 'Eksi İşareti (-)',
            content: 'Eksi işareti (-) çıkarma yaparken kullanılır.',
            visual: '8 - 5 = 3 (Sekiz eksi beş eşittir üç)',
            audio: 'Eksi demek çıkar, azalt demek!',
            example: { question: '9 - 4 nasıl okunur?', answer: 'Dokuz eksi dört', explanation: '- işareti eksi diye okunur!' }
          },
          {
            title: 'Parmaklarla Çıkarma',
            content: 'Parmaklarını aç, sonra bazılarını kapat!',
            visual: '🖐️ 5 parmak - ✌️ 2 kapat = 3 açık',
            audio: '5 parmağını aç, 2\'sini kapat. Kaç açık kaldı? 3!',
            example: { question: '10 parmak - 4 kapattın = ?', answer: '6 açık', explanation: '10 - 4 = 6!' }
          },
          {
            title: '10\'a Kadar Çıkarma',
            content: '10\'dan küçük çıkarma işlemlerini öğrenelim.',
            visual: '6 - 2 = 4 | 9 - 5 = 4 | 8 - 3 = 5',
            audio: '6\'dan 2 çıkarınca 4 kalır!',
            example: { question: '10 - 7 = ?', answer: '3', explanation: '10\'dan 7 çıkarınca 3 kalır!' }
          },
          {
            title: '20\'ye Kadar Çıkarma',
            content: '20\'ye kadar çıkarma yapalım.',
            visual: '15 - 6 = 9 | 18 - 9 = 9 | 20 - 5 = 15',
            audio: '15\'ten 6 çıkarınca 9 kalır!',
            example: { question: '17 - 8 = ?', answer: '9', explanation: '17 - 8 = 9!' }
          },
          {
            title: 'Günlük Hayatta Çıkarma',
            content: 'Para harcarken, yemek yerken çıkarma yaparız.',
            visual: '💰 10 TL - 🍭 3 TL = 7 TL kaldı',
            audio: '10 TL\'n var, 3 TL harcadın. 7 TL kaldı!',
            example: { question: '8 kuş vardı, 3\'ü uçtu. Kaç kaldı?', answer: '5 kuş', explanation: '8 - 3 = 5 kuş!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '9 - 4 = ?', options: ['3', '4', '5', '6'], correctAnswer: '5', explanation: '9 - 4 = 5!' },
          { type: 'fill-blank', question: '10 - 3 = ___', correctAnswer: '7', explanation: '10 - 3 = 7!' },
          { type: 'multiple-choice', question: '🍎🍎🍎🍎🍎 - 🍎🍎 = ?', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: '5 - 2 = 3!' },
          { type: 'fill-blank', question: '15 - 7 = ___', correctAnswer: '8', explanation: '15 - 7 = 8!' },
          { type: 'multiple-choice', question: '8 - 8 = ?', options: ['0', '1', '8', '16'], correctAnswer: '0', explanation: 'Kendisinden çıkarınca 0 kalır!' },
          { type: 'fill-blank', question: '12 - 5 = ___', correctAnswer: '7', explanation: '12 - 5 = 7!' },
          { type: 'multiple-choice', question: '20 - 10 = ?', options: ['5', '10', '15', '20'], correctAnswer: '10', explanation: '20 - 10 = 10!' },
          { type: 'fill-blank', question: '18 - 9 = ___', correctAnswer: '9', explanation: '18 - 9 = 9!' },
          { type: 'multiple-choice', question: 'Çıkarma işaretinin adı?', options: ['Artı', 'Eksi', 'Çarpı', 'Eşit'], correctAnswer: 'Eksi', explanation: '- işareti eksi!' },
          { type: 'fill-blank', question: '16 - 8 = ___', correctAnswer: '8', explanation: '16 - 8 = 8!' }
        ]
      }
    },
    {
      id: 'esitlik-kavrami',
      title: 'Eşitlik Kavramı',
      description: 'Eşittir işareti ve denge kavramı',
      emoji: '⚖️',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['eşit', 'eşittir', 'denge', '='],
      content: {
        introduction: 'Eşittir işareti (=) iki tarafın aynı değerde olduğunu gösterir. Terazi gibi!',
        motivationQuote: 'Denge sağlamak matematik ustalığıdır! ⚖️',
        funFacts: [
          'Eşittir işareti (=) 1557\'de icat edildi!',
          'Teraziler eşitliği gösterir!',
          'Denklem dengelemek anlamına gelir!'
        ],
        steps: [
          {
            title: 'Eşit Ne Demek?',
            content: 'İki taraf aynı değerde ise eşittir deriz.',
            visual: '3 + 2 = 5 (Sol taraf = Sağ taraf)',
            audio: '3 artı 2, 5 eder. İki taraf da 5!',
            example: { question: '4 = 4 doğru mu?', answer: 'Evet', explanation: '4, 4\'e eşittir!' }
          },
          {
            title: 'Eşittir İşareti (=)',
            content: 'İki çizgiden oluşur ve "eşittir" diye okunur.',
            visual: '5 + 3 = 8 → "Beş artı üç eşittir sekiz"',
            audio: 'Eşittir işareti iki yatay çizgidir: =',
            example: { question: '7 + 1 = 8 nasıl okunur?', answer: 'Yedi artı bir eşittir sekiz', explanation: '= işareti eşittir!' }
          },
          {
            title: 'Terazi ve Denge',
            content: 'Terazi gibi düşün! İki taraf eşit olmalı.',
            visual: '⚖️ 3+3 = 6 (Dengede!)',
            audio: 'Terazinin bir tarafında 3+3, diğerinde 6. Eşit!',
            example: { question: '2+3 = 4+1 doğru mu?', answer: 'Evet', explanation: 'İki taraf da 5, eşit!' }
          },
          {
            title: 'Eksik Sayıyı Bulma',
            content: 'Bazen bir sayı eksik olabilir. Onu bulmalıyız!',
            visual: '5 + __ = 9 → __ = 4',
            audio: '5 ile ne toplanırsa 9 olur? 4!',
            example: { question: '__ + 3 = 7, eksik sayı?', answer: '4', explanation: '4 + 3 = 7!' }
          },
          {
            title: 'Farklı İfadeler, Aynı Değer',
            content: 'Aynı değer farklı şekillerde yazılabilir.',
            visual: '2+3 = 4+1 = 5 (Hepsi 5!)',
            audio: '2 artı 3 de 5, 4 artı 1 de 5!',
            example: { question: '6+2 = 5+__ eksik?', answer: '3', explanation: '6+2=8, 5+3=8!' }
          },
          {
            title: 'Denklem Kurma',
            content: 'Problem çözmek için denklem kurarız.',
            visual: '🍎+🍎+🍎 = 3 → Her 🍎 = 1',
            audio: '3 elma 3\'e eşitse, her elma 1 eder!',
            example: { question: '⭐+⭐ = 10 ise ⭐=?', answer: '5', explanation: '5+5=10, yani ⭐=5!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '3 + 4 = ?', options: ['5', '6', '7', '8'], correctAnswer: '7', explanation: '3 + 4 = 7!' },
          { type: 'fill-blank', question: '5 + ___ = 9', correctAnswer: '4', explanation: '5 + 4 = 9!' },
          { type: 'multiple-choice', question: '6 + 2 = 3 + ?', options: ['4', '5', '6', '7'], correctAnswer: '5', explanation: '6+2=8, 3+5=8!' },
          { type: 'fill-blank', question: '___ + 6 = 10', correctAnswer: '4', explanation: '4 + 6 = 10!' },
          { type: 'multiple-choice', question: '8 = 8 doğru mu?', options: ['Evet', 'Hayır'], correctAnswer: 'Evet', explanation: 'Sayı kendisine eşit!' },
          { type: 'fill-blank', question: '7 + 3 = ___ + 0', correctAnswer: '10', explanation: '7+3=10, 10+0=10!' },
          { type: 'multiple-choice', question: '⚖️ dengede ise ne var?', options: ['Eşitlik', 'Fark', 'Bölüm', 'Çarpım'], correctAnswer: 'Eşitlik', explanation: 'Denge = Eşitlik!' },
          { type: 'fill-blank', question: '12 - ___ = 7', correctAnswer: '5', explanation: '12 - 5 = 7!' },
          { type: 'multiple-choice', question: '2+2+2 = ?', options: ['4', '5', '6', '8'], correctAnswer: '6', explanation: '2+2+2 = 6!' },
          { type: 'fill-blank', question: '9 = 4 + ___', correctAnswer: '5', explanation: '4 + 5 = 9!' }
        ]
      }
    },
    {
      id: 'toplama-cikarma-iliskisi',
      title: 'Toplama ve Çıkarma İlişkisi',
      description: 'Toplama ve çıkarmanın ters işlemler olduğunu anlama',
      emoji: '🔄',
      duration: '40 dk',
      difficulty: 2,
      keywords: ['ters işlem', 'ilişki', 'kontrol'],
      content: {
        introduction: 'Toplama ve çıkarma birbirinin tersidir! Birini yapıp diğeriyle kontrol edebiliriz.',
        motivationQuote: 'Her yolun bir dönüşü var! 🔄',
        funFacts: [
          'Ters işlemler birbirini iptal eder!',
          'Banka hesabında para girişi toplama, çıkışı çıkarmadır!',
          'Asansör yukarı çıkar (+), aşağı iner (-)!'
        ],
        steps: [
          {
            title: 'Ters İşlem Nedir?',
            content: 'Bir işlemi geri almak için ters işlem yaparız.',
            visual: '3 + 5 = 8 | 8 - 5 = 3 (Geri döndük!)',
            audio: '3\'e 5 ekledik 8 oldu, 8\'den 5 çıkardık 3\'e döndük!',
            example: { question: '7 + 2 = 9 ise 9 - 2 = ?', answer: '7', explanation: 'Geri döndük, 7!' }
          },
          {
            title: 'Aile Üçgenleri',
            content: 'Üç sayı bir aile oluşturur: toplama ve çıkarma yaparız.',
            visual: '2, 5, 7: 2+5=7, 5+2=7, 7-2=5, 7-5=2',
            audio: '2, 5 ve 7 bir aile. Topla veya çıkar, hep bunları görürsün!',
            example: { question: '3, 4, 7 ailesi için çıkarma yaz', answer: '7-3=4 veya 7-4=3', explanation: 'Büyükten küçükleri çıkar!' }
          },
          {
            title: 'Sonucu Kontrol Etme',
            content: 'Toplama yaptın mı? Çıkarma ile kontrol et!',
            visual: '6 + 8 = 14 ✓ Kontrol: 14 - 8 = 6 ✓',
            audio: 'Sonucundan çıkararak başlangıca dön!',
            example: { question: '5+7=12 kontrolü?', answer: '12-7=5 ✓', explanation: 'Doğru, geri döndük!' }
          },
          {
            title: 'Problem Çözme',
            content: 'Bazen toplama, bazen çıkarma kullanarak çözeriz.',
            visual: '? + 4 = 10 → 10 - 4 = 6, yani ? = 6',
            audio: 'Bilinmeyeni bulmak için ters işlem yap!',
            example: { question: '__ + 5 = 12, eksik?', answer: '7', explanation: '12 - 5 = 7!' }
          },
          {
            title: 'Değişme Özelliği',
            content: 'Toplamada sayıların yeri değişse de sonuç aynı!',
            visual: '3 + 5 = 5 + 3 = 8',
            audio: '3 artı 5 de 8, 5 artı 3 de 8. Aynı!',
            example: { question: '7 + 2 = 2 + ?', answer: '7', explanation: 'Yer değişir, sonuç aynı: 9!' }
          },
          {
            title: 'Pratik Yapalım!',
            content: 'Şimdi toplama-çıkarma ilişkisini kullanalım!',
            visual: '🎯 Ters işlem ustası ol!',
            audio: 'Artık her işlemi kontrol edebilirsin!',
            example: { question: '9-4=5 kontrolü için ne yaparsın?', answer: '5+4=9', explanation: 'Topla ve kontrol et!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: '8 + 5 = 13 ise 13 - 5 = ?', options: ['5', '8', '13', '18'], correctAnswer: '8', explanation: 'Ters işlem: 8!' },
          { type: 'fill-blank', question: '6 + 7 = 13, kontrol: 13 - 7 = ___', correctAnswer: '6', explanation: 'Geri döndük: 6!' },
          { type: 'multiple-choice', question: '4 + 9 = 9 + ?', options: ['4', '9', '13', '0'], correctAnswer: '4', explanation: 'Değişme özelliği: 4!' },
          { type: 'fill-blank', question: '___ + 8 = 15', correctAnswer: '7', explanation: '15 - 8 = 7!' },
          { type: 'multiple-choice', question: '3, 5, 8 ailesinde hangi çıkarma doğru?', options: ['8-3=5', '5-3=8', '3-5=8', '8-8=3'], correctAnswer: '8-3=5', explanation: 'Büyükten çıkar: 8-3=5!' },
          { type: 'fill-blank', question: '11 - 4 = 7, kontrol: 7 + 4 = ___', correctAnswer: '11', explanation: 'Topla: 11!' },
          { type: 'multiple-choice', question: '12 - __ = 5 için __ = ?', options: ['5', '6', '7', '8'], correctAnswer: '7', explanation: '12 - 7 = 5!' },
          { type: 'fill-blank', question: '5 + 6 = ___ + 5', correctAnswer: '6', explanation: 'Değişme: 6!' },
          { type: 'multiple-choice', question: 'Toplamanın tersi?', options: ['Çarpma', 'Bölme', 'Çıkarma', 'Eşit'], correctAnswer: 'Çıkarma', explanation: 'Çıkarma ters işlem!' },
          { type: 'fill-blank', question: '10 + 0 = ___', correctAnswer: '10', explanation: '0 eklemek değiştirmez!' }
        ]
      }
    }
  ]
};
