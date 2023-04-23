import {useEffect, useState} from 'react';
import {useConfirmCodeThrowable} from '../../../../stores/user';

const codeLength = 6;

export const useCodeValidator = (code: string) => {
  const [isValid, setValid] = useState(true);
  const [isValidating, setValidating] = useState(false);
  const confirmCodeThrowable = useConfirmCodeThrowable();

  const validate = async () => {
    setValidating(true);

    try {
      await confirmCodeThrowable(code);
      return true;
    } catch (error) {
      setValid(false);
      return false;
    } finally {
      setValidating(false);
    }
  };

  useEffect(() => {
    setValid(true);
  }, [code]);

  return {
    isCodeValid: isValid,
    isCodeEntered: code.length === codeLength,
    codeLength,
    validate,
    isValidating,
  };
};
