import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

export const StyledApp = styled.div`
  padding: 0 10px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 1310px;
  height: 100%;

  @media (min-width: 640px) {
    padding: 0 15px;
  }
`;
