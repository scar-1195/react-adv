# React adv

This application is the shell to practice lazyload (**react-router-dom-6**) and study different design patterns that I will be adding in different branches in my free time

## Desings Patterns
* Compound Component Pattern
* Extensible Styles
* Control Props
* State Initializer +  Function Child

trata de separar los componentes en pequeñas piezas para que el componente padre pueda renderizarlos

Antes de separar todo

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

despues de separa todo

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

export const ProductImage = ({ img = '' }) => {
  return (
    <img
      className={styles.productImg}
      src={img || noImage}
      alt='Product image'
    />
  );
};

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonsProps {
  counter: number;
  onIncreaseBy: (val: number) => void;
}

export const ProductButtons = ({ counter, onIncreaseBy }: ProductButtonsProps) => {
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

export const ProductCard = ({ product }: Props) => {
  const { counter, onIncreaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductImage img={product.img} />

      <ProductTitle title={product.title} />

      <ProductButtons counter={counter} onIncreaseBy={onIncreaseBy} />
    </div>
  );
};

siguiente paso convertir nuestro componente en un HOC

import { ProductCard } from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard product={product} />
    </div>
  );
};

como hoc

import { ProductCard } from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title={'Hola Mundo'} />
      </ProductCard>
    </div>
  );
};

Propiedades que le agregamos al produccard
ProductCard.Buttons = ProductButtons;
ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
