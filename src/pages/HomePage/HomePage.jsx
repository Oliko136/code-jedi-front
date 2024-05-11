//import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import ScreensPage from 'pages/ScreensPage/ScreensPage';
import { MainContainer, CardContainer } from './HomePage.styled';
// import { selectBoards } from '../../redux/boards/boards-selectors';
// import { getAllBoards } from '../../redux/boards/boards-operations';
// import { useEffect } from 'react';
//import { NavLink, Navigate } from 'react-router-dom';
import { selectAuthLoading } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

import BoardsPage from 'pages/BoardsPage/BoardsPage';

const HomePage = () => {
  // const boards = useSelector(selectBoards);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllBoards());
  // }, [dispatch]);

  const isLoading = useSelector(selectAuthLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {/* <MainContainer>
        <ScreensPage />
      </MainContainer> */}

      <CardContainer>
        <BoardsPage />
      </CardContainer>
    </>
  );
};

export default HomePage;
