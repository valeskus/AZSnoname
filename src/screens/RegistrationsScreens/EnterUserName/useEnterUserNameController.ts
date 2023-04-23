import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {useUserStore} from '../../../stores/user';
import {usePushUserName} from '../../../stores/user/hooks/usePushUserName';

export const useEnterUserNameController = () => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');

  const navigation = useNavigation();
  const userStore = useUserStore();
  const pushUserName = usePushUserName();

  useEffect(() => {
    if (userName !== userStore.name || userSurname !== userStore.surname) {
      setUserName(userStore.name || '');
      setUserSurname(userStore.surname || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStore || '']);

  const handleUserName = useCallback((name: string) => {
    setUserName(name);
  }, []);

  const handleUserSurname = useCallback((surname: string) => {
    setUserSurname(surname);
  }, []);

  const onPress = async () => {
    if (!userStore.phoneNumber) {
      return;
    }
    await pushUserName(userName, userSurname, userStore.phoneNumber);

    navigation.navigate('EnterUserBirthday');
  };

  return {onPress, handleUserName, handleUserSurname};
};
