import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Input} from '../../../UI/Input';
import {Button} from '../../../UI/Button';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';
import {useEnterUserBirthdayController} from './useEnterUserBirthdayController';
import {LinkButton} from '../../../UI/LinkButton';
import {useUserStore} from '../../../stores/user';

export function EnterUserBirthday(): JSX.Element {
  const {onPress} = useEnterUserBirthdayController();
  const userStore = useUserStore();

  console.log(userStore, 'birth');
  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <Input label={'Дата народження'} onChange={() => {}} />
        <LinkButton
          title="Я погоджуюсь з правилами програми"
          underline={true}
          onPress={() => {}}
          selectButton={true}
        />
      </View>

      <Button title="ДАЛІ" onPress={onPress} />
    </SafeAreaView>
  );
}
