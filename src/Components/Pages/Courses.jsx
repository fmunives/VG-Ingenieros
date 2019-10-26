import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import Card from '../Molecules/Card';
import { connect } from 'react-redux';
import store from '../../Redux/store';
import { getAllCourses } from '../../Redux/actionsCreator';
import withLoader from '../HOC/withLoader';
import CourseGrid from '../Organisms/CourseGrid';

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
      {courses && <CourseGrid courses={courses} />}
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
