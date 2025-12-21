// 1. SINIF - TEMA 7: VERİYE DAYALI ARAŞTIRMA
// Modüler yapı

import { Theme } from '../../types';
import { konu1VeriGrafik } from './konu1-veri-grafik';

export const tema7: Theme = {
  id: 'veriye-dayali-arastirma',
  title: 'Veriye Dayalı Araştırma',
  description: 'Veri toplama, grafik oluşturma ve yorumlama öğrenelim!',
  emoji: '📊',
  color: 'from-pink-400 to-rose-500',
  bgColor: 'bg-pink-50',
  borderColor: 'border-pink-200',
  textColor: 'text-pink-600',
  hours: 10,
  percentage: 5,
  objectives: [
    'Veri kavramını anlama',
    'Çetele tablosu oluşturma',
    'Nesne grafiği yapma',
    'Verileri yorumlama'
  ],
  keywords: ['Veri', 'Çetele', 'Grafik', 'Sıklık', 'Sayma', 'Tablo', 'Araştırma'],
  generalizations: [
    'Grafikler verilerin görsel temsilidir.',
    'Veri toplamak soru sormakla başlar.',
    'Veriler bize bilgi verir ve sorulara cevap bulmamızı sağlar.'
  ],
  topics: [
    konu1VeriGrafik
  ]
};

export { konu1VeriGrafik };
