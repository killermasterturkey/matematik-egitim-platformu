// 2. SINIF MATEMATİK MÜFREDATI
// Türkiye Yüzyılı Maarif Modeli

import { GradeCurriculum } from '../types';
import { tema1 } from './tema1';
import { tema2 } from './tema2';
import { tema3 } from './tema3';
import { tema4 } from './tema4';
import { tema5 } from './tema5';
import { tema6 } from './tema6';

export const grade2Curriculum: GradeCurriculum = {
  grade: 2,
  title: '2. Sınıf Matematik',
  description: '100\'e kadar sayılar, dört işlem, geometrik cisimler ve daha fazlası! Matematik yolculuğun devam ediyor!',
  totalHours: 180,
  themes: [tema1, tema2, tema3, tema4, tema5, tema6]
};

export { tema1, tema2, tema3, tema4, tema5, tema6 };
