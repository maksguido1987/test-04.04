import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  max-width: 305px;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  justify-self: center;
  position: relative;

  cursor: pointer;
`;

export const ProductCardImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
`;

export const ProductCardCreatedBy = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;

  color: #ffffff;

  .created {
    font-size: 12px;
  }

  .created-name {
    font-weight: 700;
    font-size: 14px;
  }
`;

export const ProductCardType = styled.div`
  position: absolute;
  bottom: 86px;
  left: 15px;
  max-width: 200px;

  color: #ffffff;
  font-size: 18px;
  line-height: 24px;
`;

export const ProductCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 15px;
`;

export const ProductCardAvailable = styled.div`
  .available {
    font-size: 12px;
    line-height: 24px;
    color: #808080;
  }

  .available-count {
    font-weight: 600;
    font-size: 16px;
  }
`;

export const ProductCardPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .price {
    font-size: 12px;
    line-height: 24px;
    color: #808080;
  }

  .price-value {
    font-weight: 600;
    font-size: 16px;
    color: #0040e6;
  }
`;
