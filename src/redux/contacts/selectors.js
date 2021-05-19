import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilterContacts = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilterContacts],
  (items, filter) => {
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
