import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, image_teacher, teacher, price, title, id }) => {
  return (
    <article className='card s-radius '>
      <div className='img-container s-ratio-16-9 s-radius-tr s-radius-tl'>
        <Link to={`/cursos/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className='card__data s-pxy-2 img-percentage s-radius-br s-radius-bl'>
        <h3 className='t5 s-mb-2 s-center'>
          <Link className='color dark-color' to={`/cursos/${id}`}>
            {title}
          </Link>
        </h3>
        <div className='s-mb-1'></div>
        <div className='s-mb-2 s-main-center'>
          <div className='card__teacher s-cross-center'>
            <div className='card__avatar s-mr-1'>
              <div className='circle img-container'>
                <img src={image_teacher} alt={title} />
              </div>
            </div>
            <span className='small'>{teacher}</span>
          </div>
        </div>
        <div className='s-main-center'>
          <Link
            className='button--ghost-alert button--tiny'
            to={`/cursos/${id}`}
          >
            {`S/. ${price} `}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
