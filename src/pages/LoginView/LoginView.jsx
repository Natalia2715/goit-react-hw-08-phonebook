import { useEffect, useState } from 'react';
import { useLogInMutation } from 'redux/auth/authApi';
import { TextField, InputAdornment, Button, Stack } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MailIcon from '@mui/icons-material/Mail';
import { FormContainer, Form, Title } from './LoginView.styled';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function LoginView() {
  const [login, { isSuccess, error }] = useLogInMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
      setEmail('');
      setPassword('');
    } else if (error) {
      toast.error('Please, try again!');
    }
  }, [error, isSuccess]);

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };
    login(credentials);
  };
  return (
    <FormContainer>
      <Form>
        <Title>Log in</Title>

        <Stack
          spacing={2}
          sx={{ width: 330 }}
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
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
            Log in
          </Button>
        </Stack>
      </Form>
      <Button variant="contained" sx={{ fontWeight: 600, marginTop: '15px' }}>
        <Link to="/register">Create an account</Link>
      </Button>
      <Toaster />
    </FormContainer>
  );
}
