import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {CodeInputs} from '../../../UI/CodeInputs/CodeInputs';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';
import {useEnterCodeController} from './useEnterCodeController';
import {LinkButton} from '../../../UI/LinkButton';

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
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <PhoneNumberInput
          label="Ваш номер телефону:"
          editable={false}
          initialValue={phoneNumber}
          onEditPress={onEditPhonePress}
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
    </SafeAreaView>
  );
}
