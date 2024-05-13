import { useDispatch, useSelector } from 'react-redux';
import { selectСolumns } from '../../../redux/column/column-selectors.js';
import { DivForColumns } from './TasksColumn.styled.jsx';

import TasksColumnItem from './TasksColumnItem.jsx';

import {getAllColumnsThunk} from '../../../redux/column/column-operations.js'

const TasksColumn = boardId => {
  const allColumns = useSelector(selectСolumns);

  const dispatch = useDispatch();

  const getAllCollumns = () => {
    dispatch(getAllColumnsThunk(boardId));
  };

  return (
    <DivForColumns>
      {
        // allColumns.length > 0 &&
        allColumns.map(column => (
          <TasksColumnItem key={column._id} column={column} />
        ))
      }
      
    </DivForColumns>
  );
};

export default TasksColumn;
