import { uuid } from 'uuidv4';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './contactList.module.css';

const ContactList = ({ visibleContacts, handleRemove }) => {
  if (!visibleContacts.length) {
    return <p className={styles.message}>Phonebook is empty!</p>;
  }
  return (
    <ul className="contactList">
      {visibleContacts.map(({ id = uuid(), name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ContactList;
