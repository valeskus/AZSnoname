import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../UI/Button';
import {Input} from '../../../UI/Input';

export function EnterUserName(): JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Input lable={"Ваше ім'я"} />
      <Input lable={'Ваше прізвище'} />
      <Button
        title="ДАЛІ"
        onPress={() => navigation.navigate('EnterUserBirthday')}
      />
    </SafeAreaView>
  );
}
