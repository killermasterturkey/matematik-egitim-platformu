import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Clock, Star } from 'lucide-react';
import { gradeColors } from '../../../data/curriculum/types';

interface GradeCardProps {
  grade: 1 | 2 | 3 | 4;
  totalTopics: number;
  completedTopics: number;
  description: string;
}

export default function GradeCard({ grade, totalTopics, completedTopics, description }: GradeCardProps) {
  const colors = gradeColors[grade];
  const progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/sinif/${grade}`} className="block">
        <div className={`relative ${colors.bg} rounded-3xl shadow-xl overflow-hidden border-4 ${colors.border} h-full`}>
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-10`}></div>

          {/* Floating decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl opacity-20"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${10 + i * 15}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                {['🔢', '📐', '✏️', '📚'][i]}
              </motion.div>
            ))}
          </div>

          <div className="relative p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${colors.gradient} rounded-2xl shadow-lg`}
              >
                <span className="text-5xl">{colors.emoji}</span>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl"
              >
                {colors.mascot}
              </motion.div>
            </div>

            {/* Title */}
            <h3 className={`text-2xl font-black ${colors.textDark} mb-2`}>
              {colors.name}
            </h3>

            {/* Description */}
            <p className="text-sm font-semibold text-gray-600 mb-4 line-clamp-2">
              {description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <BookOpen className={`w-4 h-4 ${colors.text}`} />
                <span className="text-sm font-bold text-gray-700">{totalTopics} Konu</span>
              </div>
              {completedTopics > 0 && (
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-bold text-gray-700">{completedTopics} Tamamlandı</span>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-500">İlerleme</span>
                <span className={`text-xs font-bold ${colors.text}`}>{progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full`}
                />
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ x: 5 }}
              className={`flex items-center justify-center gap-2 bg-gradient-to-r ${colors.button} px-4 py-3 rounded-xl shadow-lg`}
            >
              <span className="text-sm font-bold text-white">
                {progress === 0 ? 'Başla' : progress === 100 ? 'Tekrar Et' : 'Devam Et'}
              </span>
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
