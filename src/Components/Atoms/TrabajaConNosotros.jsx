import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const TrabajaConNosotros = ({ color, size }) => {
  return (
    <Link>
      <span className={color}>
        <FontAwesomeIcon icon={faNetworkWired} size={size} /> Trabaja con
        nosotros
      </span>
    </Link>
  );
};

export default TrabajaConNosotros;
