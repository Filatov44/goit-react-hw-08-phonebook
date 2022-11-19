import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogoContainer = styled.div`
    
`;

export const StyledLogoLink = styled(Link)`
  color: blue;
  font-size: 24px;
  text-decoration: none;
  border: 1px dotted blue;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    color: white;
    background-color: #0000ffc7;
  }
`;