import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkedIn = ({ color, size }) => {
  return (
    <a href='#' target='_blank' className={color}>
      <FontAwesomeIcon icon={faLinkedin} size={size} />
    </a>
  );
};

export default LinkedIn;
