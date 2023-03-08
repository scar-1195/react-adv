import { useContext } from 'react';
import { productContext } from './ProductCard';

import type { CSSProperties } from 'react';

import styles from '../styles/styles.module.css';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, onIncreaseBy } = useContext(productContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button onClick={() => onIncreaseBy(-1)} className={styles.buttonMinus}>
        -1
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => onIncreaseBy(+1)} className={styles.buttonAdd}>
        +1
      </button>
    </div>
  );
};
