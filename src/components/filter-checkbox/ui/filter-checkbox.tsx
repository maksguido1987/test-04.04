import React from 'react';
import {
  FilterCheckboxInput,
  FilterCheckboxLabel,
  FilterCheckboxSpan,
  FilterCheckboxText,
  FilterCheckboxWrapper,
} from './filter-checkbox.styled';

interface IProps {
  isFilter: boolean;
  setIsFilter: () => void;
}

export const FilteredProducts: React.FC<IProps> = ({ isFilter, setIsFilter }) => {
  return (
    <FilterCheckboxWrapper>
      <FilterCheckboxLabel check={isFilter}>
        <FilterCheckboxInput
          type='checkbox'
          checked={isFilter}
          onChange={setIsFilter}
        />
        <FilterCheckboxSpan check={isFilter}>
          {isFilter ? 'Да' : 'Нет'}
        </FilterCheckboxSpan>
      </FilterCheckboxLabel>
      <FilterCheckboxText>Отфильтровать товары по наличию</FilterCheckboxText>
    </FilterCheckboxWrapper>
  );
};
