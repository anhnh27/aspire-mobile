export const FETCH_USER_PROFILE_REQUEST = 'FETCH_USER_PROFILE_REQUEST';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_PROFILE_FAILURE';

type Nullable<T> = T | undefined | null;

export interface IUserProfile {
  id: string;
  displayName: string;
}

export interface UserProfileState {
  pending: boolean;
  data: Nullable<IUserProfile>;
  error: string | null;
}

export interface FetchUserProfileSuccessPayload {
  data: IUserProfile;
}

export interface FetchUserProfileFailurePayload {
  error: string;
}

export interface FetchUserProfileRequest {
  type: typeof FETCH_USER_PROFILE_REQUEST;
}

export type FetchUserProfileSuccess = {
  type: typeof FETCH_USER_PROFILE_SUCCESS;
  payload: FetchUserProfileSuccessPayload;
};

export type FetchUserProfileFailure = {
  type: typeof FETCH_USER_PROFILE_FAILURE;
  payload: FetchUserProfileFailurePayload;
};

export type UserProfileActions =
  | FetchUserProfileRequest
  | FetchUserProfileSuccess
  | FetchUserProfileFailure;

export const fetchUserProfileRequest = (): FetchUserProfileRequest => ({
  type: FETCH_USER_PROFILE_REQUEST,
});

export const fetchUserProfileSuccess = (
  payload: FetchUserProfileSuccessPayload,
): FetchUserProfileSuccess => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  payload,
});

export const fetchUserProfileFailure = (
  payload: FetchUserProfileFailurePayload,
): FetchUserProfileFailure => ({
  type: FETCH_USER_PROFILE_FAILURE,
  payload,
});
