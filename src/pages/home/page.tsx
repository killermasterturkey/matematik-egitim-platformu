import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, X, Divide, Shuffle, FileText, Gamepad2, Grid3X3, BookOpen, ChevronRight, PieChart, Calculator, Shapes, Clock, Wallet, Ruler, GraduationCap } from 'lucide-react';
import Header from '../../components/feature/Header';
import { allGrades, gradeColors, CURRICULUM_PROGRESS_KEY } from '../../data/curriculum';
import { useState, useEffect } from 'react';

export default function Home() {
  const [gradeProgress, setGradeProgress] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    // LocalStorage'dan ilerleme verilerini yükle
    const savedProgress = localStorage.getItem(CURRICULUM_PROGRESS_KEY);
    if (savedProgress) {
      const allProgress = JSON.parse(savedProgress);
      const progress: { [key: number]: number } = {};

      allGrades.forEach(grade => {
        const gradeData = allProgress[grade.grade] || {};
        let completedTopics = 0;

        grade.themes.forEach(theme => {
          const themeData = gradeData[theme.id] || {};
          Object.values(themeData).forEach((topic: any) => {
            if (topic?.completed) completedTopics++;
          });
        });

        progress[grade.grade] = completedTopics;
      });

      setGradeProgress(progress);
    }
  }, []);

  // Sınıf kartları için veri hazırla
  const gradeCards = allGrades.map(grade => {
    const colors = gradeColors[grade.grade as 1 | 2 | 3 | 4];
    const totalTopics = grade.themes.reduce((acc, t) => acc + t.topics.length, 0);
    const completedTopics = gradeProgress[grade.grade] || 0;

    return {
      grade: grade.grade,
      title: grade.title,
      description: grade.description,
      totalTopics,
      completedTopics,
      colors,
      themeCount: grade.themes.length,
      totalHours: grade.totalHours
    };
  });

  const mainModules = [
    {
      id: 'toplama',
      title: 'Toplama',
      icon: Plus,
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'bg-emerald-100',
      description: 'Sayıları birleştirmeyi öğren',
      path: '/toplama',
      emoji: '➕'
    },
    {
      id: 'cikarma',
      title: 'Çıkarma',
      icon: Minus,
      color: 'from-orange-400 to-amber-500',
      bgColor: 'bg-orange-100',
      description: 'Sayıları çıkarmayı öğren',
      path: '/cikarma',
      emoji: '➖'
    },
    {
      id: 'carpma',
      title: 'Çarpma',
      icon: X,
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-100',
      description: 'Hızlı toplama yöntemini keşfet',
      path: '/carpma',
      emoji: '✖️'
    },
    {
      id: 'bolme',
      title: 'Bölme',
      icon: Divide,
      color: 'from-cyan-400 to-sky-500',
      bgColor: 'bg-cyan-100',
      description: 'Paylaşmayı ve bölmeyi öğren',
      path: '/bolme',
      emoji: '➗'
    }
  ];

  const extraModules = [
    {
      id: 'carpim-tablosu',
      title: 'Çarpım Tablosu',
      icon: Grid3X3,
      color: 'from-purple-400 to-violet-500',
      bgColor: 'bg-purple-100',
      description: 'İnteraktif çarpım tablosu',
      path: '/carpim-tablosu',
      emoji: '📊',
      isNew: true
    },
    {
      id: 'mini-oyunlar',
      title: 'Mini Oyunlar',
      icon: Gamepad2,
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-indigo-100',
      description: 'Eğlenceli matematik oyunları',
      path: '/mini-oyunlar',
      emoji: '🎮',
      isNew: true
    },
    {
      id: 'hikayeli-problemler',
      title: 'Hikayeli Problemler',
      icon: BookOpen,
      color: 'from-amber-400 to-yellow-500',
      bgColor: 'bg-amber-100',
      description: 'Hikayelerle problem çöz',
      path: '/hikayeli-problemler',
      emoji: '📖',
      isNew: true
    },
    {
      id: 'karisik',
      title: 'Karışık İşlemler',
      icon: Shuffle,
      color: 'from-fuchsia-400 to-pink-500',
      bgColor: 'bg-fuchsia-100',
      description: 'Tüm işlemleri birlikte çöz',
      path: '/karisik',
      emoji: '🎯'
    },
    {
      id: 'testler',
      title: 'Testler',
      icon: FileText,
      color: 'from-teal-400 to-emerald-500',
      bgColor: 'bg-teal-100',
      description: 'Bilgini test et',
      path: '/testler',
      emoji: '📝'
    }
  ];

  const topicModules = [
    {
      id: 'kesirler',
      title: 'Kesirler',
      icon: PieChart,
      color: 'from-rose-400 to-pink-500',
      bgColor: 'bg-rose-100',
      description: 'Payları ve kesirleri öğren',
      path: '/kesirler',
      emoji: '🍕',
      isNew: true
    },
    {
      id: 'ondalik-sayilar',
      title: 'Ondalık Sayılar',
      icon: Calculator,
      color: 'from-violet-400 to-purple-500',
      bgColor: 'bg-violet-100',
      description: 'Virgüllü sayıları keşfet',
      path: '/ondalik-sayilar',
      emoji: '🔢',
      isNew: true
    },
    {
      id: 'geometri',
      title: 'Geometri',
      icon: Shapes,
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-blue-100',
      description: 'Şekiller ve açıları öğren',
      path: '/geometri',
      emoji: '📐',
      isNew: true
    },
    {
      id: 'saat-zaman',
      title: 'Saat ve Zaman',
      icon: Clock,
      color: 'from-cyan-400 to-teal-500',
      bgColor: 'bg-cyan-100',
      description: 'Saati okumayı öğren',
      path: '/saat-zaman',
      emoji: '🕐',
      isNew: true
    },
    {
      id: 'para-hesaplama',
      title: 'Para Hesaplama',
      icon: Wallet,
      color: 'from-amber-400 to-yellow-500',
      bgColor: 'bg-amber-100',
      description: 'TL ve kuruş hesapla',
      path: '/para-hesaplama',
      emoji: '💰',
      isNew: true
    },
    {
      id: 'olcu-birimleri',
      title: 'Ölçü Birimleri',
      icon: Ruler,
      color: 'from-emerald-400 to-green-500',
      bgColor: 'bg-emerald-100',
      description: 'Metre, kilo, litre öğren',
      path: '/olcu-birimleri',
      emoji: '📏',
      isNew: true
    }
  ];

  const motivationQuotes = [
    "Başarı, küçük çabalarının toplamıdır! 🌟",
    "Her gün biraz daha öğrenmek, seni daha güçlü yapar! 💪",
    "Matematik öğrenmek, süper güçler kazanmak gibidir! 🦸",
    "Sen harikasın! Her soru seni daha akıllı yapıyor! 🧠",
    "Öğrenmek bir macera, sen de bir kaşifsin! 🚀"
  ];

  const randomQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-30 ${
              ['bg-yellow-300', 'bg-pink-300', 'bg-purple-300', 'bg-cyan-300', 'bg-orange-300', 'bg-green-300', 'bg-blue-300', 'bg-red-300'][i]
            }`}
            style={{
              width: 80 + i * 20,
              height: 80 + i * 20,
              left: `${(i * 13) % 90}%`,
              top: `${(i * 17) % 80}%`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-yellow-300 via-orange-300 to-red-400 rounded-full shadow-2xl"
            >
              <span className="text-6xl">🎉</span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 mb-6 drop-shadow-lg"
          >
            Matematiği Eğlenceli Hale Getir!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            🌟 Toplama, çıkarma, çarpma ve bölme işlemlerini oyun gibi öğren!
            Her konuyu kendi hızında, eğlenerek keşfet! 🚀
          </motion.p>

          {/* Motivasyon Sözü */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 rounded-2xl p-6 max-w-2xl mx-auto mb-10 shadow-xl border-4 border-white"
          >
            <p className="text-lg md:text-xl font-black text-purple-700">
              {randomQuote}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            {[
              { icon: '⭐', text: 'Eğlenceli Öğrenme' },
              { icon: '🔊', text: 'Sesli Anlatım' },
              { icon: '🏆', text: 'Rozetler Kazan' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-xl"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-base font-bold text-gray-800 whitespace-nowrap">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sınıf Bazlı Müfredat Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <GraduationCap className="w-10 h-10 text-purple-600" />
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Sınıf Bazlı Müfredat
            </h2>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            MEB Türkiye Yüzyılı Maarif Modeli ile uyumlu, kapsamlı matematik eğitimi!
          </p>
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mt-2 bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full"
          >
            MEB Onaylı Müfredat
          </motion.span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gradeCards.map((card, index) => {
            const progress = card.totalTopics > 0 ? Math.round((card.completedTopics / card.totalTopics) * 100) : 0;

            return (
              <motion.div
                key={card.grade}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Link to={`/sinif/${card.grade}`} className="block">
                  <div className={`relative ${card.colors.bg} rounded-3xl shadow-xl overflow-hidden border-4 ${card.colors.border} h-full`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.colors.gradient} opacity-10`}></div>

                    <div className="relative p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${card.colors.gradient} rounded-2xl shadow-lg`}
                        >
                          <span className="text-4xl">{card.colors.emoji}</span>
                        </motion.div>
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-3xl"
                        >
                          {card.colors.mascot}
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl font-black ${card.colors.textDark} mb-1`}>
                        {card.colors.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs font-semibold text-gray-600 mb-3 line-clamp-2">
                        {card.description}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`text-xs font-bold ${card.colors.text} ${card.colors.bgMedium} px-2 py-1 rounded-full`}>
                          {card.themeCount} Tema
                        </span>
                        <span className={`text-xs font-bold ${card.colors.text} ${card.colors.bgMedium} px-2 py-1 rounded-full`}>
                          {card.totalTopics} Konu
                        </span>
                        <span className={`text-xs font-bold ${card.colors.text} ${card.colors.bgMedium} px-2 py-1 rounded-full`}>
                          {card.totalHours} Saat
                        </span>
                      </div>

                      {/* Progress */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-gray-500">İlerleme</span>
                          <span className={`text-xs font-bold ${card.colors.text}`}>{progress}%</span>
                        </div>
                        <div className="h-2 bg-white rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className={`h-full bg-gradient-to-r ${card.colors.gradient} rounded-full`}
                          />
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className={`flex items-center justify-center gap-2 bg-gradient-to-r ${card.colors.gradient} px-4 py-2 rounded-xl shadow-lg`}
                      >
                        <span className="text-sm font-bold text-white">
                          {progress === 0 ? 'Başla' : progress === 100 ? 'Tekrar Et' : 'Devam Et'}
                        </span>
                        <ChevronRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4 İşlem Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
            🔢 Dört İşlem
          </h2>
          <p className="text-lg font-semibold text-gray-700">Temel matematik işlemlerini öğren!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Link to={module.path} className="block">
                <div className={`relative ${module.bgColor} rounded-3xl shadow-2xl overflow-hidden border-4 border-white h-full`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-20`}></div>

                  <div className="relative p-6">
                    <div className="flex justify-between items-start mb-4">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${module.color} rounded-2xl shadow-lg`}
                      >
                        <module.icon className="w-8 h-8 text-white" strokeWidth={3} />
                      </motion.div>
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-4xl"
                      >
                        {module.emoji}
                      </motion.span>
                    </div>

                    <h3 className="text-2xl font-black text-gray-800 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-base font-semibold text-gray-700 mb-4">
                      {module.description}
                    </p>

                    <div className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                      <span className="text-sm font-bold text-gray-800">Başla</span>
                      <ChevronRight className="w-5 h-5 text-purple-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extra Modules Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
            🎮 Eğlenceli Öğrenme
          </h2>
          <p className="text-lg font-semibold text-gray-700">Oyunlar, hikayeler ve daha fazlası!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extraModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Link to={module.path} className="block">
                <div className={`relative ${module.bgColor} rounded-3xl shadow-xl overflow-hidden border-4 border-white h-full`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-20`}></div>

                  {module.isNew && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute top-4 right-4 bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg"
                    >
                      YENİ!
                    </motion.div>
                  )}

                  <div className="relative p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${module.color} rounded-2xl shadow-lg flex-shrink-0`}
                      >
                        <module.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-black text-gray-800 flex items-center gap-2">
                          {module.title}
                          <span className="text-2xl">{module.emoji}</span>
                        </h3>
                        <p className="text-sm font-semibold text-gray-600">
                          {module.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                    >
                      <span className="text-sm font-bold text-gray-800">Keşfet</span>
                      <ChevronRight className="w-5 h-5 text-purple-500" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Topic Modules Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
            📚 Yeni Konular
          </h2>
          <p className="text-lg font-semibold text-gray-700">Matematiğin farklı alanlarını keşfet!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Link to={module.path} className="block">
                <div className={`relative ${module.bgColor} rounded-3xl shadow-xl overflow-hidden border-4 border-white h-full`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-20`}></div>

                  {module.isNew && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute top-4 right-4 bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg"
                    >
                      YENİ!
                    </motion.div>
                  )}

                  <div className="relative p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${module.color} rounded-2xl shadow-lg flex-shrink-0`}
                      >
                        <module.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-black text-gray-800 flex items-center gap-2">
                          {module.title}
                          <span className="text-2xl">{module.emoji}</span>
                        </h3>
                        <p className="text-sm font-semibold text-gray-600">
                          {module.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                    >
                      <span className="text-sm font-bold text-gray-800">Keşfet</span>
                      <ChevronRight className="w-5 h-5 text-purple-500" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 border-4 border-purple-200"
        >
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-10 text-center">
            🌟 Neden Matematik Dünyası? 🌟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: '📚', title: 'Adım Adım Öğrenme', desc: 'Her konuyu kendi hızında, basitten zora doğru öğren', color: 'from-green-400 to-emerald-500' },
              { icon: '🎧', title: 'Sesli Anlatım', desc: 'Her konuyu dinleyerek de öğrenebilirsin', color: 'from-blue-400 to-indigo-500' },
              { icon: '🎮', title: 'Eğlenceli Alıştırmalar', desc: 'Oyun gibi sorularla pratik yap', color: 'from-purple-400 to-pink-500' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className={`w-24 h-24 flex items-center justify-center bg-gradient-to-br ${item.color} rounded-full mx-auto mb-5 shadow-xl`}
                >
                  <span className="text-5xl">{item.icon}</span>
                </motion.div>
                <h3 className="text-xl font-black text-gray-800 mb-3">{item.title}</h3>
                <p className="text-base font-semibold text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Atatürk Sözü */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center border-4 border-white"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-xl"
            >
              <span className="text-4xl">🇹🇷</span>
            </motion.div>
          </div>
          <p className="text-xl md:text-2xl font-black text-white leading-relaxed italic">
            "Bir gün ulusu sizin gibi beni anlamış gençliğe bırakacağımdan çok memnun ve mesudum."
          </p>
          <p className="text-lg font-bold text-white/90 mt-4">
            - Mustafa Kemal Atatürk
          </p>
        </motion.div>
      </section>

      <div className="h-12"></div>
    </div>
  );
}
