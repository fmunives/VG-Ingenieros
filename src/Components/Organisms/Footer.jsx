import React from 'react';
import VGIngenieros from '../Molecules/VGIngenieros';
import ConnectWithUs from '../Molecules/ConectWithUs';
import AboutVG from '../Molecules/AboutVG';
import NetworkingVG from '../Molecules/NetworkingVG';

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='ed-grid m-grid-2 lg-grid-4 row-gap'>
        <VGIngenieros />
        <ConnectWithUs />
        <AboutVG />
        <NetworkingVG />
      </div>
    </footer>
  );
};

export default Footer;
