import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import type {
  ProductCardProps,
  ProductContextProps,
} from '../interfaces/interfaces';

export const productContext = createContext({} as ProductContextProps);

const { Provider } = productContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, onIncreaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        onIncreaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
