import { useContext } from 'react';
import { productContext } from './ProductCard';

import type { CSSProperties } from 'react';

import styles from '../styles/styles.module.css';

interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(productContext);
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ?? product.title}
    </span>
  );
};
