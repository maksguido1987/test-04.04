import styled from 'styled-components';

interface ILabelProps {
  check: boolean;
}


export const FilterCheckboxWrapper = styled.div`
  max-width: 720px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 10px;

  @media (min-width: 640px) {
    display: flex;
    padding: 10px;
  }
`;

export const FilterCheckboxLabel = styled.label<ILabelProps>`
  background-color: ${({check}) => (check ? '#5DC563' : '#cccccc')};
  position: relative;
  margin: 0 0 5px 0;
  padding: 2px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 44px;
  width: 80px;
  border-radius: 60px;
  transition: all 0.15s ease-out;
  cursor: pointer;

  @media (min-width: 640px) {
    margin: 0 10px 0 0;
  }
`;

export const FilterCheckboxSpan = styled.label<ILabelProps>`
  transform: ${({check}) => (check ? '' : 'translateX(36px)')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-out;
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 100%;
  font-size: 12px;
`;

export const FilterCheckboxInput = styled.input`
  opacity: 0;
  visibility: hidden;
  width: 1px;
  height: 1px;
  position: absolute;
  margin: 0;
  padding: 0;
`;

export const FilterCheckboxText = styled.p`
  font-size: 12px;
  color: #828282;
`
