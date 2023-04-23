import {useDispatch} from 'react-redux';
import {addUserBirthday} from '../userActions';

export const useAddUserBirthday = () => {
  const dispatch = useDispatch();

  return async (birthday: string, phoneNumber: string) => {
    console.log('birthday', birthday);

    await addUserBirthday(birthday, phoneNumber, dispatch);
  };
};
