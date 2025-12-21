// DESTEK SINIFI - TEMA 6: GÜNLÜK HAYAT MATEMATİĞİ
// Sabah-öğle-akşam, büyük-küçük, uzun-kısa, ağır-hafif, para, haftanın günleri

import { Theme } from '../../types';
import { konu1SabahOgleAksam } from './konu1-sabah-ogle-aksam';
import { konu2BuyukKucukOrta } from './konu2-buyuk-kucuk-orta';
import { konu3UzunKisa } from './konu3-uzun-kisa';
import { konu4AgirHafif } from './konu4-agir-hafif';
import { konu5ParaTanima } from './konu5-para-tanima';
import { konu6HaftaninGunleri } from './konu6-haftanin-gunleri';

export const tema6: Theme = {
  id: 'gunluk-hayat-matematiği',
  title: 'Günlük Hayat Matematiği',
  description: 'Sabah-öğle-akşam, büyük-küçük, uzun-kısa, ağır-hafif, para, haftanın günleri!',
  emoji: '🌅',
  color: 'from-orange-400 to-red-500',
  bgColor: 'bg-orange-50',
  borderColor: 'border-orange-200',
  textColor: 'text-orange-600',
  hours: 36,
  percentage: 20,
  objectives: [
    'Günün zamanlarını tanıma (Sabah-Öğle-Akşam)',
    'Boyut karşılaştırması (Büyük-Küçük-Orta)',
    'Uzunluk karşılaştırması (Uzun-Kısa)',
    'Ağırlık karşılaştırması (Ağır-Hafif)',
    'Para ile tanışma (1 Lira)',
    'Haftanın günlerini öğrenme'
  ],
  keywords: ['Sabah', 'Öğle', 'Akşam', 'Büyük', 'Küçük', 'Orta', 'Uzun', 'Kısa', 'Ağır', 'Hafif', 'Para', 'Hafta', 'Gün'],
  generalizations: [
    'Günlük hayatta matematik her yerde vardır.',
    'Karşılaştırma yaparak öğreniriz.',
    'Her kavram özel ve önemlidir.',
    'Pratik yaparak öğreniriz.'
  ],
  topics: [
    konu1SabahOgleAksam,
    konu2BuyukKucukOrta,
    konu3UzunKisa,
    konu4AgirHafif,
    konu5ParaTanima,
    konu6HaftaninGunleri
  ]
};
