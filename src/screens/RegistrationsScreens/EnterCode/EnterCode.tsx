import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {CodeInputs} from '../../../UI/CodeInputs/CodeInputs';
import {useEnterCodeController} from './useEnterCodeController';
import {LinkButton} from '../../../UI/LinkButton';
import {RegistrationScreenWrapper} from '../components';

export function EnterCode(): JSX.Element {
  const {
    onCodeChange,
    phoneNumber,
    isValid,
    codeLength,
    isNextDisabled,
    isValidating,
    onEditPhonePress,
    onNextPress,
    onResendCode,
  } = useEnterCodeController();

  return (
    <RegistrationScreenWrapper>
      <View style={styles.inputsContainer}>
        <PhoneNumberInput
          label="Ваш номер телефону:"
          editable={false}
          initialValue={phoneNumber}
          onEditPress={onEditPhonePress}
          phoneFormat="+38(0NN) NN-NN-NNN"
        />
        <CodeInputs
          onChange={onCodeChange}
          valid={isValid}
          codeLength={codeLength}
          label={'Введіть код з SMS'}
        />
        <LinkButton
          title="Надіслати код повторно"
          underline={false}
          onPress={onResendCode}
        />
      </View>

      <Button
        isLoading={isValidating}
        disabled={isNextDisabled}
        title="ДАЛІ"
        onPress={onNextPress}
      />
    </RegistrationScreenWrapper>
  );
}
