// import { useSelector } from 'react-redux';
// import { selectAuthLoading } from '../../redux/auth/auth-selectors';
// import { selectBoards } from '../../redux/boards/boards-selectors';
import TasksColumn from './TasksColumn/TasksColumn';
import ButtonForColumn from './ButtonForColumn/ButtonForColumn'
import {ContainerMainBoard} from './MainDashboard.styled'

// import {useState } from 'react';
// import Loader from '../Loader/Loader';

const MainDashboard = () => {

  // const isLoading = useSelector(selectAuthLoading);
  // const boards = useSelector(selectBoards);

// с div может я переборщила
    return(
    // map column  по условию наличия колонок*/}
      <ContainerMainBoard>
        
       
        <TasksColumn/>
        <ButtonForColumn/>
      </ContainerMainBoard>
      
    
  )
}

export default MainDashboard