import React, {useCallback, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Input} from '../Input';

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
  const [code, setCode] = useState<Array<string>>([]);
  const codePlaceholderList = useMemo(
    () => new Array(codeLength).fill({}),
    [codeLength],
  );

  const getOnChangeHandler = useCallback(
    (inputIndex: number) => (text: string) => {
      const nextCode = [...code];
      nextCode[inputIndex] = text;

      setCode(nextCode);
      onChange(Number(nextCode.join('').replace(/\D/g, '')));
    },

    [code, onChange],
  );
  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.codeInputsGroup}>
        {codePlaceholderList.map((_, index) => (
          <View style={styles.codeInput} key={index}>
            <Input
              onChange={getOnChangeHandler(index)}
              length={1}
              invalid={!valid}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
