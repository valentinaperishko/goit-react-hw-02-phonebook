import PropTypes from 'prop-types';
import styles from './contactListItem.module.css';

const ContactListItem = ({ id, name, number, handleRemove }) => {
  return (
    <li className={styles.contactListItem}>
      <span className="contactName">{name}</span>
      <span className="contactNumber"> {number}</span>
      <button onClick={() => handleRemove(id)} className={styles.btnRemove}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
