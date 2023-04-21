import React, {useCallback, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {useNavigation} from '@react-navigation/native';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';

export function EnterPhone(): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigation = useNavigation();

  const handleNumber = useCallback((number: string) => {
    setPhoneNumber(number);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <PhoneNumberInput
          onChange={handleNumber}
          lable={'Введіть ваш номер телефону:'}
          editable={true}
        />
      </View>
      <Button
        title="ДАЛІ"
        onPress={() => navigation.navigate('EnterCode', phoneNumber)}
      />
    </SafeAreaView>
  );
}
