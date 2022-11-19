import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { current } from 'redux/auth-operation';
import { Route, Routes } from 'react-router-dom';
import { getLoadingUserStatus } from 'redux/auth-selector';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import { Loader } from './Loader/Loader';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const ContactPage = lazy(() => import('pages/ContactPage/ContactPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      {isLoadingUser ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route element={<PublicRoute />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<SignUpPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="contacts" element={<ContactPage />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};
