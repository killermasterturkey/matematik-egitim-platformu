// Müfredat için yardımcı fonksiyonlar ve soru oluşturucular
import { Question, Example, LessonStep } from './types';

// Benzersiz ID oluşturucu
let questionIdCounter = 0;
export const generateQuestionId = (prefix: string = 'q'): string => {
  questionIdCounter++;
  return `${prefix}-${Date.now()}-${questionIdCounter}`;
};

// Çoktan seçmeli soru oluşturucu
export const createMultipleChoice = (
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
  visual?: string,
  difficulty: 1 | 2 | 3 = 1,
  hint?: string
): Question => ({
  id: generateQuestionId('mc'),
  type: 'multiple-choice',
  question,
  options,
  correctAnswer,
  explanation,
  visual,
  difficulty,
  hint
});

// Boşluk doldurma sorusu oluşturucu
export const createFillBlank = (
  question: string,
  correctAnswer: string | string[],
  explanation: string,
  visual?: string,
  difficulty: 1 | 2 | 3 = 1,
  hint?: string
): Question => ({
  id: generateQuestionId('fb'),
  type: 'fill-blank',
  question,
  correctAnswer,
  explanation,
  visual,
  difficulty,
  hint
});

// Doğru/Yanlış sorusu oluşturucu
export const createTrueFalse = (
  question: string,
  correctAnswer: 'Doğru' | 'Yanlış',
  explanation: string,
  difficulty: 1 | 2 | 3 = 1
): Question => ({
  id: generateQuestionId('tf'),
  type: 'true-false',
  question,
  options: ['Doğru', 'Yanlış'],
  correctAnswer,
  explanation,
  difficulty
});

// Görsel soru oluşturucu
export const createVisualQuestion = (
  question: string,
  visual: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
  difficulty: 1 | 2 | 3 = 1
): Question => ({
  id: generateQuestionId('vq'),
  type: 'visual',
  question,
  visual,
  options,
  correctAnswer,
  explanation,
  difficulty
});

// Örnek soru oluşturucu (çözümlü)
export const createExample = (
  question: string,
  answer: string,
  explanation: string,
  visual?: string,
  steps?: string[]
): Example => ({
  question,
  answer,
  explanation,
  visual,
  steps
});

// Ders adımı oluşturucu
export const createStep = (
  title: string,
  content: string,
  audio: string,
  options?: {
    visual?: string;
    explanation?: string;
    tip?: string;
    warning?: string;
    examples?: Example[];
  }
): LessonStep => ({
  title,
  content,
  audio,
  visual: options?.visual,
  explanation: options?.explanation,
  tip: options?.tip,
  warning: options?.warning,
  examples: options?.examples
});

// Görsel oluşturucular
export const visualHelpers = {
  // Emoji dizisi oluştur
  emojiArray: (emoji: string, count: number): string =>
    Array(count).fill(emoji).join(''),

  // Gruplu emoji oluştur
  groupedEmojis: (emoji: string, groups: number[]): string =>
    groups.map(count => Array(count).fill(emoji).join('')).join(' '),

  // Sayı doğrusu oluştur
  numberLine: (start: number, end: number, highlight?: number): string => {
    let line = '';
    for (let i = start; i <= end; i++) {
      line += i === highlight ? `[${i}]` : `${i}`;
      if (i < end) line += ' → ';
    }
    return line;
  },

  // Toplama/Çıkarma görseli
  mathVisual: (a: number, op: '+' | '-', b: number, emojiA: string = '🔵', emojiB: string = '🔴'): string => {
    const partA = Array(a).fill(emojiA).join('');
    const partB = Array(b).fill(emojiB).join('');
    const result = op === '+' ? a + b : a - b;
    return `${partA} ${op} ${partB} = ${result}`;
  },

  // Sayma görseli
  countVisual: (items: { emoji: string; count: number }[]): string => {
    return items.map(item => `${Array(item.count).fill(item.emoji).join('')} = ${item.count}`).join('\n');
  },

  // Karşılaştırma görseli
  compareVisual: (a: number, b: number, emojiA: string = '🍎', emojiB: string = '🍊'): string => {
    const partA = Array(a).fill(emojiA).join('');
    const partB = Array(b).fill(emojiB).join('');
    const symbol = a > b ? '>' : a < b ? '<' : '=';
    return `${partA} (${a}) ${symbol} ${partB} (${b})`;
  }
};

// Motivasyon sözleri - konu bazlı
export const motivationQuotes = {
  sayilar: [
    "Sayılar hayatın her yerinde! Onları öğrenmek süper güç kazanmak gibi! 🦸",
    "Her büyük matematikçi senin gibi sayıları sayarak başladı! ⭐",
    "Sayılar arkadaşların, onlarla dans etmeyi öğren! 💃"
  ],
  toplama: [
    "Toplama, paylaşmanın matematiği! Ne kadar çok toplarsak o kadar zenginiz! 💎",
    "İki el bir araya gelince alkış olur, iki sayı bir araya gelince toplam! 👏",
    "Toplama öğrenen, dünyayı birleştirir! 🌍"
  ],
  cikarma: [
    "Çıkarma, farkı görmektir! Fark etmek öğrenmenin başlangıcı! 🔍",
    "Bazen bir şeyi çıkarmak, kalanın değerini anlamaktır! 💝",
    "Çıkarma yapmak, matematiğin dedektifi olmak gibi! 🕵️"
  ],
  carpma: [
    "Çarpma, hızlı toplamanın süper gücü! ⚡",
    "Çarpım tablosu, matematiğin şifresidir! 🔐",
    "Çarpmayı öğrenen, zamanı kazanır! ⏰"
  ],
  bolme: [
    "Bölme, adil paylaşmanın sanatı! ⚖️",
    "Bölmeyi bilen, herkesi mutlu eder! 😊",
    "Bölme, büyük problemleri küçük parçalara ayırmaktır! 🧩"
  ],
  geometri: [
    "Şekiller her yerde! Onları görebilen bir sanatçısın! 🎨",
    "Geometri, doğanın dili! 🌸",
    "Her şeklin bir hikayesi var, sen de onu dinle! 📖"
  ],
  olcme: [
    "Ölçmek, dünyayı anlamanın ilk adımı! 📏",
    "Her şeyin bir ölçüsü var, önemli olan doğru ölçmek! ⚖️",
    "Ölçen insan, planlayan insandır! 📐"
  ]
};

// Eğlenceli bilgiler - konu bazlı
export const funFacts = {
  sayilar: [
    "Sıfır sayısını ilk Hintliler kullanmış! 🇮🇳",
    "En büyük sayının adı googolplex! 🤯",
    "Arılar 4'e kadar sayabilir! 🐝",
    "Antik Mısırlılar 10 tabanını kullanırdı! 🏛️",
    "Parmakların tam 10 tane, çünkü 10 özel bir sayı! 🖐️"
  ],
  toplama: [
    "İlk hesap makinesi 1642'de yapıldı! 🖩",
    "Beynimiz saniyede binlerce toplama yapabilir! 🧠",
    "Karıncalar yiyecekleri toplaya toplaya taşır! 🐜"
  ],
  geometri: [
    "Piramitler mükemmel geometrik şekillerdir! 🔺",
    "Arı petekleri altıgen şeklindedir! 🐝",
    "Gökkuşağı yarım daire şeklindedir! 🌈"
  ]
};

// Renk paleti - tutarlı tasarım için
export const colorPalette = {
  success: 'from-green-400 to-emerald-500',
  error: 'from-red-400 to-rose-500',
  warning: 'from-yellow-400 to-amber-500',
  info: 'from-blue-400 to-indigo-500',
  primary: 'from-purple-400 to-violet-500'
};

// ============================================
// SINIF BAZLI ANLATIM DİLİ REHBERİ
// ============================================

// Sınıf seviyeleri için anlatım özellikleri
export type GradeLevel = 0 | 1 | 2 | 3 | 4;

export interface LanguageStyle {
  gradeLevel: GradeLevel;
  name: string;
  description: string;
  characteristics: string[];
  mathTerms: {
    addition: string[];      // Toplama için kullanılacak ifadeler
    subtraction: string[];   // Çıkarma için kullanılacak ifadeler
    multiplication: string[]; // Çarpma için kullanılacak ifadeler
    division: string[];      // Bölme için kullanılacak ifadeler
    equals: string[];        // Eşittir için kullanılacak ifadeler
  };
  sentencePatterns: string[];
  visualDensity: 'very-high' | 'high' | 'medium' | 'low';
  stepCount: 'many-small' | 'moderate' | 'few-large';
  repeatExamples: boolean;
}

// Her sınıf için anlatım stili
export const gradeLanguageStyles: Record<GradeLevel, LanguageStyle> = {
  // Özel Eğitim / Destek Sınıfı - En basit ve somut anlatım
  0: {
    gradeLevel: 0,
    name: 'Destek Sınıfı',
    description: 'Ekstra destek gerektiren öğrenciler için özel anlatım',
    characteristics: [
      'Çok kısa ve basit cümleler',
      'Her adımda görsel destek',
      'Somut nesnelerle anlatım',
      'Sürekli tekrar ve pekiştirme',
      'Sesli anlatım desteği',
      'Renk kodlaması'
    ],
    mathTerms: {
      addition: ['koy', 'ekle', 'birleştir', 've', 'ile birlikte'],
      subtraction: ['al', 'çıkar', 'ayır', 'gitti', 'kaldı'],
      multiplication: ['tane var', 'kere', 'grup', 'kutu'],
      division: ['paylaş', 'böl', 'dağıt', 'eşit parça'],
      equals: ['eder', 'olur', 'yapar', 'buluruz']
    },
    sentencePatterns: [
      'Bak! {visual}',
      '{count} tane {object} var.',
      'Şimdi {action} yapıyoruz.',
      'Sonuç: {result}',
      'Aferin! Doğru!'
    ],
    visualDensity: 'very-high',
    stepCount: 'many-small',
    repeatExamples: true
  },

  // 1. Sınıf - Çok basit, oyunsu, somut
  1: {
    gradeLevel: 1,
    name: '1. Sınıf',
    description: 'Okula yeni başlayan çocuklar için eğlenceli anlatım',
    characteristics: [
      'Kısa ve net cümleler',
      'Bol emoji ve görsel',
      'Oyun ve hikaye ile anlatım',
      'Somut örnekler (elma, top, şeker)',
      'Tekrarlı öğrenme',
      'Teşvik edici dil'
    ],
    mathTerms: {
      addition: ['koy', 'ekle', 've', 'ile', 'daha'],
      subtraction: ['al', 'çıkar', 'gitti', 'kaldı', 'kaç tane kaldı'],
      multiplication: ['tane', 'kere', 'kere yap'],
      division: ['paylaş', 'böl', 'eşit dağıt'],
      equals: ['eder', 'olur', 'yapar', 'buluruz']
    },
    sentencePatterns: [
      '{object} {count} tane!',
      'Haydi {count} kere sayalım!',
      '{a} ile {b} toplarsak {result} olur!',
      'Şimdi senin sıran!'
    ],
    visualDensity: 'very-high',
    stepCount: 'many-small',
    repeatExamples: true
  },

  // 2. Sınıf - Basit ama biraz daha detaylı
  2: {
    gradeLevel: 2,
    name: '2. Sınıf',
    description: 'Temel kavramları pekiştiren öğrenciler için',
    characteristics: [
      'Açık ve anlaşılır cümleler',
      'Görsellerle destekleme',
      'Günlük hayat örnekleri',
      'Adım adım çözüm',
      'Neden-sonuç ilişkisi',
      'Pratik ipuçları'
    ],
    mathTerms: {
      addition: ['topla', 'ekle', 'birleştir', 'ile'],
      subtraction: ['çıkar', 'eksilt', 'fark', 'kalan'],
      multiplication: ['kere', 'kez', 'defa', 'çarp'],
      division: ['böl', 'paylaştır', 'ayır'],
      equals: ['eşittir', 'eder', 'sonuç', 'bulunur']
    },
    sentencePatterns: [
      '{count} tane {object} düşün.',
      'Şimdi {action} yapalım.',
      'Sonuç olarak {result} buluruz.',
      'Hatırla: {tip}'
    ],
    visualDensity: 'high',
    stepCount: 'moderate',
    repeatExamples: true
  },

  // 3. Sınıf - Orta düzey, soyutlamaya geçiş
  3: {
    gradeLevel: 3,
    name: '3. Sınıf',
    description: 'Soyut düşünceye geçiş yapan öğrenciler için',
    characteristics: [
      'Açıklayıcı cümleler',
      'Kavram açıklamaları',
      'Strateji öğretimi',
      'Problem çözme teknikleri',
      'Karşılaştırmalı örnekler'
    ],
    mathTerms: {
      addition: ['toplama işlemi', 'eklemek', 'artırmak'],
      subtraction: ['çıkarma işlemi', 'azaltmak', 'fark bulmak'],
      multiplication: ['çarpma işlemi', 'kat', 'tekrar toplama'],
      division: ['bölme işlemi', 'pay', 'payda'],
      equals: ['eşittir', 'sonuç', 'değer']
    },
    sentencePatterns: [
      'Bu problemde {concept} kullanacağız.',
      'Önce {step1}, sonra {step2}.',
      'Dikkat: {warning}',
      'İpucu: {tip}'
    ],
    visualDensity: 'medium',
    stepCount: 'moderate',
    repeatExamples: false
  },

  // 4. Sınıf - İleri düzey, soyut düşünce
  4: {
    gradeLevel: 4,
    name: '4. Sınıf',
    description: 'İleri düzey kavramları öğrenen öğrenciler için',
    characteristics: [
      'Akademik dil kullanımı',
      'Mantıksal açıklamalar',
      'Formül ve kural tanıtımı',
      'Çoklu çözüm yolları',
      'Eleştirel düşünme'
    ],
    mathTerms: {
      addition: ['toplama', 'toplam', 'artı'],
      subtraction: ['çıkarma', 'fark', 'eksi'],
      multiplication: ['çarpma', 'çarpım', 'kat'],
      division: ['bölme', 'bölüm', 'pay/payda'],
      equals: ['eşittir', 'denktir', 'sonuç']
    },
    sentencePatterns: [
      '{concept} kavramını inceleyelim.',
      'Matematiksel olarak: {formula}',
      'Bu durumda {explanation}.',
      'Alternatif yöntem: {alternative}'
    ],
    visualDensity: 'medium',
    stepCount: 'few-large',
    repeatExamples: false
  }
};

// ============================================
// ANLATIM YARDIMCI FONKSİYONLARI
// ============================================

// Çarpma işlemini çocuk dostu anlatım
export const multiplicationToText = (a: number, b: number, grade: GradeLevel = 1): string => {
  const styles = gradeLanguageStyles[grade];

  if (grade <= 1) {
    // En basit anlatım: "3 kere 4" veya "3 tane 4"
    return `${a} kere ${b}`;
  } else if (grade === 2) {
    return `${a} kez ${b}`;
  } else {
    return `${a} × ${b}`;
  }
};

// Toplama işlemini çocuk dostu anlatım
export const additionToText = (a: number, b: number, grade: GradeLevel = 1): string => {
  if (grade <= 1) {
    return `${a} ile ${b} topla`;
  } else if (grade === 2) {
    return `${a} ve ${b} toplandığında`;
  } else {
    return `${a} + ${b}`;
  }
};

// Çıkarma işlemini çocuk dostu anlatım
export const subtractionToText = (a: number, b: number, grade: GradeLevel = 1): string => {
  if (grade <= 1) {
    return `${a} tane var, ${b} tane gitti`;
  } else if (grade === 2) {
    return `${a} sayısından ${b} çıkarılırsa`;
  } else {
    return `${a} - ${b}`;
  }
};

// Görsel çarpma gösterimi (gruplar halinde)
export const visualMultiplication = (a: number, b: number, emoji: string = '🔵'): string => {
  const groups: string[] = [];
  for (let i = 0; i < a; i++) {
    groups.push(Array(b).fill(emoji).join(''));
  }
  return `${a} kere ${b} = ${a * b}\n\n` + groups.map((g, i) => `${i + 1}. grup: ${g}`).join('\n');
};

// Görsel toplama gösterimi
export const visualAddition = (a: number, b: number, emojiA: string = '🍎', emojiB: string = '🍊'): string => {
  const partA = Array(a).fill(emojiA).join('');
  const partB = Array(b).fill(emojiB).join('');
  return `${partA} + ${partB}\n${a} + ${b} = ${a + b}`;
};

// Görsel çıkarma gösterimi
export const visualSubtraction = (a: number, b: number, emoji: string = '🍎', crossEmoji: string = '❌'): string => {
  const original = Array(a).fill(emoji).join('');
  const crossed = Array(a).fill((_, i) => i < b ? crossEmoji : emoji).map((fn, i) => i < b ? crossEmoji : emoji).join('');
  return `Başta: ${original} (${a} tane)\nGitti: ${Array(b).fill(crossEmoji).join('')} (${b} tane)\nKaldı: ${Array(a - b).fill(emoji).join('')} (${a - b} tane)`;
};

// Adım adım çözüm oluşturucu
export const createStepByStepSolution = (
  problem: string,
  steps: { description: string; calculation: string; result: string }[],
  grade: GradeLevel = 1
): string[] => {
  const style = gradeLanguageStyles[grade];

  return steps.map((step, index) => {
    if (grade <= 1) {
      return `${index + 1}. ${step.description}\n   ${step.calculation} → ${step.result}`;
    } else {
      return `Adım ${index + 1}: ${step.description}\n   ${step.calculation} = ${step.result}`;
    }
  });
};

// Sınıfa uygun ipucu oluşturucu
export const createGradeTip = (concept: string, grade: GradeLevel): string => {
  const tips: Record<GradeLevel, (concept: string) => string> = {
    0: (c) => `💡 Unutma: ${c}! Tekrar edelim!`,
    1: (c) => `💡 Hatırla: ${c}!`,
    2: (c) => `💡 İpucu: ${c}`,
    3: (c) => `💡 Strateji: ${c}`,
    4: (c) => `💡 Not: ${c}`
  };

  return tips[grade](concept);
};

// Sınıfa uygun motivasyon mesajı
export const getGradeMotivation = (grade: GradeLevel, isCorrect: boolean): string => {
  const messages: Record<GradeLevel, { correct: string[]; incorrect: string[] }> = {
    0: {
      correct: ['Süper! 🌟', 'Aferin sana! 👏', 'Harika! 🎉', 'Çok güzel! 💝'],
      incorrect: ['Tekrar deneyelim! 💪', 'Birlikte yapalım! 🤝', 'Olur böyle! 😊']
    },
    1: {
      correct: ['Harikasın! ⭐', 'Süpersin! 🚀', 'Muhteşem! 🌈', 'Bravo! 🎊'],
      incorrect: ['Yaklaştın! 💪', 'Bir daha dene! 🌟', 'Neredeyse! ✨']
    },
    2: {
      correct: ['Mükemmel! 🏆', 'Çok iyi! 🌟', 'Harika iş! 👏'],
      incorrect: ['Tekrar düşün! 🤔', 'İpucuna bak! 💡', 'Yeniden dene! 💪']
    },
    3: {
      correct: ['Doğru! ✅', 'Harika çözüm! 🎯', 'Başardın! 🏆'],
      incorrect: ['Yanlış, tekrar dene! 📝', 'Adımları kontrol et! 🔍']
    },
    4: {
      correct: ['Doğru cevap! ✅', 'Tebrikler! 🎯'],
      incorrect: ['Hatalı, gözden geçir! 📋', 'Yöntemini kontrol et! 🔎']
    }
  };

  const pool = isCorrect ? messages[grade].correct : messages[grade].incorrect;
  return pool[Math.floor(Math.random() * pool.length)];
};

// Sayı okuma yardımcısı (sınıfa göre)
export const numberToWords = (num: number, grade: GradeLevel): string => {
  const ones = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'];
  const tens = ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];

  if (num < 10) return ones[num];
  if (num < 100) {
    const t = Math.floor(num / 10);
    const o = num % 10;
    return tens[t] + (o > 0 ? ' ' + ones[o] : '');
  }

  // 100 ve üzeri için sadece 3-4. sınıfta detaylı
  if (grade >= 3 && num >= 100) {
    const h = Math.floor(num / 100);
    const remainder = num % 100;
    let result = (h === 1 ? '' : ones[h] + ' ') + 'yüz';
    if (remainder > 0) result += ' ' + numberToWords(remainder, grade);
    return result;
  }

  return num.toString();
};

// ASCII art şekil oluşturucular
export const shapeVisuals = {
  square: (size: number = 3): string => {
    const line = '■'.repeat(size);
    return Array(size).fill(line).join('\n');
  },

  triangle: (height: number = 3): string => {
    const lines: string[] = [];
    for (let i = 1; i <= height; i++) {
      const spaces = ' '.repeat(height - i);
      const stars = '▲'.repeat(i * 2 - 1);
      lines.push(spaces + stars);
    }
    return lines.join('\n');
  },

  circle: (): string => {
    return `  ●●●
 ●   ●
●     ●
 ●   ●
  ●●●`;
  },

  rectangle: (width: number = 4, height: number = 2): string => {
    const line = '■'.repeat(width);
    return Array(height).fill(line).join('\n');
  }
};

// Parmak sayma görseli
export const fingerCounting = (count: number): string => {
  const fingers = ['✊', '☝️', '✌️', '🤟', '🖖', '🖐️'];
  if (count <= 5) return fingers[count] + ` = ${count}`;
  if (count <= 10) return fingers[5] + fingers[count - 5] + ` = ${count}`;
  return `${count} 🔢`;
};

// Onluk ve birlik görselleştirme
export const placeValueVisual = (num: number): string => {
  const tens = Math.floor(num / 10);
  const ones = num % 10;

  const tenBlocks = Array(tens).fill('🔟').join(' ');
  const oneBlocks = Array(ones).fill('🔵').join('');

  return `${num} sayısı:\nOnluklar: ${tenBlocks || 'yok'} (${tens * 10})\nBirlikler: ${oneBlocks || 'yok'} (${ones})\nToplam: ${tens * 10} + ${ones} = ${num}`;
};
