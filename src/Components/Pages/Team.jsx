import React from 'react';
import Banner from '../Organisms/Banner';
import CardMember from '../Molecules/CardMember';

const Team = () => {
  return (
    <>
      <Banner
        color='text-color'
        title='Somos 100% transperentes'
        subtitle='Estamos convencidos que cuanto más nos conozcan formaremos un fuerte lazo de amistad y confianza. Estamos 100% dispuestos a apoyarte en tu crecimiento profesional y por ello nos mostramos ante tí.  '
        image={{
          src:
            'https://images.pexels.com/photos/1367271/pexels-photo-1367271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          alt: 'Seminario'
        }}
      />
      <div className='ed-grid m-grid-3 lg-grid-4'>
        <CardMember />
        <CardMember />
        <CardMember />
        <CardMember />
        <CardMember />
        <CardMember />
        <CardMember />
      </div>
    </>
  );
};

export default Team;
