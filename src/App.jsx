import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './component/navbar';
import WhyChooseUs from './component/WhyChooseUs';
import { FaHandHoldingHand, FaRegThumbsUp, FaSquareDribbble } from 'react-icons/fa6';
import PricingSection from './component/DaftarHarga';
import pricingPlans from './dataStatis/datalabelharga';
import DomainPricing from './component/DomainPraicing';
import InfoPromo from './component/InfoPromo';
import ListItemCard from './component/listCard/ListItemCard';
import items from './dataStatis/dataitemcard';
import Footer from './component/footer';
import { DataHeroSection, HargaDomain } from './dataStatis/data';
import ListHeroSection from './component/heroListSection';
import Aos from 'aos';
import 'aos/dist/aos.css';
import pricingPromo from './dataStatis/pricingPromo';

import './style/app.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  const [DataHero, setDataHero] = useState(() => DataHeroSection());
  const [DataHargaDomain, setDataHargaDOmain] = useState(() => HargaDomain());

  const features = [
    { title: 'HARGA BERSAHABAT', description: 'Biaya terjangkau untuk semua skala bisnis', icon: <FaHandHoldingHand /> },
    { title: 'Website Siap Pakai', description: 'Cocok untuk anda yang tidak mau ribet membuat Website sendiri', icon: <FaSquareDribbble /> },
    { title: 'TAMPILAN WEB YANG MENARIK', description: 'Tampilan Web yang menarik Responsive disemua perangkat', icon: <FaRegThumbsUp /> },
  ];
  return (
    <>
      <header>
        <InfoPromo />
        <Navbar />
      </header>
      <main>
        <ListHeroSection herosSection={DataHero} />
        <DomainPricing domains={DataHargaDomain} />
        <WhyChooseUs title='Kenapa Pilih Kami' subtitle='Harga Bersahabat Kualitas Dahsyat' features={features} />
        <div>
          <PricingSection title='SPESIFIKASI LAYANAN' plans={pricingPlans} showDetails='Spesifikasi detail' />
        </div>
        <div className='cardlist'>
          <h4>Dapatkan Web Pilihan Anda Disini </h4>
          <ListItemCard items={items} />
          <div className='see-more'>
            <button>Lihat Semua</button>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
