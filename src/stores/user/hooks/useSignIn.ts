import {useDispatch} from 'react-redux';
import {signIn} from '../userActions';

export const useSignIn = () => {
  const dispatch = useDispatch();

  return async (phoneNumber: string) => {
    console.log('phoneNumber', phoneNumber);

    await signIn(phoneNumber, dispatch);
  };
};
