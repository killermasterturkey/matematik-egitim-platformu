import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  moneyDisplay?: { type: 'coins' | 'bills' | 'mixed'; items: string[] };
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

export default function ParaHesaplama() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('para-hesaplama-completed');
    if (saved) {
      setCompletedLevels(JSON.parse(saved));
    }
  }, []);

  const levels: Level[] = [
    {
      id: 1,
      title: 'Paraları Tanıyalım',
      description: 'TL ve kuruşları tanı',
      icon: '🪙',
      color: 'from-yellow-400 to-amber-500',
      questions: [
        {
          id: 1,
          question: 'Aşağıdakilerden hangisi en değerli Türk Lirası banknotudur?',
          options: ['10 TL', '50 TL', '100 TL', '200 TL'],
          correct: 3,
          explanation: '200 TL, Türkiye\'de kullanılan en değerli banknottur.'
        },
        {
          id: 2,
          question: '1 TL kaç kuruştur?',
          options: ['10 kuruş', '50 kuruş', '100 kuruş', '1000 kuruş'],
          correct: 2,
          explanation: '1 TL = 100 kuruş. Tıpkı 1 metre = 100 santimetre gibi!'
        },
        {
          id: 3,
          question: 'Türkiye\'de hangi madeni para kullanılmaz?',
          options: ['1 kuruş', '5 kuruş', '3 kuruş', '10 kuruş'],
          correct: 2,
          explanation: 'Türkiye\'de 3 kuruşluk madeni para yoktur. 1, 5, 10, 25, 50 kuruş ve 1 TL vardır.'
        },
        {
          id: 4,
          question: '50 kuruş kaç TL\'dir?',
          options: ['0,25 TL', '0,50 TL', '5 TL', '0,05 TL'],
          correct: 1,
          explanation: '50 kuruş = 0,50 TL (yarım lira).'
        },
        {
          id: 5,
          question: 'En küçük TL banknotu hangisidir?',
          options: ['1 TL', '5 TL', '10 TL', '20 TL'],
          correct: 1,
          explanation: '5 TL en küçük banknottur. 1 TL madeni para olarak kullanılır.'
        },
        {
          id: 6,
          question: '25 kuruş kaç TL\'dir?',
          options: ['0,25 TL', '2,5 TL', '0,025 TL', '25 TL'],
          correct: 0,
          explanation: '25 kuruş = 0,25 TL (çeyrek lira).'
        },
        {
          id: 7,
          question: 'Hangi TL banknotu turuncu renklidir?',
          options: ['10 TL', '20 TL', '50 TL', '100 TL'],
          correct: 2,
          explanation: '50 TL banknotu turuncu renklidir.'
        },
        {
          id: 8,
          question: '10 kuruş kaç TL\'dir?',
          options: ['1 TL', '0,10 TL', '0,01 TL', '10 TL'],
          correct: 1,
          explanation: '10 kuruş = 0,10 TL.'
        }
      ]
    },
    {
      id: 2,
      title: 'Para Toplama',
      description: 'Paraları topla ve değerini bul',
      icon: '💰',
      color: 'from-green-400 to-emerald-500',
      questions: [
        {
          id: 1,
          question: '2 TL + 3 TL = ?',
          moneyDisplay: { type: 'bills', items: ['2TL', '3TL'] },
          options: ['4 TL', '5 TL', '6 TL', '23 TL'],
          correct: 1,
          explanation: '2 TL + 3 TL = 5 TL. Basit toplama!'
        },
        {
          id: 2,
          question: '50 kuruş + 50 kuruş = ?',
          moneyDisplay: { type: 'coins', items: ['50kr', '50kr'] },
          options: ['1 TL', '100 kuruş', 'İkisi de doğru', '50 kuruş'],
          correct: 2,
          explanation: '50 + 50 = 100 kuruş = 1 TL. Her ikisi de aynı değeri ifade eder!'
        },
        {
          id: 3,
          question: '10 TL + 5 TL + 20 TL = ?',
          options: ['25 TL', '30 TL', '35 TL', '40 TL'],
          correct: 2,
          explanation: '10 + 5 + 20 = 35 TL.'
        },
        {
          id: 4,
          question: '75 kuruş + 25 kuruş = ?',
          options: ['100 kuruş', '1 TL', 'İkisi de doğru', '75 kuruş'],
          correct: 2,
          explanation: '75 + 25 = 100 kuruş = 1 TL.'
        },
        {
          id: 5,
          question: '3 TL 50 kuruş + 2 TL 50 kuruş = ?',
          options: ['5 TL', '6 TL', '5 TL 50 kuruş', '5 TL 100 kuruş'],
          correct: 1,
          explanation: '3,50 + 2,50 = 6 TL. (50 kr + 50 kr = 1 TL)'
        },
        {
          id: 6,
          question: '100 TL + 50 TL + 20 TL = ?',
          options: ['150 TL', '160 TL', '170 TL', '180 TL'],
          correct: 2,
          explanation: '100 + 50 + 20 = 170 TL.'
        },
        {
          id: 7,
          question: '1 TL + 25 kuruş + 25 kuruş = ?',
          options: ['1 TL 25 kuruş', '1 TL 50 kuruş', '2 TL', '1 TL 75 kuruş'],
          correct: 1,
          explanation: '1 TL + 25 kr + 25 kr = 1 TL 50 kuruş.'
        },
        {
          id: 8,
          question: '200 TL + 100 TL + 50 TL + 10 TL = ?',
          options: ['350 TL', '360 TL', '340 TL', '370 TL'],
          correct: 1,
          explanation: '200 + 100 + 50 + 10 = 360 TL.'
        }
      ]
    },
    {
      id: 3,
      title: 'Para Üstü',
      description: 'Alışverişte para üstü hesapla',
      icon: '🛒',
      color: 'from-blue-400 to-indigo-500',
      questions: [
        {
          id: 1,
          question: '5 TL\'lik ürün için 10 TL verdin. Para üstün kaç TL?',
          options: ['3 TL', '5 TL', '15 TL', '4 TL'],
          correct: 1,
          explanation: '10 - 5 = 5 TL para üstü.'
        },
        {
          id: 2,
          question: '3 TL 50 kuruşluk dondurma için 5 TL verdin. Para üstün ne kadar?',
          options: ['1 TL', '1 TL 50 kuruş', '2 TL', '2 TL 50 kuruş'],
          correct: 1,
          explanation: '5 TL - 3,50 TL = 1 TL 50 kuruş.'
        },
        {
          id: 3,
          question: '27 TL\'lik oyuncak için 50 TL verdin. Para üstün kaç TL?',
          options: ['13 TL', '23 TL', '33 TL', '17 TL'],
          correct: 1,
          explanation: '50 - 27 = 23 TL para üstü.'
        },
        {
          id: 4,
          question: '8 TL 75 kuruşluk kitap için 10 TL verdin. Para üstün?',
          options: ['1 TL 25 kuruş', '1 TL 75 kuruş', '2 TL 25 kuruş', '1 TL'],
          correct: 0,
          explanation: '10 TL - 8,75 TL = 1 TL 25 kuruş.'
        },
        {
          id: 5,
          question: '45 TL\'lik ayakkabı için 100 TL verdin. Para üstün?',
          options: ['45 TL', '55 TL', '65 TL', '35 TL'],
          correct: 1,
          explanation: '100 - 45 = 55 TL para üstü.'
        },
        {
          id: 6,
          question: '12 TL 50 kuruşluk sandviç için 20 TL verdin. Para üstün?',
          options: ['7 TL', '7 TL 50 kuruş', '8 TL', '8 TL 50 kuruş'],
          correct: 1,
          explanation: '20 - 12,50 = 7 TL 50 kuruş.'
        },
        {
          id: 7,
          question: '63 TL\'lik çanta için 100 TL verdin. Para üstün?',
          options: ['27 TL', '37 TL', '47 TL', '33 TL'],
          correct: 1,
          explanation: '100 - 63 = 37 TL para üstü.'
        },
        {
          id: 8,
          question: '199 TL\'lik telefon kılıfı için 200 TL verdin. Para üstün?',
          options: ['1 TL', '10 TL', '11 TL', '99 kuruş'],
          correct: 0,
          explanation: '200 - 199 = 1 TL para üstü.'
        }
      ]
    },
    {
      id: 4,
      title: 'Alışveriş Problemleri',
      description: 'Gerçek alışveriş senaryoları',
      icon: '🏪',
      color: 'from-purple-400 to-pink-500',
      questions: [
        {
          id: 1,
          question: 'Elif 3 kalem aldı. Her kalem 4 TL. Toplam kaç TL ödedi?',
          options: ['7 TL', '12 TL', '15 TL', '10 TL'],
          correct: 1,
          explanation: '3 × 4 = 12 TL.'
        },
        {
          id: 2,
          question: 'Marketten 15 TL\'lik ekmek ve 8 TL\'lik peynir aldın. Toplam?',
          options: ['20 TL', '23 TL', '25 TL', '18 TL'],
          correct: 1,
          explanation: '15 + 8 = 23 TL.'
        },
        {
          id: 3,
          question: 'Cüzdanında 50 TL var. 35 TL\'lik kitap aldın. Kaç TL kaldı?',
          options: ['10 TL', '15 TL', '20 TL', '25 TL'],
          correct: 1,
          explanation: '50 - 35 = 15 TL.'
        },
        {
          id: 4,
          question: '4 arkadaş yemeğe gitti. Hesap 120 TL. Eşit bölüşürlerse kişi başı kaç TL?',
          options: ['25 TL', '30 TL', '35 TL', '40 TL'],
          correct: 1,
          explanation: '120 ÷ 4 = 30 TL.'
        },
        {
          id: 5,
          question: 'Oyuncak 85 TL, indirimde %20 indirim var. İndirimli fiyat kaç TL?',
          options: ['65 TL', '68 TL', '70 TL', '75 TL'],
          correct: 1,
          explanation: '%20 indirim = 85 × 0,20 = 17 TL. İndirimli: 85 - 17 = 68 TL.'
        },
        {
          id: 6,
          question: 'Annen sana haftalık 25 TL harçlık veriyor. 4 haftada toplam kaç TL biriktirirsin?',
          options: ['75 TL', '100 TL', '125 TL', '80 TL'],
          correct: 1,
          explanation: '25 × 4 = 100 TL.'
        },
        {
          id: 7,
          question: 'Sinema bileti 45 TL, patlamış mısır 25 TL. İki kişilik toplam masraf?',
          options: ['70 TL', '115 TL', '140 TL', '90 TL'],
          correct: 2,
          explanation: '2 bilet = 90 TL, 2 mısır = 50 TL. Toplam: 140 TL.'
        },
        {
          id: 8,
          question: 'Kumbarada 250 TL var. Kardeşinle yarı yarıya bölüşürseniz kaç TL alırsın?',
          options: ['100 TL', '125 TL', '150 TL', '175 TL'],
          correct: 1,
          explanation: '250 ÷ 2 = 125 TL.'
        }
      ]
    },
    {
      id: 5,
      title: 'Bütçe Yönetimi',
      description: 'Paramızı nasıl yönetelim?',
      icon: '📊',
      color: 'from-teal-400 to-cyan-500',
      questions: [
        {
          id: 1,
          question: 'Ayda 500 TL harçlığın var. %10\'unu biriktirirsen kaç TL biriktirirsin?',
          options: ['25 TL', '50 TL', '75 TL', '100 TL'],
          correct: 1,
          explanation: '500 × 0,10 = 50 TL.'
        },
        {
          id: 2,
          question: '200 TL bütçen var. 3 kitap almak istiyorsun, her biri 55 TL. Yeterli mi?',
          options: ['Evet, 35 TL kalır', 'Evet, tam yeter', 'Hayır, 15 TL eksik', 'Hayır, 65 TL eksik'],
          correct: 2,
          explanation: '3 × 55 = 165 TL. 200 - 165 = 35 TL kalır.'
        },
        {
          id: 3,
          question: 'Her gün 5 TL biriktirirsen, 2 haftada (14 gün) kaç TL biriktirirsin?',
          options: ['50 TL', '60 TL', '70 TL', '80 TL'],
          correct: 2,
          explanation: '5 × 14 = 70 TL.'
        },
        {
          id: 4,
          question: '180 TL\'lik oyun almak istiyorsun. Her ay 30 TL biriktirirsen kaç ayda alabilirsin?',
          options: ['4 ay', '5 ay', '6 ay', '7 ay'],
          correct: 2,
          explanation: '180 ÷ 30 = 6 ay.'
        },
        {
          id: 5,
          question: 'Doğum gününde 150 TL topladın. Yarısını harcadın. Kaç TL kaldı?',
          options: ['50 TL', '75 TL', '100 TL', '125 TL'],
          correct: 1,
          explanation: '150 ÷ 2 = 75 TL.'
        },
        {
          id: 6,
          question: '1000 TL\'yi bankaya yatırdın. Yıllık %5 faiz verirse yıl sonunda kaç TL olur?',
          options: ['1005 TL', '1050 TL', '1100 TL', '1500 TL'],
          correct: 1,
          explanation: '1000 × 1,05 = 1050 TL.'
        },
        {
          id: 7,
          question: 'Kumbarana her hafta 15 TL atıyorsun. 1 yılda (52 hafta) kaç TL biriktirirsin?',
          options: ['680 TL', '720 TL', '780 TL', '820 TL'],
          correct: 2,
          explanation: '15 × 52 = 780 TL.'
        },
        {
          id: 8,
          question: '300 TL\'lik bütçeni şöyle bölmek istiyorsun: %50 ihtiyaçlar, %30 eğlence, %20 birikim. Birikime kaç TL ayırırsın?',
          options: ['30 TL', '45 TL', '60 TL', '90 TL'],
          correct: 2,
          explanation: '300 × 0,20 = 60 TL birikim.'
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
        localStorage.setItem('para-hesaplama-completed', JSON.stringify(newCompleted));
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>💰</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🪙</div>
        <div className="absolute bottom-32 left-1/4 text-7xl opacity-20 animate-pulse">💵</div>
        <div className="absolute bottom-40 right-1/4 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>🏦</div>
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex">
          <Link to="/" className="hover:text-amber-600 cursor-pointer whitespace-nowrap">Ana Sayfa</Link>
          <i className="ri-arrow-right-s-line text-xl"></i>
          <span className="text-amber-600 whitespace-nowrap">Para Hesaplama</span>
        </div>

        {!selectedLevel ? (
          <>
            {/* Header Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-amber-200">
              <div className="flex items-start gap-8">
                <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl shadow-xl flex-shrink-0 transform hover:rotate-6 transition-transform">
                  <span className="text-6xl">💰</span>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600 mb-3">
                    Para Hesaplama
                  </h1>
                  <p className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">
                    Türk Lirası ve kuruşları öğren, alışveriş matematiğinde usta ol!
                    Gerçek hayatta en çok kullanacağın matematik becerileri burada!
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">🪙</span>
                      <span className="text-sm font-bold text-gray-700">TL ve Kuruş</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">🛒</span>
                      <span className="text-sm font-bold text-gray-700">Alışveriş</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">💳</span>
                      <span className="text-sm font-bold text-gray-700">Para Üstü</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                      <span className="text-2xl">📊</span>
                      <span className="text-sm font-bold text-gray-700">Bütçe</span>
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
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-200 hover:border-amber-300 transition-all">
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-amber-200">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600 mb-8 text-center">
                📚 Para Hesaplama Konu Anlatımı
              </h2>

              {/* TL ve Kuruş */}
              <div className="mb-8 p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl">
                <h3 className="text-2xl font-black text-amber-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center text-lg">1</span>
                  Türk Lirası ve Kuruş
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                  <div className="text-center mb-4">
                    <span className="text-6xl font-black text-amber-600">₺</span>
                    <p className="text-lg text-gray-600 mt-2">Türk Lirası Sembolü</p>
                  </div>
                  <div className="bg-amber-100 p-4 rounded-xl text-center">
                    <p className="text-2xl font-bold text-amber-700">1 TL = 100 Kuruş</p>
                    <p className="text-gray-600 mt-1">Tıpkı 1 metre = 100 santimetre gibi!</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <div className="text-3xl mb-2">🪙</div>
                    <p className="font-bold text-amber-700">1 Kuruş</p>
                    <p className="text-sm text-gray-500">= 0,01 TL</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <div className="text-3xl mb-2">🪙</div>
                    <p className="font-bold text-amber-700">25 Kuruş</p>
                    <p className="text-sm text-gray-500">= 0,25 TL (Çeyrek)</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <div className="text-3xl mb-2">🪙</div>
                    <p className="font-bold text-amber-700">50 Kuruş</p>
                    <p className="text-sm text-gray-500">= 0,50 TL (Yarım)</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow text-center">
                    <div className="text-3xl mb-2">🪙</div>
                    <p className="font-bold text-amber-700">1 TL</p>
                    <p className="text-sm text-gray-500">= 100 Kuruş</p>
                  </div>
                </div>
              </div>

              {/* Banknotlar */}
              <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <h3 className="text-2xl font-black text-green-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg">2</span>
                  Banknotlar
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow border-l-4 border-purple-500">
                    <div className="text-2xl font-bold text-purple-600">5 TL</div>
                    <p className="text-sm text-gray-500">Mor renk</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow border-l-4 border-red-500">
                    <div className="text-2xl font-bold text-red-600">10 TL</div>
                    <p className="text-sm text-gray-500">Kırmızı renk</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow border-l-4 border-green-500">
                    <div className="text-2xl font-bold text-green-600">20 TL</div>
                    <p className="text-sm text-gray-500">Yeşil renk</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow border-l-4 border-orange-500">
                    <div className="text-2xl font-bold text-orange-600">50 TL</div>
                    <p className="text-sm text-gray-500">Turuncu renk</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow border-l-4 border-blue-500">
                    <div className="text-2xl font-bold text-blue-600">100 TL</div>
                    <p className="text-sm text-gray-500">Mavi renk</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow border-l-4 border-yellow-500">
                    <div className="text-2xl font-bold text-yellow-600">200 TL</div>
                    <p className="text-sm text-gray-500">Sarı renk</p>
                  </div>
                </div>
              </div>

              {/* Para Toplama */}
              <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <h3 className="text-2xl font-black text-blue-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg">3</span>
                  Para Toplama
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow">
                    <h4 className="font-bold text-blue-700 mb-3">TL Toplama</h4>
                    <div className="bg-blue-50 p-4 rounded-lg font-mono text-lg">
                      <div className="text-right">10 TL</div>
                      <div className="text-right">+ 5 TL</div>
                      <div className="text-right">+ 20 TL</div>
                      <div className="border-t-2 border-blue-400 pt-1 text-right font-bold text-blue-700">= 35 TL</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <h4 className="font-bold text-blue-700 mb-3">Kuruşlu Toplama</h4>
                    <div className="bg-blue-50 p-4 rounded-lg font-mono text-lg">
                      <div className="text-right">3 TL 50 kr</div>
                      <div className="text-right">+ 2 TL 75 kr</div>
                      <div className="border-t-2 border-blue-400 pt-1 text-right font-bold text-blue-700">= 6 TL 25 kr</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">50 + 75 = 125 kr = 1 TL 25 kr</p>
                  </div>
                </div>
              </div>

              {/* Para Üstü Hesaplama */}
              <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <h3 className="text-2xl font-black text-purple-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg">4</span>
                  Para Üstü Hesaplama
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-lg text-gray-700 mb-4">Para üstü = Verilen para - Ürün fiyatı</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <p className="font-bold text-purple-700 mb-2">Örnek 1:</p>
                      <p className="text-gray-600">🍕 Pizza: 45 TL</p>
                      <p className="text-gray-600">💵 Verilen: 50 TL</p>
                      <div className="mt-2 p-2 bg-white rounded-lg">
                        <p className="font-bold text-purple-600">Para üstü: 50 - 45 = 5 TL</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <p className="font-bold text-purple-700 mb-2">Örnek 2:</p>
                      <p className="text-gray-600">🍦 Dondurma: 12 TL 50 kr</p>
                      <p className="text-gray-600">💵 Verilen: 20 TL</p>
                      <div className="mt-2 p-2 bg-white rounded-lg">
                        <p className="font-bold text-purple-600">Para üstü: 7 TL 50 kr</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bütçe Yönetimi */}
              <div className="mb-8 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                <h3 className="text-2xl font-black text-teal-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center text-lg">5</span>
                  Bütçe Yönetimi
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-lg text-gray-700 mb-4">Paramızı akıllıca kullanmak önemli!</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-4 rounded-xl text-center">
                      <div className="text-3xl mb-2">🎯</div>
                      <p className="font-bold text-red-700">İhtiyaçlar</p>
                      <p className="text-sm text-gray-600">Yiyecek, kırtasiye</p>
                      <div className="mt-2 bg-red-100 p-2 rounded-lg">
                        <p className="font-bold text-red-700">%50</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                      <div className="text-3xl mb-2">🎮</div>
                      <p className="font-bold text-blue-700">Eğlence</p>
                      <p className="text-sm text-gray-600">Oyun, sinema</p>
                      <div className="mt-2 bg-blue-100 p-2 rounded-lg">
                        <p className="font-bold text-blue-700">%30</p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl text-center">
                      <div className="text-3xl mb-2">🏦</div>
                      <p className="font-bold text-green-700">Birikim</p>
                      <p className="text-sm text-gray-600">Kumbara</p>
                      <div className="mt-2 bg-green-100 p-2 rounded-lg">
                        <p className="font-bold text-green-700">%20</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                    <p className="font-bold text-yellow-700">💡 Örnek: 100 TL harçlığın varsa</p>
                    <p className="text-gray-600">İhtiyaçlar: 50 TL | Eğlence: 30 TL | Birikim: 20 TL</p>
                  </div>
                </div>
              </div>

              {/* Yüzde Hesaplama */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
                <h3 className="text-2xl font-black text-orange-700 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg">6</span>
                  İndirim Hesaplama
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-lg text-gray-700 mb-4">İndirimli fiyat = Normal fiyat - İndirim miktarı</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <p className="font-bold text-orange-700 mb-2">%10 İndirim</p>
                      <p className="text-gray-600">Oyuncak: 100 TL</p>
                      <p className="text-gray-600">İndirim: 100 × 0,10 = 10 TL</p>
                      <div className="mt-2 p-2 bg-white rounded-lg">
                        <p className="font-bold text-orange-600">Ödenecek: 100 - 10 = 90 TL</p>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <p className="font-bold text-orange-700 mb-2">%20 İndirim</p>
                      <p className="text-gray-600">Kitap: 50 TL</p>
                      <p className="text-gray-600">İndirim: 50 × 0,20 = 10 TL</p>
                      <div className="mt-2 p-2 bg-white rounded-lg">
                        <p className="font-bold text-orange-600">Ödenecek: 50 - 10 = 40 TL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Money Facts */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-yellow-200">
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600 mb-6 flex items-center gap-3">
                <span className="text-4xl">💡</span> Para Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🇹🇷</span>
                    Türk Lirası sembolü "₺" 2012 yılında kabul edildi!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">📜</span>
                    Tüm TL banknotlarında Atatürk'ün portresi bulunur!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">🌍</span>
                    Dünyada 180'den fazla farklı para birimi kullanılıyor!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700">
                    <span className="text-2xl mr-2">💰</span>
                    İlk madeni paralar M.Ö. 600'lerde Lidya'da (bugünkü Türkiye) basıldı!
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
              className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-amber-200"
            >
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-2 text-gray-600 hover:text-amber-600 font-bold"
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
                  <div className="bg-amber-100 px-4 py-2 rounded-full">
                    <span className="font-bold text-amber-600">
                      {currentQuestion + 1} / {selectedLevel.questions.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                <motion.div
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / selectedLevel.questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <div className="flex justify-center gap-4 mb-6">
                  <span className="text-6xl">💵</span>
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
                        ? 'bg-gradient-to-br from-gray-50 to-gray-100 hover:from-yellow-50 hover:to-amber-50 border-2 border-gray-200 hover:border-amber-300'
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
                  className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-2xl font-bold text-lg hover:from-yellow-600 hover:to-amber-600 transition-all"
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
            className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-amber-200 text-center"
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

            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600 mb-4">
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
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-2xl font-bold hover:from-yellow-600 hover:to-amber-600 transition-all"
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
