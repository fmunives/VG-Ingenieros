import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsApp = ({ size, color }) => {
  return (
    <a href='http://bit.ly/GrupoVyG_Informes' className={color}>
      <FontAwesomeIcon icon={faWhatsapp} size={size} />
    </a>
  );
};

export default WhatsApp;
