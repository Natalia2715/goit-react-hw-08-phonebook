import { useEffect, useState } from 'react';
import { useSignUpMutation } from 'redux/auth/authApi';
import { TextField, InputAdornment, Button, Stack } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MailIcon from '@mui/icons-material/Mail';
import { FormContainer, Form, Title } from './RegisterView.styled';
import toast, { Toaster } from 'react-hot-toast';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, { isSuccess, error }] = useSignUpMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setName('');
      setEmail('');
      setPassword('');
    } else if (error) {
      toast.error('Please, try again!');
    }
  }, [error, isSuccess]);

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, email, password };
    register(credentials);
  };

  return (
    <FormContainer>
      <Form>
        <Title>Registration</Title>

        <Stack
          spacing={2}
          sx={{ width: 330 }}
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <TextField
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="Name"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            type="submit"
            sx={{ fontWeight: 600, color: '#2000b9' }}
          >
            Sign up
          </Button>
        </Stack>
      </Form>
      <Toaster />
    </FormContainer>
  );
}
