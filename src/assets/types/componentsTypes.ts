export interface ProductPropTypes {
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
  id?: number;
}

export interface ProductItemPropTypes {
  product: ProductPropTypes
}

export interface ProductsPropTypes {
  products: ProductPropTypes[];
}

export interface CategoryPropTypes {
  createdAt: string;
  name: string;
  id: number;
}

export interface SelectPropTypes {
  onChangeCategory: (e: React.FormEvent<HTMLSelectElement>) => void;
}

export interface ProductItemImagePropTypes {
  avatar: string;
}

export interface ProductDetailsHeaderPropTypes
  extends ProductItemImagePropTypes {
  name: string;
  price: number;
}

export interface ProductDetailsDescriptionPropTypes {
  description: string;
}

export interface ProductParamsPropTypes {
  productID: string;
}
