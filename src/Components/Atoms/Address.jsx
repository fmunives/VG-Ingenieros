import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Address = ({ color, size, address, target }) => {
  return (
    <a href={address} className='t-dark-color' target={target}>
      <span className={color}>
        {' '}
        <FontAwesomeIcon icon={faHome} /> {''}
        Av. Los constructores 122, piso 5
      </span>
    </a>
  );
};

export default Address;
