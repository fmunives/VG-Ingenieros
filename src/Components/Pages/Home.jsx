import React from 'react';
import Banner from '../Organisms/Banner';
import Card from '../Molecules/Card';
import WhyUs from '../Pages/WhyUs';

const Home = () => {
  return (
    <>
      <Banner
        color='dark-color-alt'
        title='Especializados en Ingeniería, Arquitectura y Construcción'
        subtitle='Nuestro equipo brinda servicios y ha desarrollado cursos especializados. Sabemos que estás buscando contenido de calidad. Aquí lo encontrarás'
        image={{
          src:
            'https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          alt: 'Bienvenidos a Grupo VG Ingenieros'
        }}
        boton='Ir a los cursos'
        home
        poster='https://images.pexels.com/photos/162557/architecture-construction-build-building-162557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      />
      <div className='ed-grid '>
        <p>Nuestros próximos lanzamientos</p>
        <div className='ed-grid m-grid-3 lg-grid-4'>
          <Card
            image='https://fmunives.github.io/GrupoVG/img/portfolio/cursos/BIM.jpg'
            title='BIM'
          />
          <Card
            image='https://fmunives.github.io/GrupoVG/img/portfolio/cursos/BIM.jpg'
            title='BIM'
          />
          <Card
            image='https://fmunives.github.io/GrupoVG/img/portfolio/cursos/BIM.jpg'
            title='BIM'
          />
          <Card
            image='https://fmunives.github.io/GrupoVG/img/portfolio/cursos/BIM.jpg'
            title='BIM'
          />
        </div>
      </div>
      <div className='ed-grid '>
        <p>Nuestros cursos populares</p>
        <div className='ed-grid m-grid-3 lg-grid-4'>
          <Card
            image='https://fmunives.github.io/GrupoVG/img/portfolio/cursos/BIM.jpg'
            title='BIM'
          />
          <Card
            image='https://fmunives.github.io/GrupoVG/img/portfolio/cursos/BIM.jpg'
            title='BIM'
          />
          <Card
            image='https://fmunives.github.io/GrupoVG/img/portfolio/cursos/BIM.jpg'
            title='BIM'
          />
          <Card
            image='https://fmunives.github.io/GrupoVG/img/portfolio/cursos/BIM.jpg'
            title='BIM'
          />
        </div>
      </div>
      <WhyUs />
    </>
  );
};

export default Home;
