/**
 * ============================================================================
 * KONFIGURASI PERSONAL
 * ----------------------------------------------------------------------------
 * Semua teks, foto, dan musik yang bisa diganti ada di file ini.
 * Cukup ubah nilainya, simpan, lalu halaman langsung diperbarui.
 *
 * CATATAN: beberapa kalimat memakai nama secara eksplisit agar mudah diubah
 * per baris. Saat mengganti nama, sesuaikan juga `intro.judul`, `hero.judul`,
 * `surat`, `hadiahSection.items`, dan `penutup`.
 * ============================================================================
 */

export const birthdayConfig = {
  // --------------------------------------------------------------------------
  // Informasi dasar
  // --------------------------------------------------------------------------
  namaPacar: 'Nur Aini',
  panggilanSayang: 'Cayang Aini',
  namaku: 'Si Ganteng',
  tanggalJadian: '14 Juli 2022',
  umur: 24,

  // --------------------------------------------------------------------------
  // Musik latar
  // Taruh lagu pilihanmu di public/music/ lalu sesuaikan `src` di bawah.
  // Contoh: src: '/music/lagu-kita.mp3'
  // --------------------------------------------------------------------------
  musik: {
    src: '/music/birthday.wav',
    volume: 0.45,
  },

  // --------------------------------------------------------------------------
  // 1. Intro screen
  // --------------------------------------------------------------------------
  intro: {
    badge: 'Special Day',
    judul: `Ada kejutan untuk Nur Aini 💌`,
    subjudul: 'Siapkan senyummu dulu sebelum membuka halaman kecil ini ya.',
    tombol: 'Buka Kejutan',
  },

  // --------------------------------------------------------------------------
  // 2. Hero
  // --------------------------------------------------------------------------
  hero: {
    pill: '🎂 Happy Birthday',
    judul: `Selamat Ulang Tahun, Cayang Aini!`,
    subjudul:
      'Hari ini dunia jadi sedikit lebih manis, karena orang tersayangku bertambah usia.',
    tanggal: `💞 Sejak 14 Juli 2022`,
    scrollHint: 'Scroll pelan-pelan ya',
  },

  // --------------------------------------------------------------------------
  // 3. Countdown / umur
  // --------------------------------------------------------------------------
  umurSection: {
    lead: 'Hari ini kamu resmi berumur',
    unit: 'tahun',
    catatan:
      'Semoga di umur yang baru ini, setiap langkahmu selalu dipenuhi tawa, ketenangan, dan hal-hal baik.',
  },

  // --------------------------------------------------------------------------
  // 4. Surat personal
  // --------------------------------------------------------------------------
  surat: {
    tag: 'Surat Kecil',
    judul: 'Dari Aku Untukmu',
    deskripsi: 'Ada beberapa kata yang ingin kusampaikan di hari spesialmu.',
    petunjukBuka: 'Ketuk untuk membuka surat',
    dari: 'Ditulis khusus oleh Si Ganteng',
    sapaan: 'Untuk Cayang Aini tersayang,',
    isi: `Selamat ulang tahun ya, sayang.

Terima kasih sudah hadir dan bikin hari-hariku terasa jauh lebih hangat, seru, dan penuh warna. Aku selalu bersyukur bisa mengenalmu, mendengarkan ceritamu, dan ikut tumbuh bareng kamu sampai hari ini.

Semoga semua impian yang sedang kamu perjuangkan pelan-pelan tercapai, sehat selalu, dan jangan pernah lupa kalau ada aku yang selalu dukung kamu dari dekat.

Tetap jadi Aini yang manis, ceria, dan bikin aku jatuh cinta lagi setiap hari ya!`,
    penutup: 'Dengan penuh sayang,\nSi Ganteng 🤍',
    tombolTampilkan: 'Tampilkan Semua',
  },

  // --------------------------------------------------------------------------
  // 5. Timeline kenangan
  // Ganti `foto` dengan foto kalian sendiri (taruh di public/images/).
  // --------------------------------------------------------------------------
  timelineSection: {
    tag: 'Jejak Kita',
    judul: 'Timeline Kenangan',
    deskripsi:
      'Potongan momen yang selalu bikin aku tersenyum setiap mengingatnya.',
    items: [
      {
        tanggal: 'Awal Kenal',
        judul: 'Pertama Kali Ngobrol',
        caption:
          'Waktu itu masih agak canggung, tapi entah kenapa obrolan kita langsung nyambung dan bikin betah.',
        foto: '/images/image_2.png',
      },
      {
        tanggal: 'Kencan Pertama',
        judul: 'Jalan Sore Berdua',
        caption:
          'Jalan santai, ketawa bareng hal-hal receh, dan pulang dengan senyum yang susah hilang.',
        foto: '/images/image_4.jpeg',
      },
      {
        tanggal: '14 Februari 2024',
        judul: 'Resmi Jadi Kita',
        caption:
          'Hari di mana kita sepakat buat jalan bareng lebih jauh. Salah satu keputusan terbaikku.',
        foto: '/images/image_1.jpeg',
      },
      {
        tanggal: 'Momen Favorit',
        judul: 'Quality Time & Cerita Panjang',
        caption:
          'Nggak perlu tempat mewah, asal bareng kamu semuanya selalu terasa cukup dan menyenangkan.',
        foto: '/images/image_5.jpeg',
      },
      {
        tanggal: 'Hari Ini',
        judul: 'Selamat Ulang Tahun, Sayang!',
        caption:
          'Babak baru untukmu dimulai hari ini. Mari buat lebih banyak kenangan manis lagi ke depannya!',
        foto: '/images/image_1.jpeg',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 6. Galeri polaroid
  // --------------------------------------------------------------------------
  galeriSection: {
    tag: 'Galeri Manis',
    judul: 'Bingkai Polaroid Kita',
    deskripsi: 'Ketuk foto untuk melihat lebih dekat.',
    items: [
      { foto: '/images/image_2.png', caption: 'Awal cerita kita ☕' },
      { foto: '/images/image_4.jpeg', caption: 'Sore paling manis ✨' },
      { foto: '/images/image_1.jpeg', caption: 'Hari jadian kita 💐' },
      { foto: '/images/image_3.jpeg', caption: 'Langit biru bareng kamu ☁️' },
    ],
  },

  // --------------------------------------------------------------------------
  // 7. Sepuluh alasan
  // --------------------------------------------------------------------------
  alasanSection: {
    tag: '10 Hal Kecil',
    judul: 'Alasan Aku Sayang Kamu',
    deskripsi: 'Ketuk kartunya satu per satu untuk membuka alasannya.',
    items: [
      'Senyummu selalu sukses bikin hariku yang capek langsung adem lagi.',
      'Kamu pendengar yang baik, bahkan untuk ceritaku yang paling random.',
      'Cara kamu ketawa itu menular banget, susah buat nggak ikut senang.',
      'Kamu sabar menghadapi tingkahku yang kadang jahil dan nyebelin.',
      'Perhatian kecilmu selalu bikin aku merasa benar-benar dijaga.',
      'Kamu punya semangat besar setiap kali mengejar hal yang kamu mau.',
      'Ngobrol sama kamu nggak pernah membosankan, ada saja bahasannya.',
      'Kamu selalu bikin momen sederhana terasa jadi kenangan spesial.',
      'Kamu tulus dan hangat sama orang-orang di sekitarmu.',
      'Singkatnya: karena kamu adalah kamu, Cayang Aini-ku.',
    ],
  },

  // --------------------------------------------------------------------------
  // 8. Kue ulang tahun
  // --------------------------------------------------------------------------
  kueSection: {
    tag: 'Make a Wish',
    judul: 'Tiup Lilinnya Dulu!',
    deskripsi:
      'Pejamkan mata, ucapkan doa terbaikmu, lalu ketuk lilin atau tombol di bawah.',
    pesan: 'Semoga semua harapanmu terkabul 🤍',
    tombolTiup: 'Tiup Lilin',
    tombolNyalakan: 'Nyalakan Lagi',
  },

  // --------------------------------------------------------------------------
  // 9. Kotak hadiah
  // --------------------------------------------------------------------------
  hadiahSection: {
    tag: 'Hadiah Spesial',
    judul: 'Ada Kado Kecil Untukmu',
    deskripsi:
      'Kotaknya sudah goyang-goyang tuh, ketuk untuk membukanya!',
    petunjuk: 'Ketuk kotak hadiah di atas 👆',
    petunjukTerbuka: 'Yay! Ini kupon spesial khusus buatmu 🎉',
    items: [
      {
        ikon: '🍽️',
        judul: 'Voucher Makan Malam Bareng',
        deskripsi:
          'Bebas pilih menu & tempat favoritmu, ditraktir penuh oleh Si Ganteng!',
      },
      {
        ikon: '🎬',
        judul: 'Voucher Nonton Bioskop',
        deskripsi:
          'Pilih film apa saja plus popcorn ukuran besar buat kita berdua.',
      },
      {
        ikon: '🤍',
        judul: 'Voucher Peluk & Manja Sepuasnya',
        deskripsi:
          'Berlaku kapan saja tanpa tanggal kedaluwarsa, khusus untuk Cayang Aini.',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 10. Penutup
  // --------------------------------------------------------------------------
  penutup: {
    teks:
      'Sekali lagi selamat ulang tahun ya, Cayang Aini. Terima kasih sudah menjadi alasan paling manis di balik banyak senyumku hari ini dan seterusnya.',
    dari: '— Si Ganteng',
    tombol: 'Putar Ulang Kejutan',
  },
};
