import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledMenuLink = styled(NavLink)`
    color: blue;
    font-size: 24px;
    text-decoration: none;

    &.active{
        color: red;
    }
`;

export const StyledMenuText = styled.span`
    font-size: 16px;
    color: black;
`;

export const StyledMenuBtn = styled.button`
    padding: 5px;
    cursor: pointer;
`;