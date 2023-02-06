import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ addFilterUser }) => {
  const [inputFind, setInputFind] = useState('');

  const hendleChange = evt => {
    setInputFind(evt.target.value);

    const inputNormalized = evt.target.value.trim().toLowerCase();
    addFilterUser(inputNormalized);
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

Filter.propTypes = {
  addFilterUser: PropTypes.func.isRequired,
};
