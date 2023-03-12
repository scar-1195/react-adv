import { useState } from 'react';
import type { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: useProductArgs) => {
  const [counter, setCounter] = useState(0);

  const onIncreaseBy = (val: number): void => {
    const newValue = Math.max(counter + val, 0);
    setCounter(newValue);
    onChange?.({ count: newValue, product });
  };

  return {
    counter,
    onIncreaseBy,
  };
};
