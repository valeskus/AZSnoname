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
    isNextDisabled,
    onEditPhonePress,
    onNextPress,
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
          label={'Введіть код з SMS'}
        />
        {/* <Link to={'/'}>Надіслати код повторно</Link> */}
        <LinkButton
          title="Надіслати код повторно"
          underline={false}
          onPress={() => {}}
          selectButton={false}
        />
      </View>

      <Button disabled={isNextDisabled} title="ДАЛІ" onPress={onNextPress} />
    </SafeAreaView>
  );
}
