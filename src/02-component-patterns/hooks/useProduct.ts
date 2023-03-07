import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const onIncreaseBy = (val: number): void => {
    setCounter(prev => Math.max(prev + val, 0));
  };

  return {
    counter,
    onIncreaseBy,
  };
};
