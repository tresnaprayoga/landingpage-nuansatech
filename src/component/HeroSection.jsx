import React from 'react';

const HeroSection = ({ title, subtitle, buttonText, trustText, ImgHero }) => {
  return (
    <section className='hero-section' data-aos-duration='1000' data-aos-delay='100'>
      <div className='hero-content' data-aos='slide-right'>
        <h1 className='hero-title'>{title}</h1>
        <p className='hero-subtitle'>{subtitle}</p>
        <button className='hero-button' data-aos='fade-up'>
          {buttonText}
        </button>
      </div>
      <div className='hero-image' data-aos='slide-left'>
        <img src={ImgHero} alt='Hero Image' />
      </div>
      <div className='hero-trust' data-aos='fade-up'>
        <span className='trust-icon'>✓</span>
        <h3 className='trust-text'>{trustText}</h3>
      </div>
    </section>
  );
};

export default HeroSection;
