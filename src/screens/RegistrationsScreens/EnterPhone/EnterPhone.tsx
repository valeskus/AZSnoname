import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {useNavigation} from '@react-navigation/native';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';

export function EnterPhone(): JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{marginBottom: 20}}>ПРОЦЕС РЕЕСТРАЦІЇ</Text>
      <PhoneNumberInput
        lable={'Введіть ваш номер телефону:'}
        editable={true}
        icon={'cancel'}
      />
      <Button title="ДАЛІ" onPress={() => navigation.navigate('EnterCode')} />
    </SafeAreaView>
  );
}
