import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {Input} from '../../../UI/Input';
import {useEnterUserNameController} from './useEnterUserNameController';
import {RegistrationScreenWrapper} from '../components';

export function EnterUserName(): JSX.Element {
  const {isValid, isLoading, onPress, handleUserName, handleUserSurname} =
    useEnterUserNameController();

  return (
    <RegistrationScreenWrapper>
      <View style={styles.inputsContainer}>
        <Input label="Ваше ім'я" onChange={handleUserName} />
        <Input label="Ваше прізвище" onChange={handleUserSurname} />
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
