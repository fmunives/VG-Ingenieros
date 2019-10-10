import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ title, image, subtitle, boton, color, home, poster }) => {
  return (
    <div
      className={`main-banner l-block img-container ${color}`}
      id='main-banner'
    >
      <div className='ed-grid'>
        <div className=''>
          <img className='main-banner__img' src={image.src} alt={image.alt} />
          {home ? (
            <div className='ed-grid m-grid-2'>
              <div className='main-banner__data s-center'>
                <h1 className='main-banner__title'>{title}</h1>
                <p className=''>{subtitle}</p>
                <Link to='/cursos' className='button second-color'>
                  {boton}
                </Link>
              </div>
              <div className='img-container s-ratio-16-9 s-radius-tr s-radius-tl s-radius-bl s-radius-br'>
                <img src={poster} alt='Grupo VG Ingenieros' />
              </div>
            </div>
          ) : (
            <div className='main-banner__data s-center'>
              <p className='main-banner__title t2'>{title}</p>
              <p className='s-mb-0'>{subtitle}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
