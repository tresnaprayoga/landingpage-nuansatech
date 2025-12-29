import React from 'react';

const HeroSection = ({ title, subtitle, buttonText, trustText, ImgHero }) => {
  return (
    <section className='hero-section' data-aos-duration='1000' data-aos-delay='100'>
      <div className='hero-content' data-aos='slide-right'>
        <h1 className='hero-title'>{title}</h1>
        <p className='hero-subtitle'>{subtitle}</p>
        <button className='hero-button' data-aos='fade-up'>
          <a href='https://wa.me/6285811714593' target='_blank' rel='noopener noreferrer'>
            {buttonText}
          </a>
        </button>
      </div>
      <div className='hero-image' data-aos='slide-right'>
        <img src={ImgHero} alt='Hero Image' width={1600} height={800} style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div className='hero-trust' data-aos='fade-up'>
        <span className='trust-icon'>✓</span>
        <p className='trust-text'>{trustText}</p>
      </div>
    </section>
  );
};

export default HeroSection;
