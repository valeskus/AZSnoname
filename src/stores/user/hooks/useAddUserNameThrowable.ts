import {useDispatch} from 'react-redux';
import {addUserNameThrowable} from '../userActions';
import {useUserStore} from './useUserStore';

export const useAddUserNameThrowable = () => {
  const dispatch = useDispatch();

  const {phoneNumber = ''} = useUserStore();

  return async (name: string, surname: string) => {
    await addUserNameThrowable(name, surname, phoneNumber, dispatch);
  };
};
