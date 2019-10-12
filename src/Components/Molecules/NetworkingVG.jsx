import React from 'react';
import Facebook from '../Atoms/Facebook';
import Twitter from '../Atoms/Twitter';
import YouTube from '../Atoms/YouTube';
import LinkedIn from '../Atoms/LinkedIn';

const NetworkingVG = () => {
  return (
    <div className=''>
      <h2 className='t6 color-alt l-block'>Redes de VG Ingenieros</h2>

      <ul className='ed-menu  s-horizontal  '>
        <li>
          <Facebook size='2x' />
        </li>
        <li>
          <Twitter size='2x' address='https://twitter.com/VYGIngenieros' />
        </li>
        <li>
          <YouTube size='2x' />
        </li>
        <li>
          <LinkedIn size='2x' />
        </li>
      </ul>
    </div>
  );
};

export default NetworkingVG;
