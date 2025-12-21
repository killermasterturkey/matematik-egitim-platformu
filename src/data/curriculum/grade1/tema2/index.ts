// 1. SINIF - TEMA 2: SAYILAR VE NİCELİKLER (2) - ÖLÇME
// Modüler yapı - her konu ayrı dosyada

import { Theme } from '../../types';
import { konu1UzunlukOlcme } from './konu1-uzunluk';
import { konu2KutleTartma } from './konu2-kutle';

// Tema 2 tanımı
export const tema2: Theme = {
  id: 'sayilar-nicelikler-2',
  title: 'Sayılar ve Nicelikler (2) - Ölçme',
  description: 'Uzunluk ve kütle ölçmeyi öğrenelim! Standart olmayan araçlarla ölçüm yapalım.',
  emoji: '📏',
  color: 'from-blue-400 to-cyan-500',
  bgColor: 'bg-blue-50',
  borderColor: 'border-blue-200',
  textColor: 'text-blue-600',
  hours: 18,
  percentage: 10,
  objectives: [
    'Uzunluk kavramını anlama ve karış, adım, ayak ile ölçme',
    'Kütle kavramını anlama ve terazi ile tartma',
    'Standart olmayan araçlarla ölçme ve karşılaştırma',
    'Ölçüm sonuçlarını tahmin etme ve kontrol etme'
  ],
  keywords: ['Uzunluk', 'Kısa', 'Uzun', 'Ağır', 'Hafif', 'Ölçme', 'Tartma', 'Karış', 'Adım', 'Terazi'],
  generalizations: [
    'Nesneler, kendilerine sayısal değerler atanmadan da karşılaştırılabilir.',
    'Uzunluk ve kütle farklı araçlarla ölçülür.',
    'Standart olmayan ölçümler kişiden kişiye farklılık gösterebilir.'
  ],
  topics: [
    konu1UzunlukOlcme,
    konu2KutleTartma
  ]
};

// Konuları ayrı olarak da dışa aktar
export {
  konu1UzunlukOlcme,
  konu2KutleTartma
};
