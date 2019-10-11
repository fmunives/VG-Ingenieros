import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const City = ({ color, size }) => {
  return (
    <span className={color}>
      <FontAwesomeIcon icon={faUniversity} /> La Molina.Lima - Perú
    </span>
  );
};

export default City;
