import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectToken,
} from '../../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }
  if (!isLogin && !token) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
