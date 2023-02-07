import PropTypes from 'prop-types';
import css from './ContactListElement.module.css';

import { deleteContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactListElement = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.listBox}>
      <li className={css.listItem}>
        {name} : {number}
      </li>
      <button
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
};

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
