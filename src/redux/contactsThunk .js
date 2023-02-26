import { createAsyncThunk } from '@reduxjs/toolkit';
import { priveteApi } from 'api/api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await priveteApi.get('/contacts');
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

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }) => {
    const { data } = await priveteApi.patch(`/contacts/${id}`, {
      name,
      number,
    });
    console.log('data in thunk', data);

    return data;
  }
);
