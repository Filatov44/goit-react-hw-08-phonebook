import styled from 'styled-components';

export const StyledFooter = styled.footer`
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid black;
`;

export const StyledFooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledFooterLink = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: blue;
  &:hover {
    color: red;
    scale: 1.1;
  }
`;

export const StyledFooterText = styled.p`
    font-size: 20px;
    margin-right: 10px;

`;

