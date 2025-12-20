// Gelişmiş Soru Üretici Sistemi
// 1-4 haneli sayılar, tüm işlemler, farklı soru tipleri

export type Operation = 'toplama' | 'cikarma' | 'carpma' | 'bolme' | 'karisik';
export type QuestionType = 'multiple' | 'fill' | 'matching';
export type Difficulty = 1 | 2 | 3 | 4; // 1-4 haneli

export interface MultipleChoiceQuestion {
  type: 'multiple';
  question: string;
  options: string[];
  correct: string;
  operation: Operation;
  difficulty: Difficulty;
}

export interface FillInBlankQuestion {
  type: 'fill';
  question: string;
  correct: string;
  operation: Operation;
  difficulty: Difficulty;
}

export interface MatchingQuestion {
  type: 'matching';
  question: string;
  pairs: Array<{ left: string; right: string }>;
  operation: Operation;
  difficulty: Difficulty;
}

export type Question = MultipleChoiceQuestion | FillInBlankQuestion | MatchingQuestion;

// Zorluk seviyesine göre sayı aralıkları
const getDifficultyRange = (difficulty: Difficulty): { min: number; max: number } => {
  switch (difficulty) {
    case 1: return { min: 1, max: 9 };           // 1 haneli
    case 2: return { min: 10, max: 99 };         // 2 haneli
    case 3: return { min: 100, max: 999 };       // 3 haneli
    case 4: return { min: 1000, max: 9999 };     // 4 haneli
    default: return { min: 1, max: 9 };
  }
};

// Rastgele sayı üretici
const randomInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// İşlem bazlı soru üretici
const generateOperation = (operation: Operation, difficulty: Difficulty): { a: number; b: number; answer: number; text: string; symbol: string } => {
  const range = getDifficultyRange(difficulty);
  let a: number, b: number, answer: number, text: string, symbol: string;

  // Karışık işlem seçimi
  const actualOperation = operation === 'karisik'
    ? (['toplama', 'cikarma', 'carpma', 'bolme'] as Operation[])[Math.floor(Math.random() * 4)]
    : operation;

  switch (actualOperation) {
    case 'toplama':
      a = randomInRange(range.min, range.max);
      b = randomInRange(range.min, range.max);
      answer = a + b;
      symbol = '+';
      text = `${a} + ${b}`;
      break;

    case 'cikarma':
      // Sonuç pozitif olsun
      a = randomInRange(range.min, range.max);
      b = randomInRange(range.min, Math.min(a, range.max));
      answer = a - b;
      symbol = '-';
      text = `${a} - ${b}`;
      break;

    case 'carpma':
      // Çarpma için daha küçük sayılar (sonuç çok büyük olmasın)
      const carpmaMax = difficulty === 1 ? 9 : difficulty === 2 ? 20 : difficulty === 3 ? 50 : 100;
      a = randomInRange(2, carpmaMax);
      b = randomInRange(2, Math.min(12, carpmaMax));
      answer = a * b;
      symbol = '×';
      text = `${a} × ${b}`;
      break;

    case 'bolme':
      // Tam bölünebilen sayılar
      const bolmeMax = difficulty === 1 ? 10 : difficulty === 2 ? 12 : difficulty === 3 ? 20 : 50;
      b = randomInRange(2, bolmeMax);
      answer = randomInRange(2, bolmeMax);
      a = b * answer;
      symbol = '÷';
      text = `${a} ÷ ${b}`;
      break;

    default:
      a = 1; b = 1; answer = 2; symbol = '+';
      text = '1 + 1';
  }

  return { a, b, answer, text, symbol };
};

// Yanlış seçenekler üretici
const generateWrongOptions = (correctAnswer: number, count: number = 3): number[] => {
  const options = new Set<number>();

  while (options.size < count) {
    // Çeşitli yanlış cevap stratejileri
    const strategy = Math.floor(Math.random() * 5);
    let wrongAnswer: number;

    switch (strategy) {
      case 0: // Yakın sayı (+/- 1-5)
        wrongAnswer = correctAnswer + randomInRange(-5, 5);
        break;
      case 1: // Yakın sayı (+/- 10)
        wrongAnswer = correctAnswer + randomInRange(-10, 10);
        break;
      case 2: // Basamak hatası
        wrongAnswer = correctAnswer + randomInRange(1, 3) * 10;
        break;
      case 3: // İşlem hatası simülasyonu
        wrongAnswer = correctAnswer + randomInRange(-20, 20);
        break;
      case 4: // Ters işlem
        wrongAnswer = Math.abs(correctAnswer - randomInRange(5, 15));
        break;
      default:
        wrongAnswer = correctAnswer + randomInRange(1, 10);
    }

    // Negatif ve aynı değerler için kontrol
    if (wrongAnswer > 0 && wrongAnswer !== correctAnswer) {
      options.add(wrongAnswer);
    }
  }

  return Array.from(options);
};

// Çoktan seçmeli soru üretici
export const generateMultipleChoice = (
  operation: Operation,
  difficulty: Difficulty
): MultipleChoiceQuestion => {
  const { answer, text } = generateOperation(operation, difficulty);
  const wrongOptions = generateWrongOptions(answer, 3);

  const allOptions = [answer.toString(), ...wrongOptions.map(n => n.toString())];
  // Karıştır
  const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);

  return {
    type: 'multiple',
    question: `${text} = ?`,
    options: shuffledOptions,
    correct: answer.toString(),
    operation,
    difficulty
  };
};

// Boşluk doldurma soru üretici
export const generateFillInBlank = (
  operation: Operation,
  difficulty: Difficulty
): FillInBlankQuestion => {
  const { a, b, answer, symbol } = generateOperation(operation, difficulty);

  // Rastgele boşluk pozisyonu seç
  const blankPosition = Math.floor(Math.random() * 3);
  let question: string;
  let correct: string;

  switch (blankPosition) {
    case 0: // İlk sayı boşluk
      question = `___ ${symbol} ${b} = ${answer}`;
      correct = a.toString();
      break;
    case 1: // İkinci sayı boşluk
      question = `${a} ${symbol} ___ = ${answer}`;
      correct = b.toString();
      break;
    case 2: // Sonuç boşluk
    default:
      question = `${a} ${symbol} ${b} = ___`;
      correct = answer.toString();
      break;
  }

  return {
    type: 'fill',
    question,
    correct,
    operation,
    difficulty
  };
};

// Eşleştirme sorusu üretici
export const generateMatching = (
  operation: Operation,
  difficulty: Difficulty,
  pairCount: number = 4
): MatchingQuestion => {
  const pairs: Array<{ left: string; right: string }> = [];
  const usedAnswers = new Set<number>();

  for (let i = 0; i < pairCount; i++) {
    let operationData;
    let attempts = 0;

    // Benzersiz cevaplar için
    do {
      operationData = generateOperation(operation, difficulty);
      attempts++;
    } while (usedAnswers.has(operationData.answer) && attempts < 20);

    usedAnswers.add(operationData.answer);
    pairs.push({
      left: operationData.text,
      right: operationData.answer.toString()
    });
  }

  return {
    type: 'matching',
    question: 'İşlemleri sonuçlarıyla eşleştir',
    pairs,
    operation,
    difficulty
  };
};

// Karışık soru üretici
export const generateRandomQuestion = (
  operation: Operation,
  difficulty: Difficulty,
  questionType?: QuestionType
): Question => {
  const type = questionType || (['multiple', 'fill', 'matching'] as QuestionType[])[Math.floor(Math.random() * 3)];

  switch (type) {
    case 'multiple':
      return generateMultipleChoice(operation, difficulty);
    case 'fill':
      return generateFillInBlank(operation, difficulty);
    case 'matching':
      return generateMatching(operation, difficulty);
    default:
      return generateMultipleChoice(operation, difficulty);
  }
};

// Belirli sayıda soru üretici
export const generateQuestionSet = (
  operation: Operation,
  difficulty: Difficulty,
  count: number,
  includeTypes?: QuestionType[]
): Question[] => {
  const types = includeTypes || ['multiple', 'fill', 'matching'];
  const questions: Question[] = [];

  for (let i = 0; i < count; i++) {
    const questionType = types[i % types.length];
    questions.push(generateRandomQuestion(operation, difficulty, questionType));
  }

  // Karıştır
  return questions.sort(() => Math.random() - 0.5);
};

// Seviye bazlı test üretici
export const generateLevelTest = (
  operation: Operation,
  difficulty: Difficulty
): Question[] => {
  const questionCounts = {
    1: 10,  // 1 haneli: 10 soru
    2: 15,  // 2 haneli: 15 soru
    3: 20,  // 3 haneli: 20 soru
    4: 25   // 4 haneli: 25 soru
  };

  const count = questionCounts[difficulty];

  // Her tipten dengeli sorular
  const multipleCount = Math.floor(count * 0.4);  // %40 çoktan seçmeli
  const fillCount = Math.floor(count * 0.4);       // %40 boşluk doldurma
  const matchingCount = count - multipleCount - fillCount; // Kalan eşleştirme

  const questions: Question[] = [];

  for (let i = 0; i < multipleCount; i++) {
    questions.push(generateMultipleChoice(operation, difficulty));
  }

  for (let i = 0; i < fillCount; i++) {
    questions.push(generateFillInBlank(operation, difficulty));
  }

  for (let i = 0; i < matchingCount; i++) {
    questions.push(generateMatching(operation, difficulty, 3 + difficulty));
  }

  // Karıştır
  return questions.sort(() => Math.random() - 0.5);
};

// Süreye karşı yarış modu için hızlı soru üretici
export const generateSpeedQuestion = (
  difficulty: Difficulty,
  operation: Operation = 'karisik'
): { question: string; answer: number } => {
  const { answer, text } = generateOperation(operation, difficulty);
  return {
    question: `${text} = ?`,
    answer
  };
};

// Oyun modu için gelişmiş soru üretici
export const generateGameQuestion = (
  level: number, // 1-10 arası oyun seviyesi
  operation: Operation = 'karisik'
): { text: string; answer: number; options: number[] } => {
  // Seviyeye göre zorluk hesapla
  const difficulty: Difficulty = level <= 2 ? 1 : level <= 5 ? 2 : level <= 8 ? 3 : 4;

  const { answer, text } = generateOperation(operation, difficulty);
  const wrongOptions = generateWrongOptions(answer, 3);

  const options = [answer, ...wrongOptions].sort(() => Math.random() - 0.5);

  return { text: `${text} = ?`, answer, options };
};

// Zorluk açıklamaları
export const difficultyLabels: Record<Difficulty, { label: string; description: string; emoji: string }> = {
  1: { label: '1 Haneli', description: '1-9 arası sayılar', emoji: '🌱' },
  2: { label: '2 Haneli', description: '10-99 arası sayılar', emoji: '🌿' },
  3: { label: '3 Haneli', description: '100-999 arası sayılar', emoji: '🌳' },
  4: { label: '4 Haneli', description: '1000-9999 arası sayılar', emoji: '🏔️' }
};

// İşlem açıklamaları
export const operationLabels: Record<Operation, { label: string; emoji: string; color: string }> = {
  toplama: { label: 'Toplama', emoji: '➕', color: 'from-green-400 to-emerald-500' },
  cikarma: { label: 'Çıkarma', emoji: '➖', color: 'from-red-400 to-pink-500' },
  carpma: { label: 'Çarpma', emoji: '✖️', color: 'from-blue-400 to-indigo-500' },
  bolme: { label: 'Bölme', emoji: '➗', color: 'from-purple-400 to-violet-500' },
  karisik: { label: 'Karışık', emoji: '🎲', color: 'from-orange-400 to-amber-500' }
};
