import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import KarisikQuiz from './components/KarisikQuiz';

interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: number;
  time: string;
}

export default function Karisik() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  const challenges: Challenge[] = [
    {
      id: 1,
      title: 'Kolay Seviye',
      description: '1-2 basamaklı sayılarla karışık işlemler',
      icon: '🌱',
      color: 'from-green-400 to-emerald-500',
      questions: 20,
      time: '10 dakika'
    },
    {
      id: 2,
      title: 'Orta Seviye',
      description: '2-3 basamaklı sayılarla karışık işlemler',
      icon: '🌿',
      color: 'from-teal-400 to-cyan-500',
      questions: 25,
      time: '15 dakika'
    },
    {
      id: 3,
      title: 'Zor Seviye',
      description: '3-4 basamaklı sayılarla karışık işlemler',
      icon: '🌳',
      color: 'from-orange-400 to-amber-500',
      questions: 30,
      time: '20 dakika'
    },
    {
      id: 4,
      title: 'Uzman Seviye',
      description: 'Tüm basamaklarla karışık işlemler',
      icon: '🏆',
      color: 'from-yellow-400 to-orange-500',
      questions: 40,
      time: '25 dakika'
    }
  ];

  const motivationQuotes = [
    "Karışık işlemler seni daha güçlü yapıyor! 🌟",
    "Her soru bir adım daha ileri! 💪",
    "Sen bir matematik kahramanısın! 🦸",
    "Başarı, cesaretle gelir! Hadi başla! 🚀"
  ];

  const randomQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-orange-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-amber-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex">
          <Link to="/" className="hover:text-orange-600 cursor-pointer whitespace-nowrap">🏠 Ana Sayfa</Link>
          <i className="ri-arrow-right-s-line text-xl"></i>
          <span className="text-orange-600 whitespace-nowrap">🎲 Karışık İşlemler</span>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border-4 border-orange-200">
          <div className="flex items-start gap-8">
            <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl shadow-xl flex-shrink-0 transform hover:rotate-6 transition-transform">
              <span className="text-6xl">🎲</span>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-3">
                🎯 Karışık İşlemler
              </h1>
              <p className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">
                Toplama, çıkarma, çarpma ve bölme işlemlerini bir arada kullanarak becerilerini test et! 
                Her seviyede farklı zorlukta sorular seni bekliyor. Hazır mısın? 🚀
              </p>
              
              {/* Motivasyon Sözü */}
              <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 rounded-2xl p-4 mb-4 shadow-lg border-3 border-white">
                <p className="text-base md:text-lg font-black text-purple-700">
                  {randomQuote}
                </p>
              </div>
              
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <span className="text-2xl">➕</span>
                  <span className="text-sm font-bold text-gray-700">Toplama</span>
                </div>
                <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                  <span className="text-2xl">➖</span>
                  <span className="text-sm font-bold text-gray-700">Çıkarma</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <span className="text-2xl">✖️</span>
                  <span className="text-sm font-bold text-gray-700">Çarpma</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                  <span className="text-2xl">➗</span>
                  <span className="text-sm font-bold text-gray-700">Bölme</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-200">
                <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-10`}></div>
                
                <div className="relative p-8">
                  <div className="flex items-center gap-5 mb-5">
                    <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${challenge.color} rounded-2xl shadow-lg transition-all duration-300`}>
                      <span className="text-5xl">{challenge.icon}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-black text-gray-800 mb-3">
                    {challenge.title}
                  </h4>
                  <p className="text-base font-semibold text-gray-600 mb-6">
                    {challenge.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <i className="ri-question-line text-xl text-gray-600"></i>
                      <span className="text-sm font-bold text-gray-700">{challenge.questions} Soru</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-time-line text-xl text-gray-600"></i>
                      <span className="text-sm font-bold text-gray-700">{challenge.time}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedChallenge(challenge)}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full shadow-md transition-all bg-gradient-to-r ${challenge.color} text-white hover:shadow-lg hover:scale-105`}
                  >
                    <span className="text-base font-bold whitespace-nowrap">
                      {completedChallenges.includes(challenge.id) ? '✅ Tekrar' : '🚀 Başla'}
                    </span>
                    <i className="ri-arrow-right-circle-fill text-2xl"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border-4 border-yellow-200 mb-8">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl">
              <span className="text-5xl">💡</span>
            </div>
            <div>
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                İpuçları
              </h3>
              <p className="text-base font-semibold text-gray-600">Başarılı olmak için! 🌟</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-black text-gray-800 mb-1">Dikkatli Oku</h4>
                <p className="text-sm font-semibold text-gray-600">Her soruyu dikkatlice oku ve işlem türünü belirle</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-black text-gray-800 mb-1">Adım Adım İlerle</h4>
                <p className="text-sm font-semibold text-gray-600">Karmaşık işlemleri küçük adımlara böl</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <span className="text-2xl">🔍</span>
              <div>
                <h4 className="font-black text-gray-800 mb-1">Kontrol Et</h4>
                <p className="text-sm font-semibold text-gray-600">Cevabını vermeden önce bir kez daha kontrol et</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
              <span className="text-2xl">⏰</span>
              <div>
                <h4 className="font-black text-gray-800 mb-1">Zamanını İyi Kullan</h4>
                <p className="text-sm font-semibold text-gray-600">Acele etme ama zamanı da boşa harcama</p>
              </div>
            </div>
          </div>
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

      {/* Quiz Modal */}
      {selectedChallenge && (
        <KarisikQuiz
          challenge={selectedChallenge}
          onComplete={() => {
            setCompletedChallenges(prev => [...prev, selectedChallenge.id]);
            setSelectedChallenge(null);
          }}
          onClose={() => setSelectedChallenge(null)}
        />
      )}
    </div>
  );
}
