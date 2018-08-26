import ga from 'react-ga';
import { LOGIN, LOGOUT } from '../user';

export const googleAnalyticsMiddleware = (/* store */) => next => action => {
  const result = next(action);

  // Each of these actions will be recorded with Google Analytics
  const actions =  [LOGIN, LOGOUT];

  if (actions.indexOf(action.type) > -1) {
    ga.event({ category: 'Action', action: action.type.replace('sams.mx/', '') });
  }

  if (action.type === '@@router/LOCATION_CHANGE') {
    ga.pageview(action.payload.pathname);
  }

  return result;
};

export default googleAnalyticsMiddleware;
