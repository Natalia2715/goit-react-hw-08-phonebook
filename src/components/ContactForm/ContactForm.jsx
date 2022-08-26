import { useState, useEffect } from 'react';

import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice';
import Loader from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import { Button, Form, Input, Label } from './ContactForm.styled';

export default function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const addContact = (name, number) => {
    const contact = { name, number };
    const names = [];
    contacts.map(item => {
      return names.push(item.name.toLowerCase());
    });
    if (names.includes(contact.name.toLowerCase())) {
      return toast('This contact already exists!');
    } else {
      createContact(contact);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact is added!');
      setName('');
      setNumber('');
      onClose();
    }
  }, [isSuccess]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'Add contact'}
      </Button>
    </Form>
  );
}
