import styles from './ContactListElement.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';

export default function ContactListElement({ item }) {
  const { id, name, number } = item;
  const dispatch = useDispatch();

  return (
    <li className={styles.contact__item}>
      <p className={styles.contact__name}>
        {name}: {number}
      </p>
      <button
        className={styles.contact__button}
        type="button"
        onClick={() => {
          dispatch(remove(id));
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactListElement.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
