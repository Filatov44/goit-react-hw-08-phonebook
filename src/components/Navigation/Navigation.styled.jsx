import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 25px;
  width: 250px;
`;

export const StyledNavLink = styled(NavLink)`
  color: blue;
  font-size: 24px;
  text-decoration: none;

  &.active {
    color: red;
  }
`;