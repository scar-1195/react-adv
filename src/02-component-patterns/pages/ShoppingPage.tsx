import { useState } from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import type { Product } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png',
};

const product2 = {
  id: '2',
  title: 'Coffe Mug - Meme',
  img: './coffee-mug2.png',
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<Record<string, ProductInCart>>({});

  const onProductCountChange = ({ count, product }: { count: number; product: Product }): void => {
    setShoppingCart(prevSC => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prevSC;
        console.log({ toDelete });

        return rest;
      }

      return {
        ...prevSC,
        [product.id]: { ...product, count },
      };
    });
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div className={styles.ProdcutCardContainer}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={e => onProductCountChange(e)}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
      <div className='shopping-cart'>
        <ProductCard product={product} className='bg-dark text-white' style={{ width: '100px' }}>
          <ProductImage className='custom-image' />
        </ProductCard>
      </div>
      <div>{JSON.stringify(shoppingCart, null, 3)}</div>
    </div>
  );
};
