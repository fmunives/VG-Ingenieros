import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
const NuestraVM = ({ color, size }) => {
  return (
    <Link>
      <span className={color}>
        <FontAwesomeIcon icon={faUniversalAccess} size={size} /> Nuestra misión
        y visión
      </span>
    </Link>
  );
};

export default NuestraVM;
