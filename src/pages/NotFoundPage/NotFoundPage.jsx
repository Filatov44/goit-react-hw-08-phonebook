import {
  StyledNotFoundPageContainer,
  StyledNotFoundPageText,
  StyledNotFoundPageLink,
} from './NotFoundPage.styled';

export default function NotFoundPage() {
    return (
        <StyledNotFoundPageContainer>
            <StyledNotFoundPageText>Page not found</StyledNotFoundPageText>
            <StyledNotFoundPageLink to="/">Click to home page</StyledNotFoundPageLink>
        </StyledNotFoundPageContainer>
    )
}