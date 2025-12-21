// 2. SINIF MATEMATİK MÜFREDATI
// Türkiye Yüzyılı Maarif Modeli
// Modüler Yapı - Her tema ayrı klasörde

import { GradeCurriculum } from '../types';

// Modüler tema importları
import { tema1 } from './tema1/index';
import { tema2 } from './tema2/index';
import { tema3 } from './tema3/index';
import { tema4 } from './tema4/index';
import { tema5 } from './tema5/index';
import { tema6 } from './tema6/index';

export const grade2Curriculum: GradeCurriculum = {
  grade: 2,
  title: '2. Sınıf Matematik',
  emoji: '🚀',
  color: 'from-blue-400 to-cyan-500',
  bgColor: 'bg-blue-50',
  borderColor: 'border-blue-200',
  textColor: 'text-blue-600',
  description: '100\'e kadar sayılar, dört işlem, geometrik cisimler ve daha fazlası! Matematik yolculuğun devam ediyor!',
  totalHours: 180,
  weeklyHours: 5,
  totalTopics: 45,
  themes: [tema1, tema2, tema3, tema4, tema5, tema6]
};

export { tema1, tema2, tema3, tema4, tema5, tema6 };
