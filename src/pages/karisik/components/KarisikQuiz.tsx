import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Confetti } from '../../../components/ui/Confetti';
import { AnimatedCharacter, StarRating, AnimatedProgressBar } from '../../../components/ui/AnimatedCharacter';
import { showCelebration, showEncouragement, showStreak } from '../../../components/ui/MessagePopup';

interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: number;
  time: string;
}

interface KarisikQuizProps {
  challenge: Challenge;
  onComplete: () => void;
  onClose: () => void;
}

interface Question {
  num1: number;
  num2: number;
  operator: string;
  answer: number;
  displayOperator: string;
}

export default function KarisikQuiz({ challenge, onComplete, onClose }: KarisikQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const generateQuestion = useCallback((level: number): Question => {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let num1: number, num2: number, answer: number;
    let maxNum: number;

    // Seviyeye göre sayı aralığı
    switch (level) {
      case 1: maxNum = 20; break;
      case 2: maxNum = 100; break;
      case 3: maxNum = 500; break;
      case 4: maxNum = 1000; break;
      default: maxNum = 20;
    }

    switch (operator) {
      case '+':
        num1 = Math.floor(Math.random() * maxNum) + 1;
        num2 = Math.floor(Math.random() * maxNum) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * maxNum) + 10;
        num2 = Math.floor(Math.random() * num1) + 1;
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        answer = num1 * num2;
        break;
      case '/':
        num2 = Math.floor(Math.random() * 10) + 2;
        answer = Math.floor(Math.random() * 12) + 1;
        num1 = num2 * answer;
        break;
      default:
        num1 = 1; num2 = 1; answer = 2;
    }

    const displayOperator = operator === '*' ? '×' : operator === '/' ? '÷' : operator;

    return { num1, num2, operator, answer, displayOperator };
  }, []);

  useEffect(() => {
    const newQuestions: Question[] = [];
    for (let i = 0; i < challenge.questions; i++) {
      newQuestions.push(generateQuestion(challenge.id));
    }
    setQuestions(newQuestions);
  }, [challenge, generateQuestion]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSubmit = () => {
    if (!currentQuestion || !userAnswer) return;

    const correct = parseInt(userAnswer) === currentQuestion.answer;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setScore(prev => prev + 10 + newStreak * 2);
      setCorrectAnswers(prev => prev + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);

      if (newStreak >= 2) {
        showStreak(newStreak);
      } else {
        showCelebration();
      }
    } else {
      setStreak(0);
      showEncouragement();
    }

    setTimeout(() => {
      setShowResult(false);
      setUserAnswer('');

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setQuizComplete(true);
      }
    }, 1500);
  };

  const calculateStars = () => {
    const percentage = (correctAnswers / questions.length) * 100;
    if (percentage >= 90) return 5;
    if (percentage >= 75) return 4;
    if (percentage >= 60) return 3;
    if (percentage >= 40) return 2;
    return 1;
  };

  if (quizComplete) {
    const stars = calculateStars();
    const percentage = Math.round((correctAnswers / questions.length) * 100);

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Confetti trigger={true} type="celebration" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center border-4 border-orange-200"
        >
          <AnimatedCharacter type={stars >= 3 ? 'celebrating' : 'happy'} size="lg" />

          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mt-6 mb-4">
            {challenge.title} Tamamlandı!
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-4">
              <p className="text-sm font-bold text-gray-500">Doğru</p>
              <p className="text-3xl font-black text-blue-600">{correctAnswers}/{questions.length}</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4">
              <p className="text-sm font-bold text-gray-500">Başarı</p>
              <p className="text-3xl font-black text-green-600">%{percentage}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 mb-6">
            <p className="text-5xl font-black text-orange-600 mb-2">{score}</p>
            <p className="text-lg font-bold text-gray-600">Toplam Puan</p>
          </div>

          <div className="flex justify-center mb-6">
            <StarRating rating={stars} />
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (stars >= 3) onComplete();
                else onClose();
              }}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-lg shadow-lg"
            >
              {stars >= 3 ? 'Tamamla' : 'Tekrar Dene'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-6 py-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-2xl font-black text-lg shadow-lg"
            >
              Kapat
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Confetti trigger={showConfetti} type="stars" />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-6 max-w-2xl w-full border-4 border-orange-200 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${challenge.color} rounded-2xl shadow-lg`}>
              <span className="text-3xl">{challenge.icon}</span>
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-800">{challenge.title}</h2>
              <p className="text-sm font-bold text-gray-500">Soru {currentQuestionIndex + 1} / {questions.length}</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <span className="text-xl">✕</span>
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <AnimatedProgressBar progress={progress} color="orange" />
        </div>

        {/* Stats */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-blue-100 rounded-xl p-3 text-center">
            <p className="text-xs font-bold text-gray-500">Puan</p>
            <p className="text-xl font-black text-blue-600">{score}</p>
          </div>
          <div className="flex-1 bg-green-100 rounded-xl p-3 text-center">
            <p className="text-xs font-bold text-gray-500">Doğru</p>
            <p className="text-xl font-black text-green-600">{correctAnswers}</p>
          </div>
          {streak > 0 && (
            <div className="flex-1 bg-orange-100 rounded-xl p-3 text-center">
              <p className="text-xs font-bold text-gray-500">Seri</p>
              <p className="text-xl font-black text-orange-600">{streak}</p>
            </div>
          )}
        </div>

        {/* Question */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={`bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 text-center border-4 ${
            showResult ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-orange-200'
          }`}
        >
          <p className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            {currentQuestion.num1} {currentQuestion.displayOperator} {currentQuestion.num2} = ?
          </p>

          <input
            type="number"
            value={userAnswer}
            onChange={e => setUserAnswer(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSubmit()}
            disabled={showResult}
            className="w-48 text-center text-4xl font-black px-6 py-4 border-4 border-orange-300 rounded-2xl focus:outline-none focus:border-orange-500 disabled:bg-gray-100"
            placeholder="?"
            autoFocus
          />

          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mt-4 text-2xl font-black ${isCorrect ? 'text-green-600' : 'text-red-600'}`}
              >
                {isCorrect ? (
                  <span>Harika! Doğru cevap!</span>
                ) : (
                  <span>Doğru cevap: {currentQuestion.answer}</span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={showResult || !userAnswer}
          className="w-full mt-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-black text-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Kontrol Et
        </motion.button>
      </motion.div>
    </div>
  );
}
