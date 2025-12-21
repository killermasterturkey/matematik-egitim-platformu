// 1. SINIF MATEMATİK MÜFREDATI
// Türkiye Yüzyılı Maarif Modeli
// Modüler Yapı - Her tema ayrı klasörde

import { GradeCurriculum } from '../types';

// Modüler tema importları - Her tema ayrı klasörde
import { tema1 } from './tema1/index';
import { tema2 } from './tema2/index';
import { tema3 } from './tema3/index';
import { tema4 } from './tema4/index';
import { tema5 } from './tema5/index';
import { tema6 } from './tema6/index';
import { tema7 } from './tema7/index';

export const grade1Curriculum: GradeCurriculum = {
  grade: 1,
  title: '1. Sınıf Matematik',
  emoji: '🌟',
  color: 'from-green-400 to-emerald-500',
  bgColor: 'bg-green-50',
  borderColor: 'border-green-200',
  textColor: 'text-green-600',
  description: 'Sayıları tanıyalım, toplama-çıkarma öğrenelim, şekilleri keşfedelim! Matematik dünyasına hoş geldin! 🚀',
  totalHours: 180,
  weeklyHours: 5,
  totalTopics: 50,
  themes: [tema1, tema2, tema3, tema4, tema5, tema6, tema7]
};

export { tema1, tema2, tema3, tema4, tema5, tema6, tema7 };
