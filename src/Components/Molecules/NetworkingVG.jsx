import React from 'react';
import Facebook from '../Atoms/Facebook';
import Twitter from '../Atoms/Twitter';
import LinkedIn from '../Atoms/LinkedIn';
import Instagram from '../Atoms/Instagram';

const NetworkingVG = () => {
  return (
    <div className=''>
      <h2 className='t6 color-alt l-block'>Redes de VG Ingenieros</h2>

      <ul className='ed-menu  s-horizontal  '>
        <li className='without-style '>
          <Facebook size='2x' />
        </li>
        <li className='without-style '>
          <Twitter size='2x' address='https://twitter.com/VYGIngenieros' />
        </li>
        <li className='without-style '>
          <Instagram
            size='2x'
            address='https://www.instagram.com/grupovygingenieros/?hl=es-la'
          />
        </li>
        <li className='without-style '>
          <LinkedIn
            size='2x'
            address='https://www.linkedin.com/company/vg-ingenieros'
          />
        </li>
      </ul>
    </div>
  );
};

export default NetworkingVG;
