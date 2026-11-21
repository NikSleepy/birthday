# Birthday Surprise — React + Vite

Landing page ucapan ulang tahun interaktif untuk **Nur Aini**, dibuat ulang dari
desain [referensi_ui.html](referensi_ui/referensi_ui.html) ke dalam komponen
React yang rapi, responsif, dan mudah diedit.

Nuansa visualnya dreamy pastel biru–pink, mobile-first, dengan animasi balon,
kelopak jatuh, confetti, surat yang terbuka, kartu alasan yang bisa dibalik,
kue interaktif, dan kotak hadiah berisi voucher.

## Menjalankan

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

Build produksi:

```bash
npm run build
npm run preview
```

## Mengganti isi

Hampir semua teks personal ada di satu file:

**[src/data/birthdayConfig.js](src/data/birthdayConfig.js)**

Di sana kamu bisa mengganti:

| Bagian | Yang diubah |
| --- | --- |
| Informasi dasar | Nama, panggilan, nama kamu, tanggal jadian, umur |
| `intro` | Judul dan subjudul layar pembuka |
| `hero` | Judul besar, subjudul, dan chip tanggal |
| `umurSection` | Kalimat umur dan doa kecil |
| `surat` | Sapaan, isi surat, dan tanda tangan |
| `timelineSection.items` | Tanggal, judul, caption, dan foto momen |
| `galeriSection.items` | Foto dan caption polaroid |
| `alasanSection.items` | Sepuluh alasan sayang |
| `kueSection` | Teks tombol tiup/nyalakan dan pesan harapan |
| `hadiahSection.items` | Isi kupon hadiah |
| `penutup` | Kalimat penutup dan tanda tangan |
| `musik` | Path dan volume lagu |

### Foto

Foto contoh dari folder `assets/` sudah disalin ke `public/images/`.
Untuk memakai foto sendiri:

1. Taruh file foto di `public/images/`.
2. Ganti nilai `foto` di `birthdayConfig.js`, misalnya
   `foto: '/images/foto-kita.jpg'`.

Gunakan nama file tanpa spasi agar aman di semua browser.

### Musik

Loop musik box instrumental (original, bebas royalti) ada di
`public/music/birthday.wav` supaya fitur musik langsung bisa dicoba.

Untuk mengganti dengan lagu favorit:

1. Taruh lagu di `public/music/`, misalnya `lagu-kita.mp3`.
2. Ubah `musik.src` di `birthdayConfig.js` menjadi `'/music/lagu-kita.mp3'`.

Musik baru diputar setelah tombol **Buka Kejutan** ditekan, jadi tidak melanggar
kebijakan autoplay browser. Tombol musik mengambang di kanan atas untuk
play/pause.

## Struktur proyek

```text
.
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── images/                  # foto timeline & galeri
│   └── music/birthday.wav       # placeholder musik
├── src/
│   ├── main.jsx                 # entry + import font latin
│   ├── App.jsx                  # state global: intro, musik, replay
│   ├── data/birthdayConfig.js   # SEMUA konten personal
│   ├── hooks/useReveal.js       # IntersectionObserver + reduced motion
│   ├── utils/confetti.js        # confetti pastel
│   ├── styles/global.css        # design tokens + seluruh styling
│   └── components/
│       ├── IntroScreen.jsx
│       ├── MusicToggle.jsx
│       ├── AmbientPetals.jsx
│       ├── Hero.jsx
│       ├── AgeSection.jsx
│       ├── LetterSection.jsx
│       ├── TimelineSection.jsx
│       ├── GallerySection.jsx
│       ├── ReasonsSection.jsx
│       ├── CakeSection.jsx
│       ├── GiftSection.jsx
│       ├── ClosingSection.jsx
│       ├── Reveal.jsx
│       ├── SectionHeader.jsx
│       └── icons.jsx
├── dokumen/
│   ├── propmt_design.md         # brief awal (vanilla HTML)
│   └── prompt-desain-react.md   # prompt/base design system versi React
├── assets/                      # foto sumber asli
└── referensi_ui/                # desain HTML referensi
```

## Interaksi yang tersedia

- Intro full-screen dengan transisi halus dan focus management.
- Judul hero muncul per huruf, balon pastel, dan confetti setelah kejutan dibuka.
- Angka umur count-up saat section masuk viewport.
- Amplop surat terbuka dengan animasi unfold dan efek mengetik (bisa dilewati).
- Timeline dan section lain muncul saat di-scroll.
- Pola polaroid bisa diketuk untuk zoom.
- 10 kartu alasan bisa dibalik satu per satu.
- Lilin kue bisa ditiup dan dinyalakan lagi; muncul asap + confetti + pesan.
- Kotak hadiah bergoyang, terbuka sekali, lalu menampilkan voucher.
- Tombol putar ulang mengembalikan pengunjung ke intro dan memutar ulang animasi.
- `prefers-reduced-motion` dihormati: animasi/confetti dikurangi atau dimatikan.
- Semua kontrol utama bisa diakses lewat keyboard dengan label ARIA.

## Dokumen prompt desain

Prompt/base design system yang dipakai untuk membangun versi React ini ada di
**[dokumen/prompt-desain-react.md](dokumen/prompt-desain-react.md)**.
Dokumen tersebut bisa dipakai ulang untuk membuat variasi desain lain dengan
nuansa yang sama.

## Catatan deploy

Foto dan musik memakai path absolut (`/images/...`, `/music/...`). Saat deploy
ke root domain (Netlify, Vercel, Cloudflare Pages) semuanya langsung jalan.
Kalau di-host di sub-folder, tambahkan `base` di `vite.config.js` dan sesuaikan
path aset di `birthdayConfig.js`.
