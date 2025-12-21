// 1. SINIF - TEMA 3: SAYILAR VE NİCELİKLER (3) - PARA
// Modüler yapı - her konu ayrı dosyada

import { Theme } from '../../types';
import { konu1ParalariTaniyalim } from './konu1-paralari-taniyalim';

// Tema 3 tanımı
export const tema3: Theme = {
  id: 'sayilar-nicelikler-3',
  title: 'Sayılar ve Nicelikler (3) - Para',
  description: 'Türk Lirası\'nı tanıyalım! Paraların değerlerini öğrenelim ve alışveriş yapalım.',
  emoji: '💰',
  color: 'from-yellow-400 to-amber-500',
  bgColor: 'bg-yellow-50',
  borderColor: 'border-yellow-200',
  textColor: 'text-yellow-600',
  hours: 7,
  percentage: 4,
  objectives: [
    'Türk Lirası birimlerini tanıma (madeni ve kağıt para)',
    'Para değerlerini karşılaştırma ve sıralama',
    'Basit alışveriş hesapları yapma',
    'Tasarruf kavramını anlama'
  ],
  keywords: ['Türk Lirası', 'TL', 'Para', 'Değişim', 'Alışveriş', 'Tasarruf', 'Kumbara', 'Banknot'],
  generalizations: [
    'Para bir değişim aracıdır.',
    'Büyük sayılı para daha değerlidir.',
    'Tasarruf yapmak geleceğe yatırımdır.'
  ],
  topics: [
    konu1ParalariTaniyalim
  ]
};

// Konuyu ayrı olarak da dışa aktar
export { konu1ParalariTaniyalim };
