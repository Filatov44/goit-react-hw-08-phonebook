import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { StyledLayoutContainer } from "./Layout.styled";

export default function Layout() {
    return (
        <StyledLayoutContainer>
            <Header />
            <Outlet />
            <Footer/>
        </StyledLayoutContainer>
    )
}