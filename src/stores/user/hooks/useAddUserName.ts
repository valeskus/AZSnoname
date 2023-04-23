import {useDispatch} from 'react-redux';
import {addUserName} from '../userActions';

export const useAddUserName = () => {
  const dispatch = useDispatch();

  return async (name: string, surname: string, phoneNumber: string) => {
    console.log('name', name, surname);

    await addUserName(name, surname, phoneNumber, dispatch);
  };
};
