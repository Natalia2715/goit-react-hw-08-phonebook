import { useSelector } from 'react-redux';
import { getItemsValue, getFilterValue } from 'redux/contactsSlice';
import ContactListElement from '../ContactListElement/ContactListElement.jsx';

export default function ContactList() {
  const contacts = useSelector(getItemsValue);
  const filter = useSelector(getFilterValue);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(item => (
        <ContactListElement key={item.id} item={item} />
      ))}
    </ul>
  );
}
