import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Phone = ({ color, size }) => {
  return (
    <span className={color}>
      <FontAwesomeIcon icon={faPhone} /> {''}
      01-16913936
    </span>
  );
};

export default Phone;
