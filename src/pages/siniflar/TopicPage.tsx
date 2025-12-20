import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Volume2,
  Star,
  Trophy,
  Home,
  RotateCcw,
  Target,
  Sparkles
} from 'lucide-react';
import Header from '../../components/feature/Header';
import {
  gradeColors,
  getRandomMotivation,
  GradeCurriculum,
  CURRICULUM_PROGRESS_KEY,
  difficultyLabels,
  Topic,
  Theme
} from '../../data/curriculum/types';
import confetti from 'canvas-confetti';

// Müfredat verilerini import et
import { grade1Curriculum } from '../../data/curriculum/grade1';
import { grade2Curriculum } from '../../data/curriculum/grade2';
import { grade3Curriculum } from '../../data/curriculum/grade3';
import { grade4Curriculum } from '../../data/curriculum/grade4';

const curriculumData: { [key: number]: GradeCurriculum } = {
  1: grade1Curriculum,
  2: grade2Curriculum,
  3: grade3Curriculum,
  4: grade4Curriculum,
};

// Kutlama fonksiyonları
const celebrate = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
};

const celebrateBig = () => {
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};

export default function TopicPage() {
  const { grade, konuId } = useParams<{ grade: string; konuId: string }>();
  const navigate = useNavigate();
  const gradeNum = parseInt(grade || '1') as 1 | 2 | 3 | 4;
  const colors = gradeColors[gradeNum];
  const curriculum = curriculumData[gradeNum];

  // Konuyu bul
  let topic: Topic | undefined;
  let theme: Theme | undefined;
  let topicIndex = -1;
  let allTopicsInTheme: Topic[] = [];

  curriculum?.themes.forEach(t => {
    const idx = t.topics.findIndex(tp => tp.id === konuId);
    if (idx !== -1) {
      topic = t.topics[idx];
      theme = t;
      topicIndex = idx;
      allTopicsInTheme = t.topics;
    }
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showPractice, setShowPractice] = useState(false);
  const [practiceAnswers, setPracticeAnswers] = useState<{ [key: string]: string }>({});
  const [practiceResults, setPracticeResults] = useState<{ [key: string]: boolean }>({});
  const [showResults, setShowResults] = useState(false);
  const [expandedVisual, setExpandedVisual] = useState<number | null>(null);
  const [motivation] = useState(getRandomMotivation());
  const [mascotMood, setMascotMood] = useState<'happy' | 'thinking' | 'celebrating'>('happy');

  useEffect(() => {
    // Sayfaya giriş animasyonu
    window.scrollTo(0, 0);
  }, [konuId]);

  if (!topic || !theme) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Konu bulunamadı...</p>
          <Link to={`/sinif/${gradeNum}`}>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-xl font-bold">
              Geri Dön
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const content = topic.content;
  const totalSteps = content.steps.length;
  const currentStepData = content.steps[currentStep];
  const difficultyInfo = difficultyLabels[topic.difficulty];

  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
      setExpandedVisual(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowPractice(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setExpandedVisual(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setPracticeAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleCheckAnswers = () => {
    const results: { [key: string]: boolean } = {};
    let correctCount = 0;

    content.practiceQuestions.forEach(q => {
      const userAnswer = practiceAnswers[q.id]?.trim().toLowerCase();
      const correct = Array.isArray(q.correctAnswer)
        ? q.correctAnswer.some(a => a.toLowerCase() === userAnswer)
        : q.correctAnswer.toLowerCase() === userAnswer;
      results[q.id] = correct;
      if (correct) correctCount++;
    });

    setPracticeResults(results);
    setShowResults(true);

    const score = Math.round((correctCount / content.practiceQuestions.length) * 100);

    if (score >= 70) {
      celebrate();
      setMascotMood('celebrating');
      // İlerlemeyi kaydet
      saveProgress(score);
    }

    if (score === 100) {
      celebrateBig();
    }
  };

  const saveProgress = (score: number) => {
    const savedProgress = localStorage.getItem(CURRICULUM_PROGRESS_KEY);
    const allProgress = savedProgress ? JSON.parse(savedProgress) : {};

    if (!allProgress[gradeNum]) allProgress[gradeNum] = {};
    if (!allProgress[gradeNum][theme!.id]) allProgress[gradeNum][theme!.id] = {};

    allProgress[gradeNum][theme!.id][topic!.id] = {
      completed: true,
      score,
      lastAttempt: new Date().toISOString(),
      attempts: (allProgress[gradeNum][theme!.id][topic!.id]?.attempts || 0) + 1
    };

    localStorage.setItem(CURRICULUM_PROGRESS_KEY, JSON.stringify(allProgress));
  };

  const handleRetry = () => {
    setPracticeAnswers({});
    setPracticeResults({});
    setShowResults(false);
    setMascotMood('happy');
  };

  const handleNextTopic = () => {
    if (topicIndex < allTopicsInTheme.length - 1) {
      navigate(`/sinif/${gradeNum}/konu/${allTopicsInTheme[topicIndex + 1].id}`);
    } else {
      navigate(`/sinif/${gradeNum}/tema/${theme!.id}`);
    }
  };

  const correctCount = Object.values(practiceResults).filter(Boolean).length;
  const score = content.practiceQuestions.length > 0
    ? Math.round((correctCount / content.practiceQuestions.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {topic.emoji}
          </motion.div>
        ))}
      </div>

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-4 text-sm flex-wrap">
          <Link to="/" className="text-gray-500 hover:text-gray-700 font-semibold">Ana Sayfa</Link>
          <span className="text-gray-400">/</span>
          <Link to={`/sinif/${gradeNum}`} className={`${colors.text} hover:underline font-semibold`}>{colors.name}</Link>
          <span className="text-gray-400">/</span>
          <Link to={`/sinif/${gradeNum}/tema/${theme.id}`} className={`${theme.textColor} hover:underline font-semibold`}>{theme.title}</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-700 font-bold">{topic.title}</span>
        </div>

        {/* Topic Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${theme.bgColor} rounded-3xl p-6 mb-6 border-4 ${theme.borderColor} shadow-xl relative overflow-hidden`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-10`}></div>

          <div className="relative flex items-center gap-4">
            {/* Topic Icon */}
            <motion.div
              animate={{
                y: mascotMood === 'celebrating' ? [0, -10, 0] : [0, -5, 0],
                rotate: mascotMood === 'celebrating' ? [0, 10, -10, 0] : 0
              }}
              transition={{ duration: mascotMood === 'celebrating' ? 0.5 : 2, repeat: Infinity }}
              className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${theme.color} rounded-2xl shadow-lg flex-shrink-0`}
            >
              <span className="text-4xl">{topic.emoji}</span>
            </motion.div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className={`text-xs font-bold ${theme.textColor} bg-white/80 px-2 py-0.5 rounded-full`}>
                  Konu {topicIndex + 1}
                </span>
                <span className={`text-xs font-bold ${difficultyInfo.color}`}>
                  {difficultyInfo.emoji} {difficultyInfo.label}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-800">
                {topic.title}
              </h1>
              <p className="text-sm text-gray-600 font-medium mt-1">
                {topic.description}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          {!showPractice && (
            <div className="relative mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-600">Ders İlerlemesi</span>
                <span className={`text-xs font-bold ${theme.textColor}`}>
                  {currentStep + 1} / {totalSteps}
                </span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className={`h-full bg-gradient-to-r ${theme.color} rounded-full`}
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Motivation Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 rounded-xl p-3 mb-6 text-center border-2 border-yellow-200"
        >
          <p className="text-sm font-bold text-gray-700">{content.motivationQuote}</p>
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {!showPractice ? (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Introduction (only on first step) */}
              {currentStep === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 mb-6 border-2 border-gray-200 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-4xl"
                    >
                      {colors.mascot}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-black text-gray-800 mb-2 flex items-center gap-2">
                        <Sparkles className={`w-5 h-5 ${theme.textColor}`} />
                        Merhaba!
                      </h3>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {content.introduction}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Current Step */}
              <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-gray-200 shadow-lg">
                {/* Step Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 flex items-center justify-center bg-gradient-to-br ${theme.color} rounded-xl text-white font-black text-lg`}>
                    {currentStep + 1}
                  </div>
                  <h2 className="text-xl font-black text-gray-800">
                    {currentStepData.title}
                  </h2>
                </div>

                {/* Step Content */}
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                    {currentStepData.content}
                  </p>
                </div>

                {/* Visual Demo */}
                {currentStepData.visual && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setExpandedVisual(expandedVisual === currentStep ? null : currentStep)}
                    className={`${theme.bgColor} rounded-xl p-6 mb-6 border-2 ${theme.borderColor} cursor-pointer transition-all`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Target className={`w-5 h-5 ${theme.textColor}`} />
                      <span className="font-bold text-gray-700">Görsel Örnek</span>
                      <span className="text-xs text-gray-500">(Büyütmek için tıkla)</span>
                    </div>
                    <div className={`text-center font-mono text-lg ${expandedVisual === currentStep ? 'text-2xl' : ''} whitespace-pre-wrap transition-all`}>
                      {currentStepData.visual}
                    </div>
                  </motion.div>
                )}

                {/* Explanation */}
                {currentStepData.explanation && (
                  <div className="bg-amber-50 rounded-xl p-4 mb-6 border-2 border-amber-200">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-700 block mb-1">Hatırla!</span>
                        <p className="text-amber-800 font-medium">{currentStepData.explanation}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tip */}
                {currentStepData.tip && (
                  <div className="bg-green-50 rounded-xl p-4 mb-6 border-2 border-green-200">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <span className="font-bold text-green-700 block mb-1">İpucu</span>
                        <p className="text-green-800 font-medium">{currentStepData.tip}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Examples */}
                {currentStepData.examples && currentStepData.examples.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-black text-gray-800 flex items-center gap-2">
                      <BookOpen className={`w-5 h-5 ${theme.textColor}`} />
                      Örnekler
                    </h3>
                    {currentStepData.examples.map((example, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200"
                      >
                        <p className="font-bold text-gray-800 mb-2">
                          Soru: {example.question}
                        </p>
                        {example.visual && (
                          <p className="text-2xl text-center my-3">{example.visual}</p>
                        )}
                        <div className={`${theme.bgColor} rounded-lg p-3 border ${theme.borderColor}`}>
                          <p className={`font-bold ${theme.textColor}`}>
                            Cevap: {example.answer}
                          </p>
                          {example.steps && (
                            <div className="mt-2 space-y-1">
                              {example.steps.map((step, j) => (
                                <p key={j} className="text-sm text-gray-600">
                                  {j + 1}. {step}
                                </p>
                              ))}
                            </div>
                          )}
                          {example.explanation && (
                            <p className="text-sm text-gray-600 mt-2 italic">
                              {example.explanation}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Audio Text (for text-to-speech) */}
                {currentStepData.audio && (
                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                    <Volume2 className="w-4 h-4" />
                    <span className="italic">Sesli anlatım metni mevcut</span>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevStep}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all ${
                    currentStep === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Önceki
                </motion.button>

                <motion.button
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextStep}
                  className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${theme.color} rounded-xl font-bold text-white shadow-lg`}
                >
                  {currentStep < totalSteps - 1 ? 'Sonraki' : 'Alıştırmalara Geç'}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ) : (
            /* Practice Questions */
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <h2 className="text-2xl font-black text-gray-800 mb-2 flex items-center gap-2">
                  <Target className={`w-6 h-6 ${theme.textColor}`} />
                  Alıştırma Zamanı!
                </h2>
                <p className="text-gray-600 font-medium">
                  Şimdi öğrendiklerini test edelim. {content.practiceQuestions.length} soru seni bekliyor!
                </p>
              </div>

              {content.practiceQuestions.map((q, i) => (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white rounded-xl p-5 border-2 ${
                    showResults
                      ? practiceResults[q.id]
                        ? 'border-green-300 bg-green-50'
                        : 'border-red-300 bg-red-50'
                      : 'border-gray-200'
                  } shadow-md transition-all`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-white ${
                      showResults
                        ? practiceResults[q.id]
                          ? 'bg-green-500'
                          : 'bg-red-500'
                        : `bg-gradient-to-r ${theme.color}`
                    }`}>
                      {showResults ? (
                        practiceResults[q.id] ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />
                      ) : (
                        i + 1
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-lg">{q.question}</p>
                      {q.visual && (
                        <p className="text-2xl text-center my-3">{q.visual}</p>
                      )}
                    </div>
                  </div>

                  {q.type === 'multiple-choice' && q.options ? (
                    <div className="grid grid-cols-2 gap-3">
                      {q.options.map((option, j) => (
                        <motion.button
                          key={j}
                          whileHover={{ scale: showResults ? 1 : 1.02 }}
                          whileTap={{ scale: showResults ? 1 : 0.98 }}
                          onClick={() => !showResults && handleAnswerChange(q.id, option)}
                          disabled={showResults}
                          className={`p-3 rounded-xl font-bold text-left transition-all ${
                            showResults
                              ? option.toLowerCase() === (Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer).toLowerCase()
                                ? 'bg-green-200 border-2 border-green-400'
                                : practiceAnswers[q.id] === option
                                  ? 'bg-red-200 border-2 border-red-400'
                                  : 'bg-gray-100 border-2 border-gray-200'
                              : practiceAnswers[q.id] === option
                                ? `bg-gradient-to-r ${theme.color} text-white border-2 border-transparent`
                                : 'bg-gray-100 hover:bg-gray-200 border-2 border-gray-200'
                          }`}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={practiceAnswers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      disabled={showResults}
                      placeholder="Cevabını yaz..."
                      className={`w-full p-3 rounded-xl border-2 font-bold text-lg ${
                        showResults
                          ? practiceResults[q.id]
                            ? 'border-green-400 bg-green-100'
                            : 'border-red-400 bg-red-100'
                          : 'border-gray-300 focus:border-purple-400'
                      } outline-none transition-all`}
                    />
                  )}

                  {showResults && !practiceResults[q.id] && (
                    <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-sm font-bold text-amber-700">
                        Doğru cevap: {Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer}
                      </p>
                      <p className="text-sm text-amber-600 mt-1">{q.explanation}</p>
                    </div>
                  )}

                  {showResults && practiceResults[q.id] && (
                    <div className="mt-3 p-3 bg-green-100 rounded-lg border border-green-200">
                      <p className="text-sm font-bold text-green-700 flex items-center gap-1">
                        <Star className="w-4 h-4" /> Harika! Doğru cevap!
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Results & Actions */}
              {!showResults ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckAnswers}
                  disabled={Object.keys(practiceAnswers).length < content.practiceQuestions.length}
                  className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all ${
                    Object.keys(practiceAnswers).length < content.practiceQuestions.length
                      ? 'bg-gray-400 cursor-not-allowed'
                      : `bg-gradient-to-r ${theme.color} hover:opacity-90`
                  }`}
                >
                  Cevapları Kontrol Et
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-6 rounded-2xl text-center ${
                    score >= 70 ? 'bg-green-100 border-2 border-green-300' : 'bg-orange-100 border-2 border-orange-300'
                  }`}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-4"
                  >
                    {score === 100 ? '🏆' : score >= 70 ? '🎉' : '💪'}
                  </motion.div>
                  <h3 className="text-2xl font-black text-gray-800 mb-2">
                    {score === 100 ? 'Mükemmel!' : score >= 70 ? 'Tebrikler!' : 'Biraz Daha Çalışalım!'}
                  </h3>
                  <p className="text-lg font-bold text-gray-600 mb-4">
                    {correctCount} / {content.practiceQuestions.length} doğru ({score}%)
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleRetry}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold text-gray-700"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Tekrar Dene
                    </motion.button>

                    {score >= 70 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNextTopic}
                        className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${theme.color} rounded-xl font-bold text-white shadow-lg`}
                      >
                        {topicIndex < allTopicsInTheme.length - 1 ? (
                          <>
                            Sonraki Konu
                            <ArrowRight className="w-5 h-5" />
                          </>
                        ) : (
                          <>
                            Temaya Dön
                            <Home className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Back to Lesson Button */}
              <motion.button
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowPractice(false);
                  setCurrentStep(0);
                  setPracticeAnswers({});
                  setPracticeResults({});
                  setShowResults(false);
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-bold"
              >
                <ArrowLeft className="w-4 h-4" />
                Derse Geri Dön
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fun Facts */}
        {content.funFacts && content.funFacts.length > 0 && !showPractice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-2xl p-6 border-2 border-purple-200"
          >
            <h3 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🤓</span>
              Biliyor muydun?
            </h3>
            <ul className="space-y-2">
              {content.funFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 font-medium">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </main>
    </div>
  );
}
