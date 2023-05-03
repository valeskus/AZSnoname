import React, {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
    (inputIndex: number) =>
      (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const {text} = event.nativeEvent;

        const isPasteEvent = text.length === codeLength;

        if (isPasteEvent) {
          setCode(text.split(''));
          refList[codeLength - 1].current?.focus();
        } else {
          const nextCode = [...code];

          const isLastInput = inputIndex !== codeLength - 1;
          const isInputLengthExceeded = text.length === 2;

          let targetIndex = inputIndex;
          if (isInputLengthExceeded && isLastInput) {
            targetIndex = inputIndex + 1;
          }

          nextCode[targetIndex] = text[text.length - 1] || '';

          setCode(nextCode);
          setFocus(nextCode[inputIndex], inputIndex);
        }
      },

    [code, setFocus, refList, codeLength],
  );

  useEffect(() => {
    onChange(Number(code.join('').replace(/\D/g, '')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

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

      return refList[index + 1].current?.focus();
    },
    [refList, codeLength, code],
  );

  return {
    codePlaceholderList,
    getOnChangeHandler,
    refList,
    handleKeyPress,
    code,
  };
};
