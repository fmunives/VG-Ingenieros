import axios from 'axios';
import {
  SHOW_COURSES,
  SHOW_COURSE,
  SHOW_SEMINARS,
  SHOW_SEMINAR,
  SHOW_TEAM,
  SHOW_TEACHERS
} from './actions';

const API = 'https://vg-ingenieros.firebaseio.com';

export const getAllCourses = () => dispatch => {
  axios.get(`${API}/cursos.json`).then(response => {
    return dispatch({
      type: SHOW_COURSES,
      courses: response.data
    });
  });
};
export const getCourse = id => dispatch => {
  axios.get(`${API}/cursos/${id}.json`).then(response => {
    return dispatch({
      type: SHOW_COURSE,
      course: response.data
    });
  });
};
export const getAllSeminars = () => dispatch => {
  axios.get(`${API}/seminarios.json`).then(response => {
    return dispatch({
      type: SHOW_SEMINARS,
      seminars: response.data
    });
  });
};
export const getSeminar = () => dispatch => {
  axios.get(`${API}/seminario.json`).then(response => {
    return dispatch({
      type: SHOW_SEMINAR,
      seminar: response.data
    });
  });
};
export const getAllTeam = () => dispatch => {
  axios.get(`${API}/equipo.json`).then(response => {
    return dispatch({
      type: SHOW_TEAM,
      team: response.data
    });
  });
};
export const getAllTeachers = () => dispatch => {
  axios.get(`${API}/profesores.json`).then(response => {
    return dispatch({
      type: SHOW_TEACHERS,
      teachers: response.data
    });
  });
};
