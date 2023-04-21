import React from 'react';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

export type Props = {
  type?: KeyboardTypeOptions | undefined;
  lable?: string;
};

export function Input({type, lable}: Props): JSX.Element {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.lable}>{lable}</Text>
      <TextInput style={styles.input} keyboardType={type} />
    </View>
  );
}
