import {useDispatch} from 'react-redux';
import {pushUserName} from '../userActions';

export const usePushUserName = () => {
  const dispatch = useDispatch();

  return async (name: string, surname: string, phoneNumber: string) => {
    console.log('name', name, surname);

    await pushUserName(name, surname, phoneNumber, dispatch);
  };
};
