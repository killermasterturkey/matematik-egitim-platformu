// DESTEK SINIFI - Ekstra Yardım Gerektiren Öğrenciler İçin
// Bu müfredat, öğrenme güçlüğü yaşayan veya ekstra destek gerektiren
// öğrenciler için özel olarak hazırlanmıştır.

import { GradeCurriculum } from '../types';
import { tema1 } from './tema1';

export const grade0Curriculum: GradeCurriculum = {
  grade: 0,
  title: 'Destek Sınıfı',
  emoji: '💝',
  color: 'from-pink-400 via-rose-500 to-red-500',
  bgColor: 'bg-pink-50',
  borderColor: 'border-pink-200',
  textColor: 'text-pink-600',
  totalHours: 180, // Daha fazla zaman ayrılmış
  weeklyHours: 5,
  totalTopics: 20,
  description: 'Matematik öğrenmeye özel bir yolculuk! Seninle birlikte, adım adım, sabırla ilerleyeceğiz. Her öğrenci kendi hızında öğrenir ve sen de başarabilirsin! 💪',

  // Özel anlatım özellikleri
  languageStyle: 'simple',
  visualDensity: 'high',
  stepByStep: true,
  repeatExamples: true,

  themes: [
    tema1,
    // Diğer temalar eklenecek
  ]
};
