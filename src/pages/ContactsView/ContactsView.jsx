import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import AddContact from 'components/ContactForm/AddContact';
import { Container, List } from './ContactsView.styled';

export default function ContactsView() {
  return (
    <Container>
      <List>
        <Filter />
        <ContactList />
      </List>
      <AddContact />
    </Container>
  );
}
