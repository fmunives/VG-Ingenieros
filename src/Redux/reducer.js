import {
  SHOW_COURSES,
  SHOW_COURSE,
  SHOW_SEMINARS,
  SHOW_SEMINAR,
  SHOW_TEAM
} from './actions';

export const coursesReducer = (state = {}, actions) => {
  if (actions.type === SHOW_COURSES) {
    return {
      ...state,
      courses: actions.courses
    };
  }
  if (actions.type === SHOW_COURSE) {
    return {
      ...state,
      course: actions.course
    };
  }
  return state;
};
export const seminarsReducer = (state = {}, actions) => {
  if (actions.type === SHOW_SEMINARS) {
    return {
      ...state,
      seminars: actions.seminars
    };
  }
  if (actions.type === SHOW_SEMINAR) {
    return {
      ...state,
      seminar: actions.seminar
    };
  }
  return state;
};
export const teamReducer = (state = {}, actions) => {
  if (actions.type === SHOW_TEAM) {
    return {
      ...state,
      team: actions.team
    };
  }
  return state;
};
