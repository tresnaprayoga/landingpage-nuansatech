import React from 'react';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import Navbar from '../component/navbar';
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
    { title: 'HARGA BERSAHABAT', description: 'Biaya terjangkau untuk semua skala bisnis. \n Bisa bayar setelah pembuatan website jadi', icon: <FaHandHoldingHand /> },
    { title: 'Website Siap Pakai', description: 'Cocok untuk anda yang tidak mau ribet membuat Website sendiri', icon: <FaSquareDribbble /> },
    { title: 'TAMPILAN WEB YANG MENARIK', description: 'Tampilan Web yang menarik Responsive disemua perangkat', icon: <FaRegThumbsUp /> },
  ];

  const homeRef = useRef(null);
  const produkRef = useRef(null);
  const profilRef = useRef(null);
  const hargaRef = useRef(null);
  return (
    <>
      <Helmet>
        <title>Nuansa Teknologi | Buat Website Tanpa Ribet</title>
        <meta
          name='description'
          content='Nuansa Teknologi melayani jasa pembuatan website profesional untuk UMKM, sekolah, 
        dan usaha jasa. Desain menarik, mobile friendly, dan harga terjangkau.'
        />
        <meta property='og:title' content='Nuansa Teknologi - Bantu Bisnis mu punya website' />
        <meta property='og:image' content='https://nuansateknologi.com/logontch3.png' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://nuansateknologi.com/' />
        <link rel='canonical' href='https://nuansateknologi.com/' />
      </Helmet>

      <div className='home-page-landingpage'>
        <Navbar homeRef={homeRef} produkRef={produkRef} profilRef={profilRef} hargaRef={hargaRef} />
        <ListHeroSection herosSection={DataHero} />
        <DomainPricing domains={DataHargaDomain} />
        <div ref={profilRef}>
          <WhyChooseUs
            title='Tentang Kami'
            subtitle='Nuansa Teknologi adalah layanan pengembangan website dan aplikasi digital yang membantu pelaku usaha, UMKM, 
            dan lembaga dalam membangun kehadiran profesional di dunia online. Kami menyediakan solusi website yang rapi, mudah digunakan, 
            dan disesuaikan dengan kebutuhan setiap usaha.Tidak hanya fokus pada teknis, Nuansa Teknologi juga mengedepankan pendekatan edukatif, 
            mendampingi klien dari awal hingga website siap digunakan. Mulai dari domain, hosting, konten, hingga pengelolaan website, 
            semua kami siapkan agar klien dapat fokus menjalankan usahanya.'
            features={features}
          />
        </div>

        <div ref={hargaRef}>
          <PricingSection title='SPESIFIKASI LAYANAN' plans={pricingPlans} showDetails='Spesifikasi detail' />
        </div>
        <div ref={produkRef} className='cardlist'>
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
