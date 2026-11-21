Buatkan website landing page ucapan ulang tahun untuk pacarku, dalam satu file HTML 
(HTML + CSS + JavaScript vanilla, tanpa framework), siap dibuka langsung di browser.

> Catatan: dokumen ini adalah brief awal versi vanilla HTML. Untuk versi React
> yang ada di proyek ini — lengkap dengan design token, spesifikasi animasi, dan
> prompt siap tempel — lihat [prompt-desain-react.md](./prompt-desain-react.md).

## Informasi Personal
- Nama pacar: [Nur Aini]
- Panggilan sayang: [Cayang Aini]
- Namaku: [Si Ganteng]
- Tanggal jadian: [tanggal]
- Bahasa: Indonesia, nada hangat, romantis, dan sedikit playful

## Tema Visual
- Warna dasar soft blue dan soft pink (pastel). Contoh palet:
  - Blue: #CDE7FF, #A9D6FF, #7FB8F5
  - Pink: #FFD6E8, #FFB8D6, #FF94BF
  - Teks gelap lembut: #4A4A68, background putih keruh #FFF9FC
- Gradient lembut biru ke pink sebagai background
- Font: heading pakai font script/handwriting (misal "Pacifico" atau "Dancing Script"), 
  body pakai "Poppins" atau "Nunito" (Google Fonts)
- Sudut membulat, shadow lembut, nuansa dreamy dan cute
- Mobile-first, harus rapi di HP (karena kemungkinan dibuka lewat ponsel)

## Struktur Halaman (urut dari atas ke bawah)

1. **Intro screen**
   - Layar penuh dengan tulisan "Ada kejutan untuk [nama] 💌" dan tombol "Buka Kejutan"
   - Saat tombol diklik: musik mulai diputar, intro hilang dengan transisi halus
     (autoplay musik tidak boleh jalan sebelum ada interaksi user)

2. **Hero**
   - Tulisan besar "Selamat Ulang Tahun, [nama]!" dengan animasi typing atau fade-in per huruf
   - Balon pastel melayang naik dari bawah layar, plus confetti saat halaman terbuka
   - Indikator scroll berupa panah kecil yang bergerak naik turun

3. **Countdown / Umur**
   - Teks "Hari ini kamu resmi berumur [umur] tahun" dengan angka yang animasi count-up

4. **Surat Personal**
   - Kartu seperti amplop yang bisa dibuka (animasi flip/unfold)
   - Isi surat: [tulis suratmu di sini, atau "buatkan template surat romantis yang bisa kuedit"]
   - Efek mengetik pelan saat surat terbuka

5. **Timeline Kenangan**
   - Timeline vertikal dengan 4-5 momen (placeholder foto + caption), 
     muncul bergantian saat di-scroll (scroll reveal animation)
   - Momen: [kenal pertama, kencan pertama, jadian, dst]

6. **Galeri Foto**
   - Grid atau carousel dengan efek hover/tap zoom, bingkai ala polaroid
   - Pakai placeholder gambar yang mudah kuganti

7. **10 Alasan Aku Sayang Kamu**
   - Kartu yang bisa di-flip/diklik satu per satu, tiap kartu berisi satu alasan
   - Isi: [tulis alasanmu, atau "buatkan 10 contoh yang bisa kuedit"]

8. **Kue Ulang Tahun Interaktif**
   - Kue SVG/CSS dengan lilin menyala; klik lilin (atau tombol "Tiup Lilin") untuk memadamkannya
   - Setelah padam: muncul confetti dan teks "Semoga semua harapanmu terkabul 🤍"

9. **Kotak Hadiah**
   - Kotak hadiah yang bergoyang; saat diklik, terbuka dan menampilkan kupon kejutan 
     (misal "Voucher makan malam bareng", "Voucher nonton")

10. **Penutup**
    - Kalimat penutup manis dari [namamu], hati kecil yang berdenyut, 
      dan tombol "Putar Ulang Kejutan"

## Musik
- Elemen <audio> dengan file lagu ulang tahun (path: "music/birthday.mp3", 
  mudah kuganti dengan lagu lain)
- Tombol play/pause mengambang di pojok kanan atas dengan ikon note musik yang berputar
  saat lagu menyala
- Volume awal sedang dan lagu loop

## Animasi & Efek
- Balon melayang, confetti, kelopak/hati jatuh pelan di background (ringan, tidak berlebihan)
- Scroll reveal (fade + slide up) di tiap section
- Transisi halus dan hover effect pada tombol (scale + glow pink)
- Gunakan CSS animation / IntersectionObserver; boleh pakai library ringan via CDN 
  (misal canvas-confetti)
- Hormati prefers-reduced-motion

## Teknis
- Satu file index.html, CSS dan JS di dalamnya
- Kode rapi dan diberi komentar di bagian yang perlu kuedit (nama, teks, foto, musik)
- Performa ringan, foto pakai lazy loading
- Semua teks personal dikumpulkan di satu objek konfigurasi di atas script 
  agar mudah diganti