import {ModalAction, ModalActionTypes} from './actions';

const initialState = {
  type: null,
  message: null,
  visible: false,
};

export default (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case ModalActionTypes.ShowModal:
      return {
        visible: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case ModalActionTypes.HideModal:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
