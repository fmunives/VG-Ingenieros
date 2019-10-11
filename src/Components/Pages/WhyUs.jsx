import React from 'react';
import Banner from '../Organisms/Banner';
import Benefits from '../Molecules/Benefits';
import Certificate from '../Molecules/Certificate';
import CardMember from '../Molecules/CardMember';

const WhyUs = () => {
  return (
    <>
      <Banner
        color='dark-color-alt'
        title='Confía en nuestra plana docente y staff preparado'
        subtitle='Somos una empresa 100% peruana orientado a brindar cursos de calidad, con buena plana docente, agradable ambiente para estudiar y sobre todo brindar cursos a un precio asequible. '
        image={{
          src:
            'https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          alt: 'Seminario'
        }}
      />
      <div className='ed-grid m-grid-2 s-mb-4'>
        <div>
          <h3 className='s-center'>Beneficios de estudiar con nosotros</h3>
          <Benefits />
        </div>
        <div>
          <h3 className='s-center'>Certificado a nombre de VG Ingenieros</h3>
          <Certificate />
        </div>
      </div>
      <div className='ed-grid'>
        <h3 className='s-center'>Excelente plana docente </h3>
        <div className='ed-grid m-grid-3 lg-grid-4'>
          <CardMember />
          <CardMember />
          <CardMember />
          <CardMember />
          <CardMember />
        </div>
      </div>
    </>
  );
};

export default WhyUs;
