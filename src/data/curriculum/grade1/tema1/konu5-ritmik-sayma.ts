// 1. SINIF - TEMA 1 - KONU 5: Ritmik Sayma
// Detaylı içerik: 8 adım, 45+ soru
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu5RitmikSayma: Topic = {
  id: 'ritmik-sayma',
  title: 'Ritmik Sayma',
  description: '100\'e kadar ileriye, 20\'den geriye atlayarak sayma (ikişer, beşer, onar)',
  emoji: '🎵',
  duration: '55 dk',
  difficulty: 2,
  keywords: ['ritmik', 'ileri sayma', 'geri sayma', 'ikişer', 'beşer', 'onar', 'atlayarak', 'çift sayılar'],
  objectives: [
    'Birer birer sayma yaparak temel oluşturur',
    'İkişer atlayarak 20\'ye kadar sayar (çift sayılar)',
    'Beşer atlayarak 100\'e kadar sayar',
    'Onar atlayarak 100\'e kadar sayar',
    '20\'den geriye doğru sayar',
    'Sayma kalıplarını keşfeder ve uygular',
    'Çift ve tek sayıları ayırt eder'
  ],
  content: {
    introduction: `Merhaba ritim ustası! 🎵

Bugün sayıları müzik gibi söyleyeceğiz! İkişer, beşer, onar atlayarak saymak hem eğlenceli hem de çok hızlı!

Normal sayma: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (yavaş)
İkişer sayma: 2, 4, 6, 8, 10 (hızlı!)
Beşer sayma: 5, 10, 15, 20 (daha da hızlı!)
Onar sayma: 10, 20, 30, 40, 50 (çok hızlı!)

Ritmik sayma nedir?
Belirli aralıklarla (2, 5, 10 gibi) atlayarak saymak!
Tıpkı müzikte ritim tutmak gibi! 🥁

Hazır mısın? 2, 4, 6, 8... Haydi başlayalım! 🚀`,

    motivationQuote: 'Sayılar bir müzik gibi, ritmi yakala! Her atlayış seni zafere götürür! 🎵',

    funFacts: [
      'Kalbimiz dakikada 60-100 kez atar - bu da bir ritim! 💓',
      'Saatler 5\'er 5\'er ilerler: 5, 10, 15, 20... ⏰',
      'Futbol maçı 45\'er dakikalık iki yarıdan oluşur! ⚽',
      'Müzikte ritim 4/4 veya 3/4 gibi sayılarla ifade edilir! 🎼',
      'Yıldızlar bile belirli ritimlerle parlar! ✨',
      'Para sayarken hep beşer veya onar sayarız! 💰',
      'Olimpiyat koşularında metre ölçümleri 100\'er metredir! 🏃'
    ],

    steps: [
      createStep(
        'Birer Birer Sayma - Temel',
        `En temel sayma şekli: Birer birer!

İLERİ SAYMA (artan):
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10

Her adımda 1 ekliyoruz. Bu en yavaş ama en güvenli yol!

20'YE KADAR BİRER BİRER:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

FORMÜL: Sayı + 1 = Sonraki sayı
Örnek: 7 + 1 = 8, 15 + 1 = 16`,
        'Bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz, on! Her adımda 1 ekliyoruz.',
        {
          visual: `BİRER SAYMA:
1 ➡️ 2 ➡️ 3 ➡️ 4 ➡️ 5
  +1   +1   +1   +1

6 ➡️ 7 ➡️ 8 ➡️ 9 ➡️ 10
  +1   +1   +1   +1

Her adımda 1 ekleniyor!
Bu en temel sayma şekli.`,
          tip: 'Parmakları kullan! Her parmak bir sayı!',
          examples: [
            createExample(
              '7\'den sonra hangi sayı gelir?',
              '8',
              '7 + 1 = 8. Birer birer sayarken her adımda 1 ekliyoruz.',
              '7 ➡️ 8'
            ),
            createExample(
              '15\'ten 20\'ye birer say',
              '15, 16, 17, 18, 19, 20',
              '15\'ten başla ve her seferinde 1 ekle!',
              '15 ➡️ 16 ➡️ 17 ➡️ 18 ➡️ 19 ➡️ 20'
            ),
            createExample(
              '9\'dan sonra hangi sayı gelir?',
              '10',
              '9 + 1 = 10. Tek haneli sayılardan çift haneliye geçtik!',
              '9 ➡️ 10'
            ),
            createExample(
              '11\'den 15\'e birer say',
              '11, 12, 13, 14, 15',
              'Her adımda 1 ekle: 11, 12, 13, 14, 15!',
              '11 ➡️ 12 ➡️ 13 ➡️ 14 ➡️ 15'
            ),
            createExample(
              '19\'dan sonra hangi sayı gelir?',
              '20',
              '19 + 1 = 20. On dokuzdan yirmiye!',
              '19 ➡️ 20'
            )
          ]
        }
      ),

      createStep(
        'İkişer İkişer Sayma (Çift Sayılar)',
        `İkişer sayma daha hızlı! Her adımda 2 ekliyoruz.

İKİŞER SAYMA DİZİSİ:
2 → 4 → 6 → 8 → 10 → 12 → 14 → 16 → 18 → 20

Bu sayılara ÇİFT SAYILAR denir!
Çift sayılar: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20...

FORMÜL: Sayı + 2 = Sonraki çift sayı
Örnek: 6 + 2 = 8, 14 + 2 = 16

🎵 ŞARKI GİBİ SÖYLE:
"İ-ki, dört, al-tı, se-kiz, ON!"
"On i-ki, on dört, on al-tı, on se-kiz, YİR-Mİ!"`,
        'İki, dört, altı, sekiz, on! Her adımda 2 ekle. Bu sayılara çift sayılar denir.',
        {
          visual: `İKİŞER SAYMA:
2 ➡️ 4 ➡️ 6 ➡️ 8 ➡️ 10
  +2   +2   +2   +2

12 ➡️ 14 ➡️ 16 ➡️ 18 ➡️ 20
   +2    +2    +2    +2

ÇİFT SAYILAR:
2, 4, 6, 8, 10, 12, 14, 16, 18, 20

Çift sayılar ikiye tam bölünür!
2÷2=1 ✓  4÷2=2 ✓  6÷2=3 ✓`,
          tip: 'Çoraplarını ikişer say! Bir çift çorap = 2 çorap. 5 çift = 10 çorap!',
          examples: [
            createExample(
              '6\'dan sonra ikişer sayarsak hangi sayı gelir?',
              '8',
              '6 + 2 = 8. İkişer sayarken her adımda 2 ekliyoruz.',
              '6 ➡️ 8'
            ),
            createExample(
              '10\'dan 20\'ye ikişer say',
              '10, 12, 14, 16, 18, 20',
              'Her adımda 2 ekle: 10, 12, 14, 16, 18, 20!',
              '10 ➡️ 12 ➡️ 14 ➡️ 16 ➡️ 18 ➡️ 20'
            ),
            createExample(
              '2\'den 10\'a ikişer say',
              '2, 4, 6, 8, 10',
              '2\'den başla, 2\'şer ekle: 2, 4, 6, 8, 10!',
              '2 ➡️ 4 ➡️ 6 ➡️ 8 ➡️ 10'
            ),
            createExample(
              '14\'ten sonra ikişer ne gelir?',
              '16',
              '14 + 2 = 16. Çift sayılar devam ediyor!',
              '14 ➡️ 16'
            ),
            createExample(
              '8 çift sayı mı?',
              'Evet',
              '8, ikişer sayma dizisinde var: 2, 4, 6, 8, 10... Evet çift!',
              '8 = 4 + 4 = 2 × 4 ✓'
            )
          ]
        }
      ),

      createStep(
        'Tek ve Çift Sayılar',
        `Sayılar iki gruba ayrılır: TEK ve ÇİFT

ÇİFT SAYILAR (ikiye tam bölünür):
2, 4, 6, 8, 10, 12, 14, 16, 18, 20...
• İkişer sayarken söylediğimiz sayılar
• Sonu: 0, 2, 4, 6, 8

TEK SAYILAR (ikiye tam bölünmez):
1, 3, 5, 7, 9, 11, 13, 15, 17, 19...
• İkişer sayarken atladığımız sayılar
• Sonu: 1, 3, 5, 7, 9

KOLAY KURAL:
Sayının son rakamına bak!
• Sonu 0, 2, 4, 6, 8 ise ÇİFT
• Sonu 1, 3, 5, 7, 9 ise TEK`,
        'Çift sayılar: 2, 4, 6, 8, 10... Tek sayılar: 1, 3, 5, 7, 9...',
        {
          visual: `TEK VE ÇİFT SAYILAR:
1  2  3  4  5  6  7  8  9  10
T  Ç  T  Ç  T  Ç  T  Ç  T  Ç

11 12 13 14 15 16 17 18 19 20
T  Ç  T  Ç  T  Ç  T  Ç  T  Ç

T = Tek, Ç = Çift

ÇİFT SAYILAR:
2 🔵 4 🔵 6 🔵 8 🔵 10 🔵...

TEK SAYILAR:
1 🔴 3 🔴 5 🔴 7 🔴 9 🔴...`,
          tip: 'Son rakama bak! 14 çift çünkü sonu 4. 17 tek çünkü sonu 7!',
          examples: [
            createExample(
              '7 tek mi çift mi?',
              'Tek',
              '7 tek sayıdır. İkişer sayarken (2,4,6,8,10) 7 yok!',
              '7 → Tek (sonu 7)'
            ),
            createExample(
              '12 tek mi çift mi?',
              'Çift',
              '12 çift sayıdır. İkişer sayarken 12 var: 10, 12, 14...',
              '12 → Çift (sonu 2)'
            ),
            createExample(
              '15 tek mi çift mi?',
              'Tek',
              '15 tek sayıdır. Sonu 5, tek rakam!',
              '15 → Tek (sonu 5)'
            ),
            createExample(
              '20 tek mi çift mi?',
              'Çift',
              '20 çift sayıdır. Sonu 0, çift rakam!',
              '20 → Çift (sonu 0)'
            ),
            createExample(
              '1\'den 10\'a kadar kaç tane çift sayı var?',
              '5 tane',
              'Çift sayılar: 2, 4, 6, 8, 10 = 5 tane!',
              '2, 4, 6, 8, 10 = 5 adet'
            )
          ]
        }
      ),

      createStep(
        'Beşer Beşer Sayma',
        `Beşer sayma çok kullanışlı! Her adımda 5 ekliyoruz.

BEŞER SAYMA DİZİSİ:
5 → 10 → 15 → 20 → 25 → 30 → 35 → 40 → 45 → 50
55 → 60 → 65 → 70 → 75 → 80 → 85 → 90 → 95 → 100

FORMÜL: Sayı + 5 = Sonraki beşli sayı
Örnek: 15 + 5 = 20, 45 + 5 = 50

🖐️ ELLER İLE:
• 1 el = 5 parmak
• 2 el = 10 parmak
• 3 el = 15 parmak
• 4 el = 20 parmak

💰 PARA SAYARKEN:
5 kuruş, 10 kuruş, 15 kuruş, 20 kuruş...`,
        'Beş, on, on beş, yirmi, yirmi beş, otuz... Her adımda 5 ekliyoruz.',
        {
          visual: `BEŞER SAYMA:
5 ➡️ 10 ➡️ 15 ➡️ 20 ➡️ 25
  +5    +5    +5    +5

30 ➡️ 35 ➡️ 40 ➡️ 45 ➡️ 50
   +5    +5    +5    +5

ELLER:
🖐️ = 5
🖐️🖐️ = 10
🖐️🖐️🖐️ = 15
🖐️🖐️🖐️🖐️ = 20

ÖNEMLİ:
Beşer sayılar hep 0 veya 5 ile biter!`,
          explanation: 'Beşer sayma, para ve puan sayarken çok işe yarar!',
          tip: 'Saat dakikaları da beşer artar: 5, 10, 15, 20, 25, 30...',
          examples: [
            createExample(
              '15\'ten sonra beşer sayarsak ne gelir?',
              '20',
              '15 + 5 = 20!',
              '15 ➡️ 20'
            ),
            createExample(
              '5\'ten 25\'e beşer say',
              '5, 10, 15, 20, 25',
              'Her adımda 5 ekle: 5, 10, 15, 20, 25!',
              '5 ➡️ 10 ➡️ 15 ➡️ 20 ➡️ 25'
            ),
            createExample(
              '40\'tan sonra beşer ne gelir?',
              '45',
              '40 + 5 = 45!',
              '40 ➡️ 45'
            ),
            createExample(
              '100\'e kadar beşer sayarsak kaç adım?',
              '20 adım',
              '5, 10, 15... 100. Toplam 20 kez 5 ekliyoruz!',
              '5 ➡️ 10 ➡️ ... ➡️ 100 (20 adım)'
            ),
            createExample(
              '3 elin kaç parmağı var?',
              '15',
              '3 el × 5 parmak = 15 parmak! Beşer sayma: 5, 10, 15!',
              '🖐️🖐️🖐️ = 15'
            )
          ]
        }
      ),

      createStep(
        'Onar Onar Sayma',
        `Onar sayma en hızlısı! Her adımda 10 ekliyoruz.

ONAR SAYMA DİZİSİ:
10 → 20 → 30 → 40 → 50 → 60 → 70 → 80 → 90 → 100

FORMÜL: Sayı + 10 = Sonraki onluk sayı
Örnek: 30 + 10 = 40, 70 + 10 = 80

🎯 SADECE 10 ADIMDA 100'E:
10, 20, 30, 40, 50, 60, 70, 80, 90, 100!

ONLUK SAYILARIN ÖZELLİĞİ:
Hepsi 0 ile biter: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

💰 PARA SAYARKEN:
10 TL, 20 TL, 30 TL, 40 TL...`,
        'On, yirmi, otuz, kırk, elli, altmış, yetmiş, seksen, doksan, yüz! Her adımda 10 ekliyoruz.',
        {
          visual: `ONAR SAYMA:
10 ➡️ 20 ➡️ 30 ➡️ 40 ➡️ 50
   +10   +10   +10   +10

60 ➡️ 70 ➡️ 80 ➡️ 90 ➡️ 100
   +10   +10   +10   +10

ONLUK SAYILAR:
10 = ON
20 = YİRMİ
30 = OTUZ
40 = KIRK
50 = ELLİ
60 = ALTMIŞ
70 = YETMİŞ
80 = SEKSEN
90 = DOKSAN
100 = YÜZ`,
          tip: 'Onluk paralarla düşün: 10 kuruş, 20 kuruş, 30 kuruş... veya 10 TL, 20 TL...',
          examples: [
            createExample(
              '50\'den sonra onar sayarsak ne gelir?',
              '60',
              '50 + 10 = 60!',
              '50 ➡️ 60'
            ),
            createExample(
              '30\'dan 70\'e onar say',
              '30, 40, 50, 60, 70',
              'Her adımda 10 ekle: 30, 40, 50, 60, 70!',
              '30 ➡️ 40 ➡️ 50 ➡️ 60 ➡️ 70'
            ),
            createExample(
              '10\'dan 100\'e onar kaç adım?',
              '9 adım',
              '10, 20, 30, 40, 50, 60, 70, 80, 90, 100 = 9 kez 10 ekliyoruz!',
              '10 ➡️ 20 ➡️ ... ➡️ 100 (9 adım)'
            ),
            createExample(
              '80\'den sonra onar ne gelir?',
              '90',
              '80 + 10 = 90!',
              '80 ➡️ 90'
            ),
            createExample(
              '90\'dan sonra onar ne gelir?',
              '100',
              '90 + 10 = 100! Yüze ulaştık!',
              '90 ➡️ 100'
            )
          ]
        }
      ),

      createStep(
        'Geriye Doğru Sayma',
        `Şimdi geriye sayalım! Bu roket fırlatmak gibi! 🚀

GERİYE BİRER SAYMA:
20 → 19 → 18 → 17 → 16 → 15 → 14 → 13 → 12 → 11 → 10...

Her adımda 1 çıkarıyoruz!
FORMÜL: Sayı - 1 = Önceki sayı

🚀 ROKET FIRILATMA:
10, 9, 8, 7, 6, 5, 4, 3, 2, 1... FIRLA! 🚀

GERİYE ONAR SAYMA:
100 → 90 → 80 → 70 → 60 → 50 → 40 → 30 → 20 → 10 → 0

GERİYE BEŞER SAYMA:
50 → 45 → 40 → 35 → 30 → 25 → 20 → 15 → 10 → 5 → 0`,
        'Geriye sayarken her adımda çıkarma yapıyoruz. 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0!',
        {
          visual: `GERİYE BİRER SAYMA:
20 ⬅️ 19 ⬅️ 18 ⬅️ 17 ⬅️ 16
   -1    -1    -1    -1

15 ⬅️ 14 ⬅️ 13 ⬅️ 12 ⬅️ 11
   -1    -1    -1    -1

10 ⬅️ 9 ⬅️ 8 ⬅️ 7 ⬅️ 6 ⬅️ 5
   -1   -1   -1   -1   -1

🚀 ROKET SAYISI:
10 → 9 → 8 → 7 → 6 → 5 → 4 → 3 → 2 → 1 → FIRLA!`,
          explanation: 'Geriye sayarken her adımda 1 çıkarıyoruz. Roket fırlatırken hep geriye sayarız!',
          tip: 'Uyurken koyun saymak yerine 100\'den 1\'e geriye say!',
          examples: [
            createExample(
              '15\'ten önce hangi sayı gelir (geriye sayarken)?',
              '14',
              '15 - 1 = 14. Geriye sayarken 1 çıkarıyoruz.',
              '15 ⬅️ 14'
            ),
            createExample(
              '10\'dan 5\'e geriye say',
              '10, 9, 8, 7, 6, 5',
              'Her adımda 1 çıkar: 10, 9, 8, 7, 6, 5!',
              '10 ⬅️ 9 ⬅️ 8 ⬅️ 7 ⬅️ 6 ⬅️ 5'
            ),
            createExample(
              '20\'den 15\'e geriye say',
              '20, 19, 18, 17, 16, 15',
              'Her adımda 1 çıkar: 20, 19, 18, 17, 16, 15!',
              '20 ⬅️ 19 ⬅️ 18 ⬅️ 17 ⬅️ 16 ⬅️ 15'
            ),
            createExample(
              '8\'den önce hangi sayı gelir?',
              '7',
              '8 - 1 = 7. Geriye bir adım!',
              '8 ⬅️ 7'
            ),
            createExample(
              '1\'den önce hangi sayı gelir?',
              '0',
              '1 - 1 = 0. Sıfıra ulaştık!',
              '1 ⬅️ 0'
            )
          ]
        }
      ),

      createStep(
        'Farklı Başlangıç Noktalarından Sayma',
        `Her zaman 1\'den veya 0\'dan başlamak zorunda değiliz!

ORTADAN BAŞLAYARAK İKİŞER:
6 → 8 → 10 → 12 → 14 → 16...
veya
7 → 9 → 11 → 13 → 15 → 17... (tek sayılar!)

ORTADAN BAŞLAYARAK BEŞER:
25 → 30 → 35 → 40 → 45 → 50...

ORTADAN BAŞLAYARAK ONAR:
45 → 55 → 65 → 75 → 85 → 95...
veya
40 → 50 → 60 → 70 → 80 → 90 → 100

KURAL:
Hangi sayıdan başlarsan başla, ekleme miktarı aynı kalır!`,
        'Herhangi bir sayıdan başlayarak atlayarak sayabiliriz.',
        {
          visual: `FARKLI BAŞLANGIÇLAR:

İkişer (6'dan):
6 ➡️ 8 ➡️ 10 ➡️ 12 ➡️ 14

İkişer (7'den - tek sayılar):
7 ➡️ 9 ➡️ 11 ➡️ 13 ➡️ 15

Beşer (25'ten):
25 ➡️ 30 ➡️ 35 ➡️ 40 ➡️ 45

Onar (40'tan):
40 ➡️ 50 ➡️ 60 ➡️ 70 ➡️ 80`,
          tip: 'Başlangıç noktası ne olursa olsun, atlama miktarı sabit!',
          examples: [
            createExample(
              '8\'den başlayarak ikişer say',
              '8, 10, 12, 14, 16',
              '8\'den başla, 2\'şer ekle: 8, 10, 12, 14, 16!',
              '8 ➡️ 10 ➡️ 12 ➡️ 14 ➡️ 16'
            ),
            createExample(
              '3\'ten başlayarak ikişer say',
              '3, 5, 7, 9, 11',
              '3\'ten başlayınca tek sayıları sayarsın: 3, 5, 7, 9, 11!',
              '3 ➡️ 5 ➡️ 7 ➡️ 9 ➡️ 11'
            ),
            createExample(
              '35\'ten başlayarak beşer say',
              '35, 40, 45, 50, 55',
              '35\'ten başla, 5\'er ekle: 35, 40, 45, 50, 55!',
              '35 ➡️ 40 ➡️ 45 ➡️ 50 ➡️ 55'
            ),
            createExample(
              '45\'ten başlayarak onar say',
              '45, 55, 65, 75, 85',
              '45\'ten başla, 10\'ar ekle: 45, 55, 65, 75, 85!',
              '45 ➡️ 55 ➡️ 65 ➡️ 75 ➡️ 85'
            ),
            createExample(
              '12\'den başlayarak ikişer say',
              '12, 14, 16, 18, 20',
              '12\'den başla, 2\'şer ekle: 12, 14, 16, 18, 20!',
              '12 ➡️ 14 ➡️ 16 ➡️ 18 ➡️ 20'
            )
          ]
        }
      ),

      createStep(
        'Ritmik Sayma Pratiği 🎵',
        `Harika gidiyorsun! Şimdi pratik zamanı!

🎮 OYUN FİKİRLERİ:
1. Merdiven çıkarken basamakları say
2. Yürürken adımlarını ikişer say
3. El çırparken beşer say
4. Şarkı söyler gibi ritmik say!
5. Top sektirirken say
6. Ip atlarken ikişer veya beşer say

📝 HIZLI ÖZET:
• Birer: 1, 2, 3, 4, 5... (Her adımda +1)
• İkişer: 2, 4, 6, 8, 10... (Her adımda +2)
• Beşer: 5, 10, 15, 20... (Her adımda +5)
• Onar: 10, 20, 30, 40... (Her adımda +10)
• Geriye: 10, 9, 8, 7... (Her adımda -1)

Her gün 5 dakika pratik yaparsan sayma ustası olursun!`,
        'Artık her türlü ritmik sayma yapabilirsin! Pratik yap ve ustalaş!',
        {
          visual: `RİTMİK SAYMA ÖZETİ:
┌──────────────────────────────────┐
│ TÜR      │ ÖRNEK                 │
├──────────┼───────────────────────┤
│ Birer    │ 1, 2, 3, 4, 5...      │
│ İkişer   │ 2, 4, 6, 8, 10...     │
│ Beşer    │ 5, 10, 15, 20...      │
│ Onar     │ 10, 20, 30, 40...     │
│ Geriye   │ 10, 9, 8, 7, 6...     │
└──────────┴───────────────────────┘

ÇIFT/TEK:
Çift: 2, 4, 6, 8, 10 (sonu 0,2,4,6,8)
Tek: 1, 3, 5, 7, 9 (sonu 1,3,5,7,9)`,
          tip: 'Günlük hayatta ritmik saymayı kullan: para sayarken, adım atarken, puan hesaplarken!',
          examples: [
            createExample(
              '100\'e kadar onar onar kaç adım atar?',
              '10 adım',
              '10, 20, 30, 40, 50, 60, 70, 80, 90, 100 = 10 adım!',
              '10 adımda 100!'
            ),
            createExample(
              '20\'ye kadar ikişer kaç adım?',
              '10 adım',
              '2, 4, 6, 8, 10, 12, 14, 16, 18, 20 = 10 adım!',
              '10 adımda 20!'
            ),
            createExample(
              '50\'ye kadar beşer kaç adım?',
              '10 adım',
              '5, 10, 15, 20, 25, 30, 35, 40, 45, 50 = 10 adım!',
              '10 adımda 50!'
            ),
            createExample(
              'Hangi sayma en hızlı 100\'e ulaştırır?',
              'Onar sayma',
              'Onar sayma sadece 10 adımda 100\'e ulaştırır!',
              '10, 20, 30... 100 (10 adım)'
            ),
            createExample(
              '20\'den 0\'a geriye kaç adım?',
              '20 adım',
              '20, 19, 18... 2, 1, 0 = 20 adım (her adımda 1 çıkar)!',
              '20 ⬅️ 19 ⬅️ ... ⬅️ 0'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      // İkişer Sayma
      createMultipleChoice(
        '2, 4, 6, ___ ikişer sayarken sonraki?',
        ['7', '8', '9', '10'],
        '8',
        '6 + 2 = 8! İkişer sayarken 2 ekliyoruz.'
      ),
      createFillBlank(
        '4, 6, 8, 10, ___',
        ['12', 'on iki', 'oniki'],
        'İkişer sayma: 10 + 2 = 12!'
      ),
      createFillBlank(
        '12, 14, 16, 18, ___',
        ['20', 'yirmi'],
        'İkişer sayma: 18 + 2 = 20!'
      ),
      createMultipleChoice(
        '6\'dan sonra ikişer ne gelir?',
        ['7', '8', '9', '5'],
        '8',
        '6 + 2 = 8! İkişer sayarken 2 ekliyoruz.'
      ),
      createFillBlank(
        '8, 10, 12, 14, ___',
        ['16', 'on altı', 'onaltı'],
        'İkişer sayma: 14 + 2 = 16!'
      ),
      createMultipleChoice(
        '2\'den 10\'a ikişer kaç adım?',
        ['3', '4', '5', '6'],
        '4',
        '2, 4, 6, 8, 10 = 4 adım (2→4→6→8→10)'
      ),

      // Beşer Sayma
      createFillBlank(
        '5, 10, 15, 20, ___',
        ['25', 'yirmi beş', 'yirmibeş'],
        '20 + 5 = 25! Beşer sayarken 5 ekliyoruz.'
      ),
      createFillBlank(
        '25, 30, 35, 40, ___',
        ['45', 'kırk beş', 'kırkbeş'],
        'Beşer: 40 + 5 = 45!'
      ),
      createMultipleChoice(
        '15\'ten sonra beşer ne gelir?',
        ['16', '18', '20', '25'],
        '20',
        '15 + 5 = 20! Beşer sayıyoruz.'
      ),
      createMultipleChoice(
        'Beşer saymada 5\'ten sonra ne gelir?',
        ['6', '8', '10', '15'],
        '10',
        'Beşer sayma: 5 + 5 = 10!'
      ),
      createFillBlank(
        '40, 45, 50, 55, ___',
        ['60', 'altmış'],
        'Beşer: 55 + 5 = 60!'
      ),
      createMultipleChoice(
        '100\'e kadar beşer sayarsak kaç adım?',
        ['10', '15', '20', '25'],
        '20',
        '5, 10, 15... 100. Toplam 20 adım!'
      ),

      // Onar Sayma
      createMultipleChoice(
        '10, 20, 30, ___ onar sayarken?',
        ['35', '40', '45', '50'],
        '40',
        '30 + 10 = 40! Onar sayarken 10 ekliyoruz.'
      ),
      createMultipleChoice(
        '50, 60, 70, ___',
        ['75', '80', '85', '90'],
        '80',
        '70 + 10 = 80! Onar sayıyoruz.'
      ),
      createFillBlank(
        '60, 70, 80, 90, ___',
        ['100', 'yüz'],
        'Onar: 90 + 10 = 100!'
      ),
      createFillBlank(
        '40, 50, 60, 70, ___',
        ['80', 'seksen'],
        'Onar: 70 + 10 = 80!'
      ),
      createMultipleChoice(
        '100\'e ulaşmak için kaç kere 10 ekleriz?',
        ['5', '8', '10', '12'],
        '10',
        '10×10 = 100, yani 10 kere 10 ekleriz!'
      ),
      createMultipleChoice(
        '20\'den 50\'ye onar kaç adım?',
        ['2', '3', '4', '5'],
        '3',
        '20, 30, 40, 50 = 3 adım (20→30→40→50)'
      ),

      // Geriye Sayma
      createFillBlank(
        '20, 19, 18, 17, ___',
        ['16', 'on altı', 'onaltı'],
        '17 - 1 = 16! Geriye sayarken 1 çıkarıyoruz.'
      ),
      createMultipleChoice(
        '10\'dan geriye 7\'ye kaç adım?',
        ['2', '3', '4', '5'],
        '3',
        '10, 9, 8, 7 = 3 adım geriye!'
      ),
      createMultipleChoice(
        '14\'ten önce gelen (geriye sayarken)?',
        ['13', '15', '12', '16'],
        '13',
        '14 - 1 = 13! Geriye sayarken 1 çıkarıyoruz.'
      ),
      createFillBlank(
        '15, 14, 13, 12, ___',
        ['11', 'on bir', 'onbir'],
        'Geriye: 12 - 1 = 11!'
      ),
      createMultipleChoice(
        '8\'den önce hangi sayı gelir?',
        ['7', '9', '6', '10'],
        '7',
        '8 - 1 = 7! Geriye bir adım.'
      ),
      createFillBlank(
        '10, 9, 8, 7, ___',
        ['6', 'altı'],
        'Geriye: 7 - 1 = 6!'
      ),

      // Geriye Beşer/Onar
      createFillBlank(
        '15, 10, 5, ___',
        ['0', 'sıfır'],
        'Beşer geriye: 5 - 5 = 0!'
      ),
      createFillBlank(
        '80, 70, 60, 50, ___',
        ['40', 'kırk'],
        'Onar geriye: 50 - 10 = 40!'
      ),
      createMultipleChoice(
        '30, 20, 10, ___',
        ['5', '0', '15', '25'],
        '0',
        'Onar geriye: 10 - 10 = 0!'
      ),
      createFillBlank(
        '50, 45, 40, 35, ___',
        ['30', 'otuz'],
        'Beşer geriye: 35 - 5 = 30!'
      ),

      // Çift/Tek Sayılar
      createMultipleChoice(
        'Hangisi çift sayı DEĞİLDİR?',
        ['4', '8', '7', '10'],
        '7',
        '7 tek sayıdır! Çift sayılar: 2, 4, 6, 8, 10...'
      ),
      createMultipleChoice(
        'Hangisi tek sayıdır?',
        ['2', '4', '5', '6'],
        '5',
        '5 tek sayıdır! Sonu 5 ile biten sayılar tektir.'
      ),
      createMultipleChoice(
        '12 tek mi çift mi?',
        ['Tek', 'Çift', 'İkisi de', 'Hiçbiri'],
        'Çift',
        '12 çift sayıdır. Sonu 2 ile bitiyor!'
      ),
      createMultipleChoice(
        '15 tek mi çift mi?',
        ['Tek', 'Çift', 'İkisi de', 'Hiçbiri'],
        'Tek',
        '15 tek sayıdır. Sonu 5 ile bitiyor!'
      ),
      createMultipleChoice(
        '1\'den 10\'a kaç çift sayı var?',
        ['4', '5', '6', '10'],
        '5',
        '2, 4, 6, 8, 10 = 5 çift sayı!'
      ),
      createMultipleChoice(
        '1\'den 10\'a kaç tek sayı var?',
        ['4', '5', '6', '10'],
        '5',
        '1, 3, 5, 7, 9 = 5 tek sayı!'
      ),

      // Farklı Başlangıç
      createMultipleChoice(
        '7\'den başlayarak ikişer sayarsak: 7, 9, 11, ___',
        ['12', '13', '14', '15'],
        '13',
        '11 + 2 = 13! Tek sayıları sayıyoruz.'
      ),
      createFillBlank(
        '35\'ten başlayarak beşer: 35, 40, 45, ___',
        ['50', 'elli'],
        '45 + 5 = 50!'
      ),
      createMultipleChoice(
        '45\'ten başlayarak onar: 45, 55, 65, ___',
        ['70', '75', '80', '85'],
        '75',
        '65 + 10 = 75!'
      ),

      // Karışık ve Uygulama
      createMultipleChoice(
        'Hangi sayma en hızlı 100\'e ulaştırır?',
        ['Birer', 'İkişer', 'Beşer', 'Onar'],
        'Onar',
        'Onar sayma sadece 10 adımda 100\'e ulaştırır!'
      ),
      createMultipleChoice(
        'Saat dakikaları nasıl ilerler?',
        ['Birer', 'İkişer', 'Beşer', 'Onar'],
        'Beşer',
        'Saatler beşer beşer ilerler: 5, 10, 15, 20...'
      ),
      createMultipleChoice(
        '5 elin kaç parmağı var?',
        ['15', '20', '25', '30'],
        '25',
        '5 el × 5 parmak = 25 parmak! Beşer sayma: 5, 10, 15, 20, 25!'
      ),
      createFillBlank(
        'Roket geri sayımı: 5, 4, 3, 2, 1, ___',
        ['0', 'sıfır', 'fırla', 'FIRLA'],
        'Geri sayım: 1 - 1 = 0! Roket fırlıyor!'
      ),
      createMultipleChoice(
        '3 çift çorap kaç çorap eder?',
        ['3', '4', '5', '6'],
        '6',
        '1 çift = 2 çorap. 3 çift = 6 çorap! İkişer: 2, 4, 6!'
      )
    ],

    summary: 'İkişer, beşer, onar atlayarak saymayı ve geriye saymayı öğrendik! Çift sayılar (2, 4, 6...) ve tek sayılar (1, 3, 5...) arasındaki farkı anladık. Ritmik sayma günlük hayatta çok kullanışlı!',
    nextTopicPreview: 'Sonraki konuda örüntüleri keşfedeceğiz! Sayılardaki ve şekillerdeki kalıpları bulacağız!'
  }
};
