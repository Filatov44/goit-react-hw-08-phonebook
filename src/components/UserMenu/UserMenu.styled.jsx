import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const StyledMenuLink = styled(NavLink)`
    color: blue;
    font-size: 24px;
    text-decoration: none;
    margin-right: 25px;
    padding: 5px;

    &.active{
        color: red;
    }
`;

export const StyledMenuText = styled.span`
  font: italic 1.2em 'Fira Sans', serif;
  font-size: 20px;
  color: black;
  margin-right: 25px;
  
`;

export const StyledMenuBtn = styled.button`
    font-size: 20px;
    border: 1px solid blue;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    color: blue;
    background-color: #ffffff;
    &:hover {
        /* border: 1px solid red; */
        color: white;
        background-color: #0000ffc7;
    }
`;