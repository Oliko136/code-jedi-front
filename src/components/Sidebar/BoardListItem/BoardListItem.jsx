import React, { useState } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

import Modal from 'components/Modal/Modal';
//import EditBoardForm from '...';

// import { deleteBoard } from '../../../redux/'; ----------------- Імпорт функції deleteBoard з Redux для видалення дошки
// import { selectBoard } from '../../../redux/'; ----------------- Імпорт селектора selectBoard для отримання даних про дошку з Redux
// import sprite from '.....sprite.svg'; ----------------- Імпорт спрайту SVG
import css from './BoardListItem.module.css';

// Заглушка для EditBoardForm
const EditBoardForm = () => {
  return <div>Placeholder for EditBoardForm</div>;
};
const BoardListItem = ({ board }) => {
  // const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const currentBoard = useSelector(selectBoard);

  const handleDeleteBoard = boardId => {
    // dispatch(deleteBoard(boardId)).then(action => {
    //   if (action.type !== 'boards/deleteBoard/fulfilled') {
    //     return;
    //   }
    //   if (currentBoard._id === boardId) {
    //     navigate('/home');
    //   }
    // });
    console.log(`Deleting board with ID ${boardId}`);
  }; // Функція для видалення дошки та навігації на головну сторінку, якщо видаляється активна дошка

  return (
    <>
      {/* ------------Посилання на сторінку дошки з назвою та іконкою */}
      {/* <NavLink
        to={`/home/${board.title}`}
        state={{ from: location }}
        className={css.boardItem}
      > */}
      <div className={css.boardItem}>
        <div className={css.boardItemTitleBlock}>
          <svg className={css.boardIcon}>
            {/* <use href={`${sprite}#${board.icon}`}></use> */}
            {/* Placeholder for icon */}
          </svg>
          <h2 className={css.boardTitle}>{board.title}</h2>
        </div>

        {/*----------------- Блок з кнопками для редагування та видалення дошки */}
        <div>
          <ul className={css.boardItemButtonsBlock}>
            {/* --------------------- Кнопка для редагування дошки */}
            <li>
              <button
                className={css.boardBtn}
                type="button"
                onClick={toggleModal}
              >
                <svg className={css.boardBtnSvg}>
                  {/* <use href={`${sprite}#...`}></use> */}
                </svg>
              </button>
            </li>
            {/* ----------------------- Кнопка для видалення дошки */}
            <li>
              <button
                onClick={() => handleDeleteBoard(board._id)}
                className={css.boardBtn}
                type="button"
              >
                <svg className={css.boardBtnSvg}>
                  {/* <use href={`${sprite}#...`}></use> */}
                  {/* Placeholder for delete icon */}
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* </NavLink> */}

      {/* ----------------Модальне вікно для редагування дошки */}
      {showModal && (
        <Modal closeModal={toggleModal}>
          <EditBoardForm
            boardId={board._id}
            initialTitle={board.title}
            initialIconName={board.icon}
            initialBackgroundName={board.background}
            handleClose={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

export default BoardListItem;
