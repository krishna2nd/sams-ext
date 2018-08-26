/* eslint func-names: "off" */

import { takeEvery, all } from 'redux-saga/effects';
import { AUTO_LOGIN, LOGIN, LOGOUT, CHANGE_LANGUAGE } from './user/state';

import {
  onLogout,
  onChangeLanguage,
  onLeaveSession,
  onAutoLogin,
  onLogin } from './user/sagas';
import { onLocationChange } from './routing/sagas';

export default function* rootSaga() {
  yield all([
    takeEvery(AUTO_LOGIN, onAutoLogin),
    takeEvery(LOGIN, onLogin),
    takeEvery(LOGOUT, onLogout),
    takeEvery(CHANGE_LANGUAGE, onChangeLanguage),
    takeEvery('@@router/LOCATION_CHANGE', onLocationChange)
  ]);
}
