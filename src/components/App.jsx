import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactListElement from './ContactListElement/ContactListElement';
import Filter from './Filter/Filter';
import { add, remove, filterItems } from 'redux/store';

import { nanoid } from 'nanoid';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const addContact = (name, number) => {
    const contact = { id: nanoid(), name, number };
    const names = [];
    contacts.map(item => {
      return names.push(item.name.toLowerCase());
    });
    if (names.includes(contact.name.toLowerCase())) {
      return alert('This contact already exists!');
    } else {
      dispatch(add(contact));
    }
  };

  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  const changeFilter = e => {
    dispatch(filterItems(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div>
      <h1 style={{ marginLeft: 20 }}>Phonebook</h1>
      <ContactForm contacts={addContact} />

      <h2 style={{ marginLeft: 20 }}>Contacts</h2>
      <Filter onChange={changeFilter} value={filter} />
      <ContactList>
        {visibleContacts.map(item => (
          <ContactListElement
            key={item.id}
            item={item}
            onDeleteContact={deleteContact}
          />
        ))}
      </ContactList>
    </div>
  );
}
