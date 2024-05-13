import React, { useState } from 'react';
import ButtonClose from '../ButtonClose/ButtonClose.jsx';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice.js';

import RadioFilter from '../RadioButtons/RadioFilter.jsx';
import {
  FilterWrapper,
  Title,
  Line,
  TitleWrapper,
  LabelTitle,
  ShowAllButton,
} from './Filter.styled.jsx';

const Filter = ({ onClose }) => {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState('all');

  const resetFilter = () => {
    dispatch(setFilter('all'));
    setPriority('all');
  };

  const handleFilterChange = priority => {
    dispatch(setFilter(priority));
    setPriority(priority);
  };
  // console.log('Render Filter component');

  return (
    <FilterWrapper>
      <ButtonClose onClick={onClose} />
      <Title>Filters</Title>
      <Line />
      <TitleWrapper>
        <LabelTitle>Label color</LabelTitle>
        <ShowAllButton onClick={resetFilter}>Show all</ShowAllButton>
      </TitleWrapper>

      <RadioFilter onFilterChange={handleFilterChange} priority={priority} />
    </FilterWrapper>
  );
};

export default Filter;
