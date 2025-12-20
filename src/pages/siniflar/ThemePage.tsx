import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Star, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import Header from '../../components/feature/Header';
import TopicCard from './components/TopicCard';
import { gradeColors, getRandomMotivation, GradeCurriculum, CURRICULUM_PROGRESS_KEY, ThemeProgress } from '../../data/curriculum/types';
import { useState, useEffect } from 'react';

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

export default function ThemePage() {
  const { grade, temaId } = useParams<{ grade: string; temaId: string }>();
  const gradeNum = parseInt(grade || '1') as 1 | 2 | 3 | 4;
  const colors = gradeColors[gradeNum];
  const curriculum = curriculumData[gradeNum];
  const theme = curriculum?.themes.find(t => t.id === temaId);
  const [motivation] = useState(getRandomMotivation());
  const [progress, setProgress] = useState<ThemeProgress>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem(CURRICULUM_PROGRESS_KEY);
    if (savedProgress) {
      const allProgress = JSON.parse(savedProgress);
      setProgress(allProgress[gradeNum]?.[temaId] || {});
    }
  }, [gradeNum, temaId]);

  if (!theme) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Tema bulunamadı...</p>
      </div>
    );
  }

  const completedCount = Object.values(progress).filter(t => t.completed).length;
  const totalProgress = theme.topics.length > 0 ? Math.round((completedCount / theme.topics.length) * 100) : 0;
  const themeIndex = curriculum.themes.findIndex(t => t.id === temaId);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {theme.emoji}
          </motion.div>
        ))}
      </div>

      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700 font-semibold">Ana Sayfa</Link>
          <span className="text-gray-400">/</span>
          <Link to={`/sinif/${gradeNum}`} className={`${colors.text} hover:underline font-semibold`}>{colors.name}</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-700 font-bold">{theme.title}</span>
        </div>

        {/* Back Button */}
        <Link to={`/sinif/${gradeNum}`}>
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 ${colors.text} hover:opacity-80 mb-6 font-bold`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Geri Dön</span>
          </motion.button>
        </Link>

        {/* Theme Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${theme.bgColor} rounded-3xl p-8 mb-8 border-4 ${theme.borderColor} shadow-xl relative overflow-hidden`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-10`}></div>

          <div className="relative">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Theme Icon */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`w-24 h-24 flex items-center justify-center bg-gradient-to-br ${theme.color} rounded-2xl shadow-xl flex-shrink-0`}
              >
                <span className="text-5xl">{theme.emoji}</span>
              </motion.div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-sm font-bold ${theme.textColor} bg-white/80 px-3 py-1 rounded-full`}>
                    Tema {themeIndex + 1}
                  </span>
                  <span className="text-sm font-bold text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {theme.hours} saat
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
                  {theme.title}
                </h1>

                <p className="text-lg text-gray-600 font-medium mb-4">
                  {theme.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full">
                    <BookOpen className={`w-4 h-4 ${theme.textColor}`} />
                    <span className="font-bold text-gray-700">{theme.topics.length} Konu</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-bold text-gray-700">{completedCount} Tamamlandı</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-gray-600">İlerleme</span>
                <span className={`text-sm font-bold ${theme.textColor}`}>{totalProgress}%</span>
              </div>
              <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${totalProgress}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${theme.color} rounded-full`}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Motivation Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 rounded-xl p-4 mb-8 text-center border-2 border-yellow-200"
        >
          <p className="text-base font-bold text-gray-700">{motivation}</p>
        </motion.div>

        {/* Learning Objectives */}
        {theme.objectives && theme.objectives.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 mb-8 border-2 border-gray-200 shadow-lg"
          >
            <h3 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
              <Target className={`w-5 h-5 ${theme.textColor}`} />
              Öğrenme Hedefleri
            </h3>
            <ul className="space-y-2">
              {theme.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className={`w-5 h-5 ${theme.textColor} flex-shrink-0 mt-0.5`} />
                  <span className="font-medium">{obj}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Topics List */}
        <div className="mb-8">
          <h2 className="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className={`w-5 h-5 ${theme.textColor}`} />
            Konular
          </h2>

          <div className="space-y-3">
            {theme.topics.map((topic, index) => (
              <TopicCard
                key={topic.id}
                topicId={topic.id}
                grade={gradeNum}
                themeId={temaId || ''}
                title={topic.title}
                description={topic.description}
                emoji={topic.emoji}
                duration={topic.duration}
                difficulty={topic.difficulty}
                isCompleted={progress[topic.id]?.completed || false}
                score={progress[topic.id]?.score}
                index={index}
                color={theme.color}
                textColor={theme.textColor}
              />
            ))}
          </div>
        </div>

        {/* Keywords & Generalizations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Keywords */}
          {theme.keywords && theme.keywords.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className={`${theme.bgColor} rounded-2xl p-6 border-2 ${theme.borderColor}`}
            >
              <h3 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-xl">🔑</span>
                Anahtar Kavramlar
              </h3>
              <div className="flex flex-wrap gap-2">
                {theme.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 bg-white rounded-full text-sm font-bold ${theme.textColor} border ${theme.borderColor}`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Generalizations */}
          {theme.generalizations && theme.generalizations.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border-2 border-amber-200"
            >
              <h3 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Genellemeler
              </h3>
              <ul className="space-y-2">
                {theme.generalizations.map((gen, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    <span className="font-medium">{gen}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {themeIndex > 0 ? (
            <Link to={`/sinif/${gradeNum}/tema/${curriculum.themes[themeIndex - 1].id}`}>
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-gray-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Önceki Tema
              </motion.button>
            </Link>
          ) : <div />}

          {themeIndex < curriculum.themes.length - 1 && (
            <Link to={`/sinif/${gradeNum}/tema/${curriculum.themes[themeIndex + 1].id}`}>
              <motion.button
                whileHover={{ x: 5 }}
                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${theme.color} rounded-xl font-bold text-white`}
              >
                Sonraki Tema
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </motion.button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
