// DESTEK SINIFI - Ekstra Yardım Gerektiren Öğrenciler İçin
// Bu müfredat, öğrenme güçlüğü yaşayan veya ekstra destek gerektiren
// öğrenciler için özel olarak hazırlanmıştır.

import { GradeCurriculum } from '../types';
import { tema1 } from './tema1';
import { tema2 } from './tema2';
import { tema3 } from './tema3';
import { tema4 } from './tema4';
import { tema5 } from './tema5';
import { tema6 } from './tema6';

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
  totalTopics: 34, // TEMA 1: 5 konu + TEMA 2: 6 konu + TEMA 3: 6 konu + TEMA 4: 5 konu + TEMA 5: 6 konu + TEMA 6: 6 konu
  description: 'Matematik öğrenmeye özel bir yolculuk! Seninle birlikte, adım adım, sabırla ilerleyeceğiz. Her öğrenci kendi hızında öğrenir ve sen de başarabilirsin! 💪',

  // Özel anlatım özellikleri
  languageStyle: 'simple',
  visualDensity: 'high',
  stepByStep: true,
  repeatExamples: true,

  themes: [
    tema1, // TEMA 1: HAZIRLIK - Temel Beceriler (Renkler, Büyük-Küçük, Eşleştirme, Gruplama, Dikkat)
    tema2, // TEMA 2: SAYILARLA TANIŞMA (1-5) (Bir, İki, Üç, Dört, Beş, Tekrar)
    tema3, // TEMA 3: SAYILARI ÖĞRENİYORUM (6-10) (Altı, Yedi, Sekiz, Dokuz, On, Tekrar)
    tema4, // TEMA 4: TOPLAMA VE ÇIKARMAYA HAZIRLIK (Bir araya getir, Ayır, 1+1, 2-1, Oyunlar)
    tema5, // TEMA 5: ŞEKİLLER DÜNYASI (Daire, Kare, Üçgen, Dikdörtgen, Tanıma, Resim)
    tema6, // TEMA 6: GÜNLÜK HAYAT MATEMATİĞİ (Sabah-Öğle-Akşam, Büyük-Küçük-Orta, Uzun-Kısa, Ağır-Hafif, Para, Hafta)
  ]
};
