import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Confetti } from '../../components/ui/Confetti';

interface Question {
  id: number;
  type: 'visual' | 'compare' | 'add' | 'simplify' | 'mixed';
  question: string;
  visual?: { numerator: number; denominator: number; shape: 'circle' | 'rectangle' | 'pizza' };
  options: string[];
  answer: string;
  explanation: string;
}

interface Level {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

const LEVELS: Level[] = [
  {
    id: 1,
    title: 'Kesirleri Tanıyalım',
    description: 'Kesir nedir? Parçaları öğren!',
    icon: '🍕',
    color: 'from-orange-400 to-red-500',
    questions: [
      {
        id: 1,
        type: 'visual',
        question: 'Bu pizzanın kaçta kaçı yenmiş?',
        visual: { numerator: 3, denominator: 8, shape: 'pizza' },
        options: ['3/8', '5/8', '3/5', '8/3'],
        answer: '3/8',
        explanation: 'Pizza 8 dilime bölünmüş ve 3 dilim yenmiş. Bu 3/8 (sekizde üç) demek!'
      },
      {
        id: 2,
        type: 'visual',
        question: 'Dairenin kaçta kaçı boyalı?',
        visual: { numerator: 1, denominator: 2, shape: 'circle' },
        options: ['1/2', '1/4', '2/4', '2/1'],
        answer: '1/2',
        explanation: 'Daire 2 eşit parçaya bölünmüş ve 1 parça boyalı. Bu 1/2 (yarım) demek!'
      },
      {
        id: 3,
        type: 'visual',
        question: 'Dikdörtgenin kaçta kaçı renkli?',
        visual: { numerator: 2, denominator: 4, shape: 'rectangle' },
        options: ['2/4', '1/2', '4/2', '1/4'],
        answer: '2/4',
        explanation: 'Dikdörtgen 4 parçaya bölünmüş ve 2 parça renkli. Bu 2/4 (dörtte iki) = 1/2 demek!'
      },
      {
        id: 4,
        type: 'visual',
        question: 'Bu pastanın kaçta kaçı kaldı?',
        visual: { numerator: 5, denominator: 6, shape: 'pizza' },
        options: ['5/6', '1/6', '6/5', '5/5'],
        answer: '5/6',
        explanation: 'Pasta 6 dilime bölünmüş ve 5 dilim kalmış. Bu 5/6 (altıda beş) demek!'
      },
      {
        id: 5,
        type: 'visual',
        question: 'Çemberin kaçta kaçı boş?',
        visual: { numerator: 3, denominator: 4, shape: 'circle' },
        options: ['1/4', '3/4', '4/3', '2/4'],
        answer: '1/4',
        explanation: '4 parçadan 3\'ü dolu ise 1\'i boş. Boş kısım 1/4 (dörtte bir)!'
      }
    ]
  },
  {
    id: 2,
    title: 'Kesirleri Karşılaştır',
    description: 'Hangisi büyük, hangisi küçük?',
    icon: '⚖️',
    color: 'from-blue-400 to-indigo-500',
    questions: [
      {
        id: 1,
        type: 'compare',
        question: 'Hangisi daha büyük: 1/2 mi yoksa 1/4 mü?',
        options: ['1/2', '1/4', 'Eşitler', 'Bilinemez'],
        answer: '1/2',
        explanation: 'Aynı bütünü 2 parçaya bölersen her parça büyük, 4 parçaya bölersen küçük olur. 1/2 > 1/4'
      },
      {
        id: 2,
        type: 'compare',
        question: 'Hangisi daha büyük: 3/4 mü yoksa 2/4 mü?',
        options: ['3/4', '2/4', 'Eşitler', 'Bilinemez'],
        answer: '3/4',
        explanation: 'Paydalar aynı olunca paylara bakarız. 3 > 2 olduğu için 3/4 > 2/4'
      },
      {
        id: 3,
        type: 'compare',
        question: '2/3 ile 4/6 karşılaştır',
        options: ['2/3 büyük', '4/6 büyük', 'Eşitler', 'Bilinemez'],
        answer: 'Eşitler',
        explanation: '2/3 = 4/6 çünkü 2/3 kesrini 2 ile genişletirsek 4/6 olur!'
      },
      {
        id: 4,
        type: 'compare',
        question: 'Hangisi daha küçük: 1/3 mü yoksa 1/5 mi?',
        options: ['1/3', '1/5', 'Eşitler', 'Bilinemez'],
        answer: '1/5',
        explanation: 'Paylar aynı (1) olunca paydası büyük olan kesir küçüktür. 1/5 < 1/3'
      },
      {
        id: 5,
        type: 'compare',
        question: '5/8 ile 3/8 karşılaştır',
        options: ['5/8 > 3/8', '3/8 > 5/8', 'Eşitler', '5/8 < 3/8'],
        answer: '5/8 > 3/8',
        explanation: 'Paydalar aynı olunca paylara bakarız. 5 > 3 olduğu için 5/8 > 3/8'
      }
    ]
  },
  {
    id: 3,
    title: 'Kesir Toplama',
    description: 'Kesirleri toplamayı öğren!',
    icon: '➕',
    color: 'from-green-400 to-emerald-500',
    questions: [
      {
        id: 1,
        type: 'add',
        question: '1/4 + 1/4 = ?',
        options: ['2/4', '2/8', '1/2', '2/4 ve 1/2'],
        answer: '2/4 ve 1/2',
        explanation: '1/4 + 1/4 = 2/4. Sadeleştirince 2/4 = 1/2. Her iki cevap da doğru!'
      },
      {
        id: 2,
        type: 'add',
        question: '1/3 + 1/3 = ?',
        options: ['2/3', '2/6', '1/6', '3/3'],
        answer: '2/3',
        explanation: 'Paydalar aynı olunca payları toplarız: 1 + 1 = 2, payda aynı kalır → 2/3'
      },
      {
        id: 3,
        type: 'add',
        question: '2/5 + 1/5 = ?',
        options: ['3/5', '3/10', '2/10', '3/25'],
        answer: '3/5',
        explanation: 'Paydalar aynı: 2 + 1 = 3, payda 5 kalır → 3/5'
      },
      {
        id: 4,
        type: 'add',
        question: '1/2 + 1/4 = ?',
        options: ['2/6', '3/4', '2/4', '1/6'],
        answer: '3/4',
        explanation: '1/2 = 2/4 yaparız. 2/4 + 1/4 = 3/4'
      },
      {
        id: 5,
        type: 'add',
        question: '1/6 + 2/6 + 1/6 = ?',
        options: ['4/6', '4/18', '2/3', '4/6 ve 2/3'],
        answer: '4/6 ve 2/3',
        explanation: '1 + 2 + 1 = 4 → 4/6. Sadeleştirince 4/6 = 2/3'
      }
    ]
  },
  {
    id: 4,
    title: 'Kesir Sadeleştirme',
    description: 'En sade halini bul!',
    icon: '✨',
    color: 'from-purple-400 to-pink-500',
    questions: [
      {
        id: 1,
        type: 'simplify',
        question: '2/4 kesrinin en sade hali nedir?',
        options: ['1/2', '2/4', '4/8', '1/4'],
        answer: '1/2',
        explanation: '2/4 → pay ve paydayı 2\'ye bölersek 1/2 olur. En sade hali budur!'
      },
      {
        id: 2,
        type: 'simplify',
        question: '6/8 kesrinin en sade hali nedir?',
        options: ['3/4', '6/8', '2/4', '12/16'],
        answer: '3/4',
        explanation: '6/8 → pay ve paydayı 2\'ye bölersek 3/4 olur.'
      },
      {
        id: 3,
        type: 'simplify',
        question: '4/12 kesrinin en sade hali nedir?',
        options: ['1/3', '2/6', '4/12', '2/4'],
        answer: '1/3',
        explanation: '4/12 → 4\'e bölersek 1/3 olur. EBOB = 4'
      },
      {
        id: 4,
        type: 'simplify',
        question: '9/12 kesrinin en sade hali nedir?',
        options: ['3/4', '9/12', '6/8', '1/2'],
        answer: '3/4',
        explanation: '9/12 → 3\'e bölersek 3/4 olur. EBOB = 3'
      },
      {
        id: 5,
        type: 'simplify',
        question: '5/10 kesrinin en sade hali nedir?',
        options: ['1/2', '5/10', '2/4', '10/20'],
        answer: '1/2',
        explanation: '5/10 → 5\'e bölersek 1/2 olur.'
      }
    ]
  },
  {
    id: 5,
    title: 'Karışık Sorular',
    description: 'Tüm bilgilerini test et!',
    icon: '🏆',
    color: 'from-yellow-400 to-orange-500',
    questions: [
      {
        id: 1,
        type: 'mixed',
        question: 'Bir pizzanın 3/8\'i yendi. Kalan kaçta kaçtır?',
        options: ['5/8', '3/8', '8/3', '5/3'],
        answer: '5/8',
        explanation: 'Tam pizza = 8/8. Yenen = 3/8. Kalan = 8/8 - 3/8 = 5/8'
      },
      {
        id: 2,
        type: 'mixed',
        question: 'Ali elindeki paranın 1/4\'ünü harcadı. Kaçta kaçı kaldı?',
        options: ['3/4', '1/4', '2/4', '4/4'],
        answer: '3/4',
        explanation: 'Tam para = 4/4. Harcanan = 1/4. Kalan = 4/4 - 1/4 = 3/4'
      },
      {
        id: 3,
        type: 'mixed',
        question: '12 elmanın 1/3\'ü kaç elmadır?',
        options: ['4', '3', '6', '12'],
        answer: '4',
        explanation: '12 × 1/3 = 12/3 = 4 elma'
      },
      {
        id: 4,
        type: 'mixed',
        question: '2/5 + 2/5 + 1/5 toplamı 1\'e eşit mi?',
        options: ['Evet', 'Hayır', '5/5 = 1', 'Evet ve 5/5 = 1'],
        answer: 'Evet ve 5/5 = 1',
        explanation: '2/5 + 2/5 + 1/5 = 5/5 = 1. Evet, eşittir!'
      },
      {
        id: 5,
        type: 'mixed',
        question: 'Hangi kesir 1\'den büyüktür?',
        options: ['5/4', '3/4', '4/5', '1/2'],
        answer: '5/4',
        explanation: 'Pay > Payda ise kesir 1\'den büyüktür. 5 > 4 olduğu için 5/4 > 1'
      }
    ]
  }
];

export default function Kesirler() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('completedKesirlerLevels');
    if (saved) setCompletedLevels(JSON.parse(saved));
  }, []);

  const currentQ = selectedLevel?.questions[currentQuestion];

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const checkAnswer = () => {
    if (!selectedAnswer || !currentQ) return;
    setShowResult(true);
    if (selectedAnswer === currentQ.answer) {
      setScore(s => s + 20);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
    }
  };

  const nextQuestion = () => {
    if (!selectedLevel) return;
    if (currentQuestion < selectedLevel.questions.length - 1) {
      setCurrentQuestion(c => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      if (!completedLevels.includes(selectedLevel.id)) {
        const newCompleted = [...completedLevels, selectedLevel.id];
        setCompletedLevels(newCompleted);
        localStorage.setItem('completedKesirlerLevels', JSON.stringify(newCompleted));
      }
    }
  };

  const resetQuiz = () => {
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizComplete(false);
  };

  const renderVisual = () => {
    if (!currentQ?.visual) return null;
    const { numerator, denominator, shape } = currentQ.visual;

    if (shape === 'pizza' || shape === 'circle') {
      const segments = [];
      for (let i = 0; i < denominator; i++) {
        const angle = (360 / denominator) * i - 90;
        const nextAngle = (360 / denominator) * (i + 1) - 90;
        const x1 = 50 + 40 * Math.cos((angle * Math.PI) / 180);
        const y1 = 50 + 40 * Math.sin((angle * Math.PI) / 180);
        const x2 = 50 + 40 * Math.cos((nextAngle * Math.PI) / 180);
        const y2 = 50 + 40 * Math.sin((nextAngle * Math.PI) / 180);
        const largeArc = 360 / denominator > 180 ? 1 : 0;

        segments.push(
          <path
            key={i}
            d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
            fill={i < numerator ? (shape === 'pizza' ? '#f97316' : '#8b5cf6') : '#e5e7eb'}
            stroke="white"
            strokeWidth="2"
          />
        );
      }
      return (
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          {segments}
          {shape === 'pizza' && (
            <circle cx="50" cy="50" r="8" fill="#fef3c7" />
          )}
        </svg>
      );
    }

    if (shape === 'rectangle') {
      const parts = [];
      const width = 100 / denominator;
      for (let i = 0; i < denominator; i++) {
        parts.push(
          <rect
            key={i}
            x={i * width}
            y="0"
            width={width - 2}
            height="60"
            fill={i < numerator ? '#10b981' : '#e5e7eb'}
            stroke="white"
            strokeWidth="2"
            rx="4"
          />
        );
      }
      return (
        <svg viewBox="0 0 100 60" className="w-40 h-24">
          {parts}
        </svg>
      );
    }
    return null;
  };

  if (quizComplete && selectedLevel) {
    const percentage = (score / (selectedLevel.questions.length * 20)) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 flex items-center justify-center p-4">
        <Confetti trigger={true} type="celebration" />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border-4 border-orange-200"
        >
          <span className="text-7xl">{percentage >= 80 ? '🏆' : percentage >= 50 ? '⭐' : '💪'}</span>
          <h2 className="text-3xl font-black text-orange-600 mt-4 mb-2">
            {percentage >= 80 ? 'Mükemmel!' : percentage >= 50 ? 'İyi İş!' : 'Tekrar Dene!'}
          </h2>
          <p className="text-5xl font-black text-gray-800 my-4">{score} Puan</p>
          <p className="text-lg text-gray-600 mb-6">%{percentage.toFixed(0)} Başarı</p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setCurrentQuestion(0); setScore(0); setSelectedAnswer(null); setShowResult(false); setQuizComplete(false); }}
              className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold"
            >
              Tekrar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetQuiz}
              className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold"
            >
              Seviyeler
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (selectedLevel && currentQ) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100">
        <Confetti trigger={showConfetti} type="stars" />
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <motion.button whileHover={{ scale: 1.1 }} onClick={resetQuiz} className="px-4 py-2 bg-white rounded-xl font-bold shadow">
              ← Geri
            </motion.button>
            <div className="flex gap-4">
              <div className="bg-white px-4 py-2 rounded-xl shadow">
                <span className="font-bold text-orange-600">{currentQuestion + 1}/{selectedLevel.questions.length}</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-xl shadow">
                <span className="font-bold text-green-600">{score} Puan</span>
              </div>
            </div>
          </div>

          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8 border-4 border-orange-200"
          >
            <div className={`bg-gradient-to-r ${selectedLevel.color} text-white p-4 rounded-2xl mb-6`}>
              <h3 className="text-xl font-bold">{selectedLevel.title}</h3>
            </div>

            {currentQ.visual && (
              <div className="flex justify-center mb-6">
                {renderVisual()}
              </div>
            )}

            <p className="text-xl font-bold text-gray-800 text-center mb-6">{currentQ.question}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {currentQ.options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: showResult ? 1 : 1.03 }}
                  whileTap={{ scale: showResult ? 1 : 0.97 }}
                  onClick={() => handleAnswer(opt)}
                  disabled={showResult}
                  className={`p-4 rounded-xl font-bold text-lg transition-all ${
                    showResult
                      ? opt === currentQ.answer
                        ? 'bg-green-500 text-white'
                        : opt === selectedAnswer
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200'
                      : selectedAnswer === opt
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 hover:bg-orange-100'
                  }`}
                >
                  {opt}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl mb-4 ${selectedAnswer === currentQ.answer ? 'bg-green-100' : 'bg-red-100'}`}
                >
                  <p className="font-bold">{selectedAnswer === currentQ.answer ? '✅ Doğru!' : '❌ Yanlış!'}</p>
                  <p className="text-gray-700 mt-2">{currentQ.explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-4">
              {!showResult ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={checkAnswer}
                  disabled={!selectedAnswer}
                  className="flex-1 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold disabled:opacity-50"
                >
                  Kontrol Et
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextQuestion}
                  className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold"
                >
                  {currentQuestion < selectedLevel.questions.length - 1 ? 'Sonraki →' : 'Bitir 🏆'}
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex">
          <Link to="/" className="hover:text-orange-600">🏠 Ana Sayfa</Link>
          <span>→</span>
          <span className="text-orange-600">🍕 Kesirler</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-8 border-4 border-orange-200"
        >
          <div className="flex items-center gap-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl shadow-xl"
            >
              <span className="text-5xl">🍕</span>
            </motion.div>
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                Kesirler
              </h1>
              <p className="text-lg text-gray-600">
                Pizzayı paylaşmaktan kesirleri öğrenmeye! Bütünün parçalarını keşfet.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {LEVELS.map((level, i) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedLevel(level)}
              className="cursor-pointer relative"
            >
              {completedLevels.includes(level.id) && (
                <div className="absolute -top-2 -right-2 z-10 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shadow">✓</div>
              )}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white hover:border-orange-300 transition-all">
                <div className={`bg-gradient-to-r ${level.color} p-4`}>
                  <span className="text-4xl">{level.icon}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{level.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{level.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{level.questions.length} soru</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 bg-gradient-to-r ${level.color} text-white rounded-lg font-bold text-sm`}
                    >
                      Başla
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detaylı Konu Anlatımı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-orange-200"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg">
              <span className="text-4xl">📖</span>
            </div>
            <div>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Kesirler Konu Anlatımı
              </h2>
              <p className="text-gray-600 font-semibold">Adım adım öğrenelim!</p>
            </div>
          </div>

          {/* Kesir Nedir? */}
          <div className="mb-10">
            <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-full text-xl">1</span>
              Kesir Nedir?
            </h3>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 mb-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong className="text-orange-600">Kesir</strong>, bir bütünün eşit parçalara bölünmesiyle elde edilen parçaları gösterir.
                Günlük hayatta sürekli kesirlerle karşılaşırız: pizzanın yarısı, elmanın çeyreği, pastanın bir dilimi...
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 my-6">
                <div className="text-center">
                  <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
                    <circle cx="50" cy="50" r="45" fill="#fef3c7" stroke="#f97316" strokeWidth="3"/>
                    <path d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" fill="#f97316"/>
                  </svg>
                  <p className="font-bold text-gray-800 mt-2">1/4</p>
                  <p className="text-sm text-gray-600">Çeyrek</p>
                </div>
                <div className="text-center">
                  <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
                    <circle cx="50" cy="50" r="45" fill="#fef3c7" stroke="#f97316" strokeWidth="3"/>
                    <path d="M 50 50 L 50 5 A 45 45 0 1 1 50 95 Z" fill="#f97316"/>
                  </svg>
                  <p className="font-bold text-gray-800 mt-2">1/2</p>
                  <p className="text-sm text-gray-600">Yarım</p>
                </div>
                <div className="text-center">
                  <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
                    <circle cx="50" cy="50" r="45" fill="#fef3c7" stroke="#f97316" strokeWidth="3"/>
                    <path d="M 50 50 L 50 5 A 45 45 0 1 1 5 50 Z" fill="#f97316"/>
                  </svg>
                  <p className="font-bold text-gray-800 mt-2">3/4</p>
                  <p className="text-sm text-gray-600">Dörtte Üç</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pay ve Payda */}
          <div className="mb-10">
            <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-xl">2</span>
              Pay ve Payda
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                    <div className="text-6xl font-black text-blue-600 border-b-4 border-gray-800 pb-2">3</div>
                    <div className="text-6xl font-black text-orange-600 pt-2">4</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4 p-4 bg-blue-100 rounded-xl">
                    <p className="text-lg">
                      <span className="text-3xl mr-2">👆</span>
                      <strong className="text-blue-600 text-xl">PAY (3)</strong>: Üstteki sayı. Bütünün kaç parçasını aldığımızı gösterir.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-100 rounded-xl">
                    <p className="text-lg">
                      <span className="text-3xl mr-2">👇</span>
                      <strong className="text-orange-600 text-xl">PAYDA (4)</strong>: Alttaki sayı. Bütünün kaç eşit parçaya bölündüğünü gösterir.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-100 rounded-xl">
                <p className="text-lg font-bold text-center">
                  <span className="text-2xl">💡</span> 3/4 demek: "Bütünü 4 parçaya böldük, 3 parçasını aldık" demektir!
                </p>
              </div>
            </div>
          </div>

          {/* Denk Kesirler */}
          <div className="mb-10">
            <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full text-xl">3</span>
              Denk Kesirler
            </h3>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <p className="text-lg text-gray-700 mb-4">
                Farklı görünse de aynı değeri gösteren kesirlere <strong className="text-green-600">denk kesirler</strong> denir.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 my-6">
                <div className="bg-white p-4 rounded-xl shadow text-center">
                  <p className="text-4xl font-black text-green-600">1/2</p>
                </div>
                <span className="text-3xl">=</span>
                <div className="bg-white p-4 rounded-xl shadow text-center">
                  <p className="text-4xl font-black text-green-600">2/4</p>
                </div>
                <span className="text-3xl">=</span>
                <div className="bg-white p-4 rounded-xl shadow text-center">
                  <p className="text-4xl font-black text-green-600">3/6</p>
                </div>
                <span className="text-3xl">=</span>
                <div className="bg-white p-4 rounded-xl shadow text-center">
                  <p className="text-4xl font-black text-green-600">4/8</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow">
                <p className="text-lg font-bold text-center">
                  <span className="text-2xl">🎯</span> Pay ve paydayı aynı sayıyla çarparsak veya bölersek, kesirin değeri değişmez!
                </p>
              </div>
            </div>
          </div>

          {/* Kesir Toplama */}
          <div className="mb-10">
            <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full text-xl">4</span>
              Kesir Toplama
            </h3>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="font-bold text-purple-600 mb-3 text-lg">Paydalar Aynıysa:</h4>
                  <p className="text-gray-700 mb-3">Sadece payları topla, payda aynı kalır!</p>
                  <div className="bg-purple-100 p-4 rounded-lg text-center">
                    <p className="text-2xl font-black">
                      <span className="text-purple-600">2/5</span> + <span className="text-purple-600">1/5</span> = <span className="text-green-600">3/5</span>
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="font-bold text-pink-600 mb-3 text-lg">Paydalar Farklıysa:</h4>
                  <p className="text-gray-700 mb-3">Önce paydalari eşitle, sonra topla!</p>
                  <div className="bg-pink-100 p-4 rounded-lg text-center">
                    <p className="text-2xl font-black">
                      <span className="text-pink-600">1/2</span> + <span className="text-pink-600">1/4</span> = <span className="text-gray-600">2/4</span> + <span className="text-gray-600">1/4</span> = <span className="text-green-600">3/4</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eğlenceli Bilgiler */}
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6">
            <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-3">
              <span className="text-3xl">🌟</span> Biliyor Muydun?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow">
                <p className="font-bold text-gray-800">
                  <span className="text-2xl mr-2">🍕</span>
                  İtalya'da pizza her zaman 8 dilime kesilir. Bir dilim 1/8'dir!
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <p className="font-bold text-gray-800">
                  <span className="text-2xl mr-2">🎂</span>
                  Doğum günü pastası genellikle 12 dilime bölünür. Her dilim 1/12!
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <p className="font-bold text-gray-800">
                  <span className="text-2xl mr-2">⚽</span>
                  Bir futbol maçının ilk yarısı 1/2, devre arası sonrası 2/2'dir!
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <p className="font-bold text-gray-800">
                  <span className="text-2xl mr-2">🎵</span>
                  Müzikte notalar kesirlerle ifade edilir: tam nota, yarım nota, çeyrek nota...
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
