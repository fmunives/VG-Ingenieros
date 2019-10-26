import React from 'react';
import '../Styles/styles.scss';
import Header from './Organisms/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './Pages/Courses';
import Seminars from './Pages/Seminars';
import WhyUs from './Pages/WhyUs';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Footer from './Organisms/Footer';
import Course from './Pages/Course';
import NavbarPage from './Organisms/Navbar';
import ImageCarousel from './Atoms/ImageCarousel';
import MultiCarouselPage from './Atoms/ImageCarousel';

const App = () => (
  <Provider store={store}>
    <Router>
      <NavbarPage />
      {/*  <Header /> */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cursos/:id' component={Course} />
        <Route path='/cursos' component={Courses} />
        <Route path='/seminarios' component={Seminars} />
        <Route path='/porque' component={WhyUs} />
        <Route path='/nosotros' component={Team} />
        <Route path='/contacto' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  </Provider>
);

export default App;
