import { useContext } from 'react';
import { productContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
  const { counter, onIncreaseBy } = useContext(productContext);

  return (
    <div className={styles.buttonsContainer}>
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
