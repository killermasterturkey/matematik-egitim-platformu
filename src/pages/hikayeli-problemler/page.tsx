import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/feature/Header';
import { Confetti } from '../../components/ui/Confetti';
import { AnimatedCharacter, StarRating, AnimatedProgressBar } from '../../components/ui/AnimatedCharacter';
import { showCelebration, showEncouragement } from '../../components/ui/MessagePopup';

interface Story {
  id: number;
  title: string;
  category: string;
  icon: string;
  color: string;
  bgImage: string;
  difficulty: 'kolay' | 'orta' | 'zor';
  description: string;
  badge: string;
  problems: Problem[];
}

interface Problem {
  id: number;
  story: string;
  question: string;
  answer: number;
  options: number[];
  hint: string;
  explanation: string;
  characters: string[];
  animation: 'counting' | 'sharing' | 'combining' | 'removing' | 'jumping' | 'flying' | 'swimming' | 'dancing';
  funFact?: string;
}

const STORIES: Story[] = [
  {
    id: 1,
    title: 'Market Alışverişi',
    category: 'Günlük Hayat',
    icon: '🛒',
    color: 'from-green-400 to-emerald-500',
    bgImage: 'from-green-100 to-emerald-100',
    difficulty: 'kolay',
    description: 'Ayşe ve ailesi markette alışveriş yapıyor. Sen de onlara yardım et!',
    badge: '🛍️',
    problems: [
      {
        id: 1,
        story: 'Ayşe markete gitti. Sepetine 5 kırmızı elma ve 3 yeşil elma koydu. Annesi de sepete 4 armut ekledi.',
        question: 'Ayşe\'nin sepetinde toplam kaç meyve var?',
        answer: 12,
        options: [10, 11, 12, 13],
        hint: 'Önce elmaları topla, sonra armutları ekle!',
        explanation: '5 kırmızı elma + 3 yeşil elma + 4 armut = 12 meyve. Üç sayıyı topladık!',
        characters: ['🍎', '🍎', '🍎', '🍎', '🍎', '🍏', '🍏', '🍏', '🍐', '🍐', '🍐', '🍐'],
        animation: 'combining',
        funFact: 'Biliyor musun? Bir elma ağacı yılda yaklaşık 400 elma verebilir!'
      },
      {
        id: 2,
        story: 'Ali\'nin cebinde 50 TL var. Bir oyuncak araba 23 TL, bir top da 12 TL.',
        question: 'Ali ikisini de alırsa kaç TL\'si kalır?',
        answer: 15,
        options: [13, 14, 15, 16],
        hint: 'Önce iki fiyatı topla, sonra paradan çıkar!',
        explanation: '23 + 12 = 35 TL harcadı. 50 - 35 = 15 TL kaldı.',
        characters: ['💵', '🚗', '⚽'],
        animation: 'removing',
        funFact: 'Para yönetimi çok önemli! Küçük yaşta tasarruf etmeyi öğrenmek harika!'
      },
      {
        id: 3,
        story: 'Markette 6 raf var ve her rafta 8 paket süt duruyor. Bir müşteri 10 paket süt aldı.',
        question: 'Markette kaç paket süt kaldı?',
        answer: 38,
        options: [36, 37, 38, 39],
        hint: 'Önce toplam sütü bul, sonra alınanı çıkar!',
        explanation: '6 × 8 = 48 süt vardı. 48 - 10 = 38 süt kaldı.',
        characters: ['🥛', '🥛', '🥛', '🥛', '🥛', '🥛', '🥛', '🥛'],
        animation: 'counting',
        funFact: 'İnekler günde yaklaşık 25-30 litre süt üretir!'
      },
      {
        id: 4,
        story: 'Kasada 4 kişi sıra bekliyor. Her kişinin sepetinde ortalama 7 ürün var.',
        question: 'Kasada toplam kaç ürün taranacak?',
        answer: 28,
        options: [24, 26, 28, 30],
        hint: 'Kişi sayısını ürün sayısıyla çarp!',
        explanation: '4 kişi × 7 ürün = 28 ürün taranacak.',
        characters: ['🧑', '🧑', '🧑', '🧑', '📦', '📦', '📦'],
        animation: 'counting'
      },
      {
        id: 5,
        story: '72 adet yumurta 6 koliye eşit olarak yerleştirilecek.',
        question: 'Her koliye kaç yumurta konulur?',
        answer: 12,
        options: [10, 11, 12, 13],
        hint: 'Toplam yumurtayı koli sayısına böl!',
        explanation: '72 ÷ 6 = 12 yumurta. Her kolide 12 yumurta!',
        characters: ['🥚', '🥚', '🥚', '🥚', '🥚', '🥚', '📦'],
        animation: 'sharing',
        funFact: 'Bir tavuk yılda yaklaşık 300 yumurta yumurtlayabilir!'
      },
      {
        id: 6,
        story: 'Market indirim yapıyor! 5 TL\'lik çikolata şimdi 3 TL. Ayşe 4 çikolata almak istiyor.',
        question: 'Ayşe indirimle toplam kaç TL kazanır?',
        answer: 8,
        options: [6, 7, 8, 9],
        hint: 'Her çikolatadan ne kadar tasarruf edildi? Sonra 4 ile çarp!',
        explanation: 'Her çikolatada 5-3=2 TL tasarruf. 4 × 2 = 8 TL kazandı!',
        characters: ['🍫', '🍫', '🍫', '🍫', '💰'],
        animation: 'dancing'
      }
    ]
  },
  {
    id: 2,
    title: 'Okul Bahçesi',
    category: 'Okul',
    icon: '🏫',
    color: 'from-blue-400 to-indigo-500',
    bgImage: 'from-blue-100 to-indigo-100',
    difficulty: 'kolay',
    description: 'Okul bahçesinde arkadaşlarınla birlikte matematik öğren!',
    badge: '🎒',
    problems: [
      {
        id: 1,
        story: 'Okul bahçesinde 35 öğrenci oynuyor. Teneffüs bitince 12 öğrenci sınıfa gitti, sonra 8 öğrenci daha gitti.',
        question: 'Bahçede kaç öğrenci kaldı?',
        answer: 15,
        options: [13, 14, 15, 16],
        hint: 'Gidenleri topla, sonra başlangıçtan çıkar!',
        explanation: '12 + 8 = 20 öğrenci gitti. 35 - 20 = 15 öğrenci kaldı.',
        characters: ['👧', '👦', '👧', '👦', '👧'],
        animation: 'removing'
      },
      {
        id: 2,
        story: 'Sınıfta 6 sıra var ve her sırada 4 öğrenci oturuyor. Bugün 5 öğrenci hasta.',
        question: 'Sınıfta bugün kaç öğrenci var?',
        answer: 19,
        options: [17, 18, 19, 20],
        hint: 'Önce toplam öğrenciyi bul, sonra hastaları çıkar!',
        explanation: '6 × 4 = 24 toplam. 24 - 5 = 19 öğrenci var.',
        characters: ['📚', '✏️', '📖', '👨‍🎓'],
        animation: 'counting'
      },
      {
        id: 3,
        story: '48 tane kalem 8 kutuya eşit olarak paylaştırılacak. Her kutudan 2 kalem kırık çıktı.',
        question: 'Toplam kaç sağlam kalem var?',
        answer: 32,
        options: [30, 31, 32, 33],
        hint: 'Her kutuya düşen kalemden kırıkları çıkar!',
        explanation: '48 ÷ 8 = 6 kalem/kutu. 8 kutu × 2 kırık = 16 kırık. 48 - 16 = 32 sağlam.',
        characters: ['✏️', '✏️', '✏️', '✏️', '✏️', '✏️'],
        animation: 'sharing'
      },
      {
        id: 4,
        story: 'Kütüphanede 5 raf var. Her rafta 18 kitap var. Öğretmen 25 kitap daha ekledi.',
        question: 'Kütüphanede şimdi kaç kitap var?',
        answer: 115,
        options: [110, 112, 115, 118],
        hint: 'Önce raflardaki toplam kitabı bul, sonra yenileri ekle!',
        explanation: '5 × 18 = 90 kitap vardı. 90 + 25 = 115 kitap oldu.',
        characters: ['📚', '📚', '📚', '📚', '📚'],
        animation: 'combining'
      },
      {
        id: 5,
        story: 'Okul korosu 45 öğrenciden oluşuyor. Kızlar erkeklerden 9 kişi fazla.',
        question: 'Koroda kaç kız öğrenci var?',
        answer: 27,
        options: [25, 26, 27, 28],
        hint: '45\'ten 9\'u çıkar ve 2\'ye böl, sonra 9 ekle!',
        explanation: '(45-9)÷2=18 erkek. 18+9=27 kız. Kontrol: 18+27=45 ✓',
        characters: ['👧', '👧', '👧', '🎤', '🎵'],
        animation: 'dancing',
        funFact: 'Koroda şarkı söylemek hem eğlenceli hem de beyin gelişimi için çok faydalı!'
      },
      {
        id: 6,
        story: 'Kantin kuyruğunda 7 öğrenci var. Her öğrenci 3\'er simit alacak. Kantinde 25 simit kalmış.',
        question: 'Tüm öğrencilere simit yetecek mi? Kaç simit kalır veya eksik?',
        answer: 4,
        options: [2, 3, 4, 5],
        hint: '7 × 3 kaç yapar? 25\'ten çıkar!',
        explanation: '7 × 3 = 21 simit gerekli. 25 - 21 = 4 simit kalır!',
        characters: ['🥯', '🥯', '🥯', '🥯', '🥯'],
        animation: 'counting'
      }
    ]
  },
  {
    id: 3,
    title: 'Hayvanat Bahçesi',
    category: 'Macera',
    icon: '🦁',
    color: 'from-orange-400 to-amber-500',
    bgImage: 'from-orange-100 to-amber-100',
    difficulty: 'orta',
    description: 'Hayvanat bahçesinde hayvanları sayarak matematik öğren!',
    badge: '🐾',
    problems: [
      {
        id: 1,
        story: 'Hayvanat bahçesinde 15 aslan, 12 kaplan ve 8 leopar var. Bakıcı her birine 2\'şer kg et veriyor.',
        question: 'Toplam kaç kg et gerekir?',
        answer: 70,
        options: [65, 68, 70, 72],
        hint: 'Önce toplam hayvan sayısını bul, sonra 2 ile çarp!',
        explanation: '15 + 12 + 8 = 35 hayvan. 35 × 2 = 70 kg et.',
        characters: ['🦁', '🐯', '🐆'],
        animation: 'combining',
        funFact: 'Bir aslan günde 7 kg\'a kadar et yiyebilir!'
      },
      {
        id: 2,
        story: 'Kuş evinde 56 papağan var. Bunların yarısı yeşil, geri kalanın yarısı kırmızı, diğerleri mavi.',
        question: 'Kaç tane mavi papağan var?',
        answer: 14,
        options: [12, 13, 14, 15],
        hint: 'Yarısı yeşil, kalanın yarısı kırmızı...',
        explanation: '56÷2=28 yeşil. 28÷2=14 kırmızı. 28-14=14 mavi.',
        characters: ['🦜', '🦜', '🦜', '🦜'],
        animation: 'flying',
        funFact: 'Papağanlar 80 yıldan fazla yaşayabilir!'
      },
      {
        id: 3,
        story: '4 akvaryumda toplam 84 balık var. Her akvaryumda eşit sayıda balık var ve her akvaryumdan 6 balık başka yere taşındı.',
        question: 'Şimdi her akvaryumda kaç balık var?',
        answer: 15,
        options: [13, 14, 15, 16],
        hint: 'Önce her akvaryumdaki balık sayısını bul, sonra 6 çıkar!',
        explanation: '84 ÷ 4 = 21 balık/akvaryum. 21 - 6 = 15 balık kaldı.',
        characters: ['🐠', '🐟', '🐡', '🦈'],
        animation: 'swimming'
      },
      {
        id: 4,
        story: 'Fil bahçesinde 3 yetişkin fil ve 2 yavru fil var. Yetişkin filler günde 150 kg, yavrular 50 kg yem yiyor.',
        question: 'Fillere günde toplam kaç kg yem gerekir?',
        answer: 550,
        options: [500, 525, 550, 575],
        hint: 'Yetişkin fillerin yemini ve yavruların yemini ayrı hesapla!',
        explanation: '3 × 150 = 450 kg (yetişkin). 2 × 50 = 100 kg (yavru). 450 + 100 = 550 kg.',
        characters: ['🐘', '🐘', '🐘', '🐘', '🐘'],
        animation: 'counting',
        funFact: 'Filler dünyanın en büyük kara memelileridir ve mükemmel hafızaları var!'
      },
      {
        id: 5,
        story: 'Maymun adasında 42 maymun yaşıyor. Her maymun günde 8 muz yiyor. Bakıcı 400 muz getirdi.',
        question: 'Muzlar kaç gün yeter?',
        answer: 1,
        options: [1, 2, 3, 4],
        hint: 'Önce günlük muz tüketimini hesapla!',
        explanation: '42 × 8 = 336 muz/gün. 400 ÷ 336 = 1.19, yani sadece 1 tam gün yeter.',
        characters: ['🐒', '🐒', '🐒', '🍌', '🍌', '🍌'],
        animation: 'jumping'
      },
      {
        id: 6,
        story: 'Penguen havuzunda 5 sıra halinde penguenler duruyor. İlk sırada 4, her sonraki sırada 2 fazla penguen var.',
        question: 'Toplam kaç penguen var?',
        answer: 40,
        options: [35, 38, 40, 42],
        hint: '1.sıra:4, 2.sıra:6, 3.sıra:8... hepsini topla!',
        explanation: '4 + 6 + 8 + 10 + 12 = 40 penguen.',
        characters: ['🐧', '🐧', '🐧', '🐧', '🐧'],
        animation: 'dancing',
        funFact: 'Penguenler -60°C soğukta bile hayatta kalabilir!'
      }
    ]
  },
  {
    id: 4,
    title: 'Doğum Günü Partisi',
    category: 'Kutlama',
    icon: '🎂',
    color: 'from-pink-400 to-rose-500',
    bgImage: 'from-pink-100 to-rose-100',
    difficulty: 'kolay',
    description: 'Doğum günü partisinde eğlenerek matematik öğren!',
    badge: '🎁',
    problems: [
      {
        id: 1,
        story: 'Ece\'nin pastası 16 dilime kesildi. Parti başında herkes 1\'er dilim aldı ve 4 dilim kaldı.',
        question: 'Partiye kaç kişi gelmiş?',
        answer: 12,
        options: [10, 11, 12, 13],
        hint: 'Yenen dilimleri bul!',
        explanation: '16 - 4 = 12 dilim yendi. Her kişi 1 dilim yedi, yani 12 kişi.',
        characters: ['🍰', '🍰', '🍰', '🍰'],
        animation: 'removing'
      },
      {
        id: 2,
        story: 'Partiye 8 erkek ve 11 kız çocuk geldi. Her çocuğa 3\'er balon verildi.',
        question: 'Toplam kaç balon dağıtıldı?',
        answer: 57,
        options: [54, 55, 57, 60],
        hint: 'Önce toplam çocuk sayısını bul, sonra 3 ile çarp!',
        explanation: '8 + 11 = 19 çocuk. 19 × 3 = 57 balon.',
        characters: ['🎈', '🎈', '🎈', '👦', '👧'],
        animation: 'combining'
      },
      {
        id: 3,
        story: '60 şeker 5 çocuğa eşit dağıtılacak. Her çocuk 4 şekerini kardeşine verecek.',
        question: 'Her çocukta kaç şeker kalır?',
        answer: 8,
        options: [6, 7, 8, 9],
        hint: 'Önce her çocuğa düşeni bul, sonra 4 çıkar!',
        explanation: '60 ÷ 5 = 12 şeker/çocuk. 12 - 4 = 8 şeker kalır.',
        characters: ['🍬', '🍬', '🍬', '🍬', '🍬', '🍬', '🍬', '🍬'],
        animation: 'sharing'
      },
      {
        id: 4,
        story: 'Doğum günü hediyesi olarak 7 arkadaş birlikte para topladı. Her biri 15 TL verdi. Hediye 85 TL.',
        question: 'Kaç TL arttı?',
        answer: 20,
        options: [15, 18, 20, 22],
        hint: 'Toplanan parayı hesapla, hediye fiyatını çıkar!',
        explanation: '7 × 15 = 105 TL toplandı. 105 - 85 = 20 TL arttı.',
        characters: ['🎁', '💵', '💵', '💵'],
        animation: 'combining',
        funFact: 'Arkadaşlarla birlikte hediye almak hem ekonomik hem de eğlenceli!'
      },
      {
        id: 5,
        story: 'Parti oyununda 3 takım var. Her takımda 6 kişi var. Birinci takım 45, ikinci takım 38, üçüncü takım 42 puan aldı.',
        question: 'Tüm takımların toplam puanı kaç?',
        answer: 125,
        options: [120, 123, 125, 128],
        hint: 'Üç takımın puanlarını topla!',
        explanation: '45 + 38 + 42 = 125 puan.',
        characters: ['🏆', '🥈', '🥉', '⭐'],
        animation: 'dancing'
      },
      {
        id: 6,
        story: 'Pasta yapmak için 250 gram un, 150 gram şeker ve 100 gram tereyağı gerekiyor. 2 pasta yapılacak.',
        question: 'Toplam kaç gram malzeme gerekir?',
        answer: 1000,
        options: [900, 950, 1000, 1050],
        hint: 'Bir pastanın malzemelerini topla, sonra 2 ile çarp!',
        explanation: '250+150+100=500 gram/pasta. 2 pasta için: 500×2=1000 gram.',
        characters: ['🎂', '🥣', '🧈', '🍚'],
        animation: 'combining'
      }
    ]
  },
  {
    id: 5,
    title: 'Spor Müsabakası',
    category: 'Spor',
    icon: '⚽',
    color: 'from-cyan-400 to-teal-500',
    bgImage: 'from-cyan-100 to-teal-100',
    difficulty: 'orta',
    description: 'Spor sahalarında matematik şampiyonu ol!',
    badge: '🏅',
    problems: [
      {
        id: 1,
        story: 'Futbol liginde takımımız 18 maç oynadı. 10 galibiyet, 5 beraberlik aldı ve 27 gol attı.',
        question: 'Kaç maç kaybedildi?',
        answer: 3,
        options: [2, 3, 4, 5],
        hint: 'Toplam maçtan galibiyet ve beraberlikleri çıkar!',
        explanation: '18 - 10 - 5 = 3 maç kaybedildi.',
        characters: ['⚽', '⚽', '⚽', '🥅'],
        animation: 'combining',
        funFact: 'Futbol dünyanın en popüler sporudur, 4 milyardan fazla taraftarı var!'
      },
      {
        id: 2,
        story: 'Basketbol maçında takımımız 4 çeyrek oynadı. Her çeyrekte sırasıyla 18, 22, 15, 25 sayı yaptı.',
        question: 'Takımımız toplam kaç sayı yaptı?',
        answer: 80,
        options: [75, 78, 80, 82],
        hint: 'Dört çeyreğin puanlarını topla!',
        explanation: '18 + 22 + 15 + 25 = 80 sayı.',
        characters: ['🏀', '🏀', '🏀', '🏀'],
        animation: 'jumping'
      },
      {
        id: 3,
        story: 'Yüzme yarışında 6 kulvar var. Her kulvarda 1 sporcu yarışıyor. 3 seri yapıldı ve toplam madalyalar dağıtıldı.',
        question: 'Yarışmada toplam kaç sporcu yarıştı?',
        answer: 18,
        options: [15, 16, 18, 20],
        hint: 'Kulvar sayısını seri sayısıyla çarp!',
        explanation: '6 kulvar × 3 seri = 18 sporcu.',
        characters: ['🏊', '🏊', '🏊', '🏅'],
        animation: 'swimming'
      },
      {
        id: 4,
        story: 'Atletizm pistinde 8 koşucu yarışıyor. Pist 400 metre. Her koşucu 3 tur atacak.',
        question: 'Bir koşucu toplam kaç metre koşacak?',
        answer: 1200,
        options: [1000, 1100, 1200, 1400],
        hint: 'Bir turun uzunluğunu tur sayısıyla çarp!',
        explanation: '400 × 3 = 1200 metre.',
        characters: ['🏃', '🏃', '🏃', '🏃'],
        animation: 'counting',
        funFact: 'Usain Bolt 100 metreyi 9.58 saniyede koşarak dünya rekoru kırdı!'
      },
      {
        id: 5,
        story: 'Voleybol maçında takımımız 3-2 kazandı. Kazanılan setlerde 25, 26, 25 sayı yapıldı. Kaybedilen setlerde rakip 25, 25 sayı yaptı.',
        question: 'Takımımız toplam kaç sayı yaptı?',
        answer: 76,
        options: [72, 74, 76, 78],
        hint: 'Kazanılan üç setteki puanları topla!',
        explanation: '25 + 26 + 25 = 76 sayı.',
        characters: ['🏐', '🏐', '🏐'],
        animation: 'jumping'
      },
      {
        id: 6,
        story: 'Okul spor gününde 120 öğrenci katıldı. Öğrencilerin 1/3\'ü futbol, 1/4\'ü basketbol, kalanı voleybol oynadı.',
        question: 'Kaç öğrenci voleybol oynadı?',
        answer: 50,
        options: [45, 48, 50, 52],
        hint: '120\'nin 1/3\'ü ve 1/4\'ünü bul, sonra çıkar!',
        explanation: 'Futbol: 120÷3=40. Basketbol: 120÷4=30. Voleybol: 120-40-30=50.',
        characters: ['⚽', '🏀', '🏐', '🎽'],
        animation: 'dancing'
      }
    ]
  },
  {
    id: 6,
    title: 'Uzay Macerası',
    category: 'Bilim Kurgu',
    icon: '🚀',
    color: 'from-indigo-500 to-purple-600',
    bgImage: 'from-indigo-100 to-purple-100',
    difficulty: 'zor',
    description: 'Uzayda gezegenler arasında matematik yolculuğuna çık!',
    badge: '🌟',
    problems: [
      {
        id: 1,
        story: 'Uzay gemisi saniyede 8 kilometre hızla gidiyor. Ay\'a ulaşmak için 48.000 kilometre yol alması gerekiyor.',
        question: 'Uzay gemisi Ay\'a kaç saniyede ulaşır?',
        answer: 6000,
        options: [5500, 5800, 6000, 6200],
        hint: 'Toplam yolu hıza böl!',
        explanation: '48.000 ÷ 8 = 6.000 saniye.',
        characters: ['🚀', '🌍', '🌙'],
        animation: 'flying',
        funFact: 'Ay dünyadan ortalama 384.400 km uzaklıkta!'
      },
      {
        id: 2,
        story: 'Uzay istasyonunda 12 astronot var. Her astronot günde 3 öğün yemek yiyor. Yemekler 90 günlük stoğa göre hazırlandı.',
        question: 'Toplam kaç porsiyon yemek hazırlandı?',
        answer: 3240,
        options: [3000, 3150, 3240, 3360],
        hint: 'Astronot × öğün × gün',
        explanation: '12 × 3 × 90 = 3.240 porsiyon.',
        characters: ['👨‍🚀', '👩‍🚀', '🍽️', '🛸'],
        animation: 'counting'
      },
      {
        id: 3,
        story: 'Bir galakside 5 gezegen var. Her gezegenin sırasıyla 2, 4, 7, 3 ve 6 tane uydusu var.',
        question: 'Bu galakside toplam kaç uydu var?',
        answer: 22,
        options: [20, 21, 22, 23],
        hint: 'Tüm uyduları topla!',
        explanation: '2 + 4 + 7 + 3 + 6 = 22 uydu.',
        characters: ['🪐', '🌍', '🌕', '☀️'],
        animation: 'combining'
      },
      {
        id: 4,
        story: 'Mars\'a yerleşim kuruluyor. 8 kubbe inşa edilecek ve her kubbede 15 kişi yaşayabilecek. Şu anda 45 kişi var.',
        question: 'Tüm kubbeler bittiğinde kaç kişi daha yerleşebilir?',
        answer: 75,
        options: [70, 73, 75, 80],
        hint: 'Toplam kapasiteden mevcut kişileri çıkar!',
        explanation: '8 × 15 = 120 kapasite. 120 - 45 = 75 kişi daha.',
        characters: ['🏠', '👨‍🚀', '🔴'],
        animation: 'combining',
        funFact: 'NASA 2030\'larda Mars\'a insan göndermeyi planlıyor!'
      },
      {
        id: 5,
        story: 'Uzay teleskopları 1 saatte 240 fotoğraf çekiyor. 5 teleskop 3 saat boyunca çalıştı.',
        question: 'Toplam kaç fotoğraf çekildi?',
        answer: 3600,
        options: [3200, 3400, 3600, 3800],
        hint: 'Teleskop × fotoğraf/saat × saat',
        explanation: '5 × 240 × 3 = 3.600 fotoğraf.',
        characters: ['🔭', '📸', '⭐', '🌌'],
        animation: 'counting'
      },
      {
        id: 6,
        story: 'Asteroit kuşağında 1.000.000 asteroit var. Bunların %1\'i 1 km\'den büyük, büyüklerin yarısı potansiyel tehlike.',
        question: 'Kaç asteroit potansiyel tehlike?',
        answer: 5000,
        options: [4500, 4800, 5000, 5500],
        hint: '%1\'i bul, sonra 2\'ye böl!',
        explanation: '1.000.000 × 0.01 = 10.000 büyük. 10.000 ÷ 2 = 5.000 tehlikeli.',
        characters: ['☄️', '☄️', '☄️', '🌍'],
        animation: 'flying'
      }
    ]
  },
  {
    id: 7,
    title: 'Denizaltı Keşfi',
    category: 'Macera',
    icon: '🐙',
    color: 'from-blue-500 to-cyan-600',
    bgImage: 'from-blue-100 to-cyan-100',
    difficulty: 'orta',
    description: 'Okyanusun derinliklerinde matematik hazineleri keşfet!',
    badge: '🦑',
    problems: [
      {
        id: 1,
        story: 'Denizaltı 200 metre derinlikte. Dakikada 15 metre daha derine iniyor.',
        question: '6 dakika sonra kaç metre derinlikte olur?',
        answer: 290,
        options: [280, 285, 290, 295],
        hint: 'İniş miktarını hesapla ve başlangıca ekle!',
        explanation: '15 × 6 = 90 metre indi. 200 + 90 = 290 metre.',
        characters: ['🚢', '🌊', '⬇️'],
        animation: 'swimming',
        funFact: 'Mariana Çukuru 11.034 metre ile dünyanın en derin noktası!'
      },
      {
        id: 2,
        story: 'Mercan resifinde 45 palyaço balığı, 32 deniz atı ve 28 ıstakoz yaşıyor. Fırtına sonrası hayvanların 1/5\'i başka yere gitti.',
        question: 'Resifde kaç hayvan kaldı?',
        answer: 84,
        options: [80, 82, 84, 86],
        hint: 'Toplam hayvanın 4/5\'i kaç?',
        explanation: 'Toplam: 45+32+28=105. Gidenler: 105÷5=21. Kalanlar: 105-21=84.',
        characters: ['🐠', '🦑', '🦞', '🪸'],
        animation: 'swimming'
      },
      {
        id: 3,
        story: 'Hazine sandığında 156 altın sikke var. Bunlar 12 dalgıç arasında eşit paylaşılacak. Her dalgıç 3 sikkeyi müzeye bağışlayacak.',
        question: 'Her dalgıçta kaç sikke kalır?',
        answer: 10,
        options: [8, 9, 10, 11],
        hint: 'Önce payı bul, sonra bağışı çıkar!',
        explanation: '156 ÷ 12 = 13 sikke/dalgıç. 13 - 3 = 10 sikke kalır.',
        characters: ['💰', '🏴‍☠️', '🤿'],
        animation: 'sharing'
      },
      {
        id: 4,
        story: 'Balina ailesi 4 yetişkin ve 2 yavrdan oluşuyor. Yetişkinler günde 1500 kg, yavrular 300 kg balık yiyor.',
        question: 'Aile haftada (7 gün) kaç kg balık yer?',
        answer: 46200,
        options: [42000, 44100, 46200, 48300],
        hint: 'Günlük tüketimi bul, 7 ile çarp!',
        explanation: 'Günlük: 4×1500=6000 + 2×300=600 = 6600 kg. Haftalık: 6600×7=46.200 kg.',
        characters: ['🐋', '🐋', '🐋', '🐟'],
        animation: 'swimming',
        funFact: 'Mavi balina günde 4 ton kadar krili yiyebilir!'
      },
      {
        id: 5,
        story: 'Ahtapot 8 kolunda toplam 240 vantuz taşıyor. 2 kolu yaralandı ve o kollardaki vantuzları kullanamıyor.',
        question: 'Ahtapot kaç vantuzunu kullanabiliyor?',
        answer: 180,
        options: [170, 175, 180, 185],
        hint: 'Her kolda kaç vantuz var? Sonra 6 kol için hesapla!',
        explanation: 'Her kolda: 240÷8=30 vantuz. 6 sağlam kol: 6×30=180 vantuz.',
        characters: ['🐙', '🦑'],
        animation: 'counting'
      },
      {
        id: 6,
        story: 'Deniz kaplumbağası yumurtlama sezonunda 6 kez yuva yapıyor. Her seferinde 95-105 arası yumurta bırakıyor.',
        question: 'Ortalama 100 yumurta hesabıyla, bir sezon kaç yumurta bırakılır?',
        answer: 600,
        options: [550, 575, 600, 625],
        hint: 'Yuva sayısı × ortalama yumurta',
        explanation: '6 × 100 = 600 yumurta.',
        characters: ['🐢', '🥚', '🏖️'],
        animation: 'counting',
        funFact: 'Deniz kaplumbağaları 100 milyon yıldan fazla süredir yaşıyor!'
      }
    ]
  },
  {
    id: 8,
    title: 'Mutfak Serüveni',
    category: 'Yemek',
    icon: '👨‍🍳',
    color: 'from-red-400 to-orange-500',
    bgImage: 'from-red-100 to-orange-100',
    difficulty: 'kolay',
    description: 'Şef olarak lezzetli matematik tarifleri hazırla!',
    badge: '🍽️',
    problems: [
      {
        id: 1,
        story: 'Pizza tarifi için 300 gram un, 200 gram peynir ve 150 gram sos gerekiyor. 4 pizza yapılacak.',
        question: 'Toplam kaç gram malzeme gerekir?',
        answer: 2600,
        options: [2400, 2500, 2600, 2700],
        hint: 'Bir pizzanın malzemesini bul, 4 ile çarp!',
        explanation: 'Bir pizza: 300+200+150=650 gram. 4 pizza: 650×4=2600 gram.',
        characters: ['🍕', '🧀', '🍅'],
        animation: 'combining'
      },
      {
        id: 2,
        story: 'Şef 48 kurabiye yaptı. Bunların yarısı çikolatalı, çikolatalıların yarısı da fındıklı.',
        question: 'Kaç kurabiye hem çikolatalı hem fındıklı?',
        answer: 12,
        options: [10, 11, 12, 13],
        hint: 'Önce çikolatalı sayısını, sonra fındıklıları bul!',
        explanation: 'Çikolatalı: 48÷2=24. Fındıklı çikolatalı: 24÷2=12.',
        characters: ['🍪', '🍫', '🥜'],
        animation: 'counting',
        funFact: 'Çikolata endorfin salgılar ve mutluluk hissi verir!'
      },
      {
        id: 3,
        story: 'Limonata yapmak için 8 limon sıkıldı. Her limondan 45 ml su çıktı. 600 ml su eklendi.',
        question: 'Toplam kaç ml limonata oldu?',
        answer: 960,
        options: [900, 930, 960, 990],
        hint: 'Limon suyunu hesapla, suyu ekle!',
        explanation: '8 × 45 = 360 ml limon suyu. 360 + 600 = 960 ml limonata.',
        characters: ['🍋', '🍋', '🧃', '💧'],
        animation: 'combining'
      },
      {
        id: 4,
        story: 'Restoranda 15 masa var. Her masada 4 kişi oturabilir. Öğle yemeğinde 48 müşteri geldi.',
        question: 'Kaç kişi yer bulamadı?',
        answer: 0,
        options: [0, 2, 4, 8],
        hint: 'Toplam kapasiteyi hesapla, müşteri sayısıyla karşılaştır!',
        explanation: '15 × 4 = 60 kişilik kapasite. 60 > 48, herkes oturabildi!',
        characters: ['🍽️', '🪑', '👥'],
        animation: 'counting'
      },
      {
        id: 5,
        story: 'Bir kek tarifi 3 yumurta istiyor. Şefin 26 yumurtası var. Her kekten 8 dilim çıkıyor.',
        question: 'En fazla kaç dilim kek yapılabilir?',
        answer: 64,
        options: [56, 60, 64, 72],
        hint: '26 yumurtadan kaç kek yapılır? Sonra dilim hesapla!',
        explanation: '26 ÷ 3 = 8 kek (2 yumurta artar). 8 × 8 = 64 dilim.',
        characters: ['🥚', '🥚', '🥚', '🎂'],
        animation: 'combining'
      },
      {
        id: 6,
        story: 'Çorba pişirmek 45 dakika, pilav 20 dakika, salata 10 dakika sürüyor. Hepsi saat 12\'de hazır olmalı.',
        question: 'Çorbaya saat kaçta başlanmalı?',
        answer: 11,
        options: [10, 11, 12, 13],
        hint: 'En uzun süren yemekten başla! 12\'den 45 dakika önce...',
        explanation: '12:00 - 45 dakika = 11:15. Yani saat 11\'de başlanmalı.',
        characters: ['🍲', '🍚', '🥗', '⏰'],
        animation: 'counting'
      }
    ]
  },
  {
    id: 9,
    title: 'Lunapark Eğlencesi',
    category: 'Eğlence',
    icon: '🎡',
    color: 'from-purple-400 to-pink-500',
    bgImage: 'from-purple-100 to-pink-100',
    difficulty: 'orta',
    description: 'Lunaparkta dönmedolap ve hız treni ile matematik öğren!',
    badge: '🎢',
    problems: [
      {
        id: 1,
        story: 'Dönmedolap 12 kabine sahip ve her kabine 4 kişi alabiliyor. Bir tur 5 dakika sürüyor.',
        question: 'Bir turda en fazla kaç kişi binebilir?',
        answer: 48,
        options: [44, 46, 48, 50],
        hint: 'Kabin sayısı × kapasite',
        explanation: '12 × 4 = 48 kişi.',
        characters: ['🎡', '👨‍👩‍👧‍👦'],
        animation: 'counting',
        funFact: 'Dünyanın en yüksek dönmedolabı Dubai\'deki "Ain Dubai" - 250 metre!'
      },
      {
        id: 2,
        story: 'Hız trenine binmek 25 TL, korku tüneline 15 TL, çarpışan araba 20 TL. Ali\'nin 100 TL\'si var.',
        question: 'Ali her birine birer kez binerse kaç TL\'si kalır?',
        answer: 40,
        options: [35, 38, 40, 42],
        hint: 'Tüm fiyatları topla, paradan çıkar!',
        explanation: '25 + 15 + 20 = 60 TL. 100 - 60 = 40 TL kalır.',
        characters: ['🎢', '👻', '🚗', '💵'],
        animation: 'removing'
      },
      {
        id: 3,
        story: 'Tombala oyununda 90 numara var. 30 numara çekildi. Elif\'in kartında 15 numara var ve 6 tanesi çekildi.',
        question: 'Elif\'in kaç numarası hâlâ çıkmadı?',
        answer: 9,
        options: [7, 8, 9, 10],
        hint: 'Elif\'in numaralarından çekilenleri çıkar!',
        explanation: '15 - 6 = 9 numara henüz çıkmadı.',
        characters: ['🎱', '🔢', '🎫'],
        animation: 'counting'
      },
      {
        id: 4,
        story: 'Atış oyununda 10 atış hakkı var. Her isabet 8 puan, her ıskalama -2 puan. Selin 7 kez isabet etti.',
        question: 'Selin kaç puan aldı?',
        answer: 50,
        options: [46, 48, 50, 52],
        hint: 'İsabet puanını ve ıskalama puanını ayrı hesapla!',
        explanation: 'İsabet: 7×8=56 puan. Iskalama: 3×(-2)=-6 puan. Toplam: 56-6=50.',
        characters: ['🎯', '🎯', '🎯', '🏆'],
        animation: 'jumping'
      },
      {
        id: 5,
        story: 'Pamuk şeker standında 3 boy var: Küçük 10 TL, orta 15 TL, büyük 20 TL. Satıcı bugün 8 küçük, 12 orta, 6 büyük sattı.',
        question: 'Satıcı bugün kaç TL kazandı?',
        answer: 380,
        options: [360, 370, 380, 390],
        hint: 'Her boy için ayrı hesapla, topla!',
        explanation: '8×10=80 + 12×15=180 + 6×20=120 = 380 TL.',
        characters: ['🍭', '🍬', '💰'],
        animation: 'combining'
      },
      {
        id: 6,
        story: 'Korku tüneli 180 metre uzunluğunda. Vagon dakikada 30 metre gidiyor. Her vagon 4 dakikada bir kalkıyor.',
        question: 'Korku tüneli kaç dakika sürüyor?',
        answer: 6,
        options: [4, 5, 6, 7],
        hint: 'Uzunluk ÷ Hız = Süre',
        explanation: '180 ÷ 30 = 6 dakika.',
        characters: ['👻', '🦇', '🕷️', '⏱️'],
        animation: 'counting'
      }
    ]
  },
  {
    id: 10,
    title: 'Kamp Macerası',
    category: 'Doğa',
    icon: '⛺',
    color: 'from-green-500 to-teal-600',
    bgImage: 'from-green-100 to-teal-100',
    difficulty: 'orta',
    description: 'Ormanda kamp yaparken matematik becerileri kazan!',
    badge: '🏕️',
    problems: [
      {
        id: 1,
        story: 'Kamp alanında 8 çadır var. Her çadırda 3 kişi kalıyor. Gece herkes kamp ateşi etrafında toplandı ve 2 lider de katıldı.',
        question: 'Kamp ateşi etrafında kaç kişi var?',
        answer: 26,
        options: [24, 25, 26, 27],
        hint: 'Çadır sayısı × kişi + liderler',
        explanation: '8 × 3 = 24 kampçı. 24 + 2 = 26 kişi.',
        characters: ['⛺', '🔥', '👥'],
        animation: 'combining'
      },
      {
        id: 2,
        story: 'Doğa yürüyüşü 12 km uzunluğunda. Grup saatte 4 km hızla yürüyor. Yolda 30 dakikalık mola verildi.',
        question: 'Yürüyüş molalarla birlikte kaç dakika sürdü?',
        answer: 210,
        options: [200, 205, 210, 215],
        hint: 'Yürüme süresi + mola süresi',
        explanation: '12÷4=3 saat yürüme. 3 saat=180 dk. 180+30=210 dakika.',
        characters: ['🥾', '🌲', '⛰️'],
        animation: 'counting',
        funFact: 'Doğa yürüyüşü stresi azaltır ve zihni rahatlatır!'
      },
      {
        id: 3,
        story: 'Marshmallow kızartmak için 5 çubuk var. Her çubukta 4 marshmallow dizildi. 6 kişi eşit paylaşacak.',
        question: 'Her kişiye kaç marshmallow düşer?',
        answer: 3,
        options: [2, 3, 4, 5],
        hint: 'Toplam marshmallowu kişi sayısına böl!',
        explanation: '5 × 4 = 20 marshmallow. 20 ÷ 6 = 3 (2 artar).',
        characters: ['🔥', '🍡', '🍡', '🍡'],
        animation: 'sharing'
      },
      {
        id: 4,
        story: 'Gece gökyüzü gözleminde 45 dakikada 18 kayan yıldız sayıldı.',
        question: 'Bu hızla 1 saatte kaç kayan yıldız görülür?',
        answer: 24,
        options: [20, 22, 24, 26],
        hint: '45 dakikada 18 tane ise, 15 dakikada kaç tane? 60 dakika?',
        explanation: '15 dakikada: 18÷3=6. 60 dakikada: 6×4=24 kayan yıldız.',
        characters: ['⭐', '🌟', '✨', '🌙'],
        animation: 'flying',
        funFact: 'Her yıl yaklaşık 50.000 ton meteorit dünyaya düşer!'
      },
      {
        id: 5,
        story: 'Olta balıkçılığında Mert 7 balık tuttu. Her balık ortalama 350 gram.',
        question: 'Mert toplam kaç gram balık tuttu?',
        answer: 2450,
        options: [2100, 2250, 2450, 2600],
        hint: 'Balık sayısı × ortalama ağırlık',
        explanation: '7 × 350 = 2450 gram.',
        characters: ['🎣', '🐟', '🐟', '🐟'],
        animation: 'counting'
      },
      {
        id: 6,
        story: 'Kamp malzemeleri: 4 çadır (her biri 5 kg), 2 yatak tulumu (3 kg), 1 ocak (8 kg), yiyecek torbası (12 kg).',
        question: 'Toplam kamp malzemesi kaç kg?',
        answer: 46,
        options: [42, 44, 46, 48],
        hint: 'Her malzeme grubunu hesapla ve topla!',
        explanation: '4×5=20 + 2×3=6 + 8 + 12 = 46 kg.',
        characters: ['⛺', '🎒', '🍳', '🥫'],
        animation: 'combining'
      }
    ]
  },
  {
    id: 11,
    title: 'Çiftlik Hayatı',
    category: 'Hayvanlar',
    icon: '🚜',
    color: 'from-yellow-500 to-amber-600',
    bgImage: 'from-yellow-100 to-amber-100',
    difficulty: 'kolay',
    description: 'Çiftlikte hayvanlarla matematik öğren!',
    badge: '🌾',
    problems: [
      {
        id: 1,
        story: 'Çiftlikte 15 inek var. Her inek günde 25 litre süt veriyor. Sütün yarısı peynir yapılıyor.',
        question: 'Günde kaç litre süt peynir için kullanılır?',
        answer: 188,
        options: [180, 185, 188, 190],
        hint: 'Toplam sütü bul, yarısını al!',
        explanation: '15 × 25 = 375 litre. 375 ÷ 2 = 187.5 ≈ 188 litre.',
        characters: ['🐄', '🥛', '🧀'],
        animation: 'counting',
        funFact: 'Bir inek yılda yaklaşık 9.000 litre süt verebilir!'
      },
      {
        id: 2,
        story: 'Tavuk kümesinde 24 tavuk var. Her tavuk haftada 5 yumurta yumurtluyor. Yumurtaların 1/4\'ü çatlaklı.',
        question: 'Haftada kaç sağlam yumurta toplanır?',
        answer: 90,
        options: [85, 88, 90, 92],
        hint: 'Toplam yumurtayı bul, çatlaklıları çıkar!',
        explanation: '24 × 5 = 120 yumurta. Çatlaklı: 120÷4=30. Sağlam: 120-30=90.',
        characters: ['🐔', '🥚', '🥚', '🥚'],
        animation: 'counting'
      },
      {
        id: 3,
        story: 'Koyun sürüsünde 80 koyun var. Çoban her sabah bunları 4 eşit gruba ayırıyor. 2 grup ön çayıra, 2 grup arka çayıra gidiyor.',
        question: 'Her çayırda kaç koyun otluyor?',
        answer: 40,
        options: [35, 38, 40, 42],
        hint: 'Önce grup sayısını bul, sonra 2 grup kaç koyun?',
        explanation: '80 ÷ 4 = 20 koyun/grup. 2 grup = 40 koyun/çayır.',
        characters: ['🐑', '🐑', '🐑', '🌿'],
        animation: 'sharing'
      },
      {
        id: 4,
        story: 'Traktör saatte 12 km hızla gidiyor. Çiftlik ve pazar arası 36 km. Traktör gidip gelecek.',
        question: 'Traktör yolda toplam kaç saat geçirir?',
        answer: 6,
        options: [4, 5, 6, 7],
        hint: 'Tek yön süresini bul, gidiş-dönüş için 2 kat al!',
        explanation: 'Tek yön: 36÷12=3 saat. Gidiş-dönüş: 3×2=6 saat.',
        characters: ['🚜', '🛤️', '🏪'],
        animation: 'counting'
      },
      {
        id: 5,
        story: 'Elma bahçesinde 12 ağaç var. Her ağaçtan 45 kg elma toplandı. Elmaların 1/3\'ü elma suyu yapılacak.',
        question: 'Kaç kg elma suyu için ayrılır?',
        answer: 180,
        options: [170, 175, 180, 185],
        hint: 'Toplam elmayı bul, 3\'e böl!',
        explanation: '12 × 45 = 540 kg. 540 ÷ 3 = 180 kg elma suyu için.',
        characters: ['🍎', '🌳', '🧃'],
        animation: 'combining'
      },
      {
        id: 6,
        story: 'Çiftlikte 8 at var. Her ata günde 10 kg yem ve 5 kg saman veriliyor. Bir yem çuvalı 40 kg.',
        question: '1 haftada (7 gün) kaç çuval yem gerekir?',
        answer: 14,
        options: [12, 13, 14, 15],
        hint: 'Günlük yem tüketimi × 7 gün ÷ çuval kg',
        explanation: 'Günlük yem: 8×10=80 kg. Haftalık: 80×7=560 kg. Çuval: 560÷40=14.',
        characters: ['🐴', '🐴', '🌾', '📦'],
        animation: 'counting'
      }
    ]
  },
  {
    id: 12,
    title: 'Süperkahraman Görevi',
    category: 'Fantezi',
    icon: '🦸',
    color: 'from-red-500 to-yellow-500',
    bgImage: 'from-red-100 to-yellow-100',
    difficulty: 'zor',
    description: 'Süperkahraman olarak şehri matematiğin gücüyle kurtar!',
    badge: '💪',
    problems: [
      {
        id: 1,
        story: 'Süperkahraman saatte 300 km hızla uçuyor. Şehir 150 km uzakta ve orada 45 dakika kalacak.',
        question: 'Toplam görev süresi kaç dakika?',
        answer: 75,
        options: [70, 73, 75, 78],
        hint: 'Uçuş süresi + şehirde kalma süresi',
        explanation: 'Uçuş: 150÷300=0.5 saat=30 dk. Gidiş-dönüş: 30 dk. Toplam: 30+45=75 dk.',
        characters: ['🦸', '✈️', '🌆'],
        animation: 'flying',
        funFact: 'İlk süperkahraman çizgi romanı 1938\'de Superman ile başladı!'
      },
      {
        id: 2,
        story: 'Kötü adamlar 4 farklı yere 6\'şar robot gönderdi. Süperkahraman 1 dakikada 3 robot yok edebiliyor.',
        question: 'Tüm robotları yok etmesi kaç dakika sürer?',
        answer: 8,
        options: [6, 7, 8, 9],
        hint: 'Toplam robot sayısını dakikalık kapasiteye böl!',
        explanation: 'Toplam: 4×6=24 robot. 24÷3=8 dakika.',
        characters: ['🤖', '🤖', '💥', '🦸'],
        animation: 'jumping'
      },
      {
        id: 3,
        story: 'Yanan binada her katta 5 daire var. 8 katlı binada her dairede 3 kişi mahsur kaldı.',
        question: 'Süperkahraman kaç kişiyi kurtarmalı?',
        answer: 120,
        options: [100, 110, 120, 130],
        hint: 'Kat × daire × kişi',
        explanation: '8 × 5 × 3 = 120 kişi.',
        characters: ['🏢', '🔥', '👨‍👩‍👧‍👦'],
        animation: 'counting'
      },
      {
        id: 4,
        story: 'Kötü adam 5 dakikada bir yeni tuzak kuruyor. Süperkahraman 3 dakikada bir tuzağı etkisiz hale getiriyor. Başlangıçta 10 tuzak var.',
        question: '15 dakika sonra kaç aktif tuzak kalır?',
        answer: 8,
        options: [6, 7, 8, 9],
        hint: 'Kurulan tuzaklar - etkisiz hale getirilenler',
        explanation: 'Yeni tuzak: 15÷5=3. Etkisiz: 15÷3=5. Kalan: 10+3-5=8 tuzak.',
        characters: ['💣', '⚡', '🦸'],
        animation: 'counting'
      },
      {
        id: 5,
        story: 'Süperkahraman takımı 6 kişiden oluşuyor. Her biri farklı güçlere sahip. Görev başına 3 kahraman gerekiyor.',
        question: 'Kaç farklı 3\'lü takım oluşturulabilir?',
        answer: 20,
        options: [15, 18, 20, 24],
        hint: 'Kombinasyon: 6!/(3!×3!)',
        explanation: '6×5×4 ÷ (3×2×1) = 120÷6 = 20 farklı takım.',
        characters: ['🦸‍♂️', '🦸‍♀️', '🦹', '🦹‍♂️'],
        animation: 'combining'
      },
      {
        id: 6,
        story: 'Şehri koruyan kalkan 500 birim enerji depoluyor. Her saldırı 35 birim enerji harcıyor. Kalkan dakikada 10 birim enerji yeniliyor.',
        question: 'Arka arkaya en fazla kaç saldırıya dayanabilir (yenilenmeden)?',
        answer: 14,
        options: [12, 13, 14, 15],
        hint: 'Toplam enerji ÷ saldırı başına enerji',
        explanation: '500 ÷ 35 = 14.28, yani 14 saldırı.',
        characters: ['🛡️', '⚡', '💥'],
        animation: 'counting'
      }
    ]
  },
  {
    id: 13,
    title: 'Korsan Hazinesi',
    category: 'Macera',
    icon: '🏴‍☠️',
    color: 'from-amber-600 to-yellow-700',
    bgImage: 'from-amber-100 to-yellow-100',
    difficulty: 'zor',
    description: 'Korsan gemisiyle hazine arayarak matematik öğren!',
    badge: '💎',
    problems: [
      {
        id: 1,
        story: 'Hazine haritasında X işareti 3 adım doğu, 4 adım kuzey gösteriyor. Her adım 10 metre.',
        question: 'Başlangıç noktasından hazineye kuş uçuşu kaç metre?',
        answer: 50,
        options: [40, 45, 50, 55],
        hint: 'Pisagor teoremi: √(a²+b²)',
        explanation: '√(30²+40²) = √(900+1600) = √2500 = 50 metre.',
        characters: ['🗺️', '❌', '🧭'],
        animation: 'counting',
        funFact: 'Pisagor teoremi en eski matematik teoremlerinden biri!'
      },
      {
        id: 2,
        story: 'Korsan gemisinde 18 mürettebat var. Hazine 1260 altın sikke. Kaptan çifte pay alıyor.',
        question: 'Normal bir tayfa kaç altın alır?',
        answer: 66,
        options: [60, 63, 66, 70],
        hint: 'Kaptan 2 pay = 19 pay. 1260÷19',
        explanation: 'Toplam pay: 18+1=19. Her pay: 1260÷19≈66 altın.',
        characters: ['🏴‍☠️', '💰', '💰', '💰'],
        animation: 'sharing'
      },
      {
        id: 3,
        story: 'Hazine sandığında 3 tür mücevher var: 45 yakut (her biri 100 altın), 30 zümrüt (her biri 150 altın), 25 safir (her biri 200 altın).',
        question: 'Sandığın toplam değeri kaç altın?',
        answer: 14000,
        options: [12500, 13500, 14000, 15000],
        hint: 'Her mücevher türünün toplam değerini hesapla ve topla!',
        explanation: '45×100=4500 + 30×150=4500 + 25×200=5000 = 14000 altın.',
        characters: ['💎', '💚', '💙', '🔴'],
        animation: 'combining'
      },
      {
        id: 4,
        story: 'Korsan gemisi saatte 15 deniz mili gidiyor. Hazine adası 90 deniz mili uzakta. Erzak sadece 8 gün yetecek.',
        question: 'Ada gidiş-dönüş için günde en az kaç saat yelken açmalı?',
        answer: 3,
        options: [2, 3, 4, 5],
        hint: 'Toplam mesafe ÷ toplam saat = hız',
        explanation: 'Gidiş-dönüş: 180 mil. 8 gün. 180÷15=12 saat. 12÷8≈1.5, yani günde en az 2-3 saat.',
        characters: ['🚢', '⛵', '🏝️'],
        animation: 'swimming'
      },
      {
        id: 5,
        story: 'Hazinenin kilidi 3 haneli bir kod istiyor. İpucu: Birler basamağı 5, onlar basamağı birler basamağının 2 katı, yüzler basamağı diğer ikisinin toplamı.',
        question: 'Kilidin kodu nedir?',
        answer: 155,
        options: [145, 150, 155, 165],
        hint: 'Birler=5, Onlar=10, Yüzler=15',
        explanation: 'Birler: 5. Onlar: 5×2=10→0 (10\'un basamağı). Yüzler: 5+0=5→155? Onlar:10, Birler:5, Yüzler:15 → 155',
        characters: ['🔐', '🔢', '💎'],
        animation: 'counting'
      },
      {
        id: 6,
        story: 'Korsan 5 adada hazine sakladı. Her adada bir öncekinin 2 katı altın var. İlk adada 8 altın varsa...',
        question: 'Son adada kaç altın var?',
        answer: 128,
        options: [64, 96, 128, 256],
        hint: 'İkinci katlanma: 8×2=16, 16×2=32...',
        explanation: '8 → 16 → 32 → 64 → 128 altın.',
        characters: ['🏝️', '💰', '💰', '💰'],
        animation: 'combining',
        funFact: 'Gerçek korsan hazineleri nadiren bulunur ama hâlâ aranıyor!'
      }
    ]
  },
  {
    id: 14,
    title: 'Zaman Yolculuğu',
    category: 'Bilim Kurgu',
    icon: '⏰',
    color: 'from-violet-500 to-indigo-600',
    bgImage: 'from-violet-100 to-indigo-100',
    difficulty: 'zor',
    description: 'Zaman makinesinde farklı dönemlere yolculuk yap!',
    badge: '⌛',
    problems: [
      {
        id: 1,
        story: 'Zaman makinesi her yolculukta 100 yıl geriye gidiyor. Şu an 2024 yılındayız. 3 yolculuk yaptık.',
        question: 'Hangi yıldayız?',
        answer: 1724,
        options: [1624, 1724, 1824, 1924],
        hint: '3 × 100 yıl geriye',
        explanation: '2024 - (3 × 100) = 2024 - 300 = 1724.',
        characters: ['⏰', '🚀', '📜'],
        animation: 'flying',
        funFact: '1724\'te Bach harika müzikler besteliyordu!'
      },
      {
        id: 2,
        story: 'Antik Mısır\'da piramit inşaatını izliyoruz. 5000 işçi çalışıyor. Her işçi günde 2 taş taşıyor. Piramit 2.300.000 taş gerektirir.',
        question: 'Piramiti tamamlamak kaç gün sürer?',
        answer: 230,
        options: [200, 215, 230, 250],
        hint: 'Toplam taş ÷ (işçi × günlük taş)',
        explanation: 'Günlük taş: 5000×2=10000. Süre: 2.300.000÷10000=230 gün.',
        characters: ['🏜️', '🪨', '👷'],
        animation: 'counting'
      },
      {
        id: 3,
        story: 'Dinozor çağında T-Rex kovalıyor! T-Rex saatte 32 km koşuyor. Sen saatte 12 km koşabiliyorsun ama 200 metre öndesin.',
        question: 'T-Rex seni kaç dakikada yakalar?',
        answer: 1,
        options: [1, 2, 3, 4],
        hint: 'Hız farkı × zaman = mesafe',
        explanation: 'Hız farkı: 32-12=20 km/saat. 200m=0.2km. 0.2÷20=0.01 saat=0.6 dk≈1 dk.',
        characters: ['🦖', '🏃', '⏱️'],
        animation: 'jumping'
      },
      {
        id: 4,
        story: 'Gelecekte (2124) enerji birimleri değişmiş. 1 yeni birim = 15 eski birim. Evde aylık 450 eski birim kullanılıyormuş.',
        question: 'Yeni sistemde aylık kaç birim gerekir?',
        answer: 30,
        options: [25, 28, 30, 32],
        hint: 'Eski birim ÷ dönüşüm oranı',
        explanation: '450 ÷ 15 = 30 yeni birim.',
        characters: ['🔌', '⚡', '🏠'],
        animation: 'counting'
      },
      {
        id: 5,
        story: 'Orta Çağ şövalye turnuvasında 32 şövalye yarışıyor. Her maçta kaybeden eleniyor. Finalde tek şampiyon kalıyor.',
        question: 'Şampiyon olmak için kaç maç yapılmalı (toplam)?',
        answer: 31,
        options: [28, 29, 31, 32],
        hint: 'Her maçta 1 kişi eleniyor, 31 kişi elenmeli...',
        explanation: '31 kişi elenmeli = 31 maç.',
        characters: ['⚔️', '🛡️', '🏆'],
        animation: 'counting',
        funFact: 'Ortaçağ turnuvaları gerçek savaşlar kadar tehlikeliydi!'
      },
      {
        id: 6,
        story: 'Zaman paradoksu! Her 10 yılda bir, zaman 5 yıl geri sarılıyor. 2024\'ten başlayarak 50 yıl ileri gitmek istiyoruz.',
        question: 'Gerçekte kaç yıl geçmeli?',
        answer: 100,
        options: [75, 90, 100, 120],
        hint: 'Her 10 yılda 5 yıl kayıp, yani 10 yılda 5 yıl ilerleme...',
        explanation: '10 yılda 5 yıl net ilerleme. 50 yıl için: 50÷5×10=100 yıl geçmeli.',
        characters: ['⏰', '🌀', '❓'],
        animation: 'flying'
      }
    ]
  },
  {
    id: 15,
    title: 'Müzik Akademisi',
    category: 'Sanat',
    icon: '🎵',
    color: 'from-pink-500 to-purple-600',
    bgImage: 'from-pink-100 to-purple-100',
    difficulty: 'orta',
    description: 'Müzik notaları ve ritimlerle matematik öğren!',
    badge: '🎼',
    problems: [
      {
        id: 1,
        story: 'Orkestrada 24 yaylı, 16 nefesli ve 8 vurmalı çalgı var. Her bölümün yarısı kadınlardan oluşuyor.',
        question: 'Orkestrada toplam kaç kadın müzisyen var?',
        answer: 24,
        options: [20, 22, 24, 26],
        hint: 'Toplam müzisyen ÷ 2',
        explanation: 'Toplam: 24+16+8=48. Kadın: 48÷2=24.',
        characters: ['🎻', '🎺', '🥁'],
        animation: 'dancing'
      },
      {
        id: 2,
        story: 'Bir şarkı 3 dakika 45 saniye sürüyor. Konser için bu şarkı 4 kez çalınacak ve aralarında 15\'er saniye ara verilecek.',
        question: 'Konser kaç dakika sürer?',
        answer: 16,
        options: [14, 15, 16, 17],
        hint: '4 şarkı + 3 ara',
        explanation: '4×225sn=900sn + 3×15sn=45sn = 945sn = 15.75 dk ≈ 16 dk.',
        characters: ['🎤', '🎸', '⏱️'],
        animation: 'counting',
        funFact: 'Müzik beyindeki her iki yarıyı da aktive eder!'
      },
      {
        id: 3,
        story: 'Piyano 88 tuşa sahip. Bunların 52\'si beyaz, kalanı siyah. Siyah tuşların 2/3\'ü sol tarafta.',
        question: 'Sol tarafta kaç siyah tuş var?',
        answer: 24,
        options: [20, 22, 24, 26],
        hint: 'Siyah tuş sayısını bul, 2/3\'ünü al!',
        explanation: 'Siyah: 88-52=36. Sol taraf: 36×2÷3=24.',
        characters: ['🎹', '🎵', '🎶'],
        animation: 'dancing'
      },
      {
        id: 4,
        story: 'Koro 45 kişiden oluşuyor. Soprano, alto, tenor ve bas eşit dağılmış ama 1 kişi eksik.',
        question: 'Her ses grubunda kaç kişi var?',
        answer: 11,
        options: [10, 11, 12, 13],
        hint: '45+1=46, 46÷4?',
        explanation: '44 kişi 4 gruba: 44÷4=11 kişi/grup (+1 eksik).',
        characters: ['🎤', '🎤', '🎤', '🎤'],
        animation: 'counting'
      },
      {
        id: 5,
        story: 'Gitar dersi haftada 2 kez, her ders 45 dakika. Kurs 12 hafta sürüyor.',
        question: 'Kurs boyunca toplam kaç saat ders alınır?',
        answer: 18,
        options: [16, 17, 18, 20],
        hint: 'Hafta × ders × dakika ÷ 60',
        explanation: '12×2×45=1080 dakika. 1080÷60=18 saat.',
        characters: ['🎸', '📚', '⏰'],
        animation: 'counting'
      },
      {
        id: 6,
        story: 'Bir melodi 8 nota içeriyor. Her notanın 7 farklı uzunluğu olabilir. Notalar: do, re, mi, fa, sol, la, si.',
        question: 'Sadece "do" ve "re" notalarıyla 3 notalı kaç farklı melodi yazılabilir?',
        answer: 8,
        options: [6, 7, 8, 9],
        hint: '2 seçenek × 2 seçenek × 2 seçenek',
        explanation: '2³ = 8 farklı melodi.',
        characters: ['🎵', '🎶', '📝'],
        animation: 'dancing'
      }
    ]
  }
];

export default function HikayeliProblemler() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [storyComplete, setStoryComplete] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showFunFact, setShowFunFact] = useState(false);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [completedStories, setCompletedStories] = useState<number[]>([]);

  const currentProblem = selectedStory?.problems[currentProblemIndex];
  const progress = selectedStory ? ((currentProblemIndex) / selectedStory.problems.length) * 100 : 0;

  // Load completed stories from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('completedStories');
    if (saved) {
      setCompletedStories(JSON.parse(saved));
    }
  }, []);

  const handleAnswerSelect = (answer: number) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null || !currentProblem) return;

    const correct = selectedAnswer === currentProblem.answer;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      showCelebration();
      const streakBonus = streak >= 2 ? streak * 2 : 0;
      setScore(prev => prev + 10 + streakBonus);
      setTotalCorrect(prev => prev + 1);
      setStreak(prev => prev + 1);
      setShowConfetti(true);
      if (currentProblem.funFact) {
        setShowFunFact(true);
      }
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      showEncouragement();
      setStreak(0);
    }
  };

  const nextProblem = () => {
    if (!selectedStory) return;

    setShowFunFact(false);

    if (currentProblemIndex < selectedStory.problems.length - 1) {
      setCurrentProblemIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowHint(false);
    } else {
      setStoryComplete(true);
      showCelebration('Hikaye Tamamlandı!');
      // Save completed story
      if (!completedStories.includes(selectedStory.id)) {
        const newCompleted = [...completedStories, selectedStory.id];
        setCompletedStories(newCompleted);
        localStorage.setItem('completedStories', JSON.stringify(newCompleted));
      }
    }
  };

  const resetStory = () => {
    setSelectedStory(null);
    setCurrentProblemIndex(0);
    setScore(0);
    setTotalCorrect(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowHint(false);
    setStoryComplete(false);
    setStreak(0);
    setShowFunFact(false);
  };

  const filteredStories = filterDifficulty === 'all'
    ? STORIES
    : STORIES.filter(s => s.difficulty === filterDifficulty);

  // Animation for characters
  const renderAnimation = () => {
    if (!currentProblem) return null;

    const chars = currentProblem.characters;
    const anim = currentProblem.animation;

    const getAnimationProps = (i: number) => {
      switch (anim) {
        case 'flying':
          return { y: [0, -20, 0], x: [0, 10, -10, 0], rotate: [0, 5, -5, 0] };
        case 'swimming':
          return { x: [0, 15, -15, 0], y: [0, 5, 0] };
        case 'jumping':
          return { y: [0, -25, 0], scale: [1, 1.1, 1] };
        case 'dancing':
          return { rotate: [0, 10, -10, 0], y: [0, -5, 0] };
        case 'combining':
          return { x: [20 - i * 5, 0] };
        case 'removing':
          return showResult && !isCorrect ? { opacity: 0.3 } : {};
        case 'counting':
          return { y: [0, -10, 0] };
        case 'sharing':
          return { x: [(i % 2) * 20 - 10, 0] };
        default:
          return {};
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-wrap justify-center gap-3 py-6"
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, y: 50 }}
            animate={{
              scale: 1,
              y: 0,
              ...getAnimationProps(i)
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ...(['counting', 'flying', 'swimming', 'jumping', 'dancing'].includes(anim) && { repeat: Infinity, duration: 1 + i * 0.1 })
            }}
            className="text-5xl filter drop-shadow-lg"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'kolay': return 'bg-green-100 text-green-700 border-green-300';
      case 'orta': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'zor': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyEmoji = (diff: string) => {
    switch (diff) {
      case 'kolay': return '⭐';
      case 'orta': return '⭐⭐';
      case 'zor': return '⭐⭐⭐';
      default: return '';
    }
  };

  if (storyComplete && selectedStory) {
    const stars = totalCorrect === selectedStory.problems.length ? 5 :
                  totalCorrect >= selectedStory.problems.length - 1 ? 4 :
                  totalCorrect >= selectedStory.problems.length / 2 ? 3 : 2;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center p-4">
        <Confetti trigger={true} type="celebration" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border-4 border-purple-200"
        >
          <AnimatedCharacter type="celebrating" size="lg" />

          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-6 mb-4">
            Hikaye Tamamlandı! 🎉
          </h2>

          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-4 flex-1">
              <p className="text-4xl font-black text-orange-600">{score}</p>
              <p className="text-sm font-bold text-gray-600">Toplam Puan</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 flex-1">
              <p className="text-4xl">{selectedStory.badge}</p>
              <p className="text-sm font-bold text-gray-600">Rozet</p>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <StarRating rating={stars} />
          </div>

          <p className="text-lg font-bold text-gray-700 mb-2">
            {totalCorrect} / {selectedStory.problems.length} Doğru Cevap
          </p>

          {streak >= 3 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl py-2 px-4 mb-4 inline-block"
            >
              🔥 En Uzun Seri: {streak} Doğru!
            </motion.div>
          )}

          <div className="flex gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentProblemIndex(0);
                setScore(0);
                setTotalCorrect(0);
                setSelectedAnswer(null);
                setShowResult(false);
                setShowHint(false);
                setStoryComplete(false);
                setStreak(0);
              }}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-lg shadow-lg"
            >
              🔄 Tekrar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetStory}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-black text-lg shadow-lg"
            >
              📚 Diğer Hikayeler
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (selectedStory && currentProblem) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${selectedStory.bgImage}`}>
        <Confetti trigger={showConfetti} type="stars" />

        <Header />

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={resetStory}
              className="px-4 py-2 bg-white/80 backdrop-blur rounded-xl font-bold text-gray-700 shadow-lg"
            >
              ← Geri
            </motion.button>

            <div className="flex items-center gap-4">
              {streak >= 2 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1"
                >
                  🔥 {streak}x Seri!
                </motion.div>
              )}
              <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow">
                <p className="text-sm font-bold text-gray-500">Soru</p>
                <p className="text-xl font-black text-purple-600">
                  {currentProblemIndex + 1} / {selectedStory.problems.length}
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow">
                <p className="text-sm font-bold text-gray-500">Puan</p>
                <p className="text-xl font-black text-orange-600">{score}</p>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <AnimatedProgressBar progress={progress} color="purple" />
          </div>

          {/* Story Card */}
          <motion.div
            key={currentProblem.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white"
          >
            {/* Story Header */}
            <div className={`bg-gradient-to-r ${selectedStory.color} p-6`}>
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur rounded-2xl"
                >
                  <span className="text-4xl">{selectedStory.icon}</span>
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-2xl font-black text-white">{selectedStory.title}</h2>
                  <div className="flex items-center gap-2">
                    <p className="text-white/80 font-bold">{selectedStory.category}</p>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white">
                      {getDifficultyEmoji(selectedStory.difficulty)} {selectedStory.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-8">
              {/* Animation */}
              {renderAnimation()}

              {/* Story Text */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 mb-6 border-3 border-yellow-200">
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-4xl"
                  >
                    📖
                  </motion.div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-4 leading-relaxed">
                      {currentProblem.story}
                    </p>
                    <p className="text-xl font-black text-purple-700">
                      {currentProblem.question}
                    </p>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {currentProblem.options.map((option, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: showResult ? 1 : 1.05 }}
                    whileTap={{ scale: showResult ? 1 : 0.95 }}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showResult}
                    className={`p-6 rounded-2xl font-black text-3xl transition-all shadow-lg ${
                      showResult
                        ? option === currentProblem.answer
                          ? 'bg-green-500 text-white ring-4 ring-green-300'
                          : option === selectedAnswer
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-200 text-gray-500'
                        : selectedAnswer === option
                          ? 'bg-purple-500 text-white ring-4 ring-purple-300'
                          : 'bg-white text-gray-800 hover:bg-purple-100 border-2 border-gray-200'
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              {/* Hint */}
              <AnimatePresence>
                {showHint && !showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-blue-100 rounded-2xl p-4 mb-4 border-3 border-blue-200"
                  >
                    <p className="font-bold text-blue-700">
                      💡 İpucu: {currentProblem.hint}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Result */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-2xl p-6 mb-4 border-3 ${
                      isCorrect
                        ? 'bg-green-100 border-green-300'
                        : 'bg-red-100 border-red-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{isCorrect ? '✅' : '❌'}</span>
                      <div className="flex-1">
                        <p className={`text-xl font-black ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          {isCorrect ? 'Harika! Doğru Cevap!' : `Yanlış! Doğru cevap: ${currentProblem.answer}`}
                        </p>
                        <p className="font-semibold text-gray-700 mt-2">
                          {currentProblem.explanation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Fun Fact */}
              <AnimatePresence>
                {showFunFact && currentProblem.funFact && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mb-4 border-3 border-purple-200"
                  >
                    <p className="font-bold text-purple-700">
                      🧠 Biliyor muydun? {currentProblem.funFact}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex gap-4">
                {!showResult && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowHint(true)}
                      disabled={showHint}
                      className="px-6 py-3 bg-blue-100 text-blue-700 rounded-xl font-bold disabled:opacity-50"
                    >
                      💡 İpucu
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={checkAnswer}
                      disabled={selectedAnswer === null}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-black text-lg shadow-lg disabled:opacity-50"
                    >
                      Kontrol Et ✨
                    </motion.button>
                  </>
                )}
                {showResult && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextProblem}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-lg shadow-lg"
                  >
                    {currentProblemIndex < selectedStory.problems.length - 1 ? 'Sonraki Soru →' : 'Bitir 🏆'}
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['📚', '✨', '🌟', '💫', '📖', '🎯', '🚀', '🎨', '🎭', '🎪'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity }}
            style={{ left: `${5 + i * 10}%`, top: `${10 + (i % 4) * 25}%` }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6 bg-white px-6 py-3 rounded-full shadow-lg inline-flex"
        >
          <Link to="/" className="hover:text-purple-600 cursor-pointer">🏠 Ana Sayfa</Link>
          <span className="text-xl">→</span>
          <span className="text-purple-600">📖 Hikayeli Problemler</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-purple-200"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-xl flex-shrink-0"
            >
              <span className="text-5xl">📖</span>
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                Hikayeli Problemler
              </h1>
              <p className="text-lg font-semibold text-gray-600">
                {STORIES.length} eğlenceli hikaye ve {STORIES.reduce((acc, s) => acc + s.problems.length, 0)}+ problem ile matematik öğren!
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm font-bold text-gray-500">Tamamlanan</p>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-purple-600">{completedStories.length}</span>
                <span className="text-gray-400">/</span>
                <span className="text-xl font-bold text-gray-400">{STORIES.length}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {['all', 'kolay', 'orta', 'zor'].map((diff) => (
            <motion.button
              key={diff}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterDifficulty(diff)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                filterDifficulty === diff
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-100'
              }`}
            >
              {diff === 'all' ? '🌟 Tümü' :
               diff === 'kolay' ? '⭐ Kolay' :
               diff === 'orta' ? '⭐⭐ Orta' : '⭐⭐⭐ Zor'}
            </motion.button>
          ))}
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedStory(story)}
              className="cursor-pointer relative"
            >
              {completedStories.includes(story.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 z-10 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg"
                >
                  ✓
                </motion.div>
              )}

              <div className={`bg-gradient-to-br ${story.bgImage} rounded-3xl shadow-xl overflow-hidden border-4 border-white hover:shadow-2xl transition-all`}>
                <div className={`bg-gradient-to-r ${story.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur rounded-2xl"
                    >
                      <span className="text-4xl">{story.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-black text-white">{story.title}</h3>
                      <p className="text-white/80 font-bold text-sm">{story.category}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{story.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📝</span>
                      <span className="font-bold text-gray-700">{story.problems.length} Problem</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(story.difficulty)}`}>
                      {getDifficultyEmoji(story.difficulty)} {story.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{story.badge}</span>
                    <span className="text-sm font-bold text-gray-500">Rozet Kazanabilirsin!</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${story.color} text-white rounded-xl font-black shadow-lg`}
                  >
                    {completedStories.includes(story.id) ? 'Tekrar Oyna 🔄' : 'Hikayeyi Başlat 🚀'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: '📚', label: 'Toplam Hikaye', value: STORIES.length },
            { icon: '❓', label: 'Toplam Soru', value: STORIES.reduce((acc, s) => acc + s.problems.length, 0) },
            { icon: '✅', label: 'Tamamlanan', value: completedStories.length },
            { icon: '🏆', label: 'Kalan', value: STORIES.length - completedStories.length }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-white rounded-2xl p-4 text-center shadow-lg border-2 border-purple-100"
            >
              <span className="text-3xl">{stat.icon}</span>
              <p className="text-2xl font-black text-purple-600 mt-2">{stat.value}</p>
              <p className="text-sm font-bold text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Atatürk Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 text-center border-4 border-white"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-xl">
              <span className="text-3xl">🇹🇷</span>
            </div>
          </div>
          <p className="text-lg md:text-xl font-black text-white italic">
            "Eğitimdir ki, bir milleti ya özgür, bağımsız, şanlı, yüksek bir topluluk halinde yaşatır; ya da esaret ve sefalete terk eder."
          </p>
          <p className="text-base font-bold text-white/90 mt-2">
            - Mustafa Kemal Atatürk
          </p>
        </motion.div>
      </div>
    </div>
  );
}
