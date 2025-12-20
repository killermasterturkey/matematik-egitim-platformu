import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, CheckCircle2, Star, Lock } from 'lucide-react';
import { difficultyLabels } from '../../../data/curriculum/types';

interface TopicCardProps {
  topicId: string;
  grade: number;
  themeId: string;
  title: string;
  description: string;
  emoji: string;
  duration: string;
  difficulty: 1 | 2 | 3;
  isCompleted: boolean;
  isLocked?: boolean;
  score?: number;
  index: number;
  color: string;
  textColor: string;
}

export default function TopicCard({
  topicId,
  grade,
  themeId,
  title,
  description,
  emoji,
  duration,
  difficulty,
  isCompleted,
  isLocked = false,
  score,
  index,
  color,
  textColor
}: TopicCardProps) {
  const difficultyInfo = difficultyLabels[difficulty];

  if (isLocked) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="relative bg-gray-100 rounded-xl border-2 border-gray-200 p-4 opacity-60"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-xl">
            <Lock className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-bold text-gray-400">{title}</h4>
            <p className="text-xs text-gray-400">Önce önceki konuları tamamla</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={`/sinif/${grade}/konu/${topicId}`} className="block">
        <div className={`relative bg-white rounded-xl border-2 ${isCompleted ? 'border-green-300 bg-green-50' : 'border-gray-200 hover:border-gray-300'} shadow-sm hover:shadow-md transition-all p-4`}>

          {/* Completed badge */}
          {isCompleted && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-green-500 text-white p-1 rounded-full shadow-md"
            >
              <CheckCircle2 className="w-4 h-4" />
            </motion.div>
          )}

          <div className="flex items-center gap-4">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${color} rounded-xl shadow-sm flex-shrink-0`}
            >
              <span className="text-2xl">{emoji}</span>
            </motion.div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-bold ${textColor}`}>Konu {index + 1}</span>
                <span className={`text-xs ${difficultyInfo.color}`}>{difficultyInfo.emoji}</span>
              </div>
              <h4 className="text-base font-bold text-gray-800 line-clamp-1 mb-1">
                {title}
              </h4>
              <p className="text-xs text-gray-500 line-clamp-1">
                {description}
              </p>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              {/* Duration */}
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{duration}</span>
              </div>

              {/* Score or Arrow */}
              {isCompleted && score !== undefined ? (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-bold text-yellow-600">{score}%</span>
                </div>
              ) : (
                <motion.div
                  whileHover={{ x: 3 }}
                  className={`w-8 h-8 flex items-center justify-center bg-gradient-to-r ${color} rounded-full shadow-sm`}
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
