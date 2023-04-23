import {useState} from 'react';

export const useAcceptTerms = () => {
  const [isAccepted, setAccepted] = useState(false);

  const setAcceptance = (nextState: boolean) => {
    setAccepted(nextState);
  };

  return {
    isAccepted,
    setAcceptance,
  };
};
