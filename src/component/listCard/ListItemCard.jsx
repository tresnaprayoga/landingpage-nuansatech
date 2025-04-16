// components/ListItemCard.jsx
import React from 'react';
import ItemCard from './itemCard';
import '../../style/cardlist.css';

const ListItemCard = () => {
  const items = [
    {
      title: 'Template website Yayasan/NGO',
      subtitle: 'organisasi',
      image: 'card6.jpg',
      buttonText: 'Shop now',
    },
    {
      title: 'Lnading Page Bisnis',
      subtitle: 'Discover the benefits of natural ingredients',
      image: '/card.jpg',
      buttonText: 'Shop now',
    },
    {
      title: 'Website Restoran',
      subtitle: "Got some ideas? We're ready to help.",
      image: 'card2.jpg',
      buttonText: 'Shop now',
    },
    {
      title: 'Hotel',
      subtitle: "Which of my photographs is my favorite? The one I'm going to take tomorrow.",
      image: 'card3.jpg',
      buttonText: 'Shop now',
    },
    {
      title: 'Kopi Shop',
      subtitle: "Photographer's portfolio",
      image: 'card4.jpg',
      buttonText: 'Shop now',
    },
    {
      title: 'Warm and stylish scandinavian home',
      subtitle: 'About studio',
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
