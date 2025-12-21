// 1. SINIF - TEMA 6: NESNELERİN GEOMETRİSİ (2) - ŞEKİLLER
// Modüler yapı

import { Theme } from '../../types';
import { konu1GeometrikSekiller } from './konu1-geometrik-sekiller';

export const tema6: Theme = {
  id: 'nesnelerin-geometrisi-2',
  title: 'Nesnelerin Geometrisi (2)',
  description: 'Geometrik şekilleri tanıyalım! Üçgen, kare, dikdörtgen, çember...',
  emoji: '🔷',
  color: 'from-indigo-400 to-blue-500',
  bgColor: 'bg-indigo-50',
  borderColor: 'border-indigo-200',
  textColor: 'text-indigo-600',
  hours: 15,
  percentage: 8,
  objectives: [
    'Geometrik şekilleri tanıma',
    'Şekillerin özelliklerini anlama',
    'Köşe ve kenar sayılarını bilme',
    'Günlük hayatta şekilleri bulma'
  ],
  keywords: ['Üçgen', 'Kare', 'Dikdörtgen', 'Çember', 'Köşe', 'Kenar', 'Şekil'],
  generalizations: [
    'Nesneler ile geometrik yapılar ilişkilidir.',
    'Geometrik yapılar ile geometrik şekiller ilişkilidir.',
    'Her şeklin kendine özgü özellikleri vardır.'
  ],
  topics: [
    konu1GeometrikSekiller
  ]
};

export { konu1GeometrikSekiller };
