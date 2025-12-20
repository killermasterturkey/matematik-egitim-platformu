import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, BookOpen, CheckCircle2 } from 'lucide-react';

interface ThemeCardProps {
  themeId: string;
  grade: number;
  title: string;
  description: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  hours: number;
  topicCount: number;
  completedCount: number;
  index: number;
}

export default function ThemeCard({
  themeId,
  grade,
  title,
  description,
  emoji,
  color,
  bgColor,
  borderColor,
  textColor,
  hours,
  topicCount,
  completedCount,
  index
}: ThemeCardProps) {
  const progress = topicCount > 0 ? Math.round((completedCount / topicCount) * 100) : 0;
  const isCompleted = progress === 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={`/sinif/${grade}/tema/${themeId}`} className="block">
        <div className={`relative ${bgColor} rounded-2xl shadow-lg overflow-hidden border-3 ${borderColor} h-full`}>
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`}></div>

          {/* Completed badge */}
          {isCompleted && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-3 right-3 bg-green-500 text-white p-1.5 rounded-full shadow-lg"
            >
              <CheckCircle2 className="w-5 h-5" />
            </motion.div>
          )}

          <div className="relative p-5">
            {/* Header */}
            <div className="flex items-start gap-4 mb-3">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${color} rounded-xl shadow-md flex-shrink-0`}
              >
                <span className="text-3xl">{emoji}</span>
              </motion.div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold ${textColor} bg-white/80 px-2 py-0.5 rounded-full`}>
                    Tema {index + 1}
                  </span>
                  <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {hours} saat
                  </span>
                </div>
                <h3 className="text-lg font-black text-gray-800 leading-tight line-clamp-2">
                  {title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm font-medium text-gray-600 mb-4 line-clamp-2">
              {description}
            </p>

            {/* Stats & Progress */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <BookOpen className={`w-4 h-4 ${textColor}`} />
                <span className="text-sm font-bold text-gray-700">
                  {completedCount}/{topicCount} Konu
                </span>
              </div>
              <span className={`text-sm font-bold ${textColor}`}>
                {progress}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                className={`h-full bg-gradient-to-r ${color} rounded-full`}
              />
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ x: 3 }}
              className={`flex items-center justify-center gap-2 bg-gradient-to-r ${color} px-4 py-2.5 rounded-xl shadow-md`}
            >
              <span className="text-sm font-bold text-white">
                {progress === 0 ? 'Başla' : isCompleted ? 'Tekrar Et' : 'Devam Et'}
              </span>
              <ChevronRight className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
