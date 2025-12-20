import { motion } from 'framer-motion';

interface AnimatedCharacterProps {
  type: 'happy' | 'thinking' | 'excited' | 'sad' | 'celebrating' | 'teaching';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
}

export function AnimatedCharacter({ type, size = 'md', message }: AnimatedCharacterProps) {
  const sizeClasses = {
    sm: 'w-16 h-16 text-3xl',
    md: 'w-24 h-24 text-5xl',
    lg: 'w-32 h-32 text-6xl',
    xl: 'w-40 h-40 text-7xl'
  };

  const characters = {
    happy: { emoji: '😊', bg: 'from-yellow-300 to-orange-400' },
    thinking: { emoji: '🤔', bg: 'from-blue-300 to-indigo-400' },
    excited: { emoji: '🤩', bg: 'from-pink-300 to-red-400' },
    sad: { emoji: '😢', bg: 'from-gray-300 to-blue-400' },
    celebrating: { emoji: '🥳', bg: 'from-purple-300 to-pink-400' },
    teaching: { emoji: '🧑‍🏫', bg: 'from-green-300 to-teal-400' }
  };

  const animations = {
    happy: {
      y: [0, -10, 0],
      transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
    },
    thinking: {
      rotate: [-5, 5, -5],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    },
    excited: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5, repeat: Infinity }
    },
    sad: {
      y: [0, 5, 0],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    },
    celebrating: {
      y: [0, -20, 0],
      rotate: [0, 15, -15, 0],
      transition: { duration: 0.8, repeat: Infinity }
    },
    teaching: {
      x: [0, 5, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const char = characters[type];
  const animation = animations[type];

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className={`${sizeClasses[size]} flex items-center justify-center bg-gradient-to-br ${char.bg} rounded-full shadow-xl border-4 border-white`}
        animate={animation}
      >
        <span>{char.emoji}</span>
      </motion.div>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 bg-white rounded-2xl px-6 py-3 shadow-lg relative"
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
          <p className="text-lg font-bold text-gray-800 text-center">{message}</p>
        </motion.div>
      )}
    </div>
  );
}

// Matematik sembolleri animasyonlu
export function AnimatedMathSymbol({ symbol, color = 'purple' }: { symbol: string; color?: string }) {
  const colorClasses: Record<string, string> = {
    purple: 'from-purple-400 to-pink-500',
    blue: 'from-blue-400 to-cyan-500',
    green: 'from-green-400 to-emerald-500',
    orange: 'from-orange-400 to-red-500',
    yellow: 'from-yellow-400 to-orange-500'
  };

  return (
    <motion.div
      className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${colorClasses[color]} rounded-2xl shadow-lg`}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <span className="text-4xl text-white font-black">{symbol}</span>
    </motion.div>
  );
}

// Yüzen objeler (arka plan dekorasyonu)
export function FloatingObjects({ objects }: { objects: string[] }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {objects.map((obj, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
          style={{
            left: `${(i * 15) % 100}%`,
            top: `${(i * 20) % 100}%`
          }}
        >
          {obj}
        </motion.div>
      ))}
    </div>
  );
}

// Puan animasyonu
export function ScorePopup({ score, x, y }: { score: number; x: number; y: number }) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      initial={{ x, y, opacity: 1, scale: 0.5 }}
      animate={{ y: y - 100, opacity: 0, scale: 1.5 }}
      transition={{ duration: 1 }}
    >
      <span className="text-3xl font-black text-yellow-500 drop-shadow-lg">
        +{score}
      </span>
    </motion.div>
  );
}

// Kalp/Can animasyonu
export function AnimatedHearts({ count, max = 3 }: { count: number; max?: number }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: max }).map((_, i) => (
        <motion.div
          key={i}
          animate={i < count ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        >
          <span className={`text-3xl ${i < count ? 'opacity-100' : 'opacity-30'}`}>
            {i < count ? '❤️' : '🖤'}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// Yıldız derecelendirme
export function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
        >
          <span className={`text-3xl ${i < rating ? 'drop-shadow-lg' : 'opacity-30'}`}>
            {i < rating ? '⭐' : '☆'}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// İlerleme çubuğu animasyonlu
export function AnimatedProgressBar({
  progress,
  color = 'purple',
  showPercentage = true
}: {
  progress: number;
  color?: string;
  showPercentage?: boolean;
}) {
  const colorClasses: Record<string, string> = {
    purple: 'from-purple-500 to-pink-500',
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    orange: 'from-orange-500 to-red-500',
    rainbow: 'from-red-500 via-yellow-500 to-green-500'
  };

  return (
    <div className="relative">
      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className={`h-full bg-gradient-to-r ${colorClasses[color]} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      {showPercentage && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-sm font-black text-white drop-shadow-md">
            {Math.round(progress)}%
          </span>
        </motion.div>
      )}
    </div>
  );
}
