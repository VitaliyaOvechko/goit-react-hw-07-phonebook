import { ContactItem } from '../ListItem/ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { DeleteBtn, List, ListItem } from 'components/List/ContactsList.styled';
import { getContacts, getFilters } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const searchQuery = useSelector(getFilters);
  const normalizedFilter = searchQuery.toLowerCase();

  const dispatch = useDispatch();

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {getVisibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} />
          <DeleteBtn onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </List>
  );
};
