import { Routes, Route } from 'react-router-dom';
import AppContainer from './Container/Container';
import Appbar from './AppBar/AppBar';
import { useCurrentUserQuery } from 'redux/auth/authApi';
import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublickRoute';
import Loader from './Loader/Loader';

const HomeView = lazy(() => import('../pages/HomeView/HomeView'));
const RegisterView = lazy(() => import('../pages/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../pages/LoginView/LoginView'));
const ContactsView = lazy(() => import('../pages/ContactsView/ContactsView'));

export default function App() {
  const { token } = useSelector(state => state.auth);
  useCurrentUserQuery(undefined, {
    skip: !token,
  });

  return (
    <Suspense fallback={<Loader />}>
      <AppContainer>
        <Appbar />

        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<HomeView />} />
          </Route>

          <Route path="/register" element={<PublicRoute restricted />}>
            <Route path="/register" element={<RegisterView />} />
          </Route>

          <Route
            path="/login"
            element={<PublicRoute restricted navTo={'/contacts'} />}
          >
            <Route path="/login" element={<LoginView />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsView />} />
          </Route>
        </Routes>
      </AppContainer>
    </Suspense>
  );
}
