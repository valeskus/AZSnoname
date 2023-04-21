import React from 'react';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

export type Props = {
  type?: KeyboardTypeOptions | undefined;
  lable?: string;
  length?: number;
};

export function Input({type, lable, length}: Props): JSX.Element {
  const isCodeInput = length === 1 ? true : false;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.lable}>{lable}</Text>
      <TextInput
        style={[styles.input, isCodeInput && styles.center]}
        keyboardType={type}
        maxLength={length}
      />
    </View>
  );
}
