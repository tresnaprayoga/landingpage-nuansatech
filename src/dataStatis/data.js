const dataHerosection = [
  {
    title: 'Saatnya Bisnis Anda Naik Kelas !',
    subtitle: '"Di era digital seperti sekarang, website bukan lagi pilihan—melainkan kebutuhan. Dengan memiliki website, Bisnis Anda bisa dikenal lebih luas, dipercaya lebih cepat, dan diakses 24 jam tanpa henti."',
    buttonText: 'Hubungi Kami',
    trustText: 'Jangkau Pelanggan Baru Melalui Website',
    ImgHero: '/2.jpg',
  },
];

const domainPricing = [
  { name: '.com', originalPrice: 'Rp 250.000', discountedPrice: 'Rp 170.000' },
  { name: '.my.id', originalPrice: 'Rp 100.000', discountedPrice: 'Rp 60.000' },
  { name: '.org', originalPrice: 'Rp 250.000', discountedPrice: 'Rp 90.000' },
  { name: '.net', originalPrice: 'Rp 250.000', discountedPrice: 'Rp 140.000' },
];

function DataHeroSection() {
  return dataHerosection;
}

function HargaDomain() {
  return domainPricing;
}

export { DataHeroSection, HargaDomain };
