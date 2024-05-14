import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { DivForColumns } from './TasksColumn.styled.jsx';
import TasksColumnItem from './TasksColumnItem.jsx';
import { selectCurrentBoard } from '../../../redux/boards/boards-selectors.js';
import { selectСolumns } from '../../../redux/column/column-selectors.js';
import {
  deleteColumnThunk,
  getAllColumnsThunk,
} from '../../../redux/column/column-operations.js';

const TasksColumn = () => {
  const columns = useSelector(selectСolumns);
  const board = useSelector(selectCurrentBoard);
  const { _id } = board;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllColumnsThunk(_id));
  }, [_id, dispatch]);

  const TOASTER = {
    style: {
      border: '2px solid #bedbb0',
      backgroundColor: '#1f1f1f',
      color: '#fff',
      textAlign: 'center',
    },
    position: 'top-center',
    duration: 2000,
  };

  const handleDeleteColumn = async colunmId => {
    try {
      dispatch(deleteColumnThunk({ boardId: _id, id: colunmId }));
      toast('You have successfully deleted the column ✅', TOASTER);
      dispatch(getAllColumnsThunk(_id));
    } catch (error) {
      return error.message;
    }
  };

  return (
    <DivForColumns>
      {columns.length > 0 &&
        columns.map(column => (
          <TasksColumnItem
            key={column._id}
            column={column}
            onDeleteColumn={() => handleDeleteColumn(column._id)}
          />
        ))}
    </DivForColumns>
  );
};

export default TasksColumn;
