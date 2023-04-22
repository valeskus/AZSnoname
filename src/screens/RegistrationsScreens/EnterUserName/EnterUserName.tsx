import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../UI/Button';
import {Input} from '../../../UI/Input';
import {RegistrationHeader} from '../../../UI/RegistrationHeader';

export function EnterUserName(): JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <RegistrationHeader />
      <View style={styles.inputsContainer}>
        <Input label={"Ваше ім'я"} onChange={() => {}} />
        <Input label={'Ваше прізвище'} onChange={() => {}} />
      </View>
      <Button
        title="ДАЛІ"
        onPress={() => navigation.navigate('EnterUserBirthday')}
      />
    </SafeAreaView>
  );
}
