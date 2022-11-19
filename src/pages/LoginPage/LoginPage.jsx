import LoginForm from 'components/LoginForm/LoginForm';
import { StyledLoginPageContainer } from './LoginPage.styled';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth-operation';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(login(data));
  };

  return (
    <StyledLoginPageContainer>
      <LoginForm onSubmit={handleSubmit} />
    </StyledLoginPageContainer>
  );
}
