import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { coursesReducer, seminarsReducer, teamReducer } from './reducer';

export default createStore(
  combineReducers({
    coursesReducer,
    seminarsReducer,
    teamReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
