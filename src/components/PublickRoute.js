import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute({ restricted = false, navTo = '/' }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={navTo} /> : <Outlet />;
}
