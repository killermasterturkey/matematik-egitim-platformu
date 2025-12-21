// 1. SINIF - TEMA 4: İŞLEMLERDEN CEBİRSEL DÜŞÜNMEYE
// Modüler yapı - her konu ayrı dosyada

import { Theme } from '../../types';
import { konu1Toplama } from './konu1-toplama';
import { konu2Cikarma } from './konu2-cikarma';

// Tema 4 tanımı
export const tema4: Theme = {
  id: 'islemler-cebir',
  title: 'İşlemlerden Cebirsel Düşünmeye',
  description: 'Toplama ve çıkarma işlemlerini öğrenelim! Matematik işlemlerinin temelini atalım.',
  emoji: '➕',
  color: 'from-purple-400 to-indigo-500',
  bgColor: 'bg-purple-50',
  borderColor: 'border-purple-200',
  textColor: 'text-purple-600',
  hours: 50,
  percentage: 28,
  objectives: [
    'Toplama işlemini anlama ve uygulama',
    'Çıkarma işlemini anlama ve uygulama',
    'Toplama ve çıkarma arasındaki ilişkiyi kavrama',
    'Günlük hayatta dört işlemi kullanma'
  ],
  keywords: ['Toplama', 'Çıkarma', 'Artı', 'Eksi', 'Eşittir', 'Toplam', 'Fark', 'İşlem'],
  generalizations: [
    'Toplama ve çıkarma matematikte temel aritmetik işlemlerdendir.',
    'Toplama birleştirme, çıkarma ayırma işlemidir.',
    'Toplama ve çıkarma birbirinin tersidir.'
  ],
  topics: [
    konu1Toplama,
    konu2Cikarma
  ]
};

// Konuları ayrı olarak da dışa aktar
export {
  konu1Toplama,
  konu2Cikarma
};
