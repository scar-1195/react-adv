# Component Extend Style Pattern

This branch is a continuation of the Compound Component Pattern what we are doing is extending the functionality of our components by sending them as css class or inline styles properties.

The only thing we have to do is add the className and style properties to our interfaces.

## Extend Styles

### Child Component

```
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

```

We add our Props and in the className property using template Strings we concatenate the className that we send from the parent component

### HOC

```
<ProductCard product={product} className='bg-dark text-white'>
  <ProductImage className='custom-image' />
  <ProductTitle style={{ fontWeight: 'bold' }} />
  <ProductButtons className='custom-buttons' />
</ProductCard>
```
