import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterLink,
  StyledFooterText,
} from './Footer.styled';

export default function Footer() {
    return (
      <StyledFooter>
        <StyledFooterContainer>
          <StyledFooterText>© Phonebook 2022 by</StyledFooterText>
          <StyledFooterLink href="https://github.com/Filatov44" target='_blank'>
            Sergiy Filatov
          </StyledFooterLink>
        </StyledFooterContainer>
      </StyledFooter>
    );
}