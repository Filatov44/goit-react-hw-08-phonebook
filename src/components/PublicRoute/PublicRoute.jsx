import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { islogin } from 'redux/auth-selector';

export default function PublicRoute() {
    const isLogined = useSelector(islogin);

    if (isLogined) {
        return <Navigate to="/contacts" />;
    }

    return <Outlet/>
}