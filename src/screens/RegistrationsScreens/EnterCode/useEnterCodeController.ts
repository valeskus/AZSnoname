import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSignIn, useUserStore} from '../../../stores/user';

import {useCodeValidator} from './hooks';

export const useEnterCodeController = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const signIn = useSignIn();
  const {isCodeValid, isValidating, isCodeEntered, codeLength, validate} =
    useCodeValidator(code);

  const {phoneNumber} = useUserStore();

  const onEditPhonePress = () => {
    navigation.goBack();
  };

  const onNextPress = async () => {
    const isValid = await validate();

    if (isValid) {
      navigation.navigate('EnterUserName');
    }
  };
  const onCodeChange = (nextCode: number) => {
    setCode(String(nextCode));
  };

  const onResendCode = async () => {
    if (!phoneNumber) {
      return;
    }
    await signIn(phoneNumber);
  };

  return {
    phoneNumber,
    isValidating,
    isValid: isCodeValid,
    codeLength,
    onEditPhonePress,
    onNextPress,
    onCodeChange,
    isNextDisabled: !isCodeEntered,
    onResendCode,
  };
};
