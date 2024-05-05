import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectToken,
} from '../../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};

export default PublicRoute;
