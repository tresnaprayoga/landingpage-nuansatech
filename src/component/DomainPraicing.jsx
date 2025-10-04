import React from 'react';

const DomainPricing = ({ domains }) => {
  return (
    <section className='domain-pricing-v2'>
      <h2 className='domain-title'>Harga Domain</h2>
      <div className='domain-grid'>
        {domains.map((domain, idx) => (
          <div className='domain-card-v2' key={idx}>
            {domain.logo && <img src={domain.logo} alt={domain.name} className='domain-logo' />}
            <div className='domain-info'>
              <span className='domain-name-v2'>{domain.name}</span>
              <span className='domain-original'>{domain.originalPrice}</span>
              <span className='domain-discount'>{domain.discountedPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DomainPricing;
