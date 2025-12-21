// Deneme Testi Soruları - Sınıf bazlı kapsamlı sorular

export interface TestQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 1 | 2 | 3;
  topic: string;
}

// 1. SINIF SORULARI
const grade1Questions: TestQuestion[] = [
  { id: 'g1-1', type: 'multiple-choice', question: '5 + 3 = ?', options: ['6', '7', '8', '9'], correctAnswer: '8', explanation: '5 + 3 = 8. Beş parmağımıza üç parmak daha eklersek 8 parmak olur.', difficulty: 1, topic: 'Toplama' },
  { id: 'g1-2', type: 'multiple-choice', question: '10 - 4 = ?', options: ['5', '6', '7', '4'], correctAnswer: '6', explanation: '10 elma varsa 4 tanesini yersek 6 elma kalır.', difficulty: 1, topic: 'Çıkarma' },
  { id: 'g1-3', type: 'fill-blank', question: '7 + ___ = 10', correctAnswer: '3', explanation: '7 ile 10 arasında 3 sayı fark vardır.', difficulty: 1, topic: 'Toplama' },
  { id: 'g1-4', type: 'true-false', question: '4 + 5 = 9', correctAnswer: 'Doğru', explanation: 'Evet, 4 + 5 = 9 doğrudur.', difficulty: 1, topic: 'Toplama' },
  { id: 'g1-5', type: 'multiple-choice', question: '2 + 6 = ?', options: ['7', '8', '9', '10'], correctAnswer: '8', explanation: 'İki ördek ve altı ördek toplam sekiz ördek eder.', difficulty: 1, topic: 'Toplama' },
  { id: 'g1-6', type: 'multiple-choice', question: '9 - 5 = ?', options: ['3', '4', '5', '2'], correctAnswer: '4', explanation: '9 çilek varsa 5 tanesini yersek 4 çilek kalır.', difficulty: 1, topic: 'Çıkarma' },
  { id: 'g1-7', type: 'fill-blank', question: '8 - ___ = 5', correctAnswer: '3', explanation: '8\'den 5\'e inmek için 3 çıkarmamız gerekir.', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g1-8', type: 'true-false', question: '6 - 2 = 3', correctAnswer: 'Yanlış', explanation: '6 - 2 = 4\'tür, 3 değil.', difficulty: 1, topic: 'Çıkarma' },
  { id: 'g1-9', type: 'multiple-choice', question: 'Hangi sayı en büyüktür?', options: ['12', '8', '15', '10'], correctAnswer: '15', explanation: '15 sayısı diğerlerinden büyüktür.', difficulty: 1, topic: 'Karşılaştırma' },
  { id: 'g1-10', type: 'multiple-choice', question: '3 + 4 + 2 = ?', options: ['8', '9', '10', '7'], correctAnswer: '9', explanation: 'Önce 3+4=7, sonra 7+2=9', difficulty: 2, topic: 'Toplama' },
  { id: 'g1-11', type: 'fill-blank', question: '6 + 6 = ___', correctAnswer: '12', explanation: '6 parmak + 6 parmak = 12 parmak.', difficulty: 1, topic: 'Toplama' },
  { id: 'g1-12', type: 'true-false', question: '10 > 7', correctAnswer: 'Doğru', explanation: '10 sayısı 7\'den büyüktür.', difficulty: 1, topic: 'Karşılaştırma' },
  { id: 'g1-13', type: 'multiple-choice', question: '15 - 8 = ?', options: ['6', '7', '8', '9'], correctAnswer: '7', explanation: '15\'ten 8 çıkarınca 7 kalır.', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g1-14', type: 'multiple-choice', question: '1 + 9 = ?', options: ['8', '9', '10', '11'], correctAnswer: '10', explanation: '1 ve 9 toplanınca 10 yapar.', difficulty: 1, topic: 'Toplama' },
  { id: 'g1-15', type: 'fill-blank', question: '___ + 4 = 11', correctAnswer: '7', explanation: '7 + 4 = 11', difficulty: 2, topic: 'Toplama' },
  { id: 'g1-16', type: 'true-false', question: '8 - 8 = 1', correctAnswer: 'Yanlış', explanation: '8 - 8 = 0\'dır, 1 değil.', difficulty: 1, topic: 'Çıkarma' },
  { id: 'g1-17', type: 'multiple-choice', question: 'Kaç tane parmağımız var?', options: ['8', '9', '10', '12'], correctAnswer: '10', explanation: 'İki elimizde toplam 10 parmak var.', difficulty: 1, topic: 'Sayma' },
  { id: 'g1-18', type: 'multiple-choice', question: '11 - 6 = ?', options: ['4', '5', '6', '7'], correctAnswer: '5', explanation: '11\'den 6 çıkarınca 5 kalır.', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g1-19', type: 'fill-blank', question: '9 + 9 = ___', correctAnswer: '18', explanation: '9 + 9 = 18', difficulty: 2, topic: 'Toplama' },
  { id: 'g1-20', type: 'true-false', question: '5 + 5 = 10', correctAnswer: 'Doğru', explanation: 'Evet, 5 + 5 = 10 doğrudur.', difficulty: 1, topic: 'Toplama' }
];

// 2. SINIF SORULARI
const grade2Questions: TestQuestion[] = [
  { id: 'g2-1', type: 'multiple-choice', question: '23 + 15 = ?', options: ['36', '37', '38', '39'], correctAnswer: '38', explanation: '20+10=30, 3+5=8, toplam 38.', difficulty: 1, topic: 'Toplama' },
  { id: 'g2-2', type: 'multiple-choice', question: '45 - 18 = ?', options: ['25', '26', '27', '28'], correctAnswer: '27', explanation: '45-18=27. Onlar basamağından ödünç alarak çıkarma yapılır.', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g2-3', type: 'fill-blank', question: '34 + ___ = 50', correctAnswer: '16', explanation: '50 - 34 = 16', difficulty: 2, topic: 'Toplama' },
  { id: 'g2-4', type: 'true-false', question: '5 × 4 = 20', correctAnswer: 'Doğru', explanation: '5 × 4 = 20. Beş tane dört veya dört tane beş.', difficulty: 1, topic: 'Çarpma' },
  { id: 'g2-5', type: 'multiple-choice', question: '6 × 3 = ?', options: ['15', '16', '17', '18'], correctAnswer: '18', explanation: '6 × 3 = 18. Üç tane altı veya altı tane üç.', difficulty: 1, topic: 'Çarpma' },
  { id: 'g2-6', type: 'multiple-choice', question: '56 + 28 = ?', options: ['82', '83', '84', '85'], correctAnswer: '84', explanation: '50+20=70, 6+8=14, toplam 84.', difficulty: 2, topic: 'Toplama' },
  { id: 'g2-7', type: 'fill-blank', question: '7 × 5 = ___', correctAnswer: '35', explanation: '7 × 5 = 35', difficulty: 1, topic: 'Çarpma' },
  { id: 'g2-8', type: 'true-false', question: '72 > 68', correctAnswer: 'Doğru', explanation: '72 sayısı 68\'den büyüktür.', difficulty: 1, topic: 'Karşılaştırma' },
  { id: 'g2-9', type: 'multiple-choice', question: '81 - 35 = ?', options: ['44', '45', '46', '47'], correctAnswer: '46', explanation: '81 - 35 = 46', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g2-10', type: 'multiple-choice', question: '8 × 4 = ?', options: ['28', '30', '32', '34'], correctAnswer: '32', explanation: '8 × 4 = 32', difficulty: 1, topic: 'Çarpma' },
  { id: 'g2-11', type: 'fill-blank', question: '63 - ___ = 45', correctAnswer: '18', explanation: '63 - 45 = 18', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g2-12', type: 'true-false', question: '9 × 6 = 54', correctAnswer: 'Doğru', explanation: '9 × 6 = 54 doğrudur.', difficulty: 2, topic: 'Çarpma' },
  { id: 'g2-13', type: 'multiple-choice', question: '47 + 36 = ?', options: ['81', '82', '83', '84'], correctAnswer: '83', explanation: '40+30=70, 7+6=13, toplam 83.', difficulty: 2, topic: 'Toplama' },
  { id: 'g2-14', type: 'multiple-choice', question: '20 ÷ 4 = ?', options: ['4', '5', '6', '7'], correctAnswer: '5', explanation: '20 bölü 4 eşittir 5.', difficulty: 2, topic: 'Bölme' },
  { id: 'g2-15', type: 'fill-blank', question: '10 × 7 = ___', correctAnswer: '70', explanation: '10 × 7 = 70', difficulty: 1, topic: 'Çarpma' },
  { id: 'g2-16', type: 'true-false', question: '36 ÷ 6 = 5', correctAnswer: 'Yanlış', explanation: '36 ÷ 6 = 6, 5 değil.', difficulty: 2, topic: 'Bölme' },
  { id: 'g2-17', type: 'multiple-choice', question: '90 - 47 = ?', options: ['41', '42', '43', '44'], correctAnswer: '43', explanation: '90 - 47 = 43', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g2-18', type: 'multiple-choice', question: '15 ÷ 3 = ?', options: ['3', '4', '5', '6'], correctAnswer: '5', explanation: '15 bölü 3 eşittir 5.', difficulty: 2, topic: 'Bölme' },
  { id: 'g2-19', type: 'fill-blank', question: '___ × 8 = 48', correctAnswer: '6', explanation: '6 × 8 = 48', difficulty: 2, topic: 'Çarpma' },
  { id: 'g2-20', type: 'true-false', question: '99 < 100', correctAnswer: 'Doğru', explanation: '99 sayısı 100\'den küçüktür.', difficulty: 1, topic: 'Karşılaştırma' }
];

// 3. SINIF SORULARI
const grade3Questions: TestQuestion[] = [
  { id: 'g3-1', type: 'multiple-choice', question: '245 + 367 = ?', options: ['610', '611', '612', '613'], correctAnswer: '612', explanation: '245 + 367 = 612. Basamak basamak toplarız.', difficulty: 1, topic: 'Toplama' },
  { id: 'g3-2', type: 'multiple-choice', question: '523 - 186 = ?', options: ['335', '336', '337', '338'], correctAnswer: '337', explanation: '523 - 186 = 337', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g3-3', type: 'fill-blank', question: '12 × 7 = ___', correctAnswer: '84', explanation: '12 × 7 = 84', difficulty: 1, topic: 'Çarpma' },
  { id: 'g3-4', type: 'true-false', question: '144 ÷ 12 = 12', correctAnswer: 'Doğru', explanation: '144 ÷ 12 = 12 doğrudur.', difficulty: 2, topic: 'Bölme' },
  { id: 'g3-5', type: 'multiple-choice', question: '1/2 + 1/4 = ?', options: ['1/4', '2/4', '3/4', '1'], correctAnswer: '3/4', explanation: '2/4 + 1/4 = 3/4. Yarım ve çeyrek toplanır.', difficulty: 2, topic: 'Kesirler' },
  { id: 'g3-6', type: 'multiple-choice', question: '25 × 4 = ?', options: ['80', '90', '100', '110'], correctAnswer: '100', explanation: '25 × 4 = 100. Dört tane 25 kuruş = 1 TL.', difficulty: 1, topic: 'Çarpma' },
  { id: 'g3-7', type: 'fill-blank', question: '450 - ___ = 275', correctAnswer: '175', explanation: '450 - 275 = 175', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g3-8', type: 'true-false', question: '1/3 < 1/2', correctAnswer: 'Doğru', explanation: 'Üçte bir, yarımdan küçüktür.', difficulty: 2, topic: 'Kesirler' },
  { id: 'g3-9', type: 'multiple-choice', question: '72 ÷ 8 = ?', options: ['8', '9', '10', '11'], correctAnswer: '9', explanation: '72 ÷ 8 = 9', difficulty: 1, topic: 'Bölme' },
  { id: 'g3-10', type: 'multiple-choice', question: '678 + 245 = ?', options: ['921', '922', '923', '924'], correctAnswer: '923', explanation: '678 + 245 = 923', difficulty: 2, topic: 'Toplama' },
  { id: 'g3-11', type: 'fill-blank', question: '15 × ___ = 75', correctAnswer: '5', explanation: '15 × 5 = 75', difficulty: 2, topic: 'Çarpma' },
  { id: 'g3-12', type: 'true-false', question: '2/5 = 4/10', correctAnswer: 'Doğru', explanation: 'Denk kesirlerdir. 2/5 genişletilince 4/10 olur.', difficulty: 2, topic: 'Kesirler' },
  { id: 'g3-13', type: 'multiple-choice', question: '1000 - 456 = ?', options: ['542', '543', '544', '545'], correctAnswer: '544', explanation: '1000 - 456 = 544', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g3-14', type: 'multiple-choice', question: '35 × 6 = ?', options: ['200', '205', '210', '215'], correctAnswer: '210', explanation: '35 × 6 = 210', difficulty: 2, topic: 'Çarpma' },
  { id: 'g3-15', type: 'fill-blank', question: '96 ÷ 12 = ___', correctAnswer: '8', explanation: '96 ÷ 12 = 8', difficulty: 2, topic: 'Bölme' },
  { id: 'g3-16', type: 'true-false', question: '3/4 > 2/3', correctAnswer: 'Doğru', explanation: '3/4 = 9/12, 2/3 = 8/12. 9/12 > 8/12', difficulty: 3, topic: 'Kesirler' },
  { id: 'g3-17', type: 'multiple-choice', question: 'Bir karenin 4 kenarı eşit. Bir kenarı 15 cm ise çevresi kaç cm?', options: ['45', '50', '55', '60'], correctAnswer: '60', explanation: '4 × 15 = 60 cm', difficulty: 2, topic: 'Geometri' },
  { id: 'g3-18', type: 'multiple-choice', question: '18 × 11 = ?', options: ['188', '196', '198', '200'], correctAnswer: '198', explanation: '18 × 11 = 198', difficulty: 2, topic: 'Çarpma' },
  { id: 'g3-19', type: 'fill-blank', question: '3/8 + 2/8 = ___/8', correctAnswer: '5', explanation: '3/8 + 2/8 = 5/8', difficulty: 2, topic: 'Kesirler' },
  { id: 'g3-20', type: 'true-false', question: '500 × 2 = 1000', correctAnswer: 'Doğru', explanation: '500 × 2 = 1000 doğrudur.', difficulty: 1, topic: 'Çarpma' }
];

// 4. SINIF SORULARI
const grade4Questions: TestQuestion[] = [
  { id: 'g4-1', type: 'multiple-choice', question: '4567 + 2895 = ?', options: ['7460', '7461', '7462', '7463'], correctAnswer: '7462', explanation: '4567 + 2895 = 7462', difficulty: 2, topic: 'Toplama' },
  { id: 'g4-2', type: 'multiple-choice', question: '8034 - 3678 = ?', options: ['4354', '4355', '4356', '4357'], correctAnswer: '4356', explanation: '8034 - 3678 = 4356', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g4-3', type: 'fill-blank', question: '125 × 8 = ___', correctAnswer: '1000', explanation: '125 × 8 = 1000', difficulty: 2, topic: 'Çarpma' },
  { id: 'g4-4', type: 'true-false', question: '3/4 - 1/2 = 1/4', correctAnswer: 'Doğru', explanation: '3/4 - 2/4 = 1/4 doğrudur.', difficulty: 2, topic: 'Kesirler' },
  { id: 'g4-5', type: 'multiple-choice', question: '756 ÷ 12 = ?', options: ['61', '62', '63', '64'], correctAnswer: '63', explanation: '756 ÷ 12 = 63', difficulty: 2, topic: 'Bölme' },
  { id: 'g4-6', type: 'multiple-choice', question: '2/5 + 3/10 = ?', options: ['5/10', '6/10', '7/10', '8/10'], correctAnswer: '7/10', explanation: '4/10 + 3/10 = 7/10', difficulty: 2, topic: 'Kesirler' },
  { id: 'g4-7', type: 'fill-blank', question: '15.000 - ___ = 8.750', correctAnswer: '6250', explanation: '15.000 - 8.750 = 6.250', difficulty: 2, topic: 'Çıkarma' },
  { id: 'g4-8', type: 'true-false', question: '1 m² = 100 cm²', correctAnswer: 'Yanlış', explanation: '1 m² = 10.000 cm² (100 × 100)', difficulty: 2, topic: 'Ölçüler' },
  { id: 'g4-9', type: 'multiple-choice', question: 'Bir dikdörtgenin uzun kenarı 12 cm, kısa kenarı 8 cm. Alanı kaç cm²?', options: ['94', '95', '96', '97'], correctAnswer: '96', explanation: '12 × 8 = 96 cm²', difficulty: 2, topic: 'Geometri' },
  { id: 'g4-10', type: 'multiple-choice', question: '45 × 23 = ?', options: ['1025', '1030', '1035', '1040'], correctAnswer: '1035', explanation: '45 × 23 = 1035', difficulty: 2, topic: 'Çarpma' },
  { id: 'g4-11', type: 'fill-blank', question: '5/6 - 1/3 = ___/6', correctAnswer: '3', explanation: '5/6 - 2/6 = 3/6', difficulty: 2, topic: 'Kesirler' },
  { id: 'g4-12', type: 'true-false', question: '1 km = 1000 m', correctAnswer: 'Doğru', explanation: '1 kilometre = 1000 metredir.', difficulty: 1, topic: 'Ölçüler' },
  { id: 'g4-13', type: 'multiple-choice', question: '2345 × 4 = ?', options: ['9370', '9375', '9380', '9385'], correctAnswer: '9380', explanation: '2345 × 4 = 9380', difficulty: 2, topic: 'Çarpma' },
  { id: 'g4-14', type: 'multiple-choice', question: '1296 ÷ 18 = ?', options: ['70', '71', '72', '73'], correctAnswer: '72', explanation: '1296 ÷ 18 = 72', difficulty: 3, topic: 'Bölme' },
  { id: 'g4-15', type: 'fill-blank', question: '3.5 × 2 = ___', correctAnswer: '7', explanation: '3,5 × 2 = 7', difficulty: 2, topic: 'Ondalık Sayılar' },
  { id: 'g4-16', type: 'true-false', question: '0.5 = 1/2', correctAnswer: 'Doğru', explanation: '0,5 ile 1/2 eşittir.', difficulty: 1, topic: 'Ondalık Sayılar' },
  { id: 'g4-17', type: 'multiple-choice', question: 'Bir üçgenin iç açıları toplamı kaç derecedir?', options: ['90°', '120°', '180°', '360°'], correctAnswer: '180°', explanation: 'Üçgenin iç açıları toplamı 180 derecedir.', difficulty: 2, topic: 'Geometri' },
  { id: 'g4-18', type: 'multiple-choice', question: '67 × 89 = ?', options: ['5953', '5963', '5973', '5983'], correctAnswer: '5963', explanation: '67 × 89 = 5963', difficulty: 3, topic: 'Çarpma' },
  { id: 'g4-19', type: 'fill-blank', question: '2 saat 30 dakika = ___ dakika', correctAnswer: '150', explanation: '2 × 60 + 30 = 150 dakika', difficulty: 2, topic: 'Ölçüler' },
  { id: 'g4-20', type: 'true-false', question: '1/4 + 1/4 + 1/4 + 1/4 = 1', correctAnswer: 'Doğru', explanation: '4/4 = 1 tam', difficulty: 1, topic: 'Kesirler' }
];

export const testQuestions: Record<number, TestQuestion[]> = {
  1: grade1Questions,
  2: grade2Questions,
  3: grade3Questions,
  4: grade4Questions
};

export default testQuestions;
