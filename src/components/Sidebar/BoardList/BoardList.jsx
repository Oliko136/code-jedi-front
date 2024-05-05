//import { useSelector, useDispatch } from 'react-redux';
//import { useState } from 'react';

//import { getBoard } from '../../../redux/';  ----- Імпорт функції getBoard для отримання даних про дошку з Redux
//import { selectUser } from '../../../redux/'; // Імпорт селектора selectUser для отримання даних користувача з Redux

import BoardListItem from '../BoardListItem/BoardListItem';

import css from './BoardList.module.css';

const BoardList = () => {
  // Заглушка для даних користувача
  const user = {
    boards: [
      { _id: 1, name: 'Board 1' },
      { _id: 2, name: 'Board 2' },
    ],
  };
  const boards = user.boards;
  //----------------------------- Отримання даних про користувача з Redux
  // const dispatch = useDispatch();
  // const [activeBoardId, setActiveBoardId] = useState(null);

  //----------------------------- Функція, яка викликається при кліку на дошку
  // const handleClick = boardId => {
  //   dispatch(getBoard(boardId));
  //   setActiveBoardId(boardId);
  // };

  return (
    // Список дошок
    <ul className={css.boardList}>
      {/* ------------------Проходження по кожній дошці і рендеринг */}
      {boards?.map(board => (
        <li
          key={board._id}
          // onClick={() => handleClick(board._id)}
          className={`${
            /*activeBoardId === board._id ? css.activeBoard : ''*/ ''
          }`}
        >
          {/* --------------- Рендеринг компонента BoardListItem з даними про дошку */}
          <BoardListItem board={board} allBoards={boards} />
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
