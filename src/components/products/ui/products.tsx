import React from 'react';
import { IProduct } from '../../../types';
import { ProductCard } from '../../product-card';
import { ProductsWrapper } from './products.styled';

interface IProductProps {
  products: IProduct[];
}

export const Products: React.FC<IProductProps> = ({ products }) => {
  const renderProduct = (product: IProduct, index: number) => {
    const { type, initial_price, quantity, quantity_available, created_by } =
      product;
    return (
      <ProductCard
        key={index}
        src={'/product-img.png'}
        name={created_by.display_name}
        type={type}
        initial_price={initial_price}
        quantity={quantity}
        quantity_available={quantity_available}
      />
    );
  };

  return <ProductsWrapper>{products.map(renderProduct)}</ProductsWrapper>;
};
