import * as Redux from 'redux';
import {UserActions} from './userActions';

export interface UserStore {
  phoneNumber?: string;
}

const initialState: UserStore = {};

export function userReducer(
  state = initialState,
  action: Redux.AnyAction,
): UserStore {
  switch (action.type) {
    case UserActions.SIGN_IN: {
      const {phoneNumber} = action.payload as {phoneNumber: string};

      return {
        ...state,
        phoneNumber,
      };
    }
    default:
      return state;
  }
}
