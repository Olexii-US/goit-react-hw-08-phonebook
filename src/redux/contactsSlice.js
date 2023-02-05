import { createSlice } from '@reduxjs/toolkit';

const baseContactSet = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: baseContactSet,
    filter: '',
  },
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    filterContacts: (state, { payload }) => {
      console.log('payload', payload);
      state.filter = payload;
    },
  },
});

export const { addContacts, deleteContacts, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
