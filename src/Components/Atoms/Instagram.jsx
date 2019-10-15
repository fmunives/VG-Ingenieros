import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Instagram = ({ color, size }) => {
  return (
    <a href='#' target='_blank' className={color}>
      <FontAwesomeIcon icon={faInstagram} size={size} />
    </a>
  );
};

export default Instagram;
