interface ProgressBarProps {
  progress: number;
  total: number;
  completed: number;
}

export default function ProgressBar({ progress, total, completed }: ProgressBarProps) {
  return (
    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-3 border-green-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎯</span>
          <span className="text-lg font-black text-gray-800">İlerleme Durumun</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md">
          <span className="text-2xl">⭐</span>
          <span className="text-lg font-black text-green-600">{completed}/{total}</span>
        </div>
      </div>
      
      <div className="relative w-full h-8 bg-white rounded-full overflow-hidden shadow-inner border-2 border-green-200">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 transition-all duration-500 ease-out flex items-center justify-end pr-2"
          style={{ width: `${progress}%` }}
        >
          {progress > 10 && (
            <span className="text-white font-black text-sm drop-shadow-lg">
              {Math.round(progress)}%
            </span>
          )}
        </div>
      </div>
      
      {progress === 100 && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
            <span className="text-2xl">🎉</span>
            <span className="text-base font-black">Tebrikler! Tüm dersleri tamamladın!</span>
            <span className="text-2xl">🏆</span>
          </div>
        </div>
      )}
    </div>
  );
}
