import {combineReducers} from 'redux';
import cardInfoReducer from './reducers/card-info';
import userProfileReducer from './reducers/user-profile';
import modalReducer from './reducers/modal';

const rootReducer = combineReducers({
  modal: modalReducer,
  userProfile: userProfileReducer,
  cardInfo: cardInfoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
