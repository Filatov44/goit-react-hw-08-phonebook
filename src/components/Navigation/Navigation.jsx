import { StyledNavContainer, StyledNavLink} from './Navigation.styled';

export default function Navigation() {
    return (
      <>
        <StyledNavContainer>
          <StyledNavLink to="/login">Login</StyledNavLink>
          <StyledNavLink to="/register">Sign Up</StyledNavLink>
        </StyledNavContainer>
      </>
    );
}