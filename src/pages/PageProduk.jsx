import React from 'react';
import ListItemCard from '../component/listCard/ListItemCard';

import { dataItemCard } from '../dataStatis/dataitemcard';

function ProdukWebsite() {
  const [DataItemCard, setDataItemCard] = React.useState(() => dataItemCard());
  return (
    <div>
      <div className='cardlist'>
        <h4>Dapatkan Website Pilihan Anda Disini</h4>
        <p>Temukan solusi website terbaik untuk bisnis Anda dengan berbagai pilihan yang sesuai kebutuhan.</p>
        <ListItemCard items={DataItemCard} />
      </div>
    </div>
  );
}

export default ProdukWebsite;
