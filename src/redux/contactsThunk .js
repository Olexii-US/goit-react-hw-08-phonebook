import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get(
    'https://63e95586b120461c6bee723e.mockapi.io/contacts'
  );
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const { data } = await axios.post(
      'https://63e95586b120461c6bee723e.mockapi.io/contacts',
      newContact
    );
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const { data } = await axios.delete(
      `https://63e95586b120461c6bee723e.mockapi.io/contacts/${contactId}`
    );
    return data;
  }
);
