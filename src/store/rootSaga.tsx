import {all} from 'redux-saga/effects';

import cardInfoSaga from './sagas/card-info';
import userProfileSaga from './sagas/user-profile';

export function* rootSaga() {
  yield all([cardInfoSaga(), userProfileSaga()]);
}
