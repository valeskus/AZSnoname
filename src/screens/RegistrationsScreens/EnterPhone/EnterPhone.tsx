import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';
import {UseEnterPhoneController} from './useEnterPhoneController';

export function EnterPhone(): JSX.Element {
  const {isValid, isLoading, onPress, handleNumber} = UseEnterPhoneController();

  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <PhoneNumberInput
          onChange={handleNumber}
          label="Введіть ваш номер телефону:"
          editable={true}
        />
      </View>
      <Button
        isLoading={isLoading}
        disabled={!isValid}
        title="ДАЛІ"
        onPress={onPress}
      />
    </SafeAreaView>
  );
}
