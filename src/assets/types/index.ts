export interface ProductPropTypes {
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
  id: number;
}

export interface ProductsPropTypes {
  products: ProductPropTypes[];
}

export interface categoryPropTypes {
  createdAt: string;
  name: string;
  id: number;
}
