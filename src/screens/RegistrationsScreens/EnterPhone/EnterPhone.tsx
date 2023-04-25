import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {useEnterPhoneController} from './useEnterPhoneController';
import {RegistrationScreenWrapper} from '../components';

export function EnterPhone(): JSX.Element {
  const {isValid, isLoading, onPress, handleNumber} = useEnterPhoneController();

  return (
    <RegistrationScreenWrapper showBackButton={false}>
      <View style={styles.inputsContainer}>
        <PhoneNumberInput
          onChange={handleNumber}
          label="Введіть ваш номер телефону:"
          editable={true}
          initialValue="+38(0"
          phoneFormat="+38(0NN) NN-NN-NNN"
        />
      </View>
      <Button
        isLoading={isLoading}
        disabled={!isValid}
        title="ДАЛІ"
        onPress={onPress}
      />
    </RegistrationScreenWrapper>
  );
}
