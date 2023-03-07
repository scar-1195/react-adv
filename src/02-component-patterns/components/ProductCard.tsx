import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductCard = ({ product }: Props) => {
  const { counter, onIncreaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={product.img != null ? product.img : noImage}
        alt='Coffe Mug'
      />

      <span className={styles.productDescription}>{product.title}</span>

      <div className={styles.buttonsContainer}>
        <button onClick={() => onIncreaseBy(-1)} className={styles.buttonMinus}>
          -1
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button onClick={() => onIncreaseBy(+1)} className={styles.buttonAdd}>
          +1
        </button>
      </div>
    </div>
  );
};
