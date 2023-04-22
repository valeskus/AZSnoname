import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Input} from '../../../UI/Input';
import {Button} from '../../../UI/Button';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';

export function EnterUserBirthday(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <Input label={'Дата народження'} onChange={() => {}} />
        {/* <Link to={'/'}>Я погоджуюсь з правилами програми</Link> */}
      </View>

      <Button title="ДАЛІ" onPress={() => {}} />
    </SafeAreaView>
  );
}
