import PropTypes from 'prop-types';
import { ItemText } from './ContactsListItem.styled';

export const ContactItem = ({ contact: { name, phone } }) => {
  return (
    <ItemText>
      {name}: {phone}
    </ItemText>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
