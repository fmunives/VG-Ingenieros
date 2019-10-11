import React from 'react';
import City from '../Atoms/City';
import Address from '../Atoms/Address';

const VGIngenieros = () => {
  return (
    <div className=''>
      <h2 className='t6 color-alt'>VG Ingenieros</h2>
      <ul className=''>
        <li>
          <City color='t-second-color' />
        </li>
        <li>
          <Address color='t-second-color' />
        </li>
      </ul>
    </div>
  );
};

export default VGIngenieros;
