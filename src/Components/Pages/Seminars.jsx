import React from 'react';
import Banner from '../Organisms/Banner';
import Card from '../Molecules/Card';

const Seminars = () => {
  return (
    <>
      <Banner
        color='second-color'
        title='Participa de nuestros seminarios '
        subtitle='Los seminarios son una gran oportunidad para el estudiante de conocer el próximo curso que se aperturará donde podrá debatir, participar y hacer networking con los docentes y otros estudiantes. '
        image={{
          src:
            'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          alt: 'Seminario'
        }}
      />
      <div className='ed-grid m-grid-3 lg-grid-4'>
        <Card
          title='Diseño de planos'
          teacher='Margarita Cabrera'
          image='https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Diseño de planos'
          teacher='Margarita Cabrera'
          image='https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Diseño de planos'
          teacher='Margarita Cabrera'
          image='https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Diseño de planos'
          teacher='Margarita Cabrera'
          image='https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Diseño de planos'
          teacher='Margarita Cabrera'
          image='https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Diseño de planos'
          teacher='Margarita Cabrera'
          image='https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Diseño de planos'
          teacher='Margarita Cabrera'
          image='https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
      </div>
    </>
  );
};

export default Seminars;
