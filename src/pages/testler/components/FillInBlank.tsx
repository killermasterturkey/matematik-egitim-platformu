import { useState } from 'react';

interface FillInBlankProps {
  question: string;
  correct: string;
  onAnswer: (isCorrect: boolean) => void;
}

export default function FillInBlank({ question, correct, onAnswer }: FillInBlankProps) {
  const [answer, setAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (!answer.trim() || showFeedback) return;
    
    const correct_answer = answer.trim() === correct;
    setIsCorrect(correct_answer);
    setShowFeedback(true);
    
    setTimeout(() => {
      onAnswer(correct_answer);
      setAnswer('');
      setShowFeedback(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <h3 className="text-3xl font-black text-gray-800 mb-8 text-center">
        {question}
      </h3>
      
      <div className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={showFeedback}
            placeholder="Cevabını yaz..."
            className="w-full px-6 py-4 text-2xl font-bold text-center border-4 border-teal-300 rounded-2xl focus:outline-none focus:border-teal-500 transition-all"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={!answer.trim() || showFeedback}
          className={`w-full mt-6 px-8 py-4 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap ${
            !answer.trim() || showFeedback
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          ✅ Cevabı Gönder
        </button>
      </div>
      
      {showFeedback && (
        <div className={`mt-6 p-6 rounded-2xl text-center font-bold text-xl ${
          isCorrect
            ? 'bg-green-100 text-green-800'
            : 'bg-orange-100 text-orange-800'
        }`}>
          {isCorrect ? '🎉 Harika! Doğru cevap!' : '💪 Biraz daha düşün! Doğru cevap: ' + correct}
        </div>
      )}
    </div>
  );
}
