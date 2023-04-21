import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {PhoneNumberInput} from '../../UI/PhoneNumberInput';

export function Registration(): JSX.Element {
  return (
    <View style={styles.detailsScreenContainer}>
      <PhoneNumberInput />
    </View>
  );
}
