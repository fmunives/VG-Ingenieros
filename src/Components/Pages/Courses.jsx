import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import Card from '../Molecules/Card';
import { connect } from 'react-redux';
import store from '../../Redux/store';
import { getAllCourses } from '../../Redux/actionsCreator';

const Courses = ({ courses }) => {
  useEffect(() => {
    store.dispatch(getAllCourses());
  }, []);
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
      {courses && (
        <div className='ed-grid m-grid-3 lg-grid-4'>
          {courses.map(c => (
            <Card
              title={c.titulo}
              teacher={c.teacher}
              image={c.url}
              image_teacher={c.teacher_url}
              price={c.precio}
            />
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  courses: state.coursesReducer.courses
});

export default connect(
  mapStateToProps,
  {}
)(Courses);
