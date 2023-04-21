import React from 'react';
import {SafeAreaView, View} from 'react-native';
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
      <View style={styles.inputsContainer}>
        <PhoneNumberInput
          lable={'Введіть ваш номер телефону:'}
          editable={true}
          icon={'cancel'}
        />
      </View>
      <Button title="ДАЛІ" onPress={() => navigation.navigate('EnterCode')} />
    </SafeAreaView>
  );
}
