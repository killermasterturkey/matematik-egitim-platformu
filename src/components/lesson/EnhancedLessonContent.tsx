import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles, Star, CheckCircle, XCircle, Trophy, Target, BookOpen, Lightbulb } from 'lucide-react';
import { triggerConfetti } from '../ui/Confetti';
import { showCelebration, showEncouragement, showStreak } from '../ui/MessagePopup';

interface LessonStep {
  title: string;
  content: string;
  visual?: string;
  explanation?: string;
  audio: string;
  examples?: any[];
}

interface LessonContent {
  title: string;
  motivationQuote: string;
  introduction: string;
  steps: LessonStep[];
  practiceQuestions: { question: string; answer: string; type: string }[];
}

interface EnhancedLessonContentProps {
  lesson: {
    level: number;
    color: string;
    icon?: string;
    emoji?: string;
  };
  getLessonContent: (level: number) => LessonContent | null;
  themeColor: 'purple' | 'red' | 'blue' | 'green';
  onComplete: () => void;
  onClose: () => void;
}

// Floating decorative elements
const FloatingElements = ({ count = 8, emoji = '⭐' }: { count?: number; emoji?: string }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-30"
          initial={{
            x: Math.random() * 100 + '%',
            y: '100%',
          }}
          animate={{
            y: '-20%',
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

// Animated progress bar
const ProgressBar = ({ current, total, color }: { current: number; total: number; color: string }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full h-4 bg-white/30 rounded-full overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
};

// Interactive visual demonstration
const VisualDemo = ({ visual, color }: { visual: string; color: string }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      className={`bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-2xl p-6 mb-6 border-3 border-${color}-200 cursor-pointer relative overflow-hidden`}
      onClick={() => setRevealed(!revealed)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute top-2 right-2 bg-white/80 rounded-full px-3 py-1 text-sm font-bold flex items-center gap-1"
        animate={{ opacity: revealed ? 0 : 1 }}
      >
        <Sparkles className="w-4 h-4" />
        Tıkla ve Gör!
      </motion.div>
      <motion.pre
        className="text-xl font-black text-center text-gray-800 whitespace-pre-wrap"
        animate={{ filter: revealed ? 'blur(0px)' : 'blur(4px)' }}
        transition={{ duration: 0.3 }}
      >
        {visual}
      </motion.pre>
    </motion.div>
  );
};

// Animated mascot character
const MascotCharacter = ({ mood }: { mood: 'happy' | 'thinking' | 'celebrating' }) => {
  const emojis = {
    happy: '😊',
    thinking: '🤔',
    celebrating: '🎉'
  };

  return (
    <motion.div
      className="text-6xl"
      animate={{
        y: [0, -10, 0],
        rotate: mood === 'celebrating' ? [0, 10, -10, 0] : 0,
        scale: mood === 'celebrating' ? [1, 1.2, 1] : 1,
      }}
      transition={{
        duration: mood === 'celebrating' ? 0.5 : 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {emojis[mood]}
    </motion.div>
  );
};

export default function EnhancedLessonContent({
  lesson,
  getLessonContent,
  themeColor,
  onComplete,
  onClose,
}: EnhancedLessonContentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPractice, setShowPractice] = useState(false);
  const [practiceAnswers, setPracticeAnswers] = useState<{ [key: number]: string }>({});
  const [practiceResults, setPracticeResults] = useState<{ [key: number]: boolean | null }>({});
  const [correctCount, setCorrectCount] = useState(0);
  const [showCelebrationBanner, setShowCelebrationBanner] = useState(false);
  const [streak, setStreak] = useState(0);

  const content = getLessonContent(lesson.level);
  if (!content) return null;

  const currentStepData = content.steps[currentStep];
  const totalSteps = content.steps.length;

  const colorSchemes = {
    purple: {
      gradient: 'from-purple-500 via-pink-500 to-orange-500',
      buttonGradient: 'from-purple-500 to-pink-500',
      progressGradient: 'from-purple-400 to-pink-400',
      accent: 'purple',
      border: 'border-purple-200',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
    },
    red: {
      gradient: 'from-red-500 via-pink-500 to-orange-500',
      buttonGradient: 'from-red-500 to-pink-500',
      progressGradient: 'from-red-400 to-pink-400',
      accent: 'red',
      border: 'border-red-200',
      bg: 'bg-red-50',
      text: 'text-red-600',
    },
    blue: {
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      buttonGradient: 'from-blue-500 to-indigo-500',
      progressGradient: 'from-blue-400 to-indigo-400',
      accent: 'blue',
      border: 'border-blue-200',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
    },
    green: {
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      buttonGradient: 'from-green-500 to-emerald-500',
      progressGradient: 'from-green-400 to-emerald-400',
      accent: 'green',
      border: 'border-green-200',
      bg: 'bg-green-50',
      text: 'text-green-600',
    },
  };

  const colors = colorSchemes[themeColor];

  const handlePracticeAnswer = (index: number, answer: string) => {
    setPracticeAnswers({ ...practiceAnswers, [index]: answer });
    const correct = answer === content.practiceQuestions[index].answer;
    setPracticeResults({ ...practiceResults, [index]: correct });

    if (correct) {
      const newStreak = streak + 1;
      setCorrectCount((prev) => prev + 1);
      setStreak(newStreak);

      // Seri kontrolü ve popup gösterimi
      if (newStreak >= 2) {
        triggerConfetti.burst();
        showStreak(newStreak);
      } else {
        showCelebration();
      }
    } else {
      setStreak(0);
      showEncouragement();
    }
  };

  const allPracticeCorrect = content.practiceQuestions.every(
    (_, index) => practiceResults[index] === true
  );

  useEffect(() => {
    if (allPracticeCorrect && !showCelebrationBanner) {
      setShowCelebrationBanner(true);
      triggerConfetti.celebration();
      showCelebration('Tüm soruları doğru yaptın!');
    }
  }, [allPracticeCorrect, showCelebrationBanner]);

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleStartPractice = () => {
    setShowPractice(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        {/* Floating background elements */}
        <FloatingElements count={12} emoji={lesson.emoji || '⭐'} />

        {/* Header */}
        <div className={`bg-gradient-to-r ${colors.gradient} p-8 rounded-t-3xl sticky top-0 z-10`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-lg"
              >
                <span className="text-4xl">{lesson.emoji || lesson.icon}</span>
              </motion.div>
              <div>
                <h2 className="text-3xl font-black text-white">{content.title}</h2>
                <p className="text-white/90 font-semibold">
                  {!showPractice ? `Adım ${currentStep + 1} / ${totalSteps}` : 'Pratik Zamanı!'}
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Progress Bar */}
          {!showPractice && (
            <div className="mb-4">
              <ProgressBar current={currentStep} total={totalSteps} color={colors.progressGradient} />
            </div>
          )}

          {/* Motivation Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/30"
          >
            <p className="text-lg font-black text-white text-center flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              {content.motivationQuote}
              <Sparkles className="w-5 h-5" />
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {!showPractice ? (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {/* Introduction */}
                {currentStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 mb-6 border-4 border-yellow-300 flex items-center gap-4"
                  >
                    <MascotCharacter mood="happy" />
                    <div>
                      <h3 className="text-xl font-black text-gray-800 mb-2 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-yellow-600" />
                        Hoş Geldin!
                      </h3>
                      <p className="text-lg font-bold text-gray-700 leading-relaxed">
                        {content.introduction}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step Content */}
                <div className="mb-8">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-3"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${colors.buttonGradient} rounded-xl text-white font-black text-xl shadow-lg`}
                    >
                      {currentStep + 1}
                    </motion.span>
                    {currentStepData.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg font-semibold text-gray-700 mb-6 leading-relaxed"
                  >
                    {currentStepData.content}
                  </motion.p>

                  {/* Visual */}
                  {currentStepData.visual && (
                    <VisualDemo visual={currentStepData.visual} color={themeColor} />
                  )}

                  {/* Examples */}
                  {currentStepData.examples && (
                    <div className="space-y-4 mb-6">
                      {currentStepData.examples.map((example: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`bg-white rounded-2xl p-6 shadow-lg ${colors.border} border-3 hover:shadow-xl transition-shadow`}
                        >
                          {example.scenario && (
                            <div className="flex items-center gap-3 mb-3">
                              <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-3xl"
                              >
                                {example.scenario.split(' ')[0]}
                              </motion.span>
                              <h4 className={`text-xl font-black ${colors.text}`}>
                                {example.scenario.substring(2)}
                              </h4>
                            </div>
                          )}

                          {example.question && (
                            <motion.p
                              className="text-lg font-bold text-gray-700 mb-3 p-3 bg-gray-50 rounded-xl"
                              whileHover={{ scale: 1.02 }}
                            >
                              {example.question}
                            </motion.p>
                          )}

                          {example.visual && (
                            <motion.div
                              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 mb-3 border-2 border-green-200"
                              whileHover={{ scale: 1.02 }}
                            >
                              <pre className="text-lg font-black text-center text-gray-800 whitespace-pre-wrap">
                                {example.visual}
                              </pre>
                            </motion.div>
                          )}

                          {example.steps && (
                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 mb-3 border-2 border-yellow-200">
                              {example.steps.map((step: string, idx: number) => (
                                <motion.p
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="text-base font-bold text-gray-700 mb-1 flex items-center gap-2"
                                >
                                  <span className="w-6 h-6 flex items-center justify-center bg-yellow-400 rounded-full text-xs font-black text-white">
                                    {idx + 1}
                                  </span>
                                  {step}
                                </motion.p>
                              ))}
                            </div>
                          )}

                          <motion.div
                            className="flex items-start gap-3 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 border-2 border-pink-200"
                            whileHover={{ scale: 1.02 }}
                          >
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="text-3xl flex-shrink-0"
                            >
                              <Lightbulb className="w-8 h-8 text-yellow-500" />
                            </motion.span>
                            <div>
                              <p className="text-base font-bold text-gray-800">
                                <span className={`${colors.text} font-black text-lg`}>
                                  Cevap: {example.answer}
                                </span>
                              </p>
                              <p className="text-base font-semibold text-gray-700 mt-1">
                                {example.explanation}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Explanation */}
                  {currentStepData.explanation && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border-3 border-green-300"
                    >
                      <div className="flex items-start gap-4">
                        <motion.span
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-4xl flex-shrink-0"
                        >
                          💡
                        </motion.span>
                        <p className="text-lg font-bold text-gray-800 leading-relaxed">
                          {currentStepData.explanation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex gap-4">
                  {currentStep > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.02, x: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handlePrevStep}
                      className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl font-black text-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6" />
                      Önceki
                    </motion.button>
                  )}
                  {currentStep < totalSteps - 1 ? (
                    <motion.button
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNextStep}
                      className="flex-1 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-black text-lg transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 shadow-lg"
                    >
                      Sonraki
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleStartPractice}
                      className="flex-1 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-xl font-black text-lg transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Target className="w-6 h-6" />
                      Pratik Yap!
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="practice"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                {/* Practice Section */}
                <div className="mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 mb-6 border-4 border-yellow-300 flex items-center gap-4"
                  >
                    <MascotCharacter mood={allPracticeCorrect ? 'celebrating' : 'thinking'} />
                    <div>
                      <h3 className="text-2xl font-black text-gray-800 mb-2 flex items-center gap-3">
                        <Target className="w-8 h-8 text-orange-600" />
                        Şimdi Pratik Zamanı!
                      </h3>
                      <p className="text-lg font-bold text-gray-700">
                        Aşağıdaki soruları çözerek öğrendiklerini pekiştir! Her doğru cevap seni daha güçlü yapacak!
                      </p>
                    </div>
                  </motion.div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-green-100 rounded-xl p-4 text-center border-2 border-green-300"
                    >
                      <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <p className="text-2xl font-black text-green-600">{correctCount}</p>
                      <p className="text-sm font-bold text-green-700">Doğru</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-orange-100 rounded-xl p-4 text-center border-2 border-orange-300"
                    >
                      <Star className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                      <p className="text-2xl font-black text-orange-600">{streak}</p>
                      <p className="text-sm font-bold text-orange-700">Seri</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-purple-100 rounded-xl p-4 text-center border-2 border-purple-300"
                    >
                      <Trophy className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <p className="text-2xl font-black text-purple-600">
                        {Math.round((correctCount / content.practiceQuestions.length) * 100)}%
                      </p>
                      <p className="text-sm font-bold text-purple-700">Başarı</p>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {content.practiceQuestions.map((q: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`bg-white rounded-2xl p-6 shadow-lg ${colors.border} border-3 ${
                          practiceResults[index] === true
                            ? 'ring-4 ring-green-300'
                            : practiceResults[index] === false
                            ? 'ring-4 ring-red-300'
                            : ''
                        }`}
                      >
                        <p className="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
                          <span className={`w-8 h-8 flex items-center justify-center rounded-full ${colors.bg} ${colors.text} font-black`}>
                            {index + 1}
                          </span>
                          {q.question}
                        </p>
                        <input
                          type="text"
                          value={practiceAnswers[index] || ''}
                          onChange={(e) => handlePracticeAnswer(index, e.target.value)}
                          className={`w-full px-4 py-3 ${colors.border} border-3 rounded-xl text-lg font-bold focus:outline-none focus:ring-2 ${colors.text}`}
                          placeholder="Cevabını yaz..."
                          disabled={practiceResults[index] === true}
                        />
                        <AnimatePresence>
                          {practiceResults[index] !== undefined && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className={`mt-3 p-3 rounded-xl flex items-center gap-2 ${
                                practiceResults[index]
                                  ? 'bg-green-100 border-2 border-green-300'
                                  : 'bg-red-100 border-2 border-red-300'
                              }`}
                            >
                              {practiceResults[index] ? (
                                <>
                                  <CheckCircle className="w-6 h-6 text-green-600" />
                                  <p className="font-black text-green-700">Harika! Doğru cevap!</p>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-6 h-6 text-red-600" />
                                  <p className="font-black text-red-700">
                                    Tekrar dene! Doğru cevap: {q.answer}
                                  </p>
                                </>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  <AnimatePresence>
                    {allPracticeCorrect && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-8 text-center border-4 border-white shadow-2xl mb-6"
                      >
                        <motion.div
                          animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="text-6xl mb-4"
                        >
                          🎉
                        </motion.div>
                        <h3 className="text-3xl font-black text-white mb-3">
                          Tebrikler! Hepsini Doğru Yaptın!
                        </h3>
                        <p className="text-xl font-bold text-white/90 flex items-center justify-center gap-2">
                          Sen gerçek bir matematik yıldızısın!
                          <Star className="w-6 h-6" />
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Practice Navigation */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02, x: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowPractice(false)}
                    className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl font-black text-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
                  >
                    <ChevronLeft className="w-6 h-6" />
                    Konuya Dön
                  </motion.button>
                  {allPracticeCorrect && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        triggerConfetti.fireworks();
                        showCelebration('Dersi başarıyla tamamladın!');
                        onComplete();
                      }}
                      className="flex-1 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-black text-lg transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Trophy className="w-6 h-6" />
                      Dersi Tamamla
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer with Atatürk Quote */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-b-3xl">
          <p className="text-base md:text-lg font-black text-white text-center italic leading-relaxed">
            "Bir gün ulusu sizin gibi beni anlamış gençliğe bırakacağımdan çok memnun ve mesudum."
          </p>
          <p className="text-sm font-bold text-white/90 text-center mt-2">
            - Mustafa Kemal Atatürk
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
