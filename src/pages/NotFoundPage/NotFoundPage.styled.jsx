import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledNotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  height: 100vh;
  background-image: url('https://img.lovepik.com/free-png/20210918/lovepik-404-page-error-png-image_400217866_wh1200.png');
  background-position: center;
`;

export const StyledNotFoundPageText = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: red;
  padding-top: 2px;
  padding-bottom: 5px;
`;

export const StyledNotFoundPageLink = styled(Link)`
  font-size: 32px;
  font-weight: 700;
  padding: 5px;
  color: blue;
  background-color: #ffffff;
  text-decoration: none;
  border: 2px solid blue;
  border-radius: 10px;

  &:hover {
    color: #ffffff;
    background-color: blue;
  }
`;
