import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/auth-selectors';
//import Loader from 'components/Loader/Loader';

function PublicRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? children : <Navigate to="/home" />;
}

/*const PublicRoute = () => {
  
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};*/

export default PublicRoute;
