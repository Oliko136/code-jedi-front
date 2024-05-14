import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  getAllBoardsThunk,
  getBoardByIdThunk,
} from '../../../redux/boards/boards-operations';

import { BoardListContainer, BoardItem } from './BoardList.styled';
import BoardListItem from '../BoardListItem/BoardListItem';
import { selectBoards } from '../../../redux/boards/boards-selectors.js';

const BoardList = () => {
  const [activeBoardId, setActiveBoardId] = useState(0);
  const boards = useSelector(selectBoards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  const handleClick = boardId => {
    dispatch(getBoardByIdThunk(boardId));
    setActiveBoardId(boardId);
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
        />
      </NavLink>
    </BoardItem>
  ));

  return (
    <BoardListContainer>{boards.length > 0 && elements}</BoardListContainer>
  );
};

export default BoardList;
