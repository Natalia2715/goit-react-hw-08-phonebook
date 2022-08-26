import { useState } from 'react';
import { useLogInMutation } from 'redux/auth/authApi';
import { TextField, InputAdornment, Button, Stack } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MailIcon from '@mui/icons-material/Mail';
import { FormContainer, Form, Title } from './LoginView.styled';

export default function LoginView() {
  const [login] = useLogInMutation();
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

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };
    login(credentials);
    setEmail('');
    setPassword('');
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
    </FormContainer>
  );
}
