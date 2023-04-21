import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Input} from '../Input';

export function CodeInputs(): JSX.Element {
  //TODO how to do to next input ?
  return (
    <View>
      <Text>Введіть код з SMS</Text>
      <View style={styles.codeInputsGroup}>
        <View style={styles.codeInput}>
          <Input length={1} />
        </View>
        <View style={styles.codeInput}>
          <Input length={1} />
        </View>
        <View style={styles.codeInput}>
          <Input length={1} />
        </View>
        <View style={styles.codeInput}>
          <Input length={1} />
        </View>
      </View>
    </View>
  );
}
