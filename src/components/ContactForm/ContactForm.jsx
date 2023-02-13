import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSelector';
import { addContact } from 'redux/contactsThunk ';
import { selectIsLoading } from 'redux/contactsSelector';
import { toast } from 'react-toastify';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const isLoading = useSelector(selectIsLoading);

  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    addUser({ name, number });

    const filteredContacts = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (!filteredContacts) {
      setName('');
      setNumber('');
    }
  };

  ////////////// Redux ////////////////////////
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addUser = obj => {
    const filteredAlertContacts = contacts.find(
      item => item.name.toLowerCase() === obj.name.toLowerCase()
    );

    filteredAlertContacts
      ? toast.warn(`${filteredAlertContacts.name} is already in contacts`)
      : dispatch(addContact(obj));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label className={css.formLabel}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={hendleChange}
          className={css.formInput}
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={hendleChange}
          className={css.formInput}
        />
      </label>
      <button type="submit" className={css.formButton} disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
};
