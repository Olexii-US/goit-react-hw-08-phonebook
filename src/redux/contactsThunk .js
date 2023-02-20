import { createAsyncThunk } from '@reduxjs/toolkit';
import { priveteApi } from 'api/api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await priveteApi.get('/contacts');
  console.log('data get', data);

  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const { data } = await priveteApi.post('/contacts', newContact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const { data } = await priveteApi.delete(`/contacts/${contactId}`);
    return data;
  }
);
