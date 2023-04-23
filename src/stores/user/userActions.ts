import {Dispatch} from 'redux';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';

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

let confimation: FirebaseAuthTypes.ConfirmationResult | undefined;

export const signIn = async (phoneNumber: string, dispatch: Dispatch) => {
  try {
    confimation = await auth().signInWithPhoneNumber('+380' + phoneNumber);

    dispatch(actionSignIn(phoneNumber));
  } catch (error) {
    dispatch(actionError(error));
  }
};

export const addUserName = async (
  username: string,
  userSurname: string,
  phoneNumber: string,
  dispatch: Dispatch,
) => {
  try {
    await firebase
      .app()
      .database('https://azsnoname-default-rtdb.firebaseio.com')
      .ref(`/users/${phoneNumber}`)
      .set({
        name: username,
        surname: userSurname,
      });

    dispatch(actionAddUserName(username, userSurname));
  } catch (error) {
    console.log(error, 'error');
  }
};

export const addUserBirthday = async (
  birthday: string,
  phoneNumber: string,
  dispatch: Dispatch,
) => {
  try {
    await firebase
      .app()
      .database('https://azsnoname-default-rtdb.firebaseio.com')
      .ref(`/users/${phoneNumber}`)
      .update({
        birthday,
      });

    dispatch(actionAddUserBirthday(birthday));
  } catch (error) {
    console.log(error, 'error');
  }
};

export const confirmCodeThrowable = async (code: string) => {
  await confimation?.confirm(code);
};
