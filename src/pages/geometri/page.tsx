import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  shape?: string;
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

export default function Geometri() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('geometri-completed');
    if (saved) {
      setCompletedLevels(JSON.parse(saved));
    }
  }, []);

  const levels: Level[] = [
    {
      id: 1,
      title: 'Temel Şekiller',
      description: 'Geometrik şekilleri tanıyalım',
      icon: '🔷',
      color: 'from-blue-400 to-cyan-500',
      questions: [
        {
          id: 1,
          question: 'Üç kenarı olan geometrik şekle ne ad verilir?',
          shape: 'triangle',
          options: ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen'],
          correct: 1,
          explanation: 'Üç kenarı ve üç köşesi olan şekle üçgen denir.'
        },
        {
          id: 2,
          question: 'Dört eşit kenarı olan şekil hangisidir?',
          shape: 'square',
          options: ['Dikdörtgen', 'Üçgen', 'Kare', 'Beşgen'],
          correct: 2,
          explanation: 'Kare, dört kenarı da eşit olan dörtgendir.'
        },
        {
          id: 3,
          question: 'Kenarı olmayan, yuvarlak şekle ne denir?',
          shape: 'circle',
          options: ['Oval', 'Daire', 'Küre', 'Silindir'],
          correct: 1,
          explanation: 'Daire, merkeze eşit uzaklıktaki noktaların oluşturduğu düzlemsel şekildir.'
        },
        {
          id: 4,
          question: 'Karşılıklı kenarları eşit olan dörtgen hangisidir?',
          shape: 'rectangle',
          options: ['Üçgen', 'Kare', 'Dikdörtgen', 'Yamuk'],
          correct: 2,
          explanation: 'Dikdörtgende karşılıklı kenarlar birbirine eşittir.'
        },
        {
          id: 5,
          question: 'Beş kenarı olan şekle ne ad verilir?',
          shape: 'pentagon',
          options: ['Altıgen', 'Dörtgen', 'Beşgen', 'Yedigen'],
          correct: 2,
          explanation: 'Beş kenarı ve beş köşesi olan çokgene beşgen denir.'
        },
        {
          id: 6,
          question: 'Altı kenarı olan şekil hangisidir?',
          shape: 'hexagon',
          options: ['Beşgen', 'Altıgen', 'Sekizgen', 'Dörtgen'],
          correct: 1,
          explanation: 'Altıgen, altı kenarı olan düzgün çokgendir. Bal petekleri altıgen şeklindedir!'
        },
        {
          id: 7,
          question: 'Oval şekle ne ad verilir?',
          shape: 'oval',
          options: ['Daire', 'Elips', 'Küre', 'Çember'],
          correct: 1,
          explanation: 'Elips, dairenin uzatılmış hali gibi görünen oval şekildir.'
        },
        {
          id: 8,
          question: 'Sekiz kenarı olan şekle ne denir?',
          shape: 'octagon',
          options: ['Altıgen', 'Yedigen', 'Sekizgen', 'Ongen'],
          correct: 2,
          explanation: 'Sekizgen, dur işaretlerinin şeklidir!'
        }
      ]
    },
    {
      id: 2,
      title: 'Açılar',
      description: 'Açı türlerini öğrenelim',
      icon: '📐',
      color: 'from-purple-400 to-pink-500',
      questions: [
        {
          id: 1,
          question: '90 derecelik açıya ne ad verilir?',
          options: ['Dar açı', 'Dik açı', 'Geniş açı', 'Doğru açı'],
          correct: 1,
          explanation: '90 derecelik açı dik açıdır ve "L" şeklinde görünür.'
        },
        {
          id: 2,
          question: '90 dereceden küçük açılara ne denir?',
          options: ['Dik açı', 'Geniş açı', 'Dar açı', 'Tam açı'],
          correct: 2,
          explanation: '0-90 derece arasındaki açılar dar açıdır.'
        },
        {
          id: 3,
          question: '90-180 derece arasındaki açılara ne ad verilir?',
          options: ['Dar açı', 'Dik açı', 'Geniş açı', 'Doğru açı'],
          correct: 2,
          explanation: '90 ile 180 derece arasındaki açılar geniş açıdır.'
        },
        {
          id: 4,
          question: '180 derecelik açıya ne denir?',
          options: ['Tam açı', 'Doğru açı', 'Dik açı', 'Geniş açı'],
          correct: 1,
          explanation: '180 derecelik açı doğru açıdır, düz bir çizgi gibi görünür.'
        },
        {
          id: 5,
          question: '360 derecelik açıya ne ad verilir?',
          options: ['Doğru açı', 'Geniş açı', 'Bütün açı', 'Tam açı'],
          correct: 3,
          explanation: '360 derece tam bir tur yani tam açıdır.'
        },
        {
          id: 6,
          question: 'Bir karenin köşesindeki açı kaç derecedir?',
          options: ['45°', '60°', '90°', '180°'],
          correct: 2,
          explanation: 'Karenin tüm köşe açıları 90 derecedir (dik açı).'
        },
        {
          id: 7,
          question: 'Eşkenar üçgenin bir açısı kaç derecedir?',
          options: ['30°', '45°', '60°', '90°'],
          correct: 2,
          explanation: 'Eşkenar üçgenin üç açısı da eşittir ve her biri 60 derecedir.'
        },
        {
          id: 8,
          question: 'Bir üçgenin iç açıları toplamı kaç derecedir?',
          options: ['90°', '180°', '270°', '360°'],
          correct: 1,
          explanation: 'Her üçgenin iç açıları toplamı 180 derecedir.'
        }
      ]
    },
    {
      id: 3,
      title: 'Çevre Hesaplama',
      description: 'Şekillerin çevresini hesaplayalım',
      icon: '🔲',
      color: 'from-green-400 to-emerald-500',
      questions: [
        {
          id: 1,
          question: 'Kenar uzunluğu 5 cm olan karenin çevresi kaç cm\'dir?',
          options: ['15 cm', '20 cm', '25 cm', '10 cm'],
          correct: 1,
          explanation: 'Karenin çevresi = 4 × kenar = 4 × 5 = 20 cm'
        },
        {
          id: 2,
          question: 'Uzun kenarı 8 cm, kısa kenarı 4 cm olan dikdörtgenin çevresi kaç cm\'dir?',
          options: ['12 cm', '24 cm', '32 cm', '20 cm'],
          correct: 1,
          explanation: 'Dikdörtgenin çevresi = 2 × (uzun + kısa) = 2 × (8+4) = 24 cm'
        },
        {
          id: 3,
          question: 'Kenarları 3 cm, 4 cm ve 5 cm olan üçgenin çevresi kaç cm\'dir?',
          options: ['10 cm', '12 cm', '15 cm', '20 cm'],
          correct: 1,
          explanation: 'Üçgenin çevresi = 3 + 4 + 5 = 12 cm'
        },
        {
          id: 4,
          question: 'Kenar uzunluğu 7 cm olan eşkenar üçgenin çevresi kaç cm\'dir?',
          options: ['14 cm', '21 cm', '28 cm', '35 cm'],
          correct: 1,
          explanation: 'Eşkenar üçgenin çevresi = 3 × kenar = 3 × 7 = 21 cm'
        },
        {
          id: 5,
          question: 'Yarıçapı 7 cm olan dairenin çevresi yaklaşık kaç cm\'dir? (π = 3)',
          options: ['21 cm', '42 cm', '14 cm', '49 cm'],
          correct: 1,
          explanation: 'Dairenin çevresi = 2 × π × r = 2 × 3 × 7 = 42 cm'
        },
        {
          id: 6,
          question: 'Kenar uzunluğu 10 cm olan düzgün beşgenin çevresi kaç cm\'dir?',
          options: ['40 cm', '50 cm', '60 cm', '100 cm'],
          correct: 1,
          explanation: 'Düzgün beşgenin çevresi = 5 × kenar = 5 × 10 = 50 cm'
        },
        {
          id: 7,
          question: 'Çevresi 36 cm olan karenin bir kenarı kaç cm\'dir?',
          options: ['6 cm', '9 cm', '12 cm', '8 cm'],
          correct: 1,
          explanation: 'Kenar = Çevre ÷ 4 = 36 ÷ 4 = 9 cm'
        },
        {
          id: 8,
          question: 'Kenar uzunluğu 6 cm olan düzgün altıgenin çevresi kaç cm\'dir?',
          options: ['30 cm', '36 cm', '42 cm', '48 cm'],
          correct: 1,
          explanation: 'Düzgün altıgenin çevresi = 6 × kenar = 6 × 6 = 36 cm'
        }
      ]
    },
    {
      id: 4,
      title: 'Alan Hesaplama',
      description: 'Şekillerin alanını hesaplayalım',
      icon: '📏',
      color: 'from-orange-400 to-red-500',
      questions: [
        {
          id: 1,
          question: 'Kenar uzunluğu 6 cm olan karenin alanı kaç cm²\'dir?',
          options: ['24 cm²', '36 cm²', '12 cm²', '30 cm²'],
          correct: 1,
          explanation: 'Karenin alanı = kenar × kenar = 6 × 6 = 36 cm²'
        },
        {
          id: 2,
          question: 'Uzunluğu 10 cm, genişliği 5 cm olan dikdörtgenin alanı kaç cm²\'dir?',
          options: ['15 cm²', '30 cm²', '50 cm²', '100 cm²'],
          correct: 2,
          explanation: 'Dikdörtgenin alanı = uzunluk × genişlik = 10 × 5 = 50 cm²'
        },
        {
          id: 3,
          question: 'Tabanı 8 cm, yüksekliği 6 cm olan üçgenin alanı kaç cm²\'dir?',
          options: ['48 cm²', '24 cm²', '14 cm²', '28 cm²'],
          correct: 1,
          explanation: 'Üçgenin alanı = (taban × yükseklik) ÷ 2 = (8 × 6) ÷ 2 = 24 cm²'
        },
        {
          id: 4,
          question: 'Yarıçapı 5 cm olan dairenin alanı yaklaşık kaç cm²\'dir? (π = 3)',
          options: ['15 cm²', '25 cm²', '75 cm²', '30 cm²'],
          correct: 2,
          explanation: 'Dairenin alanı = π × r² = 3 × 5 × 5 = 75 cm²'
        },
        {
          id: 5,
          question: 'Alanı 64 cm² olan karenin kenar uzunluğu kaç cm\'dir?',
          options: ['6 cm', '8 cm', '16 cm', '32 cm'],
          correct: 1,
          explanation: 'Kenar = √Alan = √64 = 8 cm'
        },
        {
          id: 6,
          question: 'Tabanı 12 cm, yüksekliği 10 cm olan paralelkenarın alanı kaç cm²\'dir?',
          options: ['22 cm²', '60 cm²', '120 cm²', '240 cm²'],
          correct: 2,
          explanation: 'Paralelkenarın alanı = taban × yükseklik = 12 × 10 = 120 cm²'
        },
        {
          id: 7,
          question: 'Kenarları 3 cm ve 4 cm olan dikdörtgenin alanı kaç cm²\'dir?',
          options: ['7 cm²', '12 cm²', '14 cm²', '24 cm²'],
          correct: 1,
          explanation: 'Dikdörtgenin alanı = 3 × 4 = 12 cm²'
        },
        {
          id: 8,
          question: 'Tabanı 6 cm, yüksekliği 8 cm olan üçgenin alanı kaç cm²\'dir?',
          options: ['14 cm²', '48 cm²', '24 cm²', '28 cm²'],
          correct: 2,
          explanation: 'Üçgenin alanı = (6 × 8) ÷ 2 = 48 ÷ 2 = 24 cm²'
        }
      ]
    },
    {
      id: 5,
      title: 'Simetri ve Dönüşüm',
      description: 'Simetri ve geometrik dönüşümler',
      icon: '🔄',
      color: 'from-indigo-400 to-purple-500',
      questions: [
        {
          id: 1,
          question: 'Karenin kaç simetri ekseni vardır?',
          options: ['2', '4', '6', '8'],
          correct: 1,
          explanation: 'Karenin 4 simetri ekseni vardır: 2 köşegen ve 2 kenar ortayı.'
        },
        {
          id: 2,
          question: 'Dairenin kaç simetri ekseni vardır?',
          options: ['4', '8', '12', 'Sonsuz'],
          correct: 3,
          explanation: 'Dairenin sonsuz sayıda simetri ekseni vardır.'
        },
        {
          id: 3,
          question: 'Eşkenar üçgenin kaç simetri ekseni vardır?',
          options: ['1', '2', '3', '4'],
          correct: 2,
          explanation: 'Eşkenar üçgenin 3 simetri ekseni vardır.'
        },
        {
          id: 4,
          question: 'Dikdörtgenin kaç simetri ekseni vardır?',
          options: ['1', '2', '3', '4'],
          correct: 1,
          explanation: 'Dikdörtgenin 2 simetri ekseni vardır (kenar ortayları).'
        },
        {
          id: 5,
          question: 'Bir şekli 90° saat yönünde döndürmek hangi dönüşümdür?',
          options: ['Öteleme', 'Yansıma', 'Dönme', 'Ölçekleme'],
          correct: 2,
          explanation: 'Bir şekli belirli bir açıda merkez etrafında çevirmek dönme dönüşümüdür.'
        },
        {
          id: 6,
          question: 'A harfinin kaç simetri ekseni vardır?',
          options: ['0', '1', '2', '3'],
          correct: 1,
          explanation: 'A harfinin 1 dikey simetri ekseni vardır.'
        },
        {
          id: 7,
          question: 'H harfinin kaç simetri ekseni vardır?',
          options: ['0', '1', '2', '3'],
          correct: 2,
          explanation: 'H harfinin 2 simetri ekseni vardır (yatay ve dikey).'
        },
        {
          id: 8,
          question: 'Düzgün beşgenin kaç simetri ekseni vardır?',
          options: ['3', '4', '5', '6'],
          correct: 2,
          explanation: 'Düzgün beşgenin 5 simetri ekseni vardır.'
        }
      ]
    }
  ];

  const renderShape = (shape?: string) => {
    if (!shape) return null;

    const shapeStyles: { [key: string]: JSX.Element } = {
      triangle: (
        <svg width="80" height="80" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="#3B82F6" stroke="#1E40AF" strokeWidth="3"/>
        </svg>
      ),
      square: (
        <svg width="80" height="80" viewBox="0 0 100 100">
          <rect x="15" y="15" width="70" height="70" fill="#10B981" stroke="#047857" strokeWidth="3"/>
        </svg>
      ),
      circle: (
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="#F59E0B" stroke="#D97706" strokeWidth="3"/>
        </svg>
      ),
      rectangle: (
        <svg width="80" height="80" viewBox="0 0 100 100">
          <rect x="10" y="25" width="80" height="50" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="3"/>
        </svg>
      ),
      pentagon: (
        <svg width="80" height="80" viewBox="0 0 100 100">
          <polygon points="50,5 95,38 77,92 23,92 5,38" fill="#EC4899" stroke="#BE185D" strokeWidth="3"/>
        </svg>
      ),
      hexagon: (
        <svg width="80" height="80" viewBox="0 0 100 100">
          <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="#14B8A6" stroke="#0D9488" strokeWidth="3"/>
        </svg>
      ),
      oval: (
        <svg width="80" height="80" viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="45" ry="30" fill="#F472B6" stroke="#DB2777" strokeWidth="3"/>
        </svg>
      ),
      octagon: (
        <svg width="80" height="80" viewBox="0 0 100 100">
          <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#EF4444" stroke="#DC2626" strokeWidth="3"/>
        </svg>
      )
    };

    return shapeStyles[shape] || null;
  };

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
        localStorage.setItem('geometri-completed', JSON.stringify(newCompleted));
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-spin-slow">
          <svg viewBox="0 0 100 100">
            <polygon points="50,5 95,38 77,92 23,92 5,38" fill="#8B5CF6"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 opacity-20 animate-bounce">
          <svg viewBox="0 0 100 100">
            <rect x="15" y="15" width="70" height="70" fill="#10B981"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 opacity-20 animate-pulse">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="#F59E0B"/>
          </svg>
        </div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="#EC4899"/>
          </svg>
        </div>
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex">
          <Link to="/" className="hover:text-purple-600 cursor-pointer whitespace-nowrap">Ana Sayfa</Link>
          <i className="ri-arrow-right-s-line text-xl"></i>
          <span className="text-purple-600 whitespace-nowrap">Geometri</span>
        </div>

        {!selectedLevel ? (
          <>
            {/* Header Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-purple-200">
              <div className="flex items-start gap-8">
                <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl shadow-xl flex-shrink-0 transform hover:rotate-6 transition-transform">
                  <span className="text-6xl">📐</span>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
                    Geometri Macerası
                  </h1>
                  <p className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">
                    Şekilleri tanı, açıları öğren, çevre ve alan hesapla!
                    Geometri dünyasında eğlenceli bir yolculuğa çık!
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">🔷</span>
                      <span className="text-sm font-bold text-gray-700">Şekiller</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">📐</span>
                      <span className="text-sm font-bold text-gray-700">Açılar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">🔲</span>
                      <span className="text-sm font-bold text-gray-700">Çevre</span>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">📏</span>
                      <span className="text-sm font-bold text-gray-700">Alan</span>
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
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-200 hover:border-purple-300 transition-all">
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-purple-200">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8 text-center">
                📚 Geometri Konu Anlatımı
              </h2>

              {/* Temel Şekiller */}
              <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <h3 className="text-2xl font-black text-blue-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg">1</span>
                  Temel Geometrik Şekiller
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <polygon points="50,10 90,90 10,90" fill="#3B82F6" stroke="#1E40AF" strokeWidth="3"/>
                    </svg>
                    <p className="font-bold text-blue-700">Üçgen</p>
                    <p className="text-sm text-gray-500">3 kenar, 3 köşe</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <rect x="15" y="15" width="70" height="70" fill="#10B981" stroke="#047857" strokeWidth="3"/>
                    </svg>
                    <p className="font-bold text-green-700">Kare</p>
                    <p className="text-sm text-gray-500">4 eşit kenar</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <rect x="10" y="25" width="80" height="50" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="3"/>
                    </svg>
                    <p className="font-bold text-purple-700">Dikdörtgen</p>
                    <p className="text-sm text-gray-500">Karşılıklı kenarlar eşit</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <circle cx="50" cy="50" r="40" fill="#F59E0B" stroke="#D97706" strokeWidth="3"/>
                    </svg>
                    <p className="font-bold text-amber-700">Daire</p>
                    <p className="text-sm text-gray-500">Kenarı yok, yuvarlak</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <polygon points="50,5 95,38 77,92 23,92 5,38" fill="#EC4899" stroke="#BE185D" strokeWidth="3"/>
                    </svg>
                    <p className="font-bold text-pink-700">Beşgen</p>
                    <p className="text-sm text-gray-500">5 kenar</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="#14B8A6" stroke="#0D9488" strokeWidth="3"/>
                    </svg>
                    <p className="font-bold text-teal-700">Altıgen</p>
                    <p className="text-sm text-gray-500">6 kenar (bal peteği)</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#EF4444" stroke="#DC2626" strokeWidth="3"/>
                    </svg>
                    <p className="font-bold text-red-700">Sekizgen</p>
                    <p className="text-sm text-gray-500">8 kenar (dur işareti)</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <ellipse cx="50" cy="50" rx="45" ry="30" fill="#F472B6" stroke="#DB2777" strokeWidth="3"/>
                    </svg>
                    <p className="font-bold text-pink-600">Elips</p>
                    <p className="text-sm text-gray-500">Uzatılmış daire</p>
                  </div>
                </div>
              </div>

              {/* Açılar */}
              <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <h3 className="text-2xl font-black text-purple-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg">2</span>
                  Açı Türleri
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <line x1="20" y1="70" x2="80" y2="70" stroke="#4B5563" strokeWidth="3"/>
                      <line x1="20" y1="70" x2="60" y2="30" stroke="#3B82F6" strokeWidth="3"/>
                      <path d="M 35 70 A 15 15 0 0 1 42 58" fill="none" stroke="#EF4444" strokeWidth="2"/>
                    </svg>
                    <p className="font-bold text-blue-700">Dar Açı</p>
                    <p className="text-sm text-gray-500">0° - 90°</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <line x1="20" y1="70" x2="80" y2="70" stroke="#4B5563" strokeWidth="3"/>
                      <line x1="20" y1="70" x2="20" y2="20" stroke="#10B981" strokeWidth="3"/>
                      <rect x="20" y="55" width="15" height="15" fill="none" stroke="#EF4444" strokeWidth="2"/>
                    </svg>
                    <p className="font-bold text-green-700">Dik Açı</p>
                    <p className="text-sm text-gray-500">Tam 90°</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <line x1="20" y1="70" x2="80" y2="70" stroke="#4B5563" strokeWidth="3"/>
                      <line x1="20" y1="70" x2="70" y2="25" stroke="#F59E0B" strokeWidth="3"/>
                      <path d="M 35 70 A 15 15 0 0 1 30 55" fill="none" stroke="#EF4444" strokeWidth="2"/>
                    </svg>
                    <p className="font-bold text-amber-700">Geniş Açı</p>
                    <p className="text-sm text-gray-500">90° - 180°</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-2">
                      <line x1="10" y1="50" x2="90" y2="50" stroke="#8B5CF6" strokeWidth="3"/>
                      <path d="M 40 50 A 10 10 0 0 1 60 50" fill="none" stroke="#EF4444" strokeWidth="2"/>
                    </svg>
                    <p className="font-bold text-purple-700">Doğru Açı</p>
                    <p className="text-sm text-gray-500">Tam 180°</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                  <p className="font-bold text-yellow-700">💡 Hatırla: Bir üçgenin iç açıları toplamı her zaman 180° dir!</p>
                </div>
              </div>

              {/* Çevre Hesaplama */}
              <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <h3 className="text-2xl font-black text-green-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg">3</span>
                  Çevre Hesaplama
                </h3>
                <p className="text-lg text-gray-700 mb-4">Çevre = Şeklin kenarlarının toplam uzunluğu</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <svg width="50" height="50" viewBox="0 0 100 100">
                        <rect x="15" y="15" width="70" height="70" fill="#10B981" stroke="#047857" strokeWidth="3"/>
                      </svg>
                      <span className="font-bold text-green-700">Kare</span>
                    </div>
                    <div className="bg-green-100 p-3 rounded-lg text-center">
                      <p className="font-bold text-green-800">Çevre = 4 × a</p>
                      <p className="text-sm text-gray-600">a = kenar uzunluğu</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Örnek: a = 5 cm → Çevre = 20 cm</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <svg width="50" height="50" viewBox="0 0 100 100">
                        <rect x="10" y="25" width="80" height="50" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="3"/>
                      </svg>
                      <span className="font-bold text-purple-700">Dikdörtgen</span>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-lg text-center">
                      <p className="font-bold text-purple-800">Çevre = 2 × (a + b)</p>
                      <p className="text-sm text-gray-600">a, b = kenarlar</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Örnek: 6×4 cm → Çevre = 20 cm</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <svg width="50" height="50" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="#F59E0B" stroke="#D97706" strokeWidth="3"/>
                      </svg>
                      <span className="font-bold text-amber-700">Daire</span>
                    </div>
                    <div className="bg-amber-100 p-3 rounded-lg text-center">
                      <p className="font-bold text-amber-800">Çevre = 2 × π × r</p>
                      <p className="text-sm text-gray-600">r = yarıçap, π ≈ 3,14</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Örnek: r = 7 cm → Çevre ≈ 44 cm</p>
                  </div>
                </div>
              </div>

              {/* Alan Hesaplama */}
              <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
                <h3 className="text-2xl font-black text-orange-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg">4</span>
                  Alan Hesaplama
                </h3>
                <p className="text-lg text-gray-700 mb-4">Alan = Şeklin kapladığı yüzey</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-green-700 mb-2">Kare Alanı</p>
                        <div className="bg-green-100 p-3 rounded-lg text-center mb-2">
                          <p className="font-bold text-green-800">Alan = a × a = a²</p>
                        </div>
                        <p className="text-sm text-gray-600">a = 6 cm → Alan = 36 cm²</p>
                      </div>
                      <div>
                        <p className="font-bold text-purple-700 mb-2">Dikdörtgen Alanı</p>
                        <div className="bg-purple-100 p-3 rounded-lg text-center mb-2">
                          <p className="font-bold text-purple-800">Alan = a × b</p>
                        </div>
                        <p className="text-sm text-gray-600">10×5 cm → Alan = 50 cm²</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-blue-700 mb-2">Üçgen Alanı</p>
                        <div className="bg-blue-100 p-3 rounded-lg text-center mb-2">
                          <p className="font-bold text-blue-800">Alan = (t × h) ÷ 2</p>
                        </div>
                        <p className="text-sm text-gray-600">t=8, h=6 → Alan = 24 cm²</p>
                      </div>
                      <div>
                        <p className="font-bold text-amber-700 mb-2">Daire Alanı</p>
                        <div className="bg-amber-100 p-3 rounded-lg text-center mb-2">
                          <p className="font-bold text-amber-800">Alan = π × r²</p>
                        </div>
                        <p className="text-sm text-gray-600">r=5 cm → Alan ≈ 78,5 cm²</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simetri */}
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                <h3 className="text-2xl font-black text-indigo-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center text-lg">5</span>
                  Simetri
                </h3>
                <p className="text-lg text-gray-700 mb-4">Bir şekli ortadan ikiye böldüğümüzde iki yarısı aynıysa, o şekil simetriktir.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <div className="text-4xl mb-2">⬛</div>
                    <p className="font-bold text-gray-700">Kare</p>
                    <p className="text-sm text-indigo-600 font-bold">4 simetri ekseni</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <div className="text-4xl mb-2">🔺</div>
                    <p className="font-bold text-gray-700">Eşkenar Üçgen</p>
                    <p className="text-sm text-indigo-600 font-bold">3 simetri ekseni</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <div className="text-4xl mb-2">⬜</div>
                    <p className="font-bold text-gray-700">Dikdörtgen</p>
                    <p className="text-sm text-indigo-600 font-bold">2 simetri ekseni</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <div className="text-4xl mb-2">⭕</div>
                    <p className="font-bold text-gray-700">Daire</p>
                    <p className="text-sm text-indigo-600 font-bold">Sonsuz simetri</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-yellow-200">
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-6 flex items-center gap-3">
                <span className="text-4xl">💡</span> Geometri Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🔺</span>
                    Mısır Piramitleri üçgen yüzeylere sahiptir ve 4500 yıldır ayaktadır!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🐝</span>
                    Arılar bal peteklerini altıgen şeklinde yapar çünkü en az malzemeyle en çok alan kaplar!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🌈</span>
                    Gökkuşağı aslında tam bir dairedir, ama biz sadece yarısını görebiliriz!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🛑</span>
                    Dur işaretleri sekizgen şeklindedir, böylece her yönden tanınabilir!
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
              className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-200"
            >
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-2 text-gray-600 hover:text-purple-600 font-bold"
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
                  <div className="bg-purple-100 px-4 py-2 rounded-full">
                    <span className="font-bold text-purple-600">
                      {currentQuestion + 1} / {selectedLevel.questions.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / selectedLevel.questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                {selectedLevel.questions[currentQuestion].shape && (
                  <div className="flex justify-center mb-6">
                    {renderShape(selectedLevel.questions[currentQuestion].shape)}
                  </div>
                )}
                <h2 className="text-2xl font-black text-gray-800">
                  {selectedLevel.questions[currentQuestion].question}
                </h2>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedLevel.questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                    whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 rounded-2xl text-lg font-bold transition-all ${
                      selectedAnswer === null
                        ? 'bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-pink-50 border-2 border-gray-200 hover:border-purple-300'
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
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all"
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
            className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-200 text-center"
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

            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
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
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all"
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

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
      <Footer />
    </div>
  );
}
