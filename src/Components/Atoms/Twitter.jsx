import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Twitter = ({ color, size }) => {
  return (
    <a
      href='https://twitter.com/VYGIngenieros'
      target='_blank'
      className={color}
    >
      <FontAwesomeIcon icon={faTwitter} size={size} />
    </a>
  );
};

export default Twitter;
