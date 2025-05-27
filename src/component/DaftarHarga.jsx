import React from 'react';

const PricingSection = ({ plans }) => {
  const judulPaket = 'Harga Paket Berlangganan';
  return (
    <section className='pricing-section'>
      <h2>Harga Bersahabat, Kualitas Dahsyat !</h2>
      <p>Harga Paket Berlangganan</p>
      <div className='plans-container'>
        {plans.map((plan, index) => (
          <div key={index} className='plan-card'>
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
    </section>
  );
};

export default PricingSection;
