// DESTEK SINIFI - TEMA 1: HAZIRLIK - TEMEL BECERİLER
// En temel becerileri öğreten, çok basit, çok sevgi dolu tema

import { Theme } from '../../types';
import { konu1Renkler } from './konu1-renkler';
import { konu2BuyukKucuk } from './konu2-buyuk-kucuk';
import { konu3Eslestirme } from './konu3-eslestirme';
import { konu4Gruplama } from './konu4-gruplama';
import { konu5Dikkat } from './konu5-dikkat';

export const tema1: Theme = {
  id: 'hazirlik-temel-beceriler',
  title: 'HAZIRLIK - Temel Beceriler',
  description: 'Renkler, Büyük-Küçük, Eşleştirme, Gruplama, Dikkat - Matematiğe Hazırlık',
  emoji: '🌈',
  color: 'from-pink-400 to-rose-500',
  bgColor: 'bg-pink-50',
  borderColor: 'border-pink-200',
  textColor: 'text-pink-600',
  hours: 20,
  percentage: 20,
  objectives: [
    'Temel renkleri tanır (Kırmızı, Mavi, Sarı, Yeşil)',
    'Büyük-küçük kavramlarını ayırt eder',
    'Aynı olanları eşleştirir',
    'Nesneleri gruplara ayırır',
    'Dikkatli gözlem yapar',
    'Farklı ve eksik olanı bulur'
  ],
  keywords: [
    'renkler',
    'büyük',
    'küçük',
    'eşleştirme',
    'gruplama',
    'dikkat',
    'odaklanma',
    'farklı',
    'aynı',
    'karşılaştırma'
  ],
  generalizations: [
    '🎨 Renkler her yerdedir ve hayatımızı güzelleştirir',
    '📏 Şeyler büyük veya küçük olabilir, karşılaştırabiliriz',
    '🎯 Aynı olanları eşleştirebilir, gruplayabiliriz',
    '👀 Dikkatli bakarsak farklılıkları ve eksiklikleri fark ederiz',
    '💝 Her öğrenci kendi hızında öğrenir ve bu çok doğaldır'
  ],
  topics: [
    konu1Renkler,
    konu2BuyukKucuk,
    konu3Eslestirme,
    konu4Gruplama,
    konu5Dikkat
  ]
};
