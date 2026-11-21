# Prompt Base Desain — Birthday Surprise (React)

Dokumen ini adalah **design brief + prompt siap pakai** untuk membangun website
ucapan ulang tahun dengan nuansa dreamy pastel seperti
[referensi_ui.html](../referensi_ui/referensi_ui.html). Bagian akhir dokumen
berisi prompt ringkas yang bisa ditempel langsung ke AI coding assistant.

---

## 1. Ringkasan proyek

Buat landing page satu halaman untuk merayakan ulang tahun pasangan. Website
harus terasa seperti "surat cinta digital": hangat, manis, playful, dan personal
— bukan seperti template kartu ucapan yang generik.

**Target pengguna:** pacar pemilik hari ulang tahun, kemungkinan besar membuka
dari ponsel.

**Tujuan emosional:**

1. Kaget dan tersentuh saat intro dibuka.
2. Merasa diapresiasi lewat surat, timeline, dan sepuluh alasan.
3. Tersenyum karena ada interaksi kecil (lilin, kartu flip, kado).
4. Menutup halaman dengan perasaan hangat dan ingin mengulangnya.

**Bahasa:** Indonesia, nada romantis, hangat, sedikit playful. Tidak berlebihan
atau lebay; kalimat pendek dan personal lebih baik daripada paragraf panjang.

---

## 2. Arah visual

### Kata kunci

`soft pastel` · `dreamy` · `cute` · `romantic` · `handwritten` · `airy` ·
`rounded` · `gentle motion`

### Palet warna

| Token | Hex | Pemakaian |
| --- | --- | --- |
| Blue soft | `#CDE7FF` | latar kartu, badge, kue tingkat atas |
| Blue mid | `#A9D6FF` | border chip, piring kue, balon |
| Blue accent | `#7FB8F5` | gradien tombol, garis timeline |
| Pink soft | `#FFD6E8` | kartu alasan, badge tanggal, lilin |
| Pink mid | `#FFB8D6` | border tombol sekunder, pita kado |
| Pink accent | `#FF94BF` | aksen utama, glow hover, flame |
| Background cream | `#FFF9FC` | dasar halaman |
| Text dark | `#4A4A68` | semua teks utama |
| Text muted | `#767696` | deskripsi, caption |
| White | `#FFFFFF` | kartu, border tipis |

**Background halaman:** gradien linear 170° dari `#E5F3FF` → `#FFF9FC` (42%) →
`#FFEAF3`, `background-attachment: fixed`.

**Aturan pemakaian warna:** jangan pernah memakai pink pekat untuk teks panjang.
Pink hanya untuk aksen kecil, border, badge, dan glow. Teks selalu `#4A4A68`
atau `#767696`.

### Tipografi

- **Judul & angka besar:** `Pacifico` (script display), weight 400.
- **Aksen tulisan tangan:** `Dancing Script`, weight 600–700.
- **Body & UI:** `Nunito`, weight 400/600/700/800.

Skala mobile-first:

| Elemen | Ukuran |
| --- | --- |
| Section title | `1.75rem` |
| Hero title | `clamp(1.95rem, 7vw, 2.55rem)` |
| Angka umur | `4.1rem` |
| Nomor kartu alasan | `1.45rem` |
| Body | `0.94–1.05rem` |
| Caption | `0.84–0.9rem` |

Gunakan `text-wrap: balance` pada judul agar baris tidak patah canggung.

### Bentuk, bayangan, dan ruang

- Radius: kartu besar `24px`, kartu kecil `18px`, pill `999px`, hero `32px`.
- Bayangan lembut: biru + pink transparan, bukan hitam pekat.
  - `--shadow-soft: 0 12px 32px rgba(127,184,245,.18), 4px 12px rgba(255,148,191,.14)`
  - `--shadow-card: 0 8px 24px rgba(74,74,104,.08)`
  - `--shadow-glow-pink: 0 8px 24px rgba(255,148,191,.45)`
- Jarak section vertikal: `44px`; padding halaman `18px`; lebar konten maksimal
  `520px` dan selalu di tengah.
- Gunakan border putih 2px dan glassmorphism tipis
  (`rgba(255,255,255,.72)` + `backdrop-filter: blur(8px)`) pada kartu hero/intro.

---

## 3. Struktur halaman

Urutan section dari atas ke bawah. Setiap section (kecuali hero) dibungkus
animasi scroll reveal.

### 3.1 Intro screen — full screen

- Overlay fixed penuh, latar gradien biru → putih → pink.
- Kartu kaca putih (`max-width: 360px`, radius 30px) berisi:
  - badge kecil "Special Day" dengan ikon bintang;
  - ilustrasi amplop SVG pastel yang mengambang pelan;
  - judul script: **"Ada kejutan untuk [nama] 💌"**;
  - subjudul satu baris;
  - tombol gradien biru→pink **"Buka Kejutan"** dengan ikon kado.
- Klik tombol: overlay fade + scale 1.04, musik diputar, judul hero mulai
  mengetik, confetti muncul setelah ±250ms, dan scroll body dibuka.
- Fokus keyboard pindah ke judul hero. Overlay memakai `aria-modal`,
  `aria-labelledby`, dan `inert` saat tersembunyi.

### 3.2 Hero

- Tinggi minimal `max(680px, 92svh)`, konten di tengah.
- 8 balon pastel melayang dari bawah dengan durasi 8–15 detik dan delay acak.
- Kartu kaca berisi pill "🎂 Happy Birthday", judul besar script
  **"Selamat Ulang Tahun, [panggilan]!"**, subjudul, dan chip
  **"💞 Sejak [tanggal jadian]"**.
- Judul muncul per huruf (delay 38ms per karakter). Bungkus per kata agar tidak
  terpotong di tengah kata.
- Indikator scroll di bawah: teks "Scroll pelan-pelan ya" + panah bulat yang
  naik-turun, anchor ke section umur.

### 3.3 Umur

- Kartu gradien biru–pink dengan border putih.
- Teks "Hari ini kamu resmi berumur" + angka besar count-up dari 0 ke umur
  selama 1200ms dengan easing cubic-out + label "tahun" dalam Dancing Script.
- Animasi hanya berjalan sekali saat section masuk viewport (IntersectionObserver
  threshold 0.16). Hormati `prefers-reduced-motion` (langsung tampil angka akhir).
- Di bawahnya satu kalimat doa yang tenang.

### 3.4 Surat personal

- Section header: tag "Surat Kecil", judul "Dari Aku Untukmu", deskripsi pendek.
- Kartu amplop tertutup:
  - lingkaran ikon ✉️ dengan gradien pink–biru, sedikit membesar saat hover;
  - judul "Ketuk untuk membuka surat";
  - keterangan "Ditulis khusus oleh [namamu]".
- Saat diklik: flap berputar `rotateX(180deg)`, lalu amplop hilang dan kertas
  surat muncul dengan animasi unfold (`rotateX(-25deg)` → 0, opacity 0 → 1,
  0.6s cubic-bezier(.22,1,.36,1)).
- Isi surat diketik 26ms per karakter dengan kursor pink berkedip. Tombol
  "Tampilkan Semua" muncul selama mengetik dan langsung menyelesaikan teks.
- Tanda tangan script rata kanan muncul setelah selesai.
- Teks surat tetap nyaman dibaca: `white-space: pre-line`, baris baru dihormati.

### 3.5 Timeline kenangan

- Garis vertikal gradien biru→pink di kiri (3px), dot pink dengan ring putih.
- 5 kartu vertikal berisi foto (tinggi 175px, `object-fit: cover`, radius 14px),
  badge tanggal pink, judul bold, dan caption muted.
- Setiap kartu muncul bergantian saat di-scroll (delay 0–140ms).
- Foto memakai `loading="lazy"` dan `decoding="async"`.

### 3.6 Galeri polaroid

- Grid 2 kolom, gap 16px.
- Bingkai putih dengan padding 10px 10px 16px, foto persegi (`aspect-ratio: 1/1`,
  `object-fit: cover`), caption Dancing Script di bawah.
- Kartu ganjil miring -1.8°, kartu genap +1.8°.
- Hover/tap: jadi tegak, scale 1.05, glow pink, z-index naik.
- Klik men-toggle zoom (bukan membuka lightbox) agar sederhana di ponsel.

### 3.7 Sepuluh alasan

- Grid 2 kolom, 10 kartu flip, tinggi minimal 138px.
- Depan: gradien biru–pink, nomor `#1` script, hint "Ketuk untuk buka 💌".
- Belakang: putih dengan border pink, teks alasan 0.85rem bold.
- Flip 3D `rotateY(180deg)` 0.55s; tiap kartu bisa dibuka/tutup independen.
- Gunakan `<button>` asli, `aria-pressed`, dan label yang menyebut nomor + isi
  alasan saat terbuka.

### 3.8 Kue interaktif

- Kartu putih dengan kue CSS dua tingkat: tingkat atas biru, bawah pink,
  piring biru, lilin bergaris pink-putih, api gradien kuning–oranye dengan glow.
- Api beranimasi flicker 0.9s alternate.
- Klik lilin/kue atau tombol **"Tiup Lilin"**:
  - api mengecil dan hilang;
  - asap kecil naik 1.4s;
  - confetti 85 partikel;
  - pesan Dancing Script **"Semoga semua harapanmu terkabul 🤍"** fade + slide.
- Tombol berubah menjadi **"Nyalakan Lagi"**; klik ulang menyalakan api dan
  menyembunyikan pesan.

### 3.9 Kotak hadiah

- Kotak kado CSS 124×110px: tutup pink, badan biru, pita pink vertikal, pita
  🎀 di atas. Animasi goyang (wiggle) 2.2s berulang.
- Klik kotak: goyangan berhenti, tutup naik + miring, confetti, hint berubah
  menjadi "Yay! Ini kupon spesial khusus buatmu 🎉".
- Di bawahnya muncul 3 voucher dengan border dashed pink, ikon dalam kotak
  gradien, judul bold, dan deskripsi. Animasi unfold saat muncul.
- Kotak hanya bisa dibuka sekali; klik berikutnya tidak melakukan apa-apa.

### 3.10 Penutup

- Kartu gradien pink–biru, hati 💗 yang berdenyut (heartbeat 1.3s).
- Kalimat penutup, tanda tangan script "— [namamu]", dan tombol sekunder
  **"Putar Ulang Kejutan 🔄"**.
- Klik: scroll ke atas, intro muncul kembali, fokus ke tombol Buka Kejutan.
  Saat dibuka lagi, animasi judul dan confetti diputar ulang.

---

## 4. Motion & efek

| Efek | Spesifikasi |
| --- | --- |
| Scroll reveal | opacity 0→1, translateY 24px→0, 0.7s ease, threshold 0.16 |
| Tombol hover | scale 1.04–1.05 + translateY(-2px) + glow pink |
| Confetti | canvas-confetti, 70–90 partikel, spread 70–80, warna palet pastel |
| Balon | naik 115vh, rotasi ±5°, durasi 8–15s, infinite |
| Kelopak | 12 emoji 🌸🩵🩷✨ jatuh pelan 9–19s, opacity ≤0.6 |
| Musik | putar setelah interaksi user, loop, volume 0.45, ikon berputar saat play |
| Reduced motion | semua animasi/transition 0.01ms, confetti off, balon/kelopak disembunyikan, reveal langsung terlihat |

Jangan memakai animasi yang mengganggu membaca. Efek harus terasa seperti
"napas" halaman, bukan pertunjukan.

---

## 5. Aksesibilitas

- Semua kontrol interaktif adalah `<button>` asli atau elemen dengan
  `role="button"`, `tabIndex={0}`, dan handler Enter/Space.
- Label ARIA yang jelas; kartu flip mengumumkan nomor dan isi alasan.
- `aria-live="polite"` untuk pesan kue, hint hadiah, dan isi surat.
- Kontras teks `#4A4A68` di atas pastel memenuhi WCAG AA untuk teks normal.
- Fokus terlihat (`:focus-visible` ring biru) dan tidak hilang saat intro dibuka.
- `prefers-reduced-motion` benar-benar mengubah perilaku, bukan hanya CSS kosmetik.
- Gambar punya alt yang bermakna (judul momen / caption).
- Body tidak bisa di-scroll di belakang intro.

---

## 6. Spesifikasi teknis React

- **Stack:** React 19 + Vite, CSS global (tanpa framework UI), `canvas-confetti`,
  `@fontsource` untuk font latin agar tidak bergantung Google Fonts saat runtime.
- **State global minimal:** intro terbuka, status musik, key animasi hero.
- **State lokal per section:** amplop/typing, kartu flip, zoom polaroid, lilin,
  kado, count-up.
- **Konten terpusat:** semua teks personal, foto, dan path musik di
  `src/data/birthdayConfig.js`.
- **Hook reveal:** `useReveal` membungkus IntersectionObserver dan callback
  "sekali terlihat"; `Reveal` merender section/article dengan class
  `reveal is-visible`.
- **Reduced motion:** hook `usePrefersReducedMotion` + media query CSS.
- **Foto:** `loading="lazy"`, `decoding="async"`, `object-fit: cover`.
- **Layout:** mobile-first, max-width 520px; breakpoint kecil 380px.
- **Audio:** file di `public/music/`; play hanya setelah klik; fallback aman bila
  file belum ada (tidak ada error yang terlihat user).
- **Build:** `npm run build` harus lolos tanpa error.

### Peta komponen

```text
App
├── audio + MusicToggle + AmbientPetals
├── IntroScreen
└── main.page-wrapper
    ├── Hero (playKey)
    ├── AgeSection (count-up on reveal)
    ├── LetterSection (envelope + typing)
    ├── TimelineSection (data-driven + Reveal)
    ├── GallerySection (polaroid zoom)
    ├── ReasonsSection (flip cards)
    ├── CakeSection (candle toggle + confetti)
    ├── GiftSection (gift open + vouchers)
    └── ClosingSection (replay)
```

---

## 7. Checklist konten

- [ ] Nama lengkap, panggilan sayang, nama pengirim.
- [ ] Tanggal jadian dan umur baru.
- [ ] Judul intro + subjudul.
- [ ] Surat 3–5 paragraf, sapaan, dan tanda tangan.
- [ ] 5 momen timeline + foto masing-masing.
- [ ] 4 foto polaroid + caption.
- [ ] 10 alasan sayang yang spesifik (hindari klise).
- [ ] 3 voucher hadiah yang realistis.
- [ ] Kalimat penutup + ajakan memutar ulang.
- [ ] Lagu pilihan (atau biarkan placeholder).
- [ ] Cek di lebar 360px, 390px, dan desktop.
- [ ] Cek dengan keyboard dan mode reduced motion.

---

## 8. Prompt siap tempel

Salin blok berikut ke AI coding assistant. Ganti bagian dalam `[...]` dengan
detail personal.

```text
Buat website ulang tahun untuk pacarku dengan React 19 + Vite, satu halaman
mobile-first, tanpa framework UI tambahan.

TEMA
Dreamy pastel blue-pink. Palet: #CDE7FF, #A9D6FF, #7FB8F5, #FFD6E8, #FFB8D6,
#FF94BF, latar #FFF9FC, teks #4A4A68 dan #767696. Background gradien 170deg
#E5F3FF -> #FFF9FC 42% -> #FFEAF3, fixed. Font: Pacifico untuk judul, Dancing
Script untuk aksen tulisan tangan, Nunito untuk body. Radius 18-32px, shadow
biru-pink lembut, kartu glassmorphism putih tipis. Konten maksimal 520px di
tengah, padding 18px.

STRUKTUR
1) Intro full-screen: kartu kaca 360px, badge "Special Day", ilustrasi amplop,
   judul "Ada kejutan untuk [Nur Aini] 💌", tombol "Buka Kejutan". Klik: putar
   musik, overlay fade+scale, judul hero mengetik, confetti.
2) Hero 92svh: 8 balon pastel melayang, pill "🎂 Happy Birthday", judul
   "Selamat Ulang Tahun, [Cayang Aini]!" per huruf (38ms), chip "💞 Sejak
   [14 Februari 2024]", indikator scroll naik-turun.
3) Umur: teks "Hari ini kamu resmi berumur", angka count-up 0 -> [21] selama
   1.2s saat masuk viewport, label "tahun" script, kalimat doa.
4) Surat: amplop tertutup dengan flap; klik -> flap flip, kertas unfold,
   isi diketik 26ms/karakter dengan kursor pink dan tombol "Tampilkan Semua";
   tanda tangan muncul setelah selesai.
5) Timeline: garis gradien biru-pink, 5 kartu foto + tanggal + caption,
   scroll reveal bergantian.
6) Galeri: grid 2 kolom polaroid miring -1.8/+1.8 derajat, caption script,
   hover/tap tegak + scale 1.05 + glow pink.
7) 10 alasan: grid 2 kolom kartu flip 3D; depan nomor + hint, belakang teks
   alasan; aria-pressed.
8) Kue CSS dua tingkat + lilin; klik lilin/tombol "Tiup Lilin" -> api padam,
   asap, confetti, pesan "Semoga semua harapanmu terkabul 🤍"; tombol jadi
   "Nyalakan Lagi" dan bisa dinyalakan ulang.
9) Kado CSS bergoyang; klik -> tutup terbuka, confetti, muncul 3 voucher
   (makan malam, nonton, peluk) dengan border dashed pink.
10) Penutup: hati berdenyut, kalimat manis, tanda tangan, tombol "Putar Ulang
    Kejutan" yang kembali ke intro.

KONTEN
Semua teks personal, foto timeline/galeri, 10 alasan, dan voucher disimpan di
satu objek konfigurasi src/data/birthdayConfig.js agar mudah diedit. Gunakan
foto placeholder yang bisa diganti. Nama: [Nur Aini], panggilan: [Cayang Aini],
pengirim: [Si Ganteng], tanggal jadian: [14 Februari 2024], umur: [21].

MUSIK
Audio loop di public/music/, baru diputar setelah user menekan "Buka Kejutan",
tombol play/pause mengambang di kanan atas, ikon note berputar saat playing,
volume awal 0.45.

ANIMASI
Scroll reveal fade+slide 24px (0.7s, threshold 0.16), balon naik 115vh, 12
kelopak jatuh pelan, confetti palet pastel, hover scale+glow. Hormati
prefers-reduced-motion: matikan confetti/animasi dekoratif dan tampilkan semua
konten langsung.

AKSESIBILITAS
Semua interaksi pakai button/role+tabIndex, Enter/Space, aria-pressed/live,
focus-visible, alt bermakna, scroll body terkunci saat intro. Kontras AA.

KODE
Struktur komponen rapi (IntroScreen, Hero, AgeSection, LetterSection,
TimelineSection, GallerySection, ReasonsSection, CakeSection, GiftSection,
ClosingSection, Reveal, SectionHeader). CSS global dengan design token. Konten
terpusat. Pastikan `npm run build` lolos. Bahasa Indonesia, nada hangat,
romantis, playful, tidak lebay.
```
