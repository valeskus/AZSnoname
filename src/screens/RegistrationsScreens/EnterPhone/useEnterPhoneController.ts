import * as React from 'react';
import {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useUserStore, useSignIn} from '../../../stores/user';

export const UseEnterPhoneController = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const userStore = useUserStore();
  const signIn = useSignIn();

  React.useEffect(() => {
    if (phoneNumber !== userStore.phoneNumber) {
      setPhoneNumber(userStore.phoneNumber || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStore.phoneNumber || '']);

  const navigation = useNavigation();

  const handleNumber = useCallback((number: string, valid: boolean) => {
    setPhoneNumber(number);
    setValid(valid);
  }, []);

  const onPress = async () => {
    setLoading(true);

    await signIn(phoneNumber);

    setLoading(false);

    navigation.navigate('EnterCode');
  };
  return {
    isValid,
    isLoading,
    onPress,
    handleNumber,
  };
};
