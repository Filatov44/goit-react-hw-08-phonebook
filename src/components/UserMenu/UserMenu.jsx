import {
  StyledMenuContainer,
  StyledMenuLink,
  StyledMenuText,
  StyledMenuBtn,
} from './UserMenu.styled';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from 'redux/auth-selector';
import { logout } from 'redux/auth-operation';

export default function UserMenu() {
    const dispatch = useDispatch()
    const user = useSelector(getUser)

    return (
        <StyledMenuContainer>
            <StyledMenuLink to="/contacts">Contacts</StyledMenuLink>
            <StyledMenuText>Hello, {user.name}</StyledMenuText>
            <StyledMenuBtn onClick={() => dispatch(logout())}>LogOut</StyledMenuBtn>
        </StyledMenuContainer>
    );
}
