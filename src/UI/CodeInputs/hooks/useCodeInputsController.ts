import React, {createRef, useCallback, useMemo, useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
} from 'react-native';

export const useCodeInputsController = (
  codeLength: number,
  onChange: (value: number) => void,
) => {
  const [code, setCode] = useState<Array<string>>([]);

  const codePlaceholderList = useMemo(
    () => new Array(codeLength).fill({}),
    [codeLength],
  );
  const refList = useMemo(
    () =>
      new Array(codeLength)
        .fill(null)
        .map((): React.RefObject<TextInput> => createRef()),
    [codeLength],
  );

  const setFocus = useCallback(
    (text: string, index: number) => {
      if (text === '' && index >= 1) {
        return refList[index - 1].current?.focus();
      }
      if (text !== '' && index < codeLength - 1) {
        return refList[index + 1].current?.focus();
      }
      return refList[index].current?.focus();
    },
    [codeLength, refList],
  );

  const getOnChangeHandler = useCallback(
    (
      event: NativeSyntheticEvent<TextInputChangeEventData>,
      inputIndex: number,
    ) => {
      const nextCode = [...code];
      nextCode[inputIndex] = event.nativeEvent.text;
      setCode(nextCode);
      onChange(Number(nextCode.join('').replace(/\D/g, '')));
      setFocus(event.nativeEvent.text, inputIndex);
    },

    [code, onChange, setFocus],
  );

  const handleKeyPress = useCallback(
    (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
      const nextCode = [...code];
      if (e.nativeEvent.key === 'Backspace' && index !== 0) {
        if (code[index] === '') {
          nextCode[index - 1] = '';
          setCode(nextCode);
        }
        return refList[index - 1].current?.focus();
      }

      if (index === codeLength - 1) {
        return refList[index].current?.focus();
      }

      if (e.nativeEvent.key === 'Backspace' && index === 0) {
        return refList[index].current?.focus();
      }

      //TODO
      if (code[index] !== '') {
        nextCode[index + 1] = e.nativeEvent.key;
        setCode(nextCode);
        onChange(Number(nextCode.join('').replace(/\D/g, '')));
      }

      return refList[index + 1].current?.focus();
    },
    [refList, codeLength, code, onChange],
  );

  return {
    codePlaceholderList,
    getOnChangeHandler,
    refList,
    handleKeyPress,
    code,
  };
};
