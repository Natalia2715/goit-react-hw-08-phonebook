import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Name, Number } from './ContactListElement.styled';

export default function ContactListElement({ item }) {
  const { id, name, number } = item;

  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact is deleted!');
    }
  }, [isSuccess]);

  return (
    <ListItem
      secondaryAction={
        <IconButton
          type="button"
          disabled={isDeleting}
          onClick={() => {
            deleteContact(id);
          }}
        >
          {isDeleting ? <Loader size={12} /> : <DeleteIcon />}
        </IconButton>
      }
    >
      <ListItemText
        primary={<Name>{name} </Name>}
        secondary={<Number>{number}</Number>}
        sx={{ fontSize: '2rem' }}
      />
      <Toaster />
    </ListItem>
  );
}

ContactListElement.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
