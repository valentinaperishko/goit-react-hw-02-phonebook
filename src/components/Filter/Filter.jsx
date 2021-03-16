import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ filter, handleChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={styles.inputFilter}
        name="filter"
        type="text"
        placeholder="search contact"
        onChange={handleChange}
        value={filter}
      />
    </label>
  );
};

Filter.defaultProps = {
  value: '',
};
Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
