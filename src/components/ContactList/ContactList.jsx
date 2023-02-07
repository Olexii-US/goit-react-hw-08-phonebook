import { ContactListElement } from '../ContactListElement/ContactListElement';

import { useSelector } from 'react-redux';
import {
  selectContacts,
  filterInputContacts,
} from '../../redux/contactsSelector';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterByNameContacts = useSelector(filterInputContacts);

  const filteredUser = () => {
    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filterByNameContacts)
    );
    return filteredContacts;
  };

  return (
    <ul>
      {filterByNameContacts
        ? filteredUser().map(({ name, number, id }) => (
            <ContactListElement key={id} name={name} number={number} id={id} />
          ))
        : contacts.map(({ name, number, id }) => (
            <ContactListElement key={id} name={name} number={number} id={id} />
          ))}
    </ul>
  );
};

// export const ContactList = () => {
//   const contacts = useSelector(selectContacts);
//   const filterByNameContacts = useSelector(filterInputContacts);

//   const filteredContacts = contacts.filter(item =>
//     item.name.toLowerCase().includes(filterByNameContacts)
//   );

//   return (
//     <ul>
//       {filteredContacts.map(({ name, number, id }) => (
//         <ContactListElement key={id} name={name} number={number} id={id} />
//       ))}
//     </ul>
//   );
// };
