import {useDispatch} from 'react-redux';
import {addUserBirthdayThrowable} from '../userActions';
import {useUserStore} from './useUserStore';

export const useAddUserBirthdayThrowable = () => {
  const dispatch = useDispatch();

  const {phoneNumber = ''} = useUserStore();

  return async (birthday: string) => {
    await addUserBirthdayThrowable(birthday, phoneNumber, dispatch);
  };
};
