import { combineReducers } from 'redux';
import classReducer from './classReducer';
import projectsReducer from './projectsReducer';

const allReducers = combineReducers({
  activeClass: classReducer,
  projects: projectsReducer,
});

export default allReducers;
