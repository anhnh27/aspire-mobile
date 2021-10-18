export const FETCH_CARD_INFO_REQUEST = 'FETCH_CARD_INFO_REQUEST';
export const FETCH_CARD_INFO_SUCCESS = 'FETCH_CARD_INFO_SUCCESS';
export const FETCH_CARD_INFO_FAILURE = 'FETCH_CARD_INFO_FAILURE';

export const SET_WEEKLY_LIMIT_REQUEST = 'SET_WEEKLY_LIMIT_REQUEST';
export const SET_WEEKLY_LIMIT_SUCCESS = 'SET_WEEKLY_LIMIT_SUCCESS';
export const SET_WEEKLY_LIMIT_FAILURE = 'SET_WEEKLY_LIMIT_FAILURE';

type Nullable<T> = T | undefined | null;

export interface ICardInfo {
  id: string;
  validThru: string;
  cardNo: string;
  last4Digits: string;
  balance: number;
  isSpendingLimitEnabled: boolean;
  weeklySpendingLimit: number;
  currentSpending: number;
}

export interface CardInfoState {
  pending: boolean;
  data: Nullable<ICardInfo>;
  error: string | null;
}
/** ACTION TYPES */
//FETCH
export interface FetchCardInfoRequest {
  type: typeof FETCH_CARD_INFO_REQUEST;
}

export type FetchCardInfoSuccess = {
  type: typeof FETCH_CARD_INFO_SUCCESS;
  payload: FetchCardInfoSuccessPayload;
};

export type FetchCardInfoFailure = {
  type: typeof FETCH_CARD_INFO_FAILURE;
  payload: FetchCardInfoFailurePayload;
};

export interface FetchCardInfoSuccessPayload {
  data: ICardInfo;
}

export interface FetchCardInfoFailurePayload {
  error: string;
}

//SET WEEKLY LIMIT
export interface SetWeeklyLimitSuccessPayload {
  data: ICardInfo;
}

export interface SetWeeklyLimitFailurePayload {
  error: string;
}

export interface SetWeeklyLimitRequest {
  type: typeof SET_WEEKLY_LIMIT_REQUEST;
  payload: number;
}

export type SetWeeklyLimitSuccess = {
  type: typeof SET_WEEKLY_LIMIT_SUCCESS;
  payload: SetWeeklyLimitSuccessPayload;
};

export type SetWeeklyLimitFailure = {
  type: typeof SET_WEEKLY_LIMIT_FAILURE;
  payload: SetWeeklyLimitFailurePayload;
};

export type CardInfoActions =
  | FetchCardInfoRequest
  | FetchCardInfoSuccess
  | FetchCardInfoFailure
  | SetWeeklyLimitRequest
  | SetWeeklyLimitSuccess
  | SetWeeklyLimitFailure;

/** ACTION CREATORS */
//FETCH
export const fetchCardInfoRequest = (): FetchCardInfoRequest => ({
  type: FETCH_CARD_INFO_REQUEST,
});

export const fetchCardInfoSuccess = (
  payload: FetchCardInfoSuccessPayload,
): FetchCardInfoSuccess => ({
  type: FETCH_CARD_INFO_SUCCESS,
  payload,
});

export const fetchCardInfoFailure = (
  payload: FetchCardInfoFailurePayload,
): FetchCardInfoFailure => ({
  type: FETCH_CARD_INFO_FAILURE,
  payload,
});

//SET WEEKLY LIMIT
export const setWeeklyLimitRequest = (
  limit: number,
): SetWeeklyLimitRequest => ({
  type: SET_WEEKLY_LIMIT_REQUEST,
  payload: limit,
});

export const setWeeklyLimitSuccess = (
  payload: SetWeeklyLimitSuccessPayload,
): SetWeeklyLimitSuccess => ({
  type: SET_WEEKLY_LIMIT_SUCCESS,
  payload,
});

export const setWeeklyLimitFailure = (
  payload: SetWeeklyLimitFailurePayload,
): SetWeeklyLimitFailure => ({
  type: SET_WEEKLY_LIMIT_FAILURE,
  payload,
});
