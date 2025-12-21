// DESTEK SINIFI - TEMA 4: TOPLAMA VE ÇIKARMAYA HAZIRLIK
// Toplama ve çıkarmayı tanıtma - çok basit - işaretleri tanıma

import { Theme } from '../../types';
import { konu1BirarayaGetirme } from './konu1-biraraya-getirme';
import { konu2Ayirma } from './konu2-ayirma';
import { konu3BasitToplama } from './konu3-basit-toplama';
import { konu4BasitCikarma } from './konu4-basit-cikarma';
import { konu5Oyunlar } from './konu5-oyunlar';

export const tema4: Theme = {
  id: 'toplama-cikarma-hazirlik',
  title: 'Toplama ve Çıkarmaya Hazırlık',
  description: 'Bir araya getir, ayır, topla, çıkar! Eğlenceli oyunlar! ➕➖',
  emoji: '🎯',
  color: 'from-orange-400 to-amber-500',
  bgColor: 'bg-orange-50',
  borderColor: 'border-orange-200',
  textColor: 'text-orange-600',
  hours: 30,
  percentage: 30,
  objectives: [
    'Nesneleri bir araya getirmeyi öğrenme',
    'Nesneleri ayırmayı öğrenme',
    '+ ve - işaretlerini tanıma',
    '1+1=2 ve 2+1=3 yapma',
    '2-1=1 ve 3-1=2 yapma',
    'Basit hikayeli problemler çözme'
  ],
  keywords: [
    'Bir araya getir', 'Ayır', 'Toplama', 'Çıkarma',
    'Artı', 'Eksi', '+', '-',
    '1+1', '2+1', '2-1', '3-1',
    'Hikaye', 'Oyun', 'Problem'
  ],
  generalizations: [
    'Bir araya getirmek = toplamadır.',
    'Ayırmak = çıkarmadır.',
    '+ işareti "artı" demektir.',
    '- işareti "eksi" demektir.',
    'Parmakla toplama ve çıkarma yapabiliriz.',
    'Hikayelerle matematik öğreniriz.'
  ],
  topics: [
    konu1BirarayaGetirme,  // Bir Araya Getirme
    konu2Ayirma,           // Ayırma
    konu3BasitToplama,     // 1+1 ve 2+1
    konu4BasitCikarma,     // 2-1 ve 3-1
    konu5Oyunlar           // Topla ve Ayır Oyunları
  ]
};
