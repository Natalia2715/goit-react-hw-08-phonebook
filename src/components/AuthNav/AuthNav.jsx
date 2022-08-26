import React from 'react';
import { Button, Stack } from '@mui/material';
import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Stack component="div" spacing={2} direction="row">
      <Button variant="outlined">
        <Link to="/register">Sign up</Link>
      </Button>
      <Button variant="outlined">
        <Link to="/login">Sign in</Link>
      </Button>
    </Stack>
  );
}
