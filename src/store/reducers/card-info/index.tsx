import {
  FETCH_CARD_INFO_REQUEST,
  FETCH_CARD_INFO_SUCCESS,
  FETCH_CARD_INFO_FAILURE,
  CardInfoState,
  CardInfoActions,
  SET_WEEKLY_LIMIT_REQUEST,
  SET_WEEKLY_LIMIT_SUCCESS,
  SET_WEEKLY_LIMIT_FAILURE,
} from './actions';

const initialState: CardInfoState = {
  pending: false,
  data: null,
  error: null,
};

export default (state = initialState, action: CardInfoActions) => {
  switch (action.type) {
    case FETCH_CARD_INFO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CARD_INFO_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.data,
        error: null,
      };
    case FETCH_CARD_INFO_FAILURE:
      return {
        ...state,
        pending: false,
        data: null,
        error: action.payload.error,
      };
    case SET_WEEKLY_LIMIT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SET_WEEKLY_LIMIT_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.data,
        error: null,
      };
    case SET_WEEKLY_LIMIT_FAILURE:
      return {
        ...state,
        pending: false,
        data: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
