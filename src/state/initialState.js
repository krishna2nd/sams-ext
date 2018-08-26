import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createAction } from 'redux-actions';
import user from './user';
// import configuration from './configuration/state';
//import app from './app/state';

export const INITIALISE = 'sams.mx/initialise';
export const initialise = createAction(INITIALISE);

const rootReducer = combineReducers({
  user,
  //configuration,
  //app,
  routing: routerReducer
});

export default rootReducer;

// const State = {
//     AppName: 'sams.com.mx',
//     Header: {},
//     Taxonomy: {
  
//     },
//     Footer: {},
//     Products: [],
//     Tracking: {},
//     Lists: {
//       Recent: [],
//       TopSelling: [],
//       Recommended: []
//     },
//     Search: {
//       suggestions: [],
//       result: undefined,
//       query: undefined
//     },
//     MyData: {},
//     Seo: {},
//     User: {},
//     Forms: {},
//     Cart: {},
//     Layout: {}
//   };
//   export default State;
  