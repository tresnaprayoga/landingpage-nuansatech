const dataHerosection = [
  {
    title: 'Saatnya Bisnis Anda Naik Kelas !',
    subtitle: '"Di era digital seperti sekarang, website bukan lagi pilihan—melainkan kebutuhan. Dengan memiliki website, Bisnis Anda bisa dikenal lebih luas, dipercaya lebih cepat, dan diakses 24 jam tanpa henti."',
    buttonText: 'Hubungi Kami',
    trustText: 'The most trusted system in the global world',
    ImgHero: '/2.jpg',
  },
];

const domainPricing = [
  { name: '.id', originalPrice: 'Rp 252.900', discountedPrice: 'Rp 220.900' },
  { name: '.com', originalPrice: 'Rp 199.900', discountedPrice: 'Rp 160.900' },
  { name: '.online', originalPrice: 'Rp 579.900', discountedPrice: 'Rp 42.900' },
  { name: '.shop', originalPrice: 'Rp 579.900', discountedPrice: 'Rp 26.900' },
  { name: '.info', originalPrice: 'Rp 413.900', discountedPrice: 'Rp 76.900' },
  { name: '.xyz', originalPrice: 'Rp 231.900', discountedPrice: 'Rp 42.900' },
  { name: '.icu', originalPrice: 'Rp 264.900', discountedPrice: 'Rp 26.900' },
];

function DataHeroSection() {
  return dataHerosection;
}

function HargaDomain() {
  return domainPricing;
}

export { DataHeroSection, HargaDomain };
