import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Star, GraduationCap, Trophy, ChevronRight } from 'lucide-react';
import Header from '../../components/feature/Header';
import { allGrades, gradeColors, CURRICULUM_PROGRESS_KEY, curriculumStats } from '../../data/curriculum';
import { useState, useEffect } from 'react';

export default function SiniflarPage() {
  const [gradeProgress, setGradeProgress] = useState<{ [key: number]: { completed: number; total: number } }>({});

  useEffect(() => {
    // LocalStorage'dan ilerleme verilerini yükle
    const savedProgress = localStorage.getItem(CURRICULUM_PROGRESS_KEY);
    if (savedProgress) {
      const allProgress = JSON.parse(savedProgress);
      const progress: { [key: number]: { completed: number; total: number } } = {};

      allGrades.forEach(grade => {
        const gradeData = allProgress[grade.grade] || {};
        let completedTopics = 0;
        const totalTopics = grade.themes.reduce((acc, t) => acc + t.topics.length, 0);

        grade.themes.forEach(theme => {
          const themeData = gradeData[theme.id] || {};
          Object.values(themeData).forEach((topic: any) => {
            if (topic?.completed) completedTopics++;
          });
        });

        progress[grade.grade] = { completed: completedTopics, total: totalTopics };
      });

      setGradeProgress(progress);
    } else {
      // Varsayılan değerler
      const defaultProgress: { [key: number]: { completed: number; total: number } } = {};
      allGrades.forEach(grade => {
        const totalTopics = grade.themes.reduce((acc, t) => acc + t.topics.length, 0);
        defaultProgress[grade.grade] = { completed: 0, total: totalTopics };
      });
      setGradeProgress(defaultProgress);
    }
  }, []);

  const totalCompleted = Object.values(gradeProgress).reduce((acc, p) => acc + p.completed, 0);
  const totalTopicsAll = Object.values(gradeProgress).reduce((acc, p) => acc + p.total, 0);
  const overallProgress = totalTopicsAll > 0 ? Math.round((totalCompleted / totalTopicsAll) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🌟', '🚀', '🎯', '🏆', '📚', '✏️', '🔢', '📐', '💡', '🎓'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${(i * 11) % 100}%`,
              top: `${(i * 13) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {emoji}
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
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 mb-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 text-6xl">🎓</div>
            <div className="absolute bottom-4 right-4 text-6xl">📚</div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center gap-6 text-white">
            {/* Icon */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-28 h-28 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-3xl shadow-xl"
            >
              <GraduationCap className="w-16 h-16 text-white" />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black mb-2">
                Sınıf Bazlı Müfredat
              </h1>
              <p className="text-lg font-semibold opacity-90 mb-4">
                MEB Türkiye Yüzyılı Maarif Modeli ile uyumlu, kapsamlı matematik eğitimi!
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-bold">{curriculumStats.totalThemes} Tema</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="w-5 h-5" />
                  <span className="font-bold">{curriculumStats.totalTopics} Konu</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold">{curriculumStats.totalHours} Saat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="relative mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-white/80">Toplam İlerleme</span>
              <span className="text-sm font-bold text-white">{totalCompleted}/{totalTopicsAll} Konu ({overallProgress}%)</span>
            </div>
            <div className="h-4 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-white rounded-full"
              />
            </div>
            {overallProgress === 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -right-2 -top-2"
              >
                <Trophy className="w-8 h-8 text-yellow-300" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* MEB Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-red-100 to-red-50 rounded-2xl p-4 mb-8 text-center border-2 border-red-200"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2"
          >
            <span className="text-2xl">🇹🇷</span>
            <span className="text-lg font-bold text-red-600">
              Türkiye Yüzyılı Maarif Modeli Müfredatı
            </span>
            <span className="text-2xl">🇹🇷</span>
          </motion.span>
        </motion.div>

        {/* Grade Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {allGrades.map((grade, index) => {
            const colors = gradeColors[grade.grade as 0 | 1 | 2 | 3 | 4];
            const progressData = gradeProgress[grade.grade] || { completed: 0, total: 0 };
            const progressPercent = progressData.total > 0 ? Math.round((progressData.completed / progressData.total) * 100) : 0;

            return (
              <motion.div
                key={grade.grade}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Link to={`/sinif/${grade.grade}`} className="block">
                  <div className={`relative ${colors.bg} rounded-3xl shadow-xl overflow-hidden border-4 ${colors.border} h-full`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-10`}></div>

                    <div className="relative p-6 md:p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${colors.gradient} rounded-2xl shadow-lg`}
                        >
                          <span className="text-5xl">{colors.emoji}</span>
                        </motion.div>
                        <div className="flex flex-col items-end">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-5xl mb-2"
                          >
                            {colors.mascot}
                          </motion.div>
                          {progressPercent === 100 && (
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <Trophy className="w-6 h-6 text-yellow-500" />
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className={`text-3xl font-black ${colors.textDark} mb-2`}>
                        {colors.name} Matematik
                      </h2>

                      {/* Description */}
                      <p className="text-sm font-semibold text-gray-600 mb-4">
                        {grade.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className={`${colors.bgMedium} rounded-xl p-3 text-center`}>
                          <div className={`text-2xl font-black ${colors.textDark}`}>{grade.themes.length}</div>
                          <div className="text-xs font-bold text-gray-600">Tema</div>
                        </div>
                        <div className={`${colors.bgMedium} rounded-xl p-3 text-center`}>
                          <div className={`text-2xl font-black ${colors.textDark}`}>{progressData.total}</div>
                          <div className="text-xs font-bold text-gray-600">Konu</div>
                        </div>
                        <div className={`${colors.bgMedium} rounded-xl p-3 text-center`}>
                          <div className={`text-2xl font-black ${colors.textDark}`}>{grade.totalHours}</div>
                          <div className="text-xs font-bold text-gray-600">Saat</div>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-gray-500">İlerleme</span>
                          <span className={`text-sm font-bold ${colors.text}`}>
                            {progressData.completed}/{progressData.total} ({progressPercent}%)
                          </span>
                        </div>
                        <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercent}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full`}
                          />
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className={`flex items-center justify-center gap-2 bg-gradient-to-r ${colors.gradient} px-6 py-3 rounded-xl shadow-lg`}
                      >
                        <span className="text-base font-bold text-white">
                          {progressPercent === 0 ? 'Keşfetmeye Başla' : progressPercent === 100 ? 'Tekrar Et' : 'Devam Et'}
                        </span>
                        <ChevronRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Atatürk Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-center text-white shadow-xl"
        >
          <p className="text-lg font-bold italic mb-2">
            "Milletleri kurtaranlar yalnız ve ancak öğretmenlerdir."
          </p>
          <p className="text-sm font-semibold opacity-90">- Mustafa Kemal Atatürk</p>
        </motion.div>
      </main>
    </div>
  );
}
