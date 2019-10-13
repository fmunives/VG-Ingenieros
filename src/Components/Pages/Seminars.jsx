import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import { connect } from 'react-redux';
import store from '../../Redux/store';
import { getAllSeminars } from '../../Redux/actionsCreator';

const Seminars = ({ seminars }) => {
  useEffect(() => {
    store.dispatch(getAllSeminars());
  }, []);
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
      <div className='ed-grid'>
        <h3>Puedes inscribirte en cualquiera de los seminarios</h3>
      </div>
      {seminars && (
        <div className='s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom'>
          {seminars.map(s => (
            <div className='course-class l-section' key={s.cod}>
              <div className='ed-grid m-grid-3 '>
                <img src={s.url} alt={s.titulo} className='s-mb-2' />
                <div className='m-cols-2'>
                  <h4 className='s-mb-0'>{s.titulo}</h4>
                  <p className='m-mb-1'>
                    <small>
                      {s.fecha}, de {s.hora}
                    </small>
                  </p>
                  <p>{s.resumen}</p>
                  <div className='ed-grid m-grid-6'>
                    <div className='m-cols-2 s-mb-1'>
                      <a
                        href={s.inscripcion}
                        target='_blank'
                        className='button ghost third-color full'
                      >
                        Inscribirse
                      </a>
                    </div>
                    <div className='m-cols-2'></div>
                    <div className='m-cols-2 s-center'>
                      <div className='s-mb-2 s-main-center'>
                        <div className='card__teacher s-cross-center'>
                          <div className='card__avatar s-mr-1'>
                            <div className='circle img-container'>
                              <img src={s.teacher_url} alt='' />
                            </div>
                          </div>
                          <span className='small'>Expositor: {s.teacher}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  seminars: state.seminarsReducer.seminars
});

export default connect(
  mapStateToProps,
  {}
)(Seminars);
