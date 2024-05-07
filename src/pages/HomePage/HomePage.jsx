//import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { MainContainer, CreateBoard } from './HomePage.styled';
import { NavLink, Navigate } from 'react-router-dom';
import { selectAuthLoading } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';

const HomePage = () => {
  const isLoading = useSelector(selectAuthLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <MainContainer>
      <p>
        Before starting your project, it is essential{' '}
        <CreateBoard>to create a board</CreateBoard> to visualize and track all
        the necessary tasks and milestones. This board serves as a powerful tool
        to organize the workflow and ensure effective collaboration among team
        members.
      </p>
    </MainContainer>
      <Sidebar showSidebar={true} />
    </>
  );
};

export default HomePage;
