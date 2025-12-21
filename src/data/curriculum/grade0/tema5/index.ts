// DESTEK SINIFI - TEMA 5: ŞEKİLLER DÜNYASI
// Daire, kare, üçgen, dikdörtgen şekillerini öğrenme

import { Theme } from '../../types';
import { konu1Daire } from './konu1-daire';
import { konu2Kare } from './konu2-kare';
import { konu3Ucgen } from './konu3-ucgen';
import { konu4Dikdortgen } from './konu4-dikdortgen';
import { konu5SekilleriTani } from './konu5-sekilleri-tani';
import { konu6SekillerleResim } from './konu6-sekillerle-resim';

export const tema5: Theme = {
  id: 'sekiller-dunyasi',
  title: 'Şekiller Dünyası',
  description: 'Daire, kare, üçgen, dikdörtgen! Şekilleri öğrenip eğleneceğiz!',
  emoji: '⭕',
  color: 'from-purple-400 to-pink-500',
  bgColor: 'bg-purple-50',
  borderColor: 'border-purple-200',
  textColor: 'text-purple-600',
  hours: 36,
  percentage: 20,
  objectives: [
    'Daire şeklini tanıma ve çizme',
    'Kare şeklini tanıma ve çizme',
    'Üçgen şeklini tanıma ve çizme',
    'Dikdörtgen şeklini tanıma ve çizme',
    'Şekilleri günlük hayatta bulma',
    'Şekillerle resim yapma'
  ],
  keywords: ['Daire', 'Kare', 'Üçgen', 'Dikdörtgen', 'Şekil', 'Geometri', 'Köşe', 'Kenar'],
  generalizations: [
    'Her şeklin kendine özel özellikleri vardır.',
    'Şekiller etrafımızdaki her yerde vardır.',
    'Şekillerle birçok şey yapabiliriz.',
    'Daire yuvarlak, kare ve dikdörtgen köşeli, üçgen sivridir.'
  ],
  topics: [
    konu1Daire,
    konu2Kare,
    konu3Ucgen,
    konu4Dikdortgen,
    konu5SekilleriTani,
    konu6SekillerleResim
  ]
};
