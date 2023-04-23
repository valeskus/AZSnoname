import {useCallback, useState} from 'react';

import {usePhoneFormatter} from './hooks';

interface UsePhoneNumberInputControllerParams {
  initialValue?: string;
  onChange?: (phoneNumber: string, isValid: boolean) => void;
  phoneFormat: string;
}

export const usePhoneNumberInputController = ({
  initialValue,
  phoneFormat,
  onChange,
}: UsePhoneNumberInputControllerParams) => {
  const [phoneNumber, setPhoneNumber] = useState(initialValue);
  const format = usePhoneFormatter(phoneFormat, initialValue);

  const handleChange = useCallback(
    (value: string) => {
      const formattedValue = format(value);

      setPhoneNumber(formattedValue);
      onChange?.(formattedValue, formattedValue.length === phoneFormat.length);
    },
    [onChange, format, phoneFormat],
  );

  const removePhoneNumber = useCallback(() => {
    const formattedValue = format('');

    setPhoneNumber(formattedValue);
  }, [format]);

  return {removePhoneNumber, handleChange, phoneNumber};
};
