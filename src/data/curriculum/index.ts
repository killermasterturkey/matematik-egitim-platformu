// TÜRK MİLLİ EĞİTİM MÜFREDATİ - İLKOKUL MATEMATİK
// Türkiye Yüzyılı Maarif Modeli - Destek Sınıfı + 1-4. Sınıflar

import { grade0Curriculum } from './grade0';
import { grade1Curriculum } from './grade1';
import { grade2Curriculum } from './grade2';
import { grade3Curriculum } from './grade3';
import { grade4Curriculum } from './grade4';
import { GradeCurriculum } from './types';

// Tüm sınıf müfredatları (Destek Sınıfı + 1-4. Sınıflar)
export const allGrades: GradeCurriculum[] = [
  grade0Curriculum, // Destek Sınıfı - Ekstra yardım gerektiren öğrenciler için
  grade1Curriculum,
  grade2Curriculum,
  grade3Curriculum,
  grade4Curriculum
];

// Sadece normal sınıflar (1-4)
export const regularGrades: GradeCurriculum[] = [
  grade1Curriculum,
  grade2Curriculum,
  grade3Curriculum,
  grade4Curriculum
];

// Sınıfa göre müfredat getir
export const getCurriculumByGrade = (grade: number): GradeCurriculum | undefined => {
  return allGrades.find(c => c.grade === grade);
};

// Sınıfa göre tema getir
export const getThemeById = (grade: number, themeId: string) => {
  const curriculum = getCurriculumByGrade(grade);
  return curriculum?.themes.find(t => t.id === themeId);
};

// Sınıfa göre konu getir
export const getTopicById = (grade: number, topicId: string) => {
  const curriculum = getCurriculumByGrade(grade);
  for (const theme of curriculum?.themes || []) {
    const topic = theme.topics.find(t => t.id === topicId);
    if (topic) {
      return { topic, theme };
    }
  }
  return null;
};

// İstatistikler
export const curriculumStats = {
  totalGrades: 5, // Destek Sınıfı dahil
  regularGrades: 4, // Normal sınıflar (1-4)
  totalThemes: allGrades.reduce((sum, g) => sum + g.themes.length, 0),
  totalTopics: allGrades.reduce((sum, g) =>
    sum + g.themes.reduce((tSum, t) => tSum + t.topics.length, 0), 0),
  totalHours: allGrades.reduce((sum, g) => sum + g.totalHours, 0)
};

// Tek tek export
export { grade0Curriculum } from './grade0';
export { grade1Curriculum } from './grade1';
export { grade2Curriculum } from './grade2';
export { grade3Curriculum } from './grade3';
export { grade4Curriculum } from './grade4';
export * from './types';
