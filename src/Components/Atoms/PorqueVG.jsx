import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const PorqueVG = ({ color, size }) => {
  return (
    <Link>
      <span className={color}>
        <FontAwesomeIcon icon={faQuestionCircle} size={size} /> {''}
        ¿Qué es VG Ingenieros?
      </span>
    </Link>
  );
};

export default PorqueVG;
