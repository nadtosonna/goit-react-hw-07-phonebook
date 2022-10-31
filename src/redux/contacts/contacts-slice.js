import { createSlice } from '@reduxjs/toolkit';
import { pendingCallback, rejectedCallback } from 'shared/helpers/redux';
import { fetchContacts, addContact, removeContact } from './contacts-operations';

const initialState = {
    contacts: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: pendingCallback,
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.contacts = payload;
    }
  },
  [fetchContacts.rejected]: rejectedCallback,
  [addContact.pending]: pendingCallback,
  [addContact.fulfilled]: (store, { payload }) => {
    store.loading = false;
    store.contacts.push(payload);
  },
  [addContact.rejected]: rejectedCallback,
  [removeContact.pending]: pendingCallback,
  [removeContact.fulfilled]: (store, { payload }) => {
    store.loading = false;
    store.contacts = store.contacts.filter(contact => contact.id !== payload);
  }
});

export default contactsSlice.reducer;
