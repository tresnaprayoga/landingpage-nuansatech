// components/ItemCard.jsx
import React from 'react';

const ItemCard = ({ image, title, harga, buttonLink }) => {
  return (
    <div className='item-card'>
      <img src={image} alt={title} className='item-image' />
      <div className='item-content'>
        <h3>{title}</h3>
        <p>{harga}</p>
        {buttonLink && (
          <a href={buttonLink} className='item-button' target='_blank' rel='noopener noreferrer'>
            Lihat
          </a>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
