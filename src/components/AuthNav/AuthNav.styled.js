import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-weight: 600;

  &.active {
    color: #2000b9;
  }
`;
