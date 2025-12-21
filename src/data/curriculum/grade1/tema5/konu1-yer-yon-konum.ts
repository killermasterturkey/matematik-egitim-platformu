// 1. SINIF - TEMA 5 - KONU 1: Yer, Yön ve Konum
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1YerYonKonum: Topic = {
  id: 'yer-yon-konum',
  title: 'Yer, Yön ve Konum',
  description: 'Nesnelerin yerini, yönünü ve konumunu tanımlama',
  emoji: '🧭',
  duration: '45 dk',
  difficulty: 1,
  keywords: ['yer', 'yön', 'konum', 'üst', 'alt', 'sağ', 'sol', 'ön', 'arka'],
  objectives: [
    'Üst-alt kavramlarını ayırt eder',
    'Sağ-sol kavramlarını ayırt eder',
    'Ön-arka kavramlarını ayırt eder',
    'Nesnelerin konumunu tarif eder'
  ],
  content: {
    introduction: `Merhaba küçük kaşif! 🧭

Her şeyin bir yeri var! Üstte mi, altta mı? Sağda mı, solda mı? Önde mi, arkada mı?

Bugün nesnelerin yerini ve yönünü tanımlamayı öğreneceğiz!

Hazır mısın? Yön bulmaya başlayalım! 🚀`,

    motivationQuote: 'Yönünü bilen, yolunu bulur! 🧭',

    funFacts: [
      'Kuşlar manyetik alanı kullanarak yön bulur! 🐦',
      'Pusula her zaman kuzeyi gösterir! 🧭',
      'GPS uyduları konumumuzu metre hassasiyetiyle bulur! 📍',
      'Arılar güneşi kullanarak yollarını bulur! 🐝',
      'Kuzey Yıldızı her zaman kuzeyi gösterir! ⭐'
    ],

    steps: [
      createStep(
        'Üst ve Alt',
        `Yukarıda olan ÜSTTE, aşağıda olan ALTTA! ⬆️⬇️

📋 ÜSTTE OLANLAR:
• Tavan
• Gökyüzü
• Bulutlar
• Kuşlar

📋 ALTTA OLANLAR:
• Zemin
• Halı
• Karıncalar
• Ayaklarımız`,
        'Başını kaldır: tavan üstte. Ayağına bak: zemin altta.',
        {
          visual: `Üst ve Alt:
      ☁️ ← Bulut ÜSTTE
      🐦 ← Kuş ÜSTTE
      ━━━━━━━━ Çizgi
      🌱 ← Çimen ALTTA
      🐜 ← Karınca ALTTA`,
          examples: [
            createExample(
              'Kuşlar nerede uçar?',
              'Üstte (Gökyüzünde)',
              'Kuşlar gökyüzünde, yani üstte uçar!',
              '🐦 → ÜSTTE (Gökyüzü)'
            ),
            createExample(
              'Halı nerede?',
              'Altta (Yerde)',
              'Halı zemine serilir, yani altta!',
              '🪵 → ALTTA (Zemin)'
            )
          ]
        }
      ),

      createStep(
        'Sağ ve Sol',
        `Kalbin olduğu taraf SOL, diğer taraf SAĞ! 👈👉

📋 HATIRLA:
• Kalbini dinle → Sol tarafta
• Yazı yazdığın el (çoğu kişi için) → Sağ el

🎯 ALIŞTIRMA:
1. Ellerini aç
2. Sol elini kaldır ✋
3. Sağ elini kaldır ✋

Sol ve sağı karıştırma!`,
        'Kalbinin olduğu taraf sol tarafın!',
        {
          visual: `Sol ve Sağ:
  👈 SOL      👉 SAĞ
    ↓            ↓
  ❤️ Kalp    ✍️ Yazı
    tarafı     eli`,
          tip: 'Kalbin solda, kalem sağda (çoğu kişi için)!',
          examples: [
            createExample(
              'Kalbin hangi tarafta?',
              'Sol tarafta',
              'Kalbin göğsünün sol tarafındadır!',
              '❤️ → SOL'
            ),
            createExample(
              'Sağ eline ne tutarsın?',
              'Kalem (Çoğu kişi için)',
              'Çoğu kişi sağ eliyle yazar!',
              '✍️ → SAĞ el'
            )
          ]
        }
      ),

      createStep(
        'Ön ve Arka',
        `Yüzünün baktığı yer ÖN, sırtının olduğu yer ARKA! 👀🔙

📋 ÖNDE OLANLAR:
• Yüzün
• Göğsün
• Karnın

📋 ARKADA OLANLAR:
• Sırtın
• Topuklarının arkası`,
        'Yüzün baktığı yön ön, sırtın baktığı yön arka!',
        {
          visual: `Ön ve Arka:
     👀 ← Yüz (ÖN)
     👤
     🔙 ← Sırt (ARKA)`,
          examples: [
            createExample(
              'Öğretmen tahtanın neresinde durur?',
              'Önünde',
              'Öğretmen sınıfın önünde, tahtanın önünde durur!',
              '👩‍🏫 → ÖN'
            ),
            createExample(
              'Sırt çantan nerede?',
              'Arkamda',
              'Sırt çantası sırtımızda, yani arkamızda!',
              '🎒 → ARKA'
            )
          ]
        }
      ),

      createStep(
        'İç ve Dış',
        `Bir şeyin içinde olan İÇTE, dışında olan DIŞTA! 📦

📋 İÇ ÖRNEKLER:
• Kutunun içindeki oyuncak
• Çantanın içindeki kitap
• Odanın içindeki masa

📋 DIŞ ÖRNEKLER:
• Kutunun dışındaki etiket
• Evin dışındaki bahçe`,
        'Kutu kapalıyken içini göremezsin, açınca görürsün!',
        {
          visual: `İç ve Dış:
┌─────────┐
│  🧸     │ ← İÇ (içinde)
│  İÇ    │
└─────────┘
   🏷️ ← DIŞ (dışında)`,
          examples: [
            createExample(
              'Kitaplar çantanın neresinde?',
              'İçinde',
              'Kitaplar çantanın içine konur!',
              '📚 → İÇ'
            )
          ]
        }
      ),

      createStep(
        'Yakın ve Uzak',
        `Sana yakın olan YAKIN, uzak olan UZAK! 📏

📋 YAKIN ÖRNEKLER:
• Masandaki kalem
• Yanındaki arkadaş
• Evinin yanındaki market

📋 UZAK ÖRNEKLER:
• Uzaktaki dağlar
• Başka şehirler
• Ay ve Güneş`,
        'Yakın olanlar kolay ulaşılır, uzak olanlar zor!',
        {
          visual: `Yakın ve Uzak:
👧 ← Sen
 ↓
📘 ← YAKIN (masadaki kitap)
 ⋮
 ⋮
 ⋮
🏔️ ← UZAK (dağ)`,
          examples: [
            createExample(
              'Sırandaki kalem sana yakın mı uzak mı?',
              'Yakın',
              'Sırandaki eşyalar sana çok yakın!',
              '✏️ → YAKIN'
            )
          ]
        }
      ),

      createStep(
        'Yön Pratiği! 🧭',
        `Harika öğrendin! Şimdi pratik zamanı!

🎮 YÖN OYUNLARI:
• "Simon Says" - Sağ el kaldır, sol ayak kaldır...
• Hazine avı - "2 adım sağa, 3 adım ileri..."
• Konum tarifi - "Kalem masanın üstünde"

📝 HER GÜN PRATİK YAP:
• Odandaki eşyaların konumunu söyle
• Sağ ve solu karıştırmadan söyle
• Arkadaşlarına yön tarifi yap`,
        'Pratik yaparsan yön ustası olursun!',
        {
          visual: `Konum Özeti:
┌─────────────────────────┐
│ ⬆️ ÜSTTE - YUKARI      │
│ ⬇️ ALTTA - AŞAĞI       │
│ ⬅️ SOLDA              │
│ ➡️ SAĞDA              │
│ 👀 ÖNDE               │
│ 🔙 ARKADA              │
│ 📦 İÇTE - DIŞTA        │
│ 📏 YAKIN - UZAK        │
└─────────────────────────┘`,
          examples: [
            createExample(
              'Tavan nerede?',
              'Üstte',
              'Tavan her zaman üstte!',
              '⬆️ ÜSTTE'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Kuşlar nerede uçar?',
        ['Altta', 'Üstte', 'Yanda', 'İçte'],
        'Üstte',
        'Kuşlar gökyüzünde, yani üstte!'
      ),
      createFillBlank(
        'Kalbimiz ___ tarafımızda',
        ['sol'],
        'Kalp sol tarafta!'
      ),
      createMultipleChoice(
        'Halı nerede olur?',
        ['Üstte', 'Altta', 'Önde', 'Arkada'],
        'Altta',
        'Halı yerde, yani altta!'
      ),
      createFillBlank(
        'Sırt çantam ___',
        ['arkamda', 'arkada'],
        'Sırt çantası arkamızda!'
      ),
      createMultipleChoice(
        'Kitaplar çantanın neresinde?',
        ['Dışında', 'İçinde', 'Üstünde', 'Altında'],
        'İçinde',
        'Kitaplar çantanın içinde!'
      ),
      createFillBlank(
        'Tavan ___ baş üstümüzdedir',
        ['üstte', 'yukarıda'],
        'Tavan üstte!'
      ),
      createMultipleChoice(
        'Öğretmen sınıfın neresinde durur?',
        ['Arkasında', 'Önünde', 'Dışında', 'Altında'],
        'Önünde',
        'Öğretmen sınıfın önünde!'
      ),
      createFillBlank(
        'Yüzümüz ___ bakar',
        ['öne', 'ileri'],
        'Yüzümüz öne bakar!'
      ),
      createMultipleChoice(
        'Masandaki kalem sana nasıl?',
        ['Uzak', 'Yakın', 'İçte', 'Dışta'],
        'Yakın',
        'Masandaki eşyalar sana yakın!'
      ),
      createFillBlank(
        'Çoğu kişi ___ eliyle yazar',
        ['sağ'],
        'Çoğu kişi sağ elini kullanır!'
      ),
      createMultipleChoice(
        'Zemin nerede?',
        ['Üstte', 'Altta', 'Önde', 'Arkada'],
        'Altta',
        'Zemin ayaklarımızın altında!'
      ),
      createFillBlank(
        'Sırtımız ___ tarafımızda',
        ['arka', 'arkada'],
        'Sırt arkada!'
      ),
      createMultipleChoice(
        'Dağlar bize göre nasıl?',
        ['Yakın', 'Uzak', 'İçte', 'Altta'],
        'Uzak',
        'Dağlar genellikle uzaktadır!'
      ),
      createFillBlank(
        'Güneş ___ görünür',
        ['üstte', 'yukarıda', 'gökyüzünde'],
        'Güneş üstte!'
      ),
      createMultipleChoice(
        'Bahçe evin neresinde?',
        ['İçinde', 'Dışında', 'Üstünde', 'Altında'],
        'Dışında',
        'Bahçe evin dışında!'
      )
    ],

    summary: 'Üst-alt, sağ-sol, ön-arka, iç-dış ve yakın-uzak kavramlarını öğrendik!',
    nextTopicPreview: 'Sonraki konuda geometrik şekilleri öğreneceğiz!'
  }
};
