// import { useSelector } from 'react-redux';
// import { selectAuthLoading } from '../../redux/auth/auth-selectors';
// import { selectBoards } from '../../redux/boards/boards-selectors';
import TasksColumn from './TasksColumn/TasksColumn';
import TasksCard from './TasksCard/TasksCard';
import ButtonForColumn from './ButtonForColumn/ButtonForColumn'

// import {useState } from 'react';
// import Loader from '../Loader/Loader';

const MainDashboard = () => {

  // const isLoading = useSelector(selectAuthLoading);
  // const boards = useSelector(selectBoards);

// с div может я переборщила
    return(
      
        <div>
           <div>
          {/* //  map column  по условию наличия колонок*/}
          <TasksColumn>
{/* map card  по условию наличия карточек*/}
<div>
<TasksCard/>
</div>
          </TasksColumn>
        </div>
<ButtonForColumn/>
        </div>
       


          
              
              
    
  )
}

export default MainDashboard