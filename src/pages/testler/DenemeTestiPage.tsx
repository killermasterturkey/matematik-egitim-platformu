import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { testQuestions, TestQuestion } from './data/testQuestions';

type Grade = 1 | 2 | 3 | 4;

interface TestResult {
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

const gradeColors = {
  1: { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-600', button: 'from-green-400 to-emerald-500', mascot: '🌱' },
  2: { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-600', button: 'from-blue-400 to-cyan-500', mascot: '🌿' },
  3: { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-600', button: 'from-purple-400 to-pink-500', mascot: '🌳' },
  4: { bg: 'bg-orange-100', border: 'border-orange-300', text: 'text-orange-600', button: 'from-orange-400 to-red-500', mascot: '🏔️' }
};

export default function DenemeTestiPage() {
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200);
  const [questionStartTime, setQuestionStartTime] = useState(0);
  const [streak, setStreak] = useState(0);

  const currentTest = selectedGrade ? testQuestions[selectedGrade] : [];
  const currentQuestion = currentTest[currentQuestionIndex];
  const colors = selectedGrade ? gradeColors[selectedGrade] : gradeColors[1];

  useEffect(() => {
    if (testStarted && !testCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTestComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [testStarted, testCompleted, timeLeft]);

  useEffect(() => {
    if (testStarted && !showFeedback) {
      setQuestionStartTime(Date.now());
    }
  }, [currentQuestionIndex, testStarted, showFeedback]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartTest = () => {
    setTestStarted(true);
    setCurrentQuestionIndex(0);
    setTestResults([]);
    setTimeLeft(1200);
    setStreak(0);
  };

  const handleAnswerSubmit = useCallback(() => {
    if (!userAnswer.trim() || showFeedback || !currentQuestion) return;

    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    const correct = userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase();

    setIsCorrect(correct);
    setShowFeedback(true);
    setStreak(correct ? streak + 1 : 0);

    const result: TestResult = {
      questionId: currentQuestion.id,
      userAnswer: userAnswer.trim(),
      isCorrect: correct,
      timeSpent
    };
    setTestResults(prev => [...prev, result]);

    setTimeout(() => {
      if (currentQuestionIndex < currentTest.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setUserAnswer('');
        setShowFeedback(false);
      } else {
        handleTestComplete();
      }
    }, 2000);
  }, [userAnswer, showFeedback, currentQuestion, currentQuestionIndex, currentTest.length, questionStartTime, streak]);

  const handleTestComplete = useCallback(() => {
    setTestCompleted(true);
  }, []);

  const calculateScore = () => {
    if (testResults.length === 0) return 0;
    const correctAnswers = testResults.filter(r => r.isCorrect).length;
    return Math.round((correctAnswers / testResults.length) * 100);
  };

  const getPerformanceAnalysis = () => {
    const score = calculateScore();
    const correctAnswers = testResults.filter(r => r.isCorrect).length;
    const wrongAnswers = testResults.length - correctAnswers;
    const avgTime = testResults.length > 0 ? testResults.reduce((sum, r) => sum + r.timeSpent, 0) / testResults.length : 0;

    let message = '', stars = 0, emoji = '';
    if (score >= 90) { message = 'Muhtemel! Sen bir matematik yildizisi!'; stars = 5; emoji = '🏆'; }
    else if (score >= 80) { message = 'Harika! Cok iyi bir performans!'; stars = 4; emoji = '🌟'; }
    else if (score >= 70) { message = 'Guzel! Basarili bir sonuc!'; stars = 3; emoji = '👍'; }
    else if (score >= 50) { message = 'Iyi! Biraz daha calisarak daha iyi olabilirsin!'; stars = 2; emoji = '💪'; }
    else { message = 'Daha cok pratik yapman gerekiyor. Vazgecme!'; stars = 1; emoji = '📚'; }

    return { score, correctAnswers, wrongAnswers, avgTime, message, stars, emoji };
  };

  // Sinif secimi ekrani
  if (!selectedGrade) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">📝 Deneme Testleri</h1>
            <p className="text-xl text-gray-700 font-bold">Sinifini sec ve bilgini test et!</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {([1, 2, 3, 4] as Grade[]).map((grade, index) => {
              const c = gradeColors[grade];
              return (
                <motion.div
                  key={grade}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setSelectedGrade(grade)}
                  className={`${c.bg} ${c.border} border-4 rounded-3xl p-8 cursor-pointer shadow-xl hover:shadow-2xl transition-all`}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{c.mascot}</div>
                    <h2 className={`text-3xl font-black ${c.text} mb-2`}>{grade}. Sinif</h2>
                    <p className="text-lg font-bold text-gray-700 mb-4">20 Soru - 20 Dakika</p>
                    <div className={`inline-flex px-6 py-3 rounded-full bg-gradient-to-r ${c.button} text-white font-bold text-lg`}>Teste Basla</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-black text-gray-800 mb-4 text-center">ℹ️ Test Hakkinda</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><span className="text-2xl">📝</span><span className="text-lg text-gray-700">Her testte 20 soru bulunur</span></li>
              <li className="flex items-start gap-3"><span className="text-2xl">⏱️</span><span className="text-lg text-gray-700">Test suresi 20 dakikadir</span></li>
              <li className="flex items-start gap-3"><span className="text-2xl">🎯</span><span className="text-lg text-gray-700">Coktan secmeli, bosluk doldurma ve dogru/yanlis sorulari icerir</span></li>
              <li className="flex items-start gap-3"><span className="text-2xl">⭐</span><span className="text-lg text-gray-700">Test sonunda detayli analiz ve yanlis cevaplari gorebilirsin</span></li>
            </ul>
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/testler" className="text-purple-600 font-bold hover:underline">← Testler Sayfasina Don</Link>
          </div>
        </div>
      </div>
    );
  }

  // Test baslangic ekrani
  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className={`${colors.bg} ${colors.border} border-4 rounded-3xl p-12 shadow-2xl`}>
            <div className="text-center">
              <div className="text-8xl mb-6">{colors.mascot}</div>
              <h1 className={`text-4xl font-black ${colors.text} mb-4`}>{selectedGrade}. Sinif Deneme Testi</h1>

              <div className="bg-white rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div><div className="text-4xl mb-2">📝</div><div className="text-2xl font-black text-gray-800">20</div><div className="text-sm text-gray-600">Soru</div></div>
                  <div><div className="text-4xl mb-2">⏱️</div><div className="text-2xl font-black text-gray-800">20</div><div className="text-sm text-gray-600">Dakika</div></div>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedGrade(null)} className="flex-1 px-8 py-4 rounded-2xl bg-gray-300 text-gray-700 font-bold text-xl">← Geri</motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleStartTest} className={`flex-1 px-8 py-4 rounded-2xl text-white font-bold text-xl bg-gradient-to-r ${colors.button} shadow-lg`}>🚀 Teste Basla</motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Test tamamlandi ekrani
  if (testCompleted) {
    const analysis = getPerformanceAnalysis();
    const wrongQuestions = testResults.filter(r => !r.isCorrect);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-12 shadow-2xl mb-8">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{analysis.emoji}</div>
              <h1 className="text-4xl font-black text-gray-800 mb-4">Test Tamamlandi!</h1>
              <p className="text-2xl font-bold text-gray-600 mb-6">{analysis.message}</p>

              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-4xl ${i < analysis.stars ? '' : 'opacity-30'}`}>⭐</span>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white mb-8">
                <div className="text-6xl font-black mb-2">%{analysis.score}</div>
                <div className="text-xl font-bold">Basari Puanin</div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className={`${colors.bg} rounded-2xl p-4`}><div className="text-3xl mb-2">✅</div><div className="text-2xl font-black text-gray-800">{analysis.correctAnswers}</div><div className="text-sm text-gray-600">Dogru</div></div>
                <div className={`${colors.bg} rounded-2xl p-4`}><div className="text-3xl mb-2">❌</div><div className="text-2xl font-black text-gray-800">{analysis.wrongAnswers}</div><div className="text-sm text-gray-600">Yanlis</div></div>
                <div className={`${colors.bg} rounded-2xl p-4`}><div className="text-3xl mb-2">⏱️</div><div className="text-2xl font-black text-gray-800">{Math.round(analysis.avgTime)}s</div><div className="text-sm text-gray-600">Ort. Sure</div></div>
              </div>
            </div>

            {wrongQuestions.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2"><span>📚</span><span>Yanlis Cevapladigin Sorular</span></h2>
                <div className="space-y-4">
                  {wrongQuestions.map((result, index) => {
                    const question = currentTest.find(q => q.id === result.questionId);
                    if (!question) return null;
                    return (
                      <motion.div key={result.questionId} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                        <div className="font-bold text-gray-800 mb-3">{index + 1}. {question.question}</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                          <div className="flex items-center gap-2"><span className="text-red-500 font-bold">Senin Cevabin:</span><span className="bg-red-100 px-3 py-1 rounded-lg font-bold text-red-700">{result.userAnswer || 'Bos'}</span></div>
                          <div className="flex items-center gap-2"><span className="text-green-500 font-bold">Dogru Cevap:</span><span className="bg-green-100 px-3 py-1 rounded-lg font-bold text-green-700">{question.correctAnswer}</span></div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400"><span className="text-blue-700 font-bold">💡 Aciklama: </span><span className="text-gray-700">{question.explanation}</span></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { setSelectedGrade(null); setTestStarted(false); setTestCompleted(false); setCurrentQuestionIndex(0); setTestResults([]); }} className="flex-1 px-8 py-4 rounded-2xl bg-gray-300 text-gray-700 font-bold text-xl">🏠 Ana Menu</motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { setTestStarted(false); setTestCompleted(false); setCurrentQuestionIndex(0); setTestResults([]); }} className={`flex-1 px-8 py-4 rounded-2xl text-white font-bold text-xl bg-gradient-to-r ${colors.button}`}>🔄 Tekrar Dene</motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Test ekrani
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Ust bilgi paneli */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl p-6 shadow-xl mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{colors.mascot}</div>
              <div><div className="text-sm text-gray-600">Soru</div><div className="text-2xl font-black text-gray-800">{currentQuestionIndex + 1} / {currentTest.length}</div></div>
            </div>
            <div className={`px-6 py-3 rounded-full ${timeLeft < 60 ? 'bg-red-100' : colors.bg}`}>
              <div className="text-sm text-gray-600 text-center">Kalan Sure</div>
              <div className={`text-2xl font-black ${timeLeft < 60 ? 'text-red-600' : colors.text}`}>{formatTime(timeLeft)}</div>
            </div>
            {streak >= 2 && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-gradient-to-r from-orange-400 to-red-500 px-6 py-3 rounded-full">
                <div className="text-white font-black text-xl flex items-center gap-2"><span>🔥</span><span>{streak} Seri!</span></div>
              </motion.div>
            )}
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${((currentQuestionIndex) / currentTest.length) * 100}%` }} className="h-full bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
        </motion.div>

        {/* Soru karti */}
        <AnimatePresence mode="wait">
          <motion.div key={currentQuestionIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-4 py-2 rounded-full ${colors.bg} ${colors.text} font-bold`}>{currentQuestion.topic}</span>
                <span className={`px-4 py-2 rounded-full ${currentQuestion.difficulty === 1 ? 'bg-green-100 text-green-600' : currentQuestion.difficulty === 2 ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'} font-bold`}>{currentQuestion.difficulty === 1 ? '🟢 Kolay' : currentQuestion.difficulty === 2 ? '🟡 Orta' : '🔴 Zor'}</span>
              </div>
              <h2 className="text-3xl font-black text-gray-800 mb-6">{currentQuestion.question}</h2>
            </div>

            {/* Coktan secmeli */}
            {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = userAnswer === option;
                  const isCorrectOption = option === currentQuestion.correctAnswer;
                  const showCorrect = showFeedback && isCorrectOption;
                  const showWrong = showFeedback && isSelected && !isCorrectOption;
                  return (
                    <motion.button key={index} whileHover={{ scale: showFeedback ? 1 : 1.02 }} whileTap={{ scale: showFeedback ? 1 : 0.98 }} onClick={() => !showFeedback && setUserAnswer(option)} disabled={showFeedback}
                      className={`p-6 rounded-2xl font-bold text-xl transition-all border-4 ${showCorrect ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white border-green-600' : showWrong ? 'bg-gradient-to-br from-red-400 to-pink-500 text-white border-red-600' : isSelected ? `bg-gradient-to-br ${colors.button} text-white ${colors.border}` : `bg-gray-50 text-gray-800 border-gray-300 hover:${colors.border}`}`}>
                      <div className="flex items-center justify-between"><span>{option}</span>{showCorrect && <span className="text-3xl">✅</span>}{showWrong && <span className="text-3xl">❌</span>}</div>
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Bosluk doldurma */}
            {currentQuestion.type === 'fill-blank' && (
              <div className="mb-6">
                <input type="text" value={userAnswer} onChange={(e) => !showFeedback && setUserAnswer(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleAnswerSubmit()} disabled={showFeedback} placeholder="Cevabini yaz..."
                  className={`w-full px-6 py-4 text-2xl font-bold text-center border-4 rounded-2xl focus:outline-none transition-all ${showFeedback ? isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50' : `${colors.border}`}`} />
              </div>
            )}

            {/* Dogru/Yanlis */}
            {currentQuestion.type === 'true-false' && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                {['Dogru', 'Yanlis'].map((option) => {
                  const isSelected = userAnswer === option;
                  const isCorrectOption = option === currentQuestion.correctAnswer;
                  const showCorrect = showFeedback && isCorrectOption;
                  const showWrong = showFeedback && isSelected && !isCorrectOption;
                  return (
                    <motion.button key={option} whileHover={{ scale: showFeedback ? 1 : 1.02 }} whileTap={{ scale: showFeedback ? 1 : 0.98 }} onClick={() => !showFeedback && setUserAnswer(option)} disabled={showFeedback}
                      className={`p-8 rounded-2xl font-bold text-2xl transition-all border-4 ${showCorrect ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white border-green-600' : showWrong ? 'bg-gradient-to-br from-red-400 to-pink-500 text-white border-red-600' : isSelected ? `bg-gradient-to-br ${colors.button} text-white ${colors.border}` : `bg-gray-50 text-gray-800 border-gray-300`}`}>
                      <div className="flex flex-col items-center gap-2"><span className="text-4xl">{option === 'Dogru' ? '✅' : '❌'}</span><span>{option}</span></div>
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Geri bildirim */}
            {showFeedback && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`p-6 rounded-2xl mb-6 ${isCorrect ? 'bg-green-100' : 'bg-orange-100'}`}>
                <div className={`text-xl font-bold mb-2 ${isCorrect ? 'text-green-800' : 'text-orange-800'}`}>{isCorrect ? '🎉 Harika! Dogru cevap!' : '💪 Yanlis cevap!'}</div>
                <div className="text-gray-700"><span className="font-bold">💡 Aciklama: </span>{currentQuestion.explanation}</div>
                {!isCorrect && (<div className="mt-2 text-gray-700"><span className="font-bold">✅ Dogru cevap: </span><span className="font-black text-green-600">{currentQuestion.correctAnswer}</span></div>)}
              </motion.div>
            )}

            {/* Cevap gonder butonu */}
            {!showFeedback && userAnswer && (
              <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleAnswerSubmit}
                className={`w-full px-8 py-4 rounded-2xl font-bold text-xl bg-gradient-to-r ${colors.button} text-white shadow-lg hover:shadow-xl`}>
                ✅ Cevabi Gonder
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
