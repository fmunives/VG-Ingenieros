import React from 'react';
import City from '../Atoms/City';
import Address from '../Atoms/Address';

const VGIngenieros = () => {
  return (
    <div className=''>
      <h2 className='t6 color-alt'>VG Ingenieros</h2>
      <ul className=''>
        <li className='without-style'>
          <City color='t-second-color' />
        </li>
        <li className='without-style'>
          <Address
            color='t-second-color'
            address='https://goo.gl/maps/WArUZRJEWTLNazJ47'
            target='_blank'
          />
        </li>
      </ul>
    </div>
  );
};

export default VGIngenieros;
