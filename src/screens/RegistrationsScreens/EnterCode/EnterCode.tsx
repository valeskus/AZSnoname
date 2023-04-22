import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {CodeInputs} from '../../../UI/CodeInputs/CodeInputs';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';
import {useEnterCodeController} from './useEnterCodeController';

export function EnterCode(): JSX.Element {
  const {handlerCode, route, navigation} = useEnterCodeController();

  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <PhoneNumberInput
          label="Ваш номер телефону:"
          editable={false}
          initialValue={route.params?.phoneNumber}
          onEditPress={navigation.goBack}
        />
        <CodeInputs
          onChange={handlerCode}
          valid={false}
          label={'Введіть код з SMS'}
        />
        {/* <Link to={'/'}>Надіслати код повторно</Link> */}
      </View>

      <Button
        title="ДАЛІ"
        onPress={() => navigation.navigate('EnterUserName')}
      />
    </SafeAreaView>
  );
}
