import React, { useEffect } from 'react';
// import Phonebook from './Phonebook/Phonebook';
// import { StyledAppWrapper } from 'App.styled';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth-operation';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage/>} />
          {/* <StyledAppWrapper>
          <Phonebook />
        </StyledAppWrapper> */}
        </Route>
      </Routes>
    </>
  );
};
