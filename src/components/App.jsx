import { useState } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactListElement from './ContactListElement/ContactListElement';
import Filter from './Filter/Filter';
import useLocalStorage from 'hooks/useLocalStorage';

import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useLocalStorage([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = { id: nanoid(), name, number };
    const names = [];
    contacts.map(item => {
      return names.push(item.name.toLowerCase());
    });
    if (names.includes(contact.name.toLowerCase())) {
      return alert('This contact already exists!');
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // });
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

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
