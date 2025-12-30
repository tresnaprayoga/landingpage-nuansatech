import React from 'react';

const ItemCard = ({ image, title, harga, buttonLink }) => {
  return (
    <div className='item-card'>
      <img src={image} alt={title} className='item-image' width={600} height={600} style={{ maxWidth: '100%', height: 'auto' }} />
      <div className='item-content'>
        <h5>{title}</h5>
        {/* <p>{harga}</p> */}
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
