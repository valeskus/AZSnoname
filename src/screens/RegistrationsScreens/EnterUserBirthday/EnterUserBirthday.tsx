import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Input} from '../../../UI/Input';
import {Button} from '../../../UI/Button';
import {Link} from '@react-navigation/native';

export function EnterUserBirthday(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Input lable={'Дата народження'} />
      <Link to={'/'}>Я погоджуюсь з правилами програми</Link>

      <Button title="ДАЛІ" onPress={() => {}} />
    </SafeAreaView>
  );
}
