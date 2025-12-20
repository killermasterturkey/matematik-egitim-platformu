import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export type MessageType = 'celebration' | 'encouragement' | 'info' | 'streak';

interface Message {
  id: number;
  text: string;
  emoji: string;
  type: MessageType;
}

// Tebrik mesajları
const celebrationMessages = [
  { text: 'Harikasın!', emoji: '🎉' },
  { text: 'Mükemmel!', emoji: '⭐' },
  { text: 'Süpersin!', emoji: '🚀' },
  { text: 'Bravo!', emoji: '👏' },
  { text: 'Aferin!', emoji: '🌟' },
  { text: 'Muhteşem!', emoji: '💫' },
  { text: 'Çok iyisin!', emoji: '🏆' },
  { text: 'Doğru!', emoji: '✅' },
  { text: 'Tebrikler!', emoji: '🎊' },
  { text: 'Helal olsun!', emoji: '💪' },
];

// Motivasyon mesajları
const encouragementMessages = [
  { text: 'Tekrar dene!', emoji: '💪' },
  { text: 'Yapabilirsin!', emoji: '🌈' },
  { text: 'Vazgeçme!', emoji: '🔥' },
  { text: 'Çok yaklaştın!', emoji: '🎯' },
  { text: 'Bir daha dene!', emoji: '🚀' },
  { text: 'Hadi pes etme!', emoji: '💫' },
  { text: 'Sen başarırsın!', emoji: '⭐' },
  { text: 'Devam et!', emoji: '🏃' },
  { text: 'Düşün ve dene!', emoji: '🤔' },
  { text: 'Yaklaşıyorsun!', emoji: '🎈' },
];

// Seri mesajları
const streakMessages = [
  { text: '2 Seri! Harika!', emoji: '🔥' },
  { text: '3 Seri! Süper!', emoji: '🔥🔥' },
  { text: '4 Seri! İnanılmaz!', emoji: '🔥🔥🔥' },
  { text: '5 Seri! Efsane!', emoji: '👑' },
  { text: 'Durdurulamıyorsun!', emoji: '🚀' },
];

// Singleton message manager
let messageQueue: Message[] = [];
let messageId = 0;
let listeners: ((messages: Message[]) => void)[] = [];

const notifyListeners = () => {
  listeners.forEach(listener => listener([...messageQueue]));
};

export const showMessage = (type: MessageType, customText?: string, streakCount?: number) => {
  let message: { text: string; emoji: string };

  if (customText) {
    message = { text: customText, emoji: type === 'celebration' ? '🎉' : '💪' };
  } else if (type === 'streak' && streakCount) {
    const index = Math.min(streakCount - 2, streakMessages.length - 1);
    message = streakMessages[Math.max(0, index)];
  } else if (type === 'celebration') {
    message = celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)];
  } else {
    message = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
  }

  const newMessage: Message = {
    id: messageId++,
    text: message.text,
    emoji: message.emoji,
    type,
  };

  messageQueue.push(newMessage);
  notifyListeners();

  // 2.5 saniye sonra kaldır
  setTimeout(() => {
    messageQueue = messageQueue.filter(m => m.id !== newMessage.id);
    notifyListeners();
  }, 2500);
};

// Kolay kullanım için helper fonksiyonlar
export const showCelebration = (customText?: string) => showMessage('celebration', customText);
export const showEncouragement = (customText?: string) => showMessage('encouragement', customText);
export const showStreak = (streakCount: number) => showMessage('streak', undefined, streakCount);
export const showInfo = (text: string) => showMessage('info', text);

// React komponenti
export function MessagePopupContainer() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const listener = (newMessages: Message[]) => setMessages(newMessages);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  const getColors = (type: MessageType) => {
    switch (type) {
      case 'celebration':
        return 'from-green-400 via-emerald-500 to-teal-500';
      case 'encouragement':
        return 'from-orange-400 via-amber-500 to-yellow-500';
      case 'streak':
        return 'from-purple-500 via-pink-500 to-rose-500';
      case 'info':
      default:
        return 'from-blue-400 via-indigo-500 to-purple-500';
    }
  };

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-3 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 15,
              }
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: -30,
              transition: { duration: 0.2 }
            }}
            className={`
              bg-gradient-to-r ${getColors(message.type)}
              px-8 py-4 rounded-2xl shadow-2xl
              border-4 border-white/30
              pointer-events-auto
            `}
            style={{
              zIndex: 100 - index,
            }}
          >
            <motion.div
              className="flex items-center gap-3"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <motion.span
                className="text-4xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 2,
                }}
              >
                {message.emoji}
              </motion.span>
              <span className="text-2xl font-black text-white drop-shadow-lg">
                {message.text}
              </span>
              <motion.span
                className="text-4xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 2,
                  delay: 0.1,
                }}
              >
                {message.emoji}
              </motion.span>
            </motion.div>

            {/* Parıltı efekti */}
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1,
                  repeat: 1,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default MessagePopupContainer;
