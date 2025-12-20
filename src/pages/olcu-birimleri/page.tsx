import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
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

export default function OlcuBirimleri() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('olcu-birimleri-completed');
    if (saved) {
      setCompletedLevels(JSON.parse(saved));
    }
  }, []);

  const levels: Level[] = [
    {
      id: 1,
      title: 'Uzunluk Ölçüleri',
      description: 'Metre, santimetre, kilometre',
      icon: '📏',
      color: 'from-blue-400 to-cyan-500',
      questions: [
        {
          id: 1,
          question: '1 metre kaç santimetredir?',
          options: ['10 cm', '100 cm', '1000 cm', '50 cm'],
          correct: 1,
          explanation: '1 metre = 100 santimetre. "Santi" yüzde bir demektir!'
        },
        {
          id: 2,
          question: '1 kilometre kaç metredir?',
          options: ['100 m', '500 m', '1000 m', '10000 m'],
          correct: 2,
          explanation: '1 kilometre = 1000 metre. "Kilo" bin demektir!'
        },
        {
          id: 3,
          question: '250 cm kaç metredir?',
          options: ['2,5 m', '25 m', '0,25 m', '250 m'],
          correct: 0,
          explanation: '250 ÷ 100 = 2,5 metre.'
        },
        {
          id: 4,
          question: '3 km 500 m kaç metredir?',
          options: ['3500 m', '350 m', '35000 m', '305 m'],
          correct: 0,
          explanation: '3 km = 3000 m + 500 m = 3500 m.'
        },
        {
          id: 5,
          question: '1 metre kaç milimetredir?',
          options: ['10 mm', '100 mm', '1000 mm', '10000 mm'],
          correct: 2,
          explanation: '1 m = 100 cm = 1000 mm. "Mili" binde bir demektir!'
        },
        {
          id: 6,
          question: 'Bir futbol sahası yaklaşık kaç metredir?',
          options: ['50 m', '100 m', '200 m', '500 m'],
          correct: 1,
          explanation: 'Standart bir futbol sahası yaklaşık 100-110 metre uzunluğundadır.'
        },
        {
          id: 7,
          question: '4500 m kaç kilometredir?',
          options: ['4,5 km', '45 km', '0,45 km', '450 km'],
          correct: 0,
          explanation: '4500 ÷ 1000 = 4,5 kilometre.'
        },
        {
          id: 8,
          question: '2 m 75 cm kaç santimetredir?',
          options: ['275 cm', '2075 cm', '27,5 cm', '207,5 cm'],
          correct: 0,
          explanation: '2 m = 200 cm + 75 cm = 275 cm.'
        }
      ]
    },
    {
      id: 2,
      title: 'Ağırlık Ölçüleri',
      description: 'Kilogram, gram, ton',
      icon: '⚖️',
      color: 'from-green-400 to-emerald-500',
      questions: [
        {
          id: 1,
          question: '1 kilogram kaç gramdır?',
          options: ['10 g', '100 g', '1000 g', '10000 g'],
          correct: 2,
          explanation: '1 kg = 1000 gram. "Kilo" bin demektir!'
        },
        {
          id: 2,
          question: '1 ton kaç kilogramdır?',
          options: ['100 kg', '500 kg', '1000 kg', '10000 kg'],
          correct: 2,
          explanation: '1 ton = 1000 kg. Bir otomobil yaklaşık 1-2 ton ağırlığındadır.'
        },
        {
          id: 3,
          question: '500 gram kaç kilogramdır?',
          options: ['5 kg', '0,5 kg', '50 kg', '0,05 kg'],
          correct: 1,
          explanation: '500 g = 0,5 kg (yarım kilo).'
        },
        {
          id: 4,
          question: '2 kg 250 g kaç gramdır?',
          options: ['2250 g', '225 g', '22500 g', '2025 g'],
          correct: 0,
          explanation: '2 kg = 2000 g + 250 g = 2250 g.'
        },
        {
          id: 5,
          question: 'Bir elma yaklaşık kaç gram ağırlığındadır?',
          options: ['20 g', '200 g', '2 kg', '20 kg'],
          correct: 1,
          explanation: 'Orta boy bir elma yaklaşık 150-200 gram ağırlığındadır.'
        },
        {
          id: 6,
          question: '3500 g kaç kg kaç gramdır?',
          options: ['3 kg 500 g', '35 kg', '0,35 kg', '350 g'],
          correct: 0,
          explanation: '3500 g = 3000 g + 500 g = 3 kg 500 g.'
        },
        {
          id: 7,
          question: '1,5 ton kaç kilogramdır?',
          options: ['150 kg', '1500 kg', '15000 kg', '15 kg'],
          correct: 1,
          explanation: '1,5 ton = 1,5 × 1000 = 1500 kg.'
        },
        {
          id: 8,
          question: '750 g + 750 g = ?',
          options: ['1,5 kg', '1500 g', 'İkisi de doğru', '15 kg'],
          correct: 2,
          explanation: '750 + 750 = 1500 g = 1,5 kg. Her ikisi de aynı değeri ifade eder!'
        }
      ]
    },
    {
      id: 3,
      title: 'Sıvı Ölçüleri',
      description: 'Litre, mililitre, desilitre',
      icon: '🧪',
      color: 'from-purple-400 to-pink-500',
      questions: [
        {
          id: 1,
          question: '1 litre kaç mililitredir?',
          options: ['10 mL', '100 mL', '1000 mL', '10000 mL'],
          correct: 2,
          explanation: '1 L = 1000 mL. "Mili" binde bir demektir!'
        },
        {
          id: 2,
          question: '500 mL kaç litredir?',
          options: ['5 L', '0,5 L', '50 L', '0,05 L'],
          correct: 1,
          explanation: '500 mL = 0,5 L (yarım litre).'
        },
        {
          id: 3,
          question: 'Bir su bardağı yaklaşık kaç mililitredir?',
          options: ['20 mL', '200 mL', '2 L', '20 L'],
          correct: 1,
          explanation: 'Standart bir su bardağı yaklaşık 200-250 mL kapasitededir.'
        },
        {
          id: 4,
          question: '2 L 750 mL kaç mililitredir?',
          options: ['2750 mL', '275 mL', '27500 mL', '2075 mL'],
          correct: 0,
          explanation: '2 L = 2000 mL + 750 mL = 2750 mL.'
        },
        {
          id: 5,
          question: '1 desilitre (dL) kaç mililitredir?',
          options: ['10 mL', '100 mL', '1000 mL', '1 mL'],
          correct: 1,
          explanation: '1 dL = 100 mL. "Desi" onda bir demektir!'
        },
        {
          id: 6,
          question: '3 L su, 250 mL\'lik kaç bardağı doldurur?',
          options: ['10 bardak', '12 bardak', '15 bardak', '8 bardak'],
          correct: 1,
          explanation: '3000 mL ÷ 250 mL = 12 bardak.'
        },
        {
          id: 7,
          question: '1,5 L + 500 mL = ?',
          options: ['2 L', '2000 mL', 'İkisi de doğru', '1,55 L'],
          correct: 2,
          explanation: '1500 mL + 500 mL = 2000 mL = 2 L.'
        },
        {
          id: 8,
          question: '4500 mL kaç litre kaç mililitredir?',
          options: ['4 L 500 mL', '45 L', '4 L 50 mL', '450 mL'],
          correct: 0,
          explanation: '4500 mL = 4000 mL + 500 mL = 4 L 500 mL.'
        }
      ]
    },
    {
      id: 4,
      title: 'Birim Dönüşümleri',
      description: 'Birimleri birbirine çevir',
      icon: '🔄',
      color: 'from-orange-400 to-red-500',
      questions: [
        {
          id: 1,
          question: '2,5 km kaç metredir?',
          options: ['250 m', '2500 m', '25000 m', '25 m'],
          correct: 1,
          explanation: '2,5 × 1000 = 2500 m.'
        },
        {
          id: 2,
          question: '3,75 kg kaç gramdır?',
          options: ['375 g', '3750 g', '37500 g', '37,5 g'],
          correct: 1,
          explanation: '3,75 × 1000 = 3750 g.'
        },
        {
          id: 3,
          question: '4250 mL kaç litredir?',
          options: ['42,5 L', '4,25 L', '0,425 L', '425 L'],
          correct: 1,
          explanation: '4250 ÷ 1000 = 4,25 L.'
        },
        {
          id: 4,
          question: '1850 cm kaç metre kaç santimetredir?',
          options: ['18 m 50 cm', '185 m', '1 m 850 cm', '1,850 cm'],
          correct: 0,
          explanation: '1850 cm = 1800 cm + 50 cm = 18 m 50 cm.'
        },
        {
          id: 5,
          question: '0,75 ton kaç kilogramdır?',
          options: ['75 kg', '750 kg', '7500 kg', '7,5 kg'],
          correct: 1,
          explanation: '0,75 × 1000 = 750 kg.'
        },
        {
          id: 6,
          question: '125 mm kaç santimetredir?',
          options: ['1,25 cm', '12,5 cm', '125 cm', '0,125 cm'],
          correct: 1,
          explanation: '125 mm ÷ 10 = 12,5 cm.'
        },
        {
          id: 7,
          question: '2,4 L kaç mililitredir?',
          options: ['24 mL', '240 mL', '2400 mL', '24000 mL'],
          correct: 2,
          explanation: '2,4 × 1000 = 2400 mL.'
        },
        {
          id: 8,
          question: '6500 g kaç kilogramdır?',
          options: ['0,65 kg', '6,5 kg', '65 kg', '650 kg'],
          correct: 1,
          explanation: '6500 ÷ 1000 = 6,5 kg.'
        }
      ]
    },
    {
      id: 5,
      title: 'Günlük Hayat Problemleri',
      description: 'Gerçek hayat ölçü problemleri',
      icon: '🏠',
      color: 'from-teal-400 to-cyan-500',
      questions: [
        {
          id: 1,
          question: 'Ayşe 1,5 km yürüdü, sonra 800 m daha yürüdü. Toplam kaç metre yürüdü?',
          options: ['2300 m', '2,3 km', 'İkisi de doğru', '1580 m'],
          correct: 2,
          explanation: '1500 m + 800 m = 2300 m = 2,3 km.'
        },
        {
          id: 2,
          question: 'Bir kek tarifi için 750 g un, 500 g şeker gerekiyor. Toplam malzeme ağırlığı?',
          options: ['1,25 kg', '1250 g', 'İkisi de doğru', '125 g'],
          correct: 2,
          explanation: '750 + 500 = 1250 g = 1,25 kg.'
        },
        {
          id: 3,
          question: '5 L\'lik bir bidondan 2 L 300 mL su kullanıldı. Kaç mL su kaldı?',
          options: ['2700 mL', '3300 mL', '2300 mL', '2,7 L'],
          correct: 0,
          explanation: '5000 mL - 2300 mL = 2700 mL.'
        },
        {
          id: 4,
          question: 'Mehmet\'in boyu 1 m 45 cm. Ablasının boyu 1 m 68 cm. Aralarındaki fark kaç cm?',
          options: ['23 cm', '13 cm', '33 cm', '113 cm'],
          correct: 0,
          explanation: '168 cm - 145 cm = 23 cm.'
        },
        {
          id: 5,
          question: 'Market poşetinde 2 kg elma, 1,5 kg portakal ve 750 g üzüm var. Toplam ağırlık?',
          options: ['4,25 kg', '4250 g', 'İkisi de doğru', '425 g'],
          correct: 2,
          explanation: '2000 + 1500 + 750 = 4250 g = 4,25 kg.'
        },
        {
          id: 6,
          question: 'Bir şişe 1,5 L limonata 6 bardağa eşit bölünürse, her bardakta kaç mL olur?',
          options: ['200 mL', '250 mL', '300 mL', '150 mL'],
          correct: 1,
          explanation: '1500 mL ÷ 6 = 250 mL.'
        },
        {
          id: 7,
          question: 'Okul ile ev arası 1,2 km. Günde gidiş-geliş kaç metre yol yapılır?',
          options: ['1200 m', '2400 m', '2,4 km', 'Son ikisi doğru'],
          correct: 3,
          explanation: '1200 × 2 = 2400 m = 2,4 km.'
        },
        {
          id: 8,
          question: 'Bir bebek doğduğunda 3 kg 200 g. 6 ayda 2 kg 500 g aldı. Şimdiki ağırlığı?',
          options: ['5,7 kg', '5700 g', 'İkisi de doğru', '570 g'],
          correct: 2,
          explanation: '3200 g + 2500 g = 5700 g = 5,7 kg.'
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
        localStorage.setItem('olcu-birimleri-completed', JSON.stringify(newCompleted));
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
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>📏</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>⚖️</div>
        <div className="absolute bottom-32 left-1/4 text-7xl opacity-20 animate-pulse">🧪</div>
        <div className="absolute bottom-40 right-1/4 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>🔄</div>
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex">
          <Link to="/" className="hover:text-teal-600 cursor-pointer whitespace-nowrap">Ana Sayfa</Link>
          <i className="ri-arrow-right-s-line text-xl"></i>
          <span className="text-teal-600 whitespace-nowrap">Ölçü Birimleri</span>
        </div>

        {!selectedLevel ? (
          <>
            {/* Header Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-teal-200">
              <div className="flex items-start gap-8">
                <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl shadow-xl flex-shrink-0 transform hover:rotate-6 transition-transform">
                  <span className="text-6xl">📏</span>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-3">
                    Ölçü Birimleri
                  </h1>
                  <p className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">
                    Uzunluk, ağırlık ve sıvı ölçü birimlerini öğren!
                    Metre, kilogram ve litre ile tanış, dönüşümler yap!
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">📏</span>
                      <span className="text-sm font-bold text-gray-700">Uzunluk</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">⚖️</span>
                      <span className="text-sm font-bold text-gray-700">Ağırlık</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">🧪</span>
                      <span className="text-sm font-bold text-gray-700">Sıvı</span>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">🔄</span>
                      <span className="text-sm font-bold text-gray-700">Dönüşüm</span>
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
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-200 hover:border-teal-300 transition-all">
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-teal-200">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8 text-center">
                📚 Ölçü Birimleri Konu Anlatımı
              </h2>

              {/* Uzunluk Ölçüleri */}
              <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <h3 className="text-2xl font-black text-blue-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg">1</span>
                  Uzunluk Ölçüleri 📏
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-4">
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <p className="text-3xl font-bold text-blue-700">km</p>
                      <p className="text-sm text-gray-600">Kilometre</p>
                      <p className="text-xs text-gray-500">Uzun mesafeler</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <p className="text-3xl font-bold text-blue-700">m</p>
                      <p className="text-sm text-gray-600">Metre</p>
                      <p className="text-xs text-gray-500">Temel birim</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <p className="text-3xl font-bold text-blue-700">cm</p>
                      <p className="text-sm text-gray-600">Santimetre</p>
                      <p className="text-xs text-gray-500">Küçük ölçüler</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <p className="text-3xl font-bold text-blue-700">mm</p>
                      <p className="text-sm text-gray-600">Milimetre</p>
                      <p className="text-xs text-gray-500">Çok küçük</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
                    <p className="font-bold text-yellow-700 mb-2">🔑 Dönüşüm Kuralları:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
                      <p className="font-bold">1 km = 1000 m</p>
                      <p className="font-bold">1 m = 100 cm</p>
                      <p className="font-bold">1 cm = 10 mm</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow">
                    <p className="font-bold text-blue-700 mb-2">Büyükten Küçüğe (×)</p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-gray-700">2 km → metre?</p>
                      <p className="font-bold text-blue-600">2 × 1000 = 2000 m</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <p className="font-bold text-blue-700 mb-2">Küçükten Büyüğe (÷)</p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-gray-700">500 cm → metre?</p>
                      <p className="font-bold text-blue-600">500 ÷ 100 = 5 m</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ağırlık Ölçüleri */}
              <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <h3 className="text-2xl font-black text-green-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg">2</span>
                  Ağırlık Ölçüleri ⚖️
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                    <div className="bg-green-100 p-4 rounded-xl">
                      <p className="text-3xl font-bold text-green-700">ton</p>
                      <p className="text-sm text-gray-600">Ton</p>
                      <p className="text-xs text-gray-500">Ağır yükler</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-xl">
                      <p className="text-3xl font-bold text-green-700">kg</p>
                      <p className="text-sm text-gray-600">Kilogram</p>
                      <p className="text-xs text-gray-500">Temel birim</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-xl">
                      <p className="text-3xl font-bold text-green-700">g</p>
                      <p className="text-sm text-gray-600">Gram</p>
                      <p className="text-xs text-gray-500">Hafif şeyler</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
                    <p className="font-bold text-yellow-700 mb-2">🔑 Dönüşüm Kuralları:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center">
                      <p className="font-bold">1 ton = 1000 kg</p>
                      <p className="font-bold">1 kg = 1000 g</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-3 rounded-xl shadow text-center">
                    <div className="text-2xl mb-1">🍎</div>
                    <p className="text-sm font-bold">Elma</p>
                    <p className="text-xs text-gray-500">≈ 200 g</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow text-center">
                    <div className="text-2xl mb-1">📚</div>
                    <p className="text-sm font-bold">Kitap</p>
                    <p className="text-xs text-gray-500">≈ 500 g</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow text-center">
                    <div className="text-2xl mb-1">🎒</div>
                    <p className="text-sm font-bold">Dolu çanta</p>
                    <p className="text-xs text-gray-500">≈ 5 kg</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow text-center">
                    <div className="text-2xl mb-1">🚗</div>
                    <p className="text-sm font-bold">Araba</p>
                    <p className="text-xs text-gray-500">≈ 1,5 ton</p>
                  </div>
                </div>
              </div>

              {/* Sıvı Ölçüleri */}
              <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <h3 className="text-2xl font-black text-purple-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg">3</span>
                  Sıvı Ölçüleri 🧪
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                    <div className="bg-purple-100 p-4 rounded-xl">
                      <p className="text-3xl font-bold text-purple-700">L</p>
                      <p className="text-sm text-gray-600">Litre</p>
                      <p className="text-xs text-gray-500">Temel birim</p>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-xl">
                      <p className="text-3xl font-bold text-purple-700">dL</p>
                      <p className="text-sm text-gray-600">Desilitre</p>
                      <p className="text-xs text-gray-500">1/10 litre</p>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-xl">
                      <p className="text-3xl font-bold text-purple-700">mL</p>
                      <p className="text-sm text-gray-600">Mililitre</p>
                      <p className="text-xs text-gray-500">Küçük miktarlar</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
                    <p className="font-bold text-yellow-700 mb-2">🔑 Dönüşüm Kuralları:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center">
                      <p className="font-bold">1 L = 1000 mL</p>
                      <p className="font-bold">1 L = 10 dL</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-3 rounded-xl shadow text-center">
                    <div className="text-2xl mb-1">🥄</div>
                    <p className="text-sm font-bold">Kaşık</p>
                    <p className="text-xs text-gray-500">≈ 15 mL</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow text-center">
                    <div className="text-2xl mb-1">🥛</div>
                    <p className="text-sm font-bold">Bardak</p>
                    <p className="text-xs text-gray-500">≈ 200 mL</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow text-center">
                    <div className="text-2xl mb-1">🍶</div>
                    <p className="text-sm font-bold">Şişe</p>
                    <p className="text-xs text-gray-500">≈ 1,5 L</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow text-center">
                    <div className="text-2xl mb-1">🛁</div>
                    <p className="text-sm font-bold">Küvet</p>
                    <p className="text-xs text-gray-500">≈ 150 L</p>
                  </div>
                </div>
              </div>

              {/* Önek Anlamları */}
              <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
                <h3 className="text-2xl font-black text-orange-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg">4</span>
                  Önek Anlamları
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-lg text-gray-700 mb-4">Ölçü birimlerinin başındaki ekler özel anlamlar taşır:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-orange-100 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-orange-700">Kilo-</p>
                      <p className="text-4xl font-black text-orange-600">×1000</p>
                      <p className="text-sm text-gray-600 mt-2">kilo = bin</p>
                      <p className="text-xs text-gray-500">1 km = 1000 m</p>
                    </div>
                    <div className="bg-amber-100 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-amber-700">Santi-</p>
                      <p className="text-4xl font-black text-amber-600">÷100</p>
                      <p className="text-sm text-gray-600 mt-2">santi = yüzde bir</p>
                      <p className="text-xs text-gray-500">1 cm = 1/100 m</p>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-yellow-700">Mili-</p>
                      <p className="text-4xl font-black text-yellow-600">÷1000</p>
                      <p className="text-sm text-gray-600 mt-2">mili = binde bir</p>
                      <p className="text-xs text-gray-500">1 mm = 1/1000 m</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem Çözme İpuçları */}
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                <h3 className="text-2xl font-black text-indigo-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center text-lg">5</span>
                  Problem Çözme İpuçları
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-xl">
                      <p className="font-bold text-green-700 mb-2">✓ Aynı Birime Çevir</p>
                      <p className="text-sm text-gray-600">Toplama/çıkarma yapmadan önce birimleri eşitle:</p>
                      <div className="bg-white p-2 rounded-lg mt-2">
                        <p className="font-mono text-sm">2 km + 500 m = ?</p>
                        <p className="font-mono text-sm text-green-600">2000 m + 500 m = 2500 m</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <p className="font-bold text-blue-700 mb-2">✓ Merdiven Yöntemi</p>
                      <p className="text-sm text-gray-600">Her basamakta ×10 veya ÷10:</p>
                      <div className="bg-white p-2 rounded-lg mt-2 text-center">
                        <p className="font-bold">km → m → cm → mm</p>
                        <p className="text-xs text-gray-500">Her adımda ×10 (veya ×100, ×1000)</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                    <p className="font-bold text-yellow-700">💡 Hatırla: Büyük birimden küçüğe = ÇAR (×) | Küçükten büyüğe = BÖL (÷)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Measurement Facts */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-yellow-200">
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-6 flex items-center gap-3">
                <span className="text-4xl">💡</span> Ölçü Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🗼</span>
                    Eyfel Kulesi 330 metre yüksekliğindedir!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🐘</span>
                    Bir fil yaklaşık 6 ton (6000 kg) ağırlığındadır!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">💧</span>
                    İnsan vücudunun %60'ı sudur - yaklaşık 40 litre!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🌍</span>
                    Dünya'nın çevresi yaklaşık 40.000 kilometredir!
                  </p>
                </div>
              </div>

              {/* Conversion Table */}
              <div className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl">
                <h4 className="text-xl font-black text-gray-800 mb-4">Hızlı Dönüşüm Tablosu</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow">
                    <h5 className="font-bold text-blue-600 mb-2">Uzunluk</h5>
                    <p className="text-sm text-gray-700">1 km = 1000 m</p>
                    <p className="text-sm text-gray-700">1 m = 100 cm</p>
                    <p className="text-sm text-gray-700">1 cm = 10 mm</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <h5 className="font-bold text-green-600 mb-2">Ağırlık</h5>
                    <p className="text-sm text-gray-700">1 ton = 1000 kg</p>
                    <p className="text-sm text-gray-700">1 kg = 1000 g</p>
                    <p className="text-sm text-gray-700">1 g = 1000 mg</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <h5 className="font-bold text-purple-600 mb-2">Sıvı</h5>
                    <p className="text-sm text-gray-700">1 L = 1000 mL</p>
                    <p className="text-sm text-gray-700">1 L = 10 dL</p>
                    <p className="text-sm text-gray-700">1 dL = 100 mL</p>
                  </div>
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
              className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-teal-200"
            >
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-2 text-gray-600 hover:text-teal-600 font-bold"
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
                  <div className="bg-teal-100 px-4 py-2 rounded-full">
                    <span className="font-bold text-teal-600">
                      {currentQuestion + 1} / {selectedLevel.questions.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                <motion.div
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / selectedLevel.questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <div className="flex justify-center gap-4 mb-6">
                  <span className="text-6xl">{selectedLevel.icon}</span>
                </div>
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
                        ? 'bg-gradient-to-br from-gray-50 to-gray-100 hover:from-teal-50 hover:to-cyan-50 border-2 border-gray-200 hover:border-teal-300'
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
                  className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl font-bold text-lg hover:from-teal-600 hover:to-cyan-600 transition-all"
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
            className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-teal-200 text-center"
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

            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
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
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl font-bold hover:from-teal-600 hover:to-cyan-600 transition-all"
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
