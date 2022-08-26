import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
import ContactListElement from '../ContactListElement/ContactListElement.jsx';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import Loader from 'components/Loader/Loader.jsx';
import List from '@mui/material/List';

export default function ContactList() {
  const { data, isLoading, error } = useFetchContactsQuery();

  const filter = useSelector(getFilterValue);

  const getVisibleContacts = () => {
    if (data) {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {visibleContacts.length !== 0 ? (
            visibleContacts.map(item => (
              <ContactListElement key={item.id} item={item} />
            ))
          ) : (
            <li> Contact {filter} not found </li>
          )}
        </List>
      )}
      {error && <p>Something went wrong!</p>}
    </>
  );
}
