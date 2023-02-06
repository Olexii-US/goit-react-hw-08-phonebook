import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import {
  addContacts,
  deleteContacts,
  filterContacts,
} from '../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, filterInputContacts } from '../redux/contactsSelector';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterByNameContacts = useSelector(filterInputContacts);

  const addUser = obj => {
    const newUser = {
      id: nanoid(),
      ...obj,
    };

    const filteredAlertContacts = contacts.find(
      item => item.name.toLowerCase() === newUser.name.toLowerCase()
    );

    filteredAlertContacts
      ? alert(`${filteredAlertContacts.name} is already in contacts`)
      : dispatch(addContacts(newUser));
  };

  const addFilterUser = inputFind => {
    dispatch(filterContacts(inputFind));
  };

  const filteredUser = () => {
    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filterByNameContacts)
    );
    return filteredContacts;
  };

  const deleteUser = userId => {
    dispatch(deleteContacts(userId));
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} contacts={contacts} />

      <h2 style={{ fontSize: '32px' }}>Contacts</h2>
      <Filter addFilterUser={addFilterUser} />

      {filterByNameContacts ? (
        <ContactList contactData={filteredUser()} deleteUser={deleteUser} />
      ) : (
        <ContactList contactData={contacts} deleteUser={deleteUser} />
      )}
    </div>
  );
};
