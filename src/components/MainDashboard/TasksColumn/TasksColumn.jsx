import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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
    if(_id) {
      dispatch(getAllColumnsThunk(_id));
    }
  }, [_id, dispatch]);

  const handleDeleteColumn = async colunmId => {
    try {
      dispatch(deleteColumnThunk({ boardId: _id, id: colunmId }));
     
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
            allColumns={columns}
            column={column}
            onDeleteColumn={() => handleDeleteColumn(column._id)}
          />
        ))}
    </DivForColumns>
  );
};

export default TasksColumn;
