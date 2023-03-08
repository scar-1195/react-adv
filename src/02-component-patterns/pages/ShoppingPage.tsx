import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';

import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';

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
      <div className={styles.ProdcutCardContainer}>
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className='custom-image' />
          <ProductTitle className='text-white text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} style={{ background: '#70D1F8' }}>
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};
