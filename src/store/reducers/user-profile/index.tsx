import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  UserProfileState,
  UserProfileActions,
} from './actions';

const initialState: UserProfileState = {
  pending: false,
  data: null,
  error: null,
};

export default (state = initialState, action: UserProfileActions) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.data,
        error: null,
      };
    case FETCH_USER_PROFILE_FAILURE:
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
