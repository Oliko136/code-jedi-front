// import React, { useState } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import Modal from 'components/Modal/ModalKill';
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
import sprite from '../../../assets/svg/sprite.svg';

// Заглушка для EditBoardForm
const BoardListItem = ({ board, selectedIcon }) => {
  // const location = useLocation();
  // const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
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
            <svg>
              <use href={`${sprite}#${selectedIcon}`}></use>
            </svg>
          </BoardIcon>
          <BoardTitle>{board.title}</BoardTitle>
        </BoardItemTitleBlock>

        {/*----------------- Блок з кнопками для редагування та видалення дошки */}
        <div>
          <BoardItemButtonsBlock>
            {/* --------------------- Кнопка для редагування дошки */}
            <li>
              {/* <BoardBtn type="button" onClick={toggleModal}> */}
              <BoardBtnSvg>
                <svg>
                  <use href={`${sprite}#pencil`}></use>
                </svg>
              </BoardBtnSvg>
              {/* </BoardBtn> */}
            </li>

            {/* ----------------------- Кнопка для видалення дошки */}
            <li>
              <BoardBtn
                type="button"
                onClick={() => handleDeleteBoard(board._id)}
              >
                <BoardBtnSvg>
                  <svg>
                    <use href={`${sprite}#trash`}></use>
                  </svg>
                </BoardBtnSvg>
              </BoardBtn>
            </li>
          </BoardItemButtonsBlock>
        </div>
      </BoardItem>

      {/* ----------------Модальне вікно для редагування дошки */}
      {/* {showModal && (
        <Modal closeModal={toggleModal}>
           <EditBoardForm
            boardId={board._id}
            initialTitle={board.title}
            initialIconName={board.icon}
            initialBackgroundName={board.background}
            handleClose={toggleModal}
          /> 
          
        </Modal>
      )} */}
    </>
  );
};

export default BoardListItem;
