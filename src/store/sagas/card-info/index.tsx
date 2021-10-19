import { call, put, takeLatest } from "redux-saga/effects";

import {
  ICardInfo,
  FETCH_CARD_INFO_REQUEST,
  SET_WEEKLY_LIMIT_REQUEST,
  fetchCardInfoSuccess,
  fetchCardInfoFailure,
  SetWeeklyLimitRequest,
  setWeeklyLimitSuccess,
  setWeeklyLimitFailure,
} from "../../reducers/card-info/actions";
import { showModal } from "../../reducers/modal/actions";

const fakeAPICall = () => {
  return new Promise((resolve) => setTimeout(resolve, 1500));
};

const getCardInfo = async () => {
  await fakeAPICall();
  return {
    id: "1",
    validThru: "12/23",
    cardNo: "111 222 333 2020",
    last4Digits: "2020",
    cvv: "***",
    balance: 3000,
    currency: "SGD",
    type: "Visa",
    isSpendingLimitEnabled: false,
    weeklySpendingLimit: 1000,
    currentSpending: 500,
  };
};

const setWeeklyLimit = async (limit: number) => {
  await fakeAPICall();
  return {
    id: "1",
    validThru: "12/23",
    cardNo: "111 222 333 2020",
    last4Digits: "2020",
    balance: 3000,
    isSpendingLimitEnabled: false,
    weeklySpendingLimit: limit,
    currentSpending: 250,
  };
};

// ======== WATCHER ========
function* fetchCardInfoSaga() {
  try {
    const response: ICardInfo = yield call(getCardInfo);
    yield put(
      fetchCardInfoSuccess({
        data: response,
      })
    );
  } catch (e) {
    yield put(showModal({ visible: true, type: "error", message: e.messag }));
    yield put(
      fetchCardInfoFailure({
        error: e.message,
      })
    );
  }
}

function* setWeeklyLimitSaga(action: SetWeeklyLimitRequest) {
  try {
    const response: ICardInfo = yield call(setWeeklyLimit, action.payload);
    yield put(
      showModal({ visible: true, type: "success", message: "Success!" })
    );
    yield put(
      setWeeklyLimitSuccess({
        data: response,
      })
    );
  } catch (e) {
    yield put(showModal({ visible: true, type: "error", message: e.messag }));
    yield put(
      setWeeklyLimitFailure({
        error: e.message,
      })
    );
  }
}

function* cardInfoSaga() {
  yield takeLatest(FETCH_CARD_INFO_REQUEST, fetchCardInfoSaga);
  yield takeLatest(SET_WEEKLY_LIMIT_REQUEST, setWeeklyLimitSaga);
}

export default cardInfoSaga;
