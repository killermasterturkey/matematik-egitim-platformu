import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Confetti } from '../../../components/ui/Confetti';
import { AnimatedCharacter, StarRating } from '../../../components/ui/AnimatedCharacter';
import { showCelebration, showEncouragement } from '../../../components/ui/MessagePopup';

interface MemoryGameProps {
  onBack: () => void;
  initialDifficulty?: 1 | 2 | 3 | 4;
}

interface Card {
  id: number;
  type: 'operation' | 'result';
  value: string;
  matchId: number;
  flipped: boolean;
  matched: boolean;
}

type Difficulty = 1 | 2 | 3 | 4;
type Operation = 'toplama' | 'cikarma' | 'carpma' | 'bolme' | 'karisik';
type CardCount = 8 | 12 | 16 | 20;

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

const cardCountConfig: Record<CardCount, { label: string; pairs: number; grid: string }> = {
  8: { label: '8 Kart', pairs: 4, grid: 'grid-cols-4' },
  12: { label: '12 Kart', pairs: 6, grid: 'grid-cols-4' },
  16: { label: '16 Kart', pairs: 8, grid: 'grid-cols-4' },
  20: { label: '20 Kart', pairs: 10, grid: 'grid-cols-5' }
};

export default function MemoryGame({ onBack, initialDifficulty = 1 }: MemoryGameProps) {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'finished'>('menu');
  const [difficulty, setDifficulty] = useState<Difficulty>(initialDifficulty);
  const [operation, setOperation] = useState<Operation>('karisik');
  const [cardCount, setCardCount] = useState<CardCount>(12);
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  // Zorluk seviyesine göre sayı aralıkları
  const getDifficultyRange = (diff: Difficulty) => {
    switch (diff) {
      case 1: return { min: 1, max: 9 };
      case 2: return { min: 10, max: 50 };
      case 3: return { min: 100, max: 500 };
      case 4: return { min: 1000, max: 5000 };
      default: return { min: 1, max: 9 };
    }
  };

  const generatePairs = useCallback((diff: Difficulty, op: Operation, numPairs: number) => {
    const range = getDifficultyRange(diff);
    const pairs: { operation: string; result: string }[] = [];
    const usedResults = new Set<number>();

    for (let i = 0; i < numPairs; i++) {
      const operations: Operation[] = op === 'karisik'
        ? ['toplama', 'cikarma', 'carpma', 'bolme']
        : [op];

      const selectedOp = operations[Math.floor(Math.random() * operations.length)];

      let a: number, b: number, result: number, operationStr: string;
      let attempts = 0;

      do {
        switch (selectedOp) {
          case 'toplama':
            a = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
            b = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
            result = a + b;
            operationStr = `${a} + ${b}`;
            break;

          case 'cikarma':
            a = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
            b = Math.floor(Math.random() * Math.min(a, range.max - range.min + 1)) + range.min;
            if (b > a) [a, b] = [b, a];
            result = a - b;
            operationStr = `${a} - ${b}`;
            break;

          case 'carpma':
            const carpmaMax = diff === 1 ? 9 : diff === 2 ? 15 : diff === 3 ? 25 : 40;
            a = Math.floor(Math.random() * carpmaMax) + 2;
            b = Math.floor(Math.random() * Math.min(12, carpmaMax)) + 2;
            result = a * b;
            operationStr = `${a} × ${b}`;
            break;

          case 'bolme':
            const bolmeMax = diff === 1 ? 10 : diff === 2 ? 12 : diff === 3 ? 15 : 20;
            b = Math.floor(Math.random() * bolmeMax) + 2;
            result = Math.floor(Math.random() * bolmeMax) + 2;
            a = b * result;
            operationStr = `${a} ÷ ${b}`;
            break;

          default:
            a = 1; b = 1;
            result = 2;
            operationStr = '1 + 1';
        }
        attempts++;
      } while (usedResults.has(result) && attempts < 50);

      usedResults.add(result);
      pairs.push({ operation: operationStr, result: result.toString() });
    }

    return pairs;
  }, []);

  const initializeGame = useCallback(() => {
    const numPairs = cardCountConfig[cardCount].pairs;
    const pairs = generatePairs(difficulty, operation, numPairs);
    const cardPairs: Card[] = [];

    pairs.forEach((pair, index) => {
      cardPairs.push({
        id: index * 2,
        type: 'operation',
        value: pair.operation,
        matchId: index,
        flipped: false,
        matched: false
      });
      cardPairs.push({
        id: index * 2 + 1,
        type: 'result',
        value: pair.result,
        matchId: index,
        flipped: false,
        matched: false
      });
    });

    // Karıştır
    const shuffled = cardPairs.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
    setGameComplete(false);
    setTimer(0);
    setIsPlaying(true);
    setGameState('playing');
  }, [difficulty, operation, cardCount, generatePairs]);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !gameComplete) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, gameComplete]);

  const handleCardClick = (cardId: number) => {
    const card = cards.find(c => c.id === cardId);
    if (!card || card.flipped || card.matched || flippedCards.length >= 2) return;

    // Kartı çevir
    setCards(prev => prev.map(c =>
      c.id === cardId ? { ...c, flipped: true } : c
    ));

    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(prev => prev + 1);

      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find(c => c.id === firstId)!;
      const secondCard = cards.find(c => c.id === secondId)!;

      if (firstCard.matchId === secondCard.matchId) {
        // Eşleşme bulundu!
        showCelebration();
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 1000);

        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.matchId === firstCard.matchId ? { ...c, matched: true } : c
          ));
          setMatches(prev => {
            const newMatches = prev + 1;
            const totalPairs = cards.length / 2;

            if (newMatches === totalPairs) {
              setGameComplete(true);
              setIsPlaying(false);
              setGameState('finished');
              showCelebration('Tebrikler!');
            }
            return newMatches;
          });
          setFlippedCards([]);
        }, 500);
      } else {
        // Eşleşme yok
        showEncouragement();

        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.id === firstId || c.id === secondId ? { ...c, flipped: false } : c
          ));
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateStars = () => {
    const totalPairs = cards.length / 2;
    const optimalMoves = totalPairs;
    const ratio = optimalMoves / moves;

    if (ratio >= 0.8) return 5;
    if (ratio >= 0.6) return 4;
    if (ratio >= 0.4) return 3;
    if (ratio >= 0.25) return 2;
    return 1;
  };

  // Menü ekranı
  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
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
            className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-200"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotateY: [0, 180, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-4"
              >
                🃏
              </motion.div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                Hafıza Oyunu
              </h1>
              <p className="text-lg text-gray-600 font-semibold">
                İşlemleri sonuçlarıyla eşleştir!
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
                        ? 'bg-gradient-to-br from-purple-400 to-pink-500 text-white border-purple-600 shadow-lg'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-purple-300'
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

            {/* Kart Sayısı Seçimi */}
            <div className="mb-8">
              <h3 className="text-lg font-black text-gray-700 mb-3 text-center">Kart Sayısı</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {([8, 12, 16, 20] as CardCount[]).map((count) => (
                  <motion.button
                    key={count}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCardCount(count)}
                    className={`p-3 rounded-xl font-bold transition-all border-3 ${
                      cardCount === count
                        ? 'bg-gradient-to-br from-indigo-400 to-purple-500 text-white border-indigo-600 shadow-lg'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="text-lg font-black">🃏 {cardCountConfig[count].label}</div>
                    <div className="text-xs opacity-75">{cardCountConfig[count].pairs} çift</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Oyun Bilgisi */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mb-6">
              <h4 className="font-black text-purple-800 mb-2">Nasıl Oynanır?</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Kartlara tıklayarak çevir</li>
                <li>• İşlemi sonucu ile eşleştir</li>
                <li>• Az hamle ile bitirmeye çalış</li>
                <li>• Tüm çiftleri bul ve kazan!</li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={initializeGame}
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
    const stars = calculateStars();

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
        <Confetti trigger={true} type="celebration" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border-4 border-purple-200"
        >
          <AnimatedCharacter type="celebrating" size="lg" />

          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-6 mb-4">
            Tebrikler! 🎉
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-4">
              <p className="text-sm font-bold text-gray-500">Süre</p>
              <p className="text-3xl font-black text-indigo-600">{formatTime(timer)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4">
              <p className="text-sm font-bold text-gray-500">Hamle</p>
              <p className="text-3xl font-black text-emerald-600">{moves}</p>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <StarRating rating={stars} />
          </div>

          {/* Seçilen mod bilgisi */}
          <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
            <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${operationConfig[operation].color} text-white`}>
              {operationConfig[operation].emoji} {operationConfig[operation].label}
            </span>
            <span className="text-sm font-bold px-3 py-1 rounded-full bg-gray-200 text-gray-700">
              {difficultyConfig[difficulty].emoji} {difficultyConfig[difficulty].label}
            </span>
            <span className="text-sm font-bold px-3 py-1 rounded-full bg-indigo-200 text-indigo-700">
              🃏 {cardCountConfig[cardCount].label}
            </span>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={initializeGame}
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
  const gridClass = cardCountConfig[cardCount].grid;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 p-4">
      <Confetti trigger={showConfetti} type="stars" />

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="px-4 py-2 bg-white/80 backdrop-blur rounded-xl font-bold text-gray-700 shadow-lg"
          >
            ← Geri
          </motion.button>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-gray-500">Zorluk</p>
              <p className="text-lg font-black text-purple-600">{difficultyConfig[difficulty].emoji}</p>
            </div>
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-gray-500">Eşleşme</p>
              <p className="text-lg font-black text-green-600">{matches}/{cards.length / 2}</p>
            </div>
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-gray-500">Hamle</p>
              <p className="text-lg font-black text-orange-600">{moves}</p>
            </div>
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-gray-500">Süre</p>
              <p className="text-lg font-black text-blue-600">{formatTime(timer)}</p>
            </div>
          </div>
        </div>

        {/* Mod bilgisi */}
        <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
          <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${operationConfig[operation].color} text-white`}>
            {operationConfig[operation].emoji} {operationConfig[operation].label}
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/80 text-gray-700">
            {difficultyConfig[difficulty].label}
          </span>
        </div>
      </div>

      {/* Oyun Tahtası */}
      <div className="max-w-4xl mx-auto">
        <div className={`grid ${gridClass} gap-2 md:gap-3`}>
          <AnimatePresence>
            {cards.map(card => (
              <motion.div
                key={card.id}
                initial={{ scale: 0, rotateY: 180 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 200 }}
                onClick={() => handleCardClick(card.id)}
                className="perspective-1000"
              >
                <motion.div
                  animate={{ rotateY: card.flipped || card.matched ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full aspect-square cursor-pointer preserve-3d"
                >
                  {/* Kart Arkası */}
                  <div className={`absolute inset-0 backface-hidden rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center ${
                    card.matched ? 'bg-green-400' : 'bg-gradient-to-br from-blue-500 to-purple-600'
                  }`}>
                    <span className="text-3xl md:text-4xl">🃏</span>
                  </div>

                  {/* Kart Önü */}
                  <div className={`absolute inset-0 backface-hidden rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center rotate-y-180 p-1 ${
                    card.matched
                      ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                      : card.type === 'operation'
                        ? 'bg-gradient-to-br from-yellow-100 to-orange-100'
                        : 'bg-gradient-to-br from-blue-100 to-indigo-100'
                  }`}>
                    <span className={`font-black text-center ${
                      card.type === 'operation'
                        ? 'text-xs md:text-sm text-orange-700'
                        : 'text-lg md:text-2xl text-indigo-700'
                    }`}>
                      {card.value}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* CSS for 3D transforms */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}
