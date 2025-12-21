// Müfredat Veri Tipleri - Türkiye Yüzyılı Maarif Modeli

export interface Example {
  question: string;
  answer: string;
  explanation?: string;
  visual?: string;
  steps?: string[];
}

export interface LessonStep {
  title: string;
  content: string;
  visual?: string;
  explanation?: string;
  audio: string;
  examples?: Example[];
  tip?: string;
  warning?: string;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'visual' | 'ordering' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  visual?: string;
  difficulty: 1 | 2 | 3;
  hint?: string;
}

export interface TopicContent {
  introduction: string;
  motivationQuote: string;
  steps: LessonStep[];
  practiceQuestions: Question[];
  funFacts: string[];
  summary?: string;
  nextTopicPreview?: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  emoji: string;
  duration: string;
  difficulty: 1 | 2 | 3;
  keywords: string[];
  objectives: string[];
  content: TopicContent;
}

// Soru tipleri için yardımcı tipler
export type QuestionType = 'multiple-choice' | 'fill-blank' | 'matching' | 'visual' | 'ordering' | 'true-false';

// Soru için zorunlu id alanı
export interface QuestionWithId extends Question {
  id: string;
}

export interface Theme {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  hours: number;
  percentage: number;
  objectives: string[];
  keywords: string[];
  generalizations: string[];
  topics: Topic[];
}

export interface GradeCurriculum {
  grade: 0 | 1 | 2 | 3 | 4; // 0 = Özel Eğitim Sınıfı (Destek Gerektiren Öğrenciler)
  title: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  totalHours: number;
  weeklyHours: number;
  totalTopics: number;
  description: string;
  themes: Theme[];
  // Sınıf bazlı anlatım özellikleri
  languageStyle?: 'simple' | 'moderate' | 'advanced'; // Anlatım karmaşıklığı
  visualDensity?: 'high' | 'medium' | 'low'; // Görsel yoğunluğu
  stepByStep?: boolean; // Adım adım anlatım
  repeatExamples?: boolean; // Örnek tekrarı
}

// Sınıf renk şemaları
export const gradeColors = {
  0: {
    gradient: 'from-pink-400 via-rose-500 to-red-500',
    bg: 'bg-pink-50',
    bgMedium: 'bg-pink-100',
    text: 'text-pink-600',
    textDark: 'text-pink-700',
    border: 'border-pink-200',
    borderMedium: 'border-pink-300',
    ring: 'ring-pink-400',
    shadow: 'shadow-pink-200',
    button: 'from-pink-500 to-rose-500',
    hover: 'hover:from-pink-600 hover:to-rose-600',
    emoji: '💝',
    mascot: '🐻',
    name: 'Destek Sınıfı'
  },
  1: {
    gradient: 'from-green-400 via-emerald-500 to-teal-500',
    bg: 'bg-green-50',
    bgMedium: 'bg-green-100',
    text: 'text-green-600',
    textDark: 'text-green-700',
    border: 'border-green-200',
    borderMedium: 'border-green-300',
    ring: 'ring-green-400',
    shadow: 'shadow-green-200',
    button: 'from-green-500 to-emerald-500',
    hover: 'hover:from-green-600 hover:to-emerald-600',
    emoji: '🌟',
    mascot: '🐸',
    name: '1. Sınıf'
  },
  2: {
    gradient: 'from-blue-400 via-indigo-500 to-purple-500',
    bg: 'bg-blue-50',
    bgMedium: 'bg-blue-100',
    text: 'text-blue-600',
    textDark: 'text-blue-700',
    border: 'border-blue-200',
    borderMedium: 'border-blue-300',
    ring: 'ring-blue-400',
    shadow: 'shadow-blue-200',
    button: 'from-blue-500 to-indigo-500',
    hover: 'hover:from-blue-600 hover:to-indigo-600',
    emoji: '🚀',
    mascot: '🐬',
    name: '2. Sınıf'
  },
  3: {
    gradient: 'from-purple-400 via-violet-500 to-fuchsia-500',
    bg: 'bg-purple-50',
    bgMedium: 'bg-purple-100',
    text: 'text-purple-600',
    textDark: 'text-purple-700',
    border: 'border-purple-200',
    borderMedium: 'border-purple-300',
    ring: 'ring-purple-400',
    shadow: 'shadow-purple-200',
    button: 'from-purple-500 to-violet-500',
    hover: 'hover:from-purple-600 hover:to-violet-600',
    emoji: '🎯',
    mascot: '🦉',
    name: '3. Sınıf'
  },
  4: {
    gradient: 'from-orange-400 via-amber-500 to-yellow-500',
    bg: 'bg-orange-50',
    bgMedium: 'bg-orange-100',
    text: 'text-orange-600',
    textDark: 'text-orange-700',
    border: 'border-orange-200',
    borderMedium: 'border-orange-300',
    ring: 'ring-orange-400',
    shadow: 'shadow-orange-200',
    button: 'from-orange-500 to-amber-500',
    hover: 'hover:from-orange-600 hover:to-amber-600',
    emoji: '🏆',
    mascot: '🦁',
    name: '4. Sınıf'
  }
} as const;

// Tema renk şemaları
export const themeColors = [
  { gradient: 'from-rose-400 to-pink-500', bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
  { gradient: 'from-orange-400 to-amber-500', bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  { gradient: 'from-yellow-400 to-lime-500', bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' },
  { gradient: 'from-green-400 to-emerald-500', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
  { gradient: 'from-teal-400 to-cyan-500', bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
  { gradient: 'from-blue-400 to-indigo-500', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  { gradient: 'from-purple-400 to-violet-500', bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
  { gradient: 'from-pink-400 to-fuchsia-500', bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' },
] as const;

// Zorluk seviyeleri
export const difficultyLabels = {
  1: { label: 'Kolay', emoji: '🟢', color: 'text-green-500' },
  2: { label: 'Orta', emoji: '🟡', color: 'text-yellow-500' },
  3: { label: 'Zor', emoji: '🔴', color: 'text-red-500' }
} as const;

// Motivasyon sözleri
export const motivationQuotes = [
  "Her büyük yolculuk küçük bir adımla başlar! 🌟",
  "Sen harikasın! Her soru seni daha akıllı yapıyor! 🧠",
  "Öğrenmek bir macera, sen de bir kaşifsin! 🚀",
  "Başarı, küçük çabalarının toplamıdır! 💪",
  "Matematik öğrenmek, süper güçler kazanmak gibidir! 🦸",
  "Her gün biraz daha öğrenmek, seni daha güçlü yapar! ⭐",
  "Hata yapmak öğrenmenin bir parçasıdır! 🌈",
  "Merak etmek, öğrenmenin anahtarıdır! 🔑",
  "Bugün öğrendiğin her şey yarın işine yarar! 📚",
  "Sayılar seninle arkadaş olmak istiyor! 🔢"
];

// Progress helpers
export interface TopicProgress {
  completed: boolean;
  score?: number;
  lastAttempt?: string;
  attempts?: number;
}

export interface ThemeProgress {
  [topicId: string]: TopicProgress;
}

export interface GradeProgress {
  [themeId: string]: ThemeProgress;
}

export interface CurriculumProgress {
  [grade: number]: GradeProgress;
}

// LocalStorage key
export const CURRICULUM_PROGRESS_KEY = 'curriculumProgress';

// Helper functions
export const getRandomMotivation = (): string => {
  return motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];
};

export const calculateThemeProgress = (themeProgress: ThemeProgress, totalTopics: number): number => {
  const completedCount = Object.values(themeProgress).filter(t => t.completed).length;
  return Math.round((completedCount / totalTopics) * 100);
};

export const calculateGradeProgress = (gradeProgress: GradeProgress, themes: Theme[]): number => {
  let totalTopics = 0;
  let completedTopics = 0;

  themes.forEach(theme => {
    totalTopics += theme.topics.length;
    const themeProgress = gradeProgress[theme.id] || {};
    completedTopics += Object.values(themeProgress).filter(t => t.completed).length;
  });

  return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
};
