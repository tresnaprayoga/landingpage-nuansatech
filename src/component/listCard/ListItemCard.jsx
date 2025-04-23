// components/ListItemCard.jsx
import React from 'react';
import ItemCard from './itemCard';
import '../../style/cardlist.css';

const ListItemCard = () => {
  const items = [
    {
      title: 'Template website Yayasan/NGO',
      harga: 'Rp. 500.000',
      image: 'card6.jpg',
      buttonText: 'Shop now',
    },
    {
      title: 'Landing Page Bisnis',
      harga: 'Rp. 500.000',
      image: '/card.jpg',
      buttonText: 'Shop now',
    },
    {
      title: 'Website Restoran',
      harga: 'Rp. 500.000',
      image: 'card2.jpg',
      buttonText: 'Shop now',
    },
    {
      title: 'Hotel',
      harga: 'Rp. 500.000',
      image: 'card3.jpg',
      buttonText: 'Shop now',
    },
    {
      title: 'Kopi Shop',
      harga: 'Rp. 500.000',
      image: 'card4.jpg',
      buttonText: 'Shop now',
    },
    {
      title: 'Warm and stylish scandinavian home',
      harga: 'Rp. 500.000',
      image: 'card5.jpg',
      buttonText: 'Shop now',
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
