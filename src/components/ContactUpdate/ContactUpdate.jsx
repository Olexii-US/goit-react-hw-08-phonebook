import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSelector';
import { selectIsLoading } from 'redux/contactsSelector';
import { editContact } from 'redux/contactsThunk ';
import {
  FormBox,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/FormCommon.styled';

export const ContactUpdate = ({ id, closeModal }) => {
  const contacts = useSelector(selectContacts);
  const { name, number } = contacts.find(e => e.id === id);

  const [currentName, setCurrentName] = useState(name);
  const [currentNumber, setCurrentNumber] = useState(number);

  const isLoading = useSelector(selectIsLoading);

  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setCurrentName(value);
        break;
      case 'number':
        setCurrentNumber(value);
        break;
      default:
        return;
    }
  };
  const dispatch = useDispatch();

  const updateData = {
    id: id,
    name: currentName,
    number: currentNumber,
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editContact(updateData));
    closeModal();

    // addUser({ name, number });

    // const filteredContacts = contacts.find(
    //   item => item.name.toLowerCase() === name.toLowerCase()
    // );
    // if (!filteredContacts) {
    //   setName('');
    //   setNumber('');
    // }
  };

  ////////////// Redux ////////////////////////

  return (
    <FormBox onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={currentName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={hendleChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          value={currentNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={hendleChange}
        />
      </FormLabel>
      <FormButton type="submit" disabled={isLoading}>
        Edit contact
      </FormButton>
      <FormButton type="submit" disabled={isLoading} onClick={closeModal}>
        Cancel
      </FormButton>
    </FormBox>
  );
};
