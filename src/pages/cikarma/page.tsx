import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import LessonCard from '../toplama/components/LessonCard';
import ProgressBar from '../toplama/components/ProgressBar';
import DetailedLessonContent from './components/DetailedLessonContent';
import MathTricks, { cikarmaTricks } from '../../components/lesson/MathTricks';

export default function Cikarma() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);

  const lessons = [
    {
      id: 1,
      title: '1 Basamaklı Çıkarma',
      level: 1,
      icon: '🌟',
      color: 'from-red-400 to-pink-500',
      emoji: '➖'
    },
    {
      id: 2,
      title: '2 Basamaklı Çıkarma',
      level: 2,
      icon: '⭐',
      color: 'from-pink-400 to-rose-500',
      emoji: '➖'
    },
    {
      id: 3,
      title: '3 Basamaklı Çıkarma',
      level: 3,
      icon: '💫',
      color: 'from-rose-400 to-red-500',
      emoji: '➖'
    },
    {
      id: 4,
      title: '4 Basamaklı Çıkarma',
      level: 4,
      icon: '✨',
      color: 'from-red-500 to-orange-500',
      emoji: '➖'
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('mathProgress');
    if (saved) {
      const progress = JSON.parse(saved);
      if (progress.cikarma) {
        setCompletedLessons(Object.keys(progress.cikarma).map(Number));
      }
    }
  }, []);

  const handleLessonComplete = (lessonId: number) => {
    const newCompleted = [...completedLessons, lessonId];
    setCompletedLessons(newCompleted);

    const saved = localStorage.getItem('mathProgress');
    const progress = saved ? JSON.parse(saved) : {};
    progress.cikarma = progress.cikarma || {};
    progress.cikarma[lessonId] = true;
    localStorage.setItem('mathProgress', JSON.stringify(progress));

    setSelectedLesson(null);
  };

  const progress = (completedLessons.length / lessons.length) * 100;

  const motivationQuotes = [
    "Çıkarma yapmak da toplama kadar kolay! Sen harikasın! 🌟",
    "Her soru seni daha akıllı yapıyor! 💪",
    "Matematik seni süper güçlü yapıyor! 🦸",
    "Başarı, azimle gelir! Sen yaparsın! 🚀"
  ];

  const randomQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-28 h-28 flex items-center justify-center bg-red-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}>
          <span className="text-6xl">➖</span>
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 flex items-center justify-center bg-pink-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <span className="text-5xl">🎯</span>
        </div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 flex items-center justify-center bg-rose-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
          <span className="text-5xl">⭐</span>
        </div>
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex">
          <Link to="/" className="hover:text-red-600 cursor-pointer whitespace-nowrap">🏠 Ana Sayfa</Link>
          <i className="ri-arrow-right-s-line text-xl"></i>
          <span className="text-red-600 whitespace-nowrap">➖ Çıkarma</span>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl shadow-2xl transform hover:rotate-12 transition-transform cursor-pointer animate-bounce">
              <span className="text-6xl">➖</span>
            </div>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mb-4">
            Çıkarma İşlemi
          </h1>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Sayıları çıkararak yeni sayılar bul! 🎉
          </p>
          
          {/* Motivasyon Sözü */}
          <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 rounded-2xl p-6 max-w-2xl mx-auto shadow-xl border-4 border-white">
            <p className="text-lg md:text-xl font-black text-purple-700">
              {randomQuote}
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mb-12">
          <ProgressBar progress={progress} completedLessons={completedLessons.length} totalLessons={lessons.length} />
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <LessonCard
                lesson={lesson}
                isCompleted={completedLessons.includes(lesson.id)}
                isLocked={false}
                onClick={() => setSelectedLesson(lesson)}
              />
            </div>
          ))}
        </div>

        {/* Math Tricks */}
        <div className="mb-8">
          <MathTricks
            title="Çıkarma Taktikleri"
            subtitle="Bu taktiklerle çıkarma işlemlerini çok hızlı yapabilirsin!"
            tricks={cikarmaTricks}
            accentColor="red"
          />
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 border-4 border-yellow-300 shadow-xl mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg animate-bounce">
              <span className="text-4xl">💡</span>
            </div>
            <h3 className="text-2xl font-black text-orange-800">Biliyor musun?</h3>
          </div>
          <p className="text-lg font-semibold text-orange-700 leading-relaxed">
            Çıkarma işlemi, bir sayıdan başka bir sayıyı eksiltme işlemidir! Günlük hayatta sürekli kullanırız.
            Alışverişte para harcarken, oyun oynarken can kaybederken, hatta kalan zamanı hesaplarken çıkarma yaparsın! 🎈
          </p>
        </div>

        {/* Atatürk Sözü */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 md:p-10 text-center border-4 border-white">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-xl">
              <span className="text-4xl">🇹🇷</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-black text-white leading-relaxed italic">
            "Bir gün ulusu sizin gibi beni anlamış gençliğe bırakacağımdan çok memnun ve mesudum."
          </p>
          <p className="text-lg font-bold text-white/90 mt-4">
            - Mustafa Kemal Atatürk
          </p>
        </div>
      </div>

      {/* Lesson Content Modal */}
      {selectedLesson && (
        <DetailedLessonContent
          lesson={selectedLesson}
          onComplete={() => handleLessonComplete(selectedLesson.id)}
          onClose={() => setSelectedLesson(null)}
        />
      )}
    </div>
  );
}
