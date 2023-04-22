import {confirmCodeThrowable} from '../userActions';

export const useConfirmCodeThrowable = () => {
  return async (code: string) => {
    await confirmCodeThrowable(code);
  };
};
