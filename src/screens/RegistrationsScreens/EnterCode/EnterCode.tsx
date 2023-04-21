import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {useNavigation} from '@react-navigation/native';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {CodeInputs} from '../../../UI/CodeInputs/CodeInputs';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';

export function EnterCode(): JSX.Element {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <PhoneNumberInput
          lable="Ваш номер телефону:"
          editable={false}
          icon={'pencil'}
        />
        <CodeInputs />
      </View>

      <Button
        title="ДАЛІ"
        onPress={() => navigation.navigate('EnterUserName')}
      />
    </SafeAreaView>
  );
}
