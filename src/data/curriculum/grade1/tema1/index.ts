// 1. SINIF - TEMA 1: SAYILAR VE NİCELİKLER (1)
// Modüler yapı - her konu ayrı dosyada

import { Theme } from '../../types';
import { konu1RakamlarSayilar } from './konu1-rakamlar';
import { konu2NesneleriSayma } from './konu2-sayma';
import { konu3SiraSayilari } from './konu3-sira-sayilari';
import { konu4Karsilastirma } from './konu4-karsilastirma';
import { konu5RitmikSayma } from './konu5-ritmik-sayma';

// Tema 1 tanımı
export const tema1: Theme = {
  id: 'sayilar-nicelikler-1',
  title: 'Sayılar ve Nicelikler (1)',
  description: 'Rakamları ve 20\'ye kadar olan sayıları öğrenelim, nesneleri sayalım ve karşılaştıralım!',
  emoji: '🔢',
  color: 'from-green-400 to-emerald-500',
  bgColor: 'bg-green-50',
  borderColor: 'border-green-200',
  textColor: 'text-green-600',
  hours: 57,
  percentage: 31,
  objectives: [
    'Rakamları ve 20\'ye kadar olan sayıları tanıma ve yazma',
    'Nesneleri sayma, gruplama ve karşılaştırma',
    'Sıra sayılarını kullanma',
    '100\'e kadar ritmik sayma',
    'Sayı ve şekil örüntülerini tanıma'
  ],
  keywords: [
    'Rakamlar', 'Sayılar', 'Sıra sayısı', 'Ritmik sayma',
    'Karşılaştırma', 'Örüntüler', 'Gruplama', 'Tahmin'
  ],
  generalizations: [
    'Sayılar çoklukları temsil eder.',
    'Sıra sayıları bir konumu belirtir.',
    'Sayılar belirli bir sıra izler.',
    'Nesneler farklı şekillerde gruplandırılabilir.'
  ],
  topics: [
    konu1RakamlarSayilar,
    konu2NesneleriSayma,
    konu3SiraSayilari,
    konu4Karsilastirma,
    konu5RitmikSayma
  ]
};

// Konuları ayrı olarak da dışa aktar
export {
  konu1RakamlarSayilar,
  konu2NesneleriSayma,
  konu3SiraSayilari,
  konu4Karsilastirma,
  konu5RitmikSayma
};
