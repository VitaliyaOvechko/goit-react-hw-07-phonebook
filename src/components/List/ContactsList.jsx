import { ContactItem } from '../ListItem/ContactsListItem';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { DeleteBtn, List, ListItem } from 'components/List/ContactsList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  //   const handleDelete = () => {
  //     dispatch(deleteContact(contact.id));
  //   };

  return (
    <List>
      {selectVisibleContacts.map(contact => (
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
