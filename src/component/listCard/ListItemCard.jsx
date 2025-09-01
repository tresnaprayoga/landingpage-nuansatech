import React from 'react';
import ItemCard from './itemCard';

const ListItemCard = ({ items }) => {
  return (
    <div className='list-container'>
      {items.map((item, idx) => (
        <ItemCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default ListItemCard;
