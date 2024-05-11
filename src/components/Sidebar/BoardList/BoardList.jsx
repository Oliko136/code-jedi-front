import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllBoardsThunk, getBoardByIdThunk } from '../../../redux/boards/boards-operations';

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

  console.log(boards);

  const handleClick = boardId => {
    dispatch(getBoardByIdThunk(boardId));
    setActiveBoardId(boardId);
  };

  const elements = boards.map(({ _id, title }) =>
    <BoardItem
      key={_id}
      onClick={() => handleClick(_id)}
      className={activeBoardId === _id ? 'activeBoard' : ''}> <BoardListItem board={{ title }} /></ BoardItem>);

  return (
    <BoardListContainer>
      {boards.length && elements }
      {/*boards?.map(board => (
        <BoardItem
          key={board._id}
          // onClick={() => handleClick(board._id)}
          // className={activeBoardId === board._id ? 'activeBoard' : ''}
        >
          <BoardListItem board={board} allBoards={boards} />
        </BoardItem>
      ))   
    */}
  </BoardListContainer>
  );
};

export default BoardList;
