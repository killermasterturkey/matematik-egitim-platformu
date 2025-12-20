import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { showCelebration, showEncouragement } from '../ui/MessagePopup';

export interface Trick {
  id: string;
  title: string;
  emoji: string;
  shortDescription: string;
  fullExplanation: string;
  steps: string[];
  examples: {
    problem: string;
    solution: string;
    explanation: string;
  }[];
  practiceProblems: {
    question: string;
    answer: number;
    hint: string;
  }[];
  color: string;
}

interface MathTricksProps {
  title: string;
  subtitle: string;
  tricks: Trick[];
  accentColor?: string;
}

export default function MathTricks({ title, subtitle, tricks, accentColor = 'purple' }: MathTricksProps) {
  const [selectedTrick, setSelectedTrick] = useState<Trick | null>(null);
  const [practiceMode, setPracticeMode] = useState(false);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const handleCheckAnswer = () => {
    if (!selectedTrick || !userAnswer) return;

    const problem = selectedTrick.practiceProblems[currentProblemIndex];
    const correct = parseInt(userAnswer) === problem.answer;

    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setScore(prev => prev + 1);
      showCelebration();
    } else {
      showEncouragement();
    }

    setTimeout(() => {
      setShowResult(false);
      setUserAnswer('');
      setShowHint(false);

      if (currentProblemIndex < selectedTrick.practiceProblems.length - 1) {
        setCurrentProblemIndex(prev => prev + 1);
      } else {
        setPracticeMode(false);
        setCurrentProblemIndex(0);
      }
    }, 2000);
  };

  const startPractice = () => {
    setPracticeMode(true);
    setCurrentProblemIndex(0);
    setScore(0);
    setUserAnswer('');
    setShowHint(false);
  };

  return (
    <div className={`bg-gradient-to-br from-${accentColor}-50 to-${accentColor}-100 rounded-3xl p-6 md:p-8 border-4 border-${accentColor}-200 shadow-xl`}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br from-${accentColor}-400 to-${accentColor}-600 rounded-2xl shadow-lg`}
        >
          <span className="text-4xl">🎯</span>
        </motion.div>
        <div>
          <h3 className={`text-2xl md:text-3xl font-black text-${accentColor}-700`}>{title}</h3>
          <p className="text-sm md:text-base font-semibold text-gray-600">{subtitle}</p>
        </div>
      </div>

      {/* Tricks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {tricks.map((trick, index) => (
          <motion.div
            key={trick.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedTrick(trick)}
            className={`bg-white rounded-2xl p-5 cursor-pointer shadow-lg hover:shadow-xl transition-all border-3 border-transparent hover:border-${accentColor}-300`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${trick.color} rounded-xl shadow-md flex-shrink-0`}>
                <span className="text-3xl">{trick.emoji}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-black text-gray-800 mb-1">{trick.title}</h4>
                <p className="text-sm font-semibold text-gray-600">{trick.shortDescription}</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Trick Modal */}
      <AnimatePresence>
        {selectedTrick && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedTrick(null);
                setPracticeMode(false);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${selectedTrick.color} rounded-2xl shadow-lg`}>
                    <span className="text-4xl">{selectedTrick.emoji}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-800">{selectedTrick.title}</h3>
                    <p className="text-sm font-semibold text-gray-500">{selectedTrick.shortDescription}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setSelectedTrick(null);
                    setPracticeMode(false);
                  }}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <span className="text-xl">✕</span>
                </motion.button>
              </div>

              {!practiceMode ? (
                <>
                  {/* Explanation */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-5 mb-6 border-2 border-yellow-200">
                    <h4 className="text-lg font-black text-orange-700 mb-3 flex items-center gap-2">
                      <span className="text-2xl">💡</span> Nasıl Çalışır?
                    </h4>
                    <p className="text-base font-semibold text-gray-700 leading-relaxed mb-4">
                      {selectedTrick.fullExplanation}
                    </p>

                    {/* Steps */}
                    <div className="space-y-2">
                      {selectedTrick.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full font-black text-sm flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-sm font-semibold text-gray-700 pt-1">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="mb-6">
                    <h4 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
                      <span className="text-2xl">📝</span> Örnekler
                    </h4>
                    <div className="space-y-4">
                      {selectedTrick.examples.map((example, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.15 }}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200"
                        >
                          <div className="flex items-center gap-4 mb-2">
                            <span className="text-2xl font-black text-blue-600">{example.problem}</span>
                            <span className="text-2xl">→</span>
                            <span className="text-2xl font-black text-green-600">{example.solution}</span>
                          </div>
                          <p className="text-sm font-semibold text-gray-600 bg-white/50 rounded-lg p-2">
                            {example.explanation}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Practice Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={startPractice}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-xl shadow-lg"
                  >
                    🎮 Şimdi Dene!
                  </motion.button>
                </>
              ) : (
                /* Practice Mode */
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-green-100 px-4 py-2 rounded-xl">
                      <span className="font-black text-green-600">Skor: {score}/{selectedTrick.practiceProblems.length}</span>
                    </div>
                    <div className="bg-blue-100 px-4 py-2 rounded-xl">
                      <span className="font-black text-blue-600">
                        Soru {currentProblemIndex + 1}/{selectedTrick.practiceProblems.length}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    key={currentProblemIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border-4 ${
                      showResult ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-purple-200'
                    }`}
                  >
                    <p className="text-lg font-bold text-purple-600 mb-2">Bu taktiği kullanarak çöz:</p>
                    <p className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                      {selectedTrick.practiceProblems[currentProblemIndex].question}
                    </p>

                    <input
                      type="number"
                      value={userAnswer}
                      onChange={e => setUserAnswer(e.target.value)}
                      onKeyPress={e => e.key === 'Enter' && handleCheckAnswer()}
                      disabled={showResult}
                      className="w-40 text-center text-3xl font-black px-4 py-3 border-4 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 disabled:bg-gray-100"
                      placeholder="?"
                      autoFocus
                    />

                    {/* Hint */}
                    {!showResult && (
                      <div className="mt-4">
                        {!showHint ? (
                          <button
                            onClick={() => setShowHint(true)}
                            className="text-purple-600 font-bold hover:underline"
                          >
                            💡 İpucu göster
                          </button>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-yellow-100 rounded-xl p-3 text-sm font-semibold text-yellow-800"
                          >
                            {selectedTrick.practiceProblems[currentProblemIndex].hint}
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Result */}
                    <AnimatePresence>
                      {showResult && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className={`mt-4 text-2xl font-black ${isCorrect ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {isCorrect ? (
                            <span>Harika! Doğru!</span>
                          ) : (
                            <span>Cevap: {selectedTrick.practiceProblems[currentProblemIndex].answer}</span>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <div className="flex gap-4 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCheckAnswer}
                      disabled={showResult || !userAnswer}
                      className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-black text-lg shadow-lg disabled:opacity-50"
                    >
                      Kontrol Et
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPracticeMode(false)}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-black text-lg"
                    >
                      Geri
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================
// TOPLAMA TAKTİKLERİ
// ============================================
export const toplamaTricks: Trick[] = [
  {
    id: 'add-9',
    title: '9 Ekleme Taktiği',
    emoji: '9️⃣',
    shortDescription: '9 eklemek için 10 ekle, 1 çıkar!',
    fullExplanation: '9 eklemek aslında çok kolay! 9, 10\'dan sadece 1 eksik. Bu yüzden önce 10 ekle, sonra 1 çıkar. Böylece işlemi kafadan çok hızlı yapabilirsin!',
    steps: [
      'Önce sayıya 10 ekle (10 eklemek çok kolay, sadece onlar basamağını 1 artır!)',
      'Sonra 1 çıkar',
      'İşte sonuç!'
    ],
    examples: [
      { problem: '27 + 9 = ?', solution: '36', explanation: '27 + 10 = 37, sonra 37 - 1 = 36' },
      { problem: '45 + 9 = ?', solution: '54', explanation: '45 + 10 = 55, sonra 55 - 1 = 54' },
      { problem: '78 + 9 = ?', solution: '87', explanation: '78 + 10 = 88, sonra 88 - 1 = 87' }
    ],
    practiceProblems: [
      { question: '34 + 9 = ?', answer: 43, hint: '34 + 10 = 44, sonra 1 çıkar' },
      { question: '56 + 9 = ?', answer: 65, hint: '56 + 10 = 66, sonra 1 çıkar' },
      { question: '82 + 9 = ?', answer: 91, hint: '82 + 10 = 92, sonra 1 çıkar' },
      { question: '19 + 9 = ?', answer: 28, hint: '19 + 10 = 29, sonra 1 çıkar' }
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'make-10',
    title: '10 Yapma Taktiği',
    emoji: '🔟',
    shortDescription: 'Sayıları 10 yapacak şekilde böl!',
    fullExplanation: '10 ile toplamak çok kolay! Bu yüzden bir sayıyı 10 yapacak şekilde diğer sayıdan "ödünç" al. Örneğin 8+5 için, 5\'ten 2 al ve 8\'i 10 yap!',
    steps: [
      'İlk sayıyı 10 yapmak için kaç lazım bul',
      'Bu kadarı ikinci sayıdan al',
      '10 + kalan sayıyı topla'
    ],
    examples: [
      { problem: '8 + 5 = ?', solution: '13', explanation: '8 + 2 = 10, 5 - 2 = 3, yani 10 + 3 = 13' },
      { problem: '7 + 6 = ?', solution: '13', explanation: '7 + 3 = 10, 6 - 3 = 3, yani 10 + 3 = 13' },
      { problem: '9 + 7 = ?', solution: '16', explanation: '9 + 1 = 10, 7 - 1 = 6, yani 10 + 6 = 16' }
    ],
    practiceProblems: [
      { question: '8 + 6 = ?', answer: 14, hint: '8 + 2 = 10, 6 - 2 = 4, yani 10 + 4' },
      { question: '7 + 5 = ?', answer: 12, hint: '7 + 3 = 10, 5 - 3 = 2, yani 10 + 2' },
      { question: '9 + 4 = ?', answer: 13, hint: '9 + 1 = 10, 4 - 1 = 3, yani 10 + 3' },
      { question: '6 + 8 = ?', answer: 14, hint: '8 + 2 = 10, 6 - 2 = 4, yani 10 + 4' }
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'doubles',
    title: 'İkizler Taktiği',
    emoji: '👯',
    shortDescription: 'Aynı sayıları toplamak süper kolay!',
    fullExplanation: 'Aynı iki sayıyı toplamak (çift sayılar) çok kolay! Bunları ezberle: 2+2=4, 3+3=6, 4+4=8, 5+5=10, 6+6=12, 7+7=14, 8+8=16, 9+9=18. Sonra yakın sayılar için kullan!',
    steps: [
      'Çift toplamları ezberle: 5+5=10, 6+6=12, 7+7=14...',
      'Yakın sayılar için ikizi kullan',
      'Örneğin 6+7 için: 6+6=12, sonra +1 = 13'
    ],
    examples: [
      { problem: '6 + 7 = ?', solution: '13', explanation: '6 + 6 = 12 (ikiz), +1 = 13' },
      { problem: '8 + 7 = ?', solution: '15', explanation: '7 + 7 = 14 (ikiz), +1 = 15' },
      { problem: '5 + 6 = ?', solution: '11', explanation: '5 + 5 = 10 (ikiz), +1 = 11' }
    ],
    practiceProblems: [
      { question: '7 + 7 = ?', answer: 14, hint: 'İkiz! 7 + 7' },
      { question: '8 + 9 = ?', answer: 17, hint: '8 + 8 = 16 (ikiz), +1 = 17' },
      { question: '6 + 6 = ?', answer: 12, hint: 'İkiz! 6 + 6' },
      { question: '9 + 8 = ?', answer: 17, hint: '9 + 9 = 18 (ikiz), -1 = 17' }
    ],
    color: 'from-pink-400 to-pink-600'
  },
  {
    id: 'add-8',
    title: '8 Ekleme Taktiği',
    emoji: '8️⃣',
    shortDescription: '8 eklemek için 10 ekle, 2 çıkar!',
    fullExplanation: '9 taktiği gibi, 8 için de 10 kullan! 8, 10\'dan 2 eksik. Önce 10 ekle, sonra 2 çıkar.',
    steps: [
      'Sayıya 10 ekle',
      'Sonra 2 çıkar',
      'Sonuç hazır!'
    ],
    examples: [
      { problem: '35 + 8 = ?', solution: '43', explanation: '35 + 10 = 45, sonra 45 - 2 = 43' },
      { problem: '67 + 8 = ?', solution: '75', explanation: '67 + 10 = 77, sonra 77 - 2 = 75' },
      { problem: '24 + 8 = ?', solution: '32', explanation: '24 + 10 = 34, sonra 34 - 2 = 32' }
    ],
    practiceProblems: [
      { question: '43 + 8 = ?', answer: 51, hint: '43 + 10 = 53, sonra 2 çıkar' },
      { question: '76 + 8 = ?', answer: 84, hint: '76 + 10 = 86, sonra 2 çıkar' },
      { question: '58 + 8 = ?', answer: 66, hint: '58 + 10 = 68, sonra 2 çıkar' },
      { question: '29 + 8 = ?', answer: 37, hint: '29 + 10 = 39, sonra 2 çıkar' }
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'split-numbers',
    title: 'Sayıları Parçalama',
    emoji: '✂️',
    shortDescription: 'Büyük sayıları parçalara ayır, kolay topla!',
    fullExplanation: 'Büyük sayıları parçalara ayırarak toplamak çok kolay! Örneğin 36+27 yerine, 36+20+7 olarak düşün. Önce onları, sonra birleri ekle.',
    steps: [
      'İkinci sayıyı onlar ve birler olarak ayır',
      'Önce onları ekle',
      'Sonra birleri ekle',
      'Sonuç hazır!'
    ],
    examples: [
      { problem: '45 + 28 = ?', solution: '73', explanation: '45 + 20 = 65, sonra 65 + 8 = 73' },
      { problem: '67 + 24 = ?', solution: '91', explanation: '67 + 20 = 87, sonra 87 + 4 = 91' },
      { problem: '38 + 45 = ?', solution: '83', explanation: '38 + 40 = 78, sonra 78 + 5 = 83' }
    ],
    practiceProblems: [
      { question: '52 + 36 = ?', answer: 88, hint: '52 + 30 = 82, sonra + 6' },
      { question: '44 + 29 = ?', answer: 73, hint: '44 + 20 = 64, sonra + 9' },
      { question: '63 + 28 = ?', answer: 91, hint: '63 + 20 = 83, sonra + 8' },
      { question: '37 + 46 = ?', answer: 83, hint: '37 + 40 = 77, sonra + 6' }
    ],
    color: 'from-teal-400 to-teal-600'
  },
  {
    id: 'round-up',
    title: 'Yuvarla ve Düzelt',
    emoji: '🔄',
    shortDescription: 'Sayıyı yuvarla, sonra düzelt!',
    fullExplanation: 'Sayıları yuvarlak sayılara tamamla, sonra farkı çıkar. Örneğin 58+7 yerine, 60+7=67, sonra 67-2=65. Yuvarlak sayılarla işlem çok kolay!',
    steps: [
      'İlk sayıyı en yakın onluğa yuvarla',
      'Toplama işlemini yap',
      'Ne kadar eklediğini çıkar',
      'Sonuç hazır!'
    ],
    examples: [
      { problem: '58 + 7 = ?', solution: '65', explanation: '60 + 7 = 67, sonra 67 - 2 = 65' },
      { problem: '47 + 6 = ?', solution: '53', explanation: '50 + 6 = 56, sonra 56 - 3 = 53' },
      { problem: '39 + 8 = ?', solution: '47', explanation: '40 + 8 = 48, sonra 48 - 1 = 47' }
    ],
    practiceProblems: [
      { question: '68 + 5 = ?', answer: 73, hint: '70 + 5 = 75, sonra - 2' },
      { question: '49 + 7 = ?', answer: 56, hint: '50 + 7 = 57, sonra - 1' },
      { question: '77 + 6 = ?', answer: 83, hint: '80 + 6 = 86, sonra - 3' },
      { question: '28 + 9 = ?', answer: 37, hint: '30 + 9 = 39, sonra - 2' }
    ],
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    id: 'friendly-numbers',
    title: 'Dost Sayılar',
    emoji: '🤝',
    shortDescription: '10 yapan çiftleri ezberle!',
    fullExplanation: '10 yapan çiftler senin dostların! 1+9, 2+8, 3+7, 4+6, 5+5. Bunları ezberle ve büyük toplamalar için kullan!',
    steps: [
      '10 yapan çiftleri ezberle: 1+9, 2+8, 3+7, 4+6, 5+5',
      'Sayılarda bu çiftleri ara',
      '10\'ları hızlıca topla',
      'Kalan sayıları ekle'
    ],
    examples: [
      { problem: '7 + 5 + 3 = ?', solution: '15', explanation: '7 + 3 = 10 (dost çifti), 10 + 5 = 15' },
      { problem: '8 + 4 + 2 + 6 = ?', solution: '20', explanation: '8 + 2 = 10, 4 + 6 = 10, 10 + 10 = 20' },
      { problem: '9 + 6 + 1 + 4 = ?', solution: '20', explanation: '9 + 1 = 10, 6 + 4 = 10, 10 + 10 = 20' }
    ],
    practiceProblems: [
      { question: '6 + 7 + 4 = ?', answer: 17, hint: '6 + 4 = 10, sonra + 7' },
      { question: '8 + 5 + 2 = ?', answer: 15, hint: '8 + 2 = 10, sonra + 5' },
      { question: '3 + 9 + 7 = ?', answer: 19, hint: '3 + 7 = 10, sonra + 9' },
      { question: '4 + 8 + 6 + 2 = ?', answer: 20, hint: '4 + 6 = 10, 8 + 2 = 10' }
    ],
    color: 'from-rose-400 to-rose-600'
  },
  // ============================================
  // 2 BASAMAKLI TOPLAMA TEKNİKLERİ
  // ============================================
  {
    id: 'left-to-right-add',
    title: '🚀 Soldan Sağa Toplama',
    emoji: '👈',
    shortDescription: 'Büyük basamaktan başla, küçüğe git!',
    fullExplanation: 'Okulda sağdan sola toplarız ama kafadan hesap için SOLDAN SAĞA daha kolay! Önce onları topla, sonra birleri. 47+36 için: 40+30=70, 7+6=13, sonuç 70+13=83!',
    steps: [
      '🔢 Önce ONLAR basamağını topla (büyük sayılar)',
      '🔢 Sonra BİRLER basamağını topla',
      '➕ İki sonucu birleştir',
      '🎉 Cevap hazır!'
    ],
    examples: [
      { problem: '47 + 36 = ?', solution: '83', explanation: '40+30=70, 7+6=13, 70+13=83 🎯' },
      { problem: '58 + 34 = ?', solution: '92', explanation: '50+30=80, 8+4=12, 80+12=92 🎯' },
      { problem: '65 + 27 = ?', solution: '92', explanation: '60+20=80, 5+7=12, 80+12=92 🎯' }
    ],
    practiceProblems: [
      { question: '43 + 28 = ?', answer: 71, hint: '40+20=60, 3+8=11, 60+11=?' },
      { question: '56 + 37 = ?', answer: 93, hint: '50+30=80, 6+7=13, 80+13=?' },
      { question: '64 + 29 = ?', answer: 93, hint: '60+20=80, 4+9=13, 80+13=?' },
      { question: '78 + 15 = ?', answer: 93, hint: '70+10=80, 8+5=13, 80+13=?' }
    ],
    color: 'from-amber-400 to-amber-600'
  },
  {
    id: 'jump-strategy',
    title: '🦘 Zıplama Stratejisi',
    emoji: '🦘',
    shortDescription: 'Sayı doğrusunda zıpla!',
    fullExplanation: 'Kafanda bir sayı doğrusu hayal et! İlk sayıdan başla, diğer sayının onlarını zıplayarak ekle, sonra birleri. 45+28 için: 45\'ten başla, +20 zıpla (65), +8 zıpla (73)!',
    steps: [
      '🏁 İlk sayıdan başla',
      '🦘 İkinci sayının ONLARI kadar büyük bir zıplama yap',
      '🐇 Sonra BİRLERİ kadar küçük zıplamalar yap',
      '🎯 Vardığın yer cevap!'
    ],
    examples: [
      { problem: '45 + 28 = ?', solution: '73', explanation: '45 → +20 → 65 → +8 → 73 🦘' },
      { problem: '67 + 25 = ?', solution: '92', explanation: '67 → +20 → 87 → +5 → 92 🦘' },
      { problem: '38 + 46 = ?', solution: '84', explanation: '38 → +40 → 78 → +6 → 84 🦘' }
    ],
    practiceProblems: [
      { question: '52 + 39 = ?', answer: 91, hint: '52 → +30 → 82 → +9 → ?' },
      { question: '44 + 37 = ?', answer: 81, hint: '44 → +30 → 74 → +7 → ?' },
      { question: '63 + 28 = ?', answer: 91, hint: '63 → +20 → 83 → +8 → ?' },
      { question: '75 + 18 = ?', answer: 93, hint: '75 → +10 → 85 → +8 → ?' }
    ],
    color: 'from-lime-400 to-lime-600'
  },
  // ============================================
  // 3 BASAMAKLI TOPLAMA TEKNİKLERİ
  // ============================================
  {
    id: 'hundreds-first',
    title: '💯 Yüzler Önce!',
    emoji: '💯',
    shortDescription: '3 basamaklı? Yüzlerden başla!',
    fullExplanation: '3 basamaklı sayıları toplarken yüzlerden başla! 345+238 için: 300+200=500, 40+30=70, 5+8=13. Sonuç: 500+70+13=583. Büyükten küçüğe, kolay hesap!',
    steps: [
      '💯 Önce YÜZLER basamağını topla',
      '🔟 Sonra ONLAR basamağını topla',
      '1️⃣ En son BİRLER basamağını topla',
      '➕ Hepsini birleştir!'
    ],
    examples: [
      { problem: '345 + 238 = ?', solution: '583', explanation: '300+200=500, 40+30=70, 5+8=13 → 583 💪' },
      { problem: '456 + 327 = ?', solution: '783', explanation: '400+300=700, 50+20=70, 6+7=13 → 783 💪' },
      { problem: '234 + 519 = ?', solution: '753', explanation: '200+500=700, 30+10=40, 4+9=13 → 753 💪' }
    ],
    practiceProblems: [
      { question: '325 + 248 = ?', answer: 573, hint: '300+200=500, 20+40=60, 5+8=13' },
      { question: '467 + 215 = ?', answer: 682, hint: '400+200=600, 60+10=70, 7+5=12' },
      { question: '538 + 246 = ?', answer: 784, hint: '500+200=700, 30+40=70, 8+6=14' },
      { question: '629 + 254 = ?', answer: 883, hint: '600+200=800, 20+50=70, 9+4=13' }
    ],
    color: 'from-violet-400 to-violet-600'
  },
  {
    id: 'round-hundreds',
    title: '🎯 Yüze Tamamla',
    emoji: '🎯',
    shortDescription: 'En yakın yüze yuvarla, sonra düzelt!',
    fullExplanation: '287+156 zor mu? 287\'yi 300\'e tamamla (+13), sonra 300+156=456, son olarak 456-13=443. Yuvarlak sayılarla işlem çok kolay!',
    steps: [
      '🎯 İlk sayıyı en yakın YÜZE yuvarla',
      '➕ Yuvarlak sayıyla topla',
      '➖ Ne kadar eklediğini çıkar',
      '✨ Sonuç!'
    ],
    examples: [
      { problem: '287 + 156 = ?', solution: '443', explanation: '300+156=456, 456-13=443 (13 fazla eklemiştik)' },
      { problem: '395 + 248 = ?', solution: '643', explanation: '400+248=648, 648-5=643 (5 fazla eklemiştik)' },
      { problem: '192 + 345 = ?', solution: '537', explanation: '200+345=545, 545-8=537 (8 fazla eklemiştik)' }
    ],
    practiceProblems: [
      { question: '289 + 134 = ?', answer: 423, hint: '300+134=434, 434-11=?' },
      { question: '496 + 237 = ?', answer: 733, hint: '500+237=737, 737-4=?' },
      { question: '188 + 265 = ?', answer: 453, hint: '200+265=465, 465-12=?' },
      { question: '394 + 178 = ?', answer: 572, hint: '400+178=578, 578-6=?' }
    ],
    color: 'from-fuchsia-400 to-fuchsia-600'
  },
  // ============================================
  // 4 BASAMAKLI TOPLAMA TEKNİKLERİ
  // ============================================
  {
    id: 'thousands-strategy',
    title: '🏆 Binler Stratejisi',
    emoji: '🏆',
    shortDescription: '4 basamak? Binlerden başla şampiyon!',
    fullExplanation: '4 basamaklı sayılar korkutucu değil! 2456+1327 için: 2000+1000=3000, 400+300=700, 50+20=70, 6+7=13. Sonuç: 3783. Sen bir matematik şampiyonusun!',
    steps: [
      '🏆 BİNLER basamağını topla',
      '💯 YÜZLER basamağını topla',
      '🔟 ONLAR basamağını topla',
      '1️⃣ BİRLER basamağını topla',
      '🎉 Hepsini birleştir!'
    ],
    examples: [
      { problem: '2456 + 1327 = ?', solution: '3783', explanation: '2000+1000=3000, 400+300=700, 50+20=70, 6+7=13 → 3783 🏆' },
      { problem: '3245 + 2638 = ?', solution: '5883', explanation: '3000+2000=5000, 200+600=800, 40+30=70, 5+8=13 → 5883 🏆' },
      { problem: '1567 + 2415 = ?', solution: '3982', explanation: '1000+2000=3000, 500+400=900, 60+10=70, 7+5=12 → 3982 🏆' }
    ],
    practiceProblems: [
      { question: '2345 + 1428 = ?', answer: 3773, hint: '2000+1000=3000, 300+400=700, 40+20=60, 5+8=13' },
      { question: '3567 + 2316 = ?', answer: 5883, hint: '3000+2000=5000, 500+300=800, 60+10=70, 7+6=13' },
      { question: '4123 + 2759 = ?', answer: 6882, hint: '4000+2000=6000, 100+700=800, 20+50=70, 3+9=12' },
      { question: '1856 + 3027 = ?', answer: 4883, hint: '1000+3000=4000, 800+0=800, 50+20=70, 6+7=13' }
    ],
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 'group-friendly',
    title: '🤗 Dostça Gruplama',
    emoji: '🤗',
    shortDescription: 'Kolay toplanan sayıları grupla!',
    fullExplanation: 'Birden fazla sayı toplarken, kolay toplananları grupla! 25+48+75+52 için: 25+75=100, 48+52=100, 100+100=200. Dost sayıları bul, işin kolaylaşsın!',
    steps: [
      '👀 100 veya 1000 yapan çiftleri bul',
      '🤝 Onları birlikte topla',
      '➕ Sonuçları birleştir',
      '🎊 Çok kolay oldu!'
    ],
    examples: [
      { problem: '25 + 48 + 75 + 52 = ?', solution: '200', explanation: '25+75=100, 48+52=100, 100+100=200 🤗' },
      { problem: '36 + 87 + 64 + 13 = ?', solution: '200', explanation: '36+64=100, 87+13=100, 100+100=200 🤗' },
      { problem: '125 + 238 + 75 + 62 = ?', solution: '500', explanation: '125+75=200, 238+62=300, 200+300=500 🤗' }
    ],
    practiceProblems: [
      { question: '45 + 67 + 55 + 33 = ?', answer: 200, hint: '45+55=100, 67+33=100' },
      { question: '28 + 84 + 72 + 16 = ?', answer: 200, hint: '28+72=100, 84+16=100' },
      { question: '150 + 275 + 50 + 25 = ?', answer: 500, hint: '150+50=200, 275+25=300' },
      { question: '340 + 185 + 60 + 15 = ?', answer: 600, hint: '340+60=400, 185+15=200' }
    ],
    color: 'from-cyan-400 to-cyan-600'
  }
];

// ============================================
// ÇIKARMA TAKTİKLERİ
// ============================================
export const cikarmaTricks: Trick[] = [
  {
    id: 'sub-9',
    title: '9 Çıkarma Taktiği',
    emoji: '9️⃣',
    shortDescription: '9 çıkarmak için 10 çıkar, 1 ekle!',
    fullExplanation: '9 çıkarmak da çok kolay! 10 çıkar (onlar basamağını 1 azalt), sonra 1 geri ekle. Çünkü 9, 10\'dan 1 eksik!',
    steps: [
      'Sayıdan 10 çıkar (onlar basamağını 1 azalt)',
      'Sonra 1 ekle',
      'İşte sonuç!'
    ],
    examples: [
      { problem: '43 - 9 = ?', solution: '34', explanation: '43 - 10 = 33, sonra 33 + 1 = 34' },
      { problem: '75 - 9 = ?', solution: '66', explanation: '75 - 10 = 65, sonra 65 + 1 = 66' },
      { problem: '52 - 9 = ?', solution: '43', explanation: '52 - 10 = 42, sonra 42 + 1 = 43' }
    ],
    practiceProblems: [
      { question: '64 - 9 = ?', answer: 55, hint: '64 - 10 = 54, sonra 1 ekle' },
      { question: '81 - 9 = ?', answer: 72, hint: '81 - 10 = 71, sonra 1 ekle' },
      { question: '37 - 9 = ?', answer: 28, hint: '37 - 10 = 27, sonra 1 ekle' },
      { question: '56 - 9 = ?', answer: 47, hint: '56 - 10 = 46, sonra 1 ekle' }
    ],
    color: 'from-red-400 to-red-600'
  },
  {
    id: 'count-up',
    title: 'Yukarı Sayma Taktiği',
    emoji: '⬆️',
    shortDescription: 'Küçük sayıdan büyüğe kadar say!',
    fullExplanation: 'Çıkarma yaparken, küçük sayıdan büyük sayıya kadar kaç adım olduğunu sayabilirsin. Bu özellikle yakın sayılar için çok işe yarar!',
    steps: [
      'Küçük sayıdan başla',
      'Büyük sayıya kadar kaç adım olduğunu say',
      'Saydığın adım sayısı cevap!'
    ],
    examples: [
      { problem: '15 - 12 = ?', solution: '3', explanation: '12\'den 15\'e: 13, 14, 15 = 3 adım' },
      { problem: '23 - 19 = ?', solution: '4', explanation: '19\'dan 23\'e: 20, 21, 22, 23 = 4 adım' },
      { problem: '41 - 38 = ?', solution: '3', explanation: '38\'den 41\'e: 39, 40, 41 = 3 adım' }
    ],
    practiceProblems: [
      { question: '17 - 13 = ?', answer: 4, hint: '13\'ten 17\'ye kaç adım?' },
      { question: '32 - 28 = ?', answer: 4, hint: '28\'den 32\'ye kaç adım?' },
      { question: '55 - 51 = ?', answer: 4, hint: '51\'den 55\'e kaç adım?' },
      { question: '24 - 19 = ?', answer: 5, hint: '19\'dan 24\'e kaç adım?' }
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'sub-from-10',
    title: '10\'dan Çıkarma',
    emoji: '🔟',
    shortDescription: '10\'dan çıkarmayı ezberle!',
    fullExplanation: '10\'dan çıkarmayı ezberle: 10-1=9, 10-2=8, 10-3=7... Bu çok işe yarar! Büyük sayılardan çıkarırken de kullanabilirsin.',
    steps: [
      '10\'dan çıkarma eşlerini ezberle: 10-1=9, 10-2=8...',
      'Büyük sayılar için onlar basamağını kullan',
      'Örnek: 40-7 için, 10-7=3, yani 30+3=33'
    ],
    examples: [
      { problem: '10 - 7 = ?', solution: '3', explanation: '10 - 7 = 3 (ezberle!)' },
      { problem: '30 - 6 = ?', solution: '24', explanation: '10 - 6 = 4, yani 20 + 4 = 24' },
      { problem: '50 - 8 = ?', solution: '42', explanation: '10 - 8 = 2, yani 40 + 2 = 42' }
    ],
    practiceProblems: [
      { question: '10 - 4 = ?', answer: 6, hint: '10 - 4 = ?' },
      { question: '20 - 7 = ?', answer: 13, hint: '10 - 7 = 3, yani 10 + 3' },
      { question: '40 - 5 = ?', answer: 35, hint: '10 - 5 = 5, yani 30 + 5' },
      { question: '60 - 3 = ?', answer: 57, hint: '10 - 3 = 7, yani 50 + 7' }
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'sub-check',
    title: 'Toplama ile Kontrol',
    emoji: '✅',
    shortDescription: 'Çıkarmanı toplama ile kontrol et!',
    fullExplanation: 'Çıkarma ve toplama kardeş işlemler! Sonucu kontrol etmek için çıkardığın sayı ile sonucu topla. İlk sayıyı bulmalısın!',
    steps: [
      'Çıkarma işlemini yap',
      'Sonucu çıkardığın sayıyla topla',
      'İlk sayıyı buluyorsan doğru!'
    ],
    examples: [
      { problem: '15 - 7 = 8', solution: 'Kontrol: 8 + 7 = 15 ✓', explanation: '8 + 7 = 15, başladığımız sayı. Doğru!' },
      { problem: '23 - 9 = 14', solution: 'Kontrol: 14 + 9 = 23 ✓', explanation: '14 + 9 = 23, başladığımız sayı. Doğru!' }
    ],
    practiceProblems: [
      { question: '18 - 5 = ?', answer: 13, hint: 'Sonucu bul, sonra 13 + 5 = 18 mi kontrol et' },
      { question: '27 - 8 = ?', answer: 19, hint: 'Sonucu bul, sonra 19 + 8 = 27 mi kontrol et' },
      { question: '34 - 6 = ?', answer: 28, hint: 'Sonucu bul, sonra 28 + 6 = 34 mü kontrol et' },
      { question: '45 - 7 = ?', answer: 38, hint: 'Sonucu bul, sonra 38 + 7 = 45 mi kontrol et' }
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'sub-8',
    title: '8 Çıkarma Taktiği',
    emoji: '8️⃣',
    shortDescription: '8 çıkarmak için 10 çıkar, 2 ekle!',
    fullExplanation: '9 gibi, 8 için de 10 kullan! 10 çıkar, sonra 2 geri ekle. Çünkü 8, 10\'dan 2 eksik!',
    steps: [
      'Sayıdan 10 çıkar (onlar basamağını 1 azalt)',
      'Sonra 2 ekle',
      'İşte sonuç!'
    ],
    examples: [
      { problem: '53 - 8 = ?', solution: '45', explanation: '53 - 10 = 43, sonra 43 + 2 = 45' },
      { problem: '74 - 8 = ?', solution: '66', explanation: '74 - 10 = 64, sonra 64 + 2 = 66' },
      { problem: '41 - 8 = ?', solution: '33', explanation: '41 - 10 = 31, sonra 31 + 2 = 33' }
    ],
    practiceProblems: [
      { question: '62 - 8 = ?', answer: 54, hint: '62 - 10 = 52, sonra 2 ekle' },
      { question: '85 - 8 = ?', answer: 77, hint: '85 - 10 = 75, sonra 2 ekle' },
      { question: '33 - 8 = ?', answer: 25, hint: '33 - 10 = 23, sonra 2 ekle' },
      { question: '46 - 8 = ?', answer: 38, hint: '46 - 10 = 36, sonra 2 ekle' }
    ],
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 'break-apart-sub',
    title: 'Parçalayarak Çıkar',
    emoji: '✂️',
    shortDescription: 'Büyük sayıyı parçalara ayırarak çıkar!',
    fullExplanation: 'Çıkaracağın sayıyı parçalara ayır! Örneğin 53-27 için, önce 20 çıkar, sonra 7 çıkar. Daha kolay olur!',
    steps: [
      'Çıkaracağın sayıyı onlar ve birler olarak ayır',
      'Önce onları çıkar',
      'Sonra birleri çıkar',
      'Sonuç hazır!'
    ],
    examples: [
      { problem: '65 - 28 = ?', solution: '37', explanation: '65 - 20 = 45, sonra 45 - 8 = 37' },
      { problem: '82 - 35 = ?', solution: '47', explanation: '82 - 30 = 52, sonra 52 - 5 = 47' },
      { problem: '74 - 47 = ?', solution: '27', explanation: '74 - 40 = 34, sonra 34 - 7 = 27' }
    ],
    practiceProblems: [
      { question: '56 - 29 = ?', answer: 27, hint: '56 - 20 = 36, sonra - 9' },
      { question: '71 - 34 = ?', answer: 37, hint: '71 - 30 = 41, sonra - 4' },
      { question: '83 - 46 = ?', answer: 37, hint: '83 - 40 = 43, sonra - 6' },
      { question: '95 - 58 = ?', answer: 37, hint: '95 - 50 = 45, sonra - 8' }
    ],
    color: 'from-teal-400 to-teal-600'
  },
  {
    id: 'round-sub',
    title: 'Yuvarla ve Çıkar',
    emoji: '🔄',
    shortDescription: 'Yuvarla, çıkar, düzelt!',
    fullExplanation: 'Çıkaracağın sayıyı yuvarlak sayıya tamamla, çıkar, sonra düzelt. Örneğin 54-19 için, 54-20=34, sonra 34+1=35.',
    steps: [
      'Çıkaracağın sayıyı en yakın onluğa yuvarla',
      'Çıkarma işlemini yap',
      'Ne kadar fazla çıkardığını geri ekle',
      'Sonuç hazır!'
    ],
    examples: [
      { problem: '54 - 19 = ?', solution: '35', explanation: '54 - 20 = 34, sonra 34 + 1 = 35' },
      { problem: '73 - 28 = ?', solution: '45', explanation: '73 - 30 = 43, sonra 43 + 2 = 45' },
      { problem: '81 - 37 = ?', solution: '44', explanation: '81 - 40 = 41, sonra 41 + 3 = 44' }
    ],
    practiceProblems: [
      { question: '62 - 19 = ?', answer: 43, hint: '62 - 20 = 42, sonra + 1' },
      { question: '85 - 28 = ?', answer: 57, hint: '85 - 30 = 55, sonra + 2' },
      { question: '47 - 18 = ?', answer: 29, hint: '47 - 20 = 27, sonra + 2' },
      { question: '93 - 47 = ?', answer: 46, hint: '93 - 50 = 43, sonra + 3' }
    ],
    color: 'from-indigo-400 to-indigo-600'
  },
  // ============================================
  // 2 BASAMAKLI ÇIKARMA TEKNİKLERİ
  // ============================================
  {
    id: 'left-to-right-sub',
    title: '🚀 Soldan Sağa Çıkar',
    emoji: '👈',
    shortDescription: 'Büyük basamaktan başla!',
    fullExplanation: 'Çıkarmada da soldan sağa gidebilirsin! 74-38 için: 70-30=40, 4-8 yapamam, o zaman 40\'tan 4 al: 36, sonra +4=40-8+4=36. Veya daha kolay: 74-40+2=36!',
    steps: [
      '🔢 Önce ONLAR basamağını çıkar',
      '🔢 Sonra BİRLER basamağını çıkar',
      '⚠️ Birler yetmiyorsa onlardan ödünç al',
      '🎉 Sonuç!'
    ],
    examples: [
      { problem: '86 - 43 = ?', solution: '43', explanation: '80-40=40, 6-3=3, 40+3=43 ✨' },
      { problem: '97 - 52 = ?', solution: '45', explanation: '90-50=40, 7-2=5, 40+5=45 ✨' },
      { problem: '78 - 35 = ?', solution: '43', explanation: '70-30=40, 8-5=3, 40+3=43 ✨' }
    ],
    practiceProblems: [
      { question: '89 - 46 = ?', answer: 43, hint: '80-40=40, 9-6=3' },
      { question: '76 - 34 = ?', answer: 42, hint: '70-30=40, 6-4=2' },
      { question: '95 - 52 = ?', answer: 43, hint: '90-50=40, 5-2=3' },
      { question: '87 - 45 = ?', answer: 42, hint: '80-40=40, 7-5=2' }
    ],
    color: 'from-amber-400 to-amber-600'
  },
  {
    id: 'jump-back',
    title: '🦘 Geri Zıplama',
    emoji: '🦘',
    shortDescription: 'Sayı doğrusunda geri zıpla!',
    fullExplanation: 'Büyük sayıdan başla, çıkardığın sayının onları kadar geri zıpla, sonra birleri kadar. 83-27 için: 83\'ten başla, -20 zıpla (63), -7 zıpla (56)!',
    steps: [
      '🏁 Büyük sayıdan başla',
      '🦘 ONLAR kadar geri zıpla',
      '🐇 BİRLER kadar küçük geri zıplamalar',
      '🎯 Vardığın yer cevap!'
    ],
    examples: [
      { problem: '83 - 27 = ?', solution: '56', explanation: '83 → -20 → 63 → -7 → 56 🦘' },
      { problem: '72 - 35 = ?', solution: '37', explanation: '72 → -30 → 42 → -5 → 37 🦘' },
      { problem: '95 - 48 = ?', solution: '47', explanation: '95 → -40 → 55 → -8 → 47 🦘' }
    ],
    practiceProblems: [
      { question: '84 - 29 = ?', answer: 55, hint: '84 → -20 → 64 → -9 → ?' },
      { question: '71 - 36 = ?', answer: 35, hint: '71 → -30 → 41 → -6 → ?' },
      { question: '93 - 47 = ?', answer: 46, hint: '93 → -40 → 53 → -7 → ?' },
      { question: '86 - 38 = ?', answer: 48, hint: '86 → -30 → 56 → -8 → ?' }
    ],
    color: 'from-lime-400 to-lime-600'
  },
  // ============================================
  // 3 BASAMAKLI ÇIKARMA TEKNİKLERİ
  // ============================================
  {
    id: 'subtract-hundreds',
    title: '💯 Yüzleri Önce Çıkar!',
    emoji: '💯',
    shortDescription: '3 basamaklı? Yüzlerden başla!',
    fullExplanation: '3 basamaklı çıkarma için yüzlerden başla! 567-234 için: 500-200=300, 60-30=30, 7-4=3. Sonuç: 333. Adım adım, hata yapmadan!',
    steps: [
      '💯 Önce YÜZLER basamağını çıkar',
      '🔟 Sonra ONLAR basamağını çıkar',
      '1️⃣ En son BİRLER basamağını çıkar',
      '➕ Hepsini birleştir!'
    ],
    examples: [
      { problem: '567 - 234 = ?', solution: '333', explanation: '500-200=300, 60-30=30, 7-4=3 → 333 💪' },
      { problem: '789 - 456 = ?', solution: '333', explanation: '700-400=300, 80-50=30, 9-6=3 → 333 💪' },
      { problem: '876 - 543 = ?', solution: '333', explanation: '800-500=300, 70-40=30, 6-3=3 → 333 💪' }
    ],
    practiceProblems: [
      { question: '685 - 342 = ?', answer: 343, hint: '600-300=300, 80-40=40, 5-2=3' },
      { question: '978 - 645 = ?', answer: 333, hint: '900-600=300, 70-40=30, 8-5=3' },
      { question: '596 - 253 = ?', answer: 343, hint: '500-200=300, 90-50=40, 6-3=3' },
      { question: '847 - 514 = ?', answer: 333, hint: '800-500=300, 40-10=30, 7-4=3' }
    ],
    color: 'from-violet-400 to-violet-600'
  },
  {
    id: 'round-down-sub',
    title: '🎯 Yüze Tamamla Çıkar',
    emoji: '🎯',
    shortDescription: 'Çıkarılacak sayıyı yuvarlayarak hesapla!',
    fullExplanation: '542-198 zor mu? 198\'i 200\'e tamamla! 542-200=342, sonra 2 geri ekle (çünkü 2 fazla çıkardık): 344!',
    steps: [
      '🎯 Çıkarılacak sayıyı en yakın YÜZE yuvarla',
      '➖ Yuvarlak sayıyı çıkar',
      '➕ Ne kadar fazla çıkardıysan geri ekle',
      '✨ Sonuç!'
    ],
    examples: [
      { problem: '542 - 198 = ?', solution: '344', explanation: '542-200=342, +2=344 (2 fazla çıkarmıştık) 🎯' },
      { problem: '635 - 297 = ?', solution: '338', explanation: '635-300=335, +3=338 (3 fazla çıkarmıştık) 🎯' },
      { problem: '724 - 396 = ?', solution: '328', explanation: '724-400=324, +4=328 (4 fazla çıkarmıştık) 🎯' }
    ],
    practiceProblems: [
      { question: '563 - 199 = ?', answer: 364, hint: '563-200=363, +1=?' },
      { question: '472 - 298 = ?', answer: 174, hint: '472-300=172, +2=?' },
      { question: '856 - 497 = ?', answer: 359, hint: '856-500=356, +3=?' },
      { question: '743 - 395 = ?', answer: 348, hint: '743-400=343, +5=?' }
    ],
    color: 'from-fuchsia-400 to-fuchsia-600'
  },
  // ============================================
  // 4 BASAMAKLI ÇIKARMA TEKNİKLERİ
  // ============================================
  {
    id: 'thousands-subtract',
    title: '🏆 Binlerden Başla!',
    emoji: '🏆',
    shortDescription: '4 basamaklı? Binlerden başla şampiyon!',
    fullExplanation: '4 basamaklı çıkarma da kolay! 5678-2345 için: 5000-2000=3000, 600-300=300, 70-40=30, 8-5=3. Sonuç: 3333!',
    steps: [
      '🏆 BİNLER basamağını çıkar',
      '💯 YÜZLER basamağını çıkar',
      '🔟 ONLAR basamağını çıkar',
      '1️⃣ BİRLER basamağını çıkar',
      '🎉 Hepsini birleştir!'
    ],
    examples: [
      { problem: '5678 - 2345 = ?', solution: '3333', explanation: '5000-2000=3000, 600-300=300, 70-40=30, 8-5=3 → 3333 🏆' },
      { problem: '8765 - 4321 = ?', solution: '4444', explanation: '8000-4000=4000, 700-300=400, 60-20=40, 5-1=4 → 4444 🏆' },
      { problem: '9876 - 5432 = ?', solution: '4444', explanation: '9000-5000=4000, 800-400=400, 70-30=40, 6-2=4 → 4444 🏆' }
    ],
    practiceProblems: [
      { question: '6789 - 3456 = ?', answer: 3333, hint: '6000-3000=3000, 700-400=300, 80-50=30, 9-6=3' },
      { question: '7654 - 3210 = ?', answer: 4444, hint: '7000-3000=4000, 600-200=400, 50-10=40, 4-0=4' },
      { question: '8765 - 5321 = ?', answer: 3444, hint: '8000-5000=3000, 700-300=400, 60-20=40, 5-1=4' },
      { question: '9543 - 6210 = ?', answer: 3333, hint: '9000-6000=3000, 500-200=300, 40-10=30, 3-0=3' }
    ],
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 'thousand-complement',
    title: '🎪 1000\'e Tamamla!',
    emoji: '🎪',
    shortDescription: '1000\'den çıkarmayı öğren, her yerde kullan!',
    fullExplanation: '1000-648 nasıl yapılır? Sihirli formül: Her rakamı 9\'dan çıkar, son rakamı 10\'dan! 9-6=3, 9-4=5, 10-8=2 → 352! Bu yönteme "tamamlayıcı" denir.',
    steps: [
      '🎯 Yüzler rakamını 9\'dan çıkar',
      '🎯 Onlar rakamını 9\'dan çıkar',
      '🎯 Birler rakamını 10\'dan çıkar',
      '✨ 1000\'e tamamlayıcıyı buldun!'
    ],
    examples: [
      { problem: '1000 - 648 = ?', solution: '352', explanation: '9-6=3, 9-4=5, 10-8=2 → 352 🎪' },
      { problem: '1000 - 237 = ?', solution: '763', explanation: '9-2=7, 9-3=6, 10-7=3 → 763 🎪' },
      { problem: '1000 - 456 = ?', solution: '544', explanation: '9-4=5, 9-5=4, 10-6=4 → 544 🎪' }
    ],
    practiceProblems: [
      { question: '1000 - 372 = ?', answer: 628, hint: '9-3=6, 9-7=2, 10-2=8' },
      { question: '1000 - 519 = ?', answer: 481, hint: '9-5=4, 9-1=8, 10-9=1' },
      { question: '1000 - 846 = ?', answer: 154, hint: '9-8=1, 9-4=5, 10-6=4' },
      { question: '1000 - 273 = ?', answer: 727, hint: '9-2=7, 9-7=2, 10-3=7' }
    ],
    color: 'from-pink-400 to-pink-600'
  }
];

// ============================================
// ÇARPMA TAKTİKLERİ
// ============================================
export const carpmaTricks: Trick[] = [
  {
    id: 'mult-9-fingers',
    title: '9 ile Çarpma - Parmak Taktiği',
    emoji: '🖐️',
    shortDescription: 'Parmaklarınla 9 çarpım tablosunu bul!',
    fullExplanation: 'Bu sihirli taktikle 9 çarpım tablosunu parmaklarınla yapabilirsin! İki elini aç, çarptığın sayı kadar parmağı kapat. Sol taraftaki parmaklar onlar, sağ taraftakiler birler basamağı!',
    steps: [
      '10 parmağını aç',
      'Çarptığın sayıncı parmağı kapat (soldan sayarak)',
      'Kapalı parmağın solundaki parmaklar = ONLAR basamağı',
      'Sağındaki parmaklar = BİRLER basamağı'
    ],
    examples: [
      { problem: '9 × 3 = ?', solution: '27', explanation: '3. parmağı kapat → Sol: 2 parmak, Sağ: 7 parmak = 27' },
      { problem: '9 × 7 = ?', solution: '63', explanation: '7. parmağı kapat → Sol: 6 parmak, Sağ: 3 parmak = 63' },
      { problem: '9 × 4 = ?', solution: '36', explanation: '4. parmağı kapat → Sol: 3 parmak, Sağ: 6 parmak = 36' }
    ],
    practiceProblems: [
      { question: '9 × 5 = ?', answer: 45, hint: '5. parmağı kapat: Sol 4, Sağ 5' },
      { question: '9 × 8 = ?', answer: 72, hint: '8. parmağı kapat: Sol 7, Sağ 2' },
      { question: '9 × 6 = ?', answer: 54, hint: '6. parmağı kapat: Sol 5, Sağ 4' },
      { question: '9 × 9 = ?', answer: 81, hint: '9. parmağı kapat: Sol 8, Sağ 1' }
    ],
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 'mult-9-sum',
    title: '9 ile Çarpma - Rakam Toplamı',
    emoji: '9️⃣',
    shortDescription: '9 ile çarpımda rakamlar toplamı 9!',
    fullExplanation: '9 ile çarpım sonuçlarının rakamları toplamı her zaman 9 eder! 18 → 1+8=9, 27 → 2+7=9, 36 → 3+6=9... Bu kontrol için harika!',
    steps: [
      '9 ile çarp',
      'Sonucun rakamlarını topla',
      'Toplam 9 olmalı, yoksa hata var!'
    ],
    examples: [
      { problem: '9 × 4 = 36', solution: '3 + 6 = 9 ✓', explanation: '36\'nın rakamları: 3 + 6 = 9. Doğru!' },
      { problem: '9 × 7 = 63', solution: '6 + 3 = 9 ✓', explanation: '63\'ün rakamları: 6 + 3 = 9. Doğru!' },
      { problem: '9 × 12 = 108', solution: '1 + 0 + 8 = 9 ✓', explanation: '108\'in rakamları: 1 + 0 + 8 = 9. Doğru!' }
    ],
    practiceProblems: [
      { question: '9 × 6 = ?', answer: 54, hint: 'Sonucun rakamları toplamı 9 olmalı' },
      { question: '9 × 8 = ?', answer: 72, hint: '7 + 2 = 9' },
      { question: '9 × 11 = ?', answer: 99, hint: '9 + 9 = 18, 1 + 8 = 9' },
      { question: '9 × 3 = ?', answer: 27, hint: '2 + 7 = 9' }
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'mult-5',
    title: '5 ile Çarpma Taktiği',
    emoji: '5️⃣',
    shortDescription: 'Yarıya böl, 10 ile çarp!',
    fullExplanation: '5 ile çarpmak için sayının yarısını al, sonra 10 ile çarp (sonuna 0 ekle). Örnek: 8×5 = 8÷2×10 = 4×10 = 40',
    steps: [
      'Sayıyı 2\'ye böl',
      'Sonuca 10 ile çarp (sonuna 0 ekle)',
      'Sayı tek ise: yarımı al, sonuna 5 ekle'
    ],
    examples: [
      { problem: '6 × 5 = ?', solution: '30', explanation: '6 ÷ 2 = 3, sonra 3 × 10 = 30' },
      { problem: '8 × 5 = ?', solution: '40', explanation: '8 ÷ 2 = 4, sonra 4 × 10 = 40' },
      { problem: '7 × 5 = ?', solution: '35', explanation: '7 tek, yarısı 3.5, yani 35' }
    ],
    practiceProblems: [
      { question: '12 × 5 = ?', answer: 60, hint: '12 ÷ 2 = 6, sonra 6 × 10' },
      { question: '14 × 5 = ?', answer: 70, hint: '14 ÷ 2 = 7, sonra 7 × 10' },
      { question: '9 × 5 = ?', answer: 45, hint: '9 tek, 4 + 5 = 45' },
      { question: '16 × 5 = ?', answer: 80, hint: '16 ÷ 2 = 8, sonra 8 × 10' }
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'mult-11',
    title: '11 ile Çarpma Taktiği',
    emoji: '1️⃣1️⃣',
    shortDescription: 'Rakamları ayır, ortaya toplamı koy!',
    fullExplanation: '2 basamaklı sayıları 11 ile çarpmak süper kolay! Rakamları ayır, ortaya rakamların toplamını koy. Örnek: 35 × 11 = 3_(3+5)_5 = 385',
    steps: [
      'İlk ve son rakamı ayır',
      'Ortaya iki rakamın toplamını yaz',
      'Toplam 10\'dan büyükse, elde var!'
    ],
    examples: [
      { problem: '23 × 11 = ?', solution: '253', explanation: '2 ve 3\'ü ayır, ortaya 2+3=5 koy: 253' },
      { problem: '45 × 11 = ?', solution: '495', explanation: '4 ve 5\'i ayır, ortaya 4+5=9 koy: 495' },
      { problem: '36 × 11 = ?', solution: '396', explanation: '3 ve 6\'yı ayır, ortaya 3+6=9 koy: 396' }
    ],
    practiceProblems: [
      { question: '24 × 11 = ?', answer: 264, hint: '2_(2+4)_4 = 2_6_4' },
      { question: '53 × 11 = ?', answer: 583, hint: '5_(5+3)_3 = 5_8_3' },
      { question: '71 × 11 = ?', answer: 781, hint: '7_(7+1)_1 = 7_8_1' },
      { question: '32 × 11 = ?', answer: 352, hint: '3_(3+2)_2 = 3_5_2' }
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'mult-4',
    title: '4 ile Çarpma - Çift Çift',
    emoji: '4️⃣',
    shortDescription: 'İki kere ikiye katla!',
    fullExplanation: '4 ile çarpmak = 2 kere 2 ile çarpmak! Sayıyı önce 2 ile çarp (ikiye katla), sonra tekrar 2 ile çarp. Çok kolay!',
    steps: [
      'Sayıyı 2 ile çarp (ikiye katla)',
      'Sonucu tekrar 2 ile çarp',
      'İşte 4 ile çarpım!'
    ],
    examples: [
      { problem: '7 × 4 = ?', solution: '28', explanation: '7 × 2 = 14, sonra 14 × 2 = 28' },
      { problem: '9 × 4 = ?', solution: '36', explanation: '9 × 2 = 18, sonra 18 × 2 = 36' },
      { problem: '12 × 4 = ?', solution: '48', explanation: '12 × 2 = 24, sonra 24 × 2 = 48' }
    ],
    practiceProblems: [
      { question: '8 × 4 = ?', answer: 32, hint: '8 × 2 = 16, 16 × 2 = ?' },
      { question: '6 × 4 = ?', answer: 24, hint: '6 × 2 = 12, 12 × 2 = ?' },
      { question: '15 × 4 = ?', answer: 60, hint: '15 × 2 = 30, 30 × 2 = ?' },
      { question: '11 × 4 = ?', answer: 44, hint: '11 × 2 = 22, 22 × 2 = ?' }
    ],
    color: 'from-red-400 to-red-600'
  },
  {
    id: 'mult-2',
    title: '2 ile Çarpma - İkiye Katlama',
    emoji: '2️⃣',
    shortDescription: 'Sayıyı kendisiyle topla!',
    fullExplanation: '2 ile çarpmak = sayıyı ikiye katlamak = sayıyı kendisiyle toplamak! 7×2 = 7+7 = 14. Çok kolay!',
    steps: [
      'Sayıyı kendisiyle topla',
      'Veya sayıyı aklında iki kere say',
      'Sonuç hazır!'
    ],
    examples: [
      { problem: '8 × 2 = ?', solution: '16', explanation: '8 + 8 = 16' },
      { problem: '15 × 2 = ?', solution: '30', explanation: '15 + 15 = 30' },
      { problem: '23 × 2 = ?', solution: '46', explanation: '23 + 23 = 46' }
    ],
    practiceProblems: [
      { question: '12 × 2 = ?', answer: 24, hint: '12 + 12 = ?' },
      { question: '17 × 2 = ?', answer: 34, hint: '17 + 17 = ?' },
      { question: '25 × 2 = ?', answer: 50, hint: '25 + 25 = ?' },
      { question: '36 × 2 = ?', answer: 72, hint: '36 + 36 = ?' }
    ],
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    id: 'mult-10-100',
    title: '10 ve 100 ile Çarpma',
    emoji: '🔢',
    shortDescription: 'Sağına sıfır ekle!',
    fullExplanation: '10 ile çarpmak için sayının sağına bir 0 ekle! 100 ile çarpmak için iki 0 ekle! Örnek: 7×10=70, 7×100=700',
    steps: [
      '10 ile çarpmak: Sağına 1 tane 0 ekle',
      '100 ile çarpmak: Sağına 2 tane 0 ekle',
      '1000 ile çarpmak: Sağına 3 tane 0 ekle'
    ],
    examples: [
      { problem: '6 × 10 = ?', solution: '60', explanation: '6\'nın sağına 0 ekle: 60' },
      { problem: '8 × 100 = ?', solution: '800', explanation: '8\'in sağına 00 ekle: 800' },
      { problem: '25 × 10 = ?', solution: '250', explanation: '25\'in sağına 0 ekle: 250' }
    ],
    practiceProblems: [
      { question: '9 × 10 = ?', answer: 90, hint: '9\'un sağına 0 ekle' },
      { question: '7 × 100 = ?', answer: 700, hint: '7\'nin sağına 00 ekle' },
      { question: '15 × 10 = ?', answer: 150, hint: '15\'in sağına 0 ekle' },
      { question: '4 × 100 = ?', answer: 400, hint: '4\'ün sağına 00 ekle' }
    ],
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 'mult-3',
    title: '3 ile Çarpma Taktiği',
    emoji: '3️⃣',
    shortDescription: 'İkiye katla, bir tane daha ekle!',
    fullExplanation: '3 ile çarpmak = 2 ile çarpıp, bir tane daha eklemek! 7×3 = 7×2 + 7 = 14 + 7 = 21',
    steps: [
      'Sayıyı 2 ile çarp (ikiye katla)',
      'Sonuca orijinal sayıyı ekle',
      'Sonuç hazır!'
    ],
    examples: [
      { problem: '8 × 3 = ?', solution: '24', explanation: '8 × 2 = 16, sonra 16 + 8 = 24' },
      { problem: '7 × 3 = ?', solution: '21', explanation: '7 × 2 = 14, sonra 14 + 7 = 21' },
      { problem: '12 × 3 = ?', solution: '36', explanation: '12 × 2 = 24, sonra 24 + 12 = 36' }
    ],
    practiceProblems: [
      { question: '6 × 3 = ?', answer: 18, hint: '6 × 2 = 12, sonra + 6' },
      { question: '9 × 3 = ?', answer: 27, hint: '9 × 2 = 18, sonra + 9' },
      { question: '11 × 3 = ?', answer: 33, hint: '11 × 2 = 22, sonra + 11' },
      { question: '15 × 3 = ?', answer: 45, hint: '15 × 2 = 30, sonra + 15' }
    ],
    color: 'from-pink-400 to-pink-600'
  },
  {
    id: 'mult-6',
    title: '6 ile Çarpma Taktiği',
    emoji: '6️⃣',
    shortDescription: '3 ile çarp, sonra ikiye katla!',
    fullExplanation: '6 = 3 × 2, bu yüzden 6 ile çarpmak = önce 3 ile çarp, sonra sonucu ikiye katla! Veya 5 ile çarp, sonra sayıyı ekle.',
    steps: [
      'Sayıyı 3 ile çarp',
      'Sonucu 2 ile çarp (ikiye katla)',
      'Veya: 5 ile çarp, sonra sayıyı ekle'
    ],
    examples: [
      { problem: '7 × 6 = ?', solution: '42', explanation: '7 × 3 = 21, sonra 21 × 2 = 42' },
      { problem: '8 × 6 = ?', solution: '48', explanation: '8 × 5 = 40, sonra 40 + 8 = 48' },
      { problem: '9 × 6 = ?', solution: '54', explanation: '9 × 3 = 27, sonra 27 × 2 = 54' }
    ],
    practiceProblems: [
      { question: '4 × 6 = ?', answer: 24, hint: '4 × 3 = 12, sonra × 2' },
      { question: '5 × 6 = ?', answer: 30, hint: '5 × 3 = 15, sonra × 2' },
      { question: '12 × 6 = ?', answer: 72, hint: '12 × 3 = 36, sonra × 2' },
      { question: '7 × 6 = ?', answer: 42, hint: '7 × 5 = 35, sonra + 7' }
    ],
    color: 'from-violet-400 to-violet-600'
  },
  // ============================================
  // 2 BASAMAKLI ÇARPMA TEKNİKLERİ
  // ============================================
  {
    id: 'mult-by-parts',
    title: '🧩 Parçalara Ayır Çarp!',
    emoji: '🧩',
    shortDescription: '2 basamaklı sayıyı parçala!',
    fullExplanation: '23×4 zor mu? 23\'ü parçala: 20×4=80, 3×4=12, 80+12=92! Her sayıyı basamaklarına ayırarak çarp, sonra topla.',
    steps: [
      '🔢 2 basamaklı sayıyı ONLAR ve BİRLER olarak ayır',
      '✖️ Her parçayı ayrı ayrı çarp',
      '➕ Sonuçları topla',
      '🎉 Cevap hazır!'
    ],
    examples: [
      { problem: '23 × 4 = ?', solution: '92', explanation: '20×4=80, 3×4=12, 80+12=92 🧩' },
      { problem: '45 × 3 = ?', solution: '135', explanation: '40×3=120, 5×3=15, 120+15=135 🧩' },
      { problem: '67 × 2 = ?', solution: '134', explanation: '60×2=120, 7×2=14, 120+14=134 🧩' }
    ],
    practiceProblems: [
      { question: '32 × 4 = ?', answer: 128, hint: '30×4=120, 2×4=8' },
      { question: '54 × 3 = ?', answer: 162, hint: '50×3=150, 4×3=12' },
      { question: '28 × 5 = ?', answer: 140, hint: '20×5=100, 8×5=40' },
      { question: '46 × 4 = ?', answer: 184, hint: '40×4=160, 6×4=24' }
    ],
    color: 'from-amber-400 to-amber-600'
  },
  {
    id: 'mult-near-tens',
    title: '🎯 Onlara Yakın Çarpma',
    emoji: '🎯',
    shortDescription: '19, 21, 29 gibi sayıları kolay çarp!',
    fullExplanation: '19×6 zor mu? 19 = 20-1, yani 20×6=120, sonra 1×6=6 çıkar: 114! 21×6 için: 20×6=120, +6=126!',
    steps: [
      '🎯 Sayıyı en yakın ONLUĞA yuvarla',
      '✖️ Yuvarlak sayıyla çarp',
      '➕ veya ➖ Farkı ekle veya çıkar',
      '✨ Sonuç!'
    ],
    examples: [
      { problem: '19 × 6 = ?', solution: '114', explanation: '20×6=120, -6=114 (1 fazla eklemiştik) 🎯' },
      { problem: '21 × 7 = ?', solution: '147', explanation: '20×7=140, +7=147 (1 eksik eklemiştik) 🎯' },
      { problem: '29 × 4 = ?', solution: '116', explanation: '30×4=120, -4=116 (1 fazla eklemiştik) 🎯' }
    ],
    practiceProblems: [
      { question: '19 × 5 = ?', answer: 95, hint: '20×5=100, -5=?' },
      { question: '21 × 8 = ?', answer: 168, hint: '20×8=160, +8=?' },
      { question: '31 × 6 = ?', answer: 186, hint: '30×6=180, +6=?' },
      { question: '29 × 3 = ?', answer: 87, hint: '30×3=90, -3=?' }
    ],
    color: 'from-lime-400 to-lime-600'
  },
  {
    id: 'squaring-near-50',
    title: '🎲 50\'ye Yakın Kareleme',
    emoji: '🎲',
    shortDescription: '48², 52² gibi hesapları hızlı yap!',
    fullExplanation: '50\'ye yakın sayıların karesini almak kolay! 48² için: 50\'den fark=2, 25-2=23 (ilk kısım), 2²=4 (ikinci kısım), sonuç: 2304!',
    steps: [
      '🔢 50\'den farkı bul',
      '➕ veya ➖ 25\'e farkı ekle/çıkar → ilk iki rakam',
      '✖️ Farkın karesini al → son iki rakam',
      '🎉 Birleştir!'
    ],
    examples: [
      { problem: '48² = ?', solution: '2304', explanation: '50-48=2, 25-2=23, 2²=04 → 2304 🎲' },
      { problem: '52² = ?', solution: '2704', explanation: '52-50=2, 25+2=27, 2²=04 → 2704 🎲' },
      { problem: '47² = ?', solution: '2209', explanation: '50-47=3, 25-3=22, 3²=09 → 2209 🎲' }
    ],
    practiceProblems: [
      { question: '49² = ?', answer: 2401, hint: '50-49=1, 25-1=24, 1²=01' },
      { question: '51² = ?', answer: 2601, hint: '51-50=1, 25+1=26, 1²=01' },
      { question: '46² = ?', answer: 2116, hint: '50-46=4, 25-4=21, 4²=16' },
      { question: '53² = ?', answer: 2809, hint: '53-50=3, 25+3=28, 3²=09' }
    ],
    color: 'from-violet-400 to-violet-600'
  },
  // ============================================
  // 3 BASAMAKLI ÇARPMA TEKNİKLERİ
  // ============================================
  {
    id: 'mult-hundreds',
    title: '💯 Yüzlerle Çarpma',
    emoji: '💯',
    shortDescription: '100, 200, 300 ile çarpmak çok kolay!',
    fullExplanation: '100 ile çarpmak için sona 00 ekle! 7×100=700, 23×100=2300. 200 için: 2 ile çarp, 00 ekle! 23×200=4600',
    steps: [
      '✖️ İlk sayıyı yüzün katıyla çarp (1,2,3...)',
      '0️⃣0️⃣ Sona iki sıfır ekle',
      '🎉 Sonuç!'
    ],
    examples: [
      { problem: '45 × 100 = ?', solution: '4500', explanation: '45\'in sonuna 00 ekle: 4500 💯' },
      { problem: '23 × 200 = ?', solution: '4600', explanation: '23×2=46, sonuna 00 ekle: 4600 💯' },
      { problem: '18 × 300 = ?', solution: '5400', explanation: '18×3=54, sonuna 00 ekle: 5400 💯' }
    ],
    practiceProblems: [
      { question: '35 × 100 = ?', answer: 3500, hint: '35 + 00 = ?' },
      { question: '42 × 200 = ?', answer: 8400, hint: '42×2=84, 84 + 00 = ?' },
      { question: '15 × 400 = ?', answer: 6000, hint: '15×4=60, 60 + 00 = ?' },
      { question: '27 × 300 = ?', answer: 8100, hint: '27×3=81, 81 + 00 = ?' }
    ],
    color: 'from-fuchsia-400 to-fuchsia-600'
  },
  {
    id: 'lattice-simple',
    title: '🏗️ Basamak Basamak Çarp',
    emoji: '🏗️',
    shortDescription: '3 basamaklı çarpmanın temeli!',
    fullExplanation: '234×5 için her basamağı ayrı çarp: 200×5=1000, 30×5=150, 4×5=20. Topla: 1000+150+20=1170. Büyük sayılar da küçük parçalara bölünür!',
    steps: [
      '💯 YÜZLER × çarpan',
      '🔟 ONLAR × çarpan',
      '1️⃣ BİRLER × çarpan',
      '➕ Hepsini topla!'
    ],
    examples: [
      { problem: '234 × 5 = ?', solution: '1170', explanation: '200×5=1000, 30×5=150, 4×5=20 → 1170 🏗️' },
      { problem: '156 × 4 = ?', solution: '624', explanation: '100×4=400, 50×4=200, 6×4=24 → 624 🏗️' },
      { problem: '325 × 3 = ?', solution: '975', explanation: '300×3=900, 20×3=60, 5×3=15 → 975 🏗️' }
    ],
    practiceProblems: [
      { question: '245 × 4 = ?', answer: 980, hint: '200×4=800, 40×4=160, 5×4=20' },
      { question: '367 × 2 = ?', answer: 734, hint: '300×2=600, 60×2=120, 7×2=14' },
      { question: '428 × 3 = ?', answer: 1284, hint: '400×3=1200, 20×3=60, 8×3=24' },
      { question: '156 × 6 = ?', answer: 936, hint: '100×6=600, 50×6=300, 6×6=36' }
    ],
    color: 'from-emerald-400 to-emerald-600'
  },
  // ============================================
  // 4 BASAMAKLI ÇARPMA TEKNİKLERİ
  // ============================================
  {
    id: 'mult-thousands',
    title: '🏆 Binlerle Çarpma',
    emoji: '🏆',
    shortDescription: '1000, 2000 ile çarpmak süper kolay!',
    fullExplanation: '1000 ile çarpmak için sona 000 ekle! 7×1000=7000. 2000 için: 2 ile çarp, 000 ekle! 25×2000=50000',
    steps: [
      '✖️ İlk sayıyı binin katıyla çarp',
      '0️⃣0️⃣0️⃣ Sona üç sıfır ekle',
      '🏆 Şampiyon sonuç!'
    ],
    examples: [
      { problem: '8 × 1000 = ?', solution: '8000', explanation: '8\'in sonuna 000 ekle: 8000 🏆' },
      { problem: '25 × 2000 = ?', solution: '50000', explanation: '25×2=50, sonuna 000 ekle: 50000 🏆' },
      { problem: '34 × 3000 = ?', solution: '102000', explanation: '34×3=102, sonuna 000 ekle: 102000 🏆' }
    ],
    practiceProblems: [
      { question: '15 × 1000 = ?', answer: 15000, hint: '15 + 000 = ?' },
      { question: '23 × 2000 = ?', answer: 46000, hint: '23×2=46, 46 + 000 = ?' },
      { question: '18 × 4000 = ?', answer: 72000, hint: '18×4=72, 72 + 000 = ?' },
      { question: '36 × 5000 = ?', answer: 180000, hint: '36×5=180, 180 + 000 = ?' }
    ],
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    id: 'vedic-mult',
    title: '🧙 Vedik Çarpma Sihri',
    emoji: '🧙',
    shortDescription: 'Antik Hint matematiğinin sırrı!',
    fullExplanation: '11\'e yakın sayıları çarpmak için Vedik yöntem! 12×13: Birini diğerine ekle (12+3=15 veya 13+2=15), sonuna birlerin çarpımını ekle (2×3=6): 156!',
    steps: [
      '➕ İlk sayı + İkinci sayının birleri (veya tersi)',
      '✖️ Birleri kendi aralarında çarp',
      '🔗 Birleştir (eldeyi unutma!)',
      '🧙 Sihir tamamlandı!'
    ],
    examples: [
      { problem: '12 × 13 = ?', solution: '156', explanation: '12+3=15, 2×3=6 → 156 🧙' },
      { problem: '14 × 12 = ?', solution: '168', explanation: '14+2=16, 4×2=8 → 168 🧙' },
      { problem: '13 × 15 = ?', solution: '195', explanation: '13+5=18, 3×5=15 → 18_15 → 195 🧙' }
    ],
    practiceProblems: [
      { question: '11 × 14 = ?', answer: 154, hint: '11+4=15, 1×4=4' },
      { question: '12 × 15 = ?', answer: 180, hint: '12+5=17, 2×5=10 → elde var!' },
      { question: '13 × 14 = ?', answer: 182, hint: '13+4=17, 3×4=12 → elde var!' },
      { question: '16 × 12 = ?', answer: 192, hint: '16+2=18, 6×2=12 → elde var!' }
    ],
    color: 'from-rose-400 to-rose-600'
  }
];

// ============================================
// BÖLME TAKTİKLERİ
// ============================================
export const bolmeTricks: Trick[] = [
  {
    id: 'div-by-2',
    title: '2\'ye Bölme - Yarıya Bölme',
    emoji: '➗',
    shortDescription: 'Sayı çift mi? O zaman yarıya böl!',
    fullExplanation: '2\'ye bölmek = yarıya bölmek! Çift sayıları 2\'ye bölebilirsin. Çift sayılar 0, 2, 4, 6, 8 ile biter.',
    steps: [
      'Sayı çift mi kontrol et (0, 2, 4, 6, 8 ile bitiyor mu?)',
      'Çiftse yarıya böl',
      'Yarısını bulmak için: sayıyı 2 parçaya ayır'
    ],
    examples: [
      { problem: '24 ÷ 2 = ?', solution: '12', explanation: '24 çift (4 ile bitiyor), yarısı 12' },
      { problem: '86 ÷ 2 = ?', solution: '43', explanation: '86 çift (6 ile bitiyor), yarısı 43' },
      { problem: '50 ÷ 2 = ?', solution: '25', explanation: '50 çift (0 ile bitiyor), yarısı 25' }
    ],
    practiceProblems: [
      { question: '18 ÷ 2 = ?', answer: 9, hint: '18\'in yarısı?' },
      { question: '36 ÷ 2 = ?', answer: 18, hint: '36\'nın yarısı?' },
      { question: '64 ÷ 2 = ?', answer: 32, hint: '64\'ün yarısı?' },
      { question: '42 ÷ 2 = ?', answer: 21, hint: '42\'nin yarısı?' }
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'div-by-5',
    title: '5\'e Bölme Taktiği',
    emoji: '5️⃣',
    shortDescription: '2 ile çarp, 10\'a böl!',
    fullExplanation: '5\'e bölmek için kolay bir yol: Sayıyı 2 ile çarp, sonra 10\'a böl (son rakamı sil). Örnek: 35÷5 = 35×2÷10 = 70÷10 = 7',
    steps: [
      'Sayıyı 2 ile çarp',
      'Sonucu 10\'a böl (son rakamı sil)',
      'Veya: 5 ile biten sayılar kolayca bölünür'
    ],
    examples: [
      { problem: '45 ÷ 5 = ?', solution: '9', explanation: '45 × 2 = 90, sonra 90 ÷ 10 = 9' },
      { problem: '30 ÷ 5 = ?', solution: '6', explanation: '30 × 2 = 60, sonra 60 ÷ 10 = 6' },
      { problem: '85 ÷ 5 = ?', solution: '17', explanation: '85 × 2 = 170, sonra 170 ÷ 10 = 17' }
    ],
    practiceProblems: [
      { question: '25 ÷ 5 = ?', answer: 5, hint: '25 × 2 = 50, 50 ÷ 10 = ?' },
      { question: '40 ÷ 5 = ?', answer: 8, hint: '40 × 2 = 80, 80 ÷ 10 = ?' },
      { question: '65 ÷ 5 = ?', answer: 13, hint: '65 × 2 = 130, 130 ÷ 10 = ?' },
      { question: '55 ÷ 5 = ?', answer: 11, hint: '55 × 2 = 110, 110 ÷ 10 = ?' }
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'mult-tables-reverse',
    title: 'Çarpım Tablosu Tersten',
    emoji: '🔄',
    shortDescription: 'Çarpım tablosunu kullanarak böl!',
    fullExplanation: 'Bölme = çarpmanın tersi! 24÷6 için düşün: "6 çarpı kaç 24 eder?" Cevap 4, çünkü 6×4=24. Çarpım tablosunu iyi bil!',
    steps: [
      'Bölme sorusunu çarpmaya çevir',
      '"Bölen × ? = Bölünen" şeklinde düşün',
      'Çarpım tablosundan cevabı bul'
    ],
    examples: [
      { problem: '42 ÷ 7 = ?', solution: '6', explanation: '7 × ? = 42 → 7 × 6 = 42, cevap 6' },
      { problem: '56 ÷ 8 = ?', solution: '7', explanation: '8 × ? = 56 → 8 × 7 = 56, cevap 7' },
      { problem: '36 ÷ 9 = ?', solution: '4', explanation: '9 × ? = 36 → 9 × 4 = 36, cevap 4' }
    ],
    practiceProblems: [
      { question: '48 ÷ 6 = ?', answer: 8, hint: '6 × ? = 48' },
      { question: '63 ÷ 9 = ?', answer: 7, hint: '9 × ? = 63' },
      { question: '35 ÷ 7 = ?', answer: 5, hint: '7 × ? = 35' },
      { question: '72 ÷ 8 = ?', answer: 9, hint: '8 × ? = 72' }
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'divisibility-rules',
    title: 'Bölünebilme Kuralları',
    emoji: '📏',
    shortDescription: 'Sayı tam bölünür mü? Hemen kontrol et!',
    fullExplanation: 'Bazı sayılara bölünüp bölünmediğini hızlıca kontrol edebilirsin: 2\'ye → çift sayı, 5\'e → 0 veya 5 ile biter, 10\'a → 0 ile biter, 3\'e → rakamları toplamı 3\'e bölünür',
    steps: [
      '2\'ye bölünür mü? → Son rakam çift (0,2,4,6,8)',
      '5\'e bölünür mü? → Son rakam 0 veya 5',
      '10\'a bölünür mü? → Son rakam 0',
      '3\'e bölünür mü? → Rakamlar toplamı 3\'e bölünür'
    ],
    examples: [
      { problem: '126 bölünür mü?', solution: '2\'ye ✓ (çift), 3\'e ✓ (1+2+6=9)', explanation: '126: Son rakam 6 (çift), 2\'ye bölünür. Rakamlar toplamı 9, 3\'e bölünür.' },
      { problem: '85 bölünür mü?', solution: '5\'e ✓ (5 ile bitiyor)', explanation: '85: Son rakam 5, 5\'e tam bölünür: 85÷5=17' },
      { problem: '240 bölünür mü?', solution: '2,5,10\'a ✓', explanation: '240: 0 ile bitiyor, 2, 5 ve 10\'a bölünür!' }
    ],
    practiceProblems: [
      { question: '45 ÷ 5 = ?', answer: 9, hint: '45, 5 ile bitiyor, 5\'e bölünür' },
      { question: '84 ÷ 2 = ?', answer: 42, hint: '84 çift sayı, 2\'ye bölünür' },
      { question: '60 ÷ 10 = ?', answer: 6, hint: '60, 0 ile bitiyor, 10\'a bölünür' },
      { question: '27 ÷ 3 = ?', answer: 9, hint: '2+7=9, 9÷3=3, yani 27 3\'e bölünür' }
    ],
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 'div-by-4',
    title: '4\'e Bölme - Çift Yarılama',
    emoji: '4️⃣',
    shortDescription: 'İki kere yarıya böl!',
    fullExplanation: '4\'e bölmek = 2 kere 2\'ye bölmek! Sayıyı önce yarıya böl, sonra tekrar yarıya böl. Örnek: 48÷4 = 48÷2÷2 = 24÷2 = 12',
    steps: [
      'Sayıyı 2\'ye böl (yarıya böl)',
      'Sonucu tekrar 2\'ye böl',
      'İşte 4\'e bölme sonucu!'
    ],
    examples: [
      { problem: '48 ÷ 4 = ?', solution: '12', explanation: '48 ÷ 2 = 24, sonra 24 ÷ 2 = 12' },
      { problem: '36 ÷ 4 = ?', solution: '9', explanation: '36 ÷ 2 = 18, sonra 18 ÷ 2 = 9' },
      { problem: '64 ÷ 4 = ?', solution: '16', explanation: '64 ÷ 2 = 32, sonra 32 ÷ 2 = 16' }
    ],
    practiceProblems: [
      { question: '28 ÷ 4 = ?', answer: 7, hint: '28 ÷ 2 = 14, 14 ÷ 2 = ?' },
      { question: '52 ÷ 4 = ?', answer: 13, hint: '52 ÷ 2 = 26, 26 ÷ 2 = ?' },
      { question: '80 ÷ 4 = ?', answer: 20, hint: '80 ÷ 2 = 40, 40 ÷ 2 = ?' },
      { question: '44 ÷ 4 = ?', answer: 11, hint: '44 ÷ 2 = 22, 22 ÷ 2 = ?' }
    ],
    color: 'from-teal-400 to-teal-600'
  },
  {
    id: 'div-by-10',
    title: '10\'a Bölme - Sıfır Silme',
    emoji: '🔟',
    shortDescription: 'Son sıfırı sil!',
    fullExplanation: '10\'a bölmek çok kolay! Sayının sonundaki 0\'ı sil. Sonda 0 yoksa ondalıklı olur. Örnek: 70÷10=7, 85÷10=8.5',
    steps: [
      'Sayının sonunda 0 var mı bak',
      'Varsa 0\'ı sil',
      'Yoksa sayıyı 10 ile bölmek ondalıklı sonuç verir'
    ],
    examples: [
      { problem: '50 ÷ 10 = ?', solution: '5', explanation: '50\'nin sonundaki 0\'ı sil: 5' },
      { problem: '120 ÷ 10 = ?', solution: '12', explanation: '120\'nin sonundaki 0\'ı sil: 12' },
      { problem: '300 ÷ 10 = ?', solution: '30', explanation: '300\'ün sonundaki 0\'ı sil: 30' }
    ],
    practiceProblems: [
      { question: '80 ÷ 10 = ?', answer: 8, hint: 'Sondaki 0\'ı sil' },
      { question: '150 ÷ 10 = ?', answer: 15, hint: 'Sondaki 0\'ı sil' },
      { question: '240 ÷ 10 = ?', answer: 24, hint: 'Sondaki 0\'ı sil' },
      { question: '90 ÷ 10 = ?', answer: 9, hint: 'Sondaki 0\'ı sil' }
    ],
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    id: 'half-half',
    title: 'Yarım Yarım Böl',
    emoji: '➗',
    shortDescription: 'Büyük sayıları adım adım yarıla!',
    fullExplanation: 'Büyük sayıları bölmek zor mu? Yarılayarak küçült! 96÷8 için: 96÷2=48, 48÷2=24, 24÷2=12. 3 kere yarıladık = 8\'e böldük!',
    steps: [
      'Böleni kaç kere yarılayabileceğini bul',
      '4 = 2×2 (2 kere yarıla)',
      '8 = 2×2×2 (3 kere yarıla)',
      'Bölüneni o kadar kere yarıla'
    ],
    examples: [
      { problem: '96 ÷ 8 = ?', solution: '12', explanation: '96÷2=48, 48÷2=24, 24÷2=12 (3 kere yarıladık)' },
      { problem: '72 ÷ 8 = ?', solution: '9', explanation: '72÷2=36, 36÷2=18, 18÷2=9 (3 kere yarıladık)' },
      { problem: '64 ÷ 8 = ?', solution: '8', explanation: '64÷2=32, 32÷2=16, 16÷2=8 (3 kere yarıladık)' }
    ],
    practiceProblems: [
      { question: '56 ÷ 8 = ?', answer: 7, hint: '56÷2=28, 28÷2=14, 14÷2=?' },
      { question: '48 ÷ 8 = ?', answer: 6, hint: '48÷2=24, 24÷2=12, 12÷2=?' },
      { question: '88 ÷ 8 = ?', answer: 11, hint: '88÷2=44, 44÷2=22, 22÷2=?' },
      { question: '40 ÷ 8 = ?', answer: 5, hint: '40÷2=20, 20÷2=10, 10÷2=?' }
    ],
    color: 'from-rose-400 to-rose-600'
  },
  // ============================================
  // 2 BASAMAKLI BÖLME TEKNİKLERİ
  // ============================================
  {
    id: 'div-chunks',
    title: '🍰 Parçalara Ayırarak Böl',
    emoji: '🍰',
    shortDescription: 'Büyük sayıyı parçalara ayır!',
    fullExplanation: '84÷4 zor mu? 84\'ü parçala: 80÷4=20, 4÷4=1, 20+1=21! Her parçayı ayrı böl, sonra topla.',
    steps: [
      '🍰 Sayıyı kolay bölünen parçalara ayır',
      '➗ Her parçayı ayrı ayrı böl',
      '➕ Sonuçları topla',
      '🎉 Cevap hazır!'
    ],
    examples: [
      { problem: '84 ÷ 4 = ?', solution: '21', explanation: '80÷4=20, 4÷4=1, 20+1=21 🍰' },
      { problem: '96 ÷ 6 = ?', solution: '16', explanation: '60÷6=10, 36÷6=6, 10+6=16 🍰' },
      { problem: '72 ÷ 3 = ?', solution: '24', explanation: '60÷3=20, 12÷3=4, 20+4=24 🍰' }
    ],
    practiceProblems: [
      { question: '85 ÷ 5 = ?', answer: 17, hint: '50÷5=10, 35÷5=7, 10+7=?' },
      { question: '78 ÷ 6 = ?', answer: 13, hint: '60÷6=10, 18÷6=3, 10+3=?' },
      { question: '92 ÷ 4 = ?', answer: 23, hint: '80÷4=20, 12÷4=3, 20+3=?' },
      { question: '84 ÷ 7 = ?', answer: 12, hint: '70÷7=10, 14÷7=2, 10+2=?' }
    ],
    color: 'from-amber-400 to-amber-600'
  },
  {
    id: 'div-by-estimation',
    title: '🎯 Tahmin Et ve Böl',
    emoji: '🎯',
    shortDescription: 'Önce tahmin et, sonra düzelt!',
    fullExplanation: '91÷7 için düşün: 7×10=70, 7×13=91. Cevap 13! Çarpım tablosunu tersten kullanarak tahmin yap.',
    steps: [
      '🤔 "Bölen × ? = Bölünen" diye düşün',
      '📊 En yakın çarpımı tahmin et',
      '✅ Kontrol et: doğru mu?',
      '🎯 Hedefi buldun!'
    ],
    examples: [
      { problem: '91 ÷ 7 = ?', solution: '13', explanation: '7×13=91, cevap 13 🎯' },
      { problem: '84 ÷ 6 = ?', solution: '14', explanation: '6×14=84, cevap 14 🎯' },
      { problem: '96 ÷ 8 = ?', solution: '12', explanation: '8×12=96, cevap 12 🎯' }
    ],
    practiceProblems: [
      { question: '78 ÷ 6 = ?', answer: 13, hint: '6×?=78, 6×13=?' },
      { question: '85 ÷ 5 = ?', answer: 17, hint: '5×?=85, 5×17=?' },
      { question: '92 ÷ 4 = ?', answer: 23, hint: '4×?=92, 4×23=?' },
      { question: '98 ÷ 7 = ?', answer: 14, hint: '7×?=98, 7×14=?' }
    ],
    color: 'from-lime-400 to-lime-600'
  },
  // ============================================
  // 3 BASAMAKLI BÖLME TEKNİKLERİ
  // ============================================
  {
    id: 'div-hundreds',
    title: '💯 Yüzleri Önce Böl',
    emoji: '💯',
    shortDescription: '3 basamaklı? Yüzlerden başla!',
    fullExplanation: '369÷3 için: 300÷3=100, 60÷3=20, 9÷3=3. Topla: 123! Basamak basamak böl, sonra topla.',
    steps: [
      '💯 YÜZLER basamağını böl',
      '🔟 ONLAR basamağını böl',
      '1️⃣ BİRLER basamağını böl',
      '➕ Hepsini topla!'
    ],
    examples: [
      { problem: '369 ÷ 3 = ?', solution: '123', explanation: '300÷3=100, 60÷3=20, 9÷3=3 → 123 💯' },
      { problem: '848 ÷ 4 = ?', solution: '212', explanation: '800÷4=200, 40÷4=10, 8÷4=2 → 212 💯' },
      { problem: '555 ÷ 5 = ?', solution: '111', explanation: '500÷5=100, 50÷5=10, 5÷5=1 → 111 💯' }
    ],
    practiceProblems: [
      { question: '486 ÷ 6 = ?', answer: 81, hint: '480÷6=80, 6÷6=1' },
      { question: '728 ÷ 8 = ?', answer: 91, hint: '720÷8=90, 8÷8=1' },
      { question: '639 ÷ 9 = ?', answer: 71, hint: '630÷9=70, 9÷9=1' },
      { question: '455 ÷ 7 = ?', answer: 65, hint: '420÷7=60, 35÷7=5' }
    ],
    color: 'from-violet-400 to-violet-600'
  },
  {
    id: 'div-by-breaking',
    title: '🔨 Parçala ve Fethet!',
    emoji: '🔨',
    shortDescription: 'Zor bölmeyi kolay parçalara ayır!',
    fullExplanation: '324÷12 zor mu? 12=6×2, yani önce 2\'ye böl: 324÷2=162, sonra 6\'ya böl: 162÷6=27! Böleni de parçalayabilirsin.',
    steps: [
      '🔍 Böleni çarpanlarına ayır',
      '➗ İlk çarpana böl',
      '➗ Sonra ikinci çarpana böl',
      '🎉 Sonuç!'
    ],
    examples: [
      { problem: '324 ÷ 12 = ?', solution: '27', explanation: '324÷2=162, 162÷6=27 (12=2×6) 🔨' },
      { problem: '180 ÷ 15 = ?', solution: '12', explanation: '180÷3=60, 60÷5=12 (15=3×5) 🔨' },
      { problem: '256 ÷ 16 = ?', solution: '16', explanation: '256÷4=64, 64÷4=16 (16=4×4) 🔨' }
    ],
    practiceProblems: [
      { question: '144 ÷ 12 = ?', answer: 12, hint: '144÷2=72, 72÷6=? (12=2×6)' },
      { question: '225 ÷ 15 = ?', answer: 15, hint: '225÷3=75, 75÷5=? (15=3×5)' },
      { question: '196 ÷ 14 = ?', answer: 14, hint: '196÷2=98, 98÷7=? (14=2×7)' },
      { question: '360 ÷ 18 = ?', answer: 20, hint: '360÷2=180, 180÷9=? (18=2×9)' }
    ],
    color: 'from-fuchsia-400 to-fuchsia-600'
  },
  // ============================================
  // 4 BASAMAKLI BÖLME TEKNİKLERİ
  // ============================================
  {
    id: 'div-thousands',
    title: '🏆 Büyük Sayıları Böl',
    emoji: '🏆',
    shortDescription: '4 basamak? Binlerden başla şampiyon!',
    fullExplanation: '2468÷2 için: 2000÷2=1000, 400÷2=200, 60÷2=30, 8÷2=4. Topla: 1234! Sen bir bölme şampiyonusun!',
    steps: [
      '🏆 BİNLER basamağını böl',
      '💯 YÜZLER basamağını böl',
      '🔟 ONLAR basamağını böl',
      '1️⃣ BİRLER basamağını böl',
      '🎉 Hepsini topla!'
    ],
    examples: [
      { problem: '2468 ÷ 2 = ?', solution: '1234', explanation: '2000÷2=1000, 400÷2=200, 60÷2=30, 8÷2=4 → 1234 🏆' },
      { problem: '4848 ÷ 4 = ?', solution: '1212', explanation: '4000÷4=1000, 800÷4=200, 40÷4=10, 8÷4=2 → 1212 🏆' },
      { problem: '6936 ÷ 6 = ?', solution: '1156', explanation: '6000÷6=1000, 900÷6=150, 36÷6=6 → 1156 🏆' }
    ],
    practiceProblems: [
      { question: '3690 ÷ 3 = ?', answer: 1230, hint: '3000÷3=1000, 600÷3=200, 90÷3=30' },
      { question: '5555 ÷ 5 = ?', answer: 1111, hint: '5000÷5=1000, 500÷5=100, 50÷5=10, 5÷5=1' },
      { question: '7280 ÷ 8 = ?', answer: 910, hint: '7200÷8=900, 80÷8=10' },
      { question: '8190 ÷ 9 = ?', answer: 910, hint: '8100÷9=900, 90÷9=10' }
    ],
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 'short-division',
    title: '⚡ Hızlı Kısa Bölme',
    emoji: '⚡',
    shortDescription: 'Uzun bölme yerine kısa yol!',
    fullExplanation: 'Kısa bölmede soldan sağa ilerle, her basamağı böl, kalanı sonraki basamağa taşı. 8765÷5: 8÷5=1(kalan3), 37÷5=7(kalan2), 26÷5=5(kalan1), 15÷5=3 → 1753!',
    steps: [
      '⚡ Soldan başla, ilk rakam(lar)ı böl',
      '📝 Bölümü yaz, kalanı sonraki rakamın önüne koy',
      '🔄 Sona kadar tekrarla',
      '🎯 Hızlı sonuç!'
    ],
    examples: [
      { problem: '8765 ÷ 5 = ?', solution: '1753', explanation: '8÷5=1(k3), 37÷5=7(k2), 26÷5=5(k1), 15÷5=3 → 1753 ⚡' },
      { problem: '4236 ÷ 4 = ?', solution: '1059', explanation: '4÷4=1, 2÷4=0(k2), 23÷4=5(k3), 36÷4=9 → 1059 ⚡' },
      { problem: '7293 ÷ 3 = ?', solution: '2431', explanation: '7÷3=2(k1), 12÷3=4, 9÷3=3, 3÷3=1 → 2431 ⚡' }
    ],
    practiceProblems: [
      { question: '6248 ÷ 4 = ?', answer: 1562, hint: '6÷4=1(k2), 22÷4=5(k2), 24÷4=6, 8÷4=2' },
      { question: '9135 ÷ 5 = ?', answer: 1827, hint: '9÷5=1(k4), 41÷5=8(k1), 13÷5=2(k3), 35÷5=7' },
      { question: '8424 ÷ 6 = ?', answer: 1404, hint: '8÷6=1(k2), 24÷6=4, 2÷6=0(k2), 24÷6=4' },
      { question: '5768 ÷ 8 = ?', answer: 721, hint: '57÷8=7(k1), 16÷8=2, 8÷8=1' }
    ],
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    id: 'div-check-mult',
    title: '✅ Çarparak Kontrol Et',
    emoji: '✅',
    shortDescription: 'Bölme doğru mu? Çarparak kontrol!',
    fullExplanation: 'Bölme işlemini kontrol etmenin en iyi yolu çarpmak! 144÷12=12 → Kontrol: 12×12=144 ✓ Doğru! Sonuç × Bölen = Bölünen olmalı.',
    steps: [
      '➗ Bölme işlemini yap',
      '✖️ Sonucu bölenle çarp',
      '❓ Bölüneni buluyor musun?',
      '✅ Evet ise doğru, hayır ise tekrar hesapla!'
    ],
    examples: [
      { problem: '144 ÷ 12 = 12', solution: 'Kontrol: 12 × 12 = 144 ✓', explanation: '12×12=144, bölünen sayı ile aynı. DOĞRU! ✅' },
      { problem: '256 ÷ 16 = 16', solution: 'Kontrol: 16 × 16 = 256 ✓', explanation: '16×16=256, bölünen sayı ile aynı. DOĞRU! ✅' },
      { problem: '1000 ÷ 25 = 40', solution: 'Kontrol: 40 × 25 = 1000 ✓', explanation: '40×25=1000, bölünen sayı ile aynı. DOĞRU! ✅' }
    ],
    practiceProblems: [
      { question: '225 ÷ 15 = ?', answer: 15, hint: 'Sonucu bul, 15×15=225 mi kontrol et' },
      { question: '324 ÷ 18 = ?', answer: 18, hint: 'Sonucu bul, 18×18=324 mü kontrol et' },
      { question: '576 ÷ 24 = ?', answer: 24, hint: 'Sonucu bul, 24×24=576 mı kontrol et' },
      { question: '729 ÷ 27 = ?', answer: 27, hint: 'Sonucu bul, 27×27=729 mu kontrol et' }
    ],
    color: 'from-rose-400 to-rose-600'
  }
];
