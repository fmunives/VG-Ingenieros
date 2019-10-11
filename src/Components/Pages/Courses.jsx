import React from 'react';
import Banner from '../Organisms/Banner';
import Card from '../Molecules/Card';

const Courses = () => {
  return (
    <>
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
      <div className='ed-grid m-grid-3 lg-grid-4'>
        <Card
          title='Construcción Civil'
          teacher='Eduardo Muñoz'
          image='https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Construcción Civil'
          teacher='Eduardo Muñoz'
          image='https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Construcción Civil'
          teacher='Eduardo Muñoz'
          image='https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Construcción Civil'
          teacher='Eduardo Muñoz'
          image='https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Construcción Civil'
          teacher='Eduardo Muñoz'
          image='https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Construcción Civil'
          teacher='Eduardo Muñoz'
          image='https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <Card
          title='Construcción Civil'
          teacher='Eduardo Muñoz'
          image='https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          image_teacher='https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
      </div>
    </>
  );
};

export default Courses;
