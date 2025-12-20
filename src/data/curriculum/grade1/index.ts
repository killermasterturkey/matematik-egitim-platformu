// 1. SINIF MATEMATİK MÜFREDATI
// Türkiye Yüzyılı Maarif Modeli

import { GradeCurriculum } from '../types';
import { tema1 } from './tema1';
import { tema2 } from './tema2';
import { tema3 } from './tema3';
import { tema4 } from './tema4';
import { tema5 } from './tema5';
import { tema6 } from './tema6';
import { tema7 } from './tema7';

export const grade1Curriculum: GradeCurriculum = {
  grade: 1,
  title: '1. Sınıf Matematik',
  description: 'Sayıları tanıyalım, toplama-çıkarma öğrenelim, şekilleri keşfedelim! Matematik dünyasına hoş geldin!',
  totalHours: 180,
  themes: [tema1, tema2, tema3, tema4, tema5, tema6, tema7]
};

export { tema1, tema2, tema3, tema4, tema5, tema6, tema7 };
