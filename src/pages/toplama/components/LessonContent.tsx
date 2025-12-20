import { useState, useEffect } from 'react';

interface LessonContentProps {
  lesson: {
    id: number;
    title: string;
    level: number;
  };
  onComplete: () => void;
  onClose: () => void;
}

export default function LessonContent({ lesson, onComplete, onClose }: LessonContentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState(1);

  const lessonSteps = getLessonSteps(lesson.level);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'tr-TR';
      utterance.rate = speechSpeed;
      utterance.pitch = 1.1;
      utterance.volume = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const handleNext = () => {
    stopSpeaking();
    if (currentStep < lessonSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowAnswer(false);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    stopSpeaking();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowAnswer(false);
    }
  };

  const currentStepData = lessonSteps[currentStep];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-4 border-purple-200 animate-scaleIn">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-t-3xl border-b-4 border-purple-300 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-lg">
                <span className="text-4xl">{lesson.level}️⃣</span>
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">{lesson.title}</h2>
                <p className="text-base font-semibold text-purple-100">
                  Adım {currentStep + 1} / {lessonSteps.length}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-xl transition-all cursor-pointer"
            >
              <i className="ri-close-line text-3xl text-white"></i>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full h-3 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${((currentStep + 1) / lessonSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg">
              <span className="text-3xl">{currentStepData.icon}</span>
            </div>
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {currentStepData.title}
            </h3>
          </div>

          {/* Explanation */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6 border-3 border-purple-200">
            <p className="text-lg font-semibold text-gray-700 leading-relaxed">
              {currentStepData.explanation}
            </p>
          </div>

          {/* Visual Example */}
          <div className="bg-white rounded-2xl p-8 mb-6 border-4 border-dashed border-purple-300 shadow-lg">
            <div className="flex flex-col items-center gap-6">
              {/* Numbers */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-6xl font-black text-purple-600 mb-2">
                    {currentStepData.example.num1}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {Array.from({ length: Math.min(currentStepData.example.num1, 10) }).map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-md animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s`, animationDuration: '2s' }}
                      >
                        <span className="text-xl">🟣</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-6xl font-black text-green-600">+</div>

                <div className="text-center">
                  <div className="text-6xl font-black text-pink-600 mb-2">
                    {currentStepData.example.num2}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {Array.from({ length: Math.min(currentStepData.example.num2, 10) }).map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-md animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s`, animationDuration: '2s' }}
                      >
                        <span className="text-xl">🔴</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Answer */}
              {showAnswer && (
                <div className="animate-scaleIn">
                  <div className="text-6xl font-black text-orange-600 mb-2">=</div>
                  <div className="text-center">
                    <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4">
                      {currentStepData.example.answer}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center max-w-md">
                      {Array.from({ length: Math.min(currentStepData.example.answer, 20) }).map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-md animate-bounce"
                          style={{ animationDelay: `${i * 0.05}s`, animationDuration: '2s' }}
                        >
                          <span className="text-xl">⭐</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Show Answer Button */}
          {!showAnswer && (
            <button
              onClick={() => setShowAnswer(true)}
              className="w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xl font-black rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer mb-6 whitespace-nowrap"
            >
              <span className="text-2xl mr-2">👀</span>
              Cevabı Göster
            </button>
          )}

          {/* Audio Controls */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-3 border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg">
                  <span className="text-2xl">🔊</span>
                </div>
                <span className="text-lg font-black text-gray-800">Sesli Anlatım</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-600">Hız:</span>
                <button
                  onClick={() => setSpeechSpeed(0.8)}
                  className={`px-4 py-2 rounded-lg font-bold cursor-pointer whitespace-nowrap ${
                    speechSpeed === 0.8
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  Yavaş
                </button>
                <button
                  onClick={() => setSpeechSpeed(1)}
                  className={`px-4 py-2 rounded-lg font-bold cursor-pointer whitespace-nowrap ${
                    speechSpeed === 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  Normal
                </button>
                <button
                  onClick={() => setSpeechSpeed(1.2)}
                  className={`px-4 py-2 rounded-lg font-bold cursor-pointer whitespace-nowrap ${
                    speechSpeed === 1.2
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  Hızlı
                </button>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => speak(currentStepData.audioText)}
                disabled={isSpeaking}
                className={`flex-1 py-3 rounded-xl font-bold cursor-pointer whitespace-nowrap ${
                  isSpeaking
                    ? 'bg-gray-300 text-gray-500'
                    : 'bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:shadow-lg transform hover:scale-105'
                } transition-all`}
              >
                <i className="ri-play-circle-fill text-xl mr-2"></i>
                {isSpeaking ? 'Anlatılıyor...' : 'Dinle'}
              </button>
              {isSpeaking && (
                <button
                  onClick={stopSpeaking}
                  className="px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-all cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-stop-circle-fill text-xl mr-2"></i>
                  Durdur
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="sticky bottom-0 bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-b-3xl border-t-4 border-gray-300">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-8 py-4 rounded-2xl font-black text-lg transition-all cursor-pointer whitespace-nowrap ${
                currentStep === 0
                  ? 'bg-gray-300 text-gray-500'
                  : 'bg-white text-gray-800 hover:shadow-lg transform hover:scale-105'
              }`}
            >
              <i className="ri-arrow-left-circle-fill text-2xl mr-2"></i>
              Önceki
            </button>

            <div className="text-center">
              <div className="text-sm font-semibold text-gray-600">İlerleme</div>
              <div className="text-2xl font-black text-purple-600">
                {currentStep + 1} / {lessonSteps.length}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-black text-lg hover:shadow-lg transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            >
              {currentStep === lessonSteps.length - 1 ? (
                <>
                  <span className="text-2xl mr-2">🎉</span>
                  Tamamla
                </>
              ) : (
                <>
                  Sonraki
                  <i className="ri-arrow-right-circle-fill text-2xl ml-2"></i>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getLessonSteps(level: number) {
  const steps = {
    1: [
      {
        icon: '👋',
        title: 'Toplama Nedir?',
        explanation: 'Toplama, iki veya daha fazla sayıyı birleştirerek yeni bir sayı bulmaktır. Mesela elinde 3 elma var, arkadaşın sana 2 elma daha verdi. Şimdi kaç elma var? Hadi birlikte öğrenelim!',
        example: { num1: 3, num2: 2, answer: 5 },
        audioText: 'Toplama, iki veya daha fazla sayıyı birleştirerek yeni bir sayı bulmaktır. Mesela elinde 3 elma var, arkadaşın sana 2 elma daha verdi. Şimdi toplam 5 elma var!'
      },
      {
        icon: '🎯',
        title: 'Basit Toplama',
        explanation: 'Tek haneli sayıları toplamak çok kolay! Parmaklarını kullanabilirsin. 4 artı 3 eşittir kaç? Hadi birlikte sayalım: 4, 5, 6, 7... Cevap 7!',
        example: { num1: 4, num2: 3, answer: 7 },
        audioText: 'Tek haneli sayıları toplamak çok kolay! 4 artı 3 eşittir kaç? Hadi birlikte sayalım: 4, 5, 6, 7. Cevap 7!'
      },
      {
        icon: '⭐',
        title: 'Biraz Daha Büyük Sayılar',
        explanation: 'Şimdi biraz daha büyük sayılarla çalışalım. 6 artı 4 eşittir kaç? Parmaklarını kullan veya kafandan say. 6, 7, 8, 9, 10... Harika! Cevap 10!',
        example: { num1: 6, num2: 4, answer: 10 },
        audioText: 'Şimdi biraz daha büyük sayılarla çalışalım. 6 artı 4 eşittir kaç? Hadi sayalım: 6, 7, 8, 9, 10. Harika! Cevap 10!'
      },
      {
        icon: '🚀',
        title: 'Pratik Zamanı!',
        explanation: 'Artık tek haneli sayıları toplamayı öğrendin! 7 artı 2 eşittir kaç? Düşün bakalım... Evet! Cevap 9! Aferin sana!',
        example: { num1: 7, num2: 2, answer: 9 },
        audioText: 'Artık tek haneli sayıları toplamayı öğrendin! 7 artı 2 eşittir kaç? Düşün bakalım... Evet! Cevap 9! Aferin sana!'
      }
    ],
    2: [
      {
        icon: '🎓',
        title: 'İki Haneli Sayılar',
        explanation: 'Şimdi iki haneli sayılarla toplama yapacağız! 12 artı 5 eşittir kaç? Birler basamağından başlayalım: 2 + 5 = 7. Onlar basamağı değişmedi: 1. Cevap 17!',
        example: { num1: 12, num2: 5, answer: 17 },
        audioText: 'Şimdi iki haneli sayılarla toplama yapacağız! 12 artı 5 eşittir kaç? Birler basamağından başlayalım: 2 artı 5 eşittir 7. Onlar basamağı değişmedi: 1. Cevap 17!'
      },
      {
        icon: '🌟',
        title: 'Eldeli Toplama',
        explanation: 'Bazen birler basamağı 10\'u geçer. 15 artı 8 eşittir kaç? 5 + 8 = 13. 3\'ü yaz, 1\'i elde tut. 1 + 1 = 2. Cevap 23!',
        example: { num1: 15, num2: 8, answer: 23 },
        audioText: 'Bazen birler basamağı 10\'u geçer. 15 artı 8 eşittir kaç? 5 artı 8 eşittir 13. 3\'ü yaz, 1\'i elde tut. 1 artı 1 eşittir 2. Cevap 23!'
      },
      {
        icon: '💫',
        title: 'İki Haneli + İki Haneli',
        explanation: 'Şimdi iki iki haneli sayıyı toplayalım! 23 artı 14 eşittir kaç? Birler: 3 + 4 = 7. Onlar: 2 + 1 = 3. Cevap 37!',
        example: { num1: 23, num2: 14, answer: 37 },
        audioText: 'Şimdi iki iki haneli sayıyı toplayalım! 23 artı 14 eşittir kaç? Birler basamağı: 3 artı 4 eşittir 7. Onlar basamağı: 2 artı 1 eşittir 3. Cevap 37!'
      },
      {
        icon: '🎉',
        title: 'Eldeli İki Haneli Toplama',
        explanation: 'Son örnek! 47 artı 36 eşittir kaç? Birler: 7 + 6 = 13 (3 yaz, 1 elde). Onlar: 4 + 3 + 1 = 8. Cevap 83! Harikasın!',
        example: { num1: 47, num2: 36, answer: 83 },
        audioText: 'Son örnek! 47 artı 36 eşittir kaç? Birler basamağı: 7 artı 6 eşittir 13. 3 yaz, 1 elde. Onlar basamağı: 4 artı 3 artı 1 eşittir 8. Cevap 83! Harikasın!'
      }
    ],
    3: [
      {
        icon: '🏆',
        title: 'Üç Haneli Sayılar',
        explanation: 'Artık üç haneli sayılarla çalışacağız! 123 artı 45 eşittir kaç? Birler: 3 + 5 = 8. Onlar: 2 + 4 = 6. Yüzler: 1. Cevap 168!',
        example: { num1: 123, num2: 45, answer: 168 },
        audioText: 'Artık üç haneli sayılarla çalışacağız! 123 artı 45 eşittir kaç? Birler: 3 artı 5 eşittir 8. Onlar: 2 artı 4 eşittir 6. Yüzler: 1. Cevap 168!'
      },
      {
        icon: '🎯',
        title: 'Eldeli Üç Haneli Toplama',
        explanation: '234 artı 178 eşittir kaç? Birler: 4 + 8 = 12 (2 yaz, 1 elde). Onlar: 3 + 7 + 1 = 11 (1 yaz, 1 elde). Yüzler: 2 + 1 + 1 = 4. Cevap 412!',
        example: { num1: 234, num2: 178, answer: 412 },
        audioText: '234 artı 178 eşittir kaç? Birler: 4 artı 8 eşittir 12, 2 yaz 1 elde. Onlar: 3 artı 7 artı 1 eşittir 11, 1 yaz 1 elde. Yüzler: 2 artı 1 artı 1 eşittir 4. Cevap 412!'
      },
      {
        icon: '⭐',
        title: 'Büyük Sayılar',
        explanation: '456 artı 287 eşittir kaç? Birler: 6 + 7 = 13 (3 yaz, 1 elde). Onlar: 5 + 8 + 1 = 14 (4 yaz, 1 elde). Yüzler: 4 + 2 + 1 = 7. Cevap 743!',
        example: { num1: 456, num2: 287, answer: 743 },
        audioText: '456 artı 287 eşittir kaç? Birler: 6 artı 7 eşittir 13, 3 yaz 1 elde. Onlar: 5 artı 8 artı 1 eşittir 14, 4 yaz 1 elde. Yüzler: 4 artı 2 artı 1 eşittir 7. Cevap 743!'
      },
      {
        icon: '🌈',
        title: 'Mükemmel!',
        explanation: 'Son örnek! 678 artı 234 eşittir kaç? Birler: 8 + 4 = 12 (2 yaz, 1 elde). Onlar: 7 + 3 + 1 = 11 (1 yaz, 1 elde). Yüzler: 6 + 2 + 1 = 9. Cevap 912! Süpersin!',
        example: { num1: 678, num2: 234, answer: 912 },
        audioText: 'Son örnek! 678 artı 234 eşittir kaç? Birler: 8 artı 4 eşittir 12, 2 yaz 1 elde. Onlar: 7 artı 3 artı 1 eşittir 11, 1 yaz 1 elde. Yüzler: 6 artı 2 artı 1 eşittir 9. Cevap 912! Süpersin!'
      }
    ],
    4: [
      {
        icon: '🚀',
        title: 'Dört Haneli Sayılar',
        explanation: 'Şimdi en büyük sayılarla çalışacağız! 1234 artı 567 eşittir kaç? Sağdan sola doğru topluyoruz. Birler: 4 + 7 = 11 (1 yaz, 1 elde). Onlar: 3 + 6 + 1 = 10 (0 yaz, 1 elde). Yüzler: 2 + 5 + 1 = 8. Binler: 1. Cevap 1801!',
        example: { num1: 1234, num2: 567, answer: 1801 },
        audioText: 'Şimdi en büyük sayılarla çalışacağız! 1234 artı 567 eşittir kaç? Birler: 4 artı 7 eşittir 11, 1 yaz 1 elde. Onlar: 3 artı 6 artı 1 eşittir 10, 0 yaz 1 elde. Yüzler: 2 artı 5 artı 1 eşittir 8. Binler: 1. Cevap 1801!'
      },
      {
        icon: '💎',
        title: 'Çok Eldeli Toplama',
        explanation: '2345 artı 3789 eşittir kaç? Birler: 5 + 9 = 14 (4 yaz, 1 elde). Onlar: 4 + 8 + 1 = 13 (3 yaz, 1 elde). Yüzler: 3 + 7 + 1 = 11 (1 yaz, 1 elde). Binler: 2 + 3 + 1 = 6. Cevap 6134!',
        example: { num1: 2345, num2: 3789, answer: 6134 },
        audioText: '2345 artı 3789 eşittir kaç? Birler: 5 artı 9 eşittir 14, 4 yaz 1 elde. Onlar: 4 artı 8 artı 1 eşittir 13, 3 yaz 1 elde. Yüzler: 3 artı 7 artı 1 eşittir 11, 1 yaz 1 elde. Binler: 2 artı 3 artı 1 eşittir 6. Cevap 6134!'
      },
      {
        icon: '🏅',
        title: 'Uzman Seviyesi',
        explanation: '4567 artı 2876 eşittir kaç? Birler: 7 + 6 = 13 (3 yaz, 1 elde). Onlar: 6 + 7 + 1 = 14 (4 yaz, 1 elde). Yüzler: 5 + 8 + 1 = 14 (4 yaz, 1 elde). Binler: 4 + 2 + 1 = 7. Cevap 7443!',
        example: { num1: 4567, num2: 2876, answer: 7443 },
        audioText: '4567 artı 2876 eşittir kaç? Birler: 7 artı 6 eşittir 13, 3 yaz 1 elde. Onlar: 6 artı 7 artı 1 eşittir 14, 4 yaz 1 elde. Yüzler: 5 artı 8 artı 1 eşittir 14, 4 yaz 1 elde. Binler: 4 artı 2 artı 1 eşittir 7. Cevap 7443!'
      },
      {
        icon: '👑',
        title: 'Toplama Şampiyonu!',
        explanation: 'Son ve en zor örnek! 5678 artı 4567 eşittir kaç? Birler: 8 + 7 = 15 (5 yaz, 1 elde). Onlar: 7 + 6 + 1 = 14 (4 yaz, 1 elde). Yüzler: 6 + 5 + 1 = 12 (2 yaz, 1 elde). Binler: 5 + 4 + 1 = 10. Cevap 10245! Artık toplama şampiyonusun!',
        example: { num1: 5678, num2: 4567, answer: 10245 },
        audioText: 'Son ve en zor örnek! 5678 artı 4567 eşittir kaç? Birler: 8 artı 7 eşittir 15, 5 yaz 1 elde. Onlar: 7 artı 6 artı 1 eşittir 14, 4 yaz 1 elde. Yüzler: 6 artı 5 artı 1 eşittir 12, 2 yaz 1 elde. Binler: 5 artı 4 artı 1 eşittir 10. Cevap 10245! Artık toplama şampiyonusun!'
      }
    ]
  };

  return steps[level as keyof typeof steps] || steps[1];
}
