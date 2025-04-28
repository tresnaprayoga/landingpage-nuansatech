import React from 'react';

const DomainPricing = ({ domains }) => {
  return (
    <div className='domain-pricing'>
      <h2>Harga Domain</h2>
      <div className='domain-container'>
        {domains.map((domain, index) => (
          <div key={index} className='domain-card'>
            <h3 className='domain-name'>{domain.name}</h3>
            <div className='domain-original-price'>{domain.originalPrice}</div>
            <div className='domain-discounted-price'>{domain.discountedPrice}</div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainPricing;
