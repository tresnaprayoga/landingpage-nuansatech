import React from 'react';
import '../style/daftarharga.css';

const PricingSection = ({ plans }) => {
  const judulPaket = 'Harga Paket Berlangganan';
  return (
    <section className='pricing-section'>
      <h2>{judulPaket}</h2>
      <div className='plans-container'>
        {plans.map((plan, index) => (
          <div key={index} className='plan-card'>
            <h3 className='plan-name'>{plan.name}</h3>
            <div className='plan-price'>{plan.price}</div>
            <div className='plan-duration'>{plan.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
