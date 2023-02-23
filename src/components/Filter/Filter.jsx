import { useState } from 'react';

import { filterContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

import { FormLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const [inputFind, setInputFind] = useState('');
  const dispatch = useDispatch();

  const hendleChange = evt => {
    setInputFind(evt.target.value);

    const inputNormalized = evt.target.value.trim().toLowerCase();
    dispatch(filterContacts(inputNormalized));
  };

  return (
    <FormLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="inputFind"
        value={inputFind}
        onChange={hendleChange}
      />
    </FormLabel>
  );
};
