const pricingPlans = [
  {
    name: '1 Tahun Berlangganan',
    price: 'IDR 500.000',
    duration:
      ' ✔️ Gratis Hosting & Domain(.my.id), \n ✔️Integrasi Google Search Console  \n  ✔️Update konten  (teks/gambar) sesuai template \n ✔️Fitur: Formulir /WhatsApp, Google Map \n ✔️Desain responsif (Smart Phone & Desktop ) \n✔️ Revisi: 4x revisi minor (teks/gambar) \n✔️Gratis Copywriting Konten \n ✔️Integrasi Medsos  \n✔️Waktu Pengerjaan: 2 Hari kerja',
  },
  {
    name: '2 Tahun Berlangganan',
    price: 'IDR 900.000',
    duration:
      ' ✔️ Gratis Hosting & Domain (.my.id), \n ✔️Integrasi Google Search Console  \n  ✔️Update konten  (teks/gambar) sesuai template \n ✔️ Fitur: Formulir /WhatsApp, Google Map \n✔️Desain responsif (Smart Phone & Desktop) \n✔️ Revisi: 4x revisi minor (teks/gambar) \n✔️Gratis Copywriting Konten \n ✔️Integrasi Medsos \n✔️Waktu Pengerjaan: 2 Hari kerja',
  },
  {
    name: '3 Tahun Berlangganan',
    price: 'IDR 1300.000',
    duration:
      ' ✔️ Gratis Hosting & Domain (.my.id), \n ✔️Integrasi Google Search Console  \n  ✔️Update konten  (teks/gambar) sesuai template \n ✔️Fitur: Formulir /WhatsApp, Google Map \n✔️Desain responsif (Smart Phone & Desktop) \n✔️ Revisi: 4x revisi minor (teks/gambar) \n✔️Gratis Copywriting Konten \n ✔️Integrasi Medsos \n✔️Waktu Pengerjaan: 2 Hari kerja',
  },
  // { name: 'Website custom sesuai permintaan', price: 'IDR 3000.000 - 5000.000', duration: 'Harga  Disesuaikan dengan kompleksitas fitur yang dibutuhkan' },
];

// src/data/data.js
const heroCtaData = {
  title: 'Spesifikasi Layanan Pembuatan Website',
  desc: ' ✔️ Free Hosting  \n ✔️ Free Domain (.com) \n ✔️Integrasi Google Search Console  \n  ✔️Update konten  (teks/gambar) sesuai template \n ✔️Fitur: Formulir /WhatsApp, Google Map \n✔️Desain responsif (Smart Phone & Desktop) \n✔️ Revisi: 4x revisi minor (teks/gambar) \n✔️Gratis Copywriting Konten \n ✔️Integrasi Medsos \n✔️Waktu Pengerjaan: 2 Hari kerja',
  buttonText: 'Pesan Website Anda Sekarang',
  image: './desaibanner1.png', // simpan di public/images
};

function getHeroCtaData() {
  return heroCtaData;
}

export { getHeroCtaData };
