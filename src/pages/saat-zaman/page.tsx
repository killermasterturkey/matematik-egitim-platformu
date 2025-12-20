import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  clockTime?: { hour: number; minute: number };
  options: string[];
  correct: number;
  explanation: string;
}

interface Level {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

const Clock = ({ hour, minute, size = 120 }: { hour: number; minute: number; size?: number }) => {
  const hourAngle = (hour % 12) * 30 + minute * 0.5;
  const minuteAngle = minute * 6;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="48" fill="white" stroke="#4B5563" strokeWidth="3"/>
      <circle cx="50" cy="50" r="3" fill="#4B5563"/>

      {/* Hour markers */}
      {[...Array(12)].map((_, i) => {
        const angle = i * 30 - 90;
        const x1 = 50 + 40 * Math.cos(angle * Math.PI / 180);
        const y1 = 50 + 40 * Math.sin(angle * Math.PI / 180);
        const x2 = 50 + 45 * Math.cos(angle * Math.PI / 180);
        const y2 = 50 + 45 * Math.sin(angle * Math.PI / 180);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4B5563" strokeWidth="2"/>
        );
      })}

      {/* Hour numbers */}
      {[12, 3, 6, 9].map((num) => {
        const angle = (num === 12 ? 0 : num) * 30 - 90;
        const x = 50 + 35 * Math.cos(angle * Math.PI / 180);
        const y = 50 + 35 * Math.sin(angle * Math.PI / 180) + 4;
        return (
          <text key={num} x={x} y={y} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">
            {num}
          </text>
        );
      })}

      {/* Hour hand */}
      <line
        x1="50"
        y1="50"
        x2={50 + 25 * Math.cos((hourAngle - 90) * Math.PI / 180)}
        y2={50 + 25 * Math.sin((hourAngle - 90) * Math.PI / 180)}
        stroke="#1F2937"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Minute hand */}
      <line
        x1="50"
        y1="50"
        x2={50 + 35 * Math.cos((minuteAngle - 90) * Math.PI / 180)}
        y2={50 + 35 * Math.sin((minuteAngle - 90) * Math.PI / 180)}
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function SaatZaman() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('saat-zaman-completed');
    if (saved) {
      setCompletedLevels(JSON.parse(saved));
    }
  }, []);

  const levels: Level[] = [
    {
      id: 1,
      title: 'Tam Saatler',
      description: 'Tam saatleri okumayı öğren',
      icon: '🕐',
      color: 'from-blue-400 to-cyan-500',
      questions: [
        {
          id: 1,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 3, minute: 0 },
          options: ['2:00', '3:00', '4:00', '6:00'],
          correct: 1,
          explanation: 'Akrep 3\'ün üzerinde, yelkovan 12\'de. Saat 3:00.'
        },
        {
          id: 2,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 7, minute: 0 },
          options: ['6:00', '7:00', '8:00', '5:00'],
          correct: 1,
          explanation: 'Akrep 7\'nin üzerinde, yelkovan 12\'de. Saat 7:00.'
        },
        {
          id: 3,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 12, minute: 0 },
          options: ['12:00', '6:00', '11:00', '1:00'],
          correct: 0,
          explanation: 'Her iki ibrede 12\'nin üzerinde. Saat tam 12:00 (öğlen veya gece yarısı).'
        },
        {
          id: 4,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 9, minute: 0 },
          options: ['8:00', '10:00', '9:00', '3:00'],
          correct: 2,
          explanation: 'Akrep 9\'un üzerinde, yelkovan 12\'de. Saat 9:00.'
        },
        {
          id: 5,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 5, minute: 0 },
          options: ['4:00', '6:00', '5:00', '7:00'],
          correct: 2,
          explanation: 'Akrep 5\'in üzerinde, yelkovan 12\'de. Saat 5:00.'
        },
        {
          id: 6,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 11, minute: 0 },
          options: ['10:00', '11:00', '12:00', '1:00'],
          correct: 1,
          explanation: 'Akrep 11\'in üzerinde, yelkovan 12\'de. Saat 11:00.'
        },
        {
          id: 7,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 2, minute: 0 },
          options: ['1:00', '3:00', '2:00', '4:00'],
          correct: 2,
          explanation: 'Akrep 2\'nin üzerinde, yelkovan 12\'de. Saat 2:00.'
        },
        {
          id: 8,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 6, minute: 0 },
          options: ['5:00', '7:00', '12:00', '6:00'],
          correct: 3,
          explanation: 'Akrep 6\'nın üzerinde, yelkovan 12\'de. Saat 6:00.'
        }
      ]
    },
    {
      id: 2,
      title: 'Buçuklar',
      description: 'Buçuk saatleri öğren',
      icon: '🕧',
      color: 'from-green-400 to-emerald-500',
      questions: [
        {
          id: 1,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 3, minute: 30 },
          options: ['3:00', '3:30', '4:30', '2:30'],
          correct: 1,
          explanation: 'Akrep 3 ile 4 arasında, yelkovan 6\'da. Saat 3:30 (üç buçuk).'
        },
        {
          id: 2,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 8, minute: 30 },
          options: ['8:00', '9:30', '8:30', '7:30'],
          correct: 2,
          explanation: 'Akrep 8 ile 9 arasında, yelkovan 6\'da. Saat 8:30 (sekiz buçuk).'
        },
        {
          id: 3,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 12, minute: 30 },
          options: ['12:00', '12:30', '1:30', '11:30'],
          correct: 1,
          explanation: 'Akrep 12 ile 1 arasında, yelkovan 6\'da. Saat 12:30 (on iki buçuk).'
        },
        {
          id: 4,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 6, minute: 30 },
          options: ['6:00', '5:30', '7:30', '6:30'],
          correct: 3,
          explanation: 'Akrep 6 ile 7 arasında, yelkovan 6\'da. Saat 6:30 (altı buçuk).'
        },
        {
          id: 5,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 10, minute: 30 },
          options: ['10:30', '11:30', '9:30', '10:00'],
          correct: 0,
          explanation: 'Akrep 10 ile 11 arasında, yelkovan 6\'da. Saat 10:30 (on buçuk).'
        },
        {
          id: 6,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 1, minute: 30 },
          options: ['12:30', '2:30', '1:30', '1:00'],
          correct: 2,
          explanation: 'Akrep 1 ile 2 arasında, yelkovan 6\'da. Saat 1:30 (bir buçuk).'
        },
        {
          id: 7,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 5, minute: 30 },
          options: ['4:30', '5:30', '6:30', '5:00'],
          correct: 1,
          explanation: 'Akrep 5 ile 6 arasında, yelkovan 6\'da. Saat 5:30 (beş buçuk).'
        },
        {
          id: 8,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 9, minute: 30 },
          options: ['9:00', '10:30', '8:30', '9:30'],
          correct: 3,
          explanation: 'Akrep 9 ile 10 arasında, yelkovan 6\'da. Saat 9:30 (dokuz buçuk).'
        }
      ]
    },
    {
      id: 3,
      title: 'Çeyrekler',
      description: 'Çeyrek geçe ve çeyrek kala',
      icon: '🕒',
      color: 'from-purple-400 to-pink-500',
      questions: [
        {
          id: 1,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 4, minute: 15 },
          options: ['4:15', '4:45', '3:15', '5:15'],
          correct: 0,
          explanation: 'Akrep 4\'ü biraz geçmiş, yelkovan 3\'te. Saat 4:15 (dördü çeyrek geçiyor).'
        },
        {
          id: 2,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 7, minute: 45 },
          options: ['7:15', '8:45', '7:45', '6:45'],
          correct: 2,
          explanation: 'Akrep 8\'e yakın, yelkovan 9\'da. Saat 7:45 (sekize çeyrek var).'
        },
        {
          id: 3,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 2, minute: 15 },
          options: ['2:45', '2:15', '1:15', '3:15'],
          correct: 1,
          explanation: 'Akrep 2\'yi biraz geçmiş, yelkovan 3\'te. Saat 2:15 (ikiyi çeyrek geçiyor).'
        },
        {
          id: 4,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 11, minute: 45 },
          options: ['11:15', '12:45', '11:45', '10:45'],
          correct: 2,
          explanation: 'Akrep 12\'ye yakın, yelkovan 9\'da. Saat 11:45 (on ikiye çeyrek var).'
        },
        {
          id: 5,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 9, minute: 15 },
          options: ['9:45', '8:15', '9:15', '10:15'],
          correct: 2,
          explanation: 'Akrep 9\'u biraz geçmiş, yelkovan 3\'te. Saat 9:15 (dokuzu çeyrek geçiyor).'
        },
        {
          id: 6,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 5, minute: 45 },
          options: ['5:15', '6:45', '4:45', '5:45'],
          correct: 3,
          explanation: 'Akrep 6\'ya yakın, yelkovan 9\'da. Saat 5:45 (altıya çeyrek var).'
        },
        {
          id: 7,
          question: '"Saat üçü çeyrek geçiyor" kaç demektir?',
          options: ['3:45', '2:15', '3:15', '3:30'],
          correct: 2,
          explanation: '"Çeyrek geçiyor" 15 dakika geçmiş demektir. Saat 3:15.'
        },
        {
          id: 8,
          question: '"Saat ona çeyrek var" kaç demektir?',
          options: ['10:15', '9:45', '10:45', '9:15'],
          correct: 1,
          explanation: '"Çeyrek var" 15 dakika kaldı demektir. 10\'a 15 dk var = 9:45.'
        }
      ]
    },
    {
      id: 4,
      title: 'Dakikalar',
      description: 'Dakikaları tam olarak oku',
      icon: '🕐',
      color: 'from-orange-400 to-red-500',
      questions: [
        {
          id: 1,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 4, minute: 20 },
          options: ['4:10', '4:20', '4:40', '4:25'],
          correct: 1,
          explanation: 'Yelkovan 4\'ün üzerinde. Her rakam 5 dakika = 4×5 = 20 dakika. Saat 4:20.'
        },
        {
          id: 2,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 8, minute: 55 },
          options: ['8:55', '9:55', '8:50', '7:55'],
          correct: 0,
          explanation: 'Yelkovan 11\'in üzerinde. 11×5 = 55 dakika. Saat 8:55.'
        },
        {
          id: 3,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 2, minute: 35 },
          options: ['2:25', '2:40', '2:35', '3:35'],
          correct: 2,
          explanation: 'Yelkovan 7\'nin üzerinde. 7×5 = 35 dakika. Saat 2:35.'
        },
        {
          id: 4,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 11, minute: 10 },
          options: ['11:50', '11:10', '10:10', '11:02'],
          correct: 1,
          explanation: 'Yelkovan 2\'nin üzerinde. 2×5 = 10 dakika. Saat 11:10.'
        },
        {
          id: 5,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 6, minute: 40 },
          options: ['6:20', '6:08', '6:40', '7:40'],
          correct: 2,
          explanation: 'Yelkovan 8\'in üzerinde. 8×5 = 40 dakika. Saat 6:40.'
        },
        {
          id: 6,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 1, minute: 25 },
          options: ['1:05', '1:25', '1:35', '2:25'],
          correct: 1,
          explanation: 'Yelkovan 5\'in üzerinde. 5×5 = 25 dakika. Saat 1:25.'
        },
        {
          id: 7,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 10, minute: 5 },
          options: ['10:25', '10:01', '10:05', '9:05'],
          correct: 2,
          explanation: 'Yelkovan 1\'in üzerinde. 1×5 = 5 dakika. Saat 10:05.'
        },
        {
          id: 8,
          question: 'Saat kaçı gösteriyor?',
          clockTime: { hour: 3, minute: 50 },
          options: ['3:10', '3:50', '4:50', '2:50'],
          correct: 1,
          explanation: 'Yelkovan 10\'un üzerinde. 10×5 = 50 dakika. Saat 3:50.'
        }
      ]
    },
    {
      id: 5,
      title: 'Zaman Hesaplama',
      description: 'Geçen süreyi hesapla',
      icon: '⏱️',
      color: 'from-teal-400 to-cyan-500',
      questions: [
        {
          id: 1,
          question: 'Saat 9:00\'da başlayan ders 10:30\'da bitiyor. Ders kaç dakika sürüyor?',
          options: ['60 dakika', '90 dakika', '120 dakika', '30 dakika'],
          correct: 1,
          explanation: '9:00\'dan 10:30\'a kadar: 1 saat 30 dakika = 90 dakika.'
        },
        {
          id: 2,
          question: 'Film 14:00\'te başladı ve 2 saat 15 dakika sürdü. Film kaçta bitti?',
          options: ['16:00', '16:15', '15:15', '17:15'],
          correct: 1,
          explanation: '14:00 + 2 saat 15 dk = 16:15.'
        },
        {
          id: 3,
          question: '1 saat kaç dakikadır?',
          options: ['30 dakika', '45 dakika', '60 dakika', '100 dakika'],
          correct: 2,
          explanation: '1 saat = 60 dakika.'
        },
        {
          id: 4,
          question: 'Ayşe okula 7:45\'te çıktı, 8:15\'te vardı. Yolda kaç dakika geçirdi?',
          options: ['20 dakika', '30 dakika', '45 dakika', '15 dakika'],
          correct: 1,
          explanation: '7:45\'ten 8:15\'e kadar: 30 dakika.'
        },
        {
          id: 5,
          question: '2 saat 30 dakika kaç dakikadır?',
          options: ['130 dakika', '150 dakika', '120 dakika', '180 dakika'],
          correct: 1,
          explanation: '2 saat = 120 dakika + 30 dakika = 150 dakika.'
        },
        {
          id: 6,
          question: 'Tren 11:20\'de hareket etti, 13:50\'de vardı. Yolculuk ne kadar sürdü?',
          options: ['2 saat', '2 saat 30 dakika', '3 saat', '1 saat 30 dakika'],
          correct: 1,
          explanation: '11:20\'den 13:50\'ye: 2 saat 30 dakika.'
        },
        {
          id: 7,
          question: '90 dakika kaç saat kaç dakikadır?',
          options: ['1 saat', '1 saat 30 dakika', '2 saat', '45 dakika'],
          correct: 1,
          explanation: '90 dakika = 60 + 30 = 1 saat 30 dakika.'
        },
        {
          id: 8,
          question: 'Saat şu an 15:45. 2 saat 20 dakika sonra saat kaç olur?',
          options: ['17:05', '18:05', '17:55', '18:15'],
          correct: 1,
          explanation: '15:45 + 2 saat = 17:45, + 20 dakika = 18:05.'
        }
      ]
    }
  ];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null || !selectedLevel) return;

    setSelectedAnswer(index);
    setShowExplanation(true);

    if (index === selectedLevel.questions[currentQuestion].correct) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (!selectedLevel) return;

    if (currentQuestion < selectedLevel.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
      if (score >= selectedLevel.questions.length * 0.7) {
        const newCompleted = [...completedLevels, selectedLevel.id];
        setCompletedLevels(newCompleted);
        localStorage.setItem('saat-zaman-completed', JSON.stringify(newCompleted));
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setStreak(0);
    setSelectedLevel(null);
  };

  const restartLevel = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setStreak(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>🕐</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🕒</div>
        <div className="absolute bottom-32 left-1/4 text-7xl opacity-20 animate-pulse">⏰</div>
        <div className="absolute bottom-40 right-1/4 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>🕰️</div>
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex">
          <Link to="/" className="hover:text-cyan-600 cursor-pointer whitespace-nowrap">Ana Sayfa</Link>
          <i className="ri-arrow-right-s-line text-xl"></i>
          <span className="text-cyan-600 whitespace-nowrap">Saat ve Zaman</span>
        </div>

        {!selectedLevel ? (
          <>
            {/* Header Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-cyan-200">
              <div className="flex items-start gap-8">
                <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl shadow-xl flex-shrink-0 transform hover:rotate-6 transition-transform">
                  <span className="text-6xl">🕐</span>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-3">
                    Saat ve Zaman
                  </h1>
                  <p className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">
                    Saati okumayı öğren ve zaman hesaplama ustası ol!
                    Günlük hayatta en çok kullanacağın becerilerden biri!
                  </p>

                  {/* Animated Clock */}
                  <div className="flex items-center gap-6 mb-4">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-2xl shadow-lg">
                      <Clock hour={new Date().getHours()} minute={new Date().getMinutes()} size={100} />
                    </div>
                    <div className="text-2xl font-black text-gray-700">
                      Şu anki saat: {new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 bg-cyan-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">🕐</span>
                      <span className="text-sm font-bold text-gray-700">Saat Okuma</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">⏱️</span>
                      <span className="text-sm font-bold text-gray-700">Zaman Hesaplama</span>
                    </div>
                    <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">📅</span>
                      <span className="text-sm font-bold text-gray-700">Süre Bulma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Levels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {levels.map((level) => (
                <motion.div
                  key={level.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedLevel(level)}
                >
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-200 hover:border-cyan-300 transition-all">
                    <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-10`}></div>

                    <div className="relative p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${level.color} rounded-2xl shadow-lg`}>
                          <span className="text-4xl">{level.icon}</span>
                        </div>
                        {completedLevels.includes(level.id) && (
                          <span className="text-3xl">✅</span>
                        )}
                      </div>

                      <h3 className="text-xl font-black text-gray-800 mb-2">{level.title}</h3>
                      <p className="text-sm font-semibold text-gray-600 mb-4">{level.description}</p>

                      <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                        <i className="ri-question-line"></i>
                        <span>{level.questions.length} Soru</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Konu Anlatımı Bölümü */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-cyan-200">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-8 text-center">
                📚 Saat ve Zaman Konu Anlatımı
              </h2>

              {/* Saatin Bölümleri */}
              <div className="mb-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
                <h3 className="text-2xl font-black text-cyan-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center text-lg">1</span>
                  Saatin Bölümleri
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <Clock hour={3} minute={0} size={150} />
                    <div className="mt-4 text-center">
                      <p className="font-bold text-gray-700">Analog Saat</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-2 bg-gray-800 rounded"></div>
                        <span className="font-bold text-gray-700">Akrep (Kısa ibre)</span>
                        <span className="text-cyan-600 font-bold">→ Saati gösterir</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-2 bg-blue-500 rounded"></div>
                        <span className="font-bold text-gray-700">Yelkovan (Uzun ibre)</span>
                        <span className="text-cyan-600 font-bold">→ Dakikayı gösterir</span>
                      </div>
                      <div className="mt-4 p-3 bg-yellow-50 rounded-xl">
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">İpucu:</span> Akrep = Kısa = Saat (Harfler aynı!)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tam Saatler */}
              <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <h3 className="text-2xl font-black text-blue-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg">2</span>
                  Tam Saatler
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Yelkovan 12'nin üzerindeyken saat tam saati gösterir:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <Clock hour={3} minute={0} size={80} />
                    <p className="font-bold text-blue-700 mt-2">3:00</p>
                    <p className="text-sm text-gray-500">Saat üç</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <Clock hour={6} minute={0} size={80} />
                    <p className="font-bold text-blue-700 mt-2">6:00</p>
                    <p className="text-sm text-gray-500">Saat altı</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <Clock hour={9} minute={0} size={80} />
                    <p className="font-bold text-blue-700 mt-2">9:00</p>
                    <p className="text-sm text-gray-500">Saat dokuz</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <Clock hour={12} minute={0} size={80} />
                    <p className="font-bold text-blue-700 mt-2">12:00</p>
                    <p className="text-sm text-gray-500">Saat on iki</p>
                  </div>
                </div>
              </div>

              {/* Buçuklar ve Çeyrekler */}
              <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <h3 className="text-2xl font-black text-green-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg">3</span>
                  Buçuklar ve Çeyrekler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="flex items-center justify-center mb-3">
                      <Clock hour={3} minute={15} size={100} />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-green-700 text-xl">3:15</p>
                      <p className="text-gray-600">"Üçü çeyrek geçiyor"</p>
                      <div className="bg-green-100 p-2 rounded-lg mt-2">
                        <p className="text-sm text-green-700">Yelkovan 3'te = 15 dakika</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="flex items-center justify-center mb-3">
                      <Clock hour={3} minute={30} size={100} />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-green-700 text-xl">3:30</p>
                      <p className="text-gray-600">"Üç buçuk"</p>
                      <div className="bg-green-100 p-2 rounded-lg mt-2">
                        <p className="text-sm text-green-700">Yelkovan 6'da = 30 dakika</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="flex items-center justify-center mb-3">
                      <Clock hour={3} minute={45} size={100} />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-green-700 text-xl">3:45</p>
                      <p className="text-gray-600">"Dörde çeyrek var"</p>
                      <div className="bg-green-100 p-2 rounded-lg mt-2">
                        <p className="text-sm text-green-700">Yelkovan 9'da = 45 dakika</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dakikalar */}
              <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <h3 className="text-2xl font-black text-purple-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg">4</span>
                  Dakikaları Okuma
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-lg text-gray-700 mb-4">Saatteki her rakam 5 dakikayı temsil eder:</p>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3 text-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <div key={num} className="bg-purple-100 p-3 rounded-xl">
                        <div className="font-bold text-purple-700 text-xl">{num}</div>
                        <div className="text-sm text-gray-600">= {num * 5} dk</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                    <p className="font-bold text-yellow-700">💡 Formül: Rakam × 5 = Dakika</p>
                    <p className="text-gray-600">Örnek: Yelkovan 4'te → 4 × 5 = 20 dakika</p>
                  </div>
                </div>
              </div>

              {/* Zaman Hesaplama */}
              <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
                <h3 className="text-2xl font-black text-orange-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg">5</span>
                  Zaman Hesaplama
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow">
                    <h4 className="font-bold text-orange-700 mb-3">Zaman Dönüşümleri</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between bg-orange-50 p-2 rounded-lg">
                        <span className="font-bold">1 saat</span>
                        <span className="text-orange-600 font-bold">= 60 dakika</span>
                      </div>
                      <div className="flex justify-between bg-orange-50 p-2 rounded-lg">
                        <span className="font-bold">1 dakika</span>
                        <span className="text-orange-600 font-bold">= 60 saniye</span>
                      </div>
                      <div className="flex justify-between bg-orange-50 p-2 rounded-lg">
                        <span className="font-bold">1 gün</span>
                        <span className="text-orange-600 font-bold">= 24 saat</span>
                      </div>
                      <div className="flex justify-between bg-orange-50 p-2 rounded-lg">
                        <span className="font-bold">1 hafta</span>
                        <span className="text-orange-600 font-bold">= 7 gün</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <h4 className="font-bold text-orange-700 mb-3">Süre Hesaplama Örneği</h4>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">Film saat 14:30'da başladı, 16:45'te bitti.</p>
                      <p className="text-gray-700 mb-2">Ne kadar sürdü?</p>
                      <div className="border-t pt-2 mt-2">
                        <p className="text-orange-600 font-bold">16:45 - 14:30 = 2 saat 15 dakika</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 24 Saat Sistemi */}
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                <h3 className="text-2xl font-black text-teal-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center text-lg">6</span>
                  24 Saat Sistemi
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-lg text-gray-700 mb-4">Günün iki yarısı var: Öğleden önce (ÖÖ) ve Öğleden sonra (ÖS)</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <h4 className="font-bold text-blue-700 mb-2">🌅 Öğleden Önce (00:00 - 11:59)</h4>
                      <div className="space-y-1 text-sm">
                        <p>06:00 = Sabah 6</p>
                        <p>09:00 = Sabah 9</p>
                        <p>11:30 = 11 buçuk (öğleden önce)</p>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <h4 className="font-bold text-orange-700 mb-2">🌆 Öğleden Sonra (12:00 - 23:59)</h4>
                      <div className="space-y-1 text-sm">
                        <p>14:00 = Öğleden sonra 2</p>
                        <p>18:00 = Akşam 6</p>
                        <p>21:30 = Gece 9 buçuk</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                    <p className="font-bold text-yellow-700">💡 İpucu: 12'den büyük saatler için 12 çıkar!</p>
                    <p className="text-gray-600">Örnek: 15:00 → 15 - 12 = Öğleden sonra 3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Facts */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-yellow-200">
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-6 flex items-center gap-3">
                <span className="text-4xl">💡</span> Zaman Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">⏰</span>
                    Akrep (kısa ibre) saati, yelkovan (uzun ibre) dakikayı gösterir!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🌍</span>
                    Dünya üzerinde 24 farklı saat dilimi vardır!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🕰️</span>
                    En eski saatler güneş saatleriydi ve gölgeleri kullanıyordu!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">📅</span>
                    1 gün = 24 saat = 1440 dakika = 86400 saniye!
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : !showResult ? (
          /* Quiz Section */
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-cyan-200"
            >
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 font-bold"
                >
                  <i className="ri-arrow-left-line text-xl"></i>
                  Geri
                </button>
                <div className="flex items-center gap-4">
                  {streak >= 3 && (
                    <div className="bg-orange-100 px-3 py-1 rounded-full">
                      <span className="font-bold text-orange-600">🔥 {streak} Seri!</span>
                    </div>
                  )}
                  <div className="bg-cyan-100 px-4 py-2 rounded-full">
                    <span className="font-bold text-cyan-600">
                      {currentQuestion + 1} / {selectedLevel.questions.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / selectedLevel.questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                {selectedLevel.questions[currentQuestion].clockTime && (
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-3xl shadow-lg">
                      <Clock
                        hour={selectedLevel.questions[currentQuestion].clockTime!.hour}
                        minute={selectedLevel.questions[currentQuestion].clockTime!.minute}
                        size={160}
                      />
                    </div>
                  </div>
                )}
                <h2 className="text-2xl font-black text-gray-800">
                  {selectedLevel.questions[currentQuestion].question}
                </h2>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedLevel.questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                    whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 rounded-2xl text-lg font-bold transition-all ${
                      selectedAnswer === null
                        ? 'bg-gradient-to-br from-gray-50 to-gray-100 hover:from-cyan-50 hover:to-blue-50 border-2 border-gray-200 hover:border-cyan-300'
                        : selectedAnswer === index
                          ? index === selectedLevel.questions[currentQuestion].correct
                            ? 'bg-green-100 border-2 border-green-500 text-green-700'
                            : 'bg-red-100 border-2 border-red-500 text-red-700'
                          : index === selectedLevel.questions[currentQuestion].correct
                            ? 'bg-green-100 border-2 border-green-500 text-green-700'
                            : 'bg-gray-100 border-2 border-gray-200 text-gray-500'
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl mb-6 ${
                    selectedAnswer === selectedLevel.questions[currentQuestion].correct
                      ? 'bg-green-50 border-2 border-green-200'
                      : 'bg-orange-50 border-2 border-orange-200'
                  }`}
                >
                  <p className="font-bold text-gray-700">
                    <span className="text-xl mr-2">
                      {selectedAnswer === selectedLevel.questions[currentQuestion].correct ? '✅' : '💡'}
                    </span>
                    {selectedLevel.questions[currentQuestion].explanation}
                  </p>
                </motion.div>
              )}

              {/* Next Button */}
              {selectedAnswer !== null && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={nextQuestion}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
                >
                  {currentQuestion < selectedLevel.questions.length - 1 ? 'Sonraki Soru →' : 'Sonuçları Gör'}
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          /* Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-cyan-200 text-center"
          >
            <div className="text-6xl mb-6">
              {score >= selectedLevel.questions.length * 0.9 ? '🏆' :
               score >= selectedLevel.questions.length * 0.7 ? '🌟' :
               score >= selectedLevel.questions.length * 0.5 ? '👍' : '💪'}
            </div>

            <h2 className="text-3xl font-black text-gray-800 mb-4">
              {score >= selectedLevel.questions.length * 0.9 ? 'Mükemmel!' :
               score >= selectedLevel.questions.length * 0.7 ? 'Harika!' :
               score >= selectedLevel.questions.length * 0.5 ? 'İyi!' : 'Devam Et!'}
            </h2>

            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-4">
              {score} / {selectedLevel.questions.length}
            </div>

            <p className="text-lg font-semibold text-gray-600 mb-8">
              {score >= selectedLevel.questions.length * 0.7
                ? 'Seviyeyi başarıyla tamamladın!'
                : 'Biraz daha pratik yapalım!'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={restartLevel}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                Tekrar Dene
              </button>
              <button
                onClick={resetQuiz}
                className="px-8 py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-200 transition-all"
              >
                Seviye Seç
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}
