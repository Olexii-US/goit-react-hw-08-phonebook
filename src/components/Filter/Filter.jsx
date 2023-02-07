import { useState } from 'react';
import css from './Filter.module.css';

import { filterContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const [inputFind, setInputFind] = useState('');
  const dispatch = useDispatch();

  const hendleChange = evt => {
    setInputFind(evt.target.value);

    const inputNormalized = evt.target.value.trim().toLowerCase();
    dispatch(filterContacts(inputNormalized));
  };

  return (
    <label className={css.filterForm}>
      Find contacts by name
      <input
        type="text"
        name="inputFind"
        value={inputFind}
        className={css.filterInput}
        onChange={hendleChange}
      />
    </label>
  );
};
