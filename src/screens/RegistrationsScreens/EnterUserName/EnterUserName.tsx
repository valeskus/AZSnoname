import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {Input} from '../../../UI/Input';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';
import {useEnterUserNameController} from './useEnterUserNameController';

export function EnterUserName(): JSX.Element {
  const {onPress, handleUserName, handleUserSurname} =
    useEnterUserNameController();
  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <Input label={"Ваше ім'я"} onChange={handleUserName} />
        <Input label={'Ваше прізвище'} onChange={handleUserSurname} />
      </View>
      <Button title="ДАЛІ" onPress={onPress} />
    </SafeAreaView>
  );
}
