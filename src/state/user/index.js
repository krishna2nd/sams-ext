import { createAction } from 'redux-actions';

export const AUTO_LOGIN = 'sams.mx/user/login/auto';
export const LOGIN = 'sams.mx/user/login';
export const LOGIN_SUCCESS = 'sams.mx/user/login/success';
export const LOGOUT = 'sams.mx/user/logout';

export default function reducer(state = {
  name: null,
  lang: 'en'
}, action) {
  if (!action) return state;
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      name: action.payload.name
    };
  case LOGOUT:
    return {
      ...state,
      name: null
    };
  default:
    return state;
  }
}

export const autoLogin = createAction(AUTO_LOGIN);
export const login = createAction(LOGIN, user => ({ name: user }));
export const loginSuccess = createAction(LOGIN_SUCCESS, name => ({ name }));
export const logout = createAction(LOGOUT);
