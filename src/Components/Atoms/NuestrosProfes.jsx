import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const NuestrosProfes = ({ color, size }) => {
  return (
    <Link>
      <span className={color}>
        <FontAwesomeIcon icon={faChalkboardTeacher} size={size} /> Nuestros
        profesores
      </span>
    </Link>
  );
};

export default NuestrosProfes;
