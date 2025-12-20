import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import MultipleChoice from './components/MultipleChoice';
import FillInBlank from './components/FillInBlank';
import Matching from './components/Matching';
import {
  generateLevelTest,
  generateSpeedQuestion,
  type Operation,
  type Difficulty,
  type Question,
  operationLabels,
  difficultyLabels
} from '../../utils/questionGenerator';

type TestMode = 'normal' | 'speed';

export default function Testler() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOperation, setSelectedOperation] = useState<Operation | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [testMode, setTestMode] = useState<TestMode | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Süreye karşı yarış modu için
  const [timeLeft, setTimeLeft] = useState(60);
  const [speedQuestion, setSpeedQuestion] = useState<{ question: string; answer: number } | null>(null);
  const [speedAnswer, setSpeedAnswer] = useState('');
  const [speedCorrect, setSpeedCorrect] = useState(0);
  const [speedWrong, setSpeedWrong] = useState(0);
  const [isSpeedPlaying, setIsSpeedPlaying] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(false);
  const [speedFeedback, setSpeedFeedback] = useState<'correct' | 'wrong' | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const operations: Operation[] = ['toplama', 'cikarma', 'carpma', 'bolme', 'karisik'];
  const difficulties: Difficulty[] = [1, 2, 3, 4];

  const motivationQuotes = [
    "Her test seni daha güçlü yapıyor! 🌟",
    "Bilgini test etmek öğrenmenin en iyi yolu! 💪",
    "Sen bir matematik yıldızısın! ⭐",
    "Başarı, pratikle gelir! Hadi başla! 🚀",
    "Matematik beyni güçlendirir! 🧠",
    "Her doğru cevap bir adım ileriye! 🎯"
  ];

  const randomQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];

  // Normal test başlat
  const startNormalTest = () => {
    if (!selectedOperation || !selectedDifficulty) return;

    const newQuestions = generateLevelTest(selectedOperation, selectedDifficulty);
    setQuestions(newQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setShowResult(false);
    setTestMode('normal');
  };

  // Süreye karşı yarış başlat
  const startSpeedTest = () => {
    if (!selectedOperation || !selectedDifficulty) return;

    setTestMode('speed');
    setShowCountdown(true);
    setCountdown(3);
    setSpeedCorrect(0);
    setSpeedWrong(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setTimeLeft(60);
  };

  // Countdown effect
  useEffect(() => {
    if (showCountdown && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (showCountdown && countdown === 0) {
      setShowCountdown(false);
      setIsSpeedPlaying(true);
      generateNewSpeedQuestion();
    }
  }, [showCountdown, countdown]);

  // Timer effect
  useEffect(() => {
    if (isSpeedPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isSpeedPlaying && timeLeft === 0) {
      setIsSpeedPlaying(false);
      setShowResult(true);
    }
  }, [isSpeedPlaying, timeLeft]);

  // Focus input
  useEffect(() => {
    if (isSpeedPlaying && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSpeedPlaying, speedQuestion]);

  const generateNewSpeedQuestion = useCallback(() => {
    if (!selectedDifficulty || !selectedOperation) return;
    const q = generateSpeedQuestion(selectedDifficulty, selectedOperation);
    setSpeedQuestion(q);
    setSpeedAnswer('');
  }, [selectedDifficulty, selectedOperation]);

  const checkSpeedAnswer = () => {
    if (!speedQuestion || !speedAnswer) return;

    const isCorrect = parseInt(speedAnswer) === speedQuestion.answer;

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);

      const points = 10 + newStreak * 2 + (selectedDifficulty || 1) * 5;
      setScore(prev => prev + points);
      setSpeedCorrect(prev => prev + 1);
      setSpeedFeedback('correct');
    } else {
      setStreak(0);
      setSpeedWrong(prev => prev + 1);
      setSpeedFeedback('wrong');
    }

    setTimeout(() => {
      setSpeedFeedback(null);
      generateNewSpeedQuestion();
    }, 300);
  };

  const handleSpeedKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkSpeedAnswer();
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
      setScore(score + 10 + newStreak * 2);
    } else {
      setStreak(0);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOperation(null);
    setSelectedDifficulty(null);
    setTestMode(null);
    setQuestions([]);
    setStreak(0);
    setBestStreak(0);
    setIsSpeedPlaying(false);
    setSpeedCorrect(0);
    setSpeedWrong(0);
  };

  // Ana seçim ekranı
  if (!selectedOperation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-100 to-sky-100 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-28 h-28 bg-teal-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-cyan-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-sky-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>

        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex">
            <Link to="/" className="hover:text-teal-600 cursor-pointer whitespace-nowrap">Ana Sayfa</Link>
            <i className="ri-arrow-right-s-line text-xl"></i>
            <span className="text-teal-600 whitespace-nowrap">Testler</span>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-teal-200">
            <div className="flex items-start gap-8">
              <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl shadow-xl flex-shrink-0 transform hover:rotate-6 transition-transform">
                <span className="text-6xl">📝</span>
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-3">
                  Matematik Testleri
                </h1>
                <p className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">
                  Seviyeni seç, işlemi belirle ve kendini test et! 1 haneli sayılardan 4 haneli sayılara kadar
                  tüm zorluk seviyelerinde pratik yapabilirsin. Süreye karşı yarış ya da normal test modunu seç!
                </p>

                <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 rounded-2xl p-4 mb-4 shadow-lg border-3 border-white">
                  <p className="text-base md:text-lg font-black text-purple-700">
                    {randomQuote}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                    <span className="text-xl">❓</span>
                    <span className="text-sm font-bold text-gray-700">Çoktan Seçmeli</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <span className="text-xl">✍️</span>
                    <span className="text-sm font-bold text-gray-700">Boşluk Doldurma</span>
                  </div>
                  <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                    <span className="text-xl">🎯</span>
                    <span className="text-sm font-bold text-gray-700">Eşleştirme</span>
                  </div>
                  <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                    <span className="text-xl">⏱️</span>
                    <span className="text-sm font-bold text-gray-700">Süreye Karşı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-800 mb-4">İşlem Türü Seç</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {operations.map((op) => (
              <div
                key={op}
                onClick={() => setSelectedOperation(op)}
                className="relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-200">
                  <div className={`absolute inset-0 bg-gradient-to-br ${operationLabels[op].color} opacity-10`}></div>

                  <div className="relative p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${operationLabels[op].color} rounded-2xl shadow-lg`}>
                        <span className="text-4xl">{operationLabels[op].emoji}</span>
                      </div>
                    </div>

                    <h4 className="text-xl font-black text-gray-800 text-center">
                      {operationLabels[op].label}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 md:p-10 text-center border-4 border-white">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-xl">
                <span className="text-4xl">🇹🇷</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-black text-white leading-relaxed italic">
              "Bir gün ulusu sizin gibi beni anlamış gençliğe bırakacağımdan çok memnun ve mesudum."
            </p>
            <p className="text-lg font-bold text-white/90 mt-4">
              - Mustafa Kemal Atatürk
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Zorluk seviyesi seçimi
  if (!selectedDifficulty) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-100 to-sky-100 relative overflow-hidden">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <button
            onClick={() => setSelectedOperation(null)}
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg font-bold text-gray-700 hover:bg-gray-50 mb-6 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i> Geri
          </button>

          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-teal-200">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${operationLabels[selectedOperation].color} rounded-2xl shadow-lg`}>
                <span className="text-5xl">{operationLabels[selectedOperation].emoji}</span>
              </div>
              <div>
                <h1 className="text-3xl font-black text-gray-800">
                  {operationLabels[selectedOperation].label} Testi
                </h1>
                <p className="text-lg text-gray-600 font-semibold">Zorluk seviyesini seç</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {difficulties.map((diff) => (
              <div
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className="relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-200 hover:border-teal-400">
                  <div className="p-8 text-center">
                    <div className="text-6xl mb-4">{difficultyLabels[diff].emoji}</div>
                    <h3 className="text-2xl font-black text-gray-800 mb-2">
                      {difficultyLabels[diff].label}
                    </h3>
                    <p className="text-gray-600 font-semibold mb-4">
                      {difficultyLabels[diff].description}
                    </p>
                    <div className="bg-teal-100 rounded-full px-4 py-2 inline-block">
                      <span className="text-sm font-bold text-teal-700">
                        {diff === 1 ? '10' : diff === 2 ? '15' : diff === 3 ? '20' : '25'} Soru
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-6 border-4 border-purple-200">
            <h3 className="text-xl font-black text-purple-800 mb-4 text-center">Zorluk Seviyeleri Hakkında</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <span className="text-2xl">🌱</span>
                <p className="font-bold text-gray-700">1 Haneli</p>
                <p className="text-sm text-gray-500">Temel işlemler</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <span className="text-2xl">🌿</span>
                <p className="font-bold text-gray-700">2 Haneli</p>
                <p className="text-sm text-gray-500">Orta seviye</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <span className="text-2xl">🌳</span>
                <p className="font-bold text-gray-700">3 Haneli</p>
                <p className="text-sm text-gray-500">İleri seviye</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <span className="text-2xl">🏔️</span>
                <p className="font-bold text-gray-700">4 Haneli</p>
                <p className="text-sm text-gray-500">Uzman seviye</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Test modu seçimi
  if (!testMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-100 to-sky-100 relative overflow-hidden">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <button
            onClick={() => setSelectedDifficulty(null)}
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg font-bold text-gray-700 hover:bg-gray-50 mb-6 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i> Geri
          </button>

          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-teal-200 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${operationLabels[selectedOperation].color} rounded-2xl shadow-lg`}>
                <span className="text-4xl">{operationLabels[selectedOperation].emoji}</span>
              </div>
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-lg">
                <span className="text-4xl">{difficultyLabels[selectedDifficulty].emoji}</span>
              </div>
            </div>
            <h1 className="text-3xl font-black text-gray-800 mb-2">
              {operationLabels[selectedOperation].label} - {difficultyLabels[selectedDifficulty].label}
            </h1>
            <p className="text-lg text-gray-600 font-semibold">Test modunu seç</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Normal Test Modu */}
            <div
              onClick={startNormalTest}
              className="relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-blue-200 hover:border-blue-400">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-6 text-center">
                  <span className="text-7xl">📝</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-black text-gray-800 mb-2">Normal Test</h3>
                  <p className="text-gray-600 font-semibold mb-4">
                    Kendi hızında çöz. Çoktan seçmeli, boşluk doldurma ve eşleştirme soruları.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-bold">
                    <span>{selectedDifficulty === 1 ? '10' : selectedDifficulty === 2 ? '15' : selectedDifficulty === 3 ? '20' : '25'} Soru</span>
                    <span>•</span>
                    <span>Süre Yok</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Süreye Karşı Yarış */}
            <div
              onClick={startSpeedTest}
              className="relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-red-200 hover:border-red-400">
                <div className="bg-gradient-to-br from-red-400 to-orange-500 p-6 text-center">
                  <span className="text-7xl">⏱️</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-black text-gray-800 mb-2">Süreye Karşı Yarış</h3>
                  <p className="text-gray-600 font-semibold mb-4">
                    60 saniyede kaç soru çözebilirsin? Hız ve doğruluk önemli!
                  </p>
                  <div className="flex items-center justify-center gap-2 text-red-600 font-bold">
                    <span>60 Saniye</span>
                    <span>•</span>
                    <span>Sınırsız Soru</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Countdown ekranı
  if (showCountdown) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-9xl font-black text-white animate-pulse mb-8">
            {countdown === 0 ? '🚀' : countdown}
          </div>
          <p className="text-2xl font-bold text-gray-400">Hazır ol!</p>
        </div>
      </div>
    );
  }

  // Süreye karşı yarış modu
  if (testMode === 'speed' && isSpeedPlaying) {
    return (
      <div className={`min-h-screen relative overflow-hidden transition-colors duration-200 ${
        speedFeedback === 'correct' ? 'bg-green-400' :
        speedFeedback === 'wrong' ? 'bg-red-400' :
        'bg-gradient-to-br from-orange-100 via-red-100 to-pink-100'
      }`}>
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          {/* Stats Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className={`text-center px-6 py-2 rounded-xl ${timeLeft <= 10 ? 'bg-red-100 animate-pulse' : 'bg-blue-100'}`}>
                <p className="text-sm font-bold text-gray-500">Süre</p>
                <p className={`text-3xl font-black ${timeLeft <= 10 ? 'text-red-600' : 'text-blue-600'}`}>{timeLeft}s</p>
              </div>

              <div className="text-center px-6 py-2 bg-orange-100 rounded-xl">
                <p className="text-sm font-bold text-gray-500">Puan</p>
                <p className="text-3xl font-black text-orange-600">{score}</p>
              </div>

              <div className="text-center px-6 py-2 bg-green-100 rounded-xl">
                <p className="text-sm font-bold text-gray-500">Doğru</p>
                <p className="text-3xl font-black text-green-600">{speedCorrect}</p>
              </div>

              <div className="text-center px-6 py-2 bg-red-100 rounded-xl">
                <p className="text-sm font-bold text-gray-500">Yanlış</p>
                <p className="text-3xl font-black text-red-600">{speedWrong}</p>
              </div>

              {streak > 0 && (
                <div className="text-center px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl">
                  <p className="text-sm font-bold text-white">Seri</p>
                  <p className="text-3xl font-black text-white">🔥 {streak}</p>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-1000 ${timeLeft <= 10 ? 'bg-red-500' : 'bg-blue-500'}`}
                style={{ width: `${(timeLeft / 60) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border-4 border-orange-200 text-center">
            <div className="mb-4">
              <span className={`text-sm font-bold px-4 py-1 rounded-full bg-gradient-to-r ${operationLabels[selectedOperation].color} text-white`}>
                {operationLabels[selectedOperation].label} • {difficultyLabels[selectedDifficulty].label}
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-8">
              {speedQuestion?.question}
            </h2>

            <input
              ref={inputRef}
              type="number"
              value={speedAnswer}
              onChange={(e) => setSpeedAnswer(e.target.value)}
              onKeyPress={handleSpeedKeyPress}
              className="w-full max-w-xs mx-auto text-center text-4xl font-black px-6 py-4 border-4 border-orange-300 rounded-2xl focus:outline-none focus:border-orange-500"
              placeholder="?"
              autoFocus
            />

            <button
              onClick={checkSpeedAnswer}
              className="w-full max-w-xs mx-auto mt-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-black text-xl shadow-lg hover:shadow-xl transition-all cursor-pointer block"
            >
              Cevapla! ⚡
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Sonuç ekranı
  if (showResult) {
    const totalQuestions = testMode === 'speed' ? (speedCorrect + speedWrong) : questions.length;
    const correctAnswers = testMode === 'speed' ? speedCorrect : Math.floor(score / 10);
    const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    const getStars = () => {
      if (percentage >= 90) return 5;
      if (percentage >= 75) return 4;
      if (percentage >= 60) return 3;
      if (percentage >= 40) return 2;
      return 1;
    };

    const stars = getStars();
    const emoji = stars >= 4 ? '🏆' : stars >= 3 ? '⭐' : stars >= 2 ? '👍' : '💪';
    const message = stars >= 4 ? 'Harika! Mükemmel bir performans!' :
                    stars >= 3 ? 'Çok iyi! Başarılı bir sonuç!' :
                    stars >= 2 ? 'İyi! Biraz daha pratik yapabilirsin.' :
                    'Devam et! Pratik yaparak gelişeceksin!';

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-100 to-sky-100 relative overflow-hidden">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border-4 border-yellow-200 text-center mb-8">
            <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-xl mx-auto mb-6 animate-bounce">
              <span className="text-7xl">{emoji}</span>
            </div>

            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
              {testMode === 'speed' ? 'Yarış Bitti!' : 'Test Tamamlandı!'}
            </h2>

            <p className="text-2xl font-bold text-gray-700 mb-6">{message}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-4">
                <div className="text-4xl font-black text-teal-600">{score}</div>
                <div className="text-sm font-bold text-gray-600">Puan</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4">
                <div className="text-4xl font-black text-green-600">{correctAnswers}</div>
                <div className="text-sm font-bold text-gray-600">Doğru</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4">
                <div className="text-4xl font-black text-orange-600">{bestStreak}</div>
                <div className="text-sm font-bold text-gray-600">En İyi Seri</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4">
                <div className="text-4xl font-black text-purple-600">%{percentage}</div>
                <div className="text-sm font-bold text-gray-600">Başarı</div>
              </div>
            </div>

            {/* Yıldızlar */}
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`text-4xl ${star <= stars ? '' : 'opacity-30'}`}>⭐</span>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => {
                  if (testMode === 'speed') {
                    startSpeedTest();
                  } else {
                    startNormalTest();
                  }
                }}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <i className="ri-refresh-line text-2xl"></i>
                <span className="text-lg font-bold whitespace-nowrap">Tekrar Dene</span>
              </button>

              <button
                onClick={resetTest}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <i className="ri-home-line text-2xl"></i>
                <span className="text-lg font-bold whitespace-nowrap">Testlere Dön</span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 md:p-10 text-center border-4 border-white">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-xl">
                <span className="text-4xl">🇹🇷</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-black text-white leading-relaxed italic">
              "Bir gün ulusu sizin gibi beni anlamış gençliğe bırakacağımdan çok memnun ve mesudum."
            </p>
            <p className="text-lg font-bold text-white/90 mt-4">
              - Mustafa Kemal Atatürk
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Normal test modu - soru ekranı
  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-100 to-sky-100 relative overflow-hidden">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-gray-700">
                Soru {currentQuestion + 1} / {questions.length}
              </span>
              <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${operationLabels[selectedOperation].color} text-white`}>
                {operationLabels[selectedOperation].label}
              </span>
              <span className="text-sm font-bold px-3 py-1 rounded-full bg-gray-200 text-gray-700">
                {difficultyLabels[selectedDifficulty].emoji} {difficultyLabels[selectedDifficulty].label}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-teal-600">
                Puan: {score}
              </span>
              {streak > 0 && (
                <span className="text-lg font-bold text-orange-500">
                  🔥 {streak}
                </span>
              )}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-teal-400 to-cyan-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border-4 border-teal-200">
          {currentQ.type === 'multiple' && (
            <MultipleChoice
              question={currentQ.question}
              options={currentQ.options || []}
              correct={currentQ.correct}
              onAnswer={handleAnswer}
            />
          )}

          {currentQ.type === 'fill' && (
            <FillInBlank
              question={currentQ.question}
              correct={currentQ.correct}
              onAnswer={handleAnswer}
            />
          )}

          {currentQ.type === 'matching' && (
            <Matching
              question={currentQ.question}
              pairs={currentQ.pairs || []}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </div>
    </div>
  );
}
