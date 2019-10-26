import React from 'react';
import Card from '../Molecules/Card';
import withLoader from '../HOC/withLoader';

const CourseGrid = ({ courses }) => {
  return (
    <div className='ed-grid m-grid-3 lg-grid-4'>
      {courses.map(c => (
        <Card
          id={c.id}
          title={c.titulo}
          teacher={c.teacher}
          image={c.url}
          image_teacher={c.teacher_url}
          price={c.precio}
        />
      ))}
    </div>
  );
};

export default withLoader('courses')(CourseGrid);
