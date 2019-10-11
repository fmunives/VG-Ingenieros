import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Celular = ({ color, size }) => {
  return (
    <a href='http://bit.ly/GrupoVyG_Informes' className={color}>
      <FontAwesomeIcon icon={faWhatsapp} /> {''}
      +51 986-079-032
    </a>
  );
};

export default Celular;
