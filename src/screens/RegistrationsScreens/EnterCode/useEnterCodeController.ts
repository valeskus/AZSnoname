import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  useConfirmCodeThrowable,
  useSignIn,
  useUserStore,
} from '../../../stores/user';

export const useEnterCodeController = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [isValid, setValid] = useState(true);
  const signIn = useSignIn();

  const {phoneNumber} = useUserStore();
  const confirmCodeThrowable = useConfirmCodeThrowable();

  const onEditPhonePress = () => {
    navigation.goBack();
  };

  const onNextPress = async () => {
    try {
      await confirmCodeThrowable(code);
      navigation.navigate('EnterUserName');
    } catch {
      setValid(false);
    }
  };

  const onCodeChange = (nextCode: number) => {
    setCode(String(nextCode));
    setValid(true);
  };

  const onResendCode = async () => {
    if (!phoneNumber) {
      return;
    }
    await signIn(phoneNumber);
  };

  return {
    phoneNumber,
    isValid,
    onEditPhonePress,
    onNextPress,
    onCodeChange,
    isNextDisabled: code.length < 4,
    onResendCode,
  };
};
