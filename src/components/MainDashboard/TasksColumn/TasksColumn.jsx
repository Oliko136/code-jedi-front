import {
  useDispatch,
  // useDispatch,
  useSelector,
} from 'react-redux';
import { selectСolumns } from '../../../redux/column/column-selectors.js';
import { DivForColumns } from './TasksColumn.styled.jsx';
import ButtonForColumn from '../ButtonForColumn/ButtonForColumn.jsx';
import TasksColumnItem from './TasksColumnItem.jsx';
import { selectCurrentBoard } from '../../../redux/boards/boards-selectors.js';
import { getAllColumnsThunk } from '../../../redux/column/column-operations.js';
import { useEffect } from 'react';
// import { getAllColumnsThunk } from 'redux/column/column-operations.js';

const TasksColumn = () => {
  const columns = useSelector(selectСolumns);
  const board = useSelector(selectCurrentBoard);

  const { _id } = board;
  console.log('_id :>> ', _id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllColumnsThunk(_id));
  }, [_id, dispatch]);

  return (
    <DivForColumns>
      {
        // columns.length > 0 &&
        columns.map(column => (
          <TasksColumnItem key={column._id} column={column} />
        ))
      }
      <ButtonForColumn />
    </DivForColumns>
  );
};

export default TasksColumn;
