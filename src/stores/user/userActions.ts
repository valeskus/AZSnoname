import {Dispatch} from 'redux';
import * as FirebaseApi from '../../api/firebaseApi';

export enum UserActions {
  SIGN_IN = '@user/sign-in',
  ADD_USER_NAME = '@user/add-user-name',
  ADD_USER_BIRTHDAY = '@user/add-user-birthday',
  ERROR = '@error/user',
}

const actionSignIn = (phoneNumber: string) => ({
  type: UserActions.SIGN_IN,
  payload: {
    phoneNumber,
  },
});
const actionAddUserName = (name: string, surname: string) => ({
  type: UserActions.ADD_USER_NAME,
  payload: {
    name,
    surname,
  },
});
const actionAddUserBirthday = (birthday: string) => ({
  type: UserActions.ADD_USER_BIRTHDAY,
  payload: {
    birthday,
  },
});

const actionError = (error: unknown) => ({
  type: UserActions.ERROR,
  payload: error,
});

export const signIn = async (phoneNumber: string, dispatch: Dispatch) => {
  try {
    await FirebaseApi.signInWithPhoneNumber('+380' + phoneNumber);

    dispatch(actionSignIn(phoneNumber));
  } catch (error) {
    dispatch(actionError(error));
  }
};

export const addUserNameThrowable = async (
  username: string,
  userSurname: string,
  phoneNumber: string,
  dispatch: Dispatch,
) => {
  await FirebaseApi.databaseSet(phoneNumber, {
    name: username,
    surname: userSurname,
  });

  dispatch(actionAddUserName(username, userSurname));
};

export const addUserBirthdayThrowable = async (
  birthday: string,
  phoneNumber: string,
  dispatch: Dispatch,
) => {
  await FirebaseApi.databaseUpdate(phoneNumber, {
    birthday,
  });

  dispatch(actionAddUserBirthday(birthday));
};

export const confirmCodeThrowable = async (code: string) => {
  await FirebaseApi.confirmPhoneNumber(code);
};
