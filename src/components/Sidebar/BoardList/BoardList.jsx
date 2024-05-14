import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  getAllBoardsThunk,
  getBoardByIdThunk,
  deleteBoardThunk
} from '../../../redux/boards/boards-operations';
import { BoardListContainer, BoardItem } from './BoardList.styled';
import BoardListItem from '../BoardListItem/BoardListItem';
import { selectBoards } from '../../../redux/boards/boards-selectors.js';

const BoardList = () => {
  const [activeBoardId, setActiveBoardId] = useState(null);
  const boards = useSelector(selectBoards);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeBoardIndex = boards.findIndex(board => board._id === activeBoardId);
  const nextBoardId = activeBoardIndex > 0 ? boards[activeBoardIndex - 1]?._id : boards[activeBoardIndex + 1]?._id;
  const nextBoardName = boards.find(board => board?._id === nextBoardId)?.title;

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, [dispatch]);


    if (!activeBoardId && boards.length > 0) {
      dispatch(getBoardByIdThunk(boards[0]._id));
      setActiveBoardId(boards[0]._id);
    }



  const handleClick = boardId => {
    dispatch(getBoardByIdThunk(boardId));
    setActiveBoardId(boardId);
  };

  const handleDeleteBoard = boardId => {
    dispatch(deleteBoardThunk(boardId)).then(action => {
      if (action.type !== 'boards/deleteBoard/fulfilled') {
        return;
      }
      navigate(nextBoardId ? `/home/${nextBoardName}` : '/');
      dispatch(getBoardByIdThunk(nextBoardId));
      setActiveBoardId(nextBoardId);
    });
  };

  const elements = boards.map(({ _id, title, icon }) => (
    <BoardItem
      key={_id}
      onClick={() => handleClick(_id)}
      className={activeBoardId === _id ? 'activeBoard' : ''}
    >
      <NavLink to={`/home/${title}`}>
        <BoardListItem
          board={{ _id, title, icon }}
          activeBoardId={activeBoardId}
          onDelete={() => handleDeleteBoard(_id)}
        />
      </NavLink>
    </BoardItem>
  ));

  return (
    <BoardListContainer>{boards.length > 0 && elements}</BoardListContainer>
  );
};

export default BoardList;
