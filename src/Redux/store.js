import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  coursesReducer,
  seminarsReducer,
  teamReducer,
  teachersReducer
} from './reducer';

export default createStore(
  combineReducers({
    coursesReducer,
    seminarsReducer,
    teamReducer,
    teachersReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
