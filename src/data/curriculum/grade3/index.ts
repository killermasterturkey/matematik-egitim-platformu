// 3. SINIF MATEMATİK MÜFREDATI
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

export const grade3Curriculum: GradeCurriculum = {
  grade: 3,
  title: '3. Sınıf Matematik',
  emoji: '🌈',
  color: 'from-orange-400 to-red-500',
  bgColor: 'bg-orange-50',
  borderColor: 'border-orange-200',
  textColor: 'text-orange-600',
  description: '1000\'e kadar sayılar, kesirler, dört işlem ve geometri! Matematik maceran büyüyor!',
  totalHours: 180,
  weeklyHours: 5,
  totalTopics: 48,
  themes: [tema1, tema2, tema3, tema4, tema5, tema6]
};

export { tema1, tema2, tema3, tema4, tema5, tema6 };
