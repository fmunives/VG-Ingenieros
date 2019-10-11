import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Facebook = ({ color, size }) => {
  return (
    <a
      href='https://www.facebook.com/IngeninierosSAC/'
      target='_blank'
      className={color}
    >
      <FontAwesomeIcon icon={faFacebook} size={size} />
    </a>
  );
};

export default Facebook;
