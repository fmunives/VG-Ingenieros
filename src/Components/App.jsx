import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import '../Styles/styles.scss';
import Header from './Organisms/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './Pages/Courses';
import Seminars from './Pages/Seminars';
import WhyUs from './Pages/WhyUs';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cursos' component={Courses} />
      <Route path='/seminarios' component={Seminars} />
      <Route path='/porque' component={WhyUs} />
      <Route path='/nosotros' component={Team} />
      <Route path='/contacto' component={Contact} />
    </Switch>
  </Router>
);

export default App;
