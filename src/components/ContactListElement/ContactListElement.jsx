import PropTypes from 'prop-types';
import css from './ContactListElement.module.css';

import { deleteContact } from 'redux/contactsThunk ';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contactsSelector';

export const ContactListElement = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleContactDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.listBox}>
      <li className={css.listItem}>
        {name} : {number}
      </li>
      <button
        type="button"
        onClick={handleContactDelete}
        className={css.button}
        disabled={isLoading}
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
