import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Input} from '../Input';
import {useCodeInputsController} from './hooks';

export type Props = {
  label: string;
  onChange: (value: number) => void;
  valid: boolean;
  codeLength: number;
};

export function CodeInputs({
  label,
  onChange,
  valid,
  codeLength,
}: Props): JSX.Element {
  const {
    codePlaceholderList,
    getOnChangeHandler,
    refList,
    handleKeyPress,
    code,
  } = useCodeInputsController(codeLength, onChange);
  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.codeInputsGroup}>
        {codePlaceholderList.map((_, index) => (
          <View style={styles.codeInput} key={index}>
            <Input
              onChange={getOnChangeHandler(index)}
              textAlign="center"
              invalid={!valid}
              refValue={refList[index]}
              onKeyPressed={e => handleKeyPress(e, index)}
              value={code[index]}
              type="number-pad"
              isSelectTextOnFocus
            />
          </View>
        ))}
      </View>
    </View>
  );
}
