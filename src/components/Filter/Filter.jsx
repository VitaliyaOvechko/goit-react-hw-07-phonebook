import { filteredContact } from 'redux/filtersSlice';
import { FilterInput, FilterLable } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(getFilters);

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
