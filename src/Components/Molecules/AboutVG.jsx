import React from 'react';
import PorqueVG from '../Atoms/PorqueVG';
import NuestroTeam from '../Atoms/NuestroTeam';
import NuestrosProfes from '../Atoms/NuestrosProfes';
import NuestraVM from '../Atoms/NuestraVM';
import TrabajaConNosotros from '../Atoms/TrabajaConNosotros';

const AboutVG = () => {
  return (
    <div className=''>
      <h2 className='t6 color-alt'>Acerca de VG Ingenieros</h2>
      <ul>
        <li className='without-style '>
          <PorqueVG />
        </li>
        <li className='without-style '>
          <NuestroTeam />
        </li>
        <li className='without-style '>
          <NuestrosProfes />
        </li>
        <li className='without-style '>
          <NuestraVM />
        </li>
        <li className='without-style'>
          <TrabajaConNosotros />
        </li>
      </ul>
    </div>
  );
};

export default AboutVG;
