import styled from 'styled-components';

export const ProductsWrapper = styled.main`
  gap: 15px;
  display: grid;

  @media (min-width: 440px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
