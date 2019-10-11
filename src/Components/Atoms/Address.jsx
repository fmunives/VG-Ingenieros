import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Address = ({ color, size }) => {
  return (
    <a href='https://goo.gl/maps/WArUZRJEWTLNazJ47' className='t-dark-color'>
      <span className={color}>
        {' '}
        <FontAwesomeIcon icon={faHome} /> {''}
        Av. Los constructores 122, piso 5
      </span>
    </a>
  );
};

export default Address;
