import React from 'react';
import { FcAssistant, FcMultipleDevices } from 'react-icons/fc';

const PricingSection = ({ plans }) => {
  const judulPaket = 'Harga Paket Berlangganan';
  return (
    <section className='pricing-section' data-aos-duration='1000' data-aos-delay='100'>
      <h1 data-aos='slide-right'> Paket Berlangganan</h1>
      <h2 data-aos='slide-right'>Harga Bersahabat, Kualitas Dahsyat !</h2>

      <div className='plans-container'>
        {plans.map((plan, index) => (
          <div key={index} className='plan-card' data-aos='slide-left'>
            <h3 className='plan-name'>{plan.name}</h3>
            <div className='plan-price'>
              <p>{plan.price}</p>
            </div>
            <div className='plan-duration'>
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
      <div className='icons' data-aos='fade-up'>
        <p>Website Yang Responsif di Semua Prangkat</p>
        <div className='img-icon'>
          <img src='./7.png' alt='gambar prangkat ' />
        </div>

        {/* <h4>
          <FcMultipleDevices />
        </h4> */}
      </div>
    </section>
  );
};

export default PricingSection;
