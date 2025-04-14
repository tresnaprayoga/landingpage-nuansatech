import React from 'react';
import Navbar from './component/navbar';
import HeroSection from './component/HeroSection';
import WhyChooseUs from './component/WhyChooseUs';
import { FaHandHoldingHand, FaSistrix, FaGears } from 'react-icons/fa6';

import './style/app.css';

function App() {
  const features = [
    { title: 'HARGA BERSAHABAT', description: 'Biaya terjangkau untuk semua skala bisnis', icon: <FaHandHoldingHand /> },
    { title: 'MENDUKUNG SEO', description: 'Optimasi website untuk ranking lebih baik di mesin pencari', icon: <FaSistrix /> },
    { title: 'BISA CUSTOM', description: 'Desain dan fitur sesuai kebutuhan Anda', icon: <FaGears /> },
  ];
  return (
    <>
      <header>
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

        <WhyChooseUs title='Kenapa Pilih Kami' subtitle='Harga Bersahabat Kualitas Dahsyat' features={features} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
