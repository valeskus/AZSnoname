import * as Redux from 'redux';
import {UserActions} from './userActions';

export interface UserStore {
  phoneNumber?: string;
  name?: string;
  surname?: string;
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
    case UserActions.ADD_USER_NAME: {
      const {name, surname} = action.payload as {name: string; surname: string};
      console.log(action.payload, 'namePay');
      return {
        ...state,
        name,
        surname,
      };
    }
    default:
      return state;
  }
}
