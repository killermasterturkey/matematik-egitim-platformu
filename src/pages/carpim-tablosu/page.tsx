import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/feature/Header';
import { Confetti } from '../../components/ui/Confetti';
import { AnimatedCharacter, StarRating, AnimatedHearts } from '../../components/ui/AnimatedCharacter';
import { showCelebration, showEncouragement } from '../../components/ui/MessagePopup';

type ViewMode = 'table' | 'learn' | 'practice' | 'challenge';

export default function CarpimTablosu() {
  const [viewMode, setViewMode] = useState<ViewMode>('table');
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [highlightedCell, setHighlightedCell] = useState<{ row: number; col: number } | null>(null);

  // Practice mode state
  const [currentQuestion, setCurrentQuestion] = useState<{ a: number; b: number; answer: number } | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [practiceScore, setPracticeScore] = useState(0);
  const [practiceStreak, setPracticeStreak] = useState(0);
  const [practiceQuestionCount, setPracticeQuestionCount] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);

  // Challenge mode state
  const [challengeTimeLeft, setChallengeTimeLeft] = useState(60);
  const [challengeScore, setChallengeScore] = useState(0);
  const [challengeActive, setChallengeActive] = useState(false);
  const [challengeLives, setChallengeLives] = useState(3);
  const [challengeHighScore, setChallengeHighScore] = useState(0);

  // Learn mode state
  const [learnNumber, setLearnNumber] = useState(2);

  // Generate random question for practice
  const generateQuestion = useCallback((tableNumber?: number) => {
    const a = tableNumber || Math.floor(Math.random() * 9) + 2;
    const b = Math.floor(Math.random() * 9) + 2;
    return { a, b, answer: a * b };
  }, []);

  // Initialize practice question
  useEffect(() => {
    if (viewMode === 'practice' && !currentQuestion) {
      setCurrentQuestion(generateQuestion(selectedNumber || undefined));
    }
  }, [viewMode, currentQuestion, generateQuestion, selectedNumber]);

  // Challenge timer
  useEffect(() => {
    if (challengeActive && challengeTimeLeft > 0) {
      const timer = setTimeout(() => setChallengeTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (challengeActive && challengeTimeLeft === 0) {
      setChallengeActive(false);
      if (challengeScore > challengeHighScore) {
        setChallengeHighScore(challengeScore);
      }
    }
  }, [challengeActive, challengeTimeLeft, challengeScore, challengeHighScore]);

  const startChallenge = () => {
    setChallengeActive(true);
    setChallengeTimeLeft(60);
    setChallengeScore(0);
    setChallengeLives(3);
    setCurrentQuestion(generateQuestion());
    setUserAnswer('');
  };

  const checkAnswer = (isChallenge: boolean = false) => {
    if (!currentQuestion || !userAnswer) return;

    const isCorrect = parseInt(userAnswer) === currentQuestion.answer;

    if (isCorrect) {
      showCelebration();
      setShowCorrect(true);
      setTimeout(() => setShowCorrect(false), 500);

      if (isChallenge) {
        const points = 10 + Math.floor(challengeTimeLeft / 10);
        setChallengeScore(prev => prev + points);
      } else {
        setPracticeScore(prev => prev + 10);
        setPracticeStreak(prev => prev + 1);
      }
    } else {
      showEncouragement();
      setShowWrong(true);
      setTimeout(() => setShowWrong(false), 500);

      if (isChallenge) {
        setChallengeLives(prev => {
          if (prev <= 1) {
            setChallengeActive(false);
            return 0;
          }
          return prev - 1;
        });
      } else {
        setPracticeStreak(0);
      }
    }

    if (!isChallenge) {
      setPracticeQuestionCount(prev => prev + 1);
    }

    setUserAnswer('');
    setCurrentQuestion(generateQuestion(isChallenge ? undefined : selectedNumber || undefined));
  };


  const renderTable = () => (
    <div className="bg-white rounded-3xl shadow-2xl p-6 border-4 border-purple-200 overflow-x-auto">
      <h3 className="text-2xl font-black text-center text-purple-700 mb-4">
        İnteraktif Çarpım Tablosu
      </h3>

      <div className="grid grid-cols-11 gap-1 min-w-[600px]">
        {/* Header row */}
        <div className="bg-purple-600 text-white font-black p-3 rounded-lg text-center">×</div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
          <motion.div
            key={`header-${n}`}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedNumber(selectedNumber === n ? null : n)}
            className={`font-black p-3 rounded-lg text-center cursor-pointer transition-all ${
              selectedNumber === n
                ? 'bg-yellow-400 text-yellow-900 shadow-lg'
                : 'bg-purple-500 text-white hover:bg-purple-400'
            }`}
          >
            {n}
          </motion.div>
        ))}

        {/* Table body */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(row => (
          <>
            <motion.div
              key={`row-${row}`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedNumber(selectedNumber === row ? null : row)}
              className={`font-black p-3 rounded-lg text-center cursor-pointer transition-all ${
                selectedNumber === row
                  ? 'bg-yellow-400 text-yellow-900 shadow-lg'
                  : 'bg-purple-500 text-white hover:bg-purple-400'
              }`}
            >
              {row}
            </motion.div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(col => {
              const isHighlighted = selectedNumber && (row === selectedNumber || col === selectedNumber);
              const isIntersection = selectedNumber && row === selectedNumber && col === selectedNumber;
              const result = row * col;

              return (
                <motion.div
                  key={`cell-${row}-${col}`}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  onHoverStart={() => setHighlightedCell({ row, col })}
                  onHoverEnd={() => setHighlightedCell(null)}
                  className={`font-bold p-3 rounded-lg text-center cursor-pointer transition-all ${
                    isIntersection
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg scale-110'
                      : isHighlighted
                        ? 'bg-yellow-200 text-yellow-800'
                        : highlightedCell?.row === row && highlightedCell?.col === col
                          ? 'bg-purple-200 text-purple-800'
                          : 'bg-gray-100 hover:bg-purple-100'
                  }`}
                >
                  {result}
                </motion.div>
              );
            })}
          </>
        ))}
      </div>

      {selectedNumber && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-3 border-purple-200"
        >
          <h4 className="text-xl font-black text-purple-700 mb-3">
            {selectedNumber} Sayısının Çarpım Tablosu
          </h4>
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
              <motion.div
                key={n}
                whileHover={{ scale: 1.1 }}
                className="bg-white px-4 py-2 rounded-xl shadow cursor-pointer hover:bg-purple-50"
              >
                <span className="font-black text-purple-600">
                  {selectedNumber} × {n} = {selectedNumber * n}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );

  const renderLearnMode = () => (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-green-200">
      <div className="text-center mb-8">
        <AnimatedCharacter type="teaching" size="lg" message="Birlikte öğrenelim!" />
      </div>

      <h3 className="text-3xl font-black text-center text-green-700 mb-6">
        📚 Çarpım Tablosu Öğren
      </h3>

      <div className="flex justify-center gap-3 flex-wrap mb-8">
        {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
          <motion.button
            key={n}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLearnNumber(n)}
            className={`w-14 h-14 rounded-2xl font-black text-xl shadow-lg transition-all ${
              learnNumber === n
                ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-green-100'
            }`}
          >
            {n}
          </motion.button>
        ))}
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border-3 border-green-200">
        <h4 className="text-2xl font-black text-center text-green-700 mb-4">
          {learnNumber} Çarpım Tablosu
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.05 }}
              className="bg-white px-4 py-3 rounded-xl shadow hover:bg-green-50 text-center"
            >
              <p className="text-lg font-black text-gray-800">
                {learnNumber} × {n}
              </p>
              <p className="text-2xl font-black text-green-600">
                = {learnNumber * n}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Memory tips */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border-3 border-yellow-300">
        <h4 className="text-xl font-black text-orange-700 mb-3 flex items-center gap-2">
          <span className="text-2xl">💡</span> Kolay Hatırlama İpuçları
        </h4>
        <div className="space-y-2">
          {learnNumber === 2 && <p className="font-semibold text-gray-700">2 ile çarpma = Sayının 2 katı! Kendisiyle topla.</p>}
          {learnNumber === 5 && <p className="font-semibold text-gray-700">5 ile çarpma = Sonuç her zaman 0 veya 5 ile biter!</p>}
          {learnNumber === 9 && <p className="font-semibold text-gray-700">9 ile çarpma = Rakamlar toplamı her zaman 9! (18→1+8=9)</p>}
          {learnNumber === 10 && <p className="font-semibold text-gray-700">10 ile çarpma = Sonuna 0 ekle!</p>}
          {![2, 5, 9, 10].includes(learnNumber) && (
            <p className="font-semibold text-gray-700">
              Tekrar tekrar söyleyerek ezberle: "{learnNumber} çarpı 1 eşittir {learnNumber}, {learnNumber} çarpı 2 eşittir {learnNumber * 2}..."
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderPracticeMode = () => (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-blue-200">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 px-4 py-2 rounded-xl">
            <p className="text-xs font-bold text-gray-500">Puan</p>
            <p className="text-2xl font-black text-blue-600">{practiceScore}</p>
          </div>
          <div className="bg-green-100 px-4 py-2 rounded-xl">
            <p className="text-xs font-bold text-gray-500">Seri</p>
            <p className="text-2xl font-black text-green-600">🔥 {practiceStreak}</p>
          </div>
          <div className="bg-purple-100 px-4 py-2 rounded-xl">
            <p className="text-xs font-bold text-gray-500">Soru</p>
            <p className="text-2xl font-black text-purple-600">{practiceQuestionCount}</p>
          </div>
        </div>

        {selectedNumber && (
          <div className="bg-yellow-100 px-4 py-2 rounded-xl">
            <p className="text-sm font-bold text-yellow-700">
              Sadece {selectedNumber} tablosu
            </p>
          </div>
        )}
      </div>

      {/* Number selector */}
      <div className="mb-6">
        <p className="text-sm font-bold text-gray-500 mb-2">Tablo Seç (isteğe bağlı):</p>
        <div className="flex gap-2 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedNumber(null);
              setCurrentQuestion(generateQuestion());
            }}
            className={`px-4 py-2 rounded-xl font-bold ${!selectedNumber ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
          >
            Hepsi
          </motion.button>
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
            <motion.button
              key={n}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedNumber(n);
                setCurrentQuestion(generateQuestion(n));
              }}
              className={`px-4 py-2 rounded-xl font-bold ${selectedNumber === n ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
            >
              {n}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion?.a + '-' + currentQuestion?.b}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border-4 ${
          showCorrect ? 'border-green-500 bg-green-50' : showWrong ? 'border-red-500 bg-red-50' : 'border-blue-200'
        }`}
      >
        <p className="text-6xl font-black text-gray-800 mb-6">
          {currentQuestion?.a} × {currentQuestion?.b} = ?
        </p>

        <input
          type="number"
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && checkAnswer(false)}
          className="w-48 text-center text-4xl font-black px-6 py-4 border-4 border-blue-300 rounded-2xl focus:outline-none focus:border-blue-500"
          placeholder="?"
          autoFocus
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => checkAnswer(false)}
          className="block mx-auto mt-6 px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl font-black text-xl shadow-lg"
        >
          Kontrol Et ✨
        </motion.button>
      </motion.div>

      {/* Feedback */}
      <AnimatePresence>
        {showCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-center text-3xl text-green-600 font-black"
          >
            ✅ Harika! Doğru!
          </motion.div>
        )}
        {showWrong && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-center text-3xl text-red-600 font-black"
          >
            ❌ Doğru cevap: {currentQuestion?.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderChallengeMode = () => (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-200">
      {!challengeActive && challengeTimeLeft === 60 ? (
        <div className="text-center">
          <AnimatedCharacter type="excited" size="lg" message="Hazır mısın?" />

          <h3 className="text-3xl font-black text-orange-700 mt-6 mb-4">
            🏆 60 Saniye Meydan Okuması
          </h3>

          <p className="text-lg font-semibold text-gray-600 mb-6">
            60 saniyede en yüksek puanı topla! Her doğru cevap puan kazandırır.
            3 hakkın var, dikkatli ol!
          </p>

          {challengeHighScore > 0 && (
            <div className="bg-yellow-100 rounded-2xl p-4 mb-6 inline-block">
              <p className="text-sm font-bold text-gray-500">En Yüksek Skor</p>
              <p className="text-3xl font-black text-yellow-600">🏅 {challengeHighScore}</p>
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startChallenge}
            className="px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-black text-2xl shadow-lg"
          >
            🚀 Başla!
          </motion.button>
        </div>
      ) : !challengeActive ? (
        <div className="text-center">
          <Confetti trigger={true} type="celebration" />
          <AnimatedCharacter type={challengeScore > challengeHighScore ? 'celebrating' : 'happy'} size="lg" />

          <h3 className="text-3xl font-black text-orange-700 mt-6 mb-4">
            ⏱️ Süre Doldu!
          </h3>

          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 mb-6">
            <p className="text-5xl font-black text-orange-600 mb-2">{challengeScore}</p>
            <p className="text-lg font-bold text-gray-600">Toplam Puan</p>
          </div>

          <StarRating rating={challengeScore >= 300 ? 5 : challengeScore >= 200 ? 4 : challengeScore >= 100 ? 3 : 2} />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startChallenge}
            className="mt-6 px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-xl shadow-lg"
          >
            🔄 Tekrar Dene
          </motion.button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <motion.div
              animate={{ scale: challengeTimeLeft <= 10 ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.5, repeat: challengeTimeLeft <= 10 ? Infinity : 0 }}
              className={`bg-gradient-to-r ${challengeTimeLeft <= 10 ? 'from-red-500 to-red-600' : 'from-blue-500 to-indigo-500'} px-6 py-3 rounded-2xl shadow-lg`}
            >
              <p className="text-4xl font-black text-white">{challengeTimeLeft}s</p>
            </motion.div>

            <div className="bg-orange-100 px-6 py-3 rounded-2xl">
              <p className="text-sm font-bold text-gray-500">Puan</p>
              <p className="text-3xl font-black text-orange-600">{challengeScore}</p>
            </div>

            <AnimatedHearts count={challengeLives} />
          </div>

          <motion.div
            key={currentQuestion?.a + '-' + currentQuestion?.b}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center border-4 ${
              showCorrect ? 'border-green-500' : showWrong ? 'border-red-500' : 'border-orange-200'
            }`}
          >
            <p className="text-6xl font-black text-gray-800 mb-6">
              {currentQuestion?.a} × {currentQuestion?.b} = ?
            </p>

            <input
              type="number"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && checkAnswer(true)}
              className="w-48 text-center text-4xl font-black px-6 py-4 border-4 border-orange-300 rounded-2xl focus:outline-none focus:border-orange-500"
              placeholder="?"
              autoFocus
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => checkAnswer(true)}
              className="block mx-auto mt-6 px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-black text-xl shadow-lg"
            >
              Cevapla! ⚡
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['×', '=', '1', '2', '3', '4', '5'].map((char, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl font-black text-purple-200 opacity-30"
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity }}
            style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
          >
            {char}
          </motion.div>
        ))}
      </div>

      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex"
        >
          <Link to="/" className="hover:text-purple-600 cursor-pointer">🏠 Ana Sayfa</Link>
          <span className="text-xl">→</span>
          <span className="text-purple-600">✖️ Çarpım Tablosu</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-purple-200"
        >
          <div className="flex items-center gap-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-xl flex-shrink-0"
            >
              <span className="text-5xl">✖️</span>
            </motion.div>
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                Çarpım Tablosu Ustası
              </h1>
              <p className="text-lg font-semibold text-gray-600">
                İnteraktif tablo, şarkılı öğrenme ve eğlenceli yarışmalarla çarpım tablosunu öğren!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mode Selector */}
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          {[
            { id: 'table', label: '📊 Tablo', color: 'purple' },
            { id: 'learn', label: '📚 Öğren', color: 'green' },
            { id: 'practice', label: '✏️ Pratik', color: 'blue' },
            { id: 'challenge', label: '🏆 Yarışma', color: 'orange' }
          ].map(mode => (
            <motion.button
              key={mode.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode(mode.id as ViewMode)}
              className={`px-6 py-3 rounded-2xl font-black text-lg shadow-lg transition-all ${
                viewMode === mode.id
                  ? `bg-gradient-to-r from-${mode.color}-500 to-${mode.color}-600 text-white`
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {mode.label}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {viewMode === 'table' && renderTable()}
            {viewMode === 'learn' && renderLearnMode()}
            {viewMode === 'practice' && renderPracticeMode()}
            {viewMode === 'challenge' && renderChallengeMode()}
          </motion.div>
        </AnimatePresence>

        {/* Atatürk Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 text-center border-4 border-white"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-xl">
              <span className="text-3xl">🇹🇷</span>
            </div>
          </div>
          <p className="text-lg md:text-xl font-black text-white italic">
            "Hayatta en hakiki mürşit ilimdir."
          </p>
          <p className="text-base font-bold text-white/90 mt-2">
            - Mustafa Kemal Atatürk
          </p>
        </motion.div>
      </div>
    </div>
  );
}
