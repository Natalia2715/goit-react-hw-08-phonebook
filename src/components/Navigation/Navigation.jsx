import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from './Navigation.styled';
import { authSelectors } from 'redux/auth';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Stack component="nav" spacing={2} direction="row">
      <Button variant="outlined">
        <Link to="/">Home</Link>
      </Button>
      {isLoggedIn && (
        <Button variant="outlined">
          <Link to="/contacts">Contacts</Link>
        </Button>
      )}
    </Stack>
  );
};

export default Navigation;
