import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Input} from '../Input';

export type Props = {
  label: string;
  onChange: (value: number) => void;
};

export function CodeInputs({label, onChange}: Props): JSX.Element {
  const [code, setCode] = useState('    ');

  const getOnChangeHandler = useCallback(
    (inputIndex: number) => (text: string) => {
      const nextCode = code
        .split('')
        .map((item, index) => {
          if (index === inputIndex) {
            return text;
          }

          return item;
        })
        .join('');

      setCode(nextCode);
      onChange(Number(nextCode.replace(/\D/g, '')));
    },
    [code, onChange],
  );

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.codeInputsGroup}>
        <View style={styles.codeInput}>
          <Input onChange={getOnChangeHandler(0)} length={1} />
        </View>
        <View style={styles.codeInput}>
          <Input onChange={getOnChangeHandler(1)} length={1} />
        </View>
        <View style={styles.codeInput}>
          <Input onChange={getOnChangeHandler(2)} length={1} />
        </View>
        <View style={styles.codeInput}>
          <Input onChange={getOnChangeHandler(3)} length={1} />
        </View>
      </View>
    </View>
  );
}
