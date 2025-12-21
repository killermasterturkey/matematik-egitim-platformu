// 1. SINIF - TEMA 7 - KONU 1: Veri Toplama ve Grafik
import { Topic } from '../../types';
import { createMultipleChoice, createFillBlank, createExample, createStep } from '../../helpers';

export const konu1VeriGrafik: Topic = {
  id: 'veri-toplama-grafik',
  title: 'Veri Toplama ve Grafik',
  description: 'Çetele tablosu oluşturma, nesne grafiği yapma ve yorumlama',
  emoji: '📊',
  duration: '45 dk',
  difficulty: 1,
  keywords: ['veri', 'çetele', 'grafik', 'sayma', 'tablo'],
  objectives: [
    'Veri kavramını anlar',
    'Çetele tablosu oluşturur',
    'Nesne grafiği yapar',
    'Verileri yorumlar'
  ],
  content: {
    introduction: `Merhaba küçük araştırmacı! 📊

Veri toplamak soru sormak ve cevapları saymaktır!

En sevilen meyve hangisi? Sınıfta kaç mavi göz var? Bu soruların cevapları VERİdir!

Bugün veri toplamayı ve grafik yapmayı öğreneceğiz! 🚀`,

    motivationQuote: 'Veriler bize hikayeler anlatır! 📊',

    funFacts: [
      'İlk grafik 1786 yılında çizildi! 📈',
      'Hava durumu tahminleri veri analiziyle yapılır! 🌤️',
      'Futbolda goller veri olarak kaydedilir! ⚽',
      'Bilgisayarlar saniyede milyonlarca veri işler! 💻',
      'Kalp atışın bile bir veridir! ❤️'
    ],

    steps: [
      createStep(
        'Veri Nedir?',
        `Veri, topladığımız bilgilerdir! 📋

📋 VERİ ÖRNEKLERİ:
• Sınıftaki öğrenci sayısı
• En sevilen renkler
• Göz renkleri
• Doğum günleri

🎯 VERİ TOPLAMA ADIMLARI:
1. Soru sor
2. Cevapları dinle
3. Cevapları say
4. Kaydet`,
        'Veri = Topladığımız bilgiler',
        {
          visual: `Veri Örneği:
En sevilen meyve nedir?

🍎 Elma:    ||||| (5 kişi)
🍌 Muz:     ||| (3 kişi)
🍊 Portakal: |||| (4 kişi)

Bu sayılar VERİ!`,
          examples: [
            createExample(
              'Göz renkleri veri midir?',
              'Evet',
              'Sayıp kaydettiğimiz her bilgi veridir!',
              '👁️ Kahve: 10, Mavi: 5, Yeşil: 3 = VERİ'
            )
          ]
        }
      ),

      createStep(
        'Soru Sormak',
        `Veri toplamak için önce soru sormalıyız! ❓

📋 İYİ SORU ÖRNEKLERİ:
• En sevdiğin renk hangisi?
• En sevdiğin meyve hangisi?
• Hangi hayvanı en çok seversin?
• Hangi mevsimi seversin?

💡 KURALLAR:
• Herkes cevaplayabilmeli
• Cevaplar sayılabilmeli
• Net cevaplar olmalı`,
        'İyi sorular iyi veriler getirir!',
        {
          visual: `Soru Örneği:
❓ "En sevdiğin hayvan hangisi?"

Cevaplar:
🐶 Köpek: 8 kişi
🐱 Kedi: 6 kişi
🐰 Tavşan: 4 kişi
🐦 Kuş: 2 kişi`,
          examples: [
            createExample(
              'İyi bir soru örneği ver',
              'En sevdiğin renk hangisi?',
              'Bu soruyu herkes cevaplayabilir ve cevaplar sayılabilir!',
              '❓ En sevdiğin renk?'
            )
          ]
        }
      ),

      createStep(
        'Çetele Tablosu',
        `Çetele, cevapları çizgiyle sayma yöntemidir! 📝

📋 ÇETELE NASIL YAPILIR?
• Her cevap için bir çizgi çiz: |
• 5 olunca üstünü çiz: ||||
• Sonra say ve yaz

🎯 ÖRNEK:
En sevilen renk?
Mavi: |||| = 4
Kırmızı: ||||| = 5
Sarı: ||| = 3`,
        'Her cevap bir çizgi, 5 cevap bir demet!',
        {
          visual: `Çetele Tablosu:
┌──────────┬────────┬───────┐
│  Renk    │ Çetele │ Sayı  │
├──────────┼────────┼───────┤
│  🔵 Mavi │  ||||  │   4   │
│  🔴 Kırm.│ ||||| │   5   │
│  🟡 Sarı │  |||   │   3   │
└──────────┴────────┴───────┘`,
          tip: 'Her 5 çizgide bir demet yap: ||||',
          examples: [
            createExample(
              '|||| kaç sayı demek?',
              '4',
              '4 çizgi = 4 cevap!',
              '|||| = 4'
            ),
            createExample(
              '||||| || kaç?',
              '7',
              '5 + 2 = 7 cevap!',
              '||||| || = 5 + 2 = 7'
            )
          ]
        }
      ),

      createStep(
        'Nesne Grafiği',
        `Nesne grafiği, verileri resimlerle gösterir! 📊

📋 NESNE GRAFİĞİ NASIL YAPILIR?
1. Kategorileri yaz
2. Her cevap için bir resim/sembol koy
3. Resimleri üst üste diz

Bu şekilde verileri görmek kolay!`,
        'Grafik = Verilerin resmi!',
        {
          visual: `Nesne Grafiği:
En Sevilen Meyve

🍎    🍌    🍊
🍎    🍌    🍊
🍎    🍌    🍊
🍎          🍊
🍎
────  ────  ────
Elma  Muz  Port.
 5     3     4`,
          examples: [
            createExample(
              'Grafikte en çok hangi meyve var?',
              'Elma',
              '5 elma var, en çok elma!',
              '🍎🍎🍎🍎🍎 = 5 (En çok)'
            )
          ]
        }
      ),

      createStep(
        'Grafik Yorumlama',
        `Grafiklere bakarak sorulara cevap bulalım! 🔍

📋 GRAFİK OKUMA:
• En çok olan hangisi?
• En az olan hangisi?
• Toplam kaç?
• Fark kaç?

Bu soruları grafiğe bakarak cevaplayabiliriz!`,
        'Grafikler bize bilgi verir!',
        {
          visual: `Grafik Yorumlama:
🔵🔵🔵🔵🔵 Mavi = 5
🔴🔴🔴 Kırm = 3
🟢🟢🟢🟢 Yeşil = 4

Sorular:
✓ En çok: Mavi (5)
✓ En az: Kırmızı (3)
✓ Toplam: 5+3+4 = 12
✓ Mavi-Kırmızı farkı: 5-3 = 2`,
          examples: [
            createExample(
              'En az seçilen renk hangisi?',
              'Kırmızı (3)',
              '3 en küçük sayı, kırmızı en az!',
              '🔴🔴🔴 = 3 (En az)'
            )
          ]
        }
      ),

      createStep(
        'Veri Araştırması Yap! 📊',
        `Şimdi sen bir araştırma yap!

🎮 ARAŞTIRMA FİKİRLERİ:
• Ailenin en sevdiği yemek
• Arkadaşların en sevdiği renk
• Sınıfın en sevdiği hayvan

📝 ADIMLAR:
1. Soru seç
2. Herkese sor
3. Çetele yap
4. Grafik çiz
5. Yorumla`,
        'Sen de bir veri araştırmacısısın!',
        {
          visual: `Veri Toplama Özeti:
┌─────────────────────────┐
│ 1. SORU SOR            │
│ 2. CEVAPLARI TOPLA     │
│ 3. ÇETELE YAP          │
│ 4. GRAFİK ÇİZ          │
│ 5. YORUMLA             │
└─────────────────────────┘`,
          examples: [
            createExample(
              'Veri toplamak için ilk adım?',
              'Soru sormak',
              'Önce soru sormalıyız!',
              '❓ → 📋 → 📊'
            )
          ]
        }
      )
    ],

    practiceQuestions: [
      createMultipleChoice(
        'Veri nedir?',
        ['Resim', 'Toplanan bilgiler', 'Oyun', 'Kitap'],
        'Toplanan bilgiler',
        'Veri = Toplanan bilgiler!'
      ),
      createFillBlank(
        '|||| kaç demek?',
        ['4', 'dört'],
        '4 çizgi = 4!'
      ),
      createMultipleChoice(
        'Grafik ne işe yarar?',
        ['Resim yapmaya', 'Verileri göstermeye', 'Yazı yazmaya', 'Şarkı söylemeye'],
        'Verileri göstermeye',
        'Grafik verileri gösterir!'
      ),
      createFillBlank(
        'Çetele yaparken 5 çizgiyi ___ olarak gösteririz',
        ['||||', 'bir demet'],
        '5 çizgi = bir demet ||||!'
      ),
      createMultipleChoice(
        '||||| || kaç?',
        ['5', '6', '7', '8'],
        '7',
        '5 + 2 = 7!'
      ),
      createFillBlank(
        'Veri toplamak için önce ___ sormalıyız',
        ['soru'],
        'Önce soru sorulur!'
      ),
      createMultipleChoice(
        'En sevilen renk sorusu için veri nasıl toplanır?',
        ['Resim çizerek', 'Herkese sorarak', 'Uyuyarak', 'Koşarak'],
        'Herkese sorarak',
        'Soru sorarak veri toplanır!'
      ),
      createFillBlank(
        'Grafikte en yüksek sütun ___ seçilen şeyi gösterir',
        ['en çok', 'en fazla'],
        'En yüksek = en çok!'
      ),
      createMultipleChoice(
        '🔵🔵🔵🔵🔵 ve 🔴🔴🔴 Hangisi çok?',
        ['Mavi', 'Kırmızı', 'Eşit', 'Belli değil'],
        'Mavi',
        '5 > 3, mavi daha çok!'
      ),
      createFillBlank(
        'Çetele tablosunda her bir çizgi ___ cevap demek',
        ['bir', '1'],
        'Her çizgi = 1 cevap!'
      ),
      createMultipleChoice(
        'Veri topladıktan sonra ne yapılır?',
        ['Uyunur', 'Grafik çizilir', 'Koşulur', 'Yemek yenir'],
        'Grafik çizilir',
        'Veriler grafikle gösterilir!'
      ),
      createFillBlank(
        '8 cevap için ___ çizgi çizilir',
        ['8', 'sekiz'],
        '8 cevap = 8 çizgi!'
      ),
      createMultipleChoice(
        'Grafikte en kısa sütun ne gösterir?',
        ['En çok seçilen', 'En az seçilen', 'Orta', 'Hiçbiri'],
        'En az seçilen',
        'En kısa = en az!'
      ),
      createFillBlank(
        '||||| = ___',
        ['5', 'beş'],
        '5 çizgi = 5!'
      ),
      createMultipleChoice(
        'İyi bir araştırma sorusu hangisi?',
        ['Neden?', 'En sevdiğin renk hangisi?', 'Belki?', 'Olabilir mi?'],
        'En sevdiğin renk hangisi?',
        'Net cevap alınabilecek sorular iyi!'
      )
    ],

    summary: 'Veri toplamayı, çetele tablosu yapmayı, nesne grafiği oluşturmayı ve grafik yorumlamayı öğrendik!',
    nextTopicPreview: 'Tebrikler! 1. Sınıf matematik konularını tamamladın!'
  }
};
