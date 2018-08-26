/* eslint func-names: "off" */

import { takeEvery, all } from 'redux-saga/effects';
import {
  AUTO_LOGIN,
  LOGIN,
  LOGOUT,
  onLogout,
  onAutoLogin,
  onLogin
} from './user';
//import { onLocationChange } from './routing/sagas';

export default function* rootSaga() {
  yield all([
    takeEvery(AUTO_LOGIN, onAutoLogin),
    takeEvery(LOGIN, onLogin),
    takeEvery(LOGOUT, onLogout)
  ]);
}
