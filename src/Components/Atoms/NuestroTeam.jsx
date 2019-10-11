import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup } from '@fortawesome/free-regular-svg-icons';

const NuestroTeam = ({ color, size }) => {
  return (
    <Link>
      <span className={color}>
        <FontAwesomeIcon icon={faObjectGroup} size={size} /> Nuestro equipo
      </span>
    </Link>
  );
};

export default NuestroTeam;
