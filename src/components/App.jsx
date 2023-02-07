import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 style={{ fontSize: '32px' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
