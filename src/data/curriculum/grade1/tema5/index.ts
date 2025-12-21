// 1. SINIF - TEMA 5: NESNELERİN GEOMETRİSİ (1) - YER, YÖN, KONUM
// Modüler yapı - her konu ayrı dosyada

import { Theme } from '../../types';
import { konu1YerYonKonum } from './konu1-yer-yon-konum';

// Tema 5 tanımı
export const tema5: Theme = {
  id: 'nesnelerin-geometrisi-1',
  title: 'Nesnelerin Geometrisi (1)',
  description: 'Yer, yön ve konum kavramlarını öğrenelim! Sağ, sol, üst, alt...',
  emoji: '🧭',
  color: 'from-teal-400 to-cyan-500',
  bgColor: 'bg-teal-50',
  borderColor: 'border-teal-200',
  textColor: 'text-teal-600',
  hours: 15,
  percentage: 8,
  objectives: [
    'Yer, yön ve konum kavramlarını anlama',
    'Üst-alt, sağ-sol, ön-arka kavramlarını kullanma',
    'Nesnelerin konumunu tarif etme',
    'Yönergeleri takip etme'
  ],
  keywords: ['Yer', 'Yön', 'Konum', 'Sağ', 'Sol', 'Üst', 'Alt', 'Ön', 'Arka', 'İç', 'Dış'],
  generalizations: [
    'Yer, yön ve konum birbiriyle ilişkilidir.',
    'Konum tarifi iletişim için önemlidir.',
    'Yön kavramları günlük hayatta sürekli kullanılır.'
  ],
  topics: [
    konu1YerYonKonum
  ]
};

// Konuyu ayrı olarak da dışa aktar
export { konu1YerYonKonum };
