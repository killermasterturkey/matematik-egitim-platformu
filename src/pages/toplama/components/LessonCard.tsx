interface LessonCardProps {
  lesson: {
    id: number;
    title: string;
    description: string;
    level: number;
    icon: string;
    color: string;
    emoji?: string;
  };
  isCompleted: boolean;
  onClick: () => void;
}

export default function LessonCard({ lesson, isCompleted, onClick }: LessonCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 ${
        isCompleted ? 'border-yellow-400' : 'border-gray-200'
      }`}>
        {/* Completed Badge */}
        {isCompleted && (
          <div className="absolute top-4 right-4 z-10">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg animate-bounce">
              <span className="text-3xl">⭐</span>
            </div>
          </div>
        )}

        <div className={`absolute inset-0 bg-gradient-to-br ${lesson.color} opacity-10`}></div>
        
        <div className="relative p-8">
          <div className="flex items-center gap-5 mb-5">
            <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${lesson.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
              <i className={`${lesson.icon} text-4xl text-white`}></i>
            </div>
            {lesson.emoji && (
              <span className="text-5xl">{lesson.emoji}</span>
            )}
          </div>
          
          <h4 className="text-2xl font-black text-gray-800 mb-3">
            {lesson.title}
          </h4>
          <p className="text-base font-semibold text-gray-600 mb-6">
            {lesson.description}
          </p>
          
          <div className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full shadow-md transition-all ${
            isCompleted
              ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white'
              : 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:shadow-lg'
          }`}>
            <span className="text-base font-bold whitespace-nowrap">
              {isCompleted ? '✅ Tamamlandı' : '🚀 Başla'}
            </span>
            <i className="ri-arrow-right-circle-fill text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
