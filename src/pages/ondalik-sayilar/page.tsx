import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Confetti } from '../../components/ui/Confetti';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  hint?: string;
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
    title: 'Ondalık Sayıları Tanıyalım',
    description: 'Virgülün sırrını öğren!',
    icon: '🔢',
    color: 'from-blue-400 to-indigo-500',
    questions: [
      {
        id: 1,
        question: '0,5 sayısı hangi kesre eşittir?',
        options: ['1/2', '1/5', '5/10', '1/2 ve 5/10'],
        answer: '1/2 ve 5/10',
        explanation: '0,5 = 5/10 = 1/2. Yarım demek!'
      },
      {
        id: 2,
        question: '0,25 sayısının okunuşu nedir?',
        options: ['Sıfır virgül yirmi beş', 'Yirmi beş', 'İki virgül beş', 'Çeyrek'],
        answer: 'Sıfır virgül yirmi beş',
        explanation: '0,25 "sıfır virgül yirmi beş" diye okunur. Aynı zamanda 1/4 (çeyrek) demek!'
      },
      {
        id: 3,
        question: '3,7 sayısında virgülden sonraki basamağın adı nedir?',
        options: ['Onda birler', 'Birler', 'Onlar', 'Yüzde birler'],
        answer: 'Onda birler',
        explanation: 'Virgülden sonraki ilk basamak "onda birler" basamağıdır. 7 onda birler basamağında.'
      },
      {
        id: 4,
        question: '2,50 ile 2,5 eşit midir?',
        options: ['Evet', 'Hayır', '2,50 büyük', '2,5 büyük'],
        answer: 'Evet',
        explanation: 'Sondaki sıfırlar değeri değiştirmez. 2,50 = 2,5'
      },
      {
        id: 5,
        question: '0,1 sayısı neye eşittir?',
        options: ['1/10', '1/100', '10/1', '1/1'],
        answer: '1/10',
        explanation: '0,1 = 1/10 (onda bir) demek!'
      }
    ]
  },
  {
    id: 2,
    title: 'Ondalık Karşılaştırma',
    description: 'Hangisi büyük, hangisi küçük?',
    icon: '⚖️',
    color: 'from-purple-400 to-pink-500',
    questions: [
      {
        id: 1,
        question: 'Hangisi daha büyük: 0,7 mi yoksa 0,65 mi?',
        options: ['0,7', '0,65', 'Eşitler', 'Bilinemez'],
        answer: '0,7',
        explanation: '0,7 = 0,70 olarak düşün. 70 > 65 olduğu için 0,7 > 0,65'
      },
      {
        id: 2,
        question: 'Hangisi daha küçük: 0,3 mü yoksa 0,30 mu?',
        options: ['0,3', '0,30', 'Eşitler', '0,30 küçük'],
        answer: 'Eşitler',
        explanation: '0,3 = 0,30. Sondaki sıfır değeri değiştirmez!'
      },
      {
        id: 3,
        question: '1,5 ile 1,50 karşılaştır',
        options: ['1,5 büyük', '1,50 büyük', 'Eşitler', '1,5 < 1,50'],
        answer: 'Eşitler',
        explanation: '1,5 = 1,50. Sondaki sıfır sayının değerini değiştirmez.'
      },
      {
        id: 4,
        question: 'Hangisi daha büyük: 2,8 mi yoksa 2,75 mi?',
        options: ['2,8', '2,75', 'Eşitler', '2,75 büyük'],
        answer: '2,8',
        explanation: '2,8 = 2,80. 80 > 75 olduğundan 2,8 > 2,75'
      },
      {
        id: 5,
        question: '0,09 ile 0,1 karşılaştır',
        options: ['0,09 büyük', '0,1 büyük', 'Eşitler', 'Bilinemez'],
        answer: '0,1 büyük',
        explanation: '0,1 = 0,10. 10 > 09 olduğundan 0,1 > 0,09'
      }
    ]
  },
  {
    id: 3,
    title: 'Ondalık Toplama',
    description: 'Virgülleri hizala, topla!',
    icon: '➕',
    color: 'from-green-400 to-emerald-500',
    questions: [
      {
        id: 1,
        question: '0,3 + 0,4 = ?',
        options: ['0,7', '0,34', '7', '0,07'],
        answer: '0,7',
        explanation: '0,3 + 0,4 = 0,7. Virgülleri hizala ve topla!'
      },
      {
        id: 2,
        question: '1,5 + 2,3 = ?',
        options: ['3,8', '3,53', '38', '0,38'],
        answer: '3,8',
        explanation: '1,5 + 2,3 = 3,8'
      },
      {
        id: 3,
        question: '0,25 + 0,75 = ?',
        options: ['1', '0,100', '1,00', '1 ve 1,00'],
        answer: '1 ve 1,00',
        explanation: '0,25 + 0,75 = 1,00 = 1'
      },
      {
        id: 4,
        question: '2,5 + 0,5 = ?',
        options: ['3', '2,10', '3,0', '3 ve 3,0'],
        answer: '3 ve 3,0',
        explanation: '2,5 + 0,5 = 3,0 = 3'
      },
      {
        id: 5,
        question: '0,1 + 0,2 + 0,3 = ?',
        options: ['0,6', '0,123', '6', '0,06'],
        answer: '0,6',
        explanation: '0,1 + 0,2 + 0,3 = 0,6'
      }
    ]
  },
  {
    id: 4,
    title: 'Ondalık Çıkarma',
    description: 'Virgülleri hizala, çıkar!',
    icon: '➖',
    color: 'from-red-400 to-orange-500',
    questions: [
      {
        id: 1,
        question: '0,8 - 0,3 = ?',
        options: ['0,5', '0,83', '5', '0,05'],
        answer: '0,5',
        explanation: '0,8 - 0,3 = 0,5'
      },
      {
        id: 2,
        question: '3,5 - 1,2 = ?',
        options: ['2,3', '2,7', '23', '0,23'],
        answer: '2,3',
        explanation: '3,5 - 1,2 = 2,3'
      },
      {
        id: 3,
        question: '1 - 0,4 = ?',
        options: ['0,6', '0,4', '6', '0,96'],
        answer: '0,6',
        explanation: '1,0 - 0,4 = 0,6'
      },
      {
        id: 4,
        question: '5,0 - 2,5 = ?',
        options: ['2,5', '3,5', '25', '0,25'],
        answer: '2,5',
        explanation: '5,0 - 2,5 = 2,5'
      },
      {
        id: 5,
        question: '0,75 - 0,25 = ?',
        options: ['0,5', '0,50', '0,5 ve 0,50', '50'],
        answer: '0,5 ve 0,50',
        explanation: '0,75 - 0,25 = 0,50 = 0,5'
      }
    ]
  },
  {
    id: 5,
    title: 'Karışık Sorular',
    description: 'Tüm bilgilerini test et!',
    icon: '🏆',
    color: 'from-yellow-400 to-amber-500',
    questions: [
      {
        id: 1,
        question: 'Markette bir kalem 2,50 TL, silgi 0,75 TL. Toplam kaç TL?',
        options: ['3,25 TL', '2,75 TL', '3,50 TL', '2,55 TL'],
        answer: '3,25 TL',
        explanation: '2,50 + 0,75 = 3,25 TL'
      },
      {
        id: 2,
        question: '10 TL ile 6,50 TL\'lik bir şey aldın. Para üstü kaç TL?',
        options: ['3,50 TL', '4,50 TL', '3,00 TL', '16,50 TL'],
        answer: '3,50 TL',
        explanation: '10,00 - 6,50 = 3,50 TL'
      },
      {
        id: 3,
        question: '0,5 kg elma + 0,5 kg armut = ?',
        options: ['1 kg', '0,10 kg', '10 kg', '0,55 kg'],
        answer: '1 kg',
        explanation: '0,5 + 0,5 = 1 kg'
      },
      {
        id: 4,
        question: 'Bir şişe su 1,5 litre. 0,7 litre içildi. Kaç litre kaldı?',
        options: ['0,8 L', '2,2 L', '0,75 L', '1,2 L'],
        answer: '0,8 L',
        explanation: '1,5 - 0,7 = 0,8 litre'
      },
      {
        id: 5,
        question: '3 x 0,5 = ?',
        options: ['1,5', '0,15', '15', '3,5'],
        answer: '1,5',
        explanation: '3 × 0,5 = 1,5 (Üç tane yarım = bir buçuk)'
      }
    ]
  }
];

export default function OndalikSayilar() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('completedOndalikLevels');
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
        localStorage.setItem('completedOndalikLevels', JSON.stringify(newCompleted));
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

  if (quizComplete && selectedLevel) {
    const percentage = (score / (selectedLevel.questions.length * 20)) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center p-4">
        <Confetti trigger={true} type="celebration" />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border-4 border-blue-200"
        >
          <span className="text-7xl">{percentage >= 80 ? '🏆' : percentage >= 50 ? '⭐' : '💪'}</span>
          <h2 className="text-3xl font-black text-blue-600 mt-4 mb-2">
            {percentage >= 80 ? 'Mükemmel!' : percentage >= 50 ? 'İyi İş!' : 'Tekrar Dene!'}
          </h2>
          <p className="text-5xl font-black text-gray-800 my-4">{score} Puan</p>
          <p className="text-lg text-gray-600 mb-6">%{percentage.toFixed(0)} Başarı</p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => { setCurrentQuestion(0); setScore(0); setSelectedAnswer(null); setShowResult(false); setQuizComplete(false); }}
              className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold"
            >
              Tekrar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={resetQuiz}
              className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold"
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
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
        <Confetti trigger={showConfetti} type="stars" />
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <motion.button whileHover={{ scale: 1.1 }} onClick={resetQuiz} className="px-4 py-2 bg-white rounded-xl font-bold shadow">
              ← Geri
            </motion.button>
            <div className="flex gap-4">
              <div className="bg-white px-4 py-2 rounded-xl shadow">
                <span className="font-bold text-blue-600">{currentQuestion + 1}/{selectedLevel.questions.length}</span>
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
            className="bg-white rounded-3xl shadow-xl p-8 border-4 border-blue-200"
          >
            <div className={`bg-gradient-to-r ${selectedLevel.color} text-white p-4 rounded-2xl mb-6`}>
              <h3 className="text-xl font-bold">{selectedLevel.title}</h3>
            </div>

            <div className="text-center mb-6">
              <span className="text-6xl">🔢</span>
            </div>

            <p className="text-xl font-bold text-gray-800 text-center mb-6">{currentQ.question}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {currentQ.options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: showResult ? 1 : 1.03 }}
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
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-blue-100'
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
                  onClick={checkAnswer}
                  disabled={!selectedAnswer}
                  className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold disabled:opacity-50"
                >
                  Kontrol Et
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex">
          <Link to="/" className="hover:text-blue-600">🏠 Ana Sayfa</Link>
          <span>→</span>
          <span className="text-blue-600">🔢 Ondalık Sayılar</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-8 border-4 border-blue-200"
        >
          <div className="flex items-center gap-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl shadow-xl"
            >
              <span className="text-5xl">🔢</span>
            </motion.div>
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                Ondalık Sayılar
              </h1>
              <p className="text-lg text-gray-600">
                Virgülün büyüsünü keşfet! 0,5 nedir? 2,75 nasıl okunur? Hepsini öğren!
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
                <div className="absolute -top-2 -right-2 z-10 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow">✓</div>
              )}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white hover:border-blue-300 transition-all">
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

        {/* Konu Anlatımı Bölümü */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-blue-200">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 text-center">
            📚 Ondalık Sayılar Konu Anlatımı
          </h2>

          {/* Ondalık Sayı Nedir? */}
          <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
            <h3 className="text-2xl font-black text-blue-700 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg">1</span>
              Ondalık Sayı Nedir?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ondalık sayılar, <span className="font-bold text-blue-600">tam sayıların arasındaki değerleri</span> ifade etmek için kullanılır.
              Virgül (,) ile tam kısmı ve ondalık kısmı ayırırız.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-5xl font-black text-blue-600 mb-2">2<span className="text-red-500">,</span>5</div>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-blue-600">2</div>
                    <div className="text-gray-500">Tam kısım</div>
                  </div>
                  <div className="text-2xl text-red-500">,</div>
                  <div className="text-center">
                    <div className="font-bold text-indigo-600">5</div>
                    <div className="text-gray-500">Ondalık kısım</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="font-bold text-gray-700 mb-2">Günlük Hayattan Örnekler:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>🌡️ Vücut ısısı: <span className="font-bold">36,5</span> °C</li>
                  <li>💰 Ekmek fiyatı: <span className="font-bold">8,50</span> TL</li>
                  <li>📏 Boyum: <span className="font-bold">1,45</span> m</li>
                  <li>⚖️ Elma: <span className="font-bold">0,5</span> kg</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Basamak Değerleri */}
          <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <h3 className="text-2xl font-black text-purple-700 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg">2</span>
              Basamak Değerleri
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Virgülden sonraki her basamağın özel bir adı vardır:
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center gap-1 text-4xl font-black mb-6">
                <span className="text-gray-400">3</span>
                <span className="text-red-500">,</span>
                <span className="text-blue-600">4</span>
                <span className="text-green-600">7</span>
                <span className="text-orange-600">5</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <div className="text-2xl font-bold text-gray-400">3</div>
                  <div className="text-sm font-bold text-gray-600">Birler</div>
                </div>
                <div className="bg-blue-100 p-3 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">4</div>
                  <div className="text-sm font-bold text-blue-700">Onda birler</div>
                  <div className="text-xs text-gray-500">4/10</div>
                </div>
                <div className="bg-green-100 p-3 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">7</div>
                  <div className="text-sm font-bold text-green-700">Yüzde birler</div>
                  <div className="text-xs text-gray-500">7/100</div>
                </div>
                <div className="bg-orange-100 p-3 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">5</div>
                  <div className="text-sm font-bold text-orange-700">Binde birler</div>
                  <div className="text-xs text-gray-500">5/1000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Kesir - Ondalık Dönüşümü */}
          <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <h3 className="text-2xl font-black text-green-700 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg">3</span>
              Kesir ↔ Ondalık Dönüşümü
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Kesirler ve ondalık sayılar aynı değerleri farklı şekillerde gösterir:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <sup>1</sup>/<sub>2</sub>
                </div>
                <div className="text-2xl font-bold text-gray-700">=</div>
                <div className="text-3xl font-bold text-blue-600">0,5</div>
                <div className="text-sm text-gray-500 mt-1">Yarım</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <sup>1</sup>/<sub>4</sub>
                </div>
                <div className="text-2xl font-bold text-gray-700">=</div>
                <div className="text-3xl font-bold text-blue-600">0,25</div>
                <div className="text-sm text-gray-500 mt-1">Çeyrek</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <sup>3</sup>/<sub>4</sub>
                </div>
                <div className="text-2xl font-bold text-gray-700">=</div>
                <div className="text-3xl font-bold text-blue-600">0,75</div>
                <div className="text-sm text-gray-500 mt-1">Üç çeyrek</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <sup>1</sup>/<sub>10</sub>
                </div>
                <div className="text-2xl font-bold text-gray-700">=</div>
                <div className="text-3xl font-bold text-blue-600">0,1</div>
                <div className="text-sm text-gray-500 mt-1">Onda bir</div>
              </div>
            </div>
          </div>

          {/* Ondalık Toplama ve Çıkarma */}
          <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
            <h3 className="text-2xl font-black text-orange-700 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg">4</span>
              Toplama ve Çıkarma
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
              <p className="text-lg font-bold text-orange-600 mb-4">🔑 Altın Kural: Virgülleri alt alta hizala!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="font-bold text-green-600 mb-2">Toplama ➕</p>
                  <div className="bg-green-50 p-4 rounded-xl font-mono text-xl">
                    <div className="text-right">2,<span className="text-green-600">5</span>0</div>
                    <div className="text-right">+ 1,<span className="text-green-600">7</span>5</div>
                    <div className="border-t-2 border-green-400 pt-1 text-right font-bold">4,<span className="text-green-600">2</span>5</div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-bold text-red-600 mb-2">Çıkarma ➖</p>
                  <div className="bg-red-50 p-4 rounded-xl font-mono text-xl">
                    <div className="text-right">5,<span className="text-red-600">0</span>0</div>
                    <div className="text-right">- 2,<span className="text-red-600">3</span>5</div>
                    <div className="border-t-2 border-red-400 pt-1 text-right font-bold">2,<span className="text-red-600">6</span>5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ondalık Karşılaştırma */}
          <div className="mb-8 p-6 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl">
            <h3 className="text-2xl font-black text-cyan-700 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center text-lg">5</span>
              Karşılaştırma
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-4">Ondalık sayıları karşılaştırırken:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cyan-50 p-4 rounded-xl">
                  <p className="font-bold text-cyan-700 mb-2">1. Önce tam kısma bak</p>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-2xl font-bold text-blue-600">3,5</span>
                    <span className="text-2xl font-bold text-green-600">&gt;</span>
                    <span className="text-2xl font-bold text-red-600">2,9</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">3 &gt; 2 olduğu için</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-xl">
                  <p className="font-bold text-teal-700 mb-2">2. Tam kısım eşitse ondalık kısma bak</p>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-2xl font-bold text-blue-600">2,7</span>
                    <span className="text-2xl font-bold text-green-600">&gt;</span>
                    <span className="text-2xl font-bold text-red-600">2,65</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">2,70 &gt; 2,65 (70 &gt; 65)</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                <p className="font-bold text-yellow-700">💡 İpucu: Sondaki sıfırlar değeri değiştirmez!</p>
                <p className="text-gray-600">2,5 = 2,50 = 2,500</p>
              </div>
            </div>
          </div>

          {/* Eğlenceli Bilgiler */}
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
            <h3 className="text-2xl font-black text-yellow-700 mb-4 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              Biliyor Muydun?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow flex items-start gap-3">
                <span className="text-2xl">🏃</span>
                <p className="text-gray-700">Usain Bolt 100 metreyi <span className="font-bold text-blue-600">9,58</span> saniyede koştu. Bu dünya rekoru!</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow flex items-start gap-3">
                <span className="text-2xl">🥧</span>
                <p className="text-gray-700">Pi sayısı (π) <span className="font-bold text-blue-600">3,14159...</span> ile başlar ve sonsuza kadar gider!</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <p className="text-gray-700">Su <span className="font-bold text-blue-600">0</span> derecede donar, <span className="font-bold text-red-600">100</span> derecede kaynar.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow flex items-start gap-3">
                <span className="text-2xl">🌡️</span>
                <p className="text-gray-700">Normal vücut ısısı <span className="font-bold text-blue-600">36,5 - 37,5</span> °C arasındadır.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-xl p-8 text-center text-white">
          <p className="text-xl font-bold italic">"Sayılar evreni anlamamızın anahtarıdır."</p>
          <p className="mt-2 font-semibold">- Galileo Galilei</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
