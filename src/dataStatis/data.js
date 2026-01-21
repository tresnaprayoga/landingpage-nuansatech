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

const promosection = [
  {
    id: 1,
    title: 'File Toolkit for business or personal',
    button1: 'Live Demo',
    image: './toolkit.JPG',
    url: 'https://nuansa-teknologi-pdf-tools.netlify.app/',
  },
  {
    id: 2,

    title: 'Dashboard Admin Sekolah',
    price: 'from $1.99',
    button: 'Hubungi Kami',
    image: './admin.JPG',
    url1: 'https://wa.me/6285811714593',
  },
];

function getPromoSectionData() {
  return promosection;
}

function DataHeroSection() {
  return dataHerosection;
}

function HargaDomain() {
  return domainPricing;
}

export { DataHeroSection, HargaDomain, getPromoSectionData };
