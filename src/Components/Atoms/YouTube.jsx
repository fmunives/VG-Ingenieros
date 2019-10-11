import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const YouTube = ({ color, size }) => {
  return (
    <a href='#' target='_blank' className={color}>
      <FontAwesomeIcon icon={faYoutube} size={size} />
    </a>
  );
};

export default YouTube;
