import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Confetti } from '../../../components/ui/Confetti';
import { AnimatedCharacter, AnimatedHearts, StarRating } from '../../../components/ui/AnimatedCharacter';
import { showCelebration, showEncouragement, showStreak } from '../../../components/ui/MessagePopup';

interface BalloonGameProps {
  onBack: () => void;
}

interface Balloon {
  id: number;
  value: number;
  x: number;
  color: string;
  popped: boolean;
  size: 'small' | 'medium' | 'large';
}

interface Question {
  text: string;
  answer: number;
  options: number[];
}

type Difficulty = 1 | 2 | 3 | 4;
type Operation = 'toplama' | 'cikarma' | 'carpma' | 'bolme' | 'karisik';

const BALLOON_COLORS = [
  'from-red-400 to-red-600',
  'from-blue-400 to-blue-600',
  'from-green-400 to-green-600',
  'from-yellow-400 to-yellow-600',
  'from-purple-400 to-purple-600',
  'from-pink-400 to-pink-600',
  'from-orange-400 to-orange-600',
  'from-cyan-400 to-cyan-600',
  'from-indigo-400 to-indigo-600',
  'from-teal-400 to-teal-600'
];

const difficultyConfig: Record<Difficulty, { label: string; emoji: string; description: string }> = {
  1: { label: '1 Haneli', emoji: '🌱', description: '1-9 arası sayılar' },
  2: { label: '2 Haneli', emoji: '🌿', description: '10-99 arası sayılar' },
  3: { label: '3 Haneli', emoji: '🌳', description: '100-999 arası sayılar' },
  4: { label: '4 Haneli', emoji: '🏔️', description: '1000-9999 arası sayılar' }
};

const operationConfig: Record<Operation, { label: string; emoji: string; color: string }> = {
  toplama: { label: 'Toplama', emoji: '➕', color: 'from-green-400 to-emerald-500' },
  cikarma: { label: 'Çıkarma', emoji: '➖', color: 'from-red-400 to-pink-500' },
  carpma: { label: 'Çarpma', emoji: '✖️', color: 'from-blue-400 to-indigo-500' },
  bolme: { label: 'Bölme', emoji: '➗', color: 'from-purple-400 to-violet-500' },
  karisik: { label: 'Karışık', emoji: '🎲', color: 'from-orange-400 to-amber-500' }
};

export default function BalloonGame({ onBack }: BalloonGameProps) {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'finished'>('menu');
  const [difficulty, setDifficulty] = useState<Difficulty>(1);
  const [operation, setOperation] = useState<Operation>('karisik');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [level, setLevel] = useState(1);
  const [question, setQuestion] = useState<Question | null>(null);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [streak, setStreak] = useState(0);
  const [message, setMessage] = useState<string>('');
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Zorluk seviyesine göre sayı aralıkları
  const getDifficultyRange = (diff: Difficulty, lvl: number) => {
    const levelBonus = Math.min(lvl - 1, 5) * 2;
    switch (diff) {
      case 1: return { min: 1, max: 9 + levelBonus };
      case 2: return { min: 10, max: 50 + levelBonus * 5 };
      case 3: return { min: 100, max: 500 + levelBonus * 50 };
      case 4: return { min: 1000, max: 5000 + levelBonus * 500 };
      default: return { min: 1, max: 9 };
    }
  };

  const generateQuestion = useCallback((diff: Difficulty, op: Operation, lvl: number): Question => {
    const range = getDifficultyRange(diff, lvl);
    const operations: Operation[] = op === 'karisik'
      ? ['toplama', 'cikarma', 'carpma', 'bolme']
      : [op];

    const selectedOp = operations[Math.floor(Math.random() * operations.length)];

    let a: number, b: number, answer: number, text: string;

    switch (selectedOp) {
      case 'toplama':
        a = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        b = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        answer = a + b;
        text = `${a} + ${b} = ?`;
        break;

      case 'cikarma':
        a = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        b = Math.floor(Math.random() * Math.min(a, range.max - range.min + 1)) + range.min;
        if (b > a) [a, b] = [b, a];
        answer = a - b;
        text = `${a} - ${b} = ?`;
        break;

      case 'carpma':
        // Çarpma için daha küçük sayılar
        const carpmaMax = diff === 1 ? 9 : diff === 2 ? 15 + lvl : diff === 3 ? 30 + lvl * 2 : 50 + lvl * 3;
        a = Math.floor(Math.random() * carpmaMax) + 2;
        b = Math.floor(Math.random() * Math.min(12 + lvl, carpmaMax)) + 2;
        answer = a * b;
        text = `${a} × ${b} = ?`;
        break;

      case 'bolme':
        // Tam bölünebilen sayılar
        const bolmeMax = diff === 1 ? 10 : diff === 2 ? 12 + lvl : diff === 3 ? 20 + lvl : 30 + lvl * 2;
        b = Math.floor(Math.random() * bolmeMax) + 2;
        answer = Math.floor(Math.random() * bolmeMax) + 2;
        a = b * answer;
        text = `${a} ÷ ${b} = ?`;
        break;

      default:
        a = 1; b = 1; answer = 2;
        text = '1 + 1 = ?';
    }

    // Yanlış seçenekler üret
    const options = new Set<number>([answer]);
    while (options.size < 4) {
      const offset = Math.floor(Math.random() * Math.max(20, Math.abs(answer * 0.3))) - 10;
      const wrongAnswer = Math.max(0, answer + offset);
      if (wrongAnswer !== answer && wrongAnswer >= 0) {
        options.add(wrongAnswer);
      }
    }

    return {
      text,
      answer,
      options: Array.from(options).sort(() => Math.random() - 0.5)
    };
  }, []);

  const spawnBalloons = useCallback((q: Question) => {
    const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large', 'medium'];
    const newBalloons = q.options.map((value, i) => ({
      id: Date.now() + i,
      value,
      x: 8 + i * 23,
      color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
      popped: false,
      size: sizes[i]
    }));
    setBalloons(newBalloons);
  }, []);

  const startNewRound = useCallback(() => {
    const q = generateQuestion(difficulty, operation, level);
    setQuestion(q);
    spawnBalloons(q);
    setMessage('');
  }, [difficulty, operation, level, generateQuestion, spawnBalloons]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLives(5);
    setLevel(1);
    setStreak(0);
    setQuestionsAnswered(0);
    setCorrectAnswers(0);
    startNewRound();
  };

  useEffect(() => {
    if (gameState === 'playing' && lives > 0) {
      // Yeni tur başlat
    }
  }, [level, gameState, lives]);

  const popBalloon = (balloon: Balloon) => {
    if (balloon.popped || !question) return;

    setBalloons(prev => prev.map(b =>
      b.id === balloon.id ? { ...b, popped: true } : b
    ));

    setQuestionsAnswered(prev => prev + 1);

    if (balloon.value === question.answer) {
      // Doğru cevap
      const basePoints = 10 * difficulty;
      const levelBonus = level * 5;
      const streakBonus = streak * 3;
      const points = basePoints + levelBonus + streakBonus;

      setScore(prev => prev + points);
      setCorrectAnswers(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);

      if (newStreak >= 3) {
        showStreak(newStreak);
      } else {
        showCelebration();
      }

      setMessage(`+${points} Puan! 🎉`);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);

      // Her 5 doğru cevapta seviye atla
      if (correctAnswers > 0 && (correctAnswers + 1) % 5 === 0) {
        setLevel(prev => prev + 1);
        showCelebration('Seviye Atladın!');
        setMessage('Seviye Atladın! 🚀');
      }

      setTimeout(startNewRound, 1500);
    } else {
      // Yanlış cevap
      setLives(prev => prev - 1);
      setStreak(0);
      showEncouragement();
      setMessage(`Doğru cevap: ${question.answer}`);

      if (lives <= 1) {
        setTimeout(() => setGameState('finished'), 1500);
      } else {
        setTimeout(startNewRound, 2000);
      }
    }
  };

  // Menü ekranı
  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500 p-4">
        <div className="max-w-4xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onBack}
            className="mb-6 px-6 py-3 bg-white/80 backdrop-blur rounded-xl font-bold text-gray-700 shadow-lg"
          >
            ← Geri
          </motion.button>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-blue-200"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-4"
              >
                🎈
              </motion.div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                Balon Patlatma
              </h1>
              <p className="text-lg text-gray-600 font-semibold">
                Doğru cevabı taşıyan balonu patlat!
              </p>
            </div>

            {/* Zorluk Seçimi */}
            <div className="mb-6">
              <h3 className="text-lg font-black text-gray-700 mb-3 text-center">Zorluk Seviyesi</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {([1, 2, 3, 4] as Difficulty[]).map((diff) => (
                  <motion.button
                    key={diff}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDifficulty(diff)}
                    className={`p-4 rounded-2xl font-bold transition-all border-4 ${
                      difficulty === diff
                        ? 'bg-gradient-to-br from-blue-400 to-purple-500 text-white border-blue-600 shadow-lg'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-3xl mb-1">{difficultyConfig[diff].emoji}</div>
                    <div className="text-sm font-black">{difficultyConfig[diff].label}</div>
                    <div className="text-xs opacity-75">{difficultyConfig[diff].description}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* İşlem Seçimi */}
            <div className="mb-8">
              <h3 className="text-lg font-black text-gray-700 mb-3 text-center">İşlem Türü</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {(['toplama', 'cikarma', 'carpma', 'bolme', 'karisik'] as Operation[]).map((op) => (
                  <motion.button
                    key={op}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOperation(op)}
                    className={`p-3 rounded-xl font-bold transition-all border-3 ${
                      operation === op
                        ? `bg-gradient-to-br ${operationConfig[op].color} text-white border-white shadow-lg`
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{operationConfig[op].emoji}</div>
                    <div className="text-xs font-black">{operationConfig[op].label}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Oyun Bilgisi */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 mb-6">
              <h4 className="font-black text-orange-800 mb-2">Nasıl Oynanır?</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Ekranda bir matematik sorusu ve 4 balon görünür</li>
                <li>• Doğru cevabı taşıyan balonu tıkla</li>
                <li>• Her 5 doğru cevapta seviye atlarsın</li>
                <li>• Seviye arttıkça sorular zorlaşır</li>
                <li>• 5 canın var, dikkatli ol!</li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="w-full py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-2xl shadow-lg"
            >
              🚀 Oyunu Başlat!
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Oyun bitti ekranı
  if (gameState === 'finished') {
    const accuracy = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;
    const stars = score >= 500 ? 5 : score >= 350 ? 4 : score >= 200 ? 3 : score >= 100 ? 2 : 1;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 flex items-center justify-center p-4">
        <Confetti trigger={true} type="emoji" emoji={['🎈', '🎉', '⭐']} />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border-4 border-purple-200"
        >
          <AnimatedCharacter type={score >= 200 ? 'celebrating' : 'happy'} size="lg" />

          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-6 mb-4">
            Oyun Bitti!
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-4">
              <p className="text-4xl font-black text-orange-600">{score}</p>
              <p className="text-sm font-bold text-gray-600">Puan</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-4">
              <p className="text-4xl font-black text-indigo-600">{level}</p>
              <p className="text-sm font-bold text-gray-600">Seviye</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4">
              <p className="text-4xl font-black text-emerald-600">{correctAnswers}</p>
              <p className="text-sm font-bold text-gray-600">Doğru</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4">
              <p className="text-4xl font-black text-purple-600">%{accuracy}</p>
              <p className="text-sm font-bold text-gray-600">Doğruluk</p>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <StarRating rating={stars} />
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-lg shadow-lg"
            >
              🔄 Tekrar Oyna
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setGameState('menu')}
              className="px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl font-black text-lg shadow-lg"
            >
              ⚙️
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="px-6 py-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-2xl font-black text-lg shadow-lg"
            >
              ←
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Oyun ekranı
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500 relative overflow-hidden">
      <Confetti trigger={showConfetti} type="stars" />

      {/* Bulutlar */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              width: 100 + i * 30,
              height: 50 + i * 15,
              left: `${i * 18}%`,
              top: `${10 + (i % 3) * 20}%`
            }}
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="px-4 py-2 bg-white/80 backdrop-blur rounded-xl font-bold text-gray-700 shadow-lg"
          >
            ← Geri
          </motion.button>

          <div className="flex items-center gap-4">
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg text-center">
              <p className="text-xs font-bold text-gray-500">Zorluk</p>
              <p className="text-lg font-black text-purple-600">{difficultyConfig[difficulty].emoji}</p>
            </div>

            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg text-center">
              <p className="text-xs font-bold text-gray-500">Seviye</p>
              <p className="text-xl font-black text-indigo-600">{level}</p>
            </div>

            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg text-center">
              <p className="text-xs font-bold text-gray-500">Puan</p>
              <p className="text-xl font-black text-orange-600">{score}</p>
            </div>

            <AnimatedHearts count={lives} />

            {streak > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-xl shadow-lg"
              >
                <p className="text-white font-black">🔥 {streak}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Soru */}
      <div className="relative z-10 text-center py-6">
        <motion.div
          key={question?.text}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/90 backdrop-blur rounded-3xl px-8 md:px-12 py-6 inline-block shadow-2xl border-4 border-white"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${operationConfig[operation].color} text-white`}>
              {operationConfig[operation].emoji} {operationConfig[operation].label}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-200 text-gray-700">
              {difficultyConfig[difficulty].emoji} {difficultyConfig[difficulty].label}
            </span>
          </div>
          <p className="text-3xl md:text-4xl font-black text-gray-800">{question?.text}</p>
        </motion.div>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-2xl font-black text-white drop-shadow-lg"
          >
            {message}
          </motion.p>
        )}
      </div>

      {/* Balonlar */}
      <div className="relative z-10 h-80 md:h-96">
        <AnimatePresence>
          {balloons.filter(b => !b.popped).map(balloon => {
            const sizeClasses = {
              small: 'w-20 h-28 text-xl',
              medium: 'w-24 h-32 text-2xl',
              large: 'w-28 h-36 text-3xl'
            };

            return (
              <motion.div
                key={balloon.id}
                initial={{ y: 400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                style={{ left: `${balloon.x}%` }}
                className="absolute"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2 + Math.random(), repeat: Infinity }}
                  onClick={() => popBalloon(balloon)}
                  className="cursor-pointer group"
                >
                  {/* İp */}
                  <div className="absolute left-1/2 top-full w-0.5 h-16 bg-gray-400 transform -translate-x-1/2" />

                  {/* Balon */}
                  <div className={`${sizeClasses[balloon.size]} bg-gradient-to-b ${balloon.color} rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform relative`}>
                    {/* Parlaklık */}
                    <div className="absolute top-3 left-3 w-5 h-5 bg-white/40 rounded-full" />

                    <span className="font-black text-white drop-shadow-lg">
                      {balloon.value}
                    </span>
                  </div>

                  {/* Düğüm */}
                  <div className={`absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-b ${balloon.color} rotate-45`} />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Zemin */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-600 to-green-400" />
    </div>
  );
}
