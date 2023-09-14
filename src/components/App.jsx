import ContactForm from './Form/ContactsForm';
import { ContactList } from './List/ContactsList';
import { Filter } from './Filter/Filter';
import { ContactsTitle, PhonebookTitle, Wrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </Wrapper>
  );
}
