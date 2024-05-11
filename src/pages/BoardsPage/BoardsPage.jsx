import TasksColumn from 'components/Tasks/TasksColumn/TasksColumn';
import { Board, ProjectTitle } from './BoardsPage.styled';

const BoardsPage = () => {
  //   const name = projectName();

  return (
    <Board>
      <ProjectTitle>{'Project title'}</ProjectTitle>
      <TasksColumn />
    </Board>
  );
};

export default BoardsPage;
