
import TasksColumn from './TasksColumn/TasksColumn';
import ButtonForColumn from './ButtonForColumn/ButtonForColumn';
import { ContainerMainBoard } from './MainDashboard.styled';



// import Loader from '../Loader/Loader';

const MainDashboard = () => {
  // const isLoading = useSelector(selectAuthLoading);
  

  return (
    <ContainerMainBoard>
      <TasksColumn />
      <ButtonForColumn />

    </ContainerMainBoard>
  );
};

export default MainDashboard;
