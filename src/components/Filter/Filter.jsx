import { filteredContact } from 'redux/filtersSlice';
import { FilterInput, FilterLable } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const searchQuery = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(filteredContact(e.target.value.trim()));
  };

  return (
    <FilterLable>
      Find contacts by name
      <FilterInput
        type="text"
        value={searchQuery}
        onChange={filterChange}
      ></FilterInput>
    </FilterLable>
  );
};
