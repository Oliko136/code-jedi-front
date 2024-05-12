import { useSelector } from 'react-redux';
import { selectAuthLoading } from '../../redux/auth/auth-selectors';
import { selectBoards } from '../../redux/boards/boards-selectors';

// import {useState } from 'react';
import Loader from '../Loader/Loader';

const MainDashboard = () => {

  const isLoading = useSelector(selectAuthLoading);
  const boards = useSelector(selectBoards);

    return(
      isLoading ? (
        <Loader />
      ) : (
           
              boards.length > 1 ?
                <p>здесь будет куча карточек и колонок</p> :
                <p>здесь будет кнопка создания первой колонки</p>
              
    )
  )
}

export default MainDashboard