import {useCallback, useState} from 'react';

export const usePhoneNumberInputController = (
  initialValue?: string,
  onChange?: (phoneNumber: string, isValid: boolean) => void,
) => {
  const [phoneNumber, setPhoneNumber] = useState(initialValue);

  const handleChange = useCallback(
    (value: string) => {
      const rawValue = value.trim().replace(/\D/g, '');

      console.log('rawValue', rawValue);

      setPhoneNumber(rawValue);
      onChange?.(value, value.length === 9);
    },
    [onChange],
  );

  const removePhoneNumber = useCallback(() => {
    setPhoneNumber('');
  }, []);
  return {removePhoneNumber, handleChange, phoneNumber};
};
