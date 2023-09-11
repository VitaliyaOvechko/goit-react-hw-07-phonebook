// import { createReducer } from '@reduxjs/toolkit';
// import actions from './constants';

// const contactsInitialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// export const contactsReducer = createReducer(contactsInitialState, {
//   [actions.FORM_SUBMIT]: (state, action) => {
//     return [...state, { ...action.payload }];
//   },

//   [actions.DELETE_CONTACT]: (state, action) => {
//     return [state.contacts.filter(contact => contact.id !== action.payload)];
//   },
// });

// export default contactsReducer;

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case ACTIONS.FORM_SUBMIT:
//       const newContact = state.contacts.find(
//         contact => data.name === contact.name
//       );
//       const data = action.payload;
//       // ? alert(`${newContact.name} is already in contacts`)
//       return [...state, newContact];
//     case ACTIONS.DELETE_CONTACT:
//       const id = action.payload;
//       return [state.contacts.filter(contact => contact.id !== id)];
//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   searchQuery: '',
// };

// export const filterReducer = createReducer(filtersInitialState, {
//   [actions.CHANGE_SEARCH_QUERY]: (state, action) => {
//     // return [...state, { searchQuery: action.payload }];
//     return { searchQuery: action.payload };
//   },
// });

// export const filterReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case actions.CHANGE_SEARCH_QUERY:
//       return { searchQuery: action.payload };

//     default:
//       return state;
//   }
// };
