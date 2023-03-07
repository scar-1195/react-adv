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
