import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../UI/Button';

export function EnterUserName(): JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="ДАЛІ"
        onPress={() => navigation.navigate('EnterUserBirthday')}
      />
    </SafeAreaView>
  );
}
