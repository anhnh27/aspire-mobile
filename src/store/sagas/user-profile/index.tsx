import {call, put, takeLatest} from 'redux-saga/effects';
import {showModal} from '../../reducers/modal/actions';

import {
  IUserProfile,
  FETCH_USER_PROFILE_REQUEST,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
} from '../../reducers/user-profile/actions';

const fakeAPICall = () => {
  return new Promise(resolve => setTimeout(resolve, 500));
};

const getUserProfile = async () => {
  await fakeAPICall();
  return {
    id: '1',
    displayName: 'Alex Nguyen',
  };
};

function* fetchUserProfileSaga() {
  try {
    const response: IUserProfile = yield call(getUserProfile);
    yield put(
      fetchUserProfileSuccess({
        data: response,
      }),
    );
  } catch (e) {
    yield put(showModal({visible: true, type: 'error', message: e.messag}));
    yield put(
      fetchUserProfileFailure({
        error: e.message,
      }),
    );
  }
}

function* userProfileSaga() {
  yield takeLatest(FETCH_USER_PROFILE_REQUEST, fetchUserProfileSaga);
}

export default userProfileSaga;
