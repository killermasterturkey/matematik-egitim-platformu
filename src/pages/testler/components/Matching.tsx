import { useState, useEffect } from 'react';

interface MatchingProps {
  question: string;
  pairs: Array<{ left: string; right: string }>;
  onAnswer: (isCorrect: boolean) => void;
}

export default function Matching({ question, pairs, onAnswer }: MatchingProps) {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [shuffledRight, setShuffledRight] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    // Sağ tarafı karıştır
    const rights = [...pairs.map(p => p.right)];
    for (let i = rights.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rights[i], rights[j]] = [rights[j], rights[i]];
    }
    setShuffledRight(rights);
  }, [pairs]);

  const handleLeftClick = (index: number) => {
    if (matched.includes(index)) return;
    setSelectedLeft(index);
  };

  const handleRightClick = (rightValue: string) => {
    if (selectedLeft === null || matched.includes(selectedLeft)) return;
    
    const correctRight = pairs[selectedLeft].right;
    if (rightValue === correctRight) {
      setMatched([...matched, selectedLeft]);
      setSelectedLeft(null);
      
      // Tüm eşleşmeler tamamlandı mı?
      if (matched.length + 1 === pairs.length) {
        setShowFeedback(true);
        setTimeout(() => {
          onAnswer(true);
        }, 1500);
      }
    } else {
      // Yanlış eşleşme - kısa bir animasyon göster
      setTimeout(() => {
        setSelectedLeft(null);
      }, 500);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-black text-gray-800 mb-8 text-center">
        {question}
      </h3>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Sol taraf */}
        <div className="space-y-4">
          {pairs.map((pair, index) => (
            <button
              key={index}
              onClick={() => handleLeftClick(index)}
              disabled={matched.includes(index)}
              className={`w-full p-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 cursor-pointer border-4 ${
                matched.includes(index)
                  ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white border-green-600'
                  : selectedLeft === index
                  ? 'bg-gradient-to-br from-teal-400 to-cyan-500 text-white border-teal-600'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 border-gray-300 hover:border-teal-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{pair.left}</span>
                {matched.includes(index) && <span className="text-2xl">✅</span>}
              </div>
            </button>
          ))}
        </div>
        
        {/* Sağ taraf */}
        <div className="space-y-4">
          {shuffledRight.map((right, index) => {
            const isMatched = matched.some(m => pairs[m].right === right);
            
            return (
              <button
                key={index}
                onClick={() => handleRightClick(right)}
                disabled={isMatched || selectedLeft === null}
                className={`w-full p-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 cursor-pointer border-4 ${
                  isMatched
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white border-green-600'
                    : selectedLeft !== null
                    ? 'bg-gradient-to-br from-purple-100 to-pink-100 text-gray-800 border-purple-300 hover:border-purple-500'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-500 border-gray-300 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{right}</span>
                  {isMatched && <span className="text-2xl">✅</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-lg font-bold text-gray-600">
          {selectedLeft !== null ? '👉 Şimdi sağ taraftan doğru cevabı seç!' : '👈 Sol taraftan bir işlem seç!'}
        </p>
        <p className="text-sm font-semibold text-teal-600 mt-2">
          Eşleşen: {matched.length} / {pairs.length}
        </p>
      </div>
      
      {showFeedback && (
        <div className="mt-6 p-6 rounded-2xl text-center font-bold text-xl bg-green-100 text-green-800">
          🎉 Mükemmel! Tüm eşleşmeleri doğru yaptın!
        </div>
      )}
    </div>
  );
}
