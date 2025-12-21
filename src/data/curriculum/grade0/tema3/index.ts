// DESTEK SINIFI - TEMA 3: SAYILARI ÖĞRENİYORUM (6-10)
// 6'dan 10'a kadar sayılar - Görsel ve sevgi dolu anlatım

import { Theme } from '../../types';
import { konu1Alti } from './konu1-alti';
import { konu2Yedi } from './konu2-yedi';
import { konu3Sekiz } from './konu3-sekiz';
import { konu4Dokuz } from './konu4-dokuz';
import { konu5On } from './konu5-on';
import { konu6Tekrar } from './konu6-tekrar';

export const tema3: Theme = {
  id: 'sayilar-6-10',
  title: 'Sayıları Öğreniyorum (6-10)',
  description: '6, 7, 8, 9, 10! Büyük sayılar öğreniyoruz! İki el birlikte! 🖐️🖐️',
  emoji: '🎲',
  color: 'from-purple-400 to-violet-500',
  bgColor: 'bg-purple-50',
  borderColor: 'border-purple-200',
  textColor: 'text-purple-600',
  hours: 35, // Daha fazla zaman - önemli tema
  percentage: 35,
  objectives: [
    '6\'dan 10\'a kadar sayıları tanıma',
    'İki elle 10 parmağı sayma',
    'Her sayının özelliğini öğrenme',
    'Basit toplama işlemleri yapma',
    '1\'den 10\'a kadar akıcı sayma'
  ],
  keywords: [
    'Altı', 'Yedi', 'Sekiz', 'Dokuz', 'On',
    '6', '7', '8', '9', '10',
    'Zar', 'Gökkuşağı', 'Ahtapot', 'Kedi', 'İki el',
    'Parmak', 'Toplama'
  ],
  generalizations: [
    'Sayılar sırayla büyür.',
    '10 özel bir sayıdır.',
    'İki elimizde 10 parmak var.',
    'Her sayının bir özelliği var.',
    'Sayılarla toplama yapabiliriz.'
  ],
  topics: [
    konu1Alti,      // ALTI (6)
    konu2Yedi,      // YEDİ (7)
    konu3Sekiz,     // SEKİZ (8)
    konu4Dokuz,     // DOKUZ (9)
    konu5On,        // ON (10) - BÜYÜK BAŞARI
    konu6Tekrar     // 1-10 TEKRAR VE KUTLAMA
  ]
};
