import React from 'react';
import Email from '../Atoms/Email';
import Celular from '../Atoms/Celular';
import Phone from '../Atoms/Phone';
import Address from '../Atoms/Address';
import City from '../Atoms/City';

const AddressGrid = () => {
  return (
    <div className='m-cols-2 m-to-left'>
      <div className=''>
        <h3 className='s-center m-left'>Ubícanos</h3>
        <p className='s-center m-left'>
          <City color='t-dark-color' />
          <br />
          <Address address='#map' />
        </p>
      </div>
      <div className=''>
        <h3 className='s-center m-left'>Teléfonos</h3>
        <p className='s-center m-left'>
          <Phone />
          <br />
          <Celular color='t-dark-color' />
        </p>
      </div>
      <div className=''>
        <h3 className='s-center m-left'>Correo</h3>
        <p className='s-center m-left'>
          <Email color='t-dark-color' large />
        </p>
      </div>
    </div>
  );
};

export default AddressGrid;
