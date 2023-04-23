import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {useAddUserNameThrowable} from '../../../stores/user/hooks';

export const useEnterUserNameController = () => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [isLoading, setLoading] = useState(false);

  const navigation = useNavigation();

  const addUserNameThrowable = useAddUserNameThrowable();

  const handleUserName = useCallback((name: string) => {
    setUserName(name);
  }, []);

  const handleUserSurname = useCallback((surname: string) => {
    setUserSurname(surname);
  }, []);

  const onPress = async () => {
    setLoading(true);

    try {
      await addUserNameThrowable(userName, userSurname);
      navigation.navigate('EnterUserBirthday');
    } catch {
      // TODO: handle error
    } finally {
      setLoading(false);
    }
  };

  return {
    onPress,
    isLoading,
    isValid: !!userSurname && !!userName,
    handleUserName,
    handleUserSurname,
  };
};
