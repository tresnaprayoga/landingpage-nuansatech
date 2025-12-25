import React from 'react';
import { FcAssistant, FcMultipleDevices } from 'react-icons/fc';

const PricingSection = ({ plans }) => {
  const judulPaket = 'Harga Paket Berlangganan';
  return (
    <section className='pricing-section' data-aos-duration='1000' data-aos-delay='100'>
      <h3 data-aos='slide-right'> Paket Berlangganan</h3>
      <h4 data-aos='slide-right'>Harga Bersahabat, Kualitas Dahsyat !</h4>

      <div className='plans-container'>
        {plans.map((plan, index) => (
          <div key={index} className='plan-card' data-aos='slide-left'>
            <h3 className='plan-name'>{plan.name}</h3>
            <div className='plan-price'>
              <p>{plan.price}</p>
            </div>
            <div className='plan-duration' style={{ whiteSpace: 'pre-line' }}>
              <p>{plan.duration}</p>
            </div>
            <button className='button-harga'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfWWiP6eDMyYyfsdIzcnPES8p09Nv7Um4IItq_NZaXyMFJQKA/viewform?usp=header' target='blank'>
                Pilih
              </a>
            </button>
          </div>
        ))}
      </div>

      <div className='custom-plan' data-aos='fade-up'>
        <h4 data-aos='fade-up'>Butuh Website dengan Fitur Custom ?</h4>
        <p data-aos='fade-up'>Hubungi kami untuk konsultasi kebutuhan website anda</p>
        <div className='contact-button' data-aos='fade-up'>
          <button className='button-harga1'>
            <a href='https://wa.me/6285811714593' target='blank'>
              Konsultasi Sekarang
            </a>
          </button>
        </div>
      </div>
      <div className='icons' data-aos='fade-up'>
        <p>Website Yang Responsif di Semua Prangkat</p>
        <div className='img-icon'>
          <img src='./7.png' alt='gambar prangkat ' width={800} height={800} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        {/* <h4>
          <FcMultipleDevices />
        </h4> */}
      </div>
    </section>
  );
};

export default PricingSection;
