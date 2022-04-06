import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px 0;

  .header-explore {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 20px 0;
  }

  .header-slogan {
    margin: 0 0 20px 0;
    color: #828282;
    font-size: 14px;
  }

  @media (min-width: 640px) {

    .header-content {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  }
`;
