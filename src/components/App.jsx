import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const baseContactSet = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? baseContactSet
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
      : setContacts(prevState => [...prevState, newUser]);
  };

  const addFilterUser = inputFind => {
    setFilter(inputFind);
  };

  const filteredUser = () => {
    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filter)
    );
    return filteredContacts;
  };

  const deleteUser = userId => {
    setContacts(prevState => prevState.filter(user => user.id !== userId));
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} contacts={contacts} />

      <h2 style={{ fontSize: '32px' }}>Contacts</h2>
      <Filter addFilterUser={addFilterUser} />

      {filter ? (
        <ContactList contactData={filteredUser()} deleteUser={deleteUser} />
      ) : (
        <ContactList contactData={contacts} deleteUser={deleteUser} />
      )}
    </div>
  );
};
