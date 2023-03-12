export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  onIncreaseBy: (val: number) => void;
  product: Product;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}
