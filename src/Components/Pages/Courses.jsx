import React from 'react';
import Banner from '../Organisms/Banner';

const Courses = () => {
  return (
    <Banner
      color='first-color-alt'
      title='Cursos de Ingeniería'
      subtitle='Potencia tus conocimientos con nuestros cursos en Ingeniería Civil, Construcción y Arquitectura. Mira todos los cursos que tenemos disponibles, si tienes alguna duda ponte en contacto con nosotros.'
      image={{
        src:
          'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'cursos de Ingeniería'
      }}
    />
  );
};

export default Courses;
