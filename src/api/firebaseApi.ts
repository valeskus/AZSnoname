import {firebase} from '@react-native-firebase/database';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

let confimation: FirebaseAuthTypes.ConfirmationResult | undefined;

export const signInWithPhoneNumber = async (phoneNumber: string) => {
  confimation = await auth().signInWithPhoneNumber(phoneNumber);
};

export const confirmPhoneNumber = async (code: string) => {
  await confimation?.confirm(code);
};

const getDatabase = (id: string) => {
  return firebase
    .app()
    .database('https://azsnoname-default-rtdb.firebaseio.com')
    .ref(`/users/${id}`);
};

export const databaseSet = async (id: string, record: Record<string, any>) => {
  await getDatabase(id).set(record);
};

export const databaseUpdate = async (
  id: string,
  record: Record<string, any>,
) => {
  await getDatabase(id).update(record);
};
