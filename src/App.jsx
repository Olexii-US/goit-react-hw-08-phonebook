import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { refreshUser } from 'redux/auth/authThunk';
import { useAuth } from 'hooks/useAuth';

import Layout from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivatedRoute } from 'components/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styleGlobal/theme';
import NotFound from 'components/NotFound/NotFound';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<Register />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivatedRoute component={<Contacts />} redirectTo="/login" />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    )
  );
};
