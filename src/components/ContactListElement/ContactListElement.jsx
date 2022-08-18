import styles from './ContactListElement.module.css';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export default function ContactListElement({ item }) {
  const { id, name, phone } = item;

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={styles.contact__item}>
      <p className={styles.contact__name}>
        {name}: {phone}
      </p>
      <button
        className={styles.contact__button}
        type="button"
        disabled={isDeleting}
        onClick={() => {
          deleteContact(id);
          toast.success('Contact is deleted!');
        }}
      >
        {isDeleting ? <Loader size={12} /> : 'Delete'}
      </button>
      <Toaster />
    </li>
  );
}

ContactListElement.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
