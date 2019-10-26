import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer
} from 'mdbreact';

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar
        color='mdb-color darken-4'
        dark
        expand='md'
        className='fixed-top'
      >
        <MDBContainer>
          <MDBNavbarBrand>
            <strong className='blue-grey-text'>
              <NavLink to='/'>
                <img
                  className='main-logov2 mr-1'
                  src='https://firebasestorage.googleapis.com/v0/b/vg-ingenieros.appspot.com/o/logo_white.svg?alt=media&token=b5c45731-9fb3-4b63-b0d9-1dad67e7d452'
                  alt=''
                />
              </NavLink>
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right className='yellow-text'>
              <MDBNavItem>
                <MDBNavLink to='/cursos'>Cursos</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/seminarios'>Seminarios</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className='mr-2'>Servicios</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href='#!'>Topografía</MDBDropdownItem>
                    <MDBDropdownItem href='#!'>Planos</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/porque'>
                  ¿Por qué estudiar con nosotros?
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/nosotros'>Nosotros</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/contacto'>Contacto</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className='md-form my-0'>
                    <input
                      className='form-control mr-sm-2'
                      type='text'
                      placeholder='buscar curso...'
                      aria-label='Search'
                    />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
