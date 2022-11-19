import SignUpForm from 'components/SignUp/SignUp';
import { StyledSignUpPageContainer } from './SignUpPage.styled';
import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth-operation';

export default function SignUpPage() {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(signup(data));
  };

  return (
    <StyledSignUpPageContainer>
      <SignUpForm onSubmit={handleSubmit} />
    </StyledSignUpPageContainer>
  );
}
