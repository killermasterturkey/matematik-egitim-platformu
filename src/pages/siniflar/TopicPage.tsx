import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
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
  Sparkles,
  Zap,
  Brain,
  Award,
  Flame,
  Heart,
  Rocket,
  Gift,
  Crown,
  Medal,
  Timer,
  TrendingUp,
  Eye,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Calculator,
  Puzzle,
  Palette,
  Music,
  Gamepad2,
  GraduationCap,
  PenTool
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
import { grade0Curriculum } from '../../data/curriculum/grade0';
import { grade1Curriculum } from '../../data/curriculum/grade1';
import { grade2Curriculum } from '../../data/curriculum/grade2';
import { grade3Curriculum } from '../../data/curriculum/grade3';
import { grade4Curriculum } from '../../data/curriculum/grade4';

const curriculumData: { [key: number]: GradeCurriculum } = {
  0: grade0Curriculum, // Destek Sınıfı
  1: grade1Curriculum,
  2: grade2Curriculum,
  3: grade3Curriculum,
  4: grade4Curriculum,
};

// Animasyonlu ikonlar için yardımcı bileşen
const FloatingIcon = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{
      y: [-5, 5, -5],
      rotate: [-5, 5, -5]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

// Parlayan yıldız efekti
const SparkleEffect = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-yellow-400"
        style={{
          left: `${20 + i * 15}%`,
          top: `${10 + (i % 3) * 30}%`,
        }}
        animate={{
          scale: [0, 1, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.3,
        }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>
    ))}
  </motion.div>
);

// Animasyonlu progress bar
const AnimatedProgressBar = ({ progress, color }: { progress: number; color: string }) => (
  <div className="relative h-4 bg-white/50 rounded-full overflow-hidden shadow-inner">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`h-full bg-gradient-to-r ${color} rounded-full relative overflow-hidden`}
    >
      <motion.div
        className="absolute inset-0 bg-white/30"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{ width: '50%' }}
      />
    </motion.div>
    {progress >= 100 && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute right-1 top-1/2 -translate-y-1/2"
      >
        <Crown className="w-5 h-5 text-yellow-500" />
      </motion.div>
    )}
  </div>
);

// İnteraktif örnek kartı
const ExampleCard = ({ example, index, themeColor, textColor }: {
  example: { question: string; answer: string; explanation?: string; visual?: string; steps?: string[] };
  index: number;
  themeColor: string;
  textColor: string;
}) => {
  const [showSolution, setShowSolution] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden"
    >
      {/* Soru Başlığı */}
      <div className={`bg-gradient-to-r ${themeColor} p-4`}>
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
          >
            <Calculator className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <span className="text-white/80 text-xs font-bold">ÖRNEK {index + 1}</span>
            <h4 className="text-white font-bold text-lg">Çözümlü Soru</h4>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Soru */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-4 border border-blue-200">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-blue-600 text-xs font-bold block mb-1">SORU</span>
              <p className="font-bold text-gray-800 text-lg">{example.question}</p>
            </div>
          </div>
        </div>

        {/* Görsel */}
        {example.visual && (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-4 text-center border-2 border-dashed border-purple-200"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-purple-500" />
              <span className="text-purple-600 text-xs font-bold">GÖRSEL</span>
            </div>
            <p className="text-3xl font-mono">{example.visual}</p>
          </motion.div>
        )}

        {/* Çözüm Butonu */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowSolution(!showSolution)}
          className={`w-full py-3 rounded-xl font-bold text-white mb-4 flex items-center justify-center gap-2 bg-gradient-to-r ${themeColor} shadow-lg`}
        >
          {showSolution ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          {showSolution ? 'Çözümü Gizle' : 'Çözümü Göster'}
          <Lightbulb className="w-5 h-5" />
        </motion.button>

        {/* Çözüm */}
        <AnimatePresence>
          {showSolution && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Cevap */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-3 border-2 border-green-200">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <span className="text-green-600 text-xs font-bold block">CEVAP</span>
                    <p className={`font-black text-2xl ${textColor}`}>{example.answer}</p>
                  </div>
                </div>
              </div>

              {/* Adım adım çözüm */}
              {example.steps && example.steps.length > 0 && (
                <div className="mb-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowSteps(!showSteps)}
                    className="w-full py-2 px-4 rounded-lg bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <PenTool className="w-4 h-4" />
                    {showSteps ? 'Adımları Gizle' : 'Adım Adım Çözüm'}
                    {showSteps ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </motion.button>

                  <AnimatePresence>
                    {showSteps && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 space-y-2"
                      >
                        {example.steps.map((step, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.1 }}
                            className="flex items-start gap-3 bg-gray-50 rounded-lg p-3"
                          >
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${themeColor} flex items-center justify-center flex-shrink-0`}>
                              <span className="text-white text-xs font-bold">{j + 1}</span>
                            </div>
                            <p className="text-gray-700 font-medium text-sm">{step}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Açıklama */}
              {example.explanation && (
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl"
                    >
                      💡
                    </motion.div>
                    <div>
                      <span className="text-amber-600 text-xs font-bold block mb-1">AÇIKLAMA</span>
                      <p className="text-amber-800 font-medium">{example.explanation}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Animasyonlu maskot
const AnimatedMascot = ({ emoji, mood }: { emoji: string; mood: 'happy' | 'thinking' | 'celebrating' }) => {
  const animations = {
    happy: {
      y: [0, -8, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1]
    },
    thinking: {
      y: [0, -3, 0],
      rotate: [0, -10, 0],
      scale: [1, 0.98, 1]
    },
    celebrating: {
      y: [0, -20, 0],
      rotate: [0, 15, -15, 0],
      scale: [1, 1.2, 1]
    }
  };

  return (
    <motion.div
      animate={animations[mood]}
      transition={{
        duration: mood === 'celebrating' ? 0.5 : 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="text-6xl filter drop-shadow-lg"
    >
      {emoji}
    </motion.div>
  );
};

// Başarı rozeti
const AchievementBadge = ({ score }: { score: number }) => {
  const getBadge = () => {
    if (score === 100) return { icon: Crown, color: 'from-yellow-400 to-amber-500', label: 'Mükemmel!', emoji: '👑' };
    if (score >= 90) return { icon: Trophy, color: 'from-purple-400 to-indigo-500', label: 'Harika!', emoji: '🏆' };
    if (score >= 80) return { icon: Medal, color: 'from-blue-400 to-cyan-500', label: 'Çok İyi!', emoji: '🥇' };
    if (score >= 70) return { icon: Star, color: 'from-green-400 to-emerald-500', label: 'İyi!', emoji: '⭐' };
    return { icon: Flame, color: 'from-orange-400 to-red-500', label: 'Devam Et!', emoji: '💪' };
  };

  const badge = getBadge();
  const Icon = badge.icon;

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", duration: 0.8 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} text-white shadow-lg`}
    >
      <motion.span
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-2xl"
      >
        {badge.emoji}
      </motion.span>
      <Icon className="w-5 h-5" />
      <span className="font-bold">{badge.label}</span>
    </motion.div>
  );
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
  const gradeNum = parseInt(grade || '1') as 0 | 1 | 2 | 3 | 4;
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
  // Tek tek soru gösterimi için
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [showQuestionResult, setShowQuestionResult] = useState(false);

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
    setQuestionAnswered(true);
  };

  // Tek soru için cevap kontrolü
  const handleCheckSingleAnswer = () => {
    const currentQuestion = content.practiceQuestions[currentQuestionIndex];
    const userAnswer = practiceAnswers[currentQuestion.id]?.trim().toLowerCase();
    const correct = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer.some(a => a.toLowerCase() === userAnswer)
      : currentQuestion.correctAnswer.toLowerCase() === userAnswer;

    setPracticeResults(prev => ({ ...prev, [currentQuestion.id]: correct }));
    setShowQuestionResult(true);

    if (correct) {
      celebrate();
      setMascotMood('celebrating');
    }
  };

  // Sonraki soruya geç
  const handleNextQuestion = () => {
    if (currentQuestionIndex < content.practiceQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setQuestionAnswered(false);
      setShowQuestionResult(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Tüm sorular bitti, sonuçları göster
      calculateFinalResults();
    }
  };

  // Önceki soruya dön
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setQuestionAnswered(!!practiceAnswers[content.practiceQuestions[currentQuestionIndex - 1].id]);
      setShowQuestionResult(!!practiceResults[content.practiceQuestions[currentQuestionIndex - 1].id]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Final sonuçları hesapla
  const calculateFinalResults = () => {
    const correctCount = Object.values(practiceResults).filter(Boolean).length;
    const score = Math.round((correctCount / content.practiceQuestions.length) * 100);

    setShowResults(true);

    if (score >= 70) {
      saveProgress(score);
    }

    if (score === 100) {
      celebrateBig();
    }
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
    setCurrentQuestionIndex(0);
    setQuestionAnswered(false);
    setShowQuestionResult(false);
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

                {/* Examples - Gelişmiş İnteraktif Örnekler */}
                {currentStepData.examples && currentStepData.examples.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-10 h-10 bg-gradient-to-r ${theme.color} rounded-xl flex items-center justify-center`}
                      >
                        <Calculator className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-black text-gray-800 text-lg flex items-center gap-2">
                          <BookOpen className={`w-5 h-5 ${theme.textColor}`} />
                          Çözümlü Örnekler
                        </h3>
                        <p className="text-sm text-gray-500">Adım adım çözümlerle öğren</p>
                      </div>
                    </div>
                    <div className="grid gap-4">
                      {currentStepData.examples.map((example, i) => (
                        <ExampleCard
                          key={i}
                          example={example}
                          index={i}
                          themeColor={theme.color}
                          textColor={theme.textColor}
                        />
                      ))}
                    </div>
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
            /* Practice Questions - TEK TEK GÖSTERIM */
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {!showResults ? (
                <>
                  {/* Soru İlerleme Başlığı */}
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-black text-gray-800 flex items-center gap-2">
                        <Target className={`w-6 h-6 ${theme.textColor}`} />
                        Soru {currentQuestionIndex + 1}
                      </h2>
                      <div className={`px-4 py-2 rounded-full ${theme.bgColor} ${theme.textColor} font-bold`}>
                        {currentQuestionIndex + 1} / {content.practiceQuestions.length}
                      </div>
                    </div>

                    {/* İlerleme Çubuğu */}
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestionIndex + 1) / content.practiceQuestions.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                        className={`h-full bg-gradient-to-r ${theme.color} rounded-full`}
                      />
                    </div>

                    {/* Soru Durumları */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {content.practiceQuestions.map((_, idx) => (
                        <motion.div
                          key={idx}
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm cursor-pointer transition-all ${
                            idx === currentQuestionIndex
                              ? `bg-gradient-to-r ${theme.color} text-white scale-110`
                              : practiceResults[content.practiceQuestions[idx].id] !== undefined
                                ? practiceResults[content.practiceQuestions[idx].id]
                                  ? 'bg-green-500 text-white'
                                  : 'bg-red-500 text-white'
                                : practiceAnswers[content.practiceQuestions[idx].id]
                                  ? 'bg-yellow-400 text-white'
                                  : 'bg-gray-200 text-gray-600'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          onClick={() => {
                            setCurrentQuestionIndex(idx);
                            setQuestionAnswered(!!practiceAnswers[content.practiceQuestions[idx].id]);
                            setShowQuestionResult(practiceResults[content.practiceQuestions[idx].id] !== undefined);
                          }}
                        >
                          {practiceResults[content.practiceQuestions[idx].id] !== undefined ? (
                            practiceResults[content.practiceQuestions[idx].id] ? (
                              <CheckCircle2 className="w-4 h-4" />
                            ) : (
                              <XCircle className="w-4 h-4" />
                            )
                          ) : (
                            idx + 1
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tek Soru Kartı */}
                  {(() => {
                    const q = content.practiceQuestions[currentQuestionIndex];
                    return (
                      <motion.div
                        key={q.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className={`bg-white rounded-2xl p-6 border-2 ${
                          showQuestionResult
                            ? practiceResults[q.id]
                              ? 'border-green-400 bg-green-50'
                              : 'border-red-400 bg-red-50'
                            : 'border-gray-200'
                        } shadow-xl transition-all`}
                      >
                        {/* Soru Başlığı */}
                        <div className="flex items-start gap-4 mb-6">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`w-14 h-14 flex items-center justify-center rounded-2xl font-black text-2xl text-white bg-gradient-to-r ${theme.color} shadow-lg`}
                          >
                            {currentQuestionIndex + 1}
                          </motion.div>
                          <div className="flex-1">
                            <p className="font-black text-gray-800 text-xl leading-relaxed">{q.question}</p>
                            {q.hint && (
                              <div className="mt-2 flex items-center gap-2 text-amber-600">
                                <Lightbulb className="w-4 h-4" />
                                <span className="text-sm font-medium">İpucu: {q.hint}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Görsel */}
                        {q.visual && (
                          <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className={`${theme.bgColor} rounded-xl p-8 mb-6 text-center border-2 border-dashed ${theme.borderColor}`}
                          >
                            <p className="text-4xl font-mono whitespace-pre-wrap">{q.visual}</p>
                          </motion.div>
                        )}

                        {/* Çoktan Seçmeli */}
                        {q.type === 'multiple-choice' && q.options ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {q.options.map((option, j) => (
                              <motion.button
                                key={j}
                                whileHover={{ scale: showQuestionResult ? 1 : 1.03 }}
                                whileTap={{ scale: showQuestionResult ? 1 : 0.97 }}
                                onClick={() => !showQuestionResult && handleAnswerChange(q.id, option)}
                                disabled={showQuestionResult}
                                className={`p-5 rounded-2xl font-bold text-lg text-left transition-all flex items-center gap-3 ${
                                  showQuestionResult
                                    ? option.toLowerCase() === (Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer).toLowerCase()
                                      ? 'bg-green-200 border-3 border-green-500 shadow-green-200 shadow-lg'
                                      : practiceAnswers[q.id] === option
                                        ? 'bg-red-200 border-3 border-red-500'
                                        : 'bg-gray-100 border-2 border-gray-200'
                                    : practiceAnswers[q.id] === option
                                      ? `bg-gradient-to-r ${theme.color} text-white border-2 border-transparent shadow-lg`
                                      : 'bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 hover:border-gray-400'
                                }`}
                              >
                                <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${
                                  showQuestionResult
                                    ? option.toLowerCase() === (Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer).toLowerCase()
                                      ? 'bg-green-500 text-white'
                                      : practiceAnswers[q.id] === option
                                        ? 'bg-red-500 text-white'
                                        : 'bg-gray-200 text-gray-600'
                                    : practiceAnswers[q.id] === option
                                      ? 'bg-white/30 text-white'
                                      : 'bg-gray-200 text-gray-600'
                                }`}>
                                  {String.fromCharCode(65 + j)}
                                </span>
                                <span className="flex-1">{option}</span>
                                {showQuestionResult && option.toLowerCase() === (Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer).toLowerCase() && (
                                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                                )}
                              </motion.button>
                            ))}
                          </div>
                        ) : (
                          /* Boşluk Doldurma */
                          <div className="space-y-4">
                            <input
                              type="text"
                              value={practiceAnswers[q.id] || ''}
                              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                              disabled={showQuestionResult}
                              placeholder="Cevabını buraya yaz..."
                              className={`w-full p-5 rounded-2xl border-3 font-bold text-xl text-center ${
                                showQuestionResult
                                  ? practiceResults[q.id]
                                    ? 'border-green-500 bg-green-100'
                                    : 'border-red-500 bg-red-100'
                                  : 'border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-200'
                              } outline-none transition-all`}
                            />
                          </div>
                        )}

                        {/* Sonuç Gösterimi */}
                        <AnimatePresence>
                          {showQuestionResult && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-6"
                            >
                              {practiceResults[q.id] ? (
                                <div className="bg-green-100 rounded-2xl p-5 border-2 border-green-300">
                                  <div className="flex items-center gap-3 mb-2">
                                    <motion.div
                                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                                      transition={{ duration: 0.5 }}
                                      className="text-4xl"
                                    >
                                      🎉
                                    </motion.div>
                                    <div>
                                      <p className="font-black text-green-700 text-xl">Harika! Doğru Cevap!</p>
                                      <p className="text-green-600 font-medium">{q.explanation}</p>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="bg-red-100 rounded-2xl p-5 border-2 border-red-300">
                                  <div className="flex items-start gap-3">
                                    <span className="text-3xl">😊</span>
                                    <div>
                                      <p className="font-black text-red-700 text-lg mb-2">Doğru cevap: {Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer}</p>
                                      <p className="text-red-600 font-medium">{q.explanation}</p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Soru Butonları */}
                        <div className="flex items-center justify-between mt-6 pt-4 border-t-2 border-gray-100">
                          <motion.button
                            whileHover={{ x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePrevQuestion}
                            disabled={currentQuestionIndex === 0}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${
                              currentQuestionIndex === 0
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                            }`}
                          >
                            <ArrowLeft className="w-5 h-5" />
                            Önceki
                          </motion.button>

                          {!showQuestionResult ? (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleCheckSingleAnswer}
                              disabled={!practiceAnswers[q.id]}
                              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all ${
                                !practiceAnswers[q.id]
                                  ? 'bg-gray-400 cursor-not-allowed'
                                  : `bg-gradient-to-r ${theme.color} hover:opacity-90`
                              }`}
                            >
                              <CheckCircle2 className="w-6 h-6" />
                              Kontrol Et
                            </motion.button>
                          ) : (
                            <motion.button
                              whileHover={{ x: 5, scale: 1.02 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleNextQuestion}
                              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg bg-gradient-to-r ${theme.color}`}
                            >
                              {currentQuestionIndex < content.practiceQuestions.length - 1 ? (
                                <>
                                  Sonraki Soru
                                  <ArrowRight className="w-6 h-6" />
                                </>
                              ) : (
                                <>
                                  Sonuçları Gör
                                  <Trophy className="w-6 h-6" />
                                </>
                              )}
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })()}
                </>
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
