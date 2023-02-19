import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  return (
    <main>
      <h1>Contacts</h1>
      <ContactForm />
      <h2 style={{ fontSize: '32px' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </main>
  );
};
export default Contacts;
