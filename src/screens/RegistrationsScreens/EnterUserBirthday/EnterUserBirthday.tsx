import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Input} from '../../../UI/Input';
import {Button} from '../../../UI/Button';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';
import {useEnterUserBirthdayController} from './useEnterUserBirthdayController';

export function EnterUserBirthday(): JSX.Element {
  const {onPress} = useEnterUserBirthdayController();

  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <Input label={'Дата народження'} onChange={() => {}} />
        {/* <Link to={'/'}>Я погоджуюсь з правилами програми</Link> */}
      </View>

      <Button title="ДАЛІ" onPress={onPress} />
    </SafeAreaView>
  );
}
