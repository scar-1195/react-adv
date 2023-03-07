# Compound Component Pattern

A compound component is one of the advanced patterns of React which makes use of an interesting way to communicate the relationship between UI components and share implicit state by leveraging an explicit parent-child relationship.

This pattern will break the component into small pieces so that the parent component can render them by sharing their properties.

## without Compound Component Pattern

```
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

```

## Step 1 separate the components

In this case we separate the components into independent files

### ProductButton.jsx

```
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

```

### ProductImage.tsx

```
import { useContext } from 'react';
import { productContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(productContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img className={styles.productImg} src={imgToShow} alt='Product image' />
  );
};

```

### ProductTitle.tsx

```
import { useContext } from 'react';
import { productContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(productContext);
  return (
    <span className={styles.productDescription}>{title ?? product.title}</span>
  );
};

```

## Step 2 Convert our parent component into a HOC

```
import { ProductButtons,ProductCard,ProductImage,ProductTitle } from '../components';

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
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
    </div>
  );
};

```
