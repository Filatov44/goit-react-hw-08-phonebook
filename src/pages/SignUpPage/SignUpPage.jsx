import SignUpForm from "components/SignUp/SignUp";
import { StyledSignUpPageContainer } from "./SignUpPage.styled";
import { useSelector, useDispatch } from 'react-redux';
import { signup } from "redux/auth-operation";
import { islogin } from 'redux/auth-selector';
import { Navigate } from 'react-router-dom';

export default function SignUpPage() {
  const isLogined = useSelector(islogin);
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(signup(data));
  };

  if (isLogined) {
    return <Navigate to="/contacts" />;
    };

    return (
      <StyledSignUpPageContainer>
        <SignUpForm onSubmit={handleSubmit} />
      </StyledSignUpPageContainer>
    );
}