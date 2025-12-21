// 4. SINIF MATEMATİK MÜFREDATI
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
import { tema7 } from './tema7/index';

export const grade4Curriculum: GradeCurriculum = {
  grade: 4,
  title: '4. Sınıf Matematik',
  emoji: '🏆',
  color: 'from-purple-400 to-pink-500',
  bgColor: 'bg-purple-50',
  borderColor: 'border-purple-200',
  textColor: 'text-purple-600',
  description: 'Altı basamaklı sayılar, kesirler, dört işlem, açılar, simetri ve olasılık! Matematik yolculuğunun zirvesi!',
  totalHours: 180,
  weeklyHours: 5,
  totalTopics: 52,
  themes: [tema1, tema2, tema3, tema4, tema5, tema6, tema7]
};

export { tema1, tema2, tema3, tema4, tema5, tema6, tema7 };
