import React from 'react';
import Banner from '../Organisms/Banner';
import Form from '../Organisms/Form';
import AddressGrid from '../Organisms/AddressGrid';
import Iframe from 'react-iframe';
import FormClass from '../Organisms/FormClass';

const Contact = () => {
  return (
    <>
      <Banner
        color='third-color'
        title='Estemos en contacto'
        subtitle='Ponte en contacto con nosotros por nuestros diferentes medios de comunicación. Estamos siempre dispuestos a orientarle en tus dudas sobre nuestros servicios.'
        image={{
          src:
            'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          alt: 'Contacto'
        }}
      />
      <div className='ed-grid m-grid-6'>
        {/* <Form /> */}
        <FormClass />
        <AddressGrid />
      </div>
      <div className='ed-container ' id='map'>
        <h3 className='m-to-center s-to-center'>Ubícanos en Google Maps</h3>
        <Iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62426.99014015321!2d-77.05407333584164!3d-12.065051575686095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7ad11215cdf%3A0x5220a5512eb9ab34!2sGrupo%20V%26G%20Ingenieros!5e0!3m2!1ses!2spe!4v1570922884064!5m2!1ses!2spe'
          width='1200'
          height='450'
          frameborder='0'
          style='border:0;'
          allowfullscreen=''
          className='s-border s-radius-br s-radius-bl s-pxy-2'
        />
      </div>
    </>
  );
};

export default Contact;
