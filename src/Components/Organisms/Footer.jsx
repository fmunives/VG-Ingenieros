import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPhone,
  faMailBulk,
  faChalkboardTeacher,
  faNetworkWired,
  faUniversity,
  faUniversalAccess
} from '@fortawesome/free-solid-svg-icons';
import {
  faObjectGroup,
  faQuestionCircle
} from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='ed-grid m-grid-2 lg-grid-4 row-gap'>
        <div className=''>
          <h2 className='t6 color-alt'>VG Ingenieros</h2>

          <ul className=''>
            <li>
              <FontAwesomeIcon icon={faUniversity} className='t-second-color' />{' '}
              <span className='t-second-color'>La Molina.Lima - Perú</span>
            </li>
            <li>
              <a href='https://goo.gl/maps/WArUZRJEWTLNazJ47' target='__blank'>
                <FontAwesomeIcon icon={faHome} /> {''}
                <span className='t-color-white'>
                  Av. Los constructores 122, piso 5
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className=''>
          <h2 className='t6 color-alt'>Conéctate con VB Ingenieros</h2>

          <ul>
            <li>
              <a href='mailto:info@vgingeniero.net'>
                <FontAwesomeIcon icon={faMailBulk} /> info@vgingeniero.net
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className='t-second-color' />{' '}
              <span className='t-second-color'>Telf: 01-435673</span>
            </li>
            <li>
              <a href='http://bit.ly/GrupoVyG_Informes' target='_blank'>
                <FontAwesomeIcon icon={faWhatsapp} size='lg' /> +51 9794394349
              </a>
            </li>
          </ul>
        </div>
        <div className=''>
          <h2 className='t6 color-alt'>Acerca de VG Ingenieros</h2>
          <ul>
            <li>
              <Link>
                <span>
                  <FontAwesomeIcon icon={faQuestionCircle} size='1x' /> {''}
                  ¿Qué es VG Ingenieros?
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span>
                  <FontAwesomeIcon icon={faObjectGroup} /> Nuestro equipo
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span>
                  <FontAwesomeIcon icon={faChalkboardTeacher} /> Nuestros
                  profesores
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span>
                  <FontAwesomeIcon icon={faUniversalAccess} /> Nuestra misión y
                  visión
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span>
                  <FontAwesomeIcon icon={faNetworkWired} /> Trabaja con nosotros
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <h2 className='t6 color-alt l-block'>Redes de VG Ingenieros</h2>

          <ul className='ed-menu  s-horizontal  '>
            <li>
              <a
                href='https://www.facebook.com/IngeninierosSAC/'
                target='_blank'
                className='t-color-white'
              >
                <FontAwesomeIcon icon={faFacebook} size='2x' />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/VYGIngenieros' target='_blank'>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                <FontAwesomeIcon icon={faYoutube} size='2x' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
