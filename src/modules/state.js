import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createAction } from 'redux-actions';
import user from './user/state';
import configuration from './configuration/state';

export const INITIALISE = 'retrospected/initialise';
export const initialise = createAction(INITIALISE);

const rootReducer = combineReducers({
  user,
  configuration,
  routing: routerReducer
});

export default rootReducer;
