import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';

function PublicRoute({ component: Component }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? Component : <Navigate to="/home" />;
}

export default PublicRoute;
