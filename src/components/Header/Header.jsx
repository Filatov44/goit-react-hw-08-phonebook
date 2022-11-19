import LogoHome from "components/LogoHome/LogoHome";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { StyledHeaderContainer } from "./Header.styled";

import { islogin } from "redux/auth-selector";
import { useSelector } from "react-redux";

export default function Header() {
    const isLogined = useSelector(islogin);

    return (
      <>
        <StyledHeaderContainer>
          <LogoHome />
          {isLogined ? <UserMenu /> : <Navigation />}
        </StyledHeaderContainer>
      </>
    );
}