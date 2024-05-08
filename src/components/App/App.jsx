import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from 'components/Routes/PublicRoute/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute/PrivateRoute';
import { lazy } from 'react';

const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('../../pages/ScreensPage/ScreensPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route element={<PublicRoute />}>
        <Route path="/auth/:id" element={<AuthPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
        <Route path="/home" element={<HomePage />}>
          <Route path="/home/:boardName" element={<ScreensPage />} />
        </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
