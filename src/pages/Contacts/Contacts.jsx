import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsThunk ';
import {
  HeadersStyle,
  SpanStyle,
  FilterBox,
  ConcactBox,
  ElementBox,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ConcactBox>
      <ElementBox>
        <HeadersStyle>
          Add new <SpanStyle>contact</SpanStyle>
        </HeadersStyle>
        <ContactForm />
      </ElementBox>
      <div>
        <HeadersStyle>
          My <SpanStyle>contacts</SpanStyle>
        </HeadersStyle>
        <FilterBox>
          <Filter />
          <ContactList />
        </FilterBox>
      </div>
    </ConcactBox>
  );
};
export default Contacts;
