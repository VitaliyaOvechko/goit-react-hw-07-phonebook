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
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePening,
    [fetchContacts.fulfilled](state, action) {
      console.log(action.payload);
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePening,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePening,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.filter(contact => contact.id !== action.payload.id);

      // const index = state.contacts.findIndex(
      //   contact => contact.id === action.payload.id
      // );
      // state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },

  //// попередній варіает з ДЗ 6

  // addContact: {
  //   reducer(state, action) {
  //     const newContact = state.find(
  //       contact =>
  //         action.payload.name.toLowerCase() === contact.name.toLowerCase()
  //     );

  //     return newContact
  //       ? alert(`${action.payload.name} is already in contacts`)
  //       : [...state, action.payload];
  //   },
  //   prepare({ name, number }) {
  //     return {
  //       payload: {
  //         id: nanoid(),
  //         name,
  //         number,
  //       },
  //     };
  //   },
  // },
  // deleteContact(state, action) {
  //   return state.filter(contact => contact.id !== action.payload);
  // },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
