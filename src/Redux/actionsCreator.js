import axios from 'axios';
import { SHOW_COURSES, SHOW_COURSE, SHOW_SEMINARS, SHOW_SEMINAR, SHOW_TEAM } from './actions';

const API;

export const showCourses = () => dispatch => {
  axios.get(`${API}/courses`).then(response => {
    return dispatch({
      type: SHOW_COURSES,
      courses: response.data
    })
  } )
};
export const showCourse = () => dispatch => {
  axios.get(`${API}/course`).then(response => {
    return dispatch({
      type: SHOW_COURSE,
      course: response.data
    })
  } )
};
export const showSeminars = () => dispatch => {
  axios.get(`${API}/seminars`).then(response => {
    return dispatch({
      type: SHOW_SEMINARS,
      seminars: response.data
    })
  } )
};
export const showSeminar = () => dispatch => {
  axios.get(`${API}/seminar`).then(response => {
    return dispatch({
      type: SHOW_SEMINAR,
      seminar: response.data
    })
  } )
};
export const showTeam = () => dispatch => {
  axios.get(`${API}/team`).then(response => {
    return dispatch({
      type: SHOW_TEAM,
      team: response.data
    })
  } )
};
