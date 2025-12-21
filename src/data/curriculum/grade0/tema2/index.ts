// DESTEK SINIFI - TEMA 2: SAYILARLA TANIŞMA (1-5)
// Sayıları en basit şekilde, her biri ayrı ayrı öğreten tema

import { Theme } from '../../types';
import { konu1Bir } from './konu1-bir';
import { konu2Iki } from './konu2-iki';
import { konu3Uc } from './konu3-uc';
import { konu4Dort } from './konu4-dort';
import { konu5Bes } from './konu5-bes';
import { konu6Tekrar } from './konu6-tekrar';

export const tema2: Theme = {
  id: 'sayilarla-tanisma-1-5',
  title: 'SAYILARLA TANIŞMA (1-5)',
  description: 'Bir, İki, Üç, Dört, Beş - Her Sayı Özel ve Güzel',
  emoji: '🔢',
  color: 'from-purple-400 to-violet-500',
  bgColor: 'bg-purple-50',
  borderColor: 'border-purple-200',
  textColor: 'text-purple-600',
  hours: 24,
  percentage: 24,
  objectives: [
    'BİR (1) sayısını tanır ve gösterir',
    'İKİ (2) sayısını tanır ve gösterir',
    'ÜÇ (3) sayısını tanır ve gösterir',
    'DÖRT (4) sayısını tanır ve gösterir',
    'BEŞ (5) sayısını tanır ve gösterir',
    '1-5 arası sırayla sayar',
    'Parmakla sayı gösterir',
    'Sayıları karşılaştırır'
  ],
  keywords: [
    'bir',
    'iki',
    'üç',
    'dört',
    'beş',
    'sayı',
    'rakam',
    'parmak',
    'sayma',
    'sıra',
    '1',
    '2',
    '3',
    '4',
    '5'
  ],
  generalizations: [
    '🔢 Her sayının kendine özgü bir anlamı vardır',
    '☝️ Sayıları parmakla gösterebiliriz',
    '📊 Sayılar sırayla gider: 1, 2, 3, 4, 5',
    '🖐️ Bir elimizde 5 parmak vardır',
    '💝 Sayıları öğrenmek kolaydır ve eğlencelidir'
  ],
  topics: [
    konu1Bir,
    konu2Iki,
    konu3Uc,
    konu4Dort,
    konu5Bes,
    konu6Tekrar
  ]
};
