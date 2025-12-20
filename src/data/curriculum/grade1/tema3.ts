// 3. TEMA: SAYILAR VE NİCELİKLER (3) - Para
import { Theme } from '../types';

export const tema3: Theme = {
  id: 'sayilar-nicelikler-3',
  title: 'Sayılar ve Nicelikler (3) - Para',
  description: 'Türk Lirası\'nı tanıyalım! Paraların değerlerini öğrenelim.',
  emoji: '💰',
  color: 'from-yellow-400 to-amber-500',
  bgColor: 'bg-yellow-50',
  borderColor: 'border-yellow-200',
  textColor: 'text-yellow-600',
  hours: 7,
  objectives: [
    'Türk Lirası birimlerini tanıma',
    'Para değerlerini karşılaştırma',
    'Basit alışveriş hesapları yapma'
  ],
  keywords: ['Türk Lirası', 'TL', 'Para', 'Değişim', 'Alışveriş'],
  generalizations: ['Para değişim aracıdır.'],
  topics: [
    {
      id: 'paralari-taniyalim',
      title: 'Paraları Tanıyalım',
      description: 'Türk Lirası kağıt ve madeni paraları',
      emoji: '💵',
      duration: '45 dk',
      difficulty: 1,
      keywords: ['TL', 'para', 'banknot', 'madeni'],
      content: {
        introduction: 'Para ile alışveriş yaparız! Türk Lirası\'nın farklı değerlerini öğrenelim.',
        motivationQuote: 'Parayı tanıyan, tasarrufu öğrenir! 💰',
        funFacts: [
          'Atatürk tüm Türk paralarının üzerindedir!',
          'İlk madeni para Lidyalılar tarafından yapıldı!',
          'Dünyada 180\'den fazla farklı para birimi var!'
        ],
        steps: [
          {
            title: 'Para Nedir?',
            content: 'Para, alışveriş yapmak için kullanılan değişim aracıdır.',
            visual: '💵 Para ile → 🍎 Elma alırız!',
            audio: 'Para ile istediğimiz şeyleri satın alabiliriz.',
            example: { question: 'Para ne işe yarar?', answer: 'Alışveriş yapmaya', explanation: 'Para ile ihtiyaçlarımızı alırız!' }
          },
          {
            title: 'Madeni Paralar',
            content: '1 TL, 5 TL ve 10 TL madeni para olarak da bulunur.',
            visual: '🪙 1 TL | 🪙 5 TL | 🪙 10 TL',
            audio: 'Madeni paralar metalden yapılır ve cebimizde taşırız.',
            example: { question: 'Hangi madeni para en değerli?', answer: '10 TL', explanation: '10 > 5 > 1!' }
          },
          {
            title: 'Kağıt Paralar (Banknotlar)',
            content: '5 TL, 10 TL, 20 TL, 50 TL, 100 TL, 200 TL kağıt para olarak vardır.',
            visual: '💵 5 | 💵 10 | 💵 20 | 💵 50 | 💵 100 | 💵 200 TL',
            audio: 'Kağıt paralara banknot denir. Her birinin farklı rengi var!',
            example: { question: 'En büyük değerli banknot?', answer: '200 TL', explanation: '200 TL en büyük değer!' }
          },
          {
            title: 'Paraları Karşılaştırma',
            content: 'Büyük sayılı para daha değerlidir.',
            visual: '100 TL > 50 TL > 20 TL > 10 TL > 5 TL > 1 TL',
            audio: '100 TL, 50 TL\'den daha değerlidir!',
            example: { question: '20 TL mi 50 TL mi değerli?', answer: '50 TL', explanation: '50 > 20!' }
          },
          {
            title: 'Para Biriktirme',
            content: 'Kumbarada para biriktirmek tasarruf etmektir.',
            visual: '🐷 Kumbara: 1+1+1+1+1 = 5 TL',
            audio: 'Her gün 1 TL biriktirsen, haftada 7 TL olur!',
            example: { question: '5 gün, günde 2 TL biriktirsen?', answer: '10 TL', explanation: '5 × 2 = 10 TL!' }
          },
          {
            title: 'Basit Alışveriş',
            content: 'Bir şey alırken paramızın yetip yetmediğine bakarız.',
            visual: '🍎 Elma: 3 TL | 💰 Param: 5 TL | ✅ Alabilirim!',
            audio: 'Param 5 TL, elma 3 TL. 5 > 3, yani elma alabilirim!',
            example: { question: 'Param 10 TL, defter 8 TL. Alabilir miyim?', answer: 'Evet', explanation: '10 > 8, alabilirsin!' }
          }
        ],
        practiceQuestions: [
          { type: 'multiple-choice', question: 'Hangisi en değerli?', options: ['5 TL', '20 TL', '10 TL', '1 TL'], correctAnswer: '20 TL', explanation: '20 en büyük!' },
          { type: 'fill-blank', question: '100 TL ___ TL\'den daha değerli', correctAnswer: '50', explanation: '100 > 50!' },
          { type: 'multiple-choice', question: 'Para ne için kullanılır?', options: ['Oynamak', 'Alışveriş', 'Yazmak', 'Boyamak'], correctAnswer: 'Alışveriş', explanation: 'Para alışveriş içindir!' },
          { type: 'fill-blank', question: 'TL = Türk ___', correctAnswer: 'Lirası', explanation: 'TL = Türk Lirası!' },
          { type: 'multiple-choice', question: 'Madeni para hangisi?', options: ['200 TL', '100 TL', '1 TL', '50 TL'], correctAnswer: '1 TL', explanation: '1 TL madeni paradır!' },
          { type: 'fill-blank', question: '5 + 5 + 10 = ___ TL', correctAnswer: '20', explanation: '5+5+10 = 20 TL!' },
          { type: 'multiple-choice', question: 'Param 15 TL, oyuncak 20 TL. Alabilir miyim?', options: ['Evet', 'Hayır', 'Belki', 'Belli değil'], correctAnswer: 'Hayır', explanation: '15 < 20, yetmez!' },
          { type: 'fill-blank', question: '10 TL + 10 TL = ___ TL', correctAnswer: '20', explanation: '10+10 = 20!' },
          { type: 'multiple-choice', question: 'En küçük değerli para?', options: ['1 TL', '5 TL', '10 TL', '20 TL'], correctAnswer: '1 TL', explanation: '1 en küçük!' },
          { type: 'fill-blank', question: '20 TL - 5 TL = ___ TL para üstü', correctAnswer: '15', explanation: '20-5 = 15 TL üstü!' }
        ]
      }
    }
  ]
};
