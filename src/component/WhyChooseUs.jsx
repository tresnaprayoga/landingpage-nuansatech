import React from 'react';
import '../style/whychooseus.css';

const WhyChooseUs = ({ title, subtitle, features }) => {
  return (
    <section className='why-choose-us'>
      <div className='why-header'>
        <h2 className='why-title'>{title}</h2>
        <p className='why-subtitle'>{subtitle}</p>
      </div>
      <div className='why-features'>
        {features.map((feature, index) => (
          <div key={index} className='feature-item'>
            <div className='feature-icon'>
              <h2>{feature.icon}</h2>
            </div>
            <h3 className='feature-title'>{feature.title}</h3>
            <p className='feature-desc'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
