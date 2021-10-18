export enum ModalActionTypes {
  ShowModal,
  HideModal,
}

export interface ModalAction {
  type: ModalActionTypes;
  payload?: any;
}

export function showModal(payload: any): ModalAction {
  return {
    type: ModalActionTypes.ShowModal,
    payload,
  };
}

export function hideModal(): ModalAction {
  return {
    type: ModalActionTypes.HideModal,
  };
}
