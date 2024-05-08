import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
//import Loader from 'components/Loader/Loader';

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/auth/login" />
}

/*const PrivateRoute = () => {
  
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }
  if (!isLogin && !token) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet />;
};*/

export default PrivateRoute;
