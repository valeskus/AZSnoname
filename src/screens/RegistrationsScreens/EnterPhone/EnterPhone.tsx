import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../UI/Button';
import {useNavigation} from '@react-navigation/native';

export function EnterPhone(): JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Button title="ДАЛІ" onPress={() => navigation.navigate('EnterCode')} />
    </SafeAreaView>
  );
}
