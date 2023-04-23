export const usePhoneFormatter = (
  pattern: string,
  initialValue: string = '',
) => {
  return (nextValue: string) => {
    let rawValue = nextValue.replace(/\D/g, '');

    const value = pattern
      .split('')
      .map(char => {
        const isnNumberPlaceholder = char === 'N';
        const isNumberConstant = char === rawValue[0];
        const isInputHandled = !rawValue.length;

        if (isnNumberPlaceholder) {
          const mappedChar = rawValue[0];

          rawValue = rawValue.slice(1);

          return mappedChar;
        }

        if (isNumberConstant) {
          rawValue = rawValue.slice(1);

          return char;
        }

        if (isInputHandled) {
          return '';
        }

        return char;
      })
      .join('');

    if (value.length <= initialValue.length) {
      return initialValue;
    }

    return value;
  };
};
