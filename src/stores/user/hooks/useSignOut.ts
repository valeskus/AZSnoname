import {useDispatch} from 'react-redux';
import {signOut} from '../userActions';

export const useSignOut = () => {
  const dispatch = useDispatch();

  return async () => {
    await signOut(dispatch);
  };
};
