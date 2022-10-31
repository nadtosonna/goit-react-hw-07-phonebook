export const getContacts = ({ contacts }) => contacts.contacts;
export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});
export const getFilter = store => store.filter;