//import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import ScreensPage from 'pages/ScreensPage/ScreensPage';
import { MainContainer } from './HomePage.styled';
//import { NavLink, Navigate } from 'react-router-dom';
import { selectAuthLoading } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isLoading = useSelector(selectAuthLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <MainContainer>
        <ScreensPage />
      </MainContainer>
    </>
  );
};

export default HomePage;
