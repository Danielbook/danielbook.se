import { combineReducers } from 'redux';
import classReducer from './classReducer';
import projectsReducer from './projectsReducer'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  activeClass: classReducer,
  projects: projectsReducer,
});

export default allReducers
