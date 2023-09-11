import ContactForm from './Form/ContactsForm';
import { ContactList } from './List/ContactsList';
import { Filter } from './Filter/Filter';
import { ContactsTitle, PhonebookTitle, Wrapper } from './App.styled';

export default function App() {
  return (
    <Wrapper>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
