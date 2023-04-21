import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {useNavigation} from '@react-navigation/native';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {CodeInputs} from '../../../UI/CodeInputs/CodeInputs';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';

export function EnterCode(): JSX.Element {
  const navigation = useNavigation();
  //TODO
  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
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
