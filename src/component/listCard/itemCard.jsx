// components/ItemCard.jsx
import React from 'react';
import '../../style/cardlist.css';

const ItemCard = ({ image, title, harga, buttonText }) => {
  return (
    <div className='item-card'>
      <img src={image} alt={title} className='item-image' />
      <div className='item-content'>
        <h3>{title}</h3>
        <p>{harga}</p>
        {buttonText && <button className='item-button'>{buttonText}</button>}
      </div>
    </div>
  );
};

export default ItemCard;
