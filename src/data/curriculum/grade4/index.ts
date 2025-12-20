// 4. SINIF MATEMATİK MÜFREDATI
// Türkiye Yüzyılı Maarif Modeli

import { GradeCurriculum } from '../types';
import { tema1 } from './tema1';
import { tema2 } from './tema2';
import { tema3 } from './tema3';
import { tema4 } from './tema4';
import { tema5 } from './tema5';
import { tema6 } from './tema6';
import { tema7 } from './tema7';

export const grade4Curriculum: GradeCurriculum = {
  grade: 4,
  title: '4. Sınıf Matematik',
  description: 'Altı basamaklı sayılar, kesirler, dört işlem, açılar, simetri ve olasılık! Matematik yolculuğunun zirvesi!',
  totalHours: 180,
  themes: [tema1, tema2, tema3, tema4, tema5, tema6, tema7]
};

export { tema1, tema2, tema3, tema4, tema5, tema6, tema7 };
