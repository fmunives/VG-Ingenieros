import React from 'react';
import Email from '../Atoms/Email';
import Celular from '../Atoms/Celular';
import Phone from '../Atoms/Phone';
import Address from '../Atoms/Address';
import City from '../Atoms/City';

const AddressGrid = () => {
  return (
    <div className='m-cols-2'>
      <div className=''>
        <h3>Ubícanos</h3>
        <p>
          <City color='t-dark-color' />
          <br />
          <Address />
        </p>
      </div>
      <div className=''>
        <h3>Teléfonos</h3>
        <p>
          <Phone />
          <br />
          <Celular color='t-dark-color' />
        </p>
      </div>
      <div className=''>
        <h3>Correo</h3>
        <p>
          <Email color='t-dark-color' />
        </p>
      </div>
    </div>
  );
};

export default AddressGrid;
