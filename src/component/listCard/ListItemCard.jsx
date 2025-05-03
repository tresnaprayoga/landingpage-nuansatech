import React from 'react';
import ItemCard from './itemCard';

const ListItemCard = () => {
  const items = [
    {
      title: 'Template 02',
      harga: 'Rp. 500.000',
      image: 'card.jpg',
      buttonLink: 'https://nuanansatech.netlify.app/',
    },
    {
      title: 'Template 03',
      harga: 'Rp. 500.000',
      image: 'card2.jpg',
      buttonLink: 'https://usaha-makanan.netlify.app/',
    },

    {
      title: 'Template 05',
      harga: 'Rp. 500.000',
      image: 'card7.JPG',
      buttonLink: 'https://landingpage-pendididkan.netlify.app/',
    },
    {
      title: 'Template 06',
      harga: 'Rp. 500.000',
      image: 'card9.jpg',
      buttonLink: 'https://eventsports.netlify.app/',
    },
  ];

  return (
    <div className='list-container'>
      {items.map((item, idx) => (
        <ItemCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default ListItemCard;
