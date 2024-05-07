import React, { useState } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

import Modal from 'components/Modal/Modal';
// import EditBoardForm from './EditBoardForm'; // Виправте шлях

// import { deleteBoard } from '../../../redux/'; ----------------- Імпорт функції deleteBoard з Redux для видалення дошки
// import { selectBoard } from '../../../redux/'; ----------------- Імпорт селектора selectBoard для отримання даних про дошку з Redux
import {
  BoardItem,
  BoardItemTitleBlock,
  BoardIcon,
  BoardTitle,
  BoardItemButtonsBlock,
  BoardBtn,
  BoardBtnSvg,
} from './BoardListItem.styled';

// Заглушка для EditBoardForm
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
  };

  return (
    <>
      {/* ------------Посилання на сторінку дошки з назвою та іконкою */}
      {/*<StyledNavLink
        to={`/home/${board.title}`}
        state={{ from: location }}
        className="boardItem"
      >
      </StyledNavLink>
      */}
      <BoardItem>
        <BoardItemTitleBlock>
          <BoardIcon>
            {/*<StyledSVG>
      <use href={`${sprite}#${icon}`} />
    </StyledSVG>*/}
            {/* Заглушка для іконки */}
          </BoardIcon>
          <BoardTitle>{board.title}</BoardTitle>
        </BoardItemTitleBlock>

        {/*----------------- Блок з кнопками для редагування та видалення дошки */}
        <div>
          <BoardItemButtonsBlock>
            {/* --------------------- Кнопка для редагування дошки */}
            <li>
              <BoardBtn type="button" onClick={toggleModal}>
                <BoardBtnSvg>
                  {/* <StyledSVG>
      <use href={`${sprite}#${icon}`} />
    </StyledSVG> */}
                </BoardBtnSvg>
              </BoardBtn>
            </li>

            {/* ----------------------- Кнопка для видалення дошки */}
            <li>
              <BoardBtn
                type="button"
                onClick={() => handleDeleteBoard(board._id)}
              >
                <BoardBtnSvg>
                  {/*<StyledSVG>
      <use href={`${sprite}#${icon}`} />
    </StyledSVG>*/}
                </BoardBtnSvg>
              </BoardBtn>
            </li>
          </BoardItemButtonsBlock>
        </div>
      </BoardItem>

      {/* ----------------Модальне вікно для редагування дошки */}
      {showModal && (
        <Modal closeModal={toggleModal}>
          {/* <EditBoardForm
            boardId={board._id}
            initialTitle={board.title}
            initialIconName={board.icon}
            initialBackgroundName={board.background}
            handleClose={toggleModal}
          /> */}
          {/* Закоментовано виклик EditBoardForm */}
        </Modal>
      )}
    </>
  );
};

export default BoardListItem;
