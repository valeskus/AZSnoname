import React, {useCallback, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {useNavigation} from '@react-navigation/native';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';

export function EnterPhone(): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleNumber = useCallback((number: string, valid: boolean) => {
    setPhoneNumber(number);
    setValid(valid);
  }, []);

  const onPress = async () => {
    setLoading(true);

    await new Promise<void>(resolve => setTimeout(resolve, 2000));

    setLoading(false);

    navigation.navigate('EnterCode', {phoneNumber});
  };

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
