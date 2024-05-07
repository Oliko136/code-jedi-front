import React from 'react';

//import { useSelector, useDispatch } from 'react-redux';
//import { useState } from 'react';

//import { getBoard } from '../../../redux/';  ----- Імпорт функції getBoard для отримання даних про дошку з Redux
//import { selectUser } from '../../../redux/'; // Імпорт селектора selectUser для отримання даних користувача з Redux

import { BoardListContainer, BoardItem } from './BoardList.styled';
import BoardListItem from '../BoardListItem/BoardListItem';

const BoardList = ({ boards }) => {
  // Заглушка для даних користувача
  /*const user = {
    boards: [
      { _id: 1, name: 'Board 1' },
      { _id: 2, name: 'Board 2' },
    ],
  };*/

  // -----------------------------Видалимо дубльоване оголошення 'boards'.
  // const boards = user.boards;

  //----------------------------- Отримання даних про користувача з Redux
  // const dispatch = useDispatch();
  // const [activeBoardId, setActiveBoardId] = useState(null);

  //----------------------------- Функція, яка викликається при кліку на дошку
  // const handleClick = boardId => {
  //   dispatch(getBoard(boardId));
  //   setActiveBoardId(boardId);
  // };
  return (
    <BoardListContainer>
      {boards?.map(board => (
        <BoardItem
          key={board._id}
          // onClick={() => handleClick(board._id)}
          // className={activeBoardId === board._id ? 'activeBoard' : ''}
        >
          <BoardListItem board={board} allBoards={boards} />
        </BoardItem>
      ))}
    </BoardListContainer>
  );
};

export default BoardList;
