import React from 'react';
import HeroSection from './HeroSection';

function ListHeroSection({ herosSection }) {
  return (
    <div>
      {herosSection.map((hero, index) => (
        <HeroSection key={index} {...hero} />
      ))}
    </div>
  );
}

export default ListHeroSection;
