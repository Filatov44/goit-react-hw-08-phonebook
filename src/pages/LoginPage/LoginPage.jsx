import LoginForm from "components/LoginForm/LoginForm";
import { StyledLoginPageContainer } from "./LoginPage.styled";
import { useSelector, useDispatch } from "react-redux";
import { login } from "redux/auth-operation";
import { islogin } from "redux/auth-selector";
import { Navigate } from "react-router-dom";

export default function LoginPage() {

    const isLogined = useSelector(islogin);
    const dispatch = useDispatch();

    const handleSubmit = data => {
        dispatch(login(data));
    };

    if (isLogined) {
        return <Navigate to="/contacts"/>
    };

    return (
        <StyledLoginPageContainer>
            <LoginForm onSubmit={handleSubmit} />
        </StyledLoginPageContainer>
    );
};