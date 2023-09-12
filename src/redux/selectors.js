import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;

export const getFilters = state => state.filters;

export const getLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilters],
  (contacts, filter) => {
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
