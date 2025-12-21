import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Confetti } from '../../../components/ui/Confetti';
import { AnimatedCharacter, StarRating, AnimatedHearts } from '../../../components/ui/AnimatedCharacter';
import { showCelebration, showEncouragement } from '../../../components/ui/MessagePopup';

interface MathMazeProps {
  onBack: () => void;
  initialDifficulty?: 1 | 2 | 3 | 4;
}

interface Cell {
  x: number;
  y: number;
  type: 'path' | 'wall' | 'start' | 'end' | 'question' | 'bonus';
  question?: { text: string; answer: number };
  visited: boolean;
  bonus?: number;
}

interface Position {
  x: number;
  y: number;
}

export default function MathMaze({ onBack, initialDifficulty = 1 }: MathMazeProps) {
  const [maze, setMaze] = useState<Cell[][]>([]);
  const [playerPos, setPlayerPos] = useState<Position>({ x: 0, y: 0 });
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameState, setGameState] = useState<'playing' | 'question' | 'won' | 'lost'>('playing');
  const [currentQuestion, setCurrentQuestion] = useState<{ text: string; answer: number } | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [moves, setMoves] = useState(0);


  const generateQuestion = useCallback((): { text: string; answer: number } => {
    const ops = ['+', '-', '×', '÷'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a: number, b: number, answer: number;

    switch (op) {
      case '+':
        a = Math.floor(Math.random() * 20) + 1;
        b = Math.floor(Math.random() * 20) + 1;
        answer = a + b;
        break;
      case '-':
        a = Math.floor(Math.random() * 30) + 10;
        b = Math.floor(Math.random() * a) + 1;
        answer = a - b;
        break;
      case '×':
        a = Math.floor(Math.random() * 10) + 1;
        b = Math.floor(Math.random() * 10) + 1;
        answer = a * b;
        break;
      case '÷':
        b = Math.floor(Math.random() * 9) + 2;
        answer = Math.floor(Math.random() * 10) + 1;
        a = b * answer;
        break;
      default:
        a = 1; b = 1; answer = 2;
    }

    return { text: `${a} ${op} ${b}`, answer };
  }, []);

  const generateMaze = useCallback((lvl: number) => {
    const size = 5 + lvl;
    const newMaze: Cell[][] = [];

    // Initialize with walls
    for (let y = 0; y < size; y++) {
      const row: Cell[] = [];
      for (let x = 0; x < size; x++) {
        row.push({
          x,
          y,
          type: 'wall',
          visited: false
        });
      }
      newMaze.push(row);
    }

    // Simple maze generation - create a path with some questions
    const path: Position[] = [];
    let current: Position = { x: 0, y: 0 };
    path.push(current);
    newMaze[0][0] = { ...newMaze[0][0], type: 'start', visited: false };

    while (current.x < size - 1 || current.y < size - 1) {
      const moves: Position[] = [];

      if (current.x < size - 1) moves.push({ x: current.x + 1, y: current.y });
      if (current.y < size - 1) moves.push({ x: current.x, y: current.y + 1 });
      if (current.x > 0 && Math.random() > 0.7) moves.push({ x: current.x - 1, y: current.y });
      if (current.y > 0 && Math.random() > 0.7) moves.push({ x: current.x, y: current.y - 1 });

      const next = moves[Math.floor(Math.random() * moves.length)];
      current = next;

      if (newMaze[current.y][current.x].type === 'wall') {
        // Add question cells randomly
        if (Math.random() > 0.6) {
          newMaze[current.y][current.x] = {
            ...newMaze[current.y][current.x],
            type: 'question',
            question: generateQuestion(),
            visited: false
          };
        } else if (Math.random() > 0.8) {
          newMaze[current.y][current.x] = {
            ...newMaze[current.y][current.x],
            type: 'bonus',
            bonus: Math.floor(Math.random() * 20) + 10,
            visited: false
          };
        } else {
          newMaze[current.y][current.x] = {
            ...newMaze[current.y][current.x],
            type: 'path',
            visited: false
          };
        }
        path.push(current);
      }
    }

    // Set end
    newMaze[size - 1][size - 1] = { ...newMaze[size - 1][size - 1], type: 'end', visited: false };

    // Add some extra paths for variety
    for (let i = 0; i < size * 2; i++) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      if (newMaze[y][x].type === 'wall') {
        // Check if adjacent to a path
        const hasAdjacentPath = [
          y > 0 && newMaze[y - 1][x].type !== 'wall',
          y < size - 1 && newMaze[y + 1][x].type !== 'wall',
          x > 0 && newMaze[y][x - 1].type !== 'wall',
          x < size - 1 && newMaze[y][x + 1].type !== 'wall'
        ].some(Boolean);

        if (hasAdjacentPath) {
          newMaze[y][x] = {
            ...newMaze[y][x],
            type: Math.random() > 0.7 ? 'question' : 'path',
            question: Math.random() > 0.7 ? generateQuestion() : undefined,
            visited: false
          };
        }
      }
    }

    setMaze(newMaze);
    setPlayerPos({ x: 0, y: 0 });
    setMoves(0);
  }, [generateQuestion]);

  useEffect(() => {
    generateMaze(level);
  }, [level, generateMaze]);

  const movePlayer = (dx: number, dy: number) => {
    if (gameState !== 'playing') return;

    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;

    if (newX < 0 || newX >= maze[0]?.length || newY < 0 || newY >= maze.length) return;

    const targetCell = maze[newY][newX];
    if (targetCell.type === 'wall') return;

    setMoves(prev => prev + 1);

    if (targetCell.type === 'question' && targetCell.question && !targetCell.visited) {
      setCurrentQuestion(targetCell.question);
      setGameState('question');
      setPlayerPos({ x: newX, y: newY });
    } else if (targetCell.type === 'bonus' && targetCell.bonus && !targetCell.visited) {
      showCelebration('Bonus!');
      setScore(prev => prev + targetCell.bonus!);
      setMaze(prev => {
        const updated = [...prev];
        updated[newY][newX] = { ...updated[newY][newX], visited: true };
        return updated;
      });
      setPlayerPos({ x: newX, y: newY });
    } else if (targetCell.type === 'end') {
      setPlayerPos({ x: newX, y: newY });
      setGameState('won');
      setShowConfetti(true);
      showCelebration('Kazandın!');
    } else {
      setPlayerPos({ x: newX, y: newY });
    }
  };

  const handleAnswer = () => {
    if (!currentQuestion) return;

    const isCorrect = parseInt(userAnswer) === currentQuestion.answer;

    if (isCorrect) {
      showCelebration();
      setScore(prev => prev + 25);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);

      // Mark as visited
      setMaze(prev => {
        const updated = [...prev];
        updated[playerPos.y][playerPos.x] = { ...updated[playerPos.y][playerPos.x], visited: true };
        return updated;
      });
    } else {
      showEncouragement();
      setLives(prev => prev - 1);

      if (lives <= 1) {
        setGameState('lost');
        return;
      }
    }

    setCurrentQuestion(null);
    setUserAnswer('');
    setGameState('playing');
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState === 'question') {
        if (e.key === 'Enter') handleAnswer();
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          movePlayer(0, -1);
          break;
        case 'ArrowDown':
        case 's':
          movePlayer(0, 1);
          break;
        case 'ArrowLeft':
        case 'a':
          movePlayer(-1, 0);
          break;
        case 'ArrowRight':
        case 'd':
          movePlayer(1, 0);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, playerPos, maze, lives]);

  const restartGame = () => {
    setLives(3);
    setScore(0);
    setGameState('playing');
    generateMaze(level);
  };

  const nextLevel = () => {
    setLevel(prev => prev + 1);
    setGameState('playing');
    setShowConfetti(false);
  };

  const getCellColor = (cell: Cell) => {
    if (cell.type === 'wall') return 'bg-gray-800';
    if (cell.type === 'start') return 'bg-green-400';
    if (cell.type === 'end') return 'bg-gradient-to-br from-yellow-400 to-orange-500';
    if (cell.type === 'question' && !cell.visited) return 'bg-purple-400';
    if (cell.type === 'bonus' && !cell.visited) return 'bg-yellow-300';
    if (cell.visited) return 'bg-green-200';
    return 'bg-gray-200';
  };

  const getCellEmoji = (cell: Cell) => {
    if (cell.type === 'start') return '🚩';
    if (cell.type === 'end') return '🏆';
    if (cell.type === 'question' && !cell.visited) return '❓';
    if (cell.type === 'bonus' && !cell.visited) return '💎';
    return '';
  };

  if (gameState === 'won' || gameState === 'lost') {
    const stars = gameState === 'won' ? (moves < level * 10 ? 5 : moves < level * 15 ? 4 : moves < level * 20 ? 3 : 2) : 1;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-cyan-100 flex items-center justify-center p-4">
        <Confetti trigger={gameState === 'won'} type="celebration" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border-4 border-teal-200"
        >
          <AnimatedCharacter type={gameState === 'won' ? 'celebrating' : 'sad'} size="lg" />

          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mt-6 mb-4">
            {gameState === 'won' ? 'Labirentten Çıktın! 🎉' : 'Oyun Bitti! 😢'}
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-4">
              <p className="text-sm font-bold text-gray-500">Puan</p>
              <p className="text-2xl font-black text-orange-600">{score}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-4">
              <p className="text-sm font-bold text-gray-500">Adım</p>
              <p className="text-2xl font-black text-indigo-600">{moves}</p>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <StarRating rating={stars} />
          </div>

          <div className="flex gap-4">
            {gameState === 'won' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextLevel}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-black text-lg shadow-lg"
              >
                Sonraki Seviye →
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={restartGame}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-lg shadow-lg"
            >
              🔄 Tekrar
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 p-4">
      <Confetti trigger={showConfetti} type="stars" />

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-4">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="px-4 py-2 bg-white/80 backdrop-blur rounded-xl font-bold text-gray-700 shadow-lg"
          >
            ← Geri
          </motion.button>

          <div className="flex items-center gap-4">
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-gray-500">Seviye</p>
              <p className="text-xl font-black text-purple-600">{level}</p>
            </div>
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-gray-500">Puan</p>
              <p className="text-xl font-black text-orange-600">{score}</p>
            </div>
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-gray-500">Adım</p>
              <p className="text-xl font-black text-blue-600">{moves}</p>
            </div>
            <AnimatedHearts count={lives} />
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-4xl mx-auto mb-4 flex justify-center gap-4">
        <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full text-sm font-bold">
          <span>🚩</span> Başlangıç
        </div>
        <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full text-sm font-bold">
          <span>🏆</span> Çıkış
        </div>
        <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full text-sm font-bold">
          <span>❓</span> Soru
        </div>
        <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full text-sm font-bold">
          <span>💎</span> Bonus
        </div>
      </div>

      {/* Maze */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-900 p-4 rounded-2xl shadow-2xl">
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${maze[0]?.length || 1}, 1fr)` }}>
            {maze.map((row, y) =>
              row.map((cell, x) => (
                <motion.div
                  key={`${x}-${y}`}
                  whileHover={cell.type !== 'wall' ? { scale: 1.1 } : {}}
                  className={`aspect-square ${getCellColor(cell)} rounded-lg flex items-center justify-center relative cursor-pointer transition-colors`}
                  onClick={() => {
                    const dx = x - playerPos.x;
                    const dy = y - playerPos.y;
                    if (Math.abs(dx) + Math.abs(dy) === 1) {
                      movePlayer(dx, dy);
                    }
                  }}
                >
                  <span className="text-2xl">{getCellEmoji(cell)}</span>

                  {/* Player */}
                  {playerPos.x === x && playerPos.y === y && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="text-3xl drop-shadow-lg">🧑‍🎓</span>
                    </motion.div>
                  )}
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-xs mx-auto mt-6">
        <div className="grid grid-cols-3 gap-2">
          <div></div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => movePlayer(0, -1)}
            className="aspect-square bg-white/80 rounded-xl font-bold text-2xl shadow-lg"
          >
            ⬆️
          </motion.button>
          <div></div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => movePlayer(-1, 0)}
            className="aspect-square bg-white/80 rounded-xl font-bold text-2xl shadow-lg"
          >
            ⬅️
          </motion.button>
          <div></div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => movePlayer(1, 0)}
            className="aspect-square bg-white/80 rounded-xl font-bold text-2xl shadow-lg"
          >
            ➡️
          </motion.button>
          <div></div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => movePlayer(0, 1)}
            className="aspect-square bg-white/80 rounded-xl font-bold text-2xl shadow-lg"
          >
            ⬇️
          </motion.button>
          <div></div>
        </div>
      </div>

      {/* Question Modal */}
      <AnimatePresence>
        {gameState === 'question' && currentQuestion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full border-4 border-purple-200"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg"
                >
                  <span className="text-4xl">❓</span>
                </motion.div>

                <h3 className="text-2xl font-black text-gray-800 mb-4">Soru!</h3>

                <p className="text-4xl font-black text-purple-600 mb-6">{currentQuestion.text} = ?</p>

                <input
                  type="number"
                  value={userAnswer}
                  onChange={e => setUserAnswer(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleAnswer()}
                  className="w-full text-center text-3xl font-black px-6 py-4 border-4 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-500 mb-4"
                  placeholder="?"
                  autoFocus
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAnswer}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-black text-xl shadow-lg"
                >
                  Cevapla! ✨
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
