import { useState, useCallback, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import HomePageText from 'components/HomePageText/HomePageText';
import { MainContainer, Container } from './HomePage.styled';
import { selectAuthLoading } from '../../redux/auth/auth-selectors';
import {
  selectBoards,
  selectCurrentBoard,
} from '../../redux/boards/boards-selectors';

const HomePage = () => {
  const isLoading = useSelector(selectAuthLoading);
  const boards = useSelector(selectBoards);
  const currentBoard = useSelector(selectCurrentBoard);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = useCallback(() => {
    if (window.innerWidth < 1440) {
      setShowSidebar(false);
    }
  }, []);

  const escClick = useCallback(
    event => {
      if (event.code === 'Escape') {
        closeSidebar();
      }
    },
    [closeSidebar]
  );

  useEffect(() => {
    window.addEventListener('keydown', escClick);
    return () => {
      window.removeEventListener('keydown', escClick);
    };
  }, [escClick]);

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Sidebar showSidebar={showSidebar} />
      <MainContainer>
        <Header openSidebar={openSidebar} />
          {boards.length > 0 && !currentBoard.title && (
            <Navigate to={`/home/${boards[0].title}`} />
          )}
          {boards.length > 0 && <Outlet />}
          {!boards.length && <HomePageText />}
      </MainContainer>
    </Container>
  );
};

export default HomePage;
