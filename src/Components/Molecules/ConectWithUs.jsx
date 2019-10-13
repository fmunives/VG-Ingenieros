import React from 'react';
import Email from '../Atoms/Email';
import Phone from '../Atoms/Phone';
import Celular from '../Atoms/Celular';

const ConectWithUs = () => {
  return (
    <div className=''>
      <h2 className='t6 color-alt'>Conéctate con VB Ingenieros</h2>
      <ul>
        <li className='without-style '>
          <Email large />
        </li>
        <li className='without-style '>
          <Phone color='t-second-color' />
        </li>
        <li className='without-style '>
          <Celular />
        </li>
      </ul>
    </div>
  );
};

export default ConectWithUs;
