import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import type { ReactElement, CSSProperties } from 'react';
import type { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const productContext = createContext({} as ProductContextProps);

const { Provider } = productContext;

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, onIncreaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        onIncreaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
