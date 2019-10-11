import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';

const menu = createRef();

const toggleMenu = () => menu.current.classList.toggle('show');

const Header = () => (
  <header className='main-header'>
    <div className='ed-grid s-grid-5 lg-grid-4'>
      <div className='s-cols-4 lg-cols-1 s-cross-center'>
        <NavLink to='/'>
          <img
            className='main-logo'
            src='https://firebasestorage.googleapis.com/v0/b/vg-ingenieros.appspot.com/o/logo_oficial.svg?alt=media&token=03d98843-5f6b-4735-83f9-aa20f51e2ba4'
            alt='VG Ingenieros'
          />
        </NavLink>
      </div>
      <div className='s-cols-1 lg-cols-3 s-cross-center s-main-end'>
        <nav className='main-menu' ref={menu}>
          <ul>
            <li>
              <NavLink to='/cursos'>Cursos</NavLink>
            </li>
            <li>
              <NavLink to='/seminarios'>Seminarios</NavLink>
            </li>
            <li>
              <NavLink to='/porque'>¿Por qué estudiar con nosotros?</NavLink>
            </li>
            <li>
              <NavLink to='/nosotros'>Nuestro team</NavLink>
            </li>
            <li>
              <NavLink to='/contacto'>Contacto</NavLink>
            </li>
          </ul>
        </nav>
        <div
          className='main-menu-toggle to-l'
          onClick={() => {
            toggleMenu();
          }}
        ></div>
      </div>
    </div>
  </header>
);

export default Header;
