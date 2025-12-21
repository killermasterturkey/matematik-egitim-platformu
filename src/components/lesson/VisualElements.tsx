// Zengin Görsel Bileşenler - Çocuklar için eğlenceli matematik görselleri
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Star, Heart, Sparkles, Zap, Trophy, Crown, Medal,
  Calculator, Brain, Lightbulb, Target, Rocket, Gift,
  CheckCircle2, XCircle, HelpCircle, Eye, Play, Pause
} from 'lucide-react';

// ==================== ANİMASYONLU SAYAÇ ====================
export const AnimatedCounter = ({
  count,
  emoji = '🔵',
  size = 'md',
  animate = true
}: {
  count: number;
  emoji?: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}) => {
  const sizeClasses = {
    sm: 'text-2xl gap-1',
    md: 'text-3xl gap-2',
    lg: 'text-4xl gap-3'
  };

  return (
    <div className={`flex flex-wrap justify-center items-center ${sizeClasses[size]}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          initial={animate ? { scale: 0, rotate: -180 } : {}}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: i * 0.1,
            type: 'spring',
            stiffness: 200
          }}
          whileHover={{ scale: 1.3, rotate: 10 }}
          className="cursor-pointer inline-block"
        >
          {emoji}
        </motion.span>
      ))}
    </div>
  );
};

// ==================== SAYI DOĞRUSU ====================
export const NumberLine = ({
  start = 0,
  end = 10,
  highlight,
  showLabels = true,
  color = 'blue'
}: {
  start?: number;
  end?: number;
  highlight?: number | number[];
  showLabels?: boolean;
  color?: string;
}) => {
  const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const highlights = Array.isArray(highlight) ? highlight : highlight !== undefined ? [highlight] : [];

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };

  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex items-center justify-center min-w-max">
        {numbers.map((num, i) => (
          <div key={num} className="flex items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`relative flex flex-col items-center ${
                highlights.includes(num) ? 'z-10' : ''
              }`}
            >
              {/* Sayı dairesi */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                  ${highlights.includes(num)
                    ? `${colorClasses[color]} text-white shadow-lg ring-4 ring-${color}-200`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {num}
              </motion.div>

              {/* Etiket */}
              {showLabels && highlights.includes(num) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`absolute -top-8 px-2 py-1 ${colorClasses[color]} text-white text-xs rounded-full font-bold`}
                >
                  ⭐
                </motion.div>
              )}
            </motion.div>

            {/* Ok işareti */}
            {i < numbers.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: i * 0.05 + 0.02 }}
                className="w-6 h-0.5 bg-gray-300 mx-1"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== KARŞILAŞTIRMA GÖRSELİ ====================
export const ComparisonVisual = ({
  leftCount,
  rightCount,
  leftEmoji = '🔴',
  rightEmoji = '🔵',
  showResult = true
}: {
  leftCount: number;
  rightCount: number;
  leftEmoji?: string;
  rightEmoji?: string;
  showResult?: boolean;
}) => {
  const getSymbol = () => {
    if (leftCount > rightCount) return '>';
    if (leftCount < rightCount) return '<';
    return '=';
  };

  const getColor = () => {
    if (leftCount > rightCount) return 'text-green-500';
    if (leftCount < rightCount) return 'text-red-500';
    return 'text-blue-500';
  };

  return (
    <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
      {/* Sol grup */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className="flex flex-wrap justify-center gap-1 max-w-32">
          {Array.from({ length: leftCount }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl"
            >
              {leftEmoji}
            </motion.span>
          ))}
        </div>
        <span className="text-2xl font-black text-gray-700">{leftCount}</span>
      </motion.div>

      {/* Karşılaştırma sembolü */}
      {showResult && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className={`text-5xl font-black ${getColor()}`}
        >
          {getSymbol()}
        </motion.div>
      )}

      {/* Sağ grup */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className="flex flex-wrap justify-center gap-1 max-w-32">
          {Array.from({ length: rightCount }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="text-2xl"
            >
              {rightEmoji}
            </motion.span>
          ))}
        </div>
        <span className="text-2xl font-black text-gray-700">{rightCount}</span>
      </motion.div>
    </div>
  );
};

// ==================== TOPLAMA/ÇIKARMA GÖRSELİ ====================
export const MathOperationVisual = ({
  num1,
  num2,
  operation,
  emoji1 = '🍎',
  emoji2 = '🍎',
  showSteps = false
}: {
  num1: number;
  num2: number;
  operation: '+' | '-';
  emoji1?: string;
  emoji2?: string;
  showSteps?: boolean;
}) => {
  const [step, setStep] = useState(0);
  const result = operation === '+' ? num1 + num2 : num1 - num2;

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
      {/* İlk sayı */}
      <motion.div
        className="flex items-center gap-2 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: num1 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="text-2xl"
            >
              {emoji1}
            </motion.span>
          ))}
        </div>
        <span className="text-xl font-bold text-gray-600">= {num1}</span>
      </motion.div>

      {/* İşlem ve ikinci sayı */}
      <motion.div
        className="flex items-center gap-2 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className={`text-3xl font-black ${operation === '+' ? 'text-green-500' : 'text-red-500'}`}>
          {operation}
        </span>
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: num2 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className={`text-2xl ${operation === '-' ? 'opacity-50 line-through' : ''}`}
            >
              {emoji2}
            </motion.span>
          ))}
        </div>
        <span className="text-xl font-bold text-gray-600">= {num2}</span>
      </motion.div>

      {/* Sonuç çizgisi */}
      <motion.div
        className="border-t-4 border-dashed border-purple-300 my-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6 }}
      />

      {/* Sonuç */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: 'spring' }}
      >
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: Math.max(0, result) }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8 + i * 0.03 }}
              className="text-2xl"
            >
              {emoji1}
            </motion.span>
          ))}
        </div>
        <span className="text-2xl font-black text-purple-600">
          = {result} 🎉
        </span>
      </motion.div>
    </div>
  );
};

// ==================== GRUPLAMA GÖRSELİ ====================
export const GroupingVisual = ({
  total,
  groupSize,
  emoji = '⭐'
}: {
  total: number;
  groupSize: number;
  emoji?: string;
}) => {
  const groups = Math.floor(total / groupSize);
  const remainder = total % groupSize;

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Tam gruplar */}
        {Array.from({ length: groups }).map((_, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: groupIndex * 0.2 }}
            className="bg-white rounded-xl p-3 shadow-md border-2 border-dashed border-yellow-300"
          >
            <div className="flex gap-1">
              {Array.from({ length: groupSize }).map((_, i) => (
                <span key={i} className="text-2xl">{emoji}</span>
              ))}
            </div>
            <div className="text-center text-sm font-bold text-yellow-600 mt-1">
              {groupSize}
            </div>
          </motion.div>
        ))}

        {/* Kalan */}
        {remainder > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: groups * 0.2 }}
            className="bg-white/50 rounded-xl p-3 border-2 border-dashed border-gray-300"
          >
            <div className="flex gap-1">
              {Array.from({ length: remainder }).map((_, i) => (
                <span key={i} className="text-2xl opacity-70">{emoji}</span>
              ))}
            </div>
            <div className="text-center text-sm font-bold text-gray-500 mt-1">
              +{remainder}
            </div>
          </motion.div>
        )}
      </div>

      {/* Özet */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-4 p-3 bg-yellow-100 rounded-xl"
      >
        <span className="font-bold text-yellow-700">
          {total} = {groups} × {groupSize} {remainder > 0 ? `+ ${remainder}` : ''}
          <span className="ml-2">({groups} grup)</span>
        </span>
      </motion.div>
    </div>
  );
};

// ==================== RİTMİK SAYMA ANİMASYONU ====================
export const RhythmicCountingVisual = ({
  start = 0,
  end = 20,
  step = 2,
  speed = 500
}: {
  start?: number;
  end?: number;
  step?: number;
  speed?: number;
}) => {
  const [currentNumber, setCurrentNumber] = useState(start);
  const [isPlaying, setIsPlaying] = useState(false);

  const numbers = [];
  for (let i = start; i <= end; i += step) {
    numbers.push(i);
  }

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    setCurrentNumber(start);

    numbers.forEach((num, index) => {
      setTimeout(() => {
        setCurrentNumber(num);
        if (index === numbers.length - 1) {
          setIsPlaying(false);
        }
      }, index * speed);
    });
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border-2 border-indigo-200">
      {/* Kontrol butonu */}
      <div className="flex justify-center mb-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePlay}
          className={`px-6 py-3 rounded-full font-bold text-white flex items-center gap-2 ${
            isPlaying ? 'bg-red-500' : 'bg-green-500'
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          {isPlaying ? 'Durdur' : 'Başlat'}
        </motion.button>
      </div>

      {/* Sayı gösterimi */}
      <div className="flex flex-wrap justify-center gap-2">
        {numbers.map((num) => (
          <motion.div
            key={num}
            animate={{
              scale: currentNumber === num ? 1.3 : 1,
              backgroundColor: currentNumber === num ? '#4F46E5' : '#E0E7FF',
              color: currentNumber === num ? '#FFFFFF' : '#4338CA'
            }}
            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
          >
            {num}
          </motion.div>
        ))}
      </div>

      {/* Alt bilgi */}
      <motion.div
        className="text-center mt-4 text-indigo-600 font-bold"
        animate={{ scale: isPlaying ? [1, 1.1, 1] : 1 }}
        transition={{ repeat: isPlaying ? Infinity : 0, duration: 0.5 }}
      >
        {step === 2 && "İkişer İkişer! 🎵"}
        {step === 5 && "Beşer Beşer! 🖐️"}
        {step === 10 && "Onar Onar! 🔟"}
        {step === 1 && "Birer Birer! ☝️"}
      </motion.div>
    </div>
  );
};

// ==================== ÖRÜNTÜ GÖRSELİ ====================
export const PatternVisual = ({
  pattern,
  repeatCount = 3,
  showNext = true
}: {
  pattern: string[];
  repeatCount?: number;
  showNext?: boolean;
}) => {
  const fullPattern = Array(repeatCount).fill(pattern).flat();

  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
      <div className="flex flex-wrap justify-center gap-2">
        {fullPattern.map((item, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-3xl cursor-pointer"
          >
            {item}
          </motion.span>
        ))}

        {showNext && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="text-3xl border-2 border-dashed border-purple-400 rounded-lg px-2"
          >
            ?
          </motion.span>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-4 text-purple-600 font-bold"
      >
        Örüntü: {pattern.join(' → ')} 🔄
      </motion.div>
    </div>
  );
};

// ==================== BAŞARI ROZETİ ====================
export const AchievementBadge = ({
  score,
  maxScore = 100
}: {
  score: number;
  maxScore?: number;
}) => {
  const percentage = (score / maxScore) * 100;

  const getBadgeInfo = () => {
    if (percentage === 100) return {
      icon: Crown,
      color: 'from-yellow-400 to-amber-500',
      label: 'MÜKEMMEL!',
      emoji: '👑',
      message: 'Sen bir dahisin!'
    };
    if (percentage >= 90) return {
      icon: Trophy,
      color: 'from-purple-400 to-indigo-500',
      label: 'HARİKA!',
      emoji: '🏆',
      message: 'Muhteşem bir performans!'
    };
    if (percentage >= 80) return {
      icon: Medal,
      color: 'from-blue-400 to-cyan-500',
      label: 'ÇOK İYİ!',
      emoji: '🥇',
      message: 'Çok güzel gidiyorsun!'
    };
    if (percentage >= 70) return {
      icon: Star,
      color: 'from-green-400 to-emerald-500',
      label: 'İYİ!',
      emoji: '⭐',
      message: 'Başarılı bir deneme!'
    };
    if (percentage >= 50) return {
      icon: Target,
      color: 'from-orange-400 to-yellow-500',
      label: 'DEVAM ET!',
      emoji: '🎯',
      message: 'Biraz daha çalış!'
    };
    return {
      icon: Heart,
      color: 'from-pink-400 to-red-500',
      label: 'TEKRAR DENE!',
      emoji: '💪',
      message: 'Pes etme, başarabilirsin!'
    };
  };

  const badge = getBadgeInfo();
  const Icon = badge.icon;

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', duration: 0.8 }}
      className={`relative p-6 rounded-3xl bg-gradient-to-br ${badge.color} text-white shadow-2xl`}
    >
      {/* Parlama efekti */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-white"
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="relative text-center">
        {/* Emoji */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-2"
        >
          {badge.emoji}
        </motion.div>

        {/* Skor */}
        <div className="text-4xl font-black mb-2">
          {score}/{maxScore}
        </div>

        {/* Etiket */}
        <div className="text-xl font-bold mb-1">{badge.label}</div>

        {/* Mesaj */}
        <div className="text-sm opacity-90">{badge.message}</div>
      </div>
    </motion.div>
  );
};

// ==================== İNTERAKTİF SORU KARTI ====================
export const InteractiveQuestionCard = ({
  question,
  options,
  correctAnswer,
  explanation,
  visual,
  onAnswer
}: {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  visual?: string;
  onAnswer?: (isCorrect: boolean) => void;
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option: string) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);
    onAnswer?.(option === correctAnswer);
  };

  const isCorrect = selected === correctAnswer;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-2xl p-6 shadow-xl border-4 ${
        showResult
          ? isCorrect
            ? 'border-green-400 bg-green-50'
            : 'border-red-400 bg-red-50'
          : 'border-gray-200'
      }`}
    >
      {/* Soru */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <HelpCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <span className="text-blue-600 text-xs font-bold">SORU</span>
          <p className="text-lg font-bold text-gray-800">{question}</p>
        </div>
      </div>

      {/* Görsel */}
      {visual && (
        <div className="text-center text-3xl mb-4 p-4 bg-gray-50 rounded-xl">
          {visual}
        </div>
      )}

      {/* Seçenekler */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {options.map((option, i) => (
          <motion.button
            key={i}
            whileHover={!showResult ? { scale: 1.02 } : {}}
            whileTap={!showResult ? { scale: 0.98 } : {}}
            onClick={() => handleSelect(option)}
            disabled={showResult}
            className={`p-4 rounded-xl font-bold text-lg transition-all ${
              showResult
                ? option === correctAnswer
                  ? 'bg-green-500 text-white'
                  : selected === option
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-400'
                : selected === option
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {/* Sonuç */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`p-4 rounded-xl ${
              isCorrect ? 'bg-green-100 border-green-300' : 'bg-amber-100 border-amber-300'
            } border-2`}
          >
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span className="font-bold text-green-700">Doğru! 🎉</span>
                </>
              ) : (
                <>
                  <Lightbulb className="w-6 h-6 text-amber-500" />
                  <span className="font-bold text-amber-700">Doğru cevap: {correctAnswer}</span>
                </>
              )}
            </div>
            <p className="text-gray-700">{explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ==================== KESİR GÖRSELLEŞTİRMESİ ====================
export const FractionVisual = ({
  numerator,
  denominator,
  type = 'pizza',
  color = 'orange'
}: {
  numerator: number;
  denominator: number;
  type?: 'pizza' | 'chocolate' | 'circle';
  color?: 'orange' | 'brown' | 'blue' | 'green';
}) => {
  const colorMap = {
    orange: { filled: 'bg-orange-500', empty: 'bg-orange-100', border: 'border-orange-300' },
    brown: { filled: 'bg-amber-700', empty: 'bg-amber-100', border: 'border-amber-300' },
    blue: { filled: 'bg-blue-500', empty: 'bg-blue-100', border: 'border-blue-300' },
    green: { filled: 'bg-green-500', empty: 'bg-green-100', border: 'border-green-300' }
  };

  const colors = colorMap[color];

  const renderPizza = () => {
    const sliceAngle = 360 / denominator;
    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" />
          {Array.from({ length: denominator }).map((_, i) => {
            const angle1 = (i * sliceAngle - 90) * (Math.PI / 180);
            const angle2 = ((i + 1) * sliceAngle - 90) * (Math.PI / 180);
            const x1 = 100 + 90 * Math.cos(angle1);
            const y1 = 100 + 90 * Math.sin(angle1);
            const x2 = 100 + 90 * Math.cos(angle2);
            const y2 = 100 + 90 * Math.sin(angle2);
            return (
              <g key={i}>
                <line x1="100" y1="100" x2={x1} y2={y1} stroke="#D97706" strokeWidth="2" />
                {i < numerator && (
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    d={`M 100 100 L ${x1} ${y1} A 90 90 0 0 1 ${x2} ${y2} Z`}
                    fill="#F97316"
                    fillOpacity="0.8"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  const renderChocolate = () => {
    const rows = Math.ceil(Math.sqrt(denominator));
    const cols = Math.ceil(denominator / rows);
    return (
      <div className="inline-grid gap-1 p-3 bg-amber-900 rounded-lg mx-auto" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: denominator }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`w-10 h-10 rounded border-2 ${i < numerator ? colors.filled : colors.empty} ${colors.border}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-200">
      <div className="flex flex-col items-center gap-4">
        {type === 'pizza' ? renderPizza() : renderChocolate()}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-4xl font-black text-gray-700">
            <span>{numerator}</span>
            <div className="w-10 h-1 bg-gray-700" />
            <span>{denominator}</span>
          </div>
          <p className="text-base text-gray-600 mt-2">{denominator} parçanın {numerator} tanesi</p>
        </div>
      </div>
    </div>
  );
};

// ==================== ANALOG SAAT GÖRSELİ ====================
export const ClockVisual = ({
  hours,
  minutes,
  showDigital = true,
  interactive = false
}: {
  hours: number;
  minutes: number;
  showDigital?: boolean;
  interactive?: boolean;
}) => {
  const [currentHours, setCurrentHours] = useState(hours);
  const [currentMinutes, setCurrentMinutes] = useState(minutes);

  const hourAngle = ((currentHours % 12) * 30) + (currentMinutes * 0.5) - 90;
  const minuteAngle = (currentMinutes * 6) - 90;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="90" fill="white" stroke="#3B82F6" strokeWidth="4" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const textX = 100 + 70 * Math.cos(angle);
              const textY = 100 + 70 * Math.sin(angle);
              return (
                <text key={i} x={textX} y={textY} textAnchor="middle" dominantBaseline="middle" fill="#1E40AF" fontSize="14" fontWeight="bold">
                  {i === 0 ? 12 : i}
                </text>
              );
            })}
            <line x1="100" y1="100" x2={100 + 50 * Math.cos(minuteAngle * Math.PI / 180)} y2={100 + 50 * Math.sin(minuteAngle * Math.PI / 180)} stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="100" x2={100 + 35 * Math.cos(hourAngle * Math.PI / 180)} y2={100 + 35 * Math.sin(hourAngle * Math.PI / 180)} stroke="#1E40AF" strokeWidth="6" strokeLinecap="round" />
            <circle cx="100" cy="100" r="6" fill="#1E40AF" />
          </svg>
        </div>
        {showDigital && (
          <div className="text-3xl font-mono font-black text-blue-600 bg-blue-100 px-4 py-2 rounded-xl">
            {String(currentHours).padStart(2, '0')}:{String(currentMinutes).padStart(2, '0')}
          </div>
        )}
        {interactive && (
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-1">
              <label className="text-sm font-bold text-blue-600">Saat</label>
              <input type="range" min="0" max="23" value={currentHours} onChange={(e) => setCurrentHours(parseInt(e.target.value))} className="w-24" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <label className="text-sm font-bold text-blue-600">Dakika</label>
              <input type="range" min="0" max="59" value={currentMinutes} onChange={(e) => setCurrentMinutes(parseInt(e.target.value))} className="w-24" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ==================== PARA GÖRSELLEŞTİRMESİ ====================
export const MoneyVisual = ({ amount }: { amount: number }) => {
  const bills = [200, 100, 50, 20, 10, 5];
  const coins = [1, 0.5, 0.25];
  const breakdown: { value: number; count: number; type: 'bill' | 'coin' }[] = [];
  let remaining = amount;

  bills.forEach(bill => {
    if (remaining >= bill) {
      const count = Math.floor(remaining / bill);
      breakdown.push({ value: bill, count, type: 'bill' });
      remaining = parseFloat((remaining - (bill * count)).toFixed(2));
    }
  });

  coins.forEach(coin => {
    if (remaining >= coin - 0.001) {
      const count = Math.floor(remaining / coin);
      breakdown.push({ value: coin, count, type: 'coin' });
      remaining = parseFloat((remaining - (coin * count)).toFixed(2));
    }
  });

  const getBillColor = (value: number) => {
    const colors: Record<number, string> = { 200: 'from-purple-400 to-purple-600', 100: 'from-red-400 to-red-600', 50: 'from-orange-400 to-orange-600', 20: 'from-green-400 to-green-600', 10: 'from-blue-400 to-blue-600', 5: 'from-pink-400 to-pink-600' };
    return colors[value] || 'from-gray-400 to-gray-600';
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200">
      <div className="flex flex-col items-center gap-4">
        <div className="text-3xl font-black text-emerald-600 bg-emerald-100 px-6 py-3 rounded-xl">{amount.toFixed(2)} TL</div>
        <div className="flex flex-wrap gap-2 justify-center">
          {breakdown.map((item, idx) => (
            <motion.div key={idx} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: idx * 0.1 }} className="flex flex-col items-center gap-1">
              {item.type === 'bill' ? (
                <div className={`w-16 h-8 bg-gradient-to-r ${getBillColor(item.value)} rounded shadow text-white text-xs font-bold flex items-center justify-center`}>{item.value}₺</div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 shadow text-xs font-bold text-amber-900 flex items-center justify-center">{item.value < 1 ? `${item.value * 100}kr` : '1₺'}</div>
              )}
              <span className="text-xs text-gray-600 font-bold">×{item.count}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== GEOMETRİK ŞEKİL KEŞFİ ====================
export const ShapeExplorer = ({
  shape,
  color = 'blue'
}: {
  shape: 'square' | 'circle' | 'triangle' | 'rectangle' | 'pentagon' | 'hexagon';
  color?: 'blue' | 'red' | 'green' | 'purple' | 'orange';
}) => {
  const [rotation, setRotation] = useState(0);
  const colorMap: Record<string, string> = { blue: '#3B82F6', red: '#EF4444', green: '#10B981', purple: '#A855F7', orange: '#F97316' };
  const fillColor = colorMap[color];
  const shapeNames: Record<string, string> = { square: 'Kare', circle: 'Daire', triangle: 'Üçgen', rectangle: 'Dikdörtgen', pentagon: 'Beşgen', hexagon: 'Altıgen' };

  const renderShape = () => {
    switch (shape) {
      case 'square': return <rect x="50" y="50" width="100" height="100" fill={fillColor} stroke="#000" strokeWidth="2" />;
      case 'circle': return <circle cx="100" cy="100" r="50" fill={fillColor} stroke="#000" strokeWidth="2" />;
      case 'triangle': return <polygon points="100,50 150,150 50,150" fill={fillColor} stroke="#000" strokeWidth="2" />;
      case 'rectangle': return <rect x="40" y="70" width="120" height="60" fill={fillColor} stroke="#000" strokeWidth="2" />;
      default: return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-black text-purple-600">{shapeNames[shape]}</h3>
        <motion.div animate={{ rotate: rotation }} className="w-40 h-40">
          <svg viewBox="0 0 200 200" className="w-full h-full">{renderShape()}</svg>
        </motion.div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setRotation(r => r + 90)} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl">Döndür 90°</motion.button>
      </div>
    </div>
  );
};

// ==================== ÇARPIM TABLOSU ====================
export const MultiplicationTable = ({ number, maxMultiplier = 10 }: { number: number; maxMultiplier?: number }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border-2 border-indigo-200">
      <h3 className="text-2xl font-black text-indigo-600 text-center mb-4">{number} Çarpım Tablosu</h3>
      <div className="grid gap-2">
        {Array.from({ length: maxMultiplier }).map((_, i) => {
          const multiplier = i + 1;
          return (
            <motion.div key={multiplier} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex justify-between p-3 bg-white rounded-xl shadow-sm border border-indigo-100">
              <span className="font-bold text-gray-700">{number} × {multiplier}</span>
              <span className="font-black text-indigo-600">= {number * multiplier}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ==================== İLERLEME TAKİBİ ====================
export const ProgressTracker = ({ currentLevel, maxLevel = 10, stars = 0, maxStars = 3 }: { currentLevel: number; maxLevel?: number; stars?: number; maxStars?: number }) => {
  const percentage = (currentLevel / maxLevel) * 100;
  return (
    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border-2 border-amber-200">
      <div className="flex flex-col items-center gap-4">
        <div className="text-3xl font-black text-amber-600">Seviye {currentLevel}</div>
        <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} className="h-full bg-gradient-to-r from-amber-400 to-yellow-500" />
        </div>
        <div className="flex gap-1">
          {Array.from({ length: maxStars }).map((_, i) => (
            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}>
              <Star className={`w-8 h-8 ${i < stars ? 'fill-yellow-400 stroke-yellow-500' : 'fill-gray-200 stroke-gray-300'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== MATEMATİK BULMACASI ====================
export const InteractivePuzzle = ({ puzzleType = 'addition', difficulty = 1 }: { puzzleType?: 'addition' | 'subtraction'; difficulty?: 1 | 2 | 3 }) => {
  const range = difficulty === 1 ? 10 : difficulty === 2 ? 20 : 50;
  const [puzzle, setPuzzle] = useState(() => {
    const a = Math.floor(Math.random() * range) + 1;
    const b = Math.floor(Math.random() * (puzzleType === 'subtraction' ? a : range)) + 1;
    return { a, b, answer: puzzleType === 'addition' ? a + b : a - b };
  });
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);

  const handleSubmit = () => {
    setResult(parseInt(userAnswer) === puzzle.answer ? 'correct' : 'incorrect');
  };

  const handleNew = () => {
    const a = Math.floor(Math.random() * range) + 1;
    const b = Math.floor(Math.random() * (puzzleType === 'subtraction' ? a : range)) + 1;
    setPuzzle({ a, b, answer: puzzleType === 'addition' ? a + b : a - b });
    setUserAnswer('');
    setResult(null);
  };

  return (
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border-2 border-rose-200">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2"><Brain className="w-6 h-6 text-rose-600" /><h3 className="text-xl font-black text-rose-600">Matematik Bulmacası</h3></div>
        <div className="text-3xl font-black text-gray-700">{puzzle.a} {puzzleType === 'addition' ? '+' : '-'} {puzzle.b} = ?</div>
        {result === null ? (
          <div className="flex gap-2">
            <input type="number" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSubmit()} placeholder="?" className="w-20 px-4 py-2 text-xl font-bold border-2 border-rose-300 rounded-xl text-center" />
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSubmit} className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl">Kontrol</motion.button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className={`text-2xl font-black ${result === 'correct' ? 'text-green-600' : 'text-red-600'}`}>{result === 'correct' ? '🎉 Doğru!' : `❌ Yanlış! Cevap: ${puzzle.answer}`}</div>
            <motion.button whileHover={{ scale: 1.05 }} onClick={handleNew} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl">Yeni Soru</motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default {
  AnimatedCounter,
  NumberLine,
  ComparisonVisual,
  MathOperationVisual,
  GroupingVisual,
  RhythmicCountingVisual,
  PatternVisual,
  AchievementBadge,
  InteractiveQuestionCard,
  // Yeni bileşenler
  FractionVisual,
  ClockVisual,
  MoneyVisual,
  ShapeExplorer,
  MultiplicationTable,
  ProgressTracker,
  InteractivePuzzle
};
