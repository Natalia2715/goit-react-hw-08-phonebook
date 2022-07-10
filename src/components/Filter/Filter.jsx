import styles from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ onChange, value }) {
  return (
    <div>
      <p className={styles.filter__text}>Find contacts by name</p>
      <input className={styles.filter} onChange={onChange} value={value} />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
