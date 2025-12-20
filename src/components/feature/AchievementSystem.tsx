import { useState, useEffect } from 'react';

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  color: string;
}

interface AchievementSystemProps {
  onClose: () => void;
}

export default function AchievementSystem({ onClose }: AchievementSystemProps) {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    loadBadges();
  }, []);

  const loadBadges = () => {
    const savedProgress = localStorage.getItem('mathProgress');
    const progress = savedProgress ? JSON.parse(savedProgress) : {};

    const allBadges: Badge[] = [
      {
        id: 'first_lesson',
        name: 'İlk Adım',
        icon: '🌟',
        description: 'İlk dersini tamamladın!',
        unlocked: Object.values(progress).some((lessons: any) => 
          Object.values(lessons).some((completed: any) => completed === true)
        ),
        color: 'from-yellow-400 to-orange-500'
      },
      {
        id: 'addition_master',
        name: 'Toplama Ustası',
        icon: '➕',
        description: 'Tüm toplama derslerini tamamladın!',
        unlocked: progress.toplama && Object.keys(progress.toplama).length === 4,
        color: 'from-purple-400 to-pink-500'
      },
      {
        id: 'subtraction_master',
        name: 'Çıkarma Ustası',
        icon: '➖',
        description: 'Tüm çıkarma derslerini tamamladın!',
        unlocked: progress.cikarma && Object.keys(progress.cikarma).length === 4,
        color: 'from-blue-400 to-cyan-500'
      },
      {
        id: 'multiplication_master',
        name: 'Çarpma Ustası',
        icon: '✖️',
        description: 'Tüm çarpma derslerini tamamladın!',
        unlocked: progress.carpma && Object.keys(progress.carpma).length === 4,
        color: 'from-green-400 to-emerald-500'
      },
      {
        id: 'division_master',
        name: 'Bölme Ustası',
        icon: '➗',
        description: 'Tüm bölme derslerini tamamladın!',
        unlocked: progress.bolme && Object.keys(progress.bolme).length === 4,
        color: 'from-red-400 to-rose-500'
      },
      {
        id: 'speed_demon',
        name: 'Hız Canavarı',
        icon: '⚡',
        description: '10 dersi tamamladın!',
        unlocked: Object.values(progress).reduce((total: number, lessons: any) => 
          total + Object.keys(lessons).length, 0
        ) >= 10,
        color: 'from-yellow-300 to-yellow-600'
      },
      {
        id: 'persistent',
        name: 'Azimli Öğrenci',
        icon: '💪',
        description: '5 gün üst üste çalıştın!',
        unlocked: false,
        color: 'from-orange-400 to-red-500'
      },
      {
        id: 'math_genius',
        name: 'Matematik Dehası',
        icon: '🧠',
        description: 'Tüm dersleri tamamladın!',
        unlocked: progress.toplama && progress.cikarma && progress.carpma && progress.bolme &&
          Object.keys(progress.toplama).length === 4 &&
          Object.keys(progress.cikarma).length === 4 &&
          Object.keys(progress.carpma).length === 4 &&
          Object.keys(progress.bolme).length === 4,
        color: 'from-purple-500 to-pink-600'
      },
      {
        id: 'test_taker',
        name: 'Test Ustası',
        icon: '📝',
        description: 'İlk testini tamamladın!',
        unlocked: localStorage.getItem('testCompleted') === 'true',
        color: 'from-indigo-400 to-purple-500'
      },
      {
        id: 'perfect_score',
        name: 'Mükemmel Puan',
        icon: '💯',
        description: 'Bir testten tam puan aldın!',
        unlocked: localStorage.getItem('perfectScore') === 'true',
        color: 'from-pink-400 to-rose-500'
      },
      {
        id: 'explorer',
        name: 'Kaşif',
        icon: '🔍',
        description: 'Tüm bölümleri ziyaret ettin!',
        unlocked: localStorage.getItem('exploredAll') === 'true',
        color: 'from-teal-400 to-cyan-500'
      },
      {
        id: 'champion',
        name: 'Şampiyon',
        icon: '🏆',
        description: 'Karışık işlemleri tamamladın!',
        unlocked: localStorage.getItem('mixedCompleted') === 'true',
        color: 'from-amber-400 to-orange-600'
      }
    ];

    setBadges(allBadges);
  };

  const unlockedCount = badges.filter(b => b.unlocked).length;
  const totalCount = badges.length;
  const progress = (unlockedCount / totalCount) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-4 border-yellow-300 animate-scaleIn">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-6 rounded-t-3xl border-b-4 border-yellow-500 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-lg animate-bounce">
                <span className="text-4xl">🏆</span>
              </div>
              <div>
                <h2 className="text-3xl font-black text-white">Rozetlerim</h2>
                <p className="text-base font-semibold text-yellow-100">
                  {unlockedCount} / {totalCount} Rozet Kazandın!
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
          <div className="mt-4 w-full h-4 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: `${progress}%` }}
            >
              <span className="text-xs font-black text-yellow-600">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, index) => (
              <div
                key={badge.id}
                className={`relative rounded-2xl p-6 border-4 transition-all cursor-pointer ${
                  badge.unlocked
                    ? 'bg-gradient-to-br ' + badge.color + ' border-yellow-300 shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-100 border-gray-300 opacity-60'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Badge Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-full border-4 ${
                      badge.unlocked
                        ? 'bg-white border-yellow-300 shadow-lg animate-bounce'
                        : 'bg-gray-200 border-gray-400'
                    }`}
                    style={{ animationDuration: '2s' }}
                  >
                    <span className="text-5xl">{badge.icon}</span>
                  </div>
                </div>

                {/* Badge Info */}
                <div className="text-center">
                  <h3
                    className={`text-xl font-black mb-2 ${
                      badge.unlocked ? 'text-white' : 'text-gray-600'
                    }`}
                  >
                    {badge.name}
                  </h3>
                  <p
                    className={`text-sm font-semibold ${
                      badge.unlocked ? 'text-white/90' : 'text-gray-500'
                    }`}
                  >
                    {badge.description}
                  </p>
                </div>

                {/* Lock Icon */}
                {!badge.unlocked && (
                  <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full">
                    <i className="ri-lock-fill text-lg text-white"></i>
                  </div>
                )}

                {/* Sparkles for unlocked badges */}
                {badge.unlocked && (
                  <>
                    <div className="absolute -top-2 -left-2 text-2xl animate-ping" style={{ animationDuration: '2s' }}>
                      ✨
                    </div>
                    <div className="absolute -top-2 -right-2 text-2xl animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}>
                      ✨
                    </div>
                    <div className="absolute -bottom-2 -left-2 text-2xl animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }}>
                      ✨
                    </div>
                    <div className="absolute -bottom-2 -right-2 text-2xl animate-ping" style={{ animationDuration: '2s', animationDelay: '1.5s' }}>
                      ✨
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Motivational Message */}
          <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-3 border-purple-300">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg">
                <span className="text-4xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-purple-800 mb-1">
                  {unlockedCount === 0 && 'Hadi Başlayalım!'}
                  {unlockedCount > 0 && unlockedCount < 4 && 'Harika Gidiyorsun!'}
                  {unlockedCount >= 4 && unlockedCount < 8 && 'Süpersin!'}
                  {unlockedCount >= 8 && unlockedCount < totalCount && 'Neredeyse Tamamladın!'}
                  {unlockedCount === totalCount && 'Tüm Rozetleri Topladın!'}
                </h3>
                <p className="text-sm font-semibold text-purple-700">
                  {unlockedCount === 0 && 'İlk rozetini kazanmak için bir ders tamamla!'}
                  {unlockedCount > 0 && unlockedCount < 4 && 'Daha fazla ders tamamlayarak yeni rozetler kazan!'}
                  {unlockedCount >= 4 && unlockedCount < 8 && 'Devam et, daha fazla rozet seni bekliyor!'}
                  {unlockedCount >= 8 && unlockedCount < totalCount && 'Birkaç rozet daha kaldı, sen yaparsın!'}
                  {unlockedCount === totalCount && 'Tebrikler! Matematik şampiyonusun! 🎉'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-b-3xl border-t-4 border-gray-300">
          <button
            onClick={onClose}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-black text-lg hover:shadow-lg transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-arrow-left-circle-fill text-2xl mr-2"></i>
            Geri Dön
          </button>
        </div>
      </div>

      {/* Celebration Animation */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              {['🎉', '⭐', '🌟', '✨', '🎊', '🏆'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
