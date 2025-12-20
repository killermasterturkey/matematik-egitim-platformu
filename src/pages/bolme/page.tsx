import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import LessonCard from '../toplama/components/LessonCard';
import ProgressBar from '../toplama/components/ProgressBar';
import DetailedLessonContent from './components/DetailedLessonContent';
import MathTricks, { bolmeTricks } from '../../components/lesson/MathTricks';

export default function Bolme() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);

  const lessons = [
    {
      id: 1,
      title: '1 Basamaklı Sayılarla Bölme',
      description: 'Tek haneli sayıları bölmeyi öğren',
      level: 1,
      icon: 'ri-number-1',
      color: 'from-purple-400 to-violet-500',
      emoji: '1️⃣'
    },
    {
      id: 2,
      title: '2 Basamaklı Sayılarla Bölme',
      description: 'İki haneli sayıları bölmeyi öğren',
      level: 2,
      icon: 'ri-number-2',
      color: 'from-violet-400 to-fuchsia-500',
      emoji: '2️⃣'
    },
    {
      id: 3,
      title: '3 Basamaklı Sayılarla Bölme',
      description: 'Üç haneli sayıları bölmeyi öğren',
      level: 3,
      icon: 'ri-number-3',
      color: 'from-fuchsia-400 to-pink-500',
      emoji: '3️⃣'
    },
    {
      id: 4,
      title: '4 Basamaklı Sayılarla Bölme',
      description: 'Dört haneli sayıları bölmeyi öğren',
      level: 4,
      icon: 'ri-number-4',
      color: 'from-pink-400 to-rose-500',
      emoji: '4️⃣'
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('mathProgress');
    if (saved) {
      const progress = JSON.parse(saved);
      if (progress.bolme) {
        setCompletedLessons(Object.keys(progress.bolme).map(Number));
      }
    }
  }, []);

  const handleLessonComplete = (lessonId: number) => {
    const newCompleted = [...completedLessons, lessonId];
    setCompletedLessons(newCompleted);

    const saved = localStorage.getItem('mathProgress');
    const progress = saved ? JSON.parse(saved) : {};
    progress.bolme = progress.bolme || {};
    progress.bolme[lessonId] = true;
    localStorage.setItem('mathProgress', JSON.stringify(progress));

    setSelectedLesson(null);
  };

  const progress = (completedLessons.length / lessons.length) * 100;

  const motivationQuotes = [
    "Bölme yapmak paylaşmak demek! Sen harikasın! 🌟",
    "Her soru seni daha akıllı yapıyor! 💪",
    "Bölme ustası olmak için doğru yoldasın! 🦸",
    "Başarı, pratikle gelir! Sen yaparsın! 🚀"
  ];

  const randomQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-100 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-purple-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-violet-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-fuchsia-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex">
          <Link to="/" className="hover:text-purple-600 cursor-pointer whitespace-nowrap">🏠 Ana Sayfa</Link>
          <i className="ri-arrow-right-s-line text-xl"></i>
          <span className="text-purple-600 whitespace-nowrap">➗ Bölme</span>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-purple-200">
          <div className="flex items-start gap-8">
            <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-purple-400 to-violet-500 rounded-3xl shadow-xl flex-shrink-0 transform hover:rotate-6 transition-transform">
              <span className="text-6xl">➗</span>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 mb-3">
                🎯 Bölme İşlemi
              </h1>
              <p className="text-lg font-semibold text-gray-700 mb-6 leading-relaxed">
                Bölme, bir sayıyı eşit parçalara ayırma işlemidir. 
                Adım adım öğrenerek bölme işleminde uzman olacaksın! 🌟
              </p>
              <ProgressBar progress={progress} total={lessons.length} completed={completedLessons.length} />
            </div>
          </div>
        </div>

        {/* Motivasyon Sözü */}
        <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 rounded-2xl p-6 max-w-2xl mx-auto shadow-xl border-4 border-white mb-8">
          <p className="text-lg md:text-xl font-black text-purple-700 text-center">
            {randomQuote}
          </p>
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
            title="Bölme Taktikleri"
            subtitle="Bu taktiklerle bölme işlemlerini çok hızlı yapabilirsin!"
            tricks={bolmeTricks}
            accentColor="purple"
          />
        </div>

        {/* Practice Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border-4 border-yellow-200">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl">
              <span className="text-5xl">✏️</span>
            </div>
            <div>
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                🎮 Pratik Yap
              </h3>
              <p className="text-base font-semibold text-gray-600">Öğrendiklerini pekiştir ve eğlen! 🚀</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer border-3 border-blue-200">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg">
                <span className="text-3xl">❓</span>
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-gray-800">Çoktan Seçmeli</div>
                <div className="text-sm font-semibold text-gray-600">Doğru cevabı seç</div>
              </div>
            </button>

            <button className="flex items-center gap-4 p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer border-3 border-purple-200">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg">
                <span className="text-3xl">✍️</span>
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-gray-800">Boşluk Doldur</div>
                <div className="text-sm font-semibold text-gray-600">Cevabı yaz</div>
              </div>
            </button>

            <button className="flex items-center gap-4 p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer border-3 border-orange-200">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-gray-800">Sürükle Bırak</div>
                <div className="text-sm font-semibold text-gray-600">Eşleştir</div>
              </div>
            </button>
          </div>
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
            Bölme işlemi, paylaşmak ve eşit dağıtmak için kullanılır! Günlük hayatta sürekli kullanırız.
            Pizza paylaşırken, şeker dağıtırken, takım kurarken, hep bölme yaparsın! 🎈
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
