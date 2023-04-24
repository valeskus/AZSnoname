import {useDispatch} from 'react-redux';
import {signIn} from '../userActions';

export const useSignIn = () => {
  const dispatch = useDispatch();

  return async (phoneNumber: string) => {
    await signIn(phoneNumber, dispatch);
  };
};
