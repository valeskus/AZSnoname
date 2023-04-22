import {Dispatch} from 'redux';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export enum UserActions {
  SIGN_IN = '@user/sign-in',
  ERROR = '@error/user',
}

const actionSignIn = (phoneNumber: string) => ({
  type: UserActions.SIGN_IN,
  payload: {
    phoneNumber,
  },
});

const actionError = (error: unknown) => ({
  type: UserActions.ERROR,
  payload: error,
});

let confimation: FirebaseAuthTypes.ConfirmationResult | undefined;

export const signIn = async (phoneNumber: string, dispatch: Dispatch) => {
  try {
    confimation = await auth().signInWithPhoneNumber(phoneNumber);

    dispatch(actionSignIn(phoneNumber));
  } catch (error) {
    dispatch(actionError(error));
  }
};

export const confirmCodeThrowable = async (code: string) => {
  await confimation?.confirm(code);
};
