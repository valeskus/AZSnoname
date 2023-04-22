import {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export const UseEnterPhoneController = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleNumber = useCallback((number: string, valid: boolean) => {
    setPhoneNumber(number);
    setValid(valid);
  }, []);

  const onPress = async () => {
    setLoading(true);

    await new Promise<void>(resolve => setTimeout(resolve, 2000));

    setLoading(false);

    navigation.navigate('EnterCode', {phoneNumber});
  };
  return {
    isValid,
    isLoading,
    onPress,
    handleNumber,
  };
};
