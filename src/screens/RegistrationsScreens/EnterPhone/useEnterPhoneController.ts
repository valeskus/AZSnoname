import {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSignIn} from '../../../stores/user';

export const useEnterPhoneController = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const signIn = useSignIn();

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
    phoneNumber,
    onPress,
    handleNumber,
  };
};
