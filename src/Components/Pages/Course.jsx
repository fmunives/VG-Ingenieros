import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import { connect } from 'react-redux';
import store from '../../Redux/store';
import { getCourse } from '../../Redux/actionsCreator';
import { Link } from 'react-router-dom';

const Course = ({ course, match }) => {
  useEffect(() => {
    store.dispatch(getCourse(match.params.id));
  }, []);
  return (
    <>
      {course && (
        <>
          <Banner
            title={course.titulo}
            image={{ src: course.url, alt: course.title }}
            poster={course.url}
            subtitle={course.subtitulo}
            content={course.resumen}
            color='third-color-alt'
            courseBanner
            boton='INSCRÍBIRSE'
            colorBoton='accent-color-alt'
          />
          <main className='ed-grid lg-grid-10'>
            <div className='l-cols-7'>
              <div className='course-feature ed-grid lg-grid-4 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom'>
                <div>
                  <h3 className='t4'>¿Qué aprenderás?</h3>
                  <ul
                    className=''
                    dangerouslySetInnerHTML={{ __html: course.que_aprenderas }}
                  ></ul>
                </div>
                <div>
                  <h3 className='t4'>Dirigido a</h3>
                  <p>{course.dirigido}</p>
                </div>
                <div>
                  <h3 className='t4'>Nivel</h3>
                  <p>{course.level}</p>
                </div>
                <div>
                  <h3 className='t4'>Duración</h3>
                  <p>{`${course.duracion} horas`}</p>
                </div>
              </div>
              <h2>Temario del curso {course.titulo} </h2>
              <div className='s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom'>
                {course.temario.map(t => (
                  <div className='course-class l-section s-mb-1' key={t.id}>
                    <h3 className='s-mb-0'>{t.title}</h3>
                    <p className='s-mb-0'>{t.subtitle}</p>
                    <ul className=''>
                      {t.content.map(c => (
                        <li>
                          <small>{c.valor}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className='l-cols-3'>
              <div className='s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom'>
                <h3 className='t4'>Detalles del cronograma del curso</h3>
                <ul className='feature-list'>
                  <li>
                    <strong>Inicio de clases: </strong> {course.inicio_clases}
                  </li>
                  <li>
                    <strong>Fin de clases: </strong> {course.fin_clases}
                  </li>
                  <li>
                    <strong>Horario: </strong> {course.horario}
                  </li>
                  <li>
                    <strong>Profesor: </strong> {course.teacher}
                  </li>
                </ul>
                <h3 className='t4'>Detalles del pago del curso</h3>
                <ul className='feature-list'>
                  <li>
                    <strong>Cuenta BCP: </strong> 193-2619069-0-41
                  </li>
                  <li>
                    <strong>Cuenta BCP CCI: </strong> 002193002619069041117
                  </li>
                  <li>
                    <strong>Titular: </strong> Velarde Guillen & Ingeniería y
                    Construcción
                  </li>
                </ul>
                <a
                  className='button full'
                  href='https://forms.gle/VBvQd7CvenDgc6HR9'
                  target='_blank'
                >
                  inscribirse
                </a>
                <p>
                  <small>
                    La reserva tiene una duración de 48h. Te esperamos en el
                    curso!.
                  </small>
                </p>
                <p className='m-center m-to-center m-75'>
                  <small>
                    <a
                      href='https://forms.gle/VBvQd7CvenDgc6HR9'
                      target='_blank'
                    >
                      ¿Ya realizar el pago?
                    </a>
                  </small>
                </p>
                <p className=''>
                  <small className=''>
                    Si tienes algunda duda puedes{' '}
                    <Link to='../contacto'>contactarnos</Link>
                  </small>
                </p>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  course: state.coursesReducer.course
});

export default connect(
  mapStateToProps,
  {}
)(Course);
