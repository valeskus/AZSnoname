import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {useNavigation} from '@react-navigation/native';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {CodeInputs} from '../../../UI/CodeInputs/CodeInputs';

export function EnterCode(): JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{marginBottom: 20}}>ПРОЦЕС РЕЕСТРАЦІЇ</Text>
      <PhoneNumberInput
        lable="Ваш номер телефону:"
        editable={false}
        icon={'pencil'}
      />
      <CodeInputs />

      <Button
        title="ДАЛІ"
        onPress={() => navigation.navigate('EnterUserName')}
      />
    </SafeAreaView>
  );
}
