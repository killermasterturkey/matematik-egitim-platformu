import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import BalloonGame from './components/BalloonGame';
import MemoryGame from './components/MemoryGame';
import SpeedRace from './components/SpeedRace';
import MathMaze from './components/MathMaze';

export default function MiniOyunlar() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  const grades = [
    { id: 1, label: '1. Sınıf', emoji: '🌱', color: 'from-green-400 to-emerald-500', bgColor: 'bg-green-100', description: 'Kolay sorular (1-9)' },
    { id: 2, label: '2. Sınıf', emoji: '🌿', color: 'from-blue-400 to-cyan-500', bgColor: 'bg-blue-100', description: 'Orta sorular (10-99)' },
    { id: 3, label: '3. Sınıf', emoji: '🌳', color: 'from-purple-400 to-violet-500', bgColor: 'bg-purple-100', description: 'Zor sorular (100-999)' },
    { id: 4, label: '4. Sınıf', emoji: '🏔️', color: 'from-orange-400 to-red-500', bgColor: 'bg-orange-100', description: 'Uzman sorular (1000+)' }
  ];

  const games = [
    {
      id: 'balloon',
      title: 'Balon Patlatma',
      description: 'Doğru cevabı içeren balonu patlat!',
      icon: '🎈',
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-100',
      difficulty: 'Kolay'
    },
    {
      id: 'memory',
      title: 'Hafıza Kartları',
      description: 'İşlem ve sonuç eşleştir!',
      icon: '🃏',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-blue-100',
      difficulty: 'Orta'
    },
    {
      id: 'speed',
      title: 'Hız Yarışı',
      description: 'Zamana karşı yarış!',
      icon: '🏎️',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-100',
      difficulty: 'Zor'
    },
    {
      id: 'maze',
      title: 'Matematik Labirenti',
      description: 'Soruları çözerek labirentten çık!',
      icon: '🧩',
      color: 'from-green-400 to-teal-500',
      bgColor: 'bg-green-100',
      difficulty: 'Uzman'
    }
  ];

  const handleBack = () => {
    setSelectedGame(null);
  };

  const handleBackToGrades = () => {
    setSelectedGame(null);
    setSelectedGrade(null);
  };

  const renderGame = () => {
    const grade = selectedGrade || 1;
    switch (selectedGame) {
      case 'balloon': return <BalloonGame onBack={handleBack} initialDifficulty={grade as 1 | 2 | 3 | 4} />;
      case 'memory': return <MemoryGame onBack={handleBack} initialDifficulty={grade as 1 | 2 | 3 | 4} />;
      case 'speed': return <SpeedRace onBack={handleBack} initialDifficulty={grade as 1 | 2 | 3 | 4} />;
      case 'maze': return <MathMaze onBack={handleBack} initialDifficulty={grade as 1 | 2 | 3 | 4} />;
      default: return null;
    }
  };

  // Oyun seçildiyse oyunu göster
  if (selectedGame) {
    return renderGame();
  }

  // Sınıf seçimi ekranı
  if (!selectedGrade) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['🎮', '🎯', '🏆', '⭐', '🎲', '🎪'].map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        <Header />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex"
          >
            <Link to="/" className="hover:text-purple-600 cursor-pointer whitespace-nowrap">Ana Sayfa</Link>
            <span className="text-xl">→</span>
            <span className="text-purple-600 whitespace-nowrap">Mini Oyunlar</span>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-purple-200"
          >
            <div className="flex items-center justify-center gap-6 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl shadow-xl"
              >
                <span className="text-5xl">🎓</span>
              </motion.div>
            </div>
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center mb-4">
              Sınıfını Seç
            </h1>
            <p className="text-lg font-semibold text-gray-600 text-center">
              Oyunlara başlamadan önce sınıf seviyeni seç. Sorular seçtiğin seviyeye göre hazırlanacak!
            </p>
          </motion.div>

          {/* Grade Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {grades.map((grade, index) => (
              <motion.div
                key={grade.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedGrade(grade.id)}
                className="cursor-pointer"
              >
                <div className={`relative ${grade.bgColor} rounded-3xl shadow-xl overflow-hidden border-4 border-white hover:shadow-2xl transition-all`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${grade.color} opacity-20`}></div>

                  <div className="relative p-8">
                    <div className="flex items-center gap-6">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${grade.color} rounded-2xl shadow-lg`}
                      >
                        <span className="text-4xl">{grade.emoji}</span>
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-3xl font-black text-gray-800 mb-2">
                          {grade.label}
                        </h3>
                        <p className="text-base font-semibold text-gray-600 mb-3">
                          {grade.description}
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r ${grade.color} text-white rounded-full shadow-lg font-bold`}
                        >
                          <span>Seç</span>
                          <span>→</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-6 border-4 border-blue-200 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg">
                <span className="text-3xl">💡</span>
              </div>
              <div>
                <h4 className="text-xl font-black text-indigo-800 mb-1">Bilgi</h4>
                <p className="text-sm font-semibold text-indigo-700">
                  Her sınıf seviyesi farklı zorlukta sorular içerir. Kendi seviyene uygun olanı seçerek en iyi şekilde pratik yapabilirsin!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🎮', '🎯', '🏆', '⭐', '🎲', '🎪'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex"
        >
          <Link to="/" className="hover:text-purple-600 cursor-pointer whitespace-nowrap">Ana Sayfa</Link>
          <span className="text-xl">→</span>
          <button onClick={handleBackToGrades} className="hover:text-purple-600 cursor-pointer whitespace-nowrap">Mini Oyunlar</button>
          <span className="text-xl">→</span>
          <span className="text-purple-600 whitespace-nowrap">{grades.find(g => g.id === selectedGrade)?.label}</span>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-purple-200"
        >
          <div className="flex items-start gap-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-28 h-28 flex items-center justify-center bg-gradient-to-br ${grades.find(g => g.id === selectedGrade)?.color || 'from-purple-400 to-pink-500'} rounded-3xl shadow-xl flex-shrink-0`}
            >
              <span className="text-6xl">{grades.find(g => g.id === selectedGrade)?.emoji || '🎮'}</span>
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Mini Oyunlar
                </h1>
                <span className={`px-4 py-2 rounded-full text-sm font-black bg-gradient-to-r ${grades.find(g => g.id === selectedGrade)?.color} text-white shadow-lg`}>
                  {grades.find(g => g.id === selectedGrade)?.label}
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">
                Matematik öğrenmek hiç bu kadar eğlenceli olmamıştı! Oyun oynayarak
                dört işlem becerilerini geliştir, puanlar topla ve eğlen!
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <span className="text-xl">🎯</span>
                  <span className="text-sm font-bold text-gray-700">4 Farklı Oyun</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
                  <span className="text-xl">🏆</span>
                  <span className="text-sm font-bold text-gray-700">Puan Kazan</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBackToGrades}
                  className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full transition-colors"
                >
                  <span className="text-xl">🔄</span>
                  <span className="text-sm font-bold text-gray-700">Sınıf Değiştir</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedGame(game.id)}
              className="cursor-pointer"
            >
              <div className={`relative ${game.bgColor} rounded-3xl shadow-xl overflow-hidden border-4 border-white hover:shadow-2xl transition-all`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-20`}></div>

                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      className={`w-24 h-24 flex items-center justify-center bg-gradient-to-br ${game.color} rounded-2xl shadow-lg`}
                    >
                      <span className="text-5xl">{game.icon}</span>
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-black text-gray-800">
                          {game.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${game.color} text-white`}>
                          {game.difficulty}
                        </span>
                      </div>
                      <p className="text-base font-semibold text-gray-600 mb-4">
                        {game.description}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${game.color} text-white rounded-full shadow-lg font-bold`}
                      >
                        <span>🚀 Oyna</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 border-4 border-yellow-300 shadow-xl mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg"
            >
              <span className="text-4xl">💡</span>
            </motion.div>
            <h3 className="text-2xl font-black text-orange-800">Oyun İpuçları</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl">
              <span className="text-2xl">🎈</span>
              <p className="text-sm font-semibold text-gray-700">
                <strong>Balon Patlatma:</strong> Balonlar yükselirken doğru cevabı bul!
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl">
              <span className="text-2xl">🃏</span>
              <p className="text-sm font-semibold text-gray-700">
                <strong>Hafıza Kartları:</strong> İşlem ve sonuçları eşleştir, hafızanı güçlendir!
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl">
              <span className="text-2xl">🏎️</span>
              <p className="text-sm font-semibold text-gray-700">
                <strong>Hız Yarışı:</strong> Ne kadar hızlı cevap verirsen o kadar puan!
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl">
              <span className="text-2xl">🧩</span>
              <p className="text-sm font-semibold text-gray-700">
                <strong>Labirent:</strong> Her doğru cevap seni çıkışa yaklaştırır!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Atatürk Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 text-center border-4 border-white"
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
