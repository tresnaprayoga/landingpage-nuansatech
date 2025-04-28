import React from 'react';

const HeroSection = ({ title, subtitle, buttonText, trustText }) => {
  return (
    <section className='hero-section'>
      <div className='hero-content'>
        <h1 className='hero-title'>{title}</h1>
        <p className='hero-subtitle'>{subtitle}</p>
        <button className='hero-button'>{buttonText}</button>
      </div>
      <div className='hero-image'>
        <img src='/heroimg.JPG' alt='Hero Image' />
      </div>
      <div className='hero-trust'>
        <span className='trust-icon'>✓</span>
        <h3 className='trust-text'>{trustText}</h3>
      </div>
    </section>
  );
};

export default HeroSection;
