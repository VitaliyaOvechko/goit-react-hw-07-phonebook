// import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePening = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  console.log(action.payload);
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePening,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePening,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);

      // alert(`${action.payload.name} is already in contacts`);
      // addContact: {
      // reducer(state, action) {
      //   const newContact = state.find(
      //     contact =>
      //       action.payload.name.toLowerCase() === contact.name.toLowerCase()
      //   );

      //   return newContact
      //     ? alert(`${action.payload.name} is already in contacts`)
      //     : [...state, action.payload];
      // },
      // prepare({ name, number }) {
      //   return {
      //     payload: {
      //       id: nanoid(),
      //       name,
      //       number,
      //     },
      //   };
      // },
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePening,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
