import { useState } from 'react';

interface MultipleChoiceProps {
  question: string;
  options: string[];
  correct: string;
  onAnswer: (isCorrect: boolean) => void;
}

export default function MultipleChoice({ question, options, correct, onAnswer }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (option: string) => {
    if (showFeedback) return;
    
    setSelected(option);
    setShowFeedback(true);
    
    setTimeout(() => {
      onAnswer(option === correct);
      setSelected(null);
      setShowFeedback(false);
    }, 1500);
  };

  return (
    <div>
      <h3 className="text-3xl font-black text-gray-800 mb-8 text-center">
        {question}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => {
          const isSelected = selected === option;
          const isCorrect = option === correct;
          const showCorrect = showFeedback && isCorrect;
          const showWrong = showFeedback && isSelected && !isCorrect;
          
          return (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              disabled={showFeedback}
              className={`p-6 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 cursor-pointer border-4 ${
                showCorrect
                  ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white border-green-600'
                  : showWrong
                  ? 'bg-gradient-to-br from-red-400 to-pink-500 text-white border-red-600'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 border-gray-300 hover:border-teal-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showCorrect && <span className="text-3xl">✅</span>}
                {showWrong && <span className="text-3xl">❌</span>}
              </div>
            </button>
          );
        })}
      </div>
      
      {showFeedback && (
        <div className={`mt-6 p-6 rounded-2xl text-center font-bold text-xl ${
          selected === correct
            ? 'bg-green-100 text-green-800'
            : 'bg-orange-100 text-orange-800'
        }`}>
          {selected === correct ? '🎉 Harika! Doğru cevap!' : '💪 Biraz daha düşün! Doğru cevap: ' + correct}
        </div>
      )}
    </div>
  );
}
