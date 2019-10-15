import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import Card from '../Molecules/Card';
import { connect } from 'react-redux';
import store from '../../Redux/store';
import { getFourCourses } from '../../Redux/actionsCreator';
import { Link } from 'react-router-dom';
import Benefits from '../Molecules/Benefits';
import Certificate from '../Molecules/Certificate';

const Home = ({ coursesFour }) => {
  useEffect(() => {
    store.dispatch(getFourCourses());
  }, []);
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
      {coursesFour && (
        <div className='ed-grid'>
          <h4 className='center m-mb-3'>NUESTROS CURSOS POPULARES</h4>
          <div className='ed-grid m-grid-3 lg-grid-4'>
            {coursesFour.map(c => (
              <Card
                id={c.id}
                image={c.url}
                title={c.titulo}
                price={c.precio}
                teacher={c.teacher}
                image_teacher={c.teacher_url}
              />
            ))}
          </div>
          <div className='ed grid center'>
            <h3>
              <Link to='../cursos' className='button ghost third-color'>
                ver todos los cursos
              </Link>
            </h3>
          </div>
        </div>
      )}
      <Banner
        color='dark-color-alt'
        title='Confía en nuestra plana docente y staff preparado'
        subtitle='Somos una empresa 100% peruana orientado a brindar cursos de calidad, con buena plana docente, agradable ambiente para estudiar y sobre todo brindar cursos a un precio asequible. '
        image={{
          src:
            'https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          alt: 'VG Ingenieros'
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
    </>
  );
};

const mapStateToPros = state => ({
  coursesFour: state.coursesReducer.coursesFour
});

export default connect(
  mapStateToPros,
  {}
)(Home);
