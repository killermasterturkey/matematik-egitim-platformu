// DESTEK SINIFI - TEMA 1: SAYILARLA TANIŞALIM
// Bu tema, sayıları en temel düzeyde, bol görsel ve tekrarla öğretir.

import { Theme } from '../../types';
import { konu1Sayma15 } from './konu1-sayma-1-5';

export const tema1: Theme = {
  id: 'sayilarla-tanisalim',
  title: 'Sayılarla Tanışalım',
  description: 'Sayıları öğrenmeye başlıyoruz! 1, 2, 3, 4, 5... Birlikte sayacağız!',
  emoji: '🔢',
  color: 'from-pink-400 to-rose-500',
  bgColor: 'bg-pink-50',
  borderColor: 'border-pink-200',
  textColor: 'text-pink-600',
  hours: 30, // Daha fazla zaman
  percentage: 30,
  objectives: [
    '1\'den 5\'e kadar sayıları tanıma',
    'Nesneleri sayma',
    'Sayı-miktar ilişkisini anlama',
    'Parmakla sayma'
  ],
  keywords: ['Sayı', 'Sayma', 'Bir', 'İki', 'Üç', 'Dört', 'Beş'],
  generalizations: [
    'Her sayının bir anlamı var.',
    'Sayılar sırayla gelir.',
    'Nesneleri sayarak öğreniriz.'
  ],
  topics: [
    konu1Sayma15,
    // Diğer konular eklenecek:
    // konu2Sayma610
    // konu3SayiEsleme
    // konu4BuyukKucuk
  ]
};
