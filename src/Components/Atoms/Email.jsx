import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Email = ({ color, size, address, large }) => {
  return (
    <>
      {large ? (
        <a href='mailto:info@vgingenieros.net' className={color}>
          <FontAwesomeIcon icon={faMailBulk} size={size} /> {''}{' '}
          info@vgingenieros.net
        </a>
      ) : (
        <a href={`mailto:${address}`} className={color}>
          <FontAwesomeIcon icon={faMailBulk} size={size} /> {''}
        </a>
      )}
    </>
  );
};

export default Email;
