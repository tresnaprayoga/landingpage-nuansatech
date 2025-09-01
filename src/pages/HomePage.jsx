import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import WhyChooseUs from '../component/WhyChooseUs';
import { FaHandHoldingHand, FaRegThumbsUp, FaSquareDribbble } from 'react-icons/fa6';
import PricingSection from '../component/DaftarHarga';
import pricingPlans from '../dataStatis/datalabelharga';
import DomainPricing from '../component/DomainPraicing';
import ListItemCard from '../component/listCard/ListItemCard';
import { DataHeroSection, HargaDomain } from '../dataStatis/data';
import { dataItemCard } from '../dataStatis/dataitemcard';
import ListHeroSection from '../component/heroListSection';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  const [DataHero, setDataHero] = useState(() => DataHeroSection());
  const [DataHargaDomain, setDataHargaDOmain] = useState(() => HargaDomain());
  const [DataItemCard, setDataItemCard] = useState(() => dataItemCard());

  const features = [
    { title: 'HARGA BERSAHABAT', description: 'Biaya terjangkau untuk semua skala bisnis', icon: <FaHandHoldingHand /> },
    { title: 'Website Siap Pakai', description: 'Cocok untuk anda yang tidak mau ribet membuat Website sendiri', icon: <FaSquareDribbble /> },
    { title: 'TAMPILAN WEB YANG MENARIK', description: 'Tampilan Web yang menarik Responsive disemua perangkat', icon: <FaRegThumbsUp /> },
  ];
  return (
    <>
      <Helmet>
        <title>Nuansa Technology</title>
        <meta name='description' content='Website untuk UMKM, usaha jasa, restoran, dan sekolah.' />
        <meta property='og:title' content='Nuansa Technology - Bantu umkm punya website' />
        <meta property='og:image' content='https://nuansatechnology.netlify.app/logontch3.png' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://nuansatechnology.netlify.app/' />
      </Helmet>

      <div className='home-page-landingpage'>
        <ListHeroSection herosSection={DataHero} />
        <DomainPricing domains={DataHargaDomain} />
        <WhyChooseUs title='Kenapa Pilih Kami' subtitle='Harga Bersahabat Kualitas Dahsyat' features={features} />
        <div>
          <PricingSection title='SPESIFIKASI LAYANAN' plans={pricingPlans} showDetails='Spesifikasi detail' />
        </div>
        <div className='cardlist'>
          <h4>Dapatkan Web Pilihan Anda Disini </h4>
          <ListItemCard items={DataItemCard} />
          <div className='see-more'>
            <button>Lihat Semua</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
