import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Heart, Sparkles, Volume2, Check, X, HelpCircle, Trophy } from 'lucide-react';

// Yavaş, akıcı animasyon ayarları
const slowAnimation = {
  duration: 1.2,
  ease: "easeInOut"
};

const verySlowAnimation = {
  duration: 1.8,
  ease: "easeInOut"
};

// Renk ve emoji eşleştirmeleri
const numberColors: Record<number, { bg: string; emoji: string; color: string }> = {
  1: { bg: 'bg-red-500', emoji: '🔴', color: '#ef4444' },
  2: { bg: 'bg-blue-500', emoji: '🔵', color: '#3b82f6' },
  3: { bg: 'bg-green-500', emoji: '🟢', color: '#22c55e' },
  4: { bg: 'bg-yellow-500', emoji: '🟡', color: '#eab308' },
  5: { bg: 'bg-purple-500', emoji: '🟣', color: '#a855f7' },
  6: { bg: 'bg-orange-500', emoji: '🟠', color: '#f97316' },
  7: { bg: 'bg-pink-500', emoji: '🌸', color: '#ec4899' },
  8: { bg: 'bg-cyan-500', emoji: '💠', color: '#06b6d4' },
  9: { bg: 'bg-indigo-500', emoji: '🔷', color: '#6366f1' },
  10: { bg: 'bg-emerald-500', emoji: '💚', color: '#10b981' },
};

// 1. BigColorfulNumber - Büyük, renkli, animasyonlu sayı gösterimi
export const BigColorfulNumber: React.FC<{
  number: number;
  onClick?: () => void;
  withSound?: boolean;
}> = ({ number, onClick, withSound = true }) => {
  const [isPressed, setIsPressed] = useState(false);
  const colorInfo = numberColors[number] || numberColors[1];

  const handleClick = () => {
    setIsPressed(true);
    if (withSound) {
      // Ses efekti placeholder - gerçek projeye ses dosyası eklenebilir
      console.log(`Ses: ${number}`);
    }
    onClick?.();
    setTimeout(() => setIsPressed(false), 1000);
  };

  return (
    <motion.button
      className={`${colorInfo.bg} text-white rounded-3xl p-12 shadow-2xl cursor-pointer border-8 border-white`}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={isPressed ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
      transition={slowAnimation}
      style={{ minWidth: '180px', minHeight: '180px' }}
      aria-label={`Sayı ${number}`}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="text-8xl"
          animate={isPressed ? { scale: [1, 1.5, 1] } : {}}
          transition={{ duration: 0.8 }}
        >
          {colorInfo.emoji}
        </motion.div>
        <motion.div
          className="text-9xl font-black"
          animate={isPressed ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {number}
        </motion.div>
      </div>
    </motion.button>
  );
};

// 2. CountingHands - Parmakla sayma görseli
export const CountingHands: React.FC<{
  count: number;
  max?: number;
}> = ({ count, max = 10 }) => {
  const validCount = Math.min(Math.max(0, count), max);

  const getHandEmojis = (num: number): string[] => {
    const hands: string[] = [];
    const fullHands = Math.floor(num / 5);
    const remaining = num % 5;

    for (let i = 0; i < fullHands; i++) {
      hands.push('🖐️');
    }

    if (remaining > 0) {
      const fingerEmojis = ['', '☝️', '✌️', '🤟', '🤘', '🖐️'];
      hands.push(fingerEmojis[remaining]);
    }

    return hands;
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl">
      <motion.div
        className="text-6xl font-black text-purple-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={slowAnimation}
      >
        {validCount}
      </motion.div>
      <div className="flex flex-wrap gap-4 justify-center">
        <AnimatePresence>
          {getHandEmojis(validCount).map((emoji, index) => (
            <motion.div
              key={index}
              className="text-8xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ ...slowAnimation, delay: index * 0.3 }}
            >
              {emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// 3. SimpleShapeDisplay - Çok büyük, renkli şekiller
export const SimpleShapeDisplay: React.FC<{
  shape: 'circle' | 'square' | 'triangle' | 'rectangle';
  color?: string;
  onClick?: () => void;
}> = ({ shape, color = '#3b82f6', onClick }) => {
  const [isGlowing, setIsGlowing] = useState(false);

  const shapeNames = {
    circle: 'Daire',
    square: 'Kare',
    triangle: 'Üçgen',
    rectangle: 'Dikdörtgen'
  };

  const handleClick = () => {
    setIsGlowing(true);
    console.log(`Ses: ${shapeNames[shape]}`);
    onClick?.();
    setTimeout(() => setIsGlowing(false), 1500);
  };

  const renderShape = () => {
    const baseStyle = { backgroundColor: color };

    switch (shape) {
      case 'circle':
        return (
          <div
            className="w-64 h-64 rounded-full"
            style={baseStyle}
          />
        );
      case 'square':
        return (
          <div
            className="w-64 h-64 rounded-3xl"
            style={baseStyle}
          />
        );
      case 'triangle':
        return (
          <div
            className="w-0 h-0"
            style={{
              borderLeft: '128px solid transparent',
              borderRight: '128px solid transparent',
              borderBottom: `220px solid ${color}`,
            }}
          />
        );
      case 'rectangle':
        return (
          <div
            className="w-80 h-48 rounded-3xl"
            style={baseStyle}
          />
        );
    }
  };

  return (
    <motion.button
      className="flex flex-col items-center gap-8 p-12 bg-white rounded-3xl shadow-2xl cursor-pointer"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      animate={isGlowing ? {
        boxShadow: [
          '0 0 0px rgba(59, 130, 246, 0)',
          '0 0 40px rgba(59, 130, 246, 0.8)',
          '0 0 0px rgba(59, 130, 246, 0)'
        ]
      } : {}}
      transition={verySlowAnimation}
      aria-label={shapeNames[shape]}
    >
      <motion.div
        animate={isGlowing ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] } : {}}
        transition={{ duration: 1.5 }}
      >
        {renderShape()}
      </motion.div>
      <motion.div
        className="text-5xl font-black text-gray-800"
        animate={isGlowing ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 1.5 }}
      >
        {shapeNames[shape]}
      </motion.div>
    </motion.button>
  );
};

// 4. ColorMatcher - Renk eşleştirme oyunu
export const ColorMatcher: React.FC<{
  leftColor: string;
  rightColor: string;
  onMatch?: (isCorrect: boolean) => void;
}> = ({ leftColor, rightColor, onMatch }) => {
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleCheck = () => {
    const correct = leftColor === rightColor;
    setIsCorrect(correct);
    setShowResult(true);
    onMatch?.(correct);

    setTimeout(() => setShowResult(false), 3000);
  };

  const colorEmojis: Record<string, string> = {
    red: '🍎',
    blue: '💙',
    green: '🌿',
    yellow: '⭐',
    purple: '🍇',
    orange: '🍊',
    pink: '🌸',
  };

  return (
    <div className="flex flex-col items-center gap-8 p-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl">
      <div className="flex items-center gap-12">
        {/* Sol Renk */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={slowAnimation}
        >
          <div
            className="w-48 h-48 rounded-3xl shadow-xl border-8 border-white"
            style={{ backgroundColor: leftColor }}
          />
          <div className="text-7xl">{colorEmojis[leftColor] || '🎨'}</div>
        </motion.div>

        {/* Soru İşareti */}
        <motion.div
          className="text-9xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ❓
        </motion.div>

        {/* Sağ Renk */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={slowAnimation}
        >
          <div
            className="w-48 h-48 rounded-3xl shadow-xl border-8 border-white"
            style={{ backgroundColor: rightColor }}
          />
          <div className="text-7xl">{colorEmojis[rightColor] || '🎨'}</div>
        </motion.div>
      </div>

      {/* Kontrol Butonu */}
      <motion.button
        className="px-16 py-8 bg-blue-500 text-white rounded-3xl text-4xl font-black shadow-xl"
        onClick={handleCheck}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={slowAnimation}
      >
        Kontrol Et
      </motion.button>

      {/* Sonuç */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={slowAnimation}
            className={`text-6xl font-black ${isCorrect ? 'text-green-600' : 'text-orange-500'}`}
          >
            {isCorrect ? (
              <div className="flex items-center gap-4">
                <span>🎊</span>
                <span>HARIKA!</span>
                <span>🎊</span>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <span>🤗</span>
                <span>Tekrar Dene!</span>
                <span>🤗</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 5. BigAdditionVisual - Çok basit toplama görseli
export const BigAdditionVisual: React.FC<{
  num1: number;
  num2: number;
  emoji?: string;
  showResult?: boolean;
}> = ({ num1, num2, emoji = '🍎', showResult = false }) => {
  const [isMerging, setIsMerging] = useState(false);

  useEffect(() => {
    if (showResult) {
      setIsMerging(true);
    }
  }, [showResult]);

  const renderEmojis = (count: number, color: string) => (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="text-7xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ...slowAnimation, delay: i * 0.2 }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-8 p-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl">
      <div className="flex items-center gap-8">
        {/* İlk Grup */}
        <motion.div
          className="p-8 bg-white rounded-3xl shadow-xl"
          animate={isMerging ? { x: 100, opacity: 0.5 } : {}}
          transition={verySlowAnimation}
        >
          {renderEmojis(num1, 'red')}
        </motion.div>

        {/* Artı İşareti */}
        <motion.div
          className="text-9xl font-black text-blue-600"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          +
        </motion.div>

        {/* İkinci Grup */}
        <motion.div
          className="p-8 bg-white rounded-3xl shadow-xl"
          animate={isMerging ? { x: -100, opacity: 0.5 } : {}}
          transition={verySlowAnimation}
        >
          {renderEmojis(num2, 'blue')}
        </motion.div>
      </div>

      {/* Eşittir */}
      <motion.div
        className="text-8xl font-black text-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        =
      </motion.div>

      {/* Sonuç */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            className="p-12 bg-white rounded-3xl shadow-2xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={verySlowAnimation}
          >
            <div className="flex flex-col items-center gap-6">
              {renderEmojis(num1 + num2, 'purple')}
              <motion.div
                className="text-9xl font-black text-green-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                {num1 + num2}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 6. BigSubtractionVisual - Çok basit çıkarma görseli
export const BigSubtractionVisual: React.FC<{
  total: number;
  subtract: number;
  emoji?: string;
  showResult?: boolean;
}> = ({ total, subtract, emoji = '🍎', showResult = false }) => {
  const [removedIndices, setRemovedIndices] = useState<number[]>([]);

  useEffect(() => {
    if (showResult && removedIndices.length === 0) {
      const indices = Array.from({ length: subtract }, (_, i) => i);
      indices.forEach((index, i) => {
        setTimeout(() => {
          setRemovedIndices(prev => [...prev, index]);
        }, i * 800);
      });
    }
  }, [showResult, subtract, removedIndices.length]);

  return (
    <div className="flex flex-col items-center gap-8 p-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl">
      {/* Başlangıç Grubu */}
      <div className="flex flex-wrap gap-4 justify-center p-8 bg-white rounded-3xl shadow-xl max-w-2xl">
        <AnimatePresence>
          {Array.from({ length: total }).map((_, i) => (
            <motion.div
              key={i}
              className="text-7xl"
              initial={{ scale: 0 }}
              animate={
                removedIndices.includes(i)
                  ? { scale: 0, y: -200, opacity: 0, rotate: 360 }
                  : { scale: 1, y: 0, opacity: 1 }
              }
              exit={{ scale: 0, opacity: 0 }}
              transition={verySlowAnimation}
            >
              {emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Eksi İşareti */}
      <motion.div
        className="text-9xl font-black text-red-600"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        −
      </motion.div>

      {/* Çıkan Grup */}
      <div className="flex flex-wrap gap-4 justify-center p-6 bg-red-100 rounded-3xl border-4 border-red-300">
        {Array.from({ length: subtract }).map((_, i) => (
          <motion.div
            key={i}
            className="text-6xl opacity-50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ...slowAnimation, delay: i * 0.2 }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Sonuç */}
      <AnimatePresence>
        {showResult && removedIndices.length === subtract && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={verySlowAnimation}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-8xl font-black text-purple-600">=</div>
            <motion.div
              className="text-9xl font-black text-green-600 p-8 bg-white rounded-3xl shadow-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {total - subtract}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 7. CelebrationAnimation - Başarı kutlaması
export const CelebrationAnimation: React.FC<{
  show: boolean;
  message?: string;
}> = ({ show, message = 'Aferin!' }) => {
  const messages = ['Aferin!', 'Harika!', 'Süpersin!', 'Muhteşem!', 'Bravo!'];
  const [currentMessage] = useState(message || messages[Math.floor(Math.random() * messages.length)]);

  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    emoji: ['🎊', '⭐', '🌟', '✨', '🎉', '🎈', '🎆'][Math.floor(Math.random() * 7)],
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Konfeti */}
          {confettiPieces.map((piece) => (
            <motion.div
              key={piece.id}
              className="absolute text-6xl"
              initial={{ y: -100, x: `${piece.x}vw`, opacity: 1, scale: 0 }}
              animate={{
                y: '100vh',
                rotate: 360,
                scale: [0, 1.5, 1],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: 'easeIn',
              }}
            >
              {piece.emoji}
            </motion.div>
          ))}

          {/* Mesaj */}
          <motion.div
            className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: [0, 1.5, 1.2],
              rotate: [- 180, 10, -10, 0],
            }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            {currentMessage}
          </motion.div>

          {/* Yıldızlar */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute text-8xl"
              style={{
                top: '50%',
                left: '50%',
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 2, 0],
                x: Math.cos((i * Math.PI * 2) / 8) * 300,
                y: Math.sin((i * Math.PI * 2) / 8) * 300,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: 0.5,
                ease: 'easeOut',
              }}
            >
              ⭐
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 8. GentleEncouragement - Yanlış cevap için nazik teşvik
export const GentleEncouragement: React.FC<{
  show: boolean;
  onTryAgain?: () => void;
  onHelp?: () => void;
}> = ({ show, onTryAgain, onHelp }) => {
  const encouragements = [
    { text: 'Tekrar deneyelim mi?', emoji: '🤗' },
    { text: 'Bir daha bakalım!', emoji: '😊' },
    { text: 'Neredeyse oldu!', emoji: '💪' },
    { text: 'Sen yaparsın!', emoji: '🌟' },
  ];

  const [current] = useState(encouragements[Math.floor(Math.random() * encouragements.length)]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex flex-col items-center gap-8 p-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl shadow-2xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={verySlowAnimation}
        >
          {/* Emoji */}
          <motion.div
            className="text-9xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {current.emoji}
          </motion.div>

          {/* Mesaj */}
          <motion.div
            className="text-6xl font-black text-orange-600 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {current.text}
          </motion.div>

          {/* Butonlar */}
          <div className="flex gap-6">
            <motion.button
              className="px-12 py-6 bg-green-500 text-white rounded-3xl text-4xl font-black shadow-xl flex items-center gap-4"
              onClick={onTryAgain}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={slowAnimation}
            >
              <span>🔄</span>
              <span>Tekrar Dene</span>
            </motion.button>

            {onHelp && (
              <motion.button
                className="px-12 py-6 bg-blue-500 text-white rounded-3xl text-4xl font-black shadow-xl flex items-center gap-4"
                onClick={onHelp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={slowAnimation}
              >
                <HelpCircle size={48} />
                <span>Yardım</span>
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 9. ProgressStars - Yıldız bazlı ilerleme
export const ProgressStars: React.FC<{
  current: number;
  total?: number;
  showReward?: boolean;
}> = ({ current, total = 5, showReward = false }) => {
  const validCurrent = Math.min(Math.max(0, current), total);

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl">
      {/* Yıldızlar */}
      <div className="flex gap-6">
        {Array.from({ length: total }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: i < validCurrent ? 1 : 0.5,
              rotate: 0,
              filter: i < validCurrent ? 'grayscale(0%)' : 'grayscale(100%)',
            }}
            transition={{
              ...slowAnimation,
              delay: i * 0.2,
            }}
            className="relative"
          >
            <Star
              size={80}
              fill={i < validCurrent ? '#fbbf24' : '#d1d5db'}
              color={i < validCurrent ? '#f59e0b' : '#9ca3af'}
              strokeWidth={3}
            />
            {i < validCurrent && (
              <motion.div
                className="absolute inset-0 text-6xl flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2 + 0.3 }}
              >
                ✨
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Sayaç */}
      <motion.div
        className="text-6xl font-black text-orange-600"
        key={validCurrent}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={slowAnimation}
      >
        {validCurrent} / {total}
      </motion.div>

      {/* Ödül */}
      <AnimatePresence>
        {showReward && validCurrent === total && (
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={verySlowAnimation}
          >
            <motion.div
              className="text-9xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🏆
            </motion.div>
            <div className="text-5xl font-black text-yellow-600">
              ÖDÜL KAZANDIN!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 10. AudioButton - Sesli okuma butonu
export const AudioButton: React.FC<{
  text: string;
  size?: 'small' | 'medium' | 'large';
}> = ({ text, size = 'medium' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const sizes = {
    small: { button: 'p-4', icon: 40 },
    medium: { button: 'p-8', icon: 60 },
    large: { button: 'p-12', icon: 80 },
  };

  const handleClick = () => {
    setIsPlaying(true);
    console.log(`Ses çalınıyor: ${text}`);
    // Web Speech API kullanılabilir
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'tr-TR';
      utterance.rate = 0.8; // Yavaş konuşma
      utterance.pitch = 1.2; // Daha yüksek ses tonu
      speechSynthesis.speak(utterance);
      utterance.onend = () => setIsPlaying(false);
    } else {
      setTimeout(() => setIsPlaying(false), 2000);
    }
  };

  return (
    <motion.button
      className={`${sizes[size].button} bg-blue-500 text-white rounded-full shadow-2xl`}
      onClick={handleClick}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      animate={isPlaying ? {
        scale: [1, 1.2, 1],
        backgroundColor: ['#3b82f6', '#8b5cf6', '#3b82f6'],
      } : {}}
      transition={slowAnimation}
      aria-label={`Dinle: ${text}`}
    >
      <motion.div
        animate={isPlaying ? { rotate: 360 } : {}}
        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
      >
        <Volume2 size={sizes[size].icon} />
      </motion.div>
    </motion.button>
  );
};

// 11. SimplePatternGame - Basit örüntü oyunu
export const SimplePatternGame: React.FC<{
  pattern: string[];
  options: string[];
  correctAnswer: string;
  onAnswer?: (isCorrect: boolean) => void;
}> = ({ pattern, options, correctAnswer, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedAnswer(option);
    const isCorrect = option === correctAnswer;
    setShowResult(true);
    onAnswer?.(isCorrect);
  };

  return (
    <div className="flex flex-col items-center gap-12 p-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl">
      {/* Örüntü */}
      <div className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-xl">
        {pattern.map((item, i) => (
          <motion.div
            key={i}
            className="text-8xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ ...slowAnimation, delay: i * 0.3 }}
          >
            {item}
          </motion.div>
        ))}
        <motion.div
          className="text-9xl text-purple-600 font-black"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ?
        </motion.div>
      </div>

      {/* Seçenekler */}
      {!showResult && (
        <div className="flex gap-8">
          {options.map((option, i) => (
            <motion.button
              key={i}
              className="p-12 bg-white rounded-3xl shadow-xl hover:shadow-2xl"
              onClick={() => handleSelect(option)}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              transition={slowAnimation}
              initial={{ scale: 0, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="text-9xl">{option}</div>
            </motion.button>
          ))}
        </div>
      )}

      {/* Sonuç */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={verySlowAnimation}
            className="flex flex-col items-center gap-6"
          >
            {selectedAnswer === correctAnswer ? (
              <>
                <div className="text-9xl">🎊</div>
                <div className="text-6xl font-black text-green-600">DOĞRU!</div>
                <div className="flex items-center gap-4">
                  {[...pattern, correctAnswer].map((item, i) => (
                    <div key={i} className="text-7xl">{item}</div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="text-9xl">🤗</div>
                <div className="text-6xl font-black text-orange-600">Tekrar Dene!</div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 12. TouchAndCount - Dokun ve say
export const TouchAndCount: React.FC<{
  max?: number;
  emoji?: string;
  onComplete?: (count: number) => void;
}> = ({ max = 10, emoji = '⭐', onComplete }) => {
  const [count, setCount] = useState(0);
  const [touches, setTouches] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleTouch = (e: React.MouseEvent<HTMLDivElement>) => {
    if (count >= max) {
      onComplete?.(count);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newCount = count + 1;
    setCount(newCount);
    setTouches([...touches, { id: Date.now(), x, y }]);

    if (newCount === max) {
      setTimeout(() => onComplete?.(newCount), 1000);
    }
  };

  const reset = () => {
    setCount(0);
    setTouches([]);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl">
      {/* Sayaç */}
      <motion.div
        className="text-9xl font-black text-purple-600 p-8 bg-white rounded-3xl shadow-xl"
        key={count}
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={slowAnimation}
      >
        {count}
      </motion.div>

      {/* Dokunma Alanı */}
      <motion.div
        className="relative w-full h-96 bg-white rounded-3xl shadow-xl cursor-pointer overflow-hidden border-8 border-purple-300"
        onClick={handleTouch}
        whileHover={{ scale: 1.02 }}
        transition={slowAnimation}
      >
        {/* Yardım Metni */}
        {count === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-400">
            Dokun ve Say! 👆
          </div>
        )}

        {/* Dokunma Noktaları */}
        <AnimatePresence>
          {touches.map((touch) => (
            <motion.div
              key={touch.id}
              className="absolute text-7xl"
              style={{
                left: `${touch.x}%`,
                top: `${touch.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={slowAnimation}
            >
              {emoji}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Tamamlanma Efekti */}
        {count === max && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-300 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={slowAnimation}
          >
            <div className="text-8xl font-black text-white">
              🎉 TAMAMLADIN! 🎉
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Sıfırla Butonu */}
      <motion.button
        className="px-12 py-6 bg-red-500 text-white rounded-3xl text-4xl font-black shadow-xl"
        onClick={reset}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={slowAnimation}
      >
        🔄 Yeniden Başla
      </motion.button>
    </div>
  );
};

// Default export - Tüm bileşenler
export default {
  BigColorfulNumber,
  CountingHands,
  SimpleShapeDisplay,
  ColorMatcher,
  BigAdditionVisual,
  BigSubtractionVisual,
  CelebrationAnimation,
  GentleEncouragement,
  ProgressStars,
  AudioButton,
  SimplePatternGame,
  TouchAndCount,
};
