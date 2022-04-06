import React from 'react';
import {
  ProductCardWrapper,
  ProductCardImage,
  ProductCardInfo,
  ProductCardAvailable,
  ProductCardPrice,
  ProductCardCreatedBy,
  ProductCardType,
} from './product-card.styled';

interface IProps {
  src: string;
  name: string;
  type: string;
  initial_price: number;
  quantity: number;
  quantity_available: number;
}

export const ProductCard: React.FC<IProps> = ({
  src,
  name,
  type,
  initial_price,
  quantity,
  quantity_available,
}): JSX.Element => {
  return (
    <ProductCardWrapper>
      <ProductCardImage src={src} />
      <ProductCardCreatedBy>
        <div className='created'>created by</div>
        <div className='created-name'>{name}</div>
      </ProductCardCreatedBy>
      <ProductCardType>{type}</ProductCardType>
      <ProductCardInfo>
        <ProductCardAvailable>
          <div className='available'>available</div>
          <div className='available-count'>
            {quantity_available} of {quantity}
          </div>
        </ProductCardAvailable>
        <ProductCardPrice>
          <div className='price'>price</div>
          <div className='price-value'>{initial_price} ETH</div>
        </ProductCardPrice>
      </ProductCardInfo>
    </ProductCardWrapper>
  );
};
