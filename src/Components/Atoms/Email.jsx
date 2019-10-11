import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Email = ({ color, size }) => {
  return (
    <a href='mailto:info@vgingenieros.net' className={color}>
      <FontAwesomeIcon icon={faMailBulk} /> {''} info@vgingenieros.net
    </a>
  );
};

export default Email;
