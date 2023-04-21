import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {useNavigation} from '@react-navigation/native';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';

export function EnterPhone(): JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <PhoneNumberInput
        lable={'Введіть ваш номер телефону:'}
        editable={true}
        icon={'cancel'}
      />
      <Button title="ДАЛІ" onPress={() => navigation.navigate('EnterCode')} />
    </SafeAreaView>
  );
}
