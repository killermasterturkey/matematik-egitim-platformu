import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Star, Trophy } from 'lucide-react';
import Header from '../../components/feature/Header';
import ThemeCard from './components/ThemeCard';
import { gradeColors, getRandomMotivation, GradeCurriculum, CURRICULUM_PROGRESS_KEY, GradeProgress, calculateGradeProgress } from '../../data/curriculum/types';
import { useState, useEffect } from 'react';

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

export default function GradePage() {
  const { grade } = useParams<{ grade: string }>();
  const gradeNum = parseInt(grade || '1') as 0 | 1 | 2 | 3 | 4;
  const colors = gradeColors[gradeNum];
  const curriculum = curriculumData[gradeNum];
  const [motivation] = useState(getRandomMotivation());
  const [progress, setProgress] = useState<GradeProgress>({});

  useEffect(() => {
    // LocalStorage'dan ilerleme verilerini yükle
    const savedProgress = localStorage.getItem(CURRICULUM_PROGRESS_KEY);
    if (savedProgress) {
      const allProgress = JSON.parse(savedProgress);
      setProgress(allProgress[gradeNum] || {});
    }
  }, [gradeNum]);

  const getThemeProgress = (themeId: string) => {
    const themeProgress = progress[themeId] || {};
    return Object.values(themeProgress).filter(t => t.completed).length;
  };

  const totalProgress = curriculum ? calculateGradeProgress(progress, curriculum.themes) : 0;
  const totalTopics = curriculum?.themes.reduce((acc, t) => acc + t.topics.length, 0) || 0;
  const completedTopics = curriculum?.themes.reduce((acc, t) => acc + getThemeProgress(t.id), 0) || 0;

  if (!curriculum) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Müfredat yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-white via-${colors.bg.replace('bg-', '')} to-white relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
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
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {['🔢', '📐', '✏️', '📚', '⭐', '🎯', '💡', '🏆', colors.emoji, colors.mascot][i]}
          </motion.div>
        ))}
      </div>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Back Button */}
        <Link to="/">
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 font-bold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Ana Sayfa</span>
          </motion.button>
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${colors.bg} rounded-3xl p-8 mb-8 border-4 ${colors.border} shadow-xl relative overflow-hidden`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-10`}></div>

          <div className="relative flex flex-col md:flex-row items-center gap-6">
            {/* Mascot */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-32 h-32 flex items-center justify-center bg-gradient-to-br ${colors.gradient} rounded-3xl shadow-2xl`}
            >
              <span className="text-7xl">{colors.mascot}</span>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="text-4xl">{colors.emoji}</span>
                <h1 className={`text-4xl md:text-5xl font-black ${colors.textDark}`}>
                  {colors.name} Matematik
                </h1>
              </div>
              <p className="text-lg text-gray-600 font-semibold mb-4">
                {curriculum.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className={`flex items-center gap-2 ${colors.bg} px-4 py-2 rounded-full border-2 ${colors.border}`}>
                  <BookOpen className={`w-5 h-5 ${colors.text}`} />
                  <span className="font-bold text-gray-700">{curriculum.themes.length} Tema</span>
                </div>
                <div className={`flex items-center gap-2 ${colors.bg} px-4 py-2 rounded-full border-2 ${colors.border}`}>
                  <Clock className={`w-5 h-5 ${colors.text}`} />
                  <span className="font-bold text-gray-700">{curriculum.totalHours} Saat</span>
                </div>
                <div className={`flex items-center gap-2 ${colors.bg} px-4 py-2 rounded-full border-2 ${colors.border}`}>
                  <Star className={`w-5 h-5 ${colors.text}`} />
                  <span className="font-bold text-gray-700">{totalTopics} Konu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="relative mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-gray-600">Genel İlerleme</span>
              <span className={`text-sm font-bold ${colors.text}`}>{completedTopics}/{totalTopics} Konu ({totalProgress}%)</span>
            </div>
            <div className="h-4 bg-white rounded-full overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${totalProgress}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full`}
              />
            </div>
            {totalProgress === 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -right-2 -top-2"
              >
                <Trophy className="w-8 h-8 text-yellow-500" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Motivation Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 rounded-2xl p-4 mb-8 text-center border-2 border-yellow-200"
        >
          <p className="text-lg font-bold text-gray-700">{motivation}</p>
        </motion.div>

        {/* Themes Grid */}
        <div className="mb-8">
          <h2 className={`text-2xl font-black ${colors.textDark} mb-6 flex items-center gap-2`}>
            <BookOpen className={`w-6 h-6 ${colors.text}`} />
            Temalar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.themes.map((theme, index) => (
              <ThemeCard
                key={theme.id}
                themeId={theme.id}
                grade={gradeNum}
                title={theme.title}
                description={theme.description}
                emoji={theme.emoji}
                color={theme.color}
                bgColor={theme.bgColor}
                borderColor={theme.borderColor}
                textColor={theme.textColor}
                hours={theme.hours}
                topicCount={theme.topics.length}
                completedCount={getThemeProgress(theme.id)}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Atatürk Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-center text-white shadow-xl"
        >
          <p className="text-lg font-bold italic mb-2">
            "Hayatta en hakiki mürşit ilimdir."
          </p>
          <p className="text-sm font-semibold opacity-90">- Mustafa Kemal Atatürk</p>
        </motion.div>
      </main>
    </div>
  );
}
