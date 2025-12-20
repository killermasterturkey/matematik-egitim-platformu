import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Confetti } from '../../../components/ui/Confetti';
import { AnimatedCharacter, StarRating, AnimatedProgressBar } from '../../../components/ui/AnimatedCharacter';
import { showCelebration, showEncouragement } from '../../../components/ui/MessagePopup';

interface SpeedRaceProps {
  onBack: () => void;
}

interface Question {
  text: string;
  answer: number;
}

type Difficulty = 1 | 2 | 3 | 4;
type Operation = 'toplama' | 'cikarma' | 'carpma' | 'bolme' | 'karisik';
type TimeMode = 30 | 60 | 90 | 120;

const difficultyConfig: Record<Difficulty, { label: string; emoji: string; description: string }> = {
  1: { label: '1 Haneli', emoji: '🌱', description: '1-9 arası' },
  2: { label: '2 Haneli', emoji: '🌿', description: '10-99 arası' },
  3: { label: '3 Haneli', emoji: '🌳', description: '100-999 arası' },
  4: { label: '4 Haneli', emoji: '🏔️', description: '1000-9999 arası' }
};

const operationConfig: Record<Operation, { label: string; emoji: string; color: string }> = {
  toplama: { label: 'Toplama', emoji: '➕', color: 'from-green-400 to-emerald-500' },
  cikarma: { label: 'Çıkarma', emoji: '➖', color: 'from-red-400 to-pink-500' },
  carpma: { label: 'Çarpma', emoji: '✖️', color: 'from-blue-400 to-indigo-500' },
  bolme: { label: 'Bölme', emoji: '➗', color: 'from-purple-400 to-violet-500' },
  karisik: { label: 'Karışık', emoji: '🎲', color: 'from-orange-400 to-amber-500' }
};

const timeModeConfig: Record<TimeMode, { label: string; description: string }> = {
  30: { label: '30 Saniye', description: 'Sprint modu' },
  60: { label: '1 Dakika', description: 'Klasik mod' },
  90: { label: '1.5 Dakika', description: 'Uzun yarış' },
  120: { label: '2 Dakika', description: 'Maraton' }
};

export default function SpeedRace({ onBack }: SpeedRaceProps) {
  const [gameState, setGameState] = useState<'menu' | 'countdown' | 'playing' | 'finished'>('menu');
  const [difficulty, setDifficulty] = useState<Difficulty>(1);
  const [operation, setOperation] = useState<Operation>('karisik');
  const [timeMode, setTimeMode] = useState<TimeMode>(60);
  const [countdown, setCountdown] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showCorrect, setShowCorrect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [carPosition, setCarPosition] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  // Zorluk seviyesine göre sayı aralıkları
  const getDifficultyRange = (diff: Difficulty) => {
    switch (diff) {
      case 1: return { min: 1, max: 9 };
      case 2: return { min: 10, max: 99 };
      case 3: return { min: 100, max: 999 };
      case 4: return { min: 1000, max: 9999 };
      default: return { min: 1, max: 9 };
    }
  };

  const generateQuestion = useCallback((): Question => {
    const range = getDifficultyRange(difficulty);
    const operations: Operation[] = operation === 'karisik'
      ? ['toplama', 'cikarma', 'carpma', 'bolme']
      : [operation];

    const selectedOp = operations[Math.floor(Math.random() * operations.length)];

    let a: number, b: number, answer: number, text: string;

    switch (selectedOp) {
      case 'toplama':
        a = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        b = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        answer = a + b;
        text = `${a} + ${b}`;
        break;

      case 'cikarma':
        a = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        b = Math.floor(Math.random() * Math.min(a, range.max - range.min + 1)) + range.min;
        if (b > a) [a, b] = [b, a];
        answer = a - b;
        text = `${a} - ${b}`;
        break;

      case 'carpma':
        // Çarpma için daha küçük sayılar (sonuç çok büyük olmasın)
        const carpmaMax = difficulty === 1 ? 9 : difficulty === 2 ? 20 : difficulty === 3 ? 50 : 100;
        a = Math.floor(Math.random() * carpmaMax) + 2;
        b = Math.floor(Math.random() * Math.min(12, carpmaMax)) + 2;
        answer = a * b;
        text = `${a} × ${b}`;
        break;

      case 'bolme':
        // Tam bölünebilen sayılar
        const bolmeMax = difficulty === 1 ? 10 : difficulty === 2 ? 15 : difficulty === 3 ? 25 : 50;
        b = Math.floor(Math.random() * bolmeMax) + 2;
        answer = Math.floor(Math.random() * bolmeMax) + 2;
        a = b * answer;
        text = `${a} ÷ ${b}`;
        break;

      default:
        a = 1; b = 1;
        answer = 2;
        text = '1 + 1';
    }

    return { text, answer };
  }, [difficulty, operation]);

  const startGame = () => {
    setGameState('countdown');
    setCountdown(3);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setCarPosition(0);
    setQuestionCount(0);
    setCorrectCount(0);
    setTimeLeft(timeMode);
  };

  // Countdown
  useEffect(() => {
    if (gameState === 'countdown' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'countdown' && countdown === 0) {
      setGameState('playing');
      setQuestion(generateQuestion());
    }
  }, [gameState, countdown, generateQuestion]);

  // Game timer
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'playing' && timeLeft === 0) {
      setGameState('finished');
    }
  }, [gameState, timeLeft]);

  // Focus input
  useEffect(() => {
    if (gameState === 'playing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameState, question]);

  const checkAnswer = () => {
    if (!question || !userAnswer) return;

    const isCorrect = parseInt(userAnswer) === question.answer;
    setQuestionCount(prev => prev + 1);

    if (isCorrect) {
      // Puan hesaplama: zorluk + seri bonus
      const basePoints = 10 * difficulty;
      const streakBonus = streak * 2;
      const timeBonus = Math.floor(timeLeft / 10);
      const points = basePoints + streakBonus + timeBonus;

      setScore(prev => prev + points);
      setStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > bestStreak) setBestStreak(newStreak);
        return newStreak;
      });
      setCorrectCount(prev => prev + 1);
      setCarPosition(prev => Math.min(prev + 3, 100));
      setShowCorrect(true);
      showCelebration();
      setTimeout(() => setShowCorrect(false), 300);
    } else {
      setStreak(0);
      setShowWrong(true);
      showEncouragement();
      setTimeout(() => setShowWrong(false), 300);
    }

    setUserAnswer('');
    setQuestion(generateQuestion());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  const calculateStars = () => {
    const expectedScore = timeMode * difficulty * 2;
    const ratio = score / expectedScore;

    if (ratio >= 1.5) return 5;
    if (ratio >= 1.2) return 4;
    if (ratio >= 0.8) return 3;
    if (ratio >= 0.5) return 2;
    return 1;
  };

  // Menü ekranı
  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 p-4">
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
            className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-200"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-8xl mb-4"
              >
                🏎️
              </motion.div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                Hız Yarışı
              </h1>
              <p className="text-lg text-gray-600 font-semibold">
                Zamana karşı yarış, en yüksek puanı topla!
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
                        ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white border-orange-600 shadow-lg'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-orange-300'
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
            <div className="mb-6">
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

            {/* Süre Seçimi */}
            <div className="mb-8">
              <h3 className="text-lg font-black text-gray-700 mb-3 text-center">Yarış Süresi</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {([30, 60, 90, 120] as TimeMode[]).map((time) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setTimeMode(time)}
                    className={`p-3 rounded-xl font-bold transition-all border-3 ${
                      timeMode === time
                        ? 'bg-gradient-to-br from-blue-400 to-indigo-500 text-white border-blue-600 shadow-lg'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-lg font-black">⏱️ {timeModeConfig[time].label}</div>
                    <div className="text-xs opacity-75">{timeModeConfig[time].description}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Oyun Bilgisi */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 mb-6">
              <h4 className="font-black text-orange-800 mb-2">Nasıl Oynanır?</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Ekranda matematik soruları görünür</li>
                <li>• Doğru cevabı yaz ve Enter'a bas</li>
                <li>• Ne kadar hızlı çözersen o kadar çok puan!</li>
                <li>• Seri yaparsan bonus puan kazanırsın</li>
                <li>• Zorlu seviyeler daha çok puan verir</li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="w-full py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-2xl shadow-lg"
            >
              🚀 Yarışı Başlat!
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Countdown ekranı
  if (gameState === 'countdown') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <motion.div
          key={countdown}
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="text-center"
        >
          <div className="text-9xl font-black text-white drop-shadow-2xl mb-4">
            {countdown === 0 ? '🚀' : countdown}
          </div>
          <p className="text-2xl font-bold text-gray-400">
            {countdown === 0 ? 'BAŞLA!' : 'Hazır ol!'}
          </p>
        </motion.div>
      </div>
    );
  }

  // Oyun bitti ekranı
  if (gameState === 'finished') {
    const stars = calculateStars();
    const accuracy = questionCount > 0 ? Math.round((correctCount / questionCount) * 100) : 0;
    const avgTime = correctCount > 0 ? Math.round((timeMode - timeLeft) / correctCount * 10) / 10 : 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 flex items-center justify-center p-4">
        <Confetti trigger={true} type="fireworks" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border-4 border-orange-200"
        >
          <AnimatedCharacter type={score >= 500 ? 'celebrating' : 'happy'} size="lg" />

          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mt-6 mb-4">
            Yarış Bitti! 🏁
          </h2>

          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 mb-6">
            <p className="text-6xl font-black text-orange-600 mb-2">{score}</p>
            <p className="text-lg font-bold text-gray-600">Toplam Puan</p>
          </div>

          <div className="flex justify-center mb-4">
            <StarRating rating={stars} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-center">
            <div className="bg-blue-100 rounded-xl p-3">
              <p className="text-2xl font-black text-blue-600">{correctCount}</p>
              <p className="text-xs font-bold text-gray-500">Doğru</p>
            </div>
            <div className="bg-green-100 rounded-xl p-3">
              <p className="text-2xl font-black text-green-600">{bestStreak}</p>
              <p className="text-xs font-bold text-gray-500">En İyi Seri</p>
            </div>
            <div className="bg-purple-100 rounded-xl p-3">
              <p className="text-2xl font-black text-purple-600">%{accuracy}</p>
              <p className="text-xs font-bold text-gray-500">Doğruluk</p>
            </div>
            <div className="bg-orange-100 rounded-xl p-3">
              <p className="text-2xl font-black text-orange-600">{avgTime}s</p>
              <p className="text-xs font-bold text-gray-500">Ort. Süre</p>
            </div>
          </div>

          {/* Seçilen mod bilgisi */}
          <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
            <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${operationConfig[operation].color} text-white`}>
              {operationConfig[operation].emoji} {operationConfig[operation].label}
            </span>
            <span className="text-sm font-bold px-3 py-1 rounded-full bg-gray-200 text-gray-700">
              {difficultyConfig[difficulty].emoji} {difficultyConfig[difficulty].label}
            </span>
            <span className="text-sm font-bold px-3 py-1 rounded-full bg-blue-200 text-blue-700">
              ⏱️ {timeModeConfig[timeMode].label}
            </span>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-lg shadow-lg"
            >
              🔄 Tekrar
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
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 relative overflow-hidden">
      {/* Yol */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gray-700">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-yellow-400" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #fbbf24 0, #fbbf24 30px, transparent 30px, transparent 60px)' }} />
      </div>

      {/* Araba */}
      <motion.div
        className="absolute bottom-32 text-6xl"
        animate={{ left: `${Math.min(carPosition, 90)}%` }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        🏎️
      </motion.div>

      {/* Bitiş çizgisi */}
      <div className="absolute bottom-0 right-8 h-48 w-8 bg-black flex flex-col">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-white' : 'bg-black'}`} />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setGameState('finished')}
            className="px-4 py-2 bg-white/80 backdrop-blur rounded-xl font-bold text-gray-700 shadow-lg"
          >
            ❌ Bitir
          </motion.button>

          <div className="flex items-center gap-3 flex-wrap">
            <motion.div
              animate={{ scale: timeLeft <= 10 ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.5, repeat: timeLeft <= 10 ? Infinity : 0 }}
              className={`bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg ${timeLeft <= 10 ? 'border-4 border-red-500' : ''}`}
            >
              <p className="text-xs font-bold text-gray-500">Süre</p>
              <p className={`text-2xl font-black ${timeLeft <= 10 ? 'text-red-600' : 'text-blue-600'}`}>{timeLeft}s</p>
            </motion.div>

            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-gray-500">Puan</p>
              <p className="text-2xl font-black text-orange-600">{score}</p>
            </div>

            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-gray-500">Doğru</p>
              <p className="text-2xl font-black text-green-600">{correctCount}</p>
            </div>

            {streak > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-xl shadow-lg"
              >
                <p className="text-white font-black text-xl">🔥 {streak}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-4">
        <AnimatedProgressBar progress={carPosition} color="rainbow" />
      </div>

      {/* Soru */}
      <div className="relative z-10 flex items-center justify-center mt-10 md:mt-20 px-4">
        <motion.div
          key={question?.text}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`bg-white/95 backdrop-blur rounded-3xl px-8 md:px-16 py-8 md:py-10 shadow-2xl border-4 ${
            showCorrect ? 'border-green-500 bg-green-50' : showWrong ? 'border-red-500 bg-red-50' : 'border-white'
          }`}
        >
          {/* Mod bilgisi */}
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${operationConfig[operation].color} text-white`}>
              {operationConfig[operation].emoji} {operationConfig[operation].label}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-200 text-gray-700">
              {difficultyConfig[difficulty].emoji} {difficultyConfig[difficulty].label}
            </span>
          </div>

          <p className="text-4xl md:text-5xl font-black text-gray-800 mb-6 text-center">{question?.text} = ?</p>

          <input
            ref={inputRef}
            type="number"
            value={userAnswer}
            onChange={e => setUserAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full text-center text-3xl md:text-4xl font-black px-6 py-4 border-4 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-500"
            placeholder="?"
            autoFocus
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={checkAnswer}
            className="w-full mt-4 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-black text-xl shadow-lg"
          >
            Cevapla! ⚡
          </motion.button>
        </motion.div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {showCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
          >
            <span className="text-9xl">✅</span>
          </motion.div>
        )}
        {showWrong && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
          >
            <span className="text-9xl">❌</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
