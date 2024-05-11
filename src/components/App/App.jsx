import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import { selectAuthLoading } from '../../redux/auth/auth-selectors';
import PublicRoute from 'routes/PublicRoute/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';
import Loader from 'components/Loader/Loader';

const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('../../pages/ScreensPage/ScreensPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(selectAuthLoading);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isLoadingUser ? 
    ( <Loader /> ) :
    (
    <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<PublicRoute component={<Navigate to="/welcome" />} />} />
            <Route path="/welcome" element={<PublicRoute component={<WelcomePage />} />} />
            <Route path="/auth/:id" element={<PublicRoute component={<AuthPage />} />} />
            <Route path="/home" element={<PrivateRoute component={<HomePage />} />}>
              <Route path=":boardName" element={<PrivateRoute component={<ScreensPage />} />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ToastContainer autoClose={3000} />
        </Suspense>
    </>
  );
};

export default App;
