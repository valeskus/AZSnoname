import React, {useCallback, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {PhoneNumberInput} from '../../../UI/PhoneNumberInput';
import {CodeInputs} from '../../../UI/CodeInputs/CodeInputs';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';

export function EnterCode(): JSX.Element {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const [valid, setValid] = useState(false);

  // const [SMSCode, setSMSCode] = useState();

  // const handleCheckCode = useCallback(()=>{

  // },[])

  const handlerCode = useCallback((code: number) => {
    // setSMSCode(code);
    console.log('code', code);
  }, []);

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
        <CodeInputs onChange={handlerCode} valid={false} />
        {/* <Link to={'/'}>Надіслати код повторно</Link> */}
      </View>

      <Button
        title="ДАЛІ"
        onPress={() => navigation.navigate('EnterUserName')}
      />
    </SafeAreaView>
  );
}
