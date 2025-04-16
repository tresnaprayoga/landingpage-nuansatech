import React from 'react';
import Navbar from './component/navbar';
import HeroSection from './component/HeroSection';
import WhyChooseUs from './component/WhyChooseUs';
import { FaHandHoldingHand, FaSistrix, FaGears } from 'react-icons/fa6';
import PricingSection from './component/DaftarHarga';
import pricingPlans from './dataStatis/datalabelharga';
import DomainPricing from './component/DomainPraicing';
import domainPricing from './dataStatis/domainpricing';
import InfoPromo from './component/InfoPromo';
import ListItemCard from './component/listCard/ListItemCard';
import pricingPromo from './dataStatis/pricingPromo';

import './style/app.css';

function App() {
  const features = [
    { title: 'HARGA BERSAHABAT', description: 'Biaya terjangkau untuk semua skala bisnis', icon: <FaHandHoldingHand /> },
    { title: 'MENDUKUNG SEO', description: 'Optimasi website untuk ranking lebih baik di mesin pencari', icon: <FaSistrix /> },
    { title: 'TAMPILAN WEB YANG MENARIK', description: 'Tampilan Web yang menarik Responsive disemua perangkat', icon: <FaGears /> },
  ];
  return (
    <>
      <header>
        <InfoPromo />
        <Navbar />
      </header>
      <main>
        <HeroSection
          title='Saatnya Bisnis Anda Naik Kelas'
          subtitle='"Di era digital seperti sekarang, website bukan lagi pilihan—melainkan kebutuhan. 
          Dengan memiliki website, Bisnis Anda bisa dikenal lebih luas, dipercaya lebih cepat, dan diakses 24 jam tanpa henti."'
          buttonText='Hubungi Kami'
          trustText='The most trusted system in the global world'
        />
        <DomainPricing domains={domainPricing} />
        <WhyChooseUs title='Kenapa Pilih Kami' subtitle='Harga Bersahabat Kualitas Dahsyat' features={features} />
        <div>
          <PricingSection title='SPESIFIKASI LAYANAN' plans={pricingPlans} showDetails='Spesifikasi detail' />
        </div>
        <div className='cardlist'>
          <h2>Pilih Template</h2>
          <ListItemCard />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
